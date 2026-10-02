# Physics Revision Context: Chapter 48 — Rigid Body Dynamics & Rotational Mechanics

---


### 1.1 Definition of a Rigid Body & Distance Constraint
A rigid body is an idealized continuum system of particles in which the distance between any arbitrary pair of constituent particles remains strictly constant over time:
$$\mathbf{|\vec{r}_i(t) - \vec{r}_j(t)| = \text{Constant} \quad (\forall \, i, j)}$$
- **Velocity Component Constraint along Interatomic Line:**
  Let $A$ and $B$ be two points on a rigid body with velocities $\vec{v}_A$ and $\vec{v}_B$.
  Because distance $AB$ cannot expand or contract, the relative velocity component along the line joining $A$ and $B$ must be identically zero:
  $$\mathbf{(\vec{v}_A - \vec{v}_B) \cdot \hat{r}_{AB} = 0 \iff v_A \cos\theta_A = v_B \cos\theta_B}$$
  where $\theta_A, \theta_B$ are the angles made by $\vec{v}_A, \vec{v}_B$ with the line segment $AB$.

---

### 1.2 Invariance of Angular Velocity ($\vec{\omega}$)
For any rigid body undergoing arbitrary planar motion:
- The angular velocity of any point $B$ relative to point $A$ is identical to the angular velocity of point $A$ relative to point $B$:
  $$\mathbf{\vec{\omega}_{B/A} = \vec{\omega}_{A/B} = \vec{\omega}}$$
- **Fundamental Kinematics Theorem:**
  The angular velocity $\vec{\omega}$ of a rigid body is a **free vector**; it is the **EXACT SAME with respect to ANY point chosen as origin** on or within the rigid body!
  $$\vec{v}_B = \vec{v}_A + \vec{\omega} \times \vec{r}_{B/A}$$

---

### 1.3 Rotational Kinematics under Constant Angular Acceleration ($\alpha$)
When a rigid body rotates about a fixed axis with constant angular acceleration $\alpha$:
$$\mathbf{\omega = \omega_0 + \alpha t}$$
$$\mathbf{\theta = \omega_0 t + \frac{1}{2}\alpha t^2}$$
$$\mathbf{\omega^2 = \omega_0^2 + 2\alpha \theta}$$
$$\mathbf{\theta_n = \omega_0 + \frac{\alpha}{2}(2n - 1) \quad (\text{Angular displacement in } n\text{-th second})}$$

---


### 2.1 Definition & Radius of Gyration ($k$)
The Moment of Inertia ($I$) measures the rotational inertia of a rigid body—its resistance to changes in rotational velocity about a given axis:
- **Discrete Particle System:**
  $$\mathbf{I = \sum_{i=1}^n m_i r_i^2}$$
  where $r_i$ is the perpendicular distance of particle $m_i$ from the rotation axis.
- **Continuous Mass Distribution:**
  $$\mathbf{I = \int r^2 dm}$$
- **Radius of Gyration ($k$):**
  The effective distance from the axis of rotation at which the entire mass $M$ of the body could be concentrated without altering its moment of inertia:
  $$I = M k^2 \implies \mathbf{k = \sqrt{\frac{I}{M}}}$$

---

### 2.2 Visual Preservation: Moment of Inertia Theorems & Standard Geometries

