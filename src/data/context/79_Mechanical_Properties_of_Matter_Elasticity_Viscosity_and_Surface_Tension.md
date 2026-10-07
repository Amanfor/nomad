Physics Revision Context: Chapter 79 — Mechanical Properties of Matter: Elasticity, Viscosity & Surface Tension
Source: Coaching Modules & Advanced Theory Sheets (scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Elasticity and Viscosity/, Elasticity _ Viscosity_Theory.pdf, 3._Elasticity_and_viscosity handout.pdf, 1-Theory_Surface_Tension_PC.pdf) Extracted into: JEE/context/ Batch: Physics Mechanics of Deformable Bodies & Fluid Physics — Elasticity & Plasticity (Hooke's Law $\sigma = E \epsilon$, Stress Tensor Components: Longitudinal Tensile/Compressive $\sigma = \frac{F_\perp}{A}$, Tangential Shear $\tau = \frac{F_\parallel}{A}$, Hydraulic Bulk Stress $\Delta P$, Strain Definitions: Longitudinal $\frac{\Delta L}{L}$, Lateral $\frac{\Delta d}{d}$, Shearing Angle $\theta = \frac{\Delta x}{L}$, Volumetric $\frac{\Delta V}{V}$), Elastic Moduli & Constants (Young's Modulus $Y = \frac{FL}{A\Delta L}$, Bulk Modulus $B = -V\frac{\Delta P}{\Delta V}$, Compressibility $k = \frac{1}{B}$, Shear Modulus $\eta = \frac{F/A}{\theta}$, Poisson's Ratio $\sigma = -\frac{\Delta d / d}{\Delta L / L}$ with Theoretical Bounds $-1 \le \sigma \le 0.5$ and Practical Range $0.2 \le \sigma \le 0.4$, Master Moduli Interrelations $Y = 3B(1 - 2\sigma) = 2\eta(1 + \sigma)$, Reciprocal Moduli Invariant $\frac{9}{Y} = \frac{3}{\eta} + \frac{1}{B}$), Elastic Energy Analytics (Energy Density $u = \frac{1}{2}\times\text{stress}\times\text{strain} = \frac{1}{2}Y\epsilon^2 = \frac{\sigma^2}{2Y}$, Total Strain Energy $U = \frac{1}{2}F\Delta L$, Thermal Stress $\sigma_{\text{thermal}} = Y\alpha\Delta T$, Self-Weight Elongation $\Delta L = \frac{MgL}{2AY} = \frac{\rho g L^2}{2Y}$); Fluid Viscosity (Newton's Law of Viscosity $F = -\eta A\frac{dv}{dy}$, Velocity Gradient, Viscosity Units $\text{Pa}\cdot\text{s}$ vs. Poise, Poiseuille's Law $Q = \frac{\pi \Delta P R^4}{8\eta L}$, Fluid Resistance $R_f = \frac{8\eta L}{\pi R^4}$, Stokes' Law $F_v = 6\pi\eta r v$, Terminal Velocity $v_t = \frac{2}{9}\frac{r^2(\rho - \sigma)g}{\eta}$ with $v_t \propto r^2$, Droplet Coalescence $v_T = n^{2/3}v_t$, Reynolds Number $R_e = \frac{\rho v d}{\eta}$ and Laminar-Turbulent Transition); Surface Tension & Capillarity (Surface Energy $U = T \Delta A$, Wire Frame Slider Force $F = 2TL$, Laplace Excess Pressure: Spherical Droplet $\Delta P = \frac{2T}{R}$, Soap Bubble $\Delta P = \frac{4T}{R}$, Cylindrical Jet $\Delta P = \frac{T}{R}$, Coalescence Interface $R_{\text{common}} = \frac{r_1 r_2}{|r_1 - r_2|}$, Angle of Contact $\theta$, Jurin's Law of Capillary Rise $h = \frac{2T\cos \theta}{\rho g r}$, Insufficient Length Invariant $h r = h' R'$, Wet Glass Plates Adhesion Force $F = \frac{2AT}{d}$), and Comprehensive High-Yield JEE Traps. Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________


1. Elasticity & Mechanical Properties of Solids
![Matter Elasticity Stress Strain And Poisson](/media/matter_elasticity_stress_strain_and_poisson.webp) Description: Two-panel elasticity reference diagram: (Panel A) Complete stress-strain curve for a ductile metallic wire detailing proportional limit, elastic yield point, ultimate tensile strength, breaking point, and strain energy density; (Panel B) Formulations for Young's modulus, Bulk modulus, Shear modulus, Poisson's ratio, and master interrelation invariants.
1.1 Stress, Strain & Hooke's Law
* Deforming Force & Restoring Force: When an external deforming force acts on a body, intermolecular restoring forces develop internally to resist the deformation.
* Stress ($\sigma$): Restoring force per unit cross-sectional area: $$\mathbf{\sigma = \frac{F_{\text{restoring}}}{A} \quad (\text{SI Unit: N/m}^2 \text{ or Pa, Dimension: } [M L^{-1} T^{-2}])}$$
   1. Longitudinal (Normal) Stress: Force acts perpendicular to the surface.
      * Tensile Stress (leads to elongation): $\sigma = \frac{F_\perp}{A}$.
      * Compressive Stress (leads to contraction): $\sigma = \frac{F_\perp}{A}$.
   2. Tangential (Shear) Stress ($\tau$): Force acts parallel (tangential) to the surface: $$\mathbf{\tau = \frac{F_\parallel}{A}}$$
   3. Hydraulic (Bulk) Stress: Uniform normal compressive pressure applied across all faces: $\sigma_{\text{bulk}} = \Delta P$.
* Strain ($\epsilon$): Fractional change in dimension (dimensionless, unitless scalar): $$\mathbf{\epsilon = \frac{\text{Change in Dimension}}{\text{Original Dimension}}}$$
   1. Longitudinal Strain: $\epsilon_l = \frac{\Delta L}{L}$.
   2. Lateral Strain: $\epsilon_{\text{lateral}} = -\frac{\Delta d}{d}$ (contraction in thickness when stretched).
   3. Shear Strain ($\theta$): Angular distortion produced by tangential stress: $$\mathbf{\theta = \frac{\Delta x}{L} \approx \tan \theta}$$
   4. Volumetric Strain: $\epsilon_v = \frac{\Delta V}{V}$.
* Hooke's Law: Within the proportional limit, stress is directly proportional to strain: $$\mathbf{\text{Stress} = E \times \text{Strain}}$$ (Where $E$ is the modulus of elasticity of the material).


________________


1.2 Elastic Moduli & Constants
1. Young's Modulus ($Y$): Applicable to solids (wires, rods) undergoing longitudinal elongation: $$\mathbf{Y = \frac{\text{Longitudinal Stress}}{\text{Longitudinal Strain}} = \frac{F / A}{\Delta L / L} = \frac{F L}{A \Delta L}}$$
   * Equivalent Spring Constant of a Wire: $$F = \left(\frac{YA}{L}\right)\Delta L \implies \mathbf{k = \frac{YA}{L}}$$
2. Bulk Modulus ($B$): Applicable to all states of matter (solids, liquids, gases) undergoing volumetric compression: $$\mathbf{B = -\frac{\Delta P}{\Delta V / V} = -V \frac{dP}{dV}}$$ (Negative sign ensures $B > 0$ since an increase in pressure produces a decrease in volume).
   * Compressibility ($k$): Reciprocal of Bulk Modulus: $$\mathbf{k = \frac{1}{B} = -\frac{1}{V}\frac{dV}{dP}}$$
   * Gaseous Bulk Moduli:
      * Isothermal Bulk Modulus ($PV = \text{const}$): $\mathbf{B_{\text{iso}} = P}$.
      * Adiabatic Bulk Modulus ($PV^\gamma = \text{const}$): $\mathbf{B_{\text{adia}} = \gamma P}$.
3. Modulus of Rigidity / Shear Modulus ($\eta$): Applicable strictly to solids (liquids and gases cannot sustain shear): $$\mathbf{\eta = \frac{\text{Shear Stress}}{\text{Shear Strain}} = \frac{F_\parallel / A}{\theta} = \frac{F_\parallel L}{A \Delta x}}$$
4. Poisson's Ratio ($\sigma$): $$\mathbf{\sigma = \frac{\text{Lateral Strain}}{\text{Longitudinal Strain}} = -\frac{\Delta d / d}{\Delta L / L}}$$
   * Theoretical Range: $\mathbf{-1 \le \sigma \le 0.5}$.
   * Practical Range for Solids: $\mathbf{0.2 \le \sigma \le 0.4}$.
   * For a perfectly incompressible substance ($\Delta V = 0$): $\mathbf{\sigma = 0.5}$.


________________


1.3 Master Relations Between Elastic Constants
The four elastic constants ($Y, B, \eta, \sigma$) are interrelated by homogeneous elasticity equations:


1. $$\mathbf{Y = 3B(1 - 2\sigma)}$$
2. $$\mathbf{Y = 2\eta(1 + \sigma)}$$
3. $$\mathbf{\sigma = \frac{3B - 2\eta}{6B + 2\eta}}$$
4. The Reciprocal Moduli Invariant: $$\mathbf{\frac{9}{Y} = \frac{3}{\eta} + \frac{1}{B} \implies Y = \frac{9B\eta}{3B + \eta}}$$


________________


1.4 Elastic Potential Energy & Thermal Stress
1. Elastic Potential Energy Stored in a Stretched Wire: Work done by external stretching force is stored as strain energy: $$W = \int_0^{\Delta L} F(x) dx = \int_0^{\Delta L} \left(\frac{YA}{L}x\right) dx = \frac{1}{2}\frac{YA}{L}(\Delta L)^2 = \mathbf{\frac{1}{2} F \Delta L}$$
   * Strain Energy Density ($u = U / \text{Volume}$): $$\mathbf{u = \frac{1}{2} \times \text{Stress} \times \text{Strain} = \frac{1}{2} Y (\text{Strain})^2 = \frac{\sigma^2}{2Y}}$$
2. Thermal Stress & Clamped Rod Tension: When a rod of length $L$, area $A$, and linear thermal expansion coefficient $\alpha$ is clamped rigidly between two immovable supports and cooled by $\Delta T$:
   * Natural thermal contraction: $\Delta L = L \alpha \Delta T$.
   * Since clamps prevent contraction, thermal strain is: $$\epsilon_{\text{thermal}} = \frac{\Delta L}{L} = \alpha \Delta T$$
   * Thermal Stress: $$\mathbf{\sigma_{\text{thermal}} = Y \alpha \Delta T}$$
   * Tension / Force Exerted on Clamps: $$\mathbf{F_{\text{thermal}} = Y A \alpha \Delta T}$$
3. Elongation of a Wire Under Its Own Weight: For a wire of mass $M$, length $L$, cross-sectional area $A$, and density $\rho$ suspended vertically:
   * Restoring tension varies linearly from zero at the bottom to $Mg$ at the top support: $T(y) = \frac{Mg}{L}y = \rho A g y$.
   * Total elongation: $$\mathbf{\Delta L = \int_0^L \frac{T(y)}{AY} dy = \frac{MgL}{2AY} = \frac{\rho g L^2}{2Y}}$$ (Exactly half the elongation produced if the total mass $M$ were hung at the bottom).


________________


2. Fluid Viscosity & Laminar Transport
![Matter Viscosity Stokes And Capillary Rise](/media/matter_viscosity_stokes_and_capillary_rise.webp) Description: Two-panel fluid physics reference diagram: (Panel A) Newton's law of viscosity, velocity gradient, Poiseuille pipe flow, and Stokes' law with spherical terminal velocity; (Panel B) Laplace excess pressure across drops, bubbles, and cylindrical jets alongside Jurin's law of capillary rise and angle of contact geometry.
2.1 Newton's Law of Viscosity
Viscosity represents the internal friction between adjacent fluid layers moving with different velocities in laminar flow:


* Viscous Drag Force ($F$): $$\mathbf{F = -\eta A \frac{dv}{dy}}$$
   * $A$: Surface area of contact between fluid layers.
   * $\frac{dv}{dy}$: Velocity gradient perpendicular to the direction of flow.
   * $\eta$: Coefficient of dynamic viscosity.
   * Units of Viscosity:
      * SI Unit: $\text{N}\cdot\text{s/m}^2 = \text{Pa}\cdot\text{s} = \text{kg/(m}\cdot\text{s)}$ (also called Poiseuille, $\text{Pl}$).
      * CGS Unit: $\text{Poise} = \text{dyne}\cdot\text{s/cm}^2 = \text{g/(cm}\cdot\text{s)}$.
      * Conversion: $\mathbf{1\text{ Pa}\cdot\text{s} = 10\text{ Poise}}$.
   * Temperature Dependence:
      * Liquids: Viscosity decreases with increasing temperature ($\eta \propto e^{E/RT}$ due to weakened cohesive bonds).
      * Gases: Viscosity increases with increasing temperature ($\eta \propto \sqrt{T}$ due to increased molecular momentum transfer).
2.2 Poiseuille's Equation (Steady Viscous Flow in a Tube)
For a liquid of viscosity $\eta$ undergoing steady laminar flow through a horizontal capillary tube of radius $R$ and length $L$ under a pressure difference $\Delta P$:


1. Volume Flow Rate ($Q = dV/dt$): $$\mathbf{Q = \frac{\pi \Delta P R^4}{8\eta L}}$$
2. Fluid Resistance ($R_f$): Analogous to Ohm's Law ($\Delta P = Q \times R_f$): $$\mathbf{R_f = \frac{8\eta L}{\pi R^4}}$$
   * Series Combination: $R_{\text{eq}} = R_1 + R_2 \implies \frac{L_{\text{eq}}}{R_{\text{eq}}^4} = \frac{L_1}{R_1^4} + \frac{L_2}{R_2^4}$.
   * Parallel Combination: $\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} \implies \frac{R_{\text{eq}}^4}{L_{\text{eq}}} = \frac{R_1^4}{L_1} + \frac{R_2^4}{L_2}$.
