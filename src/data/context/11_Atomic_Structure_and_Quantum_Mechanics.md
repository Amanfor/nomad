Chemistry Revision Context: Chapter 11 — Atomic Structure & Quantum Mechanics

________________

1. Atomic Models & Historical Evolution

1.1 Rutherford Nuclear Model & Limitations

- Rutherford's $\alpha$-particle scattering experiment established that:
   - The positive charge and almost the entire mass of an atom are concentrated in an extremely small central core called the nucleus (radius $\sim 10^{-15}\text{ m} = 1\text{ fm}$, compared to atomic radius $\sim 10^{-10}\text{ m} = 1\text{ \AA}$).
   - Number of scattered $\alpha$-particles at angle $\theta$: $$N(\theta) \propto \frac{1}{\sin^4(\theta/2)}$$
   - Distance of Closest Approach ($r_0$): $$r_0 = \frac{2 Z e^2}{4\pi\varepsilon_0 K_\alpha} = \frac{4 k Z e^2}{m_\alpha v^2}$$
- Critical Drawbacks:
   1. Classical Electrodynamic Instability: Accelerated charges must radiate energy (Maxwell-Larmor theorem), meaning orbital electrons would spiral inwards and collapse into the nucleus within $\sim 10^{-8}\text{ s}$.
   2. Discontinuous Spectra: Unable to explain discrete line emission spectra of atomic hydrogen.

1.2 Planck’s Quantum Theory

- Radiant energy is emitted or absorbed discontinuously in discrete packets of energy called quanta (or photons): $$E = h\nu = \frac{hc}{\lambda} = hc\bar{\nu}$$
   - $h = 6.626 \times 10^{-34}\text{ J}\cdot\text{s} = 4.136 \times 10^{-15}\text{ eV}\cdot\text{s}$
   - Shortcut: $hc \approx 12400\text{ eV}\cdot\text{\AA}$
- Total energy emitted or absorbed: $E_{total} = n h\nu$ where $n \in \mathbb{N}$ (quantization of energy).

________________

2. Bohr’s Atomic Model of Single-Electron Systems

2.1 Fundamental Postulates

3. Circular Stationary Orbits: An electron orbits the nucleus in fixed circular paths without radiating electromagnetic energy.
4. Angular Momentum Quantization: Permitted orbits satisfy the condition that orbital angular momentum is an integral multiple of $\frac{h}{2\pi}$: $$L = mvr = \frac{nh}{2\pi} = n\hbar \quad (n = 1, 2, 3, \dots)$$
5. Energy Transition Condition: Radiation is emitted or absorbed only when an electron jumps between stationary states: $$\Delta E = E_{n_2} - E_{n_1} = h\nu = \frac{hc}{\lambda}$$

2.2 Quantitative Formulae for Hydrogenic Species ($Z = 1$ for $\text{H}$, $2$ for $\text{He}^+$, $3$ for $\text{Li}^{2+}$)

- Orbital Radius ($r_n$): $$r_n = \frac{n^2 h^2}{4\pi^2 m k Z e^2} = 0.529 \frac{n^2}{Z}\text{ \AA} \quad (r_n \propto \frac{n^2}{Z})$$
- Orbital Velocity ($v_n$): $$v_n = \frac{2\pi k Z e^2}{nh} = 2.18 \times 10^6 \frac{Z}{n}\text{ m/s} \approx \frac{c}{137}\frac{Z}{n} \quad (v_n \propto \frac{Z}{n})$$
- Orbital Energy Expressions:
   - Kinetic Energy: $K_n = \frac{1}{2}m v_n^2 = \frac{k Z e^2}{2 r_n} = +13.6 \frac{Z^2}{n^2}\text{ eV}$
   - Potential Energy: $U_n = -\frac{k Z e^2}{r_n} = -27.2 \frac{Z^2}{n^2}\text{ eV}$
   - Total Energy: $E_n = K_n + U_n = -13.6 \frac{Z^2}{n^2}\text{ eV} = -\frac{1312}{n^2} Z^2\text{ kJ/mol}$
   - Universal Relations: $$E_n = -K_n = \frac{U_n}{2}$$

2.3 Hydrogen Spectral Series & Rydberg Relation

- Wave number ($\bar{\nu}$) of emitted radiation during transition $n_2 \to n_1$ ($n_2 > n_1$): $$\bar{\nu} = \frac{1}{\lambda} = R Z^2 \left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$$
   - Rydberg constant: $R = \frac{2\pi^2 m k^2 e^4}{c h^3} \approx 1.097 \times 10^7\text{ m}^{-1} \implies \frac{1}{R} \approx 912\text{ \AA}$
