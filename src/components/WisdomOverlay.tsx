import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { renderMarkdownWithMath } from '../concepts/latex';
import { askWisdom, type WisdomMessage } from '../lib/wisdom';

type MiniConcept = { id?: string; title?: string; section?: string; content?: string };

/* The model ends every answer with a "src: …" line (SYSTEM rule). Split it off:
   internal sources become buttons, "src: open web" (model's own weights, no
   retrieval) stays plain text — only database-backed notes get a link. */
function splitSrc(text: string): { body: string; src: string | null } {
  const lines = text.replace(/\s+$/, '').split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    const m = lines[i].match(/(^|\s)[*_]*\s*src[*_]*\s*:\s*/i);
    if (m) {
      const at = (m.index || 0) + m[0].length;
      const src = lines[i].slice(at).replace(/[*_#]+/g, '').trim();
      const head = lines[i].slice(0, m.index || 0);
      lines.splice(i, 1);
      if (head.trim()) lines.splice(i, 0, head);
      return { body: lines.join('\n').trimEnd(), src: src || null };
    }
  }
  return { body: text, src: null };
}

const norm = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
const STOP = new Set(['the', 'and', 'for', 'with', 'from', 'that', 'this', 'are', 'was', 'its', 'into']);

/* Match each "src:" fragment against the local notes. The model usually echoes
   "Section — Title" or just the title; token-subset matching covers both, and
   anything unmatched (or "open web") falls back to plain text. */
function matchNotes(src: string, concepts: MiniConcept[]): { matched: MiniConcept[]; rest: string[] } {
  const matched: MiniConcept[] = [];
  const rest: string[] = [];
  for (const raw of src.split(';')) {
    const frag = raw.trim();
    const nf = norm(frag);
    if (!nf || /open web|outside nomad|own knowledge|own weights|web search/.test(nf)) {
      if (frag) rest.push(frag);
      continue;
    }
    const fToks = nf.split(' ').filter(t => t.length > 2 && !STOP.has(t));
    if (!fToks.length) { rest.push(frag); continue; }
    let best: MiniConcept | null = null;
    let bestScore = 0, bestDiff = Infinity;
    for (const c of concepts) {
      const title = norm(c?.title || '');
      const cand = norm(`${c?.title || ''} ${c?.section || ''}`);
      if (!cand) continue;
      const cToks = cand.split(' ').filter(t => t.length > 2 && !STOP.has(t));
      if (!cToks.length) continue;
      const hits = fToks.filter(t => cToks.includes(t)).length;
      let score = 0;
      if (hits === fToks.length || (cToks.length && cToks.every(t => fToks.includes(t)))) score = 1;
      else if (title && (nf.includes(title) || title.includes(nf))) score = 1;
      else score = hits / fToks.length;
      if (score >= 0.67) {
        const diff = Math.abs(cand.length - nf.length);
        if (score > bestScore || (score === bestScore && diff < bestDiff)) {
          best = c; bestScore = score; bestDiff = diff;
        }
      }
    }
    if (best) matched.push(best);
    else rest.push(frag);
  }
  const seen = new Set<string>();
  const uniq = matched.filter(c => {
    const k = c.id || c.title || '';
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  return { matched: uniq.slice(0, 4), rest };
}

/* Same Markdown + KaTeX pipeline the concept view uses, so answers match the site.
   Providers disagree on LaTeX delimiters: gpt-oss emits \(..\) and \[.. ..\],
   others use $..$ / $$..$$. Normalize to $ / $$ before KaTeX so no raw commands leak. */
function renderAnswer(text: string): string {
  if (!text) return '';
  const normalized = text
    .replace(/\\\[([\s\S]+?)\\\]/g, (_, tex) => `$$${tex}$$`)
    .replace(/\\\(([\s\S]+?)\\\)/g, (_, tex) => `$${tex}$`);
  // Markdown-first with math protected (see renderMarkdownWithMath) — KaTeX
  // output fed through marked leaks raw TeX into the answer.
  return renderMarkdownWithMath(normalized);
}

export default function WisdomOverlay({ question, concepts, onClose, isMobile, onOpenNote }: {
  question: string;
  concepts: MiniConcept[];
  onClose: () => void;
  isMobile: boolean;
  onOpenNote?: (c: MiniConcept) => void;
}) {
  const [messages, setMessages] = useState<WisdomMessage[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const messagesRef = useRef<WisdomMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const aliveRef = useRef(true);
  const startedRef = useRef(false);

  useEffect(() => {
    aliveRef.current = true;
    return () => { aliveRef.current = false; };
  }, []);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    const next = [...messagesRef.current, { role: 'user' as const, text: q }];
    messagesRef.current = next;
    setMessages(next);
    setInput('');
    setBusy(true);
    setError('');
    try {
      const answer = await askWisdom(q, next.slice(0, -1), concepts);
      if (!aliveRef.current) return;
      messagesRef.current = [...messagesRef.current, { role: 'assistant', text: answer }];
      setMessages(messagesRef.current);
    } catch (e: any) {
      if (!aliveRef.current) return;
      if (e?.name !== 'AbortError') setError(e?.message || 'request failed');
    } finally {
      if (aliveRef.current) setBusy(false);
    }
  };

  // First question comes from the ask bar and fires once on mount.
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    if (question) send(question);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy, error]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{ position: 'fixed', inset: 0, zIndex: 110, background: '#000', display: 'flex', flexDirection: 'column' }}
    >
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '1.25rem 1rem' : '1.75rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
        <button className="nomad-btn" onClick={onClose}>⟨ return ⟩</button>
        <div style={{ fontSize: '0.6rem', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>wisdom</div>
        <div style={{ width: isMobile ? '4.5rem' : '5.5rem' }} />
      </div>

      {/* transcript */}
      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: isMobile ? '1.5rem 1rem 1rem' : '2.5rem 2rem', scrollbarWidth: 'thin' as any, scrollbarColor: 'rgba(255,255,255,0.25) transparent' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>
                {m.role === 'user' ? 'you' : 'wisdom'}
              </div>
              {m.role === 'user' ? (
                <div style={{ border: '1px solid rgba(255,255,255,0.22)', borderRadius: 4, padding: '0.75rem 1.1rem', fontSize: isMobile ? '0.9rem' : '0.95rem', color: '#fff', fontWeight: 300, lineHeight: 1.6, maxWidth: '90%', textAlign: 'right' }}>
                  {m.text}
                </div>
              ) : (
                (() => {
                  const { body, src } = splitSrc(m.text);
                  const { matched, rest } = src ? matchNotes(src, concepts) : { matched: [], rest: [] };
                  return (
                    <>
                      <div
                        className="nomad-prose"
                        style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, fontWeight: 300, width: '100%' }}
                        dangerouslySetInnerHTML={{ __html: renderAnswer(body) }}
                      />
                      {/* internal-database sources → open the note; open web stays plain text */}
                      {(matched.length > 0 || rest.length > 0) && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', marginTop: '0.7rem', width: '100%' }}>
                          {matched.map((c, j) => (
                            <button
                              key={c.id || c.title || j}
                              className="nomad-btn"
                              title={c.section ? `${c.title} — ${c.section}` : c.title}
                              onClick={() => onOpenNote?.(c)}
                              style={{
                                fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'lowercase',
                                border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4,
                                padding: '0.4rem 0.9rem', color: 'rgba(255,255,255,0.65)',
                                transition: 'border-color 0.2s, color 0.2s',
                              }}
                              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.color = '#fff'; }}
                              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; }}
                            >
                              ⟨ note ⟩ {String(c.title || '').length > 42 ? `${String(c.title).slice(0, 42)}…` : c.title}
                            </button>
                          ))}
                          {rest.map((r, j) => (
                            <span key={`src-${j}`} style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
                              src: {r}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()
              )}
            </div>
          ))}

          {busy && (
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>thinking…</div>
          )}

          {error && (
            <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 4, padding: '0.9rem 1.1rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
              {error}
              <div style={{ marginTop: '0.75rem' }}>
                <button className="nomad-btn" style={{ fontSize: '0.65rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, padding: '0.4rem 1rem' }} onClick={() => { setError(''); send(input || question); }}>
                  ⟨ retry ⟩
                </button>
              </div>
            </div>
          )}
          <div style={{ height: '1rem' }} />
        </div>
      </div>

      {/* follow-up bar */}
      <form
        onSubmit={e => { e.preventDefault(); send(input); }}
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: isMobile ? '0.9rem 1rem calc(0.9rem + env(safe-area-inset-bottom))' : '1.1rem 2rem', display: 'flex', gap: '1rem', alignItems: 'center', flexShrink: 0 }}
      >
        <input
          className="nomad-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="ask a follow-up…"
          autoComplete="off"
          spellCheck={false}
          disabled={busy}
          style={{ flex: 1, fontSize: isMobile ? '0.95rem' : '1rem', padding: '0.6rem 0', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: '#fff', outline: 'none' }}
        />
        <button type="submit" className="nomad-btn" disabled={busy || !input.trim()} style={{ opacity: busy || !input.trim() ? 0.35 : 1, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, padding: '0.5rem 1.1rem', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
          ⟨ ask ⟩
        </button>
      </form>
    </motion.div>
  );
}
