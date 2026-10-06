#!/usr/bin/env python3
"""Build public/graph/all.json — the full-syllabus concept graph.

Merges every per-topic graph under one root + 3 subject hubs, and attaches
the reading concepts from public/all-concepts.json (hybrid, per user call).

Decisions this script encodes:
  * ids are prefixed with the topic slug — 12 ids collide across topic
    files (e.g. "superposition" x3); keeping them separate avoids
    falsely merging different contexts.
  * node `depth` keeps its ORIGINAL per-topic meaning: ConceptGraph uses
    it for styling (radius, always-on labels). The new `ring` field
    drives the radial layout (depthOf prefers ring, falls back to depth),
    so per-topic pages without `ring` render byte-identical.
  * reading-concept notes are plain-text excerpts: renderRich escapes
    HTML and renders raw markdown literally, and math spans must never be
    cut mid-formula.

Run: python3 scripts/build_full_graph.py  (then: node scripts/validate_graph.cjs all)
"""
import json
import re
import glob
import os
import collections

GRAPH_DIR = "public/graph"
OUT = os.path.join(GRAPH_DIR, "all.json")
CONCEPTS = "public/all-concepts.json"

# chapter slug (from all-concepts id) -> topic slug. Unmapped chapters
# hang directly off their subject hub. Scoped within subject on purpose.
CHAPTER_TOPIC = {
    # mathematics
    "sets-and-relations": "sets-and-relations",
    "functions-and-binary-operations": "functions-graphs",
    "complex-numbers": "complex-numbers",
    "theory-of-equations-and-inequations": "quadratic-polynomial-theory",
    "sequences-and-series": "sequences-series",
    "permutations-and-combinations": "permutations-combinations",
    "height-and-distance-trigonometry": "trigonometry",
    "probability-and-distributions": "probability-distributions",
    "differential-equations": "differential-equations",
    "quadratic-equations-and-polynomial-theory": "quadratic-polynomial-theory",
    "sequences-series-and-progression-analytics": "sequences-series",
    "permutations-combinations-and-combinatorial-analytics": "permutations-combinations",
    "binomial-theorem-and-multinomial-expansions": "binomial-theorem",
    "straight-lines-and-2d-coordinate-geometry": "coordinate-geometry",
    "circles-and-concyclic-geometry": "coordinate-geometry",
    "trigonometric-ratios-functions-and-analytical-equations": "trigonometry",
    # physics
    "modern-physics-and-dual-nature": "photoelectric-modern-physics",
    "laws-of-motion-and-friction": "newton-laws",
    "kinetic-theory-of-gases": "kinetic-theory-gases",
    "communication-systems": "communication-systems",
    "electrostatics-and-capacitance": "electrostatics",
    "magnetic-effects-of-current-and-magnetism": "magnetism",
    "current-electricity": "current-electricity",
    "alternating-current": "alternating-current",
    "gravitation": "gravitation",
    "wave-motion-and-string-waves": "waves-sound",
    "sound-waves-and-acoustics": "waves-sound",
    "refraction-at-spherical-surfaces-and-lenses": "ray-optics",
    "wave-optics-and-interference": "wave-optics",
    "center-of-mass-and-collisions": "centre-of-mass-momentum",
    "photoelectric-effect-and-dual-nature": "photoelectric-modern-physics",
    "electromagnetic-induction": "electromagnetic-induction",
    "charged-particle-dynamics-and-magnetic-forces": "magnetism",
    "ray-optics-questions-solutions-and-pyqs": "ray-optics",
    "ray-optics-and-optical-instruments": "ray-optics",
    "fluid-mechanics-viscosity-and-surface-tension": "fluid-mechanics",
    "center-of-mass-momentum-conservation-and-collisions": "centre-of-mass-momentum",
    "rigid-body-dynamics-and-rotational-mechanics": "rotational-motion",
    "simple-harmonic-motion-and-oscillations": "simple-harmonic-motion",
    "gravitation-and-celestial-mechanics": "gravitation",
    "kinematics-rectilinear-and-relative-motion": "kinematics",
    "projectile-motion-and-inclined-plane-ballistics": "kinematics",
    "newtons-laws-of-motion-and-friction": "newton-laws",
    "circular-motion-and-vertical-loop-dynamics": "circular-motion",
    "work-power-and-energy": "work-energy-power",
    "kinetic-theory-of-gases-and-thermodynamics": "thermodynamics",
    "calorimetry-and-thermal-expansion": "thermodynamics",
    "physics-dual-nature-of-matter-and-radiation": "photoelectric-modern-physics",
    # chemistry -> the three chemistry topic graphs
    "chemical-kinetics": "physical-chemistry",
    "atomic-structure-and-quantum-mechanics": "physical-chemistry",
    "chemical-and-ionic-equilibrium": "physical-chemistry",
    "chemical-thermodynamics-and-energetics": "physical-chemistry",
    "thermochemistry-and-reaction-energetics": "physical-chemistry",
    "electrochemistry-and-ionic-conduction": "physical-chemistry",
    "liquid-solutions-and-colligative-properties": "physical-chemistry",
    "solid-state": "physical-chemistry",
    "gaseous-state-and-real-gas-thermodynamics": "physical-chemistry",
    "coordination-compounds": "inorganic-chemistry",
    "chemical-bonding-and-molecular-structure": "inorganic-chemistry",
    "s-block-elements": "inorganic-chemistry",
    "qualitative-cation-analysis": "inorganic-chemistry",
    "qualitative-anion-analysis": "inorganic-chemistry",
    "polymers-and-macromolecules": "organic-chemistry",
    "purification-and-characterisation-of-organic-compounds": "organic-chemistry",
    # deliberately unmapped (no matching topic graph):
    #   elasticity-and-solid-mechanics -> hangs off the Physics hub
}

