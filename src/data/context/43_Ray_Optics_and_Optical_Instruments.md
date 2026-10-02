# Physics Revision Context: Chapter 43 — Ray Optics & Optical Instruments (Geometrical Optics)

---


### 1.1 Nature of Light & Geometrical Optics Postulates
Geometrical optics is the limiting approximation of wave optics when the wavelength of light approaches zero ($\lambda \to 0$ compared to macroscopic aperture dimensions $a$).
- **Fermat's Principle of Least Time:** Light traversing between two points follows the path that takes the least (or stationary) optical path length ($OPL = \int n(s) ds$).
- **Rectilinear Propagation:** In a homogeneous, isotropic optical medium, light rays propagate along straight lines.

---

### 1.2 Laws of Reflection in Vector Form
Let $\hat{i}$ be the unit vector along the incident ray, $\hat{r}$ along the reflected ray, and $\hat{n}$ along the unit normal directed into the incident medium:
$$\mathbf{\hat{r} = \hat{i} - 2(\hat{i} \cdot \hat{n})\hat{n}}$$
- **Angle of Deviation ($\delta$):**
  $$\mathbf{\delta = 180^\circ - 2i = \pi - 2i}$$
- **Mirror Rotation Law:**
  If a plane mirror is rotated by an angle $\theta$ about an axis lying in the plane of the mirror, the reflected ray rotates by an angle of **$2\theta$ in the same sense**, keeping the incident ray fixed!

---

### 1.3 Geometric Invariants of Plane Mirrors
1. **Object-Image Symmetry:** The image formed by a plane mirror is virtual, erect, of identical size ($m = +1$), and lies at an equal perpendicular distance behind the mirror ($d_I = d_O$).
2. **Minimum Mirror Size for Full Human Visibility:**
   - To see one's entire body of height $H$:
     $$\mathbf{h_{\min} = \frac{H}{2}}$$
     *(The mirror must be positioned exactly between the level of the eyes and the top of the head/feet).*
   - For an observer standing midway between a wall of height $H_{\text{wall}}$ and a plane mirror to see the complete wall behind:
     $$\mathbf{h_{\min} = \frac{H_{\text{wall}}}{3}}$$

---

### 1.4 Multiple Images in Inclined Plane Mirrors
Two plane mirrors are inclined at an angle $\theta$. Let $m = \frac{360^\circ}{\theta}$:
3. **If $m$ is an EVEN integer ($m = 360^\circ / \theta = 2k$):**
   The number of images formed is **strictly $n = m - 1$**, for ANY position of the object (symmetric or asymmetric).
4. **If $m$ is an ODD integer ($m = 360^\circ / \theta = 2k + 1$):**
   - If the object lies on the angle bisector (Symmetric position):
     $$\mathbf{n = m - 1}$$
   - If the object lies off the angle bisector (Asymmetric position):
     $$\mathbf{n = m}$$
5. **If $m$ is a fraction:** The number of images is equal to the integral part $[m]$ (found using circular locus ray tracking).
- **Locus of Images:** All images lie on a **circle centered at the intersection of the two mirrors** with radius equal to the distance from the intersection to the object!

---

### 1.5 Image Velocity Vector Mechanics in Plane Mirrors
Decomposing the velocities of object ($\vec{v}_O$), mirror ($\vec{v}_M$), and image ($\vec{v}_I$) into components normal ($\perp$) and parallel ($\parallel$) to the mirror surface:
$$\mathbf{v_{I, \perp} = -v_{O, \perp} + 2 v_{M, \perp}}$$
$$\mathbf{v_{I, \parallel} = v_{O, \parallel}}$$
- Mirror motion parallel to its own surface produces **zero change** in the velocity of the image!

---


### 2.1 Coordinate Sign Convention & Paraxial Approximations
- **New Cartesian Sign Convention:**
  1. All distances are measured from the **Pole ($P$)** of the mirror taken as origin.
  2. Distances measured in the direction of incident light are **POSITIVE ($+x$)**; opposite are **NEGATIVE ($-x$)**.
  3. Distances measured perpendicular above the principal axis are **POSITIVE ($+y$)**; below are **NEGATIVE ($-y$)**.
- Focal length of Concave Mirror: $\mathbf{f < 0}$ (Real focus).
- Focal length of Convex Mirror: $\mathbf{f > 0}$ (Virtual focus).

---

### 2.2 Visual Preservation: Reflection, Spherical Mirrors, and Refraction

![Reflection Mirrors and Refraction Apparent Depth TIR](/media/reflection_mirrors_and_refraction_apparent_depth_tir.webp)
*Description: Two-panel foundational geometrical optics graphic: (A) Reflection mechanics detailing plane mirror vector rotation ($2\theta$) and image velocity formulas, alongside spherical mirror optics showing the paraxial mirror equation ($1/v + 1/u = 1/f$), marginal ray spherical aberration ($f = R - \frac{R}{2\cos\theta}$), and transverse vs. longitudinal magnification ($m_L = -m^2$); (B) Refraction at flat surfaces displaying Snell's Law in scalar and vector formats, apparent depth shifts ($\Delta s = \sum d_i(1 - 1/\mu_i)$), lateral displacement through flat glass slabs, and Total Internal Reflection with the circular fish-eye window equation ($r = h/\sqrt{\mu^2 - 1}$).*

