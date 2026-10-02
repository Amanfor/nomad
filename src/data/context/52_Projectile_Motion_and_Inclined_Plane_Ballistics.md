# Physics Revision Context: Chapter 52 — Projectile Motion & Inclined Plane Ballistics

---

### 1.1 Vector Decomposition & Independence of Motion
A projectile is any object thrown into space with an initial velocity obliquely, influenced solely by the uniform downward gravitational acceleration $\vec{g}$:
- **Initial Velocity Vector:**
  $$\mathbf{\vec{u} = u_x \hat{i} + u_y \hat{j} = (u \cos\theta) \hat{i} + (u \sin\theta) \hat{j}}$$
  where $\theta$ is the angle of projection with the horizontal ($0 < \theta < 90^\circ$).
- **Acceleration Vector:**
  $$\mathbf{\vec{a} = a_x \hat{i} + a_y \hat{j} = 0 \hat{i} - g \hat{j}}$$
- **Principle of Independence:**
  The motion of a projectile is a superposition of two completely independent rectilinear motions:
  1. **Horizontal Motion ($x$-axis):** Uniform motion with zero acceleration ($a_x = 0$, $v_x = u\cos\theta = \text{Constant}$).
  2. **Vertical Motion ($y$-axis):** Uniformly accelerated motion under gravity ($a_y = -g$).

---

### 1.2 Kinematics Waveforms at Instant $t$
1. **Velocity Components:**
   $$v_x(t) = u \cos\theta$$
   $$v_y(t) = u \sin\theta - g t$$
   - **Instantaneous Speed ($v$):**
     $$\mathbf{v(t) = \sqrt{v_x^2 + v_y^2} = \sqrt{(u \cos\theta)^2 + (u \sin\theta - g t)^2} = \sqrt{u^2 - 2 g y}}$$
     *(Derived directly from the Work-Energy Theorem: $\frac{1}{2}m u^2 - mgy = \frac{1}{2}mv^2$).*
   - **Direction of Motion ($\alpha$):**
     $$\mathbf{\tan\alpha = \frac{v_y}{v_x} = \frac{u \sin\theta - g t}{u \cos\theta}}$$
2. **Position Coordinates:**
   $$\mathbf{x(t) = (u \cos\theta) t}$$
   $$\mathbf{y(t) = (u \sin\theta) t - \frac{1}{2} g t^2}$$
3. **At the Topmost Point (Peak of Trajectory, $y = H_{\max}$):**
   - Vertical velocity component vanishes: $\mathbf{v_y = 0}$.
   - Velocity is **strictly horizontal**: $\mathbf{\vec{v}_{\text{top}} = (u \cos\theta) \hat{i}}$.
   - Acceleration is perpendicular to velocity: $\mathbf{\vec{a} \perp \vec{v}_{\text{top}}}$.

---

### 1.3 Flight Parameters: Time of Flight, Maximum Height, & Range

<!-- image missing: media/projectile_motion_kinematics_and_trajectory_geometry.webp -->
*Description: Two-panel projectile kinematics graphic: (A) Ground-to-ground trajectory kinematics, velocity and position coordinate decompositions, time of flight ($T = 2u\sin\theta/g$), maximum height ($H_{\max} = u^2\sin^2\theta/2g$), horizontal range ($R = u^2\sin 2\theta/g$), and the fundamental geometric relation $\tan\theta = 4H/R$; (B) Complementary projection angles ($\theta$ and $90^\circ - \theta$), inter-trajectory products ($T_1 T_2 = 2R/g$, $R = 4\sqrt{H_1 H_2}$), standard parabolic path equation, and the factorized range form $y = x\tan\theta(1 - x/R)$.*

4. **Time of Flight ($T$):**
   Setting vertical displacement $y = 0$:
   $$0 = (u \sin\theta) T - \frac{1}{2} g T^2 \implies \mathbf{T = \frac{2 u \sin\theta}{g} = \frac{2 u_y}{g}}$$
   - Time of ascent ($t_a$) equals time of descent ($t_d$):
     $$\mathbf{t_a = t_d = \frac{u \sin\theta}{g} = \frac{T}{2}}$$
