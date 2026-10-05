Mathematics Revision Context: Chapter 62 — Straight Lines & 2D Coordinate Geometry


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Straight Line/`, `Straight_Line_Theory__Exercise.pdf`, and `Straight_Line_Hints_and_Solutions_24QbLJd.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Coordinate Geometry Core — Cartesian Plane Foundations, Distance Formula, Section Formula (Internal, External & Harmonic Conjugates $\frac{2}{AB} = \frac{1}{AP} + \frac{1}{AQ}$), Triangle Centers Architecture (Centroid $G$, Incenter $I$, Excenters $I_1, I_2, I_3$, Orthocenter $H$, Circumcenter $O$, Euler Line Theorem $H-G-O$ with Ratio $2:1$), Shoelace Area Formula & Polygon Determinants, Collinearity Conditions, Slope/Inclination Mechanics, Standard Straight Line Forms (Point-Slope, Two-Point, Slope-Intercept, Intercept $\frac{x}{a}+\frac{y}{b}=1$, Normal Form $x\cos\alpha+y\sin\alpha=p$, Parametric/Distance Form $\frac{x-x_1}{\cos\theta}=\frac{y-y_1}{\sin\theta}=r$), Angular Relationships & Orthogonal/Parallel Slopes, Point Position Relative to Line ($L(x, y)$ Sign Analysis, Segment Division Ratio $-\frac{L_1}{L_2}$), Perpendicular Distance ($p = \frac{|ax_1+by_1+c|}{\sqrt{a^2+b^2}}$), Distance Between Parallel Lines ($d = \frac{|c_1-c_2|}{\sqrt{a^2+b^2}}$), Area of Parallelogram $\frac{|(c_1-d_1)(c_2-d_2)|}{|a_1 b_2 - a_2 b_1|}$, Foot of Perpendicular Vector Formulation $\frac{h-x_1}{a}=\frac{k-y_1}{b}=-\frac{L(x_1, y_1)}{a^2+b^2}$, Optical Reflection / Line Mirror Image $\frac{h'-x_1}{a}=\frac{k'-y_1}{b}=-2\frac{L(x_1, y_1)}{a^2+b^2}$, Family of Concurrent Lines ($L_1 + \lambda L_2 = 0$), Concurrency Determinant Condition, Angular Bisector Systems (Acute vs. Obtuse Discrimination via $a_1 a_2 + b_1 b_2$, Origin-Containing Bisector Invariant), Pair of Straight Lines through Origin ($ax^2 + 2hxy + by^2 = 0$, Angle $\tan\theta = \frac{2\sqrt{h^2-ab}}{|a+b|}$, Orthogonality $a+b=0$, Orthogonal Bisector Pair $\frac{x^2-y^2}{a-b}=\frac{xy}{h}$), General Second-Degree Equation Factorization Condition ($\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$), Homogenization Technique for Chord Intersection Rays, and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Foundations of Cartesian Coordinates & Point Analytics


### 1.1 Distance & Section Formulas


In the standard two-dimensional rectangular Cartesian coordinate plane:


1. **Distance Formula:**
   The Euclidean distance between two points $A(x_1, y_1)$ and $B(x_2, y_2)$ is:
   $$\mathbf{d(A, B) = AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}}$$


2. **Section Formula (Ratio $m : n$):**
   Let $P(x, y)$ divide the directed line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ in the ratio $m : n$:
   * **Internal Division ($m/n > 0$):**
     $$\mathbf{P(x, y) = \left( \frac{m x_2 + n x_1}{m + n}, \; \frac{m y_2 + n y_1}{m + n} \right)}$$
   * **External Division ($m/n < 0$):**
     $$\mathbf{P(x, y) = \left( \frac{m x_2 - n x_1}{m - n}, \; \frac{m y_2 - n y_1}{m - n} \right)}$$
   * **Midpoint Formula ($m = n = 1$):**
     $$\mathbf{M = \left( \frac{x_1 + x_2}{2}, \; \frac{y_1 + y_2}{2} \right)}$$


