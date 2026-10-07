Physics Revision Context: Chapter 95 — Modern Physics: Photoelectric Effect, Atomic Structure & X-Rays
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/Modern Physics/, Modern Physics Theory.pdf, Modern Physics Exercise 1 to 3.pdf, Modern Physics Exercise Solutions.pdf, Modern Physics HLP.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Modern Physics (Photoelectric Effect: Work function $\phi_0$, Threshold frequency $\nu_{\text{th}}$, Einstein's photoelectric equation $K_{\max} = h\nu - \phi_0 = eV_s$, Stopping potential $V_s$, Universal slope $h/e$, Saturation current $i_{\text{sat}} \propto \text{Intensity}$, Quantum efficiency $\eta$; Photon Dynamics & Radiation Pressure: Momentum $p = h/\lambda$, Radiation pressure for absorbing ($I/c$), reflecting ($2I/c$), and oblique surfaces ($\cos^2\theta$); Matter Waves & de Broglie Hypothesis: $\lambda = h/p = h/\sqrt{2mK}$, Accelerated charge $\lambda = h/\sqrt{2mqV}$, Electron formula $\lambda_e = \frac{12.27}{\sqrt{V}}\ \text{\AA}$, Davisson-Germer nickel crystal diffraction experiment; Bohr's Atomic Model for Hydrogen-like Ions ($Z$): Angular momentum quantization $L = n\hbar$, Radius $r_n = 0.529\frac{n^2}{Z}\ \text{\AA}$, Velocity $v_n = 2.18 \times 10^6 \frac{Z}{n}\ \text{m/s}$, Time period $T_n \propto n^3/Z^2$, Orbital magnetic moment $M_n = n\mu_B$, Energy levels $E_n = -13.6 \frac{Z^2}{n^2}\ \text{eV}$, Potential and kinetic energy relations $U_n = 2E_n = -2K_n$; Emission Spectrum & Rydberg Formula: $\frac{1}{\lambda} = R Z^2(\frac{1}{n_1^2} - \frac{1}{n_2^2})$, Spectral series (Lyman UV, Balmer Visible, Paschen IR, Brackett, Pfund), Total lines $N = \frac{n(n-1)}{2}$; Atomic Collisions & Inelastic Excitation Thresholds: COM kinetic energy availability $\Delta K_{\max} = K \frac{m_2}{m_1+m_2}$, Minimum threshold for neutron on ground-state hydrogen ($20.4\ \text{eV}$); X-Rays Production & Spectra: Coolidge tube, Continuous Bremsstrahlung Duane-Hunt cutoff $\lambda_{\min} = \frac{hc}{eV_{\text{acc}}} = \frac{12400}{V}\ \text{\AA}$, Characteristic X-rays ($K_\alpha, K_\beta, L_\alpha$), Moseley's Law $\sqrt{\nu} = a(Z - b)$, Screening constants ($b=1$ for $K_\alpha$, $b=7.4$ for $L_\alpha$), Bragg's crystal diffraction $2d\sin\theta = n\lambda$; High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Photoelectric Effect, Radiation Pressure & Matter Waves
![Photoelectric Effect Einstein Stopping Potential And Matter Waves](/media/photoelectric_effect_einstein_stopping_potential_and_matter_waves.webp) Description: Two-panel reference diagram for photoelectric effect and matter waves: (Panel A) Einstein's photoelectric analytics, work function, stopping potential linear frequency plot with universal slope h/e, and radiation pressure formulas; (Panel B) de Broglie matter wave formulations for accelerated particles, thermal neutrons, Davisson-Germer electron diffraction validation, and Bohr angular momentum quantization derivation.
1.1 The Photoelectric Effect (Einstein's Quantum Formulation)
When light of sufficiently high frequency strikes a clean metallic surface, electrons are ejected instantaneously ($< 10^{-9}\ \text{s}$).
1. Fundamental Definitions & Parameters
* Photon Energy ($E$): $$E = h\nu = \frac{hc}{\lambda} \approx \frac{12400}{\lambda(\text{\AA})}\ \text{eV} \approx \frac{1240}{\lambda(\text{nm})}\ \text{eV}$$
* Work Function ($\phi_0$ or $W$): The minimum energy required to eject an electron from the metal surface: $$\mathbf{\phi_0 = h\nu_{\text{th}} = \frac{hc}{\lambda_{\text{th}}}}$$
   * Minimum for Cesium ($\text{Cs} \approx 1.9\ \text{eV}$); higher for noble/transition metals (Platinum $\approx 5.6\ \text{eV}$).
   * Threshold frequency: $\nu \ge \nu_{\text{th}}$ for emission.
   * Threshold wavelength: $\lambda \le \lambda_{\text{th}}$ for emission.
* Einstein's Photoelectric Equation: By conservation of energy for a single photon-electron collision: $$h\nu = \phi_0 + K_{\max}$$ $$\mathbf{K_{\max} = h\nu - \phi_0 = \frac{hc}{\lambda} - \phi_0 = e V_s}$$
* Stopping Potential ($V_s$): The minimum negative collector potential relative to the emitter required to stop even the fastest photoelectron ($i_{\text{photo}} = 0$): $$\mathbf{V_s = \left(\frac{h}{e}\right)\nu - \frac{\phi_0}{e} = \left(\frac{hc}{e}\right)\frac{1}{\lambda} - \frac{\phi_0}{e}}$$
   * Universal Slope: The plot of $V_s$ versus frequency $\nu$ is a straight line whose slope is $\frac{h}{e} \approx 4.14 \times 10^{-15}\ \text{V}\cdot\text{s}$, strictly identical for all metals in the universe!
   * The $x$-intercept gives threshold frequency $\nu_{\text{th}}$, and the $y$-intercept gives $-\phi_0/e$.
2. Experimental Characteristics & Wave Theory Failures
1. Intensity Independence of $K_{\max}$: Increasing light intensity increases the rate of photon arrival, boosting the saturation photocurrent $i_{\text{sat}}$, but leaves the kinetic energy $K_{\max}$ and stopping potential $V_s$ strictly unchanged.
2. Frequency Dependence: Increasing $\nu$ linearly elevates $V_s$ and $K_{\max}$.
3. No Time Lag: Classical wave theory predicted a time delay (hours) for an electron to soak up sufficient wave energy over its atomic cross-section; quantum mechanics explains instantaneous ejection via localized single-photon absorption.
4. Quantum Efficiency ($\eta$): $$\mathbf{i_{\text{sat}} = \eta \cdot e \cdot \left(\frac{P}{h\nu}\right) = \eta \cdot e \cdot \left(\frac{P\lambda}{hc}\right)}$$


________________


1.2 Photon Momentum & Radiation Pressure
A photon carrying energy $E = h\nu$ possesses momentum: $$\mathbf{p = \frac{E}{c} = \frac{h}{\lambda}}$$ When a parallel beam of light of power $P$ and intensity $I$ strikes a flat surface of area $A$:
1. Normal Incidence
* Completely Absorbing Surface (Reflection Coefficient $R = 0$): Each photon deposits momentum $p = h/\lambda$: $$\mathbf{F = \frac{P}{c}}, \qquad \mathbf{P_{\text{rad}} = \frac{I}{c} = \langle u \rangle}$$
* Completely Reflecting Surface (Reflection Coefficient $R = 1$): Each photon bounces elastically, transferring momentum $\Delta p = 2p$: $$\mathbf{F = \frac{2P}{c}}, \qquad \mathbf{P_{\text{rad}} = \frac{2I}{c} = 2\langle u \rangle}$$
* Partial Reflection (Coefficient $R$): $$\mathbf{P_{\text{rad}} = \frac{I}{c}(1 + R)}$$
2. Oblique Incidence at Angle $\theta$ to the Normal
* Perfect Absorber: $\mathbf{P_{\text{rad}} = \frac{I}{c}\cos^2\theta}$, Normal Force $\mathbf{F_n = \frac{I A}{c}\cos^2\theta}$.
* Perfect Reflector: $\mathbf{P_{\text{rad}} = \frac{2I}{c}\cos^2\theta}$, Normal Force $\mathbf{F_n = \frac{2 I A}{c}\cos^2\theta}$.


________________


1.3 De Broglie Matter Waves
In 1924, Louis de Broglie hypothesized that if light exhibits wave-particle duality, material particles must also exhibit wave properties: $$\mathbf{\lambda = \frac{h}{p} = \frac{h}{m v} = \frac{h}{\sqrt{2 m K}}}$$
1. Charged Particles Accelerated Through Potential $V$ ($K = q V$)
$$\mathbf{\lambda = \frac{h}{\sqrt{2 m q V}}}$$


* Electron ($m_e = 9.1 \times 10^{-31}\ \text{kg}, q = e$): $$\mathbf{\lambda_e = \sqrt{\frac{150}{V}}\ \text{\AA} = \frac{12.27}{\sqrt{V}}\ \text{\AA}}$$
* Proton: $\lambda_p = \frac{0.286}{\sqrt{V}}\ \text{\AA}$.
* Deuteron: $\lambda_d = \frac{0.202}{\sqrt{V}}\ \text{\AA}$.
* Alpha Particle ($\alpha$): $\lambda_\alpha = \frac{0.101}{\sqrt{V}}\ \text{\AA}$.
2. Thermal Gas Particles at Absolute Temperature $T$
The average translational kinetic energy of a molecule in thermal equilibrium is $K = \frac{3}{2}k_B T$: $$\mathbf{\lambda_{\text{thermal}} = \frac{h}{\sqrt{3 m k_B T}}}$$
3. Davisson-Germer Experiment (Experimental Validation)
Electrons accelerated through $V = 54\ \text{V}$ were scattered from a nickel single crystal:


* Observed strong constructive interference peak at scattering angle $\theta = 50^\circ$ (glancing Bragg angle $\phi = \frac{180^\circ - 50^\circ}{2} = 65^\circ$).
* Bragg's law ($d = 0.91\ \text{\AA}$): $$\lambda = 2 d \sin\phi = 2(0.91\ \text{\AA})\sin 65^\circ = \mathbf{1.65\ \text{\AA}}$$
* Theoretical de Broglie wavelength: $$\lambda_e = \frac{12.27}{\sqrt{54}} = \mathbf{1.67\ \text{\AA}}$$ The exact agreement established the wave nature of electrons.


________________


2. Bohr's Atomic Model, Hydrogen Spectrum & X-Rays
![Bohr Atomic Model Hydrogen Spectrum And Xray Moseley Law](/media/bohr_atomic_model_hydrogen_spectrum_and_xray_moseley_law.webp) Description: Two-panel reference diagram for atomic structure and X-rays: (Panel A) Bohr hydrogen-like atom scaling laws for orbital radii, velocities, currents, and energies, alongside the Rydberg spectral series taxonomy from Lyman to Pfund; (Panel B) Continuous X-ray Bremsstrahlung cutoff wavelength, characteristic inner-shell transition peaks, Moseley's law linear relationship, and Bragg crystal diffraction.
2.1 Bohr's Model of Hydrogen-Like Atoms ($Z$)
Applicable to single-electron species ($\text{H}, \text{He}^+, \text{Li}^{2+}, \text{Be}^{3+}$):


1. Centripetal Force Balance: $\frac{m v^2}{r} = \frac{1}{4\pi\epsilon_0}\frac{Z e^2}{r^2}$.
2. Quantization of Angular Momentum: $L = m v r = n \frac{h}{2\pi} = n\hbar$ ($n = 1, 2, 3, \dots$).
3. Photon Transition: $\Delta E = E_{n_2} - E_{n_1} = h\nu = \frac{hc}{\lambda}$.
1. Universal Scaling Relations
* Orbital Radius ($r_n$): $$\mathbf{r_n = \frac{\epsilon_0 h^2}{\pi m e^2} \frac{n^2}{Z} = r_0 \frac{n^2}{Z} \approx 0.529 \frac{n^2}{Z}\ \text{\AA}} \quad (r_n \propto n^2/Z)$$
* Orbital Velocity ($v_n$): $$\mathbf{v_n = \frac{e^2}{2\epsilon_0 h} \frac{Z}{n} = v_0 \frac{Z}{n} \approx \left(\frac{c}{137}\right)\frac{Z}{n} \approx 2.18 \times 10^6 \frac{Z}{n}\ \text{m/s}} \quad (v_n \propto Z/n)$$
* Orbital Period ($T_n$) & Equivalent Current ($I_n$): $$\mathbf{T_n = \frac{2\pi r_n}{v_n} \propto \frac{n^3}{Z^2}}, \qquad \mathbf{I_n = \frac{e}{T_n} \propto \frac{Z^2}{n^3}}$$
* Magnetic Field at Nucleus ($B_n$): $$\mathbf{B_n = \frac{\mu_0 I_n}{2 r_n} \propto \frac{Z^3}{n^5}}$$
* Energy Invariants:
   * Kinetic Energy: $K_n = \frac{1}{2}m v_n^2 = +13.6 \frac{Z^2}{n^2}\ \text{eV}$.
   * Potential Energy: $U_n = -\frac{1}{4\pi\epsilon_0}\frac{Z e^2}{r_n} = -27.2 \frac{Z^2}{n^2}\ \text{eV}$.
   * Total Energy: $\mathbf{E_n = K_n + U_n = -13.6 \frac{Z^2}{n^2}\ \text{eV}}$.
   * Virial Theorem: $\mathbf{U_n = 2 E_n = -2 K_n} \iff \mathbf{K_n = |E_n|, U_n = -2|E_n|}$.


________________


2.2 Hydrogen Emission Spectrum & Rydberg Formula
$$\mathbf{\frac{1}{\lambda} = R Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)}$$ Where the Rydberg constant is $R = \frac{m e^4}{8 \epsilon_0^2 c h^3} \approx 1.097 \times 10^7\ \text{m}^{-1}$ ($\frac{1}{R} \approx 912\ \text{\AA}$).


Series Name
	Lower Orbit ($n_1$)
	Upper Orbits ($n_2$)
	Spectral Region
	Series Limit ($\lambda_{\min}, n_2 \to \infty$)
	First Line ($\lambda_{\max}, n_2 = n_1 + 1$)
	Lyman
	$n_1 = 1$
	$2, 3, 4 \dots$
	Ultraviolet (UV)
	$\frac{1}{R} \approx 912\ \text{\AA}$
	$\frac{4}{3R} \approx 1216\ \text{\AA}$
	Balmer
	$n_1 = 2$
	$3, 4, 5 \dots$
	Visible Light
	$\frac{4}{R} \approx 3646\ \text{\AA}$
	$H_\alpha = \frac{36}{5R} \approx 6563\ \text{\AA}$ (Red)
	Paschen
	$n_1 = 3$
	$4, 5, 6 \dots$
	Near Infrared
	$\frac{9}{R} \approx 8205\ \text{\AA}$
	$\frac{144}{7R} \approx 18751\ \text{\AA}$
	Brackett
	$n_1 = 4$
	$5, 6, 7 \dots$
	Infrared
	$\frac{16}{R} \approx 14585\ \text{\AA}$
	$\frac{400}{9R} \approx 26253\ \text{\AA}$
	Pfund
	$n_1 = 5$
	$6, 7, 8 \dots$
	Far Infrared
	$\frac{25}{R} \approx 22790\ \text{\AA}$
	$\frac{900}{11R} \approx 74578\ \text{\AA}$
	

* Total Spectral Lines Emitted (De-excitation from level $n$ to ground state): $$\mathbf{N = \frac{n(n - 1)}{2}}$$ Between arbitrary levels $n_2$ and $n_1$: $\mathbf{N = \frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2}}$.


