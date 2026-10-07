Chemistry Revision Context: Chapter 70 — Real Gases, Liquefaction & Non-Ideal State Thermodynamics


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/CHEMISTRY/Real Gases/`, `Real_Gases_Th_E_7k7YnlI.pdf`, `Real_Gases_Ex_E_vjCYaDX.pdf`, and `Real_gas_Exercise_ResoSir_pdf.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Physical Chemistry Core — Molecular Deviations from Ideal Gas Behavior, Compressibility Factor ($Z = \frac{PV_m}{RT} = \frac{V_{\text{real}}}{V_{\text{ideal}}}$), Regimes of $Z$ ($Z < 1$ Attraction vs. $Z > 1$ Repulsion), Hydrogen & Helium Positive Deviation Invariants, The van der Waals Equation of State ($\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT$), Physical Signification & Dimensional Units of van der Waals Constants ($a \implies \text{Intermolecular Cohesion}$, $b \implies 4 N_A V_{\text{molecule}}$ Co-volume), Limiting Regimes (Low Pressure $Z = 1 - \frac{a}{V_m RT}$, High Pressure $Z = 1 + \frac{Pb}{RT}$), Andrews Isotherms of $\text{CO}_2$, Continuity of State, The Critical State & Inflection Criteria ($\left(\frac{\partial P}{\partial V_m}\right)_{T_c} = 0, \; \left(\frac{\partial^2 P}{\partial V_m^2}\right)_{T_c} = 0$), Exact Derivation of Critical Constants ($V_c = 3b, \; P_c = \frac{a}{27b^2}, \; T_c = \frac{8a}{27Rb}$), Universal Critical Compressibility Factor ($Z_c = \frac{3}{8} = 0.375$), Boyle's Temperature ($T_B = \frac{a}{Rb} = 3.375 T_c$), Virial Equation of State ($Z = 1 + \frac{B(T)}{V_m} + \frac{C(T)}{V_m^2} + \dots$, Second Virial Coefficient $B(T) = b - \frac{a}{RT}$), Joule-Thomson Expansion & Inversion Temperature ($T_i = \frac{2a}{Rb} = 2 T_B = 6.75 T_c$, Heating vs. Cooling Regimes for $\text{H}_2/\text{He}$), Law of Corresponding States (Universal Reduced Equation $\left(P_r + \frac{3}{V_r^2}\right)(3V_r - 1) = 8T_r$), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Deviations from Ideality & Compressibility Factor ($Z$)


### 1.1 Kinetic Molecular Theory Failures & Real Gas Deviations


The classical Ideal Gas Equation ($PV = nRT$) is derived under two fundamental assumptions of the Kinetic Molecular Theory of Gases (KMT):
1. The volume occupied by gaseous molecules is negligible compared to the total volume of the container ($V_{\text{molecules}} \ll V_{\text{container}}$).
2. Intermolecular attractive and repulsive forces between gaseous molecules are completely non-existent ($F_{\text{attraction}} = 0$).


**Experimental Reality:**
* At high pressures, gas molecules are forced closely together, so the volume occupied by the molecules themselves becomes significant and cannot be neglected.
* At low temperatures, kinetic energies decrease, and intermolecular attractive forces become substantial, leading to condensation and liquefaction (which is completely impossible for an ideal gas).


---


### 1.2 The Compressibility Factor ($Z$)


The extent of deviation of a real gas from ideal gas behavior is quantitatively measured by the **Compressibility Factor ($Z$)**:


$$\mathbf{Z = \frac{PV}{nRT} = \frac{PV_m}{RT} = \frac{V_{m, \text{real}}}{V_{m, \text{ideal}}}}$$


where $V_m = V/n$ is the molar volume, and $V_{m, \text{ideal}} = \frac{RT}{P}$.


