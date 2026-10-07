Chemistry Revision Context: Chapter 41 — Gaseous State & Real Gas Thermodynamics


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../2. CHEMISTRY-P-I/4. Gaseous State/`, `4. GASEOUS STATE.pdf`, and `Gaseous state.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Chemistry Physical Chemistry Core — Ideal Gas Laws & State Function Mechanics (Boyle's, Charles's, Gay-Lussac's, Avogadro's Laws, Universal Gas Constant $R$ Systematics, Thermal Expansion $\alpha_P$, Isochoric Pressure Coefficient $\beta_V$, Isothermal Compressibility $\kappa_T$, Open & Closed Vessel Heating Principles, Hydrostatic Barometer & Faulty Column Calculations), Dalton's Law of Partial Pressures & Vapor Mixtures (Aqueous Tension Corrections, Relative Humidity $\text{RH}$, Amagat's Partial Volumes), Graham's Law of Diffusion & Effusion (Multi-Variable Formulation $r \propto \frac{PA}{\sqrt{MT}}$, Isotopic Enrichment Cascades, Diffusion Tube White Ring Reaction Dynamics), Kinetic Theory of Gases (Postulates, Kinetic Pressure Derivation $PV = \frac{1}{3} M u_{\text{rms}}^2$, Translational Energies, Characteristic Molecular Speeds $u_{\text{mp}} : u_{\text{avg}} : u_{\text{rms}} = \sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3} \approx 7 : 8 : 9$), Maxwell-Boltzmann Molecular Speed Distribution (Probability Density Functions, Temperature Broadening, Molar Mass Dependence), Collision Parameters & Mean Free Path ($\lambda = \frac{k_B T}{\sqrt{2}\pi \sigma^2 P}$, Collision Frequency $Z_1$ and $Z_{11}$, Temperature Invariance of $\lambda$ at Constant Volume), Real Gases & Compressibility Factor ($Z = \frac{PV_m}{RT}$, Attractive vs. Repulsive Regimes, $\text{H}_2$ and $\text{He}$ Anomalous $Z > 1$ Behavior), Van der Waals Equation of State (Rigorous Geometric Proof of Co-Volume $b = 4 V_{\text{actual}}$, Internal Pressure Parameter $a$, Low-Pressure and High-Pressure Limiting Regimes), The Virial Equation of State (Second Virial Coefficient $B(T) = b - \frac{a}{RT}$, Third Virial Coefficient $C(T) = b^2$, Boyle Temperature $T_B = \frac{a}{Rb}$), Critical Phenomena & Liquefaction of Gases (Andrew's Isotherms of $\text{CO}_2$, Inflection Point Mathematical Derivations of Critical Constants $V_c = 3b, P_c = \frac{a}{27b^2}, T_c = \frac{8a}{27Rb}$, Universal Invariant $Z_c = \frac{3}{8} = 0.375$, Joule-Thomson Adiabatic Throttling, Inversion Temperature $T_i = \frac{2a}{Rb} = 2 T_B = 6.75 T_c$), and Comprehensive High-Yield JEE Traps.


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Ideal Gas Laws & State Function Mechanics


### 1.1 The Master Equation of State & The Gas Constant ($R$)
An ideal gas is a theoretical construct obeying the equation of state:
$$\mathbf{P V = n R T = \frac{w}{M} R T \iff P M = \rho R T}$$
where:
* $P$ is pressure ($\text{Pa}, \text{N/m}^2, \text{atm}, \text{bar}, \text{Torr}, \text{mm Hg}$).
* $V$ is volume ($\text{m}^3, \text{L}, \text{dm}^3, \text{cm}^3, \text{mL}$).
* $n = w/M$ is number of moles; $\rho = w/V$ is mass density.
* $T$ is absolute thermodynamic temperature ($\text{K} = {}^\circ\text{C} + 273.15$).
* **Universal Gas Constant ($R$):**
  $$\mathbf{R = 8.314\text{ J}/(\text{mol}\cdot\text{K}) = 8.314\text{ kPa}\cdot\text{dm}^3/(\text{mol}\cdot\text{K}) = 8.314 \times 10^7\text{ erg}/(\text{mol}\cdot\text{K})}$$
  $$\mathbf{R = 0.082057 \approx 0.0821\text{ L}\cdot\text{atm}/(\text{mol}\cdot\text{K}) \approx \frac{1}{12}\text{ L}\cdot\text{atm}/(\text{mol}\cdot\text{K})}$$
  $$\mathbf{R = 0.08314\text{ L}\cdot\text{bar}/(\text{mol}\cdot\text{K}) \approx \frac{1}{12}\text{ L}\cdot\text{bar}/(\text{mol}\cdot\text{K})}$$
  $$\mathbf{R \approx 1.987 \approx 2.0\text{ cal}/(\text{mol}\cdot\text{K})}$$
* **Molar Volume of Ideal Gas at Standard States:**
  * **STP (Old IUPAC: $0^\circ\text{C} = 273.15\text{ K}$, $1\text{ atm}$):** $V_m = 22.414\text{ L/mol} \approx \mathbf{22.4\text{ L/mol}}$.
  * **STP (Modern IUPAC: $0^\circ\text{C} = 273.15\text{ K}$, $1\text{ bar} = 10^5\text{ Pa}$):** $V_m = \mathbf{22.71\text{ L/mol}}$.
  * **SATP ($25^\circ\text{C} = 298.15\text{ K}$, $1\text{ bar}$):** $V_m = \mathbf{24.79\text{ L/mol}}$.


---


### 1.2 The Empirical Gas Laws & Thermodynamic Coefficients


#### 1.2.1 Boyle's Law (Isothermal: $T, n = \text{Constant}$)
$$\mathbf{P \propto \frac{1}{V} \iff P V = \text{Constant} \iff P_1 V_1 = P_2 V_2}$$
* **Graphical Variations:**
  1. $P$ vs. $V$: Rectangular hyperbola asymptotic to both axes. Higher temperature isotherm lies further from origin ($T_3 > T_2 > T_1$).
  2. $P$ vs. $1/V$: Straight line passing through the origin with slope $= n R T$.
  3. $P V$ vs. $P$: Horizontal straight line parallel to the pressure axis.
  4. $\log P$ vs. $\log V$: Straight line with slope $= -1$ and y-intercept $= \log(n R T)$:
     $$\log P = -\log V + \log(n R T)$$


