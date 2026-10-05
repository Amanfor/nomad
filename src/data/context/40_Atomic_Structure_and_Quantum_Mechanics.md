Chemistry Revision Context: Chapter 40 — Atomic Structure & Quantum Mechanical Model


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../2. CHEMISTRY-P-I/2. Atomic Structure/`, `21. ATOMIC STRUCTURE.pdf`, and `Nichod-20_(Atomic Structure).pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Chemistry Physical Chemistry Core — Classical Atomic Models & Rutherford Scattering Mechanics (Impact Parameter $b$, Distance of Closest Approach $r_0 = \frac{4 k Z e^2}{m v^2}$, Nuclear Radius Scaling $R = R_0 A^{1/3}$), Planck's Quantum Theory & Photoelectric Effect (Einstein's Equation $h\nu = W_0 + KE_{\max}$, Stopping Potential $V_s$ Linear Slope $\frac{h}{e}$ Invariance, Universal Photocurrent Diagnostics), Bohr's Model for Single-Electron Species ($\text{H}, \text{He}^+, \text{Li}^{2+}, \text{Be}^{3+}$: Force Balance, Angular Momentum Quantization $mvr = n\hbar$, Exact Derivations of $r_n = 0.529 \frac{n^2}{Z}\text{ \AA}$, $v_n = 2.18 \times 10^6 \frac{Z}{n}\text{ m/s}$, $E_n = -13.6 \frac{Z^2}{n^2}\text{ eV}$, The Virial Theorem $E = -KE = \frac{1}{2} PE$, Non-Coulombic Power-Law Potential Scaling $U(r) \propto r^p$), Hydrogen Emission Spectrum (Rydberg Formula $\bar{\nu} = R_H Z^2 (\frac{1}{n_1^2} - \frac{1}{n_2^2})$, Spectral Series Lyman, Balmer Visible Lines $H_\alpha, H_\beta, H_\gamma, H_\delta$, Paschen, Brackett, Pfund, Spectral Line Combinatorics, Atomic Recoil Conservation), Dual Nature of Matter & de Broglie Waves ($\lambda = \frac{h}{p} = \frac{12.27}{\sqrt{V}}\text{ \AA}$, Standing Wave Derivation of Bohr Orbit Quantization $2\pi r = n \lambda$), Heisenberg Uncertainty Principle ($\Delta x \cdot \Delta p \ge \frac{\hbar}{2}$, Non-Existence of Free Electrons in Nuclei), Schrödinger Wave Mechanical Model (Time-Independent 3D Equation, Radial Wave Functions $R(r)$, Probability Density $R^2(r)$, Radial Probability Distribution Function $P(r) = 4\pi r^2 R^2(r)$, Radial Nodes $n-l-1$, Angular Nodes $l$, Total Nodes $n-1$, Most Probable Radius $r_{\max} = a_0$), Four Quantum Numbers ($n, l, m_l, m_s$, Orbital Angular Momentum $L = \sqrt{l(l+1)}\hbar$, Spin Magnetic Moment $\mu_s = \sqrt{n(n+2)}\text{ BM}$), Orbital Geometries & Nodal Surfaces ($p$-orbitals, $d$-orbitals, $d_{z^2}$ Conical Nodal Surfaces), Electronic Configuration Principles (Aufbau $(n+l)$ Rule, Single-Electron Degeneracy Exception, Pauli Exclusion, Hund's Maximum Multiplicity & Colossal Exchange Energy Stabilization in $\text{Cr}$ and $\text{Cu}$).


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Classical Atomic Models & Pre-Quantum Foundations


### 1.1 Rutherford's $\alpha$-Particle Scattering Experiment
Rutherford bombarded a thin gold foil ($\approx 400\text{ nm}$ thick) with high-energy $\alpha$-particles ($^4_2\text{He}^{2+}$, $m \approx 4\text{ amu}$, $q = 2e$, kinetic energy $\approx 5.5\text{ MeV}$):
* **Key Observations:**
  1. Most $\alpha$-particles ($> 99\%$) passed through undeflected $\implies$ Most of the atomic volume is empty space.
  2. A small fraction ($\approx 1\text{ in } 8000$) was deflected through large angles ($\theta > 90^\circ$).
  3. Extremely rare $\alpha$-particles ($\approx 1\text{ in } 10^5$) recoiled backwards along their original path ($\theta \approx 180^\circ$).
* **Rutherford Scattering Formula:**
  The number of $\alpha$-particles scattered at angle $\theta$ per unit area on a fluorescent zinc sulfide screen is inversely proportional to $\sin^4(\theta/2)$:
  $$\mathbf{N(\theta) \propto \frac{1}{\sin^4(\theta/2)} \implies \frac{N(\theta_1)}{N(\theta_2)} = \frac{\sin^4(\theta_2/2)}{\sin^4(\theta_1/2)}}$$


---


### 1.2 Classical Nuclear Parameters: Distance of Closest Approach & Impact Parameter


#### 1.2.1 Distance of Closest Approach ($r_0$)
For a head-on collision ($\theta = 180^\circ$), the incoming $\alpha$-particle approaches the heavy gold nucleus ($Z$) until its entire initial kinetic energy is converted into electrostatic potential energy at the turning point:
$$\mathbf{KE_i = PE_{\text{turning}} \implies \frac{1}{2} m v^2 = \frac{k (2e)(Z e)}{r_0}}$$
$$\mathbf{r_0 = \frac{4 k Z e^2}{m v^2} = \frac{2 k Z e^2}{KE}}$$
* This provides an upper bound for the nuclear radius ($r_0 \approx 10^{-14}\text{ m} = 10-40\text{ fm}$).


#### 1.2.2 Impact Parameter ($b$)
The impact parameter $b$ is the perpendicular distance of the initial velocity vector of the $\alpha$-particle from the center of the target nucleus:
$$\mathbf{b = \frac{k Z e^2 \cot(\theta/2)}{\frac{1}{2} m v^2} = \frac{k Z e^2 \cot(\theta/2)}{KE}}$$
* If $b = 0 \implies \cot(\theta/2) = 0 \implies \theta = 180^\circ$ (Head-on recoil).
* If $b \gg r_0 \implies \cot(\theta/2) \to \infty \implies \theta \approx 0^\circ$ (Undeflected trajectory).


