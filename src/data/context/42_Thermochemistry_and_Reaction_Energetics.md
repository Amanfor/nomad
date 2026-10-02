# Chemistry Revision Context: Chapter 42 — Thermochemistry & Reaction Energetics

---


### 1.1 State Functions vs. Path Functions in Reaction Energetics
- **State Functions:** Thermodynamic properties whose values depend solely on the current equilibrium state of the system, completely independent of the path taken:
  $$\text{Internal Energy } (U), \text{Enthalpy } (H), \text{Entropy } (S), \text{Gibbs Free Energy } (G), \text{Temperature } (T), \text{Pressure } (P), \text{Volume } (V)$$
  For any cyclic process: $\oint dH = 0$ and $\oint dU = 0$.
- **Path Functions:** Quantities that depend on the specific path or mechanism taken between the initial and final states:
  $$\text{Heat } (q) \quad \text{and} \quad \text{Work } (w)$$
- **The First Law of Thermodynamics:**
  $$\mathbf{\Delta U = q + w = q - P_{\text{ext}} \Delta V}$$
  *(IUPAC Sign Convention: Heat absorbed by system $q > 0$; Work done on system $w > 0$; Work done by system $w < 0$).*

---

### 1.2 Heat at Constant Volume ($q_v$) vs. Heat at Constant Pressure ($q_p$)
1. **At Constant Volume ($\Delta V = 0$):**
   No expansion work is done ($w = 0$):
   $$\mathbf{q_v = \Delta U}$$
   The heat exchanged at constant volume is equal to the change in internal energy of the system.
2. **At Constant Pressure ($P = \text{Constant}$):**
   $$q_p = \Delta U + P \Delta V = (U_2 - U_1) + P(V_2 - V_1) = (U_2 + P V_2) - (U_1 + P V_1) = H_2 - H_1$$
   $$\mathbf{q_p = \Delta H}$$
   The heat exchanged at constant pressure is equal to the change in enthalpy of the system.

---

### 1.3 The Exact Relationship Between $\Delta H$ and $\Delta U$
By definition of enthalpy:
$$H = U + P V \implies \Delta H = \Delta U + \Delta(P V)$$
For chemical reactions involving ideal gases at constant temperature $T$:
$$P V = n_g R T \implies \Delta(P V) = \Delta(n_g R T) = \Delta n_g R T$$
$$\mathbf{\Delta H = \Delta U + \Delta n_g R T}$$
where:
- $\Delta n_g$ is the **change in the number of moles of gaseous species only**:
  $$\mathbf{\Delta n_g = \sum n_{g, \text{products}} - \sum n_{g, \text{reactants}}}$$
  *(Crucial Rule: Solids and liquids have negligible molar volumes compared to gases; their stoichiometric coefficients are completely ignored in $\Delta n_g$!).*
- $R = 8.314\text{ J}/(\text{mol}\cdot\text{K}) = 8.314 \times 10^{-3}\text{ kJ}/(\text{mol}\cdot\text{K})$.
- $T$ is absolute temperature in Kelvin.

---

### 1.4 The Three Gas Mole Variation Regimes

| Regime | Condition | Physical Interpretation | Chemical Example |
| :---: | :---: | :--- | :--- |
| **Regime 1** | $\mathbf{\Delta n_g = 0}$ | $\mathbf{\Delta H = \Delta U} \implies q_p = q_v$No expansion work against the atmosphere ($w_{\text{exp}} = 0$). | $\text{H}_2(g) + \text{I}_2(g) \to 2\text{HI}(g)$$\text{C}(s) + \text{O}_2(g) \to \text{CO}_2(g)$ |
| **Regime 2** | $\mathbf{\Delta n_g > 0}$ | $\mathbf{\Delta H > \Delta U} \implies q_p > q_v$Gas expands against external pressure; system performs PV-work ($w < 0$). Part of added heat is used for expansion. | $\text{PCl}_5(g) \to \text{PCl}_3(g) + \text{Cl}_2(g) \ (\Delta n_g = +1)$$\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g) \ (\Delta n_g = +1)$ |
| **Regime 3** | $\mathbf{\Delta n_g < 0}$ | $\mathbf{\Delta H < \Delta U} \implies q_p < q_v$Gas contracts; surroundings perform work on system ($w > 0$). Compression aids the reaction. | $\text{N}_2(g) + 3\text{H}_2(g) \to 2\text{NH}_3(g) \ (\Delta n_g = -2)$$2\text{SO}_2(g) + \text{O}_2(g) \to 2\text{SO}_3(g) \ (\Delta n_g = -1)$ | $$

---

### 1.5 Potential Energy Reaction Profiles & Activation Energies

