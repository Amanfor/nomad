# Content status — tracked record

Generated 2026-10-05 by `python3 scripts/audit_content.py`.
Regenerate after any change to `public/pyq-database.json`,
`public/all-concepts.json`, `src/data/context/` or the formula sheets.

## Questions — `public/pyq-database.json`

- **10152** questions · **8390** solved · **1762** unresolved (1623 empty, 139 too short)
- Solved but truncated at ingest (text ends mid-sentence): 97
- Repeated question texts kept (different years): 0

| subject | total | solved | unresolved |
|---|---:|---:|---:|
| Chemistry | 2823 | 2336 | 487 |
| Maths | 3810 | 3264 | 546 |
| Physics | 3519 | 2790 | 729 |

**Integrity: PASS** — unique ids: True, options≠4: 0, answer index out of range: 0, empty question text: 0, ingest-header residue: 0, null chapter/topic: 0, css/style residue: 0, garbage-line suspects: 0

### Unresolved solutions by chapter

This is the tracked list of what does **not** have a verified solution yet.
IDs of every unresolved question are in `sources/content-audit.json` → `questions.unresolved_ids`.

194 of 344 chapters still have unresolved questions:

| chapter | total | solved | unresolved |
|---|---:|---:|---:|
| Matrix and determinants | 109 | 5 | 104 |
| general | 67 | 0 | 67 |
| Probability | 201 | 150 | 51 |
| Thermodynamics | 134 | 89 | 45 |
| Ray Optics | 55 | 12 | 43 |
| ac-circuits-and-power-in-ac-circuits | 62 | 24 | 38 |
| Modern physics | 37 | 1 | 36 |
| Electrostatics | 132 | 97 | 35 |
| D and F Block Elements | 40 | 7 | 33 |
| Electrochemistry | 127 | 96 | 31 |
| Units and Measurements | 35 | 7 | 28 |
| P-block VA, VIA, VIIA elements | 31 | 3 | 28 |
| Current-Electricity | 145 | 118 | 27 |
| Structure-Of-Atom | 110 | 83 | 27 |
| Chemical-Bonding-And-Molecular-Structure | 130 | 104 | 26 |
| Coordination Compounds | 46 | 21 | 25 |
| Rotational motion | 26 | 1 | 25 |
| Sequences-And-Series | 171 | 150 | 21 |
| Binomial-Theorem | 127 | 106 | 21 |
| Mechanical Properties of Fluids | 30 | 10 | 20 |
| Motion in 1D | 25 | 5 | 20 |
| Pemutation and combination | 23 | 3 | 20 |
| Center of mass | 21 | 1 | 20 |
| Complex-Numbers | 129 | 110 | 19 |
| Inequalities and absolute value | 24 | 5 | 19 |
| Dual Nature of Matter | 20 | 1 | 19 |
| bohr's-model-and-hydrogen-spectrum | 20 | 1 | 19 |
| Quadratic-Equation-And-Inequalities | 126 | 108 | 18 |
| Wave-Optics | 90 | 72 | 18 |
| Work Power & Energy | 35 | 17 | 18 |
| EMI | 20 | 2 | 18 |
| Electric Current, Current Density And Drift Velocity | 19 | 1 | 18 |
| Biomolecules | 84 | 67 | 17 |
| Electric Charges And Coulomb'S Law | 18 | 1 | 17 |
| Waves | 100 | 84 | 16 |
| Some Basic Concepts Of Chemistry | 28 | 12 | 16 |
| Magnetic effects of current | 17 | 1 | 16 |
| Matrices-And-Determinants | 165 | 150 | 15 |
| Preparation-Methods-For-Both-Aldehydes-And-Ketones | 15 | 0 | 15 |
| Vector-Algebra | 178 | 164 | 14 |
| Electromagnetic-Waves | 98 | 84 | 14 |
| Statistics | 98 | 84 | 14 |
| Amines | 16 | 2 | 14 |
| Laws-Of-Motion | 75 | 62 | 13 |
| Differential Equations | 23 | 10 | 13 |
| Quadratic Equation and Inequalities | 21 | 8 | 13 |
| Chemical Kinetics | 16 | 3 | 13 |
| Chemical Equilibrium | 14 | 1 | 13 |
| Gravitational Potential And Gravitational Potential Energy | 14 | 1 | 13 |
| S-block | 14 | 1 | 13 |
| Oscillations | 13 | 0 | 13 |
| 3D-Geometry | 162 | 150 | 12 |
| Functions | 130 | 118 | 12 |
| Solutions | 88 | 76 | 12 |
| Height-And-Distance | 35 | 23 | 12 |
| Capacitance | 19 | 7 | 12 |
| D-And-F-Block-Elements | 155 | 144 | 11 |
| Organic Chemistry | 53 | 42 | 11 |
| Straight Lines | 29 | 18 | 11 |
| Properties Of Matter | 18 | 7 | 11 |
| Ellipse | 80 | 70 | 10 |
| Electromagnetic Induction | 16 | 6 | 10 |
| Kinetic Theory of Gases | 14 | 4 | 10 |
| Acceleration Due To Gravity And Its Variation | 15 | 6 | 9 |
| Alternating Current | 15 | 6 | 9 |
| Area under curve | 10 | 1 | 9 |
| Gravitation | 142 | 134 | 8 |
| Parabola | 92 | 84 | 8 |
| Center-Of-Mass | 51 | 43 | 8 |
| Ionic Equilibrium | 17 | 9 | 8 |
| Properties Of Triangle | 12 | 4 | 8 |
| Trigonometric-Functions-And-Equations | 9 | 1 | 8 |
| Definite-Integration | 157 | 150 | 7 |
| Circle | 124 | 117 | 7 |
| Area Under The Curves | 18 | 11 | 7 |
| Redox Reactions | 14 | 7 | 7 |
| E-M waves | 8 | 1 | 7 |
| Hyperbola | 57 | 51 | 6 |
| Resistance And Resistivity | 11 | 5 | 6 |
| Mechanical properties of solid | 8 | 2 | 6 |
| growth-and-decay-of-current | 7 | 1 | 6 |
| Electron-Displacement-Effect | 6 | 0 | 6 |
| Proteins-And-Enzymes | 6 | 0 | 6 |
| Practical-Organic-Chemistry | 50 | 45 | 5 |
| Magnetic-Properties-Of-Matter | 45 | 40 | 5 |
| Hydrocarbons | 40 | 35 | 5 |
| Haloalkanes and Haloarenes | 22 | 17 | 5 |
| Kinetic Theory Of Gases And Gas Laws | 22 | 17 | 5 |
| Semiconductor And P N Junction Diode | 10 | 5 | 5 |
| Magnetic effect of current | 9 | 4 | 5 |
| Mole concept | 6 | 1 | 5 |
| ac-generator-and-transformer | 5 | 0 | 5 |
| Sets-And-Relations | 54 | 50 | 4 |
| Redox-Reactions | 30 | 26 | 4 |
| Chemical Bonding and Molecular Structure | 16 | 12 | 4 |
| Inverse Trigonometric Functions | 15 | 11 | 4 |
| Indefinite integration | 11 | 7 | 4 |
| Ionic Equilibrium Acids Bases pH Scale and Buffer Solutions | 11 | 7 | 4 |
| Refraction at Curved Surfaces Lenses and Optical Instruments | 10 | 6 | 4 |
| Centre of Mass | 9 | 5 | 4 |
| Algebra | 7 | 3 | 4 |
| Differential Equation | 5 | 1 | 4 |
| Rc Circuit | 5 | 1 | 4 |
| alpha-particle-scattering-and-rutherford-model-of-atom | 5 | 1 | 4 |
| Coordination-Compounds | 150 | 147 | 3 |
| Periodic-Table-And-Periodicity | 91 | 88 | 3 |
| Mathematical-Reasoning | 81 | 78 | 3 |
| Hydrogen | 74 | 71 | 3 |
| Motion-In-A-Straight-Line | 64 | 61 | 3 |
| Trigonometric-Ratio-And-Identites | 38 | 35 | 3 |
| Aldehydes-Ketones-And-Carboxylic-Acids | 16 | 13 | 3 |
| Basics Of Organic Chemistry | 16 | 13 | 3 |
| Ionic Equilibrium Salt Hydrolysis and Solubility Product Ksp | 16 | 13 | 3 |
| Order Degree Formation and Variable Separable ODEs | 11 | 8 | 3 |
| Simple Harmonic Motion | 11 | 8 | 3 |
| Application Of Derivatives | 10 | 7 | 3 |
| Motion In A Plane | 10 | 7 | 3 |
| Electric Field And Electric Field Intensity | 9 | 6 | 3 |
| Electromagnetic Waves | 9 | 6 | 3 |
| Refraction TIR and Prism Optics | 9 | 6 | 3 |
| Nuclear Fission And Fusion And Binding Energy | 7 | 4 | 3 |
| Salt Analysis | 7 | 4 | 3 |
| Purification-Of-Organic-Compounds | 6 | 3 | 3 |
| Reflection Of Light | 6 | 3 | 3 |
| Alcohol, Phenol and Ethers | 5 | 2 | 3 |
| Real Gas | 5 | 2 | 3 |
| Hybridization-And-Vsepr-Theory | 4 | 1 | 3 |
| P-Block-Elements | 68 | 66 | 2 |
| Communication-Systems | 54 | 52 | 2 |
| Electronic-Devices | 51 | 49 | 2 |
| Surface-Chemistry | 42 | 40 | 2 |
| Polymers | 40 | 38 | 2 |
| Gaseous-State | 25 | 23 | 2 |
| Chemical Equilibrium Kp Kc Degree of Dissociation and Le Chatelier | 21 | 19 | 2 |
| Compounds-Containing-Nitrogen | 21 | 19 | 2 |
| Haloalkanes-And-Haloarenes | 16 | 14 | 2 |
| Environmental Chemistry | 15 | 13 | 2 |
| Alcohols, Phenols and Ethers | 13 | 11 | 2 |
| Isolation Of Elements | 10 | 8 | 2 |
| Linear Differential Equations Bernoulli and Orthogonal Trajectories | 9 | 7 | 2 |
| Degree Of Freedom And Law Of Equipartition Of Energy | 7 | 5 | 2 |
| Capacitor In Circuit | 6 | 4 | 2 |
| Error analysis | 5 | 3 | 2 |
| Parallel Plate Capacitor | 5 | 3 | 2 |
| Uniform Circular Motion | 5 | 3 | 2 |
| Carbohydrates | 3 | 1 | 2 |
| Properties,-Preparation-And-Uses-Of-Phenols | 3 | 1 | 2 |
| Vectors | 3 | 1 | 2 |
| Isomerism | 2 | 0 | 2 |
| States of Matter | 2 | 0 | 2 |
| Vitamins-And-Nucleic-Acids | 2 | 0 | 2 |
| Heat-And-Thermodynamics | 151 | 150 | 1 |
| Limits-Continuity-And-Differentiability | 150 | 149 | 1 |
| Atoms-And-Nuclei | 146 | 145 | 1 |
| Permutations-And-Combinations | 79 | 78 | 1 |
| Isolation-Of-Elements | 67 | 66 | 1 |
| Differentiation | 66 | 65 | 1 |
| Work-Power-And-Energy | 64 | 63 | 1 |
| Ionic-Equilibrium | 59 | 58 | 1 |
| Basics-Of-Organic-Chemistry | 52 | 51 | 1 |
| Inverse-Trigonometric-Functions | 49 | 48 | 1 |
| Displacement Current And Properties Of Em Waves | 28 | 27 | 1 |
| Sequences and Series | 22 | 21 | 1 |
| Circles | 18 | 17 | 1 |
| Lenses | 16 | 15 | 1 |
| Rigid Body Dynamics | 14 | 13 | 1 |
| Specific Heat Capacity, Calorimetry & Change Of State | 13 | 12 | 1 |
| Electric Potential Energy And Electric Potential | 11 | 10 | 1 |
| Mathematical Reasoning | 11 | 10 | 1 |
| Aldehydes Ketones and Carboxylic Acids | 9 | 8 | 1 |
| Capacitors With Dielectric | 9 | 8 | 1 |
| Electric Power And Heating Effect Of Current | 9 | 8 | 1 |
| Conic Sections | 8 | 7 | 1 |
| Reflection Plane and Spherical Mirrors | 8 | 7 | 1 |
| Triangles | 8 | 7 | 1 |
| Atomic Structure | 7 | 6 | 1 |
| Kepler'S Law And Universal Law Of Gravitation | 7 | 6 | 1 |
| Limits | 7 | 6 | 1 |
| properties,-preparation-and-uses-of-alcohols | 7 | 6 | 1 |
| Projectile Motion | 6 | 5 | 1 |
| Combination Of Capacitors | 5 | 4 | 1 |
| Electric Dipole | 5 | 4 | 1 |
| Periodic table | 5 | 4 | 1 |
| Relation | 5 | 4 | 1 |
| Sets | 5 | 4 | 1 |
| direction-cosines-and-direction-ratios-of-a-line | 5 | 4 | 1 |
| Electric Flux And Gauss Law | 3 | 2 | 1 |
| Chemistry-In-Everyday-Life | 2 | 1 | 1 |
| IUPAC and Structural Isomerism | 2 | 1 | 1 |
| Ideal Gas | 2 | 1 | 1 |
| Vector | 2 | 1 | 1 |
| Basic of Mathematics | 1 | 0 | 1 |
| Dipole-Moment | 1 | 0 | 1 |
| quality-factor | 1 | 0 | 1 |

