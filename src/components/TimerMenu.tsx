import { useState } from 'react';

/** "timer mode" menu — pick a recurring ring interval, then begin.
 *
 *  Used twice:
 *   1. Main app: opened by the ⟨ timer ⟩ button (onClose closes it; onBegin
 *      navigates to the separate /nomad/timer page).
 *   2. The timer page itself when no ?every= param is present (onClose is
 *      omitted and a ⟨ back ⟩ link is shown; onBegin reloads in place with
 *      the param). */
export default function TimerMenu({ onClose, onBegin, backHref }: {
  onClose?: () => void;
  onBegin: (seconds: number) => void;
  backHref?: string;
}) {
  // Prefill from last used interval so BEGIN is one click away.
  const [custom, setCustom] = useState(() => {
    try {
      const last = Number(localStorage.getItem('nomad.timer.every') || 0);
      if (last > 0) return String(last % 60 === 0 ? last / 60 : last);
    } catch {}
    return '2';
  });
  const [unit, setUnit] = useState<'m' | 's'>(() => {
    try {
      const last = Number(localStorage.getItem('nomad.timer.every') || 0);
      if (last > 0 && last >= 60 && last % 60 === 0) return 'm';
    } catch {}
    return 'm';
  });

  const start = (seconds: number) => {
    const s = Math.max(5, Math.round(seconds));
    try { localStorage.setItem('nomad.timer.every', String(s)); } catch {}
    onBegin(s);
  };

  const customSeconds = () => {
    const n = Number(custom);
    const base = isFinite(n) && n > 0 ? n : 0;
    return unit === 'm' ? base * 60 : base;
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: onClose ? 100 : 1, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 2rem' }}>
      {onClose && (
        <button onClick={onClose} className="nomad-btn" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>⟨ exit ⟩</button>
      )}
      {backHref && (
        <a href={backHref} className="nomad-btn" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', textDecoration: 'none' }}>⟨ back ⟩</a>
      )}

      <div style={{ fontFamily: "'Cinzel', serif", fontSize: '0.85rem', letterSpacing: '0.25em', color: '#fff', textTransform: 'uppercase', marginBottom: '0.75rem', textShadow: '0 0 40px rgba(255,255,255,0.08)' }}>Timer</div>
      <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.32)', textTransform: 'uppercase', marginBottom: '3rem', textAlign: 'center' }}>
        one ring = one equal slice of time
      </div>

      {/* presets — time-bound practice runs, no typing needed */}
      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {([{ l: '1m', s: 60 }, { l: '2m', s: 120 }, { l: '5m', s: 300 }, { l: '10m', s: 600 }] as const).map((p) => (
          <button
            key={p.l}
            onClick={() => start(p.s)}
            className="nomad-btn"
            style={{ border: '1px solid rgba(255,255,255,0.14)', borderRadius: 4, padding: '0.7rem 1.3rem', letterSpacing: '0.1em' }}
          >
            {p.l}
          </button>
        ))}
      </div>

      <div style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: '1.1rem' }}>custom</div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <input
          type="number"
          min={5}
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') start(customSeconds()); }}
          style={{ width: '5rem', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '1.6rem', fontWeight: 200, textAlign: 'center', padding: '0.25rem' }}
        />
        <button className="nomad-btn" onClick={() => setUnit('s')} style={unit === 's' ? { color: 'rgba(255,255,255,1)' } : undefined}>⟨ seconds ⟩</button>
        <button className="nomad-btn" onClick={() => setUnit('m')} style={unit === 'm' ? { color: 'rgba(255,255,255,1)' } : undefined}>⟨ minutes ⟩</button>
      </div>

      <button
        className="nomad-btn"
        onClick={() => start(customSeconds())}
        style={{ border: '1px solid rgba(255,255,255,0.25)', borderRadius: 4, padding: '0.9rem 2.4rem', letterSpacing: '0.2em' }}
      >
        ⟨ begin ⟩
      </button>
    </div>
  );
}
