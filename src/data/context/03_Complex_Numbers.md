Mathematics Revision Context: Chapter 03 — Complex Numbers

Batch Range: Chapter 03 (Pages 28–45)

________________

1. Fundamentals & Basic Definitions
1.1 Complex Number & Components
- Definition: A number of the form $z = x + iy$, where $x, y \in \mathbb{R}$ and $i = \sqrt{-1}$, is called a complex number. The set of all complex numbers is denoted by $\mathbb{C}$.
- Real Part: $x = \text{Re}(z)$
- Imaginary Part: $y = \text{Im}(z)$ (Note: $\text{Im}(z)$ is a real number, not including $i$).
- Purely Real: $z$ is purely real if $\text{Im}(z) = 0 \iff z = \bar{z}$.
- Purely Imaginary: $z$ is purely imaginary if $\text{Re}(z) = 0 \iff z = -\bar{z}$ (for $z \neq 0$).
- Zero Complex Number: $z = 0 + 0i = 0$ is both purely real and purely imaginary.
1.2 Equality of Complex Numbers
Two complex numbers $z_1 = x_1 + i y_1$ and $z_2 = x_2 + i y_2$ are equal if and only if their real and imaginary parts are simultaneously equal: $$z_1 = z_2 \iff x_1 = x_2 \quad \text{and} \quad y_1 = y_2$$

- Inequality Trap: Order relations ($<, >, \le, \ge$) are not defined for complex numbers unless both numbers are purely real. Expressions like $z_1 > z_2$ are mathematically meaningless in $\mathbb{C}$. However, their moduli can be compared (e.g., $|z_1| > |z_2|$) because moduli are real numbers.
1.3 Properties of Iota ($i$)
Introduced by Euler ($i^2 = -1$):

- $i^0 = 1$
- $i^1 = i = \sqrt{-1}$
- $i^2 = -1$
- $i^3 = i^2 \cdot i = -i$
- $i^4 = (i^2)^2 = 1$
- General Index Rule ($\forall n \in \mathbb{Z}$): $$i^{4n} = 1, \quad i^{4n+1} = i, \quad i^{4n+2} = -1, \quad i^{4n+3} = -i$$
- Consecutive Sum Rule: The sum of four consecutive powers of $i$ is identically zero: $$i^n + i^{n+1} + i^{n+2} + i^{n+3} = 0 \quad (\forall n \in \mathbb{Z})$$
- Square Root Product Trap: $\sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$ is valid only if at least one of $a$ or $b$ is non-negative. If both $a < 0$ and $b < 0$: $$\sqrt{-a} \cdot \sqrt{-b} = (i\sqrt{a})(i\sqrt{b}) = i^2 \sqrt{ab} = -\sqrt{ab} \neq \sqrt{(-a)(-b)}$$

________________

2. Algebra of Complex Numbers
For $z_1 = x_1 + i y_1$ and $z_2 = x_2 + i y_2$:

3. Addition: $$z_1 + z_2 = (x_1 + x_2) + i(y_1 + y_2)$$
4. Subtraction: $$z_1 - z_2 = (x_1 - x_2) + i(y_1 - y_2)$$
5. Multiplication: $$z_1 z_2 = (x_1 x_2 - y_1 y_2) + i(x_1 y_2 + x_2 y_1)$$
6. Division ($z_2 \neq 0$): $$\frac{z_1}{z_2} = \frac{x_1 + i y_1}{x_2 + i y_2} \cdot \frac{x_2 - i y_2}{x_2 - i y_2} = \frac{(x_1 x_2 + y_1 y_2) + i(x_2 y_1 - x_1 y_2)}{x_2^2 + y_2^2} = \frac{z_1 \bar{z}_2}{|z_2|^2}$$
7. Multiplicative Inverse ($z^{-1}$): $$z^{-1} = \frac{1}{z} = \frac{\bar{z}}{|z|^2} = \frac{x - iy}{x^2 + y^2}$$

________________

8. Conjugate of a Complex Number ($\bar{z}$)
If $z = x + iy$, its complex conjugate is $\bar{z} = x - iy$ (reflection of $z$ across the real axis).
3.1 Properties of Conjugates
9. $\overline{(\bar{z})} = z$
10. $z + \bar{z} = 2\text{Re}(z)$ (purely real)
11. $z - \bar{z} = 2i\text{Im}(z)$ (purely imaginary or zero)
12. $z = \bar{z} \iff z \in \mathbb{R}$
13. $z + \bar{z} = 0 \iff z$ is purely imaginary
14. $z \bar{z} = [ \text{Re}(z) ]^2 + [ \text{Im}(z) ]^2 = x^2 + y^2 = |z|^2$
15. $\overline{z_1 \pm z_2} = \bar{z}_1 \pm \bar{z}_2$
16. $\overline{z_1 z_2} = \bar{z}_1 \bar{z}_2$
17. $\overline{\left( \frac{z_1}{z_2} \right)} = \frac{\bar{z}_1}{\bar{z}_2} \quad (z_2 \neq 0)$
18. $\overline{z^n} = (\bar{z})^n \quad (n \in \mathbb{Z})$

