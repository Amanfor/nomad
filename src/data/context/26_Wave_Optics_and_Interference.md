# Physics Revision Context: Chapter 26 — Wave Optics and Interference

---


### 1.1 Physical Nature of Wavefronts
- **Wavefront Definition:** The continuous locus of all medium particles or points in space that oscillate in the exact same phase ($\phi = \text{constant}$).
- **Rays as Wavefront Normals:** In isotropic media, light rays are straight lines drawn perpendicular (normal) to the wavefront at every point, indicating the direction of radiant energy propagation.
- **Geometric Wavefront Topographies:**

| Wavefront Geometry | Source Type | Spatial Behavior & Wavefront Form | Dimensional Scaling |
| :--- | :--- | :--- | :--- |
| **Spherical Wavefront** | Point Source ($S$) | Expanding concentric spheres centered at the point source. | Amplitude $A \propto \frac{1}{r}$, Intensity $I \propto \frac{1}{r^2}$. |
| **Cylindrical Wavefront** | Linear Slit Source | Concentric coaxial cylinders centered on the linear source. | Amplitude $A \propto \frac{1}{\sqrt{r}}$, Intensity $I \propto \frac{1}{r}$. |
| **Plane Wavefront** | Source at $\infty$ (or Collimated Beam) | Planar parallel surfaces perpendicular to parallel rays. | Amplitude $A = \text{constant}$, Intensity $I = \text{constant}$. |

### 1.2 Huygens' Principle of Secondary Wavelets
Huygens' geometric construction predicts the future profile of a propagating wavefront from its known position at an earlier instant based on two postulates:
1. **Primary Wavelet Postulate:** Every point on an instantaneous primary wavefront serves as an independent secondary point source, emitting spherical **secondary wavelets** that propagate in all directions with the speed of light $v$ in that medium.
2. **Forward Envelope Postulate:** The forward tangential envelope that touches these secondary wavelets at a later time $\tau$ forms the new primary wavefront at that subsequent instant.
   - *The Backwave Problem:* In Huygens' original model, a backward-propagating wave was mathematically predicted. Fresnel later resolved this by introducing the **obliquity factor** $F(\theta) = \frac{1}{2}(1 + \cos\theta)$, where $\theta$ is the angle between the normal to the original wavefront and the direction of the wavelet. For the forward direction ($\theta = 0$), $F(0) = 1$ (maximum); for the backward direction ($\theta = \pi$), $F(\pi) = 0$ (completely eliminating backwaves).

### 1.3 Wavefront Transformations Through Optical Elements
When a plane wavefront strikes an optical element, differential phase delays occur across its profile due to variable physical thickness:
- **Thin Prism:** The lower portion of the wavefront traverses the thick glass base, experiencing reduced phase velocity $v = c/\mu$, while the upper portion travels primarily through air. The emerging wavefront tilts toward the base of the prism.
- **Convex Lens:** The central rays pass through the thickest part of the lens and suffer the greatest temporal delay, while peripheral rays pass through thin edges. The emerging plane wave becomes a **converging spherical wavefront** focusing toward the second focal point $F_2$.
- **Concave Mirror:** The peripheral rays strike the mirror first and reflect, while the central ray must travel an extra distance before and after reflection. The reflected wavefront becomes a **converging spherical wavefront** focused on the focal point.

---

### 1.4 Proof of Laws of Reflection Using Huygens' Principle
- Consider a plane wavefront $AB$ incident at angle $i$ upon a plane reflecting mirror $MM'$.
- Let $t = 0$ be the instant when edge $A$ reaches the mirror. The edge $B$ must travel a distance $BC = v\tau$ in time $\tau$ to reach the surface at point $C$.
- During this same time interval $\tau$, a secondary spherical wavelet of radius $AA' = v\tau$ expands from point $A$ into the upper medium.
- The tangent plane drawn from $C$ to this wavelet envelope forms the reflected wavefront $A'C$, making angle $r$ with the mirror surface.
- **Geometric Congruence:**
  - In right triangles $\Delta ABC$ and $\Delta A'CA$:
    1. Hypotenuse $AC$ is common to both triangles.
    2. Side $BC = AA' = v\tau$ (equal radii/distances).
    3. $\angle ABC = \angle AA'C = 90^\circ$.
  - By the RHS congruence criterion:
    $$\Delta ABC \cong \Delta A'CA \implies \angle BAC = \angle A'CA$$
  - Since $\angle BAC = i$ (angle of incidence) and $\angle A'CA = r$ (angle of reflection):
    $$\mathbf{Law\ of\ Reflection:}\quad i = r$$
  - Furthermore, the incident wavefront, the normal, and the reflected wavefront all lie within the plane of the paper.

