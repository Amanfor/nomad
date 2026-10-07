Mathematics Revision Context: Chapter 83 — Statistics: Measures of Central Tendency & Dispersion
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../MATHEMATICS/Statistics/, Statistics_j3Hg96a.pdf, Statistics_Solution_pEjedEi.pdf) Extracted into: JEE/context/ Batch: Class 11 Mathematics Final Chapter Core — Measures of Central Tendency (Arithmetic Mean $\bar{x}$, Assumed Mean $A + \frac{\sum f_i d_i}{N}$, Step-Deviation $A + h\frac{\sum f_i u_i}{N}$, Algebraic properties $\sum (x_i - \bar{x}) = 0$, Geometric Mean $G = (\prod x_i)^{1/n}$, Harmonic Mean $H = \frac{n}{\sum (1/x_i)}$, Inequality Chain $AM \ge GM \ge HM$; Median: Ungrouped positions, Continuous grouped formula $M = l + \left[\frac{N/2 - C}{f}\right]h$, Minimization invariant $\sum |x_i - M|$ is minimum; Mode: Continuous grouped formula $\text{Mode} = l + \left[\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right]h$, Karl Pearson's empirical relation $\text{Mode} = 3\ \text{Median} - 2\ \text{Mean}$ and skewness curves); Measures of Dispersion (Range, Mean Deviation about Mean $\text{MD}(\bar{x})$ and Median $\text{MD}(M)$, Variance $\sigma^2 = \frac{\sum x_i^2}{n} - (\bar{x})^2$, Standard Deviation $\sigma = \sqrt{\text{Var}(x)}$, Canonical sequence formulas: First $n$ natural numbers $\sigma^2 = \frac{n^2 - 1}{12}$, First $n$ odd numbers $\sigma^2 = \frac{n^2 - 1}{3}$, First $n$ even numbers $\sigma^2 = \frac{n^2 - 1}{3}$; Transformation Invariants under $y_i = a x_i + b$: $\bar{y} = a\bar{x} + b, \text{MD}y = |a|\text{MD}x, \sigma_y = |a|\sigma_x, \sigma_y^2 = a^2 \sigma_x^2$ with origin shift $b$ having zero effect; Combined Mean $\bar{x}{12} = \frac{n_1\bar{x}1 + n_2\bar{x}2}{n_1+n_2}$ and Combined Variance $\sigma{12}^2 = \frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1+n_2}$; Correction of incorrect observations $\Sigma x{\text{new}}$ and $\Sigma x{\text{new}}^2$; Coefficient of Variation $CV = \frac{\sigma}{\bar{x}}\times 100\%$ and consistency criteria; High-Yield JEE Traps and Shortcut Techniques). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Measures of Central Tendency & Distribution Analytics
![Statistics Central Tendency And Dispersion Framework](/media/statistics_central_tendency_and_dispersion_framework.webp) Description: Two-panel reference diagram for statistical central tendency and dispersion: (Panel A) Skewness landscapes (symmetric, positively skewed, negatively skewed), Karl Pearson's empirical relation ($\text{Mode} = 3\ \text{Median} - 2\ \text{Mean}$), and the median absolute deviation minimization theorem; (Panel B) Master transformation table for change of origin and scale ($y = ax + b$) showing that additive shift $b$ alters location measures (mean, median, mode) but leaves all dispersion metrics (range, mean deviation, variance, standard deviation) strictly invariant.
1.1 Arithmetic Mean (A.M. or $\bar{x}$)
The Arithmetic Mean represents the center of mass of a distribution of numerical observations.
1. Definitions & Computational Formulas
* Raw / Individual Observations ($x_1, x_2, \dots, x_n$): $$\mathbf{\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i}$$
* Discrete Frequency Distribution ($x_i$ with frequency $f_i$): $$\mathbf{\bar{x} = \frac{\sum_{i=1}^n f_i x_i}{N}} \quad \text{where } N = \sum_{i=1}^n f_i$$
* Assumed Mean Method ($d_i = x_i - A$, where $A$ is assumed mean): $$\mathbf{\bar{x} = A + \frac{\sum_{i=1}^n f_i d_i}{N}}$$
* Step-Deviation Method for Grouped Data ($u_i = \frac{x_i - A}{h}$, where $h$ is class width): $$\mathbf{\bar{x} = A + h \left(\frac{\sum_{i=1}^n f_i u_i}{N}\right)}$$
2. Fundamental Algebraic Properties of Mean
1. Zero Sum of Algebraic Deviations: The sum of deviations of all observations from their arithmetic mean is identically zero: $$\mathbf{\sum_{i=1}^n (x_i - \bar{x}) = 0} \quad \left(\text{or } \sum_{i=1}^n f_i (x_i - \bar{x}) = 0\right)$$
2. Least Squares Minimization Property: The sum of squared deviations $\sum (x_i - a)^2$ is strictly minimized when $a = \bar{x}$: $$\mathbf{\min_{a \in \mathbb{R}} \sum_{i=1}^n (x_i - a)^2 \iff a = \bar{x}}$$
3. Linearity of Expectation (Change of Origin and Scale): If a new variate is formed by a linear transformation $y_i = a x_i + b$: $$\mathbf{\bar{y} = a \bar{x} + b}$$
4. Combined Arithmetic Mean: If $k$ distinct sub-samples have sample sizes $n_1, n_2, \dots, n_k$ and corresponding means $\bar{x}_1, \bar{x}_2, \dots, \bar{x}k$, the pooled mean is: $$\mathbf{\bar{x}{\text{combined}} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2 + \dots + n_k \bar{x}_k}{n_1 + n_2 + \dots + n_k} = \frac{\sum n_i \bar{x}_i}{\sum n_i}}$$


