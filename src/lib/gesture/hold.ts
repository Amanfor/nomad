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
export const POSE_GAP_TOLERANCE_MS = 160; // brief 'other'/'none' flicker tolerated mid-hold

export interface GestureSample {
  t: number; // ms timestamp
  x: number; // palm center x, normalized 0..1 (raw frame, unmirrored)
  y: number; // palm center y, normalized 0..1
  gesture: string; // 'closed_fist' | 'count1'..'count4' | 'other' | 'none'
}

export type GestureAction = string; // now the raw pose label ('count1' .. 'thumb_up'), mapped by GestureLayer via GestureMap

const HOLD_POSES: Record<string, { action: string; radius: number }> = {
  closed_fist: { action: 'closed_fist', radius: HOLD_STILL_RADIUS },
  thumb_up: { action: 'thumb_up', radius: HOLD_STILL_RADIUS },
  count1: { action: 'count1', radius: HOLD_STILL_RADIUS_COUNT },
  count2: { action: 'count2', radius: HOLD_STILL_RADIUS_COUNT },
  count3: { action: 'count3', radius: HOLD_STILL_RADIUS_COUNT },
  count4: { action: 'count4', radius: HOLD_STILL_RADIUS_COUNT },
};

export class GestureDetector {
  private samples: GestureSample[] = [];
  private lastActionAt = -Infinity;
  private firedPose: string | null = null; // pose that already fired and is still held
  private nonPoseSince: number | null = null; // start of the current 'other'/'none' run

  reset() {
    this.samples = [];
    this.lastActionAt = -Infinity;
    this.firedPose = null;
    this.nonPoseSince = null;
  }

  push(s: GestureSample): GestureAction | null {
    this.samples.push(s);
    const cutoff = s.t - Math.max(HOLD_MS, GLOBAL_COOLDOWN_MS) - 200;
    while (this.samples.length && this.samples[0].t < cutoff) this.samples.shift();

    const pose = HOLD_POSES[s.gesture];
    if (!pose) {
      // The classifier flickers for a frame or two under motion or bad light.
      // A short non-pose run neither breaks an in-progress hold nor forgets a
      // pose that just fired; a long one does both.
      if (this.nonPoseSince === null) this.nonPoseSince = s.t;
      if (s.t - this.nonPoseSince > POSE_GAP_TOLERANCE_MS) this.firedPose = null;
      return null;
    }
    this.nonPoseSince = null;
    if (this.firedPose === s.gesture) return null; // one fire per continuous hold

    // Walk back to the start of this pose's run, skipping up to
    // POSE_GAP_TOLERANCE_MS of interleaved non-pose flicker. A *different*
    // valid pose anywhere in the walk ends the run (pose truly changed).
    let start = this.samples.length - 1;
    let gapMs = 0;
    while (start > 0) {
      const prev = this.samples[start - 1];
      if (prev.gesture === s.gesture) { start--; continue; }
      if (!HOLD_POSES[prev.gesture]) {
        const step = this.samples[start].t - prev.t;
        if (gapMs + step <= POSE_GAP_TOLERANCE_MS) { gapMs += step; start--; continue; }
      }
      break;
    }
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
