Physics Revision Context: Chapter 86 — Electrostatics: Electric Charges, Fields, Potential, Dipoles, Gauss's Law & Conductors
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/Electrostatics/, Electrsostatics Theory.pdf, Electrostatics Exercises.pdf, Electrostatics Exercise Solutions.pdf, Electrsostatics HLP.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Flagship Chapter Core — Electrostatics: Properties of Electric Charge (Quantization $q = ne$, Conservation, Invariance with speed, Mass association), Coulomb's Law (Vector formulation $\vec{F}{12} = \frac{kq_1 q_2}{r^2}\hat{r}$, Medium dielectric constant $\epsilon_r$, Principle of Superposition), Electrostatic Equilibrium (Stable, Unstable, Neutral; Earnshaw's theorem); Electric Field Intensity $\vec{E}$: Continuous Distributions (Uniform Ring on axis $E = \frac{kQx}{(R^2+x^2)^{3/2}}$ with maximum at $x = R/\sqrt{2}$, Uniform Disc $E = \frac{\sigma}{2\epsilon_0}[1 - x/\sqrt{R^2+x^2}]$, Infinitely Long Wire $E = \frac{2k\lambda}{r}$, Finite Wire with angle projections, Uniform Infinite Sheet $E = \frac{\sigma}{2\epsilon_0}$, Thin Spherical Shell $E{\text{in}} = 0, E_{\text{out}} = \frac{kQ}{r^2}$, Uniform Solid Dielectric Sphere $E_{\text{in}} = \frac{kQr}{R^3} = \frac{\rho r}{3\epsilon_0}$, $E_{\text{out}} = \frac{kQ}{r^2}$); Electric Potential $V$: Line Integral $V = -\int \vec{E}\cdot d\vec{r}$, Conservative nature, Point Charge $V = \frac{kq}{r}$, Ring on axis $V = \frac{kQ}{\sqrt{R^2+x^2}}$, Disc on axis, Spherical Shell $V_{\text{in}} = V_s = \frac{kQ}{R}$, Solid Dielectric Sphere $V_{\text{in}} = \frac{kQ}{2R^3}(3R^2 - r^2)$ with center potential $V_c = 1.5 V_s$; Equipotential Surfaces (Perpendicularity to $\vec{E}$, No work along surface, Spacing as field gradient); Electrostatic Potential Energy & Self-Energy ($U = \frac{kq_1 q_2}{r}$, Self-energy of spherical shell $U_{\text{shell}} = \frac{kQ^2}{2R}$, Self-energy of solid dielectric sphere $U_{\text{solid}} = \frac{3kQ^2}{5R}$, Electrostatic energy density $u_E = \frac{1}{2}\epsilon_0 E^2$); Electric Dipoles ($\vec{p} = q\vec{d}$, Field at arbitrary point $(r, \theta)$: $E = \frac{kp}{r^3}\sqrt{1+3\cos^2\theta}$, Potential $V = \frac{kp\cos\theta}{r^2}$, Torque $\vec{\tau} = \vec{p}\times\vec{E}$, Potential Energy $U = -\vec{p}\cdot\vec{E}$, Stable vs Unstable equilibrium, Small angle SHM frequency, Non-uniform field force $\vec{F} = (\vec{p}\cdot\vec{\nabla})\vec{E}$, Dipole-dipole interactions); Gauss's Law in Electrostatics ($\Phi_E = \oint \vec{E}\cdot d\vec{A} = \frac{q_{\text{enclosed}}}{\epsilon_0}$, Solid angle flux formulas $\frac{q}{2\epsilon_0}(1-\cos\theta)$, Cube symmetry fluxes for center, face, edge, and corner charges); Electrostatics of Conductors ($\vec{E}{\text{in}} = 0$, Equipotential volume, Surface charge density $\sigma \propto \frac{1}{R{\text{curvature}}}$, Surface electric field $\vec{E} = \frac{\sigma}{\epsilon_0}\hat{n}$, Electrostatic Pressure $P = \frac{\sigma^2}{2\epsilon_0} = \frac{1}{2}\epsilon_0 E^2$, Cavity shielding & induced charges); High-Yield Problem Traps & Mathematical Pitfalls. Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Electric Field & Potential Distributions across Geometries
![Electrostatics Field And Potential Master Distributions](/media/electrostatics_field_and_potential_master_distributions.webp) Description: Two-panel reference diagram for continuous charge geometries: (Panel A) Summary table of electric field and potential formulas for point charges, axial rings, axial discs, infinite and finite line charges, spherical shells, and solid dielectric spheres; (Panel B) Juxtaposed field and potential profiles [E(r) and V(r)] for hollow spherical shells and solid non-conducting spheres illustrating interior vs. exterior behavior.
1.1 Properties of Electric Charge & Coulomb's Law
1. Fundamental Properties of Electric Charge
* Quantization of Charge: Electric charge exists strictly in integral multiples of the elementary charge $e = 1.602 \times 10^{-19}\ \text{C}$: $$\mathbf{Q = \pm n e} \quad (n \in \mathbb{Z}^+)$$
* Relativistic Invariance: Electric charge is strictly independent of the observer's frame of reference and speed ($q_{\text{rest}} = q_{\text{motion}}$), in stark contrast to relativistic mass $m = \frac{m_0}{\sqrt{1 - v^2/c^2}}$.
* Conservation of Charge: The algebraic sum of charges in an isolated physical system remains constant under all physical and chemical transformations.
* Association with Mass: Charge cannot exist without mass, although mass can exist without charge (e.g., neutron, photon). When a body acquires a negative charge, its mass marginally increases ($\Delta m = n m_e$).
2. Coulomb's Law in Vector Form
The electrostatic force between two stationary point charges $q_1$ and $q_2$ separated by displacement $\vec{r}{12} = \vec{r}2 - \vec{r}1$ in a medium of relative permittivity $\epsilon_r$ is: $$\mathbf{\vec{F}{12} = \frac{1}{4\pi\epsilon_0 \epsilon_r} \frac{q_1 q_2}{|\vec{r}{12}|^3} \vec{r}{12} = \frac{k}{\epsilon_r} \frac{q_1 q_2}{r^2} \hat{r}_{12}}$$ Where in vacuum / air ($\epsilon_r = 1$): $$k = \frac{1}{4\pi\epsilon_0} \approx 8.98755 \times 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2 \approx 9 \times 10^9\ \text{N}\cdot\text{m}^2/\text{C}^2$$ $$\epsilon_0 = 8.854 \times 10^{-12}\ \text{C}^2/(\text{N}\cdot\text{m}^2) \quad (\text{Permittivity of Free Space})$$
3. Electrostatic Equilibrium & Stability Analysis
A system of stationary point charges is in equilibrium when the net electrostatic force on every charge is zero ($\sum \vec{F}_i = \vec{0}$).