________________


1.2 Geometric Mean ($G$) & Harmonic Mean ($H$)
For $n$ strictly positive real numbers $x_1, x_2, \dots, x_n > 0$:
1. Geometric Mean ($GM$)
$$G = \left(\prod_{i=1}^n x_i\right)^{1/n} = (x_1 x_2 \cdots x_n)^{1/n} \implies \log G = \frac{1}{n} \sum_{i=1}^n \log x_i$$


* For frequency data: $G = \left(x_1^{f_1} x_2^{f_2} \cdots x_n^{f_n}\right)^{1/N}$ where $N = \sum f_i$.
2. Harmonic Mean ($HM$)
$$H = \frac{n}{\sum_{i=1}^n \frac{1}{x_i}} = \frac{n}{\frac{1}{x_1} + \frac{1}{x_2} + \dots + \frac{1}{x_n}}$$


* For frequency data: $H = \frac{N}{\sum_{i=1}^n \frac{f_i}{x_i}}$.
* Physical Significance: Used to calculate average speeds over equal distances, average rates, and resistances in parallel.
3. Canonical Means Inequality Chain
For any set of positive numbers: $$\mathbf{AM \ge GM \ge HM}$$ The equality $AM = GM = HM$ holds if and only if all observations are equal ($x_1 = x_2 = \dots = x_n$).


* For two numbers $a, b > 0$: $$AM = \frac{a+b}{2}, \quad GM = \sqrt{ab}, \quad HM = \frac{2ab}{a+b}$$ $$\mathbf{GM^2 = AM \times HM}$$


________________


1.3 Median ($M$) & Positional Partition Values
The Median is the positional average representing the value of the middle variate when the observations are arranged in monotonically increasing (or decreasing) order.
1. Ungrouped Raw Observations ($n$ values)
1. Arrange $x_1, x_2, \dots, x_n$ in ascending order.
2. If $n$ is Odd: $$\mathbf{M = x_{\left(\frac{n+1}{2}\right)}}$$
3. If $n$ is Even: The median is the arithmetic mean of the two central terms: $$\mathbf{M = \frac{1}{2} \left[x_{\left(\frac{n}{2}\right)} + x_{\left(\frac{n}{2} + 1\right)}\right]}$$
2. Grouped Continuous Frequency Distribution
1. Form the cumulative frequency table ($cf$). Find total frequency $N = \sum f_i$.
2. Identify the median class: the class interval whose cumulative frequency is equal to or just greater than $\frac{N}{2}$.
3. Calculate Median using linear interpolation: $$\mathbf{M = l + \left[\frac{\frac{N}{2} - C}{f}\right] \times h}$$ Where:
   * $l =$ lower limit of the median class.
   * $N = \sum f_i =$ total frequency.
   * $C =$ cumulative frequency of the class immediately preceding the median class.
   * $f =$ simple frequency of the median class.
   * $h =$ width (class interval) of the median class.
