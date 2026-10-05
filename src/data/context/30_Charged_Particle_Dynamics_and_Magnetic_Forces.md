Physics Revision Context: Chapter 30 — Motion of Charged Particles in Magnetic Fields & Magnetic Forces on Conductors


**Source:** `scraped/Coaching_Modules/Praveen FL 2023-24/.../Notes/Magntism and Magnetic Field/Motion Of Charged Particle In mMagnetic Field_Anish Sir Notes.pdf`, `Magnetism_Day-01.pdf`, & `Magnetism _Day-03.pdf`  
**Extracted into:** `JEE/context/`  
**Batch:** Physics Electrodynamics Core — Lorentz Force Law ($\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$), Zero-Work Theorem of Magnetic Forces ($W \equiv 0$, $K = \text{constant}$), Uniform Circular Motion ($\vec{v} \perp \vec{B}$), Gyroradius & Cyclotron Frequency Invariants ($R = \frac{mv}{qB}$, $T = \frac{2\pi m}{qB}$), Helical Motion (Pitch $p = \frac{2\pi m v \cos\theta}{qB}$), Bounded Magnetic Field Penetration (Semi-Infinite Half-Spaces, Slab Deflection $\sin\delta = \frac{d}{R}$, Critical Thickness & Transit Times), Crossed Fields ($\vec{E} \perp \vec{B}$, Velocity Selector $v = \frac{E}{B}$), Cyclotron Accelerator Analytics, Magnetic Force on Current-Carrying Elements ($d\vec{F} = I(d\vec{l} \times \vec{B})$), Vector Effective Length Theorem ($\vec{F} = I(\vec{L}_{\text{eff}} \times \vec{B})$), Closed Loop Force Annihilation ($\oint d\vec{l} = 0 \implies \vec{F}_{\text{net}} = 0$), Magnetic Torque ($\vec{\tau} = \vec{M} \times \vec{B}$), and Moving Coil Galvanometer (MCG)  
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams  


---


## 1. Lorentz Force & The Zero-Work Theorem


### 1.1 The General Lorentz Force Equation
* **Lorentz Force Law:** The total electromagnetic force experienced by a test particle carrying electric charge $q$ moving with instantaneous velocity $\vec{v}$ through a region with electric field $\vec{E}$ and magnetic field $\vec{B}$ is:
  $$\vec{F} = \vec{F}_e + \vec{F}_m = q\vec{E} + q(\vec{v} \times \vec{B})$$
* **Magnetic Lorentz Force ($\vec{F}_m$):**
  $$\vec{F}_m = q(\vec{v} \times \vec{B})$$
  * Magnitude: $F_m = |q| v B \sin\theta$ (where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$).
  * Direction: Perpendicular to both velocity $\vec{v}$ and magnetic field $\vec{B}$, obeying the right-hand cross-product rule for positive charge $+q$, and reversed for negative charge $-q$.


### 1.2 Fundamental Properties & The Zero-Work Theorem
1. **Static Inactivity:** If a charged particle is at rest ($v = 0$), the magnetic force is identically zero ($\vec{F}_m = 0$). Magnetic fields act only on moving charges.
2. **Collinear Invariance:** If the particle moves parallel or anti-parallel to the magnetic field ($\theta = 0^\circ$ or $180^\circ$):
   $$\vec{v} \times \vec{B} = 0 \implies \vec{F}_m = 0$$
   The particle continues in unaccelerated straight-line motion at constant velocity.
3. **Strict Orthogonality & The Zero-Work Theorem:**
   By the fundamental definition of the vector cross-product:
   $$\vec{F}_m \perp \vec{v} \quad \text{and} \quad \vec{F}_m \perp \vec{B}$$
   * Instantaneous power delivered by the magnetic force:
     $$P_m = \vec{F}_m \cdot \vec{v} = [q(\vec{v} \times \vec{B})] \cdot \vec{v} \equiv 0$$
   * Work done over any arbitrary finite displacement from $t_1$ to $t_2$:
     $$W_m = \int_{t_1}^{t_2} \vec{F}_m \cdot d\vec{r} = \int_{t_1}^{t_2} (\vec{F}_m \cdot \vec{v})\,dt \equiv 0$$
   * **Work-Energy Theorem Invariant:**
     $$W_m = \Delta K = 0 \implies K = \frac{1}{2}m v^2 = \text{constant} \implies |\vec{v}| = v = \text{constant}$$
   * **Core Physical Law:** A static magnetic field **can never alter the kinetic energy or speed of a charged particle**; it can **only alter the direction of motion**.