5. **Maximum Height Attained ($H_{\max}$):**
   Setting $v_y = 0$ in $v_y^2 = u_y^2 - 2 g H$:
   $$\mathbf{H_{\max} = \frac{u^2 \sin^2\theta}{2 g} = \frac{u_y^2}{2 g}}$$
   - **Fundamental Link Between $H$ and $T$:**
     $$T^2 = \frac{4 u^2 \sin^2\theta}{g^2} = \frac{8}{g} \left( \frac{u^2 \sin^2\theta}{2 g} \right) \implies \mathbf{H_{\max} = \frac{g T^2}{8}}$$
6. **Horizontal Range ($R$):**
   The horizontal distance traveled during the total time of flight $T$:
   $$R = u_x \cdot T = (u \cos\theta) \left( \frac{2 u \sin\theta}{g} \right) = \mathbf{\frac{u^2 \sin 2\theta}{g} = \frac{2 u_x u_y}{g}}$$
   - **Maximum Range Condition:**
     For a fixed launch speed $u$, range is maximized when $\sin 2\theta = 1 \implies 2\theta = 90^\circ \implies \mathbf{\theta = 45^\circ}$:
     $$\mathbf{R_{\max} = \frac{u^2}{g}}$$
   - **Height at Maximum Range:**
     $$\mathbf{H_{\text{at } R_{\max}} = \frac{u^2 \sin^2 45^\circ}{2 g} = \frac{u^2}{4 g} = \frac{R_{\max}}{4}}$$
   - **Fundamental Geometric Relation:**
     $$\frac{H_{\max}}{R} = \frac{\frac{u^2 \sin^2\theta}{2 g}}{\frac{2 u^2 \sin\theta \cos\theta}{g}} = \frac{\tan\theta}{4} \implies \mathbf{\tan\theta = \frac{4 H_{\max}}{R}}$$

---

### 2.1 The Complementary Angles Theorem: $\theta$ and $(90^\circ - \theta)$
Because $\sin[2(90^\circ - \theta)] = \sin(180^\circ - 2\theta) = \sin 2\theta$:
**Two projectiles launched at the same initial speed $u$ at complementary angles $\theta$ and $(90^\circ - \theta)$ have IDENTICAL horizontal ranges**:
$$\mathbf{R(\theta) = R(90^\circ - \theta)}$$
- Let subscript 1 correspond to angle $\theta$ and subscript 2 to angle $(90^\circ - \theta)$:
  1. **Ratio of Times of Flight:**
     $$\mathbf{\frac{T_1}{T_2} = \frac{\sin\theta}{\sin(90^\circ - \theta)} = \tan\theta}$$
  2. **Product of Times of Flight:**
     $$T_1 \cdot T_2 = \left(\frac{2 u \sin\theta}{g}\right)\left(\frac{2 u \cos\theta}{g}\right) = \frac{2}{g} \left(\frac{u^2 \sin 2\theta}{g}\right) \implies \mathbf{T_1 T_2 = \frac{2 R}{g} \iff R = \frac{1}{2} g T_1 T_2}$$
  3. **Ratio of Maximum Heights:**
     $$\mathbf{\frac{H_1}{H_2} = \frac{\sin^2\theta}{\cos^2\theta} = \tan^2\theta}$$
  4. **Product of Maximum Heights:**
     $$H_1 \cdot H_2 = \left(\frac{u^2 \sin^2\theta}{2 g}\right)\left(\frac{u^2 \cos^2\theta}{2 g}\right) = \frac{(u^2 \sin 2\theta / g)^2}{16} \implies \mathbf{H_1 H_2 = \frac{R^2}{16} \iff R = 4 \sqrt{H_1 H_2}}$$
  5. **Sum of Maximum Heights:**
     $$\mathbf{H_1 + H_2 = \frac{u^2 (\sin^2\theta + \cos^2\theta)}{2 g} = \frac{u^2}{2 g} = \frac{R_{\max}}{2}}$$

---