SECTION_SUBJECT = {"Physics": "physics", "Mathematics": "maths", "Chemistry": "chemistry"}
SUBJECT_HUBS = [
    ("physics", "Physics", "From Newton's laws to photons: mechanics, waves, optics, fields and modern physics."),
    ("maths", "Mathematics", "The language of JEE: algebra, calculus, coordinate geometry and probability."),
    ("chemistry", "Chemistry", "Matter and its reactions: physical, organic and inorganic."),
]


def norm(s):
    return re.sub(r"[^a-z0-9]+", "", s.lower())


def excerpt(text, limit=480):
    """Plain-text teaser. Never cuts inside a $...$/$$...$$ span; renderRich
    renders raw markdown literally, so strip image/heading/bullet syntax."""
    t = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", text or "")
    t = re.sub(r"^\s*(#{1,6}\s*|\*\s+|-\s+)", "", t, flags=re.M)
    t = t.replace("**", "")
    t = re.sub(r"^(Source:|Extracted into:).*$", "", t, flags=re.M)
    t = re.sub(r"^_{4,}$", "", t, flags=re.M)
    t = re.sub(r"\((Physics|Chemistry|Mathematics)\s+Revision Context[^)]*\)", "", t)
    t = re.sub(r"^(Physics|Chemistry|Mathematics) Revision Context:.*$", "", t, flags=re.M)
    t = re.sub(r"[ \t]+", " ", t)
    t = re.sub(r"\n{3,}", "\n\n", t).strip()
    if len(t) <= limit:
        return t
    # cut only at a non-math boundary: split into safe tokens first
    parts = re.split(r"(\$\$[\s\S]+?\$\$|\$[^$]+?\$)", t)
    out, size = "", 0
    for p in parts:
        if size + len(p) > limit:
            break
        out += p
        size += len(p)
    if not out:
        out = parts[0][:limit]
    # word-boundary trim on the trailing prose
    if not out.endswith("$"):
        out = out.rsplit(" ", 1)[0] if " " in out[out.rfind("\n") + 1:] else out
    return out.rstrip() + "…"


def chapter_slug(entry_id):
    m = re.match(r"^(?:\d+)?-(.+?)(?:-full|-\d+)$", entry_id)
    if m:
        return m.group(1)
    m = re.match(r"^(.+?)(?:-full|-\d+)$", entry_id)
    return m.group(1) if m else None


