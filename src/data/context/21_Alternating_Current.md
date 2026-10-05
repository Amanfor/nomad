Physics Revision Context: Chapter 21 — Alternating Current


**Source:** `scraped/Coaching_Modules/Praveen FL 2023-24/.../Notes/Alternating Current Theory.pdf` & JEE Main / Advanced Core Revision Materials  
**Extracted into:** `JEE/context/`  
**Batch:** Physics Electrodynamics Core — AC Generation, Peak/RMS/Average Analytics, Phasor Analysis of Pure Elements ($R, L, C$), Series $R\text{-}L$, $R\text{-}C$, and $L\text{-}C\text{-}R$ Networks, Resonance Dynamics, Quality Factor ($Q$), AC Power Factor, Choke Coils, $L\text{-}C$ Oscillations, and Transformers  
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams  


---


## 1. Principles of Alternating Current & AC Generation


### 1.1 Fundamental Definition of Alternating Current (AC)
* **Alternating Current (AC):** An electric current whose magnitude changes continuously with time and whose polarity/direction reverses periodically.
* **Sinusoidal Waveform Representation:**
  $$v(t) = V_0 \sin(\omega t + \theta_0) \quad \text{or} \quad v(t) = V_0 \cos(\omega t + \theta_0)$$
  $$i(t) = I_0 \sin(\omega t + \theta_0 \pm \phi)$$
  where:
  * $V_0, I_0$ = Peak (maximum) amplitude of voltage and current.
  * $\omega = 2\pi f = \frac{2\pi}{T}$ = Angular frequency in $\text{rad/s}$.
  * $f$ = Linear frequency in Hertz ($\text{Hz}$ or $\text{s}^{-1}$).
  * $T = \frac{1}{f} = \frac{2\pi}{\omega}$ = Time period of one complete cycle in seconds.
  * $(\omega t + \theta_0)$ = Instantaneous phase of the signal.
  * $\theta_0$ = Initial phase angle at $t = 0$.
  * $\phi$ = Phase difference between voltage and current.
* **Standard Grid Specifications:** In India, household AC supply operates at $V_{\text{rms}} = 220\text{ V}$ and $f = 50\text{ Hz}$ ($\omega = 100\pi \approx 314.16\text{ rad/s}$, period $T = 20\text{ ms}$). Peak voltage is $V_0 = \sqrt{2} V_{\text{rms}} \approx 311.13\text{ V}$.


### 1.2 AC Generation Principle (Dynamo / Alternator)
* **Mechanism:** When a plane coil of $N$ turns and cross-sectional area $A$ rotates at a uniform angular speed $\omega$ about an axis perpendicular to a uniform magnetic field $\vec{B}$, the magnetic flux linked with the coil varies harmonically:
  $$\Phi(t) = N (\vec{B} \cdot \vec{A}) = N B A \cos(\omega t)$$
* **Faraday-Lenz Law of Electromagnetic Induction:** The instantaneous induced electromotive force (EMF) is:
  $$\mathcal{E}(t) = -\frac{d\Phi}{dt} = -\frac{d}{dt}[N B A \cos(\omega t)] = N B A \omega \sin(\omega t)$$
  $$\mathcal{E}(t) = \mathcal{E}_0 \sin(\omega t) \quad \text{where } \mathcal{E}_0 = N B A \omega$$
* **Current Extrema in a Cycle:** During one complete cycle ($0 \le t \le T$), current crosses zero twice (at $t = 0, T/2, T$) and reaches equal magnitude peaks in opposite directions twice (at $t = T/4$ and $t = 3T/4$).


---


## 2. Average (Mean) & Root Mean Square (RMS) Values of AC


### 2.1 Average Value ($V_{\text{av}}$ and $I_{\text{av}}$)
* **Full-Cycle Average:** For any symmetrical alternating waveform with equal positive and negative half-cycles, the algebraic mean value over a complete period $T$ is identically zero:
  $$I_{\text{av, full cycle}} = \frac{1}{T} \int_0^T I_0 \sin(\omega t)\,dt = 0$$
* **Half-Cycle Rectified Average:** Defined as the total charge transported across any circuit section during a half-cycle ($T/2$) divided by the half-period:
  $$I_{\text{av}} = \frac{1}{T/2} \int_0^{T/2} I_0 \sin(\omega t)\,dt = \frac{2 I_0}{T} \left[ -\frac{\cos(\omega t)}{\omega} \right]_0^{\pi/\omega} = \frac{2 I_0}{\omega T} (1 - (-1)) = \frac{2 I_0}{\pi}$$
  $$I_{\text{av}} = \frac{2}{\pi} I_0 \approx 0.637 I_0 \quad \text{and} \quad V_{\text{av}} = \frac{2}{\pi} V_0 \approx 0.637 V_0$$


