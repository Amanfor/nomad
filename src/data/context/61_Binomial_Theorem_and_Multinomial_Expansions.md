Mathematics Revision Context: Chapter 61 — Binomial Theorem & Multinomial Expansions


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Binomial Theorem/`, `Theory_English.pdf`, `Exercise_123_HLP.pdf`, and `Hints_and_Solution_Binomial_Theorem_UyhgQkh.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Algebra Core — Binomial Theorem for Positive Integral Index ($n \in \mathbb{N}$), Expansion Structure & General Term $T_{r+1} = \binom{n}{r} a^{n-r} b^r$, Term Indexing from Beginning vs. End ($T_r^{\text{end}} = T_{n-r+2}^{\text{beg}}$), Middle Term Analytics (Unique Middle Term for Even $n$ vs. Dual Middle Terms for Odd $n$), Central Binomial Coefficient Maximization $\binom{n}{\lfloor n/2 \rfloor}$, Pascal's Triangle (Meru Prastara) Recursive Geometry & Row Sums $2^n$, Numerically Greatest Term (NGT) Ratio Test ($m = \frac{(n+1)|b|}{|a|+|b|}$, Twin NGTs for Integer $m$ vs. Unique NGT for Non-Integer $m$), Number-Theoretic Applications (Binomial Remainder Analytics Modulo $m$, Last Digits Determination, Divisibility Inductions), The Integral & Fractional Parts Surd Conjugate Bracket ($I + f = (\sqrt{A} + B)^n$, Conjugate Bracket $f' = (\sqrt{A} - B)^n \in (0, 1)$, Invariant $f + f' = 1$, Integer Parity), Binomial Coefficient Series Analytics (Calculus Methods: Differentiation $\sum r C_r = n 2^{n-1}$, Double Differentiation $\sum r^2 C_r = n(n+1)2^{n-2}$, Integration $\sum \frac{C_r}{r+1} = \frac{2^{n+1}-1}{n+1}$, Sum of Squares $\sum C_r^2 = \binom{2n}{n}$, Shifted Convolution Products $\sum C_r C_{r+k} = \binom{2n}{n-k}$), Binomial Theorem for Rational & Negative Index ($n \in \mathbb{Q}$, Absolute Convergence Constraint $|x| < 1$, Forced Unity Normalization, Infinite Series General Term $T_{r+1} = \frac{n(n-1)\dots(n-r+1)}{r!} x^r$, Four Canonical Negative Power Expansions $(1-x)^{-1}, (1+x)^{-1}, (1-x)^{-2}, (1-x)^{-n} = \sum \binom{n+r-1}{r} x^r$), Multinomial Theorem (General Expansion $(x_1 + \dots + x_k)^n = \sum \frac{n!}{r_1!\dots r_k!} x_1^{r_1}\dots x_k^{r_k}$, Total Terms $\binom{n+k-1}{k-1}$, Simplex Geometry, Maximum Coefficient Equipartition Rule), Variable Evaluation Sum of Coefficients Invariant, and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Binomial Theorem for Positive Integral Index ($n \in \mathbb{N}$)


### 1.1 Theorem Statement & Algebraic Expansion


For any positive integer $n \in \mathbb{N}$ and any real or complex numbers $a$ and $b$:


$$(a + b)^n = \binom{n}{0} a^n b^0 + \binom{n}{1} a^{n-1} b^1 + \binom{n}{2} a^{n-2} b^2 + \dots + \binom{n}{r} a^{n-r} b^r + \dots + \binom{n}{n} a^0 b^n$$


In compact summation notation:


$$\mathbf{(a + b)^n = \sum_{r=0}^n \binom{n}{r} a^{n-r} b^r = \sum_{r=0}^n {}^n C_r \, a^{n-r} b^r}$$


**Canonical Normalization ($a = 1, b = x$):**


$$\mathbf{(1 + x)^n = \sum_{r=0}^n \binom{n}{r} x^r = C_0 + C_1 x + C_2 x^2 + \dots + C_n x^n}$$


$$\mathbf{(1 - x)^n = \sum_{r=0}^n (-1)^r \binom{n}{r} x^r = C_0 - C_1 x + C_2 x^2 - C_3 x^3 + \dots + (-1)^n C_n x^n}$$


