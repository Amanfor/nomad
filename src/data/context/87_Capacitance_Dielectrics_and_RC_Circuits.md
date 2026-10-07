Physics Revision Context: Chapter 87 — Capacitance, Dielectrics & Transient RC Circuits
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/Capacitance/, Capacitance Theory.pdf, Capacitance Exercises.pdf, Capacitance Exercise Solutions.pdf, Capacitance HLP.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Capacitance, Dielectrics & RC Circuits (Definition $Q = CV$, Farad units, Isolated Spherical Conductor $C = 4\pi\epsilon_0 R$, Energy stored $U = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$, Energy density $u_E = \frac{1}{2}\epsilon_0 E^2$; Redistribution of Charges: Common potential $V = \frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}$, Heat dissipation $\Delta H = \frac{C_1 C_2}{2(C_1+C_2)}(V_1 - V_2)^2$; Parallel Plate Capacitor $C_0 = \frac{\epsilon_0 A}{d}$, Attractive Force $F = \frac{Q^2}{2\epsilon_0 A} = \frac{1}{2}\epsilon_0 A E^2$, Electrostatic pressure $P = \frac{\sigma^2}{2\epsilon_0}$; Spherical & Cylindrical Capacitors: Outer earthed $\frac{4\pi\epsilon_0 ab}{b-a}$, Inner earthed $\frac{4\pi\epsilon_0 b^2}{b-a}$, Coaxial cylinders $\frac{2\pi\epsilon_0 L}{\ln(b/a)}$; Combinations: Series $\frac{1}{C_{\text{eq}}} = \sum \frac{1}{C_i}$, Parallel $C_{\text{eq}} = \sum C_i$, Charge distribution on multiple parallel conducting plates; Dielectrics: Bound charges $\sigma_p = \sigma(1 - 1/K)$, Slab of thickness $t < d$ yielding $C = \frac{\epsilon_0 A}{d - t + t/K}$, Variable dielectric constant integration, Master Invariant Table: Battery Connected vs Disconnected, Inward pulling force on dielectric slab $F = \frac{\epsilon_0 b V^2 (K-1)}{2d}$ vs constant charge force; RC Transient Circuits: Charging $q(t) = Q_0(1 - e^{-t/\tau})$, Current $i(t) = I_0 e^{-t/\tau}$, Time constant $\tau = RC$, 50% energy loss theorem $H = \frac{1}{2}C\mathcal{E}^2$, Discharging $q(t) = Q_0 e^{-t/\tau}$, Boundary states $t=0^+$ (short circuit) and $t \to \infty$ (open circuit), Multi-loop Thevenin resistance reduction; High-Yield JEE Traps & Problem Archetypes). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Capacitance Principles, Geometries & Dielectrics
![Capacitance Geometries Dielectrics And Forces](/media/capacitance_geometries_dielectrics_and_forces.webp) Description: Two-panel reference diagram for capacitive systems and dielectrics: (Panel A) Summary of canonical capacitor geometries (isolated sphere, parallel plate with dielectric slab, concentric spherical capacitors with inner vs. outer earthing, coaxial cylindrical capacitor), attractive plate force, and charge redistribution heat loss; (Panel B) Master invariant table comparing battery-connected vs. battery-disconnected dielectric insertion, alongside mathematical derivations for the inward fringing electrostatic pulling force on a dielectric slab.
1.1 Capacitance Fundamentals & Isolated Conductors
1. Definition of Capacitance
When a charge $Q$ is transferred to an isolated conductor, its electric potential $V$ rises proportionally: $$Q \propto V \implies \mathbf{Q = C V} \iff \mathbf{C = \frac{Q}{V}}$$


* Physical Significance: Capacitance $C$ measures the ability of a conductor (or conductor pair) to store electrostatic charge and energy per unit potential difference.
* SI Unit: Farad ($\text{F} = \text{C}/\text{V}$). Practical units: microfarad ($1\ \mu\text{F} = 10^{-6}\ \text{F}$), nanofarad ($1\ \text{nF} = 10^{-9}\ \text{F}$), picofarad ($1\ \text{pF} = 10^{-12}\ \text{F}$).
* Dimensional Formula: $[M^{-1} L^{-2} T^4 I^2]$.
* Invariance: Capacitance is strictly independent of the charge $Q$ or potential $V$. It depends solely on:
   1. Shape, dimensions, and surface area of the conductor.
   2. Surrounding medium permittivity ($\epsilon = K\epsilon_0$).
   3. Proximity of neighboring grounded or ungrounded conductors.
