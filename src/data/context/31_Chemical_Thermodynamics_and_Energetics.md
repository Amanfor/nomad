# Chemistry Revision Context: Chapter 31 — Chemical Thermodynamics and Energetics

---


### 1.1 Thermodynamic Systems, Surroundings & Boundaries
- **Thermodynamic System:** The specified portion of the universe under experimental or theoretical investigation.
- **Surroundings:** The remainder of the universe outside the system boundary capable of exchanging energy or matter with the system.
- **Boundary:** The real or imaginary envelope separating system from surroundings:
  - **Diathermic (Conducting):** Permits heat exchange ($dQ \ne 0$).
  - **Adiabatic (Insulated):** Prevents heat exchange ($dQ = 0$).
  - **Rigid:** Prevents mechanical expansion/compression ($dV = 0, w_{PV} = 0$).
  - **Flexible / Movable:** Permits volume changes and $PV$ work ($dV \ne 0$).

| System Type | Matter Exchange | Energy Exchange | Physical Example |
| :--- | :--- | :--- | :--- |
| **Open System** | Yes | Yes | Open beaker containing evaporating liquid. |
| **Closed System** | No | Yes | Liquid in a sealed, conducting flask. |
| **Isolated System** | No | No | Substance in a sealed, perfectly insulated thermos flask (Universe itself). |

### 1.2 State Functions vs. Path Functions
- **State Functions:** Thermodynamic variables whose values depend strictly on the instantaneous equilibrium state of the system, completely independent of the path or mechanism taken to reach that state.
  - Examples: Pressure ($P$), Volume ($V$), Temperature ($T$), Internal Energy ($U$), Enthalpy ($H$), Entropy ($S$), Gibbs Free Energy ($G$), Helmholtz Free Energy ($A$).
  - **Cyclic Invariant:** The cyclic integral of any state function is identically zero:
    $$\oint dU = 0, \quad \oint dH = 0, \quad \oint dS = 0, \quad \oint dG = 0$$
- **Path Functions:** Thermodynamic quantities whose values depend explicitly on the specific trajectory or pathway connecting the initial and final states.
  - Examples: Heat ($q$), Work ($w$), Heat Capacity ($C$).
  - Differential forms $dq$ and $dw$ are inexact differentials; cyclic integrals are non-zero ($\oint dw \ne 0, \oint dq \ne 0$).

### 1.3 Intensive vs. Extensive Properties
- **Intensive Properties:** Bulk physical properties that are **independent of the quantity or mass of matter** present in the system.
  - Examples: Temperature ($T$), Pressure ($P$), Density ($\rho$), Molar Volume ($V_m$), Molar Heat Capacity ($C_m$), Viscosity ($\eta$), Surface Tension ($\gamma$), Refractive Index ($\mu$), Specific Heat ($s$), Electromotive Force ($E_{\text{cell}}$), Vapor Pressure ($P_{\text{vap}}$), $\text{pH}$.
- **Extensive Properties:** Properties whose values are **additive and proportional to the total mass or size of the system**.
  - Examples: Mass ($m$), Total Volume ($V$), Internal Energy ($U$), Enthalpy ($H$), Entropy ($S$), Gibbs Free Energy ($G$), Heat Capacity ($C$), Number of Moles ($n$), Electric Resistance ($R$).
- **Fundamental Rule:** The ratio of any two extensive properties yields an **intensive property**:
  $$\text{Density} = \frac{\text{Mass (Extensive)}}{\text{Volume (Extensive)}} \implies \text{Intensive}$$
  $$\text{Molar Enthalpy} = \frac{H}{n} \implies \text{Intensive}, \quad \text{Molarity} = \frac{n}{V} \implies \text{Intensive}$$

### 1.4 Reversible vs. Irreversible Processes

