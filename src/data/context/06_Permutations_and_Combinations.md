Mathematics Revision Context: Chapter 06 — Permutations and Combinations
Source: Arihant Mathematics HandBook (JEE Main & Advanced) & JEE(main) Source Materials
Extracted into: JEE/context/
Batch Range: Chapter 06 (Pages 74–84)
Status: Verified and Formatted for JEE Main / Advanced Context Engine




________________




1. Fundamental Principles of Counting
1.1 Fundamental Principle of Multiplication (Product Rule)
* If an operation can be performed in $m$ different ways, following which a second operation can be performed in $n$ different ways, and so on, then the total number of ways of performing all the operations sequentially is: $$\text{Total Ways} = m \times n \times p \times \dots$$
* Application: When tasks are mutually dependent or must occur simultaneously / in sequence ("AND" condition).
1.2 Fundamental Principle of Addition (Sum Rule)
* If an operation can be performed in $m$ different ways and another independent operation can be performed in $n$ different ways, and both operations cannot be performed simultaneously, then either the first or the second operation can be performed in: $$\text{Total Ways} = m + n$$
* Application: When choices are mutually exclusive or represent alternative cases ("OR" condition).
1.3 Factorial Notation & Properties
For $n \in \mathbb{W}$: $$n! = \begin{cases} n \times (n-1) \times (n-2) \times \dots \times 3 \times 2 \times 1, & n \in \mathbb{N} \\ 1, & n = 0 \end{cases}$$




1. $n! = n \times (n-1)!$
2. Factorials of negative numbers and non-integer fractions are undefined in elementary algebra.
3. Legendre’s Formula (de Polignac’s Formula): The exponent of a prime number $p$ in $n!$ is: $$E_p(n!) = \left\lfloor\frac{n}{p}\right\rfloor + \left\lfloor\frac{n}{p^2}\right\rfloor + \left\lfloor\frac{n}{p^3}\right\rfloor + \dots$$ where $\lfloor x \rfloor$ denotes the greatest integer function.




________________




2. Permutations (Arrangements)
2.1 Definition & Basic Formulas
A permutation is an ordered arrangement of a given number of objects taken some or all at a time.




1. $n$ Distinct Objects taken $r$ at a time ($0 \le r \le n$) without repetition: $${}^n P_r = P(n, r) = \frac{n!}{(n-r)!} = n(n-1)(n-2)\dots(n-r+1)$$
   * Special values: ${}^n P_0 = 1$, ${}^n P_1 = n$, ${}^n P_n = n!$.
2. Permutations with Repetition Allowed: The number of permutations of $n$ distinct objects taken $r$ at a time, when each object may be repeated any number of times: $$\text{Total Permutations} = n^r$$
3. Permutations of Objects Not All Distinct (Multiset Permutations): The number of mutually distinct permutations of $n$ objects, where $p$ objects are alike of one kind, $q$ objects are alike of a second kind, $r$ objects are alike of a third kind, and the rest are distinct: $$\text{Permutations} = \frac{n!}{p! , q! , r! \dots}$$
2.2 Conditional & Restricted Linear Permutations
1. String Method / Bundle Method (Objects Always Together):
   * When $k$ specified objects must always occur together, treat these $k$ objects as a single entity.
   * Total entities to arrange $= (n - k + 1)$.
   * Internal arrangements of the $k$ objects $= k!$. $$\text{Total Arrangements} = (n - k + 1)! \times k!$$
2. Gap Method (Objects Never Together):
   * When $k$ specified objects must never occur together, first arrange the remaining $(n - k)$ objects in a row in $(n - k)!$ ways.
   * This creates $(n - k + 1)$ available gaps (including ends).
   * Place the $k$ objects into $k$ of these gaps in ${}^{n-k+1} P_k$ ways: $$\text{Total Arrangements} = (n - k)! \times {}^{n-k+1} P_k$$
3. Relative Order Unchanged:
   * If the relative order of $k$ specified objects among $n$ objects must remain invariant, they can be ordered in only $1$ way instead of $k!$: $$\text{Total Arrangements} = \frac{n!}{k!}$$
2.3 Circular Permutations
1. Distinct Orientations: The number of circular permutations of $n$ distinct objects: $$P_{\text{circular}} = (n - 1)!$$ (Fix one reference object to break circular symmetry; arrange the remaining $(n-1)$ objects linearly).
2. Indistinguishable Clockwise & Counter-Clockwise Orientations (Necklaces / Garlands): When turning the arrangement over makes clockwise and counter-clockwise orders identical: $$P_{\text{necklace}} = \frac{(n - 1)!}{2}$$
3. Circular Arrangements with Gap Method: If $m$ men and $w$ women are seated at a round table such that no two women sit together:
   * First seat the $m$ men in $(m - 1)!$ ways, creating $m$ circular gaps.
   * Choose $w$ of these gaps and arrange the women in ${}^m P_w$ ways: $$\text{Total Ways} = (m - 1)! \times {}^m P_w \quad (w \le m)$$




