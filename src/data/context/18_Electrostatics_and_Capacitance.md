# Physics Revision Context: Chapter 18 — Electrostatics and Capacitance

---

### 1.1 Invariant Properties of Electric Charge
- **Quantization of Charge:** Electric charge exists strictly in discrete integral multiples of the elementary electronic charge ($e = 1.602 \times 10^{-19}\text{ C}$):
  $$q = \pm n e \quad (n = 1, 2, 3, \dots)$$
- **Conservation of Charge:** In an isolated system, the algebraic sum of positive and negative charges is strictly conserved over time.
- **Relativistic Invariance:** Electric charge is Lorentz-invariant; the magnitude of charge on a particle is independent of its reference frame velocity ($q_{\text{rest}} = q_{\text{motion}}$).

### 1.2 Coulomb’s Law
- **Vector Formulation:** The electrostatic force between two stationary point charges $q_1$ and $q_2$ separated by displacement $\vec{r}_{12}$ in free space is:
  $$\vec{F}_{12} = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r^2} \hat{r}_{12} = \frac{k q_1 q_2}{r^3} \vec{r}_{12}$$
  where:
  $$k = \frac{1}{4\pi\varepsilon_0} \approx 8.98755 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2 \approx 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$$
  $$\varepsilon_0 = 8.854 \times 10^{-12}\text{ C}^2/(\text{N}\cdot\text{m}^2) = 8.854 \times 10^{-12}\text{ F/m}$$
- **Permittivity of a Dielectric Medium:** When placed in a homogeneous medium of dielectric constant (relative permittivity) $K = \varepsilon_r$:
  $$F_{\text{medium}} = \frac{F_{\text{vacuum}}}{K} = \frac{1}{4\pi\varepsilon_0 K} \frac{q_1 q_2}{r^2}$$
- **Principle of Linear Superposition:** The net force acting on any test charge is the vector sum of individual Coulombic forces exerted by all other charges independently:
  $$\vec{F}_{\text{net}} = \sum_{i=1}^N \vec{F}_i$$

---

### 2.1 Electric Field Strength ($\vec{E}$)
- Force per unit positive infinitesimal test charge placed at field point $P$:
  $$\vec{E} = \lim_{q_0 \to 0} \frac{\vec{F}}{q_0}$$
- **Point Charge:** $\vec{E} = \frac{k q}{r^2} \hat{r}$.

#### A. Infinitely Long Straight Wire (Linear Charge Density $\lambda$)
$$\vec{E} = \frac{\lambda}{2\pi\varepsilon_0 r} \hat{r} = \frac{2 k \lambda}{r} \hat{r}$$

#### B. Finite Line Segment of Charge
At perpendicular distance $r$ from a line of uniform density $\lambda$, where endpoints subtend angles $\alpha$ and $\beta$ with the normal:
$$E_\perp = \frac{k \lambda}{r} (\sin\alpha + \sin\beta)$$
$$E_\parallel = \frac{k \lambda}{r} (\cos\beta - \cos\alpha)$$
*(For a semi-infinite wire: $\alpha = 90^\circ, \beta = 0^\circ \implies E_\perp = \frac{k\lambda}{r}, E_\parallel = \frac{k\lambda}{r}, E_{\text{net}} = \frac{\sqrt{2}k\lambda}{r}$ at $45^\circ$).*

#### C. Uniformly Charged Circular Ring (Radius $R$, Total Charge $Q$)
- On the axis at distance $x$ from the ring center:
  $$E(x) = \frac{k Q x}{(x^2 + R^2)^{3/2}}$$
- At the center ($x = 0$): $E = 0$.
- For $x \gg R$: $E \approx \frac{k Q}{x^2}$ (point charge asymptotic limit).
- **Maximum Field Condition:** Setting $\frac{dE}{dx} = 0$:
  $$x_{\text{max}} = \pm \frac{R}{\sqrt{2}} \implies E_{\text{max}} = \frac{2 k Q}{3\sqrt{3} R^2}$$