| Characteristic                 | Reversible (Quasistatic) Process                                                                           | Irreversible (Spontaneous) Process                                                                                                   |                    |                                                                             |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | ------------------ | --------------------------------------------------------------------------- |
| **Driving vs. Opposing Force** | Driving force exceeds opposing force by an infinitesimal amount: $P_{\text{ext}} = P_{\text{int}} \pm dP$. | Driving force differs substantially from opposing force: $P_{\text{ext}} \ll P_{\text{int}}$ or $P_{\text{ext}} \gg P_{\text{int}}$. |                    |                                                                             |
| **Duration & Steps**           | Takes infinite time; proceeds through infinite sequence of equilibrium states.                             | Takes finite time; completes in finite steps.                                                                                        |                    |                                                                             |
| **Equilibrium State**          | System and surroundings remain in thermodynamic equilibrium at every instant.                              | Equilibrium exists strictly at initial and final states; non-equilibrium intermediates.                                              |                    |                                                                             |
| **Work Output**                | Produces maximum possible mechanical work during expansion: $| w_{\text{rev}}                                                                                                                       | = w_{\text{max}}$. | Produces less work during expansion; requires more work during compression. |
| **Restorability**              | Reversing the path restores both system and surroundings to initial states without trace.                  | Reversing the path leaves an permanent dissipation footprint (entropy increase) in surroundings.                                     |                    |                                                                             |

---


### 2.1 Statement & Sign Conventions
- **First Law of Thermodynamics:** Energy can neither be created nor destroyed; the total energy of the universe remains constant:
  $$\mathbf{FLOT:}\quad \Delta U = q + w$$
  $$dU = dq + dw$$
- **IUPAC Sign Convention:**
  - Heat absorbed by the system from surroundings: $q > 0$ ($+ve$).
  - Heat released by the system to surroundings: $q < 0$ ($-ve$).
  - Work done ON the system (compression): $w > 0$ ($+ve$).
  - Work done BY the system (expansion): $w < 0$ ($-ve$).