3. Parabolic Velocity Distribution: $$v(r) = v_{\max}\left(1 - \frac{r^2}{R^2}\right) = \frac{\Delta P}{4\eta L}(R^2 - r^2)$$
2.3 Stokes' Law & Terminal Velocity ($v_t$)
When a small sphere of radius $r$ moves through an infinite, stationary viscous medium of viscosity $\eta$ with velocity $v$:


1. Stokes' Viscous Retarding Force: $$\mathbf{F_v = 6\pi \eta r v}$$
2. Terminal Velocity Derivation: A spherical body of density $\rho$ falling through a fluid of density $\sigma$ experiences three forces:
   * Downward Weight: $W = \frac{4}{3}\pi r^3 \rho g$.
   * Upward Buoyant Force: $F_B = \frac{4}{3}\pi r^3 \sigma g$.
   * Upward Viscous Drag: $F_v = 6\pi \eta r v$. At dynamic equilibrium, net acceleration is zero ($W = F_B + F_v$): $$\frac{4}{3}\pi r^3 \rho g = \frac{4}{3}\pi r^3 \sigma g + 6\pi \eta r v_t$$ $$\mathbf{v_t = \frac{2}{9}\frac{r^2 (\rho - \sigma) g}{\eta}}$$
   * Key Proportionality: $\mathbf{v_t \propto r^2}$ (terminal speed is proportional to the square of radius).
   * If $\rho > \sigma$: Body falls downward with steady terminal velocity ($v_t > 0$).
   * If $\rho < \sigma$: Body rises upward with steady terminal velocity (e.g., air bubble rising through water).
