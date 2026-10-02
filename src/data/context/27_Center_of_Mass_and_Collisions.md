# Physics Revision Context: Chapter 27 — Center of Mass, Momentum Conservation, and Collisions

---


### 1.1 Definition & Center of Gravity Distinction
- **Center of Mass (COM):** The unique spatial point characteristic of a system of particles (or rigid body) that moves as if the total mass $M = \sum m_i$ were concentrated there and all external forces were applied directly to it.
- **COM vs. Center of Gravity (COG):**
  - **Center of Mass:** Mass-weighted mean position of a body: $\vec{r}_{\text{cm}} = \frac{\int \vec{r}\,dm}{\int dm}$. It depends solely on mass distribution and geometric shape, independent of external fields.
  - **Center of Gravity:** The point where the resultant gravitational torque vanishes, i.e., where the net gravitational force acts: $\vec{r}_{\text{cg}} = \frac{\int \vec{r}\,g(\vec{r})\,dm}{\int g(\vec{r})\,dm}$.
  - *Equivalence Condition:* $\vec{r}_{\text{cm}} \equiv \vec{r}_{\text{cg}}$ strictly holds **only in a uniform gravitational field** ($\vec{g} = \text{constant}$). For mountain ranges or celestial satellites in non-uniform gravitational fields ($\vec{g} \propto 1/r^2$), COG lies lower than COM, generating gravitational tidal torque.

### 1.2 Discrete Multi-Particle Systems
- For a system of $N$ discrete particles of masses $m_1, m_2, \dots, m_N$ located at position vectors $\vec{r}_1, \vec{r}_2, \dots, \vec{r}_N$:
  $$\vec{r}_{\text{cm}} = \frac{\sum_{i=1}^N m_i \vec{r}_i}{\sum_{i=1}^N m_i} = \frac{1}{M}\sum_{i=1}^N m_i \vec{r}_i$$
- In Cartesian coordinates:
  $$x_{\text{cm}} = \frac{\sum m_i x_i}{M}, \quad y_{\text{cm}} = \frac{\sum m_i y_i}{M}, \quad z_{\text{cm}} = \frac{\sum m_i z_i}{M}$$

### 1.3 Two-Particle Invariant Formulation
- Consider two point masses $m_1$ and $m_2$ separated by distance $d$. Choosing $m_1$ as the origin:
  $$r_1 = x_{\text{cm}} = \frac{m_1(0) + m_2(d)}{m_1 + m_2} = \left(\frac{m_2}{m_1 + m_2}\right) d$$
  $$r_2 = d - x_{\text{cm}} = \left(\frac{m_1}{m_1 + m_2}\right) d$$
- **Fundamental Lever Rule:**
  $$m_1 r_1 = m_2 r_2 \implies \frac{r_1}{r_2} = \frac{m_2}{m_1}$$
  The center of mass divides the line segment joining the two masses internally in the **inverse ratio of their masses** (always located closer to the heavier body).

---


### 2.1 Integral Definition & Mass Elements
For continuous media, summation is replaced by integration over elemental mass $dm$:
$$\vec{r}_{\text{cm}} = \frac{\int \vec{r}\,dm}{\int dm} = \frac{1}{M}\int \vec{r}\,dm$$
- 1D Linear Bodies: $dm = \lambda(x)\,dx$ (where $\lambda = \frac{dM}{dx}$ is linear mass density).
- 2D Planar Laminas: $dm = \sigma(x, y)\,dA$ (where $\sigma = \frac{dM}{dA}$ is surface mass density).
- 3D Solid Bodies: $dm = \rho(x, y, z)\,dV$ (where $\rho = \frac{dM}{dV}$ is volume mass density).

### 2.2 Standard Continuous Geometries & Invariant Locations

