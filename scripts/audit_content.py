#!/usr/bin/env python3
"""Audit the Nomad content database and write the tracked record.

Outputs (both committed, regenerate after any data change):
  CONTENT_STATUS.md           — human-readable tracked record
  sources/content-audit.json  — machine-readable, incl. full unresolved id lists

Covers:
  * public/pyq-database.json — totals, solved vs unresolved (per subject and
    per chapter), structural integrity (4 options, valid answer index, unique
    ids, no ingest-header residue, no null chapter/topic), year coverage.
  * public/all-concepts.json — chapter-file coverage vs src/data/context and
    the vault, empty concepts, subject grouping.
  * public/formula-sheets.json — chapters still missing a sheet.
  * src/data/questions.ts — bundled MICRO/TARGET banks.
  * sources/solutions/ — solver-batch pipeline state.

  python3 scripts/audit_content.py
"""
import json
import os
import re
import sys
from collections import Counter, defaultdict
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PYQ = os.path.join(ROOT, 'public', 'pyq-database.json')
CONCEPTS = os.path.join(ROOT, 'public', 'all-concepts.json')
SHEETS = os.path.join(ROOT, 'public', 'formula-sheets.json')
CTX_DIR = os.path.join(ROOT, 'src', 'data', 'context')
QUESTIONS_TS = os.path.join(ROOT, 'src', 'data', 'questions.ts')
SOL_DIR = os.path.join(ROOT, 'sources', 'solutions')
VAULT_CTX = os.path.expanduser('~/vaults/context')

MD_OUT = os.path.join(ROOT, 'CONTENT_STATUS.md')
JSON_OUT = os.path.join(ROOT, 'sources', 'content-audit.json')

NULLISH = {'', 'null', 'none', 'undefined', 'n-a', 'n/a', 'na'}
GARBAGE_LINE = re.compile(r'^\S{8,}$')


def ready(sol):
    s = (sol or '').strip()
    return len(s) >= 40 and not s.startswith('[!success')


def is_garbage(line):
    s = line.strip()
    return bool(GARBAGE_LINE.match(s)) and '&' in s and bool(re.search(r'[a-z][A-Z]', s))


def audit_questions():
    db = json.load(open(PYQ))
    total = len(db)
    empty = short = solved = 0
    by_subject = defaultdict(lambda: {'total': 0, 'solved': 0, 'unresolved': 0})
    by_chapter = defaultdict(lambda: {'total': 0, 'solved': 0, 'unresolved': 0})
    unresolved_ids = []
    years = Counter()
    integrity = {
        'unique_ids': len(set(q['id'] for q in db)) == total,
        'options_not_4': 0,
        'answer_index_out_of_range': 0,
        'empty_question_text': 0,
        'ingest_header_residue': 0,
        'nullish_chapter_or_topic': 0,
        'css_style_residue': 0,
        'garbage_line_suspects': [],
    }
    truncated = 0
    texts = Counter()

    for q in db:
        subj = q.get('subject') or '?'
        chap = q.get('chapter') or 'general'
        by_subject[subj]['total'] += 1
        by_chapter[chap]['total'] += 1
        years[str(q.get('year'))] += 1

        s = (q.get('solution') or '').strip()
        if ready(s):
            solved += 1
            by_subject[subj]['solved'] += 1
            by_chapter[chap]['solved'] += 1
            if s.endswith('...'):
                truncated += 1
        else:
            if not s:
                empty += 1
            else:
                short += 1
            by_subject[subj]['unresolved'] += 1
            by_chapter[chap]['unresolved'] += 1
            unresolved_ids.append(q['id'])

        if not isinstance(q.get('options'), list) or len(q['options']) != 4:
            integrity['options_not_4'] += 1
        if not isinstance(q.get('correct'), int) or not (0 <= q['correct'] <= 3):
            integrity['answer_index_out_of_range'] += 1
        if not (q.get('question') or '').strip():
            integrity['empty_question_text'] += 1
        if (q.get('question') or '').startswith('Problem '):
            integrity['ingest_header_residue'] += 1
        for key in ('chapter', 'topic'):
            v = q.get(key)
            if v is None or (isinstance(v, str) and v.strip().lower() in NULLISH):
                integrity['nullish_chapter_or_topic'] += 1
        for line in (q.get('question') or '').split('\n'):
            if is_garbage(line):
                integrity['garbage_line_suspects'].append(q['id'])
                break
        blob = ((q.get('question') or '') + ' ' +
                ' '.join(o or '' for o in (q.get('options') or [])) + ' ' +
                (q.get('solution') or ''))
        if re.search(r'border-collapse|<style\b|font-family:|border-style:', blob, re.I):
            integrity['css_style_residue'] += 1

        k = re.sub(r'[^a-z0-9]', '', (q.get('question') or '').lower())[:120]
        if k:
            texts[k] += 1

    repeated = sum(v - 1 for v in texts.values() if v > 1)
    chapters = [
        {'chapter': c, **v}
        for c, v in by_chapter.items()
    ]
    chapters.sort(key=lambda x: (-x['unresolved'], -x['total'], x['chapter']))
    subjects = {k: v for k, v in sorted(by_subject.items())}
    return {
        'total': total,
        'solved': solved,
        'unresolved': {'empty': empty, 'short': short, 'total': empty + short},
        'by_subject': subjects,
        'by_chapter': chapters,
        'unresolved_ids': unresolved_ids,
        'integrity': {k: v for k, v in integrity.items() if k != 'garbage_line_suspects'},
        'garbage_line_suspect_ids': integrity['garbage_line_suspects'],
        'repeated_question_texts': repeated,
        'truncated_solutions': truncated,
        'years': dict(sorted(years.items())),
    }


