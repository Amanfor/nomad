Physics Revision Context: Chapter 91 — Alternating Current, LCR Circuits & Power Analysis
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/Alternating Current/, Alternating Current Theory.pdf, Alternating Current Exercise.pdf, Alternating Current Solutions.pdf, Alternating Current HLP.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Alternating Current, LCR Circuits & Power Analysis (Sinusoidal AC wave kinematics, Mean/Average value over half-cycle $\langle i \rangle = \frac{2}{\pi}I_0 \approx 0.637 I_0$, RMS/Effective value $I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \approx 0.707 I_0$, Form factor $\approx 1.11$, AC+DC superposition $I_{\text{rms}} = \sqrt{a^2 + b^2/2}$, Hot-wire meter operation; AC Response of Pure Elements: Resistor $R$ in-phase, Inductor $L$ current lags by $90^\circ$ ($X_L = \omega L$), Capacitor $C$ current leads by $90^\circ$ ($X_C = \frac{1}{\omega C}$); Series LCR Circuits: Phasor addition $V_0 = \sqrt{V_R^2 + (V_L - V_C)^2}$, Impedance $Z = \sqrt{R^2 + (X_L - X_C)^2}$, Phase angle $\tan\phi = \frac{X_L - X_C}{R}$; Resonance in Series LCR: Resonance condition $X_L = X_C$, Resonance frequency $\omega_r = \frac{1}{\sqrt{LC}}$, $f_r = \frac{1}{2\pi\sqrt{LC}}$, Minimum impedance $Z = R$, Maximum current $I_0 = V_0/R$, Voltage magnification across $L$ and $C$ ($V_L = V_C = Q V_0$), Bandwidth $\Delta\omega = \frac{R}{L}$, Quality factor $Q = \frac{\omega_r L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}}$; Power in AC Circuits: Instantaneous power, Average true power $P_{\text{avg}} = V_{\text{rms}} I_{\text{rms}} \cos\phi = I_{\text{rms}}^2 R$, Apparent power $S = V_{\text{rms}} I_{\text{rms}}$, Power factor $\cos\phi = \frac{R}{Z}$, Wattless current $I_{\text{wattless}} = I_{\text{rms}}\sin\phi$, Choke coil operation; Transformers: Mutual induction principle, Turns ratio $\frac{V_s}{V_p} = \frac{N_s}{N_p} = \frac{I_p}{I_s} = k$, Step-up vs Step-down, Efficiency $\eta = \frac{P_{\text{out}}}{P_{\text{in}}}$, Loss mechanisms: Copper loss, Eddy current loss, Hysteresis loss, Flux leakage, Magnetostriction hum; High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Alternating Current Waveforms, Phasors & Series LCR Circuits
![Alternating Current Phasor Impedance And Lcr Series](/media/alternating_current_phasor_impedance_and_lcr_series.webp) Description: Two-panel reference diagram for alternating current circuits: (Panel A) Summary of single-element AC responses, reactance scaling, phasor impedance triangle, and the AC+DC quadrature superposition theorem; (Panel B) Series LCR resonance characteristics showing the current amplitude bell curve, half-power bandwidth Delta omega = R/L, and Quality factor Q as both tuning selectivity and reactive voltage magnification.
1.1 Alternating Waveform Kinematics: Average & RMS Values
An alternating current (or voltage) periodically alternates in direction and possesses zero net charge displacement over a full cycle: $$i(t) = I_0 \sin(\omega t + \phi), \qquad V(t) = V_0 \sin(\omega t + \phi)$$ Where $I_0, V_0$ are peak amplitudes, $\omega = 2\pi f = \frac{2\pi}{T}$ is angular frequency (rad/s), and $f$ is frequency (Hz).
1. Mean (Average) Value ($\langle i \rangle$ or $I_{\text{avg}}$)
Defined over an arbitrary time interval from $t_1$ to $t_2$ as: $$\langle i \rangle = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} i(t) dt$$


