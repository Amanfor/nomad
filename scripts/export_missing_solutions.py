#!/usr/bin/env python3
"""Split PYQs that lack a real solution into solver batches.

Each batch carries the question, its options/answer key, and the formulas from
the matching formula sheet (via sources/chapter-to-formula-sheet.json) so the
solver can lead with the right equation.

  python3 scripts/export_missing_solutions.py            # 60 per batch
  python3 scripts/export_missing_solutions.py --per 30   # smaller batches

Writes sources/solutions/batch-NNN.json and sources/solutions/index.json.
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PYQ = os.path.join(ROOT, 'public', 'pyq-database.json')
SHEETS = os.path.join(ROOT, 'public', 'formula-sheets.json')
ALIAS = os.path.join(ROOT, 'sources', 'chapter-to-formula-sheet.json')
OUT_DIR = os.path.join(ROOT, 'sources', 'solutions')


def norm(s: str) -> str:
    return re.sub(r'[^a-z0-9]', '', (s or '').lower())


def ready(sol) -> bool:
    s = (sol or '').strip()
    return len(s) >= 40 and not s.startswith('[!success')


def related(chapter: str, title: str) -> bool:
    """Reject forced alias matches: a sheet only counts if it shares real
    vocabulary with the chapter (or the chapter names its subject)."""
    if not chapter or not title:
        return False
    stop = {'and', 'the', 'of', 'in', 'on', 'a', 'an'}
    ck = {re.sub(r'[^a-z0-9]', '', w) for w in chapter.lower().split() if w not in stop}
    tk = {re.sub(r'[^a-z0-9]', '', w) for w in title.lower().split() if w not in stop}
    ck = {w for w in ck if len(w) > 3}
    tk = {w for w in tk if len(w) > 3}
    return bool(ck & tk)


def main():
    per = 60
    if '--per' in sys.argv:
        per = int(sys.argv[sys.argv.index('--per') + 1])

    qs = json.load(open(PYQ))
    sheets = json.load(open(SHEETS))
    alias = json.load(open(ALIAS))

    by_title = {s['title']: s for s in sheets}
    missing = [q for q in qs if not ready(q.get('solution'))]
    # Newest first: recent papers matter most for the user's 2027 attempt.
    missing.sort(key=lambda q: str(q.get('year') or ''), reverse=True)

    os.makedirs(OUT_DIR, exist_ok=True)
    batches = []
    for i in range(0, len(missing), per):
        chunk = missing[i:i + per]
        items = []
        for q in chunk:
            sheet_title = alias.get(norm(q.get('chapter') or ''))
            if sheet_title and not related(q.get('chapter') or '', sheet_title):
                sheet_title = None
            sheet = by_title.get(sheet_title) if sheet_title else None
            formulas = []
            if sheet:
                formulas = (sheet.get('mostImportant') or [])[:5] + (sheet.get('important') or [])[:3]
            items.append({
                'id': q.get('id'),
                'hash': q.get('hash'),
                'question': q.get('question'),
                'options': q.get('options'),
                'correct': q.get('correct'),
                'chapter': q.get('chapter'),
                'topic': q.get('topic'),
                'year': q.get('year'),
                'subject': q.get('subject'),
                'formula_sheet': sheet_title,
                'formulas': formulas,
            })
        name = f'batch-{len(batches):03d}.json'
        json.dump({'batch': len(batches), 'items': items},
                  open(os.path.join(OUT_DIR, name), 'w'), indent=1, ensure_ascii=False)
        batches.append({'file': name, 'count': len(items)})

    json.dump({'total_missing': len(missing), 'per': per, 'batches': batches},
              open(os.path.join(OUT_DIR, 'index.json'), 'w'), indent=1)
    print(f'{len(missing)} missing solutions -> {len(batches)} batches of ~{per} in {OUT_DIR}')


if __name__ == '__main__':
    main()
