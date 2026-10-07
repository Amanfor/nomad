Physics Revision Context: Chapter 81 — Errors in Measurement, Significant Figures & Measuring Instruments
Source: Resonance Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../PHYSICS/Errors in measurement/, Errors_in_measurement_E.pdf) Extracted into: JEE/context/ Batch: Class 11 Physics Final Chapter Core — Significant Figures (Conservation across unit conversions, Scientific notation, Exact numbers vs. Measured quantities), Arithmetic Operations with SF (Addition/Subtraction decimal rule, Multiplication/Division SF rule, Round-to-even scientific rounding), Classification of Errors (Systematic, Instrumental, Zero Errors, Random, Statistical averaging), Permissible Error & Mathematical Propagation (Linear sum $\Delta f = \Delta x + \Delta y$, Power-law product $\frac{\Delta f}{f} = a\frac{\Delta x}{x} + b\frac{\Delta y}{y} + c\frac{\Delta z}{z}$, General multivariate differential form $\Delta f_{\max} = \sum |\frac{\partial f}{\partial x_i}|\Delta x_i$, Finite differences for large percentage errors), Experimental Instruments (Vernier Callipers: Principle $N\ \text{VSD} = (N-1)\ \text{MSD}$, Least Count $LC = \frac{\text{MSD}}{N}$, Extended Vernier $N\ \text{VSD} = (2N-1)\ \text{MSD}$, Positive & Negative Zero Errors, Master Reading Formula; Micrometer Screw Gauge: Pitch, Circular divisions, Least Count $LC = \frac{\text{Pitch}}{\text{CSD}}$, Positive & Negative Zero Errors, Backlash play; Spherometer: Radius of curvature $R = \frac{l^2}{6h} + \frac{h}{2}$), Canonical JEE Experiments ($g$ by Simple Pendulum, Searle's Young's Modulus apparatus, Resonance Tube acoustics and end correction, Meter Bridge wire resistivity), and High-Yield Problem Traps. Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Measuring Instruments & Zero Errors
![Errors Measurement Vernier And Screw Gauge](/media/errors_measurement_vernier_and_screw_gauge.webp) Description: Two-panel reference diagram for laboratory measuring instruments: (Panel A) Vernier Callipers detailing the coincidence principle, least count derivation ($LC = 1\ \text{MSD} - 1\ \text{VSD} = \frac{\text{MSD}}{N}$), positive vs. negative zero error alignment, and the master true reading formula; (Panel B) Micrometer Screw Gauge and Spherometer detailing pitch, circular scale divisions, circular scale zero errors, backlash error prevention, and spherometer curvature geometry.
1.1 Vernier Callipers
The Vernier Calliper is a precision instrument designed to measure internal dimensions, external dimensions, and depths of objects with an accuracy typically of $0.1\ \text{mm}$ ($0.01\ \text{cm}$) or $0.02\ \text{mm}$.
1. Principle & Least Count (Vernier Constant)
A Vernier scale consists of a primary fixed Main Scale with graduations of magnitude $1\ \text{MSD}$ and a movable Vernier Scale containing $N$ divisions that span the length of $(N - 1)$ main scale divisions.


$$\mathbf{N\ \text{VSD} = (N - 1)\ \text{MSD}}$$


$$1\ \text{VSD} = \left(\frac{N - 1}{N}\right) \text{MSD}$$


The Least Count (LC) (also called the Vernier Constant, VC) is the minimum length that can be measured directly, defined as the difference between one main scale division and one vernier scale division:


$$\mathbf{\text{Least Count (LC)} = 1\ \text{MSD} - 1\ \text{VSD} = 1\ \text{MSD} - \left(\frac{N - 1}{N}\right)\text{MSD} = \frac{1\ \text{MSD}}{N}}$$


* Standard Metric Calliper: $$1\ \text{MSD} = 1\ \text{mm}, \quad N = 10\ \text{divisions}$$ $$\mathbf{\text{LC} = \frac{1\ \text{mm}}{10} = 0.1\ \text{mm} = 0.01\ \text{cm}}$$


