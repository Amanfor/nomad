Chemistry Revision Context: Chapter 35 — Solid State


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../18. Solid State/SOLID STATE-1.pdf` through `SOLID STATE-6.pdf` & `FL-SOLID-1.pdf` through `FL-Solid-3.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Chemistry Physical Chemistry Core — Classification of Solids (Crystalline vs. Amorphous, Anisotropy vs. Isotropy, Types of Crystalline Solids), Crystallographic Foundations (Space Lattice, Basis, Unit Cells, 7 Crystal Systems, 14 Bravais Lattices), Analysis of Cubic Systems (SC, BCC, FCC: Packing Geometries, Contact Planes, Coordination Numbers, 1st/2nd/3rd Nearest Neighbors, Packing Fractions, and Density Analytics), Hexagonal Close Packing (HCP: Geometry, Height $c = 4r\sqrt{2/3}$, Unit Cell Volume $24\sqrt{2}r^3$, $Z = 6$, P.F. = 74.05%), Interstitial Voids & Limiting Radius Ratio Rules (Geometric Proofs for Triangular, Tetrahedral, Octahedral, and Cubical Voids, Void Locations & Counts in FCC and HCP), Major Ionic Crystal Structures (Rock Salt $\text{NaCl}$, Caesium Chloride $\text{CsCl}$, Zinc Blende $\text{ZnS}$, Diamond, Fluorite $\text{CaF}_2$, Antifluorite $\text{Na}_2\text{O}$, Spinel $\text{MgAl}_2\text{O}_4$, and Perovskite $\text{CaTiO}_3$), Bragg's Law & Miller Indices, Crystal Imperfections & Point Defects (Schottky, Frenkel, Dual Behavior in $\text{AgBr}$, Non-Stoichiometric Metal Excess with $F$-Centres, Metal Deficiency in $\text{Fe}_{1-x}\text{O}$, Substitutional & Interstitial Impurities), and Electrical & Magnetic Properties (Band Theory, n/p Doping, Magnetic Ordering: Diamagnetic, Paramagnetic, Ferromagnetic, Antiferromagnetic, Ferrimagnetic, Curie & Néel Temperatures).


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Classification of Solids & Crystalline Typologies


### 1.1 Crystalline vs. Amorphous Solids


Solids represent the condensed state of matter characterized by definite mass, shape, and volume, high density, low compressibility, and strong intermolecular forces holding constituent particles at fixed equilibrium positions.


| Property | Crystalline Solids | Amorphous Solids (Pseudo Solids / Supercooled Liquids) |
| :--- | :--- | :--- |
| **Particle Arrangement** | Regular, repeating 3D arrangement extending over infinite distances (**Long-range order**). | Disordered, irregular arrangement with only local regularity (**Short-range order** only). |
| **Melting Point** | **Sharp, characteristic melting point**; solid transforms abruptly into liquid at a precise temperature. | Melt gradually over a wide range of temperatures; soften upon heating and can be molded. |
| **Heat of Fusion** | Definite and characteristic heat of fusion ($\Delta H_{\text{fus}}$). | Indefinite heat of fusion; no characteristic enthalpy break during heating. |
| **Cleavage Property** | Cleave along clean, smooth, planar cleavage faces when cut with a sharp tool. | Break with irregular, conchoidal, uneven, or jagged surfaces. |
| **Isotropy vs. Anisotropy** | **Anisotropic:** Physical properties (refractive index, electrical conductance, thermal expansion, mechanical strength) have different numerical values when measured along different crystallographic directions due to varying particle alignments. | **Isotropic:** Physical properties are identical in all directions due to the overall random, statistically uniform spatial orientation of particles. |
| **Physical Nature** | True solids with definite crystal lattices. | Pseudo solids, supercooled liquids of high viscosity (e.g., ancient window panes thicker at the bottom due to slow gravitational flow). |
| **Examples** | Metallic elements ($\text{Cu}, \text{Fe}, \text{Au}$), ionic salts ($\text{NaCl}, \text{KCl}, \text{KNO}_3$), covalent networks (Diamond, Graphite, $\text{SiC}, \text{SiO}_2$), molecular crystals (Ice, Dry ice $\text{CO}_2$, Naphthalene, Sucrose). | Glass, fused silica ($\text{SiO}_2$ glass), plastics, rubber, synthetic polymers, pitch. |


---


### 1.2 Four Types of Crystalline Solids


| Classification | Constituent Particles | Dominant Binding Forces | Mechanical & Thermal Properties | Electrical Conductivity | High-Yield JEE Examples |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Molecular Solids** | Small molecules or noble gas atoms | Weak intermolecular forces | Soft, volatile, low to moderate melting points | Insulators in all physical states | • **Non-polar:** Dispersion / London forces; soft, low MP ($\text{H}_2, \text{Cl}_2, \text{I}_2, \text{CH}_4, \text{CO}_2\text{ (dry ice)}, \text{CCl}_4, \text{Ar}$).<br>• **Polar:** Dipole-dipole interactions; soft, low MP ($\text{HCl}, \text{SO}_2, \text{solid NH}_3$).<br>• **Hydrogen-bonded:** Intermolecular H-bonds; volatile liquids or soft solids ($\text{H}_2\text{O (ice)}, \text{H}_3\text{BO}_3$). |
| **Ionic Solids** | Positively and negatively charged ions (Cations & Anions) | Strong non-directional Coulombic electrostatic forces of attraction | Hard, brittle, high melting and boiling points | **Insulators in solid state** (ions locked in lattice); **conductors in molten or aqueous states** (ions acquire mobility) | $\text{NaCl}, \text{KCl}, \text{CsCl}, \text{ZnS}, \text{CaF}_2, \text{MgO}, \text{KNO}_3, \text{LiF}$. |
| **Metallic Solids** | Positive metal ions (kernels) in a sea of delocalized valence electrons | Metallic bonding (electrostatic attraction between mobile electron sea and fixed kernels) | Malleable, ductile, moderate to high tensile strength, wide MP range | **Excellent electrical and thermal conductors in both solid and molten states** (free mobile electron gas) | All metallic elements and alloys: $\text{Fe}, \text{Cu}, \text{Ag}, \text{Au}, \text{Mg}, \text{Al}, \text{Na}, \text{W}$. |
| **Covalent / Network Solids** | Non-metal atoms linked in continuous 3D networks | Directional, localized, strong covalent bonds | Extremely hard, rigid, brittle, ultra-high melting points | **Electrical insulators** (except Graphite which has delocalized $\pi$ electrons in 2D hexagonal sheets) | • **Diamond:** $sp^3$ hybridized, 3D network, hardest natural substance, insulator.<br>• **Graphite:** $sp^2$ hybridized, 2D layers held by weak van der Waals forces, soft, solid lubricant, conductor.<br>• **Carborundum ($\text{SiC}$):** Abrasive, ultra-hard.<br>• **Silica ($\text{SiO}_2$ Quartz), Boron nitride ($\text{BN}$), $\text{AlN}$**. |


