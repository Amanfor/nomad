/* ─── Wisdom mode: context gathering + proxied LLM calls ───────────────────
 * The browser never sees an API key. It sends { question, context, history }
 * to a tiny Cloudflare Worker (see /worker) which holds GEMINI_API_KEY and
 * forwards to the Gemini free tier.
 */

import { loadFormulaSheets } from '../data/formulas';

export type WisdomMessage = { role: 'user' | 'assistant'; text: string };

/** Structural concept shape — avoids importing the NomadApp module (no cycles). */
type MiniConcept = { title?: string; section?: string; content?: string };

export const DEFAULT_WISDOM_ENDPOINT = 'https://nomad-wisdom.amanfor.workers.dev/';
const ENDPOINT_KEY = 'nomad-wisdom-endpoint';

export function getWisdomEndpoint(): string {
  try {
    const saved = localStorage.getItem(ENDPOINT_KEY);
    if (saved && /^https?:\/\//.test(saved)) return saved;
  } catch { /* SSR / private mode */ }
  return DEFAULT_WISDOM_ENDPOINT;
}

export function setWisdomEndpoint(url: string): void {
  try { localStorage.setItem(ENDPOINT_KEY, url.trim()); } catch { /* ignore */ }
}

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

/* ─── Proxy call ────────────────────────────────────────────────────────── */

/**
 * Ask the model. Returns the assistant text, or throws a readable error
 * (missing endpoint, rate limit, bad payload).
 */
export async function askWisdom(
  question: string,
  history: WisdomMessage[],
  concepts: MiniConcept[],
  signal?: AbortSignal,
): Promise<string> {
  const endpoint = getWisdomEndpoint();
  const context = await buildContext(question, concepts);

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
