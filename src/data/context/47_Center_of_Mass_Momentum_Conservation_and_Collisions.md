Physics Revision Context: Chapter 47 — Center of Mass, Momentum Conservation & Collisions


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Center of Mass/`, `Centre of Mass Theory.pdf`, `Centre_of_Mass.pdf`, and `2._Exercise_-1_to_3_English_DkzSNa2.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Physics Mechanics Core — Discrete & Continuous Center of Mass Systems ($\vec{r}_{\text{cm}} = \frac{1}{M}\sum m_i \vec{r}_i = \frac{1}{M}\int \vec{r} dm$, 2-Body Lever Rule $m_1 r_1 = m_2 r_2$, Center of Gravity vs. Center of Mass in Non-Uniform Fields), Canonical Continuous Body Coordinates (Semicircular Wire $y_{\text{cm}} = \frac{2R}{\pi}$, Semicircular Disc $y_{\text{cm}} = \frac{4R}{3\pi}$, Hemispherical Shell $y_{\text{cm}} = \frac{R}{2}$, Solid Hemisphere $y_{\text{cm}} = \frac{3R}{8}$, Hollow Cone $y_{\text{cm}} = \frac{H}{3}$, Solid Cone $y_{\text{cm}} = \frac{H}{4}$, Triangular Lamina Centroid, Circular Arc and Sector Integrals), The Negative Mass Superposition Method for Cavities (Disc with Offset Circular Hole $x_{\text{cm}} = -R/6$, Sphere with Spherical Cavity $x_{\text{cm}} = -R/14$), Center of Mass Kinematics & Newton's Second Law for Systems ($\vec{P}_{\text{sys}} = M\vec{v}_{\text{cm}}$, $\vec{F}_{\text{net, ext}} = M\vec{a}_{\text{cm}}$, Internal Force Annihilation $\sum \vec{F}_{\text{int}} = 0$, Projectile Explosion Path Invariance), Conservation of Linear Momentum & Relative Displacement Mechanics ($\Delta x_{\text{cm}} = 0$ for Zero External Horizontal Force, Man-Boat Problem $x_{\text{boat}} = \frac{m}{M+m}L$, Movable Wedges), The Center of Mass Frame (C-Frame / Zero-Momentum Frame $\sum m_i \vec{v}_i^* = 0$), Reduced Mass ($\mu = \frac{m_1 m_2}{m_1 + m_2}$), Coupled Spring-Mass Oscillations ($\omega = \sqrt{k/\mu}$, $T = 2\pi\sqrt{\mu/k}$) & Maximum Spring Compression ($x_{\max} = v_{\text{rel}, 0}\sqrt{\mu/k}$), König's Kinetic Energy Decomposition Theorem ($K_{\text{lab}} = \frac{1}{2}\mu v_{\text{rel}}^2 + \frac{1}{2}M v_{\text{cm}}^2$), Impulse-Momentum Theorem ($\vec{J} = \int \vec{F} dt = \Delta \vec{P}$), Line of Impact Mechanics, Coefficient of Restitution ($e = v_{\text{sep}}/u_{\text{app}}$), Head-On 1D Collisions, Universal Kinetic Energy Loss ($\Delta K = \frac{1}{2}\mu(1 - e^2)u_{\text{rel}}^2$), Rebounding from a Fixed Floor ($h_n = e^{2n}h_0$, $H_{\text{total}} = h_0 \frac{1+e^2}{1-e^2}$, $T_{\text{total}} = \sqrt{\frac{2h_0}{g}}\frac{1+e}{1-e}$), 2D Oblique Collisions & The $90^\circ$ Elastic Scattering Theorem, Variable Mass Mechanics (Generalized Newton-Euler Equation $m \frac{d\vec{v}}{dt} = \vec{F}_{\text{ext}} + \vec{v}_{\text{rel}}\frac{dm}{dt}$, Thrust Force $F_{\text{thrust}} = v_{\text{rel}}\frac{dm}{dt}$, Tsiolkovsky Rocket Equations in Free Space and Constant Gravity, Conveyor Belt Sand Deposition & 50% Power Dissipation), and Comprehensive High-Yield JEE Traps.


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fundamentals of Center of Mass (COM)


### 1.1 Definition & Coordinate Representation
The Center of Mass (COM) of a system of particles is a unique geometrical point where the entire mass of the system can be treated as concentrated for translational motion under external forces:
$$\mathbf{\vec{r}_{\text{cm}} = \frac{\sum_{i=1}^n m_i \vec{r}_i}{\sum_{i=1}^n m_i} = \frac{1}{M} \sum_{i=1}^n m_i \vec{r}_i}$$
* **Scalar Cartesian Coordinates:**
  $$\mathbf{x_{\text{cm}} = \frac{\sum m_i x_i}{M}, \quad y_{\text{cm}} = \frac{\sum m_i y_i}{M}, \quad z_{\text{cm}} = \frac{\sum m_i z_i}{M}}$$


---


### 1.2 Two-Particle System & The Inverse Lever Rule
Consider two particles of masses $m_1$ and $m_2$ separated by distance $d$:
* Choosing the origin at the center of mass:
  $$m_1 r_1 = m_2 r_2 \implies \mathbf{\frac{r_1}{r_2} = \frac{m_2}{m_1}}$$
* **Distances from Each Mass to COM:**
  $$\mathbf{r_1 = \left(\frac{m_2}{m_1 + m_2}\right) d, \quad r_2 = \left(\frac{m_1}{m_1 + m_2}\right) d}$$
  * The center of mass lies on the line joining the two particles and is **strictly closer to the heavier mass**.
  * If $m_1 = m_2$: $r_1 = r_2 = d/2$ (midpoint).
  * If $m_2 \gg m_1$: $r_1 \approx d, r_2 \approx 0$ (COM shifts inside $m_2$).


