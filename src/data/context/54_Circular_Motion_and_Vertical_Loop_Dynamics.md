# Physics Revision Context: Chapter 54 — Circular Motion & Vertical Loop Dynamics

---


### 1.1 Angular Variables & The Commutativity Principle
1. **Angular Position ($\theta$):** The angle made by the position vector $\vec{r}$ of a particle with a chosen reference axis (measured in radians).
2. **Angular Displacement ($\Delta\theta$):**
   - **Infinitesimal Angular Displacement ($d\vec{\theta}$):** A true **axial vector** directed along the axis of rotation given by the Right-Hand Thumb Rule.
   - **Finite Angular Displacement ($\Delta\theta$):** Does **NOT obey the commutative law of vector addition** ($\Delta\theta_1 + \Delta\theta_2 \ne \Delta\theta_2 + \Delta\theta_1$); therefore, finite angular displacement is a **SCALAR QUANTITY**!
3. **Angular Velocity ($\vec{\omega}$):**
   $$\mathbf{\vec{\omega} = \lim_{\Delta t \to 0} \frac{\Delta\vec{\theta}}{\Delta t} = \frac{d\vec{\theta}}{dt}}$$
   - Dimension: $[T^{-1}]$; SI Unit: $\text{rad/s}$. An axial vector along the axis of rotation.
4. **Angular Acceleration ($\vec{\alpha}$):**
   $$\mathbf{\vec{\alpha} = \frac{d\vec{\omega}}{dt} = \frac{d^2\vec{\theta}}{dt^2} = \omega \frac{d\omega}{d\theta}}$$

---

### 1.2 Linear-Angular Relations & Acceleration Decomposition

<!-- image missing: media/circular_motion_kinematics_and_acceleration_vectors.webp -->
*Description: Two-panel circular motion graphic: (A) Kinematics of circular motion, vector cross products ($\vec{v} = \vec{\omega}\times\vec{r}$), radial/centripetal acceleration ($a_c = v^2/r = \omega^2 r$), tangential acceleration ($a_t = \alpha r = dv/dt$), resultant acceleration ($a_{\text{net}} = \sqrt{a_c^2 + a_t^2}$), and uniform vs non-uniform motion; (B) Relative angular velocity formulations ($\omega_{B/A} = v_{B/A,\perp}/r_{AB}$, center vs circumference theorem $\omega_{\text{circumference}} = \frac{1}{2}\omega_{\text{center}}$), and conical pendulum dynamics.*

Let a particle move in a circle of radius $r$ centered at origin $O$:
- **Linear Velocity Vector:**
  $$\mathbf{\vec{v} = \vec{\omega} \times \vec{r} \implies v = \omega r}$$
- **Total Linear Acceleration ($\vec{a}$):**
  Differentiating $\vec{v} = \vec{\omega} \times \vec{r}$ with respect to time:
  $$\vec{a} = \frac{d\vec{v}}{dt} = \left(\frac{d\vec{\omega}}{dt} \times \vec{r}\right) + \left(\vec{\omega} \times \frac{d\vec{r}}{dt}\right) = (\vec{\alpha} \times \vec{r}) + (\vec{\omega} \times \vec{v})$$
  $$\mathbf{\vec{a} = \vec{a}_t + \vec{a}_c}$$
  1. **Centripetal / Radial Acceleration ($\vec{a}_c$):**
     $$\mathbf{a_c = \frac{v^2}{r} = \omega^2 r = v \omega}$$
     - Directed strictly **radially inward toward the center**.
     - Exists in all circular motion; responsible **solely for changing the direction of velocity**!
  2. **Tangential Acceleration ($\vec{a}_t$):**
     $$\mathbf{a_t = \frac{d|v|}{dt} = \alpha r}$$
     - Directed along the instantaneous tangent to the trajectory.
     - Responsible **solely for changing the speed (magnitude of velocity)**!