def audit_concepts():
    files = sorted(f for f in os.listdir(CTX_DIR) if f.endswith('.md'))
    concepts = json.load(open(CONCEPTS))
    by_file = defaultdict(lambda: {'full': 0, 'atomic': 0})
    empty = 0
    for c in concepts:
        base = c['id'].replace('-full', '')
        base = re.sub(r'-\d+$', '', base)
        key = 'full' if c.get('isFullChapter') else 'atomic'
        by_file[base][key] += 1
        if not (c.get('content') or '').strip():
            empty += 1

    def slug(fname):
        return re.sub(r'[^a-z0-9]+', '-', fname.replace('.md', '').lower()).strip('-')

    file_slugs = {slug(f): f for f in files}
    missing = [file_slugs[s] for s in file_slugs if s not in by_file]
    orphan_groups = [g for g in by_file if g not in file_slugs]

    vault_missing = []
    vault_extra = []
    if os.path.isdir(VAULT_CTX):
        vault_md = {f for f in os.listdir(VAULT_CTX) if f.endswith('.md')}
        repo_md = set(files)
        vault_missing = sorted(vault_md - repo_md)
        vault_extra = sorted(repo_md - vault_md)

    sections = Counter(c.get('section') for c in concepts)
    return {
        'chapter_files': len(files),
        'concepts_total': len(concepts),
        'full_chapter': sum(1 for c in concepts if c.get('isFullChapter')),
        'atomic': sum(1 for c in concepts if not c.get('isFullChapter')),
        'empty_content': empty,
        'sections': dict(sections),
        'files_without_full_concept': missing,
        'orphan_concept_groups': orphan_groups,
        'vault_files_not_in_repo': vault_missing,
        'repo_files_not_in_vault': vault_extra,
        'files': {file_slugs[s]: by_file[s] for s in sorted(file_slugs) if s in by_file},
    }


def audit_sheets(concepts):
    sheets = json.load(open(SHEETS))
    ids = {s.get('id') for s in sheets}
    full_ids = [c['id'] for c in concepts if c.get('isFullChapter')]
    missing = sorted(set(full_ids) - ids)
    return {'sheets': len(sheets), 'chapters': len(full_ids), 'missing_chapter_ids': missing}


def audit_bundled():
    src = open(QUESTIONS_TS).read()
    banks = {}
    parts = re.split(r'export const (\w+) = \[', src)[1:]
    for i in range(0, len(parts), 2):
        name, body = parts[i], parts[i + 1]
        count = len(re.findall(r'"id":', body))
        empty = len(re.findall(r'"solution": ""', body))
        banks[name] = {'questions': count, 'empty_solutions': empty}
    total = sum(v['questions'] for v in banks.values())
    css = len(re.findall(r'border-collapse|<style\b|font-family:|border-style:', src, re.I))
    return {'banks': banks, 'total': total, 'css_residue': css}