#### 1.2.3 Nuclear Radius Empirical Scaling Law
The nuclear radius $R$ scales with the mass number $A$ (total nucleons, $A = Z + N$):
$$\mathbf{R = R_0 A^{1/3}}$$
where $R_0 \approx 1.2 \times 10^{-15}\text{ m} = 1.2\text{ fm}$.
* **Nuclear Density Invariance:**
  $$\text{Volume } V = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi R_0^3 A \propto A \implies \rho_{\text{nucleus}} = \frac{\text{Mass}}{\text{Volume}} \approx \frac{A \cdot m_N}{\frac{4}{3}\pi R_0^3 A} = \mathbf{\text{Constant} \approx 2.3 \times 10^{17}\text{ kg/m}^3}$$
  Nuclear density is universal and completely independent of the atomic or mass number!


---


### 1.3 Breakdown of Classical Electrodynamics (Maxwell's Dilemma)
According to classical electromagnetic theory, an accelerating electric charge continuously radiates electromagnetic energy at a rate given by Larmor's formula:
$$P = \frac{e^2 a^2}{6\pi \varepsilon_0 c^3}$$
Since an electron orbiting a nucleus experiences continuous centripetal acceleration ($a = v^2/r$), it must continuously radiate energy, lose orbital radius, and spiral into the nucleus within $\approx 10^{-10}\text{ seconds}$! Furthermore, the radiation emitted would form a continuous spectrum, completely contradicting the observed stability of matter and sharp discrete atomic line spectra.


---


## 2. Planck's Quantum Hypothesis & The Photoelectric Effect


### 2.1 Planck's Radiation Law
Energy is emitted or absorbed by atoms not in a continuous stream, but in discrete, indivisible packets called **quanta** (or **photons** for light):
$$\mathbf{E = h\nu = \frac{hc}{\lambda} = hc\bar{\nu}}$$
* Planck's constant: $h = 6.626 \times 10^{-34}\text{ J}\cdot\text{s} = 4.136 \times 10^{-15}\text{ eV}\cdot\text{s}$.
* Speed of light: $c = 3.0 \times 10^8\text{ m/s}$.
* Useful conversion constant:
  $$\mathbf{hc \approx 1240\text{ eV}\cdot\text{nm} \approx 12400\text{ eV}\cdot\text{\AA}}$$


---


### 2.2 Einstein's Photoelectric Equation & Experimental Diagnostics
When a photon of frequency $\nu$ strikes a clean metal surface, its energy is absorbed completely by a single conduction electron:
$$\mathbf{E_{\text{photon}} = W_0 + KE_{\max}}$$
$$\mathbf{h\nu = h\nu_0 + \frac{1}{2} m v_{\max}^2 = W_0 + e V_s}$$
where:
* $W_0 = h\nu_0 = \frac{hc}{\lambda_0}$ is the **Work Function** of the metal (minimum energy required to eject an electron).
* $\nu_0$ is the **Threshold Frequency**; $\lambda_0$ is the **Threshold Wavelength**.
* $V_s$ is the **Stopping Potential** (the retarding anode potential required to reduce photocurrent to zero):
  $$KE_{\max} = e V_s$$


---


### 2.3 Diagnostic Photoelectric Graphs & Universal Invariants


#### 2.3.1 Stopping Potential vs. Frequency
$$\mathbf{V_s = \left(\frac{h}{e}\right)\nu - \frac{W_0}{e}}$$
* **Slope:** $\frac{h}{e} \approx 4.14 \times 10^{-15}\text{ V}\cdot\text{s}$ is a **universal constant**, identical for ALL metals!
* **x-intercept:** $\nu = \nu_0$ (Threshold frequency).
* **y-intercept:** $-\frac{W_0}{e}$ (Negative of work function in electron-volts).


#### 2.3.2 Maximum Kinetic Energy vs. Frequency
$$\mathbf{KE_{\max} = h\nu - W_0}$$
* **Slope:** Planck's constant $h$, completely universal for all emitter materials.
* **Intensity Invariance:** Increasing the intensity of incident light increases the number of emitted photoelectrons (saturation current), but has **ZERO effect on $KE_{\max}$ or stopping potential $V_s$**.


---


## 3. Bohr's Model of Single-Electron Species


### 3.1 Fundamental Postulates (Applicable to $\text{H}, \text{He}^+, \text{Li}^{2+}, \text{Be}^{3+}$)
1. **Centripetal Balance:**
   The electrostatic Coulomb force between the positive nucleus ($+Ze$) and the orbiting electron ($-e$) provides the required centripetal acceleration:
   $$\mathbf{\frac{k Z e^2}{r_n^2} = \frac{m v_n^2}{r_n} \implies m v_n^2 = \frac{k Z e^2}{r_n}}$$
   where $k = \frac{1}{4\pi\varepsilon_0} \approx 9.0 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$.
2. **Quantization of Orbital Angular Momentum:**
   An electron can move only in non-radiating, stationary circular orbits where its orbital angular momentum $L$ is an integral multiple of $\frac{h}{2\pi} = \hbar$:
   $$\mathbf{L = m v_n r_n = \frac{n h}{2\pi} = n\hbar \quad (n = 1, 2, 3, \dots)}$$
3. **Bohr Frequency Condition:**
   Radiation is emitted or absorbed only when an electron jumps between stationary energy states:
   $$\mathbf{\Delta E = E_2 - E_1 = h\nu = \frac{hc}{\lambda}}$$


---


### 3.2 Visual Preservation: Bohr Orbits, Energy Hierarchy, & Spectral Series


![Bohr Model Energy Levels and Hydrogen Spectral Series](/media/bohr_model_energy_levels_and_hydrogen_spectral_series.webp)
*Description: Two-panel comprehensive physical chemistry infographic: (A) Bohr model stationary energy level ladder ($E_n = -13.6 Z^2/n^2\text{ eV}$) converging toward the ionization continuum ($E_\infty = 0$), displaying transition arrows for the Lyman, Balmer, Paschen, and Brackett spectral series alongside the fundamental orbital scaling laws ($r \propto n^2/Z, v \propto Z/n, T \propto n^3/Z^2$) and the Virial Theorem ($E = -KE = PE/2$); (B) Rydberg wavenumber formula, detailed boundary limits ($\lambda_{\max}$ and $\lambda_{\min}$) for each spectral series, the four visible Balmer lines ($H_\alpha$ red $656.3\text{ nm}, H_\beta$ cyan $486.1\text{ nm}, H_\gamma$ blue $434.0\text{ nm}, H_\delta$ violet $410.2\text{ nm}$), and the linear momentum conservation equation governing atomic recoil.*