________________

19. Modulus of a Complex Number ($|z|$)
If $z = x + iy$, the modulus (magnitude or absolute value) is defined as the Euclidean distance from the origin: $$|z| = \sqrt{x^2 + y^2} \ge 0$$
4.1 Properties of Modulus
20. $|z| \ge 0$, and $|z| = 0 \iff z = 0$.
21. $|z| = |\bar{z}| = |-z| = |-\bar{z}|$.
22. $-|z| \le \text{Re}(z) \le |z|$ and $-|z| \le \text{Im}(z) \le |z|$.
23. $z \bar{z} = |z|^2$.
24. $|z_1 z_2| = |z_1| |z_2|$ (extends to $|z_1 z_2 \dots z_n| = |z_1||z_2|\dots|z_n|$).
25. $\left| \frac{z_1}{z_2} \right| = \frac{|z_1|}{|z_2|} \quad (z_2 \neq 0)$.
26. $|z^n| = |z|^n \quad (n \in \mathbb{Z})$.
27. Parallelogram Law (Identity): $$|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2)$$ (Geometrically: The sum of squares of the diagonals of a parallelogram equals the sum of squares of its four sides).
28. Triangle Inequalities: $$||z_1| - |z_2|| \le |z_1 \pm z_2| \le |z_1| + |z_2|$$
   - $|z_1 + z_2| = |z_1| + |z_2| \iff \arg(z_1) = \arg(z_2)$ ($z_1, z_2$ and origin are collinear with $z_1, z_2$ on the same side).
   - $|z_1 - z_2| = |z_1| + |z_2| \iff \arg(z_1) - \arg(z_2) = \pm\pi$ ($z_1, z_2$ lie on opposite sides of origin).

________________

29. Argand Plane & Argument (Amplitude)
In the complex plane (Argand Diagram), real numbers lie on the horizontal $x$-axis (real axis) and imaginary numbers lie on the vertical $y$-axis (imaginary axis). A complex number $z = x + iy$ corresponds to the point $P(x, y)$.
5.1 Polar & Trigonometric Form
$$z = r(\cos\theta + i\sin\theta)$$ where:

- $r = |z| = \sqrt{x^2 + y^2}$
- $\theta = \arg(z)$ is the angle made by vector $\vec{OP}$ with the positive real axis.
5.2 Principal Argument ($\operatorname{Arg}(z)$)
By convention, the principal value of the argument lies in the interval $(-\pi, \pi]$: $$-\pi < \operatorname{Arg}(z) \le \pi$$ Let $\alpha = \tan^{-1}\left| \frac{y}{x} \right|$ be the acute reference angle ($0 \le \alpha \le \frac{\pi}{2}$):

- Quadrant I ($x > 0, y \ge 0$): $\theta = \alpha$
- Quadrant II ($x < 0, y \ge 0$): $\theta = \pi - \alpha$
- Quadrant III ($x < 0, y < 0$): $\theta = -(\pi - \alpha) = -\pi + \alpha$
- Quadrant IV ($x > 0, y < 0$): $\theta = -\alpha$
- Axial Values:
   - $z > 0$ (positive real): $\theta = 0$
   - $z < 0$ (negative real): $\theta = \pi$
   - $z = iy, y > 0$ (positive imaginary): $\theta = \frac{\pi}{2}$
   - $z = iy, y < 0$ (negative imaginary): $\theta = -\frac{\pi}{2}$
   - $z = 0$: Argument is undefined.
5.3 Properties of Arguments
30. $\arg(z_1 z_2) = \arg(z_1) + \arg(z_2) + 2k\pi \quad (k \in {0, \pm 1})$
31. $\arg\left( \frac{z_1}{z_2} \right) = \arg(z_1) - \arg(z_2) + 2k\pi \quad (k \in {0, \pm 1})$
32. $\arg(\bar{z}) = -\arg(z)$ (if $z$ is not purely negative real; if $z < 0$, $\arg(\bar{z}) = \arg(z) = \pi$).
33. $\arg(z^n) = n\arg(z) + 2k\pi$.
34. If $|z_1 + z_2| = |z_1 - z_2| \implies \arg\left( \frac{z_1}{z_2} \right) = \pm\frac{\pi}{2}$ (the vectors are perpendicular).
35. If $|z_1 + z_2| = |z_1| + |z_2| \implies \arg(z_1) = \arg(z_2)$.