### 2.2 Root Mean Square (RMS / Effective / Virtual) Value ($I_{\text{rms}}$ and $V_{\text{rms}}$)
* **Physical Basis (Joule Heating Equivalency):** The RMS value of an alternating current is defined as that equivalent steady direct current (DC) which dissipates the exact same amount of thermal energy in a given resistor over one time period:
  $$H = \int_0^T i(t)^2 R\,dt = I_{\text{rms}}^2 R T \implies I_{\text{rms}} = \sqrt{\frac{1}{T}\int_0^T i(t)^2\,dt}$$
* **Mathematical Derivation for Sinusoidal AC:**
  $$I_{\text{rms}}^2 = \frac{1}{T}\int_0^T I_0^2 \sin^2(\omega t)\,dt = \frac{I_0^2}{T}\int_0^T \frac{1 - \cos(2\omega t)}{2}\,dt = \frac{I_0^2}{2 T}[t]_0^T = \frac{I_0^2}{2}$$
  $$I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \approx 0.707 I_0 \quad \text{and} \quad V_{\text{rms}} = \frac{V_0}{\sqrt{2}} \approx 0.707 V_0$$
* **Form Factor & Crest Factor:**
  $$\text{Form Factor} = \frac{V_{\text{rms}}}{V_{\text{av}}} = \frac{V_0 / \sqrt{2}}{2 V_0 / \pi} = \frac{\pi}{2\sqrt{2}} \approx 1.11$$
  $$\text{Crest (Peak) Factor} = \frac{V_{\text{peak}}}{V_{\text{rms}}} = \frac{V_0}{V_0 / \sqrt{2}} = \sqrt{2} \approx 1.414$$


### 2.3 Waveform Comparison Summary Table


| Waveform Type | Equation $i(t)$ | Peak $I_0$ | Average $I_{\text{av}}$ (Half Cycle) | RMS $I_{\text{rms}}$ | Form Factor |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Standard Sinusoidal** | $I_0 \sin(\omega t)$ | $I_0$ | $\frac{2}{\pi} I_0 \approx 0.637 I_0$ | $\frac{I_0}{\sqrt{2}} \approx 0.707 I_0$ | $\frac{\pi}{2\sqrt{2}} \approx 1.11$ |
| **Half-Wave Rectified** | $I_0 \sin(\omega t)$ for $(0 \le t \le T/2)$, $0$ for $(T/2 \le t \le T)$ | $I_0$ | $\frac{I_0}{\pi} \approx 0.318 I_0$ (over full $T$) | $\frac{I_0}{2} = 0.5 I_0$ | $\frac{\pi}{2} \approx 1.57$ |
| **Full-Wave Rectified** | $|I_0 \sin(\omega t)|$ | $I_0$ | $\frac{2}{\pi} I_0 \approx 0.637 I_0$ | $\frac{I_0}{\sqrt{2}} \approx 0.707 I_0$ | $\frac{\pi}{2\sqrt{2}} \approx 1.11$ |
| **Square / Rectangular** | $\pm I_0$ | $I_0$ | $I_0$ | $I_0$ | $1.00$ |
| **Triangular / Sawtooth** | Linear ramp $\pm I_0$ | $I_0$ | $\frac{I_0}{2} = 0.5 I_0$ | $\frac{I_0}{\sqrt{3}} \approx 0.577 I_0$ | $\frac{2}{\sqrt{3}} \approx 1.15$ |


### 2.4 AC Measuring Instruments (Hot-Wire Principle)
* **Moving Coil Meters (DC):** Deflection is proportional to average current ($\theta \propto I_{\text{av}}$). When connected to AC, net torque vanishes over a cycle ($I_{\text{av}} = 0$); hence, DC meters read zero on AC supplies.
* **Hot-Wire Ammeters & Voltmeters:** Deflection depends on heat dissipation in a fine platinum-iridium wire ($\theta \propto H \propto I_{\text{rms}}^2$). Therefore:
  1. They measure **RMS values** regardless of current direction.
  2. Scale markings are non-linear (compressed at the beginning, expanded at higher values due to quadratic dependence).
  3. They can measure both AC and DC accurately.


---


## 3. AC Response of Pure Circuit Elements ($R, L, C$) & Phasors


### 3.1 Purely Resistive Circuit ($R$)
* **Circuit Equation:** Connected to source $v(t) = V_0 \sin(\omega t)$:
  $$v(t) - i(t) R = 0 \implies i(t) = \frac{V_0}{R} \sin(\omega t) = I_0 \sin(\omega t)$$
  where $I_0 = \frac{V_0}{R}$ and $I_{\text{rms}} = \frac{V_{\text{rms}}}{R}$.
* **Phase Relationship:** Voltage and current are strictly **in phase** ($\phi = 0^\circ$).
* **Impedance:** $Z = R$ (purely real, independent of operating frequency $\omega$).


### 3.2 Purely Inductive Circuit ($L$)
* **Circuit Equation:** Connected to source $v(t) = V_0 \sin(\omega t)$, Kirchhoff's loop law gives:
  $$v(t) - L\frac{di}{dt} = 0 \implies \frac{di}{dt} = \frac{V_0}{L}\sin(\omega t)$$
  $$i(t) = \int \frac{V_0}{L}\sin(\omega t)\,dt = -\frac{V_0}{\omega L} \cos(\omega t) = \frac{V_0}{\omega L} \sin\left(\omega t - \frac{\pi}{2}\right)$$
  $$i(t) = I_0 \sin\left(\omega t - \frac{\pi}{2}\right) \quad \text{where } I_0 = \frac{V_0}{X_L}$$
