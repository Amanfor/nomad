# Physics Revision Context: Chapter 25 — Refraction at Spherical Surfaces and Lenses

---


### 1.1 Physical Model & Geometrical Derivation
- Consider two transparent, isotropic optical media of absolute refractive indices $\mu_1$ and $\mu_2$, separated by a spherical boundary of radius of curvature $R$.
- Let the principal axis be the line joining the pole $P$ (vertex of the spherical cap) and the center of curvature $C$.
- A point object $O$ is situated on the principal axis in medium $\mu_1$ at distance $u$ from the pole. A paraxial ray from $O$ strikes the surface at point $M$ at an angle of incidence $i$ with the normal $MC$ drawn through the center of curvature $C$.
- The ray refracts into medium $\mu_2$ at angle of refraction $r$ and intersects the principal axis at $I$ (distance $v$ from pole), forming a real point image.

- **Angle Relations from Triangle Geometry:**
  - In $\Delta OMC$, the exterior angle is the angle of incidence:
    $$i = \alpha + \beta$$
  - In $\Delta MIC$, $\beta$ is the exterior angle:
    $$\beta = r + \gamma \implies r = \beta - \gamma$$
  where $\alpha, \beta, \gamma$ are the angles subtended by $OM, CM, IM$ at the principal axis.
- **Paraxial Ray Approximation (Small Angles):**
  For rays close to the principal axis, $\alpha, \beta, \gamma, i, r \ll 1\text{ rad}$. Thus, $\sin \theta \approx \tan \theta \approx \theta$.
  - Dropping perpendicular $M N'$ of height $h$ to the axis (where $N' \to P$):
    $$\alpha \approx \tan \alpha = \frac{h}{-u}, \quad \beta \approx \tan \beta = \frac{h}{+R}, \quad \gamma \approx \tan \gamma = \frac{h}{+v}$$
- **Snell's Law Application:**
  $$\mu_1 \sin i = \mu_2 \sin r \implies \mu_1 i \approx \mu_2 r$$
  $$\mu_1 (\alpha + \beta) = \mu_2 (\beta - \gamma) \implies \mu_1 \alpha + \mu_2 \gamma = (\mu_2 - \mu_1) \beta$$
- Substituting the paraxial arc/angle expressions:
  $$\mu_1 \left( \frac{h}{-u} \right) + \mu_2 \left( \frac{h}{+v} \right) = (\mu_2 - \mu_1) \left( \frac{h}{+R} \right)$$
- Dividing by $h$ yields the **Master Spherical Refraction Formula**:
  $$\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}$$

### 1.2 Sign Convention Rules
1. All optical distances are measured from the **pole ($P$)** of the refracting surface along the principal axis.
2. Distances measured in the **direction of incident light propagation** are taken as **positive ($+$)**.
3. Distances measured **opposite to the direction of incident light** are taken as **negative ($-$)**.
4. Transverse heights measured **perpendicularly upward** from the principal axis are **positive ($+$)**, while those measured **downward** are **negative ($-$)**.

### 1.3 Principal Foci of a Spherical Refracting Surface
A single spherical surface possesses two distinct principal focal points:
5. **First Principal Focus ($F_1$):**
   - The point on the principal axis on the object side such that rays emanating from it emerge parallel to the principal axis after refraction ($v = \infty$):
     $$\frac{\mu_2}{\infty} - \frac{\mu_1}{f_1} = \frac{\mu_2 - \mu_1}{R} \implies f_1 = -\frac{\mu_1 R}{\mu_2 - \mu_1}$$
6. **Second Principal Focus ($F_2$):**
   - The point on the principal axis on the image side where incident rays parallel to the principal axis ($u = -\infty$) converge or appear to diverge after refraction:
     $$\frac{\mu_2}{f_2} - \frac{\mu_1}{-\infty} = \frac{\mu_2 - \mu_1}{R} \implies f_2 = +\frac{\mu_2 R}{\mu_2 - \mu_1}$$
