Physics Revision Context: Chapter 96 — Nuclear Physics: Binding Energy, Radioactivity & Nuclear Reactions
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/Nuclear Physics/, Nuclear Physics Theory.pdf, Nuclear Physics Exercises.pdf, Nuclear Physics Exercise Solutions.pdf, Nuclear Physics HLP.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Nuclear Physics, Binding Energy, Radioactivity & Nuclear Reactions (Properties of Nucleus: Constituents $Z, N, A$, Nuclear radius empirical law $R = R_0 A^{1/3}$ ($R_0 \approx 1.1 - 1.2\ \text{fm}$), Nuclear density invariant $\rho \approx 2.3 \times 10^{17}\ \text{kg/m}^3$, Strong nuclear force characteristics; Mass Defect & Binding Energy: $\Delta m = [Z M(^1\text{H}) + (A - Z)m_n] - M_{\text{atom}}$, $\text{BE} = \Delta m \cdot c^2 = \Delta m(\text{amu}) \times 931.5\ \text{MeV}$, Binding energy per nucleon $\text{BE}/A$ curve topology, Stability peak at $^{56}\text{Fe}$ ($8.75\ \text{MeV/nucleon}$), Fission and fusion energy release energetics; Radioactivity & Decay Kinetics: Rutherford-Soddy disintegration law $N(t) = N_0 e^{-\lambda t}$, Half-life $T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$, Mean life $\tau = 1/\lambda \approx 1.443 T_{1/2}$, Activity $A(t) = \lambda N(t) = A_0 e^{-\lambda t}$, Units (Bq, Ci, rd), Parallel branching decays $\lambda_{\text{eff}} = \lambda_1 + \lambda_2$ and $\frac{1}{T_{1/2,\text{eff}}} = \frac{1}{T_1} + \frac{1}{T_2}$, Secular equilibrium $\lambda_1 N_1 = \lambda_2 N_2$; Decay Modes & Exact Q-Values: $\alpha$-decay $Q = [M(X) - M(Y) - M(^4\text{He})]c^2$, Alpha kinetic energy $K_\alpha = Q\frac{A-4}{A}$, $\beta^-$-decay $Q = [M(X) - M(Y)]c^2$, $\beta^+$-decay $Q = [M(X) - M(Y) - 2m_e]c^2$ with $2m_e$ threshold, Electron capture, $\gamma$-de-excitation; Nuclear Fission & Fusion: $^{235}\text{U}$ thermal neutron fission ($200\ \text{MeV}$ budget), Neutron multiplication factor $k$ regimes, Reactor components (Fuel, Moderator, Control rods, Coolant), Thermonuclear fusion in stars (p-p cycle, D-T fusion); High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Nuclear Dimensions, Binding Energy & Fission/Fusion
![Nuclear Binding Energy Curve And Fission Fusion Energetics](/media/nuclear_binding_energy_curve_and_fission_fusion_energetics.webp) Description: Two-panel reference diagram for nuclear energetics: (Panel A) Summary of nuclear radius scaling, density constancy across all nuclides, mass defect formulas, and the binding energy per nucleon stability curve illustrating fusion and fission driving forces; (Panel B) Uranium-235 thermal neutron fission kinematics, prompt neutron release, multiplication factor k operating regimes, and nuclear reactor engineering components.
1.1 Properties of the Nucleus & Nuclear Dimensions
A nucleus $_Z^A X$ contains $Z$ protons and $N = A - Z$ neutrons (collectively termed nucleons).


* Unified Atomic Mass Unit ($1\ \text{u}$ or $1\ \text{amu}$): $$1\ \text{u} = \frac{1}{12} \times \text{mass of one } {}^{12}\text{C} \text{ atom} = 1.66054 \times 10^{-27}\ \text{kg} \equiv \mathbf{931.5\ \text{MeV}/c^2}$$
   * Proton rest mass: $m_p = 1.007276\ \text{u} = 1.6726 \times 10^{-27}\ \text{kg}$.
   * Neutron rest mass: $m_n = 1.008665\ \text{u} = 1.6749 \times 10^{-27}\ \text{kg}$ ($m_n > m_p$).
   * Electron rest mass: $m_e = 0.0005486\ \text{u} \equiv 0.511\ \text{MeV}/c^2$.
1. Empirical Nuclear Radius & Invariant Density
* Radius of a Nucleus ($R$): $$\mathbf{R = R_0 A^{1/3}}$$ Where $R_0 \approx 1.1 - 1.2\ \text{fm}$ ($1\ \text{fm} = 10^{-15}\ \text{m}$).
* Nuclear Volume ($V$): $$V = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi R_0^3 A \propto A$$
* Nuclear Density ($\rho$): $$\mathbf{\rho = \frac{\text{Mass}}{\text{Volume}} = \frac{A \cdot m_{\text{nucleon}}}{\frac{4}{3}\pi R_0^3 A} = \frac{3 m_{\text{nucleon}}}{4\pi R_0^3} \approx 2.3 \times 10^{17}\ \text{kg/m}^3}$$
   * Fundamental Invariant: Nuclear matter density is constant and independent of mass number $A$ or atomic number $Z$ for all nuclei across the periodic table!
2. The Nuclear Force
1. Strong Interaction: The strongest fundamental force in nature ($\approx 100 \times$ electrostatic repulsion between protons).
2. Short-Ranged: Operates strictly within nuclear dimensions ($\sim 1 - 2\ \text{fm}$), vanishing rapidly beyond $r > 3\ \text{fm}$.
3. Charge Independence: The nuclear force between two nucleons is identical: $F_{pp} \approx F_{pn} \approx F_{nn}$ (governed by exchange of $\pi$-mesons).
4. Saturation & Repulsive Core: Saturated by nearest neighbors. At extremely short separations ($r < 0.7\ \text{fm}$), the nuclear force becomes strongly repulsive, preventing the nucleus from collapsing into an infinite-density singularity.


________________


1.2 Mass Defect & Binding Energy
1. Mass Defect ($\Delta m$)
The measured mass of any stable nucleus $M_{\text{nuc}}$ is always strictly less than the combined sum of the individual rest masses of its constituent free nucleons: $$\mathbf{\Delta m = [Z m_p + (A - Z) m_n] - M_{\text{nuc}}}$$ In terms of neutral atomic masses ($M_{\text{atom}}$), where electron masses cancel out: $$\mathbf{\Delta m = [Z M(^1\text{H}) + (A - Z) m_n] - M_{\text{atom}}}$$
2. Binding Energy ($\text{BE}$)
The energy required to completely dismantle a nucleus into its constituent protons and neutrons infinitely separated: $$\mathbf{\text{BE} = \Delta m \cdot c^2 = \Delta m(\text{in u}) \times 931.5\ \text{MeV}}$$
3. Binding Energy per Nucleon ($\text{BE} / A$) & Stability Curve
$\text{BE}/A$ serves as the definitive physical measure of nuclear stability:


1. Light Nuclei ($A < 20$): $\text{BE}/A$ rises rapidly with prominent local spikes for tightly bound alpha-conjugate even-even nuclei ($^4\text{He} \approx 7.07\ \text{MeV}$, $^{12}\text{C} \approx 7.68\ \text{MeV}$, $^{16}\text{O} \approx 7.98\ \text{MeV}$).
2. Maximum Stability Plateau ($30 < A < 120$): Rises to a broad maximum around Iron: $$\mathbf{(\text{BE}/A)_{\max} \approx 8.75 - 8.8\ \text{MeV/nucleon} \quad \text{for } {}^{56}\text{Fe} \text{ and } {}^{62}\text{Ni}}$$
3. Heavy Nuclei ($A > 120$): Declines gradually to $\approx 7.6\ \text{MeV/nucleon}$ for $^{238}\text{U}$, driven by cumulative Coulomb electrostatic repulsion among the $Z$ protons.
4. Reaction Energetics from the $\text{BE}/A$ Curve
* Nuclear Fission: Splitting a heavy nucleus ($A \approx 240, \text{BE}/A \approx 7.6\ \text{MeV}$) into two intermediate fragments ($A \approx 120, \text{BE}/A \approx 8.5\ \text{MeV}$): $$\mathbf{Q \approx 240 \times (8.5 - 7.6) \approx 200\ \text{MeV} \quad (\approx 0.9\ \text{MeV/nucleon})}$$
* Nuclear Fusion: Fusing light nuclei ($A \le 4$) into tightly bound helium ($^4\text{He}, \text{BE}/A \approx 7.1\ \text{MeV}$): Yields tremendous energy per unit mass ($\approx 6 - 7\ \text{MeV/nucleon}$), significantly exceeding fission energy yield per gram!


________________


1.3 Nuclear Fission & Reactor Mechanics
1. Fission of Uranium-235
A slow (thermal) neutron of energy $\approx 0.025\ \text{eV}$ induces fission in $^{235}\text{U}$: $$_{92}^{235}\text{U} + _0^1 n \to _{92}^{236}\text{U}^* \to _{56}^{141}\text{Ba} + _{36}^{92}\text{Kr} + 3\ _0^1 n + Q \ (\approx 200\ \text{MeV})$$


* On average, $2.5$ fast prompt neutrons ($E \sim 2\ \text{MeV}$) are liberated per fission event.
2. Multiplication Factor ($k$) & Chain Reaction Regimes
$$k = \frac{\text{Number of neutrons in current generation}}{\text{Number of neutrons in preceding generation}}$$


* $k < 1$: Subcritical (chain reaction dies out).
* $k = 1$: Critical (steady, controlled power output in a nuclear power plant).
* $k > 1$: Supercritical (exponentially multiplying chain reaction; explosive atomic bomb).
3. Essential Components of a Nuclear Reactor
1. Fissile Fuel: Enriched Uranium ($2 - 3\%\ {}^{235}\text{U}$) or $^{239}\text{Pu}$.
2. Moderator: Slows down fast prompt neutrons ($2\ \text{MeV}$) to thermal velocities ($0.025\ \text{eV}$) through elastic collisions with nuclei of comparable mass:
   * Heavy Water ($\text{D}_2\text{O}$), High-purity Graphite ($\text{C}$), Ordinary water ($\text{H}_2\text{O}$).
3. Control Rods: Materials with massive neutron-capture cross-sections that absorb neutrons without fissioning to maintain $k = 1$:
   * Cadmium ($\text{Cd}$), Boron ($\text{B}$).
4. Coolant: Extracts intense fission heat from the core and transfers it to steam boilers:
   * Liquid Sodium ($\text{Na}$), Heavy water, Pressurized $\text{H}_2\text{O}$, Carbon dioxide gas ($\text{CO}_2$).
5. Biological Shield: Thick walls of lead and heavy concrete to absorb escaping neutrons and $\gamma$-radiation.


________________


2. Radioactivity, Decay Kinetics & Nuclear Decay Modes
![Radioactive Decay Kinetics Alpha Beta Gamma And Q Values](/media/radioactive_decay_kinetics_alpha_beta_gamma_and_q_values.webp) Description: Two-panel reference diagram for radioactive decay dynamics: (Panel A) Statistical exponential decay law, half-life and mean-life relations, activity scaling, parallel branching decay rules, and secular equilibrium; (Panel B) Master taxonomy of alpha, beta minus, beta plus, and gamma decay modes with exact Q-value equations in terms of atomic masses, alpha kinetic energy division, and radiation penetration metrics.
2.1 The Law of Radioactive Decay
Radioactive decay is a spontaneous, purely statistical nuclear phenomenon unaffected by ambient temperature, pressure, gravitational fields, or chemical combinations.
1. Exponential Decay Law (Rutherford-Soddy Law)
The rate of disintegration $-\frac{dN}{dt}$ at any instant $t$ is directly proportional to the number of radioactive nuclei $N(t)$ present at that moment: $$-\frac{dN}{dt} = \lambda N \implies \mathbf{N(t) = N_0 e^{-\lambda t}}$$ Where $\lambda$ is the decay constant ($\text{s}^{-1}$), an intrinsic fingerprint of each radionuclide.
2. Half-Life ($T_{1/2}$)
The time required for half of the initial radioactive nuclei to disintegrate: $$N(T_{1/2}) = \frac{N_0}{2} \implies e^{-\lambda T_{1/2}} = \frac{1}{2}$$ $$\mathbf{T_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.69315}{\lambda}}$$


