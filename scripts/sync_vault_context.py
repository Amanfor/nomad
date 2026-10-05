#!/usr/bin/env python3
"""Sync vault/context chapter notes -> src/data/context (idempotent).

- copies every vault chapter .md (skipping coordination variants: nomad keeps
  its curated structured copy; vault raw = unstructured blob + practice/Advanced
  archive material that belongs to the question DB)
- strips UTF-8 BOMs (they hide the first-line '# ' from marked -> literal '#'
  rendered in the note body)
- demotes a first-line "# ... Revision Context: Chapter N — ..." metadata header
  to plain text so it matches the older notes' format and so build-concepts'
  H1-title fallback keeps using the clean filename-derived title
- normalizes image refs to /media/<name>.webp (md links + wikilinks)
- fixes KaTeX-hostile math (raw '%' in subscripts, mangled subscripts,
  bare left-superscripts after another superscript -> Double superscript)
- ensures every referenced webp exists in public/media (converts from png)
- rewrites files in place under src/data/context

Usage: python3 scripts/sync_vault_context.py
"""
import os, re, glob, shutil, subprocess, sys

VAULT = "/home/aman/vaults/context"
NOMAD = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CTX = os.path.join(NOMAD, "src/data/context")
MEDIA_PUB = os.path.join(NOMAD, "public/media")

# raw vault copy is an unstructured blob (no ## headings -> one giant note) whose
# extra sections are practice sets + JEE Advanced archive (question-DB material);
# _Theory_Legacy is a heading-less legacy dump. _Cleaned is the structured source
# (11 H2s) that public/all-concepts.json was historically built from.
SKIP = {"10_Coordination_Compounds.md",
        "10_Coordination_Compounds_Theory_Legacy.md"}
COPY_AS = {"10_Coordination_Compounds_Cleaned.md": "10_Coordination_Compounds.md"}

IMG_MD = re.compile(r"!\[([^\]]*)\]\((media/[^)\s]+)\)")
IMG_WL = re.compile(r"!\[\[([^\]\|]+?)(?:\|([^\]]+))?\]\]")
# first-line metadata headers: "# <Subject> Revision Context: Chapter N — ..." or
# "# 10_File_Name_With_Underscores ..." (file-title style H1s)
META_H1 = re.compile(r"^#\s+((?:[A-Za-z]+\s+)*Revision Context:\s*Chapter\s+\d+\s*[-—–].+|\d+_[A-Za-z0-9_ -]+.*)$", re.M)
MATH_SPLIT = re.compile(r"(\$\$[\s\S]+?\$\$|\$(?!\$)[^$\n]+?\$(?!\$))")


def fix_math(text: str) -> str:
    r"""KaTeX-safety fixes applied to math segments only (see math_audit findings):
    - raw '%' starts a LaTeX comment and swallows the closing '}' (t_{50%} etc.)
    - mangled subscripts from source mangling: [A]{t{1/2}}, t{1/2}, [A]0
    - bare left-superscript directly after another superscript
      ('\sum_{r=0}^n ^n C_r' -> Double superscript): prefix space-preceded '^'
      with an empty group — never a double superscript, renders identically.
    """
    def fix(m):
        tex = m.group(0)
        tex = re.sub(r'(?<!\\)%', r'\\%', tex)
        tex = tex.replace('[A]{t{1/2}}', '[A]_{t_{1/2}}')
        tex = re.sub(r'(?<![A-Za-z_\\])t\{1/2\}', r't_{1/2}', tex)
        tex = tex.replace('[A]0', '[A]_0')
        tex = re.sub(r'(?<=\s)\^', '{}^', tex)
        return tex
    return MATH_SPLIT.sub(fix, text)


def alt_of(path: str) -> str:
    base = re.sub(r"\.(png|webp|jpg|jpeg|gif)$", "", os.path.basename(path), flags=re.I)
    return " ".join(w.capitalize() if w.islower() else w for w in base.replace("-", " ").split("_"))


