Chemistry Revision Context: Chapter 34 — Liquid Solutions and Colligative Properties


**Source:** `scraped/Coaching_Modules/Praveen FL 2023-24/.../Notes/16. Liquid Solution/FL-LIQUID SOLUTION-1.pdf`, `FL-LIQUID SOLUTION-2.pdf`, & `FL-LIQUID SOLUTION-3.pdf`  
**Extracted into:** `JEE/context/`  
**Batch:** Chemistry Physical Chemistry Core — Concentration Metrics & Interconversions, Clausius-Clapeyron Vapor Pressure Dynamics, Binary Liquid-Liquid Solutions & Raoult's Law ($P_{\text{total}} = x_A P_A^\circ + x_B P_B^\circ$), Dalton-Raoult Vapor Interconversion ($1/P_{\text{total}} = y_A/P_A^\circ + y_B/P_B^\circ$), Konovalov's Rule, Bubble Point vs. Dew Point Curves, Ideal vs. Non-Ideal Solutions (Thermodynamic Invariants $\Delta H_{\text{mix}}, \Delta V_{\text{mix}}, \Delta S_{\text{mix}}, \Delta G_{\text{mix}}$), Azeotropes (Minimum vs. Maximum Boiling Azeotropic Mixtures), Henry's Law for Gas Solubility ($p = K_H \cdot x$, Temperature & Noble Gas Trends), Colligative Properties (Relative Lowering of Vapor Pressure RLVP $\frac{P^\circ - P_s}{P_s} = \frac{n}{N}$, Ebullioscopy $\Delta T_b = K_b m$, Cryoscopy $\Delta T_f = K_f m$, and Osmotic Pressure $\pi = CRT$), Reverse Osmosis (RO) Desalination, Van 't Hoff Factor ($i$) Formulations for Dissociation ($i = 1 + (n-1)\alpha$) and Association ($i = 1 - (1 - 1/n)\beta$), and Solvent Freezing/Separation Mass Balances  
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams  


---


## 1. Concentration Metrics & Thermodynamic Solution Foundations


### 1.1 Solution Classification & Concentration Terminology
A solution is a homogeneous mixture of two or more chemically non-reacting substances whose composition can be varied within certain limits.
* **Solvent:** The component present in the largest proportion or in the same physical state as the resulting solution.
* **Solute:** The dissolved component(s) dispersed uniformly throughout the solvent.


| Concentration Term | Mathematical Definition | Units | Temperature Dependence |
| :--- | :--- | :--- | :--- |
| **Molarity ($M$)** | $M = \frac{\text{Moles of Solute}}{\text{Volume of Solution in Liters}} = \frac{w_2 \times 1000}{M_2 \times V_{\text{mL}}}$ | $\text{mol/L (M)}$ | **Temperature Dependent** (Volume expands with $T$) |
| **Molality ($m$)** | $m = \frac{\text{Moles of Solute}}{\text{Mass of Solvent in kg}} = \frac{w_2 \times 1000}{M_2 \times W_1\text{ (g)}}$ | $\text{mol/kg (m)}$ | **Temperature Independent** (Mass is invariant) |
| **Normality ($N$)** | $N = \frac{\text{Gram Equivalents of Solute}}{\text{Volume of Solution in Liters}} = M \times n\text{-factor}$ | $\text{eq/L (N)}$ | **Temperature Dependent** |
| **Mole Fraction ($x$)**| $x_A = \frac{n_A}{n_A + n_B}, \quad x_B = \frac{n_B}{n_A + n_B} \quad (x_A + x_B = 1)$ | Dimensionless | **Temperature Independent** |
| **Mass Percent ($\text{\% } w/w$)** | $\text{\% } w/w = \frac{\text{Mass of Solute}}{\text{Total Mass of Solution}} \times 100$ | Dimensionless | **Temperature Independent** |
| **Volume Percent ($\text{\% } v/v$)**| $\text{\% } v/v = \frac{\text{Volume of Solute}}{\text{Total Volume of Solution}} \times 100$ | Dimensionless | **Temperature Dependent** |
| **Mass/Volume ($\text{\% } w/v$)**| $\text{\% } w/v = \frac{\text{Mass of Solute (g)}}{\text{Volume of Solution (mL)}} \times 100 = M \times \frac{M_2}{10}$ | $\text{g/100 mL}$ | **Temperature Dependent** |
| **Parts Per Million (ppm)**| $\text{ppm} = \frac{\text{Mass of Solute}}{\text{Total Mass of Solution}} \times 10^6$ | Dimensionless | **Temperature Independent** |