---


## 2. Crystallographic Foundations: Space Lattices, Basis, & Systems


### 2.1 Space Lattice, Basis, and Unit Cell
* **Space Lattice:** An infinite, periodic 3D array of mathematical points in space in which every lattice point possesses an identical spatial environment.
* **Basis (Motif):** A group of one or more atoms, ions, or molecules associated with each lattice point.
$$\text{Crystal Structure} = \text{Space Lattice} + \text{Basis}$$
* **Unit Cell:** The fundamental, smallest repeating geometric building block of a crystal lattice that displays the complete symmetry of the macroscopic crystal. Repeated translation of the unit cell in three dimensions along its axes reproduces the entire macroscopic crystal.


---


### 2.2 Two-Dimensional Unit Cells (5 Bravais Lattices)
In 2D space, a unit cell is defined by two axial lengths ($a, b$) and one included angle ($\theta$). Exactly 5 distinct 2D Bravais lattices exist:
1. **Square:** $a = b, \theta = 90^\circ$
2. **Rectangular (Primitive):** $a \ne b, \theta = 90^\circ$
3. **Rectangular (Centered):** $a \ne b, \theta = 90^\circ$ with an additional interior lattice point.
4. **Hexagonal:** $a = b, \theta = 120^\circ$ (or $60^\circ$)
5. **Oblique (Parallelogram):** $a \ne b, \theta \ne 90^\circ$


---


### 2.3 Three-Dimensional Unit Cells: The 7 Crystal Systems and 14 Bravais Lattices
A 3D unit cell is completely defined by 6 crystallographic parameters: 3 edge lengths ($a, b, c$) and 3 interfacial angles ($\alpha, \beta, \gamma$).
* Mnemonic for 7 Crystal Systems: **C-T-O-M-H-R-T** (*"CUTE OUR MOTHER"*):


| Crystal System | Axial Intercepts | Axial Angles | Bravais Lattices Present | Total Lattices | Prototypical Examples |
| :--- | :--- | :--- | :--- | :---: | :--- |
| **1. Cubic** | $a = b = c$ | $\alpha = \beta = \gamma = 90^\circ$ | Primitive ($P$), Body-Centered ($I$), Face-Centered ($F$) | **3** | $\text{Cu}, \text{Ag}, \text{Au}, \text{NaCl}, \text{KCl}, \text{ZnS}, \text{CsCl}, \text{Diamond}$ |
| **2. Tetragonal** | $a = b \ne c$ | $\alpha = \beta = \gamma = 90^\circ$ | Primitive ($P$), Body-Centered ($I$) | **2** | White tin ($\beta\text{-Sn}$), $\text{SnO}_2, \text{TiO}_2\text{ (Rutile)}, \text{CaSO}_4$ |
| **3. Orthorhombic** | $a \ne b \ne c$ | $\alpha = \beta = \gamma = 90^\circ$ | Primitive ($P$), Body-Centered ($I$), Face-Centered ($F$), End-Centered ($C$) | **4** | Rhombic sulfur, $\text{KNO}_3, \text{BaSO}_4, \text{PbCO}_3, \text{MgSO}_4 \cdot 7\text{H}_2\text{O}$ |
| **4. Monoclinic** | $a \ne b \ne c$ | $\alpha = \gamma = 90^\circ, \beta \ne 90^\circ$ | Primitive ($P$), End-Centered ($C$) | **2** | Monoclinic sulfur, $\text{Na}_2\text{SO}_4 \cdot 10\text{H}_2\text{O}, \text{CaSO}_4 \cdot 2\text{H}_2\text{O}$ |
| **5. Hexagonal** | $a = b \ne c$ | $\alpha = \beta = 90^\circ, \gamma = 120^\circ$ | Primitive ($P$) | **1** | $\text{Graphite}, \text{ZnO}, \text{CdS}, \text{Mg}, \text{Zn}, \text{Be}, \text{PbI}_2$ |
| **6. Rhombohedral (Trigonal)** | $a = b = c$ | $\alpha = \beta = \gamma \ne 90^\circ$ | Primitive ($P$) | **1** | $\text{Calcite (CaCO}_3\text{)}, \text{Cinnabar (HgS)}, \text{Sb}, \text{Bi}, \text{NaNO}_3$ |
| **7. Triclinic** | $a \ne b \ne c$ | $\alpha \ne \beta \ne \gamma \ne 90^\circ$ | Primitive ($P$) | **1** | $\text{K}_2\text{Cr}_2\text{O}_7, \text{CuSO}_4 \cdot 5\text{H}_2\text{O}, \text{H}_3\text{BO}_3$ |
| **Total** | | | | **14** | **14 Bravais Lattices** |


* **Symmetry Extremes:**
  * **Most Symmetrical System:** **Cubic** ($a = b = c$ and $\alpha = \beta = \gamma = 90^\circ$).
  * **Most Unsymmetrical System:** **Triclinic** ($a \ne b \ne c$ and $\alpha \ne \beta \ne \gamma \ne 90^\circ$).


---


## 3. Analysis of Cubic Lattices & Close-Packed Assemblies


### 3.1 Visual Preservation: Cubic Unit Cells & Contact Planes


![Cubic Unit Cells and Packing Geometry](/media/cubic_unit_cells_sc_bcc_fcc_and_packing_geometry.webp)
*Description: Two-panel crystallographic comparison graphic: (A) Visual schematics of Simple Cubic (SC), Body-Centered Cubic (BCC), and Face-Centered Cubic (FCC/CCP) unit cells highlighting contact planes and touching conditions: SC touching along cube edges ($a = 2r$), BCC touching along body diagonals ($a\sqrt{3} = 4r$), and FCC touching along face diagonals ($a\sqrt{2} = 4r$); (B) Comprehensive comparative table of crystallographic metrics (effective number of atoms $Z$, coordination numbers, 1st, 2nd, and 3rd nearest neighbor distances and multiplicities, packing fractions, and void percentages) along with the universal cubic crystal density equation.*


---


### 3.2 Simple Cubic (SC) Unit Cell
* **Geometry:** Atoms occupy strictly the 8 corners of the cube.
* **Effective Atoms per Unit Cell ($Z$):**
  $$Z = 8 \times \frac{1}{8} = 1$$
* **Touching Condition:** Spheres touch along the cube edge:
  $$a = 2r \implies r = \frac{a}{2}$$
* **Coordination Number (CN):** $\text{CN} = 6$ (each corner atom touches 4 in its own plane, 1 in the plane above, and 1 in the plane below).
* **Coordination Shells in SC:**
  1. **1st Nearest Neighbors:** $6$ atoms at distance $d_1 = a$.
  2. **2nd Nearest Neighbors:** $12$ atoms at distance $d_2 = a\sqrt{2}$ (across face diagonals).
  3. **3rd Nearest Neighbors:** $8$ atoms at distance $d_3 = a\sqrt{3}$ (across body diagonals).