* Earnshaw's Theorem: It is physically impossible to achieve a stable equilibrium for a system of stationary point charges under purely electrostatic forces alone.
* Dimensional Displacements:
   * For two fixed identical positive charges $+Q$ at $(\pm d, 0)$, a third charge $+q$ at the origin $(0, 0)$ is in stable equilibrium for longitudinal displacements along the $x$-axis (restoring force $F \approx -\frac{8kQq}{d^3}x$), but in unstable equilibrium for transverse displacements along the $y$-axis (repelled away $F \approx +\frac{2kQq}{d^3}y$).
   * If the central charge is $-q$, the stability axes are inverted: unstable along the line of charges, stable transversely with small-amplitude SHM frequency $\omega = \sqrt{\frac{2kQq}{m d^3}}$.


________________


1.2 Electric Field Intensity ($\vec{E}$) of Continuous Distributions
The electric field intensity $\vec{E}$ at a point in space is defined as the force experienced per unit infinitesimal positive test charge: $$\vec{E} = \lim_{q_0 \to 0} \frac{\vec{F}}{q_0}$$
1. Uniformly Charged Ring (Total Charge $Q$, Radius $R$)
At an axial distance $x$ from the center of the ring: $$\mathbf{E_{\text{axial}} = \frac{k Q x}{(R^2 + x^2)^{3/2}}}$$