### 2.2 Internal Energy ($U$) of an Ideal Gas
- For an ideal gas, intermolecular potential energy is identically zero ($U_{\text{pot}} \equiv 0$). Internal energy is purely kinetic and depends **strictly on temperature alone**:
  $$U = f(T) \implies \left(\frac{\partial U}{\partial V}\right)_T = 0 \quad (\text{Joule's Law})$$
- For any thermodynamic process (isothermal, isobaric, isochoric, adiabatic, reversible or irreversible) involving an ideal gas:
  $$\mathbf{Internal\ Energy\ Change:}\quad \Delta U = n C_v \Delta T = n C_v (T_2 - T_1)$$
- If temperature is constant (isothermal process, $\Delta T = 0$):
  $$\Delta U = 0 \implies q = -w$$

### 2.3 Pressure-Volume ($PV$) Work Formulations
The general expression for mechanical expansion/compression work against an external pressure $P_{\text{ext}}$ is:
$$w = -\int_{V_1}^{V_2} P_{\text{ext}}\,dV$$

1. **Reversible Isothermal Expansion of Ideal Gas:**
   - Since the process is quasistatic, $P_{\text{ext}} = P_{\text{gas}} = \frac{nRT}{V}$:
     $$w_{\text{rev, iso}} = -\int_{V_1}^{V_2} \frac{nRT}{V}\,dV = -nRT \ln\left(\frac{V_2}{V_1}\right) = -nRT \ln\left(\frac{P_1}{P_2}\right)$$
     $$\mathbf{w_{\text{rev, iso}}} = -2.303 n R T \log_{10}\left(\frac{V_2}{V_1}\right) = -2.303 n R T \log_{10}\left(\frac{P_1}{P_2}\right)$$
2. **Irreversible Isothermal Expansion Against Constant External Pressure ($P_{\text{ext}}$):**
   - Single-stage expansion against a fixed opposing pressure $P_{\text{ext}} = P_2$:
     $$w_{\text{irr, iso}} = -P_{\text{ext}}\int_{V_1}^{V_2} dV = -P_{\text{ext}}(V_2 - V_1) = -P_2\left(\frac{nRT}{P_2} - \frac{nRT}{P_1}\right)$$
3. **Free Expansion (Expansion into Vacuum):**
   - When an ideal gas expands into an evacuated chamber ($P_{\text{ext}} = 0$):
     $$w = -\int (0)\,dV = 0$$
   - In an insulated vessel ($q = 0$):
     $$\Delta U = q + w = 0 + 0 = 0 \implies \Delta T = 0 \quad (\text{Ideal Gas})$$
   - *Critical JEE Invariant:* Free expansion of an ideal gas is simultaneously **adiabatic ($q = 0$), isothermal ($\Delta T = 0$), and performs zero work ($w = 0$)**. However, it is an **irreversible, spontaneous process** that generates positive entropy.

---

### 2.4 Visual Preservation: Reversible vs. Irreversible Work Pathways

![Reversible vs Irreversible Work and Free Expansion](/media/reversible_vs_irreversible_work_and_free_expansion.webp)
*Description: Two-panel comparative thermodynamic graphic: (A) Reversible versus irreversible isothermal expansion on a $P$-$V$ indicator diagram, displaying the smooth integral area under the isotherm $|w_{\mathrm{rev}}| = nRT\ln(V_2/V_1)$ contrasting against the smaller single-step rectangular area $|w_{\mathrm{irr}}| = P_2(V_2 - V_1)$, illustrating the lost work capacity; (B) Schematic analysis of free expansion into vacuum ($P_{\mathrm{ext}} = 0 \implies w = 0, \Delta U = 0, \Delta T = 0$) and cyclic process state function annihilation invariants.*

---


### 3.1 Enthalpy ($H$) & First Law Partitioning
- **Definition of Enthalpy:**
  $$H = U + P V$$
- Differentiating at constant pressure ($P = \text{constant}$):
  $$dH = dU + P\,dV = (dq_p - P\,dV) + P\,dV = dq_p$$
  $$\mathbf{\Delta H = q_p}$$
  The heat absorbed or released by a closed system at constant pressure equals its **change in enthalpy**.
- At constant volume ($dV = 0, w = 0$):
  $$dU = dq_v \implies \mathbf{\Delta U = q_v}$$
- **Relation for Ideal Gas Chemical Reactions:**
  $$\Delta H = \Delta U + \Delta(PV) = \Delta U + \Delta(n_g R T)$$
  At constant temperature:
  $$\mathbf{\Delta H = \Delta U + \Delta n_g R T}$$
  where $\Delta n_g = \sum n_{g, \text{products}} - \sum n_{g, \text{reactants}}$ is the change in moles of gaseous species.

### 3.2 Heat Capacities & Mayer's Relation
- **Molar Heat Capacity at Constant Volume ($C_v$):**
  $$C_v = \left(\frac{\partial U_m}{\partial T}\right)_v \implies \Delta U = n C_v \Delta T$$
- **Molar Heat Capacity at Constant Pressure ($C_p$):**
  $$C_p = \left(\frac{\partial H_m}{\partial T}\right)_p \implies \Delta H = n C_p \Delta T$$
- **Mayer's Equation:**
  $$C_p - C_v = R$$
- **Poisson's Ratio ($\gamma = C_p / C_v$):**

| Atomicity of Ideal Gas | Degrees of Freedom ($f$) | $C_v$ | $C_p$ | $\gamma = C_p / C_v$ |
| :--- | :--- | :--- | :--- | :--- |
| **Monoatomic** ($\text{He, Ne, Ar}$) | $3$ (Translational) | $\frac{3}{2}R$ | $\frac{5}{2}R$ | $\frac{5}{3} \approx 1.67$ |
| **Diatomic / Linear** ($\text{H}_2, \text{O}_2, \text{CO}_2$) | $3\text{T} + 2\text{R} = 5$ | $\frac{5}{2}R$ | $\frac{7}{2}R$ | $\frac{7}{5} = 1.40$ |
| **Polyatomic Non-linear** ($\text{H}_2\text{O}, \text{NH}_3, \text{CH}_4$) | $3\text{T} + 3\text{R} = 6$ | $3R$ | $4R$ | $\frac{4}{3} \approx 1.33$ |

- **Polytropic Process ($P V^x = \text{constant}$):**
  The molar heat capacity for any general polytropic process of an ideal gas is:
  $$\mathbf{Polytropic\ Heat\ Capacity:}\quad C = C_v + \frac{R}{1 - x}$$

### 3.3 Reversible vs. Irreversible Adiabatic Processes ($q = 0$)
4. **Reversible Adiabatic Expansion/Compression:**
   $$dq = 0 \implies dU = dw \implies n C_v dT = -P\,dV = -\frac{nRT}{V}dV$$
   $$\frac{C_v}{R}\frac{dT}{T} = -\frac{dV}{V} \implies \mathbf{P V^\gamma = \text{constant}}$$
   $$\mathbf{T V^{\gamma - 1} = \text{constant}}, \quad \mathbf{T^\gamma P^{1 - \gamma} = \text{constant}}$$
   - **Reversible Adiabatic Work:**
     $$w_{\text{rev, adi}} = \Delta U = n C_v (T_2 - T_1) = \frac{n R (T_2 - T_1)}{\gamma - 1} = \frac{P_2 V_2 - P_1 V_1}{\gamma - 1}$$
5. **Irreversible Adiabatic Expansion Against Constant External Pressure ($P_{\text{ext}}$):**
   - *Critical Caution:* $P V^\gamma = \text{constant}$ **cannot be applied** to an irreversible adiabatic process!
   - Equate internal energy change directly to external work:
     $$\Delta U = w_{\text{irr}} \implies n C_v (T_2 - T_1) = -P_{\text{ext}}(V_2 - V_1)$$
     $$n C_v (T_2 - T_1) = -P_{\text{ext}}\left(\frac{nRT_2}{P_2} - \frac{nRT_1}{P_1}\right)$$
     Solve this algebraic equation directly for the unknown final temperature $T_2$.
6. **Slope Comparison on $P$-$V$ Indicator Diagram:**
   - Isothermal: $P V = \text{const} \implies \left(\frac{dP}{dV}\right)_{\text{iso}} = -\frac{P}{V}$
   - Adiabatic: $P V^\gamma = \text{const} \implies \left(\frac{dP}{dV}\right)_{\text{adi}} = -\gamma \frac{P}{V}$
   $$\mathbf{\left(\frac{dP}{dV}\right)_{\text{adi}} = \gamma \left(\frac{dP}{dV}\right)_{\text{iso}}}$$
   Since $\gamma > 1$, the **adiabatic curve is strictly steeper than the isothermal curve** at every intersection point on a $P$-$V$ diagram.

---

### 3.4 Visual Preservation: $P$-$V$ Indicator Diagrams & Work Hierarchy

![Thermodynamic Processes on P-V Indicator Diagram](/media/thermodynamic_processes_pv_indicator_diagram.webp)
*Description: Two-panel thermodynamic cycle graphic: (A) Four standard expansion pathways originating from an identical state $(P_i, V_i, T_i)$, demonstrating the expansion work hierarchy $w_{\mathrm{isobaric}} > w_{\mathrm{isothermal}} > w_{\mathrm{adiabatic}} > w_{\mathrm{isochoric}} = 0$ via relative areas under curves; (B) Compression pathways comparing isothermal vs adiabatic compression to a common final volume $V_f$, highlighting the elevated work demand and temperature rise of the adiabatic trajectory.*

---


### 4.1 Concept & Mathematical Definition
- **Entropy ($S$):** A state function representing the quantitative measure of microscopic randomness, disorder, or multiplicity of microstates in a thermodynamic system.
- **Clausius Definition of Differential Entropy:**
  $$dS = \frac{dq_{\text{rev}}}{T}$$
  where $dq_{\text{rev}}$ is the heat exchanged reversibly at absolute temperature $T$.
- Units: $\text{J/K}$ (Extensive) or $\text{J/(mol}\cdot\text{K)}$ (Intensive molar entropy).

### 4.2 Entropy Change of an Ideal Gas
For an ideal gas transitioning from $(P_1, V_1, T_1)$ to $(P_2, V_2, T_2)$:
$$dS = \frac{dU - dw_{\text{rev}}}{T} = \frac{n C_v dT + P\,dV}{T} = n C_v \frac{dT}{T} + n R \frac{dV}{V}$$
$$\mathbf{\Delta S_{\text{sys}} = n C_v \ln\left(\frac{T_2}{T_1}\right) + n R \ln\left(\frac{V_2}{V_1}\right)}$$
Using $C_p = C_v + R$ and $V \propto T/P$:
$$\mathbf{\Delta S_{\text{sys}} = n C_p \ln\left(\frac{T_2}{T_1}\right) - n R \ln\left(\frac{P_2}{P_1}\right)}$$

- **Specific Processes:**
  - **Isothermal Process ($T_1 = T_2$):**
    $$\Delta S_{\text{sys}} = n R \ln\left(\frac{V_2}{V_1}\right) = -n R \ln\left(\frac{P_2}{P_1}\right)$$
  - **Isobaric Process ($P_1 = P_2$):**
    $$\Delta S_{\text{sys}} = n C_p \ln\left(\frac{T_2}{T_1}\right)$$
  - **Isochoric Process ($V_1 = V_2$):**
    $$\Delta S_{\text{sys}} = n C_v \ln\left(\frac{T_2}{T_1}\right)$$
  - **Reversible Adiabatic Process ($dq_{\text{rev}} = 0$):**
    $$\Delta S_{\text{sys}} \equiv 0 \quad (\mathbf{Isentropic\ Process})$$
  - **Irreversible Adiabatic Process ($q = 0$, but spontaneous):**
    $$\Delta S_{\text{sys}} > 0$$

### 4.3 Surroundings Entropy & The Total Entropy Spontaneity Criterion
- Since surroundings constitute an infinitely large thermal reservoir at constant temperature $T_{\text{surr}}$, heat transfer to surroundings is always reversible:
  $$\Delta S_{\text{surr}} = \frac{q_{\text{surr}}}{T_{\text{surr}}} = -\frac{q_{\text{sys}}}{T_{\text{surr}}}$$
- **Second Law Criterion for Spontaneity:**
  $$\mathbf{\Delta S_{\text{total}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}}}$$
  - $\Delta S_{\text{total}} > 0$: **Spontaneous (Irreversible) Process.**
  - $\Delta S_{\text{total}} = 0$: **Reversible Process (System at Dynamic Equilibrium).**
  - $\Delta S_{\text{total}} < 0$: **Non-spontaneous Process (Thermodynamically Impossible).**

### 4.4 Entropy of Phase Transitions
During an isothermal-isobaric reversible phase transformation at its transition temperature:
- **Fusion (Melting) at $T_{\text{m.p.}}$:**
  $$\Delta S_{\text{fusion}} = \frac{\Delta H_{\text{fusion}}}{T_{\text{m.p.}}}$$
- **Vaporization (Boiling) at $T_{\text{b.p.}}$:**
  $$\Delta S_{\text{vap}} = \frac{\Delta H_{\text{vap}}}{T_{\text{b.p.}}}$$
- **Trouton's Rule:** For most normal, non-associated liquids (excluding hydrogen-bonded liquids like $\text{H}_2\text{O}$ or $\text{C}_2\text{H}_5\text{OH}$), the molar entropy of vaporization at the standard boiling point is approximately constant:
  $$\Delta S_{\text{vap}} \approx 88\text{ J/(mol}\cdot\text{K)} \approx 10.5\,R$$

---


### 5.1 Third Law of Thermodynamics (TLOT)
- **Nernst Heat Theorem / Planck Statement:** The entropy of a perfectly pure, crystalline substance approaches zero as the absolute temperature approaches absolute zero ($0\text{ K}$):
  $$\lim_{T \to 0} S = 0$$
- **Significance:** Allows the determination of **absolute standard entropies ($S^\circ$)** of chemical substances by numerical integration of heat capacity data:
  $$S^\circ(T) = \int_0^T \frac{C_p}{T}\,dT$$
- **Standard Entropy of a Reaction ($\Delta S^\circ$):**
  $$\Delta S^\circ = \sum S^\circ(\text{products}) - \sum S^\circ(\text{reactants})$$

### 5.2 Gibbs Free Energy ($G$) & Spontaneity Criteria
- **Definition of Gibbs Energy:**
  $$G = H - T S$$
- At constant temperature and pressure ($T, P = \text{constant}$):
  $$\mathbf{\Delta G = \Delta H - T \Delta S}$$
- Connecting to Total Entropy:
  $$\Delta S_{\text{total}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} = \Delta S_{\text{sys}} - \frac{\Delta H_{\text{sys}}}{T} = -\frac{\Delta H_{\text{sys}} - T\Delta S_{\text{sys}}}{T} = -\frac{\Delta G_{\text{sys}}}{T}$$
  $$\mathbf{\Delta G_{\text{sys}} = -T \Delta S_{\text{total}}}$$
- **Spontaneity Criteria at Constant $T$ and $P$:**
  - $\Delta G < 0$: **Spontaneous Process (Exergonic).**
  - $\Delta G = 0$: **Equilibrium State.**
  - $\Delta G > 0$: **Non-spontaneous Process (Endergonic).**

---

### 5.3 Visual Preservation: Entropy-Enthalpy Spontaneity Matrix

![Entropy and Gibbs Free Energy Spontaneity](/media/entropy_and_gibbs_free_energy_spontaneity.webp)
*Description: Two-panel spontaneity diagnostic plot: (A) Four-quadrant thermodynamic spontaneity map based on signs of $\Delta H$ and $\Delta S$, detailing conditions for spontaneity across endothermic and exothermic regimes; (B) Linear trajectory plots of Gibbs free energy $\Delta G(T) = \Delta H - T\Delta S$ versus absolute temperature $T$, highlighting the dynamic equilibrium transition temperature $T_{\mathrm{eq}} = \frac{\Delta H}{\Delta S}$.*

---

### 5.4 The Four-Quadrant Spontaneity Matrix

| Case | $\Delta H$ | $\Delta S$ | $\Delta G = \Delta H - T\Delta S$ | Spontaneity Condition | Physical Chemical Examples |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **I** | $> 0$ (Endothermic) | $> 0$ (Disorder increases) | Negative at high $T$ ($T > \Delta H/\Delta S$) | **Spontaneous at High Temperatures** (Entropy-driven) | Melting of ice ($T > 273\text{ K}$), vaporization of water, decomposition reactions ($2\text{NH}_3 \to \text{N}_2 + 3\text{H}_2$). |
| **II** | $> 0$ (Endothermic) | $< 0$ (Disorder decreases) | Positive at all $T$ | **Never Spontaneous at any Temperature** | Ozone formation: $3\text{O}_2(g) \to 2\text{O}_3(g)$, synthesis of $\text{NO}$ from elements at standard conditions. |
| **III** | $< 0$ (Exothermic) | $< 0$ (Disorder decreases) | Negative at low $T$ ($T < \Delta H/\Delta S$) | **Spontaneous at Low Temperatures** (Enthalpy-driven) | Freezing of water ($T < 273\text{ K}$), Haber process: $\text{N}_2 + 3\text{H}_2 \to 2\text{NH}_3$, polymerization reactions. |
| **IV** | $< 0$ (Exothermic) | $> 0$ (Disorder increases) | Negative at all $T$ | **Always Spontaneous at All Temperatures** | Combustion of glucose: $\text{C}_6\text{H}_{12}\text{O}_6 + 6\text{O}_2 \to 6\text{CO}_2 + 6\text{H}_2\text{O}$, dissolution of ammonium salts. |

- **Transition / Equilibrium Temperature ($T_{\text{eq}}$):** The exact temperature where $\Delta G = 0$:
  $$T_{\text{eq}} = \frac{\Delta H}{\Delta S}$$

### 5.5 Free Energy, Equilibrium & Non-$PV$ Useful Work
7. **Relation with Equilibrium Constant ($K_{\text{eq}}$):**
   $$\mathbf{\Delta G^\circ = -R T \ln K_{\text{eq}} = -2.303 R T \log_{10} K_{\text{eq}}}$$
   - If $\Delta G^\circ < 0 \implies K_{\text{eq}} > 1$ (Products dominate at equilibrium).
   - If $\Delta G^\circ > 0 \implies K_{\text{eq}} < 1$ (Reactants dominate at equilibrium).
8. **Non-$PV$ Work (Electrical Work of a Galvanic Cell):**
   $$-\Delta G = w_{\text{non-}PV, \text{max}} = w_{\text{electrical}} = n F E_{\text{cell}}$$
   where $n$ is moles of electrons transferred, $F = 96500\text{ C/mol}$ is Faraday's constant, and $E_{\text{cell}}$ is cell EMF.
9. **Van 't Hoff Isochore & Temperature Dependence of $K$:**
   $$\frac{d\ln K}{dT} = \frac{\Delta H^\circ}{R T^2}$$
   $$\mathbf{\ln\left(\frac{K_2}{K_1}\right) = \frac{\Delta H^\circ}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)}$$

