Mathematics Revision Context: Chapter 05 — Sequences and Series

Batch Range: Chapter 05 (Pages 62–73)

________________

1. Fundamentals of Sequences, Progressions & Series
1.1 Definitions & Classification
- Sequence: A sequence is a function whose domain is the set of natural numbers $\mathbb{N}$ (or a finite initial subset ${1, 2, 3, \dots, k}$). The image of $n$ is denoted as $a_n$ or $T_n$ ($n$-th term / general term).
   - Finite Sequence: Contains a finite number of terms.
   - Infinite Sequence: Continues indefinitely without an end term.
   - Real Sequence: A sequence whose range is a subset of $\mathbb{R}$.
- Progression: A sequence whose terms strictly follow a definite mathematical rule or pattern.
- Series: The indicated sum of the terms of a sequence: $$S = a_1 + a_2 + a_3 + \dots + a_n + \dots = \sum_{k=1}^\infty a_k$$
   - Partial Sum ($S_n$): The sum of the first $n$ terms: $S_n = \sum_{k=1}^n a_k$.
   - Fundamental relation: $$a_n = S_n - S_{n-1} \quad (n \ge 2), \quad a_1 = S_1$$

________________

2. Arithmetic Progression (AP)
2.1 Definition & Standard Form
A sequence $a_1, a_2, a_3, \dots$ is an AP if the difference between any term and its preceding term is constant: $$a_{n+1} - a_n = d \quad (\forall n \in \mathbb{N})$$ where $a$ is the first term and $d$ is the common difference ($d \in \mathbb{R}$).

- Standard form: $a, , a+d, , a+2d, , a+3d, , \dots, , a+(n-1)d$.
2.2 General Terms
3. $n$-th Term from the Beginning: $$T_n = a_n = a + (n-1)d$$
4. $n$-th Term from the End (Last term $l$): $$T'_n = l - (n-1)d$$
5. Equidistant Sum Property: The sum of terms equidistant from the beginning and the end is constant and equals the sum of the first and last terms: $$T_k + T'_{k} = T_1 + T_n = a + l$$
6. Symmetric Term Relation: $$a_n = \frac{a_{n-k} + a_{n+k}}{2} \quad (k < n)$$
2.3 Sum of First $n$ Terms ($S_n$)
$$S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}[a + l]$$

- Algebraic Nature of $S_n$: A sequence is an AP if and only if $S_n$ is a quadratic expression in $n$ with no constant term: $$S_n = An^2 + Bn$$ In this form: $$\text{Common difference } d = 2A, \quad \text{First term } a = A + B$$
- Algebraic Nature of $T_n$: A sequence is an AP if and only if $T_n$ is a linear expression in $n$: $$T_n = pn + q \implies \text{Common difference } d = p$$
2.4 Crucial Properties of an AP
7. If a constant $k$ is added to or subtracted from each term of an AP, the resulting sequence is an AP with the same common difference $d$.
8. If each term of an AP is multiplied or divided by a non-zero constant $k$, the resulting sequence is an AP with common difference $kd$ or $\frac{d}{k}$, respectively.
9. Three consecutive numbers $a, b, c$ are in AP if and only if: $$2b = a + c \iff b - a = c - b$$
10. If two APs $a_1, a_2, \dots$ (common difference $d_1$) and $b_1, b_2, \dots$ (common difference $d_2$) are added or subtracted, the resulting sequence is an AP with common difference $d_1 \pm d_2$.
11. The terms common to two APs with common differences $d_1$ and $d_2$ form a new AP whose common difference is: $$d_{\text{common}} = \text{LCM}(d_1, d_2)$$
12. If the ratio of sums of $n$ terms of two APs is given as $\frac{S_n}{S'_n} = \frac{f(n)}{g(n)}$, the ratio of their $n$-th terms is obtained by replacing $n$ with $2n - 1$: $$\frac{T_n}{T'_n} = \frac{f(2n-1)}{g(2n-1)}$$ (Conversely, to find the ratio of sums from the ratio of $n$-th terms, replace $n$ with $\frac{n+1}{2}$).
2.5 Strategic Selection of Terms in AP
- 3 terms: $a - d, ; a, ; a + d$ (Common difference $= d$; Sum $= 3a$)
- 4 terms: $a - 3d, ; a - d, ; a + d, ; a + 3d$ (Common difference $= 2d$; Sum $= 4a$)
- 5 terms: $a - 2d, ; a - d, ; a, ; a + d, ; a + 2d$ (Common difference $= d$; Sum $= 5a$)
- 6 terms: $a - 5d, ; a - 3d, ; a - d, ; a + d, ; a + 3d, ; a + 5d$ (Common difference $= 2d$; Sum $= 6a$)
2.6 Arithmetic Mean (AM)
13. Single AM between $a$ and $b$: $$A = \frac{a+b}{2}$$
14. Insertion of $n$ Arithmetic Means ($A_1, A_2, \dots, A_n$) between $a$ and $b$: The sequence $a, A_1, A_2, \dots, A_n, b$ forms an AP of $(n+2)$ terms. $$\text{Common difference } d = \frac{b - a}{n + 1}$$ $$A_k = a + k d = a + k\left(\frac{b - a}{n + 1}\right) \quad (1 \le k \le n)$$
15. Sum of $n$ AMs: The sum of $n$ arithmetic means inserted between $a$ and $b$ is $n$ times the single AM between $a$ and $b$: $$\sum_{k=1}^n A_k = n \cdot \left(\frac{a+b}{2}\right) = n \cdot A$$

