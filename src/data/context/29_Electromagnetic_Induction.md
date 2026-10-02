# Physics Revision Context: Chapter 29 — Electromagnetic Induction

---

### 1.1 Magnetic Flux ($\Phi_B$)
- **Definition:** The surface integral of the normal component of magnetic field $\vec{B}$ passing through an oriented surface of area $\vec{A}$:
  $$\Phi_B = \int_S \vec{B} \cdot d\vec{A}$$
- For a flat surface of area $A$ in a uniform magnetic field $\vec{B}$ at an angle $\theta$ between $\vec{B}$ and the area normal $\hat{n}$:
  $$\Phi_B = B A \cos\theta = \vec{B} \cdot \vec{A}$$
- **Units and Dimensions:**
  - SI Unit: **Weber ($\text{Wb}$)** = $\text{Tesla}\cdot\text{m}^2 = \text{V}\cdot\text{s}$.
  - CGS Unit: Maxwell ($1\text{ Wb} = 10^8\text{ Maxwell}$).
  - Dimensional formula: $[\Phi_B] = [M L^2 T^{-2} I^{-1}]$.
- **Flux Sign Invariant:** Magnetic flux is a scalar quantity. It is positive when $\theta < 90^\circ$, negative when $\theta > 90^\circ$, and identically zero when the magnetic field lies parallel to the plane of the loop ($\theta = 90^\circ$).

### 1.2 Faraday's Laws of Electromagnetic Induction
1. **First Law (Qualitative):** Whenever the magnetic flux linked with a closed conducting loop changes with time (or magnetic flux lines are cut by a moving conductor), an electromotive force (EMF) is induced in the loop. If the circuit is closed, an induced current flows. The induced EMF persists only as long as the magnetic flux continues to change.
2. **Second Law (Quantitative):** The magnitude of the induced EMF ($\mathcal{E}$) in a circuit is directly proportional to the time rate of change of magnetic flux linked with the circuit:
  $$|\mathcal{E}| = \frac{d\Phi_B}{dt}$$
  For a closely wound coil of $N$ turns:
  $$|\mathcal{E}| = N \frac{d\Phi_B}{dt} = \frac{d(N\Phi_B)}{dt} = \frac{d\lambda_{\text{flux}}}{dt}$$
  where $\lambda_{\text{flux}} = N\Phi_B$ is the **total flux linkage**.

### 1.3 Lenz's Law & Principle of Energy Conservation
- **Lenz's Law:** The polarity of the induced EMF and the direction of the induced current are always such that they produce magnetic effects that **oppose the very cause (flux change or relative motion) that produces them**:
  $$\mathbf{Faraday\text{-}Lenz\ Law:}\quad \mathcal{E} = -\frac{d\Phi_B}{dt} = -N \frac{d\Phi_B}{dt}$$
- **Induced Current and Charge Flow:**
  - If the total loop resistance is $R$:
    $$i(t) = \frac{\mathcal{E}}{R} = -\frac{1}{R}\frac{d\Phi_B}{dt}$$
  - **Total Charge Transported ($\Delta q$):**
    $$\Delta q = \int i(t)\,dt = \frac{1}{R}\int |d\Phi_B| = \frac{|\Delta \Phi_B|}{R}$$
  - *Crucial JEE Invariant:* The total charge $\Delta q$ flown through a circuit depends strictly on the **net change in flux ($|\Delta \Phi_B|$) and circuit resistance ($R$)**, and is **completely independent of the time duration (rate of flux change)**.
- **Energy Conservation Proof:**
  - When a magnet approaches a conducting ring with its North pole forward, an anticlockwise current (as seen from the magnet) is induced, creating a repelling magnetic North pole on the near face.
  - An external agent must perform positive mechanical work against this magnetic repulsion to advance the magnet.
  - This mechanical work is exactly converted into electrical energy and dissipated as Joule heating ($H = \int i^2 R\,dt$).
  - If the induced polarity attracted the magnet, the magnet would self-accelerate without external work, generating infinite free electrical energy and violating the First Law of Thermodynamics.