* **Inductive Reactance ($X_L$):**
  $$X_L = \omega L = 2\pi f L \quad (\text{SI Unit: } \Omega)$$
* **Phase Relationship:** Voltage **leads** current by $\frac{\pi}{2}\text{ rad}$ ($90^\circ$), or current **lags** voltage by $90^\circ$.
* **Frequency Dependency:** $X_L \propto f$. An ideal inductor offers zero resistance to DC ($f = 0 \implies X_L = 0$), acting as a short circuit, while presenting infinite reactance to ultra-high-frequency signals.


### 3.3 Purely Capacitive Circuit ($C$)
* **Circuit Equation:** Connected to source $v(t) = V_0 \sin(\omega t)$:
  $$q(t) = C v(t) = C V_0 \sin(\omega t)$$
  $$i(t) = \frac{dq}{dt} = \omega C V_0 \cos(\omega t) = \omega C V_0 \sin\left(\omega t + \frac{\pi}{2}\right)$$
  $$i(t) = I_0 \sin\left(\omega t + \frac{\pi}{2}\right) \quad \text{where } I_0 = \frac{V_0}{X_C}$$
* **Capacitive Reactance ($X_C$):**
  $$X_C = \frac{1}{\omega C} = \frac{1}{2\pi f C} \quad (\text{SI Unit: } \Omega)$$
* **Phase Relationship:** Current **leads** voltage by $\frac{\pi}{2}\text{ rad}$ ($90^\circ$), or voltage **lags** current by $90^\circ$.
* **Frequency Dependency:** $X_C \propto \frac{1}{f}$. For steady direct current ($f = 0$), $X_C \to \infty$; hence, a capacitor completely blocks DC while allowing high-frequency AC to pass with minimal impedance.


---


### 3.4 Visual Preservation: Pure Element Phasors & Waveforms


![Pure Element Phasor and Waveform Diagrams](/media/ac_pure_elements_phasors_and_waveforms.webp)
*Description: Comprehensive comparative visualization of AC response in pure circuit elements across three horizontal rows: (a) Pure Resistor: Sinusoidal waveforms showing voltage $v(t) = V_0 \sin(\omega t)$ and current $i(t) = I_0 \sin(\omega t)$ exactly in phase, with collinear horizontal phasor vectors ($\phi = 0^\circ$); (b) Pure Inductor: Waveforms illustrating voltage leading current by $\pi/2$ rad ($90^\circ$), with the phasor diagram exhibiting $V_L = I_0 X_L$ along $+y$ perpendicular to current $I_0$ along $+x$; and (c) Pure Capacitor: Waveforms demonstrating current leading voltage by $\pi/2$ rad, with the phasor diagram depicting $V_C = I_0 X_C$ directed downward along $-y$ at $-90^\circ$ relative to current $I_0$.*


---


## 4. Two-Element Series AC Circuits ($R\text{-}L$, $R\text{-}C$, $L\text{-}C$)


### 4.1 Series $R\text{-}L$ Circuit
* **Vector Sum of Voltages:** $V_R$ is in phase with current $i(t)$, while $V_L$ leads by $90^\circ$:
  $$V_0 = \sqrt{V_R^2 + V_L^2} = \sqrt{(I_0 R)^2 + (I_0 X_L)^2} = I_0 \sqrt{R^2 + (\omega L)^2}$$
* **Total Impedance ($Z$):**
  $$Z = \frac{V_0}{I_0} = \sqrt{R^2 + X_L^2} = \sqrt{R^2 + (\omega L)^2}$$
* **Phase Angle ($\phi$):** Voltage leads current by phase angle $\phi$:
  $$\tan \phi = \frac{V_L}{V_R} = \frac{X_L}{R} = \frac{\omega L}{R} \implies \phi = \arctan\left(\frac{\omega L}{R}\right)$$
* **Instantaneous Expressions:**
  $$v(t) = V_0 \sin(\omega t) \implies i(t) = \frac{V_0}{Z}\sin(\omega t - \phi)$$


### 4.2 Series $R\text{-}C$ Circuit
* **Vector Sum of Voltages:** $V_R$ is in phase with $i(t)$, while $V_C$ lags by $90^\circ$:
  $$V_0 = \sqrt{V_R^2 + V_C^2} = \sqrt{(I_0 R)^2 + (I_0 X_C)^2} = I_0 \sqrt{R^2 + \left(\frac{1}{\omega C}\right)^2}$$
* **Total Impedance ($Z$):**
  $$Z = \sqrt{R^2 + X_C^2} = \sqrt{R^2 + \frac{1}{\omega^2 C^2}}$$
