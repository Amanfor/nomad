Chemistry Revision Context: Chapter 69 — Chemical Bonding & Molecular Structure


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/CHEMISTRY/Chemical Bonding/`, `PDFsam_merge.pdf`, `CBO-2_ResoSir_cUt6Kj9.pdf`, `CBO-4_ResoSir_qt0q96A.pdf`, and `11._CBO_APSP_E.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Inorganic & Physical Chemistry Core — Kossel-Lewis Octet Paradigm & Formal Charges ($q_f = V - L - \frac{1}{2}S$), Octet Failures (Hypovalent, Odd-Electron, Hypervalent Systems), Resonance Stabilization & Fractional Bond Order Formulations ($1 + \frac{\pi}{\sigma}$ in Oxoanions $\text{CO}_3^{2-}, \text{PO}_4^{3-}, \text{SO}_4^{2-}, \text{ClO}_4^-$), Valence Bond Theory (Directional Overlaps $\sigma$ vs. $\pi$, $s-s, s-p, p-p, d-p, d-d$), VSEPR Theory (Steric Repulsion Axioms $\text{lp-lp} > \text{lp-bp} > \text{bp-bp}$ Across S.N. 2 to 7), Comprehensive Hybridization Topologies ($sp, sp^2, sp^3, sp^3d, sp^3d^2, sp^3d^3$), Bent's Rule ($s$-Character Partitioning in TBP, Axial Weakness $P-\text{Cl}_{\text{ax}} > P-\text{Cl}_{\text{eq}}$), Drago's Rule (Inhibition of Hybridization in Heavy Period 3+ Hydrides $\text{PH}_3, \text{H}_2\text{S}$), Berry Pseudorotation, Multi-Center & Electron-Deficient Bonds (Diborane $3c-2e$ Banana Bonds, Polymeric $\text{BeCl}_2$, Coordinate Dimer $\text{Al}_2\text{Cl}_6$), $\pi$-Back Bonding Phenomena ($2p\pi-2p\pi$ vs. $2p\pi-3d\pi$, Lewis Acidity Inversion $\text{BI}_3 > \text{BBr}_3 > \text{BCl}_3 > \text{BF}_3$, Planarity of Trisilylamine $\text{N(SiH}_3)_3$), Hydrogen Bonding (Intermolecular vs. Intramolecular Chelation, Ice Hexagonal Open Lattice, Symmetrical $[        ext{F}\cdots\text{H}\cdots\text{F}]^-$), Molecular Orbital Theory (LCAO Principles, $s-p$ Mixing Inversion for $\le 14e^-$, Paramagnetism of $\text{B}_2$ and $\text{O}_2$, Complete Oxygen Series $\text{O}_2^{2+} \to \text{O}_2^{2-}$, Heteronuclear Diatomic Anomaly in $\text{CO} \to \text{CO}^+$), Fajan's Rules for Polarization (Cation Charge Density $\phi = z^+/r^+$, Anion Polarizability, Pseudo-Inert Gas $18e^-$ Core Effect in $\text{AgCl}$ vs. $\text{NaCl}$, Melting Point & Color Intensification Gradients), Dipole Moments (Vector Summation, $\text{NH}_3$ vs. $\text{NF}_3$ Constructive/Destructive Dipole Interference, Percentage Ionic Character), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Classical Bonding Paradigms, Formal Charges & Resonance


### 1.1 Kossel-Lewis Approach & Formal Charge Analysis


The driving force for chemical bond formation is the minimization of potential energy and the attainment of a stable noble gas electronic configuration ($ns^2 np^6$, octet rule).


1. **Formal Charge Formulation ($q_f$):**
   The formal charge of an atom in a polyatomic molecule or ion is the difference between the valence electrons of the isolated neutral atom and the electrons assigned to it in the Lewis dot structure:
   $$\mathbf{q_f = V - L - \frac{1}{2}S}$$
   where:
   * $V = \text{Total number of valence electrons in the free neutral atom}$.
   * $L = \text{Total number of non-bonding electrons (lone pair electrons)}$.
   * $S = \text{Total number of shared bonding electrons}$.


* **Example (Ozone Molecule, $\text{O}_3$):**
  Structure: $\text{O}_1 = \text{O}_2 - \text{O}_3^-$
  * Central $\text{O}_2$ (1 lone pair, 3 bonds): $q_f = 6 - 2 - \frac{1}{2}(6) = \mathbf{+1}$.
  * Double-bonded $\text{O}_1$ (2 lone pairs, 2 bonds): $q_f = 6 - 4 - \frac{1}{2}(4) = \mathbf{0}$.
  * Single-bonded $\text{O}_3$ (3 lone pairs, 1 bond): $q_f = 6 - 6 - \frac{1}{2}(2) = \mathbf{-1}$.


---


### 1.2 Limitations of the Octet Rule


1. **Incomplete Octet / Hypovalent Molecules ($< 8$ electrons):**
   Central atom has fewer than 8 valence electrons:
   $$\text{LiCl} (2e^-), \quad \text{BeH}_2 (4e^-), \quad \text{BeCl}_2 (4e^-), \quad \text{BF}_3 (6e^-), \quad \text{AlCl}_3 (6e^-)$$
   * These act as **Lewis Acids** (electron pair acceptors).


