Physics Revision Context: Chapter 89 — Magnetic Effects of Current & Magnetism
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/EMF/, EMF Theory.pdf, EMF Exercises.pdf, EMF Exercise Solutions.pdf, EMF HLP.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Magnetic Effects of Current & Magnetism (Biot-Savart Law $d\vec{B} = \frac{\mu_0}{4\pi}\frac{i(d\vec{\ell}\times\hat{r})}{r^2}$, Moving Charge Field, Finite & Infinite Straight Wires, Circular Loop Axial Field $B = \frac{\mu_0 N i R^2}{2(R^2+x^2)^{3/2}}$ and Center Field $B = \frac{\mu_0 N i}{2R}$, Circular Arc, Helmholtz Coils; Ampere's Circuital Law $\oint \vec{B}\cdot d\vec{\ell} = \mu_0 I_{\text{enclosed}}$, Thick Wire Radial Profile $B(r)$, Ideal & Real Solenoids, Toroid; Lorentz Force $\vec{F} = q(\vec{E} + \vec{v}\times\vec{B})$, Zero Work by Magnetic Force $W = 0$, Motion of Charged Particles: Circular $r = \frac{mv}{qB}, T = \frac{2\pi m}{qB}$ vs Helical Motion with Pitch $p = (v\cos\theta)\frac{2\pi m}{qB}$, Velocity Selector; Magnetic Force on Conductors $\vec{F} = i(\vec{L}\times\vec{B})$, Arbitrary Wire $\vec{F} = i(\vec{L}_{\text{displacement}}\times\vec{B})$, Parallel Wire Interaction $\frac{dF}{dL} = \frac{\mu_0 i_1 i_2}{2\pi d}$, Torque on Current Loop $\vec{\tau} = \vec{M}\times\vec{B}$, Magnetic Dipole Moment $\vec{M} = N i \vec{A}$; Terrestrial Magnetism (Declination $\theta$, Dip $\delta$, Apparent Dip, Tangent Galvanometer); Magnetic Materials (Dia-, Para-, Ferromagnetic, Curie's Law, Curie-Weiss Law, Hysteresis Loop: Retentivity, Coercivity, Soft Iron vs Steel); High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Biot-Savart Law, Ampere's Law & Current Geometries
![Magnetic Effects Biot Savart And Amperes Law](/media/magnetic_effects_biot_savart_and_amperes_law.webp) Description: Two-panel reference diagram for magnetic field generation: (Panel A) Summary of Biot-Savart law formulations across canonical geometries including finite/infinite straight wires, circular loops, circular arcs, Helmholtz coils, solenoids, and toroids; (Panel B) Ampere's circuital law and the radial field profile B(r) inside and outside thick cylindrical conductors, alongside the parallel-conductor force per unit length defining the SI Ampere.
1.1 The Biot-Savart Law & Moving Charges
1. Biot-Savart Differential Formulation
The magnetic induction $d\vec{B}$ produced at a position vector $\vec{r}$ relative to a current element $i d\vec{\ell}$ is given by: $$\mathbf{d\vec{B} = \frac{\mu_0}{4\pi} \frac{i(d\vec{\ell} \times \hat{r})}{r^2} = \frac{\mu_0}{4\pi} \frac{i(d\vec{\ell} \times \vec{r})}{r^3}}$$


* Permeability of Free Space: $\mu_0 = 4\pi \times 10^{-7}\ \text{T}\cdot\text{m}/\text{A} = \text{H}/\text{m} = \text{N}/\text{A}^2$.
* Speed of Light Invariant: $\mathbf{c = \frac{1}{\sqrt{\mu_0 \epsilon_0}} \approx 3 \times 10^8\ \text{m/s}}$.
* Direction Rule: Right-Hand Thumb Rule ($d\vec{B} \perp d\vec{\ell}$ and $d\vec{B} \perp \vec{r}$).
2. Magnetic Field of a Moving Point Charge
For a point charge $q$ moving with non-relativistic velocity $\vec{v}$ ($v \ll c$): $$\mathbf{\vec{B} = \frac{\mu_0}{4\pi} \frac{q(\vec{v} \times \hat{r})}{r^2} = \frac{\mu_0}{4\pi} \frac{q(\vec{v} \times \vec{r})}{r^3}}$$


* Ratio of Magnetic to Electric Force between Two Moving Charges: $$\frac{F_m}{F_e} = \mu_0 \epsilon_0 v^2 = \frac{v^2}{c^2} \ll 1 \quad (\text{Electrostatic force completely dominates at non-relativistic speeds})$$


________________


