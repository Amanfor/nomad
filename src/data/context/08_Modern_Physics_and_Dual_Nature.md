Physics Revision Context: Chapter 08 — Modern Physics (Photoelectric Effect, Bohr Model & Dual Nature)


Source: scraped/notes/modern-physics.md & JEE Main Revision Materials Extracted into: JEE/context/ Batch: Modern Physics Core & Dual Nature of Radiation/Matter Status: Verified and Formatted with Preserved Visual Diagrams


________________




1. Photoelectric Effect & Photon Theory


1.1 Fundamental Concepts & Quantum Nature of Light


* Light behaves as discrete packets of energy called photons or quanta.
* Photon Energy: $E = h\nu = \frac{hc}{\lambda}$
   * $h \approx 6.626 \times 10^{-34}\text{ J}\cdot\text{s} = 4.136 \times 10^{-15}\text{ eV}\cdot\text{s}$
   * $c = 3.0 \times 10^8\text{ m/s}$
   * Useful calculation shortcut: $hc \approx 1240\text{ eV}\cdot\text{nm} = 12400\text{ eV}\cdot\text{\AA}$
* Photon Momentum: $p = \frac{E}{c} = \frac{h}{\lambda}$
* Rest mass of a photon is zero ($m_0 = 0$). Effective mass of a photon in motion: $m = \frac{h\nu}{c^2} = \frac{h}{c\lambda}$.
* Photons are electrically neutral and cannot be deflected by electric or magnetic fields.


1.2 Work Function ($\phi$ or $W$) & Threshold Quantities


* Work Function ($\phi$): The minimum energy required to eject an electron from a metal surface without giving it kinetic energy.
* Threshold Frequency ($\nu_0$): The minimum frequency of incident radiation below which no photoelectric emission takes place: $$\phi = h\nu_0 = \frac{hc}{\lambda_0}$$
* Threshold Wavelength ($\lambda_0$): The maximum wavelength of incident radiation capable of causing photoelectric emission.


1.3 Einstein’s Photoelectric Equation


* Energy conservation for a single photon-electron collision: $$E_{incident} = \phi + K_{max} \implies h\nu = h\nu_0 + K_{max}$$ $$K_{max} = h\nu - \phi = hc\left(\frac{1}{\lambda} - \frac{1}{\lambda_0}\right)$$
* Maximum kinetic energy depends strictly on the frequency/wavelength of incident light and metal work function; it is completely independent of the intensity of incident light.


1.4 Stopping Potential ($V_0$) & Cutoff Criteria


* Stopping Potential ($V_0$): The minimum negative (retarding) potential applied to the collector anode at which the photoelectric current drops to zero: $$eV_0 = K_{max} = \frac{1}{2}m v_{max}^2$$ $$eV_0 = h\nu - \phi \implies V_0 = \left(\frac{h}{e}\right)\nu - \frac{\phi}{e}$$
* Slope of $V_0$ versus $\nu$ graph is universal: $\text{Slope} = \frac{h}{e}$.


1.5 Experimental Characteristics & Visual Preservation


 Description: Graphical representation of Photoelectric Current vs Collector Plate Potential for varying light intensities ($I_1 < I_2 < I_3$) at fixed frequency, showing identical negative stopping potential ($-V_0$) and increasing saturation current with higher intensity, as well as current vs potential for different frequencies ($\nu_1 < \nu_2 < \nu_3$) with distinct stopping potentials ($-V_{01}, -V_{02}, -V_{03}$).


 Description: Linear plot of Stopping Potential ($V_0$) versus incident frequency ($\nu$) for two different metal targets, demonstrating the threshold frequency ($\nu_0$) intercept on the horizontal axis and a constant slope of $h/e$ according to Einstein's photoelectric equation.


* Key Experimental Invariants:
   1. Intensity Invariance: Saturation current $i_{sat} \propto I$ (intensity), but stopping potential $V_0$ is unchanged.
   2. Frequency Scaling: Higher frequency increases stopping potential $V_0$ linearly, without altering saturation current for equal photon flux.
   3. Instantaneous Process: Photoelectric emission occurs without measurable time lag ($< 10^{-9}\text{ s}$).


________________




