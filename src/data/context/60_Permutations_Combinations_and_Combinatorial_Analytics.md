Mathematics Revision Context: Chapter 60 — Permutations, Combinations & Combinatorial Analytics


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Permutation _ Combination/`, `Permutation_and_Combination_33rqKjv.pdf`, and `Hints_and_Solution_Permutation_and_Combination.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Algebra Core — Fundamental Principles of Counting (Addition Rule for Disjoint Events, Multiplication Rule for Sequential Operations, Bijection & Complement Principles), Linear Permutations ($^n P_r = \frac{n!}{(n-r)!}$, Permutations with Repetition $n^r$), Adjacency Constraint Architectures (The String/Tie Method for Bound Elements, The Gap Method for Mutually Non-Adjacent Elements), Lexicographic Rank Inversion Algorithms (Dictionary Order with and without Repeated Characters), Combinations & Selections ($^n C_r = \frac{n!}{r!(n-r)!}$), Fundamental Combinatorial Identities (Symmetry $^n C_r = {}^n C_{n-r}$, Pascal's Recurrence $^n C_r + {}^n C_{r-1} = {}^{n+1} C_r$, Factor Absorption $r \cdot {}^n C_r = n \cdot {}^{n-1} C_{r-1}$, Ratio of Consecutive Coefficients, The Hockey-Stick Identity $\sum_{i=r}^n {}^i C_r = {}^{n+1} C_{r+1}$), Multiset Permutations (Alike Object Permutations $\frac{n!}{p!q!r!}$, Exhaustive Case-Based Selections from Multisets), Circular Permutations (Unoriented Linear vs. Cyclic Equivalence $(n-1)!$, Necklaces & Garlands $\frac{(n-1)!}{2}$, Circular Gap Symmetries $n$ gaps for $n$ seated elements), Division & Distribution Theory (Unequal Groups $\frac{(m+n+p)!}{m!n!p!}$, Equal Size Groups with Symmetry Factor $\frac{(km)!}{(m!)^k k!}$, Packet Division vs. Named Recipient Distribution), Identical Object Distribution (Beggar's Method / Stars and Bars, Non-Negative Solutions $^{n+r-1} C_{r-1}$, Strictly Positive Solutions $^{n-1} C_{r-1}$, Generating Function Formulations), Number Theory Divisor Analytics (Divisor Count $d(N) = \prod (a_i + 1)$, Divisor Sum $\sigma(N)$, Product of Divisors $N^{d(N)/2}$, Co-Prime Factoring $2^{k-1}$, Legendre's Highest Prime Power Formula $E_p(n!) = \sum \lfloor n/p^k \rfloor$), Principle of Inclusion-Exclusion (PIE Formula, Surjection/Onto Function Counting $\sum (-1)^k \binom{m}{k}(m-k)^n$), Derangement Dynamics (Subfactorial $D_n = n! \sum \frac{(-1)^k}{k!} = \lfloor n!/e + 1/2 \rfloor$, Recurrence Relations $D_n = (n-1)(D_{n-1}+D_{n-2})$), Geometric Combinatorics (Collinear Point Reductions, Polygon Diagonals $\frac{n(n-3)}{2}$, Circle & Line Intersections, Chessboard Rectangles & Squares, Manhattan Grid Paths $\binom{m+n}{m}$), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fundamental Principles of Counting


### 1.1 The Addition Rule (Rule of Sum)
If an operation $O_1$ can be performed in $m$ different ways and another operation $O_2$ can be performed in $n$ different ways, and the two operations are **mutually exclusive** (cannot occur simultaneously, $O_1 \cap O_2 = \emptyset$):


$$\mathbf{\text{Number of ways to perform either } O_1 \text{ OR } O_2 = m + n}$$


* **Set-Theoretic Analogue:** $|A \cup B| = |A| + |B|$ for disjoint sets ($A \cap B = \emptyset$).


---


### 1.2 The Multiplication Rule (Rule of Product)
If an operation can be decomposed into two successive, independent stages such that the first stage can be performed in $m$ different ways, and following this, the second stage can be performed in $n$ different ways:


$$\mathbf{\text{Number of ways to perform both stages in sequence } (O_1 \text{ AND } O_2) = m \times n}$$


* **Set-Theoretic Analogue:** The cardinality of the Cartesian product $|A \times B| = |A| \times |B|$.
* **Generalization:** If a compound procedure consists of $k$ consecutive steps with $n_1, n_2, \dots, n_k$ choices respectively:
  $$\mathbf{\text{Total Ways} = \prod_{i=1}^k n_i = n_1 \times n_2 \times \dots \times n_k}$$


---


### 1.3 The Complement & Bijection Principles
1. **Complement Principle (Subtraction Trick):**
   $$\mathbf{\text{Number of Favorable Outcomes} = \text{Total Unrestricted Outcomes} - \text{Number of Unfavorable Outcomes}}$$
   * Indispensable whenever problems specify constraints like *"at least one"*, *"not all"*, or *"at most $k$"*.
2. **Bijection Principle:**
   If a structure-preserving, one-to-one and onto mapping (bijection) exists between set $A$ and set $B$, then $|A| = |B|$. Complex counting problems are routinely solved by mapping difficult configurations to simple discrete strings (e.g., lattice paths mapped to binary bitstrings).


---


## 2. Linear Permutations & Arrangement Constraints


![Fundamental Counting Framework and Decision Tree](/media/pnc_fundamental_framework_and_decision_tree.webp)
*Description: Two-panel combinatorial reference: (Panel A) Comprehensive decision tree categorizing counting problems based on order relevance (Permutations vs. Combinations), item distinctness (distinct vs. identical), and structural topologies (linear, circular, multisets); (Panel B) Visual schematic comparing the String (Tie/Block) Method for bundled adjacent elements against the Gap Method for mutually separated non-adjacent elements.*


### 2.1 Permutations of Distinct Objects


A permutation is an ordered arrangement of distinct objects:


1. **Permutations of $n$ distinct objects taken $r$ at a time ($^n P_r$ or $P(n, r)$):**
   $$\mathbf{^n P_r = \frac{n!}{(n - r)!} = n(n - 1)(n - 2)\cdots(n - r + 1) \quad (0 \le r \le n)}$$
2. **Permutations of all $n$ distinct objects:**
   $$\mathbf{^n P_n = n! = n \times (n - 1) \times \dots \times 2 \times 1}$$
   * By definition: $0! = 1$. Factorials of negative integers are undefined.
3. **Permutations with Repetition Allowed:**
   If each of the $r$ vacant positions can be filled by any of the $n$ distinct objects without restriction:
   $$\mathbf{\text{Total Arrangements} = n \times n \times \dots \times n = n^r}$$


---


### 2.2 The String (Tie / Block) Method


**Use Case:** When certain specified objects **must always appear together (adjacent)** in the arrangement.


**Algorithmic Procedure:**
1. Bundle all the restricted objects into a single composite entity ("tie them together with a string").
2. Count this composite block as **one single object** alongside the remaining unrestricted objects.
3. If there are $m$ restricted objects out of $n$ total objects, the number of entities to arrange is $(n - m + 1)$.
4. Permute the $(n - m + 1)$ entities: $(n - m + 1)!$ ways.
5. Permute the $m$ objects internally within the block: $m!$ ways.


$$\mathbf{\text{Total Ways} = (n - m + 1)! \times m!}$$


---


### 2.3 The Gap Method


**Use Case:** When certain restricted objects must **NEVER appear together (no two are adjacent)**.


**Algorithmic Procedure:**
1. First, arrange all the **unrestricted objects** in a row. Let there be $k$ unrestricted objects. They can be permuted in $k!$ ways.
2. The $k$ objects create exactly $(k + 1)$ available spaces or **gaps** (including the two ends):
   $$\_ \; U_1 \; \_ \; U_2 \; \_ \; U_3 \; \_ \; \dots \; \_ \; U_k \; \_$$
3. To ensure no two restricted objects are adjacent, place at most one restricted object per gap.
4. If there are $m$ restricted objects ($m \le k + 1$), select $m$ gaps out of the $(k + 1)$ available gaps: $^{k+1} C_m$ ways.
5. Permute the $m$ restricted objects within the chosen gaps: $m!$ ways (or directly $^{k+1} P_m$).


$$\mathbf{\text{Total Ways} = k! \times {}^{k+1} P_m = k! \times \binom{k + 1}{m} \times m!}$$


---


### 2.4 Lexicographic Rank of a Word (Dictionary Order)


To find the rank of a given word when all permutations of its letters are arranged alphabetically:


**Algorithm (Without Repetition of Letters):**
1. List all distinct letters in alphabetical order.
2. For each position from left to right:
   * Count how many unused letters alphabetically precede the target letter.
   * If $k$ letters precede it, and $(n - 1)$ positions remain to the right, there are $k \times (n - 1)!$ words before the target word at this position.
   * Lock the target letter, remove it from the available pool, and repeat for the next position.
3. Sum all preceding counts and add $1$ (for the word itself):
   $$\mathbf{\text{Rank} = \sum_{i=1}^n \left(k_i \times (n - i)!\right) + 1}$$


**Algorithm (With Repetition of Letters, e.g., `INDIA`, `COCHIN`):**
* At each stage, divide the factorial of remaining positions by the factorials of frequencies of all remaining repeated letters:
  $$\mathbf{\text{Preceding Words at Step } i = k_i \times \frac{(n - i)!}{p_i! \, q_i! \, \dots}}$$


---


## 3. Combinations & Combinatorial Identities


### 3.1 Combinations of Distinct Objects


A combination is an unordered selection of objects where order of arrangement is completely ignored:


$$\mathbf{^n C_r = \binom{n}{r} = \frac{^n P_r}{r!} = \frac{n!}{r!(n - r)!} \quad (0 \le r \le n)}$$


* By definition: $^n C_0 = {}^n C_n = 1$, and $^n C_r = 0$ for $r > n$ or $r < 0$.


---


### 3.2 Canonical Combinatorial Identities


These algebraic identities are fundamental tools for simplifying binomial and combinatorial expressions in JEE:


1. **Symmetry Property:**
   $$\mathbf{^n C_r = {}^n C_{n - r}}$$
   *(Selecting $r$ objects to include is mathematically identical to selecting $(n - r)$ objects to reject).*
   * **Consequence:** If $^n C_x = {}^n C_y$, then either $x = y$ or $\mathbf{x + y = n}$.


2. **Pascal's Addition Identity:**
   $$\mathbf{^n C_r + {}^n C_{r - 1} = {}^{n + 1} C_r}$$
   *(Combinatorial Proof: Partition selections into those that include a specific item $X$ [$^n C_{r-1}$] and those that exclude $X$ [$^n C_r$]).*


3. **Index/Factor Absorption Relations:**
   $$\mathbf{^n C_r = \frac{n}{r} \, {}^{n - 1} C_{r - 1} \iff r \cdot {}^n C_r = n \cdot {}^{n - 1} C_{r - 1}}$$
   $$\mathbf{\frac{^n C_r}{r + 1} = \frac{^{n + 1} C_{r + 1}}{n + 1}}$$


4. **Ratio of Consecutive Combinations:**
   $$\mathbf{\frac{^n C_r}{^n C_{r - 1}} = \frac{n - r + 1}{r}}$$


5. **Sum of All Subsets of an $n$-Element Set:**
   $$\mathbf{\sum_{r=0}^n {}^n C_r = {}^n C_0 + {}^n C_1 + {}^n C_2 + \dots + {}^n C_n = 2^n}$$
   $$\mathbf{\sum_{r=0}^n (-1)^r \, {}^n C_r = {}^n C_0 - {}^n C_1 + {}^n C_2 - \dots + (-1)^n \, {}^n C_n = 0}$$
   $$\mathbf{^n C_0 + {}^n C_2 + {}^n C_4 + \dots = {}^n C_1 + {}^n C_3 + {}^n C_5 + \dots = 2^{n - 1}}$$


6. **The Hockey-Stick Identity:**
   $$\mathbf{\sum_{i=r}^n {}^i C_r = {}^r C_r + {}^{r+1} C_r + {}^{r+2} C_r + \dots + {}^n C_r = {}^{n + 1} C_{r + 1}}$$


7. **Vandermonde's Convolution Identity:**
   $$\mathbf{\sum_{k=0}^r \binom{m}{k}\binom{n}{r - k} = \binom{m + n}{r}}$$
   * Special case ($m = n = r$):
     $$\mathbf{\sum_{k=0}^n \left(^n C_k\right)^2 = {}^{2n} C_n = \frac{(2n)!}{(n!)^2}}$$


---


## 4. Permutations of Multisets & Constrained Selections


### 4.1 Permutations with Indistinguishable (Alike) Objects


Let there be $n$ total objects, of which $p$ objects are mutually indistinguishable of type 1, $q$ objects are mutually indistinguishable of type 2, $r$ objects are mutually indistinguishable of type 3, and the remaining $[n - (p + q + r)]$ are all distinct:


$$\mathbf{\text{Total Permutations} = \frac{n!}{p! \, q! \, r!}}$$


*(Proof: If the $p$ alike objects were made distinct, they could be permuted among themselves in $p!$ ways, multiplying the total configurations by $p!$. By division rule, dividing by $p!q!r!$ eliminates overcounting).*


---


### 4.2 Selection of $r$ Objects from a Multiset


When selecting $r$ letters from a word containing repeated characters (e.g., `MISSISSIPPI`: $\text{M} \times 1, \; \text{I} \times 4, \; \text{S} \times 4, \; \text{P} \times 2$; total $= 11$ letters):
* **Direct $^n C_r$ CANNOT be used!**
* **Strict Case Partition Algorithm:** Classify selections based on identical-character profiles:
  1. All 4 letters alike (e.g., $\text{I, I, I, I}$ or $\text{S, S, S, S}$).
  2. 3 alike and 1 distinct.
  3. 2 alike of one type and 2 alike of another type.
  4. 2 alike and 2 distinct.
  5. All 4 letters mutually distinct.
* Sum the selections across all mutually exclusive profiles to obtain total combinations, and multiply each profile by its multiset permutation factor $\frac{4!}{p!q!\dots}$ to obtain total words.


---


## 5. Circular Permutations & Garland Symmetry


### 5.1 Linear vs. Circular Arrangements


In a linear arrangement of $n$ distinct objects, the positions are absolute (first, second, third, etc.).
In a circular arrangement, there is no designated beginning or end: a cyclic shift of all elements produces an identical geometric configuration.


1. **Circular Permutations of $n$ Distinct Objects:**
   * Fix one arbitrary reference object at the head to break cyclic symmetry.
   * The remaining $(n - 1)$ objects can then be arranged relative to this reference in $(n - 1)!$ linear ways:
     $$\mathbf{\text{Circular Permutations} = \frac{n!}{n} = (n - 1)!}$$


2. **Garland / Necklace Symmetry (Clockwise vs. Anticlockwise Indistinguishability):**
   * If viewing the circle from the front or flipping it over from the back makes clockwise and anticlockwise orientations identical (as with beads on a necklace, flowers in a garland, or keys on a key ring):
     $$\mathbf{\text{Ways} = \frac{(n - 1)!}{2}}$$


3. **Circular Gap Method Axiom:**
   * When $k$ objects are arranged in a **circle**, they create **exactly $k$ circular gaps** between them (in contrast to linear arrangements which produce $k + 1$ gaps!).


---


## 6. Division and Distribution of Objects


![Stars and Bars and Multinomial Distributions](/media/stars_and_bars_and_multinomial_distributions.webp)
*Description: Two-panel distribution mechanics: (Panel A) Stars and Bars / Beggar's Method illustrating the partition of identical items into distinct bins with visual representations for non-negative integers ($x_i \ge 0$, empty bins allowed, $^{n+r-1}C_{r-1}$) and strictly positive integers ($x_i \ge 1$, each bin receives at least 1, $^{n-1}C_{r-1}$); (Panel B) Division into unlabeled groups versus distribution to distinct named persons, highlighting the division by $k!$ for equal-sized groups.*


### 6.1 Division into Groups of Unequal Sizes


The number of ways to divide $(m + n + p)$ distinct objects into three unlabeled groups of sizes $m, n, p$ where $m \neq n \neq p$:


$$\mathbf{\text{Division into Groups} = \binom{m + n + p}{m} \binom{n + p}{n} \binom{p}{p} = \frac{(m + n + p)!}{m! \, n! \, p!}}$$


* If these three packets are subsequently **distributed to 3 distinct persons**:
  $$\mathbf{\text{Distribution Ways} = \frac{(m + n + p)!}{m! \, n! \, p!} \times 3!}$$


---


### 6.2 Division into Groups of Equal Sizes (The Symmetry Factor)


When dividing $k \cdot m$ distinct objects into $k$ groups of **identical size $m$**:
* Since the groups are unlabeled, permuting the $k$ groups amongst themselves creates identical divisions.
* To eliminate overcounting, we must **divide by $k!$**:


$$\mathbf{\text{Division into } k \text{ Equal Groups of Size } m = \frac{(k \cdot m)!}{(m!)^k \cdot k!}}$$


* **Distribution to $k$ Distinct Named Persons:**
  $$\mathbf{\text{Distribution Ways} = \left[ \frac{(k \cdot m)!}{(m!)^k \cdot k!} \right] \times k! = \frac{(k \cdot m)!}{(m!)^k}}$$


**General Mixed Partition Theorem:**
If $N$ distinct objects are divided into groups such that $p$ groups have size $a$, $q$ groups have size $b$, and $r$ groups have size $c$:


$$\mathbf{\text{Number of Divisions} = \frac{N!}{(a!)^p \, p! \times (b!)^q \, q! \times (c!)^r \, r!}}$$


---


## 7. Identical Object Distribution (Stars and Bars / Beggar's Method)


### 7.1 Non-Negative Integer Solutions ($x_i \ge 0$)


To find the number of ways to distribute $n$ identical objects among $r$ distinct recipients (or the number of non-negative integer solutions to $x_1 + x_2 + \dots + x_r = n$ where $x_i \in \{0, 1, 2, \dots\}$):
* Represent the $n$ identical items as $n$ stars ($\star$).
* To divide them into $r$ groups, we need $(r - 1)$ separators or bars ($|$).
* Total symbols in a line $= n + (r - 1)$.
* Choose positions for the $(r - 1)$ bars out of $(n + r - 1)$ total positions:


$$\mathbf{\text{Number of Non-Negative Solutions} = {}^{n + r - 1} C_{r - 1} = \binom{n + r - 1}{n}}$$


---


### 7.2 Strictly Positive Integer Solutions ($x_i \ge 1$)


To distribute $n$ identical objects among $r$ distinct recipients such that **each recipient receives at least one item** ($x_i \in \{1, 2, 3, \dots\}$):
* Place the $n$ stars in a row. They generate exactly $(n - 1)$ interior gaps.
* Choose $(r - 1)$ of these gaps to place the $(r - 1)$ bars:


$$\mathbf{\text{Number of Positive Solutions} = {}^{n - 1} C_{r - 1} = \binom{n - 1}{r - 1}}$$


* **Algebraic Reduction Method:** Let $y_i = x_i - 1 \ge 0$. Then $\sum y_i = n - r$, reducing directly to $^{ (n - r) + r - 1} C_{r - 1} = {}^{n - 1} C_{r - 1}$.


---


### 7.3 General Lower-Bound Shifted Constraints


For integer equations with individual lower bounds $x_i \ge k_i$:


$$x_1 + x_2 + \dots + x_r = n \quad (x_i \ge k_i)$$


Substitute $y_i = x_i - k_i \ge 0$. The equation becomes:


$$y_1 + y_2 + \dots + y_r = n - \sum_{i=1}^r k_i = N'$$


$$\mathbf{\text{Solutions} = {}^{N' + r - 1} C_{r - 1} \quad (\text{provided } N' \ge 0)}$$


---


## 8. Number Theory Divisor Analytics & Legendre's Formula


### 8.1 Prime Factorization & Divisor Invariants


Let a natural number $N > 1$ have the unique prime factorization:


$$N = p_1^{a_1} \cdot p_2^{a_2} \cdots p_k^{a_k} \quad (p_i \text{ distinct primes}, \; a_i \in \mathbb{N})$$


1. **Total Number of Positive Divisors ($d(N)$):**
   $$\mathbf{d(N) = (a_1 + 1)(a_2 + 1)(a_3 + 1)\cdots(a_k + 1)}$$


2. **Sum of All Positive Divisors ($\sigma(N)$):**
   $$\mathbf{\sigma(N) = \left(\frac{p_1^{a_1 + 1} - 1}{p_1 - 1}\right)\left(\frac{p_2^{a_2 + 1} - 1}{p_2 - 1}\right)\dots\left(\frac{p_k^{a_k + 1} - 1}{p_k - 1}\right)}$$


3. **Product of All Positive Divisors ($P(N)$):**
   $$\mathbf{P(N) = N^{d(N)/2}}$$


4. **Resolution of $N$ as a Product of Two Factors:**
   * If $N$ is **not a perfect square**: $\mathbf{\frac{1}{2} d(N)}$ ways.
   * If $N$ is a **perfect square**: $\mathbf{\frac{1}{2}[d(N) + 1]}$ ways (including $\sqrt{N} \times \sqrt{N}$ as two identical factors), or $\mathbf{\frac{1}{2}[d(N) - 1]}$ ways as two distinct factors.


5. **Resolution of $N$ as a Product of Two Co-Prime Factors:**
   $$\mathbf{\text{Ways} = 2^{k - 1}}$$
   where $k$ is the number of **distinct prime factors** of $N$.


---


### 8.2 Legendre's Formula (Exponent of a Prime in $n!$)


The highest power of a prime number $p$ dividing $n!$ (denoted $E_p(n!)$):


$$\mathbf{E_p(n!) = \left\lfloor \frac{n}{p} \right\rfloor + \left\lfloor \frac{n}{p^2} \right\rfloor + \left\lfloor \frac{n}{p^3} \right\rfloor + \dots = \sum_{k=1}^\infty \left\lfloor \frac{n}{p^k} \right\rfloor}$$


where $\lfloor x \rfloor$ denotes the greatest integer function. The series terminates automatically once $p^k > n$.


* **Number of Trailing Zeros in $n!$:**
  Since $10 = 2 \times 5$, and factors of $2$ overwhelmingly exceed factors of $5$ in $n!$, the number of trailing zeros is determined exclusively by the exponent of $5$:
  $$\mathbf{\text{Trailing Zeros} = E_5(n!) = \left\lfloor \frac{n}{5} \right\rfloor + \left\lfloor \frac{n}{25} \right\rfloor + \left\lfloor \frac{n}{125} \right\rfloor + \dots}$$


---


## 9. Principle of Inclusion-Exclusion (PIE) & Derangements


![Derangements and Inclusion Exclusion Dynamics](/media/derangements_and_inclusion_exclusion_dynamics.webp)
*Description: Two-panel advanced combinatorics graphic: (Panel A) Derangement (subfactorial) growth curve $D_n$ plotted against asymptotic curve $n!/e$ with exact values from $n=1$ to $6$; (Panel B) Three-set Venn diagram illustrating the alternating sum structure of the Principle of Inclusion-Exclusion (PIE) and the onto function (surjection) counting formula.*


### 9.1 The Principle of Inclusion-Exclusion (PIE)


To find the cardinality of the union of finite sets $A_1, A_2, \dots, A_n$:


$$\mathbf{|A_1 \cup A_2 \cup \dots \cup A_n| = S_1 - S_2 + S_3 - S_4 + \dots + (-1)^{n-1} S_n}$$


where:
* $S_1 = \sum |A_i|$ (sum of singletons)
* $S_2 = \sum_{i < j} |A_i \cap A_j|$ (sum of pairwise intersections)
* $S_3 = \sum_{i < j < k} |A_i \cap A_j \cap A_k|$ (sum of triplet intersections)
* $S_n = |A_1 \cap A_2 \cap \dots \cap A_n|$


---


### 9.2 Number of Onto Functions (Surjections)


The number of surjective functions from a set $A$ of $n$ elements to a set $B$ of $m$ elements ($n \ge m$):


$$\mathbf{\text{Onto Functions} = \sum_{k=0}^m (-1)^k \binom{m}{k} (m - k)^n = m^n - \binom{m}{1}(m-1)^n + \binom{m}{2}(m-2)^n - \dots}$$


* **Connection to Stirling Numbers of the Second Kind ($S(n, m)$):**
  $$\mathbf{\text{Onto}(n, m) = m! \times S(n, m)}$$
  *(Distributing $n$ distinct objects into $m$ distinct bins such that no bin is empty).*


---


### 9.3 Derangements (Subfactorial $D_n$ or $!n$)


A derangement is a permutation of $n$ distinct labeled items such that **no item appears in its original assigned position** (e.g., placing $n$ letters into $n$ addressed envelopes such that every letter goes into the wrong envelope):


1. **Closed-Form Formula (via PIE):**
   $$\mathbf{D_n = n! \left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \dots + \frac{(-1)^n}{n!}\right) = n! \sum_{k=0}^n \frac{(-1)^k}{k!}}$$


