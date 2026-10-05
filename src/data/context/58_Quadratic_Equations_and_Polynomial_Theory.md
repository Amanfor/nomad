Mathematics Revision Context: Chapter 58 — Quadratic Equations & Polynomial Theory


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Quadratic Equation/`, `1_Theory_English_0lghDTH.pdf`, `2._Exercise-1_to_3.pdf`, `3.HLP.pdf`, and `Quadratic_Equation.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Algebra Core — Polynomial Foundations & Degree Theorems, Quadratic Equation vs. Identity Distinction ($ax^2 + bx + c = 0$ as Identity $\iff a = b = c = 0$), Vieta's Relations for Roots and Coefficients (Sum $\alpha + \beta = -b/a$, Product $\alpha\beta = c/a$, Absolute Difference $|\alpha - \beta| = \frac{\sqrt{D}}{|a|}$), Symmetric Functions of Roots, Newton's Sums Recurrence Theorem ($a S_n + b S_{n-1} + c S_{n-2} = 0$ for $S_n = p\alpha^n + q\beta^n$), Transformation of Polynomial Equations, Discriminant Analytics ($D = b^2 - 4ac$), Nature of Roots across Real and Rational Number Fields, Conjugate Surd and Complex Conjugate Pairing Invariants, Integral Roots Conditions, Parabolic Function Geometry ($y = ax^2 + bx + c$, Vertex Coordinates $V(-b/2a, -D/4a)$, Axis of Symmetry $x = -b/2a$), Global Extrema and Sign Invariance Rules ($f(x) > 0 \;\forall x \iff a > 0, D < 0$), Restricted Domain Range Calculations, Location of Roots (6 Canonical Analytical Boundary Regimes for Target Points $k$ and Intervals $(k_1, k_2)$), Common Roots Conditions (Single Common Root Eliminant $(c_1 a_2 - c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$, Both Roots Common Proportionality $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$, and The Conjugate Root Trap), Rational Function Range Determinations ($y = \frac{P_1(x)}{P_2(x)}$, Discriminant Inversion $D_x \ge 0$, Boundary Poles & Removable Common Factor Traps), Theory of Higher Degree Polynomials (General Vieta's Tensor Relations, Cubic Equations $ax^3 + bx^2 + cx + d = 0$ with Roots in A.P., G.P., and H.P., Turning Points $P'(x) = 0$, Descartes' Rule of Signs), Reducible Equations (Symmetric Reciprocal Quartics, Exponential & Modulus Substitutions), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Foundations of Polynomials, Quadratic Equations & Identities


### 1.1 Polynomial Definitions & The Fundamental Theorem of Algebra


A real polynomial of degree $n$ in variable $x$ is an algebraic expression of the form:


$$P(x) = a_n x^n + a_{n-1} x^{n-1} + a_{n-2} x^{n-2} + \dots + a_1 x + a_0 = \sum_{k=0}^{n} a_k x^k$$


where:
* $n \in \mathbb{W} = \{0, 1, 2, 3, \dots\}$ is a non-negative integer representing the **degree** of the polynomial (denoted $\deg(P) = n$).
* $a_n, a_{n-1}, \dots, a_0 \in \mathbb{R}$ (or $\mathbb{C}$) are constant coefficients, with the **leading coefficient** $a_n \neq 0$.
* $a_0$ is the constant term. If $a_n = 1$, the polynomial is termed **monic**.


**The Fundamental Theorem of Algebra (Gauss):**
Every polynomial equation $P(x) = 0$ of degree $n \ge 1$ with complex (or real) coefficients has **exactly $n$ roots** in the complex number field $\mathbb{C}$, counting multiplicities. Consequently, $P(x)$ can be uniquely factored into $n$ linear factors:


$$P(x) = a_n (x - \alpha_1)(x - \alpha_2)\cdots(x - \alpha_n)$$


---


### 1.2 Quadratic Polynomial vs. Quadratic Equation


A polynomial of degree 2 is a **quadratic polynomial**:


$$f(x) = a x^2 + b x + c \quad (a \neq 0; \; a, b, c \in \mathbb{R})$$


Setting $f(x) = 0$ yields the general **quadratic equation**:


$$a x^2 + b x + c = 0 \quad (a \neq 0)$$


* If $a = 0$ and $b \neq 0$, the equation degenerates into a **linear equation** $bx + c = 0$, possessing exactly **one** root $x = -c/b$.
* If $a = 0, b = 0$, and $c \neq 0$, the equation becomes an **algebraic contradiction** ($c = 0$), possessing **zero** solutions.
* If $a = 0, b = 0$, and $c = 0$, the equation reduces to $0 = 0$, which is satisfied for every $x \in \mathbb{C}$, becoming an **identity**.


---


### 1.3 The Strict Distinction Between an Equation and an Identity


This distinction forms one of the most frequently tested fundamental concepts in JEE Advanced:


1. **Equation:** A statement of equality $f(x) = g(x)$ that is valid only for a finite, discrete set of values of the variable $x$. A polynomial equation of degree $n$ cannot have more than $n$ distinct roots in $\mathbb{C}$.
2. **Identity:** An algebraic statement that holds identically true for **all** admissible values of the variable $x$ in the domain:


$$\mathbf{P(x) \equiv 0 \iff a_n = a_{n-1} = \dots = a_1 = a_0 = 0}$$


**The Identity Theorem for Quadratics:**
If a quadratic expression $a x^2 + b x + c = 0$ is satisfied by **more than two distinct values of $x$** (i.e., at least 3 distinct values $\alpha, \beta, \gamma$), then it is **NOT** a quadratic equation—it is an **identity in $x$**, which mathematically necessitates:


$$\mathbf{a = 0, \quad b = 0, \quad \text{and} \quad c = 0}$$


**Classical JEE Archetype (Identity Proof):**
Consider the equation:


$$\frac{(x - b)(x - c)}{(a - b)(a - c)} + \frac{(x - c)(x - a)}{(b - c)(b - a)} + \frac{(x - a)(x - b)}{(c - a)(c - b)} = 1$$


where $a, b, c$ are mutually distinct real numbers:
* Evaluating at $x = a$: The second and third terms vanish, leaving $\frac{(a-b)(a-c)}{(a-b)(a-c)} + 0 + 0 = 1$ (Satisfied!).
* Evaluating at $x = b$: The first and third terms vanish, leaving $0 + \frac{(b-c)(b-a)}{(b-c)(b-a)} + 0 = 1$ (Satisfied!).
* Evaluating at $x = c$: The first and second terms vanish, leaving $0 + 0 + \frac{(c-a)(c-b)}{(c-a)(c-b)} = 1$ (Satisfied!).


Since this degree-2 polynomial equation is satisfied by three distinct values $x = a, b, c$, by the Identity Theorem it must be an **identity** valid for all $x \in \mathbb{R}$.


---


## 2. Relation Between Roots and Coefficients (Vieta's Formulas) & Symmetric Functions


### 2.1 The Quadratic Formula & Vieta's Theorem


For the quadratic equation $a x^2 + b x + c = 0$ ($a \neq 0$), completing the square yields:


$$x^2 + \frac{b}{a}x + \frac{c}{a} = 0 \implies \left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$


Defining the **Discriminant** $D \equiv b^2 - 4ac$:


$$\mathbf{x = \frac{-b \pm \sqrt{D}}{2a}}$$


Let the two roots be $\alpha$ and $\beta$. Factoring $a(x - \alpha)(x - \beta) = ax^2 - a(\alpha + \beta)x + a\alpha\beta = 0$ and equating coefficients:


1. **Sum of Roots ($S$):**
   $$\mathbf{\alpha + \beta = -\frac{b}{a} = -\frac{\text{coefficient of } x}{\text{coefficient of } x^2}}$$


2. **Product of Roots ($P$):**
   $$\mathbf{\alpha\beta = \frac{c}{a} = \frac{\text{constant term}}{\text{coefficient of } x^2}}$$


3. **Absolute Difference of Roots ($|\alpha - \beta|$):**
   $$(\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta = \left(-\frac{b}{a}\right)^2 - 4\left(\frac{c}{a}\right) = \frac{b^2 - 4ac}{a^2} = \frac{D}{a^2}$$
   $$\mathbf{|\alpha - \beta| = \frac{\sqrt{D}}{|a|}}$$


---


### 2.2 Canonical Symmetric Functions of Roots


A function $f(\alpha, \beta)$ is symmetric if $f(\alpha, \beta) = f(\beta, \alpha)$. Any rational symmetric function of roots can be expressed strictly in terms of $S = \alpha + \beta$ and $P = \alpha\beta$:


1. **Sum of Squares:**
   $$\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = S^2 - 2P = \frac{b^2 - 2ac}{a^2}$$


2. **Sum of Cubes:**
   $$\alpha^3 + \beta^3 = (\alpha + \beta)(\alpha^2 - \alpha\beta + \beta^2) = S(S^2 - 3P) = S^3 - 3SP = \frac{-b^3 + 3abc}{a^3}$$


3. **Sum of Fourth Powers:**
   $$\alpha^4 + \beta^4 = (\alpha^2 + \beta^2)^2 - 2\alpha^2\beta^2 = (S^2 - 2P)^2 - 2P^2 = S^4 - 4S^2P + 2P^2$$


4. **Sum of Reciprocals:**
   $$\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = \frac{S}{P} = -\frac{b}{c}$$


5. **Sum of Reciprocal Squares:**
   $$\frac{1}{\alpha^2} + \frac{1}{\beta^2} = \frac{\alpha^2 + \beta^2}{\alpha^2\beta^2} = \frac{S^2 - 2P}{P^2} = \frac{b^2 - 2ac}{c^2}$$


6. **Ratio Sum:**
   $$\frac{\alpha}{\beta} + \frac{\beta}{\alpha} = \frac{\alpha^2 + \beta^2}{\alpha\beta} = \frac{S^2 - 2P}{P} = \frac{b^2 - 2ac}{ac} = \frac{b^2}{ac} - 2$$


---


### 2.3 Newton's Sums Theorem (Power Sum Recurrence)


Newton's Theorem is the single most powerful algebraic shortcut for competitive JEE problems involving high powers of roots (e.g., evaluating $\frac{a_{10} - 2a_8}{2a_9}$).


**Theorem Statement:**
Let $\alpha$ and $\beta$ be the roots of $ax^2 + bx + c = 0$. Define the power sum:


$$S_n = p \alpha^n + q \beta^n \quad (n \in \mathbb{Z})$$


where $p, q$ are arbitrary real or complex constants. Then, for any integer $n$:


$$\mathbf{a S_n + b S_{n-1} + c S_{n-2} = 0}$$


**Rigorous Proof:**
Since $\alpha$ and $\beta$ satisfy $ax^2 + bx + c = 0$:


$$a\alpha^2 + b\alpha + c = 0 \implies a\alpha^n + b\alpha^{n-1} + c\alpha^{n-2} = 0$$


$$a\beta^2 + b\beta + c = 0 \implies a\beta^n + b\beta^{n-1} + c\beta^{n-2} = 0$$


Multiplying the first equation by $p$, the second equation by $q$, and adding them together:


$$a(p\alpha^n + q\beta^n) + b(p\alpha^{n-1} + q\beta^{n-1}) + c(p\alpha^{n-2} + q\beta^{n-2}) = 0$$


$$\mathbf{a S_n + b S_{n-1} + c S_{n-2} = 0 \quad \blacksquare}$$


---


### 2.4 Transformation of Equations


To construct a new polynomial equation whose roots are related to the roots $\alpha, \beta$ of $ax^2 + bx + c = 0$ by a symmetric relation $y = g(x)$:


| Target Roots | Algebraic Substitution | Resulting Transformed Equation |
| :--- | :--- | :--- |
| $\alpha + k, \; \beta + k$ | $y = x + k \implies x = y - k$ | $a(y - k)^2 + b(y - k) + c = 0$ |
| $\alpha - k, \; \beta - k$ | $y = x - k \implies x = y + k$ | $a(y + k)^2 + b(y + k) + c = 0$ |
| $k\alpha, \; k\beta$ | $y = kx \implies x = y/k$ | $a(y/k)^2 + b(y/k) + c = 0 \implies ay^2 + kby + k^2 c = 0$ |
| $\alpha/k, \; \beta/k$ | $y = x/k \implies x = ky$ | $ak^2 y^2 + bky + c = 0$ |
| $1/\alpha, \; 1/\beta$ | $y = 1/x \implies x = 1/y$ | $a(1/y)^2 + b(1/y) + c = 0 \implies cy^2 + by + a = 0$ |
| $-\alpha, \; -\beta$ | $y = -x \implies x = -y$ | $ay^2 - by + c = 0$ |
| $\alpha^2, \; \beta^2$ | $y = x^2 \implies x = \sqrt{y}$ | $a y + c = -b\sqrt{y} \implies (ay + c)^2 = b^2 y$ |
| $\frac{\alpha+1}{\alpha-1}, \; \frac{\beta+1}{\beta-1}$ | $y = \frac{x+1}{x-1} \implies x = \frac{y+1}{y-1}$ | $a\left(\frac{y+1}{y-1}\right)^2 + b\left(\frac{y+1}{y-1}\right) + c = 0$ |


---


## 3. Nature of Roots & The Discriminant ($D = b^2 - 4ac$)


### 3.1 Field-Dependent Root Classifications


The nature of roots of $ax^2 + bx + c = 0$ is governed strictly by the discriminant $D = b^2 - 4ac$ and the number field containing the coefficients:


```
                                 Discriminant D = b² - 4ac
                                             │
                  ┌──────────────────────────┴──────────────────────────┐
               D ≥ 0 (Real Roots)                                    D < 0 (Non-Real)
                  │                                                     │
        ┌─────────┴─────────┐                                           ▼
      D > 0               D = 0                               Complex Conjugate Roots
 (Real & Distinct)    (Real & Equal)                           α, β = p ± iq  (q ≠ 0)
        │            (Repeated/Coincident)                     (for a, b, c ∈ ℝ)
        │
   [If a, b, c ∈ ℚ]
        │
   ┌────┴────────────────────────┐
   ▼                             ▼
D is a Perfect Square     D is NOT a Perfect Square
   (Roots are Rational)        (Conjugate Surd Roots: p ± √q)
```


1. **When $a, b, c \in \mathbb{R}$:**
   * **$D > 0$:** The roots $\alpha$ and $\beta$ are **real and unequal** (distinct). The parabola intersects the $x$-axis at two distinct points.
   * **$D = 0$:** The roots are **real and equal** ($\alpha = \beta = -b/2a$). The parabola touches the $x$-axis tangentially at its vertex. The quadratic is a perfect square: $ax^2 + bx + c = a(x + b/2a)^2$.
   * **$D < 0$:** The roots are **strictly imaginary (complex conjugates)**:
     $$\alpha = p + iq, \quad \beta = p - iq \quad (p = -b/2a, \; q = \sqrt{-D}/2a, \; q \neq 0)$$
     The parabola lies entirely on one side of the $x$-axis without intersecting or touching it.


2. **When $a, b, c \in \mathbb{Q}$ (Rational Coefficients):**
   * If $D > 0$ and $D$ is the square of a rational number, the roots are **rational**.
   * If $D > 0$ and $D$ is **not** the square of a rational number, the roots are **irrational** and always occur in **conjugate surd pairs**:
     $$\alpha = p + \sqrt{q}, \quad \beta = p - \sqrt{q} \quad (p \in \mathbb{Q}, \; \sqrt{q} \notin \mathbb{Q})$$


3. **Condition for Integral Roots:**
   For $ax^2 + bx + c = 0$ to possess strictly integer roots:
   * $a, b, c \in \mathbb{Z}$ with $a = 1$ (monic integer polynomial) or $a$ divides $b$ and $c$.
   * $D = b^2 - 4ac$ must be a **perfect square of an integer** ($D = k^2, k \in \mathbb{Z}$).


---


### 3.2 Conjugacy Theorems & The Complex Root Trap


* **Theorem 1 (Complex Conjugate Pairs):** In any polynomial equation with **strictly real coefficients**, non-real complex roots occur in conjugate pairs:
  $$P(z) = 0 \implies P(\bar{z}) = 0$$
* **Theorem 2 (Surd Conjugate Pairs):** In any polynomial equation with **strictly rational coefficients**, irrational roots involving square roots occur in conjugate pairs:
  $$P(p + \sqrt{q}) = 0 \implies P(p - \sqrt{q}) = 0$$


**CRITICAL JEE ADVANCED TRAP:**
Conjugate root theorems **FAIL** if the coefficient constraints are violated!
* If coefficients are **complex** (e.g., $x^2 - (2+i)x + (1+i) = 0$), roots do **NOT** occur in complex conjugate pairs! (Here roots are $x = 1$ and $x = 1+i$, not $1-i$).
* If coefficients are **irrational** (e.g., $x^2 - 2\sqrt{3}x + 3 = 0$), roots do **NOT** occur in surd conjugate pairs! (Here roots are $\sqrt{3}, \sqrt{3}$, not $\pm\sqrt{3}$).


---


## 4. Geometry and Graphs of Quadratic Functions


![Quadratic Graphs and Discriminant Classification](/media/quadratic_graphs_and_discriminant_classification.webp)
*Description: Two-panel comparative graphic illustrating parabolic geometry across discriminant classifications: (Panel A) Upward-opening parabolas ($a > 0$) showing two real distinct intercepts for $D > 0$, tangential touch at vertex for $D = 0$, and strictly positive floating parabola for $D < 0$ with global minimum at $V(-b/2a, -D/4a)$; (Panel B) Downward-opening parabolas ($a < 0$) showing two intercepts for $D > 0$, vertex tangency for $D = 0$, and strictly negative curve for $D < 0$ with global maximum at $V(-b/2a, -D/4a)$.*


### 4.1 Parabolic Decomposition & Vertex Geometry


Every quadratic function $y = f(x) = ax^2 + bx + c$ ($a \neq 0$) geometrically represents a vertical parabola. By completing the square:


$$y = a\left(x + \frac{b}{2a}\right)^2 - \frac{D}{4a} \iff \left(y + \frac{D}{4a}\right) = a\left(x + \frac{b}{2a}\right)^2$$


1. **Vertex Coordinates ($V$):**
   $$\mathbf{V = \left(-\frac{b}{2a}, -\frac{D}{4a}\right)}$$
2. **Axis of Symmetry:** The vertical line passing through the vertex:
   $$\mathbf{x = -\frac{b}{2a}}$$
3. **Focal Length & Focus:** $4A = \frac{1}{|a|} \implies A = \frac{1}{4|a|}$. Focus is at $\left(-\frac{b}{2a}, \frac{1-D}{4a}\right)$.
4. **$y$-Intercept:** Setting $x = 0$ gives $(0, c)$.
5. **$x$-Intercepts:** Real roots of $ax^2 + bx + c = 0$ given by $\left(\frac{-b \pm \sqrt{D}}{2a}, 0\right)$.


---


### 4.2 Sign of Quadratic Expression & Universal Invariance Rules


The sign of $f(x) = ax^2 + bx + c$ for all $x \in \mathbb{R}$ is the cornerstone of algebraic inequality problem-solving:


| Geometric Orientation | Sign of $a$ | Value of $D$ | Graph Characteristics | Sign of $f(x)$ on $\mathbb{R}$ |
| :--- | :--- | :--- | :--- | :--- |
| **Upward, 2 Intercepts** | $a > 0$ | $D > 0$ | Cuts $x$-axis at $\alpha, \beta$ | $f(x) < 0$ for $x \in (\alpha, \beta)$; $f(x) > 0$ for $x \in (-\infty, \alpha) \cup (\beta, \infty)$ |
| **Upward, Tangent** | $a > 0$ | $D = 0$ | Touches $x$-axis at $x = -b/2a$ | $f(x) \ge 0 \;\forall x \in \mathbb{R}$ ($f(x) = 0$ only at vertex) |
| **Upward, Floating** | $a > 0$ | $D < 0$ | Entirely above $x$-axis | **$f(x) > 0 \;\forall x \in \mathbb{R}$ (Strictly Positive)** |
| **Downward, 2 Intercepts**| $a < 0$ | $D > 0$ | Cuts $x$-axis at $\alpha, \beta$ | $f(x) > 0$ for $x \in (\alpha, \beta)$; $f(x) < 0$ for $x \in (-\infty, \alpha) \cup (\beta, \infty)$ |
| **Downward, Tangent** | $a < 0$ | $D = 0$ | Touches $x$-axis at $x = -b/2a$ | $f(x) \le 0 \;\forall x \in \mathbb{R}$ ($f(x) = 0$ only at vertex) |
| **Downward, Floating**| $a < 0$ | $D < 0$ | Entirely below $x$-axis | **$f(x) < 0 \;\forall x \in \mathbb{R}$ (Strictly Negative)** |


**The Two Fundamental Invariance Theorems:**
* **Strict Positivity Invariant:**
  $$\mathbf{a x^2 + b x + c > 0 \quad \forall x \in \mathbb{R} \iff a > 0 \quad \text{and} \quad D < 0}$$
* **Strict Negativity Invariant:**
  $$\mathbf{a x^2 + b x + c < 0 \quad \forall x \in \mathbb{R} \iff a < 0 \quad \text{and} \quad D < 0}$$


---


### 4.3 Range of Quadratic Expressions


1. **Unrestricted Domain ($x \in \mathbb{R}$):**
   * If $a > 0$: The parabola opens upwards; minimum occurs at the vertex:
     $$\mathbf{f(x) \in \left[-\frac{D}{4a}, \infty\right)}$$
   * If $a < 0$: The parabola opens downwards; maximum occurs at the vertex:
     $$\mathbf{f(x) \in \left(-\infty, -\frac{D}{4a}\right]}$$


2. **Restricted Domain ($x \in [x_1, x_2]$):**
   * First determine the vertex abscissa $x_v = -\frac{b}{2a}$.
   * **Case A ($x_v \in [x_1, x_2]$):** The vertex is accessible within the domain:
     $$y_{\min} = \min\left\{f(x_1), f(x_2), -\frac{D}{4a}\right\}, \quad y_{\max} = \max\left\{f(x_1), f(x_2), -\frac{D}{4a}\right\}$$
   * **Case B ($x_v \notin [x_1, x_2]$):** The function is strictly monotonic on $[x_1, x_2]$:
     $$y_{\min} = \min\{f(x_1), f(x_2)\}, \quad y_{\max} = \max\{f(x_1), f(x_2)\}$$


---


## 5. Location of Roots (The 6 Canonical Geometric Regimes)


![Location of Roots Canonical Conditions](/media/location_of_roots_canonical_conditions.webp)
*Description: Six-panel geometric and analytical reference matrix for the canonical Location of Roots problem for $f(x) = ax^2 + bx + c$ ($a > 0$): (Case 1) Both roots greater than $k$; (Case 2) Both roots less than $k$; (Case 3) Point $k$ strictly between roots; (Case 4) Exactly one root in open interval $(k_1, k_2)$; (Case 5) Both roots strictly inside $(k_1, k_2)$; (Case 6) Interval $(k_1, k_2)$ strictly enclosed between roots.*


Let $f(x) = ax^2 + bx + c = 0$ with $a > 0$ (if $a < 0$, multiply by $-1$ or maintain $a \cdot f(k)$ formulation).


### 5.1 Case 1: Both Roots Greater Than a Real Number $k$ ($\alpha, \beta > k$)
For both real roots to lie strictly to the right of $x = k$:
1. $D \ge 0$ (Roots must be real; distinct or equal).
2. $-\frac{b}{2a} > k$ (Vertex axis of symmetry must lie to the right of $k$).
3. $a \cdot f(k) > 0$ ($k$ lies outside the root interval, so $f(k)$ shares the sign of $a$).


$$\mathbf{\text{Intersection: } D \ge 0 \;\cap\; -\frac{b}{2a} > k \;\cap\; a f(k) > 0}$$


---


### 5.2 Case 2: Both Roots Less Than a Real Number $k$ ($\alpha, \beta < k$)
For both real roots to lie strictly to the left of $x = k$:
1. $D \ge 0$ (Roots must be real).
2. $-\frac{b}{2a} < k$ (Vertex axis of symmetry must lie to the left of $k$).
3. $a \cdot f(k) > 0$ ($k$ lies outside the root interval).


$$\mathbf{\text{Intersection: } D \ge 0 \;\cap\; -\frac{b}{2a} < k \;\cap\; a f(k) > 0}$$


---


### 5.3 Case 3: A Real Number $k$ Lies Strictly Between the Roots ($\alpha < k < \beta$)
For $k$ to lie between the two distinct real roots:
* Since the parabola opens upward ($a > 0$), any point between the roots must have negative functional value ($f(k) < 0$).
* **CRITICAL THEOREM:** The single condition $a \cdot f(k) < 0$ **automatically guarantees** that $D > 0$!


$$\mathbf{a \cdot f(k) < 0}$$


*(Proof: $a f(k) < 0 \implies a(ak^2 + bk + c) < 0 \implies a^2 k^2 + abk + ac < 0 \implies (ak + b/2)^2 - (b^2 - 4ac)/4 < 0 \implies D/4 > (ak + b/2)^2 \ge 0 \implies D > 0$).*


---


### 5.4 Case 4: Exactly One Root Lies in the Open Interval $(k_1, k_2)$
For a single root to cross the interval $(k_1, k_2)$ with neither $k_1$ nor $k_2$ being a root:
* The curve must cross the $x$-axis between $k_1$ and $k_2$, meaning $f(k_1)$ and $f(k_2)$ have opposite signs:


$$\mathbf{f(k_1) \cdot f(k_2) < 0}$$


*(Note: If one root equals $k_1$ or $k_2$, evaluate boundary cases separately).*


---


### 5.5 Case 5: Both Roots Lie Strictly Inside the Interval $(k_1, k_2)$ ($k_1 < \alpha \le \beta < k_2$)
For both roots to be confined within the bounds $k_1$ and $k_2$:
1. $D \ge 0$ (Roots must be real).
2. $k_1 < -\frac{b}{2a} < k_2$ (Vertex must lie strictly between the bounds).
3. $a \cdot f(k_1) > 0$ (Bound $k_1$ lies outside the roots).
4. $a \cdot f(k_2) > 0$ (Bound $k_2$ lies outside the roots).


$$\mathbf{\text{Intersection: } D \ge 0 \;\cap\; k_1 < -\frac{b}{2a} < k_2 \;\cap\; a f(k_1) > 0 \;\cap\; a f(k_2) > 0}$$


---


### 5.6 Case 6: The Interval $(k_1, k_2)$ Lies Strictly Between the Roots ($\alpha < k_1 < k_2 < \beta$)
Both $k_1$ and $k_2$ lie inside the inter-root interval:
1. $a \cdot f(k_1) < 0$
2. $a \cdot f(k_2) < 0$


$$\mathbf{a \cdot f(k_1) < 0 \quad \text{and} \quad a \cdot f(k_2) < 0}$$


*(Here $D > 0$ is again automatically satisfied by either condition).*


---


## 6. Common Roots of Quadratic Equations


Consider two general quadratic equations:


$$a_1 x^2 + b_1 x + c_1 = 0 \quad (a_1 \neq 0)$$


$$a_2 x^2 + b_2 x + c_2 = 0 \quad (a_2 \neq 0)$$


### 6.1 Condition for Exactly One Common Root


Let $\alpha$ be the unique common root. Substituting $\alpha$ into both equations:


$$a_1 \alpha^2 + b_1 \alpha + c_1 = 0$$


$$a_2 \alpha^2 + b_2 \alpha + c_2 = 0$$


Applying Cramer's Rule / Cross-Multiplication Method:


$$\frac{\alpha^2}{b_1 c_2 - b_2 c_1} = \frac{-\alpha}{a_1 c_2 - a_2 c_1} = \frac{1}{a_1 b_2 - a_2 b_1}$$


$$\alpha^2 = \frac{b_1 c_2 - b_2 c_1}{a_1 b_2 - a_2 b_1}, \quad \alpha = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}$$


Equating $\alpha^2 = (\alpha)^2$:


$$\frac{b_1 c_2 - b_2 c_1}{a_1 b_2 - a_2 b_1} = \left(\frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}\right)^2$$


$$\mathbf{(c_1 a_2 - c_2 a_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)}$$


**Value of the Common Root ($\alpha$):**
$$\mathbf{\alpha = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1} = \frac{b_1 c_2 - b_2 c_1}{c_1 a_2 - c_2 a_1}}$$


