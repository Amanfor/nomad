Mathematics Revision Context: Chapter 01 — Sets and Relations
Source: Arihant Mathematics HandBook (JEE Main & Advanced)
Extracted into: JEE/context/
________________








1. Fundamentals of Sets
1.1 Definition & Notation
* Set: A well-defined collection of distinct objects.
* Notation: Usually denoted by capital letters ($A, B, C, \dots$) and elements by lowercase letters ($a, b, c, \dots$).
* Belonging: If $a$ is an element of set $A$, written as $a \in A$ (belongs to $A$). If not, $a \notin A$ (does not belong to $A$).
1.2 Standard Number Sets
* $\mathbb{N}$: Set of all natural numbers ${1, 2, 3, \dots}$
* $\mathbb{W}$: Set of all whole numbers ${0, 1, 2, 3, \dots}$
* $\mathbb{Z}$ or $\mathbb{I}$: Set of all integers ${\dots, -2, -1, 0, 1, 2, \dots}$
* $\mathbb{Z}^+ / \mathbb{Z}^-$: Set of positive / negative integers
* $\mathbb{Q}$: Set of all rational numbers $\left\{ \frac{p}{q} : p, q \in \mathbb{Z}, q \neq 0 \right\}$
* $\mathbb{Q}^+ / \mathbb{Q}^-$: Set of positive / negative rational numbers
* $\mathbb{R}$: Set of all real numbers
* $\mathbb{R}^+ / \mathbb{R}^-$: Set of positive / negative real numbers
* $\mathbb{C}$: Set of all complex numbers ${x + iy : x, y \in \mathbb{R}, i = \sqrt{-1}}$
1.3 Methods for Describing a Set
1. Roster Form (Tabular / Listing Method): Elements listed within curly braces separated by commas.
   * Example: $A = {a, e, i, o, u}$
2. Set-Builder Form (Rule Method): Elements characterized by a defining property $P(x)$.
   * Example: $A = {x : x \text{ is a vowel in the English alphabet}}$








________________








2. Types of Sets & Basic Relations
2.1 Set Classifications
* Empty / Null / Void Set ($\phi$ or ${}$): A set containing no elements.
   * Key Trap: ${\phi}$ is not an empty set; it is a singleton set containing one element ($\phi$).
* Singleton Set: Contains exactly one element (e.g., ${0}$ or ${a}$).
* Finite Set: Contains a countable, finite number of elements or no elements.
   * Cardinal Number / Order ($n(A)$): The number of distinct elements in a finite set $A$.
* Infinite Set: Contains infinitely many elements.
* Equivalent Sets: Two finite sets $A$ and $B$ are equivalent if they have the same cardinality: $$n(A) = n(B)$$
* Equal Sets ($A = B$): Every element of $A$ belongs to $B$ and every element of $B$ belongs to $A$: $$A \subseteq B \quad \text{and} \quad B \subseteq A \implies A = B$$
   * Trap: Equal sets are always equivalent, but equivalent sets are not necessarily equal.
2.2 Subsets, Supersets & Power Sets
* Subset ($A \subseteq B$): Every element of $A$ is also in $B$ ($\forall x \in A \implies x \in B$).
* Superset ($B \supseteq A$): $B$ contains all elements of $A$.
* Proper Subset ($A \subset B$): $A \subseteq B$ and $A \neq B$.
* Universal Set ($U$): A comprehensive set containing all objects under consideration.
* Comparable Sets: Two sets $A$ and $B$ are comparable if $A \subseteq B$ or $B \subseteq A$. Otherwise, they are non-comparable.
* Disjoint Sets: Sets $A$ and $B$ with no common elements: $$A \cap B = \phi$$
* Power Set ($P(A)$): The set of all subsets of $A$.
   * If $n(A) = n$, then $n(P(A)) = 2^n$.
   * If $A = \phi$, $P(\phi) = {\phi}$, so $n(P(\phi)) = 2^0 = 1$.
   * $P(A)$ is always non-empty.
   * For $A = {1, 2}$, $P(A) = {\phi, {1}, {2}, {1, 2}}$. Here $A \in P(A)$ but ${A} \notin P(A)$.
2.3 Real Intervals as Subsets of $\mathbb{R}$
* Closed Interval: $[a, b] = {x \in \mathbb{R} : a \le x \le b}$
* Open Interval: $(a, b) = {x \in \mathbb{R} : a < x < b}$
* Semi-Open / Semi-Closed Intervals:
   * $[a, b) = {x \in \mathbb{R} : a \le x < b}$
   * $(a, b] = {x \in \mathbb{R} : a < x \le b}$








