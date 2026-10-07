Chemistry Revision Context: Chapter 67 — Atomic Structure, Quantum Mechanics & Nuclear Chemistry


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/CHEMISTRY/Atomic Structure _ Nuclear Chemistry/`, `1._Theory.pdf`, `Handout_of_Schrodinger_Wave_Model_English.pdf`, and `6._Nuclear_Chemistry_Eng..pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Physical Chemistry Core — Subatomic Particle Foundations (Electron $e/m$, Millikan Oil Drop, Proton Canal Rays, Chadwick Neutron), Rutherford $\alpha$-Scattering & Nuclear Sizing ($r_0 = \frac{4K Z e^2}{m v^2}$, $R = R_0 A^{1/3}$, Constant Nuclear Density $\sim 10^{17}\text{ kg/m}^3$), Quantum Radiation & Photoelectric Effect ($E = h\nu = \frac{hc}{\lambda}$, Einstein Equation $h\nu = W_0 + K_{\max}$, Stopping Potential $eV_s = K_{\max}$), Bohr Atomic Model for Monoelectronic Species ($mvr = \frac{nh}{2\pi}$, Radius $r_n = 0.529\frac{n^2}{Z}\text{ \AA}$, Velocity $v_n = 2.18 \times 10^6\frac{Z}{n}\text{ m/s}$, Orbital Period & Current Invariants, Total Energy $E_n = -13.6\frac{Z^2}{n^2}\text{ eV}$, Virial Theorem $E = -K = U/2$), Hydrogen Emission Spectral Series (Rydberg Formula $\bar{\nu} = R_H Z^2 (1/n_1^2 - 1/n_2^2)$, Lyman, Balmer, Paschen, Brackett, Pfund Series, Spectral Line Combinatorics $\frac{\Delta n(\Delta n+1)}{2}$), Dual Nature of Matter (de Broglie Relation $\lambda = \frac{h}{p} = \frac{12.27}{\sqrt{V}}\text{ \AA}$, Bohr Orbit Wave Resonance $2\pi r = n\lambda$), Heisenberg Uncertainty Principle ($\Delta x \cdot \Delta p \ge \frac{h}{4\pi}$, $\Delta E \cdot \Delta t \ge \frac{\hbar}{2}$), 3D Schrödinger Wave Mechanics (Separation into Radial $R(r)$ and Angular $Y(\theta, \phi)$ Functions, Radial Probability Density $4\pi r^2 R^2(r)$, Radial Nodes $n-l-1$, Angular Nodes $l$, Total Nodes $n-1$), Quantum Numbers ($n, l, m_l, m_s$, Orbital Angular Momentum $L = \sqrt{l(l+1)}\hbar$, Spin Magnetic Moment $\mu_s = \sqrt{n(n+2)}\text{ B.M.}$), Aufbau Principle, Pauli Exclusion, Hund's Multiplicity & Exchange Energy, Nuclear Stability Foundations (Mass Defect $\Delta m$, Binding Energy $\Delta m \times 931.5\text{ MeV}$, B.E./nucleon Curve Peak at $^{56}\text{Fe}$), $n/p$ Ratio & The Belt of Stability (Modes of Decay: $\beta^-$ Emission, $\beta^+$ Emission, $K$-Electron Capture, $\alpha$-Decay), Radioactive First-Order Kinetics ($N_t = N_0 e^{-\lambda t}$, Half-Life $t_{1/2} = \frac{0.693}{\lambda}$, Mean Life $\tau = 1/\lambda \approx 1.443 t_{1/2}$, Activity $A = \lambda N$), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Classical Atomic Models & Nuclear Sizing


### 1.1 Discovery of Fundamental Particles


1. **The Electron ($e^-$):**
   * Discovered by J.J. Thomson via cathode ray tube experiments ($10^{-4}\text{ atm}$, high potential difference $> 10\text{ kV}$).
   * **Specific Charge ($e/m$):** Universal across all electrode materials and fill gases:
     $$\mathbf{\frac{e}{m} = 1.758820 \times 10^{11}\text{ C kg}^{-1} = 1.76 \times 10^8\text{ C g}^{-1}}$$
   * Millikan's Oil Drop Experiment determined the elementary electronic charge:
     $$e = -1.602176 \times 10^{-19}\text{ C}, \quad m_e = \frac{e}{e/m} = 9.10938 \times 10^{-31}\text{ kg} = 5.4858 \times 10^{-4}\text{ amu}$$