2. **Odd-Electron Molecules:**
   Possess an unpaired electron, causing paramagnetism:
   $$\text{NO} (11\text{ valence } e^-), \quad \text{NO}_2 (17\text{ valence } e^-), \quad \text{ClO}_2 (19\text{ valence } e^-)$$
   * $\text{NO}_2$ dimerizes spontaneously to diamagnetic $\text{N}_2\text{O}_4$ to complete its octet.


3. **Expanded Octet / Hypervalent Molecules ($> 8$ electrons):**
   Elements of Period 3 and beyond utilize vacant low-lying $d$-orbitals:
   $$\text{PCl}_5 (10e^-), \quad \text{SF}_6 (12e^-), \quad \text{IF}_7 (14e^-), \quad \text{H}_2\text{SO}_4 (12e^-), \quad \text{XeF}_2, \text{XeF}_4$$


---


### 1.3 Resonance Theory & Fractional Bond Orders


When a single Lewis structure cannot adequately account for the observed physical properties (identical bond lengths, dipole moments, thermochemical stability) of a molecule, the actual molecule is represented as a **Resonance Hybrid** of two or more canonical contributing structures:


1. **Resonance Energy (R.E.):**
   $$\mathbf{\text{R.E.} = E_{\text{actual hybrid}} - E_{\text{most stable canonical contributor}}}$$
   *(Resonance always stabilizes a molecule and lowers its potential energy).*


2. **Fractional Bond Order Formulation for Symmetric Oxoanions:**
   In symmetric resonance structures where all peripheral bonds are equivalent:
   $$\mathbf{\text{Bond Order (B.O.)} = 1 + \frac{\text{Total Number of } \pi\text{-Bonds}}{\text{Total Number of } \sigma\text{-Bonds}} = \frac{\text{Total Shared Bonds between atoms}}{\text{Total Number of Resonating Positions}}}$$


* **Canonical Applications in JEE:**
  * **Carbonate Ion ($\text{CO}_3^{2-}$):** $3$ $\sigma$-bonds, $1$ $\pi$-bond $\implies \text{B.O.} = 1 + \frac{1}{3} = \mathbf{1.33}$ (Formal charge on each $\text{O} = -2/3$).
  * **Phosphate Ion ($\text{PO}_4^{3-}$):** $4$ $\sigma$-bonds, $1$ $\pi$-bond $\implies \text{B.O.} = 1 + \frac{1}{4} = \mathbf{1.25}$ (Formal charge on each $\text{O} = -3/4$).
  * **Sulfate Ion ($\text{SO}_4^{2-}$):** $4$ $\sigma$-bonds, $2$ $\pi$-bonds $\implies \text{B.O.} = 1 + \frac{2}{4} = \mathbf{1.50}$ (Formal charge on each $\text{O} = -2/4 = -0.5$).
  * **Perchlorate Ion ($\text{ClO}_4^-$):** $4$ $\sigma$-bonds, $3$ $\pi$-bonds $\implies \text{B.O.} = 1 + \frac{3}{4} = \mathbf{1.75}$ (Formal charge on each $\text{O} = -1/4 = -0.25$).
  * **Benzene ($\text{C}_6\text{H}_6$):** $\text{B.O.} = 1.50$ (All $\text{C}-\text{C}$ bond lengths $= 1.39\text{ \AA}$, intermediate between single $1.54\text{ \AA}$ and double $1.34\text{ \AA}$).


---


## 2. Valence Bond Theory & Orbital Overlapping


### 2.1 Overlap Mechanics: $\sigma$ vs. $\pi$ Bonds


A covalent bond forms by the pairing of electrons with anti-parallel spins residing in overlapping half-filled atomic orbitals:


1. **Sigma ($\sigma$) Bond (Axial / Head-on Overlap):**
   Formed by end-to-end overlap along the internuclear axis ($z$-axis by standard convention):
   * Overlap types: $s-s, \; s-p_z, \; p_z-p_z$.
   * Features: Spherically symmetric about the bond axis; allows **free rotation**; maximum overlap extent $\implies$ **Stronger bond**.


2. **Pi ($\pi$) Bond (Lateral / Sideways Overlap):**
   Formed by parallel, sideways overlap of unhybridized $p$ or $d$ orbitals perpendicular to the internuclear axis:
   * Overlap types: $p_x-p_x, \; p_y-p_y, \; d_{xy}-p_y, \; d_{xz}-d_{xz}$.
   * Features: Electron density concentrated above and below the nodal plane; **hinders free rotation** (leads to geometrical cis-trans isomerism); weaker than $\sigma$-bond.


* **Strength Hierarchy of Overlapping Orbitals:**
  $$\mathbf{2p-2p (\sigma) > 2s-2p (\sigma) > 2s-2s (\sigma)}$$
  $$\mathbf{2p-2p (\pi) > 2p-3p (\pi) > 3p-3p (\pi)}$$
  *(Overlap strength increases with directional character ($p > s$) and smaller principal quantum number $n$).*


---


## 3. VSEPR Theory & Comprehensive Hybridization Architecture


![VSEPR Molecular Geometries and Lone Pair Repulsions](/media/vsepr_molecular_geometries_and_lone_pair_repulsions.webp)
*Description: Two-panel structural geometry graphic: (Panel A) VSEPR steric geometries across Steric Numbers 4 to 6 illustrating progressive lone pair angle compression ($        ext{CH}_4         o         ext{NH}_3         o         ext{H}_2        ext{O}$, See-saw, T-shaped, Square Planar); (Panel B) Bent's Rule and axial vs. equatorial hybrid orbital $s$-character distribution in Trigonal Bipyramidal ($sp^3d$) geometry.*


