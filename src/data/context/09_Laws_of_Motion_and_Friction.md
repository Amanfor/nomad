Physics Revision Context: Chapter 09 — Laws of Motion, Friction & Circular Dynamics

________________

1. Newton’s Laws of Motion & Momentum Principles

1.1 Newton's First Law (Law of Inertia)

- A body continues in its state of rest or of uniform motion in a straight line unless compelled to change that state by an applied unbalanced external force.
- Inertia is the intrinsic property of a body to resist changes in its velocity. Mass is the quantitative scalar measure of inertia.
- Inertial Reference Frame: A reference frame in which Newton's first law holds valid (i.e., non-accelerating frame, $\vec{a}_{frame} = 0$).

1.2 Newton's Second Law (Force & Momentum)

- The rate of change of linear momentum of a body is directly proportional to the applied net external force and takes place in the direction of the force: $$\vec{F}_{net} = \frac{d\vec{p}}{dt} = \frac{d(m\vec{v})}{dt}$$
- For constant mass ($m = \text{const}$): $$\vec{F}_{net} = m\vec{a} \implies \sum F_x = m a_x, \quad \sum F_y = m a_y, \quad \sum F_z = m a_z$$
- Impulse of a Force ($\vec{J}$): $$\vec{J} = \int_{t_1}^{t_2} \vec{F} dt = \Delta\vec{p} = m\vec{v}_f - m\vec{v}_i$$
   - Geometric Interpretation: Area under the $F\text{--}t$ (Force-Time) graph equals impulse / change in momentum.

1.3 Newton's Third Law (Action & Reaction Pairs)

- Whenever two bodies interact, the force exerted by the first body on the second is equal in magnitude and opposite in direction to the force exerted by the second body on the first: $$\vec{F}_{AB} = -\vec{F}_{BA}$$
- Cardinal Properties of Action-Reaction Pairs:
   1. Action and reaction forces act simultaneously on different bodies; they never cancel each other out.
   2. Forces in nature always occur in matched pairs (e.g., Earth-Sun gravitational pull, Normal reaction between contacting surfaces).

________________

2. Friction Dynamics & Limiting Equilibrium

2.1 Nature & Mechanism of Friction

- Friction is a contact force arising from intermolecular interactions and microscopic surface roughness between two contacting bodies.
- It always opposes the relative impending or actual sliding motion between the contacting surfaces.
- Friction is self-adjusting in the static regime: $$0 \le f_s \le f_{max}$$

2.2 Static, Limiting, and Kinetic Friction

- Limiting Friction ($f_{max}$): The maximum static friction force when relative motion is on the verge of starting: $$f_{max} = \mu_s N$$ where $\mu_s$ is the coefficient of static friction and $N$ is the normal contact force.
- Kinetic Friction ($f_k$): Once relative sliding commences, the friction force slightly drops and remains essentially constant: $$f_k = \mu_k N \quad (\mu_k < \mu_s)$$

2.3 Visual Preservation: Friction Characteristic Graph

 Description: Plot of friction force ($f$) versus applied external force ($F_{ext}$), highlighting the linear self-adjusting static region ($f_s = F_{ext}$), the peak limiting static friction ($f_{max} = \mu_s N$), and the constant kinetic friction plateau ($f_k = \mu_k N$) once relative sliding commences.

2.4 Angle of Friction ($\lambda$) & Angle of Repose ($\phi$)

- Angle of Friction ($\lambda$): The angle that the resultant of limiting friction $f_{max}$ and normal reaction $N$ makes with the normal reaction: $$\tan\lambda = \frac{f_{max}}{N} = \frac{\mu_s N}{N} = \mu_s \implies \lambda = \tan^{-1}\mu_s$$
- Angle of Repose ($\phi$): The maximum angle of inclination of a rough inclined plane at which a block placed on it remains in equilibrium without sliding down: $$mg\sin\phi = f_{max} = \mu_s N = \mu_s mg\cos\phi \implies \tan\phi = \mu_s \implies \phi = \tan^{-1}\mu_s$$
   - Fundamental Identity: Angle of Repose = Angle of Friction ($\phi = \lambda$).

2.5 Visual Preservation: Free Body Diagram on Inclined Plane

 Description: Comprehensive free-body diagram of a block of mass $m$ on a rough inclined plane inclined at angle $\theta$, resolving gravity into normal ($mg\cos\theta$) and parallel ($mg\sin\theta$) components, balanced against normal force $N$ and upward limiting static friction $f = \mu N$.

