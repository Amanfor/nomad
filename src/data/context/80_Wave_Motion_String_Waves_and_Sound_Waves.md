Physics Revision Context: Chapter 80 — Wave Motion: String Waves & Sound Waves
Source: Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Wave on a string/, CLASS-11 (JA)/PHYSICS/Sound Waves/, 1._Thoery_Wave_on_a_string_E.pdf, 1._Thoery_Sound_wave_E_BHkqt3e.pdf, Hint__Solution__String_waves__English.pdf, Hint__Solution__Sound_wave.pdf) Extracted into: JEE/context/ Batch: Physics Wave Mechanics & Acoustics Core — String Waves (Differential Wave Equation $\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2}$, Harmonic Travelling Waves $y(x, t) = A\sin(kx \mp \omega t + \phi)$, Transverse Wave Speed $v = \sqrt{\frac{T}{\mu}}$, Particle Velocity vs. Wave Velocity Invariant $v_p = -v \times \frac{\partial y}{\partial x}$, Transverse Energy Density $u = \mu \omega^2 A^2 \cos^2(kx - \omega t)$, Average Transmitted Power $P_{\text{avg}} = \frac{1}{2}\mu v \omega^2 A^2$, Wave Reflection & Transmission at Discontinuities $A_r = \frac{v_2 - v_1}{v_1 + v_2}A_i$, Phase Reversal at Denser Boundaries, Standing Waves Normal Modes $y = 2A\sin(kx)\cos(\omega t)$, Nodes & Antinodes Spacing $\frac{\lambda}{2}$ and $\frac{\lambda}{4}$, Resonant Frequencies $f_n = \frac{nv}{2L}$, Sonometer Laws); Sound Waves (Longitudinal Compression-Rarefaction Mechanics, Displacement Wave $s = s_0 \cos(kx - \omega t)$ vs. Pressure Wave $\Delta P = \Delta P_0 \sin(kx - \omega t)$ with $\frac{\pi}{2}$ Phase Duality $\Delta P_0 = B k s_0 = \rho v \omega s_0$, Speed of Sound Laplace Correction $v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma R T}{M}}$, Sound Intensity $I = \frac{\Delta P_0^2}{2\rho v}$, Decibel Scale $\beta = 10\log_{10}\frac{I}{I_0}$, Inverse-Square Attenuation $\Delta \beta = 20\log_{10}\frac{r_2}{r_1}$, Organ Pipes Analytics: Open Pipe $f_n = \frac{nv}{2L}$ All Harmonics vs. Closed Pipe $f_n = \frac{(2n-1)v}{4L}$ Odd Harmonics, End Correction $e = 0.6r$, Resonance Tube $\lambda = 2(l_2 - l_1)$, Interference of Sound Waves & Quincke's Tube, Beat Frequency $f_b = |f_1 - f_2|$, Doppler Effect General Formulation $f' = f \left(\frac{v \pm v_0}{v \mp v_s}\right)$, Moving Source & Moving Observer Vector Corrections, Moving Wall Echo Beats $\Delta f = f \frac{2u}{v - u}$, Supersonic Shock Waves & Mach Cone $\sin \theta = \frac{1}{M}$), and Comprehensive High-Yield JEE Traps. Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Transverse String Waves
![Waves String Transverse And Standing Modes](/media/waves_string_transverse_and_standing_modes.webp) Description: Two-panel string waves reference diagram: (Panel A) Sinusoidal travelling wave showing the particle velocity relationship $v_p = -v \times \text{slope}$, pointing upward on downward slopes and downward on upward slopes; (Panel B) Normal modes of a stretched string fixed at both ends detailing fundamental mode ($n=1$), second harmonic ($n=2$), and third harmonic ($n=3$) with node-antinode distributions.
1.1 The 1D Differential Wave Equation & Harmonic Waves
* General Wave Equation: Any physical disturbance $\psi(x, t)$ propagating along the $x$-axis with constant speed $v$ satisfies: $$\mathbf{\frac{\partial^2 \psi}{\partial t^2} = v^2 \frac{\partial^2 \psi}{\partial x^2}}$$
* General Mathematical Solution: $$\psi(x, t) = f(kx \mp \omega t)$$
   * Negative sign ($-$) represents propagation along $+x$ direction: $f(kx - \omega t)$.
   * Positive sign ($+$) represents propagation along $-x$ direction: $f(kx + \omega t)$.
