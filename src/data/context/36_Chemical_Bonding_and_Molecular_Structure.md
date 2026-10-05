Chemistry Revision Context: Chapter 36 — Chemical Bonding and Molecular Structure


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../5. Chemical Bonding/FL-Chemical Bonding-1.pdf` through `FL-BONDING-10.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Chemistry Chemical Bonding Core — Kössel-Lewis Approach, Octet Rule Exceptions, Formal Charge, Ionic Bonding & Born-Haber Cycle, Valence Bond Theory (VBT: $\sigma$ vs $\pi$ bonds), Hybridization ($sp, sp^2, sp^3, sp^3d, sp^3d^2, sp^3d^3$), VSEPR Geometries & Steric Number Mapping, Bent's Rule & Drago's Rule, Dipole Moments ($\mu$) & Percentage Ionic Character, Fajan's Rules of Polarization, Molecular Orbital Theory (MOT: LCAO, $s-p$ Mixing $\le 14e^-$ vs Non-Mixing $> 14e^-$, Bond Orders, Magnetism), and Intermolecular Forces & Hydrogen Bonding (Ice Anomaly, $\text{KHF}_2$).


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Classical Concepts of Chemical Bonding & Lewis Structures


### 1.1 Kössel-Lewis Approach & The Octet Rule
* **Octet Rule:** Atoms combine either by transfer of valence electrons (ionic bonding) or by sharing valence electrons (covalent bonding) in order to attain an octet ($ns^2 np^6$) in their valence shell, resembling the nearest noble gas configuration.
* **Exceptions to the Octet Rule:**
  1. **Incomplete Octet (Electron-Deficient Species):** Central atom has fewer than 8 electrons in its valence shell. Examples: $\text{LiCl}$ ($2e^-$), $\text{BeH}_2$ ($4e^-$), $\text{BeCl}_2$ ($4e^-$), $\text{BF}_3$ ($6e^-$), $\text{BCl}_3$ ($6e^-$), $\text{AlCl}_3$ ($6e^-$). These act as potent Lewis acids.
  2. **Odd-Electron Molecules:** Contain an odd number of valence electrons; impossible to satisfy octet for all atoms. Examples: Nitric oxide ($\text{NO}$, $11$ valence $e^-$), Nitrogen dioxide ($\text{NO}_2$, $17$ valence $e^-$), Chlorine dioxide ($\text{ClO}_2$, $19$ valence $e^-$). They exhibit paramagnetism and undergo dimerization (e.g., $2\text{NO}_2 \rightleftharpoons \text{N}_2\text{O}_4$).
  3. **Expanded Octet (Hypervalent Molecules):** Central atom from Period 3 or higher utilizes vacant $d$-orbitals to accommodate more than 8 electrons. Examples: $\text{PCl}_5$ ($10e^-$), $\text{SF}_6$ ($12e^-$), $\text{IF}_7$ ($14e^-$), $\text{H}_2\text{SO}_4$ ($12e^-$), $\text{H}_3\text{PO}_4$ ($10e^-$), $\text{XeF}_2$ ($10e^-$), $\text{XeF}_4$ ($12e^-$).


---


### 1.2 Formal Charge Formulation
The formal charge of an atom in a polyatomic molecule or ion represents the hypothetical electrical charge assigned assuming equal sharing of bonding electrons:
$$\mathbf{\text{Formal Charge (FC)} = V - L - \frac{1}{2} S}$$
where:
* $V$ = Total number of valence electrons in the isolated, free neutral atom.
* $L$ = Total number of non-bonding valence electrons (lone pair electrons).
* $S$ = Total number of shared (bonding) electrons ($S = 2 \times \text{number of covalent bonds}$).
* **Sum of Formal Charges:** The algebraic sum of formal charges on all atoms equals the net charge on the molecule or polyatomic ion.
* **Criterion for Preferred Lewis Structure:** The most stable Lewis structure minimizes formal charges, places negative formal charges on the most electronegative atoms, and places positive formal charges on the least electronegative atoms.


---


## 2. Ionic Bonding & Lattice Energetics


### 2.1 Formation Criteria of Ionic Compounds
An ionic bond forms via complete transfer of one or more valence electrons from an electropositive element to an electronegative element.
1. **Low Ionization Enthalpy ($\Delta_{\text{i}}H$) of Cation-Forming Metal:** Readily loses electrons ($\text{Cs} < \text{Rb} < \text{K} < \text{Na} < \text{Li}$).
2. **High Negative Electron Gain Enthalpy ($\Delta_{\text{eg}}H$) of Anion-Forming Non-Metal:** Readily gains electrons ($\text{Cl} > \text{F} > \text{Br} > \text{I}$).
3. **High Lattice Enthalpy ($U$):** Exothermic electrostatic stabilization upon condensation of gaseous ions into a crystalline lattice.


---


### 2.2 Lattice Enthalpy & Born-Haber Cycle
* **Lattice Enthalpy ($U$):** The enthalpy change when one mole of an ionic crystalline compound is dissociated completely into its constituent gaseous ions at infinite separation:
  $$\text{MX}(s) \to \text{M}^+(g) + \text{X}^-(g) \quad \Delta H = U > 0$$
* **Born-Haber Cycle for $\text{NaCl}(s)$:**
  $$\Delta H_f^\circ(\text{NaCl}) = \Delta H_{\text{sub}}(\text{Na}) + \frac{1}{2}D(\text{Cl}_2) + \Delta_{\text{i}}H(\text{Na}) + \Delta_{\text{eg}}H(\text{Cl}) - U$$