* **Packing Efficiency (Packing Fraction, P.F.):**
  $$\text{P.F.} = \frac{\text{Volume occupied by atoms in unit cell}}{\text{Total volume of unit cell}} = \frac{1 \times \frac{4}{3}\pi r^3}{a^3} = \frac{\frac{4}{3}\pi r^3}{(2r)^3} = \frac{\pi}{6} \approx \mathbf{52.36\%}$$
* **Void Space:** $100\% - 52.36\% = \mathbf{47.64\%}$ (very loose, open packing; only Polonium, $\text{Po}$, exhibits SC at normal conditions).


---


### 3.3 Body-Centered Cubic (BCC) Unit Cell
* **Geometry:** Atoms occupy the 8 corners of the cube plus 1 atom at the body center. Corner atoms do not touch one another.
* **Effective Atoms per Unit Cell ($Z$):**
  $$Z = \left(8 \times \frac{1}{8}\right) + (1 \times 1) = 2$$
* **Touching Condition:** Central atom is in simultaneous physical contact with all 8 corner atoms along the body diagonal:
  $$\text{Body Diagonal} = a\sqrt{3} = 4r \implies r = \frac{a\sqrt{3}}{4} \quad \left(a = \frac{4r}{\sqrt{3}}\right)$$
* **Coordination Number (CN):** $\text{CN} = 8$ (the body-center atom touches all 8 corner atoms).
* **Coordination Shells in BCC:**
  1. **1st Nearest Neighbors:** $8$ atoms at distance $d_1 = \frac{a\sqrt{3}}{2} \approx 0.866a$.
  2. **2nd Nearest Neighbors:** $6$ atoms at distance $d_2 = a$.
  3. **3rd Nearest Neighbors:** $12$ atoms at distance $d_3 = a\sqrt{2} \approx 1.414a$.
  4. **4th Nearest Neighbors:** $24$ atoms at distance $d_4 = \frac{a\sqrt{11}}{2} \approx 1.658a$.
* **Packing Efficiency (P.F.):**
  $$\text{P.F.} = \frac{2 \times \frac{4}{3}\pi r^3}{a^3} = \frac{\frac{8}{3}\pi r^3}{\left(\frac{4r}{\sqrt{3}}\right)^3} = \frac{\frac{8}{3}\pi r^3}{\frac{64 r^3}{3\sqrt{3}}} = \frac{\sqrt{3}\pi}{8} \approx \mathbf{68.02\%}$$
* **Void Space:** $100\% - 68.02\% = \mathbf{31.98\%}$ (e.g., Alkali metals $\text{Li, Na, K, Rb, Cs}$, and transition metals $\text{Fe, Cr, W, Mo, V}$).


---


### 3.4 Face-Centered Cubic (FCC / CCP) Unit Cell
* **Geometry:** Atoms occupy the 8 corners plus the centers of all 6 faces.
* **Effective Atoms per Unit Cell ($Z$):**
  $$Z = \left(8 \times \frac{1}{8}\right) + \left(6 \times \frac{1}{2}\right) = 1 + 3 = 4$$
* **Touching Condition:** Corner atoms touch face-center atoms along the face diagonal:
  $$\text{Face Diagonal} = a\sqrt{2} = 4r \implies r = \frac{a\sqrt{2}}{4} = \frac{a}{2\sqrt{2}} \quad (a = 2\sqrt{2}r)$$
* **Coordination Number (CN):** $\text{CN} = 12$ (each atom touches 4 in its own face plane, 4 in the parallel plane above, and 4 in the parallel plane below; or 6 in a hexagonal layer, 3 above, 3 below).
* **Coordination Shells in FCC:**
  1. **1st Nearest Neighbors:** $12$ atoms at distance $d_1 = \frac{a}{\sqrt{2}} \approx 0.707a$.
  2. **2nd Nearest Neighbors:** $6$ atoms at distance $d_2 = a$.
  3. **3rd Nearest Neighbors:** $24$ atoms at distance $d_3 = a\sqrt{\frac{3}{2}} = \frac{a\sqrt{6}}{2} \approx 1.225a$.
  4. **4th Nearest Neighbors:** $12$ atoms at distance $d_4 = a\sqrt{2} \approx 1.414a$.
* **Packing Efficiency (P.F.):**
  $$\text{P.F.} = \frac{4 \times \frac{4}{3}\pi r^3}{a^3} = \frac{\frac{16}{3}\pi r^3}{(2\sqrt{2}r)^3} = \frac{\frac{16}{3}\pi r^3}{16\sqrt{2}r^3} = \frac{\pi}{3\sqrt{2}} \approx \mathbf{74.05\%}$$
* **Void Space:** $100\% - 74.05\% = \mathbf{25.95\%}$ (Maximum possible packing density for equal rigid spheres; e.g., $\text{Cu, Ag, Au, Al, Ni, Pt, Pb}$).


---


### 3.5 Hexagonal Close Packing (HCP) Unit Cell
* **Stacking Sequence:** Stacking of 2D close-packed hexagonal layers in an $ABABAB\dots$ pattern, where spheres of the 3rd layer eclipse the 1st layer spheres directly.
* **Coordination Number (CN):** $\text{CN} = 12$ (each atom touches 6 in its own coplanar layer, 3 in the depressions above, and 3 in the depressions below).
* **Effective Atoms per Unit Cell ($Z$):**
  $$Z = \left(12 \text{ corners} \times \frac{1}{6}\right) + \left(2 \text{ face-centers} \times \frac{1}{2}\right) + (3 \text{ interior atoms} \times 1) = 2 + 1 + 3 = \mathbf{6}$$
* **Geometric Parameters of HCP:**
  * Base edge length: $a = 2r$.
  * Height of unit cell ($c$ or $h$): The height equals twice the distance between adjacent close-packed layers:
    $$c = 4r\sqrt{\frac{2}{3}} = 2a\sqrt{\frac{2}{3}} \approx 1.633a$$
  * Area of Hexagonal Base: Composed of 6 equilateral triangles of side $a$:
    $$\text{Base Area} = 6 \times \left(\frac{\sqrt{3}}{4} a^2\right) = \frac{3\sqrt{3}}{2} a^2 = \frac{3\sqrt{3}}{2}(2r)^2 = 6\sqrt{3}r^2$$
  * Volume of HCP Unit Cell ($V_{\text{HCP}}$):
    $$V_{\text{HCP}} = \text{Base Area} \times c = (6\sqrt{3}r^2) \times \left(4r\sqrt{\frac{2}{3}}\right) = 24\sqrt{2}r^3$$
