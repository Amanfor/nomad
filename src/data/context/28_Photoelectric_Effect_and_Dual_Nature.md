Physics Revision Context: Chapter 28 — Photoelectric Effect, Radiation Pressure, and Matter Waves


**Source:** `scraped/Coaching_Modules/Praveen FL 2023-24/.../Notes/Photoelectric effect teaching pdf.pdf`, `PhotoElectric_dualNatureTheory.pdf`, & `characteristic-and-continuous-x-rays.pdf`  
**Extracted into:** `JEE/context/`  
**Batch:** Physics Modern Physics Core — Photon Dynamics & Energy-Momentum Invariants ($E = h\nu$, $p = \frac{h}{\lambda}$), Einstein's Photoelectric Equation ($K_{\text{max}} = h\nu - \phi_0 = eV_0$), Work Functions of Photosensitive Metals, Stopping Potential & Saturation Current Analytics, Failure of Classical Wave Theory vs. Quantum Photon Mechanics, Radiation Force & Radiation Pressure Formulations (Normal, Oblique, Planar, and Spherical Geometries), De Broglie Matter Waves ($\lambda = \frac{h}{p} = \frac{h}{\sqrt{2mqV}}$), Davisson-Germer Electron Diffraction Experiment, Continuous X-Rays (Duane-Hunt Law $\lambda_{\text{min}} = \frac{hc}{eV}$), Characteristic X-Rays & Moseley's Law ($\sqrt{\nu} = a(Z - b)$)  
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams  


---


## 1. Particle Nature of Light & Photon Mechanics


