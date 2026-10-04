#!/usr/bin/env python3
"""Merge solver output back into public/pyq-database.json.

  python3 scripts/merge_solutions.py sources/solutions/out/batch-000.json

Accepts either a bare list or {"answers": [{"id": …, "solution": …}]}.
Only fills questions whose solution is still missing; never overwrites an
existing solution or changes the answer key. Validates the id exists and the
solution is >= 40 chars.
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PYQ = os.path.join(ROOT, 'public', 'pyq-database.json')


def ready(sol) -> bool:
    s = (sol or '').strip()
    return len(s) >= 40 and not s.startswith('[!success')


def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    payload = json.load(open(sys.argv[1]))
    answers = payload.get('answers') if isinstance(payload, dict) else payload
    if not isinstance(answers, list):
        print('expected a list of answers')
        sys.exit(1)

    qs = json.load(open(PYQ))
    by_id = {q.get('id'): q for q in qs}

    filled = skipped = unknown = 0
    for a in answers:
        q = by_id.get(a.get('id'))
        if not q:
            unknown += 1
            continue
        if ready(q.get('solution')):
            skipped += 1
            continue
        sol = (a.get('solution') or '').strip()
        if not ready(sol):
            skipped += 1
            continue
        q['solution'] = sol
        filled += 1

    if filled:
        json.dump(qs, open(PYQ, 'w'), ensure_ascii=False, indent=1)
    print(f'filled={filled} skipped={skipped} unknown={unknown} total={len(qs)}')


if __name__ == '__main__':
    main()