![First Law Enthalpy and Thermochemical State Cycles](/media/first_law_enthalpy_and_thermochemical_state_cycles.webp)
*Description: Two-panel foundational thermochemistry graphic: (A) First Law reaction energetics detailing the fundamental relation $\Delta H = \Delta U + \Delta n_g R T$ across the three gas mole variation regimes ($\Delta n_g = 0, \Delta n_g > 0, \Delta n_g < 0$), alongside comparative potential energy profiles for exothermic ($\Delta H < 0, E_{a,f} < E_{a,b}$) and endothermic ($\Delta H > 0, E_{a,f} > E_{a,b}$) reactions; (B) Hess's Law of Constant Heat Summation demonstrating cyclic path invariance ($\oint dH = 0$), algebraic rules for manipulating thermochemical equations, and standard state conventions defining $\Delta_f H^\circ = 0$ for graphite, rhombic sulfur, white phosphorus, and liquid bromine.*

- **Exothermic Reaction ($\Delta_r H < 0$):**
  - Enthalpy of products is lower than enthalpy of reactants: $H_{\text{products}} < H_{\text{reactants}}$.
  - Forward activation energy is smaller than backward activation energy:
    $$\mathbf{\Delta_r H = E_{a, \text{forward}} - E_{a, \text{backward}} < 0 \implies E_{a, \text{forward}} < E_{a, \text{backward}}}$$
- **Endothermic Reaction ($\Delta_r H > 0$):**
  - Enthalpy of products is higher than enthalpy of reactants: $H_{\text{products}} > H_{\text{reactants}}$.
  - Forward activation energy is greater than backward activation energy:
    $$\mathbf{\Delta_r H = E_{a, \text{forward}} - E_{a, \text{backward}} > 0 \implies E_{a, \text{forward}} > E_{a, \text{backward}}}$$

---


### 2.1 Standard State Conventions (IUPAC)
- Pressure: Standard pressure is strictly **$P^\circ = 1\text{ bar} = 10^5\text{ Pa} = 0.987\text{ atm}$**.
- Temperature: Usually $298.15\text{ K}$ ($25^\circ\text{C}$), but standard states can be defined at any specified temperature.
- Reference State: The most stable physical aggregation state and allotropic form of the pure element at $298.15\text{ K}$ and $1\text{ bar}$.

---

### 2.2 Standard Enthalpy of Formation Convention: $\Delta_f H^\circ = 0$
By universal thermodynamic convention, the standard enthalpy of formation ($\Delta_f H^\circ$) of an element in its most stable physical and allotropic reference state is defined as **EXACTLY ZERO**:

| Element | Reference State ($\Delta_f H^\circ = 0$) | Non-Standard Form ($\Delta_f H^\circ \ne 0$) |
| :---: | :---: | :---: |
| **Carbon** | **$\text{C}(\text{graphite}) = 0$** | $\text{C}(\text{diamond}) = +1.89\text{ kJ/mol}$$\text{C}(\text{fullerene}, \text{C}_{60}) = +38.1\text{ kJ/mol}$ |
| **Oxygen** | **$\text{O}_2(g) = 0$** | $\text{O}_3(g, \text{ozone}) = +142.7\text{ kJ/mol}$$\text{O}(g, \text{atomic}) = +249.2\text{ kJ/mol}$ |
| **Sulfur** | **$\text{S}_\alpha(\text{rhombic}) = 0$** | $\text{S}_\beta(\text{monoclinic}) = +0.33\text{ kJ/mol}$$\text{S}(g) = +278.8\text{ kJ/mol}$ |
| **Phosphorus** | **$\text{P}_4(\text{white}) = 0$** | $\text{P}(\text{red}) = -17.6\text{ kJ/mol}$$\text{P}(\text{black}) = -39.3\text{ kJ/mol}$ |
| **Halogens** | **$\text{F}_2(g) = 0, \text{Cl}_2(g) = 0$****$\text{Br}_2(l) = 0, \text{I}_2(s) = 0$** | $\text{Br}_2(g) = +30.9\text{ kJ/mol}$$\text{I}_2(g) = +62.4\text{ kJ/mol}$ |
| **Hydrogen** | **$\text{H}_2(g) = 0$** | $\text{H}(g) = +218.0\text{ kJ/mol}$ |
| **Metals** | **$\text{Fe}(s) = 0, \text{Cu}(s) = 0, \text{Na}(s) = 0$****$\text{Hg}(l) = 0$** | $\text{Hg}(g) = +61.4\text{ kJ/mol}$$\text{Na}(g) = +107.3\text{ kJ/mol}$ |

- **CRITICAL JEE TRAP:** Although red phosphorus and black phosphorus are thermodynamically more stable than white phosphorus, **white phosphorus ($\text{P}_4$, white) is chosen by IUPAC convention as the standard reference state ($\Delta_f H^\circ = 0$)** because it is easily reproducible and chemically well-characterized!

---

### 2.3 Definition of Standard Enthalpy of Formation ($\Delta_f H^\circ$)
The standard enthalpy of formation ($\Delta_f H^\circ$) is the enthalpy change accompanying the formation of **EXACTLY ONE MOLE** of a pure substance in its standard state from its constituent elements in their most stable reference states.
- **Valid Formation Equations:**
  - $\text{C}(\text{graphite}) + \text{O}_2(g) \to \text{CO}_2(g) \implies \Delta_r H^\circ = \Delta_f H^\circ(\text{CO}_2, g)$
  - $\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{H}_2\text{O}(l) \implies \Delta_r H^\circ = \Delta_f H^\circ(\text{H}_2\text{O}, l)$
  - $\text{C}(\text{graphite}) + 2\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{CH}_3\text{OH}(l) \implies \Delta_r H^\circ = \Delta_f H^\circ(\text{CH}_3\text{OH}, l)$