________________








3. Operations on Sets & Algebraic Laws
3.1 Union of Sets ($A \cup B$)
The set of all elements belonging to $A$, $B$, or both: $$A \cup B = {x : x \in A \text{ or } x \in B}$$








* Identity Law: $A \cup \phi = A$
* Universal Law: $U \cup A = U$
* Idempotent Law: $A \cup A = A$
* Commutative Law: $A \cup B = B \cup A$
* Associative Law: $(A \cup B) \cup C = A \cup (B \cup C)$
3.2 Intersection of Sets ($A \cap B$)
The set of elements common to both $A$ and $B$: $$A \cap B = {x : x \in A \text{ and } x \in B}$$








* Identity Law: $A \cap \phi = \phi$
* Universal Law: $U \cap A = A$
* Idempotent Law: $A \cap A = A$
* Commutative Law: $A \cap B = B \cap A$
* Associative Law: $(A \cap B) \cap C = A \cap (B \cap C)$
* Distributive Laws:
   * $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ (Intersection distributes over union)
   * $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ (Union distributes over intersection)
3.3 Difference & Symmetric Difference
1. Difference ($A - B$): Elements in $A$ but not in $B$: $$A - B = {x : x \in A \text{ and } x \notin B} = A \cap B'$$
   * $A - B \subseteq A$, $B - A \subseteq B$
   * $A - B = A \iff A \cap B = \phi$
   * $(A - B) \cup B = A \cup B$
   * $(A - B) \cap B = \phi$
   * $(A - B) \cup (B - A) = (A \cup B) - (A \cap B)$
   * $A - (B \cap C) = (A - B) \cup (A - C)$
   * $A - (B \cup C) = (A - B) \cap (A - C)$
   * $A \cap (B - C) = (A \cap B) - (A \cap C)$
2. Symmetric Difference ($A \Delta B$): $$A \Delta B = (A - B) \cup (B - A) = (A \cup B) - (A \cap B)$$
   * Distributive Property: $A \cap (B \Delta C) = (A \cap B) \Delta (A \cap C)$
