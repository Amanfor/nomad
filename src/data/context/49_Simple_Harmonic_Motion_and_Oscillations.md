Physics Revision Context: Chapter 49 — Simple Harmonic Motion & Oscillations


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Simple Harmonic Motion/`, `1-Theory--SHM-E.pdf`, `2._Handout.pdf`, and `SHM_Hint__Solution.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Physics Mechanics Core — Linear & Angular SHM Fundamentals ($F = -kx$, $\ddot{x} + \omega^2 x = 0$), Kinematic Waveforms ($x(t) = A\sin(\omega t + \phi)$, $v(t) = \pm \omega\sqrt{A^2 - x^2}$, $a(t) = -\omega^2 x$) & Phase Lead Hierarchy ($v$ leads $x$ by $\pi/2$, $a$ leads $x$ by $\pi$), State-Space Phase Portraits ($\frac{x^2}{A^2} + \frac{v^2}{(A\omega)^2} = 1$ Ellipse), Reference Phasor Circle & Exact Segment Transit Times ($0 \to A/2$ in $T/12$, $A/2 \to A$ in $T/6$), Mechanical Energy Interplay ($K = \frac{1}{2}k(A^2 - x^2)$, $U = \frac{1}{2}kx^2$, $E = \frac{1}{2}kA^2 = \text{const}$), Equipartition Coordinates ($x = \pm A/\sqrt{2}$), Double-Frequency Energy Pulsations ($\omega_E = 2\omega_{\text{SHM}}$), The Time-Average vs. Position-Average Paradox ($\langle K \rangle_t = E/2$ vs. $\langle K \rangle_x = 2E/3$), Spring-Mass Networks (Spring Cutting Invariant $kL = \text{const}$, Series $k_{\text{eq}} = \frac{k_1 k_2}{k_1 + k_2}$, Parallel $k_{\text{eq}} = k_1 + k_2$), Two-Body Reduced Mass Oscillations ($\mu = \frac{m_1 m_2}{m_1 + m_2}$, $T = 2\pi\sqrt{\mu/k}$), Heavy Massive Spring Inertia Correction ($M_{\text{eff}} = m + M_s/3$), Simple Pendulum Dynamics ($T = 2\pi\sqrt{L/g_{\text{eff}}}$) across Accelerated Lifts, Carts, & Buoyant Fluids, Borda's Large-Angle Correction ($T \approx 2\pi\sqrt{L/g}(1 + \theta_0^2/16)$), Infinite Pendulum Limit ($T_{\max} = 2\pi\sqrt{R_E/g} \approx 84.6\text{ min}$), Physical (Compound) Pendulum Mechanics ($T = 2\pi\sqrt{\frac{I}{Mgl}} = 2\pi\sqrt{\frac{k^2+l^2}{gl}}$, Minimum Period $l = k \implies T_{\min} = 2\pi\sqrt{2k/g}$, Center of Oscillation Reversibility), Torsional Pendulums ($T = 2\pi\sqrt{I/C}$), Superposition of Collinear SHMs ($A_R = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \cos\delta}$) & Beats ($f_{\text{beat}} = |f_1 - f_2|$), Orthogonal Lissajous Figures, Damped Harmonic Oscillations ($m\ddot{x} + b\dot{x} + kx = 0$, Exponential Amplitude Decay $A(t) = A_0 e^{-\frac{b}{2m}t}$, Energy Decay $E(t) = E_0 e^{-\frac{b}{m}t}$, Damped Frequency $\omega' = \sqrt{\omega_0^2 - b^2/4m^2}$), Forced Resonance & Quality Factor ($Q = \omega_0 m / b$), and Comprehensive High-Yield JEE Traps.


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fundamentals of Simple Harmonic Motion (SHM)


### 1.1 Periodic vs. Oscillatory Motion & The Restoring Force Law
* **Periodic Motion:** Any motion that repeats itself identically at regular intervals of time $T$ (e.g., planetary orbits, uniform circular motion).
* **Oscillatory (Vibratory) Motion:** Periodic to-and-fro motion about a stable equilibrium (mean) position along a definite trajectory:
  $$\mathbf{F(x) = -k (x - x_0)^n}$$
  * For stable oscillatory motion, the restoring force must always oppose displacement from equilibrium, requiring $n$ to be an **odd positive integer** ($n = 1, 3, 5, \dots$).
  * If $n$ is an even integer ($n = 2, 4, \dots$), $F(x)$ does not reverse sign across $x = x_0$, precluding oscillation.
* **Linear Simple Harmonic Motion (SHM) ($n = 1$):**
  The restoring force is strictly directly proportional to displacement and directed toward the mean position:
  $$\mathbf{F = -k x}$$
  where $k$ is the force constant / spring stiffness ($\text{N/m}$).


---


### 1.2 Differential Equation of Linear SHM
Applying Newton's Second Law to a particle of mass $m$:
$$m \frac{d^2 x}{dt^2} = -k x \implies \mathbf{\frac{d^2 x}{dt^2} + \omega^2 x = 0}$$
where the **natural angular frequency ($\omega$)** is defined by:
$$\mathbf{\omega = \sqrt{\frac{k}{m}} \quad [\text{rad/s}]}$$
* **Time Period ($T$):** The time taken to execute one complete oscillation:
  $$\mathbf{T = \frac{2\pi}{\omega} = 2\pi \sqrt{\frac{m}{k}}}$$
* **Frequency ($f$ or $\nu$):** Number of oscillations per second:
  $$\mathbf{f = \frac{1}{T} = \frac{\omega}{2\pi} = \frac{1}{2\pi}\sqrt{\frac{k}{m}} \quad [\text{Hz}]}$$