* At Center ($x = 0$): $E = 0$.
* Far Field ($x \gg R$): $E \approx \frac{kQ}{x^2}$ (behaves as a point charge).
* Maximum Field Condition: $$\frac{dE}{dx} = 0 \implies (R^2 + x^2)^{3/2} - x \cdot \frac{3}{2}(R^2 + x^2)^{1/2}(2x) = 0 \implies R^2 + x^2 - 3x^2 = 0$$ $$\mathbf{x_{\max} = \pm \frac{R}{\sqrt{2}}}$$ $$\mathbf{E_{\max} = \frac{k Q (R/\sqrt{2})}{(R^2 + R^2/2)^{3/2}} = \frac{2 k Q}{3\sqrt{3} R^2} = \frac{Q}{6\sqrt{3}\pi\epsilon_0 R^2}}$$
2. Circular Arc (Radius $R$, Subtending Angle $\alpha$ at Center, Linear Density $\lambda$)
Along the symmetric angle bisector pointing away from the arc: $$\mathbf{E_{\text{arc}} = \frac{2 k \lambda}{R} \sin\left(\frac{\alpha}{2}\right)}$$


* Semicircular Arc ($\alpha = \pi$): $E = \frac{2k\lambda}{R} = \frac{Q}{\pi^2 \epsilon_0 R^2}$.
* Complete Ring ($\alpha = 2\pi$): $E = 0$ at center.
3. Uniformly Charged Flat Circular Disc (Radius $R$, Surface Density $\sigma$)
At an axial distance $x$ from the center: $$\mathbf{E_{\text{disc}} = \frac{\sigma}{2\epsilon_0} \left[1 - \frac{x}{\sqrt{R^2 + x^2}}\right] = \frac{\sigma}{2\epsilon_0} [1 - \cos\theta]}$$ Where $\theta$ is the half-angle subtended by the disc rim at the axial point.


* At Disc Surface ($x \to 0$): $E = \frac{\sigma}{2\epsilon_0}$.
* Infinite Sheet Limit ($R \to \infty$): $$\mathbf{E_{\text{sheet}} = \frac{\sigma}{2\epsilon_0} \quad (\text{Uniform, independent of distance } x)}$$
4. Straight Line Charge (Linear Density $\lambda$, Distance $d$)
For a finite wire subtending angles $\theta_1$ and $\theta_2$ at the perpendicular observation point:


* Perpendicular Component: $$\mathbf{E_\perp = \frac{k\lambda}{d} (\sin\theta_1 + \sin\theta_2)}$$
* Parallel Component: $$\mathbf{E_\parallel = \frac{k\lambda}{d} (\cos\theta_2 - \cos\theta_1)}$$
* Infinitely Long Wire ($\theta_1 = \theta_2 = \pi/2$): $$\mathbf{E = \frac{2 k \lambda}{d} = \frac{\lambda}{2\pi\epsilon_0 d}}$$
* Semi-Infinite Wire ($\theta_1 = \pi/2, \theta_2 = 0$): $$E_\perp = \frac{k\lambda}{d}, \quad E_\parallel = \frac{k\lambda}{d} \implies \mathbf{E_{\text{net}} = \frac{\sqrt{2}k\lambda}{d} \text{ at } 45^\circ}$$


________________


1.3 Spherical Distributions: Shells vs. Solid Dielectric Spheres
1. Thin Spherical Shell (Radius $R$, Total Charge $Q$, Surface Density $\sigma$)
* Inside ($r < R$): $$\mathbf{E_{\text{in}} = 0}, \qquad \mathbf{V_{\text{in}} = \frac{k Q}{R} = \text{constant}}$$
* On Surface ($r = R$): $$\mathbf{E_s = \frac{k Q}{R^2} = \frac{\sigma}{\epsilon_0}}, \qquad \mathbf{V_s = \frac{k Q}{R}}$$
* Outside ($r > R$): $$\mathbf{E_{\text{out}} = \frac{k Q}{r^2}}, \qquad \mathbf{V_{\text{out}} = \frac{k Q}{r}}$$
2. Uniformly Charged Solid Dielectric Sphere (Radius $R$, Volume Density $\rho = \frac{Q}{\frac{4}{3}\pi R^3}$)
* Inside ($r \le R$): $$\mathbf{E_{\text{in}} = \frac{k Q r}{R^3} = \frac{\rho r}{3\epsilon_0} \quad (\text{Linear increase from zero at center})}$$ $$\mathbf{V_{\text{in}} = \frac{k Q}{2 R^3} (3R^2 - r^2) \quad (\text{Parabolic profile})}$$ $$\mathbf{\text{At Center } (r = 0): V_c = \frac{3}{2}\frac{k Q}{R} = 1.5 V_s}$$
* Outside ($r \ge R$): $$\mathbf{E_{\text{out}} = \frac{k Q}{r^2}}, \qquad \mathbf{V_{\text{out}} = \frac{k Q}{r}}$$


