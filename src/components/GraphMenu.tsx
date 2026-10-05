import React, { useEffect, useState } from 'react';

const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');

export default function GraphMenu() {
  const [counts, setCounts] = useState<Record<string, { nodes: number; edges: number }>>({});
  useEffect(() => {
    ['organic-chemistry', 'inorganic-chemistry', 'physical-chemistry'].forEach((slug) => {
      fetch(`${BASE}graph/${slug}.json`, { cache: 'no-cache' })
        .then((r) => (r.ok ? r.json() : null))
        .then((g) => g && setCounts((c) => ({ ...c, [slug]: { nodes: g.nodes?.length ?? 0, edges: g.edges?.length ?? 0 } })))
        .catch(() => {});
    });
  }, []);
  const items = [
    { slug: 'organic-chemistry', label: 'organic chemistry' },
    { slug: 'inorganic-chemistry', label: 'inorganic chemistry' },
    { slug: 'physical-chemistry', label: 'physical chemistry' },
  ];
  return (
    <div style={{ position: 'fixed', inset: 0, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <a href={BASE} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300 }}>⟨ exit ⟩</a>
      <div style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.85)', fontWeight: 300, marginBottom: '3rem' }}>CONCEPT GRAPH</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '400px', padding: '0 2rem', textAlign: 'center' }}>
        {items.map((it) => (
          <a key={it.slug} href={`${BASE}graph/${it.slug}`} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.08em', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}>
            ⟨ {it.label} ⟩
            {counts[it.slug] && <span style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', marginTop: '0.35rem' }}>{counts[it.slug].nodes} CONCEPTS · {counts[it.slug].edges} LINKS</span>}
          </a>
        ))}
      </div>
    </div>
  );
}