- **INVALID Formation Equations (High-Yield Traps):**
  - $\text{CaO}(s) + \text{CO}_2(g) \to \text{CaCO}_3(s) \implies \Delta_r H^\circ \ne \Delta_f H^\circ(\text{CaCO}_3)$ (Reactants are compounds, not elements!).
  - $\text{C}(\text{diamond}) + \text{O}_2(g) \to \text{CO}_2(g) \implies \Delta_r H^\circ \ne \Delta_f H^\circ(\text{CO}_2)$ (Diamond is not the reference allotrope!).
  - $\text{H}_2(g) + \text{Br}_2(g) \to 2\text{HBr}(g) \implies \Delta_r H^\circ \ne \Delta_f H^\circ(\text{HBr})$ (Produces 2 moles, and $\text{Br}_2(g)$ is not the standard state!).

---

### 2.4 Calculation of Reaction Enthalpy from Formation Enthalpies
For any general balanced chemical reaction:
$$a\text{A} + b\text{B} \to c\text{C} + d\text{D}$$
$$\mathbf{\Delta_r H^\circ = \sum \nu_p \Delta_f H^\circ(\text{products}) - \sum \nu_r \Delta_f H^\circ(\text{reactants})}$$
$$\mathbf{\Delta_r H^\circ = [ c \Delta_f H^\circ(\text{C}) + d \Delta_f H^\circ(\text{D}) ] - [ a \Delta_f H^\circ(\text{A}) + b \Delta_f H^\circ(\text{B}) ]}$$

---


### 3.1 Definition of Standard Enthalpy of Combustion
The standard enthalpy of combustion ($\Delta_c H^\circ$) is the enthalpy change accompanying the **complete oxidation of EXACTLY ONE MOLE** of a substance in excess pure oxygen gas at standard conditions:
$$\mathbf{\Delta_c H^\circ \text{ is ALWAYS NEGATIVE (Strictly Exothermic!)}}$$
- **Standard Complete Combustion Products:**
  - Carbon $\to \mathbf{\text{CO}_2(g)}$
  - Hydrogen $\to \mathbf{\text{H}_2\text{O}(l)}$ (Liquid water at $298\text{ K}$!)
  - Sulfur $\to \mathbf{\text{SO}_2(g)}$
  - Nitrogen $\to \mathbf{\text{N}_2(g)}$
- **Master Reaction Enthalpy from Combustion Enthalpies:**
  $$\mathbf{\Delta_r H^\circ = \sum \nu_r \Delta_c H^\circ(\text{reactants}) - \sum \nu_p \Delta_c H^\circ(\text{products})}$$
  *(Notice the crucial reversal: Reactants minus Products!).*

---

### 3.2 Bomb Calorimetry (Constant Volume Calorimeter)
A bomb calorimeter measures heat released during combustion at **strictly constant volume ($\Delta V = 0$)**:
- The heat absorbed by the calorimeter assembly (water + steel bomb) is:
  $$\mathbf{q_{\text{calorimeter}} = C_{\text{calorimeter}} \cdot \Delta T = (m_w c_w + W_{\text{bomb}}) \Delta T}$$
  where $C_{\text{calorimeter}}$ is the total heat capacity of the calorimeter and $\Delta T$ is the observed temperature rise.
- By energy conservation:
  $$q_{\text{reaction}} = -q_{\text{calorimeter}} = -C_{\text{calorimeter}} \cdot \Delta T$$
- Molar internal energy of combustion ($\Delta U_c$):
  $$\mathbf{\Delta U_c = \frac{q_{\text{reaction}}}{n} = -\frac{M}{w} (C_{\text{calorimeter}} \cdot \Delta T)}$$
  where $w$ is the mass of fuel burned and $M$ is its molar mass.
- Converting to Enthalpy of Combustion ($\Delta H_c$):
  $$\mathbf{\Delta H_c = \Delta U_c + \Delta n_g R T}$$

---


### 4.1 Principle & State Invariance
"The total enthalpy change for a chemical reaction is identical whether the reaction takes place in one single step or in a series of multiple intermediate steps."
- Mathematical basis: Enthalpy $H$ is a thermodynamic state function.
  $$\Delta H_{\text{total}} = \int_{\text{initial}}^{\text{final}} dH = H_{\text{final}} - H_{\text{initial}}$$
  $$\mathbf{\Delta H_{\text{direct}} = \Delta H_1 + \Delta H_2 + \Delta H_3 + \dots}$$

---

### 4.2 Application to Indirect Enthalpy Calculations
- If reaction (1) is reversed: $\Delta H_{(1)}' = -\Delta H_{(1)}$.
- If reaction (2) is multiplied by scalar $n$: $\Delta H_{(2)}' = n \cdot \Delta H_{(2)}$.
- If reactions are summed: $\Delta H_{\text{net}} = \sum \Delta H_i$.