---


### 6.2 Condition for Both Roots Common


If both roots are common, the two equations are scalar multiples of each other (identical solution sets):


$$\mathbf{\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}}$$


---


### 6.3 The Conjugate Root Trap in Common Root Problems


**High-Yield JEE Advanced Trap:**
Suppose equation (1) has **strictly real coefficients** and $D_1 < 0$ (so its roots are complex conjugates $p \pm iq$).
If the problem states that equation (1) and equation (2) (also with real coefficients) **share a common root**, students often erroneously apply the complex single-common-root cross-multiplication formula!


**The Invariant Law:**
Since complex roots of real polynomials **must occur in conjugate pairs**, if equation (2) shares one complex root $p + iq$, it **MUST also share the conjugate root $p - iq$**!
Therefore, **BOTH roots are common**:


$$\mathbf{\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}}$$


*(The identical principle holds for rational-coefficient equations when one has conjugate surd roots $p \pm \sqrt{q}$ with non-square $D$).*


---


## 7. Range of Rational Algebraic Functions


![Rational Functions and Higher Degree Polynomials](/media/rational_functions_and_higher_degree_polynomials.webp)
*Description: Two-panel advanced polynomial graphic: (Panel A) Range determination of quadratic rational function $y = \frac{x^2 - x + 1}{x^2 + x + 1}$ via discriminant inversion $D_x \ge 0$, illustrating horizontal asymptote $y = 1$, global minimum at $(1, 1/3)$, global maximum at $(-1, 3)$, and shaded range $y \in [1/3, 3]$; (Panel B) Cubic polynomial $P(x) = 2x^3 - 15x^2 + 36x + 1$ showing local maximum at $(2, 29)$, local minimum at $(3, 28)$, point of inflection at $(2.5, 28.5)$, and Vieta's algebraic matrix.*