---


### 1.3 Kinematics of Linear SHM: Waveforms & Phase Lead Hierarchy
The general solution to the second-order homogeneous differential equation $\ddot{x} + \omega^2 x = 0$ is:
$$\mathbf{x(t) = A \sin(\omega t + \phi)}$$
where:
* $A$ is the **Amplitude** (maximum displacement from mean position: $A = \frac{1}{2} |x_{\text{extreme}, +} - x_{\text{extreme}, -}|$).
* $(\omega t + \phi)$ is the instantaneous **Phase angle** ($\text{rad}$).
* $\phi$ is the **Initial Phase (Epoch)** determined by boundary conditions at $t = 0$.


1. **Displacement ($x$):**
   $$\mathbf{x(t) = A \sin(\omega t + \phi)}$$
   * At mean position ($x = 0$): $\omega t + \phi = 0, \pi, 2\pi$.
   * At extreme positions ($x = \pm A$): $\omega t + \phi = \pi/2, 3\pi/2$.
2. **Velocity ($v$):**
   $$v(t) = \frac{dx}{dt} = A \omega \cos(\omega t + \phi) = \mathbf{A \omega \sin\left(\omega t + \phi + \frac{\pi}{2}\right)}$$
   * Velocity as a function of displacement $x$:
     $$\cos(\omega t + \phi) = \sqrt{1 - \sin^2(\omega t + \phi)} = \sqrt{1 - \frac{x^2}{A^2}}$$
     $$\mathbf{v(x) = \pm \omega \sqrt{A^2 - x^2}}$$
   * At mean position ($x = 0$): Velocity is **maximum**: $\mathbf{v_{\max} = A \omega}$.
   * At extreme positions ($x = \pm A$): Velocity is **zero**: $\mathbf{v = 0}$.
   * **Phase Lead:** Velocity leads displacement by **$\frac{\pi}{2}$ radians ($90^\circ$)**!
3. **Acceleration ($a$):**
   $$a(t) = \frac{dv}{dt} = -A \omega^2 \sin(\omega t + \phi) = \mathbf{A \omega^2 \sin(\omega t + \phi + \pi)}$$
   $$\mathbf{a(x) = -\omega^2 x}$$
   * At mean position ($x = 0$): Acceleration is **zero**: $\mathbf{a = 0}$.
   * At extreme positions ($x = \pm A$): Acceleration magnitude is **maximum**: $\mathbf{|a_{\max}| = \omega^2 A}$.
   * **Phase Lead:** Acceleration leads velocity by **$\frac{\pi}{2}$ radians ($90^\circ$)**, and leads displacement by **$\pi$ radians ($180^\circ$, exact opposite phase)**!


---


### 1.4 State-Space Phase Portrait: The $(x, v)$ Phase Ellipse
Squaring and adding the normalized displacement and velocity equations:
$$\left(\frac{x}{A}\right)^2 + \left(\frac{v}{A\omega}\right)^2 = \sin^2(\omega t + \phi) + \cos^2(\omega t + \phi) = 1$$
$$\mathbf{\frac{x^2}{A^2} + \frac{v^2}{(A\omega)^2} = 1}$$
* **Geometric Character:** The trajectory of a particle executing simple harmonic motion in the state-space $(x, v)$ phase plane is an **ELLIPSE** with semi-major axis $A$ and semi-minor axis $A\omega$.
* **Area of the Phase Ellipse:**
  $$\mathbf{\text{Area} = \pi \cdot A \cdot (A\omega) = \pi \omega A^2}$$


---


## 2. Reference Circle Representation (Phasor Method)


### 2.1 The Reference Circle Mapping


![SHM Kinematics Phasor Circle and Energy Profiles](/media/shm_kinematics_phasor_circle_and_energy_profiles.webp)
*Description: Two-panel simple harmonic motion fundamentals graphic: (A) Kinematic waveforms ($x, v, a$), state-space $(x, v)$ phase ellipse ($\frac{x^2}{A^2} + \frac{v^2}{(A\omega)^2} = 1$), phase lead hierarchy ($v$ leads $x$ by $\pi/2$, $a$ leads $x$ by $\pi$), and the Reference Phasor Circle detailing exact segment transit times ($0 \to A/2$ in $T/12$, $A/2 \to A$ in $T/6$); (B) Mechanical energy curves ($K, U, E$) versus displacement, equipartition coordinates ($x = \pm A/\sqrt{2}$), double-frequency energy oscillations ($f_{\text{energy}} = 2f_{\text{SHM}}$), and the Time-Average ($\frac{1}{2}E$) versus Position-Average ($\frac{2}{3}E$) paradox.*


Consider a reference particle moving in uniform circular motion with constant angular velocity $\omega$ along a circle of radius $A$ centered at the origin:
* The position vector of the rotating particle (the **Phasor $\vec{A}$**) makes angle $\theta(t) = \omega t + \phi$ with the reference axis.
* **Theorem:** The orthogonal projection of this uniform circular motion onto any diameter executes **linear Simple Harmonic Motion**:
  * Projection on $y$-axis: $y(t) = A \sin(\omega t + \phi)$.
  * Projection on $x$-axis: $x(t) = A \cos(\omega t + \phi)$.


---


### 2.2 Segment Transit Times via Phasor Geometry
Because the phasor rotates at constant angular speed $\omega = \frac{2\pi}{T}$, the time required to travel between any two linear positions $x_1$ and $x_2$ equals:
$$\mathbf{t = \frac{\Delta \theta}{\omega} = \left(\frac{\Delta \theta}{2\pi}\right) T}$$