---


### 5.1 Bond Dissociation Energy ($BDE$) vs. Mean Bond Enthalpy

![Bond Enthalpies, Resonance Energy, and Neutralization](/media/bond_enthalpies_resonance_energy_and_neutralization.webp)
*Description: Two-panel reaction energetics graphic: (A) Bond dissociation enthalpy thermodynamics showing the gaseous reaction formula $\Delta_r H^\circ = \sum BE(\text{reactants}) - \sum BE(\text{products})$, the essential phase-change cycle corrections ($\Delta_{\text{sub}} H^\circ, \Delta_{\text{vap}} H^\circ$) required when reactants or products are condensed phases, and the quantitative evaluation of benzene resonance stabilization energy ($-151\text{ kJ/mol}$); (B) Enthalpy of neutralization mechanics displaying the strong acid + strong base universal value ($-57.3\text{ kJ/eq}$), weak electrolyte endothermic ionization penalty $\Delta_{\text{ion}} H^\circ$, and the anomalous super-exothermic neutralization of hydrofluoric acid ($\text{HF} + \text{NaOH} \to -68.6\text{ kJ/eq}$) governed by the colossal hydration enthalpy of fluoride.*

3. **Bond Dissociation Energy ($BDE$):**
   The energy required to break **one mole of a specific bond** in a specific gaseous molecule to form gaseous free radicals (homolytic fission):
   $$\text{H}_2(g) \to 2\text{H}(g) \quad BDE(\text{H}-\text{H}) = +436\text{ kJ/mol}$$
   $$\text{Cl}_2(g) \to 2\text{Cl}(g) \quad BDE(\text{Cl}-\text{Cl}) = +242\text{ kJ/mol}$$
4. **Mean / Average Bond Enthalpy ($\epsilon_{\text{bond}}$):**
   In polyatomic molecules, successive bonds of the identical type have different dissociation energies due to changing electronic environments.
   - In Methane ($\text{CH}_4$):
     1. $\text{CH}_4(g) \to \text{CH}_3(g) + \text{H}(g) \quad \Delta H_1 = +435\text{ kJ/mol}$
     2. $\text{CH}_3(g) \to \text{CH}_2(g) + \text{H}(g) \quad \Delta H_2 = +444\text{ kJ/mol}$
     3. $\text{CH}_2(g) \to \text{CH}(g) + \text{H}(g) \quad \Delta H_3 = +444\text{ kJ/mol}$
     4. $\text{CH}(g) \to \text{C}(g) + \text{H}(g) \quad \Delta H_4 = +339\text{ kJ/mol}$
   - Total atomization energy: $\Delta_a H^\circ(\text{CH}_4) = 435 + 444 + 444 + 339 = 1662\text{ kJ/mol}$.
   - **Mean $\text{C}-\text{H}$ Bond Enthalpy:**
     $$\mathbf{\epsilon(\text{C}-\text{H}) = \frac{\Delta_a H^\circ(\text{CH}_4)}{4} = \frac{1662}{4} = 415.5\text{ kJ/mol}}$$

---

### 5.2 Calculation of Reaction Enthalpy from Bond Enthalpies
$$\mathbf{\Delta_r H^\circ = \sum BE(\text{bonds broken in reactants}) - \sum BE(\text{bonds formed in products})}$$
- **CRITICAL JEE PHASE RESTRICTION:**
  Bond enthalpies are defined **EXCLUSIVELY FOR GASEOUS MOLECULES AND ATOMS**!
  If any reactant or product is a solid or liquid, you **MUST** convert it to the gaseous state using latent heats of phase transition:
  - For a solid reactant: add $\Delta_{\text{sub}} H^\circ(\text{solid} \to \text{gas})$.
  - For a liquid product: subtract $\Delta_{\text{vap}} H^\circ(\text{liquid} \to \text{gas})$.

---

### 5.3 Quantitative Evaluation of Resonance Energy
Resonance energy is the extra thermodynamic stability possessed by a conjugated real molecule (resonance hybrid) compared to its hypothetical, localized classical Lewis canonical structure.
- **Formulation via Enthalpy of Formation:**
  $$\mathbf{\text{Resonance Energy} = \Delta_f H^\circ(\text{experimental, real hybrid}) - \Delta_f H^\circ(\text{calculated from bond energies})}$$
  *(Since experimental $\Delta_f H^\circ$ is more negative/stable, Resonance Energy is negative).*
- **Formulation via Enthalpy of Combustion:**
  $$\mathbf{\text{Resonance Energy} = \Delta_c H^\circ(\text{calculated canonical}) - \Delta_c H^\circ(\text{experimental real hybrid})}$$