---


### 3.3 Exact Mathematical Derivations for Bohr Quantities


#### 3.3.1 Orbital Radius ($r_n$)
From angular momentum quantization: $v_n = \frac{n h}{2\pi m r_n}$. Substituting into the centripetal balance equation:
$$m \left(\frac{n h}{2\pi m r_n}\right)^2 = \frac{k Z e^2}{r_n} \implies \frac{n^2 h^2}{4\pi^2 m r_n^2} = \frac{k Z e^2}{r_n}$$
$$\mathbf{r_n = \frac{n^2 h^2}{4\pi^2 m k Z e^2} = \frac{\varepsilon_0 n^2 h^2}{\pi m Z e^2} = r_1 \frac{n^2}{Z} = 0.529 \frac{n^2}{Z}\text{ \AA}}$$
* First Bohr radius of hydrogen ($n=1, Z=1$): $a_0 = 0.529\text{ \AA} = 52.9\text{ pm}$.


#### 3.3.2 Orbital Velocity ($v_n$)
$$\mathbf{v_n = \frac{n h}{2\pi m r_n} = \frac{2\pi k Z e^2}{n h} = v_1 \frac{Z}{n} = 2.18 \times 10^6 \frac{Z}{n}\text{ m/s}}$$
* In terms of the speed of light $c$:
  $$\mathbf{v_n = c \cdot \left(\frac{2\pi k e^2}{h c}\right) \frac{Z}{n} = c \cdot \alpha \cdot \frac{Z}{n}}$$
  where $\alpha = \frac{2\pi k e^2}{h c} = \frac{e^2}{2 \varepsilon_0 h c} \approx \frac{1}{137}$ is the dimensionless **Fine Structure Constant**!
  For hydrogen ground state ($Z=1, n=1$): $v_1 \approx \frac{c}{137}$.


#### 3.3.3 Kinetic, Potential, and Total Energies
* **Kinetic Energy ($KE$):**
  $$\mathbf{KE = \frac{1}{2} m v_n^2 = \frac{k Z e^2}{2 r_n} = +13.6 \frac{Z^2}{n^2}\text{ eV}}$$
* **Potential Energy ($PE$):**
  $$\mathbf{PE = -\frac{k Z e^2}{r_n} = -2 KE = -27.2 \frac{Z^2}{n^2}\text{ eV}}$$
* **Total Energy ($E_n$):**
  $$\mathbf{E_n = KE + PE = -\frac{k Z e^2}{2 r_n} = -13.6 \frac{Z^2}{n^2}\text{ eV/atom} = -2.18 \times 10^{-18} \frac{Z^2}{n^2}\text{ J/atom} = -1312 \frac{Z^2}{n^2}\text{ kJ/mol}}$$
* **The Virial Theorem for Inverse-Square Central Fields:**
  For any central conservative force field where $V(r) \propto r^{-1}$:
  $$\mathbf{E = -KE = \frac{1}{2} PE \iff 2\langle KE \rangle + \langle PE \rangle = 0}$$


---


### 3.4 Kinematic & Electromagnetic Scaling Summary


| Physical Parameter | Dependence on $n$ and $Z$ | Ratio ($n_1 \to n_2$) |
| :---: | :---: | :---: |
| **Radius ($r_n$)** | $r \propto \frac{n^2}{Z}$ | $\frac{r_1}{r_2} = \left(\frac{n_1}{n_2}\right)^2 \left(\frac{Z_2}{Z_1}\right)$ |
| **Speed ($v_n$)** | $v \propto \frac{Z}{n}$ | $\frac{v_1}{v_2} = \left(\frac{Z_1}{Z_2}\right) \left(\frac{n_2}{n_1}\right)$ |
| **Time Period ($T_n = \frac{2\pi r}{v}$)** | $T \propto \frac{n^3}{Z^2}$ | $\frac{T_1}{T_2} = \left(\frac{n_1}{n_2}\right)^3 \left(\frac{Z_2}{Z_1}\right)^2$ |
| **Frequency of Revolution ($f_n = \frac{1}{T}$)** | $f \propto \frac{Z^2}{n^3}$ | $\frac{f_1}{f_2} = \left(\frac{Z_1}{Z_2}\right)^2 \left(\frac{n_2}{n_1}\right)^3$ |
| **Orbital Electric Current ($I = e f$)** | $I \propto \frac{Z^2}{n^3}$ | $\frac{I_1}{I_2} = \left(\frac{Z_1}{Z_2}\right)^2 \left(\frac{n_2}{n_1}\right)^3$ |
| **Magnetic Dipole Moment ($M = I A$)** | $M \propto \left(\frac{Z^2}{n^3}\right) \cdot \left(\frac{n^4}{Z^2}\right) \propto n$ | Independent of $Z$! $M \propto n$ |
| **Magnetic Field at Nucleus ($B = \frac{\mu_0 I}{2r}$)** | $B \propto \frac{I}{r} \propto \frac{Z^3}{n^5}$ | $\frac{B_1}{B_2} = \left(\frac{Z_1}{Z_2}\right)^3 \left(\frac{n_2}{n_1}\right)^5$ |


---


### 3.5 Generalized Non-Coulombic Potential Wells (JEE Advanced Archetype)
If a hypothetical particle of mass $m$ moves under a generalized potential energy $U(r) = K r^p$ (where $p$ is an integer), find the scaling of $r_n$ and $E_n$ with principal quantum number $n$:
1. Force: $F = -\frac{dU}{dr} = -p K r^{p-1}$.
2. Centripetal balance: $\frac{m v^2}{r} = |F| = p K r^{p-1} \implies m v^2 = p K r^p$.
3. Quantization: $m v r = n\hbar \implies v = \frac{n\hbar}{m r}$.
4. Equating $v^2$:
   $$\frac{n^2 \hbar^2}{m r^2} = p K r^p \implies r^{p+2} \propto n^2 \implies \mathbf{r_n \propto n^{\frac{2}{p+2}}}$$
5. Kinetic energy: $KE = \frac{1}{2} m v^2 = \frac{1}{2} p K r^p \propto r^p \propto n^{\frac{2p}{p+2}}$.
6. Potential energy: $PE = K r^p \propto n^{\frac{2p}{p+2}}$.
7. Total energy: $\mathbf{E_n \propto n^{\frac{2p}{p+2}}}$.
* Special Case 1: Standard Coulomb Field ($p = -1$):
  $r \propto n^{\frac{2}{-1+2}} = n^2$; $E \propto n^{\frac{-2}{1}} = n^{-2}$ (Matches standard Bohr model!).
