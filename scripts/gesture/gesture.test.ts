// Synthetic-stream unit tests for gesture detection. No dev dependencies:
//   npx esbuild scripts/gesture/gesture.test.ts --bundle --format=esm --outfile=/tmp/opencode/gesture_test.mjs
//   node /tmp/opencode/gesture_test.mjs
import { GestureDetector, GestureSample } from '../../src/lib/gesture/hold';
import { PinchDetector, PinchSample } from '../../src/lib/gesture/pinch';
import { classifyHandShape, fingerCountLabel, isThumbUp } from '../../src/lib/gesture/handShape';

let failures = 0;
function check(name: string, cond: boolean) {
  if (cond) console.log(`ok   ${name}`);
  else { failures++; console.log(`FAIL ${name}`); }
}

function run(det: GestureDetector, pose: string, from: [number, number], to: [number, number], durationMs: number, stepMs = 33, t0 = 0) {
  const out: string[] = [];
  const n = Math.max(2, Math.round(durationMs / stepMs));
  for (let i = 0; i <= n; i++) {
    const f = i / n;
    const a = det.push({ t: t0 + Math.round(f * durationMs), x: from[0] + (to[0] - from[0]) * f, y: from[1] + (to[1] - from[1]) * f, gesture: pose });
    if (a) out.push(a);
  }
  return out;
}

// Closed fist held still → conceal.
{
  const det = new GestureDetector();
  const a = run(det, 'closed_fist', [0.5, 0.5], [0.5, 0.5], 900);
  check('held fist → conceal once', a.length === 1 && a[0] === 'closed_fist');
}
// Same fist held continuously never repeats.
{
  const det = new GestureDetector();
  const a = run(det, 'closed_fist', [0.5, 0.5], [0.5, 0.5], 2500);
  check('continuous fist → one conceal total', a.length === 1);
}
// Finger counts select their options.
{
  const cases: Array<[string, string]> = [
    ['count1', 'count1'],
    ['count2', 'count2'],
    ['count3', 'count3'],
    ['count4', 'count4'],
  ];
  for (const [pose, expected] of cases) {
    const det = new GestureDetector();
    const a = run(det, pose, [0.5, 0.5], [0.5, 0.5], 900);
    check(`pose ${pose} held → ${expected}`, a.length === 1 && a[0] === expected);
  }
}
// Closed fist while waving → ignored (stillness radius 0.05).
{
  const det = new GestureDetector();
  const a = run(det, 'closed_fist', [0.3, 0.5], [0.7, 0.5], 900);
  check('waving fist ignored', a.length === 0);
}
// Short pose (<700ms) → ignored.
{
  const det = new GestureDetector();
  const a = run(det, 'count2', [0.5, 0.5], [0.5, 0.5], 400);
  check('short pose hold ignored', a.length === 0);
}
// Count drifting within its looser radius still fires; fist-tight drift does not.
{
  const det = new GestureDetector();
  const a1 = run(det, 'count2', [0.5, 0.5], [0.58, 0.5], 900); // drift 0.08 < 0.12
  check('count2 with small drift fires', a1.length === 1 && a1[0] === 'count2');
  const det2 = new GestureDetector();
  const a2 = run(det2, 'closed_fist', [0.5, 0.5], [0.58, 0.5], 900); // drift 0.08 > 0.05
  check('fist with same drift ignored', a2.length === 0);
}
// Poses can change: conceal, then after cooldown a select-4 (palm) fires.
{
  const det = new GestureDetector();
  const a1 = run(det, 'closed_fist', [0.5, 0.5], [0.5, 0.5], 900);
  const a2 = run(det, 'other', [0.5, 0.5], [0.5, 0.5], 50, 33, 900);
  const a3 = run(det, 'count4', [0.5, 0.5], [0.5, 0.5], 900, 33, 950);
  check('conceal fires, later count4 also fires', a1.length === 1 && a1[0] === 'closed_fist' && a2.length === 0 && a3.length === 1 && a3[0] === 'count4');
}
// A pose switch can't fire earlier than 900ms after the previous fire.
{
  const det = new GestureDetector();
  const a1 = run(det, 'closed_fist', [0.5, 0.5], [0.5, 0.5], 800); // conceal fires ~t=700
  const a2 = run(det, 'other', [0.5, 0.5], [0.5, 0.5], 50, 33, 800);
  const a3 = run(det, 'count4', [0.5, 0.5], [0.5, 0.5], 700, 33, 850);
  check('cooldown blocks immediate second hold', a1.length === 1 && a1[0] === 'closed_fist' && a3.length === 0);
  const a4 = run(det, 'count4', [0.5, 0.5], [0.5, 0.5], 900, 33, 1550);
  check('second hold fires once cooldown expires', a4.filter((a) => a === 'count4').length === 1);
}

/* ── Pinch detector ─────────────────────────────────────── */
function pinchRun(det: PinchDetector, samples: PinchSample[]): any[] {
  const out: any[] = [];
  for (const s of samples) for (const e of det.push(s)) out.push(e);
  return out;
}
const P = (t: number, distance: number, x = 0.5, y = 0.5, present = true): PinchSample => ({ t, distance, x, y, present });