* **Canonical Segment Transit Times (Starting from Mean Position $x = 0$):**
  1. **From $x = 0$ to $x = \frac{A}{2}$:**
     $$\sin\theta = \frac{A/2}{A} = \frac{1}{2} \implies \theta = 30^\circ = \frac{\pi}{6} \implies \mathbf{t_1 = \frac{\pi/6}{2\pi} T = \frac{T}{12}}$$
  2. **From $x = \frac{A}{2}$ to $x = A$:**
     $$\Delta\theta = 90^\circ - 30^\circ = 60^\circ = \frac{\pi}{3} \implies \mathbf{t_2 = \frac{\pi/3}{2\pi} T = \frac{T}{6}}$$
     * **Crucial Insight:** It takes **TWICE AS LONG** ($T/6$) to travel through the outer half of the amplitude $[A/2, A]$ as it does through the inner half $[0, A/2]$ ($T/12$) because the particle decelerates as it approaches the turning point!
  3. **From $x = 0$ to $x = \frac{A}{\sqrt{2}}$:**
     $$\sin\theta = \frac{1}{\sqrt{2}} \implies \theta = 45^\circ = \frac{\pi}{4} \implies \mathbf{t = \frac{T}{8}}$$
  4. **From $x = \frac{A}{\sqrt{2}}$ to $x = A$:**
     $$\Delta\theta = 90^\circ - 45^\circ = 45^\circ = \frac{\pi}{4} \implies \mathbf{t = \frac{T}{8}}$$
  5. **From $x = -\frac{A}{2}$ to $x = +\frac{A}{2}$:**
     $$\Delta\theta = 30^\circ + 30^\circ = 60^\circ = \frac{\pi}{3} \implies \mathbf{t = \frac{T}{6}}$$


---


## 3. Energetics of Simple Harmonic Motion


### 3.1 Kinetic, Potential, and Total Mechanical Energy
In an ideal, undamped simple harmonic oscillator:
1. **Kinetic Energy ($K$):**
   $$K = \frac{1}{2} m v^2 = \mathbf{\frac{1}{2} m \omega^2 (A^2 - x^2) = \frac{1}{2} k (A^2 - x^2) = \frac{1}{2} k A^2 \cos^2(\omega t + \phi)}$$
   * At mean position ($x = 0$): $K_{\max} = \frac{1}{2} k A^2$.
   * At extreme positions ($x = \pm A$): $K = 0$.
2. **Potential Energy ($U$):**
   Taking potential energy at the mean position to be zero ($U(0) = 0$):
   $$U = \int_0^x k x dx = \mathbf{\frac{1}{2} k x^2 = \frac{1}{2} k A^2 \sin^2(\omega t + \phi)}$$
   * At mean position ($x = 0$): $U = 0$.
   * At extreme positions ($x = \pm A$): $U_{\max} = \frac{1}{2} k A^2$.
3. **Total Mechanical Energy ($E$):**
   $$E = K + U = \frac{1}{2} k (A^2 - x^2) + \frac{1}{2} k x^2 = \mathbf{\frac{1}{2} k A^2 = \frac{1}{2} m \omega^2 A^2 = 2\pi^2 m f^2 A^2 = \text{Constant}}$$
   Total mechanical energy is **strictly conserved and time-independent**!


---


### 3.2 Equipartition Coordinate ($K = U$)
To find the displacement where kinetic energy equals potential energy:
$$K(x) = U(x) \implies \frac{1}{2} k (A^2 - x^2) = \frac{1}{2} k x^2 \implies A^2 - x^2 = x^2 \implies 2x^2 = A^2$$
$$\mathbf{x = \pm \frac{A}{\sqrt{2}} \approx \pm 0.707 A}$$
* At $x = \pm \frac{A}{\sqrt{2}}$, $K = U = \frac{1}{2} E = \frac{1}{4} k A^2$.


---


### 3.3 The Double-Frequency Energy Pulsation Rule
Expressing energies in terms of trigonometric identities:
$$K(t) = \frac{1}{2} k A^2 \cos^2(\omega t) = \frac{1}{4} k A^2 [1 + \cos(2\omega t)]$$
$$U(t) = \frac{1}{2} k A^2 \sin^2(\omega t) = \frac{1}{4} k A^2 [1 - \cos(2\omega t)]$$
* **Fundamental Frequency Relation:**
  While displacement, velocity, and acceleration oscillate with frequency $f$ (period $T$):
  $$\mathbf{\omega_{\text{energy}} = 2\omega_{\text{SHM}}, \quad f_{\text{energy}} = 2 f_{\text{SHM}}, \quad T_{\text{energy}} = \frac{T_{\text{SHM}}}{2}}$$
  In one complete period of the particle, **kinetic and potential energies each complete TWO FULL CYCLES of oscillation**!


---


### 3.4 The Time-Average vs. Position-Average Energy Paradox
* **1. Time Averages Over One Full Period ($T$):**
  $$\langle \cos^2(\omega t) \rangle_{\text{time}} = \frac{1}{T}\int_0^T \cos^2(\omega t) dt = \frac{1}{2}, \quad \langle \sin^2(\omega t) \rangle_{\text{time}} = \frac{1}{2}$$
  $$\mathbf{\langle K \rangle_{\text{time}} = \frac{1}{4} k A^2 = \frac{1}{2} E}$$
  $$\mathbf{\langle U \rangle_{\text{time}} = \frac{1}{4} k A^2 = \frac{1}{2} E}$$
  Over time, mechanical energy is partitioned **EXACTLY $50\% - 50\%$** between kinetic and potential forms.
