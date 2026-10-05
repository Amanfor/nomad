Mathematics Revision Context: Chapter 04 — Theory of Equations and Inequations
Source: Arihant Mathematics HandBook (JEE Main & Advanced) & JEE(main) Source Materials
Extracted into: JEE/context/
Batch Range: Chapter 04 (Pages 46–61)
Status: Verified and Formatted for JEE Main / Advanced Context Engine


________________


1. Polynomials & Polynomial Equations
1.1 Definitions & Terminology
* Polynomial: An algebraic expression of the form: $$P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0 \quad (a_n \neq 0)$$ where $n \in \mathbb{W}$ is the degree of the polynomial, and $a_0, a_1, \dots, a_n$ are constants (coefficients).
* Real Polynomial: Coefficients $a_i \in \mathbb{R}$ and variable $x \in \mathbb{R}$.
* Complex Polynomial: At least one coefficient $a_i \in \mathbb{C}$ or variable $x \in \mathbb{C}$.
* Polynomial Equation: Equating a polynomial to zero, $P(x) = 0$.
   * Linear equation: Degree 1 ($ax + b = 0, a \neq 0$)
   * Quadratic equation: Degree 2 ($ax^2 + bx + c = 0, a \neq 0$)
   * Cubic equation: Degree 3 ($ax^3 + bx^2 + cx + d = 0, a \neq 0$)
   * Biquadratic (Quartic) equation: Degree 4 ($ax^4 + bx^3 + cx^2 + dx + e = 0, a \neq 0$)
* Roots vs. Zeroes: A number $\alpha$ is a zero of polynomial $P(x)$ if $P(\alpha) = 0$. The same number $\alpha$ is called a root or solution of the equation $P(x) = 0$.
1.2 Fundamental Theorem of Algebra & Factor Theorem
1. Fundamental Theorem of Algebra: Every polynomial equation $P(x) = 0$ of degree $n \ge 1$ with complex coefficients has at least one complex root, and counting multiplicities, has exactly $n$ roots.
2. Remainder Theorem: When $P(x)$ is divided by $(x - a)$, the remainder is $R = P(a)$.
3. Factor Theorem: $(x - a)$ is a factor of $P(x) \iff P(a) = 0$.
4. Identity Condition: If an equation $a_n x^n + a_{n-1} x^{n-1} + \dots + a_0 = 0$ is satisfied by more than $n$ distinct values of $x$, it is not an equation but an identity ($a_n = a_{n-1} = \dots = a_0 = 0$).
   * Example: $(x-a)(x-b) = x^2 - (a+b)x + ab$ holds for all $x \in \mathbb{R}$.


________________


2. Quadratic Equations & Nature of Roots
2.1 Standard Form & Direct Quadratic Formula
For $ax^2 + bx + c = 0$ ($a, b, c \in \mathbb{R}, a \neq 0$):


* Roots: $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} = \frac{-b \pm \sqrt{D}}{2a}$$ where Discriminant $D = \Delta = b^2 - 4ac$.
2.2 Comprehensive Nature of Roots
Let $a, b, c \in \mathbb{R}$ and $a \neq 0$:


1. $D > 0$: Roots are real, unequal, and distinct.
   * If $a, b, c \in \mathbb{Q}$ and $D$ is a perfect square of a rational number $\implies$ roots are rational and distinct.
   * If $a = 1$, $b, c \in \mathbb{Z}$, and $D$ is a perfect square of an integer $\implies$ roots are integral.
   * If $a, b, c \in \mathbb{Q}$ and $D > 0$ is not a perfect square $\implies$ roots are irrational and conjugate surds ($p + \sqrt{q}$ and $p - \sqrt{q}$, $p, q \in \mathbb{Q}, \sqrt{q} \notin \mathbb{Q}$).
2. $D = 0$: Roots are real and equal (coincident): $\alpha = \beta = -\frac{b}{2a}$.
   * The quadratic expression is a perfect square: $ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2$.