---


### 1.2 Fundamental Structural Properties


1. **Total Number of Terms:**
   The expansion contains exactly $\mathbf{n + 1}$ terms. (One more than the index power $n$).
2. **Homogeneity of Powers:**
   In every term of $(a + b)^n$, the sum of the exponents of $a$ and $b$ is identically equal to $n$:
   $$(n - r) + r = n \quad (\forall r \in \{0, 1, \dots, n\})$$
3. **General Term ($T_{r+1}$):**
   The $(r + 1)$-th term from the beginning is:
   $$\mathbf{T_{r+1} = \binom{n}{r} a^{n-r} b^r = {}^n C_r \, a^{n-r} b^r}$$
   *(Notice that the combination subscript $r$ is always one less than the term position index).*
4. **Term from the End:**
   The $r$-th term from the end in $(a + b)^n$ is identical to the $r$-th term from the beginning of $(b + a)^n$:
   $$\mathbf{T_r^{\text{end}} = T_{n - r + 2}^{\text{beginning}} = \binom{n}{r - 1} a^{r - 1} b^{n - r + 1}}$$
5. **Sum & Difference Symmetries:**
   $$(a + b)^n + (a - b)^n = 2\left[\binom{n}{0} a^n + \binom{n}{2} a^{n-2} b^2 + \binom{n}{4} a^{n-4} b^4 + \dots\right]$$
   $$(a + b)^n - (a - b)^n = 2\left[\binom{n}{1} a^{n-1} b + \binom{n}{3} a^{n-3} b^3 + \binom{n}{5} a^{n-5} b^5 + \dots\right]$$
   * **Term Counts:**
     * If $n$ is **even**: $(a+b)^n + (a-b)^n$ has $\frac{n}{2} + 1$ terms; $(a+b)^n - (a-b)^n$ has $\frac{n}{2}$ terms.
     * If $n$ is **odd**: Both expressions have exactly $\frac{n + 1}{2}$ terms.


---


### 1.3 Middle Term Analytics


![Pascal Triangle and Binomial Coefficients Symmetry](/media/pascal_triangle_and_binomial_coefficients_symmetry.webp)
*Description: Two-panel combinatorial graphic: (Panel A) Pascal's Triangle (Meru Prastara) pyramid up to $n=6$ illustrating row sum identities $2^n$, bilateral symmetry $\binom{n}{r} = \binom{n}{n-r}$, and the addition rule $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$; (Panel B) Continuous Gaussian approximation of the discrete binomial coefficient distribution bell curve across index $r$ for $n=12$ and $n=20$, highlighting the central maximum at the middle term.*


The location of the middle term depends strictly on the parity of $n$:


1. **Case 1: $n$ is EVEN (Total terms $n + 1$ is ODD):**
   * There is a **single unique middle term**:
     $$\mathbf{\text{Middle Term Index} = \frac{n}{2} + 1}$$
     $$\mathbf{T_{\frac{n}{2} + 1} = \binom{n}{n/2} a^{n/2} b^{n/2}}$$


2. **Case 2: $n$ is ODD (Total terms $n + 1$ is EVEN):**
   * There are **two middle terms**:
     $$\mathbf{T_{\frac{n + 1}{2}} = \binom{n}{\frac{n-1}{2}} a^{\frac{n+1}{2}} b^{\frac{n-1}{2}} \quad \text{and} \quad T_{\frac{n + 3}{2}} = \binom{n}{\frac{n+1}{2}} a^{\frac{n-1}{2}} b^{\frac{n+1}{2}}}$$


**Greatest Binomial Coefficient Theorem:**
In the expansion of $(1 + x)^n$, the binomial coefficients $C_r = \binom{n}{r}$ increase monotonically up to the middle term and then decrease symmetrically:
* If $n$ is **even**: Unique maximum coefficient is $\mathbf{^n C_{n/2}}$.
* If $n$ is **odd**: Two equal maximum coefficients are $\mathbf{^n C_{\frac{n-1}{2}} = {}^n C_{\frac{n+1}{2}}}$.


---


## 2. Numerically Greatest Term (NGT)


