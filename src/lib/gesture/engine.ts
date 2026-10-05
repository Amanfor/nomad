// Camera + GestureRecognizer lifecycle. Dynamic-imports the heavy vision
// library only when start() is called so it stays out of the main bundle.

import { classifyHandShape } from './handShape';
import { GestureDetector, GestureAction } from './swipe';

const BASE_URL = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');
const asset = (path: string) => `${BASE_URL}${path.replace(/^\//, '')}`;

const MAX_FPS = 15;
const FRAME_BUDGET_MS = 1000 / MAX_FPS;

export interface EngineEvents {
  onAction: (action: GestureAction) => void;
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
  private video: HTMLVideoElement | null = null;
  private rafId = 0;
  private lastFrameAt = 0;
  private stopped = true;
  private epoch = 0; // bumped on every stop/start; stale async starts bail out

  constructor(private events: EngineEvents) {}

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
      const gesture = landmarks ? classifyHandShape(landmarks) : 'none';
      const action = this.detector.push({ t: now, x, y, gesture });
      if (action) this.events.onAction(action);
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
  }
}
