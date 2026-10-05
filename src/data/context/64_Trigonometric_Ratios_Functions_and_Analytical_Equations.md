Mathematics Revision Context: Chapter 64 — Trigonometric Ratios, Functions & Analytical Equations


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/MATHS/Trigonometry/`, `1_xxsogDW.pdf`, `TrigonometryExe-1-2-3Answerkey.pdf`, and `Trigonometry_Solution_of_Exe-1-2-3__HLP.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Mathematics Trigonometry Core — Angle Measurement Systems (Sexagesimal, Centesimal, Circular Radian Systems $\frac{D}{90} = \frac{G}{100} = \frac{2R}{\pi}$, Arc Length $l = r\theta$, Sector Area $\frac{1}{2}r^2\theta$), Fundamental Pythagorean Identities ($\sin^2\theta + \cos^2\theta = 1$, $\sec^2\theta - \tan^2\theta = 1$, $\csc^2\theta - \cot^2\theta = 1$, Conjugate Reciprocal Invariants $\sec\theta \pm \tan\theta = \frac{1}{\sec\theta \mp \tan\theta}$), ASTC Quadrant System & Allied Angle Reductions ($n\frac{\pi}{2} \pm \theta$ Parity Rules), Compound Angle Algebra ($\sin(A \pm B)$, $\cos(A \pm B)$, $\tan(A \pm B)$, Product Difference Identities $\sin(A+B)\sin(A-B) = \sin^2 A - \sin^2 B = \cos^2 B - \cos^2 A$), Product-to-Sum & Sum-to-Product (C & D) Transformations, Multiple & Sub-Multiple Angle Mechanics (Double Angles $\sin 2A, \cos 2A, \tan 2A$, Triple Angles $\sin 3A, \cos 3A, \tan 3A$, Symmetric Triplet Products $\sin\theta\sin(60^\circ-\theta)\sin(60^\circ+\theta) = \frac{1}{4}\sin 3\theta$, $\cos\dots = \frac{1}{4}\cos 3\theta$, $\tan\dots = \tan 3\theta$), Exact Value Spectrum for Non-Standard Angles ($18^\circ, 36^\circ, 54^\circ, 72^\circ, 15^\circ, 75^\circ, 22.5^\circ$), Conditional Identities in a Triangle ($A+B+C = \pi$, Linear and Double Angle Symmetries $\sum \sin 2A = 4\prod \sin A$, $\sum \cos 2A = -1 - 4\prod \cos A$, Cyclic Tangent Relations $S_1 = S_3$, $\sum \tan(A/2)\tan(B/2) = 1$), Finite Trigonometric Series Summations (Sine and Cosine in A.P. of Angles, Telescoping Factorial Products $\prod \cos(2^k\theta) = \frac{\sin(2^n\theta)}{2^n\sin\theta}$), Boundedness & Extreme Values of Linear and Quadratic Trigonometric Forms ($a\cos\theta + b\sin\theta + c \in [c - \sqrt{a^2+b^2}, \; c + \sqrt{a^2+b^2}]$), Trigonometric Equations & General Solutions (Linear Families $\sin\theta = \sin\alpha \implies n\pi + (-1)^n\alpha$, $\cos\theta = \cos\alpha \implies 2n\pi \pm \alpha$, $\tan\theta = \tan\alpha \implies n\pi + \alpha$, Squared Families $\theta = n\pi \pm \alpha$, Auxiliary Angle Phase Transformation for $a\cos\theta + b\sin\theta = c$), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Angle Measurement Systems & Fundamental Identities


### 1.1 Systems of Angle Measurement


An angle represents the measure of rotation of a ray from its initial side to its terminal side about a fixed vertex. Anticlockwise rotation is defined as positive; clockwise is negative.


1. **Sexagesimal System (British / Degree Measurement):**
   * $1$ Right Angle $= 90^\circ$ (degrees).
   * $1^\circ = 60'$ (minutes of arc).
   * $1' = 60''$ (seconds of arc).


