const fs = require('fs');
const katex = require('/home/aman/nomad/node_modules/katex');
const path = '/home/aman/nomad/public/graph/' + process.argv[2] + '.json';
let g;
try { g = JSON.parse(fs.readFileSync(path, 'utf8')); }
catch (e) { console.log('MISSING/BAD JSON:', path); process.exit(1); }
console.log(process.argv[2], ':: nodes', g.nodes.length, '| edges', g.edges.length);
const ids = new Set(g.nodes.map((n) => n.id));
console.log('  duplicate ids:', g.nodes.length - ids.size, '| bad edges:', g.edges.filter((e) => !ids.has(e.source) || !ids.has(e.target)).length);
const parentCount = {};
g.edges.forEach((e) => (parentCount[e.target] = (parentCount[e.target] || 0) + 1));
console.log('  multi-parent nodes:', Object.values(parentCount).filter((v) => v > 1).length);
const childless = g.nodes.filter((n) => !parentCount[n.id]);
console.log('  roots:', childless.map((r) => r.label).join(', ') || 'NONE');
const children = {};
g.edges.forEach((e) => ((children[e.source] = children[e.source] || []).push(e.target)));
if (childless.length === 1) {
  const seen = new Set();
  const q = [childless[0].id];
  while (q.length) { const id = q.shift(); if (seen.has(id)) continue; seen.add(id); (children[id] || []).forEach((c) => q.push(c)); }
  console.log('  BFS reachability:', seen.size === g.nodes.length ? 'ALL' : seen.size + '/' + g.nodes.length);
}
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
let fails = 0;
for (const n of g.nodes) {
  const parts = (n.note || '').split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);
  for (const tok of parts) {
    if (tok.startsWith('$$') && tok.endsWith('$$') && tok.length > 4) {
      try { katex.renderToString(tok.slice(2, -2).trim(), { displayMode: true }); } catch (e) { if (++fails < 6) console.log('  LATEX FAIL --', n.label, '::', tok.slice(0, 60)); }
    } else if (tok.startsWith('$') && tok.endsWith('$') && tok.length > 2) {
      try { katex.renderToString(tok.slice(1, -1).trim(), { displayMode: false }); } catch (e) { if (++fails < 6) console.log('  LATEX FAIL --', n.label, '::', tok.slice(0, 60)); }
    }
  }
}
console.log('  latex failures:', fails, '| notes-empty:', g.nodes.filter((n) => !(n.note || '').trim()).length);
process.exit(fails === 0 ? 0 : 1);