* **Packing Efficiency (P.F.):**
  $$\text{P.F.} = \frac{6 \times \frac{4}{3}\pi r^3}{24\sqrt{2}r^3} = \frac{8\pi r^3}{24\sqrt{2}r^3} = \frac{\pi}{3\sqrt{2}} \approx \mathbf{74.05\%}$$
* **Void Space:** $25.95\%$ (Identical to CCP/FCC; e.g., $\text{Mg, Zn, Cd, Ti, Be, Zr}$).


---


### 3.6 Crystal Density Analytics
The macroscopic density of a crystalline solid is identical to the microscopic density of its unit cell:
$$\mathbf{d = \frac{\text{Mass of Unit Cell}}{\text{Volume of Unit Cell}} = \frac{Z \cdot M}{N_A \cdot a^3}}$$
where:
* $d$ = Density of crystal ($\text{g/cm}^3$).
* $Z$ = Number of formula units or atoms per unit cell ($1$ for SC, $2$ for BCC, $4$ for FCC, $6$ for HCP).
* $M$ = Molar mass of substance ($\text{g/mol}$).
* $N_A = 6.022 \times 10^{23}\text{ mol}^{-1}$ = Avogadro's constant.
* $a$ = Edge length of cubic unit cell ($\text{cm}$). (Note conversion: $1\text{ Å} = 10^{-8}\text{ cm}$, $1\text{ pm} = 10^{-10}\text{ cm}$).
* Alternative direct atomic mass form:
  $$d = \frac{Z \cdot M(\text{amu})}{a^3(\text{Å}^3)} \times 1.6605\text{ g/cm}^3$$


---


## 4. Interstitial Voids & Limiting Radius Ratio Rules


### 4.1 Visual Preservation: Voids & Radius Ratio Rules


![Tetrahedral and Octahedral Voids in FCC and HCP](/media/tetrahedral_and_octahedral_voids_in_fcc_and_hcp.webp)
*Description: Two-panel void topology and coordination graphic: (A) Spatial distribution and counting of Octahedral Voids (OVs) and Tetrahedral Voids (TVs) in Face-Centered Cubic (FCC/CCP) and Hexagonal Close Packed (HCP) unit cells, showing OVs at 1 body center and 12 edge centers, and 8 TVs on 4 body diagonals; (B) Derivations of Limiting Radius Ratios ($r_{\text{void}}/R_{\text{sphere}}$) and coordination polyhedra for Triangular Planar ($0.155$), Tetrahedral ($0.225$), Octahedral ($0.414$), and Cubical ($0.732$) geometries.*


---


### 4.2 Limiting Radius Ratio ($R.R.$) Rules
In ionic solids, non-directional electrostatic attraction drives the structure toward maximum coordination number while avoiding mutual repulsion between like-charged ions. The critical (limiting) radius ratio represents the exact geometric condition where cations touch coordinating anions simultaneously while anions touch each other:
$$R.R. = \frac{r_{\text{cation}}}{r_{\text{anion}}} = \frac{r_+}{r_-}$$


| Limiting Radius Ratio Range | Coordination Number | Void Geometry / Coordination Polyhedron | Structural Examples |
| :--- | :---: | :--- | :--- |
| $\frac{r_+}{r_-} < 0.155$ | **2** | Linear | Rare in ionic solids ($\text{BeF}_2$ vapor) |
| $0.155 \le \frac{r_+}{r_-} < 0.225$ | **3** | Triangular Planar | $\text{B}_2\text{O}_3$, Borates ($\text{BO}_3^{3-}$) |
| $0.225 \le \frac{r_+}{r_-} < 0.414$ | **4** | Tetrahedral | $\text{ZnS (Zinc blende)}, \text{SiO}_4^{4-}, \text{CuCl}, \text{CuBr}, \text{AgI}$ |
| $0.414 \le \frac{r_+}{r_-} < 0.732$ | **6** | Octahedral | $\text{NaCl (Rock salt)}, \text{MgO}, \text{CaO}, \text{KBr}, \text{AgCl}, \text{AgBr}$ |
| $0.732 \le \frac{r_+}{r_-} < 1.000$ | **8** | Cubical (Body-Centered) | $\text{CsCl}, \text{CsBr}, \text{CsI}, \text{TlCl}, \text{NH}_4\text{Cl}$ |
| $\frac{r_+}{r_-} = 1.000$ | **12** | Close-Packed (FCC / HCP) | Pure elemental metals ($\text{Cu, Au, Ag}$) |


---


### 4.3 Rigorous Geometric Proofs of Critical Radius Ratios


#### 1. Triangular Planar Void ($\text{CN} = 3$)
* Three spheres of radius $R$ touch in an equilateral triangle of side $2R$. A small void sphere of radius $r$ sits at the centroid.
* Distance from corner to centroid: $d = \frac{2R}{\sqrt{3}} = R + r$.
* Taking the ratio:
  $$\cos(30^\circ) = \frac{\sqrt{3}}{2} = \frac{R}{R + r} \implies \frac{R + r}{R} = \frac{2}{\sqrt{3}} \implies \mathbf{\frac{r}{R} = \frac{2}{\sqrt{3}} - 1 \approx 0.155}$$


#### 2. Tetrahedral Void ($\text{CN} = 4$)
* Consider a cube of edge length $a$ with spheres of radius $R$ at alternate corners. Four touching spheres form a regular tetrahedron.
* Face diagonal contact: $2R = a\sqrt{2} \implies a = \frac{2R}{\sqrt{2}} = \sqrt{2}R$.
* The void sphere of radius $r$ sits at the center of the cube. The body diagonal connects two opposite corners through the void center:
  $$2(R + r) = a\sqrt{3} = (\sqrt{2}R)\sqrt{3} = \sqrt{6}R$$
  $$\frac{R + r}{R} = \frac{\sqrt{6}}{2} = \sqrt{\frac{3}{2}} \approx 1.2247 \implies \mathbf{\frac{r}{R} = \sqrt{1.5} - 1 \approx 0.225}$$


#### 3. Octahedral Void ($\text{CN} = 6$)
* Four spheres of radius $R$ lie in a horizontal plane touching in a square of side $2R$. One sphere lies directly above and one directly below.
* The diagonal of the square connects two opposite spheres through the central void sphere of radius $r$:
  $$2(R + r) = (2R)\sqrt{2} \implies R + r = \sqrt{2}R \implies \mathbf{\frac{r}{R} = \sqrt{2} - 1 \approx 0.414}$$


#### 4. Cubical Void ($\text{CN} = 8$)
* Eight spheres of radius $R$ occupy the corners of a simple cubic unit cell of edge length $a = 2R$. A central void sphere of radius $r$ sits at the body center.
* The body diagonal connects two opposite corners through the void:
  $$2(R + r) = a\sqrt{3} = (2R)\sqrt{3} \implies R + r = \sqrt{3}R \implies \mathbf{\frac{r}{R} = \sqrt{3} - 1 \approx 0.732}$$


