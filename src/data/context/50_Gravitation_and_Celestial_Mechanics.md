# Physics Revision Context: Chapter 50 — Gravitation & Celestial Mechanics

---

### 1.1 Fundamental Law & Point Masses
Every particle in the universe attracts every other particle with a mutually collinear force directly proportional to the product of their masses and inversely proportional to the square of the distance between them:
$$\mathbf{\vec{F}_{12} = -\frac{G m_1 m_2}{r^2} \hat{r}_{12} = -\frac{G m_1 m_2}{r^3} \vec{r}_{12}}$$
- **Universal Gravitational Constant ($G$):**
  $$G = 6.674 \times 10^{-11} \ \text{N}\cdot\text{m}^2/\text{kg}^2 = \text{m}^3 \cdot \text{kg}^{-1} \cdot \text{s}^{-2}$$
  Dimensional Formula: $\mathbf{[M^{-1} L^3 T^{-2}]}$.
- **Key Properties of Gravitational Force:**
  1. **Strictly Attractive:** Gravity never repels.
  2. **Central Force:** Acts along the line connecting the centers of mass; exerts zero torque about either body ($\vec{\tau} = \vec{r} \times \vec{F} = 0$), ensuring **angular momentum is strictly conserved**.
  3. **Medium-Independent:** The force between two masses is completely unaffected by any intervening medium.
  4. **Conservative Field:** Work done along any closed path is zero ($\oint \vec{F} \cdot d\vec{r} = 0$).

---

### 1.2 Gravitational Force on Continuous Bodies: Point Mass and Uniform Rod
Consider a thin uniform rod of mass $M$ and length $L$ lying along the $x$-axis from $x = d$ to $x = d + L$. A point mass $m$ is placed at the origin $x = 0$:
- Linear mass density: $\lambda = M / L$.
- Force on mass element $dm = \lambda dx$ at distance $x$:
  $$dF = \frac{G m dm}{x^2} = \frac{G m (M/L) dx}{x^2}$$
- Integrating across the entire rod from $x = d$ to $x = d + L$:
  $$F = \frac{G M m}{L} \int_d^{d+L} \frac{dx}{x^2} = \frac{G M m}{L} \left[ -\frac{1}{x} \right]_d^{d+L} = \frac{G M m}{L} \left( \frac{1}{d} - \frac{1}{d+L} \right) = \frac{G M m}{L} \left( \frac{L}{d(d+L)} \right)$$
  $$\mathbf{F = \frac{G M m}{d(d + L)}}$$
  - **CRITICAL TRAP:** The force is **NOT** $\frac{GMm}{(d + L/2)^2}$! A continuous rod cannot be replaced by a point mass at its center of mass for gravitational force calculations!

---

### 2.1 Definition & Relationship to Potential
The gravitational field intensity $\vec{E}_g$ at any point in space is defined as the gravitational force experienced per unit test mass placed at that point:
$$\mathbf{\vec{E}_g = \lim_{m_0 \to 0} \frac{\vec{F}}{m_0} = -\nabla V = -\left( \frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k} \right)}$$
- For a point mass $M$ at distance $r$:
  $$\mathbf{\vec{E}_g = -\frac{G M}{r^2} \hat{r}}$$

---

### 2.2 Visual Preservation: Gravitational Field & Potential Distributions

<!-- image missing: media/gravitational_field_and_potential_distributions.webp -->
*Description: Two-panel gravitational field and potential graphic: (A) Field intensity ($E_g$) and potential ($V$) distributions for spherical shells (equipotential flat cavity $V = -GM/R$, zero field inside), solid spheres (linear field ramp $E_g \propto r$, parabolic well $V(0) = -1.5 GM/R$), axial rings ($E_g$ peak at $x = R/\sqrt{2}$), and discs; (B) Variations in acceleration due to gravity ($g$) with altitude ($g_h \approx g(1 - 2h/R)$), depth ($g_d = g(1 - d/R)$), and latitude rotation ($g_\lambda = g - \omega^2 R \cos^2\lambda$), alongside gravitational self-energy formulations.*

---

### 2.3 Master Table of Field and Potential for Canonical Bodies