* **2. Position Averages Over the Full Spatial Range $[-A, +A]$:**
  $$\langle K \rangle_{\text{pos}} = \frac{1}{2A}\int_{-A}^{+A} \frac{1}{2} k (A^2 - x^2) dx = \frac{k}{4A} \left[ A^2 x - \frac{x^3}{3} \right]_{-A}^{+A} = \frac{k}{4A}\left(\frac{4A^3}{3}\right) = \mathbf{\frac{1}{3} k A^2 = \frac{2}{3} E}$$
  $$\langle U \rangle_{\text{pos}} = \frac{1}{2A}\int_{-A}^{+A} \frac{1}{2} k x^2 dx = \frac{k}{4A} \left[ \frac{x^3}{3} \right]_{-A}^{+A} = \frac{k}{4A}\left(\frac{2A^3}{3}\right) = \mathbf{\frac{1}{6} k A^2 = \frac{1}{3} E}$$
* **CRITICAL JEE PARADOX:**
  $$\mathbf{\langle K \rangle_{\text{pos}} = \frac{2}{3} E \ne \langle K \rangle_{\text{time}} = \frac{1}{2} E}$$
  $$\mathbf{\langle U \rangle_{\text{pos}} = \frac{1}{3} E \ne \langle U \rangle_{\text{time}} = \frac{1}{2} E}$$
  * *Physical Explanation:* The particle travels fastest near $x = 0$ and slowest near $x = \pm A$. Consequently, it spends very little time near the center and lingers near the extremes. A spatial average weights high-velocity central regions equally per unit length, resulting in a higher average kinetic energy ($\frac{2}{3}E$) than the time-weighted average ($\frac{1}{2}E$).


---


## 4. Spring-Mass Networks & Systems


### 4.1 The Spring Cutting Law


![Spring Mass Networks Reduced Mass and Pendulums](/media/spring_mass_networks_reduced_mass_and_pendulums.webp)
*Description: Two-panel coupled oscillators and pendulums graphic: (A) Spring-mass networks detailing the spring cutting invariant ($kL = \text{const}$), series ($k_{\text{eq}} = \frac{k_1 k_2}{k_1 + k_2}$) and parallel ($k_{\text{eq}} = k_1 + k_2$) stiffness combinations, the two-body reduced mass oscillator ($\mu = \frac{m_1 m_2}{m_1 + m_2}$, $T = 2\pi\sqrt{\mu/k}$), and the Rayleigh heavy spring mass correction ($m + M_s/3$); (B) Comprehensive pendulum dynamics covering simple pendulums in accelerated frames, Borda's large-angle formula, infinite length earth-radius bounds ($T_{\max} \approx 84.6\text{ min}$), physical (compound) pendulums with minimum period condition ($l = k$), and torsional oscillators ($T = 2\pi\sqrt{I/C}$).*


For an elastic spring of natural length $L$ and spring constant $k$:
$$\mathbf{k \cdot L = \text{Constant}}$$
* If a spring of stiffness $k$ is cut into two segments of lengths in the ratio $m : n$:
  $$L_1 = \left(\frac{m}{m+n}\right) L, \quad L_2 = \left(\frac{n}{m+n}\right) L$$
  $$\mathbf{k_1 = \left(\frac{m+n}{m}\right) k, \quad k_2 = \left(\frac{m+n}{n}\right) k}$$
  * Cutting an elastic spring **always increases the stiffness** of each resulting segment!


---


### 4.2 Combinations of Springs
1. **Series Combination:**
   * Springs are connected end-to-end; both experience the **identical tension force $F$**, but their extensions add: $\Delta x = \Delta x_1 + \Delta x_2$.
     $$\frac{F}{k_{\text{eq}}} = \frac{F}{k_1} + \frac{F}{k_2} \implies \mathbf{\frac{1}{k_{\text{eq}}} = \frac{1}{k_1} + \frac{1}{k_2} \iff k_{\text{eq}} = \frac{k_1 k_2}{k_1 + k_2}}$$
   * The equivalent spring constant is **smaller than the smallest individual spring constant** ($k_{\text{eq}} < \min(k_1, k_2)$).
2. **Parallel Combination:**
   * Springs undergo the **identical displacement $\Delta x$**, but their restoring forces add: $F = F_1 + F_2$.
     $$k_{\text{eq}} \Delta x = k_1 \Delta x + k_2 \Delta x \implies \mathbf{k_{\text{eq}} = k_1 + k_2}$$
   * The equivalent stiffness is **greater than the largest individual spring constant** ($k_{\text{eq}} > \max(k_1, k_2)$).


---


### 4.3 Invariance of Spring Period under Constant External Forces
When a spring-mass system is placed vertically under gravity or on an inclined plane with angle $\theta$:
* Static equilibrium occurs at extension $x_0 = \frac{m g \sin\theta}{k}$.
* Net restoring force for displacement $x$ from the new equilibrium:
  $$F_{\text{net}} = m g \sin\theta - k(x_0 + x) = m g \sin\theta - k x_0 - k x = -k x$$
* **Fundamental Invariant:**
  Constant external forces (gravity, constant pseudo-forces) **ONLY SHIFT THE EQUILIBRIUM POSITION**; they do **NOT alter the restoring force gradient or the time period**:
  $$\mathbf{T = 2\pi \sqrt{\frac{m}{k}} \quad (\text{Identical for horizontal, vertical, or tilted planes!})}$$


---


