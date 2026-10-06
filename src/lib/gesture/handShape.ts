// Pure hand-shape classification from MediaPipe hand landmarks.
// No imports, no DOM — safe to unit test and to bundle anywhere.

export type HandShape = 'victory' | 'open_palm' | 'closed_fist' | 'other' | 'none';

export interface Lm { x: number; y: number }

// Finger tip / pip index pairs: index, middle, ring, pinky.
const FINGERS: Array<[number, number]> = [
  [8, 6], // index
  [12, 10], // middle
  [16, 14], // ring
  [20, 18], // pinky
];

function dist(a: Lm, b: Lm): number {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

// A finger counts as extended when its tip is clearly farther from the wrist
// than its pip joint, curled when it is not. Works at any hand rotation.
function fingerExtended(pts: Lm[], tip: number, pip: number): boolean {
  const w = pts[0];
  return dist(pts[tip], w) > dist(pts[pip], w) * 1.15;
}

export function classifyHandShape(landmarks: Lm[] | null | undefined): HandShape {
  if (!landmarks || landmarks.length < 21) return 'none';
  const [index, middle, ring, pinky] = FINGERS.map(([t, p]) => fingerExtended(landmarks, t, p));

  if (index && middle && ring && pinky) return 'open_palm';
  if (!index && !middle && !ring && !pinky) return 'closed_fist';
  // Victory: index + middle only. Thumb is ignored (spec).
  if (index && middle && !ring && !pinky) return 'victory';
  return 'other';
}

/** All five fingers extended — a genuine open palm (the "count5" swipe hand).
 *  The four fingers use the shared tip-vs-joint rule; the thumb gets the same
 *  rule with a slightly looser ratio because its tip sits closer to the wrist
 *  than a finger's tip does. */
export function isAllFingersExtended(landmarks: Lm[] | null | undefined): boolean {
  if (!landmarks || landmarks.length < 21) return false;
  for (const [t, p] of FINGERS) if (!fingerExtended(landmarks, t, p)) return false;
  const w = landmarks[0];
  return dist(landmarks[4], w) > dist(landmarks[3], w) * 1.1;
}

/** Count-based pose label used for finger-count answer selection. */
export function fingerCountLabel(landmarks: Lm[] | null | undefined): string {
  if (!landmarks || landmarks.length < 21) return 'none';
  let n = 0;
  for (const [t, p] of FINGERS) if (fingerExtended(landmarks, t, p)) n++;
  if (n === 0) return 'closed_fist';
  if (n === 4) return 'count4';
  return `count${n}`; // count1, count2, count3
}

/** Thumb raised with the four fingers curled — "thumbs up". Robust cue: the
 *  thumb tip must be strictly above every other fingertip and above the wrist.
 *  Used for the back/home gesture; the recognizer's own Thumb_Up label is an
 *  additional confirmation in the engine. */
export function isThumbUp(landmarks: Lm[] | null | undefined): boolean {
  if (!landmarks || landmarks.length < 21) return false;
  for (const [t, p] of FINGERS) if (fingerExtended(landmarks, t, p)) return false;
  const thumb = landmarks[4];
  for (const tipIdx of [8, 12, 16, 20]) {
    if (landmarks[tipIdx].y <= thumb.y) return false; // thumb must be the highest tip
  }
  return thumb.y < landmarks[0].y;
}
