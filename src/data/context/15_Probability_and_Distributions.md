Mathematics Revision Context: Chapter 15 — Probability & Probability Distributions

________________

1. Axiomatic Foundations & Event Operations

1.1 Sample Space & Events

- Sample Space ($S$): The set of all possible outcomes of a random experiment.
- Event ($E$): Any subset of the sample space ($E \subseteq S$).
   - Simple (Elementary) Event: An event containing exactly one sample point.
   - Compound Event: An event containing two or more sample points.
   - Sure / Certain Event: $E = S \implies P(S) = 1$.
   - Impossible Event: $E = \emptyset \implies P(\emptyset) = 0$.

1.2 Event Classifications

- Mutually Exclusive (Disjoint) Events: Two events $A$ and $B$ cannot occur simultaneously: $$A \cap B = \emptyset \implies P(A \cap B) = 0$$
- Exhaustive Events: The union of events equals the entire sample space: $$\bigcup_{i=1}^n E_i = S \implies P\left(\bigcup_{i=1}^n E_i\right) = 1$$
- Independent Events: The occurrence of one event does not influence the probability of occurrence of the other: $$P(A \cap B) = P(A) \cdot P(B)$$

1.3 Addition Theorems of Probability

- For any two events $A$ and $B$: $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
   - Exactly one of $A$ or $B$ occurs: $$P(A \Delta B) = P(A \setminus B) + P(B \setminus A) = P(A) + P(B) - 2P(A \cap B) = P(A \cup B) - P(A \cap B)$$
   - Neither $A$ nor $B$ occurs (De Morgan's Law): $$P(A' \cap B') = P\big((A \cup B)'\big) = 1 - P(A \cup B)$$
- General Addition Theorem for Three Events: $$P(A \cup B \cup C) = P(A) + P(B) + P(C) - \big[P(A \cap B) + P(B \cap C) + P(C \cap A)\big] + P(A \cap B \cap C)$$

1.4 Visual Preservation: Venn Diagram of Event Operations

 Description: Venn diagram representing sample space $S$ and intersecting events $A$ and $B$, detailing the individual disjoint partitions $A \setminus B$, $B \setminus A$, the simultaneous intersection $A \cap B$, and the addition theorem boundary $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

________________

2. Conditional Probability & Independence Dynamics

2.1 Conditional Probability

