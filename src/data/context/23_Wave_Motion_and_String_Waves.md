# Physics Revision Context: Chapter 23 — Wave Motion and String Waves

---

### 1.1 Physical Nature of Wave Motion
- **Definition:** A wave is an oscillatory disturbance propagating through a continuous medium or space that transports **energy and momentum** from one location to another **without any net transport of matter**.
- **Medium Prerequisites for Mechanical Waves:**
  1. **Elasticity:** Provides the restoring force so that displaced medium particles return to their equilibrium positions.
  2. **Inertia:** Allows medium particles to store kinetic energy and overshoot their equilibrium positions.
  3. **Low Internal Damping / Minimum Friction:** Ensures wave energy propagates across substantial distances without excessive dissipation.

### 1.2 Systematic Taxonomy of Waves

| Classification Basis | Category | Defining Mechanism & Examples |
| :--- | :--- | :--- |
| **Medium Requirement** | **Mechanical Waves** | Require a material deformable medium (elasticity + inertia); e.g., waves on strings, sound waves, seismic waves. |
| | **Electromagnetic Waves** | Require no material medium; propagate through vacuum via self-sustaining oscillating electric and magnetic fields; e.g., light, radio waves, X-rays ($c = 3 \times 10^8\text{ m/s}$). |
| | **Matter Waves** | De Broglie quantum waves associated with moving microscopic particles ($\lambda = h/p$). |
| **Particle Vibration Direction** | **Transverse Waves** | Particles of the medium oscillate **perpendicular** to the direction of wave propagation; require shear elasticity (propagate only in solids and on liquid surfaces, not in bulk fluids); e.g., string waves, surface water waves. |
| | **Longitudinal Waves** | Particles oscillate **parallel** to the direction of wave propagation; proceed via alternating compressions and rarefactions; require volume elasticity / bulk modulus (propagate in solids, liquids, and gases); e.g., sound waves in air. |
| **Energy Propagation** | **Progressive (Travelling) Waves** | Disturbance advances through the medium with definite velocity, continuously transporting energy from source outward. |
| | **Stationary (Standing) Waves** | Formed by interference of identical counter-propagating waves; disturbance remains spatially bounded; energy is localized within segments between nodes. |
| **Dimensionality** | **One-Dimensional (1D)** | Energy propagates along a single line; e.g., taut string, spring. |
| | **Two-Dimensional (2D)** | Surface ripples on liquids (circular wave fronts). |
| | **Three-Dimensional (3D)** | Spherical waves from a point source in 3D space; e.g., sound in air, light from a star. |

---

### 2.1 The General Wave Function
- Consider an arbitrary transverse pulse generated at the left boundary ($x = 0$) of a stretched horizontal string:
  $$y(0, t) = f(t)$$
- If the disturbance travels rigidly toward the $+x$ direction with constant wave speed $v_w$, the displacement of a particle at coordinate $x$ at time $t$ is identical to what occurred at $x = 0$ at an earlier time $\left(t - \frac{x}{v_w}\right)$:
  $$y(x, t) = f\left(t - \frac{x}{v_w}\right) = g(x - v_w t)$$
- **Directional Rules for Wave Functions:**
  - Wave propagating along **$+x$ direction:** $y(x, t) = f(a x - b t)$ or $f(b t - a x)$, where $v_w = \frac{b}{a}$.
  - Wave propagating along **$-x$ direction:** $y(x, t) = f(a x + b t)$ or $f(b t + a x)$, where $v_w = \frac{b}{a}$.
- **Mathematical Criterion for a Physical Wave:** The coordinates $x$ and $t$ must appear strictly as the linear combination $(k x \pm \omega t)$. Moreover, the function $f$ must remain finite and bounded for all real values of $x$ and $t$.
  - *Valid Examples:* $y = A \sin(k x - \omega t)$, $y = A e^{-(k x - \omega t)^2}$, $y = \frac{A}{1 + (x - v t)^2}$.
  - *Invalid Examples:* $y = A \sin(x^2 - v^2 t^2)$ (not a linear combination); $y = \frac{1}{x - vt}$ (diverges at $x = vt$).