* Special Case 2: 3D Isotropic Harmonic Oscillator ($p = 2$):
  $r \propto n^{\frac{2}{4}} = n^{1/2}$; $E \propto n^{\frac{4}{4}} = n^1$ (Equispaced energy levels!).


---


## 4. The Hydrogen Spectral Series & Atomic Recoil


### 4.1 The Rydberg Formula
When an electron jumps from higher orbit $n_2$ to lower orbit $n_1$, the wavenumber ($\bar{\nu}$) of the emitted photon is:
$$\mathbf{\bar{\nu} = \frac{1}{\lambda} = \frac{\Delta E}{hc} = R_H Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)}$$
where $R_H$ is the **Rydberg Constant**:
$$\mathbf{R_H = \frac{2\pi^2 m k^2 e^4}{c h^3} = \frac{m e^4}{8 \varepsilon_0^2 c h^3} \approx 109,737\text{ cm}^{-1} = 1.09737 \times 10^7\text{ m}^{-1}}$$
* Useful Reciprocal:
  $$\mathbf{\frac{1}{R_H} \approx 911.6\text{ \AA} \approx 912\text{ \AA}}$$


---


### 4.2 Systematic Spectral Series Architecture


| Spectral Series | Lower State ($n_1$) | Upper States ($n_2$) | Spectral Region | First Line ($\lambda_{\max}$) | Series Limit ($\lambda_{\min}$) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Lyman** | $n_1 = 1$ | $2, 3, 4, \dots, \infty$ | **Ultraviolet (UV)** | $2 \to 1$: $\lambda = \frac{4}{3 R_H} = 1216\text{ \AA}$ | $\infty \to 1$: $\lambda = \frac{1}{R_H} = 912\text{ \AA}$ |
| **Balmer** | $n_1 = 2$ | $3, 4, 5, \dots, \infty$ | **Visible / Near UV** | $3 \to 2$ ($H_\alpha$): $\lambda = \frac{36}{5 R_H} = 6563\text{ \AA}$ | $\infty \to 2$: $\lambda = \frac{4}{R_H} = 3646\text{ \AA}$ |
| **Paschen** | $n_1 = 3$ | $4, 5, 6, \dots, \infty$ | **Near Infrared (NIR)** | $4 \to 3$: $\lambda = \frac{144}{7 R_H} = 18751\text{ \AA}$ | $\infty \to 3$: $\lambda = \frac{9}{R_H} = 8204\text{ \AA}$ |
| **Brackett** | $n_1 = 4$ | $5, 6, 7, \dots, \infty$ | **Infrared (IR)** | $5 \to 4$: $\lambda = \frac{400}{9 R_H} = 40516\text{ \AA}$ | $\infty \to 4$: $\lambda = \frac{16}{R_H} = 14586\text{ \AA}$ |
| **Pfund** | $n_1 = 5$ | $6, 7, 8, \dots, \infty$ | **Far Infrared (FIR)** | $6 \to 5$: $\lambda = \frac{900}{11 R_H} = 74578\text{ \AA}$ | $\infty \to 5$: $\lambda = \frac{25}{R_H} = 22790\text{ \AA}$ |
| **Humphrey** | $n_1 = 6$ | $7, 8, \dots, \infty$ | **Far Infrared (FIR)** | $7 \to 6$: $\lambda = \frac{1764}{13 R_H} = 123680\text{ \AA}$ | $\infty \to 6$: $\lambda = \frac{36}{R_H} = 32818\text{ \AA}$ |


---


### 4.3 Combinatorics of Spectral Lines
1. **For an Assembly of Large Number of Excited Atoms:**
   When electrons de-excite from higher level $n_2$ to lower level $n_1$:
   $$\mathbf{N = \frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2} = \frac{\Delta n (\Delta n + 1)}{2}}$$
   * If de-exciting to the ground state ($n_1 = 1$ from level $n$):
     $$\mathbf{N = \frac{n(n - 1)}{2}}$$
2. **For a Single Isolated Excited Hydrogen Atom:**
   An individual atom can take only ONE specific de-excitation cascade (e.g., $4 \to 3 \to 2 \to 1$). Hence:
   $$\mathbf{N_{\max} = n_2 - n_1 = n - 1}$$


---


### 4.4 Conservation of Linear Momentum & Atomic Recoil
When an isolated, stationary hydrogen atom of mass $M$ emits a photon during a transition of energy $\Delta E$:
1. Momentum of photon: $p_{\text{photon}} = \frac{h}{\lambda} = \frac{\Delta E}{c}$.
2. By conservation of linear momentum: $p_{\text{atom}} = p_{\text{photon}} = \frac{\Delta E}{c}$.
3. Recoil speed of atom:
   $$\mathbf{v_{\text{recoil}} = \frac{p}{M} = \frac{h}{M \lambda} = \frac{\Delta E}{M c}}$$
4. Recoil Kinetic Energy:
   $$\mathbf{KE_{\text{recoil}} = \frac{p_{\text{atom}}^2}{2 M} = \frac{(\Delta E)^2}{2 M c^2}}$$
5. Actual Energy of Emitted Photon:
   By energy conservation: $\Delta E = h\nu + KE_{\text{recoil}} \implies \mathbf{h\nu = \Delta E - \frac{(\Delta E)^2}{2 M c^2}}$.
   Because $M c^2 \approx 938\text{ MeV} \gg \Delta E \approx 10\text{ eV}$, the recoil correction is $\approx 10^{-9}\text{ eV}$ (tiny, but physically significant in precision Mössbauer spectroscopy!).


---


## 5. Dual Nature of Matter & Heisenberg Uncertainty Principle


### 5.1 The de Broglie Hypothesis


![Wave-Particle Duality, de Broglie Waves, and Heisenberg Uncertainty](/media/wave_particle_duality_de_broglie_and_heisenberg_uncertainty.webp)
*Description: Two-panel foundational quantum mechanics graphic: (A) Matter wave relationships detailing de Broglie wavelength formulas across kinetic energy, accelerating voltage ($\lambda_e = 12.27/\sqrt{V}\text{ \AA}$), and thermal motion ($\lambda_{\text{thermal}} = h/\sqrt{3mk_BT}$), alongside the constructive standing wave derivation of Bohr's angular momentum postulate ($2\pi r = n\lambda$); (B) Heisenberg uncertainty principle equations ($\Delta x \cdot \Delta p \ge \hbar/2$), relativistic demonstration proving the non-existence of free electrons inside the atomic nucleus, and Einstein's photoelectric stopping potential graphs ($V_s$ vs. $\nu$) exhibiting universal slope $h/e$.*