________________

36. Exponential Form & De Moivre’s Theorem
6.1 Euler’s Formula & Exponential Representation
$$e^{i\theta} = \cos\theta + i\sin\theta$$

- Exponential form: $z = r e^{i\theta}$, where $r = |z|$ and $\theta = \arg(z)$.
- Conjugate: $\bar{z} = r e^{-i\theta}$.
- Identities: $$\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$
6.2 De Moivre’s Theorem (DMT)
37. For $n \in \mathbb{Z}$: $$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta) = e^{in\theta}$$
38. For rational $p/q$ ($q > 0$, $\gcd(p, q) = 1$): One of the $q$ values of $(\cos\theta + i\sin\theta)^{p/q}$ is $\cos\left( \frac{p\theta}{q} \right) + i\sin\left( \frac{p\theta}{q} \right)$. The complete set of $q$ distinct values is given by: $$\cos\left( \frac{2k\pi + p\theta}{q} \right) + i\sin\left( \frac{2k\pi + p\theta}{q} \right), \quad k = 0, 1, 2, \dots, q-1$$

________________

39. Roots of Unity
7.1 Cube Roots of Unity ($z^3 = 1$)
The roots are $1, \omega, \omega^2$: $$1, \quad \omega = \frac{-1 + i\sqrt{3}}{2} = e^{i 2\pi/3}, \quad \omega^2 = \frac{-1 - i\sqrt{3}}{2} = e^{i 4\pi/3} = e^{-i 2\pi/3}$$
Fundamental Properties:
40. $1 + \omega + \omega^2 = 0$
41. $\omega^3 = 1 \implies \omega^{3k} = 1, ; \omega^{3k+1} = \omega, ; \omega^{3k+2} = \omega^2 \quad (\forall k \in \mathbb{Z})$
42. $\bar{\omega} = \omega^2$ and $\overline{\omega^2} = \omega$.
43. $\frac{1}{\omega} = \omega^2$ and $\frac{1}{\omega^2} = \omega$.
44. The points $1, \omega, \omega^2$ form the vertices of an equilateral triangle inscribed in $|z| = 1$ with side length $\sqrt{3}$.
Key Algebraic Factorizations:
- $a^2 + ab + b^2 = (a - \omega b)(a - \omega^2 b)$
- $a^2 - ab + b^2 = (a + \omega b)(a + \omega^2 b)$
- $a^3 - b^3 = (a - b)(a - \omega b)(a - \omega^2 b)$
- $a^3 + b^3 = (a + b)(a + \omega b)(a + \omega^2 b)$
- $a^3 + b^3 + c^3 - 3abc = (a + b + c)(a + b\omega + c\omega^2)(a + b\omega^2 + c\omega)$
7.2 $n$-th Roots of Unity ($z^n = 1$)
The solutions of $z^n = 1 = e^{i 2k\pi}$ are: $$\alpha_k = e^{i \frac{2k\pi}{n}} = \cos\left( \frac{2k\pi}{n} \right) + i\sin\left( \frac{2k\pi}{n} \right), \quad k = 0, 1, 2, \dots, n-1$$ Let $\alpha = e^{i 2\pi/n}$. The roots form a geometric progression: $$1, \alpha, \alpha^2, \alpha^3, \dots, \alpha^{n-1}$$
Properties:
45. Sum of Roots: $$\sum_{k=0}^{n-1} \alpha^k = 1 + \alpha + \alpha^2 + \dots + \alpha^{n-1} = 0$$
46. Product of Roots: $$\prod_{k=0}^{n-1} \alpha^k = (-1)^{n-1}$$
47. Symmetry: Roots are symmetric with respect to the real axis; non-real roots occur in conjugate pairs ($\alpha_k = \bar{\alpha}_{n-k}$).
48. Geometric Representation: The $n$ roots represent the vertices of a regular polygon of $n$ sides inscribed in the unit circle $|z| = 1$, with one vertex at $(1, 0)$.

________________

49. Square Root & Logarithm of Complex Numbers
8.1 Square Root Formula
Let $\sqrt{x + iy} = \pm (u + iv)$. $$u = \sqrt{\frac{|z| + x}{2}}, \qquad v = \sqrt{\frac{|z| - x}{2}}$$ $$\sqrt{x + iy} = \pm \left( \sqrt{\frac{|z| + x}{2}} + i \operatorname{sgn}(y) \sqrt{\frac{|z| - x}{2}} \right)$$ where $\operatorname{sgn}(y) = 1$ if $y > 0$, and $-1$ if $y < 0$.