* Extended Vernier (Non-Standard / JEE Trap): If $N$ vernier scale divisions coincide with $(2N - 1)$ main scale divisions: $$N\ \text{VSD} = (2N - 1)\ \text{MSD} \implies 1\ \text{VSD} = \left(\frac{2N - 1}{N}\right)\text{MSD} = \left(2 - \frac{1}{N}\right)\text{MSD}$$ Here, each VSD is slightly smaller than $2\ \text{MSD}$. The least count is: $$\mathbf{\text{LC} = 2\ \text{MSD} - 1\ \text{VSD} = 2\ \text{MSD} - \left(2 - \frac{1}{N}\right)\text{MSD} = \frac{1\ \text{MSD}}{N}}$$
2. Master Reading Formula & Zero Errors
When the jaws of the calliper are closed in contact without any object:


1. Zero Error is Nil: The zero mark of the vernier scale coincides exactly with the zero mark of the main scale. $$\text{Zero Error} = 0$$


2. Positive Zero Error ($+e$): The zero mark of the vernier scale lies to the right of the zero mark of the main scale. The instrument registers a positive length even when closed. If the $n^{\text{th}}$ vernier division coincides with a main scale mark: $$\mathbf{e = + (n \times \text{LC})}$$


3. Negative Zero Error ($-e$): The zero mark of the vernier scale lies to the left of the zero mark of the main scale. The instrument under-registers. If the $n^{\text{th}}$ vernier division coincides with a main scale mark: $$\mathbf{e = - (N - n) \times \text{LC}}$$ (Crucial Warning: Do NOT multiply $n \times \text{LC}$ for negative zero error. You must take the backwards count from the end of the vernier scale, $(N - n) \times \text{LC}$).


$$\mathbf{\text{Observed Reading} = \text{Main Scale Reading (MSR)} + [n \times \text{LC}]}$$


$$\mathbf{\text{True Corrected Reading} = \text{Observed Reading} - (\text{Zero Error})}$$


* For positive zero error ($+e$): $\text{True} = \text{Observed} - e$
* For negative zero error ($-e$): $\text{True} = \text{Observed} - (-|e|) = \text{Observed} + |e|$


________________


1.2 Micrometer Screw Gauge
The screw gauge utilizes the principle of a screw and nut to convert rotational displacement of a circular thimble into fine linear axial motion along the main barrel.
1. Pitch & Least Count
* Pitch of the Screw: The linear axial distance advanced along the main graduated barrel by the spindle when the circular cap/thimble is given one complete rotation ($360^\circ$): $$\mathbf{\text{Pitch} = \frac{\text{Distance advanced along linear main scale}}{\text{Total number of full rotations completed}}}$$


* Least Count (LC): The axial distance moved by the spindle when the circular thimble is turned through exactly one circular scale division (CSD): $$\mathbf{\text{Least Count (LC)} = \frac{\text{Pitch}}{\text{Total number of divisions on circular scale}}}$$


* Standard Laboratory Configurations:


   * Standard 1: $\text{Pitch} = 1\ \text{mm}$, Circular divisions $= 100 \implies \mathbf{\text{LC} = \frac{1\ \text{mm}}{100} = 0.01\ \text{mm} = 10\ \mu\text{m} = 0.001\ \text{cm}}$.
   * Standard 2: $\text{Pitch} = 0.5\ \text{mm}$, Circular divisions $= 50 \implies \mathbf{\text{LC} = \frac{0.5\ \text{mm}}{50} = 0.01\ \text{mm}}$.
2. Zero Errors of Screw Gauge
When the studs (anvil and spindle) touch each other:


1. Zero Error is Nil: The zero of the circular scale lies exactly on the reference (baseline) of the main scale.
2. Positive Zero Error ($+e$): The zero mark of the circular scale lies below the reference baseline (it has already rotated past the reference line). If the $n^{\text{th}}$ circular division coincides with the baseline: $$\mathbf{e = + (n \times \text{LC})}$$
3. Negative Zero Error ($-e$): The zero mark of the circular scale lies above the reference baseline (it has not yet reached the baseline). If the $n^{\text{th}}$ circular division coincides with the baseline (where total divisions $= N$): $$\mathbf{e = - (N - n) \times \text{LC}}$$


$$\mathbf{\text{Total Reading} = \text{Linear Main Scale Reading (MSR)} + [\text{Circular Scale Reading (CSR)} \times \text{LC}] - (\text{Zero Error})}$$
3. Backlash Error (Play Error)
Due to thread wear, mechanical friction, or loose fitting of the screw inside the nut, changing the direction of rotation does not immediately cause linear axial movement of the spindle.


* Remedy: Always turn the thimble in only one continuous direction during any measurement sequence. Never reverse the turn while taking a reading.
* Ratchet Function: Always rotate using the friction ratchet until 3 gentle clicks are heard; this ensures uniform pressure without deforming thin wires.


________________


1.3 Spherometer
A spherometer is used to measure the thickness of thin plates or the radius of curvature $R$ of spherical surfaces (lenses and curved mirrors).


* It has three fixed outer legs forming an equilateral triangle of side length $l$, and a central screw leg that advances vertically through the centroid of the triangle.
* Sagitta ($h$): The vertical height difference between the flat plane (formed by the tips of the three fixed outer legs) and the curved spherical apex reached by the central leg.
* By spherical geometry, if a sphere of radius $R$ is sliced by the plane of the three legs at distance $r = \frac{l}{\sqrt{3}}$ from the center: $$(2R - h)h = r^2 = \left(\frac{l}{\sqrt{3}}\right)^2 = \frac{l^2}{3}$$ $$2Rh - h^2 = \frac{l^2}{3} \implies 2Rh = \frac{l^2}{3} + h^2$$ $$\mathbf{R = \frac{l^2}{6h} + \frac{h}{2}}$$ Where:
   * $l =$ mean distance between any two fixed outer legs.
   * $h =$ height or depth measured by the spherometer screw ($h = \text{MSR} + \text{CSR} \times \text{LC}$).


________________


2. Significant Figures & Scientific Rounding-Off
![Errors Propagation And Significant Figures](/media/errors_propagation_and_significant_figures.webp) Description: Two-panel reference diagram for error analysis and significant figures: (Panel A) Decision framework for counting significant figures across non-zero digits, sandwich zeros, leading zeros, and trailing zeros; operational rules for addition, subtraction, multiplication, and division; and the round-to-even scientific rounding convention; (Panel B) Master matrix of error propagation (linear sum for additions/subtractions, power product rule for multiplication/division) and experimental error formulations for the Simple Pendulum, Wire Resistivity, Resonance Tube, and Searle's Apparatus.
2.1 Definition & Conservation of Significant Figures
In any scientific measurement, Significant Figures (SF) represent the digits that are known reliably plus the first uncertain (doubtful) digit:


$$\mathbf{\text{Significant Figures} = \text{All Absolutely Reliable Digits} + \text{First Doubtful Digit}}$$
1. Fundamental Rules of Counting Significant Figures
1. Rule 1 (All non-zero digits): All non-zero digits are significant.


   * $123.56 \implies 5\ \text{SF}$
   * $4.2 \implies 2\ \text{SF}$


2. Rule 2 (Sandwich zeros): All zeros occurring between two non-zero digits are significant, regardless of decimal placement.


   * $1230.05 \implies 6\ \text{SF}$
   * $40.02 \implies 4\ \text{SF}$


3. Rule 3 (Leading zeros): In numbers less than 1, all zeros to the right of the decimal point and to the left of the first non-zero digit are NOT significant. They serve merely as place-holders that depend on the chosen unit.


   * $0.00418 \implies 3\ \text{SF}$ (digits: $4, 1, 8$)
   * $0.000305 \implies 3\ \text{SF}$ (digits: $3, 0, 5$)


