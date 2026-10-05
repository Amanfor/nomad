Physics Revision Context: Chapter 46 — Elasticity & Solid Mechanics


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Elasticity and Viscosity/`, `Elasticity _ Viscosity_Theory.pdf`, `3._Elasticity_and_viscosity handout.pdf`, and `Elasticity _ Viscosity_Exercise.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Physics Mechanics & Properties of Matter Core — Microscopic & Macroscopic Foundations of Elasticity (Interatomic Potential Wells $U(r)$ and Restoring Forces $F = -dU/dr$), Stress-Strain Tensor Mechanics (Normal Tensile/Compressive Stresses $\sigma = F_\perp/A$, Tangential Shear Stresses $\tau = F_\parallel/A$, Longitudinal $\epsilon_L = \Delta L/L$, Volumetric $\epsilon_V = \Delta V/V$, Shear Angle $\theta = \Delta x/h$, and Lateral Strains), Hooke's Law & The Complete Engineering Stress-Strain Curve (Proportional Limit, Elastic Limit/Yield Point $\sigma_y$, Plastic Flow Plateau, Strain Hardening, Ultimate Tensile Strength $\sigma_{\text{uts}}$, Necking, and Rupture Points for Ductile, Brittle, and Elastomeric Materials), Elastic Hysteresis Loops & Mechanical Energy Dissipation, The Three Moduli of Elasticity ($Y, B, \eta$) & Compressibility ($K = 1/B$), Poisson's Ratio ($\sigma = -(\Delta r/r)/(\Delta L/L)$) Bounds ($-1 \le \sigma \le 0.5$) & Fractional Volume Change ($\frac{\Delta V}{V} = \frac{\Delta L}{L}(1 - 2\sigma)$), Universal Inter-Moduli Relations ($Y = 3B(1-2\sigma), Y = 2\eta(1+\sigma), \frac{9}{Y} = \frac{1}{B} + \frac{3}{\eta}$), Longitudinal Elongations under External Loads, Self-Weight Integrals ($\Delta L_{\text{self}} = \frac{MgL}{2AY} = \frac{\rho g L^2}{2Y}$), Conical Wires ($\Delta L = \frac{\rho g L^2}{6Y}$), Truncated Tapered Rods ($\Delta L = \frac{FL}{\pi r_1 r_2 Y}$), Rotational Strain Dynamics (Rod Rotating about Pivot $\Delta L = \frac{\rho \omega^2 L^3}{3Y}$, Rotating Thin Rings & Hoop Stress $\sigma = \rho v^2$), Elastic Strain Energy Density ($u = \frac{1}{2}\times\text{stress}\times\text{strain} = \frac{\text{stress}^2}{2Y} = \frac{1}{2}Y\epsilon^2$) & The 50% External Gravitational Work Dissipation Paradox, Thermal Stress Dynamics ($\sigma_{\text{th}} = Y \alpha \Delta T, F_{\text{th}} = Y A \alpha \Delta T$) & Series Clamped Composites, Structural Flexural Beam Bending ($\delta = \frac{WL^3}{4Ybd^3}$) with I-Girder Design Principles, Torsion of Solid and Hollow Cylindrical Shafts ($\tau = C \theta = \frac{\pi \eta r^4}{2L}\theta$), and Comprehensive High-Yield JEE Traps.


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fundamentals of Elasticity, Stress, & Strain


### 1.1 Microscopic Origin: Interatomic Potential Energy Curve
Solids maintain a definite equilibrium shape and size because of balanced electromagnetic interatomic forces:
* **Interatomic Potential Energy $U(r)$:**
  At equilibrium interatomic separation $r = r_0$ (typically $\sim 1\text{ to } 3\text{ \AA}$):
  $$\mathbf{F(r) = -\frac{dU}{dr} = 0 \quad \text{at } r = r_0}$$
  The potential energy $U(r)$ is at a global minimum: $U(r_0) = -U_0$ (Bond Energy).