---


## 2. Motion of a Charged Particle in a Uniform Magnetic Field


### 2.1 Perpendicular Launch ($\vec{v} \perp \vec{B}$): Uniform Circular Motion
When a charged particle of mass $m$ and charge $q$ is projected with speed $v$ in a plane perpendicular to a uniform magnetic field $\vec{B}$ ($\theta = 90^\circ$):
* The magnetic force has constant magnitude $F_m = q v B$ and always acts perpendicular to velocity $\vec{v}$, functioning as a pure centripetal force.
* **Equation of Motion:**
  $$\frac{m v^2}{R} = q v B$$
* **Radius of Circular Orbit (Gyroradius / Larmor Radius $R$):**
  $$\mathbf{Gyroradius:}\quad R = \frac{m v}{q B} = \frac{p}{q B} = \frac{\sqrt{2mK}}{q B} = \frac{\sqrt{2mqV}}{q B}$$
  where:
  * $p = m v$ = Linear momentum.
  * $K = \frac{p^2}{2m}$ = Kinetic energy.
  * $V$ = Accelerating potential difference through which the particle was accelerated from rest ($K = q V$).
* **Time Period of Revolution ($T$):**
  $$T = \frac{2\pi R}{v} = \frac{2\pi \left(\frac{m v}{q B}\right)}{v} = \frac{2\pi m}{q B}$$
* **Cyclotron Frequency ($f_c$) & Cyclotron Angular Frequency ($\omega_c$):**
  $$\omega_c = \frac{2\pi}{T} = \frac{q B}{m}, \quad f_c = \frac{1}{T} = \frac{q B}{2\pi m}$$
* **Crucial JEE Invariant:** The period $T$ and frequency $f_c$ are **completely independent of the particle's speed $v$, kinetic energy $K$, and orbit radius $R$**. Fast particles travel in large circles, while slow particles travel in small circles, completing each revolution in the exact same time.


### 2.2 Oblique Launch ($\vec{v}$ at Angle $\theta$ to $\vec{B}$): Helical Motion
When velocity $\vec{v}$ forms an arbitrary angle $\theta$ ($0^\circ < \theta < 90^\circ$) with the magnetic field vector $\vec{B}$:
* Resolve velocity into mutually orthogonal components:
  1. **Parallel Component ($v_\parallel = v\cos\theta$):** Directed along $\vec{B}$. Since $\vec{v}_\parallel \times \vec{B} = 0$, no magnetic force acts along this axis $\implies a_\parallel = 0$. The particle moves with **constant speed $v_\parallel$ along the field lines**.
  2. **Perpendicular Component ($v_\perp = v\sin\theta$):** Directed in the plane normal to $\vec{B}$. The magnetic force $F_m = q v_\perp B$ provides centripetal acceleration, producing **uniform circular motion of radius $R$**.
* **Radius of Helical Path:**
  $$R = \frac{m v_\perp}{q B} = \frac{m v \sin\theta}{q B}$$
* **Time Period of One Helix Turn:**
  $$T = \frac{2\pi m}{q B}$$
* **Pitch of the Helix ($p$):** The linear distance advanced by the charged particle along the direction of the magnetic field during one complete circular revolution:
  $$\mathbf{Pitch:}\quad p = v_\parallel T = (v\cos\theta)\left(\frac{2\pi m}{q B}\right) = \frac{2\pi m v \cos\theta}{q B}$$
* **Ratio of Pitch to Radius:**
  $$\frac{p}{R} = \frac{\frac{2\pi m v \cos\theta}{q B}}{\frac{m v \sin\theta}{q B}} = 2\pi \cot\theta$$


---


### 2.3 Visual Preservation: Circular & Helical Trajectories


![Circular and Helical Trajectories in Magnetic Fields](/media/charged_particle_circular_and_helical_trajectories.webp)
*Description: Two-panel kinematic diagram: (A) Uniform circular motion for perpendicular injection ($\vec{v} \perp \vec{B}$), showing inward magnetic Lorentz force $\vec{F}_m = q(\vec{v} \times \vec{B})$ providing exact centripetal acceleration, zero work performance ($W \equiv 0$), and speed/radius-independent cyclotron period $T = \frac{2\pi m}{qB}$; (B) Helical path for oblique velocity injection at angle $\theta$ to $\vec{B}$, illustrating velocity resolution into transverse circular component $v_\perp = v\sin\theta$ and longitudinal drift component $v_\parallel = v\cos\theta$, highlighting orbit radius $R$ and pitch $p = v_\parallel T$.*