### 1.2 High-Yield Interconversion Formulas
1. **Molality from Molarity and Solution Density ($d$ in $\text{g/mL}$):**
   $$\mathbf{m = \frac{1000 \cdot M}{1000 \cdot d - M \cdot M_2}}$$
   where $M_2$ is the molar mass of the solute in $\text{g/mol}$.
2. **Molality from Mole Fraction of Solute ($x_2$):**
   $$\mathbf{m = \frac{1000 \cdot x_2}{(1 - x_2) \cdot M_1}}$$
   where $M_1$ is the molar mass of the solvent in $\text{g/mol}$.


---


## 2. Vapor Pressure of Liquids & Raoult's Law for Binary Solutions


### 2.1 Dynamic Vapor-Liquid Equilibrium & Clausius-Clapeyron Law
* **Vapor Pressure:** The pressure exerted by the vapor in thermodynamic dynamic equilibrium with its liquid phase at a specified temperature in a closed container:
  $$\text{Rate of Evaporation} = \text{Rate of Condensation}$$
* **Temperature Dependence (Clausius-Clapeyron Equation):**
  $$\mathbf{\ln\left(\frac{P_2}{P_1}\right) = \frac{\Delta H_{\text{vap}}}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right) = \frac{\Delta H_{\text{vap}}}{2.303 R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)}$$


---


### 2.2 Visual Preservation: Raoult's Law & Non-Ideal Deviations


![Raoults Law Ideal vs Non-Ideal Deviations](/media/raoults_law_ideal_vs_nonideal_deviations.webp)
*Description: Two-panel phase diagram and deviation analysis: (A) Ideal binary solution vapor pressure diagram plotting total pressure $P_{\mathrm{total}} = x_A P_A^\circ + x_B P_B^\circ$ (linear Bubble Point curve) against liquid composition and the non-linear Dew Point curve against vapor composition, demonstrating the liquid-vapor two-phase envelope; (B) Comparative vapor pressure plots for positive deviations (+ve, $P_{\mathrm{obs}} > P_{\mathrm{ideal}}$, minimum boiling azeotrope) and negative deviations (-ve, $P_{\mathrm{obs}} < P_{\mathrm{ideal}}$, maximum boiling azeotrope) relative to the Raoult's Law baseline.*


---


### 2.3 Raoult's Law for Volatile Binary Liquid Mixtures
For a binary mixture of two mutually miscible volatile liquids $A$ and $B$:
* **Partial Vapor Pressures (Liquid Phase):**
  $$P_A = x_A P_A^\circ, \quad P_B = x_B P_B^\circ$$
* **Total Vapor Pressure (Bubble Point Line):**
  $$\mathbf{P_{\text{total}} = P_A + P_B = x_A P_A^\circ + x_B P_B^\circ = P_A^\circ + (P_B^\circ - P_A^\circ)x_B}$$
  A plot of $P_{\text{total}}$ vs $x_B$ is a **straight line** connecting $P_A^\circ$ ($x_B = 0$) to $P_B^\circ$ ($x_B = 1$).