* Sinusoidal Harmonic Travelling Wave: $$\mathbf{y(x, t) = A \sin(kx - \omega t + \phi) = A \sin\left[2\pi\left(\frac{x}{\lambda} - \frac{t}{T}\right) + \phi\right]}$$
   * Amplitude: $A$ (maximum transverse displacement).
   * Angular wave number (propagation constant): $k = \frac{2\pi}{\lambda}$.
   * Angular frequency: $\omega = 2\pi f = \frac{2\pi}{T}$.
   * Wave speed (phase velocity): $$\mathbf{v = \frac{\omega}{k} = f \lambda = \frac{\lambda}{T}}$$


________________


1.2 Transverse Wave Speed on a Stretched String
For a flexible string under tension $T$ with mass per unit length (linear mass density) $\mu = \frac{M}{L} = \rho A$: $$\mathbf{v = \sqrt{\frac{T}{\mu}} = \sqrt{\frac{T}{\rho A}} = \sqrt{\frac{\sigma}{\rho}}}$$ (Where $\sigma = T/A$ is the tensile stress in the wire, and $\rho$ is the volumetric mass density).


* Effect of Temperature on Wave Speed: If the temperature of a stretched wire clamped between rigid supports decreases by $\Delta T$, thermal stress develops: $$\Delta T_{\text{tension}} = Y A \alpha \Delta T \implies v_{\text{new}} = \sqrt{\frac{T_0 + Y A \alpha \Delta T}{\mu}}$$
* Wave Velocity on a Hanging Uniform Rope: For a heavy rope of mass $M$ and length $L$ hanging vertically from a ceiling:
   * Tension at distance $x$ from the free bottom end: $T(x) = \left(\frac{M}{L}x\right)g = \mu g x$.
   * Local wave speed varies with height: $$\mathbf{v(x) = \sqrt{\frac{T(x)}{\mu}} = \sqrt{g x}}$$
   * Time taken by a pulse to travel from bottom to top: $$\mathbf{t = \int_0^L \frac{dx}{v(x)} = \int_0^L \frac{dx}{\sqrt{gx}} = 2\sqrt{\frac{L}{g}}}$$
   * Acceleration of the wave pulse: $a = v \frac{dv}{dx} = \sqrt{gx} \left(\frac{\sqrt{g}}{2\sqrt{x}}\right) = \frac{g}{2} = \text{const}$.


________________


1.3 Particle Velocity vs. Wave Velocity Invariant
* Particle Velocity ($v_p$): Rate of change of displacement of a fixed particle of the medium: $$v_p = \frac{\partial y}{\partial t} = -\omega A \cos(kx - \omega t + \phi)$$
* Slope of String Profile: $$\frac{\partial y}{\partial x} = k A \cos(kx - \omega t + \phi)$$
* The Master Particle Velocity Relation: $$\mathbf{v_p = -\left(\frac{\omega}{k}\right) \frac{\partial y}{\partial x} = -v \times \left(\frac{\partial y}{\partial x}\right) = -v \times (\text{Slope})}$$
   * Geometric Rules (Wave travelling in $+x$ direction, $v > 0$):
      * Where the string has a negative slope ($\frac{\partial y}{\partial x} < 0$), the particle moves upward ($v_p > 0$).
      * Where the string has a positive slope ($\frac{\partial y}{\partial x} > 0$), the particle moves downward ($v_p < 0$).
      * At crests and troughs ($\frac{\partial y}{\partial x} = 0$), particle velocity is instantaneously zero ($v_p = 0$).
* Particle Acceleration: $$a_p = \frac{\partial^2 y}{\partial t^2} = -\omega^2 y \quad (\text{Each particle undergoes simple harmonic motion})$$


