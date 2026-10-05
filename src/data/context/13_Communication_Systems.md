Physics Revision Context: Chapter 13 — Communication Systems


Source: scraped/books_and_pdfs/123813-JEE-Main-Communication-System-Revision-Notes-Free-PDF-Download.pdf & JEE Main Revision Materials Extracted into: JEE/context/ Batch: Electrodynamics & Modern Physics Core — Wave Propagation, Modulation & Optical Communication Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________




1. Elements of Communication & Electromagnetic Wave Propagation


1.1 Block Diagram of a Communication System


* Transmitter: Converts information signal into a suitable form (transducer + modulator + amplifier + antenna) for transmission.
* Channel: Physical medium bridging transmitter and receiver (free space, transmission lines, coaxial cables, optical fibers).
* Receiver: Reconstructs original message signal from received channel output (receiving antenna + RF amplifier + detector/demodulator + output transducer).
* Attenuation & Noise: Random undesirable electrical signals that interfere with and degrade the message signal during propagation.


1.2 Atmospheric Layers & Wave Interaction


* Troposphere: Extends up to $\sim 12\text{ km}$ from Earth's surface (weather phenomena, convection).
* Stratosphere: Extends from $12\text{ km}$ to $50\text{ km}$ (contains ozone layer absorbing harmful solar UV radiation).
* Mesosphere: Extends from $50\text{ km}$ to $80\text{ km}$ (temperature decreases to $\sim 180\text{ K}$).
* Ionosphere: Extends from $80\text{ km}$ to $400\text{ km}$ (contains high concentration of charged ions and free electrons; acts as an RF reflector for high frequencies).


1.3 Modes of Electromagnetic Wave Propagation


1. Ground (Surface) Wave Propagation:
   * Radio waves travel along the curved surface of the Earth.
   * Frequency Range: $f < 1.5\text{ MHz}$ (Standard AM broadcast).
   * Limitation: Energy is rapidly attenuated due to induced eddy currents in the conducting Earth surface and wave diffraction; attenuation increases sharply with frequency ($\text{loss} \propto f^2$).
2. Sky Wave Propagation:
   * Radio waves transmitted upwards are reflected back towards Earth by the ionized layers ($D, E, F_1, F_2$) of the ionosphere.
   * Frequency Range: $1.5\text{ MHz} \le f \le 30\text{ MHz}$ (Shortwave radio).
   * Critical Frequency ($f_c$): Highest frequency reflected back when transmitted vertically into the ionosphere: $$f_c = 9 \sqrt{N_{max}}$$ where $N_{max}$ is the maximum electron density ($\text{m}^{-3}$).
   * Skip Distance ($d_{skip}$): Minimum horizontal distance from transmitter at which a sky wave of frequency $f > f_c$ returns to Earth: $$d_{skip} = 2h \sqrt{\left(\frac{f}{f_c}\right)^2 - 1}$$ where $h$ is the virtual height of the ionospheric layer.
   * Maximum Usable Frequency ($MUF$): Highest frequency that can be reflected back when transmitted at an angle of incidence $\theta$: $$MUF = \frac{f_c}{\cos\theta} = f_c \sec\theta$$
3. Space Wave (Line-of-Sight / LOS) Propagation:
   * Direct traveling wave from transmitting antenna to receiving antenna through tropospheric space.
   * Frequency Range: $f > 40\text{ MHz}$ (Television, FM radio, radar, satellite communication).
   * Space waves pass straight through the ionosphere without reflection because refractive index $n = \sqrt{1 - \frac{81 N}{f^2}} \to 1$ as $f \to \infty$.


1.4 Transmission Range & Antenna Heights in Space Wave Propagation


* Distance to Radio Horizon from a transmitting antenna of height $h_T$ ($R_e \approx 6.4 \times 10^6\text{ m}$): $$d_T = \sqrt{2 R_e h_T}$$
* Maximum Line-of-Sight Coverage Distance between Transmitting ($h_T$) and Receiving ($h_R$) Towers: $$d_{max} = d_T + d_R = \sqrt{2 R_e h_T} + \sqrt{2 R_e h_R}$$
* Surface Area Covered by Transmitting Antenna ($h_T \ll R_e$): $$A = \pi d_T^2 = 2 \pi R_e h_T$$
* Total Population Covered: $$\text{Population Covered} = A \times \rho_{population} = 2 \pi R_e h_T \cdot \rho_{population}$$