### 1.5 Proof of Laws of Refraction (Snell's Law) Using Huygens' Principle
- Consider a plane wavefront $AB$ incident at angle $i$ upon an interface $SS'$ separating medium 1 (speed $v_1$, index $\mu_1$) and medium 2 (speed $v_2$, index $\mu_2$, with $\mu_2 > \mu_1$).
- Point $A$ strikes the boundary at $t = 0$. Ray from $B$ reaches $C$ at time $\tau$, covering distance $BC = v_1 \tau$.
- In the same time $\tau$, the secondary wavelet expanding from $A$ inside medium 2 covers distance $AA' = v_2 \tau$.
- The tangent plane $A'C$ represents the refracted wavefront in medium 2, making angle of refraction $r$ with the boundary.
- From the right-angled triangles $\Delta ABC$ and $\Delta AA'C$:
  $$\sin i = \frac{BC}{AC} = \frac{v_1 \tau}{AC}$$
  $$\sin r = \frac{AA'}{AC} = \frac{v_2 \tau}{AC}$$
- Dividing the two expressions:
  $$\frac{\sin i}{\sin r} = \frac{v_1 \tau / AC}{v_2 \tau / AC} = \frac{v_1}{v_2}$$
- Since refractive index is defined by $\mu_1 = c/v_1$ and $\mu_2 = c/v_2 \implies \frac{v_1}{v_2} = \frac{c/\mu_1}{c/\mu_2} = \frac{\mu_2}{\mu_1}$:
  $$\mathbf{Snell's\ Law:}\quad \frac{\sin i}{\sin r} = \frac{\mu_2}{\mu_1} \implies \mu_1 \sin i = \mu_2 \sin r$$
- **Crucial Historical Triumph:** When light enters a denser medium ($\mu_2 > \mu_1$), $\sin i > \sin r \implies v_1 > v_2$. Wave theory proved that light travels **slower in optically denser media**, directly contradicting Newton's corpuscular theory (which falsely claimed light speeds up in denser media due to gravitational attraction).

---

### 1.6 Visual Preservation: Huygens' Reflection & Refraction Proofs

![Huygens Principle Wavefront Kinematics and Reflection Refraction Proofs](/media/huygens_principle_reflection_and_refraction.webp)
*Description: Two-panel foundational wave mechanics diagram: (A) Reflection of a plane wavefront $AB$ at a plane mirror, depicting the expansion of secondary spherical wavelet $AA' = v\tau$, the tangent envelope $A'C$, and the congruent triangle proof verifying $i = r$; (B) Refraction of a plane wavefront across an interface separating medium $\mu_1$ and $\mu_2$, illustrating the differential propagation distances $BC = v_1\tau$ and $AA' = v_2\tau$ to derive Snell's Law $\mu_1 \sin i = \mu_2 \sin r$.*

---


### 2.1 Principle of Linear Superposition
- When two or more light waves propagate through the same spatial region, the resultant electric field vector $\vec{E}$ at any point is the vector sum of individual electric field vectors:
  $$\vec{E}(\vec{r}, t) = \vec{E}_1(\vec{r}, t) + \vec{E}_2(\vec{r}, t) + \dots + \vec{E}_n(\vec{r}, t)$$
- Because optical detectors (eyes, photodetectors) respond to the **time-averaged intensity** $I \propto \langle |\vec{E}|^2 \rangle$, the resultant intensity is not merely the sum of individual intensities, but contains an **interference cross-term**.

### 2.2 Mathematical Interference Formulation
- Consider two coherent monochromatic waves of angular frequency $\omega$ with initial phase difference $\phi$:
  $$y_1(t) = a_1 \cos(\omega t), \quad y_2(t) = a_2 \cos(\omega t + \phi)$$
- Resultant displacement:
  $$y(t) = y_1 + y_2 = R \cos(\omega t + \theta)$$
  where resultant amplitude $R$ and phase $\theta$ are:
  $$R^2 = a_1^2 + a_2^2 + 2 a_1 a_2 \cos\phi$$
- Since acoustic/optical intensity $I \propto R^2$:
  $$I = I_1 + I_2 + 2 \sqrt{I_1 I_2} \cos\phi$$
  where $2\sqrt{I_1 I_2}\cos\phi$ is the **interference term**.

### 2.3 Constructive vs. Destructive Interference Criteria

| Optical Parameter | Constructive Interference (Bright Fringe) | Destructive Interference (Dark Fringe) |
| :--- | :--- | :--- |
| **Phase Difference ($\phi$)** | $\phi = 2n\pi \quad (n = 0, \pm 1, \pm 2, \dots)$ | $\phi = (2n - 1)\pi \quad (n = \pm 1, \pm 2, \dots)$ |
| **Path Difference ($\Delta x$)** | $\Delta x = n\lambda$ | $\Delta x = (2n - 1)\frac{\lambda}{2}$ |
| **Resultant Amplitude ($R$)** | $R_{\text{max}} = a_1 + a_2$ | $R_{\text{min}} = |a_1 - a_2|$ |
| **Resultant Intensity ($I$)** | $I_{\text{max}} = (\sqrt{I_1} + \sqrt{I_2})^2$ | $I_{\text{min}} = (\sqrt{I_1} - \sqrt{I_2})^2$ |
| **Identical Sources ($I_1 = I_2 = I_0$)** | $I_{\text{max}} = 4I_0$ | $I_{\text{min}} = 0$ |

- **Identical Waveform Formula:**
  When $I_1 = I_2 = I_0$:
  $$I = 2I_0(1 + \cos\phi) = 4I_0 \cos^2\left(\frac{\phi}{2}\right)$$

### 2.4 Coherence: Temporal & Spatial
- **Definition of Coherence:** Two light sources are said to be **coherent** if they emit light waves of the same frequency/wavelength with a constant, time-invariant phase difference ($\frac{d\phi}{dt} = 0$).
- **Why Independent Conventional Sources Cannot Interfere:**
  - Conventional sources emit light via spontaneous de-excitation of individual excited atoms.
  - Each atom emits an independent wave train lasting only $\tau_{\text{atom}} \sim 10^{-9}\text{ s}$ to $10^{-10}\text{ s}$.
  - For two independent sources, the phase difference $\phi(t)$ fluctuates randomly millions of times per second.
  - Human visual persistence is $\tau_{\text{eye}} \approx 0.1\text{ s}$. Over this interval, $\langle \cos\phi \rangle = 0$:
    $$\langle I \rangle = I_1 + I_2 + 2\sqrt{I_1 I_2}\langle\cos\phi\rangle = I_1 + I_2 = 2I_0$$
    The screen exhibits uniform illumination without stationary fringes.
- **Methods of Producing Coherent Light:**
  1. *Division of Wavefront:* A single primary wavefront is divided spatially into two parts using apertures, mirrors, or prisms (e.g., Young's Double Slit, Fresnel's Biprism, Lloyd's Mirror).
  2. *Division of Amplitude:* A light beam is split into reflected and transmitted components at semi-transparent interfaces (e.g., Thin Films, Newton's Rings, Michelson Interferometer).

### 2.5 Conservation of Energy in Interference
- Interference does not create or destroy electromagnetic energy; it merely **redistributes energy** across spatial coordinates.
- Integrating the cosine-square intensity over one complete spatial fringe period $\beta$:
  $$I_{\text{avg}} = \frac{1}{2\pi}\int_0^{2\pi} 4I_0 \cos^2\left(\frac{\phi}{2}\right) d\phi = 4I_0 \left(\frac{1}{2}\right) = 2I_0 = I_1 + I_2$$
  The average intensity across the entire screen equals the simple sum of individual beam intensities.

---


### 3.1 Experimental Architecture & Coordinate Setup
- A monochromatic point or slit source $S$ of wavelength $\lambda$ illuminates two parallel narrow slits $S_1$ and $S_2$ separated by a distance $d$.
- A viewing screen is placed parallel to the slit plane at a large distance $D \gg d$.
- Let the central axis join the midpoint between $S_1, S_2$ perpendicularly to point $O$ on the screen. Point $P$ is located at transverse coordinate $y$.

### 3.2 Path Difference Derivation
- The exact geometric path difference is:
  $$\Delta x = S_2 P - S_1 P = \sqrt{D^2 + \left(y + \frac{d}{2}\right)^2} - \sqrt{D^2 + \left(y - \frac{d}{2}\right)^2}$$
- **Approximation 1 ($D \gg d$):**
  The rays $S_1 P$ and $S_2 P$ are nearly parallel, inclined at angle $\theta$ to the horizontal axis:
  $$\Delta x = d \sin\theta$$
- **Approximation 2 ($y \ll D \implies \theta \ll 1\text{ rad}$):**
  $$\sin\theta \approx \tan\theta = \frac{y}{D}$$
  $$\mathbf{Master\ Path\ Difference:}\quad \Delta x \approx \frac{y d}{D}$$

### 3.3 Fringe Positions & Fringe Width
3. **Bright Fringes (Constructive Interference, $\Delta x = n\lambda$):**
   $$\frac{y d}{D} = n\lambda \implies \mathbf{Position:}\quad y_n = \frac{n\lambda D}{d} \quad (n = 0, \pm 1, \pm 2, \dots)$$
   - Central Bright Fringe ($n = 0$): $y_0 = 0$ (formed at central point $O$).
   - First Order Bright Fringe ($n = 1$): $y_1 = \frac{\lambda D}{d}$.
4. **Dark Fringes (Destructive Interference, $\Delta x = (2n - 1)\frac{\lambda}{2}$):**
   $$\frac{y d}{D} = (2n - 1)\frac{\lambda}{2} \implies \mathbf{Position:}\quad y_n = (2n - 1)\frac{\lambda D}{2d} \quad (n = \pm 1, \pm 2, \dots)$$
   - First Dark Fringe ($n = 1$): $y_1 = \frac{\lambda D}{2d} = \frac{\beta}{2}$.
5. **Linear Fringe Width ($\beta$):**
   The spatial separation between two consecutive bright fringes (or two consecutive dark fringes):
   $$\mathbf{Fringe\ Width:}\quad \beta = y_{n+1} - y_n = \frac{\lambda D}{d}$$
   - *Critical Invariants:*
     - $\beta$ is completely independent of fringe order $n$ (all fringes are equidistant).
     - $\beta \propto \lambda$: Red light fringes are wider than violet fringes ($\beta_{\text{red}} > \beta_{\text{violet}}$).
     - $\beta \propto D$: Increasing screen distance expands fringe spacing linearly.
     - $\beta \propto \frac{1}{d}$: Narrower slit separation increases fringe magnification.
6. **Angular Fringe Width ($\theta_0$):**
   $$\theta_0 = \frac{\beta}{D} = \frac{\lambda}{d} \quad [\text{radians}]$$
   - *Important Invariant:* Angular fringe width is **completely independent of screen distance $D$**.
7. **Medium Immersion Effect:**
   When the entire YDSE apparatus is submerged in a fluid of refractive index $\mu$:
   $$\lambda_{\text{med}} = \frac{\lambda_{\text{air}}}{\mu} \implies \beta_{\text{med}} = \frac{\beta_{\text{air}}}{\mu}$$
   Fringe width compresses by a factor of $\mu$.

### 3.4 Maximum Number of Fringes on Screen
- Since $\sin\theta \le 1$:
  $$\Delta x = d \sin\theta \le d \implies n\lambda \le d \implies n \le \frac{d}{\lambda}$$
  $$n_{\text{max}} = \left\lfloor \frac{d}{\lambda} \right\rfloor$$
- Total number of bright fringes visible on an infinite planar screen:
  $$N_{\text{bright}} = 2 n_{\text{max}} + 1$$
- Total number of dark fringes:
  $$N_{\text{dark}} = 2 n_{\text{max}} \quad \left(\text{if } d/\lambda - n_{\text{max}} < 0.5\right) \quad \text{or} \quad 2 n_{\text{max}} + 2 \quad \left(\text{if } d/\lambda - n_{\text{max}} \ge 0.5\right)$$

---

### 3.5 Visual Preservation: YDSE Ray Geometry & Intensity Distribution

![Youngs Double Slit Experiment Geometry and Intensity Distribution](/media/ydse_setup_geometry_and_intensity_distribution.webp)
*Description: Dual-panel comprehensive YDSE schematic: (A) Ray tracing geometry from coherent slits $S_1$ and $S_2$ separated by $d$ toward point $P(y)$ on screen at distance $D$, detailing path difference $\Delta x = d \sin\theta \approx yd/D$, central maximum at $y = 0$, and analytical fringe formulations; (B) Spatial intensity profile $I(y) = 4I_0 \cos^2(\phi/2)$ across fringes from $-3\beta$ to $+3\beta$, demonstrating uniform peak maxima $4I_0$, complete destructive minima $I = 0$, and the average intensity baseline $I_{\mathrm{avg}} = 2I_0$ preserving total energy.*

---


### 4.1 Concept of Optical Path Length ($\Delta x_{\text{opt}}$)
- In a medium of refractive index $\mu$, the speed of light slows to $v = c/\mu$.
- The time $\Delta t$ taken to traverse physical distance $t$ in the medium is:
  $$\Delta t = \frac{t}{v} = \frac{\mu t}{c}$$
- In that same time interval $\Delta t$, light would travel a distance in vacuum/air equal to:
  $$\mathbf{Optical\ Path\ Length:}\quad \Delta x_{\text{opt}} = c\,\Delta t = \mu t$$
- **Effective Path Difference Introduced by Slab:**
  When a transparent sheet of thickness $t$ and refractive index $\mu$ replaces an air column of thickness $t$:
  $$\Delta x_{\text{slab}} = \mu t - t = (\mu - 1)t$$
  The light wave is delayed by an effective optical path increment $(\mu - 1)t$.

### 4.2 Fringe Displacement in YDSE
- If a thin transparent sheet of thickness $t$ and index $\mu$ is placed across the path of the upper slit $S_1$:
  - Total optical path from $S_1$ to $P$: $(S_1 P - t) + \mu t = S_1 P + (\mu - 1)t$.
  - Total optical path from $S_2$ to $P$: $S_2 P$.
  - Net optical path difference at point $P(y)$:
    $$\Delta x_{\text{net}} = S_2 P - [S_1 P + (\mu - 1)t] = \frac{y d}{D} - (\mu - 1)t$$
- **Position of Shifted Central Bright Fringe ($y_0$):**
  At the central bright fringe, net optical path difference is zero ($\Delta x_{\text{net}} = 0$):
  $$\frac{y_0 d}{D} - (\mu - 1)t = 0 \implies \mathbf{Fringe\ Shift:}\quad \Delta y = y_0 = \frac{(\mu - 1)t D}{d}$$
- Using $\beta = \frac{\lambda D}{d} \implies \frac{D}{d} = \frac{\beta}{\lambda}$:
  $$\Delta y = \frac{\beta}{\lambda}(\mu - 1)t$$
- **Number of Fringes Shifted ($N$):**
  $$N = \frac{\Delta y}{\beta} = \frac{(\mu - 1)t}{\lambda}$$
- **Fundamental Physical Invariants of Slab Shift:**
  1. The entire fringe pattern shifts **rigidly toward the side where the slab is introduced** (upward if placed on $S_1$, downward if on $S_2$).
  2. The fringe width $\beta = \frac{\lambda D}{d}$ is **strictly unaffected** by the slab insertion.
  3. The shift $\Delta y$ is identical for all fringes regardless of order $n$.

### 4.3 Slabs Introduced Before Both Slits
- If slab 1 ($t_1, \mu_1$) is placed on $S_1$ and slab 2 ($t_2, \mu_2$) on $S_2$:
  $$\Delta x_{\text{net}} = \frac{y d}{D} + [(\mu_2 - 1)t_2 - (\mu_1 - 1)t_1]$$
  $$\Delta y = \frac{[(\mu_1 - 1)t_1 - (\mu_2 - 1)t_2] D}{d}$$

---


### 5.1 Fresnel's Biprism
- A thin prism with two very small refracting base angles $\alpha \approx 20' \text{ to } 30'$ (a fraction of a degree) and an obtuse apex angle $\approx 179^\circ$.
- A single slit $S$ at distance $a$ behind the biprism produces two virtual coherent images $S_1$ and $S_2$ via symmetric refraction:
  - Angular deviation by each half: $\delta = (\mu - 1)\alpha$.
  - Slit separation: $d = 2a\delta = 2a(\mu - 1)\alpha$.
  - Total distance to screen: $D = a + b$ (where $b$ is biprism-to-screen distance).
  $$\beta = \frac{\lambda D}{d} = \frac{\lambda (a + b)}{2a(\mu - 1)\alpha}$$

### 5.2 Lloyd's Single Mirror Experiment
- Light from a single narrow slit $S_1$ strikes a front-surface plane mirror at grazing incidence.
- Direct light from $S_1$ interferes with reflected light that appears to emanate from virtual image $S_2$.
- **The Reflection Phase Inversion (Stokes' Law):**
  - Light undergoes reflection at an optically denser medium boundary, suffering an intrinsic **phase shift of $\pi$ radians** (equivalent to an optical path difference of $\lambda/2$).
  - Total path difference at point $P$:
    $$\Delta x_{\text{net}} = (S_2 P - S_1 P) \pm \frac{\lambda}{2}$$
- **Fringe Conditions in Lloyd's Mirror:**
  - **Central Edge ($y = 0$):** The geometric path difference $S_2 P - S_1 P = 0$, but due to the reflection phase jump, the net path difference is $\lambda/2$. Hence, the **central edge is DARK** (destructive interference).
  - Bright Fringes: $S_2 P - S_1 P = \left(n + \frac{1}{2}\right)\lambda$.
  - Dark Fringes: $S_2 P - S_1 P = n\lambda$.
  *(The fringe conditions are exactly inverted relative to standard YDSE).*

---


### 6.1 Stokes' Phase Reversal Relations
- When a light wave in medium 1 strikes the interface of medium 2:
  - If $\mu_2 > \mu_1$ (Reflection at denser medium): The reflected wave suffers an abrupt **phase shift of $\pi$ radians** ($\Delta x = \lambda/2$).
  - If $\mu_2 < \mu_1$ (Reflection at rarer medium): The reflected wave suffers **zero phase shift**.
  - Transmitted (refracted) waves **never** undergo a boundary phase jump.

### 6.2 Analytical Conditions for Uniform Thin Film (Thickness $d$, Index $\mu$)
Consider a thin transparent film of thickness $d$ and index $\mu$ bounded by air ($\mu_0 = 1$) on both sides:
- The geometric path difference between two successive reflected rays at angle of refraction $r$ is:
  $$\Delta x_{\text{geom}} = 2\mu d \cos r$$
- Adding the $\lambda/2$ phase shift from top-surface reflection:
  $$\Delta x_{\text{net}} = 2\mu d \cos r \pm \frac{\lambda}{2}$$

| Interference Mode | Reflected Light System ($\Delta x_{\text{net}}$ includes $\lambda/2$) | Transmitted Light System (No boundary phase shift) |
| :--- | :--- | :--- |
| **Constructive (Bright)** | $2\mu d \cos r = \left(n + \frac{1}{2}\right)\lambda \quad (n = 0, 1, 2, \dots)$ | $2\mu d \cos r = n\lambda \quad (n = 1, 2, \dots)$ |
| **Destructive (Dark)** | $2\mu d \cos r = n\lambda \quad (n = 1, 2, \dots)$ | $2\mu d \cos r = \left(n + \frac{1}{2}\right)\lambda \quad (n = 0, 1, \dots)$ |

- **Complementary Nature:**
  The condition for a maximum in reflection is identical to the condition for a minimum in transmission. Thus, reflected and transmitted fringe patterns are **strictly complementary** (satisfying the Law of Conservation of Energy).
- **Coloration of Soap Bubbles & Oil Films:**
  When illuminated by white sunlight, different wavelengths satisfy the constructive interference criterion $2\mu d \cos r = (n + 1/2)\lambda$ for different film thicknesses $d$ and viewing angles $r$, producing vibrant rainbow spectra.

---

### 6.3 Visual Preservation: Optical Slabs, Lloyd's Mirror & Thin Films

![Optical Slab Shift Lloyds Mirror and Thin Film Interference](/media/optical_slab_shift_lloyd_mirror_thin_film.webp)
*Description: Three-panel wave optics schematic: (1) YDSE with dielectric slab of thickness $t$ and index $\mu$, detailing optical path difference $\Delta x = \frac{yd}{D} - (\mu - 1)t$ and rigid upward shift of the central fringe $\Delta y = \frac{(\mu - 1)t D}{d}$; (2) Lloyd's single mirror arrangement displaying real source $S_1$ and virtual source $S_2$, highlighting the $\pi$ phase reversal on reflection that causes the central edge to be dark; (3) Thin film interference via division of amplitude, illustrating reflected rays undergoing Stokes' phase shift and complementary reflection/transmission fringe relations.*

---


### 7.1 Diffraction Mechanism & Secondary Wavelet Splitting
- **Diffraction:** The bending or spreading of wave energy into the geometrical shadow region when encountering an obstacle or aperture whose dimensions are comparable to the wavelength ($a \sim \lambda$).
- In Fraunhofer diffraction, both the incident and diffracted wavefronts are planar (achieved using collimating and focusing convex lenses).
- A slit of width $a$ is divided into $N$ equal elemental zones. The path difference between rays from opposite edges of the slit at diffraction angle $\theta$ is:
  $$\Delta x = a \sin\theta$$

### 7.2 Maxima and Minima Conditions
8. **Diffraction Minima (Dark Fringes):**
   When the total path difference across the slit is an integral multiple of $\lambda$, the slit can be divided into an even number of half-wave zones that pairwise destructively interfere:
   $$\mathbf{Minima:}\quad a \sin\theta = n\lambda \quad (n = \pm 1, \pm 2, \pm 3, \dots)$$
9. **Secondary Maxima (Bright Fringes):**
   When the path difference is an odd multiple of half-wavelengths, one uncompensated zone contributes constructive intensity:
   $$\mathbf{Secondary\ Maxima:}\quad a \sin\theta = \left(n + \frac{1}{2}\right)\lambda \quad (n = 1, 2, 3, \dots)$$
10. **Central Maximum:**
   Extends between the first minima on either side ($n = \pm 1$):
   - Angular spread of first minima: $\sin\theta_1 \approx \theta_1 = \frac{\lambda}{a}$.
   - **Angular Width of Central Maximum:**
     $$2\theta_1 = \frac{2\lambda}{a}$$
   - **Linear Width of Central Maximum on Screen ($\beta_0$):**
     $$\beta_0 = 2 y_1 = 2 \left( \frac{\lambda D}{a} \right) = \frac{2\lambda D}{a}$$
     *(The central diffraction maximum is twice as wide as any secondary maximum: $\beta_0 = 2\beta_{\text{sec}}$).*
11. **Intensity Distribution Formulation:**
   $$I(\theta) = I_0 \left[ \frac{\sin\alpha}{\alpha} \right]^2 \quad \text{where}\quad \alpha = \frac{\pi a}{\lambda}\sin\theta$$
   - Peak intensities fall off dramatically:
     $$I_0 : I_1 : I_2 : I_3 \approx 1 : \frac{4}{9\pi^2} : \frac{4}{25\pi^2} : \frac{4}{49\pi^2} \approx 1 : 0.045 : 0.016 : 0.008$$

---


### 8.1 Rayleigh's Criterion for Resolution
Two point sources are considered **just resolved** by an optical aperture when the principal diffraction maximum of the first source coincides exactly with the first diffraction minimum of the second source.
- **Microscope Resolving Power:**
  - Limit of Resolution (minimum resolvable separation $\Delta d$):
    $$\Delta d = \frac{1.22\lambda}{2\mu \sin\theta} = \frac{1.22\lambda}{2\text{NA}}$$
    where $\mu\sin\theta = \text{NA}$ is the Numerical Aperture of the objective lens.
  - Resolving Power ($\text{RP}$):
    $$\text{RP}_{\text{microscope}} = \frac{1}{\Delta d} = \frac{2\mu\sin\theta}{1.22\lambda}$$
- **Telescope Resolving Power:**
  - Limit of Resolution (minimum angular separation $d\theta$):
    $$d\theta = \frac{1.22\lambda}{D}$$
    where $D$ is the circular entrance aperture diameter.
  - Resolving Power:
    $$\text{RP}_{\text{telescope}} = \frac{1}{d\theta} = \frac{D}{1.22\lambda}$$

### 8.2 Polarization of Light
- **Transverse Electromagnetic Nature:** The electric field $\vec{E}$ and magnetic field $\vec{B}$ oscillate perpendicular to each other and to the propagation direction $\vec{k}$. Polarization describes the spatial orientation of the electric vector $\vec{E}$.
- **Brewster's Law (Polarization by Reflection):**
  - When unpolarized light is incident on a transparent dielectric at a specific angle $i_p$ (Brewster's angle), the reflected beam is **completely plane polarized** with its electric vector oscillating parallel to the boundary plane (perpendicular to the plane of incidence).
  - At Brewster's angle, the reflected and refracted rays are mutually perpendicular ($i_p + r = 90^\circ$):
    $$\mu = \frac{\sin i_p}{\sin r} = \frac{\sin i_p}{\sin(90^\circ - i_p)} = \frac{\sin i_p}{\cos i_p} \implies \mathbf{Brewster's\ Law:}\quad \tan i_p = \mu$$
- **Malus' Law:**
  - When completely plane polarized light of intensity $I_0$ passes through an analyzer whose transmission axis is tilted at angle $\theta$ relative to the polarizer axis:
    $$\mathbf{Malus'\ Law:}\quad I = I_0 \cos^2\theta$$
  - For completely unpolarized light entering an ideal linear polarizer:
    $$I_{\text{trans}} = \frac{I_0}{2}$$

---


### Archetype 1: Number of Fringes Shifted Across Crosswires
- **Problem:** In a YDSE setup with $\lambda = 6000\text{ \AA}$, when a thin glass plate of refractive index $\mu = 1.5$ is introduced in front of one slit, the central maximum shifts to the position previously occupied by the 6th bright fringe. Find the thickness $t$ of the plate.
- **Solution:**
  The fringe shift in terms of fringe units is $N = 6$.
  $$N = \frac{(\mu - 1)t}{\lambda} \implies 6 = \frac{(1.5 - 1)t}{6000 \times 10^{-10}\text{ m}}$$
  $$t = \frac{6 \times 6000 \times 10^{-10}}{0.5} = 7.2 \times 10^{-6}\text{ m} = 7.2\text{ }\mu\text{m}$$

### Archetype 2: Missing Wavelengths in Front of One Slit
- **Problem:** In a YDSE, a screen is at distance $D = 1\text{ m}$ from slits separated by $d = 1\text{ mm}$. A point $P$ is directly in front of slit $S_1$ ($y = d/2 = 0.5\text{ mm}$). White light ($400\text{ nm} \le \lambda \le 700\text{ nm}$) is used. Which visible wavelengths will be absent (dark) at $P$?
- **Solution:**
  Path difference at $P$ is $\Delta x = \frac{y d}{D} = \frac{(d/2)d}{D} = \frac{d^2}{2D}$.
  $$\Delta x = \frac{(10^{-3}\text{ m})^2}{2(1\text{ m})} = 5 \times 10^{-7}\text{ m} = 500\text{ nm}$$
  For dark fringes (destructive interference):
  $$\Delta x = (2n - 1)\frac{\lambda}{2} \implies \lambda = \frac{2\Delta x}{2n - 1} = \frac{1000\text{ nm}}{2n - 1}$$
  - For $n = 1$: $\lambda = 1000\text{ nm}$ (Infrared, not in visible range).
  - For $n = 2$: $\lambda = \frac{1000}{3} \approx 333.3\text{ nm}$ (Ultraviolet, not in visible range).
  - Hence, no wavelength in the visible range is completely absent at $P$ for this geometry.

### Archetype 3: Slits Arranged Along Line of Sight (Longitudinal Slits)
- **Problem:** Slits $S_1$ and $S_2$ are placed on a line perpendicular to the screen (coaxial with the central normal). What is the shape of the interference fringes on the screen?
- **Solution:**
  The path difference to an arbitrary point at angle $\theta$ from the axis is $\Delta x = d \cos\theta$.
  Since the optical system possesses circular axial symmetry about the line joining $S_1$ and $S_2$, the loci of constant path difference are **concentric circular rings**.
  - The center of the rings ($\theta = 0$) has path difference $\Delta x = d$.
  - As $\theta$ increases moving outward, $\cos\theta$ decreases, meaning the **fringe order decreases moving radially outward**.