---


## 3. Motion in Bounded Magnetic Fields


In JEE Advanced, magnetic fields are frequently restricted to geometric boundaries (slabs, half-spaces, cylindrical cavities).


### 3.1 Semi-Infinite Magnetic Field ($x \ge 0$)
Consider a uniform magnetic field $\vec{B} = -B\hat{k}$ (inward) occupying the half-space $x \ge 0$, with field-free space in $x < 0$.
* A positive charge $+q$ enters the boundary at $x = 0$ with velocity $\vec{v}$ at an angle $\alpha$ to the boundary normal (entry angle $\alpha$ with the $+x$ axis).
1. **Symmetry of Trajectory & Exit Angle:**
   * Inside $x \ge 0$, the particle executes a circular arc of radius $R = \frac{mv}{qB}$.
   * By geometrical symmetry, the particle re-emerges across the boundary into the field-free region ($x < 0$) at the **exact same angle $\alpha$ with the normal**:
     $$\alpha_{\text{exit}} \equiv \alpha_{\text{entry}}$$
2. **Angle of Deviation ($\delta$):**
   * If launched at angle $\alpha$ toward the boundary:
     $$\delta = 2\alpha \quad \text{or} \quad \delta = \pi - 2\alpha \quad (\text{depending on sign of charge})$$
3. **Time Spent in the Magnetic Field ($t_{\text{field}}$):**
   * Let $\theta_{\text{arc}}$ be the angle subtended by the circular arc at the orbit center:
     $$t_{\text{field}} = \frac{\theta_{\text{arc}}}{\omega_c} = \frac{m \theta_{\text{arc}}}{q B}$$
   * For entry at angle $\alpha$ where total subtended center angle is $(\pi - 2\alpha)$:
     $$t_{\text{field}} = \frac{(\pi - 2\alpha)m}{q B}$$
4. **Maximum Penetration Depth ($x_{\text{max}}$):**
   $$x_{\text{max}} = R(1 - \cos\alpha) \quad \text{or} \quad R(1 + \sin\alpha)$$


### 3.2 Finite Magnetic Slab of Thickness $d$
A magnetic field $\vec{B} = -B\hat{k}$ is confined between parallel planar boundaries $x = 0$ and $x = d$. A charged particle is projected normally into the slab at $x = 0$ ($v_x = v, v_y = 0$).
1. **Condition for Transmission (Penetration Through the Slab):**
   * The particle crosses the slab if the slab thickness is less than the orbit radius:
     $$d < R \implies d < \frac{m v}{q B}$$
2. **Deflection Angle ($\delta$):**
   * From orbit right-triangle geometry:
     $$\sin\delta = \frac{d}{R} = \frac{q B d}{m v}$$
3. **Transit Time Inside the Slab:**
   $$t = \frac{\delta}{\omega_c} = \frac{m\delta}{q B} = \frac{m}{q B}\arcsin\left(\frac{d}{R}\right)$$
4. **Lateral Displacement along $y$-axis ($y_{\text{shift}}$):**
   $$y_{\text{shift}} = R(1 - \cos\delta) = R\left(1 - \sqrt{1 - \frac{d^2}{R^2}}\right)$$
5. **Critical Thickness for Total Reflection ($d \ge R$):**
   * If $d \ge R$, the particle cannot emerge from the opposite face. It executes a complete semicircle of radius $R$ and returns to the entry side ($x < 0$) with reversed velocity.


---


### 3.3 Visual Preservation: Bounded Magnetic Fields


![Charged Particle in Bounded Fields and Deflection](/media/charged_particle_bounded_fields_and_deflection.webp)
*Description: Two-panel trajectory analysis: (A) Semi-infinite magnetic field half-space ($x \geq 0$) illustrating equal entry and exit angles $\alpha$, circular arc curvature, and maximum penetration depth $x_{\mathrm{max}}$; (B) Finite magnetic slab of thickness $d < R$ showing normal entry, angular deflection $\sin\delta = d/R$, lateral shift $y_{\mathrm{shift}} = R(1 - \cos\delta)$, and the critical total reflection threshold condition $d \geq R$.*