3. Crucial Minimization Property of Median
The sum of absolute deviations of observations is strictly minimized when measured from the Median: $$\mathbf{\min_{a \in \mathbb{R}} \sum_{i=1}^n |x_i - a| \iff a = \text{Median}}$$ (Contrast: Sum of SQUARED deviations is minimized at the Mean, while sum of ABSOLUTE deviations is minimized at the Median).


________________


1.4 Mode & Skewness Analytics
The Mode is the value of the variate that occurs with the maximum frequency in the distribution.
1. Continuous Grouped Distribution
1. Identify the modal class: the class interval having the maximum frequency ($f_1$).
2. Mode formula: $$\mathbf{\text{Mode} = l + \left[\frac{f_1 - f_0}{2f_1 - f_0 - f_2}\right] \times h}$$ Where:
   * $l =$ lower boundary of the modal class.
   * $f_1 =$ frequency of the modal class.
   * $f_0 =$ frequency of the class immediately preceding the modal class.
   * $f_2 =$ frequency of the class immediately succeeding the modal class.
   * $h =$ width of the modal class.
2. Karl Pearson's Empirical Relationship
For moderately asymmetrical (unimodal) continuous frequency curves: $$\mathbf{\text{Mode} = 3\ \text{Median} - 2\ \text{Mean}}$$ $$\mathbf{\text{Mean} - \text{Mode} = 3(\text{Mean} - \text{Median})}$$
3. Distribution Skewness Classification
1. Symmetrical Distribution (Normal Curve): $$\mathbf{\text{Mean} = \text{Median} = \text{Mode}}$$
2. Positively Skewed Distribution (Right-tailed): The tail extends toward high positive values, pulling the mean to the right: $$\mathbf{\text{Mean} > \text{Median} > \text{Mode}}$$
3. Negatively Skewed Distribution (Left-tailed): The tail extends toward smaller values, pulling the mean to the left: $$\mathbf{\text{Mode} > \text{Median} > \text{Mean}}$$


________________


2. Measures of Dispersion & Variance Analytics
![Statistics Variance Formulas And Combined Groups](/media/statistics_variance_formulas_and_combined_groups.webp) Description: Two-panel reference diagram for canonical variance and combined sample analytics: (Panel A) Derivations and closed-form formulas for the variance of the first $n$ natural numbers ($\frac{n^2 - 1}{12}$), first $n$ odd numbers ($\frac{n^2 - 1}{3}$), and first $n$ even numbers ($\frac{n^2 - 1}{3}$), alongside continuous step-deviation formulas; (Panel B) Combined mean and combined variance formulation for merged distributions ($n_1, n_2$), algebraic workflow for correcting misread data points, and the Coefficient of Variation ($CV = \frac{\sigma}{\bar{x}}\times 100\%$) consistency decision rule.
2.1 Range & Mean Deviation (M.D.)
1. Range
$$R = x_{\max} - x_{\min}$$


* Coarse measure, highly sensitive to extreme outliers.
2. Mean Deviation (M.D.)
The arithmetic average of the absolute deviations taken from a measure of central tendency (usually Mean or Median).


* Mean Deviation about Mean: $$\mathbf{\text{MD}(\bar{x}) = \frac{1}{n} \sum_{i=1}^n |x_i - \bar{x}|} \quad \left(\text{or } \frac{1}{N}\sum_{i=1}^n f_i |x_i - \bar{x}|\right)$$
* Mean Deviation about Median: $$\mathbf{\text{MD}(M) = \frac{1}{n} \sum_{i=1}^n |x_i - M|} \quad \left(\text{or } \frac{1}{N}\sum_{i=1}^n f_i |x_i - M|\right)$$
* Fundamental Inequality: $$\mathbf{\text{MD}(\text{Median}) \le \text{MD}(\text{Mean}) \le \text{MD}(\text{Mode})}$$
* Coefficient of Mean Deviation: $$\text{Coefficient of MD} = \frac{\text{MD}(A)}{A} \quad \text{where } A = \bar{x} \text{ or } M$$


