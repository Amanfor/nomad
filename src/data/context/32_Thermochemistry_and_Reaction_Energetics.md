# Chemistry Revision Context: Chapter 32 — Thermochemistry and Reaction Energetics

---


### 1.1 Heat of Reaction: Constant Pressure vs. Constant Volume
- **Heat of Reaction (Enthalpy of Reaction, $\Delta H_r$):** The quantity of heat evolved or absorbed when molar quantities of reactants as indicated by the balanced chemical equation react completely to form products.
  - Expressed in $\text{kJ/mol}$ or $\text{kcal/mol}$, where "per mole" denotes **per mole of stoichiometric reaction extent**.
- **Constant Pressure vs. Constant Volume Calorimetry:**
  - **At Constant Pressure ($P = \text{constant}$):**
    $$q_p = \Delta H_r$$
    Measured directly in a constant-pressure cup calorimeter (open system / atmospheric pressure).
  - **At Constant Volume ($V = \text{constant}, dV = 0, w = 0$):**
    $$q_v = \Delta U_r$$
    Measured in a rigid, thick-walled steel **Bomb Calorimeter** immersed in a known mass of water.
- **Bomb Calorimeter Equation:**
  The heat released by the combustion of a fuel sample raises the temperature of the water bath and the calorimeter assembly:
  $$q_v = \Delta U = (m_{\text{water}} + W.E.) \cdot s_{\text{water}} \cdot \Delta T$$
  where $m_{\text{water}}$ is the mass of water, $W.E.$ is the **water equivalent** of the calorimeter calorimeter components, $s_{\text{water}}$ is the specific heat capacity of water ($4.184\text{ J/(g}\cdot\text{K)}$ or $1\text{ cal/(g}\cdot\text{K)}$), and $\Delta T = T_2 - T_1$.

### 1.2 Interconversion Formula: $\Delta H_r$ and $\Delta U_r$
From the thermodynamic definition of enthalpy ($H = U + PV$) applied to ideal gas reaction components:
$$\Delta H_r = \Delta U_r + \Delta(PV) = \Delta U_r + \Delta(n_g R T)$$
At constant absolute temperature $T$:
$$\mathbf{\Delta H_r = \Delta U_r + \Delta n_g R T}$$
where:
$$\Delta n_g = \sum n_{g, \text{products}} - \sum n_{g, \text{reactants}}$$
- **Diagnostic Sign Rules:**
  - If $\Delta n_g = 0 \implies \Delta H_r = \Delta U_r$ (e.g., $\text{H}_2(g) + \text{I}_2(g) \to 2\text{HI}(g)$).
  - If $\Delta n_g > 0 \implies \Delta H_r > \Delta U_r$ (System expands against atmosphere, doing work on surroundings).
  - If $\Delta n_g < 0 \implies \Delta H_r < \Delta U_r$ (Atmosphere performs compression work on system).

### 1.3 Exothermic vs. Endothermic Classifications
- **Exothermic Reaction:** Heat is released to surroundings ($\Delta H_r < 0, q_p < 0$).
  $$\text{Reactants} \to \text{Products} + \text{Heat} \implies H_{\text{products}} < H_{\text{reactants}}$$
- **Endothermic Reaction:** Heat is absorbed from surroundings ($\Delta H_r > 0, q_p > 0$).
  $$\text{Reactants} + \text{Heat} \to \text{Products} \implies H_{\text{products}} > H_{\text{reactants}}$$

---


### 2.1 Factors Determining $\Delta H_r$
1. **Physical State of Reactants and Products:**
   The enthalpy of a reaction varies substantially depending on whether species are in solid, liquid, or gas phase due to latent heats:
   $$\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{H}_2\text{O}(l) \quad \Delta H_1 = -285.8\text{ kJ/mol}$$
   $$\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{H}_2\text{O}(g) \quad \Delta H_2 = -241.8\text{ kJ/mol}$$
   $$\Delta H_1 - \Delta H_2 = -\Delta H_{\text{vap}}(\text{H}_2\text{O}) = -44.0\text{ kJ/mol}$$