---

### 2.1 Translational Motional EMF
- **Physical Origin:** When a conducting rod of length $\vec{l}$ moves with velocity $\vec{v}$ through a magnetic field $\vec{B}$, free conduction electrons experience a magnetic Lorentz force:
  $$\vec{F}_m = -e (\vec{v} \times \vec{B})$$
- This force drives negative charge to one end of the conductor, leaving an excess of positive charge at the other end. The resulting charge separation creates an internal electrostatic field $\vec{E}$ that opposes further migration.
- At dynamic equilibrium:
  $$q \vec{E} + q (\vec{v} \times \vec{B}) = 0 \implies \vec{E} = -(\vec{v} \times \vec{B})$$
- The potential difference (induced EMF) between the endpoints is:
  $$\mathbf{Translational\ Motional\ EMF:}\quad \mathcal{E} = \int_A^B (\vec{v} \times \vec{B}) \cdot d\vec{l} = (\vec{v} \times \vec{B}) \cdot \vec{l}$$
- **Mutual Orthogonality Case ($\vec{v} \perp \vec{B} \perp \vec{l}$):**
  $$\mathcal{E} = B v l$$
- **High-Yield Invariant Rules for Translating Conductors:**
  1. *Curved Conductor:* For an arbitrary curved wire moving with uniform velocity $\vec{v}$ in a uniform magnetic field $\vec{B}$, the induced EMF depends only on the vector displacement $\vec{L}$ connecting the initial and final endpoints:
     $$\mathcal{E} = (\vec{v} \times \vec{B}) \cdot \vec{L}$$
  2. *Closed Conducting Loop:* For any closed loop of arbitrary shape translating rigidly in a uniform magnetic field:
     $$\mathcal{E} = \oint (\vec{v} \times \vec{B}) \cdot d\vec{l} = (\vec{v} \times \vec{B}) \cdot \oint d\vec{l} \equiv 0$$
     Zero net EMF is induced in a translating closed loop within a spatially uniform magnetic field.

---

### 2.2 Rotational Motional EMF
When a conductor rotates in a magnetic field, different segments move at different linear speeds ($v = \omega r$).

3. **Conducting Rod Rotating About One End:**
   - A straight rod of length $l$ rotates with uniform angular velocity $\omega$ in a plane perpendicular to a uniform magnetic field $\vec{B}$.
   - A differential element $dr$ at radial distance $r$ from the axis moves with tangential speed $v(r) = \omega r$.
   - Elemental EMF across $dr$:
     $$d\mathcal{E} = B v(r)\,dr = B (\omega r)\,dr$$
   - Total induced EMF between the center (pivot) and the free tip:
     $$\mathbf{Rotational\ EMF:}\quad \mathcal{E} = \int_0^l B \omega r\,dr = \frac{1}{2} B \omega l^2$$
4. **Rotating Conducting Disc (Faraday Homopolar Generator):**
   - A solid circular metallic disc of radius $R$ rotates with angular velocity $\omega$ about its central axle in a perpendicular magnetic field $\vec{B}$.
   - The disc can be viewed as an infinite collection of radial rods connected in parallel between the center axle and the outer circumferential rim:
     $$\mathcal{E}_{\text{center-rim}} = \frac{1}{2} B \omega R^2$$
5. **Cycle Wheel with $N$ Metallic Spokes:**
   - A wheel of radius $R$ with $N$ metallic spokes rotates in a plane perpendicular to uniform $\vec{B}$.
   - Each individual spoke induces an EMF $\mathcal{E}_1 = \frac{1}{2} B \omega R^2$.
   - Because all $N$ spokes are connected in parallel between the axle and the conducting rim:
     $$\mathbf{Wheel\ EMF:}\quad \mathcal{E}_{\text{net}} = \frac{1}{2} B \omega R^2 \quad (\mathbf{Strictly\ independent\ of\ } N!)$$
   - If each spoke has internal resistance $r$, the net internal resistance of the wheel is:
     $$r_{\text{eq}} = \frac{r}{N}$$