2. **Centesimal System (French / Grade Measurement):**
   * $1$ Right Angle $= 100^g$ (grades).
   * $1^g = 100'$ (centesimal minutes).
   * $1' = 100''$ (centesimal seconds).


3. **Circular System (Radian Measurement):**
   A radian is the angle subtended at the center of a circle by an arc whose length equals the radius of the circle:
   $$\mathbf{\pi \text{ radians} = 180^\circ = 200^g}$$
   $$\mathbf{1 \text{ radian} = \frac{180^\circ}{\pi} \approx 57^\circ 17' 44.8''}$$
   $$\mathbf{1^\circ = \frac{\pi}{180} \approx 0.017453 \text{ radians}}$$


4. **Universal Conversion Invariant:**
   $$\mathbf{\frac{D}{90} = \frac{G}{100} = \frac{2R}{\pi}}$$
   where $D$ is the degree measure, $G$ is the grade measure, and $R$ is the radian measure.


5. **Circular Arc & Sector Geometry:**
   For a circle of radius $r$ and central angle $\theta$ (measured **strictly in radians**):
   * **Arc Length ($l$):**
     $$\mathbf{l = r \cdot \theta}$$
   * **Area of Sector ($A$):**
     $$\mathbf{A = \frac{1}{2} r^2 \theta = \frac{1}{2} l \cdot r}$$


---


### 1.2 Fundamental Pythagorean & Reciprocal Identities


For any angle $\theta$ in the admissible domain:


1. **Primary Pythagorean Identities:**
   $$\mathbf{\sin^2\theta + \cos^2\theta = 1}$$
   $$\mathbf{1 + \tan^2\theta = \sec^2\theta \iff \sec^2\theta - \tan^2\theta = 1 \quad (\theta \neq (2n+1)\pi/2)}$$
   $$\mathbf{1 + \cot^2\theta = \csc^2\theta \iff \csc^2\theta - \cot^2\theta = 1 \quad (\theta \neq n\pi)}$$


2. **Conjugate Reciprocal Difference Identities:**
   Factorizing the difference of squares:
   $$(\sec\theta - \tan\theta)(\sec\theta + \tan\theta) = 1 \implies \mathbf{\sec\theta \pm \tan\theta = \frac{1}{\sec\theta \mp \tan\theta}}$$
   $$(\csc\theta - \cot\theta)(\csc\theta + \cot\theta) = 1 \implies \mathbf{\csc\theta \pm \cot\theta = \frac{1}{\csc\theta \mp \cot\theta}}$$
   * **JEE Problem-Solving Rule:** If given $\sec\theta + \tan\theta = k$, immediately write $\sec\theta - \tan\theta = 1/k$. Adding and subtracting isolates $\sec\theta = \frac{k^2+1}{2k}$ and $\tan\theta = \frac{k^2-1}{2k}$ without solving quadratics!


3. **Higher Power Invariants:**
   $$\mathbf{\sin^4\theta + \cos^4\theta = (\sin^2\theta + \cos^2\theta)^2 - 2\sin^2\theta\cos^2\theta = 1 - 2\sin^2\theta\cos^2\theta}$$
   $$\mathbf{\sin^6\theta + \cos^6\theta = (\sin^2\theta + \cos^2\theta)^3 - 3\sin^2\theta\cos^2\theta(\sin^2\theta+\cos^2\theta) = 1 - 3\sin^2\theta\cos^2\theta}$$


---


## 2. Allied Angles & Quadrant System (ASTC Rule)


![Unit Circle ASTC and Graphical Landscapes](/media/unit_circle_astc_and_graphical_landscapes.webp)
*Description: Two-panel foundational trigonometry reference: (Panel A) Unit circle $x^2 + y^2 = 1$ displaying quadrant sign topology via the ASTC rule (All, Sin, Tan, Cos) and coordinate projections $(\cos        heta, \sin        heta)$; (Panel B) Waveforms of the three primary functions $\sin x, \cos x,         an x$ across $[-2\pi, 2\pi]$ highlighting domains, ranges, and fundamental periods ($2\pi$ vs $\pi$).*


### 2.1 The ASTC Rule & Function Signs


The signs of the trigonometric functions are governed by the signs of the Cartesian coordinates $(x, y) = (\cos\theta, \sin\theta)$ on the unit circle:


| Quadrant | Angle Interval | Positive Functions | Negative Functions | Mnemonic |
| :--- | :---: | :--- | :--- | :--- |
| **Quadrant I** | $(0, \pi/2)$ | **All** ($\\sin, \cos, \tan, \cot, \sec, \csc > 0$) | None | **A**ll |
| **Quadrant II** | $(\pi/2, \pi)$ | **$\sin, \csc > 0$** | $\cos, \sec, \tan, \cot < 0$ | **S**ilver / **S**in |
| **Quadrant III** | $(\pi, 3\pi/2)$ | **$\tan, \cot > 0$** | $\sin, \csc, \cos, \sec < 0$ | **T**ea / **T**an |
| **Quadrant IV** | $(3\pi/2, 2\pi)$ | **$\cos, \sec > 0$** | $\sin, \csc, \tan, \cot < 0$ | **C**ups / **C**os |


---


### 2.2 General Allied Angle Reduction Algorithm


To evaluate any trigonometric ratio for an angle of the form $\left( n \cdot \frac{\pi}{2} \pm \theta \right)$ where $n \in \mathbb{Z}$:


1. **Parity of $n$ (Co-Function Transformation Rule):**
   * If $n$ is **EVEN**: The trigonometric function **remains unchanged**:
     $$\sin \to \sin, \quad \cos \to \cos, \quad \tan \to \tan$$
   * If $n$ is **ODD**: The trigonometric function **transforms into its co-function**:
     $$\sin \leftrightarrow \cos, \quad \tan \leftrightarrow \cot, \quad \sec \leftrightarrow \csc$$
2. **Sign Determination:**
   * Treat $\theta$ as an acute angle ($0 < \theta < \pi/2$).
   * Determine the quadrant in which $\left(n\frac{\pi}{2} \pm \theta\right)$ lies.
   * Attach the algebraic sign ($+$ or $-$) that the **original (untransformed) function** possesses in that quadrant according to ASTC!


**Negative Angle Parity:**
$$\mathbf{\sin(-\theta) = -\sin\theta, \quad \cos(-\theta) = \cos\theta, \quad \tan(-\theta) = -\tan\theta}$$
* $\cos\theta$ and $\sec\theta$ are **even functions**; $\sin\theta, \tan\theta, \cot\theta, \csc\theta$ are **odd functions**.


---


## 3. Compound Angle Formulas & Transformation Identities


![Compound Multiple Angles and Special Values](/media/compound_multiple_angles_and_special_values.webp)
*Description: Two-panel analytical formula graphic: (Panel A) Structured summary of fundamental compound angle additions, product-to-sum expansions, sum-to-product (C & D) formulas, and symmetric triple-angle identities; (Panel B) Exact radical value spectrum matrix for non-standard angles derived from the Golden Ratio triangle ($18^\circ, 36^\circ, 15^\circ, 22.5^\circ$).*


### 3.1 Addition and Subtraction Theorems


For any angles $A$ and $B$:


1. **Sine and Cosine Compound Expansions:**
   $$\mathbf{\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B}$$
   $$\mathbf{\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B}$$


2. **Tangent and Cotangent Compound Expansions:**
   $$\mathbf{\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}}$$
   $$\mathbf{\cot(A \pm B) = \frac{\cot A \cot B \mp 1}{\cot B \pm \cot A}}$$