![Compressibility Factor Pressure and Temperature Landscapes](/media/compressibility_factor_pressure_and_temperature_landscapes.webp)
*Description: Two-panel real gas behavioral reference: (Panel A) Compressibility factor $Z$ vs. $P$ for diverse gases ($        ext{H}_2,         ext{He},         ext{N}_2,         ext{CH}_4,         ext{CO}_2$) at $273        ext{ K}$ illustrating the attractive dip ($Z < 1$) and repulsive climb ($Z > 1$); (Panel B) Temperature evolution of $Z$ vs. $P$ for a single real gas, highlighting the flat tangency at Boyle's temperature $T_B = a/Rb$.*


1. **For an Ideal Gas:**
   $$\mathbf{Z = 1 \quad (\text{at all temperatures and pressures})}$$


2. **Negative Deviation ($Z < 1$):**
   * Observed at low-to-moderate pressures for most gases ($\text{CH}_4, \text{CO}_2, \text{NH}_3, \text{O}_2, \text{N}_2$).
   * **Physical Interpretation:** Attractive intermolecular forces dominate over repulsive forces. Molecules pull each other inward, striking the container walls with reduced momentum $\implies P_{\text{real}} < P_{\text{ideal}}$.
   * **Molar Volume:** $V_{m, \text{real}} < V_{m, \text{ideal}}$ (The gas is **more compressible** than an ideal gas).


3. **Positive Deviation ($Z > 1$):**
   * Observed at high pressures for all real gases, and at **all pressures** for $\text{H}_2$ and $\text{He}$ at ambient temperatures.
   * **Physical Interpretation:** Molecular volume and repulsive forces dominate. Molecules resist compression $\implies V_{m, \text{real}} > V_{m, \text{ideal}}$.
   * The gas is **less compressible** than an ideal gas.


4. **The Extraordinary Case of Hydrogen ($\text{H}_2$) and Helium ($\text{He}$):**
   Due to their extremely small molecular mass and non-polar nature, dispersion forces are minuscule ($a \approx 0$). Consequently, **$Z > 1$ at all pressures at $0^\circ\text{C}$**, exhibiting a strictly positive slope without any initial dip below unity.


---


## 2. The van der Waals Equation of State


In 1873, Johannes Diderik van der Waals introduced corrections to both the pressure and volume terms of the ideal gas equation.


### 2.1 Molecular Volume Correction (Co-Volume $b$)


Real gas molecules possess a finite incompressible volume. Therefore, the actual free volume available for molecular motion ($V_{\text{free}}$) is less than the container volume ($V$):


$$V_{\text{ideal}} = V_{\text{free}} = V - nb$$


where $b$ is the **van der Waals constant of volume** (also called **co-volume** or **excluded volume per mole**).


* **Derivation of Co-Volume ($b$):**
  Consider two spherical gas molecules of radius $r$. The center of one molecule cannot approach the center of the other closer than a distance of $2r$:
  $$\text{Excluded volume for a pair of molecules} = \frac{4}{3}\pi (2r)^3 = 8 \times \left( \frac{4}{3}\pi r^3 \right) = 8 V_{\text{molecule}}$$
  $$\text{Excluded volume per individual molecule} = \frac{1}{2} \left( 8 V_{\text{molecule}} \right) = 4 V_{\text{molecule}} = 4 \times \left( \frac{4}{3}\pi r^3 \right)$$
  For one mole ($N_A$ molecules):
  $$\mathbf{b = 4 N_A V_{\text{molecule}} = 4 N_A \left( \frac{4}{3}\pi r^3 \right)}$$
  *(The excluded volume per mole is exactly FOUR TIMES the actual molecular volume).*
  * **Units of $b$:** $\mathbf{\text{L mol}^{-1} = \text{dm}^3\text{ mol}^{-1} = \text{m}^3\text{ mol}^{-1}}$.
  * $b$ is a direct physical measure of the **effective size** of the gas molecules.


---


### 2.2 Pressure Correction (Cohesive Internal Pressure $a$)