3. **Harmonic Conjugates:**
   If point $P$ divides segment $AB$ internally in the ratio $m : n$ and point $Q$ divides $AB$ externally in the exact same ratio $m : n$, then $P$ and $Q$ are **harmonic conjugates** of each other with respect to $AB$:
   $$\frac{AP}{PB} = \frac{AQ}{QB} = \frac{m}{n}$$
   $$\mathbf{\frac{2}{AB} = \frac{1}{AP} + \frac{1}{AQ} \iff AP, \; AB, \; AQ \text{ form a Harmonic Progression (H.P.)}}$$


---


### 1.2 Classical Triangle Centers Architecture


For a triangle with vertices $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$ and opposite side lengths $a = BC, b = CA, c = AB$:


```
                                  Euler Line
             Orthocenter (H) ─────── 2 ─────── Centroid (G) ─── 1 ─── Circumcenter (O)
```


1. **Centroid ($G$):** Point of concurrency of the three medians. It divides each median in the ratio $2 : 1$:
   $$\mathbf{G = \left( \frac{x_1 + x_2 + x_3}{3}, \; \frac{y_1 + y_2 + y_3}{3} \right)}$$
   * The centroid always lies strictly inside the triangle for all triangles.


2. **Incenter ($I$):** Center of the inscribed circle; point of concurrency of internal angle bisectors:
   $$\mathbf{I = \left( \frac{a x_1 + b x_2 + c x_3}{a + b + c}, \; \frac{a y_1 + b y_2 + c y_3}{a + b + c} \right)}$$
   * Always lies strictly inside the triangle.


3. **Excenters ($I_1, I_2, I_3$):** Centers of escribed circles opposite to vertices $A, B, C$:
   $$\mathbf{I_1 = \left( \frac{-a x_1 + b x_2 + c x_3}{-a + b + c}, \; \frac{-a y_1 + b y_2 + c y_3}{-a + b + c} \right)}$$


4. **Circumcenter ($O$):** Concurrency of perpendicular side bisectors (equidistant from $A, B, C$).
5. **Orthocenter ($H$):** Concurrency of the three altitudes.
6. **The Euler Line Theorem:**
   In any non-equilateral triangle, the **Orthocenter ($H$), Centroid ($G$), and Circumcenter ($O$) are strictly collinear**, and the centroid $G$ partitions the segment $HO$ in the fixed ratio:
   $$\mathbf{H - G - O \quad \text{with} \quad \frac{HG}{GO} = \frac{2}{1}}$$
   *(In an equilateral triangle, $H, G, I, O$ all coincide at a single point).*


---


### 1.3 Area of Triangle & Polygon (Shoelace Determinant)


The signed area of a triangle formed by vertices $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$ is:


$$\mathbf{\Delta = \frac{1}{2} \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} = \frac{1}{2} |x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|}$$


* **Collinearity Condition:**
  Three points $A, B, C$ are collinear if and only if:
  $$\mathbf{\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} = 0 \iff \text{Slope}(AB) = \text{Slope}(BC)}$$


* **Shoelace Formula for an $n$-Sided Polygon:**
  For vertices $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ traversed counterclockwise:
  $$\mathbf{\text{Area} = \frac{1}{2} \left| (x_1 y_2 + x_2 y_3 + \dots + x_n y_1) - (y_1 x_2 + y_2 x_3 + \dots + y_n x_1) \right|}$$


---


## 2. Standard Forms of Straight Lines & Parametric Systems


![Straight Line Standard Forms and Distance Geometry](/media/straight_line_standard_forms_and_distance_geometry.webp)
*Description: Two-panel analytical geometry graphic: (Panel A) Architectural breakdown of straight line standard forms on coordinate axes showing Intercept form ($x/a + y/b = 1$) with shaded axis triangle area $ rac{1}{2}|ab|$, Normal form ($x\cos lpha + y\sin lpha = p$) with origin perpendicular $p$, and Parametric point $P(x_1 + r\cos        heta, y_1 + r\sin        heta)$; (Panel B) Distance geometry displaying perpendicular distance from an external point to a line, and constant separation distance $d =  rac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$ between parallel lines.*


### 2.1 Slope (Gradient) of a Line


The slope $m$ of a straight line is the tangent of its angle of inclination $\theta$ with the positive direction of the $x$-axis:


$$\mathbf{m = \tan\theta \quad (\theta \in [0, \pi) \setminus \{\pi/2\})}$$


* For two points $(x_1, y_1)$ and $(x_2, y_2)$:
  $$\mathbf{m = \frac{y_2 - y_1}{x_2 - x_1}}$$