2. **Nearest Integer Rounding Invariant:**
   $$\mathbf{D_n = \left\lfloor \frac{n!}{e} + \frac{1}{2} \right\rfloor}$$
   * The probability that a random permutation is a derangement rapidly approaches $1/e \approx 0.367879$ as $n \to \infty$.


3. **Recurrence Relations:**
   * **Two-Term Recurrence:** $\mathbf{D_n = (n - 1)(D_{n-1} + D_{n-2}) \quad (n \ge 3)}$
   * **First-Order Recurrence:** $\mathbf{D_n = n D_{n-1} + (-1)^n \quad (n \ge 2)}$


4. **Standard Subfactorial Reference Values:**
   * $D_1 = 0$
   * $D_2 = 1$
   * $D_3 = 2$
   * $D_4 = 9$
   * $D_5 = 44$
   * $D_6 = 265$


5. **Partial Derangements ($k$ Elements Fixed, $n - k$ Deranged):**
   $$\mathbf{\text{Ways} = \binom{n}{k} D_{n - k}}$$


---


## 10. Geometric Combinatorics & Grid Analytics


### 10.1 Point-Line-Polygon Configurations


Given $n$ coplanar points, of which exactly $m$ points are collinear ($m < n$):


1. **Number of Straight Lines:**
   $$\mathbf{L = \binom{n}{2} - \binom{m}{2} + 1}$$
   *(The $m$ collinear points lose all their internal $\binom{m}{2}$ lines, replaced by 1 single common line).*