7. **Fundamental Conjugate Invariants:**
   - Ratio of focal lengths:
     $$\frac{f_1}{f_2} = -\frac{\mu_1}{\mu_2}$$
   - Conjugate form of refraction formula:
     $$\frac{f_2}{v} + \frac{f_1}{u} = 1$$

### 1.4 Plane Surface as a Limiting Case ($R \to \infty$)
- For a flat refracting plane interface, the radius of curvature is infinite ($R = \infty$):
  $$\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{\infty} = 0 \implies \frac{\mu_2}{v} = \frac{\mu_1}{u} \implies v = \left(\frac{\mu_2}{\mu_1}\right) u$$
- **Apparent Depth Derivation:**
  - When an object at real depth $d$ in a denser medium ($\mu_1 = \mu$) is viewed from a rarer medium (air, $\mu_2 = 1$):
    $$u = -d \implies v = \left(\frac{1}{\mu}\right)(-d) = -\frac{d}{\mu}$$
    $$\text{Apparent Depth } d_{\text{app}} = |v| = \frac{d}{\mu}$$
    $$\text{Normal Shift } \Delta s = d - d_{\text{app}} = d\left(1 - \frac{1}{\mu}\right)$$

### 1.5 Magnification in Spherical Refraction
- **Lateral (Transverse) Magnification ($m$):**
  $$m = \frac{h_i}{h_o} = \frac{\mu_1 v}{\mu_2 u}$$
  - *Significance:* If $m > 0$, the image is erect (and virtual); if $m < 0$, the image is inverted (and real).
- **Longitudinal (Axial) Magnification ($m_L$):**
  - For small axial dimensions $\Delta u$, differentiate the refraction formula:
    $$-\frac{\mu_2}{v^2} dv + \frac{\mu_1}{u^2} du = 0 \implies \frac{dv}{du} = \frac{\mu_1}{\mu_2}\left(\frac{v}{u}\right)^2$$
    $$m_L = \frac{dv}{du} = \frac{\mu_2}{\mu_1} m^2$$

---

### 1.6 Visual Preservation: Refraction at a Spherical Surface

![Refraction at a Single Spherical Surface and Geometry of Conjugate Points](/media/refraction_at_spherical_surface_geometry.webp)
*Description: Ray optics diagram detailing refraction at a single convex spherical surface separating medium $\mu_1$ and $\mu_2$ ($\mu_2 > \mu_1$): shows paraxial ray tracing from point object $O$ to point image $I$, angle of incidence $i = \alpha + \beta$, angle of refraction $r = \beta - \gamma$, normal $MC$ passing through center of curvature $C$, object distance $-u$, image distance $+v$, and the master refraction relation $\frac{\mu_2}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R}$.*

---


### 2.1 Optical Geometry & Structural Types
- **Thin Lens Definition:** A transparent optical medium bounded by two refracting surfaces (at least one of which is spherical), where the axial thickness of the lens is negligible compared to the radii of curvature ($t \ll R_1, R_2$).
- **Convex (Converging in Air):** Thicker at the center than at the peripheral edges.
  1. *Biconvex / Equiconvex:* Both faces curved outward ($R_1 > 0, R_2 < 0$).
  2. *Plano-Convex:* One flat face, one convex face ($R_1 > 0, R_2 = \infty$ or vice versa).
  3. *Concavo-Convex:* One concave face, one convex face ($R_1 > 0, R_2 > 0$ with $R_1 < R_2$).
- **Concave (Diverging in Air):** Thinner at the center than at the peripheral edges.
  1. *Biconcave / Equiconcave:* Both faces curved inward ($R_1 < 0, R_2 > 0$).
  2. *Plano-Concave:* One flat face, one concave face ($R_1 = \infty, R_2 > 0$).
  3. *Convexo-Concave:* One convex face, one concave face ($R_1 > 0, R_2 > 0$ with $R_1 > R_2$).
- **Optical Centre ($P$ or $O$):** The point on the principal axis through which rays pass with zero net angular deviation and negligible lateral displacement.

---