| Rigid Mass Geometry | Region / Coordinate | Gravitational Field Intensity ($E_g$) | Gravitational Potential ($V$) |
| :---: | :---: | :---: | :---: |
| **Point Mass $M$** | Distance $r$ | $\mathbf{E_g = \frac{G M}{r^2}}$ (Radially inward) | $\mathbf{V = -\frac{G M}{r}}$ |
| **Uniform Circular Ring (Radius $R$)** | Center ($x = 0$) | $\mathbf{E_g = 0}$ | $\mathbf{V_0 = -\frac{G M}{R}}$ |
| **Uniform Circular Ring (Radius $R$)** | Axial distance $x$ | $\mathbf{E_g(x) = \frac{G M x}{(R^2 + x^2)^{3/2}}}$ | $\mathbf{V(x) = -\frac{G M}{\sqrt{R^2 + x^2}}}$ |
| **Uniform Circular Ring (Radius $R$)** | Axial peak field ($x = R/\sqrt{2}$) | $\mathbf{E_{g, \max} = \frac{2 G M}{3\sqrt{3} R^2}}$ | $V = -\sqrt{\frac{2}{3}}\frac{GM}{R}$ |
| **Uniform Circular Disc (Radius $R$)** | Axial distance $x$ | $\mathbf{E_g(x) = 2\pi G \sigma \left(1 - \frac{x}{\sqrt{R^2 + x^2}}\right)}$ | $\mathbf{V(x) = -\frac{2 G M}{R^2}\left(\sqrt{R^2 + x^2} - x\right)}$ |
| **Spherical Shell (Thin Hollow, Radius $R$)** | Inside ($r < R$) | $\mathbf{E_g = 0}$ (Zero Field Cavity) | $\mathbf{V = -\frac{G M}{R} = \text{Constant}}$ |
| **Spherical Shell (Thin Hollow, Radius $R$)** | Surface & Outside ($r \ge R$) | $\mathbf{E_g(r) = \frac{G M}{r^2}}$ | $\mathbf{V(r) = -\frac{G M}{r}}$ |
| **Solid Sphere (Uniform, Radius $R$)** | Inside ($r \le R$) | $\mathbf{E_g(r) = \left(\frac{G M}{R^3}\right) r}$ (Linear Ramp) | $\mathbf{V(r) = -\frac{G M}{2 R^3}(3 R^2 - r^2)}$ |
| **Solid Sphere (Uniform, Radius $R$)** | Center ($r = 0$) | $\mathbf{E_g = 0}$ | $\mathbf{V_{\text{center}} = -\frac{3}{2}\frac{G M}{R} = 1.5 \, V_{\text{surface}}}$ |
| **Solid Sphere (Uniform, Radius $R$)** | Outside ($r \ge R$) | $\mathbf{E_g(r) = \frac{G M}{r^2}}$ | $\mathbf{V(r) = -\frac{G M}{r}}$ |

---

## 1. Variations in Acceleration Due to Gravity ($g$)

On Earth's surface (mass $M$, radius $R$):
$$\mathbf{g = \frac{G M}{R^2} \approx 9.81 \ \text{m/s}^2}$$

### 3.1 Variation with Altitude (Height $h$ Above Surface)
At distance $r = R + h$:
$$\mathbf{g_h = \frac{G M}{(R + h)^2} = \frac{g}{\left(1 + \frac{h}{R}\right)^2}}$$
- For small altitudes ($h \ll R$):
  $$g_h = g \left(1 + \frac{h}{R}\right)^{-2} \approx \mathbf{g \left(1 - \frac{2h}{R}\right)}$$
- Fractional decrease in gravity: $\mathbf{\frac{\Delta g}{g} = \frac{2h}{R}}$.

---