2. **The Proton ($p^+$) & The Neutron ($n^0$):**
   * Anode rays (Goldstein, 1886): Positively charged gaseous ions; $e/m$ depends strongly on the gas in the tube (maximum for Hydrogen gas: proton).
     $$m_p = 1.67262 \times 10^{-27}\text{ kg} = 1.00727\text{ amu} \approx 1836 \times m_e$$
   * Discovery of Neutron (Chadwick, 1932): Bombardment of Beryllium-9 by $\alpha$-particles:
     $$\mathbf{^9_4\text{Be} + {}^4_2\text{He} \longrightarrow {}^{12}_6\text{C} + {}^1_0\text{n}}$$
     $$m_n = 1.67493 \times 10^{-27}\text{ kg} = 1.00866\text{ amu}$$


---


### 1.2 Rutherford's $\alpha$-Particle Scattering Experiment & Nuclear Dimensions


A thin gold foil ($t \approx 400\text{ nm}$) was bombarded with energetic $\alpha$-particles ($^4_2\text{He}^{2+}$):
* *Observations:* $> 99.9\%$ passed undeflected; a tiny fraction ($\sim 1$ in $20,000$) suffered deflections $> 90^\circ$; extremely few rebounded at $180^\circ$.
* *Deductions:* The positive charge and almost the entire atomic mass are concentrated in an extraordinarily dense, compact central core called the **Nucleus**.


1. **Distance of Closest Approach ($r_0$):**
   For a head-on collision ($        heta = 180^\circ$), initial kinetic energy $E_K$ is entirely converted into electrostatic potential energy at the turning point:
   $$E_K = \frac{1}{2} m_\alpha v_\alpha^2 = \frac{1}{4\pi\varepsilon_0} \frac{(2e)(Ze)}{r_0} = \frac{2K Z e^2}{r_0}$$
   $$\mathbf{r_0 = \frac{4K Z e^2}{m_\alpha v_\alpha^2} = \frac{2K Z e^2}{E_K}}$$


2. **Nuclear Size & Nuclear Density Invariant:**
   * Radius of the nucleus of an atom with mass number $A$:
     $$\mathbf{R = R_0 A^{1/3} \quad (R_0 \approx 1.2 \times 10^{-15}\text{ m} = 1.2\text{ fm})}$$
   * Volume of nucleus: $V = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi R_0^3 A \propto A$.
   * **Nuclear Density ($\rho_{\text{nuclear}}$):**
     $$\mathbf{\rho = \frac{\text{Mass}}{\text{Volume}} = \frac{A \times (1.66 \times 10^{-27}\text{ kg})}{\frac{4}{3}\pi R_0^3 A} = \frac{1.66 \times 10^{-27}}{\frac{4}{3}\pi (1.2 \times 10^{-15})^3} \approx 2.3 \times 10^{17}\text{ kg m}^{-3}}$$
     *(The nuclear density is constant and independent of the atomic or mass number of the element).*


---


## 2. Quantum Theory of Radiation & Photoelectric Effect


### 2.1 Planck's Quantum Hypothesis


Light and electromagnetic radiation are emitted, transmitted, and absorbed in discrete packets of energy called **quanta** (or **photons** for light):


$$\mathbf{E = h\nu = \frac{hc}{\lambda} = hc \cdot \bar{\nu}}$$


