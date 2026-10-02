Physics Revision Context: Chapter 12 — Kinetic Theory of Gases

________________

1. Postulates of Kinetic Theory & Kinetic Pressure

1.1 Microscopic Postulates of an Ideal Gas

- A gas consists of an extremely large number of identical, tiny, hard, elastic spherical particles called molecules.
- The volume occupied by the gas molecules themselves is negligibly small compared to the total volume occupied by the gas ($V_{molecules} \ll V_{container}$).
- Molecular collisions with each other and with container walls are completely elastic (kinetic energy and momentum are conserved).
- Intermolecular forces of attraction or repulsion between molecules are zero, except during the infinitesimal instant of collision (all internal energy is purely translational/rotational/vibrational kinetic energy, $U_{potential} = 0$).
- Molecules move continuously in random directions with all possible speeds according to Newton's laws of motion.
- The duration of a collision is negligible compared to the time interval between successive collisions.

1.2 Derivation of Kinetic Pressure

- Consider $N$ gas molecules of mass $m$ in a cubic container of side $L$ ($V = L^3$).
- When a molecule of velocity components $(v_x, v_y, v_z)$ rebounds elastically from a wall perpendicular to the $x$-axis: $$\Delta p_x = (-m v_x) - (m v_x) = -2 m v_x$$
   - Momentum transferred to the wall per collision $= 2 m v_x$.
   - Time between successive collisions with the same wall: $\Delta t = \frac{2L}{v_x}$.
   - Average force exerted on the wall: $$F_x = \frac{\Delta p}{\Delta t} = \frac{2 m v_x}{2L / v_x} = \frac{m v_x^2}{L}$$
- Summing over all $N$ molecules and noting isotropy ($\overline{v_x^2} = \overline{v_y^2} = \overline{v_z^2} = \frac{1}{3} v_{rms}^2$): $$P = \frac{\sum F_x}{L^2} = \frac{m}{L^3}\sum v_x^2 = \frac{m N}{V}\left(\frac{1}{3} v_{rms}^2\right)$$
- Master Pressure Formula: $$P = \frac{1}{3} \rho v_{rms}^2 = \frac{1}{3} \frac{M_{total}}{V} v_{rms}^2$$

1.3 Kinetic Interpretation of Temperature

- Using the ideal gas equation $PV = nRT = \left(\frac{N}{N_A}\right)RT = N k_B T$: $$P V = \frac{1}{3} N m v_{rms}^2 = N k_B T \implies \frac{1}{2} m v_{rms}^2 = \frac{3}{2} k_B T$$
- Mean Translational Kinetic Energy per Molecule: $$\bar{E}{trans} = \frac{1}{2} m v{rms}^2 = \frac{3}{2} k_B T$$
   - Depends solely on absolute temperature $T$; independent of pressure, volume, or gas species.
- Total Translational Kinetic Energy per Mole ($N = N_A$): $$E_{mole} = \frac{3}{2} N_A k_B T = \frac{3}{2} R T$$
- Total Kinetic Energy of $n$ Moles: $$E = \frac{3}{2} n R T = \frac{3}{2} P V$$

________________

2. Molecular Speeds & Maxwell-Boltzmann Distribution

2.1 Maxwell-Boltzmann Speed Distribution Law

- The fraction of molecules having speeds between $v$ and $v + dv$ at absolute temperature $T$: $$P(v) dv = 4\pi \left(\frac{M}{2\pi R T}\right)^{3/2} v^2 e^{-\frac{M v^2}{2RT}} dv$$
   - Distribution is asymmetric with an exponential tail towards higher speeds.
   - As temperature increases ($T_1 \to T_2$ where $T_2 > T_1$), the peak shifts towards higher speeds, and the curve broadens and flattens out while preserving total area $\int_0^\infty P(v) dv = 1$.

2.2 The Three Characteristic Speeds

3. Most Probable Speed ($v_{mp}$): The speed possessed by the maximum fraction of molecules (peak of distribution curve): $$\left.\frac{dP(v)}{dv}\right|{v{mp}} = 0 \implies v_{mp} = \sqrt{\frac{2RT}{M}} = \sqrt{\frac{2k_B T}{m}} = \sqrt{\frac{2P}{\rho}}$$
4. Average (Mean) Speed ($v_{avg}$ or $\bar{v}$): Arithmetic mean of all molecular speeds: $$v_{avg} = \int_0^\infty v P(v) dv = \sqrt{\frac{8RT}{\pi M}} = \sqrt{\frac{8k_B T}{\pi m}} = \sqrt{\frac{8P}{\pi \rho}} \approx 1.595 \sqrt{\frac{RT}{M}}$$
5. Root Mean Square Speed ($v_{rms}$): Square root of the mean squared speeds (directly related to gas pressure and temperature): $$v_{rms} = \sqrt{\overline{v^2}} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3k_B T}{m}} = \sqrt{\frac{3P}{\rho}} \approx 1.732 \sqrt{\frac{RT}{M}}$$