3. **Compound Products of Differences:**
   $$\mathbf{\sin(A + B) \sin(A - B) = \sin^2 A - \sin^2 B = \cos^2 B - \cos^2 A}$$
   $$\mathbf{\cos(A + B) \cos(A - B) = \cos^2 A - \sin^2 B = \cos^2 B - \sin^2 A}$$


4. **Three-Angle Compound Expansion:**
   $$\mathbf{\tan(A + B + C) = \frac{S_1 - S_3}{1 - S_2} = \frac{\tan A + \tan B + \tan C - \tan A\tan B\tan C}{1 - (\tan A\tan B + \tan B\tan C + \tan C\tan A)}}$$


---


### 3.2 Product-to-Sum & Sum-to-Product (C & D) Transformations


1. **Product-to-Sum Formulas:**
   $$\mathbf{2\sin A \cos B = \sin(A + B) + \sin(A - B)}$$
   $$\mathbf{2\cos A \sin B = \sin(A + B) - \sin(A - B)}$$
   $$\mathbf{2\cos A \cos B = \cos(A + B) + \cos(A - B)}$$
   $$\mathbf{2\sin A \sin B = \cos(A - B) - \cos(A + B)}$$


2. **Sum-to-Product (C & D) Formulas:**
   $$\mathbf{\sin C + \sin D = 2\sin\left(\frac{C + D}{2}\right) \cos\left(\frac{C - D}{2}\right)}$$
   $$\mathbf{\sin C - \sin D = 2\cos\left(\frac{C + D}{2}\right) \sin\left(\frac{C - D}{2}\right)}$$
   $$\mathbf{\cos C + \cos D = 2\cos\left(\frac{C + D}{2}\right) \cos\left(\frac{C - D}{2}\right)}$$
   $$\mathbf{\cos C - \cos D = -2\sin\left(\frac{C + D}{2}\right) \sin\left(\frac{C - D}{2}\right) = 2\sin\left(\frac{C + D}{2}\right) \sin\left(\frac{D - C}{2}\right)}$$


