const fs = require('fs');

let content = fs.readFileSync('/home/aman/nomad/src/components/NomadApp.tsx', 'utf8');

const targetUpdated = fs.readFileSync('/home/aman/nomad/TARGET_UPDATED.json', 'utf8');

// Replace TARGET_QUESTIONS
const targetPattern = /export const TARGET_QUESTIONS = \[\s*[\s\S]*?\s*\];/;
content = content.replace(targetPattern, `export const TARGET_QUESTIONS = ${targetUpdated};`);

if (fs.existsSync('/home/aman/nomad/MICRO_UPDATED.json')) {
    const microUpdated = fs.readFileSync('/home/aman/nomad/MICRO_UPDATED.json', 'utf8');
    const microPattern = /export const MICRO_QUESTIONS = \[\s*[\s\S]*?\s*\];/;
    content = content.replace(microPattern, `export const MICRO_QUESTIONS = ${microUpdated};`);
}

fs.writeFileSync('/home/aman/nomad/src/components/NomadApp.tsx', content);
console.log("Updated NomadApp.tsx");