- **Net Acceleration Magnitude & Direction:**
  Because $\vec{a}_c \perp \vec{a}_t$:
  $$\mathbf{a_{\text{net}} = \sqrt{a_c^2 + a_t^2} = \sqrt{\left(\frac{v^2}{r}\right)^2 + (\alpha r)^2}}$$
  $$\mathbf{\tan\phi = \frac{a_c}{a_t} \quad \text{or} \quad \tan\psi = \frac{a_t}{a_c}}$$
  - **Uniform Circular Motion (UCM):** Speed $v = \text{const} \implies \alpha = 0, a_t = 0 \implies a_{\text{net}} = a_c = \frac{v^2}{r}$.
  - **Non-Uniform Circular Motion (NUCM):** Speed varies $\implies a_t \ne 0$.

---

### 1.3 Relative Angular Velocity
The angular velocity of particle $B$ with respect to particle $A$ is the rate at which the position vector of $B$ relative to $A$ rotates:
$$\mathbf{\omega_{B/A} = \frac{v_{B/A, \perp}}{r_{AB}} = \frac{(\vec{v}_B - \vec{v}_A) \cdot \hat{n}}{|\vec{r}_B - \vec{r}_A|}}$$
where $v_{B/A, \perp}$ is the component of relative velocity perpendicular to the line joining $A$ and $B$.
- **Center vs. Circumference Theorem:**
  If a particle moves on a circle of radius $R$ with angular speed $\omega_O$ about its center $O$:
  Its angular velocity with respect to any fixed point $A$ on the circumference is:
  $$\mathbf{\omega_A = \frac{1}{2} \omega_O}$$
  *(Because the angle subtended by an arc at the center is double the angle subtended at any point on the circumference: $\theta_O = 2 \theta_A \implies \frac{d\theta_O}{dt} = 2 \frac{d\theta_A}{dt}$).*

---


### 2.1 Centripetal Force vs. Centrifugal Pseudo Force
- **Centripetal Force ($F_c$):**
  To maintain circular motion, the net real physical force along the inward normal must equal $m a_c$:
  $$\mathbf{F_c = m a_c = \frac{m v^2}{r} = m \omega^2 r}$$
  - Centripetal force is **NOT a new fundamental force of nature**; it must be supplied by real physical forces (string tension, gravity, normal reaction, friction, electrostatic attraction, etc.).
- **Centrifugal Force ($\vec{F}_{\text{cf}}$):**
  In a reference frame rotating with angular velocity $\vec{\omega}$, an object experiences an outward pseudo force:
  $$\mathbf{\vec{F}_{\text{cf}} = m \omega^2 \vec{r}}$$
  - Directed **radially outward from the axis of rotation**. Exists **only in non-inertial rotating frames**!

---

### 2.2 The Conical Pendulum
A small bob of mass $m$ attached to a light string of length $L$ rotating in a horizontal circle of radius $r = L\sin\theta$ with constant angular speed $\omega$:
- Resolving forces in the vertical and radial directions:
  $$T \cos\theta = mg$$
  $$T \sin\theta = m \omega^2 r = m \omega^2 (L \sin\theta)$$
- **Angular Speed of Rotation ($\omega$):**
  Dividing equations:
  $$\tan\theta = \frac{\omega^2 r}{g} = \frac{v^2}{r g} \implies \mathbf{\omega = \sqrt{\frac{g}{L \cos\theta}} = \sqrt{\frac{g}{h}}}$$
  where $h = L\cos\theta$ is the vertical depth of the bob below the pivot.
- **Time Period of Conical Pendulum ($T_p$):**
  $$\mathbf{T_p = \frac{2\pi}{\omega} = 2\pi \sqrt{\frac{L \cos\theta}{g}} = 2\pi \sqrt{\frac{h}{g}}}$$
- **String Tension ($T$):**
  $$\mathbf{T = \frac{mg}{\cos\theta} = mg \sec\theta > mg}$$

---


### 3.1 Turning on Flat vs. Frictionless Banked Roads