---


## 4. Motion in Combined $\vec{E}$ and $\vec{B}$ Fields


### 4.1 Collinear Fields ($\vec{E} \parallel \vec{B}$)
* Let both $\vec{E}$ and $\vec{B}$ point along the $+x$ axis. A charged particle is launched at angle $\theta$ to the $x$-axis.
* Transverse motion ($\perp x$): Pure circular motion of constant radius $R = \frac{m v\sin\theta}{q B}$ and period $T = \frac{2\pi m}{q B}$.
* Longitudinal motion ($\parallel x$): Accelerated uniformly by electric force:
  $$a_x = \frac{q E}{m}$$
  $$v_x(t) = v\cos\theta + \left(\frac{q E}{m}\right)t, \quad x(t) = (v\cos\theta)t + \frac{1}{2}\left(\frac{q E}{m}\right)t^2$$
* **Non-Uniform Helical Path:** The pitch increases continuously with time:
  $$p_n = x(n T) - x((n - 1)T)$$


### 4.2 Crossed Fields ($\vec{E} \perp \vec{B}$): Velocity Selector
* Let $\vec{E} = -E\hat{j}$ (downward) and $\vec{B} = -B\hat{k}$ (inward). A positive charge $+q$ enters along $+x$ with velocity $\vec{v} = v\hat{i}$.
* Electric force: $\vec{F}_e = q\vec{E} = -q E \hat{j}$ (downward).
* Magnetic force: $\vec{F}_m = q(\vec{v} \times \vec{B}) = q(v\hat{i} \times (-B\hat{k})) = +q v B \hat{j}$ (upward).
* **Zero Deflection Condition ($\vec{F}_{\text{net}} = 0$):**
  $$q E = q v B \implies \mathbf{Selector\ Speed:}\quad v = \frac{E}{B}$$
* Particles with speed $v = E/B$ pass straight through without deflection, regardless of their mass or charge!


### 4.3 The Cyclotron Accelerator
* Accelerates charged particles (protons, deuterons, $\alpha$-particles) to high kinetic energies.
* **Resonance Condition:** The oscillating electric field frequency across the gap between the two D-shaped chambers (Dees) must match the cyclotron frequency:
  $$f_{\text{osc}} = f_c = \frac{q B}{2\pi m}$$
* **Maximum Kinetic Energy:** Occurs when the orbit radius reaches the outer Dee radius $R_{\text{dee}}$:
  $$v_{\text{max}} = \frac{q B R_{\text{dee}}}{m} \implies \mathbf{K_{\text{max}}} = \frac{1}{2}m v_{\text{max}}^2 = \frac{q^2 B^2 R_{\text{dee}}^2}{2m}$$
* **Relativistic Limitation:** At very high speeds ($v \to c$), relativistic mass increases:
  $$m = \frac{m_0}{\sqrt{1 - v^2/c^2}}$$
  The cyclotron period $T = \frac{2\pi m}{q B}$ increases, causing the particle to fall out of resonance with the fixed-frequency electric oscillator. (Electrons cannot be accelerated in cyclotrons due to their tiny mass causing rapid relativistic onset; betatrons or synchrotrons are used instead).


---


## 5. Magnetic Force on Current-Carrying Conductors


### 5.1 Microscopic Derivation
* Consider a conducting wire carrying steady current $I$. Within an elemental length $d\vec{l}$, free conduction electrons of charge $-e$ drift with speed $\vec{v}_d$:
  $$I = n e A v_d$$
* Total number of conduction electrons in volume element $A\,dl$: $dN = n A\,dl$.
* Magnetic force on the element:
  $$d\vec{F} = dN [-e (\vec{v}_d \times \vec{B})] = (n A\,dl)[-e (\vec{v}_d \times \vec{B})]$$
  Since current direction is opposite to electron drift: $(n e A v_d) d\vec{l} = I d\vec{l}$.
  $$\mathbf{Biot\text{-}Laplace\ Conductor\ Force:}\quad d\vec{F} = I(d\vec{l} \times \vec{B})$$


### 5.2 The Vector Effective Length Theorem (Uniform $\vec{B}$)
* For an arbitrary curved wire carrying current $I$ connecting initial point $A$ to final point $B$ in a **spatially uniform magnetic field** $\vec{B}$:
  $$\vec{F}_{\text{net}} = \int_A^B d\vec{F} = \int_A^B I(d\vec{l} \times \vec{B}) = I \left( \int_A^B d\vec{l} \right) \times \vec{B}$$