- Transitions Classification:
   - Lyman Series ($n_1 = 1, n_2 = 2, 3\dots$): Ultraviolet (UV) region
   - Balmer Series ($n_1 = 2, n_2 = 3, 4\dots$): Visible region ($H_\alpha, H_\beta, H_\gamma, H_\delta$)
   - Paschen Series ($n_1 = 3, n_2 = 4, 5\dots$): Near Infrared (IR) region
   - Brackett Series ($n_1 = 4, n_2 = 5, 6\dots$): Infrared (IR) region
   - Pfund Series ($n_1 = 5, n_2 = 6, 7\dots$): Far Infrared (IR) region

________________

6. Wave-Particle Duality & Heisenberg Uncertainty Principle

3.1 de Broglie Relation

- Material particles exhibit wave-like characteristics with wavelength: $$\lambda = \frac{h}{p} = \frac{h}{mv} = \frac{h}{\sqrt{2mK}}$$
- For an electron accelerated through potential difference $V$: $$\lambda_e = \frac{h}{\sqrt{2m_e e V}} = \frac{12.27}{\sqrt{V}}\text{ \AA} = \sqrt{\frac{150}{V}}\text{ \AA}$$
- Circumference Quantization: Bohr's angular momentum condition arises naturally as stationary matter waves: $$2\pi r_n = n\lambda \implies 2\pi r_n = n\left(\frac{h}{m v_n}\right) \implies m v_n r_n = \frac{nh}{2\pi}$$

3.2 Heisenberg's Uncertainty Principle

- It is impossible to determine simultaneously both the exact position and exact momentum of a microscopic subatomic particle with arbitrary accuracy: $$\Delta x \cdot \Delta p \ge \frac{h}{4\pi} = \frac{\hbar}{2}$$ $$\Delta x \cdot \Delta v \ge \frac{h}{4\pi m}$$
- Conjugate Variables Uncertainty:
   - Energy and Time: $\Delta E \cdot \Delta t \ge \frac{h}{4\pi}$
   - Angular Momentum and Angle: $\Delta L \cdot \Delta \theta \ge \frac{h}{4\pi}$

3.3 Visual Preservation: Heisenberg Wavepacket Representation

 Description: Localized wavepacket representation demonstrating the fundamental physical trade-off between spatial localization (position uncertainty $\Delta x$) and wavelength/momentum dispersion ($\Delta p$) dictated by Heisenberg's uncertainty principle.

________________

7. Quantum Mechanical Model & Schrödinger Equation

4.1 Time-Independent Schrödinger Wave Equation

- The fundamental equation governing the spatial distribution of a matter wave: $$\nabla^2 \Psi + \frac{8\pi^2 m}{h^2}(E - V)\Psi = 0$$ $$\frac{\partial^2 \Psi}{\partial x^2} + \frac{\partial^2 \Psi}{\partial y^2} + \frac{\partial^2 \Psi}{\partial z^2} + \frac{8\pi^2 m}{h^2}\big(E - V(x,y,z)\big)\Psi = 0$$
   - $\Psi$: Wavefunction (orbital state vector, probability amplitude).
   - $|\Psi|^2$: Probability density of finding an electron in an infinitesimal volume element $dV$.

4.2 Separation of Variables & Radial Wavefunctions

- In spherical coordinates $(r, \theta, \phi)$: $$\Psi(r, \theta, \phi) = R(r) \cdot \Theta(\theta) \cdot \Phi(\phi) = R_{n,l}(r) \cdot Y_{l,m}(\theta, \phi)$$
   - $R_{n,l}(r)$: Radial wavefunction (determines energy, orbital size, and radial nodes).
   - $Y_{l,m}(\theta, \phi)$: Angular wavefunction (determines orbital geometry, symmetry, and angular nodes).
- Radial Probability Density Function: $$P(r) = 4\pi r^2 R^2(r)$$
   - Represents the total probability of finding an electron inside a spherical shell of radius $r$ and thickness $dr$.

4.3 Node Distribution Laws

- Radial Nodes (Spherical nodes where $R(r) = 0$): $$\text{Radial Nodes} = n - l - 1$$
- Angular Nodes (Nodal planes/cones where $Y(\theta, \phi) = 0$): $$\text{Angular Nodes} = l$$
- Total Nodes: $$\text{Total Nodes} = (n - l - 1) + l = n - 1$$

4.4 Visual Preservation: Radial Probability Distribution

 Description: Radial probability distribution curves $4\pi r^2 R^2(r)$ plotted against normalized radius $r/a_0$ for $1s$ ($0$ nodes), $2s$ ($1$ radial node at $r = 2a_0$), and $2p$ ($0$ radial nodes) atomic orbitals, showing peak probability shifts with principal and azimuthal quantum numbers.

________________

8. Quantum Numbers & Electronic Orbital Architecture

5.1 The Four Quantum Numbers

9. Principal Quantum Number ($n$):
   - Values: $n = 1, 2, 3, 4\dots$ (Shells $K, L, M, N\dots$)
   - Determines: Primary energy level, orbital size, maximum electrons per shell ($2n^2$), and maximum orbitals ($n^2$).
