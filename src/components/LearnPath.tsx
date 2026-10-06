import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useGlowBodyClass } from '../lib/glow';
import renderRich from '../lib/renderRich';

/** Linear active-learning path (main graph replacement):
 *      JEE ──┬── physics   (top)
 *            ├── maths     (middle)
 *            └── chemistry (bottom)
 *  each subject branches into chapter blobs; each chapter is ONE horizontal
 *  line: [note][qset…][note][qset…]… — circuit-style right-angle edges.
 *
 *  • clicking a note opens it with ⟨next note⟩ (left, skips concept + its
 *    questions) and ⟨mark as done⟩ (right)
 *  • done/solved blobs glow permanently; everything else glows once on load,
 *    then dims; skipped blobs keep a dashed outline
 *  • marking done reveals that concept's question sets and opens the first
 *    question immediately; a chapter-end set appears once the line is covered
 *  • progress = (notes done|skipped + questions solved) / totals — top bar
 *    shows %covered, chapter blobs show their own % once zoomed in
 */

const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');
const TAU = Math.PI * 2;
const LS_KEY = 'nomad.learn.v1';

type NodeType = 'root' | 'subject' | 'chapter' | 'note' | 'concept' | 'qset';
type LNode = {
  id: string; type: NodeType; label: string; x: number; y: number;
  subject?: string; chapter?: string; note?: string;
  showAfter?: string; pattern?: string; formula?: string;
  count?: number; years?: number[]; ids?: string[];
};
type LEdge = { from: string; to: string; pts: number[][] };
type ChapterMeta = {
  id: string; label: string; subject: string; x: number; y: number;
  itemsTotal: number; questionsTotal: number;
};
type LearnData = {
  title: string; rootId: string; nodes: LNode[]; edges: LEdge[];
  chapters: Record<string, ChapterMeta>; subjects: string[];
  totals: { items: number; questions: number };
};
type Q = { q: string; o: string[]; c: number; y: string; s: string };
type ChapterContent = { notes: Record<string, string>; questions: Record<string, Q> };
type Progress = {
  done: Record<string, number>;
  skipped: Record<string, number>;
  solved: Record<string, number[]>;
};
type Panel = { mode: 'note'; id: string } | { mode: 'qset'; id: string; qi: number };

const RAD: Record<NodeType, number> = { root: 26, subject: 20, chapter: 13, note: 8.5, concept: 8.5, qset: 6 };
const MIN_PX: Record<NodeType, number> = { root: 13, subject: 10, chapter: 6.5, note: 4.5, concept: 4.5, qset: 3.5 };

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return { done: p.done || {}, skipped: p.skipped || {}, solved: p.solved || {} };
    }
  } catch {}
  return { done: {}, skipped: {}, solved: {} };
}

const btn = (side: 'left' | 'right'): React.CSSProperties => ({
  position: 'fixed', bottom: '2rem', [side === 'left' ? 'left' : 'right']: '2.5rem',
  background: 'none', border: '1px solid rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.92)',
  padding: '0.75rem 1.7rem', fontSize: '0.8rem', letterSpacing: '0.15em', fontWeight: 300,
  cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.15s, color 0.15s',
});
const btnHover = (e: React.MouseEvent<HTMLButtonElement>, on: boolean) => {
  e.currentTarget.style.background = on ? '#fff' : 'none';
  e.currentTarget.style.color = on ? '#000' : 'rgba(255,255,255,0.92)';
};

