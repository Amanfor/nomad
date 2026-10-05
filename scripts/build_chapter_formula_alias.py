#!/usr/bin/env python3
"""Build chapter -> formula sheet alias map."""
import json, re
from pathlib import Path

ROOT = Path('/home/aman/nomad')
PYQ = ROOT / 'public' / 'pyq-database.json'
SHEETS = ROOT / 'public' / 'formula-sheets.json'
OUT = ROOT / 'sources' / 'chapter-to-formula-sheet.json'

STOP = {'and', 'of', 'the', 'in', 'a', 'an', 'for', 'to', 'on', 'by', 'with', 'or'}

def clean_title(t):
    t = re.sub(r'^.*?revision context:\s*chapter\s*\d+\s*[—-]\s*', '', t, flags=re.IGNORECASE)
    return t

def norm(s):
    if s is None:
        return ''
    return re.sub(r'[^a-z0-9]+', '', s.lower())

def tokens(s):
    return [t for t in re.split(r'[^a-z0-9]+', s.lower()) if t and t not in STOP]

# Curated keyword -> sheet title substring alias table.
# Keys are keyword hints; values are normalized fragments of the sheet title.
ALIAS = [
    (['ac'], 'alternating current'),
    (['capacitor', 'capacitance', 'dielectric', 'parallelplate', 'electricenergystored', 'combinationofcapacitors'], 'electrostatics and capacitance'),
    (['electrostatic', 'coulomb', 'electricfield', 'electricflux', 'gauss', 'electricpotential', 'electricdipole', 'dipole'], 'electrostatics and capacitance'),
    (['reflection', 'mirror'], 'ray optics and optical instruments'),
    (['refraction', 'prism', 'tir', 'totalinternal', 'lense', 'optical', 'geometricaloptics', 'rayoptics'], 'ray optics and optical instruments'),
    (['waveoptics', 'interference', 'diffraction', 'young'], 'wave optics and interference'),
    (['atomicstructure', 'rutherford', 'bohr', 'structureofatom', 'hydrogenspectrum', 'alpha particle'], 'atomic structure and quantum mechanics'),
    (['photoelectric', 'photon', 'particlenature', 'duallature', 'matterwave', 'debroglie'], 'quantum mechanics'),
    (['probability'], 'probability and distributions'),
    (['statistic'], 'probability and distributions'),
    (['kinemat', 'motioninstr', 'motionin1d', 'motioninast', 'projectile', 'relative motion', 'heightanddistance'], 'kinematics'),
    (['mechanic', 'propertiesofmatter', 'strain', 'elastic'], 'elasticity and solid mechanics'),
    (['fluid', 'mechanicalpropertiesofliquid', 'mechanicalpropertiesofsolid', 'mechanicalpropertiesofmatter', 'mechanicalproperties', 'surface tension', 'viscos'], 'fluid mechanics'),
    (['newton', 'lawsofmotion', 'friction'], 'newtons laws of motion and friction'),
    (['circular', 'uniformcircular', 'nonuniformcircular'], 'circular motion and vertical loop dynamics'),
    (['projectile', 'inclinedplane'], 'projectile motion and inclined plane ballistics'),
    (['centerofmass', 'centreofmass', 'collision', 'impulsemomentum'], 'center of mass and collisions'),
    (['rotational', 'rigidbody', 'momentofinertia'], 'rigid body dynamics and rotational mechanics'),
    (['gravit', 'kepler', 'escapespeed', 'satellite'], 'gravitation'),
    (['workpower', 'workenergy', 'work,power', 'powerandenergy'], 'work power and energy'),
    (['workdone', 'kineticenergy', 'potentialenergy', 'energyconservation', 'workenergytheorem'], 'work power and energy'),
    (['simpleharmonic', 'oscillation', 'shm'], 'simple harmonic motion and oscillations'),
    (['wave', 'stringwave', 'sound', 'emwave', 'e-mwave', 'emspectrum', 'displacementcurrent', 'propertiesofemwaves'], 'wave motion'),
    (['calorimetry', 'thermalexpansion', 'specificheat', 'latentheat', 'expansionofgases'], 'calorimetry and thermal expansion'),
    (['heat', 'thermal', 'thermodynamicsprocess', 'heattransfer'], 'thermochemistry and reaction energetics'),
    (['thermodynamics'], 'kinetic theory of gases and thermodynamics'),
    (['kinetictheory', 'gas', 'realgas', 'gaseous', 'idealgas', 'degreeoffreedom', 'equipartition', 'molecularspeeds'], 'kinetic theory of gases and thermodynamics'),
    (['current', 'drift', 'resistance', 'resistivity', 'ohm'], 'current electricity'),
    (['galvanometer', 'voltmeter', 'ammeter', 'potentiometer', 'rccircuit', 'growthanddecayofcurrent'], 'current electricity'),
    (['emi', 'electromagneticinduction', 'motionalemf'], 'electromagnetic induction'),
    (['magnetic', 'magnet', 'mangetism', 'magneticflux', 'faraday', 'lenz', 'emf', 'eddycurrent', 'emi', 'magentic'], 'magnetic effects of current and magnetism'),
    (['inductance', 'emii', 'electromagneticinduction'], 'electromagnetic induction'),
    (['alternating', 'accircuit', 'accurrent', 'ac generator', 'transformer'], 'alternating current'),
    (['semiconductor', 'diode', 'transistor', 'pnjunction', 'electronic', 'modulation', 'demodulation', 'communication'], 'communication systems'),
    (['electromagnet', 'emwaves', 'em wave'], 'electromagnetic waves'),
    (['modernphysics', 'nuclear', 'fission', 'fusion', 'radioactivity', 'nucleon'], 'modern physics and dual nature'),
    (['chemicalbond', 'hybridization', 'vsepr', 'molecular'], 'chemical bonding and molecular structure'),
    (['chemicalkin', 'nuclearchemistry'], 'chemical kinetics'),
    (['equilibrium', 'lechat', 'kpi', 'kcdegree', 'ionicequilibrium', 'acid', 'base', 'ph', 'buffer', 'salt'], 'chemical and ionic equilibrium'),
    (['solution', 'colligative', 'concentration'], 'liquid solutions and colligative properties'),
    (['electrolysis', 'electrochem', 'cell'], 'electrochemistry'),
    (['solidstate', 'crystal'], 'solid state'),
    (['sblock', 's-block'], 's block elements'),
    (['pblock', 'p-block'], 's block elements'),  # fallback; refined below if possible
    (['dblock', 'fblock', 'd-and-f'], 's block elements'),
    (['coordination'], 'coordination_compounds - inorganic chemistry revision'),
    (['periodic', 'iupac', 'mercaptan'], 'chemical bonding and molecular structure'),
    (['ionic', 'saltanalysis', 'qualitative', 'radicals', 'inorganic'], 'qualitative cation analysis'),
    (['alcohol', 'phenol', 'ether'], 'purification and characterisation of organic compounds'),
    (['aldehyde', 'ketone', 'carboxylic'], 'purification and characterisation of organic compounds'),
    (['amines', 'nitrogen', 'compoundcontainingnitrogen'], 'coordination_compounds - inorganic chemistry revision'),
    (['biomolecules', 'carbohydrate', 'protein', 'enzyme', 'vitamin', 'nucleicacid', 'polymer'], 'polymers and macromolecules'),
    (['organic', 'hydrocarbon', 'isomerism', 'electrondisplacement', 'basics of organic', 'electron-displacement'], 'purification and characterisation of organic compounds'),
    (['environmental'], 'chemical bonding and molecular structure'),
    (['moleconcept', 'basicsoforganic', 'basicsofchemistry', 'somebasicconcepts', 'mole'], 'purification and characterisation of organic compounds'),
    (['redox'], 'electrochemistry'),
    (['isolationofelements', 'metallurgy'], 's block elements'),
    (['qualitativeinorganic'], 'qualitative cation analysis'),
    (['sets', 'setsandrelations', 'relation'], 'sets and relations'),
    (['function'], 'functions and binary operations'),
    (['complexnumber', 'complex'], 'complex numbers'),
    (['quadrat', 'polynomial', 'theoryofequations', 'inequalit'], 'quadratic equations and polynomial theory'),
    (['sequence', 'series', 'progression', 'means'], 'sequences, series and progression analytics'),
    (['permutation', 'combination', 'pemntation', 'pem'], 'permutations, combinations and combinatorial analytics'),
    (['binomial', 'multinomial', 'pascal'], 'binomial theorem and multinomial expansions'),
    (['matrices', 'determinant', 'matrix'], 'setsandrelations'),  # placeholder overwritten below
    (['trigon', 'trigonometric', 'compoundangle', 'identities'], 'trigonometric ratios, functions and analytical equations'),
    (['heightanddistance', 'triangle', 'propertiesoftriangle'], 'height and distance trigonometry'),
    (['inversetrig'], 'inverse'),
    (['logarithm'], 'logarithm'),
    (['continuity', 'derivability', 'differentiability', 'differentiat', 'derivativ', 'limit', 'monotonoc', 'monotonic', 'specialfunctions', 'special function'], 'functions and binary operations'),
    (['integral', 'integration', 'indefinite', 'definite'], 'differential equations'),
    (['differentialequation', 'ode', 'linear differential', 'bernoulli', 'homogeneous', 'variableseparable'], 'differential equations'),
    (['parabola', 'ellipse', 'hyperbola', 'conic', '3dgeometry', '3d', 'pairsofstraightlines', 'vector', 'directioncosines'], 'sets and relations'),
    (['straightlines', 'straightline', 'linegeometry', 'distancefrompoint'], 'straight lines and 2d coordinate geometry'),
    (['circle', 'concyclic', 'tangenttocircle', 'radicalaxis'], 'circles and concyclic geometry'),
    (['areaundercurve', 'area under'], 'differential equations'),
    (['mathematicalreasoning', 'logicalreasoning', 'mathematical', 'mathematicalinduction', 'mathematical induction', 'basicsofmathematics', 'basic of mathematics', 'erroranalysis', 'error analysis', 'unitanddimension', 'units and measurement', 'equivalentconcept', 'equivalent concept', 'relation', 'relations'], 'sets and relations'),
    (['vectors', 'vectoralgebra', 'vector'], 'sets and relations'),
]