### 7.1 Quadratic Inversion Method for Range Evaluation


To determine the range of $y = \frac{a_1 x^2 + b_1 x + c_1}{a_2 x^2 + b_2 x + c_2}$ for $x \in \mathbb{R}$:


1. Cross-multiply and collect all terms into a quadratic in $x$:
   $$(y a_2 - a_1)x^2 + (y b_2 - b_1)x + (y c_2 - c_1) = 0$$
2. Since $x \in \mathbb{R}$, this quadratic equation in $x$ must possess real roots. Therefore, its discriminant $D_x$ must be non-negative:
   $$\mathbf{D_x = (y b_2 - b_1)^2 - 4(y a_2 - a_1)(y c_2 - c_1) \ge 0}$$
3. Solving this quadratic inequality in $y$ provides the candidate range $[y_{\min}, y_{\max}]$.
4. **Boundary Pole Check:**
   Examine the coefficient of $x^2$: $y a_2 - a_1 = 0 \implies y = a_1/a_2$.
   * Substitute $y = a_1/a_2$ back into the linear equation. If it yields a valid real $x$, $a_1/a_2$ is in the range.
   * Check horizontal asymptotes: $\lim_{x \to \pm\infty} y = a_1/a_2$.


### 7.2 The Removable Common Factor Trap