* **Solubility Condition:**
  For an ionic compound to dissolve in water, the hydration enthalpy ($\Delta H_{\text{hyd}}$) must overcome the lattice enthalpy:
  $$\mathbf{|\Delta H_{\text{hyd}}| > U \implies \Delta H_{\text{sol}} < 0 \quad (\text{Favorable Dissolution})}$$
  Both $U$ and $\Delta H_{\text{hyd}} \propto \frac{|z_+ z_-|}{r_+ + r_-}$. If lattice enthalpy drops slower than hydration enthalpy down a group, solubility decreases (e.g., $\text{BaSO}_4$ insoluble, $\text{MgSO}_4$ soluble).


---


## 3. Valence Bond Theory (VBT) & Orbital Overlap


### 3.1 Principles of VBT
Introduced by Heitler and London (1927) and developed by Pauling (1931):
* A covalent bond forms by the partial overlap of two half-filled atomic orbitals belonging to valence shells of interacting atoms.
* The overlapping orbitals must contain electrons with opposite (anti-parallel) spins.
* **Strength of Covalent Bond $\propto$ Extent of Orbital Overlap.**
* **Directional Character:** Orbitals with directional characteristics ($p, d$) form significantly stronger covalent bonds than non-directional spherically symmetric $s$-orbitals:
  $$\text{Overlap Strength: } p\text{-}p\text{ (axial)} > s\text{-}p > s\text{-}s$$


---


### 3.2 Sigma ($\sigma$) vs. Pi ($\pi$) Covalent Bonds


| Characteristic | Sigma ($\sigma$) Bond | Pi ($\pi$) Bond |
| :--- | :--- | :--- |
| **Type of Overlap** | **Axial / End-to-end / Head-on overlap** along the internuclear axis. | **Lateral / Sideways / Parallel overlap** perpendicular to the internuclear axis. |
| **Overlapping Orbitals** | $s-s$, $s-p_z$, or $p_z-p_z$ (taking $z$ as internuclear axis). | $p_x-p_x$ or $p_y-p_y$ (parallel orientation); $d-p$ or $d-d$. |
| **Extent of Overlap** | High extent of overlap $\implies$ **Stronger bond**. | Moderate to low overlap $\implies$ **Weaker bond**. |
| **Electron Cloud Symmetry** | Cylindrically symmetrical about the internuclear axis. | Two distinct lobes: one above and one below the internuclear nodal plane. |
| **Rotational Freedom** | Free rotation permitted around the $\sigma$-bond axis without breaking overlap. | **Restricted rotation**; rotation breaks parallel overlap (leads to geometrical isomerism). |
| **Bond Order Existence** | Capable of independent existence (single bond is always $\sigma$). | Formed only in presence of a $\sigma$-bond (double bond = $1\sigma + 1\pi$; triple bond = $1\sigma + 2\pi$; exception: $\text{C}_2$ in gas phase has $2\pi$ bonds). |


---


## 4. Hybridization Theory & Steric Number Architecture


### 4.1 Concept of Hybridization
Pauling proposed hybridization: the mixing of non-equivalent atomic orbitals of comparable energy belonging to the same isolated atom to produce an equal number of new, completely degenerate hybrid orbitals having identical shapes, directional orientations, and equivalent bonding properties.


* **Steric Number (SN) Formulation:**
  $$\mathbf{\text{Steric Number (SN)} = \sigma\text{-bonds} + \text{Lone Pairs on Central Atom}}$$
  $$\mathbf{\text{SN} = \frac{1}{2} \left[ V + M - C + A \right]}$$
  where $V$ = valence electrons of central atom, $M$ = number of monovalent surrounding atoms ($\text{H, F, Cl, Br, I}$), $C$ = cationic charge, $A$ = anionic charge.


---


### 4.2 Comprehensive Hybridization Typology


| Steric No. (SN) | Hybridization | Intermixing Orbitals | Ideal Hybrid Geometry | Inter-Orbital Angles | High-Yield JEE Archetypes |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **2** | $sp$ | $s + p_z$ | Linear | $180^\circ$ | $\text{BeCl}_2, \text{CO}_2, \text{HCN}, \text{C}_2\text{H}_2, \text{NO}_2^+, \text{N}_3^-$ |
| **3** | $sp^2$ | $s + p_x + p_y$ | Trigonal Planar | $120^\circ$ | $\text{BF}_3, \text{BCl}_3, \text{SO}_3, \text{NO}_3^-, \text{CO}_3^{2-}, \text{C}_2\text{H}_4$ |
| **4** | $sp^3$ | $s + p_x + p_y + p_z$ | Tetrahedral | $109^\circ 28'$ | $\text{CH}_4, \text{CCl}_4, \text{NH}_4^+, \text{SO}_4^{2-}, \text{ClO}_4^-, \text{Diamond}$ |
| **4** | $dsp^2$ | $d_{x^2-y^2} + s + p_x + p_y$ | Square Planar | $90^\circ$ | $[\text{Ni(CN)}_4]^{2-}, [\text{PtCl}_4]^{2-}, [\text{Cu(NH}_3)_4]^{2+}$ |
| **5** | $sp^3d$ | $s + p_x + p_y + p_z + \mathbf{d_{z^2}}$ | Trigonal Bipyramidal (TBP) | $120^\circ\ (\text{eq}),\ 90^\circ\ (\text{ax})$ | $\text{PCl}_5, \text{PF}_5, \text{SF}_4, \text{ClF}_3, \text{XeF}_2, \text{I}_3^-$ |
| **6** | $sp^3d^2$ | $s + p_x + p_y + p_z + \mathbf{d_{x^2-y^2} + d_{z^2}}$ | Octahedral | $90^\circ$ | $\text{SF}_6, [\text{AlF}_6]^{3-}, \text{BrF}_5, \text{XeF}_4, [\text{ICl}_4]^-$ |
| **7** | $sp^3d^3$ | $s + p_x + p_y + p_z + \mathbf{d_{xy} + d_{x^2-y^2} + d_{z^2}}$ | Pentagonal Bipyramidal (PBP) | $72^\circ\ (\text{eq}),\ 90^\circ\ (\text{ax})$ | $\text{IF}_7, \text{XeF}_5^-, \text{XeF}_6\ (\text{distorted})$ |