![Numerically Greatest Term and Remainder Analytics](/media/numerically_greatest_term_and_remainder_analytics.webp)
*Description: Two-panel analytical reference: (Panel A) Ratio test curve $\left|T_{r+1}/T_r\right|$ plotted across index $r$ showing intersection with threshold value 1 at critical parameter $m = \frac{(n+1)|b|}{|a|+|b|}$, comparing integer $m$ (twin NGTs) vs. non-integer $m$ (single peak); (Panel B) Structural flowchart of the $I + f$ surd conjugate method detailing fractional bracket bounds $0 < f' < 1$, integer elimination, and parity invariants.*


### 2.1 The Ratio Test Derivation


To determine the term with the largest absolute numerical value in the expansion of $(a + b)^n$ for given numerical values of $a$ and $b$:


Consider the absolute ratio of consecutive terms:


$$\left|\frac{T_{r+1}}{T_r}\right| = \left|\frac{\binom{n}{r} a^{n-r} b^r}{\binom{n}{r-1} a^{n-r+1} b^{r-1}}\right| = \frac{n - r + 1}{r} \left|\frac{b}{a}\right|$$


Setting the condition for increasing terms $\left|\frac{T_{r+1}}{T_r}\right| \ge 1$:


$$\frac{n - r + 1}{r} \left|\frac{b}{a}\right| \ge 1 \implies (n - r + 1)|b| \ge r|a| \implies (n + 1)|b| \ge r(|a| + |b|)$$


$$\mathbf{r \le \frac{(n + 1)|b|}{|a| + |b|} \equiv m}$$


---


### 2.2 The Two NGT Classification Cases


Calculate the critical parameter:


$$\mathbf{m = \frac{(n + 1)|b|}{|a| + |b|} = \frac{n + 1}{1 + \left|\frac{a}{b}\right|}}$$


1. **Case 1: $m$ is an INTEGER ($m \in \mathbb{Z}$):**
   * At $r = m$, $\left|\frac{T_{m+1}}{T_m}\right| = 1 \implies |T_{m+1}| = |T_m|$.
   * There are **TWO numerically greatest terms**, and they have identical magnitudes:
     $$\mathbf{\text{Twin NGTs: } T_m \quad \text{and} \quad T_{m+1}}$$


2. **Case 2: $m$ is NOT an integer ($m \notin \mathbb{Z}$):**
   * Let $\lfloor m \rfloor$ denote the greatest integer less than $m$.
   * Terms increase strictly up to $r = \lfloor m \rfloor$ and decrease thereafter.
   * There is a **SINGLE, UNIQUE numerically greatest term**:
     $$\mathbf{\text{Unique NGT: } T_{\lfloor m \rfloor + 1}}$$


---


## 3. Arithmetic Applications: Divisibility, Remainders & Last Digits


### 3.1 Binomial Remainder Modulo Arithmetic


To evaluate the remainder when a large power $A^n$ is divided by a modulus $M$:
1. Express the base $A$ (or an integer power $A^k$) in the form $k M + 1$ or $k M - 1$ or $k M + R$.
2. Apply the binomial expansion:
   $$(M + 1)^n = \binom{n}{0} M^n + \binom{n}{1} M^{n-1} + \dots + \binom{n}{n-1} M + 1 = M \cdot Q + 1$$
   $$\mathbf{(M + 1)^n \equiv 1 \pmod M}$$
3. For alternating signs:
   $$(M - 1)^n = M \cdot Q + (-1)^n$$
   * If $n$ is even: Remainder is $1$.
   * If $n$ is odd: Remainder is $(-1) \equiv M - 1 \pmod M$.


**Classical JEE Remainder Example:**
Find the remainder when $7^{103}$ is divided by $25$:
* $7^2 = 49 = 50 - 1 = 2(25) - 1$.
* $7^{103} = 7 \cdot (7^2)^{51} = 7 \cdot (50 - 1)^{51} = 7 \cdot [50 k - 1] = 350 k - 7 = 25(14 k - 1) + 18$.
* The remainder is strictly **$18$**.


---