If $P_1(x)$ and $P_2(x)$ share a common linear factor $(x - k)$:


$$y = \frac{(x - k)(x - \alpha)}{(x - k)(x - \beta)} = \frac{x - \alpha}{x - \beta} \quad (x \neq k)$$


* The graph has a **point discontinuity (hole)** at $x = k$.
* The value $y_0 = \frac{k - \alpha}{k - \beta}$ can **never be achieved**!
* The true range is:
  $$\mathbf{\text{Range} = \text{Range}\left(\frac{x - \alpha}{x - \beta}\right) \setminus \left\{\frac{k - \alpha}{k - \beta}\right\}}$$


---


## 8. Theory of Higher Degree Polynomial Equations


### 8.1 Generalized Vieta's Formulas for Degree-$n$ Polynomials


Let $\alpha_1, \alpha_2, \dots, \alpha_n$ be the $n$ roots of the polynomial equation:


$$P(x) = a_n x^n + a_{n-1} x^{n-1} + a_{n-2} x^{n-2} + \dots + a_1 x + a_0 = 0 \quad (a_n \neq 0)$$


Defining the elementary symmetric polynomials:


1. **Sum of roots taken one at a time ($S_1$):**
   $$\mathbf{S_1 = \sum_{i=1}^n \alpha_i = -\frac{a_{n-1}}{a_n}}$$


