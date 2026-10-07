# Mathematics Gyaan Sutra: Complete Formula & Theory Revision Compendium


**Source:** [Resonance_Gyaan_Sutra_Mathematics.pdf](https://drive.google.com/file/d/1Tw7D7UhwcbylWE6bxcdKjqGEuYEobStg/view?usp=drivesdk)
**Target:** JEE Main & JEE Advanced Comprehensive Formula Repository
**Format:** Obsidian-Compatible Markdown with LaTeX Validation & Visual Diagrams (`![...](/media/...)`)


---


## Table of Contents
1. [Straight Line](#1-straight-line)
2. [Circle](#2-circle)
3. [Parabola](#3-parabola)
4. [Ellipse](#4-ellipse)
5. [Hyperbola](#5-hyperbola)
6. [Limit of Function](#6-limit-of-function)
7. [Method of Differentiation](#7-method-of-differentiation)
8. [Application of Derivatives](#8-application-of-derivatives)
9. [Indefinite Integration](#9-indefinite-integration)
10. [Definite Integration](#10-definite-integration)
11. [Fundamentals of Mathematics & Trigonometry](#11-fundamentals-of-mathematics--trigonometry)
12. [Quadratic Equations](#12-quadratic-equations)
13. [Sequence & Series](#13-sequence--series)
14. [Binomial Theorem & Multinomial Expansion](#14-binomial-theorem--multinomial-expansion)
15. [Permutation & Combination](#15-permutation--combination)
16. [Probability](#16-probability)
17. [Complex Numbers](#17-complex-numbers)
18. [Vectors](#18-vectors)
19. [Three Dimensional Geometry (3D)](#19-three-dimensional-geometry-3d)
20. [Solution of Triangle](#20-solution-of-triangle)
21. [Inverse Trigonometric Functions](#21-inverse-trigonometric-functions)
22. [Statistics](#22-statistics)
23. [Mathematical Reasoning](#23-mathematical-reasoning)
24. [Sets & Relations](#24-sets--relations)


---


## 1. Straight Line


### 1.1 Distance & Section Formulas
* **Distance Formula:** Between $P(x_1, y_1)$ and $Q(x_2, y_2)$:
  $$d = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$$
* **Section Formula:** Point dividing line segment in ratio $m : n$:
  $$x =  rac{m x_2 \pm n x_1}{m \pm n}, \quad y =  rac{m y_2 \pm n y_1}{m \pm n}$$
  *(Positive sign for internal division, negative for external division).*


### 1.2 Triangle Centers
* **Centroid ($G$):** Intersection of medians (divides median in $2 : 1$):
  $$G \equiv \left( rac{x_1 + x_2 + x_3}{3},  rac{y_1 + y_2 + y_3}{3}
ight)$$
* **Incentre ($I$):** Center of incircle ($a, b, c$ are side lengths opposite to vertices):
  $$I \equiv \left( rac{a x_1 + b x_2 + c x_3}{a + b + c},  rac{a y_1 + b y_2 + c y_3}{a + b + c}
ight)$$
* **Excentre ($I_1$ opposite to vertex $A$):**
  $$I_1 \equiv \left( rac{-a x_1 + b x_2 + c x_3}{-a + b + c},  rac{-a y_1 + b y_2 + c y_3}{-a + b + c}
ight)$$
* **Area of Triangle:**
  $$\Delta =  rac{1}{2} \left| x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) 
ight| =  rac{1}{2} \left| \det  egin{pmatrix} x_1 & y_1 & 1 \ x_2 & y_2 & 1 \ x_3 & y_3 & 1 \end{pmatrix} 
ight|$$


### 1.3 Lines & Relative Geometry
* **Slope Form:** $m =  rac{y_2 - y_1}{x_2 - x_1} =         an        heta$. Angle between lines with slopes $m_1, m_2$:
  $$        an        heta = \left| rac{m_1 - m_2}{1 + m_1 m_2}
ight|$$
  * Parallel: $m_1 = m_2$.
  * Perpendicular: $m_1 m_2 = -1$.
* **Distance from $(x_1, y_1)$ to $ax + by + c = 0$:**
  $$d =  rac{|a x_1 + b y_1 + c|}{\sqrt{a^2 + b^2}}$$
* **Distance Between Parallel Lines $ax + by + c_1 = 0$ and $ax + by + c_2 = 0$:**
  $$d =  rac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$$
* **Foot of Perpendicular $(h, k)$ and Reflection $(x', y')$:**
  $$ rac{h - x_1}{a} =  rac{k - y_1}{b} = - rac{a x_1 + b y_1 + c}{a^2 + b^2}, \qquad  rac{x' - x_1}{a} =  rac{y' - y_1}{b} = -2 rac{a x_1 + b y_1 + c}{a^2 + b^2}$$
* **Pair of Straight Lines through Origin ($ax^2 + 2hxy + by^2 = 0$):**
  $$        an        heta =  rac{2\sqrt{h^2 - ab}}{a + b}$$
  * Perpendicular lines $\iff a + b = 0$ (coefficient of $x^2$ + coefficient of $y^2 = 0$).
  * Coincident lines $\iff h^2 - ab = 0$.


---


## 2. Circle


![Maths Conics And Coordinate Geometry](/media/maths_conics_and_coordinate_geometry.webp)
*Description: Two-panel conics and coordinate geometry visual matrix: (Panel A) Geometric plots of Parabola, Ellipse, and Hyperbola with foci and directrices; (Panel B) Summary of tangents, normals, director circles, and orthogonality invariants.*


### 2.1 Standard & General Equations
* Standard: $(x - h)^2 + (y - k)^2 = r^2$.
* General: $x^2 + y^2 + 2gx + 2fy + c = 0$.
  * Center: $(-g, -f)$. Radius: $r = \sqrt{g^2 + f^2 - c}$.
  * Intercepts on axes: $X        ext{-intercept} = 2\sqrt{g^2 - c}$, $Y        ext{-intercept} = 2\sqrt{f^2 - c}$.


### 2.2 Tangents & Normals
* **Slope Form:** $y = mx \pm r\sqrt{1 + m^2}$.
* **Point Form ($T = 0$):** At $(x_1, y_1)$: $x x_1 + y y_1 + g(x + x_1) + f(y + y_1) + c = 0$.
* **Parametric Form:** $x\cos        heta + y\sin        heta = r$ for $x = r\cos        heta, y = r\sin        heta$.
* **Length of Tangent:** $L = \sqrt{S_1} = \sqrt{x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c}$.
* **Chord of Contact:** $T = 0$. Area of triangle formed by pair of tangents and chord:
  $$\Delta =  rac{r L^3}{r^2 + L^2}$$
* **Director Circle:** Locus of intersection of perpendicular tangents:
  $$x^2 + y^2 = 2r^2 \quad (        ext{for } x^2 + y^2 = r^2)$$
* **Condition of Orthogonality:** Two circles $S_1, S_2$ intersect orthogonally:
  $$2g_1 g_2 + 2f_1 f_2 = c_1 + c_2$$


---


## 3. Conic Sections: Parabola, Ellipse & Hyperbola


### 3.1 Parabola ($y^2 = 4ax$)
* Vertex: $(0, 0)$; Focus: $(a, 0)$; Directrix: $x = -a$; Latus Rectum: $4a$.
* Parametric coordinates: $(at^2, 2at)$.
* **Tangents:**
  * Slope Form: $y = mx +  rac{a}{m}$ ($m 
e 0$). Point of contact: $(a/m^2, 2a/m)$.
  * Parametric Form: $ty = x + at^2$.
* **Normals:**
  * Slope Form: $y = mx - 2am - am^3$.
  * Parametric Form: $y + tx = 2at + at^3$.
* **Focal Chord Property:** If $t_1, t_2$ are endpoints of a focal chord:
  $$t_1 t_2 = -1, \quad         ext{Length} = a\left(t +  rac{1}{t}
ight)^2 \ge 4a$$


### 3.2 Ellipse ($ rac{x^2}{a^2} +  rac{y^2}{b^2} = 1, a > b$)
* Eccentricity: $e = \sqrt{1 -  rac{b^2}{a^2}} \in (0, 1) \implies b^2 = a^2(1 - e^2)$.
* Foci: $(\pm ae, 0)$; Directrices: $x = \pm  rac{a}{e}$; Latus Rectum: $ rac{2b^2}{a}$.
* **Tangents:** $y = mx \pm \sqrt{a^2 m^2 + b^2}$.
* **Director Circle:** $x^2 + y^2 = a^2 + b^2$.
* **Auxiliary Circle:** $x^2 + y^2 = a^2$. Eccentric angle parameter: $(a\cos        heta, b\sin        heta)$.


### 3.3 Hyperbola ($ rac{x^2}{a^2} -  rac{y^2}{b^2} = 1$)
* Eccentricity: $e = \sqrt{1 +  rac{b^2}{a^2}} > 1 \implies b^2 = a^2(e^2 - 1)$.
* Foci: $(\pm ae, 0)$; Directrices: $x = \pm  rac{a}{e}$; Latus Rectum: $ rac{2b^2}{a}$.
* **Tangents:** $y = mx \pm \sqrt{a^2 m^2 - b^2}$.
* **Director Circle:** $x^2 + y^2 = a^2 - b^2$ (exists for $a > b$).
* **Rectangular Hyperbola ($x^2 - y^2 = a^2$ or $xy = c^2$):**
  * Eccentricity $e = \sqrt{2}$. Asymptotes are perpendicular ($y = \pm x$).
  * For $xy = c^2$: Parametric point $(ct, c/t)$, Tangent $ rac{x}{t} + yt = 2c$.


---


## 4. Differential Calculus: Limits, Continuity & Derivatives


![Maths Calculus Lmvt And Integral Geometry](/media/maths_calculus_lmvt_and_integral_geometry.webp)
*Description: Two-panel calculus analytics graphic: (Panel A) Geometric interpretation of Rolle's and LMVT theorems showing tangency parallel to chord; (Panel B) Definite integration master properties, King's rule, and Leibniz integral differentiation.*


### 4.1 Standard Limits & Expansions
* **Trigonometric Limits:** $\lim_{x         o 0}  rac{\sin x}{x} = 1$, $\lim_{x         o 0}  rac{        an x}{x} = 1$, $\lim_{x         o 0}  rac{1 - \cos x}{x^2} =  rac{1}{2}$.
* **Exponential & Logarithmic Limits:**
  $$\lim_{x         o 0}  rac{a^x - 1}{x} = \ln a, \quad \lim_{x         o 0}  rac{e^x - 1}{x} = 1, \quad \lim_{x         o 0}  rac{\ln(1 + x)}{x} = 1$$
* **$1^\infty$ Indeterminate Form:**
  $$\lim_{x         o a} [f(x)]^{g(x)} = e^{\lim_{x         o a} g(x)[f(x) - 1]}$$


### 4.2 Application of Derivatives & Theorems
* **Rolle's Theorem:** If $f(x)$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then $\exists \, c \in (a, b)$ such that $f'(c) = 0$.
* **Lagrange's Mean Value Theorem (LMVT):** If continuous on $[a, b]$ and differentiable on $(a, b)$:
  $$f'(c) =  rac{f(b) - f(a)}{b - a} \quad         ext{for some } c \in (a, b)$$
* **Monotonicity:** $f'(x) \ge 0 \implies$ Increasing; $f'(x) \le 0 \implies$ Decreasing.
* **Maxima & Minima (Second Derivative Test):** At stationary point $x = c$ where $f'(c) = 0$:
  * $f''(c) < 0 \implies$ Local Maximum.
  * $f''(c) > 0 \implies$ Local Minimum.
  * $f''(c) = 0 \implies$ Higher order derivative test needed.


---


## 5. Integral Calculus: Indefinite & Definite


### 5.1 Indefinite Integration Standard Forms
* $\int  rac{dx}{x^2 + a^2} =  rac{1}{a}         an^{-1}\left( rac{x}{a}
ight) + C$
* $\int  rac{dx}{x^2 - a^2} =  rac{1}{2a} \ln\left| rac{x - a}{x + a}
ight| + C$
* $\int  rac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\left( rac{x}{a}
ight) + C$
* $\int \sqrt{a^2 - x^2} \, dx =  rac{x}{2}\sqrt{a^2 - x^2} +  rac{a^2}{2}\sin^{-1}\left( rac{x}{a}
ight) + C$
* **By-Parts Formula:** $\int u v \, dx = u \int v \, dx - \int \left[u' \int v \, dx
ight] dx$ (Priority: ILATE).
* **Exponential Integration Identity:**
  $$\int e^x [f(x) + f'(x)] \, dx = e^x f(x) + C$$


### 5.2 Definite Integration & Leibniz Rule
* **King's Property:**
  $$\int_a^b f(x) \, dx = \int_a^b f(a + b - x) \, dx \implies \int_0^a f(x) \, dx = \int_0^a f(a - x) \, dx$$
* **Periodic Property:** If $f(x + T) = f(x)$, then $\int_0^{nT} f(x) \, dx = n \int_0^T f(x) \, dx$.
* **Leibniz Differentiation Rule:**
  $$ rac{d}{dx} \left[ \int_{\phi(x)}^{\psi(x)} f(t) \, dt 
ight] = f(\psi(x)) \cdot \psi'(x) - f(\phi(x)) \cdot \phi'(x)$$


---


## 6. Algebra: Equations, Sequences & Combinatorics


### 6.1 Quadratic Equations ($ax^2 + bx + c = 0$)
* Roots: $ lpha,  eta =  rac{-b \pm \sqrt{D}}{2a}$ where $D = b^2 - 4ac$.
* Relations: $ lpha +  eta = - rac{b}{a}$, $ lpha eta =  rac{c}{a}$.
* **Location of Roots ($a > 0$):**
  * Both roots greater than $k$: $D \ge 0$, $- rac{b}{2a} > k$, $a \cdot f(k) > 0$.
  * Roots separated by $k$: $a \cdot f(k) < 0$.


### 6.2 Sequences & Progressions
* **A.P.:** $T_n = a + (n - 1)d$, $S_n =  rac{n}{2}[2a + (n - 1)d]$.
* **G.P.:** $T_n = a r^{n-1}$, $S_n =  rac{a(1 - r^n)}{1 - r}$, $S_\infty =  rac{a}{1 - r}$ ($|r| < 1$).
* **Means Inequality:**
  $$\mathbf{        ext{A.M.} \ge         ext{G.M.} \ge         ext{H.M.} \quad         ext{and} \quad G^2 = A \cdot H}$$


### 6.3 Binomial Theorem
* $$(a + b)^n = \sum_{r=0}^n  inom{n}{r} a^{n-r} b^r, \quad T_{r+1} =  inom{n}{r} a^{n-r} b^r$$
* Sum of coefficients: $\sum  inom{n}{r} = 2^n$. Sum of squares: $\sum  inom{n}{r}^2 =  inom{2n}{n}$.
* Multinomial total terms: For $(x_1 + \dots + x_k)^n$, total terms $=  inom{n + k - 1}{k - 1}$.


### 6.4 Permutations, Combinations & Probability
* $^n P_r =  rac{n!}{(n - r)!}$, $^n C_r =  rac{n!}{r!(n - r)!}$.
* Total factors of $N = p_1^{a_1} p_2^{a_2} \dots p_k^{a_k}$: Total divisors $= (a_1 + 1)(a_2 + 1)\dots(a_k + 1)$.
* **Conditional Probability & Bayes' Theorem:**
  $$P(A|B) =  rac{P(A \cap B)}{P(B)}, \qquad P(E_i|A) =  rac{P(E_i)P(A|E_i)}{\sum_j P(E_j)P(A|E_j)}$$


---


## 7. Vectors, 3D Geometry & Complex Numbers


![Maths Vectors 3d And Complex Geometry](/media/maths_vectors_3d_and_complex_geometry.webp)
*Description: Two-panel vectors, 3D, and complex numbers reference: (Panel A) 3D lines, planes, and shortest distance between skew lines; (Panel B) Complex geometry, roots of unity, and Argand plane loci.*


### 7.1 Complex Numbers
* Euler's form: $z = r(\cos        heta + i\sin        heta) = r e^{i        heta}$.
* Cube Roots of Unity: $1, \omega, \omega^2$ where $\omega = e^{i 2\pi/3} = - rac{1}{2} + i rac{\sqrt{3}}{2}$.
  $$\mathbf{1 + \omega + \omega^2 = 0 \quad         ext{and} \quad \omega^3 = 1}$$
* Triangle condition: $z_1, z_2, z_3$ form an equilateral triangle $\iff z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$.


### 7.2 Vectors & 3D Geometry
* **Dot & Cross Products:** $
ec{a} \cdot 
ec{b} = |
ec{a}||
ec{b}|\cos        heta$, $|
ec{a}         imes 
ec{b}| = |
ec{a}||
ec{b}|\sin        heta$.
* **Scalar & Vector Triple Products:**
  $$[
ec{a} \; 
ec{b} \; 
ec{c}] = 
ec{a} \cdot (
ec{b}         imes 
ec{c}), \qquad 
ec{a}         imes (
ec{b}         imes 
ec{c}) = (
ec{a} \cdot 
ec{c})
ec{b} - (
ec{a} \cdot 
ec{b})
ec{c}$$
* **Shortest Distance Between Skew Lines:**
  $$d = \left| rac{(
ec{a}_2 - 
ec{a}_1) \cdot (
ec{b}_1         imes 
ec{b}_2)}{|
ec{b}_1         imes 
ec{b}_2|}
ight|$$


---


## 8. Trigonometry, Solution of Triangles & Statistics


### 8.1 Trigonometric Identities & Triangle Properties
* Sine Rule: $ rac{a}{\sin A} =  rac{b}{\sin B} =  rac{c}{\sin C} = 2R$.
* Cosine Rule: $\cos A =  rac{b^2 + c^2 - a^2}{2bc}$.
* Inradius & Circumradius: $r =  rac{\Delta}{s} = (s - a)        an(A/2)$, $R =  rac{abc}{4\Delta}$.


### 8.2 Statistics & Reasoning
* Mean: $ ar{x} =  rac{\sum x_i}{N}$. Variance: $\sigma^2 =  rac{\sum x_i^2}{N} - ( ar{x})^2$.
* Standard Deviation: $\sigma = \sqrt{        ext{Variance}}$. Coefficient of Variation $=  rac{\sigma}{ ar{x}}         imes 100\%$.
* Mathematical Reasoning:
  * Contrapositive of $p         o q$ is $\sim q         o \sim p$.
  * Converse is $q         o p$; Inverse is $\sim p         o \sim q$.