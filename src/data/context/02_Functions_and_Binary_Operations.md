Mathematics Revision Context: Chapter 02 — Functions and Binary Operations

Batch Range: Chapter 02 (Pages 10–27)

________________

1. Fundamentals of Functions & Mapping
1.1 Definition & Notation
- Function: Let $A$ and $B$ be two non-empty sets. A function $f$ from set $A$ to set $B$ (denoted as $f: A \to B$ or $A \xrightarrow{f} B$) is a specific relation/rule that associates every element $x \in A$ with a unique element $y \in B$.
- Image & Pre-image: If $(x, y) \in f$, then $y$ is called the image of $x$ under $f$, written as $y = f(x)$. The element $x$ is called the pre-image of $y$.
1.2 Domain, Codomain & Range
- Domain: The entire source set $A$ where $f$ is defined: $$\text{Domain}(f) = A = {x : (x, y) \in f}$$
- Codomain: The entire destination set $B$.
- Range: The subset of $B$ containing strictly the images of all elements in $A$: $$\text{Range}(f) = {f(x) : x \in A} \subseteq B$$
1.3 Essential Characteristics & Non-Function Scenarios
2. Every element $x \in A$ must have an image in $B$. If any element in $A$ remains unassociated, $f$ is not a function.
3. The image of each element $x \in A$ must be unique. If any element in $A$ has more than one image in $B$, $f$ is a relation, not a function.
4. Multiple distinct elements in $A$ may be associated with the same element in $B$ (many-to-one mapping is permitted).
5. Elements in $B$ may remain unassociated (elements without pre-images are permitted).
1.4 Graphical Identification: Vertical Line Test
- Let a curve represent an equation in the Cartesian plane.
- Vertical Line Test: If every line parallel to the $y$-axis intersects the curve at at most one point, the curve represents a function.
- If any vertical line intersects the curve at two or more points, the relation is not a function (e.g., $x^2 + y^2 = r^2$ or $y^2 = 4ax$ are relations, not single-valued functions).

________________

