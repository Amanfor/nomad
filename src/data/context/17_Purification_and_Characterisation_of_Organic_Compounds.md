# Chemistry Revision Context: Chapter 17 — Purification and Characterisation of Organic Compounds

---

### 1.1 Crystallisation
- **Simple Crystallisation:**
  - Most ubiquitous method for purifying solid organic substances.
  - **Governing Principle:** Substantial difference in solubility of the organic compound in a chosen solvent at ambient temperature versus elevated (boiling) temperature, while associated impurities are either completely insoluble or remain dissolved in the mother liquor even upon cooling.
  - **Decolorisation:** Animal charcoal (activated carbon) is introduced into the hot solution to adsorb colored resinous impurities prior to hot filtration.
- **Fractional Crystallisation:**
  - Employed when two organic solids possess overlapping but distinct solubilities in the same solvent.
  - Repeated concentration, cooling, and fractional crystallization yield successive harvests enriched in the less soluble component first, followed by the more soluble component.

### 1.2 Sublimation
- **Governing Principle:** Phase transformation from solid directly to vapor without melting upon heating:
  $$\text{Solid} \underset{\text{Cool}}{\overset{\text{Heat}}{\rightleftharpoons}} \text{Vapour}$$
- **Applicability:** Purifying sublimable organic substances contaminated with non-sublimable impurities.
- **Key Sublimable Compounds for JEE:** Camphor, Naphthalene, Anthracene, Benzoic Acid, Salicylic Acid, Phthalic Anhydride, Iodine, and Ammonium Chloride ($\text{NH}_4\text{Cl}$).

---

#### A. Simple Distillation
- **Governing Principle:** Vaporization of a liquid followed by condensation of its vapors.
- **Operational Criterion:** Applicable to volatile liquids containing non-volatile impurities, or miscible liquid mixtures whose boiling points differ by **at least $25^\circ\text{C}$** without decomposing at their boiling points.
- **Classic Examples:** Chloroform (b.p. $61^\circ\text{C}$) and Aniline (b.p. $184^\circ\text{C}$); Ether (b.p. $35^\circ\text{C}$) and Toluene (b.p. $110^\circ\text{C}$).

#### B. Fractional Distillation
- **Operational Criterion:** Employed when the boiling point difference ($\Delta T_{b.p.}$) between miscible liquid components is **less than $25^\circ\text{C}$**.
- **Fractionating Columns:** Columns packed with glass beads or engineered with bubble plates provide a large surface area for repeated, microscopic cycles of condensation and vaporization (theoretical plates). Vapors of the higher boiling component condense and trickle back downwards, while ascending vapors become progressively enriched in the more volatile component (lower b.p.).
- **Classic Applications:** Fractionation of crude petroleum into kerosene, gasoline, and naphtha; separation of Acetone (b.p. $56^\circ\text{C}$) and Methyl Alcohol (b.p. $65^\circ\text{C}$).

#### C. Distillation Under Reduced Pressure (Vacuum Distillation)
- **Governing Principle:** The boiling point of any liquid is the temperature at which its vapor pressure equals external atmospheric pressure. Lowering external pressure reduces the required boiling temperature.
- **Operational Criterion:** Essential for purifying heat-sensitive liquids that decompose at or below their normal boiling points.
- **Classic Examples:**
  - **Glycerol:** Decomposes violently at its normal boiling point ($290^\circ\text{C}$), but distills without decomposition at $180^\circ\text{C}$ under reduced pressure ($12\text{ mm Hg}$).
  - Concentration of sugarcane juice in the sugar industry.
  - Recovery of spent lye in soap manufacturing.

#### D. Steam Distillation
- **Operational Criteria:** Applicable for organic compounds that meet four strict physical criteria:
  1. Completely immiscible or practically insoluble in water.
  2. Highly steam-volatile.
  3. Possess a significant vapor pressure ($10-15\text{ mm Hg}$) at $100^\circ\text{C}$ ($373\text{ K}$).
  4. Contain non-volatile impurities.