### 4.4 Two-Body Connected Oscillator & The Reduced Mass ($\mu$)
Two blocks of masses $m_1$ and $m_2$ connected by a spring of stiffness $k$ rest on a frictionless horizontal floor:
* When pulled apart and released, both blocks oscillate in opposite directions with the Center of Mass remaining stationary.
* Writing equations of motion for each block and subtracting:
  $$\frac{d^2(x_1 - x_2)}{dt^2} = -k \left(\frac{1}{m_1} + \frac{1}{m_2}\right)(x_1 - x_2) = -\frac{k}{\mu} x_{\text{rel}}$$
  where $\mu$ is the **Reduced Mass** of the system:
  $$\mathbf{\mu = \frac{m_1 m_2}{m_1 + m_2}}$$
* **Natural Angular Frequency & Time Period:**
  $$\mathbf{\omega = \sqrt{\frac{k}{\mu}} = \sqrt{\frac{k(m_1 + m_2)}{m_1 m_2}}, \quad T = 2\pi\sqrt{\frac{\mu}{k}}}$$
* **Amplitudes of Individual Masses:**
  Since the Center of Mass is stationary ($m_1 A_1 = m_2 A_2$):
  $$\mathbf{A_1 = \left(\frac{m_2}{m_1 + m_2}\right) A_{\text{rel}}, \quad A_2 = \left(\frac{m_1}{m_1 + m_2}\right) A_{\text{rel}}}$$


---


### 4.5 Rayleigh's Correction for a Massive Spring
If the spring itself has a non-negligible mass $M_s$:
* The fixed end of the spring has zero velocity ($v = 0$), while the end attached to mass $m$ has velocity $v$.
* Assuming a linear velocity distribution $v(y) = \frac{y}{L} v$ along the spring:
  $$K_{\text{spring}} = \int_0^L \frac{1}{2} (dm) [v(y)]^2 = \int_0^L \frac{1}{2}\left(\frac{M_s}{L} dy\right)\left(\frac{y}{L} v\right)^2 = \frac{1}{2}\left(\frac{M_s}{3}\right)v^2$$
* Total kinetic energy of the system:
  $$K_{\text{total}} = \frac{1}{2} m v^2 + \frac{1}{2}\left(\frac{M_s}{3}\right)v^2 = \frac{1}{2}\left(m + \frac{M_s}{3}\right)v^2$$
* **Corrected Time Period:**
  $$\mathbf{T = 2\pi \sqrt{\frac{m + \frac{1}{3}M_s}{k}}}$$
  * Exactly **one-third of the spring's mass** acts as effective inertial mass!


---


## 5. Pendulum Dynamics


### 5.1 The Simple Pendulum
A point mass $m$ suspended by a light, inextensible string of length $L$:
* Restoring torque about pivot: $\tau = -m g L \sin\theta$.
* Equation of motion: $m L^2 \frac{d^2\theta}{dt^2} = -m g L \sin\theta \implies \frac{d^2\theta}{dt^2} + \frac{g}{L}\sin\theta = 0$.
* For small angular amplitudes ($\sin\theta \approx \theta$):
  $$\mathbf{\frac{d^2\theta}{dt^2} + \frac{g}{L}\theta = 0 \implies T = 2\pi \sqrt{\frac{L}{g}}}$$
* **Seconds Pendulum:** A pendulum whose period is exactly $2.0\text{ seconds}$ (half-period $1.0\text{ s}$ per swing):
  $$2 = 2\pi\sqrt{\frac{L}{g}} \implies \mathbf{L = \frac{g}{\pi^2} \approx 0.993\text{ m} \approx 1.0\text{ m}}$$


---


### 5.2 Borda's Large-Angle Amplitude Correction
When angular amplitude $\theta_0$ is large, the small-angle approximation breaks down. Expanding $\sin\theta \approx \theta - \frac{\theta^3}{6}$:
$$\mathbf{T = 2\pi\sqrt{\frac{L}{g}}\left[ 1 + \frac{1}{4}\sin^2\left(\frac{\theta_0}{2}\right) + \dots \right] \approx 2\pi\sqrt{\frac{L}{g}}\left( 1 + \frac{\theta_0^2}{16} \right)}$$
* As amplitude increases, the time period **strictly increases**!


---


### 5.3 Pendulum of Infinite Length ($L \sim R_E$)
If the length of a simple pendulum is comparable to the radius of Earth ($R_E \approx 6400\text{ km}$):
Gravity is directed toward the center of Earth rather than strictly parallel:
$$\mathbf{T = 2\pi \sqrt{\frac{1}{g\left(\frac{1}{L} + \frac{1}{R_E}\right)}}}$$
1. If $L \ll R_E$: $\frac{1}{R_E} \to 0 \implies T = 2\pi\sqrt{\frac{L}{g}}$ (Standard formula).
2. If $L \to \infty$ (Infinite length pendulum):
   $$\mathbf{T_{\max} = 2\pi \sqrt{\frac{R_E}{g}} \approx 84.6\text{ minutes} \approx 5076\text{ seconds}}$$
   * No simple pendulum on Earth can have a time period exceeding **$84.6\text{ minutes}$**!


---


### 5.4 Simple Pendulum in Non-Inertial (Accelerated) Frames
In an accelerating reference frame with acceleration $\vec{a}$, the effective acceleration due to gravity is:
$$\mathbf{\vec{g}_{\text{eff}} = \vec{g} - \vec{a}}$$
$$\mathbf{T = 2\pi \sqrt{\frac{L}{g_{\text{eff}}}}}$$
1. **Lift Accelerating Upward with $a$:** $\vec{g}_{\text{eff}} = (g + a)(-\hat{j}) \implies \mathbf{g_{\text{eff}} = g + a \implies T \text{ decreases}}$.
2. **Lift Accelerating Downward with $a < g$:** $\mathbf{g_{\text{eff}} = g - a \implies T \text{ increases}}$.
3. **Freely Falling Lift ($a = g$):** $\mathbf{g_{\text{eff}} = 0 \implies T \to \infty}$ (Pendulum does not oscillate; becomes weightless).
4. **Car Accelerating Horizontally with $a$:** $\mathbf{g_{\text{eff}} = \sqrt{g^2 + a^2} \implies T \text{ decreases}}$.
   * Equilibrium string orientation tilts backward at angle $\beta = \tan^{-1}(a/g)$.