---


## 5. VSEPR Theory & Molecular Geometries


### 5.1 Visual Preservation: VSEPR Geometries & Steric Architecture


![VSEPR Geometries and Steric Architecture](/media/vsepr_geometries_and_hybridization_steric_architecture.webp)
*Description: Two-panel comprehensive molecular geometry and structural rule diagram: (A) VSEPR molecular shapes matrix classified across steric numbers 2 to 7, displaying lone-pair/bond-pair arrangements for linear, trigonal planar, bent, tetrahedral, pyramidal, trigonal bipyramidal, see-saw, T-shaped, octahedral, square pyramidal, square planar, and pentagonal bipyramidal geometries; (B) Advanced structural frameworks detailing Bent's Rule (orbital $s$-character distribution), Drago's Rule (non-hybridization in hydrides of period 3+ elements), and $d$-orbital participation identities ($d_{z^2}, d_{x^2-y^2}, d_{xy}$).*


---


### 5.2 Postulates of VSEPR Theory (Gillespie & Nyholm)
1. The shape of a molecule depends exclusively on the total number of electron pairs (bonding and non-bonding/lone pairs) in the valence shell of the central atom.
2. Electron pairs surrounding the central atom repel one another and adopt spatial orientations that minimize mutual electrostatic repulsion.
3. **Repulsion Hierarchy:** Lone pairs are localized exclusively on the central atom and occupy greater spatial volume than bonding pairs shared between two nuclei:
   $$\mathbf{\text{lp - lp} > \text{lp - bp} > \text{bp - bp}}$$
4. Multiple bonds ($\text{double or triple}$) repel adjacent electron pairs more strongly than single bonds, but are treated as a single super-pair in determining spatial geometry.


---


### 5.3 Complete VSEPR Geometry Mapping


| Steric No. | Bonding Pairs ($bp$) | Lone Pairs ($lp$) | Molecular Formula Type | Molecular Geometry (Shape) | Bond Angles | Canonical JEE Examples |
| :---: | :---: | :---: | :---: | :--- | :---: | :--- |
| **2** | 2 | 0 | $AB_2$ | **Linear** | $180^\circ$ | $\text{BeCl}_2, \text{CO}_2, \text{CS}_2, \text{HCN}$ |
| **3** | 3 | 0 | $AB_3$ | **Trigonal Planar** | $120^\circ$ | $\text{BF}_3, \text{BCl}_3, \text{SO}_3, \text{NO}_3^-$ |
| **3** | 2 | 1 | $AB_2E$ | **Bent / V-shaped** | $< 120^\circ\ (\approx 119^\circ)$ | $\text{SO}_2, \text{O}_3, \text{NO}_2^-, \text{SnCl}_2$ |
| **4** | 4 | 0 | $AB_4$ | **Tetrahedral** | $109^\circ 28'$ | $\text{CH}_4, \text{CCl}_4, \text{SiF}_4, \text{NH}_4^+$ |
| **4** | 3 | 1 | $AB_3E$ | **Trigonal Pyramidal** | $< 109.5^\circ\ (107^\circ)$ | $\text{NH}_3, \text{NF}_3, \text{PCl}_3, \text{H}_3\text{O}^+$ |
| **4** | 2 | 2 | $AB_2E_2$ | **Bent / Angular** | $\ll 109.5^\circ\ (104.5^\circ)$ | $\text{H}_2\text{O}, \text{OF}_2, \text{SCl}_2, \text{NH}_2^-$ |
| **5** | 5 | 0 | $AB_5$ | **Trigonal Bipyramidal** | $120^\circ\ (\text{eq}),\ 90^\circ\ (\text{ax})$ | $\text{PCl}_5, \text{PF}_5, \text{AsF}_5, \text{SbCl}_5$ |
| **5** | 4 | 1 | $AB_4E$ | **See-Saw** | $< 120^\circ\ (102^\circ),\ < 90^\circ\ (87^\circ)$ | $\text{SF}_4, \text{SeF}_4, \text{TeCl}_4$ |
| **5** | 3 | 2 | $AB_3E_2$ | **T-Shaped** | $< 90^\circ\ (\approx 87.5^\circ)$ | $\text{ClF}_3, \text{BrF}_3, \text{IF}_3$ |
| **5** | 2 | 3 | $AB_2E_3$ | **Linear** | $180^\circ$ | $\text{XeF}_2, \text{I}_3^-, \text{ICl}_2^-$ |
| **6** | 6 | 0 | $AB_6$ | **Octahedral** | $90^\circ$ | $\text{SF}_6, [\text{AlF}_6]^{3-}, [\text{PF}_6]^-$ |
| **6** | 5 | 1 | $AB_5E$ | **Square Pyramidal** | $< 90^\circ\ (\approx 85^\circ)$ | $\text{BrF}_5, \text{IF}_5, \text{XeOF}_4$ |
| **6** | 4 | 2 | $AB_4E_2$ | **Square Planar** | $90^\circ$ | $\text{XeF}_4, [\text{ICl}_4]^-$ |
| **7** | 7 | 0 | $AB_7$ | **Pentagonal Bipyramidal** | $72^\circ\ (\text{eq}),\ 90^\circ\ (\text{ax})$ | $\text{IF}_7$ |
| **7** | 6 | 1 | $AB_6E$ | **Distorted Octahedral** | Non-uniform | $\text{XeF}_6$ |
| **7** | 5 | 2 | $AB_5E_2$ | **Pentagonal Planar** | $72^\circ$ | $\text{XeF}_5^-$ |