---


### 1.3 Center of Mass (COM) vs. Center of Gravity (COG)
* **Center of Mass (COM):** The centroid of the mass distribution, completely independent of the gravitational field:
  $$\vec{r}_{\text{cm}} = \frac{\int \vec{r} dm}{M}$$
* **Center of Gravity (COG):** The point at which the net torque due to gravitational forces on all particles vanishes:
  $$\vec{\tau}_{\text{net}} = \int (\vec{r} - \vec{r}_{\text{cog}}) \times \vec{g}(\vec{r}) dm = 0$$
* **Equivalence & Departure Criteria:**
  1. In a **uniform gravitational field** ($\vec{g} = \text{const}$):
     $$\int (\vec{r} - \vec{r}_{\text{cog}}) \times \vec{g} dm = \left( \int \vec{r} dm - \vec{r}_{\text{cog}} M \right) \times \vec{g} = 0 \implies \mathbf{\vec{r}_{\text{cog}} = \vec{r}_{\text{cm}}}$$
     COM and COG coincide identically!
  2. In a **non-uniform gravitational field** (e.g., an extremely tall mountain, space elevator, or skyscraper where $g(y) = g_0(1 - 2y/R_E)$):
     Lower sections experience greater gravitational acceleration than upper sections.
     Therefore, the **Center of Gravity lies SLIGHTLY BELOW the Center of Mass**!


---


## 2. Continuous Rigid Bodies & Standard COM Coordinates


### 2.1 General Integral Formulation
For a continuous mass distribution:
$$\mathbf{\vec{r}_{\text{cm}} = \frac{\int \vec{r} dm}{\int dm} = \frac{1}{M} \int \vec{r} dm}$$
* 1D Bodies (thin wires/rods): $dm = \lambda dl = \lambda dx$.
* 2D Bodies (thin plates/laminae/shells): $dm = \sigma dA$.
* 3D Bodies (solid volumes): $dm = \rho dV$.


---


### 2.2 Visual Preservation: Center of Mass Coordinates & Cavity Systems


![Center of Mass Coordinates Continuous Bodies and Cavities](/media/center_of_mass_coordinates_continuous_bodies_and_cavities.webp)
*Description: Two-panel foundational center of mass graphic: (A) Center of mass coordinates for discrete particle systems, two-body inverse lever rule, and canonical coordinates for standard continuous geometries (semicircular ring, semicircular disc, hemispherical shell, solid hemisphere, hollow cone, solid cone, and circular arc/sector); (B) The negative mass superposition method for bodies with cut-out cavities (circular disc with tangent hole, solid sphere with spherical cavity), highlighting dimensional scaling invariants ($L^1, R^2, R^3$).*


---


### 2.3 Master Table of Canonical Center of Mass Coordinates


| Body Geometry | Mass Distribution Type | Symmetry Axis | COM Distance from Base/Center |
| :---: | :---: | :---: | :---: |
| **Uniform Semicircular Wire (Ring)** | 1D ($\lambda = \text{const}$) | Bisecting radius ($y$-axis) | $\mathbf{y_{\text{cm}} = \frac{2R}{\pi} \approx 0.637 R}$ |
| **Uniform Semicircular Disc** | 2D ($\sigma = \text{const}$) | Bisecting radius ($y$-axis) | $\mathbf{y_{\text{cm}} = \frac{4R}{3\pi} \approx 0.424 R}$ |
| **Hemispherical Hollow Shell** | 2D ($\sigma = \text{const}$) | Axis of rotational symmetry | $\mathbf{y_{\text{cm}} = \frac{R}{2} = 0.500 R}$ |
| **Solid Hemisphere** | 3D ($\rho = \text{const}$) | Axis of rotational symmetry | $\mathbf{y_{\text{cm}} = \frac{3R}{8} = 0.375 R}$ |
| **Hollow Conical Shell (without base)** | 2D ($\sigma = \text{const}$) | Central vertical axis | $\mathbf{y_{\text{cm}} = \frac{H}{3} \quad (\text{from base})}$ |
| **Solid Cone** | 3D ($\rho = \text{const}$) | Central vertical axis | $\mathbf{y_{\text{cm}} = \frac{H}{4} \quad (\text{from base})}$ |
| **Triangular Lamina (Any triangle)** | 2D ($\sigma = \text{const}$) | Median intersection (Centroid) | $\mathbf{y_{\text{cm}} = \frac{H}{3} \quad (\text{from base})}$ |
| **Circular Wire Arc (Angle $2\alpha$)** | 1D ($\lambda = \text{const}$) | Angle bisector | $\mathbf{y_{\text{cm}} = \frac{R \sin\alpha}{\alpha}}$ |
| **Circular Disc Sector (Angle $2\alpha$)** | 2D ($\sigma = \text{const}$) | Angle bisector | $\mathbf{y_{\text{cm}} = \frac{2R \sin\alpha}{3\alpha}}$ |


* **Structural Hierarchy Insights:**
  * For both hemispheres and cones, **solid bodies have their COM closer to the base than hollow shells** ($\frac{3R}{8} < \frac{R}{2}$ and $\frac{H}{4} < \frac{H}{3}$) because 3D volumetric mass is concentrated toward the wider base!


---


## 3. The Negative Mass Theorem & Bodies with Cut-Out Cavities


