#!/usr/bin/env python3
"""One-shot (idempotent) integrity pass over public/pyq-database.json.

Fixes, in order:
  1. chapter/topic that are JSON null or the strings 'null'/'none'/'undefined'/
     'n-a'/'n/a'  ->  'general' (the fallback loadPyqQuestions applies at
     runtime; this fixes it at the source too).
  2. metadata headers baked into `question` by the problem-list ingest —
     'Problem N: <pid> (...)' + 'Type: MCQ | Source: ...' lines are stripped,
     leaving the real question stem.
  3. records whose cleaned question text duplicates an existing record are
     dropped (the headered copy goes, the clean copy stays).
  4. id collisions: the same id used by two *different* questions. The copy
     that carried a `pid` is re-keyed to that pid (pids are unique); if the
     pid is taken, '-2' is appended until unique.
  5. standalone garbage lines in `question` — a single no-space token with an
     '&' and a camelCase hump, e.g. 'ckWosYV&csysal' (OCR/image residue).
  6. `<style>` blocks and bare `.tg …{…}` CSS rule runs pasted into question,
     options or solution — visible garbage in the unescaped HTML renderer
     (also applied to the bundled src/data/questions.ts).

Every occurrence of the same normalized question text collapses to the copy
with the better solution (identical text = the same question, no matter which
year it was asked in).

Serialization matches the existing file byte-for-byte (indent=1,
ensure_ascii=False, no trailing newline) so untouched records produce no diff.

  python3 scripts/solidify_db.py            # dry run, prints the plan
  python3 scripts/solidify_db.py --write    # apply
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PYQ = os.path.join(ROOT, 'public', 'pyq-database.json')

NULLISH = {'', 'null', 'none', 'undefined', 'n-a', 'n/a', 'na'}
PROBLEM_HDR = re.compile(r'^Problem \d+:[^\n]*\n', re.M)
TYPE_HDR = re.compile(r'^Type: MCQ \| Source:[^\n]*\n*', re.M)
GARBAGE_LINE = re.compile(r'^\S{8,}$')  # single token, no spaces
# Paste residue: <style> blocks and bare runs of `.tg …{…}` CSS rules. The
# renderer feeds question/solution text to dangerouslySetInnerHTML unescaped,
# so these show up as visible garbage (or worse, inject global page CSS).
STYLE_BLOCK = re.compile(r'<style\b[^>]*>.*?</style>', re.S | re.I)
CSS_RUN = re.compile(
    r'(?:[.#]?[A-Za-z][\w-]*[ ,.:#a-zA-Z0-9()>-]*\{[^}]*\}\s*)+'
)
# truncated ingest left an opening `…{css…` with no closing brace at all
CSS_UNTERMINATED = re.compile(r'\s*(?:[.#]?[A-Za-z][\w-]*\s*\{[^}]*)\Z')
CSS_TELLTALE = re.compile(
    r'border-collapse|border-spacing|font-family|font-size|'
    r'border-style|border-color|border-width'
)
BUNDLED = os.path.join(ROOT, 'src', 'data', 'questions.ts')


def strip_css(text):
    """Remove <style> blocks and telltaled bare CSS rule runs. Idempotent."""
    if not text:
        return text, False
    orig = text
    text = STYLE_BLOCK.sub(' ', text)
    while True:
        removed = False
        for m in list(CSS_RUN.finditer(text)):
            if CSS_TELLTALE.search(m.group(0)):
                text = text[:m.start()] + ' ' + text[m.end():]
                removed = True
                break
        if not removed:
            break
    m = CSS_UNTERMINATED.search(text)
    if m and CSS_TELLTALE.search(m.group(0)):
        text = text[:m.start()].rstrip()
    return text, text != orig


def ready(sol):
    s = (sol or '').strip()
    return len(s) >= 40 and not s.startswith('[!success')


def quality(q):
    """Prefer a solution-ready answer, then the longest one."""
    s = (q.get('solution') or '').strip()
    return (1 if ready(s) else 0, len(s))


def norm_text(q):
    return re.sub(r'[^a-z0-9]', '', (q.get('question') or '').lower())[:120]


def is_garbage(line):
    s = line.strip()
    if not GARBAGE_LINE.match(s) or '&' not in s:
        return False
    # camelCase hump somewhere in the token → OCR noise, not a formula.
    return bool(re.search(r'[a-z][A-Z]', s))


def main():
    write = '--write' in sys.argv
    db = json.load(open(PYQ))
    n = len(db)
    report = {
        'null_normalized': 0,
        'headers_stripped': 0,
        'text_duplicates_removed': 0,
        'id_collisions_rekeyed': 0,
        'garbage_lines_stripped': [],
    }

    # 1. null-ish chapter/topic
    for q in db:
        for key in ('chapter', 'topic'):
            v = q.get(key)
            if v is None or (isinstance(v, str) and v.strip().lower() in NULLISH):
                q[key] = 'general'
                report['null_normalized'] += 1

    # 2. strip baked-in metadata headers
    for q in db:
        text = q.get('question') or ''
        if text.startswith('Problem ') or re.search(r'^Type: MCQ \| Source:', text, re.M):
            cleaned = PROBLEM_HDR.sub('', text, count=1)
            cleaned = TYPE_HDR.sub('', cleaned, count=1).lstrip('\n')
            q['question'] = cleaned
            report['headers_stripped'] += 1

    # 3. collapse cleaned-text duplicates (first occurrence position kept,
    #    but the surviving copy is the one with the better solution — a
    #    headered copy sometimes carried the only real explanation).
    groups = {}
    for q in db:
        k = norm_text(q)
        if not k:
            continue
        if k not in groups:
            groups[k] = q
        else:
            report['text_duplicates_removed'] += 1
            if quality(q) > quality(groups[k]):
                groups[k] = q
    kept_ids = set(id(v) for v in groups.values())
    db = [q for q in db if id(q) in kept_ids or not norm_text(q)]

    # 4. id collisions → re-key the record that carries a pid
    used = set()
    for q in db:
        qid = q['id']
        if qid not in used:
            used.add(qid)
            continue
        new_id = q.get('pid')
        if not new_id or new_id in used:
            base = new_id or qid
            k = 2
            while f'{base}-{k}' in used:
                k += 1
            new_id = f'{base}-{k}'
        q['id'] = new_id
        used.add(new_id)
        report['id_collisions_rekeyed'] += 1

    # 5. garbage standalone lines in question text
    for q in db:
        text = q.get('question') or ''
        lines = text.split('\n')
        kept = [ln for ln in lines if not is_garbage(ln)]
        if len(kept) != len(lines):
            q['question'] = '\n'.join(kept).strip()
            report['garbage_lines_stripped'].append(q['id'])

    # duplicate question texts kept (different years)
    counts = {}
    for q in db:
        k = norm_text(q)
        if k:
            counts[k] = counts.get(k, 0) + 1
    report['dup_question_texts_kept'] = sum(v - 1 for v in counts.values() if v > 1)

    # 6. CSS / <style> paste residue in question, options and solution
    report['css_residue_records'] = []
    for q in db:
        touched = False
        for key in ('question', 'solution'):
            new, changed = strip_css(q.get(key))
            if changed:
                q[key] = new
                touched = True
        opts = q.get('options') or []
        for i, opt in enumerate(opts):
            new, changed = strip_css(opt)
            if changed:
                opts[i] = new
                touched = True
        if touched:
            report['css_residue_records'].append(q['id'])

    # 6b. same residue in the bundled banks (raw textual pass — the file is
    #     JSON-ish objects in TS; only telltaled CSS runs are touched, so
    #     indentation and valid syntax survive untouched).
    bundled_changed = False
    if os.path.exists(BUNDLED):
        src = open(BUNDLED).read()
        new, changed = strip_css(src)
        if changed:
            bundled_changed = True
            if write:
                with open(BUNDLED, 'w') as f:
                    f.write(new)
    report['bundled_banks_css_fixed'] = bundled_changed

    print(json.dumps(report, indent=2))
    print(f'{n} -> {len(db)} records; unique ids: {len(set(q["id"] for q in db))}')

    if write:
        with open(PYQ, 'w') as f:
            f.write(json.dumps(db, indent=1, ensure_ascii=False))
        print('written.')
    else:
        print('dry run — pass --write to apply')


if __name__ == '__main__':
    main()
