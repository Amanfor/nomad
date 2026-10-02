# Physics Revision Context: Chapter 51 — Kinematics: Rectilinear & Relative Motion

---


### 1.1 Distance vs. Displacement
- **Distance ($s$):** The total actual path length traversed by a particle during a time interval $\Delta t$. It is a scalar quantity, intrinsically non-negative ($s \ge 0$), and strictly non-decreasing over time ($ds/dt \ge 0$).
- **Displacement ($\Delta \vec{r}$):** The shortest straight-line directed vector connecting the initial position $\vec{r}_i$ to the final position $\vec{r}_f$:
  $$\mathbf{\Delta \vec{r} = \vec{r}_f - \vec{r}_i = \Delta x \hat{i} + \Delta y \hat{j} + \Delta z \hat{k}}$$
- **Fundamental Geometric Inequality:**
  $$\mathbf{\text{Distance} \ge |\text{Displacement}| \iff s \ge |\Delta \vec{r}|}$$
  - The equality holds **if and only if** the particle moves along a strictly straight line **WITHOUT EVER REVERSING DIRECTION**!
  - If the particle reverses direction, distance strictly exceeds displacement magnitude ($s > |\Delta \vec{r}|$).

---

### 1.2 Average vs. Instantaneous Speed and Velocity
1. **Average Velocity ($\vec{v}_{\text{avg}}$):**
   $$\mathbf{\vec{v}_{\text{avg}} = \frac{\Delta \vec{r}}{\Delta t} = \frac{\vec{r}_f - \vec{r}_i}{t_f - t_i}}$$
2. **Instantaneous Velocity ($\vec{v}$):**
   $$\mathbf{\vec{v} = \lim_{\Delta t \to 0} \frac{\Delta \vec{r}}{\Delta t} = \frac{d\vec{r}}{dt}}$$
3. **Average Speed ($v_{\text{avg, scalar}}$):**
   $$\mathbf{v_{\text{avg, scalar}} = \frac{\text{Total Distance}}{\text{Total Time}} = \frac{s}{\Delta t}}$$
   - Notice that: $\mathbf{v_{\text{avg, scalar}} \ge |\vec{v}_{\text{avg}}|}$.
4. **Standard Mean Speed Formulations:**
   - **Equal Distance Segments (Harmonic Mean):**
     If a particle travels distance $d$ at speed $v_1$ and the subsequent distance $d$ at speed $v_2$:
     $$t_1 = \frac{d}{v_1}, \quad t_2 = \frac{d}{v_2} \implies v_{\text{avg}} = \frac{2d}{t_1 + t_2} = \mathbf{\frac{2 v_1 v_2}{v_1 + v_2}}$$
   - **Equal Time Intervals (Arithmetic Mean):**
     If a particle travels for time $t$ at speed $v_1$ and for subsequent time $t$ at speed $v_2$:
     $$d_1 = v_1 t, \quad d_2 = v_2 t \implies v_{\text{avg}} = \frac{d_1 + d_2}{2t} = \mathbf{\frac{v_1 + v_2}{2}}$$

---

### 1.3 Acceleration Formulations
The rate of change of velocity with respect to time:
$$\mathbf{\vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}}$$
- In one-dimensional rectilinear motion along the $x$-axis:
  $$\mathbf{a = \frac{dv}{dt} = \frac{d^2x}{dt^2} = v \frac{dv}{dx}}$$
  *(The spatial form $a = v \frac{dv}{dx}$ is derived using the chain rule: $\frac{dv}{dt} = \frac{dv}{dx}\frac{dx}{dt} = v \frac{dv}{dx}$).*

---


### 2.1 The Master Equations of Motion ($a = \text{Constant}$)
When acceleration $a$ is strictly independent of time, position, and velocity:
$$\mathbf{v = u + a t}$$
$$\mathbf{s = u t + \frac{1}{2} a t^2 = \left(\frac{u + v}{2}\right) t}$$
$$\mathbf{v^2 = u^2 + 2 a s}$$
$$\mathbf{s_n = u + \frac{a}{2}(2n - 1) \quad (\text{Displacement in the } n\text{-th second})}$$