- **Benchmark JEE Case: Benzene ($\text{C}_6\text{H}_6$):**
  - Calculated $\Delta_c H^\circ$ for localized 1,3,5-cyclohexatriene:
    $$\Delta_c H^\circ(\text{calc}) = -3418\text{ kJ/mol}$$
  - Experimental $\Delta_c H^\circ$ for actual liquid benzene:
    $$\Delta_c H^\circ(\text{exp}) = -3267\text{ kJ/mol}$$
  - Resonance Energy of Benzene:
    $$\mathbf{\text{Resonance Energy} = (-3418) - (-3267) = -151\text{ kJ/mol} \approx -36\text{ kcal/mol}}$$
    Benzene is $151\text{ kJ/mol}$ more stable than the hypothetical cyclohexatriene structure!

---


### 6.1 Strong Acid + Strong Base Neutralization
The enthalpy of neutralization is the enthalpy change accompanying the complete neutralization of **ONE GRAM EQUIVALENT** of an acid by **ONE GRAM EQUIVALENT** of a base in dilute aqueous solution:
$$\mathbf{\text{H}^+(aq) + \text{OH}^-(aq) \to \text{H}_2\text{O}(l) \quad \Delta_{\text{neut}} H^\circ = -57.3\text{ kJ/equivalent} = -13.7\text{ kcal/equivalent}}$$
- **Universal Invariance:** The enthalpy of neutralization for ANY strong acid ($\text{HCl}, \text{HNO}_3, \text{HClO}_4, \text{H}_2\text{SO}_4$) with ANY strong base ($\text{NaOH}, \text{KOH}, \text{Ba(OH)}_2$) is strictly **$-57.3\text{ kJ/eq}$**!
- Explanation: Strong acids and strong bases are $100\%$ dissociated in dilute aqueous solutions. The spectator ions ($\text{Na}^+, \text{Cl}^-, \text{K}^+, \text{NO}_3^-$) undergo zero chemical change. The net ionic reaction is universally the formation of water from hydrated protons and hydroxide ions.

---

### 6.2 Weak Acid or Weak Base Neutralization (Ionization Penalty)
When a weak acid (e.g., $\text{CH}_3\text{COOH}, \text{HCN}$) or weak base (e.g., $\text{NH}_4\text{OH}$) is neutralized by a strong base or acid:
$$|\Delta_{\text{neut}} H^\circ| < 57.3\text{ kJ/equivalent}$$
- **Explanation:** Weak electrolytes are only partially dissociated. A fraction of the heat released during $\text{H}^+ + \text{OH}^- \to \text{H}_2\text{O}$ ($-57.3\text{ kJ}$) must be consumed to ionize the remaining un-ionized weak acid/base endothermically:
  $$\mathbf{\Delta_{\text{neut}} H^\circ = -57.3 + \Delta_{\text{ion}} H^\circ}$$
  $$\mathbf{\Delta_{\text{ion}} H^\circ = \Delta_{\text{neut}} H^\circ - (-57.3) = \Delta_{\text{neut}} H^\circ + 57.3\text{ kJ/eq}}$$
- **Example Calculations:**
  - For $\text{CH}_3\text{COOH} + \text{NaOH}$:
    $\Delta_{\text{neut}} H^\circ = -55.4\text{ kJ/eq} \implies \Delta_{\text{ion}} H^\circ(\text{CH}_3\text{COOH}) = -55.4 - (-57.3) = \mathbf{+1.9\text{ kJ/eq}}$.
  - For $\text{HCN} + \text{NaOH}$:
    $\Delta_{\text{neut}} H^\circ = -12.1\text{ kJ/eq} \implies \Delta_{\text{ion}} H^\circ(\text{HCN}) = -12.1 - (-57.3) = \mathbf{+45.2\text{ kJ/eq}}$.

---

### 6.3 The Hydrofluoric Acid ($\text{HF}$) Anomaly: Super-Exothermic Neutralization
- **Observation:** Hydrofluoric acid ($\text{HF}$) is a weak acid ($K_a \approx 6.8 \times 10^{-4}$), yet its enthalpy of neutralization with strong base is:
  $$\mathbf{\Delta_{\text{neut}} H^\circ(\text{HF} + \text{NaOH}) \approx -68.6\text{ kJ/equivalent} \quad (\approx -16.4\text{ kcal/eq})}$$
  *(Significantly MORE EXOTHERMIC than the strong acid benchmark of $-57.3\text{ kJ/eq}$!).*
- **Detailed Chemical Mechanism:**
  1. The dissociation of $\text{HF}$ is endothermic ($\Delta_{\text{ion}} H^\circ > 0$).
  2. However, the produced fluoride anion ($\text{F}^-$) is exceptionally small and has an extremely high ionic charge density.
  3. When $\text{F}^-$ is released into aqueous solution, it forms an extraordinarily tight, highly ordered hydration shell with surrounding water molecules via strong ion-dipole attractions and hydrogen bonding:
     $$\text{F}^-(g) + aq \to \text{F}^-(aq) \quad \mathbf{\Delta_{\text{hyd}} H^\circ(\text{F}^-) \approx -515\text{ kJ/mol} \quad (\text{Colossally Exothermic!})}$$
  4. The colossal exothermic hydration energy released by $\text{F}^-$ overwhelmingly overcompensates for the small endothermic energy needed to ionize the $\text{H}-\text{F}$ bond, making the net enthalpy of neutralization exceed $-57.3\text{ kJ/eq}$!