* Nuclei Remaining After $n$ Half-Lives ($t = n T_{1/2}$): $$\mathbf{N(t) = N_0 \left(\frac{1}{2}\right)^n = \frac{N_0}{2^{t / T_{1/2}}}}$$
3. Mean Life / Average Life ($\tau$)
The sum of lifetimes of all individual nuclei divided by the initial total number: $$\mathbf{\tau = \frac{1}{\lambda} = \frac{T_{1/2}}{\ln 2} \approx 1.443 T_{1/2}}$$


* At time $t = \tau$: $$N(\tau) = N_0 e^{-1} = \frac{N_0}{e} \approx 0.368 N_0$$ (In one mean life, $63.2\%$ of the original nuclei have decayed and $36.8\%$ remain active!).
4. Activity ($A$ or $R$)
The instantaneous rate of radioactive disintegrations: $$\mathbf{A(t) = -\frac{dN}{dt} = \lambda N(t) = A_0 e^{-\lambda t}}$$


* Units of Activity:
   * SI Unit: Becquerel ($\text{Bq}$) $= 1\ \text{disintegration per second (dps)}$.
   * Historical Standard: Curie ($\text{Ci}$) $= 3.7 \times 10^{10}\ \text{Bq} = 3.7 \times 10^{10}\ \text{dps}$ (activity of $1\ \text{g}$ of radium-226).
   * Laboratory Unit: Rutherford ($\text{rd}$) $= 10^6\ \text{dps}$.