* Vertical lines ($\theta = \pi/2 = 90^\circ$) have undefined slope ($m \to \infty$). Horizontal lines have $m = 0$.


---


### 2.2 Catalog of Standard Line Forms


| Form Name | Algebraic Equation | Defining Parameters |
| :--- | :--- | :--- |
| **Point-Slope Form** | $y - y_1 = m(x - x_1)$ | Passes through $(x_1, y_1)$ with slope $m$ |
| **Two-Point Form** | $y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$ | Passes through $(x_1, y_1)$ and $(x_2, y_2)$ |
| **Slope-Intercept Form**| $y = mx + c$ | Slope $m$, $y$-intercept $c$ at $(0, c)$ |
| **Intercept Form** | $\frac{x}{a} + \frac{y}{b} = 1$ | $x$-intercept $a$, $y$-intercept $b$; Area $\Delta = \frac{1}{2}|ab|$ |
| **Normal (Perpendicular) Form** | $x\cos\alpha + y\sin\alpha = p$ | $p \ge 0$ (perpendicular distance from origin), $\alpha \in [0, 2\pi)$ |
| **General Form** | $Ax + By + C = 0$ | Slope $m = -A/B$, Intercepts: $-C/A, -C/B$ |
| **Parametric / Distance Form** | $\frac{x - x_1}{\cos\theta} = \frac{y - y_1}{\sin\theta} = r$ | Base point $(x_1, y_1)$, inclination $\theta$, signed distance $r$ |


---


### 2.3 The Parametric (Distance) Form


The parametric form is the most versatile tool for problems involving distances measured along a specific direction:


$$\mathbf{x = x_1 + r \cos\theta, \quad y = y_1 + r \sin\theta}$$


* **Directional Sign Convention of $r$:**
  * If $r > 0$: The point lies upward/forward along the line from $(x_1, y_1)$ in the direction of inclination $\theta$.
  * If $r < 0$: The point lies downward/backward along the line from $(x_1, y_1)$.
* **JEE Application:** To find the distance from a fixed point $P(x_1, y_1)$ to an intersection with a general curve $f(x, y) = 0$ along a line of inclination $\theta$, substitute $x = x_1 + r\cos\theta$ and $y = y_1 + r\sin\theta$ into the curve equation and solve the resulting quadratic in $r$. The roots $r_1, r_2$ give the exact signed distances $PA$ and $PB$!


---


## 3. Angle Between Lines & Parallel/Perpendicular Criteria


### 3.1 Angle Between Two Lines


Let two lines have slopes $m_1$ and $m_2$. The acute angle $\theta$ between them is:


$$\mathbf{\tan\theta = \left| \frac{m_1 - m_2}{1 + m_1 m_2} \right|}$$


* **Condition for Parallel Lines ($m_1 = m_2$):**
  For $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$:
  $$\mathbf{\frac{a_1}{a_2} = \frac{b_1}{b_2} \iff a_1 b_2 - a_2 b_1 = 0}$$
  * A line parallel to $ax + by + c = 0$ can always be written as:
    $$\mathbf{ax + by + \lambda = 0}$$


* **Condition for Perpendicular Lines ($m_1 m_2 = -1$):**
  $$\mathbf{a_1 a_2 + b_1 b_2 = 0}$$
  * A line perpendicular to $ax + by + c = 0$ can always be written as:
    $$\mathbf{bx - ay + \lambda = 0}$$


---


## 4. Position of Points & Distance Geometry


### 4.1 Relative Position of Points with Respect to a Line


Let $L(x, y) = ax + by + c = 0$ be a straight line.
For two points $P(x_1, y_1)$ and $Q(x_2, y_2)$:


1. **Same Side of the Line:**
   $$\mathbf{L(x_1, y_1) \cdot L(x_2, y_2) > 0}$$
2. **Opposite Sides of the Line:**
   $$\mathbf{L(x_1, y_1) \cdot L(x_2, y_2) < 0}$$
3. **Point Lies on the Line:**
   $$\mathbf{L(x_1, y_1) = 0}$$


**Ratio in Which a Line Divides a Segment:**
The line $ax + by + c = 0$ divides the segment joining $P(x_1, y_1)$ and $Q(x_2, y_2)$ in the ratio:


$$\mathbf{\frac{m}{n} = -\frac{a x_1 + b y_1 + c}{a x_2 + b y_2 + c} = -\frac{L(x_1, y_1)}{L(x_2, y_2)}}$$


---


### 4.2 Distance Formulas


1. **Perpendicular Distance from Point $(x_1, y_1)$ to $ax + by + c = 0$:**
   $$\mathbf{p = \frac{|a x_1 + b y_1 + c|}{\sqrt{a^2 + b^2}}}$$
   * Perpendicular distance from the Origin $(0, 0)$:
     $$\mathbf{p_{\text{origin}} = \frac{|c|}{\sqrt{a^2 + b^2}}}$$


2. **Distance Between Two Parallel Lines:**
   For $L_1: ax + by + c_1 = 0$ and $L_2: ax + by + c_2 = 0$ (coefficients of $x$ and $y$ made identical):
   $$\mathbf{d = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}}$$


3. **Area of a Parallelogram Formed by Lines:**
   Let the four sides be $a_1 x + b_1 y + c_1 = 0$, $a_1 x + b_1 y + d_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$, $a_2 x + b_2 y + d_2 = 0$:
   $$\mathbf{\text{Area} = \frac{|(c_1 - d_1)(c_2 - d_2)|}{|a_1 b_2 - a_2 b_1|}}$$


---


## 5. Foot of Perpendicular & Optical Reflection (Image of a Point)


![Reflection Foot of Perpendicular and Angle Bisectors](/media/reflection_foot_of_perpendicular_and_angle_bisectors.webp)
*Description: Two-panel transformation and bisector graphic: (Panel A) Optical reflection and foot of perpendicular geometry across line mirror $L: ax + by + c = 0$, showing object point $P(x_1, y_1)$, foot $H(h, k)$ as the midpoint, and virtual image $Q(h', k')$; (Panel B) Intersecting lines $L_1, L_2$ with acute and obtuse angle bisectors $B_1, B_2$, illustrating the sign of $a_1 a_2 + b_1 b_2$ and the origin-containing region.*


### 5.1 Foot of Perpendicular Formula


Let $H(h, k)$ be the foot of the perpendicular dropped from point $P(x_1, y_1)$ onto the line $ax + by + c = 0$:


$$\mathbf{\frac{h - x_1}{a} = \frac{k - y_1}{b} = -\frac{a x_1 + b y_1 + c}{a^2 + b^2}}$$


$$\mathbf{h = x_1 - \frac{a(a x_1 + b y_1 + c)}{a^2 + b^2}, \quad k = y_1 - \frac{b(a x_1 + b y_1 + c)}{a^2 + b^2}}$$


---


### 5.2 Optical Reflection / Mirror Image of a Point


Let $Q(h', k')$ be the mirror image of $P(x_1, y_1)$ across the line mirror $ax + by + c = 0$. Since $H$ is the exact midpoint of $PQ$ ($H = \frac{P + Q}{2}$), the displacement is doubled:


$$\mathbf{\frac{h' - x_1}{a} = \frac{k' - y_1}{b} = -2\frac{a x_1 + b y_1 + c}{a^2 + b^2}}$$


$$\mathbf{h' = x_1 - \frac{2a(a x_1 + b y_1 + c)}{a^2 + b^2}, \quad k' = y_1 - \frac{2b(a x_1 + b y_1 + c)}{a^2 + b^2}}$$


---


## 6. Family of Straight Lines & Concurrency


### 6.1 Family of Lines Passing Through Intersection ($L_1 + \lambda L_2 = 0$)


If $L_1 \equiv a_1 x + b_1 y + c_1 = 0$ and $L_2 \equiv a_2 x + b_2 y + c_2 = 0$ are two intersecting lines, then the linear combination:


$$\mathbf{L_1 + \lambda L_2 = 0 \iff (a_1 x + b_1 y + c_1) + \lambda(a_2 x + b_2 y + c_2) = 0}$$


represents a family of straight lines passing through the fixed point of intersection of $L_1 = 0$ and $L_2 = 0$ for every real scalar $\lambda \in \mathbb{R}$.
*(Note: To include $L_2 = 0$ itself, write the symmetric form $\mu_1 L_1 + \mu_2 L_2 = 0$).*


