const fs = require('fs');
let content = fs.readFileSync('/home/aman/nomad/src/components/NomadApp.tsx', 'utf8');

// Replace questionFuse keys
content = content.replace(
    /keys:\s*\[\s*\{\s*name:\s*'question',\s*weight:\s*2\s*\},\s*\{\s*name:\s*'topic',\s*weight:\s*1\s*\}\s*\]/g,
    `keys: [
      { name: 'chapter', weight: 3 },
      { name: 'topic', weight: 2 },
      { name: 'question', weight: 1 }
    ]`
);

// Replace Dropdown targetMode rendering (approx line 2260)
// From: {isTargetMode ? r.topic : (r as any).isFullChapter ? `${r.section} · FULL CHAPTER` : r.section}
// To: {isTargetMode ? `${r.chapter.toUpperCase()} · ${r.topic.toUpperCase()}` : (r as any).isFullChapter ? `${r.section} · FULL CHAPTER` : r.section}
content = content.replace(
    /\{isTargetMode \? r\.topic : \(r as any\)\.isFullChapter \? `\$\{r\.section\} · FULL CHAPTER` : r\.section\}/g,
    `{isTargetMode ? \`\${r.chapter.toUpperCase()} · \${r.topic.toUpperCase()}\` : (r as any).isFullChapter ? \`\${r.section} · FULL CHAPTER\` : r.section}`
);

// Replace PracticeOverlay rendering (approx line 1195)
// From: {(q as any).topic}
// To: {(q as any).chapter?.toUpperCase()} · {(q as any).topic?.toUpperCase()}
content = content.replace(
    /\{\(q as any\)\.topic\}/g,
    `{(q as any).chapter?.toUpperCase()} · {(q as any).topic?.toUpperCase()}`
);

// Replace Target Question view rendering (approx line 2344)
// From: <div style={S.section}>{selectedQuestion.topic}</div>
// To: <div style={S.section}>{selectedQuestion.chapter} · {selectedQuestion.topic}</div>
content = content.replace(
    /<div style=\{S\.section\}>\{selectedQuestion\.topic\}<\/div>/g,
    `<div style={S.section}>{selectedQuestion.chapter} · {selectedQuestion.topic}</div>`
);

fs.writeFileSync('/home/aman/nomad/src/components/NomadApp.tsx', content);
console.log("Replaced UI logic.");
