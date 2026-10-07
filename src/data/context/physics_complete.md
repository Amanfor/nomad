# Physics Gyaan Sutra: Complete Formula & Theory Revision Compendium


**Source:** [Resonance_Gyaan_Sutra_Physics.pdf](https://drive.google.com/file/d/1_x4tc5OhzaE8M5Gv7G4BvZhrsbSht58B/view?usp=drivesdk)
**Target:** JEE Main & JEE Advanced Comprehensive Formula Repository
**Format:** Obsidian-Compatible Markdown with LaTeX Validation & Visual Diagrams (`![...](/media/...)`)


---


## Table of Contents
1. [Units, Dimensions & Errors](#1-units-dimensions--errors)
2. [Kinematics: Rectilinear, Projectile & Relative Motion](#2-kinematics-rectilinear-projectile--relative-motion)
3. [Newton's Laws of Motion & Friction](#3-newtons-laws-of-motion--friction)
4. [Work, Power & Energy](#4-work-power--energy)
5. [Circular Motion & Vertical Loops](#5-circular-motion--vertical-loops)
6. [Centre of Mass & Collisions](#6-centre-of-mass--collisions)
7. [Rigid Body Dynamics (Rotation)](#7-rigid-body-dynamics-rotation)
8. [Gravitation & Celestial Mechanics](#8-gravitation--celestial-mechanics)
9. [Fluid Mechanics & Properties of Matter](#9-fluid-mechanics--properties-of-matter)
10. [Thermal Physics, KTG & Thermodynamics](#10-thermal-physics-ktg--thermodynamics)
11. [Oscillations & Simple Harmonic Motion (SHM)](#11-oscillations--simple-harmonic-motion-shm)
12. [Waves: String Waves & Sound Waves](#12-waves-string-waves--sound-waves)
13. [Electrostatics](#13-electrostatics)
14. [Current Electricity](#14-current-electricity)
15. [Capacitance](#15-capacitance)
16. [Magnetism & Magnetic Force on Charges](#16-magnetism--magnetic-force-on-charges)
17. [Electromagnetic Induction (EMI)](#17-electromagnetic-induction-emi)
18. [Alternating Current (AC)](#18-alternating-current-ac)
19. [Electromagnetic Waves](#19-electromagnetic-waves)
20. [Geometrical Optics & Optical Instruments](#20-geometrical-optics--optical-instruments)
21. [Wave Optics & Interference](#21-wave-optics--interference)
22. [Modern Physics & Nuclear Physics](#22-modern-physics--nuclear-physics)
23. [Semiconductor Electronics & Digital Logic](#23-semiconductor-electronics--digital-logic)
24. [Communication Systems](#24-communication-systems)


---


## 1. Units, Dimensions & Errors


### 1.1 Fundamental Dimensions & Conversions
* **7 Fundamental SI Quantities:** Length ($[L]$), Mass ($[M]$), Time ($[T]$), Electric Current ($[A]$ or $[I]$), Thermodynamic Temperature ($[K]$), Amount of Substance ($[mol]$), Luminous Intensity ($[cd]$).
* **Key Derived Dimensions:**
  * Force: $[M L T^{-2}]$; Work/Energy: $[M L^2 T^{-2}]$; Power: $[M L^2 T^{-3}]$.
  * Pressure/Stress/Modulus of Elasticity: $[M L^{-1} T^{-2}]$.
  * Universal Gravitational Constant ($G$): $[M^{-1} L^3 T^{-2}]$.
  * Planck's Constant ($h$): $[M L^2 T^{-1}]$.
  * Permittivity of Free Space ($\epsilon_0$): $[M^{-1} L^{-3} T^4 A^2]$.
  * Permeability of Free Space ($\mu_0$): $[M L T^{-2} A^{-2}]$.


### 1.2 Errors & Measurement Instruments
* **Propagation of Errors ($Z =  rac{A^p B^q}{C^r}$):**
  $$ rac{\Delta Z}{Z} = p\left( rac{\Delta A}{A}
ight) + q\left( rac{\Delta B}{B}
ight) + r\left( rac{\Delta C}{C}
ight)$$
* **Vernier Callipers:** $        ext{Least Count (LC)} = 1        ext{ MSD} - 1        ext{ VSD} =  rac{1        ext{ MSD}}{N}$.
* **Screw Gauge:** $        ext{Least Count} =  rac{        ext{Pitch}}{        ext{Total Circular Scale Divisions}}$.


---


## 2. Kinematics: Rectilinear, Projectile & Relative Motion


![Physics Mechanics And Rotational Dynamics](/media/physics_mechanics_and_rotational_dynamics.webp)
*Description: Two-panel mechanics reference: (Panel A) Trajectory parabola of projectile motion with range, maximum height, and vertex coordinates; (Panel B) Rotational dynamics, moment of inertia theorems, and pure rolling acceleration down an incline.*


### 2.1 Rectilinear Motion
* Constant acceleration kinematic equations:
  $$v = u + at, \quad s = ut +  rac{1}{2}at^2, \quad v^2 = u^2 + 2as, \quad s_n = u +  rac{a}{2}(2n - 1)$$
* Variable acceleration: $v =  rac{dx}{dt}, \quad a =  rac{dv}{dt} = v rac{dv}{dx}$.


### 2.2 Projectile Motion
* Time of Flight: $T =  rac{2u\sin        heta}{g}$; Maximum Height: $H =  rac{u^2\sin^2        heta}{2g}$.
* Horizontal Range: $R =  rac{u^2\sin 2        heta}{g}$. (Max range $R_{\max} =  rac{u^2}{g}$ at $        heta = 45^\circ$).
* **Trajectory Equation:**
  $$y = x        an        heta -  rac{gx^2}{2u^2\cos^2        heta} = x        an        heta\left(1 -  rac{x}{R}
ight)$$
* **Inclined Plane Projectile (Incline Angle $ eta$, Launch Angle $ lpha$ with incline):**
  $$T =  rac{2u\sin lpha}{g\cos eta}, \qquad R =  rac{u^2}{g\cos^2 eta}[\sin(2 lpha +  eta) - \sin eta]$$


### 2.3 Relative Motion
* Relative Velocity: $
ec{v}_{AB} = 
ec{v}_A - 
ec{v}_B$.
* **River-Swimmer Problems (River speed $v_R$, Swimmer speed relative to water $v_{mR}$):**
  * Shortest Time to Cross: Head directly across ($        heta = 90^\circ$ to flow): $t_{\min} =  rac{d}{v_{mR}}$, Drift $= v_R \cdot t_{\min}$.
  * Shortest Path (Zero Drift): Upstream angle $\sin        heta =  rac{v_R}{v_{mR}}$ (requires $v_{mR} > v_R$).


---


## 3. Newton's Laws of Motion & Friction


### 3.1 Force & Equilibrium
* Newton's 2nd Law: $
ec{F}_{        ext{net}} =  rac{d
ec{p}}{dt} = m
ec{a}$ (for constant mass).
* Equilibrium of concurrent forces: $\sum 
ec{F} = 0 \implies \sum F_x = 0, \sum F_y = 0$.
* **Lami's Theorem:** For three coplanar forces in equilibrium:
  $$ rac{F_1}{\sin lpha} =  rac{F_2}{\sin eta} =  rac{F_3}{\sin\gamma}$$


### 3.2 Friction Mechanics
* Static Friction: $0 \le f_s \le f_{s,\max} = \mu_s N$.
* Kinetic Friction: $f_k = \mu_k N$ (constant, independent of relative speed).
* Angle of Friction ($\lambda$): $        an\lambda = \mu$. Angle of Repose ($        heta$): $        heta = \lambda \implies         an        heta = \mu$.


---


## 4. Work, Power & Energy


* **Work Done:** $W = \int 
ec{F} \cdot d
ec{r} = \int (F_x dx + F_y dy + F_z dz)$.
* **Work-Energy Theorem:** Work done by all forces equals change in kinetic energy:
  $$W_{        ext{net}} = W_{        ext{conservative}} + W_{        ext{non-conservative}} + W_{        ext{external}} = \Delta K = K_f - K_i$$
* **Conservative Forces & Potential Energy:** $
ec{F} = -
abla U = -\left( rac{\partial U}{\partial x}\hat{i} +  rac{\partial U}{\partial y}\hat{j} +  rac{\partial U}{\partial z}\hat{k}
ight)$.
  * Stable equilibrium: $ rac{dU}{dx} = 0, \quad  rac{d^2U}{dx^2} > 0$.
  * Unstable equilibrium: $ rac{dU}{dx} = 0, \quad  rac{d^2U}{dx^2} < 0$.
* **Power:** $P =  rac{dW}{dt} = 
ec{F} \cdot 
ec{v}$.


---


## 5. Circular Motion & Vertical Loops


![Physics P12 0 Img1](/media/physics_p12_0_Img1.webp)
*Description: Motion of a car negotiating a banked circular curved track with friction.*


### 5.1 Kinematics & Dynamics of Circular Motion
* Angular relations: $v = r\omega, \quad a_t = r lpha, \quad a_c =  rac{v^2}{r} = \omega^2 r$. Total acceleration: $a = \sqrt{a_t^2 + a_c^2}$.
* **Banking of Road:**
  $$        an        heta =  rac{v_0^2}{rg} \quad (        ext{Optimum speed without friction})$$
  * With friction: $v_{\max} = \sqrt{rg \left( rac{        an        heta + \mu}{1 - \mu        an        heta}
ight)}, \quad v_{\min} = \sqrt{rg \left( rac{        an        heta - \mu}{1 + \mu        an        heta}
ight)}$.


### 5.2 Motion in a Vertical Circle (Light String)
* Critical velocity at bottom for full loop: $u_L \ge \sqrt{5gr}$.
* Critical velocity at top: $v_T \ge \sqrt{gr}$.
* Tension difference between bottom and top:
  $$T_L - T_T = 6mg \quad (        ext{Invariant!})$$


---


## 6. Centre of Mass & Collisions


* **Centre of Mass Position:**
  $$
ec{r}_{        ext{cm}} =  rac{\sum m_i 
ec{r}_i}{\sum m_i} =  rac{1}{M}\int 
ec{r} \, dm$$
  * Semicircular Ring: $y_{        ext{cm}} =  rac{2R}{\pi}$; Semicircular Disc: $y_{        ext{cm}} =  rac{4R}{3\pi}$.
  * Hemispherical Shell: $y_{        ext{cm}} =  rac{R}{2}$; Solid Hemisphere: $y_{        ext{cm}} =  rac{3R}{8}$.
* **Linear Momentum Conservation:** If $
ec{F}_{        ext{ext}} = 0 \implies 
ec{P}_{        ext{sys}} =         ext{constant}$.
* **Coefficient of Restitution ($e$):**
  $$e =  rac{v_2 - v_1}{u_1 - u_2} =  rac{        ext{Velocity of Separation}}{        ext{Velocity of Approach}}$$
  * $e = 1$: Perfectly elastic; $e = 0$: Completely inelastic.


---


## 7. Rigid Body Dynamics (Rotation)


* **Angular Momentum:** $
ec{L} = 
ec{r}         imes 
ec{p} = I
ec{\omega}$.
* **Torque Equation:** $
ec{        au}_{        ext{ext}} =  rac{d
ec{L}}{dt} = I
ec{ lpha}$.
* **Moment of Inertia Theorems:**
  * Parallel Axis: $I = I_{        ext{cm}} + M d^2$.
  * Perpendicular Axis (Planar lamina): $I_z = I_x + I_y$.
* **Pure Rolling Acceleration Down an Incline:**
  $$a =  rac{g\sin        heta}{1 +  rac{I_{        ext{cm}}}{MR^2}}$$


---


## 8. Gravitation & Celestial Mechanics


* **Gravitational Potential ($V$) & Field ($g$):**
  $$V(r) = - rac{GM}{r}, \quad g =  rac{GM}{r^2}$$
* **Escape Velocity & Orbital Speed:**
  $$v_e = \sqrt{ rac{2GM}{R}} = \sqrt{2gR}  pprox 11.2        ext{ km/s}, \qquad v_o = \sqrt{ rac{GM}{r}} = \sqrt{ rac{gR^2}{r}}$$
* **Kepler's Third Law:** $T^2 \propto a^3 \implies T^2 =  rac{4\pi^2}{GM} a^3$.


---


## 9. Fluid Mechanics & Thermal Physics


![Physics P33 1 Img4](/media/physics_p33_1_Img4.webp)
*Description: Indicator P-V diagram of the Carnot cycle detailing isothermal and adiabatic expansions and compressions.*


### 9.1 Fluid Statics & Dynamics
* Hydrostatic Pressure: $P = P_0 + 
ho g h$.
* Continuity Equation: $A_1 v_1 = A_2 v_2$.
* **Bernoulli's Principle:**
  $$P +  rac{1}{2}
ho v^2 + 
ho g h =         ext{constant}$$
* Torricelli's Efflux Law: $v = \sqrt{2gh}$; Range $R = 2\sqrt{h(H - h)}$.


### 9.2 Heat & Thermodynamics
* First Law of Thermodynamics: $\Delta Q = \Delta U + W$. Work in gas expansion: $W = \int P \, dV$.
* Heat Capacity: $C_p - C_v = R$. Ratio $\gamma =  rac{C_p}{C_v}$.
* **Adiabatic Process:** $P V^\gamma =         ext{constant}, \quad T V^{\gamma - 1} =         ext{constant}$. Work: $W =  rac{P_1 V_1 - P_2 V_2}{\gamma - 1}$.
* **Carnot Engine Efficiency:**
  $$\eta = 1 -  rac{T_C}{T_H} =  rac{W}{Q_H}$$


---


## 10. Oscillations & Waves


* **Simple Harmonic Motion (SHM):** $a = -\omega^2 x$. Solution: $x(t) = A\sin(\omega t + \phi)$.
  * Velocity: $v = \omega\sqrt{A^2 - x^2}$; Total Energy: $E =  rac{1}{2}m\omega^2 A^2$.
  * Spring-Block: $T = 2\pi\sqrt{ rac{m}{k}}$; Simple Pendulum: $T = 2\pi\sqrt{ rac{l}{g}}$.
* **Wave Equation on String:** $v = \sqrt{ rac{T}{\mu}}$. Harmonic wave: $y = A\sin(kx - \omega t)$.
* **Doppler Effect for Sound:**
  $$f' = f \left( rac{v \pm v_O}{v \mp v_S}
ight)$$


---


## 11. Electrodynamics, Circuits & Alternating Current


![Physics Electrodynamics Circuits And Ac](/media/physics_electrodynamics_circuits_and_ac.webp)
*Description: Two-panel electrodynamics and AC circuits reference: (Panel A) LCR series resonance curve showing current peak at resonant frequency; (Panel B) RC/LR transient time constants, Faraday-Lenz law, and AC power factor.*


### 11.1 Electrostatics & Capacitance
* Coulomb's Law: $F =  rac{1}{4\pi\epsilon_0}  rac{q_1 q_2}{r^2}$. Electric Potential: $V =  rac{1}{4\pi\epsilon_0}  rac{q}{r}$.
* Gauss's Law: $\oint 
ec{E} \cdot d
ec{A} =  rac{q_{        ext{in}}}{\epsilon_0}$.
* Capacitance: $C =  rac{\epsilon_0 A}{d}$. Energy stored: $U =  rac{1}{2} C V^2 =  rac{Q^2}{2C}$.


### 11.2 Current Electricity & Magnetism
* Ohm's Law: $V = IR$. Resistance: $R = 
ho  rac{l}{A}$.
* Biot-Savart Law: $d
ec{B} =  rac{\mu_0}{4\pi}  rac{I \, d
ec{l}         imes \hat{r}}{r^2}$. Magnetic force: $
ec{F} = q(
ec{E} + 
ec{v}         imes 
ec{B})$.
* Series LCR Circuit Impedance & Resonance:
  $$Z = \sqrt{R^2 + \left(\omega L -  rac{1}{\omega C}
ight)^2}, \qquad \omega_0 =  rac{1}{\sqrt{LC}}$$


---


## 12. Optics & Modern Physics


![Physics Optics Modern Physics And Waves](/media/physics_optics_modern_physics_and_waves.webp)
*Description: Two-panel optics and modern physics reference: (Panel A) Young's Double Slit Experiment (YDSE) interference intensity pattern on screen; (Panel B) Lens maker's formula, photoelectric effect, and Bohr model orbital parameters.*


### 12.1 Geometrical & Wave Optics
* Mirror & Lens Formulas: $ rac{1}{v} +  rac{1}{u} =  rac{1}{f}$ (Mirror), $ rac{1}{v} -  rac{1}{u} =  rac{1}{f}$ (Lens).
* Lens Maker's Formula: $ rac{1}{f} = (\mu - 1)\left( rac{1}{R_1} -  rac{1}{R_2}
ight)$.
* YDSE Fringe Width: $ eta =  rac{\lambda D}{d}$. Intensity: $I = 4I_0 \cos^2(\phi/2)$.


### 12.2 Modern Physics
* Photoelectric Equation: $h
u = \Phi + K_{\max} = h
u_0 + eV_0$.
* Bohr Orbit Radii & Energy: $r_n = 0.529  rac{n^2}{Z}        ext{ \AA}, \quad E_n = -13.6  rac{Z^2}{n^2}        ext{ eV}$.
* Radioactive Decay Law: $N(t) = N_0 e^{-\lambda t}, \quad T_{1/2} =  rac{\ln 2}{\lambda} =  rac{0.693}{\lambda}$.