________________


2.2 Variance ($\sigma^2$) and Standard Deviation ($\sigma$)
Variance is the arithmetic mean of the squares of deviations of the variate from its arithmetic mean. Standard Deviation (S.D. or $\sigma$) is the positive square root of the variance:


$$\mathbf{\sigma = +\sqrt{\text{Variance}}}$$
1. Master Computational Formulas
* Raw Observations: $$\mathbf{\sigma^2 = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2 = \frac{\sum x_i^2}{n} - (\bar{x})^2 = \frac{\sum x_i^2}{n} - \left(\frac{\sum x_i}{n}\right)^2}$$
* Discrete / Grouped Frequency Distribution: $$\mathbf{\sigma^2 = \frac{\sum f_i (x_i - \bar{x})^2}{N} = \frac{\sum f_i x_i^2}{N} - (\bar{x})^2 = \frac{\sum f_i x_i^2}{N} - \left(\frac{\sum f_i x_i}{N}\right)^2}$$
* Step-Deviation Method ($u_i = \frac{x_i - A}{h}$): $$\mathbf{\sigma^2 = h^2 \left[\frac{\sum f_i u_i^2}{N} - \left(\frac{\sum f_i u_i}{N}\right)^2\right]}$$ $$\mathbf{\sigma = h \sqrt{\frac{\sum f_i u_i^2}{N} - \left(\frac{\sum f_i u_i}{N}\right)^2}}$$


________________


2.3 Closed-Form Canonical Variance Formulas (High-Yield JEE Standards)
1. First $n$ Natural Numbers: ${1, 2, 3, \dots, n}$
* Mean: $$\bar{x} = \frac{\sum_{i=1}^n i}{n} = \frac{n(n+1)/2}{n} = \mathbf{\frac{n+1}{2}}$$
* Mean of Squares: $$\frac{\sum_{i=1}^n i^2}{n} = \frac{n(n+1)(2n+1)/6}{n} = \frac{(n+1)(2n+1)}{6}$$
* Variance ($\sigma^2$): $$\sigma^2 = \frac{(n+1)(2n+1)}{6} - \frac{(n+1)^2}{4} = \frac{n+1}{12} [2(2n+1) - 3(n+1)] = \frac{n+1}{12} [4n+2 - 3n-3]$$ $$\mathbf{\sigma^2 = \frac{n^2 - 1}{12}}$$ $$\mathbf{\sigma = \sqrt{\frac{n^2 - 1}{12}}}$$
2. First $n$ Odd Natural Numbers: ${1, 3, 5, \dots, 2n - 1}$
* Mean: $$\bar{x} = \frac{\sum (2i - 1)}{n} = \frac{n^2}{n} = \mathbf{n}$$
* Variance ($\sigma^2$): $$\sigma^2 = \frac{\sum_{i=1}^n (2i - 1)^2}{n} - n^2 = \frac{n(4n^2 - 1)/3}{n} - n^2 = \frac{4n^2 - 1}{3} - n^2 = \mathbf{\frac{n^2 - 1}{3}}$$ $$\mathbf{\sigma = \sqrt{\frac{n^2 - 1}{3}}}$$
3. First $n$ Even Natural Numbers: ${2, 4, 6, \dots, 2n}$
* Mean: $$\bar{x} = \frac{2 \sum i}{n} = \mathbf{n + 1}$$
* Variance ($\sigma^2$): Since $y_i = 2 x_i$ where $x_i \in {1, 2, \dots, n}$: $$\sigma^2 = 2^2 \times \text{Var}(1, 2, \dots, n) = 4 \times \left(\frac{n^2 - 1}{12}\right) = \mathbf{\frac{n^2 - 1}{3}}$$