#### 1.2.2 Charles's Law (Isobaric: $P, n = \text{Constant}$)
$$\mathbf{V \propto T \iff \frac{V}{T} = \text{Constant} \iff \frac{V_1}{T_1} = \frac{V_2}{T_2}}$$
* Centigrade Scale: $V_t = V_0 \left(1 + \frac{t}{273.15}\right)$.
* Extrapolation of all isobars intersects the temperature axis at $V = 0$ at exactly $t = -273.15^\circ\text{C}$ (Absolute Zero).
* Slope of $V$ vs. $T$ graph is $\frac{n R}{P}$. Therefore, for a given gas, a steeper slope corresponds to a lower pressure ($P_1 < P_2 < P_3$).


#### 1.2.3 Gay-Lussac's Law (Isochoric: $V, n = \text{Constant}$)
$$\mathbf{P \propto T \iff \frac{P}{T} = \text{Constant} \iff \frac{P_1}{T_1} = \frac{P_2}{T_2}}$$
* Slope of $P$ vs. $T$ graph is $\frac{n R}{V}$; steeper slope corresponds to smaller container volume ($V_1 < V_2 < V_3$).


#### 1.2.4 Thermodynamic Coefficients of an Ideal Gas
1. **Coefficient of Thermal Expansion ($\alpha_P$):**
   $$\mathbf{\alpha_P = \frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P = \frac{1}{V}\left(\frac{n R}{P}\right) = \frac{1}{T}}$$
2. **Isochoric Pressure Coefficient ($\beta_V$):**  $$\mathbf{\beta_V = \frac{1}{P}\left(\frac{\partial P}{\partial T}\right)_V = \frac{1}{P}\left(\frac{n R}{V}\right) = \frac{1}{T}}$$
3. **Isothermal Compressibility ($\kappa_T$):**
   $$\mathbf{\kappa_T = -\frac{1}{V}\left(\frac{\partial V}{\partial P}\right)_T = -\frac{1}{V}\left(-\frac{n R T}{P^2}\right) = \frac{1}{P}}$$


---


### 1.3 Open & Closed Vessel Thermal Heating Calculations
* **In an Open Vessel:** The mouth is open to the atmosphere, meaning the pressure remains constant ($P = P_{\text{atm}}$), and the vessel volume is fixed ($V = \text{constant}$).
  $$P V = n_1 R T_1 = n_2 R T_2 \implies \mathbf{n_1 T_1 = n_2 T_2}$$
  * Number of moles remaining in the vessel: $n_2 = n_1 \left(\frac{T_1}{T_2}\right)$.
  * Number of moles that escape into the atmosphere:
    $$\Delta n = n_1 - n_2 = n_1 \left(1 - \frac{T_1}{T_2}\right) = n_1 \left(\frac{T_2 - T_1}{T_2}\right)$$
  * **Fraction of Gas Escaped:**
    $$\mathbf{\text{Fraction Escaped} = \frac{n_1 - n_2}{n_1} = \frac{T_2 - T_1}{T_2}}$$
  * **Fraction of Gas Remaining:**
    $$\mathbf{\text{Fraction Remaining} = \frac{n_2}{n_1} = \frac{T_1}{T_2}}$$


---


