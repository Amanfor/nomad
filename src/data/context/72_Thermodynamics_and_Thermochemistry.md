Chemistry Revision Context: Chapter 72 — Thermodynamics & Thermochemistry


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/CHEMISTRY/Thermodynamics _ Thermochemistry/`, `1._TDS_Th_E_F5peMCd.pdf`, `2._Thermodynamics_I_PC_E.pdf`, `Thermochemistry_ResoSir_with_ans_XI_6d7lpoL.pdf`, and `5._APSP_PC_E.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Physical Chemistry Core — Classical Thermodynamic Terminology (Open, Closed, Isolated Systems, Rigid/Diathermic Boundaries), State Functions vs. Path Functions ($w, q$), Extensive vs. Intensive Property Classifications, Reversible vs. Irreversible Transitions, Work Calculation Invariants ($w = -\int P_{\text{ext}} dV$, Isothermal Reversible $w = -nRT \ln(V_2/V_1)$, Isothermal Irreversible $w = -P_{\text{ext}}\Delta V$, Free Expansion $w = 0$), First Law of Thermodynamics (FLOT: $\Delta U = q + w$), Heat Capacities & Mayer's Relation ($C_p - C_v = R$, $\gamma = C_p/C_v$, Deg of Freedom $f$, Molar Specific Heats), Adiabatic Path Analytics ($PV^\gamma = \text{const}, TV^{\gamma-1} = \text{const}$, Slope Invariant $\left(\frac{dP}{dV}\right)_{\text{adi}} = \gamma \left(\frac{dP}{dV}\right)_{\text{iso}}$, Reversible vs. Irreversible Adiabatic Cooling), Enthalpy Invariant for Chemical Reactions ($\Delta H = \Delta U + \Delta n_g RT$, Work of Chemical Reaction $w = -\Delta n_g RT$), Second Law of Thermodynamics (SLOT: Clausius Inequality $dS = \frac{dq_{\text{rev}}}{T}$, Universal Entropy Criterion $\Delta S_{\text{univ}} = \Delta S_{\text{sys}} + \Delta S_{\text{surr}} \ge 0$), Entropy Formulations for Ideal Gas Processes ($\Delta S = n C_v \ln(T_2/T_1) + nR \ln(V_2/V_1)$), Entropy of Phase Transitions & Trouton's Rule, Gibbs Free Energy ($G = H - TS$, Maximum Useful Work $-\Delta G = w_{\text{non-PV, max}}$, Four Spontaneity Quadrants, Equilibrium Threshold $T_{\text{eq}} = \frac{\Delta H}{\Delta S}$, Relation to Equilibrium Constant $\Delta G^\circ = -RT \ln K_{\text{eq}}$), Third Law of Thermodynamics (TLOT: Absolute Zero Entropy $\lim_{T \to 0} S = 0$, Residual Entropies in $\text{CO}, \text{N}_2\text{O}$), Thermochemistry Foundations (Standard State Reference Conventions, Standard Enthalpies of Formation $\Delta_f H^\circ$), Hess's Law of Constant Heat Summation, Kirchhoff's Temperature Law ($\Delta_r H^\circ(T_2) = \Delta_r H^\circ(T_1) + \Delta C_p \Delta T$), Enthalpies of Combustion, Bond Enthalpy Method & Resonance Energy Determinations, Enthalpy of Neutralization (Strong Acid-Base $\Delta H^\circ = -57.3\text{ kJ/eq}$, Ionization Heat of Weak Acids, Anomalous Exothermic $\text{HF} + \text{NaOH} = -68.6\text{ kJ/eq}$), Born-Haber Cycle & Lattice Energy Analytics, and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Thermodynamic Fundamentals & The First Law (FLOT)


### 1.1 System Classifications & State Variables


1. **System & Surrounding Definitions:**
   * **System:** The specific part of the universe selected for thermodynamic investigation.
   * **Surroundings:** Everything in the universe outside the system boundaries:
     $$\mathbf{\text{Universe} = \text{System} + \text{Surroundings}}$$
   * **Boundary Types:**
     * **Real or Imaginary; Rigid (Fixed volume, $\Delta V = 0$) or Flexible (Movable piston, $\Delta V \ne 0$).**
     * **Diathermic:** Heat-conducting boundary (allows thermal equilibration, $\Delta q \ne 0$).
     * **Adiabatic:** Thermally insulated boundary (strictly zero heat exchange, $q = 0$).


2. **Types of Thermodynamic Systems:**
   * **Open System:** Exchanges both matter and energy with the surroundings (e.g., boiling water in an open beaker, living organisms).
   * **Closed System:** Exchanges energy (heat/work) but **no matter** with the surroundings (e.g., gas in a cylinder with a closed piston).
   * **Isolated System:** Exchanges **neither matter nor energy** with the surroundings (e.g., hot liquid in an ideal vacuum thermos; the entire Universe).


---


