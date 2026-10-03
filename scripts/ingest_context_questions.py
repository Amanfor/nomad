#!/usr/bin/env python3
import os, re, json, hashlib

QSRC = "/home/aman/vaults/context/questions"
OUT = "public/pyq-database.json"
MON = {"january":"JAN","february":"FEB","march":"MAR","april":"APR","may":"MAY","june":"JUN","july":"JUL","august":"AUG","september":"SEP","october":"OCT","november":"NOV","december":"DEC"}

def shift_token(src, year_hint):
    src = src or ''
    m = re.search(r'jee-main-(\d{4})-online-(\d+)(?:st|nd|rd|th)-([a-zA-Z]+)-(morning|evening)-(?:slot|shift)', src, re.I)
    if m:
        y,d,mon,slot = m.group(1),m.group(2),m.group(3).lower(),m.group(4).lower()
        return y, f"ONLINE-{MON.get(mon,mon.upper())}-{int(d):02d}-{slot.upper()}"
    m = re.search(r'jee-main-(\d{4})-offline', src, re.I)
    if m: return m.group(1), "OFFLINE"
    m = re.search(r'aieee[-_](\d{4})', src, re.I)
    if m: return m.group(1), "AIEEE"
    if year_hint and year_hint != 'UNKNOWN':
        return year_hint, "GENERAL"
    return "UNKNOWN", "GENERAL"

def subject_of(prefix):  # CHM-/PHY-/MTH-
    tail = prefix.upper()
    if tail.startswith('CHM'): return 'Chemistry'
    if tail.startswith('PHY'): return 'Physics'
    if tail.startswith('MTH'): return 'Maths'
    return None

def parse_block(header_line, source_line, qtext):
    # Try to extract year per header "Problem 1: CHM-...-059 (JEE Main 2024)"
    m = re.search(r"Problem\s+\d+:\s+([A-Z][A-Z0-9]+(?:-[A-Z0-9]+)+-\d+)(?:\s*/\s*[^(]+)?\s*\(([^)]+)\)", header_line)
    if not m: return None
    pid, ytag = m.group(1), m.group(2)
    sub = subject_of(pid.split('-')[0])
    if not sub: return None
    year = re.search(r"\b\d{4}\b", ytag)
    year = year.group(0) if year else 'UNKNOWN'
    src = re.search(r"Source:\s*(.+)$", source_line)
    shift_y, shift = shift_token(src.group(1) if src else '', year)
    year = shift_y if shift_y != 'UNKNOWN' else year
    # options
    om = re.search(r"^Options:\s*(.+)$", qtext, re.M)
    if not om: return None
    opt_line = qtext[om.start():].split('\n',1)[0]
    options_map = {}
    for mm in re.finditer(r"\(([a-d])\)\s*(.+?)(?=\s*\([a-d]\)|$)", opt_line):
        options_map[mm.group(1)] = mm.group(2).strip()
    if len(options_map) != 4: return None
    opts = [options_map[k] for k in ['a','b','c','d']]
    qbody = qtext[:om.start()].strip()
    return {
        "pid": pid, "year": year, "shift": shift, "subject": sub, "source": src.group(1).strip() if src else '',
        "question": qbody, "options": opts,
    }

def parse_solution_and_answer(sol_chunk):
    sm = re.match(r"\s*\[?!?solution\]?-.*?Detailed Solution\s*\(([a-dA-D])\)\s*(.*)$", sol_chunk, re.S|re.I)
    if sm:
        return sm.group(1).lower(), sm.group(2).strip()
    m2 = re.search(r"Answer[:\s]*\(?([a-dA-D])\)?", sol_chunk)
    letter = m2.group(1).lower() if m2 else None
    return letter, sol_chunk.strip()

def main():
    db = json.load(open(OUT))
    def keyof(q, options=None, solution=None):
        s = q
        if options: s += '|' + '|'.join(options)
        if solution is not None: s += '|' + (solution or '')
        return re.sub(r'[^a-z0-9]','', s.lower())[:240]
    existing = {keyof(x['question'], x.get('options'), x.get('solution')) for x in db}
    added = 0
    chapters = {}
    for fname in os.listdir(QSRC):
        if not fname.endswith('.md'): continue
        base = fname[:-3].replace(' ', '_')
        chap = re.sub(r'^\d+_', '', base).replace('_JEE_Main_Questions','').replace('_',' ')
        path = os.path.join(QSRC, fname)
        with open(path, encoding='utf-8', errors='replace') as f:
            text = f.read()
        # split by Problem blocks
        blocks = re.split(r'(?=\nProblem\s+\d+:)', text)
        for b in blocks[1:]:
            lines = b.strip().split('\n', 2)
            if not lines or not lines[0].startswith('Problem'): continue
            header = lines[0]
            source = lines[1] if len(lines) > 1 else ''
            # find Options line & solution marker
            om = re.search(r"^Options:\s*(.+)$", b, re.M)
            sm = re.search(r"^\[?!?solution\]?-\s*(.*)$", b, re.M | re.S)
            if not om or not sm: continue
            # qbody is from 'source' line end until Options:
            src_end = b.find(source) + len(source)
            qbody = b[src_end:om.start()].strip()
            meta = parse_block(header, source, b[:sm.start()])
            if meta is None: continue
            letter, sol = parse_solution_and_answer(b[sm.start():])
            if not letter or letter not in ('a','b','c','d'): continue
            question_text = meta['question']
            opts = meta['options']
            if keyof(question_text, opts, sol) in existing: continue
            existing.add(keyof(question_text, opts, sol))
            seq = (chapters.get((meta['year'], meta['shift']), 0) + 1)
            chapters[(meta['year'], meta['shift'])] = seq
            uid = f"JEE-{meta['year']}-{meta['shift']}-{meta['subject'][:3].upper()}-{seq:03d}"
            db.append({**meta, 'id': uid, 'question': question_text, 'options': opts, 'correct': {'a':0,'b':1,'c':2,'d':3}[letter], 'solution': sol, 'chapter': chap, 'topic': chap, 'source': meta.get('source',''), 'hash': hashlib.md5(question_text.encode()).hexdigest()})
            added += 1
    json.dump(db, open(OUT,'w'), ensure_ascii=False)
    print('added', added, '-> total', len(db))

main()