2. Isolated Spherical Conductor (Radius $R$)
Placing a charge $Q$ on an isolated sphere yields potential $V = \frac{1}{4\pi\epsilon_0}\frac{Q}{R}$ (taking infinity as reference $V(\infty) = 0$): $$\mathbf{C = 4\pi\epsilon_0 R}$$


* In a medium of dielectric constant $K$: $C_{\text{medium}} = 4\pi\epsilon_0 K R = K C_{\text{vacuum}}$.
* Capacitance of Planet Earth: With radius $R \approx 6400\ \text{km} = 6.4 \times 10^6\ \text{m}$: $$C_{\text{Earth}} = \frac{6.4 \times 10^6}{9 \times 10^9} \approx 711\ \mu\text{F} \quad (\text{Demonstrating that } 1\ \text{F is an astronomical capacity!})$$
3. Electrostatic Self-Energy & Energy Density
The work performed by an external agent against internal Coulomb repulsion in charging a capacitor from $0$ to $Q$ is stored as electrostatic field energy: $$W = \int_0^Q \frac{q}{C} dq = \mathbf{U = \frac{Q^2}{2C} = \frac{1}{2} C V^2 = \frac{1}{2} Q V}$$


* Spatial Distribution of Energy: The energy is localized entirely within the electric field surrounding the conductor with volume energy density: $$\mathbf{u_E = \frac{dU}{dV_{\text{vol}}} = \frac{1}{2}\epsilon_0 E^2} \quad \left(\text{or } \frac{1}{2}\epsilon_0 K E^2 \text{ inside a dielectric}\right)$$
4. Charge Redistribution & Heat Loss Theorem
When two isolated charged conductors $(C_1, V_1)$ and $(C_2, V_2)$ are connected by a thin conducting wire:


1. Charge flows from higher potential to lower potential until a common potential $V$ is established: $$\mathbf{V = \frac{Q_1 + Q_2}{C_1 + C_2} = \frac{C_1 V_1 + C_2 V_2}{C_1 + C_2}}$$
2. Final charges on the conductors: $$Q_1' = C_1 V = \left(\frac{C_1}{C_1 + C_2}\right) Q_{\text{total}}, \qquad Q_2' = C_2 V = \left(\frac{C_2}{C_1 + C_2}\right) Q_{\text{total}} \implies \mathbf{\frac{Q_1'}{Q_2'} = \frac{C_1}{C_2}}$$ For spherical conductors ($C \propto R$): $\frac{Q_1'}{Q_2'} = \frac{R_1}{R_2}$, and surface charge densities scale inversely: $\mathbf{\frac{\sigma_1}{\sigma_2} = \frac{R_2}{R_1}}$.
3. Universal Heat Dissipation Formula: $$\Delta H = U_{\text{initial}} - U_{\text{final}} = \left(\frac{1}{2}C_1 V_1^2 + \frac{1}{2}C_2 V_2^2\right) - \frac{1}{2}(C_1 + C_2)V^2$$ $$\mathbf{\Delta H = \frac{C_1 C_2}{2(C_1 + C_2)} (V_1 - V_2)^2}$$ Notice: The dissipated heat $\Delta H$ is strictly non-negative ($\Delta H \ge 0$) and is completely independent of the resistance of the connecting wire!


________________


1.2 Canonical Capacitor Geometries
1. Parallel Plate Capacitor
Consists of two planar conducting plates of area $A$ placed parallel at separation $d$ ($d \ll \sqrt{A}$ to minimize fringe fields).


