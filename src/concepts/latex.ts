import katex from 'katex';
import { marked } from 'marked';

/**
 * Markdown-first renderer with math protected from markdown.
 *
 * The old pipeline ran KaTeX *then* marked over the resulting HTML. marked then
 * found `_` inside KaTeX's <annotation> TeX source and paired emphasis across
 * raw HTML tags, shredding the markup — raw TeX (`{I, \perp} = -v{O...}`)
 * leaked into the note as visible text. Extracting math into private-use
 * tokens *before* markdown parsing keeps marked away from TeX entirely.
 */
export function renderMarkdownWithMath(text: string): string {
  if (!text) return '';
  const stash: string[] = [];
  const keep = (tex: string, displayMode: boolean): string => {
    let html: string;
    try { html = katex.renderToString(tex.trim(), { displayMode, throwOnError: false }); }
    catch { html = tex.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    stash.push(html);
    return `\uE000${stash.length - 1}\uE001`;
  };
  // Extract math first so markdown never touches TeX (and TeX never touches markdown).
  let src = text.replace(/\$\$([^$]+)\$\$/g, (_, tex) => keep(tex, true));
  src = src.replace(/\$([^$\n]+)\$/g, (_, tex) => keep(tex, false));
  const html = marked.parse(src) as string;
  return html.replace(/\uE000(\d+)\uE001/g, (_, i) => stash[Number(i)] ?? '');
}

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