5. **Pendulum Bob Submerged in Liquid of Density $\rho_L$ (Bob Density $\rho_S$):**
   * Apparent weight $W_{\text{eff}} = m g - F_B = m g \left(1 - \frac{\rho_L}{\rho_S}\right)$.
   * $\mathbf{g_{\text{eff}} = g\left(1 - \frac{\rho_L}{\rho_S}\right) \implies T \text{ increases}}$.


---


### 5.5 The Physical (Compound) Pendulum
A rigid body of mass $M$ free to oscillate in a vertical plane about a horizontal knife-edge axis located at distance $l$ from its Center of Mass:
* Restoring torque: $\tau = -M g l \sin\theta \approx -M g l \theta = I_{\text{hinge}} \alpha$.
* By Parallel Axis Theorem: $I_{\text{hinge}} = I_{\text{cm}} + M l^2 = M k^2 + M l^2 = M(k^2 + l^2)$, where $k$ is the radius of gyration about the COM axis.
* **Equation of Motion:**
  $$M(k^2 + l^2)\frac{d^2\theta}{dt^2} + M g l \theta = 0 \implies \mathbf{T = 2\pi \sqrt{\frac{I_{\text{hinge}}}{M g l}} = 2\pi \sqrt{\frac{k^2 + l^2}{g l}}}$$
* **Equivalent Simple Pendulum Length ($L_{\text{eq}}$):**
  $$\mathbf{L_{\text{eq}} = l + \frac{k^2}{l}}$$
* **Condition for Minimum Time Period:**
  Differentiating $L_{\text{eq}}$ with respect to suspension distance $l$:
  $$\frac{d(L_{\text{eq}})}{dl} = 1 - \frac{k^2}{l^2} = 0 \implies \mathbf{l = k}$$
  $$\mathbf{T_{\min} = 2\pi \sqrt{\frac{2k}{g}}}$$
* **Center of Oscillation & Reversibility:**
  A point $O'$ situated at distance $L_{\text{eq}} = l + k^2/l$ on the line passing through the pivot $S$ and COM is called the **Center of Oscillation**.
  * If the body is suspended from $O'$, its time period is **identical** to when suspended from $S$!


---


### 5.6 The Torsional Pendulum
A rigid body of moment of inertia $I$ suspended by a vertical wire of length $L$, radius $r$, and shear modulus $\eta$:
* When twisted by angle $\theta$, the wire generates a restoring torque:
  $$\tau = -C \theta$$
  where $C = \frac{\pi \eta r^4}{2 L}$ is the torsional rigidity of the wire.
* Equation of motion:
  $$I \frac{d^2\theta}{dt^2} + C \theta = 0 \implies \mathbf{T = 2\pi \sqrt{\frac{I}{C}}}$$
  * Completely independent of gravity $g$!


---


## 6. Superposition of SHMs & Lissajous Figures


### 6.1 Superposition of Two Collinear SHMs of Identical Frequency


![Superposition Lissajous and Damped Forced Oscillations](/media/superposition_lissajous_and_damped_forced_oscillations.webp)
*Description: Two-panel wave interference and driven resonance graphic: (A) Collinear phasor superposition ($A_R = \sqrt{A_1^2 + A_2^2 + 2A_1 A_2 \cos\delta}$), beat frequency generation ($f_{\text{beat}} = |f_1 - f_2|$), and 2D orthogonal Lissajous figures demonstrating straight lines ($\delta = 0, \pi$) and elliptical/circular orbits ($\delta = \pi/2$); (B) Damped harmonic oscillations with viscous dissipation ($m\ddot{x} + b\dot{x} + kx = 0$, $A(t) = A_0 e^{-\frac{b}{2m}t}$, $E(t) = E_0 e^{-\frac{b}{m}t}$), forced driven resonance response curves, and Quality Factor ($Q = \omega_0 m / b$).*


Consider two collinear harmonic oscillations of identical angular frequency $\omega$ along the $x$-axis:
$$x_1 = A_1 \sin(\omega t), \quad x_2 = A_2 \sin(\omega t + \delta)$$
* Using phasor vector addition:
  $$\mathbf{x(t) = x_1 + x_2 = A_R \sin(\omega t + \phi)}$$
* **Resultant Amplitude ($A_R$):**
  $$\mathbf{A_R = \sqrt{A_1^2 + A_2^2 + 2 A_1 A_2 \cos\delta}}$$
* **Resultant Phase Angle ($\phi$):**
  $$\mathbf{\tan\phi = \frac{A_2 \sin\delta}{A_1 + A_2 \cos\delta}}$$
1. **Constructive Interference ($\delta = 2n\pi, \cos\delta = +1$):** $\mathbf{A_{\max} = A_1 + A_2}$.
2. **Destructive Interference ($\delta = (2n+1)\pi, \cos\delta = -1$):** $\mathbf{A_{\min} = |A_1 - A_2|}$.
3. **Quadrature ($\delta = \pi/2, \cos\delta = 0$):** $\mathbf{A_R = \sqrt{A_1^2 + A_2^2}}$.


---