6. Classification of Mappings & Cardinality Counting
2.1 Injective (One-One) Functions
- Definition: A function $f: A \to B$ is one-one (injective) if distinct elements in $A$ have distinct images in $B$: $$\forall x_1, x_2 \in A, \quad x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$$ $$\text{Equivalently: } f(x_1) = f(x_2) \implies x_1 = x_2$$
- Methods to Test Injectivity:
   1. Analytical Test: Assume $f(x_1) = f(x_2)$. Solve algebraically. If $x_1 = x_2$ is the unique solution, $f$ is one-one.
   2. Horizontal Line Test: Any line parallel to the $x$-axis cuts the graph at at most one point.
   3. Monotonicity Test (Calculus): If $f'(x) > 0$ strictly or $f'(x) < 0$ strictly throughout the entire domain (and points where $f'(x) = 0$ do not form an interval), $f(x)$ is strictly monotonic and therefore one-one.
- Number of One-One Functions: Let $n(A) = m$ and $n(B) = n$: $$N_{\text{one-one}} = \begin{cases} {}^n P_m = \dfrac{n!}{(n-m)!} = n(n-1)(n-2)\dots(n-m+1), & \text{if } n \ge m \\ 0, & \text{if } n < m \end{cases}$$
2.2 Many-One Functions
- Definition: A function $f: A \to B$ is many-one if two or more distinct elements in $A$ have the identical image in $B$: $$\exists x_1, x_2 \in A, \quad x_1 \neq x_2 \quad \text{such that} \quad f(x_1) = f(x_2)$$
- Testing: A horizontal line cuts the graph at least at two points. Any continuous function that has local extrema (changes direction) is many-one.
- Number of Many-One Functions: $$N_{\text{many-one}} = \text{Total Functions} - N_{\text{one-one}} = \begin{cases} n^m - {}^n P_m, & \text{if } n \ge m \\ n^m, & \text{if } n < m \end{cases}$$
2.3 Surjective (Onto) Functions
- Definition: A function $f: A \to B$ is onto (surjective) if every element in the codomain $B$ has at least one pre-image in the domain $A$: $$\text{Range}(f) = \text{Codomain}(B)$$
- Key Theorem: Every real polynomial function $f: \mathbb{R} \to \mathbb{R}$ of odd degree is surjective (since as $x \to \pm\infty$, $f(x) \to \pm\infty$, covering all real numbers).
- Number of Onto Functions: For finite sets with $n(A) = m$ and $n(B) = n$: $$N_{\text{onto}} = \begin{cases} \sum_{r=0}^n (-1)^r \binom{n}{r} (n-r)^m = n^m - \binom{n}{1}(n-1)^m + \binom{n}{2}(n-2)^m - \binom{n}{3}(n-3)^m + \dots, & m \ge n \\ n!, & m = n \\ 0, & m < n \end{cases}$$
2.4 Into Functions
- Definition: A function $f: A \to B$ is into if there exists at least one element in codomain $B$ which is not the image of any element in domain $A$: $$\text{Range}(f) \subset \text{Codomain}(B) \quad (\text{Range} \neq \text{Codomain})$$
- Number of Into Functions: $$N_{\text{into}} = n^m - N_{\text{onto}} = \binom{n}{1}(n-1)^m - \binom{n}{2}(n-2)^m + \binom{n}{3}(n-3)^m - \dots \quad (\text{for } m \ge n)$$
2.5 Bijective (One-One & Onto) Functions
- Definition: A function $f: A \to B$ is a bijection if it is simultaneously one-one (injective) and onto (surjective).
- Number of Bijective Functions: $$N_{\text{bijection}} = \begin{cases} n!, & \text{if } m = n \\ 0, & \text{if } m \neq n \end{cases}$$
2.6 Identical / Equal Functions
Two functions $f$ and $g$ are defined to be equal ($f = g$) if and only if:

7. $\text{Domain}(f) = \text{Domain}(g)$
8. $\text{Codomain}(f) = \text{Codomain}(g)$
9. $f(x) = g(x)$ for all $x \in \text{Domain}(f)$
- High-Yield JEE Traps:
   - $f(x) = \dfrac{x^2-1}{x-1}$ and $g(x) = x+1$ are not identical because $\text{Dom}(f) = \mathbb{R} \setminus {1}$, whereas $\text{Dom}(g) = \mathbb{R}$.
   - $f(x) = \ln(x^2)$ and $g(x) = 2\ln(x)$ are not identical because $\text{Dom}(f) = \mathbb{R} \setminus {0}$, whereas $\text{Dom}(g) = (0, \infty)$. (Correct identity: $\ln(x^2) = 2\ln|x|$).
   - $f(x) = \sqrt{x^2}$ and $g(x) = x$ are not identical ($\sqrt{x^2} = |x| \neq x$ for $x < 0$).
   - $f(x) = \tan x \cot x$ and $g(x) = 1$ are not identical because $\tan x \cot x$ is undefined at $x = \frac{n\pi}{2}$.

________________

10. Real Functions — Domain & Range Techniques
3.1 Real Valued vs. Real Functions
- Real Valued Function: $f: A \to B$ where $B \subseteq \mathbb{R}$.
- Real Function: $f: A \to B$ where both $A \subseteq \mathbb{R}$ and $B \subseteq \mathbb{R}$.
3.2 Systematic Rules for Domain Determination
The domain of a real function is the maximal subset of $\mathbb{R}$ for which $f(x)$ yields real values:

11. Fractional Forms $\frac{P(x)}{Q(x)}$: Require $Q(x) \neq 0$.
12. Even Roots $\sqrt[2n]{f(x)}$: Require $f(x) \ge 0$.
13. Logarithmic Forms $\log_{g(x)} f(x)$: Require $f(x) > 0$, $g(x) > 0$, and $g(x) \neq 1$.
14. Inverse Trigonometric Functions:
   - $\sin^{-1}(f(x))$ and $\cos^{-1}(f(x))$ require $-1 \le f(x) \le 1$.
   - $\sec^{-1}(f(x))$ and $\csc^{-1}(f(x))$ require $f(x) \ge 1$ or $f(x) \le -1$ ($|f(x)| \ge 1$).
   - $\tan^{-1}(f(x))$ and $\cot^{-1}(f(x))$ require $f(x) \in \mathbb{R}$.
15. Combined Domain: If $f(x) = f_1(x) \pm f_2(x)$ or $f_1(x) \cdot f_2(x)$, then: $$\text{Domain}(f) = \text{Domain}(f_1) \cap \text{Domain}(f_2)$$ If $f(x) = \frac{f_1(x)}{f_2(x)}$, then $\text{Domain}(f) = (\text{Domain}(f_1) \cap \text{Domain}(f_2)) \setminus {x : f_2(x) = 0}$.
3.3 Systematic Rules for Range Determination
16. Algebraic Inversion Method: Let $y = f(x)$. Express $x$ in terms of $y$ ($x = g(y)$). Find the values of $y$ for which $x$ is real and lies within $\text{Domain}(f)$.
17. Calculus / Monotonicity Method: If $f(x)$ is continuous on $[a, b]$:
   - Compute critical points where $f'(x) = 0$ or does not exist.
   - Evaluate $f(x)$ at critical points and endpoints.
   - $\text{Range} = [\min(f), \max(f)]$.
18. Discriminant Method (for Rational Functions $\frac{a_1 x^2 + b_1 x + c_1}{a_2 x^2 + b_2 x + c_2}$):
   - Set $y = \frac{a_1 x^2 + b_1 x + c_1}{a_2 x^2 + b_2 x + c_2}$ and rearrange into a quadratic in $x$: $$(a_2 y - a_1)x^2 + (b_2 y - b_1)x + (c_2 y - c_1) = 0$$
   - Since $x \in \mathbb{R}$, require Discriminant $D \ge 0$, solving the resulting inequality for $y$. (Check coefficient of $x^2 = 0$ separately).

________________

19. Standard Real Functions & Graph Catalog
4.1 Algebraic Functions
- Constant Function: $f(x) = c$. Graph is a horizontal line $y = c$. $\text{Dom} = \mathbb{R}$, $\text{Range} = {c}$.
- Identity Function: $f(x) = x$. Graph is line passing through origin at $45^\circ$. $\text{Dom} = \mathbb{R}$, $\text{Range} = \mathbb{R}$.
- Linear Function: $f(x) = ax + b$ ($a \neq 0$). Straight line with slope $a$. $\text{Dom} = \mathbb{R}$, $\text{Range} = \mathbb{R}$.
- Quadratic Function: $f(x) = ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{D}{4a}$ ($a \neq 0$, $D = b^2 - 4ac$):
   - Vertex coordinates: $\left(-\frac{b}{2a}, -\frac{D}{4a}\right)$.
   - Parabola opens upwards if $a > 0$: $\text{Range} = \left[-\frac{D}{4a}, \infty\right)$.
   - Parabola opens downwards if $a < 0$: $\text{Range} = \left(-\infty, -\frac{D}{4a}\right]$.
   - $\text{Domain} = \mathbb{R}$.
- Power Functions: $y = x^n$ ($n \in \mathbb{Z}$):
   - Positive even $n$ ($x^2, x^4$): $\text{Dom} = \mathbb{R}$, $\text{Range} = [0, \infty)$, symmetric about $y$-axis (even).
   - Positive odd $n$ ($x^3, x^5$): $\text{Dom} = \mathbb{R}$, $\text{Range} = \mathbb{R}$, symmetric about origin (odd).
   - Negative even $n$ ($x^{-2}, x^{-4}$): $\text{Dom} = \mathbb{R} \setminus {0}$, $\text{Range} = (0, \infty)$.
   - Negative odd $n$ ($x^{-1}, x^{-3}$): $\text{Dom} = \mathbb{R} \setminus {0}$, $\text{Range} = \mathbb{R} \setminus {0}$.
- Square Root Function: $f(x) = \sqrt{x}$. $\text{Dom} = [0, \infty)$, $\text{Range} = [0, \infty)$.
4.2 Absolute Value & Signum Functions
- Modulus Function: $$|x| = \begin{cases} x, & x \ge 0 \\ -x, & x < 0 \end{cases}$$ $\text{Domain} = \mathbb{R}$, $\text{Range} = [0, \infty)$. Continuous everywhere, non-differentiable at $x = 0$.
- Signum Function: $$\text{sgn}(x) = \begin{cases} \frac{|x|}{x} = 1, & x > 0 \\ 0, & x = 0 \\ -\frac{|x|}{x} = -1, & x < 0 \end{cases}$$ $\text{Domain} = \mathbb{R}$, $\text{Range} = {-1, 0, 1}$. Odd function ($\text{sgn}(-x) = -\text{sgn}(x)$).
4.3 Floor, Ceiling & Fractional Part Functions
- Greatest Integer Function (Step / Floor Function): $y = [x]$
   - Represents the greatest integer less than or equal to $x$ ($n \le x < n+1 \implies [x] = n$).
   - $\text{Domain} = \mathbb{R}$, $\text{Range} = \mathbb{Z}$.
   - Discontinuous at all integers $x \in \mathbb{Z}$; non-differentiable at all $x \in \mathbb{Z}$.
   - 10 Core Properties of $[x]$:
      1. $[x + n] = [x] + n$ for all $n \in \mathbb{Z}$.
      2. $[-x] = -[x]$ if $x \in \mathbb{Z}$, and $[-x] = -[x] - 1$ if $x \notin \mathbb{Z}$.
      3. $[x] + [-x] = \begin{cases} 0, & x \in \mathbb{Z} \\ -1, & x \notin \mathbb{Z} \end{cases}$
      4. $[x] \ge n \iff x \ge n$ ($n \in \mathbb{Z}$).
      5. $[x] > n \iff x \ge n + 1$ ($n \in \mathbb{Z}$).
      6. $[x] \le n \iff x < n + 1$ ($n \in \mathbb{Z}$).
      7. $[x] < n \iff x < n$ ($n \in \mathbb{Z}$).
      8. $[x+y] = [x] + [y + x - [x]]$ for all $x, y \in \mathbb{R}$.
      9. $[x] + [y] \le [x+y] \le [x] + [y] + 1$.
      10. Hermite's Identity: For any $n \in \mathbb{N}$: $$[x] + \left[x + \frac{1}{n}\right] + \left[x + \frac{2}{n}\right] + \dots + \left[x + \frac{n-1}{n}\right] = [nx]$$
- Fractional Part Function: $y = {x} = x - [x]$
   - $\text{Domain} = \mathbb{R}$, $\text{Range} = [0, 1)$.
   - Periodic with fundamental period $T = 1$.
   - ${-x} = \begin{cases} 0, & x \in \mathbb{Z} \\ 1 - {x}, & x \notin \mathbb{Z} \end{cases}$
   - ${x} + {-x} = \begin{cases} 0, & x \in \mathbb{Z} \\ 1, & x \notin \mathbb{Z} \end{cases}$
- Least Integer Function (Ceiling Function): $y = (x) = \lceil x \rceil$
   - Represents the least integer greater than or equal to $x$ ($n-1 < x \le n \implies \lceil x \rceil = n$).
   - $\lceil x \rceil = -[-x] = [x] + 1$ (for $x \notin \mathbb{Z}$). $\text{Dom} = \mathbb{R}$, $\text{Range} = \mathbb{Z}$.
4.4 Exponential & Logarithmic Functions
- Exponential Function: $f(x) = a^x$ ($a > 0, a \neq 1$):
   - $\text{Domain} = \mathbb{R}$, $\text{Range} = (0, \infty)$.
   - Strictly increasing if $a > 1$; strictly decreasing if $0 < a < 1$.
   - Always passes through $(0, 1)$. $a^x > 0$ for all real $x$.
- Logarithmic Function: $f(x) = \log_a x$ ($x > 0, a > 0, a \neq 1$):
   - $\text{Domain} = (0, \infty)$, $\text{Range} = \mathbb{R}$.
   - Strictly increasing if $a > 1$; strictly decreasing if $0 < a < 1$.
   - Reflection of $y = a^x$ across the diagonal line $y = x$.
   - Passing through $(1, 0)$. Vertical asymptote at $x = 0$.

________________

20. Operations on Real Functions
Let $f$ and $g$ be two real functions with domains $D_f$ and $D_g$:

21. Sum & Difference: $(f \pm g)(x) = f(x) \pm g(x)$, with $\text{Domain} = D_f \cap D_g$.
22. Product: $(fg)(x) = f(x) \cdot g(x)$, with $\text{Domain} = D_f \cap D_g$.
23. Quotient: $\left(\frac{f}{g}\right)(x) = \frac{f(x)}{g(x)}$, with $\text{Domain} = (D_f \cap D_g) \setminus {x : g(x) = 0}$.
24. Scalar Multiplication: $(cf)(x) = c \cdot f(x)$, with $\text{Domain} = D_f$.

________________

25. Composite Functions & Inverse Functions
6.1 Composite Functions
- Definition: Let $f: A \to B$ and $g: B \to C$. The composite function $g \circ f: A \to C$ is defined as: $$(g \circ f)(x) = g(f(x))$$
- Condition for Existence: $g \circ f$ is defined if and only if: $$\text{Range}(f) \subseteq \text{Domain}(g)$$
- Domain of Composite Function: $$\text{Domain}(g \circ f) = {x \in \text{Domain}(f) : f(x) \in \text{Domain}(g)}$$
- Key Algebraic Properties:
   1. Non-Commutative: $g \circ f \neq f \circ g$ in general.
   2. Associative: $f \circ (g \circ h) = (f \circ g) \circ h$.
   3. If $f$ and $g$ are both injective, then $g \circ f$ is injective.
   4. If $f$ and $g$ are both surjective, then $g \circ f$ is surjective.
   5. If $f$ and $g$ are both bijective, then $g \circ f$ is bijective.
   6. If $g \circ f$ is injective, then $f$ must be injective (though $g$ may not be).
   7. If $g \circ f$ is surjective, then $g$ must be surjective (though $f$ may not be).
6.2 Inverse of a Function
- Invertibility Criterion: A function $f: A \to B$ is invertible if and only if $f$ is bijective (both one-one and onto).
- Definition of Inverse: If $f: A \to B$ is bijective, then $f^{-1}: B \to A$ is defined by: $$f(x) = y \iff f^{-1}(y) = x$$
- Core Properties:
   1. $\text{Domain}(f^{-1}) = \text{Range}(f)$ and $\text{Range}(f^{-1}) = \text{Domain}(f)$.
   2. $(f^{-1} \circ f)(x) = I_A(x) = x$ and $(f \circ f^{-1})(y) = I_B(y) = y$.
   3. Reversal Rule for Composition Inverse: $$(g \circ f)^{-1} = f^{-1} \circ g^{-1}$$
   4. Geometric Symmetry: The graph of $y = f^{-1}(x)$ is the mirror image of the graph of $y = f(x)$ with respect to the line $y = x$. If point $(a, b)$ lies on $y = f(x)$, then $(b, a)$ lies on $y = f^{-1}(x)$.

________________

26. Periodic, Even & Odd Functions
7.1 Periodic Functions
- Definition: A function $f(x)$ is periodic if there exists a positive real number $T > 0$ such that: $$f(x + T) = f(x) \quad \forall x \in \text{Domain}(f)$$ The least positive real number $T$ is called the fundamental period of $f(x)$.
- Fundamental Periods of Standard Functions:
   - $\sin x, \cos x, \sec x, \csc x$: Period $= 2\pi$
   - $\tan x, \cot x$: Period $= \pi$
   - $|\sin x|, |\cos x|, |\tan x|, |\cot x|, |\sec x|, |\csc x|$: Period $= \pi$
   - $\sin^{2n} x, \cos^{2n} x, \tan^{2n} x$: Period $= \pi$
   - $\sin^{2n+1} x, \cos^{2n+1} x$: Period $= 2\pi$
   - Fractional part ${x}$: Period $= 1$
   - Constant function $f(x) = c$: Periodic, but has no fundamental period (can be any $T > 0$).
   - Algebraic, polynomial, exponential, logarithmic, and $[x]$ functions are non-periodic.
- Transformation of Period:
   - If $f(x)$ has period $T$, then $k \cdot f(ax + b)$ has period: $$T' = \frac{T}{|a|}$$
   - If $f(x)$ has period $T$, then $\frac{1}{f(x)}$ and $\sqrt{f(x)}$ also have period $T$.
   - If $f(x)$ has period $T$ and $g(x)$ is any function such that $\text{Range}(f) \subseteq \text{Dom}(g)$, then $(g \circ f)(x) = g(f(x))$ has period $T$.
- Period of Linear Combinations $h(x) = a f(x) \pm b g(x)$:
   - If $f(x)$ and $g(x)$ have fundamental periods $T_1$ and $T_2$: $$\text{Period}(h) = \text{LCM}(T_1, T_2) \quad \text{provided } \frac{T_1}{T_2} \in \mathbb{Q}$$ (LCM of rationals: $\text{LCM}\left(\frac{a}{b}, \frac{c}{d}\right) = \frac{\text{LCM}(a, c)}{\text{HCF}(b, d)}$).
   - Exception Rule (Complementary Pairs): If $f(x)$ and $g(x)$ can be interchanged by an increment $k$ (i.e., $f(x+k) = g(x)$ and $g(x+k) = f(x)$), the actual period can be $\frac{1}{2} \text{LCM}(T_1, T_2)$. Example: $f(x) = |\sin x| + |\cos x|$. Both have period $\pi$. $\text{LCM}(\pi, \pi) = \pi$. But $f(x + \pi/2) = |\sin(x+\pi/2)| + |\cos(x+\pi/2)| = |\cos x| + |\sin x| = f(x)$, so the fundamental period is $\frac{\pi}{2}$.
7.2 Even and Odd Functions
- Definitions:
   - Even Function: $f(-x) = f(x)$ for all $x \in \text{Domain}(f)$.
   - Odd Function: $f(-x) = -f(x)$ for all $x \in \text{Domain}(f)$.
- Prerequisite: The domain must be symmetric about the origin ($x \in \text{Dom}(f) \iff -x \in \text{Dom}(f)$).
- Geometric Symmetry:
   - The graph of an even function is symmetric about the $y$-axis.
   - The graph of an odd function is symmetric about the origin (or opposite quadrants).
   - If an odd function is defined at $x = 0$, then $f(0) = 0$ (since $f(0) = -f(0) \implies 2f(0) = 0$).
- Algebra of Even & Odd Functions:
   - $\text{Even} \pm \text{Even} = \text{Even}$
   - $\text{Odd} \pm \text{Odd} = \text{Odd}$
   - $\text{Even} \times \text{Even} = \text{Even}$
   - $\text{Odd} \times \text{Odd} = \text{Even}$
   - $\text{Even} \times \text{Odd} = \text{Odd}$
   - Composite $f(g(x))$:
      - If either $f$ or $g$ is even, $f(g(x))$ is even.
      - If both $f$ and $g$ are odd, $f(g(x))$ is odd.
- Calculus Operations:
   - $\dfrac{d}{dx}(\text{Even}) = \text{Odd}$
   - $\dfrac{d}{dx}(\text{Odd}) = \text{Even}$
   - $\int_{-a}^a f(x) , dx = \begin{cases} 2 \int_0^a f(x) , dx, & \text{if } f(x) \text{ is even} \\ 0, & \text{if } f(x) \text{ is odd} \end{cases}$
- Decomposition Theorem: Any real function $f(x)$ can be uniquely expressed as the sum of an even function and an odd function: $$f(x) = \underbrace{\frac{f(x) + f(-x)}{2}}{\text{Even Component } f_e(x)} + \underbrace{\frac{f(x) - f(-x)}{2}}{\text{Odd Component } f_o(x)}$$
- Injectivity Trap: A non-constant even function can never be one-one on a domain symmetric about zero because $f(-x) = f(x)$ for distinct $x$ and $-x$. An odd function may or may not be one-one (e.g., $x^3$ is one-one, but $\sin x$ is many-one).

________________

27. Theory of Binary Operations
8.1 Definition & Closure
- Binary Operation: A binary operation $*$ on a non-empty set $S$ is a mapping $* : S \times S \to S$.
- Closure Property: For every $a, b \in S$, $a * b \in S$.
- Standard Sets:
   - Addition $(+)$ is a binary operation on $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$, but not on the set of irrational numbers (e.g., $\sqrt{2} + (-\sqrt{2}) = 0 \notin \text{Irrationals}$).
   - Subtraction $(-)$ is a binary operation on $\mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$, but not on $\mathbb{N}$ (e.g., $2 - 5 = -3 \notin \mathbb{N}$).
   - Division $(\div)$ is not a binary operation on $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}$ because division by $0$ is undefined; it is a binary operation on $\mathbb{R} \setminus {0}$.