---


## 6. Advanced Molecular Principles: Bent's Rule & Drago's Rule


### 6.1 Bent's Rule & Ligand Site Preferences
Formulated by Henry Bent:
> *"More electronegative substituents prefer hybrid orbitals having LESS $s$-character (MORE $p$-character), whereas more electropositive substituents and lone pairs prefer hybrid orbitals having MORE $s$-character."*


* **Mathematical Expression:**
  $$\% s \propto \frac{1}{\text{Electronegativity of Substituent}}$$
  $$\cos\theta = \frac{s}{s - 1} = \frac{p - 1}{p}$$
* **Application to Trigonal Bipyramidal ($sp^3d$) Systems:**
  In $sp^3d$, the five hybrid orbitals are non-equivalent:
  * **3 Equatorial Orbitals:** Composed of $s + p_x + p_y$ ($sp^2$ character, $33.3\% s$).
  * **2 Axial Orbitals:** Composed of $p_z + d_{z^2}$ ($dp$ character, $0\% s$, $100\% p/d$).
  * **Site Preferences in TBP:**
    1. **Lone pairs** and **bulkier/less electronegative substituents** strictly occupy **equatorial positions** (maximizing $s$-character and minimizing repulsion).
    2. **Highly electronegative substituents** ($\text{F}, \text{Cl}$) strictly occupy **axial positions** (utilizing orbitals with $0\% s$-character).
  * **Illustrative Examples:**
    * $\text{PCl}_3\text{F}_2$: Both $\text{F}$ atoms occupy axial positions ($\text{F}_{\text{ax}}-\text{P}-\text{F}_{\text{ax}}$ linear), while $3\text{ Cl}$ atoms occupy equatorial positions $\implies \mu = 0$.
    * $\text{PCl}_2\text{F}_3$: $2\text{ F}$ occupy axial positions, and the remaining $1\text{ F}$ plus $2\text{ Cl}$ occupy equatorial positions $\implies \mu \ne 0$.
    * Axial bond lengths are longer and weaker than equatorial bonds in $\text{PCl}_5$:
      $$d(\text{P}-\text{Cl}_{\text{axial}}) = 219\text{ pm} \quad \text{vs} \quad d(\text{P}-\text{Cl}_{\text{equatorial}}) = 204\text{ pm}$$
      Upon heating, $\text{PCl}_5$ dissociates into $\text{PCl}_3(g) + \text{Cl}_2(g)$ by rupturing the two weaker axial bonds.


---


### 6.2 Drago's Rule (Non-Hybridization in Heavy Hydrides)
When the central atom satisfies all three conditions:
1. Belongs to Period 3, 4, 5, or 6 (e.g., $\text{P, As, Sb, S, Se, Te}$).
2. Possesses at least one non-bonding lone pair.
3. Is bonded to surrounding terminal atoms with electronegativity $\le 2.5$ (specifically $\text{H}$).


**Physical Consequence:**
* The energy gap between the valence $s$-orbital and $p$-orbitals is large; orbital hybridization does not occur.
* The lone pair remains inactive in an almost pure, unhybridized spherically symmetric $s$-orbital.
* The terminal $\sigma$-bonds are formed by almost pure $p$-orbitals intersecting at mutual angles close to $90^\circ$:
  $$\text{Bond Angles: } \mathbf{\text{NH}_3\ (107.5^\circ) \gg \text{PH}_3\ (93.5^\circ) > \text{AsH}_3\ (91.8^\circ) > \text{SbH}_3\ (91.3^\circ)}$$
  $$\mathbf{\text{H}_2\text{O}\ (104.5^\circ) \gg \text{H}_2\text{S}\ (92.1^\circ) > \text{H}_2\text{Se}\ (91.0^\circ) > \text{H}_2\text{Te}\ (89.5^\circ)}$$
* **Lewis Basicity Trend:** $\text{NH}_3$ is a strong Lewis base (lone pair in directed $sp^3$ orbital with high electron density); $\text{PH}_3$ is an extremely poor Lewis base because its lone pair is buried in an unhybridized, non-directional $s$-orbital.


---


## 7. Dipole Moments & Polar Character