________________


1.4 Electric Potential ($V$) & Energy Relations
Electric potential $V$ at a point is the external work required to bring a unit positive test charge from infinity to that point without acceleration: $$\mathbf{V(\vec{r}) = -\int_\infty^{\vec{r}} \vec{E} \cdot d\vec{r}'}$$ $$\mathbf{\vec{E} = -\vec{\nabla} V = -\left(\frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}\right)}$$
1. Potential due to Specific Geometries
* Uniform Ring on Axis: $$\mathbf{V = \frac{k Q}{\sqrt{R^2 + x^2}}}$$
* Uniform Disc on Axis: $$\mathbf{V = \frac{\sigma}{2\epsilon_0} \left[\sqrt{R^2 + x^2} - x\right]}$$
* Cylindrical Line Charge: Potential difference between radii $r_1$ and $r_2$: $$\mathbf{V(r_1) - V(r_2) = \frac{\lambda}{2\pi\epsilon_0} \ln\left(\frac{r_2}{r_1}\right)}$$
2. Equipotential Surfaces
An equipotential surface is the locus of all points having the same electric potential.


* Key Properties:
   1. The electric field lines are strictly perpendicular to equipotential surfaces at every point ($\vec{E} \perp d\vec{r}$ because $dV = -\vec{E}\cdot d\vec{r} = 0$).
   2. No work is done in moving a test charge along an equipotential surface ($W = q\Delta V = 0$).
   3. Equipotential surfaces are closely spaced in regions of strong electric field and widely spaced in regions of weak field ($E = -\frac{dV}{dr} \implies dr = -\frac{dV}{E}$).
   4. Two equipotential surfaces can never intersect.


________________


1.5 Electrostatic Potential Energy & Energy Density
1. Interaction Energy of Discrete Charges
$$U = \sum_{i < j} \frac{k q_i q_j}{r_{ij}}$$


* For three charges $q_1, q_2, q_3$: $U = k\left[\frac{q_1 q_2}{r_{12}} + \frac{q_2 q_3}{r_{23}} + \frac{q_3 q_1}{r_{31}}\right]$.
2. Self-Energy of Continuous Charge Systems
* Uniform Spherical Shell (Radius $R$, Charge $Q$): $$\mathbf{U_{\text{self, shell}} = \frac{k Q^2}{2 R} = \frac{Q^2}{8\pi\epsilon_0 R}}$$
* Uniform Solid Dielectric Sphere (Radius $R$, Charge $Q$): $$\mathbf{U_{\text{self, solid}} = \frac{3 k Q^2}{5 R} = \frac{3 Q^2}{20\pi\epsilon_0 R}}$$
3. Electrostatic Energy Density ($u_E$)
The energy stored per unit volume of space containing an electric field $\vec{E}$: $$\mathbf{u_E = \frac{1}{2}\epsilon_0 E^2 = \frac{1}{2}\epsilon_0 \epsilon_r E^2}$$


* Integrating $u_E$ over all space from $r = 0$ to $\infty$ reproduces the exact self-energies derived above.


________________


2. Electric Dipoles, Gauss's Law & Conductors
![Electrostatics Dipoles Gauss Law And Conductors](/media/electrostatics_dipoles_gauss_law_and_conductors.webp) Description: Two-panel reference diagram for dipole dynamics, Gauss's law, and conductor electrostatics: (Panel A) Electric dipole mechanics in uniform and non-uniform fields, potential energy landscapes, equilibrium stability, and dipole-dipole force scaling; (Panel B) Gauss's law flux geometries for cubes and solid-angle cones, alongside fundamental conductor invariants including interior field cancellation, surface curvature scaling, electrostatic pressure, and cavity shielding.
2.1 The Electric Dipole
An electric dipole consists of two equal and opposite point charges $+q$ and $-q$ separated by a microscopic displacement vector $2\vec{a}$. The electric dipole moment is: $$\mathbf{\vec{p} = q(2\vec{a})} \quad (\text{Directed from } -q \text{ to } +q)$$
1. Field and Potential of a Short Dipole at Arbitrary Point $(r, \theta)$
* Radial and Transverse Field Components: $$E_r = -\frac{\partial V}{\partial r} = \frac{2 k p \cos\theta}{r^3}, \qquad E_\theta = -\frac{1}{r}\frac{\partial V}{\partial \theta} = \frac{k p \sin\theta}{r^3}$$
* Net Electric Field Magnitude: $$\mathbf{E(r, \theta) = \sqrt{E_r^2 + E_\theta^2} = \frac{k p}{r^3} \sqrt{1 + 3\cos^2\theta}}$$
* Angle $\alpha$ between $\vec{E}$ and radial vector $\vec{r}$: $$\mathbf{\tan\alpha = \frac{E_\theta}{E_r} = \frac{1}{2}\tan\theta}$$
* Electric Potential: $$\mathbf{V(r, \theta) = \frac{k \vec{p} \cdot \hat{r}}{r^2} = \frac{k p \cos\theta}{r^2}}$$
2. Canonical Dipole Orientations
* Axial Position (End-on / Longitudinal, $\theta = 0^\circ$): $$\mathbf{E_{\text{axial}} = \frac{2 k p}{r^3} \quad (\text{Collinear with } \vec{p})}, \qquad \mathbf{V_{\text{axial}} = \frac{k p}{r^2}}$$
* Equatorial Position (Broadside-on / Transverse, $\theta = 90^\circ$): $$\mathbf{E_{\text{eq}} = \frac{k p}{r^3} \quad (\text{Strictly ANTIPARALLEL to } \vec{p})}, \qquad \mathbf{V_{\text{eq}} = 0}$$
* Fundamental Ratio: At identical distances $r$, $\mathbf{\frac{E_{\text{axial}}}{E_{\text{eq}}} = 2}$.
3. Dipole in an External Electric Field
* Uniform Field ($\vec{E} = \text{constant}$):
   * Net Force: $\mathbf{\vec{F}_{\text{net}} = \vec{0}}$ (no translational acceleration).
   * Torque: $$\mathbf{\vec{\tau} = \vec{p} \times \vec{E}} \implies |\vec{\tau}| = p E \sin\theta$$
   * Potential Energy: $$\mathbf{U = -\vec{p} \cdot \vec{E} = -p E \cos\theta}$$
   * Equilibrium States:
      * $\theta = 0^\circ$: $\vec{p} \parallel \vec{E} \implies \tau = 0, U = -pE$ (Stable Equilibrium).
      * $\theta = 180^\circ$: $\vec{p} \parallel -\vec{E} \implies \tau = 0, U = +pE$ (Unstable Equilibrium).
   * Work Done to Rotate from $\theta_1$ to $\theta_2$: $$W_{\text{ext}} = U(\theta_2) - U(\theta_1) = p E (\cos\theta_1 - \cos\theta_2)$$
   * Small-Angle Torsional SHM: $$\tau = -p E \theta = I \frac{d^2\theta}{dt^2} \implies \mathbf{T = 2\pi\sqrt{\frac{I}{pE}}}$$
* Non-Uniform Electric Field:
   * The dipole experiences both a net torque and a net translational force: $$\mathbf{\vec{F} = (\vec{p} \cdot \vec{\nabla})\vec{E} = p \frac{\partial\vec{E}}{\partial r}}$$
* Dipole-Dipole Interaction Forces ($r \gg \text{size}$):
   * Collinear dipoles: $\mathbf{F \propto \frac{p_1 p_2}{r^4}}$.
   * Charge-Dipole interaction: $\mathbf{F \propto \frac{q p}{r^3}}$.


________________


2.2 Gauss's Law & Electric Flux
Electric flux $\Phi_E$ measures the surface integral of the electric field passing through an area: $$\Phi_E = \int \vec{E} \cdot d\vec{A}$$
1. Gauss's Theorem
The net outward electric flux through any closed Gaussian surface equals $\frac{1}{\epsilon_0}$ times the net charge enclosed: $$\mathbf{\Phi_{\text{closed}} = \oint \vec{E} \cdot d\vec{A} = \frac{q_{\text{enclosed}}}{\epsilon_0}}$$
2. Solid Angle Concept & Flux Through Open Surfaces
The flux of a point charge $q$ through an open surface subtending solid angle $\Omega$ at the charge is: $$\Phi = \frac{q}{4\pi\epsilon_0} \Omega$$


* Circular Disc of Radius $R$ at Distance $x$: Subtends half-angle $\theta = \tan^{-1}(R/x)$. The solid angle is $\Omega = 2\pi(1 - \cos\theta)$. $$\mathbf{\Phi = \frac{q}{2\epsilon_0}(1 - \cos\theta) = \frac{q}{2\epsilon_0}\left[1 - \frac{x}{\sqrt{R^2 + x^2}}\right]}$$
3. Symmetrical Cubical Geometries (High-Yield JEE Standards)
Consider a cube of side $a$ and a point charge $q$:


1. Charge at Geometric Center of Cube: $$\Phi_{\text{total}} = \frac{q}{\epsilon_0}, \qquad \Phi_{\text{each face}} = \frac{q}{6\epsilon_0}$$
2. Charge at Center of One Face: Symmetrically enclosed by adding a second identical cube: $$\Phi_{\text{through cube}} = \frac{q}{2\epsilon_0}, \qquad \Phi_{\text{through that face}} = 0 \quad (\vec{E} \parallel d\vec{A})$$
3. Charge at Center of One Edge: Enclosed by adding 3 additional cubes (total 4 cubes): $$\Phi_{\text{through cube}} = \frac{q}{4\epsilon_0}$$
4. Charge at One Corner (Vertex) of Cube: Enclosed by adding 7 additional cubes (total 8 cubes sharing the vertex): $$\mathbf{\Phi_{\text{through cube}} = \frac{q}{8\epsilon_0}}$$
   * Flux through the 3 adjacent faces meeting at that corner is identically zero ($\vec{E} \perp \hat{n} \implies \vec{E}\cdot d\vec{A} = 0$).
   * The flux passes symmetrically through the 3 opposite faces: $$\mathbf{\Phi_{\text{each opposite face}} = \frac{1}{3}\left(\frac{q}{8\epsilon_0}\right) = \frac{q}{24\epsilon_0}}$$


________________


2.3 Electrostatics of Conductors
In electrostatic equilibrium (no steady currents flowing):
1. Fundamental Conductor Theorems
1. Zero Internal Field: The electric field inside the conducting material is identically zero everywhere: $$\mathbf{\vec{E}_{\text{inside}} = \vec{0}}$$
2. Equipotential Body: The entire conductor is an equipotential region: $$\mathbf{V_{\text{inside}} = V_{\text{surface}} = \text{constant}}$$
3. Location of Net Charge: Any excess static charge resides strictly on the outer surface ($\rho_{\text{inside}} = 0$).
4. Perpendicular Surface Field: The electric field just outside the surface of a charged conductor is normal to the surface: $$\mathbf{\vec{E}_{\text{surface}} = \frac{\sigma}{\epsilon_0} \hat{n}}$$ (Contrast: An infinite non-conducting sheet produces $\frac{\sigma}{2\epsilon_0}$, whereas a conductor has two faces / induced boundary conditions yielding $\frac{\sigma}{\epsilon_0}$).
5. Surface Charge Curvature Dependence: The surface charge density $\sigma$ varies inversely with the local radius of curvature: $$\mathbf{\sigma \propto \frac{1}{R_{\text{curvature}}}}$$ At sharp edges and pointed tips ($R \to 0$), $\sigma$ becomes extremely large, causing the electric field to exceed the dielectric breakdown strength of air ($3 \times 10^6\ \text{V/m}$), ionizing the surrounding air (Corona Discharge / Action of Points).
6. Electrostatic Pressure: The outward repulsive mechanical force experienced per unit area of a charged conducting surface: $$\mathbf{P_{\text{elec}} = \frac{\sigma^2}{2\epsilon_0} = \frac{1}{2}\epsilon_0 E^2}$$
7. Electrostatic Shielding (Faraday Cage): The electric field inside a closed cavity within a conductor is identically zero, provided there is no charge placed inside the cavity. The interior is completely shielded from all external electrostatic fields and charges.
8. Concentric Spherical Shell Charge Distribution: For concentric conducting shells of radii $R_1 < R_2$ carrying charges $Q_1, Q_2$:
   * Inner shell outer surface carries $+Q_1$.
   * Outer shell inner surface carries $-Q_1$ (induced).
   * Outer shell outer surface carries $Q_2 + Q_1$ (by charge conservation).


________________


3. High-Yield Problem Archetypes & JEE Pitfalls
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Field of Non-Conducting Sheet vs. Conductor
	Using $E = \frac{\sigma}{\epsilon_0}$ for a single non-conducting sheet.
	Non-conducting sheet: $E = \frac{\sigma}{2\epsilon_0}$. Conducting plate with charge $Q$: charge splits equally to two faces ($\sigma = Q/2A$), giving $E_{\text{outside}} = \frac{\sigma}{\epsilon_0} = \frac{Q}{2A\epsilon_0}$.
	2
	Center Potential of Solid Sphere
	Assuming potential at center of solid dielectric sphere is zero or equal to surface.
	At center, $V_c = \mathbf{\frac{3}{2} V_s = 1.5 \frac{kQ}{R}}$ (maximum at center, decreases parabolically to surface).
	3
	Force on Dipole in Uniform Field
	Claiming a dipole accelerates translationally in a uniform field.
	Net force $\vec{F}_{\text{net}} = \vec{0}$; only a torque $\vec{\tau} = \vec{p}\times\vec{E}$ acts. Translational force requires $\frac{\partial E}{\partial r} \ne 0$.
	4
	Dipole Potential on Equatorial Line
	Calculating non-zero potential on equatorial plane.
	Equatorial plane ($\theta = 90^\circ$) is an equipotential surface with $V = 0$ everywhere ($\vec{p} \perp \vec{r}$).
	5
	Self-Energy Comparison
	Using $\frac{kQ^2}{2R}$ for solid sphere self-energy.
	Shell self-energy is $\mathbf{\frac{1}{2}\frac{kQ^2}{R}}$; uniformly charged solid sphere self-energy is $\mathbf{\frac{3}{5}\frac{kQ^2}{R}}$.
	6
	Gauss's Law with Corner Charge on Cube
	Stating flux through each face of cube is $\frac{q}{8 \times 6 \epsilon_0} = \frac{q}{48\epsilon_0}$.
	Total cube flux is $\frac{q}{8\epsilon_0}$. The 3 adjacent faces have zero flux ($\vec{E}\parallel\text{face}$); the 3 opposite faces each receive $\mathbf{\frac{q}{24\epsilon_0}}$.
	7
	Ring Field Maximum Location
	Memorizing $x_{\max} = R/2$ instead of $R/\sqrt{2}$.
	Maximum axial field occurs at $\mathbf{x = \frac{R}{\sqrt{2}}}$ with magnitude $E_{\max} = \frac{2kQ}{3\sqrt{3}R^2}$.
	8
	Work Done on Charge along Equipotential
	Integrating $\int \vec{E}\cdot d\vec{r}$ along an equipotential path.
	$W = q(V_B - V_A) = \mathbf{0}$, regardless of path complexity or distance traversed.
	9
	Electrostatic Pressure Factor of 2
	Confusing surface field $\frac{\sigma}{\epsilon_0}$ with pressure $\frac{\sigma^2}{\epsilon_0}$.
	Pressure is $P = \mathbf{\frac{\sigma^2}{2\epsilon_0}}$ because a surface charge element does not exert force on itself; it only experiences the field of remaining charges ($\frac{\sigma}{2\epsilon_0}$).
	10
	Earnshaw's Theorem Violation
	Designing stable 3D equilibrium with only electrostatic point charges.
	Impossible; Laplace's equation $\nabla^2 V = 0$ prohibits isolated potential minima in charge-free space. At least one direction is unstable.
	

________________