* **Phase Angle ($\phi$):** Current leads voltage by phase angle $\phi$ (or voltage lags current by $\phi$):
  $$\tan \phi = \frac{V_C}{V_R} = \frac{X_C}{R} = \frac{1}{\omega R C} \implies \phi = \arctan\left(\frac{1}{\omega R C}\right)$$
* **Instantaneous Expressions:**
  $$v(t) = V_0 \sin(\omega t) \implies i(t) = \frac{V_0}{Z}\sin(\omega t + \phi)$$


### 4.3 Series $L\text{-}C$ Circuit
* **Opposing Reactances:** Inductor voltage leads current by $+90^\circ$ while capacitor voltage lags by $-90^\circ$, creating a net phase opposition of $180^\circ$ ($\pi\text{ rad}$):
  $$V_0 = |V_L - V_C| = I_0 |X_L - X_C| = I_0 \left|\omega L - \frac{1}{\omega C}\right|$$
* **Impedance:** $Z = |X_L - X_C| = \left|\omega L - \frac{1}{\omega C}\right|$.
* **Zero Impedance Condition ($X_L = X_C$):** At $\omega = \frac{1}{\sqrt{LC}}$, $Z = 0$, permitting maximum current without applied potential across the combination (free undamped oscillation).


---


## 5. Series $L\text{-}C\text{-}R$ Circuit & General AC Impedance


### 5.1 Loop Equation & Steady-State Solution
* **Kirchhoff's Voltage Law:**
  $$\mathcal{E}(t) - v_R - v_L - v_C = 0 \implies L\frac{di}{dt} + R i + \frac{q}{C} = V_0 \sin(\omega t)$$
  In terms of instantaneous charge $q(t)$ ($i = dq/dt$):
  $$L\frac{d^2 q}{dt^2} + R\frac{dq}{dt} + \frac{q}{C} = V_0 \sin(\omega t)$$


### 5.2 Phasor Addition & Impedance Triangle
* Since $V_L$ and $V_C$ are collinear but point in opposite directions along the reactive axis, their net reactive voltage drop is $(V_L - V_C)$:
  $$V_0^2 = V_R^2 + (V_L - V_C)^2$$
  $$V_0 = \sqrt{(I_0 R)^2 + (I_0 X_L - I_0 X_C)^2} = I_0 \sqrt{R^2 + (X_L - X_C)^2}$$
* **Total Impedance ($Z$):**
  $$Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2}$$
* **Phase Difference ($\phi$):**
  $$\tan \phi = \frac{V_L - V_C}{V_R} = \frac{X_L - X_C}{R} = \frac{\omega L - \frac{1}{\omega C}}{R}$$
  $$\cos \phi = \frac{R}{Z} = \frac{R}{\sqrt{R^2 + (X_L - X_C)^2}} \quad (\text{Power Factor})$$
  $$\sin \phi = \frac{X_L - X_C}{Z}$$


### 5.3 Operating Regimes of Series $L\text{-}C\text{-}R$ Circuits


| Operating Condition | Reactance Comparison | Phase Angle $\phi$ | Circuit Character | Voltage vs Current Relation |
| :--- | :--- | :--- | :--- | :--- |
| $\omega > \frac{1}{\sqrt{LC}}$ | $X_L > X_C$ | $\phi > 0$ (Positive) | **Inductive** | Voltage leads current by $\phi$ |
| $\omega < \frac{1}{\sqrt{LC}}$ | $X_C > X_L$ | $\phi < 0$ (Negative) | **Capacitive** | Current leads voltage by $\|\phi\|$ |
| $\omega = \frac{1}{\sqrt{LC}}$ | $X_L = X_C$ | $\phi = 0^\circ$ | **Resistive (Resonant)** | Voltage and current are strictly in phase |


---


### 5.4 Visual Preservation: Series LCR Circuit & Impedance Geometry


![Series LCR Circuit Schematic, Voltage Phasor, and Impedance Triangle](/media/lcr_series_circuit_and_impedance_triangle.webp)
*Description: Three-panel diagram illustrating the complete electromagnetic architecture of a series LCR network: (Left) Circuit schematic showing AC source $\mathcal{E} = V_0 \sin(\omega t)$ in series with resistor $R$, inductor $L$, and capacitor $C$; (Middle) Voltage phasor diagram for $X_L > X_C$, showing $V_R = I_0 R$ along the horizontal real axis, $V_L$ pointing upward along $+y$, $V_C$ downward along $-y$, the net reactive vector $(V_L - V_C)$, and the resultant source voltage vector $V_0 = \sqrt{V_R^2 + (V_L - V_C)^2}$ inclined at phase angle $\phi$; and (Right) Right-angled Impedance Triangle displaying resistance $R$ as the adjacent base, net reactance $(X_L - X_C)$ as the opposite side, total impedance $Z = \sqrt{R^2 + (X_L - X_C)^2}$ as the hypotenuse, and power factor formula $\cos \phi = R/Z$.*


---


## 6. Resonance in Series $L\text{-}C\text{-}R$ Circuits & Quality Factor ($Q$)