* Oppositely charged with $+Q$ and $-Q \implies \sigma = Q/A$.
* Electric field between plates: $E = \frac{\sigma}{\epsilon_0} = \frac{Q}{\epsilon_0 A}$ (outside plates, $E = 0$).
* Potential difference: $V = E d = \frac{Q d}{\epsilon_0 A}$.
* Capacitance: $$\mathbf{C_0 = \frac{\epsilon_0 A}{d}}$$
* Attractive Force Between Plates: The positive plate does not exert a force on itself; it experiences the electric field established exclusively by the negative plate: $$E_{\text{negative plate}} = \frac{\sigma}{2\epsilon_0} = \frac{Q}{2\epsilon_0 A}$$ $$\mathbf{F = Q E_{\text{other}} = \frac{Q^2}{2\epsilon_0 A} = \frac{1}{2}\epsilon_0 A E^2 = \frac{1}{2} C \frac{V^2}{d}}$$
* Electrostatic Pressure on Conducting Plates: $$\mathbf{P = \frac{F}{A} = \frac{\sigma^2}{2\epsilon_0} = \frac{1}{2}\epsilon_0 E^2}$$
2. Concentric Spherical Capacitor (Radii $a < b$)
* Case I: Outer Sphere Earthed ($V_b = 0$): Charge $+Q$ given to inner sphere, inducing $-Q$ on inner face of outer sphere: $$V_a - V_b = \frac{kQ}{a} - \frac{kQ}{b} = \frac{Q}{4\pi\epsilon_0} \left(\frac{b - a}{ab}\right)$$ $$\mathbf{C = 4\pi\epsilon_0 \frac{ab}{b - a}}$$ (If outer radius $b \to \infty$, $C \to 4\pi\epsilon_0 a$, recovering the isolated sphere).
* Case II: Inner Sphere Earthed ($V_a = 0$), Charge Given to Outer Sphere: Acts as two capacitors in parallel: inner concentric system ($C_1 = 4\pi\epsilon_0 \frac{ab}{b-a}$) in parallel with the outer spherical surface to infinity ($C_2 = 4\pi\epsilon_0 b$): $$\mathbf{C_{\text{net}} = C_1 + C_2 = 4\pi\epsilon_0 \frac{ab}{b - a} + 4\pi\epsilon_0 b = 4\pi\epsilon_0 \frac{b^2}{b - a}}$$
3. Coaxial Cylindrical Capacitor (Radii $a < b$, Length $L \gg b$)
Inner cylinder carries linear charge density $+\lambda$, outer carries $-\lambda$: $$V = \int_a^b E dr = \int_a^b \frac{\lambda}{2\pi\epsilon_0 r} dr = \frac{\lambda}{2\pi\epsilon_0} \ln\left(\frac{b}{a}\right)$$ $$\mathbf{C = \frac{Q}{V} = \frac{2\pi\epsilon_0 L}{\ln(b/a)}} \iff \mathbf{\frac{C}{L} = \frac{2\pi\epsilon_0}{\ln(b/a)}}$$


________________


1.3 Dielectrics in Capacitors & Bound Charges
When an insulating dielectric material of dielectric constant $K$ is placed in an external field $E_0$, atomic dipoles align, creating an internal polarization field $E_p$ that opposes $E_0$: $$E_{\text{net}} = E_0 - E_p = \frac{E_0}{K}$$


* Induced Surface Charge Density ($\sigma_p$): $$E_{\text{net}} = \frac{\sigma - \sigma_p}{\epsilon_0} = \frac{\sigma}{K\epsilon_0} \implies \mathbf{\sigma_p = \sigma \left(1 - \frac{1}{K}\right)}$$ $$\mathbf{Q_p = Q \left(1 - \frac{1}{K}\right)}$$
1. Partially Filled Capacitor (Slab of Thickness $t < d$, Area $A$)
The effective air separation decreases because the dielectric layer of thickness $t$ presents an effective electrical thickness of $t/K$: $$V = E_0(d - t) + E_{\text{medium}} t = \frac{\sigma}{\epsilon_0}(d - t) + \frac{\sigma}{K\epsilon_0}t = \frac{Q}{\epsilon_0 A}\left[d - t + \frac{t}{K}\right]$$ $$\mathbf{C = \frac{\epsilon_0 A}{d - t + \frac{t}{K}} = \frac{\epsilon_0 A}{d - t\left(1 - \frac{1}{K}\right)}}$$


* For a Conducting Metallic Slab ($K = \infty$): $$\mathbf{C = \frac{\epsilon_0 A}{d - t}}$$
2. Multiple Slabs & Variable Dielectrics
* Slabs in Series (Thicknesses $t_i$, Constants $K_i$): $$\mathbf{C = \frac{\epsilon_0 A}{d - \sum t_i + \sum \frac{t_i}{K_i}}}$$
* Continuous Variable Dielectric $K(x)$ along field direction: Divide into infinitesimal series slices of thickness $dx$: $$\mathbf{\frac{1}{C} = \int_0^d \frac{dx}{\epsilon_0 K(x) A}}$$