* Since the line integral of displacement vectors is simply the straight-line displacement vector $\vec{L}_{\text{eff}} = \vec{r}_B - \vec{r}_A$:
  $$\mathbf{Effective\ Length\ Theorem:}\quad \vec{F}_{\text{net}} = I(\vec{L}_{\text{eff}} \times \vec{B})$$
* **High-Yield Canonical Corollaries:**
  1. **Semicircular Conducting Wire:** A semicircular wire of radius $R$ carrying current $I$ in a uniform perpendicular field $B$:
     $$\vec{L}_{\text{eff}} = 2R\hat{i} \implies F_{\text{net}} = 2 I R B$$
     The net magnetic force is identical to that on a straight wire connecting its ends.
  2. **Closed Current Loop of Any Shape:** For any closed loop in a uniform magnetic field:
     $$\vec{L}_{\text{eff}} = \oint d\vec{l} \equiv 0 \implies \mathbf{\vec{F}_{\text{net}} \equiv 0}$$
     **Every closed planar or non-planar current loop in a uniform magnetic field experiences zero net magnetic translation force.** (Net torque, however, may be non-zero).
  3. **Point of Application of Magnetic Force:** For a straight rigid conductor in a uniform field, the resultant magnetic force acts through the **geometric center (midpoint)** of the conductor.


---


### 5.3 Visual Preservation: Magnetic Force on Conductors & MCG


![Magnetic Force on Conductors and Effective Length](/media/magnetic_force_conductors_and_effective_length.webp)
*Description: Two-panel diagnostic electrodynamic illustration: (A) Vector effective length theorem demonstrating that an arbitrary curved conductor carrying current $I$ experiences net magnetic force $\vec{F}_{\mathrm{net}} = I(\vec{L}_{\mathrm{eff}} \times \vec{B})$ identical to a straight vector displacement wire $\vec{L}_{\mathrm{eff}} = \vec{r}_B - \vec{r}_A$, alongside the zero net force invariant for closed loops; (B) Magnetic torque on planar current loops ($\vec{\tau} = \vec{M} \times \vec{B}$) and radial field architecture of the Moving Coil Galvanometer (MCG).*


---


## 6. Magnetic Torque on Current Loops & Galvanometer Analytics


### 6.1 Magnetic Dipole Moment & Torque
* **Magnetic Dipole Moment ($\vec{M}$):** A planar loop of $N$ turns carrying current $I$ and enclosing area $A$:
  $$\vec{M} = N I \vec{A}$$
  Direction of area vector $\vec{A}$ is determined by the right-hand curl rule along the current.
* **Magnetic Torque ($\vec{\tau}$):**
  $$\vec{\tau} = \vec{M} \times \vec{B} = N I (\vec{A} \times \vec{B})$$
  * Magnitude: $\tau = M B \sin\theta = N I A B \sin\theta$ (where $\theta$ is the angle between magnetic moment $\vec{M}$ and field $\vec{B}$).
* **Potential Energy of Magnetic Dipole:**
  $$U = -\vec{M} \cdot \vec{B} = -M B \cos\theta$$
  * **Stable Equilibrium:** $\theta = 0^\circ \implies \vec{\tau} = 0, U_{\text{min}} = -MB$.
  * **Unstable Equilibrium:** $\theta = 180^\circ \implies \vec{\tau} = 0, U_{\text{max}} = +MB$.
  * **Work Done to Rotate Dipole from $\theta_1$ to $\theta_2$:**
    $$W_{\text{ext}} = U(\theta_2) - U(\theta_1) = -MB(\cos\theta_2 - \cos\theta_1) = MB(\cos\theta_1 - \cos\theta_2)$$


### 6.2 The Moving Coil Galvanometer (MCG)
* **Radial Magnetic Field Design:** Formed by combining cylindrical concave magnetic pole pieces with a soft iron core. This ensures that the plane of the coil is always parallel to the magnetic field lines ($\theta = 90^\circ$) for any angular deflection $\phi$.
* **Torque Balance:**
  * Deflecting magnetic torque: $\tau_d = N I A B$.
  * Restoring torsional spring torque: $\tau_r = C \phi$ (where $C$ is the torsional restoring couple per unit twist of the suspension phosphor-bronze strip).
  * At deflection equilibrium:
    $$\tau_d = \tau_r \implies N I A B = C \phi \implies \mathbf{\phi} = \left(\frac{N A B}{C}\right) I$$