### 6.1 Condition of Series Resonance
* **Resonance Phenomenon:** When the angular frequency of the applied AC source matches the natural oscillation frequency of the $L-C$ network, inductive and capacitive reactances cancel exactly:
  $$X_L = X_C \implies \omega_0 L = \frac{1}{\omega_0 C}$$
  $$\omega_0 = \frac{1}{\sqrt{LC}} \quad (\text{Resonant Angular Frequency in rad/s})$$
  $$f_0 = \frac{\omega_0}{2\pi} = \frac{1}{2\pi\sqrt{LC}} \quad (\text{Resonant Cyclic Frequency in Hz})$$
* **Key Characteristics at Series Resonance:**
  1. **Minimum Impedance:** $Z_{\text{min}} = \sqrt{R^2 + (X_L - X_C)^2} = R$ (purely resistive).
  2. **Maximum Current Amplitude:**
     $$I_{0, \text{max}} = \frac{V_0}{R} \quad \text{and} \quad I_{\text{rms, max}} = \frac{V_{\text{rms}}}{R}$$
  3. **In-Phase Condition:** Phase difference $\phi = 0^\circ \implies$ Power factor $\cos \phi = 1$ (unity power factor).
  4. **Equal Reactive Voltages:** $V_L = V_C = I_0 X_L = I_0 X_C$. The potential difference across the series $L-C$ combination is identically zero ($V_{LC} = 0$).
  5. **Acceptor Circuit:** Series LCR offers minimal impedance to frequency $f_0$; hence, it is widely utilized as an **acceptor circuit** in radio tuning stages to select a specific transmission station from a spectrum of frequencies.


### 6.2 Half-Power Frequencies & Bandwidth ($\Delta \omega$)
* **Half-Power Frequencies ($\omega_1, \omega_2$):** Frequencies at which the dissipated power drops to half of its maximum value ($P = \frac{1}{2} P_{\text{max}}$):
  $$P = I_{\text{rms}}^2 R = \frac{1}{2} I_{\text{rms, max}}^2 R \implies I_{\text{rms}} = \frac{I_{\text{rms, max}}}{\sqrt{2}} \approx 0.707 I_{\text{rms, max}}$$
  At these points, the circuit impedance increases by a factor of $\sqrt{2}$:
  $$Z = \sqrt{2} R \implies R^2 + \left(\omega L - \frac{1}{\omega C}\right)^2 = 2 R^2 \implies \left|\omega L - \frac{1}{\omega C}\right| = R$$
* **Frequencies:**
  $$\omega_1 = \omega_0 - \frac{R}{2L} \quad (\text{Lower cutoff frequency})$$
  $$\omega_2 = \omega_0 + \frac{R}{2L} \quad (\text{Upper cutoff frequency})$$
  $$\omega_0 = \sqrt{\omega_1 \omega_2} \quad (\text{Geometric mean relationship})$$
* **Bandwidth ($\Delta \omega$):**
  $$\Delta \omega = \omega_2 - \omega_1 = \frac{R}{L} \quad \text{or} \quad \Delta f = \frac{R}{2\pi L}$$


### 6.3 Quality Factor ($Q$-Factor) & Sharpness of Resonance
* **Definition:** A dimensionless metric characterizing the sharpness of the resonance peak and frequency selectivity of the circuit:
  $$Q = \frac{\text{Resonant Frequency}}{\text{Bandwidth}} = \frac{\omega_0}{\Delta \omega} = \frac{\omega_0 L}{R} = \frac{1}{\omega_0 C R}$$
* **Symmetric Formulation:** Substituting $\omega_0 = \frac{1}{\sqrt{LC}}$:
  $$Q = \frac{1}{R}\sqrt{\frac{L}{C}}$$
* **Energy Formulation:**
  $$Q = 2\pi \times \frac{\text{Maximum Energy Stored in Circuit}}{\text{Energy Dissipated per Cycle}}$$
* **Voltage Magnification Factor:** At resonance, the voltage across inductor $L$ or capacitor $C$ is magnified by a factor of $Q$ compared to the source voltage $V_0$:
  $$V_L = I_0 X_L = \left(\frac{V_0}{R}\right)(\omega_0 L) = Q V_0 \implies Q = \frac{V_L}{V_0} = \frac{V_C}{V_0}$$
  *(Crucial Insight: In high-$Q$ circuits, $V_L$ and $V_C$ can be significantly higher than the input source voltage $V_0$.)*


---


### 6.4 Visual Preservation: Resonance Curves & Bandwidth Analytics