#### D. Uniformly Charged Circular Disc (Radius $R$, Surface Density $\sigma$)
- On the axis at distance $x$ from the disc center:
  $$E(x) = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{x}{\sqrt{x^2 + R^2}} \right) = \frac{\sigma}{2\varepsilon_0} (1 - \cos\theta)$$
  where $\theta$ is the half-angle subtended by the disc rim at the axial point.
- Near the center ($x \ll R$): $E \approx \frac{\sigma}{2\varepsilon_0}$ (infinite sheet limit).

#### E. Infinite Flat Sheets of Charge
- **Non-Conducting Uniform Sheet:** $E = \frac{\sigma}{2\varepsilon_0}$ (independent of distance).
- **Conducting Plate with Charge:** Charge resides on both faces with surface density $\sigma$:
  $$E_{\text{outside}} = \frac{\sigma}{\varepsilon_0}$$

#### F. Uniformly Charged Spherical Shell (Radius $R$, Total Charge $Q$)
- **Inside ($r < R$):** $E = 0$.
- **Just Outside / Surface ($r = R$):** $E = \frac{k Q}{R^2} = \frac{\sigma}{\varepsilon_0}$.
- **Outside ($r > R$):** $E = \frac{k Q}{r^2}$.

#### G. Uniformly Charged Solid Non-Conducting Sphere (Radius $R$, Volume Density $\rho$)
- **Inside ($r \le R$):**
  $$E(r) = \frac{\rho r}{3\varepsilon_0} = \frac{k Q r}{R^3} \quad (E \propto r)$$
- **Outside ($r \ge R$):**
  $$E(r) = \frac{k Q}{r^2} \quad \left(E \propto \frac{1}{r^2}\right)$$

---

### 3.1 Potential Difference & Relationship to Electric Field
- Potential difference between points $A$ and $B$:
  $$\Delta V = V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{r} = \frac{W_{\text{ext}}}{q_0}$$
- **Differential Gradient Formulation:**
  $$\vec{E} = -\vec{\nabla} V = -\left( \frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k} \right)$$
  *(Electric field points along the direction of steepest rate of decrease of electric potential).*

### 3.2 Electric Potential for Standard Geometries
1. **Point Charge:** $V(r) = \frac{k q}{r}$.
2. **Circular Ring on Axis:** $V(x) = \frac{k Q}{\sqrt{x^2 + R^2}}$.
3. **Circular Disc on Axis:** $V(x) = \frac{\sigma}{2\varepsilon_0} \left( \sqrt{x^2 + R^2} - x \right)$.
4. **Conducting Spherical Shell:**
   - Inside ($r \le R$): $V = \frac{k Q}{R}$ (constant throughout interior).
   - Outside ($r \ge R$): $V = \frac{k Q}{r}$.
5. **Uniformly Charged Non-Conducting Solid Sphere:**
   - Inside ($r \le R$):
     $$V(r) = \frac{k Q}{2 R^3} (3 R^2 - r^2) = \frac{\rho}{6\varepsilon_0}(3R^2 - r^2)$$
   - At Center ($r = 0$): $V_{\text{center}} = \frac{3}{2} \frac{k Q}{R} = 1.5 V_{\text{surface}}$.
   - Outside ($r \ge R$): $V(r) = \frac{k Q}{r}$.

### 3.3 Electrostatic Potential Energy of Discrete & Continuous Charges
- **Two Point Charges:** $U = \frac{k q_1 q_2}{r_{12}}$.
- **Assembly of $N$ Point Charges:**
  $$U = \frac{1}{2} \sum_{i=1}^N q_i V_i = \sum_{1 \le i < j \le N} \frac{k q_i q_j}{r_{ij}}$$
- **Self-Energy (Assembly Energy):**
  - **Spherical Shell:** $U_{\text{self}} = \frac{k Q^2}{2 R}$.
  - **Uniform Solid Dielectric Sphere:** $U_{\text{self}} = \frac{3}{5} \frac{k Q^2}{R}$.

---

## 1. Visual Preservation: Field & Potential Distributions

