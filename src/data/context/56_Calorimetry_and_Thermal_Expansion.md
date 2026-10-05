Physics Revision Context: Chapter 56 — Calorimetry & Thermal Expansion


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Calorimetry _ Thermal Expansion/`, `1._Theory-Calorimetry__Thermal_expansion_English_z8rr15a.pdf`, and `2._Exercise_-1_to_3__HLP_PC_E_vLqlfPh.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Physics Thermal Core — Heat as Energy in Transit ($Q$), Mechanical Equivalent of Heat ($W = JQ$, $J \approx 4.186\text{ J/cal}$), Specific Heat Capacity ($dQ = ms\,dT$, $s_{\text{water}} = 1\text{ cal/g}^\circ\text{C} = 4186\text{ J/kg}\cdot\text{K}$, $s_{\text{ice}} = s_{\text{steam}} \approx 0.5\text{ cal/g}^\circ\text{C}$), Thermal Capacity ($C_{\text{th}} = ms$), Water Equivalent ($W = ms_{\text{body}}$), Latent Heat & Phase Transitions ($Q = mL$, Ice Fusion $L_f = 80\text{ cal/g} = 3.36\times 10^5\text{ J/kg}$, Steam Vaporization $L_v = 540\text{ cal/g} = 2.26\times 10^6\text{ J/kg}$), Heating Curves & Slope Inversion ($\frac{dT}{dQ} = \frac{1}{ms}$), Principle of Mixtures ($\sum Q_{\text{loss}} = \sum Q_{\text{gain}}$), Microscopic Origin of Thermal Expansion (Asymmetric Interatomic Potential Well), Dimensional Expansions (Linear $\Delta L = L_0\alpha\Delta T$, Superficial $\Delta A = A_0\beta\Delta T$, Volumetric $\Delta V = V_0\gamma\Delta T$, Golden Ratio $\alpha : \beta : \gamma = 1 : 2 : 3$), Cavity Expansion Invariance, Thermal Stress in Rigidly Clamped Rods ($\sigma = Y\alpha\Delta T$, Thermal Force $F = YA\alpha\Delta T$ Length-Independent), Bimetallic Strip Curvature ($R \approx \frac{t}{(\alpha_1 - \alpha_2)\Delta T}$), Simple Pendulum Clock Thermal Drift ($\frac{\Delta T}{T} = \frac{1}{2}\alpha\Delta\theta$, Daily Drift $\Delta t_{\text{day}} = 43,200\alpha\Delta\theta\text{ s}$), Expanding Measuring Scale Corrections ($L_{\text{true}} = L_{\text{reading}}(1 + \alpha_{\text{scale}}\Delta T)$), Real vs. Apparent Expansion of Liquids ($\gamma_{\text{app}} = \gamma_L - 3\alpha_C$, Overflow $\Delta V = V_0(\gamma_L - 3\alpha_C)\Delta T$), Temperature Dependence of Density ($\rho(T) \approx \rho_0(1 - \gamma\Delta T)$), Anomalous Expansion of Water ($0^\circ\text{C} \to 4^\circ\text{C}$, $\rho_{\max} = 1000\text{ kg/m}^3$ at $4^\circ\text{C}$), Submerged Body Buoyancy Attenuation ($F_B(T) \approx F_{B,0}[1 - (\gamma_L - \gamma_S)\Delta T]$), and Comprehensive High-Yield JEE Traps.


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fundamentals of Heat, Specific Heat, & Calorimetry


