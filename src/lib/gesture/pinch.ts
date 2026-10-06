// Pure pinch detection from a stream of samples. No imports, no DOM.
// A pinch (thumb tip ↔ index tip held together) is the two-hand zoom gesture:
// the distance between the two hands' pinch centers drives the concept-graph
// camera. A pinch is never a click — the cursor UX is gone.

/* ── Tunable constants ─────────────────────────────────────────────── */
export const PINCH_ENTER_DISTANCE = 0.06; // normalized distance to count as pinched
export const PINCH_EXIT_DISTANCE = 0.095; // must widen past this to release (hysteresis)
export const PINCH_LOST_HAND_GRACE_MS = 200; // missing frames tolerated before treating as release

export interface PinchSample {
  t: number; // ms timestamp
  present: boolean; // hand tracked this frame?
  distance: number; // thumb-tip (4) ↔ index-tip (8) normalized distance, ~1 when no hand
  x: number; // pinch center x (raw frame, unmirrored), normalized 0..1
  y: number; // pinch center y
}

export type PinchEvent =
  | { kind: 'start'; x: number; y: number }
  | { kind: 'move'; x: number; y: number }
  | { kind: 'end'; x: number; y: number };

export class PinchDetector {
  private pinching = false;
  private pinchStartAt = 0;
  private lostSince = -1;
  private lastX = 0.5;
  private lastY = 0.5;

  reset() {
    this.pinching = false;
    this.pinchStartAt = 0;
    this.lostSince = -1;
    this.lastX = 0.5;
    this.lastY = 0.5;
  }

  isPinching(): boolean {
    return this.pinching;
  }

  push(s: PinchSample): PinchEvent[] {
    const out: PinchEvent[] = [];

    if (!s.present) {
      if (this.pinching) {
        if (this.lostSince < 0) {
          this.lostSince = s.t;
        } else if (s.t - this.lostSince >= PINCH_LOST_HAND_GRACE_MS) {
          out.push(this.end());
        }
      }
      return out;
    }

    this.lostSince = -1;

    if (this.pinching) {
      if (s.distance > PINCH_EXIT_DISTANCE) {
        out.push(this.end());
      } else {
        this.lastX = s.x;
        this.lastY = s.y;
        out.push({ kind: 'move', x: s.x, y: s.y });
      }
      return out;
    }

    if (s.distance < PINCH_ENTER_DISTANCE) {
      this.pinching = true;
      this.pinchStartAt = s.t;
      this.lastX = s.x;
      this.lastY = s.y;
      out.push({ kind: 'start', x: s.x, y: s.y });
    }
    return out;
  }

  private end(): PinchEvent {
    this.pinching = false;
    this.lostSince = -1;
    return { kind: 'end', x: this.lastX, y: this.lastY };
  }
}