### 3.2 Variation with Depth (Distance $d$ Below Surface)
At distance $r = R - d$ from the center of Earth:
Only the inner sphere of radius $r = R - d$ exerts a net gravitational force (by Newton's Shell Theorem, outer shells exert zero field):
$$g_d = \frac{G M_{\text{inner}}}{(R - d)^2} = \frac{G \left[ M \frac{(R - d)^3}{R^3} \right]}{(R - d)^2} = \mathbf{g \left(1 - \frac{d}{R}\right)}$$
- **Comparison of Altitude and Depth Decreases:**
  For equal small displacements $h = d \ll R$:
  $$\mathbf{\Delta g_{\text{altitude}} = \frac{2h}{R} g = 2 \cdot \left(\frac{d}{R} g\right) = 2 \cdot \Delta g_{\text{depth}}}$$
  - Acceleration due to gravity falls **TWICE AS FAST with altitude as it does with depth**!
- At the center of the Earth ($d = R$): $\mathbf{g_{\text{center}} = 0}$.

---

### 3.3 Variation with Latitude ($\lambda$) and Earth's Diurnal Rotation
As Earth rotates with angular speed $\omega = \frac{2\pi}{24 \times 3600} \approx 7.29 \times 10^{-5}\text{ rad/s}$:
A body at latitude $\lambda$ rotates in a circle of radius $r = R \cos\lambda$. The centrifugal pseudo-force pushes outward:
$$\mathbf{g_\lambda = g - \omega^2 R \cos^2\lambda}$$
2. **At the Equator ($\lambda = 0^\circ, \cos\lambda = 1$):**
   $$\mathbf{g_{\text{eq}} = g - \omega^2 R \quad (\text{GLOBAL MINIMUM})}$$
3. **At the Poles ($\lambda = 90^\circ, \cos\lambda = 0$):**
   $$\mathbf{g_{\text{pole}} = g \quad (\text{GLOBAL MAXIMUM, Completely unaffected by rotation!})}$$
4. **Difference between Pole and Equator:**
   $$\Delta g = g_{\text{pole}} - g_{\text{eq}} = \omega^2 R \approx (7.29 \times 10^{-5})^2 \times (6.4 \times 10^6) \approx \mathbf{0.034 \ \text{m/s}^2}$$
- **Critical Rotational Speed for Weightlessness at Equator:**
  If bodies at the equator appear completely weightless ($g_{\text{eq}} = 0$):
  $$g - \omega^2 R = 0 \implies \mathbf{\omega_{\text{crit}} = \sqrt{\frac{g}{R}} \approx 1.24 \times 10^{-3} \ \text{rad/s} \approx 17 \times \omega_{\text{actual}}}$$
  - The Earth would have to rotate **17 times faster** (length of day $= 24/17 \approx 1.41\text{ hours} \approx 84.6\text{ minutes}$)!

---

### 4.1 Potential Energy of Point Mass Configurations
The gravitational potential energy of two point masses $m_1$ and $m_2$ separated by distance $r$:
$$\mathbf{U(r) = -\frac{G m_1 m_2}{r}}$$
- For a system of $N$ particles:
  $$\mathbf{U_{\text{sys}} = -\sum_{1 \le i < j \le N} \frac{G m_i m_j}{r_{ij}}}$$

---

### 4.2 Gravitational Self-Energy ($U_{\text{self}}$)
The work done by external forces in assembling a body by bringing infinitesimal mass elements from infinite separation to form the final structure:
5. **Uniform Thin Spherical Shell (Mass $M$, Radius $R$):**
   $$\mathbf{U_{\text{self, shell}} = -\frac{G M^2}{2 R}}$$
6. **Uniform Solid Sphere (Mass $M$, Radius $R$):**
   Assembling layer by layer of radius $r$ and thickness $dr$:
   $$dU = -\frac{G M(r) dm}{r} = -\frac{G \left[\frac{4}{3}\pi r^3 \rho\right][4\pi r^2 dr \rho]}{r} = -\frac{16\pi^2 G \rho^2}{3} r^4 dr$$
   Integrating from $r = 0$ to $r = R$ and using $\rho = \frac{M}{\frac{4}{3}\pi R^3}$:
   $$\mathbf{U_{\text{self, solid}} = -\frac{3}{5} \frac{G M^2}{R}}$$
- **Disassembly (Binding) Energy:**
  The energy that must be supplied to completely disperse all particles of a solid sphere to infinity:
  $$\mathbf{E_{\text{bind}} = -U_{\text{self}} = +\frac{3}{5}\frac{G M^2}{R}}$$

---

### 5.1 Escape Speed from Planetary Surface

<!-- image missing: media/escape_velocity_and_keplers_planetary_laws.webp -->
*Description: Two-panel celestial mechanics graphic: (A) Escape speed formulations across planetary surfaces ($v_e = \sqrt{2gR} \approx 11.2\text{ km/s}$), altitudes, and deep core centers ($v_e = \sqrt{3GM/R} \approx 13.7\text{ km/s}$), projection angle invariance, and interstellar excess speed ($v_\infty = \sqrt{v^2 - v_e^2}$); (B) Kepler's Three Laws of Planetary Motion detailing elliptical orbital geometry, areal velocity conservation ($\frac{dA}{dt} = \frac{L}{2m}$), and the harmonic period law ($T^2 \propto a^3$).*

Escape speed is the minimum initial projection speed required for an object to overcome a planet's gravitational pull and reach infinity with zero residual kinetic energy:
$$\frac{1}{2} m v_e^2 + U(R) = 0 \implies \frac{1}{2} m v_e^2 - \frac{G M m}{R} = 0$$
$$\mathbf{v_e = \sqrt{\frac{2 G M}{R}} = \sqrt{2 g R} = R \sqrt{\frac{8\pi G \rho}{3}}}$$
- For Earth ($M = 5.98 \times 10^{24}\text{ kg}, R = 6.37 \times 10^6\text{ m}$):
  $$\mathbf{v_e \approx 11.2 \ \text{km/s} \approx 40,320 \ \text{km/h}}$$
- For the Moon: $v_e \approx 2.38\text{ km/s}$ (Root-mean-square speed of gas molecules exceeds lunar escape velocity, explaining why the **Moon has no atmosphere**!).

---

### 5.2 Escape Speed from Various Boundary Locations
7. **From Altitude $h$ Above Surface ($r = R + h$):**
   $$\mathbf{v_e(h) = \sqrt{\frac{2 G M}{R + h}} = v_e \sqrt{\frac{R}{R + h}}}$$
8. **From the Center of Solid Earth ($r = 0$):**
   At the center, potential is $V_{\text{center}} = -\frac{3}{2}\frac{GM}{R}$:
   $$\frac{1}{2} m v_e^2 - \frac{3 G M m}{2 R} = 0 \implies \mathbf{v_{e, \text{center}} = \sqrt{\frac{3 G M}{R}} = \sqrt{1.5} \, v_{e, \text{surface}} \approx 13.7 \ \text{km/s}}$$

---

### 5.3 Angle Invariance & Interstellar Excess Velocity
- **Projection Angle Invariance:**
  Because kinetic energy and gravitational potential energy are scalar quantities, **escape speed is completely independent of the angle of projection $\theta$** (whether fired vertically, at $45^\circ$, or horizontally, assuming no atmospheric friction or planetary collision).
- **Projection with Speed $v > v_e$ (Hyperbolic Orbit):**
  By conservation of mechanical energy:
  $$\frac{1}{2} m v^2 - \frac{G M m}{R} = \frac{1}{2} m v_\infty^2 \implies \frac{1}{2} m v^2 - \frac{1}{2} m v_e^2 = \frac{1}{2} m v_\infty^2$$
  $$\mathbf{v_\infty = \sqrt{v^2 - v_e^2}}$$
  where $v_\infty$ is the asymptotic residual speed in interstellar space.

---

### 6.1 First Law: The Law of Orbits
Every planet revolves around the Sun in an **elliptical orbit**, with the Sun situated at one of the two foci:
- **Geometry of Elliptical Orbit:**
  - Semi-major axis: $a$.
  - Semi-minor axis: $b = a\sqrt{1 - e^2}$, where $e$ is orbital eccentricity ($0 \le e < 1$).
  - **Perihelion (Closest Approach):** $\mathbf{r_p = a(1 - e)}$.
  - **Aphelion (Farthest Approach):** $\mathbf{r_a = a(1 + e)}$.
  - Relationship: $\mathbf{a = \frac{r_p + r_a}{2}}$.

---

### 6.2 Second Law: The Law of Areas
The line joining the Sun to the planet sweeps out equal areas in equal intervals of time; that is, the **areal velocity is strictly constant**:
$$\mathbf{\frac{dA}{dt} = \frac{L}{2m} = \text{Constant}}$$
- **Direct Consequence of Angular Momentum Conservation:**
  Since gravitational force is strictly central ($\vec{\tau} = \vec{r} \times \vec{F} = 0$), the planet's angular momentum $\vec{L}$ about the Sun is strictly conserved:
  $$L = m r_p v_p = m r_a v_a = \text{Constant}$$
  $$\mathbf{r_p v_p = r_a v_a \implies \frac{v_p}{v_a} = \frac{r_a}{r_p} = \frac{1 + e}{1 - e}}$$
  - A planet moves **fastest at perihelion** and **slowest at aphelion**!

---

### 6.3 Third Law: The Law of Periods (Harmonic Law)
The square of the orbital period $T$ of a planet is directly proportional to the cube of the semi-major axis $a$ of its elliptical orbit:
$$\mathbf{T^2 = \left(\frac{4\pi^2}{G M_S}\right) a^3 \implies T^2 \propto a^3}$$
- **Relative Comparison Formula for Two Orbiting Bodies:**
  $$\mathbf{\left(\frac{T_1}{T_2}\right)^2 = \left(\frac{a_1}{a_2}\right)^3}$$
- The proportionality constant depends **exclusively on the central mass $M_S$**, completely independent of the mass $m$ of the orbiting planet!

---

### 7.1 Circular Satellite Orbits: Velocity, Period, & Energy

<!-- image missing: media/satellite_orbital_mechanics_and_celestial_systems.webp -->
*Description: Two-panel satellite mechanics and celestial systems graphic: (A) Circular satellite orbital parameters ($v_0 = \sqrt{GM/r}$), near-Earth velocity ($7.92\text{ km/s}$), the escape-to-orbital velocity ratio ($v_e = \sqrt{2}v_0$), the Master Energy Triad ($K = -E = \frac{1}{2}|U|$), and geostationary standards ($T = 24\text{ h}$, $h \approx 35,800\text{ km}$); (B) Orbital speed adjustments, apparent weightlessness in orbit ($N = 0$), and binary star co-orbital dynamics ($\omega = \sqrt{G(m_1+m_2)/d^3}$).*

For a satellite of mass $m$ in a stable circular orbit of radius $r = R + h$ around Earth (mass $M$):
9. **Orbital Velocity ($v_0$):**
   $$\frac{m v_0^2}{r} = \frac{G M m}{r^2} \implies \mathbf{v_0 = \sqrt{\frac{G M}{r}} = \sqrt{\frac{G M}{R + h}} = R \sqrt{\frac{g}{R + h}}}$$
   - **Near-Earth Orbit ($h \ll R$):**
     $$\mathbf{v_{0, \text{near}} = \sqrt{g R} \approx 7.92 \ \text{km/s}}$$
   - **Relation between Escape Speed and Orbital Speed:**
     $$\mathbf{v_e = \sqrt{2} \, v_0 \approx 1.414 \, v_0}$$
     - Increasing the speed of a circularly orbiting satellite by **$41.4\%$ ($\sqrt{2} - 1$)** causes it to escape Earth's gravity entirely!
10. **Time Period of Satellite ($T$):**
   $$\mathbf{T = \frac{2\pi r}{v_0} = 2\pi \sqrt{\frac{r^3}{G M}} = \frac{2\pi}{R}\sqrt{\frac{(R + h)^3}{g}}}$$
   - Near-Earth period: $\mathbf{T_0 = 2\pi\sqrt{\frac{R}{g}} \approx 84.6 \ \text{minutes} \approx 5076 \ \text{seconds}}$.
11. **The Master Energy Triad ($K, U, E$):**
   - **Kinetic Energy:** $\mathbf{K = \frac{1}{2} m v_0^2 = +\frac{G M m}{2r}}$
   - **Potential Energy:** $\mathbf{U = -\frac{G M m}{r} = -2 K}$
   - **Total Mechanical Energy:** $\mathbf{E = K + U = -\frac{G M m}{2r} = -K = \frac{U}{2}}$
   - **Binding Energy:** $\mathbf{\text{BE} = -E = +\frac{G M m}{2r}}$
   - **Atmospheric Drag Paradox:**
     When a satellite experiences residual atmospheric friction, non-conservative work removes total mechanical energy ($E$ becomes more negative).
     As a result, orbital radius $r$ **decreases**, potential energy $U$ becomes **more negative**, but kinetic energy $K = \frac{GMm}{2r}$ **INCREASES**!
     - **Atmospheric drag causes an orbiting satellite to SPEED UP as its orbit decays!**

---

### 7.2 Geostationary vs. Polar Satellites

| Orbital Characteristic | Geostationary (Synchronous / Parking) Satellite | Polar (Sun-Synchronous / Remote Sensing) Satellite |
| :---: | :---: | :---: |
| **Orbital Period ($T$)** | Exactly $\mathbf{24 \ \text{hours}} \ (86,400\text{ s})$ | $\mathbf{\sim 100 \ \text{minutes}}$ (Low Earth Orbit) |
| **Direction of Motion** | **West to East** (Co-rotating with Earth) | **North to South** (Polar inclination $i \approx 90^\circ$) |
| **Orbital Plane** | Strictly **Equatorial Plane** ($i = 0^\circ$) | Meriodional Plane (Passes over both geographic poles) |
| **Orbital Radius ($r$)** | $\mathbf{r \approx 42,200 \ \text{km} \approx 6.6 \, R_E}$ | $r \approx R_E + 600\text{ km} \approx 7000\text{ km}$ |
| **Altitude Above Surface ($h$)** | $\mathbf{h = r - R_E \approx 35,800 \ \text{km} \approx 36,000 \ \text{km}}$ | $\mathbf{h \sim 500 \ \text{to} \ 800 \ \text{km}}$ |
| **Primary Application** | Global telecommunications, TV broadcasting, weather | Earth resource mapping, meteorology, military surveillance |

---

### 7.3 Apparent Weightlessness in Orbit
An astronaut of mass $m$ standing on a scale inside an orbiting satellite experiences zero apparent weight ($N = 0$):
$$\frac{G M m}{r^2} - N = m a_c = m \left(\frac{v_0^2}{r}\right) = \frac{G M m}{r^2} \implies \mathbf{N = 0}$$
- **Physical Reality:** Gravitational attraction is **NOT ZERO** ($g_{\text{orbit}} = \frac{GM}{r^2} \approx 0.89 g$ in LEO).
- The sensation of weightlessness occurs because **both the astronaut and the satellite hull are in continuous, identical free fall toward the Earth**!

---

### 7.4 Binary Star Systems
Two isolated stars of masses $m_1$ and $m_2$ separated by distance $d$ revolve in circular orbits about their common Center of Mass:
- Distances to the Center of Mass:
  $$\mathbf{r_1 = \left(\frac{m_2}{m_1 + m_2}\right) d, \quad r_2 = \left(\frac{m_1}{m_1 + m_2}\right) d}$$
- Mutual gravitational force provides centripetal acceleration to each star:
  $$\frac{G m_1 m_2}{d^2} = m_1 \omega^2 r_1 = m_1 \omega^2 \left(\frac{m_2}{m_1 + m_2} d\right) \implies \mathbf{\omega = \sqrt{\frac{G(m_1 + m_2)}{d^3}}}$$
- **Orbital Period of the Binary System:**
  $$\mathbf{T = 2\pi \sqrt{\frac{d^3}{G(m_1 + m_2)}}}$$
  - Both stars share the **exact same angular speed $\omega$ and period $T$**!

---

### 8.1 Master Gravitation Formula Table

| Physical Quantity / Law | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Point Mass Gravity** | $F = \frac{G m_1 m_2}{r^2}$ | Inverse-square central force |
| **Point Mass on Rod** | $F = \frac{G M m}{d(d + L)}$ | Cannot replace rod with COM |
| **Ring Axial Field** | $E_g(x) = \frac{G M x}{(R^2 + x^2)^{3/2}}$ | Peak field at $x = R/\sqrt{2}$ |
| **Shell Field / Potential** | $E_{\text{in}} = 0, \ V_{\text{in}} = -\frac{GM}{R}$ | Equipotential hollow interior |
| **Solid Sphere Potential** | $V(r) = -\frac{GM}{2R^3}(3R^2 - r^2)$ | Center potential $V(0) = -1.5 \frac{GM}{R}$ |
| **Altitude Gravity** | $g_h = \frac{g}{(1 + h/R)^2} \approx g(1 - \frac{2h}{R})$ | Drops twice as fast as depth |
| **Depth Gravity** | $g_d = g(1 - \frac{d}{R})$ | Linear drop to 0 at center |
| **Latitude Gravity** | $g_\lambda = g - \omega^2 R \cos^2\lambda$ | Max at poles ($g$), min at equator |
| **Self-Energy (Solid Sphere)** | $U_{\text{self}} = -\frac{3 G M^2}{5 R}$ | Disassembly binding energy |
| **Surface Escape Velocity** | $v_e = \sqrt{2gR} = \sqrt{\frac{2GM}{R}}$ | $11.2\text{ km/s}$ on Earth |
| **Center Escape Velocity** | $v_{e, \text{center}} = \sqrt{\frac{3GM}{R}} = \sqrt{1.5} v_e$ | $13.7\text{ km/s}$ from core |
| **Interstellar Residual Speed** | $v_\infty = \sqrt{v^2 - v_e^2}$ | Hyperbolic unbound orbit |
| **Kepler's Second Law** | $\frac{dA}{dt} = \frac{L}{2m} = \text{const}$ | $r_p v_p = r_a v_a$ |
| **Kepler's Third Law** | $T^2 = \left(\frac{4\pi^2}{GM_S}\right) a^3$ | Independent of orbiting mass |
| **Circular Orbital Speed** | $v_0 = \sqrt{\frac{GM}{r}}$ | Near-Earth $v_0 \approx 7.92\text{ km/s}$ |
| **Escape-to-Orbital Ratio** | $v_e = \sqrt{2} v_0 \approx 1.414 v_0$ | $+41.4\%$ speed to escape orbit |
| **Master Energy Triad** | $E = -K = \frac{1}{2} U = -\frac{GMm}{2r}$ | $U = -2K$, Binding Energy $= +K$ |
| **Geostationary Altitude** | $h \approx 35,800\text{ km} \approx 36,000\text{ km}$ | $T = 24\text{ h}$, Equatorial plane |
| **Binary Star Frequency** | $\omega = \sqrt{\frac{G(m_1 + m_2)}{d^3}}$ | Co-orbit mutual Center of Mass |

---

#### Trap 1: The Linear Altitude Approximation Misuse
- **The Error:** Using $g_h = g(1 - 2h/R)$ when $h = R$ or $h = 2R$.
- **The Physics:** The binomial expansion $g_h \approx g(1 - 2h/R)$ is valid **strictly when $h \ll R$** (typically $h < 5\%$ of $R \approx 300\text{ km}$).
- For large altitudes ($h \ge R$), you **MUST USE THE EXACT INVERSE-SQUARE LAW**:
  $$g_h = \frac{g}{\left(1 + \frac{h}{R}\right)^2}$$
  At $h = R$, $g_h = g / (1 + 1)^2 = g / 4$, whereas the linear formula gives nonsense $g(1 - 2) = -g$!

#### Trap 2: Replacing Continuous Mass with Center of Mass
- **The Error:** Calculating gravitational attraction between a point mass $m$ and a rod by placing rod mass $M$ at its center of mass ($d + L/2$).
- **The Physics:** The Center of Mass theorem applies **exclusively to uniform spherical bodies** (Newton's Shell Theorem). For rods, discs, rings, or arbitrary shapes, you must integrate:
  $$F = \frac{GMm}{d(d+L)} \ne \frac{GMm}{(d + L/2)^2}$$

#### Trap 3: Gravitational Potential Inside a Spherical Shell
- **The Error:** Assuming that because gravitational field is zero inside a spherical shell ($E_g = 0$), gravitational potential must also be zero ($V = 0$).
- **The Physics:** Since $\vec{E}_g = -\frac{dV}{dr} = 0$, potential is **CONSTANT, NOT ZERO**!
  $$V(r) = V_{\text{surface}} = -\frac{GM}{R} \quad (\forall \, r \le R)$$
- Work is required to bring a mass from infinity to the shell surface, but zero additional work is needed to move it anywhere inside the hollow cavity!

#### Trap 4: Escape Speed Launch Angle Fallacy
- **The Error:** Believing that escape velocity is minimum when projected vertically ($90^\circ$) and higher when projected at $45^\circ$.
- **The Physics:** Gravitational field is conservative and potential energy depends only on radial coordinate $r$. Escape speed is **completely independent of launch angle $\theta$**!