5. Parallel Branching Decay
When a parent nuclide decays simultaneously via two independent pathways with decay constants $\lambda_1$ and $\lambda_2$: $$\mathbf{\lambda_{\text{eff}} = \lambda_1 + \lambda_2} \implies \mathbf{\frac{1}{T_{1/2,\text{eff}}} = \frac{1}{T_1} + \frac{1}{T_2}} \implies \mathbf{T_{1/2,\text{eff}} = \frac{T_1 T_2}{T_1 + T_2}}$$


* Fractional yield of product 1: $\frac{\lambda_1}{\lambda_1 + \lambda_2}$.
6. Secular Equilibrium
In a radioactive series where a long-lived parent ($T_1 \gg T_2$) decays into a short-lived daughter: $$\mathbf{\lambda_1 N_1 = \lambda_2 N_2 \implies A_1 = A_2 \implies \frac{N_1}{N_2} = \frac{T_1}{T_2}}$$


________________


2.2 Modes of Radioactive Decay & Q-Values
1. Alpha ($\alpha$) Decay
Emission of a doubly ionized helium nucleus ($^4_2\text{He}$): $$^A_Z X \to {}^{A-4}_{Z-2} Y + {}^4_2\text{He} + Q$$


* $Q$-Value in Terms of Neutral Atomic Masses: $$\mathbf{Q_\alpha = [M(X) - M(Y) - M(^4\text{He})] c^2}$$
* Kinetic Energy Division (Parent initially at rest): By linear momentum conservation ($p_\alpha = p_Y$): $$K_\alpha = \frac{p^2}{2 m_\alpha}, \qquad K_Y = \frac{p^2}{2 m_Y}$$ $$\mathbf{K_\alpha = Q \left(\frac{m_Y}{m_Y + m_\alpha}\right) \approx Q \left(\frac{A - 4}{A}\right)}$$ $$\mathbf{K_Y = Q \left(\frac{m_\alpha}{m_Y + m_\alpha}\right) \approx Q \left(\frac{4}{A}\right)}$$ The alpha particle carries away the overwhelming majority ($\approx \frac{A-4}{A} > 98\%$) of the available disintegration energy!
2. Beta-Minus ($\beta^-$) Decay
Occurs in neutron-rich nuclei where a neutron converts into a proton, emitting an electron ($e^-$) and an electron antineutrino ($\bar{\nu}$): $$^A_Z X \to {}^A_{Z+1} Y + e^- + \bar{\nu} + Q$$