### 3.2 Determination of Last Digits
* **Last Digit (Units Place):** Evaluate the expression modulo $10$.
* **Last Two Digits (Tens and Units):** Evaluate the expression modulo $100 = 10^2$. Expand as $(10k \pm 1)^n$ and retain terms up to the linear power of $100$.
* **Last Three Digits:** Evaluate modulo $1000 = 10^3$. Expand as $(100k \pm 1)^n$ and retain quadratic terms.


---


### 3.3 The Integral & Fractional Parts ($I + f$) Surd Conjugate Method


**Problem Formulation:**
Let $N = (A + \sqrt{B})^n = I + f$, where $A, n \in \mathbb{N}$, $B$ is not a perfect square, $I = \lfloor N \rfloor \in \mathbb{Z}$ is the integral part, and $f = \{N\} \in (0, 1)$ is the fractional part, with $A - 1 < \sqrt{B} < A$.


**The Conjugate Invariant Algorithm:**
1. Define the conjugate fractional part:
   $$\mathbf{f' = (A - \sqrt{B})^n \quad \text{or} \quad f' = (\sqrt{B} - A)^n}$$
   Since $0 < |A - \sqrt{B}| < 1$, raising to power $n$ preserves the strict bounds:
   $$\mathbf{0 < f' < 1}$$
2. Add or subtract $N$ and $f'$ depending on whether surd terms are eliminated:
   * **Addition Case:**
     $$(I + f) + f' = (A + \sqrt{B})^n + (A - \sqrt{B})^n = 2\left[\binom{n}{0} A^n + \binom{n}{2} A^{n-2} B + \dots\right] = 2K \quad (\text{Even Integer})$$
3. Analyze the fractional bounds:
   $$0 < f < 1 \quad \text{and} \quad 0 < f' < 1 \implies 0 < f + f' < 2$$
   Since $I + (f + f') = 2K$ is an integer, $(f + f')$ must be an integer!
   $$\mathbf{f + f' = 1 \implies f' = 1 - f}$$
4. **Immediate Invariants:**
   * $I = 2K - 1 \implies \mathbf{I \text{ is always an ODD integer}}$.
   * Product of primary number and conjugate:
     $$\mathbf{(I + f)(1 - f) = (I + f)f' = (A + \sqrt{B})^n (A - \sqrt{B})^n = (A^2 - B)^n}$$


---


## 4. Binomial Coefficient Series: Calculus & Algebraic Techniques


In the expansion $(1 + x)^n = \sum_{r=0}^n C_r x^r$, where $C_r \equiv \binom{n}{r}$:


### 4.1 Sum of Coefficients Invariant (Variable Substitution)
* **The Universal Evaluation Rule:** The sum of all coefficients in any polynomial expansion $P(x, y, z)$ is obtained by setting **every variable equal to $1$**:
  $$\mathbf{\sum \text{Coefficients} = P(1, 1, \dots, 1)}$$
  * Example: In $(3x - 2y + z)^{12}$, sum of coefficients $= (3 - 2 + 1)^{12} = 2^{12} = 4096$.
* Setting $x = 1$ in $(1 + x)^n$:
  $$\mathbf{C_0 + C_1 + C_2 + \dots + C_n = 2^n}$$
* Setting $x = -1$:
  $$\mathbf{C_0 - C_1 + C_2 - C_3 + \dots + (-1)^n C_n = 0}$$
* Adding and subtracting both equations:
  $$\mathbf{C_0 + C_2 + C_4 + \dots = C_1 + C_3 + C_5 + \dots = 2^{n-1}}$$


---


### 4.2 Differentiation Method (Coefficients Multiplied by Arithmetic Terms)


When the binomial coefficient $C_r$ is multiplied by an arithmetic factor like $r, r^2, (r+1)$:


1. **First Derivative Identity:**
   $$(1 + x)^n = C_0 + C_1 x + C_2 x^2 + \dots + C_n x^n$$
   Differentiating with respect to $x$:
   $$n(1 + x)^{n-1} = C_1 + 2C_2 x + 3C_3 x^2 + \dots + n C_n x^{n-1}$$
   * Substituting $x = 1$:
     $$\mathbf{\sum_{r=1}^n r \cdot C_r = 1 \cdot C_1 + 2 \cdot C_2 + 3 \cdot C_3 + \dots + n \cdot C_n = n \cdot 2^{n-1}}$$
   * Substituting $x = -1$:
     $$\mathbf{\sum_{r=1}^n (-1)^{r-1} r \cdot C_r = C_1 - 2C_2 + 3C_3 - \dots + (-1)^{n-1} n C_n = 0}$$


2. **Second Derivative Identity ($r^2 C_r$):**
   Multiply the first derivative by $x$:
   $$n x(1 + x)^{n-1} = \sum_{r=1}^n r C_r x^r$$
   Differentiating again:
   $$n(1 + x)^{n-1} + n(n - 1)x(1 + x)^{n-2} = \sum_{r=1}^n r^2 C_r x^{r-1}$$
   * Substituting $x = 1$:
     $$\mathbf{\sum_{r=1}^n r^2 C_r = n \cdot 2^{n-1} + n(n - 1) \cdot 2^{n-2} = n(n + 1) \cdot 2^{n-2}}$$


---


### 4.3 Integration Method (Coefficients Divided by Arithmetic Terms)


When the binomial coefficient $C_r$ is divided by $(r + 1), (r + 2)$:


1. **Standard Integral Identity:**
   $$\int_0^x (1 + t)^n dt = \int_0^x \left(C_0 + C_1 t + C_2 t^2 + \dots + C_n t^n\right) dt$$
   $$\frac{(1 + x)^{n+1} - 1}{n + 1} = C_0 x + \frac{C_1}{2}x^2 + \frac{C_2}{3}x^3 + \dots + \frac{C_n}{n+1}x^{n+1}$$
   * Setting $x = 1$:
     $$\mathbf{\sum_{r=0}^n \frac{C_r}{r + 1} = C_0 + \frac{C_1}{2} + \frac{C_2}{3} + \dots + \frac{C_n}{n + 1} = \frac{2^{n+1} - 1}{n + 1}}$$
   * Setting $x = -1$:
     $$\mathbf{\sum_{r=0}^n \frac{(-1)^r C_r}{r + 1} = C_0 - \frac{C_1}{2} + \frac{C_2}{3} - \dots + \frac{(-1)^n C_n}{n + 1} = \frac{1}{n + 1}}$$


---


### 4.4 Product of Binomial Coefficients (Convolution Series)


Consider the algebraic product identity:


$$(1 + x)^n (x + 1)^n = (1 + x)^{2n}$$


$$(C_0 + C_1 x + C_2 x^2 + \dots + C_n x^n)(C_0 x^n + C_1 x^{n-1} + \dots + C_n) = \sum_{k=0}^{2n} \binom{2n}{k} x^k$$


1. **Sum of Squares of Binomial Coefficients:**
   Equating the coefficient of $x^n$ on both sides:
   $$\mathbf{C_0^2 + C_1^2 + C_2^2 + \dots + C_n^2 = \binom{2n}{n} = \frac{(2n)!}{(n!)^2}}$$


2. **Shifted Convolution Products (Difference of Indices $= k$):**
   Equating the coefficient of $x^{n - k}$ (or $x^{n + k}$):
   $$\mathbf{C_0 C_k + C_1 C_{k+1} + C_2 C_{k+2} + \dots + C_{n-k} C_n = \binom{2n}{n - k} = \frac{(2n)!}{(n - k)!(n + k)!}}$$


3. **Alternating Sum of Squares:**
   Consider $(1 - x^2)^n = (1 - x)^n (1 + x)^n$:
   $$\mathbf{C_0^2 - C_1^2 + C_2^2 - C_3^2 + \dots + (-1)^n C_n^2 = \begin{cases} 0 & \text{if } n \text{ is odd} \\ (-1)^{n/2} \binom{n}{n/2} & \text{if } n \text{ is even} \end{cases}}$$


---


## 5. Binomial Theorem for Any Index (Negative or Fractional $n \in \mathbb{Q}$)


![Negative Fractional Index and Multinomial Geometry](/media/negative_fractional_index_and_multinomial_geometry.webp)
*Description: Two-panel advanced expansion graphic: (Panel A) Convergence profiles of infinite binomial series $(1-x)^{-1}$, $(1-x)^{-2}$, and $(1+x)^{1/2}$ confined strictly to the domain of convergence $|x| < 1$, illustrating vertical asymptotic divergence at $x = 1$; (Panel B) Multinomial expansion triangular lattice for $(x + y + z)^4$ displaying discrete simplex coordinates $(r_1, r_2, r_3)$ with total terms given by $\binom{n+2}{2} = 15$.*


### 5.1 Convergence Preconditions & Theorem Statement


Let $n$ be any real number (negative integer or fraction, $n \in \mathbb{Q} \setminus \mathbb{W}$):


1. **MANDATORY CONVERGENCE CONDITION:**
   The series converges to a finite value **if and only if $|x| < 1$** (i.e., $-1 < x < 1$).
2. **MANDATORY UNITY FIRST TERM:**
   The first term inside the parentheses **must be strictly equal to $1$**. If expanding $(a + x)^n$:
   $$\mathbf{(a + x)^n = a^n \left(1 + \frac{x}{a}\right)^n \quad \text{valid only when } \left|\frac{x}{a}\right| < 1 \iff |x| < |a|}$$


**General Infinite Expansion:**


$$\mathbf{(1 + x)^n = 1 + n x + \frac{n(n - 1)}{2!} x^2 + \frac{n(n - 1)(n - 2)}{3!} x^3 + \dots + T_{r+1} + \dots}$$


where the $(r + 1)$-th general term is:


$$\mathbf{T_{r+1} = \frac{n(n - 1)(n - 2)\cdots(n - r + 1)}{r!} x^r}$$


* The series contains **infinitely many terms** (does not terminate).


---


### 5.2 Four Canonical Infinite Series Expansions


These expansions occur continuously in JEE calculus, limits, and physics approximations:


1. **$(1 - x)^{-1}$ Expansion:**
   $$\mathbf{(1 - x)^{-1} = 1 + x + x^2 + x^3 + x^4 + \dots = \sum_{r=0}^\infty x^r \quad (|x| < 1)}$$


2. **$(1 + x)^{-1}$ Expansion:**
   $$\mathbf{(1 + x)^{-1} = 1 - x + x^2 - x^3 + x^4 - \dots = \sum_{r=0}^\infty (-1)^r x^r \quad (|x| < 1)}$$


3. **$(1 - x)^{-2}$ Expansion:**
   $$\mathbf{(1 - x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + \dots = \sum_{r=0}^\infty (r + 1) x^r \quad (|x| < 1)}$$


4. **$(1 + x)^{-2}$ Expansion:**
   $$\mathbf{(1 + x)^{-2} = 1 - 2x + 3x^2 - 4x^3 + \dots = \sum_{r=0}^\infty (-1)^r (r + 1) x^r \quad (|x| < 1)}$$


5. **General Negative Integer Power $(1 - x)^{-n}$:**
   $$\mathbf{(1 - x)^{-n} = \sum_{r=0}^\infty \binom{n + r - 1}{r} x^r \quad (|x| < 1)}$$


---


### 5.3 Binomial Approximations for Small Quantities ($|x| \ll 1$)


When $|x|$ is exceedingly small ($|x| < 0.05$), higher powers of $x^2, x^3, \dots$ can be neglected:


$$\mathbf{(1 + x)^n \approx 1 + n x}$$


$$\mathbf{(1 + x)^n \approx 1 + n x + \frac{n(n - 1)}{2} x^2 \quad (\text{Second-Order Correction})}$$


---


## 6. The Multinomial Theorem


### 6.1 General Theorem Formulation


The Multinomial Theorem generalizes the Binomial Theorem to expansions containing three or more terms:


$$(x_1 + x_2 + x_3 + \dots + x_k)^n = \sum \frac{n!}{r_1! \, r_2! \, r_3! \cdots r_k!} x_1^{r_1} x_2^{r_2} x_3^{r_3} \cdots x_k^{r_k}$$


where the summation extends over **all non-negative integer partitions** $(r_1, r_2, \dots, r_k)$ satisfying:


$$\mathbf{r_1 + r_2 + r_3 + \dots + r_k = n \quad (r_i \in \{0, 1, 2, \dots, n\})}$$


* **Coefficient of a Specific Term:**
  $$\mathbf{\text{Coeff of } x_1^{r_1} x_2^{r_2} \cdots x_k^{r_k} = \frac{n!}{r_1! \, r_2! \, r_3! \cdots r_k!}}$$


---


### 6.2 Total Number of Distinct Terms in Multinomial Expansion


Every distinct term in the expansion corresponds to a unique non-negative integer solution to:


$$r_1 + r_2 + \dots + r_k = n$$


By Stars and Bars (Beggar's Method):


$$\mathbf{\text{Total Number of Terms} = \binom{n + k - 1}{k - 1} = {}^{n + k - 1} C_{k - 1}}$$


* **Trinomial Expansion $(x + y + z)^n$:**
  $$\mathbf{\text{Terms} = \binom{n + 3 - 1}{3 - 1} = \binom{n + 2}{2} = \frac{(n + 1)(n + 2)}{2}}$$


---


### 6.3 Greatest Coefficient in a Multinomial Expansion


The multinomial coefficient $\frac{n!}{r_1! \, r_2! \dots r_k!}$ is maximized when the denominator factorials are minimized. This occurs when the indices $r_1, r_2, \dots, r_k$ are as nearly equal as possible:


* Divide $n$ by $k$: $n = q \cdot k + r$, where $q = \lfloor n/k \rfloor$ and $r = n \pmod k$.
* To maximize the coefficient, choose:
  * $r$ of the indices equal to $(q + 1)$.
  * $(k - r)$ of the indices equal to $q$.


$$\mathbf{\text{Maximum Multinomial Coefficient} = \frac{n!}{(q!)^{k - r} \, [(q + 1)!]^r}}$$


---


## 7. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Negative Index Normalization Trap:**
   * When asked to expand $(2 + 3x)^{-4}$:
   * **Fatal Error:** Expanding directly as $2^{-4} + (-4)2^{-5}(3x) + \dots$ without checking domain, or failing to factor out $2^{-4}$.
   * **Correct Protocol:** Factor out $2$ completely:
     $$(2 + 3x)^{-4} = 2^{-4} \left(1 + \frac{3x}{2}\right)^{-4} = \frac{1}{16} \left(1 + \frac{3x}{2}\right)^{-4}$$
     This is valid **if and only if $|3x/2| < 1 \iff |x| < 2/3$**!


2. **The "Greatest Binomial Coefficient" vs. "Numerically Greatest Term" Confusion:**
   * **Greatest Binomial Coefficient:** Refers strictly to the combinatorial number $^n C_r$, which is independent of the numerical values of $a$ and $b$. It always occurs at the **middle term** ($r = \lfloor n/2 \rfloor$).
   * **Numerically Greatest Term (NGT):** Takes into account the actual numerical values of $a$ and $b$, governed by the critical parameter $m = \frac{(n+1)|b|}{|a|+|b|}$.


3. **The Dissimilar Terms Multi-Exponent Fallacy:**
   * When counting terms in $(1 + 2x + x^2)^{20}$:
   * **Wrong Approach:** Using the trinomial formula $\binom{20 + 3 - 1}{3 - 1} = \binom{22}{2} = 231$.
   * **Correct Approach:** Recognize that the base is a perfect square!
     $$(1 + 2x + x^2)^{20} = [(1 + x)^2]^{20} = (1 + x)^{40}$$
     A standard binomial of degree $40$ has exactly **$40 + 1 = 41$ dissimilar terms**, NOT $231$! Always condense internal polynomials before applying term counting formulas.


4. **The Index Absorption Arithmetic Sign Error:**
   * Applying $r \cdot {}^n C_r = n \cdot {}^{n-1} C_{r-1}$ is valid for $r \ge 1$.
   * When simplifying alternating series $\sum (-1)^r r {}^n C_r$:
     $$\sum_{r=1}^n (-1)^r r \binom{n}{r} = n \sum_{r=1}^n (-1)^r \binom{n-1}{r-1} = -n \sum_{k=0}^{n-1} (-1)^k \binom{n-1}{k} = -n(0) = 0 \quad (n > 1)$$
   * Ensure the shift in index $k = r - 1$ flips the sign of $(-1)^r = -(-1)^{r-1}$!