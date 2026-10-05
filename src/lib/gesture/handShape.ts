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

/** Count-based pose label used for finger-count answer selection. */
export function fingerCountLabel(landmarks: Lm[] | null | undefined): string {
  if (!landmarks || landmarks.length < 21) return 'none';
  let n = 0;
  for (const [t, p] of FINGERS) if (fingerExtended(landmarks, t, p)) n++;
  if (n === 0) return 'closed_fist';
  if (n === 4) return 'count4';
  return `count${n}`; // count1, count2, count3
}