### 2.2 The Linear Differential Wave Equation
- Differentiating $y = f(x - v t)$ twice with respect to position $x$ and time $t$:
  $$\frac{\partial y}{\partial x} = f'(x - v t), \quad \frac{\partial^2 y}{\partial x^2} = f''(x - v t)$$
  $$\frac{\partial y}{\partial t} = -v f'(x - v t), \quad \frac{\partial^2 y}{\partial t^2} = v^2 f''(x - v t)$$
- Eliminating $f''(x - v t)$ yields the universal **one-dimensional linear differential wave equation**:
  $$\frac{\partial^2 y}{\partial x^2} = \frac{1}{v^2} \frac{\partial^2 y}{\partial t^2}$$
  Every physical one-dimensional classical wave (string, acoustic, electromagnetic) satisfies this fundamental differential relation.

---

### 3.1 Standard Mathematical Formulations
- When the wave source executes simple harmonic motion (SHM) of amplitude $A$ and angular frequency $\omega$:
  $$y(x, t) = A \sin(\omega t - k x + \phi) \quad \text{or} \quad y(x, t) = A \sin(k x - \omega t + \phi)$$
- **Fundamental Wave Parameters:**
  1. **Amplitude ($A$):** Maximum transverse displacement of any medium particle from its equilibrium position.
  2. **Wavelength ($\lambda$):** Spatial period; the minimum distance between two consecutive medium particles oscillating in the exact same phase:
     $$k \lambda = 2\pi \implies \lambda = \frac{2\pi}{k}$$
  3. **Propagation Constant / Angular Wave Number ($k$):**
     $$k = \frac{2\pi}{\lambda} \quad (\text{SI Unit: rad/m})$$
  4. **Time Period ($T$) & Frequency ($f$):**
     $$T = \frac{1}{f} = \frac{2\pi}{\omega} \quad (\text{SI Units: s and Hz})$$
  5. **Wave Speed ($v_w$):** Rate of spatial propagation of the wave phase/profile:
     $$v_w = \frac{\lambda}{T} = f \lambda = \frac{\omega}{k}$$
  6. **Phase ($\Phi$) & Phase Difference ($\Delta \Phi$):**
     $$\Phi(x, t) = \omega t - k x + \phi$$
     - Spatial Phase Difference (at fixed time $t$ between two points separated by $\Delta x$):
       $$\Delta \Phi = k \Delta x = \frac{2\pi}{\lambda} \Delta x$$
     - Temporal Phase Difference (at fixed point $x$ over time interval $\Delta t$):
       $$\Delta \Phi = \omega \Delta t = \frac{2\pi}{T} \Delta t$$

---

### 4.1 Particle Velocity & Transverse Acceleration
- Medium particles do **not** travel along the string; they oscillate purely along the transverse $y$-direction about their fixed equilibrium coordinates $x$.
- **Instantaneous Particle Velocity ($v_p$):**
  $$v_p = \left( \frac{\partial y}{\partial t} \right)_x = \frac{\partial}{\partial t} [A \sin(\omega t - k x + \phi)] = \omega A \cos(\omega t - k x + \phi)$$
  - Maximum particle speed: $v_{p, \text{max}} = \omega A$.
  - At mean position ($y = 0$): $\cos(\omega t - k x + \phi) = \pm 1 \implies v_p = \pm \omega A$ (maximum).
  - At crests and troughs ($y = \pm A$): $\cos(\omega t - k x + \phi) = 0 \implies v_p = 0$.
- **Instantaneous Particle Acceleration ($a_p$):**
  $$a_p = \left( \frac{\partial^2 y}{\partial t^2} \right)_x = -\omega^2 A \sin(\omega t - k x + \phi) = -\omega^2 y$$
  - Maximum particle acceleration: $a_{p, \text{max}} = \omega^2 A$ (occurs at maximum displacement $y = \pm A$).

