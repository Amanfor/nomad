Physics Revision Context: Chapter 99 — Errors in Measurement, Significant Figures & Experimental Instruments
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Errors in Measurement and Significant Figures/, Errors_in_measurement_E.pdf) Extracted into: JEE/context/ Batch: Class 11/12 Physics Core & Practical Lab Physics — Errors in Measurement, Significant Figures & Experimental Instruments (Significant Figures: Definition, Absolute vs doubtful figures, Rules of counting, Conservation under unit conversion, Rules of rounding off; Operations with Significant Figures: Addition & subtraction decimal place rule, Multiplication & division sig fig rule; Permissible Errors: Absolute, relative, and percentage errors, Worst-case maximum permissible error propagation for sums, differences, products, quotients, and power laws $Z = \frac{A^p B^q}{C^r} \implies \frac{\Delta Z}{Z} = p\frac{\Delta A}{A} + q\frac{\Delta B}{B} + r\frac{\Delta C}{C}$; Experimental Instruments: Vernier Callipers principle $n\text{VSD} = (n-1)\text{MSD}$, Least Count $\text{LC} = \frac{1\text{MSD}}{n} = 0.01\ \text{cm}$, Positive and negative zero error corrections $\text{True} = \text{Observed} - (\text{Zero Error})$; Screw Gauge / Micrometer principle, Pitch, Least Count $\text{LC} = \frac{\text{Pitch}}{\text{CSD}} = 0.001\ \text{cm}$, Backlash error; Spherometer radius of curvature $R = \frac{l^2}{6h} + \frac{h}{2}$; Core Physics Experiments: Simple pendulum $g = 4\pi^2 L/T^2$ error optimization, Resonance tube speed of sound $v = 2f(\ell_2 - \ell_1)$ and end correction $e = \frac{\ell_2 - 3\ell_1}{2} \approx 0.3d$, Meter bridge sensitivity at central balance point ($\ell \approx 50\ \text{cm}$), Potentiometer cell internal resistance $r = R(\frac{\ell_1-\ell_2}{\ell_2})$; High-Yield JEE Traps & Mathematical Pitfalls). Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Significant Figures, Precision Arithmetic & Error Propagation
![Errors In Measurement Significant Figures And Error Propagation](/media/errors_in_measurement_significant_figures_and_error_propagation.webp) Description: Two-panel reference diagram for measurement errors and precision arithmetic: (Panel A) Summary of significant figure counting rules, rounding criteria for terminal five, and decimal versus significant digit limits in arithmetic operations; (Panel B) Absolute, relative, and percentage error formulations, worst-case maximum permissible error propagation, and power law uncertainty expansion.
1.1 Significant Figures & Precision Counting Rules
In any measured physical quantity: $$\mathbf{\text{Significant Figures} = (\text{Digits that are absolutely certain}) + (\text{First uncertain / doubtful digit})}$$ The number of significant figures directly quantifies the precision of the measuring instrument used:


* A meter scale measuring $\ell = 4.2\ \text{cm}$ has $2$ S.F. (uncertainty $\pm 0.1\ \text{cm}$).
* Vernier callipers measuring $\ell = 4.23\ \text{cm}$ has $3$ S.F. (uncertainty $\pm 0.01\ \text{cm}$).
* A screw gauge measuring $\ell = 4.234\ \text{cm}$ has $4$ S.F. (uncertainty $\pm 0.001\ \text{cm}$).
1. Universal Rules for Counting Significant Figures
1. Rule 1 (Non-Zero Digits): All non-zero digits are significant ($123.56$ has $5$ S.F.).
2. Rule 2 (Trapped Zeros): All zeros between two non-zero digits are significant ($1230.05$ has $6$ S.F.).
3. Rule 3 (Leading Zeros): In numbers less than one, all zeros after the decimal point and to the left of the first non-zero digit are insignificant ($0.000305$ has $3$ S.F.: $3, 0, 5$).
4. Rule 4 (Trailing Zeros with Decimals): Trailing zeros after a decimal point are strictly significant, as they indicate measuring precision ($3.500\ \text{cm}$ has $4$ S.F., indicating precision to $0.001\ \text{cm}$).
5. Rule 5 (Trailing Zeros in Whole Numbers): Trailing zeros in a whole number without a decimal point are ambiguous and insignificant ($85000\ \text{m}$ has $2$ S.F.).
   * To specify precision unambiguously, scientific notation must be employed: $$8.5 \times 10^4\ \text{m} \ (2\ \text{S.F.}), \qquad 8.50 \times 10^4\ \text{m} \ (3\ \text{S.F.}), \qquad 8.5000 \times 10^4\ \text{m} \ (5\ \text{S.F.} Turks)$$
