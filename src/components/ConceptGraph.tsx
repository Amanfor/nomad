import React, { useEffect, useRef, useState } from 'react';
import { useGlowBodyClass } from '../lib/glow';
import { useGestureEngine } from '../lib/gesture/useGestureEngine';
import type { EngineEvents } from '../lib/gesture/engine';
import renderRich from '../lib/renderRich';

type GNode = {
  id: string;
  label: string;
  group: string;
  depth?: number;
  /** layout ring — only present in legacy merged-graph payloads; when set it
   *  drives the radial depth while `depth` keeps its styling meaning. */
  ring?: number;
  note: string;
};
type GEdge = { source: string; target: string; label: string };
type GraphData = { title: string; subject: string; rootId?: string; nodes: GNode[]; edges: GEdge[] };

const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');

export default function ConceptGraph({ topic = 'organic-chemistry' }: { topic?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<GraphData | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [hover, setHover] = useState<{ node: GNode; mx: number; my: number } | null>(null);
  const [open, setOpen] = useState<GNode | null>(null);
  const [playIntro] = useState(() => {
    try {
      const raw = localStorage.getItem('nomad-settings');
      const s = raw ? JSON.parse(raw) : {};
      return s.enableGraphIntro !== false;
    } catch { return true; }
  });
  // Always Glow → body.always-glow (CSS lights the DOM chrome); canvas pixels
  // are lit directly in draw() below since CSS cannot reach a <canvas>.
  const alwaysGlow = useGlowBodyClass();

  // Gestures on the graph: same switch the app uses (Settings → Gesture Mode).
  // Off by default; a camera failure only disables them for this session —
  // the page stays fully usable without gestures.
  const [gestureEnabled, setGestureEnabled] = useState(false);
  const [gestureBlocked, setGestureBlocked] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem('nomad-settings');
      const s = raw ? JSON.parse(raw) : {};
      setGestureEnabled(s.enableGesture === true);
    } catch { setGestureEnabled(false); }
  }, []);

  // Camera control registered by the draw effect below; the gesture handlers
  // call into it (pan/zoom) without re-rendering.
  const camCtlRef = useRef<{
    panBy: (dxPx: number, dyPx: number) => void;
    zoomTo: (kTarget: number, cx: number, cy: number) => void;
    scale: () => number;
  } | null>(null);
  // Two-hand pinch zoom state: per-slot pinch centers (screen px) + baseline.
  const pinchPtsRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const zoomBaseRef = useRef<{ d0: number; k0: number } | null>(null);

  const gestureEvents: EngineEvents = {
    onPinch: (ev, slot) => {
      const pts = pinchPtsRef.current;
      // Raw frame is unmirrored; mirror into the user's frame (same as the app).
      const sx = (1 - ev.x) * window.innerWidth;
      const sy = ev.y * window.innerHeight;
      if (ev.kind === 'end') pts.delete(slot);
      else pts.set(slot, { x: sx, y: sy });
      const ctl = camCtlRef.current;
      if (!ctl || pts.size < 2) { zoomBaseRef.current = null; return; }
      const [a, b] = [...pts.values()];
      const d = Math.max(1, Math.hypot(a.x - b.x, a.y - b.y));
      if (!zoomBaseRef.current) {
        // Baseline captured the frame the second hand starts pinching.
        zoomBaseRef.current = { d0: d, k0: ctl.scale() };
        return;
      }
      // Hands apart → ratio > 1 → zoom in; closer → zoom out. Same clamp as
      // onWheel, world point under the midpoint stays fixed (zoomTo).
      const base = zoomBaseRef.current;
      ctl.zoomTo(base.k0 * (d / base.d0), (a.x + b.x) / 2, (a.y + b.y) / 2);
    },
    onPanFrame: (hand, dxPx, dyPx) => {
      if (hand !== 'right') return; // right fist only
      if (zoomBaseRef.current) return; // two-hand pinch-zoom wins
      camCtlRef.current?.panBy(dxPx, dyPx);
    },
  };

  const { videoRef, streamLive } = useGestureEngine({
    enabled: gestureEnabled && !gestureBlocked,
    events: gestureEvents,
    onFatal: () => setGestureBlocked(true),
  });
  // Drop stale pinch state whenever the camera stops (disable / unmount).
  useEffect(() => {
    if (!streamLive) {
      pinchPtsRef.current.clear();
      zoomBaseRef.current = null;
    }
  }, [streamLive]);

  useEffect(() => {
    fetch(`${BASE}graph/${topic}.json`, { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then(setData)
      .catch(() => setErr('graph data unavailable'));
  }, [topic]);

  useEffect(() => {
    // Android back button should close the big note view, not leave the app
    if (open == null) return;
    let handle: any;
    import('@capacitor/app')
      .then(({ App }) => App.addListener('backButton', () => setOpen(null)))
      .then((h) => (handle = h))
      .catch(() => {});
    return () => {
      try { handle?.remove?.(); } catch {}
    };
  }, [open]);

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
    const root =
      (data.rootId ? byId.get(data.rootId) : undefined) ??
      data.nodes.find((n) => n.id === 'organic-chemistry') ?? data.nodes[0];

    // depth from explicit field (ring first — merged graphs shift layout
    // outward via ring while keeping `depth` for styling), else BFS
    const depth = new Map<string, number>();
    const depthOf = (id: string): number => {
      if (depth.has(id)) return depth.get(id)!;
      const n = byId.get(id);
      const d0 = n?.ring ?? n?.depth;
      if (d0 != null) { depth.set(id, d0); return d0; }
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

    // ── cinematic link build ─────────────────────────────────────────────
    // root blob breathes alone → lasers fire root-outward one by one,
    // each seating its child node → whole graph flares bright, then settles.
    const ROOT_HOLD = 520;      // root alone before the first laser
    const TRAVEL = 320;         // ms for one laser to reach its target
    const GLOW_AT_OFFSET = 180; // pause after last link seats
    const GLOW_DUR = 1200;      // flare up + return to normal
    const introOrder = [...edges].sort((x, y) =>
      depthOf(x.b.id) - depthOf(y.b.id) ||
      ((angle.get(x.b.id) ?? 0) - (angle.get(y.b.id) ?? 0)));
    const nEdges = introOrder.length;
    const stagger = nEdges ? Math.min(34, 1500 / nEdges) : 0;
    const edgeStart = new Map<any, number>();
    introOrder.forEach((e, i) => edgeStart.set(e, 60 + ROOT_HOLD + i * stagger));
    const buildEnd = nEdges ? 60 + ROOT_HOLD + (nEdges - 1) * stagger + TRAVEL : 60 + ROOT_HOLD;
    const GLOW_AT = buildEnd + GLOW_AT_OFFSET;
    const INTRO_END = GLOW_AT + GLOW_DUR;
    const arrive = new Map<string, number>([[root.id, 0]]);
    for (const e of introOrder) arrive.set(e.b.id, edgeStart.get(e)! + TRAVEL);
    const introOn = playIntro;
    let introActive = introOn;
    const introT0 = performance.now();

    let cam = { x: 0, y: 0, k: 1 };
    let drag: { id: string | null; offx: number; offy: number; panning: boolean; lastx: number; lasty: number } = { id: null, offx: 0, offy: 0, panning: false, lastx: 0, lasty: 0 };
    let hoverId: string | null = null;
    let raf = 0;
    let W = 0; let H = 0; let dpr = 1;
    let downX = 0; let downY = 0;
    // multi-touch pinch zoom (mobile has no wheel) — tracks active pointers
    const pointers = new Map<number, { x: number; y: number }>();
    let pinch: { d0: number; k0: number } | null = null;
    let pinchMoved = false;

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

    // fit to content — merged graphs fit the skeleton (ring ≤ 3) so the
    // overview starts readable; zooming out reveals the dimmed full forest
    const fit = () => {
      const src = data.rootId ? nodes.filter((n) => (n.ring ?? 99) <= 3) : nodes;
      const use = src.length ? src : nodes;
      const xs = use.map((n) => n.x);
      const ys = use.map((n) => n.y);
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
      const now = performance.now();
      const t = introActive ? now - introT0 : Infinity;
      // final flare: whole graph brightens then settles back
      let glow = 0;
      if (t >= GLOW_AT && t < INTRO_END) glow = Math.sin(((t - GLOW_AT) / GLOW_DUR) * Math.PI);
      const boost = (base: number) => Math.min(1, base * (1 + 4.2 * glow) + 0.06 * glow);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);
      ctx.save();
      ctx.translate(W / 2, H / 2);
      ctx.scale(cam.k, cam.k);
      ctx.translate(cam.x, cam.y);
      const L = litSets();
      // Merged full-syllabus graph: below this zoom only the skeleton
      // (root → hubs → topic roots) draws edges and labels; the deep forest
      // stays as dim texture until you zoom in. Per-topic pages (no rootId)
      // never enter overview mode, so their rendering is unchanged.
      const atOverview = !introActive && !!data.rootId && cam.k < 0.6;

      ctx.lineWidth = 1 / cam.k;
      const rootNode = nodes.find((n) => n.id === root.id);
      const cx0 = rootNode ? rootNode.dx : 0;
      const cy0 = rootNode ? rootNode.dy : 0;
      for (const e of edges) {
        const a = e.a, b = e.b;
        // cinematic laser progress along this link
        let p = 1;
        let endT = -Infinity;
        if (introActive) {
          const st = edgeStart.get(e) ?? Infinity;
          if (t < st) continue; // not fired yet
          endT = st + TRAVEL;
          p = Math.min((t - st) / TRAVEL, 1);
        }
        // overview: skeleton edges only, plus whatever chain is lit by hover
        if (atOverview
          && !((a.ring ?? 99) <= 2 && (b.ring ?? 99) <= 2)
          && !(L && L.lit.has(a.id) && L.lit.has(b.id))) continue;
        const hot = L && (L.lit.has(a.id) && L.lit.has(b.id) && (a.id === hoverId || b.id === hoverId || L.anc.has(a.id) || L.desc.has(a.id)));
        // always-glow: every link sits at its lit alpha, hovering dims nothing
        const base = alwaysGlow ? 0.55 : L ? (hot ? 0.6 : 0.06) : 0.18;
        // freshly-seated links stay bright for a moment; global glow lifts everything
        const seat = introActive ? Math.exp(-(t - endT) / 480) : 0;
        const alpha = boost(Math.min(0.95, base + seat * 0.75));
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = (p < 1 ? 1.6 : 1 + 0.6 * glow) / cam.k;

        const ax = a.x + a.dx, ay = a.y + a.dy;
        const bx = b.x + b.dx, by = b.y + b.dy;
        let tipX = bx, tipY = by;
        ctx.beginPath();
        if (a.rad < 1) {
          tipX = ax + (bx - ax) * p; tipY = ay + (by - ay) * p;
          ctx.moveTo(ax, ay);
          ctx.lineTo(tipX, tipY);
        } else {
          const aA = a.angle;
          let delta = b.angle - aA;
          if (delta > Math.PI) delta -= Math.PI * 2;
          if (delta < -Math.PI) delta += Math.PI * 2;
          const arcLen = Math.abs(delta) * a.rad;
          const exx = cx0 + Math.cos(aA + delta) * a.rad;
          const eyy = cy0 + Math.sin(aA + delta) * a.rad;
          const lineLen = Math.hypot(bx - exx, by - eyy);
          const total = arcLen + lineLen;
          const dist = total * p;
          ctx.moveTo(ax, ay);
          try {
            if (dist <= arcLen || lineLen < 1e-6) {
              const sweep = delta * (arcLen > 0 ? Math.min(dist / arcLen, 1) : 0);
              ctx.arc(cx0, cy0, a.rad, aA, aA + sweep, delta < 0);
              tipX = cx0 + Math.cos(aA + sweep) * a.rad;
              tipY = cy0 + Math.sin(aA + sweep) * a.rad;
            } else {
              ctx.arc(cx0, cy0, a.rad, aA, aA + delta, delta < 0);
              const q = Math.min((dist - arcLen) / lineLen, 1);
              tipX = exx + (bx - exx) * q;
              tipY = eyy + (by - eyy) * q;
              ctx.lineTo(tipX, tipY);
            }
          } catch { /* ignore */ }
        }
        ctx.stroke();

        // laser head: bright blooming tip while the link is still firing
        if (introActive && p < 1) {
          const r = 16 / cam.k;
          const g2 = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, r);
          g2.addColorStop(0, 'rgba(255,255,255,0.95)');
          g2.addColorStop(0.35, 'rgba(255,255,255,0.5)');
          g2.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = g2;
          ctx.beginPath();
          ctx.arc(tipX, tipY, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = 'rgba(255,255,255,1)';
          ctx.beginPath();
          ctx.arc(tipX, tipY, 2.4 / cam.k, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      for (const n of nodes) {
        // node fades in as its link seats; root breathes before the first shot
        let va = 1;
        if (introActive) {
          const ar = arrive.get(n.id) ?? Infinity;
          va = Math.max(0, Math.min((t - ar) / 260, 1));
          if (va <= 0) continue;
        }
        const hot = alwaysGlow || !L || L.lit.has(n.id);
        // overview: deep nodes dim to texture so the skeleton reads cleanly
        const dim = atOverview && (n.ring ?? 99) > 2 && !(L && L.lit.has(n.id)) ? 0.34 : 1;
        const isRoot = n.id === root.id;
        const breathe = introActive && isRoot && t < 60 + ROOT_HOLD
          ? 1 + 0.16 * Math.sin((t / 460) * Math.PI * 2) + 0.25 * Math.max(0, 1 - t / 600)
          : 1;
        const r = (n.id === hoverId ? 5 : 2.5 + (n.depth === 0 ? 3 : n.depth === 1 ? 1.5 : 0))
          * breathe * va * (1 + 0.45 * glow);
        ctx.beginPath();
        ctx.arc(n.x + n.dx, n.y + n.dy, Math.max(r, 0.01), 0, Math.PI * 2);
        const na = boost((hot ? 0.95 : 0.12) * va) * dim * (isRoot ? breathe * 0.9 + 0.1 : 1);
        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, na)})`;
        ctx.fill();
        // soft halo on the root while it breathes
        if (introActive && isRoot && t < 60 + ROOT_HOLD + 200) {
          const hr = 46 / cam.k;
          const hg = ctx.createRadialGradient(n.x + n.dx, n.y + n.dy, 0, n.x + n.dx, n.y + n.dy, hr);
          const ha = 0.28 * Math.max(0, 1 - t / (60 + ROOT_HOLD + 200)) * (0.7 + 0.3 * Math.sin(t / 160));
          hg.addColorStop(0, `rgba(255,255,255,${ha})`);
          hg.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.fillStyle = hg;
          ctx.beginPath();
          ctx.arc(n.x + n.dx, n.y + n.dy, hr, 0, Math.PI * 2);
          ctx.fill();
        }
        const big = n.depth === 0 || n.depth === 1;
        const size = n.depth === 0 ? 15 : n.depth === 1 ? 12.5 : 11;
        // Label policy: skeleton always (merged: ring ≤ 2 = root/hubs/topic
        // roots; per-topic: depth ≤ 1). always-glow only lights labels that
        // are legible at this zoom — sub-8px text is speckle, not information.
        // Merged overview withholds chapter labels until you zoom in.
        const skeleton = n.ring != null ? n.ring <= 2 : (n.depth ?? 99) <= 1;
        const screenPx = (size * Math.min(cam.k, 0.6)) / 0.6;
        const showLabel =
          (L != null && L.lit.has(n.id)) ||
          skeleton ||
          (!atOverview && ((n.depth ?? 99) <= 1 || (alwaysGlow && screenPx >= 8)));
        if (!showLabel) continue;
        ctx.font = `${n.id === hoverId || big ? 500 : 300} ${size / Math.max(cam.k, 0.6)}px Inter, sans-serif`;
        const la = boost((hot ? 0.9 : L ? 0.08 : 0.55) * va);
        ctx.fillStyle = `rgba(255,255,255,${Math.min(1, la)})`;
        if (n.depth === 0) {
          ctx.textAlign = 'center';
          ctx.fillText(n.label, n.x + n.dx, n.y + n.dy - 18 - (breathe - 1) * 14);
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
      // full-screen flare wash during the final glow
      if (glow > 0.001) {
        ctx.fillStyle = `rgba(255,255,255,${0.05 * glow})`;
        ctx.fillRect(0, 0, W, H);
      }
      if (introActive && t >= INTRO_END) introActive = false;
    };

    let dirty = true;
    const loop = () => { if (dirty || introActive) { draw(); dirty = false; } raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    const invalidate = () => { dirty = true; };

    // Gesture-driven camera control (two-hand pinch zoom, right-fist pan).
    // Only touches `cam`, which the intro animation never writes, so the two
    // never fight.
    camCtlRef.current = {
      panBy(dxPx, dyPx) {
        cam.x += dxPx / cam.k;
        cam.y += dyPx / cam.k;
        invalidate();
      },
      zoomTo(kTarget, cx, cy) {
        const rect = canvas.getBoundingClientRect();
        const before = toWorld(cx, cy, rect);
        cam.k = Math.min(Math.max(kTarget, 0.05), 4);
        const after = toWorld(cx, cy, rect);
        cam.x += after.x - before.x;
        cam.y += after.y - before.y;
        invalidate();
      },
      scale: () => cam.k,
    };

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
      if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinch && pointers.size >= 2) {
        // two fingers moving apart/pinch → zoom around the midpoint,
        // same keep-world-point-fixed math as onWheel
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const rect = canvas.getBoundingClientRect();
        const before = toWorld(mx, my, rect);
        cam.k = Math.min(Math.max(pinch.k0 * (d / pinch.d0), 0.05), 4);
        const after = toWorld(mx, my, rect);
        cam.x += after.x - before.x;
        cam.y += after.y - before.y;
        if (Math.abs(d - pinch.d0) > 12) pinchMoved = true;
        invalidate();
        return;
      }
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
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        // second finger down: pan → pinch (first finger's down state is kept for onUp)
        const [a, b] = [...pointers.values()];
        pinch = { d0: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)), k0: cam.k };
        pinchMoved = false;
        drag.panning = false;
        canvas.style.cursor = 'grabbing';
        return;
      }
      if (pointers.size > 2) return;
      downX = e.clientX; downY = e.clientY;
      // nodes are fixed; any press-and-drag pans the canvas
      drag.panning = true; drag.lastx = e.clientX; drag.lasty = e.clientY; canvas.style.cursor = 'grabbing';
      try { canvas.setPointerCapture(e.pointerId); } catch {}
      setHover(null);
      invalidate();
    };
    const onUp = (e: PointerEvent) => {
      pointers.delete(e.pointerId);
      const wasPinch = pinchMoved;          // sticky until every finger lifts
      if (pointers.size < 2) pinch = null;
      const wasPan = drag.panning;
      drag.id = null; drag.panning = false;
      canvas.style.cursor = 'grab';
      try { canvas.releasePointerCapture(e.pointerId); } catch {}
      if (pointers.size === 1) {
        // one finger remains after a pinch: resume panning without a jump
        const rest = [...pointers.values()][0];
        downX = rest.x; downY = rest.y;
        drag.lastx = rest.x; drag.lasty = rest.y;
        drag.panning = true;
      } else if (pointers.size === 0) {
        pinchMoved = false;
      }
      // click (little movement) on a node opens its note — never after a pinch-zoom
      if (!wasPinch && wasPan && Math.hypot(e.clientX - downX, e.clientY - downY) < 5) {
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
      camCtlRef.current = null;
    };
  }, [data, alwaysGlow]);

  return (
    <div ref={wrapRef} style={{ position: 'fixed', inset: 0, background: '#000' }}>
      <canvas ref={canvasRef} style={{ display: 'block', touchAction: 'none' }} />
      {/* Gesture camera (two-hand pinch zoom, right-fist pan). Always mounted,
          never display:none, so frames keep decoding while the stream is live. */}
      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        aria-hidden
        style={{ position: 'fixed', top: 0, left: 0, width: 1, height: 1, opacity: 0, pointerEvents: 'none', zIndex: 0 }}
      />
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none' }}>
        <div style={{ fontSize: '0.8rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
          CONCEPT GRAPH — {data?.title?.toUpperCase() ?? '…'}
        </div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginTop: '0.4rem' }}>
          hover to preview · drag to pan · scroll to zoom
        </div>
      </div>
      <a href={`${BASE}graph`} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300 }}>⟨ exit ⟩</a>
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
            <div style={{ fontSize: '1.6rem', fontWeight: 300, color: '#fff', letterSpacing: '0.04em' }} dangerouslySetInnerHTML={{ __html: renderRich(open.label || '') }} />
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
          <div style={{ fontSize: '1rem', fontWeight: 400, color: '#fff', marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: renderRich(hover.node.label || '') }} />
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
