Mathematics Revision Context: Chapter 44 — Differential Equations


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/Differential Equation/`, `Differential Equation Theory+Exercise+HLP.pdf`, `Differential Equation Exercise+HLP Solutions.pdf`, `Differential Equation synopsis.pdf`, and `Differential Equation-jeemain.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Calculus Core — Definitions, Order & Degree Subtleties (Polynomial Condition, Transcendental Functions of Derivatives), Formation of Differential Equations (Elimination of Arbitrary Constants, Geometric Families of Curves), First-Order First-Degree Equations (Variable Separable, Reducible to Separable via Linear Substitutions $ax+by+c=t$, Polar Transformations $x=r\cos\theta, y=r\sin\theta$), Homogeneous Equations ($y=vx$ and $x=vy$) & Non-Homogeneous Linear Fractional Forms, Exact Differential Equations & Inspection Integrating Forms ($d(xy), d(y/x), d(\arctan(y/x)), d(\ln(x/y)), d(\sqrt{x^2+y^2})$), First-Order Linear Differential Equations (Leibniz Form, Integrating Factor $e^{\int P dx}$, dy/dx vs dx/dy forms), Equations Reducible to Linear Form (Bernoulli's Equation, Generalized Substitution $f'(y)\frac{dy}{dx} + P(x)f(y) = Q(x)$), Clairaut's Equation & Singular Solutions, Differential Geometry Applications (Tangents, Normals, Subtangents, Subnormals, Intercepts), Orthogonal Trajectories (Cartesian and Polar Forms), Physical Modeling (Newton's Law of Cooling, Radioactive Decay, Population Growth, RL Circuits), Curated High-Yield Problem Archetypes with Complete Solutions, and Extensive JEE Main & JEE Advanced Previous Year Questions (PYQs) with Step-by-Step Analytical Solutions.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fundamentals, Order, and Degree


### 1.1 Fundamental Definitions
* **Differential Equation:** An equation involving an independent variable ($x$), a dependent variable ($y$), and one or more differential coefficients of the dependent variable with respect to the independent variable ($\frac{dy}{dx}, \frac{d^2y}{dx^2}, \dots, \frac{d^n y}{dx^n}$).
* **Ordinary vs. Partial Differential Equations:**
  * **Ordinary Differential Equation (ODE):** Involves derivatives with respect to a single independent variable (the focus of the JEE syllabus).
  * **Partial Differential Equation (PDE):** Involves partial derivatives with respect to two or more independent variables (e.g., $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$).


---


### 1.2 Order of a Differential Equation
* **Definition:** The order of a differential equation is the order of the highest derivative (highest differential coefficient) appearing in the equation.
* **Essential Invariant:** The order of the differential equation representing a family of curves is strictly equal to the number of **independent (essential) arbitrary constants** present in the general equation of the family.


#### Essential vs. Apparent Arbitrary Constants:
1. $y = c_1 e^{x + c_2} = (c_1 e^{c_2}) e^x = A e^x$:
   * Although two symbols ($c_1, c_2$) appear, they combine into a single essential constant $A$.
   * Therefore, the family is governed by a **first-order** differential equation: $\frac{dy}{dx} = y$.
2. $y = c_1 \sin(x + c_2) + c_3 \cos(x + c_4)$:
   * Expanding: $y = c_1(\sin x \cos c_2 + \cos x \sin c_2) + c_3(\cos x \cos c_4 - \sin x \sin c_4)$
   * Grouping terms: $y = (c_1 \cos c_2 - c_3 \sin c_4)\sin x + (c_1 \sin c_2 + c_3 \cos c_4)\cos x = A \sin x + B \cos x$.
   * There are exactly **two independent arbitrary constants** ($A, B$). The differential equation is of **order 2**: $\frac{d^2y}{dx^2} + y = 0$.
3. $y = c_1 \ln(c_2 x) = c_1 \ln x + c_1 \ln c_2 = A \ln x + B$:
   * Two independent arbitrary constants $\implies$ **order 2**.
4. $y = (c_1 + c_2)\cos(x + c_3) - c_4 e^{x + c_5}$:
   * Can be rewritten as $y = A \cos(x + c_3) - B e^x$.
   * Number of independent parameters $= 1 + 1 + 1 = 3 \implies$ **order 3**.


---


### 1.3 Degree of a Differential Equation
* **Definition:** The degree of a differential equation is the power (exponent) of the highest order derivative occurring in it, after the differential equation has been cleared of radicals and fractions so that it is expressed as a **polynomial in all derivatives**.
* **Strict Existence Condition:** If the differential equation cannot be written as a polynomial in the differential coefficients, its **degree is not defined**.


