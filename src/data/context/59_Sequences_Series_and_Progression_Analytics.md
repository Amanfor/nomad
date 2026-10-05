Mathematics Revision Context: Chapter 59 — Sequences, Series & Progression Analytics


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Sequence and Series/`, `Theory_ldJcJBm.pdf`, `Exercise_CbKlK6e.pdf`, and `Sequence__Series.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Algebra Core — Sequence & Series Foundations (Functions $\mathbb{N} \to \mathbb{R}$, Finite vs. Infinite), Arithmetic Progression (A.P. Mechanics, General Term $t_n = a + (n-1)d$, Sum Formulations $S_n = \frac{n}{2}[2a+(n-1)d] = \frac{n}{2}[a+l] = n\cdot t_{\text{mid}}$, Linear and Quadratic Polynomial Signatures, Term Extraction $t_n = S_n - S_{n-1}$, Equidistant Symmetries $t_k + t_{n-k+1} = a+l$, Symmetric Variable Selections, Arithmetic Means $A = \frac{a+b}{2}$, Insertion of $n$ A.M.s, Mean Sum Identity $\sum A_r = nA$, Two A.P. Sum Ratio Transformation $n \mapsto 2m-1$), Geometric Progression (G.P. Dynamics, General Term $t_n = ar^{n-1}$, Finite Sum $S_n = \frac{a(1-r^n)}{1-r}$, Convergent Infinite Sum $S_\infty = \frac{a}{1-r}$ for $|r| < 1$, Equidistant Product Symmetries $t_k \cdot t_{n-k+1} = al$, Total Product $P_n = (al)^{n/2}$, Geometric Means $G = \sqrt{ab}$, Insertion of $n$ G.M.s, Mean Product Invariant $\prod G_r = G^n$), Harmonic Progression (H.P. Fundamentals, Reciprocal A.P. Isomorphism, General Term $t_n = \frac{1}{a+(n-1)d}$, Harmonic Mean $H = \frac{2ab}{a+b}$, $n$-Variable H.M., Insertion of $n$ H.M.s), Canonical Mean Inequalities ($A.M. \ge G.M. \ge H.M.$ Semicircle Geometric Proof & Algebraic Formulations, Invariant Relation $G^2 = AH$ and $A \ge G \ge H$, Weighted A.M.-G.M. Inequality, Product Maximization & Sum Minimization Optimization Paradigms, Cauchy-Schwarz Inequality), Arithmetico-Geometric Progression (A.G.P. Dynamics, Shift-and-Subtract Derivation, Finite Sum $S_n$, Convergent Infinite Sum $S_\infty = \frac{a}{1-r} + \frac{dr}{(1-r)^2}$), Method of Differences (First & Higher-Order Difference Sequences, Polynomial Degree Signatures, Geometric Difference Transitions), Telescoping Series ($V_n - V_{n-1}$ / $V_n$ Method, Domino Boundary Cancellations, Denominator Factorial Decompositions, Numerator Consecutive Factor Products), Standard Finite Power Sums ($\\sum k, \\sum k^2, \\sum k^3, \\sum k^4$), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Foundations of Sequences, Series, and Progressions


### 1.1 Formal Mathematical Definitions


1. **Sequence:**
   A sequence is mathematically defined as a function $f: \mathbb{N} \to \mathbb{R}$ whose domain is the set of natural numbers $\mathbb{N} = \{1, 2, 3, \dots\}$.
   The functional values $f(1), f(2), f(3), \dots, f(n)$ are termed the **terms** of the sequence, conventionally denoted as:
   $$\{t_1, t_2, t_3, \dots, t_n, \dots\} \quad \text{or} \quad \{a_n\}_{n=1}^\infty$$
   * **Finite Sequence:** Contains a finite number of terms (e.g., coordinates, finite surveys).
   * **Infinite Sequence:** Contains infinitely many terms without termination.


2. **Series:**
   The algebraic expression formed by summing the terms of a sequence:
   $$S = t_1 + t_2 + t_3 + \dots + t_n + \dots = \sum_{k=1}^\infty t_k$$
   The sum of the first $n$ terms is called the **$n$-th partial sum**, denoted $S_n = \sum_{k=1}^n t_k$.


3. **Progression:**
   A sequence whose successive terms strictly conform to an explicit, deterministic algebraic or geometric rule (such as constant differences, constant quotients, or linear combinations).


---


### 1.2 Fundamental Term Extraction Invariant


For **any arbitrary sequence** whose $n$-th partial sum is known as a function of $n$, $S_n$:


$$\mathbf{t_n = S_n - S_{n-1} \quad (\forall n \ge 2), \quad \text{with} \quad t_1 = S_1}$$


* This relation is completely universal—it applies to A.P., G.P., A.G.P., and arbitrary polynomial or recursive sequences alike!
* **Crucial Trap:** Always evaluate $t_1 = S_1$ separately. If the formula $S_n - S_{n-1}$ yields a different value at $n = 1$, the first term is an anomaly and does not follow the general progression rule for $n \ge 2$.


