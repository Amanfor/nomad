# JEE Main Data Gaps & External Sources Sweep

Date: 2026-10-03. Purpose: find credible external sources whose data is NOT yet in the Nomad app, and rank what to mine next.

## What the app currently has (counts only)

- `public/all-concepts.json`: 416 concept objects, 411 unique chapter titles (subject spread: Maths/Physics/Chemistry full-chapter revision contexts, micro-sections).
- `public/pyq-database.json`: 8,455 questions. Subjects: Maths 3,274 / Physics 2,880 / Chemistry 2,301. Years: 2019 (1,157), 2021 (1,048), 2022 (958), 2023 (940), 2024 (749), 2020 (740), UNKNOWN (443), 2018 (280), 2017 (225), 2016 (207), 2004–2008 (~950 total), 2009–2012 (~375). 341 distinct chapter labels (many low-frequency/legacy names). Sources: mostly HF `ruh-ai/grafite`, `kj42/eval_jee`, `HF eQOURSE/jee-main-questions`, `soughed/jee-main-questions`; a vault chapter. **No 2025 or 2026 papers represented** (only 7 stray 2025 items seen via `PhysicsWallahAI/JEE-Main-2025-Math` in source labels).
- `public/formula-sheets.json`: 57 sheets / 54 unique titles. Coverage: Physics 30, Chemistry 17, Maths 10. Ratio vs 411 concept titles → most chapters lack a sheet.
- `public/media/`: 301 files, ~180 unique diagram stems (png + webp pairs).
- Practice menu (`src/components/NomadApp.tsx`): three modes — `quick practice` (10 random), `pyq · full-length`, `custom practice` (filter-built). No integer-vs-MCQ split, no assertion/reason or multi-correct tag separation, no difficulty or topic tag filter surfaced in UI.

## Sources found

Official / exam data

- NTA JEE Main site: https://jeemain.nta.nic.in
- NTA document archive (syllabus PDFs, answer keys, session notifications): https://jeemain.nta.nic.in/document-category/archive/page/11 and https://jeemain.nta.nic.in/documents
- NTA archive index, 2021 syllabus PDF link visible: https://nta.ac.in (parent portal)
- Careers360 NTA sample papers / notifications mirror: https://engineering.careers360.com/articles/jee-main-notification-pdf
- Vedantu sample papers (pattern breakdown): https://www.vedantu.com/jee-main/sample-papers
- Shiksha sample papers: https://www.shiksha.com/engineering/articles/jee-main-sample-papers-blogId-60815
- PW chapter-wise weightage analysis: https://www.pw.live/iit-jee/exams/jee-main-syllabus and weightage blog (vedantu equivalent): https://www.vedantu.com/jee-main/weightage
- myexams.ai chapter-wise weightage last 5 years: https://myexams.ai/jee-main/jee-main-chapter-wise-weightage

Wikipedia

- JEE–Main: https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Main (mode of exam, Paper 1 vs 2A/2B, 2024 syllabus reduction note)
- JEE–Advanced: https://en.wikipedia.org/wiki/Joint_Entrance_Examination_%E2%80%93_Advanced (syllabus section 6 with topic lists)
- JEE overview: https://en.wikipedia.org/wiki/Joint_Entrance_Examination

PYQ banks / archives (scrape candidates)

- JEE Archive: https://jeearchive.in
- Aakash JEE archive (15 yrs, 7500+ chapter-wise questions): https://www.aakash.ac.in/jee-archive
- MathonGo chapter-wise solutions: https://www.mathongo.com/iit-jee/jee-main-chapter-wise-questions-with-solutions
- Selfstudys chapter-wise PYQs 1983–2026: https://www.selfstudys.com/books/jee-previous-year-paper/english/chapter-wise
- eSaral chapter-wise PYQs: https://www.esaral.com/jee-main-previous-year-question-paper-chapter-wise-with-solution
- Byju's chapter-wise: https://byjus.com/jee/jee-main-chapter-wise-questions-and-solutions
- PW chapter-wise PYQ PDFs: https://store.pw.live/blogs/jee-exams/jee-main-chapter-wise-pyq
- Vedantu PYQs 2014–2026: https://www.vedantu.com/jee-main/previous-year-question-paper
- Allen JEE Advanced chapter-wise: https://allen.in/jee-advanced/chapter-wise-questions-with-solutions
- Scribd chapter-wise PYQ collection: https://www.scribd.com/document/1055863804/JEE-Main-Chapter-Wise-PYQs-1782563140189

Reddit (frequently asked patterns)

- r/JEENEETards high-weightage chapters thread: https://www.reddit.com/r/JEENEETards/comments/znyn9w/for_those_who_need_high_weightage_chapters_this
- r/JEENEETards "do high weightage chapters exist": https://www.reddit.com/r/JEE/comments/1groigj/do_high_weightage_chapters_exist
- r/JEENEETards toughest chapters: https://www.reddit.com/r/JEENEETards/comments/15zbsxi/top_5_toughest_chapters_in_each_subject_jee
- r/JEENEETards ideal/tough PYQ years: https://www.reddit.com/r/JEENEETards/comments/1g3yx59/which_years_pyqs_you_consider_ideal_or_tough_like
- r/JEE free chapter-wise PYQ PDF share: https://www.reddit.com/r/JEE/comments/11zolv0/jee_main_pyq_chapterwise_pdf_20192022
- r/JEENEETards chapter prerequisite list: https://www.reddit.com/r/JEENEETards/comments/11xcfw2/complete_list_of_prerequisites_for_every_chapter
- r/JEENEETards JEE Mains 2026 discussion (April shift): https://www.reddit.com/r/JEENEETards/comments/1sc80wh/4th_april_shift_2_jee_mains_2026_discussion_thread