---


#### 2.3.1 Paraxial Ray Mirror Formula (Small Aperture: $\theta \to 0$)
$$\mathbf{\frac{1}{v} + \frac{1}{u} = \frac{1}{f} = \frac{2}{R}}$$
- Focal length for paraxial rays:
  $$\mathbf{f = \frac{R}{2}}$$

#### 2.3.2 Marginal Rays (Spherical Aberration)
For rays striking the mirror at a finite height $h$ making an angle $\theta$ with the normal through the center of curvature:
$$\mathbf{f_{\text{marginal}} = R - \frac{R}{2\cos\theta} < \frac{R}{2}}$$
- Marginal rays converge **closer to the pole** than paraxial rays. This non-coincidence of focal points creates **Spherical Aberration**, which is eliminated in telescopes by using **Parabolic Mirrors**.

---


#### 1. Transverse / Lateral Magnification ($m$)
$$\mathbf{m = \frac{h_i}{h_o} = -\frac{v}{u} = \frac{f}{f - u} = \frac{f - v}{f}}$$
- $m > 0 \implies$ Virtual, erect image.
- $m < 0 \implies$ Real, inverted image.

#### 2. Longitudinal Magnification ($m_L$)
For an object of small length $du$ placed along the principal axis:
$$m_L = \frac{dv}{du}$$
Differentiating the mirror formula: $-\frac{1}{v^2} dv - \frac{1}{u^2} du = 0 \implies \frac{dv}{du} = -\frac{v^2}{u^2}$:
$$\mathbf{m_L = -\left(\frac{v}{u}\right)^2 = -m^2}$$
- **Physical Significance:** Since $m^2 > 0$, **$m_L$ is STRICTLY NEGATIVE**! The longitudinal image of an extended object along the principal axis is **ALWAYS INVERTED end-to-end** relative to the object!

#### 3. Superficial / Areal Magnification ($m_A$)
For a two-dimensional lamina of area $A_o$ placed transverse to the principal axis:
$$\mathbf{m_A = \frac{A_i}{A_o} = m^2 = \left(\frac{f}{f - u}\right)^2}$$

---

### 2.5 Dynamic Kinematics of Images in Spherical Mirrors
Differentiating the mirror formula with respect to time $t$:
$$\frac{d}{dt}\left(\frac{1}{v}\right) + \frac{d}{dt}\left(\frac{1}{u}\right) = 0 \implies -\frac{1}{v^2}\frac{dv}{dt} - \frac{1}{u^2}\frac{du}{dt} = 0$$
$$\mathbf{\vec{v}_{I, \parallel} = -\left(\frac{v}{u}\right)^2 \vec{v}_{O, \parallel} = -m^2 \vec{v}_{O, \parallel}}$$
- For motion perpendicular to the principal axis:
  $$h_i = m h_o \implies \mathbf{\vec{v}_{I, \perp} = m \vec{v}_{O, \perp} + h_o \left(\frac{dm}{dt}\right)}$$

---

### 2.6 Newton's Formula for Spherical Mirrors
If the object distance $x_1$ and image distance $x_2$ are measured **from the focus ($F$)** instead of the pole:
$$u = f + x_1, \quad v = f + x_2$$
Substituting into $\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$:
$$\mathbf{x_1 \cdot x_2 = f^2}$$
$$\mathbf{m = -\frac{f}{x_1} = -\frac{x_2}{f}}$$

---


### 3.1 Snell's Law & Refractive Index
When a ray travels from medium 1 ($n_1$) to medium 2 ($n_2$):
$$\mathbf{n_1 \sin i = n_2 \sin r \iff \frac{\sin i}{\sin r} = \frac{n_2}{n_1} = \,_1n_2 = \frac{v_1}{v_2} = \frac{\lambda_1}{\lambda_2}}$$
- **Vector Form of Snell's Law:**
  $$\mathbf{n_1 (\hat{i} \times \hat{n}) = n_2 (\hat{r} \times \hat{n})}$$
  $$\mathbf{n_2 \hat{r} - n_1 \hat{i} = \left( n_2 \cos r - n_1 \cos i \right) \hat{n}}$$

---

### 3.2 Apparent Depth & Multi-Slab Normal Shifts
6. **Object in Denser Medium ($n_2$) viewed from Rarer Medium ($n_1$):**
   For paraxial viewing ($i, r \approx 0$):
   $$\mathbf{d_{\text{app}} = d_{\text{actual}} \cdot \left(\frac{n_1}{n_2}\right) = \frac{d}{\mu_{\text{rel}}}}$$
   - **Normal Shift ($\Delta s$):** Apparent displacement of the object towards the observer:
     $$\mathbf{\Delta s = d_{\text{actual}} - d_{\text{app}} = d \left(1 - \frac{1}{\mu_{\text{rel}}}\right)}$$