---

### 2.3 Visual Preservation: Motional EMF & Rail Dynamics

![Motional EMF and Rail Dynamics](/media/motional_emf_and_rail_dynamics.webp)
*Description: Two-panel electrodynamic diagnostic schematic: (A) Dynamic rail system showing a conducting rod of mass $m$, length $l$ translating on smooth rails under external force $F$, illustrating retarding Lorentz force $F_m = i l B = \frac{B^2 l^2 v}{R+r}$ and asymptotic exponential velocity convergence to terminal velocity $v_t = \frac{F(R+r)}{B^2 l^2}$; (B) Rotational motional EMF architecture comparing rotating rods ($\mathcal{E} = \frac{1}{2}B\omega l^2$), Faraday homopolar discs ($\mathcal{E} = \frac{1}{2}B\omega R^2$), and $N$-spoked bicycle wheels where parallel cell combination leaves open-circuit EMF invariant.*

---

### 3.1 Field-Theoretic Maxwell-Faraday Formulation
- A time-varying magnetic field produces an electric field in space, even in vacuum without any physical conducting loops:
  $$\mathbf{Maxwell\text{-}Faraday\ Equation:}\quad \oint_C \vec{E}_{\text{ind}} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} = -\int_S \frac{\partial \vec{B}}{\partial t} \cdot d\vec{A}$$
- **Physical Nature of Induced Electric Field ($\vec{E}_{\text{ind}}$):**
  1. **Non-Conservative:** $\oint \vec{E}_{\text{ind}} \cdot d\vec{l} \ne 0$. Electric potential cannot be defined for an induced electric field.
  2. **Closed Field Lines:** Induced electric field lines form continuous, closed concentric loops without beginning or terminating on electric charges.
  3. **Non-Electrostatic:** Generated purely by $\frac{\partial \vec{B}}{\partial t}$, not by static charge distributions ($\vec{\nabla} \cdot \vec{E}_{\text{ind}} = 0$).

### 3.2 Cylindrical Time-Varying Magnetic Field Region
Consider a cylindrical region of radius $R$ containing a uniform magnetic field $\vec{B}(t)$ directed along the cylinder axis, changing at rate $\frac{dB}{dt}$.
6. **Inside the Field Region ($r \le R$):**
   - Choose a concentric circular integration loop of radius $r$:
     $$\oint \vec{E}_{\text{ind}} \cdot d\vec{l} = E_{\text{ind}} (2\pi r) = -\frac{d}{dt}(B \cdot \pi r^2) = -\pi r^2 \frac{dB}{dt}$$
     $$\mathbf{Inside:}\quad E_{\text{ind}}(r) = \frac{r}{2} \left|\frac{dB}{dt}\right| \quad (E \propto r)$$
   - The field intensity is zero at the central axis ($r = 0$) and increases linearly with radial distance $r$.
7. **At the Boundary ($r = R$):**
   $$E_{\text{max}} = \frac{R}{2} \left|\frac{dB}{dt}\right|$$
8. **Outside the Field Region ($r > R$):**
   - The total magnetic flux enclosed by a circle of radius $r > R$ is constant ($B \cdot \pi R^2$):
     $$\oint \vec{E}_{\text{ind}} \cdot d\vec{l} = E_{\text{ind}} (2\pi r) = -\frac{d}{dt}(B \cdot \pi R^2) = -\pi R^2 \frac{dB}{dt}$$
     $$\mathbf{Outside:}\quad E_{\text{ind}}(r) = \frac{R^2}{2r} \left|\frac{dB}{dt}\right| \quad \left(E \propto \frac{1}{r}\right)$$
   - The field intensity attenuates hyperbolically as $1/r$ outside the magnetic region.