6. Rule 6 (Invariance Under Change of Units): The number of significant figures is an intrinsic property of the measurement and never changes with a change of units: $$\mathbf{85\ \text{mm} = 8.5\ \text{cm} = 0.085\ \text{m} = 0.000085\ \text{km} = 8.5 \times 10^{-2}\ \text{m} \quad (\text{ALL have strictly } 2\ \text{S.F.})}$$
7. Rule 7 (Exact Numbers & Pure Constants): Pure geometrical constants ($\pi, e$) and exact counting numbers (e.g., $2$ in $2\pi r$, or $n = 100$ oscillations) possess an infinite number of significant figures.


________________


1.2 Rules of Rounding Off
1. If the insignificant digit to drop is less than $5$, the preceding digit remains unchanged ($7.82 \to 7.8$).
2. If the insignificant digit to drop is greater than $5$, the preceding digit is increased by $1$ ($7.87 \to 7.9$).
3. If the digit to drop is $5$ followed by non-zero digits, the preceding digit is increased by $1$ ($7.851 \to 7.9$).
4. If the digit to drop is $5$ followed solely by zeros or nothing:
   * If the preceding digit is EVEN, it is left unchanged ($7.850 \to \mathbf{7.8}$).
   * If the preceding digit is ODD, it is incremented by $1$ to make it even ($7.750 \to \mathbf{7.8}$).
Precision Rules in Arithmetic Operations
* Addition and Subtraction: The final calculated result can have no more decimal places than the measurement having the smallest number of decimal places: $$4.23\ \text{cm} + 2.1\ \text{cm} = 6.33\ \text{cm} \implies \mathbf{6.3\ \text{cm}} \quad (\text{limited by } 2.1\ \text{cm to } 1\ \text{decimal place})$$
* Multiplication and Division: The final calculated result can have no more significant figures than the measurement with the fewest significant figures: $$1.2 \times 3.456 = 4.1472 \implies \mathbf{4.1} \quad (\text{limited by } 1.2\ \text{ to } 2\ \text{S.F.})$$


________________


1.3 Permissible Error Propagation
Let a measured quantity $x$ have uncertainty: $x \in (x_0 - \Delta x, x_0 + \Delta x)$.


* Absolute Error: $\Delta x = |x_{\text{measured}} - x_{\text{true}}|$
* Relative (Fractional) Error: $\frac{\Delta x}{x}$
* Percentage Error: $\frac{\Delta x}{x} \times 100\%$
Master Rules for Maximum Permissible Error (Worst-Case Bounds)
1. Sum: $Z = A + B \implies \mathbf{\Delta Z = \Delta A + \Delta B}$
2. Difference: $Z = A - B \implies \mathbf{\Delta Z = \Delta A + \Delta B}$ (Crucial Invariant: Absolute errors always add up; they never cancel each other out!).
3. Product: $Z = A \cdot B \implies \mathbf{\frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta B}{B}}$
4. Quotient: $Z = \frac{A}{B} \implies \mathbf{\frac{\Delta Z}{Z} = \frac{\Delta A}{A} + \frac{\Delta B}{B}}$
5. Generalized Power Law: If a physical quantity $Z$ is related to variables $A, B, C$ by: $$Z = \frac{A^p B^q}{C^r}$$ Then the maximum fractional permissible error is given by: $$\mathbf{\left(\frac{\Delta Z}{Z}\right)_{\max} = p\left(\frac{\Delta A}{A}\right) + q\left(\frac{\Delta B}{B}\right) + r\left(\frac{\Delta C}{C}\right)}$$ All exponent powers multiply as positive absolute magnitudes!


________________


2. Experimental Instruments & Metrology
![Experimental Instruments Vernier Callipers Screw Gauge And Spherometer](/media/experimental_instruments_vernier_callipers_screw_gauge_and_spherometer.webp) Description: Two-panel reference diagram for experimental metrology and lab experiments: (Panel A) Vernier Callipers least count derivation, positive and negative zero error corrections, screw gauge pitch analytics, and backlash error elimination; (Panel B) Classical JEE laboratory setups including simple pendulum gravity timing optimization, resonance tube end correction, spherometer curvature, and meter bridge central balance point sensitivity.
2.1 Vernier Callipers Metrology
A precision instrument designed to measure internal/external lengths and cylinder depths up to $0.01\ \text{cm}$.
1. Principle & Least Count ($\text{LC}$)
A movable Vernier scale has $n$ divisions that coincide with $(n - 1)$ divisions of the fixed main scale: $$n\ \text{VSD} = (n - 1)\ \text{MSD} \implies 1\ \text{VSD} = \left(\frac{n - 1}{n}\right)\text{MSD}$$