- For purely imaginary $i$: $\sqrt{i} = \pm \frac{1+i}{\sqrt{2}}$, $\sqrt{-i} = \pm \frac{1-i}{\sqrt{2}}$.
8.2 Logarithm of Complex Numbers
For $z = r e^{i\theta}$: $$\log(z) = \ln|z| + i(\arg(z) + 2k\pi), \quad k \in \mathbb{Z}$$

- Principal Value ($k = 0$): $$\operatorname{Log}(z) = \ln|z| + i\operatorname{Arg}(z) = \frac{1}{2}\ln(x^2 + y^2) + i\operatorname{Arg}(z)$$

________________

50. Complex Numbers in Coordinate Geometry
9.1 Distance & Section Formulas
- Distance: The distance between $z_1$ and $z_2$ is: $$d = |z_1 - z_2|$$
- Internal Division ($m : n$): $$z = \frac{m z_2 + n z_1}{m + n}$$
- External Division ($m : n$): $$z = \frac{m z_2 - n z_1}{m - n}$$
- Midpoint: $z = \frac{z_1 + z_2}{2}$
9.2 Centers of a Triangle ($z_1, z_2, z_3$)
- Centroid ($G$): $$z_G = \frac{z_1 + z_2 + z_3}{3}$$
- Incentre ($I$): $$z_I = \frac{a z_1 + b z_2 + c z_3}{a + b + c} \quad (a = |z_2 - z_3|, b = |z_3 - z_1|, c = |z_1 - z_2|)$$
- Area of Triangle: $$\Delta = \frac{1}{4i} \begin{vmatrix} z_1 & \bar{z}_1 & 1 \\ z_2 & \bar{z}_2 & 1 \\ z_3 & \bar{z}_3 & 1 \end{vmatrix}$$
9.3 Collinearity & Equilateral Triangles
51. Condition of Collinearity: Three distinct points $z_1, z_2, z_3$ are collinear if and only if: $$\begin{vmatrix} z_1 & \bar{z}_1 & 1 \\ z_2 & \bar{z}_2 & 1 \\ z_3 & \bar{z}_3 & 1 \end{vmatrix} = 0 \iff \frac{z_3 - z_1}{z_2 - z_1} \in \mathbb{R}$$
52. Equilateral Triangle Condition: $\triangle z_1 z_2 z_3$ is equilateral if and only if: $$z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$$ Equivalently: $$\frac{1}{z_1 - z_2} + \frac{1}{z_2 - z_3} + \frac{1}{z_3 - z_1} = 0$$ (If the origin is the circumcenter/centroid, the condition simplifies to $z_1 + z_2 + z_3 = 0$ and $z_1^2 + z_2^2 + z_3^2 = 0$).
9.4 Straight Lines in the Complex Plane
- General Equation of a Line: $$\bar{a}z + a\bar{z} + b = 0 \quad (b \in \mathbb{R}, a \in \mathbb{C} \setminus {0})$$
- Complex Slope ($\mu$): For line through $z_1$ and $z_2$: $$\mu = \frac{z_1 - z_2}{\bar{z}_1 - \bar{z}_2}$$
   - Two lines with complex slopes $\mu_1, \mu_2$ are:
      - Parallel $\iff \mu_1 = \mu_2$
      - Perpendicular $\iff \mu_1 + \mu_2 = 0$
- Perpendicular Distance: From point $z_0$ to $\bar{a}z + a\bar{z} + b = 0$: $$p = \frac{|\bar{a}z_0 + a\bar{z}_0 + b|}{2|a|}$$
9.5 Circles in the Complex Plane
53. Standard Form: Center $z_0$, radius $r$: $$|z - z_0| = r$$
54. General Equation of a Circle: $$z\bar{z} + \bar{a}z + a\bar{z} + b = 0 \quad (b \in \mathbb{R})$$
   - Center: $z_0 = -a$
   - Radius: $r = \sqrt{|a|^2 - b} \quad (\text{requires } |a|^2 \ge b)$
55. Diameter Form: Circle with endpoints $z_1, z_2$: $$(z - z_1)(\bar{z} - \bar{z}_2) + (z - z_2)(\bar{z} - \bar{z}_1) = 0 \iff \arg\left( \frac{z - z_1}{z - z_2} \right) = \pm\frac{\pi}{2}$$
56. Apollonius Circle (Ratio Locus): $$\left| \frac{z - z_1}{z - z_2} \right| = k$$
   - If $k = 1$: Straight line (perpendicular bisector of segment $z_1 z_2$).
   - If $k \neq 1$ ($k > 0$): Circle.
9.6 Conformal Rotation Theorem
If vector $z_2 - z_1$ is rotated counter-clockwise through angle $\alpha$ to form vector $z_3 - z_1$: $$\frac{z_3 - z_1}{z_2 - z_1} = \left| \frac{z_3 - z_1}{z_2 - z_1} \right| e^{i\alpha}$$