3. Coalescence of $n$ Identical Droplets:
   * Conservation of volume: $\frac{4}{3}\pi R^3 = n \left(\frac{4}{3}\pi r^3\right) \implies \mathbf{R = n^{1/3} r}$.
   * Terminal velocity of the coalesced drop: $$\mathbf{v_{t,\text{new}} = n^{2/3} v_t}$$
2.4 Reynolds Number ($R_e$)
Dimensionless parameter predicting whether fluid flow is laminar or turbulent: $$\mathbf{R_e = \frac{\rho v d}{\eta} = \frac{\text{Inertial Force}}{\text{Viscous Force}}}$$


* For flow in a cylindrical pipe of diameter $d$:
   * $R_e < 2000$: Flow is laminar / streamline.
   * $2000 < R_e < 3000$: Flow is unstable / transitional.
   * $R_e > 3000$: Flow is turbulent.


________________


3. Surface Tension & Capillary Action
![Surface Tension Slider Wire Frame](/media/surface_tension_slider_wire_frame.webp) Description: U-shaped wire frame with movable sliding wire of length $L$ supporting a thin soap film, showing that surface tension acts along two liquid-air interfaces exerting total inward pulling force $F = 2TL$.
3.1 Molecular Origin & Work of Surface Extension
Surface molecules experience an unbalanced net inward cohesive attraction from interior molecules, minimizing surface area and generating an effective tensile membrane:


* Definition of Surface Tension ($T$): Force per unit length acting perpendicular to an imaginary line drawn on the surface: $$\mathbf{T = \frac{F}{L} \quad (\text{SI Unit: N/m or J/m}^2, \text{ Dimension: } [M L^0 T^{-2}])}$$
* Wire Frame Slider Invariant: Because a thin soap film possesses two free surfaces (top and bottom), the total pulling force on a sliding wire of length $L$ is: $$\mathbf{F = 2 T L}$$
* Surface Energy ($U$): Work done in increasing surface area by $\Delta A$ under isothermal conditions: $$\mathbf{W = T \Delta A \quad (\text{for a single liquid-air interface})}$$ $$\mathbf{W = 2 T \Delta A \quad (\text{for a soap bubble or film with two interfaces})}$$
1. Work Done in Blowing a Soap Bubble: Increasing radius from $0$ to $R$: $$\mathbf{W = 2 \times (4\pi R^2) \times T = 8\pi R^2 T}$$ Expanding radius from $R_1$ to $R_2$: $$\mathbf{W = 8\pi T (R_2^2 - R_1^2)}$$
2. Spraying a Big Drop into $n$ Droplets: A large drop of radius $R$ is split into $n$ identical droplets of radius $r = R / n^{1/3}$:
   * Initial surface area: $A_1 = 4\pi R^2$. Final surface area: $A_2 = n(4\pi r^2) = 4\pi R^2 n^{1/3}$.
   * Increase in surface area: $\Delta A = 4\pi R^2 (n^{1/3} - 1)$.
   * Work done (energy absorbed, causing cooling): $$\mathbf{W = 4\pi R^2 T (n^{1/3} - 1)}$$
   * Drop in temperature ($\Delta \theta$): $$\mathbf{\Delta \theta = \frac{W}{m s} = \frac{3T}{\rho s}\left(\frac{1}{r} - \frac{1}{R}\right)}$$


