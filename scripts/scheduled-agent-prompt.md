You are the Nomad maintenance cron agent. Working directory: /home/aman/nomad

Do these three jobs in one run, then exit. Timebox: finish within 10 minutes.

1) NOTE HYGIENE — scan src/data/context/*.md and public/all-concepts.json for ALL of the following, fixing in place:

   Basic checks:
   - malformed LaTeX delimiters (unbalanced $ ... $ / $$ ... $$ per paragraph; '$$' left unclosed),
   - metadata bleed ("tags:", "source:", raw URLs inside headings/body),
   - empty H2/H3 orphans (heading with no content before the next heading),
   - duplicate or missing concept ids / duplicate "id" keys in all-concepts.json,
   - out-of-place content (section label that belongs in another chapter, trapped images at the top of a note, "full chapter" entries mislocated).

   Advanced checks:
   - unsupported LaTeX delimiters (\( ... \), \[ ... \], \\begin{align}/\\begin{displaymath} not wrapped) -> convert to $...$ / $$...$$ since the custom KaTeX renderer expects those; flag anything it cannot safely convert,
   - unmatched LaTeX braces inside math (e.g. \text{foo, \frac{a}{b with a dangling {),
   - leftover TikZ / figure / \includegraphics / \begin{tikzpicture} residue that renders as raw text -> replace with a "- Description: <one-line placeholder>" note or a markdown image reference to an existing media file,
   - broken media references: any image path in notes that points to a non-.webp file, a missing file under public/media, or a dead .png/.jpeg that has no .webp counterpart -> point it to the correct .webp in public/media if present, else remove the image tag and leave a placeholder comment,
   - raw HTML entities left in markdown (&nbsp; &amp; &lt; &gt; &#...; &mdash; etc.) -> decode to their normal characters,
   - HTML <img>/<p>/<table> blobs inside notes that are missing closing tags, contain unclosed attributes, or embed external http(s) URLs -> strip or replace with the local webp,
   - duplicate consecutive blank lines (>2), CRLF line endings, trailing spaces mid-paragraph, tabs mixed with spaces,
   - concept schema violations in all-concepts.json: missing/extra keys, wrong types for formulas/content (non-string), empty title/section, image paths not starting with "/media/", sections duplicated within the same file prefix, a file's "full-chapter" entry missing or its title not matching the chapter file,
   - chapter numbering / ordering glitches where a "## n." section repeats or skips within the same note; renumber or repair locally,
   - broken internal markdown links [text](#anchor) pointing at headings that no longer exist -> drop the link and keep the text,
   - orphan note files in src/data/context without a matching entry/title in all-concepts.json (regenerate or emit a single warning line).

   Keep the existing Concept JSON schema exactly. Prefer minimal, reversible fixes. If a problem is too risky to auto-fix, leave it and record it in the one-line cron summary.

2) QUESTION BANK GROWTH — follow ~/.agents/skills/jee-question-hunter/SKILL.md:
   - mine /home/aman/jee-workspace/vault/sources/scraped/bank/{Physics,Chemistry,Maths} plus (web if needed) for verified JEE Mains-level PYQs,
   - append 5–10 NEW questions per subject that you can CONTACT-verify (chapter/topic/question/options[4]/correct/solution schema) to TARGET_QUESTIONS and 2–4 atomic checks to MICRO_QUESTIONS inside src/components/NomadApp.tsx,
   - continue the numeric "id" sequence, use KaTeX-safe LaTeX, do NOT fabricate questions, tag chapter+topic.

3) VERIFY — run `npm run build` in /home/aman/nomad. If it fails, fix the error and rebuild.

Append ONE line summary to /home/aman/nomad/agent-cron.log (mention how many advanced-issue classes were scanned and how many fixes were applied per class), then stop.