### 2.2 The Equation of Trajectory
Eliminating time $t = \frac{x}{u \cos\theta}$ from the kinematic position equations:
$$y = u \sin\theta \left(\frac{x}{u \cos\theta}\right) - \frac{1}{2} g \left(\frac{x}{u \cos\theta}\right)^2$$
7. **Standard Form:**
   $$\mathbf{y = x \tan\theta - \frac{g x^2}{2 u^2 \cos^2\theta} = x \tan\theta - \frac{g x^2}{2 u^2}(1 + \tan^2\theta)}$$
   This represents a downward-curving **Parabola** ($y = A x - B x^2$).
8. **Factorized / Range Form:**
   Factoring out $x \tan\theta$:
   $$y = x \tan\theta \left[ 1 - \frac{g x}{2 u^2 \cos^2\theta \tan\theta} \right] = x \tan\theta \left[ 1 - \frac{x}{\frac{2 u^2 \sin\theta \cos\theta}{g}} \right]$$
   $$\mathbf{y = x \tan\theta \left(1 - \frac{x}{R}\right)}$$
   - **High-Yield Application:** Given any obstacle/wall of height $y$ at distance $x$ from launch, or when finding whether a projectile clears a target, the factorized form provides instantaneous solutions without calculating intermediate time or velocity components!

---

### 3.1 Projections from a Tower of Height $h$

<!-- image missing: media/tower_projections_and_radius_of_curvature.webp -->
*Description: Two-panel tower ballistics and curvature graphic: (A) Ballistics from elevated towers, pure horizontal projection ($t = \sqrt{2h/g}, R = u\sqrt{2h/g}$), oblique projections above/below horizontal, and the Work-Energy landing speed invariance principle ($v = \sqrt{u^2 + 2gh}$); (B) Radius of curvature ($\rho = v^2/a_\perp$) across trajectories, launch curvature ($\rho_0 = u^2/g\cos\theta$), peak global minimum ($\rho_{\text{top}} = u^2\cos^2\theta/g$), and arbitrary coordinate formulations.*

9. **Pure Horizontal Projection ($u_x = u, u_y = 0$):**
   - **Time of Flight ($t$):**
     $$-h = -\frac{1}{2} g t^2 \implies \mathbf{t = \sqrt{\frac{2h}{g}}}$$
     *(Notice: Identical to the time taken by a body simply dropped from rest from the same height!).*
   - **Horizontal Range ($R$):**
     $$\mathbf{R = u_x \cdot t = u \sqrt{\frac{2h}{g}}}$$
   - **Velocity on Impact with Ground:**
     $$v_x = u, \quad v_y = -g t = -\sqrt{2gh} \implies \mathbf{v = \sqrt{u^2 + 2 g h}}$$
   - **Impact Angle with Horizontal ($\beta$):**
     $$\mathbf{\tan\beta = \frac{|v_y|}{v_x} = \frac{\sqrt{2gh}}{u}}$$
10. **Oblique Projection from Height $h$:**
   - **Fired Upward at Angle $\theta$ Above Horizontal:**
     $$-h = (u \sin\theta) t - \frac{1}{2} g t^2 \implies \mathbf{g t^2 - 2 (u \sin\theta) t - 2 h = 0}$$
   - **Fired Downward at Angle $\theta$ Below Horizontal:**
     $$-h = -(u \sin\theta) t - \frac{1}{2} g t^2 \implies \mathbf{g t^2 + 2 (u \sin\theta) t - 2 h = 0}$$
11. **The Strike Speed Invariance Principle:**
   By conservation of mechanical energy:
   $$\frac{1}{2} m u^2 + m g h = \frac{1}{2} m v^2 \implies \mathbf{v_{\text{impact}} = \sqrt{u^2 + 2 g h}}$$
   - The speed at ground impact is **STRICTLY INDEPENDENT OF LAUNCH ANGLE $\theta$**! (Whether fired upward, downward, horizontally, or obliquely, the final speed is identical!).

---

### 3.2 Radius of Curvature ($\rho$) of the Parabolic Path
The radius of curvature of a trajectory at any point is defined as the radius of the osculating circle touching the curve at that point:
$$\mathbf{\rho = \frac{v^2}{a_\perp}}$$
where $v$ is the instantaneous speed, and $a_\perp$ is the normal component of acceleration perpendicular to the instantaneous velocity vector.