---


## 2. Arithmetic Progression (A.P.)


### 2.1 Standard Definition & General Term


An Arithmetic Progression is a sequence in which each term after the first is obtained by adding a constant real number $d$ (the **common difference**) to the preceding term:


$$t_{n} - t_{n-1} = d = \text{Constant} \quad (\forall n \ge 2)$$


Let $a = t_1$ be the first term and $d$ be the common difference:


$$\mathbf{t_n = a + (n - 1)d}$$


* If $d > 0$: The A.P. is strictly increasing ($t_n \to +\infty$).
* If $d < 0$: The A.P. is strictly decreasing ($t_n \to -\infty$).
* If $d = 0$: The A.P. is constant ($t_n = a \;\forall n$).


**Linear Polynomial Signature:**
The general term of an A.P. is always a **first-degree (linear) polynomial in $n$**:


$$t_n = d \cdot n + (a - d) = A n + B$$


* **Immediate Invariant:** The coefficient of $n$ is identically the **common difference** ($d = A$).


---


### 2.2 Sum of First $n$ Terms ($S_n$)


The sum of the first $n$ terms of an A.P. is derived via Gauss's reversal trick ($S_n + S_n$):


$$S_n = a + (a+d) + \dots + [a+(n-1)d]$$
$$S_n = [a+(n-1)d] + [a+(n-2)d] + \dots + a$$
$$2S_n = n \cdot [2a + (n-1)d]$$


$$\mathbf{S_n = \frac{n}{2}[2a + (n - 1)d] = \frac{n}{2}[a + l]}$$


where $l = t_n = a + (n-1)d$ is the last term.


**Middle Term Representation:**
* If $n$ is an **odd integer**:
  $$\mathbf{S_n = n \cdot t_{\frac{n+1}{2}} = n \times (\text{Middle Term})}$$


**Quadratic Polynomial Signature of $S_n$:**
Expanding $S_n$:


$$S_n = \frac{d}{2}n^2 + \left(a - \frac{d}{2}\right)n = A n^2 + B n$$


* **Core Characteristic:** A sequence is an A.P. if and only if its sum $S_n$ is a **quadratic polynomial in $n$ with ZERO constant term** ($C = 0$).
* **Common Difference Extraction Shortcut:**
  $$\mathbf{d = 2A = 2 \times (\text{coefficient of } n^2)}$$
  $$\mathbf{a = t_1 = S_1 = A + B}$$
* **Trap:** If $S_n = An^2 + Bn + C$ with $C \neq 0$, the sequence is an A.P. only from the second term onward ($n \ge 2$), because $t_1 = S_1 = A + B + C$, whereas $t_2 - t_1 \neq t_3 - t_2$.


---


### 2.3 Fundamental Properties of Arithmetic Progressions


1. **Equidistant Symmetries:**
   In a finite A.P. of $n$ terms, the sum of two terms equidistant from the beginning and end is constant and equal to the sum of the first and last terms:
   $$\mathbf{t_k + t_{n - k + 1} = t_1 + t_n = a + l \quad (\forall k \in \{1, 2, \dots, n\})}$$


2. **Linear Invariance Under Arithmetic Operations:**
   If $a_1, a_2, a_3, \dots$ is an A.P. with common difference $d$:
   * $a_1 \pm k, a_2 \pm k, a_3 \pm k, \dots$ is an A.P. with common difference $d$.
   * $k a_1, k a_2, k a_3, \dots$ is an A.P. with common difference $k d$.
   * $a_1/k, a_2/k, a_3/k, \dots$ ($k \neq 0$) is an A.P. with common difference $d/k$.
   * If $b_1, b_2, b_3, \dots$ is an A.P. with common difference $d'$, then $a_n \pm b_n$ is an A.P. with common difference $d \pm d'$.
   * **Caution:** The product $a_n b_n$ and quotient $a_n / b_n$ are **NOT** in A.P.!


3. **Optimal Selection of Symmetric Terms:**
   When the sum of consecutive terms of an A.P. is given:
   * **3 terms in A.P.:** Assume as $a - d, \; a, \; a + d$ (Common difference $= d$; $\text{Sum} = 3a$).
   * **4 terms in A.P.:** Assume as $a - 3d, \; a - d, \; a + d, \; a + 3d$ (Common difference $= 2d$; $\text{Sum} = 4a$).
   * **5 terms in A.P.:** Assume as $a - 2d, \; a - d, \; a, \; a + d, \; a + 2d$ (Common difference $= d$; $\text{Sum} = 5a$).
   * **6 terms in A.P.:** Assume as $a - 5d, \; a - 3d, \; a - d, \; a + d, \; a + 3d, \; a + 5d$ (Common difference $= 2d$).


---


### 2.4 Arithmetic Means (A.M.)