________________


1.4 Energy Transport & Power in a Stretched String
1. Energy Densities in a Travelling Wave:
   * Kinetic Energy Density per unit length: $$\mathbf{u_k = \frac{1}{2}\mu v_p^2 = \frac{1}{2}\mu \omega^2 A^2 \cos^2(kx - \omega t)}$$
   * Potential (Elastic) Energy Density per unit length: $$\mathbf{u_p = \frac{1}{2}T \left(\frac{\partial y}{\partial x}\right)^2 = \frac{1}{2}\mu \omega^2 A^2 \cos^2(kx - \omega t)}$$
   * Equipartition Invariant: In a travelling wave, $u_k = u_p$ at every instant and position! Both kinetic and potential energy are maximum simultaneously at the mean position ($y = 0$, where slope and velocity are maximal), and zero simultaneously at the crests and troughs.
   * Total Energy Density: $$u = u_k + u_p = \mu \omega^2 A^2 \cos^2(kx - \omega t)$$ $$\mathbf{\langle u \rangle = \frac{1}{2}\mu \omega^2 A^2}$$
2. Instantaneous & Average Transmitted Power:
   * Power transmitted across any cross-section: $$P(t) = -T \left(\frac{\partial y}{\partial x}\right) \left(\frac{\partial y}{\partial t}\right) = \mu v \omega^2 A^2 \cos^2(kx - \omega t)$$
   * Average Power Transmitted ($P_{\text{avg}}$): $$\mathbf{P_{\text{avg}} = \frac{1}{2}\mu v \omega^2 A^2 = 2\pi^2 \mu v f^2 A^2}$$


________________


1.5 Reflection & Transmission at String Discontinuities
When a wave travelling on string 1 (speed $v_1$, linear density $\mu_1$) hits the junction with string 2 (speed $v_2$, linear density $\mu_2$):


1. Amplitude of Reflected Wave ($A_r$): $$\mathbf{A_r = \left(\frac{v_2 - v_1}{v_1 + v_2}\right) A_i = \left(\frac{\sqrt{\mu_1} - \sqrt{\mu_2}}{\sqrt{\mu_1} + \sqrt{\mu_2}}\right) A_i}$$
2. Amplitude of Transmitted Wave ($A_t$): $$\mathbf{A_t = \left(\frac{2v_2}{v_1 + v_2}\right) A_i = \left(\frac{2\sqrt{\mu_1}}{\sqrt{\mu_1} + \sqrt{\mu_2}}\right) A_i}$$
3. Phase Change Rules:
   * Rarer to Denser Medium ($v_2 < v_1 \iff \mu_2 > \mu_1$): $A_r < 0 \implies$ Phase inversion by $\mathbf{\pi \text{ radians} \ (180^\circ)}$.
   * Denser to Rarer Medium ($v_2 > v_1 \iff \mu_2 < \mu_1$): $A_r > 0 \implies$ Zero phase change upon reflection.
   * Transmitted wave always undergoes zero phase change regardless of medium density.
4. Rigid Wall vs. Free Ring End:
   * Rigid Support ($v_2 = 0$): $A_r = -A_i$ (complete inverted reflection with $\pi$ phase shift).
   * Free Ring End ($v_2 \to \infty$): $A_r = +A_i$ (complete upright reflection with zero phase shift).


________________


1.6 Standing Waves on Strings
Superposition of two identical waves travelling in opposite directions: $$y_1 = A\sin(kx - \omega t), \qquad y_2 = A\sin(kx + \omega t)$$ $$\mathbf{y(x, t) = y_1 + y_2 = 2A \sin(kx) \cos(\omega t)}$$