3. $D < 0$: Roots are non-real complex conjugate pairs: $$\alpha = p + iq, \quad \beta = p - iq \quad (p, q \in \mathbb{R}, q \neq 0)$$ (Note: Complex conjugate pairing holds strictly when coefficients $a, b, c$ are real).
2.3 Roots Under Particular Coefficient Constraints
For $ax^2 + bx + c = 0$:


* Reciprocal Roots: One root is the reciprocal of the other ($\alpha \beta = 1$) $\iff c = a$.
* Equal Magnitude, Opposite Sign: $\alpha + \beta = 0 \iff b = 0$ (provided $ac \le 0$ for real roots).
* One Root Zero: $\alpha \beta = 0 \iff c = 0$.
* Both Roots Zero: $b = 0$ and $c = 0$.
* One Root Infinite: Formally, as $a \to 0$, one root tends to $\infty$.
* Both Roots Infinite: Formally, as $a \to 0$ and $b \to 0$, both roots tend to $\infty$.
* Roots of Opposite Signs: $\alpha \beta < 0 \iff \frac{c}{a} < 0 \iff ac < 0$ (automatically guarantees $D = b^2 - 4ac > 0$).
* Both Roots Positive: $D \ge 0$, $\alpha + \beta = -\frac{b}{a} > 0$, and $\alpha \beta = \frac{c}{a} > 0$.
* Both Roots Negative: $D \ge 0$, $\alpha + \beta = -\frac{b}{a} < 0$, and $\alpha \beta = \frac{c}{a} > 0$.
* Sum of Coefficients is Zero ($a + b + c = 0$): One root is identically $1$, and the other root is $\frac{c}{a}$.
* Alternating Sum is Zero ($a - b + c = 0$): One root is identically $-1$, and the other root is $-\frac{c}{a}$.


________________


