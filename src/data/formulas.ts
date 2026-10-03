let cache: Promise<any[]> | null = null;

/** Load public/formula-sheets.json; returns [] on any failure. */
export function loadFormulaSheets(): Promise<any[]> {
  if (cache) return cache;
  cache = (async () => {
    try {
      const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');
      const res = await fetch(`${BASE}formula-sheets.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arr = await res.json();
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  })();
  return cache;
}
