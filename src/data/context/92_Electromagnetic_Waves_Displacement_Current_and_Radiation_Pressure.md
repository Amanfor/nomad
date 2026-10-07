Physics Revision Context: Chapter 92 — Electromagnetic Waves, Displacement Current & Radiation Pressure
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/EM Waves/, EM Waves Theory.pdf, EM Waves Exercises.pdf, EM Waves Exercise solutions.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Electromagnetic Waves, Displacement Current & Radiation Pressure (Inconsistency of Ampere's Law, Maxwell's Displacement Current $I_d = \epsilon_0 \frac{d\Phi_E}{dt} = \epsilon_0 A \frac{dE}{dt}$, General Current Continuity $I_{\text{total}} = I_c + I_d$, Ampere-Maxwell Law $\oint \vec{B}\cdot d\vec{\ell} = \mu_0(I_c + I_d)$; Four Fundamental Maxwell's Equations in Integral & Differential form; Wave Equation in Free Space, Speed of Light $c = \frac{1}{\sqrt{\mu_0\epsilon_0}} \approx 3 \times 10^8\ \text{m/s}$, Speed in Medium $v = \frac{c}{\sqrt{\mu_r \epsilon_r}} = \frac{c}{n}$; Transverse Orthogonal Triad $\vec{E} \perp \vec{B} \perp \hat{k}$, Propagation Direction $\hat{k} = \frac{\vec{E}\times\vec{B}}{|\vec{E}\times\vec{B}|}$, In-phase oscillations, Amplitude ratio $E_0 / B_0 = c$; Energy Density Partition $u_E = u_B = \frac{1}{4}\epsilon_0 E_0^2$, Total Energy Density $\langle u \rangle = \frac{1}{2}\epsilon_0 E_0^2 = \epsilon_0 E_{\text{rms}}^2$, Poynting Vector $\vec{S} = \frac{1}{\mu_0}(\vec{E}\times\vec{B})$, Intensity $I = c\langle u \rangle = \frac{1}{2}\epsilon_0 c E_0^2$; Radiation Pressure & Momentum $p = U/c$, Absorbing Surface $P_{\text{rad}} = I/c = \langle u \rangle$, Reflecting Surface $P_{\text{rad}} = 2I/c = 2\langle u \rangle$, Oblique incidence $\cos^2\theta$ scaling; Complete Electromagnetic Spectrum Taxonomy: Radio waves, Microwaves, Infrared, Visible (VIBGYOR), Ultraviolet, X-rays, Gamma rays: Wavelength/frequency ranges, Production mechanisms, Detection methods, and Technological/medical applications; High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Maxwell's Equations, Displacement Current & Transverse Waves
![Electromagnetic Waves Maxwell Equations And Wave Structure](/media/electromagnetic_waves_maxwell_equations_and_wave_structure.webp) Description: Two-panel reference diagram for electromagnetic waves: (Panel A) Summary of the four Maxwell equations and the displacement current continuity mechanism across capacitor plates; (Panel B) Transverse wave orthogonal field architecture, Poynting vector energy transport, and radiation pressure formulas for absorbing versus reflecting surfaces.
1.1 Inconsistency of Ampere's Law & Displacement Current
Ampere's Circuital Law in its original form, $\oint \vec{B} \cdot d\vec{\ell} = \mu_0 I_c$, led to a fundamental logical contradiction when applied to time-varying electric circuits, such as a charging parallel plate capacitor:


1. Consider a circular loop surrounding the connecting wire. If we span a planar surface across the loop, conduction current $I_c = dq/dt$ pierces the surface $\implies \oint \vec{B}\cdot d\vec{\ell} = \mu_0 I_c \ne 0$.
2. If we span a pot-shaped open surface whose rim is the same loop but whose bulging body passes through the gap between the capacitor plates, no conduction charge crosses this surface $\implies \oint \vec{B}\cdot d\vec{\ell} = 0$.
3. Since the boundary perimeter is identical, the line integral must yield a single unique physical value. Ampere's law was logically incomplete!
1. Maxwell's Displacement Current ($I_d$)
Maxwell resolved this contradiction by recognizing that a changing electric field in time produces a magnetic field, exactly as a changing magnetic field produces an electric field (Faraday's law).


* Between the capacitor plates of area $A$ and instantaneous charge $Q(t)$: $$E(t) = \frac{\sigma(t)}{\epsilon_0} = \frac{Q(t)}{\epsilon_0 A}$$ $$\Phi_E(t) = E(t) A = \frac{Q(t)}{\epsilon_0}$$
* Differentiating electric flux with respect to time: $$\frac{d\Phi_E}{dt} = \frac{1}{\epsilon_0} \frac{dQ}{dt} = \frac{I_c}{\epsilon_0} \implies I_c = \epsilon_0 \frac{d\Phi_E}{dt}$$
* Maxwell defined the Displacement Current as: $$\mathbf{I_d = \epsilon_0 \frac{d\Phi_E}{dt} = \epsilon_0 A \frac{dE}{dt}}$$
* Current Continuity Invariant:
   * In the external connecting leads: $I_c = I$, $I_d = 0$.
   * In the dielectric gap between plates: $I_c = 0$, $I_d = I$.
   * The total generalized current $\mathbf{I_{\text{total}} = I_c + I_d}$ is strictly continuous across every cross-section of the entire circuit!
2. The Ampere-Maxwell Law
$$\mathbf{\oint \vec{B} \cdot d\vec{\ell} = \mu_0 (I_c + I_d) = \mu_0 I_c + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}}$$


* Magnetic Field Inside the Capacitor Gap (Radius $R$, Distance $r$ from Axis): Applying the Ampere-Maxwell law to a concentric loop of radius $r \le R$: $$\oint \vec{B} \cdot d\vec{\ell} = B(r) \cdot (2\pi r) = \mu_0 I_{d,\text{enc}} = \mu_0 I_d \left(\frac{\pi r^2}{\pi R^2}\right)$$ $$\mathbf{B_{\text{in}}(r) = \frac{\mu_0 I_d r}{2\pi R^2} = \frac{\mu_0 I_c r}{2\pi R^2} \quad (r \le R)}$$ $$\mathbf{B_{\text{out}}(r) = \frac{\mu_0 I_c}{2\pi r} \quad (r \ge R)}$$


________________


1.2 The Four Fundamental Maxwell Equations
Maxwell synthesized all classical electromagnetism into four master equations:


Number
	Name
	Integral Formulation
	Differential (Point) Form
	Physical Law / Significance
	I
	Gauss's Law for Electrostatics
	$\oint \vec{E} \cdot d\vec{A} = \frac{q_{\text{enc}}}{\epsilon_0}$
	$\vec{\nabla} \cdot \vec{E} = \frac{\rho}{\epsilon_0}$
	Electric charges are sources/sinks of $\vec{E}$; Coulomb's inverse square law.
	II
	Gauss's Law for Magnetism
	$\oint \vec{B} \cdot d\vec{A} = 0$
	$\vec{\nabla} \cdot \vec{B} = 0$
	Isolated magnetic monopoles do not exist; magnetic lines form closed loops.
	III
	Faraday-Maxwell Induction Law
	$\oint \vec{E} \cdot d\vec{\ell} = -\frac{d\Phi_B}{dt}$
	$\vec{\nabla} \times \vec{E} = -\frac{\partial\vec{B}}{\partial t}$
	Time-varying magnetic flux generates a non-conservative electric field.
	IV
	Ampere-Maxwell Circuital Law
	$\oint \vec{B} \cdot d\vec{\ell} = \mu_0 I_c + \mu_0\epsilon_0\frac{d\Phi_E}{dt}$
	$\vec{\nabla} \times \vec{B} = \mu_0\vec{J} + \mu_0\epsilon_0\frac{\partial\vec{E}}{\partial t}$
	Conduction currents and time-varying electric fields generate magnetic fields.
	

________________


1.3 Kinematics of Plane Electromagnetic Waves
In free space (charge-free $\rho = 0$, current-free $\vec{J} = \vec{0}$), taking the curl of Maxwell's curl equations yields the Electromagnetic Wave Equations: $$\nabla^2 \vec{E} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{E}}{\partial t^2}, \qquad \nabla^2 \vec{B} = \mu_0 \epsilon_0 \frac{\partial^2 \vec{B}}{\partial t^2}$$ Comparing with the general wave equation $\nabla^2 \psi = \frac{1}{v^2}\frac{\partial^2\psi}{\partial t^2}$:
1. Speed of Electromagnetic Waves
* In Vacuum / Free Space: $$\mathbf{c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = \frac{1}{\sqrt{(4\pi \times 10^{-7})(8.854 \times 10^{-12})}} \approx 2.99792 \times 10^8\ \text{m/s}}$$
* In a Material Dielectric Medium: $$\mathbf{v = \frac{1}{\sqrt{\mu \epsilon}} = \frac{1}{\sqrt{\mu_0 \mu_r \epsilon_0 \epsilon_r}} = \frac{c}{\sqrt{\mu_r \epsilon_r}} = \frac{c}{n}}$$ Where the refractive index is: $\mathbf{n = \sqrt{\mu_r \epsilon_r} \approx \sqrt{\epsilon_r} = \sqrt{K}}$ (for non-magnetic media $\mu_r \approx 1$).
2. Transverse Vector Architecture & In-Phase Oscillations
Consider a plane electromagnetic wave propagating along the $+x$ axis: $$\mathbf{\vec{E}(x, t) = E_0 \sin(kx - \omega t) \hat{j}}, \qquad \mathbf{\vec{B}(x, t) = B_0 \sin(kx - \omega t) \hat{k}}$$


1. Mutually Orthogonal Triad: The electric field, magnetic field, and wave propagation vector are mutually perpendicular: $$\vec{E} \perp \vec{B} \perp \hat{k}$$ The direction of propagation is given by the cross product unit vector: $$\mathbf{\hat{k} = \frac{\vec{E} \times \vec{B}}{|\vec{E} \times \vec{B}|}}$$
2. In-Phase Condition: The electric and magnetic fields reach their positive maxima, zeros, and negative minima at the exact same points in space and at the exact same instants in time (zero phase lag between $\vec{E}$ and $\vec{B}$).
3. Amplitude Ratio Invariant: $$\mathbf{\frac{E_0}{B_0} = \frac{E(x, t)}{B(x, t)} = c = \frac{\omega}{k}}$$


________________


1.4 Energy Density, Poynting Vector & Radiation Pressure
1. Equipartition of Electromagnetic Energy
The energy of an electromagnetic wave is stored in both its electric and magnetic fields: $$u_E = \frac{1}{2}\epsilon_0 E^2, \qquad u_B = \frac{B^2}{2\mu_0}$$ Substituting $E = c B$ and $c^2 = \frac{1}{\mu_0\epsilon_0}$: $$u_B = \frac{(E/c)^2}{2\mu_0} = \frac{E^2}{2\mu_0 (1/\mu_0\epsilon_0)} = \frac{1}{2}\epsilon_0 E^2 = u_E$$


* Fundamental Law: The energy in an electromagnetic wave is shared strictly equally between the electric and magnetic fields at every instant ($u_E = u_B$).
* Time-Averaged Energy Densities: $$\langle u_E \rangle = \frac{1}{4}\epsilon_0 E_0^2, \qquad \langle u_B \rangle = \frac{B_0^2}{4\mu_0} = \frac{1}{4}\epsilon_0 E_0^2$$ $$\mathbf{\langle u \rangle = \langle u_E \rangle + \langle u_B \rangle = \frac{1}{2}\epsilon_0 E_0^2 = \frac{B_0^2}{2\mu_0} = \epsilon_0 E_{\text{rms}}^2}$$
2. The Poynting Vector & Wave Intensity
The Poynting Vector $\vec{S}$ represents the instantaneous directional rate of energy transfer per unit cross-sectional area ($\text{W/m}^2$): $$\mathbf{\vec{S} = \frac{1}{\mu_0} (\vec{E} \times \vec{B})}$$


* Wave Intensity ($I$): The time-averaged magnitude of the Poynting vector: $$\mathbf{I = |\langle \vec{S} \rangle| = c \langle u \rangle = \frac{1}{2}\epsilon_0 c E_0^2 = \frac{c B_0^2}{2\mu_0} = \frac{E_0 B_0}{2\mu_0} = \epsilon_0 c E_{\text{rms}}^2}$$
3. Radiation Pressure & Momentum
Electromagnetic waves carry linear momentum. A wave delivering energy $U$ transports momentum: $$\mathbf{p = \frac{U}{c}}$$ When a beam of intensity $I$ strikes a surface at normal incidence:


1. Perfectly Absorbing Surface (Reflection Coefficient $R = 0$): The entire momentum is delivered to the surface ($\Delta p = U/c$): $$\mathbf{P_{\text{rad}} = \frac{I}{c} = \langle u \rangle}$$
2. Perfectly Reflecting Surface (Reflection Coefficient $R = 1$): The momentum reverses upon reflection ($\Delta p = 2U/c$): $$\mathbf{P_{\text{rad}} = \frac{2I}{c} = 2 \langle u \rangle}$$
3. General Surface with Reflection Coefficient $R$: $$\mathbf{P_{\text{rad}} = \frac{I}{c}(1 + R)}$$
4. Oblique Incidence at Angle $\theta$ to the Normal:
   * Perfectly Absorbing: $\mathbf{P_{\text{rad}} = \frac{I}{c} \cos^2\theta}$.
   * Perfectly Reflecting: $\mathbf{P_{\text{rad}} = \frac{2I}{c} \cos^2\theta}$.


________________


2. The Electromagnetic Spectrum: Taxonomy & Applications
![Electromagnetic Spectrum Master Taxonomy And Applications](/media/electromagnetic_spectrum_master_taxonomy_and_applications.webp) Description: Two-panel reference diagram for the electromagnetic spectrum: (Panel A) Complete spectral band hierarchy arranged by wavelength, frequency, and photon energy from gamma rays to radio waves; (Panel B) Master engineering and medical applications matrix detailing production methods, detection instruments, and diagnostic uses.
2.1 Complete Spectral Taxonomy Master Table
The electromagnetic spectrum spans over 20 orders of magnitude of frequencies, categorized by wavelength ($\lambda$), frequency ($\nu$), and photon energy ($E = h\nu$):


Band Name
	Wavelength Range ($\lambda$)
	Frequency Range ($\nu$)
	Typical Source Mechanism
	Detection Method
	High-Yield Technological & Medical Applications
	1. Gamma ($\gamma$) Rays
	$< 10^{-12}\ \text{m}$ ($< 10^{-3}\ \text{nm}$)
	$> 10^{20}\ \text{Hz}$
	Radioactive decay of unstable atomic nuclei; nuclear fission.
	Geiger-Müller counter, ionization chamber, scintillation detector.
	Cancer radiotherapy (destroying oncological tumors), sterilizing surgical tools and food, nuclear physics diagnostics.
	2. X-Rays
	$10^{-12}\ \text{m}$ to $10^{-8}\ \text{m}$ ($10^{-3}$ to $10\ \text{nm}$)
	$10^{16}$ to $10^{20}\ \text{Hz}$
	Bremsstrahlung deceleration of fast electrons striking heavy metal targets; inner-shell transitions.
	Photographic film, ionization chambers, semiconductor detectors.
	Diagnostic radiography (bone fracture imaging), airport security baggage screening, crystal structure analysis (Bragg diffraction).
	3. Ultraviolet (UV)
	$10^{-8}\ \text{m}$ to $400\ \text{nm}$ ($10$ to $400\ \text{nm}$)
	$8 \times 10^{14}$ to $10^{16}\ \text{Hz}$
	Very hot bodies (Sun), mercury discharge lamps, carbon arcs. Absorbed by ozone ($O_3$).
	Photocells, fluorescent screens, photographic paper.
	Water purifiers (germicidal germ destruction), LASIK corneal eye surgery, forensic detection of forged documents, vitamin D synthesis.
	4. Visible Light
	$400\ \text{nm}$ to $700\ \text{nm}$ ($0.4$ to $0.7\ \mu\text{m}$)
	$4 \times 10^{14}$ to $7.5 \times 10^{14}\ \text{Hz}$
	Incandescent filaments, flames, atomic transitions of valence electrons.
	Human retinal rhodopsin, photocells, photographic film.
	Human vision, optical microscopy, photography, botanical photosynthesis, fiber-optic telecommunications.
	5. Infrared (IR)
	$700\ \text{nm}$ to $1\ \text{mm}$ ($0.7\ \mu\text{m}$ to $1000\ \mu\text{m}$)
	$3 \times 10^{11}$ to $4 \times 10^{14}\ \text{Hz}$
	Thermal agitation of molecules in all warm bodies; greenhouse absorption by $\text{CO}_2, \text{H}_2\text{O}$.
	Thermopiles, bolometers, infrared sensitive photographic film.
	Night-vision military goggles, household remote controls (TVs), physical therapy (heat lamps), thermal imaging cameras.
	6. Microwaves
	$1\ \text{mm}$ to $0.1\ \text{m}$ ($10^{-3}$ to $10^{-1}\ \text{m}$)
	$3 \times 10^9$ to $3 \times 10^{11}\ \text{Hz}$ ($\text{GHz}$ band)
	Special vacuum tubes: Klystrons, Magnetrons, Gunn diodes.
	Point-contact silicon diodes, crystal detectors.
	RADAR navigation systems for aircraft and ships, microwave ovens ($2.45\ \text{GHz}$ resonant heating of water), satellite communications.
	7. Radio Waves
	$> 0.1\ \text{m}$ ($10\ \text{cm}$ to $10^5\ \text{m}$)
	$< 3 \times 10^9\ \text{Hz}$ ($10^4$ to $10^9\ \text{Hz}$)
	Accelerated electrons in oscillating LC tank circuits connected to broadcast antennas.
	Receiving dipole antennas, tuned LC radio receivers.
	AM broadcasting ($530-1710\ \text{kHz}$), FM radio ($88-108\ \text{MHz}$), TV broadcast ($54-890\ \text{MHz}$), Cellular mobile networks ($900-1800\ \text{MHz}$).
	

________________


2.2 Deep Dive into Specialized Spectrum Mechanics
1. Physics of the Microwave Oven
* A domestic microwave oven operates at an industrial standard frequency of $2.45\ \text{GHz}$ ($\lambda \approx 12.2\ \text{cm}$).
* Water molecules ($\text{H}_2\text{O}$) are asymmetric and possess an intrinsic electric dipole moment. The high-frequency oscillating electric field forces water molecules to rotate back and forth $2.45 \times 10^9$ times per second.
* The molecular friction generated by this forced dipole reorientation dissipates directly into thermal kinetic energy, heating the food rapidly from the inside out. Dry materials, glass, and ceramics lack free rotating dipoles and remain unheated.
2. Stratospheric Ozone Absorption
* Solar ultraviolet radiation contains UV-A ($315-400\ \text{nm}$), UV-B ($280-315\ \text{nm}$), and lethal UV-C ($100-280\ \text{nm}$).
* The ozone layer ($O_3$) in the stratosphere absorbs high-energy UV photons through photodissociation: $$O_3 + h\nu \to O_2 + O$$ This shields terrestrial organisms from lethal biological cell destruction and DNA mutation.
3. Atmospheric Windows & Ionospheric Reflection
* Ground Wave Propagation: Radio waves below $2\ \text{MHz}$ glide along the Earth's surface but attenuate rapidly due to ground conductivity losses.
* Sky Wave Propagation: Frequencies between $3\ \text{MHz}$ and $30\ \text{MHz}$ (Shortwave, SW) undergo total internal reflection by free electrons in the ionized layers of the ionosphere ($D, E, F_1, F_2$), enabling intercontinental broadcast without repeaters.
* Space Wave Propagation: Frequencies above the critical frequency ($> 30\ \text{MHz}$, including FM, TV, cellular, and satellite) penetrate straight through the ionosphere into outer space, requiring direct line-of-sight propagation or satellite transponders.


________________


3. High-Yield Problem Archetypes & Structural JEE Traps
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Source of Electromagnetic Waves
	Stating that a charge in uniform steady motion radiates EM waves.
	A charge at rest produces electrostatic $\vec{E}$; steady motion produces static $\vec{B}$. Only an ACCELERATED or OSCILLATING charge radiates electromagnetic waves!
	2
	Energy Division in EM Waves
	Claiming the electric field carries more energy because $E_0 \gg B_0$ ($E_0 = c B_0$).
	Electric and magnetic energy densities are strictly EQUAL: $\langle u_E \rangle \equiv \langle u_B \rangle = \frac{1}{4}\epsilon_0 E_0^2$. The wave's energy is partitioned 50-50.
	3
	Phase Relation between $\vec{E}$ and $\vec{B}$
	Confusing $90^\circ$ spatial angle with a $90^\circ$ phase lag.
	$\vec{E}$ and $\vec{B}$ are spatially perpendicular ($\vec{E} \perp \vec{B}$), but they oscillate strictly IN PHASE ($\Delta\phi = 0$). Both peak and vanish simultaneously.
	4
	Direction of Wave Propagation
	Using $\vec{B} \times \vec{E}$ instead of $\vec{E} \times \vec{B}$.
	Propagation vector is along $\mathbf{\vec{E} \times \vec{B}}$. If $\vec{E}$ is along $+y$ and $\vec{B}$ is along $+z$, propagation is along $\hat{j} \times \hat{k} = +\hat{i}$ ($+x$ direction).
	5
	Radiation Pressure on Mirror vs Absorber
	Using $P = I/c$ for a silvered reflecting mirror.
	Reflecting surface reverses photon momentum ($\Delta p = 2U/c$), exerting TWICE the pressure: $\mathbf{P_{\text{rad}} = \frac{2I}{c}}$. Absorbing surface experiences $\mathbf{P_{\text{rad}} = \frac{I}{c}}$.
	6
	Displacement Current in Steady DC
	Calculating displacement current across a fully charged capacitor.
	Steady DC has $dq/dt = 0 \implies dE/dt = 0 \implies \mathbf{I_d = 0}$. Displacement current exists only while the capacitor is charging or discharging!
	7
	Refractive Index of Medium
	Stating $n = \sqrt{\epsilon_r}$ holds universally for ferromagnets.
	Strictly, $n = \sqrt{\mu_r \epsilon_r}$. While $\mu_r \approx 1$ for ordinary optical dielectrics, materials with magnetic permeability require the full product $\mathbf{\sqrt{\mu_r \epsilon_r}}$.
	8
	Wave Frequency in Medium
	Assuming wave frequency changes when light enters water or glass.
	Frequency ($\nu$) is an intrinsic source property and NEVER changes upon refraction. Velocity ($v = c/n$) and wavelength ($\lambda = \lambda_0/n$) decrease proportionately.
	9
	Radiation Force on Oblique Plate
	Taking $F = P A \cos\theta$ with wrong projection.
	Normal force on reflecting plate is $F = \frac{2 I A \cos^2\theta}{c}$, where the first $\cos\theta$ accounts for projected area and the second for normal momentum transfer.
	10
	Energy in Volume of Laser Beam
	Calculating energy as $P \times t$ without length conversion.
	For a beam of power $P$ and length $L$, the transit time is $\Delta t = L/c$. Total energy stored in length $L$ is $\mathbf{U = P \Delta t = \frac{P L}{c}}$.
	

________________