1. **Single Arithmetic Mean:**
   If three numbers $a, A, b$ are in A.P., then $A$ is the single Arithmetic Mean between $a$ and $b$:
   $$A - a = b - A \implies \mathbf{A = \frac{a + b}{2}}$$
   * For $n$ real numbers $a_1, a_2, \dots, a_n$, their arithmetic mean is:
     $$\mathbf{A = \frac{a_1 + a_2 + \dots + a_n}{n} = \frac{1}{n}\sum_{i=1}^n a_i}$$


2. **Insertion of $n$ Arithmetic Means Between $a$ and $b$:**
   Let $A_1, A_2, \dots, A_n$ be $n$ numbers inserted between $a$ and $b$ such that the sequence:
   $$a, \; A_1, \; A_2, \; \dots, \; A_n, \; b$$
   forms an A.P. consisting of $(n + 2)$ terms.
   * $t_1 = a$ and $t_{n+2} = b = a + (n + 1)d$:
     $$\mathbf{d = \frac{b - a}{n + 1}}$$
   * The $r$-th inserted mean $A_r$ is the $(r+1)$-th term of the overall sequence:
     $$\mathbf{A_r = a + r \cdot d = a + r\left(\frac{b - a}{n + 1}\right) = \frac{(n - r + 1)a + r b}{n + 1}}$$


3. **Sum of $n$ Inserted Arithmetic Means Theorem:**
   $$\sum_{r=1}^n A_r = A_1 + A_2 + \dots + A_n = \frac{n}{2}[A_1 + A_n] = \frac{n}{2}\left[(a+d) + (b-d)\right] = \frac{n}{2}(a + b)$$
   $$\mathbf{\sum_{r=1}^n A_r = n \cdot A = n \left(\frac{a + b}{2}\right)}$$
   * **Core Rule:** The sum of $n$ arithmetic means inserted between two numbers equals **$n$ times the single arithmetic mean** between them!


---


### 2.5 The Two A.P. Sum-Ratio to Term-Ratio Transformation


A pervasive JEE Main & Advanced classic problem asks for the ratio of $m$-th terms given the ratio of sums of $n$ terms of two A.P.s:


$$\frac{S_n}{S'_n} = \frac{\frac{n}{2}[2a_1 + (n - 1)d_1]}{\frac{n}{2}[2a_2 + (n - 1)d_2]} = \frac{a_1 + \left(\frac{n - 1}{2}\right)d_1}{a_2 + \left(\frac{n - 1}{2}\right)d_2} = \frac{f(n)}{g(n)}$$


To find the ratio of their $m$-th terms:
$$\frac{t_m}{t'_m} = \frac{a_1 + (m - 1)d_1}{a_2 + (m - 1)d_2}$$


Equating the coefficients of $d$:
$$\frac{n - 1}{2} = m - 1 \implies \mathbf{n = 2m - 1}$$


$$\mathbf{\frac{t_m}{t'_m} = \left. \frac{f(n)}{g(n)} \right|_{n = 2m - 1} = \frac{f(2m - 1)}{g(2m - 1)}}$$


* **Reverse Transformation (Term Ratio to Sum Ratio):**
  If given $\frac{t_n}{t'_n} = \frac{\phi(n)}{\psi(n)}$, then to find $\frac{S_m}{S'_m}$, substitute $\mathbf{n = \frac{m + 1}{2}}$.


---


## 3. Geometric Progression (G.P.)


![Progression Types and Mean Inequalities](/media/progression_types_and_mean_inequalities.webp)
*Description: Two-panel progression reference: (Panel A) Comparative trajectories of A.P. (linear), G.P. (exponential growth), and H.P. (harmonic decay); (Panel B) Semicircle geometric proof of the fundamental inequality $A.M. \ge G.M. \ge H.M.$ showing diameter $a+b$, radius $OC = A.M. = (a+b)/2$, altitude $CD = G.M. = \sqrt{ab}$, right triangle altitude projection $H.M. = 2ab/(a+b)$, and the geometric invariant $G^2 = A \cdot H$.*


### 3.1 Standard Definition & General Term


A Geometric Progression is a sequence in which each term after the first is obtained by multiplying the preceding term by a fixed non-zero constant $r$ (the **common ratio**):


$$\frac{t_n}{t_{n-1}} = r = \text{Constant} \quad (\forall n \ge 2; \; r \neq 0)$$


Let $a = t_1$ be the first term and $r$ the common ratio:


$$\mathbf{t_n = a r^{n-1}}$$


---


### 3.2 Sum of First $n$ Terms ($S_n$) & Infinite Sum ($S_\infty$)


1. **Finite Sum ($S_n$):**
   $$S_n = a + ar + ar^2 + \dots + ar^{n-1}$$
   $$r S_n = ar + ar^2 + \dots + ar^n$$
   Subtracting $(1 - r)S_n = a(1 - r^n)$:


   $$\mathbf{S_n = \frac{a(1 - r^n)}{1 - r} = \frac{a(r^n - 1)}{r - 1} \quad (r \neq 1)}$$


   *(If $r = 1$, $S_n = n \cdot a$).*


2. **Sum of an Infinite G.P. ($S_\infty$):**
   If $|r| < 1$ (i.e., $-1 < r < 1$), as $n \to \infty$, $r^n \to 0$. The series converges to a finite limit:


   $$\mathbf{S_\infty = \lim_{n \to \infty} \frac{a(1 - r^n)}{1 - r} = \frac{a}{1 - r} \quad (|r| < 1)}$$


   * If $|r| \ge 1$ and $a \neq 0$, the infinite series diverges.


---


### 3.3 Fundamental Properties of Geometric Progressions


1. **Equidistant Product Symmetries:**
   In a finite G.P. of $n$ terms, the product of terms equidistant from the beginning and end is constant and equals the product of the first and last terms:
   $$\mathbf{t_k \cdot t_{n - k + 1} = t_1 \cdot t_n = a \cdot l \quad (\forall k \in \{1, 2, \dots, n\})}$$


2. **Total Product of First $n$ Terms ($P_n$):**
   $$P_n = t_1 \cdot t_2 \cdot \dots \cdot t_n = (a)(ar)(ar^2)\dots(ar^{n-1}) = a^n r^{0 + 1 + 2 + \dots + (n-1)} = a^n r^{\frac{n(n-1)}{2}}$$
   $$\mathbf{P_n = (a \cdot l)^{n/2} = (t_1 \cdot t_n)^{n/2}}$$


3. **Logarithmic Isomorphism:**
   If $a_1, a_2, a_3, \dots$ is a G.P. with positive terms ($a_i > 0$) and common ratio $r > 0$, then:
   $$\log a_1, \; \log a_2, \; \log a_3, \; \dots$$
   forms an **A.P.** with common difference $\mathbf{d = \log r}$.
   *(Conversely, if $A_n$ is an A.P., then $e^{A_n}$ is a G.P.).*


4. **Optimal Selection of Symmetric Terms:**
   * **3 terms in G.P.:** Assume as $\frac{a}{r}, \; a, \; ar$ (Common ratio $= r$; $\text{Product} = a^3$).
   * **4 terms in G.P.:** Assume as $\frac{a}{r^3}, \; \frac{a}{r}, \; ar, \; ar^3$ (Common ratio $= r^2$; $\text{Product} = a^4$).
   * **5 terms in G.P.:** Assume as $\frac{a}{r^2}, \; \frac{a}{r}, \; a, \; ar, \; ar^2$ (Common ratio $= r$; $\text{Product} = a^5$).


---


### 3.4 Geometric Means (G.M.)


1. **Single Geometric Mean:**
   If $a, G, b$ are three positive numbers in G.P., then $G$ is the Geometric Mean:
   $$\frac{G}{a} = \frac{b}{G} \implies \mathbf{G = \sqrt{ab}}$$
   * For $n$ positive real numbers $a_1, a_2, \dots, a_n$:
     $$\mathbf{G = (a_1 \cdot a_2 \cdots a_n)^{1/n} = \left(\prod_{i=1}^n a_i\right)^{1/n}}$$


2. **Insertion of $n$ Geometric Means Between $a$ and $b$ ($a, b > 0$):**
   Let $G_1, G_2, \dots, G_n$ be inserted between $a$ and $b$ to form an $(n+2)$-term G.P.:
   $$a, \; G_1, \; G_2, \; \dots, \; G_n, \; b$$
   * $t_{n+2} = b = a r^{n+1} \implies \mathbf{r = \left(\frac{b}{a}\right)^{\frac{1}{n+1}}}$
   * The $k$-th inserted mean $G_k$ is:
     $$\mathbf{G_k = a r^k = a \left(\frac{b}{a}\right)^{\frac{k}{n+1}}}$$


3. **Product of $n$ Inserted Geometric Means Theorem:**
   $$\prod_{k=1}^n G_k = G_1 \cdot G_2 \dots G_n = a^n r^{1 + 2 + \dots + n} = a^n r^{\frac{n(n+1)}{2}} = a^n \left[\left(\frac{b}{a}\right)^{\frac{1}{n+1}}\right]^{\frac{n(n+1)}{2}} = a^n \left(\frac{b}{a}\right)^{n/2} = (ab)^{n/2}$$
   $$\mathbf{\prod_{k=1}^n G_k = (\sqrt{ab})^n = G^n}$$
   * **Core Rule:** The product of $n$ geometric means inserted between two numbers equals the **$n$-th power of the single geometric mean** between them!


---


## 4. Harmonic Progression (H.P.)


### 4.1 Definition & General Term


A sequence $a_1, a_2, a_3, \dots, a_n$ (where $a_i \neq 0$) is in Harmonic Progression if and only if the sequence of their reciprocals:


$$\frac{1}{a_1}, \; \frac{1}{a_2}, \; \frac{1}{a_3}, \; \dots, \; \frac{1}{a_n}$$


forms an Arithmetic Progression.


Let $\frac{1}{a}$ be the first term and $D$ the common difference of the reciprocal A.P.:


$$\mathbf{t_n = \frac{1}{\frac{1}{a} + (n - 1)D} = \frac{ab}{b + (n - 1)(a - b)}}$$


* **CRITICAL OPERATIONAL RULE:** There is **NO standard closed-form formula for the sum of $n$ terms of an H.P.** ($S_n = \sum 1/(a + nd)$ involves the digamma function $\psi$). Whenever a JEE problem mentions an H.P., immediately convert all terms into their reciprocal A.P. equivalents!


---


### 4.2 Harmonic Means (H.M.)


1. **Single Harmonic Mean:**
   If $a, H, b$ are in H.P., then $\frac{1}{a}, \frac{1}{H}, \frac{1}{b}$ are in A.P.:
   $$\frac{2}{H} = \frac{1}{a} + \frac{1}{b} = \frac{a + b}{ab} \implies \mathbf{H = \frac{2ab}{a + b}}$$
   * For $n$ positive numbers $a_1, a_2, \dots, a_n$:
     $$\mathbf{H = \frac{n}{\sum_{i=1}^n \frac{1}{a_i}} = \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + \dots + \frac{1}{a_n}}}$$


2. **Insertion of $n$ Harmonic Means Between $a$ and $b$:**
   If $H_1, H_2, \dots, H_n$ are inserted between $a$ and $b$, their reciprocals $1/H_k$ are $n$ arithmetic means between $1/a$ and $1/b$:
   $$D = \frac{\frac{1}{b} - \frac{1}{a}}{n + 1} = \frac{a - b}{(n + 1)ab}$$
   $$\mathbf{\frac{1}{H_r} = \frac{1}{a} + r D \implies H_r = \frac{1}{\frac{1}{a} + r\left(\frac{a - b}{(n + 1)ab}\right)}}$$


---


## 5. Mean Relations & Fundamental Inequalities ($A.M. \ge G.M. \ge H.M.$)


### 5.1 Relations for Two Positive Numbers


Let $a, b > 0$. Their three means are:
$$A = \frac{a + b}{2}, \quad G = \sqrt{ab}, \quad H = \frac{2ab}{a + b}$$


1. **The Geometric Progression Connection ($G^2 = A \cdot H$):**
   $$A \cdot H = \left(\frac{a + b}{2}\right)\left(\frac{2ab}{a + b}\right) = ab = (\sqrt{ab})^2 = G^2$$
   $$\mathbf{G^2 = A \cdot H \iff A, \; G, \; H \text{ form a G.P.}}$$


2. **The Fundamental Inequality ($A \ge G \ge H$):**
   * Difference $A - G$:
     $$A - G = \frac{a + b}{2} - \sqrt{ab} = \frac{a + b - 2\sqrt{ab}}{2} = \frac{(\sqrt{a} - \sqrt{b})^2}{2} \ge 0 \implies \mathbf{A \ge G}$$
   * Difference $G - H$:
     $$G - H = \sqrt{ab} - \frac{2ab}{a + b} = \frac{\sqrt{ab}(a + b - 2\sqrt{ab})}{a + b} = \frac{\sqrt{ab}(\sqrt{a} - \sqrt{b})^2}{a + b} \ge 0 \implies \mathbf{G \ge H}$$
   * Combining both inequalities:
     $$\mathbf{A \ge G \ge H}$$
     * **Equality Condition:** $\mathbf{A = G = H \iff a = b}$.


3. **Reconstructing the Numbers from $A$ and $G$:**
   Since $a + b = 2A$ and $ab = G^2$, $a$ and $b$ are the roots of the quadratic equation:
   $$x^2 - (a + b)x + ab = 0 \implies x^2 - 2Ax + G^2 = 0$$
   $$\mathbf{a, b = A \pm \sqrt{A^2 - G^2}}$$


---


### 5.2 General Inequality for $n$ Positive Real Numbers


For any $n$ positive numbers $a_1, a_2, \dots, a_n > 0$:


$$\mathbf{\frac{a_1 + a_2 + \dots + a_n}{n} \ge (a_1 \cdot a_2 \cdots a_n)^{1/n} \ge \frac{n}{\frac{1}{a_1} + \frac{1}{a_2} + \dots + \frac{1}{a_n}}}$$


$$\mathbf{A.M. \ge G.M. \ge H.M.}$$


* **Equality holds if and only if all terms are identically equal:**
  $$a_1 = a_2 = \dots = a_n$$


---


### 5.3 The Weighted A.M. – G.M. Inequality


Let $a_1, a_2, \dots, a_n > 0$ be positive numbers with positive real weights $w_1, w_2, \dots, w_n > 0$:


$$\mathbf{\frac{w_1 a_1 + w_2 a_2 + \dots + w_n a_n}{w_1 + w_2 + \dots + w_n} \ge \left(a_1^{w_1} \cdot a_2^{w_2} \cdots a_n^{w_n}\right)^{\frac{1}{w_1 + w_2 + \dots + w_n}}}$$


**Canonical JEE Optimization Technique:**
To maximize $x^p y^q z^r$ subject to a linear constraint $c_1 x + c_2 y + c_3 z = K$:
* Decompose each variable into $p, q, r$ equal parts respectively:
  $$\frac{c_1 x}{p} = \frac{c_2 y}{q} = \frac{c_3 z}{r}$$
* By Weighted A.M.-G.M., the product is maximized precisely when all decomposed terms are **mutually equal**!


---


### 5.4 The Cauchy-Schwarz Inequality


For any real sequences $(a_1, \dots, a_n)$ and $(b_1, \dots, b_n) \in \mathbb{R}^n$:


$$\mathbf{\left(\sum_{i=1}^n a_i b_i\right)^2 \le \left(\sum_{i=1}^n a_i^2\right) \left(\sum_{i=1}^n b_i^2\right)}$$


$$(a_1 b_1 + a_2 b_2 + \dots + a_n b_n)^2 \le (a_1^2 + a_2^2 + \dots + a_n^2)(b_1^2 + b_2^2 + \dots + b_n^2)$$


* Equality holds if and only if the vectors are proportional: $\frac{a_1}{b_1} = \frac{a_2}{b_2} = \dots = \frac{a_n}{b_n}$.
* **Titu's Lemma (Engel's Form):**
  $$\mathbf{\frac{x_1^2}{y_1} + \frac{x_2^2}{y_2} + \dots + \frac{x_n^2}{y_n} \ge \frac{(x_1 + x_2 + \dots + x_n)^2}{y_1 + y_2 + \dots + y_n} \quad (y_i > 0)}$$


---


## 6. Arithmetico-Geometric Progression (A.G.P.)


![AGP Summation and Convergence Dynamics](/media/agp_summation_and_convergence_dynamics.webp)
*Description: Two-panel A.G.P. graphic: (Panel A) Step-by-step partial sum trajectory for $S_n = \sum k(1/2)^{k-1}$ converging strictly to $S_\infty = 4$; (Panel B) Discrete term profile $t_n = [a + (n-1)d]r^{n-1}$ illustrating the initial arithmetic amplification phase followed by the eventual dominant geometric decay phase, pinpointing the peak term location.*


### 6.1 Standard Form & Term Structure


An Arithmetico-Geometric Progression is formed by taking the term-by-term product of an A.P. and a G.P.:


$$a, \; (a + d)r, \; (a + 2d)r^2, \; \dots, \; [a + (n - 1)d]r^{n-1}$$


* General term:
  $$\mathbf{t_n = [a + (n - 1)d]r^{n-1}}$$


---


### 6.2 Derivation of Finite Sum ($S_n$) via Shift-and-Subtract


$$S_n = a + (a+d)r + (a+2d)r^2 + \dots + [a+(n-1)d]r^{n-1}$$


Multiplying the entire equation by $r$ and shifting by one index:


$$r S_n = 0 + ar + (a+d)r^2 + \dots + [a+(n-2)d]r^{n-1} + [a+(n-1)d]r^n$$


Subtracting the second equation from the first:


$$(1 - r)S_n = a + \left[d r + d r^2 + d r^3 + \dots + d r^{n-1}\right] - [a + (n - 1)d]r^n$$


The bracketed terms form an ordinary G.P. of $(n-1)$ terms with first term $dr$ and ratio $r$:


$$(1 - r)S_n = a + \frac{dr(1 - r^{n-1})}{1 - r} - [a + (n - 1)d]r^n$$


Dividing through by $(1 - r)$:


$$\mathbf{S_n = \frac{a}{1 - r} + \frac{dr(1 - r^{n-1})}{(1 - r)^2} - \frac{[a + (n - 1)d]r^n}{1 - r} \quad (r \neq 1)}$$


---


### 6.3 Sum of Infinite A.G.P. ($S_\infty$)


When $|r| < 1$, as $n \to \infty$:
$$r^n \to 0 \quad \text{and} \quad n r^n \to 0$$


All terms containing $r^n$ and $r^{n-1}$ vanish:


$$\mathbf{S_\infty = \frac{a}{1 - r} + \frac{dr}{(1 - r)^2} \quad (|r| < 1)}$$


---


## 7. Method of Differences & Polynomial Generation


### 7.1 Identifying the Structure of $t_n$ via Successive Differences


Let the original sequence be $T_1, T_2, T_3, T_4, \dots$
Define the difference sequences:
* 1st Difference: $\Delta_1(n) = T_{n+1} - T_n$
* 2nd Difference: $\Delta_2(n) = \Delta_1(n+1) - \Delta_1(n)$
* $k$-th Difference: $\Delta_k(n) = \Delta_{k-1}(n+1) - \Delta_{k-1}(n)$


**Classification Rules:**
1. If the **1st differences $\Delta_1$ form an A.P.** (i.e., 2nd differences are constant):
   $$\mathbf{t_n = a n^2 + b n + c \quad (\text{Quadratic in } n)}$$
2. If the **2nd differences $\Delta_2$ form an A.P.** (i.e., 3rd differences are constant):
   $$\mathbf{t_n = a n^3 + b n^2 + c n + d \quad (\text{Cubic in } n)}$$
3. In general, if the **$k$-th differences are constant**, $t_n$ is a **polynomial of degree $k$ in $n$**.
4. If the **1st differences $\Delta_1$ form a G.P.** with common ratio $r$:
   $$\mathbf{t_n = a \cdot r^n + b}$$


---


### 7.2 Telescoping Summation of Differences


To evaluate $S_n = \sum_{k=1}^n T_k$:
$$T_n - T_{n-1} = \Delta_1(n-1)$$
$$T_{n-1} - T_{n-2} = \Delta_1(n-2)$$
$$\vdots$$
$$T_2 - T_1 = \Delta_1(1)$$


Summing vertically:
$$\mathbf{T_n = T_1 + \sum_{k=1}^{n-1} \Delta_1(k)}$$


Once the closed form of $T_n$ is determined, evaluate the overall sum by distributing the $\Sigma$ operator:
$$S_n = \sum_{k=1}^n T_k = a\sum k^2 + b\sum k + c\sum 1$$


---


## 8. Telescoping Series ($V_n - V_{n-1}$ / $V_n$ Method)


![Telescoping Cancellation and Vn Method](/media/telescoping_cancellation_and_vn_method.webp)
*Description: Two-panel summation mechanics: (Panel A) Telescoping domino cancellation flowchart illustrating $t_r = V_r - V_{r-1}$ with intermediate cancellations leaving boundary terms $V_n - V_0$; (Panel B) Method of differences pyramid demonstrating first, second, and third differences to identify the polynomial degree of general term $t_n$.*


### 8.1 The General $V_n$ Principle


The $V_n$ method represents the single most important technique for evaluating non-standard summations in JEE Advanced.


**Core Axiom:**
If the general term $t_r$ can be expressed as the difference of two consecutive values of a function $V(r)$:


$$\mathbf{t_r = V_r - V_{r-1}}$$


Then the partial sum telescopes completely:


$$S_n = \sum_{r=1}^n t_r = (V_1 - V_0) + (V_2 - V_1) + (V_3 - V_2) + \dots + (V_n - V_{n-1})$$


All internal terms cancel pairwise in a cascade, leaving strictly the boundaries:


$$\mathbf{S_n = V_n - V_0}$$


*(Similarly, if $t_r = V_{r-1} - V_r$, then $S_n = V_0 - V_n$, and $S_\infty = V_0 - \lim_{n \to \infty} V_n$).*


---


### 8.2 Canonical Case 1: Products of Consecutive Linear Factors in Denominator


Consider the series:
$$t_r = \frac{1}{(a + rd)[a + (r+1)d][a + (r+2)d]\dots[a + (r+k)d]}$$


**Resolution Algorithm:**
1. Subtract the **first factor** from the **last factor** in the denominator:
   $$\Delta = [a + (r+k)d] - [a + rd] = k \cdot d = \text{Constant (independent of } r\text{)}$$
2. Express $1$ in the numerator as $\frac{[a+(r+k)d] - [a+rd]}{kd}$:
   $$t_r = \frac{1}{kd} \left[ \frac{[a+(r+k)d] - [a+rd]}{(a+rd)[a+(r+1)d]\dots[a+(r+k)d]} \right]$$
3. Split into two fractions:
   $$\mathbf{t_r = \frac{1}{kd} \left[ \frac{1}{(a+rd)\dots[a+(r+k-1)d]} - \frac{1}{[a+(r+1)d]\dots[a+(r+k)d]} \right] = V_{r-1} - V_r}$$
4. Summing from $r = 1$ to $n$:
   $$\mathbf{S_n = \frac{1}{kd} \left[ \frac{1}{(a+d)(a+2d)\dots(a+kd)} - \frac{1}{(a+(n+1)d)\dots(a+(n+k)d)} \right]}$$
   $$\mathbf{S_\infty = \frac{1}{kd \cdot (a+d)(a+2d)\dots(a+kd)}}$$


---


### 8.3 Canonical Case 2: Products of Consecutive Linear Factors in Numerator


Consider the series:
$$t_r = (a + rd)[a + (r+1)d][a + (r+2)d]\dots[a + (r+k)d]$$


**Resolution Algorithm:**
1. Introduce the **next factor** in progression $[a + (r+k+1)d]$ and the **preceding factor** $[a + (r-1)d]$.
2. The difference is:
   $$\Delta = [a + (r+k+1)d] - [a + (r-1)d] = (k + 2)d = \text{Constant}$$
3. Express $t_r$ as:
   $$\mathbf{t_r = \frac{1}{(k + 2)d} \left[ (a+rd)\dots[a+(r+k+1)d] - [a+(r-1)d](a+rd)\dots[a+(r+k)d] \right] = V_r - V_{r-1}}$$
4. Summing from $r = 1$ to $n$:
   $$\mathbf{S_n = \frac{1}{(k + 2)d} \left[ (a+d)(a+2d)\dots[a+(n+k+1)d] - a(a+d)\dots(a+kd) \right]}$$


---


## 9. Standard Finite Summation Formulas ($\Sigma$ Identities)


These five standard algebraic sums must be thoroughly internalized:


1. **Sum of First $n$ Natural Numbers:**
   $$\mathbf{\sum_{k=1}^n k = 1 + 2 + 3 + \dots + n = \frac{n(n + 1)}{2}}$$


2. **Sum of Squares of First $n$ Natural Numbers:**
   $$\mathbf{\sum_{k=1}^n k^2 = 1^2 + 2^2 + 3^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}{6}}$$


3. **Sum of Cubes of First $n$ Natural Numbers:**
   $$\mathbf{\sum_{k=1}^n k^3 = 1^3 + 2^3 + 3^3 + \dots + n^3 = \left[\frac{n(n + 1)}{2}\right]^2 = \left(\sum_{k=1}^n k\right)^2}$$


4. **Sum of Fourth Powers:**
   $$\mathbf{\sum_{k=1}^n k^4 = \frac{n(n + 1)(2n + 1)(3n^2 + 3n - 1)}{30}}$$


5. **Sum of Odd Natural Numbers:**
   $$\mathbf{\sum_{k=1}^n (2k - 1) = 1 + 3 + 5 + \dots + (2n - 1) = n^2}$$


6. **Sum of Products Taken Two at a Time:**
   $$\sum_{1 \le i < j \le n} a_i a_j = \frac{1}{2}\left[\left(\sum_{i=1}^n a_i\right)^2 - \sum_{i=1}^n a_i^2\right]$$


---


## 10. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The A.P. Common Difference Zero Trap:**
   * A constant sequence $5, 5, 5, \dots$ is **simultaneously an A.P.** (with $d = 0$) and a **G.P.** (with $r = 1$).
   * However, in most JEE questions specifying "distinct numbers" or "non-trivial A.P./G.P.", $d = 0$ and $r = 1$ are strictly disqualified! Always state $d \neq 0, r \neq 1$.


2. **The G.P. Sum Formula Multiplicity Trap:**
   * Writing $S_n = \frac{a(1-r^n)}{1-r}$ assumes $r \neq 1$. If $r = 1$, $S_n = na$.
   * In parametric equations where $r = f(\lambda)$, you **must examine $r = 1$ separately**.


3. **The Infinite G.P. Domain Constraint Trap:**
   * The formula $S_\infty = \frac{a}{1-r}$ is valid **if and only if $|r| < 1$**.
   * If a problem asks to find $x$ such that $1 + x + x^2 + \dots = S$, your final answer for $x$ must be strictly intersected with $x \in (-1, 1)$. Discard any solutions outside this domain!


4. **The Equal Terms Fallacy in A.M.-G.M. Inequality:**
   * A.M. $\ge$ G.M. achieves equality **if and only if all terms are identically equal**.
   * If a student tries to minimize $f(x) = x^2 + \frac{1}{x}$ by applying A.M.-G.M. directly:
     $$\frac{x^2 + 1/x}{2} \ge \sqrt{x}$$
     This is completely useless because the right-hand side is not constant!
   * Correct approach: Balance exponents so the variable cancels out in the product:
     $$x^2 + \frac{1}{x} = x^2 + \frac{1}{2x} + \frac{1}{2x}$$
     $$\frac{x^2 + \frac{1}{2x} + \frac{1}{2x}}{3} \ge \left(x^2 \cdot \frac{1}{2x} \cdot \frac{1}{2x}\right)^{1/3} = \left(\frac{1}{4}\right)^{1/3}$$
     Equality holds when $x^2 = \frac{1}{2x} \implies x^3 = \frac{1}{2} \implies x = 2^{-1/3}$.


5. **The Ratio of A.P. Sums Substitution Rule:**
   * When given $\frac{S_n}{S'_n} = \frac{f(n)}{g(n)}$ and finding $\frac{t_m}{t'_m}$, you must substitute **$n = 2m - 1$**, NOT $n = m$.
   * Derivation reminder: $\frac{n-1}{2} = m - 1 \implies n = 2m - 1$.