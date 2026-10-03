#!/usr/bin/env python3
"""Keep a persistent manifest of the vault context folder, mapping every
markdown entry to what we know about it (subject/chapter/kind/source,
question counts, etc)."""
import os, re, json

ROOT = "/home/aman/nomad"
CTX = "/home/aman/vaults/context"
OUT = os.path.join(ROOT, "sources", "context-index.json")

def safe_block_count(txt, keys):
    return sum(txt.count(k) for k in keys)

def main():
    entries = []
    for dirpath, dirs, files in os.walk(CTX):
        for fn in files:
            if not fn.endswith('.md'): continue
            path = os.path.join(dirpath, fn)
            with open(path, encoding='utf-8', errors='replace') as f:
                txt = f.read()
            rel = os.path.relpath(path, CTX)
            is_questions = '/questions/' in rel or rel.startswith('questions/')
            header = txt.split('\n', 1)[0]
            i = {
                "path": rel,
                "size_bytes": os.path.getsize(path),
                "kind": 'question-bank' if is_questions else 'chapter-note',
                "h1": header[:400],
                "problem_blocks": txt.count('Problem '),
                "has_options": txt.count('Options:'),
                "has_solution": txt.count('Detailed Solution') or txt.count('[!solution]') > 0,
                "has_media": 'media/' in txt,
            }
            entries.append(i)
    os.makedirs('/home/aman/nomad/sources', exist_ok=True)
    with open(OUT,'w') as f:
        json.dump(entries, f, ensure_ascii=False, indent=1)
    # quick stats
    q = sum(1 for e in entries if e['kind']=='question-bank')
    n = sum(1 for e in entries if e['kind']=='chapter-note')
    print(f'entries={len(entries)} | chapter-notes={n} | question-banks={q}')

main()
