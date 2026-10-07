Chemistry Revision Context: Chapter 66 — Mole Concept, Stoichiometry & Redox Equivalence


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/CHEMISTRY/Mole Concept/`, `Theory_TAdiIJI.pdf`, `Exercise_ERzfKcB.pdf`, `MOL_Exercise_Sol_E.pdf`, and `3._MOL_ALPS_PC_E_VDPcPE7.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Physical Chemistry Core — Dalton's Atomic Theory & Modern Foundations, Atomic Mass Unit ($1\text{ amu} = 1.6605 \times 10^{-24}\text{ g} = 1.6605 \times 10^{-27}\text{ kg}$), Avogadro's Constant ($N_A = 6.022 \times 10^{23}\text{ mol}^{-1}$), The Universal Mole Crossroads ($n = \frac{w}{M} = \frac{N}{N_A} = \frac{V_{\text{STP}}}{22.4\text{ L}} = M \cdot V$), Molar Volume Standards ($22.4\text{ L at } 1\text{ atm}$ vs. $22.7\text{ L at } 1\text{ bar}$), Vapor Density Analytics ($M = 2 \times \text{V.D.}$), Average Molar Mass of Mixtures ($M_{\text{avg}} = \sum x_i M_i$), Empirical & Molecular Formula Derivation, Minimum Molecular Weight (MMW) Principle, Stoichiometric Mole Ratios, Limiting Reagent (LR) Optimization Metric, Percentage Yield & Sample Purity, Principle of Atom Conservation (POAC) in Sequential & Parallel Reactions, Oxidation Number Axiomatic Rules, Exceptional Redox Architectures ($\text{CrO}_5$, $\text{H}_2\text{S}_2\text{O}_8$, $\text{C}_3\text{O}_2$, $\text{Fe}_3\text{O}_4$, $\text{Fe}_{0.93}\text{O}$), Redox Balancing Algorithms (Ion-Electron & Oxidation Number Methods in Acidic/Basic Media), Comprehensive Solution Concentration Metrics (Molarity $M$, Molality $m$, Mole Fraction $X$, Mass $\%$, ppm), Temperature Dependence & Exact Mathematical Interconversions, Dilution & Multi-Solution Mixing Laws, Equivalent Weight ($E = M/n$), Valence Factors ($n$-factor for Acids, Bases, Salts, and Redox Agents: $\text{KMnO}_4, \text{K}_2\text{Cr}_2\text{O}_7, \text{FeC}_2\text{O}_4$), Law of Chemical Equivalence ($N_1 V_1 = N_2 V_2$), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. The Mole Concept & Fundamental Quantitative Foundations


### 1.1 Atomic Mass Scales & The Mole Definition


1. **Relative Atomic Mass (R.A.M.):**
   The relative atomic mass of an element is the mass of one atom of that element relative to $\frac{1}{12}\text{th}$ of the mass of a single unbound neutral Carbon-12 atom in its nuclear and electronic ground state:
   $$\mathbf{\text{R.A.M.} = \frac{\text{Mass of one atom of an element}}{\frac{1}{12} \times \text{Mass of one } {}^{12}\text{C atom}} = \text{Dimensionless Ratio}}$$


2. **Atomic Mass Unit (amu or Unified Mass Unit $u$):**
   $$\mathbf{1\text{ amu} = 1\text{ u} = \frac{1}{12} \times \text{Mass of one } {}^{12}\text{C atom} = \frac{1}{N_A}\text{ g} = 1.66054 \times 10^{-24}\text{ g} = 1.66054 \times 10^{-27}\text{ kg}}$$
   * Mass of a single atom $= \text{R.A.M.} \times 1\text{ amu}$.


3. **The Mole ($n$):**
   A mole is the SI base unit for the amount of substance. One mole contains exactly **$6.02214076 \times 10^{23}$ elementary entities** (atoms, molecules, ions, electrons, or formula units). This fundamental physical constant is the **Avogadro Constant ($N_A$)**.
   * Gram Atomic Mass (GAM) $= \text{Mass of } 1\text{ mole of atoms} = \text{R.A.M. expressed in grams}$.
   * Gram Molecular Mass (GMM) $= \text{Mass of } 1\text{ mole of molecules} = \text{Molar mass in grams}$.