Every moving microscopic particle possesses an associated matter wave whose wavelength $\lambda$ is inversely proportional to its linear momentum $p$:
$$\mathbf{\lambda = \frac{h}{p} = \frac{h}{m v} = \frac{h}{\sqrt{2 m KE}}}$$
* **Wavelength of a Charged Particle Accelerated by Potential $V$ ($KE = q V$):**
  $$\mathbf{\lambda = \frac{h}{\sqrt{2 m q V}}}$$
  * **For an Electron ($m_e = 9.1 \times 10^{-31}\text{ kg}, q = e$):**
    $$\mathbf{\lambda_e = \sqrt{\frac{150}{V}}\text{ \AA} = \frac{12.27}{\sqrt{V}}\text{ \AA} = \frac{1.227}{\sqrt{V}}\text{ nm}}$$
  * **For a Proton:** $\lambda_p = \frac{0.286}{\sqrt{V}}\text{ \AA}$.
  * **For a Deuteron ($m = 2 m_p$):** $\lambda_d = \frac{0.202}{\sqrt{V}}\text{ \AA}$.
  * **For an $\alpha$-Particle ($m = 4 m_p, q = 2e$):** $\lambda_\alpha = \frac{0.101}{\sqrt{V}}\text{ \AA}$.
* **Wavelength of Gas Molecules in Thermal Equilibrium ($KE = \frac{3}{2} k_B T$):**
  $$\mathbf{\lambda_{\text{thermal}} = \frac{h}{\sqrt{3 m k_B T}}}$$


---


### 5.2 Standing Matter Waves & Bohr's Quantization
Louis de Broglie explained Bohr's empirical quantization rule as a condition for stable **constructive standing waves** on a circular orbit:
$$\mathbf{2\pi r_n = n \lambda \quad (n = 1, 2, 3, \dots)}$$
Substituting $\lambda = \frac{h}{m v_n}$:
$$2\pi r_n = n \left(\frac{h}{m v_n}\right) \implies \mathbf{m v_n r_n = \frac{n h}{2\pi} = n\hbar}$$
* **High-Yield Insight:** An electron in the $n$-th Bohr orbit forms **exactly $n$ de Broglie wavelengths** per revolution!
* If $2\pi r \ne n\lambda$, destructive phase interference destroys the wave amplitude over successive cycles, making the orbit mechanically forbidden.


---


### 5.3 Heisenberg's Uncertainty Principle
It is fundamentally impossible to simultaneously determine both the exact position and exact momentum of a microscopic subatomic particle:
$$\mathbf{\Delta x \cdot \Delta p_x \ge \frac{h}{4\pi} = \frac{\hbar}{2}}$$
$$\mathbf{\Delta x \cdot (m \Delta v_x) \ge \frac{\hbar}{2} \implies \Delta x \cdot \Delta v_x \ge \frac{h}{4\pi m}}$$
* **General Conjugate Variable Pairs:**
  * Energy and Time: $\mathbf{\Delta E \cdot \Delta t \ge \frac{\hbar}{2}}$ (Determines natural spectral line width: $\tau \approx 10^{-8}\text{ s} \implies \Delta E \approx 10^{-7}\text{ eV}$).
  * Angular Momentum and Angle: $\mathbf{\Delta L \cdot \Delta \theta \ge \frac{\hbar}{2}}$.


---


### 5.4 Theoretical Proof: Why Electrons Cannot Exist Inside the Nucleus
* Nuclear diameter is of the order of $10^{-14}\text{ m}$.
* If an electron were trapped inside the nucleus, its maximum positional uncertainty would be:
  $$\Delta x \approx 10^{-14}\text{ m}$$
* By Heisenberg's uncertainty principle, its minimum momentum uncertainty must be:
  $$\Delta p \ge \frac{h}{4\pi \Delta x} = \frac{6.626 \times 10^{-34}}{4\pi \times 10^{-14}} \approx 5.27 \times 10^{-21}\text{ kg}\cdot\text{m/s}$$
* Therefore, the momentum $p$ of the electron must be at least of order $5.27 \times 10^{-21}\text{ kg}\cdot\text{m/s}$.
* Using the relativistic energy-momentum relation ($E \approx p c$ for extreme relativistic regime):
  $$E \approx p c \approx (5.27 \times 10^{-21})(3.0 \times 10^8)\text{ J} \approx 1.58 \times 10^{-12}\text{ J} \approx \mathbf{98.8\text{ MeV} \approx 100\text{ MeV}}$$
* However, experimental measurements of $\beta$-decay show that emitted nuclear electrons have energies no greater than $2-4\text{ MeV}$.
* An electron with $100\text{ MeV}$ cannot be bound by the electrostatic potential of the nucleus.
* **Conclusion:** **Free electrons cannot exist permanently inside an atomic nucleus** (emitted $\beta$-particles are created at the instant of decay via neutron-to-proton conversion: $n \to p + e^- + \bar{\nu}_e$).


---


## 6. The Quantum Mechanical Model & Schrödinger Wave Equation


### 6.1 The Time-Independent Schrödinger Wave Equation (3D)


![Schrödinger Quantum Orbitals, Radial Distribution, and Aufbau Principles](/media/schrodinger_quantum_orbitals_radial_distribution_and_aufbau.webp)
*Description: Two-panel wave mechanics and electronic structure graphic: (A) Schrödinger wave equation radial distribution analysis showing the nonzero probability density $R(0) \ne 0$ for $s$-orbitals vs. nodal behavior $R(0)=0$ for non-$s$ orbitals, the radial probability distribution curves $P(r) = 4\pi r^2 R^2(r)$ with $r_{\max} = a_0$ for $1s$, the fundamental node counting laws ($N_r = n-l-1, N_a = l, N_{\text{total}} = n-1$), and penetration order ($s > p > d > f$); (B) Four quantum numbers ($n, l, m_l, m_s$), 3D geometries and nodal planes of $p$ and $d$ orbitals (including $d_{z^2}$ conical nodes), Aufbau $(n+l)$ filling sequence, single-electron degeneracy, and Hund's exchange energy stabilization in chromium ($3d^5 4s^1$, 10 exchanges) and copper ($3d^{10} 4s^1$).*


