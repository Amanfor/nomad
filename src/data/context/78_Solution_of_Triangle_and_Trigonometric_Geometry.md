Mathematics Revision Context: Chapter 78 — Solution of Triangle & Trigonometric Geometry
Source: Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Solution of Triangle/, Solution_of_Triangle_Theory__Exercise_N3txWEi.pdf, Hints_and_Solutin_Solution_of_Triangle_b7b0qel.pdf) Extracted into: JEE/context/ Batch: Mathematics Trigonometric Geometry Core — Fundamental Laws of Triangles (Sine Rule $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$, Cosine Formula $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$, Projection Formula $a = b\cos C + c\cos B$, Napier's Analogy / Tangent Rule $\tan \frac{B - C}{2} = \frac{b - c}{b + c}\cot \frac{A}{2}$), Half-Angle Trigonometric Analytics ($\sin \frac{A}{2} = \sqrt{\frac{(s-b)(s-c)}{bc}}$, $\cos \frac{A}{2} = \sqrt{\frac{s(s-a)}{bc}}$, $\tan \frac{A}{2} = \frac{\Delta}{s(s-a)}$), Area Formulations ($\Delta = \frac{1}{2}ab\sin C = \sqrt{s(s-a)(s-b)(s-c)} = \frac{abc}{4R} = rs = 2R^2 \sin A \sin B \sin C$), Associated Circles (Circumcircle & Circumradius $R = \frac{abc}{4\Delta}$, Incircle & Inradius $r = \frac{\Delta}{s} = 4R\sin \frac{A}{2}\sin \frac{B}{2}\sin \frac{C}{2}$, Escribed Circles & Ex-radii $r_1 = \frac{\Delta}{s-a} = s\tan \frac{A}{2} = 4R\sin \frac{A}{2}\cos \frac{B}{2}\cos \frac{C}{2}$, Fundamental Radii Identities $\sum \frac{1}{r_i} = \frac{1}{r}$, $\sum r_i - r = 4R$, $\sum r_i r_j = s^2$, $r r_1 r_2 r_3 = \Delta^2$), Special Cevians & Segments (Medians & Apollonius Theorem $m_a = \frac{1}{2}\sqrt{2b^2 + 2c^2 - a^2}$, Altitudes & Harmonic Invariant $\sum \frac{1}{h_a} = \frac{1}{r}$, Internal Angle Bisector $\beta_a = \frac{2bc\cos(A/2)}{b+c}$, External Bisector $\beta_a' = \frac{2bc\sin(A/2)}{|b-c|}$), Auxiliary Triangles (Pedal Triangle $DEF$ Sides $a\cos A$, Angles $\pi - 2A$, Circumradius $R/2$, Inradius $2R\cos A\cos B\cos C$, Orthocenter $H$ of $ABC$ is Incenter of $DEF$; Excentral Triangle $I_1 I_2 I_3$ Sides $4R\cos(A/2)$, Circumradius $2R$, Incenter $I$ of $ABC$ is Orthocenter of $I_1 I_2 I_3$), Center Distance Formulas (Euler's Theorem $OI^2 = R^2 - 2Rr \implies R \ge 2r$, Circumcenter-Orthocenter $OH^2 = R^2(1 - 8\cos A\cos B\cos C)$, Incenter-Orthocenter $IH^2 = 2r^2 - 4R^2\cos A\cos B\cos C$, Centroid-Circumcenter $OG^2 = R^2 - \frac{1}{9}(a^2+b^2+c^2)$, Euler Line $H : G : O = 2 : 1$), Quadrilateral Analytics (Ptolemy's Theorem $AC \cdot BD = AB \cdot CD + BC \cdot AD$, Brahmagupta's Area Formula for Cyclic Quadrilaterals $\Delta = \sqrt{(s-a)(s-b)(s-c)(s-d)}$, Inscriptible Quadrilaterals $a + c = b + d$, $\Delta = \sqrt{abcd}$), and Comprehensive High-Yield JEE Traps. Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Fundamental Trigonometric Laws in Triangles
1.1 The Sine Rule
In any triangle $ABC$ with side lengths $a, b, c$ opposite to angles $A, B, C$, and circumradius $R$: $$\mathbf{\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R}$$


* Direct Equivalences: $$a = 2R\sin A, \qquad b = 2R\sin B, \qquad c = 2R\sin C$$
* Ratios of Sides: $$a : b : c = \sin A : \sin B : \sin C$$
1.2 The Cosine Formula
In any triangle $ABC$: $$\mathbf{\cos A = \frac{b^2 + c^2 - a^2}{2bc}, \qquad \cos B = \frac{c^2 + a^2 - b^2}{2ca}, \qquad \cos C = \frac{a^2 + b^2 - c^2}{2ab}}$$


* Alternative Form (Side Length Determination): $$a^2 = b^2 + c^2 - 2bc \cos A$$ $$b^2 = c^2 + a^2 - 2ca \cos B$$ $$c^2 = a^2 + b^2 - 2ab \cos C$$
* Angle Characterization via Cosine:
   * Acute-angled at $A \iff b^2 + c^2 > a^2 \iff \cos A > 0$.
   * Right-angled at $A \iff b^2 + c^2 = a^2 \iff \cos A = 0$.
   * Obtuse-angled at $A \iff b^2 + c^2 < a^2 \iff \cos A < 0$.
1.3 The Projection Formula
Each side of a triangle is the sum of the orthogonal projections of the other two sides onto it: $$\mathbf{a = b \cos C + c \cos B}$$ $$\mathbf{b = c \cos A + a \cos C}$$ $$\mathbf{c = a \cos B + b \cos A}$$
1.4 Napier's Analogy (The Tangent Rule)
In any triangle $ABC$: $$\mathbf{\tan\left(\frac{B - C}{2}\right) = \frac{b - c}{b + c} \cot\left(\frac{A}{2}\right)}$$ $$\mathbf{\tan\left(\frac{C - A}{2}\right) = \frac{c - a}{c + a} \cot\left(\frac{B}{2}\right)}$$ $$\mathbf{\tan\left(\frac{A - B}{2}\right) = \frac{a - b}{a + b} \cot\left(\frac{C}{2}\right)}$$


________________


2. Half-Angle Formulas & Area Formulations
2.1 Half-Angle Trigonometric Ratios
Let the semi-perimeter be $s = \frac{a + b + c}{2}$:


1. Sine of Half-Angles: $$\sin\left(\frac{A}{2}\right) = \sqrt{\frac{(s-b)(s-c)}{bc}}, \quad \sin\left(\frac{B}{2}\right) = \sqrt{\frac{(s-c)(s-a)}{ca}}, \quad \sin\left(\frac{C}{2}\right) = \sqrt{\frac{(s-a)(s-b)}{ab}}$$
2. Cosine of Half-Angles: $$\cos\left(\frac{A}{2}\right) = \sqrt{\frac{s(s-a)}{bc}}, \quad \cos\left(\frac{B}{2}\right) = \sqrt{\frac{s(s-b)}{ca}}, \quad \cos\left(\frac{C}{2}\right) = \sqrt{\frac{s(s-c)}{ab}}$$
3. Tangent of Half-Angles: $$\tan\left(\frac{A}{2}\right) = \sqrt{\frac{(s-b)(s-c)}{s(s-a)}} = \frac{\Delta}{s(s-a)} = \frac{(s-b)(s-c)}{\Delta}$$ $$\tan\left(\frac{B}{2}\right) = \frac{\Delta}{s(s-b)}, \qquad \tan\left(\frac{C}{2}\right) = \frac{\Delta}{s(s-c)}$$
   * Identities for Tangents: $$\tan\left(\frac{A}{2}\right)\tan\left(\frac{B}{2}\right) + \tan\left(\frac{B}{2}\right)\tan\left(\frac{C}{2}\right) + \tan\left(\frac{C}{2}\right)\tan\left(\frac{A}{2}\right) = 1$$ $$\cot\left(\frac{A}{2}\right) + \cot\left(\frac{B}{2}\right) + \cot\left(\frac{C}{2}\right) = \cot\left(\frac{A}{2}\right)\cot\left(\frac{B}{2}\right)\cot\left(\frac{C}{2}\right) = \frac{s}{\Delta}$$
2.2 Formulations for Triangle Area ($\Delta$)
1. Trigonometric Form: $$\Delta = \frac{1}{2}ab \sin C = \frac{1}{2}bc \sin A = \frac{1}{2}ca \sin B$$
2. Heron's Formula: $$\Delta = \sqrt{s(s - a)(s - b)(s - c)}$$
3. Circumradius & Inradius Forms: $$\Delta = \frac{abc}{4R} = rs = 2R^2 \sin A \sin B \sin C$$


________________


3. Associated Circles & Radii Analytics
![Sot Circumcircle Incircle And Excircles Geometry](/media/sot_circumcircle_incircle_and_excircles_geometry.webp) Description: Two-panel geometric reference: (Panel A) Circumcircle of radius $R$, Incircle of radius $r$, and the Euler line connecting Orthocenter $H$, Centroid $G$, and Circumcenter $O$ with invariant ratio $H:G:O = 2:1$; (Panel B) The three Excircles ($r_1, r_2, r_3$) tangent to outer sides and extended sidelines with fundamental radii invariants.
3.1 Circumcircle & Circumradius ($R$)
The unique circle passing through all three vertices $A, B, C$: $$\mathbf{R = \frac{a}{2\sin A} = \frac{b}{2\sin B} = \frac{c}{2\sin C} = \frac{abc}{4\Delta}}$$
3.2 Incircle & Inradius ($r$)
The circle tangent internally to all three sides of triangle $ABC$, centered at incenter $I$ (intersection of internal angle bisectors): $$\mathbf{r = \frac{\Delta}{s} = (s - a)\tan\left(\frac{A}{2}\right) = (s - b)\tan\left(\frac{B}{2}\right) = (s - c)\tan\left(\frac{C}{2}\right)}$$


* Trigonometric Product Form: $$\mathbf{r = 4R \sin\left(\frac{A}{2}\right)\sin\left(\frac{B}{2}\right)\sin\left(\frac{C}{2}\right)}$$
* Ratio Form: $$r = \frac{a \sin(B/2)\sin(C/2)}{\cos(A/2)} = \frac{b \sin(C/2)\sin(A/2)}{\cos(B/2)} = \frac{c \sin(A/2)\sin(B/2)}{\cos(C/2)}$$
3.3 Escribed Circles & Ex-radii ($r_1, r_2, r_3$)
Circles tangent externally to one side and to the extensions of the other two sides, centered at excenters $I_1, I_2, I_3$: $$\mathbf{r_1 = \frac{\Delta}{s - a} = s \tan\left(\frac{A}{2}\right) = 4R \sin\left(\frac{A}{2}\right)\cos\left(\frac{B}{2}\right)\cos\left(\frac{C}{2}\right) = \frac{a \cos(B/2)\cos(C/2)}{\cos(A/2)}}$$ $$\mathbf{r_2 = \frac{\Delta}{s - b} = s \tan\left(\frac{B}{2}\right) = 4R \cos\left(\frac{A}{2}\right)\sin\left(\frac{B}{2}\right)\cos\left(\frac{C}{2}\right) = \frac{b \cos(A/2)\cos(C/2)}{\cos(B/2)}}$$ $$\mathbf{r_3 = \frac{\Delta}{s - c} = s \tan\left(\frac{C}{2}\right) = 4R \cos\left(\frac{A}{2}\right)\cos\left(\frac{B}{2}\right)\sin\left(\frac{C}{2}\right) = \frac{c \cos(A/2)\cos(B/2)}{\cos(C/2)}}$$
3.4 Master Radii Invariants & Identities
1. Reciprocal Identity: $$\mathbf{\frac{1}{r_1} + \frac{1}{r_2} + \frac{1}{r_3} = \frac{1}{r}}$$
2. Sum of Ex-radii & Circumradius: $$\mathbf{r_1 + r_2 + r_3 - r = 4R}$$
3. Pairwise Product of Ex-radii: $$\mathbf{r_1 r_2 + r_2 r_3 + r_3 r_1 = s^2}$$
4. Product of All Radii: $$\mathbf{r \cdot r_1 \cdot r_2 \cdot r_3 = \Delta^2}$$
5. Linear Combinations: $$r_1 r_2 = s(s - c) \implies (r_1 + r_2) = c \cot(C/2)$$ $$\frac{1}{r r_1} + \frac{1}{r_2 r_3} = \frac{a + b + c}{\Delta^2} \cdot \dots$$


________________


4. Special Cevians: Medians, Altitudes & Bisectors
4.1 Medians & Apollonius' Theorem
A median connects a vertex to the midpoint of the opposite side. Let $m_a, m_b, m_c$ be medians from $A, B, C$:


* Apollonius' Theorem: $$b^2 + c^2 = 2\left(m_a^2 + \frac{a^2}{4}\right) \implies \mathbf{m_a = \frac{1}{2}\sqrt{2b^2 + 2c^2 - a^2}}$$ $$m_b = \frac{1}{2}\sqrt{2c^2 + 2a^2 - b^2}, \qquad m_c = \frac{1}{2}\sqrt{2a^2 + 2b^2 - c^2}$$
* Sum of Squares Invariant: $$\mathbf{m_a^2 + m_b^2 + m_c^2 = \frac{3}{4}(a^2 + b^2 + c^2)}$$
* Centroid Properties:
   * Centroid $G$ divides every median in the ratio $2 : 1$ from the vertex: $AG = \frac{2}{3}m_a$.
   * Three medians divide $\Delta ABC$ into six sub-triangles of equal area $\frac{\Delta}{6}$.
4.2 Altitudes ($h_a, h_b, h_c$)
Altitudes dropped perpendicular to opposite sides:


* Length Formulas: $$h_a = \frac{2\Delta}{a} = b \sin C = c \sin B$$ $$h_b = \frac{2\Delta}{b} = c \sin A = a \sin C$$ $$h_c = \frac{2\Delta}{c} = a \sin B = b \sin A$$
* Harmonic Mean Relation with Inradius: $$\mathbf{\frac{1}{h_a} + \frac{1}{h_b} + \frac{1}{h_c} = \frac{a}{2\Delta} + \frac{b}{2\Delta} + \frac{c}{2\Delta} = \frac{2s}{2\Delta} = \frac{1}{r}}$$
4.3 Angle Bisectors
1. Internal Angle Bisector ($\beta_a, \beta_b, \beta_c$):
   * Length of internal bisector of angle $A$ terminated at side $BC$: $$\mathbf{\beta_a = \frac{2bc \cos(A/2)}{b + c}}$$ $$\beta_b = \frac{2ca \cos(B/2)}{c + a}, \qquad \beta_c = \frac{2ab \cos(C/2)}{a + b}$$
2. External Angle Bisector ($\beta_a'$):
   * Length of bisector of exterior angle $A$ terminated at extended side $BC$: $$\mathbf{\beta_a' = \frac{2bc \sin(A/2)}{|b - c|}}$$


________________


5. Auxiliary Triangles & Centers Invariants
![Sot Pedal And Excentral Triangles Centers](/media/sot_pedal_and_excentral_triangles_centers.webp) Description: Two-panel reference diagram: (Panel A) Pedal triangle $DEF$ formed by feet of altitudes, illustrating side lengths, angle measures, and the duality where the Orthocenter $H$ of $\Delta ABC$ is the Incenter of $\Delta DEF$; (Panel B) Excentral triangle $I_1 I_2 I_3$ demonstrating that the Incenter $I$ of $\Delta ABC$ is the Orthocenter of $\Delta I_1 I_2 I_3$ with side lengths $4R\cos(A/2)$ and circumradius $2R$.
5.1 The Pedal Triangle ($DEF$)
Formed by joining the feet of the altitudes $D, E, F$ of $\Delta ABC$ from vertices $A, B, C$:


* Side Lengths: $$\mathbf{EF = a \cos A, \qquad FD = b \cos B, \qquad DE = c \cos C}$$
* Interior Angles (for acute triangle): $$\angle D = \pi - 2A, \qquad \angle E = \pi - 2B, \qquad \angle F = \pi - 2C$$
* Circumradius ($R_p$) & Inradius ($r_p$): $$\mathbf{R_p = \frac{R}{2}, \qquad r_p = 2R \cos A \cos B \cos C}$$
* Area of Pedal Triangle ($\Delta_p$): $$\mathbf{\Delta_p = 2\Delta \cos A \cos B \cos C = \frac{1}{2}R^2 \sin 2A \sin 2B \sin 2C}$$
* Fundamental Duality: $$\mathbf{\text{The Orthocenter } H \text{ of } \Delta ABC \text{ is the Incenter of its Pedal Triangle } \Delta DEF.}$$
5.2 The Excentral Triangle ($I_1 I_2 I_3$)
Formed by connecting the three excenters $I_1, I_2, I_3$:


* Side Lengths: $$\mathbf{I_2 I_3 = 4R \cos\left(\frac{A}{2}\right), \qquad I_3 I_1 = 4R \cos\left(\frac{B}{2}\right), \qquad I_1 I_2 = 4R \cos\left(\frac{C}{2}\right)}$$
* Interior Angles: $$\angle I_1 = \frac{\pi - A}{2}, \qquad \angle I_2 = \frac{\pi - B}{2}, \qquad \angle I_3 = \frac{\pi - C}{2}$$
* Circumradius of Excentral Triangle: $$\mathbf{R_{\text{excentral}} = 2R}$$
* Area of Excentral Triangle ($\Delta_{\text{excentral}}$): $$\mathbf{\Delta_{\text{excentral}} = 8R^2 \cos\left(\frac{A}{2}\right)\cos\left(\frac{B}{2}\right)\cos\left(\frac{C}{2}\right) = 2Rs}$$
* Fundamental Duality: $$\mathbf{\text{The Incenter } I \text{ of } \Delta ABC \text{ is the Orthocenter of its Excentral Triangle } \Delta I_1 I_2 I_3.}$$ $$\mathbf{\Delta ABC \text{ is the Pedal Triangle of its Excentral Triangle } \Delta I_1 I_2 I_3.}$$


________________


6. Distances Between Special Triangle Centers
6.1 Master Distance Formulas
Let $O$ be Circumcenter, $I$ Incenter, $H$ Orthocenter, $G$ Centroid, and $I_1$ Excenter:


1. Circumcenter to Incenter ($O - I$, Euler's Distance Theorem): $$\mathbf{OI^2 = R^2 - 2Rr \implies OI = \sqrt{R(R - 2r)}}$$
   * Euler's Inequality: Since $OI^2 \ge 0$, we have $\mathbf{R \ge 2r}$. Equality holds strictly if and only if the triangle is equilateral ($R = 2r$).
2. Circumcenter to Orthocenter ($O - H$): $$\mathbf{OH^2 = R^2(1 - 8\cos A \cos B \cos C)}$$
3. Circumcenter to Centroid ($O - G$): $$\mathbf{OG^2 = R^2 - \frac{1}{9}(a^2 + b^2 + c^2)}$$
4. Incenter to Orthocenter ($I - H$): $$\mathbf{IH^2 = 2r^2 - 4R^2 \cos A \cos B \cos C}$$
5. Circumcenter to Excenters ($O - I_1, O - I_2, O - I_3$): $$\mathbf{OI_1^2 = R^2 + 2R r_1, \qquad OI_2^2 = R^2 + 2R r_2, \qquad OI_3^2 = R^2 + 2R r_3}$$
6. Incenter to Excenters ($I - I_1$): $$\mathbf{I I_1 = 4R \sin\left(\frac{A}{2}\right), \qquad I I_2 = 4R \sin\left(\frac{B}{2}\right), \qquad I I_3 = 4R \sin\left(\frac{C}{2}\right)}$$
6.2 The Euler Line Invariant
In every non-equilateral triangle, the Orthocenter ($H$), Centroid ($G$), and Circumcenter ($O$) are collinear: $$\mathbf{H \text{ --- (2) --- } G \text{ --- (1) --- } O}$$


* The Centroid $G$ divides the segment $HO$ internally in the exact ratio $2 : 1$: $$\vec{OG} = \frac{1}{3}\vec{OH} \implies \vec{H} = 3\vec{G} - 2\vec{O}$$
* In an equilateral triangle, $H, G, O, I$ all coincide at a single point ($R = 2r, r_1 = r_2 = r_3 = 3r = \frac{3}{2}R$).


________________


7. Cyclic & Inscriptible Quadrilaterals
7.1 Cyclic Quadrilaterals
A quadrilateral whose four vertices lie on a common circle:


* Opposite angles are supplementary: $\angle A + \angle C = \pi$, $\angle B + \angle D = \pi$.
* Ptolemy's Theorem: $$\mathbf{AC \cdot BD = AB \cdot CD + BC \cdot AD}$$ (The product of diagonals equals the sum of the products of opposite sides).
* Brahmagupta's Area Formula: Let semi-perimeter be $s = \frac{a + b + c + d}{2}$: $$\mathbf{\Delta_{\text{cyclic}} = \sqrt{(s - a)(s - b)(s - c)(s - d)}}$$
* Circumradius of Cyclic Quadrilateral: $$R_{\text{quad}} = \frac{1}{4\Delta}\sqrt{(ab + cd)(ac + bd)(ad + bc)}$$
7.2 Inscriptible (Tangential) Quadrilaterals
A quadrilateral that has an incircle tangent to all four sides:


* Pitot's Theorem: $$\mathbf{a + c = b + d = s}$$ (Sums of opposite sides are equal to the semi-perimeter).
* Bicentric Quadrilateral (Both Cyclic & Inscriptible): $$\mathbf{\Delta = \sqrt{abcd}}$$


________________


8. High-Yield JEE Traps & Exam Invariants
1. The $m-n$ Theorem (Cotangent Theorem):
   * If a line drawn from vertex $A$ divides the base $BC$ at point $D$ in ratio $m : n$, and makes angle $\theta$ with $BC$:
      * If $\angle BAD = \alpha$ and $\angle CAD = \beta$: $$\mathbf{(m + n)\cot \theta = m \cot \alpha - n \cot \beta}$$
      * If angles at the base are $B$ and $C$: $$\mathbf{(m + n)\cot \theta = n \cot B - m \cot C}$$
2. Ambiguous Case in Sine Rule ($SSA$):
   * Given two sides $a, b$ and non-included angle $A$:
      * If $a < b \sin A$: No triangle exists ($\sin B > 1$).
      * If $a = b \sin A$: Exactly one right triangle ($\angle B = 90^\circ$).
      * If $b \sin A < a < b$: Two triangles exist ($\angle B$ can be acute or obtuse).
      * If $a \ge b$: Exactly one triangle exists (only acute $B$ is geometrically valid).
3. Equilateral Triangle Equivalences:
   * Triangle $ABC$ is equilateral if and only if any of the following hold:
      * $a^2 + b^2 + c^2 = ab + bc + ca$
      * $\cos A + \cos B + \cos C = \frac{3}{2}$
      * $\sin A + \sin B + \sin C = \frac{3\sqrt{3}}{2}$
      * $\tan A + \tan B + \tan C = 3\sqrt{3}$ (for acute triangle)
      * $R = 2r$
      * $r_1 = r_2 = r_3$
4. Right-Angled Triangle Centers Placement:
   * If $\angle C = 90^\circ$:
      * Orthocenter $H$ is the vertex $C(0, 0)$.
      * Circumcenter $O$ is the midpoint of the hypotenuse $AB$ ($R = c/2$).
      * Inradius: $r = \frac{a + b - c}{2} = s - c$.
      * Ex-radii: $r_1 = s - b, \quad r_2 = s - a, \quad r_3 = s$.
5. Incenter as Angle Bisector Ratio:
   * Incenter $I$ divides the internal angle bisector $AD$ in the ratio: $$\mathbf{\frac{AI}{ID} = \frac{b + c}{a}}$$