---


### 1.2 The Universal Mole Crossroads (The Mole Y-Map)


![Mole Interconversion Roadmap and Stoichiometry](/media/mole_interconversion_roadmap_and_stoichiometry.webp)
*Description: Two-panel quantitative chemistry graphic: (Panel A) The central Mole Y-Map crossroads diagram showing direct mathematical transitions between mass ($w$), particle count ($N$), STP gas volume ($V$), and solution molarity ($M \cdot V$); (Panel B) Limiting Reagent (LR) stoichiometric matrix for $2        ext{A} + 3        ext{B}         o 4        ext{C}$ detailing initial, reacted, and final mole profiles, alongside theoretical yield and purity formulations.*


The number of moles $n$ serves as the universal dimensional bridge across all physical states:


$$\mathbf{n = \frac{w}{M} = \frac{N}{N_A} = \frac{V_{\text{STP}}}{V_{\text{molar}}} = M \times V_{\text{solution (L)}}}$$


* **Molar Volume of an Ideal Gas at STP:**
  * **Classical / Conventional STP ($T = 273.15\text{ K} = 0^\circ\text{C}, \; P = 1\text{ atm} = 760\text{ torr}$):**
    $$\mathbf{V_{\text{molar}} = 22.414\text{ L mol}^{-1} \approx 22.4\text{ L}}$$
  * **Modern IUPAC Standard ($T = 273.15\text{ K}, \; P = 1\text{ bar} = 10^5\text{ Pa}$):**
    $$\mathbf{V_{\text{molar}} = 22.711\text{ L mol}^{-1} \approx 22.7\text{ L}}$$
    *(Note: Most standard JEE problems default to $22.4\text{ L}$ unless pressure is explicitly specified in bar).*


---


### 1.3 Vapor Density & Average Molar Mass of Mixtures


1. **Vapor Density (V.D.):**
   The vapor density of a gas or vapor is defined as the ratio of the mass of a certain volume of gas to the mass of the same volume of Hydrogen gas measured under identical conditions of temperature and pressure:
   $$\text{V.D.} = \frac{\rho_{\text{gas}}}{\rho_{\text{H}_2}} = \frac{\frac{P M_{\text{gas}}}{RT}}{\frac{P M_{\text{H}_2}}{RT}} = \frac{M_{\text{gas}}}{M_{\text{H}_2}} = \frac{M_{\text{gas}}}{2}$$
   $$\mathbf{M_{\text{gas}} = 2 \times \text{V.D.}}$$


2. **Average Molar Mass of a Non-Reacting Gaseous Mixture ($M_{\text{avg}}$):**
   $$\mathbf{M_{\text{avg}} = \frac{\text{Total Mass of Mixture}}{\text{Total Moles of Mixture}} = \frac{w_1 + w_2 + \dots + w_k}{n_1 + n_2 + \dots + n_k} = \frac{\sum n_i M_i}{\sum n_i} = \sum_{i=1}^k x_i M_i}$$
   where $x_i = \frac{n_i}{n_{\text{total}}}$ is the mole fraction of component $i$.
   * **Average Vapor Density:** $\mathbf{\text{V.D.}_{\text{avg}} = \frac{M_{\text{avg}}}{2}}$.


---


## 2. Empirical & Molecular Formulas & Minimum Molecular Weight


### 2.1 Elemental Mass Percentage & Formula Derivation


1. **Mass Percentage of an Element in a Compound:**
   $$\mathbf{\% \text{ of Element } X = \frac{n_X \times \text{Atomic Mass of } X}{\text{Molar Mass of Compound}} \times 100}$$


2. **Empirical Formula vs. Molecular Formula:**
   * **Empirical Formula:** The simplest whole-number molar ratio of atoms of different elements present in one molecule of the compound.
   * **Molecular Formula:** The actual number of atoms of each element present in one molecule of the compound.
   $$\mathbf{\text{Molecular Formula} = (\text{Empirical Formula})_n}$$
   $$\mathbf{n = \frac{\text{Molecular Mass}}{\text{Empirical Formula Mass}} \quad (n \in \mathbb{N})}$$