![Resonance Curves, Bandwidth, and Quality Factor](/media/lcr_resonance_curves_and_quality_factor.webp)
*Description: Detailed frequency response diagrams for series LCR circuits: (Left) Resonance curves plotting RMS current $I_{\mathrm{rms}}$ versus normalized angular frequency $\omega/\omega_0$ across varying resistances ($R_1 < R_2 < R_3$), highlighting that lower resistance produces a sharper resonance peak with high Quality Factor ($Q = 8$), whereas larger resistances broaden the curve; (Right) Analytical resonance curve identifying the peak $I_{\max} = V_0/R$ at $\omega_0 = 1/\sqrt{LC}$, the half-power current threshold $I_{\max}/\sqrt{2} \approx 0.707 I_{\max}$, the lower and upper cutoff frequencies $\omega_1$ and $\omega_2$, the bandwidth $\Delta \omega = \omega_2 - \omega_1 = R/L$, and the Quality Factor formulation $Q = \frac{\omega_0}{\Delta \omega} = \frac{1}{R}\sqrt{\frac{L}{C}}$.*


---


## 7. Power in AC Circuits & Power Factor Dynamics


### 7.1 Instantaneous & Average Power Derivations
* **Instantaneous Power:**
  $$p(t) = v(t) \cdot i(t) = [V_0 \sin(\omega t)] \cdot [I_0 \sin(\omega t - \phi)]$$
  Using product-to-sum identity $\sin A \sin B = \frac{1}{2}[\cos(A - B) - \cos(A + B)]$:
  $$p(t) = \frac{V_0 I_0}{2} [\cos \phi - \cos(2\omega t - \phi)]$$
* **Average Real Power ($P_{\text{avg}}$):** Integrating over one complete cycle, the time-dependent harmonic term $\cos(2\omega t - \phi)$ averages to zero ($\langle\cos(2\omega t - \phi)\rangle = 0$):
  $$P_{\text{avg}} = \frac{V_0 I_0}{2} \cos \phi = \left(\frac{V_0}{\sqrt{2}}\right)\left(\frac{I_0}{\sqrt{2}}\right) \cos \phi = V_{\text{rms}} I_{\text{rms}} \cos \phi$$
* **Impedance Formulation:** Since $\cos \phi = \frac{R}{Z}$ and $I_{\text{rms}} = \frac{V_{\text{rms}}}{Z}$:
  $$P_{\text{avg}} = V_{\text{rms}} \left(\frac{V_{\text{rms}}}{Z}\right)\left(\frac{R}{Z}\right) = I_{\text{rms}}^2 R = \frac{V_{\text{rms}}^2 R}{Z^2}$$
  *(Crucial Invariant: In an AC circuit, net power dissipation occurs exclusively in the resistive element $R$. Ideal inductors and capacitors consume zero average real power over a complete cycle.)*


### 7.2 Apparent, Real, and Reactive Power
1. **Real / Active / True Power ($P$):** Rate of actual energy dissipation:
   $$P = V_{\text{rms}} I_{\text{rms}} \cos \phi \quad (\text{Unit: Watts, W or kW})$$
2. **Apparent Power ($S$):** Product of RMS voltmeter and ammeter readings:
   $$S = V_{\text{rms}} I_{\text{rms}} \quad (\text{Unit: Volt-Amperes, VA or kVA})$$
3. **Reactive / Quadrature Power ($Q_r$):** Rate of energy exchange between source and reactive elements:
   $$Q_r = V_{\text{rms}} I_{\text{rms}} \sin \phi \quad (\text{Unit: Volt-Amperes Reactive, VAR})$$
4. **Power Triangle:**
   $$S^2 = P^2 + Q_r^2 \implies S = \sqrt{P^2 + Q_r^2}$$
   $$\text{Power Factor} = \cos \phi = \frac{\text{Real Power } P}{\text{Apparent Power } S} = \frac{R}{Z}$$


### 7.3 Wattless Current (Idle Current)
* Resolving the current vector $\vec{I}_{\text{rms}}$ into orthogonal components relative to voltage $\vec{V}_{\text{rms}}$:
  1. **Active (In-Phase) Component:** $I_p = I_{\text{rms}} \cos \phi$. Power dissipated $= V_{\text{rms}} (I_{\text{rms}} \cos \phi) = P_{\text{avg}}$.
  2. **Reactive (Quadrature) Component:** $I_q = I_{\text{rms}} \sin \phi$. Operates at a $90^\circ$ phase shift relative to voltage. Power dissipated $= V_{\text{rms}} (I_{\text{rms}} \sin \phi) \cos(90^\circ) = 0$.
* **Wattless Current ($I_w$):**
  $$I_w = I_{\text{rms}} \sin \phi = I_{\text{rms}} \frac{|X_L - X_C|}{Z}$$
  In a purely inductive or purely capacitive circuit ($\phi = \pm 90^\circ$), $\cos \phi = 0$ and the entire current is wattless.


### 7.4 The Choke Coil
* **Construction & Purpose:** A coil having very high inductance $L$ and negligible internal resistance $R$, wound over a laminated soft-iron core.
* **Working Principle:**
  * Total impedance is dominated by reactance: $Z = \sqrt{R^2 + (\omega L)^2} \approx \omega L$.
  * Current is effectively throttled: $I_{\text{rms}} = \frac{V_{\text{rms}}}{\omega L}$.
  * Power dissipation remains virtually zero:
    $$P_{\text{avg}} = V_{\text{rms}} I_{\text{rms}} \cos \phi = V_{\text{rms}} I_{\text{rms}} \left(\frac{R}{\sqrt{R^2 + (\omega L)^2}}\right) \approx 0 \quad (\text{since } R \approx 0)$$