2. **Sum of products taken two at a time ($S_2$):**
   $$\mathbf{S_2 = \sum_{1 \le i < j \le n} \alpha_i \alpha_j = +\frac{a_{n-2}}{a_n}}$$


3. **Sum of products taken three at a time ($S_3$):**
   $$\mathbf{S_3 = \sum_{1 \le i < j < k \le n} \alpha_i \alpha_j \alpha_k = -\frac{a_{n-3}}{a_n}}$$


4. **Product of all roots ($S_n$):**
   $$\mathbf{S_n = \alpha_1 \alpha_2 \cdots \alpha_n = (-1)^n \frac{a_0}{a_n}}$$


---


### 8.2 Cubic Equations ($ax^3 + bx^2 + cx + d = 0$)


Let roots be $\alpha, \beta, \gamma$:
$$\alpha + \beta + \gamma = -\frac{b}{a}$$
$$\alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a}$$
$$\alpha\beta\gamma = -\frac{d}{a}$$


**Standard Roots Assumptions for Special Progressions:**
* **Roots in Arithmetic Progression (A.P.):** Assume roots as $a - d, a, a + d$.
  Sum of roots $= 3a = -b/a \implies a = -b/(3a)$ is directly a root!
* **Roots in Geometric Progression (G.P.):** Assume roots as $a/r, a, ar$.
  Product of roots $= a^3 = -d/a \implies a = (-d/a)^{1/3}$ is directly a root!