---


## 4. Multiple & Sub-Multiple Angles


### 4.1 Double and Triple Angle Relations


1. **Double Angle Formulas ($2A$):**
   $$\mathbf{\sin 2A = 2\sin A \cos A = \frac{2\tan A}{1 + \tan^2 A}}$$
   $$\mathbf{\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A = \frac{1 - \tan^2 A}{1 + \tan^2 A}}$$
   $$\mathbf{\tan 2A = \frac{2\tan A}{1 - \tan^2 A}}$$
   * **Power-Reduction Invariants:**
     $$\mathbf{\sin^2 A = \frac{1 - \cos 2A}{2}, \quad \cos^2 A = \frac{1 + \cos 2A}{2}, \quad \tan^2 A = \frac{1 - \cos 2A}{1 + \cos 2A}}$$


2. **Triple Angle Formulas ($3A$):**
   $$\mathbf{\sin 3A = 3\sin A - 4\sin^3 A \implies \sin^3 A = \frac{3\sin A - \sin 3A}{4}}$$
   $$\mathbf{\cos 3A = 4\cos^3 A - 3\cos A \implies \cos^3 A = \frac{3\cos A + \cos 3A}{4}}$$
   $$\mathbf{\tan 3A = \frac{3\tan A - \tan^3 A}{1 - 3\tan^2 A} = \tan A \cdot \tan(60^\circ - A) \cdot \tan(60^\circ + A)}$$


---


### 4.2 Symmetrical Triplet Products ($60^\circ \pm \theta$)


These identities appear repeatedly in JEE algebra and geometry simplifications:


$$\mathbf{\sin\theta \cdot \sin(60^\circ - \theta) \cdot \sin(60^\circ + \theta) = \frac{1}{4} \sin 3\theta}$$


$$\mathbf{\cos\theta \cdot \cos(60^\circ - \theta) \cdot \cos(60^\circ + \theta) = \frac{1}{4} \cos 3\theta}$$


$$\mathbf{\tan\theta \cdot \tan(60^\circ - \theta) \cdot \tan(60^\circ + \theta) = \tan 3\theta}$$


