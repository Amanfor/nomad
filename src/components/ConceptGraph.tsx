import React, { useEffect, useRef, useState } from 'react';
import katex from 'katex';

type GNode = {
  id: string;
  label: string;
  group: string;
  depth?: number;
  note: string;
};
type GEdge = { source: string; target: string; label: string };
type GraphData = { title: string; subject: string; nodes: GNode[]; edges: GEdge[] };

const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');

function renderRich(text: string): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  try {
    return esc(text)
      .replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => {
        try { return katex.renderToString(m.trim(), { displayMode: true }); } catch { return _; }
      })
      .replace(/\$([^$]+?)\$/g, (_, m) => {
        try { return katex.renderToString(m.trim(), { displayMode: false }); } catch { return _; }
      })
      .replace(/\n/g, '<br/>');
  } catch {
    return esc(text);
  }
}

export default function ConceptGraph() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<GraphData | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [hover, setHover] = useState<{ node: GNode; mx: number; my: number } | null>(null);
  const [open, setOpen] = useState<GNode | null>(null);

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

    const parents = new Map<string, string[]>();
    const children = new Map<string, string[]>();
    for (const e of data.edges) {
      parents.set(e.target, [...(parents.get(e.target) ?? []), e.source]);
      children.set(e.source, [...(children.get(e.source) ?? []), e.target]);
    }
    const byId = new Map(data.nodes.map((n) => [n.id, n] as const));
    const root = data.nodes.find((n) => n.id === 'organic-chemistry') ?? data.nodes[0];

    // depth from explicit field, else BFS
    const depth = new Map<string, number>();
    const depthOf = (id: string): number => {
      if (depth.has(id)) return depth.get(id)!;
      const n = byId.get(id);
      if (n?.depth != null) { depth.set(id, n.depth); return n.depth; }
      const p = parents.get(id)?.[0];
      const d = p ? depthOf(p) + 1 : 0;
      depth.set(id, d);
      return d;
    };
    for (const n of data.nodes) depthOf(n.id);

    // radial layout: root at center, each depth as a ring (wider spacing for deeper rings),
    // each leaf gets an equal angular slot so labels never overlap
    const radOf = (d: number) => (d === 0 ? 0 : 60 + d * (d === 1 ? 120 : 230));
    const angle = new Map<string, number>();
    const leavesUnder = (id: string): string[] => {
      const kids = children.get(id) ?? [];
      if (!kids.length) return [id];
      return kids.flatMap(leavesUnder);
    };
    // every pillar gets at least 3 leaf-slots so small chapters stay readable;
    // leaves inside a pillar are evenly spaced within that span
    let cursor = -Math.PI / 2;
    const pillarList = children.get(root.id) ?? [];
    const totalW = pillarList.reduce((s, p) => s + Math.max(leavesUnder(p).length, 6), 0);
    for (const p of pillarList) {
      const leaves = leavesUnder(p);
      const span = (Math.PI * 2) * Math.max(leaves.length, 6) / totalW;
      leaves.forEach((leaf, i) => {
        const a = cursor + span * (i + 0.5) / leaves.length;
        angle.set(leaf, a);
      });
      cursor += span;
    }
    // every internal node = angular midpoint of its children (children computed first)
    const byDepthDesc = [...data.nodes].sort((a, b) => (depthOf(b.id) - depthOf(a.id)));
    for (const n of byDepthDesc) {
      const kids = children.get(n.id) ?? [];
      if (kids.length) {
        const as = kids.map((k) => angle.get(k));
        if (as.every((v) => typeof v === 'number' && !isNaN(v))) {
          angle.set(n.id, (as[0] + as[as.length - 1]) / 2);
        }
      }
    }

    const pos = new Map<string, { x: number; y: number }>();
    for (const n of data.nodes) {
      const d = depthOf(n.id);
      const a = angle.get(n.id) ?? 0;
      pos.set(n.id, { x: Math.cos(a) * radOf(d), y: Math.sin(a) * radOf(d) });
    }

    const nodes = data.nodes.map((n) => {
      const p = pos.get(n.id) ?? { x: 0, y: 0 };
      return { ...n, x: p.x, y: p.y, angle: angle.get(n.id) ?? 0, rad: radOf(depthOf(n.id)), dx: 0, dy: 0 };
    });
    const edges = data.edges
      .map((e) => ({ ...e, a: nodes.find((n) => n.id === e.source)!, b: nodes.find((n) => n.id === e.target)! }))
      .filter((e) => e.a && e.b);

    let cam = { x: 0, y: 0, k: 1 };
    let drag: { id: string | null; offx: number; offy: number; panning: boolean; lastx: number; lasty: number } = { id: null, offx: 0, offy: 0, panning: false, lastx: 0, lasty: 0 };
    let hoverId: string | null = null;
    let raf = 0;
    let W = 0; let H = 0; let dpr = 1;
    let downX = 0; let downY = 0;

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

    // fit to content
    const fit = () => {
      const xs = nodes.map((n) => n.x);
      const ys = nodes.map((n) => n.y);
      const minX = Math.min(...xs), maxX = Math.max(...xs);
      const minY = Math.min(...ys), maxY = Math.max(...ys);
      const bw = Math.max(maxX - minX, 1) + 420;
      const bh = Math.max(maxY - minY, 1) + 120;
      cam.k = Math.min(W / bw, H / bh);
      cam.x = -((minX + maxX) / 2);
      cam.y = -((minY + maxY) / 2);
    };
    fit();

    const toWorld = (cx: number, cy: number, rect: DOMRect) => ({
      x: (cx - rect.left - W / 2) / cam.k - cam.x,
      y: (cy - rect.top - H / 2) / cam.k - cam.y,
    });

    const litSets = () => {
      if (!hoverId) return null;
      const anc = new Set<string>();
      let cur = hoverId;
      while (cur) { anc.add(cur); cur = parents.get(cur)?.[0] ?? ''; }
      const desc = new Set<string>();
      const walk = (id: string) => { desc.add(id); for (const c of children.get(id) ?? []) walk(c); };
      walk(hoverId);
      const lit = new Set([...anc, ...desc]);
      return { lit, anc, desc };
    };

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);
      ctx.save();
      ctx.translate(W / 2, H / 2);
      ctx.scale(cam.k, cam.k);
      ctx.translate(cam.x, cam.y);
      const L = litSets();

      ctx.lineWidth = 1 / cam.k;
      const rootNode = nodes.find((n) => n.id === root.id);
      const cx0 = rootNode ? rootNode.dx : 0;
      const cy0 = rootNode ? rootNode.dy : 0;
      for (const e of edges) {
        const a = e.a, b = e.b;
        const hot = L && (L.lit.has(a.id) && L.lit.has(b.id) && (a.id === hoverId || b.id === hoverId || L.anc.has(a.id) || L.desc.has(a.id)));
        ctx.strokeStyle = L ? (hot ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.06)') : 'rgba(255,255,255,0.18)';
        ctx.beginPath();
        if (a.rad < 1) {
          ctx.moveTo(a.x + a.dx, a.y + a.dy);
          ctx.lineTo(b.x + b.dx, b.y + b.dy);
        } else {
          const aA = a.angle;
          let delta = b.angle - aA;
          if (delta > Math.PI) delta -= Math.PI * 2;
          if (delta < -Math.PI) delta += Math.PI * 2;
          ctx.moveTo(a.x + a.dx, a.y + a.dy);
          try {
            ctx.arc(cx0, cy0, a.rad, aA, aA + delta, delta < 0);
          } catch { /* ignore */ }
          ctx.lineTo(b.x + b.dx, b.y + b.dy);
        }
        ctx.stroke();
      }
      for (const n of nodes) {
        const hot = !L || L.lit.has(n.id);
        const r = n.id === hoverId ? 5 : 2.5 + (n.depth === 0 ? 3 : n.depth === 1 ? 1.5 : 0);
        ctx.beginPath();
        ctx.arc(n.x + n.dx, n.y + n.dy, r, 0, Math.PI * 2);
        ctx.fillStyle = hot ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.12)';
        ctx.fill();
        const big = n.depth === 0 || n.depth === 1;
        // always show root + pillar (chapter) labels; deeper labels appear only on the active chain
        const showLabel = n.depth !== undefined && n.depth <= 1 || (L != null && L.lit.has(n.id));
        if (!showLabel) continue;
        const size = n.depth === 0 ? 15 : n.depth === 1 ? 12.5 : 11;
        ctx.font = `${n.id === hoverId || big ? 500 : 300} ${size / Math.max(cam.k, 0.6)}px Inter, sans-serif`;
        ctx.fillStyle = hot ? 'rgba(255,255,255,0.9)' : L ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.55)';
        if (n.depth === 0) {
          ctx.textAlign = 'center';
          ctx.fillText(n.label, n.x + n.dx, n.y + n.dy - 18);
        } else if (n.depth === 1) {
          // chapter labels: horizontal, extending outward
          const side = Math.cos(n.angle) >= 0 ? 1 : -1;
          ctx.textAlign = side > 0 ? 'left' : 'right';
          ctx.fillText(n.label, n.x + n.dx + side * (r + 8), n.y + n.dy + 4);
        } else {
          // deeper labels appear only on the active chain; horizontal, pushed outward
          const side = Math.cos(n.angle) >= 0 ? 1 : -1;
          ctx.textAlign = side > 0 ? 'left' : 'right';
          ctx.fillText(n.label, n.x + n.dx + side * (r + 8), n.y + n.dy + 4);
        }
      }
      ctx.restore();
    };

    let dirty = true;
    const loop = () => { if (dirty) { draw(); dirty = false; } raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    const invalidate = () => { dirty = true; };

    const pick = (wx: number, wy: number) => {
      let best: any = null; let bd = Infinity;
      for (const n of nodes) {
        const d = Math.hypot(n.x + n.dx - wx, n.y + n.dy - wy);
        const rr = 14 / cam.k + 4;
        if (d < rr && d < bd) { bd = d; best = n; }
      }
      return best;
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const w = toWorld(e.clientX, e.clientY, rect);
      if (drag.panning) {
        cam.x += (e.clientX - drag.lastx) / cam.k;
        cam.y += (e.clientY - drag.lasty) / cam.k;
        drag.lastx = e.clientX; drag.lasty = e.clientY;
        invalidate();
        return;
      }
      const n = pick(w.x, w.y);
      hoverId = n ? n.id : null;
      canvas.style.cursor = n ? 'pointer' : 'grab';
      if (n) setHover({ node: n, mx: e.clientX - rect.left, my: e.clientY - rect.top });
      else setHover(null);
      invalidate();
    };
    const onDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      downX = e.clientX; downY = e.clientY;
      // nodes are fixed; any press-and-drag pans the canvas
      drag.panning = true; drag.lastx = e.clientX; drag.lasty = e.clientY; canvas.style.cursor = 'grabbing';
      try { canvas.setPointerCapture(e.pointerId); } catch {}
      setHover(null);
      invalidate();
    };
    const onUp = (e: PointerEvent) => {
      const wasPan = drag.panning;
      drag.id = null; drag.panning = false;
      canvas.style.cursor = 'grab';
      try { canvas.releasePointerCapture(e.pointerId); } catch {}
      // click (little movement) on a node opens its note
      if (wasPan && Math.hypot(e.clientX - downX, e.clientY - downY) < 5) {
        const rect = canvas.getBoundingClientRect();
        const w = toWorld(e.clientX, e.clientY, rect);
        const n = pick(w.x, w.y);
        if (n) setOpen(n as any);
      }
      invalidate();
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const before = toWorld(e.clientX, e.clientY, rect);
      cam.k = Math.min(Math.max(cam.k * (e.deltaY < 0 ? 1.12 : 1 / 1.12), 0.05), 4);
      const after = toWorld(e.clientX, e.clientY, rect);
      cam.x += after.x - before.x;
      cam.y += after.y - before.y;
      invalidate();
    };

    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.style.cursor = 'grab';
    // continuous redraw while hovering changes state, so force a second frame soon
    setTimeout(() => invalidate(), 50);

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

  return (
    <div ref={wrapRef} style={{ position: 'fixed', inset: 0, background: '#000' }}>
      <canvas ref={canvasRef} style={{ display: 'block', touchAction: 'none' }} />
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none' }}>
        <div style={{ fontSize: '0.8rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
          CONCEPT GRAPH — {data?.title?.toUpperCase() ?? '…'}
        </div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginTop: '0.4rem' }}>
          hover to preview · drag to pan · scroll to zoom
        </div>
      </div>
      <a href={`${BASE}`} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300 }}>⟨ exit ⟩</a>
      {data && (
        <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.5rem', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)' }}>
          {data.nodes.length} CONCEPTS · {data.edges.length} LINKS
        </div>
      )}
      {err && <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>{err}</div>}
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 20, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <button onClick={() => setOpen(null)} style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300, cursor: 'pointer', fontFamily: 'inherit' }}>⟨ exit ⟩</button>
          <div style={{ maxWidth: 640, maxHeight: '80vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.4)' }}>{open.group?.toUpperCase()}</div>
            <div style={{ fontSize: '1.6rem', fontWeight: 300, color: '#fff', letterSpacing: '0.04em' }}>{open.label}</div>
            <div
              className="nomad-note"
              style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, color: 'rgba(255,255,255,0.85)' }}
              dangerouslySetInnerHTML={{ __html: renderRich(open.note || '') }}
            />
          </div>
        </div>
      )}
      {hover && (
        <div style={{
          position: 'absolute', left: Math.min(hover.mx + 18, (wrapRef.current?.clientWidth ?? 800) - 360), top: Math.min(hover.my + 18, (wrapRef.current?.clientHeight ?? 600) - 260),
          maxWidth: 340, background: 'rgba(5,5,5,0.96)', border: '1px solid rgba(255,255,255,0.14)', padding: '1rem 1.1rem',
          pointerEvents: 'none', borderRadius: 2, backdropFilter: 'blur(6px)', maxHeight: 460, overflowY: 'auto',
        }}>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.45)', marginBottom: '0.35rem' }}>{hover.node.group?.toUpperCase()}</div>
          <div style={{ fontSize: '1rem', fontWeight: 400, color: '#fff', marginBottom: '0.5rem' }}>{hover.node.label}</div>
          <div
            className="nomad-note"
            style={{ fontSize: '0.78rem', lineHeight: 1.55, fontWeight: 300, color: 'rgba(255,255,255,0.78)' }}
            dangerouslySetInnerHTML={{ __html: renderRich(hover.node.note || '') }}
          />
        </div>
      )}
    </div>
  );
}
