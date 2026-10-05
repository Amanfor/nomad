// Pure hold-gesture detection from a stream of samples. No imports, no DOM.
// A stable pose (closed fist, or a held finger count) fires one discrete
// action. The fist is the solution conceal; showing exactly N fingers (N in
// 1..4) selects option N in practice. The thumb does not matter.

/* ── Tunable constants ─────────────────────────────────────────────── */
export const HOLD_MS = 700; // pose must persist this long before firing
export const HOLD_STILL_RADIUS = 0.05; // drift tolerance for the fist (normalized)
export const HOLD_STILL_RADIUS_COUNT = 0.12; // counts tolerate more drift
export const HOLD_MIN_FRAMES = 3;
export const GLOBAL_COOLDOWN_MS = 900; // min gap between any two discrete actions

export interface GestureSample {
  t: number; // ms timestamp
  x: number; // palm center x, normalized 0..1 (raw frame, unmirrored)
  y: number; // palm center y, normalized 0..1
  gesture: string; // 'closed_fist' | 'count1'..'count4' | 'other' | 'none'
}

export type GestureAction =
  | 'conceal' // closed fist held ~0.7s
  | 'select-1' // one finger (index)
  | 'select-2' // two fingers
  | 'select-3' // three fingers
  | 'select-4'; // four fingers (open hand)

const HOLD_POSES: Record<string, { action: GestureAction; radius: number }> = {
  closed_fist: { action: 'conceal', radius: HOLD_STILL_RADIUS },
  count1: { action: 'select-1', radius: HOLD_STILL_RADIUS_COUNT },
  count2: { action: 'select-2', radius: HOLD_STILL_RADIUS_COUNT },
  count3: { action: 'select-3', radius: HOLD_STILL_RADIUS_COUNT },
  count4: { action: 'select-4', radius: HOLD_STILL_RADIUS_COUNT },
};

export class GestureDetector {
  private samples: GestureSample[] = [];
  private lastActionAt = -Infinity;
  private firedPose: string | null = null; // pose that already fired and is still held

  reset() {
    this.samples = [];
    this.lastActionAt = -Infinity;
    this.firedPose = null;
  }

  push(s: GestureSample): GestureAction | null {
    this.samples.push(s);
    const cutoff = s.t - Math.max(HOLD_MS, GLOBAL_COOLDOWN_MS) - 200;
    while (this.samples.length && this.samples[0].t < cutoff) this.samples.shift();

    const pose = HOLD_POSES[s.gesture];
    if (!pose) {
      this.firedPose = null;
      return null;
    }
    if (this.firedPose === s.gesture) return null; // one fire per continuous hold

    let start = this.samples.length - 1;
    while (start > 0 && this.samples[start - 1].gesture === s.gesture) start--;
    const run = this.samples.slice(start);
    if (run.length < HOLD_MIN_FRAMES) return null;
    if (s.t - run[0].t < HOLD_MS) return null;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const p of run) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }
    if (maxX - minX > pose.radius || maxY - minY > pose.radius) return null;

    if (s.t - this.lastActionAt < GLOBAL_COOLDOWN_MS) return null;
    this.lastActionAt = s.t;
    this.firedPose = s.gesture;
    return pose.action;
  }
}