---


### 6.2 Condition of Concurrency of Three Lines


Three straight lines:
$$L_1 \equiv a_1 x + b_1 y + c_1 = 0$$
$$L_2 \equiv a_2 x + b_2 y + c_2 = 0$$
$$L_3 \equiv a_3 x + b_3 y + c_3 = 0$$


are **concurrent** (pass through a common point) if and only if:


$$\mathbf{\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0}$$


*(Precondition: No two lines are parallel. If two lines are parallel, determinant $= 0$ corresponds to parallel or coincident lines, not concurrency).*


---


## 7. Angle Bisectors of Two Lines


### 7.1 Equations of Angle Bisectors


The angle bisectors are the locus of points equidistant from the two intersecting lines $L_1 \equiv a_1 x + b_1 y + c_1 = 0$ and $L_2 \equiv a_2 x + b_2 y + c_2 = 0$:


$$\mathbf{\frac{a_1 x + b_1 y + c_1}{\sqrt{a_1^2 + b_1^2}} = \pm \frac{a_2 x + b_2 y + c_2}{\sqrt{a_2^2 + b_2^2}}}$$


* The two bisectors are **always mutually perpendicular** ($m_{B_1} \cdot m_{B_2} = -1$).


---


### 7.2 Discrimination of Acute vs. Obtuse Angle Bisectors


**The Standard Normalization Algorithm:**
1. Rewrite both equations such that the constant terms are **strictly positive** ($c_1 > 0$ and $c_2 > 0$). (If negative, multiply the entire equation by $-1$).
2. Compute the scalar quantity:
   $$\mathbf{S = a_1 a_2 + b_1 b_2}$$
3. Apply the discrimination rule:


| Sign of $a_1 a_2 + b_1 b_2$ | The $(+)$ Sign Equation | The $(-)$ Sign Equation |
| :--- | :--- | :--- |
| **$a_1 a_2 + b_1 b_2 > 0$** | **Obtuse Angle Bisector** | **Acute Angle Bisector** |
| **$a_1 a_2 + b_1 b_2 < 0$** | **Acute Angle Bisector** | **Obtuse Angle Bisector** |


* **Origin-Containing Bisector Invariant:**
  When $c_1, c_2 > 0$, the bisector containing the origin $(0, 0)$ is **ALWAYS given by the $(+)$ sign**, regardless of whether it is acute or obtuse!


---


## 8. Pair of Straight Lines & Homogenization Technique


![Pair of Straight Lines and Homogenization Technique](/media/pair_of_straight_lines_and_homogenization_technique.webp)
*Description: Two-panel higher-order geometry graphic: (Panel A) Homogeneous pair of lines $ax^2 + 2hxy + by^2 = 0$ passing through origin with mutually perpendicular bisector axes $ rac{x^2 - y^2}{a - b} =  rac{xy}{h}$; (Panel B) Homogenization technique: Geometric chord $AB$ on a second-degree curve joined to the origin $O$, illustrating the orthogonality condition for subtending a right angle $ ngle AOB = 90^\circ$.*


### 8.1 Homogeneous Equation of Second Degree ($ax^2 + 2hxy + by^2 = 0$)


A homogeneous second-degree equation in $x$ and $y$ always represents a pair of straight lines passing through the origin $(0, 0)$:


$$ax^2 + 2hxy + by^2 = 0 \implies b\left(\frac{y}{x}\right)^2 + 2h\left(\frac{y}{x}\right) + a = 0$$


Let $y = m_1 x$ and $y = m_2 x$ be the two individual lines. By Vieta's formulas:


$$\mathbf{m_1 + m_2 = -\frac{2h}{b}, \quad m_1 m_2 = \frac{a}{b}}$$


1. **Angle $\theta$ Between the Pair of Lines:**
   $$\tan\theta = \left| \frac{m_1 - m_2}{1 + m_1 m_2} \right| = \left| \frac{\sqrt{(m_1 + m_2)^2 - 4m_1 m_2}}{1 + m_1 m_2} \right|$$
   $$\mathbf{\tan\theta = \left| \frac{2\sqrt{h^2 - ab}}{a + b} \right|}$$