* Over a Full Cycle ($t = 0$ to $T$): Symmetrical positive and negative half-cycles cancel identically: $$\mathbf{\langle i \rangle_{\text{cycle}} = 0}$$ DC moving-coil galvanometers measure average current and therefore read zero when connected to an AC source.
* Over a Positive Half-Cycle ($t = 0$ to $T/2 = \pi/\omega$): $$\langle i \rangle_{\text{half}} = \frac{1}{\pi/\omega} \int_0^{\pi/\omega} I_0 \sin(\omega t) dt = \frac{\omega I_0}{\pi} \left[-\frac{\cos(\omega t)}{\omega}\right]0^{\pi/\omega} = \mathbf{\frac{2}{\pi} I_0 \approx 0.637 I_0}$$ $$\mathbf{\langle V \rangle{\text{half}} = \frac{2}{\pi} V_0 \approx 0.637 V_0}$$
2. Root Mean Square (RMS) / Effective Value ($I_{\text{rms}}$)
The RMS value represents the steady direct current (DC) that produces the same Joule heating in a given resistor over one full cycle as the alternating current: $$I_{\text{rms}} = \sqrt{\frac{1}{T} \int_0^T i^2(t) dt}$$


* For a sinusoidal wave $i(t) = I_0 \sin(\omega t)$: $$I_{\text{rms}}^2 = \frac{I_0^2}{T} \int_0^T \sin^2(\omega t) dt = \frac{I_0^2}{T} \int_0^T \left(\frac{1 - \cos(2\omega t)}{2}\right) dt = \frac{I_0^2}{2}$$ $$\mathbf{I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \approx 0.707 I_0}, \qquad \mathbf{V_{\text{rms}} = \frac{V_0}{\sqrt{2}} \approx 0.707 V_0}$$
* Form Factor: $$\text{Form Factor} = \frac{I_{\text{rms}}}{\langle i \rangle_{\text{half}}} = \frac{I_0/\sqrt{2}}{2I_0/\pi} = \mathbf{\frac{\pi}{2\sqrt{2}} \approx 1.11}$$
* Hot-Wire AC Instruments: Work on the thermal heating effect of current ($H \propto i^2$) and therefore measure RMS values directly, regardless of waveform direction.
* Household Standard (India): $V_{\text{rms}} = 220\ \text{V}$ at $50\ \text{Hz} \implies \mathbf{V_0 = \sqrt{2} \times 220\ \text{V} \approx 311.1\ \text{V}}$ (Peak voltage is significantly higher than rated RMS!).
3. Superposition of DC and Sinusoidal AC
When a direct current $a$ is superimposed on an AC current $b\sin(\omega t)$: $$i(t) = a + b\sin(\omega t)$$ $$I_{\text{rms}}^2 = \frac{1}{T}\int_0^T [a^2 + 2ab\sin\omega t + b^2\sin^2\omega t] dt = a^2 + 0 + \frac{b^2}{2}$$ $$\mathbf{I_{\text{rms}} = \sqrt{a^2 + \frac{b^2}{2}}}$$


________________


1.2 AC Response of Pure Circuit Elements
1. Pure Resistor ($R$)
Applying voltage $v(t) = V_0 \sin(\omega t)$: $$i(t) = \frac{v(t)}{R} = \frac{V_0}{R} \sin(\omega t) = I_0 \sin(\omega t)$$


* Phase Relation: Voltage and current are in phase ($\phi = 0$).
* Impedance: $Z = R$.
2. Pure Inductor ($L$)
Applying voltage $v(t) = V_0 \sin(\omega t)$: $$v(t) = L \frac{di}{dt} \implies di = \frac{V_0}{L} \sin(\omega t) dt \implies i(t) = -\frac{V_0}{\omega L} \cos(\omega t) = \mathbf{\frac{V_0}{\omega L} \sin\left(\omega t - \frac{\pi}{2}\right)}$$