For a particle of mass $m$ moving in a 3D potential field $V(x, y, z)$ with total energy $E$:
$$\mathbf{\nabla^2 \psi + \frac{8\pi^2 m}{h^2} (E - V) \psi = 0 \iff \hat{H}\psi = E\psi}$$
where:
* $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$ is the **Laplacian Operator**.
* $\hat{H} = -\frac{\hbar^2}{2m}\nabla^2 + V$ is the **Hamiltonian Operator**.
* $\psi$ is the **Wave Function** (an eigenfunction of $\hat{H}$), representing the probability amplitude.


---


### 6.2 Born's Probabilistic Interpretation
* $\psi$ itself has no direct physical meaning and may be real or complex.
* The square of the absolute value, **$|\psi|^2$ (or $\psi^* \psi$)**, represents the **Probability Density** (probability of finding the electron per unit volume at coordinates $(x, y, z)$):
  $$dP = |\psi|^2 d\tau = |\psi|^2 dx dy dz$$
* **Normalization Condition:** Total probability of finding the electron in all space must equal unity:
  $$\mathbf{\int_{-\infty}^{+\infty} |\psi|^2 d\tau = 1}$$


---


### 6.3 Separation of Variables in Spherical Polar Coordinates
Transforming $(x, y, z) \to (r, \theta, \phi)$:
$$\mathbf{\psi(r, \theta, \phi) = R_{n, l}(r) \cdot \Theta_{l, m_l}(\theta) \cdot \Phi_{m_l}(\phi) = R_{n, l}(r) \cdot Y_{l, m_l}(\theta, \phi)}$$
* **Radial Wave Function $R_{n, l}(r)$:** Depends solely on $n$ and $l$; determines the size of the orbital and probability variation with distance $r$ from the nucleus.
* **Angular Wave Function $Y_{l, m_l}(\theta, \phi)$:** Depends solely on $l$ and $m_l$; determines the 3D shape and spatial orientation of the orbital.


---


### 6.4 Radial Probability Distribution Function ($P(r)$ / RDF)
The total probability of finding the electron within a spherical shell of radius $r$ and infinitesimal thickness $dr$ enclosing the nucleus is:
$$\mathbf{P(r) dr = \text{Volume of shell} \times \text{Radial probability density} = (4\pi r^2 dr) \cdot R_{n, l}^2(r)}$$
$$\mathbf{\frac{dP(r)}{dr} = 4\pi r^2 R_{n, l}^2(r)}$$
* **At $r = 0$ (The Nucleus):**
  * For $s$-orbitals ($l=0$): $R(0) \ne 0 \implies$ electron has a **finite probability density at the nucleus**!
  * For non-$s$ orbitals ($p, d, f$; $l \ge 1$): $R(0) = 0 \implies$ point node at the nucleus.
  * However, for **ALL orbitals without exception**, the radial distribution function vanishes at $r=0$ because of the volume factor $r^2$:
    $$\mathbf{P(0) = 4\pi (0)^2 R^2(0) = 0}$$
* **Most Probable Radius ($r_{\max}$):**
  Found by differentiating $P(r)$ with respect to $r$ and setting $\frac{dP}{dr} = 0$:
  * For Hydrogen $1s$ orbital:
    $$R_{1s}(r) = 2 \left(\frac{Z}{a_0}\right)^{3/2} e^{-Z r / a_0} \implies P(r) = 4\pi r^2 \cdot 4 \left(\frac{Z}{a_0}\right)^3 e^{-2 Z r / a_0}$$
    $$\frac{dP}{dr} = 0 \implies \mathbf{r_{\max} = \frac{a_0}{Z}}$$
    For neutral hydrogen ($Z=1$): $\mathbf{r_{\max} = a_0 = 0.529\text{ \AA}}$, which agrees identically with Bohr's first orbit radius!


---


### 6.5 Nodal Surfaces & The Master Node Counting Laws
A node is a region or surface where the probability density $|\psi|^2$ falls to zero.
1. **Radial Nodes (Spherical Nodal Shells):**
   Concentric spherical surfaces where the radial wave function crosses zero ($R(r) = 0$):
   $$\mathbf{N_{\text{radial}} = n - l - 1}$$
2. **Angular Nodes (Nodal Planes or Cones):**
   Planes or cones passing through the nucleus where the angular wave function vanishes ($Y(\theta, \phi) = 0$):
   $$\mathbf{N_{\text{angular}} = l}$$
3. **Total Nodes:**
   $$\mathbf{N_{\text{total}} = N_{\text{radial}} + N_{\text{angular}} = (n - l - 1) + l = n - 1}$$


| Orbital | $n$ | $l$ | Radial Nodes ($n-l-1$) | Angular Nodes ($l$) | Total Nodes ($n-1$) | Nodal Planes / Shapes |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$1s$** | 1 | 0 | **0** | **0** | **0** | None |
| **$2s$** | 2 | 0 | **1** | **0** | **1** | 1 Spherical shell |
| **$2p$** | 2 | 1 | **0** | **1** | **1** | 1 Nodal plane ($p_x \implies yz, p_y \implies xz, p_z \implies xy$) |
| **$3s$** | 3 | 0 | **2** | **0** | **2** | 2 Spherical shells |
| **$3p$** | 3 | 1 | **1** | **1** | **2** | 1 Spherical shell + 1 Nodal plane |
| **$3d$** | 3 | 2 | **0** | **2** | **2** | 2 Nodal planes (or 2 nodal cones for $d_{z^2}$) |
| **$4d$** | 4 | 2 | **1** | **2** | **3** | 1 Spherical shell + 2 Nodal planes |
| **$4f$** | 4 | 3 | **0** | **3** | **3** | 3 Nodal planes |


---


## 7. The Four Quantum Numbers & Orbital Topologies


### 7.1 Detailed Quantum Number Specifications


#### 1. Principal Quantum Number ($n \in \{1, 2, 3, \dots\}$)
* Identifies the principal electron shell ($K, L, M, N, \dots$).
* Governs orbital size: $r \propto \frac{n^2}{Z}$.
* Governs primary orbital energy in multi-electron systems: $E \propto -\frac{Z^2}{n^2}$.
* Total number of subshells in $n$-th shell $= n$.
* Total number of orbitals in $n$-th shell $= \mathbf{n^2}$.
* Maximum number of electrons in $n$-th shell $= \mathbf{2n^2}$.