- **Governing Law (Dalton's Law of Partial Pressures):** The heterogeneous mixture of immiscible liquids boils when the sum of their individual vapor pressures equals external atmospheric pressure ($P_{atm}$):
  $$P_{total} = p_{\text{organic}} + p_{\text{H}_2\text{O}} = P_{atm} \approx 760\text{ mm Hg}$$
  Since $p_{\text{H}_2\text{O}} < 760\text{ mm Hg}$, the boiling point of the mixture ($T_{mix}$) is strictly **lower than $100^\circ\text{C}$**, preventing thermal decomposition.
- **Relative Mass Formula of Distillate:**
  $$\frac{w_{\text{organic}}}{w_{\text{H}_2\text{O}}} = \frac{p_{\text{organic}} \times M_{\text{organic}}}{p_{\text{H}_2\text{O}} \times M_{\text{H}_2\text{O}}}$$
  where $w$ represents mass in the distillate, $p$ is vapor pressure at $T_{mix}$, and $M$ is molecular mass.
- **Classic Examples:** Purification of Aniline, Nitrobenzene, Bromobenzene, Essential Oils (Turpentine, Lemon oil), and separating steam-volatile *o*-Nitrophenol (chelated intramoleculary) from non-steam-volatile *p*-Nitrophenol (intermolecularly H-bonded).

#### E. Azeotropic Distillation
- Constant boiling liquid mixtures that distill unchanged in composition at a specific temperature cannot be separated by conventional fractional distillation.
- **Rectified Spirit:** Contains $95.87\%$ ethanol and $4.13\%$ water by mass; boils constantly at $78.13^\circ\text{C}$.
- Pure absolute alcohol ($100\%$) is obtained by adding benzene (which forms a ternary minimum boiling azeotrope with water and alcohol, distilling over first at $64.85^\circ\text{C}$).

---

### 1.3 Visual Preservation: Fractional vs. Steam Distillation Principles

![Fractional vs Steam Distillation](/media/fractional_vs_steam_distillation_apparatus.webp)
*Description: Comparative technical diagram illustrating the structural and thermodynamic divergence between fractional distillation (utilizing packed fractionating columns to achieve multi-plate liquid-vapor equilibrium for miscible liquids with $\Delta T_{b.p.} < 25^\circ\text{C}$) and steam distillation (governed by Dalton's law of partial pressures $P_{total} = p_{organic} + p_{H_2O} = P_{atm}$, enabling water-insoluble, steam-volatile organic liquids to boil below $100^\circ\text{C}$).*

---

### 1.4 Differential Extraction & Distribution Law
- **Governing Principle (Nernst Distribution Law):** When an organic compound distributed between two immiscible liquid phases (typically water and an organic solvent such as ether or chloroform) is agitated in a separating funnel, it distributes such that the ratio of equilibrium concentrations is constant at fixed temperature:
  $$K_D = \frac{C_{\text{organic}}}{C_{\text{aqueous}}}$$
- **Mathematical Invariant for Multiple Extractions:**
  If an aqueous solution of volume $V$ containing an initial mass $w$ of solute is extracted repeatedly with volume $V_1$ of organic solvent each time:
  $$w_n = w \left( \frac{V}{K_D V_1 + V} \right)^n$$
  where $w_n$ is the residual mass left unextracted in the aqueous layer after $n$ successive operations.
- **High-Yield Insight:** Multiple successive extractions using small portions of solvent yield a drastically higher recovery efficiency than a single bulk extraction using the entire volume.

---

### 1.5 Chromatographic Separation Techniques

| Type of Chromatography | Mobile Phase | Stationary Phase | Mechanism | Primary Analytical & Preparative Uses |
| :--- | :--- | :--- | :--- | :--- |
| **Column Chromatography** | Liquid | Solid (Alumina / Silica) | Adsorption differential | Bulk / Preparative scale compound purification |
| **Thin-Layer Chromatography (TLC)** | Liquid | Solid thin film (Silica gel G) | Adsorption differential | Fast qualitative analysis, reaction monitoring, identification |
| **High Performance Liquid (HPLC)** | Liquid | Solid (microparticulate silica) | Adsorption / Partition | High-precision quantitative and qualitative analysis |
| **Gas-Liquid Chromatography (GLC)** | Inert gas ($\text{N}_2, \text{He}$) | Liquid coated on inert solid | Partition | Quantitative analysis of volatile organic vapors |
| **Ascending Paper Chromatography** | Liquid | Liquid (trapped water in cellulose) | Partition | Separation of polar bio-organics: amino acids, carbohydrates, pigments |

- **Retardation Factor ($R_f$):**
  $$R_f = \frac{\text{Distance moved by the substance from origin baseline } (d_x)}{\text{Distance moved by the solvent front from origin baseline } (d_{\text{solvent}})}$$
  - Since solvent front migration always exceeds spot migration: $0 \le R_f \le 1$.
  - Strongly adsorbed components possess lower $R_f$ values; weakly adsorbed components possess higher $R_f$ values.

---

### 1.6 Visual Preservation: Thin Layer Chromatography & Retardation Factor ($R_f$)

![TLC Retardation Factor Schematic](/media/chromatography_and_retardation_factor.webp)
*Description: Detailed schematic of a Thin-Layer Chromatography (TLC) developing chamber showing the solvent reservoir, baseline origin, solvent front line, component spot migration distances ($d_A, d_B$), and the algebraic derivation of the dimensionless Retardation Factor ($R_f = d_x / d_{solvent}$) illustrating differential adsorption selectivity.*

---

### 2.1 Detection of Carbon and Hydrogen (Copper Oxide Test)
- **Reagent:** Pure dry Cupric Oxide ($\text{CuO}$).
- **Procedure:** The organic compound is pulverized with dry $\text{CuO}$ in a $1:3$ ratio and heated in a hard glass test tube.
- **Reactions & Confirmatory Observations:**
  1. **Carbon:** Oxidized to gaseous $\text{CO}_2$, which turns lime water milky due to insoluble $\text{CaCO}_3$:
     $$\text{C} + 2\text{CuO} \xrightarrow{\Delta} 2\text{Cu} + \text{CO}_2\uparrow$$
     $$\text{Ca(OH)}_2 + \text{CO}_2 \to \text{CaCO}_3\downarrow \text{ (milky)} + \text{H}_2\text{O}$$
     *(Excess $\text{CO}_2$ clears the milkiness by forming soluble $\text{Ca(HCO}_3)_2$).*
  2. **Hydrogen:** Oxidized to $\text{H}_2\text{O}$ vapor, which condenses on the cooler tube walls and turns white anhydrous Cupric Sulphate into blue hydrated pentahydrate:
     $$2\text{H} + \text{CuO} \xrightarrow{\Delta} \text{Cu} + \text{H}_2\text{O}$$
     $$\text{CuSO}_4 \text{ (white anhydrous)} + 5\text{H}_2\text{O} \to \text{CuSO}_4\cdot 5\text{H}_2\text{O} \text{ (blue hydrated)}$$

---

### 2.2 Lassaigne’s Test (Sodium Fusion Extract — SFE)
- **Objective:** Converts covalent bonds linking Nitrogen, Sulphur, and Halogens into water-soluble ionic sodium salts by fusion with molten metallic sodium:
  $$\text{Na} + \text{C} + \text{N} \xrightarrow{\Delta} \text{NaCN}$$
  $$2\text{Na} + \text{S} \xrightarrow{\Delta} \text{Na}_2\text{S}$$
  $$\text{Na} + \text{X} \xrightarrow{\Delta} \text{NaX} \quad (\text{X} = \text{Cl, Br, I})$$
  $$\text{Na} + \text{C} + \text{N} + \text{S} \xrightarrow{\Delta} \text{NaSCN} \quad \text{(if both N and S are present)}$$

#### A. Detection of Nitrogen
1. **Procedure:** SFE is treated with freshly prepared $\text{FeSO}_4$ and made alkaline with $\text{NaOH}$. The mixture is boiled, cooled, acidified with concentrated $\text{HCl}$, and treated with a few drops of $\text{FeCl}_3$.
2. **Reactions:**
   $$\text{FeSO}_4 + 2\text{NaOH} \to \text{Fe(OH)}_2 + \text{Na}_2\text{SO}_4$$
   $$6\text{NaCN} + \text{Fe(OH)}_2 \to \text{Na}_4[\text{Fe(CN)}_6] + 2\text{NaOH}$$
   $$3\text{Na}_4[\text{Fe(CN)}_6] + 4\text{FeCl}_3 \xrightarrow{\text{HCl}} \mathbf{Fe_4[Fe(CN)_6]_3}\downarrow \text{ (Prussian Blue ppt)} + 12\text{NaCl}$$
3. **Role of Conc. $\text{HCl}$:** Dissolves the greenish-brown precipitate of $\text{Fe(OH)}_2$ and $\text{Fe(OH)}_3$, preventing false masking, and oxidizes $\text{Fe}^{2+}$ to $\text{Fe}^{3+}$.

#### B. Detection of Sulphur
4. **Sodium Nitroprusside Test:**
   $$\text{Na}_2\text{S} + \text{Na}_2[\text{Fe(CN)}_5\text{NO}] \to \mathbf{Na_4[Fe(CN)_5NOS]} \text{ (Intense Violet / Purple)}$$
   *(Sodium nitroprusside reacts with sulfide ions to form sodium thionitroprusside).*
5. **Lead Acetate Test:**
   $$\text{Na}_2\text{S} + (\text{CH}_3\text{COO})_2\text{Pb} \xrightarrow{\text{CH}_3\text{COOH}} \mathbf{PbS}\downarrow \text{ (Black ppt)} + 2\text{CH}_3\text{COONa}$$

#### C. Detection of Nitrogen and Sulphur Together
- If both $\text{N}$ and $\text{S}$ are present in the organic molecule, fusion with inadequate sodium yields Sodium Thiocyanate ($\text{NaSCN}$).
- Upon addition of neutral $\text{FeCl}_3$ (without adding $\text{FeSO}_4$), an unmistakable **Blood-Red Coloration** forms:
  $$3\text{NaSCN} + \text{FeCl}_3 \to \mathbf{[Fe(SCN)_3]} \text{ or } \mathbf{[Fe(SCN)]^{2+}} \text{ (Blood Red)} + 3\text{NaCl}$$
- **Sodium Excess Effect:** If fusion is carried out with excess metallic sodium, the thiocyanate decomposes into separate cyanide and sulfide salts:
  $$\text{NaSCN} + 2\text{Na} \xrightarrow{\Delta} \text{NaCN} + \text{Na}_2\text{S}$$
  yielding positive individual tests for both Prussian blue and lead sulfide.

#### D. Detection of Halogens
6. **Acidification with Nitric Acid:** SFE **must first be boiled with concentrated $\text{HNO}_3$** before adding Silver Nitrate ($\text{AgNO}_3$).
   - *Reason:* If $\text{N}$ or $\text{S}$ are present, $\text{NaCN}$ and $\text{Na}_2\text{S}$ would react with $\text{AgNO}_3$ to precipitate white $\text{AgCN}$ or black $\text{Ag}_2\text{S}$, which would severely confuse halogen identification.
   - Boiling with $\text{HNO}_3$ expels them as volatile gases:
     $$\text{NaCN} + \text{HNO}_3 \xrightarrow{\Delta} \text{NaNO}_3 + \text{HCN}\uparrow$$
     $$\text{Na}_2\text{S} + 2\text{HNO}_3 \xrightarrow{\Delta} 2\text{NaNO}_3 + \text{H}_2\text{S}\uparrow$$
7. **Confirmatory Precipitation with $\text{AgNO}_3$:**
   $$\text{NaX} + \text{AgNO}_3 \to \mathbf{AgX}\downarrow + \text{NaNO}_3$$
   - **Chlorine ($\text{Cl}^-$):** Curdy **White precipitate** of $\text{AgCl}$, **completely soluble** in dilute aqueous $\text{NH}_3 / \text{NH}_4\text{OH}$ forming the soluble complex $[\text{Ag(NH}_3)_2]\text{Cl}$.
   - **Bromine ($\text{Br}^-$):** **Pale yellow precipitate** of $\text{AgBr}$, **partially / sparingly soluble** in aqueous $\text{NH}_3$.
   - **Iodine ($\text{I}^-$):** Bright **Yellow precipitate** of $\text{AgI}$, **completely insoluble** in aqueous $\text{NH}_3$.
8. **Organic Layer Test for $\text{Br}_2$ and $\text{I}_2$:**
   - SFE acidified with dilute $\text{HCl} + \text{CCl}_4$ (or $\text{CS}_2$) + freshly prepared chlorine water.
   - Chlorine oxidizes halides to free halogens ($2\text{Br}^- + \text{Cl}_2 \to 2\text{Cl}^- + \text{Br}_2$; $2\text{I}^- + \text{Cl}_2 \to 2\text{Cl}^- + \text{I}_2$).
   - $\text{Br}_2$ dissolves into the dense $\text{CCl}_4$ layer imparting an **Orange-Brown** color.
   - $\text{I}_2$ imparts a vivid **Violet / Purple** color.

#### E. Detection of Phosphorus
- The organic compound is fused with an oxidizing agent like Sodium Peroxide ($\text{Na}_2\text{O}_2$) or Potassium Nitrate ($\text{KNO}_3$).
- Phosphorus is oxidized to sodium phosphate:
  $$\text{P} + \text{Na}_2\text{O}_2 \xrightarrow{\Delta} \text{Na}_3\text{PO}_4$$
- The extract is boiled with concentrated $\text{HNO}_3$ and treated with Ammonium Molybdate $((\text{NH}_4)_2\text{MoO}_4)$:
  $$\text{Na}_3\text{PO}_4 + 3\text{HNO}_3 \to \text{H}_3\text{PO}_4 + 3\text{NaNO}_3$$
  $$\text{H}_3\text{PO}_4 + 12(\text{NH}_4)_2\text{MoO}_4 + 21\text{HNO}_3 \to \mathbf{(NH_4)_3[PMo_{12}O_{40}]}\downarrow \text{ (Canary Yellow ppt)} + 21\text{NH}_4\text{NO}_3 + 12\text{H}_2\text{O}$$

---

### 2.3 Visual Preservation: Lassaigne's Detection Pathway Flowchart

![Lassaigne Qualitative Detection Pathway](/media/lassaigne_qualitative_detection_pathway.webp)
*Description: Structural flowchart tracing the conversion of organic covalent heteroatoms (N, S, Halogens, P) into water-soluble ionic sodium salts via sodium fusion extract (SFE), followed by branched chemical test pathways, specific reagents, characteristic precipitate colors (Prussian blue, purple thionitroprusside, blood-red thiocyanate, canary yellow phosphomolybdate), and critical JEE exclusion traps.*

---

### 3.1 Estimation of Carbon and Hydrogen (Liebig's Combustion Method)
- **Apparatus:** Combustion tube packed with oxidized copper gauze and copper oxide, connected in series to an anhydrous Calcium Chloride U-tube (absorbs $\text{H}_2\text{O}$) followed by concentrated Potassium Hydroxide bulb (absorbs $\text{CO}_2$).
- **Calculation Formulae:**
  $$\%\text{C} = \frac{12}{44} \times \frac{\text{Mass of } \text{CO}_2 \text{ produced } (m_{\text{CO}_2})}{\text{Mass of organic compound } (m)} \times 100$$
  $$\%\text{H} = \frac{2.016}{18.016} \times \frac{\text{Mass of } \text{H}_2\text{O} \text{ produced } (m_{\text{H}_2\text{O}})}{\text{Mass of organic compound } (m)} \times 100$$

---

#### A. Dumas Method
- **Principle:** Organic compound heated with cupric oxide in a carbon dioxide atmosphere; all nitrogen is converted to elemental nitrogen gas ($\text{N}_2$), while traces of nitrogen oxides are reduced back to $\text{N}_2$ by passing over heated copper gauze.
- Gaseous combustion products pass over concentrated $\text{KOH}$ in a nitrometer: $\text{CO}_2$ is absorbed completely, and collected $\text{N}_2$ gas volume ($V_1$) is recorded at ambient room temperature ($T_1$) and pressure ($P_1$).
- **Reduction of $\text{N}_2$ Volume to STP:**
  $$P_0 = 760\text{ mm Hg}, \quad T_0 = 273\text{ K}$$
  $$P_{\text{corrected}} = P_{\text{barometric}} - \text{Aqueous Tension at } T_1$$
  $$\frac{P_{\text{corrected}} \times V_1}{T_1} = \frac{P_0 \times V_0}{T_0} \implies V_0 = \frac{P_{\text{corrected}} \times V_1 \times 273}{760 \times T_1}$$
- **Percentage Calculation:**
  Since $22400\text{ mL of } \text{N}_2 \text{ at STP} = 28\text{ g}$:
  $$\%\text{N} = \frac{28}{22400} \times \frac{V_0 \text{ (in mL)}}{m} \times 100 = \frac{V_0 \text{ (mL)}}{8 \times m}$$

#### B. Kjeldahl's Method
- **Principle:** Organic compound digested with concentrated $\text{H}_2\text{SO}_4$ in the presence of Potassium Sulphate ($\text{K}_2\text{SO}_4$, raises boiling point) and Copper Sulphate ($\text{CuSO}_4$, catalytic action). Nitrogen quantitatively converts into Ammonium Sulphate:
  $$2\text{N} + \text{H}_2\text{SO}_4 \to (\text{NH}_4)_2\text{SO}_4$$
- Digested mixture is heated with excess $\text{NaOH}$ to liberate ammonia:
  $$(\text{NH}_4)_2\text{SO}_4 + 2\text{NaOH} \to \text{Na}_2\text{SO}_4 + 2\text{H}_2\text{O} + 2\text{NH}_3\uparrow$$
- Liberated $\text{NH}_3$ is absorbed into a known volume ($V_{\text{total}}$) of standard acid (e.g., $N_1$ normal $\text{H}_2\text{SO}_4$ or $\text{HCl}$). The unreacted excess acid is back-titrated against standard alkali ($N_2$ normal $\text{NaOH}$).
- **Net Acid Neutralized by Ammonia:**
  $$V_{\text{acid used by } \text{NH}_3} = V_{\text{total}} - V_{\text{neutralized by base}}$$
- **Percentage Formula:**
  $$\%\text{N} = \frac{1.4 \times \text{Normality of acid } (N) \times \text{Volume of acid consumed by } \text{NH}_3 \text{ (mL)}}{\text{Mass of organic compound } (m)}$$
- **Crucial JEE Exclusion Rule:** Kjeldahl's method **CANNOT** estimate nitrogen in:
  1. Nitro compounds ($-\text{NO}_2$)
  2. Azo compounds ($-\text{N}=\text{N}-$)
  3. Nitrogen residing in aromatic/heterocyclic rings (Pyridine, Quinoline, Pyrrole)
  *Reason:* These nitrogen forms fail to reduce to ammonium sulphate under conc. $\text{H}_2\text{SO}_4$ digestion.

---

### 3.2 Estimation of Halogens (Carius Method)
- A known mass ($m$) of organic compound is heated with fuming Nitric Acid ($\text{HNO}_3$) in the presence of Silver Nitrate ($\text{AgNO}_3$) inside a thick-walled sealed glass Carius tube at $150-200^\circ\text{C}$.
- Carbon and Hydrogen are oxidized to $\text{CO}_2$ and $\text{H}_2\text{O}$, while Halogen is precipitated quantitatively as Silver Halide ($\text{AgX}$). The precipitate is filtered, washed, dried, and weighed ($m_{\text{AgX}}$).
- **Percentage Calculation:**
  $$\%\text{X} = \frac{\text{Atomic Mass of } X}{\text{Molar Mass of } \text{AgX}} \times \frac{m_{\text{AgX}}}{m} \times 100$$
  - For Chlorine: $\%\text{Cl} = \frac{35.5}{143.5} \times \frac{m_{\text{AgCl}}}{m} \times 100$
  - For Bromine: $\%\text{Br} = \frac{80}{188} \times \frac{m_{\text{AgBr}}}{m} \times 100$
  - For Iodine: $\%\text{I} = \frac{127}{235} \times \frac{m_{\text{AgI}}}{m} \times 100$

---

### 3.3 Estimation of Sulphur (Carius Method)
- Organic compound is heated with fuming $\text{HNO}_3$ (or sodium peroxide $\text{Na}_2\text{O}_2$) in a Carius tube.
- Sulphur is oxidized entirely to Sulphuric Acid:
  $$\text{S} + 2\text{HNO}_3 \to \text{H}_2\text{SO}_4 + 2\text{NO}\uparrow$$
- Addition of excess Barium Chloride ($\text{BaCl}_2$) precipitates Barium Sulphate:
  $$\text{H}_2\text{SO}_4 + \text{BaCl}_2 \to \mathbf{BaSO_4}\downarrow \text{ (White ppt)} + 2\text{HCl}$$
- **Percentage Formula:**
  $$\%\text{S} = \frac{32}{233.3} \times \frac{\text{Mass of } \text{BaSO}_4 \text{ precipitate } (m_{\text{BaSO}_4})}{\text{Mass of organic compound } (m)} \times 100$$

---

### 3.4 Estimation of Phosphorus
- Compound heated with fuming $\text{HNO}_3$ oxidizes Phosphorus to Phosphoric Acid ($\text{H}_3\text{PO}_4$).
- **Two Analytical Pathways:**
  1. Precipitated with Ammonium Molybdate as Ammonium Phosphomolybdate $(\text{NH}_4)_3[\text{PMo}_{12}\text{O}_{40}]$ (Molar mass = $1877\text{ g/mol}$):
     $$\%\text{P} = \frac{31}{1877} \times \frac{m_{\text{precipitate}}}{m} \times 100$$
  2. Precipitated with Magnesia mixture ($\text{MgCl}_2 + \text{NH}_4\text{Cl} + \text{NH}_4\text{OH}$) as $\text{MgNH}_4\text{PO}_4$, which upon strong ignition yields Magnesium Pyrophosphate ($\text{Mg}_2\text{P}_2\text{O}_7$, Molar mass = $222\text{ g/mol}$):
     $$2\text{MgNH}_4\text{PO}_4 \xrightarrow{\Delta} \text{Mg}_2\text{P}_2\text{O}_7 + 2\text{NH}_3\uparrow + \text{H}_2\text{O}$$
     $$\%\text{P} = \frac{62}{222} \times \frac{\text{Mass of } \text{Mg}_2\text{P}_2\text{O}_7}{m} \times 100$$

---

### 3.5 Estimation of Oxygen
- **Indirect Method (By Difference):**
  $$\%\text{O} = 100 - \sum (\%\text{C} + \%\text{H} + \%\text{N} + \%\text{Halogens} + \%\text{S} + \%\text{P})$$
- **Direct Method (Aluise's Method):**
  - Pyrolysis of compound in a stream of pure Nitrogen over activated Carbon at $1100^\circ\text{C}$ converts all oxygen into Carbon Monoxide ($\text{CO}$):
    $$\text{Organic Oxygen} + \text{C} \xrightarrow{1100^\circ\text{C}} \text{CO}$$
  - $\text{CO}$ is quantitatively oxidized to $\text{CO}_2$ using Iodine Pentoxide ($\text{I}_2\text{O}_5$):
    $$5\text{CO} + \text{I}_2\text{O}_5 \to 5\text{CO}_2 + \text{I}_2$$
  - $\%\text{O} = \frac{32}{88} \times \frac{m_{\text{CO}_2}}{m} \times 100$.

---

### 4.1 Fundamental Definitions
- **Empirical Formula:** Represents the simplest whole-number molar ratio of different atoms present in a single molecule of the compound.
- **Molecular Formula:** Expresses the exact, actual number of each constituent atom present in a molecule.
  $$\text{Molecular Formula} = (\text{Empirical Formula})_n$$
  $$n = \frac{\text{Molecular Mass}}{\text{Empirical Formula Mass}} \quad (n = 1, 2, 3, \dots)$$

### 4.2 Standard Determination Pipeline
9. Tabulate elements, their estimated mass percentages ($\%$) and atomic masses ($A$).
10. Compute relative number of moles: $\text{Moles} = \frac{\%}{A}$.
11. Divide each molar value by the lowest molar value in the set to establish the simplest atomic ratio.
12. If non-integral ratios arise (e.g., $1.33$ or $1.5$), multiply all values by the smallest integer (e.g., $3$ or $2$) to yield integers.
13. Determine integer $n$ via known molecular mass.

### 4.3 Methods of Determining Molecular Mass
- **Vapour Density ($V.D.$):**
  $$\text{Molecular Mass} = 2 \times \text{Vapour Density}$$
- **Victor Meyer Method:**
  $$\text{Molecular Mass} = \frac{w \times 22400}{V_{\text{STP}} \text{ (mL)}}$$
- **Silver Salt Method for Carboxylic Acids:**
  $$\text{Molar Mass of } n\text{-basic acid} = \left( \frac{w_{\text{acid salt}}}{w_{\text{silver residue}}} \times 108 - 107 \right) \times n$$
- **Platinichloride Method for Organic Bases:**
  $$\text{Molar Mass of base } B = \frac{1}{2} \left( \frac{w_{\text{salt}}}{w_{\text{Pt residue}}} \times 195 - 410 \right)$$

---

### Archetype 1: Kjeldahl's Method with Back-Titration
- **Problem:** $0.50\text{ g}$ of an organic compound was digested under Kjeldahl's conditions and evolved ammonia was passed into $50\text{ mL}$ of $0.1\text{ M } \text{H}_2\text{SO}_4$. The excess acid required $30\text{ mL}$ of $0.1\text{ M } \text{NaOH}$ for complete neutralization. Calculate the percentage of nitrogen.
- **Solution Derivation:**
  - Milliequivalents of initial $\text{H}_2\text{SO}_4$:
    $$\text{Meq} = V \times N = 50\text{ mL} \times (0.1\text{ M} \times 2) = 50 \times 0.2 = 10.0\text{ meq}$$
  - Milliequivalents of unreacted excess acid neutralized by $\text{NaOH}$:
    $$\text{Meq}_{\text{residual}} = 30\text{ mL} \times 0.1\text{ N} = 3.0\text{ meq}$$
  - Milliequivalents of acid consumed by $\text{NH}_3$:
    $$\text{Meq}_{\text{consumed}} = 10.0 - 3.0 = 7.0\text{ meq}$$
  - Percentage of Nitrogen:
    $$\%\text{N} = \frac{1.4 \times \text{Meq}_{\text{consumed}}}{m} = \frac{1.4 \times 7.0}{0.50} = \frac{9.8}{0.50} = \mathbf{19.6\%}$$

---

### Archetype 2: Dumas Nitrogen with Aqueous Tension Correction
- **Problem:** $0.25\text{ g}$ of an organic compound yielded $31.8\text{ mL}$ of moist nitrogen collected at $17^\circ\text{C}$ and $754\text{ mm Hg}$ barometric pressure. The aqueous tension of water at $17^\circ\text{C}$ is $14\text{ mm Hg}$. Calculate the percentage of nitrogen.
- **Solution Derivation:**
  - Dry gas pressure:
    $$P_1 = 754 - 14 = 740\text{ mm Hg}$$
  - Temperature in Kelvin:
    $$T_1 = 17 + 273 = 290\text{ K}$$
  - Conversion to volume at STP ($P_0 = 760\text{ mm Hg}, T_0 = 273\text{ K}$):
    $$V_0 = \frac{P_1 V_1 T_0}{P_0 T_1} = \frac{740 \times 31.8 \times 273}{760 \times 290} = \frac{6424368}{220400} \approx 29.15\text{ mL}$$
  - Percentage of Nitrogen:
    $$\%\text{N} = \frac{28}{22400} \times \frac{29.15}{0.25} \times 100 = \mathbf{14.58\%}$$

---

### Archetype 3: Steam Distillation Mass Ratio Calculation
- **Problem:** An organic compound immiscible with water steam-distills at $98^\circ\text{C}$ at $760\text{ mm Hg}$. At this temperature, the vapor pressure of water is $707\text{ mm Hg}$. The distillate contains organic compound and water in a mass ratio of $1 : 4$. Find the molecular mass of the organic compound.
- **Solution Derivation:**
  - Vapor pressure of organic substance:
    $$p_{\text{organic}} = P_{atm} - p_{\text{H}_2\text{O}} = 760 - 707 = 53\text{ mm Hg}$$
  - Mass ratio relation:
    $$\frac{w_{\text{organic}}}{w_{\text{H}_2\text{O}}} = \frac{p_{\text{organic}} \times M_{\text{organic}}}{p_{\text{H}_2\text{O}} \times M_{\text{H}_2\text{O}}}$$
  - Substituting known values ($M_{\text{H}_2\text{O}} = 18\text{ g/mol}$):
    $$\frac{1}{4} = \frac{53 \times M_{\text{organic}}}{707 \times 18} = \frac{53 M_{\text{organic}}}{12726}$$
    $$M_{\text{organic}} = \frac{12726}{4 \times 53} = \frac{12726}{212} = \mathbf{60.03\text{ g/mol}}$$