2.3 Speed Ratios & Invariant Order

- Universal Ordering: $$v_{mp} < v_{avg} < v_{rms}$$
- Exact Mathematical Ratios: $$v_{mp} : v_{avg} : v_{rms} = \sqrt{2} : \sqrt{\frac{8}{\pi}} : \sqrt{3} \approx 1 : 1.128 : 1.224$$ $$v_{avg} \approx 0.921 v_{rms}, \quad v_{mp} \approx 0.816 v_{rms}$$

2.4 Visual Preservation: Maxwell-Boltzmann Distribution

 Description: Maxwell-Boltzmann molecular speed distribution curves illustrating probability density $P(v)$ versus molecular velocity $v$, highlighting the relative positions of most probable speed ($v_{mp}$), average speed ($v_{avg}$), and root mean square speed ($v_{rms}$), as well as the flattening and rightward shift under temperature elevation ($T_1 = 300\text{ K} \to T_2 = 600\text{ K}$).

________________

6. Degrees of Freedom & Law of Equipartition of Energy

3.1 Concept of Degrees of Freedom ($f$)

- The total number of independent coordinates or quadratic energy terms required to completely specify the position and configuration of a dynamical system.

3.2 Classification by Molecular Atomicity

7. Monatomic Gas ($\text{He}, \text{Ne}, \text{Ar}$):
   - Only translational motion along $x, y, z$ axes.
   - Rotational inertia about center of mass is negligible ($I \approx 0$).
   - Total Degrees of Freedom: $f = 3$ (Translational: 3, Rotational: 0, Vibrational: 0).
8. Diatomic Gas ($\text{H}_2, \text{O}_2, \text{N}_2, \text{CO}$):
   - At Ordinary Temperatures (Rigid Rotator):
      - 3 translational + 2 rotational (about axes perpendicular to internuclear bond axis).
      - Total: $f = 5$ (Trans: 3, Rot: 2).
   - At High Temperatures ($\gtrsim 1000\text{ K}$, Vibrations Active):
      - Adds 1 vibrational mode with 2 quadratic terms (kinetic + potential energy).
      - Total: $f = 5 + 2 = 7$.
9. Triatomic / Polyatomic Non-Linear Gas ($\text{H}_2\text{O}, \text{NH}_3, \text{CH}_4$):
   - 3 translational + 3 rotational (about 3 mutually perpendicular axes).
   - Total: $f = 6$ (Trans: 3, Rot: 3).
10. Triatomic Linear Gas ($\text{CO}_2, \text{BeCl}_2$):
   - Acts dynamically like a diatomic molecule: $f = 5$ (Trans: 3, Rot: 2).

3.3 Visual Preservation: Degrees of Freedom Representation

 Description: Structural diagram of a rigid diatomic molecule displaying its 5 fundamental classical degrees of freedom: 3 independent translational vectors ($T_x, T_y, T_z$) and 2 orthogonal rotational axes ($\omega_y, \omega_z$), with negligible rotation along the internuclear bond axis.

3.4 Law of Equipartition of Energy

- In thermal equilibrium at absolute temperature $T$, the total energy of a gas is distributed equally among all its degrees of freedom.
- Average Energy per Degree of Freedom per Molecule: $$\epsilon = \frac{1}{2} k_B T$$
- Average Energy per Molecule: $$E_{molecule} = \frac{f}{2} k_B T$$
- Total Internal Energy of 1 Mole: $$U_{mole} = \frac{f}{2} R T$$
- Total Internal Energy of $n$ Moles: $$U = \frac{f}{2} n R T$$

________________

11. Molar Specific Heats ($C_v, C_p$) & Adiabatic Ratio ($\gamma$)

4.1 Derivation from Equipartition

