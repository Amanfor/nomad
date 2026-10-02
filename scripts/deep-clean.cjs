const fs = require('fs');
const path = require('path');
const dir = '/home/aman/nomad/src/data/context';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const fp = path.join(dir, file);
  let c = fs.readFileSync(fp, 'utf8');
  
  // 1. Remove metadata bleed lines
  c = c.replace(/^(Extracted into:|Batch:|Status:|Source:|Verified,)[^\n]*/gm, '');
  
  // 2. Remove [IMAGE] and Description: placeholders
  c = c.replace(/^\[IMAGE\][^\n]*/gm, '');
  c = c.replace(/^Description:[^\n]*/gm, '');
  
  // 3. Fix inline LaTeX spaces: $ x $ -> $x$
  c = c.replace(/(?<!\$)\$([^$\n]+?)\$(?!\$)/g, (match, inner) => {
      return `$${inner.trim()}$`;
  });
  
  // 4. Fix display LaTeX spaces: $$ x $$ -> $$x$$
  c = c.replace(/\$\$([\s\S]+?)\$\$/g, (match, inner) => {
      return `$$${inner.trim()}$$`;
  });
  
  // 5. Fix broken bold: ** text ** -> **text**
  c = c.replace(/\*\*([^\n*]+?)\*\*/g, (match, inner) => {
      return `**${inner.trim()}**`;
  });
  
  // 6. Fix unclosed ** at the end of line
  c = c.split('\n').map(line => {
      if ((line.match(/\*\*/g) || []).length === 1) {
          return line + '**';
      }
      return line;
  }).join('\n');
  
  // 7. Fix double-spaced numbered lists: "1.  " -> "1. "
  c = c.replace(/^([ \t]*\d+\.)[ \t]{2,}/gm, '$1 ');
  
  // 8. Fix bullet lists to use `- ` consistently
  c = c.replace(/^([ \t]*)[*+][ \t]+/gm, '$1- ');
  
  // 9. Remove duplicate # Title lines (keep only the first one)
  const lines = c.split('\n');
  const seenH1s = new Set();
  const deduped = lines.filter(line => {
      if (line.match(/^#\s+/)) {
          if (seenH1s.has(line)) return false;
          seenH1s.add(line);
      }
      return true;
  });
  c = deduped.join('\n');
  
  // 10. Collapse 3+ consecutive blank lines to 2
  c = c.replace(/\n{4,}/g, '\n\n\n');
  
  // 11. Remove orphaned section headings (## with no content: just a number)
  c = c.replace(/^##\s+\d+\.?\s*$/gm, '');
  
  // 12. Trim trailing whitespace from every line
  c = c.split('\n').map(l => l.trimEnd()).join('\n');
  
  // 13. Ensure file ends with exactly one newline
  c = c.trimEnd() + '\n';
  
  fs.writeFileSync(fp, c, 'utf8');
}
console.log(`Cleaned ${files.length} files.`);
