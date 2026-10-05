Mathematics Revision Context: Chapter 63 — Circles & Concyclic Geometry


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Circle/`, `Circle_PC_US935zN.pdf`, and `Circle_Hints_and_solutions_nRZaRKZ.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Coordinate Geometry Core — Definitions & Standard Circle Equations (Central Form $(x-h)^2 + (y-k)^2 = r^2$, Origin Center $x^2 + y^2 = r^2$, General Second-Degree Equation $x^2 + y^2 + 2gx + 2fy + c = 0$, Center $(-g, -f)$, Radius $\sqrt{g^2+f^2-c}$, Real vs. Point vs. Imaginary Regimes), Diametric Circle Equation $(x-x_1)(x-x_2) + (y-y_1)(y-y_2) = 0$, Intercepts on Coordinate Axes ($2\sqrt{g^2-c}$ on $x$-axis, $2\sqrt{f^2-c}$ on $y$-axis, Tangency Conditions $g^2=c, f^2=c$), Position of Point & Power of Point ($S_1 = x_1^2+y_1^2+2gx_1+2fy_1+c$, Power $PA \cdot PB = PT^2 = S_1 = d^2 - r^2$, Extremal Distances $|d \pm r|$), Line and Circle Dynamics (Secants, Chords $2\sqrt{r^2-p^2}$, Tangency Invariant $c^2 = r^2(1+m^2)$, Point-Form Tangent $T=0$, Parametric Tangent $x\cos\theta+y\sin\theta=r$), Normal Lines (Universal Center Concurrency $(-g, -f)$), Pair of Tangents from External Point ($SS_1 = T^2$, Tangent Length $L = \sqrt{S_1}$, Inter-Tangent Angle $\tan\theta = \frac{2r\sqrt{S_1}}{S_1 - r^2}$, Triangle Area $\frac{r L^3}{r^2+L^2}$, Cyclic Quadrilateral $PT_1 C T_2$ on Diameter $PC$), Director Circle ($x^2 + y^2 = 2r^2$, Radius $\sqrt{2}r$), Chord with Given Midpoint ($T = S_1$), Pole & Polar Theory, Two-Circle Spatial Configurations (The 5 Regimes based on Distance $d$ vs. $r_1 \pm r_2$, Direct Common Tangents $L_{\text{DCT}} = \sqrt{d^2-(r_1-r_2)^2}$, Transverse Common Tangents $L_{\text{TCT}} = \sqrt{d^2-(r_1+r_2)^2}$, Centers of Similitude $T_e, T_i$), Orthogonality of Circles ($d^2 = r_1^2 + r_2^2 \iff 2(g_1 g_2 + f_1 f_2) = c_1 + c_2$), Radical Axis ($S_1 - S_2 = 0$, Orthogonal Center-Line Projection, Equal Tangent Invariance, Common Chords & Common Tangents), Radical Center of Three Circles ($S_1 = S_2 = S_3$), Coaxial Families of Circles ($S_1 + \lambda S_2 = 0$, $S + \lambda L = 0$, Fixed Two-Point Chord Family, Point-Circle Tangent Family), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Standard Equations of a Circle & Structural Classifications


### 1.1 Central & General Forms


A circle is mathematically defined as the planar locus of a point whose distance from a fixed point (center) is constant (radius).


1. **Central Form (Center $(h, k)$, Radius $r$):**
   $$\mathbf{(x - h)^2 + (y - k)^2 = r^2}$$
   * If the center is at the Origin $(0, 0)$:
     $$\mathbf{x^2 + y^2 = r^2}$$


2. **General Second-Degree Equation of a Circle:**
   Expanding $(x - h)^2 + (y - k)^2 = r^2$ gives $x^2 + y^2 - 2hx - 2ky + (h^2 + k^2 - r^2) = 0$.
   Setting $-h = g$, $-k = f$, and $c = h^2 + k^2 - r^2$:


   $$\mathbf{x^2 + y^2 + 2gx + 2fy + c = 0}$$


   * **Center Coordinates:**
     $$\mathbf{C = (-g, -f) = \left( -\frac{1}{2}(\text{coeff of } x), \; -\frac{1}{2}(\text{coeff of } y) \right)}$$
   * **Radius Formula:**
     $$\mathbf{r = \sqrt{g^2 + f^2 - c}}$$