________________


1.4 Master Invariant Table: Dielectric Insertion
Parameter
	Battery Disconnected ($Q = \text{constant}$)
	Battery Connected ($V = \text{constant}$)
	Capacitance ($C$)
	Increases by $K$: $C' = K C_0$
	Increases by $K$: $C' = K C_0$
	Charge ($Q$)
	CONSTANT: $Q' = Q_0$
	Increases by $K$: $Q' = K Q_0$
	Potential Difference ($V$)
	Decreases by $K$: $V' = V_0 / K$
	CONSTANT: $V' = V_0$
	Electric Field ($E$)
	Decreases by $K$: $E' = E_0 / K$
	CONSTANT: $E' = E_0 = V_0/d$
	Stored Energy ($U$)
	Decreases by $K$: $U' = \frac{U_0}{K}$
	Increases by $K$: $U' = K U_0$
	Work Done by Battery
	$W_{\text{battery}} = 0$
	$W_{\text{battery}} = \Delta Q \cdot V_0 = (K - 1) C_0 V_0^2$
	Heat Dissipated
	$\Delta H = 0$
	$\Delta H = W_{\text{bat}} - \Delta U = \frac{1}{2}(K - 1) C_0 V_0^2$
	Force on a Dielectric Slab Being Inserted into a Capacitor:
Because fringing electric field lines curve outwards at the edges of the plates, they exert an unbalanced component of electrostatic force pulling the dielectric slab inward:


* Battery Connected ($V = \text{constant}$): $$C(x) = \frac{\epsilon_0 b}{d}[L - x + K x] = \frac{\epsilon_0 b}{d}[L + (K - 1)x]$$ $$\mathbf{F = +\frac{1}{2} V^2 \frac{dC}{dx} = \frac{\epsilon_0 b V^2 (K - 1)}{2 d} \quad (\text{Constant inward pulling force})}$$
* Battery Disconnected ($Q = \text{constant}$): $$\mathbf{F = -\frac{dU}{dx} = +\frac{Q^2}{2 C^2} \frac{dC}{dx} = \frac{Q^2 d (K - 1)}{2\epsilon_0 b [L + (K - 1)x]^2}}$$


________________


2. RC Circuits, Transients & Network Theorems
![Capacitance Rc Circuits And Transient Analytics](/media/capacitance_rc_circuits_and_transient_analytics.webp) Description: Two-panel reference diagram for transient RC analytics and network reduction: (Panel A) Growth and decay curves for charge q(t) and current i(t) with exponential time constant tau = RC, demonstrating the universal 50% battery energy dissipation theorem; (Panel B) Circuit reduction rules at temporal boundaries (t = 0+ short circuit vs. t -> infinity open circuit) and topological reductions for balanced bridge networks and infinite ladders.
2.1 Charging of a Capacitor (Series RC Circuit)
Consider an uncharged capacitor $C$ in series with resistor $R$ connected to a DC source of EMF $\mathcal{E}$ via a switch closed at $t = 0$: $$\mathcal{E} - i R - \frac{q}{C} = 0 \implies R \frac{dq}{dt} = \mathcal{E} - \frac{q}{C}$$ Integrating with boundary condition $q(0) = 0$: $$\int_0^q \frac{dq}{C\mathcal{E} - q} = \int_0^t \frac{dt}{RC} \implies -\ln\left(\frac{C\mathcal{E} - q}{C\mathcal{E}}\right) = \frac{t}{RC}$$
1. Master Growth & Decay Trajectories
* Instantaneous Charge: $$\mathbf{q(t) = Q_0 \left(1 - e^{-t / \tau}\right)} \quad \text{where } Q_0 = C\mathcal{E}, \quad \mathbf{\tau = RC} \text{ (Time Constant)}$$
* Instantaneous Current: $$\mathbf{i(t) = \frac{dq}{dt} = \frac{\mathcal{E}}{R} e^{-t / \tau} = I_0 e^{-t / \tau}}$$
* Component Voltages: $$V_C(t) = \frac{q(t)}{C} = \mathcal{E}\left(1 - e^{-t / \tau}\right), \qquad V_R(t) = i(t) R = \mathcal{E} e^{-t / \tau}$$
2. Physical Role of the Time Constant ($\tau = RC$)
* Dimensions: $[R][C] = [\text{V}/\text{A}][\text{C}/\text{V}] = [\text{s}] = [T]$.
* At $t = \tau$: $$q(\tau) = Q_0 (1 - e^{-1}) \approx \mathbf{0.632 Q_0} \quad (\text{Capacitor reaches } 63.2\% \text{ of saturation charge})$$ $$i(\tau) = I_0 e^{-1} \approx \mathbf{0.368 I_0} \quad (\text{Current decays to } 36.8\% \text{ of initial surge})$$
* Effective charging time: At $t = 5\tau$, $q \approx 0.993 Q_0$ ($99.3\%$ charged, considered full steady state).
3. Universal 50% Energy Dissipation Invariant
During the full charging of a capacitor from an uncharged state to steady state ($t \to \infty$):