### 3.1 Derivation via Two Successive Refractions
- Consider a thin lens of refractive index $\mu_2$ surrounded by a medium of refractive index $\mu_1$. Radii of curvature of the first and second surfaces are $R_1$ and $R_2$.
- An object $O$ is placed at distance $u$ on the principal axis:
  1. **Refraction at Surface 1 (Radius $R_1$):**
     Forms an intermediate virtual image at distance $v_1$:
     $$\frac{\mu_2}{v_1} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R_1} \quad \text{--- (Equation 1)}$$
  2. **Refraction at Surface 2 (Radius $R_2$):**
     The intermediate image acts as a virtual object for the second surface (object distance $u_2 \approx v_1$ for thin lens $t \to 0$), forming final image at distance $v$:
     $$\frac{\mu_1}{v} - \frac{\mu_2}{v_1} = \frac{\mu_1 - \mu_2}{R_2} = -\frac{\mu_2 - \mu_1}{R_2} \quad \text{--- (Equation 2)}$$
- Adding Equation 1 and Equation 2 eliminates the intermediate image distance $v_1$:
  $$\frac{\mu_1}{v} - \frac{\mu_1}{u} = (\mu_2 - \mu_1)\left( \frac{1}{R_1} - \frac{1}{R_2} \right)$$
  $$\frac{1}{v} - \frac{1}{u} = \left(\frac{\mu_2}{\mu_1} - 1\right)\left( \frac{1}{R_1} - \frac{1}{R_2} \right)$$