| Geometry / Body Type | Mass Density Nature | Symmetry Axis & Element Type | Center of Mass Location ($y_{\text{cm}}$ from Base/Center) |
| :--- | :--- | :--- | :--- |
| **Uniform Straight Rod** | Linear $\lambda$ | Length $L$, origin at one end | $x_{\text{cm}} = \frac{L}{2}$ |
| **Non-Uniform Rod ($\lambda = a + bx$)** | Linear $\lambda(x)$ | Length $L$, origin at $x = 0$ | $x_{\text{cm}} = \frac{L(3a + 2bL)}{3(2a + bL)}$ |
| **Circular Arc (Subtending $2\alpha$)** | Linear $\lambda$ | Symmetric about $y$-axis, radius $R$ | $y_{\text{cm}} = \frac{R \sin\alpha}{\alpha}$ |
| **Semicircular Ring ($2\alpha = \pi$)** | Linear $\lambda$ | Base on diameter, radius $R$ | $y_{\text{cm}} = \frac{2R}{\pi} \approx 0.637 R$ |
| **Semicircular Disc** | Surface $\sigma$ | Concentric semicircular ring elements | $y_{\text{cm}} = \frac{4R}{3\pi} \approx 0.424 R$ |
| **Hemispherical Shell (Hollow)** | Surface $\sigma$ | Circular ring elements, radius $R$ | $y_{\text{cm}} = \frac{R}{2} = 0.500 R$ |
| **Solid Hemisphere** | Volume $\rho$ | Flat circular disc elements, radius $R$ | $y_{\text{cm}} = \frac{3R}{8} = 0.375 R$ |
| **Hollow Cone (Open Base)** | Surface $\sigma$ | Circular ring elements, height $h$ | $y_{\text{cm}} = \frac{h}{3}\text{ from base} = \frac{2h}{3}\text{ from apex}$ |
| **Solid Cone** | Volume $\rho$ | Flat circular disc elements, height $h$ | $y_{\text{cm}} = \frac{h}{4}\text{ from base} = \frac{3h}{4}\text{ from apex}$ |
| **Triangular Lamina (Plate)** | Surface $\sigma$ | Thin rectangular strips parallel to base | $y_{\text{cm}} = \frac{h}{3}\text{ from base (Centroid)}$ |

### 2.3 Derivation of Circular Arc & Semicircular Ring
- Consider a uniform circular wire of radius $R$ subtending total angle $2\alpha$ symmetric about the $y$-axis ($-\alpha \le \theta \le +\alpha$).
- Elemental mass at angle $\theta$ subtending $d\theta$:
  $$dm = \lambda R\,d\theta, \quad y = R \cos\theta$$
  $$y_{\text{cm}} = \frac{\int_{-\alpha}^{+\alpha} (R\cos\theta)(\lambda R\,d\theta)}{\int_{-\alpha}^{+\alpha} \lambda R\,d\theta} = \frac{\lambda R^2 [\sin\theta]_{-\alpha}^{+\alpha}}{\lambda R [\theta]_{-\alpha}^{+\alpha}} = \frac{\lambda R^2 (2\sin\alpha)}{\lambda R (2\alpha)} = \frac{R \sin\alpha}{\alpha}$$
- For a **semicircular ring** ($\alpha = \pi/2$, subtending $2\alpha = \pi$):
  $$y_{\text{cm}} = \frac{R \sin(\pi/2)}{\pi/2} = \frac{2R}{\pi}$$

---


### 3.1 Superposition Principle for Cut / Cavity Bodies
- When a portion of a uniform body is removed, the remaining body can be analyzed by treating the original complete body as having positive mass ($+M_1$) and the removed cavity as having negative mass ($-m_2$):
  $$\vec{r}_{\text{cm}} = \frac{M_1 \vec{r}_1 - m_2 \vec{r}_2}{M_1 - m_2}$$
  where:
  - $M_1$ = Mass of the complete, uncut body centered at $\vec{r}_1$.
  - $m_2$ = Mass of the excised cavity portion centered at $\vec{r}_2$.

### 3.2 Canonical JEE Problem: Circular Cavity in a Disc
- Consider a uniform disc of radius $R$ and mass $M = \sigma \pi R^2$ centered at origin $C_1(0, 0)$.
- A circular hole of radius $r = R/2$ is cut out, touching the outer circumference, centered at $C_2(R/2, 0)$.
- Mass of the excised portion:
  $$m_2 = \sigma \pi \left(\frac{R}{2}\right)^2 = \frac{\sigma \pi R^2}{4} = \frac{M}{4}$$
- Center of mass coordinate of remaining body:
  $$x_{\text{cm}} = \frac{M(0) - (M/4)(R/2)}{M - M/4} = \frac{-M R / 8}{3M / 4} = -\frac{R}{6}$$
  $$y_{\text{cm}} = 0$$
  The center of mass shifts toward the left (away from the cavity) by distance $R/6$.

