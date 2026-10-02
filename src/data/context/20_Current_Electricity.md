# Physics Revision Context: Chapter 20 — Current Electricity

---

### 1.1 Definition & Nature of Electric Current
- Electric current through a cross-sectional area is the net rate of flow of electric charge:
  $$I = \frac{\Delta Q}{\Delta t}, \quad I = \lim_{\Delta t \to 0} \frac{\Delta Q}{\Delta t} = \frac{dQ}{dt}$$
- **Scalar Nature:** Although current has magnitude and direction (along the flow of positive charge), it does not obey vector addition laws; it adds algebraically.
- **Current Density ($\vec{J}$):** A true microscopic vector quantity defined as current per unit normal area:
  $$I = \int \vec{J} \cdot d\vec{A}, \quad \vec{J} = n e \vec{v}_d$$

### 1.2 Drift Velocity & Microscopic Conductivity
- **Thermal Agitation vs. Drift:** Free electrons in a metallic lattice undergo chaotic thermal motion with speeds $v_{\text{th}} \sim 10^5 - 10^6\text{ m/s}$, colliding with positive lattice ions. The average thermal velocity is zero ($\langle \vec{v}_{\text{th}} \rangle = 0$).
- **Drift Velocity ($\vec{v}_d$):** Under an external electric field $\vec{E}$, electrons experience an acceleration $\vec{a} = -\frac{e\vec{E}}{m}$. The average directional velocity acquired between successive collisions (relaxation time $\tau$) is:
  $$\vec{v}_d = -\frac{e \vec{E} \tau}{m}$$
  $$v_d = \frac{e E \tau}{m} = \frac{e V \tau}{m L}$$
  *(For copper under typical currents: $v_d \sim 10^{-4} - 10^{-3}\text{ m/s}$).*
- **Electron Mobility ($\mu$):** Magnitude of drift speed per unit electric field:
  $$\mu = \frac{v_d}{E} = \frac{e \tau}{m} \quad (\text{m}^2/(\text{V}\cdot\text{s}))$$
- **Current–Drift Relation:**
  $$I = n e A v_d$$
  where $n$ is number density of free conduction electrons, and $A$ is cross-sectional area.
- **Microscopic Ohm's Law:**
  $$J = n e v_d = n e \left( \frac{e E \tau}{m} \right) = \left( \frac{n e^2 \tau}{m} \right) E$$
  $$\vec{J} = \sigma \vec{E} = \frac{1}{\rho} \vec{E}$$
  where:
  $$\sigma = \frac{n e^2 \tau}{m} \quad (\text{Conductivity}), \quad \rho = \frac{m}{n e^2 \tau} \quad (\text{Resistivity})$$

---