1.2 Canonical Current-Carrying Geometries
1. Straight Wire of Finite Length
For a wire segment carrying current $i$, at a perpendicular distance $d$ subtending angles $\theta_1$ and $\theta_2$ at the wire's ends: $$\mathbf{B = \frac{\mu_0 i}{4\pi d} (\sin\theta_1 + \sin\theta_2)}$$


* Infinitely Long Wire ($\theta_1 = \theta_2 = 90^\circ$): $$\mathbf{B = \frac{\mu_0 i}{2\pi d}}$$
* Semi-Infinite Wire ($\theta_1 = 90^\circ, \theta_2 = 0^\circ$): $$\mathbf{B = \frac{\mu_0 i}{4\pi d}}$$
* Point on the Axial Line of Wire ($\theta_1 = \theta_2 = 0^\circ$): $\mathbf{B = 0}$ (since $d\vec{\ell} \times \hat{r} = \vec{0}$).
2. Circular Current Loop (Radius $R$, $N$ Turns, Current $i$)
* Axial Field at Distance $x$ from Center: $$\mathbf{B_{\text{axial}} = \frac{\mu_0 N i R^2}{2(R^2 + x^2)^{3/2}}}$$
* At Center of Loop ($x = 0$): $$\mathbf{B_{\text{center}} = \frac{\mu_0 N i}{2 R}}$$
* Far-Field Dipole Approximation ($x \gg R$): $$B_{\text{axial}} \approx \frac{\mu_0 N i R^2}{2 x^3} = \frac{\mu_0 (N i \pi R^2)}{2\pi x^3} = \mathbf{\frac{\mu_0}{4\pi} \frac{2 M}{x^3}}$$ Where $\mathbf{M = N i A = N i \pi R^2}$ is the magnetic dipole moment of the loop ($\text{A}\cdot\text{m}^2$).
3. Circular Arc Subtending Angle $\theta$ at Center
$$\mathbf{B_{\text{arc}} = \frac{\mu_0 i \theta}{4\pi R} = \left(\frac{\theta}{2\pi}\right) \frac{\mu_0 i}{2 R}}$$


* Semicircle ($\theta = \pi$): $B = \frac{\mu_0 i}{4 R}$.
* Quarter Circle ($\theta = \pi/2$): $B = \frac{\mu_0 i}{8 R}$.
4. Helmholtz Coils (Uniform Field Configuration)
Consists of two identical coaxial coils of radius $R$ and $N$ turns, separated by a distance equal to their radius ($d = R$), carrying currents in the same direction:


* At the midpoint $x = R/2$, the first and second derivatives of the magnetic field with respect to axial displacement vanish ($\frac{dB}{dx} = 0, \frac{d^2B}{dx^2} = 0$).
* Uniform Midpoint Field: $$\mathbf{B_{\text{mid}} = 2 \times \frac{\mu_0 N i R^2}{2[R^2 + (R/2)^2]^{3/2}} = \frac{8 \mu_0 N i}{5\sqrt{5} R} \approx 0.716 \frac{\mu_0 N i}{R}}$$


________________


1.3 Ampere's Circuital Law & Solenoidal Systems
1. Ampere's Circuital Law (ACL)
The line integral of magnetic induction $\vec{B}$ around any closed imaginary Amperian loop equals $\mu_0$ times the algebraic net current enclosed: $$\mathbf{\oint \vec{B} \cdot d\vec{\ell} = \mu_0 I_{\text{enclosed}}}$$
2. Thick Solid Cylindrical Conductor (Radius $R$, Total Current $I$, Uniform $J = \frac{I}{\pi R^2}$)
* Inside the Conductor ($r \le R$): $$I_{\text{enc}} = J(\pi r^2) = I \frac{r^2}{R^2} \implies B(2\pi r) = \mu_0 I \frac{r^2}{R^2}$$ $$\mathbf{B_{\text{in}} = \frac{\mu_0 I r}{2\pi R^2} = \frac{\mu_0 J r}{2} \quad (\text{Linear increase from zero at axis})}$$
* Outside the Conductor ($r \ge R$): $$I_{\text{enc}} = I \implies B(2\pi r) = \mu_0 I$$ $$\mathbf{B_{\text{out}} = \frac{\mu_0 I}{2\pi r} \quad (\text{Inverse hyperbolic decay})}$$
* At Surface ($r = R$): $B_{\max} = \frac{\mu_0 I}{2\pi R}$.
3. Ideal vs. Real Solenoids ($n = N/L$ turns per unit length)
* Ideal Infinitely Long Solenoid: $$\mathbf{B_{\text{inside}} = \mu_0 n i}, \qquad \mathbf{B_{\text{outside}} = 0}$$
* At the End of a Semi-Infinite Solenoid: $$\mathbf{B_{\text{end}} = \frac{1}{2}\mu_0 n i}$$
* Finite Solenoid (Axis angles $\theta_1, \theta_2$ made with the ends): $$\mathbf{B = \frac{\mu_0 n i}{2} (\cos\theta_1 - \cos\theta_2)}$$
4. Toroid (Endless Closed Solenoid, Mean Radius $R$, Total Turns $N$)
* Inside the core: $\mathbf{B = \mu_0 n i = \frac{\mu_0 N i}{2\pi R}}$.
* Outside the toroid and in the central open space: $\mathbf{B = 0}$.


