/* ─── Wisdom mode: context gathering + LLM calls ────────────────────────────
 * Two transports, chosen by the endpoint setting:
 *   "direct" (default) — the browser talks straight to the Gemini free tier
 *                        with the key baked in at build time (CORS-approved).
 *   an https:// URL     — posts { question, context, history } to the tiny
 *                        Cloudflare Worker in /worker, which holds the key
 *                        server-side and rate-limits per IP.
 */

import { loadFormulaSheets } from '../data/formulas';

export type WisdomMessage = { role: 'user' | 'assistant'; text: string };

/** Structural concept shape — avoids importing the NomadApp module (no cycles). */
type MiniConcept = { title?: string; section?: string; content?: string };

/** Build-time overridable; direct mode ships the key so wisdom works out of the box. */
export const GEMINI_API_KEY: string = (import.meta as any).env?.VITE_GEMINI_API_KEY || 'AIzaSyD-knIlTd1KpnreqwkCTABfBQ-s8GycoXg';
const GEMINI_MODEL = (import.meta as any).env?.VITE_GEMINI_MODEL || 'gemini-2.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

export const DIRECT_ENDPOINT = 'direct';
export const DEFAULT_WISDOM_ENDPOINT = DIRECT_ENDPOINT;
const ENDPOINT_KEY = 'nomad-wisdom-endpoint';

export function getWisdomEndpoint(): string {
  try {
    const saved = localStorage.getItem(ENDPOINT_KEY);
    if (saved) return saved.trim();
  } catch { /* SSR / private mode */ }
  return DEFAULT_WISDOM_ENDPOINT;
}

export function setWisdomEndpoint(url: string): void {
  try { localStorage.setItem(ENDPOINT_KEY, url.trim()); } catch { /* ignore */ }
}

const isDirect = (endpoint: string) => !/^https?:\/\//i.test(endpoint);

const SYSTEM = `You are "wisdom", the optional AI companion inside Nomad, a focused JEE Main/Advanced study app.

Rules:
- Answer from the provided context (Nomad notes and formula sheets) whenever it is relevant; lean on the formulas quoted there and show which one you used.
- If the context does not contain the answer, say so plainly, then answer from your own knowledge and mark it [outside nomad].
- Short punchy sentences. No walls of text. Use numbered steps for derivations.
- Write math in LaTeX: $...$ inline, $$...$$ for display lines.
- Pure study tone: no emoji, no greetings, no filler.`;

/* ─── Context retrieval ─────────────────────────────────────────────────── */