![Electric Field and Potential Distributions](/media/electric_field_and_potential_distributions.webp)
*Description: Comparative multi-panel plots displaying radial profiles of electric field $E(r)$ and electrostatic potential $V(r)$ for a conducting spherical shell ($E = 0$ and $V = \text{constant}$ inside, discontinuous $E$ at boundary $R$, decaying as $1/r^2$ and $1/r$ outside) versus a uniformly charged solid non-conducting sphere ($E \propto r$ linear increase inside, quadratic parabolic decrease in $V$ with peak $V_{\text{center}} = 1.5 V_{\text{surface}}$, converging to $1/r^2$ and $1/r$ for $r \ge R$).*

---

### 4.1 Dipole Moment & Field Vector Derivation
- Two equal and opposite charges $\pm q$ separated by displacement $2\vec{a}$:
  $$\vec{p} = q(2\vec{a}) \quad (\text{directed from } -q \text{ to } +q)$$
- **Axial Position ($r \gg a$):**
  $$\vec{E}_{\text{axial}} = \frac{2 k \vec{p}}{r^3} \quad (\text{parallel to } \vec{p})$$
- **Equatorial Position ($r \gg a$):**
  $$\vec{E}_{\text{equatorial}} = -\frac{k \vec{p}}{r^3} \quad (\text{antiparallel to } \vec{p})$$
- **Arbitrary Position $(r, \theta)$ in Polar Coordinates:**
  $$E_r = \frac{2 k p \cos\theta}{r^3}, \quad E_\theta = \frac{k p \sin\theta}{r^3}$$
  $$E_{\text{net}} = \sqrt{E_r^2 + E_\theta^2} = \frac{k p}{r^3} \sqrt{1 + 3\cos^2\theta}$$
  $$\tan\alpha = \frac{E_\theta}{E_r} = \frac{1}{2} \tan\theta$$
- **Electrostatic Potential of Dipole:**
  $$V(r, \theta) = \frac{k p \cos\theta}{r^2} = \frac{\vec{p} \cdot \hat{r}}{4\pi\varepsilon_0 r^2}$$
  *(Notice: $V_{\text{equatorial}} = 0$ everywhere on the equatorial plane $\theta = 90^\circ$).*

### 5.1 Dipole in External Electric Field
- **Uniform Field ($\vec{E}$):**
  - Net Force: $\vec{F}_{\text{net}} = \vec{F}_+ + \vec{F}_- = (+q\vec{E}) + (-q\vec{E}) = 0$.
  - Net Restoring Torque:
    $$\vec{\tau} = \vec{p} \times \vec{E} \implies \tau = p E \sin\theta$$
  - Potential Energy:
    $$U = -\vec{p} \cdot \vec{E} = -p E \cos\theta$$
  - **Equilibrium States:**
    - Stable Equilibrium: $\theta = 0^\circ \implies \vec{\tau} = 0, U_{\text{min}} = -pE$.
    - Unstable Equilibrium: $\theta = 180^\circ \implies \vec{\tau} = 0, U_{\text{max}} = +pE$.
  - **Work Done in Rotating Dipole from $\theta_1$ to $\theta_2$:**
    $$W_{\text{ext}} = \Delta U = p E (\cos\theta_1 - \cos\theta_2)$$
  - **Angular Simple Harmonic Motion (Small $\theta$):**
    $$\tau = -p E \theta = I \alpha \implies \frac{d^2\theta}{dt^2} + \left(\frac{pE}{I}\right)\theta = 0$$
    $$T = 2\pi \sqrt{\frac{I}{pE}}$$
- **Non-Uniform Field:**
  $$\vec{F}_{\text{net}} = (\vec{p} \cdot \vec{\nabla}) \vec{E} = p \frac{\partial E}{\partial x} \hat{i}$$

---

## 2. Visual Preservation: Dipole Field & Equipotential Surfaces

![Electric Dipole Field Lines and Equipotentials](/media/electric_dipole_field_and_equipotentials.webp)
*Description: Two-dimensional vector streamplot and contour diagram illustrating electric dipole field lines originating at $+q$ and terminating at $-q$, orthogonal closed equipotential surfaces, the planar zero-potential boundary on the equatorial plane ($V = 0$), alongside the force-couple geometry producing torque $\vec{\tau} = \vec{p} \times \vec{E}$ in a uniform external field.*

---

