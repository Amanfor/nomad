#!/usr/bin/env node
/* KaTeX parse audit for src/data/context/*.md — every $..$ / $$..$$ segment
 * is rendered with throwOnError; failures are listed per file/line.
 * Run after sync/build: node scripts/math_audit.js [--json out.json] */
const fs = require('fs');
const path = require('path');
const katex = require('katex');

const DIR = path.join(__dirname, '..', 'src', 'data', 'context');
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.md'));

const errors = [];
let total = 0;

for (const f of files) {
  const text = fs.readFileSync(path.join(DIR, f), 'utf8');
  const segs = [];
  const reDD = /\$\$([\s\S]+?)\$\$/g;
  let m;
  while ((m = reDD.exec(text))) segs.push({ tex: m[1], idx: m.index, display: true });
  const reS = /(?<!\$)\$(?!\$)([^$\n]+?)\$(?!\$)/g;
  while ((m = reS.exec(text))) segs.push({ tex: m[1], idx: m.index, display: false });

  for (const s of segs) {
    total++;
    const tex = s.tex.trim();
    if (!tex) continue;
    try {
      katex.renderToString(tex, { displayMode: s.display, throwOnError: true, strict: false });
    } catch (e) {
      const line = text.slice(0, s.idx).split('\n').length;
      errors.push({ file: f, line, display: s.display, tex: tex.slice(0, 220), err: String(e.message).slice(0, 160) });
    }
  }
}

console.log(`parsed ${total} math segments across ${files.length} files | errors: ${errors.length}`);
const byFile = {};
for (const e of errors) (byFile[e.file] = byFile[e.file] || []).push(e);
for (const [f, es] of Object.entries(byFile)) {
  console.log(`\n${f}: ${es.length}`);
  for (const e of es.slice(0, 8)) console.log(`  L${e.line} [${e.display ? '$$' : '$'}] ${e.err}\n      tex: ${e.tex.replace(/\n/g, ' ')}`);
}
const jIdx = process.argv.indexOf('--json');
if (jIdx > -1) {
  fs.writeFileSync(process.argv[jIdx + 1], JSON.stringify(errors, null, 1));
  console.log(`\njson -> ${process.argv[jIdx + 1]}`);
}
process.exit(errors.length ? 1 : 0);