- The probability of occurrence of event $A$ given that event $B$ has already occurred ($P(B) > 0$): $$P(A|B) = \frac{P(A \cap B)}{P(B)}$$
- Properties:
   1. $0 \le P(A|B) \le 1$
   2. $P(S|B) = 1$
   3. $P(A'|B) = 1 - P(A|B)$
   4. $P\big((A_1 \cup A_2)|B\big) = P(A_1|B) + P(A_2|B) - P\big((A_1 \cap A_2)|B\big)$

2.2 Multiplication Theorem of Probability

- For two events: $$P(A \cap B) = P(B) \cdot P(A|B) = P(A) \cdot P(B|A)$$
- For $n$ events $A_1, A_2, \dots, A_n$: $$P(A_1 \cap A_2 \cap \dots \cap A_n) = P(A_1) \cdot P(A_2|A_1) \cdot P(A_3|A_1 \cap A_2) \cdots P(A_n|A_1 \cap \dots \cap A_{n-1})$$

2.3 Pairwise vs. Mutual Independence

- For three events $A, B, C$:
   - Pairwise Independence: $$P(A \cap B) = P(A)P(B), \quad P(B \cap C) = P(B)P(C), \quad P(C \cap A) = P(C)P(A)$$
   - Mutual Independence requires pairwise independence AND: $$P(A \cap B \cap C) = P(A) P(B) P(C)$$
   - Crucial JEE Invariant: Pairwise independence does NOT necessarily imply mutual independence.

________________

3. Total Probability & Bayes' Theorem

3.1 Law of Total Probability

- Let ${E_1, E_2, \dots, E_n}$ form a partition of the sample space $S$ (i.e., $E_i \cap E_j = \emptyset$ for $i \ne j$, $\bigcup_{i=1}^n E_i = S$, and $P(E_i) > 0$).
- For any arbitrary event $A \subseteq S$: $$P(A) = \sum_{i=1}^n P(E_i \cap A) = \sum_{i=1}^n P(E_i) \cdot P(A|E_i)$$

3.2 Bayes’ Theorem (Inverse / Posterior Probability)

- If an event $A$ has occurred, the conditional probability that it was caused by the specific partition event $E_k$ is given by: $$P(E_k|A) = \frac{P(E_k \cap A)}{P(A)} = \frac{P(E_k) \cdot P(A|E_k)}{\sum_{i=1}^n P(E_i) \cdot P(A|E_i)}$$
   - Prior Probabilities: $P(E_1), P(E_2), \dots, P(E_n)$ (initial probabilities before experiment).
   - Likelihoods: $P(A|E_i)$ (probability of observing evidence $A$ under hypothesis $E_i$).
   - Posterior Probability: $P(E_k|A)$ (updated probability of hypothesis $E_k$ after observing evidence $A$).

3.3 Visual Preservation: Partition Tree & Bayes Formulation

 Description: Probability partition decision tree showing initial sample space branching into disjoint prior hypotheses $E_1, E_2, E_3$ with conditional paths to event $A$, illustrating the synthesis of the Law of Total Probability and Bayes inverse probability ratio.

________________

4. Random Variables & Expectation

4.1 Discrete Random Variable & Probability Mass Function (PMF)

- A random variable $X$ is a real-valued function whose domain is the sample space $S$ ($X: S \to \mathbb{R}$).
- Probability Distribution / PMF:
   - Values: $x_1, x_2, \dots, x_n$
   - Probabilities: $p_1, p_2, \dots, p_n$ where $p_i = P(X = x_i)$
   - Axiomatic Constraints: $$p_i \ge 0 \quad (\forall i), \quad \sum_{i=1}^n p_i = 1$$

4.2 Mathematical Expectation (Mean $\mu$)

- The weighted average of the values that $X$ takes: $$\mu = E[X] = \sum_{i=1}^n x_i p_i$$
- Expectation Theorems:
   - $E[c] = c$ (for constant $c$)
   - $E[aX + b] = a E[X] + b$
   - $E[X + Y] = E[X] + E[Y]$ (always holds, even if $X$ and $Y$ are dependent)
   - $E[XY] = E[X] \cdot E[Y]$ (holds if $X$ and $Y$ are independent)

4.3 Variance and Standard Deviation

- Variance ($\text{Var}(X)$ or $\sigma^2$): $$\sigma^2 = \text{Var}(X) = E\big[(X - \mu)^2\big] = E[X^2] - (E[X])^2 = \sum_{i=1}^n x_i^2 p_i - \mu^2$$
- Standard Deviation: $\sigma = \sqrt{\text{Var}(X)}$
- Linear Transformations of Variance: $$\text{Var}(aX + b) = a^2 \text{Var}(X)$$ (Note: Adding a constant $b$ shifts the mean but does not alter dispersion).

________________

5. Binomial Distribution

5.1 Bernoulli Trials

- An experiment consisting of repeated trials is a sequence of Bernoulli trials if:
   1. The number of trials $n$ is finite and fixed.
   2. Each trial has exactly two outcomes: Success ($S$) or Failure ($F$).
   3. The trials are mutually independent.
   4. The probability of success $p$ remains constant from trial to trial ($q = 1 - p$).

5.2 Binomial Distribution Formula

- The probability of obtaining exactly $r$ successes in $n$ independent Bernoulli trials: $$P(X = r) = \binom{n}{r} p^r q^{n-r} = \frac{n!}{r!(n-r)!} p^r (1-p)^{n-r} \quad (r = 0, 1, 2, \dots, n)$$
   - Expansion: $\sum_{r=0}^n P(X = r) = (q + p)^n = 1^n = 1$.

5.3 Statistical Parameters of Binomial Distribution

- Mean ($\mu$): $$\mu = E[X] = n p$$
- Variance ($\sigma^2$): $$\sigma^2 = \text{Var}(X) = n p q = n p (1 - p)$$
   - Cardinal Property: For any Binomial distribution, $\text{Variance} < \text{Mean}$ strictly (since $0 < q < 1$).
- Standard Deviation: $\sigma = \sqrt{npq}$.
- Most Probable Value (Mode):
   - Case 1: If $(n + 1)p$ is an integer $m$: The distribution is bimodal with two maximum probability points at $r = m - 1$ and $r = m$.
   - Case 2: If $(n + 1)p$ is not an integer: The distribution is unimodal with a unique peak at $r = \lfloor (n + 1)p \rfloor$ (the integral part of $(n + 1)p$).

5.4 Visual Preservation: Binomial PMF Curves

 Description: Discrete probability mass function comparison for a binomial distribution ($n = 10$) showing the symmetric bell profile when $p = 0.5$ (centered at mean $\mu = 5$) alongside the positively skewed profile when $p = 0.3$ (peaking at mode $r = 3$).

________________

6. High-Yield JEE Main Problem Archetypes & Formulas

- Archetype 1: At Least One Success Threshold

   - A fair coin/die is tossed $n$ times. Minimum tosses such that probability of getting at least one head/six exceeds a threshold $\alpha$: $$P(X \ge 1) = 1 - P(X = 0) = 1 - q^n \ge \alpha \implies q^n \le 1 - \alpha \implies n \ge \frac{\log(1 - \alpha)}{\log q}$$

- Archetype 2: Bayes' Theorem with Laboratory Diagnostics

   - Let $D$: Person has disease ($P(D) = 0.001$), $D'$: Healthy ($P(D') = 0.999$).
   - Test accuracy: $P(+|D) = 0.99$ (true positive), $P(+|D') = 0.005$ (false positive).
   - Probability that person truly has disease given positive test result: $$P(D|+) = \frac{P(D)P(+|D)}{P(D)P(+|D) + P(D')P(+|D')} = \frac{0.001 \times 0.99}{0.001 \times 0.99 + 0.999 \times 0.005} \approx \frac{0.00099}{0.005985} \approx 16.5%$$

- Archetype 3: Derangements Formula (No Letter in Correct Envelope)

   - Number of ways to place $n$ distinct letters into $n$ addressed envelopes such that none reaches its correct envelope: $$D_n = n! \left(1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \dots + \frac{(-1)^n}{n!}\right)$$
      - $D_1 = 0, \quad D_2 = 1, \quad D_3 = 2, \quad D_4 = 9, \quad D_5 = 44$.
      - As $n \to \infty$, $P(\text{complete derangement}) = \frac{D_n}{n!} \to \frac{1}{e} \approx 0.368$.

- Archetype 4: Geometrical Probability

   - Two friends agree to meet between 2:00 PM and 3:00 PM. Each will wait at most 15 minutes ($1/4$ hour).
   - Let arrival times be $x, y \in [0, 1]$. Meeting condition: $|x - y| \le \frac{1}{4}$.
   - Favorable Area $= 1^2 - (1 - 1/4)^2 = 1 - \left(\frac{3}{4}\right)^2 = 1 - \frac{9}{16} = \frac{7}{16}$. $$P(\text{Meeting}) = \frac{7}{16} \approx 43.75%$$
