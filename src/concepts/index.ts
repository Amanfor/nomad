import { useEffect, useState } from 'react';
import type { Concept } from './types';
import { loadConcepts, peekConcepts, onConceptsLoaded } from './loader';

/**
 * Shared React hook over the concept loader.
 * Every consumer sees the same data from a single cached fetch.
 */
export function useConcepts() {
  const [concepts, setConcepts] = useState<Concept[]>(() => peekConcepts());
  const [loading, setLoading] = useState(() => !peekConcepts().length);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    const unsub = onConceptsLoaded(r => {
      if (!alive) return;
      setConcepts(r.concepts);
      setLoading(false);
      setError(r.error);
    });
    loadConcepts();
    return () => { alive = false; unsub(); };
  }, []);

  return { concepts, loading, error, reload: () => loadConcepts(true) };
}

export { loadConcepts, peekConcepts } from './loader';
export type { Concept } from './types';
export { default as ConceptBrowser } from './ConceptBrowser';
