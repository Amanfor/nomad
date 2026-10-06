import React, { useCallback, useEffect, useRef } from 'react';
import { useGestureEngine } from '../lib/gesture/useGestureEngine';
import type { EngineEvents } from '../lib/gesture/engine';
import { GestureMap, GestureActionId, handMatches, loadGestureMap } from '../lib/gestureConfig';

interface GestureLayerProps {
  enabled: boolean;
  showPreview: boolean;
  introActive: boolean;
  noteOpen?: boolean; // kept for API compat (no longer read)
  practiceOpen: boolean; // when the practice overlay is open, counts answer instead of scrolling
  gestureMap?: GestureMap; // remapping config
  onStatus: (status: string | null) => void;
  onFatal: (reason: string) => void; // → parent flips enableGesture to false
}

export default function GestureLayer({ enabled, showPreview, introActive, practiceOpen, gestureMap, onStatus, onFatal }: GestureLayerProps) {
  const debugCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const gestureMapRef = useRef<GestureMap>(gestureMap || loadGestureMap());
  useEffect(() => { if (gestureMap) gestureMapRef.current = gestureMap; }, [gestureMap]);
  const introActiveRef = useRef(introActive);
  const practiceOpenRef = useRef(practiceOpen);
  useEffect(() => { introActiveRef.current = introActive; }, [introActive]);
  useEffect(() => { practiceOpenRef.current = practiceOpen; }, [practiceOpen]);

  /** Shared guard for every synthetic input this layer injects. */
  const canInject = useCallback(() => {
    if (introActiveRef.current || document.hidden) return false;
    const ae = document.activeElement;
    if (ae instanceof HTMLElement) {
      const tag = ae.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || ae.isContentEditable) return false;
    }
    return true;
  }, []);

  const dispatchEffect = useCallback((id: GestureActionId) => {
    if (!canInject()) return;
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
  }, [canInject]);

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

  // Engine subscriptions. A fresh object per render is fine — the hook reads
  // the latest handlers through a ref.
  const events: EngineEvents = {
    onHold: (pose, hand) => dispatchHoldPose(pose, hand),
    onScrollFrame: (pose, hand, dyPx) => {
      // Remapping is explicit: only scroll when the configured scroll pose
      // and hand match. Practice overlay already answers via counts.
      const m = gestureMapRef.current;
      if (m.scroll.pose !== pose) return;
      if (!practiceOpenRef.current && handMatches(m.scroll, hand)) {
        window.scrollBy({ top: dyPx, behavior: 'auto' });
      }
    },
    onSwipe: (dir) => {
      // Whole-hand swipe → the arrow key that view already listens for
      // (practice prev/next, search results, question browser).
      if (!canInject()) return;
      window.dispatchEvent(new KeyboardEvent('keydown', { key: dir === 'right' ? 'ArrowRight' : 'ArrowLeft', bubbles: true, cancelable: true }));
    },
  };

  const { videoRef, engineRef, streamLive } = useGestureEngine({
    enabled: enabled && !introActive,
    events,
    onStatus,
    onFatal,
  });

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
  }, [streamLive, showPreview, engineRef]);

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
