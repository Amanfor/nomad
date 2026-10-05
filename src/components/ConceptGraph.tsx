import React, { useEffect, useRef, useState } from 'react';

type GNode = {
  id: string;
  label: string;
  group: string;
  note: string;
};
type GEdge = { source: string; target: string; label: string };
type GraphData = { title: string; subject: string; nodes: GNode[]; edges: GEdge[] };

type SimNode = GNode & {
  x: number; y: number; vx: number; vy: number;
  fx: number | null; fy: number | null; deg: number;
};

const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');

export default function ConceptGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<GraphData | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [hover, setHover] = useState<{ node: SimNode; mx: number; my: number } | null>(null);
  const stateRef = useRef<any>({});

  useEffect(() => {
    fetch(`${BASE}graph/organic-chemistry.json`, { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then(setData)
      .catch(() => setErr('graph data unavailable'));
  }, []);

  useEffect(() => {
    if (!data || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const adj = new Map<string, Set<string>>();
    const edges: GEdge[] = data.edges;
    for (const e of edges) {
      if (!adj.has(e.source)) adj.set(e.source, new Set());
      if (!adj.has(e.target)) adj.set(e.target, new Set());
      adj.get(e.source)!.add(e.target);
      adj.get(e.target)!.add(e.source);
    }
    const nodes: SimNode[] = data.nodes.map((n, i) => {
      const a = (i / data.nodes.length) * Math.PI * 2;
      return {
        ...n,
        x: Math.cos(a) * 220 + (Math.random() - 0.5) * 40,
        y: Math.sin(a) * 220 + (Math.random() - 0.5) * 40,
        vx: 0, vy: 0, fx: null, fy: null,
        deg: adj.get(n.id)?.size ?? 1,
      };
    });
    const simEdges = edges
      .map((e) => ({ ...e, a: nodes.find((n) => n.id === e.source)!, b: nodes.find((n) => n.id === e.target)! }))
      .filter((e) => e.a && e.b);

    let alpha = 1;
    let cam = { x: 0, y: 0, k: 1 };
    let drag: { node: SimNode | null; offx: number; offy: number; panning: boolean; lastx: number; lasty: number } = { node: null, offx: 0, offy: 0, panning: false, lastx: 0, lasty: 0 };
    let hoverId: string | null = null;
    let raf = 0;
    let W = 0; let H = 0; let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = wrapRef.current?.clientWidth || window.innerWidth;
      H = wrapRef.current?.clientHeight || window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    const toWorld = (cx: number, cy: number, rect: DOMRect) => ({
      x: (cx - rect.left - W / 2) / cam.k - cam.x,
      y: (cy - rect.top - H / 2) / cam.k - cam.y,
    });

    const step = () => {
      if (alpha > 0.02) {
        const kRep = 3200;
        const kLink = 0.02;
        const L = 150;
        for (let i = 0; i < nodes.length; i++) {
          const a = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const b = nodes[j];
            let dx = a.x - b.x; let dy = a.y - b.y;
            let d2 = dx * dx + dy * dy;
            if (d2 < 1) { dx = Math.random() - 0.5; dy = Math.random() - 0.5; d2 = 1; }
            const d = Math.sqrt(d2);
            const f = Math.min(kRep / d2, 4);
            a.vx += (dx / d) * f * alpha;
            a.vy += (dy / d) * f * alpha;
            b.vx -= (dx / d) * f * alpha;
            b.vy -= (dy / d) * f * alpha;
          }
        }
        for (const e of simEdges) {
          const dx = e.b.x - e.a.x; const dy = e.b.y - e.a.y;
          const d = Math.max(Math.hypot(dx, dy), 1);
          const f = (d - L) * kLink * alpha * 3;
          e.a.vx += (dx / d) * f; e.a.vy += (dy / d) * f;
          e.b.vx -= (dx / d) * f; e.b.vy -= (dy / d) * f;
        }
        for (const n of nodes) {
          n.vx += -n.x * 0.008 * alpha;
          n.vy += -n.y * 0.008 * alpha;
          n.vx *= 0.82; n.vy *= 0.82;
          const v = Math.hypot(n.vx, n.vy);
          if (v > 12) { n.vx = (n.vx / v) * 12; n.vy = (n.vy / v) * 12; }
          if (n.fx != null) { n.x += (n.fx - n.x) * 0.5; n.vx = 0; } else n.x += n.vx;
          if (n.fy != null) { n.y += (n.fy - n.y) * 0.5; n.vy = 0; } else n.y += n.vy;
        }
        alpha *= 0.985;
      }
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);
      ctx.save();
      ctx.translate(W / 2, H / 2);
      ctx.scale(cam.k, cam.k);
      ctx.translate(cam.x, cam.y);

      const hov = hoverId ? nodes.find((n) => n.id === hoverId) ?? null : null;
      const neigh = hov ? (adj.get(hov.id) ?? new Set()) : null;

      ctx.lineWidth = 1 / cam.k;
      for (const e of simEdges) {
        const hot = hov && (e.a.id === hov.id || e.b.id === hov.id);
        ctx.strokeStyle = hot ? 'rgba(255,255,255,0.55)' : hov ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.16)';
        ctx.beginPath();
        ctx.moveTo(e.a.x, e.a.y);
        ctx.lineTo(e.b.x, e.b.y);
        ctx.stroke();
      }
      for (const n of nodes) {
        const hot = !hov || n.id === hov.id || (neigh && neigh.has(n.id));
        const r = 2.2 + n.deg * 0.9;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = hot ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.12)';
        ctx.fill();
        ctx.font = `${hov && (n.id === hov.id || (neigh && neigh.has(n.id))) ? 500 : 300} ${11 / Math.max(cam.k, 0.7)}px Inter, sans-serif`;
        ctx.fillStyle = hot ? 'rgba(255,255,255,0.85)' : hov ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.45)';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, n.y + r + 14);
      }
      ctx.restore();
    };

    const loop = () => { step(); draw(); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    const pick = (wx: number, wy: number) => {
      let best: SimNode | null = null; let bd = Infinity;
      for (const n of nodes) {
        const d = Math.hypot(n.x - wx, n.y - wy);
        const rr = 2.2 + n.deg * 0.9 + 8 / cam.k;
        if (d < rr && d < bd) { bd = d; best = n; }
      }
      return best;
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const w = toWorld(e.clientX, e.clientY, rect);
      if (drag.node) {
        drag.node.fx = w.x + drag.offx;
        drag.node.fy = w.y + drag.offy;
        alpha = Math.max(alpha, 0.3);
        setHover(null);
        hoverId = null;
        return;
      }
      if (drag.panning) {
        cam.x += (e.clientX - drag.lastx) / cam.k;
        cam.y += (e.clientY - drag.lasty) / cam.k;
        drag.lastx = e.clientX; drag.lasty = e.clientY;
        setHover(null);
        hoverId = null;
        return;
      }
      const n = pick(w.x, w.y);
      hoverId = n ? n.id : null;
      canvas.style.cursor = n ? 'pointer' : 'grab';
      if (n) setHover({ node: n, mx: e.clientX - rect.left, my: e.clientY - rect.top });
      else setHover(null);
    };
    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const w = toWorld(e.clientX, e.clientY, rect);
      const n = pick(w.x, w.y);
      if (n) { drag.node = n; drag.offx = n.x - w.x; drag.offy = n.y - w.y; n.fx = n.x; n.fy = n.y; alpha = Math.max(alpha, 0.5); canvas.setPointerCapture(e.pointerId); }
      else { drag.panning = true; drag.lastx = e.clientX; drag.lasty = e.clientY; canvas.style.cursor = 'grabbing'; canvas.setPointerCapture(e.pointerId); }
    };
    const onUp = (e: PointerEvent) => {
      if (drag.node) { drag.node.fx = null; drag.node.fy = null; }
      drag.node = null; drag.panning = false;
      canvas.style.cursor = 'grab';
      try { canvas.releasePointerCapture(e.pointerId); } catch {}
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const before = toWorld(e.clientX, e.clientY, rect);
      cam.k = Math.min(Math.max(cam.k * (e.deltaY < 0 ? 1.12 : 1 / 1.12), 0.3), 3.5);
      const after = toWorld(e.clientX, e.clientY, rect);
      cam.x += after.x - before.x;
      cam.y += after.y - before.y;
    };

    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.style.cursor = 'grab';

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
      canvas.removeEventListener('wheel', onWheel);
    };
  }, [data]);

  const hoverNode = hover?.node;

  return (
    <div ref={wrapRef} style={{ position: 'fixed', inset: 0, background: '#000' }}>
      <canvas ref={canvasRef} style={{ display: 'block', touchAction: 'none' }} />
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none' }}>
        <div style={{ fontSize: '0.8rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
          CONCEPT GRAPH — {data?.title?.toUpperCase() ?? '…'}
        </div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginTop: '0.4rem' }}>
          hover to preview · drag node to pin · drag space to pan · scroll to zoom
        </div>
      </div>
      <a href={`${BASE}`} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300 }}>⟨ exit ⟩</a>
      {err && <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>{err}</div>}
      {hoverNode && (
        <div style={{
          position: 'absolute', left: Math.min(hover!.mx + 18, (wrapRef.current?.clientWidth ?? 800) - 340), top: Math.min(hover!.my + 18, (wrapRef.current?.clientHeight ?? 600) - 220),
          width: 320, background: 'rgba(5,5,5,0.96)', border: '1px solid rgba(255,255,255,0.14)', padding: '1rem 1.1rem',
          pointerEvents: 'none', borderRadius: 2, backdropFilter: 'blur(6px)',
        }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.45)', marginBottom: '0.35rem' }}>{hoverNode.group?.toUpperCase()}</div>
          <div style={{ fontSize: '1rem', fontWeight: 400, color: '#fff', marginBottom: '0.5rem' }}>{hoverNode.label}</div>
          <div style={{ fontSize: '0.78rem', lineHeight: 1.55, fontWeight: 300, color: 'rgba(255,255,255,0.75)' }}>{hoverNode.note}</div>
          {(() => {
            const conns = (data?.edges ?? [])
              .filter((e) => e.source === hoverNode.id || e.target === hoverNode.id)
              .slice(0, 4)
              .map((e) => {
                const otherId = e.source === hoverNode.id ? e.target : e.source;
                const other = data?.nodes.find((n) => n.id === otherId);
                return { other: other?.label ?? otherId, via: e.label };
              });
            if (!conns.length) return null;
            return (
              <div style={{ marginTop: '0.6rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {conns.map((c, i) => (
                  <div key={i} style={{ fontSize: '0.68rem', fontWeight: 300, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
                    <span style={{ color: 'rgba(255,255,255,0.85)' }}>{c.other}</span> · {c.via}
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