3. Relations Between Roots and Coefficients (Vieta's Formulas)
3.1 Quadratic Equation ($ax^2 + bx + c = 0$)
Let roots be $\alpha, \beta$: $$\alpha + \beta = -\frac{b}{a}, \quad \alpha \beta = \frac{c}{a}$$ $$\text{Difference of Roots: } |\alpha - \beta| = \frac{\sqrt{D}}{|a|} = \frac{\sqrt{b^2 - 4ac}}{|a|}$$


* Symmetric Functions of Roots:
   * $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta = \frac{b^2 - 2ac}{a^2}$
   * $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = \frac{-b(b^2 - 3ac)}{a^3}$
   * $\alpha^4 + \beta^4 = (\alpha^2 + \beta^2)^2 - 2(\alpha\beta)^2$
   * $\frac{1}{\alpha} + \frac{1}{\beta} = \frac{\alpha + \beta}{\alpha\beta} = -\frac{b}{c}$
   * $\frac{\alpha}{\beta} + \frac{\beta}{\alpha} = \frac{\alpha^2 + \beta^2}{\alpha\beta} = \frac{b^2 - 2ac}{ac}$
   * $|\alpha^2 - \beta^2| = |\alpha + \beta| |\alpha - \beta| = \left|-\frac{b}{a}\right| \frac{\sqrt{D}}{|a|} = \frac{|b|\sqrt{D}}{a^2}$
3.2 Newton's Sums Theorem (High-Yield JEE Result)
Let $S_n = \alpha^n + \beta^n$ (or $\alpha^n + \beta^n + \gamma^n$). Then for equation $ax^2 + bx + c = 0$: $$a S_n + b S_{n-1} + c S_{n-2} = 0 \quad (\forall n \ge 2)$$ (Proof: Multiply $a\alpha^2 + b\alpha + c = 0$ by $\alpha^{n-2}$ and $a\beta^2 + b\beta + c = 0$ by $\beta^{n-2}$, then add).
3.3 Cubic Equation ($ax^3 + bx^2 + cx + d = 0, a \neq 0$)
Let roots be $\alpha, \beta, \gamma$:


1. $S_1 = \alpha + \beta + \gamma = -\frac{b}{a}$
2. $S_2 = \alpha\beta + \beta\gamma + \gamma\alpha = \frac{c}{a}$
3. $S_3 = \alpha\beta\gamma = -\frac{d}{a}$
* Equation form from roots: $x^3 - S_1 x^2 + S_2 x - S_3 = 0$.
3.4 Biquadratic Equation ($ax^4 + bx^3 + cx^2 + dx + e = 0, a \neq 0$)
Let roots be $\alpha, \beta, \gamma, \delta$:


1. $S_1 = \sum \alpha = -\frac{b}{a}$
2. $S_2 = \sum \alpha\beta = \frac{c}{a}$
3. $S_3 = \sum \alpha\beta\gamma = -\frac{d}{a}$
4. $S_4 = \alpha\beta\gamma\delta = \frac{e}{a}$
* Equation form: $x^4 - S_1 x^3 + S_2 x^2 - S_3 x + S_4 = 0$.
3.5 General $n$-th Degree Polynomial Equation
For $a_n x^n + a_{n-1} x^{n-1} + a_{n-2} x^{n-2} + \dots + a_0 = 0$: $$\sum \alpha_1 = -\frac{a_{n-1}}{a_n}, \quad \sum \alpha_1 \alpha_2 = \frac{a_{n-2}}{a_n}, \quad \dots, \quad \prod_{i=1}^n \alpha_i = (-1)^n \frac{a_0}{a_n}$$


________________


4. Transformation of Equations
If $\alpha, \beta, \dots$ are roots of $f(x) = 0$, the equation whose roots are:


1. $-\alpha, -\beta, \dots$: Replace $x$ with $-x \implies f(-x) = 0$.
2. $k\alpha, k\beta, \dots$ ($k \neq 0$): Replace $x$ with $\frac{x}{k} \implies f\left(\frac{x}{k}\right) = 0$.
3. $\frac{\alpha}{k}, \frac{\beta}{k}, \dots$: Replace $x$ with $kx \implies f(kx) = 0$.
4. $\alpha \pm k, \beta \pm k, \dots$: Replace $x$ with $x \mp k \implies f(x \mp k) = 0$.
5. $\frac{1}{\alpha}, \frac{1}{\beta}, \dots$: Replace $x$ with $\frac{1}{x} \implies f\left(\frac{1}{x}\right) = 0$.
6. $\alpha^2, \beta^2, \dots$: Replace $x$ with $\sqrt{x} \implies f(\sqrt{x}) = 0$, rationalizing the radical.
7. $\alpha^n, \beta^n, \dots$: Replace $x$ with $x^{1/n} \implies f(x^{1/n}) = 0$.


________________


5. Conditions for Common Roots
Consider two quadratic equations: $$a_1 x^2 + b_1 x + c_1 = 0 \quad \text{and} \quad a_2 x^2 + b_2 x + c_2 = 0$$
5.1 Condition for Exactly One Common Root
Let $\alpha$ be the unique common root: $$a_1 \alpha^2 + b_1 \alpha + c_1 = 0$$ $$a_2 \alpha^2 + b_2 \alpha + c_2 = 0$$ By Cramer's Rule / Cross-multiplication: $$\frac{\alpha^2}{b_1 c_2 - b_2 c_1} = \frac{\alpha}{c_1 a_2 - c_2 a_1} = \frac{1}{a_1 b_2 - a_2 b_1}$$ $$\implies \alpha = \frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1} = \frac{b_1 c_2 - b_2 c_1}{c_1 a_2 - c_2 a_1}$$ Equating these two expressions yields the Necessary & Sufficient Condition: $$(c_1 a_2 - c_2 a_1)^2 = (b_1 c_2 - b_2 c_1)(a_1 b_2 - a_2 b_1)$$


* Practical Method: Make the coefficient of $x^2$ identical in both equations and subtract them. The linear equation directly gives the common root $\alpha$.
5.2 Condition for Both Roots Common
$$\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$$
5.3 Special JEE Common Root Rule (The Conjugate Trap)
If two quadratic equations have rational (or real) coefficients and one common root is known to be:


* Complex ($p + iq, q \neq 0$), OR
* Irrational ($p + \sqrt{q}, \sqrt{q} \notin \mathbb{Q}$) then both roots must be common because imaginary and surd roots always occur in conjugate pairs. Thus, if one root is shared, its conjugate is automatically shared.


________________


6. Quadratic Expressions & Graphical Properties
Let $f(x) = y = ax^2 + bx + c$ ($a \neq 0, a, b, c \in \mathbb{R}$).
6.1 Geometry of the Parabola
Rewriting in vertex form: $$y = a\left(x + \frac{b}{2a}\right)^2 - \frac{D}{4a} \iff \left(x + \frac{b}{2a}\right)^2 = \frac{1}{a}\left(y + \frac{D}{4a}\right)$$


* Shape: Vertical parabola with axis of symmetry $x = -\frac{b}{2a}$.
* Vertex: $V\left(-\frac{b}{2a}, -\frac{D}{4a}\right)$.
* Orientation:
   * $a > 0$: Parabola opens upwards ($\bigcup$).
   * $a < 0$: Parabola opens downwards ($\bigcap$).
6.2 Extrema of Quadratic Expression
1. If $a > 0$, $f(x)$ attains its global minimum at $x = -\frac{b}{2a}$: $$f_{\min} = -\frac{D}{4a} = \frac{4ac - b^2}{4a}, \quad \text{Range} = \left[-\frac{D}{4a}, \infty\right)$$
2. If $a < 0$, $f(x)$ attains its global maximum at $x = -\frac{b}{2a}$: $$f_{\max} = -\frac{D}{4a} = \frac{4ac - b^2}{4a}, \quad \text{Range} = \left(-\infty, -\frac{D}{4a}\right]$$
6.3 Sign of Quadratic Expression $\forall x \in \mathbb{R}$
1. $f(x) > 0$ strictly for all $x \in \mathbb{R} \iff a > 0$ and $D < 0$ (entire parabola lies strictly above the $x$-axis).
2. $f(x) < 0$ strictly for all $x \in \mathbb{R} \iff a < 0$ and $D < 0$ (entire parabola lies strictly below the $x$-axis).
3. $f(x) \ge 0$ for all $x \in \mathbb{R} \iff a > 0$ and $D \le 0$ (touches or lies above the $x$-axis).
4. $f(x) \le 0$ for all $x \in \mathbb{R} \iff a < 0$ and $D \le 0$ (touches or lies below the $x$-axis).
5. If $D > 0$ with real roots $\alpha < \beta$:
   * For $a > 0$: $f(x) > 0$ on $(-\infty, \alpha) \cup (\beta, \infty)$, and $f(x) < 0$ on $(\alpha, \beta)$.
   * For $a < 0$: $f(x) < 0$ on $(-\infty, \alpha) \cup (\beta, \infty)$, and $f(x) > 0$ on $(\alpha, \beta)$.


________________


7. Location of Roots (Interval Constraints)
Let $f(x) = ax^2 + bx + c$ with roots $\alpha \le \beta$. The necessary and sufficient conditions for roots relative to real constants $k, k_1, k_2$:


Problem Objective
	Necessary & Sufficient Conditions
	1. Both roots $> k$ ($\alpha, \beta > k$)
	(i) $D \ge 0$ 
 (ii) $-\frac{b}{2a} > k$ 


 (iii) $a \cdot f(k) > 0$
	2. Both roots $< k$ ($\alpha, \beta < k$)
	(i) $D \ge 0$ 
 (ii) $-\frac{b}{2a} < k$ 


 (iii) $a \cdot f(k) > 0$
	3. Number $k$ lies between roots ($\alpha < k < \beta$)
	(i) $a \cdot f(k) < 0$ 


 (Note: $D > 0$ is automatically guaranteed if $a \cdot f(k) < 0$)
	4. Exactly one root lies in $(k_1, k_2)$
	(i) $f(k_1) \cdot f(k_2) < 0$ (for roots not coinciding with boundaries)
	5. Both roots lie in interval $(k_1, k_2)$
	(i) $D \ge 0$ 
 (ii) $k_1 < -\frac{b}{2a} < k_2$ 
 (iii) $a \cdot f(k_1) > 0$ 


 (iv) $a \cdot f(k_2) > 0$
	6. Both $k_1$ and $k_2$ lie between roots ($\alpha < k_1 < k_2 < \beta$)
	(i) $a \cdot f(k_1) < 0$ 


 (ii) $a \cdot f(k_2) < 0$
	

* Special Deduction: Roots of Opposite Sign: $0$ lies between the roots $\iff a \cdot f(0) < 0 \iff ac < 0$.


________________


8. General Theory of Polynomial Equations
8.1 Descartes' Rule of Signs
1. Maximum Positive Real Roots: The number of positive real roots of a polynomial equation $P(x) = 0$ cannot exceed the number of sign changes between consecutive non-zero coefficients in $P(x)$.
2. Maximum Negative Real Roots: The number of negative real roots cannot exceed the number of sign changes in $P(-x)$.
3. If the actual number of positive roots is $p$ and sign changes is $v$, then $v - p$ is an even non-negative integer ($v - p = 0, 2, 4, \dots$).
8.2 Intermediate Value Theorem & Rolle's Theorem
1. Intermediate Value Theorem: If polynomial $f(x)$ satisfies $f(a) \cdot f(b) < 0$, then $f(x) = 0$ has at least one real root (and generally an odd number of real roots) in $(a, b)$.
2. If $f(a) \cdot f(b) > 0$, there are either no real roots or an even number of real roots in $(a, b)$.
3. Rolle's Theorem for Polynomials: Between any two real roots of $f(x) = 0$, there lies at least one real root of $f'(x) = 0$.
4. Repeated Root Condition: $\alpha$ is a root of multiplicity $m$ for $f(x) = 0 \iff f(\alpha) = f'(\alpha) = f''(\alpha) = \dots = f^{(m-1)}(\alpha) = 0$ and $f^{(m)}(\alpha) \neq 0$.


________________


9. Theory of Inequalities & Solution Techniques
9.1 Types of Inequalities
* Numerical Inequality: Contains constants only (e.g., $5 > 2$).
* Literal Inequality: Involves algebraic variables (e.g., $2x + 3 \le 7$).
* Strict Inequality: Strictly $<$ or $>$.
* Slack Inequality: Involves $\le$ or $\ge$.
9.2 Properties of Inequalities ($\forall a, b, c, d \in \mathbb{R}$)
1. $a > b \implies a \pm c > b \pm c$.
2. $a > b$ and $c > 0 \implies ac > bc$ and $\frac{a}{c} > \frac{b}{c}$.
3. $a > b$ and $c < 0 \implies ac < bc$ and $\frac{a}{c} < \frac{b}{c}$ (multiplying or dividing by a negative number reverses the inequality).
4. $a > b > 0 \implies \frac{1}{a} < \frac{1}{b}$ and $a^n > b^n$ ($n \in \mathbb{N}$).
5. $a < b < 0 \implies \frac{1}{a} > \frac{1}{b}$.
6. $a > b$ and $c > d \implies a + c > b + d$.
7. $a > b > 0$ and $c > d > 0 \implies ac > bd$.
9.3 Inequations Involving Absolute Values
For $a > 0$:


1. $|x| < a \iff -a < x < a \iff x \in (-a, a)$
2. $|x| \le a \iff -a \le x \le a \iff x \in [-a, a]$
3. $|x| > a \iff x < -a \text{ or } x > a \iff x \in (-\infty, -a) \cup (a, \infty)$
4. $|x| \ge a \iff x \le -a \text{ or } x \ge a \iff x \in (-\infty, -a] \cup [a, \infty)$
5. $a \le |x| \le b \iff x \in [-b, -a] \cup [a, b]$
9.4 Wavy Curve Method (Method of Intervals)
To solve rational inequalities of the form: $$f(x) = \frac{(x - a_1)^{k_1} (x - a_2)^{k_2} \dots (x - a_p)^{k_p}}{(x - b_1)^{m_1} (x - b_2)^{m_2} \dots (x - b_q)^{m_q}} \gtrless 0$$


* Step 1: Ensure coefficient of $x$ in every linear factor is positive ($+1$).
* Step 2: Mark all critical points (zeroes $a_i$ and poles $b_j$) on the real number line in ascending order.
* Step 3: To the right of the rightmost critical point, $f(x)$ is always positive ($+$).
* Step 4: Moving leftwards across each critical point:
   * If the factor has an odd exponent, the sign of $f(x)$ changes ($+ \to -$ or $- \to +$).
   * If the factor has an even exponent, the sign of $f(x)$ remains unchanged.
* Step 5: Pick the intervals satisfying the target inequality, strictly excluding zeroes of the denominator (poles $b_j$).
9.5 Range of Rational Expressions $y = \frac{a_1 x^2 + b_1 x + c_1}{a_2 x^2 + b_2 x + c_2}$
1. Equate the expression to $y$ and cross-multiply: $$(a_2 y - a_1)x^2 + (b_2 y - b_1)x + (c_2 y - c_1) = 0$$
2. Since $x \in \mathbb{R}$, the discriminant of this quadratic in $x$ must be non-negative: $$D = (b_2 y - b_1)^2 - 4(a_2 y - a_1)(c_2 y - c_1) \ge 0$$
3. Solve the resulting quadratic inequality in $y$ to determine the range. Check the boundary case where the leading coefficient $(a_2 y - a_1) = 0$ separately.


________________


10. Classical Inequalities
10.1 AM–GM–HM Inequality
For $n$ positive real numbers $a_1, a_2, \dots, a_n > 0$: $$\text{AM} \ge \text{GM} \ge \text{HM}$$ $$\frac{a_1 + a_2 + \dots + a_n}{n} \ge (a_1 a_2 \dots a_n)^{1/n} \ge \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + \dots + \frac{1}{a_n}}$$