1. Work Done by Battery: $$W_{\text{battery}} = Q_0 \mathcal{E} = (C\mathcal{E})\mathcal{E} = \mathbf{C\mathcal{E}^2}$$
2. Electrostatic Energy Stored in Capacitor: $$U_{\text{stored}} = \frac{1}{2} C \mathcal{E}^2$$
3. Total Joule Heat Dissipated in Resistor: $$H = \int_0^\infty i^2 R dt = \int_0^\infty \left(\frac{\mathcal{E}}{R}e^{-t/RC}\right)^2 R dt = \frac{\mathcal{E}^2}{R} \left[-\frac{RC}{2}e^{-2t/RC}\right]_0^\infty = \mathbf{\frac{1}{2} C \mathcal{E}^2}$$
* Fundamental Law: Exactly $50\%$ of the energy delivered by the battery is dissipated as heat in the circuit resistance, irrespective of the value of $R$!


________________


2.2 Discharging of a Capacitor
A capacitor charged to initial charge $Q_0$ discharged across resistor $R$ at $t = 0$: $$\frac{q}{C} + i R = 0 \implies \frac{q}{C} + R\frac{dq}{dt} = 0$$ $$\mathbf{q(t) = Q_0 e^{-t / \tau}}$$ $$\mathbf{i(t) = -\frac{dq}{dt} = \frac{Q_0}{RC} e^{-t / \tau} = I_0 e^{-t / \tau}}$$


* At $t = \tau$: $q(\tau) = Q_0 / e \approx 0.368 Q_0$.
* Total heat generated in the resistor equals the entire initial electrostatic stored energy: $$H = \int_0^\infty i^2 R dt = \mathbf{\frac{Q_0^2}{2C}}$$


________________


2.3 Boundary Behavior & Multi-Loop Circuit Reduction
In solving complex circuits containing batteries, resistors, and capacitors:
1. Temporal Boundary States
* Instant $t = 0^+$ (Immediately after closing switch):
   * Uncharged capacitor has $q = 0 \implies V_C = 0$.
   * Short-Circuit Rule: Replace every uncharged capacitor with a zero-resistance plain connecting wire!
   * Current through the circuit is maximum, determined solely by resistive pathways: $I_{\text{initial}} = \frac{\mathcal{E}}{R_{\text{net}}}$.
* Steady State $t \to \infty$ (Long time after closing switch):
   * Fully charged capacitor blocks DC current: $i_C = 0$.
   * Open-Circuit Rule: Replace every capacitor branch with an open break (infinite resistance)!
   * Analyze the remaining purely resistive network to determine branch currents, then calculate node voltages to find the final capacitor charge: $Q_{\text{final}} = C V_{\text{open-circuit}}$.
2. Thevenin Method for Effective Time Constant $\tau_{\text{eff}}$
In multi-resistor networks with a single capacitor: $$\mathbf{\tau = R_{\text{th}} C}$$ Where $R_{\text{th}}$ is the equivalent resistance across the two terminals of the capacitor, obtained by:


1. Removing the capacitor from the circuit.
2. Replacing all ideal voltage sources with short circuits (plain wires).
3. Replacing all ideal current sources with open circuits.
4. Calculating the net resistance between the open capacitor terminals.