### 1.1 Planck's Quantum Hypothesis & The Photon
* **Quantum Hypothesis:** Electromagnetic radiation is emitted, propagated, and absorbed not as continuous waves, but in discrete, localized packets or bundles of energy called **quanta** or **photons**.
* **Photon Energy ($E$):**
  $$E = h\nu = \frac{hc}{\lambda}$$
  where:
  * $h = 6.626 \times 10^{-34}\text{ J}\cdot\text{s} = 4.136 \times 10^{-15}\text{ eV}\cdot\text{s}$ (Planck's constant).
  * $\nu$ = Frequency of radiation in $\text{Hz}$ ($\text{s}^{-1}$).
  * $\lambda$ = Wavelength of radiation in meters.
  * $c = 3.0 \times 10^8\text{ m/s}$ (Speed of light in vacuum).
  * **High-Speed JEE Approximation:**
    $$E\text{ (in eV)} = \frac{12400}{\lambda\text{ (in \AA)}} = \frac{1240}{\lambda\text{ (in nm)}}$$


### 1.2 Fundamental Invariants of Photons
1. **Speed:** Every photon travels in vacuum at the invariant speed of light $c = 3.0 \times 10^8\text{ m/s}$, regardless of the motion of the source or the observer.
2. **Rest Mass:** The rest mass of a photon is identically zero ($m_0 \equiv 0$). A photon cannot exist at rest.
3. **Effective / Dynamic Mass ($m$):**
   From Einstein's mass-energy equivalence ($E = mc^2 = h\nu$):
   $$m = \frac{h\nu}{c^2} = \frac{h}{c\lambda}$$
4. **Linear Momentum ($p$):**
   $$p = mc = \frac{E}{c} = \frac{h\nu}{c} = \frac{h}{\lambda}$$
5. **Electrical Neutrality:** Photons are electrically neutral. They are unaffected by external electric and magnetic fields.
6. **Photon-Particle Collisions:** In every collision between a photon and a subatomic particle (such as an electron in the Compton effect or photoelectric effect), total energy and total linear momentum are conserved. However, the number of photons may not be conserved (a photon may be absorbed or created).


### 1.3 Radiant Intensity, Photon Flux, and Power
* **Radiant Power ($P$):** Energy emitted or transmitted per unit time ($P = \frac{dE}{dt}$).
* **Radiant Intensity ($I$):** Radiant energy incident per unit surface area per unit time perpendicular to the propagation vector:
  $$I = \frac{\Delta E}{A \Delta t} = \frac{P}{A} \quad (\text{W/m}^2)$$
* **Photon Flux ($\Phi$):** The number of photons crossing per unit area per unit time:
  $$\Phi = \frac{N}{A \Delta t} = \frac{I}{h\nu} = \frac{I \lambda}{hc}$$
* **Rate of Photon Incidence ($n$):**
  $$n = \frac{dN}{dt} = \Phi A = \frac{P}{h\nu} = \frac{P\lambda}{hc}$$


---


## 2. The Photoelectric Effect & Einstein's Analytical Formulation


### 2.1 Phenomenon & Basic Terminology
* **Photoelectric Effect:** The emission of electrons (termed *photoelectrons*) from a metallic surface when exposed to electromagnetic radiation of sufficiently high frequency.
* **Work Function ($\phi_0$ or $W$):** The minimum energy required to liberate an electron from the Fermi level of the metal surface with zero kinetic energy:
  $$\phi_0 = h\nu_0 = \frac{hc}{\lambda_0}$$
  * Work function depends strictly on the nature of the metal and the surface condition (purity, oxidation). It is completely independent of the intensity or frequency of incident radiation.
* **Work Functions of Standard Photosensitive Metals (in $\text{eV}$):**


| Metal | Work Function $\phi_0$ ($\text{eV}$) | Metal | Work Function $\phi_0$ ($\text{eV}$) |
| :--- | :--- | :--- | :--- |
| **Cesium ($\text{Cs}$)** | $1.90\text{ eV}$ *(Lowest)* | **Calcium ($\text{Ca}$)** | $3.20\text{ eV}$ |
| **Potassium ($\text{K}$)** | $2.20\text{ eV}$ | **Copper ($\text{Cu}$)** | $4.50\text{ eV}$ |
| **Sodium ($\text{Na}$)** | $2.30\text{ eV}$ | **Silver ($\text{Ag}$)** | $4.70\text{ eV}$ |
| **Lithium ($\text{Li}$)** | $2.50\text{ eV}$ | **Platinum ($\text{Pt}$)** | $5.65\text{ eV}$ *(Highest)* |


* **Threshold Frequency ($\nu_0$):** The minimum frequency of incident radiation below which no photoelectric emission occurs, regardless of intensity:
  $$\nu_0 = \frac{\phi_0}{h}$$
* **Threshold Wavelength ($\lambda_0$ or $\lambda_{\text{th}}$):** The maximum (cutoff) wavelength capable of inducing photoelectric emission:
  $$\lambda_0 = \frac{hc}{\phi_0}$$
  * Emission condition: $\nu \ge \nu_0$ or $\lambda \le \lambda_0$.


### 2.2 Einstein's Photoelectric Equation
* Einstein postulated that the absorption of light occurs via one-to-one individual interactions between a single photon and a single conduction electron.
* The incident photon energy $h\nu$ is partitioned into:
  1. Overcoming the surface electrostatic barrier (work function $\phi_0$).
  2. Imparting kinetic energy to the ejected electron.
* Since electrons in a metallic lattice reside at different energy levels below the Fermi surface and undergo varying numbers of internal collisions before reaching the surface:
  $$0 \le K_{\text{electron}} \le K_{\text{max}}$$
* **Maximum Kinetic Energy ($K_{\text{max}}$):** Ejected from the outermost Fermi surface with zero internal collisional loss:
  $$\mathbf{Einstein's\ Equation:}\quad K_{\text{max}} = h\nu - \phi_0 = h(\nu - \nu_0) = hc\left(\frac{1}{\lambda} - \frac{1}{\lambda_0}\right)$$
* In terms of electron maximum speed $v_{\text{max}}$:
  $$K_{\text{max}} = \frac{1}{2}m_e v_{\text{max}}^2 = h\nu - \phi_0$$


### 2.3 Stopping Potential ($V_0$ or $V_s$)
* **Definition:** The minimum negative (retarding) electric potential applied to the collector anode relative to the photosensitive cathode that completely arrests the most energetic photoelectrons, reducing the photoelectric current to zero ($i = 0$).
* **Electrostatic Work-Energy Relation:**
  $$e V_0 = K_{\text{max}} = \frac{1}{2}m_e v_{\text{max}}^2$$
  $$e V_0 = h\nu - \phi_0 \implies \mathbf{Stopping\ Potential:}\quad V_0 = \left(\frac{h}{e}\right)\nu - \frac{\phi_0}{e} = \left(\frac{hc}{e}\right)\frac{1}{\lambda} - \frac{\phi_0}{e}$$
* **High-Yield Invariants:**
  1. Stopping potential $V_0$ depends strictly on the incident radiation frequency $\nu$ (or $\lambda$) and the target work function $\phi_0$.
  2. Stopping potential is **completely independent of the intensity** of incident light.


---


## 3. Experimental Laws & Graphical Analytics


### 3.1 Experimental Laws of Photoelectric Emission
1. **Threshold Law:** For every photosensitive material, there exists a definite threshold frequency $\nu_0$ below which no photoelectrons are emitted, no matter how intense the light beam.
2. **Current-Intensity Proportionality:** For a given frequency $\nu > \nu_0$, the saturation photoelectric current ($i_{\text{sat}}$) is directly proportional to the incident light intensity ($i_{\text{sat}} \propto I$).
3. **Kinetic Energy Independence:** The maximum kinetic energy ($K_{\text{max}}$) and stopping potential ($V_0$) of emitted photoelectrons are strictly independent of light intensity, but increase linearly with incident frequency $\nu$.
4. **Instantaneous Nature:** Photoelectric emission is instantaneous; the time lag between photon arrival and electron ejection is less than $10^{-9}\text{ s}$ ($\sim 1\text{ ns}$).


---


### 3.2 Visual Preservation: I-V Curves & Experimental Signatures


![Photoelectric Effect I-V Characteristic Curves](/media/photoelectric_effect_iv_characteristic_curves.webp)
*Description: Two-panel experimental characteristic plots: (A) Photoelectric current versus collector potential for different light intensities ($I_3 > I_2 > I_1$) at fixed frequency, showing an identical negative stopping potential $-V_0$ on the potential axis and proportionally increasing saturation current plateaus ($i_{s3} > i_{s2} > i_{s1}$); (B) Photoelectric current versus collector potential for different frequencies ($\nu_3 > \nu_2 > \nu_1$) at fixed intensity, illustrating distinct stopping potentials ($-V_{03} < -V_{02} < -V_{01}$) and a shared saturation current level.*


---


### 3.3 Visual Preservation: Einstein Photoelectric Linear Graphs


![Einstein Photoelectric Graphs and Work Function](/media/einstein_photoelectric_graphs_and_work_function.webp)
*Description: Two-panel diagnostic linear plots: (A) Maximum kinetic energy $K_{\mathrm{max}}$ versus incident frequency $\nu$ for two distinct metals ($M_1$ Cesium and $M_2$ Copper), exhibiting parallel lines of universal slope $\tan\theta = h$, horizontal threshold intercepts $\nu_{01}$ and $\nu_{02}$, and vertical negative intercepts representing work functions $-\phi_1$ and $-\phi_2$; (B) Stopping potential $V_0$ versus frequency $\nu$ with universal slope $\tan\theta = h/e \approx 4.14 \times 10^{-15}\text{ V}\cdot\text{s}$ and negative intercepts $-\phi/e$.*


---


### 3.4 Classical Wave Theory Failures vs. Quantum Explanation


| Observed Phenomenon | Classical Wave Theory Prediction | Experimental Reality & Quantum Resolution |
| :--- | :--- | :--- |
| **Dependence of $K_{\text{max}}$ on Intensity** | Wave energy is proportional to square of electric field amplitude ($I \propto E_0^2$). Higher intensity should supply greater energy and increase $K_{\text{max}}$. | **Contradiction:** $K_{\text{max}}$ is strictly independent of intensity. Quantum theory: Intensity only increases photon flux (number of photons per second), not the energy per photon ($E = h\nu$). |
| **Existence of Threshold Frequency ($\nu_0$)** | An electromagnetic wave of any frequency should eject electrons if intensity is high enough or illumination lasts long enough to accumulate required energy. | **Contradiction:** Below $\nu_0$, emission is impossible even under massive laser intensity. Quantum theory: One electron absorbs only one photon; if $h\nu < \phi_0$, energy is insufficient. |
| **Instantaneous Emission ($\Delta t < 10^{-9}\text{ s}$)** | Wave energy spreads continuously over the wavefront. An electron occupying an area of atomic radius ($r \sim 10^{-10}\text{ m}$) requires hours or days to accumulate $\sim 2\text{ eV}$ from low-intensity light. | **Contradiction:** Emission occurs instantaneously ($< 1\text{ ns}$). Quantum theory: Energy is localized in a point-like photon; energy transfer is instantaneous upon collision. |


---


## 4. Radiation Force & Radiation Pressure Formulations


When electromagnetic radiation impinges on a surface, the photons transfer linear momentum, exerting a mechanical force and radiation pressure.


### 4.1 Normal Incidence ($\theta = 0^\circ$)
Consider a parallel beam of intensity $I$, cross-sectional area $A$, impinging normally on a flat surface.
1. **Perfectly Absorbing Surface ($r = 0, a = 1$):**
   * Initial momentum of photon: $p_i = \frac{h}{\lambda} = \frac{E}{c}$.
   * Final momentum after absorption: $p_f = 0$.
   * Momentum delivered per photon: $\Delta p = p_i - p_f = \frac{E}{c}$.
   * Total force on area $A$:
     $$\mathbf{Radiation\ Force:}\quad F = \frac{dp}{dt} = \frac{1}{c}\frac{dE}{dt} = \frac{IA}{c}$$
   * **Radiation Pressure:**
     $$\mathbf{Radiation\ Pressure:}\quad P_{\text{rad}} = \frac{F}{A} = \frac{I}{c}$$
2. **Perfectly Reflecting Surface ($r = 1, a = 0$):**
   * Initial momentum: $p_i = +\frac{E}{c}$. Final momentum: $p_f = -\frac{E}{c}$.
   * Momentum transferred per photon: $\Delta p = p_i - p_f = \frac{2E}{c}$.
   * Total force:
     $$F = \frac{2IA}{c}$$
   * Radiation pressure:
     $$P_{\text{rad}} = \frac{2I}{c}$$
3. **Partially Reflecting Surface (Reflection Coefficient $r$, Absorption Coefficient $a = 1 - r$):**
   $$F = \frac{(1 + r)IA}{c}, \quad P_{\text{rad}} = \frac{(1 + r)I}{c}$$


### 4.2 Oblique Incidence (Angle of Incidence $\theta$ with Surface Normal)
Consider radiation of intensity $I$ incident over a surface of area $A$ at angle $\theta$ to the surface normal.
* Effective intercepting beam area: $A_{\text{eff}} = A\cos\theta$.
* Incident radiant power: $P_{\text{in}} = I A\cos\theta$.
1. **Perfectly Absorbing Surface:**
   * Total force points along the direction of the incident beam:
     $$\vec{F} = \frac{IA\cos\theta}{c}\quad (\text{along incident beam direction})$$
   * Normal force component:
     $$F_n = F\cos\theta = \frac{IA\cos^2\theta}{c}$$
   * Tangential force component:
     $$F_t = F\sin\theta = \frac{IA\sin\theta\cos\theta}{c}$$
   * **Radiation Pressure (Normal Force per unit Area):**
     $$P_{\text{rad}} = \frac{F_n}{A} = \frac{I\cos^2\theta}{c}$$
2. **Perfectly Reflecting Surface:**
   * Tangential momentum is conserved ($v_t = u_t \implies \Delta p_t = 0$).
   * Tangential force vanishes identically: $F_t = 0$.
   * Normal momentum change per photon is doubled: $\Delta p_n = 2 p\cos\theta$.
   * Normal force:
     $$F_n = \frac{2IA\cos^2\theta}{c}$$
   * **Radiation Pressure:**
     $$P_{\text{rad}} = \frac{F_n}{A} = \frac{2I\cos^2\theta}{c}$$


### 4.3 Curved & Spherical Surfaces
* **Radiation Force on a Sphere of Radius $R$:**
  * For a parallel beam of intensity $I$ incident on a sphere of radius $R$:
  * **Perfectly Absorbing Sphere:** Every photon striking the projected disk of area $\pi R^2$ is absorbed:
    $$F = \frac{I (\pi R^2)}{c} = \frac{\pi R^2 I}{c}$$
  * **Perfectly Reflecting Sphere (Specular Reflection):** By integrating $dF_n\cos\theta$ over the hemispherical surface, lateral components cancel by symmetry, and the net forward force is identically:
    $$F = \frac{\pi R^2 I}{c}$$
  * *JEE Invariant:* The net radiation force on a sphere of radius $R$ is **identically $\frac{\pi R^2 I}{c}$ whether it is perfectly absorbing or perfectly reflecting**.


---


### 4.4 Visual Preservation: Radiation Pressure & De Broglie Waves


![De Broglie Matter Waves and Radiation Pressure](/media/de_broglie_matter_waves_and_radiation_pressure.webp)
*Description: Two-panel fundamental modern physics schematic: (A) Mathematical and geometric summary of radiation force and pressure across normal incidence ($F = IA/c$ absorbing, $2IA/c$ reflecting), oblique incidence ($P = \frac{I\cos^2\theta}{c}$ absorbing, $\frac{2I\cos^2\theta}{c}$ reflecting), and the spherical invariant $F = \frac{\pi R^2 I}{c}$; (B) De Broglie matter wavelength curves $\lambda$ as a function of accelerating potential $V$ for electron, proton, deuteron, and alpha particles, alongside Davisson-Germer electron diffraction peak analytics.*


---


## 5. De Broglie Matter Waves & Particle-Wave Duality


### 5.1 De Broglie Hypothesis
* In 1924, Louis de Broglie proposed that nature displays symmetry: since radiation exhibits dual (wave-particle) properties, material particles (electrons, protons, neutrons, atoms) must also possess wave-like attributes.
* **De Broglie Wavelength ($\lambda$):**
  $$\lambda = \frac{h}{p} = \frac{h}{m v}$$
* In terms of kinetic energy $K$:
  $$K = \frac{p^2}{2m} \implies p = \sqrt{2mK} \implies \mathbf{\lambda} = \frac{h}{\sqrt{2mK}}$$


### 5.2 De Broglie Wavelength of Accelerated Charged Particles
When a particle of charge $q$ and mass $m$ is accelerated from rest through a potential difference $V$:
$$K = q V \implies \lambda = \frac{h}{\sqrt{2m q V}}$$


* **1. Electron ($m_e = 9.11 \times 10^{-31}\text{ kg}, q = 1.602 \times 10^{-19}\text{ C}$):**
  $$\lambda_e = \frac{6.626 \times 10^{-34}}{\sqrt{2(9.11 \times 10^{-31})(1.602 \times 10^{-19})V}} = \sqrt{\frac{150}{V}}\text{ \AA} = \frac{12.27}{\sqrt{V}}\text{ \AA}$$
* **2. Proton ($m_p = 1.673 \times 10^{-27}\text{ kg}, q = e$):**
  $$\lambda_p = \frac{0.286}{\sqrt{V}}\text{ \AA}$$
* **3. Deuteron ($m_d = 2m_p, q = e$):**
  $$\lambda_d = \frac{0.202}{\sqrt{V}}\text{ \AA}$$
* **4. Alpha Particle ($\alpha = \text{He}^{2+}, m_\alpha = 4m_p, q = 2e$):**
  $$\lambda_\alpha = \frac{0.101}{\sqrt{V}}\text{ \AA}$$
* **Order of De Broglie Wavelength for Equal Accelerating Potential ($V$):**
  $$\lambda_e > \lambda_p > \lambda_d > \lambda_\alpha$$


### 5.3 De Broglie Wavelength of Uncharged Thermal Particles
* For uncharged particles in thermal equilibrium at absolute temperature $T$ (such as neutrons or gas molecules), the average translational kinetic energy per particle from the equipartition theorem is:
  $$K = \frac{3}{2} k_B T$$
  where $k_B = 1.381 \times 10^{-23}\text{ J/K}$ (Boltzmann constant).
* **Thermal Neutron Wavelength:**
  $$\lambda = \frac{h}{\sqrt{2m (\frac{3}{2}k_B T)}} = \frac{h}{\sqrt{3m k_B T}} = \frac{25.6}{\sqrt{T}}\text{ \AA}$$


### 5.4 The Davisson-Germer Experiment (1927)
* Provided direct experimental confirmation of the wave nature of electrons.
* **Apparatus:** Fine beam of electrons accelerated through potential $V$ strikes a target Nickel crystal. Scattered electrons are collected at various scattering angles $\phi$ by a movable Faraday cylinder detector.
* **Observation:** A pronounced constructive interference peak appeared at:
  * Accelerating potential: $V = 54\text{ V}$.
  * Scattering angle: $\phi = 50^\circ$.
* **Bragg Diffraction Analysis:**
  * Glancing angle $\theta$: $\theta = 90^\circ - \frac{\phi}{2} = 90^\circ - 25^\circ = 65^\circ$.
  * Interplanar spacing for Nickel: $d = 0.91\text{ \AA} = 0.091\text{ nm}$.
  * First-order Bragg condition ($n = 1$):
    $$\lambda_{\text{Bragg}} = 2d\sin\theta = 2(0.91\text{ \AA})\sin 65^\circ = 1.65\text{ \AA}$$
* **De Broglie Wavelength Comparison:**
  $$\lambda_{\text{de Broglie}} = \frac{12.27}{\sqrt{54}} = \frac{12.27}{7.348} = 1.67\text{ \AA}$$
  The near-perfect agreement ($1.65\text{ \AA} \approx 1.67\text{ \AA}$) definitively proved that electrons possess wave characteristics with $\lambda = h/p$.


---


## 6. X-Rays: Generation, Spectrum & Moseley's Law


### 6.1 Production of X-Rays in a Coolidge Tube
* Highly energetic electrons accelerated through an anode potential $V$ (typically $20 - 100\text{ kV}$) strike a heavy metal target (such as Tungsten or Molybdenum) of high melting point and high atomic number $Z$.
* Only about $1\%$ of electron kinetic energy is converted into X-radiation; the remaining $99\%$ is dissipated as heat, requiring water-cooling circuits.


### 6.2 Continuous X-Rays (Bremsstrahlung) & Duane-Hunt Law
* **Mechanism:** When incoming electrons penetrate target atoms, they undergo rapid deceleration by the Coulomb field of target nuclei. The decelerating electrons emit electromagnetic radiation (Bremsstrahlung / "braking radiation").
* **Duane-Hunt Cutoff Wavelength ($\lambda_{\text{min}}$ or $\lambda_{\text{cut-off}}$):**
  Occurs when an electron loses its entire kinetic energy $eV$ in a single head-on deceleration event:
  $$eV = h\nu_{\text{max}} = \frac{hc}{\lambda_{\text{min}}}$$
  $$\mathbf{\lambda_{\text{min}}} = \frac{hc}{eV} = \frac{12400}{V\text{ (in Volts)}}\text{ \AA}$$
* **Key Invariants:**
  1. $\lambda_{\text{min}}$ depends solely on the accelerating voltage $V$.
  2. $\lambda_{\text{min}}$ is **completely independent of the target material**.


### 6.3 Characteristic X-Rays & Shell Transitions
* **Mechanism:** Energetic projectile electrons knock out tightly bound inner-shell electrons ($K, L, M$) of target atoms, creating a vacancy. An outer-shell electron drops into the vacancy, emitting a photon of discrete characteristic frequency:
  $$h\nu = E_{\text{initial}} - E_{\text{final}}$$
* **X-Ray Series:**
  * $K$-series: Vacancy in $K$-shell ($n = 1$).
    * $K_\alpha$: Transition from $L$-shell ($n = 2 \to 1$).
    * $K_\beta$: Transition from $M$-shell ($n = 3 \to 1$).
  * $L$-series: Vacancy in $L$-shell ($n = 2$).
    * $L_\alpha$: Transition from $M$-shell ($n = 3 \to 2$).
* **Moseley's Law:**
  H.G.J. Moseley measured characteristic X-ray frequencies across different elements and discovered:
  $$\sqrt{\nu} = a(Z - b)$$
  $$\nu = a^2 (Z - b)^2$$
  where:
  * $Z$ = Atomic number of target element.
  * $a$ = Proportionality constant depending on the transition series ($a = \sqrt{c R \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)}$).
  * $b$ = Screening (shielding) constant:
    * For $K_\alpha$ line: $b = 1$ (due to one remaining electron in $K$-shell).
    * For $L_\alpha$ line: $b \approx 7.4$.
* **Moseley's Breakthrough:** Proved that **atomic number ($Z$)**, rather than atomic mass, is the fundamental physical property determining an element's position in the periodic table.


---


## 7. High-Yield JEE Problem Archetypes & Traps


### Archetype 1: Polychromatic Incident Beam
* **Problem:** A metallic plate of work function $\phi_0 = 2.4\text{ eV}$ is illuminated by light containing three wavelengths: $\lambda_1 = 3000\text{ \AA}$, $\lambda_2 = 5000\text{ \AA}$, and $\lambda_3 = 6000\text{ \AA}$. Which wavelengths cause photoelectric emission, and what is the maximum kinetic energy and stopping potential?
* **Solution:**
  * Photon energies:
    * $E_1 = \frac{12400}{3000} = 4.13\text{ eV}$
    * $E_2 = \frac{12400}{5000} = 2.48\text{ eV}$
    * $E_3 = \frac{12400}{6000} = 2.07\text{ eV}$
  * Compare with $\phi_0 = 2.40\text{ eV}$:
    * $E_1 > \phi_0 \implies \lambda_1 = 3000\text{ \AA}$ emits photoelectrons.
    * $E_2 > \phi_0 \implies \lambda_2 = 5000\text{ \AA}$ emits photoelectrons.
    * $E_3 < \phi_0 \implies \lambda_3 = 6000\text{ \AA}$ causes **zero emission**.
  * Overall maximum kinetic energy is determined strictly by the most energetic photon ($E_1$):
    $$K_{\text{max}} = E_1 - \phi_0 = 4.13 - 2.40 = 1.73\text{ eV}$$
  * Stopping potential required to stop all photoelectrons:
    $$V_0 = \frac{K_{\text{max}}}{e} = 1.73\text{ V}$$


### Archetype 2: Recoil of Atom on Photon Emission
* **Problem:** An isolated stationary hydrogen-like atom of mass $M$ in an excited state transitions to the ground state, releasing energy $\Delta E$. Find the energy of the emitted photon ($E_{\text{photon}}$) and the recoil kinetic energy of the atom ($K_{\text{recoil}}$).
* **Solution:**
  * By conservation of linear momentum:
    $$p_{\text{atom}} = p_{\text{photon}} = \frac{E_{\text{photon}}}{c}$$
  * Kinetic energy of the recoiling atom:
    $$K_{\text{recoil}} = \frac{p_{\text{atom}}^2}{2M} = \frac{E_{\text{photon}}^2}{2Mc^2}$$
  * By conservation of total energy:
    $$\Delta E = E_{\text{photon}} + K_{\text{recoil}} = E_{\text{photon}} + \frac{E_{\text{photon}}^2}{2Mc^2}$$
  * Since $E_{\text{photon}} \approx \Delta E$ and $\frac{\Delta E}{2Mc^2} \ll 1$:
    $$E_{\text{photon}} \approx \Delta E\left(1 - \frac{\Delta E}{2Mc^2}\right) = \Delta E - \frac{(\Delta E)^2}{2Mc^2}$$
  * Recoil energy:
    $$K_{\text{recoil}} = \frac{(\Delta E)^2}{2Mc^2}$$


### Archetype 3: Point Source Inverse Square Scaling
* **Problem:** A point light source of power $P = 100\text{ W}$ emitting monochromatic light of $\lambda = 4000\text{ \AA}$ is placed at distance $r_1 = 1\text{ m}$ from a small photocell plate. The distance is increased to $r_2 = 2\text{ m}$. How do the saturation current and stopping potential change?
* **Solution:**
  * Intensity of a point source obeys the inverse-square law:
    $$I(r) = \frac{P}{4\pi r^2}$$
  * Since $r_2 = 2 r_1$, intensity drops by a factor of 4:
    $$I_2 = \frac{I_1}{4}$$
  * **Saturation current** is directly proportional to intensity $\implies i_{\text{sat}, 2} = \frac{i_{\text{sat}, 1}}{4}$ (reduced by 75%).
  * **Stopping potential** depends only on photon energy $h\nu$ and work function $\phi_0$, which are completely independent of distance $\implies \mathbf{V_0\text{ remains unchanged}}$.