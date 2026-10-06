import { useEffect, useState } from 'react';

/** Read settings.alwaysGlow without React (standalone pages: graph, graph menu). */
export function readAlwaysGlow(): boolean {
  try { return JSON.parse(localStorage.getItem('nomad-settings') || '{}').alwaysGlow === true; }
  catch { return false; }
}

/**
 * Keep `body.always-glow` in sync with the Always Glow setting.
 *
 * The class is the delivery mechanism for the always-glow rules in
 * global.css (`color` + 14px bloom on every element), so every page gets the
 * mode — including the standalone concept-graph pages that never mount
 * NomadApp. Pass the live React setting on the main app; omit the argument on
 * standalone pages to read localStorage once at mount.
 *
 * Returns the effective flag so canvas-drawn pages can light their pixels too
 * (CSS cannot reach a <canvas>).
 */
export function useGlowBodyClass(alwaysGlow?: boolean): boolean {
  const [stored] = useState(readAlwaysGlow);
  const on = alwaysGlow ?? stored;
  useEffect(() => {
    document.body.classList.toggle('always-glow', on);
    return () => { document.body.classList.remove('always-glow'); };
  }, [on]);
  return on;
}