---

### 3.3 Visual Preservation: Standard Continuous Bodies & Cavities

![Center of Mass of Standard Bodies and Cavities](/media/center_of_mass_standard_bodies_and_cavities.webp)
*Description: Two-panel structural mechanics illustration: (A) Systematic diagram of 6 standard continuous bodies (semicircular ring $2R/\pi$, semicircular disc $4R/3\pi$, hemispherical shell $R/2$, solid hemisphere $3R/8$, hollow cone $h/3$, and solid cone $h/4$), pinpointing exact center of mass coordinates along symmetry axes; (B) Negative mass cavity formulation for a circular disc of radius $R$ with an excised cavity of radius $R/2$, detailing the coordinate shift of the center of mass to $x_{\mathrm{cm}} = -R/6$.*

---


### 4.1 Velocity, Acceleration & Cancellation of Internal Forces
1. **Velocity of Center of Mass ($\vec{v}_{\text{cm}}$):**
   $$\vec{v}_{\text{cm}} = \frac{d\vec{r}_{\text{cm}}}{dt} = \frac{\sum m_i \vec{v}_i}{M_{\text{total}}} = \frac{\vec{P}_{\text{sys}}}{M_{\text{total}}}$$
   The total linear momentum of a system of particles equals the total mass multiplied by the velocity of its center of mass:
   $$\vec{P}_{\text{sys}} = M_{\text{total}}\vec{v}_{\text{cm}}$$
2. **Acceleration of Center of Mass ($\vec{a}_{\text{cm}}$):**
   $$\vec{a}_{\text{cm}} = \frac{d\vec{v}_{\text{cm}}}{dt} = \frac{\sum m_i \vec{a}_i}{M_{\text{total}}} = \frac{\sum \vec{F}_i}{M_{\text{total}}}$$