12. **At the Point of Projection ($t = 0$):**
   - Instantaneous speed: $v = u$.
   - Velocity is at angle $\theta$ with horizontal; gravity $\vec{g}$ is directed downward.
   - Angle between velocity and gravity is $90^\circ + \theta \implies a_\perp = g \cos\theta$.
   $$\mathbf{\rho_0 = \frac{u^2}{g \cos\theta}}$$
13. **At the Topmost Point (Peak, $y = H_{\max}$):**
   - Instantaneous speed is purely horizontal: $v_{\text{top}} = u \cos\theta$.
   - Acceleration is purely vertical: $a_\perp = g$.
   $$\mathbf{\rho_{\text{top}} = \frac{(u \cos\theta)^2}{g} = \frac{u^2 \cos^2\theta}{g}}$$
   - **GLOBAL MINIMUM:** Because speed is minimum and normal acceleration is maximum ($a_\perp = g$), the radius of curvature is **SMALLEST (curvature is sharpest)** at the peak of trajectory!
14. **At Any Arbitrary Point where Velocity Makes Angle $\alpha$ with Horizontal:**
   - Horizontal velocity invariance: $v \cos\alpha = u \cos\theta \implies v = \frac{u \cos\theta}{\cos\alpha}$.
   - Normal acceleration: $a_\perp = g \cos\alpha$.
   $$\mathbf{\rho(\alpha) = \frac{v^2}{a_\perp} = \frac{\left(\frac{u \cos\theta}{\cos\alpha}\right)^2}{g \cos\alpha} = \frac{u^2 \cos^2\theta}{g \cos^3\alpha}}$$

---

### 4.1 Coordinate Decomposition on an Incline

<!-- image missing: media/inclined_plane_projectile_dynamics_and_optimal_angles.webp -->
*Description: Two-panel inclined plane ballistics graphic: (A) Projectile motion up an inclined plane (incline angle $\beta$, launch angle $\alpha$), coordinate acceleration components ($a_x = -g\sin\beta, a_y = -g\cos\beta$), time of flight ($T = 2u\sin\alpha/g\cos\beta$), range formula, and optimal launch angle for maximum range ($\alpha = 45^\circ - \beta/2$); (B) Projectile motion down an inclined plane, optimal launch angle ($\alpha = 45^\circ + \beta/2$), and the perpendicular landing condition $\cot\alpha = 2\tan\beta$.*

Let the inclined plane make angle $\beta$ with the horizontal. A particle is projected from the incline with speed $u$ at angle $\alpha$ **measured relative to the incline**:
- Choose the $x$-axis **along the incline** and the $y$-axis **perpendicular to the incline**:
  - Initial velocity: $\mathbf{u_x = u \cos\alpha, \quad u_y = u \sin\alpha}$
  - Acceleration components: $\mathbf{a_x = \mp g \sin\beta, \quad a_y = -g \cos\beta}$
    *(Negative $a_x$ for motion UP the incline; Positive $a_x$ for motion DOWN the incline).*

---

### 4.2 Projectile Fired UP the Incline
15. **Time of Flight ($T$):**
   Setting displacement perpendicular to incline $y = 0$:
   $$0 = (u \sin\alpha) T - \frac{1}{2} (g \cos\beta) T^2 \implies \mathbf{T = \frac{2 u \sin\alpha}{g \cos\beta}}$$
16. **Maximum Height Above Incline ($H$):**
   $$\mathbf{H = \frac{u^2 \sin^2\alpha}{2 g \cos\beta}}$$
17. **Range Along the Incline ($R_{\text{up}}$):**
   $$R_{\text{up}} = u_x T - \frac{1}{2} (g \sin\beta) T^2 = (u \cos\alpha) \left(\frac{2 u \sin\alpha}{g \cos\beta}\right) - \frac{1}{2} g \sin\beta \left(\frac{2 u \sin\alpha}{g \cos\beta}\right)^2$$
   $$\mathbf{R_{\text{up}} = \frac{u^2}{g \cos^2\beta} \left[ \sin(2\alpha + \beta) - \sin\beta \right]}$$