* Nuclear reaction: $n \to p + e^- + \bar{\nu}$.
* $Q$-Value in Terms of Neutral Atomic Masses: $$Q_{\beta^-} = [(M_{\text{nuc}}(X)) - (M_{\text{nuc}}(Y) + m_e)] c^2$$ Adding and subtracting $Z m_e$, the electron masses cancel out identically: $$\mathbf{Q_{\beta^-} = [M(X) - M(Y)] c^2}$$
* Continuous Energy Spectrum: The kinetic energy $Q$ is shared continuously between the emitted $\beta^-$ particle and the antineutrino: $K_{\beta^-} + E_{\bar{\nu}} = Q \implies K_{\beta^-,\max} = Q$.
3. Positron ($\beta^+$) Decay
Occurs in proton-rich nuclei where a proton converts into a neutron, emitting a positron ($e^+$) and an electron neutrino ($\nu$): $$^A_Z X \to {}^A_{Z-1} Y + e^+ + \nu + Q$$


* Nuclear reaction: $p \to n + e^+ + \nu$ (energetically prohibited for free protons; possible only within bound nuclei).
* $Q$-Value in Terms of Neutral Atomic Masses: $$Q_{\beta^+} = [(M_{\text{nuc}}(X)) - (M_{\text{nuc}}(Y) + m_e)] c^2$$ Expressing in neutral atomic masses introduces an unavoidable $2 m_e$ term: $$\mathbf{Q_{\beta^+} = [M(X) - M(Y) - 2 m_e] c^2}$$
* Threshold Energy Condition: Positron decay is energetically spontaneous only if: $$\mathbf{M(X) - M(Y) \ge 2 m_e \approx 1.022\ \text{MeV}/c^2}$$
4. Electron Capture (EC)
A proton-rich nucleus absorbs an inner orbital electron (usually from the $K$-shell): $$^A_Z X + e^- \to {}^A_{Z-1} Y + \nu + Q$$