def transform(text: str, report: dict) -> str:
    # 1. strip BOM anywhere it starts the file
    if text.startswith("\ufeff"):
        text = text.lstrip("\ufeff")
        report["bom"] += 1
    # 2. demote first-line metadata H1 to plain text
    text, n = META_H1.subn(r"\1", text)
    report["meta_h1"] += n
    # 3. md image refs -> /media/*.webp
    def md_sub(m):
        alt, path = m.group(1), m.group(2)
        name = re.sub(r"\.(png|jpg|jpeg|gif)$", ".webp", path, flags=re.I)
        report["md_refs"] += 1
        return f"![{alt}](/{name})"
    text = IMG_MD.sub(md_sub, text)
    # 4. image wikilinks -> /media/*.webp
    def wl_sub(m):
        path, alt = m.group(1), m.group(2)
        path = path.strip()
        if not path.startswith("media/"):
            return m.group(0)
        name = re.sub(r"\.(png|jpg|jpeg|gif)$", ".webp", path, flags=re.I)
        report["wikilinks"] += 1
        return f"![{alt or alt_of(path)}](/{name})"
    text = IMG_WL.sub(wl_sub, text)
    # 5. KaTeX-safety fixes inside math segments
    text = fix_math(text)
    return text


def main():
    report = {"bom": 0, "meta_h1": 0, "md_refs": 0, "wikilinks": 0}
    copied, skipped = [], []

    # 1. copy + transform chapter files
    for f in sorted(glob.glob(os.path.join(VAULT, "*.md"))):
        b = os.path.basename(f)
        if b in SKIP:
            skipped.append(b)
            continue
        dest = COPY_AS.get(b, b)
        text = transform(open(f, encoding="utf-8", errors="replace").read(), report)
        with open(os.path.join(CTX, dest), "w", encoding="utf-8") as out:
            out.write(text)
        copied.append(dest)

    # 2. re-transform kept files already in CTX (idempotent)
    for f in sorted(glob.glob(os.path.join(CTX, "*.md"))):
        text = open(f, encoding="utf-8", errors="replace").read()
        new = transform(text, report)
        if new != text:
            with open(f, "w", encoding="utf-8") as out:
                out.write(new)

    # 3. collect /media/*.webp refs from synced notes
    refs = set()
    for f in sorted(glob.glob(os.path.join(CTX, "*.md"))):
        t = open(f, encoding="utf-8", errors="replace").read()
        refs.update(re.findall(r"\(/media/([^)\s]+?\.webp)\)", t))
        for bad in re.findall(r"(?<![(/])media/[A-Za-z0-9_\-]+\.png", t):
            i = t.index(bad)
            if "preserved in Google Drive" not in t[max(0, i - 150):i + 150]:
                print(f"  !! bare media ref in {os.path.basename(f)}: {bad}")

    # 4. ensure webps exist (convert from png)
    need, missing, ok = [], [], 0
    for r in sorted(refs):
        if os.path.exists(os.path.join(MEDIA_PUB, r)):
            ok += 1
            continue
        name = r[:-5]
        src = next((c for c in (os.path.join(MEDIA_PUB, name + ".png"),
                                os.path.join(VAULT, "media", name + ".png"))
                    if os.path.exists(c)), None)
        if src:
            if not os.path.exists(os.path.join(MEDIA_PUB, name + ".png")):
                shutil.copyfile(src, os.path.join(MEDIA_PUB, name + ".png"))
            need.append(name)
        else:
            missing.append(r)
    if need:
        print(f"converting {len(need)} png -> webp ...")
        for name in need:
            rc = subprocess.run(["magick", os.path.join(MEDIA_PUB, name + ".png"),
                                 "-quality", "82", os.path.join(MEDIA_PUB, name + ".webp")],
                                capture_output=True)
            if rc.returncode != 0:
                print(f"  !! convert failed {name}: {rc.stderr.decode()[:120]}")
                missing.append(name + ".webp")

    print(f"copied {len(copied)} chapters | skipped variants: {skipped}")
    print(f"bom-stripped={report['bom']} meta-h1-demoted={report['meta_h1']} "
          f"md-refs={report['md_refs']} wikilinks={report['wikilinks']}")
    print(f"webp refs: ok={ok} converted={len(need)} missing={len(missing)}")
    for m in missing:
        print("   MISSING SOURCE:", m)
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