18. **Condition for Maximum Range UP the Incline:**
   To maximize $R_{\text{up}}$, maximize $\sin(2\alpha + \beta) \implies 2\alpha + \beta = 90^\circ$:
   $$\mathbf{\alpha = 45^\circ - \frac{\beta}{2} = \frac{\pi}{4} - \frac{\beta}{2}}$$
   - **Maximum Range Value:**
     $$R_{\text{up, max}} = \frac{u^2}{g \cos^2\beta} [1 - \sin\beta] = \frac{u^2 (1 - \sin\beta)}{g (1 - \sin^2\beta)} \implies \mathbf{R_{\text{up, max}} = \frac{u^2}{g (1 + \sin\beta)}}$$

---

### 4.3 Projectile Fired DOWN the Incline
19. **Range Along Incline Downhill ($R_{\text{down}}$):**
   $$a_x = +g \sin\beta, \quad a_y = -g \cos\beta$$
   $$\mathbf{R_{\text{down}} = \frac{u^2}{g \cos^2\beta} \left[ \sin(2\alpha - \beta) + \sin\beta \right]}$$
20. **Condition for Maximum Range DOWN the Incline:**
   $$\sin(2\alpha - \beta) = 1 \implies 2\alpha - \beta = 90^\circ \implies \mathbf{\alpha = 45^\circ + \frac{\beta}{2}}$$
   - **Maximum Downhill Range Value:**
     $$\mathbf{R_{\text{down, max}} = \frac{u^2}{g (1 - \sin\beta)}}$$
   - **Comparison:** Since $1 - \sin\beta < 1 + \sin\beta$, **$R_{\text{down, max}} > R_{\text{up, max}}$** for any incline angle $\beta > 0^\circ$!

---

### 4.4 Condition to Strike the Incline Perpendicularly
When the projectile strikes the incline at time $T$, its velocity component parallel to the incline must be identically zero:
$$\mathbf{v_x(T) = 0}$$
$$u \cos\alpha - (g \sin\beta) T = 0$$
Substitute $T = \frac{2 u \sin\alpha}{g \cos\beta}$:
$$u \cos\alpha = g \sin\beta \left( \frac{2 u \sin\alpha}{g \cos\beta} \right) = 2 u \sin\alpha \tan\beta$$
$$\cos\alpha = 2 \sin\alpha \tan\beta \implies \frac{1}{\tan\alpha} = 2 \tan\beta$$
$$\mathbf{\cot\alpha = 2 \tan\beta \iff \tan\alpha = \frac{1}{2} \cot\beta}$$
- **CRITICAL THEOREM:** To strike an inclined plane of slope $\beta$ at an exact right angle ($90^\circ$), the launch angle $\alpha$ relative to the incline must satisfy $\tan\alpha = \frac{1}{2}\cot\beta$!

---

### 5.1 Master Projectile Motion Formula Table

