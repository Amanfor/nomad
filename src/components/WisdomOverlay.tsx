import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import katex from 'katex';
import { marked } from 'marked';
import { askWisdom, type WisdomMessage } from '../lib/wisdom';

type MiniConcept = { title?: string; section?: string; content?: string };

/* Same Markdown + KaTeX pipeline the concept view uses, so answers match the site.
   Providers disagree on LaTeX delimiters: gpt-oss emits \(..\) and \[.. ..\],
   others use $..$ / $$..$$. Normalize to $ / $$ before KaTeX so no raw commands leak. */
function renderAnswer(text: string): string {
  if (!text) return '';
  let processed = text
    .replace(/\\\[([\s\S]+?)\\\]/g, (_, tex) => `$$${tex}$$`)
    .replace(/\\\(([\s\S]+?)\\\)/g, (_, tex) => `$${tex}$`);
  processed = processed.replace(/\$\$([^$]+)\$\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false }); } catch { return `$$${tex}$$`; }
  });
  processed = processed.replace(/\$([^$]+)\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false }); } catch { return `$${tex}$`; }
  });
  return marked.parse(processed) as string;
}

export default function WisdomOverlay({ question, concepts, onClose, isMobile }: {
  question: string;
  concepts: MiniConcept[];
  onClose: () => void;
  isMobile: boolean;
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
                <div
                  className="nomad-prose"
                  style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.75, fontWeight: 300, width: '100%' }}
                  dangerouslySetInnerHTML={{ __html: renderAnswer(m.text) }}
                />
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