## Missing data / gaps

Exam pattern / meta
- No 2025 & 2026 Main (Session 1/2) papers in PYQ DB. Huge gap: 2025 shifted to a new pattern; 2026 sessions have no entries at all.
- No integer/numerical vs single-correct vs multi-correct vs assertion-reason typing on questions.
- No JEE Advanced PYQs (only Main/AIEEE). Media/diagrams: 301 files exist but many high-value chapters uncovered.

Subjects / chapters repeatedly flagged high-weight (need deeper concept + formula coverage)
- Maths: Calculus (limits/continuity, definite integration, area under curve, differential equations), Matrices & Determinants, 3D Geometry + Vectors, Probability, Permutations & Combinations, Sets/Relations, Binomial Theorem, Quadratic Equations, Sequences & Series.
- Physics: Current Electricity, Rotational Motion, Kinetic Theory, Moving Charges & Magnetism, Electrostatics/Capacitance, Ray Optics/Wave Optics, Semiconductors, Modern Physics (atoms, nuclei), Thermal properties.
- Chemistry: Coordination Compounds (~150 PYQs already but concept sheet light), Chemical Bonding, Thermodynamics, Redox & Titrations, Equilibrium (chemical + ionic), Electrochemistry, Chemical Kinetics, Biomolecules, P-Block/Periodic trends, Organic mechanisms/GOC.

Toughest / trickiest per reddit + coaching consensus (concept-DB gap)
- Ionic Equilibrium & buffers, Chemical Bonding (MOT, hybridisation exceptions), Redox/titration equivalence — chemistry.
- Rotational mechanics toppling/COM, non-uniform circular motion, graphical modern physics — physics.
- Differential equations word problems, area under curve, probability pitfalls, matrices determinants — maths.

Formula sheets missing
- Only 54 unique titles covered. Maths has just 10 sheets → calculus, vectors, 3D, probability, matrices all missing.
- Chemistry 17 sheets → electrochemistry, chemical kinetics, equilibrium, organic name reactions largely missing.
- Physics 30 sheets → many covered, but optics quantitative + modern physics + semiconductor formulas incomplete.

Diagrams likely missing
- Optics (ray diagrams, wave interference), rotational motion free-body/toppling, LCR circuits phasors (some exist), organic reaction mechanisms, titration curves (one exists), hybridisation geometry, MOT diagrams, semiconductor band diagrams, nuclear decay curves.

Other gaps
- No "syllabus reduced portion" notes from 2023/2024 NTA revision surfaced in concepts.
- No high-weightage tagging on concepts/PYQs to drive a ranked daily queue.
- No links per concept → relevant PYQs (concept ↔ question graph).
- Practice UI lacks integer-type practice, difficulty, and chapter filter on mode buttons.

## Recommended next dump (priority order)

1. **2025 + 2026 JEE Main Session 1/2 question papers with solutions** — source: MathonGo/eSaral/PW 2025-2026 chapter-wise pages (URLs above); data type: PYQs + solutions. Closes the biggest year gap.
2. **Official NTA syllabus PDFs (2024–2026)** from jeemain.nta.nic.in/documents — data type: syllabus text; prune concept DB against reduced syllabus.
3. **PYQ chapter coverage for low-represented chapters** (denominator-named: e.g. only 1 PYQ for "Vector", "non-uniform-circular-motion", "quality-factor") — source: Selfstudys/eSaral/Byju's chapter-wise; data type: PYQs.
4. **Formula sheets for Maths (calculus, vectors, 3D, matrices, probability) and Chemistry (equilibrium, kinetics, electrochemistry, organic named reactions)** — source: coaching formula-sheet PDFs (Allen/Resonance/PW); data type: formulas.
5. **Chapter-wise weightage tables** (vedantu/myexams/pw last-5-years) — data type: metadata; add `weightage` field to concepts for prioritization.
6. **Diagram needs list→ generation**: ray optics ray diagrams, MOT diagrams, semiconductor band diagrams, LCR AC phasors (partially present), titration curves, organic mechanisms — data type: media (generate B&W diagrams matching existing media style).
7. **JEE Advanced archive** (Allen / Aakash 7500-question archive) — data type: PYQs (Advanced track, separate bank).
8. **Assertion-Reason & integer-type tagging pass** over existing PYQ DB by keyword/answer-pattern heuristics — data type: metadata on existing entries.
9. **Reddit thread mining** for "commonly asked tricky concepts" per chapter — data type: concept notes (micro-explanations tied to PYQs).
10. **Concept↔PYQ linking**: build index mapping each of 341 PYQ chapter labels to 411 concept titles — data type: internal graph (no new scraping needed).
