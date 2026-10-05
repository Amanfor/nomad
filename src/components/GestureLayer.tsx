import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GestureEngine } from '../lib/gesture/engine';
import type { GestureAction } from '../lib/gesture/swipe';

interface GestureLayerProps {
  enabled: boolean;
  showPreview: boolean;
  introActive: boolean;
  noteOpen: boolean; // swipe up/down scrolls only while a concept note is open
  onStatus: (status: string | null) => void;
  onFatal: (reason: string) => void; // → parent flips enableGesture to false
}

const SCROLL_FRACTION = 0.7;

export default function GestureLayer({ enabled, showPreview, introActive, noteOpen, onStatus, onFatal }: GestureLayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const engineRef = useRef<GestureEngine | null>(null);
  const [streamLive, setStreamLive] = useState(false);
  const introActiveRef = useRef(introActive);
  const noteOpenRef = useRef(noteOpen);
  useEffect(() => { introActiveRef.current = introActive; }, [introActive]);
  useEffect(() => { noteOpenRef.current = noteOpen; }, [noteOpen]);

  const introActiveSync = () => introActiveRef.current;

  const dispatchUiAction = useCallback((action: GestureAction) => {
    // Guards, applied to both real and dev-injected actions.
    if (introActiveSync()) return;
    if (typeof document !== 'undefined' && document.hidden) return;
    const ae = document.activeElement;
    if (ae instanceof HTMLElement) {
      const tag = ae.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || ae.isContentEditable) return;
    }
    switch (action) {
      case 'swipe-left': // user's left → next question (matches touch swipe left)
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, cancelable: true }));
        break;
      case 'swipe-right':
        window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }));
        break;
      case 'swipe-up': // hand up → page scrolls down, like a touch swipe
        if (noteOpenRef.current) window.scrollBy({ top: window.innerHeight * SCROLL_FRACTION, behavior: 'smooth' });
        break;
      case 'swipe-down':
        if (noteOpenRef.current) window.scrollBy({ top: -window.innerHeight * SCROLL_FRACTION, behavior: 'smooth' });
        break;
      case 'reveal':
      case 'conceal':
        window.dispatchEvent(new CustomEvent('nomad:gesture', { detail: { action } }));
        break;
    }
  }, []);

  const stopCamera = useCallback(() => {
    engineRef.current?.stop();
    engineRef.current = null;
    setStreamLive(false);
    onStatus(null);
  }, [onStatus]);

  const startCamera = useCallback(async () => {
    if (engineRef.current) return;
    if (!videoRef.current) return;
    onStatus('starting camera…');
    const engine = new GestureEngine({ onAction: dispatchUiAction });
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
  }, [dispatchUiAction, onFatal, onStatus]);

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

  // Development-only hook for testing the action wiring without a camera.
  useEffect(() => {
    if (!(import.meta as any).env?.DEV) return;
    const inject = (action: string) => {
      switch (action) {
        case 'next': dispatchUiAction('swipe-left'); break;
        case 'previous': dispatchUiAction('swipe-right'); break;
        case 'scroll-down': dispatchUiAction('swipe-up'); break;
        case 'scroll-up': dispatchUiAction('swipe-down'); break;
        case 'reveal': dispatchUiAction('reveal'); break;
        case 'conceal': dispatchUiAction('conceal'); break;
        default: break;
      }
    };
    (window as any).__nomadGesture = { inject };
    return () => {
      delete (window as any).__nomadGesture;
    };
  }, [dispatchUiAction]);

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