________________

16. Geometric Progression (GP)
3.1 Definition & Standard Form
A sequence $a_1, a_2, a_3, \dots$ ($a_i \neq 0$) is a GP if the ratio of any term to its preceding term is constant: $$\frac{a_{n+1}}{a_n} = r \quad (\forall n \in \mathbb{N})$$ where $a$ is the first term and $r$ is the common ratio ($r \neq 0$).

- Standard form: $a, , ar, , ar^2, , ar^3, , \dots, , ar^{n-1}$.
3.2 General Terms
17. $n$-th Term from the Beginning: $$T_n = a_n = a r^{n-1}$$
18. $n$-th Term from the End (Last term $l$): $$T'_n = \frac{l}{r^{n-1}}$$
19. Equidistant Product Property: $$T_k \cdot T'_k = T_1 \cdot T_n = a \cdot l$$
3.3 Sum of First $n$ Terms ($S_n$)
$$S_n = \begin{cases} \dfrac{a(1 - r^n)}{1 - r} = \dfrac{a(r^n - 1)}{r - 1}, & \text{if } r \neq 1 \\ na, & \text{if } r = 1 \end{cases}$$
3.4 Sum of an Infinite GP ($S_\infty$)
An infinite geometric series converges if and only if $|r| < 1$ ($-1 < r < 1$): $$S_\infty = \frac{a}{1 - r} \quad (|r| < 1)$$

