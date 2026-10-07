Physics Revision Context: Chapter 98 — Principles of Communication Systems, Modulation & Wave Propagation
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/Principal of Communication/, Principal of Communication Theory.pdf, Principal of Communication Exercises.pdf, Principal of Communication Exercise Solutions.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Principles of Communication Systems, Modulation & Wave Propagation (Elements of Communication Systems: Transmitter, channel, receiver, Transducers, Noise, Attenuation, Bandwidths of speech $3.1\ \text{kHz}$, music $20\ \text{kHz}$, video $4.2\ \text{MHz}$, and channels; Physical Necessity of Modulation: Antenna size $\ell \ge \lambda/4$, Radiated power $P \propto (\ell/\lambda)^2$, Prevention of signal mixing; Amplitude Modulation (AM): Carrier $A_c\sin\omega_c t$, Modulating signal $A_m\sin\omega_m t$, Modulation index $\mu = \frac{A_m}{A_c} = \frac{A_{\max}-A_{\min}}{A_{\max}+A_{\min}}$, Sideband spectrum ($f_c - f_m, f_c + f_m$), Bandwidth $2f_m$, Transmitted power $P_t = P_c(1 + \mu^2/2)$, Current relation $I_t = I_c\sqrt{1+\mu^2/2}$, Transmission efficiency $\eta = \frac{\mu^2}{2+\mu^2}$, Multi-tone modulation $\mu_{\text{net}} = \sqrt{\sum \mu_i^2}$; Detection & Demodulation: Diode envelope detector, RC filter time constant condition $\frac{1}{f_c} \ll RC \ll \frac{1}{f_m}$; Frequency Modulation (FM): Frequency deviation $\Delta f = k_f A_m$, Carrier swing $2\Delta f$, Modulation index $m_f = \Delta f/f_m$, Superior noise immunity; Electromagnetic Wave Propagation: Ground wave propagation ($< 2\ \text{MHz}$), Sky wave ionospheric propagation ($3 - 30\ \text{MHz}$), Refractive index $\mu = \sqrt{1 - 81N/f^2}$, Critical frequency $f_c \approx 9\sqrt{N_{\max}}$, Maximum usable frequency $\text{MUF} = f_c\sec i$, Skip distance $d_{\text{skip}} = 2h\sqrt{(\text{MUF}/f_c)^2 - 1}$, Space wave line-of-sight propagation ($> 30\ \text{MHz}$), Radio horizon $d = \sqrt{2Rh}$, Maximum range $d_{\max} = \sqrt{2Rh_T} + \sqrt{2Rh_R}$, Surface area and population coverage $A \approx 2\pi Rh_T$; High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Communication Architecture, Modulation Need & AM Analytics
![Communication Systems Elements And Amplitude Modulation Kinetics](/media/communication_systems_elements_and_amplitude_modulation_kinetics.webp) Description: Two-panel reference diagram for communication systems and modulation: (Panel A) Block architecture of communication systems, signal bandwidth taxonomy, antenna dimension constraints, and power radiation scaling; (Panel B) Amplitude modulation time domain envelope, frequency sideband spectrum, power distribution, current relations, and diode envelope detector RC filter design.
1.1 Elements of an Electronic Communication System
Communication is the transmission of information from an origin to a recipient through an intervening physical link.


* Basic Components:
   1. Transmitter: Converts message signal into a format suitable for channel transmission via transducers and modulators.
   2. Communication Channel: Physical transmission path (guided media: wireline, coaxial, optical fiber; unguided media: free space).
   3. Receiver: Reconstructs the original baseband signal via amplifiers, detectors, and output transducers.
* Fundamental Terminology:
   * Transducer: Device converting a physical quantity (sound, light, pressure) into an electrical signal or vice-versa.
   * Attenuation: Exponential loss of signal strength during propagation ($P(x) = P_0 e^{-\alpha x}$, measured in decibels, $\text{dB}$).
   * Noise: Random, unwanted electrical disturbances introduced into the channel that degrade signal fidelity.
   * Repeater: Combination of receiver, amplifier, and transmitter used to extend transmission range.
Bandwidth Allocation of Information Signals
* Speech Signal: $300\ \text{Hz} - 3100\ \text{Hz} \implies \mathbf{\text{Bandwidth} \approx 2800\ \text{Hz} \approx 3.1\ \text{kHz}}$.
* Music Signal: $20\ \text{Hz} - 20\ \text{kHz} \implies \mathbf{\text{Bandwidth} \approx 20\ \text{kHz}}$.
* Video (Television) Signal: Requires $\approx 4.2\ \text{MHz}$. A standard commercial TV broadcast channel is allocated $6\ \text{MHz}$ (video + audio + guard bands).
* Digital Data: High-speed streams quantified in bits per second ($\text{bps}$ or $\text{Mbps}$).


________________


1.2 Physical Necessity of Modulation
Low-frequency baseband signals (audio frequencies $20\ \text{Hz} - 20\ \text{kHz}$) cannot be radiated directly into space:


1. Antenna Dimension Constraint: An effective electromagnetic radiator requires an antenna length comparable to at least one-quarter of the signal wavelength: $$\mathbf{\ell \ge \frac{\lambda}{4}}$$
   * For an audio frequency $f = 15\ \text{kHz}$, $\lambda = \frac{c}{f} = \frac{3 \times 10^8}{15 \times 10^3} = 20\ \text{km} \implies \mathbf{\ell \ge 5\ \text{km}}$ (physically unrealizable!).
   * By modulating onto a radio carrier $f_c = 1\ \text{MHz}$, $\lambda = 300\ \text{m} \implies \mathbf{\ell \ge 75\ \text{m}}$ (easily constructed tower).
2. Effective Power Radiated by Antenna: The electromagnetic power radiated by a linear dipole antenna scales inversely with the square of wavelength: $$\mathbf{P \propto \left(\frac{\ell}{\lambda}\right)^2 \propto \ell^2 f^2}$$ Low-frequency signals radiate virtually zero power into space; RF carrier frequencies radiate with immense efficiency.
3. Avoidance of Signal Mixing / Channel Multiplexing: Unmodulated broadcasts from different transmitters would overlap identically across the audio band, producing garbled reception. Carrier modulation assigns unique carrier frequencies to each transmitter.


________________


1.3 Amplitude Modulation (AM) Mathematics
In amplitude modulation, the instantaneous amplitude of the high-frequency carrier wave is varied in linear proportion to the instantaneous amplitude of the message signal, while its frequency and phase remain invariant.


* Carrier Wave: $c(t) = A_c \sin(\omega_c t)$
* Modulating Message Signal: $m(t) = A_m \sin(\omega_m t) \quad (\omega_m \ll \omega_c)$
* Resultant Modulated Wave: $$c_m(t) = (A_c + A_m \sin\omega_m t)\sin(\omega_c t) = A_c [1 + \mu \sin(\omega_m t)]\sin(\omega_c t)$$
1. Modulation Index ($\mu$ or $m$)
$$\mathbf{\mu = \frac{A_m}{A_c} = \frac{A_{\max} - A_{\min}}{A_{\max} + A_{\min}}}$$ Where $A_{\max} = A_c + A_m$ and $A_{\min} = A_c - A_m$.


* Operating Constraint: For distortionless transmission, $\mu \le 1$ ($0 \le \mu \le 100\%$).
* If $\mu > 1$ (overmodulation), the carrier envelope crosses zero, leading to severe phase reversal distortion.
2. Spectral Sidebands & Transmission Bandwidth
Expanding the product of sine terms: $$c_m(t) = A_c \sin(\omega_c t) + \frac{\mu A_c}{2}\cos(\omega_c - \omega_m)t - \frac{\mu A_c}{2}\cos(\omega_c + \omega_m)t$$ The spectrum contains exactly three distinct frequencies:


1. Carrier Component: $\omega_c$ (frequency $f_c$, amplitude $A_c$).
2. Lower Sideband (LSB): $\omega_c - \omega_m$ (frequency $f_c - f_m$, amplitude $\frac{\mu A_c}{2}$).
3. Upper Sideband (USB): $\omega_c + \omega_m$ (frequency $f_c + f_m$, amplitude $\frac{\mu A_c}{2}$).
* Transmission Bandwidth ($\text{BW}$): $$\mathbf{\text{BW} = f_{\text{USB}} - f_{\text{LSB}} = (f_c + f_m) - (f_c - f_m) = 2 f_m}$$ (The bandwidth of an AM wave is strictly twice the highest modulating frequency!).
3. Power Distribution in AM Waves
* Carrier Power: $P_c = \frac{A_c^2}{2 R}$
* Power in each Sideband: $P_{\text{USB}} = P_{\text{LSB}} = \frac{(\mu A_c / 2)^2}{2 R} = \frac{\mu^2}{4} P_c$
* Total Sideband Power: $P_{\text{SB}} = P_{\text{USB}} + P_{\text{LSB}} = \frac{\mu^2}{2} P_c$
* Total Radiated Power ($P_t$): $$\mathbf{P_t = P_c + P_{\text{SB}} = P_c \left(1 + \frac{\mu^2}{2}\right)}$$
* Total Antenna Current ($I_t$): $$\mathbf{I_t = I_c \sqrt{1 + \frac{\mu^2}{2}}}$$
* Multi-Tone Modulation Index: When a carrier is simultaneously modulated by multiple audio frequencies: $$\mathbf{\mu_{\text{net}} = \sqrt{\mu_1^2 + \mu_2^2 + \mu_3^2 + \dots}}$$
* Modulation Transmission Efficiency ($\eta$): $$\mathbf{\eta = \frac{P_{\text{SB}}}{P_t} = \frac{\frac{\mu^2}{2} P_c}{P_c \left(1 + \frac{\mu^2}{2}\right)} = \frac{\mu^2}{2 + \mu^2}}$$
   * At $100\%$ modulation ($\mu = 1$): $\mathbf{\eta_{\max} = \frac{1}{3} \approx 33.3\%}$.
   * Critical Insight: Two-thirds of transmitted power ($66.7\%$) resides in the unmodulated carrier, which transmits no actual message information!


________________


1.4 Detection & Demodulation of AM Signals
Demodulation is the retrieval of the original modulating audio signal $m(t)$ from the RF carrier.


* Diode Envelope Detector:
   1. The incoming AM wave passes through a diode that performs half-wave rectification, lopping off the negative envelope.
   2. The rectified output charges a parallel $RC$ low-pass filter:
      * During the carrier pulse, the capacitor charges rapidly to the peak value.
      * Between carrier peaks, the diode is reverse-biased and the capacitor discharges slowly through resistor $R$.
* Time Constant Invariant: $$\mathbf{\frac{1}{f_c} \ll R C \ll \frac{1}{f_m}}$$
   * If $RC \le 1/f_c$: The filter fails to smooth the RF carrier, passing radio frequency ripples.
   * If $RC \ge 1/f_m$: Diagonal clipping occurs; the filter cannot discharge fast enough to follow rapid audio down-slopes.


________________


2. Frequency Modulation & Atmospheric Wave Propagation
![Radio Wave Propagation Ionosphere And Space Wave Los Range](/media/radio_wave_propagation_ionosphere_and_space_wave_los_range.webp) Description: Two-panel reference diagram for wave propagation and line-of-sight metrics: (Panel A) Ground, sky, and space wave propagation classification, atmospheric layers, and ionospheric plasma reflection analytics including critical frequency, MUF, and skip distance; (Panel B) Line-of-sight space wave horizon geometry, dual-tower transmission range formula, coverage area calculation, and frequency modulation parameters.
2.1 Frequency Modulation (FM) Fundamentals
In frequency modulation, the instantaneous frequency of the carrier is varied in proportion to the message amplitude, keeping the carrier amplitude strictly constant ($A_c = \text{constant}$).


* Instantaneous Frequency: $f(t) = f_c + k_f m(t)$
* Frequency Deviation ($\Delta f$): The maximum shift of the carrier frequency from its central unmodulated value: $$\mathbf{\Delta f = k_f A_m}$$
* Carrier Swing ($\text{CS}$): The total frequency excursion between maximum and minimum limits: $$\mathbf{\text{CS} = 2 \Delta f}$$
* FM Modulation Index ($m_f$): $$\mathbf{m_f = \frac{\Delta f}{f_m}}$$
* Commercial FM Standards:
   * Broadcast frequency band: $88 - 108\ \text{MHz}$ (VHF).
   * Maximum frequency deviation allowed: $\Delta f = 75\ \text{kHz}$.
   * Channel bandwidth spacing: $200\ \text{kHz}$.
* Advantages over AM:
   1. High Noise Immunity: Natural atmospheric and electrical interference modulates amplitude; since an FM receiver employs amplitude limiters, noise is clipped off cleanly.
   2. Constant Transmitted Power: Independent of modulation depth.


________________


2.2 Modes of Electromagnetic Wave Propagation
Depending on the transmitting frequency, electromagnetic waves propagate through Earth's atmosphere via three distinct mechanisms:
1. Ground (Surface) Wave Propagation ($f < 2\ \text{MHz}$)
* Radio waves glide directly over the conductive surface of the Earth, guided by diffraction along its curvature.
* Limitations: Induces alternating currents in the Earth's crust, causing rapid energy absorption and attenuation. Attenuation increases sharply with frequency; hence practical range is limited to low frequencies ($f < 2\ \text{MHz}$, standard AM broadcasting).
2. Sky Wave (Ionospheric) Propagation ($3\ \text{MHz} - 30\ \text{MHz}$)
* Transmitted waves travel upwards and undergo total internal reflection back to Earth from the ionized plasma layers of the ionosphere ($80 - 400\ \text{km}$ altitude, layers $D, E, F_1, F_2$).
* Ionospheric Plasma Refractive Index: $$\mathbf{\mu = \sqrt{1 - \frac{81 N}{f^2}}}$$ Where $N$ is the free electron density ($\text{electrons/m}^3$) and $f$ is wave frequency in $\text{Hz}$.
* Critical Frequency ($f_c$): The highest frequency that is reflected back to Earth when transmitted vertically ($i = 0^\circ$): $$\mu = 0 \implies 1 - \frac{81 N_{\max}}{f_c^2} = 0 \implies \mathbf{f_c = \sqrt{81 N_{\max}} \approx 9 \sqrt{N_{\max}}}$$ (Signals with frequency $f > f_c$ penetrate through the ionosphere into outer space at vertical incidence!).
* Maximum Usable Frequency ($\text{MUF}$): At oblique incidence angle $i$: $$\mathbf{\text{MUF} = \frac{f_c}{\cos i} = f_c \sec i}$$
* Skip Distance ($d_{\text{skip}}$): The minimum distance from the transmitting antenna at which a sky wave of frequency $\text{MUF}$ first returns to the surface: $$\mathbf{d_{\text{skip}} = 2 h \sqrt{\left(\frac{\text{MUF}}{f_c}\right)^2 - 1}}$$ Where $h$ is the effective height of the reflecting ionospheric layer.
3. Space Wave (Line-of-Sight, LOS) Propagation ($f > 30 - 40\ \text{MHz}$)
* High-frequency waves ($> 40\ \text{MHz}$: FM radio, Television, Radar, Cellular, Satellite links) cannot be reflected by the ionosphere ($\mu \approx 1$).
* Propagation occurs along straight Line-of-Sight (LOS) paths from transmitter to receiver.


________________


2.3 Line-of-Sight Range & Earth Curvature Geometry
Due to the spherical curvature of the Earth ($R \approx 6400\ \text{km}$), the straight ray from a tower of height $h$ intersects the horizon at a finite distance.
1. Horizon Range for a Single Tower
For a tower of height $h \ll R$, using the right-angled tangent triangle: $$(R + h)^2 = R^2 + d^2 \implies R^2 + 2Rh + h^2 = R^2 + d^2 \implies d^2 \approx 2Rh$$ $$\mathbf{d = \sqrt{2 R h}}$$
2. Maximum Line-of-Sight Range ($d_{\max}$) Between Two Antennas
For a transmitting antenna of height $h_T$ and a receiving antenna of height $h_R$: $$\mathbf{d_{\max} = d_T + d_R = \sqrt{2 R h_T} + \sqrt{2 R h_R}}$$
3. Surface Area & Population Coverage of a Transmitter
* Surface Area Covered on Earth: $$\mathbf{A = \pi d_T^2 = \pi (2 R h_T) = 2 \pi R h_T}$$
* Total Population Covered: $$\mathbf{\text{Population Covered} = \text{Area } A \times \text{Population Density}}$$


________________


3. High-Yield Problem Archetypes & Structural JEE Traps
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Total Transmitted Power in AM
	Forgetting the $1/2$ factor on $\mu^2$: writing $P_t = P_c(1 + \mu^2)$.
	Sideband power is distributed in two sidebands of amplitude $\mu A_c / 2$: $\mathbf{P_t = P_c \left(1 + \frac{\mu^2}{2}\right)}$.
	2
	Current Relation in AM Transmitter
	Assuming antenna current scales linearly with $\mu$: $I_t = I_c(1 + \mu/2)$.
	Since $P \propto I^2$, total antenna current scales with the square root: $\mathbf{I_t = I_c \sqrt{1 + \frac{\mu^2}{2}}}$.
	3
	Bandwidth of Amplitude Modulated Wave
	Stating bandwidth equals the message frequency $f_m$.
	AM generates two sidebands (USB at $f_c + f_m$ and LSB at $f_c - f_m$); transmission bandwidth is $\text{BW} = 2 f_m$.
	4
	Diode Detector RC Filter Constraint
	Setting $RC \approx 1/f_m$ or $RC \approx 1/f_c$.
	The detector must filter the carrier while tracking the audio envelope: $\mathbf{\frac{1}{f_c} \ll RC \ll \frac{1}{f_m}}$.
	5
	Maximum Usable Frequency Angle
	Taking $i$ as the glancing angle to the horizontal.
	In $\text{MUF} = f_c \sec i$, the angle $i$ is the angle of incidence measured with the normal to the ionospheric layer!
	6
	Range of TV Broadcast Tower
	Taking $d = \sqrt{R h}$ or forgetting receiver height $h_R$.
	Total line-of-sight range is $\mathbf{d_{\max} = \sqrt{2Rh_T} + \sqrt{2Rh_R}}$. Both tower heights contribute independently.
	7
	Ionosphere Reflection for TV Signals
	Expecting TV signals ($100\ \text{MHz}$) to be reflected via sky wave.
	Electron density in the ionosphere can only reflect frequencies up to $\approx 30\ \text{MHz}$. TV signals penetrate into space (space wave only).
	8
	Power Efficiency of AM Transmission
	Believing AM efficiency is $100\%$ at $\mu = 1$.
	At $\mu = 1$, sideband power is only $\frac{1}{3}$ of total power: maximum transmission efficiency is $\eta = \frac{1}{3} \approx 33.3\%$; $66.7\%$ is wasted in the carrier.
	9
	Multi-Tone Modulation Index Sum
	Summing modulation indices algebraically: $\mu_{\text{net}} = \mu_1 + \mu_2$.
	Uncorrelated audio tones combine orthogonally in power: $\mathbf{\mu_{\text{net}} = \sqrt{\mu_1^2 + \mu_2^2 + \mu_3^2}}$.
	10
	Antenna Length vs Wavelength
	Designing an antenna with length equal to $\lambda$.
	A standard resonant dipole requires a length of at least $\ell = \lambda/4$ (quarter-wave monopole) or $\lambda/2$ (half-wave dipole).
	

________________