import type { Concept } from './types';
import { noteHasVisibleContent } from './latex';

/* Base URL helper — Astro base is '/nomad' on GitHub Pages, '/' locally. */
const BASE_URL = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');

/**
 * Single shared loader for the concept database.
 * - Fetches from `${BASE_URL}all-concepts.json` (works on Pages AND locally).
 * - Module-level cache: every consumer shares one request.
 * - Never throws — returns { concepts: [] } on failure so the UI stays alive.
 */
export interface LoadResult {
  concepts: Concept[];
  error: string | null;
}

let cached: Concept[] | null = null;
let inflight: Promise<LoadResult> | null = null;
const listeners = new Set<(r: LoadResult) => void>();

function emit(r: LoadResult) {
  listeners.forEach(fn => { try { fn(r); } catch { /* noop */ } });
}

export function loadConcepts(force = false): Promise<LoadResult> {
  if (cached && !force) return Promise.resolve({ concepts: cached, error: null });
  if (inflight && !force) return inflight;

  inflight = (async () => {
    try {
      // no-cache = revalidate with the server every load (usually a tiny 304).
      // force-cache was serving a stale all-concepts.json indefinitely, which
      // silently blocked database updates from reaching returning users.
      const res = await fetch(`${BASE_URL}all-concepts.json`, { cache: 'no-cache' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error('invalid shape');
      // Notes whose entire body is the Batch/Source provenance header have
      // nothing left to show once that header is hidden at render time (50 of
      // 574 — mostly "— Introduction" stubs). Drop them from the in-memory
      // list; the JSON on disk is untouched.
      cached = (data as Concept[]).filter((c) => noteHasVisibleContent(c.content || ''));
      emit({ concepts: cached, error: null });
      return { concepts: cached, error: null };
    } catch (e: any) {
      inflight = null;
      const err = String(e?.message || e);
      emit({ concepts: cached || [], error: err });
      return { concepts: cached || [], error: err };
    } finally {
      inflight = null;
    }
  })();

  return inflight;
}

/** Synchronous snapshot — [] until the first load resolves. */
export function peekConcepts(): Concept[] {
  return cached || [];
}

/** Subscribe to load completion (returns unsubscribe). */
export function onConceptsLoaded(fn: (r: LoadResult) => void): () => void {
  if (cached) { fn({ concepts: cached, error: null }); return () => {}; }
  listeners.add(fn);
  return () => listeners.delete(fn);
}