2. **Allotropic Form of Elements:**
   Different crystalline or molecular allotropes have different intrinsic enthalpies:
   $$\text{C}(\text{graphite}) + \text{O}_2(g) \to \text{CO}_2(g) \quad \Delta H = -393.5\text{ kJ/mol}$$
   $$\text{C}(\text{diamond}) + \text{O}_2(g) \to \text{CO}_2(g) \quad \Delta H = -395.4\text{ kJ/mol}$$
   $$\text{C}(\text{graphite}) \to \text{C}(\text{diamond}) \quad \Delta H_{\text{trans}} = +1.9\text{ kJ/mol} \quad (\text{Endothermic})$$
3. **Stoichiometric Multipliers:**
   Multiplying a balanced equation by an integer or fraction scales $\Delta H_r$ proportionally by that same factor.

### 2.2 Temperature Dependence: Kirchhoff's Law
If the molar heat capacities at constant pressure of reactants and products are known, the variation of reaction enthalpy with temperature is governed by **Kirchhoff's Equation**:
$$\left(\frac{\partial \Delta H_r}{\partial T}\right)_P = \Delta C_p$$
Integrating between temperatures $T_1$ and $T_2$:
$$\mathbf{\Delta H_{T_2} - \Delta H_{T_1} = \int_{T_1}^{T_2} \Delta C_p\,dT = \Delta C_p(T_2 - T_1)}$$
where:
$$\Delta C_p = \sum \nu_{\text{products}} C_{p, \text{products}} - \sum \nu_{\text{reactants}} C_{p, \text{reactants}}$$
Similarly, at constant volume:
$$\mathbf{\Delta U_{T_2} - \Delta U_{T_1} = \int_{T_1}^{T_2} \Delta C_v\,dT = \Delta C_v(T_2 - T_1)}$$

---


### 3.1 Definition & IUPAC Reference States
- **Standard Enthalpy of Formation ($\Delta H_f^\circ$):** The enthalpy change accompanying the formation of **exactly 1 mole of a pure substance** from its constituent chemical elements in their standard reference physical states at $1\text{ bar}$ pressure and specified temperature ($298.15\text{ K} = 25^\circ\text{C}$).
- **Standard State Zero-Convention:**
  By thermodynamic convention, the standard enthalpy of formation of all pure elements in their **most stable, naturally occurring allotropic form at $25^\circ\text{C}$ and $1\text{ bar}$** is assigned a value of **zero**:
  $$\mathbf{\Delta H_f^\circ(\text{Element in standard state}) \equiv 0}$$

| Element | IUPAC Standard Reference State ($\Delta H_f^\circ = 0$) | Non-Standard Allotropes / Phases ($\Delta H_f^\circ \ne 0$) |
| :--- | :--- | :--- |
| **Carbon** | $\text{C}(\text{graphite})$ | $\text{C}(\text{diamond}) = +1.9\text{ kJ/mol}$, Fullerene $\text{C}_{60} = +38.1\text{ kJ/mol}$ |
| **Sulfur** | $\text{S}_{\alpha}(\text{rhombic sulfur})$ | $\text{S}_{\beta}(\text{monoclinic sulfur}) = +0.33\text{ kJ/mol}$ |
| **Phosphorus** | $\mathbf{P}_4(\text{white phosphorus}) \equiv 0$ | $\text{P}(\text{red}) = -17.6\text{ kJ/mol}$, $\text{P}(\text{black}) = -39.3\text{ kJ/mol}$ |
| **Oxygen** | $\text{O}_2(g)$ | $\text{O}_3(g, \text{ozone}) = +142.7\text{ kJ/mol}$, $\text{O}(g) = +249.2\text{ kJ/mol}$ |
| **Bromine** | $\text{Br}_2(l)$ | $\text{Br}_2(g) = +30.9\text{ kJ/mol}$ |
| **Iodine** | $\text{I}_2(s)$ | $\text{I}_2(g) = +62.4\text{ kJ/mol}$ |
| **Hydrogen** | $\text{H}_2(g)$ | $\text{H}(g) = +218.0\text{ kJ/mol}$ |
| **Aqueous Ion** | $\text{H}^+(aq) \equiv 0$ | Standard aqueous reference baseline |