### 3.1 Superposition Principle with Negative Mass
When a portion of mass is excavated or removed from a symmetric rigid body:
The remaining body is treated as a linear superposition of the **complete original body (mass $+M_{\text{orig}}$)** centered at $\vec{r}_{\text{orig}}$ and a **negative mass ($-m_{\text{cavity}}$)** occupying the excavated cavity centered at $\vec{r}_{\text{cavity}}$:
$$\mathbf{\vec{r}_{\text{rem}} = \frac{M_{\text{orig}}\vec{r}_{\text{orig}} - m_{\text{cavity}}\vec{r}_{\text{cavity}}}{M_{\text{orig}} - m_{\text{cavity}}}}$$


---


### 3.2 Canonical Cavity Case Studies


#### 1. Uniform Circular Disc with Tangent Circular Hole
A uniform disc of radius $R$ centered at origin $(0, 0)$ has a circular hole of radius $r = R/2$ cut out such that the hole touches the outer rim (center of hole at $x = +R/2, y = 0$):
* Areal mass density: $\sigma$.
* Original mass: $M = \sigma (\pi R^2)$.
* Cavity mass: $m = \sigma [\pi (R/2)^2] = \frac{1}{4} \sigma \pi R^2 = \frac{M}{4}$.
* Position of cavity center: $x_{\text{cavity}} = +R/2$.
* Applying the negative mass formula:
  $$x_{\text{cm}} = \frac{M(0) - (M/4)(R/2)}{M - M/4} = \frac{-M R / 8}{3M / 4} = -\frac{R}{8} \times \frac{4}{3} = \mathbf{-\frac{R}{6}}$$
  * The center of mass shifts along the diameter **away from the hole by $R/6$**!


#### 2. Solid Sphere with Tangent Spherical Cavity
A solid uniform sphere of radius $R$ centered at origin $(0, 0, 0)$ has a spherical cavity of radius $r = R/2$ excavated tangent to its surface (center of cavity at $x = +R/2$):
* Volumetric density: $\rho$.
* Original mass: $M = \rho [\frac{4}{3}\pi R^3]$.
* Cavity mass: $m = \rho [\frac{4}{3}\pi (R/2)^3] = \frac{1}{8} \rho [\frac{4}{3}\pi R^3] = \frac{M}{8}$.
* Remaining mass: $M_{\text{rem}} = M - M/8 = \frac{7M}{8}$.
* Applying negative mass:
  $$x_{\text{cm}} = \frac{M(0) - (M/8)(R/2)}{M - M/8} = \frac{-M R / 16}{7M / 8} = -\frac{R}{16} \times \frac{8}{7} = \mathbf{-\frac{R}{14}}$$
  * In 3D, the COM shifts away from the cavity by **$R/14$**!


---


## 4. Kinematics & Dynamics of Center of Mass


### 4.1 System Momentum & Newton's Second Law for Systems
Differentiating the center of mass position vector $\vec{r}_{\text{cm}} = \frac{1}{M}\sum m_i \vec{r}_i$ with respect to time:
1. **Center of Mass Velocity ($\vec{v}_{\text{cm}}$):**
   $$\mathbf{\vec{v}_{\text{cm}} = \frac{d\vec{r}_{\text{cm}}}{dt} = \frac{\sum m_i \vec{v}_i}{M} = \frac{\vec{P}_{\text{sys}}}{M}}$$
   $$\mathbf{\vec{P}_{\text{sys}} = \sum m_i \vec{v}_i = M \vec{v}_{\text{cm}}}$$
   The total linear momentum of any system of particles equals the **total mass multiplied by the velocity of the center of mass**!
2. **Center of Mass Acceleration ($\vec{a}_{\text{cm}}$):**
   Differentiating again:
   $$\vec{a}_{\text{cm}} = \frac{d\vec{v}_{\text{cm}}}{dt} = \frac{\sum m_i \vec{a}_i}{M} = \frac{\sum \vec{F}_i}{M}$$
   By Newton's Third Law, all internal interaction forces between particles occur in equal and opposite collinear action-reaction pairs:
   $$\sum \vec{F}_{\text{internal}} = 0 \implies \sum \vec{F}_i = \sum \vec{F}_{\text{external}}$$
   $$\mathbf{\vec{F}_{\text{net, ext}} = M \vec{a}_{\text{cm}} = \frac{d\vec{P}_{\text{sys}}}{dt}}$$
   * **The Center of Mass moves as if all the mass of the system were concentrated at that point, and all external forces were applied directly to it!**


---


### 4.2 Visual Preservation: Momentum Conservation, Internal Motion, & C-Frame


![Momentum Conservation Internal Motion and C Frame](/media/momentum_conservation_internal_motion_and_c_frame.webp)
*Description: Two-panel system momentum and center of mass frame graphic: (A) System momentum conservation, center of mass equations of motion, explosion invariance where a projectile's COM trajectory remains an unbroken parabola under gravity, alongside relative displacement mechanics for man-on-boat ($x_b = \frac{m}{M+m}L$) and sliding wedge systems; (B) The Center of Mass Frame (C-Frame / Zero-Momentum Frame) showing the reduced mass oscillator ($\mu = \frac{m_1 m_2}{m_1 + m_2}$, $T = 2\pi\sqrt{\mu/k}$), maximum spring compression conditions ($v_{\text{rel}} = 0$), and König's kinetic energy decomposition theorem.*


---