| Physical Quantity / Case | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Time of Flight** | $T = \frac{2 u \sin\theta}{g}$ | $t_a = t_d = T/2$ |
| **Maximum Height** | $H_{\max} = \frac{u^2 \sin^2\theta}{2 g} = \frac{g T^2}{8}$ | $v_y = 0$ at peak |
| **Horizontal Range** | $R = \frac{u^2 \sin 2\theta}{g} = \frac{2 u_x u_y}{g}$ | Max at $\theta = 45^\circ \implies R_{\max} = u^2/g$ |
| **Geometric Relation** | $\tan\theta = \frac{4 H_{\max}}{R}$ | Connects launch angle, height, range |
| **Complementary Heights Product** | $R = 4 \sqrt{H_1 H_2}$ | For angles $\theta$ and $90^\circ - \theta$ |
| **Complementary Times Product** | $R = \frac{1}{2} g T_1 T_2$ | For angles $\theta$ and $90^\circ - \theta$ |
| **Factorized Trajectory Form** | $y = x \tan\theta \left(1 - \frac{x}{R}\right)$ | Clearance over walls/coordinates |
| **Standard Trajectory Form** | $y = x\tan\theta - \frac{gx^2}{2u^2}(1+\tan^2\theta)$ | Quadratic in $\tan\theta$ |
| **Horizontal Tower Range** | $R = u \sqrt{\frac{2h}{g}}$ | $t = \sqrt{2h/g}$ |
| **Tower Landing Speed** | $v = \sqrt{u^2 + 2 g h}$ | Independent of launch angle $\theta$ |
| **Radius of Curvature at Launch** | $\rho_0 = \frac{u^2}{g \cos\theta}$ | Normal acceleration $a_\perp = g\cos\theta$ |
| **Radius of Curvature at Peak** | $\rho_{\text{top}} = \frac{u^2 \cos^2\theta}{g}$ | Global minimum of curvature radius |
| **Arbitrary Radius of Curvature** | $\rho(\alpha) = \frac{u^2 \cos^2\theta}{g \cos^3\alpha}$ | When velocity is at angle $\alpha$ |
| **Flight Time Up Incline** | $T = \frac{2 u \sin\alpha}{g \cos\beta}$ | $\alpha$ relative to incline $\beta$ |
| **Optimal Launch Angle Up Incline** | $\alpha = 45^\circ - \frac{\beta}{2}$ | Yields $R_{\text{up, max}} = \frac{u^2}{g(1 + \sin\beta)}$ |
| **Optimal Launch Angle Down Incline** | $\alpha = 45^\circ + \frac{\beta}{2}$ | Yields $R_{\text{down, max}} = \frac{u^2}{g(1 - \sin\beta)}$ |
| **Perpendicular Incline Landing** | $\tan\alpha = \frac{1}{2} \cot\beta$ | $v_x = 0$ along the incline |

---

#### Trap 1: The Angle of Projection on an Incline Confusion
- **The Error:** Confusing angle of projection relative to the incline ($\alpha$) with angle relative to the horizontal ($\theta$).
- **The Physics:** The formulas $T = \frac{2u\sin\alpha}{g\cos\beta}$ and $R_{\text{up}} = \frac{u^2}{g\cos^2\beta}[\sin(2\alpha+\beta) - \sin\beta]$ require $\alpha$ to be measured **from the incline surface**.
- If a problem states "projected at angle $\theta$ with the horizontal", you must substitute $\alpha = \theta - \beta$!

#### Trap 2: Velocity at Maximum Height is NOT Zero
- **The Error:** Stating that at maximum height, projectile velocity is zero ($v = 0$).
- **The Physics:** Only the **vertical velocity component vanishes** ($v_y = 0$). The horizontal velocity component remains unchanged throughout the entire flight:
  $$\vec{v}_{\text{top}} = (u \cos\theta) \hat{i} \ne 0$$
- Kinetic energy at maximum height is $K_{\text{top}} = \frac{1}{2}m(u\cos\theta)^2 = K_0 \cos^2\theta > 0$.

#### Trap 3: Tower Launch Angle Impact Speed Fallacy
- **The Error:** Assuming a stone thrown downward from a tower strikes the ground faster than one thrown upward at the same speed.
- **The Physics:** Neglecting air resistance, mechanical energy is conserved:
  $$\frac{1}{2}m u^2 + mgh = \frac{1}{2}mv^2 \implies v = \sqrt{u^2 + 2gh}$$
- Both stones strike the ground with the **exact same speed**! (The stone thrown downward strikes sooner, but at identical speed).

#### Trap 4: Radius of Curvature Inversion
- **The Error:** Writing $\rho = \frac{v^2}{g}$ at the launch point.
- **The Physics:** The normal acceleration $a_\perp$ is the component of acceleration **perpendicular to the velocity vector**.
- At launch, $\vec{v}$ is tilted at angle $\theta$, so $a_\perp = g\cos\theta$, yielding $\rho_0 = \frac{u^2}{g\cos\theta}$. Only at the peak is $\vec{v}$ horizontal, making $a_\perp = g$ and $\rho_{\text{top}} = \frac{u^2\cos^2\theta}{g}$.