________________




3. Combinations (Selections)
3.1 Definition & Properties
A combination is a selection of objects considered without regard to the order of arrangement. $${}^n C_r = C(n, r) = \binom{n}{r} = \frac{n!}{r! , (n-r)!} = \frac{{}^n P_r}{r!}$$
3.2 Core Algebraic Identities
1. Symmetry Property: $${}^n C_r = {}^n C_{n-r}$$
2. Equating Subscripts: $${}^n C_x = {}^n C_y \iff x = y \quad \text{or} \quad x + y = n$$
3. Pascal’s Identity: $${}^n C_r + {}^n C_{r-1} = {}^{n+1} C_r$$
4. Ratio of Consecutive Combinations: $$\frac{{}^n C_r}{{}^n C_{r-1}} = \frac{n - r + 1}{r}$$
5. Factor Pull-Out Formulas: $${}^n C_r = \frac{n}{r} \cdot {}^{n-1} C_{r-1}$$ $$\frac{{}^n C_r}{r + 1} = \frac{{}^{n+1} C_{r+1}}{n + 1}$$
6. Vandermonde’s Identity: $$\sum_{k=0}^r \binom{m}{k} \binom{n}{r-k} = \binom{m+n}{r}$$
7. Combinations of Combinations: $$\binom{n}{m} \binom{m}{r} = \binom{n}{r} \binom{n-r}{m-r}$$
3.3 Selection from Distinct and Non-Distinct Objects
1. Selection of At Least One Object from $n$ Distinct Objects: $${}^n C_1 + {}^n C_2 + {}^n C_3 + \dots + {}^n C_n = 2^n - 1$$ (Each of the $n$ distinct objects can either be selected or rejected: $2^n$ total ways, excluding the empty selection).
2. Selection of Any Number of Objects from Non-Distinct Sets: Given $p$ alike objects of type 1, $q$ alike objects of type 2, $r$ alike objects of type 3, and $k$ distinct objects:
   * Total ways of selecting zero or more objects: $$(p + 1)(q + 1)(r + 1) \cdot 2^k$$
   * Total ways of selecting at least one object: $$(p + 1)(q + 1)(r + 1) \cdot 2^k - 1$$




________________




4. Division & Distribution into Groups
4.1 Division of Distinct Objects into Groups
1. Unequal Groups:
   * Number of ways to divide $(m + n)$ distinct objects into two unequal groups of sizes $m$ and $n$ ($m \neq n$): $$\frac{(m + n)!}{m! , n!} = {}^{m+n} C_m$$
   * Division of $(m + n + p)$ distinct objects into three unequal groups of sizes $m, n, p$: $$\frac{(m + n + p)!}{m! , n! , p!}$$
2. Equal Groups (Unlabelled / Unassigned):
   * When groups have equal sizes, permutations between identical group sizes must be divided out to avoid overcounting:
      * Division of $2m$ objects into $2$ equal groups of size $m$: $\dfrac{(2m)!}{(m!)^2 \cdot 2!}$
      * Division of $3m$ objects into $3$ equal groups of size $m$: $\dfrac{(3m)!}{(m!)^3 \cdot 3!}$
      * Division of $mn$ objects into $n$ equal groups of size $m$: $\dfrac{(mn)!}{(m!)^n \cdot n!}$
3. Distribution of Objects to Distinct People / Labelled Groups:
   * Once groups are formed, assign them to distinct recipients:
      * Distribution of $2m$ objects to $2$ distinct persons: $\dfrac{(2m)!}{(m!)^2 \cdot 2!} \times 2! = \dfrac{(2m)!}{(m!)^2}$
      * Distribution of $mn$ objects to $n$ distinct persons: $\dfrac{(mn)!}{(m!)^n \cdot n!} \times n! = \dfrac{(mn)!}{(m!)^n}$




________________




5. Distribution of Identical Objects & Generating Functions (Beggar’s Method)
5.1 Non-Negative & Positive Integer Solutions
The number of ways to distribute $n$ identical objects among $r$ distinct recipients is equivalent to finding the number of integer solutions to: $$x_1 + x_2 + x_3 + \dots + x_r = n$$




1. Non-Negative Integer Solutions ($x_i \ge 0$): $$\text{Number of Solutions} = {}^{n + r - 1} C_{r - 1}$$
2. Positive Integer Solutions ($x_i \ge 1$, Each gets at least one): Substitute $y_i = x_i - 1 \ge 0 \implies \sum y_i = n - r$: $$\text{Number of Solutions} = {}^{(n - r) + r - 1} C_{r - 1} = {}^{n - 1} C_{r - 1}$$
3. Constrained Bounds ($x_i \ge k_i$): Let $y_i = x_i - k_i \ge 0$. The equation becomes $\sum y_i = n - \sum k_i$: $$\text{Number of Solutions} = {}^{\left(n - \sum k_i\right) + r - 1} C_{r - 1}$$