### 4.3 Invariance of Projectile Explosion Trajectory
A projectile of mass $M$ launched with velocity $u$ at angle $\theta$ explodes mid-flight into $k$ fragments:
* The explosion is caused **strictly by internal chemical forces** ($\sum \vec{F}_{\text{internal}} = 0$).
* The only external force acting on the system is gravity:
  $$\vec{F}_{\text{net, ext}} = M \vec{g} \implies \vec{a}_{\text{cm}} = \vec{g} \quad (\text{vertically downward})$$
* **Fundamental Trajectory Theorem:**
  The center of mass of the fragments **CONTINUES ALONG THE EXACT SAME UNBROKEN PARABOLIC TRAJECTORY** as if no explosion had ever occurred, until the very first fragment strikes the ground!


---


## 5. Conservation of Linear Momentum & Relative Displacements


### 5.1 Conservation of Linear Momentum
If the net external force acting on a system is zero:
$$\mathbf{\vec{F}_{\text{net, ext}} = 0 \implies \vec{P}_{\text{sys}} = \text{Constant} \iff \vec{v}_{\text{cm}} = \text{Constant}}$$
* **Directional Conservation:**
  Even if external forces act along one direction (e.g., gravity along $y$), if $F_{\text{ext}, x} = 0$, **momentum along the $x$-axis is strictly conserved**:
  $$P_{x, \text{sys}} = \text{Constant}, \quad v_{\text{cm}, x} = \text{Constant}$$


---


### 5.2 Zero External Force from Rest ($\Delta x_{\text{cm}} = 0$)
If a system is initially at rest ($\vec{v}_{\text{cm}}(0) = 0$) and no external force acts along a given axis:
$$\vec{v}_{\text{cm}}(t) = 0 \implies \mathbf{\Delta \vec{r}_{\text{cm}} = 0 \iff \sum m_i \Delta \vec{r}_i = 0}$$


#### 1. Man Walking on a Floating Boat in Still Water
A man of mass $m$ stands at one end of a boat of mass $M$ and length $L$ floating in stationary water (zero horizontal water drag):
* The man walks a distance $L$ relative to the boat to reach the opposite end.
* Let the boat shift backward by distance $x_b$ relative to the shore/water:
  * Displacement of boat relative to water: $\Delta x_{\text{boat}} = -x_b$.
  * Displacement of man relative to water: $\Delta x_{\text{man}} = L - x_b$.
* Applying $\Delta x_{\text{cm}} = 0$:
  $$m(L - x_b) + M(-x_b) = 0 \implies m L - (M + m)x_b = 0$$
  $$\mathbf{x_{\text{boat}} = \left(\frac{m}{M + m}\right) L}$$
  $$\mathbf{\Delta x_{\text{man, ground}} = L - x_{\text{boat}} = \left(\frac{M}{M + m}\right) L}$$


#### 2. Block Sliding Down a Frictionless Movable Wedge
A block of mass $m$ slides down the inclined face of a wedge of mass $M$ resting on a smooth horizontal floor.
When the block advances horizontal distance $d$ relative to the wedge:
* Horizontal displacement of wedge on floor:
  $$\mathbf{\Delta x_{\text{wedge}} = \left(\frac{m}{M + m}\right) d}$$


---


## 6. The Center of Mass Frame (C-Frame) & König's Theorem


### 6.1 Properties of the Center of Mass Reference Frame
The Center of Mass Frame (also called the **C-Frame** or **Zero-Momentum Frame**) is a reference frame whose origin is translated at velocity $\vec{v}_{\text{cm}}$:
$$\vec{v}_i^* = \vec{v}_i - \vec{v}_{\text{cm}}$$
* **The Total Linear Momentum in the C-Frame is IDENTICALLY ZERO:**
  $$\mathbf{\vec{P}_{\text{sys}}^* = \sum m_i \vec{v}_i^* = \sum m_i (\vec{v}_i - \vec{v}_{\text{cm}}) = \sum m_i \vec{v}_i - M \vec{v}_{\text{cm}} = 0}$$
* For a 2-body system in the C-Frame:
  $$\mathbf{\vec{p}_1^* = -\vec{p}_2^*}$$
  The two particles always move in **diametrically opposite directions with equal and opposite momenta**!


---


### 6.2 The Reduced Mass ($\mu$) & Coupled Oscillations
For any isolated two-body system interacting via central or spring forces:
$$\mathbf{\mu = \frac{m_1 m_2}{m_1 + m_2}}$$
* **Two Blocks Connected by a Spring on a Smooth Plane:**
  Two masses $m_1$ and $m_2$ connected by a spring of stiffness $k$ are pulled apart and released:
  * The equation of relative motion simplifies to a single equivalent one-body oscillator:
    $$\mathbf{\mu \frac{d^2 x_{\text{rel}}}{dt^2} = -k x_{\text{rel}}}$$
  * **Natural Angular Frequency & Period:**
    $$\mathbf{\omega = \sqrt{\frac{k}{\mu}} = \sqrt{\frac{k(m_1 + m_2)}{m_1 m_2}}, \quad T = 2\pi\sqrt{\frac{\mu}{k}}}$$
* **Maximum Spring Deformation ($x_{\max}$):**
  If block $m_1$ is projected with speed $v_0$ toward stationary block $m_2$ ($u_2 = 0$):
  Maximum compression occurs when relative velocity is zero ($v_{\text{rel}} = 0 \iff v_1 = v_2 = v_{\text{cm}}$).
  At this instant, all internal kinetic energy in the C-Frame is stored as elastic spring potential energy:
  $$\frac{1}{2} k x_{\max}^2 = \frac{1}{2} \mu v_{\text{rel}, 0}^2 = \frac{1}{2} \mu v_0^2$$
  $$\mathbf{x_{\max} = v_0 \sqrt{\frac{\mu}{k}} = v_0 \sqrt{\frac{m_1 m_2}{k(m_1 + m_2)}}}$$