* The amplitude of oscillation at any position $x$ is: $$\mathbf{A(x) = 2A |\sin(kx)|}$$
* Nodes ($A(x) = 0$): Points permanently at rest: $$\sin(kx) = 0 \implies kx = n\pi \implies \mathbf{x = n\frac{\lambda}{2}} \quad (n = 0, 1, 2, \dots)$$
* Antinodes ($A(x) = 2A$): Points oscillating with maximum amplitude: $$|\sin(kx)| = 1 \implies kx = (2n + 1)\frac{\pi}{2} \implies \mathbf{x = (2n + 1)\frac{\lambda}{4}} \quad (n = 0, 1, 2, \dots)$$
* Distance between two consecutive nodes or antinodes: $\mathbf{\frac{\lambda}{2}}$.
* Distance between a consecutive node and antinode: $\mathbf{\frac{\lambda}{4}}$.
* Phase Invariant in Standing Waves: All particles between two adjacent nodes vibrate in the same phase. Particles on opposite sides of a node vibrate in exact opposite phase ($\pi$ phase difference).


________________


1.7 Resonant Frequencies & Sonometer Laws
1. String Fixed at Both Ends (Length $L$): Boundary condition: Nodes at $x = 0$ and $x = L$: $$L = n\frac{\lambda}{2} \implies \lambda_n = \frac{2L}{n}$$ $$\mathbf{f_n = \frac{n v}{2L} = \frac{n}{2L}\sqrt{\frac{T}{\mu}} \quad (n = 1, 2, 3, \dots)}$$
   * Fundamental / 1st Harmonic ($n = 1$): $f_1 = \frac{v}{2L}$.
   * 2nd Harmonic / 1st Overtone ($n = 2$): $f_2 = 2f_1$.
   * $p$-th Overtone: $(p + 1)$-th harmonic, frequency $f = (p + 1)f_1$.
   * Ratio of frequencies: $\mathbf{f_1 : f_2 : f_3 : \dots = 1 : 2 : 3 : \dots}$ (All integer harmonics exist).
2. String Fixed at One End, Free at the Other: Boundary condition: Node at $x = 0$, Antinode at $x = L$: $$L = (2n - 1)\frac{\lambda}{4} \implies \mathbf{f_n = \frac{(2n - 1)v}{4L} = \frac{(2n - 1)}{4L}\sqrt{\frac{T}{\mu}} \quad (n = 1, 2, 3, \dots)}$$
   * Frequencies ratio: $\mathbf{f_1 : f_3 : f_5 : \dots = 1 : 3 : 5 : \dots}$ (Only odd harmonics exist).
3. Laws of Sonometer:
   * Law of Length: $f \propto \frac{1}{L}$ (for constant $T, \mu$).
   * Law of Tension: $f \propto \sqrt{T}$ (for constant $L, \mu$).
   * Law of Mass: $f \propto \frac{1}{\sqrt{\mu}} = \frac{1}{r\sqrt{\rho}}$ (for constant $L, T$).


________________


2. Sound Waves (Acoustics)
![Waves Sound Organ Pipes And Doppler Effect](/media/waves_sound_organ_pipes_and_doppler_effect.webp) Description: Two-panel acoustics reference diagram: (Panel A) Longitudinal displacement wave vs. pressure wave showing the $\pi/2$ phase duality alongside resonance modes of open and closed organ pipes with end corrections; (Panel B) Master Doppler effect frequency formulation, reflection beats, and sound intensity decibel attenuation.
2.1 The Nature of Sound Waves & Dual Representation
Sound is a longitudinal mechanical wave propagating through alternating compressions and rarefactions:


1. Displacement Wave Representation: The displacement of a layer of fluid particles from its equilibrium position: $$\mathbf{s(x, t) = s_0 \cos(kx - \omega t)}$$ (Where $s_0$ is the displacement amplitude).
2. Pressure Wave Representation: Excess pressure $\Delta P$ developed due to local volume strain: $$\Delta P(x, t) = -B \left(\frac{\partial s}{\partial x}\right) = -B \left[-k s_0 \sin(kx - \omega t)\right] = \mathbf{\Delta P_0 \sin(kx - \omega t)}$$
   * Pressure Amplitude ($\Delta P_0$): $$\mathbf{\Delta P_0 = B k s_0 = \rho v \omega s_0 = 2\pi \rho v f s_0}$$