A molecule in the interior of a gas experiences isotropic (uniform) attraction from surrounding molecules, resulting in zero net force. However, as a molecule approaches the container wall, it experiences an inward net electrostatic pull from the interior molecules:
* Its velocity and momentum upon collision are reduced.
* The measured pressure ($P$) is lower than the ideal pressure ($P_{\text{ideal}}$):
  $$P_{\text{ideal}} = P + P_{\text{correction}}$$
* The inward pull depends on:
  1. The number of molecules striking the wall per unit area $\propto \frac{n}{V}$.
  2. The number of interior molecules attracting each colliding molecule $\propto \frac{n}{V}$.
  $$P_{\text{correction}} \propto \left( \frac{n}{V} \right) \times \left( \frac{n}{V} \right) = \frac{a n^2}{V^2}$$


$$\mathbf{P_{\text{ideal}} = P + \frac{an^2}{V^2} = P + \frac{a}{V_m^2}}$$


* **Units of $a$:**
  $$\mathbf{\text{atm L}^2\text{ mol}^{-2} = \text{bar dm}^6\text{ mol}^{-2} = \text{N m}^4\text{ mol}^{-2} = \text{Pa m}^6\text{ mol}^{-2}}$$
* **Physical Significance of $a$:**
  * Constant $a$ is a direct measure of the **magnitude of intermolecular attractive forces**.
  * Larger $a \implies$ stronger cohesive forces $\implies$ **higher critical temperature $\implies$ easier liquefaction**.
  * Typical ordering of $a$: $\mathbf{\text{SO}_2 > \text{NH}_3 > \text{CO}_2 > \text{CH}_4 > \text{O}_2 > \text{N}_2 > \text{H}_2 > \text{He}}$.


---


### 2.3 The Complete Equation of State


For $n$ moles of a real gas:


$$\mathbf{\left( P + \frac{an^2}{V^2} \right)(V - nb) = nRT}$$


For 1 mole of a real gas ($V_m = V/n$):


$$\mathbf{\left( P + \frac{a}{V_m^2} \right)(V_m - b) = RT}$$


---


## 3. Limiting Regimes of the van der Waals Equation


### 3.1 Case 1: Extremely Low Pressure ($P \to 0, \; V_m \to \infty$)


When pressure approaches zero, molar volume becomes extremely large ($V_m \to \infty$):
* $\frac{a}{V_m^2} \approx 0$ (molecular attraction is negligible at huge separations).
* $b \ll V_m \implies V_m - b \approx V_m$ (molecular size is negligible compared to container volume).
$$(P + 0)(V_m - 0) = RT \implies PV_m = RT \implies \mathbf{Z = 1}$$
*(Every real gas approaches ideal gas behavior at extremely low pressure).*


---


### 3.2 Case 2: Low-to-Moderate Pressure (Attractive Regime)


At moderate pressure, $V_m$ is sufficiently large that molecular volume $b$ is negligible compared to $V_m$ ($V_m - b \approx V_m$), but the pressure correction $\frac{a}{V_m^2}$ cannot be ignored:


$$\left( P + \frac{a}{V_m^2} \right) V_m = RT \implies PV_m + \frac{a}{V_m} = RT$$


Dividing throughout by $RT$:


$$\frac{PV_m}{RT} + \frac{a}{V_m RT} = 1 \implies \mathbf{Z = 1 - \frac{a}{V_m RT} < 1}$$


Substituting the ideal approximation $V_m \approx \frac{RT}{P}$:


$$\mathbf{Z \approx 1 - \frac{aP}{(RT)^2}}$$


* **Key Insights:**
  * $Z$ is strictly **less than $1$**.
  * The initial slope of the $Z$ vs. $P$ isotherm is negative:
    $$\mathbf{\lim_{P \to 0} \left( \frac{\partial Z}{\partial P} \right)_T = -\frac{a}{(RT)^2} < 0}$$
  * A larger value of $a$ produces a deeper dip in the $Z$ curve.


---


### 3.3 Case 3: High Pressure (Repulsive Regime)