3. **Classification of the General Equation:**
   * **Real Circle ($g^2 + f^2 - c > 0$):** Represents a genuine physical circle with real radius.
   * **Point Circle ($g^2 + f^2 - c = 0$):** Radius $r = 0$; represents a single isolated point $(-g, -f)$.
   * **Imaginary / Virtual Circle ($g^2 + f^2 - c < 0$):** Radius is imaginary, though center $(-g, -f)$ is real. No real points satisfy the equation.


**General Second-Degree Identification Criterion:**
The general equation $Ax^2 + 2Hxy + By^2 + 2Gx + 2Fy + C = 0$ represents a circle if and only if:
1. $\mathbf{A = B \neq 0}$ (Coefficients of $x^2$ and $y^2$ are identical and non-zero).
2. $\mathbf{H = 0}$ (The cross-product term $xy$ is completely absent).
3. $\mathbf{G^2 + F^2 - AC \ge 0}$ (Condition for real or point circle).


---


### 1.2 Diametric Form of a Circle


The equation of a circle described on the line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ as its diameter:


Since the angle subtended by a diameter at any point $P(x, y)$ on the circumference is a right angle ($90^\circ$):


$$\text{Slope}(PA) \times \text{Slope}(PB) = -1 \implies \left(\frac{y - y_1}{x - x_1}\right)\left(\frac{y - y_2}{x - x_2}\right) = -1$$


