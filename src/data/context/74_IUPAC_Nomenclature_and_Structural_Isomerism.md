Chemistry Revision Context: Chapter 74 — IUPAC Nomenclature & Structural Isomerism


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/CHEMISTRY/IUPAC Nomenclature and Structural Isomerism/`, `1._IUPAC_Th_E_O0bBdNy.pdf`, `2._IUPAC_Ex_E.pdf`, `IUPAC_Sol_E.pdf`, and `3._IUPAC_APSP_E.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Organic Chemistry Core — Chemical Bonding Foundations in Carbon ($\sigma$ vs. $\pi$ Overlaps, Hybridization States $sp^3, sp^2, sp$, Bond Lengths & Angles, Carbon Electronegativity Scaling), Structural Notations (Complete, Condensed, Bond-Line Formats), Degree of Unsaturation (DU / DBE / HDI Formulation: $\text{DU} = C + 1 - \frac{H + X - N}{2}$), Polycyclic & Aromatic DU Invariants (Benzene $\text{DU}=4$, Cubane $\text{DU}=5$, Pyridine $\text{DU}=4$), Classification of Carbons & Hydrogens ($1^\circ, 2^\circ, 3^\circ, 4^\circ$), Classification of Alcohols vs. Amines ($1^\circ, 2^\circ, 3^\circ$ Amines as Distinct Functional Classes), Homologous Series Principles ($-\text{CH}_2-$ Invariant), The Universal IUPAC 5-Part Architectural Decomposition (Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix), Parent Chain Selection Hierarchy (Functional Group $>$ Multiple Bonds $>$ Chain Length $>$ Substituents), Lowest Locant Rule & First Point of Difference, Alphabetical Precedence Rules (di-/tri- Neglect vs. iso-/neo- Inclusion), Alkene vs. Alkyne Priority (Double Bond Precedence at Tied Locants, `-en-yne` Suffix Elision), Principal Functional Group Seniority Hierarchy ($-\text{COOH} > -\text{SO}_3\text{H} > -(\text{CO})_2\text{O} > -\text{COOR} > -\text{COX} > -\text{CONH}_2 > -\text{CN} > -\text{CHO} > >\text{C}=\text{O} > -\text{OH} > -\text{SH} > -\text{NH}_2$), Special Chain-Terminating Suffixes (`-carboxylic acid`, `-carbaldehyde`, `-carbonitrile`, `-carboxamide`), Symmetrical Tri-acid Naming (Propane-1,2,3-tricarboxylic Acid Rule), Alicyclic, Bicyclo (`bicyclo[a.b.c]alkane`) & Spiro (`spiro[a.b]alkane`) Nomenclature, Aromatic Derivative Naming, Structural Isomerism Taxonomy (Chain, Position, Functional Group, Metamerism, Ring-Chain), Tautomerism Dynamics (Keto-Enol 1,3-Prototropic Shifts, $\alpha$-Hydrogen Prerequisites, Enol Content Optimization via Aromaticity, Conjugation & Chelated Hydrogen Bonding, Solvent Polarity Shifts), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fundamentals of Organic Chemistry & Degree of Unsaturation


### 1.1 Carbon Hybridization, Bond Topology & Structural Representations


Organic chemistry is the chemistry of carbon compounds bonded covalently to hydrogen, oxygen, nitrogen, halogens, sulfur, and phosphorus:


1. **Hybridization States & Bond Geometries:**
   * **$sp^3$ Carbon:** Saturated tetrahedral geometry ($109^\circ 28'$); $4$ $\sigma$-bonds; $25\% \; s$-character; $\text{C}-\text{C}$ single bond length $= 1.54\text{ \AA}$.
   * **$sp^2$ Carbon:** Trigonal planar geometry ($120^\circ$); $3$ $\sigma$-bonds $+ 1$ $\pi$-bond; $33.3\% \; s$-character; $\text{C}=\text{C}$ double bond length $= 1.34\text{ \AA}$.
   * **$sp$ Carbon:** Linear geometry ($180^\circ$); $2$ $\sigma$-bonds $+ 2$ $\pi$-bonds; $50\% \; s$-character; $\text{C}\equiv\text{C}$ triple bond length $= 1.20\text{ \AA}$.
   * **Electronegativity Scaling:** Greater $s$-character pulls electron density closer to the carbon nucleus:
     $$\mathbf{\text{Electronegativity: } \quad C(sp) > C(sp^2) > C(sp^3)}$$
     *(Hence, terminal alkynes $\text{R}-\text{C}\equiv\text{C}-\text{H}$ possess acidic hydrogens that react with $\text{NaNH}_2$ or Tollens' reagent).*


2. **Structural Notations:**
   * **Complete Structural Formula:** Explicitly displays every covalent single ($-$), double ($=$), and triple ($\equiv$) bond and hydrogen atom.
   * **Condensed Structural Formula:** Omits horizontal/vertical bond lines, grouping repeating units with numerical subscripts (e.g., $\text{CH}_3(\text{CH}_2)_3\text{CH}_3$).
   * **Bond-Line Notation (Skeletal Formula):** Carbon-carbon bonds are drawn in a zig-zag fashion. Carbon and hydrogen atoms attached to carbon are omitted. Heteroatoms ($\text{O, N, S, X}$) and their attached hydrogens ($-\text{OH}, -\text{NH}_2$) are explicitly written.


---


### 1.2 Degree of Unsaturation (DU) / Double Bond Equivalent (DBE)


![Degree of Unsaturation and Homology Framework](/media/degree_of_unsaturation_and_homology_framework.webp)
*Description: Two-panel structural foundations graphic: (Panel A) Degree of Unsaturation (DU / DBE) mathematical formulation box mapping rings and $\pi$-bonds with canonical polycyclic benchmarks (Benzene, Cubane, Pyridine); (Panel B) Carbon, hydrogen, alcohol, and amine degree classification matrix highlighting the functional isomerism of $1^\circ, 2^\circ, 3^\circ$ amines.*


The **Degree of Unsaturation (DU)**, also called **Double Bond Equivalent (DBE)** or **Hydrogen Deficiency Index (HDI)**, measures the total number of rings and $\pi$-bonds present in a molecule relative to an open-chain saturated alkane of the same carbon count:


$$\mathbf{\text{DU} = C + 1 - \frac{H + X - N}{2}}$$


where:
* $C = \text{Total number of Carbon atoms}$.
* $H = \text{Total number of Hydrogen atoms}$.
* $X = \text{Total number of Halogen atoms (F, Cl, Br, I) [Monovalent: counts as } +1\text{]}$.
* $N = \text{Total number of Nitrogen atoms [Trivalent: counts as } -1\text{]}$.
* **Divalent heteroatoms (Oxygen O, Sulfur S) are completely IGNORED** because inserting a divalent atom into a carbon-hydrogen bond does not alter the hydrogen count (e.g., $\text{CH}_3\text{CH}_3 \to \text{CH}_3\text{CH}_2\text{OH}$).


1. **Structural Equivalences:**
   $$\mathbf{1\text{ DU} = 1\text{ Ring} \quad \text{OR} \quad 1\;\pi\text{-Bond (Double Bond)}}$$
   $$\mathbf{2\text{ DU} = 1\text{ Triple Bond} \quad \text{OR} \quad 2\text{ Double Bonds} \quad \text{OR} \quad 2\text{ Rings} \quad \text{OR} \quad 1\text{ Ring} + 1\text{ Double Bond}}$$


2. **High-Yield JEE Molecular Benchmarks:**
   * **Benzene ($\text{C}_6\text{H}_6$):** $\text{DU} = 6 + 1 - \frac{6}{2} = \mathbf{4}$ ($1\text{ ring} + 3\;\pi\text{-bonds}$).
   * **Pyridine ($\text{C}_5\text{H}_5\text{N}$):** $\text{DU} = 5 + 1 - \frac{5 - 1}{2} = \mathbf{4}$ ($1\text{ ring} + 3\;\pi\text{-bonds}$).
   * **Naphthalene ($\text{C}_{10}\text{H}_8$):** $\text{DU} = 10 + 1 - \frac{8}{2} = \mathbf{7}$ ($2\text{ rings} + 5\;\pi\text{-bonds}$).
   * **Cubane ($\text{C}_8\text{H}_8$):** $\text{DU} = 8 + 1 - \frac{8}{2} = \mathbf{5}$ ($5\text{ independent rings; the 6th face is formed automatically by the first 5}$).


---


### 1.3 Carbon, Hydrogen & Heteroatom Degree Classification


1. **Classification of Carbon Atoms:**
   * **Primary ($1^\circ$) Carbon:** Attached directly to only $1$ other carbon atom (or zero, as in $\text{CH}_4$).
   * **Secondary ($2^\circ$) Carbon:** Attached directly to $2$ other carbon atoms.
   * **Tertiary ($3^\circ$) Carbon:** Attached directly to $3$ other carbon atoms.
   * **Quaternary ($4^\circ$) Carbon:** Attached directly to $4$ other carbon atoms.


2. **Classification of Hydrogen Atoms:**
   Hydrogens are classified strictly according to the carbon to which they are bonded:
   * $1^\circ$ Hydrogen $\implies$ Attached to $1^\circ$ carbon.
   * $2^\circ$ Hydrogen $\implies$ Attached to $2^\circ$ carbon.
   * $3^\circ$ Hydrogen $\implies$ Attached to $3^\circ$ carbon.
   * *(Note: Quaternary hydrogens DO NOT EXIST because a $4^\circ$ carbon has all four valencies occupied by carbon atoms).*


3. **Classification of Alcohols vs. Amines:**
   * **Alcohols ($1^\circ, 2^\circ, 3^\circ$):** Determined by the degree of the **carbon** bearing the $-\text{OH}$ group:
     * $1^\circ$ Alcohol: $\text{R}-\text{CH}_2-\text{OH}$ (e.g., Ethanol).
     * $2^\circ$ Alcohol: $\text{R}_2\text{CH}-\text{OH}$ (e.g., Isopropanol).
     * $3^\circ$ Alcohol: $\text{R}_3\text{C}-\text{OH}$ (e.g., tert-Butanol).
   * **Amines ($1^\circ, 2^\circ, 3^\circ$ — CRITICAL TRAP):**
     Determined by the **number of carbon groups attached directly to the Nitrogen atom**, NOT by the attached carbon's degree!
     * $1^\circ$ Amine: Nitrogen attached to $1$ carbon group ($\text{R}-\text{NH}_2$, e.g., tert-butylamine is a $1^\circ$ amine!).
     * $2^\circ$ Amine: Nitrogen attached to $2$ carbon groups ($\text{R}_2\text{NH}$, e.g., Dimethylamine).
     * $3^\circ$ Amine: Nitrogen attached to $3$ carbon groups ($\text{R}_3\text{N}$, e.g., Trimethylamine).
     * **Consequence:** $1^\circ, 2^\circ$, and $3^\circ$ amines are **Functional Group Isomers**, whereas $1^\circ, 2^\circ, 3^\circ$ alcohols are Position/Chain Isomers!


---


## 2. IUPAC Systematic Nomenclature Architecture


![IUPAC Five Part Nomenclature and Priority Table](/media/iupac_five_part_nomenclature_and_priority_table.webp)
*Description: Two-panel IUPAC nomenclature reference: (Panel A) The Universal 5-Part Architectural Decomposition: Secondary Prefix + Primary Prefix + Word Root + Primary Suffix + Secondary Suffix; (Panel B) Principal functional group seniority hierarchy ranking from Carboxylic Acids down to Hydrocarbons with IUPAC suffix and prefix designations.*


An official IUPAC systematic name consists of up to five distinct structural modules assembled in exact sequence:


$$\mathbf{\text{Secondary Prefix} + \text{Primary Prefix} + \text{Word Root} + \text{Primary Suffix} + \text{Secondary Suffix}}$$


1. **Secondary Prefix:** Lists all substituents, alkyl branches, and secondary functional groups arranged in **strictly alphabetical order** with their numerical locants (e.g., `4-bromo`, `2-chloro`, `3-methyl`, `5-nitro`).
2. **Primary Prefix:** Specifies the cyclic/alicyclic character of the principal carbon chain:
   * Acyclic compounds: *Omitted* (no primary prefix).
   * Monocyclic: `cyclo-`.
   * Bicyclic: `bicyclo-`.
   * Spiro: `spiro-`.
3. **Word Root:** Indicates the total number of carbon atoms in the principal parent chain:
   $$\text{C}_1: \text{meth-}, \; \text{C}_2: \text{eth-}, \; \text{C}_3: \text{prop-}, \; \text{C}_4: \text{but-}, \; \text{C}_5: \text{pent-}, \; \text{C}_6: \text{hex-}, \; \text{C}_7: \text{hept-}, \; \text{C}_8: \text{oct-}, \; \text{C}_9: \text{non-}, \; \text{C}_{10}: \text{dec-}$$
4. **Primary Suffix:** Specifies the degree of saturation/unsaturation in the parent carbon chain:
   * Saturated (all $\text{C}-\text{C}$ single bonds): `-ane`.
   * One double bond: `-ene` (Two: `-adiene`, Three: `-atriene`).
   * One triple bond: `-yne` (Two: `-adiyne`).
   * Both double and triple bonds: `-en-yne` *(terminal 'e' of `-ene` is dropped)*.
5. **Secondary Suffix:** Identifies the highest-priority (senior-most) **principal functional group** present in the molecule (e.g., `-oic acid`, `-al`, `-one`, `-ol`, `-amine`).
   * *Elision Rule:* If the secondary suffix begins with a vowel ($a, e, i, o, u$) or $y$, the terminal vowel 'e' of the primary suffix is dropped (e.g., $\text{butan} + \text{e} + \text{ol} \to \mathbf{\text{butan-1-ol}}$, NOT butane-1-ol).


---


## 3. Parent Chain Selection & Numbering Rules


### 3.1 Parent Chain Selection Hierarchy


When selecting the continuous parent carbon chain, apply the following strict hierarchy:


$$\mathbf{\text{Principal Functional Group} > \text{Max Number of Multiple Bonds} > \text{Max Chain Length} > \text{Max Number of Substituents} > \text{Lowest Locants}}$$


1. **Priority 1: Principal Functional Group:** The parent chain MUST contain the principal functional group (or its carbon, if applicable).
2. **Priority 2: Maximum Multiple Bonds:** The chain containing the maximum number of double and triple bonds is selected as parent, even if a longer saturated chain exists!
3. **Priority 3: Maximum Chain Length:** Among chains with equal multiple bonds, choose the one with the maximum number of carbon atoms.
4. **Priority 4: Maximum Substituents:** If two chains have the identical length and number of multiple bonds, select the chain having the **maximum number of substituents (side chains)**!


---


### 3.2 Numbering of the Parent Chain (Lowest Locant Rules)


Number the parent chain from the terminal carbon that assigns the lowest numerical locant:


$$\mathbf{\text{Lowest Locant for Principal Group} > \text{Lowest Locant for Multiple Bonds} > \text{Lowest Locant Set for Substituents} > \text{Alphabetical Order}}$$


1. **First Point of Difference Rule:**
   When comparing two numbering schemes for substituents, arrange the locants in ascending numerical order. The correct numbering is the one that gives the **lower number at the first point where the two series differ**:
   * *Example:* Comparing sets $(2, 7, 8)$ and $(3, 4, 5)$:
     At the first position, $2 < 3$. Therefore, **$(2, 7, 8)$ is the correct numbering**, despite the sum $(2+7+8=17)$ being larger than $(3+4+5=12)$! (The ancient "lowest sum rule" is obsolete).
2. **Alphabetical Preference on Numerical Ties:**
   If two different substituents occupy identical numerical locants from either end of the chain, assign the **lower number to the substituent that comes first alphabetically**:
   * *Example:* In $\text{CH}_3-\text{CH(Br)}-\text{CH}_2-\text{CH(Cl)}-\text{CH}_3$:
     Numbering from left: 2-bromo, 4-chloro.
     Numbering from right: 2-chloro, 4-bromo.
     Since Bromo precedes Chloro alphabetically, correct name is **2-bromo-4-chloropentane**.
3. **Alphabetical Sorting Rules for Prefixes:**
   * Multiplying prefixes (`di-`, `tri-`, `tetra-`, `penta-`) and configurational descriptors (`sec-`, `tert-`) are **IGNORED** during alphabetical arrangement.
   * Structural prefixes that form an integral part of the alkyl name—specifically **`iso-`**, **`neo-`**, and **`cyclo-`**—are **INCLUDED** in alphabetical sorting!
   * *Example:* In comparing `ethyl` vs. `dimethyl`: `ethyl` (e) precedes `dimethyl` (m).
   * *Example:* In comparing `isopropyl` vs. `ethyl`: `ethyl` (e) precedes `isopropyl` (i).


---


### 3.3 Double Bond vs. Triple Bond Precedence


1. When both double and triple bonds are present, the numbering is determined by the **lowest locant rule overall**:
   $$\text{CH}\equiv\text{C}-\text{CH}_2-\text{CH}=\text{CH}-\text{CH}_3 \implies \text{Number from left (locants 1, 4 vs. 2, 5)} \implies \mathbf{\text{hex-4-en-1-yne}}$$
2. **The Tie-Breaker Rule:**
   If a double bond and a triple bond are positioned **symmetrically at identical distances from the two chain ends**:
   $$\mathbf{\text{Double Bond (}-\text{ene}) \text{ takes precedence over Triple Bond (}-\text{yne}) \text{ for lower numbering!}}$$
   $$\text{CH}_2=\text{CH}-\text{CH}_2-\text{C}\equiv\text{CH} \implies \text{Number from double bond end (1, 4)} \implies \mathbf{\text{pent-1-en-4-yne}}$$
   *(Because 'ene' precedes 'yne' alphabetically).*


---


## 4. Principal Functional Group Seniority Hierarchy


When a polyfunctional organic compound contains two or more different functional groups:
* The senior-most functional group is chosen as the **Principal Functional Group** and named as the **Secondary Suffix**.
* All other subordinate functional groups are relegated to substituent status and designated as **Prefixes**.


| Seniority Rank | Functional Class | Formula | Suffix (Principal Group) | Special Suffix (C not in chain) | Prefix (Subordinate Group) |
| :---: | :--- | :--- | :--- | :--- | :--- |
| **1** | Carboxylic Acid | $-\text{COOH}$ | `-oic acid` | `-carboxylic acid` | `carboxy-` |
| **2** | Sulphonic Acid | $-\text{SO}_3\text{H}$ | `-sulphonic acid` | `-sulphonic acid` | `sulpho-` |
| **3** | Acid Anhydride | $-(\text{CO})-\text{O}-(\text{CO})-$ | `-oic anhydride` | `-carboxylic anhydride` | — |
| **4** | Ester | $-\text{COOR}$ | `alkyl ...oate` | `alkyl ...carboxylate` | `alkoxycarbonyl-` / `alkanoyloxy-` |
| **5** | Acid Halide | $-\text{COX}$ | `-oyl halide` | `-carbonyl halide` | `halocarbonyl-` |
| **6** | Amide | $-\text{CONH}_2$ | `-amide` | `-carboxamide` | `carbamoyl-` / `amido-` |
| **7** | Nitrile | $-\text{CN}$ | `-nitrile` | `-carbonitrile` | `cyano-` |
| **8** | Isocyanide | $-\text{NC}$ | `-isonitrile` | — | `isocyano-` |
| **9** | Aldehyde | $-\text{CHO}$ | `-al` | `-carbaldehyde` | `formyl-` (if C not in chain) / `oxo-` |
| **10** | Ketone | $>        ext{C}=        ext{O}$ | `-one` | — | `oxo-` / `keto-` |
| **11** | Alcohol | $-\text{OH}$ | `-ol` | — | `hydroxy-` |
| **12** | Thiol | $-\text{SH}$ | `-thiol` | — | `mercapto-` / `sulfanyl-` |
| **13** | Amine | $-\text{NH}_2$ | `-amine` | — | `amino-` |
| **14** | Imine | $>        ext{C}=        ext{NH}$ | `-imine` | — | `imino-` |
| **15** | Alkene | $>        ext{C}=        ext{C}<$ | `-ene` | — | — |
| **16** | Alkyne | $-\text{C}\equiv\text{C}-$ | `-yne` | — | — |
| **Substituents** | Ethers, Halides, Nitro | $-\text{OR}, -\text{X}, -\text{NO}_2, -\text{R}$ | *Never used as suffixes* | — | `alkoxy-`, `halo-`, `nitro-`, `alkyl-` |


---


### 4.1 Special Chain-Terminating Suffixes


When the carbon atom of a terminal functional group ($-\text{COOH}, -\text{CHO}, -\text{CN}, -\text{COX}, -\text{CONH}_2, -\text{COOR}$) cannot be included in the principal parent chain:
1. When directly attached to a ring:
   * Cyclohexanecarboxylic acid (NOT cyclohexanoic acid!).
   * Benzene-1,2-dicarboxylic acid (Phthalic acid).
   * Cyclopentanecarbaldehyde.
2. When three or more identical chain-terminating groups are attached to an unbranched acyclic chain:
   $$\text{HOOC}-\text{CH}_2-\text{CH}(\text{COOH})-\text{CH}_2-\text{COOH}$$
   * **Modern IUPAC Rule:** Treat all three functional groups symmetrically; none of their carbons are included in the 3-carbon parent chain:
   * **Name:** **Propane-1,2,3-tricarboxylic acid** (NOT 3-carboxypentanedioic acid).
   * Similarly: $\text{NC}-\text{CH}_2-\text{CH}(\text{CN})-\text{CH}_2-\text{CN} \implies$ **Propane-1,2,3-tricarbonitrile**.


---


## 5. Alicyclic, Bicyclo & Spiro Nomenclature


### 5.1 Monocyclic Cycloalkanes & Cycloalkenes


1. **Ring vs. Side Chain Rule:**
   * If the ring contains more carbons than the acyclic chain, the **ring is the parent** (e.g., propylcyclohexane).
   * If the acyclic chain contains more carbons than the ring, the **chain is the parent** (e.g., 1-cyclopropylbutane).
   * If both contain an equal number of carbons, the **ring takes precedence as parent**.
   * If the acyclic chain contains a **principal functional group or multiple bond**, the **chain is the parent**, regardless of ring size!


---


### 5.2 Bicyclo & Spiro Hydrocarbons


1. **Bicyclo Compounds (`bicyclo[a.b.c]alkane`):**
   Compounds containing two rings sharing two common bridgehead carbons:
   * **Numbering Rule:** Start at one **bridgehead carbon**, proceed along the **longest bridge** to the second bridgehead, then along the **next longest bridge**, and finally along the **shortest bridge**.
   * Bridge lengths $a, b, c$ (number of carbons between bridgeheads) are listed in **descending order: $a \ge b \ge c$**.
   * *Example:* Bicyclo[2.2.1]heptane (Norbornane); Bicyclo[4.4.0]decane (Decalin).


2. **Spiro Compounds (`spiro[a.b]alkane`):**
   Compounds containing two rings sharing a **single quaternary junction carbon**:
   * **Numbering Rule:** Start at a carbon in the **smaller ring adjacent to the spiro carbon**, proceed around the smaller ring through the spiro junction, and then around the larger ring.
   * Ring lengths $a, b$ are listed in **ascending order: $a \le b$**.
   * *Example:* Spiro[2.4]heptane.


---


## 6. Structural Isomerism Taxonomy


![Structural Isomerism Classification and Tautomerism](/media/structural_isomerism_classification_and_tautomerism.webp)
*Description: Two-panel isomerism analytics graphic: (Panel A) Structural Isomerism Classification Matrix detailing Chain, Position, Functional, Metamerism, and Ring-Chain categories with diagnostic criteria; (Panel B) Keto-Enol Tautomerism mechanism via 1,3-prototropic shift, equilibrium percentages, and enol stabilization factors (aromaticity, intramolecular chelation).*


Compounds possessing the **identical molecular formula** but **different structural connectivity or spatial atom arrangement** are termed **Isomers**.


### 6.1 The Five Classic Structural Classes


1. **Chain Isomerism (Skeletal Isomerism):**
   Isomers that differ in the length or branching of the parent carbon skeleton:
   * $\text{C}_4\text{H}_{10}$: $n$-Butane (4-carbon chain) and 2-Methylpropane / Isobutane (3-carbon chain).
   * $\text{C}_5\text{H}_{12}$: $n$-Pentane ($5\text{C}$), Isopentane / 2-Methylbutane ($4\text{C}$), Neopentane / 2,2-Dimethylpropane ($3\text{C}$).


2. **Position Isomerism:**
   Isomers that share the identical parent carbon skeleton and functional group, but differ in the **locant position** of the functional group, substituent, or multiple bond:
   * Butan-1-ol and Butan-2-ol.
   * But-1-ene and But-2-ene.
   * 1,2-Dichlorobenzene (ortho), 1,3-Dichlorobenzene (meta), and 1,4-Dichlorobenzene (para).


3. **Functional Group Isomerism:**
   Isomers having the same molecular formula but belonging to **completely different functional group families**:
   * **Alcohols and Ethers ($        ext{C}_n        ext{H}_{2n+2}        ext{O}$):** $\text{CH}_3\text{CH}_2\text{OH}$ (Ethanol) and $\text{CH}_3\text{OCH}_3$ (Methoxymethane).
   * **Aldehydes and Ketones ($        ext{C}_n        ext{H}_{2n}        ext{O}$):** $\text{CH}_3\text{CH}_2\text{CHO}$ (Propanal) and $\text{CH}_3\text{COCH}_3$ (Propanone).
   * **Carboxylic Acids and Esters ($        ext{C}_n        ext{H}_{2n}        ext{O}_2$):** $\text{CH}_3\text{COOH}$ (Ethanoic acid) and $\text{HCOOCH}_3$ (Methyl methanoate).
   * **Cyanides and Isocyanides ($        ext{C}_n        ext{H}_{2n-1}        ext{N}$):** $\text{CH}_3\text{CN}$ (Acetonitrile) and $\text{CH}_3\text{NC}$ (Methyl isocyanide).
   * **Primary, Secondary, and Tertiary Amines ($        ext{C}_3        ext{H}_9        ext{N}$):**
     * $1^\circ$: $\text{CH}_3\text{CH}_2\text{CH}_2\text{NH}_2$ (Propan-1-amine).
     * $2^\circ$: $\text{CH}_3\text{CH}_2-\text{NH}-\text{CH}_3$ ($N$-Methylethanamine).
     * $3^\circ$: $(\text{CH}_3)_3\text{N}$ ($N,N$-Dimethylmethanamine).
     *(These exhibit different chemical properties and are strictly functional isomers!).*


4. **Metamerism:**
   Isomers that possess the **same polyvalent functional group** ($-\text{O}-, -\text{S}-, -\text{NH}-, -\text{CO}-, -\text{COO}-$), but differ in the **nature or size of alkyl groups attached to the polyvalent heteroatom**:
   * **Ethers ($        ext{C}_4        ext{H}_{10}        ext{O}$):** Diethyl ether ($\text{C}_2\text{H}_5-\text{O}-\text{C}_2\text{H}_5$) and Methyl propyl ether ($\text{CH}_3-\text{O}-\text{C}_3\text{H}_7$).
   * **Ketones ($        ext{C}_5        ext{H}_{10}        ext{O}$):** Pentan-3-one ($\text{C}_2\text{H}_5-\text{CO}-\text{C}_2\text{H}_5$) and Pentan-2-one ($\text{CH}_3-\text{CO}-\text{C}_3\text{H}_7$).
   * **Secondary Amines ($        ext{C}_4        ext{H}_{11}        ext{N}$):** Diethylamine and Methylpropylamine.


5. **Ring-Chain Isomerism:**
   Isomers having the same molecular formula where one isomer is an open-chain structure and the other is a cyclic ring:
   * $\text{C}_3\text{H}_6$: Propene ($\text{CH}_3-\text{CH}=\text{CH}_2$) and Cyclopropane ($\Delta$).
   * $\text{C}_4\text{H}_6$: But-1-yne, Buta-1,3-diene, Cyclobutene, and Bicyclo[1.1.0]butane.


---


## 7. Tautomerism Dynamics & Enol Content Optimization


Tautomerism is a special dynamic form of functional isomerism where two interconvertible constitutional isomers exist in rapid thermodynamic equilibrium via the **1,3-migration of a mobile hydrogen atom (proton)** accompanied by the relocation of a $\pi$-bond:


$$\mathbf{\text{H}-\text{C}_\alpha-\text{C}=\text{O} \;\; \rightleftharpoons \;\; \text{C}=\text{C}-\text{O}-\text{H}} \quad (\text{Keto-Enol Equilibrium})$$


### 7.1 Structural Prerequisite for Tautomerism


* The molecule MUST possess at least one **acidic $\alpha$-hydrogen** attached to an $sp^3$-hybridized carbon atom adjacent to a carbonyl group (or other electron-withdrawing unsaturated group like $-\text{NO}_2, -\text{CN}, >\text{C}=\text{N}-$).
* **Molecules Lacking $ lpha$-H (Cannot Tautomerize):**
  * Formaldehyde ($\text{HCHO}$), Benzaldehyde ($\text{PhCHO}$), Benzophenone ($\text{Ph}_2\text{CO}$), Trimethylacetaldehyde / Pivalaldehyde ($(\text{CH}_3)_3\text{C}-\text{CHO}$), Chloral ($\text{CCl}_3\text{CHO}$).


---


### 7.2 Thermodynamic Stability & Enol Content Optimization


In simple monocarbonyls (e.g., Acetone, Acetaldehyde), the **keto form is overwhelmingly dominant ($> 99.9\%$)** because the $\text{C}=\text{O}$ bond energy ($\sim 745\text{ kJ/mol}$) is much greater than the $\text{C}=\text{C}$ bond energy ($\sim 610\text{ kJ/mol}$).


However, the equilibrium shifts dramatically in favor of the **enol form** under specific structural conditions:


1. **Aromaticity Drive ($\sim 100\%$ Enol):**
   * In **Phenol**, the enol tautomer is aromatic, stabilized by the resonance energy of the complete benzene sextet ($\sim 150\text{ kJ/mol}$).
   * Cyclohexa-2,4-dien-1-one tautomerizes quantitatively into **Phenol ($100\%$ enol)**!
2. **Intramolecular Hydrogen Bonding & Conjugation ($\beta$-Dicarbonyls):**
   * **Acetylacetone / Pentane-2,4-dione ($        ext{CH}_3        ext{COCH}_2        ext{COCH}_3$):**
     * Enol content is **$\sim 76\%$** in liquid phase and **$\sim 92\%$** in the gas phase!
     * *Stabilization Factors:*
       1. Conjugated double bond system: $\text{O}=\text{C}-\text{CH}=\text{C}-\text{OH}$.
       2. Formation of a planar, quasi-aromatic **six-membered chelate ring** held together by a strong intramolecular hydrogen bond ($-\text{O}-\text{H}\cdots\text{O}=$).
   * **Ethyl Acetoacetate (EAA, $        ext{CH}_3        ext{COCH}_2        ext{COOC}_2        ext{H}_5$):**
     * Enol content is $\sim 7 - 8\%$ in liquid phase. (Lower than acetylacetone because ester resonance competes with enolization).
3. **Solvent Polarity Impact on Tautomeric Equilibrium:**
   * **In Polar Protic Solvents (e.g., $        ext{H}_2        ext{O},         ext{CH}_3        ext{OH}$):**
     The solvent forms strong intermolecular hydrogen bonds with the carbonyl oxygen of the keto form, stabilizing the **Keto Form** and decreasing enol percentage.
   * **In Non-Polar Aprotic Solvents (e.g., $n$-Hexane, $        ext{CCl}_4$, Gas Phase):**
     Absence of solvent competition allows intramolecular chelation to dominate, dramatically increasing the **Enol Percentage**!


---


## 8. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **Amine Classification Trap:**
   * $1^\circ, 2^\circ, 3^\circ$ alcohols are positional/chain isomers, but **$1^\circ, 2^\circ, 3^\circ$ amines are FUNCTIONAL ISOMERS**!
   * tert-Butylamine ($(\text{CH}_3)_3\text{C}-\text{NH}_2$) is a **Primary ($1^\circ$) amine**, NOT a tertiary amine, because nitrogen is bonded to only one carbon!
2. **Double Bond vs. Triple Bond Numbering Trap:**
   * If locants are NOT tied (e.g., $\text{HC}\equiv\text{C}-\text{CH}_2-\text{CH}=\text{CH}_2$), apply lowest locant set first ($1, 4$ vs. $1, 4$; here tied $\implies$ double bond gets 1).
   * In $\text{CH}_3-\text{CH}=\text{CH}-\text{C}\equiv\text{CH}$: Numbering from right gives locants $(1, 3)$, whereas left gives $(2, 4)$. Lowest locant rule overrides alphabetical rule! Correct name is **pent-3-en-1-yne**, NOT pent-2-en-4-yne.
3. **The Symmetrical Poly-Acid Trap:**
   * In $\text{HOOC}-\text{CH}_2-\text{CH}(\text{COOH})-\text{CH}_2-\text{COOH}$, do not pick a 5-carbon chain with a carboxy branch!
   * All three $-\text{COOH}$ groups must be treated symmetrically: **Propane-1,2,3-tricarboxylic acid**.
4. **Metamerism vs. Positional Isomerism Distinction:**
   * Pentan-2-one and Pentan-3-one are both metamers (different alkyl groups on $>        ext{C}=        ext{O}$) AND position isomers.
   * **JEE Precedence Rule:** When both options are present, **Metamerism takes priority over Positional Isomerism**!