At high pressure, $P$ is very large, making the attractive correction negligible compared to $P$ ($P + \frac{a}{V_m^2} \approx P$), but the co-volume $b$ is significant:


$$P(V_m - b) = RT \implies PV_m - Pb = RT$$


Dividing throughout by $RT$:


$$\frac{PV_m}{RT} - \frac{Pb}{RT} = 1 \implies \mathbf{Z = 1 + \frac{Pb}{RT} > 1}$$


* **Key Insights:**
  * $Z$ is strictly **greater than $1$** and increases linearly with pressure.
  * The slope at high pressure is positive:
    $$\mathbf{\left( \frac{\partial Z}{\partial P} \right)_T = \frac{b}{RT} > 0}$$


---


### 3.4 Case 4: Hydrogen and Helium at Normal Temperatures


For $\text{H}_2$ and $\text{He}$, the molecular masses and electron counts are so small that polarizability is negligible, making attractive forces virtually zero ($a \approx 0$):


$$\mathbf{Z = 1 + \frac{Pb}{RT} > 1 \quad (\text{at all pressures at } 273\text{ K})}$$


*(Hydrogen and Helium show only positive deviation and no dip at room temperature).*


---


## 4. Critical State & Andrews Isotherms of $        ext{CO}_2$


![Andrews Isotherms and Critical Phenomena](/media/andrews_isotherms_and_critical_phenomena.webp)
*Description: Two-panel critical state graphic: (Panel A) Andrews $P-V$ isotherms for $        ext{CO}_2$ across subcritical, critical ($T = 31.1^\circ        ext{C}$), and supercritical temperatures, illustrating the liquid-vapor coexistence dome; (Panel B) Mathematical derivation box of critical constants ($P_c, V_c, T_c, Z_c$) based on the double inflection conditions at the critical point.*


Thomas Andrews (1869) studied the $P-V$ isotherms of carbon dioxide across various temperatures:


1. **At High Temperatures ($T > T_c = 31.1^\circ\text{C}$):**
   Isotherms are smooth, continuous rectangular hyperbolas ($P \propto 1/V$), resembling ideal gas behavior. The gas **cannot be liquefied**, no matter how much pressure is applied.
2. **At Critical Temperature ($T = T_c = 31.1^\circ\text{C}$):**
   The isotherm shows a point of horizontal inflection (critical point $C$). The horizontal plateau shrinks to a single point.
3. **At Low Temperatures ($T < T_c$):**
   The isotherm consists of three distinct regions:
   * **Vapor Phase:** Sloping curve at high volumes where $\text{CO}_2$ behaves as a gas.
   * **Liquefaction Plateau:** Horizontal line where vapor and liquid coexist in equilibrium. The length of this plateau represents the volume reduction during phase transition at constant vapor pressure.
   * **Liquid Phase:** Steep, nearly vertical line at low volumes, reflecting the high incompressibility of liquid $\text{CO}_2$.


---


### 4.1 Mathematical Derivation of Critical Constants


At the critical point ($T_c, P_c, V_c$), the critical isotherm possesses a **horizontal tangent and a point of inflection**:


$$\mathbf{\left( \frac{\partial P}{\partial V_m} \right)_{T_c} = 0 \quad \text{and} \quad \left( \frac{\partial^2 P}{\partial V_m^2} \right)_{T_c} = 0}$$


From the van der Waals equation:


$$P = \frac{R T_c}{V_m - b} - \frac{a}{V_m^2}$$


1. First derivative:
   $$\left( \frac{\partial P}{\partial V_m} \right)_{T_c} = -\frac{R T_c}{(V_c - b)^2} + \frac{2a}{V_c^3} = 0 \implies \frac{R T_c}{(V_c - b)^2} = \frac{2a}{V_c^3} \quad \text{--- (Eq. 1)}$$