# ── 1. load topic graphs ─────────────────────────────────────────────────
topics = {}   # slug -> {title, subject, root_id, nodes, edges}
for f in sorted(glob.glob(os.path.join(GRAPH_DIR, "*.json"))):
    slug = os.path.basename(f)[:-5]
    if slug == "all":
        continue
    g = json.load(open(f, encoding="utf-8"))
    tgts = {e["target"] for e in g.get("edges", [])}
    roots = [n for n in g["nodes"] if n["id"] not in tgts]
    assert len(roots) == 1, f"{slug}: expected 1 root, got {len(roots)}"
    topics[slug] = {
        "title": g.get("title", slug),
        "subject": g.get("subject", "physics"),
        "root_id": roots[0]["id"],
        "nodes": g["nodes"],
        "edges": g["edges"],
    }

# stable sector order: physics, maths, chemistry (as listed on the menu)
order = ["physics", "maths", "chemistry"]
topic_order = sorted(topics, key=lambda s: (order.index(topics[s]["subject"]) if topics[s]["subject"] in order else 9, s))

# ── 2. reading concepts -> chapters ──────────────────────────────────────
entries = json.load(open(CONCEPTS, encoding="utf-8"))
chapters = collections.OrderedDict()   # slug -> {title, section, entries: []}
unparsed = []
for c in entries:
    cs = chapter_slug(c["id"])
    if not cs:
        unparsed.append(c["id"])
        continue
    ch = chapters.setdefault(cs, {"title": None, "section": c.get("section", ""), "entries": []})
    if c.get("isFullChapter") or ch["title"] is None:
        # chapter title: prefer the -full entry's title
        if c.get("isFullChapter"):
            ch["title"] = c["title"]
        elif ch["title"] is None:
            ch["title"] = c["title"].split(" — ")[0]
    ch["entries"].append(c)
assert not unparsed, f"unparsed concept ids: {unparsed}"

# ── 3. assemble ──────────────────────────────────────────────────────────
nodes = []
edges = []


def add_edge(s, t):
    edges.append({"source": s, "target": t, "label": "contains"})


root_id = "all"
nodes.append({
    "id": root_id, "label": "Full Syllabus", "group": "Full Syllabus",
    "depth": 0, "ring": 0,
    "note": "Every concept graph nomad holds — all of physics, mathematics and chemistry in one map.",
})
hub_ids = {}
for slug, label, note in SUBJECT_HUBS:
    hid = f"subj-{slug}"
    hub_ids[slug] = hid
    nodes.append({"id": hid, "label": label, "group": label, "depth": 1, "ring": 1, "note": note})
    add_edge(root_id, hid)

topic_root_ids = {}
for slug in topic_order:
    t = topics[slug]
    prefix = f"{slug}:"
    hid = hub_ids.get(t["subject"], hub_ids["physics"])
    rid = prefix + t["root_id"]
    topic_root_ids[slug] = rid
    for n in t["nodes"]:
        nn = dict(n)
        nn["id"] = prefix + n["id"]
        nn["ring"] = (n.get("depth") or 0) + 2
        nodes.append(nn)
    for e in t["edges"]:
        add_edge(prefix + e["source"], prefix + e["target"])
    add_edge(hid, rid)

# ── formula sheets: key formulas live in the chapter node's note ────────
sheets = {}
if os.path.exists("public/formula-sheets.json"):
    for s in json.load(open("public/formula-sheets.json", encoding="utf-8")):
        cs = chapter_slug(s["id"])
        if cs:
            sheets[cs] = s