________________


2.3 Atomic Collisions & Excitation Thresholds
In a collision between an incident particle of mass $m_1$ and a stationary atom of mass $m_2$:


* The maximum fraction of kinetic energy convertible into internal atomic excitation occurs in a perfectly inelastic collision: $$\mathbf{\Delta K_{\max} = K_{\text{initial}} \left(\frac{m_2}{m_1 + m_2}\right)}$$
* Ground-State Hydrogen Excitation ($\Delta E_{1\to 2} = 10.2\ \text{eV}$):
   * Electron Bombardment ($m_e \ll m_H$): $\frac{m_H}{m_e + m_H} \approx 1 \implies \mathbf{K_{\min} \approx 10.2\ \text{eV}}$.
   * Neutron Bombardment ($m_n \approx m_H$): $\Delta K_{\max} = \frac{K}{2} \ge 10.2\ \text{eV} \implies \mathbf{K_{\min} = 20.4\ \text{eV}}$.
   * Critical Rule: If a neutron strikes a ground-state hydrogen atom with $K < 20.4\ \text{eV}$, the collision is strictly and completely ELASTIC ($\Delta E = 0$).


________________


2.4 X-Ray Emission Spectrum & Moseley's Law
X-rays are high-energy electromagnetic waves ($\lambda \sim 0.1 - 10\ \text{\AA}$) produced in a Coolidge tube when fast cathode electrons bombard a high-melting-point heavy metal anode.
1. Continuous X-Rays (Bremsstrahlung)
Emitted when bombarding electrons undergo radiative deceleration in the target nuclear Coulomb field.