### 6.1 Gauss's Theorem
- Total electric flux emerging through any arbitrary closed Gaussian surface ($S$) equals $\frac{1}{\varepsilon_0}$ times the net charge enclosed ($q_{\text{enc}}$):
  $$\Phi_E = \oint_S \vec{E} \cdot d\vec{A} = \frac{q_{\text{enc}}}{\varepsilon_0}$$

### 7.1 Electrostatic Equilibrium of Conductors
8. The electric field is identically zero everywhere inside the bulk of a conductor ($E_{\text{bulk}} = 0$).
9. Any net excess static charge resides entirely on the exterior boundary of the conductor.
10. The electric field immediately outside a charged conductor surface is normal to the surface:
   $$\vec{E} = \frac{\sigma}{\varepsilon_0} \hat{n}$$
11. The entire volume and surface of a conductor are equipotential ($V = \text{constant}$).
12. **Electrostatic Pressure on Conductor Surface:**
   $$P_{\text{elec}} = \frac{\sigma^2}{2\varepsilon_0} = \frac{1}{2}\varepsilon_0 E^2$$
13. **Electrostatic Shielding:** The electric field inside an empty cavity within a conductor is zero, completely shielding the cavity from external electrostatic fields.

---

### 8.1 Capacitance Definition
$$C = \frac{Q}{V}$$
The capacitance $C$ is a purely geometric and dielectric constant dependent property; it is independent of $Q$ and $V$.

### 8.2 Standard Capacitance Formulations
- **Parallel-Plate Capacitor:**
  $$C_0 = \frac{\varepsilon_0 A}{d}$$
- **Spherical Capacitor (Concentric Radii $a < b$):**
  $$C = 4\pi\varepsilon_0 \frac{a b}{b - a}$$
  *(For an isolated single spherical conductor of radius $R$: $b \to \infty \implies C = 4\pi\varepsilon_0 R$).*
- **Cylindrical Capacitor (Coaxial Cylinders of Radii $a < b$, Length $L$):**
  $$C = \frac{2\pi\varepsilon_0 L}{\ln(b/a)}$$

### 8.3 Energy Stored & Attractive Force
- **Electrostatic Energy Stored:**
  $$U = \frac{1}{2} C V^2 = \frac{Q^2}{2C} = \frac{1}{2} Q V$$
- **Electrostatic Energy Density in Field:**
  $$u = \frac{U}{\text{Volume}} = \frac{1}{2} \varepsilon_0 E^2$$
- **Attractive Force Between Oppositely Charged Plates:**
  $$F = \frac{Q^2}{2\varepsilon_0 A} = \frac{1}{2} \varepsilon_0 E^2 A = \frac{1}{2} Q E$$
  *(Note the factor of $1/2$ arising because the field acting on plate charges is produced solely by the opposite plate, $E/2$).*

### 8.4 Capacitor Networks
- **Series Connection:**
  $$\frac{1}{C_{\text{eq}}} = \sum_{i=1}^n \frac{1}{C_i}, \quad Q_1 = Q_2 = \dots = Q_n$$
- **Parallel Connection:**
  $$C_{\text{eq}} = \sum_{i=1}^n C_i, \quad V_1 = V_2 = \dots = V_n$$

### 8.5 Partially Filled Dielectric Slab
If a dielectric slab of thickness $t < d$ and dielectric constant $K$ is inserted between plates of separation $d$:
$$C = \frac{\varepsilon_0 A}{d - t \left(1 - \frac{1}{K}\right)}$$
*(For a conducting slab of thickness $t$: $K \to \infty \implies C = \frac{\varepsilon_0 A}{d - t}$).*

---

## 3. Visual Preservation: Dielectric Insertion Comparison

![Dielectric Capacitor States Comparison](/media/dielectric_capacitor_states_comparison.webp)
*Description: Structural and circuit schematic comparing the response of a parallel-plate capacitor to dielectric insertion under two boundary conditions: Case A with battery disconnected (isolated charge $Q_0$ constant, voltage drops to $V_0/K$, stored energy decreases to $U_0/K$) versus Case B with battery connected (potential $V_0$ held constant, charge increases to $K Q_0$, stored energy increases to $K U_0$, with the battery supplying work $W = 2\Delta U$).*

---