### 1.2 State Functions vs. Path Functions


1. **State Functions (Point Functions):**
   Properties that depend solely on the current state (initial and final coordinates) of the system, completely independent of the path taken to reach that state.
   $$\oint dX = 0 \quad (\text{Cyclic integral is identically zero})$$
   * *Examples:* Temperature ($T$), Pressure ($P$), Volume ($V$), Internal Energy ($U$ or $E$), Enthalpy ($H$), Entropy ($S$), Gibbs Free Energy ($G$), Helmholtz Free Energy ($A$).
   * *Note on Deltas:* While $U, H, S, G$ are state functions, path-dependent energy transfers like heat change ($q$) and work done ($w$) are **Path Functions**.


2. **Path Functions:**
   Quantities whose values depend explicitly on the operational mechanism or intermediate path followed during the transformation:
   * *Examples:* **Heat ($q$)** and **Work ($w$)**.
   * Differentials $dq$ and $dw$ are inexact differentials.


---


### 1.3 Intensive vs. Extensive Properties


| Property Classification | Definition | Canonical Physical Examples |
| :--- | :--- | :--- |
| **Extensive Properties** | Depend directly on the total mass or quantity of matter present in the system (Additive in nature). | Mass ($m$), Volume ($V$), Total Internal Energy ($U$), Enthalpy ($H$), Entropy ($S$), Gibbs Free Energy ($G$), Total Heat Capacity ($C$), Moles ($n$). |
| **Intensive Properties** | Completely independent of the mass, size, or quantity of matter in the system. | Temperature ($T$), Pressure ($P$), Density ($\rho = m/V$), Molar Volume ($V_m$), Specific Heat Capacity ($c$), Molar Heat Capacity ($C_m$), Surface Tension, Viscosity, Refractive Index, $\text{pH}$, Cell Potential ($E_{\text{cell}}$). |


* **The Ratio Rule:** The ratio of any two extensive properties is always an **intensive property**:
  $$\mathbf{\frac{\text{Mass (Extensive)}}{\text{Volume (Extensive)}} = \text{Density (Intensive)}, \quad \frac{\text{Enthalpy (Extensive)}}{\text{Moles (Extensive)}} = \text{Molar Enthalpy (Intensive)}} $$


---


### 1.4 Reversibility vs. Irreversibility & Work Mechanics


1. **Reversible Process:**
   Carried out infinitesimally slowly through an infinite sequence of equilibrium states such that the driving force exceeds the opposing force by only an infinitesimal amount ($dP$):
   * Driving force $\approx$ Opposing force ($P_{\text{ext}} = P_{\text{int}} \pm dP$).
   * Can be reversed at any stage by an infinitesimal change.
   * **Delivers maximum possible work in expansion** ($|w_{\text{rev}}| > |w_{\text{irrev}}|$).


2. **Irreversible Process:**
   Carried out rapidly in finite steps against a constant opposing external force ($P_{\text{ext}}$), establishing thermodynamic equilibrium only at the final state.
   * All natural, spontaneous processes occurring in nature are **irreversible**.


![Thermodynamic Processes PV Work and Adiabatic Slopes](/media/thermodynamic_processes_pv_work_and_adiabatic_slopes.webp)
*Description: Two-panel mechanical thermodynamics graphic: (Panel A) $P-V$ indicator diagrams comparing Isothermal vs. Adiabatic trajectories and highlighting the work integral areas under expansion; (Panel B) First Law of Thermodynamics formulation matrix detailing state functions, Mayer's relation, and process invariants.*


3. **IUPAC Sign Convention for Work and Heat:**
   * **$q > 0$ (Positive):** Heat absorbed by the system from the surroundings (Endothermic).
   * **$q < 0$ (Negative):** Heat released by the system into the surroundings (Exothermic).
   * **$w > 0$ (Positive):** Work done **ON** the system by the surroundings (Compression, $\Delta V < 0$).
   * **$w < 0$ (Negative):** Work done **BY** the system on the surroundings (Expansion, $\Delta V > 0$).


$$\mathbf{w = -\int_{V_1}^{V_2} P_{\text{ext}} \, dV}$$


---


### 1.5 Work Formulations for Ideal Gas Expansion & Compression


1. **Isothermal Reversible Expansion / Compression:**
   Since the process is quasi-static, $P_{\text{ext}} = P_{\text{gas}} = \frac{nRT}{V}$:
   $$w_{\text{rev}} = -\int_{V_1}^{V_2} \frac{nRT}{V} dV = -nRT \ln\left( \frac{V_2}{V_1} \right)$$
   $$\mathbf{w_{\text{rev}} = -2.303 nRT \log_{10}\left( \frac{V_2}{V_1} \right) = -2.303 nRT \log_{10}\left( \frac{P_1}{P_2} \right)}$$