2. **Orthogonality Condition:**
   The lines are perpendicular ($\theta = 90^\circ$) if and only if:
   $$\mathbf{a + b = 0 \iff \text{Coefficient of } x^2 + \text{Coefficient of } y^2 = 0}$$


3. **Coincidence Condition:**
   The lines are coincident (real and identical) if and only if:
   $$\mathbf{h^2 - ab = 0}$$
   *(If $h^2 - ab < 0$, the lines are imaginary with real intersection at $(0, 0)$).*


4. **Combined Equation of Angle Bisectors:**
   The pair of angle bisectors of the lines $ax^2 + 2hxy + by^2 = 0$ is given by:
   $$\mathbf{\frac{x^2 - y^2}{a - b} = \frac{xy}{h} \iff h(x^2 - y^2) - (a - b)xy = 0}$$
   * The sum of coefficients of $x^2$ and $y^2$ is $h + (-h) = 0$, confirming that the **two angle bisectors are always perpendicular** to each other!


---


### 8.2 General Second-Degree Equation Representing a Pair of Lines


The general equation of second degree:


$$F(x, y) \equiv ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$$


represents a pair of straight lines if and only if the discriminant determinant vanishes:


$$\mathbf{\Delta = \begin{vmatrix} a & h & g \\ h & b & f \\ g & f & c \end{vmatrix} = abc + 2fgh - af^2 - bg^2 - ch^2 = 0 \quad \text{and} \quad h^2 \ge ab}$$


* **Point of Intersection:**
  The intersection of the two lines is obtained by solving the partial derivatives:
  $$\mathbf{\frac{\partial F}{\partial x} = 2ax + 2hy + 2g = 0 \implies ax + hy + g = 0}$$
  $$\mathbf{\frac{\partial F}{\partial y} = 2hx + 2by + 2f = 0 \implies hx + by + f = 0}$$


---


### 8.3 Homogenization Technique for Chord Intersection Rays


**Use Case:** Finding the combined equation of straight lines joining the origin $O(0, 0)$ to the points of intersection $A$ and $B$ of a second-degree curve $S(x, y) = 0$ and a secant line $L(x, y) = 0$.


**Algorithmic Procedure:**
1. Write the secant line in unity-constant form:
   $$lx + my + n = 0 \implies \mathbf{\frac{lx + my}{-n} = 1}$$
2. Consider the general second-degree curve:
   $$ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0$$
3. Multiply the linear terms by $(1)$ and the constant term by $(1)^2$:
   $$\mathbf{ax^2 + 2hxy + by^2 + (2gx + 2fy)\left(\frac{lx + my}{-n}\right) + c\left(\frac{lx + my}{-n}\right)^2 = 0}$$
4. This resulting equation is strictly **homogeneous of degree 2**, representing the two straight lines $OA$ and $OB$ passing through the origin.
5. **Right Angle Subtended at Origin Condition ($\angle AOB = 90^\circ$):**
   $$\mathbf{\text{Coefficient of } x^2 + \text{Coefficient of } y^2 = 0}$$


---


## 9. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Parametric Distance Direction Sign Trap:**
   * When finding points at distance $r$ along a line of inclination $\theta$, remember there are **two points**: $(x_1 + r\cos\theta, y_1 + r\sin\theta)$ and $(x_1 - r\cos\theta, y_1 - r\sin\theta)$.
   * Ensure $\theta$ is measured counterclockwise from the positive $x$-axis so that $\cos\theta$ and $\sin\theta$ have correct signs.


2. **The Constant Sign Trap in Bisector Calculations:**
   * Never evaluate the sign of $a_1 a_2 + b_1 b_2$ before ensuring $c_1 > 0$ and $c_2 > 0$!
   * Failing to make constants positive reverses the acute/obtuse characterization and origin inclusion.


3. **Concurrency vs. Parallelism Fallacy:**
   * A zero determinant $\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0$ is a **necessary** condition for concurrency, but **not sufficient** on its own:
   * If two or three lines are parallel ($m_1 = m_2$), the determinant is zero even though the lines never intersect!


4. **Homogenization Linear Term Power Trap:**
   * When homogenizing, multiply linear terms $(2gx + 2fy)$ by $(1)^1$ and constant term $c$ by $(1)^2$.
   * Do NOT multiply quadratic terms $ax^2 + 2hxy + by^2$; they are already degree 2.