* **Current Sensitivity ($S_i$):**
  $$S_i = \frac{\phi}{I} = \frac{N A B}{C} \quad (\text{rad/A})$$
* **Voltage Sensitivity ($S_v$):**
  $$S_v = \frac{\phi}{V} = \frac{\phi}{I R_g} = \frac{N A B}{C R_g} = \frac{S_i}{R_g} \quad (\text{rad/V})$$
  *(Note: Increasing the number of turns $N$ doubles $S_i$, but also doubles coil resistance $R_g$, leaving voltage sensitivity $S_v$ invariant).*


### 6.3 Meter Conversions
1. **Conversion into Ammeter:** To measure a maximum current $I$, a small shunt resistance $S$ is connected in **parallel** with the galvanometer of resistance $R_g$:
   $$S (I - I_g) = I_g R_g \implies \mathbf{Shunt:}\quad S = \frac{I_g R_g}{I - I_g} \approx \frac{I_g R_g}{I} \quad (\text{for } I \gg I_g)$$
2. **Conversion into Voltmeter:** To measure a maximum voltage $V$, a large multiplier resistance $R$ is connected in **series** with the galvanometer:
   $$V = I_g (R_g + R) \implies \mathbf{Series\ Resistance:}\quad R = \frac{V}{I_g} - R_g$$


---


## 7. High-Yield JEE Problem Archetypes & Traps


### Archetype 1: Specific Charge Comparison in Circular Trajectory
* **Problem:** An electron ($e^-$), proton ($p^+$), deuteron ($d^+$), and alpha particle ($\alpha^{2+}$) are accelerated through the same potential difference $V$ and projected into a uniform perpendicular magnetic field $B$. Compare their orbit radii.
* **Solution:**
  * Orbit radius formula: $R = \frac{\sqrt{2mqV}}{qB} = \frac{1}{B}\sqrt{2V}\sqrt{\frac{m}{q}}$.
  * Thus: $R \propto \sqrt{\frac{m}{q}}$.
  * Compare ratios:
    * Electron: $\sqrt{\frac{m_e}{e}} \to \text{negligibly small}$.
    * Proton ($m, e$): $\sqrt{\frac{m}{e}} = 1$.
    * Deuteron ($2m, e$): $\sqrt{\frac{2m}{e}} = \sqrt{2} \approx 1.414$.
    * Alpha ($4m, 2e$): $\sqrt{\frac{4m}{2e}} = \sqrt{2} \approx 1.414$.
  * Invariant: **Deuteron and Alpha particle have identical orbit radii ($R_d = R_\alpha$)**.
  * Complete order: $R_e \ll R_p < R_d = R_\alpha$.


### Archetype 2: Conductor Sliding on Rails with Friction
* **Problem:** A metallic wire of mass $m$ and length $l$ rests on horizontal parallel rails separated by distance $l$ in a vertical upward magnetic field $B$. A steady current $I$ is passed through the wire. The coefficient of friction between rails and wire is $\mu$. Find the condition for sliding and the acceleration if current is doubled.
* **Solution:**
  * Magnetic force on wire: $F_m = I l B$ (directed horizontally).
  * Limiting static friction: $f_{\text{max}} = \mu m g$.
  * Condition for sliding: $F_m > f_{\text{max}} \implies I l B > \mu m g \implies I_{\text{min}} = \frac{\mu m g}{l B}$.
  * If current is $2 I_{\text{min}}$, net force is $F_{\text{net}} = 2\mu mg - \mu mg = \mu mg \implies a = \mu g$.


### Archetype 3: Neutralization of Gravity by Magnetic Force
* **Problem:** A horizontal copper rod of mass $m$ and length $L$ carries current $I$. Find the magnitude and direction of the minimum magnetic field $B$ required to suspend the rod against gravity.
* **Solution:**
  * For magnetic force to oppose gravity vertically upward:
    $$F_m = I L B \sin\theta = m g$$
  * $B$ is minimum when $\sin\theta = 1$ ($\vec{B} \perp$ rod):
    $$B_{\text{min}} = \frac{m g}{I L}$$
  * By the right-hand rule, if current flows eastward, $\vec{B}$ must point northward to produce an upward magnetic force.