def audit_solver(unresolved_total):
    out = {'index_total_missing': None, 'batches': 0, 'out_batches': 0, 'out_answers': 0, 'stale': None}
    idx_path = os.path.join(SOL_DIR, 'index.json')
    if os.path.exists(idx_path):
        idx = json.load(open(idx_path))
        out['index_total_missing'] = idx.get('total_missing')
        out['batches'] = len(idx.get('batches', []))
        out['stale'] = idx.get('total_missing') != unresolved_total
    if os.path.isdir(SOL_DIR):
        out['out_batches'] = len([f for f in os.listdir(os.path.join(SOL_DIR, 'out'))
                                  if f.endswith('.json')]) if os.path.isdir(os.path.join(SOL_DIR, 'out')) else 0
        for f in sorted(os.listdir(os.path.join(SOL_DIR, 'out'))) if os.path.isdir(os.path.join(SOL_DIR, 'out')) else []:
            payload = json.load(open(os.path.join(SOL_DIR, 'out', f)))
            answers = payload.get('answers') if isinstance(payload, dict) else payload
            out['out_answers'] += len(answers or [])
    return out


def write_md(q, c, sheets, bundled, solver, vault_questions):
    lines = []
    a = lines.append
    a('# Content status — tracked record')
    a('')
    a(f'Generated {date.today().isoformat()} by `python3 scripts/audit_content.py`.')
    a('Regenerate after any change to `public/pyq-database.json`,')
    a('`public/all-concepts.json`, `src/data/context/` or the formula sheets.')
    a('')

    a('## Questions — `public/pyq-database.json`')
    a('')
    a(f'- **{q["total"]}** questions · **{q["solved"]}** solved · '
      f'**{q["unresolved"]["total"]}** unresolved '
      f'({q["unresolved"]["empty"]} empty, {q["unresolved"]["short"]} too short)')
    a(f'- Solved but truncated at ingest (text ends mid-sentence): {q["truncated_solutions"]}')
    a(f'- Repeated question texts kept (different years): {q["repeated_question_texts"]}')
    a('')
    a('| subject | total | solved | unresolved |')
    a('|---|---:|---:|---:|')
    for s, v in q['by_subject'].items():
        a(f'| {s} | {v["total"]} | {v["solved"]} | {v["unresolved"]} |')
    a('')
    integ = q['integrity']
    bad = (not integ['unique_ids'] or integ['options_not_4'] or
           integ['answer_index_out_of_range'] or integ['empty_question_text'] or
           integ['ingest_header_residue'] or integ['nullish_chapter_or_topic'] or
           integ['css_style_residue'] or
           q['garbage_line_suspect_ids'])
    a(f'**Integrity: {"FAIL" if bad else "PASS"}** — unique ids: {integ["unique_ids"]}, '
      f'options≠4: {integ["options_not_4"]}, answer index out of range: {integ["answer_index_out_of_range"]}, '
      f'empty question text: {integ["empty_question_text"]}, ingest-header residue: {integ["ingest_header_residue"]}, '
      f'null chapter/topic: {integ["nullish_chapter_or_topic"]}, css/style residue: {integ["css_style_residue"]}, '
      f'garbage-line suspects: {len(q["garbage_line_suspect_ids"])}')
    if q['garbage_line_suspect_ids']:
        for qid in q['garbage_line_suspect_ids']:
            a(f'  - suspect: `{qid}`')
    a('')

    a('### Unresolved solutions by chapter')
    a('')
    a('This is the tracked list of what does **not** have a verified solution yet.')
    a('IDs of every unresolved question are in `sources/content-audit.json` → `questions.unresolved_ids`.')
    a('')
    unresolved_chapters = [x for x in q['by_chapter'] if x['unresolved']]
    a(f'{len(unresolved_chapters)} of {len(q["by_chapter"])} chapters still have unresolved questions:')
    a('')
    a('| chapter | total | solved | unresolved |')
    a('|---|---:|---:|---:|')
    for x in unresolved_chapters:
        a(f'| {x["chapter"]} | {x["total"]} | {x["solved"]} | {x["unresolved"]} |')
    a('')

    a('### Year coverage')
    a('')
    a(', '.join(f'{y}: {n}' for y, n in sorted(q['years'].items(), key=lambda kv: (-kv[1], kv[0]))))
    a('')

    a('## Concepts — `public/all-concepts.json`')
    a('')
    a(f'- chapter files: **{c["chapter_files"]}** · concepts: **{c["concepts_total"]}** '
      f'({c["full_chapter"]} full-chapter + {c["atomic"]} atomic) · empty content: {c["empty_content"]}')
    a(f'- subject groups: ' + ', '.join(f'{k}: {v}' for k, v in sorted(c['sections'].items())))
    a(f'- files without a full-chapter concept: {c["files_without_full_concept"] or "none"}')
    a(f'- concept groups without a source file: {c["orphan_concept_groups"] or "none"}')
    a(f'- vault files not in the repo: {c["vault_files_not_in_repo"] or "none"}')
    a(f'- repo files not in the vault: {c["repo_files_not_in_vault"] or "none"}')
    a('')

    a('## Formula sheets — `public/formula-sheets.json`')
    a('')
    a(f'- **{sheets["sheets"]}** sheets for **{sheets["chapters"]}** chapters')
    if sheets['missing_chapter_ids']:
        for mid in sheets['missing_chapter_ids']:
            a(f'- missing sheet: `{mid}`')
    else:
        a('- missing sheets: none')
    a('')

    a('## Bundled banks — `src/data/questions.ts`')
    a('')
    for name, v in bundled['banks'].items():
        a(f'- {name}: {v["questions"]} questions, {v["empty_solutions"]} without solution')
    a(f'- css/style residue: {bundled["css_residue"]}')
    a('')

    a('## Solver pipeline — `sources/solutions/`')
    a('')
    a(f'- index.json total_missing: {solver["index_total_missing"]} '
      f'({"STALE — regenerate" if solver["stale"] else "in sync"})')
    a(f'- batches exported: {solver["batches"]} · merged outputs in `out/`: '
      f'{solver["out_batches"]} ({solver["out_answers"]} answers)')
    a('- workflow: `python3 scripts/export_missing_solutions.py` → solve batches → '
      '`python3 scripts/merge_solutions.py sources/solutions/out/batch-NNN.json` '
      '→ regenerate this record.')
    a('')

    a('## Not yet ingested')
    a('')
    a(f'- `vault/context/questions/`: **{vault_questions}** question markdown files — '
      'parser work frozen; these are NOT in `pyq-database.json` yet.')
    a('')

    with open(MD_OUT, 'w') as f:
        f.write('\n'.join(lines))