* Least Count (Vernier Constant): $$\mathbf{\text{LC} = 1\ \text{MSD} - 1\ \text{VSD} = 1\ \text{MSD}\left(1 - \frac{n - 1}{n}\right) = \frac{1\ \text{MSD}}{n}}$$
   * Standard Metric Vernier: $1\ \text{MSD} = 1\ \text{mm}$, $n = 10\ \text{divisions} \implies \mathbf{\text{LC} = \frac{1\ \text{mm}}{10} = 0.1\ \text{mm} = 0.01\ \text{cm}}$.
2. Observed Reading & Zero Error Corrections
* Observed Reading: $$\mathbf{\text{Observed Reading} = \text{Main Scale Reading (MSR)} + (\text{VSR}_{\text{coinciding}} \times \text{LC})}$$
* Zero Error Analysis: When the movable jaw touches the fixed jaw without any specimen:
   1. Zero Error is Zero: Zero of Vernier scale coincides exactly with zero of main scale.
   2. Positive Zero Error ($e > 0$): Zero of Vernier scale lies to the RIGHT of the main scale zero: $$\mathbf{e = + k \times \text{LC}} \quad (k = \text{coinciding Vernier mark})$$
   3. Negative Zero Error ($e < 0$): Zero of Vernier scale lies to the LEFT of the main scale zero: $$\mathbf{e = -(n - k) \times \text{LC}} \quad (k = \text{coinciding Vernier mark})$$
* Fundamental Correction Law: $$\mathbf{\text{True Reading} = \text{Observed Reading} - (\text{Zero Error with Sign})}$$


________________


2.2 Screw Gauge (Micrometer) Metrology
Designed to measure wire diameters and thin sheet thicknesses up to $0.001\ \text{cm}$.
1. Pitch & Least Count
* Pitch ($p$): The linear axial distance advanced on the main pitch scale when the circular thimble is turned through one complete $360^\circ$ rotation: $$\text{Pitch} = \frac{\text{Distance moved on linear scale}}{\text{Number of complete rotations}}$$
* Least Count ($\text{LC}$): $$\mathbf{\text{LC} = \frac{\text{Pitch}}{\text{Total number of circular scale divisions (CSD)}}}$$
   * Standard Screw Gauge: $\text{Pitch} = 1\ \text{mm}$, $100\ \text{CSD} \implies \mathbf{\text{LC} = \frac{1\ \text{mm}}{100} = 0.01\ \text{mm} = 0.001\ \text{cm}}$.
2. Observed Reading, Zero Error & Backlash
* Observed Reading: $$\mathbf{\text{Observed Reading} = \text{Pitch Scale Reading (PSR)} + (\text{CSR}_{\text{coinciding}} \times \text{LC})}$$
* Zero Error: When the spindle touches the anvil using the ratchet:
   * Positive Zero Error: Zero of circular scale lies BELOW the reference baseline ($e = +k \times \text{LC}$).
   * Negative Zero Error: Zero of circular scale lies ABOVE the reference baseline ($e = -(N - k) \times \text{LC}$).
   * True Reading: $\mathbf{\text{True} = \text{Observed} - (\text{Zero Error})}$.
* Backlash Error: Play or looseness in the screw threads resulting from mechanical wear. To eliminate backlash error during measurement, the screw must always be turned in one direction only!


________________


2.3 Classical Physics Laboratory Experiments
1. Spherometer (Radius of Curvature of Spherical Surfaces)
Consists of three equidistant fixed legs forming an equilateral triangle of side $l$, and a central vertical screw of elevation/sagitta $h$: $$\mathbf{R = \frac{l^2}{6 h} + \frac{h}{2}}$$
2. Acceleration Due to Gravity ($g$) Using a Simple Pendulum
$$T = 2\pi\sqrt{\frac{L}{g}} \implies g = 4\pi^2 \frac{L}{T^2} = 4\pi^2 \frac{L}{(t / n)^2}$$ Where $t$ is the total time measured for $n$ complete oscillations.