________________


3.2 Laplace's Law of Excess Pressure ($\Delta P$)
Due to surface curvature and inward tensile pull, the pressure on the concave side of a curved liquid interface is always greater than the pressure on the convex side ($P_{\text{concave}} - P_{\text{convex}} = \Delta P$):


1. Spherical Liquid Droplet (Single interface): $$\mathbf{\Delta P = P_{\text{in}} - P_{\text{out}} = \frac{2T}{R}}$$
2. Air Bubble Inside a Liquid (Single interface): $$\mathbf{\Delta P = P_{\text{in}} - P_{\text{out}} = \frac{2T}{R}}$$
3. Soap Bubble in Air (Two interfaces: inner and outer): $$\mathbf{\Delta P = P_{\text{in}} - P_{\text{out}} = \frac{4T}{R}}$$
4. Cylindrical Liquid Jet: $$\mathbf{\Delta P = \frac{T}{R}}$$
5. Common Interface of Two Intersecting Soap Bubbles: When two soap bubbles of radii $r_1$ and $r_2$ ($r_1 > r_2$) coalesce into a double bubble:
   * The internal excess pressure in the smaller bubble is greater ($\Delta P_2 = 4T/r_2 > \Delta P_1 = 4T/r_1$).
   * The common interface bulges toward the larger bubble (concave towards the smaller bubble).
   * Radius of curvature of common partition ($R_{\text{common}}$): $$\Delta P_{\text{net}} = \Delta P_2 - \Delta P_1 \implies \frac{4T}{R_{\text{common}}} = \frac{4T}{r_2} - \frac{4T}{r_1}$$ $$\mathbf{R_{\text{common}} = \frac{r_1 r_2}{r_1 - r_2}}$$


________________