### 6.2 Superposition of Two Perpendicular SHMs: Lissajous Figures
Consider two orthogonal oscillations of identical frequency $\omega$:
$$x(t) = A_1 \sin(\omega t), \quad y(t) = A_2 \sin(\omega t + \delta)$$
* Expanding $y(t)$:
  $$\frac{y}{A_2} = \sin(\omega t)\cos\delta + \cos(\omega t)\sin\delta = \left(\frac{x}{A_1}\right)\cos\delta + \sqrt{1 - \frac{x^2}{A_1^2}}\sin\delta$$
  Rearranging and squaring to eliminate time $t$:
  $$\mathbf{\left(\frac{x}{A_1}\right)^2 + \left(\frac{y}{A_2}\right)^2 - \frac{2 x y}{A_1 A_2}\cos\delta = \sin^2\delta}$$
* **Canonical Trajectory Shapes (1:1 Frequency Ratio):**
  1. **$\delta = 0$:** $\left(\frac{x}{A_1} - \frac{y}{A_2}\right)^2 = 0 \implies \mathbf{y = +\left(\frac{A_2}{A_1}\right) x}$ (Straight line through quadrants 1 and 3).
  2. **$\delta = \pi$:** $\left(\frac{x}{A_1} + \frac{y}{A_2}\right)^2 = 0 \implies \mathbf{y = -\left(\frac{A_2}{A_1}\right) x}$ (Straight line through quadrants 2 and 4).
  3. **$\delta = \frac{\pi}{2}$:** $\cos\delta = 0, \sin^2\delta = 1 \implies \mathbf{\frac{x^2}{A_1^2} + \frac{y^2}{A_2^2} = 1}$ (Symmetrical Ellipse).
     * If $A_1 = A_2 = A$: $\mathbf{x^2 + y^2 = A^2}$ (A pure **CIRCLE** of radius $A$!).


---


## 7. Damped & Forced Oscillations, Resonance


### 7.1 Damped Harmonic Motion
When a real oscillator experiences a viscous dissipative medium, it is opposed by a damping force directly proportional to velocity:
$$\vec{F}_d = -b \vec{v} = -b \frac{dx}{dt}$$
where $b$ is the damping coefficient ($\text{kg/s}$).
* **Differential Equation:**
  $$m \frac{d^2x}{dt^2} + b \frac{dx}{dt} + k x = 0 \implies \mathbf{\frac{d^2x}{dt^2} + 2\gamma \frac{dx}{dt} + \omega_0^2 x = 0}$$
  where:
  $$\mathbf{\gamma = \frac{b}{2m} \quad (\text{Damping Factor}), \quad \omega_0 = \sqrt{\frac{k}{m}} \quad (\text{Natural Undamped Angular Frequency})}$$