### 4.2 Fundamental Relation: Particle Velocity vs. Wave Velocity
- The spatial slope of the string at coordinate $x$ is:
  $$\left( \frac{\partial y}{\partial x} \right)_t = -k A \cos(\omega t - k x + \phi)$$
- Dividing particle velocity by spatial slope:
  $$\frac{v_p}{\frac{\partial y}{\partial x}} = \frac{\omega A \cos(\dots)}{-k A \cos(\dots)} = -\frac{\omega}{k} = -v_w$$
  $$v_p = -v_w \left( \frac{\partial y}{\partial x} \right) = -v_w \times (\text{Slope})$$
- **Directional Diagnostic Rules (for $v_w > 0$, wave moving $+x$):**
  - If $\text{Slope} > 0$ (rising profile): $v_p < 0$ (particle moving downward).
  - If $\text{Slope} < 0$ (falling profile): $v_p > 0$ (particle moving upward).
  - At crests and troughs: $\text{Slope} = 0 \implies v_p = 0$ (instantaneous particle rest).

---

### 5.1 Dynamic Derivation from Newton's Second Law
- Consider a small string element of length $\Delta l$, mass $\Delta m = \mu \Delta l$, forming an arc of radius $R$ subtending angle $\Delta \theta$ at its center of curvature, under tension $T$.
- In a reference frame moving rightward with wave speed $v$, the string element flows backward with tangential velocity $v$.
- The inward centripetal radial component of tension from both ends is:
  $$F_r = 2 T \sin\left(\frac{\Delta \theta}{2}\right) \approx 2 T \left(\frac{\Delta \theta}{2}\right) = T \Delta \theta = T \left(\frac{\Delta l}{R}\right)$$
- Applying Newton's second law for uniform circular motion:
  $$F_r = (\Delta m) a_c = (\mu \Delta l) \frac{v^2}{R}$$
  $$T \frac{\Delta l}{R} = \mu \Delta l \frac{v^2}{R} \implies v^2 = \frac{T}{\mu}$$
  $$v = \sqrt{\frac{T}{\mu}}$$
  where:
  - $T$ = Tension in the string (in $\text{N}$).
  - $\mu = \frac{m}{L}$ = Linear mass density (mass per unit length, in $\text{kg/m}$).

### 5.2 Linear Density in Terms of Material Properties
- For a cylindrical wire of cross-sectional radius $r$, diameter $D$, volumetric density $\rho$, and elastic Young's modulus $Y$:
  $$\mu = \frac{\text{Mass}}{\text{Length}} = \frac{\rho (\pi r^2 L)}{L} = \rho A = \pi r^2 \rho = \frac{\pi D^2}{4}\rho$$
  $$v = \sqrt{\frac{T}{\pi r^2 \rho}} = \sqrt{\frac{\sigma}{\rho}}$$
  where $\sigma = \frac{T}{A}$ is the longitudinal mechanical stress.
- **Thermal Stress Effect:** If a wire fixed between rigid supports at temperature $T_1$ is cooled to $T_2$ ($\Delta T = T_1 - T_2$), thermal contraction induces tension:
  $$T = Y A \alpha \Delta T \implies v = \sqrt{\frac{Y A \alpha \Delta T}{\rho A}} = \sqrt{\frac{Y \alpha \Delta T}{\rho}}$$

---

