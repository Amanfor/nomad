export interface Concept {
  id: string;
  title: string;
  section: string;
  content: string;       // markdown-like content with LaTeX
  formulas: string[];    // key formulas (LaTeX)
  image?: string;        // path to image in /public/media
  imageCaption?: string;
}

export const concepts: Concept[] = [
  {
    id: "laws-of-reflection",
    title: "Laws of Reflection (Vector Form)",
    section: "Reflection at Plane Interfaces",
    formulas: [
      "\\hat{r} = \\hat{i} - 2(\\hat{i} \\cdot \\hat{n})\\hat{n}",
      "\\delta = 180^\\circ - 2i",
    ],
    content: `The reflected ray direction is fully determined by the incident ray and the surface normal.

If a plane mirror rotates by angle $\\theta$, the reflected ray rotates by $2\\theta$ in the same sense — the incident ray stays fixed.

**JEE Pattern:** Direct application — find deviation angle or reflected ray direction using the vector formula. Often combined with rotating mirrors.`,
  },
  {
    id: "plane-mirror-geometry",
    title: "Plane Mirror Geometric Invariants",
    section: "Reflection at Plane Interfaces",
    formulas: [
      "h_{\\min} = \\frac{H}{2}",
      "h_{\\min} = \\frac{H_{\\text{wall}}}{3}",
    ],
    content: `Image is virtual, erect, same size ($m = +1$), equidistant behind the mirror.

To see your full body of height $H$: mirror needs to be exactly $H/2$ tall.

To see a wall behind you (standing midway): mirror needs to be $H_{\\text{wall}}/3$ tall.

**JEE Pattern:** Minimum mirror size problems — draw ray diagrams from extremities through eye position.`,
  },
  {
    id: "inclined-mirrors",
    title: "Multiple Images in Inclined Mirrors",
    section: "Reflection at Plane Interfaces",
    formulas: [
      "m = \\frac{360^\\circ}{\\theta}",
      "n = m - 1 \\quad (m \\text{ even})",
      "n = m - 1 \\text{ (symmetric)} \\quad n = m \\text{ (asymmetric)}",
    ],
    content: `Two plane mirrors at angle $\\theta$. Compute $m = 360^\\circ / \\theta$.

If $m$ is **even**: always $m - 1$ images regardless of object position.

If $m$ is **odd**: $m - 1$ images if object is on the bisector, $m$ images if off it.

All images lie on a circle centered at the mirror intersection point.

**JEE Pattern:** "How many images?" — just compute $m$ and check even/odd. Trap: fractional $m$ values.`,
  },
  {
    id: "mirror-formula",
    title: "Mirror Formula & Spherical Aberration",
    section: "Spherical Mirrors",
    formulas: [
      "\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} = \\frac{2}{R}",
      "f_{\\text{marginal}} = R - \\frac{R}{2\\cos\\theta} < \\frac{R}{2}",
    ],
    image: "/media/reflection_mirrors_and_refraction_apparent_depth_tir.webp",
    imageCaption: "Mirror formula geometry and refraction at flat surfaces",
    content: `Paraxial approximation: $f = R/2$.

Marginal rays (hitting mirror at finite height) converge closer to the pole than paraxial rays. This mismatch is **spherical aberration**.

Fix: use **parabolic mirrors** (telescopes).

**JEE Pattern:** Numerical problems using mirror formula with sign convention. Common trap: forgetting Cartesian sign convention.`,
  },
  {
    id: "magnification-mirrors",
    title: "Magnification in Spherical Mirrors",
    section: "Spherical Mirrors",
    formulas: [
      "m = -\\frac{v}{u} = \\frac{f}{f - u} = \\frac{f - v}{f}",
      "m_L = -m^2",
      "m_A = m^2",
    ],
    content: `**Transverse** magnification: $m = -v/u$. Positive → virtual erect. Negative → real inverted.

**Longitudinal** magnification: $m_L = -m^2$. Always negative — the axial image is always flipped end-to-end.

**Areal** magnification: $m_A = m^2$.

**JEE Pattern:** "Find the size/orientation of the image." Key trap: $m_L$ is always negative for mirrors but positive for lenses.`,
  },
  {
    id: "snells-law",
    title: "Snell's Law & Refractive Index",
    section: "Refraction at Flat Surfaces",
    formulas: [
      "n_1 \\sin i = n_2 \\sin r",
      "n_1 (\\hat{i} \\times \\hat{n}) = n_2 (\\hat{r} \\times \\hat{n})",
    ],
    content: `At a flat interface between media $n_1$ and $n_2$:

$\\sin i / \\sin r = n_2/n_1 = v_1/v_2 = \\lambda_1/\\lambda_2$

Frequency stays constant across media. Wavelength and speed change.

**JEE Pattern:** Calculate refracted angle, or find refractive index from given angles. Vector form appears in JEE Advanced.`,
  },
  {
    id: "apparent-depth",
    title: "Apparent Depth & Normal Shift",
    section: "Refraction at Flat Surfaces",
    formulas: [
      "d_{\\text{app}} = \\frac{d}{\\mu_{\\text{rel}}}",
      "\\Delta s = d\\left(1 - \\frac{1}{\\mu}\\right)",
      "\\Delta s_{\\text{total}} = \\sum d_i\\left(1 - \\frac{1}{\\mu_i}\\right)",
    ],
    content: `Object in denser medium viewed from rarer: appears closer. $d_{\\text{app}} = d/\\mu$.

Object in rarer medium viewed from denser: appears farther. $d_{\\text{app}} = \\mu \\cdot d$.

For stacked slabs: add up individual shifts.

**JEE Pattern:** Multi-slab apparent depth — "a coin at the bottom of a beaker with layered liquids." Sum the shifts.`,
  },
  {
    id: "total-internal-reflection",
    title: "Total Internal Reflection & Critical Angle",
    section: "Refraction at Flat Surfaces",
    formulas: [
      "\\sin\\theta_c = \\frac{n_2}{n_1} = \\frac{1}{\\mu_{\\text{rel}}}",
      "r = \\frac{h}{\\sqrt{\\mu^2 - 1}}",
    ],
    content: `Two conditions: light goes denser → rarer, and $i > \\theta_c$.

Critical angles: Water–Air ≈ 49°, Glass–Air ≈ 42°, Diamond–Air ≈ 24.4°.

**Fish-eye window:** point source at depth $h$ illuminates a circular disc of radius $r = h/\\sqrt{\\mu^2 - 1}$.

**JEE Pattern:** "Find the radius of the bright circle on the water surface." Direct formula application.`,
  },
  {
    id: "optical-fiber",
    title: "Optical Fiber & Numerical Aperture",
    section: "Refraction at Flat Surfaces",
    formulas: [
      "\\text{NA} = \\sin\\theta_{\\max} = \\sqrt{n_1^2 - n_2^2}",
    ],
    content: `Core ($n_1$) surrounded by cladding ($n_2$), with $n_1 > n_2$.

Light enters the fiber face and undergoes TIR at the core-cladding boundary.

Maximum acceptance angle: $\\sin\\theta_a = \\sqrt{n_1^2 - n_2^2}$.

**JEE Pattern:** Calculate NA or maximum acceptance angle given core/cladding indices.`,
    image: "/media/optical_fiber_total_internal_reflection.webp",
    imageCaption: "Optical fiber total internal reflection geometry",
  },
  {
    id: "prism-deviation",
    title: "Prism Deviation & Minimum Deviation",
    section: "Prisms & Dispersion",
    formulas: [
      "\\delta = (i + e) - A",
      "A = r_1 + r_2",
      "\\mu = \\frac{\\sin\\left(\\frac{A + \\delta_{\\min}}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}",
    ],
    image: "/media/prism_dispersion_and_spherical_lens_refraction.webp",
    imageCaption: "Prism geometry, deviation curve, and lens refraction",
    content: `Refracting angle: $A = r_1 + r_2$. Net deviation: $\\delta = i + e - A$.

At minimum deviation: $i = e$, $r = A/2$, ray is symmetric, parallel to base.

The **Master Prism Formula** connects $\\mu$, $A$, and $\\delta_{\\min}$.

**JEE Pattern:** Given any two of $\\mu$, $A$, $\\delta_{\\min}$ — find the third. Most common single-step JEE problem.`,
  },
  {
    id: "thin-prism",
    title: "Thin Prism Approximation",
    section: "Prisms & Dispersion",
    formulas: [
      "\\delta \\approx (\\mu - 1)A",
      "\\omega = \\frac{\\mu_V - \\mu_R}{\\mu_Y - 1}",
    ],
    content: `For small prism angle ($A \\le 10°$): deviation is independent of incidence angle.

$\\delta \\approx (\\mu - 1)A$.

Dispersive power $\\omega$ depends only on the material, not the prism angle.

Angular dispersion: $\\theta = (\\mu_V - \\mu_R)A$.

**JEE Pattern:** Thin prism combinations — achromatic and direct-vision setups.`,
  },
  {
    id: "lens-makers-formula",
    title: "Lens Maker's Formula",
    section: "Thin Lenses",
    formulas: [
      "\\frac{1}{f} = (\\mu_{\\text{rel}} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
      "\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}",
    ],
    content: `Connects focal length to geometry ($R_1, R_2$) and material ($\\mu$).

**Medium inversion:** if surrounding medium has higher $\\mu$ than lens → optical nature reverses. Air bubble in water acts as a diverging lens.

If $\\mu_{\\text{med}} = \\mu_{\\text{lens}}$: lens becomes invisible ($f \\to \\infty$).

**JEE Pattern:** "Lens immersed in liquid" — recalculate $f$ with new $\\mu_{\\text{rel}}$. Extremely common.`,
  },
  {
    id: "displacement-method",
    title: "Displacement Method (Conjugate Foci)",
    section: "Thin Lenses",
    formulas: [
      "f = \\frac{D^2 - d^2}{4D}",
      "O = \\sqrt{I_1 \\cdot I_2}",
      "m_1 \\cdot m_2 = 1",
    ],
    content: `Object and screen at fixed distance $D > 4f$. Two lens positions (separated by $d$) give sharp images.

Object height from image sizes: $O = \\sqrt{I_1 \\cdot I_2}$.

The two magnifications are reciprocals: $m_1 \\cdot m_2 = 1$.

**JEE Pattern:** Lab-based numerical — given $D$ and $d$, find $f$. Or given two image sizes, find object size.`,
  },
  {
    id: "silvered-lens",
    title: "Silvered Lens (Equivalent Mirror)",
    section: "Thin Lenses",
    formulas: [
      "P_{\\text{net}} = 2P_L + P_M",
      "F_{\\text{eq}} = -\\frac{1}{P_{\\text{net}}}",
    ],
    image: "/media/lens_combinations_cutting_and_silvering.webp",
    imageCaption: "Lens cutting mechanics and silvered lens configurations",
    content: `Light refracts through lens → reflects at silvered surface → refracts back. Acts as a curved mirror.

$P_{\\text{net}} = 2P_L + P_M$ (refraction counted twice).

The sign of $F_{\\text{eq}}$ tells you: negative → concave mirror, positive → convex mirror.

**JEE Pattern:** "One face of a lens is silvered. Find the equivalent focal length." Apply $P_{\\text{net}} = 2P_L + P_M$ directly.`,
  },
  {
    id: "compound-microscope",
    title: "Compound Microscope",
    section: "Optical Instruments",
    formulas: [
      "M = -\\frac{v_o}{u_o}\\left(1 + \\frac{D}{f_e}\\right)",
      "M \\approx -\\frac{L}{f_o}\\cdot\\frac{D}{f_e}",
    ],
    image: "/media/optical_instruments_microscopes_telescopes_and_defects.webp",
    imageCaption: "Compound microscope and telescope ray diagrams",
    content: `Objective ($f_o$, short) creates real magnified intermediate image. Eyepiece ($f_e > f_o$) magnifies it further.

At near point: $M = -(v_o/u_o)(1 + D/f_e)$.

Normal adjustment (relaxed eye): $M \\approx -(L/f_o)(D/f_e)$.

$f_o < f_e$ always. Tube length $L = v_o + f_e$.

**JEE Pattern:** Calculate magnification given $f_o$, $f_e$, tube length. Trap: confusing microscope vs telescope architecture.`,
  },
  {
    id: "telescope",
    title: "Astronomical Refracting Telescope",
    section: "Optical Instruments",
    formulas: [
      "M = -\\frac{f_o}{f_e}",
      "L = f_o + f_e",
    ],
    content: `Objective ($f_o$, very large) collects light. Eyepiece ($f_e$, short) magnifies.

Normal adjustment: $M = -f_o/f_e$, tube length $L = f_o + f_e$.

$f_o \\gg f_e$ always. Large aperture objective → better light grasp and resolving power.

**JEE Pattern:** "Find magnification and tube length." Direct formula. Trap: $f_o > f_e$ in telescope, $f_o < f_e$ in microscope.`,
  },
  {
    id: "resolving-power",
    title: "Resolving Power of Instruments",
    section: "Optical Instruments",
    formulas: [
      "d\\theta = \\frac{1.22\\lambda}{a}",
      "d_{\\min} = \\frac{1.22\\lambda}{2\\mu\\sin\\theta}",
    ],
    content: `**Telescope:** minimum angular separation $d\\theta = 1.22\\lambda/a$. Larger aperture → better resolution.

**Microscope:** minimum linear separation $d_{\\min} = 1.22\\lambda / (2 \\cdot \\text{NA})$. Higher NA → better resolution.

Resolving power = $1/(\\text{minimum resolvable separation})$.

**JEE Pattern:** "By what factor does resolving power change if aperture is doubled?" Directly proportional to $a$.`,
  },
];