3. **Determination Protocol:**
   * Step 1: Convert mass percentages to moles of atoms: $n_i = \frac{\% \text{ Mass}_i}{A_i}$.
   * Step 2: Divide each mole value by the **smallest mole value** among all elements: $r_i = \frac{n_i}{n_{\min}}$.
   * Step 3: If ratios are fractional, multiply by the smallest integer to obtain whole numbers.


---


### 2.2 Minimum Molecular Weight (MMW) Principle


**Definition:** The minimum molecular weight of a macromolecule, enzyme, or coordination complex corresponds to the hypothetical case where **at least one atom** of the specified element is present per molecule:


$$\mathbf{\text{MMW} = \frac{1 \times \text{Atomic Weight of Element}}{\% \text{ by Mass of Element}} \times 100}$$


* **General Molecular Weight:** $\mathbf{M = \frac{k \times \text{Atomic Weight}}{\% \text{ by Mass}} \times 100}$, where $k \in \{1, 2, 3, \dots\}$ is the number of atoms of that element per molecule.


---


## 3. Stoichiometry, Limiting Reagent & Reaction Efficiency


### 3.1 Mole-Mole Stoichiometric Proportions


Consider a balanced chemical reaction:


$$a\text{A} + b\text{B} \longrightarrow c\text{C} + d\text{D}$$


The coefficients $a, b, c, d$ represent the fundamental mole ratios in which substances react and are produced:


$$\mathbf{\frac{n_{\text{A reacted}}}{a} = \frac{n_{\text{B reacted}}}{b} = \frac{n_{\text{C produced}}}{c} = \frac{n_{\text{D produced}}}{d}}$$


---


### 3.2 Limiting Reagent (LR) Optimization Algorithm


When reactants are mixed in non-stoichiometric ratios, one reactant is consumed completely before the others. This substance is the **Limiting Reagent (LR)**:


1. **Identification Rule:**
   For every reactant $i$ with initial moles $n_i^0$ and stoichiometric coefficient $\nu_i$:
   $$\mathbf{\text{Compute Ratio } R_i = \frac{n_i^0}{\nu_i}}$$
   $$\mathbf{\text{The Reactant with } \min(R_i) \text{ is the LIMITING REAGENT!}}$$
2. **Governing Law:**
   All product quantities formed and all amounts of excess reagents consumed are **calculated strictly based on the Limiting Reagent**.
3. **Excess Reagent Remaining:**
   $$\mathbf{n_{\text{excess left}} = n_{\text{excess}}^0 - \left( \nu_{\text{excess}} \times R_{\text{LR}} \right)}$$


---


### 3.3 Percentage Yield & Percentage Purity


1. **Percentage Yield:**
   Due to incomplete reactions, side reactions, or mechanical losses, the actual yield is typically less than the theoretical stoichiometric yield:
   $$\mathbf{\% \text{ Yield} = \frac{\text{Actual Amount of Product Produced}}{\text{Theoretical Maximum Stoichiometric Amount}} \times 100}$$


2. **Percentage Purity:**
   $$\mathbf{\% \text{ Purity} = \frac{\text{Mass of Pure Chemical in Sample}}{\text{Total Mass of Impure Sample}} \times 100}$$


---


## 4. Principle of Atom Conservation (POAC) & Sequential Reactions


### 4.1 Principle of Atom Conservation (POAC)


**Core Principle:** Total mass is conserved in any non-nuclear chemical reaction. Since atoms cannot be created or destroyed, **the moles of atoms of any element must be conserved from reactants to products across any series of chemical steps, regardless of reaction balancing or intermediate mechanisms!**


For an element $X$:


$$\mathbf{\sum \left( n_{\text{reactant}} \times \text{Atoms of } X \text{ per molecule} \right) = \sum \left( n_{\text{product}} \times \text{Atoms of } X \text{ per molecule} \right)}$$


* **Classical Example (Thermal decomposition of $\text{KClO}_3$):**
  $$\text{KClO}_3 \overset{\Delta}{\longrightarrow} \text{KCl} + \text{O}_2$$
  * Applying POAC for K atoms: $1 \times n_{\text{KClO}_3} = 1 \times n_{\text{KCl}}$.
  * Applying POAC for Cl atoms: $1 \times n_{\text{KClO}_3} = 1 \times n_{\text{KCl}}$.
  * Applying POAC for O atoms: $3 \times n_{\text{KClO}_3} = 2 \times n_{\text{O}_2} \implies n_{\text{O}_2} = \frac{3}{2} n_{\text{KClO}_3}$.