2. **Number of Triangles:**
   $$\mathbf{T = \binom{n}{3} - \binom{m}{3}}$$
   *(Three collinear points cannot form a non-degenerate triangle).*


3. **Number of Diagonals in an $n$-Sided Convex Polygon:**
   $$\mathbf{\text{Diagonals} = \binom{n}{2} - n = \frac{n(n - 1)}{2} - n = \frac{n(n - 3)}{2}}$$


4. **Maximum Points of Intersection:**
   * $n$ straight lines (no two parallel, no three concurrent): $\mathbf{^n C_2}$.
   * $n$ circles: Each pair intersects at at most 2 points $\implies \mathbf{2 \cdot {}^n C_2}$.
   * $m$ lines and $n$ circles: $\mathbf{^m C_2 + 2 \cdot {}^n C_2 + 2mn}$.


---


### 10.2 Chessboard Rectangles & Manhattan Lattice Paths


1. **Rectangles in an $m \times n$ Grid:**
   A grid formed by $(m + 1)$ horizontal parallel lines and $(n + 1)$ vertical parallel lines:
   $$\mathbf{\text{Total Rectangles} = \binom{m + 1}{2} \binom{n + 1}{2} = \frac{m(m + 1)n(n + 1)}{4}}$$


2. **Squares in an $m \times n$ Grid ($m \le n$):**
   $$\mathbf{\text{Total Squares} = \sum_{k=1}^m (m - k + 1)(n - k + 1)}$$
   * For an $n \times n$ square chessboard:
     $$\mathbf{\text{Squares} = \sum_{k=1}^n k^2 = \frac{n(n + 1)(2n + 1)}{6}}$$


