Mathematics Revision Context: Chapter 65 — Conic Sections: Parabola, Ellipse & Hyperbola


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Conic Section/`, `Conic_Section_pb7KUgN.pdf`, and `Conic_Section_FKu5wRX.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Coordinate Geometry Core — General Conic Section Definition (Focus-Directrix Metric $\frac{SP}{PM} = e$, Discriminant Determinant $\Delta = abc + 2fgh - af^2 - bg^2 - ch^2$, Degenerate vs. Non-Degenerate Classifications, 3D Right Circular Cone Slicing Angles $\alpha$ vs. $\beta$), Parabola Dynamics ($e = 1$, Standard Forms $y^2 = \pm 4ax$ and $x^2 = \pm 4ay$, Latus Rectum $4a$, Focal Distance $SP = x_1 + a = a(1+t^2)$, Focal Chord Parameter Product $t_1 t_2 = -1$, Chord Length $a(t+1/t)^2 = 4a\csc^2\theta$, Semi-Latus Rectum Harmonic Mean $\frac{1}{SP} + \frac{1}{SQ} = \frac{1}{a}$, Focal Circle Directrix Tangency), Ellipse Architecture ($0 < e < 1$, Major Axis $2a$, Minor Axis $2b$, Eccentricity $b^2 = a^2(1-e^2)$, Latus Rectum $\frac{2b^2}{a}$, Focal Sum Property $SP + S'P = 2a$, Auxiliary Circle $x^2 + y^2 = a^2$, Eccentric Angle $\theta$, Ratio of Ordinates $\frac{b}{a}$), Hyperbola Architecture ($e > 1$, Transverse Axis $2a$, Conjugate Axis $2b$, Eccentricity $b^2 = a^2(e^2-1)$, Latus Rectum $\frac{2b^2}{a}$, Focal Difference Property $|SP - S'P| = 2a$, Conjugate Hyperbola Invariant $\frac{1}{e^2} + \frac{1}{(e')^2} = 1$, Asymptotes $y = \pm \frac{b}{a}x \iff \frac{x^2}{a^2} - \frac{y^2}{b^2} = 0$, Rectangular Hyperbola $xy = c^2$), Unified Tangent Formulations (Slope Forms: Parabola $y = mx + a/m$, Ellipse $y = mx \pm \sqrt{a^2m^2+b^2}$, Hyperbola $y = mx \pm \sqrt{a^2m^2-b^2}$, Point Forms $T = 0$, Parametric Forms), Director Circles (Parabola Directrix $x + a = 0$, Ellipse $x^2 + y^2 = a^2 + b^2$, Hyperbola $x^2 + y^2 = a^2 - b^2$), Unified Normal Formulations (Parabola Slope Form $y = mx - 2am - am^3$, Co-Normal Points Cubic $am^3 + (2a-h)m + k = 0$, Sum of Ordinates $y_1+y_2+y_3 = 0$, Centroid on Axis, Ellipse & Hyperbola Normals), Chords of Contact ($T = 0$), Midpoint Chords ($T = S_1$), Optical Reflection Invariants of Conics, and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Unified Conic Section Definition & Classification


### 1.1 The Focus-Directrix Metric


A conic section is the locus of a point $P(x, y)$ that moves in a plane such that the ratio of its Euclidean distance from a fixed point $S(p, q)$ (called the **Focus**) to its perpendicular distance from a fixed straight line $L \equiv lx + my + n = 0$ (called the **Directrix**) is a constant positive scalar $e$ (called the **Eccentricity**):


$$\mathbf{\frac{SP}{PM} = e \iff SP^2 = e^2 \cdot PM^2}$$


$$\mathbf{(l^2 + m^2)\left[(x - p)^2 + (y - q)^2\right] = e^2 (lx + my + n)^2}$$


Expanding this equation yields the general algebraic equation of the second degree:


$$\mathbf{ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0}$$


---


### 1.2 Discriminant Determinant & Conic Classification


![Conic Sections Eccentricity and 3D Cone Slicing](/media/conic_sections_eccentricity_and_3d_cone_slicing.webp)
*Description: Two-panel conic section reference: (Panel A) 3D right circular cone slicing angle table and taxonomy comparing slicing plane angle $ eta$ against cone semi-vertical generator angle $ lpha$ across circle, ellipse, parabola, hyperbola, and degenerate cuts; (Panel B) Coordinate plane representation of the universal focus-directrix metric $ rac{SP}{PM} = e$, demonstrating the transition of loci from closed ellipses ($e < 1$) to open parabolas ($e = 1$) and two-branched hyperbolas ($e > 1$).*


The geometric nature of the curve is governed by the **Discriminant Determinant ($\Delta$)** and the quadratic terms discriminant ($h^2 - ab$):


$$\mathbf{\Delta = \begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = abc + 2fgh - af^2 - bg^2 - ch^2}$$


1. **Degenerate Conics ($\Delta = 0$ — Plane passes through the Cone Vertex):**
   * If $\mathbf{h^2 > ab}$: Two distinct intersecting real straight lines.
   * If $\mathbf{h^2 = ab}$: Two parallel or coincident straight lines.
   * If $\mathbf{h^2 < ab}$: A single isolated point (two imaginary lines intersecting at a real point).


2. **Non-Degenerate Conics ($\Delta \neq 0$ — Plane does not pass through the Vertex):**
   * **Circle:** $\mathbf{e = 0, \quad a = b \neq 0, \quad h = 0}$.
   * **Parabola:** $\mathbf{e = 1, \quad h^2 - ab = 0}$.
   * **Ellipse:** $\mathbf{0 < e < 1, \quad h^2 - ab < 0}$.
   * **Hyperbola:** $\mathbf{e > 1, \quad h^2 - ab > 0}$.
   * **Rectangular Hyperbola:** $\mathbf{e = \sqrt{2}, \quad h^2 - ab > 0, \quad a + b = 0}$ (Perpendicular asymptotes).


---


### 1.3 Cone Slicing Geometry (3D Stereometric Perspective)


Let a double right circular cone have semi-vertical angle $\alpha$ with respect to its central axis. Let a cutting plane intersect the cone at an angle $\beta$ with respect to the central axis:


1. **$\beta = 90^\circ$:** Slicing plane is perpendicular to the axis $\implies$ **Circle**.
2. **$\alpha < \beta < 90^\circ$:** Plane cuts all generators on a single nappe $\implies$ **Ellipse** (closed curve).
3. **$\beta = \alpha$:** Plane is parallel to a generator of the cone $\implies$ **Parabola** (open curve).
4. **$0 \le \beta < \alpha$:** Plane cuts both nappes of the double cone $\implies$ **Hyperbola** (two open branches).


---


## 2. The Parabola ($e = 1$)


![Parabola Geometry Focal Chords and Normals](/media/parabola_geometry_focal_chords_and_normals.webp)
*Description: Two-panel parabola geometry graphic: (Panel A) Standard parabola $y^2 = 4ax$ showing focal chord $PQ$ with endpoints $t_1, t_2$ satisfying $t_1 t_2 = -1$, semi-latus rectum harmonic mean, and diameter circle touching the directrix; (Panel B) Cubic co-normal ray geometry showing three normals intersecting at $P(h, k)$ with zero sum of ordinates ($y_1 + y_2 + y_3 = 0$) and collinearity of co-normal centroid on the axis.*


### 2.1 Standard Anatomical Metrics ($y^2 = 4ax$)


A parabola is the planar locus of a point whose distance from the focus equals its distance from the directrix ($SP = PM$):


$$\mathbf{y^2 = 4ax \quad (a > 0)}$$


* **Vertex ($A$):** Origin $(0, 0)$.
* **Focus ($S$):** $(a, 0)$.
* **Directrix ($L$):** $x + a = 0 \iff x = -a$.
* **Axis of Symmetry:** $y = 0$ ($x$-axis). Tangent at Vertex: $x = 0$ ($y$-axis).
* **Latus Rectum ($L L'$):** Double ordinate passing through the focus $S$:
  * Length: $\mathbf{4a}$.
  * Endpoints: $\mathbf{L(a, 2a) \quad \text{and} \quad L'(a, -2a)}$.
* **Parametric Form:**
  $$\mathbf{x = at^2, \quad y = 2at \quad (t \in \mathbb{R})}$$
* **Focal Distance of Point $P(x_1, y_1)$:**
  By definition, $SP = PM = x_1 + a$:
  $$\mathbf{SP = x_1 + a = a(1 + t^2)}$$


---


### 2.2 Focal Chord Theorems


A focal chord is any chord passing through the focus $S(a, 0)$:


1. **Parameter Product Invariant:**
   Let the endpoints of the chord be $P(at_1^2, 2at_1)$ and $Q(at_2^2, 2at_2)$. Since $P, S, Q$ are collinear:
   $$\text{Slope}(PS) = \text{Slope}(SQ) \implies \frac{2at_1 - 0}{at_1^2 - a} = \frac{0 - 2at_2}{a - at_2^2} \implies \frac{2t_1}{t_1^2 - 1} = \frac{-2t_2}{1 - t_2^2}$$
   $$\mathbf{t_1 t_2 = -1 \iff t_2 = -\frac{1}{t_1}}$$


2. **Length of a Focal Chord:**
   If one endpoint has parameter $t$, the other endpoint has parameter $-1/t$:
   $$\mathbf{L_{\text{focal}} = a\left( t + \frac{1}{t} \right)^2 = a\left( t - \frac{1}{t} \right)^2 + 4a}$$
   * If the focal chord makes an angle $\theta$ with the axis of the parabola ($x$-axis):
     $$\mathbf{L_{\text{focal}} = 4a \csc^2\theta}$$
   * The **minimum length of any focal chord** occurs at $\theta = 90^\circ$ ($t = 1$), which is the **Latus Rectum ($4a$)**.


3. **Semi-Latus Rectum Harmonic Mean Invariant:**
   The semi-latus rectum ($2a$) is the **Harmonic Mean** between the two segments $SP$ and $SQ$ of any focal chord:
   $$SP = a(1 + t^2), \quad SQ = a\left(1 + \frac{1}{t^2}\right) = \frac{a(1 + t^2)}{t^2}$$
   $$\frac{1}{SP} + \frac{1}{SQ} = \frac{1}{a(1 + t^2)} + \frac{t^2}{a(1 + t^2)} = \frac{1 + t^2}{a(1 + t^2)} = \frac{1}{a}$$
   $$\mathbf{\frac{1}{SP} + \frac{1}{SQ} = \frac{1}{a} \iff \frac{2 \cdot SP \cdot SQ}{SP + SQ} = 2a}$$


4. **Focal Circle Tangency Theorems:**
   * The circle described on any **focal chord as diameter touches the directrix**!
   * The circle described on any **focal radius $SP$ as diameter touches the tangent at the vertex** ($y$-axis)!
   * Tangents drawn at the extremities $P(t)$ and $Q(-1/t)$ of a focal chord **intersect at right angles ($90^\circ$) on the directrix**!


---


### 2.3 Co-Normal Points to a Parabola


The equation of a normal to $y^2 = 4ax$ with slope $m$ (where $m = -t$) is:


$$\mathbf{y = mx - 2am - am^3}$$


If this normal passes through an external point $(h, k)$:


$$k = mh - 2am - am^3 \implies \mathbf{am^3 + (2a - h)m + k = 0}$$


This is a cubic equation in $m$, implying that from any point $(h, k)$ in the plane, **at most three normals** can be drawn to a parabola:


1. **Vieta's Relations for Slopes $m_1, m_2, m_3$:**
   $$\mathbf{m_1 + m_2 + m_3 = 0}$$
   $$\mathbf{m_1 m_2 + m_2 m_3 + m_3 m_1 = \frac{2a - h}{a}}$$
   $$\mathbf{m_1 m_2 m_3 = -\frac{k}{a}}$$


2. **Sum of Ordinates of Co-Normal Points:**
   The co-normal points on the parabola are $(am_i^2, -2am_i)$:
   $$\mathbf{y_1 + y_2 + y_3 = -2a(m_1 + m_2 + m_3) = -2a(0) = 0}$$
   *(The sum of the ordinates of three co-normal points is always identically zero).*


3. **Centroid of the Co-Normal Triangle:**
   $$\mathbf{G = \left( \frac{am_1^2 + am_2^2 + am_3^2}{3}, \; \frac{y_1 + y_2 + y_3}{3} \right) = \left( \frac{2(h - 2a)}{3}, \; 0 \right)}$$
   *(The centroid of the triangle formed by three co-normal points lies strictly on the axis of the parabola).*


4. **Condition for Three Real Distinct Normals:**
   $$\mathbf{27ak^2 < 4(h - 2a)^3 \iff h > 2a}$$


---


## 3. The Ellipse ($0 < e < 1$)


![Ellipse and Hyperbola Conjugacy and Asymptotes](/media/ellipse_and_hyperbola_conjugacy_and_asymptotes.webp)
*Description: Two-panel central conic geometry graphic: (Panel A) Ellipse focal sum property $SP + S'P = 2a$, Auxiliary Circle $x^2 + y^2 = a^2$, and Director Circle $x^2 + y^2 = a^2 + b^2$; (Panel B) Hyperbola focal difference property $|SP - S'P| = 2a$, Conjugate Hyperbola, Asymptote asymptopia $y = \pm  rac{b}{a}x$, and the eccentricity reciprocal identity $ rac{1}{e^2} +  rac{1}{(e')^2} = 1$.*


### 3.1 Standard Equation & Metrics ($ rac{x^2}{a^2} +  rac{y^2}{b^2} = 1, \; a > b$)


$$\mathbf{\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad (a > b > 0)}$$


* **Center:** $(0, 0)$.
* **Foci:** $S(ae, 0)$ and $S'(-ae, 0)$. Distance between foci $= 2ae$.
* **Directrices:** $x = \frac{a}{e}$ and $x = -\frac{a}{e}$. Distance between directrices $= \frac{2a}{e}$.
* **Major Axis:** Length $= 2a$ along $x$-axis. **Minor Axis:** Length $= 2b$ along $y$-axis.
* **Eccentricity Formula:**
  $$\mathbf{b^2 = a^2(1 - e^2) \iff e = \sqrt{1 - \frac{b^2}{a^2}} = \frac{\sqrt{a^2 - b^2}}{a}}$$
* **Latus Rectum:**
  $$\mathbf{L_{\text{LR}} = \frac{2b^2}{a} = 2a(1 - e^2) = 2e \cdot (\text{distance from focus to directrix})}$$
* **Parametric Form:**
  $$\mathbf{x = a\cos\theta, \quad y = b\sin\theta \quad (\theta \in [0, 2\pi))}$$
  where $\theta$ is the **eccentric angle**.


---


### 3.2 The Focal Sum Invariant (Bifocal Definition)


For any point $P(x, y)$ on the ellipse:
* Focal distance from $S(ae, 0)$: $SP = a - ex$.
* Focal distance from $S'(-ae, 0)$: $S'P = a + ex$.


$$\mathbf{SP + S'P = (a - ex) + (a + ex) = 2a = \text{Length of Major Axis}}$$


*(The sum of the focal distances of any point on an ellipse is constant and equal to the major axis).*


---


### 3.3 Auxiliary Circle & Ratio of Ordinates


The circle described on the major axis $A A'$ of the ellipse as diameter:


$$\mathbf{x^2 + y^2 = a^2}$$


* For any point $P(a\cos\theta, b\sin\theta)$ on the ellipse, draw a vertical line meeting the auxiliary circle at $Q(a\cos\theta, a\sin\theta)$.
* The angle $\theta$ subtended by $CQ$ with the positive $x$-axis is the **eccentric angle** of $P$.
* **Ratio of Ordinates:**
  $$\mathbf{\frac{y_P}{y_Q} = \frac{b\sin\theta}{a\sin\theta} = \frac{b}{a} = \text{constant}}$$


---


## 4. The Hyperbola ($e > 1$)


### 4.1 Standard Equation & Metrics ($ rac{x^2}{a^2} -  rac{y^2}{b^2} = 1$)


$$\mathbf{\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1}$$


* **Center:** $(0, 0)$.
* **Foci:** $S(ae, 0)$ and $S'(-ae, 0)$. Distance between foci $= 2ae$.
* **Directrices:** $x = \pm \frac{a}{e}$. Distance between directrices $= \frac{2a}{e}$.
* **Transverse Axis:** Length $= 2a$ along $x$-axis. **Conjugate Axis:** Length $= 2b$ along $y$-axis.
* **Eccentricity Formula:**
  $$\mathbf{b^2 = a^2(e^2 - 1) \iff e = \sqrt{1 + \frac{b^2}{a^2}} = \frac{\sqrt{a^2 + b^2}}{a} > 1}$$
* **Latus Rectum:**
  $$\mathbf{L_{\text{LR}} = \frac{2b^2}{a} = 2a(e^2 - 1)}$$
* **Parametric Form:**
  $$\mathbf{x = a\sec\theta, \quad y = b\tan\theta \quad (\theta \in [0, 2\pi) \setminus \{\pi/2, 3\pi/2\})}$$


---


### 4.2 The Focal Difference Invariant


For any point $P(x, y)$ on the hyperbola:
* $SP = ex - a$ (for right branch $x \ge a$) and $S'P = ex + a$.


$$\mathbf{|SP - S'P| = 2a = \text{Length of Transverse Axis}}$$


*(The absolute difference of the focal distances of any point on a hyperbola is constant and equal to the transverse axis).*


---


### 4.3 Conjugate Hyperbola & The Dual Reciprocal Invariant


The hyperbola whose transverse and conjugate axes are respectively the conjugate and transverse axes of the given hyperbola:


$$\mathbf{-\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \iff \frac{x^2}{a^2} - \frac{y^2}{b^2} = -1}$$


* Eccentricity $e'$ of the conjugate hyperbola:
  $$(e')^2 = 1 + \frac{a^2}{b^2} = \frac{a^2 + b^2}{b^2}$$
* **Fundamental Reciprocal Eccentricity Invariant:**
  $$\frac{1}{e^2} = \frac{a^2}{a^2 + b^2}, \quad \frac{1}{(e')^2} = \frac{b^2}{a^2 + b^2}$$
  $$\mathbf{\frac{1}{e^2} + \frac{1}{(e')^2} = 1}$$


---


### 4.4 Asymptotes of a Hyperbola


An asymptote is a straight line that touches the hyperbola at infinity:


$$\mathbf{y = \pm \frac{b}{a}x \iff \frac{x^2}{a^2} - \frac{y^2}{b^2} = 0}$$


1. **Angle Between Asymptotes:**
   $$\mathbf{2\theta = 2\tan^{-1}\left(\frac{b}{a}\right) = 2\sec^{-1}(e)}$$
2. **The Constant Difference Theorem:**
   The equations of the Hyperbola ($H$), its Asymptotes ($A$), and its Conjugate Hyperbola ($C$) differ only by constant terms in arithmetic progression:
   $$\mathbf{H \equiv \frac{x^2}{a^2} - \frac{y^2}{b^2} - 1 = 0}$$
   $$\mathbf{A \equiv \frac{x^2}{a^2} - \frac{y^2}{b^2} = 0}$$
   $$\mathbf{C \equiv \frac{x^2}{a^2} - \frac{y^2}{b^2} + 1 = 0}$$
   $$\mathbf{H + C = 2A}$$


---


### 4.5 Rectangular (Equilateral) Hyperbola ($xy = c^2$)


When transverse and conjugate axes are equal ($a = b$):
* $x^2 - y^2 = a^2 \implies e = \sqrt{1 + 1} = \mathbf{\sqrt{2}}$.
* The asymptotes are $y = \pm x$, which are **mutually perpendicular ($90^\circ$)**.
* Rotating axes by $45^\circ$ yields the canonical form:
  $$\mathbf{xy = c^2 \quad \left(c^2 = \frac{a^2}{2}\right)}$$
  * Asymptotes: Coordinate axes ($x = 0$ and $y = 0$).
  * Foci: $(\pm \sqrt{2}c, \; \pm \sqrt{2}c)$. Directrices: $x + y = \pm \sqrt{2}c$.
  * Parametric Point: $\mathbf{\left( ct, \; \frac{c}{t} \right)}$.


---


## 5. Unified Tangent & Normal Formulations


### 5.1 Tangent Formulations Across Conics


| Conic Equation | Slope Form ($y = mx + C$) | Point of Contact | Point Form ($T = 0$) |
| :--- | :--- | :--- | :--- |
| **Parabola $y^2 = 4ax$** | $y = mx + \frac{a}{m}$ | $\left( \frac{a}{m^2}, \; \frac{2a}{m} \right)$ | $yy_1 = 2a(x + x_1)$ |
| **Parabola $x^2 = 4ay$** | $y = mx - am^2$ | $(2am, \; am^2)$ | $xx_1 = 2a(y + y_1)$ |
| **Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$** | $y = mx \pm \sqrt{a^2m^2 + b^2}$ | $\left( \mp \frac{a^2m}{\sqrt{a^2m^2+b^2}}, \; \pm \frac{b^2}{\sqrt{a^2m^2+b^2}} \right)$ | $\frac{xx_1}{a^2} + \frac{yy_1}{b^2} = 1$ |
| **Hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$** | $y = mx \pm \sqrt{a^2m^2 - b^2}$ | $\left( \mp \frac{a^2m}{\sqrt{a^2m^2-b^2}}, \; \mp \frac{b^2}{\sqrt{a^2m^2-b^2}} \right)$ | $\frac{xx_1}{a^2} - \frac{yy_1}{b^2} = 1$ |


---


### 5.2 Director Circles of Conics


The Director Circle is the locus of the point of intersection of two mutually perpendicular tangents:


1. **Parabola $y^2 = 4ax$:**
   Tangents with slopes $m_1, m_2$ satisfy $m^2 x - my + a = 0$.
   For perpendicularity, $m_1 m_2 = \frac{a}{x} = -1 \implies \mathbf{x + a = 0}$.
   * **Theorem:** The Director Circle of a parabola is its **Directrix**!
2. **Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$:**
   $$\mathbf{x^2 + y^2 = a^2 + b^2}$$
   *(Concentric circle of radius $\sqrt{a^2 + b^2}$).*
3. **Hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:**
   $$\mathbf{x^2 + y^2 = a^2 - b^2}$$
   * If $a > b$: Real circle of radius $\sqrt{a^2 - b^2}$.
   * If $a = b$ (Rectangular Hyperbola): Point circle at origin $(0, 0)$.
   * If $a < b$: Imaginary (no perpendicular tangents exist).


---


### 5.3 Normal Formulations Across Conics


1. **Parabola $y^2 = 4ax$:**
   * Point Form at $(x_1, y_1)$: $\mathbf{y - y_1 = -\frac{y_1}{2a}(x - x_1)}$
   * Parametric Form at $t$: $\mathbf{y + tx = 2at + at^3}$
   * Slope Form ($m = -t$): $\mathbf{y = mx - 2am - am^3}$ (Contact: $(am^2, -2am)$).


2. **Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$:**
   * Point Form: $\mathbf{\frac{a^2 x}{x_1} - \frac{b^2 y}{y_1} = a^2 - b^2 = a^2 e^2}$
   * Parametric Form: $\mathbf{ax\sec\theta - by\csc\theta = a^2 - b^2}$
   * Slope Form: $\mathbf{y = mx \pm \frac{m(a^2 - b^2)}{\sqrt{a^2 + b^2m^2}}}$


3. **Hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:**
   * Point Form: $\mathbf{\frac{a^2 x}{x_1} + \frac{b^2 y}{y_1} = a^2 + b^2 = a^2 e^2}$
   * Parametric Form: $\mathbf{ax\cos\theta + by\cot\theta = a^2 + b^2}$


---


## 6. Optical & Reflection Properties of Conics


1. **Parabolic Reflection Law:**
   Any ray of light emanating from the focus $S$ strikes the parabolic mirror and reflects **parallel to the axis** of the parabola:
   * The tangent and normal at $P$ bisect the angles between the focal radius $SP$ and the horizontal line through $P$ parallel to the axis.
2. **Elliptic Reflection Law (Whispering Gallery):**
   Any ray emanating from one focus $S$ reflects off the ellipse and passes **directly through the other focus $S'$**:
   * The normal at $P$ is the **internal angle bisector** of $\angle SPS'$. The tangent is the external bisector.
3. **Hyperbolic Reflection Law:**
   A ray directed towards one focus $S'$ reflects off the hyperbola as if it originated from the other focus $S$:
   * The tangent at $P$ is the **internal angle bisector** of $\angle SPS'$.


---


## 7. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Parabola Slope Condition Fallacy:**
   * For $y^2 = 4ax$, the tangent slope form is $y = mx + a/m$.
   * **Trap:** This formula **fails for vertical tangents** ($m \to \infty$), which is the tangent at the vertex $x = 0$! Always consider vertical tangents separately.
2. **Co-Normal Centroid Scaling Trap:**
   * The centroid of the co-normal triangle is $\left(\frac{2(h-2a)}{3}, 0\right)$, NOT $\left(\frac{h-2a}{3}, 0\right)$.
3. **Hyperbola Slope Tangency Existence Bound:**
   * In $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, the tangent is $y = mx \pm \sqrt{a^2m^2 - b^2}$.
   * **Critical Condition:** A real tangent exists **if and only if $|m| > b/a$**! If $|m| \le b/a$, the line is parallel to or lies inside the asymptotes and can never touch the hyperbola.
4. **Director Circle Existence Fallacy in Hyperbolas:**
   * For $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, perpendicular tangents exist **only if $a \ge b$**.
   * If $b > a$, the director circle radius squared $(a^2 - b^2)$ is negative, meaning NO two perpendicular tangents can ever be drawn to the hyperbola!