10. Azimuthal (Orbital Angular Momentum) Quantum Number ($l$):
   - Values: $l = 0, 1, 2, \dots, (n - 1)$ (Subshells $s, p, d, f$)
   - Determines: 3D spatial shape of subshell and orbital angular momentum: $$L_{orb} = \sqrt{l(l+1)}\frac{h}{2\pi} = \sqrt{l(l+1)}\hbar$$ (Note: All $s$-orbitals have $L_{orb} = 0$).
11. Magnetic Quantum Number ($m_l$ or $m$):
   - Values: $m_l = -l, \dots, 0, \dots, +l$ (Total orientations $= 2l + 1$)
   - Determines: Spatial orientation of orbital in a magnetic field; determines orbital degeneracy.
12. Spin Quantum Number ($m_s$ or $s$):
   - Values: $m_s = +\frac{1}{2}$ (spin-up $\uparrow$) or $-\frac{1}{2}$ (spin-down $\downarrow$).
   - Determines: Intrinsic spin angular momentum: $$S = \sqrt{s(s+1)}\frac{h}{2\pi} = \frac{\sqrt{3}}{2}\hbar$$
   - Spin-Only Magnetic Moment: $$\mu_s = \sqrt{n(n+2)}\text{ BM} \quad \text{where } n = \text{number of unpaired electrons, } \text{BM} = \text{Bohr Magneton}$$

________________

13. Rules for Filling of Electrons in Orbitals

6.1 Aufbau Principle & $(n + l)$ Rule

- Orbitals are filled in increasing order of their energy:
   - An orbital with a lower $(n + l)$ value has lower energy and fills first.
   - If two orbitals possess identical $(n + l)$ values, the orbital with the lower principal quantum number $n$ has lower energy and fills first (e.g., $3d$ has $n+l = 3+2=5$; $4p$ has $n+l = 4+1=5 \implies 3d$ fills before $4p$).
- Standard Energy Sequence: $$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s$$

6.2 Visual Preservation: Aufbau Ordering Diagonal Rule

 Description: Diagonal filling chart demonstrating the Aufbau $(n + l)$ priority ordering for ground-state atomic electronic configuration from $1s$ up to $7p$.

6.3 Pauli’s Exclusion Principle

- No two electrons in the same atom can possess identical values for all four quantum numbers ($n, l, m_l, m_s$).
- Direct Consequence: An individual orbital can hold a maximum of 2 electrons, which must have opposite (antiparallel) spins.

6.4 Hund’s Rule of Maximum Multiplicity

- Pairing of electrons in degenerate orbitals belonging to the same subshell ($p, d, f$) cannot occur until each orbital is singly occupied with parallel spins.
- Maximizes total spin $S$ and exchange energy, minimizing electrostatic repulsion.

6.5 Anomalous Configurations via Exchange Energy

- Chromium ($Z = 24$): $[Ar] 3d^5 4s^1$ (instead of $[Ar] 3d^4 4s^2$)
- Copper ($Z = 29$): $[Ar] 3d^{10} 4s^1$ (instead of $[Ar] 3d^9 4s^2$)
- Half-filled ($d^5$) and fully-filled ($d^{10}$) configurations possess extra thermodynamic stability due to:
   1. Symmetrical spatial charge distribution.
   2. Maximum exchange energy: $$K_{exchange} = \binom{n_{parallel}}{2} \cdot K = \frac{n(n-1)}{2} K$$

________________

14. High-Yield JEE Problem Archetypes & Formulas

- Archetype 1: Radial and Angular Node Calculations

   - For $4d$ orbital: $n = 4, l = 2$ $$\text{Radial nodes} = n - l - 1 = 4 - 2 - 1 = 1$$ $$\text{Angular nodes} = l = 2$$ $$\text{Total nodes} = n - 1 = 3$$
   - For $5f$ orbital: $n = 5, l = 3$ $$\text{Radial nodes} = 5 - 3 - 1 = 1, \quad \text{Angular nodes} = 3, \quad \text{Total nodes} = 4$$

- Archetype 2: Orbital Angular Momentum Comparison

   - For $2s$: $L = \sqrt{0(0+1)}\hbar = 0$
   - For $2p$: $L = \sqrt{1(1+1)}\hbar = \sqrt{2}\hbar = \frac{\sqrt{2}h}{2\pi} = \frac{h}{\sqrt{2}\pi}$
   - For $3d$: $L = \sqrt{2(2+1)}\hbar = \sqrt{6}\hbar$

- Archetype 3: Spin-Only Magnetic Moment

   - $\text{Fe}^{2+}$ ($3d^6 \implies n = 4$ unpaired electrons): $$\mu_s = \sqrt{4(4+2)} = \sqrt{24} \approx 4.90\text{ BM}$$
   - $\text{Mn}^{2+}$ ($3d^5 \implies n = 5$ unpaired electrons): $$\mu_s = \sqrt{5(5+2)} = \sqrt{35} \approx 5.92\text{ BM}$$