* **Restoring Force Response:**
  * When atoms are compressed ($r < r_0$): $\frac{dU}{dr} < 0 \implies F > 0$ (Strong repulsive force due to overlapping electron clouds).
  * When atoms are stretched ($r > r_0$): $\frac{dU}{dr} > 0 \implies F < 0$ (Attractive force due to nucleus-electron dipole attractions).
  * For small displacements $x = r - r_0 \ll r_0$:
    $$F(x) \approx -\left(\left.\frac{d^2U}{dr^2}\right|_{r_0}\right) x = -k_{\text{atomic}} \cdot x$$
    Linear elasticity (Hooke's Law) is a direct consequence of the parabolic approximation of the interatomic potential well near $r_0$!


---


### 1.2 The Concept of Stress ($\sigma, \tau$)
When external deforming forces act on a body, internal restoring forces arise between neighboring atomic planes to oppose the deformation:
$$\mathbf{\text{Stress} = \lim_{\Delta A \to 0} \frac{\Delta F_{\text{restoring}}}{\Delta A}}$$
*(In static equilibrium, $F_{\text{restoring}} = F_{\text{external}}$).*
* **SI Unit:** $\text{N/m}^2 = \text{Pascal (Pa)}$. Dimensions: $[\text{M L}^{-1} \text{T}^{-2}]$.
* **Types of Stress:**
  1. **Normal Stress ($\sigma$):** Deforming force acts perpendicular to the cross-sectional area:
     $$\mathbf{\sigma = \frac{F_\perp}{A}}$$
     * **Tensile Stress:** Causes longitudinal elongation ($\Delta L > 0$).
     * **Compressive Stress:** Causes longitudinal compression ($\Delta L < 0$).
  2. **Tangential / Shear Stress ($\tau$):** Deforming force acts parallel to the surface:
     $$\mathbf{\tau = \frac{F_\parallel}{A}}$$
  3. **Hydraulic / Volumetric Stress ($\sigma_v$):** Uniform normal hydrostatic pressure acting equally from all directions:
     $$\mathbf{\sigma_v = \Delta P}$$


---


### 1.3 The Concept of Strain ($\epsilon$)
Strain is the fractional geometrical deformation produced in a body by an applied stress. It is a **pure dimensionless and unitless number**:
1. **Longitudinal Strain ($\epsilon_L$):**
   $$\mathbf{\epsilon_L = \frac{\Delta L}{L}}$$
2. **Shear Strain ($\theta$ or $\gamma$):**
   The relative displacement $\Delta x$ between two parallel planes separated by distance $h$:
   $$\mathbf{\theta = \frac{\Delta x}{h} = \tan\theta \quad (\text{for small angles})}$$
3. **Volumetric Strain ($\epsilon_V$):**
   $$\mathbf{\epsilon_V = \frac{\Delta V}{V}}$$
4. **Lateral Strain ($\epsilon_{\text{lateral}}$):**
   When a wire is stretched longitudinally, its diameter/radius contracts laterally:
   $$\mathbf{\epsilon_{\text{lateral}} = -\frac{\Delta r}{r} = -\frac{\Delta d}{d}}$$


---


## 2. Hooke's Law & The Complete Engineering Stress-Strain Curve


### 2.1 Hooke's Law
"Within the limit of proportionality, stress is directly proportional to strain for small deformations:"
$$\mathbf{\text{Stress} \propto \text{Strain} \implies \frac{\text{Stress}}{\text{Strain}} = E \quad (\text{Modulus of Elasticity})}$$


---


### 2.2 Visual Preservation: Stress-Strain Curve & Elastic Moduli


![Stress Strain Curve and Elastic Moduli](/media/stress_strain_curve_and_elastic_moduli.webp)
*Description: Two-panel comprehensive solid mechanics graphic: (A) The engineering stress-strain curve detailing proportional limit, elastic limit/yield point ($\sigma_y$), plastic flow, ultimate tensile strength ($\sigma_{\text{uts}}$), necking, and rupture point, alongside comparative curves for ductile, brittle, and elastomeric materials with elastic hysteresis loop energetics; (B) Formulations for the three elastic moduli ($Y, B, \eta$), Poisson's ratio ($\sigma$), volumetric deformation scaling ($\Delta V/V = (\Delta L/L)(1 - 2\sigma)$), and universal inter-moduli continuum relationships.*


---


### 2.3 Anatomical Analysis of the Tensile Stress-Strain Curve
When a ductile metal wire (e.g., mild steel) is stretched under increasing uniaxial tension until fracture:
1. **Region $O \to P$ (Proportional Limit):**
   * Stress is strictly proportional to strain.
   * Curve is linear; slope equals **Young's Modulus ($Y = \tan\alpha$)**.
2. **Region $P \to E$ (Elastic Limit / Yield Point $\sigma_y$):**
   * Non-linear deformation, but Hookean reversibility is preserved.
   * If the deforming force is removed, the material returns completely to its initial dimensions ($L_0$).
3. **Region $E \to Y$ (Yield Plateau & Plastic Flow):**
   * The applied stress causes dislocation glide along crystalline slip planes.
   * Strain increases rapidly with little or no increase in stress.
   * On unloading from this region, the wire does **not** return to origin; it retains a **Permanent Set (Plastic Deformation)**.
4. **Region $Y \to U$ (Strain Hardening & Ultimate Tensile Strength $\sigma_{\text{uts}}$):**
   * Dislocation entanglement creates structural resistance, requiring higher stress to produce further deformation.
   * Point $U$ represents the **Ultimate Tensile Strength ($\sigma_{\text{uts}}$)**, the maximum nominal stress the wire can support.
5. **Region $U \to B$ (Necking & Fracture Point):**
   * Beyond $U$, plastic deformation localizes into a narrow constriction ("neck").
   * The actual cross-sectional area at the neck drops precipitously, and the wire breaks at **Fracture / Rupture Point $B$**.


---


### 2.4 Material Rheology: Ductile, Brittle, and Elastomers
* **Ductile Materials (e.g., Copper, Mild Steel, Gold, Aluminum):**
  * Wide plastic deformation region between elastic limit $E$ and rupture point $B$ ($\epsilon_{\text{plastic}} > 5\%$).
  * Can be hammered into thin foils or drawn into slender wires.
* **Brittle Materials (e.g., Cast Iron, Glass, Ceramics, High-Carbon Steel):**
  * Fracture point $B$ lies immediately adjacent to the elastic limit $E$.
  * Virtually zero plastic deformation; fails catastrophically under tensile overload without necking.
* **Elastomers (e.g., Vulcanized Natural Rubber, Aorta Tissue):**
  * Huge elastic range: can undergo reversible strains of $300\%\text{ to }700\%$.
  * Does **not** obey Hooke's Law even at small strains (stress-strain curve is non-linear throughout).
  * Has no well-defined plastic range; ruptures cleanly at high elongation.


---


### 2.5 Elastic Hysteresis & Damping Energetics
When an elastomeric material (such as vulcanized rubber) is cyclically loaded and unloaded:
* The unloading curve falls **below** the loading curve, forming an **Elastic Hysteresis Loop**.
* **Physical Significance:**
  $$\mathbf{\text{Energy Dissipated as Heat per Unit Volume per Cycle} = \text{Area of Hysteresis Loop}}$$
  $$\mathbf{\Delta Q = \oint \sigma d\epsilon \quad [\text{J/m}^3]}$$
* **Engineering Application:** Materials with large hysteresis loops (vulcanized rubber) convert mechanical vibration and shock into thermal energy, making them superior for **automobile tires, engine mounts, and seismic isolators**!


---


## 3. The Three Moduli of Elasticity & Interrelations


### 3.1 Young's Modulus ($Y$)
The ratio of longitudinal stress to longitudinal strain within the proportional limit:
$$\mathbf{Y = \frac{\text{Longitudinal Stress}}{\text{Longitudinal Strain}} = \frac{F/A}{\Delta L/L} = \frac{F \cdot L}{A \cdot \Delta L}}$$
* Applicable **exclusively to solid bodies** (liquids and gases cannot support longitudinal shear or tensile stress).
* SI Unit: $\text{N/m}^2 = \text{Pa}$. Typical values: Steel ($Y \approx 2 \times 10^{11}\text{ Pa}$), Copper ($Y \approx 1.1 \times 10^{11}\text{ Pa}$), Rubber ($Y \approx 10^7\text{ Pa}$).
* **Steel is More Elastic than Rubber:** Because for an identical applied stress, steel undergoes far smaller strain than rubber ($\Delta L_{\text{steel}} \ll \Delta L_{\text{rubber}} \implies Y_{\text{steel}} \gg Y_{\text{rubber}}$)!


---


### 3.2 Bulk Modulus ($B$) & Compressibility ($K$)
The ratio of volumetric stress (excess pressure $\Delta P$) to volumetric strain:
$$\mathbf{B = -\frac{\Delta P}{\Delta V / V} = -V \frac{dP}{dV}}$$
*(The negative sign ensures $B > 0$, since an increase in pressure $\Delta P > 0$ produces a decrease in volume $\Delta V < 0$).*
* **Compressibility ($K$):** The fractional change in volume per unit increase in pressure:
  $$\mathbf{K = \frac{1}{B} = -\frac{1}{V}\frac{dV}{dP} \quad [\text{Pa}^{-1} = \text{m}^2/\text{N}]}$$
* Applicable to **solids, liquids, and gases**.
  * For solids and liquids, $B$ is very high ($\sim 10^9\text{ to } 10^{11}\text{ Pa}$).
  * For ideal gases:
    * **Isothermal Bulk Modulus:** $P V = \text{const} \implies P dV + V dP = 0 \implies \mathbf{B_{\text{iso}} = P}$.
    * **Adiabatic Bulk Modulus:** $P V^\gamma = \text{const} \implies \gamma P V^{\gamma-1} dV + V^\gamma dP = 0 \implies \mathbf{B_{\text{adia}} = \gamma P}$.


---


### 3.3 Shear / Rigidity Modulus ($\eta$)
The ratio of tangential shear stress to shear strain within the elastic limit:
$$\mathbf{\eta = \frac{\text{Shear Stress}}{\text{Shear Strain}} = \frac{F_\parallel / A}{\theta} = \frac{F_\parallel / A}{\Delta x / h}}$$
* Applicable **strictly to solids** (liquids and gases have zero shear modulus: $\eta_{\text{fluid}} = 0$, meaning they cannot resist static shear).


---


### 3.4 Poisson's Ratio ($\sigma$)
When a cylinder or wire is stretched longitudinally, its length increases while its lateral dimensions (radius $r$, diameter $d$, width $w$) simultaneously contract:
$$\mathbf{\sigma = -\frac{\text{Lateral Strain}}{\text{Longitudinal Strain}} = -\frac{\Delta r / r}{\Delta L / L} = -\frac{\Delta d / d}{\Delta L / L}}$$
*(The negative sign makes $\sigma$ positive, since $\Delta r < 0$ when $\Delta L > 0$).*
* **Volume Change under Longitudinal Tension:**
  Consider a circular cylinder of length $L$ and radius $r$:
  $$V = \pi r^2 L$$
  Taking logarithms and differentiating:
  $$\ln V = \ln \pi + 2\ln r + \ln L \implies \frac{\Delta V}{V} = 2\frac{\Delta r}{r} + \frac{\Delta L}{L}$$
  Since $\frac{\Delta r}{r} = -\sigma \frac{\Delta L}{L}$:
  $$\mathbf{\frac{\Delta V}{V} = \frac{\Delta L}{L} (1 - 2\sigma)}$$
* **Limiting Bounds of Poisson's Ratio:**
  1. For an incompressible solid undergoing zero volume change ($\Delta V = 0$):
     $$1 - 2\sigma = 0 \implies \mathbf{\sigma = 0.5}$$
  2. For ordinary materials that expand in volume upon stretching ($\Delta V > 0$):
     $$1 - 2\sigma > 0 \implies \mathbf{\sigma < 0.5}$$
  3. By thermodynamic stability of isotropic materials, bulk modulus must be positive ($B > 0 \implies 1 - 2\sigma > 0 \implies \sigma < 0.5$) and shear modulus must be positive ($\eta > 0 \implies 1 + \sigma > 0 \implies \sigma > -1$):
     $$\mathbf{-1.0 \le \sigma \le +0.5 \quad (\text{Theoretical Limits})}$$
     $$\mathbf{0.0 \le \sigma \le +0.5 \quad (\text{Practical Limits for Real Engineering Solids})}$$


---


### 3.5 Universal Inter-Moduli Relations
In linear isotropic continuum elasticity, the four elastic constants ($Y, B, \eta, \sigma$) are interrelated by four master equations:
$$\mathbf{Y = 3B(1 - 2\sigma)}$$
$$\mathbf{Y = 2\eta(1 + \sigma)}$$
$$\mathbf{\frac{9}{Y} = \frac{1}{B} + \frac{3}{\eta} \iff Y = \frac{9B\eta}{3B + \eta}}$$
$$\mathbf{\sigma = \frac{3B - 2\eta}{6B + 2\eta}}$$


---


## 4. Longitudinal Elongations & Distributed Force Integrals


### 4.1 Uniform Wire under External Tensile Load
For a wire of length $L$, uniform cross-sectional area $A$, and Young's modulus $Y$ subjected to tensile load $F$:
$$\mathbf{\Delta L = \frac{F \cdot L}{A \cdot Y}}$$
* **Equivalent Spring Constant ($k_{\text{eq}}$):**
  $$F = \left(\frac{Y A}{L}\right) \Delta L \implies \mathbf{k_{\text{eq}} = \frac{Y A}{L}}$$
* **Combinations of Elastic Rods:**
  1. **Series (End-to-End):**
     $$\frac{1}{k_{\text{eq}}} = \frac{1}{k_1} + \frac{1}{k_2} \implies \mathbf{\frac{L_{\text{total}}}{A Y_{\text{eq}}} = \frac{L_1}{A_1 Y_1} + \frac{L_2}{A_2 Y_2}}$$
  2. **Parallel (Side-by-Side):**
     $$k_{\text{eq}} = k_1 + k_2 \implies \mathbf{Y_{\text{eq}}(A_1 + A_2) = Y_1 A_1 + Y_2 A_2}$$


---


### 4.2 Visual Preservation: Elongation under Forces, Self-Weight, & Rotation


![Elongation under Forces Self Weight and Rotation](/media/elongation_under_forces_self_weight_and_rotation.webp)
*Description: Two-panel distributed elastodynamics graphic: (A) Longitudinal extensions detailing uniform wires under external force ($FL/AY$), self-weight elongation integrals ($\frac{MgL}{2AY} = \frac{\rho g L^2}{2Y}$), vertical conical wires ($\frac{\rho g L^2}{6Y}$), and truncated tapered rods ($\frac{FL}{\pi r_1 r_2 Y}$); (B) Dynamic rotational strain profiles showing centrifugal tension distributions ($T(x) = \frac{M\omega^2}{2L}(L^2 - x^2)$), net rotational elongation ($\frac{\rho \omega^2 L^3}{3Y}$), and thin rotating rings under hoop stress ($\sigma = \rho v^2$).*


---


### 4.3 Elongation of a Heavy Uniform Wire under Its Own Weight
A heavy uniform wire of total mass $M$, length $L$, density $\rho = M/(AL)$, and cross-sectional area $A$ hangs vertically from a rigid ceiling:
* Consider an infinitesimal element $dx$ at distance $x$ from the free bottom end.
* The tension $T(x)$ supporting the wire below it is:
  $$T(x) = \left(\frac{M}{L} x\right) g = \rho A g x$$
  * Tension is maximum at ceiling ($x = L$): $T_{\max} = M g$.
  * Tension is zero at bottom tip ($x = 0$): $T(0) = 0$.
* The elongation of element $dx$ is $d(\Delta L) = \frac{T(x) dx}{A Y}$:
  $$\Delta L_{\text{self}} = \int_0^L \frac{\rho A g x dx}{A Y} = \frac{\rho g}{Y} \int_0^L x dx = \frac{\rho g L^2}{2Y}$$
  $$\mathbf{\Delta L_{\text{self}} = \frac{M g L}{2 A Y} = \frac{\rho g L^2}{2 Y}}$$
  * **Center-of-Mass Equivalence:** The elongation produced by the wire's own weight is **EXACTLY HALF** the elongation produced if a concentrated mass $M$ were hung at the bottom tip!


---


### 4.4 Elongation of an Inverted Conical Wire under Self-Weight
A solid cone of density $\rho$, base radius $R_0$, and vertical length $L$ hangs vertically from its circular base with its apex pointing downward:
* At distance $x$ from the bottom apex:
  * Radius: $r(x) = \frac{R_0}{L} x$.
  * Cross-sectional area: $A(x) = \pi r(x)^2 = \pi \left(\frac{R_0}{L}\right)^2 x^2$.
  * Volume of hanging cone below section $x$: $V(x) = \frac{1}{3} \pi r(x)^2 x = \frac{1}{3} A(x) x$.
  * Weight below section $x$: $W(x) = V(x) \rho g = \frac{1}{3} A(x) x \rho g$.
* Tensile stress at section $x$:
  $$\sigma(x) = \frac{W(x)}{A(x)} = \frac{1}{3} \rho g x$$
* Total elongation:
  $$\Delta L_{\text{cone}} = \int_0^L \frac{\sigma(x)}{Y} dx = \frac{\rho g}{3Y} \int_0^L x dx = \frac{\rho g L^2}{6Y}$$
  $$\mathbf{\Delta L_{\text{cone}} = \frac{\rho g L^2}{6 Y}}$$
  * An inverted hanging cone elongates by **EXACTLY ONE-THIRD** as much as a uniform cylinder of the identical length and material!


---


### 4.5 Elongation of a Truncated Tapered Rod under Tension
A circular rod of length $L$ tapers linearly from radius $r_1$ at one end to $r_2$ at the other end and is subjected to axial tension $F$:
* Radius at distance $x$ from end $r_1$:
  $$r(x) = r_1 + \left(\frac{r_2 - r_1}{L}\right) x$$
* Elongation of element $dx$:
  $$d(\Delta L) = \frac{F dx}{\pi [r(x)]^2 Y}$$
  $$\Delta L = \frac{F}{\pi Y} \int_0^L \frac{dx}{\left[ r_1 + \left(\frac{r_2 - r_1}{L}\right) x \right]^2} = \frac{F}{\pi Y} \left[ -\frac{1}{\left(\frac{r_2 - r_1}{L}\right) \left[ r_1 + \left(\frac{r_2 - r_1}{L}\right) x \right]} \right]_0^L$$
  $$\mathbf{\Delta L = \frac{F \cdot L}{\pi r_1 r_2 Y}}$$
  * The effective cross-sectional area is the **geometric mean** of the two end areas: $A_{\text{eff}} = \sqrt{A_1 A_2} = \pi r_1 r_2$.


---


### 4.6 Rotational Elongation of a Spinning Rod
A uniform rod of mass $M$, length $L$, area $A$, and density $\rho$ rotates with constant angular velocity $\omega$ in a horizontal plane about a vertical axis through one end:
* Consider an infinitesimal element $dr$ at distance $r$ from the pivot axis.
* Centrifugal force on the rod segment from $x$ to $L$:
  $$T(x) = \int_x^L (dm) \omega^2 r = \int_x^L \left(\frac{M}{L} dr\right) \omega^2 r = \frac{M \omega^2}{2 L} (L^2 - x^2)$$
  $$\mathbf{T(x) = \frac{1}{2} \rho A \omega^2 (L^2 - x^2)}$$
  * Tension is maximum at the pivot ($x = 0$): $T_{\max} = \frac{1}{2} M \omega^2 L$.
  * Tension is zero at the free outer tip ($x = L$): $T(L) = 0$.
* Total elongation due to rotation:
  $$\Delta L_{\text{rot}} = \int_0^L \frac{T(x) dx}{A Y} = \frac{\rho \omega^2}{2 Y} \int_0^L (L^2 - x^2) dx = \frac{\rho \omega^2}{2 Y} \left( L^3 - \frac{L^3}{3} \right)$$
  $$\mathbf{\Delta L_{\text{rot}} = \frac{M \omega^2 L^2}{3 A Y} = \frac{\rho \omega^2 L^3}{3 Y}}$$


---


### 4.7 Hoop Stress in a Rotating Thin Ring
A thin circular ring of radius $R$, cross-sectional area $A$, and density $\rho$ rotates about its central symmetry axis with angular velocity $\omega$ ($v = \omega R$):
* Resolving radial centrifugal force on a differential sector subtending angle $d\theta$:
  $$dF_c = (dm) \omega^2 R = (\rho A R d\theta) \omega^2 R = \rho A R^2 \omega^2 d\theta$$
* Balanced by inward hoop tension $T$:
  $$2 T \sin(d\theta / 2) \approx T d\theta = \rho A R^2 \omega^2 d\theta \implies \mathbf{T = \rho A R^2 \omega^2 = \rho A v^2}$$
* **Tensile Hoop Stress ($\sigma_{\text{hoop}}$):**
  $$\mathbf{\sigma_{\text{hoop}} = \frac{T}{A} = \rho R^2 \omega^2 = \rho v^2}$$
  *(Completely independent of ring cross-sectional area $A$!).*
* **Fractional Expansion in Radius:**
  $$\text{Strain} = \frac{\Delta(2\pi R)}{2\pi R} = \frac{\Delta R}{R} = \frac{\sigma}{Y} = \frac{\rho R^2 \omega^2}{Y} \implies \mathbf{\Delta R = \frac{\rho R^3 \omega^2}{Y}}$$


---


## 5. Elastic Potential Energy & Thermal Stress Mechanics


### 5.1 Elastic Potential Energy Density ($u$)


![Elastic Energy Thermal Stress and Bending Torsion](/media/elastic_energy_thermal_stress_and_bending_torsion.webp)
*Description: Two-panel structural and thermal mechanics graphic: (A) Strain energy density formulations ($u = \frac{1}{2}\sigma\epsilon = \sigma^2/2Y = \frac{1}{2}Y\epsilon^2$), the 50% external gravitational work dissipation theorem, and thermal stress mechanics for single clamped rods and series composite clamps; (B) Flexural bending of beams displaying rectangular and circular deflection equations ($\delta \propto 1/d^3$) with I-section engineering optimization, alongside torsional rigidity of solid and hollow cylindrical shafts ($C \propto r^4$).*


* **Work Done in Stretching a Wire:**
  When a force stretching a wire increases quasi-statically from $0$ to $F$ producing elongation $\Delta L$:
  $$W = \int_0^{\Delta L} F(x) dx = \int_0^{\Delta L} \left(\frac{Y A}{L} x\right) dx = \frac{1}{2} \left(\frac{Y A}{L}\right) (\Delta L)^2$$
  $$\mathbf{U = \frac{1}{2} F \cdot \Delta L = \frac{1}{2} k (\Delta L)^2}$$
* **Volumetric Strain Energy Density ($u$):**
  The elastic potential energy stored per unit volume of the material:
  $$u = \frac{U}{\text{Volume}} = \frac{\frac{1}{2} F \Delta L}{A L} = \frac{1}{2} \left(\frac{F}{A}\right) \left(\frac{\Delta L}{L}\right)$$
  $$\mathbf{u = \frac{1}{2} \times \text{Stress} \times \text{Strain} = \frac{\text{Stress}^2}{2Y} = \frac{1}{2} Y (\text{Strain})^2 \quad [\text{J/m}^3]}$$


---


### 5.2 The 50% External Work Dissipation Paradox
When a block of mass $M$ is attached to an unstretched wire and released suddenly:
* The mass falls through distance $\Delta L$ under gravity.
* Total work done by gravity:
  $$W_{\text{gravity}} = M g \Delta L$$
* Elastic strain energy stored in the wire:
  $$U_{\text{elastic}} = \frac{1}{2} M g \Delta L$$
* **Energy Balance:**
  $$W_{\text{gravity}} - U_{\text{elastic}} = M g \Delta L - \frac{1}{2} M g \Delta L = \mathbf{\frac{1}{2} M g \Delta L = \Delta Q_{\text{dissipated}}}$$
  * **CRITICAL JEE CONCEPT:** Exactly **$50\%$ of the gravitational potential energy lost is stored as elastic strain energy**; the remaining **$50\%$ is dissipated as heat** through internal mechanical damping vibrations!


---


### 5.3 Thermal Stress & Clamped Rod Mechanics
When the temperature of a free rod of length $L$ and coefficient of linear expansion $\alpha$ increases by $\Delta T$, it undergoes free thermal expansion:
$$\Delta L_{\text{free}} = L \cdot \alpha \cdot \Delta T$$
If the rod is rigidly clamped between unyielding walls so that its length cannot change ($\Delta L_{\text{net}} = 0$):
* Compressive thermal strain induced:
  $$\epsilon_{\text{thermal}} = \frac{\Delta L_{\text{free}}}{L} = \mathbf{\alpha \cdot \Delta T}$$
* **Thermal Compressive Stress ($\sigma_{\text{thermal}}$):**
  $$\mathbf{\sigma_{\text{thermal}} = Y \cdot \epsilon_{\text{thermal}} = Y \cdot \alpha \cdot \Delta T}$$
  *(Completely independent of the length $L$ or cross-sectional area $A$ of the rod!).*
* **Thermal Force Exerted on Supports ($F_{\text{thermal}}$):**
  $$\mathbf{F_{\text{thermal}} = \sigma_{\text{thermal}} \cdot A = Y \cdot A \cdot \alpha \cdot \Delta T}$$
* **Volumetric Thermal Energy Density:**
  $$u_{\text{thermal}} = \frac{1}{2} Y (\alpha \Delta T)^2$$


---


### 5.4 Composite Clamped Rods in Series
Two rods of materials $(L_1, A_1, Y_1, \alpha_1)$ and $(L_2, A_2, Y_2, \alpha_2)$ are joined end-to-end between rigid unyielding walls. When temperature increases by $\Delta T$:
* Both rods experience the identical compressive thermal reaction force $F$.
* Condition of zero net change in total length:
  $$\Delta L_1 + \Delta L_2 = 0$$
  $$\left( L_1 \alpha_1 \Delta T - \frac{F L_1}{A_1 Y_1} \right) + \left( L_2 \alpha_2 \Delta T - \frac{F L_2}{A_2 Y_2} \right) = 0$$
  $$\mathbf{F = \frac{(L_1 \alpha_1 + L_2 \alpha_2) \Delta T}{\frac{L_1}{A_1 Y_1} + \frac{L_2}{A_2 Y_2}}}$$


---


## 6. Structural Solid Mechanics: Bending of Beams & Torsion of Shafts


### 6.1 Flexural Bending of Beams
A uniform horizontal beam of length $L$ supported at both ends on knife-edges carries a central concentrated load $W = M g$:
* The upper longitudinal filaments are compressed while the lower filaments are stretched. The central filament layer experiences zero stress and forms the **Neutral Axis**.
* **General Depression ($\delta$) Formula:**
  $$\mathbf{\delta = \frac{W L^3}{48 Y I_g}}$$
  where $I_g$ is the **geometrical moment of inertia** of the cross-section about the neutral axis: $I_g = \int y^2 dA$.
1. **Rectangular Beam (Breadth $b$, Vertical Depth $d$):**
   $$I_g = \frac{b d^3}{12}$$
   $$\mathbf{\delta = \frac{W L^3}{48 Y \left(\frac{b d^3}{12}\right)} = \frac{W L^3}{4 Y b d^3}}$$
2. **Circular Cross-Section Rod (Radius $r$):**
   $$I_g = \frac{\pi r^4}{4}$$
   $$\mathbf{\delta = \frac{W L^3}{48 Y \left(\frac{\pi r^4}{4}\right)} = \frac{W L^3}{12 \pi Y r^4}}$$


---


### 6.2 The Engineering Rationale for I-Shaped Girders
From the deflection formula for rectangular beams:
$$\delta \propto \frac{1}{b \cdot d^3}$$
* The depression $\delta$ is inversely proportional to the **FIRST POWER of breadth $b$**, but inversely proportional to the **CUBE of depth $d$**!
* Therefore, to minimize sagging under heavy railway and bridge loads, structural engineers maximize the vertical depth $d$ rather than width $b$.
* However, a deep, thin rectangular bar buckles laterally under compressive top loads.
* **The I-Section Solution:**
  1. The central vertical web provides large vertical depth $d$ to suppress flexural sag ($\delta \propto 1/d^3$).
  2. The wide horizontal top and bottom flanges provide lateral stability against buckling and concentrate material where tensile and compressive stresses are maximal!


---


### 6.3 Torsion of Cylindrical Shafts & Torsional Rigidity ($C$)
When one end of a solid cylinder of length $L$ and radius $r$ is clamped and a twisting couple $\tau$ is applied to the free end, twisting it through angle $\theta$:
* **Restoring Torque / Twisting Couple ($\tau$):**
  $$\mathbf{\tau = C \cdot \theta = \left(\frac{\pi \eta r^4}{2 L}\right) \theta}$$
* **Torsional Rigidity ($C$):** The torque required to produce a unit angle of twist ($\theta = 1\text{ rad}$):
  $$\mathbf{C = \frac{\pi \eta r^4}{2 L}}$$
* **Work Done in Twisting by Angle $\theta$:**
  $$\mathbf{W = \int_0^\theta C \theta d\theta = \frac{1}{2} C \theta^2 = \frac{\pi \eta r^4}{4 L} \theta^2}$$


---


### 6.4 Hollow vs. Solid Shafts in Torsional Strength
For a hollow cylinder of length $L$, inner radius $r_1$, and outer radius $r_2$:
$$\mathbf{C_{\text{hollow}} = \frac{\pi \eta (r_2^4 - r_1^4)}{2 L}}$$
* **Comparison for Equal Mass and Length:**
  Let a solid shaft of radius $r_s$ and a hollow shaft of radii $r_1, r_2$ have identical length $L$, density $\rho$, and mass $M$:
  $$M = \pi r_s^2 L \rho = \pi (r_2^2 - r_1^2) L \rho \implies r_s^2 = r_2^2 - r_1^2$$
  Comparing torsional rigidities:
  $$\frac{C_{\text{hollow}}}{C_{\text{solid}}} = \frac{r_2^4 - r_1^4}{r_s^4} = \frac{(r_2^2 - r_1^2)(r_2^2 + r_1^2)}{(r_s^2)^2} = \frac{r_s^2 (r_2^2 + r_1^2)}{r_s^4} = \mathbf{\frac{r_2^2 + r_1^2}{r_s^2} > 1}$$
  * **Result:** **A hollow shaft is significantly stiffer and stronger in torsion than a solid shaft of identical mass and material!**
  * Explanation: In torsion, shear stress increases linearly from zero at the center to a maximum at the outer surface ($\tau(r) \propto r$). In a hollow shaft, material is positioned far from the neutral axis where it withstands maximum torque!


---


## 7. Master Formula Sheet & High-Yield Diagnostic Traps


### 7.1 Master Elasticity Formula Table


| Mechanical Quantity | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Young's Modulus** | $Y = \frac{F L}{A \Delta L}$ | Spring stiffness $k = \frac{Y A}{L}$ |
| **Bulk Modulus** | $B = -V \frac{dP}{dV} = \frac{1}{K}$ | Ideal gas: $B_{\text{iso}} = P, B_{\text{adia}} = \gamma P$ |
| **Shear Modulus** | $\eta = \frac{F_t / A}{\theta}$ | Zero for fluids ($\eta_{\text{fluid}} = 0$) |
| **Poisson's Ratio** | $\sigma = -\frac{\Delta r/r}{\Delta L/L}$ | Volumetric strain: $\frac{\Delta V}{V} = \frac{\Delta L}{L}(1 - 2\sigma)$ |
| **Universal Moduli 1** | $Y = 3B(1 - 2\sigma)$ | Relates $Y, B, \sigma$ |
| **Universal Moduli 2** | $Y = 2\eta(1 + \sigma)$ | Relates $Y, \eta, \sigma$ |
| **Universal Moduli 3** | $\frac{9}{Y} = \frac{1}{B} + \frac{3}{\eta}$ | Relates $Y, B, \eta$ directly |
| **Self-Weight Elongation** | $\Delta L_{\text{self}} = \frac{M g L}{2 A Y} = \frac{\rho g L^2}{2 Y}$ | Exactly half the end-load elongation |
| **Conical Wire Elongation** | $\Delta L_{\text{cone}} = \frac{\rho g L^2}{6 Y}$ | Exactly one-third of uniform cylinder |
| **Tapered Truncated Rod** | $\Delta L = \frac{F L}{\pi r_1 r_2 Y}$ | Geometric mean radius $r_{\text{eff}} = \sqrt{r_1 r_2}$ |
| **Rotating Rod Elongation** | $\Delta L_{\text{rot}} = \frac{\rho \omega^2 L^3}{3 Y}$ | Max tension at pivot: $T_{\max} = \frac{1}{2}M\omega^2 L$ |
| **Rotating Ring Hoop Stress** | $\sigma = \rho v^2 = \rho R^2 \omega^2$ | Radial expansion $\Delta R = \frac{\rho R^3 \omega^2}{Y}$ |
| **Strain Energy Density** | $u = \frac{1}{2}\sigma\epsilon = \frac{\sigma^2}{2Y} = \frac{1}{2}Y\epsilon^2$ | Area under Hookean stress-strain curve |
| **Work Partitioning** | $W_{\text{ext}} = M g \Delta L = 2 U_{\text{elastic}}$ | $50\%$ converted to heat during vibrations |
| **Thermal Stress** | $\sigma_{\text{th}} = Y \alpha \Delta T$ | Clamping force $F_{\text{th}} = Y A \alpha \Delta T$ |
| **Flexural Beam Depression** | $\delta = \frac{W L^3}{4 Y b d^3}$ | Sagging $\propto 1/d^3 \implies$ I-beam design |
| **Torsional Shaft Rigidity** | $\tau = C \theta = \frac{\pi \eta r^4}{2 L} \theta$ | Hollow shaft has higher torsional strength |


---


### 7.2 High-Yield Exam Traps & Common Conceptual Errors


#### Trap 1: The Effective Mass of a Heavy Spring
* When a mass $m$ oscillates vertically on a light spring of mass $M_{\text{spring}} = 0$, time period is $T = 2\pi\sqrt{m/k}$.
* If the spring itself has a non-negligible mass $M_s$, elements near the fixed top ceiling barely move while elements near the bottom mass oscillate with full amplitude.
* Integrating kinetic energy across the spring gives an **effective added mass of $M_s / 3$**:
  $$\mathbf{T = 2\pi\sqrt{\frac{m + \frac{1}{3}M_s}{k}}}$$


#### Trap 2: Thermal Stress Independence from Rod Length
* Students often assume longer rods experience higher thermal stress because thermal expansion $\Delta L_{\text{free}} = L \alpha \Delta T$ scales with $L$.
* In reality, thermal strain is normalized by original length:
  $$\epsilon_{\text{thermal}} = \frac{\Delta L_{\text{free}}}{L} = \frac{L \alpha \Delta T}{L} = \alpha \Delta T$$
  $$\mathbf{\sigma_{\text{thermal}} = Y \alpha \Delta T}$$
  **Thermal stress is completely independent of the length and cross-sectional area of the rod!**


#### Trap 3: Stress vs. Force along a Tapered Rod
* In a tapered rod subjected to axial tension $F$, tension $F$ is identical at all cross-sections along the length.
* However, cross-sectional area $A(x) = \pi [r(x)]^2$ varies along the length.
* Therefore, **stress $\sigma(x) = F / A(x)$ and strain $\epsilon(x) = \sigma(x) / Y$ are MAXIMUM at the narrowest end ($r_1$)** and **MINIMUM at the widest end ($r_2$)**!
* Yielding or fracture always initiates at the **narrowest end**!


#### Trap 4: Self-Weight vs. End Load Work Calculations
* When a weight $M$ is hung from a massless wire, work done by gravity is $W = M g \Delta L$ and stored energy is $U = \frac{1}{2} M g \Delta L$.
* For a wire extending under its own weight $M$, the center of mass descends by only $\frac{\Delta L_{\text{self}}}{2}$.
* Total gravitational work done: $W = M g \left(\frac{\Delta L_{\text{self}}}{2}\right) = \frac{1}{2} M g \Delta L_{\text{self}}$.
* Stored elastic energy: $U = \int_0^L \frac{[T(x)]^2}{2 A Y} dx = \frac{1}{6}\frac{M^2 g^2 L}{A Y} = \frac{1}{3} M g \Delta L_{\text{self}}$!