8.2 Algebraic Properties of Binary Operations
28. Commutativity: $a * b = b * a$ for all $a, b \in S$.
29. Associativity: $(a * b) * c = a * (b * c)$ for all $a, b, c \in S$.
30. Distributivity: $*$ is left-distributive over $\circ$ if $a * (b \circ c) = (a * b) \circ (a * c)$, and right-distributive if $(b \circ c) * a = (b * a) \circ (c * a)$.
31. Identity Element ($e$): An element $e \in S$ such that: $$a * e = e * a = a \quad \forall a \in S$$
   - Identity element, if it exists, is unique.
   - For addition on $\mathbb{R}$, $e = 0$. For multiplication on $\mathbb{R}$, $e = 1$.
   - Addition on $\mathbb{N}$ has no identity element ($0 \notin \mathbb{N}$).
32. Inverse Element ($a^{-1}$): An element $b \in S$ is the inverse of $a$ if: $$a * b = b * a = e$$
   - If $*$ is associative and has identity $e$, the inverse of an invertible element is unique.
   - $(a^{-1})^{-1} = a$ and $(a * b)^{-1} = b^{-1} * a^{-1}$ (Reversal law).
8.3 Counting Theorems for Binary Operations
Let $S$ be a finite set containing $n$ elements ($|S| = n$):

33. Total Number of Binary Operations on $S$:
   - A binary operation is a function from $S \times S$ (having $n^2$ elements) to $S$ (having $n$ elements): $$N_{\text{total binary}} = n^{n^2}$$
34. Total Number of Commutative Binary Operations on $S$:
   - In a Cayley multiplication table ($n \times n$), commutativity implies the table is symmetric across the main diagonal.
   - Elements on or above the diagonal $= n + \frac{n(n-1)}{2} = \frac{n(n+1)}{2}$.
   - Each of these entries can be chosen in $n$ ways: $$N_{\text{commutative binary}} = n^{\frac{n(n+1)}{2}}$$