3. The Phase Duality Invariant ($\frac{\pi}{2}$ Shift):
   * The pressure wave is $90^\circ$ ($\frac{\pi}{2}$) out of phase with the displacement wave: $$\mathbf{\text{Displacement Node } (s = 0) \iff \text{Pressure Antinode } (\Delta P = \pm \Delta P_0)}$$ $$\mathbf{\text{Displacement Antinode } (s = \pm s_0) \iff \text{Pressure Node } (\Delta P = 0, \text{ambient pressure})}$$


________________


2.2 Speed of Sound in Different Media
1. Longitudinal Wave Speed in Extended Solids & Rods:
   * In a thin metallic rod: $\mathbf{v = \sqrt{\frac{Y}{\rho}}}$.
   * In an extended 3D solid medium: $\mathbf{v = \sqrt{\frac{B + \frac{4}{3}\eta}{\rho}}}$.
2. Speed of Sound in Liquids: $$\mathbf{v = \sqrt{\frac{B}{\rho}}}$$
3. Speed of Sound in Ideal Gases (Newton-Laplace Equation):
   * Newton assumed isothermal sound propagation ($B_{\text{iso}} = P$), yielding $v = \sqrt{P/\rho}$ ($\sim 280\text{ m/s}$ in air, error of $16\%$).
   * Laplace's Correction: Compressions and rarefactions occur so rapidly that heat exchange is negligible; hence sound propagation is strictly adiabatic ($B_{\text{adia}} = \gamma P$): $$\mathbf{v = \sqrt{\frac{\gamma P}{\rho}} = \sqrt{\frac{\gamma R T}{M}} = \sqrt{\frac{\gamma k_B T}{m}}}$$
   * Key Dependences in Gases:
      * Temperature: $v \propto \sqrt{T}$ (in Kelvin). For small temperature changes: $$v(t^\circ\text{C}) \approx v_0 + 0.61 t \quad (\text{in m/s})$$
      * Pressure: Sound speed is completely independent of pressure at constant temperature, because $\frac{P}{\rho} = \frac{RT}{M} = \text{const}$.
      * Humidity: Density of moist air is less than dry air ($\rho_{\text{moist}} < \rho_{\text{dry}}$ because molecular mass of $\text{H}_2\text{O}$ is $18$ vs. air $\sim 29$). Hence, sound travels faster in humid air.
      * Gas Mixtures: $$\gamma_{\text{mix}} = \frac{n_1 C_{p1} + n_2 C_{p2}}{n_1 C_{v1} + n_2 C_{v2}}, \qquad M_{\text{mix}} = \frac{n_1 M_1 + n_2 M_2}{n_1 + n_2} \implies v_{\text{mix}} = \sqrt{\frac{\gamma_{\text{mix}} R T}{M_{\text{mix}}}}$$


________________


2.3 Sound Intensity & Decibel ($\text{dB}$) Scale
1. Acoustic Intensity ($I$): Average power per unit area normal to the direction of propagation: $$\mathbf{I = \frac{\Delta P_0^2}{2\rho v} = \frac{1}{2}\rho v \omega^2 s_0^2 = 2\pi^2 \rho v f^2 s_0^2}$$
2. Decibel Loudness Level ($\beta$): $$\mathbf{\beta = 10 \log_{10}\left(\frac{I}{I_0}\right) \quad (\text{in decibels, dB})}$$
   * Threshold of human hearing at $1000\text{ Hz}$: $\mathbf{I_0 = 10^{-12}\text{ W/m}^2}$ ($0\text{ dB}$).
   * Threshold of pain: $I = 1\text{ W/m}^2$ ($120\text{ dB}$).
3. Attenuation for an Isotropic Point Source:
   * Intensity obeys the inverse-square law: $$I(r) = \frac{P_{\text{source}}}{4\pi r^2} \propto \frac{1}{r^2}$$
   * Difference in sound level between distances $r_1$ and $r_2$: $$\mathbf{\beta_1 - \beta_2 = 10\log_{10}\left(\frac{I_1}{I_2}\right) = 20\log_{10}\left(\frac{r_2}{r_1}\right)}$$


________________