# reading-concept branches
rc_nodes = 0
rc_edges = 0
rc_chapter_ids = {}
for cs, ch in chapters.items():
    subject = SECTION_SUBJECT.get(ch["section"])
    assert subject, f"unknown section {ch['section']!r}"
    topic = CHAPTER_TOPIC.get(cs)
    if topic is not None:
        assert topic in topics, f"chapter {cs}: topic {topic} missing"
        assert topics[topic]["subject"] == subject, f"chapter {cs}: section/topic subject mismatch"
        parent = topic_root_ids[topic]
        parent_label = next(n["label"] for n in nodes if n["id"] == parent)
        under_topic = True
        # identical title -> skip the redundant chapter node, hang entries
        # straight off the topic root
        direct = norm(ch["title"] or "") == norm(parent_label)
    else:
        parent = hub_ids[subject]
        direct = False
        under_topic = False

    ring_ch = 3 if under_topic else 2
    ring_ent = 4 if under_topic else 3
    attach_at = parent
    if not direct:
        cid = f"rc:{cs}"
        note = excerpt(next((e["content"] for e in ch["entries"] if e.get("isFullChapter")), ch["entries"][0]["content"]))
        sheet = sheets.get(cs)
        if sheet:
            keys = [f for f in (sheet.get("mostImportant") or []) if f][:4]
            if keys:
                note += "\n\nKey formulas: " + " ".join(keys)
        rc_chapter_ids[cs] = cid
        nodes.append({
            "id": cid, "label": ch["title"] or cs, "group": ch["title"] or cs,
            "depth": 1, "ring": ring_ch,
            "note": note,
        })
        add_edge(parent, cid)
        attach_at = cid
        rc_nodes += 1
        rc_edges += 1
    for e in ch["entries"]:
        eid = "rc:" + e["id"]
        nodes.append({
            "id": eid, "label": e["title"], "group": ch["title"] or cs,
            "depth": 2, "ring": ring_ent,
            "note": excerpt(e["content"]),
        })
        add_edge(attach_at, eid)
        rc_nodes += 1
        rc_edges += 1

# ── question clusters (subagent outputs: clubbed by pattern + formula) ──
CLUSTER_FILES = [
    "sources/pyq-clusters-maths.json",
    "sources/pyq-clusters-physics.json",
    "sources/pyq-clusters-chemistry.json",
    "sources/vault-questions-extra.json",
]
by_id = {n["id"]: n for n in nodes}
covered_pyq = []
covered_local = []
present_files = []
for cf in CLUSTER_FILES:
    if not os.path.exists(cf):
        continue
    present_files.append(cf)
    doc = json.load(open(cf, encoding="utf-8"))
    subj = doc.get("subject", "")
    for cl in doc.get("clusters", []):
        pyq_ids = cl.get("pyq_ids") or []
        local_ids = cl.get("local_ids") or []
        vault_ids = cl.get("vault_ids") or []
        nq = len(pyq_ids) + len(local_ids) + len(vault_ids)
        if not nq:
            continue
        attach = cl.get("attach")
        if attach not in by_id:
            attach = topic_root_ids.get(cl.get("topic"))
        if attach not in by_id:
            attach = hub_ids[subj if subj in hub_ids else "physics"]
        parent_node = by_id[attach]
        note = (cl.get("pattern") or "mixed patterns").strip().rstrip(".")
        formula = (cl.get("formula") or "").strip()
        if formula:
            note += f". Formula: {formula}"
        years = sorted({int(y) for y in (cl.get("years") or []) if re.fullmatch(r"\d{4}", str(y))})
        if years:
            note += f". PYQs: {', '.join(map(str, years[:8]))}{'…' if len(years) > 8 else ''}"
        nodes.append({
            "id": f"q:{len(nodes)}", "label": f"×{nq} questions",
            "group": parent_node.get("label", ""), "depth": 2,
            "ring": (parent_node.get("ring") or parent_node.get("depth") or 0) + 1,
            "note": note,
        })
        add_edge(attach, nodes[-1]["id"])
        covered_pyq += pyq_ids
        covered_local += [f"local:{i}" for i in local_ids]

