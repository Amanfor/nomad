Physics Revision Context: Chapter 93 — Geometrical Optics, Refraction, Lenses & Optical Instruments
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-12 (JP)/PHYSICS/Geometrical Optics/, Geometrical Optics Theory.pdf, Geometrical Optics Exercises.pdf, Geometrical Optics Exercise Solutions.pdf, Optical Instruments Theory and Examples.pdf) Extracted into: JEE/context/ Batch: Class 12 Physics Core — Geometrical Optics, Refraction, Lenses & Optical Instruments (Reflection at Plane & Spherical Mirrors: Deviation $\delta = 180^\circ - 2i$, Mirror formula $\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$, Transverse $m = -v/u$ and Longitudinal $m_L = -m^2$ magnification, Newton's formula $x_1 x_2 = f^2$; Refraction at Plane Surfaces: Snell's Law $\mu_1\sin i = \mu_2\sin r$, Lateral shift $\Delta x = t\frac{\sin(i-r)}{\cos r}$, Normal shift $\Delta s = t(1 - 1/\mu)$, Apparent depth; Total Internal Reflection: Critical angle $\sin\theta_c = 1/\mu$, Circle of illuminance $r = \frac{h}{\sqrt{\mu^2 - 1}}$, Optical fiber numerical aperture; Prisms: Deviation $\delta = (i + e) - A$, Minimum deviation prism formula $\mu = \frac{\sin(\frac{A+D_m}{2})}{\sin(A/2)}$, Condition for no emergence $A > 2\theta_c$, Angular dispersion $\theta = (\mu_v - \mu_r)A$, Dispersive power $\omega = \frac{\mu_v - \mu_r}{\mu_y - 1}$, Achromatic combination vs Direct vision combination; Spherical Refraction & Lenses: Single surface $\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}$, Lens Maker's Formula $\frac{1}{f} = (\mu_{\text{rel}} - 1)(\frac{1}{R_1} - \frac{1}{R_2})$, Thin lens formula $\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$, Lens cutting and combinations, Equivalent silvered lens mirror power $-\frac{1}{F_{\text{eq}}} = \frac{2}{f_L} - \frac{1}{f_M}$, Displacement method $f = \frac{D^2 - d^2}{4D}, O = \sqrt{I_1 I_2}$; Optical Instruments: Eye defects (Myopia, Hypermetropia, Presbyopia, Astigmatism), Simple Microscope $M = 1 + D/f$ and $M = D/f$, Compound Microscope $M = -\frac{v_o}{u_o}(D/f_e) \approx -\frac{L D}{f_o f_e}$ and $M = -\frac{v_o}{u_o}(1 + D/f_e)$, Astronomical Telescope $M = -f_o/f_e$ and $M = -\frac{f_o}{f_e}(1 + f_e/D)$, Resolving power of microscope and telescope; High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Reflection, Refraction, Prisms & Lens Systems
![Geometrical Optics Refraction Prisms And Lenses](/media/geometrical_optics_refraction_prisms_and_lenses.webp) Description: Two-panel reference diagram for geometrical optics: (Panel A) Summary of Snell's law, lateral shift, critical angle of TIR, circle of illuminance, prism minimum deviation formula, and achromatic prism combinations; (Panel B) Spherical surface refraction, Lens Maker's equation, lens cutting power invariants, displacement method, and silvered lens mirror equivalence.
1.1 Reflection at Plane & Spherical Mirrors
1. Laws of Reflection & Vector Form
* The angle of incidence equals the angle of reflection: $i = r$.
* The incident ray $\hat{i}$, reflected ray $\hat{r}$, and surface normal $\hat{n}$ lie in the same plane: $$\mathbf{\hat{r} = \hat{i} - 2(\hat{i} \cdot \hat{n})\hat{n}}$$
* Deviation Produced by a Plane Mirror: $$\mathbf{\delta = 180^\circ - 2i} \quad (\text{or } \pi - 2i)$$
* Rotation Theorem: If a plane mirror is rotated by an angle $\theta$ about an axis in its plane, the reflected ray turns by $2\theta$ in the same sense for a fixed incident ray.
2. Spherical Mirror Formulations
Using the standard Cartesian sign convention (Pole at origin; direction of incident light is $+ve$):