- Trap: If $|r| \ge 1$, the infinite series diverges, and $S_\infty$ does not exist.
3.5 Crucial Properties of a GP
20. If each term of a GP is multiplied or divided by a non-zero constant $k$, the resulting sequence is a GP with the same common ratio $r$.
21. If each term of a GP is raised to the same power $k$, the resulting sequence is a GP with common ratio $r^k$.
22. If $a_1, a_2, \dots$ is a GP of positive terms, then $\log a_1, \log a_2, \log a_3, \dots$ forms an AP with common difference $\log r$.
23. Three non-zero numbers $a, b, c$ are in GP if and only if: $$b^2 = ac \iff \frac{b}{a} = \frac{c}{b}$$
3.6 Strategic Selection of Terms in GP
- 3 terms: $\frac{a}{r}, ; a, ; ar$ (Common ratio $= r$; Product $= a^3$)
- 4 terms: $\frac{a}{r^3}, ; \frac{a}{r}, ; ar, ; ar^3$ (Common ratio $= r^2$; Product $= a^4$)
- 5 terms: $\frac{a}{r^2}, ; \frac{a}{r}, ; a, ; ar, ; ar^2$ (Common ratio $= r$; Product $= a^5$)
3.7 Geometric Mean (GM)
24. Single GM between two positive numbers $a$ and $b$: $$G = \sqrt{ab}$$
25. Insertion of $n$ Geometric Means ($G_1, G_2, \dots, G_n$) between $a$ and $b$: The sequence $a, G_1, G_2, \dots, G_n, b$ forms a GP of $(n+2)$ terms. $$\text{Common ratio } r = \left(\frac{b}{a}\right)^{\frac{1}{n+1}}$$ $$G_k = a r^k = a \left(\frac{b}{a}\right)^{\frac{k}{n+1}} \quad (1 \le k \le n)$$
26. Product of $n$ GMs: The product of $n$ geometric means inserted between $a$ and $b$ is the $n$-th power of the single GM between $a$ and $b$: $$\prod_{k=1}^n G_k = (\sqrt{ab})^n = G^n$$

________________

27. Harmonic Progression (HP)
4.1 Definition & Standard Form
A sequence $a_1, a_2, a_3, \dots$ ($a_i \neq 0$) is a Harmonic Progression (HP) if the reciprocals of its terms form an Arithmetic Progression (AP): $$\frac{1}{a_1}, ; \frac{1}{a_2}, ; \frac{1}{a_3}, ; \dots \in \text{AP}$$

- Standard form: $\frac{1}{a}, ; \frac{1}{a+d}, ; \frac{1}{a+2d}, ; \dots, ; \frac{1}{a+(n-1)d}$.
- $n$-th Term of an HP: $$T_n = \frac{1}{a + (n-1)d} = \frac{1}{\frac{1}{T_1} + (n-1)\left(\frac{1}{T_2} - \frac{1}{T_1}\right)}$$
- High-Yield Trap: There is no general formula for the sum of $n$ terms of an HP ($S_n$). Problems asking for HP sums must be solved by converting terms individually to AP or by recognizing special telescoping forms.
4.2 Harmonic Mean (HM)
28. Single HM between $a$ and $b$: $$H = \frac{2}{\frac{1}{a} + \frac{1}{b}} = \frac{2ab}{a + b}$$
29. Insertion of $n$ Harmonic Means ($H_1, H_2, \dots, H_n$) between $a$ and $b$: Insert $n$ arithmetic means between $\frac{1}{a}$ and $\frac{1}{b}$ with common difference: $$D = \frac{\frac{1}{b} - \frac{1}{a}}{n+1} = \frac{a - b}{(n+1)ab}$$ $$H_k = \frac{1}{\frac{1}{a} + kD} = \frac{(n+1)ab}{(n+1)b + k(a-b)}$$
30. Three numbers $a, b, c$ are in HP if and only if: $$b = \frac{2ac}{a+c} \iff \frac{a-b}{b-c} = \frac{a}{c}$$

________________

31. Interrelations Between AM, GM, and HM
5.1 Means of Two Positive Numbers $a$ and $b$
Let $A = \frac{a+b}{2}$, $G = \sqrt{ab}$, and $H = \frac{2ab}{a+b}$.

32. Geometric Relation: $$G^2 = A \cdot H \iff \frac{A}{G} = \frac{G}{H}$$ (The Geometric Mean $G$ is the geometric mean of the Arithmetic Mean $A$ and the Harmonic Mean $H$, so $A, G, H$ form a GP).
33. Fundamental Mean Inequality: $$A \ge G \ge H$$ Equality holds if and only if $a = b$.
34. Formation of Quadratic Equation: The quadratic equation having positive numbers $a$ and $b$ as its roots is: $$x^2 - 2Ax + G^2 = 0 \implies x = A \pm \sqrt{A^2 - G^2}$$
35. General Power Mean Expression: $$\frac{a^{n+1} + b^{n+1}}{a^n + b^n} = \begin{cases} A = \frac{a+b}{2}, & \text{if } n = 0 \\ G = \sqrt{ab}, & \text{if } n = -\frac{1}{2} \\ H = \frac{2ab}{a+b}, & \text{if } n = -1 \end{cases}$$
5.2 Means of Three Positive Numbers $a, b, c$
Let $A = \frac{a+b+c}{3}$, $G = (abc)^{1/3}$, and $\frac{1}{H} = \frac{1}{3}\left(\frac{1}{a} + \frac{1}{b} + \frac{1}{c}\right)$.