---

### 2.2 Visual Preservation: Kinematics Graphs & Uniform Acceleration

<!-- image missing: media/rectilinear_motion_calculus_graphs_and_galileos_law.webp -->
*Description: Two-panel rectilinear kinematics graphic: (A) Differential and integral calculus transformations across kinematics profiles ($x-t, v-t, a-t, v-x, a-x$), curve slopes ($v = dx/dt, a = dv/dt$), signed area evaluations ($\Delta x = \int v dt, \Delta v = \int a dt$), and curvature concavity diagnostics; (B) Equations of motion under uniform acceleration, vertical free fall under gravity, Galileo's Law of Odd Numbers ($1:3:5:\dots:2n-1$), and stopping distance formulations.*

---

### 2.3 Galileo's Law of Odd Numbers
For any particle starting from rest ($u = 0$) moving under uniform acceleration $a$:
The displacement in the $n$-th unit time interval $\Delta t$ is given by:
$$s_n = \frac{1}{2} a (\Delta t)^2 (2n - 1)$$
Taking the ratio of displacements in consecutive, equal time intervals:
$$\mathbf{s_1 : s_2 : s_3 : s_4 : \dots : s_n = 1 : 3 : 5 : 7 : \dots : (2n - 1)}$$
- **Physical Implication in Free Fall ($g = 9.8\text{ m/s}^2 \approx 10\text{ m/s}^2$):**
  - In the 1st second ($0 \to 1\text{ s}$): $s_1 = 5\text{ m}$.
  - In the 2nd second ($1 \to 2\text{ s}$): $s_2 = 15\text{ m} = 3 \times 5\text{ m}$.
  - In the 3rd second ($2 \to 3\text{ s}$): $s_3 = 25\text{ m} = 5 \times 5\text{ m}$.
  - In the 4th second ($3 \to 4\text{ s}$): $s_4 = 35\text{ m} = 7 \times 5\text{ m}$.

---

### 2.4 Vertical Motion Under Gravity ($a = -g$)
Taking upward as positive and downward as negative:
5. **Maximum Height Reached ($H_{\max}$):**
   At maximum height, $v = 0$:
   $$0 = u^2 - 2 g H_{\max} \implies \mathbf{H_{\max} = \frac{u^2}{2 g}}$$
6. **Time of Ascent ($t_a$) and Descent ($t_d$):**
   $$\mathbf{t_a = t_d = \frac{u}{g} \implies T_{\text{total}} = \frac{2 u}{g}}$$
7. **Kinematic Symmetry:**
   A particle projected vertically upward returns to the projection level with the **exact same speed** ($v = u$) and takes equal times to pass any intermediate level on the way up and down.
8. **Dual Time Conjugate Property:**
   For any height $h < H_{\max}$, the equation $h = u t - \frac{1}{2} g t^2 \implies g t^2 - 2 u t + 2 h = 0$ yields two roots $t_1$ (ascending) and $t_2$ (descending):
   $$\mathbf{t_1 + t_2 = \frac{2 u}{g} = T_{\text{total}}}$$
   $$\mathbf{t_1 \cdot t_2 = \frac{2 h}{g} \implies h = \frac{1}{2} g t_1 t_2}$$

---

### 2.5 Perception-Reaction Time & Total Stopping Distance
- **Reaction Distance ($d_r$):** During the driver's reaction time $t_r$ (typically $0.2 \text{ to } 0.7\text{ s}$), the vehicle continues moving at constant speed $u$:
  $$\mathbf{d_r = u \cdot t_r}$$
- **Braking Distance ($d_b$):** Once the brakes are applied, the vehicle decelerates with braking acceleration $a$:
  $$0 = u^2 - 2 a d_b \implies \mathbf{d_b = \frac{u^2}{2 a}}$$
- **Total Stopping Distance ($D_{\text{stop}}$):**
  $$\mathbf{D_{\text{stop}} = d_r + d_b = u \cdot t_r + \frac{u^2}{2 a}}$$
  - Notice: While reaction distance scales linearly with speed ($d_r \propto u$), braking distance scales **quadratically with speed** ($d_b \propto u^2$)!