<!-- image missing: media/banking_of_roads_and_vehicle_turning_dynamics.webp -->
*Description: Two-panel vehicle turning and banking graphic: (A) Unbanked flat rough curve turning ($v_{\max} = \sqrt{\mu_s rg}$), cyclist leaning balance ($\tan\theta = v^2/rg$), and frictionless banked road optimum speed ($v_0 = \sqrt{rg\tan\theta}$); (B) Rough banked road velocity bounds ($v_{\min} = \sqrt{rg\tan(\theta-\lambda)}$ to $v_{\max} = \sqrt{rg\tan(\theta+\lambda)}$), four-wheeler overturning speed ($v_{\text{overturn}} = \sqrt{grd/2h}$), and Rotor / Death Well mechanics ($\omega_{\min} = \sqrt{g/\mu_s R}$).*

5. **Unbanked (Level) Rough Road:**
   On a flat curve of radius $r$, centripetal acceleration must be supplied entirely by static friction:
   $$\frac{m v^2}{r} = f_s \le f_{s, \max} = \mu_s N = \mu_s mg$$
   $$\mathbf{v \le \sqrt{\mu_s r g} \implies v_{\max} = \sqrt{\mu_s r g}}$$
   - **Cyclist Leaning on a Level Curve:**
     To prevent toppling torque about the center of mass, a cyclist leans inward at angle $\theta$ with the vertical:
     $$\mathbf{\tan\theta = \frac{v^2}{r g} \le \mu_s}$$
6. **Frictionless Banked Road (Optimum / Rated Speed $v_0$):**
   By raising the outer edge of the road at banking angle $\theta$:
   $$N \sin\theta = \frac{m v_0^2}{r}$$
   $$N \cos\theta = mg$$
   $$\mathbf{\tan\theta = \frac{v_0^2}{r g} \iff v_0 = \sqrt{r g \tan\theta}}$$
   - At the rated speed $v_0$, **zero lateral friction is required** from the tyres, preventing tyre wear and skidding!
   - Normal force at rated speed: $\mathbf{N = \frac{mg}{\cos\theta} = mg \sqrt{1 + \tan^2\theta}}$.

---

### 3.2 Rough Banked Roads: Safe Velocity Bounds
When friction coefficient $\mu_s > 0$ exists on a road banked at angle $\theta$:
7. **Maximum Safe Speed Without Skidding Upwards ($v_{\max}$):**
   At speeds $v > v_0$, the car tends to skid up the incline; static friction $f_s = \mu_s N$ acts **down the incline**:
   $$\mathbf{v_{\max} = \sqrt{r g \left( \frac{\tan\theta + \mu_s}{1 - \mu_s \tan\theta} \right)} = \sqrt{r g \tan(\theta + \lambda)}}$$
   where $\lambda = \tan^{-1}\mu_s$ is the angle of friction.
8. **Minimum Safe Speed Without Slipping Downwards ($v_{\min}$):**
   At speeds $v < v_0$, the car tends to slide down the incline; static friction $f_s = \mu_s N$ acts **up the incline**:
   $$\mathbf{v_{\min} = \sqrt{r g \left( \frac{\tan\theta - \mu_s}{1 + \mu_s \tan\theta} \right)} = \sqrt{r g \tan(\theta - \lambda)}}$$
   - **Critical Condition:** If $\tan\theta \le \mu_s$, a car can park stationary on the banked incline without sliding down $\implies \mathbf{v_{\min} = 0}$!

---

### 3.3 Overturning of Vehicles & Rotor (Death Well) Mechanics
9. **Overturning of a Four-Wheeler on Flat Curve:**
   Let wheel track width be $d$, height of center of mass be $h$, and curve radius be $r$:
   Taking torque about the center of mass, the normal reaction on the inner wheels drops to zero first ($N_{\text{inner}} = 0$):
   $$\mathbf{v_{\text{overturn}} = \sqrt{\frac{g r d}{2 h}}}$$
   - **Skidding vs. Toppling Condition:**
     - The vehicle **skids before overturning** if: $\mathbf{\mu_s < \frac{d}{2h}}$.
     - The vehicle **overturns before skidding** if: $\mathbf{\mu_s > \frac{d}{2h}}$.
10. **Rotor / Death Well Dynamics:**
   A rider of mass $m$ moving inside a vertical cylindrical wall of radius $R$:
   Normal reaction provides centripetal force: $N = m \omega^2 R = \frac{m v^2}{R}$.
   Vertical static friction balances gravity: $f_s = \mu_s N \ge mg$.
   $$\mu_s (m \omega^2 R) \ge mg \implies \mathbf{\omega_{\min} = \sqrt{\frac{g}{\mu_s R}} \iff v_{\min} = \sqrt{\frac{g R}{\mu_s}}}$$