* Fractional Error in $g$: $$\mathbf{\frac{\Delta g}{g} = \frac{\Delta L}{L} + 2\frac{\Delta T}{T} = \frac{\Delta L}{L} + 2\frac{\Delta t}{t}}$$
* Experimental Optimization: Since stopwatch least count $\Delta t$ is fixed (e.g., $0.1\ \text{s}$), measuring time for a large number of oscillations ($n = 50$ or $100$) increases total time $t$, making fractional error $\frac{\Delta t}{t}$ arbitrarily small!
3. Speed of Sound Using a Resonance Tube
A closed organ pipe formed by an air column over water:


* First resonance position: $\ell_1 + e = \frac{\lambda}{4}$
* Second resonance position: $\ell_2 + e = \frac{3\lambda}{4}$
* Subtracting eliminates the end correction $e$: $$\ell_2 - \ell_1 = \frac{\lambda}{2} \implies \lambda = 2(\ell_2 - \ell_1)$$
* Speed of Sound in Air: $$\mathbf{v = f \lambda = 2 f (\ell_2 - \ell_1)}$$
* End Correction ($e$): $$\mathbf{e = \frac{\ell_2 - 3\ell_1}{2} \approx 0.3 d \quad (d = \text{internal tube diameter})}$$
4. Meter Bridge (Wheatstone Bridge Sensitivity)
Balancing condition along a uniform $100\ \text{cm}$ wire: $$\frac{R}{S} = \frac{\ell}{100 - \ell} \implies S = R\left(\frac{100 - \ell}{\ell}\right)$$


* Maximum Sensitivity & Minimum Fractional Error: Differentiating shows that error $\Delta S / S$ is minimized when the null point falls near the exact center ($\ell \approx 50\ \text{cm}$).


________________


3. High-Yield Problem Archetypes & Structural JEE Traps
#
	Concept / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Negative Zero Error Calculation
	Reading the coinciding mark directly as the negative error: $e = -k \times \text{LC}$.
	For negative zero error, the error magnitude is $\mathbf{e = -(n - k) \times \text{LC}}$ in Vernier and $\mathbf{-(N - k) \times \text{LC}}$ in screw gauge!
	2
	Significant Figures in Unit Conversion
	Believing converting $85\ \text{mm}$ to $0.085\ \text{m}$ creates leading significant zeros.
	Leading zeros in decimals $< 1$ are never significant. S.F. is conserved under unit change ($85\ \text{mm} = 0.085\ \text{m} = 2\ \text{S.F.}$).
	3
	Error in Subtraction
	Subtracting errors when taking the difference: $\Delta(A - B) = \Delta A - \Delta B$.
	Absolute errors ALWAYS ADD UP to represent worst-case uncertainty: $\mathbf{\Delta(A - B) = \Delta A + \Delta B}$!
	4
	Pendulum Gravity Error Timing
	Treating $\Delta T = \Delta t$.
	If time for $n$ oscillations is $t$, then $T = t/n \implies \Delta T = \Delta t/n$. Hence fractional error is $\mathbf{\frac{\Delta T}{T} = \frac{\Delta t}{t}}$.
	5
	Speed of Sound in Resonance Tube
	Including end correction $e$ in the speed formula $v = 2f(\ell_2 - \ell_1)$.
	The difference $(\ell_2 - \ell_1)$ completely eliminates end correction $e$! Wavelength is strictly $\lambda = 2(\ell_2 - \ell_1)$.
	6
	Power Law Error Coefficients
	Keeping negative signs for terms in the denominator ($Z = A/B^2 \implies \Delta Z/Z = \Delta A/A - 2\Delta B/B$).
	In maximum permissible error, all power coefficients are strictly positive: $\mathbf{\frac{\Delta Z}{Z} = \frac{\Delta A}{A} + 2\frac{\Delta B}{B}}$.
	7
	Rounding off Preceding Odd vs Even
	Always rounding up when the last dropped digit is $5$.
	If dropped $5$ has only zeros after it, round up only if preceding digit is odd; leave it alone if preceding digit is even ($7.850 \to 7.8$, $7.750 \to 7.8$).
	8
	Backlash Error Prevention
	Turning the screw back and forth to hunt for the zero mark.
	Backlash error is eliminated by rotating the ratchet or thimble strictly in one continuous direction.
	9
	Meter Bridge Balance Point Precision
	Working with balance points near the ends ($\ell = 5\ \text{cm}$ or $95\ \text{cm}$).
	Near the ends, end resistance and fractional error blow up; bridge sensitivity is maximized at the center ($\ell \approx 50\ \text{cm}$).
	10
	Addition vs Multiplication Precision
	Applying significant figure counting to addition.
	In addition/subtraction, precision is dictated strictly by the number of decimal places, NOT total significant figures!
	

________________