- The cubic equation whose roots are $a, b, c$ is given by: $$x^3 - 3Ax^2 + \frac{3G^3}{H}x - G^3 = 0$$
5.3 Insertion of Two Means between $a$ and $b$
If $A_1, A_2$ are two AMs, $G_1, G_2$ are two GMs, and $H_1, H_2$ are two HMs between $a$ and $b$: $$\frac{G_1 G_2}{H_1 H_2} = \frac{A_1 + A_2}{H_1 + H_2}$$

________________

36. Arithmetico-Geometric Progression (AGP)
6.1 Definition & Structure
An Arithmetico-Geometric Progression is formed by multiplying corresponding terms of an AP and a GP: $$a, ; (a+d)r, ; (a+2d)r^2, ; (a+3d)r^3, ; \dots, ; [a+(n-1)d]r^{n-1}$$

- General term: $$T_n = [a + (n-1)d] r^{n-1}$$
6.2 Sum of First $n$ Terms ($S_n$)
Using the perturbation method (multiply $S_n$ by $r$ and subtract): $$S_n = a + (a+d)r + (a+2d)r^2 + \dots + [a+(n-1)d]r^{n-1}$$ $$r S_n = \quad\quad ar + (a+d)r^2 + \dots + [a+(n-2)d]r^{n-1} + [a+(n-1)d]r^n$$ Subtracting: $$(1-r)S_n = a + d\left(r + r^2 + \dots + r^{n-1}\right) - [a+(n-1)d]r^n$$ $$(1-r)S_n = a + \frac{dr(1 - r^{n-1})}{1 - r} - [a+(n-1)d]r^n$$ $$\implies S_n = \frac{a}{1 - r} + \frac{dr(1 - r^{n-1})}{(1 - r)^2} - \frac{[a+(n-1)d]r^n}{1 - r} \quad (r \neq 1)$$
6.3 Sum to Infinity ($S_\infty$)
When $|r| < 1$, as $n \to \infty$, $r^n \to 0$ and $n r^n \to 0$: $$S_\infty = \frac{a}{1 - r} + \frac{dr}{(1 - r)^2} \quad (|r| < 1)$$

________________

37. Method of Differences & Telescoping Series
7.1 Method of Differences
Let the series be $S_n = T_1 + T_2 + T_3 + \dots + T_n$.

- First-Order Differences: Let $D_k = T_{k+1} - T_k$.
   - If $D_1, D_2, \dots$ forms an AP, then the $n$-th term $T_n$ is quadratic: $$T_n = an^2 + bn + c$$
   - If $D_1, D_2, \dots$ forms a GP with common ratio $r$, then $T_n$ has the form: $$T_n = a \cdot r^n + bn + c$$
- Second-Order Differences: If the differences of the differences form an AP, $T_n$ is a cubic in $n$ ($an^3 + bn^2 + cn + d$).
- Once $T_n$ is determined, find the total sum using $S_n = \sum_{k=1}^n T_k$.
7.2 Telescoping Series ($V_n - V_{n-1}$ Method)
Express the general term $T_n$ as the difference of two consecutive terms of a helper sequence: $$T_n = V_n - V_{n-1} \quad \text{or} \quad T_n = V_n - V_{n+1}$$ Summing from $k = 1$ to $n$: $$S_n = \sum_{k=1}^n (V_k - V_{k-1}) = V_n - V_0$$