- By definition of focal length, when $u = -\infty$, $v = f$:
  $$\mathbf{Lens\ Maker's\ Formula:}\quad \frac{1}{f} = \left(\frac{\mu_L}{\mu_M} - 1\right)\left( \frac{1}{R_1} - \frac{1}{R_2} \right)$$
- Equating the expressions yields the **Gaussian Thin Lens Formula**:
  $$\mathbf{Thin\ Lens\ Equation:}\quad \frac{1}{v} - \frac{1}{u} = \frac{1}{f}$$

### 3.2 Medium Immersion & Environmental Behavior
Let a glass lens ($\mu_g \approx 1.5$) of focal length $f_{\text{air}}$ in air ($\mu_{\text{air}} = 1$) be immersed in a liquid medium of refractive index $\mu_m$:
$$\frac{f_{\text{med}}}{f_{\text{air}}} = \frac{\mu_g - 1}{\frac{\mu_g}{\mu_m} - 1} = \frac{(\mu_g - 1)\mu_m}{\mu_g - \mu_m}$$

| Environmental Case | Relative Refractive Index | Physical Consequence | Real-World Example |
| :--- | :--- | :--- | :--- |
| **Medium rarer than lens** | $\mu_m < \mu_L \implies \mu_{\text{rel}} > 1$ | Focal length increases ($f_{\text{med}} > f_{\text{air}}$), converging/diverging nature is **preserved**. | Glass lens in water ($\mu_m = 4/3$): $f_{\text{water}} = 4 f_{\text{air}}$. |
| **Medium equal to lens** | $\mu_m = \mu_L \implies \mu_{\text{rel}} = 1$ | $\frac{1}{f} = 0 \implies f \to \infty$, lens behaves as a plane plate; becomes **optically invisible**. | Glass test-tube immersed in glycerin/benzene mixture. |
| **Medium denser than lens** | $\mu_m > \mu_L \implies \mu_{\text{rel}} < 1$ | Sign of $f$ reverses; **optical nature inverts** (converging behaves as diverging, and vice versa). | Air bubble inside water ($\mu_L = 1, \mu_m = 4/3$): convex shape acts as diverging lens. |

### 3.3 Lens with Different Media on Either Side
- Consider a lens of refractive index $\mu_2$ bounded by medium $\mu_1$ on the incident side and medium $\mu_3$ on the transmission side:
  $$\frac{\mu_3}{v} - \frac{\mu_1}{u} = \frac{\mu_2 - \mu_1}{R_1} + \frac{\mu_3 - \mu_2}{R_2}$$

---


### 4.1 Transverse and Longitudinal Magnifications
- **Transverse (Lateral) Magnification ($m$):**
  $$m = \frac{h_i}{h_o} = \frac{v}{u} = \frac{f}{f + u} = \frac{f - v}{f}$$
- **Longitudinal (Axial) Magnification ($m_L$):**
  - Differentiating the lens formula $\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$:
    $$-\frac{1}{v^2} dv + \frac{1}{u^2} du = 0 \implies m_L = \frac{dv}{du} = \left(\frac{v}{u}\right)^2 = m^2$$
  - *Invariant:* Since $m_L = m^2 \ge 0$, small longitudinal extensions always point in the same axial direction as the object.
- **Superficial (Areal) Magnification ($m_A$):**
  $$m_A = \frac{\text{Area of Image}}{\text{Area of Object}} = m^2 = \left(\frac{v}{u}\right)^2$$

### 4.2 Newton's Relation for Conjugate Foci
- If object and image distances are measured from the **foci** ($F_1$ and $F_2$) rather than the optical center:
  - Let $x_1 = |u| - f$ (distance of object from $F_1$)
  - Let $x_2 = |v| - f$ (distance of image from $F_2$)
  $$\mathbf{Newton's\ Formula:}\quad x_1 x_2 = f^2 \implies f = \sqrt{x_1 x_2}$$
  $$m = -\frac{f}{x_1} = -\frac{x_2}{f} = -\sqrt{\frac{x_2}{x_1}}$$

---


### 5.1 Formulation & Conjugate Positions
- When the distance $D$ between a real object and a fixed screen exceeds $4f$ ($D > 4f$), there exist **two distinct positions of a convex lens** that cast sharp real images on the screen.
- From the thin lens equation with $v = D - u$ (taking magnitudes):
  $$\frac{1}{D - u} - \frac{1}{-u} = \frac{1}{f} \implies \frac{D}{u(D - u)} = \frac{1}{f} \implies u^2 - D u + D f = 0$$
- Roots of the quadratic equation:
  $$u = \frac{D \pm \sqrt{D^2 - 4 D f}}{2}$$
- **Physical Constraints on Real Image Formation:**
  1. If $D < 4f$: Discriminant $D(D - 4f) < 0 \implies$ No real image possible on screen.
  2. If $D = 4f$: Single position $u = v = 2f \implies$ Minimum distance between a real object and its real image in a convex lens is $4f$.
  3. If $D > 4f$: Two conjugate positions $u_1$ and $u_2$ exist.

### 5.2 Key Invariants of the Displacement Method
- **Displacement between Lens Positions ($x$):**
  $$x = |u_2 - u_1| = \sqrt{D^2 - 4 D f} \implies x^2 = D^2 - 4 D f$$
  $$\mathbf{Focal\ Length:}\quad f = \frac{D^2 - x^2}{4D}$$
- **Image Size & Geometric Mean Relation:**
  - In position 1 ($u_1 = \frac{D - x}{2}, v_1 = \frac{D + x}{2}$): Magnified image $h_1 = m_1 h_o = \left(\frac{D + x}{D - x}\right) h_o$.
  - In position 2 ($u_2 = \frac{D + x}{2}, v_2 = \frac{D - x}{2}$): Diminished image $h_2 = m_2 h_o = \left(\frac{D - x}{D + x}\right) h_o$.
  - Product of magnifications:
    $$m_1 m_2 = \left(\frac{D + x}{D - x}\right) \left(\frac{D - x}{D + x}\right) = 1$$
    $$\frac{h_1}{h_o} \cdot \frac{h_2}{h_o} = 1 \implies \mathbf{Object\ Height:}\ h_o = \sqrt{h_1 h_2}$$
- **Ratio of Magnifications:**
  $$\frac{m_1}{m_2} = \left(\frac{D + x}{D - x}\right)^2$$

---

### 5.3 Visual Preservation: Thin Lens Ray Optics & Displacement Method

![Thin Lens Ray Formation and Optical Displacement Method](/media/thin_lens_ray_diagram_and_displacement_method.webp)
*Description: Dual-panel comprehensive optical diagram: (A) Paraxial ray tracing for a thin convex lens showing standard construction rays (parallel through $F_2$, central through optical center, focal through $F_1$), Cartesian sign conventions, and lens maker's geometry; (B) Schematic of Bessel's optical displacement method illustrating a fixed object-screen distance $D > 4f$, two conjugate lens positions $L_1$ and $L_2$ separated by displacement $x$, magnified image $h_1$, diminished image $h_2$, and the analytical formulas $f = \frac{D^2 - x^2}{4D}$ and $h_o = \sqrt{h_1 h_2}$.*

---


### 6.1 Power Definitions & Units
- **Optical Power ($P$):** The measure of a lens's ability to converge or diverge incident light, defined as the tangent of the angle of deviation produced on a ray incident at unit distance from the optical axis:
  $$P = \frac{1}{f\text{ (in meters)}} \quad [\text{Unit: Dioptre (D)} = \text{m}^{-1}]$$
  - Converging Lens (Convex): $f > 0 \implies P > 0$.
  - Diverging Lens (Concave): $f < 0 \implies P < 0$.
  - Plane Glass Plate: $f = \infty \implies P = 0$.
- **Reduced Focal Length & Surface Power:**
  - For a single refracting surface of radius $R$ separating media $\mu_1$ and $\mu_2$:
    $$P_{\text{surface}} = \frac{\mu_2 - \mu_1}{R}$$

---


### 7.1 Thin Lenses in Direct Contact
- When $N$ thin lenses of focal lengths $f_1, f_2, \dots, f_N$ are placed in direct coaxial contact:
  $$\frac{1}{F_{\text{eq}}} = \frac{1}{f_1} + \frac{1}{f_2} + \dots + \frac{1}{f_N} = \sum_{i=1}^N \frac{1}{f_i}$$
  $$P_{\text{eq}} = P_1 + P_2 + \dots + P_N = \sum_{i=1}^N P_i$$
- **Net System Magnification:**
  $$m_{\text{net}} = m_1 \times m_2 \times \dots \times m_N$$

### 7.2 Two Thin Lenses Separated by Distance $d$ (Deviation Method)
- Consider two coaxial thin lenses of focal lengths $f_1$ and $f_2$ separated by distance $d$:
  - An incident parallel ray at height $h_1$ suffers deviation $\delta_1 = \frac{h_1}{f_1}$ at lens 1.
  - It strikes lens 2 at height $h_2 = h_1 - d \delta_1 = h_1 \left(1 - \frac{d}{f_1}\right)$ and suffers deviation $\delta_2 = \frac{h_2}{f_2}$.
  - Net deviation: $\delta = \delta_1 + \delta_2 = \frac{h_1}{F_{\text{eq}}}$.
  $$\frac{h_1}{F_{\text{eq}}} = \frac{h_1}{f_1} + \frac{h_1}{f_2}\left(1 - \frac{d}{f_1}\right)$$
  $$\mathbf{Equivalent\ Focal\ Length:}\quad \frac{1}{F_{\text{eq}}} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}$$
  $$\mathbf{Equivalent\ Power:}\quad P_{\text{eq}} = P_1 + P_2 - d P_1 P_2$$
- **Spatial Location of Equivalent Lens:**
  The equivalent lens must be placed at a distance $\Delta$ behind the second lens given by:
  $$\Delta = \frac{d F_{\text{eq}}}{f_1}$$

---


### 8.1 Cutting of Lenses
8. **Transverse Cut (Perpendicular to Principal Axis):**
   - Cutting a biconvex lens of focal length $f$ along its vertical symmetry plane produces two plano-convex lenses.
   - Radii change from $(R, -R)$ to $(R, \infty)$:
     $$\frac{1}{f'} = (\mu - 1)\left(\frac{1}{R} - \frac{1}{\infty}\right) = \frac{\mu - 1}{R} = \frac{1}{2f}$$
     $$f' = 2f \quad \text{and} \quad P' = \frac{P}{2}$$
   - Each half has double the original focal length and half the original power.
9. **Longitudinal Cut (Along Principal Axis):**
   - Cutting along the horizontal optical axis produces two half-lenses.
   - Both radii of curvature $R_1$ and $R_2$ remain unchanged:
     $$f' = f \quad \text{and} \quad P' = P$$
   - *Aperture / Intensity Effect:* The effective light-gathering area is halved $\implies$ the image position and magnification remain identical, but image intensity drops to $50\%$ ($I' = I/2$).

### 8.2 Kinematics of Moving Images in Lenses
Let an object move with velocity $\vec{v}_O$ relative to a lens:
10. **Longitudinal Velocity Component (Along Principal Axis):**
   - Differentiating $\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$ with respect to time:
     $$-\frac{1}{v^2}\frac{dv}{dt} + \frac{1}{u^2}\frac{du}{dt} = 0 \implies \frac{dv}{dt} = \left(\frac{v}{u}\right)^2 \frac{du}{dt}$$
     $$(v_{IL})_\parallel = m^2 (v_{OL})_\parallel$$
   - *Critical Directional Invariant:* Since $m^2 > 0$ always, **image and object always move in the same direction along the principal axis**.
11. **Transverse Velocity Component (Perpendicular to Principal Axis):**
   - From $h_i = m h_o$:
     $$\frac{dh_i}{dt} = m \frac{dh_o}{dt} + h_o \frac{dm}{dt}$$
     $$(v_{IL})_\perp = m (v_{OL})_\perp + h_o \left[ \frac{(v_{IL})_\parallel - m (v_{OL})_\parallel}{u} \right]$$

### 8.3 Heterogeneous Lenses (Multi-Layered Materials)
- **Layers Parallel to Principal Axis:**
  - Different horizontal slices possess different refractive indices ($\mu_1, \mu_2, \dots$).
  - Each slice possesses a distinct focal length $f_i$, producing **multiple distinct images** along the axis.
- **Layers Perpendicular to Principal Axis:**
  - Light sequentially traverses each material layer.
  - System acts as a single composite lens with one effective focal length, producing **one single image**.

---


### 9.1 Mechanism & Effective Power Formulation
- When the rear surface of a lens is silvered (coated with reflective material), incoming light refracts through the front surface, reflects at the silvered rear surface, and refracts back out through the front surface.
- The system is optically equivalent to a **curved mirror**.
- Total optical power of the combination:
  $$P_{\text{eq}} = P_L + P_M + P_L = 2 P_L + P_M$$
  where:
  - $P_L = \frac{1}{f_L} = (\mu - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$ (Power of lens).
  - $P_M = -\frac{1}{f_M} = \frac{2}{R_{\text{silvered}}}$ (Power of silvered mirror surface).
- **Effective Focal Length ($F_{\text{eq}}$):**
  $$F_{\text{eq}} = -\frac{1}{P_{\text{eq}}}$$
  - If $F_{\text{eq}} < 0 \implies$ System behaves as a **Concave Mirror** (Converging).
  - If $F_{\text{eq}} > 0 \implies$ System behaves as a **Convex Mirror** (Diverging).

### 9.2 Standard Silvering Configurations (Equiconvex Lens of Radius $R$ and Index $\mu$)

| Configuration | Lens Power ($P_L$) | Mirror Power ($P_M$) | Effective Power ($P_{\text{eq}}$) | Equivalent Focal Length ($F_{\text{eq}}$) | Nature |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Plano-Convex: Silvered Plane Face** | $P_L = \frac{\mu - 1}{R}$ | $P_M = \frac{2}{\infty} = 0$ | $P_{\text{eq}} = \frac{2(\mu - 1)}{R}$ | $F_{\text{eq}} = -\frac{R}{2(\mu - 1)}$ | Concave Mirror |
| **Plano-Convex: Silvered Curved Face** | $P_L = 0$ (for light entering flat face) | $P_M = \frac{2}{R}$ | $P_{\text{eq}} = \frac{2}{R} + 2\frac{\mu - 1}{R} = \frac{2\mu}{R}$ | $F_{\text{eq}} = -\frac{R}{2\mu}$ | Concave Mirror |
| **Equiconvex: One Curved Face Silvered** | $P_L = \frac{2(\mu - 1)}{R}$ | $P_M = \frac{2}{R}$ | $P_{\text{eq}} = \frac{4(\mu - 1) + 2}{R} = \frac{4\mu - 2}{R}$ | $F_{\text{eq}} = -\frac{R}{4\mu - 2}$ | Concave Mirror |

---

### 9.3 Visual Preservation: Cut Lenses, Combinations & Silvering

![Cut Lenses, Combinations & Silvering of Lenses](/media/lens_combinations_cutting_and_silvering.webp)
*Description: Three-panel structural schematic of optical systems: (1) Cutting of lenses contrasting transverse cuts ($f' = 2f, P' = P/2$) against longitudinal cuts ($f' = f$, intensity $I/2$); (2) Two separated coaxial thin lenses ($f_1, f_2$) at distance $d$, detailing net angular deviation $\delta = \delta_1 + \delta_2$, equivalent focal length $\frac{1}{F} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}$, and equivalent lens position $\Delta = \frac{d F}{f_1}$; (3) Silvered lens acting as an equivalent concave mirror via double refraction and single reflection, demonstrating the master power relation $P_{\mathrm{eq}} = 2P_L + P_M$ and $F_{\mathrm{eq}} = -1/P_{\mathrm{eq}}$.*

---


### Archetype 1: Minimum Distance Between Real Object and Real Image
- **Problem:** What is the minimum distance between a real object and its real image formed by a thin convex lens of focal length $f$?
- **Solution:**
  Using $D = |u| + v$ and $\frac{1}{v} - \frac{1}{-u} = \frac{1}{f} \implies v = \frac{u f}{u - f}$.
  $$D(u) = u + \frac{u f}{u - f} = \frac{u^2}{u - f}$$
  Setting $\frac{dD}{du} = 0 \implies u = 2f \implies v = 2f \implies D_{\text{min}} = 4f$.
  - **JEE Trap:** If the question states "minimum distance between object and image for a *virtual* image", $D_{\text{min}} = 0$ (occurring when the object is placed infinitely close to the pole $u \to 0$).

### Archetype 2: Liquid Layer Trapped Under a Plano-Convex Lens
- **Problem:** An equiconvex glass lens ($\mu_g = 1.5$, radius $R$) rests on a horizontal plane mirror. A liquid of refractive index $\mu_l$ is introduced between the lens and mirror. Find the focal length of the combined system.
- **Solution:**
  The system consists of:
  1. The glass lens of focal power $P_1 = \frac{2(\mu_g - 1)}{R} = \frac{1}{R}$.
  2. A plano-concave liquid lens of power $P_2 = \frac{\mu_l - 1}{-R} = -\frac{\mu_l - 1}{R}$.
  3. The plane mirror of power $P_M = 0$.
  Net power:
  $$P_{\text{eq}} = 2(P_1 + P_2) + P_M = 2\left[ \frac{1}{R} - \frac{\mu_l - 1}{R} \right] = \frac{2(2 - \mu_l)}{R}$$
  $$F_{\text{eq}} = -\frac{1}{P_{\text{eq}}} = -\frac{R}{2(2 - \mu_l)}$$

### Archetype 3: Image Velocity when Object Crosses the Focus
- **Problem:** An object approaches a convex lens of focal length $f = 20\text{ cm}$ from $u = -30\text{ cm}$ toward $u = -10\text{ cm}$ at constant speed $v_o = 2\text{ cm/s}$. What happens to image velocity as it passes through the focus?
- **Solution:**
  $$v_{I} = \left(\frac{f}{f + u}\right)^2 v_O$$
  As $u \to -f$ (i.e. $f + u \to 0$), magnification $m \to \infty$ and image velocity diverges to infinity ($v_I \to \infty$). When the object transitions from just outside focus ($u < -f$, real image moving toward $+\infty$) to inside focus ($u > -f$, virtual image appearing from $-\infty$), the image changes from real to virtual and its position jumps discontinuously across spatial infinity.
