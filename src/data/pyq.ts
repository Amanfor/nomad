import { TARGET_QUESTIONS } from './questions';

let cache: Promise<any[]> | null = null;

/**
 * Fetch the comprehensive PYQ database (public/pyq-database.json) with a
 * single shared in-flight promise. Falls back to the bundled TARGET set on
 * any failure, so callers never have to handle errors.
 */
export function loadPyqQuestions(): Promise<any[]> {
  if (cache) return cache;
  cache = (async () => {
    try {
      const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');
      const res = await fetch(`${BASE}pyq-database.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arr = await res.json();
      if (!Array.isArray(arr) || arr.length === 0) throw new Error('empty database');
      return arr;
    } catch {
      return TARGET_QUESTIONS as any[];
    }
  })();
  return cache;
}
