Mathematics Revision Context: Chapter 07 — Height and Distance
Source: Cengage Trigonometry & JEE Advanced Series
Extracted into: JEE/context/
Batch Range: Chapter 06 of Trigonometry (Pages 6.1–6.4, S.128–S.130)
Status: Verified via Web Search & Cross-Referenced


________________


1. Fundamentals of Height and Distance
1.1 Motivation & Measuring Instruments
* In real-world trigonometry, measuring vast heights (hills, towers, aeroplanes) or inaccessible horizontal distances (ships at sea, celestial objects) directly with measuring tapes is impractical.
* Scientists and surveyors use angular measurements combined with triangle geometry and trigonometric ratios.
* Theodolite & Sextant: Specialized optical instruments used to accurately measure angles of elevation and depression in vertical and horizontal planes.
1.2 Angle of Elevation ($\alpha$)
* Definition: When the observed object is above the observer's horizontal eye-level, the angle between the horizontal line of sight and the direct line from the observer's eye to the object is the angle of elevation.
* The horizontal line, observer, and target point must lie within the same vertical reference plane.
1.3 Angle of Depression ($\beta$)
* Definition: When the observed object is below the observer's horizontal eye-level, the angle between the horizontal line of sight and the direct line from the observer's eye downwards to the object is the angle of depression.
* Fundamental Geometric Invariant: If the angle of depression of object $B$ as viewed from observation point $A$ is $\beta$, then by alternate interior angles between parallel horizontal planes, the angle of elevation of $A$ as viewed from $B$ is identically equal to $\beta$.


________________


2. Core Geometric Theorems & Analytical Tools
2.1 The Sine Rule
For any triangle $ABC$ with sides $a, b, c$ opposite angles $A, B, C$: $$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$ (Extensively used when dealing with non-right-angled oblique triangles formed by inclined planes or leaning poles).
2.2 The Cosine Rule
$$a^2 = b^2 + c^2 - 2bc \cos A$$ $$\cos A = \frac{b^2 + c^2 - a^2}{2bc}$$ (Used for 2D/3D navigation trajectories, finding distance between points subtending known angles from a fixed landmark).
2.3 The $m-n$ Cotangent Theorem (Cotangent Rule)
If point $D$ lies on the base $BC$ of triangle $ABC$ dividing it in the ratio $m : n$ (i.e., $\frac{BD}{DC} = \frac{m}{n}$), and $AD$ makes angle $\theta$ with base $BC$:


1. In terms of base angles $B$ and $C$: $$(m + n) \cot\theta = m \cot B - n \cot C$$
2. In terms of vertex angles ($\angle BAD = \alpha, \angle CAD = \beta$): $$(m + n) \cot\theta = n \cot\alpha - m \cot\beta$$ (Critical shortcut for leaning towers and multistage angular elevations without solving intermediate equations).


________________


3. High-Yield JEE Problem Archetypes & Exact Analytical Derivations
Archetype 1: Sliding Ladder Relation
* Scenario: A ladder of length $l$ rests against a vertical wall at angle $\alpha$ to the horizontal. The foot is pulled away by horizontal distance $x$, causing the top to slide down by vertical distance $y$, with the ladder now inclined at angle $\beta$ to the horizontal.
* Derivation:
   * Initially: $x_1 = l \cos\alpha$, $y_1 = l \sin\alpha$.
   * Finally: $x_2 = l \cos\beta$, $y_2 = l \sin\beta$.
   * Pull distance: $x = x_2 - x_1 = l(\cos\beta - \cos\alpha) = 2l \sin\left(\frac{\alpha+\beta}{2}\right) \sin\left(\frac{\alpha-\beta}{2}\right)$.
   * Slide distance: $y = y_1 - y_2 = l(\sin\alpha - \sin\beta) = 2l \cos\left(\frac{\alpha+\beta}{2}\right) \sin\left(\frac{\alpha-\beta}{2}\right)$.
   * Dividing $x$ by $y$: $$\frac{x}{y} = \frac{\sin\left(\frac{\alpha+\beta}{2}\right)}{\cos\left(\frac{\alpha+\beta}{2}\right)} = \tan\left(\frac{\alpha+\beta}{2}\right)$$
   * Master Formula: $$x = y \tan\left(\frac{\alpha+\beta}{2}\right)$$


________________


