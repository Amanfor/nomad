#!/usr/bin/env python3
"""Build the linear active-learning path.

    jee ──┬── physics   (top)
          ├── maths     (middle)
          └── chemistry (bottom)
each subject ──▶ chapter blobs ──▶ ONE horizontal line per chapter:
    [note] [qset] [qset] [qset] [note] [qset] ... [chapter-end qsets]

Outputs:
  public/learn.json           structure (labels, positions, circuit routes, totals)
  public/learn/<chapter>.json lazy content: reading-note markdown + full questions

Question sources: sources/pyq-clusters-{subject}.json (semantic clustering by the
subagents) when present; otherwise a deterministic scaffold distribution so no
question is ever left out. Rerun the script when cluster files land — node ids
are position-stable so progress survives.

Completeness invariants (asserted): every reading entry, every topic-graph node,
every pyq/local/vault question is placed exactly once.
"""
import ast
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

# ── layout constants (world units, right = +x) ───────────────────────────────
JEE_X, SPLIT_X, SUBJ_X, BUS_X, CHAP_X, LINE_X0 = 0, 200, 440, 680, 900, 1030
R_ROOT, R_SUBJ, R_CHAP, R_ITEM, R_QSET = 26, 20, 13, 8.5, 6
SLOT_ITEM, SLOT_Q, GAP_Y = 112, 66, 120
SUBJECT_ORDER = ["physics", "maths", "chemistry"]  # top → bottom

# reading chapter → topic slug: reuse the curated map from build_full_graph
_src = open("scripts/build_full_graph.py", encoding="utf-8").read()
CHAPTER_TOPIC = ast.literal_eval(re.search(r"CHAPTER_TOPIC = (\{.*?\n\})", _src, re.S).group(1))


def slug_of(entry_id: str):
    m = re.match(r"^(?:\d+-)?(.+?)(?:-full|-\d+)$", entry_id)
    return m.group(1) if m else None


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", (s or "").lower())


def tokens(s: str):
    return {t.strip("-s").lower() for t in re.findall(r"[A-Za-z]{4,}", (s or ""))}


# ── 1. load sources ─────────────────────────────────────────────────────────
entries = json.load(open("public/all-concepts.json", encoding="utf-8"))
topics = {}
for f in sorted(os.listdir("public/graph")):
    if not f.endswith(".json") or f == "all.json":
        continue
    topics[f[:-5]] = json.load(open(f"public/graph/{f}", encoding="utf-8"))
pyq = {q["id"]: q for q in json.load(open("public/pyq-database.json", encoding="utf-8"))}
local_ts = open("src/data/questions.ts", encoding="utf-8").read()
local = []
for name in ("MICRO_QUESTIONS", "TARGET_QUESTIONS"):
    m = re.search(name + r"\s*=\s*(\[[\s\S]*?\n\];)", local_ts)
    if m:
        local += json.loads(re.sub(r",(\s*[\]}])", r"\1", m.group(1)[:-1]))
local = {f"local:{q['id']}": q for q in local}
vault_all = json.load(open("/tmp/opencode/vault_final.json", encoding="utf-8"))
vault = {(r["file"] + "#" + str(r["num"])): r for r in vault_all if r["cls"] == "unique"}
inv = json.load(open("sources/graph-inventory.json", encoding="utf-8"))
CHAPTERS_DIR = "public/learn"
os.makedirs(CHAPTERS_DIR, exist_ok=True)

# ── 2. chapters from reading entries (curriculum order = file order) ────────
chapters = {}   # slug -> {id,label,subject,entries:[...],concepts:[...]}
ch_order = []
for e in entries:
    cs = slug_of(e["id"])
    assert cs, e["id"]
    if cs not in chapters:
        chapters[cs] = {"slug": cs, "id": f"ch:{cs}", "label": None, "subject": None,
                        "entries": [], "concepts": []}
        ch_order.append(cs)
    chapters[cs]["entries"].append(e)