---


### 4.2 Sequential & Parallel Reactions


1. **Sequential Reactions ($A \to B \to C$):**
   $$\text{Reaction 1: } a\text{A} \to b\text{B} \quad (\text{Yield } \eta_1)$$
   $$\text{Reaction 2: } c\text{B} \to d\text{C} \quad (\text{Yield } \eta_2)$$
   * Effective overall conversion yield: $\mathbf{\eta_{\text{overall}} = \eta_1 \times \eta_2}$.
2. **Parallel Reactions:**
   A single reactant simultaneously decomposes or reacts along multiple competing pathways:
   $$2\text{KClO}_3 \longrightarrow 2\text{KCl} + 3\text{O}_2 \quad (\text{Pathway 1})$$
   $$4\text{KClO}_3 \longrightarrow 3\text{KClO}_4 + \text{KCl} \quad (\text{Pathway 2})$$
   * Total reactant consumed: $\mathbf{n_{\text{KClO}_3}^{\text{total}} = n_{\text{KClO}_3}^{(1)} + n_{\text{KClO}_3}^{(2)}}$.


---


## 5. Oxidation Numbers & Exceptional Molecular Structures


![Redox Oxidation States and Exceptional Structures](/media/redox_oxidation_states_and_exceptional_structures.webp)
*Description: Two-panel redox reference: (Panel A) The formal oxidation number scale spanning from $-4$ to $+7$ showing the electron transfer axis (Oxidation/De-electronation vs. Reduction/Electronation) and definitions of disproportionation and comproportionation; (Panel B) Chemical structural analysis of exceptional compounds ($        ext{CrO}_5$, $        ext{H}_2        ext{S}_2        ext{O}_8$, $        ext{C}_3        ext{O}_2$, $        ext{Fe}_3        ext{O}_4$) contrasting apparent algebraic vs. actual structural oxidation numbers.*


### 5.1 Formal Rules for Assigning Oxidation Numbers


The oxidation number (O.N.) is the residual electrical charge an atom appears to possess when all shared bonding electron pairs are assigned completely to the more electronegative atom:


1. **Elementary State:** Free elements ($\text{O}_2, \text{N}_2, \text{P}_4, \text{S}_8, \text{Fe}$) have $\mathbf{\text{O.N.} = 0}$.
2. **Fluorine:** The most electronegative element; **always $-1$** in all chemical compounds.
3. **Oxygen:**
   * Normal oxides: $\mathbf{-2}$ (e.g., $\text{H}_2\text{O}, \text{CO}_2$).
   * Peroxides (containing $-O-O-$ bond): $\mathbf{-1}$ (e.g., $\text{H}_2\text{O}_2, \text{Na}_2\text{O}_2, \text{BaO}_2$).
   * Superoxides (containing $\text{O}_2^-$ ion): $\mathbf{-1/2}$ (e.g., $\text{KO}_2$).
   * Oxygen fluorides: $\mathbf{+2}$ in $\text{OF}_2$, $\mathbf{+1}$ in $\text{O}_2\text{F}_2$.
4. **Hydrogen:**
   * Combined with non-metals: $\mathbf{+1}$ (e.g., $\text{HCl}, \text{H}_2\text{O}$).
   * In ionic metallic hydrides: $\mathbf{-1}$ (e.g., $\text{NaH}, \text{CaH}_2, \text{LiAlH}_4$).
5. **Alkali & Alkaline Earth Metals:** Group 1 elements are **always $+1$**; Group 2 are **always $+2$**.
6. **Neutral Molecules & Polyatomic Ions:**
   * $\sum \text{O.N. of all atoms in a neutral molecule} = 0$.
   * $\sum \text{O.N. in a polyatomic ion} = \text{Net charge on the ion}$.


---


### 5.2 Famous Exceptional Structures & Fallacy Resolution


When applying algebraic rules blindly, elements may appear to exceed their maximum valence electron capacity. Molecular structures must be evaluated:


1. **Chromium Peroxide ($\text{CrO}_5$ — Butterfly Structure):**
   * *Algebraic Fallacy:* $\text{Cr} + 5(-2) = 0 \implies \text{Cr} = +10$ (Impossible! Max valence of Cr is $+6$).
   * *Structural Reality:* Contains **one oxo oxygen** ($=O$, O.N. $= -2$) and **four peroxo oxygens** (forming two $-O-O-$ rings, each oxygen O.N. $= -1$).
   $$\text{Cr} + 1(-2) + 4(-1) = 0 \implies \mathbf{\text{Cr} = +6}$$


2. **Marshall's Acid (Peroxodisulfuric Acid, $\text{H}_2\text{S}_2\text{O}_8$):**
   * *Algebraic Fallacy:* $2(+1) + 2\text{S} + 8(-2) = 0 \implies 2\text{S} = 14 \implies \text{S} = +7$ (Impossible! Max valence of S is $+6$).
   * *Structural Reality:* Contains **one peroxo bridge** ($-O-O-$, two oxygens at $-1$) and **six normal oxygens** ($-2$):
   $$2(+1) + 2\text{S} + 6(-2) + 2(-1) = 0 \implies 2\text{S} - 12 = 0 \implies \mathbf{\text{S} = +6}$$


3. **Caro's Acid (Peroxomonosulfuric Acid, $\text{H}_2\text{SO}_5$):**
   * Contains one peroxo linkage: $\text{S} + 2(+1) + 3(-2) + 2(-1) = 0 \implies \mathbf{\text{S} = +6}$.


4. **Carbon Suboxide ($\text{C}_3\text{O}_2$):**
   * Linear structure: $O=C=C^*=C=O$.
   * The two terminal carbons are bonded to electronegative oxygen: $\mathbf{C = +2}$.
   * The central carbon $C^*$ is bonded only to identical carbons: $\mathbf{C^* = 0}$.
   * **Average Oxidation State:** $\frac{2 + 0 + 2}{3} = \mathbf{+4/3}$.


5. **Tribromo-octoxide ($\text{Br}_3\text{O}_8$):**
   * Structure: $\text{O}_3\text{Br}-\text{BrO}_2-\text{BrO}_3$.
   * Terminal bromine atoms: $\mathbf{+6}$. Central bromine atom: $\mathbf{+4}$.
   * **Average Oxidation State:** $\frac{6 + 4 + 6}{3} = \mathbf{+16/3}$.


6. **Mixed Oxide Spinel ($\text{Fe}_3\text{O}_4$):**
   * Equimolar combination of Ferrous and Ferric oxides: $\text{FeO} \cdot \text{Fe}_2\text{O}_3$.
   * Contains one $\text{Fe}^{2+}$ ion ($+2$) and two $\text{Fe}^{3+}$ ions ($+3$):
   $$\mathbf{\text{Average O.N.} = \frac{1(+2) + 2(+3)}{3} = +\frac{8}{3}}$$


---


### 5.3 Redox Reaction Classifications


1. **Disproportionation Reaction:**
   A reaction in which the **same element in a single compound simultaneously undergoes oxidation and reduction**:
   $$2\text{H}_2\text{O}_2^{-1} \longrightarrow 2\text{H}_2\text{O}^{-2} + \text{O}_2^0 \quad (\text{O: } -1 \to -2 \text{ and } 0)$$
   $$\text{P}_4^0 + 3\text{OH}^- + 3\text{H}_2\text{O} \longrightarrow \text{PH}_3^{-3} + 3\text{H}_2\text{PO}_2^{-1} \quad (\text{P: } 0 \to -3 \text{ and } +1)$$
   $$\text{Cl}_2^0 + 2\text{OH}^- \text{ (cold, dil)} \longrightarrow \text{Cl}^- + \text{ClO}^- + \text{H}_2\text{O} \quad (\text{Cl: } 0 \to -1 \text{ and } +1)$$
   $$3\text{Cl}_2^0 + 6\text{OH}^- \text{ (hot, conc)} \longrightarrow 5\text{Cl}^- + \text{ClO}_3^- + 3\text{H}_2\text{O} \quad (\text{Cl: } 0 \to -1 \text{ and } +5)$$


