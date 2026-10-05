import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GestureEngine } from '../lib/gesture/engine';
import type { PinchEvent } from '../lib/gesture/pinch';
import { GestureMap, GestureActionId, POSE_LABELS, handMatches, loadGestureMap } from '../lib/gestureConfig';

interface GestureLayerProps {
  enabled: boolean;
  showPreview: boolean;
  introActive: boolean;
  noteOpen: boolean; // kept for API compat (scroll gesture removed)
  practiceOpen: boolean; // when the practice overlay is open, counts answer instead of scrolling
  gestureMap?: GestureMap; // remapping config
  onStatus: (status: string | null) => void;
  onFatal: (reason: string) => void; // → parent flips enableGesture to false
}

/** A click dispatched from the pinch cursor onto the topmost element. */
function syntheticClick(clientX: number, clientY: number) {
  const el = document.elementFromPoint(clientX, clientY);
  if (!(el instanceof HTMLElement)) return;
  const opts: MouseEventInit = { bubbles: true, cancelable: true, clientX, clientY, view: window };
  el.dispatchEvent(new PointerEvent('pointerdown', opts));
  el.dispatchEvent(new MouseEvent('mousedown', opts));
  el.dispatchEvent(new PointerEvent('pointerup', opts));
  el.dispatchEvent(new MouseEvent('mouseup', opts));
  el.dispatchEvent(new MouseEvent('click', opts));
}