---


### Archetype 1: Irreversible Adiabatic Expansion Final Temperature
- **Problem:** 1 mole of an ideal monoatomic gas ($C_v = \frac{3}{2}R$) initially at $P_1 = 10\text{ atm}$ and $T_1 = 300\text{ K}$ expands adiabatically against a constant external pressure $P_{\text{ext}} = 1\text{ atm}$ to a final pressure of $1\text{ atm}$. Find the final temperature $T_2$ and work done $w$.
- **Solution:**
  - Equate $\Delta U$ to $w_{\text{irr}}$:
    $$n C_v (T_2 - T_1) = -P_{\text{ext}}(V_2 - V_1) = -P_{\text{ext}}\left(\frac{nRT_2}{P_2} - \frac{nRT_1}{P_1}\right)$$
  - Substitute $n = 1, C_v = 1.5R, P_{\text{ext}} = 1, P_2 = 1, P_1 = 10$:
    $$1.5R(T_2 - 300) = -1\left(\frac{R T_2}{1} - \frac{R (300)}{10}\right) = -R(T_2 - 30)$$
    $$1.5(T_2 - 300) = -T_2 + 30 \implies 1.5 T_2 - 450 = -T_2 + 30$$
    $$2.5 T_2 = 480 \implies T_2 = \frac{480}{2.5} = 192\text{ K}$$
  - Work done:
    $$w = \Delta U = n C_v (T_2 - T_1) = 1 \times 1.5R (192 - 300) = 1.5R(-108) = -162R\text{ Joules}$$