---


### 4.4 Spatial Distribution & Counts of Voids in FCC and HCP
For any close-packed assembly of $N$ spheres:
$$\mathbf{\text{Number of Octahedral Voids (OVs)} = N}$$
$$\mathbf{\text{Number of Tetrahedral Voids (TVs)} = 2N}$$


#### Voids in FCC Unit Cell ($Z = N = 4$):
1. **Octahedral Voids ($N = 4$):**
   * $1$ at the exact body center of the cube (unshared, contribution = $1$).
   * $12$ at the centers of all 12 cube edges (each shared by 4 unit cells, contribution = $12 \times \frac{1}{4} = 3$).
   * Total OVs $= 1 + 3 = 4$.
2. **Tetrahedral Voids ($2N = 8$):**
   * Divided into 8 miniature sub-cubes of side $a/2$. The center of each miniature sub-cube contains exactly $1$ tetrahedral void.
   * Alternatively, each of the $4$ body diagonals contains $2$ tetrahedral voids located at a distance of $\frac{a\sqrt{3}}{4}$ from each corner.
   * All 8 TVs lie completely inside the unit cell (unshared, contribution = $8 \times 1 = 8$).
3. **Key Inter-Void Distances in FCC:**
   * Distance between two closest TVs $= \frac{a}{2}$.
   * Distance between two closest OVs $= \frac{a}{\sqrt{2}}$.
   * Distance between an OV and its nearest TV $= \frac{a\sqrt{3}}{4}$.


#### Voids in HCP Unit Cell ($Z = N = 6$):
* **Octahedral Voids ($N = 6$):** All 6 lie completely unshared within the interior of the hexagonal prism.
* **Tetrahedral Voids ($2N = 12$):** 6 lie entirely within the cell, and 12 lie on the edges/faces contributing an effective total of 6, yielding $12$ effective TVs.


---


## 5. Major Ionic Crystal Structural Archetypes


### 5.1 Visual Preservation: Ionic Crystals & Crystal Imperfections


![Ionic Crystal Structures and Crystal Defects](/media/ionic_crystal_structures_and_crystal_defects.webp)
*Description: Two-panel comprehensive solid-state chemistry schematic: (A) Four primary ionic crystal structural types ($\text{NaCl}$ rock salt $6:6$, $\text{CsCl}$ cubical $8:8$, $\text{ZnS}$ zinc blende $4:4$, and $\text{CaF}_2$ fluorite $8:4$) detailing sub-lattice positions, contact equations, formula unit counts, and prototypical examples; (B) Microscopic schematics and thermodynamic mechanisms of crystal imperfections: stoichiometric Schottky defects (equal vacancies, density decreases) vs. Frenkel defects (interstitial dislocation, density unchanged), non-stoichiometric metal excess with $F$-centres imparting color and paramagnetism, and metal deficiency in transition metal oxides.*


---


### 5.2 Comparative Analysis of Primary Ionic Structures


| Structural Type | Lattice-Forming Ion | Void-Occupying Ion | Formula Units ($Z$) | Coordination Ratio ($\text{Cation} : \text{Anion}$) | Inter-Ionic Contact Formula | Prototypical Examples |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| **Rock Salt ($\text{NaCl}$)** | $\text{Cl}^-$ in **FCC** ($Z = 4$) | $\text{Na}^+$ in **ALL Octahedral Voids** ($Z = 4$) | **4** | **6 : 6** | $\mathbf{r_+ + r_- = \frac{a}{2}}$ | Alkali halides ($\text{LiX, NaX, KX, RbX}$ except $\text{CsX}$), alkaline earth oxides ($\text{MgO, CaO, SrO, BaO}$ except $\text{BeO}$), $\text{AgF, AgCl, AgBr}$. |
| **Caesium Chloride ($\text{CsCl}$)** | $\text{Cl}^-$ at corners of **Simple Cubic** ($Z = 1$) | $\text{Cs}^+$ at **Body Center (Cubical Void)** ($Z = 1$) | **1** | **8 : 8** | $\mathbf{r_+ + r_- = \frac{a\sqrt{3}}{2}}$ | $\text{CsCl}, \text{CsBr}, \text{CsI}, \text{TlCl}, \text{TlBr}, \text{TlI}, \text{NH}_4\text{Cl}$. |
| **Zinc Blende ($\text{ZnS}$ Sphalerite)** | $\text{S}^{2-}$ in **FCC** ($Z = 4$) | $\text{Zn}^{2+}$ in **Alternate Tetrahedral Voids** (4 of 8, $Z = 4$) | **4** | **4 : 4** | $\mathbf{r_+ + r_- = \frac{a\sqrt{3}}{4}}$ | $\text{ZnS (sphalerite)}, \text{CuCl}, \text{CuBr}, \text{CuI}, \text{AgI}, \text{BeO}$. |
| **Wurtzite ($\text{ZnS}$)** | $\text{S}^{2-}$ in **HCP** ($Z = 6$) | $\text{Zn}^{2+}$ in **Alternate Tetrahedral Voids** (6 of 12, $Z = 6$) | **6** | **4 : 4** | Closest contact along $c$-axis | $\text{ZnO}, \text{BeO}, \text{CdS}, \text{AgI}$. |
| **Diamond** | Identical $\text{C}$ atoms form **FCC** ($Z = 4$) | Identical $\text{C}$ atoms in **Alternate TVs** ($Z = 4$) | **8** | **4 : 4** | $\mathbf{2r = \frac{a\sqrt{3}}{4} \implies a = \frac{8r}{\sqrt{3}}}$ | Diamond, Silicon ($\text{Si}$), Germanium ($\text{Ge}$), Grey tin ($\alpha\text{-Sn}$). P.F. = $\mathbf{34\%}$. |
| **Fluorite ($\text{CaF}_2$)** | $\text{Ca}^{2+}$ in **FCC** ($Z = 4$) | $\text{F}^-$ in **ALL 8 Tetrahedral Voids** ($Z = 8$) | **4** | **8 : 4** | $\mathbf{r_+ + r_- = \frac{a\sqrt{3}}{4}}$ | $\text{CaF}_2, \text{SrF}_2, \text{BaF}_2, \text{BaCl}_2, \text{CdF}_2, \text{PbF}_2, \text{ThO}_2$. |
| **Antifluorite ($\text{Na}_2\text{O}$)** | $\text{O}^{2-}$ in **FCC** ($Z = 4$) | $\text{Na}^+$ in **ALL 8 Tetrahedral Voids** ($Z = 8$) | **4** | **4 : 8** | $\mathbf{r_+ + r_- = \frac{a\sqrt{3}}{4}}$ | $\text{Li}_2\text{O}, \text{Na}_2\text{O}, \text{K}_2\text{O}, \text{Rb}_2\text{O}$. |


---