// Enter → moves → release(long) → end(click=true).
{
  const det = new PinchDetector();
  const a = pinchRun(det, [
    P(0, 0.2),
    P(50, 0.04, 0.4, 0.4),  // start
    P(100, 0.03, 0.42, 0.41), // move
    P(200, 0.05, 0.45, 0.42), // move
    P(260, 0.12, 0.45, 0.42), // release after 210ms
  ]);
  check('pinch start emitted', a[0] && a[0].kind === 'start');
  check('moves emitted while pinching', a.filter((e) => e.kind === 'move').length === 2);
  check('long pinch ends with click', a[a.length - 1] && a[a.length - 1].kind === 'end' && a[a.length - 1].click === true);
  check('end uses last pinch position', a[a.length - 1] && Math.abs((a[a.length - 1].x ?? 0) - 0.45) < 1e-6);
}
// Short pinch (<60ms) → end(click=false).
{
  const det = new PinchDetector();
  const a = pinchRun(det, [P(0, 0.2), P(10, 0.04), P(50, 0.15)]);
  check('short pinch ends without click', a[a.length - 1].kind === 'end' && a[a.length - 1].click === false);
}
// Hand lost briefly then returns → no end while pinching.
{
  const det = new PinchDetector();
  const a = pinchRun(det, [
    P(0, 0.04),
    P(100, 0.04, 0.5, 0.5),
    P(150, 1, 0.5, 0.5, false),  // lost 50ms
    P(200, 0.04, 0.5, 0.5),      // returns
    P(300, 0.04, 0.5, 0.5),
    P(400, 0.2, 0.5, 0.5),        // real release
  ]);
  const kinds = a.map((e) => e.kind);
  check('brief lost hand keeps pinch alive (one end only, at release)', kinds.filter((k) => k === 'end').length === 1 && kinds.filter((k) => k === 'move').length >= 3);
  check('single start for the whole pinch', kinds.filter((k) => k === 'start').length === 1);
}
// Hand lost ≥200ms while pinching → end.
{
  const det = new PinchDetector();
  const a = pinchRun(det, [
    P(0, 0.04), P(100, 0.04),
    P(150, 1, 0.5, 0.5, false),
    P(200, 1, 0.5, 0.5, false),
    P(350, 1, 0.5, 0.5, false),
    P(400, 1, 0.5, 0.5, false),
  ]);
  check('long lost hand ends the pinch as click', a[a.length - 1].kind === 'end' && a[a.length - 1].click === true);
}
// Hysteresis: alternating 0.05 / 0.08 never releases.
{
  const det = new PinchDetector();
  const a = pinchRun(det, [
    P(0, 0.2), P(10, 0.04), P(50, 0.08), P(90, 0.045), P(130, 0.08), P(170, 0.04), P(210, 0.2),
  ]);
  const ends = a.filter((e) => e.kind === 'end');
  check('hysteresis keeps single pinch', ends.length === 1 && ends[0].click === true);
}
// Hand shape classifier + count labels (synthetic landmarks).
function lmFor(ext: [boolean, boolean, boolean, boolean]): Array<{ x: number; y: number }> {
  const pts: Array<{ x: number; y: number }> = [{ x: 0, y: 0.9 }];
  const spots: Array<[number, number]> = [
    [2, 5], [2, 6], [2, 7], [2, 8],
    [5, 5], [5, 6], [5, 7], [5, 8],
    [8, 5], [8, 6], [8, 7], [8, 8],
    [11, 5], [11, 6], [11, 7], [11, 8],
    [14, 5], [14, 6], [14, 7], [14, 8],
    [17, 5], [17, 6], [17, 7], [17, 8],
  ];
  for (const s of spots) pts.push({ x: s[0] / 20, y: s[1] / 10 });
  const tips = [8, 12, 16, 20];
  const pips = [6, 10, 14, 18];
  for (let f = 0; f < 4; f++) {
    const pip = pts[pips[f]];
    const w = pts[0];
    const d = Math.hypot(pip.x - w.x, pip.y - w.y);
    pts[tips[f]] = ext[f] ? { x: w.x, y: w.y - d * 1.5 } : { x: w.x, y: w.y - d * 0.5 };
  }
  return pts;
}
check('open_palm shape', classifyHandShape(lmFor([true, true, true, true])) === 'open_palm');
check('closed_fist shape', classifyHandShape(lmFor([false, false, false, false])) === 'closed_fist');
check('victory shape', classifyHandShape(lmFor([true, true, false, false])) === 'victory');
check('fingerCountLabel closed_fist', fingerCountLabel(lmFor([false, false, false, false])) === 'closed_fist');
check('fingerCountLabel count4', fingerCountLabel(lmFor([true, true, true, true])) === 'count4');
check('fingerCountLabel count1', fingerCountLabel(lmFor([true, false, false, false])) === 'count1');
check('fingerCountLabel count2', fingerCountLabel(lmFor([true, true, false, false])) === 'count2');
check('fingerCountLabel count3', fingerCountLabel(lmFor([true, true, true, false])) === 'count3');
{
  const thumbUpPts = lmFor([false, false, false, false]);
  // closed-fist geometry with a normal tucked thumb (pt[4] is not the highest tip) must not trip thumb-up
  check('tucked thumb in fist is not thumb-up', isThumbUp(thumbUpPts) === false);
  thumbUpPts[4] = { x: 0.02, y: 0.3 }; // thumb sticking straight up, higher than every curled fingertip
  check('raised thumb with curled fingers is thumb-up', isThumbUp(thumbUpPts) === true);
  thumbUpPts[8] = { x: 0, y: 0.2 }; // an extended index higher than the thumb kills it
  check('extended index higher than thumb is not thumb-up', isThumbUp(thumbUpPts) === false);
}

// Thumb held high with curled fingers → 'back'.
{
  const det = new GestureDetector();
  const thumbUpPoseFrames: GestureSample[] = [];
  for (let t = 0; t <= 900; t += 33) thumbUpPoseFrames.push({ t, x: 0.5, y: 0.5, gesture: 'thumb_up' });
  const out: string[] = [];
  for (const s of thumbUpPoseFrames) { const a = det.push(s); if (a) out.push(a); }
  check('thumb_up hold fires back once', out.length === 1 && out[0] === 'thumb_up');
}

console.log(failures === 0 ? 'ALL PASS' : `${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