________________


2. Lorentz Force, Terrestrial Magnetism & Materials
![Lorentz Force Helical Trajectories And Magnetism](/media/lorentz_force_helical_trajectories_and_magnetism.webp) Description: Two-panel reference diagram for charged particle kinematics and magnetism: (Panel A) Lorentz force dynamics demonstrating the zero-work principle (W = 0, P = 0), cyclotron radius, orbital period, and helical trajectory pitch; (Panel B) Terrestrial magnetism elements (declination, inclination/dip, apparent dip in perpendicular planes) and the comparative classification matrix for diamagnetic, paramagnetic, and ferromagnetic materials with hysteresis loops.
2.1 The Lorentz Force & Charged Particle Trajectories
The total electromagnetic force on a particle of charge $q$ moving with velocity $\vec{v}$ in electric and magnetic fields is: $$\mathbf{\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})}$$
1. Pure Magnetic Force Dynamics & The Zero-Work Principle
$$\mathbf{\vec{F}_m = q(\vec{v} \times \vec{B})} \implies |\vec{F}_m| = |q| v B \sin\theta$$


* Zero Work Invariant: $$\mathbf{P = \vec{F}_m \cdot \vec{v} = q(\vec{v} \times \vec{B}) \cdot \vec{v} \equiv 0}$$ $$\mathbf{W = \int \vec{F}_m \cdot d\vec{r} = \int (\vec{F}_m \cdot \vec{v}) dt = 0}$$
* Kinetic Energy Invariance: The magnetic force does identically zero work on a charged particle at all instants. The particle's speed ($v$) and kinetic energy ($K$) remain strictly constant. The magnetic field acts purely as a directional deflecting force.
2. Trajectory Classification in a Uniform Magnetic Field $\vec{B}$
* Case I: $\vec{v} \parallel \vec{B}$ or $\vec{v} \parallel -\vec{B}$ ($\theta = 0^\circ$ or $180^\circ$): $\vec{F}_m = \vec{0}$. Particle moves in an unaccelerated straight line with constant velocity.
* Case II: $\vec{v} \perp \vec{B}$ ($\theta = 90^\circ$): Uniform Circular Motion: The magnetic force provides the required centripetal acceleration: $$\frac{m v^2}{r} = q v B \implies \mathbf{r = \frac{m v}{q B} = \frac{p}{q B} = \frac{\sqrt{2 m K}}{q B} = \frac{\sqrt{2 m q V_{\text{acc}}}}{q B}}$$ $$\text{Orbital Period: } \mathbf{T = \frac{2\pi r}{v} = \frac{2\pi m}{q B}}$$ $$\text{Cyclotron Frequency: } \mathbf{f_c = \frac{1}{T} = \frac{q B}{2\pi m}}, \qquad \omega_c = \frac{q B}{m}$$
   * Critical Invariant: The period $T$ and cyclotron frequency $f_c$ are strictly independent of velocity $v$, kinetic energy $K$, and orbit radius $r$! Faster particles traverse larger circles in the exact same time.
* Case III: $\vec{v}$ at an Arbitrary Angle $\theta$ to $\vec{B}$: Helical Motion: Decompose velocity into components:
   * $v_\parallel = v \cos\theta$ (parallel to $\vec{B}$, experiences no magnetic force $\implies$ constant linear drift).
   * $v_\perp = v \sin\theta$ (perpendicular to $\vec{B}$, drives circular motion).
   * Helical Radius: $$\mathbf{r = \frac{m v_\perp}{q B} = \frac{m v \sin\theta}{q B}}$$
   * Pitch of the Helix ($p$): The linear axial distance traversed along $\vec{B}$ in one full revolution: $$\mathbf{p = v_\parallel T = (v \cos\theta) \left(\frac{2\pi m}{q B}\right) = \frac{2\pi m v \cos\theta}{q B}}$$
