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
      return arr.map((q: any) => ({
        ...q,
        chapter: typeof q.chapter === 'string' && q.chapter ? q.chapter : 'general',
        topic: typeof q.topic === 'string' && q.topic ? q.topic : 'general',
      }));
    } catch {
      return TARGET_QUESTIONS as any[];
    }
  })();
  return cache;
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');
/** Solution-ready check: a real explanation, not empty / marker residue. */
const isSolutionReady = (q: any) =>
  typeof q.solution === 'string' && q.solution.trim().length >= 40 &&
  !q.solution.startsWith('[!success');

let targetCache: Promise<any[]> | null = null;

/** Target-mode bank: existing curated TARGET questions + all
 *  solution-ready comprehensive entries from the PYQ database. */
export function loadTargetQuestions(): Promise<any[]> {
  if (targetCache) return targetCache;
  targetCache = (async () => {
    try {
      const pyq = await loadPyqQuestions();
      const seen = new Set(TARGET_QUESTIONS.map(q => norm(q.question).slice(0, 160)));
      const extra = pyq.filter((q: any) => isSolutionReady(q) && !seen.has(norm(q.question).slice(0, 160)));
      return [...TARGET_QUESTIONS, ...extra] as any[];
    } catch {
      return TARGET_QUESTIONS as any[];
    }
  })();
  return targetCache;
}