---


### 6.3 König's Theorem for Kinetic Energy
The total kinetic energy of a multi-particle system in the laboratory frame can be decomposed into two mutually orthogonal components:
$$\mathbf{K_{\text{lab}} = K_{\text{cm}} + K_{\text{rel, cm}} = \frac{1}{2} M v_{\text{cm}}^2 + \frac{1}{2} \sum m_i (v_i^*)^2}$$
For a two-body system:
$$\mathbf{K_{\text{lab}} = \frac{1}{2} M v_{\text{cm}}^2 + \frac{1}{2} \mu v_{\text{rel}}^2}$$
* **Physical Significance:**
  1. **$\frac{1}{2} M v_{\text{cm}}^2$ (Translational Energy):** Governed exclusively by external forces. If $\vec{F}_{\text{ext}} = 0$, this component is **STRICTLY FROZEN AND UNTOUCHABLE**!
  2. **$\frac{1}{2} \mu v_{\text{rel}}^2$ (Internal Kinetic Energy):** The only energy available for deformation, heat generation, or inelastic loss during a collision!


---


## 7. Impulse & Collision Dynamics


### 7.1 Impulse-Momentum Theorem
The impulse $\vec{J}$ of a force $\vec{F}$ acting over a time interval $[t_1, t_2]$:
$$\mathbf{\vec{J} = \int_{t_1}^{t_2} \vec{F} dt = \Delta \vec{P} = \vec{P}_f - \vec{P}_i}$$
* **Impulsive Forces:** Forces of very large magnitude acting over an infinitesimally short duration $\Delta t \to 0$ producing finite momentum change (e.g., normal collision contact force, explosive thrust, jerk in an inextensible taut string).
* **Non-Impulsive Forces:** Finite forces acting over $\Delta t \to 0$ whose impulse is negligible: $\int \vec{F} dt \to 0$ (e.g., gravity $mg$, spring force $kx$, friction during normal collision).


---


### 7.2 Visual Preservation: Collision Dynamics, Restitution, & Variable Mass


![Collision Dynamics Restitution and Variable Mass Systems](/media/collision_dynamics_restitution_and_variable_mass_systems.webp)
*Description: Two-panel collision and rocket dynamics graphic: (A) Collision dynamics detailing the Line of Impact (LOI), Newton's coefficient of restitution ($e = v_{\text{sep}}/u_{\text{app}}$), head-on collision post-collision velocities, the universal kinetic energy loss formula ($\Delta K = \frac{1}{2}\mu(1 - e^2)u_{\text{rel}}^2$), fixed floor bouncing series, and the 2D $90^\circ$ elastic scattering theorem; (B) Variable mass mechanics showing the generalized Newton-Euler momentum equation, thrust force ($F_{\text{thrust}} = v_{\text{rel}}\frac{dm}{dt}$), Tsiolkovsky's rocket propulsion law in vertical gravity, and conveyor belt sand deposition with the 50% power dissipation theorem.*


---


### 7.3 Line of Impact & Coefficient of Restitution ($e$)
* **Line of Impact (LOI):** The common normal to the colliding surfaces at the point of contact.
  * All impulsive normal contact forces act **exclusively along the Line of Impact**.
  * Tangential to the contact plane, impulsive normal force is zero.
* **Newton's Experimental Law of Restitution:**
  $$\mathbf{e = \frac{\text{Velocity of Separation along Line of Impact}}{\text{Velocity of Approach along Line of Impact}} = \frac{v_{2\parallel} - v_{1\parallel}}{u_{1\parallel} - u_{2\parallel}}}$$
  * **$e = 1$ (Perfectbly Elastic Collision):** No loss of kinetic energy ($\Delta K = 0$).
  * **$0 < e < 1$ (Inelastic Collision):** Partial loss of mechanical kinetic energy into heat/sound/deformation.
  * **$e = 0$ (Perfectbly Inelastic Collision):** Colliding bodies stick together or move with identical velocity along LOI ($v_{2\parallel} = v_{1\parallel}$); maximum possible kinetic energy is lost.
  * **$e > 1$ (Super-Elastic Collision):** Stored chemical or nuclear energy is released during impact (e.g., exploding contact).


---


### 7.4 Master Formulas for 1D Head-On Collisions
For two masses $m_1$ and $m_2$ colliding head-on with initial velocities $u_1$ and $u_2$:
$$\mathbf{v_1 = \left(\frac{m_1 - e m_2}{m_1 + m_2}\right) u_1 + \frac{(1 + e) m_2}{m_1 + m_2} u_2}$$
$$\mathbf{v_2 = \frac{(1 + e) m_1}{m_1 + m_2} u_1 + \left(\frac{m_2 - e m_1}{m_1 + m_2}\right) u_2}$$


* **Canonical Special Cases:**
  1. **Equal Masses ($m_1 = m_2 = m$) & Elastic Collision ($e = 1$):**
     $$v_1 = u_2, \quad v_2 = u_1$$
     **The two colliding bodies completely exchange their velocities!**
  2. **Equal Masses & Inelastic Collision ($m_1 = m_2, 0 < e < 1$):**
     $$v_1 = \left(\frac{1 - e}{2}\right)u_1 + \left(\frac{1 + e}{2}\right)u_2$$
     $$v_2 = \left(\frac{1 + e}{2}\right)u_1 + \left(\frac{1 - e}{2}\right)u_2$$
  3. **Collision with Massive Stationary Target ($m_2 \gg m_1, u_2 = 0$):**
     $$v_1 \approx -e u_1, \quad v_2 \approx 0$$
     The lighter particle rebounds with speed $e u_1$.
  4. **Massive Striker on Light Stationary Target ($m_1 \gg m_2, u_2 = 0$):**
     $$v_1 \approx u_1, \quad v_2 \approx (1 + e) u_1$$
     If elastic ($e = 1$), the light target flies off at **TWICE the projectile speed ($v_2 = 2u_1$)**!