---


### 4.1 Inextensible String Vertical Loop Mechanics

<!-- image missing: media/vertical_circular_motion_and_critical_loop_boundaries.webp -->
*Description: Two-panel vertical circular motion graphic: (A) String-tied vertical loop dynamics, tension angular formulation ($T = mv^2/R + mg\cos\theta$), critical looping triad ($v_L \ge \sqrt{5gR}, v_M \ge \sqrt{3gR}, v_T \ge \sqrt{gR}$), universal tension difference invariant ($T_L - T_T = 6mg$), and three kinematic regimes (oscillation, slacking projectile flight, complete loop); (B) Massless rigid rod vertical circular motion ($v_T \ge 0 \implies v_L \ge \sqrt{4gR}$), and detachment criteria from a smooth spherical surface ($N = 0 \implies \cos\theta = 2/3, h = R/3$).*

Consider a particle of mass $m$ tied to an inextensible light string of length $R$ whirled in a vertical circle:
Let $\theta$ be the angle made by the string with the downward vertical (so $\theta = 0^\circ$ at the bottom, $\theta = 180^\circ$ at the top):
- **Radial Force Equation:**
  $$T - mg\cos\theta = \frac{m v^2}{R} \implies \mathbf{T(\theta) = \frac{m v^2}{R} + mg\cos\theta}$$
- **Conservation of Mechanical Energy:**
  Taking the lowest point as reference potential energy ($U = 0$):
  $$\frac{1}{2} m u^2 = \frac{1}{2} m v^2 + mgR(1 - \cos\theta) \implies \mathbf{v^2 = u^2 - 2 g R (1 - \cos\theta)}$$

---

### 4.2 Boundary Tensions & The Universal Invariant
11. **At Lowest Point ($L$, $\theta = 0^\circ$, $v = u$):**
   $$\mathbf{T_L = \frac{m u^2}{R} + mg}$$
12. **At Horizontal Level ($M$, $\theta = 90^\circ$, $v_M^2 = u^2 - 2gR$):**
   $$\mathbf{T_M = \frac{m v_M^2}{R} = \frac{m u^2}{R} - 2 mg}$$
13. **At Highest Point ($T$, $\theta = 180^\circ$, $v_T^2 = u^2 - 4gR$):**
   $$\mathbf{T_T = \frac{m v_T^2}{R} - mg}$$
14. **The Universal Tension Difference Theorem:**
   $$T_L - T_T = \left(\frac{m u^2}{R} + mg\right) - \left(\frac{m v_T^2}{R} - mg\right) = \frac{m}{R}(u^2 - v_T^2) + 2 mg$$
   Since $u^2 - v_T^2 = 4 g R$:
   $$\mathbf{T_L - T_T = \frac{m}{R}(4 g R) + 2 mg = 6 mg}$$
   - **UNIVERSAL INVARIANT:** The tension difference between bottom and top is **ALWAYS EXACTLY $6 mg$**, completely independent of the launch speed $u$ (provided the string remains taut)!

---

### 4.3 Critical Looping Speeds & Three Kinematic Regimes
To complete a full circular loop, the string must **not slack anywhere**, especially at the topmost point ($T_T \ge 0$):
$$T_T \ge 0 \implies \frac{m v_T^2}{R} - mg \ge 0 \implies \mathbf{v_T \ge \sqrt{g R}}$$
- **The Critical Looping Triad (String):**
  - **At Bottom (Lowest Point $L$):** $\mathbf{v_L \ge \sqrt{5 g R}}$
  - **At Horizontal Position ($M$):** $\mathbf{v_M \ge \sqrt{3 g R}}$
  - **At Top (Highest Point $T$):** $\mathbf{v_T \ge \sqrt{g R}}$
  - **Critical Tension at Bottom:** $\mathbf{T_L = 6 mg}$

