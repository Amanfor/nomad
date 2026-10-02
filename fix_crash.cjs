const fs = require('fs');
let content = fs.readFileSync('/home/aman/nomad/src/components/NomadApp.tsx', 'utf8');
content = content.replace(
  /dangerouslySetInnerHTML=\{\{ __html: renderInlineLatex\(isTargetMode \? \(r\.question\.length > 60 \? r\.question\.substring\(0, 60\) \+ '\.\.\.' : r\.question\) : r\.title\) \}\}/g,
  `dangerouslySetInnerHTML={{ __html: renderInlineLatex(isTargetMode ? ((r.question || '').length > 60 ? (r.question || '').substring(0, 60) + '...' : (r.question || '')) : r.title) }}`
);
fs.writeFileSync('/home/aman/nomad/src/components/NomadApp.tsx', content);