---

### 3.3 Visual Preservation: Induced Electric Field Profile

![Induced Electric Field in Cylindrical Region](/media/induced_electric_field_cylindrical_region.webp)
*Description: Two-panel field-theoretic graphic: (A) Cross-section of a cylindrical magnetic region of radius $R$ with time-varying field $dB/dt > 0$, depicting concentric circular electric field streamlines circulating tangentially; (B) Spatial profile of induced electric field intensity $E_{\mathrm{ind}}$ versus radial distance $r$, demonstrating linear growth $E \propto r$ for $r \leq R$ peaking at $E_{\mathrm{max}} = \frac{R}{2}|\frac{dB}{dt}|$ followed by hyperbolic decay $E \propto 1/r$ for $r > R$.*

---

### 4.1 Rod Accelerated by a Constant Force ($F_{\text{ext}}$)
- A conducting rod of mass $m$, length $l$, and resistance $r$ rests on two smooth parallel horizontal conducting rails connected by a load resistor $R$. A uniform magnetic field $\vec{B}$ is directed perpendicular into the plane.
- A constant horizontal force $F_{\text{ext}}$ pulls the rod starting from rest at $t = 0$.
9. **Electrodynamic Equations:**
   - Motional EMF: $\mathcal{E} = B v l$.
   - Induced Current: $i = \frac{B v l}{R + r}$.
   - Opposing Magnetic Force (Ampere force):
     $$F_m = i l B = \frac{B^2 l^2 v}{R + r}$$
   - Newton's Second Law for the rod:
     $$F_{\text{ext}} - \frac{B^2 l^2 v}{R + r} = m \frac{dv}{dt}$$
10. **Terminal Velocity ($v_t$):**
   - As velocity increases, retarding force $F_m$ grows until $F_m = F_{\text{ext}}$, where acceleration vanishes ($a = 0$):
     $$\mathbf{Terminal\ Velocity:}\quad v_t = \frac{F_{\text{ext}}(R + r)}{B^2 l^2}$$
11. **Velocity-Time Kinematics:**
   $$m \frac{dv}{dt} = \frac{B^2 l^2}{R + r}(v_t - v) \implies \int_0^v \frac{dv}{v_t - v} = \frac{B^2 l^2}{m(R + r)}\int_0^t dt$$
   $$v(t) = v_t \left(1 - e^{-t/\tau}\right)$$
   where the mechanical time constant is:
   $$\tau = \frac{m(R + r)}{B^2 l^2}$$
12. **Conservation of Power at Steady State ($t \to \infty$):**
   - Mechanical power supplied by external agent:
     $$P_{\text{mech}} = F_{\text{ext}} v_t = F_{\text{ext}} \left[\frac{F_{\text{ext}}(R + r)}{B^2 l^2}\right] = \frac{F_{\text{ext}}^2 (R + r)}{B^2 l^2}$$
   - Rate of Joule heating in total resistance:
     $$P_{\text{heat}} = i_t^2 (R + r) = \left[\frac{B v_t l}{R + r}\right]^2 (R + r) = \frac{B^2 l^2 v_t^2}{R + r} = \frac{F_{\text{ext}}^2 (R + r)}{B^2 l^2}$$
   - $$P_{\text{mech}} \equiv P_{\text{heat}}$$
   Mechanical power is completely converted into Joule heat; the kinetic energy of the rod remains constant.

### 4.2 Rod Connected Across a Capacitor ($C$)
- If the load resistor is replaced by an ideal capacitor $C$:
  - Charge on capacitor at speed $v$: $q(t) = C \mathcal{E} = C B v l$.
  - Current: $i(t) = \frac{dq}{dt} = C B l \frac{dv}{dt} = C B l a$.
  - Equation of motion:
    $$F_{\text{ext}} - i l B = m a \implies F_{\text{ext}} - (C B^2 l^2) a = m a$$
    $$a = \frac{F_{\text{ext}}}{m + C B^2 l^2} = \text{constant}$$
  - *Remarkable Invariant:* The rod moves with **constant acceleration**; the presence of the capacitor acts as an additional effective inertia (mass) $\Delta m = C B^2 l^2$.