1.5 Visual Preservation: Line-of-Sight Radio Propagation


 Description: Geometrical schematic of space wave / line-of-sight propagation over Earth curvature of radius $R_e$, illustrating transmitting antenna height $h_T$, receiving antenna height $h_R$, horizon tangency, and maximum coverage distance $d_{max} = \sqrt{2 R_e h_T} + \sqrt{2 R_e h_R}$.


________________




2. Modulation Theory & Bandwidth


2.1 Need for Modulation


1. Practical Antenna Dimensions: For efficient radiation and reception, antenna length must be comparable to signal wavelength ($l \ge \frac{\lambda}{4}$). For audio signals ($20\text{ kHz}$), $\lambda = 15\text{ km} \implies l \approx 3.75\text{ km}$ (impractically large). At RF ($1\text{ MHz}$), $\lambda = 300\text{ m} \implies l \approx 75\text{ m}$ (readily feasible).
2. Effective Radiated Power ($P$): Electromagnetic power radiated by a dipole antenna scales inversely with the square of wavelength: $$P \propto \left(\frac{l}{\lambda}\right)^2 \propto f^2$$
3. Channel Sharing & Multiplexing: Eliminates overlapping and cross-talk between multiple baseband audio signals simultaneously broadcast in the same geographical area.


2.2 Amplitude Modulation (AM)


* Carrier wave: $c(t) = A_c \sin\omega_c t$
* Modulating (message) signal: $m(t) = A_m \sin\omega_m t \quad (\omega_m \ll \omega_c)$
* Amplitude Modulated Wave: $$c_m(t) = (A_c + A_m\sin\omega_m t)\sin\omega_c t = A_c(1 + \mu\sin\omega_m t)\sin\omega_c t$$ where Modulation Index ($\mu$): $$\mu = \frac{A_m}{A_c} \quad (0 \le \mu \le 1)$$
* Envelope Extremes: $$A_{max} = A_c + A_m, \quad A_{min} = A_c - A_m$$ $$\mu = \frac{A_{max} - A_{min}}{A_{max} + A_{min}}$$ $$A_c = \frac{A_{max} + A_{min}}{2}, \quad A_m = \frac{A_{max} - A_{min}}{2}$$


2.3 Frequency Spectrum & Bandwidth of AM Wave


* Expanding trigonometric terms: $$c_m(t) = A_c\sin\omega_c t + \frac{\mu A_c}{2}\cos(\omega_c - \omega_m)t - \frac{\mu A_c}{2}\cos(\omega_c + \omega_m)t$$
* Three Component Frequencies:
   1. Carrier frequency: $f_c$ (amplitude $A_c$).
   2. Upper Sideband (USB): $f_c + f_m$ (amplitude $\frac{\mu A_c}{2}$).
   3. Lower Sideband (LSB): $f_c - f_m$ (amplitude $\frac{\mu A_c}{2}$).
* Transmission Bandwidth ($BW$): $$BW = (f_c + f_m) - (f_c - f_m) = 2 f_m$$


2.4 Power in an Amplitude Modulated Wave


* Total average power dissipated in load resistance $R$: $$P_t = P_c + P_{USB} + P_{LSB} = \frac{A_c^2}{2R} + \frac{(\mu A_c / 2)^2}{2R} + \frac{(\mu A_c / 2)^2}{2R}$$ $$P_t = P_c\left(1 + \frac{\mu^2}{2}\right) \quad \text{where } P_c = \frac{A_c^2}{2R}$$
* Sideband Power Fraction: $$\frac{P_{sidebands}}{P_t} = \frac{\frac{\mu^2}{2}}{1 + \frac{\mu^2}{2}} = \frac{\mu^2}{2 + \mu^2}$$
   * For $100\%$ modulation ($\mu = 1$): $P_t = 1.5 P_c$, with $\frac{1}{3}$ of total power in the sidebands and $\frac{2}{3}$ wasted in the unmodulated carrier.
* Current Relation: $$I_t = I_c \sqrt{1 + \frac{\mu^2}{2}}$$


2.5 Visual Preservation: AM Waveform and Frequency Spectrum


 Description: Time-domain amplitude modulated carrier wave showing the modulated envelope bounded between $A_{max}$ and $A_{min}$ alongside the discrete frequency spectrum revealing the carrier component ($f_c$) and symmetrical sideband pairs (LSB at $f_c - f_m$, USB at $f_c + f_m$) defining total bandwidth $BW = 2f_m$.


2.6 Frequency Modulation (FM) & Phase Modulation (PM)


