Physics Revision Context: Chapter 55 — Work, Power, and Energy


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Work, Power _ Energy/`, `1._Theory_English_gIQlDOJ.pdf`, `Work_Power_Energy_Faculty_copy_yw3bPNO.pdf`, `2._Exercise_-1_to_3_English_gcVoQ2e.pdf`, and `3._HLP__English.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Physics Mechanics Core — Mechanical Work Calculus ($W = \vec{F}\cdot\vec{s} = F s\cos\theta$, Line Integral $W = \int \vec{F}\cdot d\vec{r} = \int F_x dx + \int F_y dy + \int F_z dz$), Area Under $F-x$ Curves, Reference Frame Transformations of Work, Real Force Work Formulations ($W_g = -mg\Delta y$, $W_s = \frac{1}{2}k(x_i^2 - x_f^2)$, $\sum W_T = 0$, Normal Work $W_N$), Friction Energy Dissipation Dynamics (Static Friction Zero Net System Work $\sum W_{f_s} = 0$, Kinetic Friction Irreversible Heat Generation $\sum W_{f_k} = -f_k s_{\text{rel}} < 0$), The Universal Work-Energy Theorem ($W_{\text{net}} = \Delta K$, Partitioned Form $W_{\text{NC}} + W_{\text{ext}} + W_{\text{pseudo}} = \Delta K + \Delta U = \Delta E_{\text{mech}}$), Conservation of Mechanical Energy ($\Delta E_{\text{mech}} = 0 \iff K_i + U_i = K_f + U_f$), Conservative Vector Field Criteria ($\oint \vec{F}\cdot d\vec{r} = 0$, $\vec{\nabla}\times\vec{F} = 0$, $\vec{F} = -\vec{\nabla}U$), Potential Energy Curves $U(x)$ & Force Inversion ($F = -dU/dx$), Equilibrium Stability Classifications (Stable $\frac{d^2U}{dx^2} > 0$ with SHM Frequency $\omega = \sqrt{\frac{1}{m}\frac{d^2U}{dx^2}}$, Unstable $\frac{d^2U}{dx^2} < 0$, Neutral $\frac{d^2U}{dx^2} = 0$), Classical Turning Points & Kinetic Energy Positivity ($K = E - U \ge 0$), Power Dynamics ($P = \vec{F}\cdot\vec{v} = dW/dt = dK/dt$), Motion Under Constant Power ($v(t) \propto t^{1/2}$, $x(t) \propto t^{3/2}$, $a(t) \propto t^{-1/2} \propto 1/v$), Hanging Chain Center of Mass Mechanics ($W = \frac{MgL}{2n^2}$), Conveyor Belt Continuous Mass Accretion & The 50% Thermodynamic Dissipation Law ($P_{\text{motor}} = v^2\frac{dm}{dt}$, $\frac{dK}{dt} = \frac{1}{2}P_{\text{motor}}$, $P_{\text{heat}} = \frac{1}{2}P_{\text{motor}}$), and Comprehensive High-Yield JEE Traps.


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fundamentals of Mechanical Work: Calculus & Frame Dynamics


### 1.1 Constant & Spatially Variable Force Formulations
1. **Work Done by a Constant Force:**
   The scalar product of the constant force vector $\vec{F}$ and the displacement vector $\vec{s}$ of its point of application:
   $$\mathbf{W = \vec{F} \cdot \vec{s} = F s \cos\theta}$$
   where $\theta$ is the angle between $\vec{F}$ and $\vec{s}$ ($0 \le \theta \le \pi$).
   * **Dimensions & Units:**
     $$[W] = [F][s] = [M L T^{-2}][L] = \mathbf{[M L^2 T^{-2}]}$$
     * SI Unit: Joule ($\text{J} = \text{N}\cdot\text{m} = \text{kg}\cdot\text{m}^2\cdot\text{s}^{-2}$).
     * CGS Unit: $\text{erg} = \text{dyne}\cdot\text{cm} = \text{g}\cdot\text{cm}^2\cdot\text{s}^{-2}$.
     * Conversion: $\mathbf{1\text{ J} = 10^7\text{ erg}}$.
   * **Sign Regimes of Work:**
     * **Positive Work ($0 \le \theta < 90^\circ$):** Force has a component in the direction of displacement; energy is transferred into the body.
     * **Zero Work ($\theta = 90^\circ$):** Force is perpendicular to displacement ($\vec{F} \perp \vec{s}$). Examples include:
       * Centripetal force in circular motion ($\vec{F}_c \perp \vec{v}$).
       * Magnetic Lorentz force on a moving charge ($\vec{F}_B = q(\vec{v} \times \vec{B}) \perp \vec{v}$).
       * Normal contact reaction on a body sliding across a stationary rigid surface.
     * **Negative Work ($90^\circ < \theta \le 180^\circ$):** Force has a component opposing displacement; energy is extracted from the body (e.g., friction, braking forces).