| Differential Equation | Form Expressible as Polynomial in Derivatives? | Order | Degree | Rigorous Explanation |
| :--- | :--- | :--- | :--- | :--- |
| $\frac{d^2y}{dx^2} + 3\left(\frac{dy}{dx}\right)^2 + y = 0$ | Yes (Polynomial in $y'', y'$) | $2$ | $1$ | Highest derivative is $y''$ with exponent $1$. |
| $\left[1 + \left(\frac{dy}{dx}\right)^2\right]^{3/2} = k \frac{d^2y}{dx^2}$ | Squaring both sides: $\left[1 + (y')^2\right]^3 = k^2 (y'')^2$ | $2$ | $2$ | Clearing fractional power yields $(y'')^2$. |
| $\frac{d^2y}{dx^2} + \sin\left(\frac{dy}{dx}\right) = 0$ | No ($\sin(y')$ has infinite series $\sum \frac{(-1)^n (y')^{2n+1}}{(2n+1)!}$) | $2$ | **Not Defined** | Derivative is trapped inside a transcendental function. |
| $e^{dy/dx} = x + y$ | Can be written as $\frac{dy}{dx} = \ln(x + y)$ | $1$ | $1$ | Derivative is isolated; RHS is a function of $x, y$ (no derivatives in exponent). |
| $y + \frac{dy}{dx} = \sin x$ | Yes (Derivative is linear) | $1$ | $1$ | Transcendental function depends on $x$, not on a derivative. |
| $\ln\left(\frac{d^2y}{dx^2}\right) = ax + by$ | Equivalent to $\frac{d^2y}{dx^2} = e^{ax+by}$ | $2$ | $1$ | Highest derivative is algebraic with power $1$. |
| $\left(\frac{d^3y}{dx^3}\right)^2 + \ln\left(\frac{d^2y}{dx^2}\right) = 0$ | No (Cannot simultaneously clear $y'''$ and $\ln(y'')$ into a polynomial) | $3$ | **Not Defined** | Derivative $y''$ remains argument of logarithm. |


---


### 1.4 General, Particular, and Singular Solutions
* **General Solution (Complete Primitive):** A solution containing a number of arbitrary constants equal to the order of the differential equation. Geometrically represents an $n$-parameter family of curves.
* **Particular Solution:** A solution obtained from the general solution by assigning specific numerical values to the arbitrary constants, typically dictated by initial value conditions ($y(x_0) = y_0$) or boundary value conditions.
* **Singular Solution:** A solution that cannot be obtained from the general solution by any choice of arbitrary constants. Geometrically represents the envelope of the family of curves represented by the general solution.


---


## 2. Visual Representation: Direction Fields and Integral Curves


![Direction Fields and Integral Curves](/media/differential_equations_slope_field_and_integral_curves.webp)
*Description: (a) Direction field and concentric circular integral curves for $\frac{dy}{dx} = -\frac{x}{y}$, yielding the family $x^2 + y^2 = C$. (b) Direction field and asymptotic integral trajectories for the first-order linear equation $\frac{dy}{dx} + y = x$, with general solution $y = x - 1 + C e^{-x}$ converging toward the slant asymptote $y = x - 1$.*


### 2.1 Slope Field Theory
* At every point $(x, y)$ where $f(x, y)$ is defined, the differential equation $\frac{dy}{dx} = f(x, y)$ assigns a unique slope $m = f(x, y)$ to the tangent vector of the integral curve passing through that point.
* **Isoclines:** Curves defined by $f(x, y) = c$ (constant). Along an isocline, all slope field vectors have the identical inclination $\theta = \arctan c$.
* **Integral Curve:** A continuous, differentiable curve in the $xy$-plane that is tangent to the direction field vector at every point along its trajectory.


---


## 3. Formation of Differential Equations


### 3.1 Systematic Elimination Protocol
To construct the differential equation of an $n$-parameter family of curves $f(x, y, c_1, c_2, \dots, c_n) = 0$:
1. Differentiate the given equation with respect to $x$ successively $n$ times to obtain $n$ derivative relations:
   $$\frac{df}{dx} = 0, \quad \frac{d^2f}{dx^2} = 0, \quad \dots, \quad \frac{d^n f}{dx^n} = 0$$
2. Using the original equation and the $n$ differentiated equations, eliminate the $n$ arbitrary constants $c_1, c_2, \dots, c_n$.
3. The resulting eliminant equation involves only $x, y, y', y'', \dots, y^{(n)}$ and is of order $n$.


### 3.2 Standard Geometric Families and Their Differential Equations


#### (a) Family of All Non-Vertical Straight Lines in a Plane ($y = mx + c$)
* Differentiating once: $y' = m$.
* Differentiating twice: $y'' = 0$.
* **Differential Equation:** $\frac{d^2y}{dx^2} = 0$ (Order 2, Degree 1).


#### (b) Family of All Circles Touching the $x$-axis at the Origin
* Equation: $x^2 + (y - a)^2 = a^2 \implies x^2 + y^2 - 2ay = 0 \implies \frac{x^2 + y^2}{y} = 2a$.
* Differentiating with respect to $x$:
  $$\frac{y(2x + 2y y') - (x^2 + y^2)y'}{y^2} = 0 \implies 2xy + 2y^2 y' - x^2 y' - y^2 y' = 0$$
* **Differential Equation:** $(y^2 - x^2)\frac{dy}{dx} + 2xy = 0 \iff 2xy \frac{dx}{dy} + x^2 - y^2 = 0$.


#### (c) Family of All Parabolas Having Their Axis Parallel to the $x$-axis
* Equation: $(y - k)^2 = 4a(x - h)$, where $h, k, a$ are 3 arbitrary parameters.
* Differentiating: $2(y - k)y' = 4a \implies (y - k)y' = 2a$.
* Differentiating again: $(y')^2 + (y - k)y'' = 0 \implies y - k = -\frac{(y')^2}{y''}$.
* Differentiating a third time:
  $$2y' y'' + y'(y'') + (y - k)y''' = 0 \implies 3y' y'' - \frac{(y')^2 y'''}{y''} = 0$$
* **Differential Equation:** $3(y'')^2 - y' y''' = 0 \iff 3\left(\frac{d^2y}{dx^2}\right)^2 - \frac{dy}{dx}\frac{d^3y}{dx^3} = 0$ (Order 3, Degree 1).


#### (d) Family of Confocal and Coaxial Parabolas ($y^2 = 4a(x + a)$)
* Differentiating: $2y y' = 4a \implies a = \frac{1}{2} y y'$.
* Substituting $a$ back into the original curve:
  $$y^2 = 4\left(\frac{1}{2}y y'\right)\left[x + \frac{1}{2}y y'\right] = 2y y' x + (y y')^2$$
  Dividing by $y$ ($y \ne 0$):
* **Differential Equation:** $y\left(\frac{dy}{dx}\right)^2 + 2x \frac{dy}{dx} - y = 0$.
* *Self-Orthogonal Invariant:* Replacing $\frac{dy}{dx} \to -\frac{dx}{dy}$ reproduces the exact same differential equation!


---


## 4. First-Order First-Degree Differential Equations: Methods of Solution


### 4.1 Type I: Variable Separable Form
$$\mathbf{f(x)\,dx + g(y)\,dy = 0 \implies \int f(x)\,dx + \int g(y)\,dy = C}$$


#### Canonical Example:
Solve $(1 + x^2)(1 + y) dy + (1 + y^2)(1 + x) dx = 0$:
$$\frac{1 + y}{1 + y^2} dy + \frac{1 + x}{1 + x^2} dx = 0$$
Splitting fractions:
$$\left[\frac{1}{1 + y^2} + \frac{1}{2}\frac{2y}{1 + y^2}\right] dy + \left[\frac{1}{1 + x^2} + \frac{1}{2}\frac{2x}{1 + x^2}\right] dx = 0$$
Integrating:
$$\arctan y + \frac{1}{2}\ln(1 + y^2) + \arctan x + \frac{1}{2}\ln(1 + x^2) = C$$
$$\arctan\left(\frac{x + y}{1 - xy}\right) + \frac{1}{2}\ln\left[(1 + x^2)(1 + y^2)\right] = C$$


---


### 4.2 Type II: Reducible to Variable Separable via Linear Transformation
$$\mathbf{\frac{dy}{dx} = f(ax + by + c)}$$
* **Substitution:** Let $u = ax + by + c$.
* Differentiating with respect to $x$: $\frac{du}{dx} = a + b\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{b}\left(\frac{du}{dx} - a\right)$.
* The differential equation transforms to:
  $$\frac{1}{b}\left(\frac{du}{dx} - a\right) = f(u) \implies \frac{du}{dx} = a + b f(u) \implies \frac{du}{a + b f(u)} = dx$$
* Integrating both sides: $\int \frac{du}{a + b f(u)} = x + C$.


#### High-Yield Example:
Solve $\frac{dy}{dx} = \sin^2(x + 3y) + 5$:
* Let $u = x + 3y \implies \frac{du}{dx} = 1 + 3\frac{dy}{dx} \implies \frac{dy}{dx} = \frac{1}{3}\left(\frac{du}{dx} - 1\right)$.
* $\frac{1}{3}\left(\frac{du}{dx} - 1\right) = \sin^2 u + 5 \implies \frac{du}{dx} = 3\sin^2 u + 16$.
* Separating variables:
  $$\int \frac{du}{3\sin^2 u + 16} = \int dx = x + C$$
  Dividing numerator and denominator by $\cos^2 u$:
  $$\int \frac{\sec^2 u \, du}{3\tan^2 u + 16(1 + \tan^2 u)} = \int \frac{\sec^2 u \, du}{19\tan^2 u + 16} = x + C$$
  Let $t = \tan u$:
  $$\frac{1}{19}\int \frac{dt}{t^2 + (4/\sqrt{19})^2} = \frac{1}{19} \cdot \frac{\sqrt{19}}{4} \arctan\left(\frac{\sqrt{19}\tan u}{4}\right) = \frac{1}{4\sqrt{19}}\arctan\left(\frac{\sqrt{19}\tan(x + 3y)}{4}\right) = x + C$$


---


### 4.3 Type III: Polar Coordinate Transformations
When combinations of $x dx + y dy$ and $x dy - y dx$ appear:
* **Cartesian to Polar:** $x = r\cos\theta, \quad y = r\sin\theta$.
* **Fundamental Differentials:**
  $$\mathbf{x^2 + y^2 = r^2 \implies x\,dx + y\,dy = r\,dr}$$
  $$\mathbf{\tan\theta = \frac{y}{x} \implies \sec^2\theta\,d\theta = \frac{x\,dy - y\,dx}{x^2} \implies x\,dy - y\,dx = r^2\,d\theta}$$


#### Illustrative Example:
Solve $(x\,dx + y\,dy) = \sqrt{a^2 - x^2 - y^2}\,(x\,dy - y\,dx)$:
* Substituting polar differentials:
  $$r\,dr = \sqrt{a^2 - r^2}\,(r^2\,d\theta) \implies \frac{dr}{r\sqrt{a^2 - r^2}} = d\theta$$
* Integrating: Let $r = \frac{1}{t}$ or $r = a\sin\phi$:
  $$-\frac{1}{a}\ln\left|\frac{a + \sqrt{a^2 - r^2}}{r}\right| = \theta + C \implies \sqrt{a^2 - x^2 - y^2} + a = C r e^{-a\theta}$$


---


### 4.4 Type IV: Homogeneous Differential Equations
A function $f(x, y)$ is homogeneous of degree $n$ if $f(\lambda x, \lambda y) = \lambda^n f(x, y)$.
A first-order equation is **homogeneous** if:
$$\mathbf{\frac{dy}{dx} = \frac{f(x, y)}{g(x, y)} = F\left(\frac{y}{x}\right)}$$
where $f$ and $g$ are homogeneous polynomials of the same degree.


#### Standard Solution Procedure:
1. Put $y = v x \implies \frac{dy}{dx} = v + x \frac{dv}{dx}$.
2. The equation reduces to:
   $$v + x \frac{dv}{dx} = F(v) \implies x \frac{dv}{dx} = F(v) - v \implies \mathbf{\frac{dv}{F(v) - v} = \frac{dx}{x}}$$
3. Integrate both sides and replace $v = \frac{y}{x}$.
* *Note:* If the equation is of the form $\frac{dx}{dy} = G\left(\frac{x}{y}\right)$, put $x = v y \implies \frac{dx}{dy} = v + y \frac{dv}{dy}$.


---


### 4.5 Type V: Non-Homogeneous Linear Fractional Equations
$$\mathbf{\frac{dy}{dx} = \frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}}$$