### 5.3 Specialized Complex Structures
1. **Normal Spinel Structure ($\text{MgAl}_2\text{O}_4 = \text{AB}_2\text{O}_4$):**
   * Oxide ions ($\text{O}^{2-}$) form an **FCC (CCP)** lattice ($Z = 32\ \text{O}^{2-}$ in a large unit cell, or $4\ \text{O}^{2-}$ per formula unit).
   * Divalent cations ($\text{A}^{2+} = \text{Mg}^{2+}$) occupy **$1/8\text{th}$ of Tetrahedral Voids**.
   * Trivalent cations ($\text{B}^{3+} = \text{Al}^{3+}$) occupy **$1/2$ of Octahedral Voids**.
   * Examples: $\text{MgAl}_2\text{O}_4, \text{ZnFe}_2\text{O}_4, \text{FeCr}_2\text{O}_4$.
2. **Inverse Spinel Structure ($\text{Fe}_3\text{O}_4 = \text{Fe}^{3+}[\text{Fe}^{2+}\text{Fe}^{3+}]\text{O}_4$):**
   * Oxide ions form an **FCC** lattice.
   * One half of trivalent cations ($\text{Fe}^{3+}$) occupy tetrahedral voids.
   * The remaining half of trivalent cations ($\text{Fe}^{3+}$) and all divalent cations ($\text{Fe}^{2+}$) occupy octahedral voids.
   * Examples: $\text{Magnetite (Fe}_3\text{O}_4\text{)}, \text{MgFe}_2\text{O}_4$.
3. **Perovskite Structure ($\text{CaTiO}_3 = \text{ABO}_3$):**
   * $\text{Ca}^{2+}$ cations occupy the **8 corners** of the cubic unit cell ($\text{CN} = 12$ with respect to $\text{O}^{2-}$).
   * Oxide ions ($\text{O}^{2-}$) occupy the centers of all **6 faces** ($\text{CN} = 6$ with $\text{Ca}^{2+}$ and $2$ with $\text{Ti}^{4+}$).
   * $\text{Ti}^{4+}$ cation occupies the **body center** ($\text{CN} = 6$ with respect to $\text{O}^{2-}$, surrounded octahedrally).
   * Examples: $\text{CaTiO}_3, \text{BaTiO}_3$ (ferroelectric material).


---


### 5.4 Dynamic Temperature and Pressure Transformations
* **Effect of Temperature ($\Delta$):** Elevating temperature increases atomic vibrational amplitudes, causing lattice expansion and lowering the effective coordination number:
  $$\text{CsCl Structure (8 : 8)} \xrightarrow{\Delta\ (\approx 760\text{ K})} \text{NaCl Structure (6 : 6)}$$
* **Effect of Pressure ($P$):** Applying high external pressure compresses the lattice, bringing neighboring ions closer and forcing higher coordination numbers:
  $$\text{NaCl Structure (6 : 6)} \xrightarrow{\text{High Pressure}} \text{CsCl Structure (8 : 8)}$$
  *(e.g., Rubidium halides $\text{RbCl, RbBr, RbI}$ adopt the rock salt structure at ambient conditions but transition to the caesium chloride structure at high pressure).*


---


## 6. X-Ray Diffraction & Crystallography: Bragg's Law & Miller Indices


### 6.1 Bragg's Law of X-Ray Diffraction
When a monochromatic X-ray beam of wavelength $\lambda$ is incident upon parallel crystal planes separated by interplanar distance $d$ at glancing angle $\theta$:
* The path difference between waves reflected from consecutive lattice planes is $\Delta x = 2d \sin\theta$.
* Constructive interference occurs when this path difference equals an integer multiple of the wavelength:
  $$\mathbf{n\lambda = 2d \sin\theta} \quad (n = 1, 2, 3, \dots)$$


---


### 6.2 Miller Indices & Interplanar Spacing
* **Miller Indices $(hkl)$:** A set of integers designating a specific plane or family of parallel lattice planes.
  1. Determine the intercepts of the plane on the crystallographic axes in terms of lattice parameters: $p a, q b, r c$.
  2. Take the reciprocals of these intercept coefficients: $\frac{1}{p}, \frac{1}{q}, \frac{1}{r}$.
  3. Clear fractions to find the smallest set of coprime integers $(h, k, l)$.
* **Interplanar Spacing ($d_{hkl}$) for Cubic Crystals:**
  $$\mathbf{d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}}$$
* **Prototypical Cubic Planes:**
  * For plane $(100)$: $d_{100} = \frac{a}{\sqrt{1^2+0+0}} = a$.
  * For plane $(110)$: $d_{110} = \frac{a}{\sqrt{1^2+1^2+0}} = \frac{a}{\sqrt{2}}$.
  * For plane $(111)$: $d_{111} = \frac{a}{\sqrt{1^2+1^2+1^2}} = \frac{a}{\sqrt{3}}$.
  * Ratio: $d_{100} : d_{110} : d_{111} = 1 : \frac{1}{\sqrt{2}} : \frac{1}{\sqrt{3}} = 1 : 0.707 : 0.577$.


---


## 7. Crystal Imperfections & Defects


### 7.1 Classification of Crystal Defects
Real crystals deviate from ideal structural periodicity at temperatures above $0\text{ K}$ due to entropy considerations ($\Delta G = \Delta H - T\Delta S$). Imperfections are classified by geometric dimensionality:
1. **Point Defects (0D):** Irregularities or deviations around a single atom or lattice point.
2. **Line Defects / Dislocations (1D):** Deviations along an entire row of lattice points (Edge & Screw dislocations).
3. **Surface / Planar Defects (2D):** Grain boundaries, tilt boundaries, stacking faults.
4. **Volume Defects (3D):** Voids, cracks, or macroscopic inclusions.


---


### 7.2 Stoichiometric Point Defects


#### 1. Schottky Defect (Vacancy Defect in Ionic Solids)
* **Mechanism:** Equal numbers of cations and anions leave their regular lattice positions, creating stoichiometric cation-anion pairs of vacancies.
* **Preconditions:**
  1. High coordination numbers ($6$ or $8$).
  2. Cation and anion of comparable radii ($r_+ \approx r_-$, small size difference).
* **Consequences:**
  * Electrical neutrality is strictly preserved.
  * **Density of the crystal decreases** ($d_{\text{obs}} < d_{\text{theo}}$).
  * Lattice energy and stability decrease slightly.
* **Vacancy Calculation:**
  $$\% \text{ Vacancies} = \frac{d_{\text{theo}} - d_{\text{obs}}}{d_{\text{theo}}} \times 100$$
* **Examples:** $\text{NaCl}, \text{KCl}, \text{KBr}, \text{CsCl}, \text{AgBr}$.


#### 2. Frenkel Defect (Dislocation Defect)
* **Mechanism:** A smaller ion (almost exclusively the cation) is dislocated from its normal lattice position and lodges into an interstitial void, creating a vacancy at its origin and an interstitial defect at its new site.
* **Preconditions:**
  1. Low coordination numbers ($4$ or $6$).
  2. Large difference in size between cation and anion ($r_- \gg r_+$).