#### 2. Azimuthal / Orbital Angular Momentum Quantum Number ($l \in \{0, 1, 2, \dots, n-1\}$)
* Identifies the subshell ($s, p, d, f, g, \dots$).
* Governs the 3D shape of the orbital ($s$ spherical, $p$ dumbbell, $d$ cloverleaf / double-dumbbell, $f$ complex).
* Quantizes **Orbital Angular Momentum ($L$)**:
  $$\mathbf{L = \sqrt{l(l + 1)} \frac{h}{2\pi} = \sqrt{l(l + 1)} \hbar}$$
  * For any $s$-electron ($l=0$): $\mathbf{L = 0}$ (Zero orbital angular momentum!).
  * For any $p$-electron ($l=1$): $L = \sqrt{1(2)}\hbar = \sqrt{2}\hbar$.
  * For any $d$-electron ($l=2$): $L = \sqrt{2(3)}\hbar = \sqrt{6}\hbar$.
  * For any $f$-electron ($l=3$): $L = \sqrt{3(4)}\hbar = \sqrt{12}\hbar = 2\sqrt{3}\hbar$.


#### 3. Magnetic Quantum Number ($m_l \in \{-l, -(l-1), \dots, 0, \dots, +(l-1), +l\}$)
* Identifies the spatial orientation of the orbital in an external magnetic field.
* Total number of orbitals in subshell $l$: $\mathbf{2l + 1}$.
* Quantizes the $z$-component of orbital angular momentum:
  $$\mathbf{L_z = m_l \hbar}$$


#### 4. Spin Quantum Number ($s = 1/2$; $m_s = \pm 1/2$)
* Arises from relativistic quantum mechanics (Dirac equation); NOT derived from Schrödinger equation.
* Describes intrinsic spin angular momentum:
  $$\mathbf{S = \sqrt{s(s + 1)} \hbar = \sqrt{\frac{1}{2}\left(\frac{3}{2}\right)} \hbar = \frac{\sqrt{3}}{2} \hbar}$$
* $z$-component of spin: $S_z = m_s \hbar = \pm \frac{1}{2}\hbar$.
* **Spin-Only Magnetic Moment ($\mu_s$):**
  $$\mathbf{\mu_s = \sqrt{n(n + 2)}\text{ BM}}$$
  where $n$ is the number of unpaired electrons and $\text{BM} = \frac{e\hbar}{2m_e} = 9.274 \times 10^{-24}\text{ J/T}$ (Bohr Magneton).


---


### 7.2 Orbital Geometries & Nodal Surfaces


#### 7.2.1 $p$-Orbitals ($l = 1$, Dumbbell Shaped)
* $p_x$: Electron density concentrated along $x$-axis. **Nodal plane is the $yz$-plane ($x=0$)**.
* $p_y$: Electron density concentrated along $y$-axis. **Nodal plane is the $xz$-plane ($y=0$)**.
* $p_z$: Electron density concentrated along $z$-axis. **Nodal plane is the $xy$-plane ($z=0$)**.


#### 7.2.2 $d$-Orbitals ($l = 2$)
1. **$d_{xy}$:** Lobes lie in the $xy$-plane between $x$ and $y$ axes. Nodal planes: **$xz$-plane ($y=0$) and $yz$-plane ($x=0$)**.
2. **$d_{yz}$:** Lobes lie in the $yz$-plane between $y$ and $z$ axes. Nodal planes: **$xy$-plane ($z=0$) and $xz$-plane ($y=0$)**.
3. **$d_{zx}$:** Lobes lie in the $zx$-plane between $z$ and $x$ axes. Nodal planes: **$xy$-plane ($z=0$) and $yz$-plane ($x=0$)**.
4. **$d_{x^2-y^2}$:** Lobes lie directly along the $x$ and $y$ axes. Nodal planes: **Two mutually perpendicular planes passing through origin inclined at $45^\circ$ to $x$ and $y$ axes ($x = \pm y$)**.
5. **$d_{z^2}$ (The Donut / Baby-Soother Orbital):**
   * Possesses two large lobes along the $z$-axis and a high electron-density toroidal ring (donut) in the $xy$-plane.
   * **Nodal Planes:** $d_{z^2}$ has **ZERO planar nodal surfaces**! Instead, it has **TWO CONICAL NODAL SURFACES** inclined at an angle:
     $$\mathbf{\theta = \cos^{-1}\left(\frac{1}{\sqrt{3}}\right) \approx 54.74^\circ \quad (\text{Relative to } z\text{-axis})}$$


---


## 8. Electronic Configuration Rules & Stability of Subshells


### 8.1 The Aufbau Principle & The $(n + l)$ Rule
Electrons occupy atomic orbitals in order of increasing orbital energy:
1. An orbital with a **lower value of $(n + l)$** has lower energy and is filled first.
2. If two orbitals possess the **identical value of $(n + l)$**, the orbital with the **lower value of $n$** has lower energy and fills first.
* **Energy Sequence:**
  $$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < 5f < 6d < 7p$$
* **CRITICAL JEE EXCEPTION: Single-Electron Systems ($\text{H}, \text{He}^+, \text{Li}^{2+}$):**
  In single-electron species, there is zero inter-electronic repulsion. The energy of an orbital **depends EXCLUSIVELY on the principal quantum number $n$**!
  $$\mathbf{E_{3s} = E_{3p} = E_{3d} \quad (\text{Degenerate in Hydrogen Atom})}$$
  $$\mathbf{1s < 2s = 2p < 3s = 3p = 3d < 4s = 4p = 4d = 4f}$$


---


### 8.2 Pauli's Exclusion Principle
"No two electrons in an isolated atom can have the identical set of all four quantum numbers ($n, l, m_l, m_s$)."
* Consequence: An individual orbital can accommodate a **maximum of two electrons**, and they must possess **antiparallel spins** ($\uparrow\downarrow$, $m_s = +1/2$ and $-1/2$).


---


### 8.3 Hund's Rule of Maximum Multiplicity & Exchange Energy
"Electron pairing in degenerate orbitals belonging to the same subshell does not take place until each orbital is singly occupied with parallel spins."
* **Spin Multiplicity:** $2S + 1$, where $S = \sum m_s = \frac{n}{2}$ ($n$ is the number of unpaired electrons). Parallel spins maximize $S$ and minimize electrostatic repulsion.
* **Exchange Energy ($K$):**
  When two or more electrons with parallel spins exchange positions between degenerate orbitals, quantum mechanical exchange stabilization energy is released.
  For $n_p$ electrons with parallel spins, the number of possible unique exchanges is:
  $$\mathbf{N_{\text{exchange}} = \frac{n_p(n_p - 1)}{2}}$$