### 3.1 VSEPR Repulsion Postulates


The spatial geometry of a molecule depends entirely on the total number of valence shell electron pairs (bonding pairs and lone pairs) surrounding the central atom:


$$\mathbf{\text{Repulsion Energy Hierarchy: } \quad lp-lp > lp-bp > bp-bp}$$


* **Multiple Bond Repulsion:** $\text{Triple Bond} > \text{Double Bond} > \text{Single Bond}$.
* A lone pair occupies more spatial volume around the central nucleus because it is attracted by only one positive nucleus, whereas a bonding pair is localized between two nuclei.


---


### 3.2 Steric Number (S.N.) & Hybridization Matrix


$$\mathbf{\text{Steric Number (S.N.)} = (\text{Number of } \sigma\text{-bonds}) + (\text{Number of Lone Pairs on Central Atom})}$$


| S.N. | Hybridization | Orbital Components | Electronic Geometry | Molecular Shape (by Lone Pairs) | Ideal Bond Angle | Canonical Examples |
| :---: | :---: | :--- | :--- | :--- | :---: | :--- |
| **2** | $\mathbf{sp}$ | $s + p_z$ | Linear | Linear ($0\text{ lp}$) | $180^\circ$ | $\text{BeCl}_2, \text{CO}_2, \text{HCN}, \text{C}_2\text{H}_2$ |
| **3** | $\mathbf{sp^2}$ | $s + p_x + p_y$ | Trigonal Planar | Trigonal Planar ($0\text{ lp}$)<br>Bent / V-shaped ($1\text{ lp}$) | $120^\circ$<br>$< 120^\circ$ | $\text{BF}_3, \text{SO}_3, \text{NO}_3^-$<br>$\text{SO}_2, \text{NO}_2^-, \text{O}_3$ ($119^\circ$) |
| **4** | $\mathbf{sp^3}$ | $s + p_x + p_y + p_z$ | Tetrahedral | Tetrahedral ($0\text{ lp}$)<br>Trigonal Pyramidal ($1\text{ lp}$)<br>Bent / Angular ($2\text{ lp}$) | $109^\circ 28'$<br>$107^\circ$<br>$104.5^\circ$ | $\text{CH}_4, \text{CCl}_4, \text{NH}_4^+$<br>$\text{NH}_3, \text{PCl}_3, \text{H}_3\text{O}^+$<br>$\text{H}_2\text{O}, \text{OF}_2, \text{SCl}_2, \text{NH}_2^-$ |
| **5** | $\mathbf{sp^3d}$ | $(s + p_x + p_y) + (p_z + d_{z^2})$ | Trigonal Bipyramidal | Trigonal Bipyramidal ($0\text{ lp}$)<br>See-Saw ($1\text{ lp}$, eq)<br>T-Shaped ($2\text{ lp}$, eq)<br>Linear ($3\text{ lp}$, eq) | $120^\circ \text{ eq}, 90^\circ \text{ ax}$<br>$117^\circ, 89^\circ$<br>$87.5^\circ$<br>$180^\circ$ | $\text{PCl}_5, \text{PF}_5, \text{AsF}_5$<br>$\text{SF}_4, \text{SeF}_4$<br>$\text{ClF}_3, \text{BrF}_3, \text{ICl}_3$<br>$\text{XeF}_2, \text{I}_3^-, \text{ICl}_2^-$ |
| **6** | $\mathbf{sp^3d^2}$ | $(s + p_x + p_y + p_z) + (d_{x^2-y^2} + d_{z^2})$ | Octahedral | Octahedral ($0\text{ lp}$)<br>Square Pyramidal ($1\text{ lp}$)<br>Square Planar ($2\text{ lp}$, trans) | $90^\circ$<br>$< 90^\circ$<br>$90^\circ$ | $\text{SF}_6, [\text{AlF}_6]^{3-}, \text{PCl}_6^-$<br>$\text{BrF}_5, \text{IF}_5, \text{XeOF}_4$<br>$\text{XeF}_4, \text{ICl}_4^-$ |
| **7** | $\mathbf{sp^3d^3}$ | $s + p_x + p_y + p_z + (d_{xy} + d_{x^2-y^2} + d_{z^2})$ | Pentagonal Bipyramidal | Pentagonal Bipyramidal ($0\text{ lp}$)<br>Distorted Octahedral ($1\text{ lp}$) | $72^\circ \text{ eq}, 90^\circ \text{ ax}$<br>Variable | $\text{IF}_7$<br>$\text{XeF}_6, [\text{SbCl}_6]^{3-}$ |


---


### 3.3 Bent's Rule & Ligand Distribution in TBP ($sp^3d$)


**Bent's Rule Formulation:** Central atom hybrid orbitals directed toward **more electronegative substituents** possess **less $s$-character** (and more $p$-character). Conversely, hybrid orbitals directed toward **lone pairs and electropositive groups** possess **more $s$-character**.