- Inclined Plane Dynamics:
   - If $\theta < \phi$: Block remains at rest; static friction is $f_s = mg\sin\theta$.
   - If $\theta = \phi$: Block is on the verge of sliding; $f = \mu_s mg\cos\theta = mg\sin\theta$.
   - If $\theta > \phi$: Block accelerates down the plane: $$a = g(\sin\theta - \mu_k\cos\theta)$$
   - Acceleration up an inclined plane under applied force: $$a_{retard} = g(\sin\theta + \mu_k\cos\theta)$$

________________

3. Dynamics of Circular Motion

3.1 Kinematics of Circular Motion

- Angular displacement ($\theta$), angular velocity ($\omega = \frac{d\theta}{dt}$), and angular acceleration ($\alpha = \frac{d\omega}{dt}$).
- Relation to linear parameters: $$v = \omega r, \quad a_t = \alpha r$$

3.2 Acceleration Components in Non-Uniform Circular Motion

- Radial (Centripetal) Acceleration ($a_r$): Directed radially inwards towards the center of curvature: $$a_r = \frac{v^2}{r} = \omega^2 r = v\omega$$
- Tangential Acceleration ($a_t$): Directed tangent to the path, responsible for changing speed: $$a_t = \frac{dv}{dt} = \alpha r$$
- Total Net Acceleration ($\vec{a}_{net}$): $$\vec{a}_{net} = \vec{a}_r + \vec{a}_t \implies a_{net} = \sqrt{a_r^2 + a_t^2} = \sqrt{\left(\frac{v^2}{r}\right)^2 + (\alpha r)^2}$$ $$\tan\beta = \frac{a_t}{a_r} \quad (\text{angle with radial vector})$$

3.3 Visual Preservation: Circular Motion Acceleration Vectors

 Description: Vector decomposition of acceleration in non-uniform circular motion, illustrating radial acceleration directed inward towards the center ($a_r = v^2/r$), tangential acceleration along the tangent ($a_t = \alpha r$), and the resultant acceleration vector ($\vec{a}_{net} = \vec{a}_r + \vec{a}_t$).

3.4 Centripetal Force & Banking of Roads

- Centripetal Force: $$F_c = m a_r = \frac{m v^2}{r} = m \omega^2 r$$
- Unbanked Rough Level Road: $$v_{max} = \sqrt{\mu_s g r}$$
- Banked Road without Friction: $$\tan\theta = \frac{v^2}{rg} \implies v_{opt} = \sqrt{rg\tan\theta}$$
- Banked Road with Friction ($\mu$): $$v_{max} = \sqrt{rg\left(\frac{\tan\theta + \mu}{1 - \mu\tan\theta}\right)}$$ $$v_{min} = \sqrt{rg\left(\frac{\tan\theta - \mu}{1 + \mu\tan\theta}\right)}$$

________________

4. Work-Energy Integration & High-Yield JEE Archetypes

4.1 Work Done by Friction & Non-Conservative Forces

- Work-Energy Theorem in the presence of friction: $$W_{total} = W_c + W_{nc} + W_{ext} = \Delta K$$ $$W_{friction} = -f_k \cdot d_{rel} = \Delta E_{mech}$$
- Stopping Distance on Rough Horizontal Floor ($v \to 0$): $$0 - \frac{1}{2}mv^2 = W_{friction} = -(\mu_k mg) s \implies s = \frac{v^2}{2\mu_k g}$$
   - Stopping time: $t = \frac{v}{\mu_k g}$.

4.2 High-Yield JEE Problem Archetypes

- Archetype 1: Two-Block System on Rough Ground
   - Minimum force on bottom block $M$ to cause slipping of top block $m$: $$F_{slip} = (M + m)\mu_1 g + \mu_2(M + m)g$$
- Archetype 2: Minimum Velocity for Vertical Circular Loop
   - Top of circle ($v_{top}$): $v_{top} \ge \sqrt{gr}$
   - Bottom of circle ($v_{bot}$): $v_{bot} \ge \sqrt{5gr}$
   - Horizontal position ($v_{mid}$): $v_{mid} \ge \sqrt{3gr}$
   - Tension difference between bottom and top: $T_{bot} - T_{top} = 6mg$.