4. Rule 4 (Trailing zeros with decimal): All zeros to the right of the decimal point and to the right of a non-zero digit are significant. They communicate the sensitivity and least count of the instrument.


   * $3.5\ \text{cm} \implies 2\ \text{SF}$ (accuracy $0.1\ \text{cm}$)
   * $3.50\ \text{cm} \implies 3\ \text{SF}$ (accuracy $0.01\ \text{cm}$)
   * $3.500\ \text{cm} \implies 4\ \text{SF}$ (accuracy $0.001\ \text{cm}$)
   * $300.00 \implies 5\ \text{SF}$


5. Rule 5 (Trailing zeros in whole numbers without decimal): Trailing zeros in a number without a decimal point are NOT significant (they are ambiguous place-holders).


   * $3500 \implies 2\ \text{SF}$
   * $85000 \implies 2\ \text{SF}$


6. Rule 6 (Scientific Notation): In scientific notation $N \times 10^p$, the numerical factor $N$ contains all significant digits; the exponential factor $10^p$ does not affect the count of significant figures.


   * $6.020 \times 10^{23} \implies 4\ \text{SF}$ (digits: $6, 0, 2, 0$)
   * $1.60 \times 10^{-19} \implies 3\ \text{SF}$ (digits: $1, 6, 0$)
   * $8.5 \times 10^{-5}\ \text{km} \implies 2\ \text{SF}$


7. Rule 7 (Conservation of SF across Unit Conversions): Changing the units of measurement can NEVER change the number of significant figures, because precision is a physical property of the measuring device, not the units system. $$85\ \text{mm}\ (2\ \text{SF}) = 8.5\ \text{cm}\ (2\ \text{SF}) = 0.085\ \text{m}\ (2\ \text{SF}) = 0.000085\ \text{km}\ (2\ \text{SF}) = 8.5 \times 10^{-5}\ \text{km}\ (2\ \text{SF})$$


8. Rule 8 (Exact Numbers & Pure Constants): Exact numbers obtained by pure counting (e.g., $25$ balls, $20$ oscillations) or geometric definitions (e.g., $2\pi$ in $T = 2\pi\sqrt{L/g}$, $\frac{1}{2}$ in kinetic energy) have an infinite number of significant figures ($\infty\ \text{SF}$). They never constrain the precision of experimental results.


   * Example: If 1 ball has mass $1.76\ \text{kg}$ ($3\ \text{SF}$), the mass of $25$ such balls is: $$M = 25 \times 1.76 = 44.0\ \text{kg} \quad (3\ \text{SF},\ \text{NOT}\ 2\ \text{SF}!)$$


________________


2.2 Arithmetic Operations with Significant Figures
1. Addition and Subtraction (Decimal Places Rule)
The final result of addition or subtraction can have no more decimal places than the component measurement with the smallest number of decimal places.


* Example: In a simple pendulum experiment, the thread length is measured with an mm-scale as $l = 75.4\ \text{cm}$ ($1$ decimal place, doubtful in tenth of cm). The bob radius is measured with a vernier calliper as $r = 2.53\ \text{cm}$ ($2$ decimal places). $$l_{\text{eq}} = l + r = 75.4? + 2.53 = 77.93\ \text{cm}$$ Since the value beyond $75.4$ is unknown, adding $3$ to an unknown digit yields an unknown. Thus: $$\mathbf{l_{\text{eq}} = 77.9\ \text{cm}} \quad (\text{rounded to } 1\ \text{decimal place})$$
2. Multiplication and Division (Significant Figures Rule)
The final result of multiplication or division must retain only as many significant figures as are present in the least precise original factor (the factor with the fewest significant figures).


* Example 1: Voltmeter reading $V = 12.5\ \text{V}$ ($3\ \text{SF}$), Ammeter reading $i = 0.20\ \text{A}$ ($2\ \text{SF}$). $$R = \frac{V}{i} = \frac{12.5}{0.20} = 62.5\ \Omega$$ Rounding to $2\ \text{SF}$ gives: $$\mathbf{R = 62\ \Omega} \quad (2\ \text{SF})$$