### 7.1 Dipole Moment Formulation
Dipole moment ($\vec{\mu}$) is a vector quantity directed from the positive pole to the negative pole (by chemical convention):
$$\mathbf{\vec{\mu} = q \times \vec{d}}$$
* **Units:** Coulomb-meter ($\text{C}\cdot\text{m}$) or Debye ($\text{D}$):
  $$1\text{ D} = 3.33564 \times 10^{-30}\text{ C}\cdot\text{m} = 10^{-18}\text{ esu}\cdot\text{cm}$$
* **Vector Addition for Polyatomic Molecules:**
  $$\mu_{\text{net}} = \sqrt{\mu_1^2 + \mu_2^2 + 2\mu_1\mu_2\cos\theta}$$
* **Symmetric Non-Polar Molecules ($\mu = 0$):** Linear ($AB_2$: $\text{CO}_2, \text{BeF}_2, \text{CS}_2$), Trigonal Planar ($AB_3$: $\text{BF}_3, \text{SO}_3$), Tetrahedral ($AB_4$: $\text{CH}_4, \text{CCl}_4$), Square Planar ($AB_4E_2$: $\text{XeF}_4$), Trigonal Bipyramidal ($AB_5$: $\text{PCl}_5, \text{PCl}_3\text{F}_2$).


---


### 7.2 High-Yield Dipole Anomaly: $\text{NH}_3$ vs. $\text{NF}_3$
Although fluorine is substantially more electronegative than hydrogen, the dipole moment of ammonia is far larger than that of nitrogen trifluoride:
$$\mathbf{\mu(\text{NH}_3) = 1.47\text{ D} \quad \gg \quad \mu(\text{NF}_3) = 0.24\text{ D}}$$
* **Physical Origin:**
  * In $\text{NH}_3$, nitrogen is more electronegative than hydrogen; the three individual $\text{N}-\text{H}$ bond dipoles are directed toward nitrogen and **reinforce** the orbital dipole of the lone pair.
  * In $\text{NF}_3$, fluorine is more electronegative than nitrogen; the three individual $\text{N}-\text{F}$ bond dipoles point away from nitrogen and **oppose** the lone pair dipole, resulting in near cancellation.


---


### 7.3 Percentage Ionic Character (Hanny-Smyth Formula)
$$\mathbf{\% \text{ Ionic Character} = 16|\Delta\chi| + 3.5(\Delta\chi)^2}$$
where $\Delta\chi = |\chi_A - \chi_B|$ is the electronegativity difference between bonded atoms on the Pauling scale.
* When $\Delta\chi = 1.7 \implies \% \text{ Ionic} \approx 50\%$. If $\Delta\chi > 1.7$, bond is predominantly ionic; if $\Delta\chi < 1.7$, bond is predominantly covalent.


---


## 8. Fajan's Rules & Polarization Dynamics


### 8.1 Visual Preservation: Fajan's Rules & Hydrogen Bonding


![Fajans Rules and Hydrogen Bonding](/media/fajans_rules_polarization_and_hydrogen_bonding.webp)
*Description: Two-panel physical inorganic chemistry schematic: (A) Microscopic representation of Fajan's polarization mechanism (pure spherical ionic contact transforming into covalent electron-cloud distortion) alongside the 4 foundational rules favoring covalent character; (B) Hydrogen bonding taxonomy comparing Intermolecular H-bonding (association leading to high BP, viscosity, and solubility) with Intramolecular H-bonding (chelation leading to volatility and lowered BP), along with the open-cage crystal structure of ice and the symmetrical H-bond in $\text{KHF}_2$.*


---


### 8.2 Factors Favoring Covalent Character (Fajan's Postulates)
1. **Small Cation Size:** High surface charge density produces immense polarizing power ($\text{Li}^+ > \text{Na}^+ > \text{K}^+ > \text{Rb}^+ > \text{Cs}^+$):
   $$\text{Covalent Character: } \text{LiCl} > \text{NaCl} > \text{KCl} > \text{RbCl} > \text{CsCl}$$
2. **Large Anion Size:** Outer electron cloud is loosely bound by nucleus and readily deformed ($\text{I}^- > \text{Br}^- > \text{Cl}^- > \text{F}^-$):
   $$\text{Covalent Character: } \text{AgI} > \text{AgBr} > \text{AgCl} > \text{AgF}$$
3. **High Charge on Cation or Anion:** Electrostatic polarizing force scales directly with ionic valence:
   $$\text{SnCl}_4 > \text{SnCl}_2; \quad \text{FeCl}_3 > \text{FeCl}_2; \quad \text{AlCl}_3 > \text{MgCl}_2 > \text{NaCl}$$
4. **Pseudo Noble Gas Configuration of Cation ($18e^-$ Outer Shell):**
   * Cations with an outer $ns^2 np^6 nd^{10}$ configuration ($\text{Cu}^+, \text{Ag}^+, \text{Au}^+, \text{Zn}^{2+}, \text{Cd}^{2+}, \text{Hg}^{2+}$) have poor shielding by diffuse $d$-electrons.
   * They exert a vastly higher effective nuclear charge ($Z_{\text{eff}}$) and greater polarizing power than isoelectronic noble-gas configuration ($8e^-: ns^2 np^6$) cations ($\text{Na}^+, \text{K}^+, \text{Ca}^{2+}$):
     $$\mathbf{\text{CuCl (Covalent, MP } 422^\circ\text{C}) \ll \text{NaCl (Ionic, MP } 801^\circ\text{C})}$$


---


