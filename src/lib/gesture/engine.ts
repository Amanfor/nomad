// Camera + GestureRecognizer lifecycle. Dynamic-imports the heavy vision
// library only when start() is called so it stays out of the main bundle.

import { fingerCountLabel, isThumbUp } from './handShape';
import { GestureDetector, GestureAction } from './hold';
import { PinchDetector, PinchEvent } from './pinch';

const BASE_URL = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');
const asset = (path: string) => `${BASE_URL}${path.replace(/^\//, '')}`;

const MAX_FPS = 15;
const FRAME_BUDGET_MS = 1000 / MAX_FPS;

export interface EngineEvents {
  onAction: (action: GestureAction) => void;
  onPinch?: (ev: PinchEvent) => void;
  /** Continuous 2-finger scroll delta in pixel units (touch-drag feel). */
  onScroll?: (deltaPx: number) => void;
}

export interface GestureDebugInfo {
  pose: string; // current finger-count pose label or 'other' / 'none'
  pinchDistance: number; // thumb-tip ↔ index-tip normalized distance
  pinching: boolean;
  landmarks: Array<{ x: number; y: number }> | null;
}

export type EngineFailure =
  | 'permission denied'
  | 'no camera found'
  | 'camera busy'
  | 'camera not available in this build'
  | 'model failed to load';

function mapCameraError(e: any): EngineFailure {
  if (typeof navigator === 'undefined' || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || (typeof window !== 'undefined' && window.isSecureContext === false)) {
    return 'camera not available in this build';
  }
  const name = e && (e.name || e.code);
  if (name === 'NotAllowedError' || name === 'PermissionDeniedError' || name === 'SecurityError') return 'permission denied';
  if (name === 'NotFoundError' || name === 'DevicesNotFoundError' || name === 'OverconstrainedError') return 'no camera found';
  if (name === 'NotReadableError' || name === 'TrackStartError' || name === 'AbortError') return 'camera busy';
  return 'camera not available in this build';
}

export class GestureEngine {
  private stream: MediaStream | null = null;
  private recognizer: any = null;
  private detector = new GestureDetector();
  private pinch = new PinchDetector();
  private video: HTMLVideoElement | null = null;
  private rafId = 0;
  private lastFrameAt = 0;
  private stopped = true;
  private epoch = 0; // bumped on every stop/start; stale async starts bail out
  private lastScrollY: number | null = null;
  private lastDebug: GestureDebugInfo = { pose: 'none', pinchDistance: 1, pinching: false, landmarks: null };

  constructor(private events: EngineEvents) {}

  /** Latest per-frame detection state, for the green debug overlay. */
  getDebugInfo(): GestureDebugInfo {
    return this.lastDebug;
  }

  isRunning(): boolean {
    return !this.stopped;
  }