### 6.1 Kinetic & Potential Energy Densities
- Consider an infinitesimal element of mass $dm = \mu\,dx$:
  - **Kinetic Energy of Element:**
    $$dK = \frac{1}{2} (dm) v_p^2 = \frac{1}{2} (\mu\,dx) \left(\frac{\partial y}{\partial t}\right)^2$$
    $$u_k = \frac{dK}{dx} = \frac{1}{2}\mu \left(\frac{\partial y}{\partial t}\right)^2 = \frac{1}{2}\mu \omega^2 A^2 \cos^2(\omega t - k x)$$
  - **Elastic Potential Energy of Element:** The element is stretched from equilibrium length $dx$ to deformed length $dl = \sqrt{dx^2 + dy^2} \approx dx \left[1 + \frac{1}{2}\left(\frac{\partial y}{\partial x}\right)^2\right]$:
    $$dU = T (dl - dx) = \frac{1}{2} T \left(\frac{\partial y}{\partial x}\right)^2 dx$$
    Using $T = \mu v^2$ and $\frac{\partial y}{\partial x} = -\frac{1}{v}\frac{\partial y}{\partial t}$:
    $$u_p = \frac{dU}{dx} = \frac{1}{2} T \left(\frac{\partial y}{\partial x}\right)^2 = \frac{1}{2}(\mu v^2)\left(\frac{1}{v^2}\right)\left(\frac{\partial y}{\partial t}\right)^2 = \frac{1}{2}\mu \left(\frac{\partial y}{\partial t}\right)^2 = u_k$$
- **Fundamental Progressive Wave Energy Invariant:**
  $$u_k(x, t) = u_p(x, t) \quad \text{at every position } x \text{ and instant } t$$
  - *Crucial Difference from SHM:* In simple harmonic motion of a particle, kinetic and potential energies are out of phase ($K + U = \text{const}$). In a **travelling wave**, kinetic and potential energy densities are **completely in phase**: both are simultaneously maximal at the mean position ($y = 0$, where velocity and slope are greatest) and simultaneously zero at crests and troughs ($y = \pm A$).

### 6.2 Total Energy Density & Power Transmission
- **Total Instantaneous Energy Density:**
  $$u(x, t) = u_k + u_p = \mu \omega^2 A^2 \cos^2(\omega t - k x)$$
- **Spatial/Temporal Average Energy Density:**
  $$\langle u \rangle = \frac{1}{2}\mu \omega^2 A^2 = 2\pi^2 f^2 A^2 \mu \quad (\text{SI Unit: J/m})$$
- **Instantaneous Power Transmitted Across Coordinate $x$:**
  $$P(t) = -T \left(\frac{\partial y}{\partial x}\right)\left(\frac{\partial y}{\partial t}\right) = \mu v \omega^2 A^2 \cos^2(\omega t - k x)$$
- **Average Power Transmitted ($P_{\text{avg}}$):**
  $$P_{\text{avg}} = \langle P(t) \rangle = \frac{1}{2}\mu v \omega^2 A^2 = 2\pi^2 f^2 A^2 \mu v \quad (\text{SI Unit: Watts, W})$$
- **Wave Intensity ($I$):** Power per unit cross-sectional area $S$:
  $$I = \frac{P_{\text{avg}}}{S} = \frac{1}{2}\rho v \omega^2 A^2 = 2\pi^2 f^2 A^2 \rho v \quad (\text{SI Unit: W/m}^2)$$

---

### 6.3 Visual Preservation: Wave Kinematics & Energy Density

![Progressive Wave Kinematics and Energy Density Profiles](/media/string_wave_kinematics_and_energy_density.webp)
*Description: Two-panel diagnostic plot of a transverse progressive wave moving toward $+x$: (Top) Wave displacement profile $y(x) = A\sin(kx)$ with superimposed particle velocity vectors $v_p = -v_w(\partial y/\partial x)$ showing particles moving downward ($v_p < 0$) on segments with positive slope and upward ($v_p > 0$) on segments with negative slope, alongside stationary crests and troughs ($v_p = 0$); (Bottom) Spatial distributions of kinetic energy density $u_k$, potential energy density $u_p$, and total energy density $u_{\mathrm{total}} = \mu \omega^2 A^2 \cos^2(kx)$, highlighting that $u_k$ and $u_p$ peak simultaneously at $y = 0$ and vanish at the crests and troughs.*

---

