const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/data/context');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

for (const file of files) {
    const filepath = path.join(dir, file);
    let content = fs.readFileSync(filepath, 'utf8');

    // 1. Remove leftover artifacts: Source:, Description:, [IMAGE]
    let lines = content.split('\n');
    lines = lines.filter(line => {
        const trimmed = line.trim();
        // Remove lines starting with Source or Description (with or without dashes/asterisks)
        if (/^-?\s*\*?Source:/i.test(trimmed)) return false;
        if (/^-?\s*\*?Description:/i.test(trimmed)) return false;
        if (trimmed.includes('[IMAGE]')) return false;
        // Also remove weird isolated "- --" or titles that look like artifacts
        if (trimmed === '- --') return false;
        return true;
    });
    
    // Remove duplicate title artifacts like `title: "..."` if they appear outside frontmatter
    // We already removed `- --`, so `title: "..."` might be left alone. Let's filter that if it's isolated.
    lines = lines.filter((line, idx) => {
        if (line.trim().startsWith('title: "') && idx > 5) return false;
        return true;
    });

    content = lines.join('\n');

    // 2. Fix broken LaTeX inline math spacing (e.g., `$ x $` -> `$x$`)
    // Match inline math ensuring we don't match $$ display math
    // Negative lookbehinds/lookaheads to ensure it's exactly one $
    content = content.replace(/(?<!\$)\$(?!\$)(.*?)(?<!\$)\$(?!\$)/g, (match, inner) => {
        // Only trim if it doesn't contain newlines (inline math shouldn't)
        if (inner.includes('\n')) return match;
        return '$' + inner.trim() + '$';
    });

    // 3. Clean up numbered lists and bullet points
    // Ensure bullet points use `-` instead of `*` for consistency, if they are at the start of a line
    content = content.replace(/^(\s*)\*\s+/gm, '$1- ');
    
    // Ensure consistent spacing after numbered lists
    // Sometimes there are double spaces: `1.  Item` -> `1. Item`
    content = content.replace(/^(\s*\d+\.)\s+/gm, '$1 ');

    // 4. Standardize bolding and italics
    // Fix unescaped asterisks or spaces inside bolding: `** text **` -> `**text**`
    content = content.replace(/\*\*\s+([^\*]+?)\s+\*\*/g, '**$1**');
    
    // Remove bolding that accidentally captures list markers, e.g. `**- Item**`
    // Actually just fixing `**` that wraps a whole line incorrectly could be complex. Let's just fix spaces.

    // 5. Remove excessive line breaks that might have been created by removing lines
    content = content.replace(/\n{3,}/g, '\n\n');

    fs.writeFileSync(filepath, content, 'utf8');
}
console.log(`Cleaned ${files.length} concept files.`);