2. **Isothermal Irreversible Expansion (against constant $P_{\text{ext}}$):**
   $$\mathbf{w_{\text{irrev}} = -P_{\text{ext}} (V_2 - V_1) = -P_{\text{ext}} \left( \frac{nRT}{P_2} - \frac{nRT}{P_1} \right)}$$


3. **Free Expansion (Expansion into Vacuum):**
   When a gas expands against vacuum, external opposing pressure is zero ($P_{\text{ext}} = 0$):
   $$\mathbf{w = -\int 0 \, dV = 0}$$
   *(No work is performed in free expansion, whether the process is reversible or irreversible).*
   * For an ideal gas in an insulated container: $w = 0, q = 0 \implies \Delta U = 0 \implies \mathbf{\Delta T = 0}$ (Temperature remains constant!).


4. **Work Comparison Theorems:**
   * **In Expansion ($V_2 > V_1$):** Reversible path encompasses the maximum area under the $P-V$ curve:
     $$\mathbf{|w_{\text{rev}}| > |w_{\text{irrev}}|}$$
   * **In Compression ($V_2 < V_1$):** Irreversible work required to compress a gas exceeds reversible work:
     $$\mathbf{w_{\text{irrev}} > w_{\text{rev}} > 0}$$


---


### 1.6 The First Law of Thermodynamics (FLOT)


Energy can neither be created nor destroyed, although it can be transformed from one form to another:


$$\mathbf{\Delta U = q + w = q - \int P_{\text{ext}} \, dV}$$


* **Differential Form:** $dU = dq + dw$.
* **For a Cyclic Process:** Initial and final states coincide $\implies \Delta U = 0 \implies \mathbf{q = -w}$.
* **For an Isochoric Process ($V = \text{const}, \Delta V = 0$):**
  $$w = 0 \implies \mathbf{q_v = \Delta U = n C_v \Delta T}$$
* **For an Adiabatic Process ($q = 0$):**
  $$\mathbf{\Delta U = w}$$


---


## 2. Enthalpy, Heat Capacities & Adiabatic Transformations


### 2.1 Enthalpy ($H$) & Chemical Reaction Work


1. **Definition of Enthalpy:**
   Enthalpy (heat content at constant pressure) is defined as:
   $$\mathbf{H = U + PV}$$
   $$\Delta H = \Delta U + \Delta(PV) = \Delta U + (P_2 V_2 - P_1 V_1)$$
   * At constant pressure ($P_{\text{ext}} = P = \text{constant}$):
     $$\Delta H = \Delta U + P\Delta V = (q_p + w) + P\Delta V = (q_p - P\Delta V) + P\Delta V = \mathbf{q_p}$$
     $$\mathbf{q_p = \Delta H = n C_p \Delta T}$$


2. **Enthalpy-Internal Energy Link for Chemical Reactions:**
   For a chemical reaction involving ideal gaseous species at constant temperature $T$:
   $$P\Delta V = \Delta(n_g RT) = \Delta n_g RT$$
   $$\mathbf{\Delta H = \Delta U + \Delta n_g RT}$$
   where:
   $$\mathbf{\Delta n_g = \sum n_g(\text{gaseous products}) - \sum n_g(\text{gaseous reactants})}$$
   * **Expansion Work Done by a Chemical Reaction:**
     $$\mathbf{w = -P_{\text{ext}} \Delta V = -\Delta n_g RT}$$
     * If $\Delta n_g > 0 \implies w < 0$ (Gas produced performs expansion work).
     * If $\Delta n_g < 0 \implies w > 0$ (Atmosphere performs compression work).
     * If $\Delta n_g = 0 \implies \Delta H = \Delta U$ and $w = 0$.


---


### 2.2 Heat Capacities & Mayer's Relation


1. **Heat Capacity Definitions:**
   * **Molar Heat Capacity at Constant Volume ($C_v$):**
     $$C_v = \left( \frac{\partial U_m}{\partial T} \right)_v = \frac{f}{2}R$$
   * **Molar Heat Capacity at Constant Pressure ($C_p$):**
     $$C_p = \left( \frac{\partial H_m}{\partial T} \right)_p = C_v + R = \left( \frac{f}{2} + 1 \right)R$$
   * **Mayer's Formula for an Ideal Gas:**
     $$\mathbf{C_p - C_v = R}$$
   * **Poisson's Adiabatic Ratio ($\gamma$):**
     $$\mathbf{\gamma = \frac{C_p}{C_v} = 1 + \frac{2}{f} > 1}$$