* Example 2: Edge of a cube is $a = 1.2 \times 10^{-2}\ \text{m}$ ($2\ \text{SF}$). $$V = a^3 = (1.2 \times 10^{-2})^3 = 1.728 \times 10^{-6}\ \text{m}^3$$ Rounding to $2\ \text{SF}$ gives: $$\mathbf{V = 1.7 \times 10^{-6}\ \text{m}^3}$$


________________


2.3 Rules of Scientific Rounding-Off (Round-to-Even)
When rounding off numbers to $n$ significant figures or $k$ decimal places:


1. Insignificant digit $< 5$: Drop it without changing the preceding digit. $$47.833 \xrightarrow{\text{1 dec. place}} 47.8$$


2. Insignificant digit $> 5$: Drop it and increase the preceding digit by $1$. $$47.862 \xrightarrow{\text{1 dec. place}} 47.9$$


3. Insignificant digit $= 5$ followed by non-zero digits: Increase the preceding digit by $1$. $$5.2354 \xrightarrow{\text{3 SF}} 5.24$$


4. Insignificant digit $= 5$ followed ONLY by zeros (or nothing) — The Round-to-Even Rule:


   * If the preceding digit is ODD, increase it by $1$ to make it EVEN. $$4.735 \times 10^{-6}\ \text{kg} \xrightarrow{\text{3 SF}} 4.74 \times 10^{-6}\ \text{kg}$$ $$47.75 \xrightarrow{\text{1 dec. place}} 47.8$$
   * If the preceding digit is EVEN, leave it unchanged. $$4.085 \times 10^{8}\ \text{s} \xrightarrow{\text{3 SF}} 4.08 \times 10^{8}\ \text{s}$$ $$47.85 \xrightarrow{\text{1 dec. place}} 47.8$$ $$62.5 \xrightarrow{\text{2 SF}} 62$$


________________


3. Mathematical Theory of Errors & Propagation
3.1 Taxonomy of Errors
1. Systematic Errors: Errors that tend to be in one direction (consistently positive or consistently negative).


   * Instrumental Errors: Flawed calibration, zero error of scale, irregular graduations.
   * Imperfection in Experimental Technique: Heat loss in calorimetry, parallax error in reading pointers.
   * Personal Errors: Individual reaction time delays in starting/stopping a timer.
   * Remedy: Can be eliminated or corrected by applying known corrections.


2. Random Errors: Irregular, unpredictable fluctuations in experimental conditions (voltage fluctuations, acoustic vibrations, temperature drifts).


   * Governed by Gaussian normal distribution.
   * If an observation is repeated $n$ times ($a_1, a_2, \dots, a_n$), the arithmetic mean represents the most probable value: $$\mathbf{a_{\text{mean}} = \frac{1}{n} \sum_{i=1}^n a_i}$$
   * The standard error of the mean decreases as $\frac{1}{\sqrt{n}}$: $$\mathbf{\Delta a_{\text{random}} \propto \frac{1}{\sqrt{n}}}$$ (Averaging $100$ readings reduces random error by a factor of $10$ compared to a single reading).


3. Absolute, Mean Absolute, Relative, and Percentage Errors:


   * Absolute Error ($\Delta a_i$): Magnitude of deviation from the mean: $$\Delta a_i = |a_{\text{mean}} - a_i|$$
   * Mean Absolute Error ($\Delta a_{\text{mean}}$): $$\mathbf{\Delta a_{\text{mean}} = \frac{1}{n} \sum_{i=1}^n |\Delta a_i|}$$ The true value lies within the confidence interval: $$a_{\text{mean}} - \Delta a_{\text{mean}} \le a \le a_{\text{mean}} + \Delta a_{\text{mean}}$$
   * Relative (Fractional) Error: $$\mathbf{\text{Relative Error} = \frac{\Delta a_{\text{mean}}}{a_{\text{mean}}}}$$
   * Percentage Error: $$\mathbf{\%\ \text{Error} = \frac{\Delta a_{\text{mean}}}{a_{\text{mean}}} \times 100\%}$$


