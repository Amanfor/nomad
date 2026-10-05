// Pure swipe & hold detection from a stream of samples. No imports, no DOM.

/* ── Tunable constants ─────────────────────────────────────────────── */
export const SWIPE_MIN_DISTANCE = 0.22; // fraction of frame, dominant axis
export const SWIPE_WINDOW_MS = 350; // sliding window for a swipe
export const DOMINANT_AXIS_RATIO = 1.6; // dominant axis must beat the other by this
export const GLOBAL_COOLDOWN_MS = 900; // min gap between any two actions
export const HOLD_MS = 700; // palm/fist hold duration before firing
export const HOLD_STILL_RADIUS = 0.05; // max drift (normalized) during a hold
export const MIN_TRACKED_FRAMES = 3; // swipe needs at least this many frames
export const MIN_VICTORY_RATIO = 0.7; // fraction of window frames in victory pose
export const HOLD_MIN_FRAMES = 3;
export const REARM_NONVICTORY = 'victory'; // swipe re-arms only after a non-victory frame

export interface GestureSample {
  t: number; // ms timestamp
  x: number; // palm center x, normalized 0..1 (raw frame, unmirrored)
  y: number; // palm center y, normalized 0..1
  gesture: string; // 'victory' | 'open_palm' | 'closed_fist' | 'other' | 'none'
}

export type GestureAction =
  | 'swipe-left' // hand moved toward the user's left (raw dx > 0)
  | 'swipe-right' // hand moved toward the user's right (raw dx < 0)
  | 'swipe-up' // hand moved up (raw dy < 0)
  | 'swipe-down' // hand moved down (raw dy > 0)
  | 'reveal' // open palm held ~0.7s
  | 'conceal'; // closed fist held ~0.7s

const VICTORY = 'victory';
const HOLD_POSES: Record<string, GestureAction> = {
  open_palm: 'reveal',
  closed_fist: 'conceal',
};

export class GestureDetector {
  private samples: GestureSample[] = [];
  private lastActionAt = -Infinity;
  private swipeArmed = true; // disarmed after a swipe until pose leaves victory
  private holdFiredPose: string | null = null; // prevents a hold from repeating

  reset() {
    this.samples = [];
    this.lastActionAt = -Infinity;
    this.swipeArmed = true;
    this.holdFiredPose = null;
  }

  push(s: GestureSample): GestureAction | null {
    this.samples.push(s);
    // Keep a little more than a hold window so holds can be evaluated.
    const cutoff = s.t - Math.max(SWIPE_WINDOW_MS, HOLD_MS) - 200;
    while (this.samples.length && this.samples[0].t < cutoff) this.samples.shift();

    const cooldownOK = s.t - this.lastActionAt >= GLOBAL_COOLDOWN_MS;

    // Swipes re-arm only once the pose leaves victory (one action per gesture).
    if (s.gesture !== VICTORY) this.swipeArmed = true;

    // Hold gestures take priority and only fire on a nearly-still palm center.
    const hold = this.detectHold(s);
    if (hold && cooldownOK) {
      this.lastActionAt = s.t;
      this.holdFiredPose = this.samples[this.samples.length - 1].gesture;
      return hold;
    }
    if (hold && !cooldownOK) return null;

    const swipe = this.detectSwipe(s);
    if (swipe && this.swipeArmed && cooldownOK) {
      this.lastActionAt = s.t;
      this.swipeArmed = false;
      return swipe;
    }
    return null;
  }

  private detectHold(now: GestureSample): GestureAction | null {
    const pose = now.gesture;
    const mapped = HOLD_POSES[pose];
    if (!mapped) {
      // Pose changed or hand lost: a held pose never repeats until it returns.
      this.holdFiredPose = null;
      return null;
    }
    if (this.holdFiredPose === pose) return null; // already fired for this hold

    // Find the run of consecutive frames with this pose ending at `now`.
    let start = this.samples.length - 1;
    while (start > 0 && this.samples[start - 1].gesture === pose) start--;
    const run = this.samples.slice(start);
    if (run.length < HOLD_MIN_FRAMES) return null;
    const span = now.t - run[0].t;
    if (span < HOLD_MS) return null;

    // Palm center must be nearly still across the run.
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const p of run) {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    }
    if (maxX - minX > HOLD_STILL_RADIUS || maxY - minY > HOLD_STILL_RADIUS) return null;

    return mapped;
  }

  private detectSwipe(now: GestureSample): GestureAction | null {
    const win = this.samples.filter((s) => s.t >= now.t - SWIPE_WINDOW_MS);
    if (win.length < MIN_TRACKED_FRAMES) return null;

    const victoryFrames = win.filter((s) => s.gesture === VICTORY).length;
    if (victoryFrames / win.length < MIN_VICTORY_RATIO) return null;

    const first = win[0];
    const last = win[win.length - 1];
    const dx = last.x - first.x;
    const dy = last.y - first.y;
    const adx = Math.abs(dx);
    const ady = Math.abs(dy);

    if (adx >= SWIPE_MIN_DISTANCE && adx >= DOMINANT_AXIS_RATIO * ady) {
      return dx > 0 ? 'swipe-left' : 'swipe-right'; // raw frame: user's left = +x
    }
    if (ady >= SWIPE_MIN_DISTANCE && ady >= DOMINANT_AXIS_RATIO * adx) {
      return dy < 0 ? 'swipe-up' : 'swipe-down';
    }
    return null;
  }
}