3. **Shortest Paths on a Manhattan Grid:**
   Number of shortest paths on a rectangular grid from $(0, 0)$ to $(m, n)$ moving only Right (R) and Up (U):
   * Total steps required $= m + n$ (consisting of $m$ 'R' steps and $n$ 'U' steps).
   $$\mathbf{\text{Total Paths} = \frac{(m + n)!}{m! \, n!} = \binom{m + n}{m} = \binom{m + n}{n}}$$


---


## 11. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Circular Permutation Directional Symmetry Trap:**
   * People around a table: Clockwise and anticlockwise orderings are **distinguishable** $\implies (n - 1)!$.
   * Beads on a necklace or keys on a ring: Can be physically flipped over, making clockwise and anticlockwise orderings **indistinguishable** $\implies \frac{(n - 1)!}{2}$.
   * **Trap:** If people are sitting around a table but looking outward, it is still $(n - 1)!$! Never divide by 2 unless physical reflection/flipping is permitted.


2. **The "At Least One" Fallacy in Distribution:**
   * Distributing 5 distinct prizes among 3 boys such that each gets at least one prize:
   * **Wrong Approach:** Give 1 prize to each boy ($5 \times 4 \times 3 = 60$), then distribute the remaining 2 prizes freely ($3^2 = 9$), giving $60 \times 9 = 540$. **This severely overcounts!**
   * **Correct Approach:** Use onto functions / Stirling numbers:
     $$\text{Onto}(5, 3) = 3^5 - \binom{3}{1}2^5 + \binom{3}{2}1^5 = 243 - 96 + 3 = 150$$


3. **Equal Sized Group Division Factorial Trap:**
   * Dividing 12 students into 3 teams of 4 students each:
   * Must divide by $3!$: $\frac{12!}{(4!)^3 \cdot 3!}$.
   * If the teams have designated names (Team Alpha, Team Beta, Team Gamma), then multiply back by $3!$, yielding $\frac{12!}{(4!)^3}$.


4. **Stars and Bars Variable Constraint Overlooking:**
   * In $x_1 + x_2 + x_3 = 15$ where $x_i$ represent dice faces ($1 \le x_i \le 6$):
   * Stars and bars alone **fails** because variables have upper bounds ($x_i \le 6$)!
   * Use generating functions: Coefficient of $x^{15}$ in $(x + x^2 + \dots + x^6)^3 = x^3(1 - x^6)^3(1 - x)^{-3}$, or apply Inclusion-Exclusion!