---

### 5.1 Self-Inductance ($L$)
- **Definition:** The property of an electrical circuit by virtue of which it opposes any change in the current flowing through it by inducing a counter-electromotive force (back-EMF):
  $$N\Phi_B = L i \implies \mathcal{E} = -L \frac{di}{dt}$$
- **SI Unit:** **Henry ($\text{H}$)** = $\text{Wb/A} = \text{V}\cdot\text{s/A} = \Omega\cdot\text{s}$.
- **Self-Inductance of an Ideal Long Solenoid:**
  - For a solenoid of length $l$, cross-sectional area $A$, and $n$ turns per unit length ($N = n l$):
    $$B = \mu_0 n i$$
    $$\Phi_1 = B A = \mu_0 n i A$$
    $$N\Phi_B = (n l)(\mu_0 n i A) = (\mu_0 n^2 A l) i$$
    $$\mathbf{Solenoid\ Inductance:}\quad L = \mu_0 n^2 A l = \mu_0 \frac{N^2 A}{l} = \mu_0 n^2 V_{\text{vol}}$$
  - If the core contains a magnetic material of relative permeability $\mu_r$:
    $$L = \mu_r \mu_0 n^2 A l$$

### 5.2 Mutual Inductance ($M$) & Reciprocity Theorem
- **Definition:** When two coils are placed in proximity, a changing current in one coil (primary) induces an EMF in the adjacent coil (secondary):
  $$N_2 \Phi_{21} = M_{21} i_1 \implies \mathcal{E}_2 = -M_{21}\frac{di_1}{dt}$$
- **Reciprocity Theorem:** The mutual inductance between two coils is symmetric and independent of which coil carries the current:
  $$M_{12} = M_{21} = M$$
- **Coupling Coefficient ($k$):**
  $$M = k \sqrt{L_1 L_2} \quad (0 \le k \le 1)$$
  - $k = 1$: Perfect magnetic flux linkage (coils closely wound on a high-$\mu_r$ iron core).
  - $k = 0$: Complete magnetic decoupling (perpendicular orientation or infinite separation).
- **Combination of Inductors with Mutual Coupling:**
  - **Series Aiding (Fluxes Add):** $L_{\text{eq}} = L_1 + L_2 + 2M$
  - **Series Opposing (Fluxes Oppose):** $L_{\text{eq}} = L_1 + L_2 - 2M$
  - **Parallel Aiding:** $L_{\text{eq}} = \frac{L_1 L_2 - M^2}{L_1 + L_2 - 2M}$

### 5.3 Magnetic Energy Stored in an Inductor
- Power delivered against back-EMF:
  $$P = |\mathcal{E}| i = \left(L\frac{di}{dt}\right) i$$
- Total magnetic work / energy stored:
  $$U_B = \int_0^I L i\,di = \frac{1}{2} L I^2$$
- **Magnetic Energy Density ($u_B$):** Energy stored per unit volume of magnetic field:
  $$u_B = \frac{U_B}{A l} = \frac{\frac{1}{2}(\mu_0 n^2 A l)i^2}{A l} = \frac{1}{2}\mu_0 n^2 i^2 = \frac{(\mu_0 n i)^2}{2\mu_0} = \frac{B^2}{2\mu_0} \quad (\text{J/m}^3)$$

---