________________


3.2 Propagation of Maximum Permissible Errors
When combining measured quantities $x, y, z$ to compute a derived physical quantity $f$, uncertainties propagate. For worst-case laboratory bounds (JEE Main convention), errors always add up to maximize uncertainty.
1. Addition and Subtraction
* For $f = x + y$: $$\Delta f_{\max} = \Delta x + \Delta y$$
* For $f = x - y$: $$df = dx - dy \implies \Delta f = \pm \Delta x \mp \Delta y$$ To obtain maximum permissible error, signs are chosen so errors add: $$\mathbf{\Delta f_{\max} = \Delta x + \Delta y}$$
* General Linear Combination: $$f = c_1 x \pm c_2 y \pm c_3 z \implies \mathbf{\Delta f_{\max} = |c_1|\Delta x + |c_2|\Delta y + |c_3|\Delta z}$$
2. Multiplication, Division, and Power Products
For a general power product: $$f(x, y, z) = K \frac{x^a y^b}{z^c}$$ Taking the natural logarithm: $$\ln f = \ln K + a \ln x + b \ln y - c \ln z$$ Differentiating: $$\frac{df}{f} = a \frac{dx}{x} + b \frac{dy}{y} - c \frac{dz}{z}$$ The maximum permissible fractional error is obtained by summing absolute fractional errors: $$\mathbf{\left(\frac{\Delta f}{f}\right){\max} = |a| \frac{\Delta x}{x} + |b| \frac{\Delta y}{y} + |c| \frac{\Delta z}{z}}$$ In percentage terms: $$\mathbf{\left(\frac{\Delta f}{f}\right){\max} \times 100\% = |a| \left(\frac{\Delta x}{x}\times 100\right) + |b| \left(\frac{\Delta y}{y}\times 100\right) + |c| \left(\frac{\Delta z}{z}\times 100\right)}$$


* Example: If $t = \frac{x^2 y^3}{z}$ with percentage errors in $x, y, z$ being $1\%, 3\%, 2\%$: $$\% \Delta t = 2(1\%) + 3(3\%) + 1(2\%) = 2\% + 9\% + 2\% = \mathbf{13\%}$$
3. General Multivariate Differential Method
For any arbitrary differentiable function $f(x, y, z)$: $$\mathbf{\Delta f_{\max} = \left|\frac{\partial f}{\partial x}\right|\Delta x + \left|\frac{\partial f}{\partial y}\right|\Delta y + \left|\frac{\partial f}{\partial z}\right|\Delta z}$$
4. Large Errors (> 10%) vs Small Errors (Differential Limit)
Calculus differentiation $\frac{df}{f}$ is valid strictly for small percentage errors ($\le 5\%-10\%$). When errors are large ($\ge 10\%-20\%$), one must compute the exact finite difference: $$f_{\max} = f(x + \Delta x, y + \Delta y, z - \Delta z)$$ $$\mathbf{\text{Exact Error} = \frac{f_{\max} - f_{\text{nominal}}}{f_{\text{nominal}}} \times 100\%}$$


* Classic Illustration: If resistance of a wire increases by $100\%$, what is the percentage change in power dissipated at constant voltage ($P = V^2/R$)?
   * Calculus approximation gives: $\frac{\Delta P}{P} = -\frac{\Delta R}{R} = -100\%$ (implies zero power, which is physically wrong).
   * Exact calculation: $R' = 2R \implies P' = \frac{V^2}{2R} = 0.5 P \implies \Delta P = -50\%$.


________________


4. Canonical Experimental Setups in JEE Main
4.1 Simple Pendulum: Determination of $g$
The time period of a simple pendulum of effective length $L = l + r$ (where $l$ is thread length and $r$ is bob radius) is: $$T = 2\pi \sqrt{\frac{L}{g}} \implies g = \frac{4\pi^2 L}{T^2}$$