### 7.1 Principle of Linear Superposition
- When two or more waves propagate simultaneously through the same elastic medium, the net resultant displacement of any medium particle at any instant is the vector (algebraic) sum of the displacements that each wave would produce individually:
  $$y(x, t) = y_1(x, t) + y_2(x, t) + \dots + y_n(x, t)$$

### 7.2 Interference of Co-Directional Harmonic Waves
- Let two waves of identical frequency $\omega$ and wave number $k$ travel along $+x$ with amplitudes $A_1, A_2$ and initial phase difference $\delta$:
  $$y_1 = A_1 \sin(k x - \omega t) \quad \text{and} \quad y_2 = A_2 \sin(k x - \omega t + \delta)$$
- The resultant wave is a single harmonic wave:
  $$y = A \sin(k x - \omega t + \epsilon)$$
  where:
  $$A = \sqrt{A_1^2 + A_2^2 + 2 A_1 A_2 \cos\delta}$$
  $$\tan\epsilon = \frac{A_2 \sin\delta}{A_1 + A_2 \cos\delta}$$
- **Constructive vs. Destructive Interference:**
  - **Constructive Interference:** $\cos\delta = +1 \implies \delta = 2n\pi$ ($n \in \mathbb{Z}$):
    $$A_{\text{max}} = A_1 + A_2 \implies I_{\text{max}} = (\sqrt{I_1} + \sqrt{I_2})^2$$
    *(If $A_1 = A_2 = A_0$: $A_{\text{max}} = 2 A_0$, $I_{\text{max}} = 4 I_0$).*
  - **Destructive Interference:** $\cos\delta = -1 \implies \delta = (2n + 1)\pi$ ($n \in \mathbb{Z}$):
    $$A_{\text{min}} = |A_1 - A_2| \implies I_{\text{min}} = (\sqrt{I_1} - \sqrt{I_2})^2$$
    *(If $A_1 = A_2 = A_0$: $A_{\text{min}} = 0$, $I_{\text{min}} = 0$).*

---

### 8.1 Boundary Conditions & Amplitude Relations
- When a wave propagating in string 1 ($v_1, \mu_1$) strikes a junction with string 2 ($v_2, \mu_2$) under constant tension $T$:
  $$y_i = A_i \sin(\omega t - k_1 x), \quad y_r = A_r \sin(\omega t + k_1 x), \quad y_t = A_t \sin(\omega t - k_2 x)$$
- Applying boundary continuity of displacement $y$ and transverse tension force component $T \frac{\partial y}{\partial x}$ at $x = 0$:
  $$A_r = \left( \frac{v_2 - v_1}{v_1 + v_2} \right) A_i = \left( \frac{k_1 - k_2}{k_1 + k_2} \right) A_i = \left( \frac{\sqrt{\mu_1} - \sqrt{\mu_2}}{\sqrt{\mu_1} + \sqrt{\mu_2}} \right) A_i$$
  $$A_t = \left( \frac{2 v_2}{v_1 + v_2} \right) A_i = \left( \frac{2 k_1}{k_1 + k_2} \right) A_i = \left( \frac{2\sqrt{\mu_1}}{\sqrt{\mu_1} + \sqrt{\mu_2}} \right) A_i$$

### 8.2 Phase Changes on Reflection
1. **Reflection at Rigid / Denser Boundary ($v_2 < v_1 \implies \mu_2 > \mu_1$):**
   - $A_r < 0 \implies$ The reflected pulse undergoes an **abrupt phase reversal of $\pi\text{ rad}$ ($180^\circ$)**. A crest reflects as a trough.
2. **Reflection at Free / Rarer Boundary ($v_2 > v_1 \implies \mu_2 < \mu_1$):**
   - $A_r > 0 \implies$ The reflected pulse undergoes **zero phase change** ($\Delta \phi = 0$). A crest reflects as an upright crest.
3. **Transmitted Wave Invariance:**
   - $A_t$ is strictly positive in all cases; **the transmitted wave never suffers a phase change** ($\Delta \phi_t = 0$).
   - Frequency $\omega$ is strictly invariant across the boundary ($f_1 = f_2$), while wave speed and wavelength adapt ($v = f \lambda$).