$$\mathbf{(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0}$$


* **Geometric Invariant:** This represents the **circle of minimum radius** passing through two given points $A(x_1, y_1)$ and $B(x_2, y_2)$.
* **Center:** $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$.
* **Radius:** $r = \frac{1}{2}\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.


---


### 1.3 Parametric Representation


For a circle with center $(h, k)$ and radius $r$:


$$\mathbf{x = h + r \cos\theta, \quad y = k + r \sin\theta \quad (\theta \in [0, 2\pi))}$$


* For $x^2 + y^2 = r^2$:
  $$\mathbf{x = r \cos\theta, \quad y = r \sin\theta}$$
* Here $\theta$ is the **parametric angle** (or eccentric angle) measured counterclockwise from the positive horizontal axis passing through the center.


---


## 2. Intercepts Cut on Coordinate Axes


For the general circle $x^2 + y^2 + 2gx + 2fy + c = 0$:


1. **Intercept on $x$-axis ($y = 0$):**
   Setting $y = 0$ yields $x^2 + 2gx + c = 0$. Let roots be $x_1, x_2$:
   $$\text{Length of } x\text{-intercept} = |x_1 - x_2| = \sqrt{(x_1 + x_2)^2 - 4x_1 x_2} = \sqrt{4g^2 - 4c}$$
   $$\mathbf{\text{Intercept on } x\text{-axis} = 2\sqrt{g^2 - c}}$$


   * If $g^2 > c$: Cuts $x$-axis at two real distinct points.
   * If $g^2 = c$: Touches $x$-axis tangentially at $(-g, 0)$.
   * If $g^2 < c$: Lies completely off the $x$-axis (does not intersect).


2. **Intercept on $y$-axis ($x = 0$):**
   Setting $x = 0$ yields $y^2 + 2fy + c = 0$:
   $$\mathbf{\text{Intercept on } y\text{-axis} = 2\sqrt{f^2 - c}}$$


   * If $f^2 > c$: Cuts $y$-axis at two distinct points.
   * If $f^2 = c$: Touches $y$-axis tangentially at $(0, -f)$.
   * If $f^2 < c$: Lies completely off the $y$-axis.


3. **Circles Touching Coordinate Axes:**
   * **Touches $x$-axis only:** Radius $r = |k| = |f| \implies g^2 = c$.
   * **Touches $y$-axis only:** Radius $r = |h| = |g| \implies f^2 = c$.
   * **Touches BOTH axes:** $r = |g| = |f| = \sqrt{c} \implies g^2 = f^2 = c$.
     * In 1st Quadrant: $(x - r)^2 + (y - r)^2 = r^2$.


---


## 3. Position of a Point & Power of a Point


![Circle Tangents Director and Power Geometry](/media/circle_tangents_director_and_power_geometry.webp)
*Description: Two-panel circular geometry graphic: (Panel A) Pair of tangents $PT_1, PT_2$, chord of contact $T_1T_2$, cyclic quadrilateral $PT_1 C T_2$ described on diameter $PC$, and concentric Director Circle $x^2 + y^2 = 2r^2$; (Panel B) Geometric proof of the Power of a Point theorem illustrating $PA \cdot PB = PT^2 = S_1 = d^2 - r^2$ for secants and tangents.*


### 3.1 Point Position Relative to a Circle


Let $S(x, y) \equiv x^2 + y^2 + 2gx + 2fy + c = 0$ be a circle with center $C(-g, -f)$ and radius $r$.
For any point $P(x_1, y_1)$, define:


$$\mathbf{S_1 \equiv x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}$$


Let $d = CP = \sqrt{(x_1 + g)^2 + (y_1 + f)^2}$ be the distance from $P$ to the center:


1. **$S_1 > 0 \iff d > r$:** Point $P$ lies strictly **outside** the circle.
2. **$S_1 = 0 \iff d = r$:** Point $P$ lies strictly **on the circumference** of the circle.
3. **$S_1 < 0 \iff d < r$:** Point $P$ lies strictly **inside** the circle.


---


### 3.2 Power of a Point Invariant


**Theorem:**
If a line passing through a point $P(x_1, y_1)$ intersects the circle at points $A$ and $B$, then the product $PA \cdot PB$ is constant and independent of the direction of the line:


$$\mathbf{\text{Power of Point } P = PA \cdot PB = d^2 - r^2 = S_1}$$


* If $P$ is **outside** the circle ($S_1 > 0$): The power equals the **square of the length of the tangent** $PT$:
  $$\mathbf{\text{Power} = PT^2 = S_1 = L^2}$$
* If $P$ is **inside** the circle ($S_1 < 0$): The power is negative ($d^2 - r^2 < 0$), with magnitude equal to the product of chord segments.
* If $P$ is **on** the circle ($S_1 = 0$): The power is zero.


**Maximum & Minimum Distance from a Point to a Circle:**
* **Minimum Distance:** $\mathbf{d_{\min} = |d - r| = |CP - r|}$
* **Maximum Distance:** $\mathbf{d_{\max} = d + r = CP + r}$


---


## 4. Line and Circle: Secants, Chords & Tangents


### 4.1 Relative Position of a Line and a Circle


Let $p$ be the perpendicular distance from the center $C(-g, -f)$ of the circle to the straight line $L \equiv ax + by + c = 0$:


$$p = \frac{|-ag - bf + c|}{\sqrt{a^2 + b^2}}$$


1. **$p < r$ (Secant Line):** The line intersects the circle at two distinct real points, forming a chord of length:
   $$\mathbf{\text{Chord Length} = 2\sqrt{r^2 - p^2}}$$
2. **$p = r$ (Tangent Line):** The line touches the circle at exactly one point of contact.
3. **$p > r$ (Non-Intersecting):** The line does not meet the circle in the real plane.


---


### 4.2 Condition of Tangency & Tangent Equations


1. **Slope Form of Tangent ($y = mx + c$ to $x^2 + y^2 = r^2$):**
   The perpendicular distance from origin $(0, 0)$ must equal $r$:
   $$p = \frac{|c|}{\sqrt{1 + m^2}} = r \implies \mathbf{c^2 = r^2(1 + m^2) \iff c = \pm r\sqrt{1 + m^2}}$$


   $$\mathbf{y = mx \pm r\sqrt{1 + m^2}}$$


   * **Points of Contact:**
     $$\mathbf{\left( \mp \frac{mr}{\sqrt{1 + m^2}}, \; \pm \frac{r}{\sqrt{1 + m^2}} \right)}$$


2. **Point Form of Tangent ($T = 0$ at $(x_1, y_1)$ on the Circle):**
   For the general circle $x^2 + y^2 + 2gx + 2fy + c = 0$:
   $$\mathbf{T \equiv xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0}$$
   * For $x^2 + y^2 = r^2$:
     $$\mathbf{xx_1 + yy_1 = r^2}$$


3. **Parametric Form of Tangent at Angle $\theta$:**
   Substitute $x_1 = r\cos\theta, y_1 = r\sin\theta$ into $xx_1 + yy_1 = r^2$:
   $$\mathbf{x\cos\theta + y\sin\theta = r}$$


---


### 4.3 Normal to a Circle


**Universal Geometric Property:**
Since the radius is always perpendicular to the tangent at the point of contact, **EVERY normal to a circle must pass through the circle's center $(-g, -f)$!**


1. **Normal at $(x_1, y_1)$ on $x^2 + y^2 = r^2$:**
   The line connects $(0, 0)$ and $(x_1, y_1)$:
   $$\mathbf{y = \left(\frac{y_1}{x_1}\right)x \iff xy_1 - yx_1 = 0}$$


2. **Normal at $(x_1, y_1)$ on General Circle:**
   The line passes through $(x_1, y_1)$ and $(-g, -f)$:
   $$\mathbf{\frac{x - x_1}{x_1 + g} = \frac{y - y_1}{y_1 + f} \iff (y_1 + f)(x - x_1) - (x_1 + g)(y - y_1) = 0}$$


---


## 5. Pair of Tangents, Chord of Contact & Director Circle


### 5.1 Pair of Tangents from an External Point ($SS_1 = T^2$)


From an external point $P(x_1, y_1)$ ($S_1 > 0$), two tangents $PT_1$ and $PT_2$ can be drawn to the circle:


$$\mathbf{S \cdot S_1 = T^2}$$


where:
* $S = x^2 + y^2 + 2gx + 2fy + c$
* $S_1 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$
* $T = xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c$


**Geometric Metrics of the Tangent System:**
1. **Length of Tangent ($L$):**
   $$\mathbf{L = PT_1 = PT_2 = \sqrt{S_1}}$$
2. **Angle $\theta$ Between the Pair of Tangents:**
   In right triangle $PT_1 C$:
   $$\tan\left(\frac{\theta}{2}\right) = \frac{r}{L} = \frac{r}{\sqrt{S_1}}$$
   $$\mathbf{\tan\theta = \frac{2\tan(\theta/2)}{1 - \tan^2(\theta/2)} = \frac{2r\sqrt{S_1}}{S_1 - r^2}}$$
3. **Area of Triangle Formed by Tangents and Chord of Contact ($\Delta PT_1 T_2$):**
   $$\mathbf{\text{Area}(\Delta PT_1 T_2) = \frac{r \cdot S_1^{3/2}}{S_1 + r^2} = \frac{r L^3}{r^2 + L^2}}$$
4. **Area of Quadrilateral $PT_1 C T_2$:**
   $$\mathbf{\text{Area} = 2 \times \text{Area}(\Delta PT_1 C) = 2 \times \left(\frac{1}{2} r L\right) = r L = r\sqrt{S_1}}$$
5. **Circumcircle of $\Delta PT_1 T_2$ (Concyclic Quadrilateral):**
   Since $\angle PT_1 C = \angle PT_2 C = 90^\circ$, quadrilateral $PT_1 C T_2$ is **cyclic** and its circumcircle has **$PC$ as diameter**!
   $$\mathbf{(x - x_1)(x + g) + (y - y_1)(y + f) = 0}$$


---


### 5.2 The Director Circle


The **Director Circle** is the locus of the point of intersection of two mutually perpendicular tangents ($\theta = 90^\circ$):


$$\theta = 90^\circ \implies \tan(\theta/2) = \tan 45^\circ = 1 \implies \frac{r}{\sqrt{S_1}} = 1 \implies \mathbf{S_1 = r^2}$$


For $x^2 + y^2 = r^2$:
$$x^2 + y^2 - r^2 = r^2 \implies \mathbf{x^2 + y^2 = 2r^2}$$


* **Geometric Invariants:**
  1. The Director Circle is **strictly concentric** with the given circle (shares center $(-g, -f)$).
  2. The radius of the Director Circle is **$\sqrt{2} \times r$** ($\sqrt{2}$ times the original radius).


---


### 5.3 Chord of Contact ($T = 0$) & Chord with Given Midpoint ($T = S_1$)


1. **Chord of Contact:**
   The straight line joining the contact points $T_1$ and $T_2$ of tangents drawn from an external point $P(x_1, y_1)$:
   $$\mathbf{T = 0 \iff xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0}$$
   * **Length of Chord of Contact:**
     $$\mathbf{T_1 T_2 = \frac{2r L}{\sqrt{r^2 + L^2}} = \frac{2r\sqrt{S_1}}{\sqrt{r^2 + S_1}}}$$


2. **Chord with Given Midpoint $M(x_1, y_1)$ ($S_1 < 0$):**
   If $M(x_1, y_1)$ is the known midpoint of an internal chord:
   $$\mathbf{T = S_1}$$
   $$xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c$$


---


## 6. Relative Positions of Two Circles & Common Tangents


![Two Circles Common Tangents and Centers of Similitude](/media/two_circles_common_tangents_and_centers_of_similitude.webp)
*Description: Two-panel interaction reference: (Panel A) Complete geometry of 4 common tangents for two separate circles detailing Direct Common Tangents (DCT) intersecting at the External Center of Similitude $T_e$ and Transverse Common Tangents (TCT) intersecting at the Internal Center of Similitude $T_i$; (Panel B) Classification table and diagrams of the 5 spatial configurations based on center distance $d$ relative to $r_1 \pm r_2$.*


Let two circles $S_1$ and $S_2$ have centers $C_1, C_2$, radii $r_1, r_2$, and center distance $d = C_1 C_2$.


### 6.1 The 5 Spatial Intersection Regimes


| Spatial Relation | Distance Metric Condition | Total Common Tangents | Types of Tangents |
| :--- | :--- | :---: | :--- |
| **1. Completely Separate (Disjoint)** | $\mathbf{d > r_1 + r_2}$ | **4** | 2 Direct Common Tangents (DCT) + 2 Transverse Common Tangents (TCT) |
| **2. Touching Externally** | $\mathbf{d = r_1 + r_2}$ | **3** | 2 Direct Common Tangents + 1 Common Transverse Tangent at contact point |
| **3. Intersecting at Two Points** | $\mathbf{|r_1 - r_2| < d < r_1 + r_2}$ | **2** | 2 Direct Common Tangents only |
| **4. Touching Internally** | $\mathbf{d = |r_1 - r_2|}$ | **1** | 1 Common Direct Tangent at contact point |
| **5. One Inside Another (No Contact)** | $\mathbf{d < |r_1 - r_2|}$ | **0** | No common tangents exist |


---


### 6.2 Lengths of Common Tangents


1. **Direct Common Tangents (DCT):**
   Lines where both circles lie on the same side:
   $$\mathbf{L_{\text{DCT}} = \sqrt{d^2 - (r_1 - r_2)^2}}$$


2. **Transverse Common Tangents (TCT):**
   Lines where the two circles lie on opposite sides:
   $$\mathbf{L_{\text{TCT}} = \sqrt{d^2 - (r_1 + r_2)^2}}$$


---


### 6.3 Centers of Similitude


1. **External Center of Similitude ($T_e$):**
   The two Direct Common Tangents intersect at $T_e$, which divides the segment joining centers $C_1$ and $C_2$ **externally in the ratio of their radii $r_1 : r_2$**:
   $$\mathbf{T_e = \left( \frac{r_1 x_2 - r_2 x_1}{r_1 - r_2}, \; \frac{r_1 y_2 - r_2 y_1}{r_1 - r_2} \right)}$$


2. **Internal Center of Similitude ($T_i$):**
   The two Transverse Common Tangents intersect at $T_i$, which divides the segment joining centers $C_1$ and $C_2$ **internally in the ratio of their radii $r_1 : r_2$**:
   $$\mathbf{T_i = \left( \frac{r_1 x_2 + r_2 x_1}{r_1 + r_2}, \; \frac{r_1 y_2 + r_2 y_1}{r_1 + r_2} \right)}$$


---


## 7. Orthogonality of Two Circles


![Orthogonal Circles Radical Axis and Family](/media/orthogonal_circles_radical_axis_and_family.webp)
*Description: Two-panel advanced circle geometry: (Panel A) Orthogonal circles intersection geometry showing $C_1 P \perp C_2 P$, right-angled triangle $C_1 P C_2$ with $d^2 = r_1^2 + r_2^2$, and algebraic condition $2(g_1 g_2 + f_1 f_2) = c_1 + c_2$; (Panel B) Radical axis $S_1 - S_2 = 0$ perpendicular to center line $C_1 C_2$, demonstrating equality of tangent lengths $PT_1 = PT_2$.*


### 7.1 Geometric Definition & Right-Angled Invariant


Two circles are said to intersect **orthogonally** if the angle between their tangents at each of their two intersection points is a right angle ($90^\circ$):


* Since the tangent to one circle at intersection $P$ is perpendicular to its own radius, it must lie **along the radius of the second circle**!
* Thus, the radii $C_1 P$ and $C_2 P$ are **perpendicular**: $\mathbf{C_1 P \perp C_2 P}$.
* Triangle $\Delta C_1 P C_2$ is a **right-angled triangle** at $P$, with hypotenuse $C_1 C_2 = d$:
  $$\mathbf{C_1 C_2^2 = r_1^2 + r_2^2 \iff d^2 = r_1^2 + r_2^2}$$


---


### 7.2 The Algebraic Orthogonality Condition


Let the two circles be:
$$S_1 \equiv x^2 + y^2 + 2g_1 x + 2f_1 y + c_1 = 0 \implies C_1(-g_1, -f_1), \; r_1^2 = g_1^2 + f_1^2 - c_1$$
$$S_2 \equiv x^2 + y^2 + 2g_2 x + 2f_2 y + c_2 = 0 \implies C_2(-g_2, -f_2), \; r_2^2 = g_2^2 + f_2^2 - c_2$$


Expanding $d^2 = (g_1 - g_2)^2 + (f_1 - f_2)^2 = r_1^2 + r_2^2$:
$$g_1^2 + g_2^2 - 2g_1 g_2 + f_1^2 + f_2^2 - 2f_1 f_2 = (g_1^2 + f_1^2 - c_1) + (g_2^2 + f_2^2 - c_2)$$
$$-2g_1 g_2 - 2f_1 f_2 = -c_1 - c_2$$


$$\mathbf{2(g_1 g_2 + f_1 f_2) = c_1 + c_2}$$


* **Crucial Precondition:** Both equations must be in **standard monic form** (coefficient of $x^2$ and $y^2$ equal to $1$) before applying this formula!


---


## 8. Radical Axis & Radical Center


### 8.1 The Radical Axis ($S_1 - S_2 = 0$)


The **Radical Axis** of two non-concentric circles is the planar locus of a point that moves such that the **powers of the point with respect to both circles are equal**:


$$S_1(x, y) = S_2(x, y)$$


Subtracting the two general equations:


$$\mathbf{S_1 - S_2 = 0 \iff 2(g_1 - g_2)x + 2(f_1 - f_2)y + (c_1 - c_2) = 0}$$


* Since the quadratic terms $x^2 + y^2$ cancel identically, the radical axis is **always a straight line**!


---


### 8.2 Fundamental Properties of the Radical Axis


1. **Perpendicular to Line of Centers:**
   Slope of line joining centers $C_1(-g_1, -f_1)$ and $C_2(-g_2, -f_2)$ is $m_C = \frac{f_1 - f_2}{g_1 - g_2}$.
   Slope of radical axis is $m_{\text{rad}} = -\frac{g_1 - g_2}{f_1 - f_2}$.
   $$m_C \times m_{\text{rad}} = -1 \implies \mathbf{L_{\text{radical}} \perp C_1 C_2}$$
2. **Common Chord & Common Tangent Roles:**
   * If two circles **intersect** in two points, their radical axis is their **Common Chord**.
   * If two circles **touch** each other, their radical axis is their **Common Tangent** at the point of contact.
3. **Equal Tangent Lengths:**
   From any point $P$ on the radical axis outside both circles, the lengths of tangents drawn to both circles are identically equal:
   $$\mathbf{PT_1 = PT_2 = \sqrt{S_1} = \sqrt{S_2}}$$
4. **Bisection of Common Tangents:**
   The radical axis **bisects all common tangents** (both direct and transverse) drawn to the two circles.
5. **Midpoint Condition:**
   The radical axis passes through the midpoint of $C_1 C_2$ if and only if the radii are equal ($r_1 = r_2$).


---


### 8.3 The Radical Center


For three circles $S_1 = 0, S_2 = 0, S_3 = 0$ whose centers are not collinear:
* The three pairwise radical axes:
  $$S_1 - S_2 = 0, \quad S_2 - S_3 = 0, \quad S_3 - S_1 = 0$$
  are **concurrent** at a unique point called the **Radical Center**.
* **Coordinates:** Obtained by solving the linear system $S_1 = S_2 = S_3$.
* **Property:** The lengths of tangents drawn from the radical center to all three circles are equal.
* A circle centered at the radical center with radius equal to this common tangent length is orthogonal to all three circles!


---


## 9. Family of Circles


1. **Family Passing Through Intersections of Two Circles:**
   $$\mathbf{S_1 + \lambda S_2 = 0 \quad (\lambda \neq -1) \quad \text{or} \quad S_1 + \lambda(S_1 - S_2) = 0}$$
   *(Using $S_1 + \lambda L = 0$ where $L = S_1 - S_2 = 0$ is the common chord avoids $\lambda = -1$).*


2. **Family Passing Through Intersections of Circle and Line:**
   $$\mathbf{S + \lambda L = 0}$$


3. **Family Passing Through Two Given Points $A(x_1, y_1)$ and $B(x_2, y_2)$:**
   Described by the diametric circle on $AB$ plus the line $AB$:
   $$\mathbf{(x - x_1)(x - x_2) + (y - y_1)(y - y_2) + \lambda \begin{vmatrix} x & y & 1 \\ x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \end{vmatrix} = 0}$$


4. **Family of Circles Touching Line $L = 0$ at a Fixed Point $(x_1, y_1)$:**
   $$\mathbf{(x - x_1)^2 + (y - y_1)^2 + \lambda L = 0}$$


---


## 10. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Non-Monic Orthogonality Trap:**
   * Before applying $2(g_1 g_2 + f_1 f_2) = c_1 + c_2$, **ensure the coefficient of $x^2$ and $y^2$ is exactly $1$** in both circle equations!
   * If given $2x^2 + 2y^2 + \dots = 0$, you must divide through by $2$ first; otherwise, $g, f, c$ are distorted by factors of $2$.


2. **The "Touches Both Axes" Four-Quadrant Trap:**
   * A circle touching both axes has equation $(x \pm r)^2 + (y \pm r)^2 = r^2$.
   * Never assume the circle is in the 1st quadrant unless explicitly specified. The signs depend on the quadrant containing the center.


3. **Radical Axis Non-Intersection Fallacy:**
   * Students often mistakenly believe that non-intersecting circles do not have a radical axis!
   * The equation $S_1 - S_2 = 0$ exists and is valid for **any two non-concentric circles**, whether they intersect, touch, or are completely separate.


4. **Chord of Contact Midpoint Confusion:**
   * Chord of contact from an external point $P(x_1, y_1)$ is $\mathbf{T = 0}$.
   * Chord with a given internal midpoint $M(x_1, y_1)$ is $\mathbf{T = S_1}$.
   * Confusing these two is one of the most common point-loss mistakes in JEE Advanced coordinate geometry.