### 8.3 Physical Consequences of Polarization
* **Melting Points:** Increased covalent character drastically suppresses melting point ($\text{NaCl} > \text{MgCl}_2 > \text{AlCl}_3$).
* **Solubility in Water:** Greater covalent character reduces solubility in polar solvents ($\text{AgF} \text{ [soluble]} \gg \text{AgCl} > \text{AgBr} > \text{AgI} \text{ [insoluble]}$).
* **Color Intensity:** Deepening of color in salts occurs due to polarization enabling charge-transfer transitions ($\text{AgF}$ white, $\text{AgCl}$ white, $\text{AgBr}$ pale yellow, $\text{AgI}$ dark yellow; $\text{PbCl}_2$ white, $\text{PbI}_2$ golden yellow).


---


## 9. Molecular Orbital Theory (MOT) & Diatomic Systems


### 9.1 Visual Preservation: MOT Energy Diagrams & Diatomic Profiles


![MOT Energy Level Diagrams and Diatomic Analytics](/media/mot_energy_level_diagrams_and_diatomic_analytics.webp)
*Description: Two-panel quantum chemical bonding graphic: (A) Comparative molecular orbital energy level diagrams demonstrating the energy level inversion caused by $2s-2p$ mixing in $\le 14e^-$ systems ($\pi 2p < \sigma 2p_z$) versus normal ordering in $> 14e^-$ systems ($\sigma 2p_z < \pi 2p$); (B) Comprehensive reference table cataloging electron counts, bond orders, magnetic properties (diamagnetic vs. paramagnetic), and unpaired electron distributions for key homonuclear and heteronuclear diatomics ($\text{B}_2, \text{C}_2, \text{N}_2, \text{O}_2, \text{O}_2^+, \text{O}_2^-, \text{CO}$).*


---


### 9.2 Foundations of MOT & LCAO Criteria
Molecular orbitals are formed by Linear Combination of Atomic Orbitals (LCAO):
$$\Psi_{\text{bonding}} = \psi_A + \psi_B \quad (\text{Constructive Interference, Low Energy})$$
$$\Psi_{\text{antibonding}} = \psi_A - \psi_B \quad (\text{Destructive Interference, High Energy})$$


* **Bond Order (BO) Formulation:**
  $$\mathbf{\text{Bond Order} = \frac{N_b - N_a}{2}}$$
  where $N_b$ = number of electrons in bonding MOs, $N_a$ = number of electrons in antibonding MOs.
* **Corollaries:**
  1. $\text{Bond Order} > 0 \implies \text{Stable molecule exists}$.
  2. $\text{Bond Order} \le 0 \implies \text{Unstable, molecule cannot exist}$ (e.g., $\text{He}_2, \text{Ne}_2, \text{Be}_2$).
  3. $\text{Bond Strength} \propto \text{Bond Order}$.
  4. $\text{Bond Length} \propto \frac{1}{\text{Bond Order}}$.
  5. **Magnetism:** Paramagnetic if one or more unpaired electrons exist in MOs; Diamagnetic if all electrons are paired.


---


### 9.3 Energy Ordering: The $s-p$ Mixing Invariant


#### 1. For Diatomic Molecules with $\le 14$ Electrons ($Z \le 7$: $\text{Li}_2, \text{Be}_2, \text{B}_2, \text{C}_2, \text{N}_2$):
Small energy gap between $2s$ and $2p$ atomic orbitals allows strong quantum mechanical mixing between $\sigma 2s$ and $\sigma 2p_z$ orbitals, pushing $\sigma 2p_z$ upward in energy above the $\pi 2p$ orbitals:
$$\mathbf{\sigma 1s < \sigma^* 1s < \sigma 2s < \sigma^* 2s < (\pi 2p_x = \pi 2p_y) < \sigma 2p_z < (\pi^* 2p_x = \pi^* 2p_y) < \sigma^* 2p_z}$$


#### 2. For Diatomic Molecules with $> 14$ Electrons ($Z > 7$: $\text{O}_2, \text{F}_2, \text{Ne}_2$):
Large energy separation between $2s$ and $2p$ orbitals prevents $s-p$ mixing; normal energy ordering prevails:
$$\mathbf{\sigma 1s < \sigma^* 1s < \sigma 2s < \sigma^* 2s < \sigma 2p_z < (\pi 2p_x = \pi 2p_y) < (\pi^* 2p_x = \pi^* 2p_y) < \sigma^* 2p_z}$$


---


### 9.4 High-Yield MOT Diatomic Case Studies
1. **Boron Dimer ($\text{B}_2$, $10e^-$):**
   * Configuration: $\sigma 1s^2 \sigma^* 1s^2 \sigma 2s^2 \sigma^* 2s^2 \pi 2p_x^1 \pi 2p_y^1$.
   * $BO = \frac{6 - 4}{2} = \mathbf{1}$.
   * **Paramagnetic** with 2 unpaired electrons in degenerate $\pi 2p$ orbitals.
   * **Crucial Fact:** The single bond in $\text{B}_2$ is a **pure $\pi$-bond**, not a $\sigma$-bond!
2. **Carbon Dimer ($\text{C}_2$, $12e^-$):**
   * Configuration: $\sigma 1s^2 \sigma^* 1s^2 \sigma 2s^2 \sigma^* 2s^2 \pi 2p_x^2 \pi 2p_y^2$.
   * $BO = \frac{8 - 4}{2} = \mathbf{2}$.
   * **Diamagnetic** (all electrons paired).
   * **Crucial Fact:** **Both bonds in $\text{C}_2$ are purely $\pi$-bonds!** (No $\sigma$-bond exists in $\text{C}_2$).