where $h = 6.62607 \times 10^{-34}\text{ J s}$ (Planck's constant) and $c = 3.0 \times 10^8\text{ m s}^{-1}$.


* **Rapid Numerical Conversion Formula:**
  $$\mathbf{E(\text{eV}) = \frac{12400}{\lambda(\text{\AA})} = \frac{1240}{\lambda(\text{nm})}}$$


---


### 2.2 Einstein's Photoelectric Equation


When light of frequency $\nu$ strikes a clean metal surface with work function $W_0 = h\nu_0$:


$$\mathbf{E_{\text{photon}} = W_0 + K_{\max} \iff h\nu = h\nu_0 + \frac{1}{2}m v_{\max}^2}$$


1. **Threshold Frequency ($\nu_0$) & Threshold Wavelength ($\lambda_0$):**
   * Minimum frequency below which no photoemission occurs regardless of intensity:
     $$\mathbf{W_0 = h\nu_0 = \frac{hc}{\lambda_0}}$$
2. **Stopping Potential ($V_s$):**
   The minimum retarding potential required to stop the most energetic photoelectrons:
   $$e V_s = K_{\max} = h\nu - W_0 = h\nu - h\nu_0$$
   $$\mathbf{V_s = \left( \frac{h}{e} \right)\nu - \frac{W_0}{e} = \left( \frac{hc}{e} \right) \frac{1}{\lambda} - \frac{W_0}{e}}$$
   * The slope of the $V_s$ vs. $\nu$ graph is **$\frac{h}{e}$** (universal constant, independent of the target metal).


---


## 3. Bohr Atomic Model for Monoelectronic Species


![Bohr Energy Levels and Hydrogen Spectral Series](/media/bohr_energy_levels_and_hydrogen_spectral_series.webp)
*Description: Two-panel quantum atomic reference: (Panel A) Bohr quantized energy level ladder for Hydrogen ($Z=1$) detailing $E_n = -13.6/n^2        ext{ eV}$ along with kinetic, potential, and total energy virial relations; (Panel B) Complete Hydrogen emission spectral series (Lyman, Balmer, Paschen, Brackett, Pfund) showing electronic transitions, wavelength boundaries, and spectral counting rules.*


Applicable strictly to single-electron (hydrogenic) species: $\text{H}, \text{He}^+, \text{Li}^{2+}, \text{Be}^{3+}, \text{B}^{4+}$.


### 3.1 Fundamental Postulates & Derivations


1. **Centripetal & Electrostatic Force Balance:**
   $$\frac{m v^2}{r} = \frac{K Z e^2}{r^2} \implies \mathbf{m v^2 r = K Z e^2} \quad \left( K = \frac{1}{4\pi\varepsilon_0} = 9 \times 10^9\text{ N m}^2\text{C}^{-2} \right)$$


2. **Bohr's Angular Momentum Quantization:**
   Electrons revolve only in non-radiating **stationary orbits** where orbital angular momentum is an integral multiple of $\hbar = \frac{h}{2\pi}$:
   $$\mathbf{L = m v r = \frac{nh}{2\pi} \quad (n = 1, 2, 3, \dots)}$$


---


### 3.2 Orbital Scaling Parameters ($r, v, T, f, E$)


1. **Orbital Radius ($r_n$):**
   $$\mathbf{r_n = \frac{n^2 h^2}{4\pi^2 m K Z e^2} = r_1 \cdot \frac{n^2}{Z} = 0.529 \cdot \frac{n^2}{Z} \text{ \AA} \propto \frac{n^2}{Z}}$$
   * First Bohr radius of Hydrogen ($a_0$): $\mathbf{a_0 = 0.529\text{ \AA} = 52.9\text{ pm}}$.


2. **Orbital Velocity ($v_n$):**
   $$\mathbf{v_n = \frac{2\pi K Z e^2}{nh} = v_1 \cdot \frac{Z}{n} = 2.188 \times 10^6 \cdot \frac{Z}{n} \text{ m s}^{-1} \propto \frac{Z}{n}}$$


3. **Time Period ($T_n$) & Orbital Frequency ($f_n$):**
   $$\mathbf{T_n = \frac{2\pi r_n}{v_n} \propto \frac{n^3}{Z^2}, \quad f_n = \frac{1}{T_n} \propto \frac{Z^2}{n^3}}$$
   * Orbital current $I = e f_n \propto \frac{Z^2}{n^3}$; Magnetic field at nucleus $B = \frac{\mu_0 I}{2r} \propto \frac{Z^3}{n^5}$.


4. **Energy Architecture & The Virial Invariant:**
   * **Kinetic Energy ($K$):**
     $$\mathbf{K_n = \frac{1}{2}m v_n^2 = \frac{K Z e^2}{2r_n} = +13.6 \cdot \frac{Z^2}{n^2} \text{ eV}}$$
   * **Potential Energy ($U$):**
     $$\mathbf{U_n = -\frac{K Z e^2}{r_n} = -27.2 \cdot \frac{Z^2}{n^2} \text{ eV}}$$
   * **Total Energy ($E$):**
     $$\mathbf{E_n = K_n + U_n = -\frac{K Z e^2}{2r_n} = -13.6 \cdot \frac{Z^2}{n^2} \text{ eV} = -2.18 \times 10^{-18} \cdot \frac{Z^2}{n^2} \text{ J}}$$
   * **The Universal Virial Relation:**
     $$\mathbf{E_n = -K_n = \frac{U_n}{2} \iff U_n = 2E_n = -2K_n}$$


---


### 3.3 Atomic Transitions & Terminology


* **Ionization Energy (I.E.):** Energy required to remove an electron completely from ground state ($n=1$) to infinity ($n=\infty$):
  $$\mathbf{\text{I.E.} = E_\infty - E_1 = 0 - (-13.6 Z^2) = +13.6 Z^2 \text{ eV}}$$
* **Binding Energy (B.E.):** Energy required to liberate an electron from state $n$ to infinity: $\mathbf{\text{B.E.}_n = +13.6 \frac{Z^2}{n^2}\text{ eV}}$.
* **Excitation Energy:** Energy required to transition from ground state ($n=1$) to excited state $n$: $\Delta E = E_n - E_1$.
  * First excitation energy ($1 \to 2$): $\Delta E = 10.2\text{ eV}$ (for H).
  * Second excitation energy ($1 \to 3$): $\Delta E = 12.09\text{ eV}$ (for H).


---


## 4. Hydrogen Emission Spectrum & Rydberg Mechanics


### 4.1 The Generalized Rydberg Equation


When an electron de-excites from an outer level $n_2$ to an inner level $n_1$ ($n_2 > n_1$):


$$\Delta E = E_{n_2} - E_{n_1} = h\nu = \frac{hc}{\lambda}$$


$$\mathbf{\bar{\nu} = \frac{1}{\lambda} = R_H Z^2 \left( \frac{1}{n_1^2} - \frac{1}{n_2^2} \right)}$$


where $R_H$ is the **Rydberg Constant**:
$$\mathbf{R_H = \frac{2\pi^2 m K^2 e^4}{c h^3} = 109677.57\text{ cm}^{-1} \approx 1.097 \times 10^7\text{ m}^{-1} \implies \frac{1}{R_H} \approx 912\text{ \AA}}$$


---


### 4.2 Comprehensive Spectral Series Classification


| Spectral Series | Lower State ($n_1$) | Upper States ($n_2$) | Spectral Region | $\lambda_{\min}$ (Series Limit, $n_2 \to \infty$) | $\lambda_{\max}$ (First Line, $n_2 = n_1 + 1$) |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **Lyman** | $1$ | $2, 3, 4, \dots$ | **Ultraviolet (UV)** | $\frac{1}{R} \approx 912\text{ \AA}$ | $\frac{4}{3R} \approx 1216\text{ \AA}$ |
| **Balmer** | $2$ | $3, 4, 5, \dots$ | **Visible & Near UV** | $\frac{4}{R} \approx 3646\text{ \AA}$ | $\frac{36}{5R} \approx 6563\text{ \AA}$ ($H_\alpha$, Red) |
| **Paschen** | $3$ | $4, 5, 6, \dots$ | **Infrared (IR)** | $\frac{9}{R} \approx 8208\text{ \AA}$ | $\frac{144}{7R} \approx 18751\text{ \AA}$ |
| **Brackett** | $4$ | $5, 6, 7, \dots$ | **Infrared (IR)** | $\frac{16}{R} \approx 14592\text{ \AA}$ | $\frac{400}{9R} \approx 40500\text{ \AA}$ |
| **Pfund** | $5$ | $6, 7, 8, \dots$ | **Far Infrared** | $\frac{25}{R} \approx 22800\text{ \AA}$ | $\frac{900}{11R} \approx 74600\text{ \AA}$ |
| **Humphrey** | $6$ | $7, 8, 9, \dots$ | **Far Infrared** | $\frac{36}{R}$ | $\frac{1764}{13R}$ |


* **Balmer Visible Lines ($H_\alpha, H_\beta, H_\gamma, H_\delta$):**
  Only transitions ending at $n_1 = 2$ from $n_2 = 3, 4, 5, 6$ fall into the human visible spectrum ($400 - 700\text{ nm}$).


---


### 4.3 Combinatorial Counting of Spectral Lines


1. **Sample of Infinite / Many Hydrogen Atoms (Isolated Chamber):**
   When electrons cascade down from state $n_2$ to state $n_1$:
   $$\mathbf{N = \frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2} = \frac{\Delta n(\Delta n + 1)}{2}}$$
   * From excited level $n$ to ground state ($n_1 = 1$): $\mathbf{N = \frac{n(n - 1)}{2}}$.