---

### 8.3 Visual Preservation: Boundary Reflection & Transmission

![Wave Reflection and Transmission at Boundaries](/media/wave_reflection_and_transmission_boundaries.webp)
*Description: Comparative illustration of wave pulse reflections: (Left) Reflection at a rigid/fixed boundary ($v_2 < v_1$), displaying an incident crest reflecting as an inverted trough with phase reversal $\Delta \phi = 180^\circ$ and amplitude $A_r = \frac{v_2-v_1}{v_1+v_2}A_i < 0$; (Right) Reflection at a free/open boundary ($v_2 > v_1$, represented by a frictionless ring on a vertical rod), showing an incident crest reflecting upright with zero phase change $\Delta \phi = 0^\circ$ and amplitude $A_r > 0$.*

---

### 9.1 Mathematical Superposition of Oppositely Directed Waves
- When two identical harmonic waves of equal amplitude $A$ and frequency $\omega$ travel in opposite directions along a taut string:
  $$y_1 = A \sin(k x - \omega t) \quad \text{and} \quad y_2 = A \sin(k x + \omega t)$$
- By trigonometric superposition:
  $$y = y_1 + y_2 = A [\sin(k x - \omega t) + \sin(k x + \omega t)] = [2 A \sin(k x)] \cos(\omega t)$$
  $$y(x, t) = A_s(x) \cos(\omega t) \quad \text{where } A_s(x) = 2 A \sin(k x)$$
- **Fundamental Characteristics of Standing Waves:**
  1. **Separation of Space and Time:** Unlike travelling waves $f(k x \pm \omega t)$, displacement is factored into a purely spatial envelope $A_s(x)$ modulated by a purely temporal harmonic oscillation $\cos(\omega t)$.
  2. **Nodes ($N$):** Points permanently at rest ($A_s = 0$):
     $$\sin(k x) = 0 \implies k x = n\pi \implies x = n \frac{\lambda}{2} = 0, \frac{\lambda}{2}, \lambda, \frac{3\lambda}{2}, \dots$$
     - Strain ($\frac{\partial y}{\partial x}$) and elastic stress are **maximal** at nodes.
  3. **Antinodes ($A$):** Points vibrating with maximum amplitude ($A_{\text{max}} = 2 A$):
     $$|\sin(k x)| = 1 \implies k x = (2n + 1)\frac{\pi}{2} \implies x = (2n + 1)\frac{\lambda}{4} = \frac{\lambda}{4}, \frac{3\lambda}{4}, \frac{5\lambda}{4}, \dots$$
     - Particle speed is **maximal** ($2\omega A$), while spatial strain vanishes identically ($\frac{\partial y}{\partial x} = 0$) at antinodes.
  4. **Spatial Spacing Rules:**
     - Distance between consecutive nodes: $\Delta x_{N-N} = \frac{\lambda}{2}$.
     - Distance between consecutive antinodes: $\Delta x_{A-A} = \frac{\lambda}{2}$.
     - Distance between adjacent node and antinode: $\Delta x_{N-A} = \frac{\lambda}{4}$.
  5. **Phase Uniformity within Loops:** All particles enclosed within a single loop (between two adjacent nodes) pass through their equilibrium positions simultaneously and vibrate in the **exact same phase**. Particles in adjacent loops oscillate in **antiphase** ($180^\circ$ phase difference).
  6. **Zero Net Energy Propagation:** Since nodes remain permanently stationary, no energy can flow across them. Energy remains trapped within each inter-nodal loop, oscillating cyclically between kinetic energy (when the string is flat through $y=0$) and potential energy (at maximum deflection $y = \pm A_s$).

---

### 10.1 Stretched String Fixed at Both Ends
- Boundary conditions: Fixed clamps require nodes at both boundaries: $y(0, t) = 0$ and $y(L, t) = 0$.
  $$\sin(k L) = 0 \implies k L = n\pi \implies \left(\frac{2\pi}{\lambda_n}\right) L = n\pi \implies L = n \frac{\lambda_n}{2}$$
  $$\lambda_n = \frac{2L}{n} \quad (n = 1, 2, 3, \dots)$$