3.3 Angle of Contact & Capillary Action (Jurin's Law)
* Angle of Contact ($\theta$): The angle between the tangent to the liquid surface at the point of contact and the solid surface inside the liquid:
   * Acute Angle ($\theta < 90^\circ$): Adhesive forces $>$ Cohesive forces; liquid wets the solid; meniscus is concave (e.g., pure water and clean glass, $\theta \approx 0^\circ$).
   * Obtuse Angle ($\theta > 90^\circ$): Cohesive forces $>$ Adhesive forces; liquid does not wet solid; meniscus is convex (e.g., mercury and glass, $\theta \approx 135^\circ$).
   * Right Angle ($\theta = 90^\circ$): Meniscus is completely flat (e.g., water in a silver vessel).
* Jurin's Law of Capillary Rise: When a capillary tube of bore radius $r$ is dipped vertically into a liquid of density $\rho$ and surface tension $T$: $$\mathbf{h = \frac{2T \cos \theta}{\rho g r} = \frac{2T}{\rho g R_{\text{meniscus}}}}$$ (Where $R_{\text{meniscus}} = r / \cos \theta$ is the radius of curvature of the liquid meniscus).
   * If $\theta < 90^\circ \implies \cos \theta > 0 \implies h > 0$ (Liquid rises).
   * If $\theta > 90^\circ \implies \cos \theta < 0 \implies h < 0$ (Liquid is depressed).
* Capillary Rise in an Inclined Tube: If the tube is tilted at an angle $\alpha$ to the vertical, the vertical height $h$ remains constant, but the length of the liquid column ($l$) along the tube increases: $$\mathbf{l = \frac{h}{\cos \alpha} = \frac{2T \cos \theta}{\rho g r \cos \alpha}}$$
* The Insufficient Length Invariant ($L < h$): If a capillary tube has a physical length $L$ smaller than the calculated rise height $h$, the liquid will never overflow:
   * Upon reaching the top of the tube, the liquid increases its radius of curvature from $R$ to $R'$ such that: $$\mathbf{h \cdot R = L \cdot R' \implies R' = \frac{h}{L} R}$$
   * The meniscus simply flattens until its upward force matches the weight of the shortened column.
* Adhesive Force Between Two Wet Glass Plates: When a water droplet of volume $V$ and mass $m$ is pressed between two flat glass plates separated by a tiny distance $d$ over contact area $A$ ($V = A \cdot d$):
   * The water rim forms a concave cylindrical meniscus of radius $r = d / 2$.
   * Excess pressure inside water film: $\Delta P = \frac{T}{r} = \frac{2T}{d}$.
   * Attraction Force Required to Pull Plates Apart: $$\mathbf{F = \Delta P \times A = \frac{2 A T}{d} = \frac{2 V T}{d^2} = \frac{2 m T}{\rho d^2}}$$


________________


4. High-Yield JEE Traps & Exam Invariants
1. Self-Weight vs. End-Load Elongation Trap:
   * A hanging wire of mass $M$ elongates by $\Delta L = \frac{MgL}{2AY}$ under its own weight.
   * If an additional mass $M$ is attached to the bottom, the total elongation is $\frac{MgL}{AY} + \frac{MgL}{2AY} = \frac{3MgL}{2AY}$.
2. Stress on an Inclined Plane Trap:
   * In a bar of cross-section $A$ under tensile load $F$, on a plane inclined at angle $\theta$ to the cross-section:
      * Oblique Area: $A' = \frac{A}{\cos \theta}$.
      * Tensile Stress: $\sigma = \frac{F \cos \theta}{A'} = \mathbf{\frac{F}{A}\cos^2 \theta}$ (maximum at $\theta = 0^\circ$).
      * Shearing Stress: $\tau = \frac{F \sin \theta}{A'} = \mathbf{\frac{F}{A}\sin \theta \cos \theta = \frac{F}{2A}\sin 2\theta}$ (maximum at $\theta = 45^\circ$, value $\frac{F}{2A}$).
3. Double Soap Bubble Partition Curvature Trap:
   * The common interface between two joined bubbles always bulges into the larger bubble because the smaller bubble has a higher internal pressure ($P \propto 1/R$).
4. Artificial Satellite Capillary Trap:
   * In an orbiting satellite or free fall, effective gravity is zero ($g_{\text{eff}} = 0$).
   * Liquid in a capillary tube rises to the very top of the tube, regardless of length, forming a hemispherical cap at the open rim.
5. Work Done in Capillary Rise vs. Potential Energy Trap:
   * Total work done by surface tension: $$W_{\text{ST}} = (2\pi r T \cos \theta) \times h = 2\pi r T \cos \theta \left(\frac{2T\cos \theta}{\rho g r}\right) = \frac{4\pi T^2 \cos^2 \theta}{\rho g} = m g h$$
   * Potential energy acquired by the elevated column (mass centered at $h/2$): $$\Delta U = m g \left(\frac{h}{2}\right) = \frac{1}{2} m g h$$
   * Energy Dissipation: Exactly half of the work done by surface tension is dissipated as heat due to viscous friction during the ascent ($\Delta H_{\text{heat}} = \frac{1}{2} m g h$).