- Molar Heat Capacity at Constant Volume ($C_v$): $$C_v = \left(\frac{dU_{mole}}{dT}\right)_v = \frac{d}{dT}\left(\frac{f}{2} R T\right) = \frac{f}{2} R$$
- Mayer's Formula: $$C_p - C_v = R \implies C_p = C_v + R = \left(\frac{f}{2} + 1\right) R$$
- Adiabatic Exponent (Poisson's Ratio $\gamma$): $$\gamma = \frac{C_p}{C_v} = \frac{\left(\frac{f}{2} + 1\right)R}{\frac{f}{2} R} = 1 + \frac{2}{f}$$

4.2 Specific Heat Summary Table across Gas Geometries

Gas Atomicity
  Degrees of Freedom ($f$)
  $C_v$
  $C_p$
  $\gamma = C_p / C_v$
  Monatomic ($\text{He}, \text{Ar}$)
  3
  $\frac{3}{2}R$
  $\frac{5}{2}R$
  $\frac{5}{3} \approx 1.67$
  Diatomic (Rigid) ($\text{O}_2, \text{N}_2$)
  5
  $\frac{5}{2}R$
  $\frac{7}{2}R$
  $\frac{7}{5} = 1.40$
  Diatomic (Vibrating)
  7
  $\frac{7}{2}R$
  $\frac{9}{2}R$
  $\frac{9}{7} \approx 1.29$
  Non-Linear Polyatomic ($\text{H}_2\text{O}$)
  6
  $3R$
  $4R$
  $\frac{4}{3} \approx 1.33$

4.3 Mixtures of Non-Reacting Gases

- For a mixture of $n_1$ moles of gas 1 ($C_{v1}, \gamma_1$) and $n_2$ moles of gas 2 ($C_{v2}, \gamma_2$):
   - Total Moles: $n_{tot} = n_1 + n_2$
   - Equivalent Molar Mass: $$M_{mix} = \frac{n_1 M_1 + n_2 M_2}{n_1 + n_2}$$
   - Equivalent Specific Heat at Constant Volume: $$(C_v){mix} = \frac{n_1 C{v1} + n_2 C_{v2}}{n_1 + n_2}$$
   - Equivalent Specific Heat at Constant Pressure: $$(C_p){mix} = (C_v){mix} + R = \frac{n_1 C_{p1} + n_2 C_{p2}}{n_1 + n_2}$$
   - Equivalent Adiabatic Exponent ($\gamma_{mix}$): $$\frac{n_1 + n_2}{\gamma_{mix} - 1} = \frac{n_1}{\gamma_1 - 1} + \frac{n_2}{\gamma_2 - 1} \implies \gamma_{mix} = \frac{(C_p){mix}}{(C_v){mix}}$$

________________

12. Mean Free Path & Collision Dynamics

5.1 Definition & Mathematical Derivation

- Mean Free Path ($\lambda$): The average distance traversed by a gas molecule between two consecutive collisions.
- Consider a molecule of diameter $d$ moving at speed $v$ through a gas of number density $n_V = \frac{N}{V}$.
- In time $\Delta t$, the molecule sweeps out a collision cylinder of cross-sectional area $\sigma = \pi d^2$ and length $v \Delta t$: $$\text{Volume of cylinder} = \pi d^2 v \Delta t$$ $$\text{Number of collisions} = \pi d^2 v \Delta t \cdot n_V$$
- Accounting for relative velocities among all moving molecules ($\bar{v}_{rel} = \sqrt{2} \bar{v}$): $$\text{Effective collision frequency } Z = \sqrt{2} \pi d^2 v n_V$$
- Formula for Mean Free Path ($\lambda$): $$\lambda = \frac{v \Delta t}{\text{Collisions}} = \frac{1}{\sqrt{2} \pi d^2 n_V}$$
- In terms of pressure and temperature ($n_V = \frac{P}{k_B T}$): $$\lambda = \frac{k_B T}{\sqrt{2} \pi d^2 P}$$

5.2 Dependences of Mean Free Path

13. At constant pressure ($P = \text{const}$): $\lambda \propto T$ (thermal expansion increases separation).
14. At constant temperature ($T = \text{const}$): $\lambda \propto \frac{1}{P}$ (compression decreases separation).
15. At constant volume ($V = \text{const} \implies n_V = \text{const}$): $\lambda = \text{constant}$ (independent of temperature and pressure changes).

5.3 Visual Preservation: Collision Cylinder Geometry

 Description: Geometrical schematic of the collision cylinder of cross-sectional diameter $2d$ and area $\sigma = \pi d^2$ swept out over trajectory length $v\Delta t$, illustrating the derivation of mean free path $\lambda = \frac{k_B T}{\sqrt{2}\pi d^2 P}$.

________________

16. High-Yield JEE Problem Archetypes & Formulas

- Archetype 1: Adiabatic Mixture of Monatomic and Diatomic Gases

   - Equal moles ($n_1 = n_2 = 1$): $$(C_v){mix} = \frac{\frac{3}{2}R + \frac{5}{2}R}{2} = 2R$$ $$(C_p){mix} = 2R + R = 3R$$ $$\gamma_{mix} = \frac{3R}{2R} = 1.50$$

- Archetype 2: Molecular Speed Scaling Under Temperature & Identity

   - Speed of gas molecules at $T_1$ equals speed of another gas at $T_2$: $$v_{rms} \propto \sqrt{\frac{T}{M}} \implies \frac{T_1}{M_1} = \frac{T_2}{M_2}$$
   - Example: $\text{O}2$ ($M = 32$) at $300\text{ K}$ has the same $v{rms}$ as $\text{H}_2$ ($M = 2$) at $T_2 = 300 \times \frac{2}{32} = 18.75\text{ K}$.

- Archetype 3: Mean Free Path Variations across Processes

   - Isothermal expansion ($V \to 2V$): $P \to P/2 \implies \lambda \to 2\lambda$ (doubles).
   - Isochoric heating ($T \to 2T$): $\lambda$ remains completely unchanged because molecular density $n_V = N/V$ is constant.
   - Isobaric heating ($T \to 2T$): $\lambda \to 2\lambda$ (doubles).
