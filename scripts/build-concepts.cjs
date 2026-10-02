const fs = require('fs');
const path = require('path');

const VAULT_DIR = path.join(__dirname, '../src/data/context');
const OUT_FILE = path.join(__dirname, '../public/all-concepts.json');

const concepts = [];

function parseFrontmatter(content) {
  let fm = {};
  let body = content;
  if (content.startsWith('---')) {
    const endIdx = content.indexOf('---', 3);
    if (endIdx > -1) {
      const fmStr = content.substring(3, endIdx);
      body = content.substring(endIdx + 3).trim();
      
      fmStr.split('\n').forEach(line => {
        const match = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
        if (match) {
          let val = match[2].trim();
          if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
          if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
          fm[match[1]] = val;
        }
      });
    }
  }
  return { fm, body };
}

function processDirectory(dir, subject) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.startsWith('.')) continue; // skip hidden
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (file !== 'media') {
         processDirectory(fullPath, subject || file);
      }
    } else if (file.endsWith('.md')) {
      const rawContent = fs.readFileSync(fullPath, 'utf-8');
      const { fm, body } = parseFrontmatter(rawContent);
      
      const cleanedFileName = file.replace('.md', '').replace(/^\d+_/, '').replace(/_/g, ' ');
      let chapterTitle = fm.title || cleanedFileName;
      
      if (!fm.title) {
         const h1Match = body.match(/^#\s+(.*)$/m);
         if (h1Match) {
            chapterTitle = h1Match[1].trim();
         }
      }
      
      chapterTitle = chapterTitle.replace(/^Chapter\s+\d+\s*[-—–]+\s*/i, '').replace(/^\d+[\s_-]*/, '');
      
      let section = fm.topic || subject || "Context";
      if (subject && subject.toLowerCase() !== section.toLowerCase()) {
         section = subject.charAt(0).toUpperCase() + subject.slice(1) + ' / ' + section;
      } else if (subject) {
         section = subject.charAt(0).toUpperCase() + subject.slice(1);
      }

      const chunks = body.split(/\n##\s+/);
      
      const hasMeaningfulIntro = (() => {
        const firstChunk = chunks[0];
        if (!firstChunk) return false;
        const lines = firstChunk.split('\n').filter(l => !l.startsWith('#') && l.trim().length > 0);
        return lines.length >= 3;
      })();
      
      if (chunks.length > 1 || hasMeaningfulIntro) {
        concepts.push({
          id: `${file.replace('.md', '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-full`,
          title: chapterTitle,
          section,
          content: body,
          formulas: [],
          isFullChapter: true
        });
      }

      chunks.forEach((chunk, index) => {
        if (chunk.trim() === '') return;
        
        let chunkTitle = chapterTitle;
        let content = chunk.trim();
        
        if (index > 0) {
          const lines = chunk.split('\n');
          const heading = lines[0].trim();
          chunkTitle = `${chapterTitle} — ${heading.replace(/^\d+\.\s*/, '')}`;
          content = `## ${heading}\n\n` + lines.slice(1).join('\n').trim();
        } else {
          // Intro chunk: skip if just empty/metadata (less than 3 actual lines)
          const linesWithoutHeaders = chunk.split('\n').filter(l => !l.startsWith('#') && l.trim().length > 0);
          if (linesWithoutHeaders.length < 3) return;
          chunkTitle = `${chapterTitle} — Introduction`;
        }
        
        const id = `${file.replace('.md', '').toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
        
        concepts.push({
          id,
          title: chunkTitle,
          section,
          content,
          formulas: [],
          isFullChapter: false
        });
      });
    }
  }
}

processDirectory(VAULT_DIR, null);
console.log(`Found ${concepts.length} atomic concepts after chunking.`);
fs.writeFileSync(OUT_FILE, JSON.stringify(concepts));
console.log(`Wrote to ${OUT_FILE}`);