---


### 7.5 Universal Kinetic Energy Loss Formula
The loss in kinetic energy $\Delta K = K_{\text{initial}} - K_{\text{final}}$ during any 1D or oblique collision is **completely invariant under reference frame transformations**:
From König's theorem, translational energy $\frac{1}{2}M v_{\text{cm}}^2$ is conserved:
$$\Delta K = \Delta K_{\text{internal}} = \frac{1}{2}\mu u_{\text{rel}}^2 - \frac{1}{2}\mu v_{\text{rel}}^2$$
Since $v_{\text{rel}} = e \cdot u_{\text{rel}}$:
$$\mathbf{\Delta K = \frac{1}{2} \mu (1 - e^2) u_{\text{rel}}^2 = \frac{1}{2}\left(\frac{m_1 m_2}{m_1 + m_2}\right)(1 - e^2)(u_1 - u_2)^2}$$
* **Maximum Energy Loss (Perfectbly Inelastic: $e = 0$):**
  $$\mathbf{\Delta K_{\max} = \frac{1}{2} \mu u_{\text{rel}}^2 = \frac{1}{2}\left(\frac{m_1 m_2}{m_1 + m_2}\right)(u_1 - u_2)^2}$$


---


### 7.6 Bouncing of a Ball on a Fixed Floor
A ball is dropped from initial height $h_0$ onto a stationary, infinitely rigid horizontal floor with coefficient of restitution $e$:
* Striking speed: $u_0 = \sqrt{2gh_0}$.
* First rebound speed: $v_1 = e u_0 = e \sqrt{2gh_0}$.
* Rebound height after 1st bounce: $h_1 = \frac{v_1^2}{2g} = e^2 h_0$.
* **After $n$ Bounces:**
  $$\mathbf{v_n = e^n \sqrt{2gh_0}, \quad h_n = e^{2n} h_0}$$
* **Total Distance Traveled before Coming to Rest:**
  $$H_{\text{total}} = h_0 + 2h_1 + 2h_2 + 2h_3 + \dots = h_0 + 2h_0 (e^2 + e^4 + e^6 + \dots)$$
  Using infinite geometric series $\sum_{k=1}^\infty (e^2)^k = \frac{e^2}{1 - e^2}$:
  $$\mathbf{H_{\text{total}} = h_0 \left(1 + \frac{2e^2}{1 - e^2}\right) = h_0 \left(\frac{1 + e^2}{1 - e^2}\right)}$$
* **Total Time Elapsed before Coming to Rest:**
  $$T_{\text{total}} = t_0 + 2t_1 + 2t_2 + \dots = \sqrt{\frac{2h_0}{g}} + 2\sqrt{\frac{2h_0}{g}}(e + e^2 + e^3 + \dots)$$
  $$\mathbf{T_{\text{total}} = \sqrt{\frac{2h_0}{g}} \left(1 + \frac{2e}{1 - e}\right) = \sqrt{\frac{2h_0}{g}} \left(\frac{1 + e}{1 - e}\right)}$$


---


### 7.7 Oblique (2D) Collisions & The $90^\circ$ Scattering Theorem
In a two-dimensional collision between two smooth spherical bodies:
1. **Along the Tangent Line (Perpendicular to Line of Impact):**
   No impulsive force acts in the tangential direction:
   $$\mathbf{v_{1t} = u_{1t}, \quad v_{2t} = u_{2t}}$$
2. **Along the Line of Impact (Normal Direction):**
   Linear momentum is conserved, and Newton's restitution applies:
   $$m_1 u_{1n} + m_2 u_{2n} = m_1 v_{1n} + m_2 v_{2n}$$
   $$v_{2n} - v_{1n} = e (u_{1n} - u_{2n})$$
* **The $90^\circ$ Elastic Scattering Theorem:**
  When a sphere of mass $m$ strikes an identical stationary sphere ($m_1 = m_2 = m, u_2 = 0$) **elastically ($e = 1$)** in an oblique collision:
  * Momentum conservation: $\vec{u}_1 = \vec{v}_1 + \vec{v}_2 \implies u_1^2 = v_1^2 + v_2^2 + 2(\vec{v}_1 \cdot \vec{v}_2)$.
  * Kinetic energy conservation: $\frac{1}{2}m u_1^2 = \frac{1}{2}m v_1^2 + \frac{1}{2}m v_2^2 \implies u_1^2 = v_1^2 + v_2^2$.
  * Comparing equations:
    $$2(\vec{v}_1 \cdot \vec{v}_2) = 0 \implies \mathbf{\vec{v}_1 \perp \vec{v}_2 \iff \theta_1 + \theta_2 = 90^\circ}$$
  * **The two particles fly off at exactly RIGHT ANGLES ($90^\circ$) to each other!**


---


## 8. Variable Mass Systems & Rocket Propulsion