* Frequency Modulation: Carrier instantaneous frequency varies proportionally to modulating signal voltage: $$f(t) = f_c + k_f m(t) = f_c + \Delta f \sin\omega_m t$$
   * Frequency Deviation: $\Delta f = k_f A_m$
   * Modulation Index ($m_f$): $$m_f = \frac{\Delta f}{f_m}$$
   * Bandwidth (Carson's Rule): $BW_{FM} \approx 2(\Delta f + f_m) = 2f_m(m_f + 1)$.


________________




3. Communication Channels & Optical Communication


3.1 Transmission Lines


1. Two-Wire Parallel Lines: Simple balanced lines; susceptible to radiation losses and external electromagnetic pickup; operating frequency $< 200\text{ MHz}$.
2. Coaxial Cables: Unbalanced lines with an inner solid conductor and outer cylindrical braided ground shield; minimizes radiation losses; suitable for signals up to $\sim 1\text{ GHz}$.


3.2 Optical Fiber Communication


* Operates at optical carrier frequencies ($10^{14}\text{ Hz}$ to $10^{15}\text{ Hz}$), providing vastly superior channel bandwidth and data throughput ($\text{Gbps}$ to $\text{Tbps}$) with minimal signal attenuation ($< 0.2\text{ dB/km}$).
* Fundamental Principle: Continuous Total Internal Reflection (TIR) within the central cylindrical glass/silica core.


3.3 Core-Cladding Structure & Conditions for Guidance


* Structure:
   * Central cylindrical Core of refractive index $n_1$.
   * Surrounding concentric Cladding of slightly lower refractive index $n_2$ ($n_1 > n_2$).
   * Outer polymer buffer jacket for mechanical resilience.
* Critical Angle of Core-Cladding Boundary ($\theta_c$): $$\sin\theta_c = \frac{n_2}{n_1}$$
* Total internal reflection occurs only when internal ray angle exceeds $\theta_c$.


3.4 Acceptance Angle ($\theta_a$) & Numerical Aperture ($NA$)


* Maximum launch angle in external medium of refractive index $n_0$ ($n_0 = 1$ for air): $$\sin\theta_a = \frac{\sqrt{n_1^2 - n_2^2}}{n_0}$$
* Numerical Aperture ($NA$): The light-gathering power of the optical fiber: $$NA = \sin\theta_a = \sqrt{n_1^2 - n_2^2}$$
* Fractional Refractive Index Change ($\Delta$): $$\Delta = \frac{n_1 - n_2}{n_1} \implies NA \approx n_1 \sqrt{2\Delta}$$


3.5 Visual Preservation: Optical Fiber TIR & Acceptance Cone


 Description: Ray diagram of optical fiber propagation demonstrating entrance within the acceptance cone of half-angle $\theta_a$ (Numerical Aperture $NA = \sqrt{n_1^2 - n_2^2}$), refraction into the high-index core ($n_1$), and continuous low-loss total internal reflection along the core-cladding interface ($n_1 > n_2$).


________________




4. High-Yield JEE Main Problem Archetypes & Formulas


* Archetype 1: Antenna Height Scaling for Doubled Coverage Range


   * Since $d = \sqrt{2 R_e h} \implies h \propto d^2$: $$\frac{h_2}{h_1} = \left(\frac{d_2}{d_1}\right)^2$$
   * To double transmission distance ($d_2 = 2d_1$), antenna height must be increased by a factor of 4.


* Archetype 2: Modulation Index Calculation from Peak-to-Peak Measurements


   * Given $A_{max} = 12\text{ V}$ and $A_{min} = 4\text{ V}$: $$\mu = \frac{12 - 4}{12 + 4} = \frac{8}{16} = 0.50 \quad (50\%)$$ $$A_c = \frac{12 + 4}{2} = 8\text{ V}, \quad A_m = \frac{12 - 4}{2} = 4\text{ V}$$


* Archetype 3: Transmitter Power Increase with Modulation


   * An unmodulated carrier has power $P_c = 10\text{ kW}$. Under $60\%$ modulation ($\mu = 0.6$): $$P_t = P_c\left(1 + \frac{\mu^2}{2}\right) = 10\left(1 + \frac{0.36}{2}\right) = 10(1 + 0.18) = 11.8\text{ kW}$$


* Archetype 4: Numerical Aperture and Critical Angle


   * For core $n_1 = 1.50$ and cladding $n_2 = 1.45$: $$NA = \sqrt{(1.50)^2 - (1.45)^2} = \sqrt{2.25 - 2.1025} = \sqrt{0.1475} \approx 0.384$$ $$\theta_a = \sin^{-1}(0.384) \approx 22.58^\circ$$ $$\sin\theta_c = \frac{1.45}{1.50} = 0.9667 \implies \theta_c \approx 75.16^\circ$$