3.4 Complement of a Set ($A'$ or $A^c$)
Given universal set $U$, $A' = U - A = {x \in U : x \notin A}$.








* Double Complementation: $(A')' = A = U - A'$
* Complement Laws: $A \cup A' = U$, $A \cap A' = \phi$
* Boundary Laws: $\phi' = U$, $U' = \phi$
* De Morgan’s Laws: $$(A \cup B)' = A' \cap B'$$ $$(A \cap B)' = A' \cup B'$$








________________








4. Cardinality Theorems & Number of Elements
For finite sets $A, B, C$ and universal set $U$:








1. Two-Set Union: $$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$ (If $A$ and $B$ are disjoint, $n(A \cup B) = n(A) + n(B)$)








2. Differences: $$n(A - B) = n(A) - n(A \cap B)$$ $$n(B - A) = n(B) - n(A \cap B)$$








3. Symmetric Difference: $$n(A \Delta B) = n(A) + n(B) - 2n(A \cap B)$$








4. Three-Set Union: $$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(C \cap A) + n(A \cap B \cap C)$$








5. Exactly Two Sets: $$n(\text{exactly two of } A, B, C) = n(A \cap B) + n(B \cap C) + n(C \cap A) - 3n(A \cap B \cap C)$$








6. Exactly One Set: $$n(\text{exactly one of } A, B, C) = n(A) + n(B) + n(C) - 2\big[n(A \cap B) + n(B \cap C) + n(C \cap A)\big] + 3n(A \cap B \cap C)$$








7. Complements: $$n(A' \cup B') = n((A \cap B)') = n(U) - n(A \cap B)$$ $$n(A' \cap B') = n((A \cup B)') = n(U) - n(A \cup B)$$








________________








5. Cartesian Product of Sets
5.1 Ordered Pairs & Triplets
* Ordered Pair: $(a, b)$ consists of two elements with strict ordering. $$(a_1, b_1) = (a_2, b_2) \iff a_1 = a_2 \quad \text{and} \quad b_1 = b_2$$
* Cartesian Product ($A \times B$): $$A \times B = {(a, b) : a \in A \text{ and } b \in B}$$
* Ordered Triplet (3-Tuple): $$A \times B \times C = {(a, b, c) : a \in A, b \in B, c \in C}$$
5.2 Key Properties of Cartesian Product
1. $n(A \times B) = n(A) \times n(B)$
2. $A \times B = \phi \iff A = \phi \text{ or } B = \phi$
3. $A \times (B \cup C) = (A \times B) \cup (A \times C)$
4. $A \times (B \cap C) = (A \times B) \cap (A \times C)$
5. $A \times (B - C) = (A \times B) - (A \times C)$
6. $(A \times B) \cap (C \times D) = (A \cap C) \times (B \cap D)$
7. $A \times (B' \cup C')' = (A \times B) \cap (A \times C)$
8. $A \times (B' \cap C')' = (A \times B) \cup (A \times C)$
9. If $A \subseteq B$ and $C \subseteq D \implies (A \times C) \subseteq (B \times D)$
10. If $A \subseteq B \implies A \times A \subseteq (A \times B) \cap (B \times A)$
11. If $A \subseteq B \implies A \times C \subseteq B \times C$ for any set $C$
12. $A \times B = B \times A \iff A = B$
13. If $A \neq B \implies A \times B \neq B \times A$
14. If either $A$ or $B$ is infinite, $A \times B$ is infinite (provided neither is empty).
15. Common Elements Result: If $A$ and $B$ have $n$ elements in common, then $A \times B$ and $B \times A$ have $n^2$ elements in common.








________________








6. Theory of Relations
6.1 Definition & Cardinality
* Relation: A relation $R$ from set $A$ to set $B$ is any subset $R \subseteq A \times B$.
   * If $(a, b) \in R$, we write $aRb$ ($a$ is related to $b$).
   * If $R \subseteq A \times A$, $R$ is called a relation on $A$.
* Total Number of Relations:
   * If $n(A) = m$ and $n(B) = n$, then $n(A \times B) = mn$.
   * The total number of subsets of $A \times B$, and hence total possible relations from $A$ to $B$, is: $$\text{Total Relations} = 2^{mn}$$
6.2 Domain, Range & Codomain
* Domain: Set of all first coordinates in $R$: $$\text{Domain}(R) = {a \in A : (a, b) \in R}$$
* Range: Set of all second coordinates in $R$: $$\text{Range}(R) = {b \in B : (a, b) \in R} \subseteq B$$
* Codomain: The entire destination set $B$.
6.3 Types of Relations on Set $A$
1. Empty / Void Relation: $\phi \subseteq A \times A$.
2. Universal Relation: $A \times A \subseteq A \times A$.
3. Identity Relation ($I_A$): $I_A = {(a, a) : a \in A}$.
4. Reflexive Relation: $$\forall a \in A, \quad (a, a) \in R$$
   * Total Reflexive Relations on set with $n$ elements: $$N_{\text{reflexive}} = 2^{n(n-1)} = 2^{n^2 - n}$$
5. Symmetric Relation: $$\forall a, b \in A, \quad (a, b) \in R \implies (b, a) \in R \quad (aRb \implies bRa)$$
6. Transitive Relation: $$\forall a, b, c \in A, \quad (a, b) \in R \text{ and } (b, c) \in R \implies (a, c) \in R$$
7. Equivalence Relation: A relation $R$ on $A$ that is simultaneously:
   * Reflexive
   * Symmetric
   * Transitive
8. Equivalence Classes ($[a]$):
   * For an equivalence relation $R$ on $A$ and $a \in A$: $$[a] = {x \in A : (x, a) \in R}$$
   * Properties: Any two equivalence classes are either identical or disjoint. Their union equals $A$.
9. Inverse Relation ($R^{-1}$): $$R^{-1} = {(b, a) : (a, b) \in R}$$
   * $\text{Domain}(R^{-1}) = \text{Range}(R)$
   * $\text{Range}(R^{-1}) = \text{Domain}(R)$
10. Composition of Relations ($S \circ R$):
   * Let $R \subseteq A \times B$ and $S \subseteq B \times C$.
   * The composite relation $S \circ R \subseteq A \times C$ is: $$(a, c) \in S \circ R \iff \exists b \in B \text{ such that } (a, b) \in R \text{ and } (b, c) \in S$$
   * In general, $R \circ S \neq S \circ R$.
   * Reversal Rule: $(S \circ R)^{-1} = R^{-1} \circ S^{-1}$.
6.4 Key Algebraic Results on Equivalence Relations
1. If $R$ and $S$ are two equivalence relations on $A$, then their intersection $R \cap S$ is always an equivalence relation on $A$.
2. The union $R \cup S$ of two equivalence relations is not necessarily an equivalence relation.
3. If $R$ is an equivalence relation on $A$, its inverse $R^{-1}$ is always an equivalence relation on $A$.