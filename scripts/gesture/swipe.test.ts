// Synthetic-stream unit tests for the gesture detector. No dev dependencies:
//   npx esbuild scripts/gesture/swipe.test.ts --bundle --format=esm --outfile=/tmp/opencode/swipe_test.mjs
//   node /tmp/opencode/swipe_test.mjs
import { GestureDetector, GestureSample } from '../../src/lib/gesture/swipe';
import { classifyHandShape } from '../../src/lib/gesture/handShape';

let failures = 0;
function check(name: string, cond: boolean) {
  if (cond) console.log(`ok   ${name}`);
  else { failures++; console.log(`FAIL ${name}`); }
}

const V = 'victory';
const PALM = 'open_palm';
const FIST = 'closed_fist';
const OTHER = 'other';

function stream(
  pose: string,
  from: [number, number],
  to: [number, number],
  durationMs: number,
  stepMs = 33,
  t0 = 0,
): GestureSample[] {
  const out: GestureSample[] = [];
  const n = Math.max(2, Math.round(durationMs / stepMs));
  for (let i = 0; i <= n; i++) {
    const f = i / n;
    out.push({
      t: t0 + Math.round(f * durationMs),
      x: from[0] + (to[0] - from[0]) * f,
      y: from[1] + (to[1] - from[1]) * f,
      gesture: pose,
    });
  }
  return out;
}

function collect(det: GestureDetector, samples: GestureSample[]) {
  const actions: string[] = [];
  for (const s of samples) {
    const a = det.push(s);
    if (a) actions.push(a);
  }
  return actions;
}

// 1–4. two-finger swipes in all four directions fire.
{
  const cases: Array<[string, string, [number, number], [number, number]]> = [
    ['swipe-right', 'swipe-right', [0.7, 0.5], [0.4, 0.52]],
    ['swipe-left', 'swipe-left', [0.3, 0.5], [0.6, 0.52]],
    ['swipe-up', 'swipe-up', [0.5, 0.7], [0.52, 0.4]],
    ['swipe-down', 'swipe-down', [0.5, 0.3], [0.52, 0.6]],
  ];
  for (const [label, expected, from, to] of cases) {
    const det = new GestureDetector();
    const actions = collect(det, stream(V, from, to, 250));
    check(label, actions.length === 1 && actions[0] === expected);
  }
}

// 5. Same motions with an open hand or fist are ignored.
{
  for (const pose of [PALM, FIST, OTHER]) {
    const det = new GestureDetector();
    const actions = collect(det, stream(pose, [0.7, 0.5], [0.4, 0.52], 250));
    check(`swipe with ${pose} ignored`, actions.length === 0);
  }
}

// 6. Slow drift (below threshold) → no swipe.
{
  const det = new GestureDetector();
  const actions = collect(det, stream(V, [0.4, 0.5], [0.55, 0.5], 1200));
  check('slow drift ignored', actions.length === 0);
}

// 7. Diagonal (no dominant axis) → ignored.
{
  const det = new GestureDetector();
  const actions = collect(det, stream(V, [0.3, 0.3], [0.6, 0.62], 200));
  check('diagonal ignored', actions.length === 0);
}

// 8. Jitter → ignored.
{
  const det = new GestureDetector();
  const detSamples: GestureSample[] = [];
  for (let i = 0; i < 10; i++) {
    detSamples.push({ t: i * 33, x: 0.5 + (i % 2 ? 0.03 : -0.03), y: 0.5 + (i % 2 ? -0.03 : 0.03), gesture: V });
  }
  check('jitter ignored', collect(det, detSamples).length === 0);
}

// 9. Held palm (still) fires reveal once; held fist fires conceal once.
{
  const det = new GestureDetector();
  const palmRun = stream(PALM, [0.5, 0.5], [0.5, 0.5], 900);
  const actions = collect(det, palmRun);
  check('held palm → reveal once', actions.length === 1 && actions[0] === 'reveal');
}
{
  const det = new GestureDetector();
  const fistRun = stream(FIST, [0.5, 0.5], [0.5, 0.5], 900);
  const actions = collect(det, fistRun);
  check('held fist → conceal once', actions.length === 1 && actions[0] === 'conceal');
}

