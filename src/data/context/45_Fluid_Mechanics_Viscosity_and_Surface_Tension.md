Physics Revision Context: Chapter 45 — Fluid Mechanics, Viscosity & Surface Tension


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/PHYSICS/Fluid Mechanics/`, `Resonance_Fluids_Theory.pdf`, `1-Theory_Surface_Tension_PC.pdf`, `Elasticity _ Viscosity_Theory.pdf`, and `Sheet Fluid Statics.pdf`)


**Extracted into:** `JEE/context/`


**Batch:** Physics Mechanics Core — Fluid Statics (Hydrostatic Differential Law $dP = -\rho g dy$, Pascal's Principle & Hydraulic Multiplication, Hydrostatic Paradox, Linearly Accelerated Containers $\tan\theta = a_x / (g + a_y)$, Rotating Fluid Cylinders & Free Surface Paraboloid of Revolution $y = \frac{\omega^2 r^2}{2g}$ with 3D Pressure Distribution), Archimedes' Principle & Floatation Equilibrium (Center of Buoyancy, Apparent Weight $W_{\text{app}} = W(1 - \rho_L / \rho_S)$, Accelerating and Rotational Buoyancy, Melting Ice Cube Traps), Fluid Dynamics (Continuity Equation $A_1 v_1 = A_2 v_2$, Bernoulli's Conservation of Energy & Fluid Head Systems, Venturimeter Flow Measurement, Pitot Tube Stagnation Velocities), Torricelli's Law of Efflux (Finite Area Corrections, Pressurized Vessels, Ground Projectile Ranges $R = 2\sqrt{h(H-h)}$, Conjugate Depth Symmetries, Vessel Emptying Integrations, Efflux Reaction Thrust $F_{\text{thrust}} = 2\rho a g h$, Magnus Effect & Aerodynamic Lift), Viscous Flow Dynamics (Newton's Viscosity Law, Poiseuille's Capillary Flux $Q = \frac{\pi P r^4}{8\eta L}$, Fluid Resistance Networks, Stokes' Drag $F_v = 6\pi \eta r v$, Terminal Velocity $v_t = \frac{2}{9}\frac{r^2(\rho - \sigma)g}{\eta}$, Viscous Dissipation Rate $P \propto r^5$, Reynolds Number), Surface Tension & Capillarity (Surface Energy $U_s = T \Delta A$, Droplet Splitting & Adiabatic Cooling $\Delta T = -\frac{3T}{\rho s}(1/r - 1/R)$, Young-Laplace Excess Pressure across Drops, Bubbles, and Cylinders, Young's Contact Angle Relation, Jurin's Capillary Ascent Law $h = \frac{2T\cos\theta}{r\rho g}$, Insufficient Tube Length Meniscus Flattening $h R = L R'$, Common Interface Curvature $R_{\text{int}} = \frac{r_1 r_2}{r_2 - r_1}$), and Comprehensive High-Yield JEE Traps.


**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Fluid Statics (Hydrostatics) & Pressure Dynamics


### 1.1 Continuum Postulate & Pressure Invariants
A fluid is a state of matter that deforms continuously under the application of shear stress, no matter how infinitesimal:
* **Density ($\rho$) & Specific Gravity ($SG$):**
  $$\rho = \lim_{\Delta V \to 0} \frac{\Delta m}{\Delta V}, \quad SG = \frac{\rho_{\text{fluid}}}{\rho_{\text{water at } 4^\circ\text{C}}} \quad (\rho_{\text{water}} = 1000\text{ kg/m}^3 = 1\text{ g/cm}^3)$$
* **Pressure ($P$):** The normal compressive force exerted per unit area:
  $$P = \lim_{\Delta A \to 0} \frac{\Delta F_\perp}{\Delta A}$$
  * Standard SI Unit: $\text{Pascal (Pa)} = 1\text{ N/m}^2$.
  * Atmospheric Units: $1\text{ atm} = 1.01325 \times 10^5\text{ Pa} = 1.01325\text{ bar} = 760\text{ Torr} = 760\text{ mm Hg} = 10.33\text{ m of }\text{H}_2\text{O}$.
  * Gauge Pressure: $P_{\text{gauge}} = P_{\text{absolute}} - P_{\text{atm}}$.


---


### 1.2 Pascal's Principle & Hydraulic Multiplication
"Pressure exerted anywhere in a confined, incompressible static fluid is transmitted equally and undiminished in all directions throughout the fluid and to the container walls."
* **Hydraulic Lift Application:**
  Two pistons of cross-sectional areas $A_1$ (small input) and $A_2$ (large output) at the same horizontal level:
  $$\frac{F_1}{A_1} = \frac{F_2}{A_2} \implies \mathbf{F_2 = F_1 \left(\frac{A_2}{A_1}\right)}$$
* **Work Conservation (Incompressible Fluid: $A_1 d_1 = A_2 d_2$):**
  $$W_{\text{input}} = F_1 d_1 = F_1 \left(\frac{F_2 A_1}{F_1 A_2}\right) d_1 = F_2 d_2 = W_{\text{output}}$$
  Mechanical advantage is obtained without violating energy conservation!


---


### 1.3 Hydrostatic Pressure Variation with Depth
Consider a differential fluid element of cross-sectional area $A$ and vertical thickness $dy$:
$$(P + dP)A - PA + \rho (A dy) g = 0 \implies \mathbf{\frac{dP}{dy} = -\rho g}$$
Integrating from the free surface ($y = H, P = P_0$) downward to depth $h = H - y$:
$$\mathbf{P = P_0 + \rho g h}$$
* **The Hydrostatic Paradox:**
  The liquid pressure at the base of a vessel depends **exclusively on the vertical liquid depth $h$ and liquid density $\rho$**. It is completely independent of the shape, inclination, total volume, or base area of the container!
* **Connected U-Tube Manometer Equation:**
  For communicating vessels with multiple immiscible liquid columns in static equilibrium, choose a continuous horizontal datum plane through the same liquid:
  $$\mathbf{P_{\text{left branch}} = P_{\text{right branch}} \implies P_0 + \sum \rho_i g h_i = P_0 + \sum \rho_j g h_j}$$


---


### 1.4 Visual Preservation: Fluid Statics & Buoyancy


![Fluid Statics Pressure Variation and Buoyancy](/media/fluid_statics_pressure_variation_and_buoyancy.webp)
*Description: Two-panel foundational fluid mechanics graphic: (A) Fluid statics detailing the fundamental hydrostatic pressure equation ($P = P_0 + \rho g h$), Pascal's principle of hydraulic force multiplication, linearly accelerated containers showing isobaric tilt ($\tan\theta = a_x / (g + a_y)$), and rotating cylindrical fluids forming a free-surface paraboloid of revolution ($y = \frac{\omega^2 r^2}{2g}$); (B) Archimedes' principle demonstrating upthrust ($F_B = V_{\text{sub}} \rho_L g$) through the Center of Buoyancy, floatation equilibrium ratios, apparent weight in fluids, accelerating frame buoyancy, and the classic ice cube melting trap taxonomy.*


---


### 1.5 Fluids in Linearly Accelerated Containers
When a container filled with liquid is accelerated with horizontal acceleration $a_x$ and vertical acceleration $a_y$:
* **Effective Gravity Vector:**
  $$\vec{g}_{\text{eff}} = \vec{g} - \vec{a} = -a_x \hat{i} - (g + a_y)\hat{j}$$
* **Pressure Gradient:**
  $$\vec{\nabla} P = \rho \vec{g}_{\text{eff}} = -\rho a_x \hat{i} - \rho (g + a_y)\hat{j}$$
  $$\frac{\partial P}{\partial x} = -\rho a_x, \quad \frac{\partial P}{\partial y} = -\rho (g + a_y)$$
* **Free Surface Incline & Isobars:**
  Along any isobar (line of constant pressure, including the free surface), $dP = 0$:
  $$dP = \left(\frac{\partial P}{\partial x}\right)dx + \left(\frac{\partial P}{\partial y}\right)dy = 0 \implies -\rho a_x dx - \rho (g + a_y)dy = 0$$
  $$\mathbf{\tan\theta = \frac{dy}{dx} = -\frac{a_x}{g + a_y}}$$
  The free surface tilts at an angle $\theta = \tan^{-1}\left(\frac{a_x}{g + a_y}\right)$ to the horizontal!
* **Horizontal Pressure Difference between two points separated by distance $L$:**
  $$\mathbf{\Delta P = P_{\text{rear}} - P_{\text{front}} = \rho a_x L}$$


---


### 1.6 Rotating Liquid in a Cylindrical Vessel
A cylindrical container of radius $R$ containing liquid of density $\rho$ rotates with constant angular velocity $\omega$ about its vertical central axis:
* **Differential Centrifugal Equilibrium:**
  A fluid element at radial distance $r$ experiences an outward centrifugal force $(\rho A dr) \omega^2 r$:
  $$A dP = (\rho A dr) \omega^2 r \implies \mathbf{\frac{\partial P}{\partial r} = \rho \omega^2 r}$$
  $$\mathbf{\frac{\partial P}{\partial y} = -\rho g}$$
* **Total Pressure Differential:**
  $$dP = \left(\frac{\partial P}{\partial r}\right)dr + \left(\frac{\partial P}{\partial y}\right)dy = \rho \omega^2 r dr - \rho g dy$$
* **Shape of the Free Surface (Isobar $P = P_0$):**
  $$dP = 0 \implies \rho \omega^2 r dr = \rho g dy \implies \frac{dy}{dr} = \frac{\omega^2 r}{g}$$
  Integrating with origin at the lowest vertex of the vortex ($y = 0$ at $r = 0$):
  $$\mathbf{y(r) = \frac{\omega^2 r^2}{2g}}$$
  * **The free surface is a PARABOLOID OF REVOLUTION!**
* **Height Difference between Rim ($r = R$) and Center ($r = 0$):**
  $$\mathbf{\Delta h = y(R) - y(0) = \frac{\omega^2 R^2}{2g}}$$
* **3D Pressure Field:**
  $$\mathbf{P(r, y) = P_0 + \frac{1}{2}\rho \omega^2 r^2 - \rho g y}$$
* **Volume of Paraboloid of Revolution:**
  $$V_{\text{paraboloid}} = \int_0^R 2\pi r y dr = \int_0^R 2\pi r \left(\frac{\omega^2 r^2}{2g}\right) dr = \frac{\pi \omega^2 R^4}{4g} = \mathbf{\frac{1}{2} \pi R^2 (\Delta h)}$$
  *(The paraboloid of air holds exactly HALF the volume of a circumscribed cylinder of height $\Delta h$!).*
  Therefore, by volume conservation, the vertex drops by $\frac{\Delta h}{2}$ and the liquid at the rim rises by $\frac{\Delta h}{2}$.


---


## 2. Archimedes' Principle & Floatation Equilibrium


### 2.1 Archimedes' Principle & The Buoyant Force ($F_B$)
"When a body is wholly or partially immersed in a fluid at rest, it experiences an upward buoyant force (upthrust) equal to the weight of the fluid displaced by the body."
$$\mathbf{F_B = V_{\text{submerged}} \cdot \rho_{\text{liquid}} \cdot g}$$
* **Center of Buoyancy ($B$):** The point through which the buoyant force acts. It coincides with the **center of mass of the displaced liquid volume** (not necessarily the center of gravity $G$ of the immersed body).


---


### 2.2 Apparent Weight of an Immersed Solid
Let a solid of volume $V$, density $\rho_S$, and true mass $m = V \rho_S$ be submerged in a liquid of density $\rho_L$:
$$W_{\text{app}} = W_{\text{true}} - F_B = V \rho_S g - V \rho_L g = V \rho_S g \left(1 - \frac{\rho_L}{\rho_S}\right)$$
$$\mathbf{W_{\text{app}} = W_{\text{true}} \left(1 - \frac{\rho_L}{\rho_S}\right)}$$
* Loss in weight: $\Delta W = F_B = V \rho_L g$.
* Specific gravity from weights in air and water:
  $$\mathbf{SG = \frac{W_{\text{air}}}{W_{\text{air}} - W_{\text{water}}}}$$


---


### 2.3 The Principle of Floatation
For a freely floating body in static equilibrium, total weight equals buoyant upthrust:
$$W = F_B \implies V_{\text{total}} \cdot \rho_S \cdot g = V_{\text{submerged}} \cdot \rho_L \cdot g$$
$$\mathbf{\frac{V_{\text{submerged}}}{V_{\text{total}}} = \frac{\rho_S}{\rho_L}}$$
* **Fraction of Volume Submerged:** $f_{\text{sub}} = \frac{\rho_S}{\rho_L}$.
* **Fraction of Volume Above Surface:** $f_{\text{outside}} = 1 - \frac{\rho_S}{\rho_L} = \frac{\rho_L - \rho_S}{\rho_L}$.


---


### 2.4 Buoyancy in Non-Inertial Frames
In an accelerated fluid with effective gravity $\vec{g}_{\text{eff}} = \vec{g} - \vec{a}$:
$$\mathbf{\vec{F}_B = -V_{\text{sub}} \cdot \rho_L \cdot (\vec{g} - \vec{a}) = V_{\text{sub}} \cdot \rho_L \cdot \vec{g}_{\text{eff}}}$$
* **Case 1: Free Fall ($\vec{a} = \vec{g} \implies \vec{g}_{\text{eff}} = 0$):**
  $$\mathbf{F_B = 0}$$
  In a freely falling satellite or container, upthrust vanishes completely! A cork held underwater will not rise to the surface!
* **Case 2: Centrifugal / Rotational Buoyancy:**
  In a rotating fluid ($\omega$), the effective horizontal acceleration is outward ($\omega^2 r$).
  Therefore, the horizontal buoyant force acts **INWARD toward the axis of rotation**:
  $$\mathbf{F_{B, \text{radial}} = V \rho_L \omega^2 r}$$
  If an air bubble ($\rho_{\text{air}} < \rho_L$) is placed in a rotating tube of liquid, it moves **INWARD toward the axis of rotation**, while a denser pebble ($\rho_S > \rho_L$) is flung **OUTWARD to the rim**!


---


### 2.5 Classic Ice Melting Traps (High-Yield Diagnostic Taxonomy)


| Physical System | Initial State | Final State After Melting | Net Water Level Change |
| :---: | :---: | :---: | :---: |
| **Pure Ice in Pure Water** | Floating ice displaces liquid weight: $V_{\text{disp}} = \frac{m_{\text{ice}}}{\rho_w}$ | Ice melts into liquid water of volume: $V_{\text{melt}} = \frac{m_{\text{ice}}}{\rho_w} = V_{\text{disp}}$ | **STRICTLY UNCHANGED ($\Delta h = 0$)** |
| **Ice with Dense Core (Lead / Stone / Metal)** | Core + ice float together. Buoyant force balances total weight: $V_{\text{disp}} = \frac{m_{\text{ice}} + m_{\text{metal}}}{\rho_w}$ | Ice melts; metal sinks to bottom and displaces only its own small volume: $V_{\text{final}} = \frac{m_{\text{ice}}}{\rho_w} + \frac{m_{\text{metal}}}{\rho_{\text{metal}}} < V_{\text{disp}}$ | **WATER LEVEL FALLS ($\Delta h < 0$)** |
| **Ice with Light Core (Air Bubble / Cork)** | Air bubble has negligible mass. Displaced volume is determined solely by ice mass. | Ice melts; cork floats on surface; bubble escapes. Displaced volume equals melted water. | **STRICTLY UNCHANGED ($\Delta h = 0$)** |
| **Ice in Liquid Denser than Water ($\rho_L > \rho_w$, e.g. Glycerine / Brine)** | Floating ice displaces volume: $V_{\text{disp}} = \frac{m_{\text{ice}}}{\rho_L}$ | Ice melts into pure water of volume: $V_{\text{melt}} = \frac{m_{\text{ice}}}{\rho_w}$. Since $\rho_L > \rho_w \implies V_{\text{melt}} > V_{\text{disp}}$ | **LIQUID LEVEL RISES ($\Delta h > 0$)** |
| **Ice in Liquid Lighter than Water ($\rho_L < \rho_w$, e.g. Alcohol / Kerosene)** | Floating ice displaces volume: $V_{\text{disp}} = \frac{m_{\text{ice}}}{\rho_L}$ | Melted water volume: $V_{\text{melt}} = \frac{m_{\text{ice}}}{\rho_w} < V_{\text{disp}}$ (melted water sinks to bottom). | **LIQUID LEVEL FALLS ($\Delta h < 0$)** |


---


## 3. Fluid Dynamics (Hydrodynamics) & Bernoulli's Principle


### 3.1 Ideal Fluid Flow Characteristics
1. **Steady / Streamline Flow:** The velocity of fluid particles at any fixed point in space is invariant with time: $\left(\frac{\partial \vec{v}}{\partial t}\right) = 0$.
2. **Incompressible Flow:** Density remains constant along streamlines: $\rho = \text{Constant}$.
3. **Non-Viscous (Inviscid) Flow:** Zero internal viscous friction between fluid layers: $\eta = 0$.
4. **Irrotational Flow:** Fluid elements have zero angular velocity about their own centers of mass: $\vec{\nabla} \times \vec{v} = 0$.


---


### 3.2 The Equation of Continuity (Conservation of Mass)
For steady flow of an incompressible fluid through a tube of varying cross-sectional area:
$$\mathbf{A_1 v_1 = A_2 v_2 \iff A \cdot v = \text{Constant}}$$
* **Volume Flow Rate (Discharge $Q$):**
  $$\mathbf{Q = \frac{dV}{dt} = A \cdot v \quad [\text{m}^3/\text{s}]}$$
* **Mass Flow Rate:**
  $$\mathbf{\frac{dm}{dt} = \rho \cdot A \cdot v \quad [\text{kg/s}]}$$
* **Shape of a Falling Liquid Stream from a Tap:**
  Water exits a circular tap of radius $r_0$ at speed $v_0$. Under gravity, after falling vertical distance $y$, its speed is $v(y) = \sqrt{v_0^2 + 2gy}$.
  By continuity: $A_0 v_0 = A(y) v(y) \implies \pi r_0^2 v_0 = \pi r^2 \sqrt{v_0^2 + 2gy}$:
  $$\mathbf{r(y) = r_0 \left(1 + \frac{2gy}{v_0^2}\right)^{-1/4}}$$


---


### 3.3 Bernoulli's Theorem (Conservation of Mechanical Energy)


![Fluid Dynamics Bernoulli Torricelli and Venturimeter](/media/fluid_dynamics_bernoulli_torricelli_and_venturimeter.webp)
*Description: Two-panel hydrodynamics graphic: (A) Fluid dynamics detailing streamline flow, continuity equation ($A_1 v_1 = A_2 v_2$), Bernoulli's mechanical energy conservation equation in pressure and fluid head formats, alongside quantitative operation of the Venturimeter and Pitot tube stagnation velocity; (B) Torricelli's law of efflux from open and pressurized tanks, showing horizontal projectile trajectory ranges ($R = 2\sqrt{h(H-h)}$), conjugate depth symmetries, tank emptying duration integrations ($t = \frac{A}{a}\sqrt{2H/g}$), and the aerodynamic Magnus effect.*


Along any streamline in steady, incompressible, non-viscous, irrotational flow:
$$\mathbf{P + \frac{1}{2}\rho v^2 + \rho g y = \text{Constant}}$$
* **Total Head Formulation (Dividing by $\rho g$):**
  $$\mathbf{\frac{P}{\rho g} + \frac{v^2}{2g} + y = \text{Total Head (Constant)}}$$
  1. **Pressure Head:** $\frac{P}{\rho g}$ (meters of fluid column).
  2. **Velocity Head:** $\frac{v^2}{2g}$ (kinetic energy per unit weight).
  3. **Datum / Elevation Head:** $y$ (potential energy per unit weight).


---


### 3.4 Applications of Bernoulli's Theorem


#### 1. The Venturimeter (Flow Rate Measurement)
Consists of a wide pipe section ($A_1$) tapering to a narrow constriction called the throat ($A_2 < A_1$):
* By continuity: $v_2 = v_1 \left(\frac{A_1}{A_2}\right) > v_1$.
* By Bernoulli ($y_1 = y_2$): $P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2 \implies P_1 - P_2 = \frac{1}{2}\rho (v_2^2 - v_1^2)$.
* The differential manometer connects the two sections and registers height difference $h$:
  $$P_1 - P_2 = h \rho_m g$$
  $$\frac{1}{2}\rho v_1^2 \left[\left(\frac{A_1}{A_2}\right)^2 - 1\right] = h \rho_m g \implies v_1 = \sqrt{\frac{2 h \rho_m g}{\rho \left[\left(\frac{A_1}{A_2}\right)^2 - 1\right]}}$$
* **Volume Flow Rate ($Q$):**
  $$\mathbf{Q = A_1 A_2 \sqrt{\frac{2(P_1 - P_2)}{\rho (A_1^2 - A_2^2)}} = A_1 A_2 \sqrt{\frac{2 h \rho_m g}{\rho (A_1^2 - A_2^2)}}}$$


#### 2. The Pitot Tube (Local Velocity Measurement)
Measures the velocity of flow at a point. At the inlet orifice of the inner tube facing the flow, the fluid is brought to complete rest ($v_{\text{stag}} = 0$, Stagnation Point):
$$P_{\text{stag}} = P_{\text{static}} + \frac{1}{2}\rho v^2$$
$$\mathbf{v = \sqrt{\frac{2(P_{\text{stag}} - P_{\text{static}})}{\rho}} = \sqrt{\frac{2 h \rho_m g}{\rho}}}$$


#### 3. Dynamic Lift on an Aerofoil & The Magnus Effect
* **Aerofoil Lift:** The upper surface is curved while the lower surface is flat. Air travels faster over the top surface ($v_{\text{top}} > v_{\text{bottom}}$), creating a lower pressure on top ($P_{\text{top}} < P_{\text{bottom}}$). The pressure difference generates an upward aerodynamic lift force:
  $$\mathbf{F_{\text{lift}} = (P_{\text{bottom}} - P_{\text{top}}) A = \frac{1}{2}\rho (v_{\text{top}}^2 - v_{\text{bottom}}^2) A}$$
* **Magnus Effect on a Spinning Ball:** A spinning ball drags surrounding air with it. On one side, the drag velocity adds to the oncoming wind ($v$ increases $\implies P$ drops); on the opposite side, it opposes the wind ($v$ decreases $\implies P$ rises). The net pressure gradient exerts a transverse force deflecting the ball's trajectory!


---


### 3.5 Torricelli's Law of Efflux & Projectile Dynamics
A tank of large cross-sectional area $A$ filled with liquid of density $\rho$ to depth $H$ has a small orifice of area $a$ ($a \ll A$) at depth $h$ below the free surface:
1. **Speed of Efflux ($v$):**
   Applying Bernoulli's equation between top free surface (1) and orifice (2):
   $$P_0 + \frac{1}{2}\rho v_1^2 + \rho g H = P_0 + \frac{1}{2}\rho v^2 + \rho g (H - h)$$
   From continuity $A v_1 = a v \implies v_1 = (a/A)v$.
   $$\mathbf{v = \sqrt{\frac{2gh}{1 - (a/A)^2}} \approx \sqrt{2gh} \quad (\text{for } a \ll A)}$$
   * **Torricelli's Law:** The speed of efflux of an ideal liquid from a small orifice is identical to the speed acquired by a body falling freely from rest through height $h$!
2. **Pressurized Tank (Enclosed Gas at Pressure $P_{\text{air}} > P_0$):**
   $$\mathbf{v = \sqrt{\frac{2(P_{\text{air}} - P_0)}{\rho} + 2gh}}$$
3. **Horizontal Range of Efflux Stream on the Ground ($R$):**
   The liquid stream exits horizontally at speed $v = \sqrt{2gh}$ and falls vertically through height $(H - h)$ under gravity:
   $$t_{\text{fall}} = \sqrt{\frac{2(H - h)}{g}}$$
   $$\mathbf{R = v \cdot t_{\text{fall}} = \sqrt{2gh} \cdot \sqrt{\frac{2(H - h)}{g}} = 2\sqrt{h(H - h)}}$$
   * **Maximum Range Condition:**
     Differentiating $R^2 = 4(hH - h^2)$ with respect to $h$:
     $$\frac{d}{dh}(hH - h^2) = H - 2h = 0 \implies \mathbf{h = \frac{H}{2}}$$
     $$\mathbf{R_{\max} = 2\sqrt{\frac{H}{2}\left(H - \frac{H}{2}\right)} = 2\sqrt{\frac{H^2}{4}} = H}$$
     The horizontal range is maximum and equals the **total tank height $H$** when the orifice is placed exactly at **mid-depth ($h = H/2$)**!
   * **Conjugate Depth Symmetry:**
     The range expression $R = 2\sqrt{h(H - h)}$ is symmetric under the exchange of $h$ and $(H - h)$.
     Therefore, **two holes located at depths $h$ and $(H - h)$ produce the EXACT IDENTICAL horizontal range on the ground**!
4. **Reaction Thrust on the Tank:**
   As liquid exits with velocity $v$, momentum is carried away at rate $\frac{dp}{dt} = \left(\frac{dm}{dt}\right)v = (\rho a v) v = \rho a v^2$:
   $$\mathbf{F_{\text{thrust}} = \rho a v^2 = \rho a (2gh) = 2 \rho a g h}$$
   * The backwards reaction force equals **TWICE the hydrostatic force ($\rho g h \cdot a$)** on the orifice area!
5. **Time Required to Empty a Tank Completely:**
   At instantaneous liquid height $y$, efflux rate is $a\sqrt{2gy}$:
   $$-A \frac{dy}{dt} = a \sqrt{2gy} \implies dt = -\frac{A}{a\sqrt{2g}} y^{-1/2} dy$$
   Integrating from $y = H$ to $y = 0$:
   $$\mathbf{t_{\text{empty}} = \frac{A}{a}\sqrt{\frac{2H}{g}}}$$
   * Time to empty from $H$ to $H/2$: $t_1 = \frac{A}{a}\sqrt{\frac{2}{g}}(\sqrt{H} - \sqrt{H/2}) = \frac{A}{a}\sqrt{\frac{2H}{g}}(1 - 1/\sqrt{2}) \approx 0.293 \, t_{\text{total}}$.
   * Time to empty from $H/2$ to $0$: $t_2 = \frac{A}{a}\sqrt{\frac{2H}{g}}(1/\sqrt{2}) \approx 0.707 \, t_{\text{total}}$.
   * **$t_2 > t_1$** (Emptying the lower half takes over twice as long as the upper half!).


---


## 4. Viscosity & Fluid Friction


### 4.1 Newton's Law of Viscosity


![Viscosity Stokes Law Surface Tension and Capillarity](/media/viscosity_stokes_law_surface_tension_and_capillarity.webp)
*Description: Two-panel viscous and interfacial physics graphic: (A) Viscous flow dynamics detailing Newton's shear law ($F = -\eta A \frac{dv}{dy}$), Poiseuille's laminar capillary tube discharge formula ($Q = \frac{\pi P r^4}{8\eta L}$) with fluid resistance analogies, and Stokes' law leading to the asymptotic terminal velocity formula ($v_t = \frac{2}{9}\frac{r^2(\rho - \sigma)g}{\eta}$); (B) Surface tension mechanics illustrating surface energy ($U_s = T\Delta A$), Young-Laplace excess pressure across curved interfaces (drops vs soap bubbles), Young's contact angle equilibrium, Jurin's capillary rise law ($h = \frac{2T\cos\theta}{r\rho g}$), and the insufficient tube length flattening invariant ($h R = L R'$).*


Viscosity is internal fluid friction arising from momentum transfer between adjacent fluid layers moving at different relative speeds:
* **Newton's Viscous Shear Law:**
  The tangential viscous retarding force $F$ between two fluid layers of contact area $A$ separated by velocity gradient $\frac{dv}{dy}$:
  $$\mathbf{F = -\eta A \frac{dv}{dy}}$$
  where $\eta$ is the dynamic coefficient of viscosity.
* **Units and Dimensions of Viscosity ($\eta$):**
  $$[\eta] = \frac{[F]}{[A][dv/dy]} = \frac{\text{N}}{\text{m}^2 \cdot (\text{s}^{-1})} = \mathbf{\text{Pa}\cdot\text{s} = \text{N}\cdot\text{s/m}^2 = \text{kg}/(\text{m}\cdot\text{s}) = \text{M L}^{-1}\text{T}^{-1}}$$
  * CGS Unit: **$1\text{ Poise} = 1\text{ dyne}\cdot\text{s/cm}^2 = 0.1\text{ Pa}\cdot\text{s} \iff 1\text{ Pa}\cdot\text{s} = 10\text{ Poise}$**.
* **Temperature Dependence:**
  * **Liquids:** Cohesive intermolecular forces dominate. As temperature rises, molecular bonds weaken $\implies \mathbf{\eta_{\text{liquid}} \text{ decreases rapidly with } T}$.
  * **Gases:** Momentum transfer by chaotic thermal collisions dominates ($\eta \propto \sqrt{T}$). As temperature rises, molecular speeds increase $\implies \mathbf{\eta_{\text{gas}} \text{ increases with } T}$!


---


### 4.2 Poiseuille's Law for Laminar Flow Through a Capillary Tube
For steady, laminar, viscous flow of an incompressible fluid through a horizontal cylindrical tube of radius $r$, length $L$, under pressure difference $P = P_1 - P_2$:
* Velocity profile at radial distance $y$ from the central axis:
  $$\mathbf{v(y) = \frac{P}{4\eta L}(r^2 - y^2)}$$
  *(Parabolic velocity profile: Maximum velocity $v_{\max} = \frac{Pr^2}{4\eta L}$ at the axis ($y = 0$); Zero velocity at the wall ($y = r$)).*
* **Poiseuille's Volume Flux Equation:**
  $$\mathbf{Q = \frac{dV}{dt} = \frac{\pi P r^4}{8\eta L}}$$
* **Fluid Resistance ($R_{\text{fluid}}$):**
  Analogous to Ohm's Law in electric circuits ($\Delta V = I R_e$):
  $$P = Q \cdot R_{\text{fluid}} \implies \mathbf{R_{\text{fluid}} = \frac{8\eta L}{\pi r^4}}$$
  * **Series Combination of Capillary Tubes:**
    $$R_{\text{eq}} = R_1 + R_2 = \frac{8\eta L_1}{\pi r_1^4} + \frac{8\eta L_2}{\pi r_2^4}$$
  * **Parallel Combination of Capillary Tubes:**
    $$\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2}$$


---


### 4.3 Stokes' Law & Terminal Velocity ($v_t$)
When a small smooth spherical body of radius $r$ moves at speed $v$ through an infinite, stationary, viscous medium of viscosity $\eta$:
* **Stokes' Viscous Drag Force:**
  $$\mathbf{F_v = 6\pi \eta r v}$$
* **Derivation of Terminal Velocity ($v_t$):**
  Consider a sphere of density $\rho$ falling through a fluid of density $\sigma$.
  The forces acting on the sphere are:
  1. Downward Weight: $W = mg = \frac{4}{3}\pi r^3 \rho g$.
  2. Upward Buoyant Force: $F_B = \frac{4}{3}\pi r^3 \sigma g$.
  3. Upward Viscous Drag: $F_v = 6\pi \eta r v$.
  Net acceleration:
  $$m \frac{dv}{dt} = W - F_B - F_v = \frac{4}{3}\pi r^3 (\rho - \sigma)g - 6\pi \eta r v$$
  As velocity increases, viscous drag grows until the net acceleration vanishes ($\frac{dv}{dt} = 0$). The velocity reaches a constant maximum value called **Terminal Velocity ($v_t$)**:
  $$\frac{4}{3}\pi r^3 (\rho - \sigma)g = 6\pi \eta r v_t$$
  $$\mathbf{v_t = \frac{2}{9} \frac{r^2 (\rho - \sigma) g}{\eta}}$$
* **Key Invariants and Scaling Laws:**
  1. $v_t \propto r^2$: A raindrop of double radius falls with **4 times the terminal speed**!
  2. If $\rho > \sigma$ (dense body): $v_t > 0$ (Body falls downward).
  3. If $\rho < \sigma$ (e.g., air bubble in water): $v_t < 0$ (Bubble **rises upward** with terminal speed).
  4. **Rate of Heat Generation (Viscous Dissipation Power):**
     $$\mathbf{P = F_v \cdot v_t = (6\pi \eta r v_t) v_t = 6\pi \eta r v_t^2 \propto r \cdot (r^2)^2 \propto r^5}$$
     *(The rate of viscous heat dissipation scales with the FIFTH POWER of droplet radius!).*


---


### 4.4 Reynolds Number ($R_e$) & Turbulence
The nature of fluid flow (laminar vs. turbulent) is governed by the dimensionless **Reynolds Number ($R_e$)**, representing the ratio of inertial forces to viscous forces:
$$\mathbf{R_e = \frac{\text{Inertial Force}}{\text{Viscous Force}} = \frac{\rho v D}{\eta}}$$
where $D$ is the tube diameter.
* If $R_e < 2000$: Flow is **strictly laminar / streamline**.
* If $2000 < R_e < 3000$: Flow is **unstable / transitional**.
* If $R_e > 3000$: Flow is **chaotic and turbulent**.


---


## 5. Surface Tension & Capillarity


### 5.1 Molecular Theory & Surface Energy
Molecules in the bulk of a liquid experience isotropic cohesive attractions in all directions (net force $= 0$).
Molecules at the free surface experience an inward cohesive pull toward the bulk and zero attraction from air above.
Work must be performed against this inward cohesive pull to bring molecules from the interior to the surface, creating an excess potential energy:
* **Surface Tension ($T$ or $\gamma$):**
  The tensile force acting per unit length tangential to the liquid surface:
  $$\mathbf{T = \frac{F}{L} \quad [\text{N/m}]}$$
* **Surface Energy ($U_s$):**
  Work required to increase the surface area of a liquid isothermally:
  $$\mathbf{dW = T \cdot dA \implies U_s = T \cdot A \quad [\text{J/m}^2 = \text{N/m}]}$$


---


### 5.2 Work Calculations & Droplet Coalescence


#### 1. Blowing a Liquid Drop vs. Soap Bubble
* For a liquid drop (1 free liquid-air interface):
  $$A = 4\pi R^2 \implies \mathbf{W = T \cdot \Delta A = 4\pi R^2 T}$$
* For a soap bubble in air (**2 free interfaces: inner and outer**):
  $$A = 2 \times 4\pi R^2 = 8\pi R^2 \implies \mathbf{W = T \cdot \Delta A = 8\pi R^2 T}$$
  To expand a soap bubble from radius $R_1$ to $R_2$:
  $$\mathbf{W = 8\pi T (R_2^2 - R_1^2)}$$


#### 2. Splitting a Large Drop into $n$ Identical Droplets
A single drop of radius $R$ is pulverized into $n$ identical droplets of radius $r$:
* By mass conservation:
  $$\frac{4}{3}\pi R^3 = n \left(\frac{4}{3}\pi r^3\right) \implies \mathbf{r = \frac{R}{n^{1/3}} \iff R = n^{1/3}r}$$
* Initial Surface Area: $A_1 = 4\pi R^2$.
* Final Surface Area: $A_2 = n (4\pi r^2) = n \cdot 4\pi \left(\frac{R}{n^{1/3}}\right)^2 = n^{1/3} (4\pi R^2) > A_1$.
* **Work Required (Surface Energy Increase):**
  $$\mathbf{W = \Delta U_s = T(A_2 - A_1) = 4\pi T R^2 (n^{1/3} - 1) = 4\pi T R^3 \left(\frac{1}{r} - \frac{1}{R}\right)}$$
* **Temperature Drop during Adiabatic Splitting:**
  If the work is drawn from internal thermal energy ($W = -m s \Delta T$):
  $$\Delta T = -\frac{W}{m s} = -\frac{4\pi T R^3 (1/r - 1/R)}{\left(\frac{4}{3}\pi R^3 \rho\right) s} \implies \mathbf{\Delta T = -\frac{3T}{\rho s}\left(\frac{1}{r} - \frac{1}{R}\right)}$$
  *(The liquid cools down upon atomization into droplets!).*
  Conversely, when $n$ droplets coalesce into one big drop, surface area decreases, releasing heat and **raising the liquid temperature**!


---


### 5.3 The Young-Laplace Equation & Excess Pressure ($\Delta P$)
Because of surface tension, a curved liquid surface contracts, exerting compressive pressure toward the center of curvature.
**The concave side of any curved liquid interface is ALWAYS at higher pressure than the convex side:**
$$\mathbf{P_{\text{concave}} - P_{\text{convex}} = \Delta P}$$
1. **Spherical Liquid Drop in Air (1 Interface):**
   $$\mathbf{\Delta P = \frac{2T}{R}}$$
2. **Spherical Air Bubble inside Liquid (1 Interface):**
   $$\mathbf{\Delta P = \frac{2T}{R}}$$
   *(Absolute pressure inside an air bubble at depth $h$ in liquid: $P_{\text{inside}} = P_0 + \rho g h + \frac{2T}{R}$).*
3. **Spherical Soap Bubble in Air (2 Interfaces):**
   $$\Delta P = \Delta P_{\text{inner}} + \Delta P_{\text{outer}} = \frac{2T}{R} + \frac{2T}{R} \implies \mathbf{\Delta P = \frac{4T}{R}}$$
4. **Cylindrical Liquid Interface of Radius $R$:**
   $$\mathbf{\Delta P = \frac{T}{R}}$$


---


### 5.4 Angle of Contact ($\theta$) & Young's Equation
The angle subtended inside the liquid between the solid wall and the tangent to the liquid meniscus at the three-phase contact line:
* **Young's Relation for Three Interfacial Tensions:**
  $$\mathbf{T_{sa} = T_{sl} + T_{la} \cos\theta \implies \cos\theta = \frac{T_{sa} - T_{sl}}{T_{la}}}$$
  where $T_{sa}$ is solid-air, $T_{sl}$ is solid-liquid, and $T_{la}$ is liquid-air interfacial tension.
* **Wetting Taxonomy:**
  1. **Acute Contact Angle ($\theta < 90^\circ$):** Adhesive forces $> \frac{\text{Cohesive}}{\sqrt{2}}$. Liquid wets solid; meniscus is **concave upwards**; capillary **rises** (e.g., Water in glass: $\theta \approx 0^\circ$).
  2. **Obtuse Contact Angle ($\theta > 90^\circ$):** Cohesive forces dominate. Liquid does not wet solid; meniscus is **convex upwards**; capillary **depresses** (e.g., Mercury in glass: $\theta \approx 135^\circ$).
  3. **Right Contact Angle ($\theta = 90^\circ$):** Flat meniscus; zero capillary ascent (e.g., Pure water in silver).


---


### 5.5 Capillary Rise & Jurin's Law
Consider a vertical glass capillary tube of internal radius $r$ dipped into a wetting liquid of density $\rho$ and surface tension $T$:
* **Equilibrium Force Balance:**
  The upward vertical component of surface tension around the circular perimeter balances the weight of the elevated liquid column:
  $$2\pi r \cdot T \cos\theta = (\pi r^2 h) \cdot \rho g$$
  $$\mathbf{h = \frac{2T\cos\theta}{r\rho g}}$$
* **Meniscus Curvature Radius ($R_m$):**
  From geometry: $r = R_m \cos\theta \implies R_m = \frac{r}{\cos\theta}$.
  $$\mathbf{h = \frac{2T}{R_m \rho g} \iff h \cdot R_m = \frac{2T}{\rho g} = \text{Constant}}$$
* **Capillary Rise Between Two Parallel Vertical Plates Separated by Distance $d$:**
  $$2 L \cdot T \cos\theta = (L \cdot d \cdot h) \rho g \implies \mathbf{h = \frac{2T\cos\theta}{d \rho g}}$$


---


### 5.6 Tube of Insufficient Length ($L < h_{\text{req}}$)
If a capillary tube has vertical length $L$ smaller than the equilibrium Jurin height $h$:
* **CRITICAL JEE TRAP:** **THE LIQUID DOES NOT OVERFLOW!**
* **Self-Regulating Mechanism:**
  When liquid reaches the top edge of the tube, it stops rising. Instead, the meniscus **flattens**, increasing its radius of curvature from $R_m$ to $R'$ until the pressure deficit balances the available height $L$:
  $$\mathbf{L \cdot R' = h \cdot R_m \implies R' = R_m \left(\frac{h}{L}\right) > R_m}$$
  The liquid stays pinned at the brim with an adjusted contact angle $\theta'$ where $\cos\theta' = \frac{L}{h}\cos\theta$!


---


### 5.7 Common Interface of Two Coalescing Soap Bubbles
Two soap bubbles of radii $r_1$ and $r_2$ ($r_2 > r_1$) come into contact and coalesce along a common spherical interface of radius $R_{\text{int}}$:
* Excess pressure in bubble 1: $P_1 - P_0 = \frac{4T}{r_1}$.
* Excess pressure in bubble 2: $P_2 - P_0 = \frac{4T}{r_2}$.
* Pressure across the common interface:
  $$\Delta P_{\text{common}} = P_1 - P_2 = (P_1 - P_0) - (P_2 - P_0) = \frac{4T}{r_1} - \frac{4T}{r_2} = 4T \left(\frac{1}{r_1} - \frac{1}{r_2}\right)$$
  Also, $\Delta P_{\text{common}} = \frac{4T}{R_{\text{int}}}$.
  $$\frac{4T}{R_{\text{int}}} = 4T \left(\frac{1}{r_1} - \frac{1}{r_2}\right) \implies \mathbf{\frac{1}{R_{\text{int}}} = \frac{1}{r_1} - \frac{1}{r_2}}$$
  $$\mathbf{R_{\text{int}} = \frac{r_1 r_2}{r_2 - r_1}}$$
* **Interface Curvature Direction:** The common interface is **concave toward the smaller bubble** (because smaller bubble has higher internal pressure!).


---


## 6. Comprehensive Master Formulas & High-Yield Diagnostic Traps


### 6.1 Master Fluid Mechanics Formula Sheet


| Physical Law / Principle | Master Equation | High-Yield Application |
| :---: | :---: | :---: |
| **Hydrostatic Depth** | $P = P_0 + \rho g h$ | Pressure depends only on depth $h$; independent of shape |
| **Accelerated Container** | $\tan\theta = \frac{a_x}{g + a_y}$ | Isobars tilt by $\theta$; $\Delta P = \rho a_x L$ |
| **Rotating Container** | $y(r) = \frac{\omega^2 r^2}{2g}$ | Paraboloid free surface; $\Delta h = \frac{\omega^2 R^2}{2g}$ |
| **Archimedes' Upthrust** | $F_B = V_{\text{sub}} \rho_L g$ | Apparent weight $W_{\text{app}} = W(1 - \rho_L / \rho_S)$ |
| **Equation of Continuity** | $A_1 v_1 = A_2 v_2 = Q$ | Falling stream radius $r(y) = r_0 (1 + 2gy/v_0^2)^{-1/4}$ |
| **Bernoulli's Equation** | $P + \frac{1}{2}\rho v^2 + \rho g y = \text{Const}$ | Sum of Pressure, Velocity, and Datum Heads |
| **Venturimeter Flux** | $Q = A_1 A_2 \sqrt{\frac{2 h \rho_m g}{\rho(A_1^2 - A_2^2)}}$ | Constriction causes pressure drop $\Delta P$ |
| **Torricelli's Efflux** | $v = \sqrt{2gh}$ | Max range $R_{\max} = H$ at $h = H/2$; Conjugate depths $h, H-h$ |
| **Efflux Reaction Thrust** | $F_{\text{thrust}} = 2\rho a g h$ | Backwards force equals twice hydrostatic force |
| **Emptying Duration** | $t = \frac{A}{a}\sqrt{\frac{2H}{g}}$ | Lower half takes $0.707 \, t_{\text{total}}$ to empty |
| **Poiseuille's Flux** | $Q = \frac{\pi P r^4}{8\eta L}$ | Fluid resistance $R_f = \frac{8\eta L}{\pi r^4} \propto 1/r^4$ |
| **Stokes' Terminal Speed** | $v_t = \frac{2}{9}\frac{r^2(\rho - \sigma)g}{\eta}$ | $v_t \propto r^2$; Heat generation power $P \propto r^5$ |
| **Excess Pressure** | $\Delta P = \frac{2T}{R} \ (\text{drop}); \ \frac{4T}{R} \ (\text{bubble})$ | Concave side is always at higher pressure |
| **Jurin's Capillary Rise** | $h = \frac{2T\cos\theta}{r\rho g} = \frac{2T}{R_m \rho g}$ | Insufficient tube length flattens meniscus: $h R_m = L R'$ |
| **Bubble Coalescence** | $R_{\text{int}} = \frac{r_1 r_2}{r_2 - r_1}$ | Common interface concave toward smaller bubble |


---


### 6.2 High-Yield Exam Traps & Common Conceptual Errors


#### Trap 1: The Weight of an Accelerating or Falling Container on a Scale
* A beaker filled with liquid rests on a spring scale. A block of mass $m$ is lowered into the water suspended by a string from an external support:
  * Force on block from string: $T_{\text{string}} = mg - F_B$.
  * Reading of the scale: By Newton's Third Law, if the liquid exerts an upward force $F_B$ on the block, the block exerts an equal downward reaction force $F_B$ on the liquid!
  * **Scale Reading:** $\mathbf{W_{\text{scale}} = W_{\text{beaker+liquid}} + F_B = W_{\text{beaker+liquid}} + V_{\text{block}}\rho_L g}$.
  * If the string is cut and the block sinks to the bottom, the scale reads the entire combined weight: $W_{\text{scale}} = W_{\text{beaker+liquid}} + mg$.


#### Trap 2: Fluid Efflux Thrust vs. Hydrostatic Orifice Force
* Many students incorrectly compute the thrust force on a tank by multiplying hydrostatic pressure by orifice area: $F = P \cdot a = \rho g h \cdot a$.
* In reality, by momentum conservation, the fluid exits with mass rate $\frac{dm}{dt} = \rho a v$ and exit speed $v = \sqrt{2gh}$:
  $$\mathbf{F_{\text{thrust}} = \left(\frac{dm}{dt}\right) v = (\rho a v) v = \rho a v^2 = \rho a (2gh) = \mathbf{2 \rho a g h}}$$
  The recoil thrust is **EXACTLY TWICE** the static pressure force!


#### Trap 3: Number of Free Surfaces in Excess Pressure Calculations
* A liquid droplet in air has **ONE liquid-air interface** $\implies \Delta P = \frac{2T}{R}$.
* An air bubble submerged in water has **ONE air-liquid interface** $\implies \Delta P = \frac{2T}{R}$.
* A hollow soap bubble blowing in air has **TWO interfaces (inner and outer)** $\implies \Delta P = \frac{4T}{R}$.


#### Trap 4: Viscosity Temperature Scaling in Liquids vs. Gases
* In liquids, heating expands intermolecular spacing, reducing cohesive shear resistance $\implies \mathbf{\eta_{\text{liquid}} \text{ decreases with } T}$.
* In gases, viscosity arises from momentum exchange via random molecular collisions ($\eta \approx \frac{1}{3}\rho u_{\text{avg}} \lambda \propto \sqrt{T}$). Heating increases thermal speeds $\implies \mathbf{\eta_{\text{gas}} \text{ increases with } T}$!