2. **Work Done by a Variable Force (Line Integral):**
   When the force varies with position along a general trajectory $C$:
   $$\mathbf{W = \int_{\vec{r}_i}^{\vec{r}_f} \vec{F} \cdot d\vec{r} = \int_{x_i}^{x_f} F_x dx + \int_{y_i}^{y_f} F_y dy + \int_{z_i}^{z_f} F_z dz}$$
3. **Graphical Interpretation ($F-x$ Curve):**
   The mechanical work done by a one-dimensional force $F(x)$ equals the **signed area** between the curve and the displacement axis:
   $$\mathbf{W = \int_{x_i}^{x_f} F(x) dx = (\text{Area above } x\text{-axis}) - (\text{Area below } x\text{-axis})}$$


---


### 1.2 Work Done by Canonical Real Forces


![Work Calculus Force Displacement and Friction Energy](/media/work_calculus_force_displacement_and_friction_energy.webp)
*Description: Two-panel mechanical work graphic: (A) Mechanical work definitions for constant and variable forces, line integral decomposition, force-displacement curve signed area integration, and frame dependence of work; (B) Friction energy mechanics contrasting the zero net work theorem of static friction ($\sum W_{f_s} = 0$) with the irreversible thermal dissipation of kinetic friction ($\sum W_{f_k} = -f_k s_{\text{rel}} < 0$).*


1. **Gravitational Force ($W_g$):**
   Near the Earth's surface, $\vec{F}_g = -mg \hat{j}$:
   $$\mathbf{W_g = \int_{y_i}^{y_f} (-mg) dy = -mg(y_f - y_i) = mg(y_i - y_f) = -mg\Delta y}$$
   * Work done by gravity depends **exclusively on initial and final vertical coordinates**; it is strictly independent of the horizontal path taken or the slope of the trajectory!
2. **Ideal Spring Restoring Force ($W_s$):**
   By Hooke's Law, $\vec{F}_s = -kx \hat{i}$, where $x$ is the elongation/compression from natural length:
   $$\mathbf{W_s = \int_{x_i}^{x_f} (-kx) dx = \left[ -\frac{1}{2} k x^2 \right]_{x_i}^{x_f} = \frac{1}{2} k x_i^2 - \frac{1}{2} k x_f^2 = -(U_f - U_i) = -\Delta U_s}$$
3. **Internal String Tension ($\sum W_T$):**
   For an ideal (massless, inextensible) string passing over frictionless pulleys connecting multiple masses:
   $$\mathbf{\sum_{\text{system}} \vec{T} \cdot d\vec{s} = 0 \implies \sum W_T = 0}$$
   * Internal tension transfers energy between connected bodies without net work on the system!
4. **Normal Contact Force ($W_N$):**
   * On a fixed, stationary surface: Displacement is parallel to the surface $\implies \vec{N} \perp d\vec{s} \implies W_N = 0$.
   * On moving boundaries (e.g., person standing in an accelerating elevator, block sliding on an accelerating wedge): Displacement of contact point has a component along $\vec{N} \implies \mathbf{W_N \ne 0}$ (Normal force can do positive or negative work!).


---