* **Canonical Example:**
  $$\sin 20^\circ \sin 40^\circ \sin 60^\circ \sin 80^\circ = \sin 60^\circ \left[\sin 20^\circ \sin(60^\circ - 20^\circ) \sin(60^\circ + 20^\circ)\right] = \frac{\sqrt{3}}{2} \left[\frac{1}{4}\sin 60^\circ\right] = \frac{\sqrt{3}}{2} \cdot \frac{\sqrt{3}}{8} = \mathbf{\frac{3}{16}}$$


---


### 4.3 Exact Values of Non-Standard Angles


| Angle $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| :---: | :---: | :---: | :---: |
| **$15^\circ = \frac{\pi}{12}$** | $\frac{\sqrt{6} - \sqrt{2}}{4} = \frac{\sqrt{3} - 1}{2\sqrt{2}}$ | $\frac{\sqrt{6} + \sqrt{2}}{4} = \frac{\sqrt{3} + 1}{2\sqrt{2}}$ | $2 - \sqrt{3}$ |
| **$75^\circ = \frac{5\pi}{12}$** | $\frac{\sqrt{6} + \sqrt{2}}{4}$ | $\frac{\sqrt{6} - \sqrt{2}}{4}$ | $2 + \sqrt{3}$ |
| **$18^\circ = \frac{\pi}{10}$** | $\mathbf{\frac{\sqrt{5} - 1}{4}}$ | $\frac{\sqrt{10 + 2\sqrt{5}}}{4}$ | $\frac{\sqrt{5} - 1}{\sqrt{10 + 2\sqrt{5}}}$ |
| **$36^\circ = \frac{\pi}{5}$** | $\frac{\sqrt{10 - 2\sqrt{5}}}{4}$ | $\mathbf{\frac{\sqrt{5} + 1}{4}}$ | $\sqrt{5 - 2\sqrt{5}}$ |
| **$54^\circ = \frac{3\pi}{10}$** | $\frac{\sqrt{5} + 1}{4} = \cos 36^\circ$ | $\frac{\sqrt{10 - 2\sqrt{5}}}{4} = \sin 36^\circ$ | — |
| **$72^\circ = \frac{2\pi}{5}$** | $\frac{\sqrt{10 + 2\sqrt{5}}}{4} = \cos 18^\circ$ | $\frac{\sqrt{5} - 1}{4} = \sin 18^\circ$ | — |
| **$22.5^\circ = \frac{\pi}{8}$** | $\frac{\sqrt{2 - \sqrt{2}}}{2}$ | $\frac{\sqrt{2 + \sqrt{2}}}{2}$ | $\mathbf{\sqrt{2} - 1}$ |
| **$67.5^\circ = \frac{3\pi}{8}$** | $\frac{\sqrt{2 + \sqrt{2}}}{2}$ | $\frac{\sqrt{2 - \sqrt{2}}}{2}$ | $\mathbf{\sqrt{2} + 1}$ |


---


## 5. Conditional Identities in a Triangle ($A + B + C = \pi$)


When $A, B, C$ are the interior angles of a triangle ($A + B + C = \pi = 180^\circ$):


### 5.1 Linear Angle Conditional Identities


1. **Sine Sum Identity:**
   $$\mathbf{\sin 2A + \sin 2B + \sin 2C = 4 \sin A \sin B \sin C}$$
2. **Cosine Sum Identity:**
   $$\mathbf{\cos 2A + \cos 2B + \cos 2C = -1 - 4 \cos A \cos B \cos C}$$
3. **Squared Sines Identity:**
   $$\mathbf{\sin^2 A + \sin^2 B + \sin^2 C = 2 + 2 \cos A \cos B \cos C}$$
4. **Squared Cosines Identity:**
   $$\mathbf{\cos^2 A + \cos^2 B + \cos^2 C = 1 - 2 \cos A \cos B \cos C}$$


---


### 5.2 Half-Angle Conditional Identities