export default function GestureLayer({ enabled, showPreview, introActive, noteOpen, practiceOpen, gestureMap, onStatus, onFatal }: GestureLayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const engineRef = useRef<GestureEngine | null>(null);
  const gestureMapRef = useRef<GestureMap>(gestureMap || loadGestureMap());
  useEffect(() => { if (gestureMap) gestureMapRef.current = gestureMap; }, [gestureMap]);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const debugCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [streamLive, setStreamLive] = useState(false);
  const [cursorOn, setCursorOn] = useState(false);
  const introActiveRef = useRef(introActive);
  const noteOpenRef = useRef(noteOpen);
  const practiceOpenRef = useRef(practiceOpen);
  const lastPinchClickAtRef = useRef(0);
  /** Which detector slot currently owns the cursor (one cursor at a time). */
  const pinchSlotRef = useRef<number | null>(null);
  useEffect(() => { introActiveRef.current = introActive; }, [introActive]);
  useEffect(() => { noteOpenRef.current = noteOpen; }, [noteOpen]);
  useEffect(() => { practiceOpenRef.current = practiceOpen; }, [practiceOpen]);

  const dispatchEffect = useCallback((id: GestureActionId) => {
    // Guards, applied to both real and dev-injected actions.
    if (introActiveRef.current) return;
    if (typeof document !== 'undefined' && document.hidden) return;
    const ae = document.activeElement;
    if (ae instanceof HTMLElement) {
      const tag = ae.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || ae.isContentEditable) return;
    }
    if (id === 'conceal') {
      window.dispatchEvent(new CustomEvent('nomad:gesture', { detail: { action: 'conceal' } }));
      return;
    }
    if (id === 'back') {
      // Same synthetic Escape the Capacitor hardware-back path injects.
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
      return;
    }
    const m = /^select(\d)$/.exec(id);
    if (m) {
      window.dispatchEvent(new CustomEvent('nomad:gesture', { detail: { action: 'select', count: parseInt(m[1], 10) } }));
    }
  }, []);

  /** Fire the effect bound to `pose` from hand `hand`, if any. */
  const dispatchHoldPose = useCallback((pose: string, hand: 'left' | 'right') => {
    const m = gestureMapRef.current;
    for (const id of ['select1', 'select2', 'select3', 'select4', 'conceal', 'back'] as GestureActionId[]) {
      const b = m[id];
      if (b.pose === pose && handMatches(b, hand)) {
        dispatchEffect(id);
        return;
      }
    }
  }, [dispatchEffect]);

  const handlePinch = useCallback((ev: PinchEvent, slot: number) => {
    // One cursor at a time: while one hand drives the cursor, the other
    // hand's pinch is ignored until this one releases (or loses the frame,
    // which ends its pinch after the engine's grace period).
    if (ev.kind === 'start') {
      if (pinchSlotRef.current !== null && pinchSlotRef.current !== slot) return;
      pinchSlotRef.current = slot;
      // Raw frame is unmirrored; mirror the cursor into the user's frame.
      const sx = (1 - ev.x) * window.innerWidth;
      const sy = ev.y * window.innerHeight;
      const c = cursorRef.current;
      if (c) c.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -50%)`;
      setCursorOn(true);
      return;
    }
    if (pinchSlotRef.current !== slot) return;
    const sx = (1 - ev.x) * window.innerWidth;
    const sy = ev.y * window.innerHeight;
    if (ev.kind === 'move') {
      const c = cursorRef.current;
      if (c) c.style.transform = `translate(${sx}px, ${sy}px) translate(-50%, -50%)`;
      return;
    }
    // end of pinch: cursor stays put, then becomes a press on release.
    pinchSlotRef.current = null;
    setCursorOn(false);
    if (!ev.click) return;
    if (introActiveRef.current || document.hidden) return;
    const now = performance.now();
    if (now - lastPinchClickAtRef.current < 900) return;
    lastPinchClickAtRef.current = now;
    syntheticClick(sx, sy);
  }, []);

  const stopCamera = useCallback(() => {
    engineRef.current?.stop();
    engineRef.current = null;
    pinchSlotRef.current = null;
    setCursorOn(false);
    setStreamLive(false);
    onStatus(null);
  }, [onStatus]);

  const startCamera = useCallback(async () => {
    if (engineRef.current) return;
    if (!videoRef.current) return;
    onStatus('starting camera…');
    const engine = new GestureEngine({
      onHold: (pose, hand) => dispatchHoldPose(pose, hand),
      onPinch: handlePinch,
      onScrollFrame: (pose, hand, dyPx) => {
        // Remapping is explicit: only scroll when the configured scroll pose
        // and hand match. Practice overlay already answers via counts.
        const m = gestureMapRef.current;
        if (m.scroll.pose !== pose) return;
        if (!practiceOpenRef.current && handMatches(m.scroll, hand)) {
          window.scrollBy({ top: dyPx, behavior: 'auto' });
        }
      },
    });
    engineRef.current = engine;
    try {
      await engine.start(videoRef.current);
      setStreamLive(true);
      onStatus('runs on your device. nothing is recorded.');
    } catch (err: any) {
      engineRef.current = null;
      setStreamLive(false);
      onFatal(typeof err === 'string' ? err : 'camera not available in this build');
    }
  }, [dispatchHoldPose, handlePinch, onFatal, onStatus]);

  // Lifecycle: on when enabled && intro done && tab visible.
  useEffect(() => {
    if (enabled && !introActive && !document.hidden) {
      startCamera();
    } else {
      stopCamera();
    }
    return undefined;
  }, [enabled, introActive, startCamera, stopCamera]);

  // Stop when hidden, restart when visible again.
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        stopCamera();
      } else if (enabled && !introActiveRef.current) {
        startCamera();
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [enabled, startCamera, stopCamera]);

  // Ensure everything is off when unmounted or setting turns off.
  useEffect(() => {
    return () => {
      engineRef.current?.stop();
      engineRef.current = null;
    };
  }, []);

  // Green headless-style debug overlay, drawn over the preview so the user can
  // see what the recognizer is tracking and why a gesture did or didn't fire.
  useEffect(() => {
    if (!streamLive || !showPreview) return;
    let raf = 0;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      const c = debugCanvasRef.current;
      const e = engineRef.current;
      if (!c || !e) return;
      let ctx = c.getContext('2d');
      if (!ctx) return;
      const W = c.width;
      const H = c.height;
      ctx.clearRect(0, 0, W, H);
      const d = e.getDebugInfo();

      // Both hands, mirrored so they line up with the mirrored preview.
      // Hand 0 draws at full strength, hand 1 dimmer — same green, two layers.
      const SHORT: Record<string, string> = { closed_fist: 'fist', thumb_up: 'thumb', other: 'other', none: 'none' };
      d.hands.forEach((h, i) => {
        const alpha = i === 0 ? 0.85 : 0.5;
        if (h.landmarks) {
          ctx!.fillStyle = `rgba(0, 255, 0, ${alpha})`;
          for (const lm of h.landmarks) {
            ctx!.beginPath();
            ctx!.arc((1 - lm.x) * W, lm.y * H, 1.6, 0, Math.PI * 2);
            ctx!.fill();
          }
          const a = h.landmarks[4];
          const b = h.landmarks[8];
          if (a && b) {
            ctx!.strokeStyle = h.pinching ? `rgba(0,255,0,${alpha + 0.1 > 1 ? 1 : alpha + 0.1})` : `rgba(0,255,0,${alpha * 0.5})`;
            ctx!.lineWidth = h.pinching ? 2 : 1;
            ctx!.beginPath();
            ctx!.moveTo((1 - a.x) * W, a.y * H);
            ctx!.lineTo((1 - b.x) * W, b.y * H);
            ctx!.stroke();
          }
        }
        const y0 = 2 + i * 20;
        ctx!.fillStyle = `rgba(0, 255, 0, ${i === 0 ? 0.95 : 0.7})`;
        ctx!.font = '9px monospace';
        ctx!.textBaseline = 'top';
        const pose = SHORT[h.pose] || h.pose;
        ctx!.fillText(`h${i} ${h.hand} ${pose}`, 3, y0);
        ctx!.fillText(`${h.pinchDistance.toFixed(3)}${h.pinching ? ' PINCH' : ''}`, 3, y0 + 10);
      });
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [streamLive, showPreview]);

  // Development-only hook for testing the action wiring without a camera.
  useEffect(() => {
    if (!(import.meta as any).env?.DEV) return;
    const inject = (action: string) => {
      switch (action) {
        case 'conceal': dispatchEffect('conceal'); break;
        case 'select-1': dispatchEffect('select1'); break;
        case 'select-2': dispatchEffect('select2'); break;
        case 'select-3': dispatchEffect('select3'); break;
        case 'select-4': dispatchEffect('select4'); break;
        case 'reveal':
          window.dispatchEvent(new CustomEvent('nomad:gesture', { detail: { action: 'reveal' } }));
          break;
        case 'back':
          dispatchEffect('back');
          break;
        case 'click-center':
          syntheticClick(window.innerWidth / 2, window.innerHeight / 2);
          break;
        default: break;
      }
    };
    (window as any).__nomadGesture = { inject };
    return () => {
      delete (window as any).__nomadGesture;
    };
  }, [dispatchEffect]);

  return (
    <>
      <style>{`@keyframes nomadGesturePulse { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.15; } }`}</style>
      {/* Always mounted (kept offscreen, never display:none) so the engine can
          read frames whenever the stream is live; the recognizer stops when off. */}
      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        style={
            streamLive && showPreview
              ? {
                  position: 'fixed',
                  top: '1.5rem',
                  left: '1.5rem',
                  width: 96,
                  height: 72,
                  objectFit: 'cover',
                  transform: 'scaleX(-1)', // mirrored preview
                  filter: 'grayscale(1)',
                  opacity: 0.25,
                  border: 'none',
                  pointerEvents: 'none',
                  zIndex: 120,
                }
              : {
                  // Stream live, preview off — or fully off: keep the element
                  // mounted (never display:none) so frames can still decode.
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: 1,
                  height: 1,
                  opacity: 0,
                  pointerEvents: 'none',
                  zIndex: 0,
                }
          }
        />
      {/* Green debug overlay (headless-style), same rect as the preview. */}
      {streamLive && showPreview && (
        <canvas
          ref={debugCanvasRef}
          width={96}
          height={72}
          style={{
            position: 'fixed',
            top: '1.5rem',
            left: '1.5rem',
            width: 96,
            height: 72,
            pointerEvents: 'none',
            zIndex: 121,
          }}
        />
      )}
      {/* Pinch cursor: white circle, follows the hand while pinching. */}
      <div
        ref={cursorRef}
        aria-hidden
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.92)',
          boxShadow: '0 0 12px rgba(255,255,255,0.55)',
          opacity: cursorOn ? 0.9 : 0,
          transition: 'opacity 0.12s ease',
          pointerEvents: 'none',
          zIndex: 250,
        }}
      />
      {streamLive && !showPreview && (
        <div
          aria-hidden
          style={{
            position: 'fixed',
            top: '1.8rem',
            left: '1.8rem',
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#fff',
            opacity: 0.5,
            animation: 'nomadGesturePulse 3s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 120,
          }}
        />
      )}
    </>
  );
}