2. **Single Isolated Atom:**
   A single electron cascading from $n$ to $1$ can only follow a single sequential step path:
   $$\mathbf{N_{\max} = n - 1}$$


---


## 5. Wave-Particle Duality & Heisenberg Uncertainty


### 5.1 The de Broglie Hypothesis


Every moving material particle possesses an intrinsic matter wave:


$$\mathbf{\lambda = \frac{h}{p} = \frac{h}{m v}}$$


1. **Wavelength in terms of Kinetic Energy ($K$):**
   Since $p = \sqrt{2mK}$:
   $$\mathbf{\lambda = \frac{h}{\sqrt{2mK}}}$$


2. **Wavelength of an Accelerated Charged Particle ($q, V$):**
   When accelerated from rest across potential difference $V$, $K = qV$:
   $$\mathbf{\lambda = \frac{h}{\sqrt{2mqV}}}$$
   * **For an Electron:**
     $$\mathbf{\lambda_e = \sqrt{\frac{150}{V}} \text{ \AA} = \frac{12.27}{\sqrt{V(\text{Volts})}} \text{ \AA} = \frac{1.227}{\sqrt{V}} \text{ nm}}$$
   * **For a Proton:** $\lambda_p = \frac{0.286}{\sqrt{V}}\text{ \AA}$.
   * **For an $\alpha$-particle:** $\lambda_\alpha = \frac{0.101}{\sqrt{V}}\text{ \AA}$.
   * **For Gas Molecule at Temp $T$ (Thermal de Broglie):** $\lambda = \frac{h}{\sqrt{3m k_B T}}$.