* **Vapor Phase Composition (Dalton's Law):**
  Let $y_A$ and $y_B$ be the mole fractions of $A$ and $B$ in the vapor phase ($y_A + y_B = 1$):
  $$P_A = y_A P_{\text{total}}, \quad P_B = y_B P_{\text{total}}$$
  Equating partial pressures from both phases:
  $$y_A = \frac{x_A P_A^\circ}{P_{\text{total}}}, \quad y_B = \frac{x_B P_B^\circ}{P_{\text{total}}}$$
* **Total Pressure as a Function of Vapor Composition (Dew Point Curve):**
  $$\frac{y_A}{P_A^\circ} = \frac{x_A}{P_{\text{total}}}, \quad \frac{y_B}{P_B^\circ} = \frac{x_B}{P_{\text{total}}}$$
  Adding both equations since $x_A + x_B = 1$:
  $$\mathbf{\frac{1}{P_{\text{total}}} = \frac{y_A}{P_A^\circ} + \frac{y_B}{P_B^\circ}}$$
* **Konovalov's Rule:** The vapor phase in equilibrium with an ideal liquid solution is **always richer in the more volatile component** (the component with higher pure vapor pressure):
  $$\text{If } P_A^\circ > P_B^\circ \implies \frac{y_A}{y_B} > \frac{x_A}{x_B} \implies \mathbf{y_A > x_A}$$


### 2.4 Pressure Envelopes: First Bubble & Last Drop Calculations
* **First Bubble of Vapor Forms (Bubble Point Pressure):**
  The liquid composition remains virtually identical to the initial mole fractions ($x_{A,0}, x_{B,0}$):
  $$P_{\text{bubble}} = x_{A,0} P_A^\circ + x_{B,0} P_B^\circ$$
  The composition of this initial trace bubble is:
  $$y_A = \frac{x_{A,0} P_A^\circ}{P_{\text{bubble}}}, \quad y_B = \frac{x_{B,0} P_B^\circ}{P_{\text{bubble}}}$$
* **Last Drop of Liquid Condenses / Vaporizes (Dew Point Pressure):**
  The entire system is converted into vapor; hence vapor mole fractions equal the initial overall composition ($y_A = x_{A,0}, y_B = x_{B,0}$):
  $$\frac{1}{P_{\text{dew}}} = \frac{x_{A,0}}{P_A^\circ} + \frac{x_{B,0}}{P_B^\circ} \implies P_{\text{dew}} = \frac{P_A^\circ P_B^\circ}{x_{A,0} P_B^\circ + x_{B,0} P_A^\circ}$$
* **Phase Boundaries:**
  * For $P > P_{\text{bubble}}$: System is **completely liquid**.
  * For $P_{\text{dew}} < P < P_{\text{bubble}}$: **Liquid and vapor coexist** in equilibrium.
  * For $P < P_{\text{dew}}$: System is **completely vapor**.


---


## 3. Ideal vs. Non-Ideal Solutions & Azeotropic Mixtures


### 3.1 Comprehensive Comparison Matrix


| Property | Ideal Solution | Non-Ideal (+ve Deviation) | Non-Ideal (-ve Deviation) |
| :--- | :--- | :--- | :--- |
| **Intermolecular Forces** | $F_{A-B} \approx F_{A-A} \approx F_{B-B}$ | $F_{A-B} < F_{A-A}, F_{B-B}$ (Weaker attraction) | $F_{A-B} > F_{A-A}, F_{B-B}$ (Stronger attraction / H-bonds) |
| **Raoult's Law Behavior** | $P_{\text{total}} = P_A^\circ x_A + P_B^\circ x_B$ | $P_{\text{obs}} > P_{\text{ideal}}$ ($P_A > x_A P_A^\circ$) | $P_{\text{obs}} < P_{\text{ideal}}$ ($P_A < x_A P_A^\circ$) |
| **Enthalpy of Mixing** | $\mathbf{\Delta H_{\text{mix}} = 0}$ | $\mathbf{\Delta H_{\text{mix}} > 0}$ (Endothermic, cooling) | $\mathbf{\Delta H_{\text{mix}} < 0}$ (Exothermic, heating) |
| **Volume of Mixing** | $\mathbf{\Delta V_{\text{mix}} = 0}$ | $\mathbf{\Delta V_{\text{mix}} > 0}$ (Volume expansion) | $\mathbf{\Delta V_{\text{mix}} < 0}$ (Volume contraction) |
| **Entropy of Mixing** | $\mathbf{\Delta S_{\text{mix}} > 0}$ (Spontaneous) | $\mathbf{\Delta S_{\text{mix}} > 0}$ (Spontaneous) | $\mathbf{\Delta S_{\text{mix}} > 0}$ (Spontaneous) |
| **Gibbs Free Energy** | $\mathbf{\Delta G_{\text{mix}} < 0}$ (Spontaneous) | $\mathbf{\Delta G_{\text{mix}} < 0}$ (Spontaneous) | $\mathbf{\Delta G_{\text{mix}} < 0}$ (Spontaneous) |
| **Azeotrope Formed** | None (Separable by fractional dist.) | **Minimum Boiling Azeotrope** | **Maximum Boiling Azeotrope** |
| **Standard Examples** | • Benzene + Toluene<br>• n-Hexane + n-Heptane<br>• Chlorobenzene + Bromobenzene<br>• Ethyl bromide + Ethyl iodide | • Ethanol + Water<br>• Ethanol + Acetone<br>• $\text{CS}_2$ + Acetone<br>• $\text{CCl}_4$ + Benzene<br>• n-Hexane + Ethanol | • Chloroform + Acetone<br>• Chloroform + Diethyl ether<br>• $\text{HNO}_3$ + $\text{H}_2\text{O}$<br>• $\text{HCl}$ + $\text{H}_2\text{O}$<br>• Acetic acid + Pyridine |


### 3.2 Azeotropes (Azeotropic Mixtures)
* **Definition:** A constant-boiling binary liquid mixture that distills without change in composition ($x_A = y_A, x_B = y_B$) and boils at a constant, fixed temperature like a pure chemical compound.
* **Separation Limit:** The components of an azeotrope **cannot be separated by fractional distillation**.
1. **Minimum Boiling Azeotrope:**
   * Formed by non-ideal solutions showing **large positive deviation**.
   * The total vapor pressure passes through a maximum; consequently, the boiling point passes through a **minimum**.
   * The azeotrope boils at a temperature **lower than the boiling point of either pure component**.
   * *Classic Example:* Ethanol (B.P. $78.3^\circ\text{C}$) + Water (B.P. $100^\circ\text{C}$) forms an azeotrope at 95.6% ethanol by mass with B.P. $= 78.15^\circ\text{C}$.
2. **Maximum Boiling Azeotrope:**
   * Formed by non-ideal solutions showing **large negative deviation**.
   * The total vapor pressure passes through a minimum; consequently, the boiling point passes through a **maximum**.
   * The azeotrope boils at a temperature **higher than the boiling point of either pure component**.
   * *Classic Example:* Nitric acid (B.P. $86^\circ\text{C}$) + Water (B.P. $100^\circ\text{C}$) forms an azeotrope at 68% $\text{HNO}_3$ by mass with B.P. $= 120.5^\circ\text{C}$; Hydrochloric acid (20.2% $\text{HCl}$, B.P. $108.6^\circ\text{C}$).


---


## 4. Solubility of Gases in Liquids & Henry's Law


### 4.1 Factors Influencing Gas Solubility
1. **Nature of Gas and Solvent:**
   * Polar gases ($\text{SO}_2, \text{HCl}, \text{NH}_3$) that ionize or chemically react with water exhibit exceptionally high solubility.
   * Non-polar gases ($\text{N}_2, \text{O}_2, \text{He}$) are only sparingly soluble in water but dissolve readily in non-polar solvents.
2. **Effect of Temperature:**
   * Dissolution of a gas in a liquid involves compression into the liquid phase and is an **exothermic process** ($\Delta H_{\text{sol}} < 0$).
   * By Le Chatelier's principle, **increasing temperature decreases gas solubility**:
     $$T \uparrow \implies \text{Solubility of gas } \downarrow$$
3. **Effect of Pressure (Henry's Law):**
   * Increasing partial pressure of gas forces more gas molecules across the surface into solution:
     $$P \uparrow \implies \text{Solubility of gas } \uparrow$$


### 4.2 Henry's Law Formulations
At a constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas over the solution:
$$\mathbf{p = K_H \cdot x}$$
where $p$ is the partial pressure of the gas, $x$ is the mole fraction of dissolved gas, and $K_H$ is **Henry's Law constant** (expressed in units of pressure: $\text{bar, atm, or torr}$).
* **Significance of $K_H$ (Critical JEE Invariants):**
  * At a given pressure, **higher $K_H$ implies lower gas solubility**:
    $$K_H \uparrow \implies \text{Solubility } x \downarrow$$
  * Since gas solubility decreases with rising temperature, **$K_H$ increases with temperature**:
    $$T \uparrow \implies K_H \uparrow$$
    *Biological Consequence:* Aquatic life (fishes) thrives better in cold water than warm water because dissolved oxygen concentration is significantly higher at lower temperatures.
  * **Noble Gas Solubility Sequence:**
    At $298\text{ K}$, $K_H$ values follow:
    $$K_H(\text{He}) > K_H(\text{Ne}) > K_H(\text{Ar}) > K_H(\text{Kr}) > K_H(\text{Xe})$$
    Therefore, the solubility in water increases down the group:
    $$\mathbf{\text{He} < \text{Ne} < \text{Ar} < \text{Kr} < \text{Xe}}$$
* **Limitations of Henry's Law:**
  Henry's law holds strictly when:
  1. Pressure is moderate (not extremely high).
  2. Temperature is not too low.
  3. The gas does not chemically combine with the solvent or dissociate into ions ($\text{NH}_3$ and $\text{HCl}$ in water do not obey Henry's Law).


---


## 5. Colligative Properties of Dilute Solutions


Colligative properties are thermodynamic properties of dilute solutions containing non-volatile solutes that **depend strictly on the number of solute particles (concentration/molality)** and are completely independent of the chemical identity or size of the solute particles.
The four fundamental colligative properties are:
1. Relative Lowering of Vapor Pressure (RLVP)
2. Elevation of Boiling Point ($\Delta T_b$, Ebullioscopy)
3. Depression of Freezing Point ($\Delta T_f$, Cryoscopy)
4. Osmotic Pressure ($\pi$)


---


### 5.1 Visual Preservation: Phase Equilibrium & Cryoscopy/Ebullioscopy


![Colligative Properties Vapor Pressure Ebullioscopy Cryoscopy](/media/colligative_properties_vapor_pressure_ebullioscopy_cryoscopy.webp)
*Description: Two-panel colligative thermodynamics graphic: (A) Phase equilibrium curves ($P$ vs $T$) displaying the downward vapor pressure displacement of a solution relative to pure liquid solvent, illustrating the geometric origin of boiling point elevation $\Delta T_b$ at $1\text{ atm}$ and freezing point depression $\Delta T_f$ at the solid-liquid intersection; (B) Formulations and theoretical solvent constants ($K_b$ and $K_f$) based on latent heats of vaporization and fusion.*


---


### 5.2 Relative Lowering of Vapor Pressure (RLVP)
When a non-volatile solute is added to a volatile solvent, solute particles occupy surface sites, reducing the escaping tendency of solvent molecules:
$$P_s = x_1 P^\circ = (1 - x_2) P^\circ \implies P^\circ - P_s = x_2 P^\circ$$
where $P^\circ$ is pure solvent vapor pressure, $P_s$ is solution vapor pressure, and $x_2$ is solute mole fraction.
* **Standard Raoult's Formulation:**
  $$\mathbf{\text{RLVP} = \frac{P^\circ - P_s}{P^\circ} = x_2 = \frac{n_2}{n_1 + n_2}}$$
* **Coaching Shortcut for Dilute and Concentrated Solutions:**
  $$\frac{P^\circ - P_s}{P_s} = \frac{n_2}{n_1} = \frac{w_2 \cdot M_1}{M_2 \cdot W_1} = \mathbf{\frac{m \cdot M_1}{1000}}$$
  where $m$ is molality and $M_1$ is solvent molar mass in $\text{g/mol}$.


### 5.3 Elevation of Boiling Point ($\Delta T_b$, Ebullioscopy)
* **Boiling Point:** The temperature at which the vapor pressure of a liquid equals external atmospheric pressure ($1\text{ atm}$).
* Because a non-volatile solute lowers vapor pressure, the solution must be heated to a higher temperature to reach $1\text{ atm}$:
  $$\mathbf{\Delta T_b = T_b - T_b^\circ = K_b \cdot m}$$
  where $T_b$ is the boiling point of solution, $T_b^\circ$ is that of pure solvent, and $K_b$ is the **molal boiling point elevation constant (ebullioscopic constant)**:
  $$\mathbf{K_b = \frac{R (T_b^\circ)^2 M_1}{1000 \cdot \Delta H_{\text{vap}}} = \frac{R (T_b^\circ)^2}{1000 \cdot L_v}}$$
  where $L_v$ is latent heat of vaporization per gram ($L_v = \Delta H_{\text{vap}}/M_1$).
  * For water: $K_b = 0.52\text{ K}\cdot\text{kg/mol}$.


### 5.4 Depression of Freezing Point ($\Delta T_f$, Cryoscopy)
* **Freezing Point:** The temperature at which the vapor pressure of the liquid phase equals the vapor pressure of its solid phase.
* Because the solution vapor pressure curve intersects the solid sublimation curve at a lower temperature:
  $$\mathbf{\Delta T_f = T_f^\circ - T_f = K_f \cdot m}$$
  where $T_f^\circ$ is the freezing point of pure solvent, $T_f$ is that of solution, and $K_f$ is the **molal freezing point depression constant (cryoscopic constant)**:
  $$\mathbf{K_f = \frac{R (T_f^\circ)^2 M_1}{1000 \cdot \Delta H_{\text{fus}}} = \frac{R (T_f^\circ)^2}{1000 \cdot L_f}}$$
  where $L_f$ is latent heat of fusion per gram ($L_f = \Delta H_{\text{fus}}/M_1$).
  * For water: $K_f = 1.86\text{ K}\cdot\text{kg/mol}$.
  * For benzene: $K_f = 5.12\text{ K}\cdot\text{kg/mol}$.
* **Solvent Separation / Freezing Problem:**
  When an aqueous solution is cooled below $T_f$, pure ice crystallizes out. As ice freezes, the remaining liquid becomes more concentrated (molality increases), depressing the freezing point further until the eutectic point is reached.
  $$m_{\text{new}} = \frac{\Delta T_{f, \text{target}}}{K_f} = \frac{n_2}{W_{\text{solvent, remaining}}}$$
  $$\mathbf{\text{Mass of Ice Frozen} = W_{\text{initial solvent}} - W_{\text{solvent, remaining}}}$$


---


## 6. Osmosis, Osmotic Pressure ($\pi$) & Reverse Osmosis


### 6.1 Osmosis vs. Osmotic Pressure
* **Osmosis:** The spontaneous net flow of solvent molecules from a region of lower solute concentration (pure solvent) to higher solute concentration across a **semi-permeable membrane (SPM)**.
  * SPM allows passage of solvent molecules but blocks larger solute particles (e.g., cellophane, parchment paper, synthetic copper ferrocyanide $\text{Cu}_2[\text{Fe}(\text{CN})_6]$).
* **Osmotic Pressure ($\pi$):** The exact hydrostatic pressure that must be applied to the solution compartment to completely arrest the inward osmotic migration of solvent molecules:
  $$\mathbf{\pi = C R T = \frac{n}{V} R T = \frac{w_2}{M_2 \cdot V} R T}$$
  where $C$ is molarity in $\text{mol/L}$, $R = 0.0821\text{ L}\cdot\text{atm/(mol}\cdot\text{K)}$, and $V$ is volume in liters.


---


### 6.2 Visual Preservation: Osmosis, Reverse Osmosis & Van 't Hoff Factor


![Osmosis Reverse Osmosis and Van t Hoff Factor](/media/osmosis_reverse_osmosis_and_van_t_hoff_factor.webp)
*Description: Two-panel osmosis and ionic association/dissociation graphic: (A) Operating schematic of an osmotic cell with semi-permeable membrane (SPM), demonstrating normal osmosis driven by chemical potential disparity versus reverse osmosis (RO) driven by external piston pressure $P_{\mathrm{ext}} > \pi$; (B) Mathematical formulations and equilibrium relationships for the Van 't Hoff factor $i$ under dissociation ($i > 1$) and dimerization/association ($i < 1$).*


---


### 6.3 Reverse Osmosis (RO) & Desalination
* When an external mechanical pressure greater than the osmotic pressure ($P_{\text{ext}} > \pi$) is exerted upon the solution, the natural osmotic flow is **reversed**.
* Solvent molecules are driven backward from the concentrated solution through the SPM into the pure solvent chamber.
* **Industrial Application:** Desalination of seawater using cellulose acetate membranes supported on porous substrates.


### 6.4 Solution Tonicity
* **Isotonic Solutions:** Two solutions having identical osmotic pressures at the same temperature ($\pi_1 = \pi_2 \implies C_1 = C_2$). No net osmosis occurs across an SPM.
  * $0.9\%\text{ (w/v) } \text{NaCl}$ solution (normal saline) is isotonic with human red blood cell fluid.
* **Hypertonic Solution:** A solution with higher osmotic pressure ($\pi_{\text{ext}} > \pi_{\text{cell}}$). RBC placed in $>0.9\%\text{ NaCl}$ loses water and shrinks (**Plasmolysis / Crenation**).
* **Hypotonic Solution:** A solution with lower osmotic pressure ($\pi_{\text{ext}} < \pi_{\text{cell}}$). RBC placed in $<0.9\%\text{ NaCl}$ absorbs water, swells, and bursts (**Hemolysis**).


### 6.5 Superiority of Osmotic Pressure for Macromolecules
Osmotic pressure measurement is preferred over $\Delta T_b, \Delta T_f$, and RLVP for determining the molar masses of **polymers, proteins, and biomolecules** because:
1. Measurements are conducted at ambient room temperature, preventing thermal decomposition or denaturation of proteins.
2. Even at extremely dilute concentrations ($10^{-3}\text{ to } 10^{-4}\text{ M}$), osmotic pressure produces substantial, readily measurable liquid column heights ($h = \pi/\rho g$), whereas $\Delta T_f$ and $\Delta T_b$ are negligibly small ($10^{-3\,\circ}\text{C}$).


---


## 7. Abnormal Molar Masses & Van 't Hoff Factor ($i$)


### 7.1 Concept of Van 't Hoff Factor
When a solute undergoes dissociation (electrolytes) or association (hydrogen-bonded species) in solution, the number of particles differs from the moles of substance dissolved:
$$\mathbf{i = \frac{\text{Observed Colligative Property}}{\text{Theoretical Colligative Property}} = \frac{\text{Actual Total Moles of Particles}}{\text{Moles of Solute Initially Dissolved}} = \frac{M_{\text{theoretical}}}{M_{\text{observed}}}}$$


### 7.2 Degree of Dissociation ($\alpha$) and $i$ ($i > 1$)
For an electrolyte $A_n$ producing $n$ ions per formula unit:
$$A_n \rightleftharpoons n B$$
Initial: $1$ mole $\quad$ At equilibrium: $1 - \alpha$ and $n\alpha$
$$\text{Total particles} = (1 - \alpha) + n\alpha = 1 + (n - 1)\alpha$$
$$\mathbf{i = 1 + (n - 1)\alpha \iff \alpha = \frac{i - 1}{n - 1}}$$


| Electrolyte | Ionization Scheme | $n$ | $i$ at $\alpha = 1$ ($100\%$ dissociation) |
| :--- | :--- | :--- | :--- |
| $\text{NaCl}, \text{KCl}, \text{MgSO}_4$ | $M^+ + X^-$ | $2$ | $i = 1 + (2-1)(1) = \mathbf{2}$ |
| $\text{BaCl}_2, \text{CaCl}_2, \text{Na}_2\text{SO}_4$ | $M^{2+} + 2X^-$ | $3$ | $i = 1 + (3-1)(1) = \mathbf{3}$ |
| $\text{AlCl}_3, \text{FeCl}_3, \text{K}_3[\text{Fe}(\text{CN})_6]$ | $M^{3+} + 3X^-$ | $4$ | $i = 1 + (4-1)(1) = \mathbf{4}$ |
| $\text{K}_4[\text{Fe}(\text{CN})_6]$ | $4\text{K}^+ + [\text{Fe}(\text{CN})_6]^{4-}$ | $5$ | $i = 1 + (5-1)(1) = \mathbf{5}$ |
| $\text{Al}_2(\text{SO}_4)_3$ | $2\text{Al}^{3+} + 3\text{SO}_4^{2-}$ | $5$ | $i = 1 + (5-1)(1) = \mathbf{5}$ |


### 7.3 Degree of Association ($\beta$) and $i$ ($i < 1$)
When $n$ solute molecules associate into a single aggregate:
$$n A \rightleftharpoons A_n$$
Initial: $1$ mole $\quad$ At equilibrium: $1 - \beta$ and $\frac{\beta}{n}$
$$\text{Total particles} = 1 - \beta + \frac{\beta}{n} = 1 + \left(\frac{1}{n} - 1\right)\beta$$
$$\mathbf{i = 1 - \left(1 - \frac{1}{n}\right)\beta \iff \beta = \frac{1 - i}{1 - 1/n}}$$
* **Dimerization ($n = 2$):**
  Carboxylic acids ($\text{CH}_3\text{COOH}, \text{C}_6\text{H}_5\text{COOH}$) and phenol in non-polar solvents (benzene, toluene) form cyclic intermolecular hydrogen-bonded dimers:
  $$\mathbf{i = 1 - 0.5\beta}$$
  * For complete dimerization ($\beta = 1$): $i = 0.5$, and $M_{\text{observed}} = 2 \times M_{\text{normal}}$.


### 7.4 Summary of Colligative Formulas Incorporating $i$
1. **Relative Lowering of Vapor Pressure:**
   $$\mathbf{\frac{P^\circ - P_s}{P_s} = i \cdot \frac{n_2}{n_1} = i \cdot \frac{m \cdot M_1}{1000}}$$
2. **Elevation of Boiling Point:**
   $$\mathbf{\Delta T_b = i \cdot K_b \cdot m}$$
3. **Depression of Freezing Point:**
   $$\mathbf{\Delta T_f = i \cdot K_f \cdot m}$$
4. **Osmotic Pressure:**
   $$\mathbf{\pi = i \cdot C R T}$$


---


## 8. High-Yield JEE Problem Archetypes & Traps


### Archetype 1: Fractional Distillation & Successive Vaporization
* **Problem:** An equimolar ideal liquid mixture of $A$ ($P_A^\circ = 80\text{ torr}$) and $B$ ($P_B^\circ = 40\text{ torr}$) is subjected to distillation. The initial vapors are completely condensed to form a distillate liquid. Find the vapor pressure of this distillate liquid and the composition of its equilibrium vapors at the same temperature.
* **Solution:**
  * Original liquid mixture: $x_{A,0} = 0.5, x_{B,0} = 0.5$.
  * Total vapor pressure of original liquid:
    $$P_{\text{tot, 1}} = (0.5)(80) + (0.5)(40) = 40 + 20 = 60\text{ torr}$$
  * Composition of first vapor phase:
    $$y_A = \frac{x_A P_A^\circ}{P_{\text{tot}}} = \frac{40}{60} = \frac{2}{3}, \quad y_B = \frac{20}{60} = \frac{1}{3}$$
  * Condensing these vapors gives distillate liquid with:
    $$x_A' = \frac{2}{3}, \quad x_B' = \frac{1}{3}$$
  * Vapor pressure of the distillate liquid:
    $$P_{\text{tot, 2}} = x_A' P_A^\circ + x_B' P_B^\circ = \left(\frac{2}{3}\right)(80) + \left(\frac{1}{3}\right)(40) = \frac{160 + 40}{3} = \frac{200}{3} = 66.67\text{ torr}$$
  * Composition of vapors over distillate:
    $$y_A' = \frac{x_A' P_A^\circ}{P_{\text{tot, 2}}} = \frac{160/3}{200/3} = \frac{160}{200} = 0.80$$
    $$y_B' = 1 - 0.80 = 0.20$$
  * *JEE Rule:* Successive distillation steps progressively enrich the vapor in the more volatile component ($0.50 \to 0.67 \to 0.80$).


### Archetype 2: Mass of Ice Separated on Sub-Zero Cooling
* **Problem:** $0.5\text{ moles}$ of a non-volatile solute are dissolved in $1\text{ kg}$ of water. The solution is cooled to $-3.5^\circ\text{C}$. Calculate the mass of ice that separates out ($K_f = 1.86\text{ K}\cdot\text{kg/mol}$).
* **Solution:**
  * Freezing point depression: $\Delta T_f = 0 - (-3.5) = 3.5^\circ\text{C}$.
  * At $-3.5^\circ\text{C}$, the remaining liquid solution must have molality $m'$ satisfying:
    $$\Delta T_f = K_f \cdot m' \implies 3.5 = 1.86 \cdot m' \implies m' = \frac{3.5}{1.86} = 1.8817\text{ mol/kg}$$
  * Molality definition for remaining solvent mass $W_1'$ (in kg):
    $$m' = \frac{n_2}{W_1'} \implies W_1' = \frac{n_2}{m'} = \frac{0.5}{1.8817} = 0.2657\text{ kg} = 265.7\text{ g}$$
  * Mass of ice separated:
    $$\mathbf{W_{\text{ice}} = 1000\text{ g} - 265.7\text{ g} = 734.3\text{ g}}$$