2. Second derivative:
   $$\left( \frac{\partial^2 P}{\partial V_m^2} \right)_{T_c} = \frac{2 R T_c}{(V_c - b)^3} - \frac{6a}{V_c^4} = 0 \implies \frac{2 R T_c}{(V_c - b)^3} = \frac{6a}{V_c^4} \quad \text{--- (Eq. 2)}$$


Dividing (Eq. 1) by (Eq. 2):


$$\frac{V_c - b}{2} = \frac{V_c}{3} \implies 3V_c - 3b = 2V_c \implies \mathbf{V_c = 3b}$$


Substituting $V_c = 3b$ back into (Eq. 1):


$$\frac{R T_c}{(3b - b)^2} = \frac{2a}{(3b)^3} \implies \frac{R T_c}{4b^2} = \frac{2a}{27b^3} \implies \mathbf{T_c = \frac{8a}{27Rb}}$$


Substituting $V_c = 3b$ and $T_c = \frac{8a}{27Rb}$ into the van der Waals equation:


$$P_c = \frac{R \left(\frac{8a}{27Rb}\right)}{3b - b} - \frac{a}{(3b)^2} = \frac{8a}{54b^2} - \frac{a}{9b^2} = \frac{4a}{27b^2} - \frac{3a}{27b^2} = \mathbf{\frac{a}{27b^2}}$$


---


### 4.2 The Critical Compressibility Factor ($Z_c$)


Substituting $P_c, V_c, T_c$ into the compressibility definition:


$$\mathbf{Z_c = \frac{P_c V_c}{R T_c} = \frac{\left( \frac{a}{27b^2} \right) (3b)}{R \left( \frac{8a}{27Rb} \right)} = \frac{3a / 27b}{8a / 27b} = \frac{3}{8} = 0.375}$$


* **Universal Constant:** For **any gas** obeying the van der Waals equation of state, $Z_c$ is identically equal to **$\frac{3}{8} = 0.375$**, completely independent of the gas identity!
* *(Experimental values for most real gases are $\sim 0.28 - 0.30$, reflecting higher-order multi-body interactions).*


---


### 4.3 Determining van der Waals Constants from Critical Data


$$\mathbf{b = \frac{V_c}{3} = \frac{R T_c}{8 P_c}}$$


$$\mathbf{a = 3 P_c V_c^2 = \frac{27 R^2 T_c^2}{64 P_c}}$$


$$\mathbf{\frac{R T_c}{P_c V_c} = \frac{8}{3} \approx 2.67}$$


---


## 5. Boyle's Temperature ($T_B$) & Inversion Temperature ($T_i$)


![Virial Equation Joule Thomson and Reduced States](/media/virial_equation_joule_thomson_and_reduced_states.webp)
*Description: Two-panel thermodynamic formulation graphic: (Panel A) Second Virial Coefficient $B(T) = b -  rac{a}{RT}$ as a function of temperature, demonstrating zero-crossing at Boyle's temperature $T_B$ and Joule-Thomson inversion temperature $T_i = 2T_B$; (Panel B) Universal reduced equation of state formulation matrix under the Law of Corresponding States.*


### 5.1 Boyle's Temperature ($T_B$)


**Definition:** The temperature at which a real gas behaves like an ideal gas over an appreciable range of pressure, obeying Boyle's law ($PV = \text{constant}$):


* **Mathematical Condition:**
  $$\mathbf{\lim_{P \to 0} \left( \frac{\partial Z}{\partial P} \right)_{T_B} = 0}$$
* From the low-pressure expansion $Z \approx 1 + \left( b - \frac{a}{RT} \right) \frac{P}{RT}$:
  $$\left( \frac{\partial Z}{\partial P} \right)_T = \frac{1}{RT} \left( b - \frac{a}{RT} \right)$$
  Setting this derivative to zero yields:
  $$b - \frac{a}{R T_B} = 0 \implies \mathbf{T_B = \frac{a}{Rb}}$$