* Phase Relation: Current lags voltage by $90^\circ$ ($\pi/2$ radians) (or voltage leads current by $90^\circ$).
* Inductive Reactance ($X_L$): $$\mathbf{X_L = \omega L = 2\pi f L} \quad (\text{in Ohms, } \Omega)$$
   * At DC ($f = 0$): $X_L = 0$ (ideal inductor behaves as a zero-resistance wire).
   * At very high frequency ($f \to \infty$): $X_L \to \infty$ (blocks high-frequency signals).
3. Pure Capacitor ($C$)
Applying voltage $v(t) = V_0 \sin(\omega t)$: $$q(t) = C v(t) = C V_0 \sin(\omega t) \implies i(t) = \frac{dq}{dt} = \omega C V_0 \cos(\omega t) = \mathbf{\frac{V_0}{1/(\omega C)} \sin\left(\omega t + \frac{\pi}{2}\right)}$$


* Phase Relation: Current leads voltage by $90^\circ$ ($\pi/2$ radians) (or voltage lags current by $90^\circ$).
* Capacitive Reactance ($X_C$): $$\mathbf{X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C}} \quad (\text{in Ohms, } \Omega)$$
   * At DC ($f = 0$): $X_C \to \infty$ (completely blocks DC in steady state).
   * At very high frequency ($f \to \infty$): $X_C \to 0$ (acts as a short-circuit bypass for high frequencies).


________________


1.3 Series LCR Circuit & Phasor Architecture
In a series connection of resistor $R$, inductor $L$, and capacitor $C$ carrying common current $i(t) = I_0 \sin(\omega t)$:


* Voltage across resistor: $\vec{V}R$ in phase with $\vec{I}$ ($V{R,0} = I_0 R$).
* Voltage across inductor: $\vec{V}L$ leads $\vec{I}$ by $90^\circ$ ($V{L,0} = I_0 X_L$).
* Voltage across capacitor: $\vec{V}C$ lags $\vec{I}$ by $90^\circ$ ($V{C,0} = I_0 X_C$).
1. Phasor Vector Summation
$$\vec{V}_0 = \vec{V}_R + \vec{V}_L + \vec{V}_C$$ Because $\vec{V}_L$ and $\vec{V}_C$ lie along the same vertical axis in opposite directions: $$\mathbf{V_0 = \sqrt{V_R^2 + (V_L - V_C)^2} = I_0 \sqrt{R^2 + (X_L - X_C)^2}}$$


* Impedance ($Z$): $$\mathbf{Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}}$$
* Phase Angle ($\phi$): The angle by which voltage leads current: $$\mathbf{\tan\phi = \frac{X_L - X_C}{R} = \frac{\omega L - \frac{1}{\omega C}}{R}}, \qquad \mathbf{\cos\phi = \frac{R}{Z}}$$
   * Inductive Dominance ($X_L > X_C$): $\phi > 0 \implies$ Voltage leads current.
   * Capacitive Dominance ($X_C > X_L$): $\phi < 0 \implies$ Current leads voltage.
   * Resistive Resonance ($X_L = X_C$): $\phi = 0 \implies$ Current and voltage in phase.


________________