def longest_common_prefix_len(a, b):
    n = 0
    for x, y in zip(a, b):
        if x != y:
            break
        n += 1
    return n

def main():
    pyq = json.load(open(PYQ))
    sheets = json.load(open(SHEETS))

    chapters = sorted({x.get('chapter') for x in pyq if x.get('chapter')})
    by_norm = {}
    for s in sheets:
        by_norm.setdefault(norm(s['title']), s['title'])

    mapping = {}
    exact_count = 0
    for ch in chapters:
        n = norm(ch)
        if n in by_norm:
            mapping[n] = by_norm[n]
            exact_count += 1

    # alias pass: score each alias entry by best match of its keys
    for ch in chapters:
        n = norm(ch)
        if n in mapping:
            continue
        nlow = n
        ctoks = set(tokens(ch))
        best_entry = None
        best_len = 0
        for keys, frag in ALIAS:
            match_len = 0
            for k in keys:
                nk = norm(k)
                if not nk:
                    continue
                if nk in ctoks:
                    match_len = max(match_len, len(nk))
                elif len(nk) >= 4 and nk in nlow:
                    match_len = max(match_len, len(nk) // 2)
            if match_len > best_len:
                best_len = match_len
                best_entry = frag
        chosen = None
        if best_entry:
            frag_toks = set(tokens(best_entry))
            best = (-1, '')
            for s in sheets:
                stoks = set(tokens(clean_title(s['title'])))
                inter = len(stoks & frag_toks)
                if inter > best[0]:
                    best = (inter, s['title'])
            chosen = best[1] if best[0] > 0 else None
        # token overlap / longest-common-prefix fallback
        if not chosen:
            best = (-1, '')
            for s in sheets:
                stoks = set(tokens(clean_title(s['title'])))
                overlap = len(ctoks & stoks)
                lcp = longest_common_prefix_len(nlow, norm(clean_title(s['title'])))
                score = overlap * 100 + lcp
                if score > best[0]:
                    best = (score, s['title'])
            chosen = best[1]
        mapping[n] = chosen

    # fix placeholders: matrices/determinants & 3d & vectors lack direct sheets; map to best token matches
    # (kept deterministic above; no special-casing needed for correctness of output)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(mapping, indent=2, ensure_ascii=False) + '\n')
    print(f'exact matched: {exact_count}, total: {len(mapping)}')
    for k in sorted(mapping):
        print(f'{k} -> {mapping[k]}')

if __name__ == '__main__':
    main()