for cs, ch in chapters.items():
    full = next((e for e in ch["entries"] if e.get("isFullChapter")), ch["entries"][0])
    ch["label"] = full["title"] or cs
    subj = {"Physics": "physics", "Mathematics": "maths", "Chemistry": "chemistry"}[full["section"]]
    for e in ch["entries"]:
        assert {"Physics": "physics", "Mathematics": "maths", "Chemistry": "chemistry"}[e["section"]] == subj, cs
    ch["subject"] = subj

# ── 3. topic concepts → their primary chapter ───────────────────────────────
topic_nodes = {}   # learn node id -> node dict (for attach resolution)
primary = {}       # topic slug -> chapter slug
placed_concepts = 0
skipped_roots = 0
for tslug, g in topics.items():
    tgts = {e["target"] for e in g["edges"]}
    roots = [n["id"] for n in g["nodes"] if n["id"] not in tgts]
    assert len(roots) == 1, f"{tslug}: expected 1 root, got {roots}"
    root_id = roots[0]
    chs = [cs for cs, t in CHAPTER_TOPIC.items() if t == tslug and cs in chapters]
    if tslug in chapters:
        primary[tslug] = tslug
    elif chs:
        primary[tslug] = chs[0]
    else:
        # no reading chapter owns this topic — synthesize an empty-notes line
        primary[tslug] = tslug
        chapters[tslug] = {"slug": tslug, "id": f"ch:{tslug}", "label": g.get("title", tslug),
                           "subject": g.get("subject", "physics"), "entries": [], "concepts": []}
        ch_order.append(tslug)
    pcs = primary[tslug]
    for n in g["nodes"]:
        if n["id"] == root_id:      # root ≈ the chapter blob itself
            skipped_roots += 1
            continue
        nid = f"{tslug}:{n['id']}"       # identical to inventory ids (attach keys)
        topic_nodes[nid] = {"id": nid, "label": n["label"], "note": n.get("note", ""),
                            "depth": n.get("depth", 2), "topic": tslug}
        chapters[pcs]["concepts"].append(topic_nodes[nid])
        placed_concepts += 1

# ── 4. resolve cluster attach → line node id ────────────────────────────────
ch_of_entry = {}
for cs, ch in chapters.items():
    for e in ch["entries"]:
        ch_of_entry[e["id"]] = cs

def resolve_attach(cl, subj):
    a = cl.get("attach")
    if a in topic_nodes:
        return a, "item"
    if a and a.startswith("rc:"):
        eid = a[3:]
        if eid in ch_of_entry:
            note_id = f"rc:{eid}"
            return note_id, "item"
        if eid in chapters:
            return chapters[eid]["id"], "end"
    t = cl.get("topic")
    if t and primary.get(t) in chapters:
        return chapters[primary[t]]["id"], "end"
    # fuzzy: pattern/pyq_chapter tokens against chapter + topic titles
    hay = " ".join(filter(None, [cl.get("pattern", ""), cl.get("pyq_chapter", ""),
                                 cl.get("topic", "")])).lower()
    tk = tokens(hay)
    best, best_score = None, 0
    for cs, ch in chapters.items():
        if ch["subject"] != subj:
            continue
        ct = tokens(ch["label"])
        score = len(tk & ct)
        if score > best_score:
            best, best_score = cs, score
    if best:
        return chapters[best]["id"], "end"
    # weak fallback: first line of the subject — completeness over precision
    unresolved.append(cl)
    first = next(cs for cs in ch_order if chapters[cs]["subject"] == subj)
    return chapters[first]["id"], "end"

# ── 5. question → qset assignment ───────────────────────────────────────────
CLUSTER_FILES = {"maths": "sources/pyq-clusters-maths.json",
                 "physics": "sources/pyq-clusters-physics.json",
                 "chemistry": "sources/pyq-clusters-chemistry.json"}