- Standard Rational Form: $$T_n = \frac{1}{(n+a)(n+b)} = \frac{1}{b-a}\left[\frac{1}{n+a} - \frac{1}{n+b}\right]$$
- Product Form: $$T_n = n(n+1)(n+2) = \frac{n(n+1)(n+2)(n+3) - (n-1)n(n+1)(n+2)}{4}$$

________________

38. Sums of Standard Finite Series
For all $n \in \mathbb{N}$:

39. Sum of First $n$ Natural Numbers: $$\sum_{k=1}^n k = 1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$$
40. Sum of Squares of First $n$ Natural Numbers: $$\sum_{k=1}^n k^2 = 1^2 + 2^2 + 3^2 + \dots + n^2 = \frac{n(n+1)(2n+1)}{6}$$
41. Sum of Cubes of First $n$ Natural Numbers: $$\sum_{k=1}^n k^3 = 1^3 + 2^3 + 3^3 + \dots + n^3 = \left[\frac{n(n+1)}{2}\right]^2 = \left(\sum_{k=1}^n k\right)^2$$
42. Sum of Fourth Powers: $$\sum_{k=1}^n k^4 = \frac{n(n+1)(2n+1)(3n^2 + 3n - 1)}{30}$$
43. Sum of First $n$ Odd Natural Numbers: $$\sum_{k=1}^n (2k - 1) = 1 + 3 + 5 + \dots + (2n - 1) = n^2$$
44. Sum of First $n$ Even Natural Numbers: $$\sum_{k=1}^n 2k = 2 + 4 + 6 + \dots + 2n = n(n+1)$$
45. Sum of Products of Consecutive Pairs: $$\sum_{k=1}^n k(k+1) = \frac{n(n+1)(n+2)}{3}$$
46. Sum of Products of Consecutive Triplets: $$\sum_{k=1}^n k(k+1)(k+2) = \frac{n(n+1)(n+2)(n+3)}{4}$$

________________

47. Exponential and Logarithmic Infinite Series
9.1 Exponential Series
The transcendental number $e$ is defined as: $$e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = \sum_{n=0}^\infty \frac{1}{n!} = 1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \dots \approx 2.71828$$

- $e$ is irrational and lies strictly between $2$ and $3$ ($2 < e < 3$).
48. General Expansion ($\forall x \in \mathbb{R}$): $$e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$
49. Negative Power ($e^{-x}$): $$e^{-x} = 1 - \frac{x}{1!} + \frac{x^2}{2!} - \frac{x^3}{3!} + \dots$$
50. General Base $a^x$ ($a > 0$): $$a^x = e^{x \ln a} = 1 + x \ln a + \frac{(x \ln a)^2}{2!} + \frac{(x \ln a)^3}{3!} + \dots$$
51. Hyperbolic-Style Series Combinations: $$\frac{e + e^{-1}}{2} = 1 + \frac{1}{2!} + \frac{1}{4!} + \frac{1}{6!} + \dots$$ $$\frac{e - e^{-1}}{2} = \frac{1}{1!} + \frac{1}{3!} + \frac{1}{5!} + \dots$$ $$e - 1 = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \dots$$ $$e - 2 = \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \dots$$
9.2 Logarithmic Series
52. Standard Natural Log Expansion: $$\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots = \sum_{n=1}^\infty (-1)^{n-1} \frac{x^n}{n} \quad (-1 < x \le 1)$$
53. Negative Argument: $$\ln(1 - x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} - \dots = -\sum_{n=1}^\infty \frac{x^n}{n} \quad (-1 \le x < 1)$$ $$-\ln(1 - x) = x + \frac{x^2}{2} + \frac{x^3}{3} + \frac{x^4}{4} + \dots$$
54. Difference Form (Rapid Convergence Formula): $$\ln\left(\frac{1 + x}{1 - x}\right) = 2\left(x + \frac{x^3}{3} + \frac{x^5}{5} + \dots\right) \quad (|x| < 1)$$
55. Alternating Harmonic Series Value ($\ln 2$): $$\ln 2 = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \dots$$