* Mirror Formula: $$\mathbf{\frac{1}{v} + \frac{1}{u} = \frac{1}{f} = \frac{2}{R}}$$
   * Concave mirror: $f < 0, R < 0$.
   * Convex mirror: $f > 0, R > 0$.
* Transverse (Lateral) Magnification ($m$): $$\mathbf{m = \frac{h_i}{h_o} = -\frac{v}{u} = \frac{f}{f - u} = \frac{f - v}{f}}$$
* Longitudinal Magnification ($m_L$): For a small axial object of length $du$: $$\mathbf{m_L = \frac{dv}{du} = -m^2 = -\left(\frac{v}{u}\right)^2}$$ (The negative sign confirms that the axial image is always inverted along the axis!)
* Kinematics of Image Motion: Differentiating the mirror formula with respect to time: $$\mathbf{v_{I,\parallel} = -m^2 v_{O,\parallel}}, \qquad \mathbf{v_{I,\perp} = m v_{O,\perp}}$$
* Newton's Formula for Mirrors: Measuring object distance $x_1$ and image distance $x_2$ from the principal focus $F$: $$\mathbf{x_1 x_2 = f^2}$$


________________


1.2 Refraction at Plane Surfaces & Total Internal Reflection
1. Snell's Law & Refractive Index
$$\mathbf{\mu_1 \sin i = \mu_2 \sin r} \iff \mathbf{\frac{\sin i}{\sin r} = \frac{\mu_2}{\mu_1} = \frac{v_1}{v_2} = \frac{\lambda_1}{\lambda_2}}$$