7. **Composite Parallel Slabs:**
   For an object viewed through $k$ different media of thicknesses $d_1, d_2, \dots, d_k$ and refractive indices $\mu_1, \mu_2, \dots, \mu_k$:
   $$\mathbf{\Delta s_{\text{total}} = \sum_{i=1}^k d_i \left(1 - \frac{1}{\mu_i}\right)}$$
   $$\mathbf{d_{\text{app, total}} = \sum_{i=1}^k \frac{d_i}{\mu_i}}$$
8. **Object in Rarer Medium viewed from Denser Medium (Bird viewing Fish):**
   $$d_{\text{app}} = \mu_{\text{rel}} \cdot d_{\text{actual}} > d_{\text{actual}}$$
   The object appears **farther away** by $\Delta s = d(\mu - 1)$.

---

### 3.3 Lateral Displacement Through a Flat Glass Slab
A light ray passing through a transparent parallel-sided glass slab of thickness $t$ and refractive index $\mu$ undergoes zero angular deviation ($\delta = 0$; emergent ray is parallel to incident ray).
However, it experiences a **lateral displacement ($\Delta x$)**:
$$\mathbf{\Delta x = \frac{t \sin(i - r)}{\cos r}}$$
- For paraxial / small angles of incidence ($i, r \ll 1\text{ rad}$):
  $$\sin(i - r) \approx i - r = i \left(1 - \frac{r}{i}\right) \approx i \left(1 - \frac{1}{\mu}\right), \quad \cos r \approx 1$$
  $$\mathbf{\Delta x \approx t \cdot i \left(1 - \frac{1}{\mu}\right)}$$

---

### 3.4 Total Internal Reflection (TIR) & The Critical Angle ($\theta_c$)
- **Two Invariant Conditions for TIR:**
  1. Light must propagate from an optically **denser medium ($n_1$)** towards an optically **rarer medium ($n_2$)** ($n_1 > n_2$).
  2. The angle of incidence in the denser medium must exceed the **Critical Angle ($i > \theta_c$)**.
- **Critical Angle Formula:**
  $$n_1 \sin\theta_c = n_2 \sin 90^\circ \implies \mathbf{\sin\theta_c = \frac{n_2}{n_1} = \frac{1}{\mu_{\text{rel}}}}$$
  - Water-Air ($\mu = 4/3$): $\theta_c \approx 48.6^\circ \approx 49^\circ$.
  - Crown Glass-Air ($\mu = 1.5$): $\theta_c \approx 41.8^\circ \approx 42^\circ$.
  - Diamond-Air ($\mu = 2.42$): $\theta_c \approx 24.4^\circ$.

---

### 3.5 The Circle of Illuminance (Fish-Eye Window)
A point light source is submerged at depth $h$ in water of refractive index $\mu$. Light rays striking the water-air interface at $i \le \theta_c$ escape into the air, forming an illuminated circular disc on the water surface:
- Radius of the circular disc:
  $$\mathbf{r = h \tan\theta_c = \frac{h \sin\theta_c}{\cos\theta_c} = \frac{h (1/\mu)}{\sqrt{1 - (1/\mu^2)}} = \frac{h}{\sqrt{\mu^2 - 1}}}$$
- Area of the circular disc:
  $$\mathbf{A = \pi r^2 = \frac{\pi h^2}{\mu^2 - 1}}$$
- Semi-vertical angle of the light cone: $\theta_c$.

---

### 3.6 Optical Fiber Acceptance Angle & Numerical Aperture ($\text{NA}$)
An optical fiber consists of a cylindrical core ($n_1$) surrounded by a cladding ($n_2$) where $n_1 > n_2$:
- For light incident from air ($n_0 = 1$) on the fiber face at angle $\theta_a$ to undergo TIR at the core-cladding boundary:
  $$\sin\theta_a = \sqrt{n_1^2 - n_2^2}$$
- **Numerical Aperture ($\text{NA}$):**
  $$\mathbf{\text{NA} = \sin\theta_{\max} = \sqrt{n_1^2 - n_2^2}}$$
- For total light guidance at all angles of entry ($i \in [0, 90^\circ]$):
  $$\sqrt{n_1^2 - n_2^2} \ge 1 \implies \mathbf{n_1^2 - n_2^2 \ge 1}$$

---


### 4.1 Prism Geometry & Angle of Deviation ($\delta$)