### 1.3 Friction Energy Mechanics & Reference Frame Transformations
1. **Static Friction Energy Theorem:**
   * **Individual Body:** Static friction **can do positive, negative, or zero work**:
     * A crate accelerating in a truck bed: Static friction points forward, displacement is forward $\implies \mathbf{W_{f_s} > 0}$!
     * A crate decelerating in a braking truck: Static friction points backward $\implies \mathbf{W_{f_s} < 0}$.
     * A person walking: The foot in contact with ground has zero instantaneous displacement $\implies \mathbf{W_{f_s} = 0}$.
   * **Interacting System (Zero Net Dissipation):**
     Because static friction acts between surfaces that do not slip relative to each other ($d\vec{s}_1 = d\vec{s}_2 = d\vec{s}$):
     $$W_{f_s, \text{net}} = \vec{f}_s \cdot d\vec{s}_1 + (-\vec{f}_s) \cdot d\vec{s}_2 = \vec{f}_s \cdot (d\vec{s}_1 - d\vec{s}_2) = \vec{f}_s \cdot \vec{0} = 0$$
     $$\mathbf{\sum_{\text{system}} W_{f_s} \equiv 0}$$
     * **CRITICAL INVARIANT:** Static friction never dissipates mechanical energy into heat; it acts solely as a lossless mechanical energy transmission mechanism!
2. **Kinetic Friction Dissipation Theorem:**
   When two bodies slide across each other with relative displacement $s_{\text{rel}} = |\vec{s}_1 - \vec{s}_2|$:
   $$W_{f_k, \text{net}} = \vec{f}_{k, 1} \cdot \vec{s}_1 + \vec{f}_{k, 2} \cdot \vec{s}_2 = -f_k s_{\text{rel}}$$
   $$\mathbf{\sum_{\text{system}} W_{f_k} = -f_k s_{\text{rel}} < 0}$$
   * The net work done by kinetic friction across any interacting system is **STRICTLY AND UNCONDITIONALLY NEGATIVE**!
   * This lost mechanical energy is irreversibly converted into thermal internal energy:
     $$\mathbf{Q_{\text{heat}} = +f_k s_{\text{rel}}}$$