<!-- image missing: media/moment_of_inertia_theorems_and_canonical_bodies.webp -->
*Description: Two-panel rotational inertia graphic: (A) Fundamental moment of inertia theorems including Parallel Axis Theorem (Steiner's Law $I = I_{\text{cm}} + Md^2$) with the COM axis constraint, Perpendicular Axis Theorem ($I_z = I_x + I_y$) with the 2D planar laminar limitation, and the negative mass cavity method for bodies with holes; (B) Canonical moments of inertia table for 1D, 2D, and 3D standard bodies, displaying the radius of gyration rolling hierarchy ($k^2/R^2$).*

---

### 2.3 The Parallel Axis Theorem (Steiner's Theorem)
The moment of inertia of a body about any arbitrary axis is equal to its moment of inertia about a parallel axis passing through its Center of Mass ($I_{\text{cm}}$) plus the product of total mass $M$ and the square of the perpendicular distance $d$ between the two axes:
$$\mathbf{I_{\text{axis}} = I_{\text{cm}} + M d^2}$$
- **CRITICAL APPLICATION TRAPS:**
  1. One of the two parallel axes **MUST PASS THROUGH THE CENTER OF MASS (COM)**!
  2. The moment of inertia about the COM axis ($I_{\text{cm}}$) is the **GLOBAL MINIMUM** among all mutually parallel axes!
  3. Evaluating inertia between two arbitrary axes $A$ and $B$ using $I_A = I_B + M d^2$ is **STRICTLY FALSE** unless $B$ is the Center of Mass!

---

### 2.4 The Perpendicular Axis Theorem
For any flat, planar 2D laminar body lying in the $xy$-plane:
$$\mathbf{I_z = I_x + I_y}$$
where $I_x, I_y$ are moments of inertia about mutually perpendicular axes in the plane of the lamina, and $I_z$ is the moment of inertia about an axis perpendicular to the plane passing through their intersection point.
- **CRITICAL RESTRICTION:**
  - **Valid EXCLUSIVELY for planar 2D laminae** (e.g., thin plates, discs, rings, triangular sheets).
  - **STRICTLY FORBIDDEN FOR 3D BODIES** (e.g., solid spheres, cylinders, cones, cubes)!

---

### 2.5 Cavity Moments of Inertia (Negative Mass Superposition)
For a rigid body containing excavated cavities, the remaining moment of inertia is computed by subtracting the cavity's moment of inertia from the original complete body about the **EXACT SAME AXIS**:
$$\mathbf{I_{\text{rem}} = I_{\text{orig}} - I_{\text{cavity}}}$$

- **Canonical Problem: Circular Disc of Radius $R$, Mass $M$ with Hole of Radius $R/2$ Tangent to Rim:**
  1. Areal mass density: $\sigma = \frac{M}{\pi R^2}$.
  2. Mass of excavated hole: $m_{\text{hole}} = \sigma [\pi (R/2)^2] = \frac{M}{4}$.
  3. Original disc inertia about central normal axis $O$: $I_{\text{orig}} = \frac{1}{2} M R^2$.
  4. Inertia of hole about its own COM axis: $I_{\text{hole, cm}} = \frac{1}{2} m (R/2)^2 = \frac{1}{2}\left(\frac{M}{4}\right)\left(\frac{R^2}{4}\right) = \frac{M R^2}{32}$.
  5. Distance between hole center and disc center $O$: $d = R/2$.
  6. Applying Parallel Axis Theorem to hole about disc center $O$:
     $$I_{\text{hole}, O} = I_{\text{hole, cm}} + m d^2 = \frac{M R^2}{32} + \left(\frac{M}{4}\right)\left(\frac{R}{2}\right)^2 = \frac{M R^2}{32} + \frac{M R^2}{16} = \frac{3 M R^2}{32}$$
  7. **Remaining Moment of Inertia about $O$:**
     $$\mathbf{I_{\text{rem}} = \frac{1}{2} M R^2 - \frac{3}{32} M R^2 = \frac{13}{32} M R^2}$$

---

### 2.6 Master Table of Standard Moments of Inertia & The $k^2/R^2$ Rolling Hierarchy

| Rigid Body Geometry | Rotation Axis Specification | Moment of Inertia ($I$) | Dimensionless Inertia Ratio ($k^2/R^2$) |
| :---: | :---: | :---: | :---: |
| **Thin Uniform Rod (Length $L$)** | Perpendicular bisector through center | $\mathbf{\frac{1}{12} M L^2}$ | $k^2/L^2 = 1/12$ |
| **Thin Uniform Rod (Length $L$)** | Perpendicular axis through one end | $\mathbf{\frac{1}{3} M L^2}$ | $k^2/L^2 = 1/3$ |
| **Circular Ring / Thin Hoop (Radius $R$)** | Central axis perpendicular to plane | $\mathbf{M R^2}$ | $\mathbf{\frac{k^2}{R^2} = 1.00}$ |
| **Circular Ring / Thin Hoop (Radius $R$)** | Diameter in plane of ring | $\mathbf{\frac{1}{2} M R^2}$ | $k^2/R^2 = 0.50$ |
| **Circular Ring / Thin Hoop (Radius $R$)** | Tangent in plane of ring | $\mathbf{\frac{3}{2} M R^2}$ | $k^2/R^2 = 1.50$ |
| **Circular Disc (Radius $R$)** | Central axis perpendicular to plane | $\mathbf{\frac{1}{2} M R^2}$ | $\mathbf{\frac{k^2}{R^2} = \frac{1}{2} = 0.50}$ |
| **Circular Disc (Radius $R$)** | Diameter in plane of disc | $\mathbf{\frac{1}{4} M R^2}$ | $k^2/R^2 = 0.25$ |
| **Circular Disc (Radius $R$)** | Tangent in plane of disc | $\mathbf{\frac{5}{4} M R^2}$ | $k^2/R^2 = 1.25$ |
| **Hollow Cylinder / Thin Shell (Radius $R$)** | Central longitudinal axis | $\mathbf{M R^2}$ | $\mathbf{\frac{k^2}{R^2} = 1.00}$ |
| **Solid Cylinder (Radius $R$)** | Central longitudinal axis | $\mathbf{\frac{1}{2} M R^2}$ | $\mathbf{\frac{k^2}{R^2} = 0.50}$ |
| **Hollow Sphere / Thin Shell (Radius $R$)** | Any diameter through center | $\mathbf{\frac{2}{3} M R^2}$ | $\mathbf{\frac{k^2}{R^2} = \frac{2}{3} \approx 0.67}$ |
| **Hollow Sphere / Thin Shell (Radius $R$)** | Tangent to outer surface | $\mathbf{\frac{5}{3} M R^2}$ | $k^2/R^2 = 5/3 \approx 1.67$ |
| **Solid Sphere (Radius $R$)** | Any diameter through center | $\mathbf{\frac{2}{5} M R^2}$ | $\mathbf{\frac{k^2}{R^2} = \frac{2}{5} = 0.40}$ |
| **Solid Sphere (Radius $R$)** | Tangent to outer surface | $\mathbf{\frac{7}{5} M R^2}$ | $k^2/R^2 = 7/5 = 1.40$ |
| **Solid Cone (Base Radius $R$, Height $H$)** | Central symmetry axis | $\mathbf{\frac{3}{10} M R^2}$ | $\frac{k^2}{R^2} = \frac{3}{10} = 0.30$ |
| **Rectangular Plate (Sides $a, b$)** | Central axis perpendicular to plate | $\mathbf{\frac{1}{12} M (a^2 + b^2)}$ | — |

- **The Rolling Constant Hierarchy:**
  $$\mathbf{\left(\frac{k^2}{R^2}\right)_{\text{Solid Sphere}} (0.40) < \left(\frac{k^2}{R^2}\right)_{\text{Disc/Solid Cyl}} (0.50) < \left(\frac{k^2}{R^2}\right)_{\text{Hollow Sphere}} (0.67) < \left(\frac{k^2}{R^2}\right)_{\text{Ring/Hollow Cyl}} (1.00)}$$

---


### 3.1 Torque ($\vec{\tau}$) Formulations
- **Torque about a Point $O$:**
  $$\mathbf{\vec{\tau}_O = \vec{r} \times \vec{F} = r F \sin\phi \, \hat{n} = F \cdot r_\perp}$$
  where $r_\perp = r \sin\phi$ is the moment arm (perpendicular distance from $O$ to line of action of $\vec{F}$).
- **Torque about a Fixed Axis:**
  The projection of the point torque vector along the unit axis vector $\hat{u}$:
  $$\tau_{\text{axis}} = \vec{\tau}_O \cdot \hat{u} = I_{\text{axis}} \alpha$$

---

### 3.2 Dynamic Equations of Motion
1. **Fixed-Axis Rotation:**
   $$\mathbf{\tau_{\text{net, ext}} = I_{\text{axis}} \alpha}$$
2. **General Plane Motion (Translation of COM + Rotation about COM):**
   $$\mathbf{\vec{F}_{\text{net, ext}} = M \vec{a}_{\text{cm}}}$$
   $$\mathbf{\vec{\tau}_{\text{cm, ext}} = I_{\text{cm}} \vec{\alpha}}$$
   *(Notice that the torque equation $\tau = I \alpha$ is valid **about the Center of Mass** even if the COM is accelerating!).*

---

### 3.3 Rotational Work, Power, & Kinetic Energy
- **Rotational Kinetic Energy:**
  $$\mathbf{K_{\text{rot}} = \frac{1}{2} I \omega^2}$$
- **Work-Energy Theorem for Rotation:**
  $$W_{\text{rot}} = \int_{\theta_i}^{\theta_f} \tau d\theta = \frac{1}{2} I \omega_f^2 - \frac{1}{2} I \omega_i^2 = \Delta K_{\text{rot}}$$
- **Rotational Power:**
  $$\mathbf{P = \vec{\tau} \cdot \vec{\omega} = \tau \omega}$$

---


### 4.1 Angular Momentum Formulations
3. **Single Particle about Point $O$:**
   $$\mathbf{\vec{L}_O = \vec{r} \times \vec{p} = m (\vec{r} \times \vec{v})}$$
   Scalar magnitude: $L_O = m v r_\perp = p \cdot r_\perp$.
4. **Rigid Body Rotating about a Fixed Axis:**
   $$\mathbf{\vec{L} = I_{\text{axis}} \vec{\omega}}$$
5. **Rigid Body in Combined Translational & Rotational Motion (CRTM) about Arbitrary Point $O$:**
   $$\mathbf{\vec{L}_O = \vec{L}_{\text{cm}} + \vec{r}_{\text{cm}} \times \vec{P}_{\text{sys}} = I_{\text{cm}} \vec{\omega} + \vec{r}_{\text{cm}} \times (M \vec{v}_{\text{cm}})}$$
   - $\vec{L}_{\text{cm}} = I_{\text{cm}} \vec{\omega}$ is the **spin angular momentum** (intrinsic rotation).
   - $\vec{r}_{\text{cm}} \times (M \vec{v}_{\text{cm}})$ is the **orbital angular momentum** of the center of mass.

---

### 4.2 Principle of Conservation of Angular Momentum
The time rate of change of total angular momentum of a system about a point $O$ equals the net external torque about $O$:
$$\mathbf{\vec{\tau}_{\text{net, ext}} = \frac{d\vec{L}}{dt}}$$
If the net external torque about point $O$ vanishes ($\vec{\tau}_{\text{net, ext}} = 0$):
$$\mathbf{\vec{L} = \text{Constant} \iff I_1 \vec{\omega}_1 = I_2 \vec{\omega}_2}$$
- **Physical Examples:**
  - **Spinning Figure Skater / Diver:** Pulling arms and legs inward reduces $I$, which forces $\omega$ to surge proportionally ($I \downarrow \implies \omega \uparrow$).
  - **Kepler's Second Law:** Gravity is a central force producing zero torque about the Sun $\implies$ areal velocity is constant: $\frac{dA}{dt} = \frac{L}{2m} = \text{const} \implies r_p v_p = r_a v_a$.

---

### 4.3 Visual Preservation: Angular Momentum, Cue Ball Strike, & Toppling

<!-- image missing: media/angular_momentum_conservation_and_toppling_dynamics.webp -->
*Description: Two-panel angular momentum and structural stability graphic: (A) Angular momentum vector decomposition in CRTM, conservation laws, and the Cue Ball Strike Height Theorem determining the exact impact location ($h = \frac{2}{5}R$) for immediate no-slip pure rolling; (B) Toppling versus sliding mechanics of rigid rectangular blocks showing normal reaction migration, friction force thresholds, and critical tilting angles on rough inclines.*

---

### 4.4 The Billiard Ball Strike Height Theorem
A cue strikes a stationary billiard ball (uniform solid sphere of mass $M$, radius $R$, $I_{\text{cm}} = \frac{2}{5}M R^2$) with a horizontal impulse $J = \int F dt$ at height $h$ above the central equatorial plane:
6. Linear momentum acquired:
   $$J = M v_{\text{cm}} \implies v_{\text{cm}} = \frac{J}{M}$$
7. Angular impulse about Center of Mass:
   $$J_{\text{angular}} = J \cdot h = I_{\text{cm}} \omega = \left(\frac{2}{5}M R^2\right) \omega \implies \omega = \frac{5 J h}{2 M R^2}$$
8. **Condition for Immediate Pure Rolling ($v_{\text{cm}} = \omega R$):**
   $$\frac{J}{M} = \left(\frac{5 J h}{2 M R^2}\right) R = \frac{5 J h}{2 M R} \implies \mathbf{h = \frac{2}{5} R = 0.40 R}$$
- **Behavioral Regimes Based on Strike Height $h$:**
  - **$h = \frac{2}{5}R$:** Pure rolling begins **IMMEDIATELY at $t = 0$**; friction force is zero ($f = 0$).
  - **$h > \frac{2}{5}R$ (High Strike / Topspin):** $\omega R > v_{\text{cm}}$. The contact point slips backward, generating **FORWARD kinetic friction** that increases $v_{\text{cm}}$ and reduces $\omega$ until pure rolling is attained!
  - **$h < \frac{2}{5}R$ (Low Strike / Backspin):** $v_{\text{cm}} > \omega R$. The contact point slips forward, generating **BACKWARD kinetic friction** that slows $v_{\text{cm}}$ and accelerates $\omega$ until pure rolling is attained!

---


### 5.1 Total Kinetic Energy in CRTM (König's Theorem)
The total kinetic energy of a body of mass $M$, radius $R$, and radius of gyration $k$ undergoing combined translation and rotation:
$$K_{\text{total}} = K_{\text{trans}} + K_{\text{rot}} = \frac{1}{2} M v_{\text{cm}}^2 + \frac{1}{2} I_{\text{cm}} \omega^2$$
For pure rolling ($v_{\text{cm}} = \omega R$ and $I_{\text{cm}} = M k^2$):
$$K_{\text{total}} = \frac{1}{2} M v_{\text{cm}}^2 + \frac{1}{2} (M k^2) \left(\frac{v_{\text{cm}}}{R}\right)^2 = \mathbf{\frac{1}{2} M v_{\text{cm}}^2 \left(1 + \frac{k^2}{R^2}\right)}$$
- **Fraction of Kinetic Energy in Translation:**
  $$\mathbf{f_{\text{trans}} = \frac{K_{\text{trans}}}{K_{\text{total}}} = \frac{1}{1 + \frac{k^2}{R^2}}}$$
- **Fraction of Kinetic Energy in Rotation:**
  $$\mathbf{f_{\text{rot}} = \frac{K_{\text{rot}}}{K_{\text{total}}} = \frac{\frac{k^2}{R^2}}{1 + \frac{k^2}{R^2}}}$$

---

### 5.2 Kinematics of Pure Rolling (Rolling without Slipping)
Pure rolling is defined by zero relative velocity between the contact point of the rolling body and the supporting surface:
$$\mathbf{\vec{v}_{\text{contact}} = \vec{v}_{\text{surface}}}$$
- On stationary ground ($\vec{v}_{\text{surface}} = 0$):
  $$\vec{v}_{\text{contact}} = \vec{v}_{\text{cm}} + \vec{\omega} \times \vec{R} = 0 \implies \mathbf{v_{\text{cm}} = \omega R, \quad a_{\text{cm}} = \alpha R}$$
- **Velocity Vector Distribution across Rolling Wheel:**
  $$\vec{v}_P = \vec{v}_{\text{cm}} + \vec{\omega} \times \vec{r}_{P/\text{cm}}$$
  Magnitude at angle $\theta$ measured from the bottom contact point:
  $$\mathbf{v_P = 2 v_{\text{cm}} \sin\left(\frac{\theta}{2}\right)}$$
  1. **Bottom Contact Point ($C, \theta = 0^\circ$):** $v_{\text{bottom}} = 0$ (Instantaneously at rest!).
  2. **Center of Mass ($O, \theta = 90^\circ$):** $v_{\text{cm}} = v_{\text{cm}}$.
  3. **Points on Horizontal Diameter ($\theta = 90^\circ$):** $v = \sqrt{v_{\text{cm}}^2 + (\omega R)^2} = \sqrt{2} v_{\text{cm}}$ at $45^\circ$.
  4. **Topmost Point ($T, \theta = 180^\circ$):** $v_{\text{top}} = v_{\text{cm}} + \omega R = \mathbf{2 v_{\text{cm}}}$.

---

### 5.3 The Instantaneous Center of Rotation (ICOR)
The Instantaneous Center of Rotation (ICOR) is the unique point in the plane of motion whose instantaneous linear velocity is zero:
- For pure rolling on stationary ground, **the bottom contact point $C$ IS THE ICOR**!
- **Theorem of ICOR Equivalence:**
  Combined translation and rotation is **mathematically identical to PURE ROTATION about an axis through the ICOR with angular velocity $\omega$**!
  $$\mathbf{v_P = \omega \cdot r_{P/\text{ICOR}}}$$
  $$\mathbf{K_{\text{total}} = \frac{1}{2} I_{\text{ICOR}} \omega^2}$$
  By Parallel Axis Theorem: $I_{\text{ICOR}} = I_{\text{cm}} + M R^2$.
  $$K_{\text{total}} = \frac{1}{2}(I_{\text{cm}} + M R^2)\omega^2 = \frac{1}{2}I_{\text{cm}}\omega^2 + \frac{1}{2}M (\omega R)^2 = \frac{1}{2}I_{\text{cm}}\omega^2 + \frac{1}{2}M v_{\text{cm}}^2$$
  The two formulations are perfectly equivalent!

---


### 6.1 Derivation of Incline Dynamics

<!-- image missing: media/pure_rolling_kinematics_icor_and_inclined_plane.webp -->
*Description: Two-panel rolling dynamics graphic: (A) Pure rolling no-slip kinematics, velocity vector field ($v_P = 2v_{\text{cm}}\sin(\theta/2)$) from top ($2v_{\text{cm}}$) to bottom ($0$), and equivalence of rolling to pure rotation about the Instantaneous Center of Rotation (ICOR); (B) Dynamic equations for rolling down an inclined plane, friction force requirements, minimum coefficient of friction ($\mu_{\min}$), and arrival sequence race ranking.*

A symmetric circular body (mass $M$, radius $R$, radius of gyration $k$) rolls down an inclined plane of inclination angle $\theta$:
- Forces acting on the body:
  1. Downhill component of gravity: $M g \sin\theta$.
  2. Normal reaction perpendicular to incline: $N = M g \cos\theta$.
  3. Static friction force acting **UP the incline**: $f_s$.
- Dynamic equations:
  1. Linear motion down the incline:
     $$M g \sin\theta - f_s = M a_{\text{cm}}$$
  2. Rotational motion about Center of Mass:
     $$\tau_{\text{cm}} = f_s R = I_{\text{cm}} \alpha = (M k^2) \left(\frac{a_{\text{cm}}}{R}\right) \implies \mathbf{f_s = M a_{\text{cm}} \left(\frac{k^2}{R^2}\right)}$$
  3. Substituting $f_s$ into linear equation:
     $$M g \sin\theta - M a_{\text{cm}}\left(\frac{k^2}{R^2}\right) = M a_{\text{cm}} \implies M g \sin\theta = M a_{\text{cm}}\left(1 + \frac{k^2}{R^2}\right)$$
- **Master Acceleration Formula:**
  $$\mathbf{a_{\text{cm}} = \frac{g \sin\theta}{1 + \frac{k^2}{R^2}}}$$
- **Required Static Friction Force:**
  $$\mathbf{f_s = \frac{M g \sin\theta}{1 + \frac{R^2}{k^2}}}$$
- **Minimum Coefficient of Friction ($\mu_{\min}$) for Pure Rolling:**
  For rolling without slipping, $f_s \le f_{\max} = \mu_s N = \mu_s M g \cos\theta$:
  $$\frac{M g \sin\theta}{1 + \frac{R^2}{k^2}} \le \mu_s M g \cos\theta \implies \mathbf{\mu_s \ge \frac{\tan\theta}{1 + \frac{R^2}{k^2}}}$$

---

### 6.2 Velocity and Travel Time at Base of Incline
From vertical height $h$ (slant distance $s = h/\sin\theta$):
- **Linear Velocity at Base:**
  $$v = \sqrt{2 a_{\text{cm}} s} = \sqrt{2 \left(\frac{g \sin\theta}{1 + k^2/R^2}\right) \left(\frac{h}{\sin\theta}\right)} \implies \mathbf{v = \sqrt{\frac{2gh}{1 + \frac{k^2}{R^2}}}}$$
- **Time Taken to Reach Base:**
  $$t = \frac{v}{a_{\text{cm}}} = \frac{\sqrt{\frac{2gh}{1 + k^2/R^2}}}{\frac{g\sin\theta}{1 + k^2/R^2}} \implies \mathbf{t = \frac{1}{\sin\theta}\sqrt{\frac{2h}{g}\left(1 + \frac{k^2}{R^2}\right)}}$$

---

### 6.3 The Great Incline Race Ranking
Because acceleration $a \propto \frac{1}{1 + k^2/R^2}$, the body with the **SMALLEST $k^2/R^2$** accelerates fastest, achieves the greatest speed, and reaches the bottom first:

| Competing Rolling Body | Dimensionless Ratio ($k^2/R^2$) | Acceleration ($a_{\text{cm}}$) | Bottom Speed ($v$) | Race Arrival Sequence |
| :---: | :---: | :---: | :---: | :---: |
| **Solid Sphere** | $\mathbf{0.40} \ (2/5)$ | $\mathbf{0.714 \, g\sin\theta}$ | $\mathbf{1.195\sqrt{gh}}$ | **1st (WINNER / FASTEST)** |
| **Disc / Solid Cylinder** | $\mathbf{0.50} \ (1/2)$ | $\mathbf{0.667 \, g\sin\theta}$ | $\mathbf{1.155\sqrt{gh}}$ | **2nd** |
| **Hollow Sphere** | $\mathbf{0.67} \ (2/3)$ | $\mathbf{0.600 \, g\sin\theta}$ | $\mathbf{1.095\sqrt{gh}}$ | **3rd** |
| **Ring / Thin Cylindrical Shell** | $\mathbf{1.00} \ (1/1)$ | $\mathbf{0.500 \, g\sin\theta}$ | $\mathbf{1.000\sqrt{gh}}$ | **4th (LAST / SLOWEST)** |

- **CRITICAL INVARIANT:** The race outcome is **COMPLETELY INDEPENDENT OF MASS $M$ AND RADIUS $R$**! A marble of radius $1\text{ cm}$ and a bowling ball of radius $15\text{ cm}$ tie identically and both defeat any disc or hoop!

---


### 7.1 Mechanics of Normal Reaction Migration
Consider a uniform rectangular block of mass $M$, base width $b$, and height $h$ resting on a rough horizontal floor with static friction coefficient $\mu$.
A horizontal force $F$ is applied at height $y$ above the floor:
- As $F$ increases, the couple formed by $(F, f)$ produces a clockwise tipping torque:
  $$\tau_{\text{tip}} = F \cdot y$$
- To maintain static equilibrium, the normal reaction $N = M g$ **shifts forward** by distance $x$ from the centerline to create a counter-clockwise restoring torque:
  $$N \cdot x = M g \cdot x = F \cdot y \implies \mathbf{x = \frac{F y}{M g}}$$
- **Limiting Condition for Toppling:**
  The normal reaction cannot migrate beyond the leading edge ($x_{\max} = b/2$).
  When $x = b/2$, the normal reaction is concentrated entirely at the front corner, and the block is on the verge of toppling:
  $$F_{\text{topple}} \cdot y = M g \left(\frac{b}{2}\right) \implies \mathbf{F_{\text{topple}} = \frac{M g b}{2 y}}$$

---

### 7.2 The Sliding vs. Toppling Criterion
The force required to induce sliding is:
$$\mathbf{F_{\text{slide}} = f_{\max} = \mu M g}$$
Comparing $F_{\text{slide}}$ and $F_{\text{topple}}$:
9. **Condition for Sliding without Toppling ($F_{\text{slide}} < F_{\text{topple}}$):**
   $$\mu M g < \frac{M g b}{2 y} \implies \mathbf{\mu < \frac{b}{2y}}$$
   The block **SLIDES FIRST** before it can topple.
10. **Condition for Toppling without Sliding ($F_{\text{topple}} < F_{\text{slide}}$):**
   $$\frac{M g b}{2 y} < \mu M g \implies \mathbf{\mu > \frac{b}{2y}}$$
   The block **TOPPLES FIRST** before sliding.
11. **Critical Coefficient of Friction:**
   $$\mathbf{\mu_{\text{critical}} = \frac{b}{2y}}$$

---

### 7.3 Block Placed on a Tilting Rough Incline
When the incline angle $\theta$ is slowly increased:
12. **Sliding Threshold (Angle of Repose):**
   $$\mathbf{\tan\theta_{\text{slide}} = \mu}$$
13. **Toppling Threshold (Line of Action of Gravity Passes Outside Base):**
   The vertical line through the Center of Mass passes through the lowest edge when:
   $$\mathbf{\tan\theta_{\text{topple}} = \frac{b/2}{h/2} = \frac{b}{h}}$$
- **Diagnostic Rule:**
  - If $\mathbf{\mu < \frac{b}{h}}$: $\theta_{\text{slide}} < \theta_{\text{topple}} \implies$ **Block SLIDES first**.
  - If $\mathbf{\mu > \frac{b}{h}}$: $\theta_{\text{topple}} < \theta_{\text{slide}} \implies$ **Block TOPPLES first**.

---


### 8.1 Master Rigid Body Dynamics Formula Table

| Physical Law / Principle | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Parallel Axis Theorem** | $I = I_{\text{cm}} + M d^2$ | Axis must pass through COM; $I_{\text{cm}}$ is minimum |
| **Perpendicular Axis Theorem** | $I_z = I_x + I_y$ | Strictly for planar 2D laminae in $xy$-plane |
| **Cavity Inertia** | $I_{\text{rem}} = I_{\text{orig}} - I_{\text{cavity}}$ | Disc with tangent hole: $I = \frac{13}{32}MR^2$ |
| **Rotational Dynamics** | $\vec{\tau}_{\text{net}} = I\vec{\alpha} = \frac{d\vec{L}}{dt}$ | Valid about fixed axis or about accelerating COM |
| **CRTM Angular Momentum** | $\vec{L}_O = I_{\text{cm}}\vec{\omega} + \vec{r}_{\text{cm}}\times\vec{P}$ | Separates spin and orbital angular momentum |
| **Cue Ball Strike Height** | $h = \frac{2}{5}R = 0.40 R$ | Immediate pure rolling without initial friction |
| **Total Rolling Kinetic Energy** | $K = \frac{1}{2}M v_{\text{cm}}^2\left(1 + \frac{k^2}{R^2}\right)$ | Translational fraction: $1 / (1 + k^2/R^2)$ |
| **No-Slip Pure Rolling** | $v_{\text{cm}} = \omega R, \ a_{\text{cm}} = \alpha R$ | Bottom point velocity: $v_{\text{bottom}} = 0$ |
| **Velocity Vector at Angle $\theta$** | $v_P = 2 v_{\text{cm}}\sin(\theta/2)$ | Top point: $2v_{\text{cm}}$; horizontal points: $\sqrt{2}v_{\text{cm}}$ |
| **ICOR Equivalence** | $K_{\text{total}} = \frac{1}{2}I_{\text{ICOR}}\omega^2$ | Pure rotation about contact point |
| **Incline Acceleration** | $a = \frac{g\sin\theta}{1 + k^2/R^2}$ | Solid sphere ($0.714 g\sin\theta$) > Ring ($0.500 g\sin\theta$) |
| **Incline Static Friction** | $f_s = \frac{M g \sin\theta}{1 + R^2/k^2}$ | Acts UP the incline to provide clockwise torque |
| **Minimum Friction on Incline** | $\mu_{\min} = \frac{\tan\theta}{1 + R^2/k^2}$ | Ring requires $\mu \ge \frac{1}{2}\tan\theta$; Sphere $\mu \ge \frac{2}{7}\tan\theta$ |
| **Toppling Force Threshold** | $F_{\text{topple}} = \frac{M g b}{2 y}$ | Normal reaction migrates to leading edge ($x = b/2$) |
| **Sliding vs Toppling Criterion** | $\mu_{\text{crit}} = \frac{b}{2y}$ | $\mu < b/2y \implies$ slides; $\mu > b/2y \implies$ topples |
| **Incline Toppling Angle** | $\tan\theta_{\text{topple}} = \frac{b}{h}$ | Topples if $\mu > b/h$; Slides if $\mu < b/h$ |

---


#### Trap 1: The Direction of Friction in Pure Rolling
- On an **inclined plane**, gravity acts down the slope through the Center of Mass producing zero torque about COM. Static friction must act **UP the incline** to provide the necessary counter-clockwise torque $\tau = f_s R$ to spin the body!
- On a **horizontal surface**, if a horizontal force $F$ is applied through the Center of Mass, friction acts **BACKWARD** to produce forward rolling angular acceleration:
  $$f = F \frac{k^2/R^2}{1 + k^2/R^2}$$
- If $F$ is applied at the topmost point ($y = 2R$), friction acts **FORWARD**!

#### Trap 2: Misuse of the Perpendicular Axis Theorem on 3D Objects
- Students frequently attempt to calculate the moment of inertia of a sphere or solid cylinder using $I_z = I_x + I_y$.
- **THE PERPENDICULAR AXIS THEOREM IS STRICTLY FORBIDDEN FOR 3D BODIES**!
- It is valid only when all mass elements satisfy $z = 0$ (infinitesimally thin 2D planar lamina).

#### Trap 3: Work Done by Friction in Pure Rolling
- In pure rolling without slipping, the instantaneous velocity of the contact point is **strictly zero** ($v_{\text{contact}} = 0$).
- Therefore, the displacement of the point of application of static friction during contact is zero ($ds = 0$).
- **THE WORK DONE BY STATIC FRICTION IN PURE ROLLING IS EXACTLY ZERO ($W_{f_s} = 0$)**!
- Total mechanical energy is **STRICTLY CONSERVED** during pure rolling on an incline!