![Prism Dispersion and Spherical Lens Refraction](/media/prism_dispersion_and_spherical_lens_refraction.webp)
*Description: Two-panel comprehensive optical physics graphic: (A) Prism optics detailing ray geometry ($A = r_1 + r_2$), angular deviation ($\delta = i + e - A$), the minimum deviation curve ($\delta_{\min}$ at $i=e$) yielding the master prism formula, limiting condition of transmission ($A \le 2\theta_c$), dispersive power ($\omega = \frac{\mu_V - \mu_R}{\mu_Y - 1}$), and achromatic vs. direct-vision dual prism systems; (B) Refraction at spherical surfaces ($\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}$), thin lens maker's equation, conjugate foci displacement method ($f = \frac{D^2 - d^2}{4D}$), lens cutting mechanics, and silvering combinations acting as equivalent concave/convex mirrors ($P_{\text{net}} = 2P_L + P_M = -1/F_{\text{eq}}$).*

- **Refracting Angle of Prism ($A$):**
  $$\mathbf{A = r_1 + r_2}$$
- **Net Angle of Deviation ($\delta$):**
  $$\mathbf{\delta = (i + e) - A}$$
  where $i$ is the angle of incidence at the first face and $e$ is the angle of emergence from the second face.

---

### 4.2 Condition for Minimum Deviation ($\delta_{\min}$)
Experimentally, as $i$ increases, $\delta$ first decreases to a unique minimum $\delta_{\min}$ and then increases.
At the point of **Minimum Deviation ($\delta = \delta_{\min}$)**:
9. The ray passes **symmetrically** through the prism.
10. $\mathbf{i = e}$
11. $\mathbf{r_1 = r_2 = r = \frac{A}{2}}$
12. The refracted ray inside the prism is parallel to the prism base (for an isosceles or equilateral prism).
- **The Master Prism Formula:**
  $$\delta_{\min} = 2i - A \implies i = \frac{A + \delta_{\min}}{2}$$
  $$\mathbf{\mu = \frac{\sin i}{\sin r} = \frac{\sin\left(\frac{A + \delta_{\min}}{2}\right)}{\sin\left(\frac{A}{2}\right)}}$$

---

### 4.3 Small-Angle (Thin) Prism Approximation ($A \le 10^\circ$)
When $A$ and $i$ are small:
$$\sin\left(\frac{A + \delta}{2}\right) \approx \frac{A + \delta}{2}, \quad \sin\left(\frac{A}{2}\right) \approx \frac{A}{2}$$
$$\mu \approx \frac{(A + \delta)/2}{A/2} = \frac{A + \delta}{A} = 1 + \frac{\delta}{A}$$
$$\mathbf{\delta \approx (\mu - 1) A}$$
- In thin prisms, deviation is approximately independent of the angle of incidence over moderate values of $i$!

---

### 4.4 Condition of Maximum Deviation & Condition of No Emergence
13. **Maximum Deviation ($\delta_{\max}$):**
   Occurs when either $i = 90^\circ$ (grazing incidence) or $e = 90^\circ$ (grazing emergence):
   $$\mathbf{\delta_{\max} = 90^\circ + e' - A}$$
   where $\sin e' = \mu \sin(A - \theta_c)$.
14. **Condition of No Emergence (Total Internal Reflection at Second Face):**
   For light to undergo TIR at the second face for ANY angle of incidence ($i \in [0, 90^\circ]$):
   $$r_1 \le \theta_c \implies r_2 = A - r_1 \ge A - \theta_c$$
   To ensure $r_2 > \theta_c$ always: $A - \theta_c > \theta_c \implies \mathbf{A > 2\theta_c}$.
   - If the prism angle **$A > 2\theta_c$**, no ray can ever emerge from the second face!

---

### 4.5 Dispersion of Light & Dispersive Power ($\omega$)
According to Cauchy's empirical dispersion formula, refractive index decreases with increasing wavelength:
$$\mu(\lambda) = A_c + \frac{B_c}{\lambda^2} + \frac{C_c}{\lambda^4} \implies \mathbf{\mu_{\text{Violet}} > \mu_{\text{Yellow}} > \mu_{\text{Red}}}$$
Therefore, violet light deviates the most and red light deviates the least: $\delta_V > \delta_Y > \delta_R$.
- **Angular Dispersion ($\theta$):**
  $$\mathbf{\theta = \delta_V - \delta_R = (\mu_V - \mu_R) A}$$
- **Dispersive Power ($\omega$):**
  The ratio of angular dispersion to mean deviation (measured for sodium yellow light):
  $$\mathbf{\omega = \frac{\theta}{\delta_Y} = \frac{\delta_V - \delta_R}{\delta_Y} = \frac{\mu_V - \mu_R}{\mu_Y - 1}}$$
  *(Dispersive power depends ONLY on the material of the prism, completely independent of prism angle $A$!).*

---


#### 4. Deviation Without Dispersion (Achromatic Prism)
Two prisms of angles $A$ and $A'$ made of different glasses are placed in inverted opposition.
Condition for zero net angular dispersion:
$$\theta_{\text{net}} = \theta_1 + \theta_2 = (\mu_V - \mu_R)A + (\mu_V' - \mu_R')A' = 0$$
$$\mathbf{\frac{A'}{A} = -\frac{\mu_V - \mu_R}{\mu_V' - \mu_R'} = -\frac{\omega \delta_Y}{\omega' \delta_Y'}}$$
- Net deviation produced:
  $$\mathbf{\delta_{\text{net}} = \delta_Y + \delta_Y' = (\mu_Y - 1)A + (\mu_Y' - 1)A' = \delta_Y \left(1 - \frac{\omega}{\omega'}\right)}$$