* **Decomposition of $sp^3d$ Hybrid Orbitals:**
  * **3 Equatorial Hybrid Orbitals:** Formed from $s + p_x + p_y$ (Planar $sp^2$ trigonal hybrid, **$33.3\%$ $s$-character**, bond angle $120^\circ$).
  * **2 Axial Hybrid Orbitals:** Formed from $p_z + d_{z^2}$ (Linear $pd$ hybrid, **$0\%$ $s$-character**, bond angle $180^\circ$).
* **Consequences:**
  1. Lone pairs and bulky double bonds ($=O$) strictly occupy **equatorial positions** where $s$-character is concentrated and repulsion is minimal.
  2. Highly electronegative halogen atoms (especially $\text{F}$) strictly occupy **axial positions** ($0\% s$-character).
  3. **Axial Bond Length Weakness:** In $\text{PCl}_5$, axial bonds experience greater repulsions from 3 equatorial bonds at $90^\circ$:
     $$\mathbf{d(\text{P}-\text{Cl}_{\text{axial}}) = 214\text{ pm} > d(\text{P}-\text{Cl}_{\text{equatorial}}) = 202\text{ pm}}$$
     *(On heating, $\text{PCl}_5$ readily dissociates into $\text{PCl}_3 + \text{Cl}_2$ by cleaving the two weaker axial bonds).*
  4. In $\text{PCl}_3\text{F}_2$: The two more electronegative $\text{F}$ atoms occupy the two axial positions, yielding a non-polar molecule with $\mathbf{\mu = 0}$!


---


### 3.4 Drago's Rule (Inhibition of Hybridization)


When a central atom from **Period 3 or heavier** (Group 15: $\text{P, As, Sb}$; Group 16: $\text{S, Se, Te}$) is bonded to substituents with **low electronegativity ($\text{EN} \le 2.5$, e.g., $\text{H}$)**, hybridization does **not** occur:
* The energy difference between the valence $s$ and $p$ orbitals is too large for effective mixing.
* The lone pair remains inactive in an almost **pure $s$-orbital** ($90 - 100\%$ $s$-character).
* Bonding involves almost **pure unhybridized $p$-orbitals** mutually perpendicular at $\sim 90^\circ$:
  $$\mathbf{\angle \text{H}-\text{P}-\text{H} = 93.5^\circ, \quad \angle \text{H}-\text{As}-\text{H} = 91.8^\circ, \quad \angle \text{H}-\text{S}-\text{H} = 92.1^\circ, \quad \angle \text{H}-\text{Se}-\text{H} = 91^\circ}$$
* **Consequence on Basicity:** The lone pair in $\text{PH}_3$ resides in a spherically symmetric, non-directional $s$-orbital held close to the phosphorus nucleus, making $\text{PH}_3$ an **extremely weak Lewis base** compared to $\text{NH}_3$ (where the lone pair resides in a directional $sp^3$ lobe).


---


## 4. Back Bonding & Multi-Center Electron-Deficient Bonds


### 4.1 $\pi$-Back Bonding Phenomena


Occurs when one bonded atom has a filled orbital (lone pair) and the adjacent bonded atom has an empty orbital (vacant $p$ or $d$ subshell) of compatible symmetry:


1. **$2p\pi - 2p\pi$ Back Bonding in Boron Trihalides (Lewis Acidity Inversion):**
   * Boron has an empty $2p$ orbital. The halogens have filled $np$ lone pair orbitals.
   * Overlap efficiency: $2p-2p (\text{B}-\text{F}) \gg 2p-3p (\text{B}-\text{Cl}) > 2p-4p (\text{B}-\text{Br}) > 2p-5p (\text{B}-\text{I})$.
   * Back bonding delocalizes electron density back into Boron's empty orbital, partially fulfilling its octet and reducing its electron deficiency.
   * **Lewis Acid Strength Order:**
     $$\mathbf{\text{BI}_3 > \text{BBr}_3 > \text{BCl}_3 > \text{BF}_3}$$
     *(Contrary to electronegativity predictions, $\text{BF}_3$ is the weakest Lewis acid because back bonding is most effective).*


2. **$2p\pi - 3d\pi$ Back Bonding (Planarity of Trisilylamine):**
   * **Trimethylamine, $\text{N(CH}_3)_3$:** Carbon lacks vacant $d$-orbitals $\implies$ Nitrogen lone pair is localized $\implies$ **$sp^3$ Pyramidal**, basic.
   * **Trisilylamine, $\text{N(SiH}_3)_3$:** Silicon possesses empty low-lying $3d$-orbitals. The nitrogen lone pair delocalizes into the empty $3d$-orbitals of Silicon via $2p\pi-3d\pi$ back bonding $\implies$ Nitrogen becomes **$sp^2$ Trigonal Planar ($120^\circ$)**, virtually non-basic!


---


### 4.2 Multi-Center Electron-Deficient Bonding ($3c-2e$ and $3c-4e$)


1. **Diborane ($\text{B}_2\text{H}_6$ — $3c-2e$ Banana Bond):**
   * Monomeric $\text{BH}_3$ has only 6 valence electrons (hypovalent). To stabilize, it dimerizes to $\text{B}_2\text{H}_6$.
   * **Bonding Anatomy:**
     * **4 Terminal $\text{B}-\text{H}_t$ Bonds:** Normal two-center two-electron ($2c-2e$) covalent bonds. All lie in a single plane ($1.19\text{ \AA}$).
     * **2 Bridging $\text{B}-\text{H}_b-\text{B}$ Bonds:** Three-center two-electron ($3c-2e$) bent "banana bonds" lying in a plane perpendicular to the terminal plane ($1.33\text{ \AA}$).
     * Bridging $\text{B}-\text{H}_b$ bonds are **longer, weaker, and more easily cleaved** than terminal bonds.


