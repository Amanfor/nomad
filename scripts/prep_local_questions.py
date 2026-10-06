#!/usr/bin/env python3
"""Parse MICRO_QUESTIONS + TARGET_QUESTIONS out of src/data/questions.ts into
sources/local-questions.json with a subject tag per question (keyword rules;
unmatched chapters are printed so they can be fixed by hand, never guessed)."""
import json
import re

CHEM = ["alcohol", "aldehyde", "carboxylic", "chemical", "coordination", "electrochemistry",
        "environment", "hydrogen", "haloalkane", "inorganic", "isolation", "nitrogen", "organic",
        "periodic", "s block", "structure of atom", "surface-chemistry", "ketone", "phenol",
        "ether", "amine", "carb", "halogen", "equilibrium", "biomolecule", "polymer",
        "atomic structure", "mole", "redox", "s-block", "p-block", "d-block", "qualitative",
        "chemistry", "electrochemistry", "coordination", "alcohol", "aldehyde"]
PHYS = ["kinematics", "motion", "laws of motion", "friction", "center of mass", "centre of mass",
        "circular", "communication", "current electricity", "electric power", "capacit",
        "dual nature", "electrostatic", "fluid", "gravitation", "heat", "thermodynamics",
        "magnet", "oscillation", "rotational", "harmonic", "waves", "work, power", "work power",
        "alternating", "ac-circuits", " acceleration", "atoms and nuclei", "reflection",
        "lens", "refraction", "optical", "ray optics", "projectile", "momentum", "collision",
        "units-and-measurements", "units and measurements", "properties-of-matter",
        "surface tension", "elasticity", "wave-optics", "wave optics", "sound", "radiation",
        "photoelectric", "induction", "semiconductor", "modern physics", "capacitor",
        "'ac'", "ac ", "nuclear physics", "elastic", "sound waves", "shm", "light",
        "magnetic effects", "electromagnetic", "power and heating", "acceleration",
        "properties of matter", "work, energy", "'ac'", " ac "]


def subject_of(chapter: str) -> str:
    c = chapter.lower().replace("-", " ").replace("_", " ")
    if c.strip() in ("ac", "ac circuits"):
        return "physics"
    if c.strip() in ("solutions", "s block elements"):
        return "chemistry"
    if any(p in c for p in CHEM):
        return "chemistry"
    if any(p in c for p in PHYS):
        return "physics"
    return ""  # default-unknown; maths only when explicitly listed below


MATHS_HINTS = ["3d", "derivative", "integration", "area under", "circle", "ellipse",
               "hyperbola", "parabola", "complex", "binomial", "quadratic", "logarithm",
               "matrices", "matrix", "determinant", "probability", "sequence", "series",
               "permutation", "combination", "trigonomet", "vector", "coordinate",
               "straight line", "statistics", "mathematical", "definite", "indefinite",
               "limit", "continuity", "differential equation", "height and distance",
               "sets", "relation", "function", "application of", "algebra", "inequality",
               "logarithmic", "reasoning", "statistics", "conic", "tangent", "normals"]


def main():
    src = open("src/data/questions.ts", encoding="utf-8").read()
    out = []
    unmatched = set()
    for name, kind in (("MICRO_QUESTIONS", "micro"), ("TARGET_QUESTIONS", "target")):
        m = re.search(name + r"\s*=\s*(\[[\s\S]*?\n\];)", src)
        arr = json.loads(re.sub(r",(\s*[\]}])", r"\1", m.group(1)[:-1]))
        for q in arr:
            ch = q.get("chapter", "")
            s = subject_of(ch)
            if not s and any(h in ch.lower().replace("-", " ") for h in MATHS_HINTS):
                s = "maths"
            if not s:
                unmatched.add(ch)
                continue
            out.append({"id": q["id"], "kind": kind, "subject": s,
                        "chapter": ch, "topic": q.get("topic", ""),
                        "question": q["question"], "year": q.get("year", "")})
    json.dump({"questions": out}, open("sources/local-questions.json", "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    import collections
    print("assigned:", dict(collections.Counter(q["subject"] for q in out)), "of", len(out) + len(unmatched))
    if unmatched:
        print("UNMATCHED chapters (add rules):")
        for c in sorted(unmatched):
            print("  -", c)


if __name__ == "__main__":
    main()
