/** Shared rich-text renderer for note / question panels.
 *
 *  Default export = the app's full markdown pipeline (NomadApp uses the same
 *  one): marked — so **bold**, images, lists, headings and raw HTML solution
 *  markup all render — with $…$/$$…$$ KaTeX stashed *before* markdown parsing
 *  so marked never touches TeX. Vault media paths are stored base-agnostic
 *  (/media/…) and get BASE prefixed so images resolve under /nomad/ too.
 *
 *  `renderInline` is the single-line variant for short UI strings (options,
 *  titles): math on the RAW text, prose HTML-escaped, **bold** honoured —
 *  never block-level markup. */
import katex from 'katex';
import { renderMarkdownWithMath, stripNoteHeader } from '../concepts/latex';

const BASE = ((import.meta as any).env?.BASE_URL || '/').replace(/\/?$/, '/');

export default function renderRich(text: string): string {
  if (!text) return '';
  const html = renderMarkdownWithMath(stripNoteHeader(text));
  return html.replace(/src="\/media\//g, `src="${BASE}media/`);
}

export function renderInline(text: string): string {
  if (!text) return '';
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  try {
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);
    return parts
      .map((tok) => {
        if (tok.startsWith('$$') && tok.endsWith('$$') && tok.length > 4) {
          try { return katex.renderToString(tok.slice(2, -2).trim(), { displayMode: true }); } catch { return esc(tok); }
        }
        if (tok.startsWith('$') && tok.endsWith('$') && tok.length > 2) {
          try { return katex.renderToString(tok.slice(1, -1).trim(), { displayMode: false }); } catch { return esc(tok); }
        }
        // prose: escape, then honour **bold** markers
        return esc(tok).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      })
      .join('');
  } catch {
    return esc(text);
  }
}