* $Q$-Value in Terms of Neutral Atomic Masses: $$\mathbf{Q_{\text{EC}} = [M(X) - M(Y)] c^2 - E_B}$$ (Can occur even when $M(X) - M(Y) < 2 m_e$, where $\beta^+$ decay is forbidden!).
5. Gamma ($\gamma$) Decay
Emission of high-energy electromagnetic photons ($E_\gamma \sim \text{keV} - \text{MeV}$) when an excited daughter nucleus drops to a lower or ground nuclear state: $$^A_Z X^* \to {}^A_Z X + \gamma$$


* Zero change in atomic number $Z$ or mass number $A$.


________________


3. High-Yield Problem Archetypes & Structural JEE Traps
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Nuclear Density Scaling with $A$
	Assuming heavier nuclei are significantly denser ($\rho \propto A$).
	Nuclear radius scales as $R \propto A^{1/3}$, making volume $V \propto A$. Hence nuclear density is strictly CONSTANT: $\rho \approx 2.3 \times 10^{17}\ \text{kg/m}^3$.
	2
	$\beta^+$ Decay Atomic Mass Formula
	Omitting the $2 m_e$ term in $Q$-value: writing $Q = [M(X) - M(Y)]c^2$.
	In positron decay, atomic mass conversion produces an extra daughter electron plus the emitted positron: $\mathbf{Q_{\beta^+} = [M(X) - M(Y) - 2m_e]c^2}$!
	3
	Alpha Kinetic Energy Share
	Setting $K_\alpha = Q$.
	Parent recoil absorbs momentum. Kinetic energy carried by alpha is strictly $\mathbf{K_\alpha = Q \left(\frac{A-4}{A}\right)}$.
	4
	Decay Constant Environmental Invariance
	Assuming heating or chemical reactions can accelerate radioactivity.
	The nuclear decay constant $\lambda$ is an intrinsic property of the nucleus, entirely unaffected by temperature, pressure, or chemical bonds.
	5
	Fraction Remaining After Half-Lives
	Subtracting linearly instead of halving exponentially.
	After $n$ half-lives, the remaining fraction is $\left(\frac{1}{2}\right)^n$, NOT $(1 - n/2)$.
	6
	Parallel Branching Half-Life
	Summing half-lives directly: $T_{\text{eff}} = T_1 + T_2$.
	Decay rates add: $\lambda_{\text{eff}} = \lambda_1 + \lambda_2 \implies \mathbf{\frac{1}{T_{\text{eff}}} = \frac{1}{T_1} + \frac{1}{T_2}}$.
	7
	Moderator Collision Mechanism
	Using heavy elements (like Lead) as reactor moderators.
	Maximum kinetic energy is transferred during elastic collision when colliding particles have comparable masses. Hence light nuclei ($\text{D}_2\text{O}, \text{C}$) are chosen.
	8
	Beta Spectrum Endpoint Energy
	Stating beta particles are emitted with a single discrete energy.
	Beta emission is a three-body decay. The beta particle exhibits a continuous energy spectrum up to maximum endpoint $K_{\max} = Q$, shared with the neutrino.
	9
	Nuclear Force Charge Independence
	Thinking proton-proton nuclear force is weaker than neutron-neutron force.
	The strong nuclear force is strictly charge-independent ($F_{pp} \approx F_{pn} \approx F_{nn}$). Protons feel additional repulsive Coulomb forces, but nuclear force itself is identical.
	10
	Binding Energy vs Stability
	Judging stability solely by total Binding Energy rather than $\text{BE}/A$.
	Total BE is higher in $^{238}\text{U}$ ($\approx 1800\ \text{MeV}$) than in $^{56}\text{Fe}$ ($\approx 492\ \text{MeV}$), but $^{56}\text{Fe}$ is far more stable because $\text{BE}/A$ is higher ($8.8\ \text{vs}\ 7.6\ \text{MeV/nucleon}$).
	

________________