### 2.1 Macroscopic Ohm’s Law
$$V = I R \implies R = \frac{\rho L}{A}$$
- **Conductance ($G$):** $G = \frac{1}{R} = \frac{\sigma A}{L}$ (measured in Siemens or $\Omega^{-1}$).
- **Stretching / Deforming a Wire (Constant Volume $V = A L$):**
  - If a wire of resistance $R$ is stretched to $n$ times its initial length ($L' = nL$):
    $$A' = \frac{A}{n} \implies R' = \rho \frac{nL}{A/n} = n^2 R$$
  - If radius is reduced by factor $n$ ($r' = r/n$):
    $$R' = n^4 R$$
  - For small fractional changes ($\Delta L / L \le 5\%$):
    $$\frac{\Delta R}{R} \approx 2 \frac{\Delta L}{L} \approx -4 \frac{\Delta r}{r}$$

### 2.2 Temperature Dependence of Resistance
- For metals and conductors, increased thermal vibrations of lattice ions reduce the relaxation time $\tau$, causing resistance to increase with temperature:
  $$R(T) = R_0 (1 + \alpha \Delta T)$$
  $$\rho(T) = \rho_0 (1 + \alpha \Delta T)$$
  where $\alpha$ is the temperature coefficient of resistance:
  $$\alpha = \frac{R_2 - R_1}{R_1 \theta_2 - R_2 \theta_1} \quad (\text{K}^{-1} \text{ or } ^\circ\text{C}^{-1})$$
- **Non-Ohmic Trends:**
  - **Semiconductors & Insulators:** Resistivity decreases exponentially with temperature ($\alpha < 0$) due to thermal generation of charge carriers ($n \propto e^{-E_g / 2k_B T}$).
  - **Alloys (Manganin, Constantan, Nichrome):** Possess very high resistivity and nearly zero temperature coefficient ($\alpha \approx 0$), making them ideal for standard resistance boxes and potentiometer wires.

---

### 3.1 Series and Parallel Configurations
- **Series Combination:** Current $I$ is constant through all elements:
  $$R_{\text{eq}} = \sum_{i=1}^n R_i, \quad V_{\text{total}} = \sum_{i=1}^n V_i$$
  $$\frac{1}{G_{\text{eq}}} = \sum_{i=1}^n \frac{1}{G_i}$$
- **Parallel Combination:** Potential difference $V$ is constant across all elements:
  $$\frac{1}{R_{\text{eq}}} = \sum_{i=1}^n \frac{1}{R_i}, \quad I_{\text{total}} = \sum_{i=1}^n I_i$$
  $$G_{\text{eq}} = \sum_{i=1}^n G_i$$
  - For two resistors in parallel:
    $$R_{\text{eq}} = \frac{R_1 R_2}{R_1 + R_2}, \quad I_1 = I \left(\frac{R_2}{R_1 + R_2}\right), \quad I_2 = I \left(\frac{R_1}{R_1 + R_2}\right)$$

### 3.2 Delta-to-Star ($\Delta - Y$) Transformation
For bridge circuits that resist standard series-parallel reduction:
- Three resistors $R_a, R_b, R_c$ in Delta (mesh) convert to equivalent Star (wye) branches $R_1, R_2, R_3$:
  $$R_1 = \frac{R_b R_c}{R_a + R_b + R_c}, \quad R_2 = \frac{R_c R_a}{R_a + R_b + R_c}, \quad R_3 = \frac{R_a R_b}{R_a + R_b + R_c}$$

---

### 4.1 Kirchhoff’s Current Law (KCL — Point Rule)
- **Statement:** The algebraic sum of currents meeting at any electrical node is identically zero:
  $$\sum I_{\text{junction}} = 0 \implies \sum I_{\text{in}} = \sum I_{\text{out}}$$
- **Physical Foundation:** Principle of Conservation of Electric Charge (no charge accumulates at a junction).

### 4.2 Kirchhoff’s Voltage Law (KVL — Mesh Rule)
- **Statement:** The algebraic sum of potential differences (IR drops and EMFs) encountered along any closed loop in a circuit is zero:
  $$\sum \Delta V = 0 \implies \sum (I R) + \sum \mathcal{E} = 0$$
- **Physical Foundation:** Principle of Conservation of Energy in an electrostatic conservative field.
- **Standard Sign Conventions:**
  1. Traversing a resistor along current direction: $\Delta V = - I R$ (potential drop).
  2. Traversing a resistor opposite to current direction: $\Delta V = + I R$ (potential rise).
  3. Traversing a battery from negative to positive terminal: $\Delta V = + \mathcal{E}$.
  4. Traversing a battery from positive to negative terminal: $\Delta V = - \mathcal{E}$.

---

### 5.1 Balanced Wheatstone Bridge
- In a diamond configuration of four resistors $P, Q, R, S$ with a galvanometer connected across opposite nodes $A$ and $C$:
  $$\text{Null Deflection } (I_G = 0) \iff V_A = V_C \iff \frac{P}{Q} = \frac{R}{S}$$
- **Conjugate Arms:** If the positions of battery and galvanometer are interchanged, the balance condition remains completely unaffected.
- **Sensitivity Condition:** The Wheatstone bridge achieves highest measurement sensitivity when all four arm resistances are of comparable magnitudes ($P \approx Q \approx R \approx S$).

### 5.2 Metre Bridge (Slide Wire Bridge)
- Operates on the null-deflection principle of the Wheatstone bridge along a $100\text{ cm}$ uniform manganin wire.
- If balancing length from zero end is $l\text{ cm}$ against known resistance $R$:
  $$\frac{R}{S} = \frac{l}{100 - l} \implies S = R \left( \frac{100 - l}{l} \right)$$
- **End Corrections:** Non-zero contact resistances at terminal copper strips introduce end shifts $\alpha$ (at $0\text{ cm}$ end) and $\beta$ (at $100\text{ cm}$ end):
  $$\frac{R}{S} = \frac{l + \alpha}{100 - l + \beta}$$

---

## 1. Visual Preservation: Wheatstone & Metre Bridge

![Wheatstone and Metre Bridge](/media/wheatstone_bridge_and_metre_bridge_schematic.webp)
*Description: Structural schematic diagram depicting (Left) the theoretical Wheatstone bridge diamond network showing balance criteria $P/Q = R/S$ with equipotential galvanometer nodes $V_A = V_C \implies I_G = 0$, and (Right) the practical laboratory Metre Bridge apparatus outlining copper boundary strips, resistance box $R$, unknown coil $S$, sliding jockey contact at length $l$, and the algebraic calculation formula incorporating end corrections.*

---

### 6.1 Single Real Cell Characteristics
- Terminal voltage $V$ across a cell of EMF $\mathcal{E}$ and internal resistance $r$:
  - **Discharging (delivering current $I$ to load $R$):**
    $$V = \mathcal{E} - I r = \frac{\mathcal{E} R}{R + r}$$
  - **Charging (current forced into positive terminal):**
    $$V = \mathcal{E} + I r$$
  - **Open Circuit ($I = 0$):** $V = \mathcal{E}$.
  - **Short Circuit ($R = 0$):** $V = 0, \quad I_{\text{sc}} = \frac{\mathcal{E}}{r}$.

### 7.1 Grouping Configurations
2. **Series Grouping ($n$ identical cells):**
   $$\mathcal{E}_{\text{net}} = n \mathcal{E}, \quad r_{\text{net}} = n r \implies I = \frac{n \mathcal{E}}{R + n r}$$
   *(Reversed Cell Trap: If $m$ cells out of $n$ are reversed in polarity, net EMF becomes $(n - 2m)\mathcal{E}$, while internal resistance remains $nr$).*
3. **Parallel Grouping ($m$ identical cells):**
   $$\mathcal{E}_{\text{net}} = \mathcal{E}, \quad r_{\text{net}} = \frac{r}{m} \implies I = \frac{\mathcal{E}}{R + r/m} = \frac{m \mathcal{E}}{m R + r}$$
   - For non-identical parallel cells $(\mathcal{E}_1, r_1)$ and $(\mathcal{E}_2, r_2)$:
     $$\mathcal{E}_{\text{eq}} = \frac{\frac{\mathcal{E}_1}{r_1} + \frac{\mathcal{E}_2}{r_2}}{\frac{1}{r_1} + \frac{1}{r_2}} = \frac{\mathcal{E}_1 r_2 + \mathcal{E}_2 r_1}{r_1 + r_2}, \quad r_{\text{eq}} = \frac{r_1 r_2}{r_1 + r_2}$$
4. **Mixed Grouping ($m$ parallel rows, each containing $n$ cells in series):**
   $$I = \frac{n \mathcal{E}}{R + \frac{n r}{m}} = \frac{m n \mathcal{E}}{m R + n r}$$
   - **Condition for Maximum Current:** Setting $\frac{dI}{dR} = 0$:
     $$m R = n r \implies R = \frac{n r}{m} = r_{\text{battery}}$$
     *(Current is maximized when the external load equals the total equivalent internal resistance of the battery bank).*

---

### 8.1 Joule’s Law of Heating
$$H = I^2 R t = V I t = \frac{V^2}{R} t \quad (\text{Joules})$$
$$P = V I = I^2 R = \frac{V^2}{R} \quad (\text{Watts})$$

### 8.2 Maximum Power Transfer Theorem
- For a fixed source of EMF $\mathcal{E}$ and internal resistance $r$ delivering power $P$ to variable load $R$:
  $$P(R) = I^2 R = \left(\frac{\mathcal{E}}{R + r}\right)^2 R$$
  Setting $\frac{dP}{dR} = 0$:
  $$R = r \implies P_{\text{max}} = \frac{\mathcal{E}^2}{4 r}$$
- **Efficiency at Maximum Power:**
  $$\eta = \frac{P_{\text{load}}}{P_{\text{total}}} = \frac{I^2 R}{I^2 (R + r)} = \frac{r}{2r} = 50\%$$

### 8.3 Electric Fuse Wire Principle
- A fuse melts when the steady-state rate of heat generation equals the rate of radiative cooling from its surface:
  $$I^2 R = h (2\pi r L) \Delta T \implies I^2 \left(\rho \frac{L}{\pi r^2}\right) = 2\pi r L h \Delta T$$
  $$I^2 \propto r^3 \implies I \propto r^{3/2}$$
  *(Crucial JEE Invariant: Current capacity of a fuse wire depends strictly on radius $r$ and is completely independent of wire length $L$).*

---

### 9.1 Working Principle & Potential Gradient
- An ideal voltmeter has infinite internal resistance ($R_V = \infty$). A potentiometer acts as an **ideal voltmeter** because it draws zero current from the test source at the balance point.
- **Potential Gradient ($k$):** Potential drop per unit length along the potentiometer wire of length $L$ and resistance $R_{\text{wire}}$:
  $$k = \frac{V_{AB}}{L} = \left( \frac{E_0}{R_h + R_{\text{wire}} + r_0} \right) \frac{R_{\text{wire}}}{L} \quad (\text{V/m})$$

### 9.2 Standard Applications
5. **Comparison of EMFs of Two Cells:**
   $$\frac{E_1}{E_2} = \frac{l_1}{l_2}$$
6. **Measurement of Internal Resistance ($r$) of a Cell:**
   - With shunt resistance key open: $E = k l_1$.
   - With shunt resistance $R$ closed across cell: $V = k l_2$.
   $$r = R \left( \frac{E}{V} - 1 \right) = R \left( \frac{l_1}{l_2} - 1 \right)$$

---

## 2. Visual Preservation: Potentiometer Dual Circuits

![Potentiometer Circuit Applications](/media/potentiometer_circuit_and_applications.webp)
*Description: Detailed dual-application circuit diagram for the slide-wire potentiometer: (Left) Dual-cell EMF comparison circuit with driving source $E_0$, rheostat $R_h$, two-way key, and balance lengths $l_1, l_2$ yielding $E_1/E_2 = l_1/l_2$, and (Right) Internal resistance measurement circuit showing cell $(E, r)$ shunted by resistance box $R$ and key $K_2$, with formula derivation $r = R(l_1/l_2 - 1)$.*

---

### 10.1 Charging of a Capacitor
Consider a capacitor $C$ in series with resistor $R$ connected to a DC source of EMF $\mathcal{E}$:
$$\mathcal{E} - i R - \frac{q}{C} = 0 \implies R \frac{dq}{dt} + \frac{q}{C} = \mathcal{E}$$
Solving with initial condition $q(0) = 0$:
$$q(t) = Q_0 \left(1 - e^{-t/RC}\right) = C \mathcal{E} \left(1 - e^{-t/\tau}\right)$$
$$i(t) = \frac{dq}{dt} = \frac{\mathcal{E}}{R} e^{-t/RC} = I_0 e^{-t/\tau}$$
where $\tau = R C$ is the capacitive time constant.

- **Physical Invariants at $t = \tau$:**
  - $q(\tau) = Q_0 (1 - e^{-1}) \approx 0.632 Q_0$ ($63.2\%$ of maximum charge).
  - $i(\tau) = I_0 e^{-1} \approx 0.368 I_0$ ($36.8\%$ of initial current).
- **Energy Balance during Charging:**
  - Work done by battery: $W_{\text{batt}} = Q_0 \mathcal{E} = C \mathcal{E}^2$.
  - Energy stored in capacitor: $U_C = \frac{1}{2} C \mathcal{E}^2$.
  - Heat dissipated in resistor: $H = W_{\text{batt}} - U_C = \frac{1}{2} C \mathcal{E}^2$ ($50\%$ independent of $R$).

### 11.1 Discharging of a Capacitor
Discharging an initially charged capacitor $Q_0$ through resistor $R$:
$$q(t) = Q_0 e^{-t/RC} = Q_0 e^{-t/\tau}$$
$$i(t) = -\frac{Q_0}{RC} e^{-t/RC} = -I_0 e^{-t/\tau}$$
- **Half-Life of Charge:**
  $$t_{1/2} = \tau \ln 2 \approx 0.693 R C$$

---

## 3. Visual Preservation: RC Transient Profiles

![RC Circuit Transients](/media/rc_circuit_charging_discharging_transients.webp)
*Description: Mathematical response curves comparing the time-evolution of normalized charge $q/Q_0$ and loop current $i/I_0$ as a function of dimensionless time $t/\tau$: (Left) Charging cycle showcasing asymptotic saturation with the landmark $63.2\%$ charge level at $t = \tau$, and (Right) Discharging curve demonstrating exponential decay with the $36.8\%$ residual charge landmark at $t = \tau$.*

---

### Archetype 1: Equivalent Resistance of a Cube of Resistors
- **Problem:** Twelve identical resistors, each of resistance $R$, form the edges of a cube. Find the equivalent resistance across:
  1. Space Diagonal (opposite corners $A$ and $G$).
  2. Face Diagonal (corners $A$ and $C$).
  3. Edge (adjacent corners $A$ and $B$).
- **Exact Solutions via Symmetry:**
  - **Body Diagonal:** Current divides into 3 equal branches ($I/3$) at entry, then 6 branches ($I/6$) along middle edges, and recombines into 3 branches ($I/3$) at exit:
    $$V = \left(\frac{I}{3}\right) R + \left(\frac{I}{6}\right) R + \left(\frac{I}{3}\right) R = I R \left( \frac{1}{3} + \frac{1}{6} + \frac{1}{3} \right) = \frac{5}{6} I R \implies R_{\text{body}} = \mathbf{\frac{5}{6} R}$$
  - **Face Diagonal:** $R_{\text{face}} = \mathbf{\frac{3}{4} R}$.
  - **Single Edge:** $R_{\text{edge}} = \mathbf{\frac{7}{12} R}$.

---

### Archetype 2: Finite Circuit with Symmetrical Mirror / Perpendicular Planes
- **Problem:** A symmetrical network has a plane of symmetry perpendicular to the line joining input terminals $A$ and $B$.
- **Analysis Rule:**
  - All nodes lying on the perpendicular equipotential line have identical potentials. No current flows through resistors lying along this line; they may be removed.
  - Symmetrical nodes above and below the line of symmetry carry equal currents; junctions along the line of symmetry can be detached/split without affecting circuit current distribution.

---

### Archetype 3: Steady-State Current in Multi-Loop RC Networks
- **Problem:** In a network containing resistors, batteries, and capacitors, find currents in each branch at:
  1. $t = 0$ (immediately after closing switch).
  2. $t \to \infty$ (steady state).
- **Golden Algorithm:**
  - **At $t = 0$:** Replace every uncharged capacitor with a **short-circuit wire** (zero resistance, $V_C = 0$). Solve the purely resistive network.
  - **At $t \to \infty$:** Replace every capacitor with an **open-circuit break** (infinite resistance, branch current $I_{\text{branch}} = 0$). Solve the remaining active mesh, then find the potential difference across the open nodes to determine final charges: $Q = C V_{\text{nodes}}$.