2. **Comproportionation Reaction:**
   Two species containing the **same element in different oxidation states react to form a single intermediate oxidation state**:
   $$\text{Ag}^{2+} + \text{Ag}^0 \longrightarrow 2\text{Ag}^+$$
   $$\text{IO}_3^- (+5) + 5\text{I}^- (-1) + 6\text{H}^+ \longrightarrow 3\text{I}_2^0 + 3\text{H}_2\text{O}$$


---


## 6. Balancing Redox Reactions: Ion-Electron Method


### 6.1 Systematic Ion-Electron (Half-Reaction) Protocol


1. **Step 1:** Split the skeletal ionic reaction into two independent half-reactions: **Oxidation Half-Reaction** and **Reduction Half-Reaction**.
2. **Step 2:** Balance all atoms **other than Oxygen and Hydrogen** first.
3. **Step 3 (Oxygen Balance):** Add $\text{H}_2\text{O}$ molecules to the oxygen-deficient side.
4. **Step 4 (Hydrogen Balance):**
   * **In Acidic Medium:** Add $\mathbf{\text{H}^+}$ ions to the hydrogen-deficient side.
   * **In Basic Medium:** Balance as in acidic medium with $\text{H}^+$, then **add an equal number of $\text{OH}^-$ ions to BOTH sides** of the equation. Combine $(\text{H}^+ + \text{OH}^-)$ to form $\text{H}_2\text{O}$, and cancel common water molecules.
5. **Step 5 (Charge Balance):** Add electrons ($e^-$) to the more positive side to equalize electrical charges on both sides.
6. **Step 6 (Electron Equalization & Summation):** Multiply each half-reaction by suitable integers so that total electrons lost equals total electrons gained. Add both equations together.


---


## 7. Solution Concentration Terms & Interconversions


![Concentration Units Interconversion and Dilution Mechanics](/media/concentration_units_interconversion_and_dilution_mechanics.webp)
*Description: Two-panel solution chemistry reference: (Panel A) Detailed concentration metrics comparing Molarity, Molality, Mole Fraction, Mass %, and Normality alongside thermal expansion dependence; (Panel B) Analytical formulation matrix providing exact interconversion equations connecting $M$, $m$, $d$, $X_B$, alongside dilution and multi-solution mixing conservation laws.*


### 7.1 Quantitative Concentration Metrics


Let $w_B, M_B, n_B$ denote mass, molar mass, and moles of solute; $w_A, M_A, n_A$ denote mass, molar mass, and moles of solvent; and $V, d$ denote volume (in mL) and density (in g/mL) of solution.


1. **Molarity ($M$) [Temperature DEPENDENT]:**
   $$\mathbf{M = \frac{\text{Moles of Solute}}{\text{Volume of Solution in Liters}} = \frac{w_B \times 1000}{M_B \times V_{\text{mL}}} \quad [\text{mol L}^{-1}]}$$
   * *Thermal Effect:* As temperature increases, volume expands ($\Delta V > 0$), hence **Molarity decreases with increasing temperature**.


2. **Molality ($m$) [Temperature INDEPENDENT]:**
   $$\mathbf{m = \frac{\text{Moles of Solute}}{\text{Mass of Solvent in Kilograms}} = \frac{w_B \times 1000}{M_B \times w_A\text{ (g)}} \quad [\text{mol kg}^{-1}]}$$
   * Invariant with temperature because mass is strictly conserved.


3. **Mole Fraction ($X_B$) [Temperature INDEPENDENT]:**
   $$\mathbf{X_B = \frac{n_B}{n_A + n_B}, \quad X_A = \frac{n_A}{n_A + n_B} \implies X_A + X_B = 1}$$


4. **Mass Percentage ($\% w/w$):**
   $$\mathbf{\%(w/w) = \frac{w_{\text{solute}}}{w_{\text{solution}}} \times 100 = \frac{w_B}{w_A + w_B} \times 100}$$


5. **Mass by Volume Percentage ($\% w/v$):**
   $$\mathbf{\%(w/v) = \frac{w_{\text{solute (g)}}}{V_{\text{solution (mL)}}} \times 100 = \%(w/w) \times d_{\text{solution}}}$$


6. **Parts Per Million (ppm):**
   $$\mathbf{\text{ppm} = \frac{w_{\text{solute}}}{w_{\text{solution}}} \times 10^6}$$