3. **Physical Explanation of Bohr's Quantization Postulate:**
   For a stable stationary electronic standing wave to form without destructive self-interference:
   $$2\pi r = n\lambda = n \left( \frac{h}{m v} \right) \implies \mathbf{m v r = \frac{nh}{2\pi}}$$
   *(The circumference of the $n^{\text{th}}$ Bohr orbit equals exactly $n$ matter wavelengths).*


---


### 5.2 Heisenberg's Uncertainty Principle


It is impossible to determine simultaneously both the exact position and exact momentum of a subatomic particle with arbitrary precision:


$$\mathbf{\Delta x \cdot \Delta p \ge \frac{h}{4\pi} = \frac{\hbar}{2}}$$


$$\mathbf{\Delta x \cdot m\Delta v \ge \frac{h}{4\pi} \implies \Delta x \cdot \Delta v \ge \frac{h}{4\pi m}}$$


* **Energy-Time Conjugate Form:**
  $$\mathbf{\Delta E \cdot \Delta t \ge \frac{h}{4\pi}}$$
* **Non-Existence of Free Electrons in the Nucleus:**
  If an electron were confined inside a nucleus of radius $R \sim 10^{-14}\text{ m}$, $\Delta x \sim 10^{-14}\text{ m} \implies \Delta v > c$ (exceeds speed of light, which is physically impossible). Hence, electrons cannot reside within the nucleus!


---


## 6. Schrödinger Wave Mechanical Model & Nodal Topology


![Schrödinger Radial Probability and Orbital Nodes](/media/schrodinger_radial_probability_and_orbital_nodes.webp)
*Description: Two-panel wave mechanics reference: (Panel A) Radial probability distribution functions $4\pi r^2 R^2(r)$ for $1s, 2s, 2p$ orbitals demonstrating radial nodes ($n - l - 1$) and most probable radial distance $r_{\max} = a_0$; (Panel B) Comprehensive quantum number classification and spatial orbital symmetry governance matrix.*


### 6.1 The 3D Time-Independent Schrödinger Equation