1.4 Resonance in Series LCR Circuits
Resonance occurs when the inductive and capacitive reactances cancel out identically: $$X_L = X_C \implies \omega_r L = \frac{1}{\omega_r C}$$ $$\mathbf{\omega_r = \frac{1}{\sqrt{LC}}}, \qquad \mathbf{f_r = \frac{1}{2\pi\sqrt{LC}}}$$
1. Invariants at Series Resonance
1. Minimum Impedance: $Z_{\min} = R$ (Circuit is purely resistive).
2. Maximum Current Amplitude: $I_{\max} = \frac{V_0}{R}$.
3. Unity Power Factor: $\cos\phi = 1$ (Phase angle $\phi = 0$).
4. Reactive Cancellation: Voltages across inductor and capacitor are equal and $180^\circ$ out of phase ($V_L = V_C = I X_L$), so their net phasor sum is zero: $\vec{V}_L + \vec{V}C = \vec{0} \implies V{\text{source}} = V_R$.
2. Bandwidth & Quality Factor ($Q$)
* Half-Power Frequencies ($\omega_1, \omega_2$): Frequencies where power dissipates at half its peak value ($P = P_{\max}/2 \implies I = I_{\max}/\sqrt{2} \implies Z = \sqrt{2}R$): $$|X_L - X_C| = R \implies \omega_1 = \omega_r - \frac{R}{2L}, \qquad \omega_2 = \omega_r + \frac{R}{2L}$$
* Bandwidth ($\Delta\omega$): $$\mathbf{\Delta\omega = \omega_2 - \omega_1 = \frac{R}{L}}$$
* Quality Factor ($Q$): A dimensionless measure of the sharpness of resonance and selectivity of a tuned circuit: $$\mathbf{Q = \frac{\omega_r}{\Delta\omega} = \frac{\omega_r L}{R} = \frac{1}{\omega_r C R} = \frac{1}{R}\sqrt{\frac{L}{C}}}$$
* Voltage Magnification Property: At resonance, the potential difference across the reactive elements ($L$ or $C$) is magnified by a factor of $Q$ relative to the applied source voltage: $$\mathbf{V_L = I_{\max} X_L = \left(\frac{V_0}{R}\right) (\omega_r L) = Q V_0}$$ $$\mathbf{V_C = I_{\max} X_C = \left(\frac{V_0}{R}\right) \left(\frac{1}{\omega_r C}\right) = Q V_0}$$ (For high-Q circuits, reactive components can experience voltages thousands of volts higher than the source!)


________________


2. Power Analysis, Wattless Current & Transformers
![Ac Power Factor Wattless Current And Transformers](/media/ac_power_factor_wattless_current_and_transformers.webp) Description: Two-panel reference diagram for AC power analysis and transformer systems: (Panel A) AC power triangle comparing real, apparent, and reactive powers, alongside wattless current phasor decomposition and the energy-saving choke coil principle; (Panel B) Step-up and step-down transformer mutual induction relations, turns ratios, efficiency metrics, and engineering mitigations for core and copper losses.
2.1 Power in AC Circuits
The instantaneous power delivered by an AC source is: $$p(t) = v(t) i(t) = [V_0 \sin(\omega t)] [I_0 \sin(\omega t - \phi)] = V_0 I_0 \sin(\omega t) [\sin(\omega t)\cos\phi - \cos(\omega t)\sin\phi]$$ $$p(t) = V_0 I_0 \cos\phi \sin^2(\omega t) - \frac{1}{2} V_0 I_0 \sin\phi \sin(2\omega t)$$
1. Average (True) Power ($P_{\text{avg}}$)
Integrating over a full cycle ($\langle \sin^2\omega t \rangle = 1/2$ and $\langle \sin 2\omega t \rangle = 0$): $$\mathbf{P_{\text{avg}} = \frac{1}{2} V_0 I_0 \cos\phi = \left(\frac{V_0}{\sqrt{2}}\right) \left(\frac{I_0}{\sqrt{2}}\right) \cos\phi = \mathbf{V_{\text{rms}} I_{\text{rms}} \cos\phi}}$$


* Substituting $V_{\text{rms}} = I_{\text{rms}} Z$ and $\cos\phi = R/Z$: $$\mathbf{P_{\text{avg}} = I_{\text{rms}}^2 R}$$ Fundamental Principle: In an AC circuit, power is dissipated exclusively across the resistive component $R$; pure inductors and capacitors consume zero net power over a complete cycle!
2. The AC Power Triangle
1. Real / Active / True Power ($P$): Dissipated as heat/work: $$\mathbf{P = V_{\text{rms}} I_{\text{rms}} \cos\phi} \quad (\text{in Watts, W})$$
2. Apparent Power ($S$): Product of root-mean-square ratings: $$\mathbf{S = V_{\text{rms}} I_{\text{rms}}} \quad (\text{in Volt-Amperes, VA})$$
3. Reactive / Quadrature Power ($Q_{\text{reac}}$): Energy surging between source and reactive fields: $$\mathbf{Q_{\text{reac}} = V_{\text{rms}} I_{\text{rms}} \sin\phi} \quad (\text{in Volt-Amperes Reactive, VAR})$$
4. Power Factor ($\cos\phi$): $$\mathbf{\cos\phi = \frac{P}{S} = \frac{R}{Z} = \frac{\text{True Power}}{\text{Apparent Power}}}$$