* **1. Underdamped Regime ($\gamma < \omega_0 \iff b < 2\sqrt{k m}$):**
  The system oscillates with exponentially decaying amplitude:
  $$\mathbf{x(t) = A_0 e^{-\gamma t} \sin(\omega' t + \phi) = A(t) \sin(\omega' t + \phi)}$$
  * **Damped Angular Frequency ($\omega'$):**
    $$\mathbf{\omega' = \sqrt{\omega_0^2 - \gamma^2} = \sqrt{\frac{k}{m} - \frac{b^2}{4m^2}} < \omega_0}$$
    *(Damping strictly slows down the oscillation frequency and increases the time period!).*
  * **Exponential Amplitude Decay:**
    $$\mathbf{A(t) = A_0 e^{-\gamma t} = A_0 e^{-\frac{b}{2m} t}}$$
  * **Exponential Mechanical Energy Decay:**
    $$E(t) = \frac{1}{2} k [A(t)]^2 = \frac{1}{2} k A_0^2 e^{-2\gamma t} = \mathbf{E_0 e^{-\frac{b}{m} t}}$$
    *(Total energy decays **TWICE AS FAST** as amplitude!).*
* **2. Critically Damped Regime ($\gamma = \omega_0 \iff b = 2\sqrt{k m}$):**
  Non-oscillatory; system returns to equilibrium in minimum possible time without overshooting.
* **3. Overdamped Regime ($\gamma > \omega_0 \iff b > 2\sqrt{k m}$):**
  Non-oscillatory; returns sluggishly to equilibrium.


---


### 7.2 Forced Oscillations & Resonance
When an underdamped oscillator is driven by a periodic external force $F(t) = F_0 \cos(\omega_d t)$:
$$m \frac{d^2x}{dt^2} + b \frac{dx}{dt} + k x = F_0 \cos(\omega_d t)$$
* **Steady-State Amplitude ($A$):**
  $$\mathbf{A = \frac{F_0}{\sqrt{m^2 (\omega_0^2 - \omega_d^2)^2 + b^2 \omega_d^2}}}$$
* **Amplitude Resonance Condition:**
  The denominator is minimized when the driving frequency is:
  $$\mathbf{\omega_d = \sqrt{\omega_0^2 - 2\gamma^2} = \sqrt{\omega_0^2 - \frac{b^2}{2m^2}}}$$
  * For weak damping ($b \ll m\omega_0$): $\omega_d \approx \omega_0$.
  * **Resonant Peak Amplitude:**
    $$\mathbf{A_{\max} \approx \frac{F_0}{b \omega_0}}$$
* **Quality Factor ($Q$):**
  Measures the sharpness of the resonance peak and the degree of underdamping:
  $$\mathbf{Q = \frac{\omega_0 m}{b} = \frac{\omega_0}{2\gamma} = 2\pi \left(\frac{\text{Energy Stored}}{\text{Energy Dissipated Per Cycle}}\right)}$$
  * High $Q \implies$ Extremely sharp, narrow resonance peak and long ring-down persistence!


---


## 8. Master Formula Sheet & High-Yield Diagnostic Traps


### 8.1 Master Simple Harmonic Motion Formula Table


| Physical Quantity / Phenomenon | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Linear SHM Differential Equation** | $\frac{d^2x}{dt^2} + \omega^2 x = 0$ | Natural frequency $\omega = \sqrt{k/m}$ |
| **Velocity-Displacement Relation** | $v(x) = \pm \omega \sqrt{A^2 - x^2}$ | $v_{\max} = A\omega$ at $x = 0$ |
| **Acceleration-Displacement Relation** | $a(x) = -\omega^2 x$ | $a_{\max} = \omega^2 A$ at $x = \pm A$ |
| **State-Space Phase Portrait** | $\frac{x^2}{A^2} + \frac{v^2}{(A\omega)^2} = 1$ | Ellipse of area $\pi \omega A^2$ |
| **Transit Time: $0 \to A/2$** | $t = \frac{T}{12}$ | Phase angle rotates $30^\circ$ |
| **Transit Time: $A/2 \to A$** | $t = \frac{T}{6}$ | Twice as long as inner half |
| **Total Mechanical Energy** | $E = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2$ | Conserved throughout motion |
| **Equipartition Displacement** | $x = \pm \frac{A}{\sqrt{2}} \approx \pm 0.707 A$ | Point where $K = U = E/2$ |
| **Energy Pulsation Frequency** | $f_{\text{energy}} = 2 f_{\text{SHM}}$ | Period $T_{\text{energy}} = T/2$ |
| **Time-Average Energies** | $\langle K \rangle_t = \langle U \rangle_t = \frac{1}{2}E$ | $50\% - 50\%$ time partition |
| **Position-Average Energies** | $\langle K \rangle_x = \frac{2}{3}E, \ \langle U \rangle_x = \frac{1}{3}E$ | $\langle K \rangle_x \ne \langle K \rangle_t$ paradox |
| **Spring Cutting Law** | $k \cdot L = \text{Constant}$ | Cut $m : n \implies k_1 = \frac{m+n}{m}k$ |
| **Series Springs Network** | $k_{\text{eq}} = \frac{k_1 k_2}{k_1 + k_2}$ | Same force, extensions add |
| **Parallel Springs Network** | $k_{\text{eq}} = k_1 + k_2$ | Same extension, forces add |
| **Reduced Mass Oscillator** | $T = 2\pi\sqrt{\frac{\mu}{k}}$ with $\mu = \frac{m_1 m_2}{m_1 + m_2}$ | Two blocks on spring |
| **Massive Spring Correction** | $T = 2\pi\sqrt{\frac{m + M_s/3}{k}}$ | Adds $M_s/3$ to effective mass |
| **Simple Pendulum Period** | $T = 2\pi\sqrt{\frac{L}{g_{\text{eff}}}}$ | Lift up: $g+a$; Lift down: $g-a$ |
| **Infinite Pendulum Limit** | $T_{\max} = 2\pi\sqrt{\frac{R_E}{g}} \approx 84.6\text{ min}$ | Upper physical bound on Earth |
| **Compound Pendulum Period** | $T = 2\pi\sqrt{\frac{k^2+l^2}{gl}}$ | Min period when $l = k$: $T_{\min} = 2\pi\sqrt{2k/g}$ |
| **Torsional Pendulum Period** | $T = 2\pi\sqrt{\frac{I}{C}}$ | $C = \frac{\pi \eta r^4}{2L}$ (independent of $g$) |
| **Damped Angular Frequency** | $\omega' = \sqrt{\omega_0^2 - \frac{b^2}{4m^2}}$ | Decays as $A(t) = A_0 e^{-\frac{b}{2m}t}$ |
| **Resonance Quality Factor** | $Q = \frac{\omega_0 m}{b}$ | Sharpness of resonance peak |


---


### 8.2 High-Yield Exam Traps & Common Conceptual Errors


#### Trap 1: The Energy Average Paradox ($\langle K \rangle_t$ vs. $\langle K \rangle_x$)
* **The Error:** Assuming $\langle K \rangle = \frac{1}{2} E$ in all contexts.
* **The Physics:** Over time, $\langle K \rangle_t = \frac{1}{2}E$. But averaged over displacement $x \in [-A, +A]$, $\langle K \rangle_x = \frac{2}{3}E$ and $\langle U \rangle_x = \frac{1}{3}E$.
* Always verify whether the problem asks for the **time-averaged** or **spatially-averaged** energy!


#### Trap 2: The Double Frequency of Energy Oscillations
* If a particle oscillates with frequency $f = 50\text{ Hz}$, its kinetic energy and potential energy oscillate at **$100\text{ Hz}$**, NOT $50\text{ Hz}$!
* Because energy is quadratic in $x$ and $v$ ($\sin^2\omega t, \cos^2\omega t$), it reaches a maximum twice during every single displacement cycle.


#### Trap 3: Spring Periods under Gravity and Inclines
* Students often mistakenly replace $k$ or alter the period equation when a spring-mass system is placed vertically or on an incline:
* **Gravity CANNOT alter the natural frequency or time period of a linear spring oscillator!**
* Gravity only shifts the equilibrium position: $x_0 = \frac{mg\sin\theta}{k}$. The time period remains strictly $T = 2\pi\sqrt{m/k}$.


#### Trap 4: Effective Mass of a Heavy Spring
* When a spring of mass $M_s$ supports a load $m$, the total mass oscillating is NOT $m + M_s$.
* Because different elements along the spring oscillate with varying amplitudes (from $0$ at the fixed end to $A$ at the free end), integrating kinetic energy demonstrates that **only $\frac{1}{3} M_s$ contributes to inertia**:
  $$M_{\text{eff}} = m + \frac{M_s}{3}$$