________________


2.4 Transformation Invariants (Change of Origin & Scale)
Let the original variate $x_i$ undergo a general linear transformation: $$\mathbf{y_i = a x_i + b}$$


$$\begin{array}{|l|c|c|l|} \hline \textbf{Statistical Quantity} & \textbf{Original } x & \textbf{Transformed } y = a x + b & \textbf{Physical Invariant} \ \hline \text{Arithmetic Mean} & \bar{x} & \bar{y} = a \bar{x} + b & \text{Depends on both scale } a \text{ and origin } b \ \text{Median} & M_x & M_y = a M_x + b & \text{Depends on both scale } a \text{ and origin } b \ \text{Mode} & \text{Mode}_x & \text{Mode}_y = a \text{Mode}_x + b & \text{Depends on both scale } a \text{ and origin } b \ \hline \text{Range} & R_x & R_y = |a| R_x & \mathbf{\text{Independent of origin } b} \ \text{Mean Deviation} & \text{MD}_x & \text{MD}_y = |a| \text{MD}_x & \mathbf{\text{Independent of origin } b} \ \text{Standard Deviation} & \sigma_x & \mathbf{\sigma_y = |a| \sigma_x} & \mathbf{\text{Independent of origin } b} \ \text{Variance} & \sigma_x^2 & \mathbf{\sigma_y^2 = a^2 \sigma_x^2} & \mathbf{\text{Independent of origin } b} \ \hline \text{Coefficient of Variation} & \frac{\sigma_x}{\bar{x}}\times 100 & \text{CV}_y = \left(\frac{|a|\sigma_x}{a\bar{x} + b}\right)\times 100 & \text{Altered non-linearly} \ \hline \end{array}$$


* Crucial Rule:
   * Shifting origin ($x_i \pm \lambda$) has zero effect on variance, standard deviation, and mean deviation: $$\mathbf{\text{Var}(x_i \pm \lambda) = \text{Var}(x_i)}$$
   * Multiplying observations by $\lambda$ multiplies variance by $\lambda^2$: $$\mathbf{\text{Var}(\lambda x_i) = \lambda^2 \text{Var}(x_i)}$$


________________


2.5 Combined Mean & Combined Variance of Two Groups
Consider two groups:


* Group 1: Size $n_1$, Mean $\bar{x}_1$, Variance $\sigma_1^2$
* Group 2: Size $n_2$, Mean $\bar{x}_2$, Variance $\sigma_2^2$
1. Combined Mean
$$\mathbf{\bar{x}_{12} = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}}$$
2. Combined Variance
Define deviations of the sub-group means from the pooled mean: $$\mathbf{d_1 = \bar{x}1 - \bar{x}{12}}, \qquad \mathbf{d_2 = \bar{x}2 - \bar{x}{12}}$$


The combined variance $\sigma_{12}^2$ is: $$\mathbf{\sigma_{12}^2 = \frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}}$$ $$\mathbf{\sigma_{12} = \sqrt{\frac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}}}$$


* Special Symmetrical Case: If both groups have the same mean ($\bar{x}_1 = \bar{x}2 \implies d_1 = d_2 = 0$): $$\mathbf{\sigma{12}^2 = \frac{n_1 \sigma_1^2 + n_2 \sigma_2^2}{n_1 + n_2}}$$


________________


2.6 Correction of Flawed Observations (Standard JEE Paradigm)
When one or more observations $w_1, w_2, \dots$ are wrongly recorded and subsequently replaced by correct values $c_1, c_2, \dots$:


1. Step 1: Compute Original Sum and Sum of Squares: $$\Sigma x_{\text{old}} = n \times \bar{x}{\text{old}}$$ $$\Sigma x{\text{old}}^2 = n \left[\sigma_{\text{old}}^2 + (\bar{x}_{\text{old}})^2\right]$$


2. Step 2: Correct the Sums: $$\mathbf{\Sigma x_{\text{new}} = \Sigma x_{\text{old}} - \sum w_i + \sum c_i}$$ $$\mathbf{\Sigma x_{\text{new}}^2 = \Sigma x_{\text{old}}^2 - \sum w_i^2 + \sum c_i^2}$$