### 8.1 The Generalized Newton-Euler Variable Mass Equation
Consider a body of instantaneous mass $m$ moving with velocity $\vec{v}$ that is ejecting or absorbing mass at rate $\frac{dm}{dt}$.
Let the incoming or escaping mass have velocity $\vec{u}$ in the laboratory frame:
* The relative velocity of the ejected mass with respect to the body is:
  $$\vec{v}_{\text{rel}} = \vec{u} - \vec{v}$$
* Writing impulse-momentum balance over time $dt$:
  $$(m + dm)(\vec{v} + d\vec{v}) + (-dm)\vec{u} - m\vec{v} = \vec{F}_{\text{ext}} dt$$
  $$m d\vec{v} + \vec{v} dm - \vec{u} dm = \vec{F}_{\text{ext}} dt \implies m d\vec{v} - (\vec{u} - \vec{v}) dm = \vec{F}_{\text{ext}} dt$$
  $$\mathbf{m \frac{d\vec{v}}{dt} = \vec{F}_{\text{ext}} + \vec{v}_{\text{rel}} \frac{dm}{dt}}$$
* **Thrust Force ($\vec{F}_{\text{thrust}}$):**
  $$\mathbf{\vec{F}_{\text{thrust}} = \vec{v}_{\text{rel}} \frac{dm}{dt}}$$


---


### 8.2 Tsiolkovsky Rocket Propulsion Dynamics
In a rocket, combustion gases are expelled backward at constant exhaust speed $u_{\text{ex}} = |\vec{v}_{\text{rel}}|$ relative to the rocket:
* $\vec{v}_{\text{rel}} = -u_{\text{ex}} \hat{j}$ and mass is decreasing ($\frac{dm}{dt} < 0$):
  $$\vec{F}_{\text{thrust}} = (-u_{\text{ex}} \hat{j})\left(\frac{dm}{dt}\right) = + u_{\text{ex}} \left(-\frac{dm}{dt}\right) \hat{j}$$
  The thrust force pushes the rocket **forward**!
* **1. Rocket in Gravity-Free Space ($\vec{F}_{\text{ext}} = 0$):**
  $$m \frac{dv}{dt} = -u_{\text{ex}} \frac{dm}{dt} \implies dv = -u_{\text{ex}} \frac{dm}{m}$$
  Integrating from $t = 0$ ($m = m_0, v = v_0$) to $t$ (mass $m$, velocity $v$):
  $$\mathbf{v(t) = v_0 + u_{\text{ex}} \ln\left(\frac{m_0}{m}\right)}$$
* **2. Rocket in a Uniform Gravitational Field ($F_{\text{ext}} = -mg$):**
  $$m \frac{dv}{dt} = -mg - u_{\text{ex}} \frac{dm}{dt} \implies dv = -g dt - u_{\text{ex}} \frac{dm}{m}$$
  $$\mathbf{v(t) = v_0 - g t + u_{\text{ex}} \ln\left(\frac{m_0}{m}\right)}$$
* **Minimum Burn Rate for Vertical Lift-Off:**
  At $t = 0$, to lift off from the launch pad ($a \ge 0$):
  $$F_{\text{thrust}} \ge m_0 g \implies u_{\text{ex}} \left(-\frac{dm}{dt}\right)_{\min} = m_0 g \implies \mathbf{\left(-\frac{dm}{dt}\right)_{\min} = \frac{m_0 g}{u_{\text{ex}}}}$$


---


### 8.3 Moving Conveyor Belt & The 50% Power Dissipation Theorem
Sand is dropped vertically from a hopper at rate $\frac{dm}{dt}$ onto a horizontal conveyor belt moving at constant speed $v$:
* Initial horizontal velocity of sand: $u_x = 0$.
* Velocity of sand relative to belt: $v_{\text{rel}} = 0 - v = -v$.
* Retarding force exerted on belt by incoming sand:
  $$F_{\text{resist}} = v_{\text{rel}} \frac{dm}{dt} = -v \frac{dm}{dt}$$
* **Driving Force Required by Motor to Maintain Constant Speed $v$:**
  $$\mathbf{F_{\text{motor}} = v \frac{dm}{dt}}$$
* **Power Delivered by the Motor:**
  $$\mathbf{P_{\text{motor}} = F_{\text{motor}} \cdot v = v^2 \frac{dm}{dt}}$$
* **Rate of Increase of Kinetic Energy of the Deposited Sand:**
  $$\frac{dK}{dt} = \frac{d}{dt}\left(\frac{1}{2} m v^2\right) = \frac{1}{2} v^2 \frac{dm}{dt} = \mathbf{\frac{1}{2} P_{\text{motor}}}$$
  * **CRITICAL ENERGY BALANCE:** Exactly **$50\%$ of the motor's power is converted into kinetic energy of the moving sand**; the remaining **$50\%$ is dissipated as friction heat** while the sand slips before matching belt speed!


---


## 9. Master Formula Sheet & High-Yield Diagnostic Traps


### 9.1 Master Center of Mass & Collisions Formula Table