* **Roots in Harmonic Progression (H.P.):** Substitute $x = 1/y$; the resulting cubic in $y$ has roots in A.P.!


---


### 8.3 Descartes' Rule of Signs


Descartes' Rule provides sharp upper bounds on the number of positive and negative real roots of any real polynomial $P(x)$:


1. **Positive Real Roots:** The number of positive real roots of $P(x) = 0$ is either equal to the number of sign variations between consecutive non-zero coefficients of $P(x)$, or is less than that number by an **even integer**.
2. **Negative Real Roots:** The number of negative real roots of $P(x) = 0$ is either equal to the number of sign variations in $P(-x)$, or is less than that number by an **even integer**.
3. **Complex Roots Guarantee:** If $\deg(P) = n$, and the maximum possible positive roots is $p_{\max}$ and maximum negative roots is $q_{\max}$, the minimum number of non-real complex roots is:
   $$\mathbf{N_{\text{complex}} \ge n - (p_{\max} + q_{\max})}$$


---


## 9. Advanced Reducible Forms & Symmetric Equations


### 9.1 Reciprocal (Palindromic) Equations


A polynomial equation whose coefficients are symmetric from the ends is a reciprocal equation:


$$a x^4 + b x^3 + c x^2 + b x + a = 0 \quad (a \neq 0)$$