- **The Three Dynamic Regimes Based on Launch Speed $u$:**
  1. **Regime 1: Oscillation in Lower Semicircle ($0 < u \le \sqrt{2 g R}$):**
     - Velocity vanishes ($v = 0$) at angle $\theta \le 90^\circ$ where $T = mg\cos\theta > 0$.
     - The string **never slacks**; the body oscillates back and forth like a simple pendulum.
  2. **Regime 2: Slacking & Projectile Flight ($\sqrt{2 g R} < u < \sqrt{5 g R}$):**
     - Tension vanishes ($T = 0$) in the upper semicircle ($90^\circ < \theta < 180^\circ$) while velocity is still non-zero ($v > 0$).
     - The string slacks; the particle **leaves the circular track and follows a parabolic projectile trajectory** until the string becomes taut again!
  3. **Regime 3: Full Vertical Loop ($u \ge \sqrt{5 g R}$):**
     - Tension remains strictly positive throughout the entire circle ($T > 0$ everywhere); the body completes full circular revolution.

---

### 4.4 Massless Rigid Rod vs. Flexible String
When a particle of mass $m$ is attached to a **light rigid rod** of length $R$:
- The rigid rod can support **compressive thrust ($T < 0$)** as well as tension; therefore, the rod **CANNOT SLACK**!
- **Looping Condition for Rigid Rod:**
  The particle only needs non-zero speed at the top to clear the apex:
  $$\mathbf{v_T \ge 0}$$
  By conservation of energy:
  $$v_L^2 = v_T^2 + 2 g (2 R) = 0 + 4 g R \implies \mathbf{v_L \ge \sqrt{4 g R} = 2 \sqrt{g R}}$$
  - **Critical Triad for Rigid Rod:**
    - Bottom: $\mathbf{v_L \ge 2\sqrt{gR}}$ *(vs. $\sqrt{5gR}$ for string)*.
    - Horizontal: $\mathbf{v_M \ge \sqrt{2gR}}$ *(vs. $\sqrt{3gR}$ for string)*.
    - Top: $\mathbf{v_T \ge 0}$ *(vs. $\sqrt{gR}$ for string)*.

---

### 4.5 Detachment from a Smooth Spherical Surface
Consider a particle placed at the apex of a smooth spherical surface of radius $R$ and gently nudged:
- At angle $\theta$ from the vertical apex:
  $$v^2 = 2 g R (1 - \cos\theta)$$
  $$mg\cos\theta - N = \frac{m v^2}{R} = 2 mg (1 - \cos\theta)$$
  $$N = mg(3 \cos\theta - 2)$$
- **Condition for Detachment ($N = 0$):**
  $$3 \cos\theta - 2 = 0 \implies \mathbf{\cos\theta = \frac{2}{3} \iff \theta = \cos^{-1}\left(\frac{2}{3}\right) \approx 48.2^\circ}$$
  - **Vertical Height Fallen Before Leaving Surface:**
    $$\mathbf{h = R (1 - \cos\theta) = \frac{R}{3}}$$
  - **Speed at Point of Detachment:**
    $$\mathbf{v_{\text{detach}} = \sqrt{2 g R \left(1 - \frac{2}{3}\right)} = \sqrt{\frac{2 g R}{3}}}$$

---


### 5.1 Master Circular Motion Formula Table