| Gas Atomicity | Degrees of Freedom ($f$) | $C_v$ | $C_p$ | $\gamma = C_p/C_v$ | Canonical Examples |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Monoatomic** | $3\text{ translational}$ | $\frac{3}{2}R$ | $\frac{5}{2}R$ | $\mathbf{\frac{5}{3} \approx 1.67}$ | $\text{He, Ne, Ar, Kr}$ |
| **Diatomic / Linear** | $3\text{ trans} + 2\text{ rot} = 5$ | $\frac{5}{2}R$ | $\frac{7}{2}R$ | $\mathbf{\frac{7}{5} = 1.40}$ | $\text{H}_2, \text{N}_2, \text{O}_2, \text{CO}, \text{HCl}$ |
| **Non-Linear Polyatomic** | $3\text{ trans} + 3\text{ rot} = 6$ | $3R$ | $4R$ | $\mathbf{\frac{4}{3} \approx 1.33}$ | $\text{H}_2\text{O}, \text{NH}_3, \text{CH}_4, \text{SO}_2$ |


---


### 2.3 Adiabatic Processes for an Ideal Gas


In an adiabatic process, no heat enters or leaves the system ($q = 0$):


1. **Reversible Adiabatic Governing Equations (Poisson's Laws):**
   $$\mathbf{P V^\gamma = \text{constant}}$$
   $$\mathbf{T V^{\gamma - 1} = \text{constant}}$$
   $$\mathbf{T^\gamma P^{1 - \gamma} = \text{constant} \iff P T^{\frac{\gamma}{1 - \gamma}} = \text{constant}}$$


2. **Reversible Adiabatic Work:**
   $$w = \Delta U = n C_v (T_2 - T_1) = \frac{n R (T_2 - T_1)}{\gamma - 1}$$
   $$\mathbf{w_{\text{rev}} = \frac{P_2 V_2 - P_1 V_1}{\gamma - 1}}$$
   * *Adiabatic Expansion ($V_2 > V_1$):* Gas performs work at the expense of its own internal energy $\implies \Delta U < 0 \implies \mathbf{T_2 < T_1}$ (Gas cools).
   * *Adiabatic Compression ($V_2 < V_1$):* Work is performed on the gas $\implies \Delta U > 0 \implies \mathbf{T_2 > T_1}$ (Gas heats up).


3. **Irreversible Adiabatic Expansion (Single-Stage against $P_{\text{ext}}$):**
   Since $\Delta U = w_{\text{irrev}}$:
   $$n C_v (T_2 - T_1) = -P_{\text{ext}} (V_2 - V_1) = -P_{\text{ext}} \left( \frac{nRT_2}{P_2} - \frac{nRT_1}{P_1} \right)$$
   $$\mathbf{\frac{R}{\gamma - 1}(T_2 - T_1) = -P_{\text{ext}} \left( \frac{RT_2}{P_2} - \frac{RT_1}{P_1} \right)}$$
   *(This equation is universally employed to compute final temperature $T_2$ in irreversible adiabatic expansions).*


4. **Slope Comparison on Indicator ($P-V$) Diagram:**
   * Isothermal slope: $\left( \frac{dP}{dV} \right)_{\text{iso}} = -\frac{P}{V}$.
   * Adiabatic slope: $\left( \frac{dP}{dV} \right)_{\text{adi}} = -\gamma \frac{P}{V}$.
   $$\mathbf{\left( \frac{dP}{dV} \right)_{\text{adiabatic}} = \gamma \left( \frac{dP}{dV} \right)_{\text{isothermal}}}$$
   *(Because $\gamma > 1$, the adiabatic curve is always steeper than the isothermal curve).*


---


## 3. Second Law of Thermodynamics (SLOT) & Entropy ($\Delta S$)


![Entropy Gibbs Free Energy and Spontaneity Criteria](/media/entropy_gibbs_free_energy_and_spontaneity_criteria.webp)
*Description: Two-panel thermodynamic driving force graphic: (Panel A) The Four Gibbs Free Energy Spontaneity Quadrants ($\Delta H$ vs. $\Delta S$) detailing equilibrium temperature thresholds $T_{        ext{eq}} = \Delta H/\Delta S$; (Panel B) Comprehensive entropy calculation formulations for ideal gas processes, phase transitions, and the Third Law absolute entropy approach.*


### 3.1 The Concept of Entropy & Clausius Formulation


The First Law asserts energy conservation but fails to predict the spontaneous direction of natural processes. Rudolph Clausius defined **Entropy ($S$)** as a state function measuring the microscopic randomness, spatial disorder, or statistical multiplicity of a system:


$$\mathbf{dS = \frac{dq_{\text{rev}}}{T}}$$


* **Clausius Inequality & Second Law of Thermodynamics:**
  $$\mathbf{\Delta S_{\text{total}} = \Delta S_{\text{universe}} = \Delta S_{\text{system}} + \Delta S_{\text{surroundings}} \ge 0}$$
  * $\mathbf{\Delta S_{\text{universe}} > 0}$: Spontaneous, natural, irreversible process.
  * $\mathbf{\Delta S_{\text{universe}} = 0}$: Reversible process at dynamic equilibrium.
  * $\mathbf{\Delta S_{\text{universe}} < 0}$: Thermodynamically impossible non-spontaneous process.


---


### 3.2 Entropy Calculations for Ideal Gas Processes


For $n$ moles of an ideal gas undergoing a transition from $(P_1, V_1, T_1)$ to $(P_2, V_2, T_2)$:


$$\mathbf{\Delta S_{\text{sys}} = n C_v \ln\left( \frac{T_2}{T_1} \right) + nR \ln\left( \frac{V_2}{V_1} \right) = n C_p \ln\left( \frac{T_2}{T_1} \right) - nR \ln\left( \frac{P_2}{P_1} \right)}$$


1. **Isothermal Process ($T_1 = T_2$):**
   $$\mathbf{\Delta S_{\text{sys}} = nR \ln\left( \frac{V_2}{V_1} \right) = nR \ln\left( \frac{P_1}{P_2} \right) = 2.303 nR \log_{10}\left( \frac{V_2}{V_1} \right)}$$
2. **Isochoric Process ($V_1 = V_2$):**
   $$\mathbf{\Delta S_{\text{sys}} = n C_v \ln\left( \frac{T_2}{T_1} \right) = 2.303 n C_v \log_{10}\left( \frac{T_2}{T_1} \right)}$$
3. **Isobaric Process ($P_1 = P_2$):**
   $$\mathbf{\Delta S_{\text{sys}} = n C_p \ln\left( \frac{T_2}{T_1} \right) = 2.303 n C_p \log_{10}\left( \frac{T_2}{T_1} \right)}$$
4. **Reversible Adiabatic Process ($q_{\text{rev}} = 0$):**
   $$\mathbf{\Delta S_{\text{sys}} = 0, \quad \Delta S_{\text{surr}} = 0 \implies \Delta S_{\text{univ}} = 0 \quad (\text{Isentropic Process})}$$
5. **Irreversible Adiabatic Process (e.g., Free Expansion into Vacuum):**
   * Since the container is insulated, $q = 0 \implies \mathbf{\Delta S_{\text{surroundings}} = 0}$.
   * But the system expands irreversibly from $V_1$ to $V_2$ at constant $T$:
     $$\mathbf{\Delta S_{\text{system}} = nR \ln\left( \frac{V_2}{V_1} \right) > 0}$$
     $$\mathbf{\Delta S_{\text{universe}} = \Delta S_{\text{system}} + 0 = nR \ln\left( \frac{V_2}{V_1} \right) > 0 \quad (\text{Spontaneous!})}$$


---


### 3.3 Entropy of Phase Transitions & Trouton's Rule


During a reversible phase transition occurring at constant equilibrium temperature ($T_{\text{trans}}$) and constant pressure:


$$\mathbf{\Delta S_{\text{fusion}} = \frac{\Delta H_{\text{fusion}}}{T_{\text{fusion}}}, \quad \Delta S_{\text{vaporization}} = \frac{\Delta H_{\text{vap}}}{T_{\text{boiling}}}, \quad \Delta S_{\text{sublimation}} = \frac{\Delta H_{\text{sub}}}{T_{\text{sublimation}}}}$$


* **Trouton's Empirical Rule:**
  For most normal, non-polar, non-associated liquids, the molar entropy of vaporization at their normal boiling point is nearly constant:
  $$\mathbf{\Delta S_{\text{vap}} = \frac{\Delta H_{\text{vap}}}{T_b} \approx 88\text{ J K}^{-1}\text{ mol}^{-1} \approx 10.5 R}$$
  * *Failures of Trouton's Rule:* Liquids exhibiting strong intermolecular hydrogen bonding (e.g., $\text{H}_2\text{O} \to 109\text{ J K}^{-1}\text{ mol}^{-1}, \; \text{C}_2\text{H}_5\text{OH} \to 110\text{ J K}^{-1}\text{ mol}^{-1}$) have much higher entropies of vaporization due to high structural order in the liquid phase.


---


## 4. Gibbs Free Energy ($G$) & Chemical Spontaneity


### 4.1 Definition & Physical Significance


Josiah Willard Gibbs defined the **Gibbs Free Energy ($G$)** to formulate spontaneity criteria strictly in terms of system properties:


$$\mathbf{G = H - TS}$$


At constant temperature and pressure:


$$\mathbf{\Delta G_{\text{sys}} = \Delta H_{\text{sys}} - T\Delta S_{\text{sys}}}$$


* **Connection to Universal Entropy:**
  $$\Delta S_{\text{surr}} = -\frac{\Delta H_{\text{sys}}}{T} \implies \Delta S_{\text{univ}} = \Delta S_{\text{sys}} - \frac{\Delta H_{\text{sys}}}{T} = -\frac{\Delta G_{\text{sys}}}{T}$$
  $$\mathbf{\Delta G_{\text{sys}} = -T \Delta S_{\text{universe}}}$$
* **Spontaneity Criteria at Constant $T$ and $P$:**
  * $\mathbf{\Delta G < 0}$: Process is **Spontaneous** (Exergonic).
  * $\mathbf{\Delta G = 0}$: System is in a state of **Dynamic Equilibrium**.
  * $\mathbf{\Delta G > 0}$: Process is **Non-Spontaneous** (Endergonic; reverse process is spontaneous).
* **Maximum Non-$PV$ Useful Work:**
  $$\mathbf{-\Delta G_{T, P} = w_{\text{useful, max}} = w_{\text{non-PV, max}}}$$
  *(In an electrochemical cell: $-\Delta G = nFE_{\text{cell}}$).*


---


### 4.2 The Four Thermodynamic Spontaneity Quadrants


$$\Delta G = \Delta H - T\Delta S$$


| $\Delta H$ | $\Delta S$ | $\Delta G = \Delta H - T\Delta S$ | Spontaneity Status | Temperature Dependence & Equilibrium Threshold |
| :---: | :---: | :---: | :--- | :--- |
| **$-$** | **$+$** | **Always Negative ($-$)** | **Spontaneous at ALL Temperatures** | Both enthalpy and entropy drive the reaction forward. |
| **$+$** | **$-$** | **Always Positive ($+$)** | **Non-Spontaneous at ALL Temperatures** | Reverse reaction is spontaneous at all temperatures. |
| **$-$** | **$-$** | **Negative at Low $T$** | **Spontaneous ONLY at LOW Temperatures** | Spontaneous when $\mathbf{T < \frac{\Delta H}{\Delta S}}$; Equilibrium at $\mathbf{T_{\text{eq}} = \frac{\Delta H}{\Delta S}}$. |
| **$+$** | **$+$** | **Negative at High $T$** | **Spontaneous ONLY at HIGH Temperatures** | Spontaneous when $\mathbf{T > \frac{\Delta H}{\Delta S}}$; Equilibrium at $\mathbf{T_{\text{eq}} = \frac{\Delta H}{\Delta S}}$. |


---


### 4.3 Standard Free Energy & The Equilibrium Constant


$$\mathbf{\Delta_r G = \Delta_r G^\circ + RT \ln Q}$$


At dynamic chemical equilibrium, $\Delta_r G = 0$ and $Q = K_{\text{eq}}$:


$$\mathbf{\Delta_r G^\circ = -RT \ln K_{\text{eq}} = -2.303 RT \log_{10} K_{\text{eq}}}$$


* If $\Delta G^\circ < 0 \implies K_{\text{eq}} > 1$ (Products thermodynamically favored at equilibrium).
* If $\Delta G^\circ > 0 \implies K_{\text{eq}} < 1$ (Reactants thermodynamically favored).


---


## 5. Third Law of Thermodynamics (TLOT)


### 5.1 Nernst Heat Theorem & Absolute Entropy


**The Third Law Formulation:** The entropy of any pure, perfectly crystalline substance approaches **zero** as the absolute temperature approaches **absolute zero ($0\text{ K}$)**:


$$\mathbf{\lim_{T \to 0\text{ K}} S = 0}$$


* **Absolute Standard Molar Entropy ($S_T^\circ$):**
  Unlike enthalpy or internal energy (where only differences $\Delta H, \Delta U$ can be measured), the Third Law enables the calculation of **absolute entropy values**:
  $$\mathbf{S_T^\circ = \int_0^T \frac{C_p}{T} dT}$$
* **Standard Entropy of Reaction:**
  $$\mathbf{\Delta_r S^\circ = \sum \nu_p S^\circ(\text{products}) - \sum \nu_r S^\circ(\text{reactants})}$$


---


### 5.2 Residual Entropy


If a substance at $0\text{ K}$ possesses structural disorder, multiple degenerate orientations, or random isotopic distributions frozen into its crystal lattice:


$$\mathbf{S_{\text{residual}} = k_B \ln W \ne 0}$$


where $W$ is the number of accessible microstates at $0\text{ K}$, and $k_B$ is Boltzmann's constant.
* *Classic Examples:*
  * **Carbon Monoxide ($\text{CO}$):** Linear dipoles freeze randomly as $\text{C}-\text{O}$ or $\text{O}-\text{C}$ ($W = 2^N \implies S_{\text{res}} = R \ln 2 \approx 5.76\text{ J K}^{-1}\text{ mol}^{-1}$).
  * **Nitrous Oxide ($\text{N}_2\text{O}$):** Linear asymmetric $\text{N}-\text{N}-\text{O}$ vs. $\text{O}-\text{N}-\text{N}$.
  * **Ice ($\text{H}_2\text{O}$):** Hydrogen bond positional disorder ($S_{\text{res}} = R \ln(1.5) \approx 3.37\text{ J K}^{-1}\text{ mol}^{-1}$).


---


## 6. Thermochemistry & Reaction Enthalpy Laws


![Thermochemistry Cycles Kirchhoff and Enthalpy Architectures](/media/thermochemistry_cycles_kirchhoff_and_enthalpy_architectures.webp)
*Description: Two-panel chemical thermochemistry graphic: (Panel A) Born-Haber cycle for $        ext{NaCl}(s)$ demonstrating conservation pathways for lattice energy ($U$); (Panel B) Reaction enthalpy architecture box detailing Kirchhoff's temperature law, Hess's law, and bond enthalpy calculations.*


### 6.1 Standard States & Enthalpy of Formation ($\Delta_f H^\circ$)


The standard state of a substance is its pure, most stable physical form at $1\text{ bar}$ pressure and a specified temperature (customarily $298.15\text{ K}$):


1. **Standard Enthalpy of Formation ($\Delta_f H^\circ$):**
   The enthalpy change accompanying the formation of **$1\text{ mole}$** of a compound from its constituent elements in their most stable reference states.
   * **Universal Zero-Enthalpy Reference Convention:**
     $$\mathbf{\Delta_f H^\circ = 0 \quad \text{for elements in their standard reference states at } 298\text{ K}}$$
   * *Reference States ($\Delta_f H^\circ = 0$):* $\text{C}(\text{graphite}), \; \text{O}_2(g), \; \text{N}_2(g), \; \text{H}_2(g), \; \text{F}_2(g), \; \text{Cl}_2(g), \; \text{Br}_2(l), \; \text{I}_2(s), \; \text{S}_8(\text{rhombic}), \; \text{P}_4(\text{white})$.
   * *Non-Zero Reference Traps ($\Delta_f H^\circ \ne 0$):* $\text{C}(\text{diamond}) \; (+1.9\text{ kJ}), \; \text{O}_3(g) \; (+142.7\text{ kJ}), \; \text{Br}_2(g) \; (+30.9\text{ kJ}), \; \text{S}(\text{monoclinic}), \; \text{P}(\text{red})$.


2. **Standard Reaction Enthalpy Calculation:**
   $$\mathbf{\Delta_r H^\circ = \sum \nu_p \Delta_f H^\circ(\text{products}) - \sum \nu_r \Delta_f H^\circ(\text{reactants})}$$


---


### 6.2 Hess's Law of Constant Heat Summation


The total enthalpy change for a chemical reaction is identical whether the reaction occurs in a single step or through a multi-step sequence:


$$\Delta H_{\text{overall}} = \Delta H_1 + \Delta H_2 + \Delta H_3 + \dots$$


*(Enthalpy is a state function; therefore, thermochemical equations can be algebraically added, subtracted, and multiplied).*


---


### 6.3 Kirchhoff's Equations (Temperature Dependence of $\Delta_r H$)


The variation of reaction enthalpy with temperature at constant pressure is governed by the heat capacities of products and reactants:


$$\mathbf{\frac{d(\Delta_r H^\circ)}{dT} = \Delta C_p = \sum \nu_p C_{p, m}^\circ(\text{products}) - \sum \nu_r C_{p, m}^\circ(\text{reactants})}$$


$$\mathbf{\Delta_r H^\circ(T_2) = \Delta_r H^\circ(T_1) + \int_{T_1}^{T_2} \Delta C_p \, dT \approx \Delta_r H^\circ(T_1) + \Delta C_p (T_2 - T_1)}$$


At constant volume:


$$\mathbf{\Delta_r U^\circ(T_2) = \Delta_r U^\circ(T_1) + \Delta C_v (T_2 - T_1)}$$


---


### 6.4 Enthalpy of Combustion & Bond Enthalpy Methods


1. **Standard Enthalpy of Combustion ($\Delta_c H^\circ$):**
   Enthalpy change when $1\text{ mole}$ of a substance undergoes complete oxidation in excess oxygen:
   $$\mathbf{\Delta_r H^\circ = \sum \nu_r \Delta_c H^\circ(\text{reactants}) - \sum \nu_p \Delta_c H^\circ(\text{products})}$$
   *(Note the inversion: Reactants minus Products!).*


2. **Bond Enthalpy / Bond Energy (B.E.) Method:**
   Applicable strictly when all participating species are in the **gaseous state**:
   $$\mathbf{\Delta_r H^\circ = \sum \text{B.E.}(\text{bonds broken in reactants}) - \sum \text{B.E.}(\text{bonds formed in products})}$$
   * **Resonance Energy Determination:**
     $$\mathbf{\text{Resonance Energy} = \Delta_f H^\circ(\text{experimental}) - \Delta_f H^\circ(\text{calculated via bond energies})}$$
     *(Resonance energy is always negative, representing additional stability).*


---


### 6.5 Enthalpy of Neutralization ($\Delta_{        ext{neut}} H^\circ$)


The enthalpy change when one gram-equivalent of an acid is completely neutralized by one gram-equivalent of a base in dilute aqueous solution:


1. **Strong Acid + Strong Base:**
   Because strong acids and bases are completely dissociated into ions, the net reaction is purely the formation of liquid water from hydronium and hydroxide ions:
   $$\mathbf{\text{H}^+(aq) + \text{OH}^-(aq) \longrightarrow \text{H}_2\text{O}(l), \quad \Delta H^\circ = -57.32\text{ kJ eq}^{-1} = -13.7\text{ kcal eq}^{-1}}$$
   *(This value is a universal constant for ANY strong acid and strong base pair).*


2. **Weak Acid or Weak Base Involving Systems:**
   Measured heat of neutralization is numerically **less than $57.3\text{ kJ/eq}$** ($|\Delta H| < 57.3\text{ kJ}$) because a portion of the released energy is consumed in ionizing the weak electrolyte:
   $$\mathbf{\Delta H_{\text{neutralization}} = -57.32\text{ kJ} + \Delta H_{\text{ionization}}}$$
   $$\mathbf{\Delta H_{\text{ionization}} = \Delta H_{\text{neutralization}} - (-57.32\text{ kJ}) > 0}$$


3. **The Hydrofluoric Acid ($\text{HF} + \text{NaOH}$) Anomaly:**
   $$\text{HF}(aq) + \text{NaOH}(aq) \longrightarrow \text{NaF}(aq) + \text{H}_2\text{O}(l), \quad \mathbf{\Delta H^\circ = -68.6\text{ kJ eq}^{-1}}$$
   * *Mechanism:* Although $\text{HF}$ is a weak acid, the tiny fluoride ion ($\text{F}^-$) generated possesses an extraordinarily high hydration enthalpy that more than compensates for the dissociation energy of the $\text{H}-\text{F}$ bond!


---


### 6.6 The Born-Haber Cycle & Lattice Energy ($U$)


The lattice energy ($U$) of an ionic crystal $\text{MX}(s)$ cannot be determined by direct calorimetric experiment. It is calculated via Hess's law across a cyclic thermochemical pathway:


$$\Delta_f H^\circ(\text{MX}) = \Delta_{\text{sub}} H(\text{M}) + \text{IE}_1(\text{M}) + \frac{1}{2}\Delta_{\text{diss}} H(\text{X}_2) + \Delta_{\text{eg}} H(\text{X}) + U_{\text{lattice}}$$


$$\mathbf{U_{\text{lattice}} = \Delta_f H^\circ(\text{MX}) - \left[ \Delta_{\text{sub}} H(\text{M}) + \text{IE}_1(\text{M}) + \frac{1}{2}\Delta_{\text{diss}} H(\text{X}_2) + \Delta_{\text{eg}} H(\text{X}) \right]}$$


---


## 7. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Reversible Adiabatic Entropy Invariance Trap:**
   * An adiabatic process has $q = 0$, but is $\Delta S_{\text{sys}} = 0$ always?
   * **TRAP:** $\Delta S_{\text{sys}} = 0$ **ONLY for a REVERSIBLE adiabatic process**!
   * For an **irreversible adiabatic expansion**, $q = 0$ so $\Delta S_{\text{surr}} = 0$, but $\mathbf{\Delta S_{\text{sys}} > 0}$ and $\mathbf{\Delta S_{\text{univ}} > 0}$!
2. **The Constant $T$ vs. Constant $\Delta H$ Isothermal Trap:**
   * For an ideal gas undergoing an isothermal process: $\Delta T = 0 \implies \Delta U = 0$ and $\Delta H = 0$.
   * **TRAP:** For a **chemical reaction or real gas**, an isothermal process does **NOT** mean $\Delta H = 0$! Phase transitions ($        ext{H}_2        ext{O}(l) \to \text{H}_2        ext{O}(g)$ at $100^\circ\text{C}$) are isothermal, yet $\Delta H = +40.7\text{ kJ/mol}$!
3. **The Standard Formation Enthalpy Non-Zero Trap:**
   * Students routinely assume $\Delta_f H^\circ = 0$ for diamond or red phosphorus.
   * **Fact:** $\Delta_f H^\circ[\text{C}(\text{diamond})] = +1.9\text{ kJ/mol} \ne 0$. Graphite is the reference state!
   * Similarly, $\Delta_f H^\circ[\text{Br}_2(g)] = +30.9\text{ kJ/mol} \ne 0$; liquid bromine $\text{Br}_2(l)$ is the reference state.
4. **Hess's Law Formula Direction Inversion:**
   * Via Formation: $\mathbf{\Delta_r H = \sum \Delta_f H(\text{Products}) - \sum \Delta_f H(\text{Reactants})}$.
   * Via Combustion: $\mathbf{\Delta_r H = \sum \Delta_c H(\text{Reactants}) - \sum \Delta_c H(\text{Products})}$.
   * Via Bond Energy: $\mathbf{\Delta_r H = \sum \text{B.E.}(\text{Reactants}) - \sum \text{B.E.}(\text{Products})}$.
   * Confusing products and reactants across these three routes is the single most common sign error in JEE physical chemistry!