2. **Dimeric Aluminium Chloride ($\text{Al}_2\text{Cl}_6$ — $3c-4e$ Coordinate Dimer):**
   * $\text{Al}_2\text{Cl}_6$ is **NOT electron-deficient**!
   * Each Aluminium achieves an octet by accepting a lone pair from a bridging Chlorine via a coordinate dative bond. The bridge is a **$3c-4e$ bond**.
   * In contrast, trimethylaluminium $\text{Al}_2(\text{CH}_3)_6$ contains bridging methyl groups forming **$3c-2e$ bonds** because carbon has no lone pairs to donate.


---


## 5. Hydrogen Bonding & Intermolecular Forces


### 5.1 Conditions, Energetics & Classifications


A hydrogen bond is an electrostatic attractive force between a hydrogen atom covalently bonded to a strongly electronegative, small atom ($F, O, N$) and a lone pair on an adjacent electronegative atom:


$$\mathbf{-X^{\delta-} - \text{H}^{\delta+} \;\;\cdots\;\; :Y^{\delta-} \quad (X, Y \in \{\text{F, O, N}\})}$$


* **Strength:** $10 - 40\text{ kJ mol}^{-1}$ (Order of strength: $\text{F}-\text{H}\cdots\text{F} > \text{O}-\text{H}\cdots\text{O} > \text{N}-\text{H}\cdots\text{N}$).
* **Symmetrical Hydrogen Bonding in Bifluoride Ion ($[\text{F}-\text{H}-\text{F}]^-$ in $\text{KHF}_2$):**
  The hydrogen atom is positioned exactly halfway between the two fluorine atoms ($d = 1.13\text{ \AA}$). Bond energy is exceptionally high ($\sim 160\text{ kJ/mol}$, comparable to a covalent bond!). Note: $\text{KHCl}_2$ does not exist because Chlorine cannot form strong H-bonds.


---


### 5.2 Intermolecular vs. Intramolecular H-Bonding


1. **Intermolecular Hydrogen Bonding (Between Separate Molecules):**
   * Causes molecular association, leading to **high boiling point, high viscosity, high surface tension, and high water solubility**.
   * *Examples:* $\text{H}_2\text{O}$ (b.p. $100^\circ\text{C}$ vs. $\text{H}_2\text{S}$ $-60^\circ\text{C}$), $\text{HF}$ (b.p. $19.5^\circ\text{C}$ vs. $\text{HCl}$ $-85^\circ\text{C}$), $p$-nitrophenol.


2. **Intramolecular Hydrogen Bonding (Chelation Within the Same Molecule):**
   * Occurs when donor and acceptor groups are present in the same molecule, forming a stable 5- or 6-membered chelate ring.
   * Prevents intermolecular association $\implies$ **lower boiling point, lower melting point, higher volatility, and lower water solubility**.
   * *Classic Comparison:*
     * **$o$-Nitrophenol:** Intramolecular H-bonding $\implies$ Steam volatile, lower boiling point.
     * **$p$-Nitrophenol:** Intermolecular H-bonding $\implies$ Non-volatile, higher boiling point, separable by steam distillation!


3. **Anomalous Density & Open Hexagonal Cage Structure of Ice:**
   In ice, each oxygen atom is tetrahedrally surrounded by four other oxygen atoms via two covalent $\text{O}-\text{H}$ bonds and two $\text{O}\cdots\text{H}$ hydrogen bonds, creating an open cage-like framework with large interstitial voids.
   * Upon melting ($0^\circ\text{C} \to 4^\circ\text{C}$), hydrogen bonds collapse, voids fill, and **density increases to a maximum at $4^\circ\text{C}$ ($277.15\text{ K}, \; \rho = 1.000\text{ g/cm}^3$)**.


---


## 6. Molecular Orbital Theory (MOT)


![MOT Energy Level Diagrams and Magnetic Analytics](/media/mot_energy_level_diagrams_and_magnetic_analytics.webp)
*Description: Two-panel quantum bonding graphic: (Panel A) Molecular orbital energy level splitting (LCAO) contrasting $s-p$ mixing ($\le 14e^-$, where $\pi 2p$ lies below $\sigma 2p_z$) against normal ordering ($> 14e^-$, where $\sigma 2p_z$ lies below $\pi 2p$); (Panel B) Oxygen species bond order, bond length, and magnetism spectrum across $        ext{O}_2^{2+},         ext{O}_2^+,         ext{O}_2,         ext{O}_2^-,         ext{O}_2^{2-}$.*


### 6.1 LCAO Principles & Energy Level Sequences


Atomic orbitals combine linearly (LCAO) to form **Bonding Molecular Orbitals (BMO, $\sigma, \pi$)** of lower energy and **Antibonding Molecular Orbitals (ABMO, $\sigma^*, \pi^*$)** of higher energy containing nodal planes.