#### Case 1: $\frac{a_1}{a_2} \ne \frac{b_1}{b_2}$ (Intersecting Lines)
* Put $x = X + h$ and $y = Y + k$, where $h, k$ are constants chosen to eliminate constant terms:
  $$a_1 h + b_1 k + c_1 = 0 \quad \text{and} \quad a_2 h + b_2 k + c_2 = 0$$
* Since $a_1 b_2 - a_2 b_1 \ne 0$, unique values for $h, k$ exist.
* The transformed equation is homogeneous in $X, Y$:
  $$\frac{dY}{dX} = \frac{a_1 X + b_1 Y}{a_2 X + b_2 Y}$$
  Solve by putting $Y = v X$.


#### Case 2: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = m$ (Parallel Lines)
* Then $a_1 x + b_1 y = m(a_2 x + b_2 y)$.
* Substitute $t = a_2 x + b_2 y$, which immediately reduces the equation to **Type II (Variable Separable)**!


#### Case 3: $b_1 + a_2 = 0$ (Cross-Coefficients are Negatives)
* The equation $(a_2 x + b_2 y + c_2) dy = (a_1 x + b_1 y + c_1) dx$ can be directly grouped into exact differentials:
  $$a_2 x dy + b_1 y dx = a_2(x dy - y dx) \quad \text{since } b_1 = -a_2$$
  Or simply expand: $(a_1 x + c_1)dx - (b_2 y + c_2)dy + (b_1 y dx - a_2 x dy) = 0$, which integrates term by term without any substitutions!


---


### 4.6 Type VI: Exact Differential Equations & Integrating by Inspection
An equation $M(x, y) dx + N(x, y) dy = 0$ is **exact** if and only if:
$$\mathbf{\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}}$$
When exact, the general solution is:
$$\mathbf{\int_{y = \text{constant}} M\,dx + \int (\text{terms of } N \text{ independent of } x)\,dy = C}$$


#### High-Yield Inspection Formulas:


| Expression | Exact Differential Identity |
| :--- | :--- |
| $x\,dy + y\,dx$ | $d(xy)$ |
| $\frac{x\,dy - y\,dx}{x^2}$ | $d\left(\frac{y}{x}\right)$ |
| $\frac{y\,dx - x\,dy}{y^2}$ | $d\left(\frac{x}{y}\right)$ |
| $\frac{x\,dy - y\,dx}{xy}$ | $d\left(\ln\frac{y}{x}\right) = \frac{dy}{y} - \frac{dx}{x}$ |
| $\frac{x\,dy - y\,dx}{x^2 + y^2}$ | $d\left(\arctan\frac{y}{x}\right)$ |
| $\frac{y\,dx - x\,dy}{x^2 + y^2}$ | $d\left(\arctan\frac{x}{y}\right)$ |
| $\frac{x\,dx + y\,dy}{x^2 + y^2}$ | $d\left(\frac{1}{2}\ln(x^2 + y^2)\right) = d(\ln\sqrt{x^2 + y^2})$ |
| $\frac{x\,dx + y\,dy}{\sqrt{x^2 + y^2}}$ | $d\left(\sqrt{x^2 + y^2}\right)$ |
| $\frac{x\,dy + y\,dx}{xy}$ | $d(\ln(xy))$ |
| $\frac{x\,dy - y\,dx}{x^2 - y^2}$ | $d\left(\frac{1}{2}\ln\left|\frac{x + y}{x - y}\right|\right)$ |
| $\frac{x\,dy + y\,dx}{(xy)^n}$ | $d\left(\frac{-1}{(n - 1)(xy)^{n-1}}\right) \quad (n \ne 1)$ |
| $e^x(y\,dx + dy)$ | $d(y e^x)$ |
| $e^y(dx + x\,dy)$ | $d(x e^y)$ |


---


## 5. First-Order Linear Differential Equations (LDE)


### 5.1 The Master Leibniz Form
$$\mathbf{\frac{dy}{dx} + P(x)\,y = Q(x)}$$
where $P(x)$ and $Q(x)$ are continuous functions of $x$ alone (or constants).


#### Complete Mathematical Derivation of the Integrating Factor:
1. Multiply the equation by an unknown non-zero function $\mu(x)$:
   $$\mu(x)\frac{dy}{dx} + \mu(x)P(x)y = \mu(x)Q(x)$$
2. We require the LHS to be the exact total derivative of the product $\mu(x)y$:
   $$\frac{d}{dx}[\mu(x)y] = \mu(x)\frac{dy}{dx} + \mu'(x)y$$