### 1.4 Barometer Mechanics & Faulty Column Physics
In a standard Torricellian barometer, atmospheric pressure supports a vertical column of mercury of height $h_0 = 76\text{ cm Hg}$:
$$P_{\text{atm}} = \rho_{\text{Hg}} g h_0$$
* **Faulty Barometer (Trapped Air Bubble):**
  If an air bubble of $n$ moles is trapped in the headspace above the mercury column in a tube of length $L$ and cross-sectional area $A$:
  $$P_{\text{atm}} = h + P_{\text{air}}$$
  where $h$ is the observed mercury height and $P_{\text{air}}$ is the pressure of the trapped air occupying headspace volume $V_{\text{air}} = (L - h) A$:
  $$\mathbf{P_{\text{atm}} = h + \frac{n R T}{(L - h) A}}$$
  If atmospheric pressure changes to $P'_{\text{atm}}$, the new mercury height $h'$ satisfies:
  $$P'_{\text{atm}} = h' + P'_{\text{air}} = h' + \frac{n R T}{(L - h') A}$$
* **Tilting a Barometer Tube:**
  When a barometer tube is tilted at an angle $\theta$ to the vertical, the vertical height $h$ supporting atmospheric pressure remains invariant ($h = 76\text{ cm}$), but the length of the mercury column along the tube increases:
  $$\mathbf{l = \frac{h}{\cos\theta}}$$


---


## 2. Dalton's Law of Partial Pressures & Vapor Mixtures


### 2.1 Dalton's Formulation for Non-Reacting Gases
For a mixture of $k$ chemically non-reacting gases confined in a container of volume $V$ at temperature $T$:
$$\mathbf{P_{\text{total}} = \sum_{i=1}^k P_i = P_1 + P_2 + \dots + P_k = (n_1 + n_2 + \dots + n_k)\frac{R T}{V} = n_{\text{total}} \frac{R T}{V}}$$
where $P_i$ is the partial pressure exerted by gas $i$ if it alone occupied the entire volume $V$ at temperature $T$.
* **Partial Pressure in terms of Mole Fraction ($x_i$):**
  $$\frac{P_i}{P_{\text{total}}} = \frac{n_i (R T / V)}{n_{\text{total}} (R T / V)} = \frac{n_i}{n_{\text{total}}} = x_i$$
  $$\mathbf{P_i = x_i \cdot P_{\text{total}} = \left(\frac{V_i}{V_{\text{total}}}\right) P_{\text{total}}}$$


---


### 2.2 Visual Preservation: Ideal Gas Laws & Maxwell-Boltzmann Speed Distribution


![Ideal Gas Laws, Maxwell Distribution, and Molecular Speeds](/media/ideal_gas_laws_maxwell_distribution_and_molecular_speeds.webp)
*Description: Two-panel comprehensive physical chemistry infographic: (A) Ideal gas laws, state functions, open-vessel heating escaped fractions, Dalton's partial pressures with aqueous tension corrections, and multi-variable Graham's effusion law ($r \propto PA/\sqrt{MT}$) with isotopic enrichment cascades; (B) Kinetic theory of gases foundation ($PV = \frac{1}{3}Mu_{\text{rms}}^2$), the three canonical molecular speeds ($u_{\text{mp}} = \sqrt{2RT/M}, u_{\text{avg}} = \sqrt{8RT/\pi M}, u_{\text{rms}} = \sqrt{3RT/M}$) in the universal ratio $\sqrt{2} : \sqrt{8/\pi} : \sqrt{3} \approx 7 : 8 : 9$, and Maxwell-Boltzmann speed distribution curve dynamics showing temperature broadening and molar mass narrowing.*


---


### 2.3 Moist Gas Collection & Aqueous Tension Corrections
When a gas is collected over water (downward displacement of water), the gas bubble is saturated with water vapor:
$$\mathbf{P_{\text{moist gas}} = P_{\text{dry gas}} + \text{Aqueous Tension}}$$
$$\mathbf{P_{\text{dry gas}} = P_{\text{moist gas}} - \text{Aqueous Tension}}$$
where **Aqueous Tension** is the equilibrium vapor pressure of water at the experiment temperature $T$.
* Note: Aqueous tension depends **ONLY on temperature**, completely independent of the volume or pressure of the dry gas.
* **Relative Humidity ($\text{RH}$):**
  $$\mathbf{\text{RH} = \frac{\text{Partial Pressure of Water Vapor Present}}{\text{Saturated Vapor Pressure of Water (Aqueous Tension) at same } T} \times 100\%}$$


---


## 3. Graham's Law of Diffusion & Effusion


### 3.1 Fundamental Formulation
* **Diffusion:** Spontaneous intermingling of two or more gases into one another irrespective of gravity.
* **Effusion:** The process where a gas escapes from its container through a tiny pinhole (orifice) into an evacuated space or region of lower pressure without intermolecular collisions occurring inside the orifice ($d_{\text{orifice}} < \text{Mean Free Path}$).
* **Graham's Law:** Under identical conditions of temperature and pressure, the rate of effusion ($r$) of a gas is inversely proportional to the square root of its mass density ($\rho$) or molar mass ($M$):
  $$\mathbf{r \propto \frac{1}{\sqrt{\rho}} \propto \frac{1}{\sqrt{M}} \implies \frac{r_1}{r_2} = \sqrt{\frac{\rho_2}{\rho_1}} = \sqrt{\frac{M_2}{M_1}} = \sqrt{\frac{V D_2}{V D_1}}}$$
  where $V D = M/2$ is the Vapor Density.


---


### 3.2 Quantitative Expressions for Rate of Effusion ($r$)
Depending on experimental setup, the rate of effusion $r$ is defined as:
$$\mathbf{r = \frac{V_{\text{effused}}}{t} = \frac{n_{\text{effused}}}{t} = \frac{\Delta P}{t} = \frac{d}{t}}$$
where:
* $\frac{V_1/t_1}{V_2/t_2} = \sqrt{\frac{M_2}{M_1}}$ (for volume effused in time $t$).
* $\frac{n_1/t_1}{n_2/t_2} = \sqrt{\frac{M_2}{M_1}}$ (for moles effused in time $t$).
* $\frac{\Delta P_1/t_1}{\Delta P_2/t_2} = \sqrt{\frac{M_2}{M_1}}$ (for pressure drop in time $t$).
* $\frac{d_1/t_1}{d_2/t_2} = \sqrt{\frac{M_2}{M_1}}$ (for distance traveled in a diffusion tube).


---


### 3.3 The General Multi-Variable Effusion Equation
When the initial partial pressure $P$, hole area $A$, absolute temperature $T$, and molar mass $M$ vary simultaneously:
From kinetic theory, the rate of effusion is proportional to the collision frequency per unit area on the pinhole ($Z_{\text{wall}} = \frac{1}{4} N^* u_{\text{avg}} = \frac{P}{\sqrt{2\pi m k_B T}}$):
$$\mathbf{r \propto \frac{P \cdot A}{\sqrt{M \cdot T}} \implies \frac{r_1}{r_2} = \left(\frac{P_1}{P_2}\right) \left(\frac{A_1}{A_2}\right) \sqrt{\frac{M_2 T_2}{M_1 T_1}}}$$


---


### 3.4 Multi-Stage Fractional Effusion (Isotopic Enrichment)
Consider an initial gas mixture containing two components with mole ratio $\left(\frac{n_1}{n_2}\right)_0$:
1. **First Effusion Stage:**
   The mole ratio of the gases in the effused chamber is:
   $$\mathbf{\left(\frac{n_1}{n_2}\right)_1 = \left(\frac{n_1}{n_2}\right)_0 \sqrt{\frac{M_2}{M_1}}}$$
2. **After $k$ Successive Effusion Stages:**
   $$\mathbf{\left(\frac{n_1}{n_2}\right)_k = \left(\frac{n_1}{n_2}\right)_0 \left(\frac{M_2}{M_1}\right)^{k/2}}$$
   * This is the exact technological basis for the separation of uranium isotopes ($^{235}\text{UF}_6$ vs $^{238}\text{UF}_6$).


---


### 3.5 Diffusion Tube Reaction Dynamics
Two gases ($\text{NH}_3$ and $\text{HCl}$) are introduced simultaneously at opposite ends of a glass tube of length $L = 100\text{ cm}$:
$$\text{NH}_3(g) + \text{HCl}(g) \to \text{NH}_4\text{Cl}(s)\quad (\text{Dense White Fume Ring})$$
* Let the white ring form at distance $x$ from the $\text{NH}_3$ end and $(L - x)$ from the $\text{HCl}$ end:
  $$\frac{r_{\text{NH}_3}}{r_{\text{HCl}}} = \frac{x / t}{(L - x) / t} = \sqrt{\frac{M_{\text{HCl}}}{M_{\text{NH}_3}}} = \sqrt{\frac{36.5}{17}} \approx \sqrt{2.147} \approx 1.465$$
  $$\frac{x}{100 - x} = 1.465 \implies x = 146.5 - 1.465 x \implies 2.465 x = 146.5 \implies \mathbf{x \approx 59.4\text{ cm from }\text{NH}_3\text{ inlet}}.$$


---


## 4. Kinetic Theory of Gases (KTG) & Molecular Speeds


### 4.1 Postulates of KTG
1. Gases consist of extremely small particles called molecules, which are identical hard elastic spheres.
2. The actual volume occupied by the gas molecules is negligible compared to the total volume of the container ($V_{\text{actual}} \ll V_{\text{container}}$).
3. There are zero intermolecular attractive or repulsive forces between the molecules.
4. Gas molecules are in a state of continuous, rapid, chaotic, random straight-line motion in all directions.
5. Collisions of gas molecules with one another and with the container walls are **perfectly elastic** (kinetic energy is conserved, no energy lost to heat).
6. The pressure exerted by the gas is due to the momentum transferred per second during collisions of the molecules against the container walls.
7. The average kinetic energy of gas molecules depends **exclusively on absolute temperature $T$**, and is completely independent of the chemical identity or pressure of the gas.


---


### 4.2 Derivation of the Fundamental Kinetic Pressure Equation
Consider $N$ molecules, each of mass $m$, moving inside a cubical box of side $L$ (volume $V = L^3$):
$$\mathbf{P V = \frac{1}{3} m N u_{\text{rms}}^2 = \frac{1}{3} M u_{\text{rms}}^2 = \frac{2}{3} \left(\frac{1}{2} M u_{\text{rms}}^2\right) = \frac{2}{3} E_k}$$
where $M = m N_A$ is the molar mass and $E_k$ is the total translational kinetic energy.
* **Kinetic Energy Relationships:**
  1. Total translational kinetic energy of $n$ moles:
     $$\mathbf{E_k = \frac{3}{2} n R T}$$
  2. Translational kinetic energy per mole:
     $$\mathbf{E_m = \frac{3}{2} R T}$$
  3. Average translational kinetic energy per single molecule:
     $$\mathbf{\bar{\varepsilon} = \frac{3}{2} \left(\frac{R}{N_A}\right) T = \frac{3}{2} k_B T}$$
     where $k_B = 1.3806 \times 10^{-23}\text{ J/K}$ is Boltzmann's constant.


---


### 4.3 The Three Characteristic Molecular Speeds


#### 4.3.1 Most Probable Speed ($u_{\text{mp}}$)
The speed possessed by the maximum fraction of molecules at a given temperature:
$$\mathbf{u_{\text{mp}} = \sqrt{\frac{2 R T}{M}} = \sqrt{\frac{2 k_B T}{m}} \approx 1.414 \sqrt{\frac{R T}{M}}}$$


#### 4.3.2 Average / Mean Speed ($u_{\text{avg}}$)
The arithmetic mean of the speeds of all molecules:
$$\mathbf{u_{\text{avg}} = \langle u \rangle = \sqrt{\frac{8 R T}{\pi M}} = \sqrt{\frac{8 k_B T}{\pi m}} \approx 1.596 \sqrt{\frac{R T}{M}}}$$


#### 4.3.3 Root Mean Square Speed ($u_{\text{rms}}$)
The square root of the mean of the squares of the speeds:
$$\mathbf{u_{\text{rms}} = \sqrt{\langle u^2 \rangle} = \sqrt{\frac{3 R T}{M}} = \sqrt{\frac{3 k_B T}{m}} \approx 1.732 \sqrt{\frac{R T}{M}}}$$


---


### 4.4 The Canonical Speed Ratio & Speed Rankings
$$\mathbf{u_{\text{mp}} < u_{\text{avg}} < u_{\text{rms}}}$$
$$\mathbf{u_{\text{mp}} : u_{\text{avg}} : u_{\text{rms}} = \sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3} \approx 1.000 : 1.128 : 1.224 = 1 : 1.13 : 1.22 \approx 7 : 8 : 9}$$
* **Mathematical Invariants:**
  * $u_{\text{avg}} \approx 0.921 \cdot u_{\text{rms}}$
  * $u_{\text{mp}} \approx 0.816 \cdot u_{\text{rms}}$


---


## 5. The Maxwell-Boltzmann Distribution of Molecular Speeds


### 5.1 The Mathematical Distribution Function
The fraction of molecules having speeds between $u$ and $u + du$ is given by:
$$\mathbf{\frac{1}{N}\frac{dN_u}{du} = 4\pi \left(\frac{m}{2\pi k_B T}\right)^{3/2} u^2 \exp\left(-\frac{m u^2}{2 k_B T}\right) = 4\pi \left(\frac{M}{2\pi R T}\right)^{3/2} u^2 \exp\left(-\frac{M u^2}{2 R T}\right)}$$


---


### 5.2 Key Mathematical Features of the Distribution Curve
1. **Behavior at $u = 0$:**
   $$\lim_{u \to 0} \frac{1}{N}\frac{dN_u}{du} = 0$$
   Zero molecules have exactly zero velocity.
2. **Behavior at $u \to \infty$:**
   $$\lim_{u \to \infty} \frac{1}{N}\frac{dN_u}{du} = 0$$
   The exponential decay term $\exp(-M u^2 / 2RT)$ dominates the $u^2$ term, so the curve approaches the speed axis asymptotically.
3. **Location of the Peak Maximum:**
   Differentiating with respect to $u$ and setting the derivative to zero:
   $$\frac{d}{du}\left[ u^2 e^{-\frac{M u^2}{2 R T}} \right] = 0 \implies 2u - \frac{M u^3}{R T} = 0 \implies \mathbf{u = \sqrt{\frac{2 R T}{M}} = u_{\text{mp}}}$$
   The peak maximum corresponds identically to the **Most Probable Speed ($u_{\text{mp}}$)**.
4. **Conservation of Total Probability (Area Under the Curve):**
   $$\mathbf{\int_0^\infty \frac{1}{N}\frac{dN_u}{du} du = 1}$$
   The total area under the probability distribution curve is normalized to unity and remains **strictly constant**, independent of temperature, molar mass, or pressure!


---


### 5.3 Effect of Temperature & Molar Mass on the Maxwell Curve
* **Effect of Increasing Temperature ($T_2 > T_1$):**
  1. The peak maximum shifts to the right (higher speed: $u_{\text{mp}} \propto \sqrt{T}$).
  2. The peak height decreases (curve broadens and flattens to maintain constant area $= 1$).
  3. The fraction of molecules possessing very high speeds (greater than activation threshold $E_a$) increases dramatically (the basis of the Arrhenius rate law!).
* **Effect of Molar Mass ($M_1 < M_2$ at constant $T$):**
  1. Lighter gases (e.g., $\text{H}_2, \text{He}$) have flatter, broader distribution curves shifted far to the right.
  2. Heavier gases (e.g., $\text{O}_2, \text{Cl}_2$) have sharp, narrow peaks concentrated at low speeds.


---


## 6. Collision Parameters & Mean Free Path


### 6.1 Collision Geometry & Number Density
* Let $\sigma$ be the **collision diameter** (distance between centers of two molecules at the instant of collision; $\sigma = 2r$).
* **Number Density ($N^*$):** Number of molecules per unit volume:
  $$\mathbf{N^* = \frac{N}{V} = \frac{P N_A}{R T} = \frac{P}{k_B T}}$$


---


### 6.2 Collision Frequencies ($Z_1$ and $Z_{11}$)
1. **Collision Frequency of a Single Molecule ($Z_1$):**
   The number of collisions made by a single molecule per unit time:
   $$\mathbf{Z_1 = \sqrt{2} \pi \sigma^2 u_{\text{avg}} N^* = \sqrt{2} \pi \sigma^2 u_{\text{avg}} \left(\frac{P}{k_B T}\right)}$$
   * Since $u_{\text{avg}} \propto \sqrt{T}$, $Z_1 \propto P \sqrt{T} / T \implies \mathbf{Z_1 \propto \frac{P}{\sqrt{T}}}$.
2. **Total Collision Frequency per Unit Volume ($Z_{11}$):**
   The total number of bimolecular collisions occurring per unit volume per unit time:
   $$\mathbf{Z_{11} = \frac{1}{2} Z_1 N^* = \frac{1}{\sqrt{2}} \pi \sigma^2 u_{\text{avg}} (N^*)^2 = \frac{1}{\sqrt{2}} \pi \sigma^2 u_{\text{avg}} \left(\frac{P}{k_B T}\right)^2}$$
   * Scaling: $\mathbf{Z_{11} \propto \frac{P^2}{T^{3/2}}}$.


---


### 6.3 Mean Free Path ($\lambda$)
The average distance traveled by a gas molecule between two successive collisions:
$$\mathbf{\lambda = \frac{\text{Distance traveled per second}}{\text{Collisions suffered per second}} = \frac{u_{\text{avg}}}{Z_1} = \frac{1}{\sqrt{2} \pi \sigma^2 N^*} = \frac{k_B T}{\sqrt{2} \pi \sigma^2 P}}$$
* **Parametric Dependences of Mean Free Path:**
  1. Pressure Dependence: $\mathbf{\lambda \propto \frac{1}{P}}$ (at constant $T$).
  2. Temperature Dependence: $\mathbf{\lambda \propto T}$ (at constant $P$).
  3. **HIGH-YIELD JEE TRAP: Constant Volume Invariance:**
     In a closed rigid vessel ($V = \text{constant}$), $N^* = N/V = \text{constant}$.
     Therefore, **$\lambda$ is COMPLETELY INDEPENDENT of temperature at constant volume**:
     $$\mathbf{\left(\frac{\partial \lambda}{\partial T}\right)_V = 0}$$
     As $T$ rises in a closed container, molecules move faster ($u_{\text{avg}}$ increases), but they collide proportionally more frequently ($Z_1$ increases), leaving the spatial distance $\lambda$ between collisions unchanged!


---


## 7. Real Gases & The Van der Waals Equation


### 7.1 The Compressibility Factor ($Z$)


![Real Gases, Compressibility Factor, and Van der Waals Regimes](/media/real_gases_compressibility_factor_and_van_der_waals_regimes.webp)
*Description: Two-panel real gas thermodynamics graphic: (A) Compressibility factor $Z = PV_m/RT$ plotted against pressure $P$ showing ideal gas behavior ($Z=1$), negative deviation dips ($Z<1$) for $\text{CH}_4, \text{CO}_2, \text{NH}_3$, positive monotonic rises ($Z>1$) for $\text{H}_2$ and $\text{He}$, temperature transitions across Boyle temperature $T_B$, and the two Van der Waals limiting regimes; (B) Microscopic geometric derivation proving the excluded co-volume $b = 4 V_{\text{actual}}$ from the collision sphere of radius $2r$, along with internal pressure derivation $P_{\text{internal}} = a/V_m^2$ and the real gas liquefaction hierarchy.*


The deviation of a real gas from ideal gas behavior is quantified by the **Compressibility Factor ($Z$)**:
$$\mathbf{Z = \frac{P V_m}{R T} = \frac{V_m}{V_m^{\text{ideal}}} = \frac{V_{\text{real}}}{V_{\text{ideal}}}}$$
* **$Z = 1$:** Ideal gas behavior ($V_{\text{real}} = V_{\text{ideal}}$).
* **$Z < 1$ (Negative Deviation):**
  * Attractive intermolecular forces dominate over repulsive forces.
  * $V_{\text{real}} < V_{\text{ideal}}$; the gas is **more compressible** than predicted by the ideal gas law.
  * Gas is readily liquefiable.
* **$Z > 1$ (Positive Deviation):**
  * Molecular size / repulsive hard-sphere forces dominate over attractive forces.
  * $V_{\text{real}} > V_{\text{ideal}}$; the gas is **less compressible** than predicted by the ideal gas law.
* **The Hydrogen ($\text{H}_2$) & Helium ($\text{He}$) Anomaly:**
  * At $0^\circ\text{C}$, $\text{H}_2$ and $\text{He}$ exhibit **$Z > 1$ at all positive pressures**!
  * Explanation: Because of their tiny electron clouds, dispersion forces are extraordinarily weak ($a \approx 0$). Thus, the molecular size effect ($b$) dominates at all pressures.


---


### 7.2 The Van der Waals Equation of State
Johannes Diderik van der Waals modified the ideal gas equation by introducing two corrective terms accounting for the finite volume and intermolecular attractions:
$$\mathbf{\left( P + \frac{a n^2}{V^2} \right) (V - n b) = n R T \iff \left( P + \frac{a}{V_m^2} \right) (V_m - b) = R T}$$


---


### 7.3 Derivation & Physical Meaning of Constants '$a$' and '$b$'


#### 7.3.1 The Pressure Correction Parameter ($a$)
* A molecule in the interior of a gas experiences isotropic (symmetric) intermolecular attractions from all directions $\implies$ net force $= 0$.
* A molecule about to strike the wall experiences a net inward pull from bulk molecules, reducing the momentum delivered to the wall.
* Inward pull is proportional to:
  $$\text{Force} \propto (\text{Density of striking molecules}) \times (\text{Density of pulling molecules}) \propto \left(\frac{n}{V}\right) \left(\frac{n}{V}\right) = \frac{n^2}{V^2}$$
* Therefore:
  $$P_{\text{ideal}} = P_{\text{real}} + P_{\text{internal}} = P + \frac{a n^2}{V^2}$$
* **Units of $a$:**
  $$\mathbf{[a] = \text{atm}\cdot\text{L}^2/\text{mol}^2 = \text{bar}\cdot\text{dm}^6/\text{mol}^2 = \text{N}\cdot\text{m}^4/\text{mol}^2 = \text{Pa}\cdot\text{m}^6/\text{mol}^2}$$
* **Physical Significance:** $a$ quantifies the strength of attractive intermolecular forces.
* **Liquefaction Hierarchy:** Greater $a \implies$ stronger attractive forces $\implies$ easier liquefaction:
  $$\mathbf{\text{SO}_2 (6.71) > \text{NH}_3 (4.17) > \text{CO}_2 (3.59) > \text{CH}_4 (2.25) > \text{O}_2 (1.36) > \text{N}_2 (1.39) > \text{H}_2 (0.244) > \text{He} (0.034)}$$


#### 7.3.2 The Volume Correction Parameter ($b$ / Co-Volume)
* Molecules are not point masses; they have a finite, incompressible hard-sphere core.
* The effective volume free for molecular motion is $V - n b$.
* **Geometric Proof that $b = 4 V_{\text{actual}}$:**
  * Consider two spherical molecules of radius $r$. The distance of closest approach between their centers is $2r = \sigma$.
  * The space into which the center of one molecule cannot penetrate due to the presence of the other is a sphere of radius $2r$:
    $$V_{\text{excluded, pair}} = \frac{4}{3}\pi (2r)^3 = 8 \left(\frac{4}{3}\pi r^3\right) = 8 v_m$$
    where $v_m = \frac{4}{3}\pi r^3$ is the actual volume of a single molecule.
  * Dividing equally between the two participating molecules:
    $$\text{Excluded volume per molecule} = \frac{1}{2} V_{\text{excluded, pair}} = 4 v_m$$
  * For one mole of gas ($N_A$ molecules):
    $$\mathbf{b = N_A (4 v_m) = 4 \left( N_A \frac{4}{3}\pi r^3 \right) = 4 V_{\text{actual}}}$$
* **Units of $b$:**
  $$\mathbf{[b] = \text{L/mol} = \text{dm}^3/\text{mol} = \text{m}^3/\text{mol} = \text{cm}^3/\text{mol}}$$


---


### 7.4 Limiting Pressure Regimes of the Van der Waals Equation


#### 1. Low Pressure Regime ($V_m \gg b$)
At low pressures, molar volume $V_m$ is large compared to co-volume $b$, so $V_m - b \approx V_m$:
$$\left(P + \frac{a}{V_m^2}\right)V_m = R T \implies P V_m + \frac{a}{V_m} = R T$$
Dividing by $R T$:
$$Z + \frac{a}{V_m R T} = 1 \implies \mathbf{Z = 1 - \frac{a}{V_m R T}}$$
Substituting the zeroth-order ideal approximation $V_m \approx \frac{R T}{P}$:
$$\mathbf{Z \approx 1 - \frac{a P}{(R T)^2}}$$
* **Physical Insight:** $Z < 1$; slope $\frac{dZ}{dP} = -\frac{a}{(RT)^2} < 0$. Attractive forces dominate, causing negative deviation!


#### 2. High Pressure Regime ($P \gg \frac{a}{V_m^2}$)
At very high pressures, external pressure $P$ overwhelms the internal pressure $\frac{a}{V_m^2}$, so $P + \frac{a}{V_m^2} \approx P$:
$$P(V_m - b) = R T \implies P V_m - P b = R T$$
Dividing by $R T$:
$$Z - \frac{P b}{R T} = 1 \implies \mathbf{Z = 1 + \frac{P b}{R T}}$$
* **Physical Insight:** $Z > 1$; slope $\frac{dZ}{dP} = \frac{b}{R T} > 0$. Repulsive molecular volume dominates, causing positive deviation!


#### 3. For Hydrogen ($\text{H}_2$) & Helium ($\text{He}$) at Normal Temperatures
Because their electron clouds are exceptionally small, $a \approx 0$:
$$\mathbf{Z = 1 + \frac{P b}{R T} > 1 \quad \text{at all pressures!}}$$


---


## 8. The Virial Equation of State & Boyle Temperature


### 8.1 The General Virial Expansion
Heike Kamerlingh Onnes proposed expanding the compressibility factor $Z$ as an infinite power series in terms of molar density ($1/V_m$) or pressure ($P$):
$$\mathbf{Z = 1 + \frac{B(T)}{V_m} + \frac{C(T)}{V_m^2} + \frac{D(T)}{V_m^3} + \dots = 1 + B'(T) P + C'(T) P^2 + \dots}$$
where:
* $B(T)$ is the **Second Virial Coefficient** (accounts for pairwise two-body intermolecular interactions).
* $C(T)$ is the **Third Virial Coefficient** (accounts for three-body interactions).


---


### 8.2 Derivation of Virial Coefficients from the Van der Waals Equation
From the Van der Waals equation:
$$P = \frac{R T}{V_m - b} - \frac{a}{V_m^2} \implies Z = \frac{P V_m}{R T} = \frac{V_m}{V_m - b} - \frac{a}{R T V_m} = \left(1 - \frac{b}{V_m}\right)^{-1} - \frac{a}{R T V_m}$$
Expanding $\left(1 - \frac{b}{V_m}\right)^{-1}$ using binomial theorem ($|b/V_m| < 1$):
$$\left(1 - \frac{b}{V_m}\right)^{-1} = 1 + \frac{b}{V_m} + \frac{b^2}{V_m^2} + \frac{b^3}{V_m^3} + \dots$$
Substituting into $Z$:
$$Z = 1 + \left(b - \frac{a}{R T}\right)\frac{1}{V_m} + b^2 \frac{1}{V_m^2} + b^3 \frac{1}{V_m^3} + \dots$$
Comparing with the standard Virial series yields:
$$\mathbf{B(T) = b - \frac{a}{R T}}$$
$$\mathbf{C(T) = b^2}$$
$$\mathbf{D(T) = b^3}$$


---


### 8.3 The Boyle Temperature ($T_B$)
The **Boyle Temperature ($T_B$)** is the precise temperature at which a real gas obeys the ideal gas law over a wide pressure range in the low-pressure regime.
* Condition: The second virial coefficient must vanish:
  $$B(T_B) = 0 \implies b - \frac{a}{R T_B} = 0$$
  $$\mathbf{T_B = \frac{a}{R b}}$$
* **Behavior at Different Temperatures:**
  * **At $T = T_B$:** $B(T_B) = 0 \implies Z = 1 + \frac{b^2}{V_m^2} \approx 1$. The initial slope $\left(\frac{\partial Z}{\partial P}\right)_{T_B} \to 0$ as $P \to 0$.
  * **At $T < T_B$:** $B(T) < 0 \implies$ initial slope is negative ($Z < 1$).
  * **At $T > T_B$:** $B(T) > 0 \implies$ initial slope is positive ($Z > 1$).


---


## 9. Critical Phenomena & Liquefaction of Gases


### 9.1 Andrew's Isotherms of Carbon Dioxide ($\text{CO}_2$)


![Critical Phenomena, Andrew's Isotherms, and Virial Equation](/media/critical_phenomena_andrews_isotherms_and_virial_equation.webp)
*Description: Two-panel critical thermodynamics infographic: (A) Andrew's experimental $P-V$ isotherms of carbon dioxide showing liquid-gas coexistence domes, horizontal tie-lines below $T_c$, the critical inflection point $C$ at $T_c = 31.1^\circ\text{C}$ where $(\partial P/\partial V)_{T_c} = (\partial^2 P/\partial V^2)_{T_c} = 0$, exact cubic equation matching for critical constants ($V_c = 3b, P_c = a/27b^2, T_c = 8a/27Rb$), and the universal invariant $Z_c = 3/8 = 0.375$; (B) Virial power series expansion, second virial coefficient temperature dependence $B(T) = b - a/RT$, Boyle temperature $T_B = a/Rb$, and Joule-Thomson isenthalpic expansion inversion temperature $T_i = 2a/Rb = 2T_B = 6.75T_c$.*


Thomas Andrews experimentally investigated the $P-V$ curves of $\text{CO}_2$ across different temperatures:
1. **Subcritical Region ($T < T_c = 31.1^\circ\text{C}$):**
   * Isotherm consists of three distinct segments:
     - Pure gaseous phase (hyperbolic compression).
     - **Horizontal tie-line:** Vapor condenses into liquid at constant saturation vapor pressure. Liquid and vapor phases coexist in dynamic equilibrium.
     - Pure liquid phase: Nearly vertical line due to high liquid incompressibility.
2. **Critical Isotherm ($T = T_c = 31.1^\circ\text{C}$):**
   * The horizontal coexistence tie-line shrinks to a **single point of horizontal inflection (Critical Point $C$)**.
   * At this point, the physical properties (densities, refractive indices) of liquid and vapor become completely indistinguishable, and the meniscus separating them vanishes!
3. **Supercritical Region ($T > T_c$):**
   * Smooth, monotonic curves without phase boundaries.
   * **Fundamental Principle of Liquefaction:** A gas **CANNOT be liquefied by pressure alone at temperatures above its critical temperature $T_c$**, regardless of how immense the applied pressure!


---


### 9.2 Mathematical Derivation of Critical Constants from Van der Waals Equation
At the critical point $(P_c, V_c, T_c)$, the $P-V$ isotherm exhibits a horizontal point of inflection:
$$\mathbf{\left(\frac{\partial P}{\partial V_m}\right)_{T_c} = 0 \quad \text{and} \quad \left(\frac{\partial^2 P}{\partial V_m^2}\right)_{T_c} = 0}$$
Rewriting the Van der Waals equation as a cubic polynomial in $V_m$:
$$P = \frac{R T}{V_m - b} - \frac{a}{V_m^2} \implies P V_m^2 (V_m - b) = R T V_m^2 - a (V_m - b)$$
$$\mathbf{P V_m^3 - (P b + R T) V_m^2 + a V_m - a b = 0}$$
Dividing by $P$:
$$V_m^3 - \left(b + \frac{R T}{P}\right) V_m^2 + \frac{a}{P} V_m - \frac{a b}{P} = 0$$
At the critical point $(P = P_c, T = T_c)$, all three roots of this cubic equation coalesce into a single triple root: $V_m = V_c$:
$$(V_m - V_c)^3 = 0 \implies \mathbf{V_m^3 - 3 V_c V_m^2 + 3 V_c^2 V_m - V_c^3 = 0}$$
Equating coefficients of identical powers of $V_m$:
1. $3 V_c = b + \frac{R T_c}{P_c} \quad \dots \text{(Eq. 1)}$
2. $3 V_c^2 = \frac{a}{P_c} \quad \dots \text{(Eq. 2)}$
3. $V_c^3 = \frac{a b}{P_c} \quad \dots \text{(Eq. 3)}$


* **1. Solving for Critical Volume ($V_c$):**
  Divide (Eq. 3) by (Eq. 2):
  $$\frac{V_c^3}{3 V_c^2} = \frac{a b / P_c}{a / P_c} \implies \frac{V_c}{3} = b \implies \mathbf{V_c = 3 b}$$
* **2. Solving for Critical Pressure ($P_c$):**
  Substitute $V_c = 3b$ into (Eq. 2):
  $$3 (3b)^2 = \frac{a}{P_c} \implies 27 b^2 = \frac{a}{P_c} \implies \mathbf{P_c = \frac{a}{27 b^2}}$$
* **3. Solving for Critical Temperature ($T_c$):**
  Substitute $V_c$ and $P_c$ into (Eq. 1):
  $$3(3b) = b + \frac{R T_c}{a / (27 b^2)} \implies 9b - b = \frac{27 b^2 R T_c}{a} \implies 8b = \frac{27 b^2 R T_c}{a}$$
  $$\mathbf{T_c = \frac{8 a}{27 R b}}$$


---


### 9.3 Universal Invariants of the Critical State
1. **Critical Compressibility Factor ($Z_c$):**
   $$\mathbf{Z_c = \frac{P_c V_c}{R T_c} = \frac{\left(\frac{a}{27 b^2}\right)(3 b)}{R \left(\frac{8 a}{27 R b}\right)} = \frac{3 a / 27 b}{8 a / 27 b} = \frac{3}{8} = 0.375}$$
   * **$Z_c = 0.375$ is a UNIVERSAL CONSTANT for all Van der Waals gases**, completely independent of the chemical identity, molar mass, or parameters $a$ and $b$!
2. **Law of Corresponding States (Reduced Equation of State):**
   Defining reduced parameters: $P_r = P/P_c, V_r = V_m/V_c, T_r = T/T_c$.
   Substituting into the Van der Waals equation yields the **Reduced Equation of State**:
   $$\mathbf{\left( P_r + \frac{3}{V_r^2} \right) \left( 3 V_r - 1 \right) = 8 T_r}$$
   * All gases at the identical reduced temperature and reduced pressure occupy the identical reduced volume!


---


### 9.4 Joule-Thomson Effect & Inversion Temperature ($T_i$)
When a gas at high pressure expands adiabatically through a porous plug or throttling valve into a low-pressure region:
* **The Process is Strictly Isenthalpic ($H = \text{Constant}, \Delta H = 0$).**
* **The Joule-Thomson Coefficient ($\mu_{\text{JT}}$):**
  $$\mathbf{\mu_{\text{JT}} = \left(\frac{\partial T}{\partial P}\right)_H = -\frac{1}{C_p}\left(\frac{\partial H}{\partial P}\right)_T = \frac{1}{C_p} \left[ T\left(\frac{\partial V}{\partial T}\right)_P - V \right]}$$
  For a Van der Waals gas:
  $$\mathbf{\mu_{\text{JT}} = \frac{1}{C_p} \left( \frac{2 a}{R T} - b \right)}$$
* **The Inversion Temperature ($T_i$):**
  The temperature at which $\mu_{\text{JT}} = 0$ (throttling produces neither cooling nor heating):
  $$\frac{2 a}{R T_i} - b = 0 \implies \mathbf{T_i = \frac{2 a}{R b} = 2 T_B}$$
* **Master Temperature Hierarchy:**
  $$\mathbf{T_c : T_B : T_i = \frac{8 a}{27 R b} : \frac{a}{R b} : \frac{2 a}{R b} = \frac{8}{27} : 1 : 2 \approx 0.296 : 1.000 : 2.000}$$
  $$\mathbf{T_i = 2 T_B = \frac{27}{4} T_c = 6.75 T_c}$$
* **Joule-Thomson Throttling Regimes ($dP < 0$ upon expansion):**
  * If $T < T_i$: $\mu_{\text{JT}} > 0 \implies dT < 0 \implies$ **Cooling occurs** (Linde & Claude liquefaction processes).
  * If $T > T_i$: $\mu_{\text{JT}} < 0 \implies dT > 0 \implies$ **Heating occurs** ($\text{H}_2$ and $\text{He}$ at room temperature heat up upon expansion; they must be precooked below their $T_i$ before expansion!).


---


## 10. Comprehensive Master Summary Table & High-Yield JEE Traps


### 10.1 Master Thermodynamics Formula Sheet


| Thermodynamic Quantity | Formula / Canonical Form | High-Yield JEE Insight |
| :---: | :---: | :---: |
| **Ideal Gas Equation** | $P V = n R T \iff P M = \rho R T$ | Valid strictly as $P \to 0, T \to \infty$ |
| **RMS Speed** | $u_{\text{rms}} = \sqrt{\frac{3 R T}{M}}$ | Proportional to $\sqrt{T/M}$; enters pressure equation |
| **Average Speed** | $u_{\text{avg}} = \sqrt{\frac{8 R T}{\pi M}}$ | Enters collision rate and mean free path equations |
| **Most Probable Speed** | $u_{\text{mp}} = \sqrt{\frac{2 R T}{M}}$ | Location of peak maximum in Maxwell curve |
| **Speed Ratio** | $u_{\text{mp}} : u_{\text{avg}} : u_{\text{rms}} = \sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3}$ | Numerical values $\approx 1 : 1.128 : 1.224 = 7 : 8 : 9$ |
| **Graham's Effusion Law** | $r \propto \frac{P A}{\sqrt{M T}}$ | Multi-variable form; isotopic enrichment cascade $(M_2/M_1)^{k/2}$ |
| **Mean Free Path** | $\lambda = \frac{k_B T}{\sqrt{2}\pi \sigma^2 P}$ | Independent of $T$ at constant volume ($V = \text{const}$) |
| **Van der Waals Eq.** | $\left(P + \frac{a}{V_m^2}\right)(V_m - b) = R T$ | $b = 4 V_{\text{actual}}$; $a$ measures intermolecular attraction |
| **Boyle Temperature** | $T_B = \frac{a}{R b}$ | Second virial coefficient $B(T_B) = 0$; $Z \approx 1$ |
| **Critical Constants** | $V_c = 3b, P_c = \frac{a}{27b^2}, T_c = \frac{8a}{27Rb}$ | Triple root of cubic equation at inflection point |
| **Critical Compressibility** | $Z_c = \frac{P_c V_c}{R T_c} = \frac{3}{8} = 0.375$ | Universal invariant for all Van der Waals gases |
| **Inversion Temperature** | $T_i = \frac{2a}{Rb} = 2 T_B = 6.75 T_c$ | $\mu_{\text{JT}} = 0$; gas cools below $T_i$, heats above $T_i$ |


---


### 10.2 High-Yield Exam Traps & Common Diagnostic Errors


#### Trap 1: Mean Free Path Temperature Dependence at Constant Pressure vs. Constant Volume
* **At Constant Pressure ($P = \text{const}$):** $\lambda = \frac{k_B T}{\sqrt{2}\pi \sigma^2 P} \propto T$. Heating causes expansion, spacing out molecules $\implies \lambda$ increases.
* **At Constant Volume ($V = \text{const}$):** $N^* = N/V = \text{const} \implies \lambda = \frac{1}{\sqrt{2}\pi \sigma^2 N^*} = \mathbf{\text{Constant}}$. Heating increases molecular speeds and collision frequency, but **$\lambda$ remains strictly unchanged**!


#### Trap 2: Real Gas Compressibility Slopes at Low vs. High Pressure
* At low pressures: $\mathbf{Z = 1 - \frac{a P}{(R T)^2}}$. The initial slope $\left(\frac{\partial Z}{\partial P}\right)_{T}$ is **negative** and governed entirely by attraction parameter $a$.
* At high pressures: $\mathbf{Z = 1 + \frac{P b}{R T}}$. The slope is **positive** and governed entirely by size parameter $b$.
* At Boyle temperature $T_B$: The initial slope is **zero** ($\left(\frac{\partial Z}{\partial P}\right)_{T_B, P\to 0} = 0$).


#### Trap 3: The True Identity of Van der Waals Co-Volume $b$
* Many students assume $b$ is the volume of the molecules ($V_{\text{actual}}$).
* In reality, $b$ is the **excluded volume**, which is **FOUR TIMES the actual hard-sphere volume** ($b = 4 N_A \cdot \frac{4}{3}\pi r^3 = 4 V_{\text{actual}}$) because two colliding spheres exclude each other from an envelope of radius $2r$.


#### Trap 4: Dalton's Law with Chemically Reacting Gases
* Dalton's law of partial pressures applies **ONLY to non-reacting gas mixtures**.
* If reacting gases (e.g., $\text{NH}_3(g) + \text{HCl}(g) \to \text{NH}_4\text{Cl}(s)$, or $2\text{NO}(g) + \text{O}_2(g) \to 2\text{NO}_2(g)$) are mixed, Dalton's law **fails completely** until the stoichiometric chemical reaction and equilibrium are accounted for!