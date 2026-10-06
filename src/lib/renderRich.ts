/** Shared note renderer: HTML-escapes prose, renders $…$ / $$…$$ via KaTeX.
 *  Returns an HTML string for dangerouslySetInnerHTML. */
import katex from 'katex';

export default function renderRich(text: string): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  try {
    // render math on the RAW text (escaping would turn '->' into '-&gt;' and break KaTeX);
    // only prose between $...$ spans is HTML-escaped
    const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);
    return parts
      .map((tok) => {
        if (tok.startsWith('$$') && tok.endsWith('$$') && tok.length > 4) {
          try { return katex.renderToString(tok.slice(2, -2).trim(), { displayMode: true }); } catch { return esc(tok); }
        }
        if (tok.startsWith('$') && tok.endsWith('$') && tok.length > 2) {
          try { return katex.renderToString(tok.slice(1, -1).trim(), { displayMode: false }); } catch { return esc(tok); }
        }
        return esc(tok);
      })
      .join('')
      .replace(/\n/g, '<br/>');
  } catch {
    return esc(text);
  }
}