3. **Nitrogen Molecule ($\text{N}_2$, $14e^-$):**
   * Configuration: $\sigma 1s^2 \sigma^* 1s^2 \sigma 2s^2 \sigma^* 2s^2 \pi 2p_x^2 \pi 2p_y^2 \sigma 2p_z^2$.
   * $BO = \frac{10 - 4}{2} = \mathbf{3}$ ($1\sigma + 2\pi$).
   * **Diamagnetic**; highest bond dissociation enthalpy ($945\text{ kJ/mol}$).
   * Removal of electron gives $\text{N}_2^+$ ($BO = 2.5$, bond length increases).
4. **Oxygen Species ($\text{O}_2$ Family):**
   * $\text{O}_2\ (16e^-)$: $\sigma 1s^2 \sigma^* 1s^2 \sigma 2s^2 \sigma^* 2s^2 \sigma 2p_z^2 \pi 2p_x^2 \pi 2p_y^2 \pi^* 2p_x^1 \pi^* 2p_y^1$.
     * $BO = \frac{10 - 6}{2} = \mathbf{2.0}$, **Paramagnetic** (2 unpaired electrons in $\pi^*$).
   * $\text{O}_2^+\ (15e^-)$: $BO = \frac{10 - 5}{2} = \mathbf{2.5}$, Paramagnetic (1 unpaired $e^-$ in $\pi^*$).
   * $\text{O}_2^-\ (17e^-\text{ Superoxide})$: $BO = \frac{10 - 7}{2} = \mathbf{1.5}$, Paramagnetic (1 unpaired $e^-$ in $\pi^*$).
   * $\text{O}_2^{2-}\ (18e^-\text{ Peroxide})$: $BO = \frac{10 - 8}{2} = \mathbf{1.0}$, Diamagnetic.
   * **Stability & Bond Energy Order:**
     $$\mathbf{\text{O}_2^+ > \text{O}_2 > \text{O}_2^- > \text{O}_2^{2-}}$$
   * **Bond Length Order:**
     $$\mathbf{\text{O}_2^{2-} > \text{O}_2^- > \text{O}_2 > \text{O}_2^+}$$
5. **Carbon Monoxide Species ($\text{CO}$ and $\text{CO}^+$ Anomaly):**
   * $\text{CO}\ (14e^-)$: Isoelectronic with $\text{N}_2$, $BO = \mathbf{3.0}$, Diamagnetic.
   * $\text{CO}^+\ (13e^-)$: Upon ionization of $\text{CO}$, the electron is removed from a weakly antibonding $\sigma^* 2s$ orbital (arising from mixing), causing the bond order to **increase**:
     $$\mathbf{BO(\text{CO}^+) = 3.5 \quad > \quad BO(\text{CO}) = 3.0}$$
     $\text{CO}^+$ has a shorter bond length and higher bond dissociation energy than neutral $\text{CO}$.


---


## 10. Intermolecular Forces & Hydrogen Bonding


### 10.1 Types of van der Waals Forces
1. **Keesom Forces (Dipole-Dipole):** Between polar molecules ($\text{HCl}\cdots\text{HCl}$). Energy $\propto 1/r^3$ (stationary) or $1/r^6$ (rotating).
2. **Debye Forces (Dipole-Induced Dipole):** Polar molecule induces a temporary dipole in a non-polar molecule ($\text{HCl}\cdots\text{Ar}$). Energy $\propto 1/r^6$.
3. **London Dispersion Forces:** Instantaneous dipole induces dipole in neighboring neutral atoms/molecules. Operates in all molecules ($\text{He}\cdots\text{He}, \text{CH}_4\cdots\text{CH}_4$). Energy $\propto 1/r^6$; scales with molecular size and polarizability.


---


### 10.2 Hydrogen Bonding Principles
An electrostatic dipole attraction between a covalently bound hydrogen atom carrying high partial positive charge ($\delta^+$) and an unshared lone pair on a small, highly electronegative atom ($\text{F, O, N}$). Bond strength ranges from $10$ to $40\text{ kJ/mol}$ (up to $160\text{ kJ/mol}$ in $\text{KHF}_2$).


#### 1. Intermolecular Hydrogen Bonding
* Occurs between different molecules of the same or different compounds.
* **Consequences:** Extensive molecular association $\implies$ elevated boiling and melting points, high viscosity, high surface tension, and high solubility in water.
* **Boiling Point Invariant:**
  $$\mathbf{\text{H}_2\text{O}\ (100^\circ\text{C}) > \text{HF}\ (19.5^\circ\text{C}) > \text{NH}_3\ (-33^\circ\text{C})}$$
  * Although the $\text{H}\cdots\text{F}$ bond is individually stronger than $\text{H}\cdots\text{O}$ due to fluorine's higher electronegativity, each water molecule forms on average **4 hydrogen bonds** (2 via H atoms, 2 via O lone pairs), establishing a 3D network. $\text{HF}$ forms only 2 hydrogen bonds per molecule (linear zigzag chains).