________________


2.2 Wattless Current & The Choke Coil
1. Wattless (Idle / Quadrature) Current
Resolve the current vector $\vec{I}{\text{rms}}$ into two orthogonal components with respect to voltage $\vec{V}{\text{rms}}$:


1. In-Phase / Active Component ($I_{\text{active}} = I_{\text{rms}} \cos\phi$): Angle with voltage is $0^\circ \implies$ Power consumed: $$P_1 = V_{\text{rms}} (I_{\text{rms}} \cos\phi) \cos(0^\circ) = V_{\text{rms}} I_{\text{rms}} \cos\phi = P_{\text{true}}$$
2. Quadrature / Wattless Component ($I_{\text{wattless}} = I_{\text{rms}} \sin\phi$): Angle with voltage is $90^\circ \implies$ Power consumed: $$P_2 = V_{\text{rms}} (I_{\text{rms}} \sin\phi) \cos(90^\circ) = \mathbf{0}$$ $$\mathbf{I_{\text{wattless}} = I_{\text{rms}} \sin\phi = I_{\text{rms}} \sqrt{1 - \cos^2\phi} = I_{\text{rms}} \frac{|X_L - X_C|}{Z}}$$ This current flows through reactive elements without causing any average power dissipation.
2. The Choke Coil (Current Controller for AC Circuits)
To reduce alternating current in a circuit (such as a fluorescent tube) without substantial energy loss:


* A rheostat (resistor) reduces current by adding resistance, but wastes enormous energy as continuous Joule heat ($P = I^2 R$).
* A choke coil is an inductor with very high inductance $L$ and negligible internal resistance $R$ ($R \approx 0$):
   * Impedance: $Z = \sqrt{R^2 + \omega^2 L^2} \approx \omega L$ (large, effectively chokes current: $I = V / \omega L$).
   * Power Factor: $\cos\phi = \frac{R}{\sqrt{R^2 + \omega^2 L^2}} \approx 0 \implies \mathbf{P_{\text{loss}} \approx 0}$.
   * Notice: A choke coil cannot be used to control direct current (DC) because for DC, $\omega = 0 \implies X_L = 0$.


________________


2.3 The Transformer
A static electrical machine that transfers electrical energy between circuits through Mutual Induction without changing frequency:
1. Ideal Transformer Equations
Consists of primary winding ($N_p$ turns) and secondary winding ($N_s$ turns) wound on a common high-permeability magnetic core: $$\mathcal{E}_p = -N_p \frac{d\Phi}{dt}, \qquad \mathcal{E}_s = -N_s \frac{d\Phi}{dt}$$ Assuming zero winding resistance and zero flux leakage ($V_p = \mathcal{E}p, V_s = \mathcal{E}s$): $$\mathbf{\frac{V_s}{V_p} = \frac{N_s}{N_p} = k} \quad (\textbf{Transformation Ratio})$$ By conservation of power in an ideal transformer ($P{\text{in}} = P{\text{out}} \implies V_p I_p = V_s I_s$): $$\mathbf{\frac{I_s}{I_p} = \frac{N_p}{N_s} = \frac{1}{k}}$$


* Step-Up Transformer ($N_s > N_p \implies k > 1$): Steps voltage up ($V_s > V_p$), but steps current down ($I_s < I_p$).
* Step-Down Transformer ($N_s < N_p \implies k < 1$): Steps voltage down ($V_s < V_p$), but steps current up ($I_s > I_p$).
2. Efficiency ($\eta$) & Practical Energy Loss Mechanisms
$$\mathbf{\eta = \frac{P_{\text{out}}}{P_{\text{in}}} \times 100\% = \frac{V_s I_s \cos\phi_s}{V_p I_p \cos\phi_p} \times 100\%}$$