* **Relationship between $T_B$ and $T_c$:**
  $$T_B = \frac{a}{Rb} = \frac{27}{8} \left( \frac{8a}{27Rb} \right) = \mathbf{\frac{27}{8} T_c = 3.375 T_c}$$
  * At $T = T_B$: $Z \approx 1$ over an extensive low-to-moderate pressure regime.
  * At $T > T_B$: $Z > 1$ at all pressures (repulsions dominate).
  * At $T < T_B$: $Z$ dips below $1$ first, reaches a minimum, then rises above $1$.


---


### 5.2 Joule-Thomson Effect & Inversion Temperature ($T_i$)


When a real gas under high pressure expands adiabatically through a porous plug or throttling valve into a region of low pressure:
* **The Joule-Thomson Coefficient ($\mu_{\text{JT}}$):**
  $$\mu_{\text{JT}} = \left( \frac{\partial T}{\partial P} \right)_H = \frac{1}{C_p} \left[ T \left( \frac{\partial V}{\partial T} \right)_P - V \right] \approx \frac{1}{C_p} \left( \frac{2a}{RT} - b \right)$$


1. **Inversion Temperature ($T_i$):**
   The temperature at which $\mu_{\text{JT}} = 0$ (no temperature change upon expansion):
   $$\frac{2a}{R T_i} - b = 0 \implies \mathbf{T_i = \frac{2a}{Rb} = 2 T_B = \frac{27}{4} T_c = 6.75 T_c}$$


2. **Thermodynamic Regimes:**
   * **$T < T_i$:** $\mu_{\text{JT}} > 0 \implies dP < 0$ causes **$dT < 0$ (Cooling effect)**. Gas cools on throttling. Used for industrial liquefaction (Linde process).
   * **$T > T_i$:** $\mu_{\text{JT}} < 0 \implies dP < 0$ causes **$dT > 0$ (Heating effect)**. Gas warms on throttling.
   * **$\text{H}_2$ and $\text{He}$ at Room Temperature:**
     $T_i(\text{H}_2) = 193\text{ K} (-80^\circ\text{C})$ and $T_i(\text{He}) = 33\text{ K} (-240^\circ\text{C})$. Because room temperature ($298\text{ K}$) is far **above their inversion temperatures**, $\text{H}_2$ and $\text{He}$ **HEAT UP** upon adiabatic expansion at ambient conditions! They must be pre-cooled below $T_i$ before throttling to achieve liquefaction.


---


## 6. The Virial Equation of State


The Virial Equation is a generalized, mathematically rigorous power-series expansion of the equation of state:


$$\mathbf{Z = \frac{PV_m}{RT} = 1 + \frac{B(T)}{V_m} + \frac{C(T)}{V_m^2} + \frac{D(T)}{V_m^3} + \dots}$$


where:
* $B(T)$ is the **Second Virial Coefficient** (accounts for two-body intermolecular interactions).
* $C(T)$ is the **Third Virial Coefficient** (accounts for three-body interactions).
* $D(T)$ is the **Fourth Virial Coefficient**.


---


### 6.1 Deriving Virial Coefficients from the van der Waals Equation


Expressing pressure from the van der Waals equation:


$$P = \frac{RT}{V_m - b} - \frac{a}{V_m^2} = \frac{RT}{V_m} \left( 1 - \frac{b}{V_m} \right)^{-1} - \frac{a}{V_m^2}$$


Expanding $\left( 1 - \frac{b}{V_m} \right)^{-1}$ using binomial series $(1 - x)^{-1} = 1 + x + x^2 + x^3 + \dots$:


$$P = \frac{RT}{V_m} \left( 1 + \frac{b}{V_m} + \frac{b^2}{V_m^2} + \frac{b^3}{V_m^3} + \dots \right) - \frac{a}{V_m^2}$$


Multiply by $\frac{V_m}{RT}$:


$$Z = \frac{PV_m}{RT} = 1 + \frac{b}{V_m} + \frac{b^2}{V_m^2} + \frac{b^3}{V_m^3} + \dots - \frac{a}{V_m RT}$$


Regrouping by powers of $\frac{1}{V_m}$:


