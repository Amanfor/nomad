const fs = require('fs');
const path = require('path');

const dir = '/home/aman/nomad/src/data/context/';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
    const filepath = path.join(dir, file);
    let content = fs.readFileSync(filepath, 'utf8');

    // Extract title
    let title = '';
    const titleMatch = content.match(/Mathematics Revision Context:\s*(.*)/i) || 
                      content.match(/Physics Revision Context:\s*(.*)/i) ||
                      content.match(/Chemistry Revision Context:\s*(.*)/i);
    if (titleMatch) {
        title = titleMatch[1].trim();
    } else {
        title = file.replace('.md', '').replace(/_/g, ' ');
    }

    let lines = content.split('\n');
    let startIdx = 0;
    
    // Find the first line that is "1. Something" to denote start of content
    for (let i = 0; i < lines.length; i++) {
        if (/^1\.\s+[A-Za-z]/.test(lines[i])) {
            startIdx = i;
            break;
        }
    }
    
    lines = lines.slice(startIdx);
    
    let processedLines = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trimEnd();
        
        // Remove underscore lines
        if (/^_+$/.test(line)) {
            continue;
        }

        // Subsections: 1.1, 1.2, 12.3
        const subSecMatch = line.match(/^(\d+\.\d+)\s+(.*)/);
        if (subSecMatch) {
            processedLines.push(`### ${subSecMatch[1]} ${subSecMatch[2]}`);
            continue;
        }

        // Top-level sections: 1., 2., 3.
        const secMatch = line.match(/^(\d+)\.\s+(.*)/);
        if (secMatch) {
            const text = secMatch[2];
            // It's a heading if it doesn't contain a period or colon.
            // (List items usually form sentences with periods, or start with "Name: ")
            if (!text.includes('.') && !text.includes(':')) {
                processedLines.push(`## ${secMatch[1]}. ${text}`);
                continue;
            }
        }
        
        // Ensure bullet points (* or -) are properly spaced
        const bulletMatch = line.match(/^(\s*)[\*\-]\s*(.*)/);
        if (bulletMatch) {
            processedLines.push(`${bulletMatch[1]}- ${bulletMatch[2]}`);
            continue;
        }
        
        processedLines.push(line);
    }
    
    content = processedLines.join('\n');

    // Collapse excessive newlines (\n{3,}) into \n\n
    content = content.replace(/\n\s+\n/g, '\n\n');
    content = content.replace(/\n{3,}/g, '\n\n');

    // Prepend title frontmatter or H1
    content = `---
title: "${title}"
---

# ${title}

${content.trim()}
`;

    fs.writeFileSync(filepath, content, 'utf8');
}
