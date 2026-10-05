Physics Revision Context: Chapter 22 — Gravitation


**Source:** `scraped/Coaching_Modules/Praveen FL 2023-24/.../Notes/Gravitation Re theory.pdf` & JEE Main / Advanced Core Revision Materials  
**Extracted into:** `JEE/context/`  
**Batch:** Physics Mechanics Core — Universal Law of Gravitation, Gravitational Field & Potential Analytics, Continuous Mass Geometries, Gravitational Self-Energy, Systematic Variations in $g$ (Altitude, Depth, Rotation, Shape), Escape Velocity Dynamics, Kepler's Laws, Satellite Mechanics & Energetics, Binary Star Systems, and Planetary Motion  
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams  


---


## 1. Newton's Universal Law of Gravitation


### 1.1 Statement & Fundamental Invariants
* **Universal Law of Gravitation:** Every particle of mass in the universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between them:
  $$F = G \frac{m_1 m_2}{r^2}$$
* **Universal Gravitational Constant ($G$):**
  $$G = 6.67430 \times 10^{-11} \text{ N}\cdot\text{m}^2/\text{kg}^2 = 6.67430 \times 10^{-11} \text{ m}^3/(\text{kg}\cdot\text{s}^2)$$
  * Dimensional formula: $[G] = [M^{-1} L^3 T^{-2}]$.
  * $G$ is a scalar universal constant, independent of the medium intervening between particles, temperature, chemical state, or electromagnetic environment.


### 1.2 Vector Formulation of Gravitational Force
* Let $\vec{r}_1$ and $\vec{r}_2$ be position vectors of masses $m_1$ and $m_2$. The displacement vector from $m_1$ to $m_2$ is $\vec{r}_{12} = \vec{r}_2 - \vec{r}_1$, and the unit vector is $\hat{r}_{12} = \frac{\vec{r}_{12}}{r_{12}}$:
  $$\vec{F}_{21} = -G \frac{m_1 m_2}{r_{12}^2} \hat{r}_{12} = -G \frac{m_1 m_2}{r_{12}^3} \vec{r}_{12}$$
  $$\vec{F}_{12} = -G \frac{m_1 m_2}{r_{21}^2} \hat{r}_{21} = +G \frac{m_1 m_2}{r_{12}^3} \vec{r}_{12} = -\vec{F}_{21}$$
* **Key Physical Characteristics:**
  1. **Newton's Third Law:** $\vec{F}_{12} = -\vec{F}_{21}$ (Action-reaction pair; mutual gravitational forces are strictly equal and opposite).
  2. **Central Force:** The force acts along the straight line joining the centers of mass of the two interacting bodies ($\vec{r} \times \vec{F} = 0 \implies$ orbital angular momentum is conserved).
  3. **Conservative Nature:** $\oint \vec{F} \cdot d\vec{r} = 0$. The work done by gravitational force is path-independent and depends solely on initial and final positions.
  4. **Superposition Principle:** The net gravitational force acting on a point mass $m_0$ due to a collection of $N$ discrete point masses is the vector sum of individual two-body forces:
     $$\vec{F}_{\text{net}} = \sum_{i=1}^N \vec{F}_{0i} = \sum_{i=1}^N \left( -G \frac{m_0 m_i}{r_{0i}^3} \vec{r}_{0i} \right)$$
     The presence of a third mass $m_3$ does not modify the mutual gravitational interaction between $m_1$ and $m_2$.


---


## 2. Gravitational Field Intensity ($\vec{E}$ or $\vec{I}$)


### 2.1 Definition & Vector Expression
* **Gravitational Field Intensity ($\vec{E}$):** The gravitational force experienced per unit test mass placed at that point in space, in the limit where the test mass $m_0$ is infinitesimal ($m_0 \to 0$) so as not to disturb the source mass distribution:
  $$\vec{E} = \lim_{m_0 \to 0} \frac{\vec{F}}{m_0} = -\frac{G M}{r^2} \hat{r} = -\frac{G M}{r^3} \vec{r}$$
* **Units and Dimensions:**
  * SI Unit: $\text{N/kg} = \text{m/s}^2$ (acceleration units).
  * Dimensional formula: $[E] = [M^0 L^1 T^{-2}]$.