3. Equating coefficients of $y$:
   $$\mu'(x) = \mu(x)P(x) \implies \frac{d\mu}{\mu} = P(x)dx \implies \ln \mu(x) = \int P(x)dx \implies \mathbf{\mu(x) = e^{\int P(x)\,dx}}$$
4. Substituting $\mu(x)$ into the differential equation:
   $$\frac{d}{dx}\left[y \cdot e^{\int P(x)\,dx}\right] = Q(x) e^{\int P(x)\,dx}$$
5. Integrating with respect to $x$:
   $$\mathbf{y \cdot e^{\int P(x)\,dx} = \int Q(x) e^{\int P(x)\,dx}\,dx + C}$$


---


### 5.2 The Alternate Form (Linear in $x$)
When an equation contains $\left(\frac{dy}{dx}\right)$ with non-linear terms in $y$, invert the derivative to check if it is linear in $x$:
$$\mathbf{\frac{dx}{dy} + P(y)\,x = Q(y)}$$
* **Integrating Factor:** $\mathbf{\text{I.F.} = e^{\int P(y)\,dy}}$.
* **General Solution:**
  $$\mathbf{x \cdot e^{\int P(y)\,dy} = \int Q(y) e^{\int P(y)\,dy}\,dy + C}$$


---


### 5.3 Bernoulli's Differential Equation (Reducible to Linear)
$$\mathbf{\frac{dy}{dx} + P(x)\,y = Q(x)\,y^n \quad (n \ne 0, 1)}$$
* **Derivation & Reduction:**
  1. Divide through by $y^n$:
     $$y^{-n}\frac{dy}{dx} + P(x)y^{1-n} = Q(x)$$
  2. Let $z = y^{1-n}$. Differentiating with respect to $x$:
     $$\frac{dz}{dx} = (1 - n)y^{-n}\frac{dy}{dx} \implies y^{-n}\frac{dy}{dx} = \frac{1}{1 - n}\frac{dz}{dx}$$
  3. Substituting into the equation:
     $$\frac{1}{1 - n}\frac{dz}{dx} + P(x)z = Q(x) \implies \mathbf{\frac{dz}{dx} + (1 - n)P(x)\,z = (1 - n)Q(x)}$$
  4. This is strictly linear in $z$! Solve using $\text{I.F.} = e^{\int (1-n)P(x)dx}$ and back-substitute $z = y^{1-n}$.


---