1. **Half-Angle Sines:**
   $$\mathbf{\sin A + \sin B + \sin C = 4 \cos\left(\frac{A}{2}\right) \cos\left(\frac{B}{2}\right) \cos\left(\frac{C}{2}\right)}$$
2. **Half-Angle Cosines:**
   $$\mathbf{\cos A + \cos B + \cos C = 1 + 4 \sin\left(\frac{A}{2}\right) \sin\left(\frac{B}{2}\right) \sin\left(\frac{C}{2}\right)}$$


---


### 5.3 Cyclic Tangent & Cotangent Invariants


1. **Full-Angle Tangent Identity ($S_1 = S_3$):**
   $$\mathbf{\tan A + \tan B + \tan C = \tan A \tan B \tan C}$$
   * **Consequence:** $\cot A \cot B + \cot B \cot C + \cot C \cot A = 1$.
2. **Half-Angle Tangent Identity ($S_2 = 1$):**
   $$\mathbf{\tan\left(\frac{A}{2}\right)\tan\left(\frac{B}{2}\right) + \tan\left(\frac{B}{2}\right)\tan\left(\frac{C}{2}\right) + \tan\left(\frac{C}{2}\right)\tan\left(\frac{A}{2}\right) = 1}$$
   * **Consequence:** $\cot(A/2) + \cot(B/2) + \cot(C/2) = \cot(A/2)\cot(B/2)\cot(C/2)$.


---


## 6. Trigonometric Series Summations


### 6.1 Sine and Cosine Series with Angles in Arithmetic Progression


Let the angles be $\alpha, \alpha + \beta, \alpha + 2\beta, \dots, \alpha + (n - 1)\beta$:


1. **Sine Series Summation:**
   $$S = \sin\alpha + \sin(\alpha + \beta) + \sin(\alpha + 2\beta) + \dots + \sin(\alpha + (n - 1)\beta)$$
   Multiply and divide by $2\sin(\beta/2)$ to create a telescoping difference:
   $$\mathbf{\sum_{k=0}^{n-1} \sin(\alpha + k\beta) = \frac{\sin\left(\frac{n\beta}{2}\right)}{\sin\left(\frac{\beta}{2}\right)} \cdot \sin\left(\alpha + \frac{(n - 1)\beta}{2}\right)}$$


2. **Cosine Series Summation:**
   $$C = \cos\alpha + \cos(\alpha + \beta) + \cos(\alpha + 2\beta) + \dots + \cos(\alpha + (n - 1)\beta)$$
   $$\mathbf{\sum_{k=0}^{n-1} \cos(\alpha + k\beta) = \frac{\sin\left(\frac{n\beta}{2}\right)}{\sin\left(\frac{\beta}{2}\right)} \cdot \cos\left(\alpha + \frac{(n - 1)\beta}{2}\right)}$$


---


### 6.2 Continued Cosine Products with Doubling Angles


Consider the product of $n$ cosine factors where each successive angle is doubled:


$$P = \cos\theta \cdot \cos(2\theta) \cdot \cos(2^2\theta) \cdot \cos(2^3\theta) \cdots \cos(2^{n-1}\theta)$$


Multiply and divide by $2\sin\theta$, then apply $\sin 2A = 2\sin A\cos A$ repeatedly in cascade:


$$\mathbf{\prod_{k=0}^{n-1} \cos(2^k \theta) = \frac{\sin(2^n \theta)}{2^n \sin\theta} \quad (\sin\theta \neq 0)}$$


---


## 7. Boundedness & Extreme Values of Trigonometric Expressions


![Trigonometric Series Extrema and General Solutions](/media/trigonometric_series_extrema_and_general_solutions.webp)
*Description: Two-panel analytical optimization and equations graphic: (Panel A) Dynamic sinusoidal range profile for $f(        heta) = a\cos        heta + b\sin        heta + c = R\cos(        heta - \phi) + c$, displaying maximum ceiling $c + \sqrt{a^2+b^2}$ and minimum floor $c - \sqrt{a^2+b^2}$; (Panel B) Matrix of canonical general solution classes for standard and squared trigonometric equations.*


