import { useEffect, useRef, useState } from 'react';
import TimerMenu from './TimerMenu';

const base = () => ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');

function format(secs: number, total: number): string {
  if (total >= 60) {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }
  return `${secs}`;
}

/** One short "ting" — a bright sine with a fast exponential decay (~0.5s),
 *  plus an octave harmonic for metallic colour. */
function ting(ctx: AudioContext) {
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const o2 = ctx.createOscillator();
  const g = ctx.createGain();
  const g2 = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(1318.5, t); // E6
  o2.type = 'sine';
  o2.frequency.setValueAtTime(2637, t); // E7
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.35, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
  g2.gain.setValueAtTime(0.0001, t);
  g2.gain.exponentialRampToValueAtTime(0.07, t + 0.01);
  g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
  o.connect(g); g.connect(ctx.destination);
  o2.connect(g2); g2.connect(ctx.destination);
  o.start(t); o.stop(t + 0.55);
  o2.start(t); o2.stop(t + 0.55);
}

function TimerRun({ every }: { every: number }) {
  const [left, setLeft] = useState(every);
  const [ring, setRing] = useState(1);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    const ctx: AudioContext = new AC();
    let nextEnd = Date.now() + every * 1000;

    const poke = () => { try { ctx.resume(); } catch {} };
    window.addEventListener('pointerdown', poke);
    window.addEventListener('keydown', poke);
    poke();

    const id = window.setInterval(() => {
      const now = Date.now();
      if (now >= nextEnd) {
        poke();
        try { ting(ctx); } catch {}
        nextEnd += every * 1000;
        // tab was hidden / cycles dropped — resync to wall clock
        if (now >= nextEnd) nextEnd = now + every * 1000;
        setRing((r) => r + 1);
      }
      setLeft(Math.max(0, Math.ceil((nextEnd - now) / 1000)));
      setNeedsTap(ctx.state !== 'running');
    }, 150);

    return () => {
      window.clearInterval(id);
      window.removeEventListener('pointerdown', poke);
      window.removeEventListener('keydown', poke);
      try { ctx.close(); } catch {}
    };
  }, [every]);

  // the countdown lives in the tab title too, so a student can alt-tab
  useEffect(() => {
    document.title = `nomad · ${format(left, every)}`;
    return () => { document.title = 'nomad · timer'; };
  }, [left, every]);

  const label = every >= 60 ? format(every, every) : `${every}s`;

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <a href={base()} className="nomad-btn" style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', textDecoration: 'none' }}>⟨ back ⟩</a>
      <div style={{ fontSize: '0.58rem', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '1rem' }}>
        every {label}
      </div>
      <div style={{ fontSize: 'clamp(4.5rem, 30vw, 22rem)', fontWeight: 200, letterSpacing: '-0.03em', color: '#fff', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
        {format(left, every)}
      </div>
      <div style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginTop: '1.25rem' }}>
        ring #{ring}
      </div>
      {needsTap && (
        <div style={{ position: 'absolute', bottom: '2rem', fontSize: '0.55rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
          tap anywhere for sound
        </div>
      )}
      {/* cycle progress hairline */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', width: `${Math.min(100, Math.max(0, (left / every) * 100))}%`, background: 'rgba(255,255,255,0.5)', transition: 'width 0.2s linear' }} />
    </div>
  );
}

export default function TimerClock() {
  const every = Math.floor(Number(new URLSearchParams(window.location.search).get('every')) || 0);
  if (every >= 5) return <TimerRun every={every} />;
  return <TimerMenu backHref={base()} onBegin={(s) => window.location.replace(`?every=${s}`)} />;
}