2. Bohr’s Atomic Model of Hydrogen-Like Species


2.1 Postulates & Quantization


* Bohr's model applies strictly to single-electron (hydrogenic) species: $\text{H}, \text{He}^+, \text{Li}^{2+}, \text{Be}^{3+}$.
* Postulate 1 (Stationary Orbits): Coulomb force provides centripetal acceleration: $$\frac{kZe^2}{r^2} = \frac{m v^2}{r} \quad \text{where } k = \frac{1}{4\pi\varepsilon_0} = 9 \times 10^9\text{ N}\cdot\text{m}^2/\text{C}^2$$
* Postulate 2 (Quantization of Angular Momentum): $$L = mvr = \frac{nh}{2\pi} \quad (n = 1, 2, 3, \dots)$$
* Postulate 3 (Frequency Condition): $$\Delta E = E_{n_2} - E_{n_1} = h\nu = \frac{hc}{\lambda}$$


2.2 Core Orbit Formulae


* Radius of $n$-th Orbit ($r_n$): $$r_n = \frac{n^2 h^2}{4\pi^2 m k Z e^2} = 0.529 \frac{n^2}{Z}\text{ \AA} \quad (r_n \propto \frac{n^2}{Z})$$
* Velocity of Electron ($v_n$): $$v_n = \frac{2\pi k Z e^2}{nh} = 2.18 \times 10^6 \frac{Z}{n}\text{ m/s} \approx \frac{c}{137}\frac{Z}{n} \quad (v_n \propto \frac{Z}{n})$$
* Time Period ($T_n$) & Frequency ($f_n$): $$T_n = \frac{2\pi r_n}{v_n} \propto \frac{n^3}{Z^2}, \quad f_n = \frac{1}{T_n} \propto \frac{Z^2}{n^3}$$
* Orbital Magnetic Dipole Moment ($M_n$): $$M_n = I A = \left(\frac{e}{T_n}\right)(\pi r_n^2) = n \mu_B \quad \text{where } \mu_B = \frac{eh}{4\pi m} = 9.27 \times 10^{-24}\text{ A}\cdot\text{m}^2$$


2.3 Energy of Electron in Bohr Orbit


* Kinetic Energy ($K_n$): $K_n = \frac{k Z e^2}{2 r_n} = 13.6 \frac{Z^2}{n^2}\text{ eV}$
* Potential Energy ($U_n$): $U_n = -\frac{k Z e^2}{r_n} = -27.2 \frac{Z^2}{n^2}\text{ eV}$
* Total Energy ($E_n$): $E_n = K_n + U_n = -\frac{k Z e^2}{2 r_n} = -13.6 \frac{Z^2}{n^2}\text{ eV}$
* Universal Energy Relations: $$E_n = -K_n = \frac{U_n}{2}, \quad U_n = 2 E_n$$


2.4 Hydrogen Spectral Transitions & Rydberg Formula


* When an electron jumps from higher orbit $n_2$ to lower orbit $n_1$ ($n_2 > n_1$): $$\frac{1}{\lambda} = \bar{\nu} = R Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$
   * Rydberg constant: $R = \frac{2\pi^2 m k^2 e^4}{c h^3} \approx 1.097 \times 10^7\text{ m}^{-1}$
   * Shortcut: $\frac{1}{R} \approx 912\text{ \AA}$


 Description: Energy level diagram of the Hydrogen atom showing transitions corresponding to the Lyman series (ultraviolet, ending at $n=1$), Balmer series (visible, ending at $n=2$), Paschen series (infrared, ending at $n=3$), and Brackett series (infrared, ending at $n=4$).


* Spectral Series Summary:


Series
	$n_1$ (Lower)
	$n_2$ (Upper)
	Spectral Region
	$\lambda_{min}$ (Series Limit)
	$\lambda_{max}$ (First Line)
	Lyman
	1
	2, 3, 4...
	Ultraviolet (UV)
	$912\text{ \AA}$
	$1216\text{ \AA}$
	Balmer
	2
	3, 4, 5...
	Visible
	$3646\text{ \AA}$
	$6563\text{ \AA}$ ($H_\alpha$)
	Paschen
	3
	4, 5, 6...
	Near Infrared (IR)
	$8204\text{ \AA}$
	$18751\text{ \AA}$
	Brackett
	4
	5, 6, 7...
	Infrared (IR)
	$14585\text{ \AA}$
	$40518\text{ \AA}$
	Pfund
	5
	6, 7, 8...
	Far Infrared (IR)
	$22788\text{ \AA}$
	$74578\text{ \AA}$
	

