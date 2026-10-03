#!/usr/bin/env python3
"""Build public/pyq-database.json from the offline markdown bank.

ID scheme: JEE-<YEAR>-<SLOT>-<SUBJ><seq> so every ID encodes year + shift.
Deduped by content hash and by normalized question text. Per-topic cap.
"""
import os, re, json, hashlib

BANK = "/home/aman/jee-workspace/vault/sources/scraped/bank"
OUT = "/home/aman/nomad/public/pyq-database.json"
MAX_PER_TOPIC = 150
MIN_TEXT = 12

TEXT_NORMAL = re.compile(r"[^a-z0-9]+")
SLOT_ONLINE = re.compile(r"jee-main-(\d{4})-online-(\d+)(?:st|nd|rd|th)[- ]([a-z]+)-(morning|evening)-slot", re.I)
SLOT_ONLINE2 = re.compile(r"jee[- ]?main-(\d{4})-online", re.I)
OFF  = re.compile(r"jee[- ]?main-(\d{4})-offline", re.I)
AIEE = re.compile(r"aieee[- ]?(\d{4})", re.I)
MON = {"jan":"JAN","january":"JAN","feb":"FEB","february":"FEB","mar":"MAR","march":"MAR",
       "apr":"APR","april":"APR","may":"MAY","june":"JUN","jun":"JUN","jul":"JUL","july":"JUL",
       "aug":"AUG","august":"AUG","sep":"SEP","sept":"SEP","oct":"OCT","october":"OCT",
       "nov":"NOV","november":"NOV","dec":"DEC","december":"DEC"}

def norm_text(s: str) -> str:
    return TEXT_NORMAL.sub("", s.lower())

def parse_id_meta(source: str, year_field: str):
    src = source or ""
    y = (year_field or "").strip("'\" ")
    m = SLOT_ONLINE.search(src)
    if m:
        yy, d, mon, slot = m.group(1), m.group(2), m.group(3).lower(), m.group(4).lower()
        if y and y != yy: y = yy
        return y, f"ONLINE-{MON.get(mon, mon.upper())}{int(d):02d}-{slot.upper()}"
    m = OFF.search(src)
    if m:
        yy = m.group(1)
        return yy if not (y and y != yy) else yy, "OFFLINE"
    m = AIEE.search(src)
    if m:
        yy = m.group(1)
        return yy if not (y and y != yy) else yy, "AIEEE"
    m = SLOT_ONLINE2.search(src)
    if m:
        yy = m.group(1)
        return yy if not (y and y != yy) else yy, "ONLINE"
    if not y: y = "UNKNOWN"
    return y, "GENERAL"

def parse_question(path: str):
    txt = open(path, encoding="utf-8", errors="replace").read()
    if "## Question" not in txt or "## Options" not in txt or "## Answer" not in txt:
        return None
    fm = {}
    if txt.startswith("---"):
        end = txt.find("\n---", 3)
        if end != -1:
            for line in txt[3:end].splitlines():
                if ":" in line:
                    k, v = line.split(":", 1)
                    fm[k.strip()] = v.strip().strip("'\"")
    q_start = txt.find("## Question")
    o_start = txt.find("## Options", q_start)
    a_start = txt.find("## Answer", o_start)
    if q_start < 0 or o_start < 0 or a_start < 0:
        return None
    question = txt[q_start+len("## Question"):o_start].strip()
    options_raw = txt[o_start+len("## Options"):a_start]
    answer_raw = txt[a_start+len("## Answer"):]
    # options: split on (a) ... (b) ...
    parts = re.split(r"\(\s*[a-dA-D]\s*\)", options_raw)
    labels = re.findall(r"\(\s*([a-dA-D])\s*\)", options_raw)
    options = [p.strip().replace("\n", " ") for p in parts[1:1+len(labels)]]
    if len(options) != 4 or len(labels) != 4:
        return None
    # answer letter
    m = re.search(r"\*\*\(??([a-dA-D])\)?\*\*|\>\s*\(?([a-dA-D])\)?", answer_raw)
    if not m:
        return None
    letter = (m.group(1) or m.group(2)).lower()
    correct = {"a":0,"b":1,"c":2,"d":3}[letter]
    # solution: strip '>' markers and remove the answer letter line
    sol_lines = []
    for line in answer_raw.splitlines():
        stripped = re.sub(r"^\s*>\s?", "", line)
        if stripped.lstrip().startswith("[!success") or re.fullmatch(r"\s*\**\(??[a-dA-D]\)?\**\s*", stripped):
            continue
        sol_lines.append(stripped)
    solution = "\n".join(l.rstrip() for l in sol_lines).strip()
    if not question or len(question) < MIN_TEXT or not solution:
        return None
    return {
        "question": question,
        "options": options,
        "correct": correct,
        "solution": solution,
        "chapter": fm.get("topic", ""),
        "topic": fm.get("topic", ""),
        "year": fm.get("year", ""),
        "subject": fm.get("subject", ""),
        "source": fm.get("source", ""),
        "hash": fm.get("hash", ""),
    }

def main():
    seen_hash, seen_text = set(), set()
    by_topic = {}
    total = 0
    for root, dirs, files in os.walk(BANK):
        if "images" in root: continue
        for fn in files:
            if not fn.endswith(".md"): continue
            total += 1
            p = parse_question(os.path.join(root, fn))
            if not p: continue
            h = p["hash"] or hashlib.md5(p["question"].encode()).hexdigest()
            tkey = norm_text(p["question"])[:160]
            if h in seen_hash or tkey in seen_text: continue
            seen_hash.add(h); seen_text.add(tkey)
            by_topic.setdefault((p["subject"], p["chapter"]), []).append(p)
    out = []
    seq_counter = {}
    for (subj, topic), items in sorted(by_topic.items()):
        items.sort(key=lambda x: (x["year"], x["source"], x["hash"]))
        items = items[:MAX_PER_TOPIC]
        for it in items:
            y, slot = parse_id_meta(it["source"], it["year"])
            key = (it["subject"], y, slot)
            seq_counter[key] = seq_counter.get(key, 0) + 1
            qid = f"JEE-{y}-{slot}-{it['subject'][:3].upper()}-{seq_counter[key]:03d}"
            out.append({**it, "id": qid, "year": y, "shift": slot})
    with open(OUT, "w") as f:
        json.dump(out, f, ensure_ascii=False)
    print(f"scanned={total} valid_kept={len(out)} topics={len(by_topic)} topics_capped={sum(1 for v in by_topic.values() if len(v)>MAX_PER_TOPIC)}")
    from collections import Counter
    c = Counter((x['subject'], x['chapter']) for x in out)
    print("per-topic count distribution:")
    b=Counter()
    for v in c.values():
        if v>=150: b['150+ (capped)']+=1
        elif v>=100: b['100-149']+=1
        elif v>=50: b['50-99']+=1
        elif v>=20: b['20-49']+=1
        else: b['<20']+=1
    print(dict(b))

if __name__ == "__main__":
    main()