* Duane-Hunt Cutoff Wavelength: When an electron gives up its entire kinetic energy $e V_{\text{acc}}$ in a single braking impact: $$\mathbf{\lambda_{\min} = \frac{hc}{e V_{\text{acc}}} \approx \frac{12400}{V_{\text{acc}}(\text{volts})}\ \text{\AA}}$$ $\lambda_{\min}$ depends strictly and solely on the accelerating voltage $V_{\text{acc}}$; it is completely independent of the target material.
2. Characteristic X-Rays
Sharp, discrete intensity peaks superimposed on the continuous spectrum, produced when an energetic electron ejects an inner-shell electron ($K, L, M$) and an outer electron cascades down:


* $K_\alpha$ transition: $L \to K$ ($n = 2 \to 1$).
* $K_\beta$ transition: $M \to K$ ($n = 3 \to 1$).
* $L_\alpha$ transition: $M \to L$ ($n = 3 \to 2$).
* Energy ordering: $\Delta E(K_\beta) > \Delta E(K_\alpha) > \Delta E(L_\alpha) \implies \mathbf{\lambda(K_\beta) < \lambda(K_\alpha) < \lambda(L_\alpha)}$.
3. Moseley's Law
Henry Moseley established that the frequency of characteristic X-rays follows: $$\mathbf{\sqrt{\nu} = a(Z - b)}$$ Where $Z$ is the atomic number, $a$ is a proportionality constant, and $b$ is the screening (shielding) constant:


* For $K_\alpha$ Line ($b = 1$): The transitioning $L$-electron sees nuclear charge $Z$ screened by the one remaining $K$-shell electron: $$\nu_{K_\alpha} = R c (Z - 1)^2 \left(\frac{1}{1^2} - \frac{1}{2^2}\right) = \mathbf{\frac{3}{4} R c (Z - 1)^2} \implies a = \sqrt{\frac{3}{4} R c}$$
* For $L_\alpha$ Line ($b \approx 7.4$): $$\nu_{L_\alpha} = R c (Z - 7.4)^2 \left(\frac{1}{2^2} - \frac{1}{3^2}\right) = \mathbf{\frac{5}{36} R c (Z - 7.4)^2}$$
* Historic Impact: Moseley proved that atomic number ($Z$), not atomic weight, governs chemical periodicity, rectifying anomalies in Mendeleev's periodic table ($\text{Ar}-\text{K}, \text{Co}-\text{Ni}, \text{Te}-\text{I}$).
4. Bragg's Law of X-Ray Crystal Diffraction
$$\mathbf{2 d \sin\theta = n \lambda}$$ Where $d$ is interplanar lattice spacing and $\theta$ is the glancing angle with the crystal plane.


________________


3. High-Yield Problem Archetypes & Structural JEE Traps
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Stopping Potential vs Intensity
	Believing higher intensity increases stopping potential $V_s$.
	$V_s = \frac{h\nu - \phi_0}{e}$ depends strictly on frequency $\nu$ and work function $\phi_0$; intensity only changes saturation current!
	2
	Universal Slope of $V_s$ vs $\nu$
	Thinking different metals produce different slopes on the $V_s-\nu$ graph.
	The slope is $\frac{h}{e}$, which is a universal fundamental constant identical for all metals.
	3
	Continuous X-Ray Cutoff Dependence
	Expecting $\lambda_{\min}$ to shift when changing target from Copper to Tungsten.
	$\lambda_{\min} = \frac{hc}{e V_{\text{acc}}}$ depends only on accelerating voltage $V_{\text{acc}}$; target material alters only characteristic peaks!
	4
	Characteristic X-Ray Screening Constant
	Using $b = 1$ for all characteristic lines.
	Screening constant is $b = 1$ for $K_\alpha$, but $b \approx 7.4$ for $L_\alpha$ due to shielding by both $K$ and remaining $L$ electrons.
	5
	Neutron Colliding with Ground-State Hydrogen
	Assuming $10.2\ \text{eV}$ neutron can excite hydrogen.
	Due to center-of-mass conservation, maximum available internal energy is $K/2$. Hence, a neutron needs at least $20.4\ \text{eV}$ to cause inelastic excitation!
	6
	Magnetic Field at Nucleus Scaling
	Using $B \propto 1/r^2$ like Coulomb's law.
	Magnetic field at the nucleus scales as $\mathbf{B_n = \frac{\mu_0 I_n}{2 r_n} \propto \frac{Z^3}{n^5}}$ (steep $n^{-5}$ dependence!).
	7
	Balmer Series Spectral Classification
	Assuming all Balmer lines lie in the visible range.
	Only the first four lines ($H_\alpha, H_\beta, H_\gamma, H_\delta$) fall in the visible band; higher members and the series limit lie in the Near Ultraviolet!
	8
	De Broglie Wavelength of Thermal Particles
	Using $K = k_B T$ instead of $K = \frac{3}{2}k_B T$.
	Monatomic thermal gas particles have mean kinetic energy $\frac{3}{2}k_B T \implies \mathbf{\lambda = \frac{h}{\sqrt{3 m k_B T}}}$.
	9
	Radiation Force on Absorbing vs Reflecting
	Using $F = 2P/c$ for absorbing surfaces.
	An absorbing surface absorbs photon momentum ($F = P/c$); a reflecting surface reverses momentum, exerting twice the force ($F = 2P/c$).
	10
	Glancing Angle in Bragg's Law
	Using the angle between incident ray and normal to the plane.
	In Bragg's law $2d\sin\theta = n\lambda$, $\theta$ is the glancing angle between the incident ray and the crystal plane itself, NOT the normal!
	

________________