If the total time for $n$ oscillations is measured using a stopwatch of least count $\Delta t$: $$t = n T \implies T = \frac{t}{n}$$ $$g = \frac{4\pi^2 n^2 L}{t^2}$$


Taking fractional error: $$\mathbf{\frac{\Delta g}{g} = \frac{\Delta L}{L} + 2\frac{\Delta T}{T} = \frac{\Delta L}{L} + 2\frac{\Delta t}{t}}$$


* Key Insights & Experimental Design:
   1. The number of oscillations $n$ is an exact count ($\Delta n = 0$).
   2. $\frac{\Delta T}{T} = \frac{\Delta t / n}{t / n} = \frac{\Delta t}{t}$. The fractional error in the time period is identical to the fractional error in the total elapsed time.
   3. To minimize error in $g$, the experimenter should:
      * Measure a large number of oscillations (e.g., $n = 50$ or $100$ oscillations instead of $10$), thereby increasing total elapsed time $t$ in the denominator and drastically reducing $\frac{\Delta t}{t}$.
      * Measure effective length $L = l + r$ using a meter scale ($\Delta l = 0.1\ \text{cm}$) for thread length and a Vernier Calliper ($\Delta r = 0.01\ \text{cm}$) for bob radius: $\Delta L = \Delta l + \Delta r$.


________________


4.2 Resistivity of a Wire using Meter Bridge / Ohm's Law
The electrical resistance of a cylindrical wire of diameter $d$, length $L$, and resistivity $\rho$ is: $$R = \rho \frac{L}{A} = \rho \frac{L}{\pi (d/2)^2} = \frac{4 \rho L}{\pi d^2}$$ $$\mathbf{\rho = \frac{\pi d^2 R}{4 L}}$$


Maximum permissible fractional error in resistivity: $$\mathbf{\frac{\Delta \rho}{\rho} = \frac{\Delta R}{R} + 2\frac{\Delta d}{d} + \frac{\Delta L}{L}}$$


* Experimental Sensitivity Analysis:
   * Diameter $d$ is measured with a micrometer screw gauge ($\text{LC} = 0.01\ \text{mm}$). Because diameter is squared, its fractional error is doubled ($2\frac{\Delta d}{d}$).
   * Since $d$ is very small ($\sim 0.5\ \text{mm}$), $\frac{\Delta d}{d} = \frac{0.01}{0.50} = 2\% \implies 2\frac{\Delta d}{d} = 4\%$. The diameter measurement typically dominates the total error budget!


________________


4.3 Speed of Sound using Resonance Tube
In an acoustic resonance tube apparatus excited by a tuning fork of known frequency $f$, successive resonances occur at air column lengths $l_1$ and $l_2$: $$l_1 + e = \frac{\lambda}{4}, \quad l_2 + e = \frac{3\lambda}{4}$$ Subtracting the two resonance positions eliminates the end correction $e$: $$l_2 - l_1 = \frac{\lambda}{2} \implies \lambda = 2(l_2 - l_1)$$ Speed of sound: $$\mathbf{v = f \lambda = 2f (l_2 - l_1)}$$


Error propagation: $$\Delta v = 2(l_2 - l_1)\Delta f + 2f(\Delta l_1 + \Delta l_2)$$ Assuming the tuning fork frequency is stamped and exact ($\Delta f = 0$): $$\mathbf{\frac{\Delta v}{v} = \frac{\Delta l_1 + \Delta l_2}{l_2 - l_1}}$$ If both lengths are measured with the same meter scale of least count $\Delta l = 0.1\ \text{cm}$: $$\mathbf{\frac{\Delta v}{v} = \frac{2\Delta l}{l_2 - l_1}}$$


* End Correction Determination: $$e = \frac{l_2 - 3l_1}{2} = 0.6 r$$ Error in end correction: $$\Delta e = \frac{\Delta l_2 + 3\Delta l_1}{2}$$