- *The White Phosphorus Convention Trap:* Although black phosphorus is thermodynamically the most stable allotrope of phosphorus, **white phosphorus ($P_4$, white)** was chosen as the arbitrary reference standard ($\Delta H_f^\circ = 0$) because it is readily reproducible in pure form. Consequently, red and black phosphorus have **negative** $\Delta H_f^\circ$ values!

### 3.2 Calculation of Reaction Enthalpy via Enthalpies of Formation
For any general chemical reaction $a\text{A} + b\text{B} \to c\text{C} + d\text{D}$:
$$\mathbf{\Delta H_r^\circ = \sum \nu_{\text{products}} \Delta H_f^\circ(\text{products}) - \sum \nu_{\text{reactants}} \Delta H_f^\circ(\text{reactants})}$$
$$\Delta H_r^\circ = [c\Delta H_f^\circ(\text{C}) + d\Delta H_f^\circ(\text{D})] - [a\Delta H_f^\circ(\text{A}) + b\Delta H_f^\circ(\text{B})]$$

---


### 4.1 Definition & Complete Oxidation Standards
- **Standard Enthalpy of Combustion ($\Delta H_c^\circ$):** The enthalpy change when **1 mole of a substance** undergoes complete oxidation in excess dioxygen gas ($O_2(g)$) at standard conditions ($1\text{ bar}, 298.15\text{ K}$).
  - Combustion is **strictly exothermic** for all common fuels: $\Delta H_c^\circ < 0$.
- **Standard Oxidation End-Products:**
  - Carbon $\to \text{CO}_2(g)$ (Never $\text{CO}$)
  - Hydrogen $\to \text{H}_2\text{O}(l)$ (Condenses to liquid water at standard $298\text{ K}$)
  - Sulfur $\to \text{SO}_2(g)$
  - Nitrogen $\to \text{N}_2(g)$ (Elemental nitrogen is released; does not oxidize under standard flame conditions)

### 4.2 Calculation of Reaction Enthalpy via Enthalpies of Combustion
Because the combustion products of reactants and products are identical when atom counts match:
$$\mathbf{\Delta H_r^\circ = \sum \nu_{\text{reactants}} \Delta H_c^\circ(\text{reactants}) - \sum \nu_{\text{products}} \Delta H_c^\circ(\text{products})}$$
*Caution:* Notice the inversion of order compared to formation enthalpies: $(\text{Reactants} - \text{Products})$ for combustion, vs $(\text{Products} - \text{Reactants})$ for formation!

### 4.3 Calorific Value (C.V.) of Fuels
- **Calorific Value:** The quantity of heat liberated by the complete combustion of **unit mass (1 gram)** of a fuel:
  $$\mathbf{\text{Calorific Value (C.V.)} = \frac{|\Delta H_c|}{\text{Molar Mass of Fuel}} \quad [\text{kJ/g or kcal/g}]}$$
- **Fuel Efficiency Rankings:**
  - Dihydrogen gas ($\text{H}_2$) possesses the **highest calorific value** of all chemical fuels ($\approx 142\text{ kJ/g}$).
  - Among hydrocarbons, calorific value increases as the **hydrogen-to-carbon ($H/C$) mass ratio increases**:
    $$\text{Methane (CH}_4, \text{C.V.} \approx 55\text{ kJ/g}) > \text{Ethane (C}_2\text{H}_6) > \text{Propane (C}_3\text{H}_8) > \text{Ethylene (C}_2\text{H}_4) > \text{Acetylene (C}_2\text{H}_2)$$

---


### 5.1 Principle of Path Independence
- **Hess's Law:** If a chemical reaction can be carried out in a single step or in a sequence of several intermediate stages, the **total enthalpy change is identical**, regardless of the intermediate pathway taken.
  $$\mathbf{\Delta H_{\text{total}} = \Delta H_1 + \Delta H_2 + \Delta H_3 + \dots}$$
- This is a direct consequence of the First Law of Thermodynamics and the fact that enthalpy $H$ is a **state function** ($\oint dH = 0$).

---

### 5.2 Visual Preservation: Hess's Law & Reaction Coordinates

