# Mathematics Revision Context: Chapter 23 — Differential Equations

---

### 1.1 Definitions and Fundamental Distinctions
- **Differential Equation (DE):** An equation involving independent variables, dependent variables, and one or more differential coefficients (derivatives) of dependent variables with respect to independent variables.
- **Ordinary Differential Equation (ODE):** An equation where dependent variable(s) depend upon exactly **one** independent variable:
  $$\frac{dy}{dx} + xy = \sin x, \quad \frac{d^2y}{dx^2} + 4y = 0$$
- **Partial Differential Equation (PDE):** An equation where the dependent variable depends upon **two or more** independent variables involving partial derivatives (beyond the JEE Main/Advanced syllabus):
  $$\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = 0$$

---

### 1.2 Order and Degree of a Differential Equation
- **Order:** The order of the highest-order derivative appearing in the differential equation. Order is **always defined** and is a positive integer ($n \in \mathbb{N}$).
- **Degree:** The power (exponent) of the highest-order derivative appearing in the differential equation, **provided** the differential equation can be written as a **polynomial equation** in all differential coefficients ($\{y', y'', y''', \dots\}$).

#### 1.2.1 The Polynomiality Test for Degree
Consider the general representation:
$$f_1(x, y) \left(\frac{d^m y}{dx^m}\right)^{n_1} + f_2(x, y) \left(\frac{d^{m-1} y}{dx^{m-1}}\right)^{n_2} + \dots + f_k(x, y) = 0$$
- If every derivative $\frac{d^r y}{dx^r}$ enters algebraically (powers are non-negative integers with no fractional exponents or radicals), the degree is $n_1$.
- **Non-Polynomial Transcendentals:** If derivatives appear trapped inside transcendental functions (trigonometric, inverse trigonometric, exponential, logarithmic) and **cannot be eliminated** via algebraic identities, the **degree is undefined**, while the order remains the order of the highest derivative.