* **Consequences:**
  * Electrical neutrality is strictly preserved.
  * **Density of the crystal remains completely unchanged** ($d_{\text{obs}} = d_{\text{theo}}$).
  * **Dielectric constant increases** because like-charged ions are brought into closer proximity.
* **Examples:** $\text{ZnS}, \text{AgCl}, \text{AgBr}, \text{AgI}$. (Note: Alkali metal halides do not show Frenkel defects because alkali cations are too large to fit into interstitial voids).
* **High-Yield JEE Critical Fact:** $\mathbf{AgBr}$ exhibits **BOTH Schottky and Frenkel defects**.


---


### 7.3 Non-Stoichiometric Point Defects


#### 1. Metal Excess Defect Due to Anionic Vacancies ($F$-Centres)
* **Mechanism:** When alkali halide crystals are heated in the vapor of their constituent alkali metal (e.g., $\text{NaCl}$ in $\text{Na}$ vapor):
  1. Metal atoms deposit on the crystal surface and ionize: $\text{Na} \to \text{Na}^+ + e^-$.
  2. Halide ions ($\text{Cl}^-$) diffuse to the surface to combine with $\text{Na}^+$.
  3. The released electrons diffuse into the crystal and become trapped in the vacant anionic sites.
* **$F$-Centre (Farbenzentrum / Color Centre):** An electron trapped in an anion vacancy.
* **Consequences:**
  * Imparts characteristic **color** due to excitation of the trapped electron upon absorbing visible light:
    * $\text{NaCl}$ in $\text{Na}$ vapor: **Yellow**.
    * $\text{LiCl}$ in $\text{Li}$ vapor: **Pink**.
    * $\text{KCl}$ in $\text{K}$ vapor: **Violet / Lilac**.
  * The crystal acquires **paramagnetism** due to unpaired trapped electrons.
  * Increases electrical conductivity (n-type semi-conduction).


#### 2. Metal Excess Defect Due to Extra Cations in Interstitial Sites
* **Mechanism:** Zinc oxide ($\text{ZnO}$) is white at room temperature. Upon heating, it loses oxygen reversibly:
  $$\text{ZnO}(s) \xrightarrow{\Delta} \text{Zn}^{2+} + \frac{1}{2}\text{O}_2(g) + 2e^-$$
* The excess $\text{Zn}^{2+}$ ions move into interstitial voids, and the released electrons occupy adjacent interstitial sites.
* **Consequence:** $\text{ZnO}$ turns **yellow when hot** and reverts to **white when cold**.


#### 3. Metal Deficiency Defect
* **Mechanism:** Occurs in compounds of transition metals that exhibit variable oxidation states (e.g., $\text{Fe}_{0.95}\text{O}, \text{Fe}_{0.93}\text{O}, \text{Cu}_{1.7}\text{S}, \text{Ni}_{0.98}\text{O}$).
* A fraction of metal cations is missing from lattice sites. Electrical neutrality is maintained by adjacent metal cations oxidizing to higher valence states ($\text{Fe}^{2+} \to \text{Fe}^{3+}$).
* **Quantitative Problem Archetype:**
  * For non-stoichiometric iron(II) oxide $\text{Fe}_{0.95}\text{O}$, calculate the percentage of total iron present as $\text{Fe}^{3+}$:
    Let moles of $\text{Fe}^{2+} = x$, then moles of $\text{Fe}^{3+} = 0.95 - x$.
    By electrical neutrality:
    $$2x + 3(0.95 - x) = 2 \implies 2x + 2.85 - 3x = 2 \implies x = 0.85$$
    $$\text{Fraction of } \text{Fe}^{2+} = \frac{0.85}{0.95} = \frac{17}{19} \approx \mathbf{89.47\%}$$
    $$\text{Fraction of } \text{Fe}^{3+} = \frac{0.10}{0.95} = \frac{2}{19} \approx \mathbf{10.53\%}$$


---


### 7.4 Impurity Defects
1. **Substitutional Impurity Defect:**
   * When molten $\text{NaCl}$ containing a trace amount of strontium chloride ($\text{SrCl}_2$) is crystallized:
   * Each divalent $\text{Sr}^{2+}$ ion replaces **two** univalent $\text{Na}^+$ ions to maintain electrical neutrality.
   * $\text{Sr}^{2+}$ occupies one $\text{Na}^+$ site, leaving the second $\text{Na}^+$ site permanently **vacant**.
   * **Universal Rule:**
     $$\mathbf{\text{Number of Cationic Vacancies Created} = \text{Number of Divalent Cations Doped}}$$
   * Similarly, doping $\text{CdCl}_2$ into $\text{AgCl}$ generates one $\text{Ag}^+$ vacancy per $\text{Cd}^{2+}$ ion.
2. **Interstitial Impurity Defect:**
   * Small non-metallic atoms ($\text{H, B, C, N}$) occupy interstitial voids within transition metal lattices (e.g., carbon in iron forming carbon steel, drastically enhancing tensile strength and hardness).


---


## 8. Electrical and Magnetic Properties of Solids


### 8.1 Electrical Properties & Band Theory
Solids exhibit electrical conductivities spanning 27 orders of magnitude ($10^{-20}$ to $10^7\ \Omega^{-1}\text{m}^{-1}$):


| Class | Electrical Conductivity ($\Omega^{-1}\text{m}^{-1}$) | Band Gap ($E_g$) Structure | Temperature Dependence of Conductivity |
| :--- | :--- | :--- | :--- |
| **Conductors** | $10^4$ to $10^7$ | Valence and conduction bands **overlap** or valence band is **partially filled** ($E_g = 0$). | **Decreases with temperature** ($T \uparrow \implies \sigma \downarrow$) due to increased lattice vibrational scattering of electrons. |
| **Insulators** | $10^{-20}$ to $10^{-10}$ | Large forbidden energy gap (**$E_g > 3\text{ eV}$**); thermal energy is insufficient to promote electrons across the gap. | Practically zero at ordinary temperatures. |
| **Semiconductors** | $10^{-6}$ to $10^4$ | Small forbidden energy gap (**$E_g < 3\text{ eV}$**); electrons can jump thermally into conduction band. | **Increases with temperature** ($T \uparrow \implies \sigma \uparrow$) as carrier density increases exponentially ($n \propto e^{-E_g / 2kT}$). |


---