---


### 3.1 Slopes, Areas, and Mathematical Operations

| Kinematic Graph | Tangent Slope at Any Point | Area Under the Curve (Between $t_1$ and $t_2$) |
| :---: | :---: | :---: |
| **Position vs. Time ($x-t$)** | $\mathbf{\frac{dx}{dt} = v}$ (Instantaneous Velocity) | $\int x dt$ (No standard physical significance) |
| **Velocity vs. Time ($v-t$)** | $\mathbf{\frac{dv}{dt} = a}$ (Instantaneous Acceleration) | $\mathbf{\int v dt = \Delta x}$ (Displacement with sign)  $\mathbf{\int \|v\| dt = s}$ (Total Distance) |
| **Acceleration vs. Time ($a-t$)** | $\frac{da}{dt} = \text{Jerk}$ | $\mathbf{\int a dt = \Delta v = v_f - v_i}$ (Change in Velocity) |
| **Velocity vs. Position ($v-x$)** | $\frac{dv}{dx}$ | Acceleration: $\mathbf{a = v \cdot \left(\frac{dv}{dx}\right)}$ |
| **Acceleration vs. Position ($a-x$)** | $\frac{da}{dx}$ | $\mathbf{\int a dx = \frac{v_f^2 - v_i^2}{2}}$ (Work / Mass) |

---

### 3.2 Graph Curvature and Acceleration Diagnostics
- **Concave Upwards ($\frac{d^2x}{dt^2} > 0$):** Slope $v$ is increasing $\implies$ Acceleration is **positive** ($a > 0$).
- **Concave Downwards ($\frac{d^2x}{dt^2} < 0$):** Slope $v$ is decreasing $\implies$ Acceleration is **negative** ($a < 0$).
- **Inflection Point ($\frac{d^2x}{dt^2} = 0$):** Slope $v$ is stationary $\implies$ Acceleration is **zero** ($a = 0$).

---


### 4.1 Frame of Reference Transformations
Let $A$ and $B$ be two objects observed from an inertial laboratory frame:
- **Relative Position:** $\mathbf{\vec{r}_{B/A} = \vec{r}_B - \vec{r}_A}$
- **Relative Velocity:** $\mathbf{\vec{v}_{B/A} = \vec{v}_B - \vec{v}_A}$
- **Relative Acceleration:** $\mathbf{\vec{a}_{B/A} = \vec{a}_B - \vec{a}_A}$

---

### 4.2 Visual Preservation: Relative Frames & Pursuit Geometry

<!-- image missing: media/relative_motion_frames_and_pursuit_geometry.webp -->
*Description: Two-panel relative kinematics graphic: (A) Relative motion vector frames, the Two-Projectile Relative Trajectory Invariance Theorem ($\vec{a}_{\text{rel}} = 0 \implies$ constant velocity straight line), velocity of approach ($v_{\text{app}} = -dr/dt$), and closest approach geometry ($d_{\min} = r_0\sin\theta$); (B) Cyclic regular polygon pursuit dynamics, derivation of approach speed $v_{\text{app}} = v(1 - \cos(2\pi/N))$, and closed-form collision times for triangles, squares, and hexagons.*

---

### 4.3 The Two-Projectile Invariance Theorem
Consider two independent projectiles 1 and 2 launched into the air under gravity:
- Accelerations in the ground frame:
  $$\vec{a}_1 = \vec{g} \ (\text{downward}), \quad \vec{a}_2 = \vec{g} \ (\text{downward})$$
- **Relative Acceleration:**
  $$\mathbf{\vec{a}_{2/1} = \vec{a}_2 - \vec{a}_1 = \vec{g} - \vec{g} = 0}$$
- **FUNDAMENTAL THEOREM:**
  Because their relative acceleration is identically zero, the motion of one projectile as viewed from another projectile is **STRICTLY UNIFORM MOTION IN A STRAIGHT LINE AT CONSTANT VELOCITY**:
  $$\mathbf{\vec{v}_{2/1}(t) = \vec{u}_2 - \vec{u}_1 = \text{Constant}}$$
  $$\mathbf{\vec{r}_{2/1}(t) = \vec{r}_{2/1}(0) + (\vec{u}_2 - \vec{u}_1) t}$$
  - A collision between two projectiles occurs if and only if their relative velocity vector $\vec{v}_{2/1}$ is directed **directly along the line of sight** connecting their initial positions!