### 7.1 Linear Combination: $f(\theta) = a\cos\theta + b\sin\theta + c$


Rewrite in amplitude-phase form:
Let $a = R\cos\phi$ and $b = R\sin\phi$, where $R = \sqrt{a^2 + b^2}$ and $\phi = \tan^{-1}(b/a)$:


$$f(\theta) = R(\cos\theta\cos\phi + \sin\theta\sin\phi) + c = R\cos(\theta - \phi) + c$$


Since $-1 \le \cos(\theta - \phi) \le 1$:


$$\mathbf{-\sqrt{a^2 + b^2} \le a\cos\theta + b\sin\theta \le \sqrt{a^2 + b^2}}$$


$$\mathbf{\text{Range of } f(\theta) = \left[ c - \sqrt{a^2 + b^2}, \; c + \sqrt{a^2 + b^2} \right]}$$


$$\mathbf{f_{\max} = c + \sqrt{a^2 + b^2}, \quad f_{\min} = c - \sqrt{a^2 + b^2}}$$


---


### 7.2 Quadratic Forms: $f(\theta) = a\sin^2\theta + b\sin\theta\cos\theta + c\cos^2\theta$


Use power-reduction identities to linearize to angle $2\theta$:
$$\sin^2\theta = \frac{1 - \cos 2\theta}{2}, \quad \cos^2\theta = \frac{1 + \cos 2\theta}{2}, \quad \sin\theta\cos\theta = \frac{\sin 2\theta}{2}$$


$$f(\theta) = a\left(\frac{1 - \cos 2\theta}{2}\right) + b\left(\frac{\sin 2\theta}{2}\right) + c\left(\frac{1 + \cos 2\theta}{2}\right) = \frac{a + c}{2} + \left(\frac{b}{2}\right)\sin 2\theta + \left(\frac{c - a}{2}\right)\cos 2\theta$$


This is now a standard linear form in $2\theta$, with range:


$$\mathbf{\left[ \frac{a + c}{2} - \frac{1}{2}\sqrt{b^2 + (c - a)^2}, \; \frac{a + c}{2} + \frac{1}{2}\sqrt{b^2 + (c - a)^2} \right]}$$


---


## 8. Trigonometric Equations & General Solutions


A trigonometric equation contains one or more trigonometric functions of unknown variables:
* **Principal Solutions:** Solutions lying in the primary interval $[0, 2\pi)$ (or $[-\pi, \pi)$).
* **General Solution:** The complete expression incorporating an integer parameter $n \in \mathbb{Z}$ that represents all infinitely many solutions.


### 8.1 Standard General Solution Classes


1. **Linear Sine Equation:**
   $$\mathbf{\sin\theta = \sin\alpha \implies \theta = n\pi + (-1)^n \alpha \quad (n \in \mathbb{Z})}$$
   * Special case $\sin\theta = 0 \implies \mathbf{\theta = n\pi}$.
   * Special case $\sin\theta = 1 \implies \mathbf{\theta = 2n\pi + \frac{\pi}{2} = (4n + 1)\frac{\pi}{2}}$.
   * Special case $\sin\theta = -1 \implies \mathbf{\theta = 2n\pi - \frac{\pi}{2} = (4n - 1)\frac{\pi}{2}}$.


2. **Linear Cosine Equation:**
   $$\mathbf{\cos\theta = \cos\alpha \implies \theta = 2n\pi \pm \alpha \quad (n \in \mathbb{Z})}$$
   * Special case $\cos\theta = 0 \implies \mathbf{\theta = (2n + 1)\frac{\pi}{2}}$.
   * Special case $\cos\theta = 1 \implies \mathbf{\theta = 2n\pi}$.
   * Special case $\cos\theta = -1 \implies \mathbf{\theta = (2n + 1)\pi}$.