Energy Loss Type
	Physical Origin
	Engineering Remedy
	1. Copper Loss ($I^2 R$)
	Joule heating in copper windings
	Use thick, low-resistance copper wire.
	2. Eddy Current Loss
	Circulating currents induced in iron core
	Core built from thin laminated sheets insulated by varnish.
	3. Hysteresis Loss
	Magnetic energy lost per cycle of core magnetization
	Core fabricated from soft iron / silicon steel (narrow $B-H$ loop).
	4. Flux Leakage
	Incomplete magnetic coupling between primary and secondary
	Primary and secondary coils wound concentrically over each other.
	5. Humming Noise
	Periodic mechanical strain due to magnetostriction
	Rigid clamping of core stampings; vibration isolation.
	

________________


3. High-Yield Problem Archetypes & Structural JEE Traps
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Series LCR Voltage Addition
	Adding RMS voltages algebraically: $V = V_R + V_L + V_C$.
	Voltages are phasors: $\mathbf{V = \sqrt{V_R^2 + (V_L - V_C)^2}}$. Individual component voltages can exceed source voltage!
	2
	Voltage Magnification at Resonance
	Claiming $V_L$ cannot exceed supply voltage $V_{\text{source}}$.
	At resonance, $V_L = V_C = \mathbf{Q \cdot V_{\text{source}}}$. If $Q = 100$, $V_L$ is 100 times greater than the source voltage!
	3
	Power Consumption in Inductor/Capacitor
	Calculating non-zero average power for pure reactive elements.
	$\phi = \pm 90^\circ \implies \cos\phi = 0 \implies \mathbf{P_{\text{avg}} = 0}$. Real power dissipation occurs strictly in resistance $R$.
	4
	Choke Coil on DC Supply
	Using a choke coil to control DC current.
	For DC, frequency $f = 0 \implies X_L = 0$. A choke coil offers zero inductive opposition to DC and cannot regulate current.
	5
	Hot-Wire Ammeter Deflection Law
	Assuming scale deflections are linear with current.
	Heat $H \propto I^2$; scale deflections are proportional to $I_{\text{rms}}^2 \implies$ Non-linear scale (crowded at low currents, spaced at high).
	6
	Superposition of DC and AC
	Summing DC and AC directly: $I_{\text{rms}} = a + b/\sqrt{2}$.
	Powers add: $I_{\text{rms}}^2 = I_{\text{DC}}^2 + I_{\text{AC,rms}}^2 \implies \mathbf{I_{\text{rms}} = \sqrt{a^2 + b^2/2}}$.
	7
	Bandwidth and Resistance
	Thinking a larger resistance makes resonance sharper.
	Sharpness requires high $Q \propto 1/R$. Bandwidth is $\mathbf{\Delta\omega = R/L}$; larger $R$ broadens the peak and degrades selectivity.
	8
	Transformer on DC Supply
	Connecting primary of transformer to a DC battery.
	Constant DC produces constant flux ($d\Phi/dt = 0$) $\implies V_s = 0$. Low primary resistance causes burnout due to massive current.
	9
	Wattless Current Phase
	Assuming wattless current is in phase with voltage.
	Wattless current $I_{\text{rms}}\sin\phi$ is strictly in quadrature ($90^\circ$ out of phase) with voltage, yielding $\cos(90^\circ) = 0$.
	10
	Peak vs RMS in Dielectric Breakdown
	Setting working RMS voltage equal to breakdown limit.
	Breakdown is triggered by peak voltage: $V_0 = \sqrt{2} V_{\text{rms}} \le V_{\text{breakdown}} \implies \mathbf{V_{\text{rms, max}} = \frac{V_{\text{breakdown}}}{\sqrt{2}}}$.
	

________________