---


### 7.1 Definition of Lattice Enthalpy ($\Delta_{\text{lattice}} H^\circ$)

![Born-Haber Cycle, Lattice Enthalpy, and Kirchhoff Laws](/media/born_haber_cycle_lattice_enthalpy_and_kirchhoff_laws.webp)
*Description: Two-panel crystal energetics and differential thermodynamics graphic: (A) The complete Born-Haber thermodynamic cycle for $\text{NaCl}(s)$ breaking down standard formation enthalpy into sublimation, ionization, molecular dissociation, electron affinity, and lattice enthalpy ($\Delta_{\text{lattice}} H^\circ$), alongside the solution enthalpy balance ($\Delta_{\text{sol}} H^\circ = \Delta_{\text{lattice}} H^\circ + \Delta_{\text{hyd}} H^\circ$); (B) Kirchhoff's laws detailing the temperature dependence of reaction enthalpy ($\Delta_r H_2 - \Delta_r H_1 = \Delta C_p^\circ (T_2 - T_1)$) and reaction entropy ($\Delta_r S_2 - \Delta_r S_1 = \Delta C_p^\circ \ln(T_2/T_1)$), showing how $\Delta C_p^\circ$ modulates Gibbs Free Energy and chemical equilibrium.*

Lattice enthalpy is the enthalpy change accompanying the complete separation of **one mole of an ionic crystalline solid** into its constituent gaseous ions at infinite distance:
$$\text{M}_x\text{X}_y(s) \to x\text{M}^{y+}(g) + y\text{X}^{x-}(g) \quad \mathbf{\Delta_{\text{lattice}} H^\circ > 0 \quad (\text{Strictly Endothermic})}$$
*(Note: If defined as the formation of the lattice from gaseous ions, it is strictly negative: $-\Delta_{\text{lattice}} H^\circ$).*

---

### 7.2 The Stepwise Born-Haber Cycle for Sodium Chloride ($\text{NaCl}$)
Direct Path:
$$\text{Na}(s) + \frac{1}{2}\text{Cl}_2(g) \to \text{NaCl}(s) \quad [\Delta_f H^\circ(\text{NaCl}, s)]$$
Stepwise Indirect Path:
5. Sublimation of solid sodium:
   $$\text{Na}(s) \to \text{Na}(g) \quad [+\Delta_{\text{sub}} H^\circ(\text{Na})]$$
6. First ionization of gaseous sodium:
   $$\text{Na}(g) \to \text{Na}^+(g) + e^- \quad [+\text{IE}_1(\text{Na})]$$
7. Homolytic dissociation of chlorine molecules:
   $$\frac{1}{2}\text{Cl}_2(g) \to \text{Cl}(g) \quad \left[+\frac{1}{2}\Delta_{\text{diss}} H^\circ(\text{Cl}_2)\right]$$
8. Electron gain by gaseous chlorine atoms:
   $$\text{Cl}(g) + e^- \to \text{Cl}^-(g) \quad [+\Delta_{\text{eg}} H^\circ(\text{Cl}) \ (\text{Exothermic, negative})]$$
9. Condensation of gaseous ions into solid crystal lattice:
   $$\text{Na}^+(g) + \text{Cl}^-(g) \to \text{NaCl}(s) \quad [-\Delta_{\text{lattice}} H^\circ(\text{NaCl})]$$

- **Master Cycle Formulation:**
  $$\mathbf{\Delta_f H^\circ(\text{NaCl}, s) = \Delta_{\text{sub}} H^\circ(\text{Na}) + \text{IE}_1(\text{Na}) + \frac{1}{2}\Delta_{\text{diss}} H^\circ(\text{Cl}_2) + \Delta_{\text{eg}} H^\circ(\text{Cl}) - \Delta_{\text{lattice}} H^\circ}$$
  $$\mathbf{\Delta_{\text{lattice}} H^\circ = \Delta_{\text{sub}} H^\circ(\text{Na}) + \text{IE}_1(\text{Na}) + \frac{1}{2}\Delta_{\text{diss}} H^\circ(\text{Cl}_2) + \Delta_{\text{eg}} H^\circ(\text{Cl}) - \Delta_f H^\circ(\text{NaCl}, s)}$$

---