3. **Linear Tangent Equation:**
   $$\mathbf{\tan\theta = \tan\alpha \implies \theta = n\pi + \alpha \quad (n \in \mathbb{Z})}$$
   * Special case $\tan\theta = 0 \implies \mathbf{\theta = n\pi}$.


4. **Squared Trigonometric Equations (Universal Symmetric Form):**
   For all three squared equations:
   $$\mathbf{\sin^2\theta = \sin^2\alpha \quad \text{or} \quad \cos^2\theta = \cos^2\alpha \quad \text{or} \quad \tan^2\theta = \tan^2\alpha}$$
   $$\mathbf{\implies \theta = n\pi \pm \alpha \quad (n \in \mathbb{Z})}$$


---


### 8.2 The Linear Equation $a\cos\theta + b\sin\theta = c$


To solve $a\cos\theta + b\sin\theta = c$:


1. **Real Solution Existence Condition:**
   $$\mathbf{|c| \le \sqrt{a^2 + b^2}}$$
   *(If $|c| > \sqrt{a^2 + b^2}$, the equation has NO real solutions).*
2. **Phase Transformation Algorithm:**
   * Divide the entire equation by $\sqrt{a^2 + b^2}$:
     $$\left(\frac{a}{\sqrt{a^2 + b^2}}\right)\cos\theta + \left(\frac{b}{\sqrt{a^2 + b^2}}\right)\sin\theta = \frac{c}{\sqrt{a^2 + b^2}}$$
   * Define $\cos\phi = \frac{a}{\sqrt{a^2 + b^2}}$ and $\sin\phi = \frac{b}{\sqrt{a^2 + b^2}}$, where $\phi = \tan^{-1}(b/a)$.
   * The equation becomes:
     $$\cos(\theta - \phi) = \cos\alpha, \quad \text{where } \cos\alpha = \frac{c}{\sqrt{a^2 + b^2}}$$
   * The general solution is:
     $$\mathbf{\theta - \phi = 2n\pi \pm \alpha \implies \theta = 2n\pi \pm \alpha + \phi \quad (n \in \mathbb{Z})}$$


---


## 9. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Extraneous Root / Division Fallacy:**
   * When solving $\sin 2x = \cos x$:
   * **Fatal Mistake:** Cancelling $\cos x$ directly ($2\sin x \cos x = \cos x \implies 2\sin x = 1$), which discards the entire solution set $\cos x = 0$!
   * **Correct Approach:** Factorize: $\cos x(2\sin x - 1) = 0 \implies \cos x = 0$ or $\sin x = 1/2$. Never divide by an expression that can vanish!


2. **Domain Non-Invariance in Squaring:**
   * Solving $\tan x + \sec x = \sqrt{3}$:
   * Squaring both sides introduces extraneous roots where $\sec x - \tan x = \sqrt{3}$.
   * When testing roots, always verify that $\sec x$ and $\tan x$ are well-defined ($x \neq (2n+1)\pi/2$).


3. **The Discontinuous Tangent Series Division:**
   * In evaluating $\prod_{k=0}^{n-1} \cos(2^k\theta) = \frac{\sin(2^n\theta)}{2^n\sin\theta}$, this formula is valid **if and only if $\sin\theta \neq 0$**.
   * If $\theta = m\pi$, the expression reduces to $(\pm 1)^n$, and evaluating via L'Hôpital or direct substitution is required.


4. **The General Solution Parameter Separation Trap:**
   * When solving simultaneous equations: $\sin\theta = 1/2$ and $\cos\theta = -\sqrt{3}/2$:
   * Do NOT write two separate equations with two independent parameters $n$ and $m$!
   * Find the common angle in $[0, 2\pi)$: Here $\theta$ is in Quadrant II, $\alpha = 5\pi/6$.
   * The simultaneous solution is unique modulo $2\pi$:
     $$\mathbf{\theta = 2n\pi + \frac{5\pi}{6} \quad (n \in \mathbb{Z})}$$