Physics Revision Context: Chapter 90 — Electromagnetic Induction & Eddy Currents
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/EMI/, EMI Theory.pdf, EMI Exercise 1 to 3.pdf, EMI Exercise Solutions.pdf, EMI HLP.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Electromagnetic Induction & Eddy Currents (Magnetic Flux $\Phi = \int \vec{B}\cdot d\vec{A}$, Faraday's Laws $\mathcal{E} = -\frac{d\Phi}{dt}$, Lenz's Law as Energy Conservation, Induced Charge Invariant $\Delta q = \frac{\Delta\Phi}{R}$; Motional EMF: Translating Wire $\mathcal{E} = B v L$, Rotating Rod $\mathcal{E} = \frac{1}{2}B\omega L^2$, Rotating Disc / Faraday Dynamo $\mathcal{E} = \frac{1}{2}B\omega R^2$, AC Generator $\mathcal{E}(t) = NAB\omega\sin\omega t$, Sliding Rail Mechanical-Electrical Power Balance $P_{\text{mech}} = F_{\text{mag}} v = \frac{B^2 L^2 v^2}{R} \equiv P_{\text{elec}}$, Braking Kinetics $v(t) = u e^{-t/\tau_m}$, Stopping Distance $x_{\max} = \frac{m u R}{B^2 L^2}$; Induced Electric Fields: Non-conservative nature $\oint \vec{E}\cdot d\vec{\ell} = -\frac{d\Phi}{dt}$, Radial profile in cylindrical field $E_{\text{in}} = \frac{r}{2}\frac{dB}{dt}$ vs $E_{\text{out}} = \frac{R^2}{2r}\frac{dB}{dt}$; Eddy Currents & Applications; Self-Inductance $\mathcal{E} = -L\frac{di}{dt}$, Solenoid $L = \mu_0 n^2 A \ell$, Energy $U = \frac{1}{2}Li^2$, Energy Density $u_B = \frac{B^2}{2\mu_0}$; LR Transients: Growth $i(t) = I_0(1 - e^{-t/\tau_L})$, Decay $i(t) = I_0 e^{-t/\tau_L}$, Time constant $\tau_L = L/R$, Boundary states $t=0^+$ (open circuit) vs $t \to \infty$ (short circuit); Mutual Inductance $\Phi_2 = M i_1$, Reciprocity $M_{12} = M_{21}$, Coupling factor $k$, Coaxial solenoids & Concentric loops, Series coupled inductors $L_{\text{eq}} = L_1 + L_2 \pm 2M$; LC Oscillations: Differential equation $\frac{d^2q}{dt^2} + \omega_0^2 q = 0$, Natural frequency $\omega_0 = \frac{1}{\sqrt{LC}}$, Energy shuttling; High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Faraday's Laws, Motional EMF & Induced Electric Fields
![Electromagnetic Induction Motional Emf And Induced Fields](/media/electromagnetic_induction_motional_emf_and_induced_fields.webp) Description: Two-panel reference diagram for electromagnetic induction and induced fields: (Panel A) Motional EMF formulations for translating and rotating conductors, accompanied by mechanical-electrical power equivalence and sliding rod exponential braking kinetics; (Panel B) Induced non-conservative electric field radial profiles inside and outside cylindrical time-varying magnetic fields, along with closed field-line topological properties.
1.1 Faraday's Laws & Lenz's Law
1. Magnetic Flux ($\Phi$)
The magnetic flux through an infinitesimal area element $d\vec{A}$ in a magnetic field $\vec{B}$ is: $$\mathbf{\Phi = \int \vec{B} \cdot d\vec{A} = \int B \cos\theta dA}$$


* SI Unit: Weber ($\text{Wb} = \text{T}\cdot\text{m}^2 = \text{V}\cdot\text{s}$). Dimensional Formula: $[M L^2 T^{-2} I^{-1}]$.
* Magnetic flux is a scalar quantity.
2. Faraday's Law of Electromagnetic Induction
Whenever the magnetic flux linked with an electrical circuit changes with time, an electromotive force (EMF) is induced in the circuit: $$\mathbf{\mathcal{E} = -\frac{d\Phi}{dt}}$$


* For a tightly wound coil of $N$ turns: $$\mathbf{\mathcal{E} = -N \frac{d\Phi}{dt} = -\frac{d\lambda}{dt}} \quad (\lambda = N\Phi \text{ is the total flux linkage})$$
* Induced Current ($i$) in a Loop of Resistance $R$: $$\mathbf{i = \frac{\mathcal{E}}{R} = -\frac{1}{R}\frac{d\Phi}{dt}}$$
3. Induced Charge Invariant Theorem
The net electrical charge $\Delta q$ passing through any cross-section of a conducting loop of resistance $R$ during a change in flux $\Delta\Phi = \Phi_2 - \Phi_1$ is: $$\Delta q = \int_{t_1}^{t_2} i dt = \int_{t_1}^{t_2} \left(-\frac{1}{R}\frac{d\Phi}{dt}\right) dt = \mathbf{\frac{|\Delta\Phi|}{R} = \frac{|\Phi_1 - \Phi_2|}{R}}$$


* Crucial Physical Invariant: The total charge $\Delta q$ transferred depends strictly on the net change in flux ($\Delta\Phi$) and total resistance ($R$); it is completely independent of the time interval ($\Delta t$) or rate of change of flux!
4. Lenz's Law as Energy Conservation
The negative sign in Faraday's law represents Lenz's Law: The polarity of the induced EMF is always such that it establishes an induced current whose own magnetic field opposes the change in magnetic flux that produces it.


* Thermodynamic Consistency: If the induced current assisted the flux change, a minor perturbation would create self-amplifying currents without external work, violating the First Law of Thermodynamics. Lenz's law guarantees that mechanical work must be expended against induced magnetic forces to generate electrical energy.


________________


1.2 Motional Electromotive Force
When a conductor moves through a static magnetic field, conduction electrons experience a magnetic Lorentz force $\vec{F}m = -e(\vec{v} \times \vec{B})$. This causes charge separation until the internal electrostatic field balances the magnetic force: $$\vec{E}{\text{internal}} = -(\vec{v} \times \vec{B})$$ $$\mathbf{\mathcal{E} = \int (\vec{v} \times \vec{B}) \cdot d\vec{\ell}}$$
1. Translating Conductors
* Straight Rod of Vector Length $\vec{L}$: $$\mathbf{\mathcal{E} = (\vec{v} \times \vec{B}) \cdot \vec{L}}$$ When $\vec{v}, \vec{B}$, and $\vec{L}$ are mutually perpendicular: $$\mathbf{\mathcal{E} = B v L}$$
* Arbitrarily Shaped Wire in a Uniform Magnetic Field: $$\mathcal{E} = \int_A^B (\vec{v} \times \vec{B}) \cdot d\vec{\ell} = (\vec{v} \times \vec{B}) \cdot \left(\int_A^B d\vec{\ell}\right) = \mathbf{(\vec{v} \times \vec{B}) \cdot \vec{L}_{\text{displacement}}}$$ The induced EMF depends exclusively on the straight vector connecting the endpoints $A$ and $B$, regardless of how convoluted the wire path is!
* Closed Loop Moving in a Uniform Field: $\oint d\vec{\ell} = \vec{0} \implies \mathbf{\mathcal{E}_{\text{net}} = 0}$.
2. Rotating Conductors
* Pivoted Conducting Rod (Length $L$, Angular Speed $\omega$ in Transverse $\vec{B}$): At distance $r$ from the pivot, the linear speed is $v = \omega r$: $$\mathbf{\mathcal{E} = \int_0^L B (\omega r) dr = \frac{1}{2} B \omega L^2}$$
* Rotating Metal Disc (Radius $R$, Faraday's Homopolar Generator): Concentric radial elements act as parallel rods: $$\mathbf{\mathcal{E}_{\text{center-to-rim}} = \frac{1}{2} B \omega R^2}$$
* Rotating Loop in Uniform Magnetic Field (AC Generator): A coil of $N$ turns, area $A$, rotated at angular frequency $\omega$ about an axis perpendicular to $\vec{B}$: $$\Phi(t) = N B A \cos(\omega t) \implies \mathbf{\mathcal{E}(t) = N B A \omega \sin(\omega t) = \mathcal{E}_0 \sin(\omega t)}$$
3. Power Equivalence & Dynamic Braking on Rails
Consider a conducting rod of mass $m$, length $L$, and resistance $R$ sliding along frictionless horizontal conducting rails in a uniform vertical field $B$:


* When pulled at steady velocity $v$ by an external force $F_{\text{ext}}$: $$i = \frac{B v L}{R} \implies F_{\text{mag}} = i L B = \frac{B^2 L^2 v}{R}$$ $$\mathbf{P_{\text{mech}} = F_{\text{ext}} v = \frac{B^2 L^2 v^2}{R} \equiv P_{\text{Joule}} = i^2 R}$$ Mechanical work performed by the pulling force is converted 100% into Joule heat in the resistor.
* Free Braking Motion (Released with Initial Velocity $u$): $$m \frac{dv}{dt} = -F_{\text{mag}} = -\left(\frac{B^2 L^2}{R}\right) v \implies \frac{dv}{v} = -\frac{dt}{\tau_m}$$ $$\mathbf{v(t) = u e^{-t / \tau_m}} \quad \text{where } \mathbf{\tau_m = \frac{m R}{B^2 L^2}} \text{ (Electromechanical Time Constant)}$$ $$\mathbf{x_{\max} = \int_0^\infty v(t) dt = u \tau_m = \frac{m u R}{B^2 L^2}}$$


________________


1.3 Induced Electric Fields (Non-Conservative Fields)
By Maxwell's third equation (Faraday-Maxwell Law), a time-varying magnetic field induces an electric field $\vec{E}{\text{ind}}$ in space: $$\mathbf{\oint \vec{E}{\text{ind}} \cdot d\vec{\ell} = -\frac{d\Phi}{dt} = -\int \frac{\partial\vec{B}}{\partial t} \cdot d\vec{A}}$$
1. Cylindrical Region of Uniform Time-Varying Magnetic Field ($dB/dt \ne 0$, Radius $R$)
By axial symmetry, the induced electric field lines form concentric circles centered on the magnetic cylinder:


* Inside the Field Region ($r \le R$): $$E_{\text{in}} (2\pi r) = \pi r^2 \left|\frac{dB}{dt}\right| \implies \mathbf{E_{\text{in}} = \frac{r}{2} \left|\frac{dB}{dt}\right| \quad (\text{Linear with } r)}$$
* Outside the Field Region ($r \ge R$): $$E_{\text{out}} (2\pi r) = \pi R^2 \left|\frac{dB}{dt}\right| \implies \mathbf{E_{\text{out}} = \frac{R^2}{2r} \left|\frac{dB}{dt}\right| \quad (\text{Inverse decay with } r)}$$
2. Key Physical Properties of Induced Electric Fields
1. Non-Conservative Nature: $\oint \vec{E}_{\text{ind}} \cdot d\vec{\ell} \ne 0$. The concept of electrostatic scalar potential $V$ is strictly invalid for induced electric fields!
2. Closed Loops: Field lines close upon themselves with zero divergence ($\vec{\nabla} \cdot \vec{E}_{\text{ind}} = 0$).
3. Space Invariant: The induced field exists in vacuum regardless of whether a physical conductor is present. If a conducting wire is placed in the field, electrons accelerate under $\vec{F} = -e\vec{E}_{\text{ind}}$, creating the observed induced current.


________________


1.4 Eddy Currents & Industrial Applications
When large bulk pieces of conducting metal are placed in time-varying magnetic fields, closed circulating current loops called eddy currents (Foucault currents) are induced throughout the volume:


* Joule Heating & Energy Loss: Bulk eddy currents dissipate massive heat ($P \propto f^2 B_{\max}^2$).
* Mitigation: Transformer cores and electric motor armatures are constructed from thin laminated sheets of silicon steel insulated from each other by lacquer varnish to interrupt large current loops.
* Beneficial Applications:
   1. Electromagnetic Damping: Dead-beat galvanometers rapidly settle to equilibrium.
   2. Induction Furnaces: High-frequency alternating fields melt metals rapidly.
   3. Magnetic Levitation & Brakes: Eddy-current braking in high-speed bullet trains.


________________


2. Inductance, LR Circuits & LC Resonance
![Inductance Lr Transients And Lc Oscillations](/media/inductance_lr_transients_and_lc_oscillations.webp) Description: Two-panel reference diagram for inductive circuits and resonance: (Panel A) Growth and decay dynamics of current in RL series circuits with inductive relaxation constant tau_L = L/R, highlighting initial open-circuit and steady-state short-circuit boundaries; (Panel B) Mutual inductance geometry analytics and undamped LC tank circuit energy oscillations showing continuous shuttling between electrostatic and magnetic energies.
2.1 Self-Inductance & Inductors
When current in a circuit changes, the changing magnetic flux linked with the circuit itself induces a counter-EMF (self-induction): $$\Phi_{\text{self}} = L i \implies \mathbf{\mathcal{E}_{\text{self}} = -L \frac{di}{dt}}$$


* Self-Inductance ($L$): A geometric and material property measuring the electrical inertia of the circuit.
* SI Unit: Henry ($\text{H} = \text{Wb}/\text{A} = \text{V}\cdot\text{s}/\text{A} = \text{J}/\text{A}^2$). Dimensions: $[M L^2 T^{-2} I^{-2}]$.
1. Ideal Solenoid Self-Inductance
For a long solenoid of length $\ell$, cross-sectional area $A$, and $n$ turns per unit length ($N = n\ell$): $$\Phi = B A = (\mu_0 n i) A \implies \text{Total Linkage } \lambda = N \Phi = (n\ell)(\mu_0 n i A) = (\mu_0 n^2 A \ell) i$$ $$\mathbf{L = \mu_0 n^2 A \ell = \mu_0 \frac{N^2 A}{\ell} = \mu_0 \mu_r n^2 A \ell}$$


* Inductance per unit volume: $\frac{L}{V_{\text{vol}}} = \mu_0 n^2$.
2. Magnetic Energy & Energy Density
The work required to establish current $I$ against back-EMF is stored in the magnetic field of the inductor: $$W = \int_0^I \mathcal{E} i dt = \int_0^I \left(L\frac{di}{dt}\right) i dt = \mathbf{U = \frac{1}{2} L I^2}$$


* Magnetic Energy Density ($u_B$): $$U = \frac{1}{2}(\mu_0 n^2 A \ell) \left(\frac{B}{\mu_0 n}\right)^2 = \left(\frac{B^2}{2\mu_0}\right)(A\ell) \implies \mathbf{u_B = \frac{B^2}{2\mu_0}}$$ (Direct magnetostatic counterpart to electrostatic energy density $u_E = \frac{1}{2}\epsilon_0 E^2$).


________________


2.2 Transient LR Circuits (Growth & Decay)
1. Growth of Current in a Series LR Circuit
Connecting an inductor $L$ and resistor $R$ across an ideal battery $\mathcal{E}$ via a switch closed at $t = 0$: $$\mathcal{E} - i R - L\frac{di}{dt} = 0 \implies L\frac{di}{dt} = \mathcal{E} - i R$$ Integrating with boundary condition $i(0) = 0$: $$\mathbf{i(t) = I_0 \left(1 - e^{-t / \tau_L}\right)} \quad \text{where } I_0 = \frac{\mathcal{E}}{R}, \quad \mathbf{\tau_L = \frac{L}{R}} \text{ (Inductive Time Constant)}$$


* Voltage Distributions: $$V_R(t) = i(t) R = \mathcal{E}\left(1 - e^{-t / \tau_L}\right), \qquad V_L(t) = L\frac{di}{dt} = \mathcal{E} e^{-t / \tau_L}$$
* Time Constant ($\tau_L = L/R$): At $t = \tau_L$: $i(\tau_L) = I_0 (1 - e^{-1}) \approx \mathbf{0.632 I_0}$ ($63.2\%$ of steady-state saturation current).
* Inductor Boundary Rules in DC Circuits:
   1. At $t = 0^+$ (Instant of Closing Switch): The inductor opposes any instantaneous current jump ($di/dt$ finite $\implies i(0^+) = 0$). Replace the inductor with an OPEN CIRCUIT!
   2. At $t \to \infty$ (Steady State): The current reaches saturation ($di/dt = 0 \implies \mathcal{E}_L = 0$). Replace the inductor with a ZERO-RESISTANCE SHORT-CIRCUIT WIRE!
2. Decay of Current in an LR Circuit
Disconnecting the battery and shorting the LR loop when current is initially $I_0$: $$i R + L\frac{di}{dt} = 0 \implies \mathbf{i(t) = I_0 e^{-t / \tau_L}}$$


* At $t = \tau_L$: $i = I_0 / e \approx 0.368 I_0$ ($36.8\%$ remaining).
* Total heat dissipated in resistor equals initial stored magnetic energy: $$H = \int_0^\infty i^2 R dt = \mathbf{\frac{1}{2} L I_0^2}$$


________________


2.3 Mutual Inductance & Coupling
When current $i_1$ in coil 1 produces magnetic flux $\Phi_2$ linked with an adjacent coil 2: $$\Phi_2 = M_{21} i_1 \implies \mathbf{\mathcal{E}_2 = -M \frac{di_1}{dt}}$$


* Neumann's Reciprocity Theorem: $\mathbf{M_{12} = M_{21} = M}$.
* Coupling Coefficient ($k$): $$\mathbf{M = k \sqrt{L_1 L_2}} \quad (0 \le k \le 1)$$ $k = 1$ for perfect magnetic flux linkage; $k = 0$ for perpendicular non-interacting coils.
1. Standard Mutual Inductance Formulations
* Two Coaxial Solenoids (Lengths $\ell$, Radii $r_1 < r_2$, Turn Densities $n_1, n_2$): $$\mathbf{M = \mu_0 n_1 n_2 (\pi r_1^2) \ell}$$
* Two Concentric Coplanar Circular Loops (Radii $r \ll R$): $$\mathbf{M = \frac{\mu_0 \pi r^2}{2 R}}$$
2. Series Inductors with Mutual Coupling
* Aiding Polarity (Fluxes reinforce): $\mathbf{L_{\text{eq}} = L_1 + L_2 + 2M}$.
* Opposing Polarity (Fluxes oppose): $\mathbf{L_{\text{eq}} = L_1 + L_2 - 2M}$.


________________


2.4 Undamped LC Oscillations
In an ideal circuit containing a charged capacitor $C$ and an inductor $L$ with zero resistance ($R = 0$): $$\frac{q}{C} + L\frac{d^2q}{dt^2} = 0 \implies \mathbf{\frac{d^2q}{dt^2} + \omega_0^2 q = 0}$$


* Natural Resonance Frequency: $$\mathbf{\omega_0 = \frac{1}{\sqrt{LC}}}, \qquad \mathbf{f_0 = \frac{1}{2\pi\sqrt{LC}}}$$
* Charge & Current Evolution: $$q(t) = Q_0 \cos(\omega_0 t), \qquad i(t) = -\frac{dq}{dt} = \omega_0 Q_0 \sin(\omega_0 t) = I_0 \sin(\omega_0 t)$$
* Energy Invariant: $$U_{\text{total}} = \frac{q(t)^2}{2C} + \frac{1}{2}L i(t)^2 = \frac{Q_0^2 \cos^2(\omega_0 t)}{2C} + \frac{L(\omega_0^2 Q_0^2 \sin^2(\omega_0 t))}{2} = \mathbf{\frac{Q_0^2}{2C} = \frac{1}{2} L I_0^2 = \text{constant}}$$ Energy shuttles continuously between the electrostatic field of the capacitor and the magnetic field of the inductor.


________________


3. High-Yield Problem Archetypes & JEE Pitfalls
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Induced Charge Dependence on Time
	Assuming charge depends on speed of pulling coil.
	Induced charge $\mathbf{\Delta q = \frac{\Delta\Phi}{R}}$ is strictly independent of time or velocity. Fast or slow withdrawal produces the exact same charge!
	2
	Work Done in Motional EMF
	Claiming magnetic Lorentz force does work to generate current.
	$\vec{F}_m = q(\vec{v}\times\vec{B}) \perp \vec{v} \implies W_m = 0$. The external pulling force does the mechanical work; the magnetic field acts purely as a catalytic mediator.
	3
	Inductor Initial Behavior ($t = 0^+$)
	Treating inductor as a short circuit at switch closing.
	At $t = 0^+$, the inductor resists current jumps and acts as an OPEN CIRCUIT ($i = 0$). Short-circuit behavior occurs only at $t \to \infty$.
	4
	Induced Electric Field Conservatism
	Defining a potential difference between two points in an induced field.
	$\oint \vec{E}_{\text{ind}}\cdot d\vec{\ell} = -\frac{d\Phi}{dt} \ne 0$. Induced electric fields are non-conservative; scalar electric potential $V$ does not exist!
	5
	Rotating Rod EMF Location
	Using $B v L$ instead of $\frac{1}{2}B\omega L^2$.
	Different segments move at different speeds ($v = \omega r$). Integration yields $\mathbf{\mathcal{E} = \frac{1}{2}B\omega L^2}$.
	6
	Rotating Disc vs Loop
	Expecting AC EMF from a rotating metal disc.
	A metal disc rotating about its axis produces a steady DC potential difference $\mathcal{E} = \frac{1}{2}B\omega R^2$ between center and rim (Faraday generator).
	7
	Coupling Coefficient Limit
	Setting mutual inductance greater than $\sqrt{L_1 L_2}$.
	Maximum physical mutual inductance occurs at $k = 1 \implies \mathbf{M \le \sqrt{L_1 L_2}}$.
	8
	Sliding Rod Stopping Distance
	Integrating deceleration assuming constant force.
	Magnetic braking force is proportional to velocity ($F \propto v$), yielding exponential velocity decay $v = u e^{-t/\tau_m}$ and finite stopping distance $\mathbf{x_{\max} = \frac{m u R}{B^2 L^2}}$.
	9
	Induced Field Outside Magnetic Region
	Assuming $E_{\text{ind}} = 0$ outside a cylindrical solenoid where $B = 0$.
	Though $B_{\text{out}} = 0$, the enclosed flux $\Phi = \pi R^2 B$ changes with time, inducing an exterior electric field $\mathbf{E_{\text{out}} = \frac{R^2}{2r}\frac{dB}{dt}}$.
	10
	Mutual Inductance Reciprocity
	Believing $M_{12} \ne M_{21}$ for coils of unequal turns.
	Neumann's Reciprocity Theorem guarantees that $\mathbf{M_{12} \equiv M_{21}}$ regardless of coil geometry, size, or turn ratios!
	

________________