3. **Reference Frame Dependence of Work:**
   Because displacement $\vec{s}$ is frame-dependent ($\vec{s}' = \vec{s} - \vec{v}_0 t$), the work done by a force depends on the observer's reference frame:
   $$W' = \vec{F} \cdot \vec{s}' \ne W$$
   * However, kinetic energy also transforms across frames ($\vec{v}' = \vec{v} - \vec{v}_0$), ensuring that the **Work-Energy Theorem ($W_{\text{net}} = \Delta K$) holds true in EVERY inertial reference frame**!


---


## 2. The Universal Work-Energy Theorem & Conservation Laws


### 2.1 The Universal Work-Energy Theorem (WET)
For any particle of mass $m$ acted upon by arbitrary forces:
$$\vec{F}_{\text{net}} = m \frac{d\vec{v}}{dt}$$
$$W_{\text{net}} = \int_{\vec{r}_i}^{\vec{r}_f} \vec{F}_{\text{net}} \cdot d\vec{r} = \int_{t_i}^{t_f} m \frac{d\vec{v}}{dt} \cdot \vec{v} dt = \int_{v_i}^{v_f} m \vec{v} \cdot d\vec{v} = \left[ \frac{1}{2} m v^2 \right]_{v_i}^{v_f}$$
$$\mathbf{W_{\text{net}} = \Delta K = K_f - K_i = \frac{1}{2} m v_f^2 - \frac{1}{2} m v_i^2}$$


---


### 2.2 Force Partitioning & Mechanical Energy Conservation


![Work Energy Theorem Conservative Fields and Equilibrium Stability](/media/work_energy_theorem_conservative_fields_and_equilibrium_stability.webp)
*Description: Two-panel energy conservation and potential curve graphic: (A) Universal Work-Energy Theorem force partitioning ($W_C + W_{\text{NC}} + W_{\text{ext}} = \Delta K$), mechanical energy conservation ($E = K + U = \text{const}$), and mathematical criteria for conservative fields ($\vec{\nabla}\times\vec{F} = 0, \vec{F} = -\vec{\nabla}U$); (B) Potential energy curve $U(x)$, force gradient relation ($F = -dU/dx$), turning points, and equilibrium stability classification (stable, unstable, neutral).*


Partitioning total work into conservative forces ($W_C$), non-conservative forces ($W_{\text{NC}}$), external agent forces ($W_{\text{ext}}$), and pseudo forces ($W_{\text{pseudo}}$):
$$W_C + W_{\text{NC}} + W_{\text{ext}} + W_{\text{pseudo}} = \Delta K$$
Because conservative work defines the negative change in potential energy ($\mathbf{W_C = -\Delta U = U_i - U_f}$):
$$-\Delta U + W_{\text{NC}} + W_{\text{ext}} + W_{\text{pseudo}} = \Delta K$$
$$\mathbf{W_{\text{NC}} + W_{\text{ext}} + W_{\text{pseudo}} = \Delta K + \Delta U = \Delta E_{\text{mech}}}$$
where $E_{\text{mech}} = K + U$ is the total mechanical energy of the system.
* **Law of Conservation of Mechanical Energy:**
  If only conservative forces perform work ($W_{\text{NC}} = 0, W_{\text{ext}} = 0, W_{\text{pseudo}} = 0$):
  $$\mathbf{\Delta E_{\text{mech}} = 0 \iff K_i + U_i = K_f + U_f = \text{Constant}}$$


---


### 2.3 Mathematical Criteria for Conservative Vector Fields
A force field $\vec{F}(\vec{r})$ is defined as **conservative** if and only if it satisfies any of the following 5 equivalent mathematical criteria:
1. **Zero Closed Loop Integral:**
   $$\mathbf{\oint_C \vec{F} \cdot d\vec{r} = 0 \quad (\text{For ANY closed loop } C)}$$
2. **Path Independence:**
   The work done between two arbitrary points $A$ and $B$ is completely independent of the path connecting them:
   $$\mathbf{W_{A \to B}^{(\text{path 1})} = W_{A \to B}^{(\text{path 2})}}$$
3. **Irrotational Curl Condition:**
   $$\mathbf{\vec{\nabla} \times \vec{F} = \vec{0} \iff \frac{\partial F_z}{\partial y} = \frac{\partial F_y}{\partial z}, \quad \frac{\partial F_x}{\partial z} = \frac{\partial F_z}{\partial x}, \quad \frac{\partial F_y}{\partial x} = \frac{\partial F_x}{\partial y}}$$
4. **Derivability from a Scalar Potential Function ($U$):**
   $$\mathbf{\vec{F} = -\vec{\nabla} U = -\left( \frac{\partial U}{\partial x} \hat{i} + \frac{\partial U}{\partial y} \hat{j} + \frac{\partial U}{\partial z} \hat{k} \right)}$$
5. **Exact Differential Formulation:**
   $$\vec{F} \cdot d\vec{r} = F_x dx + F_y dy + F_z dz = -dU$$


---


## 3. Potential Energy Curves $U(x)$ & Equilibrium Stability


### 3.1 Force-Potential Gradient Relation
In one dimension:
$$\mathbf{F(x) = -\frac{dU}{dx}}$$
* If slope $\frac{dU}{dx} > 0$: Force $F(x) < 0$ (Directed toward $-x$).
* If slope $\frac{dU}{dx} < 0$: Force $F(x) > 0$ (Directed toward $+x$).
* If slope $\frac{dU}{dx} = 0$: Net force is zero ($F = 0$) $\implies$ **Point of Equilibrium**.


---


### 3.2 Equilibrium Stability Classification


| Equilibrium State | Mathematical Condition on $U(x)$ | Physical Behavior upon Small Displacement $\pm \Delta x$ | Oscillation / Dynamic Response |
| :---: | :---: | :---: | :---: |
| **Stable Equilibrium** | $\mathbf{\frac{dU}{dx} = 0 \quad \text{and} \quad \frac{d^2U}{dx^2} > 0}$ <br> *(Local Minimum of $U$)* | Restoring force opposes displacement: <br> $F(+\Delta x) < 0, \ F(-\Delta x) > 0$ | Executes **Simple Harmonic Motion (SHM)**: <br> $\mathbf{\omega = \sqrt{\frac{k_{\text{eff}}}{m}} = \sqrt{\frac{1}{m} \left.\frac{d^2U}{dx^2}\right|_{x_0}}}$ |
| **Unstable Equilibrium** | $\mathbf{\frac{dU}{dx} = 0 \quad \text{and} \quad \frac{d^2U}{dx^2} < 0}$ <br> *(Local Maximum of $U$)* | Repulsive runaway force reinforces displacement: <br> $F(+\Delta x) > 0, \ F(-\Delta x) < 0$ | Accelerates away from equilibrium position; no oscillation possible |
| **Neutral Equilibrium** | $\mathbf{\frac{dU}{dx} = 0 \quad \text{and} \quad \frac{d^2U}{dx^2} = 0}$ <br> *(Flat Potential Plateau)* | Force remains identically zero in the vicinity: <br> $F(\pm \Delta x) = 0$ | Remains at rest in the new displaced position |


---


### 3.3 Total Energy & Classical Turning Points
Given total mechanical energy $E = K(x) + U(x)$:
$$\mathbf{K(x) = E - U(x) \ge 0}$$
* **Allowed Region:** Particle motion is physically confined to regions where $\mathbf{U(x) \le E}$.
* **Classical Turning Points ($x_t$):** Coordinates where $U(x_t) = E \implies K(x_t) = 0$. The particle stops instantaneously and reverses direction!
* **Forbidden Region:** Regions where $U(x) > E$ would require $K(x) < 0$ ($v$ imaginary), which is physically impossible in classical mechanics.


---


## 4. Mechanical Power Formulations & Constant Power Kinematics


### 4.1 Average & Instantaneous Power


![Power Dynamics Hanging Chain and Conveyor Belt Systems](/media/power_dynamics_hanging_chain_and_conveyor_belt_systems.webp)
*Description: Two-panel mechanical power graphic: (A) Instantaneous and average power formulations, efficiency $\eta = P_{\text{out}}/P_{\text{in}}$, and constant power kinematic scaling waveforms ($v \propto t^{1/2}, x \propto t^{3/2}, a \propto t^{-1/2} \propto 1/v$); (B) Advanced energy applications: hanging chain pulling work ($W = MgL/2n^2$) using center of mass displacement, and the 50% thermodynamic efficiency invariant of continuous conveyor belt mass accretion ($P_{\text{heat}} = \frac{1}{2}P_{\text{motor}}$).*


1. **Instantaneous Power ($P$):**
   The time rate at which work is done by a force:
   $$\mathbf{P = \frac{dW}{dt} = \frac{\vec{F} \cdot d\vec{r}}{dt} = \vec{F} \cdot \vec{v} = F v \cos\theta}$$
2. **Average Power ($P_{\text{avg}}$):**
   $$\mathbf{P_{\text{avg}} = \frac{\Delta W}{\Delta t} = \frac{W_{\text{total}}}{\Delta t}}$$
3. **Power-Kinetic Energy Equivalence:**
   $$\mathbf{P_{\text{net}} = \vec{F}_{\text{net}} \cdot \vec{v} = \left(m \frac{d\vec{v}}{dt}\right) \cdot \vec{v} = \frac{d}{dt} \left( \frac{1}{2} m v^2 \right) = \frac{dK}{dt}}$$
   * The net power delivered to a body is identically equal to the rate of increase of its kinetic energy!


---


### 4.2 Kinematics Under Constant Delivered Power ($P = \text{Constant}$)
Consider an engine delivering constant mechanical power $P$ to a vehicle of mass $m$ starting from rest ($u = 0$ at $t = 0$):
$$P = F v = m v \frac{dv}{dt} \implies v dv = \left(\frac{P}{m}\right) dt$$
1. **Velocity as a Function of Time:**
   $$\int_0^v v dv = \frac{P}{m} \int_0^t dt \implies \frac{1}{2} v^2 = \frac{P}{m} t \implies \mathbf{v(t) = \sqrt{\frac{2 P}{m}} t^{1/2} \propto t^{1/2}}$$
2. **Displacement as a Function of Time:**
   $$x(t) = \int_0^t v dt = \sqrt{\frac{2 P}{m}} \int_0^t t^{1/2} dt = \mathbf{\frac{2}{3} \sqrt{\frac{2 P}{m}} t^{3/2} \propto t^{3/2}}$$
3. **Acceleration as a Function of Time & Velocity:**
   $$\mathbf{a(t) = \frac{dv}{dt} = \sqrt{\frac{P}{2 m}} t^{-1/2} = \frac{P}{m v} \propto t^{-1/2} \propto \frac{1}{v}}$$
4. **Spatial Dependences ($v(x)$ and $a(x)$):**
   From $v^2 \propto t$ and $x \propto t^{3/2} \implies t \propto x^{2/3}$:
   $$\mathbf{v(x) = \left( \frac{3 P x}{m} \right)^{1/3} \propto x^{1/3}}$$
   $$\mathbf{a(x) = \frac{P}{m v} \propto x^{-1/3}}$$


---


## 5. Advanced Energy Applications: Chains & Conveyor Systems


### 5.1 Work Done on a Hanging Chain
Consider a uniform chain of mass $M$ and length $L$ lying on a smooth horizontal table with a fraction $1/n$ of its length hanging vertically over the edge:
1. **Mass of Hanging Segment:**
   $$m_{\text{hang}} = \frac{M}{n}$$
2. **Center of Mass of Hanging Segment ($y_{\text{cm}}$):**
   The hanging segment extends from $y = 0$ (table edge) to $y = L/n$. By symmetry, its center of mass lies midway down:
   $$y_{\text{cm}} = \frac{L}{2n} \quad (\text{below table level})$$
3. **Work Required to Pull Hanging Part Onto Table:**
   Work done by external agent equals the gain in gravitational potential energy:
   $$W_{\text{ext}} = \Delta U_g = m_{\text{hang}} g y_{\text{cm}} = \left(\frac{M}{n}\right) g \left(\frac{L}{2n}\right)$$
   $$\mathbf{W_{\text{pull}} = \frac{M g L}{2 n^2}}$$
   * *Example:* If $1/3$ of the chain hangs over the edge ($n = 3$): $W = \frac{MgL}{2(3^2)} = \frac{MgL}{18}$.


---


### 5.2 Conveyor Belt Mechanics & The 50% Efficiency Invariant
Sand falls vertically from a hopper at a constant rate $\frac{dm}{dt}$ onto a horizontal conveyor belt moving at steady speed $v$:
1. **Driving Force Required from the Motor:**
   The deposited sand must be accelerated from horizontal speed $0$ to speed $v$ in negligible time:
   $$\mathbf{F_{\text{drive}} = v \frac{dm}{dt}}$$
2. **Total Mechanical Power Delivered by the Motor:**
   $$\mathbf{P_{\text{motor}} = F_{\text{drive}} \cdot v = v^2 \frac{dm}{dt}}$$
3. **Rate of Increase of Kinetic Energy of the Deposited Sand:**
   $$\mathbf{\frac{dK}{dt} = \frac{d}{dt} \left[ \frac{1}{2} m v^2 \right] = \frac{1}{2} v^2 \frac{dm}{dt} = \frac{1}{2} P_{\text{motor}}}$$
4. **Thermal Heat Dissipation Rate Due to Friction:**
   While the sand slips on the belt before matching speed, friction performs negative relative work:
   $$\mathbf{P_{\text{heat}} = P_{\text{motor}} - \frac{dK}{dt} = \frac{1}{2} v^2 \frac{dm}{dt} = \frac{1}{2} P_{\text{motor}}}$$
   * **THE 50% EFFICIENCY THEOREM:** Exactly **50% of the mechanical energy supplied by the motor is converted into the kinetic energy of the moving mass**, while the remaining **50% is unconditionally dissipated into heat through friction during the slipping phase**, regardless of the friction coefficient $\mu$!


---


## 6. Master Formula Sheet & High-Yield Diagnostic Traps


### 6.1 Master Work, Power & Energy Formula Table


| Physical Concept / System | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Mechanical Work** | $W = \vec{F} \cdot \vec{s} = \int \vec{F} \cdot d\vec{r}$ | Area under $F-x$ curve |
| **Spring Restoring Work** | $W_s = \frac{1}{2} k (x_i^2 - x_f^2) = -\Delta U_s$ | $U_s = \frac{1}{2} k x^2$ |
| **Gravitational Work** | $W_g = -mg\Delta y = mg(y_i - y_f)$ | Path-independent |
| **Static Friction Work** | $\sum_{\text{system}} W_{f_s} \equiv 0$ | Zero net dissipation across system |
| **Kinetic Friction Dissipation** | $\sum_{\text{system}} W_{f_k} = -f_k s_{\text{rel}} < 0$ | Converted to thermal energy $Q$ |
| **Work-Energy Theorem** | $W_{\text{net}} = \Delta K = \frac{1}{2} m (v_f^2 - v_i^2)$ | Valid in all inertial frames |
| **Modified Work-Energy Theorem** | $W_{\text{NC}} + W_{\text{ext}} + W_{\text{pseudo}} = \Delta E_{\text{mech}}$ | Connects non-conservative work to $\Delta E$ |
| **Conservative Field Criterion** | $\vec{\nabla} \times \vec{F} = \vec{0} \iff \vec{F} = -\vec{\nabla} U$ | Curl-free vector field |
| **Force from Potential Curve** | $F(x) = -\frac{dU}{dx}$ | Negative slope of $U(x)$ |
| **Stable Equilibrium Condition** | $\frac{dU}{dx} = 0 \quad \text{and} \quad \frac{d^2U}{dx^2} > 0$ | Local minimum of $U$, $\omega = \sqrt{\frac{1}{m}\frac{d^2U}{dx^2}}$ |
| **Unstable Equilibrium Condition** | $\frac{dU}{dx} = 0 \quad \text{and} \quad \frac{d^2U}{dx^2} < 0$ | Local maximum of $U$, runaway force |
| **Neutral Equilibrium Condition** | $\frac{dU}{dx} = 0 \quad \text{and} \quad \frac{d^2U}{dx^2} = 0$ | Flat potential plateau |
| **Classical Turning Point** | $K(x) = E - U(x) = 0 \implies U(x) = E$ | Boundary of allowed motion |
| **Mechanical Power** | $P = \vec{F} \cdot \vec{v} = \frac{dW}{dt} = \frac{dK}{dt}$ | Scalar product of force and velocity |
| **Constant Power Velocity** | $v(t) = \sqrt{\frac{2Pt}{m}} \propto t^{1/2}$ | From rest under constant power $P$ |
| **Constant Power Displacement** | $x(t) = \frac{2}{3}\sqrt{\frac{2P}{m}} t^{3/2} \propto t^{3/2}$ | Distance traveled under constant $P$ |
| **Constant Power Acceleration** | $a(t) = \frac{P}{mv} \propto t^{-1/2} \propto \frac{1}{v}$ | Decreases with speed |
| **Hanging Chain Work** | $W = \frac{M g L}{2 n^2}$ | $1/n$ of length hanging |
| **Conveyor Belt Power** | $P_{\text{motor}} = v^2 \frac{dm}{dt}$ | $\frac{dK}{dt} = P_{\text{heat}} = \frac{1}{2} P_{\text{motor}}$ |


---


### 6.2 High-Yield Exam Traps & Common Conceptual Errors


#### Trap 1: The "Friction Work is Always Negative" Fallacy
* **The Error:** Stating that friction always performs negative work.
* **The Physics:** 
  1. **Static friction can do POSITIVE work** on an individual body (e.g., an accelerating block in a truck bed, or the upper block in a two-block system).
  2. **Kinetic friction can do POSITIVE work** on an individual body (e.g., a crate placed onto a running conveyor belt accelerates forward due to forward kinetic friction until speeds match).
  * What is ALWAYS negative is the **NET work done by kinetic friction across the ENTIRE INTERACTING SYSTEM** ($\sum W_{f_k} = -f_k s_{\text{rel}} < 0$).


#### Trap 2: The Normal Reaction Work Zero Fallacy
* **The Error:** Assuming normal reaction force never does mechanical work ($W_N = 0$).
* **The Physics:** $W_N = 0$ only when the contacting surface is **rigid and stationary**.
* If a person rides an accelerating elevator upward, normal force does positive work ($W_N = N \Delta y > 0$). When a wedge moves under a sliding block, the normal reaction does work on both the block and the wedge!


#### Trap 3: Equilibrium Stability Curvature Reversal
* **The Error:** Confusing the stability condition $\frac{d^2U}{dx^2} > 0$ with $\frac{d^2U}{dx^2} < 0$.
* **The Physics:** 
  * Stable equilibrium corresponds to a **potential energy MINIMUM** (concave upward, $\frac{d^2U}{dx^2} > 0$).
  * Unstable equilibrium corresponds to a **potential energy MAXIMUM** (concave downward, $\frac{d^2U}{dx^2} < 0$).
  * Remember the marble analogy: A marble at the bottom of a bowl is in stable equilibrium; a marble balanced on top of an inverted bowl is in unstable equilibrium.


#### Trap 4: Conveyor Belt Power 100% Kinetic Energy Fallacy
* **The Error:** Equating motor power to the rate of increase of kinetic energy of sand: $P = \frac{1}{2} v^2 \frac{dm}{dt}$.
* **The Physics:** To impart velocity $v$ to stationary sand, the motor must apply driving force $F = v(dm/dt)$ at speed $v$, requiring **total power $P = v^2(dm/dt)$**. Exactly half of this power is dissipated as thermal friction work during the unavoidable relative slipping phase!