### Archetype 3: Degree of Association from Freezing Point Depression
* **Problem:** $2.0\text{ g}$ of phenol ($\text{C}_6\text{H}_5\text{OH}$, $M = 94\text{ g/mol}$) dissolved in $100\text{ g}$ of benzene depresses the freezing point by $0.69\text{ K}$. Given $K_f(\text{benzene}) = 5.12\text{ K}\cdot\text{kg/mol}$, calculate the percentage dimerization of phenol in benzene.
* **Solution:**
  * Theoretical molality:
    $$m = \frac{2.0 \times 1000}{94 \times 100} = \frac{20}{94} = 0.2128\text{ mol/kg}$$
  * Theoretical $\Delta T_f$:
    $$\Delta T_{f, \text{theo}} = K_f \cdot m = 5.12 \times 0.2128 = 1.0894\text{ K}$$
  * Van 't Hoff factor $i$:
    $$i = \frac{\Delta T_{f, \text{obs}}}{\Delta T_{f, \text{theo}}} = \frac{0.69}{1.0894} = 0.6334$$
  * For dimerization ($2\text{C}_6\text{H}_5\text{OH} \rightleftharpoons (\text{C}_6\text{H}_5\text{OH})_2$, $n = 2$):
    $$i = 1 - 0.5\beta \implies 0.5\beta = 1 - 0.6334 = 0.3666$$
    $$\beta = 2 \times 0.3666 = 0.7332$$
  * **Percentage Dimerization:**
    $$\mathbf{\% \text{ Dimerization} = 73.3\%}$$