  async start(video: HTMLVideoElement): Promise<void> {
    this.stop();
    this.detector.reset();
    this.stopped = false;
    this.video = video;
    const epoch = this.epoch;

    // GPU first, CPU fallback — many laptops have no discrete GPU.
    let vision: any;
    let GestureRecognizer: any;
    let FilesetResolver: any;
    try {
      const mod = await import('@mediapipe/tasks-vision');
      GestureRecognizer = mod.GestureRecognizer;
      FilesetResolver = mod.FilesetResolver;
    } catch {
      throw 'model failed to load';
    }
    if (epoch !== this.epoch) { this.stop(); return; }

    try {
      vision = await FilesetResolver.forVisionTasks(asset('gesture/wasm'));
    } catch {
      throw 'model failed to load';
    }
    if (epoch !== this.epoch) { this.stop(); return; }

    const baseOpts = { modelAssetPath: asset('gesture/gesture_recognizer.task') };
    try {
      this.recognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: { ...baseOpts, delegate: 'GPU' },
        runningMode: 'VIDEO',
        numHands: 1,
      });
    } catch {
      try {
        this.recognizer = await GestureRecognizer.createFromOptions(vision, {
          baseOptions: { ...baseOpts, delegate: 'CPU' },
          runningMode: 'VIDEO',
          numHands: 1,
        });
      } catch {
        throw 'model failed to load';
      }
    }
    if (epoch !== this.epoch) { this.stop(); return; }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 320 }, height: { ideal: 240 } },
        audio: false,
      });
    } catch (e) {
      this.stop();
      throw mapCameraError(e);
    }
    if (epoch !== this.epoch) { this.stop(); return; }

    video.srcObject = this.stream;
    video.muted = true;
    video.playsInline = true;
    try {
      await video.play();
    } catch {
      this.stop();
      throw 'camera busy';
    }

    this.lastFrameAt = 0;
    const loop = (now: number) => {
      if (this.stopped) return;
      this.rafId = requestAnimationFrame(loop);
      if (now - this.lastFrameAt < FRAME_BUDGET_MS) return;
      if (video.readyState < 2 || !this.recognizer) return;
      this.lastFrameAt = now;
      let result: any;
      try {
        result = this.recognizer.recognizeForVideo(video, now);
      } catch {
        return; // one bad frame must never kill the loop
      }
      const landmarks = result?.landmarks?.[0];
      let x = 0.5;
      let y = 0.5;
      if (landmarks && landmarks.length >= 10) {
        // Palm center: average of wrist (0) and middle-finger base (9).
        x = (landmarks[0].x + landmarks[9].x) / 2;
        y = (landmarks[0].y + landmarks[9].y) / 2;
      }
      const pinchDistance = landmarks
        ? Math.hypot(landmarks[4].x - landmarks[8].x, landmarks[4].y - landmarks[8].y)
        : 1;
      const pinchCenterX = landmarks ? (landmarks[4].x + landmarks[8].x) / 2 : 0.5;
      const pinchCenterY = landmarks ? (landmarks[4].y + landmarks[8].y) / 2 : 0.5;
      const pinchEvents = this.pinch.push({
        t: now,
        present: !!landmarks,
        distance: pinchDistance,
        x: pinchCenterX,
        y: pinchCenterY,
      });
      for (const ev of pinchEvents) this.events.onPinch?.(ev);

      // While pinching (cursor live), pose holds are suppressed so the same
      // fingers can never double-trigger a selection/conceal.
      const recognizerThumbsUp = !!result?.gestures?.[0]?.some?.((g: any) => g?.categoryName === 'Thumb_Up');
      const pose = this.pinch.isPinching() || !landmarks
        ? 'none'
        : recognizerThumbsUp || isThumbUp(landmarks)
        ? 'thumb_up'
        : fingerCountLabel(landmarks);
      const action = this.detector.push({ t: now, x, y, gesture: pose });
      if (action) this.events.onAction(action);

      // Two-finger pose: vertical drag scrolls the page like a touch swipe —
      // hand moving up scrolls down. Baseline resets whenever fingers change.
      if (pose === 'count2' && landmarks) {
        const curY = (landmarks[0].y + landmarks[9].y) / 2;
        if (this.lastScrollY !== null) {
          const dy = curY - this.lastScrollY;
          if (Math.abs(dy) > 0.001) {
            this.events.onScroll?.((dy < 0 ? 1 : -1) * Math.min(Math.abs(dy), 0.12) * window.innerHeight * 2.2);
          }
        }
        this.lastScrollY = curY;
      } else {
        this.lastScrollY = null;
      }

      this.lastDebug = {
        pose: this.pinch.isPinching() ? 'pinch' : pose,
        pinchDistance,
        pinching: this.pinch.isPinching(),
        landmarks: landmarks || null,
      };
    };
    this.rafId = requestAnimationFrame(loop);
  }

  stop(): void {
    this.stopped = true;
    this.epoch++; // invalidates any in-flight start()
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.rafId = 0;
    if (this.stream) {
      for (const track of this.stream.getTracks()) track.stop();
    }
    this.stream = null;
    try {
      this.recognizer?.close?.();
    } catch {}
    this.recognizer = null;
    if (this.video) {
      try {
        (this.video as any).srcObject = null;
      } catch {}
      this.video = null;
    }
    this.detector.reset();
    this.pinch.reset();
    this.lastScrollY = null;
    this.lastDebug = { pose: 'none', pinchDistance: 1, pinching: false, landmarks: null };
  }
}