// 10. Palm/fist held while moving (waving) → ignored.
{
  const det = new GestureDetector();
  const waving = stream(PALM, [0.3, 0.5], [0.7, 0.5], 900);
  check('waving palm ignored', collect(det, waving).length === 0);
  const det2 = new GestureDetector();
  const wavingFist = stream(FIST, [0.5, 0.3], [0.5, 0.7], 900);
  check('waving fist ignored', collect(det2, wavingFist).length === 0);
}

// 10b. Palm held still but only 400ms → ignored (< 700ms).
{
  const det = new GestureDetector();
  check('short palm hold ignored', collect(det, stream(PALM, [0.5, 0.5], [0.5, 0.5], 400)).length === 0);
}

// 11. Cooldown: two quick swipes → second is dropped; later one works.
{
  const det = new GestureDetector();
  const first = stream(V, [0.7, 0.5], [0.4, 0.5], 200, 33, 0);
  const a1 = collect(det, first);
  const gap = stream(OTHER, [0.4, 0.5], [0.4, 0.5], 100, 33, 200);
  collect(det, gap);
  const second = stream(V, [0.4, 0.5], [0.7, 0.5], 200, 33, 350); // starts 150ms after first
  const a2 = collect(det, second);
  check('cooldown blocks immediate second swipe', a1.length === 1 && a2.length === 0);
  const gap2 = stream(OTHER, [0.7, 0.5], [0.7, 0.5], 1000, 33, 600);
  collect(det, gap2);
  const third = stream(V, [0.7, 0.5], [0.4, 0.5], 200, 33, 1700);
  const a3 = collect(det, third);
  check('swipe after cooldown works', a3.length === 1 && a3[0] === 'swipe-right');
}

// 12. One action per continuous swipe.
{
  const det = new GestureDetector();
  const drag = stream(V, [0.8, 0.5], [0.2, 0.5], 900);
  const actions = collect(det, drag);
  check('continuous drag fires exactly once', actions.length === 1);
}

// 13. Swipe needs ≥70% victory frames in the window.
{
  const det = new GestureDetector();
  const mixed: GestureSample[] = [];
  for (let i = 0; i <= 8; i++) {
    mixed.push({ t: i * 33, x: 0.7 - 0.033 * i, y: 0.5, gesture: i % 2 === 0 ? V : OTHER });
  }
  check('half-victory swipe ignored', collect(det, mixed).length === 0);
}

// 14. classifyHandShape on synthetic landmarks.
function lmFor(ext: [boolean, boolean, boolean, boolean]): Array<{ x: number; y: number }> {
  const pts: Array<{ x: number; y: number }> = [{ x: 0, y: 0.9 }]; // 0 wrist
  const spots: Array<[number, number]> = [
    [2, 5], [2, 6], [2, 7], [2, 8],
    [5, 5], [5, 6], [5, 7], [5, 8],
    [8, 5], [8, 6], [8, 7], [8, 8],
    [11, 5], [11, 6], [11, 7], [11, 8],
    [14, 5], [14, 6], [14, 7], [14, 8],
    [17, 5], [17, 6], [17, 7], [17, 8],
  ];
  for (const s of spots) pts.push({ x: s[0] / 20, y: s[1] / 10 });
  const fingerTips = [8, 12, 16, 20];
  const fingerPips = [6, 10, 14, 18];
  for (let f = 0; f < 4; f++) {
    const pipIdx = fingerPips[f];
    const w = pts[0];
    const pip = pts[pipIdx];
    const d = Math.hypot(pip.x - w.x, pip.y - w.y);
    pts[fingerTips[f]] = ext[f]
      ? { x: w.x, y: w.y - d * 1.5 } // clearly beyond pip
      : { x: w.x, y: w.y - d * 0.5 }; // pulled back toward wrist
  }
  return pts;
}
check('open_palm classified', classifyHandShape(lmFor([true, true, true, true])) === 'open_palm');
check('closed_fist classified', classifyHandShape(lmFor([false, false, false, false])) === 'closed_fist');
check('victory classified', classifyHandShape(lmFor([true, true, false, false])) === 'victory');
check('pointing finger is not victory', classifyHandShape(lmFor([true, false, false, false])) === 'other');

console.log(failures === 0 ? 'ALL PASS' : `${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