Archetype 2: Pole Mounted on a Tower Subtending Equal Angles
* Scenario: A tower of height $b$ subtends an angle $\alpha$ at point $O$ on level ground at distance $a$ from the tower's base. A pole of height $p$ mounted on top of the tower subtends an equal angle $\alpha$ at $O$.
* Derivation:
   * $\tan\alpha = \frac{b}{a}$.
   * Total angle for tower + pole is $2\alpha$, so $\tan(2\alpha) = \frac{b + p}{a}$.
   * Using the double-angle formula: $$\tan(2\alpha) = \frac{2\tan\alpha}{1 - \tan^2\alpha} \implies \frac{b + p}{a} = \frac{2(b/a)}{1 - (b/a)^2} = \frac{2ab}{a^2 - b^2}$$
   * Solving for pole height $p$: $$b + p = \frac{2a^2 b}{a^2 - b^2} \implies p = \frac{2a^2 b - b(a^2 - b^2)}{a^2 - b^2} = \frac{a^2 b + b^3}{a^2 - b^2}$$
   * Master Formula: $$p = b \left( \frac{a^2 + b^2}{a^2 - b^2} \right)$$


________________


Archetype 3: Elevation Along Collinear Points with Multiples $\alpha, 2\alpha, 3\alpha$
* Scenario: A vertical tower subtends angles of elevation $\alpha, 2\alpha, 3\alpha$ at three collinear ground points $A, B, C$ along a line passing through the foot of the tower $M$.
* Derivation:
   * In $\triangle ABP$: $\angle PAB = \alpha$, exterior $\angle PBC = 2\alpha \implies \angle APB = 2\alpha - \alpha = \alpha$.
      * Since $\angle PAB = \angle APB = \alpha$, $\triangle ABP$ is isosceles $\implies AB = BP$.
   * In $\triangle BCP$: $\angle PBC = 2\alpha$, exterior $\angle PCM = 3\alpha \implies \angle BPC = 3\alpha - 2\alpha = \alpha$.
   * Apply Sine Rule in $\triangle BCP$: $$\frac{BC}{\sin(\angle BPC)} = \frac{BP}{\sin(\angle BCP)} \implies \frac{BC}{\sin\alpha} = \frac{AB}{\sin(180^\circ - 3\alpha)} = \frac{AB}{\sin 3\alpha}$$
   * Taking ratio $\frac{AB}{BC}$: $$\frac{AB}{BC} = \frac{\sin 3\alpha}{\sin\alpha} = \frac{3\sin\alpha - 4\sin^3\alpha}{\sin\alpha} = 3 - 4\sin^2\alpha = 3 - 2(2\sin^2\alpha) = 3 - 2(1 - \cos 2\alpha)$$
   * Master Formula: $$\frac{AB}{BC} = 1 + 2\cos 2\alpha$$


________________


Archetype 4: Leaning Tower Analyzed via $m-n$ Theorem
* Scenario: A tower $AB$ leans towards the West at angle $\alpha$ with the vertical. The angular elevation of the top $B$ from point $C$ due East at distance $d$ from the base $A$ is $\beta$. The angular elevation from point $D$ at distance $2d$ due East of $C$ is $\gamma$.
* Derivation:
   * The base points lie in a straight line: $A, C, D$ with $AC = d$ and $CD = 2d$. Ratio $m : n = d : 2d = 1 : 2$.
   * The angle made by leaning tower $AB$ with the ground towards East is $90^\circ + \alpha$.
   * Applying $m-n$ Cotangent Theorem in $\triangle ABD$: $$(d + 2d)\cot\beta = d\cot\gamma - 2d\cot(90^\circ + \alpha)$$ $$3d\cot\beta = d\cot\gamma - 2d(-\tan\alpha) = d\cot\gamma + 2d\tan\alpha$$ $$3\cot\beta = \cot\gamma + 2\tan\alpha$$
   * Master Formula: $$2\tan\alpha = 3\cot\beta - \cot\gamma$$


________________