const STOP = new Set(['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'any', 'can', 'her', 'was', 'one', 'our', 'out', 'has', 'have', 'this', 'that', 'these', 'those', 'with', 'from', 'which', 'what', 'when', 'where', 'who', 'how', 'why', 'does', 'did', 'give', 'given', 'following', 'correct', 'statement', 'statements', 'option', 'options', 'question']);

/** Morphology-light normalisation: capacities→capacity, stores→store, stored→store/stored. */
function variants(w: string): string[] {
  const out = [w];
  if (w.length > 4) {
    if (w.endsWith('ies')) out.push(w.slice(0, -3) + 'y');
    else if (w.endsWith('es') && !/(s|x|z|ch|sh)es$/.test(w)) out.push(w.slice(0, -2));
    else if (w.endsWith('s') && !w.endsWith('ss')) out.push(w.slice(0, -1));
    if (w.endsWith('ed') && w.length > 5) { out.push(w.slice(0, -2)); out.push(w.slice(0, -1)); }
    if (w.endsWith('ing') && w.length > 6) { out.push(w.slice(0, -3)); out.push(w.slice(0, -3) + 'e'); }
    // Shared stem for long words: capacitor ↔ capacitance (skips ies-plurals, so
    // "capacities" never masquerades as "capacitor").
    if (w.length >= 8 && !w.endsWith('ies')) out.push(w.slice(0, 7));
  }
  return out;
}

function keys(s: string): Set<string> {
  const out = new Set<string>();
  for (const w of (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(/\s+/)) {
    if (w.length <= 2 || STOP.has(w)) continue;
    for (const v of variants(w)) out.add(v);
  }
  return out;
}

function tokenize(s: string): Set<string> {
  return keys(s);
}

function score(queryKeys: Set<string>, title: string, section: string, content: string): number {
  const t = keys(title);
  const s = keys(section);
  const c = keys((content || '').slice(0, 6000));
  let sc = 0;
  for (const w of queryKeys) {
    if (t.has(w)) sc += 6;
    if (s.has(w)) sc += 3;
    if (c.has(w)) sc += 1;
  }
  return sc;
}

function truncate(text: string, max: number): string {
  if (!text || text.length <= max) return text || '';
  const cut = text.slice(0, max);
  const lastBreak = cut.lastIndexOf(' ');
  return (lastBreak > max * 0.6 ? cut.slice(0, lastBreak) : cut) + ' …';
}

/**
 * Pull the most relevant notes + formulas from the site's own database and
 * flatten them into a prompt section. Purely local — no network.
 */
export async function buildContext(question: string, concepts: MiniConcept[]): Promise<string> {
  const qTokens = tokenize(question);
  if (!qTokens.size) return '';

  const scored = (concepts || [])
    .filter(c => c && (c.title || c.content))
    .map(c => ({
      c,
      sc: score(qTokens, c.title || '', c.section || '', c.content || ''),
    }))
    .filter(x => x.sc >= 6)
    .sort((a, b) => b.sc - a.sc)
    .slice(0, 5);

  const parts: string[] = [];

  if (scored.length) {
    parts.push('## Relevant notes from the Nomad database');
    for (const { c } of scored) {
      parts.push(`### ${c.title || 'Untitled'}${c.section ? ` (${c.section})` : ''}\n${truncate(c.content || '', 900)}`);
    }
  }

  // Formula sheets: match on sheet title first, then on raw formula text.
  const sheets = await loadFormulaSheets().catch(() => [] as any[]);
  if (sheets.length) {
    const ranked = sheets
      .map(sh => ({ sh, sc: score(qTokens, sh.title || '', '', ((sh.mostImportant || []).join(' ') + ' ' + (sh.important || []).join(' '))) }))
      .filter(x => x.sc >= 3)
      .sort((a, b) => b.sc - a.sc)
      .slice(0, 2);
    for (const { sh } of ranked) {
      const formulas = [...(sh.mostImportant || []).slice(0, 4), ...(sh.important || []).slice(0, 2)];
      if (formulas.length) {
        parts.push(`## Formulas — ${sh.title}\n${formulas.map(f => truncate(String(f), 220)).join('\n')}`);
      }
    }
  }

  return parts.join('\n\n');
}

/* ─── Transports ─────────────────────────────────────────────────────────── */

/** Direct Gemini call (free tier, key bundled at build time, CORS-approved). */
async function askGemini(context: string, history: WisdomMessage[], question: string, signal?: AbortSignal): Promise<string> {
  const contents = [
    ...(history || []).slice(-6).map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.text }] })),
    { role: 'user', parts: [{ text: context ? `${context}\n\n---\n\n${question}` : question }] },
  ];

  let res: Response;
  try {
    res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': GEMINI_API_KEY },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM }] },
        contents,
        generationConfig: { temperature: 0.4, maxOutputTokens: 1200 },
      }),
      signal,
    });
  } catch (e: any) {
    if (e?.name === 'AbortError') throw e;
    throw new Error('offline — wisdom needs a network connection.');
  }

  if (res.status === 429) throw new Error('rate limited — wait a few seconds and ask again.');
  if (res.status === 400 || res.status === 403) throw new Error('gemini rejected the key — check VITE_GEMINI_API_KEY.');
  if (!res.ok) throw new Error(`gemini failed: HTTP ${res.status}`);

  const data = await res.json();
  const text = (data?.candidates?.[0]?.content?.parts || [])
    .map((p: any) => p?.text || '')
    .join('')
    .trim();
  if (!text) {
    if (data?.promptFeedback?.blockReason) throw new Error(`blocked: ${data.promptFeedback.blockReason}`);
    throw new Error('wisdom returned an empty response');
  }
  return text;
}

/**
 * Ask the model. Returns the assistant text, or throws a readable error
 * (rate limit, bad payload, unreachable endpoint).
 */
export async function askWisdom(
  question: string,
  history: WisdomMessage[],
  concepts: MiniConcept[],
  signal?: AbortSignal,
): Promise<string> {
  const endpoint = getWisdomEndpoint();
  const context = await buildContext(question, concepts);

  // Direct mode: talk to Gemini from the browser (Google's API sends permissive
  // CORS headers, so no proxy is required).
  if (isDirect(endpoint)) return askGemini(context, history || [], question, signal);

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question,
        context,
        history: (history || []).slice(-6),
      }),
      signal,
    });
  } catch (e: any) {
    if (e?.name === 'AbortError') throw e;
    throw new Error('wisdom endpoint unreachable — deploy worker/wisdom-proxy and set its URL in settings.');
  }

  if (res.status === 429) throw new Error('rate limited — wait a few seconds and ask again.');
  if (!res.ok) throw new Error(`wisdom failed: HTTP ${res.status}`);

  const type = res.headers.get('content-type') || '';
  if (type.includes('application/json')) {
    const data = await res.json();
    const text = data?.text ?? data?.answer ?? data?.error;
    if (typeof text === 'string' && text.trim()) return text.trim();
    throw new Error('wisdom returned an empty response');
  }
  const text = (await res.text()).trim();
  if (!text) throw new Error('wisdom returned an empty response');
  return text;
}