export default function LearnPath() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState<LearnData | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [progress, setProgress] = useState<Progress>(loadProgress);
  const [panel, setPanel] = useState<Panel | null>(null);
  const [content, setContent] = useState<Record<string, ChapterContent>>({});
  const [answer, setAnswer] = useState<number | null>(null);
  const alwaysGlow = useGlowBodyClass();

  // camera + intro state survives draw-effect re-runs (progress changes)
  const camRef = useRef({ x: 0, y: 0, k: 0.12 });
  const flyRef = useRef<{ wx: number; wy: number; k: number; fx: number; fy: number; t0: number; s?: { x: number; y: number; k: number } } | null>(null);
  const introT0Ref = useRef(0);
  const revealedAtRef = useRef(new Map<string, number>());
  const hoverRef = useRef<string | null>(null);
  const fetchingRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    try { localStorage.setItem(LS_KEY, JSON.stringify(progress)); } catch {}
  }, [progress]);

  useEffect(() => {
    fetch(`${BASE}learn.json`, { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: LearnData) => { setData(d); introT0Ref.current = performance.now(); })
      .catch(() => setErr('learn data unavailable'));
  }, []);

  // Android back button closes the panel, not the app
  useEffect(() => {
    if (panel == null) return;
    let handle: any;
    import('@capacitor/app')
      .then(({ App }) => App.addListener('backButton', () => setPanel(null)))
      .then((h) => (handle = h))
      .catch(() => {});
    return () => { try { handle?.remove?.(); } catch {} };
  }, [panel]);

  // ── indexes over the structure (data-only) ───────────────────────────────
  const idx = useMemo(() => {
    if (!data) return null;
    const byId = new Map(data.nodes.map((n) => [n.id, n] as const));
    const lineItems = new Map<string, string[]>();
    const itemQsets = new Map<string, string[]>();
    const endQsets = new Map<string, string[]>();
    const nextX = new Map<string, number>();
    for (const n of data.nodes) {
      if (n.type === 'qset') {
        if (n.showAfter === 'ALL') {
          const a = endQsets.get(n.chapter!) ?? []; a.push(n.id); endQsets.set(n.chapter!, a);
        } else {
          const a = itemQsets.get(n.showAfter!) ?? []; a.push(n.id); itemQsets.set(n.showAfter!, a);
        }
      } else if (n.type === 'note' || n.type === 'concept') {
        const a = lineItems.get(n.chapter!) ?? []; a.push(n.id); lineItems.set(n.chapter!, a);
      }
    }
    const byX = (ids: string[]) => ids.sort((a, b) => byId.get(a)!.x - byId.get(b)!.x);
    for (const [, v] of lineItems) {
      byX(v);
      v.forEach((id, i) => { const nx = byId.get(v[i + 1]); if (nx) nextX.set(id, nx.x); });
    }
    for (const [, v] of itemQsets) byX(v);
    for (const [, v] of endQsets) byX(v);
    return { byId, lineItems, itemQsets, endQsets, nextX };
  }, [data]);

  // ── progress-aware helpers ───────────────────────────────────────────────
  const chapterComplete = (cs: string, extra?: string): boolean => {
    const items = idx?.lineItems.get(cs) ?? [];
    return items.every((id) => progress.done[id] || progress.skipped[id] || id === extra);
  };
  const isRevealed = (qs: LNode): boolean => {
    if ((progress.solved[qs.id] || []).length > 0) return true;
    const sa = qs.showAfter!;
    if (sa === 'ALL') return !!qs.chapter && chapterComplete(qs.chapter);
    return !!progress.done[sa];
  };
  const stateOf = (n: LNode): 'done' | 'skipped' | 'pending' | 'solved' | 'partial' => {
    if (n.type === 'qset') {
      const s = (progress.solved[n.id] || []).length;
      if (s >= (n.count || 1)) return 'solved';
      if (s > 0) return 'partial';
      return 'pending';
    }
    if (progress.done[n.id]) return 'done';
    if (progress.skipped[n.id]) return 'skipped';
    return 'pending';
  };
  const firstUnsolved = (qs: LNode): number => {
    const doneSet = new Set(progress.solved[qs.id] || []);
    for (let i = 0; i < (qs.count || 1); i++) if (!doneSet.has(i)) return i;
    return 0;
  };

  const stats = useMemo(() => {
    if (!data || !idx) return null;
    const per: Record<string, { items: number; itemsCov: number; qTotal: number; solvedQ: number; total: number; pct: number }> = {};
    let gItemsCov = 0, gItems = 0, gSolved = 0, gQ = 0;
    for (const cs of Object.keys(data.chapters)) {
      const items = idx.lineItems.get(cs) ?? [];
      let itemsCov = 0, qTotal = 0, solvedQ = 0;
      for (const id of items) if (progress.done[id] || progress.skipped[id]) itemsCov++;
      for (const qs of data.nodes) {
        if (qs.type !== 'qset' || qs.chapter !== cs) continue;
        const hiddenSkip = qs.showAfter !== 'ALL' && progress.skipped[qs.showAfter!];
        if (hiddenSkip) continue;                 // skipped concept ⇒ its questions pass too
        qTotal += qs.count || 0;
        solvedQ += Math.min((progress.solved[qs.id] || []).length, qs.count || 0);
      }
      const total = items.length + qTotal;
      const covered = Math.min(itemsCov + solvedQ, total);
      per[cs] = { items: items.length, itemsCov, qTotal, solvedQ, total, pct: total ? covered / total : 0 };
      gItemsCov += itemsCov; gItems += items.length; gSolved += solvedQ; gQ += qTotal;
    }
    const gTotal = gItems + gQ;
    const gCov = Math.min(gItemsCov + gSolved, gTotal);
    return {
      per,
      global: { itemsCov: gItemsCov, items: gItems, solvedQ: gSolved, qTotal: gQ, pct: gTotal ? gCov / gTotal : 0 },
    };
  }, [data, idx, progress]);

  // ── content (lazy per chapter) ───────────────────────────────────────────
  const ensureContent = (cs: string): boolean => {
    if (content[cs]) return true;
    if (!fetchingRef.current.has(cs)) {
      fetchingRef.current.add(cs);
      fetch(`${BASE}learn/${cs}.json`, { cache: 'no-cache' })
        .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
        .then((c: ChapterContent) => {
          setContent((prev) => ({ ...prev, [cs]: c }));
          fetchingRef.current.delete(cs);
        })
        .catch(() => { fetchingRef.current.delete(cs); });
    }
    return false;
  };

  // ── navigation ───────────────────────────────────────────────────────────
  const flyTo = (wx: number, wy: number, k: number, fx = 0.3, fy = 0.5) => {
    flyRef.current = { wx, wy, k, fx, fy, t0: performance.now() };
  };
  const openNote = (id: string) => {
    const n = idx?.byId.get(id);
    if (!n) return;
    setAnswer(null);
    setPanel({ mode: 'note', id });
    if (n.chapter) ensureContent(n.chapter);
    flyTo(n.x - 60, n.y, 0.85, 0.3, 0.5);
  };
  const openQset = (id: string, qi: number) => {
    const n = idx?.byId.get(id);
    if (!n) return;
    setAnswer(null);
    setPanel({ mode: 'qset', id, qi: Math.max(0, Math.min(qi, (n.count || 1) - 1)) });
    if (n.chapter) ensureContent(n.chapter);
    flyTo(n.x - 120, n.y, 0.85, 0.32, 0.5);
  };
  /** advance past an item; `justCovered` names an item covered by the action
   *  firing right now (state not committed yet) so chapter-end sets reveal. */
  const advanceAfter = (itemId: string, justCovered?: string): boolean => {
    const n = idx!.byId.get(itemId)!;
    const items = idx!.lineItems.get(n.chapter!) ?? [];
    const pos = items.indexOf(itemId);
    const next = items[pos + 1];
    if (next) { openNote(next); return true; }
    const ends = (idx!.endQsets.get(n.chapter!) ?? []).map((q) => idx!.byId.get(q)!);
    const open = ends.find((q) =>
      (progress.solved[q.id] || []).length < (q.count || 1) &&
      (q.showAfter === 'ALL' ? chapterComplete(q.chapter!, justCovered) : isRevealed(q)));
    if (open) { openQset(open.id, firstUnsolved(open)); return true; }
    setPanel(null);
    return false;
  };
  const nextNote = () => {
    if (panel?.mode !== 'note') return;
    const id = panel.id;
    if (!progress.done[id]) {
      setProgress((p) => {
        if (p.done[id]) return p;
        return { ...p, skipped: { ...p.skipped, [id]: Date.now() } };
      });
    }
    advanceAfter(id, id);   // the skip itself may complete the chapter
  };
  const markDone = () => {
    if (panel?.mode !== 'note') return;
    const id = panel.id;
    setProgress((p) => {
      const done = { ...p.done, [id]: Date.now() };
      const skipped = { ...p.skipped };
      delete skipped[id];
      return { ...p, done, skipped };
    });
    // all of this concept's sets reveal the moment it's done — take the first
    // one straight from the line (progress state hasn't committed yet)
    const sets = (idx?.itemQsets.get(id) ?? []).map((q) => idx!.byId.get(q)!);
    if (sets.length) {
      const first = sets[0];
      setAnswer(null);
      setPanel({ mode: 'qset', id: first.id, qi: firstUnsolved(first) });
      if (first.chapter) ensureContent(first.chapter);
      flyTo(first.x - 120, first.y, 0.85, 0.32, 0.5);
    }
    // no questions → stay on the note; it now shows as done
  };
  const focusChapter = (cs: string) => {
    const n = idx?.byId.get(cs);
    if (!n) return;
    const items = idx!.lineItems.get(cs) ?? [];
    const resume = items.find((id) => !progress.done[id] && !progress.skipped[id]);
    const target = resume ? idx!.byId.get(resume)! : n;
    flyTo(target.x - 150, target.y, 0.85, 0.22, 0.5);
  };

  // canvas click routing (updated every render so the effect sees fresh closures)
  const fitRef = useRef<((subject?: string) => void) | null>(null);
  const clickRef = useRef<(n: LNode) => void>(() => {});
  clickRef.current = (n: LNode) => {
    if (n.type === 'root') { flyRef.current = null; fitRef.current?.(); }
    else if (n.type === 'subject') fitRef.current?.(n.subject!);
    else if (n.type === 'chapter') focusChapter(n.chapter!);
    else if (n.type === 'qset') openQset(n.id, firstUnsolved(n));
    else openNote(n.id);
  };

  // ── canvas ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!data || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const cam = camRef.current;
    let W = 0, H = 0, dpr = 1, raf = 0;
    let hoverId: string | null = null;
    let downX = 0, downY = 0;
    let panning = false, lastX = 0, lastY = 0;
    const pointers = new Map<number, { x: number; y: number }>();
    let pinch: { d0: number; k0: number } | null = null;
    let pinchMoved = false;
    const struct = data.nodes.filter((n) => n.type === 'root' || n.type === 'subject' || n.type === 'chapter');

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = wrapRef.current?.clientWidth || window.innerWidth;
      H = wrapRef.current?.clientHeight || window.innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = `${W}px`; canvas.style.height = `${H}px`;
    };
    resize();
    window.addEventListener('resize', resize);

    const fitNodes = (ns: LNode[], padX: number, padY: number) => {
      if (!ns.length) return;
      const xs = ns.map((n) => n.x), ys = ns.map((n) => n.y);
      const minX = Math.min(...xs) - padX, maxX = Math.max(...xs) + padX;
      const minY = Math.min(...ys) - padY, maxY = Math.max(...ys) + padY;
      cam.k = Math.max(0.05, Math.min(4, Math.min(W / Math.max(maxX - minX, 1), H / Math.max(maxY - minY, 1))));
      cam.x = -((minX + maxX) / 2);
      cam.y = -((minY + maxY) / 2);
    };
    const fitStruct = (subject?: string) => {
      const ns = subject ? struct.filter((n) => n.subject === subject) : struct;
      const padX = subject ? 900 : 830;   // include the start of the lines
      fitNodes(ns, padX, 80);
    };
    fitRef.current = fitStruct;
    // first load: frame the whole structure; later effect re-runs keep the camera
    if (!introT0Ref.current) introT0Ref.current = performance.now();
    if (Math.abs(cam.k - 0.12) < 1e-9 && cam.x === 0 && cam.y === 0) fitStruct();

    const toWorld = (cx: number, cy: number, rect: DOMRect) => ({
      x: (cx - rect.left - W / 2) / cam.k - cam.x,
      y: (cy - rect.top - H / 2) / cam.k - cam.y,
    });
    const pick = (wx: number, wy: number): LNode | null => {
      let best: LNode | null = null;
      let bestD = Infinity;
      for (const n of data.nodes) {
        if (n.type === 'qset' && !isRevealed(n)) continue;
        const structNode = n.type !== 'note' && n.type !== 'concept' && n.type !== 'qset';
        const r = Math.max(RAD[n.type], (structNode ? 16 : 12) / cam.k);
        const d = Math.hypot(n.x - wx, n.y - wy);
        if (d < r && d < bestD) { best = n; bestD = d; }
      }
      return best;
    };

    // ── input ──────────────────────────────────────────────────────────────
    const onMove = (e: PointerEvent) => {
      if (pointers.has(e.pointerId)) pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinch && pointers.size >= 2) {
        const [a, b] = [...pointers.values()];
        const d = Math.max(1, Math.hypot(a.x - b.x, a.y - b.y));
        if (pinch.k0) {
          const rect = canvas.getBoundingClientRect();
          const midX = (a.x + b.x) / 2, midY = (a.y + b.y) / 2;
          const before = toWorld(midX, midY, rect);
          cam.k = Math.min(Math.max(pinch.k0 * (d / pinch.d0), 0.05), 4);
          const after = toWorld(midX, midY, rect);
          cam.x += after.x - before.x; cam.y += after.y - before.y;
          pinchMoved = true;
        }
        return;
      }
      if (panning) {
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        cam.x += dx / cam.k; cam.y += dy / cam.k;
        lastX = e.clientX; lastY = e.clientY;
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const w = toWorld(e.clientX, e.clientY, rect);
      const n = pick(w.x, w.y);
      const id = n ? n.id : null;
      if (id !== hoverId) {
        hoverId = id;
        canvas.style.cursor = n ? 'pointer' : 'grab';
      }
    };
    const onDown = (e: PointerEvent) => {
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = { d0: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)), k0: cam.k };
        pinchMoved = false;
        panning = false;
        canvas.style.cursor = 'grabbing';
        return;
      }
      if (pointers.size > 2) return;
      downX = e.clientX; downY = e.clientY;
      panning = true; lastX = e.clientX; lastY = e.clientY;
      canvas.style.cursor = 'grabbing';
      try { canvas.setPointerCapture(e.pointerId); } catch {}
    };
    const onUp = (e: PointerEvent) => {
      pointers.delete(e.pointerId);
      const wasPinch = pinchMoved;
      if (pointers.size < 2) pinch = null;
      const wasPan = panning;
      panning = false;
      canvas.style.cursor = 'grab';
      try { canvas.releasePointerCapture(e.pointerId); } catch {}
      if (pointers.size === 1) {
        const rest = [...pointers.values()][0];
        downX = rest.x; downY = rest.y; lastX = rest.x; lastY = rest.y;
        panning = true;
      } else if (pointers.size === 0) {
        pinchMoved = false;
      }
      if (!wasPinch && wasPan && Math.hypot(e.clientX - downX, e.clientY - downY) < 5) {
        const rect = canvas.getBoundingClientRect();
        const w = toWorld(e.clientX, e.clientY, rect);
        const n = pick(w.x, w.y);
        if (n) clickRef.current(n);
      }
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const before = toWorld(e.clientX, e.clientY, rect);
      cam.k = Math.min(Math.max(cam.k * (e.deltaY < 0 ? 1.12 : 1 / 1.12), 0.05), 4);
      const after = toWorld(e.clientX, e.clientY, rect);
      cam.x += after.x - before.x; cam.y += after.y - before.y;
    };
    const onDbl = () => { flyRef.current = null; fitStruct(); };
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerdown', onDown);
    canvas.addEventListener('pointerup', onUp);
    canvas.addEventListener('pointercancel', onUp);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    canvas.addEventListener('dblclick', onDbl);
    canvas.style.cursor = 'grab';

    // ── draw ───────────────────────────────────────────────────────────────
    const introDelay = (n: LNode) => Math.min(950, n.x * 0.045 + n.y * 0.03);

    const draw = () => {
      const now = performance.now();
      // camera fly (eased) — runs before draw so motion is visible behind panels
      const fly = flyRef.current;
      if (fly) {
        if (!fly.s) fly.s = { x: cam.x, y: cam.y, k: cam.k };
        const u = Math.min(1, (now - fly.t0) / 650);
        const e = 1 - Math.pow(1 - u, 3);
        const tk = Math.min(Math.max(fly.k, 0.05), 4);
        const tx = (fly.fx * W - W / 2) / tk - fly.wx;
        const ty = (fly.fy * H - H / 2) / tk - fly.wy;
        cam.x = fly.s.x + (tx - fly.s.x) * e;
        cam.y = fly.s.y + (ty - fly.s.y) * e;
        cam.k = fly.s.k + (tk - fly.s.k) * e;
        if (u >= 1) flyRef.current = null;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);
      ctx.save();
      ctx.translate(W / 2, H / 2);
      ctx.scale(cam.k, cam.k);
      ctx.translate(cam.x, cam.y);

      const panelChapter = panel
        ? (idx?.byId.get(panel.mode === 'note' ? panel.id : panel.id)?.chapter ?? null)
        : null;

      // edges — circuit polylines (right angles), trunks kept quiet
      ctx.lineCap = 'round';
      ctx.lineJoin = 'miter';
      for (const e of data.edges) {
        const a = idx?.byId.get(e.from);
        if (!a) continue;
        const isTrunk = a.type === 'chapter';
        if (isTrunk) {
          const yw = e.pts[0][1];
          if (yw < -cam.y - H / 2 / cam.k || yw > -cam.y + H / 2 / cam.k) continue;
        }
        const active = a.id === hoverId || (isTrunk && a.chapter === panelChapter);
        let alpha = isTrunk ? (active ? 0.65 : 0.17) : 0.5;
        if (!isTrunk && active) alpha = 0.85;
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = (active ? 1.4 : 1) / cam.k;
        ctx.beginPath();
        const [p0, ...rest] = e.pts;
        ctx.moveTo(p0[0], p0[1]);
        for (const p of rest) ctx.lineTo(p[0], p[1]);
        ctx.stroke();
      }

      // blobs
      const vx0 = -cam.x - W / 2 / cam.k - 60, vx1 = -cam.x + W / 2 / cam.k + 60;
      const vy0 = -cam.y - H / 2 / cam.k - 60, vy1 = -cam.y + H / 2 / cam.k + 60;
      for (const n of data.nodes) {
        if (n.x < vx0 || n.x > vx1 || n.y < vy0 || n.y > vy1) continue;
        if (n.type === 'qset' && !isRevealed(n)) continue;
        const st = stateOf(n);
        const rW = Math.max(RAD[n.type], MIN_PX[n.type] / cam.k);

        // intro: glow once on load, then settle (done/solved stay lit forever)
        const u = (now - introT0Ref.current - introDelay(n)) / 700;
        const pulse = u > 0 && u < 1 ? Math.sin(Math.PI * u) : 0;
        const steady = st === 'done' || st === 'solved' ? 1 : st === 'partial' ? 0.55 : 0;
        const breathe = 0.85 + 0.15 * Math.sin(now / 780 + n.x * 0.008);
        const g = Math.max(pulse, steady * breathe);

        // reveal fade for question sets
        let a = 1;
        if (n.type === 'qset') {
          const seen = revealedAtRef.current.get(n.id);
          if (seen == null) { revealedAtRef.current.set(n.id, now); a = 0; }
          else a = Math.min(1, (now - seen) / 420);
        }

        if (g > 0.02) {
          ctx.fillStyle = `rgba(255,255,255,${(0.05 + 0.07 * g) * a})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, rW * 2.6, 0, TAU); ctx.fill();
          ctx.fillStyle = `rgba(255,255,255,${(0.07 + 0.11 * g) * a})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, rW * 1.7, 0, TAU); ctx.fill();
        }

        if (st === 'skipped') {
          ctx.strokeStyle = `rgba(255,255,255,0.42)`;
          ctx.lineWidth = 1.3 / cam.k;
          ctx.setLineDash([3.5 / cam.k, 3 / cam.k]);
          ctx.beginPath(); ctx.arc(n.x, n.y, rW, 0, TAU); ctx.stroke();
          ctx.setLineDash([]);
        } else {
          const coreA = (st === 'pending' ? (pulse > 0.05 ? 0.8 : 0.36) : 0.95) * a;
          ctx.fillStyle = `rgba(255,255,255,${coreA})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, rW, 0, TAU); ctx.fill();
        }

        const sel = panel && (panel.mode === 'note' || panel.mode === 'qset') && panel.id === n.id;
        if (n.id === hoverId || sel) {
          ctx.strokeStyle = 'rgba(255,255,255,0.95)';
          ctx.lineWidth = 1.4 / cam.k;
          ctx.beginPath(); ctx.arc(n.x, n.y, rW + 5 / cam.k, 0, TAU); ctx.stroke();
        }

        // ── labels ────────────────────────────────────────────────────────
        const isStruct = n.type === 'root' || n.type === 'subject' || n.type === 'chapter';
        let fs = 0;
        if (n.type === 'root') fs = 13;
        else if (n.type === 'subject') fs = 11;
        else if (n.type === 'chapter') fs = 9.5;
        else if (n.type === 'qset') fs = 8;
        else fs = 9;
        let show = false;
        if (isStruct) show = true;
        else if (n.type === 'qset') show = n.id === hoverId || st === 'solved' || st === 'partial' || cam.k >= 0.5;
        else show = n.id === hoverId || st === 'done' || st === 'skipped' || cam.k >= 1.15;
        if (sel) show = true;
        if (!show) continue;

        const text = n.type === 'qset' ? `×${n.count}` : n.label;
        ctx.font = `${fs / cam.k}px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        let t = text;
        const maxW = ((idx?.nextX.get(n.id) ?? n.x + 240) - n.x - 14);
        if (n.type !== 'qset' && ctx.measureText(t).width > maxW) {
          while (t.length > 2 && ctx.measureText(t + '…').width > maxW) t = t.slice(0, -1);
          t += '…';
        }
        let alpha = 0.75;
        if (isStruct) alpha = n.type === 'root' ? 0.95 : n.type === 'subject' ? 0.85 : 0.8;
        else if (st === 'done' || st === 'solved') alpha = 0.9;
        else if (st === 'skipped') alpha = 0.4;
        else alpha = n.id === hoverId || sel ? 0.9 : 0.5;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillText(t, n.x, n.y + rW + 7 / cam.k);

        // chapter progress (only once zoomed in enough to read it)
        if (n.type === 'chapter' && n.chapter && cam.k >= 0.3 && stats) {
          const pct = stats.per[n.chapter]?.pct ?? 0;
          if (pct > 0.001) {
            ctx.font = `${7.5 / cam.k}px Inter, sans-serif`;
            ctx.fillStyle = `rgba(255,255,255,0.45)`;
            ctx.fillText(`${Math.round(pct * 100)}%`, n.x, n.y - rW - 13 / cam.k);
          }
        }
      }
      ctx.restore();
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('dblclick', onDbl);
      fitRef.current = null;
    };
    // progress changes re-bind handlers (fresh closures); camera/intro refs persist
  }, [data, progress, panel, idx, stats]);

  // ── panel views ──────────────────────────────────────────────────────────
  const noteView = (() => {
    if (panel?.mode !== 'note' || !idx || !data) return null;
    const n = idx.byId.get(panel.id);
    if (!n) return null;
    const cs = n.chapter!;
    const meta = data.chapters[cs];
    const cont = content[cs];
    const isNote = n.type === 'note';
    const body = !isNote
      ? (n.note || '')
      : cont
        ? cont.notes[n.id.slice(3)] ?? ''
        : '';
    const st = stateOf(n);
    return { n, cs, meta, isNote, body, st, cont };
  })();

  const qsetView = (() => {
    if (panel?.mode !== 'qset' || !idx || !data) return null;
    const qs = idx.byId.get(panel.id);
    if (!qs) return null;
    const cs = qs.chapter!;
    const meta = data.chapters[cs];
    const cont = content[cs];
    const qid = qs.ids?.[panel.qi];
    const q = cont && qid ? cont.questions[qid] : null;
    return { qs, cs, meta, cont, q, qid };
  })();

  const pctText = stats ? `${Math.round(stats.global.pct * 100)}% covered` : '';
  // what the right-hand button will do next: rest of this set → next set → note
  const qsetNextLabel = (() => {
    if (panel?.mode !== 'qset' || !idx) return 'next ⟩';
    const qs = idx.byId.get(panel.id);
    if (!qs) return 'next ⟩';
    if (panel.qi < (qs.count || 1) - 1) return 'next question ⟩';
    const sa = qs.showAfter!;
    const sib = sa === 'ALL'
      ? (idx.endQsets.get(qs.chapter!) ?? [])
      : (idx.itemQsets.get(sa) ?? []);
    const more = sib.some((q) => q !== qs.id && (() => {
      const s = idx.byId.get(q)!;
      return isRevealed(s) && (progress.solved[q] || []).length < (s.count || 1);
    })());
    return more ? 'more questions ⟩' : 'next note ⟩';
  })();

  return (
    <div ref={wrapRef} style={{ position: 'fixed', inset: 0, background: '#000' }}>
      <canvas ref={canvasRef} style={{ display: 'block', touchAction: 'none' }} />

      {/* header */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', pointerEvents: 'none' }}>
        <div style={{ fontSize: '0.8rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.85)', fontWeight: 300 }}>
          LEARN — FULL SYLLABUS
        </div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.35)', marginTop: '0.4rem' }}>
          click a blob · drag to pan · scroll to zoom · double-click to fit
        </div>
      </div>

      {/* real progress bar */}
      {stats && (
        <div style={{ position: 'absolute', top: '1.7rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '0.9rem', pointerEvents: 'none' }}>
          <div style={{ width: 240, height: 3, background: 'rgba(255,255,255,0.14)' }}>
            <div style={{ width: `${stats.global.pct * 100}%`, height: '100%', background: '#fff', transition: 'width 0.4s' }} />
          </div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.75)' }}>{pctText}</div>
        </div>
      )}

      <a href={`${BASE}graph`} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', textDecoration: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300 }}>⟨ exit ⟩</a>
      {stats && (
        <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.5rem', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.25)' }}>
          {stats.global.itemsCov}/{stats.global.items} NOTES · {stats.global.solvedQ}/{stats.global.qTotal} QUESTIONS
        </div>
      )}
      {err && (
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>{err}</div>
      )}
      {!data && !err && (
        <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.25em' }}>loading…</div>
      )}

      {/* ── note panel ── */}
      {noteView && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 20, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <button onClick={() => setPanel(null)} style={{ position: 'fixed', top: '1.5rem', left: '1.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300, cursor: 'pointer', fontFamily: 'inherit' }}>⟨ exit ⟩</button>
          <div style={{ position: 'fixed', top: '1.7rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
            <div style={{ width: 200, height: 3, background: 'rgba(255,255,255,0.14)' }}>
              <div style={{ width: `${(stats?.per[noteView.cs]?.pct ?? 0) * 100}%`, height: '100%', background: '#fff', transition: 'width 0.4s' }} />
            </div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.6)' }}>
              {Math.round((stats?.per[noteView.cs]?.pct ?? 0) * 100)}% COVERED
            </div>
          </div>
          <div style={{ maxWidth: 680, maxHeight: 'calc(100vh - 11rem)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '1rem' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.4)' }}>
              {noteView.meta.subject.toUpperCase()} · {noteView.meta.label.toUpperCase()}
              {noteView.st === 'done' ? ' · DONE' : noteView.st === 'skipped' ? ' · SKIPPED' : ''}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 300, color: '#fff', letterSpacing: '0.03em' }} dangerouslySetInnerHTML={{ __html: renderRich(noteView.n.label || '') }} />
            {noteView.isNote && !noteView.cont && noteView.body === '' ? (
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>loading…</div>
            ) : (
              <div
                className="nomad-note"
                style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, color: 'rgba(255,255,255,0.85)' }}
                dangerouslySetInnerHTML={{
                  __html: renderRich(noteView.body || (noteView.isNote ? 'this note could not be loaded' : '(concept — no note attached)')),
                }}
              />
            )}
          </div>
          <button style={btn('left')} onClick={nextNote} onMouseEnter={(e) => btnHover(e, true)} onMouseLeave={(e) => btnHover(e, false)}>
            next note
          </button>
          <button
            style={{ ...btn('right'), opacity: noteView.st === 'done' ? 0.35 : 1, cursor: noteView.st === 'done' ? 'default' : 'pointer' }}
            onClick={noteView.st === 'done' ? undefined : markDone}
            onMouseEnter={(e) => { if (noteView.st !== 'done') btnHover(e, true); }}
            onMouseLeave={(e) => { if (noteView.st !== 'done') btnHover(e, false); }}
          >
            {noteView.st === 'done' ? 'done' : 'mark as done'}
          </button>
        </div>
      )}

      {/* ── question panel ── */}
      {qsetView && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 20, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <button onClick={() => setPanel(null)} style={{ position: 'fixed', top: '1.5rem', left: '1.5rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.2em', fontWeight: 300, cursor: 'pointer', fontFamily: 'inherit' }}>⟨ exit ⟩</button>
          <div style={{ maxWidth: 680, maxHeight: 'calc(100vh - 11rem)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '1rem' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.4)' }}>
              {qsetView.meta.subject.toUpperCase()} · {qsetView.meta.label.toUpperCase()}
            </div>
            <div style={{ fontSize: '1.25rem', fontWeight: 300, color: '#fff', letterSpacing: '0.03em' }}>
              {qsetView.qs.pattern || 'practice'}
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.45)', marginLeft: '0.8rem' }}>
                {(panel as any)?.qi != null ? (panel as any).qi + 1 : 1}/{qsetView.qs.count}
                {qsetView.qs.years?.length ? ` · ${qsetView.qs.years[0]}–${qsetView.qs.years[qsetView.qs.years.length - 1]}` : ''}
              </span>
            </div>
            {!qsetView.cont || !qsetView.q ? (
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>loading…</div>
            ) : (
              <>
                <div style={{ fontSize: '1rem', lineHeight: 1.8, fontWeight: 300, color: 'rgba(255,255,255,0.9)' }} dangerouslySetInnerHTML={{ __html: renderRich(qsetView.q.q) }} />
                {qsetView.q.o.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {qsetView.q.o.map((opt, i) => {
                      const chosen = answer === i;
                      const answered = answer !== null;
                      const correct = qsetView.q!.c >= 0 && i === qsetView.q!.c;
                      const isWrongChosen = chosen && qsetView.q!.c >= 0 && i !== qsetView.q!.c;
                      return (
                        <button
                          key={i}
                          disabled={answered}
                          onClick={() => {
                            if (answer !== null) return;
                            setAnswer(i);
                            const qsId = qsetView.qs.id;
                            const qi = (panel as { qi: number }).qi;
                            setProgress((p) => {
                              const arr = new Set(p.solved[qsId] || []);
                              arr.add(qi);
                              return { ...p, solved: { ...p.solved, [qsId]: [...arr] } };
                            });
                          }}
                          style={{
                            display: 'flex', gap: '0.9rem', alignItems: 'baseline', textAlign: 'left',
                            background: chosen && correct ? '#fff' : 'none',
                            border: '1px solid ' + (answered && (chosen || correct) ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.25)'),
                            color: chosen && correct ? '#000' : isWrongChosen ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.88)',
                            padding: '0.7rem 1rem', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.5,
                            cursor: answered ? 'default' : 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                            textDecoration: isWrongChosen ? 'line-through' : 'none',
                          }}
                        >
                          <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', opacity: 0.55 }}>({['a', 'b', 'c', 'd'][i]})</span>
                          <span dangerouslySetInnerHTML={{ __html: renderRich(opt) }} />
                          {answered && chosen && qsetView.q!.c >= 0 && correct && <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginLeft: 'auto' }}>CORRECT</span>}
                          {answered && chosen && qsetView.q!.c >= 0 && !correct && <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', marginLeft: 'auto' }}>NOT QUITE</span>}
                        </button>
                      );
                    })}
                  </div>
                )}
                {qsetView.q.o.length === 0 && answer === null && (
                  <button
                    onClick={() => {
                      setAnswer(-2);
                      const qsId = qsetView.qs.id;
                      const qi = (panel as { qi: number }).qi;
                      setProgress((p) => {
                        const arr = new Set(p.solved[qsId] || []);
                        arr.add(qi);
                        return { ...p, solved: { ...p.solved, [qsId]: [...arr] } };
                      });
                    }}
                    style={{ ...btn('left'), position: 'static', alignSelf: 'flex-start' }}
                    onMouseEnter={(e) => btnHover(e, true)} onMouseLeave={(e) => btnHover(e, false)}
                  >
                    show solution
                  </button>
                )}
                {answer !== null && qsetView.q.s && (
                  <div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.4)', marginBottom: '0.6rem' }}>SOLUTION</div>
                    <div className="nomad-note" style={{ fontSize: '0.92rem', lineHeight: 1.75, fontWeight: 300, color: 'rgba(255,255,255,0.8)' }} dangerouslySetInnerHTML={{ __html: renderRich(qsetView.q.s) }} />
                  </div>
                )}
              </>
            )}
          </div>
          <button
            style={btn('left')}
            onClick={() => {
              if (!qsetView) return;
              const sa = qsetView.qs.showAfter!;
              if (sa !== 'ALL' && idx?.byId.get(sa)) openNote(sa);
              else setPanel(null);
            }}
            onMouseEnter={(e) => btnHover(e, true)} onMouseLeave={(e) => btnHover(e, false)}
          >
            ⟨ concept
          </button>
          <button
            style={btn('right')}
            onClick={() => {
              if (!qsetView || !qsetView.qs) return;
              const qs = qsetView.qs;
              const qi = (panel as { qi: number }).qi;
              if (qi < (qs.count || 1) - 1) { openQset(qs.id, qi + 1); return; }
              const sa = qs.showAfter!;
              if (sa !== 'ALL') {
                const sets = (idx?.itemQsets.get(sa) ?? []).map((q) => idx!.byId.get(q)!);
                const next = sets.find((s) => s.id !== qs.id && isRevealed(s) && (progress.solved[s.id] || []).length < (s.count || 1));
                if (next) { openQset(next.id, firstUnsolved(next)); return; }
                advanceAfter(sa);
              } else {
                const ends = (idx?.endQsets.get(qs.chapter!) ?? []).map((q) => idx!.byId.get(q)!);
                const next = ends.find((s) => s.id !== qs.id && isRevealed(s) && (progress.solved[s.id] || []).length < (s.count || 1));
                if (next) { openQset(next.id, firstUnsolved(next)); return; }
                setPanel(null);
              }
            }}
            onMouseEnter={(e) => btnHover(e, true)} onMouseLeave={(e) => btnHover(e, false)}
          >
            {qsetNextLabel}
          </button>
        </div>
      )}
    </div>
  );
}