def main():
    q = audit_questions()
    c = audit_concepts()
    sheets = audit_sheets(json.load(open(CONCEPTS)))
    bundled = audit_bundled()
    solver = audit_solver(q['unresolved']['total'])
    vault_questions = 0
    vq = os.path.join(VAULT_CTX, 'questions')
    if os.path.isdir(vq):
        vault_questions = len([f for f in os.listdir(vq) if f.endswith('.md')])

    write_md(q, c, sheets, bundled, solver, vault_questions)

    payload = {
        'generated': date.today().isoformat(),
        'questions': q,
        'concepts': c,
        'formula_sheets': sheets,
        'bundled_banks': bundled,
        'solver_pipeline': solver,
        'not_ingested': {'vault_questions_md': vault_questions},
    }
    with open(JSON_OUT, 'w') as f:
        json.dump(payload, f, indent=1, ensure_ascii=False)

    print(f'wrote {MD_OUT}')
    print(f'wrote {JSON_OUT}')
    print(f'questions {q["total"]} solved {q["solved"]} unresolved {q["unresolved"]["total"]} · '
          f'concepts {c["concepts_total"]} · sheets {sheets["sheets"]}/{sheets["chapters"]}')
    bad = (not q['integrity']['unique_ids'] or q['integrity']['options_not_4'] or
           q['integrity']['answer_index_out_of_range'] or q['integrity']['empty_question_text'] or
           q['integrity']['ingest_header_residue'] or q['integrity']['nullish_chapter_or_topic'] or
           q['integrity']['css_style_residue'] or
           q['garbage_line_suspect_ids'] or bundled['css_residue'] or
           c['files_without_full_concept'] or
           c['orphan_concept_groups'] or c['empty_content'])
    if bad:
        print('INTEGRITY FAIL')
        sys.exit(1)
    print('integrity PASS')


if __name__ == '__main__':
    main()