* Equality Condition: $\text{AM} = \text{GM} = \text{HM} \iff a_1 = a_2 = \dots = a_n$.
* Weighted AM–GM Inequality: For positive weights $m_1, m_2, \dots, m_n > 0$: $$\frac{m_1 a_1 + m_2 a_2 + \dots + m_n a_n}{m_1 + m_2 + \dots + m_n} \ge \left(a_1^{m_1} a_2^{m_2} \dots a_n^{m_n}\right)^{\frac{1}{m_1 + m_2 + \dots + m_n}}$$
10.2 Cauchy-Schwarz Inequality & Lagrange's Identity
* Lagrange's Identity: For real numbers $a_1, a_2, a_3$ and $b_1, b_2, b_3$: $$(a_1^2 + a_2^2 + a_3^2)(b_1^2 + b_2^2 + b_3^2) - (a_1 b_1 + a_2 b_2 + a_3 b_3)^2 = (a_1 b_2 - a_2 b_1)^2 + (a_2 b_3 - a_3 b_2)^2 + (a_3 b_1 - a_1 b_3)^2 \ge 0$$
* Cauchy-Schwarz Inequality: For any real sequences $a_i, b_i$: $$\left(\sum_{i=1}^n a_i b_i\right)^2 \le \left(\sum_{i=1}^n a_i^2\right) \left(\sum_{i=1}^n b_i^2\right)$$ Equality holds if and only if $\frac{a_1}{b_1} = \frac{a_2}{b_2} = \dots = \frac{a_n}{b_n}$.