#### 5. Dispersion Without Deviation (Direct Vision Prism)
Condition for zero net deviation:
$$\delta_{\text{net}} = (\mu_Y - 1)A + (\mu_Y' - 1)A' = 0$$
$$\mathbf{\frac{A'}{A} = -\frac{\mu_Y - 1}{\mu_Y' - 1}}$$
- Net angular dispersion produced:
  $$\mathbf{\theta_{\text{net}} = \theta + \theta' = (\mu_V - \mu_R)A + (\mu_V' - \mu_R')A' = \theta \left(1 - \frac{\omega'}{\omega}\right)}$$

---


### 5.1 Refraction at a Single Spherical Surface
For a ray incident from medium $\mu_1$ onto a spherical interface of radius of curvature $R$ entering medium $\mu_2$:
$$\mathbf{\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}}$$
- **Transverse / Lateral Magnification:**
  $$\mathbf{m = \frac{h_i}{h_o} = \frac{\mu_1 v}{\mu_2 u}}$$
- **First and Second Focal Lengths:**
  - First focal length ($v \to \infty$): $f_1 = -\frac{\mu_1 R}{\mu_2 - \mu_1}$.
  - Second focal length ($u \to -\infty$): $f_2 = +\frac{\mu_2 R}{\mu_2 - \mu_1}$.
  - Relation: $\mathbf{\frac{f_1}{f_2} = -\frac{\mu_1}{\mu_2} \iff \frac{f_1}{\mu_1} + \frac{f_2}{\mu_2} = 0}$.

---

### 5.2 The Lens Maker's Formula
For a thin lens of refractive index $\mu_{\text{lens}}$ immersed in a medium of refractive index $\mu_{\text{med}}$ with bounding radii $R_1$ and $R_2$:
$$\mathbf{\frac{1}{f} = \left(\frac{\mu_{\text{lens}}}{\mu_{\text{med}}} - 1\right)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)}$$
- In air ($\mu_{\text{med}} = 1$):
  $$\mathbf{\frac{1}{f} = (\mu - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)}$$
- **Medium Inversion Effect:**
  - If $\mu_{\text{med}} < \mu_{\text{lens}}$: Convex lens is converging ($f > 0$); Concave lens is diverging ($f < 0$).
  - If $\mu_{\text{med}} = \mu_{\text{lens}}$: Focal length $f \to \infty$, optical power $P = 0$. The lens becomes **completely invisible** and behaves as a flat glass slab!
  - If $\mu_{\text{med}} > \mu_{\text{lens}}$: The optical nature of the lens **completely reverses**! (An air bubble in water ($\mu_{\text{lens}} = 1.0 < \mu_{\text{water}} = 1.33$) behaves as a **diverging lens**!).

---

### 5.3 The Thin Lens Formula & Magnification
$$\mathbf{\frac{1}{v} - \frac{1}{u} = \frac{1}{f}}$$
- **Magnification Metrics:**
  1. Transverse: $\mathbf{m = \frac{v}{u} = \frac{f}{f + u} = \frac{f - v}{f}}$
  2. Longitudinal: $\mathbf{m_L = \frac{dv}{du} = +\left(\frac{v}{u}\right)^2 = +m^2}$
     *(Unlike mirrors where $m_L = -m^2$, in thin lenses $m_L = +m^2 > 0$!).*
  3. Areal: $\mathbf{m_A = m^2}$
- **Newton's Lens Formula (Distances $x_1, x_2$ from Foci $F_1, F_2$):**
  $$\mathbf{x_1 \cdot x_2 = f^2}$$

---

### 5.4 The Displacement Method (Conjugate Foci)
When a real object and a screen are placed at a fixed distance $D$ apart, if $D > 4f$, there exist **two distinct positions of a converging lens** separated by distance $d$ that form sharp images on the screen:
$$\mathbf{f = \frac{D^2 - d^2}{4D}}$$
- Magnifications in the two positions:
  $$m_1 = \frac{v_1}{u_1} = \frac{D + d}{D - d}, \quad m_2 = \frac{v_2}{u_2} = \frac{D - d}{D + d}$$
  $$\mathbf{m_1 \cdot m_2 = 1 \implies m_2 = \frac{1}{m_1}}$$
- Height of the real object ($O$) in terms of image sizes $I_1$ and $I_2$:
  $$\mathbf{O = \sqrt{I_1 \cdot I_2}}$$
  $$\mathbf{d = D \sqrt{1 - \frac{4f}{D}}}$$

---

### 5.5 Cutting of Thin Lenses
15. **Vertical Cut (Transverse to Principal Axis):**
   - An equiconvex lens of focal length $f$ is sliced into two planoconvex halves.
   - For original lens: $\frac{1}{f} = (\mu - 1)\left(\frac{1}{R} - \frac{1}{-R}\right) = \frac{2(\mu - 1)}{R}$.
   - For each planoconvex half: $\frac{1}{f'} = (\mu - 1)\left(\frac{1}{R} - \frac{1}{\infty}\right) = \frac{\mu - 1}{R} = \frac{1}{2f}$.
   - **Focal Length Doubles:** $\mathbf{f' = 2f}$; Optical Power is halved: $\mathbf{P' = P / 2}$.
   - Image intensity remains unchanged if the aperture diameter is maintained.
16. **Horizontal Cut (Along Principal Axis):**
   - Slicing an equiconvex lens along its principal axis into two halves.
   - Radii of curvature $R_1, R_2$ and refractive index are unaffected.
   - **Focal Length Unchanged:** $\mathbf{f' = f}$.
   - The aperture area is halved, so **image intensity decreases by 50%**, but a complete image is still formed!

---

### 5.6 Combinations of Thin Lenses
17. **Two Thin Lenses in Direct Contact:**
   $$\mathbf{\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2} \iff P = P_1 + P_2}$$
   $$m = m_1 \cdot m_2$$
18. **Two Thin Lenses Separated by Distance $d$ in Air:**
   $$\mathbf{\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2} \iff P = P_1 + P_2 - d P_1 P_2}$$
19. **Achromatic Doublet in Contact:**
   $$\mathbf{\frac{\omega_1}{f_1} + \frac{\omega_2}{f_2} = 0 \iff \frac{f_1}{f_2} = -\frac{\omega_1}{\omega_2}}$$
   - Since $\omega_1, \omega_2 > 0$, $f_1$ and $f_2$ must have **opposite signs** (one converging, one diverging)!

---

### 5.7 Silvering of Lenses (Equivalent Curved Mirrors)
When one surface of a thin lens is silvered, light undergoes refraction through the lens, reflection at the silvered surface, and refraction back through the lens. The system behaves as an **Equivalent Curved Mirror**:
$$\mathbf{P_{\text{net}} = 2 P_L + P_M = \frac{2}{f_L} + \frac{1}{f_M}}$$
Since optical power of a mirror is $P = -1/F_{\text{eq}}$:
$$\mathbf{\frac{1}{F_{\text{eq}}} = -\left( \frac{2}{f_L} + \frac{1}{f_M} \right)}$$
- **Canonical Silvering Cases ($\mu = 1.5$):**
  1. **Plano-Convex Lens (Flat Surface Silvered):**
     $f_L = \frac{R}{\mu - 1} = 2R$; $R_M = \infty \implies f_M = \infty$.
     $$\frac{1}{F_{\text{eq}}} = -\frac{2}{2R} = -\frac{1}{R} \implies \mathbf{F_{\text{eq}} = -R \quad (\text{Concave Mirror of focal length } R)}$$
  2. **Plano-Convex Lens (Curved Surface Silvered):**
     $f_L = 2R$; $R_M = R \implies f_M = R/2$.
     $$\frac{1}{F_{\text{eq}}} = -\left(\frac{2}{2R} + \frac{2}{R}\right) = -\frac{3}{R} \implies \mathbf{F_{\text{eq}} = -\frac{R}{3} \quad (\text{Concave Mirror of focal length } R/3)}$$
  3. **Equiconvex Lens (One Curved Face Silvered):**
     $f_L = \frac{R}{2(\mu - 1)} = R$; $f_M = R/2$.
     $$\frac{1}{F_{\text{eq}}} = -\left(\frac{2}{R} + \frac{2}{R}\right) = -\frac{4}{R} \implies \mathbf{F_{\text{eq}} = -\frac{R}{4} = -\frac{R}{4\mu - 2}}$$

---


### 6.1 The Human Eye & Refractive Vision Defects

![Optical Instruments Microscopes Telescopes and Defects](/media/optical_instruments_microscopes_telescopes_and_defects.webp)
*Description: Two-panel optical instruments and vision optics graphic: (A) Human eye accommodation, visual angle thresholds, and corrective prescriptions for Myopia ($f = -d_{\text{far}}$ via concave lens), Hypermetropia ($\frac{1}{f} = \frac{1}{d_{\text{near}}} - \frac{1}{-D}$ via convex lens), Presbyopia, and Astigmatism; (B) High-magnification instrument ray diagrams: Compound Microscope showing objective intermediate image and eyepiece magnification ($M = -\frac{v_o}{u_o}(1 + D/f_e)$) alongside Astronomical Refracting Telescope normal adjustment ($M = -f_o/f_e, L = f_o + f_e$) and Rayleigh criterion resolving powers.*

- **Least Distance of Distinct Vision ($D$):** For a normal healthy eye, $D = 25\text{ cm}$.
- **Far Point:** For a normal eye, the far point is at infinity ($d_{\text{far}} = \infty$).
- **Visual Angle ($\theta$):** The angle subtended by an object at the eye: $\theta \approx h / d$. Magnifying instruments increase visual angle!

#### Defects of Vision & Corrective Prescriptions:
20. **Myopia (Near-Sightedness / Short-Sightedness):**
   - Near objects are clear; distant objects appear blurred.
   - Cause: Eyeball is elongated or cornea is too curved; parallel rays focus **in front of the retina**.
   - Far point shifts from $\infty$ to a finite distance $d_{\text{far}}$.
   - **Correction:** A **Diverging (Concave) Lens** of focal length:
     $$\mathbf{f = -d_{\text{far}}}$$
21. **Hypermetropia (Far-Sightedness / Long-Sightedness):**
   - Distant objects are clear; near objects appear blurred.
   - Cause: Eyeball is shortened or cornea is too flat; rays focus **behind the retina**.
   - Near point recedes beyond $25\text{ cm}$ ($d_{\text{near}} > 25\text{ cm}$).
   - **Correction:** A **Converging (Convex) Lens** of focal length given by:
     $$\mathbf{\frac{1}{f} = \frac{1}{v} - \frac{1}{u} = \frac{1}{-d_{\text{near}}} - \frac{1}{-D} = \frac{1}{D} - \frac{1}{d_{\text{near}}}}$$
22. **Presbyopia:** Aging ciliary muscles lose accommodation power. Corrected using **Bifocal Lenses** (upper portion concave for distant vision, lower portion convex for reading).
23. **Astigmatism:** Asymmetric cornea curvature (different curvature in vertical vs horizontal planes). Corrected using **Cylindrical Lenses**.

---

### 6.2 The Simple Microscope (Magnifying Glass)
A single converging lens of short focal length $f$:
$$\mathbf{M = \frac{\text{Visual angle with instrument } (\beta)}{\text{Visual angle of unaided object at } D \ (\alpha)}}$$
24. **Final Image at Near Point ($v = -D = -25\text{ cm}$, Maximum Strain):**
   $$\mathbf{M = 1 + \frac{D}{f}}$$
25. **Normal Adjustment (Final Image at $\infty$, Relaxed Eye):**
   $$\mathbf{M = \frac{D}{f}}$$

---

### 6.3 The Compound Microscope
Consists of two coaxial converging lenses:
26. **Objective Lens:** Extremely short focal length $f_o$ and small aperture. Object is placed just beyond $f_o$ ($u_o > f_o$) to form a **real, inverted, magnified intermediate image $I_1$**.
27. **Eyepiece Lens:** Moderate focal length $f_e > f_o$ and larger aperture, acting as a simple magnifier for $I_1$.

- **Magnifying Power ($M$):**
  1. **Final Image at Near Point ($v_e = -D$, Strained Eye):**
     $$\mathbf{M = m_o \cdot M_e = -\left(\frac{v_o}{u_o}\right)\left(1 + \frac{D}{f_e}\right)}$$
     - Length of microscope tube: $\mathbf{L = v_o + |u_e|}$.
  2. **Normal Adjustment (Final Image at $\infty$, Relaxed Eye):**
     $$\mathbf{M = -\left(\frac{v_o}{u_o}\right)\left(\frac{D}{f_e}\right) \approx -\frac{L}{f_o}\frac{D}{f_e}}$$
     *(where $L \approx v_o$ is the optical tube length, the distance between the second focus of objective and first focus of eyepiece).*
     - Length of microscope tube: $\mathbf{L = v_o + f_e}$.

---

### 6.4 The Astronomical Refracting Telescope
Designed to view distant celestial objects subtending small angles at infinity:
28. **Objective Lens:** **VERY LARGE focal length $f_o$** and **VERY LARGE aperture** (to collect maximum light flux from faint stars).
29. **Eyepiece Lens:** **SHORT focal length $f_e$** and small aperture.

- **Magnifying Power ($M$):**
  1. **Normal Adjustment (Final Image at $\infty$, Relaxed Eye):**
     $$\mathbf{M = -\frac{f_o}{f_e}}$$
     - Length of telescope tube: $\mathbf{L = f_o + f_e}$.
  2. **Final Image at Near Point ($v_e = -D$):**
     $$\mathbf{M = -\frac{f_o}{f_e}\left(1 + \frac{f_e}{D}\right)}$$
     - Length of telescope tube: $\mathbf{L = f_o + |u_e| = f_o + \frac{f_e D}{f_e + D}}$.

---

### 6.5 Resolving Power of Optical Instruments
30. **Astronomical Telescope (Rayleigh's Criterion):**
   Angular separation between two point stars just resolved:
   $$\mathbf{d\theta = \frac{1.22 \lambda}{a}}$$
   where $a$ is the circular aperture diameter of the objective lens.
   $$\mathbf{\text{Resolving Power} = \frac{1}{d\theta} = \frac{a}{1.22 \lambda}}$$
31. **Compound Microscope:**
   Minimum linear separation between two point objects just resolved:
   $$\mathbf{d_{\min} = \frac{1.22 \lambda}{2\mu\sin\theta} = \frac{1.22 \lambda}{2 \text{NA}}}$$
   where $\text{NA} = \mu\sin\theta$ is the Numerical Aperture of the objective.
   $$\mathbf{\text{Resolving Power} = \frac{1}{d_{\min}} = \frac{2\mu\sin\theta}{1.22 \lambda}}$$

---


### 7.1 Master Geometrical Optics Formula Table

| Optical Phenomenon | Master Equation | Critical Conditions / Notes |
| :---: | :---: | :---: |
| **Mirror Equation** | $\frac{1}{v} + \frac{1}{u} = \frac{1}{f} = \frac{2}{R}$ | $m = -v/u$; $m_L = -m^2$ (Always inverted!) |
| **Snell's Law** | $n_1 \sin i = n_2 \sin r$ | Vector form: $n_1(\hat{i}\times\hat{n}) = n_2(\hat{r}\times\hat{n})$ |
| **Apparent Depth** | $d_{\text{app}} = d / \mu_{\text{rel}}$ | Normal shift $\Delta s = \sum d_i(1 - 1/\mu_i)$ |
| **Critical Angle** | $\sin\theta_c = 1/\mu_{\text{rel}}$ | Requires denser $\to$ rarer; Circle of light $r = h/\sqrt{\mu^2-1}$ |
| **Prism Formula** | $\mu = \frac{\sin((A+\delta_{\min})/2)}{\sin(A/2)}$ | Symmetrical ray passage: $i = e, r = A/2$ |
| **Thin Prism** | $\delta \approx (\mu - 1)A$ | Dispersive power $\omega = \frac{\mu_V - \mu_R}{\mu_Y - 1}$ |
| **Curved Surface** | $\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}$ | Magnification $m = \frac{\mu_1 v}{\mu_2 u}$ |
| **Lens Maker's** | $\frac{1}{f} = (\mu_{\text{rel}} - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$ | Inverting medium ($\mu_{\text{med}} > \mu_{\text{lens}}$) reverses optical nature |
| **Displacement Method** | $f = \frac{D^2 - d^2}{4D}$ | $O = \sqrt{I_1 I_2}$; requires $D > 4f$ |
| **Silvered Lens** | $P_{\text{net}} = 2P_L + P_M = -\frac{1}{F_{\text{eq}}}$ | Acts as equivalent curved mirror |
| **Compound Microscope** | $M = -\frac{v_o}{u_o}\left(1 + \frac{D}{f_e}\right)$ | Normal adjustment: $M \approx -\frac{L}{f_o}\frac{D}{f_e}, L = v_o + f_e$ |
| **Astronomical Telescope** | $M = -f_o/f_e$ | Normal adjustment tube length: $L = f_o + f_e$ |

---


#### Trap 1: Longitudinal Magnification Sign in Mirrors vs. Lenses
- **In Spherical Mirrors:** Differentiating $\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$ gives $\frac{dv}{du} = -\frac{v^2}{u^2} = \mathbf{-m^2}$.
  Longitudinal image is **strictly inverted** relative to object!
- **In Thin Lenses:** Differentiating $\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$ gives $\frac{dv}{du} = +\frac{v^2}{u^2} = \mathbf{+m^2}$.
  Longitudinal image in lenses is **erect** along the axis!

#### Trap 2: Optical Power and Silvering Sign Convention
- Optical power of a lens: $P_L = +\frac{1}{f_L}$ ($f_L > 0$ for convex).
- Optical power of a mirror: $\mathbf{P_M = -\frac{1}{f_M}}$ ($f_M < 0$ for concave $\implies P_M > 0$).
- When combining in a silvered lens: $P_{\text{net}} = 2P_L + P_M$.
- The equivalent focal length is **$F_{\text{eq}} = -\frac{1}{P_{\text{net}}}$** because the final device acts as a **mirror**!

#### Trap 3: Telescope vs. Microscope Architectural Differences
- In a **Microscope**, both focal lengths are small, but $\mathbf{f_o < f_e}$ (objective is smaller than eyepiece).
- In a **Telescope**, focal lengths differ enormously: $\mathbf{f_o \gg f_e}$ (objective is very large to maximize magnification and light grasp).

#### Trap 4: Total Internal Reflection at Second Face of Prism
- If the refracting angle of a prism satisfies $\mathbf{A > 2\theta_c}$, light rays incident on the first face at **ANY angle of incidence ($0 \le i \le 90^\circ$) will undergo Total Internal Reflection at the second face** and can never emerge into air!
