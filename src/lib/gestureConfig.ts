// Gesture remapping: which physical pose/finger counts trigger which action,
// optionally restricted to one hand. Persisted under localStorage, defaults on
// first load.

export type GesturePose = 'count1' | 'count2' | 'count3' | 'count4' | 'closed_fist' | 'thumb_up';

export const POSES: GesturePose[] = ['count1', 'count2', 'count3', 'count4', 'closed_fist', 'thumb_up'];

export const POSE_LABELS: Record<GesturePose, string> = {
  count1: '1 finger',
  count2: '2 fingers',
  count3: '3 fingers',
  count4: '4 fingers',
  closed_fist: 'closed fist',
  thumb_up: 'thumbs up',
};

export type HandSide = 'any' | 'left' | 'right';

export interface GestureBinding {
  pose: GesturePose;
  hand: HandSide;
}

export type GestureActionId = 'conceal' | 'back' | 'select1' | 'select2' | 'select3' | 'select4' | 'scroll';

export interface GestureMap {
  conceal: GestureBinding;
  back: GestureBinding;
  select1: GestureBinding;
  select2: GestureBinding;
  select3: GestureBinding;
  select4: GestureBinding;
  scroll: GestureBinding;
}

export const DEFAULT_GESTURE_MAP: GestureMap = {
  conceal: { pose: 'closed_fist', hand: 'any' },
  back: { pose: 'thumb_up', hand: 'any' },
  select1: { pose: 'count1', hand: 'any' },
  select2: { pose: 'count2', hand: 'any' },
  select3: { pose: 'count3', hand: 'any' },
  select4: { pose: 'count4', hand: 'any' },
  scroll: { pose: 'count2', hand: 'any' },
};

const STORAGE_KEY = 'nomad-gesture-map';

export function loadGestureMap(): GestureMap {
  if (typeof window === 'undefined') return JSON.parse(JSON.stringify(DEFAULT_GESTURE_MAP));
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_GESTURE_MAP));
    return { ...DEFAULT_GESTURE_MAP, ...JSON.parse(raw) };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_GESTURE_MAP));
  }
}

export function saveGestureMap(m: GestureMap) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(m)); } catch {}
}

/** Does a hold from `hand` satisfy this binding's hand restriction? */
export function handMatches(binding: GestureBinding, hand: 'left' | 'right'): boolean {
  if (binding.hand === 'any') return true;
  return binding.hand === hand;
}