---

### 4.4 Velocity of Approach ($v_{\text{app}}$) & Closest Approach Distance ($d_{\min}$)
The velocity of approach between two bodies $A$ and $B$ separated by distance $r$ is the rate of decrease of the separation distance:
$$\mathbf{v_{\text{app}} = -\frac{dr}{dt} = -(\vec{v}_B - \vec{v}_A) \cdot \hat{r}_{AB} = (\vec{v}_A - \vec{v}_B) \cdot \hat{r}_{AB}}$$
- **Condition for Minimum Separation (Closest Approach):**
  At the instant of closest approach, separation distance $r$ reaches a minimum:
  $$\frac{dr}{dt} = 0 \iff \mathbf{v_{\text{app}} = 0}$$
  - The relative velocity vector $\vec{v}_{\text{rel}}$ is **strictly perpendicular to the relative position vector $\vec{r}_{\text{rel}}$**!
- **Geometric Calculation:**
  Let initial separation be $r_0$, and let the relative velocity vector $\vec{v}_{\text{rel}}$ make angle $\theta$ with the line connecting the bodies:
  $$\mathbf{d_{\min} = r_0 \sin\theta}$$
  $$\mathbf{t_{\min} = \frac{r_0 \cos\theta}{|\vec{v}_{\text{rel}}|}}$$

---


### 5.1 General Cyclic Pursuit Law
Consider $N$ identical particles initially situated at the vertices of a regular $N$-sided polygon of side length $d$. Each particle moves with constant speed $v$ directed toward its adjacent cyclic neighbor:
- Due to rotational symmetry, the particles always maintain a regular $N$-gon geometry of continuously shrinking side length $d(t)$, spiraling toward the geometric center.
- At any vertex, the interior angle of a regular $N$-gon is $\frac{(N-2)\pi}{N} = \pi - \frac{2\pi}{N}$.
- The angle between particle $A$'s velocity $\vec{v}_A$ (along $AB$) and particle $B$'s velocity $\vec{v}_B$ (along $BC$) is $\pi - \left(\pi - \frac{2\pi}{N}\right) = \frac{2\pi}{N}$.
- **Component of Velocity of $B$ along line $BA$:**
  $$v_{B, \parallel} = v \cos\left(\frac{2\pi}{N}\right)$$
- **Velocity of Approach Along Side $AB$:**
  $$\mathbf{v_{\text{app}} = v - v \cos\left(\frac{2\pi}{N}\right) = v \left[ 1 - \cos\left(\frac{2\pi}{N}\right) \right]}$$
- **Total Time to Intersect at Center:**
  Because $v_{\text{app}}$ remains constant throughout the motion:
  $$\mathbf{t_{\text{meet}} = \frac{d}{v_{\text{app}}} = \frac{d}{v \left[ 1 - \cos\left(\frac{2\pi}{N}\right) \right]}}$$
- **Total Distance Traveled by Each Particle:**
  $$\mathbf{s = v \cdot t_{\text{meet}} = \frac{d}{1 - \cos\left(\frac{2\pi}{N}\right)}}$$

---

### 5.2 Canonical Solutions for Standard Regular Polygons