### Archetype 2: Work in Chemical Reactions ($\Delta n_g$)
- **Problem:** 2 moles of liquid benzene are oxidized to $\text{CO}_2(g)$ and $\text{H}_2\text{O}(l)$ at $27^\circ\text{C}$ in an open vessel. Find the work done by the system ($R = 8.314\text{ J/(mol}\cdot\text{K)}$).
- **Reaction:**
  $$2\text{C}_6\text{H}_6(l) + 15\text{O}_2(g) \to 12\text{CO}_2(g) + 6\text{H}_2\text{O}(l)$$
- **Solution:**
  - For 2 moles of benzene:
    $$\Delta n_g = n_{g, \text{products}} - n_{g, \text{reactants}} = 12 - 15 = -3\text{ moles}$$
  - Work done against atmospheric pressure:
    $$w = -\Delta n_g R T = -(-3)(8.314)(300) = +7482.6\text{ J} = +7.48\text{ kJ}$$
  - *Trap Alert:* Since volume decreases (contraction), work is done **on the system** ($w > 0$).

### Archetype 3: Spontaneity Transition Temperature
- **Problem:** For the reaction $\text{CaCO}_3(s) \to \text{CaO}(s) + \text{CO}_2(g)$, $\Delta H^\circ = +178.3\text{ kJ/mol}$ and $\Delta S^\circ = +160.5\text{ J/(mol}\cdot\text{K)}$. Calculate the minimum temperature above which the thermal decomposition becomes spontaneous.
- **Solution:**
  - Decomposition becomes spontaneous when $\Delta G^\circ < 0$:
    $$\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ < 0 \implies T > \frac{\Delta H^\circ}{\Delta S^\circ}$$
  - Transition temperature:
    $$T = \frac{178.3 \times 10^3\text{ J/mol}}{160.5\text{ J/(mol}\cdot\text{K)}} = 1110.9\text{ K} \approx 838^\circ\text{C}$$
  - The decomposition is non-spontaneous at room temperature and becomes spontaneous only above $1111\text{ K}$.
