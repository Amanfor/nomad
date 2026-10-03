#!/usr/bin/env python3
"""Extract the Ray Optics question-solution note entries and repurpose
them as structured TARGET/PYQ entries, then remove the note from the
concept database / formula-sheet listing."""
import json, re, unicodedata

PREFIX = '43-ray-optics-questions-solutions-and-pyqs'

def norm_year_shift(token: str):
    # e.g. "[AIEEE 2009]" / "[JEE Main 2013]" / "[IIT-JEE 2008]" / "[JEE Advanced 2018]"
    token = token.strip().strip('[]')
    m = re.search(r'(\d{4})', token)
    year = m.group(1) if m else 'UNKNOWN'
    high = token.lower()
    if 'aieee' in high:
        shift = 'AIEEE'
    elif 'advanced' in high or 'iit' in high:
        shift = 'JEE-ADVANCED'
    elif 'main' in high:
        shift = 'JEE-MAIN'
    else:
        shift = 'GEN'
    return year, shift

def parse_options_and_marker(txt: str):
    """Return (options[4], correct_idx, question_body, correct_marker_str) or None."""
    m = re.search(r'\*\*Question:\*\*\s*\n(.*?)\n\*\*Solution:\*\*', txt, re.S)
    if not m: return None
    qpart = m.group(1).strip()
    sol_start = m.end()
    # find correct option marker
    cm = re.search(r'\*\*Correct Option:\s*\(?([0-9A-Da-d])\)?\*\*', txt[sol_start:])
    if not cm: return None
    marker = cm.group(1)
    sol = txt[sol_start:sol_start + cm.start()].rstrip()
    sol = re.sub(r'\n{3,}', '\n\n', sol, flags=0).strip()
    # split options out of qpart
    pieces = re.split(r'\n\s*\(([0-9A-Da-d])\)\s*', qpart)
    question_body = pieces[0].strip()
    options_map = {}
    for i in range(1, len(pieces), 2):
        key = pieces[i].strip().upper()
        options_map[key] = pieces[i+1].strip()
    def map_key(k): 
        if k in ('A', 'B', 'C', 'D'): return {'A':0,'B':1,'C':2,'D':3}[k]
        return int(k) - 1
    # build ordered options
    ordered = []
    for key in sorted(options_map.keys(), key=lambda x: map_key(x)):
        ordered.append(options_map[key])
    if len(ordered) != 4: return None
    correct_idx = map_key(marker.upper()) if marker.upper() in ('A','B','C','D') else int(marker) - 1
    # normalize: if the marker was a digit and options match that count, ok
    if not (0 <= correct_idx < 4): return None
    return question_body, ordered, correct_idx, sol

def main():
    # 1) parse note entries
    allc = json.load(open('public/all-concepts.json'))
    note_entries = [c for c in allc if c['id'].startswith(PREFIX)]
    extracted = []
    for c in note_entries:
        blocks = re.split(r'###\s*', c['content'])
        for b in blocks[1:]:
            header = b.split('\n',1)[0].strip()
            if not header.startswith('PYQ '): continue
            m = re.match(r'PYQ\s+([\d.]+):\s*(.+?)\s*\[([^\]]+)\]\s*$', header)
            if not m: continue
            year, shift = norm_year_shift(m.group(3))
            parsed = parse_options_and_marker(b)
            if not parsed: continue
            question_body, opts, correct_idx, sol = parsed
            entry = {
                "question": question_body,
                "options": opts,
                "correct": correct_idx,
                "solution": sol,
                "chapter": "Ray Optics",
                "topic": "Ray Optics",
                "year": year,
                "subject": "Physics",
                "source": f"vault/{PREFIX}",
                "hash": str(abs(hash(question_body))),
                "id": f"JEE-{year}-{shift}-PHY-{m.group(1).replace('.','')}"
            }
            extracted.append(entry)
    #11) dedupe by question text
    seen = set(); uniq = []
    for e in extracted:
        key = e['question'].replace('\n',' ')[:120]
        if key in seen: continue
        seen.add(key); uniq.append(e)
    # 3) append to public/pyq-database.json
    db = json.load(open('public/pyq-database.json'))
    existing_keys = {norm_year_shift(x.get('source','')) if False else '' for x in db}
    # simple dedupe on question prefix
    db_keys = {x['question'].replace('\n',' ')[:120] for x in db}
    added = 0
    for e in uniq:
        if e['question'].replace('\n',' ')[:120] in db_keys: continue
        db.append(e); added += 1
    json.dump(db, open('public/pyq-database.json','w'), ensure_ascii=False)
    # 4) delete note entries from concepts db
    json.dump([c for c in allc if not c['id'].startswith(PREFIX)], open('public/all-concepts.json','w'), ensure_ascii=False)
    # 5) remove formula sheet for the note
    try:
        sheets = json.load(open('public/formula-sheets.json'))
        sheets2 = [s for s in sheets if not s.get('id','').startswith(PREFIX)]
        json.dump(sheets2, open('public/formula-sheets.json','w'), ensure_ascii=False)
    except Exception as e:
        print('formula sheets filter error:', e)
    print(f"extracted={len(extracted)}  uniq={len(uniq)}  added_to_pyq_db={added}")

main()