* Frequency Invariant: Frequency $\nu$ remains strictly constant upon refraction; wavelength and speed scale as $\lambda' = \lambda / \mu$ and $v = c / \mu$.
2. Refraction through a Parallel Glass Slab
* Lateral Displacement ($\Delta x$): For a slab of thickness $t$ and refractive index $\mu$ in air: $$\mathbf{\Delta x = t \frac{\sin(i - r)}{\cos r}}$$ For small angles of incidence ($i \ll 1$): $\Delta x \approx t \cdot i \left(1 - \frac{1}{\mu}\right)$.
* Apparent Depth & Normal Shift ($\Delta s$): When an object in a denser medium of thickness $t$ is observed normally from a rarer medium: $$\text{Apparent Depth } \mathbf{d' = \frac{t}{\mu}}$$ $$\text{Normal Apparent Shift } \mathbf{\Delta s = t \left(1 - \frac{1}{\mu}\right)}$$ (The apparent shift is always directed in the direction of the incident light rays!).
   * For multiple stacked layers: $\mathbf{\Delta s_{\text{total}} = \sum_{i=1}^n t_i \left(1 - \frac{1}{\mu_i}\right)}$.
3. Total Internal Reflection (TIR)
TIR occurs when light travelling in an optically denser medium ($\mu_1$) strikes the boundary with a rarer medium ($\mu_2$) at an angle exceeding the critical angle ($\theta_c$): $$\mathbf{\sin\theta_c = \frac{\mu_2}{\mu_1} = \frac{1}{\mu}} \quad (\text{for medium to air})$$


* Circle of Illuminance (Fish-Eye Cone): A point source at depth $h$ below a liquid surface illuminates a circular patch of radius: $$\mathbf{r = h \tan\theta_c = \frac{h}{\sqrt{\mu^2 - 1}}}, \qquad \mathbf{\text{Area } A = \pi r^2 = \frac{\pi h^2}{\mu^2 - 1}}$$
* Optical Fibers & Numerical Aperture (NA): Confinement requires TIR at the core-cladding interface ($\mu_{\text{core}} > \mu_{\text{clad}}$). Acceptance angle in air: $$\mathbf{\sin\theta_{\text{acc}} = \text{NA} = \sqrt{\mu_{\text{core}}^2 - \mu_{\text{clad}}^2}}$$


________________


1.3 Prisms & Dispersion of Light
A prism consists of two non-parallel refracting surfaces inclined at a refracting angle $A$.


* Geometric Relations: $$A = r_1 + r_2$$ $$\mathbf{\delta = (i + e) - A}$$
1. Minimum Deviation ($\delta_{\min} = D_m$)
At the symmetric minimum deviation condition: $$i = e, \qquad r_1 = r_2 = \frac{A}{2}$$ $$\delta_{\min} = 2i - A \implies i = \frac{A + D_m}{2}$$ Applying Snell's law at the first face yields the Prism Formula: $$\mathbf{\mu = \frac{\sin\left(\frac{A + D_m}{2}\right)}{\sin\left(\frac{A}{2}\right)}}$$


* Thin Prism Approximation ($A \le 10^\circ$): $$\mathbf{\delta = (\mu - 1) A}$$
* Condition for No Emergence (TIR at Second Face for All $i$): $$\mathbf{A > 2\theta_c}$$
2. Dispersion & Dispersive Power
* Angular Dispersion ($\theta$): $$\mathbf{\theta = \delta_v - \delta_r = (\mu_v - \mu_r) A}$$
* Dispersive Power ($\omega$): $$\mathbf{\omega = \frac{\theta}{\delta_y} = \frac{\mu_v - \mu_r}{\mu_y - 1}} \quad \text{where } \mu_y = \frac{\mu_v + \mu_r}{2} \text{ (Mean yellow refractive index)}$$
* Combination of Prisms:
   1. Achromatic Combination (Deviation without Dispersion): $$\theta_{\text{net}} = 0 \implies (\mu_v - \mu_r)A + (\mu'_v - \mu'r)A' = 0 \implies \mathbf{A' = -\frac{\omega (\mu - 1)}{\omega' (\mu' - 1)} A}$$ $$\delta{\text{net}} = (\mu - 1)A + (\mu' - 1)A' = (\mu - 1)A \left(1 - \frac{\omega}{\omega'}\right)$$
   2. Direct Vision Combination (Dispersion without Deviation): $$\delta_{\text{net}} = 0 \implies (\mu - 1)A + (\mu' - 1)A' = 0 \implies \mathbf{A' = -\frac{\mu - 1}{\mu' - 1} A}$$ $$\theta_{\text{net}} = (\mu_v - \mu_r)A \left(1 - \frac{\omega'}{\omega}\right)$$


________________


1.4 Spherical Refraction, Thin Lenses & Silvering
1. Refraction at a Single Spherical Surface
For light travelling from medium $\mu_1$ to medium $\mu_2$ through a surface of radius $R$: $$\mathbf{\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}}$$


* Transverse Magnification: $$\mathbf{m = \frac{h_i}{h_o} = \frac{\mu_1 v}{\mu_2 u}}$$
2. Thin Lenses & The Lens Maker's Formula
Applying refraction across two spherical surfaces of radii $R_1$ and $R_2$: $$\mathbf{\frac{1}{f} = \left(\frac{\mu_{\text{lens}}}{\mu_{\text{med}}} - 1\right) \left(\frac{1}{R_1} - \frac{1}{R_2}\right)}$$


* Thin Lens Formula: $$\mathbf{\frac{1}{v} - \frac{1}{u} = \frac{1}{f}}$$
* Transverse Magnification: $$\mathbf{m = \frac{h_i}{h_o} = \frac{v}{u} = \frac{f}{f + u} = \frac{f - v}{f}}$$
* Longitudinal Magnification: $\mathbf{m_L = \frac{dv}{du} = m^2}$.
* Newton's Formula for Lenses: $\mathbf{x_1 x_2 = f^2}$ (focal origins).
3. Lens Cutting & Combinations
* Cutting Along Principal Axis: Each half retains its original focal length $f$. Intensity of image is halved ($I' = I/2$).
* Cutting Perpendicular to Axis (Equiconvex to Plano-Convex): Focal length doubles: $\mathbf{f' = 2f}$.
* Thin Lenses in Contact: $$\mathbf{\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2}} \implies \mathbf{P_{\text{eq}} = P_1 + P_2}$$
* Lenses Separated by Distance $d$: $$\mathbf{\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}}$$
4. The Displacement Method (Conjugate Foci)
When a screen and object are fixed at a distance $D > 4f$, two positions of a convex lens separated by distance $d$ produce sharp images on the screen: $$\mathbf{f = \frac{D^2 - d^2}{4D}}$$


* Size of Object ($O$): $\mathbf{O = \sqrt{I_1 I_2}}$.
* Product of Magnifications: $\mathbf{m_1 m_2 = 1}$.
5. Silvering of Lenses (Equivalent Mirror)
When one surface of a thin lens is silvered, light undergoes two refractions through the lens and one reflection at the silvered surface: $$P_{\text{eq}} = 2 P_{\text{lens}} + P_{\text{mirror}}$$ $$\mathbf{-\frac{1}{F_{\text{eq}}} = \frac{2}{f_L} - \frac{1}{f_M}}$$ The equivalent optical system always behaves as a curved spherical mirror.


________________


2. Optical Instruments: Microscopes, Telescopes & Vision
![Optical Instruments Microscopes And Telescopes](/media/optical_instruments_microscopes_and_telescopes.webp) Description: Two-panel reference diagram for optical instruments: (Panel A) Compound microscope optical layout, normal adjustment and near-point magnification formulas, tube length, and numerical aperture resolving power; (Panel B) Refracting astronomical telescope configurations, angular magnification, resolving limits, and corrective lenses for human vision defects.
2.1 The Human Eye & Vision Defects
The human eye has an accommodating crystalline lens that focuses real inverted images onto the retina:


* Least Distance of Distinct Vision (Near Point): $D = 25\ \text{cm}$.
* Far Point for Normal Eye: $d_{\text{far}} = \infty$.
* Visual Angle ($\theta$): The perceived angular size of an object subtended at the pupil.
Defects of Vision & Optical Corrections
1. Myopia (Near-Sightedness):
   * Pathology: Eye lens too converging or eyeball elongated; image of distant object forms in front of retina. Far point recedes to finite distance $d_{\text{far}} < \infty$.
   * Correction: Concave Lens of focal length $\mathbf{f = -d_{\text{far}}}$.
2. Hypermetropia (Far-Sightedness):
   * Pathology: Eye lens too flat or eyeball shortened; image of near object forms behind retina. Near point shifts outward to $d_{\text{near}} > 25\ \text{cm}$.
   * Correction: Convex Lens of focal length $\mathbf{\frac{1}{f} = \frac{1}{25} - \frac{1}{d_{\text{near}}}}$.
3. Presbyopia: Age-related hardening of the crystalline lens and weakening of ciliary muscles. Corrected using Bifocal Lenses (upper concave for distance, lower convex for reading).
4. Astigmatism: Asymmetric corneal curvature in orthogonal planes. Corrected using Cylindrical Lenses.


________________


2.2 Simple & Compound Microscopes
1. Simple Microscope (Magnifying Glass)
A single converging lens of short focal length $f$:


* Normal Adjustment (Final Image at $\infty$ - Relaxed Eye): $$\mathbf{M = \frac{D}{f}}$$
* Maximum Magnification (Final Image at Near Point $D = 25\ \text{cm}$): $$\mathbf{M = 1 + \frac{D}{f}}$$
2. Compound Microscope
Consists of an Objective lens ($f_o$, small focal length and aperture) and an Eyepiece ($f_e$, larger focal length and aperture):


* The objective forms a real, inverted, enlarged intermediate image: $m_o = -\frac{v_o}{u_o} \approx -\frac{L}{f_o}$.
* The eyepiece acts as a simple magnifier examining this intermediate image.


Operating Regime
	Final Image Position
	Magnifying Power ($M$)
	Separation / Tube Length ($L_{\text{tube}}$)
	Normal Adjustment (Relaxed Eye)
	At Infinity ($v_e = \infty$)
	$\mathbf{M = -\frac{v_o}{u_o} \left(\frac{D}{f_e}\right) \approx -\frac{L D}{f_o f_e}}$
	$\mathbf{L_{\text{tube}} = v_o + f_e}$
	Near-Point Adjustment (Maximum Strain)
	At Near Point ($v_e = D = 25\ \text{cm}$)
	$\mathbf{M = -\frac{v_o}{u_o} \left(1 + \frac{D}{f_e}\right)}$
	$\mathbf{L_{\text{tube}} = v_o + u_e}$
	

* Resolving Power of a Microscope: $$\mathbf{\text{RP} = \frac{1}{\Delta d} = \frac{2\mu\sin\theta}{1.22\lambda} = \frac{2\text{NA}}{1.22\lambda}}$$ Where $\text{NA} = \mu\sin\theta$ is the Numerical Aperture of the objective.


________________


2.3 Telescopes (Astronomical & Terrestrial)
1. Refracting Astronomical Telescope
Consists of an Objective lens ($f_o$, very large focal length and large aperture to collect distant celestial light) and an Eyepiece ($f_e$, small focal length):


* Final image is inverted relative to the celestial object.


Operating Regime
	Final Image Position
	Angular Magnification ($M$)
	Telescope Tube Length ($L_{\text{tube}}$)
	Normal Adjustment (Relaxed Eye)
	At Infinity ($v_e = \infty$)
	$\mathbf{M = -\frac{f_o}{f_e}}$
	$\mathbf{L_{\text{tube}} = f_o + f_e}$
	Near-Point Adjustment (Maximum Strain)
	At Near Point ($v_e = D = 25\ \text{cm}$)
	$\mathbf{M = -\frac{f_o}{f_e} \left(1 + \frac{f_e}{D}\right)}$
	$\mathbf{L_{\text{tube}} = f_o + u_e}$
	

* Resolving Power of a Telescope: $$\mathbf{\text{RP} = \frac{1}{d\theta} = \frac{a}{1.22\lambda}}$$ Where $a$ is the circular aperture diameter of the objective lens, and $d\theta = \frac{1.22\lambda}{a}$ is the angular limit of resolution.
2. Reflecting Telescopes (Cassegrain & Newtonian)
Replace the large glass objective lens with a concave parabolic primary mirror:


* Engineering Advantages over Refracting Telescopes:
   1. Zero Chromatic Aberration: Reflection is strictly achromatic (independent of wavelength).
   2. Minimized Spherical Aberration: Parabolic mirrors focus all parallel rays to a single geometric point.
   3. Mechanical Rigidity: Heavy mirrors can be supported from the entire back surface, whereas large lenses sag under gravity when held only at the rim.


________________


3. High-Yield Problem Archetypes & Structural JEE Traps
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Rotation of Plane Mirror
	Thinking reflected ray turns by $\theta$ when mirror rotates by $\theta$.
	For a fixed incident ray, rotating the mirror by $\theta$ turns the reflected ray by $2\theta$ in the same sense.
	2
	Apparent Shift Direction
	Shifting the image away from the slab regardless of ray direction.
	Apparent normal shift $\mathbf{\Delta s = t(1 - 1/\mu)}$ is always in the direction of the incident light rays.
	3
	Lens Immersion in Denser Liquid
	Assuming a convex lens remains converging in all liquids.
	If $\mu_{\text{liquid}} > \mu_{\text{glass}}$, the factor $(\frac{\mu_g}{\mu_l} - 1)$ becomes NEGATIVE, and the converging lens reverses its nature to become diverging!
	4
	Longitudinal vs Lateral Magnification
	Using $m_L = m$ for long objects.
	For small axial objects, $\mathbf{m_L = m^2}$ (for lenses) and $\mathbf{m_L = -m^2}$ (for mirrors). For finite lengths, compute $\Delta v = v_2 - v_1$ explicitly.
	5
	Minimum Deviation Ray Path
	Assuming rays travel horizontally in any orientation of a prism.
	At minimum deviation, the ray passes symmetrically through the prism, traveling parallel to the base only when the prism is isosceles.
	6
	No Emergence Condition
	Setting $A > \theta_c$ for total internal reflection.
	No ray can emerge from the second face for ANY angle of incidence if $\mathbf{A > 2\theta_c}$.
	7
	Microscope vs Telescope Magnification
	Using $M = f_o / f_e$ for a compound microscope.
	For a telescope, $M = f_o / f_e$ ($f_o \gg f_e$). For a microscope, $\mathbf{M \approx \frac{L D}{f_o f_e}}$ ($f_o, f_e$ are both very small!).
	8
	Silvered Lens Sign Convention
	Forgetting the power sign flip between lenses and mirrors.
	Net power is $P = 2P_L + P_M$. Since $P_M = -1/f_M$ and $P_{\text{eq}} = -1/F_{\text{eq}}$, the formula is $\mathbf{-\frac{1}{F_{\text{eq}}} = \frac{2}{f_L} - \frac{1}{f_M}}$.
	9
	Displacement Method Range
	Expecting two lens positions when $D < 4f$.
	Real images on a fixed screen exist only if the separation $D \ge 4f$. If $D < 4f$, no real image can be formed on the screen.
	10
	Corrective Lens Power for Myopia
	Prescribing a convex lens for near-sightedness.
	Myopia requires a concave (diverging) lens of focal length $f = -d_{\text{far}}$ (negative power in dioptres).
	

________________