| Physical Quantity / Phenomenon | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Linear-Angular Mapping** | $v = \omega r, \ a_t = \alpha r$ | Tangential components |
| **Centripetal Acceleration** | $a_c = \frac{v^2}{r} = \omega^2 r = v\omega$ | Direction change, always inward |
| **Total Linear Acceleration** | $a_{\text{net}} = \sqrt{a_c^2 + a_t^2}$ | $\tan\phi = a_c/a_t$ with tangent |
| **Relative Angular Velocity** | $\omega_{B/A} = \frac{v_{B/A, \perp}}{r_{AB}}$ | Distance and perpendicular velocity |
| **Circumference-Center Theorem** | $\omega_{\text{circumference}} = \frac{1}{2}\omega_{\text{center}}$ | Angle subtended by arc |
| **Conical Pendulum Angular Speed** | $\omega = \sqrt{\frac{g}{L\cos\theta}} = \sqrt{\frac{g}{h}}$ | Semi-angle $\theta$, depth $h$ |
| **Conical Pendulum Period** | $T_p = 2\pi\sqrt{\frac{L\cos\theta}{g}}$ | String tension $T = mg/\cos\theta$ |
| **Flat Curve Maximum Speed** | $v_{\max} = \sqrt{\mu_s r g}$ | Friction provides $F_c$ |
| **Rated Banking Speed** | $v_0 = \sqrt{r g \tan\theta}$ | Frictionless equilibrium |
| **Rough Banked Maximum Speed** | $v_{\max} = \sqrt{r g \tan(\theta + \lambda)}$ | Friction acts down incline |
| **Rough Banked Minimum Speed** | $v_{\min} = \sqrt{r g \tan(\theta - \lambda)}$ | Friction acts up incline |
| **Four-Wheeler Overturning Speed** | $v_{\text{overturn}} = \sqrt{\frac{g r d}{2 h}}$ | $N_{\text{inner}} = 0$, track $d$, COM height $h$ |
| **Death Well Minimum Speed** | $v_{\min} = \sqrt{\frac{g R}{\mu_s}}, \ \omega_{\min} = \sqrt{\frac{g}{\mu_s R}}$ | Friction balances gravity |
| **VCM String Tension** | $T(\theta) = \frac{mv^2}{R} + mg\cos\theta$ | $\theta$ from bottom |
| **Universal Tension Difference** | $T_L - T_T = 6 mg$ | Independent of initial speed |
| **Critical Looping Speed (String)** | $v_L = \sqrt{5gR}, \ v_T = \sqrt{gR}$ | Top tension $T_T \ge 0$ |
| **Critical Looping Speed (Rod)** | $v_L = 2\sqrt{gR}, \ v_T = 0$ | Top speed $v_T \ge 0$ |
| **Sphere Detachment Angle** | $\cos\theta = \frac{2}{3} \implies h = \frac{R}{3}$ | Normal reaction $N = 0$ |

---


#### Trap 1: The Centripetal Force "Additional Force" Fallacy
- **The Error:** Drawing centripetal force as an extra independent vector in a Free Body Diagram alongside gravity, tension, or friction.
- **The Physics:** Centripetal force is **NOT an extra force**; it is the **name given to the net real force along the radial direction**:
  $$\sum \vec{F}_{\text{radial}} = \frac{m v^2}{r}$$
  Adding an extra $mv^2/r$ force vector in an inertial frame FBD results in double-counting!

#### Trap 2: Minimum Speed on Banked Road Fallacy
- **The Error:** Assuming a car will always slide down a banked road if its speed falls below $v_0 = \sqrt{rg\tan\theta}$.
- **The Physics:** The rated speed $v_0$ is for **zero friction**. On a real rough road, static friction acts upward along the slope. As long as $\tan\theta \le \mu_s$, static friction can hold the car at rest without slipping down, so **$v_{\min} = 0$**!

#### Trap 3: String Slacking vs. Velocity Vanishing in VCM
- **The Error:** Believing that when $u < \sqrt{5gR}$, the particle comes to rest at the top of its flight.
- **The Physics:** In the upper semicircle ($90^\circ < \theta < 180^\circ$), tension $T$ reaches zero **BEFORE velocity $v$ reaches zero**.
- Once $T = 0$, the particle leaves the circle with velocity $\vec{v}$ at angle $\theta$ and enters **free parabolic projectile motion under gravity**, NOT circular motion!

#### Trap 4: String vs. Rod Looping Threshold
- **The Error:** Using $v_L = \sqrt{5gR}$ for a mass attached to a light rigid rod or a bead inside a vertical circular tube.
- **The Physics:** A flexible string slacks when $T = 0$, requiring $v_T \ge \sqrt{gR}$ and thus $v_L \ge \sqrt{5gR}$.
- A rigid rod or tubular track can exert compressive normal forces, preventing slacking. The mass only needs $v_T \ge 0$ at the summit, requiring only **$v_L \ge 2\sqrt{gR} = \sqrt{4gR}$**!