### Year coverage

2019: 1153, 2021: 1046, 2026: 1014, 2022: 957, 2023: 939, 2024: 747, 2020: 739, 2025: 711, UNKNOWN: 443, 2018: 280, 2017: 225, 2016: 207, 2004: 200, 2005: 196, 2003: 192, 2002: 187, 2006: 137, 2007: 112, 2008: 108, 2011: 88, 2012: 85, 2010: 81, 2013: 81, 2014: 78, 2015: 71, 2009: 67, 2027: 4, 2028: 4

## Concepts — `public/all-concepts.json`

- chapter files: **68** · concepts: **574** (68 full-chapter + 506 atomic) · empty content: 0
- subject groups: Chemistry: 157, Mathematics: 124, Physics: 293
- files without a full-chapter concept: none
- concept groups without a source file: none
- vault files not in the repo: ['10_Coordination_Compounds_Cleaned.md', '10_Coordination_Compounds_Theory_Legacy.md']
- repo files not in the vault: none

## Formula sheets — `public/formula-sheets.json`

- **67** sheets for **68** chapters
- missing sheet: `43-ray-optics-questions-solutions-and-pyqs-full`

## Bundled banks — `src/data/questions.ts`

- MICRO_QUESTIONS: 47 questions, 0 without solution
- TARGET_QUESTIONS: 268 questions, 0 without solution
- css/style residue: 0

## Solver pipeline — `sources/solutions/`

- index.json total_missing: 1762 (in sync)
- batches exported: 30 · merged outputs in `out/`: 2 (120 answers)
- workflow: `python3 scripts/export_missing_solutions.py` → solve batches → `python3 scripts/merge_solutions.py sources/solutions/out/batch-NNN.json` → regenerate this record.

## Not yet ingested

- `vault/context/questions/`: **128** question markdown files — parser work frozen; these are NOT in `pyq-database.json` yet.