Archetype 5: 3D Navigation & Elevation (Orthogonal Movement)
* Scenario: A man observes the elevation of a tower situated directly West of him to be $60^\circ$. After walking distance $c = 240\text{ m}$ due North, the elevation of the tower top reduces to $30^\circ$. Find tower height $h$.
* Derivation:
   * Let tower base be $O$ and top be $A$ ($OA = h$).
   * Initial position $B$ is due East of $O$ (tower is West of $B$): $OB = h\cot 60^\circ = \frac{h}{\sqrt{3}}$.
   * Final position $C$ is North of $B$: $BC = 240\text{ m}$.
   * Elevation from $C$ is $30^\circ$: $OC = h\cot 30^\circ = h\sqrt{3}$.
   * Since $B$ is East of $O$ and $C$ is North of $B$, $\triangle OBC$ is a right triangle with right angle at $B$: $$OB^2 + BC^2 = OC^2$$ $$\left(\frac{h}{\sqrt{3}}\right)^2 + 240^2 = (h\sqrt{3})^2$$ $$\frac{h^2}{3} + 240^2 = 3h^2 \implies \frac{8h^2}{3} = 240^2$$ $$h^2 = \frac{3 \times 57600}{8} = 21600 \implies h = \sqrt{21600} = 60\sqrt{6}\text{ m}$$
   * General 3D Formula: $$h = \frac{d}{\sqrt{\cot^2\beta - \cot^2\alpha}}$$ where $d$ is perpendicular displacement, $\alpha$ is initial elevation, and $\beta$ is final elevation.


________________


Archetype 6: Tower on an Inclined Declivity (Sine Rule Application)
* Scenario: A vertical tower $BA$ of height $h$ stands on a hill/declivity inclined at angle $\theta = 15^\circ$ to the horizontal. A surveyor ascends distance $d = 80\text{ ft}$ up the slope from base $B$ to point $C$ and finds the tower subtends angle $\phi = 30^\circ$.
* Derivation:
   * In $\triangle ABC$:
      * Angle at $C$ is $30^\circ$.
      * The hill makes $15^\circ$ with horizontal, and the tower is vertical ($90^\circ$ with horizontal), so angle between slope and tower at $B$ is $90^\circ - 15^\circ = 75^\circ$.
      * The third angle $\angle BAC = 180^\circ - (75^\circ + 30^\circ) = 75^\circ$.
   * Apply Sine Rule in $\triangle ABC$: $$\frac{AB}{\sin 30^\circ} = \frac{BC}{\sin 75^\circ} \implies h = \frac{80 \sin 30^\circ}{\sin 75^\circ}$$
   * Since $\sin 30^\circ = \frac{1}{2}$ and $\sin 75^\circ = \frac{\sqrt{3}+1}{2\sqrt{2}}$: $$h = \frac{80 \times \frac{1}{2}}{\frac{\sqrt{3}+1}{2\sqrt{2}}} = \frac{80\sqrt{2}}{\sqrt{3}+1} = \frac{80\sqrt{2}(\sqrt{3}-1)}{2} = 40(\sqrt{6} - \sqrt{2})\text{ ft}$$


________________


Archetype 7: Two Observation Heights (Tower Observed from Ground and Mast)
* Scenario: A tower of height $H$ subtends angle $\alpha$ at a ground point. From a point $b$ meters vertically above this point, the angle of depression of the foot of the tower is $\beta$.
* Derivation:
   * Distance between observation vertical and tower: $d = b\cot\beta$.
   * Height of tower from ground: $H = d\tan\alpha$.
   * Substituting $d$: $$H = b\tan\alpha\cot\beta$$


________________


4. Key Formula Summary Table
Problem Type
	Given Parameters
	Master Formula
	Sliding Ladder
	Incline change $\alpha \to \beta$, slide $y$
	$x = y \tan\left(\frac{\alpha+\beta}{2}\right)$
	Mounted Pole
	Tower height $b$, ground distance $a$
	$p = b\left(\frac{a^2+b^2}{a^2-b^2}\right)$
	Triple Angles
	Collinear elevations $\alpha, 2\alpha, 3\alpha$
	$\frac{AB}{BC} = 1 + 2\cos 2\alpha$
	Leaning Tower
	Lean $\alpha$ from vertical, elevations $\beta, \gamma$ at $d, 3d$
	$2\tan\alpha = 3\cot\beta - \cot\gamma$
	3D Orthogonal Walk
	Walk $d$ normal to line of sight, angles $\alpha \to \beta$
	$h = \frac{d}{\sqrt{\cot^2\beta - \cot^2\alpha}}$
	Double Height Walk
	Walk $2h$ away, angle drops $\theta \to 2\theta$
	$\cot\theta = 2 + \sqrt{3} \implies \theta = 15^\circ$
	Two Tier Observation
	Ground elevation $\alpha$, height $b$ depression $\beta$
	$H = b\tan\alpha\cot\beta$