* **Advantage over Rheostat:** A rheostat limits AC current by dissipating energy as waste heat ($I^2 R$), whereas a choke coil restricts current reactively without thermal power loss.


---


## 8. Free $L\text{-}C$ Oscillations


### 8.1 Electromagnetic Energy Exchange
* When a fully charged capacitor (initial charge $q_0$, electrostatic energy $U_E = \frac{q_0^2}{2C}$) is connected across an ideal inductor ($L$, $R = 0$):
  1. The capacitor discharges through $L$, establishing an increasing magnetic field ($U_B = \frac{1}{2}L i^2$).
  2. When $q = 0$, current reaches maximum $I_0$, and all energy resides in the magnetic field: $U_B = \frac{1}{2}L I_0^2 = \frac{q_0^2}{2C}$.
  3. The collapsing magnetic field induces a forward EMF, charging the capacitor with opposite polarity until $i = 0$ and $q = -q_0$.
* **Conservation of Total Energy:**
  $$U_{\text{total}} = U_E + U_B = \frac{q(t)^2}{2C} + \frac{1}{2}L i(t)^2 = \frac{q_0^2}{2C} = \frac{1}{2}L I_0^2 = \text{constant}$$


### 8.2 Governing Differential Equation & Natural Frequency
* Applying Kirchhoff's loop law:
  $$\frac{q}{C} + L\frac{di}{dt} = 0 \implies \frac{q}{C} + L\frac{d^2 q}{dt^2} = 0$$
  $$\frac{d^2 q}{dt^2} + \omega_0^2 q = 0 \quad \text{where } \omega_0 = \frac{1}{\sqrt{LC}}$$
* **Solutions:**
  $$q(t) = q_0 \cos(\omega_0 t)$$
  $$i(t) = \frac{dq}{dt} = -q_0 \omega_0 \sin(\omega_0 t) = -I_0 \sin(\omega_0 t) \quad \text{where } I_0 = q_0 \omega_0 = \frac{q_0}{\sqrt{LC}}$$


### 8.3 Electromechanical Analogy ($L\text{-}C$ Circuit vs Spring-Mass Oscillator)


| Electrical Parameter ($L\text{-}C$ Circuit) | Mechanical Parameter (Spring-Mass System) |
| :--- | :--- |
| Charge $q(t)$ | Displacement $x(t)$ |
| Current $i(t) = dq/dt$ | Velocity $v(t) = dx/dt$ |
| Self-Inductance $L$ (Electrical inertia) | Mass $m$ (Mechanical inertia) |
| Reciprocal Capacitance $1/C$ (Elastance) | Spring stiffness constant $k$ |
| Electrostatic Energy $U_E = \frac{1}{2C} q^2$ | Elastic Potential Energy $U_k = \frac{1}{2}k x^2$ |
| Magnetic Energy $U_B = \frac{1}{2}L i^2$ | Kinetic Energy $K = \frac{1}{2}m v^2$ |
| Resistance $R$ | Viscous damping coefficient $b$ |
| Natural Frequency $\omega_0 = \frac{1}{\sqrt{LC}}$ | Natural Frequency $\omega_0 = \sqrt{\frac{k}{m}}$ |


---


## 9. Transformers & Mutual Electromagnetic Induction


### 9.1 Construction & Principle
* **Principle:** Operates on the basis of **mutual induction** between two magnetically coupled coils wound on a common high-permeability, laminated soft-iron core.
* **Faraday's Induction Relations:** Assuming zero flux leakage (ideal core coupling, $\Phi_p = \Phi_s = \Phi$ per turn):
  $$e_p = -N_p \frac{d\Phi}{dt} \quad \text{and} \quad e_s = -N_s \frac{d\Phi}{dt}$$
  Dividing the secondary EMF by the primary EMF:
  $$\frac{e_s}{e_p} = \frac{N_s}{N_p} = k \quad (\text{Transformation Ratio / Turns Ratio})$$


### 9.2 Step-Up vs Step-Down Classification
* **Step-Up Transformer:**
  $$N_s > N_p \implies k > 1 \implies V_s > V_p \quad \text{and} \quad I_s < I_p$$
  Voltage is stepped up; current is stepped down proportionally.
* **Step-Down Transformer:**
  $$N_s < N_p \implies k < 1 \implies V_s < V_p \quad \text{and} \quad I_s > I_p$$
  Voltage is stepped down; current is stepped up proportionally.


### 9.3 Power Conservation & Efficiency ($\eta$)
* **Ideal Transformer (100% Efficiency):**
  $$P_{\text{in}} = P_{\text{out}} \implies V_p I_p = V_s I_s \implies \frac{I_s}{I_p} = \frac{V_p}{V_s} = \frac{N_p}{N_s} = \frac{1}{k}$$