3. **Internal vs. External Forces:**
   Total force acting on particle $i$ is $\vec{F}_i = \vec{F}_{i, \text{ext}} + \sum_{j \ne i} \vec{F}_{ji, \text{int}}$.
   By Newton's Third Law of Motion, mutual internal interaction forces between particles $i$ and $j$ form equal and opposite pairs:
   $$\vec{F}_{ij, \text{int}} + \vec{F}_{ji, \text{int}} = 0 \implies \sum \vec{F}_{\text{int}} \equiv 0$$
   $$\mathbf{Newton's\ Second\ Law\ for\ a\ System:}\quad \Sigma \vec{F}_{\text{ext}} = M_{\text{total}}\vec{a}_{\text{cm}} = \frac{d\vec{P}_{\text{sys}}}{dt}$$
   - **Fundamental Mechanical Invariant:** Internal forces, no matter how intense (such as internal explosions, springs, friction between system components, or molecular bonds), **can never accelerate the center of mass** of an isolated system.

### 4.2 Law of Conservation of Linear Momentum
- If the net external force acting on a system is zero ($\Sigma \vec{F}_{\text{ext}} = 0$):
  $$\vec{a}_{\text{cm}} = 0 \implies \vec{v}_{\text{cm}} = \text{constant} \implies \vec{P}_{\text{sys}} = \text{constant}$$
- If external forces vanish along a specific Cartesian axis (e.g., $\Sigma F_{\text{ext}, x} = 0$), momentum is conserved strictly along that axis:
  $$P_{x, \text{sys}} = \text{constant} \implies v_{\text{cm}, x} = \text{constant}$$

### 4.3 Center of Mass Invariant Shift Problems ($\Delta \vec{r}_{\text{cm}} = 0$)
When a system is **initially at rest** ($\vec{v}_{\text{cm}}(0) = 0$) and experiences **zero net external force** ($\Sigma \vec{F}_{\text{ext}} = 0$), its center of mass remains permanently at rest in the inertial reference frame:
$$\Delta \vec{r}_{\text{cm}} = 0 \implies \sum_{i=1}^N m_i \Delta \vec{r}_i = 0$$

#### Archetype A: Man Walking on a Free Floating Plank
- A man of mass $m$ stands at one end of a plank of mass $M$ and length $L$, resting on a frictionless horizontal ice surface.
- The man walks from one end of the plank to the other (displacement relative to plank $\Delta x_{m/p} = L$).
- Since $\Sigma F_{\text{ext}, x} = 0$, $\Delta x_{\text{cm}} = 0$:
  $$m \Delta x_m + M \Delta x_p = 0 \quad (\text{Coordinates wrt Ground})$$
  Substituting $\Delta x_m = L + \Delta x_p$ (where $\Delta x_p$ is plank shift):
  $$m (L + \Delta x_p) + M \Delta x_p = 0 \implies \mathbf{Plank\ Shift:}\quad |\Delta x_p| = \frac{m L}{M + m}$$
  $$\mathbf{Man's\ Shift\ wrt\ Ground:}\quad \Delta x_m = L - |\Delta x_p| = \frac{M L}{M + m}$$

#### Archetype B: Invariant Parabolic Trajectory in Projectile Explosion
- A projectile of mass $M$ launched with velocity $u$ at angle $\theta$ follows a parabolic trajectory.
- At its apex ($x = R/2, y = H$), an internal explosion shatters the projectile into two fragments $m_1$ and $m_2$.
- Because explosive forces are internal ($\sum \vec{F}_{\text{int}} = 0$) and the external force is purely gravitational ($\vec{F}_{\text{ext}} = M\vec{g}$), the acceleration of the center of mass remains identically $\vec{a}_{\text{cm}} = \vec{g}$.
- **The Center of Mass continues along the original parabolic trajectory, landing at range $R$.**
- If fragment $m_1 = M/2$ falls vertically downward to the ground ($x_1 = R/2$), fragment $m_2 = M/2$ lands at $x_2$:
  $$x_{\text{cm}} = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} \implies R = \frac{(M/2)(R/2) + (M/2) x_2}{M} \implies x_2 = \frac{3R}{2} = 1.5 R$$

---

### 4.4 Visual Preservation: COM Kinematics & Man-Plank Systems

![Center of Mass Kinematics and Man-Plank Systems](/media/com_kinematics_and_man_plank_system.webp)
*Description: Two-panel diagnostic kinematic diagram: (A) Zero-external-force man-plank system on a frictionless floor, demonstrating fixed center of mass position ($\Delta x_{\mathrm{cm}} = 0$), leftward recoil of the plank $\Delta x_p = \frac{mL}{M+m}$, and rightward displacement of the man $\Delta x_m = \frac{ML}{M+m}$; (B) Projectile exploding mid-air at maximum height $H$, illustrating parabolic trajectory invariance of the center of mass landing at range $R$, while fragments $m_1$ and $m_2$ land at $R/2$ and $1.5R$.*

---


### 5.1 Center of Mass Reference Frame ($C$-Frame)
- The $C$-frame is an inertial (or non-inertial) reference frame attached to and moving with the center of mass velocity $\vec{v}_{\text{cm}}$.
- **Defining Property of $C$-Frame:** Total linear momentum in the $C$-frame is **identically zero**:
  $$\vec{P}^* = \sum m_i \vec{v}_i^* = \sum m_i (\vec{v}_i - \vec{v}_{\text{cm}}) = M\vec{v}_{\text{cm}} - M\vec{v}_{\text{cm}} \equiv 0$$
  For this reason, the $C$-frame is also known as the **Zero-Momentum Frame**.

### 5.2 Koenig's Kinetic Energy Theorem
- The total kinetic energy of a multi-particle system in the laboratory frame can be decomposed into the internal kinetic energy relative to the center of mass plus the translational kinetic energy of the center of mass:
  $$\mathbf{Koenig's\ Theorem:}\quad K_{\text{lab}} = K_{C\text{-frame}} + \frac{1}{2} M_{\text{total}} v_{\text{cm}}^2$$
  where $K_{C\text{-frame}} = \frac{1}{2}\sum m_i (v_i^*)^2$.

### 5.3 Reduced Mass Concept ($\mu$) for Two-Body Systems
- Consider two bodies $m_1$ and $m_2$ interacting with each other via internal central forces.
- Relative position vector: $\vec{r}_{\text{rel}} = \vec{r}_1 - \vec{r}_2$.
- Relative acceleration:
  $$\vec{a}_{\text{rel}} = \vec{a}_1 - \vec{a}_2 = \frac{\vec{F}_{12}}{m_1} - \frac{\vec{F}_{21}}{m_2} = \vec{F}_{12}\left(\frac{1}{m_1} + \frac{1}{m_2}\right) = \frac{\vec{F}_{12}}{\mu}$$
- **Reduced Mass ($\mu$):**
  $$\mu = \frac{m_1 m_2}{m_1 + m_2}$$
- **Internal Kinetic Energy in terms of $\mu$:**
  $$K_{\text{rel}} = \frac{1}{2}\mu v_{\text{rel}}^2 = \frac{1}{2}\left(\frac{m_1 m_2}{m_1 + m_2}\right)(\vec{v}_1 - \vec{v}_2)^2$$
- **Application to Connected Spring-Mass Systems:**
  When two masses $m_1$ and $m_2$ on a smooth surface are connected by a spring of stiffness $k$, the natural oscillation frequency and period are:
  $$\omega = \sqrt{\frac{k}{\mu}}, \quad T = 2\pi\sqrt{\frac{\mu}{k}} = 2\pi\sqrt{\frac{m_1 m_2}{k(m_1 + m_2)}}$$

---


### 6.1 Collision Classification & Restitution Coefficient ($e$)
- **Collision:** An intense physical interaction between two or more bodies occurring over an extremely small time interval $\Delta t \to 0$, during which very large internal impulsive forces dominate all non-impulsive external forces (such as gravity or friction).
- **Newton's Experimental Law of Restitution:**
  The ratio of the relative speed of separation to the relative speed of approach along the common normal (line of impact):
  $$e = \frac{v_{\text{sep}}}{u_{\text{app}}} = \frac{v_2 - v_1}{u_1 - u_2} \quad (\text{along Line of Impact})$$

| Collision Category | Coefficient of Restitution ($e$) | Kinetic Energy Conservation | Mechanical Characteristics |
| :--- | :--- | :--- | :--- |
| **Perfectlys Elastic** | $e = 1$ | $\Delta K = 0$ (Conserved) | Total mechanical deformation is fully recovered without thermal dissipation. |
| **Inelastic** | $0 < e < 1$ | $\Delta K > 0$ (Loss of KE) | Partial recovery of deformation; energy lost as heat and sound. |
| **Perfectlys Inelastic** | $e = 0$ | Maximum possible KE loss | Bodies stick together after collision, moving with common velocity $v_{\text{cm}}$. |
| **Superelastic / Explosive** | $e > 1$ | $\Delta K < 0$ (Gain in KE) | Internal chemical, nuclear, or strain energy is released. |

### 6.2 Analytical Formulations for 1D Head-on Collisions
Consider two masses $m_1$ and $m_2$ moving along a straight line with initial velocities $u_1$ and $u_2$ ($u_1 > u_2$):
4. **Conservation of Linear Momentum:**
   $$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$
5. **Restitution Equation:**
   $$v_2 - v_1 = e(u_1 - u_2)$$
- **Post-Collision Velocities:**
  $$\mathbf{v_1} = \frac{(m_1 - e m_2)u_1 + m_2(1 + e)u_2}{m_1 + m_2} = v_{\text{cm}} - e\left(\frac{m_2}{m_1 + m_2}\right) u_{\text{rel}}$$
  $$\mathbf{v_2} = \frac{m_1(1 + e)u_1 + (m_2 - e m_1)u_2}{m_1 + m_2} = v_{\text{cm}} + e\left(\frac{m_1}{m_1 + m_2}\right) u_{\text{rel}}$$
  where $u_{\text{rel}} = u_1 - u_2$ and $v_{\text{cm}} = \frac{m_1 u_1 + m_2 u_2}{m_1 + m_2}$.

### 6.3 Loss of Kinetic Energy in 1D Collision
The mechanical energy dissipated during deformation and restitution is:
$$\Delta K_{\text{loss}} = K_i - K_f = \frac{1}{2}\left(\frac{m_1 m_2}{m_1 + m_2}\right)(1 - e^2)(u_1 - u_2)^2 = \frac{1}{2}\mu(1 - e^2)u_{\text{rel}}^2$$
- For **perfectly elastic collision** ($e = 1$): $\Delta K_{\text{loss}} = 0$.
- For **perfectly inelastic collision** ($e = 0$): $\Delta K_{\text{loss}} = \frac{1}{2}\mu u_{\text{rel}}^2$ (maximum possible kinetic energy loss).

### 6.4 Key Limiting Cases for Head-on Collisions
- **Equal Masses ($m_1 = m_2 = m$) and Perfectly Elastic ($e = 1$):**
  $$v_1 = u_2 \quad \text{and} \quad v_2 = u_1$$
  **The bodies completely exchange their velocities.** If $m_2$ was at rest ($u_2 = 0$), $m_1$ stops dead ($v_1 = 0$) and $m_2$ moves off with the full initial velocity $v_2 = u_1$.
- **Massive Target at Rest ($m_2 \gg m_1, u_2 = 0$):**
  $$v_1 \approx -e u_1, \quad v_2 \approx 0$$
  The light mass rebounds with speed $e u_1$, while the heavy target remains virtually at rest.
- **Massive Projectile ($m_1 \gg m_2, u_2 = 0$):**
  $$v_1 \approx u_1, \quad v_2 \approx (1 + e)u_1$$
  For an elastic collision ($e = 1$), the light target is projected forward with **twice the speed of the projectile** ($v_2 = 2u_1$).

### 6.5 Oblique (Two-Dimensional) Collisions
- **Line of Impact (Common Normal):** The line passing through the centers of mass of the colliding spheres perpendicular to the contact plane during impact.
- **Common Tangent:** The plane tangent to both surfaces at the point of contact.
- **Governing Rules for Smooth Colliding Spheres:**
  1. *Along Common Tangent:* Surface friction is zero $\implies$ no impulsive force acts along the tangential direction.
     $$\mathbf{Tangential\ Invariance:}\quad v_{1t} = u_{1t} \quad \text{and} \quad v_{2t} = u_{2t}$$
  2. *Along Line of Impact (Normal Axis):* Impulsive normal force acts exclusively along this axis.
     $$m_1 u_{1n} + m_2 u_{2n} = m_1 v_{1n} + m_2 v_{2n}$$
     $$e = \frac{v_{2n} - v_{1n}}{u_{1n} - u_{2n}}$$
- **The $90^\circ$ Scattering Invariant:**
  When two smooth spheres of **equal mass** ($m_1 = m_2$) undergo a **perfectly elastic oblique collision** ($e = 1$) with one sphere initially at rest ($u_2 = 0$), they **diverge at right angles ($90^\circ$) to each other** after collision:
  $$\vec{v}_1 \cdot \vec{v}_2 = 0 \implies \theta_1 + \theta_2 = 90^\circ$$

---

### 6.6 Visual Preservation: 1D & Oblique Collisions

![Collisions in 1D and 2D Restitution Mechanics](/media/collisions_1d_and_2d_restitution_mechanics.webp)
*Description: Two-panel comprehensive collision physics schematic: (A) Step-by-step physical progression of a 1D head-on collision across approach ($u_1 > u_2$), maximum deformation ($v_1 = v_2 = v_{\mathrm{cm}}$ storing maximum internal strain energy), and restitution ($v_2 > v_1$), displaying restitution and energy loss formulas; (B) Mechanics of an oblique (2D) collision between two smooth spherical masses, contrasting tangential velocity invariance ($F_t = 0 \implies v_t = u_t$) against normal impulse dynamics along the line of impact ($e = \frac{v_{2n}-v_{1n}}{u_{1n}-u_{2n}}$).*

---


### 7.1 The Differential Variable Mass Equation
- Consider a body of instantaneous mass $m$ moving with velocity $\vec{v}$. In time $dt$, it ejects mass $dm = -dm_{\text{ejected}}$ with velocity $\vec{u}$ in the laboratory frame.
- Velocity of ejected mass relative to the body: $\vec{v}_{\text{rel}} = \vec{u} - \vec{v}$.
- From impulse-momentum principles:
  $$\vec{F}_{\text{ext}} + \vec{v}_{\text{rel}}\left(\frac{dm}{dt}\right) = m \frac{d\vec{v}}{dt}$$
  where $\vec{F}_{\text{thrust}} = \vec{v}_{\text{rel}}\left(\frac{dm}{dt}\right)$ is the **Thrust Force**.

### 7.2 Tsiolkovsky Rocket Equation
- For a rocket moving vertically upward against uniform gravity $g$, ejecting fuel downward at constant relative exhaust speed $u_{\text{rel}}$ ($v_{\text{rel}} = -u_{\text{rel}}$):
  $$-m g + u_{\text{rel}}\left(-\frac{dm}{dt}\right) = m \frac{dv}{dt}$$
  $$dv = -u_{\text{rel}}\frac{dm}{m} - g\,dt$$
- Integrating from initial mass $m_0$ and speed $v_0$ at $t = 0$ to mass $m$ at time $t$:
  $$\mathbf{Rocket\ Velocity:}\quad v(t) = v_0 + u_{\text{rel}} \ln\left(\frac{m_0}{m(t)}\right) - g t$$
- In gravity-free space ($g = 0$):
  $$v(t) = v_0 + u_{\text{rel}} \ln\left(\frac{m_0}{m}\right)$$

---


### Archetype 1: Successive Rebounds on a Horizontal Floor
- **Problem:** A ball is dropped from height $h_0$ onto a fixed horizontal floor with coefficient of restitution $e$. Find the height $h_n$ after $n$ rebounds, total time taken until motion ceases, and total distance traveled.
- **Solution:**
  - Velocity before 1st impact: $u_1 = \sqrt{2g h_0}$. Rebound velocity: $v_1 = e u_1 \implies h_1 = \frac{v_1^2}{2g} = e^2 h_0$.
  - After $n$ rebounds:
    $$h_n = e^{2n} h_0 \quad \text{and} \quad v_n = e^n \sqrt{2g h_0}$$
  - Total distance traveled:
    $$H_{\text{total}} = h_0 + 2h_1 + 2h_2 + \dots = h_0 + 2h_0(e^2 + e^4 + \dots) = h_0\left(1 + \frac{2e^2}{1 - e^2}\right) = h_0\left(\frac{1 + e^2}{1 - e^2}\right)$$
  - Total time elapsed:
    $$T_{\text{total}} = t_0 + 2t_1 + 2t_2 + \dots = \sqrt{\frac{2h_0}{g}} + 2e\sqrt{\frac{2h_0}{g}} + 2e^2\sqrt{\frac{2h_0}{g}} + \dots = \sqrt{\frac{2h_0}{g}}\left(\frac{1 + e}{1 - e}\right)$$

### Archetype 2: Maximum Spring Compression in Two-Body Collision
- **Problem:** A block of mass $m_1$ moving with speed $v_0$ strikes a spring of stiffness $k$ attached to a stationary block of mass $m_2$ resting on a smooth surface. Find the maximum compression $x_{\text{max}}$ of the spring.
- **Solution:**
  - Maximum compression occurs when both blocks move with the common center of mass velocity:
    $$v_{\text{cm}} = \frac{m_1 v_0}{m_1 + m_2}$$
  - In the $C$-frame, the entire initial relative kinetic energy is converted into elastic potential energy of the spring:
    $$\frac{1}{2} k x_{\text{max}}^2 = K_{\text{rel}} = \frac{1}{2}\mu v_{\text{rel}}^2 = \frac{1}{2}\left(\frac{m_1 m_2}{m_1 + m_2}\right) v_0^2$$
    $$x_{\text{max}} = v_0 \sqrt{\frac{\mu}{k}} = v_0 \sqrt{\frac{m_1 m_2}{k(m_1 + m_2)}}$$

### Archetype 3: Ball Rebounding off an Inclined Plane
- **Problem:** A ball falls vertically from height $h$ onto an inclined plane of inclination $\alpha$ with coefficient of restitution $e$.
- **Analysis:**
  - Speed before impact: $u = \sqrt{2gh}$.
  - Component parallel to incline: $u_\parallel = u \sin\alpha$.
  - Component perpendicular to incline: $u_\perp = u \cos\alpha$.
  - Component parallel to incline is unaffected: $v_\parallel = u_\parallel = u \sin\alpha$.
  - Component perpendicular to incline rebounds with restitution: $v_\perp = e u_\perp = e u \cos\alpha$.
  - Rebound angle $\beta$ with incline: $\tan\beta = \frac{v_\perp}{v_\parallel} = \frac{e u \cos\alpha}{u \sin\alpha} = e \cot\alpha$.