#### 2. Intramolecular Hydrogen Bonding (Chelation)
* Occurs within the same molecule when a hydrogen atom lies close to an electronegative donor within a 5- or 6-membered ring.
* **Consequences:** Prevents intermolecular association $\implies$ lowered boiling point, lowered melting point, reduced solubility in water, and **high steam volatility**.
* **High-Yield Case: $o$-Nitrophenol vs. $p$-Nitrophenol:**
  * **$o$-Nitrophenol:** Exhibits intramolecular H-bonding between phenolic $-\text{OH}$ and adjacent $-\text{NO}_2$ group (6-membered chelate ring). Molecules cannot associate with one another $\implies$ lower boiling point and **steam volatile**.
  * **$p$-Nitrophenol:** Functional groups are far apart; exhibits extensive intermolecular H-bonding with neighboring molecules, forming giant associated networks $\implies$ higher boiling point, non-volatile, and separated by steam distillation.


#### 3. Open-Cage Structure of Ice
* In solid ice, each oxygen atom is tetrahedrally surrounded by four other oxygen atoms: two via covalent $\text{O}-\text{H}$ bonds ($1.00\text{ \AA}$) and two via hydrogen bonds ($1.76\text{ \AA}$).
* This forms an open, cage-like hexagonal framework with wide interior voids and channels.
* **Density Anomaly:**
  $$\mathbf{\text{Density of Ice} < \text{Density of Liquid Water}\ (\text{Ice Floats})}$$
* When ice melts ($0^\circ\text{C} \to 4^\circ\text{C}$), thermal energy breaks partial hydrogen bonds; the open cages collapse, and free water molecules occupy the channels, causing volume contraction and density increase:
  $$\mathbf{\text{Water exhibits maximum density at } 4^\circ\text{C}\ (277\text{ K}) = 1.000\text{ g/cm}^3}$$


#### 4. Symmetrical Hydrogen Bonding in $\text{KHF}_2$
* $\text{KHF}_2$ dissociates into $\text{K}^+$ and the bifluoride ion $[\text{HF}_2]^-$.
* In $[\text{F}-\text{H}-\text{F}]^-$, the hydrogen atom sits symmetrically at the exact midpoint ($1.13\text{ \AA}$) between both fluorine atoms.
* The $\text{F}-\text{H}\cdots\text{F}^-$ bond enthalpy is $\approx 160\text{ kJ/mol}$, representing the **strongest hydrogen bond known**.
* **Critical Trap:** $\text{KHCl}_2$ and $\text{KHBr}_2$ do not exist because $\text{Cl}$ and $\text{Br}$ have lower electronegativities and larger atomic radii, incapable of forming such strong symmetrical bonds.


---


## 11. High-Yield JEE Problem Archetypes & Trap Logs


### 11.1 Archetype 1: Number of Nodal Planes in Molecular Orbitals
* For $\sigma$ bonding MOs: $0$ nodal planes between nuclei.
* For $\sigma^*$ antibonding MOs: $1$ nodal plane perpendicular to internuclear axis.
* For $\pi$ bonding MOs: $1$ nodal plane coinciding with the internuclear axis.
* For $\pi^*$ antibonding MOs: $2$ nodal planes (one containing internuclear axis, one perpendicular to it).


### 11.2 Archetype 2: Solid State vs. Gas Phase Structures of Halides
* $\text{PCl}_5$: In gas phase, exists as discrete covalent trigonal bipyramidal molecules. In solid state, ionizes into:
  $$\mathbf{2\text{PCl}_5(s) \to [\text{PCl}_4]^+ [\text{PCl}_6]^-} \quad (\text{Tetrahedral cation } sp^3 + \text{Octahedral anion } sp^3d^2)$$
* $\text{PBr}_5$: In solid state, ionizes into:
  $$\mathbf{\text{PBr}_5(s) \to [\text{PBr}_4]^+ \text{Br}^-} \quad (\text{Tetrahedral cation } sp^3 + \text{Bromide ion})$$
* $\text{N}_2\text{O}_5$: In gas phase, exists as covalent $\text{O}_2\text{N}-\text{O}-\text{NO}_2$. In solid state, ionizes into:
  $$\mathbf{\text{N}_2\text{O}_5(s) \to [\text{NO}_2]^+ [\text{NO}_3]^-} \quad (\text{Linear cation } sp + \text{Trigonal planar anion } sp^2)$$


### 11.3 Archetype 3: Back-Bonding ($p\pi-d\pi$ and $p\pi-p\pi$)
* Occurs when an atom with a lone pair is bonded to an adjacent atom with an empty orbital of suitable symmetry and energy.
* **Lewis Acidity of Boron Halides:**
  $$\mathbf{\text{BF}_3 < \text{BCl}_3 < \text{BBr}_3 < \text{BI}_3\ (\text{Lewis Acid Strength})}$$
  * In $\text{BF}_3$, strong $2p_\pi-2p_\pi$ back-donation from filled $2p$ of $\text{F}$ into empty $2p$ of $\text{B}$ drastically reduces electron deficiency on boron.
  * In $\text{BCl}_3$, overlap is $2p-3p$ (weaker); in $\text{BBr}_3$, $2p-4p$ (very weak); in $\text{BI}_3$, $2p-5p$ (negligible). Thus, $\text{BI}_3$ is the strongest Lewis acid!
* **Trisilylamine vs. Trimethylamine:**
  * $\text{N(CH}_3)_3$: Pyramidal ($sp^3$), strong Lewis base.
  * $\text{N(SiH}_3)_3$: **Planar ($sp^2$)**, extremely weak Lewis base due to $2p_\pi-3d_\pi$ back-bonding of nitrogen's lone pair into silicon's empty $3d$-orbitals!