3. Step 3: Compute Corrected Mean and Variance: $$\mathbf{\bar{x}{\text{new}} = \frac{\Sigma x{\text{new}}}{n}}$$ $$\mathbf{\sigma_{\text{new}}^2 = \frac{\Sigma x_{\text{new}}^2}{n} - (\bar{x}_{\text{new}})^2}$$


________________


2.7 Coefficient of Variation (C.V.) & Stability / Consistency
The Coefficient of Variation is the percentage ratio of standard deviation to arithmetic mean:


$$\mathbf{\text{C.V.} = \left(\frac{\sigma}{\bar{x}}\right) \times 100\%}$$


* Dimensionless, scale-free measure of relative dispersion.
* Consistency / Uniformity Criterion:
   * The series with smaller C.V. is said to be more consistent, more uniform, or more stable.
   * The series with larger C.V. exhibits greater variability or greater dispersion.
   * If two series have identical arithmetic means ($\bar{x}_1 = \bar{x}_2$), the series with smaller $\sigma$ is more consistent.


________________


3. High-Yield Problem Archetypes & JEE Traps
#
	Topic / Scenario
	Common Mistake / Trap
	Correct Statistical Principle
	1
	Shift of Origin in Variance
	Thinking $\text{Var}(x_i + 5) = \text{Var}(x_i) + 5$ or $+25$.
	Variance measures spread around the mean; shifting all points by $+5$ translates the entire data rigidly. $\mathbf{\text{Var}(x_i + 5) = \text{Var}(x_i)}$.
	2
	Negative Scaling of S.D.
	Stating that if $y_i = -3 x_i$, then $\sigma_y = -3 \sigma_x$.
	Standard deviation is strictly non-negative: $\sigma_y =
	3
	Mean Deviation Extremum
	Believing $\sum
	x_i - a
	4
	Combined Variance $d_i$ Term
	Forgetting the $d_i^2 = (\bar{x}i - \bar{x}{12})^2$ terms: writing $\sigma_{12}^2 = \frac{n_1\sigma_1^2 + n_2\sigma_2^2}{n_1+n_2}$.
	Valid ONLY when $\bar{x}_1 = \bar{x}_2$. If group means differ, the dispersion between groups ($d_i^2$) MUST be added.
	5
	Variance of Natural Numbers
	Using $\frac{n^2 + 1}{12}$ instead of $\frac{n^2 - 1}{12}$.
	For first $n$ natural numbers, $\sigma^2 = \mathbf{\frac{n^2 - 1}{12}}$. Notice for $n=1$, variance is $0$, matching $\frac{1-1}{12} = 0$.
	6
	Correcting Data Points
	Calculating new variance by correcting deviations $\Sigma(x_i - \bar{x})^2$ directly.
	Extremely prone to calculation blunders; always reconstruct raw $\Sigma x^2$ via $\Sigma x^2 = n(\sigma^2 + \bar{x}^2)$, correct $\Sigma x^2$, and compute $\sigma_{\text{new}}^2 = \frac{\Sigma x_{\text{new}}^2}{n} - \bar{x}_{\text{new}}^2$.
	7
	Median Class vs Modal Class
	Assuming median class and modal class must coincide.
	In skewed distributions, modal class and median class frequently differ.
	8
	Coefficient of Variation with Negative Mean
	Applying $CV = \frac{\sigma}{\bar{x}}\times 100$ when $\bar{x} \le 0$.
	CV is meaningful only for strictly positive ratio scales ($x_i > 0, \bar{x} > 0$).
	9
	Adding Extreme Outlier
	Believing median shifts substantially when a huge outlier is introduced.
	Median is a positional average robust to extreme values; only Mean and Variance shift drastically.
	10
	Sum of Deviations from Mode
	Assuming $\sum(x_i - \text{Mode}) = 0$.
	Only the sum of algebraic deviations from the Arithmetic Mean is identically zero: $\sum(x_i - \bar{x}) = 0$.
	

________________