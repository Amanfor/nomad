// Pure whole-hand swipe detection from a stream of samples. No imports, no DOM.
// An open palm (all five fingers) swept sideways is one discrete arrow key.
//
// Mirroring: the raw camera frame is unmirrored — screen x = 1 - raw x — so a
// hand moving to the USER's right *decreases* raw x. This detector works on raw
// x but emits directions already mirrored into the user's frame.
//
// State machine: the anchor is where the current sweep started. It is never
// reset by a timeout — a slow drift simply doesn't fire — it only restarts
// when the hand re-appears or has been resting near the anchor (so "park,
// then sweep" always fires). After a fire the hand must come back near the
// anchor before it can fire again, so one long continuous sweep emits exactly
// one arrow key.

/* ── Tunable constants ─────────────────────────────────────────────── */
export const SWIPE_THRESHOLD = 0.22; // travel needed to fire, in frame widths (≈22% of the viewport)
export const SWIPE_WINDOW_MS = 900; // that travel must happen this fast → a slow drift never fires
export const SWIPE_ENGAGE = 0.12; // past this the sweep is an "intent": poses/scroll suspend for that hand
export const SWIPE_REARM_BAND = 0.08; // after firing, the hand must come back this close to the sweep start
export const SWIPE_PARKED = 0.012; // within this of the anchor the hand counts as resting
export const SWIPE_PARKED_MS = 200; // resting this long restarts the window (and moves the anchor)

export interface SwipeSample {
  t: number; // ms timestamp
  present: boolean; // hand tracked this frame?
  open: boolean; // all five fingers extended?
  x: number; // palm center x (raw frame, unmirrored), normalized 0..1
}

export type SwipeDirection = 'left' | 'right'; // in the USER's frame (already mirrored)

export class SwipeDetector {
  private tracking = false;
  private engaged = false;
  private fired = false; // swiped, waiting for the hand to come back
  private anchorX = 0.5; // where the current sweep started
  private anchorT = 0;
  private parkedSince = 0; // start of the current resting streak (0 = not resting)

  reset() {
    this.tracking = false;
    this.engaged = false;
    this.fired = false;
    this.anchorX = 0.5;
    this.anchorT = 0;
    this.parkedSince = 0;
  }

  /** True while this hand is mid-sweep, or still parked past the fire point.
   *  The engine suspends poses and scroll for that hand so one physical
   *  gesture can never do two things at once. */
  isEngaged(): boolean {
    return this.engaged;
  }

  push(s: SwipeSample): SwipeDirection | null {
    if (!s.present || !s.open) {
      // Hand gone or fingers closed → the sweep (and its re-arm lock) is over.
      this.reset();
      return null;
    }

    if (this.fired) {
      // Already fired: swallow frames until the hand returns to where the
      // sweep began, so one long continuous sweep emits exactly one arrow key.
      if (Math.abs(s.x - this.anchorX) <= SWIPE_REARM_BAND) this.fired = false;
      else {
        this.engaged = true;
        return null;
      }
    }

    if (!this.tracking) {
      this.tracking = true;
      this.anchorX = s.x;
      this.anchorT = s.t;
      this.parkedSince = 0;
      this.engaged = false;
      return null;
    }

    const dx = s.x - this.anchorX; // raw-frame delta
    if (Math.abs(dx) >= SWIPE_THRESHOLD && s.t - this.anchorT <= SWIPE_WINDOW_MS) {
      this.fired = true;
      this.engaged = true;
      return dx < 0 ? 'right' : 'left'; // raw x falls as the hand moves right
    }
    // Resting near the anchor restarts the window (and adopts the resting
    // spot as the new anchor). A slow drift keeps moving away from the anchor,
    // so the window expires and the drift never fires.
    if (Math.abs(dx) < SWIPE_PARKED) {
      if (this.parkedSince === 0) this.parkedSince = s.t;
      if (s.t - this.parkedSince >= SWIPE_PARKED_MS) {
        this.anchorX = s.x;
        this.anchorT = s.t;
        this.parkedSince = 0;
      }
    } else {
      this.parkedSince = 0;
    }
    this.engaged = Math.abs(dx) >= SWIPE_ENGAGE;
    return null;
  }
}