* **Chromium ($\text{Cr}$, $Z = 24$):**
  * Expected configuration: $[ \text{Ar} ] 3d^4 4s^2 \implies$ in $3d^4$, $N_{\text{exchange}} = \frac{4(3)}{2} = 6$.
  * Actual configuration: $\mathbf{[ \text{Ar} ] 3d^5 4s^1} \implies$ in $3d^5$, $N_{\text{exchange}} = \frac{5(4)}{2} = \mathbf{10\text{ exchanges}}$!
  * The colossal gain of 4 additional exchanges, combined with spherical symmetry, overwhelmingly compensates for the small promotional energy of jumping an electron from $4s$ to $3d$.
* **Copper ($\text{Cu}$, $Z = 29$):**
  * Expected: $[ \text{Ar} ] 3d^9 4s^2 \implies N_{\text{exchange}} = \frac{5(4)}{2} + \frac{4(3)}{2} = 10 + 6 = 16$.
  * Actual: $\mathbf{[ \text{Ar} ] 3d^{10} 4s^1} \implies N_{\text{exchange}} = \frac{5(4)}{2} + \frac{5(4)}{2} = 10 + 10 = \mathbf{20\text{ exchanges}}$!
* **Other High-Yield Anomalous Ground State Configurations:**
  * Palladium ($\text{Pd}$, $Z = 46$): $\mathbf{[ \text{Kr} ] 4d^{10} 5s^0}$ (Completely filled $4d$, zero $5s$ electrons!).
  * Platinum ($\text{Pt}$, $Z = 78$): $\mathbf{[ \text{Xe} ] 4f^{14} 5d^9 6s^1}$.
  * Gold ($\text{Au}$, $Z = 79$): $\mathbf{[ \text{Xe} ] 4f^{14} 5d^{10} 6s^1}$.


---


## 9. Comprehensive JEE Problem Archetypes & High-Yield Trap Logs


### 9.1 Master Formula & Constant Sheet


| Physical Parameter | Formula | Canonical Values |
| :---: | :---: | :---: |
| **Bohr Radius** | $r_n = \frac{n^2 h^2}{4\pi^2 m k Z e^2}$ | $r_n = 0.529 \frac{n^2}{Z}\text{ \AA}$ |
| **Orbital Speed** | $v_n = \frac{2\pi k Z e^2}{n h}$ | $v_n = 2.18 \times 10^6 \frac{Z}{n}\text{ m/s}$ |
| **Orbital Energy** | $E_n = -\frac{k Z e^2}{2 r_n}$ | $E_n = -13.6 \frac{Z^2}{n^2}\text{ eV} = -2.18 \times 10^{-18} \frac{Z^2}{n^2}\text{ J}$ |
| **Rydberg Wavenumber** | $\bar{\nu} = R_H Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$ | $R_H = 109,737\text{ cm}^{-1}$; $1/R_H \approx 912\text{ \AA}$ |
| **de Broglie Wavelength** | $\lambda = \frac{h}{p} = \frac{h}{\sqrt{2m q V}}$ | $\lambda_e = \frac{12.27}{\sqrt{V}}\text{ \AA}$ |
| **Orbital Angular Momentum** | $L = \sqrt{l(l + 1)}\hbar$ | $L_{s} = 0, L_p = \sqrt{2}\hbar, L_d = \sqrt{6}\hbar$ |
| **Spin Magnetic Moment** | $\mu_s = \sqrt{n(n + 2)}\text{ BM}$ | $\text{BM} = 9.274 \times 10^{-24}\text{ J/T}$ |
| **Radial Nodes** | $N_r = n - l - 1$ | $N_r(3s) = 2, N_r(3p) = 1, N_r(3d) = 0$ |
| **Angular Nodes** | $N_a = l$ | $N_a(s) = 0, N_a(p) = 1, N_a(d) = 2$ |


---


### 9.2 High-Yield Exam Traps & Conceptual Pitfalls


#### Trap 1: Orbital Energy Degeneracy in Hydrogen vs. Multi-Electron Atoms
* In **Hydrogen ($\text{H}$) and hydrogen-like ions ($\text{He}^+, \text{Li}^{2+}$)**, the Hamiltonian depends purely on $r$. Therefore, energy depends **ONLY on $n$**:
  $$E_{3s} = E_{3p} = E_{3d}$$
  An electron in $3s, 3p,$ or $3d$ has the identical energy!
* In **multi-electron atoms**, electron-electron shielding causes subshell splitting according to the $(n + l)$ rule:
  $$E_{3s} < E_{3p} < E_{3d}$$


#### Trap 2: Orbital Angular Momentum vs. Spin Angular Momentum vs. Total Angular Momentum
* **Orbital Angular Momentum:** $L = \sqrt{l(l+1)}\hbar$. (For any $s$-electron in any shell, $L = 0$).
* **Spin Angular Momentum:** $S = \sqrt{s(s+1)}\hbar = \frac{\sqrt{3}}{2}\hbar$. (Constant for every electron).
* **Bohr's Postulate:** $mvr = \frac{nh}{2\pi}$. (Bohr's $L = n\hbar$ contradicts quantum mechanics where $L = \sqrt{l(l+1)}\hbar$; Bohr assigned $L = 1\hbar$ to ground state, whereas ground state is $1s$ with $l=0 \implies L=0$).


#### Trap 3: Value of $R(0)$ vs. Value of $P(0)$
* The **radial wave function at the nucleus $R(0)$** is:
  * Non-zero for $s$-orbitals ($l=0$).
  * Exactly zero for all non-$s$ orbitals ($p, d, f$).
* The **radial probability distribution function at the nucleus $P(0) = 4\pi (0)^2 R^2(0)$ is ZERO FOR ALL ORBITALS**, including $s$-orbitals!


#### Trap 4: Most Probable Radius vs. Average Radius
* For $1s$ orbital of hydrogen:
  * Most probable radius (peak of $4\pi r^2 R^2(r)$): $\mathbf{r_{\max} = a_0 = 0.529\text{ \AA}}$.
  * Average radius $\langle r \rangle = \int_0^\infty r P(r) dr = \mathbf{\frac{3}{2} a_0 = 0.793\text{ \AA}}$!
  * $\langle r \rangle > r_{\max}$ because the distribution is asymmetrical with a long tail extending toward infinity.