### 5.4 Generalized Substitution for Linear Form
$$\mathbf{f'(y)\frac{dy}{dx} + P(x)\,f(y) = Q(x)}$$
* Substitute $u = f(y) \implies \frac{du}{dx} = f'(y)\frac{dy}{dx}$.
* The equation becomes: $\mathbf{\frac{du}{dx} + P(x)\,u = Q(x)}$.
* Canonical examples:
  * $\sec^2 y \frac{dy}{dx} + P(x)\tan y = Q(x) \implies \text{let } u = \tan y$.
  * $\frac{1}{y}\frac{dy}{dx} + P(x)\ln y = Q(x) \implies \text{let } u = \ln y$.
  * $\cos y \frac{dy}{dx} + P(x)\sin y = Q(x) \implies \text{let } u = \sin y$.


---


## 6. Clairaut's Equation and Singular Solutions


### 6.1 Clairaut's Form
$$\mathbf{y = x\,p + f(p), \quad \text{where } p = \frac{dy}{dx}}$$


#### Complete Analytical Derivation:
1. Differentiate both sides with respect to $x$:
   $$\frac{dy}{dx} = p = p + x\frac{dp}{dx} + f'(p)\frac{dp}{dx}$$
2. Subtracting $p$ from both sides:
   $$\mathbf{\frac{dp}{dx}\left[x + f'(p)\right] = 0}$$
3. This condition yields two distinct branches:
   * **Branch A (General Solution):** $\frac{dp}{dx} = 0 \implies p = C$ (constant).
     Substituting $p = C$ into Clairaut's equation yields a **family of straight lines**:
     $$\mathbf{y = C x + f(C)}$$
   * **Branch B (Singular Solution):** $x + f'(p) = 0$.
     Eliminating $p$ between $x + f'(p) = 0$ and $y = xp + f(p)$ yields a relation $\phi(x, y) = 0$.
     This curve represents the **envelope** of the family of straight lines $y = Cx + f(C)$ and is a singular solution containing no arbitrary constant.


#### High-Yield Example:
Solve $y = x\frac{dy}{dx} + \frac{a}{dy/dx}$:
* In Clairaut's notation: $y = x p + \frac{a}{p}$.
* General solution: replace $p \to C \implies \mathbf{y = C x + \frac{a}{C}}$ (family of tangents to a parabola).
* Singular solution:
  $$\frac{dp}{dx}\left(x - \frac{a}{p^2}\right) = 0 \implies x = \frac{a}{p^2} \implies p = \sqrt{\frac{a}{x}}$$
  Substituting into $y = xp + a/p$:
  $$y = x\sqrt{\frac{a}{x}} + a\sqrt{\frac{x}{a}} = 2\sqrt{ax} \implies \mathbf{y^2 = 4ax}$$
  The singular solution is precisely the **parabola $y^2 = 4ax$**!


---


## 7. Orthogonal Trajectories


![Orthogonal Trajectories](/media/orthogonal_trajectories_family_of_curves.webp)
*Description: Orthogonal trajectories demonstrating mutual perpendicularity ($m_1 \cdot m_2 = -1$). The family of rectangular hyperbolas $xy = c$ (blue) is intersected everywhere at $90^\circ$ by the orthogonal family of hyperbolas $x^2 - y^2 = k$ (red).*


### 7.1 Definition and Invariants
* An **orthogonal trajectory** of a family of curves is a curve that intersects every member of the given family at right angles ($90^\circ$).


### 7.2 Protocol for Finding Orthogonal Trajectories


#### (a) In Cartesian Coordinates:
1. Let the family of curves be $F(x, y, c) = 0$, where $c$ is an arbitrary constant.
2. Differentiate with respect to $x$ and eliminate $c$ to obtain the differential equation of the given family:
   $$f\left(x, y, \frac{dy}{dx}\right) = 0$$
3. Since the orthogonal trajectory must have perpendicular slope ($m_{\text{new}} = -\frac{1}{m_{\text{old}}}$), replace:
   $$\mathbf{\frac{dy}{dx} \longrightarrow -\frac{dx}{dy} = -\frac{1}{dy/dx}}$$
4. Solve the resulting differential equation $f\left(x, y, -\frac{dx}{dy}\right) = 0$. The solution is the orthogonal family.


#### (b) In Polar Coordinates:
1. Let the given family be $F(r, \theta, c) = 0$.
2. Differentiate with respect to $\theta$ and eliminate $c$ to obtain:
   $$f\left(r, \theta, \frac{dr}{d\theta}\right) = 0$$
3. Replace:
   $$\mathbf{\frac{dr}{d\theta} \longrightarrow -r^2\frac{d\theta}{dr}}$$
4. Solve the resulting differential equation.


#### Classical Examples:
* **Concentric Circles $x^2 + y^2 = c^2$:**
  $$2x + 2y y' = 0 \implies y' = -\frac{x}{y} \implies \text{replace } y' \to -\frac{1}{y'}: \quad -\frac{1}{y'} = -\frac{x}{y} \implies \frac{dy}{dx} = \frac{y}{x}$$
  Separating variables: $\frac{dy}{y} = \frac{dx}{x} \implies \ln y = \ln x + \ln k \implies \mathbf{y = kx}$ (Family of radial straight lines through the origin).
* **Parabolas $y^2 = 4ax$:**
  $$2y y' = 4a = \frac{y^2}{x} \implies y' = \frac{y}{2x} \implies \text{replace } y' \to -\frac{1}{y'}: \quad -\frac{dx}{dy} = \frac{y}{2x}$$
  $$2x dx + y dy = 0 \implies \mathbf{2x^2 + y^2 = C^2}$$ (Family of coaxial ellipses!).


---


## 8. Differential Geometry: Tangent, Normal, Subtangent, and Subnormal


![Differential Geometry of Curves](/media/tangent_normal_subtangent_subnormal_geometry.webp)
*Description: Geometric quantities associated with a point $P(x, y)$ on a differentiable curve $y = f(x)$. Depicts the tangent line $PT$, normal line $PN$, ordinate $PM$, subtangent length $TM = \left|\frac{y}{dy/dx}\right|$, subnormal length $MN = \left|y \frac{dy}{dx}\right|$, and intercepts on the coordinate axes.*


### 8.1 Geometric Identities Reference Table
Let $P(x, y)$ be a point on the curve $y = f(x)$, where $m = \frac{dy}{dx} \ne 0$:


| Geometric Entity | Mathematical Formula | Differential Formulation |
| :--- | :--- | :--- |
| **Slope of Tangent** | $m = \tan\psi$ | $\frac{dy}{dx}$ |
| **Slope of Normal** | $-\frac{1}{m} = -\cot\psi$ | $-\frac{dx}{dy}$ |
| **Equation of Tangent** | $Y - y = m(X - x)$ | $Y - y = \frac{dy}{dx}(X - x)$ |
| **Equation of Normal** | $Y - y = -\frac{1}{m}(X - x)$ | $Y - y = -\frac{dx}{dy}(X - x)$ |
| **$x$-intercept of Tangent ($X_T$)** | $x - \frac{y}{m}$ | $x - y\frac{dx}{dy}$ |
| **$y$-intercept of Tangent ($Y_T$)** | $y - mx$ | $y - x\frac{dy}{dx}$ |
| **$x$-intercept of Normal ($X_N$)** | $x + my$ | $x + y\frac{dy}{dx}$ |
| **$y$-intercept of Normal ($Y_N$)** | $y + \frac{x}{m}$ | $y + x\frac{dx}{dy}$ |
| **Length of Tangent ($PT$)** | $|y|\sqrt{1 + \frac{1}{m^2}} = \left|\frac{y}{m}\right|\sqrt{1 + m^2}$ | $|y|\sqrt{1 + \left(\frac{dx}{dy}\right)^2}$ |
| **Length of Normal ($PN$)** | $|y|\sqrt{1 + m^2}$ | $|y|\sqrt{1 + \left(\frac{dy}{dx}\right)^2}$ |
| **Length of Subtangent ($TM$)** | $\left|\frac{y}{m}\right|$ | $\left|y \frac{dx}{dy}\right| = \left|\frac{y}{y'}\right|$ |
| **Length of Subnormal ($MN$)** | $|y \cdot m|$ | $\left|y \frac{dy}{dx}\right| = |y y'|$ |


---


## 9. Physical Modeling and Growth/Decay Dynamics


![First-Order Linear and Physical Dynamics](/media/first_order_linear_and_decay_dynamics.webp)
*Description: (a) Newton's Law of Cooling trajectories for various initial temperatures $T_0$, asymptotically decaying toward ambient temperature $T_s = 25^\circ\text{C}$. (b) First-order growth curve in an RL electrical circuit ($L \frac{di}{dt} + Ri = E$), illustrating current saturation at $I_{\max} = E/R$ with characteristic time constant $\tau = L/R$.*


### 9.1 Newton's Law of Cooling
* **Physical Law:** The rate of loss of heat (or temperature drop) of a body is directly proportional to the temperature difference between the body and its surroundings:
  $$\mathbf{\frac{dT}{dt} = -k(T - T_s), \quad k > 0}$$
* **Analytical Solution:**
  $$\frac{dT}{T - T_s} = -k\,dt \implies \ln(T - T_s) = -kt + C \implies \mathbf{T(t) = T_s + (T_0 - T_s)e^{-kt}}$$
  where $T_0 = T(0)$ is the initial temperature and $T_s$ is the ambient temperature.


### 9.2 Radioactive Decay and Population Dynamics
* **Radioactive Decay:** $\frac{dN}{dt} = -\lambda N \implies \mathbf{N(t) = N_0 e^{-\lambda t}}$.
  * **Half-life ($t_{1/2}$):** $\frac{N_0}{2} = N_0 e^{-\lambda t_{1/2}} \implies \mathbf{t_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda}}$.
* **Uninhibited Population Growth:** $\frac{dP}{dt} = k P \implies \mathbf{P(t) = P_0 e^{kt}}$.
* **Logistic Growth (Carrying Capacity $K$):**
  $$\frac{dP}{dt} = k P\left(1 - \frac{P}{K}\right) \implies P(t) = \frac{K}{1 + \left(\frac{K - P_0}{P_0}\right)e^{-kt}}$$


### 9.3 Electrical Circuits (First-Order RL and RC Transients)
* **Series RL Circuit:** $L \frac{di}{dt} + R i = E$.
  * Integrating Factor: $\text{I.F.} = e^{\int (R/L) dt} = e^{Rt/L}$.
  * Solution with $i(0) = 0$:
    $$i(t) e^{Rt/L} = \int \frac{E}{L} e^{Rt/L} dt = \frac{E}{R} e^{Rt/L} + C \implies \mathbf{i(t) = \frac{E}{R}\left(1 - e^{-t/\tau}\right)}$$
    where $\tau = \frac{L}{R}$ is the inductive time constant. At $t = \tau$, $i(\tau) = (1 - e^{-1})I_{\max} \approx 63.2\% I_{\max}$.


---


## 10. Curated High-Yield Problem Archetypes with Detailed Solutions


### Archetype 1: Inversion to Linear in $x$
**Problem:** Solve the differential equation:
$$(x + 2y^3)\frac{dy}{dx} = y \quad (y > 0)$$


**Step-by-step Solution:**
1. Notice that $y^3$ makes the equation strongly non-linear in $y$, and $\frac{dy}{dx}$ cannot be easily separated.
2. Invert the derivative to treat $x$ as the dependent variable:
   $$\frac{dx}{dy} = \frac{x + 2y^3}{y} = \frac{x}{y} + 2y^2 \implies \mathbf{\frac{dx}{dy} - \frac{1}{y}x = 2y^2}$$
3. This is a First-Order Linear Differential Equation in $x$, where $P(y) = -\frac{1}{y}$ and $Q(y) = 2y^2$.
4. Calculate the Integrating Factor:
   $$\text{I.F.} = e^{\int P(y) dy} = e^{\int -\frac{1}{y} dy} = e^{-\ln y} = e^{\ln(y^{-1})} = \frac{1}{y}$$
5. Apply the general solution formula:
   $$x \cdot (\text{I.F.}) = \int Q(y) \cdot (\text{I.F.}) dy + C$$
   $$x \cdot \frac{1}{y} = \int 2y^2 \cdot \frac{1}{y} dy + C = \int 2y dy + C = y^2 + C$$
6. **Final Result:**
   $$\mathbf{x = y^3 + C y}$$


---


### Archetype 2: Homogeneous with Logarithmic/Trigonometric Arguments
**Problem:** Solve the initial value problem:
$$x \frac{dy}{dx} = y + x \tan\left(\frac{y}{x}\right), \quad \text{with } y(1) = \frac{\pi}{2}$$


**Step-by-step Solution:**
1. Divide by $x$:
   $$\frac{dy}{dx} = \frac{y}{x} + \tan\left(\frac{y}{x}\right)$$
   This is homogeneous since the RHS is a pure function of $\frac{y}{x}$.
2. Substitute $y = v x \implies \frac{dy}{dx} = v + x \frac{dv}{dx}$:
   $$v + x \frac{dv}{dx} = v + \tan v \implies x \frac{dv}{dx} = \tan v$$
3. Separate variables:
   $$\frac{dv}{\tan v} = \frac{dx}{x} \implies \cot v \, dv = \frac{dx}{x}$$
4. Integrate both sides:
   $$\int \cot v \, dv = \int \frac{dx}{x} \implies \ln|\sin v| = \ln|x| + \ln C = \ln|C x|$$
   $$\sin v = C x \implies \sin\left(\frac{y}{x}\right) = C x$$
5. Apply the initial condition $y(1) = \frac{\pi}{2}$:
   $$\sin\left(\frac{\pi/2}{1}\right) = C(1) \implies \sin\left(\frac{\pi}{2}\right) = 1 = C \implies C = 1$$
6. **Final Result:**
   $$\mathbf{\sin\left(\frac{y}{x}\right) = x \iff y = x \arcsin x}$$


---


### Archetype 3: Exact Differential via Inspection
**Problem:** Find the equation of the curve passing through $(1, 1)$ satisfying:
$$(x^3 + x y^2 + y) dx + (y^3 + x^2 y + x) dy = 0$$


**Step-by-step Solution:**
1. Regroup terms based on degree and recognizable differential groups:
   $$x(x^2 + y^2) dx + y(x^2 + y^2) dy + (y dx + x dy) = 0$$
2. Factor $(x^2 + y^2)$:
   $$(x^2 + y^2)(x dx + y dy) + (x dy + y dx) = 0$$
3. Recognize the exact differentials:
   * $x dx + y dy = \frac{1}{2} d(x^2 + y^2)$
   * $x dy + y dx = d(xy)$
4. Substitute these relations:
   $$(x^2 + y^2) \cdot \frac{1}{2} d(x^2 + y^2) + d(xy) = 0$$
5. Integrate directly:
   $$\frac{1}{2} \int (x^2 + y^2) \, d(x^2 + y^2) + \int d(xy) = C$$
   $$\frac{1}{2} \cdot \frac{(x^2 + y^2)^2}{2} + xy = C \implies \frac{1}{4}(x^2 + y^2)^2 + xy = C$$
6. Apply initial condition $(1, 1)$:
   $$\frac{1}{4}(1 + 1)^2 + (1)(1) = \frac{1}{4}(4) + 1 = 1 + 1 = 2 \implies C = 2$$
7. **Final Result:**
   $$\mathbf{(x^2 + y^2)^2 + 4xy = 8}$$


---


### Archetype 4: Geometrical Curve Identification from Tangent Properties
**Problem:** Find the Cartesian equation of all curves for which the segment of any tangent line contained between the coordinate axes is bisected by the point of contact.


**Step-by-step Solution:**
1. Let $P(x, y)$ be the point of contact on the curve.
2. The equation of the tangent line at $P(x, y)$ is:
   $$Y - y = \frac{dy}{dx}(X - x)$$
3. Find the intercepts on the coordinate axes:
   * Setting $Y = 0$: $X_A = x - \frac{y}{dy/dx} = x - y \frac{dx}{dy}$. Thus $A = \left(x - y \frac{dx}{dy}, 0\right)$.
   * Setting $X = 0$: $Y_B = y - x \frac{dy}{dx}$. Thus $B = \left(0, y - x \frac{dy}{dx}\right)$.
4. The midpoint of segment $AB$ is given by:
   $$\text{Midpoint} = \left(\frac{X_A + 0}{2}, \frac{0 + Y_B}{2}\right) = \left(\frac{x - y \frac{dx}{dy}}{2}, \frac{y - x \frac{dy}{dx}}{2}\right)$$
5. Since $P(x, y)$ bisects $AB$:
   $$\frac{x - y \frac{dx}{dy}}{2} = x \implies x - y \frac{dx}{dy} = 2x \implies -y \frac{dx}{dy} = x \implies \frac{dx}{x} + \frac{dy}{y} = 0$$
   (The $y$-coordinate condition $\frac{y - x \frac{dy}{dx}}{2} = y$ yields the identical differential equation).
6. Integrating $\frac{dx}{x} + \frac{dy}{y} = 0$:
   $$\ln|x| + \ln|y| = \ln|C| \implies \mathbf{xy = C}$$
7. **Conclusion:** The family of curves is the family of **rectangular hyperbolas** whose asymptotes are the coordinate axes!


---


## 11. Comprehensive JEE Main & JEE Advanced Previous Year Questions (PYQs)


### PYQ 1: JEE Main 2020 (Differential Equation of a Family of Parabolas)
**Problem:** The differential equation of the family of curves $x^2 = 4b(y + b)$, where $b \in \mathbb{R}$ is an arbitrary parameter, is:
(1) $x(y')^2 = x - 2yy'$
(2) $x y'' = y'$
(3) $x(y')^2 = x + 2yy'$
(4) $x(y')^2 = 2yy' - x$


**Detailed Solution:**
1. The given family is:
   $$x^2 = 4by + 4b^2 \quad \text{--- (1)}$$
   This is a 1-parameter family of parabolas with axis along the $y$-axis.
2. Differentiate with respect to $x$:
   $$2x = 4b y' + 0 \implies 2x = 4b y' \implies 2b = \frac{x}{y'} \implies b = \frac{x}{2y'}$$
3. Substitute $b = \frac{x}{2y'}$ back into equation (1):
   $$x^2 = 4\left(\frac{x}{2y'}\right)y + 4\left(\frac{x}{2y'}\right)^2$$
   $$x^2 = \frac{2xy}{y'} + \frac{x^2}{(y')^2}$$
4. Multiply through by $(y')^2$:
   $$x^2 (y')^2 = 2xy y' + x^2$$
5. Divide through by $x$ ($x \ne 0$):
   $$\mathbf{x (y')^2 = 2yy' + x \iff x(y')^2 = x + 2yy'}$$
* **Correct Option:** **(3)**


---


### PYQ 2: JEE Main 2020 (Linear Differential Equation with Boundary Value)
**Problem:** If for $x \ge 0$, $y = y(x)$ is the solution of the differential equation:
$$(x + 1)dy = \left[(x + 1)^2 + y - 3\right]dx, \quad \text{with } y(2) = 0$$
then $y(3)$ is equal to:
(1) $3$
(2) $4$
(3) $2$
(4) $5$


**Detailed Solution:**
1. Rearrange the differential equation into standard first-order linear form:
   $$(x + 1)\frac{dy}{dx} - y = (x + 1)^2 - 3 \implies \mathbf{\frac{dy}{dx} - \frac{1}{x + 1}y = (x + 1) - \frac{3}{x + 1}}$$
2. Identify $P(x) = -\frac{1}{x + 1}$ and $Q(x) = (x + 1) - \frac{3}{x + 1}$.
3. Compute the Integrating Factor:
   $$\text{I.F.} = e^{\int -\frac{1}{x + 1}dx} = e^{-\ln(x + 1)} = \frac{1}{x + 1}$$
4. General solution:
   $$y \cdot \frac{1}{x + 1} = \int \left[(x + 1) - \frac{3}{x + 1}\right]\frac{1}{x + 1} dx + C = \int \left[1 - \frac{3}{(x + 1)^2}\right] dx + C$$
   $$\frac{y}{x + 1} = x + \frac{3}{x + 1} + C \implies y = x(x + 1) + 3 + C(x + 1)$$
5. Use initial condition $y(2) = 0$:
   $$0 = 2(3) + 3 + C(3) \implies 0 = 9 + 3C \implies 3C = -9 \implies C = -3$$
6. Therefore, the particular solution is:
   $$y(x) = x(x + 1) + 3 - 3(x + 1) = x^2 + x + 3 - 3x - 3 = x^2 - 2x$$
7. Evaluate at $x = 3$:
   $$y(3) = (3)^2 - 2(3) = 9 - 6 = \mathbf{3}$$
* **Correct Option:** **(1)**


---


### PYQ 3: JEE Main 2019 (Bernoulli / Linear in $y^2$)
**Problem:** The general solution of the differential equation $(y^2 - x^3)dx - xy dy = 0$ ($x \ne 0$) is:
(where $c$ is a constant of integration)
(1) $y^2 + 2x^2 + c x^3 = 0$
(2) $y^2 - 2x^2 + c x^3 = 0$
(3) $y^2 - 2x^3 + c x^2 = 0$
(4) $y^2 + 2x^3 + c x^2 = 0$


**Detailed Solution:**
1. Rewrite the equation:
   $$xy \frac{dy}{dx} - y^2 = -x^3 \implies \frac{dy}{dx} - \frac{1}{x}y = -\frac{x^2}{y}$$
2. Multiply by $2y$:
   $$2y \frac{dy}{dx} - \frac{2}{x}y^2 = -2x^2$$
3. Substitute $v = y^2 \implies \frac{dv}{dx} = 2y \frac{dy}{dx}$:
   $$\mathbf{\frac{dv}{dx} - \frac{2}{x}v = -2x^2}$$
   This is linear in $v$!
4. Compute the Integrating Factor:
   $$\text{I.F.} = e^{\int -\frac{2}{x}dx} = e^{-2\ln x} = \frac{1}{x^2}$$
5. Apply solution formula:
   $$v \cdot \frac{1}{x^2} = \int (-2x^2)\cdot\frac{1}{x^2} dx + c = \int (-2) dx + c = -2x + c$$
6. Multiply by $x^2$ and replace $v = y^2$:
   $$y^2 = -2x^3 + c x^2 \implies \mathbf{y^2 + 2x^3 - c x^2 = 0 \iff y^2 - 2x^3 + c x^2 = 0}$$
* **Correct Option:** **(3)**


---


### PYQ 4: JEE Main 2018 (Trigonometric Integrating Factor)
**Problem:** Let $y = y(x)$ be the solution of the differential equation:
$$\sin x \frac{dy}{dx} + y \cos x = 4x, \quad x \in (0, \pi)$$
If $y\left(\frac{\pi}{2}\right) = 0$, then $y\left(\frac{\pi}{6}\right)$ is equal to:
(1) $-\frac{8}{9}\pi^2$
(2) $-\frac{4}{9}\pi^2$
(3) $\frac{4}{9\sqrt{3}}\pi^2$
(4) $-\frac{8}{9\sqrt{3}}\pi^2$


**Detailed Solution:**
1. Observe that the LHS is directly an exact product derivative:
   $$\sin x \frac{dy}{dx} + y \cos x = \frac{d}{dx}(y \sin x)$$
2. Therefore:
   $$\frac{d}{dx}(y \sin x) = 4x$$
3. Integrating directly with respect to $x$:
   $$y \sin x = \int 4x dx = 2x^2 + C$$
4. Apply $y\left(\frac{\pi}{2}\right) = 0$:
   $$0 \cdot \sin\left(\frac{\pi}{2}\right) = 2\left(\frac{\pi}{2}\right)^2 + C \implies 0 = 2\left(\frac{\pi^2}{4}\right) + C \implies C = -\frac{\pi^2}{2}$$
5. The particular solution is:
   $$y \sin x = 2x^2 - \frac{\pi^2}{2} \implies y(x) = \frac{2x^2 - \frac{\pi^2}{2}}{\sin x}$$
6. Evaluate at $x = \frac{\pi}{6}$:
   $$\sin\left(\frac{\pi}{6}\right) = \frac{1}{2}$$
   $$y\left(\frac{\pi}{6}\right) = \frac{2\left(\frac{\pi}{6}\right)^2 - \frac{\pi^2}{2}}{1/2} = 2\left[2 \cdot \frac{\pi^2}{36} - \frac{\pi^2}{2}\right] = 2\left[\frac{\pi^2}{18} - \frac{9\pi^2}{18}\right] = 2\left(-\frac{8\pi^2}{18}\right) = -\frac{8}{9}\pi^2$$
* **Correct Option:** **(1)**


---


### PYQ 5: JEE Advanced 2015 (Integrating Factor with Exponential Terms)
**Problem:** Let $y(x)$ be a solution of the differential equation $(1 + e^x)y' + y e^x = 1$. If $y(0) = 2$, then which of the following statements is (are) TRUE?
(A) $y(-4) = 0$
(B) $y(-2) = 0$
(C) $y(x)$ has a critical point in the interval $(-1, 0)$
(D) $y(x)$ has no critical point in the interval $(-1, 0)$


**Detailed Solution:**
1. Recognize the exact derivative on the LHS:
   $$(1 + e^x)y' + y e^x = \frac{d}{dx}\left[y(1 + e^x)\right] = 1$$
2. Integrate both sides:
   $$y(1 + e^x) = x + C$$
3. Apply initial condition $y(0) = 2$:
   $$2(1 + e^0) = 0 + C \implies 2(2) = C \implies C = 4$$
4. The solution function is:
   $$\mathbf{y(x) = \frac{x + 4}{1 + e^x}}$$
5. Check options (A) and (B):
   * $y(-4) = \frac{-4 + 4}{1 + e^{-4}} = 0 \implies$ **(A) is TRUE**.
   * $y(-2) = \frac{-2 + 4}{1 + e^{-2}} = \frac{2}{1 + e^{-2}} \ne 0 \implies$ (B) is FALSE.
6. Check critical points (C) and (D):
   * Compute $y'(x)$:
     $$y'(x) = \frac{(1 + e^x)(1) - (x + 4)e^x}{(1 + e^x)^2} = \frac{1 + e^x - x e^x - 4e^x}{(1 + e^x)^2} = \frac{1 - (x + 3)e^x}{(1 + e^x)^2}$$
   * Set $g(x) = 1 - (x + 3)e^x$:
     * $g(-1) = 1 - (-1 + 3)e^{-1} = 1 - \frac{2}{e} > 0$ (since $e \approx 2.718 \implies 2/e < 1$).
     * $g(0) = 1 - (0 + 3)e^0 = 1 - 3 = -2 < 0$.
   * Since $g(x)$ is continuous and changes sign on $[-1, 0]$, by the Intermediate Value Theorem, there exists at least one $c \in (-1, 0)$ such that $g(c) = 0 \implies y'(c) = 0$.
   * Moreover, $g'(x) = -e^x - (x + 3)e^x = -(x + 4)e^x < 0$ on $(-1, 0)$, so $g(x)$ is strictly decreasing, proving the critical point is unique.
   * Therefore, $y(x)$ has a critical point in $(-1, 0) \implies$ **(C) is TRUE**.
* **Correct Options:** **(A), (C)**


---


### PYQ 6: JEE Advanced 2013 (Homogeneous Substitution with Secant)
**Problem:** A curve passes through the point $\left(1, \frac{\pi}{6}\right)$. Let the slope of the curve at each point $(x, y)$ be $\frac{y}{x} + \sec\left(\frac{y}{x}\right)$, $x > 0$. Then the equation of the curve is:
(A) $\sin\left(\frac{y}{x}\right) = \ln x + \frac{1}{2}$
(B) $\csc\left(\frac{y}{x}\right) = \ln x + 2$
(C) $\sec\left(\frac{2y}{x}\right) = \ln x + 2$
(D) $\cos\left(\frac{2y}{x}\right) = \ln x + \frac{1}{2}$


**Detailed Solution:**
1. The given differential equation is:
   $$\frac{dy}{dx} = \frac{y}{x} + \sec\left(\frac{y}{x}\right)$$
2. Substitute $y = vx \implies \frac{dy}{dx} = v + x \frac{dv}{dx}$:
   $$v + x \frac{dv}{dx} = v + \sec v \implies x \frac{dv}{dx} = \sec v$$
3. Separate variables:
   $$\frac{dv}{\sec v} = \frac{dx}{x} \implies \cos v \, dv = \frac{dx}{x}$$
4. Integrate both sides:
   $$\sin v = \ln x + C \implies \sin\left(\frac{y}{x}\right) = \ln x + C$$
5. Curve passes through $\left(1, \frac{\pi}{6}\right)$:
   $$\sin\left(\frac{\pi/6}{1}\right) = \ln 1 + C \implies \sin\left(\frac{\pi}{6}\right) = C \implies C = \frac{1}{2}$$
6. Equation of the curve:
   $$\mathbf{\sin\left(\frac{y}{x}\right) = \ln x + \frac{1}{2}}$$
* **Correct Option:** **(A)**


---


## 12. High-Yield JEE Traps, Common Errors, and Shortcut Matrix


| Conceptual Area | Common Student Pitfall | Mathematical Reality & JEE Correction |
| :--- | :--- | :--- |
| **Degree Definition** | Claiming degree is undefined whenever trig/exponential functions appear in the ODE. | Degree is only undefined if the **differential coefficient** ($\frac{dy}{dx}, \frac{d^2y}{dx^2}$, etc.) is inside the transcendental function. If $x$ or $y$ is inside (e.g. $y' + \sin y = 0$), the degree is **well-defined** ($1$). |
| **Number of Arbitrary Constants** | Counting every parameter symbol ($c_1, c_2, \dots$) as an independent constant. | Constants often combine algebraically (e.g., $c_1 e^{x+c_2} = A e^x$, $c_1 \ln(c_2 x) = c_1 \ln x + B$). Order equals only the **minimum number of essential constants**. |
| **Integrating Factor Sign Error** | Writing $\text{I.F.} = e^{\int P dx}$ without including the negative sign when $\frac{dy}{dx} - P y = Q$. | Ensure standard form has a **$+$** sign: $\frac{dy}{dx} + (-P)y = Q \implies \text{I.F.} = e^{-\int P dx}$. |
| **Inversion to $dx/dy$** | Struggling to solve $\frac{dy}{dx} = \frac{y}{f(y) + x}$ by attempting variable separation in $y$. | Invert immediately: $\frac{dx}{dy} - \frac{1}{y}x = \frac{f(y)}{y}$, which is linear in $x$! |
| **Absolute Values in Logarithms** | Dropping absolute values prematurely when integrating $\int \frac{1}{x} dx = \ln|x|$. | Keeping $|x|$ prevents extraneous signs and errors when initial conditions lie in negative quadrants ($x < 0$). |
| **Orthogonal Trajectories** | Forgetting to eliminate the parameter $c$ before substituting $\frac{dy}{dx} \to -\frac{dx}{dy}$. | You must obtain the **parameter-free differential equation** of the original family first, then substitute $-\frac{dx}{dy}$, then integrate. |
| **Singular Solutions** | Assuming every solution must satisfy $y = C x + f(C)$ in Clairaut's form. | The singular solution (envelope) is not obtainable for any numerical value of $C$. Always verify if $x + f'(p) = 0$ yields a singular solution. |


---


## 13. Comprehensive Chapter Review Summary


```
                      ┌──────────────────────────────────────────┐
                      │          DIFFERENTIAL EQUATIONS          │
                      │    F(x, y, y', y'', ..., y^(n)) = 0      │
                      └────────────────────┬─────────────────────┘
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         │                                                                   │
┌────────┴──────────────┐                                         ┌──────────┴─────────────┐
│  CLASSIFICATION &     │                                         │  FIRST-ORDER FIRST-    │
│  FORMATION            │                                         │  DEGREE METHODS        │
├───────────────────────┤                                         ├────────────────────────┤
│ • Order: Highest      │                                         │ • Variable Separable   │
│   derivative order    │                                         │ • Substitution (ax+by) │
│ • Degree: Power of    │                                         │ • Polar Transformations│
│   highest derivative  │                                         │ • Homogeneous (y = vx) │
│   (polynomial only)   │                                         │ • Linear: e^(∫P dx)    │
│ • Formation: Differenti-│                                       │ • Bernoulli: z = y^(1-n)│
│   ate n times &       │                                         │ • Exact & Inspection   │
│   eliminate n consts  │                                         │ • Clairaut: y = xp+f(p)│
└───────────────────────┘                                         └──────────┬─────────────┘
                                                                             │
                                           ┌─────────────────────────────────┴────────────────┐
                                           │                                                  │
                                ┌──────────┴─────────────┐                         ┌──────────┴─────────────┐
                                │ GEOMETRICAL            │                         │ PHYSICAL & GROWTH      │
                                │ APPLICATIONS           │                         │ APPLICATIONS           │
                                ├────────────────────────┤                         ├────────────────────────┤
                                │ • Tangent & Normal     │                         │ • Newton's Cooling:    │
                                │ • Subtangent: |y/y'|   │                         │   dT/dt = -k(T - Ts)   │
                                │ • Subnormal: |y·y'|    │                         │ • Radioactive Decay:   │
                                │ • Orthogonal Traject-  │                         │   dN/dt = -λN          │
                                │   ories: y' → -1/y'    │                         │ • RL Circuit Growth:   │
                                │ • Polar: r' → -r² θ'   │                         │   L di/dt + Ri = E     │
                                └────────────────────────┘                         └────────────────────────┘
```