$$\mathbf{Z = 1 + \left( b - \frac{a}{RT} \right) \frac{1}{V_m} + \left( b^2 \right) \frac{1}{V_m^2} + \left( b^3 \right) \frac{1}{V_m^3} + \dots}$$


* **Matching Terms with the Virial Equation:**
  * **Second Virial Coefficient:** $\mathbf{B(T) = b - \frac{a}{RT}}$.
  * **Third Virial Coefficient:** $\mathbf{C(T) = b^2}$ (strictly independent of temperature in the van der Waals model).
* **Re-evaluating Boyle's Temperature:**
  At $T = T_B$, the second virial coefficient vanishes:
  $$B(T_B) = 0 \implies b - \frac{a}{R T_B} = 0 \implies \mathbf{T_B = \frac{a}{Rb}}$$


---


## 7. The Law of Corresponding States


### 7.1 Reduced State Variables


State variables can be non-dimensionalized by expressing them as ratios with respect to their critical constants:


$$\mathbf{P_r = \frac{P}{P_c}, \quad V_r = \frac{V_m}{V_c}, \quad T_r = \frac{T}{T_c}}$$


where $P_r, V_r, T_r$ are the **Reduced Pressure, Reduced Volume, and Reduced Temperature**.


---


### 7.2 Universal Reduced Equation of State


Substitute $P = P_c P_r, \; V_m = V_c V_r, \; T = T_c T_r$ into the van der Waals equation:


$$\left( P_c P_r + \frac{a}{V_c^2 V_r^2} \right) (V_c V_r - b) = R T_c T_r$$


Substitute the critical constant relationships $P_c = \frac{a}{27b^2}, \; V_c = 3b, \; T_c = \frac{8a}{27Rb}$:


$$\left( \frac{a}{27b^2} P_r + \frac{a}{9b^2 V_r^2} \right) (3b V_r - b) = R \left( \frac{8a}{27Rb} \right) T_r$$


Factor out $\frac{a}{27b^2}$ from the first bracket and $b$ from the second:


$$\frac{a}{27b^2} \left( P_r + \frac{3}{V_r^2} \right) \cdot b (3 V_r - 1) = \frac{8a}{27b} T_r$$


$$\frac{a}{27b} \left( P_r + \frac{3}{V_r^2} \right) (3 V_r - 1) = \frac{8a}{27b} T_r$$


Canceling $\frac{a}{27b}$ from both sides:


$$\mathbf{\left( P_r + \frac{3}{V_r^2} \right) (3 V_r - 1) = 8 T_r}$$


* **The Law of Corresponding States:**
  * This reduced equation contains **NO gas-specific parameters ($a, b, R$)**!
  * **Theorem:** If any two real gases have the same reduced pressure ($P_r$) and same reduced temperature ($T_r$), they **MUST possess the identical reduced volume ($V_r$)**, regardless of their chemical identities.


---


## 8. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Inversion of Co-Volume Scaling:**
   * Co-volume $b$ is NOT equal to the molecular volume!
   * **Trap:** $b = 4 \times N_A \times \left(\frac{4}{3}\pi r^3\right)$, NOT $N_A \times \left(\frac{4}{3}\pi r^3\right)$.
2. **Critical Compressibility $Z_c$ vs. Ideal $Z$:**
   * At the critical point, a gas is NOT ideal!
   * $Z_c = \frac{P_c V_c}{R T_c} = \mathbf{0.375 = \frac{3}{8}}$, NOT $1.0$.
3. **The Joule-Thomson Heating Trap for $        ext{H}_2$ and $        ext{He}$:**
   * Expanding $\text{H}_2$ or $\text{He}$ adiabatically at room temperature causes **HEATING**, not cooling, because $T_{\text{room}} > T_i$.
4. **Liquefaction Feasibility Bound:**
   * A gas cannot be liquefied at ANY pressure if $T > T_c$.
   * To liquefy a gas, its temperature MUST be brought **below $T_c$** before compression.