### 7.3 Enthalpy of Solution & Hydration Balance
When an ionic crystal dissolves in water:
$$\mathbf{\Delta_{\text{sol}} H^\circ = \Delta_{\text{lattice}} H^\circ + \Delta_{\text{hyd}} H^\circ(\text{cation}) + \Delta_{\text{hyd}} H^\circ(\text{anion})}$$
where:
- $\Delta_{\text{lattice}} H^\circ > 0$ (energy required to break ionic bonds).
- $\Delta_{\text{hyd}} H^\circ < 0$ (energy released when water dipoles hydrate ions).
- **Solubility & Temperature Dependence (Le Chatelier's Principle):**
  - **If $|\Delta_{\text{hyd}} H^\circ| > \Delta_{\text{lattice}} H^\circ \implies \Delta_{\text{sol}} H^\circ < 0$ (Exothermic Dissolution):**
    Solubility **decreases** with increasing temperature (e.g., $\text{Ce}_2(\text{SO}_4)_3, \text{Li}_2\text{CO}_3, \text{NaOH}$).
  - **If $|\Delta_{\text{hyd}} H^\circ| < \Delta_{\text{lattice}} H^\circ \implies \Delta_{\text{sol}} H^\circ > 0$ (Endothermic Dissolution):**
    Solubility **increases** with increasing temperature (e.g., $\text{KNO}_3, \text{NH}_4\text{Cl}, \text{NaCl}$).

---


### 8.1 Enthalpy Temperature Dependence (Constant Pressure)
Kirchhoff's equation relates the change in reaction enthalpy with temperature to the change in heat capacities between products and reactants:
$$\mathbf{\left(\frac{\partial \Delta_r H^\circ}{\partial T}\right)_P = \Delta C_p^\circ}$$
Integrating between temperatures $T_1$ and $T_2$:
$$\mathbf{\Delta_r H_{T_2}^\circ = \Delta_r H_{T_1}^\circ + \int_{T_1}^{T_2} \Delta C_p^\circ dT}$$
If $\Delta C_p^\circ$ is temperature-independent over the interval:
$$\mathbf{\Delta_r H_{T_2}^\circ = \Delta_r H_{T_1}^\circ + \Delta C_p^\circ (T_2 - T_1)}$$
$$\mathbf{\frac{\Delta_r H_{T_2}^\circ - \Delta_r H_{T_1}^\circ}{T_2 - T_1} = \Delta C_p^\circ}$$
where:
$$\mathbf{\Delta C_p^\circ = \sum \nu_p C_{p, \text{products}}^\circ - \sum \nu_r C_{p, \text{reactants}}^\circ}$$

---

### 8.2 Internal Energy Temperature Dependence (Constant Volume)
$$\mathbf{\left(\frac{\partial \Delta_r U^\circ}{\partial T}\right)_V = \Delta C_v^\circ}$$
$$\mathbf{\Delta_r U_{T_2}^\circ = \Delta_r U_{T_1}^\circ + \Delta C_v^\circ (T_2 - T_1)}$$
$$\mathbf{\frac{\Delta_r U_{T_2}^\circ - \Delta_r U_{T_1}^\circ}{T_2 - T_1} = \Delta C_v^\circ}$$
where:
$$\mathbf{\Delta C_v^\circ = \sum \nu_p C_{v, \text{products}}^\circ - \sum \nu_r C_{v, \text{reactants}}^\circ}$$

---

### 8.3 Reaction Entropy & Gibbs Free Energy Temperature Dependence
10. **Entropy Variation:**
   $$\mathbf{\left(\frac{\partial \Delta_r S^\circ}{\partial T}\right)_P = \frac{\Delta C_p^\circ}{T} \implies \Delta_r S_{T_2}^\circ = \Delta_r S_{T_1}^\circ + \Delta C_p^\circ \ln\left(\frac{T_2}{T_1}\right)}$$
11. **Standard Gibbs Free Energy at Temperature $T$:**
   $$\mathbf{\Delta_r G^\circ(T) = \Delta_r H^\circ(T) - T \Delta_r S^\circ(T)}$$
   - If $\Delta C_p^\circ = 0$: $\Delta_r H^\circ$ and $\Delta_r S^\circ$ are completely independent of temperature!
   - If $\Delta C_p^\circ > 0$: $\Delta_r H^\circ$ becomes more positive (or less negative) as temperature rises.
   - If $\Delta C_p^\circ < 0$: $\Delta_r H^\circ$ becomes more negative (more exothermic) as temperature rises.

---


### 9.1 Master Thermochemistry Formula Sheet

| Thermodynamic Quantity | Fundamental Equation | High-Yield Application |
| :---: | :---: | :---: |
| **First Law Reaction Form** | $\Delta H = \Delta U + \Delta n_g R T$ | $\Delta n_g = \sum n_{g, \text{prod}} - \sum n_{g, \text{react}}$ (Gases only!) |
| **Reaction from Formation** | $\Delta_r H^\circ = \sum \nu_p \Delta_f H^\circ(\text{prod}) - \sum \nu_r \Delta_f H^\circ(\text{react})$ | $\Delta_f H^\circ = 0$ for stable reference allotropes |
| **Reaction from Combustion** | $\Delta_r H^\circ = \sum \nu_r \Delta_c H^\circ(\text{react}) - \sum \nu_p \Delta_c H^\circ(\text{prod})$ | Reactants minus Products! |
| **Reaction from Bond Energies** | $\Delta_r H^\circ = \sum BE(\text{reactants}) - \sum BE(\text{products})$ | Applicable ONLY to gaseous species |
| **Resonance Energy** | $\text{RE} = \Delta_f H^\circ(\text{exp}) - \Delta_f H^\circ(\text{calc}) = \Delta_c H^\circ(\text{calc}) - \Delta_c H^\circ(\text{exp})$ | Negative value denotes thermodynamic stabilization |
| **Strong Acid-Base Neutralization** | $\text{H}^+(aq) + \text{OH}^-(aq) \to \text{H}_2\text{O}(l)$ | $\Delta_{\text{neut}} H^\circ = -57.3\text{ kJ/eq} = -13.7\text{ kcal/eq}$ |
| **Weak Acid Ionization Heat** | $\Delta_{\text{ion}} H^\circ = \Delta_{\text{neut}} H^\circ - (-57.3)\text{ kJ/eq}$ | Endothermic heat absorbed to ionize weak bonds |
| **HF Neutralization Anomaly** | $\Delta_{\text{neut}} H^\circ(\text{HF} + \text{NaOH}) \approx -68.6\text{ kJ/eq}$ | Dominated by colossal $\text{F}^-$ hydration enthalpy |
| **Lattice Enthalpy (Born-Haber)** | $\Delta_{\text{lattice}} H = \Delta_{\text{sub}} H + \text{IE}_1 + \frac{1}{2}\Delta_{\text{diss}} H + \Delta_{\text{eg}} H - \Delta_f H$ | Cycle of ionic solid formation |
| **Solution Enthalpy Balance** | $\Delta_{\text{sol}} H^\circ = \Delta_{\text{lattice}} H^\circ + \Delta_{\text{hyd}} H^\circ(\text{ions})$ | Balance between lattice breaking and hydration |
| **Kirchhoff's Enthalpy Law** | $\Delta_r H_{T_2}^\circ = \Delta_r H_{T_1}^\circ + \Delta C_p^\circ (T_2 - T_1)$ | Temperature dependence at constant pressure |
| **Kirchhoff's Entropy Law** | $\Delta_r S_{T_2}^\circ = \Delta_r S_{T_1}^\circ + \Delta C_p^\circ \ln(T_2 / T_1)$ | Temperature dependence of reaction entropy |

---


#### Trap 1: Calculating $\Delta n_g$ with Condensed Phases
- In reactions involving solids or liquids (e.g., combustion of ethanol):
  $$\text{C}_2\text{H}_5\text{OH}(l) + 3\text{O}_2(g) \to 2\text{CO}_2(g) + 3\text{H}_2\text{O}(l)$$
  - Gaseous products: $2\text{ moles of }\text{CO}_2$.
  - Gaseous reactants: $3\text{ moles of }\text{O}_2$.
  - $\mathbf{\Delta n_g = 2 - 3 = -1}$!
  - **Fatal Error:** Counting liquid water or liquid ethanol in $\Delta n_g$. Solids and liquids must NEVER be counted in $\Delta n_g$!

#### Trap 2: Bond Enthalpy Calculations with Liquid Water
- For the combustion of hydrogen:
  $$\text{H}_2(g) + \frac{1}{2}\text{O}_2(g) \to \text{H}_2\text{O}(l)$$
- Bond energy formula gives the enthalpy of formation of **gaseous water ($\text{H}_2\text{O}, g$)**:
  $$\Delta_r H^\circ(\text{gas}) = [ BE(\text{H}-\text{H}) + \frac{1}{2}BE(\text{O}=\text{O}) ] - 2 BE(\text{O}-\text{H})$$
- To obtain the standard enthalpy of formation of **liquid water ($\text{H}_2\text{O}, l$)**, you **MUST subtract the enthalpy of vaporization of water ($\Delta_{\text{vap}} H^\circ \approx 44\text{ kJ/mol}$)**:
  $$\mathbf{\Delta_f H^\circ(\text{H}_2\text{O}, l) = \Delta_r H^\circ(\text{gas}) - \Delta_{\text{vap}} H^\circ(\text{H}_2\text{O})}$$

#### Trap 3: The Directionality of $\Delta_f H^\circ$ vs. $\Delta_c H^\circ$
- Formation Enthalpy: $\mathbf{\text{Products} - \text{Reactants}}$
  $$\Delta_r H^\circ = \sum \Delta_f H^\circ(\text{products}) - \sum \Delta_f H^\circ(\text{reactants})$$
- Combustion Enthalpy: $\mathbf{\text{Reactants} - \text{Products}}$
  $$\Delta_r H^\circ = \sum \Delta_c H^\circ(\text{reactants}) - \sum \Delta_c H^\circ(\text{products})$$
- Bond Enthalpy: $\mathbf{\text{Reactants} - \text{Products}}$
  $$\Delta_r H^\circ = \sum BE(\text{reactants}) - \sum BE(\text{products})$$

#### Trap 4: Sign of Electron Gain Enthalpy in Born-Haber Cycles
- Electron gain enthalpy of halogens is **exothermic ($\Delta_{\text{eg}} H^\circ < 0$)**.
- In the cycle equation:
  $$\Delta_f H^\circ = \Delta_{\text{sub}} H + \text{IE}_1 + \frac{1}{2}\Delta_{\text{diss}} H + \mathbf{\Delta_{\text{eg}} H} - \Delta_{\text{lattice}} H$$
  Ensure that $\Delta_{\text{eg}} H$ is added with its algebraic negative sign (e.g., $-349\text{ kJ/mol}$ for $\text{Cl}$), not subtracted!