- **Resonant Frequency Spectrum:**
  $$f_n = \frac{v}{\lambda_n} = n \left( \frac{v}{2L} \right) = \frac{n}{2L}\sqrt{\frac{T}{\mu}}$$
  - **Fundamental Frequency / 1st Harmonic ($n = 1$):** Single loop ($L = \lambda_1/2$):
    $$f_1 = \frac{v}{2L} = \frac{1}{2L}\sqrt{\frac{T}{\mu}}$$
  - **Second Harmonic / 1st Overtone ($n = 2$):** Two loops ($L = \lambda_2$):
    $$f_2 = 2 f_1 = \frac{v}{L} = \frac{1}{L}\sqrt{\frac{T}{\mu}}$$
  - **Third Harmonic / 2nd Overtone ($n = 3$):** Three loops ($L = 3\lambda_3/2$):
    $$f_3 = 3 f_1 = \frac{3v}{2L}$$
  - **Harmonic Series:** Both **even and odd harmonics** are present in integer ratios:
    $$f_1 : f_2 : f_3 : f_4 : \dots = 1 : 2 : 3 : 4 : \dots$$

### 10.2 Stretched String Fixed at One End and Free at the Other
- Boundary conditions: Node at $x = 0$ and Antinode at $x = L$:
  $$L = (2n - 1)\frac{\lambda_n}{4} \implies \lambda_n = \frac{4L}{2n - 1} \quad (n = 1, 2, 3, \dots)$$
- **Resonant Frequency Spectrum:**
  $$f_n = (2n - 1)\left( \frac{v}{4L} \right) = \frac{2n - 1}{4L}\sqrt{\frac{T}{\mu}}$$
  - **Fundamental Frequency ($n = 1$):** $f_1 = \frac{v}{4L}$.
  - **Only odd harmonics exist:**
    $$f_1 : f_2 : f_3 : \dots = 1 : 3 : 5 : \dots$$

---

### 10.3 Visual Preservation: Normal Modes of Vibration

![Standing Waves and Normal Modes of a Stretched String](/media/standing_waves_normal_modes_string.webp)
*Description: Three-panel harmonic mode diagram of a string of length $L$ fixed between rigid clamps at both ends: (Top) Fundamental mode ($n=1$, 1st harmonic) showing a single vibrating envelope with boundary nodes at $x=0, L$, central antinode at $x=L/2$, and wavelength $\lambda_1 = 2L$; (Middle) Second harmonic ($n=2$, 1st overtone) displaying two vibrating loops with nodes at $0, L/2, L$, antinodes at $L/4, 3L/4$, and wavelength $\lambda_2 = L$; and (Bottom) Third harmonic ($n=3$, 2nd overtone) illustrating three loops with four nodes, three antinodes, and wavelength $\lambda_3 = 2L/3$.*

---

### 11.1 The Sonometer Governing Equation
- The fundamental frequency of a wire stretched across sonometer bridges with vibrating length $L$, tension $T$, and linear density $\mu$ is:
  $$f = \frac{1}{2L}\sqrt{\frac{T}{\mu}} = \frac{1}{2L}\sqrt{\frac{M g}{\pi r^2 \rho}} = \frac{1}{2 L r}\sqrt{\frac{T}{\pi \rho}}$$

### 11.2 The Three Fundamental Sonometer Laws
4. **Law of Length:** Fundamental frequency is inversely proportional to resonating length ($T, \mu = \text{constant}$):
   $$f \propto \frac{1}{L} \implies f L = \text{constant}$$
5. **Law of Tension:** Fundamental frequency is directly proportional to the square root of tension ($L, \mu = \text{constant}$):
   $$f \propto \sqrt{T} \implies \frac{f}{\sqrt{T}} = \text{constant}$$