________________


4.4 Young's Modulus using Searle's Apparatus
In Searle's apparatus, a test wire of length $L$ and diameter $d$ is stretched by adding a load of mass $M$, producing an elongation $l$ measured with a micrometer screw gauge: $$Y = \frac{\text{Stress}}{\text{Strain}} = \frac{M g / (\pi d^2 / 4)}{l / L} = \frac{4 M g L}{\pi d^2 l}$$


Maximum permissible fractional error in Young's Modulus: $$\mathbf{\frac{\Delta Y}{Y} = \frac{\Delta M}{M} + \frac{\Delta L}{L} + 2\frac{\Delta d}{d} + \frac{\Delta l}{l}}$$


* The microscopic elongation $l$ (measured via micrometer/spherometer) and diameter $d$ represent the primary sources of experimental uncertainty.


________________


5. Comprehensive High-Yield JEE Traps & Pitfalls
#
	Topic / Scenario
	Common Mistake / Trap
	Correct Physical Principle
	1
	Negative Zero Error in Vernier
	Multiplying the coinciding division directly: $e = - (n \times \text{LC})$.
	Count backwards from the 10th division: $e = - (N - n) \times \text{LC}$. True reading $= \text{Observed} - e = \text{Observed} + (N - n)\text{LC}$.
	2
	Negative Zero Error in Screw Gauge
	Taking $e = - (n \times \text{LC})$ when the circular zero is above the reference line.
	The reading has fallen short by $(N - n)$ divisions: $e = - (N - n) \times \text{LC}$. True reading $= \text{Observed} + (N - n)\text{LC}$.
	3
	Backlash Error
	Attempting to calculate or correct backlash mathematically.
	Backlash is mechanical play; it cannot be corrected numerically. It must be prevented entirely by rotating the screw in only one direction.
	4
	Subtraction of Measured Quantities
	Subtracting absolute errors when calculating difference $f = x - y$: $\Delta f = \Delta x - \Delta y$.
	Absolute uncertainties ALWAYS add up to maximize permissible error: $\Delta f_{\max} = \Delta x + \Delta y$.
	5
	Number of Oscillations in Pendulum
	Assigning an error to $n$ in $g = \frac{4\pi^2 n^2 L}{t^2}$ as $\frac{\Delta n}{n}$.
	$n$ is an integer count (exact number, $\infty\ \text{SF}$, zero error). $\frac{\Delta T}{T} = \frac{\Delta t}{t}$.
	6
	Rounding off the Digit 5
	Always rounding up (e.g. $47.85 \rightarrow 47.9$).
	Round-to-even rule: If preceding digit is even, leave it unchanged ($47.85 \rightarrow 47.8$). If odd, round up ($47.75 \rightarrow 47.8$).
	7
	Leading Zeros in Small Decimals
	Counting initial zeros as significant figures (e.g. thinking $0.0042$ has $4\ \text{SF}$).
	Leading zeros after decimal are place-holders that change with unit conversion; $0.0042$ has only $2\ \text{SF}$.
	8
	Large Percentage Errors (> 10%)
	Using differential calculus formula $\frac{\Delta f}{f} = a\frac{\Delta x}{x}$ when $\Delta x/x$ is large ($30\%-100\%$).
	Calculus differential holds only for small $\Delta x \ll x$. For large changes, evaluate $f_{\max} = f(x + \Delta x)$ directly.
	9
	Minimum vs. Maximum Error
	Assuming minimum possible error is zero.
	In subtraction $f = x - y$, if both $x$ and $y$ are measured with instruments having least counts $\Delta x, \Delta y$, minimum possible error occurs when fluctuations cancel, which is indeed zero; but maximum permissible error is $\Delta x + \Delta y$.
	10
	Ratchet Mechanism in Screw Gauge
	Forcing the main thimble to clamp the sample tightly.
	Deforms the sample and yields an erroneously small diameter. Always turn via the ratchet until it clicks.
	

________________