| Polygon Geometry | Number of Sides ($N$) | Exterior Angle ($2\pi/N$) | Approach Velocity ($v_{\text{app}}$) | Collision Time ($t_{\text{meet}}$) | Path Length ($s$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Equilateral Triangle** | $N = 3$ | $120^\circ$ ($\cos 120^\circ = -1/2$) | $\mathbf{\frac{3}{2} v}$ | $\mathbf{\frac{2 d}{3 v}}$ | $\frac{2}{3} d$ |
| **Square** | $N = 4$ | $90^\circ$ ($\cos 90^\circ = 0$) | $\mathbf{v}$ | $\mathbf{\frac{d}{v}}$ | $d$ |
| **Regular Pentagon** | $N = 5$ | $72^\circ$ ($\cos 72^\circ = \frac{\sqrt{5}-1}{4}$) | $v\left(\frac{5-\sqrt{5}}{4}\right)$ | $\frac{4d}{v(5-\sqrt{5})}$ | $\frac{4d}{5-\sqrt{5}}$ |
| **Regular Hexagon** | $N = 6$ | $60^\circ$ ($\cos 60^\circ = +1/2$) | $\mathbf{\frac{1}{2} v}$ | $\mathbf{\frac{2 d}{v}}$ | $2 d$ |

---


### 6.1 River-Boat & Swimmer Crossing Mechanics

<!-- image missing: media/river_boat_rain_man_and_wind_airplane_vectors.webp -->
*Description: Two-panel two-dimensional relative motion graphic: (A) River-boat crossing mechanics contrasting shortest time crossing ($t_{\min} = d/u$, perpendicular steering) with shortest path zero-drift crossing ($t = d/\sqrt{u^2-v_r^2}$, upstream steering), and minimum drift when $u < v_r$; (B) Rain-man apparent velocity vector triangles with umbrella tilt formula ($\tan\theta = |v_{rx}+v_m|/v_{ry}$) and wind-airplane vector triangle navigation.*

Let a river of width $d$ flow with current speed $v_r \hat{i}$. A boat moves with speed $u$ relative to the water at angle $\theta$ measured relative to the river bank:
$$\vec{v}_{b/r} = u \cos\theta \hat{i} + u \sin\theta \hat{j}$$
$$\vec{v}_b = \vec{v}_{b/r} + \vec{v}_r = (u \cos\theta + v_r)\hat{i} + u \sin\theta \hat{j}$$

9. **Shortest Time Crossing ($t_{\min}$):**
   The time to cross the river depends solely on the transverse velocity component $v_y = u \sin\theta$:
   $$t = \frac{d}{u \sin\theta}$$
   To minimize $t$, maximize $\sin\theta \implies \theta = 90^\circ$ (**Steer strictly perpendicular to the bank**):
   $$\mathbf{t_{\min} = \frac{d}{u}}$$
   - **Downstream Drift ($x$):**
     $$\mathbf{x = (u \cos 90^\circ + v_r) t_{\min} = \frac{v_r d}{u}}$$
   - **Crucial Invariant:** Crossing time $t_{\min}$ is **COMPLETELY INDEPENDENT of river speed $v_r$**! Faster river flow increases drift $x$, but does not affect the time needed to reach the opposite bank!
10. **Shortest Path Crossing (Zero Drift, $x = 0$):**
   To land at the directly opposite point ($x = 0$), the net downstream velocity must vanish:
   $$u \cos\theta + v_r = 0 \implies \cos\theta = -\frac{v_r}{u}$$
   - **Condition for Feasibility:** This is physically possible **if and only if the swimmer is faster than the river current** ($u > v_r$).
   - Steering upstream at angle $\alpha$ relative to the normal to the bank ($\theta = 90^\circ + \alpha$):
     $$\mathbf{\sin\alpha = \frac{v_r}{u}}$$
   - **Resultant Ground Speed Across River:**
     $$\mathbf{v = \sqrt{u^2 - v_r^2}}$$
   - **Time to Cross:**
     $$\mathbf{t = \frac{d}{\sqrt{u^2 - v_r^2}}}$$
11. **Minimum Drift when Swimmer is Slower than River ($u < v_r$):**
   When $u < v_r$, zero drift is impossible. To find the minimum drift:
   $$x = (v_r - u \sin\alpha)\frac{d}{u \cos\alpha} = \frac{d}{u}(v_r \sec\alpha - u \tan\alpha)$$
   Differentiating with respect to $\alpha$ and setting to zero:
   $$\mathbf{\sin\alpha = \frac{u}{v_r}}$$
   $$\mathbf{x_{\min} = d \sqrt{\left(\frac{v_r}{u}\right)^2 - 1}}$$

---

### 6.2 Rain-Man Problem: Apparent Rain & Umbrella Orientation
Let rain fall with velocity $\vec{v}_r = -v_{rx} \hat{i} - v_{ry} \hat{j}$ relative to the ground. A person moves horizontally with velocity $\vec{v}_m = v_m \hat{i}$:
- **Relative Velocity of Rain with Respect to the Person:**
  $$\mathbf{\vec{v}_{r/m} = \vec{v}_r - \vec{v}_m = -(v_{rx} + v_m)\hat{i} - v_{ry}\hat{j}}$$
- **Umbrella Orientation:**
  To stay completely dry, the person must hold the umbrella directly opposite to the apparent direction of falling rain ($-\vec{v}_{r/m}$):
  $$\mathbf{\tan\theta = \frac{|v_{rx} + v_m|}{v_{ry}}}$$
  where $\theta$ is the tilt angle measured from the vertical toward the direction of motion.
- **Special Case: Vertical Rain ($v_{rx} = 0$):**
  $$\mathbf{\tan\theta = \frac{v_m}{v_r}}$$
  - If the person walks at $v_m$, the umbrella tilts at $\tan\theta = v_m / v_r$.
  - If the person runs at $2 v_m$, $\tan\theta' = 2 \tan\theta$ (The umbrella must be tilted further forward).

---

### 6.3 Wind-Airplane Vector Navigation
An aircraft flies in an air mass with wind velocity $\vec{v}_w$:
$$\mathbf{\vec{v}_{\text{plane}} = \vec{v}_{p/a} + \vec{v}_w}$$
where $\vec{v}_{p/a}$ is the True Airspeed (TAS) directed along the aircraft's heading, $\vec{v}_w$ is the wind velocity vector, and $\vec{v}_{\text{plane}}$ is the resultant ground track velocity.
- To navigate from airport $A$ to airport $B$ across a crosswind $v_w$ perpendicular to track:
  The aircraft must head upstream into the wind at angle $\beta$:
  $$\mathbf{\sin\beta = \frac{v_w}{v_{p/a}}}$$
  $$\mathbf{v_{\text{ground}} = \sqrt{v_{p/a}^2 - v_w^2}}$$
- **Round-Trip Time Under Crosswind:**
  $$\mathbf{T_{\text{cross}} = \frac{2 d}{\sqrt{v_{p/a}^2 - v_w^2}} = \frac{T_0}{\sqrt{1 - \left(\frac{v_w}{v_{p/a}}\right)^2}} > T_0}$$
  - A crosswind **always increases** total round-trip flight time compared to calm air!

---


### 7.1 Master Kinematics Formula Table

| Physical Quantity / Law | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Distance-Displacement Inequality** | $s \ge |\Delta \vec{r}|$ | Equality only for straight unidirectional motion |
| **Harmonic Mean Speed** | $v_{\text{avg}} = \frac{2 v_1 v_2}{v_1 + v_2}$ | Equal distance segments |
| **Arithmetic Mean Speed** | $v_{\text{avg}} = \frac{v_1 + v_2}{2}$ | Equal time intervals |
| **Kinematic Derivative Form** | $a = v \frac{dv}{dx} = \frac{dv}{dt}$ | Position-dependent acceleration |
| **Uniform Acceleration Displacement** | $s_n = u + \frac{a}{2}(2n - 1)$ | Distance in $n$-th second |
| **Galileo's Odd Number Law** | $s_1 : s_2 : s_3 : \dots = 1 : 3 : 5 : \dots : (2n-1)$ | From rest ($u = 0$) under constant $a$ |
| **Maximum Vertical Height** | $H_{\max} = \frac{u^2}{2g}$ | $t_a = t_d = u/g$ |
| **Dual Time Conjugate Property** | $t_1 + t_2 = \frac{2u}{g}, \ t_1 t_2 = \frac{2h}{g}$ | Times passing height $h$ |
| **Total Stopping Distance** | $D_{\text{stop}} = u t_r + \frac{u^2}{2a}$ | Linear reaction + quadratic braking |
| **Area Under $v-t$ Graph** | $\Delta x = \int v dt, \ s = \int |v| dt$ | Signed displacement vs. total distance |
| **Area Under $a-t$ Graph** | $\Delta v = \int a dt = v_f - v_i$ | Change in velocity |
| **Area Under $a-x$ Graph** | $\int a dx = \frac{v_f^2 - v_i^2}{2}$ | Work-kinetic energy relation |
| **Two-Projectile Relative Acceleration** | $\vec{a}_{\text{rel}} = \vec{g} - \vec{g} = 0$ | Relative path is always a straight line |
| **Velocity of Approach** | $v_{\text{app}} = -(\vec{v}_B - \vec{v}_A) \cdot \hat{r}_{AB}$ | Minimum separation when $v_{\text{app}} = 0$ |
| **Closest Approach Distance** | $d_{\min} = r_0 \sin\theta, \ t_{\min} = \frac{r_0 \cos\theta}{v_{\text{rel}}}$ | Relative perpendicular condition |
| **Regular Polygon Pursuit Time** | $t_{\text{meet}} = \frac{d}{v(1 - \cos(2\pi/N))}$ | Triangle $\frac{2d}{3v}$, Square $\frac{d}{v}$, Hexagon $\frac{2d}{v}$ |
| **Shortest River Crossing Time** | $t_{\min} = \frac{d}{u}$ with drift $x = \frac{v_r d}{u}$ | Steer perpendicular ($\theta = 90^\circ$) |
| **Zero Drift River Crossing** | $t = \frac{d}{\sqrt{u^2 - v_r^2}}$ with $\sin\alpha = \frac{v_r}{u}$ | Valid only when $u > v_r$ |
| **Minimum Drift ($u < v_r$)** | $x_{\min} = d\sqrt{\frac{v_r^2}{u^2} - 1}$ with $\sin\alpha = \frac{u}{v_r}$ | Swimmer slower than river |
| **Rain-Man Umbrella Tilt** | $\tan\theta = \frac{|v_{rx} + v_m|}{v_{ry}}$ | Tilt angle from vertical |

---


#### Trap 1: Confusing Average Speed with Magnitude of Average Velocity
- **The Error:** Writing $|\vec{v}_{\text{avg}}| = v_{\text{avg}}$.
- **The Physics:** Average velocity is displacement over time: $\vec{v}_{\text{avg}} = \Delta \vec{r} / \Delta t$. Average speed is total distance over time: $v_{\text{avg}} = s / \Delta t$.
- For a circular lap of radius $R$ completed in time $T$:
  $$\Delta \vec{r} = 0 \implies \vec{v}_{\text{avg}} = 0$$
  $$\text{Distance} = 2\pi R \implies v_{\text{avg}} = \frac{2\pi R}{T} > 0$$

#### Trap 2: Misinterpreting $v-t$ Area as Distance
- **The Error:** Computing displacement when total distance was requested.
- **The Physics:** The algebraic area under the $v-t$ curve yields **displacement** (regions below the time axis are negative). To find **total distance**, you must take the absolute value of the area (reflecting all negative regions above the $t$-axis).

#### Trap 3: The Projectile Relative Trajectory Parabola Fallacy
- **The Error:** Assuming that because both projectiles follow parabolic trajectories in the ground frame, their relative path must also be parabolic.
- **The Physics:** Since $\vec{a}_1 = \vec{g}$ and $\vec{a}_2 = \vec{g}$, their relative acceleration is identically zero:
  $$\vec{a}_{\text{rel}} = \vec{g} - \vec{g} = 0$$
- A body moving with zero acceleration moves in a **STRICTLY STRAIGHT LINE AT CONSTANT VELOCITY**!

#### Trap 4: Shortest River Crossing Time vs. Shortest Path
- **The Error:** Assuming the shortest path (zero drift) corresponds to the shortest time.
- **The Physics:** To cross in minimum time, all swimming effort must be dedicated to moving across the river ($\theta = 90^\circ \implies t_{\min} = d/u$). In this case, the swimmer drifts downstream.
- To achieve zero drift, the swimmer must direct part of their velocity upstream to cancel the current, reducing their cross-river velocity to $\sqrt{u^2 - v_r^2}$, which takes **longer**: $t = d/\sqrt{u^2 - v_r^2} > d/u$!}