### 6.1 Growth of Current in a Series $R$-$L$ Circuit
Consider an inductor $L$ and resistor $R$ connected in series across a battery of constant EMF $E$ via a switch closed at $t = 0$.
13. **Differential Equation (Kirchhoff's Voltage Law):**
   $$E - L \frac{di}{dt} - i R = 0 \implies L \frac{di}{dt} = E - i R$$
14. **Current-Time Solution:**
   $$\int_0^i \frac{di}{E - i R} = \frac{1}{L}\int_0^t dt \implies i(t) = \frac{E}{R}\left(1 - e^{-R t / L}\right)$$
   $$\mathbf{Current\ Growth:}\quad i(t) = I_0 \left(1 - e^{-t / \tau_L}\right)$$
   where:
   - $I_0 = \frac{E}{R}$ = Steady-state maximum saturation current.
   - $\tau_L = \frac{L}{R}$ = **Inductive Time Constant**.
15. **Key Transient Benchmarks:**
   - At $t = 0$: $i(0) = 0$. **An unenergized inductor acts as an open circuit (infinite impedance).**
   - At $t = \tau_L$: $i(\tau_L) = I_0 (1 - e^{-1}) \approx 0.632 I_0$ ($63.2\%$ of saturation value).
   - At $t \to \infty$: $i(\infty) = I_0 = \frac{E}{R}$. **An inductor in steady state acts as an ideal short circuit (zero impedance).**

### 6.2 Decay of Current in an $R$-$L$ Circuit
If a fully energized inductor carrying steady current $I_0 = E/R$ is disconnected from the battery and shorted through resistor $R$:
$$-L \frac{di}{dt} - i R = 0 \implies \int_{I_0}^i \frac{di}{i} = -\frac{R}{L}\int_0^t dt$$
$$\mathbf{Current\ Decay:}\quad i(t) = I_0 e^{-t / \tau_L}$$
- At $t = \tau_L$: $i(\tau_L) = I_0 e^{-1} \approx 0.368 I_0$ (current drops to $36.8\%$ of its initial value).

### 6.3 Harmonic $L$-$C$ Oscillations
- An ideal capacitor $C$ with initial charge $Q_0$ is discharged through an ideal inductor $L$ (zero resistance).
- By KVL:
  $$\frac{q}{C} - L \frac{di}{dt} = 0 \quad \text{with } i = -\frac{dq}{dt}$$
  $$\frac{d^2 q}{dt^2} + \frac{1}{LC} q = 0 \implies \frac{d^2 q}{dt^2} + \omega_0^2 q = 0$$
- **Natural Angular Frequency and Period:**
  $$\omega_0 = \frac{1}{\sqrt{LC}}, \quad T = 2\pi\sqrt{LC}, \quad f = \frac{1}{2\pi\sqrt{LC}}$$
- **Charge, Current, and Energetics:**
  $$q(t) = Q_0 \cos(\omega_0 t), \quad i(t) = -\omega_0 Q_0 \sin(\omega_0 t) = I_{\text{max}} \sin(\omega_0 t)$$
  where $I_{\text{max}} = \frac{Q_0}{\sqrt{LC}}$.
  $$U_E(t) = \frac{q^2}{2C} = \frac{Q_0^2}{2C}\cos^2(\omega_0 t)$$
  $$U_B(t) = \frac{1}{2} L i^2 = \frac{Q_0^2}{2C}\sin^2(\omega_0 t)$$
  $$U_{\text{total}} = U_E(t) + U_B(t) = \frac{Q_0^2}{2C} = \text{constant}$$

---

### 6.4 Visual Preservation: $R$-$L$ Transients & $L$-$C$ Oscillations

![R-L Circuit Transients and L-C Oscillations](/media/rl_circuit_transients_and_lc_oscillations.webp)
*Description: Two-panel circuit analytics graphic: (A) Transients in a series $R$-$L$ circuit showing current growth $i(t) = I_0(1 - e^{-t/\tau_L})$ and decay $i(t) = I_0 e^{-t/\tau_L}$ with benchmark levels $0.632\,I_0$ and $0.368\,I_0$ marked at $t = \tau_L = L/R$; (B) Harmonic $L$-$C$ oscillation energy exchange cycles displaying the continuous transformation between electrostatic capacitive energy $U_E = \frac{q^2}{2C}$ and magnetic inductive energy $U_B = \frac{1}{2}Li^2$ while maintaining total energy $U_{\mathrm{total}} = \text{constant}$.*

---

### Archetype 1: Ring Falling Through a Non-Uniform Magnetic Field
- **Problem:** A metallic horizontal ring of mass $m$ and radius $R$ is released from rest in a region where the vertical magnetic field has a radial gradient: $B_z(z) = B_0 (1 + \alpha z)$. Find its terminal velocity.
- **Solution:**
  - Magnetic flux through ring at height $z$: $\Phi_B = B_z(z) \cdot \pi R^2 = \pi R^2 B_0 (1 + \alpha z)$.
  - Induced EMF: $\mathcal{E} = -\frac{d\Phi_B}{dt} = -\pi R^2 B_0 \alpha \frac{dz}{dt} = -\pi R^2 B_0 \alpha v$.
  - Induced current: $i = \frac{\mathcal{E}}{R_{\text{ring}}} = \frac{\pi R^2 B_0 \alpha v}{R_{\text{ring}}}$.
  - The vertical magnetic force opposing gravity:
    $$F_m = \frac{(\pi R^2 B_0 \alpha)^2 v}{R_{\text{ring}}}$$
  - At terminal velocity, $F_m = mg$:
    $$v_t = \frac{mg R_{\text{ring}}}{(\pi R^2 B_0 \alpha)^2}$$

### Archetype 2: Net Charge Flown During Loop Rotation
- **Problem:** A flat circular coil of $N = 100$ turns, radius $r = 10\text{ cm}$, and resistance $R = 10\,\Omega$ is held perpendicular to a uniform magnetic field $B = 0.5\text{ T}$. It is rapidly rotated through $180^\circ$ about its diameter. Find the total charge flown through the coil.
- **Solution:**
  - Initial flux linkage: $\Phi_i = N B A = 100 \times 0.5 \times \pi (0.1)^2 = 0.5\pi\text{ Wb}$.
  - Final flux linkage after $180^\circ$ rotation: $\Phi_f = -N B A = -0.5\pi\text{ Wb}$.
  - Net change in flux linkage:
    $$|\Delta \Phi| = |\Phi_f - \Phi_i| = 2 N B A = 1.0\pi\text{ Wb}$$
  - Total charge transported:
    $$\Delta q = \frac{|\Delta \Phi|}{R} = \frac{\pi}{10} \approx 0.314\text{ Coulombs}$$
  - *Note:* This result is completely independent of the speed of rotation.

### Archetype 3: Multi-Loop Mutual Inductance Calculation
- **Problem:** A small circular coil of radius $r$ and $N_1$ turns is placed concentrically and coplanar inside a very large circular coil of radius $R$ ($R \gg r$) with $N_2$ turns. Find their mutual inductance $M$.
- **Solution:**
  - Assume current $i$ flows in the **large outer coil**:
    $$B_{\text{center}} = \frac{\mu_0 N_2 i}{2R}$$
  - Because $r \ll R$, the magnetic field over the small inner coil is virtually uniform and equal to $B_{\text{center}}$.
  - Magnetic flux linked with the small inner coil:
    $$\Phi_1 = N_1 (B_{\text{center}} A_1) = N_1 \left(\frac{\mu_0 N_2 i}{2R}\right)(\pi r^2) = \left(\frac{\mu_0 \pi N_1 N_2 r^2}{2R}\right) i$$
  - By definition $\Phi_1 = M i$:
    $$\mathbf{Mutual\ Inductance:}\quad M = \frac{\mu_0 \pi N_1 N_2 r^2}{2R}$$
  - By the Reciprocity Theorem, this is also the exact flux through the outer coil if current $i$ flows in the inner coil.