# ── 4. agent reference inventory (what subagents map clusters against) ──
inventory = {
    "root": root_id,
    "hubs": hub_ids,
    "attach_rule": "cluster.attach = most precise node id below; fallback topic root_id; if no topic fits use null (subject hub applies)",
    "topics": {
        slug: {
            "title": t["title"], "subject": t["subject"], "root_id": topic_root_ids[slug],
            "nodes": [{"id": topic_root_ids[slug] if n["id"] == t["root_id"] else f"{slug}:{n['id']}",
                       "label": n["label"], "depth": n.get("depth")} for n in t["nodes"]],
        }
        for slug, t in topics.items()
    },
    "reading_chapters": [
        {"id": rc_chapter_ids[cs], "label": ch["title"], "topic": CHAPTER_TOPIC.get(cs)}
        for cs, ch in chapters.items() if cs in rc_chapter_ids
    ],
    "reading_entries": [
        {"id": "rc:" + e["id"], "label": e["title"], "chapter": cs, "topic": CHAPTER_TOPIC.get(cs)}
        for cs, ch in chapters.items() for e in ch["entries"]
    ],
}
os.makedirs("sources", exist_ok=True)
json.dump(inventory, open("sources/graph-inventory.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# ── 5. sanity ────────────────────────────────────────────────────────────
ids = [n["id"] for n in nodes]
assert len(ids) == len(set(ids)), "duplicate node ids"
idset = set(ids)
bad = [e for e in edges if e["source"] not in idset or e["target"] not in idset]
assert not bad, f"dangling edges: {bad[:3]}"
tgt = {e["target"] for e in edges}
roots = [i for i in ids if i not in tgt]
assert roots == [root_id], f"unexpected roots: {roots}"
# BFS reachability
children = collections.defaultdict(list)
for e in edges:
    children[e["source"]].append(e["target"])
seen, q = set(), [root_id]
while q:
    x = q.pop()
    if x in seen:
        continue
    seen.add(x)
    q.extend(children[x])
assert len(seen) == len(ids), f"unreachable: {len(ids) - len(seen)} nodes"

# completeness (nothing left out): once every subject's cluster file exists,
# all pyq + local questions must be claimed exactly once.
if all(os.path.exists(f) for f in CLUSTER_FILES[:3]):
    from collections import Counter
    db_ids = {q["id"] for q in json.load(open("public/pyq-database.json", encoding="utf-8"))}
    cnt = Counter(covered_pyq)
    dup = [k for k, v in cnt.items() if v > 1]
    missing = db_ids - set(cnt)
    extra = set(cnt) - db_ids
    assert not missing, f"{len(missing)} pyq questions missing from clusters e.g. {sorted(missing)[:3]}"
    assert not dup, f"pyq claimed twice e.g. {dup[:3]}"
    assert not extra, f"unknown pyq ids in clusters e.g. {sorted(extra)[:3]}"
    _src = open("src/data/questions.ts", encoding="utf-8").read()
    _local = []
    for _name in ("MICRO_QUESTIONS", "TARGET_QUESTIONS"):
        m = re.search(_name + r"\s*=\s*(\[[\s\S]*?\n\];)", _src)
        if m:
            _local += json.loads(re.sub(r",(\s*[\]}])", r"\1", m.group(1)[:-1]))
    local_all = {f"local:{q['id']}" for q in _local}
    lcnt = Counter(covered_local)
    lmiss = local_all - set(lcnt)
    ldup = [k for k, v in lcnt.items() if v > 1]
    assert not lmiss, f"{len(lmiss)} local questions missing e.g. {sorted(lmiss)[:3]}"
    assert not ldup, f"local claimed twice e.g. {ldup[:3]}"
    print(f"  coverage OK: {len(cnt)} pyq + {len(lcnt)} local questions all placed")

out = {"title": "full syllabus", "subject": "all", "rootId": root_id, "nodes": nodes, "edges": edges}
json.dump(out, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
print(f"wrote {OUT}")
print(f"  topics: {len(topic_order)} | reading chapters: {len(chapters)} | cluster files: {len(present_files)}")
qn = sum(1 for n in nodes if n["id"].startswith("q:"))
print(f"  nodes: {len(nodes)} (topic {len(nodes) - rc_nodes - qn - 4}, reading {rc_nodes}, hubs+root 4, questions {qn}) | edges: {len(edges)}")
print(f"  size: {os.path.getsize(OUT) / 1024:.0f} KB")