![Hess's Law and Reaction Coordinate Enthalpies](/media/hess_law_and_reaction_coordinate_enthalpies.webp)
*Description: Two-panel thermochemical mechanism graphic: (A) Hess's Law additivity diagram contrasting a direct reaction pathway $\mathrm{A}+\mathrm{B} \to \mathrm{P}+\mathrm{Q}$ ($\Delta H_{\mathrm{direct}}$) against an indirect multi-step route via intermediates $\mathrm{X}$ and $\mathrm{Y}$ ($\Delta H_1 + \Delta H_2 + \Delta H_3$), verified with the oxidation of carbon to carbon dioxide; (B) Enthalpy reaction coordinate profiles for exothermic vs endothermic transformations displaying activation energy barriers and the enthalpy difference $\Delta H = E_{a,f} - E_{a,b}$.*

---


### 6.1 Bond Dissociation Energy (BDE) vs. Average Bond Energy
- **Bond Dissociation Enthalpy (BDE):** The energy required to break **1 mole of a specific bond** in an isolated gaseous molecule into gaseous radical fragments.
  - For homonuclear diatomic molecules (e.g., $\text{H}_2, \text{Cl}_2$), $\text{BDE} = \Delta H_{\text{atom}}$.
- **Average Bond Enthalpy ($\bar{\epsilon}_{A-B}$):** For polyatomic molecules where successive bond breaking energies vary, the average bond enthalpy is the mean energy required to dissociate each bond in 1 mole of gaseous molecules:
  $$\text{CH}_4(g) \to \text{C}(g) + 4\text{H}(g) \quad \Delta H_{\text{atom}} = +1665\text{ kJ/mol}$$
  $$\text{Average C-H Bond Energy} = \frac{1665}{4} = 416.25\text{ kJ/mol}$$

### 6.2 Reaction Enthalpy via Bond Energies
$$\mathbf{\Delta H_r = \sum (\text{Bond Energies})_{\text{reactants}} - \sum (\text{Bond Energies})_{\text{products}}}$$
- **Rigorous Phase Constraint (JEE Trap Alert):**
  This formula is valid **strictly when all reactants and products are in the gaseous state**. If any participant is in a solid or liquid phase, the phase change enthalpy (sublimation $\Delta H_{\text{sub}}$ or vaporization $\Delta H_{\text{vap}}$) must be incorporated via a thermodynamic cycle:
  $$\Delta H_r = \Delta H_{\text{phase changes}} + \sum \text{BE}(\text{reactants}) - \sum \text{BE}(\text{products})$$

---


### 7.1 Lattice Enthalpy Definition
- **Lattice Enthalpy ($\Delta H_{\text{lattice}}$):** The enthalpy change accompanying the complete separation of **1 mole of an ionic crystalline solid** into its constituent isolated gaseous ions:
  $$\text{MX}(s) \to \text{M}^+(g) + \text{X}^-(g) \quad \Delta H_{\text{lattice}} > 0 \quad (\text{Endothermic})$$
- Conversely, lattice formation enthalpy (condensation of ions into crystal) is exothermic ($-\Delta H_{\text{lattice}} < 0$).

---

### 7.2 Visual Preservation: Born-Haber Cycle

![Born-Haber Cycle for NaCl](/media/born_haber_cycle_nacl_thermodynamic_steps.webp)
*Description: Two-panel ionic energetic architecture: (A) Stepwise energy level diagram of the Born-Haber cycle for crystalline $\mathrm{NaCl}(s)$, tracking sublimation of $\mathrm{Na}(s)$, first ionization potential, chlorine molecular bond dissociation, chlorine electron gain enthalpy, and crystal lattice condensation; (B) Analytic formulations for 1:1 salts ($MX$) and divalent alkaline-earth halides ($\mathrm{CaCl}_2$), detailing stoichiometric multipliers and electrostatic charge-product scaling.*

---

### 7.3 Born-Haber Thermodynamic Closure Equations
4. **Monovalent 1:1 Salt ($\text{NaCl}(s)$):**
   $$\mathbf{\Delta H_f^\circ(\text{NaCl}) = \Delta H_{\text{sub}}(\text{Na}) + \text{IE}_1(\text{Na}) + \frac{1}{2}\Delta H_{\text{diss}}(\text{Cl}_2) + \Delta H_{\text{eg}}(\text{Cl}) - \Delta H_{\text{lattice}}(\text{NaCl})}$$
   - Numerical Validation:
     $$-411 = +108 + 496 + 122 + (-349) - \Delta H_{\text{lattice}}$$
     $$-411 = 377 - \Delta H_{\text{lattice}} \implies \mathbf{\Delta H_{\text{lattice}} = 788\text{ kJ/mol}}$$
5. **Divalent Salt ($\text{CaCl}_2(s)$):**
   $$\mathbf{\Delta H_f^\circ(\text{CaCl}_2) = \Delta H_{\text{sub}}(\text{Ca}) + [\text{IE}_1 + \text{IE}_2] + \Delta H_{\text{diss}}(\text{Cl}_2) + 2\Delta H_{\text{eg}}(\text{Cl}) - \Delta H_{\text{lattice}}(\text{CaCl}_2)}$$

---


### 8.1 Enthalpy of Hydration & Enthalpy of Solution
- **Enthalpy of Hydration ($\Delta H_{\text{hyd}}$):** The enthalpy change when 1 mole of isolated gaseous ions interacts with excess water molecules to form hydrated ions:
  $$\text{M}^+(g) + \text{excess H}_2\text{O}(l) \to \text{M}^+(aq) \quad (\Delta H_{\text{hyd}} < 0, \text{Always Exothermic})$$
  - Magnitude scales with ionic charge density:
    $$|\Delta H_{\text{hyd}}| \propto \frac{|z|}{r_{\text{ion}}}$$
- **Enthalpy of Solution ($\Delta H_{\text{sol}}$):** The enthalpy change when 1 mole of an ionic crystalline solute is dissolved in excess solvent:
  $$\mathbf{\Delta H_{\text{solution}} = \Delta H_{\text{lattice}} + \Delta H_{\text{hydration}}}$$
  - If $|\Delta H_{\text{hyd}}| > \Delta H_{\text{lattice}} \implies \Delta H_{\text{sol}} < 0$ (**Exothermic dissolution**, solution warms up; e.g., $\text{CaCl}_2, \text{NaOH}, \text{KOH}$).
  - If $\Delta H_{\text{lattice}} > |\Delta H_{\text{hyd}}| \implies \Delta H_{\text{sol}} > 0$ (**Endothermic dissolution**, solution cools down; e.g., $\text{NaCl}, \text{NH}_4\text{Cl}, \text{KNO}_3$).

---

### 8.2 Visual Preservation: Solution Energetics & Neutralization Spectrum

![Solution Energetics and Neutralization Enthalpies](/media/solution_energetics_and_neutralization_enthalpies.webp)
*Description: Two-panel solution thermodynamics graphic: (A) Thermodynamic cycle linking crystal lattice dissociation ($+\Delta H_{\mathrm{lattice}}$), gaseous ion hydration ($-\Delta H_{\mathrm{hyd}}$), and net solution enthalpy ($\Delta H_{\mathrm{sol}}$); (B) Neutralization enthalpy bar spectrum comparing strong acid-strong base baseline ($-57.3\text{ kJ/g.eq}$), weak acid dissociation deficits ($\Delta H_{\mathrm{ion}}$), and the anomalous exothermic enhancement of hydrofluoric acid ($HF$, $-68.6\text{ kJ/g.eq}$).*

---

### 8.3 Enthalpy of Neutralization ($\Delta H_{\text{neut}}$)
- **Definition:** The enthalpy change when **1 gram-equivalent of an acid** is completely neutralized by **1 gram-equivalent of a base** in dilute aqueous solution.
- **Strong Acid (SA) + Strong Base (SB):**
  Because both strong acids and strong bases are completely ionized in dilute aqueous solutions, the net chemical transformation is universally the condensation of hydronium and hydroxide ions into liquid water:
  $$\text{H}^+(aq) + \text{OH}^-(aq) \to \text{H}_2\text{O}(l) \quad \mathbf{\Delta H_{\text{neut}} = -57.3\text{ kJ/g.eq} = -13.7\text{ kcal/g.eq}}$$
- **Weak Acid or Weak Base Neutralization:**
  Weak electrolytes are not completely ionized in solution. A fraction of the neutralization energy is consumed in ionizing the undissociated molecules:
  $$\mathbf{\Delta H_{\text{neut}} = -57.3\text{ kJ/g.eq} + \Delta H_{\text{ionization}}}$$
  Since $\Delta H_{\text{ionization}} > 0$ (endothermic dissociation), the net heat liberated is **strictly less than $57.3\text{ kJ/g.eq}$**:
  $$|\Delta H_{\text{neut}}| < 57.3\text{ kJ/g.eq}$$
  - *Example:* Neutralization of acetic acid with $\text{NaOH}$:
    $$\Delta H_{\text{neut}} = -55.2\text{ kJ/g.eq} \implies \Delta H_{\text{ion}}(\text{CH}_3\text{COOH}) = -55.2 - (-57.3) = +2.1\text{ kJ/mol}$$
- **The Hydrofluoric Acid ($HF$) Neutralization Anomaly:**
  When weak acid $HF(aq)$ is neutralized by a strong base ($\text{NaOH}$), the observed enthalpy of neutralization is anomalously **more exothermic than the strong acid baseline**:
  $$\mathbf{\Delta H_{\text{neut}}(HF + NaOH) = -68.6\text{ kJ/g.eq} = -16.4\text{ kcal/g.eq}}$$
  - *Explanation:* The fluoride ion ($F^-$) has an exceptionally small ionic radius and extremely high charge density, giving it an abnormally high hydration enthalpy ($-\Delta H_{\text{hyd}}$) upon generation. The massive heat liberated by $F^-$ hydration far exceeds the energy required to ionize $HF$, resulting in a net excess heat release.

---


### 9.1 Conceptual Definition
- **Resonance Energy:** The extra thermodynamic stabilization gained by a planar conjugated molecule due to the delocalization of $\pi$-electrons, quantified as the difference between the enthalpy of the actual resonance hybrid and the calculated enthalpy of the most stable theoretical canonical structure:
  $$\mathbf{\text{Resonance Energy} = \Delta H_f^\circ(\text{Actual Hybrid}) - \Delta H_f^\circ(\text{Most Stable Canonical Structure}) < 0}$$

### 9.2 Determination via Enthalpy of Hydrogenation
- Using cyclohexene as an isolated double bond reference:
  $$\text{Cyclohexene} + \text{H}_2 \to \text{Cyclohexane} \quad \Delta H_{\text{hydrog}} = -119.5\text{ kJ/mol}$$
- For a hypothetical 1,3,5-cyclohexatriene (Kekulé benzene with 3 non-interacting double bonds):
  $$\Delta H_{\text{hydrog, calculated}} = 3 \times (-119.5\text{ kJ/mol}) = -358.5\text{ kJ/mol}$$
- Experimental enthalpy of hydrogenation of benzene:
  $$\text{Benzene} + 3\text{H}_2 \to \text{Cyclohexane} \quad \Delta H_{\text{hydrog, experimental}} = -208.5\text{ kJ/mol}$$
- **Resonance Energy Calculation:**
  $$\mathbf{\text{Resonance Energy} = -208.5 - (-358.5) = +150.0\text{ kJ/mol}}$$
  Benzene is **$150.0\text{ kJ/mol}$ ($36.0\text{ kcal/mol}$) more stable** than the hypothetical non-resonating cyclohexatriene model.

---


### Archetype 1: Bomb Calorimeter $\Delta U$ to $\Delta H$ Calculation
- **Problem:** Combustion of $0.16\text{ g}$ of methane ($\text{CH}_4$) in a bomb calorimeter produces a temperature rise of $0.5^\circ\text{C}$. The total heat capacity of the calorimeter and water is $17.7\text{ kJ/K}$. Calculate $\Delta U_c^\circ$ and $\Delta H_c^\circ$ per mole of methane at $298\text{ K}$ ($R = 8.314\text{ J/(mol}\cdot\text{K)}$).
- **Solution:**
  - Heat evolved in calorimeter:
    $$q_{\text{cal}} = C_{\text{total}} \Delta T = 17.7\text{ kJ/K} \times 0.5\text{ K} = 8.85\text{ kJ}$$
  - Heat of reaction at constant volume ($q_v$):
    $$q_v = -8.85\text{ kJ}$$
  - Moles of $\text{CH}_4$ burned:
    $$n = \frac{0.16\text{ g}}{16\text{ g/mol}} = 0.01\text{ mol}$$
  - Molar internal energy of combustion:
    $$\Delta U_c^\circ = \frac{-8.85\text{ kJ}}{0.01\text{ mol}} = -885\text{ kJ/mol}$$
  - Balanced equation:
    $$\text{CH}_4(g) + 2\text{O}_2(g) \to \text{CO}_2(g) + 2\text{H}_2\text{O}(l)$$
    $$\Delta n_g = 1 - (1 + 2) = -2$$
  - Enthalpy of combustion:
    $$\Delta H_c^\circ = \Delta U_c^\circ + \Delta n_g R T = -885\text{ kJ} + (-2)(8.314 \times 10^{-3}\text{ kJ/(mol}\cdot\text{K)})(298\text{ K})$$
    $$\Delta H_c^\circ = -885 - 4.955 = -889.96\text{ kJ/mol} \approx -890\text{ kJ/mol}$$

### Archetype 2: Bond Energy Calculation Involving Phase Transitions
- **Problem:** Calculate the average $\text{P-Cl}$ bond energy in $\text{PCl}_5(g)$ given:
  - $\Delta H_f^\circ(\text{PCl}_5(g)) = -375\text{ kJ/mol}$
  - Enthalpy of atomization of phosphorus: $\text{P}(s) \to \text{P}(g)$, $\Delta H_{\text{atom}} = +315\text{ kJ/mol}$
  - Bond dissociation energy of chlorine: $\text{Cl}_2(g) \to 2\text{Cl}(g)$, $\text{BDE} = +244\text{ kJ/mol}$ ($\frac{1}{2}\text{BDE} = 122\text{ kJ/mol}$)
- **Solution:**
  - Formation reaction:
    $$\text{P}(s) + \frac{5}{2}\text{Cl}_2(g) \to \text{PCl}_5(g) \quad \Delta H_f^\circ = -375\text{ kJ/mol}$$
  - Thermochemical cycle via gaseous atoms:
    $$\Delta H_f^\circ = \Delta H_{\text{atom}}(\text{P}) + \frac{5}{2}\text{BDE}(\text{Cl}_2) - 5\bar{\epsilon}_{\text{P-Cl}}$$
  - Substitute numerical parameters:
    $$-375 = 315 + 5(122) - 5\bar{\epsilon}_{\text{P-Cl}}$$
    $$-375 = 315 + 610 - 5\bar{\epsilon}_{\text{P-Cl}} = 925 - 5\bar{\epsilon}_{\text{P-Cl}}$$
    $$5\bar{\epsilon}_{\text{P-Cl}} = 925 + 375 = 1300\text{ kJ/mol}$$
    $$\mathbf{\bar{\epsilon}_{\text{P-Cl}} = \frac{1300}{5} = 260\text{ kJ/mol}}$$

### Archetype 3: Multi-Acid Neutralization & Ionization Energy Extraction
- **Problem:** Enthalpy of neutralization of $\text{H}_3\text{PO}_4$ with excess $\text{KOH}$ is $-12.7\text{ kcal/g.eq}$. Find the enthalpy of ionization of $\text{H}_3\text{PO}_4$ in $\text{kcal/mol}$.
- **Solution:**
  - $\text{H}_3\text{PO}_4$ is a tribasic acid ($n$-factor $= 3$):
    $$1\text{ mole of } \text{H}_3\text{PO}_4 = 3\text{ gram-equivalents}$$
  - Neutralization per mole:
    $$\Delta H_{\text{neut}} = 3 \times (-12.7\text{ kcal}) = -38.1\text{ kcal/mol}$$
  - Complete neutralization requires 3 moles of $\text{OH}^-$ producing 3 moles of $\text{H}_2\text{O}$:
    $$\Delta H_{\text{neutralization}} = \Delta H_{\text{ion}}(\text{H}_3\text{PO}_4) + 3 \times (-13.7\text{ kcal/mol})$$
    $$-38.1 = \Delta H_{\text{ion}} - 41.1$$
    $$\mathbf{\Delta H_{\text{ion}}(\text{H}_3\text{PO}_4) = -38.1 + 41.1 = +3.0\text{ kcal/mol}}$$