* Maximum Spectral Lines from $n$-th excited level to ground state ($n \to 1$): $$N = \frac{n(n-1)}{2} = \binom{n}{2}$$


* Transitions between arbitrary states $n_2 \to n_1$: $$N = \frac{(n_2 - n_1)(n_2 - n_1 + 1)}{2}$$


________________




3. Dual Nature of Matter (de Broglie Waves)


3.1 de Broglie Hypothesis


* Every moving material particle is accompanied by a matter wave of wavelength: $$\lambda = \frac{h}{p} = \frac{h}{mv} = \frac{h}{\sqrt{2mK}}$$ where $p = mv$ is momentum and $K$ is kinetic energy.


3.2 Accelerated Charged Particles


* For a particle of charge $q$ accelerated from rest through potential difference $V$: $$K = qV \implies \lambda = \frac{h}{\sqrt{2mqV}}$$
* Important Numerical Formulas:
   * Electron ($m_e = 9.1 \times 10^{-31}\text{ kg}, q = e$): $$\lambda_e = \frac{12.27}{\sqrt{V}}\text{ \AA} = \sqrt{\frac{150}{V}}\text{ \AA}$$
   * Proton ($m_p = 1.67 \times 10^{-27}\text{ kg}, q = e$): $$\lambda_p = \frac{0.286}{\sqrt{V}}\text{ \AA}$$
   * Deuteron ($m_d = 2m_p, q = e$): $$\lambda_d = \frac{0.202}{\sqrt{V}}\text{ \AA}$$
   * Alpha Particle ($m_\alpha = 4m_p, q = 2e$): $$\lambda_\alpha = \frac{0.101}{\sqrt{V}}\text{ \AA}$$


 Description: Hyperbolic inverse square-root plot of de Broglie wavelength ($\lambda$) as a function of accelerating potential ($V$) for an electron, illustrating the relationship $\lambda \propto 1/\sqrt{V}$ with $\lambda = \frac{12.27}{\sqrt{V}}\text{ \AA}$.


3.3 Thermal Neutrons & Gas Molecules


* For a gas molecule at absolute temperature $T$, mean translational kinetic energy is $K = \frac{3}{2}k_B T$: $$\lambda = \frac{h}{\sqrt{3mk_B T}}$$ where $k_B = 1.38 \times 10^{-23}\text{ J/K}$ is Boltzmann's constant.


________________




4. High-Yield JEE Main Problem Archetypes & Formulas


* Archetype 1: Frequency Doubling & Stopping Potential


   * Let frequency $\nu_1 \to V_1$ and $\nu_2 = 2\nu_1 \to V_2$: $$eV_1 = h\nu_1 - \phi, \quad eV_2 = 2h\nu_1 - \phi = 2(eV_1 + \phi) - \phi = 2eV_1 + \phi$$ $$V_2 = 2V_1 + \frac{\phi}{e} > 2V_1$$
   * Rule: When frequency is doubled, stopping potential becomes more than double.


* Archetype 2: Recoil Momentum & Velocity of Hydrogen Atom


   * When an atom of mass $M$ emits a photon of frequency $\nu$: $$p_{atom} = p_{photon} = \frac{h\nu}{c} = \frac{E}{c}$$ $$v_{recoil} = \frac{h\nu}{Mc} = \frac{h R Z^2}{M}\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$


* Archetype 3: Ratio of de Broglie Wavelengths under Identical Accelerating Voltage


   * $\frac{\lambda_p}{\lambda_\alpha} = \sqrt{\frac{m_\alpha q_\alpha}{m_p q_p}} = \sqrt{\frac{4 \times 2}{1 \times 1}} = \sqrt{8} = 2\sqrt{2}$
   * $\frac{\lambda_e}{\lambda_p} = \sqrt{\frac{m_p}{m_e}} \approx \sqrt{1836} \approx 42.8$