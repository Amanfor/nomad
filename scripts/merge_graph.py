#!/usr/bin/env python3
"""Merge online + local keyword sweeps into the layered organic chemistry graph."""
import json, re, sys
from collections import defaultdict

ONLINE = "sources/graph-kw-online.json"
LOCAL = "sources/graph-kw-local.json"
OUT = "public/graph/organic-chemistry.json"

def norm(s): return re.sub(r"[^a-z0-9]+", "", s.lower())

def load(p):
    try:
        return json.load(open(p, encoding="utf-8"))
    except FileNotFoundError:
        return {"nodes": [], "edges": []}

on = load(ONLINE)
lo = load(LOCAL)

nodes = {}
edges = {}

def add_node(n, prefer):
    key = norm(n["label"])
    if key in nodes:
        cur = nodes[key]
        if not cur.get("note") and n.get("note"): cur["note"] = n["note"]
        if prefer and not cur.get("from_local") and n.get("_local"): cur.update({k: v for k, v in n.items() if k != "_local"})
        cur["depth"] = min(cur.get("depth", 9), n.get("depth", 9))
        return
    n = dict(n)
    if n.get("_local"): n["from_local"] = True; del n["_local"]
    nodes[key] = n

for n in on.get("nodes", []): add_node(n, False)
for n in lo.get("nodes", []):
    n["_local"] = True; add_node(n, True)

id_by_label = {norm(n["label"]): n["id"] for n in nodes.values()}

def edge(s, t): edges[(s, t)] = {"source": s, "target": t, "label": "contains"}

nid = {n["id"]: n for n in nodes.values()}
for src in (on, lo):
    for e in src.get("edges", []):
        s, t = e.get("source"), e.get("target")
        if s in nid and t in nid and s != t and nid[s].get("depth", 0) < nid[t].get("depth", 99):
            edge(s, t)

# fix missing parents: attach to depth-1 guess by group, else root
ids = set(nid)
parent_count = defaultdict(int)
for (s, t) in edges: parent_count[t] += 1
root_id = None
for n in nodes.values():
    if norm(n["label"]) in ("organicchemistry",): root_id = n["id"]
if root_id is None:
    for e in edges:
        if not any(t == e[0] for (_, t) in edges): root_id = e[0]
# orphan attach
for n in list(nodes.values()):
    if n["id"] == root_id: continue
    if parent_count[n["id"]] == 0:
        # find a node one depth up in same group
        target_parent = None
        cands = [p for p in nodes.values() if p.get("group") == n.get("group") and p.get("depth", 9) == n.get("depth", 9) - 1]
        if not cands: cands = [p for p in nodes.values() if norm(p.get("group", "")) == norm(n.get("group", "")) and p.get("depth", 9) < n.get("depth", 9)]
        if not cands: cands = [p for p in nodes.values() if p.get("depth", 9) == 1]
        target_parent = cands[0]["id"] if cands else root_id
        edge(target_parent, n["id"])
        parent_count[n["id"]] += 1

# multiple parents -> keep first (tree)
first_parent = {}
for (s, t) in sorted(edges):
    if t not in first_parent: first_parent[t] = s
final_edges = [{"source": s, "target": t, "label": "contains"} for t, s in first_parent.items()]

# reindex ids just in case of collisions, remapping edges
id_remap = {}
seen_ids = set()
for n in nodes.values():
    base = re.sub(r"[^a-z0-9-]+", "-", n["id"].lower().strip("-")) or norm(n["label"])
    new = base; i = 2
    while new in seen_ids: new = f"{base}-{i}"; i += 1
    id_remap[n["id"] + f"|{norm(n['label'])}"] = new
    seen_ids.add(new)
    n["id"] = new

final_edges2 = []
for e in final_edges:
    s_label = norm(nid[e["source"]]["label"]) if e["source"] in nid else None
    t_label = norm(nid[e["target"]]["label"]) if e["target"] in nid else None
    ns = id_remap.get(e["source"] + f"|{s_label}")
    nt = id_remap.get(e["target"] + f"|{t_label}")
    if ns and nt and ns != nt:
        final_edges2.append({"source": ns, "target": nt, "label": "contains"})
final_edges = final_edges2

out = {"title": "organic chemistry", "subject": "chemistry",
       "nodes": list(nodes.values()), "edges": final_edges}
import os, collections
json.dump(out, open(OUT, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"nodes={len(out['nodes'])} edges={len(out['edges'])} root={root_id}")
print("depth histogram:", collections.Counter(n.get('depth') for n in out['nodes']))