**Solution Algorithm:**
1. Since $x = 0$ is not a root, divide through by $x^2$:
   $$a\left(x^2 + \frac{1}{x^2}\right) + b\left(x + \frac{1}{x}\right) + c = 0$$
2. Substitute $u = x + \frac{1}{x} \implies x^2 + \frac{1}{x^2} = u^2 - 2$:
   $$a(u^2 - 2) + b u + c = 0 \implies a u^2 + b u + (c - 2a) = 0$$
3. Solve the quadratic for $u$.
4. For each real root $u$, solve $x + \frac{1}{x} = u \iff x^2 - u x + 1 = 0$.
5. **Real Root Existence Trap:** The equation $x + 1/x = u$ possesses real roots $x \in \mathbb{R}$ **if and only if $|u| \ge 2$**! Any root with $|u| < 2$ produces complex conjugate roots.


---


### 9.2 Equations Involving Modulus ($|x|$)


For equations of the form $a x^2 + b|x| + c = 0$:
* Recognize that $x^2 = |x|^2$.
* Let $u = |x| \ge 0$.
* Solve $a u^2 + b u + c = 0$ for $u$.
* Only non-negative roots $u \ge 0$ yield real solutions:
  * Each strictly positive root $u > 0$ yields **two** real solutions: $x = \pm u$.
  * A root $u = 0$ yields **one** solution: $x = 0$.
  * Negative roots $u < 0$ yield **zero** real solutions!