---


### 7.2 Exact Mathematical Interconversion Formulas


1. **Molality ($m$) in terms of Molarity ($M$) and Density ($d$ in g/mL):**
   $$\mathbf{m = \frac{1000 \cdot M}{1000 \cdot d - M \cdot M_B}}$$
   $$\mathbf{M = \frac{1000 \cdot d \cdot m}{1000 + m \cdot M_B}}$$


2. **Molality ($m$) in terms of Mole Fraction ($X_B$):**
   $$\mathbf{m = \frac{X_B \times 1000}{(1 - X_B) \times M_A}}$$
   where $M_A$ is the molar mass of the solvent (for water, $M_A = 18\text{ g/mol}$).


3. **Molarity ($M$) in terms of Mass $\%$ ($w/w$) and Density ($d$):**
   $$\mathbf{M = \frac{10 \times \%(w/w) \times d}{M_B}}$$


---


### 7.3 Dilution & Multi-Solution Mixing Mechanics


1. **Law of Dilution:**
   When solvent is added to a solution, the moles of solute remain constant:
   $$\mathbf{M_1 V_1 = M_2 V_2 \quad \text{and} \quad N_1 V_1 = N_2 V_2}$$


2. **Mixing of Non-Reacting Solutions of Same Solute:**
   $$\mathbf{M_{\text{final}} = \frac{M_1 V_1 + M_2 V_2 + M_3 V_3 + \dots}{V_1 + V_2 + V_3 + \dots}}$$


---


## 8. Equivalent Weight, $n$-factor & The Law of Equivalence


### 8.1 Equivalent Weight ($E$) and Normality ($N$)


$$\mathbf{E = \frac{\text{Molar Mass}}{n\text{-factor}}}$$


$$\mathbf{\text{Number of Gram Equivalents} = \frac{\text{Mass (g)}}{E} = n \times n\text{-factor} = N \times V_{\text{L}}}$$


$$\mathbf{\text{Normality } (N) = M \times n\text{-factor}}$$


---


### 8.2 Systematic Evaluation of $n$-factor


1. **Acids ($n\text{-factor} = \text{Basicity}$):** Number of replaceable $\text{H}^+$ ions:
   * $\text{HCl} \implies n = 1$
   * $\text{H}_2\text{SO}_4 \implies n = 2$
   * **Phosphorus Oxyacids Structural Basicity:**
     * $\text{H}_3\text{PO}_4$ (Orthophosphoric acid): $3$ replaceable $-OH$ groups $\implies \mathbf{n = 3}$.
     * $\text{H}_3\text{PO}_3$ (Phosphorous acid): $2$ replaceable $-OH$ groups, $1$ non-ionizable $P-H$ bond $\implies \mathbf{n = 2}$.
     * $\text{H}_3\text{PO}_2$ (Hypophosphorous acid): $1$ replaceable $-OH$ group, $2$ non-ionizable $P-H$ bonds $\implies \mathbf{n = 1}$.
     * $\text{H}_3\text{BO}_3$ (Boric acid): Aprotic monobasic Lewis acid accepting $OH^-$ from water: $\text{B(OH)}_3 + \text{H}_2\text{O} \rightleftharpoons [\text{B(OH)}_4]^- + \text{H}^+ \implies \mathbf{n = 1}$.


2. **Bases ($n\text{-factor} = \text{Acidity}$):** Number of replaceable $\text{OH}^-$ ions:
   * $\text{NaOH} \implies n = 1, \quad \text{Ca(OH)}_2 \implies n = 2, \quad \text{Al(OH)}_3 \implies n = 3$.


3. **Salts ($n\text{-factor}$):** Total positive (cationic) or negative (anionic) charge per formula unit:
   * $\text{NaCl} \implies n = 1$
   * $\text{CaCO}_3 \implies n = 2$
   * $\text{Al}_2(\text{SO}_4)_3 \implies 2\text{Al}^{3+} \implies \mathbf{n = 6}$.


