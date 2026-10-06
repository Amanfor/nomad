// Shared camera + GestureRecognizer lifecycle for every gesture consumer.
// GestureLayer (app root) and ConceptGraph (graph page) both mount this; each
// subscribes only to the events it needs and renders its own <video>.
//
// The engine holds one event object for its whole life, so callers may pass a
// fresh inline object every render — the hook forwards through a stable proxy.

import { useCallback, useEffect, useRef, useState } from 'react';
import { EngineEvents, EngineFailure, GestureEngine } from './engine';

export interface UseGestureEngineOptions {
  /** Master switch (settings.enableGesture in the app, same key on the graph). */
  enabled: boolean;
  /** Latest handlers; read through a ref so inline objects are fine. */
  events: EngineEvents;
  onStatus?: (status: string | null) => void;
  onFatal?: (reason: string) => void;
}

export function useGestureEngine(opts: UseGestureEngineOptions) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const engineRef = useRef<GestureEngine | null>(null);
  const [streamLive, setStreamLive] = useState(false);

  const eventsRef = useRef(opts.events);
  const statusRef = useRef(opts.onStatus);
  const fatalRef = useRef(opts.onFatal);
  useEffect(() => {
    eventsRef.current = opts.events;
    statusRef.current = opts.onStatus;
    fatalRef.current = opts.onFatal;
  });

  const proxyRef = useRef<EngineEvents | null>(null);
  if (!proxyRef.current) {
    proxyRef.current = {
      onHold: (pose, hand) => eventsRef.current.onHold?.(pose, hand),
      onPinch: (ev, slot) => eventsRef.current.onPinch?.(ev, slot),
      onScrollFrame: (pose, hand, deltaPx) => eventsRef.current.onScrollFrame?.(pose, hand, deltaPx),
      onSwipe: (dir, hand) => eventsRef.current.onSwipe?.(dir, hand),
      onPanFrame: (hand, dxPx, dyPx) => eventsRef.current.onPanFrame?.(hand, dxPx, dyPx),
    };
  }

  const stopCamera = useCallback(() => {
    engineRef.current?.stop();
    engineRef.current = null;
    setStreamLive(false);
    statusRef.current?.(null);
  }, []);

  const startCamera = useCallback(async () => {
    if (engineRef.current) return;
    const video = videoRef.current;
    if (!video) return;
    statusRef.current?.('starting camera…');
    const engine = new GestureEngine(proxyRef.current!);
    engineRef.current = engine;
    try {
      await engine.start(video);
      if (engineRef.current !== engine) return; // stopped while starting
      setStreamLive(true);
      statusRef.current?.('runs on your device. nothing is recorded.');
    } catch (err: any) {
      engineRef.current = null;
      setStreamLive(false);
      fatalRef.current?.(typeof err === 'string' ? err : 'camera not available in this build');
    }
  }, []);

  // Lifecycle: on when enabled && tab visible.
  useEffect(() => {
    if (opts.enabled && !document.hidden) {
      startCamera();
    } else {
      stopCamera();
    }
    return undefined;
  }, [opts.enabled, startCamera, stopCamera]);

  // Stop when hidden, restart when visible again.
  const enabledRef = useRef(opts.enabled);
  useEffect(() => {
    enabledRef.current = opts.enabled;
  });
  useEffect(() => {
    const onVis = () => {
      if (document.hidden) {
        stopCamera();
      } else if (enabledRef.current) {
        startCamera();
      }
    };
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, [startCamera, stopCamera]);

  // Ensure everything is off when unmounted.
  useEffect(() => {
    return () => {
      engineRef.current?.stop();
      engineRef.current = null;
    };
  }, []);

  return { videoRef, engineRef, streamLive };
}