________________




6. Theory of Derangements
6.1 Definition & Formula
A derangement is a permutation of $n$ distinct elements such that none of the elements appears in its original (natural) position. $$D_n = n! \left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \dots + \frac{(-1)^n}{n!}\right)$$
6.2 Standard Numerical Values & Recurrence Relations
* $D_1 = 0$
* $D_2 = 1$
* $D_3 = 2$
* $D_4 = 9$
* $D_5 = 44$
* $D_6 = 265$
* Recurrence Relations:
   1. $D_n = (n - 1)(D_{n-1} + D_{n-2})$
   2. $D_n = n D_{n-1} + (-1)^n$
* Partial Derangements: The number of ways in which exactly $r$ objects occupy their original places and the remaining $(n - r)$ objects are deranged: $$\text{Ways} = {}^n C_r \times D_{n-r}$$




________________




7. Number Theory & Divisor Applications
Let natural number $N$ have prime factorization: $$N = p_1^{a_1} \cdot p_2^{a_2} \cdot p_3^{a_3} \dots p_k^{a_k}$$ where $p_1, p_2, \dots, p_k$ are distinct prime numbers and $a_i \in \mathbb{N}$.




1. Total Number of Divisors: $$d(N) = (a_1 + 1)(a_2 + 1)(a_3 + 1)\dots(a_k + 1)$$
2. Sum of All Divisors: $$\sigma(N) = \left(\frac{p_1^{a_1 + 1} - 1}{p_1 - 1}\right) \left(\frac{p_2^{a_2 + 1} - 1}{p_2 - 1}\right) \dots \left(\frac{p_k^{a_k + 1} - 1}{p_k - 1}\right)$$
3. Resolving $N$ into Two Factors ($N = A \times B$): $$\text{Ways} = \begin{cases} \dfrac{d(N)}{2}, & \text{if } N \text{ is not a perfect square} \\ \dfrac{d(N) + 1}{2}, & \text{if } N \text{ is a perfect square} \end{cases}$$
4. Resolving $N$ into Two Coprime Factors ($\gcd(A, B) = 1$): $$\text{Ways} = 2^{k - 1}$$ where $k$ is the number of distinct prime factors of $N$.
5. Number of Ways to Express $N$ as Product of Two Ordered Pairs $(x, y)$ such that $xy = N$: $$\text{Ways} = d(N)$$




________________




8. Geometric Configurations & Combinatorics
For $n$ coplanar points in a plane:




1. Straight Lines Formed:
   * If no three points are collinear: ${}^n C_2$ lines.
   * If $m$ points are collinear ($m \ge 3$): $$\text{Lines} = {}^n C_2 - {}^m C_2 + 1$$
2. Triangles Formed:
   * If no three points are collinear: ${}^n C_3$ triangles.
   * If $m$ points are collinear: $$\text{Triangles} = {}^n C_3 - {}^m C_3$$
3. Diagonals of an $n$-Sided Convex Polygon: $$\text{Diagonals} = {}^n C_2 - n = \frac{n(n - 3)}{2}$$
4. Maximum Points of Intersection:
   * Between $n$ straight lines (no two parallel, no three concurrent): ${}^n C_2$.
   * Between $n$ circles: $2 \times {}^n C_2 = n(n - 1)$.
   * Between $m$ lines and $n$ circles: ${}^m C_2 + 2 \cdot {}^n C_2 + 2mn$.
5. Parallelograms Formed by Intersecting Parallel Lines: A set of $m$ parallel lines intersecting another set of $n$ parallel lines: $$\text{Parallelograms} = {}^m C_2 \times {}^n C_2 = \frac{m(m-1)n(n-1)}{4}$$




________________




9. Dictionary Rank of a Word
9.1 Rank Calculation Algorithm (Without Repetition)
To find the rank of a word consisting of distinct letters in alphabetical order:




1. Arrange all letters of the word in alphabetical order.
2. For each position from left to right, count how many available unused letters precede the current letter in alphabetical order.
3. Multiply this count by $(L - 1)!$, where $L$ is the number of remaining positions to the right.
4. Sum all these products and add $1$ (for the word itself): $$\text{Rank} = \sum (\text{count of smaller unused letters}) \times (\text{remaining positions})! + 1$$
9.2 Rank Calculation with Repeated Letters
* If remaining letters contain repeated letters with multiplicities $p_1, p_2, \dots$: $$\text{Contribution} = (\text{count of distinct smaller letters}) \times \frac{(\text{remaining positions})!}{p_1! , p_2! \dots}$$
* Repeat sequentially for all letters from left to right, then add $1$.