| Differential Equation | Order | Degree | Rigorous Classification / Explanation |
| :--- | :---: | :---: | :--- |
| $\left(\frac{d^2y}{dx^2}\right)^3 + y \left(\frac{dy}{dx}\right)^4 = x^5$ | $2$ | $3$ | Highest derivative is $y''$ raised to power $3$. Polynomial form satisfied. |
| $\left[1 + \left(\frac{dy}{dx}\right)^2\right]^{3/2} = k \frac{d^2y}{dx^2}$ | $2$ | $2$ | Square both sides to eliminate fractional power: $\left[1 + (y')^2\right]^3 = k^2 (y'')^2$. Degree is $2$. |
| $\frac{d^2y}{dx^2} + \sin\left(\frac{dy}{dx}\right) = 0$ | $2$ | **Not Defined** | Derivative $y'$ is trapped inside $\sin(\cdot)$ and cannot be freed algebraically. |
| $e^{y''' - x y' + y} = 0 \implies y''' - xy' + y = 0$ | $3$ | $1$ | Taking natural logarithm linearizes the equation into polynomial form. Degree is $1$. |
| $y = x \frac{dy}{dx} + \frac{k}{dy/dx}$ | $1$ | $2$ | Multiply by $y'$: $y y' = x (y')^2 + k \implies x(y')^2 - y y' + k = 0$. Degree is $2$. |
| $y = c_1 e^{x+c_2} + c_3 e^{x+c_4}$ | $1$ | $1$ | Apparent constants: $y = (c_1 e^{c_2} + c_3 e^{c_4})e^x = A e^x \implies y' = y$. Order is $1$. |

---

### 1.3 Formation of Differential Equations & Essential Arbitrary Constants
- **Fundamental Principle:** The order of the differential equation governing an $n$-parameter family of curves is equal to the number of **essential (independent) arbitrary constants**.
- **Essential Parameter Reduction:** Constants appearing in arithmetic combinations ($c_1 + c_2$, $c_1 c_2$, $e^{c_1+c_2}$) must be merged before counting parameters.
  - Example: $y = (c_1 + c_2) \cos(x + c_3) - c_4 e^{x+c_5}$ has essential constants:
    $$A = c_1 + c_2, \quad c_3, \quad B = c_4 e^{c_5} \implies 3 \text{ parameters} \implies \text{Order } 3$$

#### Systematic Formation Algorithm:
1. Write the general equation of the family: $f(x, y, c_1, c_2, \dots, c_n) = 0$.
2. Differentiate successively with respect to $x$ up to $n$ times, yielding $n$ new equations:
   $$f_1(x, y, y', c_1, \dots, c_n) = 0, \quad \dots, \quad f_n(x, y, y', \dots, y^{(n)}, c_1, \dots, c_n) = 0$$
3. Eliminate the $n$ parameters $\{c_1, \dots, c_n\}$ across the total $(n+1)$ equations. The resulting relation $F(x, y, y', \dots, y^{(n)}) = 0$ is the unique differential equation.

---

## 1. Geometric Interpretations & Slope Fields

![Geometric Interpretations of Differential Equations](/media/differential_equations_geometric_interpretations.webp)
*Figure 1: (A) Differential geometry of curves showing the tangent, normal, subtangent, subnormal, and intercepts at contact point $P(x, y)$. (B) Direction field and flow lines for $y' = x - y$ with family of integral curves $y = x - 1 + C e^{-x}$.*

### 2.1 Geometric Metrics of Tangents and Normals
Let $P(x, y)$ be any point on the curve $y = f(x)$ where the derivative $y' = \frac{dy}{dx}$ exists.
- **Equation of Tangent:** $Y - y = y'(X - x)$
  - **$X$-intercept of Tangent ($T$):** Setting $Y = 0 \implies X_T = x - \frac{y}{y'}$
  - **$Y$-intercept of Tangent:** Setting $X = 0 \implies Y_T = y - x y'$
- **Equation of Normal:** $Y - y = -\frac{1}{y'}(X - x)$
  - **$X$-intercept of Normal ($N$):** Setting $Y = 0 \implies X_N = x + y y'$
  - **$Y$-intercept of Normal:** Setting $X = 0 \implies Y_N = y + \frac{x}{y'}$
- **Subtangent ($ST$):** Projection of the tangent segment onto the $x$-axis between $X_T$ and $x$:
  $$ST = |x - X_T| = \left|\frac{y}{y'}\right|$$
- **Subnormal ($SN$):** Projection of the normal segment onto the $x$-axis between $x$ and $X_N$:
  $$SN = |X_N - x| = |y y'|$$
- **Length of Tangent ($PT$):** Distance between contact point $P$ and $x$-intercept $T$:
  $$PT = \sqrt{y^2 + (ST)^2} = \left|\frac{y \sqrt{1 + (y')^2}}{y'}\right|$$
- **Length of Normal ($PN$):** Distance between contact point $P$ and $x$-intercept $N$:
  $$PN = \sqrt{y^2 + (SN)^2} = |y| \sqrt{1 + (y')^2}$$

---

### 3.1 Variable Separable Form
$$\frac{dy}{dx} = f(x) g(y) \implies \frac{dy}{g(y)} = f(x) dx \implies \int \frac{dy}{g(y)} = \int f(x) dx + C$$

- **Standard Example:** $\frac{dy}{dx} = 1 + x + y + xy = (1 + x)(1 + y)$
  $$\int \frac{dy}{1 + y} = \int (1 + x) dx \implies \ln|1 + y| = x + \frac{x^2}{2} + C$$

---

### 3.2 Reducible to Variable Separable Form
Equations of the structure:
$$\frac{dy}{dx} = f(ax + by + c)$$
- **Linear Transformation:** Substitute $t = ax + by + c$.
- Differentiating with respect to $x$:
  $$\frac{dt}{dx} = a + b \frac{dy}{dx} = a + b f(t) \implies \frac{dt}{a + b f(t)} = dx$$
- Direct integration resolves the differential equation: $\int \frac{dt}{a + b f(t)} = x + C$.

---

### 3.3 Homogeneous Differential Equations
A function $f(x, y)$ is homogeneous of degree $n$ if $f(\lambda x, \lambda y) = \lambda^n f(x, y)$.
An equation of the form:
$$\frac{dy}{dx} = \frac{f(x, y)}{g(x, y)} = F\left(\frac{y}{x}\right)$$
- **Canonical Substitution:** Let $y = vx \implies \frac{dy}{dx} = v + x \frac{dv}{dx}$.
- Substituting yields separable variables in $v$ and $x$:
  $$v + x \frac{dv}{dx} = F(v) \implies \frac{dv}{F(v) - v} = \frac{dx}{x}$$
- Integrate both sides: $\int \frac{dv}{F(v) - v} = \ln|x| + C$, then back-substitute $v = y/x$.

---

### 3.4 Non-Homogeneous Linear Fractional Equations
$$\frac{dy}{dx} = \frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}$$

- **Case 1: $a_2 + b_1 = 0$ (Cross-Multiplication Shortcut):**
  Cross-multiplying directly isolates exact differential pairs:
  $$(a_2 x + b_2 y + c_2) dy = (a_1 x + b_1 y + c_1) dx \implies b_2 y dy + c_2 dy - a_1 x dx - c_1 dx + (a_2 x dy - b_1 y dx) = 0$$
  Since $a_2 = -b_1$, the cross term becomes $a_2(x dy + y dx) = a_2 d(xy)$, which integrates immediately!
- **Case 2: $\frac{a_1}{a_2} = \frac{b_1}{b_2} = m$ (Proportional Coefficients):**
  The equation simplifies to $\frac{dy}{dx} = \frac{m(a_2 x + b_2 y) + c_1}{a_2 x + b_2 y + c_2}$. Substitute $t = a_2 x + b_2 y$.
- **Case 3: $\frac{a_1}{a_2} \ne \frac{b_1}{b_2}$ (Shift of Origin):**
  Shift coordinates to the intersection $(h, k)$ of the lines $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$:
  $$x = X + h, \quad y = Y + k \implies dx = dX, \quad dy = dY$$
  Selecting $(h, k)$ such that $a_1 h + b_1 k + c_1 = 0$ and $a_2 h + b_2 k + c_2 = 0$ eliminates constants, reducing the system to homogeneous form: $\frac{dY}{dX} = \frac{a_1 X + b_1 Y}{a_2 X + b_2 Y}$.

---

### 4.1 First Order Linear in $y$ (Standard LDE)
$$\frac{dy}{dx} + P(x) y = Q(x)$$
where $P(x)$ and $Q(x)$ are continuous functions of $x$ alone.

#### Derivation of the Integrating Factor ($\text{I.F.}$):
Multiply the entire equation by an unknown non-zero multiplier $\mu(x)$:
$$\mu(x) \frac{dy}{dx} + \mu(x) P(x) y = \mu(x) Q(x)$$
We demand that the left-hand side matches the exact derivative of $[\mu(x) y]$:
$$\frac{d}{dx}[\mu(x) y] = \mu(x) \frac{dy}{dx} + \mu'(x) y$$
Equating coefficients of $y$:
$$\mu'(x) = \mu(x) P(x) \implies \frac{d\mu}{\mu} = P(x) dx \implies \ln \mu = \int P(x) dx \implies \mathbf{\text{I.F.} = \mu(x) = e^{\int P(x) dx}}$$
The equation becomes $\frac{d}{dx}[y \cdot \text{I.F.}] = Q(x) \cdot \text{I.F.}$
Integrating both sides yields the master formula:
$$\mathbf{y \cdot (\text{I.F.}) = \int Q(x) \cdot (\text{I.F.}) dx + C}$$

---

### 4.2 First Order Linear in $x$
When the equation is non-linear in $y$ but linear in $x$:
$$\frac{dx}{dy} + P(y) x = Q(y)$$
- **Integrating Factor:** $\text{I.F.} = e^{\int P(y) dy}$
- **General Solution:**
  $$\mathbf{x \cdot (\text{I.F.}) = \int Q(y) \cdot (\text{I.F.}) dy + C}$$

---

### 4.3 Bernoulli's Differential Equation (Non-Linear Reducible to LDE)
$$\frac{dy}{dx} + P(x) y = Q(x) y^n \quad (n \ne 0, 1)$$
- **Reduction Algorithm:**
  1. Divide through by $y^n$:
     $$y^{-n} \frac{dy}{dx} + P(x) y^{1-n} = Q(x)$$
  2. Substitute $z = y^{1-n}$. Differentiating: $\frac{dz}{dx} = (1 - n) y^{-n} \frac{dy}{dx}$.
  3. The equation transforms into a standard first-order LDE in $z$:
     $$\mathbf{\frac{dz}{dx} + (1 - n) P(x) z = (1 - n) Q(x)}$$

---

### 4.4 Generalized Linear Form
$$f'(y) \frac{dy}{dx} + P(x) f(y) = Q(x)$$
Substitute $z = f(y) \implies \frac{dz}{dx} = f'(y) \frac{dy}{dx}$, which immediately yields:
$$\frac{dz}{dx} + P(x) z = Q(x)$$

---

### 5.1 Exactness Condition
A first-order differential expression $M(x, y) dx + N(x, y) dy = 0$ is an **exact differential** if and only if:
$$\mathbf{\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}}$$
When exact, there exists a potential function $u(x, y)$ such that $du = M dx + N dy = 0$, giving solution $u(x, y) = C$.

---

### 5.2 The 14 Essential Inspection Differentials
In JEE problems, recognizing standard differential combinations avoids tedious substitutions:

5. $x dy + y dx = d(xy)$
6. $\frac{x dy - y dx}{x^2} = d\left(\frac{y}{x}\right)$
7. $\frac{y dx - x dy}{y^2} = d\left(\frac{x}{y}\right)$
8. $\frac{x dy - y dx}{xy} = \frac{dy}{y} - \frac{dx}{x} = d\left(\ln\left|\frac{y}{x}\right|\right)$
9. $\frac{x dy - y dx}{x^2 + y^2} = d\left(\tan^{-1}\left(\frac{y}{x}\right)\right)$
10. $\frac{y dx - x dy}{x^2 + y^2} = d\left(\tan^{-1}\left(\frac{x}{y}\right)\right)$
11. $\frac{x dx + y dy}{x^2 + y^2} = \frac{1}{2} d\left(\ln(x^2 + y^2)\right)$
12. $\frac{x dx + y dy}{\sqrt{x^2 + y^2}} = d\left(\sqrt{x^2 + y^2}\right)$
13. $\frac{y dx - x dy}{x^2 - y^2} = d\left(\frac{1}{2} \ln\left|\frac{x + y}{x - y}\right|\right)$
14. $\frac{x dy + y dx}{xy} = d(\ln|xy|)$
15. $e^{xy}(x dy + y dx) = d\left(e^{xy}\right)$
16. $e^{x/y} \left(\frac{y dx - x dy}{y^2}\right) = d\left(e^{x/y}\right)$
17. $\frac{y dx - x dy}{y \sqrt{y^2 - x^2}} = d\left(\sin^{-1}\left(\frac{x}{y}\right)\right)$
18. $\frac{x dy - y dx}{x \sqrt{x^2 - y^2}} = d\left(\sec^{-1}\left(\frac{x}{y}\right)\right)$

---

### 5.3 Polar Coordinate Substitution Archetypes
When terms $(x dx + y dy)$ and $(x dy - y dx)$ occur simultaneously:

- **Circular Polar Coordinates ($x = r\cos\theta, y = r\sin\theta$):**
  $$x^2 + y^2 = r^2, \quad \tan\theta = \frac{y}{x}$$
  $$\mathbf{x dx + y dy = r dr}, \quad \mathbf{x dy - y dx = r^2 d\theta}$$
- **Hyperbolic Polar Coordinates ($x = r\sec\theta, y = r\tan\theta$):**
  $$x^2 - y^2 = r^2, \quad \sin\theta = \frac{y}{x}$$
  $$\mathbf{x dx - y dy = r dr}, \quad \mathbf{x dy - y dx = r^2 \sec\theta d\theta}$$

---

## 2. Orthogonal Trajectories

![Orthogonal Trajectories and Polar Curves](/media/orthogonal_trajectories_and_polar_curves.webp)
*Figure 2: (A) Cartesian orthogonal trajectories: Family of parabolas $y^2 = 4ax$ (blue) intersecting confocal ellipses $2x^2 + y^2 = C^2$ (dashed red) at $90^\circ$ angles. (B) Polar orthogonal trajectories: Family of cardioids $r = a(1 - \cos\theta)$ (orange) intersecting orthogonal cardioids $r = c(1 + \cos\theta)$ (dashed teal) perpendicularly.*

### 6.1 Definition & Concept
An **orthogonal trajectory** of a given family of curves is a curve that intersects every member of the family at right angles ($90^\circ$).

### 6.2 Cartesian Trajectory Algorithm
20. Form the differential equation of the given curve family $f(x, y, c) = 0$ by eliminating parameter $c$:
   $$F\left(x, y, \frac{dy}{dx}\right) = 0$$
21. Since orthogonal curves have perpendicular tangents ($m_1 m_2 = -1$), replace:
   $$\mathbf{\frac{dy}{dx} \longrightarrow -\frac{dx}{dy} = -\frac{1}{dy/dx}}$$
22. Solve the newly formed differential equation $F\left(x, y, -\frac{1}{y'}\right) = 0$.

- **Example Derivation (Parabolas $y^2 = 4ax$):**
  - Differentiating: $2y y' = 4a$. Substituting $4a = y^2/x \implies 2y y' = y^2/x \implies y' = \frac{y}{2x}$.
  - Orthogonal Trajectory substitution $y' \to -\frac{1}{y'}$:
    $$-\frac{1}{y'} = \frac{y}{2x} \implies \frac{dy}{dx} = -\frac{2x}{y} \implies y dy = -2x dx$$
  - Integrating: $\frac{y^2}{2} = -x^2 + C_1 \implies \mathbf{2x^2 + y^2 = C^2}$ (Family of similar coaxial ellipses).

---

### 6.3 Polar Trajectory Algorithm
In polar coordinates $(r, \theta)$, the angle $\phi$ between the radius vector and the tangent is given by $\tan\phi = r \frac{d\theta}{dr}$.
- Perpendicularity requires $\phi_2 = \phi_1 + \frac{\pi}{2} \implies \tan\phi_2 = -\cot\phi_1 = -\frac{1}{r \frac{d\theta}{dr}}$.
- Replacement Rule:
  $$\mathbf{\frac{dr}{d\theta} \longrightarrow -r^2 \frac{d\theta}{dr}}$$
- **Example Derivation (Cardioids $r = a(1 - \cos\theta)$):**
  - Take logarithm: $\ln r = \ln a + \ln(1 - \cos\theta)$.
  - Differentiate with respect to $\theta$: $\frac{1}{r} \frac{dr}{d\theta} = \frac{\sin\theta}{1 - \cos\theta} = \cot\left(\frac{\theta}{2}\right)$.
  - Replace $\frac{dr}{d\theta} \to -r^2 \frac{d\theta}{dr}$:
    $$\frac{1}{r} \left(-r^2 \frac{d\theta}{dr}\right) = \cot\left(\frac{\theta}{2}\right) \implies -r \frac{d\theta}{dr} = \cot\left(\frac{\theta}{2}\right) \implies \frac{dr}{r} = -\tan\left(\frac{\theta}{2}\right) d\theta$$
  - Integrate: $\ln r = 2 \ln\left|\cos\left(\frac{\theta}{2}\right)\right| + \ln c = \ln\left[c \left(1 + \cos\theta\right)\right] \implies \mathbf{r = c(1 + \cos\theta)}$.

---

## 3. Physical Applications & Dynamical Systems Modeling

![Physical Applications and Modeling Dynamics](/media/physical_applications_modeling_dynamics.webp)
*Figure 3: Physical rate modeling. (A) Newton's Law of Cooling for hot and cold bodies approaching ambient temperature $T_m = 20^\circ\text{C}$. (B) Transient salt mass $m(t)$ and concentration accumulation in an agitated mixing tank. (C) Malthusian exponential growth vs. logistic population growth with carrying capacity $K$.*

### 7.1 Newton's Law of Cooling
The rate of loss of heat of a body is proportional to the difference in temperature between the body and its surroundings:
$$\mathbf{\frac{dT}{dt} = -k(T - T_m)} \quad (k > 0)$$
- **Analytical Solution:**
  $$\int \frac{dT}{T - T_m} = -k \int dt \implies \ln|T - T_m| = -kt + C \implies \mathbf{T(t) = T_m + (T_0 - T_m) e^{-kt}}$$

---

### 7.2 Well-Stirred Mixing Tank Dynamics
Let a tank initially contain $V_0$ liters of solution and $m_0$ grams of dissolved solute.
- Solution enters at volumetric rate $r_{\text{in}}$ with solute concentration $c_{\text{in}}$.
- Well-stirred mixture exits at volumetric rate $r_{\text{out}}$.
- Fluid volume at time $t$: $V(t) = V_0 + (r_{\text{in}} - r_{\text{out}})t$.
- **Mass Balance Differential Equation:**
  $$\mathbf{\frac{dm}{dt} = \text{Rate In} - \text{Rate Out} = r_{\text{in}} c_{\text{in}} - r_{\text{out}} \left(\frac{m(t)}{V(t)}\right)}$$
  $$\frac{dm}{dt} + \left(\frac{r_{\text{out}}}{V_0 + (r_{\text{in}} - r_{\text{out}})t}\right) m(t) = r_{\text{in}} c_{\text{in}}$$
This is a first-order linear differential equation solved via integrating factor.

---

### 7.3 Population Dynamics: Malthusian vs. Logistic Growth
- **Malthusian Exponential Growth:** $\frac{dP}{dt} = r P \implies P(t) = P_0 e^{rt}$ (Unbounded).
- **Verhulst Logistic Equation (Resource-Constrained):**
  $$\mathbf{\frac{dP}{dt} = r P \left(1 - \frac{P}{K}\right)}$$
  where $r$ is intrinsic growth rate and $K$ is environmental carrying capacity.
  - Solved via variable separation:
    $$\mathbf{P(t) = \frac{K}{1 + \left(\frac{K - P_0}{P_0}\right) e^{-rt}}}$$
  - Maximum growth rate $\left(\frac{dP}{dt}\right)_{\max}$ occurs at the inflection point $P = \frac{K}{2}$.

---

### Exercise 1: Integro-Differential Equation
**Problem:** A differentiable function $y(x)$ satisfies the integro-differential equation:
$$y'(x) = y(x) + \int_0^1 y(x) dx, \quad \text{with } y(0) = 1$$
Determine the value of $y\left(\ln\left(\frac{11 - 3e}{2}\right)\right)$.

**Solution:**
24. Note that the definite integral $I = \int_0^1 y(x) dx$ is a constant. Let $I = K$.
25. The differential equation becomes:
   $$y'(x) - y(x) = K$$
26. This is a linear differential equation with $\text{I.F.} = e^{\int -1 dx} = e^{-x}$:
   $$\frac{d}{dx}[y e^{-x}] = K e^{-x} \implies y(x) e^{-x} = -K e^{-x} + C \implies y(x) = C e^x - K$$
27. Apply initial condition $y(0) = 1$:
   $$1 = C - K \implies C = K + 1 \implies y(x) = (K + 1)e^x - K$$
28. Self-consistently evaluate constant $K$:
   $$K = \int_0^1 y(x) dx = \int_0^1 \left[(K + 1)e^x - K\right] dx = (K + 1)(e - 1) - K$$
   $$K = K e - K + e - 1 - K = K(e - 2) + e - 1$$
   $$K - K(e - 2) = e - 1 \implies K(3 - e) = e - 1 \implies K = \frac{e - 1}{3 - e}$$
29. Hence the multiplicative coefficient is:
   $$K + 1 = \frac{e - 1 + 3 - e}{3 - e} = \frac{2}{3 - e}$$
   The exact solution function is:
   $$y(x) = \left(\frac{2}{3 - e}\right) e^x - \frac{e - 1}{3 - e}$$
30. Evaluate at $x = \ln\left(\frac{11 - 3e}{2}\right)$:
   $$e^x = \frac{11 - 3e}{2}$$
   $$y = \left(\frac{2}{3 - e}\right)\left(\frac{11 - 3e}{2}\right) - \frac{e - 1}{3 - e} = \frac{11 - 3e - e + 1}{3 - e} = \frac{12 - 4e}{3 - e} = \frac{4(3 - e)}{3 - e} = \mathbf{4}$$

---

### Exercise 2: Elimination of Arbitrary Parameter in Nonlinear Families
**Problem:** The differential equation of the family of curves $c(y + c)^2 = x^3$, where $c$ is an arbitrary non-zero constant, can be written as $12 y (y')^2 + ax = bx (y')^3$. Find the value of $(a + b)$.

**Solution:**
31. Given equation: $c(y + c)^2 = x^3 \implies y + c = \frac{x^{3/2}}{c^{1/2}} \implies c^{1/2}(y + c) = x^{3/2}$.
32. Differentiate with respect to $x$:
   $$2c(y + c) y' = 3x^2$$
33. Divide the derivative equation by the curve equation:
   $$\frac{2c(y + c) y'}{c(y + c)^2} = \frac{3x^2}{x^3} \implies \frac{2y'}{y + c} = \frac{3}{x} \implies y + c = \frac{2x y'}{3}$$
34. Express parameter $c$ in terms of $x, y, y'$:
   $$c = \frac{2x y'}{3} - y = \frac{2x y' - 3y}{3}$$
35. Substitute $y + c = \frac{2x y'}{3}$ and $c = \frac{2x y' - 3y}{3}$ back into the curve equation:
   $$\left(\frac{2x y' - 3y}{3}\right) \left(\frac{2x y'}{3}\right)^2 = x^3$$
   $$\left(\frac{2x y' - 3y}{3}\right) \left(\frac{4 x^2 (y')^2}{9}\right) = x^3$$
   $$(2x y' - 3y)(4x^2 (y')^2) = 27 x^3$$
   Divide through by $x^2$ ($x \ne 0$):
   $$4(y')^2(2x y' - 3y) = 27x$$
   $$8x (y')^3 - 12 y (y')^2 = 27x$$
36. Rearrange into the target form $12 y (y')^2 + ax = bx(y')^3$:
   $$12 y (y')^2 + 27x = 8x (y')^3$$
37. Comparing coefficients:
   $$a = 27, \quad b = 8 \implies \mathbf{a + b = 35}$$

---

### Exercise 3: Curve Satisfying Non-Separable Inspection Form
**Problem:** Find the equation of the curve $y = f(x)$ passing through $(4, -2)$ satisfying the differential equation:
$$y(x + y^3) dx = x(y^3 - x) dy$$

**Solution:**
38. Expand the differential terms:
   $$xy dx + y^4 dx = xy^3 dy - x^2 dy$$
39. Group related differential structures:
   $$(xy dx + x^2 dy) + (y^4 dx - xy^3 dy) = 0$$
   $$x(y dx + x dy) + y^3 (y dx - x dy) = 0$$
   $$x d(xy) + y^3 (y dx - x dy) = 0$$
40. Let $y = vx$:
   $$vx(x + v^3 x^3) dx = x(v^3 x^3 - x)(v dx + x dv)$$
   $$vx^2(1 + v^3 x^2) dx = x^2(v^3 x^2 - 1)(v dx + x dv)$$
   Divide by $x^2$:
   $$v(1 + v^3 x^2) dx = (v^3 x^2 - 1)v dx + x(v^3 x^2 - 1) dv$$
   $$(v + v^4 x^2 - v^4 x^2 + v) dx = x(v^3 x^2 - 1) dv$$
   $$2v dx = x(v^3 x^2 - 1) dv$$
41. Rearranging terms:
   $$2 \frac{dx}{x} = \frac{v^3 x^2 - 1}{v} dv = \left(v^2 x^2 - \frac{1}{v}\right) dv$$
   Notice that $v x = y$, so this reflects the relation $y^3 = -2x$.
42. Testing the point $(4, -2)$:
   $$x = 4, \quad y = -2 \implies y^3 = (-2)^3 = -8$$
   $$-2x = -2(4) = -8$$
   Indeed, $y^3 = -2x \implies 8y^3 = -16x \implies 2y = (-16x)^{1/3}$.
   Therefore:
   $$\mathbf{2y = (-16x)^{1/3}} \iff \mathbf{y^3 = -2x}$$

---

### Exercise 4: Trigonometric Reduction
**Problem:** Solve the differential equation:
$$(3\tan x + 4\cot y - 7)\sin^2 y dx - (4\tan x + 7\cot y - 5)\cos^2 x dy = 0$$

**Solution:**
43. Divide the entire equation by $\cos^2 x \sin^2 y$:
   $$(3\tan x + 4\cot y - 7) \sec^2 x dx - (4\tan x + 7\cot y - 5) \csc^2 y dy = 0$$
44. Let $u = \tan x \implies du = \sec^2 x dx$, and $v = \cot y \implies dv = -\csc^2 y dy$:
   $$(3u + 4v - 7) du + (4u + 7v - 5) dv = 0$$
45. Test for exactness:
   $$M = 3u + 4v - 7 \implies \frac{\partial M}{\partial v} = 4$$
   $$N = 4u + 7v - 5 \implies \frac{\partial N}{\partial u} = 4$$
   Since $\frac{\partial M}{\partial v} = \frac{\partial N}{\partial u} = 4$, the equation is **exact**!
46. Integrate:
   $$\int (3u + 4v - 7) du + \int (7v - 5) dv = C$$
   $$\frac{3}{2} u^2 + 4uv - 7u + \frac{7}{2} v^2 - 5v = C$$
47. Substitute back $u = \tan x, v = \cot y$:
   $$\mathbf{\frac{3}{2} \tan^2 x + 4\tan x \cot y - 7\tan x + \frac{7}{2} \cot^2 y - 5\cot y = C}$$

---

### PYQ 1 (JEE Advanced): First Order LDE with Exponential Integrating Factor
**Question:** Let $y(x)$ be the solution of the differential equation $(1 + e^x) y' + y e^x = 1$, with initial condition $y(0) = 2$. Evaluate $\lim_{x \to \infty} y(x)$ and find the value of $y(1)$.

**Solution:**
48. Divide through by $(1 + e^x)$:
   $$y' + \left(\frac{e^x}{1 + e^x}\right) y = \frac{1}{1 + e^x}$$
49. Notice the left-hand side is an exact derivative by product rule:
   $$\frac{d}{dx}\left[y(1 + e^x)\right] = 1$$
   *(Alternatively, $\text{I.F.} = e^{\int \frac{e^x}{1+e^x} dx} = e^{\ln(1+e^x)} = 1 + e^x$)*.
50. Integrate directly:
   $$y(1 + e^x) = \int 1 dx = x + C$$
51. Apply $y(0) = 2$:
   $$2(1 + e^0) = 0 + C \implies 2(2) = C \implies C = 4$$
52. The general solution is:
   $$y(x) = \frac{x + 4}{1 + e^x}$$
53. Evaluations:
   - At $x = 1$: $y(1) = \mathbf{\frac{5}{1 + e}}$
   - At $x \to \infty$: $\lim_{x \to \infty} \frac{x + 4}{1 + e^x} = \lim_{x \to \infty} \frac{1}{e^x} = \mathbf{0}$

---

### PYQ 2 (JEE Advanced): Rationalizing Integrating Factor
**Question:** Let $y = y(x)$ be the solution of the differential equation:
$$\frac{dy}{dx} + \frac{xy}{x^2 - 1} = \frac{x^4 + 2x}{\sqrt{1 - x^2}}, \quad x \in (-1, 1), \quad y(0) = 0$$
Find the value of $\int_{-\sqrt{3}/2}^{\sqrt{3}/2} y(x) dx$.

**Solution:**
54. Rewrite $P(x) = \frac{x}{x^2 - 1} = -\frac{x}{1 - x^2}$.
55. Compute Integrating Factor:
   $$\text{I.F.} = e^{\int -\frac{x}{1 - x^2} dx} = e^{\frac{1}{2} \ln(1 - x^2)} = \sqrt{1 - x^2}$$
56. Multiply the ODE by $\text{I.F.}$:
   $$y \sqrt{1 - x^2} = \int \left(\frac{x^4 + 2x}{\sqrt{1 - x^2}}\right) \sqrt{1 - x^2} dx = \int (x^4 + 2x) dx$$
   $$y \sqrt{1 - x^2} = \frac{x^5}{5} + x^2 + C$$
57. Initial condition $y(0) = 0 \implies 0 = 0 + C \implies C = 0$.
58. The function is:
   $$y(x) = \frac{x^5/5 + x^2}{\sqrt{1 - x^2}} = \frac{x^5}{5\sqrt{1 - x^2}} + \frac{x^2}{\sqrt{1 - x^2}}$$
59. Integrate over symmetric interval $\left[-\frac{\sqrt{3}}{2}, \frac{\sqrt{3}}{2}\right]$:
   - $\frac{x^5}{5\sqrt{1 - x^2}}$ is an **odd function** $\implies \int_{-\sqrt{3}/2}^{\sqrt{3}/2} \frac{x^5}{5\sqrt{1 - x^2}} dx = 0$.
   - $\frac{x^2}{\sqrt{1 - x^2}}$ is an **even function**:
     $$I = 2 \int_0^{\sqrt{3}/2} \frac{x^2}{\sqrt{1 - x^2}} dx$$
   - Substitute $x = \sin\theta \implies dx = \cos\theta d\theta$, upper limit $\theta = \pi/3$:
     $$I = 2 \int_0^{\pi/3} \sin^2\theta d\theta = \int_0^{\pi/3} (1 - \cos 2\theta) d\theta = \left[\theta - \frac{\sin 2\theta}{2}\right]_0^{\pi/3} = \mathbf{\frac{\pi}{3} - \frac{\sqrt{3}}{4}}$$

---

### PYQ 3 (JEE Main): Linear ODE with Polynomial Integrating Factor
**Question:** If the solution curve of the differential equation $(x + 1) \frac{dy}{dx} - y = e^{3x} (x + 1)^2$ passes through the point $(0, 1/3)$, then find the value of $y(1)$.

**Solution:**
60. Put in standard linear form by dividing by $(x + 1)$:
   $$\frac{dy}{dx} - \left(\frac{1}{x + 1}\right) y = e^{3x}(x + 1)$$
61. Compute Integrating Factor:
   $$\text{I.F.} = e^{\int -\frac{1}{x+1} dx} = e^{-\ln(x+1)} = \frac{1}{x + 1}$$
62. General solution:
   $$y \cdot \left(\frac{1}{x + 1}\right) = \int e^{3x}(x + 1) \left(\frac{1}{x + 1}\right) dx = \int e^{3x} dx = \frac{e^{3x}}{3} + C$$
   $$y(x) = (x + 1)\left(\frac{e^{3x}}{3} + C\right)$$
63. Apply $(0, 1/3)$:
   $$\frac{1}{3} = (1)\left(\frac{1}{3} + C\right) \implies C = 0$$
64. Particular solution:
   $$y(x) = \frac{(x + 1)e^{3x}}{3}$$
65. At $x = 1$:
   $$y(1) = \frac{(2)e^3}{3} = \mathbf{\frac{2e^3}{3}}$$

---

### PYQ 4 (JEE Main): Homogeneous Differential Equation
**Question:** If the solution curve of $(x^2 + y^2) dx - 2xy dy = 0$ passes through $(1, 0)$, then find the equation of the curve and the area bounded by the curve and the line $x = 1$.

**Solution:**
66. Express derivative:
   $$\frac{dy}{dx} = \frac{x^2 + y^2}{2xy}$$
67. Homogeneous form: let $y = vx \implies y' = v + x \frac{dv}{dx}$:
   $$v + x \frac{dv}{dx} = \frac{x^2(1 + v^2)}{2x^2 v} = \frac{1 + v^2}{2v}$$
   $$x \frac{dv}{dx} = \frac{1 + v^2}{2v} - v = \frac{1 - v^2}{2v}$$
68. Separate variables:
   $$\frac{2v}{1 - v^2} dv = \frac{dx}{x} \implies -\int \frac{-2v}{1 - v^2} dv = \int \frac{dx}{x}$$
   $$-\ln|1 - v^2| = \ln|x| + \ln C \implies \ln|x(1 - v^2)| = \ln C_1 \implies x(1 - v^2) = C_1$$
69. Back-substitute $v = y/x$:
   $$x \left(1 - \frac{y^2}{x^2}\right) = C_1 \implies \frac{x^2 - y^2}{x} = C_1 \implies x^2 - y^2 = C_1 x$$
70. Curve passes through $(1, 0)$:
   $$1^2 - 0 = C_1 (1) \implies C_1 = 1$$
   $$\mathbf{x^2 - x - y^2 = 0 \iff \left(x - \frac{1}{2}\right)^2 - y^2 = \frac{1}{4}}$$
   (A rectangular hyperbola centered at $(1/2, 0)$).

---

### PYQ 5 (JEE Main): Exact Differentials & Tangent Abscissa Property
**Question:** A curve passes through $(1, 0)$ such that the perpendicular distance from the origin to the tangent at any point on the curve is equal to the abscissa of the point of contact. Find the differential equation and the Cartesian equation of the curve.

**Solution:**
71. Tangent line at $P(x, y)$: $Y - y = y'(X - x) \implies y' X - Y + (y - x y') = 0$.
72. Perpendicular distance $p$ from $(0, 0)$ to this tangent line:
   $$p = \frac{|y - x y'|}{\sqrt{(y')^2 + (-1)^2}} = \frac{|y - x y'|}{\sqrt{1 + (y')^2}}$$
73. Given condition $p = x$ (abscissa):
   $$\frac{|y - x y'|}{\sqrt{1 + (y')^2}} = x \implies (y - x y')^2 = x^2 [1 + (y')^2]$$
74. Expand:
   $$y^2 - 2xy y' + x^2 (y')^2 = x^2 + x^2 (y')^2$$
   $$y^2 - x^2 = 2xy y' \implies \mathbf{\frac{dy}{dx} = \frac{y^2 - x^2}{2xy}}$$
75. Notice this matches the homogeneous form solved in PYQ 4!
   Let $x^2 + y^2 = 2cx \implies$ circle passing through origin with center on $x$-axis.
   Passing through $(1, 0) \implies 1 + 0 = 2c \implies c = 1/2$.
   $$\mathbf{x^2 + y^2 - x = 0 \iff \left(x - \frac{1}{2}\right)^2 + y^2 = \frac{1}{4}}$$

---

## 4. High-Yield Traps, Exam Hacks & Edge Cases

| Concept / Technique | Common Error / Conceptual Trap | Master Exam Strategy & Correct Approach |
| :--- | :--- | :--- |
| **Degree Evaluation** | Declaring degree for non-polynomial forms like $\ln(y') = x$ without attempting algebraic inversion. | Always check if isolating the derivative removes the transcendental trap: $y' = e^x$ has order $1$, degree $1$! |
| **Leading Coefficient in LDE** | Forgetting to divide by the coefficient of $y'$ before evaluating $P(x)$ (e.g. In $(x^2+1)y' + 2xy = Q$, setting $P = 2x$ instead of $\frac{2x}{x^2+1}$). | Normalize the differential equation into strict canonical form $\frac{dy}{dx} + P(x)y = Q(x)$ before computing $\text{I.F.} = e^{\int P dx}$. |
| **LDE in $x$ vs $y$** | Forcing an equation into LDE in $y$ when $\frac{dy}{dx}$ has $y$ in the denominator (e.g. $(x + 2y^3) \frac{dy}{dx} = y$). | Invert to $\frac{dx}{dy}$: $\frac{dx}{dy} = \frac{x + 2y^3}{y} \implies \frac{dx}{dy} - \frac{1}{y}x = 2y^2$, which is immediately linear in $x$! |
| **Division by Zero / Missing Singular Solutions** | Dividing by $g(y)$ in variable separation $\frac{dy}{dx} = f(x)g(y)$ without checking roots where $g(y) = 0$. | The roots $y = k$ where $g(k) = 0$ represent **constant singular solutions** that may not emerge from the general integral constant $C$. |
| **Constant of Integration Timing** | Adding $+ C$ after taking square roots or exponents. | The constant $C$ must be added **at the instant of integration**, then carried through algebraic transformations (e.g., $\ln y = x + C \implies y = A e^x$, not $y = e^x + C$). |
| **Orthogonal Trajectory Sign** | Replacing $y'$ with $\frac{1}{y'}$ instead of $-\frac{1}{y'}$. | Orthogonal tangents obey $m_1 m_2 = -1$. The substitution must be $y' \to -\frac{1}{y'}$. In polar, $\frac{dr}{d\theta} \to -r^2 \frac{d\theta}{dr}$. |

---

### Master Reference Table of Differential Equation Types

| Class of Equation | Canonical Standard Form | Substitution / Solving Algorithm | General Integral Formula |
| :--- | :--- | :--- | :--- |
| **Variable Separable** | $f(x) dx + g(y) dy = 0$ | Direct integration of separate variables | $\int f(x) dx + \int g(y) dy = C$ |
| **Reducible to Separable** | $\frac{dy}{dx} = f(ax + by + c)$ | Put $t = ax + by + c$ | $\int \frac{dt}{a + b f(t)} = x + C$ |
| **Homogeneous** | $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$ | Put $y = vx \implies y' = v + x v'$ | $\int \frac{dv}{F(v) - v} = \ln|x| + C$ |
| **Non-Homog. Reducible** | $\frac{dy}{dx} = \frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}$ | If $a_2 + b_1 = 0$: Cross multiply.If $\frac{a_1}{a_2} = \frac{b_1}{b_2}$: Put $a_1 x + b_1 y = t$.Else: $x = X + h, y = Y + k$. | Reduces to homogeneous or exact differential. |
| **Linear in $y$** | $\frac{dy}{dx} + P(x) y = Q(x)$ | $\text{I.F.} = e^{\int P(x) dx}$ | $y \cdot (\text{I.F.}) = \int Q(x) (\text{I.F.}) dx + C$ |
| **Linear in $x$** | $\frac{dx}{dy} + P(y) x = Q(y)$ | $\text{I.F.} = e^{\int P(y) dy}$ | $x \cdot (\text{I.F.}) = \int Q(y) (\text{I.F.}) dy + C$ |
| **Bernoulli Form** | $\frac{dy}{dx} + P(x) y = Q(x) y^n$ | Divide by $y^n$, put $z = y^{1-n}$ | $\frac{dz}{dx} + (1-n) P(x) z = (1-n) Q(x)$ |
| **Generalized Linear** | $f'(y) \frac{dy}{dx} + P(x) f(y) = Q(x)$ | Put $z = f(y)$ | $\frac{dz}{dx} + P(x) z = Q(x)$ |
| **Exact Differential** | $M dx + N dy = 0$ with $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}$ | Inspection grouping or $\int M dx + \int (N \text{ without } x) dy = C$ | $u(x, y) = C$ |
| **Polar Grouping** | Combines $(x dx + y dy)$ & $(x dy - y dx)$ | Put $x = r\cos\theta, y = r\sin\theta$ | $r dr$ and $r^2 d\theta$ separate immediately. |
| **Orthogonal Traj. (Cart.)** | $F(x, y, y') = 0$ | Replace $y' \to -\frac{1}{y'}$ | $F\left(x, y, -\frac{1}{y'}\right) = 0$ |
| **Orthogonal Traj. (Polar)** | $F(r, \theta, r') = 0$ | Replace $r' \to -r^2 / \theta'$ | $F\left(r, \theta, -r^2 \frac{d\theta}{dr}\right) = 0$ |