### 9.1 Summary of Dielectric Insertion Effects

| Physical Quantity | Symbol | Battery Disconnected ($Q = \text{const}$) | Battery Kept Connected ($V = \text{const}$) |
| :--- | :--- | :--- | :--- |
| **Capacitance** | $C$ | Increases ($K C_0$) | Increases ($K C_0$) |
| **Charge** | $Q$ | Remains Constant ($Q_0$) | Increases ($K Q_0$) |
| **Potential Difference** | $V$ | Decreases ($V_0 / K$) | Remains Constant ($V_0$) |
| **Electric Field** | $E$ | Decreases ($E_0 / K$) | Remains Constant ($E_0$) |
| **Stored Energy** | $U$ | Decreases ($U_0 / K$) | Increases ($K U_0$) |
| **Energy Density** | $u$ | Decreases ($u_0 / K^2$) | Increases ($K u_0$) |

### 9.2 Sharing of Charges & Energy Dissipation
When two capacitors $C_1$ (charged to $V_1$) and $C_2$ (charged to $V_2$) are connected in parallel:
- **Common Equilibrium Potential ($V_{\text{common}}$):**
  $$V_{\text{common}} = \frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}$$
- **Heat Dissipation (Loss of Electrostatic Energy):**
  $$\Delta H = U_{\text{initial}} - U_{\text{final}} = \frac{1}{2} \frac{C_1 C_2}{C_1 + C_2} (V_1 - V_2)^2$$
  *(Energy loss is strictly non-negative and is dissipated as Joule heat and electromagnetic radiation).*

---

### Archetype 1: Oscillations of a Charge along the Axis of a Ring
- **Problem:** A negative point charge $-q$ of mass $m$ is constrained to move along the axis of a uniformly charged positive ring of radius $R$ and total charge $+Q$. Find the period of small axial oscillations ($x \ll R$).
- **Derivation:**
  - Axial restoring force for $x \ll R$:
    $$F(x) = -q E(x) = -q \frac{k Q x}{(x^2 + R^2)^{3/2}} \approx -\frac{k Q q}{R^3} x$$
  - Equation of motion:
    $$m \frac{d^2 x}{dt^2} + \left(\frac{k Q q}{R^3}\right) x = 0 \implies \omega = \sqrt{\frac{k Q q}{m R^3}}$$
    $$T = 2\pi \sqrt{\frac{m R^3}{k Q q}} = 2\pi \sqrt{\frac{4\pi\varepsilon_0 m R^3}{Q q}}$$

---

### Archetype 2: Electrostatic Bubble Stability & Overpressure
- **Problem:** A spherical soap bubble of radius $R$ and surface tension $T$ is charged to surface density $\sigma$. Find the equilibrium charge density when excess pressure across the bubble vanishes.
- **Derivation:**
  - Total outward pressure = Internal gas overpressure + Electrostatic pressure:
    $$P_{\text{excess}} + P_{\text{elec}} = \frac{4T}{R} \implies P_{\text{excess}} + \frac{\sigma^2}{2\varepsilon_0} = \frac{4T}{R}$$
  - For $P_{\text{excess}} = 0$:
    $$\frac{\sigma^2}{2\varepsilon_0} = \frac{4T}{R} \implies \sigma = \sqrt{\frac{8\varepsilon_0 T}{R}}$$

---

### Archetype 3: Infinite Grid / Ladder of Capacitors
- **Problem:** An infinite semi-infinite ladder of capacitors has repeating series capacitor $C_1$ and shunt capacitor $C_2$. Find the equivalent capacitance $C_{\text{eq}}$ across the input terminals.
- **Derivation:**
  - Adding one identical stage to an infinite ladder does not change $C_{\text{eq}}$:
    $$C_{\text{eq}} = \frac{C_1 (C_2 + C_{\text{eq}})}{C_1 + C_2 + C_{\text{eq}}}$$
  - Cross multiplying:
    $$C_{\text{eq}}^2 + C_2 C_{\text{eq}} - C_1 C_2 = 0$$
  - Physical positive root:
    $$C_{\text{eq}} = \frac{-C_2 + \sqrt{C_2^2 + 4 C_1 C_2}}{2}$$