6. **Law of Mass Density:** Fundamental frequency is inversely proportional to the square root of linear mass density ($L, T = \text{constant}$):
   $$f \propto \frac{1}{\sqrt{\mu}} \propto \frac{1}{r\sqrt{\rho}}$$

---

### Archetype 1: Vertically Hanging Heavy Rope Under Gravity
- **Problem:** A uniform heavy rope of mass $M$ and length $L$ hangs vertically from a ceiling. A pulse is initiated at the bottom end.
- **Tension Profile:** At distance $x$ from the free lower end, tension is equal to the weight of the rope below it:
  $$T(x) = \left(\frac{M}{L} x\right) g = \mu g x$$
- **Local Wave Velocity:**
  $$v(x) = \sqrt{\frac{T(x)}{\mu}} = \sqrt{\frac{\mu g x}{\mu}} = \sqrt{g x}$$
  *(Velocity increases continuously from zero at the bottom to $\sqrt{gL}$ at the ceiling).*
- **Transit Time from Bottom to Top:**
  $$v = \frac{dx}{dt} = \sqrt{gx} \implies dt = \frac{dx}{\sqrt{gx}}$$
  $$t = \int_0^L \frac{dx}{\sqrt{g x}} = \frac{1}{\sqrt{g}} \left[ 2\sqrt{x} \right]_0^L = 2\sqrt{\frac{L}{g}}$$
- **Effective Upward Wave Acceleration:**
  $$a = v \frac{dv}{dx} = \sqrt{gx} \left(\frac{\sqrt{g}}{2\sqrt{x}}\right) = \frac{g}{2} = \text{constant}$$
  Using kinematic equation $L = \frac{1}{2} a t^2 = \frac{1}{2}\left(\frac{g}{2}\right) t^2 \implies t = 2\sqrt{\frac{L}{g}}$.

### Archetype 2: Hanging Rope Supporting a Concentrated Bottom Mass $M_0$
- If a mass $M_0$ is suspended from the bottom:
  $$T(x) = M_0 g + \mu g x \implies v(x) = \sqrt{\frac{M_0 g + \mu g x}{\mu}} = \sqrt{\frac{M_0 g}{\mu} + gx}$$
  $$t = \int_0^L \frac{dx}{\sqrt{\frac{M_0 g}{\mu} + gx}} = \frac{2}{g} \left[ \sqrt{\frac{M_0 g}{\mu} + gL} - \sqrt{\frac{M_0 g}{\mu}} \right]$$

### Archetype 3: Composite Strings (Junction Boundary Conditions)
- Two strings with linear densities $\mu_1$ and $\mu_2$ are joined under uniform tension $T$.
- Ratio of wavelengths: $\frac{\lambda_1}{\lambda_2} = \frac{v_1}{v_2} = \sqrt{\frac{\mu_2}{\mu_1}}$.
- Condition for joint to be a Node: Number of loops $p_1$ and $p_2$ must satisfy:
  $$\frac{p_1}{p_2} = \frac{L_1 / (\lambda_1/2)}{L_2 / (\lambda_2/2)} = \frac{L_1 v_2}{L_2 v_1} = \frac{L_1}{L_2}\sqrt{\frac{\mu_1}{\mu_2}}$$

### Archetype 4: Sonometer with Submerged Hanging Load
- Sonometer resonates at frequency $f$ with hanging load of mass $M$ and density $\rho_b$ in air ($T = M g$).
- When the load is completely immersed in water of density $\rho_w$:
  $$T' = M g \left(1 - \frac{\rho_w}{\rho_b}\right) \implies \frac{f'}{f} = \sqrt{\frac{T'}{T}} = \sqrt{1 - \frac{\rho_w}{\rho_b}}$$
- If resonating length is adjusted from $L$ to $L'$ to restore original frequency:
  $$\frac{L'}{L} = \sqrt{\frac{T'}{T}} = \sqrt{1 - \frac{\rho_w}{\rho_b}}$$