________________


2.4 Charge Distribution on Parallel Metallic Plates
For $N$ parallel conducting plates arranged face-to-face:


1. Outer Surfaces Rule: The outermost surface of the first plate and the outermost surface of the last plate always carry equal charges, each equal to half the net algebraic charge of the entire assembly: $$\mathbf{q_{\text{outer, left}} = q_{\text{outer, right}} = \frac{1}{2} \sum_{k=1}^N Q_k}$$
2. Facing Surfaces Rule: Any two facing inner surfaces carry strictly equal and opposite charges: $$q_{\text{face } A} = -q_{\text{face } B}$$
3. Alternately Interconnected Plates: $N$ equally spaced parallel plates connected alternately to two terminals form $(N - 1)$ identical capacitors in parallel: $$\mathbf{C_{\text{total}} = (N - 1) \frac{\epsilon_0 A}{d}}$$


________________


3. High-Yield Problem Archetypes & JEE Pitfalls
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Inter-Plate Force Calculation
	Using $F = \frac{Q^2}{\epsilon_0 A}$ by taking $F = Q E_{\text{net}}$.
	Total field $E_{\text{net}} = \frac{\sigma}{\epsilon_0}$ is the sum of both plates. A plate cannot exert force on itself; it only experiences the field of the opposite plate: $\mathbf{F = \frac{Q^2}{2\epsilon_0 A}}$.
	2
	Dielectric Force under Constant Voltage
	Claiming force is zero because $E$ is constant.
	Fringing fields at the edges pull the slab. Under constant voltage, $F = \mathbf{+\frac{1}{2}V^2 \frac{dC}{dx} = \frac{\epsilon_0 b V^2 (K-1)}{2d}}$ (constant inward pull).
	3
	Heat Dissipated in RC Charging
	Stating heat loss is $C\mathcal{E}^2$ or depends on $R$.
	Work done by battery is $C\mathcal{E}^2$, stored energy is $\frac{1}{2}C\mathcal{E}^2$. Heat loss is strictly $\mathbf{\frac{1}{2}C\mathcal{E}^2}$, independent of resistance $R$!
	4
	Dielectric Slab with Constant Charge
	Assuming energy increases when dielectric is inserted.
	Battery disconnected $\implies Q = \text{const}$. $U = \frac{Q^2}{2KC_0} = \mathbf{U_0 / K}$ (energy decreases; system does work pulling slab in).
	5
	Inner Sphere Earthed vs Outer Earthed
	Confusing $C = \frac{4\pi\epsilon_0 ab}{b-a}$ with inner earthing.
	Inner earthing yields a parallel combination with infinity: $\mathbf{C = 4\pi\epsilon_0 \frac{b^2}{b-a}}$.
	6
	Variable Dielectric in Series
	Integrating $C = \int \frac{\epsilon_0 K(x) A}{dx}$.
	Slices along the field line are in series: must integrate reciprocal capacitance: $\mathbf{\frac{1}{C} = \int_0^d \frac{dx}{\epsilon_0 K(x) A}}$.
	7
	Initial Current at $t = 0^+$
	Treating capacitor as an open circuit initially.
	At $t = 0^+$, uncharged capacitor has $V_C = 0$ and acts as a zero-resistance short circuit. Open-circuit behavior occurs only at $t \to \infty$.
	8
	Work Done by Battery in Dielectric Insertion
	Stating $W_{\text{bat}} = \Delta U$.
	Battery delivers charge at constant $V$: $W_{\text{bat}} = \Delta Q \cdot V = \mathbf{(K - 1)C_0 V^2} = \mathbf{2 \Delta U}$! The remaining $50\%$ is dissipated as heat.
	9
	Multi-Capacitor Redistribution Heat Loss
	Calculating heat loss by summing $\frac{1}{2}CV^2$ for wrong sign combinations.
	When oppositely charged plates are joined, algebraic signs must be preserved: $\Delta H = \mathbf{\frac{C_1 C_2}{2(C_1+C_2)} (V_1 + V_2)^2}$.
	10
	Outermost Plate Charges in Multi-Plate Systems
	Assuming outer surfaces are uncharged.
	Outermost exterior faces always carry $\mathbf{\frac{1}{2}\sum Q_i}$, ensuring zero field inside the conductor bulk.
	

________________