3. Crossed Fields & Velocity Selector ($\vec{E} \perp \vec{B} \perp \vec{v}$)
When electric and magnetic fields are mutually perpendicular, the net Lorentz force is zero if the electrostatic and magnetic forces balance: $$q E = q v B \implies \mathbf{v = \frac{E}{B}}$$ Particles with this exact speed pass through undeflected regardless of their mass or charge.


________________


2.2 Magnetic Force on Current-Carrying Conductors
A current-carrying wire of length $\vec{L}$ in an external field $\vec{B}$ experiences a macroscopic magnetic force: $$\mathbf{\vec{F} = i(\vec{L} \times \vec{B})}$$


* Arbitrarily Shaped Conductor in Uniform Field: $$\vec{F} = \int i(d\vec{\ell} \times \vec{B}) = i \left(\int d\vec{\ell}\right) \times \vec{B} = \mathbf{i (\vec{L}_{\text{displacement}} \times \vec{B})}$$ The magnetic force depends only on the vector displacement connecting the two endpoints!
* Closed Loop Invariant: For any closed planar or non-planar loop in a uniform magnetic field: $$\oint d\vec{\ell} = \vec{0} \implies \mathbf{\vec{F}_{\text{net}} = \vec{0}}$$
1. Interaction Force Between Parallel Currents
$$\mathbf{\frac{dF}{dL} = \frac{\mu_0 i_1 i_2}{2\pi d}}$$


* Like (Parallel) Currents: ATTRACT each other.
* Unlike (Antiparallel) Currents: REPEL each other.
* (Contrast: Electrostatic charges of like sign repel, but like parallel currents attract!)
2. Torque on a Current Loop & Magnetic Dipole Moment
$$\mathbf{\vec{\tau} = \vec{M} \times \vec{B}} \implies |\vec{\tau}| = M B \sin\theta$$ $$\mathbf{U = -\vec{M} \cdot \vec{B} = -M B \cos\theta}$$


* $\theta = 0^\circ \implies \vec{M} \parallel \vec{B}$ (Stable Equilibrium, $U_{\min} = -MB$).
* $\theta = 180^\circ \implies \vec{M} \parallel -\vec{B}$ (Unstable Equilibrium, $U_{\max} = +MB$).
* Period of small angular oscillations: $\mathbf{T = 2\pi\sqrt{\frac{I_{\text{moment}}}{MB}}}$.


________________


2.3 Terrestrial Magnetism & Magnetic Materials
1. Elements of Earth's Magnetism
The Earth behaves approximately as a magnetic dipole with dipole moment $M_E \approx 8 \times 10^{22}\ \text{J/T}$, tilted at approximately $11.3^\circ$ to the rotational axis:


1. Magnetic Declination ($\theta$): The angle between the geographic meridian and the magnetic meridian.
2. Magnetic Dip / Inclination ($\delta$): The angle between the total geomagnetic field vector $\vec{B}_E$ and the horizontal: $$\mathbf{B_H = B_E \cos\delta}, \qquad \mathbf{B_V = B_E \sin\delta} \implies \mathbf{\tan\delta = \frac{B_V}{B_H}}$$ $$\mathbf{B_E = \sqrt{B_H^2 + B_V^2}}$$
   * At the Magnetic Equator: $\delta = 0^\circ \implies B_V = 0, B_E = B_H$.
   * At the Magnetic Poles: $\delta = 90^\circ \implies B_H = 0, B_E = B_V$.
3. Apparent Dip ($\delta_1, \delta_2$) in Two Mutually Perpendicular Vertical Planes: $$\mathbf{\cot^2\delta = \cot^2\delta_1 + \cot^2\delta_2}$$ In a single vertical plane inclined at angle $\theta$ to the magnetic meridian: $\tan\delta' = \frac{\tan\delta}{\cos\theta}$.
2. Magnetic Materials: Diamagnetism, Paramagnetism & Ferromagnetism
Characteristic
	Diamagnetic Substances
	Paramagnetic Substances
	Ferromagnetic Substances
	Atomic Dipoles
	Zero net dipole moment (paired electrons)
	Permanent dipole moments (unpaired electrons)
	Permanent dipoles aligned in domains
	Magnetic Susceptibility ($\chi$)
	Small and NEGATIVE ($\chi \sim -10^{-5}$)
	Small and POSITIVE ($\chi \sim +10^{-3}$)
	Enormous and POSITIVE ($\chi \sim 10^2 - 10^5$)
	Relative Permeability ($\mu_r$)
	Slightly less than $1$ ($0 < \mu_r < 1$)
	Slightly greater than $1$ ($\mu_r > 1$)
	Very large ($\mu_r \gg 1$)
	Field Response
	Expelled; moves from stronger to weaker field
	Weakly attracted; moves to stronger field
	Strongly attracted; sucked into field
	Temperature Dependence
	Independent of temperature
	Obeys Curie's Law: $\mathbf{\chi = \frac{C}{T}}$
	Obeys Curie-Weiss Law: $\mathbf{\chi = \frac{C}{T - T_c}}$ ($T > T_c$)
	Hysteresis Loop
	No hysteresis
	No hysteresis
	Exhibits $B-H$ hysteresis loop
	Examples
	$\text{Bi, Cu, Ag, Pb, H}_2\text{O, NaCl, } \text{N}_2$
	$\text{Al, Na, Ca, Pt, } \text{O}_2\text{ (liquid)}$
	$\text{Fe, Co, Ni, } \text{Gd, Alnico}$
	3. Hysteresis Loop ($B-H$ Curve) & Industrial Core Selection