cluster_docs = {}
for subj, path in CLUSTER_FILES.items():
    if os.path.exists(path):
        cluster_docs[subj] = json.load(open(path, encoding="utf-8"))
vault_doc = json.load(open("sources/vault-questions-extra.json", encoding="utf-8")) \
    if os.path.exists("sources/vault-questions-extra.json") else None

# attach target -> list of (cluster, subject); chapter-end targets get qsets at line end
assigned = {}          # (target_id, kind) -> [clusters]
unresolved = []

def add_cluster(cl, subj):
    target, kind = resolve_attach(cl, subj)
    if not target:
        unresolved.append(cl)
        return
    assigned.setdefault((target, kind), []).append((cl, subj))

for subj, doc in cluster_docs.items():
    for cl in doc.get("clusters", []):
        add_cluster(cl, subj)
if vault_doc:
    for cl in vault_doc.get("clusters", []):
        add_cluster(cl, cl.get("subject", "physics"))

# scaffold for subjects whose semantic clustering has not landed yet
LABELS = {"physics": "Physics", "maths": "Maths", "chemistry": "Chemistry"}
FIRST_CH = {s: next(cs for cs in ch_order if chapters[cs]["subject"] == s)
            for s in SUBJECT_ORDER}
for subj in SUBJECT_ORDER:
    if subj in cluster_docs:
        continue
    tagged = [(q, True) for q in pyq.values() if q["subject"] == LABELS[subj]]
    _loc_subj = {q["id"]: q["subject"] for q in
                 json.load(open("sources/local-questions.json", encoding="utf-8"))["questions"]}
    tagged += [(q, False) for q in local.values() if _loc_subj.get(q["id"]) == subj]
    tagged.sort(key=lambda t: str(t[0]["id"]))
    buckets = {}
    for q, is_pyq in tagged:
        tk = tokens(q.get("chapter", ""))
        best, best_score = FIRST_CH[subj], 0
        for cs, ch in chapters.items():
            if ch["subject"] != subj:
                continue
            score = len(tk & tokens(ch["label"]))
            for tsl, pcs in primary.items():
                if pcs == cs and tk and any(t in inv["topics"][tsl]["title"].lower() for t in tk):
                    score += 2
            if score > best_score:
                best, best_score = cs, score
        buckets.setdefault(best, []).append((q, is_pyq))
    for cs, rows in buckets.items():
        ch = chapters[cs]
        item_ids = [f"rc:{e['id']}" for e in ch["entries"]] + [c["id"] for c in ch["concepts"]]
        if not item_ids:
            continue
        for bi in range(0, len(rows), 6):
            chunk = rows[bi:bi + 6]
            item_id = item_ids[(bi // 6) % len(item_ids)]
            assigned.setdefault((item_id, "item"), []).append(
                ({"pattern": "mixed practice",
                  "pyq_ids": [q["id"] for q, ip in chunk if ip],
                  "local_ids": [int(q["id"]) for q, ip in chunk if not ip],
                  "years": sorted({q.get("year", "") for q, _ in chunk
                                   if str(q.get("year", "")).isdigit()}),
                  "formula": ""}, subj))

if unresolved:
    print(f"WARN: {len(unresolved)} clusters only weakly matched to a line "
          f"(fine for now; semantic clustering files improve this)", file=sys.stderr)

# ── 6. layout ───────────────────────────────────────────────────────────────
def qids_of(cl):
    out = [str(i) for i in (cl.get("pyq_ids") or [])]
    out += [f"local:{i}" for i in (cl.get("local_ids") or [])]
    out += [str(i) for i in (cl.get("vault_ids") or [])]
    return out

nodes = []
edges = []
chapter_meta = {}

# question ids that belong to each chapter's content file
chapter_qids = {cs: set() for cs in ch_order}

# distribute chapter-end clusters after we know line items (build items first)
line_items = {cs: [] for cs in ch_order}   # (kind, node_dict)
for cs in ch_order:
    ch = chapters[cs]
    for e in ch["entries"]:
        nid = f"rc:{e['id']}"
        line_items[cs].append(("note", {"id": nid, "type": "note", "label": e["title"] or ch["label"],
                                        "chapter": cs, "subject": ch["subject"], "kind": "note"}))
    for c in ch["concepts"]:
        line_items[cs].append(("concept", {"id": c["id"], "type": "concept", "label": c["label"],
                                           "chapter": cs, "subject": ch["subject"],
                                           "kind": "concept", "note": c.get("note", "")}))
    assert line_items[cs], f"empty chapter {cs}"

# subject blocks (top → bottom: physics, maths, chemistry)
block_h = {}
for subj in SUBJECT_ORDER:
    n = sum(1 for cs in ch_order if chapters[cs]["subject"] == subj)
    block_h[subj] = n * GAP_Y
total_h = sum(block_h.values())
jee_y = total_h / 2
subj_y, cursor = {}, 0
for subj in SUBJECT_ORDER:
    subj_y[subj] = cursor + block_h[subj] / 2
    cursor += block_h[subj]

nodes.append({"id": "jee", "type": "root", "label": "JEE", "x": JEE_X, "y": jee_y})
for subj in SUBJECT_ORDER:
    nodes.append({"id": f"subj-{subj}", "type": "subject", "label": subj,
                  "subject": subj, "x": SUBJ_X, "y": subj_y[subj]})
    edges.append({"from": "jee", "to": f"subj-{subj}",
                  "pts": [[JEE_X + R_ROOT, jee_y], [SPLIT_X, jee_y],
                          [SPLIT_X, subj_y[subj]], [SUBJ_X - R_SUBJ, subj_y[subj]]]})

# chapters top→bottom within subject, lines stacked
ch_y = {}
for subj in SUBJECT_ORDER:
    n = sum(1 for cs in ch_order if chapters[cs]["subject"] == subj)
    top = subj_y[subj] - block_h[subj] / 2
    i = 0
    for cs in ch_order:
        if chapters[cs]["subject"] != subj:
            continue
        ch_y[cs] = top + i * GAP_Y + GAP_Y / 2
        i += 1

qset_counter = {}
for cs in ch_order:
    ch = chapters[cs]
    y = ch_y[cs]
    nodes.append({"id": ch["id"], "type": "chapter", "label": ch["label"],
                  "subject": ch["subject"], "chapter": cs, "x": CHAP_X, "y": y})
    edges.append({"from": f"subj-{ch['subject']}", "to": ch["id"],
                  "pts": [[SUBJ_X + R_SUBJ, subj_y[ch["subject"]]], [BUS_X, subj_y[ch["subject"]]],
                          [BUS_X, y], [CHAP_X - R_CHAP, y]]})
    x = LINE_X0
    last_id = ch["id"]
    last_x = CHAP_X + R_CHAP + 70
    n_notes = 0
    q_total = 0
    items = line_items[cs]
    # item slots + trailing qsets
    for kind, item in items:
        item["x"], item["y"] = x, y
        item["depth"] = 1 if kind == "note" else 2
        nodes.append(item)
        last_id = item["id"]
        last_x = x
        n_notes += 1
        x += SLOT_ITEM
        mine = assigned.pop((item["id"], "item"), [])

        def _year(cl):
            ys = [int(v) for v in (cl.get("years") or []) if str(v).isdigit()]
            return min(ys) if ys else 9999

        mine.sort(key=lambda pair: (_year(pair[0]), pair[0].get("pattern", "")))
        for cl, _s in mine:
            ids = [i for i in qids_of(cl) if i in pyq or i in local or i in vault]
            if not ids:
                continue
            k = qset_counter.get(cs, 0)
            qset_counter[cs] = k + 1
            qid = f"q:{cs}:{k}"
            nodes.append({"id": qid, "type": "qset", "label": f"×{len(ids)} questions",
                          "chapter": cs, "subject": ch["subject"], "x": x, "y": y,
                          "showAfter": item["id"], "pattern": cl.get("pattern", ""),
                          "formula": cl.get("formula", ""), "count": len(ids),
                          "years": sorted({int(v) for v in (cl.get("years") or [])
                                           if str(v).isdigit()})[:8],
                          "ids": ids})
            chapter_qids[cs].update(ids)
            q_total += len(ids)
            last_id = qid
            last_x = x
            x += SLOT_Q
    # chapter-end qsets (reveal when the whole line is covered)
    for (target, kind), cls in list(assigned.items()):
        if kind == "end" and target == ch["id"]:
            for cl, _s in cls:
                ids = [i for i in qids_of(cl) if i in pyq or i in local or i in vault]
                if not ids:
                    continue
                k = qset_counter.get(cs, 0)
                qset_counter[cs] = k + 1
                nodes.append({"id": f"q:{cs}:{k}", "type": "qset", "label": f"×{len(ids)} questions",
                              "chapter": cs, "subject": ch["subject"], "x": x, "y": y,
                              "showAfter": "ALL", "pattern": cl.get("pattern", ""),
                              "formula": cl.get("formula", ""), "count": len(ids),
                              "years": sorted({int(v) for v in (cl.get("years") or [])
                                               if str(v).isdigit()})[:8],
                              "ids": ids})
                chapter_qids[cs].update(ids)
                q_total += len(ids)
                last_id = f"q:{cs}:{k}"
                last_x = x
                x += SLOT_Q
            del assigned[(target, kind)]
    # trunk: one straight horizontal line from the chapter blob through every blob
    edges.append({"from": ch["id"], "to": last_id,
                  "pts": [[CHAP_X + R_CHAP, y], [last_x + 40, y]]})
    chapter_meta[cs] = {"id": ch["id"], "label": ch["label"], "subject": ch["subject"],
                        "x": CHAP_X, "y": y, "itemsTotal": n_notes, "questionsTotal": q_total}

# every cluster must have landed on some line (resolve_attach falls back to
# the subject's first chapter, so nothing can be orphaned here)
assert not assigned, f"{len(assigned)} cluster targets unplaced e.g. {list(assigned)[:3]}"

# ── 7. content files ────────────────────────────────────────────────────────
def vault_content(vid: str):
    r = vault.get(vid)
    if not r:
        return None
    full = r.get("full", "")
    stem = r.get("stem", "")
    opts = []
    m = re.search(r"Options?:\s*(.+?)(?:\n\n|\nAnswer|\nSolution|$)", full, re.S)
    if m:
        parts = re.split(r"\(([a-d])\)", m.group(1))
        opts = [parts[i].strip(" .\n") for i in range(2, len(parts), 2)][:4]
        opts = [parts[i].strip(" .\n") for i in range(1, len(parts), 2)][:4] if len(opts) < 4 else opts
    # re-split properly: re.split gives [pre, 'a', textA, 'b', textB, ...]
    if m:
        parts = re.split(r"\(([a-d])\)", m.group(1))
        opts = [parts[i + 1].strip(" .\n\t") for i in range(1, len(parts) - 1, 2)][:4]
    correct = -1
    ma = re.search(r"(?:[Aa]nswer|[Cc]orrect(?:\s+answer)?)\s*[:\-]?\s*\(?([a-d])\)?", full)
    if ma and opts:
        correct = "abcd".index(ma.group(1))
    sol = full
    if stem and full.startswith(stem):
        sol = full[len(stem):].lstrip()
    return {"q": stem or full, "o": opts, "c": correct,
            "y": str(r.get("years", [""])[0]) if r.get("years") else "", "s": sol}

content_total = 0
for cs in ch_order:
    notes = {}
    for e in chapters[cs]["entries"]:
        notes[e["id"]] = e["content"]
    qs = {}
    for vid in sorted(chapter_qids[cs]):
        if vid in pyq:
            p = pyq[vid]
            qs[vid] = {"q": p["question"], "o": p["options"], "c": p.get("correct", -1),
                       "y": p.get("year", ""), "s": p.get("solution", "")}
        elif vid in local:
            p = local[vid]
            qs[vid] = {"q": p["question"], "o": p.get("options", []),
                       "c": p.get("correct", -1), "y": p.get("year", ""),
                       "s": p.get("solution", "")}
        elif vid in vault:
            v = vault_content(vid)
            if v:
                qs[vid] = v
    blob = {"notes": notes, "questions": qs}
    raw = json.dumps(blob, ensure_ascii=False, separators=(",", ":"))
    open(f"{CHAPTERS_DIR}/{cs}.json", "w", encoding="utf-8").write(raw)
    content_total += len(raw)

# ── 8. learn.json + invariants ──────────────────────────────────────────────
learn = {"title": "learn", "rootId": "jee", "nodes": nodes, "edges": edges,
         "chapters": chapter_meta, "subjects": SUBJECT_ORDER,
         "totals": {"items": sum(m["itemsTotal"] for m in chapter_meta.values()),
                    "questions": sum(m["questionsTotal"] for m in chapter_meta.values())}}

ids = [n["id"] for n in nodes]
assert len(ids) == len(set(ids)), "duplicate node ids"
known = set(ids)
for e in edges:
    assert e["from"] in known and e["to"] in known, e
assert sum(1 for n in nodes if n["type"] == "root") == 1
assert sum(1 for n in nodes if n["type"] == "note") == len(entries), \
    f"reading entries placed {sum(1 for n in nodes if n['type']=='note')} of {len(entries)}"
assert placed_concepts == 2012 - skipped_roots, (placed_concepts, skipped_roots)

# every question placed exactly once (clusters or scaffold cover all subjects)
all_placed = []
for n in nodes:
    if n["type"] == "qset":
        all_placed += n["ids"]
cnt = {}
for i in all_placed:
    cnt[i] = cnt.get(i, 0) + 1
dup = [k for k, v in cnt.items() if v > 1]
missing = (set(pyq) | set(local) | set(vault)) - set(cnt)
extra = set(cnt) - (set(pyq) | set(local) | set(vault))
assert not dup, f"question placed twice e.g. {dup[:3]}"
assert not missing, f"{len(missing)} questions missing e.g. {sorted(missing)[:3]}"
assert not extra, f"unknown question ids e.g. {sorted(extra)[:3]}"

# positions strictly increase along each line
for cs in ch_order:
    xs = [n["x"] for n in nodes if n.get("chapter") == cs]
    assert xs == sorted(xs) and len(set(xs)) == len(xs), f"bad slots in {cs}"

with open("public/learn.json", "w", encoding="utf-8") as f:
    json.dump(learn, f, ensure_ascii=False, separators=(",", ":"))
# tiny counts file so the graph menu doesn't have to fetch learn.json (1.9 MB)
with open("public/learn-counts.json", "w", encoding="utf-8") as f:
    json.dump({"nodes": learn["totals"]["items"], "edges": len(edges)},
              f, separators=(",", ":"))

n_qset = sum(1 for n in nodes if n["type"] == "qset")
print(f"wrote public/learn.json ({os.path.getsize('public/learn.json')//1024} KB) "
      f"+ {len(ch_order)} chapter files ({content_total//1024} KB)")
print(f"  chapters {len(ch_order)} | notes {sum(1 for n in nodes if n['type']=='note')} "
      f"| concepts {placed_concepts} | qsets {n_qset}")
print(f"  questions placed {len(all_placed)} = pyq {len(pyq)} + local {len(local)} + vault {len(vault)} ✓")
print(f"  totals: {learn['totals']} | cluster files: {sorted(cluster_docs) or 'none (scaffold)'}")
if unresolved:
    print(f"  unresolved: {len(unresolved)}", file=sys.stderr)
