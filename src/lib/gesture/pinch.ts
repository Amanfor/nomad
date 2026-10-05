// Pure pinch-cursor detection from a stream of samples. No imports, no DOM.
// A pinch (thumb tip ↔ index tip held together) shows a cursor that follows
// the hand; releasing the pinch or losing the hand emits the final position.

/* ── Tunable constants ─────────────────────────────────────────────── */
export const PINCH_ENTER_DISTANCE = 0.06; // normalized distance to count as pinched
export const PINCH_EXIT_DISTANCE = 0.095; // must widen past this to release (hysteresis)
export const PINCH_MIN_CLICK_MS = 60; // min time pinched before release counts as click
export const PINCH_LOST_HAND_GRACE_MS = 200; // missing frames tolerated before treating as release
export const GLOBAL_COOLDOWN_MS = 900; // min gap between any two discrete actions

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
  | { kind: 'end'; x: number; y: number; click: boolean };

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
          out.push(this.end(s.t));
        }
      }
      return out;
    }

    this.lostSince = -1;

    if (this.pinching) {
      if (s.distance > PINCH_EXIT_DISTANCE) {
        out.push(this.end(s.t));
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

  private end(t: number): PinchEvent {
    const held = t - this.pinchStartAt;
    const click = held >= PINCH_MIN_CLICK_MS;
    this.pinching = false;
    this.lostSince = -1;
    return { kind: 'end', x: this.lastX, y: this.lastY, click };
  }
}