### 8.2 Doping & Extrinsic Semiconductors
* **Intrinsic Semiconductors:** Pure elements ($\text{Si, Ge}$) with electrical conductivity too low for practical electronic applications.
* **Extrinsic Semiconductors (Doping):** Intentional introduction of trace impurities (Group 13 or Group 15 elements) into a Group 14 lattice ($\text{Si, Ge}$):
  1. **n-Type Semiconductor (Electron-Rich):**
     * Silicon doped with pentavalent Group 15 donor atoms ($\text{P, As, Sb}$).
     * 4 valence electrons form covalent bonds with adjacent $\text{Si}$ atoms; the **5th electron remains unbonded**, delocalized, and readily excited into the conduction band.
     * **Majority charge carriers:** Electrons ($e^-$).
  2. **p-Type Semiconductor (Electron-Deficient):**
     * Silicon doped with trivalent Group 13 acceptor atoms ($\text{B, Al, Ga, In}$).
     * 3 valence electrons form bonds, leaving an **electron vacancy (hole)** at the 4th bond site.
     * Neighboring electrons hop into the vacancy, causing the positive hole to migrate across the lattice.
     * **Majority charge carriers:** Holes ($h^+$).


---


### 8.3 Magnetic Properties & Domain Dynamics
Every electron possesses an intrinsic magnetic dipole moment arising from two types of motions: (i) orbital motion around the nucleus, and (ii) spin motion around its own axis ($\text{Bohr Magneton: } \mu_B = \frac{e h}{4\pi m_e} = 9.274 \times 10^{-24}\text{ A}\cdot\text{m}^2$).


| Magnetic Classification | Domain Alignment in Field | Net Magnetic Dipole ($\mu_{\text{net}}$) | Thermal Response | High-Yield Prototypical Examples |
| :--- | :--- | :--- | :--- | :--- |
| **1. Diamagnetic** | No permanent dipoles; weakly magnetized in direction **opposite** to applied magnetic field. | $\mu = 0$ (all electrons paired). | Weakly repelled by magnetic field; independent of temperature. | $\text{TiO}_2, \text{NaCl}, \text{C}_6\text{H}_6, \text{H}_2\text{O}, \text{N}_2, \text{Cu}^+$. |
| **2. Paramagnetic** | Permanent dipoles align weakly **parallel** to external magnetic field; lose magnetism when field is removed. | $\mu > 0$ (due to unpaired electrons). | Weakly attracted by magnetic field; magnetism decreases with temperature ($\chi \propto 1/T$, Curie's Law). | $\text{O}_2, \text{Cu}^{2+}, \text{Fe}^{3+}, \text{Cr}^{3+}, \text{VO}, \text{VO}_2, \text{TiO}$. |
| **3. Ferromagnetic** | Magnetic dipoles group into macroscopic **domains** that align permanently in the **same direction** ($\uparrow\uparrow\uparrow\uparrow$). | Permanent spontaneous macroscopic magnetization. | Strongly attracted; transforms into paramagnetic substance above the **Curie Temperature ($T_C$)**. | $\text{Fe}, \text{Co}, \text{Ni}, \text{Gd}, \text{CrO}_2\text{ (used in magnetic audio/video tapes)}$. |
| **4. Antiferromagnetic** | Adjacent domains align in strictly **compensatory antiparallel directions** with equal magnitudes ($\uparrow\downarrow\uparrow\downarrow$). | $\mu_{\text{net}} = 0$. | Weak magnetic response; transforms into paramagnetic substance above the **Néel Temperature ($T_N$)**. | $\text{MnO}, \text{MnO}_2, \text{Mn}_2\text{O}_3, \text{FeO}, \text{Fe}_2\text{O}_3, \text{NiO}, \text{CoO}, \text{Cr}$. |
| **5. Ferrimagnetic** | Magnetic domains align in parallel and antiparallel directions in **unequal magnitudes** ($\uparrow\uparrow\downarrow\uparrow\uparrow\downarrow$). | Small net spontaneous magnetic moment. | Moderately attracted; transforms into paramagnetic substance at elevated temperatures. | $\text{Magnetite (Fe}_3\text{O}_4\text{)}, \text{Ferrites: } \text{MgFe}_2\text{O}_4, \text{ZnFe}_2\text{O}_4$. |


---


## 9. High-Yield JEE Problem Archetypes & Trap Logs


### 9.1 Archetype 1: Removal of Atoms Along Crystallographic Axes & Planes
* **Problem Formula:** If a crystal of formula $\text{A}_x\text{B}_y\text{C}_z$ has atoms removed along specified geometric features, calculate the revised stoichiometric formula:
  * **Removal along one Cube Edge:** Removes **2 corners** and **1 edge center**.
  * **Removal along one Face Diagonal:** Removes **2 face corners** and **1 face center**.
  * **Removal along one Body Diagonal:** Removes **2 opposite corners**, **1 body center** (if present), and **2 tetrahedral voids** lying on that diagonal.
  * **Removal along an axis passing through the centers of two opposite faces:** Removes **2 face centers** and **1 body center**.
  * **Removal of one complete plane:**
    * Passing through a face: Removes 4 corners, 4 edge centers, and 1 face center.
    * Diagonal plane: Removes 4 corners, 2 face centers, 2 edge centers, and 1 body center.


### 9.2 Archetype 2: Solid State Traps & Pitfalls Log
* **Trap 1: Unit Discrepancy in Density Calculations:**
  Never mix $\text{pm}$ or $\text{Å}$ with $\text{cm}$ without cube conversion:
  $$a = 400\text{ pm} = 4 \times 10^{-8}\text{ cm} \implies a^3 = 64 \times 10^{-24}\text{ cm}^3$$
* **Trap 2: Octahedral Void vs. Edge Length in Rock Salt:**
  In $\text{NaCl}$, the relation $r_+ + r_- = a/2$ is **strictly universal** because $\text{Na}^+$ sits at edge centers and $\text{Cl}^-$ at corners. However, the condition $a\sqrt{2} = 4r_-$ is **only valid for an ideal, unexpanded crystal** where anions touch each other ($r_+/r_- = 0.414$). For real crystals where $r_+/r_- > 0.414$, anions do not touch!
* **Trap 3: Number of Carbon Atoms in Diamond:**
  Students frequently mistake $Z = 4$ for diamond. Diamond has carbon in an FCC lattice ($Z = 4$) **plus** carbon occupying 4 tetrahedral voids ($Z = 4$), giving **$Z = 8$ carbon atoms per unit cell**.
* **Trap 4: AgBr Dual Defect Trap:**
  When asked which halide exhibits both Frenkel and Schottky defects, the answer is strictly **$\text{AgBr}$**. $\text{AgCl}$ and $\text{AgI}$ show only Frenkel, while $\text{NaCl, KCl, CsCl}$ show only Schottky.
* **Trap 5: Cationic Vacancy Stochiometry with $\text{SrCl}_2$:**
  Doping $x$ moles of $\text{SrCl}_2$ produces $x$ moles of cationic vacancies, **NOT $2x$**. One $\text{Sr}^{2+}$ replaces two $\text{Na}^+$, but since $\text{Sr}^{2+}$ occupies one site, only **one** site remains vacant!