2.4 Organ Pipes & Resonance Columns
1. Open Organ Pipe (Both Ends Open):
   * Boundary condition: Air at open ends is free to oscillate $\implies$ Displacement Antinodes / Pressure Nodes at both ends.
   * Condition for resonance: $L = n\frac{\lambda}{2}$.
   * Frequencies: $$\mathbf{f_n = \frac{n v}{2L} \quad (n = 1, 2, 3, \dots)}$$
   * Produces all harmonics ($f_1, 2f_1, 3f_1, 4f_1, \dots$).
2. Closed Organ Pipe (One End Closed):
   * Boundary condition: Rigid closed wall prevents movement $\implies$ Displacement Node / Pressure Antinode at closed end; Displacement Antinode / Pressure Node at open end.
   * Condition for resonance: $L = (2n - 1)\frac{\lambda}{4}$.
   * Frequencies: $$\mathbf{f_n = \frac{(2n - 1)v}{4L} \quad (n = 1, 2, 3, \dots)}$$
   * Produces only odd harmonics ($f_1, 3f_1, 5f_1, 7f_1, \dots$).
   * Length Comparison Rule: For identical fundamental frequency, an open pipe must be twice as long as a closed pipe ($L_{\text{open}} = 2 L_{\text{closed}}$).
3. End Correction ($e$): The displacement antinode at an open pipe end does not form exactly at the physical boundary, but slightly outside the open rim by an amount $e$: $$\mathbf{e = 0.6 r \quad (\text{where } r \text{ is the internal tube radius})}$$
   * Effective Length for Open Pipe: $\mathbf{L' = L + 2e = L + 1.2r}$.
   * Effective Length for Closed Pipe: $\mathbf{L' = L + e = L + 0.6r}$.
4. Resonance Tube Experiment: A tuning fork of known frequency $f$ excites standing waves in a water-column closed tube:
   * First resonance length: $l_1 + e = \frac{\lambda}{4}$.
   * Second resonance length: $l_2 + e = \frac{3\lambda}{4}$.
   * Wavelength of Sound: $$\mathbf{\lambda = 2(l_2 - l_1)}$$
   * Speed of Sound: $$\mathbf{v = f \lambda = 2f(l_2 - l_1)}$$
   * End Correction Value: $$\mathbf{e = \frac{l_2 - 3l_1}{2}}$$


________________


2.5 Interference & Beats
1. Interference of Sound Waves: Two coherent sources emitting sound waves of amplitudes $s_{01}, s_{02}$:
   * Resultant Amplitude: $s_0 = \sqrt{s_{01}^2 + s_{02}^2 + 2s_{01}s_{02}\cos \Delta \phi}$.
   * Phase difference: $\Delta \phi = \frac{2\pi}{\lambda}\Delta x + \phi_0$.
   * Constructive Interference: $\Delta x = n\lambda \implies I_{\max} = (\sqrt{I_1} + \sqrt{I_2})^2$.
   * Destructive Interference: $\Delta x = (2n - 1)\frac{\lambda}{2} \implies I_{\min} = (\sqrt{I_1} - \sqrt{I_2})^2$.
2. Beats: Periodic wax-and-wane in loudness heard when two sound waves of slightly different frequencies $f_1$ and $f_2$ travel together: $$\mathbf{f_{\text{beat}} = |f_1 - f_2|}$$
   * Time interval between two consecutive maxima: $T_{\text{beat}} = \frac{1}{f_{\text{beat}}}$.
   * Tuning Fork Modification Rules:
      * Loading a prong with wax: Mass increases $\implies$ frequency decreases.
      * Filing a prong: Mass decreases $\implies$ frequency increases.


________________


2.6 The Doppler Effect in Acoustics
Apparent change in frequency heard by an observer due to relative motion between source, observer, and medium:


* The Master Formula: $$\mathbf{f' = f \left(\frac{v \pm v_0}{v \mp v_s}\right)}$$
   * $v$: Speed of sound in the medium.
   * $v_0$: Velocity of observer.
   * $v_s$: Velocity of source.
* Sign Convention Rule:
   * Observer (Numerator):
      * Approaches source $\implies$ Apparent frequency increases $\implies$ Use $+$ sign ($v + v_0$).
      * Recedes from source $\implies$ Apparent frequency decreases $\implies$ Use $-$ sign ($v - v_0$).
   * Source (Denominator):
      * Approaches observer $\implies$ Wavelength compresses ($\lambda' < \lambda$) $\implies$ Apparent frequency increases $\implies$ Use $-$ sign ($v - v_s$).
      * Recedes from observer $\implies$ Wavelength expands ($\lambda' > \lambda$) $\implies$ Apparent frequency decreases $\implies$ Use $+$ sign ($v + v_s$).
* Wind Velocity Correction ($v_w$): If wind blows with velocity component $v_w$ along the line joining source and observer: $$\mathbf{f' = f \left(\frac{(v + v_w) \pm v_0}{(v + v_w) \mp v_s}\right)}$$
* Non-Collinear Motion: Only the velocity components along the line joining source and observer contribute: $$\mathbf{f' = f \left(\frac{v - v_0 \cos \theta_0}{v - v_s \cos \theta_s}\right)}$$
* Reflection from a Moving Wall / Target: A sound source of frequency $f$ emits toward a wall moving toward the source with speed $u$:
   * Frequency received by wall: $f_w = f\left(\frac{v + u}{v}\right)$.
   * Frequency reflected back to stationary detector near source: $$\mathbf{f_{\text{echo}} = f_w \left(\frac{v}{v - u}\right) = f \left(\frac{v + u}{v - u}\right)}$$
   * Beat Frequency heard by the source: $$\mathbf{\Delta f = f_{\text{echo}} - f = f \left[\frac{v + u}{v - u} - 1\right] = f \left(\frac{2u}{v - u}\right)}$$
* Supersonic Source & Shock Waves (Mach Number): When $v_s > v$, the source outruns its wave crests, forming a conical shock wave:
   * Mach Number: $\mathbf{M = \frac{v_s}{v} > 1}$.
   * Semi-vertical angle of Mach Cone: $\mathbf{\sin \theta = \frac{v}{v_s} = \frac{1}{M}}$.


________________


3. High-Yield JEE Traps & Exam Invariants
1. Travelling Wave vs. Standing Wave Energy Invariant:
   * In a travelling wave, kinetic and potential energies are equal and in-phase ($u_k = u_p$); maximum at mean position ($y = 0$).
   * In a standing wave, kinetic and potential energies are $90^\circ$ out of phase in time:
      * When string is flat ($y = 0$ everywhere): Potential energy is zero, Kinetic energy is maximum.
      * At extreme displacement: Kinetic energy is zero everywhere, Potential energy is maximum.
2. Frequency vs. Wavelength in Different Media:
   * When sound passes from air into water:
      * Frequency $f$ remains strictly constant (governed entirely by the source).
      * Speed increases drastically ($v_{\text{air}} \approx 340\text{ m/s} \to v_{\text{water}} \approx 1500\text{ m/s}$).
      * Wavelength increases proportionally ($\lambda = v / f$).
3. Open vs. Closed Pipe Quality of Musical Notes:
   * An open organ pipe sounds richer and more pleasant because it contains all harmonics (both even and odd), whereas a closed pipe contains only odd harmonics.
4. End Correction Pitfall:
   * When end correction is included, resonance length differences eliminate $e$: $$\lambda = 2(l_2 - l_1) = (l_3 - l_1)$$
   * Never use $v = 4 f l_1$ in precision resonance experiments; always use $v = 2f(l_2 - l_1)$.
5. Moving Source vs. Moving Observer Asymmetry:
   * Source moving toward stationary observer at $u$: $$f_1 = f\left(\frac{v}{v - u}\right)$$
   * Observer moving toward stationary source at $u$: $$f_2 = f\left(\frac{v + u}{v}\right)$$
   * Notice $f_1 \ne f_2$; $f_1 > f_2$ because $1 / (1 - u/v) > 1 + u/v$.