* **Principle of Equivalence:** Gravitational field intensity $\vec{E}$ at any point in space is numerically and directionally identical to the acceleration due to gravity $\vec{g}$ at that point:
  $$\vec{g} = \vec{E}$$


### 2.2 Surface Field vs. Mass and Density of Celestial Bodies
* For a spherical planet of mass $M$, radius $R$, and uniform mass density $\rho$:
  $$M = \frac{4}{3}\pi R^3 \rho \implies E_{\text{surface}} = \frac{G M}{R^2} = \frac{G \left(\frac{4}{3}\pi R^3 \rho\right)}{R^2} = \frac{4}{3}\pi G \rho R$$
  * For equal planetary masses ($M_A = M_B$): $\frac{E_A}{E_B} = \left(\frac{R_B}{R_A}\right)^2$.
  * For equal planetary densities ($\rho_A = \rho_B$): $\frac{E_A}{E_B} = \frac{R_A}{R_B}$.


---


## 3. Gravitational Potential ($V$) & Field-Potential Gradient


### 3.1 Definition of Gravitational Potential
* **Gravitational Potential ($V$):** The work done by an external agent in bringing a unit test mass from infinity to that point slowly (with zero change in kinetic energy):
  $$V(\vec{r}) = \frac{W_{\text{ext}}(\infty \to \vec{r})}{m_0} = -\int_\infty^{\vec{r}} \vec{E} \cdot d\vec{r}$$
  For a point mass $M$:
  $$V(r) = -\int_\infty^r \left(-\frac{G M}{r'^2}\right) dr' = -G M \left[ \frac{1}{r'} \right]_\infty^r = -\frac{G M}{r}$$
* **Units & Characteristics:**
  * SI Unit: $\text{J/kg} = \text{m}^2/\text{s}^2$.
  * Dimensional formula: $[V] = [M^0 L^2 T^{-2}]$.
  * Reference convention: $V(\infty) = 0$. Since gravity is universally attractive, gravitational potential is **strictly negative** at all finite distances.


### 3.2 Gradient Relationship
* The gravitational field vector is the negative spatial gradient of gravitational potential:
  $$\vec{E} = -\vec{\nabla} V = -\left( \frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k} \right)$$
  For spherically symmetric systems:
  $$E(r) = -\frac{dV}{dr}$$
  * The gravitational field points along the direction of steepest decrease of gravitational potential.


---


## 4. Gravitational Field and Potential for Standard Geometries


### 4.1 Uniform Circular Ring (Mass $M$, Radius $R$)
* **Axial Point at Distance $x$ from Center:**
  $$V(x) = -\frac{G M}{\sqrt{R^2 + x^2}}$$
  $$E(x) = -\frac{dV}{dx} = -\frac{G M x}{(R^2 + x^2)^{3/2}} \quad (\text{directed toward ring center})$$
* **Special Positions:**
  * At Ring Center ($x = 0$): $V_{\text{center}} = -\frac{G M}{R}$, $E_{\text{center}} = 0$.
  * Asymptotic limit ($x \gg R$): $V(x) \approx -\frac{GM}{x}$, $E(x) \approx -\frac{GM}{x^2}$ (acts as point mass).
  * **Point of Maximum Field:** Setting $\frac{dE}{dx} = 0$:
    $$x_{\text{max}} = \pm \frac{R}{\sqrt{2}} \implies E_{\text{max}} = \frac{2 G M}{3\sqrt{3} R^2}$$


### 4.2 Thin Straight Rod (Mass $M$, Length $L$)
* **Point $P$ on the Axis at Distance $d$ from Near End:**
  $$V(d) = -\frac{G M}{L} \ln\left( \frac{d + L}{d} \right)$$
  $$E(d) = \frac{G M}{d(d + L)} \quad (\text{directed toward rod})$$
* **Point $P$ on Perpendicular Bisector at Perpendicular Distance $d$:**
  $$E_\perp = \frac{2 G M}{d \sqrt{L^2 + 4 d^2}} = \frac{2 G \lambda \sin\theta_0}{d} \quad \text{where } \tan\theta_0 = \frac{L}{2d}$$


### 4.3 Infinite Uniform Line Mass (Linear Density $\lambda = M/L$)
* Gravitational field at distance $d$:
  $$E(d) = \frac{2 G \lambda}{d}$$
* Potential difference between radial distances $d_1$ and $d_2$:
  $$V(d_2) - V(d_1) = 2 G \lambda \ln\left(\frac{d_2}{d_1}\right)$$
  *(Absolute potential cannot be referenced to infinity because the line mass itself extends to infinity).*


### 4.4 Uniform Thin Spherical Shell (Mass $M$, Radius $R$)
* **Interior Points ($r < R$):**
  $$E_{\text{in}} = 0 \quad (\text{Zero gravitational field everywhere inside})$$
  $$V_{\text{in}} = -\frac{G M}{R} = \text{constant}$$
* **Exterior Points ($r \ge R$):**
  $$E_{\text{out}}(r) = -\frac{G M}{r^2}$$
  $$V_{\text{out}}(r) = -\frac{G M}{r}$$
* **Boundary Invariants:** $V(r)$ is continuous across $r = R$, while $E(r)$ undergoes a step discontinuity of magnitude $\frac{GM}{R^2}$.


### 4.5 Uniform Solid Sphere (Mass $M$, Radius $R$, Uniform Density $\rho$)
* **Interior Points ($r \le R$):**
  Only the enclosed concentric sphere of radius $r$ exerts net gravitational force:
  $$M_{\text{enc}} = M \left(\frac{r^3}{R^3}\right)$$
  $$E_{\text{in}}(r) = -\frac{G M_{\text{enc}}}{r^2} = -\frac{G M r}{R^3} = -\frac{4}{3}\pi G \rho r \quad (E \propto r)$$
  $$V_{\text{in}}(r) = -\frac{G M}{2 R^3}(3 R^2 - r^2)$$
  * At Sphere Center ($r = 0$):
    $$E_{\text{center}} = 0 \quad \text{and} \quad V_{\text{center}} = -\frac{3}{2}\frac{G M}{R} = 1.5 V_{\text{surface}}$$
* **Exterior Points ($r \ge R$):**
  $$E_{\text{out}}(r) = -\frac{G M}{r^2} \quad \text{and} \quad V_{\text{out}}(r) = -\frac{G M}{r}$$


---


### 4.6 Visual Preservation: Field & Potential Profiles


![Gravitational Field and Potential Profiles for Spherical Shell and Solid Sphere](/media/gravitational_field_and_potential_profiles.webp)
*Description: Four-panel comparative radial plot illustrating the spatial distributions of gravitational field intensity $E(r)$ and potential $V(r)$ for standard spherical geometries: (Top-Left) Thin spherical shell field showing zero field $E = 0$ throughout the interior cavity ($r < R$) with a step jump to $GM/R^2$ at the boundary and $1/r^2$ decay outside; (Top-Right) Thin spherical shell potential showing an equipotential interior plateau $V = -GM/R$ transitioning into $-GM/r$ outside; (Bottom-Left) Uniform solid sphere field displaying linear growth $E \propto r$ from the center up to surface peak $GM/R^2$, followed by inverse-square drop $1/r^2$; and (Bottom-Right) Uniform solid sphere potential displaying a parabolic curve reaching its deepest minimum at the center $V_{\mathrm{center}} = -1.5 GM/R$, passing through surface value $-GM/R$, and approaching zero asymptotically as $-GM/r$.*


---


## 5. Gravitational Potential Energy & Self-Energy


### 5.1 Two-Body Gravitational Potential Energy
* The gravitational potential energy $U(r)$ of two point masses $M$ and $m$ separated by distance $r$:
  $$U(r) = -G \frac{M m}{r}$$
* **Work Done in Displacing Mass $m$:**
  * Moving from distance $r_1$ to $r_2$:
    $$\Delta U = U(r_2) - U(r_1) = -G M m \left( \frac{1}{r_2} - \frac{1}{r_1} \right)$$
  * Lifting a body of mass $m$ from Earth's surface ($r_1 = R$) to altitude $h$ ($r_2 = R + h$):
    $$\Delta U = -G M m \left( \frac{1}{R + h} - \frac{1}{R} \right) = \frac{G M m h}{R(R + h)} = \frac{\left(\frac{G M}{R^2}\right) m h}{1 + \frac{h}{R}} = \frac{m g h}{1 + \frac{h}{R}}$$
    * For small altitudes ($h \ll R$): $\Delta U \approx m g h$.
    * For $h = R$: $\Delta U = \frac{1}{2} m g R$.
    * For $h \to \infty$: $\Delta U = m g R$.


### 5.2 Gravitational Self-Energy
* **Definition:** The work done by an external agent in assembling a mass distribution from infinitesimal parts initially scattered at infinite mutual separation:
  $$U_{\text{self}} = -\frac{1}{2} G \iint \frac{dm_1 dm_2}{r_{12}}$$
* **Important Standard Geometries:**
  1. **Uniform Thin Spherical Shell (Mass $M$, Radius $R$):**
     $$U_{\text{self, shell}} = -\frac{G M^2}{2 R}$$
  2. **Uniform Solid Sphere (Mass $M$, Radius $R$, e.g., Star/Planet):**
     Assembling concentric shells of thickness $dr$:
     $$U_{\text{self, sphere}} = -\frac{3}{5}\frac{G M^2}{R}$$
  3. **System of $n$ Identical Particles (each of mass $m$, uniform separation $r$):**
     $$U_{\text{self}} = -\frac{1}{2} n(n - 1)\frac{G m^2}{r}$$


---


## 6. Acceleration Due to Gravity ($g$) & Systematic Variations


### 6.1 Standard Surface Formula
* A particle of mass $m$ on Earth's surface experiences gravitational force $F = \frac{G M_e m}{R_e^2} = m g$:
  $$g = \frac{G M_e}{R_e^2} = \frac{4}{3}\pi G \rho R_e \approx 9.81 \text{ m/s}^2$$


### 6.2 Systematic Variations of $g$


#### A. Effect of Altitude (Height $h$ Above Surface)
* At height $h$ ($r = R_e + h$):
  $$g_h = \frac{G M_e}{(R_e + h)^2} = \frac{g}{\left(1 + \frac{h}{R_e}\right)^2}$$
  * Binomial approximation for $h \ll R_e$:
    $$g_h \approx g \left( 1 - \frac{2h}{R_e} \right)$$
  * Fractional and percentage decrease:
    $$\frac{\Delta g}{g} = \frac{g - g_h}{g} \approx \frac{2h}{R_e} \implies \text{Percentage drop} = \frac{2h}{R_e} \times 100\%$$


#### B. Effect of Depth (Depth $d$ Below Surface)
* At depth $d$ inside the Earth, only the core of radius $(R_e - d)$ exerts net gravitational pull:
  $$g_d = \frac{4}{3}\pi G \rho (R_e - d) = g \left( 1 - \frac{d}{R_e} \right)$$
  * At Earth's center ($d = R_e$): $g_{\text{center}} = 0$.
  * Fractional decrease: $\frac{\Delta g}{g} = \frac{d}{R_e}$.
  * **Critical Rate Comparison:** For small heights and depths ($h, d \ll R_e$):
    $$\left| \frac{dg_h}{dh} \right| = \frac{2g}{R_e} = 2 \left| \frac{dg_d}{dd} \right|$$
    *(Gravity decreases twice as fast with altitude as it does with depth: $g_h = g_d$ when $d = 2h$).*


#### C. Effect of Earth's Rotation (Latitude $\theta$)
* Due to diurnal rotation of Earth with angular velocity $\omega = \frac{2\pi}{86400} \approx 7.27 \times 10^{-5} \text{ rad/s}$, a body at geographic latitude $\theta$ experiences a centrifugal acceleration $\omega^2 r = \omega^2 R_e \cos\theta$ directed outward perpendicular to the rotation axis:
  $$g_{\text{eff}}(\theta) = g - \omega^2 R_e \cos^2\theta$$
  * **At the Equator ($\theta = 0^\circ$):** $\cos(0^\circ) = 1$:
    $$g_{\text{eq}} = g - \omega^2 R_e \approx 9.78 \text{ m/s}^2$$
  * **At the Poles ($\theta = 90^\circ$):** $\cos(90^\circ) = 0$:
    $$g_{\text{pole}} = g \approx 9.83 \text{ m/s}^2$$
  * **Difference:** $\Delta g = g_{\text{pole}} - g_{\text{eq}} = \omega^2 R_e \approx 0.034 \text{ m/s}^2$.
  * **Condition for Weightlessness at Equator:**
    $$g_{\text{eq}} = 0 \implies \omega_{\text{crit}} = \sqrt{\frac{g}{R_e}} \approx 1.24 \times 10^{-3} \text{ rad/s} \approx 17 \omega_{\text{current}}$$
    *(Earth would need to rotate 17 times faster for bodies at the equator to feel weightless; day length would shrink to $\approx 1.41 \text{ hours} \approx 84.6 \text{ minutes}$).*


#### D. Effect of Earth's Ellipsoidal Shape
* Earth is an oblate spheroid with equatorial radius exceeding polar radius by $\approx 21 \text{ km}$ ($R_{\text{eq}} - R_{\text{pole}} \approx 21 \text{ km}$):
  $$g \propto \frac{1}{R^2} \implies g_{\text{pole}} > g_{\text{eq}}$$


---


### 6.3 Visual Preservation: Systematic Gravity Variations


![Variation of g with Altitude, Depth, and Latitude](/media/gravity_variation_altitude_depth_latitude.webp)
*Description: Dual analytical plots detailing the variation of acceleration due to gravity: (Left) Plot of effective gravity $g/g_0$ versus radial distance $r/R$ from the center of the Earth, depicting linear growth $g(r) \propto r$ from zero at the center to $g_0$ at the surface, followed by an inverse-square decline $g_h = g_0 (R/r)^2$ at altitudes above the surface; and (Right) Latitudinal profile plotting effective gravity $g(\theta) = g_{\mathrm{pole}} - \omega^2 R \cos^2\theta$ from equator ($\theta = 0^\circ$, $g \approx 9.798\ \mathrm{m/s^2}$) to poles ($\theta = 90^\circ$, $g \approx 9.832\ \mathrm{m/s^2}$), highlighting the rotational differential $\Delta g \approx 0.034\ \mathrm{m/s^2}$.*


---


## 7. Escape Velocity ($v_e$)


### 7.1 Derivation from Mechanical Energy Conservation
* **Escape Velocity ($v_e$):** The minimum projection speed required for an unpowered object launched from a celestial body's surface to completely overcome its gravitational field and reach infinity with non-negative kinetic energy ($E \ge 0$):
  $$E_{\text{surface}} = \frac{1}{2} m v_e^2 - \frac{G M_e m}{R_e} = 0 \implies v_e = \sqrt{\frac{2 G M_e}{R_e}} = \sqrt{2 g R_e}$$
* **Numerical Values for Earth:**
  $$v_e = \sqrt{2 \times 9.81 \times 6.371 \times 10^6} \approx 11.19 \text{ km/s} \approx 11.2 \text{ km/s}$$
* **Density Formulation:**
  $$v_e = \sqrt{2 G \left(\frac{4}{3}\pi R_e^3 \rho\right) \frac{1}{R_e}} = R_e \sqrt{\frac{8\pi G \rho}{3}}$$
* **Core Characteristics:**
  1. **Independence of Projectile Properties:** $v_e$ depends strictly on the mass and radius of the planet; it is completely independent of the projectile mass $m$ and the launch angle $\theta$ (provided the trajectory does not intersect the planet surface).
  2. **Atmospheric Retention Criterion:** A planet can retain an atmosphere if the root-mean-square thermal speed of its atmospheric gas molecules is substantially less than the escape velocity ($v_{\text{rms}} < \frac{1}{5} v_e$). On the Moon, $v_e \approx 2.38 \text{ km/s}$, whereas gas thermal speeds exceed this value, explaining the Moon's lack of an atmosphere.
  3. **Black Hole Limit (Schwarzschild Radius):** Setting $v_e = c$ (speed of light):
     $$R_s = \frac{2 G M}{c^2}$$


---


## 8. Kepler's Laws of Planetary Motion


### 8.1 Kepler's First Law (Law of Orbits)
* Every planet moves in an elliptical orbit around the Sun, with the Sun situated at one of the two foci of the ellipse.
* **Elliptical Geometry Parameters:**
  * Semi-major axis: $a$; Semi-minor axis: $b = a\sqrt{1 - e^2}$, where $e$ is orbital eccentricity ($0 \le e < 1$).
  * Sun located at focus $F_1$ at coordinate $(-ae, 0)$ relative to ellipse center.
  * **Perihelion (Closest Approach):** $r_p = a(1 - e)$.
  * **Aphelion (Farthest Distance):** $r_a = a(1 + e)$.
  * Semi-major axis relation: $a = \frac{r_p + r_a}{2}$.


### 8.2 Kepler's Second Law (Law of Areas)
* The radius vector joining the Sun to a planet sweeps out equal areas in equal intervals of time; that is, the **areal velocity is constant**:
  $$\frac{dA}{dt} = \text{constant}$$
* **Derivation from Angular Momentum Conservation:**
  In time $dt$, the radius vector sweeps an area $dA = \frac{1}{2} r (r\,d\theta)$:
  $$\frac{dA}{dt} = \frac{1}{2} r^2 \frac{d\theta}{dt} = \frac{1}{2} r^2 \omega = \frac{L}{2m} = \text{constant}$$
  Since gravitational force is central ($\vec{\tau} = \vec{r} \times \vec{F} = 0$), orbital angular momentum $\vec{L}$ is strictly conserved.
* **Speed Invariants at Apsides:**
  $$L = m v_p r_p = m v_a r_a \implies v_p r_p = v_a r_a$$
  $$\frac{v_{\text{max}}}{v_{\text{min}}} = \frac{v_p}{v_a} = \frac{r_a}{r_p} = \frac{1 + e}{1 - e}$$


### 8.3 Kepler's Third Law (Law of Periods)
* The square of the orbital period $T$ of a planet is directly proportional to the cube of the semi-major axis $a$ of its elliptical orbit:
  $$T^2 \propto a^3 \implies \frac{T^2}{a^3} = \frac{4\pi^2}{G M_s} = \text{constant}$$
* For circular orbits ($a = r$): centripetal force equals gravitational force:
  $$\frac{m v^2}{r} = \frac{G M_s m}{r^2} \implies v = \sqrt{\frac{G M_s}{r}}$$
  $$T = \frac{2\pi r}{v} = \frac{2\pi r}{\sqrt{\frac{G M_s}{r}}} = \frac{2\pi}{\sqrt{G M_s}} r^{3/2} \implies T^2 = \left( \frac{4\pi^2}{G M_s} \right) r^3$$


---


## 9. Satellite Dynamics & Orbital Mechanics


### 9.1 Orbital Speed ($v_0$)
* For a satellite of mass $m$ orbiting Earth at altitude $h$ ($r = R_e + h$):
  $$\frac{m v_0^2}{r} = \frac{G M_e m}{r^2} \implies v_0 = \sqrt{\frac{G M_e}{r}} = \sqrt{\frac{G M_e}{R_e + h}} = R_e \sqrt{\frac{g}{R_e + h}}$$
* **Near-Earth Orbit ($h \ll R_e$):**
  $$v_0 = \sqrt{g R_e} \approx 7.92 \text{ km/s} \approx 8.0 \text{ km/s}$$
* **Fundamental Velocity Relationship:**
  $$v_e = \sqrt{2} v_0 \approx 1.414 v_0$$


### 9.2 Time Period of Satellite Orbit
* $$T = \frac{2\pi r}{v_0} = \frac{2\pi (R_e + h)}{\sqrt{\frac{G M_e}{R_e + h}}} = 2\pi \sqrt{\frac{(R_e + h)^3}{G M_e}} = 2\pi \sqrt{\frac{(R_e + h)^3}{g R_e^2}}$$
* **Near-Earth Satellite ($h \ll R_e$):**
  $$T_0 = 2\pi \sqrt{\frac{R_e}{g}} = 2\pi \sqrt{\frac{6.371 \times 10^6}{9.81}} \approx 5063 \text{ s} \approx 84.4 \text{ minutes}$$


### 9.3 Satellite Energetics


| Energy Metric | Mathematical Formula | Physical Interpretation |
| :--- | :--- | :--- |
| **Kinetic Energy ($K$)** | $K = \frac{1}{2} m v_0^2 = \frac{G M_e m}{2r}$ | Positive; motion energy in stable orbit |
| **Potential Energy ($U$)** | $U = -\frac{G M_e m}{r}$ | Negative; gravitational binding interaction |
| **Total Mechanical Energy ($E$)** | $E = K + U = -\frac{G M_e m}{2r}$ | Strictly negative for bound, closed orbits |
| **Binding Energy ($BE$)** | $BE = -E = \frac{G M_e m}{2r}$ | Energy required to liberate satellite to infinity |


* **Energy Proportions:**
  $$E = -K = \frac{1}{2} U \quad \text{and} \quad |U| = 2K = 2|E|$$


### 9.4 Classification of Artificial Satellites


#### A. Geostationary (Geosynchronous) Satellites
* **Criteria:**
  1. Period of revolution matches Earth's diurnal rotation: $T = 24 \text{ hours} = 86400 \text{ s}$.
  2. Orbit lies strictly in Earth's equatorial plane (inclination $i = 0^\circ$).
  3. Direction of orbital revolution matches Earth's rotation: **West to East**.
* **Orbital Height Calculation:**
  $$r = \left( \frac{G M_e T^2}{4\pi^2} \right)^{1/3} \approx 42,164 \text{ km} \approx 6.6 R_e$$
  $$h = r - R_e = 42,164 - 6,371 \approx 35,793 \text{ km} \approx 36,000 \text{ km}$$
* **Orbital Speed:** $v_0 \approx 3.08 \text{ km/s}$.
* **Applications:** Telecommunications, television broadcast relay, continuous regional weather monitoring.


#### B. Polar (Sun-Synchronous) Satellites
* **Characteristics:** Low-altitude orbits passing over North and South poles ($i \approx 90^\circ$).
* **Altitude:** $h \approx 500 - 800 \text{ km}$; Period $T \approx 100 \text{ minutes}$.
* **Applications:** High-resolution Earth observation, geographic mapping, meteorology, environmental monitoring.


### 9.5 Trajectory Classification by Projection Speed ($v$)


| Projection Speed ($v$) | Total Energy ($E$) | Orbit Eccentricity ($e$) | Trajectory Shape & Behavior |
| :--- | :--- | :--- | :--- |
| $v < v_0 = \sqrt{\frac{GM}{r}}$ | $E < 0$ | $e < 1$ | Sub-orbital ellipse intersecting Earth surface |
| $v = v_0 = \sqrt{\frac{GM}{r}}$ | $E = -\frac{GMm}{2r} < 0$ | $e = 0$ | Stable circular orbit around planet |
| $v_0 < v < v_e = \sqrt{\frac{2GM}{r}}$ | $E < 0$ | $0 < e < 1$ | Closed elliptical orbit with planet at near focus |
| $v = v_e = \sqrt{\frac{2GM}{r}}$ | $E = 0$ | $e = 1$ | Parabolic escape trajectory to infinity |
| $v > v_e$ | $E > 0$ | $e > 1$ | Hyperbolic escape trajectory with residual velocity $v_\infty = \sqrt{v^2 - v_e^2}$ |


---


### 9.6 Visual Preservation: Keplerian Orbits & Launch Trajectories


![Keplerian Orbits and Launch Trajectories](/media/kepler_orbits_and_satellite_trajectories.webp)
*Description: Two-panel orbital mechanics visualization: (Left) Kepler's elliptical planetary orbit showing the Sun at focus $F_1$, aphelion $r_a = a(1+e)$, perihelion $r_p = a(1-e)$, equal swept area sectors demonstrating the Law of Areas ($dA/dt = L/2m = \text{const}$), and a summary box of Kepler's three laws; (Right) Geometric flight paths of a satellite launched horizontally from height $h$ above Earth, categorized by launch speed $v$: ballistic return ($v < v_0$), circular orbit ($v = v_0$), elongated ellipse ($v_0 < v < v_e$), parabolic escape ($v = v_e$), and hyperbolic path ($v > v_e$).*


---


## 10. Binary Star Systems & Reduced Mass Mechanics


### 10.1 Center of Mass Dynamics
* Two stars of masses $m_1$ and $m_2$ separated by fixed distance $d$ revolve under mutual gravitational attraction about their common center of mass $C$:
  $$r_1 = \left( \frac{m_2}{m_1 + m_2} \right) d \quad \text{and} \quad r_2 = \left( \frac{m_1}{m_1 + m_2} \right) d$$
  $$r_1 + r_2 = d \quad \text{and} \quad m_1 r_1 = m_2 r_2$$


### 10.2 Orbital Angular Frequency & Period
* The mutual gravitational force provides the requisite centripetal force for each star:
  $$F_g = \frac{G m_1 m_2}{d^2} = m_1 r_1 \omega^2 = m_1 \left( \frac{m_2 d}{m_1 + m_2} \right) \omega^2$$
  $$\omega^2 = \frac{G (m_1 + m_2)}{d^3} \implies \omega = \sqrt{\frac{G (m_1 + m_2)}{d^3}}$$
  $$T = \frac{2\pi}{\omega} = 2\pi \sqrt{\frac{d^3}{G (m_1 + m_2)}}$$
* **Reduced Mass ($\mu$):**
  $$\mu = \frac{m_1 m_2}{m_1 + m_2} \implies F_g = \mu d \omega^2$$
* **Ratios of Angular Momenta and Kinetic Energies:**
  $$\frac{L_1}{L_2} = \frac{I_1 \omega}{I_2 \omega} = \frac{m_1 r_1^2}{m_2 r_2^2} = \frac{m_1 \left(\frac{m_2 d}{m_1+m_2}\right)^2}{m_2 \left(\frac{m_1 d}{m_1+m_2}\right)^2} = \frac{m_2}{m_1}$$
  $$\frac{K_1}{K_2} = \frac{\frac{1}{2} I_1 \omega^2}{\frac{1}{2} I_2 \omega^2} = \frac{L_1}{L_2} = \frac{m_2}{m_1}$$


---


## 11. High-Yield JEE Problem Archetypes & Formulas


### Archetype 1: Spherical Cavity in a Solid Celestial Body
* **Problem:** A spherical cavity of radius $R/2$ is carved inside a uniform solid sphere of mass $M$ and radius $R$, touching the surface and passing through the center. Find the gravitational force on an external mass $m$ at distance $r$ from the sphere center along the line of centers.
* **Superposition Approach:**
  * Original intact sphere mass: $M$; Cavity sphere mass: $M' = M \left(\frac{R/2}{R}\right)^3 = \frac{M}{8}$.
  * Distance of cavity center from external point: $r' = r - \frac{R}{2}$.
  * Net gravitational force:
    $$F_{\text{net}} = F_{\text{full}} - F_{\text{cavity}} = \frac{G M m}{r^2} - \frac{G \left(\frac{M}{8}\right) m}{\left(r - \frac{R}{2}\right)^2} = \frac{G M m}{r^2} \left[ 1 - \frac{1}{8\left(1 - \frac{R}{2r}\right)^2} \right]$$
* **Field Inside the Cavity:** The gravitational field inside an off-center spherical cavity excavated in a uniform solid sphere is **spatially uniform** and parallel to the vector joining the sphere center to the cavity center $\vec{r}_c$:
  $$\vec{E}_{\text{cavity}} = -\frac{4}{3}\pi G \rho \vec{r}_c = \text{constant}$$


### Archetype 2: Motion Through a Diametrical Tunnel in Earth
* **Problem:** A frictionless tunnel is bored through the Earth along a diameter. A particle of mass $m$ is released from rest at the surface.
* **Analysis:**
  * Restoring force at radial distance $x$ from the center:
    $$F(x) = -m g(x) = -m \left( g \frac{x}{R_e} \right) = -\left(\frac{m g}{R_e}\right) x$$
  * Equation of motion:
    $$m \frac{d^2 x}{dt^2} + \left(\frac{m g}{R_e}\right) x = 0 \implies \omega = \sqrt{\frac{g}{R_e}}$$
  * Simple Harmonic Motion with period:
    $$T = 2\pi \sqrt{\frac{R_e}{g}} \approx 84.6 \text{ minutes}$$
  * Maximum velocity at the center:
    $$v_{\text{center}} = \omega R_e = \sqrt{\frac{g}{R_e}} R_e = \sqrt{g R_e} \approx 7.92 \text{ km/s}$$
  *(Remarkably, the oscillation period is identical for any chord tunnel through the Earth, regardless of its offset from the center).*


### Archetype 3: Gravitational Neutral Point Between Two Bodies
* **Problem:** Two bodies of masses $M_1$ and $M_2$ are separated by distance $D$. Find the position of zero gravitational field (neutral point $P$).
* **Solution:**
  $$\frac{G M_1}{x^2} = \frac{G M_2}{(D - x)^2} \implies \frac{\sqrt{M_1}}{x} = \frac{\sqrt{M_2}}{D - x}$$
  $$x = \frac{\sqrt{M_1}}{\sqrt{M_1} + \sqrt{M_2}} D$$
* **Gravitational Potential at Neutral Point:**
  $$V(P) = -\frac{G M_1}{x} - \frac{G M_2}{D - x} = -\frac{G}{D} \left( \sqrt{M_1} + \sqrt{M_2} \right)^2$$