$$\mathbf{\nabla^2 \psi + \frac{8\pi^2 m}{h^2}(E - V)\psi = 0 \iff \hat{H}\psi = E\psi}$$


where $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$ is the Laplacian operator, and $\hat{H}$ is the Hamiltonian operator.


1. **Physical Meaning of the Wave Function $\psi$:**
   * $\psi$ represents the orbital amplitude and has **no direct physical reality** (can be positive, negative, or complex).
   * **$|\psi|^2$ (Probability Density):** The square of the wave function represents the **probability of finding the electron per unit volume** at coordinates $(x, y, z)$.


---


### 6.2 Separation into Radial and Angular Wave Functions


In spherical polar coordinates $(r, \theta, \phi)$:


$$\mathbf{\psi(r, \theta, \phi) = R_{n, l}(r) \cdot Y_{l, m}(\theta, \phi)}$$


* **Radial Function $R_{n, l}(r)$:** Depends solely on quantum numbers $n$ and $l$. Governs the **radial size and energy** of the orbital.
* **Angular Function $Y_{l, m}(\theta, \phi)$:** Depends solely on quantum numbers $l$ and $m_l$. Governs the **three-dimensional shape and directional orientation** of the orbital in space.


---


### 6.3 Radial Probability Distribution Function


The probability of finding an electron in a thin spherical shell of thickness $dr$ at distance $r$ from the nucleus:


$$\mathbf{dP = |\psi|^2 dV = R^2(r) \cdot (4\pi r^2 dr) \implies \frac{dP}{dr} = 4\pi r^2 R^2(r)}$$


* For $1s$ orbital of Hydrogen ($R_{1s} = 2a_0^{-3/2} e^{-r/a_0}$):
  $$\frac{dP}{dr} = 4\pi r^2 \left( 4 a_0^{-3} e^{-2r/a_0} \right) = \frac{16\pi}{a_0^3} r^2 e^{-2r/a_0}$$
  Setting $\frac{d}{dr}\left(\frac{dP}{dr}\right) = 0$ yields:
  $$\mathbf{r_{\max} = a_0 = 0.529\text{ \AA}}$$
  *(The distance of maximum probability for finding a $1s$ electron coincides exactly with the first Bohr orbit radius).*


---


### 6.4 Nodal Calculations & Spatial Geometry


A **node** is a point, surface, or plane where the probability of finding the electron vanishes identically ($\psi = 0$ and $|\psi|^2 = 0$):


1. **Radial (Spherical) Nodes:** Concentric spherical surfaces centered on the nucleus where $R(r) = 0$:
   $$\mathbf{\text{Number of Radial Nodes} = n - l - 1}$$
2. **Angular Nodes (Nodal Planes / Cones):** Planes passing through the nucleus where $Y(\theta, \phi) = 0$:
   $$\mathbf{\text{Number of Angular Nodes} = l}$$
3. **Total Number of Nodes:**
   $$\mathbf{\text{Total Nodes} = (n - l - 1) + l = n - 1}$$


* **Orbital-Specific Nodal Audit:**
  * $1s$: $n=1, l=0 \implies 0\text{ radial}, 0\text{ angular} \implies 0\text{ total}$.
  * $2s$: $n=2, l=0 \implies 1\text{ radial (at } r = 2a_0), 0\text{ angular} \implies 1\text{ total}$.
  * $2p$: $n=2, l=1 \implies 0\text{ radial}, 1\text{ angular (nodal plane)} \implies 1\text{ total}$.
  * $3d_{z^2}$: $n=3, l=2 \implies 0\text{ radial}, 2\text{ angular nodal cones} \implies 2\text{ total}$.


---


## 7. Quantum Numbers & Electronic Configuration


### 7.1 The Four Quantum Numbers


| Quantum Number | Symbol | Allowed Values | Physical Significance |
| :--- | :---: | :---: | :--- |
| **Principal** | $n$ | $1, 2, 3, 4, \dots$ | Main shell, orbital size, energy ($E \propto -Z^2/n^2$), max electrons $= 2n^2$, orbitals $= n^2$ |
| **Azimuthal (Subsidiary)** | $l$ | $0, 1, \dots, (n - 1)$ | Subshell ($s, p, d, f$), 3D orbital shape, orbital angular momentum: $\mathbf{L = \sqrt{l(l+1)}\hbar}$ |
| **Magnetic** | $m_l$ | $-l, \dots, 0, \dots, +l$ | Spatial orientation of orbital ($2l + 1$ values per subshell) |
| **Spin** | $m_s$ | $+1/2, -1/2$ | Intrinsic spin angular momentum: $\mathbf{S = \sqrt{s(s+1)}\hbar = \frac{\sqrt{3}}{2}\hbar}$ |