1. **For Diatomic Species with $\le 14$ Electrons ($Z \le 7$: $\text{B}_2, \text{C}_2, \text{N}_2$ — With $s-p$ Mixing):**
   Strong repulsion between $\sigma 2s$ and $\sigma 2p_z$ orbitals pushes $\sigma 2p_z$ higher in energy, placing it above the degenerate $\pi 2p$ pair:
   $$\mathbf{\sigma 1s < \sigma^* 1s < \sigma 2s < \sigma^* 2s < (\pi 2p_x = \pi 2p_y) < \sigma 2p_z < (\pi^* 2p_x = \pi^* 2p_y) < \sigma^* 2p_z}$$


2. **For Diatomic Species with $> 14$ Electrons ($Z > 7$: $\text{O}_2, \text{F}_2$ — Without $s-p$ Mixing):**
   Large energy separation between $2s$ and $2p$ prevents mixing; normal ordering holds:
   $$\mathbf{\sigma 1s < \sigma^* 1s < \sigma 2s < \sigma^* 2s < \sigma 2p_z < (\pi 2p_x = \pi 2p_y) < (\pi^* 2p_x = \pi^* 2p_y) < \sigma^* 2p_z}$$


---


### 6.2 Bond Order & Magnetic Properties


$$\mathbf{\text{Bond Order (B.O.)} = \frac{N_b - N_a}{2}}$$


* $\text{B.O.} > 0 \implies$ Stable bound species; $\text{B.O.} = 0 \implies$ Unbound / cannot exist ($\text{He}_2, \text{Be}_2, \text{Ne}_2$).
* $\text{Bond Energy} \propto \text{Bond Order} \propto \frac{1}{\text{Bond Length}}$.
* **Paramagnetism:** Presence of one or more unpaired electrons in molecular orbitals.
  * **$\text{B}_2$ ($10e^-$):** $(\pi 2p_x^1 = \pi 2p_y^1) \implies$ **Paramagnetic** ($2$ unpaired electrons, $\text{B.O.} = 1$).
  * **$\text{C}_2$ ($12e^-$):** $(\pi 2p_x^2 = \pi 2p_y^2) \implies$ **Diamagnetic** (Both bonds in $\text{C}_2$ are $\pi$-bonds, no $\sigma$-bond!).
  * **$\text{N}_2$ ($14e^-$):** $\text{B.O.} = 3.0$, diamagnetic.
  * **$\text{O}_2$ ($16e^-$):** $(\pi^* 2p_x^1 = \pi^* 2p_y^1) \implies$ **Paramagnetic** ($2$ unpaired electrons in antibonding orbitals, $\text{B.O.} = 2$). VBT completely failed to explain oxygen's paramagnetism!


---


### 6.3 Comprehensive Oxygen Series Hierarchy


$$\mathbf{\text{O}_2^{2+} \; (14e^-) > \text{O}_2^+ \; (15e^-) > \text{O}_2 \; (16e^-) > \text{O}_2^- \; (17e^-) > \text{O}_2^{2-} \; (18e^-)}$$


| Species | Number of Electrons | MO Configuration (Valence) | Bond Order | Magnetic Nature | Bond Length (pm) |
| :--- | :---: | :--- | :---: | :--- | :---: |
| **$\text{O}_2^{2+}$ (Perdioxygenyl)** | $14$ | $\sigma 2p_z^2 \, (\pi 2p_x^2 = \pi 2p_y^2)$ | **$3.0$** | Diamagnetic ($0\text{ unpaired}$) | $112$ |
| **$\text{O}_2^+$ (Dioxygenyl)** | $15$ | $\dots (\pi^* 2p_x^1 = \pi^* 2p_y^0)$ | **$2.5$** | Paramagnetic ($1\text{ unpaired}$) | $118$ |
| **$\text{O}_2$ (Dioxygen)** | $16$ | $\dots (\pi^* 2p_x^1 = \pi^* 2p_y^1)$ | **$2.0$** | Paramagnetic ($2\text{ unpaired}$) | $121$ |
| **$\text{O}_2^-$ (Superoxide)** | $17$ | $\dots (\pi^* 2p_x^2 = \pi^* 2p_y^1)$ | **$1.5$** | Paramagnetic ($1\text{ unpaired}$) | $128$ |
| **$\text{O}_2^{2-}$ (Peroxide)** | $18$ | $\dots (\pi^* 2p_x^2 = \pi^* 2p_y^2)$ | **$1.0$** | Diamagnetic ($0\text{ unpaired}$) | $149$ |


* **Stability & Bond Dissociation Energy:** $\mathbf{\text{O}_2^{2+} > \text{O}_2^+ > \text{O}_2 > \text{O}_2^- > \text{O}_2^{2-}}$.
* **Bond Length Hierarchy:** $\mathbf{\text{O}_2^{2+} < \text{O}_2^+ < \text{O}_2 < \text{O}_2^- < \text{O}_2^{2-}}$.


---


### 6.4 Heteronuclear Diatomic Anomaly: $        ext{CO}         o         ext{CO}^+$


* In carbon monoxide ($\text{CO}$, $14e^-$), the highest occupied molecular orbital (HOMO, $\sigma 2s^*$) possesses slight **antibonding character** due to mixing with carbon $2s/2p$.
* When $\text{CO}$ is ionized to $\text{CO}^+$ ($13e^-$), the electron is removed from this weakly antibonding orbital!
* **Consequence:**
  $$\mathbf{\text{B.O.}(\text{CO}^+) \approx 3.5 > \text{B.O.}(\text{CO}) = 3.0}$$
  $$\mathbf{d(\text{C}-\text{O} \text{ in } \text{CO}^+) = 1.115\text{ \AA} < d(\text{C}-\text{O} \text{ in } \text{CO}) = 1.128\text{ \AA}}$$
  *(Bond strength increases and bond length shortens upon ionizing $\text{CO}$ to $\text{CO}^+$).*