* **Real Transformer Efficiency:**
  $$\eta = \frac{P_{\text{out}}}{P_{\text{in}}} \times 100\% = \frac{V_s I_s \cos \phi_s}{V_p I_p \cos \phi_p} \times 100\%$$


### 9.4 Physical Mechanisms of Energy Loss in Transformers


| Loss Mechanism | Physical Origin | Mitigation Strategy |
| :--- | :--- | :--- |
| **Copper Loss ($I^2 R$)** | Joule heating due to finite resistance of copper primary/secondary windings | Use thick copper wires with low electrical resistivity for high-current windings |
| **Eddy Current Loss** | Circulating currents induced in the bulk volume of the conductive iron core ($P_{\text{eddy}} \propto f^2 B_{\text{max}}^2 t^2$) | Use thin core laminations stacked parallel to flux and insulated with varnish |
| **Hysteresis Loss** | Magnetic energy dissipated as heat during cyclic magnetization and demagnetization of core ($P_{\text{hyst}} \propto f B_{\text{max}}^{1.6}$) | Use soft iron or silicon steel featuring a narrow hysteresis B-H loop |
| **Flux Leakage** | Not all magnetic lines generated by the primary link with the secondary coil | Wind primary and secondary coils coaxially on top of each other on a closed core |
| **Magnetostriction (Humming Loss)** | Mechanical deformation of ferromagnetic domains in the core creating acoustic noise | Secure clamping of laminations |


---


## 10. High-Yield Problem Archetypes & JEE Shortcuts


### Archetype 1: Combined DC and AC Signals in Hot-Wire Instruments
* **Problem:** A current is given by $i(t) = I_{\text{dc}} + I_0 \sin(\omega t)$. What is the reading on a hot-wire ammeter?
* **Method & Shortcut:**
  $$I_{\text{rms}}^2 = \frac{1}{T}\int_0^T [I_{\text{dc}} + I_0 \sin(\omega t)]^2\,dt = \frac{1}{T}\int_0^T [I_{\text{dc}}^2 + 2 I_{\text{dc}} I_0 \sin(\omega t) + I_0^2 \sin^2(\omega t)]\,dt$$
  Since $\langle\sin(\omega t)\rangle = 0$ and $\langle\sin^2(\omega t)\rangle = \frac{1}{2}$:
  $$I_{\text{rms}} = \sqrt{I_{\text{dc}}^2 + \frac{I_0^2}{2}} = \sqrt{I_{\text{dc}}^2 + I_{\text{ac, rms}}^2}$$
* **General Multi-Frequency Superposition:** For $i(t) = I_{\text{dc}} + I_1 \sin(\omega_1 t) + I_2 \sin(\omega_2 t) + \dots$:
  $$I_{\text{rms}} = \sqrt{I_{\text{dc}}^2 + \frac{I_1^2 + I_2^2 + \dots}{2}}$$


### Archetype 2: Voltmeter Readings Across Series LCR
* **Trap:** In a series LCR circuit, voltmeters read $V_R = 40\text{ V}$, $V_L = 80\text{ V}$, and $V_C = 50\text{ V}$. What is the source voltage reading?
* **Solution:** Algebraic sum ($40 + 80 + 50 = 170\text{ V}$) is completely wrong. Voltmeters measure RMS magnitudes:
  $$V_{\text{source}} = \sqrt{V_R^2 + (V_L - V_C)^2} = \sqrt{40^2 + (80 - 50)^2} = \sqrt{1600 + 900} = \sqrt{2500} = 50\text{ V}$$


### Archetype 3: Switching Inductor/Capacitor at Resonance
* **Problem:** In a series LCR circuit at resonance, the source voltage is $V$. If either the inductor $L$ or capacitor $C$ is removed, the current lags/leads by $45^\circ$. What is the current at resonance?
* **Analysis:**
  * When $C$ is removed: $\tan(45^\circ) = \frac{\omega L}{R} = 1 \implies X_L = R$.
  * Since the circuit was at resonance: $X_C = X_L = R$.
  * At resonance, $Z = R$, so $I_{\text{res}} = \frac{V}{R}$.
  * With one component removed, $Z' = \sqrt{R^2 + R^2} = \sqrt{2} R$, so $I' = \frac{V}{\sqrt{2} R} = \frac{I_{\text{res}}}{\sqrt{2}}$.


### Archetype 4: Quality Factor and Dynamic Resonance in Parallel Circuits
* **Parallel Tank Circuit:** Inductor branch $(R_L, L)$ in parallel with capacitor branch $(C)$:
  $$\omega_{\text{res}} = \sqrt{\frac{1}{LC} - \frac{R_L^2}{L^2}}$$
* **Dynamic Resistance ($R_{\text{dynamic}}$):** At parallel resonance, the net admittance is minimal (purely conductive), and impedance is maximal:
  $$Z_{\text{max}} = R_{\text{dynamic}} = \frac{L}{C R_L}$$
  *(Rejector Circuit: Used in RF band-stop filters and plate circuits of transmitters to block the resonant frequency.)*