* **Spin-Only Magnetic Moment:**
  $$\mathbf{\mu_s = \sqrt{n(n + 2)} \text{ B.M.} \quad (\text{Bohr Magnetons, where } n = \text{number of unpaired electrons})}$$


---


### 7.2 Principles Governing Electron Filling


1. **Aufbau Principle ($n + l$ Rule):**
   Electrons occupy subshells in order of increasing energy:
   * Subshell with lower $(n + l)$ value fills first.
   * If two subshells have the identical $(n + l)$, the subshell with the **lower $n$** fills first.
   * Filling sequence: $1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s$.
2. **Pauli's Exclusion Principle:**
   No two electrons in an atom can have the identical set of all four quantum numbers ($n, l, m_l, m_s$):
   * An orbital can hold a maximum of **two electrons**, and they must possess **anti-parallel spins**.
3. **Hund's Rule of Maximum Multiplicity:**
   Pairing of electrons in degenerate orbitals ($p, d, f$) does not occur until each orbital contains one electron with parallel spins:
   * **Exchange Energy Stability:** Half-filled ($p^3, d^5, f^7$) and fully-filled ($p^6, d^{10}, f^{14}$) configurations possess extraordinary stability due to maximum exchange energy and symmetrical charge distribution:
     $$\text{Cr: } [        ext{Ar}]\, 3d^5 4s^1 \quad (\text{not } 3d^4 4s^2), \quad \text{Cu: } [        ext{Ar}]\, 3d^{10} 4s^1 \quad (\text{not } 3d^9 4s^2)$$


---


## 8. Nuclear Chemistry & Radioactive Decay Kinetics


![Nuclear Stability Belt and Radioactive Decay Kinetics](/media/nuclear_stability_belt_and_radioactive_decay_kinetics.webp)
*Description: Two-panel nuclear chemistry graphic: (Panel A) Nuclear Stability Belt ($N$ vs. $Z$) demonstrating stability criteria, $ eta^-$ decay (above belt), $ eta^+ / K$-electron capture (below belt), and $ lpha$-decay for $Z > 82$; (Panel B) First-order radioactive decay kinetics profile $N(t) = N_0 e^{-\lambda t}$ marking half-lives and mean life $        au$.*


### 8.1 Nuclear Stability & Mass Defect


1. **Mass Defect ($\Delta m$):**
   The rest mass of a stable nucleus is always less than the sum of the rest masses of its constituent free nucleons:
   $$\mathbf{\Delta m = \left[ Z m_p + (A - Z)m_n \right] - M_{\text{nucleus}}}$$


2. **Binding Energy (B.E.):**
   $$\mathbf{\text{B.E.} = \Delta m \cdot c^2 = \Delta m(\text{in amu}) \times 931.48\text{ MeV}}$$
   * **Binding Energy per Nucleon:** $\mathbf{\bar{B} = \frac{\text{Total B.E.}}{A}}$.
   * **Stability Peak:** Peaks at $^{56}\text{Fe}$ at $\mathbf{8.78\text{ MeV/nucleon}}$, representing the most thermodynamically stable nucleus in nature.


---


### 8.2 The $n/p$ Ratio & The Belt of Stability


Plotting neutron count $N = A - Z$ against atomic number $Z$:
* For light stable nuclei ($Z \le 20$): $\mathbf{n/p \approx 1.0}$ ($^{4}_2\text{He}, {}^{12}_6\text{C}, {}^{16}_8\text{O}, {}^{40}_{20}\text{Ca}$).
* For heavy stable nuclei ($Z > 20$): Coulombic proton repulsions necessitate excess neutrons; $n/p$ rises smoothly to **$1.53$ at $^{208}_{82}\text{Pb}$**.
* Above $Z = 82$ (Bismuth onwards), no stable nuclides exist.