---


## 7. Fajan's Rules for Polarization & Covalent Character


![Fajan's Rules Polarization and Dipole Moments](/media/fajans_rules_polarization_and_dipole_moments.webp)
*Description: Two-panel physical property graphic: (Panel A) Fajan's Rules polarization mechanism showing cationic distortion of anion electron cloud, pseudo-inert gas $18e^-$ core effect, and solubility/color gradients; (Panel B) Vector dipole moment resolution demonstrating constructive vs. destructive alignment in $        ext{NH}_3$ vs. $        ext{NF}_3$ and cis/trans geometric isomers.*


No chemical bond is $100\%$ ionic or $100\%$ covalent. When a cation approaches an anion, the cation attracts the anion's electron cloud while repelling its nucleus, causing **polarization (distortion)** of the anion:


$$\mathbf{\text{Covalent Character} \propto \text{Polarization} \propto \text{Polarizing Power of Cation} \times \text{Polarizability of Anion}}$$


### 7.1 Governing Postulates of Fajan's Rules


1. **Small Size of Cation:**
   Smaller cation $\implies$ higher ionic potential / charge density $\mathbf{\phi = \frac{z^+}{r^+}} \implies$ greater polarizing power.
   $$\mathbf{\text{Covalency: } \text{LiCl} > \text{NaCl} > \text{KCl} > \text{RbCl} > \text{CsCl}}$$
   $$\mathbf{\text{BeCl}_2 > \text{MgCl}_2 > \text{CaCl}_2 > \text{SrCl}_2 > \text{BaCl}_2}$$


2. **Large Size of Anion:**
   Larger anion $\implies$ valence electrons are held loosely far from nucleus $\implies$ easily deformed.
   $$\mathbf{\text{Covalency: } \text{LiI} > \text{LiBr} > \text{LiCl} > \text{LiF}}$$
   $$\mathbf{\text{AgI} > \text{AgBr} > \text{AgCl} > \text{AgF}}$$


3. **High Charge on Cation or Anion:**
   Higher charge increases electrostatic deformation forces:
   $$\mathbf{\text{Covalency: } \text{SnCl}_4 > \text{SnCl}_2, \quad \text{PbCl}_4 > \text{PbCl}_2, \quad \text{FeCl}_3 > \text{FeCl}_2, \quad \text{AlCl}_3 > \text{MgCl}_2 > \text{NaCl}}$$


4. **Pseudo-Inert Gas Configuration ($18e^-$ Outer Core) Effect:**
   Cations possessing an outer electronic configuration of **$ns^2 np^6 nd^{10}$** (e.g., $\text{Cu}^+, \text{Ag}^+, \text{Au}^+, \text{Zn}^{2+}, \text{Cd}^{2+}, \text{Hg}^{2+}$) exert **significantly greater polarizing power** than cations of comparable radius possessing a noble gas configuration ($ns^2 np^6$, e.g., $\text{Na}^+, \text{K}^+, \text{Ca}^{2+}$).
   * *Mechanism:* The $10$ inner $d$-electrons shield nuclear charge very poorly, exerting a much higher effective nuclear charge on the anion.
   * **Experimental Demonstration:**
     * $\text{AgCl}$ ($r_{\text{Ag}^+} = 1.26\text{ \AA}, \; 18e^-$ core): Covalent, insoluble in water, m.p. $455^\circ\text{C}$.
     * $\text{NaCl}$ ($r_{\text{Na}^+} = 0.95\text{ \AA}, \; 8e^-$ core): Purely ionic, highly soluble in water, m.p. $801^\circ\text{C}$.


---


### 7.2 Chemical Manifestations of Polarization


1. **Melting Point Depression:** Covalency lowers lattice energy and melting point:
   $$\mathbf{\text{NaCl} (801^\circ\text{C}) > \text{CaCl}_2 (772^\circ\text{C}) > \text{AlCl}_3 (190^\circ\text{C})}$$
2. **Thermal Stability of Oxysalts:** Greater polarization of carbonate/sulfate anion by a small cation weakens $\text{C}-\text{O}$ or $\text{S}-\text{O}$ bonds, lowering decomposition temperature:
   $$\mathbf{\text{Thermal Stability: } \text{BaCO}_3 > \text{SrCO}_3 > \text{CaCO}_3 > \text{MgCO}_3 > \text{BeCO}_3}$$
3. **Color Intensification (Charge-Transfer Transitions):** Increased polarization narrows the HOMO-LUMO band gap, shifting absorption into the visible spectrum:
   $$\mathbf{\text{AgF (white)} \longrightarrow \text{AgCl (white)} \longrightarrow \text{AgBr (pale yellow)} \longrightarrow \text{AgI (deep yellow)}}$$
   $$\mathbf{\text{PbCl}_2 \text{ (white)} \longrightarrow \text{PbI}_2 \text{ (golden yellow)}, \quad \text{HgCl}_2 \text{ (white)} \longrightarrow \text{HgI}_2 \text{ (scarlet red)}}$$


---


## 8. Dipole Moments ($\mu$) & Molecular Polarity


### 8.1 Vector Definition & Units


Dipole moment is a vector quantity directed from the positive charge center to the negative charge center (by physics convention, or toward the electronegative atom/lone pair in chemistry):


$$\mathbf{\vec{\mu} = q \times \vec{d}}$$


* **Units:**
  $$\mathbf{1\text{ Debye (D)} = 10^{-18}\text{ esu cm} = 3.33564 \times 10^{-30}\text{ C m}}$$
* **Percentage Ionic Character (Hannay-Smith & Experimental):**
  $$\mathbf{\% \text{ Ionic Character} = \frac{\mu_{\text{observed}}}{\mu_{\text{purely ionic}}} \times 100 = \frac{\mu_{\text{obs}}}{e \times d} \times 100}$$


---


### 8.2 The Classic $        ext{NH}_3$ vs. $        ext{NF}_3$ Dipole Paradox


Both ammonia ($\text{NH}_3$) and nitrogen trifluoride ($\text{NF}_3$) have identical steric numbers ($4$, $sp^3$, $1$ lone pair) and trigonal pyramidal geometry. However:


$$\mathbf{\mu(\text{NH}_3) = 1.47\text{ D} \quad \gg \quad \mu(\text{NF}_3) = 0.24\text{ D}}$$


* **Mechanistic Resolution:**
  * In $\mathbf{\text{NH}_3}$: Nitrogen is more electronegative than Hydrogen ($\text{EN}_N = 3.0 > \text{EN}_H = 2.1$). The three $\text{N}-\text{H}$ bond dipoles point **upward toward Nitrogen**. The orbital dipole of the lone pair ALSO points upward. All vector dipoles reinforce **constructively** $\implies$ Large net dipole moment ($1.47\text{ D}$).
  * In $\mathbf{\text{NF}_3}$: Fluorine is more electronegative than Nitrogen ($\text{EN}_F = 4.0 > \text{EN}_N = 3.0$). The three $\text{N}-\text{F}$ bond dipoles point **downward toward Fluorine**, opposing the upward orbital dipole of the nitrogen lone pair. The vectors cancel **destructively** $\implies$ Extremely small net dipole moment ($0.24\text{ D}$).


---


### 8.3 Symmetrical Zero-Dipole Molecules & Isomerism


1. **Symmetric Regular Polyhedra ($\mu = 0$):**
   Molecules with identical terminal ligands and no lone pairs have vectorially balanced dipoles summing to zero:
   * Linear: $\text{CO}_2, \text{CS}_2, \text{BeF}_2$.
   * Trigonal Planar: $\text{BF}_3, \text{BCl}_3, \text{SO}_3$.
   * Tetrahedral: $\text{CH}_4, \text{CCl}_4, \text{SiF}_4$.
   * Trigonal Bipyramidal: $\text{PF}_5, \text{PCl}_3\text{F}_2$.
   * Octahedral: $\text{SF}_6, \text{WF}_6$.
   * Square Planar: $\text{XeF}_4$ (trans lone pairs cancel, 4 coplanar $\text{Xe}-\text{F}$ cancel $\implies \mu = 0$).


2. **Cis-Trans Geometric Isomerism:**
   * **Cis-1,2-dichloroethene:** Bond dipoles add vectorially $\implies \mathbf{\mu = 1.85\text{ D} > 0}$.
   * **Trans-1,2-dichloroethene:** Bond dipoles oppose each other across center of inversion $\implies \mathbf{\mu = 0}$.


---


## 9. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The $        ext{XeF}_2$ and $        ext{I}_3^-$ Geometry vs. Shape Trap:**
   * In $\text{XeF}_2$ and $\text{I}_3^-$, the steric number is $5$ ($sp^3d$).
   * The electronic geometry is **Trigonal Bipyramidal**, but the **molecular shape is strictly LINEAR ($180^\circ$)** because all 3 lone pairs reside in the equatorial plane!
2. **The $        ext{BF}_3$ vs. $        ext{BI}_3$ Lewis Acidity Trap:**
   * Students intuitively assume $\text{BF}_3$ is the strongest acid because Fluorine is most electronegative.
   * **Fact:** Due to $2p\pi-2p\pi$ back bonding, $\mathbf{\text{BF}_3 \text{ is the WEAKEST Lewis acid}}$, and $\mathbf{\text{BI}_3 \text{ is the STRONGEST}}$!
3. **The Dimeric $        ext{Al}_2        ext{Cl}_6$ Electron Deficiency Trap:**
   * $\text{B}_2\text{H}_6$ is electron-deficient ($3c-2e$), but $\mathbf{\text{Al}_2\text{Cl}_6 \text{ is NOT electron-deficient}}$ ($3c-4e$ dative coordination). Every atom in $\text{Al}_2\text{Cl}_6$ possesses a complete octet.
4. **Drago Hydride Bond Angle Assumption Trap:**
   * Do NOT assign $sp^3$ hybridization or VSEPR $104.5^\circ-107^\circ$ angles to $\text{PH}_3, \text{AsH}_3, \text{H}_2\text{S}, \text{H}_2\text{Se}$!
   * Under Drago's rule, these molecules have **bond angles near $90^\circ-93^\circ$** with non-hybridized pure $p$-bonding.