---


## 10. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Parameterized Leading Coefficient Trap:**
   When given an equation like $(\lambda - 2)x^2 + 2\lambda x + (\lambda - 1) = 0$:
   * Students often immediately evaluate $D \ge 0$ without verifying if the equation is quadratic!
   * If $\lambda = 2$, the $x^2$ coefficient vanishes, turning the equation into linear: $4x + 1 = 0 \implies x = -1/4$ (exactly ONE real root).
   * Always bifurcate into:
     * Case 1: $\lambda = 2$ (Linear).
     * Case 2: $\lambda \neq 2$ (Quadratic; analyze $D$).


2. **The "Both Roots Positive" vs. "At Least One Positive" Fallacy:**
   * For both roots positive: $D \ge 0, \; -b/2a > 0, \; c/a > 0$.
   * For roots of opposite signs: **Only** $c/a < 0$ is required! (Do not waste time evaluating $D$, because $c/a < 0 \implies 4ac/a^2 < 0 \implies D = b^2 - 4ac > 0$ is strictly automatic).


3. **Newton's Sum Difference Sign Trap:**
   When applying $a S_n + b S_{n-1} + c S_{n-2} = 0$, verify if $S_n = \alpha^n + \beta^n$ or $S_n = \alpha^n - \beta^n$.
   Newton's recurrence holds **identically** for both additions and subtractions (and any linear combination $p\alpha^n + q\beta^n$)!


4. **Common Root Elimination Trap:**
   When subtracting two equations $x^2 + ax + b = 0$ and $x^2 + cx + d = 0$ to get $(a-c)x + (b-d) = 0 \implies x = \frac{d-b}{a-c}$:
   * This $x$ is only a **candidate** common root.
   * You **must check** that $a \neq c$. If $a = c$ and $b \neq d$, there is no common root. If $a = c$ and $b = d$, both roots are common!