**Nuclear Decay Modes toward Stability:**
1. **Nuclides Above the Belt (Neutron-Rich, High $n/p$):**
   Undergo **$\beta^-$ emission** to convert a neutron into a proton:
   $$\mathbf{^1_0\text{n} \longrightarrow {}^1_1\text{p} + {}^0_{-1}\text{e} + \bar{\nu} \quad (\bar{\nu} = \text{antineutrino})}$$
2. **Nuclides Below the Belt (Proton-Rich, Low $n/p$):**
   Undergo **$\beta^+$ emission** (positron emission) or **Orbital Electron Capture ($K$-capture)**:
   $$\mathbf{^1_1\text{p} \longrightarrow {}^1_0\text{n} + {}^0_{+1}\text{e} + \nu \quad (\nu = \text{neutrino})}$$
   $$\mathbf{^1_1\text{p} + {}^0_{-1}\text{e} \longrightarrow {}^1_0\text{n} + \nu \quad (K\text{-capture})}$$
3. **Heavy Nuclides ($Z > 82$):**
   Emit **$\alpha$-particles** ($^4_2\text{He}^{2+}$) to simultaneously reduce both $Z$ and $A$:
   $$\mathbf{^A_Z\text{X} \longrightarrow {}^{A-4}_{Z-2}\text{Y} + {}^4_2\text{He}}$$


---


### 8.3 Kinetics of Radioactive Disintegration


Radioactive decay is a strictly non-equilibrium spontaneous process following **First-Order Chemical Kinetics**:


$$-\frac{dN}{dt} = \lambda N$$


$$\mathbf{N_t = N_0 e^{-\lambda t} \iff \lambda = \frac{2.303}{t} \log_{10}\left(\frac{N_0}{N_t}\right)}$$


1. **Half-Life ($t_{1/2}$):**
   $$\mathbf{t_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.69315}{\lambda}}$$
   * Undecayed nuclei after $n$ half-lives: $\mathbf{N_t = N_0 \left(\frac{1}{2}\right)^n}$, where $n = \frac{t}{t_{1/2}}$.


2. **Mean Life / Average Life ($\tau$):**
   $$\mathbf{\tau = \frac{1}{\lambda} = \frac{t_{1/2}}{\ln 2} \approx 1.443 \cdot t_{1/2}}$$
   * At $t = \tau$, remaining nuclei $N_\tau = N_0 / e \approx 0.368 N_0$ ($36.8\%$ remains, $63.2\%$ decayed).


3. **Activity ($A$):**
   Disintegration rate: $\mathbf{A = -\frac{dN}{dt} = \lambda N_t = A_0 e^{-\lambda t}}$.
   * **SI Unit:** Becquerel ($1\text{ Bq} = 1\text{ disintegration per second}$).
   * **Traditional Unit:** Curie ($1\text{ Ci} = 3.7 \times 10^{10}\text{ Bq}$).


---


## 9. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Hydrogen Emission Balmer Series Trapping:**
   * Not all Balmer series lines are in the visible region!
   * Transitions from $n = 3, 4, 5, 6 \to 2$ are in the **visible region**, but transitions from $n \ge 7 \to 2$ and the series limit fall into the **ultraviolet (UV) region**!
2. **The $d_{z^2}$ Nodal Architecture Trap:**
   * For $d$ orbitals ($l = 2$), students expect 2 planar nodal surfaces.
   * However, the $d_{z^2}$ orbital has **NO nodal planes**; it possesses **two conical nodal surfaces** meeting at the nucleus!
3. **The de Broglie Voltage Acceleration Mass Trap:**
   * $\lambda = \frac{12.27}{\sqrt{V}}\text{ \AA}$ is strictly for an **electron**!
   * Do NOT use this formula for protons, deuterons, or $\alpha$-particles without re-evaluating $\sqrt{mq}$! For $\alpha$-particles, $m = 4m_p, q = 2e \implies \lambda_\alpha = \frac{0.101}{\sqrt{V}}\text{ \AA}$.
4. **Radioactive Mean Life vs. Half-Life Reciprocal Confusion:**
   * Mean life is larger than half-life: $\tau = 1.443 t_{1/2}$.
   * Never confuse $\tau$ with $t_{1/2}/2$ or $1/t_{1/2}$.