| Physical Quantity / Phenomenon | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Discrete COM Vector** | $\vec{r}_{\text{cm}} = \frac{1}{M}\sum m_i \vec{r}_i$ | Independent of coordinate origin |
| **2-Body Lever Rule** | $m_1 r_1 = m_2 r_2 \implies r_1 = \frac{m_2}{M}d$ | COM closer to heavier mass |
| **Semicircular Ring COM** | $y_{\text{cm}} = \frac{2R}{\pi}$ | From center along radius |
| **Semicircular Disc COM** | $y_{\text{cm}} = \frac{4R}{3\pi}$ | From center along radius |
| **Hemispherical Shell COM** | $y_{\text{cm}} = \frac{R}{2}$ | From center along symmetry axis |
| **Solid Hemisphere COM** | $y_{\text{cm}} = \frac{3R}{8}$ | Closer to base than hollow shell |
| **Solid Cone COM** | $y_{\text{cm}} = \frac{H}{4}$ | From circular base along height |
| **Negative Mass Superposition** | $\vec{r}_{\text{rem}} = \frac{M\vec{r}_0 - m\vec{r}_c}{M - m}$ | Disc hole: $-R/6$; Sphere hole: $-R/14$ |
| **System Second Law** | $\vec{F}_{\text{net, ext}} = M \vec{a}_{\text{cm}} = \frac{d\vec{P}_{\text{sys}}}{dt}$ | Internal forces cancel: $\sum \vec{F}_{\text{int}} = 0$ |
| **Relative Shift Invariant** | $m_1 \Delta x_1 + m_2 \Delta x_2 = 0$ | Man on boat: $x_b = \frac{m}{M+m}L$ |
| **Reduced Mass** | $\mu = \frac{m_1 m_2}{m_1 + m_2}$ | Two-body spring frequency: $\omega = \sqrt{k/\mu}$ |
| **Max Spring Compression** | $x_{\max} = v_{\text{rel}, 0}\sqrt{\frac{\mu}{k}}$ | Occurs when relative velocity $v_{\text{rel}} = 0$ |
| **König's Kinetic Energy** | $K_{\text{lab}} = \frac{1}{2}\mu v_{\text{rel}}^2 + \frac{1}{2}M v_{\text{cm}}^2$ | Separates internal vs translational KE |
| **Restitution Definition** | $e = \frac{v_{2\parallel} - v_{1\parallel}}{u_{1\parallel} - u_{2\parallel}}$ | Along Line of Impact (LOI) only |
| **Universal Collision KE Loss** | $\Delta K = \frac{1}{2}\mu (1 - e^2) u_{\text{rel}}^2$ | Max loss for perfectly inelastic ($e = 0$) |
| **Floor Bouncing Series** | $H_{\text{total}} = h_0 \frac{1+e^2}{1-e^2}, \ T_{\text{total}} = \sqrt{\frac{2h_0}{g}}\frac{1+e}{1-e}$ | Geometric progression summation |
| **2D Elastic Scattering** | $\theta_1 + \theta_2 = 90^\circ$ | Identical masses elastically ($m_1=m_2, e=1$) |
| **Variable Mass Equation** | $m \frac{d\vec{v}}{dt} = \vec{F}_{\text{ext}} + \vec{v}_{\text{rel}}\frac{dm}{dt}$ | Thrust force $F_{\text{thrust}} = v_{\text{rel}}\frac{dm}{dt}$ |
| **Tsiolkovsky Rocket Law** | $v(t) = v_0 - gt + u_{\text{ex}}\ln\left(\frac{m_0}{m}\right)$ | Lift-off condition: $(-dm/dt) \ge m_0 g / u_{\text{ex}}$ |
| **Conveyor Belt Dissipation** | $P_{\text{motor}} = v^2 \frac{dm}{dt} = 2 \frac{dK}{dt}$ | Exactly 50% power dissipated as friction heat |


---


### 9.2 High-Yield Exam Traps & Common Conceptual Errors


#### Trap 1: Internal Explosions and Center of Mass Velocity
* A shell is moving in a parabolic trajectory under gravity and suddenly bursts into multiple fragments:
  * **Trap:** Believing the explosion velocity of fragments shifts the center of mass.
  * **Reality:** The chemical explosion involves **strictly internal forces**. As long as all fragments are in free flight under gravity, $\vec{a}_{\text{cm}} = \vec{g}$.
  * The center of mass continues along the **exact same original parabolic trajectory**!


#### Trap 2: Conservation of Momentum in the Presence of External Impulses
* When a bullet strikes a wooden block pivoted at a fixed hinge:
  * **Trap:** Conserving linear momentum of the bullet-block system.
  * **Reality:** The fixed hinge exerts an **enormous external impulsive reaction force** $\vec{J}_{\text{hinge}}$ during impact!
  * Linear momentum is **NOT conserved**.
  * Angular momentum about the pivot hinge **IS conserved** because hinge forces exert zero torque about the pivot axis ($\vec{\tau}_{\text{hinge}} = 0$)!


#### Trap 3: Oblique Collisions and Line of Impact Resolution
* In 2D collisions, students often erroneously apply the restitution equation to the total speeds: $e \ne \frac{v_2 - v_1}{u_1 - u_2}$.
* **Newton's Restitution Law applies EXCLUSIVELY along the Line of Impact (Common Normal)**!
* Tangential components of velocity are completely unaffected by a smooth collision:
  $$v_{1t} = u_{1t}, \quad v_{2t} = u_{2t}$$


#### Trap 4: Work-Energy vs. Momentum in Ballistic Pendulums
* A bullet of mass $m$ travelling horizontally at speed $v$ embeds into a pendulum bob of mass $M$ hanging from a string of length $L$:
  * **Phase 1 (Collision):** Strongly inelastic impact ($e = 0$). Mechanical energy is **NOT conserved** (massive heat loss). Momentum **IS conserved** along horizontal:
    $$m v = (M + m) V \implies V = \frac{m}{M + m} v$$
  * **Phase 2 (Subsequent Swing):** Once embedded, the system swings upward under gravity. Mechanical energy **IS conserved** during the swing:
    $$\frac{1}{2}(M + m)V^2 = (M + m)g h \implies h = \frac{V^2}{2g} = \frac{m^2 v^2}{2g(M + m)^2}$$