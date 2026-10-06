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

/* ─── Vault provenance header (hidden at render time) ──────────────────────
 * Raw notes in src/data/context are topped by scaffolding for the build:
 * "…Revision Context:", Source:, Extracted into:, Batch:/Batch Range:,
 * Status:, the ____ divider and the "## Source & Status" section. That is
 * metadata, not content — so it is dropped *here*, at render time, instead
 * of being deleted from the markdown: build-concepts.cjs derives the subject
 * and chapter title from those very lines, and scripts/sync_vault_context.py
 * would restore them from the vault anyway.
 *
 * Only the leading block is consumed — the scan stops at the first line that
 * looks like real content, so a legitimate "Source:" deeper in a note (or at
 * the head of a question solution) is never touched.
 */
const META_TITLE = /^\s*(?:\*\*)?(?:Mathematics|Physics|Chemistry)?\s*Revision Context\s*:/i;
const META_LINE = /^\s*[-*#>\s]*(?:\*\*)?(?:Source|Extracted into|Batch Range|Batch|Status)\s*[:*]/i;
const META_DIV = /^\s*_{5,}\s*$/;
const META_SRC_HEAD = /^\s*##\s*Source\s*&\s*Status\s*$/i;
const META_ALT_TITLE = /^\s*\d+_[A-Za-z_]+ - .+Revision\s*$|^\s*\*\*Chapter\s+\d+\s*[-—–].*\*\*\s*$/;

export function stripNoteHeader(text: string): string {
  if (!text) return '';
  // Phase 1 — provenance lines can be separated by stray content (e.g.
  // "**Companion Theory Context:**" or "Multimodal Diagrams Saved:"), so the
  // keyword lines are dropped wherever they appear. Verified against the full
  // corpus: only genuine provenance matches, and zero matches in 10k+ question
  // stems/solutions.
  let lines = text.split('\n')
    .filter((l) => !(META_TITLE.test(l) || META_LINE.test(l) || META_SRC_HEAD.test(l)));
  // Phase 2 — consume the remaining leading run (blanks, the ____ divider,
  // alternate title lines) up to the first real content line. The divider and
  // alternate titles are NOT stripped mid-document: `____` is also used as a
  // legit section separator between content blocks.
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim() || META_DIV.test(l) || META_ALT_TITLE.test(l)) { i += 1; continue; }
    break;
  }
  return lines.slice(i).join('\n');
}

/** False when a note is *only* provenance (header + dividers) — nothing to show. */
export function noteHasVisibleContent(text: string): boolean {
  return stripNoteHeader(text || '').split('\n')
    .some((l) => l.trim() && !/^\s*[-_]{3,}\s*$/.test(l));
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