4. **Oxidizing and Reducing Agents ($n\text{-factor}$ in Redox):**
   Defined as the **total change in oxidation number per mole of the substance**:
   * **Potassium Permanganate ($\text{KMnO}_4$):**
     * **Acidic Medium:** $\text{MnO}_4^- (+7) + 5e^- \to \text{Mn}^{2+} (+2) \implies \mathbf{n = 5} \implies E = M/5$.
     * **Neutral / Faintly Alkaline Medium:** $\text{MnO}_4^- (+7) + 3e^- \to \text{MnO}_2 (+4) \implies \mathbf{n = 3} \implies E = M/3$.
     * **Strongly Alkaline Medium:** $\text{MnO}_4^- (+7) + e^- \to \text{MnO}_4^{2-} (+6) \implies \mathbf{n = 1} \implies E = M/1$.
   * **Potassium Dichromate ($\text{K}_2\text{Cr}_2\text{O}_7$):**
     * **Acidic Medium:** $\text{Cr}_2\text{O}_7^{2-} (+6) + 14\text{H}^+ + 6e^- \to 2\text{Cr}^{3+} (+3) + 7\text{H}_2\text{O}$.
     * Total change $= 2 \text{ atoms} \times (6 - 3) = 6 \implies \mathbf{n = 6} \implies E = M/6$.
   * **Ferrous Oxalate ($\text{FeC}_2\text{O}_4$):**
     * Oxidized to $\text{Fe}^{3+}$ and $\text{CO}_2$:
     * $\text{Fe}^{2+} \to \text{Fe}^{3+} + e^-$ (Change $= 1$).
     * $\text{C}_2\text{O}_4^{2-} \to 2\text{CO}_2 + 2e^-$ (Change $= 2$).
     * Total electrons released per formula unit $= 1 + 2 = 3 \implies \mathbf{n = 3} \implies E = M/3$.


---


### 8.3 The Universal Law of Chemical Equivalence


**Fundamental Law:** In any chemical reaction, reactants always combine and products are always formed in **strictly equal numbers of gram equivalents**:


$$a\text{A} + b\text{B} \longrightarrow c\text{C} + d\text{D}$$


$$\mathbf{\text{Equivalents of A} = \text{Equivalents of B} = \text{Equivalents of C} = \text{Equivalents of D}}$$


$$\mathbf{N_A V_A = N_B V_B}$$


*(The Law of Equivalence completely bypasses the need for stoichiometric balancing coefficients $a, b, c, d$).*


---


## 9. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Modern vs. Classical STP Trap:**
   * Standard classical textbook problems use $V_m = 22.4\text{ L}$ ($1\text{ atm}, 0^\circ\text{C}$).
   * If a question explicitly specifies pressure in **bars** ($1\text{ bar}, 273.15\text{ K}$), use $\mathbf{22.7\text{ L}}$! Using $22.4\text{ L}$ introduces a $\sim 1.3\%$ error that will fail numerical value questions.
2. **The Boric Acid & Hypophosphorous Acid Basicity Trap:**
   * $\text{H}_3\text{BO}_3$ has three hydrogen atoms, but it is **monobasic ($n = 1$)**!
   * $\text{H}_3\text{PO}_3$ has three hydrogen atoms, but it is **dibasic ($n = 2$)**!
   * $\text{H}_3\text{PO}_2$ has three hydrogen atoms, but it is **monobasic ($n = 1$)**!
3. **Molarity vs. Molality Density Scaling Trap:**
   * For dilute aqueous solutions where $d \approx 1.0\text{ g/mL}$, molarity and molality are numerically close ($M \approx m$).
   * For concentrated solutions or non-aqueous solvents ($d \neq 1.0$), failing to account for the $(1000d - M \cdot M_B)$ denominator produces massive inaccuracies.
4. **The Disproportionation Equivalent Weight Harmonic Mean Trap:**
   * For a disproportionation reaction where an element is both oxidized ($n_1$) and reduced ($n_2$):
     $$\mathbf{n_{\text{equivalent}} = \frac{n_1 \times n_2}{n_1 + n_2}}$$
   * Example: Disproportionation of $\text{Cl}_2$ in alkaline medium:
     $$3\text{Cl}_2 \to 5\text{Cl}^- (n_1 = 1) + \text{ClO}_3^- (n_2 = 5) \implies n_{\text{net}} = \frac{1 \times 5}{1 + 5} = \frac{5}{6} \text{ per Cl atom} \implies \frac{5}{3} \text{ per } \text{Cl}_2.$$