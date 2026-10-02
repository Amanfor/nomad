import React, { useEffect, useState, useRef, useCallback } from 'react';
import type { Concept } from './types';
import { loadConcepts, peekConcepts, onConceptsLoaded } from './loader';
import { renderLabelLatex } from './latex';

const PAGE = 24;

/**
 * ConceptBrowser — self-contained theory database browser, written from scratch.
 * Owns its own data (loader module), own pagination, own scroll container.
 * Parent only supplies callbacks.
 */
export default function ConceptBrowser({
  onSelect,
  onExit,
  isMobile,
}: {
  onSelect: (c: Concept) => void;
  onExit: () => void;
  isMobile: boolean;
}) {
  const [concepts, setConcepts] = useState<Concept[]>(() => peekConcepts());
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>(
    () => (peekConcepts().length ? 'ready' : 'loading')
  );
  const [limit, setLimit] = useState(PAGE);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let alive = true;
    const unsub = onConceptsLoaded(r => {
      if (!alive) return;
      setConcepts(r.concepts);
      setStatus(r.concepts.length ? 'ready' : 'error');
    });
    loadConcepts();
    return () => { alive = false; unsub(); };
  }, []);

  const retry = useCallback(() => {
    setStatus('loading');
    loadConcepts(true).then(r => {
      setConcepts(r.concepts);
      setStatus(r.concepts.length ? 'ready' : 'error');
    });
  }, []);

  const onScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 200) {
      setLimit(prev => Math.min(prev + PAGE, concepts.length));
    }
  }, [concepts.length]);

  const shown = concepts.slice(0, limit);

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className="nomad-browse-container"
      data-status={status}
      style={{
        width: '100%',
        marginTop: isMobile ? '-1rem' : '2rem',
        maxHeight: '65vh',
        overflowY: 'auto',
        paddingRight: '0.5rem',
        paddingBottom: '4rem',
        scrollbarWidth: 'thin' as any,
        scrollbarColor: 'rgba(255,255,255,0.25) transparent',
      }}
    >
      {/* sticky header: exit + count */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 2, background: '#000',
        paddingBottom: '1rem', marginBottom: '1rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <button className="nomad-btn" onClick={onExit}>⟨ exit ⟩</button>
        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          {status === 'loading' ? 'loading…' : status === 'error' ? 'failed' : `${Math.min(limit, concepts.length)} / ${concepts.length} concepts`}
        </div>
      </div>

      {status === 'loading' && (
        <div style={{ padding: '3rem 0', textAlign: 'center', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>
          loading database…
        </div>
      )}

      {status === 'error' && (
        <div style={{ padding: '3rem 0', textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            concept database unavailable
          </div>
          <button className="nomad-btn" onClick={retry}>⟨ retry ⟩</button>
        </div>
      )}

      {status === 'ready' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {shown.map((c, i) => (
            <div
              key={c.id || i}
              onClick={() => onSelect(c)}
              style={{
                padding: '1rem',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div
                style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1.3 }}
                dangerouslySetInnerHTML={{ __html: renderLabelLatex(c.title) }}
              />
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {c.section}
              </div>
            </div>
          ))}
          {shown.length === 0 && (
            <div style={{ gridColumn: '1 / -1', padding: '1.5rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
              no concepts found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
