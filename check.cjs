const fs = require('fs');
const code = fs.readFileSync('src/components/NomadApp.tsx', 'utf8');
const match = code.match(/export const PRACTICE_QUESTIONS = (\[[\s\S]*?\]);\n/);
if (match) {
  const arr = eval(match[1]);
  arr.forEach((q, i) => {
    if (q.solution === undefined) console.log('Missing solution at index', i, 'id', q.id);
  });
  console.log('Total questions checked:', arr.length);
}