### 1.1 Heat & Mechanical Equivalent of Heat
Heat is thermal energy in transit between two thermodynamic systems or between adjacent parts of a body as a direct result of a temperature difference:
* Heat is **not a state function**; a body contains internal energy ($U$), not "heat". Once transferred, it is stored as microscopic kinetic and potential energies of the constituent atoms.
* **Mechanical Equivalent of Heat (Joule's Constant $J$):**
  When mechanical work $W$ is converted entirely into heat $Q$:
  $$\mathbf{W = J \cdot Q}$$
  where $J \approx 4.186 \text{ J/cal} \approx 4.2 \text{ J/cal} = 4.2 \times 10^3 \text{ J/kcal}$.
  *(Joule's constant $J$ is a numerical unit conversion factor, not a physical dimensioned constant).*


---


### 1.2 Specific Heat Capacity & Thermal Capacity
1. **Specific Heat Capacity ($s$ or $c$):**
   The quantity of heat required to raise the temperature of a unit mass of a substance by $1^\circ\text{C}$ (or $1\text{ K}$):
   $$\mathbf{s = \frac{1}{m} \frac{dQ}{dT} \implies \Delta Q = m \cdot s \cdot \Delta T}$$
   * **Standard Specific Heat Values:**
     * Water: $\mathbf{s_{\text{water}} = 1.0 \text{ cal/g}^\circ\text{C} = 1000 \text{ cal/kg}^\circ\text{C} = 4186 \text{ J/kg}\cdot\text{K}}$
     * Ice: $\mathbf{s_{\text{ice}} \approx 0.5 \text{ cal/g}^\circ\text{C} = 500 \text{ cal/kg}^\circ\text{C} \approx 2100 \text{ J/kg}\cdot\text{K}}$
     * Steam: $\mathbf{s_{\text{steam}} \approx 0.48 \text{ to } 0.5 \text{ cal/g}^\circ\text{C} \approx 2100 \text{ J/kg}\cdot\text{K}}$
2. **Molar Heat Capacity ($C$):**
   Heat required to raise the temperature of 1 mole of a substance by $1\text{ K}$:
   $$\mathbf{C = \frac{\Delta Q}{n \Delta T} = M \cdot s}$$
   where $M$ is the molar mass of the substance.
3. **Thermal Capacity (Heat Capacity, $C_{\text{th}}$):**
   The quantity of heat required to raise the temperature of an entire body by $1^\circ\text{C}$:
   $$\mathbf{C_{\text{th}} = \frac{\Delta Q}{\Delta T} = m \cdot s}$$
4. **Water Equivalent ($W$) of a Calorimeter/Body:**
   The mass of water that absorbs or evolves the exact same amount of thermal energy as the body for the same temperature change:
   $$W \cdot s_{\text{water}} \cdot \Delta T = m_{\text{body}} \cdot s_{\text{body}} \cdot \Delta T$$
   $$\mathbf{W = m_{\text{body}} \cdot \left(\frac{s_{\text{body}}}{s_{\text{water}}}\right)}$$
   *(If $s_{\text{body}}$ is expressed in $\text{cal/g}^\circ\text{C}$, then $s_{\text{water}} = 1\text{ cal/g}^\circ\text{C}$, so numerically $W = m \cdot s$ in grams).*


---


### 1.3 Latent Heat & Phase Transitions


![Calorimetry Phase Transitions and Heating Curves](/media/calorimetry_phase_transitions_and_heating_curves.webp)
*Description: Two-panel calorimetry and thermal energetics graphic: (A) The $T-Q$ heating curve detailing slope inversion ($\frac{dT}{dQ} = \frac{1}{ms}$), specific heat capacity comparisons between water and ice, and latent heat plateaus for fusion ($L_f = 80\text{ cal/g}$) and vaporization ($L_v = 540\text{ cal/g}$); (B) Mechanical equivalent of heat ($W = JQ$), waterfall heating ($\Delta T = gh/Js$), and lead bullet impact kinetic-to-thermal melting energetics.*


A phase transition is an isothermal process where heat is absorbed or evolved without altering the temperature of the substance:
$$\mathbf{Q = m \cdot L}$$
where $L$ is the **Latent Heat** of the phase transition ($\text{cal/g}$ or $\text{J/kg}$).
1. **Latent Heat of Fusion ($L_f$):**
   Heat required to change $1\text{ g}$ of substance from solid to liquid at its melting point:
   * For Ice at $0^\circ\text{C}$:
     $$\mathbf{L_f = 80 \text{ cal/g} = 80 \text{ kcal/kg} = 3.36 \times 10^5 \text{ J/kg}}$$
2. **Latent Heat of Vaporization ($L_v$):**
   Heat required to change $1\text{ g}$ of substance from liquid to vapor at its boiling point:
   * For Water at $100^\circ\text{C}$:
     $$\mathbf{L_v = 540 \text{ cal/g} = 540 \text{ kcal/kg} = 2.26 \times 10^6 \text{ J/kg}}$$
   * **Plateau Ratio Invariant:**
     $$\mathbf{\frac{L_v}{L_f} = \frac{540}{80} = 6.75}$$
     *(The vaporization plateau on a temperature-heat graph is $6.75$ times longer than the melting plateau for equal masses of water!).*


---


### 1.4 Heating Curve Analysis & The Slope Inversion Law
On a graph of Temperature ($T$) versus Heat added ($Q$):
$$\frac{dQ}{dT} = m \cdot s \implies \mathbf{\frac{dT}{dQ} = \frac{1}{m \cdot s}}$$
* **The Slope Inversion Rule:**
  The slope of the heating curve is **inversely proportional** to the specific heat capacity $s$:
  * **Steep Slope:** Low specific heat (substance warms up rapidly per unit heat input).
  * **Flat Slope:** High specific heat (substance warms up slowly).
  * **Horizontal Segment (Zero Slope):** Latent heat phase transition ($T = \text{Constant}$, $dQ > 0$).
* **Water vs. Ice Slopes:**
  Because $s_{\text{water}} = 1.0\text{ cal/g}^\circ\text{C}$ and $s_{\text{ice}} = 0.5\text{ cal/g}^\circ\text{C}$:
  $$\mathbf{\left(\frac{dT}{dQ}\right)_{\text{water}} = \frac{1}{2} \left(\frac{dT}{dQ}\right)_{\text{ice}}}$$
  The liquid water heating line rises with **half the slope** of the solid ice heating line!


---


### 1.5 Principle of Calorimetry & Mixing Algorithm
In an isolated, thermally insulated vessel (calorimeter):
$$\mathbf{\sum Q_{\text{lost by hot bodies}} = \sum Q_{\text{gained by cold bodies}}}$$
* **Equilibrium Temperature Formula (No Phase Change):**
  $$T_{\text{eq}} = \frac{m_1 s_1 T_1 + m_2 s_2 T_2 + m_3 s_3 T_3}{m_1 s_1 + m_2 s_2 + m_3 s_3}$$
* **Rigorous Ice-Water-Steam Mixing Decision Protocol:**
  Let $m_{\text{ice}}$ grams of ice at $T_{\text{ice}} < 0^\circ\text{C}$ be mixed with $m_{\text{water}}$ grams of water at $T_{\text{water}} > 0^\circ\text{C}$:
  * **Step 1:** Heat required to bring ice to $0^\circ\text{C}$ liquid water:
    $$Q_{\text{req}} = m_{\text{ice}} s_{\text{ice}} (0 - T_{\text{ice}}) + m_{\text{ice}} L_f$$
  * **Step 2:** Heat released by cooling water to $0^\circ\text{C}$:
    $$Q_{\text{avail}} = m_{\text{water}} s_{\text{water}} (T_{\text{water}} - 0)$$
  * **Step 3: Outcome Evaluation:**
    * **Case A ($Q_{\text{avail}} > Q_{\text{req}}$):** All ice melts completely! Final mixture is pure water at equilibrium temperature $T_{\text{eq}} > 0^\circ\text{C}$:
      $$T_{\text{eq}} = \frac{Q_{\text{avail}} - Q_{\text{req}}}{(m_{\text{ice}} + m_{\text{water}}) s_{\text{water}}}$$
    * **Case B ($Q_{\text{avail}} < Q_{\text{req}}$, but $Q_{\text{avail}} > m_{\text{ice}} s_{\text{ice}} |T_{\text{ice}}|$):** All ice warms to $0^\circ\text{C}$, but only a fraction $m_{\text{melted}}$ melts:
      $$m_{\text{melted}} = \frac{Q_{\text{avail}} - m_{\text{ice}} s_{\text{ice}} |T_{\text{ice}}|}{L_f}$$
      Equilibrium temperature is **strictly $0^\circ\text{C}$**, containing an ice-water mixture of $(m_{\text{ice}} - m_{\text{melted}})$ grams of ice and $(m_{\text{water}} + m_{\text{melted}})$ grams of water!
    * **Case C ($Q_{\text{avail}} < m_{\text{ice}} s_{\text{ice}} |T_{\text{ice}}|$):** Water freezes into ice at $0^\circ\text{C}$ or lower!


---


## 2. Microscopic Origin & Dimensional Thermal Expansion


### 2.1 The Asymmetric Interatomic Potential Well
Thermal expansion in solids is a direct consequence of the **asymmetry of the interatomic potential energy curve** $U(r)$:


![Thermal Expansion Mechanisms Stress and Bimetallic Strip](/media/thermal_expansion_mechanisms_stress_and_bimetallic_strip.webp)
*Description: Two-panel thermal expansion graphic: (A) Asymmetric interatomic potential well explaining thermal expansion, linear ($\alpha$), superficial ($\beta = 2\alpha$), and volumetric ($\gamma = 3\alpha$) expansion laws with the golden ratio $1:2:3$, and the Cavity Expansion Theorem; (B) Thermal stress in clamped rods ($\sigma = Y\alpha\Delta T$, force $F = YA\alpha\Delta T$ length-independent), and bimetallic strip bending radius ($R \approx \frac{t}{(\alpha_1 - \alpha_2)\Delta T}$).*


* At low temperatures, atoms vibrate near the potential minimum $r_0$.
* Due to strong short-range electronic repulsion, the curve is **much steeper for $r < r_0$** than for $r > r_0$.
* As thermal energy $k_B T$ increases, atoms oscillate with higher amplitudes; because the well is asymmetric, the mean vibrational position $\langle r \rangle$ shifts toward larger separations:
  $$\mathbf{\frac{d\langle r \rangle}{dT} > 0}$$
* **Fundamental Theoretical Insight:**
  If the interatomic potential well were strictly symmetric (parabolic, simple harmonic potential $U(r) = \frac{1}{2}k(r - r_0)^2$), thermal expansion would be **IDENTICALLY ZERO** regardless of temperature rise!


---


### 2.2 Linear, Superficial, & Volumetric Expansion
1. **Coefficient of Linear Expansion ($\alpha$):**
   The fractional increase in length per unit temperature change:
   $$\alpha = \frac{1}{L_0} \frac{dL}{dT} \implies \mathbf{\Delta L = L_0 \cdot \alpha \cdot \Delta T}$$
   $$\mathbf{L(T) = L_0 (1 + \alpha \Delta T)}$$
2. **Coefficient of Superficial (Areal) Expansion ($\beta$):**
   $$\beta = \frac{1}{A_0} \frac{dA}{dT} \implies \mathbf{\Delta A = A_0 \cdot \beta \cdot \Delta T}$$
   $$\mathbf{A(T) = A_0 (1 + \beta \Delta T)}$$
   * Derivation for isotropic solid ($A = L_x L_y$):
     $$A(T) = L_0^2 (1 + \alpha \Delta T)^2 \approx L_0^2 (1 + 2\alpha \Delta T) \implies \mathbf{\beta = 2\alpha}$$
3. **Coefficient of Cubical (Volumetric) Expansion ($\gamma$):**
   $$\gamma = \frac{1}{V_0} \frac{dV}{dT} \implies \mathbf{\Delta V = V_0 \cdot \gamma \cdot \Delta T}$$
   $$\mathbf{V(T) = V_0 (1 + \gamma \Delta T)}$$
   * Derivation for isotropic solid ($V = L^3$):
     $$V(T) = L_0^3 (1 + \alpha \Delta T)^3 \approx L_0^3 (1 + 3\alpha \Delta T) \implies \mathbf{\gamma = 3\alpha}$$
4. **The Golden Ratio for Isotropic Materials:**
   $$\mathbf{\alpha : \beta : \gamma = 1 : 2 : 3 \iff \frac{\alpha}{1} = \frac{\beta}{2} = \frac{\gamma}{3}}$$
5. **Anisotropic Solids:**
   If linear expansion coefficients differ along orthogonal crystalline axes ($\alpha_x, \alpha_y, \alpha_z$):
   $$\mathbf{\gamma = \alpha_x + \alpha_y + \alpha_z}$$


---


### 2.3 The Cavity Expansion Theorem
When a solid containing a hole, cavity, or internal void is heated:
* **The Theorem:**
  **Every cavity or hole in a solid expands in the exact same manner as if it were filled with the host solid material!**
* **Consequences:**
  1. A hole of diameter $d_0$ in a sheet of metal expands to $d(T) = d_0 (1 + \alpha \Delta T)$. The hole **NEVER shrinks**!
  2. The volume of a hollow spherical shell cavity increases by $\Delta V_{\text{cavity}} = V_{\text{cavity}} \gamma \Delta T$.
  3. The distance between any two marks or holes on a solid plate increases in proportion to $(1 + \alpha \Delta T)$.


---


## 3. Structural Mechanics of Thermal Expansion


### 3.1 Thermal Stress in Rigidly Clamped Rods
Consider a rod of initial length $L_0$, cross-sectional area $A$, Young's modulus $Y$, and linear expansion coefficient $\alpha$ rigidly clamped between two unyielding walls:
1. **Free Thermal Expansion Prevented:**
   $$\Delta L_{\text{free}} = L_0 \cdot \alpha \cdot \Delta T$$
2. **Thermal Strain ($\epsilon$):**
   Because the rigid walls allow zero net expansion, the compressive mechanical strain forced upon the rod is:
   $$\mathbf{\epsilon = \frac{\Delta L_{\text{free}}}{L_0} = \alpha \cdot \Delta T}$$
3. **Thermal Stress ($\sigma$):**
   From Hooke's Law of Elasticity:
   $$\mathbf{\sigma = Y \cdot \epsilon = Y \cdot \alpha \cdot \Delta T}$$
4. **Thermal Force Exerted on the Clamps ($F$):**
   $$\mathbf{F = A \cdot \sigma = Y \cdot A \cdot \alpha \cdot \Delta T}$$
   * **Length Independence Theorem:**
     The thermal force $F$ developed in a rigidly clamped rod is **COMPLETELY INDEPENDENT of the rod's length $L_0$**! (A 100-meter rod and a 1-meter rod of identical cross-section exert the exact same thermal force on their rigid clamps).
5. **Elastic Strain Energy Stored in the Rod ($U$):**
   $$\mathbf{U = \frac{1}{2} \cdot \text{Stress} \cdot \text{Strain} \cdot \text{Volume} = \frac{1}{2} (Y \alpha \Delta T) (\alpha \Delta T) (A L_0) = \frac{1}{2} Y A L_0 \alpha^2 (\Delta T)^2}$$


---


### 3.2 Bimetallic Strip Mechanics
A bimetallic strip consists of two strips of different metals of equal thickness $t/2$ (total thickness $t$) and initial length $L_0$, riveted together:
* Linear expansion coefficients: $\alpha_1 > \alpha_2$.
1. **Response to Temperature Changes:**
   * **Upon Heating ($\Delta T > 0$):** Metal 1 expands more than Metal 2. To accommodate this, the strip bends into a circular arc with **Metal 1 on the outer (convex) curve** and **Metal 2 on the inner (concave) curve**.
   * **Upon Cooling ($\Delta T < 0$):** Metal 1 contracts more than Metal 2. The strip bends in the opposite direction with **Metal 1 on the inner (concave) curve**.
2. **Radius of Curvature ($R$):**
   Let $R$ be the radius of curvature measured to the bonding interface:
   $$\frac{L_1}{L_2} = \frac{(R + t/4)\theta}{(R - t/4)\theta} \approx \frac{1 + \alpha_1 \Delta T}{1 + \alpha_2 \Delta T} \approx 1 + (\alpha_1 - \alpha_2)\Delta T$$
   Expanding and solving for $R$:
   $$\mathbf{R \approx \frac{t}{(\alpha_1 - \alpha_2) \cdot \Delta T}}$$
   * The curvature $\frac{1}{R}$ is directly proportional to temperature rise $\Delta T$ and coefficient difference $(\alpha_1 - \alpha_2)$.


---


## 4. Liquid Expansion, Anomalous Water, & Instrument Errors


### 4.1 Real vs. Apparent Expansion of Liquids


![Liquid Apparent Expansion Density and Pendulum Clock Drift](/media/liquid_apparent_expansion_density_and_pendulum_clock_drift.webp)
*Description: Two-panel liquid expansion and measurement drift graphic: (A) Real versus apparent expansion of liquids in solid containers ($\gamma_{\text{app}} = \gamma_L - 3\alpha_C$), the three liquid level regimes, temperature-density variations, and the anomalous expansion of water ($0^\circ\text{C}$ to $4^\circ\text{C}$, $\rho_{\max} = 1000\text{ kg/m}^3$); (B) Simple pendulum clock thermal drift ($\Delta t_{\text{day}} = 43,200\alpha\Delta\theta\text{ s}$), and expanding measuring scale reading corrections.*


Because liquids must be held in a solid container, when the system is heated, both the liquid and the container expand simultaneously:
* Let $\gamma_L$ be the **real volumetric expansion coefficient** of the liquid.
* Let $\gamma_C = 3\alpha_C$ be the **volumetric expansion coefficient** of the container material.
1. **Apparent Volumetric Expansion Coefficient ($\gamma_{\text{app}}$):**
   $$\mathbf{\gamma_{\text{app}} = \gamma_L - \gamma_C = \gamma_L - 3 \alpha_C}$$
2. **Overflow Volume ($\Delta V_{\text{overflow}}$):**
   If a container of volume $V_0$ is filled to the brim:
   $$\Delta V_L = V_0 \gamma_L \Delta T, \quad \Delta V_C = V_0 \gamma_C \Delta T$$
   $$\mathbf{\Delta V_{\text{overflow}} = \Delta V_L - \Delta V_C = V_0 (\gamma_L - 3 \alpha_C) \Delta T = V_0 \gamma_{\text{app}} \Delta T}$$
3. **The Three Liquid Level Behaviors:**
   * **$\gamma_L > 3\alpha_C$:** Liquid level rises and overflows ($\Delta V > 0$).
   * **$\gamma_L = 3\alpha_C$:** Liquid level remains **flush with the rim at all temperatures**.
   * **$\gamma_L < 3\alpha_C$:** Liquid level **drops/recedes** inside the vessel upon heating!


---


### 4.2 Variation of Density with Temperature
Mass of a body is invariant under temperature changes:
$$\rho(T) = \frac{m}{V(T)} = \frac{m}{V_0 (1 + \gamma \Delta T)} = \rho_0 (1 + \gamma \Delta T)^{-1}$$
Using binomial approximation for $\gamma \Delta T \ll 1$:
$$\mathbf{\rho(T) \approx \rho_0 (1 - \gamma \Delta T)}$$
Density decreases linearly with rising temperature for normal substances.


---


### 4.3 Anomalous Expansion of Water ($0^\circ\text{C}$ to $4^\circ\text{C}$)
Water exhibits unique thermal behavior between $0^\circ\text{C}$ and $4^\circ\text{C}$:
* **Contraction on Heating:** As water is heated from $0^\circ\text{C}$ to $4^\circ\text{C}$, its volume **decreases** ($\gamma_{\text{water}} < 0$).
* **Minimum Volume & Maximum Density:**
  At $T = 3.98^\circ\text{C} \approx 4^\circ\text{C}$:
  * Volume $V$ reaches a **global minimum**.
  * Density $\rho$ reaches a **global maximum**:
    $$\mathbf{\rho_{\max} = 1000 \text{ kg/m}^3 = 1.0 \text{ g/cm}^3}$$
* Above $4^\circ\text{C}$, water expands normally ($\gamma > 0$).
* **Ecological Significance (Thermal Stratification of Lakes):**
  In winter, surface water cools. As it approaches $4^\circ\text{C}$, it becomes densest and sinks to the lake bed. Water colder than $4^\circ\text{C}$ stays at the surface and freezes into ice at $0^\circ\text{C}$. Because ice has lower density ($\approx 917\text{ kg/m}^3$) and acts as a thermal insulator, the lake bed stays liquid at $4^\circ\text{C}$, enabling aquatic life to survive frozen winters!


---


### 4.4 Apparent Weight & Buoyancy Variations
Consider a solid of volume $V_0$, density $\rho_S$, and cubical expansion coefficient $\gamma_S$ completely submerged in a liquid of density $\rho_L$ and expansion coefficient $\gamma_L$:
1. **Buoyant Force (Upthrust) at Temperature $T$:**
   $$F_B(T) = V_{\text{sub}}(T) \cdot \rho_L(T) \cdot g = \left[ V_0 (1 + \gamma_S \Delta T) \right] \cdot \left[ \frac{\rho_{L,0}}{1 + \gamma_L \Delta T} \right] \cdot g$$
   $$\mathbf{F_B(T) \approx F_{B,0} \left[ 1 - (\gamma_L - \gamma_S) \Delta T \right]}$$
2. **Apparent Weight of Submerged Body ($W_{\text{app}}$):**
   $$W_{\text{app}} = W_{\text{true}} - F_B$$
   * For virtually all solid-liquid systems, liquid expansion exceeds solid expansion ($\gamma_L > \gamma_S$).
   * Therefore, **Upthrust $F_B$ decreases as temperature rises**!
   * Consequently, the apparent submerged weight **INCREASES with rising temperature**:
     $$\mathbf{\Delta W_{\text{app}} = F_{B,0} (\gamma_L - \gamma_S) \Delta T > 0}$$


---


### 4.5 Pendulum Clock Thermal Drift
The time period of a simple pendulum is:
$$T = 2\pi \sqrt{\frac{l}{g}}$$
Differentiating logarithmically:
$$\frac{\Delta T}{T} = \frac{1}{2} \frac{\Delta l}{l} = \mathbf{\frac{1}{2} \alpha \cdot \Delta \theta}$$
where $\alpha$ is the coefficient of linear expansion of the pendulum rod, and $\Delta \theta = \theta_{\text{ambient}} - \theta_{\text{calibrated}}$.
* **Daily Time Error (Lost or Gained in 1 Day = $86,400\text{ s}$):**
  $$\mathbf{\Delta t_{\text{day}} = \frac{1}{2} \alpha \cdot \Delta \theta \times 86,400 = 43,200 \cdot \alpha \cdot \Delta \theta \quad \text{seconds/day}}$$
* **Operational Rules:**
  1. **Hot Weather ($\Delta \theta > 0$, Summer):** Length $l$ increases $\implies$ Period $T$ increases $\implies$ Pendulum swings slower $\implies$ **Clock runs slow and LOSES time**!
  2. **Cold Weather ($\Delta \theta < 0$, Winter):** Length $l$ decreases $\implies$ Period $T$ decreases $\implies$ Pendulum swings faster $\implies$ **Clock runs fast and GAINS time**!


---


### 4.6 Measuring Scale Temperature Corrections
A measuring tape or metallic scale calibrated to read accurately at temperature $T_0$ has graduation marks separated by unit length $d_0$:
* At temperature $T > T_0$, each unit mark expands: $d = d_0 (1 + \alpha_{\text{scale}} \Delta T)$.
1. **Measuring an Unheated Object with a Warm Scale:**
   Because each scale division is physically longer than marked, the scale registers **fewer divisions**:
   $$\mathbf{L_{\text{true}} = L_{\text{reading}} (1 + \alpha_{\text{scale}} \Delta T)}$$
   *(The measured reading is smaller than the true length: $L_{\text{reading}} < L_{\text{true}}$).*
2. **Measuring an Object that Also Expands ($\alpha_{\text{obj}}$):**
   $$\mathbf{L_{\text{reading}}(T) \approx L_0 \left[ 1 + (\alpha_{\text{obj}} - \alpha_{\text{scale}}) \Delta T \right]}$$
   * If $\alpha_{\text{obj}} > \alpha_{\text{scale}}$: Measured reading increases.
   * If $\alpha_{\text{obj}} = \alpha_{\text{scale}}$: Measured reading is **strictly independent of temperature**!


---


## 5. Master Formula Sheet & High-Yield Diagnostic Traps


### 5.1 Master Calorimetry & Thermal Expansion Formula Table


| Physical Quantity / Phenomenon | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Mechanical Equivalent of Heat** | $W = J Q$ ($J = 4.186\text{ J/cal}$) | Work-heat conversion |
| **Sensible Heat Transfer** | $\Delta Q = m s \Delta T$ | Specific heat equation |
| **Latent Heat Transfer** | $Q = m L$ | Phase transitions ($L_f = 80$, $L_v = 540\text{ cal/g}$) |
| **Heating Curve Slope** | $\frac{dT}{dQ} = \frac{1}{m s}$ | Inverse specific heat rule |
| **Water Equivalent** | $W = m s_{\text{body}}$ (in grams) | Vessel thermal substitution |
| **Linear Expansion** | $\Delta L = L_0 \alpha \Delta T$ | $L(T) = L_0 (1 + \alpha \Delta T)$ |
| **Superficial Expansion** | $\Delta A = A_0 \beta \Delta T$ | $\beta = 2\alpha$ for isotropic solids |
| **Cubical Expansion** | $\Delta V = V_0 \gamma \Delta T$ | $\gamma = 3\alpha = \alpha_x + \alpha_y + \alpha_z$ |
| **Expansion Golden Ratio** | $\alpha : \beta : \gamma = 1 : 2 : 3$ | Universal isotropic relation |
| **Cavity Expansion** | $\Delta V_{\text{hole}} = V_{\text{hole}} \gamma \Delta T$ | Cavities expand as solid plugs |
| **Thermal Stress** | $\sigma = Y \alpha \Delta T$ | Clamped rod thermal pressure |
| **Thermal Force on Clamps** | $F = Y A \alpha \Delta T$ | Strictly length-independent |
| **Bimetallic Strip Radius** | $R \approx \frac{t}{(\alpha_1 - \alpha_2)\Delta T}$ | Outer convex side for higher $\alpha$ |
| **Apparent Liquid Expansion** | $\gamma_{\text{app}} = \gamma_L - 3\alpha_C$ | Relative to container |
| **Liquid Overflow Volume** | $\Delta V_{\text{overflow}} = V_0 (\gamma_L - 3\alpha_C)\Delta T$ | Overflow threshold $\gamma_L > 3\alpha_C$ |
| **Temperature Density Law** | $\rho(T) \approx \rho_0 (1 - \gamma \Delta T)$ | Density dilution with heat |
| **Anomalous Water Peak** | $\rho_{\max} = 1000\text{ kg/m}^3$ at $4^\circ\text{C}$ | Negative $\gamma$ from $0^\circ\text{C}$ to $4^\circ\text{C}$ |
| **Submerged Upthrust Shift** | $F_B(T) \approx F_{B,0}[1 - (\gamma_L - \gamma_S)\Delta T]$ | Apparent weight increases |
| **Pendulum Time Error** | $\Delta t_{\text{day}} = 43,200 \alpha \Delta\theta\text{ s/day}$ | Runs slow in summer, fast in winter |
| **Scale Expansion Correction** | $L_{\text{true}} = L_{\text{reading}}(1 + \alpha_{\text{scale}}\Delta T)$ | Under-reading on hot scales |


---


### 5.2 High-Yield Exam Traps & Common Conceptual Errors


#### Trap 1: The Hole Shrinkage Fallacy
* **The Error:** Believing that when a metal washer or plate with a central hole is heated, the metal expands inward into the hole, causing the hole diameter to decrease.
* **The Physics:** All interatomic distances expand outward uniformly, exactly like photographic magnification. The hole expands with the host material: $d(T) = d_0 (1 + \alpha \Delta T)$. The hole **NEVER shrinks**!


#### Trap 2: Thermal Force Length Dependency Fallacy
* **The Error:** Assuming that because $\Delta L = L_0 \alpha \Delta T$ depends on initial length $L_0$, a longer clamped rod must exert a greater thermal force on the walls.
* **The Physics:** Thermal strain is $\epsilon = \Delta L / L_0 = \alpha \Delta T$ (length cancels out!). Consequently:
  $$F = A \sigma = Y A \alpha \Delta T$$
  The thermal force is **COMPLETELY INDEPENDENT OF LENGTH**!


#### Trap 3: Liquid Level in Heated Flask Fallacy
* **The Error:** Stating that when a flask full of liquid is placed on a flame, the liquid level immediately begins rising.
* **The Physics:** Heat first reaches the solid glass flask before conducting into the bulk liquid. The flask expands first, causing the liquid level to **BRIEFLY DROP** before rising and overflowing as the liquid absorbs heat ($\gamma_L \gg \gamma_{\text{glass}}$)!


#### Trap 4: Clock Thermal Drift Sign Inversion
* **The Error:** Believing that because a pendulum expands in summer, it completes more oscillations and runs fast.
* **The Physics:** Period is $T = 2\pi\sqrt{l/g}$. Longer length $l$ means **longer period $T$**. Each tick takes more real seconds; therefore, the clock completes **fewer ticks per hour** and **runs slow (losing time)**!