* Retentivity (Remanence): The residual magnetic induction $B$ remaining when magnetizing field $H$ drops to zero.
* Coercivity: The magnitude of reverse magnetic intensity $H$ required to completely demagnetize the core.
* Electromagnet & Transformer Cores (Soft Iron):
   * Requires High Retentivity, Low Coercivity, and Narrow Hysteresis Loop Area (minimizes energy dissipation per AC cycle).
* Permanent Magnets (Steel / Alnico):
   * Requires High Retentivity, Very High Coercivity, and Broad Hysteresis Loop Area (resists demagnetization from mechanical shocks and stray fields).


________________


3. High-Yield Problem Archetypes & JEE Pitfalls
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Work Done by Magnetic Force
	Calculating positive or negative work done by a magnetic field.
	$\vec{F}_m \perp \vec{v} \implies P = \vec{F}_m\cdot\vec{v} = 0$. The magnetic force does identically ZERO work; kinetic energy is strictly constant.
	2
	Pitch of Helical Motion
	Using full velocity $v$ in pitch calculation ($p = v T$).
	Pitch is axial displacement: $\mathbf{p = v_\parallel T = (v \cos\theta)\frac{2\pi m}{qB}}$. Circular radius uses $\mathbf{v_\perp = v \sin\theta}$.
	3
	Force Between Like Currents
	Assuming like currents repel like like electrostatic charges.
	Like parallel currents ATTRACT; opposite antiparallel currents REPEL.
	4
	Semi-Infinite Solenoid End Field
	Assuming field at the end of a solenoid is $\mu_0 n i$.
	At the end of a semi-infinite solenoid, the field is $\mathbf{\frac{1}{2}\mu_0 n i}$ (half of the interior field).
	5
	Closed Loop Net Magnetic Force
	Calculating non-zero net force on a closed circuit in uniform $\vec{B}$.
	For any closed loop in a uniform field, $\oint d\vec{\ell} = \vec{0} \implies \mathbf{\vec{F}_{\text{net}} = \vec{0}}$. (A net torque $\vec{\tau} = \vec{M}\times\vec{B}$ may still act).
	6
	Magnetic Dipole Equatorial Direction
	Assuming equatorial field is parallel to $\vec{M}$.
	On the equatorial line, the magnetic field is strictly ANTIPARALLEL to $\vec{M}$: $\vec{B}_{\text{eq}} = -\frac{\mu_0}{4\pi}\frac{\vec{M}}{r^3}$.
	7
	Apparent Dip in Inclined Plane
	Taking true dip equal to apparent dip.
	In a plane at angle $\theta$ to the magnetic meridian: $\tan\delta' = \frac{\tan\delta}{\cos\theta} \implies \delta' > \delta$ (apparent dip is always greater than true dip).
	8
	Diamagnetism Temperature Dependence
	Applying Curie's Law ($\chi \propto 1/T$) to diamagnetic materials.
	Diamagnetism arises from induced orbital electronic currents and is strictly INDEPENDENT of temperature.
	9
	Thick Wire Internal Field Profile
	Assuming field inside a thick wire follows inverse square law.
	Inside a uniform wire, $I_{\text{enc}} \propto r^2 \implies \mathbf{B \propto r}$ (linear increase from zero at the center to maximum at the surface).
	10
	Gyromagnetic Ratio Generality
	Assuming $M/L = q/(2m)$ holds for spin dipoles.
	$M/L = \frac{q}{2m}$ is valid strictly for orbital motion of uniform charge/mass distributions. For electron spin, the Dirac g-factor doubles the ratio ($g_s \approx 2$).
	

________________