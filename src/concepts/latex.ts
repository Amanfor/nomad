import katex from 'katex';

/** Render $...$ and $$...$$ inside a single-line label (titles, sections). */
export function renderLabelLatex(text: string): string {
  if (!text) return '';
  let result = text.replace(/\$\$([^$]+)\$\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false }); }
    catch { return tex; }
  });
  result = result.replace(/\$([^$]+)\$/g, (_, tex) => {
    try { return katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false }); }
    catch { return tex; }
  });
  return result;
}
