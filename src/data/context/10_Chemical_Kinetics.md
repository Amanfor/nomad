Chemistry Revision Context: Chapter 10 — Chemical Kinetics

________________

1. Reaction Rates & Measurement

1.1 Fundamentals of Chemical Kinetics

- Chemical Kinetics studies the rates of chemical reactions, the reaction mechanisms (step-by-step pathways), and the reaction conditions influencing reaction speeds.
- In contrast to chemical thermodynamics (which determines whether a reaction is spontaneous, $\Delta G < 0$), kinetics determines the time scale and rate at which the reaction proceeds.

1.2 Definition of Rate of Reaction

- The rate of a chemical reaction is defined as the change in concentration of a reactant or product per unit time:
   - For a general reaction: $aA + bB \to cC + dD$
   - Overall Reaction Rate: $$\text{Rate} = -\frac{1}{a}\frac{d[A]}{dt} = -\frac{1}{b}\frac{d[B]}{dt} = +\frac{1}{c}\frac{d[C]}{dt} = +\frac{1}{d}\frac{d[D]}{dt}$$
   - Negative signs indicate reactant disappearance; positive signs indicate product appearance.
- Units of Reaction Rate:
   - Solution phase: $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$ (or $\text{M}\cdot\text{s}^{-1}$)
   - Gas phase: $\text{atm}\cdot\text{s}^{-1}$ or $\text{bar}\cdot\text{s}^{-1}$

1.3 Average Rate vs. Instantaneous Rate

- Average Rate ($r_{avg}$): Measured across a finite time interval $\Delta t$: $$r_{avg} = -\frac{\Delta[A]}{\Delta t} = \frac{\Delta[C]}{\Delta t}$$
- Instantaneous Rate ($r_{inst}$): The rate at a specific instant, obtained as the limiting value as $\Delta t \to 0$: $$r_{inst} = \lim_{\Delta t \to 0} \left(-\frac{\Delta[A]}{\Delta t}\right) = -\frac{d[A]}{dt}$$
   - Geometrically, $r_{inst}$ is the negative slope of the tangent line to the concentration-time curve for a reactant at time $t$.

1.4 Factors Influencing Reaction Rates

2. Concentration of Reactants: Higher concentration increases the frequency of collisions per unit volume per second.
3. Temperature: Increasing temperature elevates the kinetic energy of molecules; a $10^\circ\text{C}$ rise roughly doubles or triples the rate.
4. Nature and Physical State of Reactants: Homogeneous reactions generally proceed faster than heterogeneous reactions; finely divided solids react faster due to increased surface area.
5. Catalyst: Lowers the activation energy barrier ($E_a$), providing an alternate, accelerated pathway without altering $\Delta G$ or equilibrium constant $K_{eq}$.
6. Nature of Solvent: Polar solvents stabilize transition states in ionic reactions (e.g., nucleophilic substitutions proceed faster in polar aprotic solvents like DMF vs. protic solvents like methanol).

________________

7. Rate Law, Order & Molecularity

2.1 Rate Law Expression

- The experimental relationship expressing reaction rate in terms of reactant concentrations: $$\text{Rate} = k [A]^x [B]^y$$
   - $k$: Rate constant (specific reaction rate, independent of reactant concentrations, dependent on temperature and catalyst).
   - $x, y$: Partial orders with respect to reactants $A$ and $B$.
   - Overall Order ($n$): $n = x + y$.
   - Note: $x$ and $y$ are experimentally determined and do not necessarily match stoichiometric coefficients $a$ and $b$.

2.2 Units of Rate Constant ($k$)

- For an $n$-th order reaction: $$\text{Units of } k = \left(\text{mol}\cdot\text{L}^{-1}\right)^{1-n}\cdot\text{s}^{-1} = \text{M}^{1-n}\cdot\text{s}^{-1}$$
   - Zero order ($n = 0$): $\text{mol}\cdot\text{L}^{-1}\cdot\text{s}^{-1}$ (or $\text{M}\cdot\text{s}^{-1}$)
   - First order ($n = 1$): $\text{s}^{-1}$
   - Second order ($n = 2$): $\text{L}\cdot\text{mol}^{-1}\cdot\text{s}^{-1}$ (or $\text{M}^{-1}\cdot\text{s}^{-1}$)

2.3 Order vs. Molecularity

- Order: Experimental quantity; can be zero, fractional, integer, or negative; applies to elementary and complex reactions alike.
- Molecularity: Theoretical quantity; the number of colliding species involved in an elementary step; must be a non-zero positive integer ($1, 2, 3$); molecularity $> 3$ is exceedingly rare due to low collision probability.

2.4 Integrated Rate Laws

8. Zero-Order Reactions:

   - Differential Form: $-\frac{d[A]}{dt} = k$
   - Integrated Form: $[A]_t = [A]_0 - kt$
   - Half-Life ($t_{1/2}$): Setting $[A]{t{1/2}} = \frac{[A]0}{2} \implies t{1/2} = \frac{[A]_0}{2k}$
   - Total Completion Time: $t_{100%} = \frac{[A]0}{k} = 2 t{1/2}$

9. First-Order Reactions:

   - Differential Form: $-\frac{d[A]}{dt} = k[A]$
   - Integrated Form: $\ln[A]_t = \ln[A]_0 - kt \implies [A]_t = [A]_0 e^{-kt}$
   - Logarithmic Form: $k = \frac{2.303}{t}\log_{10}\left(\frac{[A]_0}{[A]_t}\right)$
   - Half-Life ($t_{1/2}$): $$t_{1/2} = \frac{\ln 2}{k} = \frac{0.693}{k}$$
   - Independent of initial concentration $[A]_0$.

10. Second-Order Reactions ($A + A \to \text{Products}$):

   - Differential Form: $-\frac{d[A]}{dt} = k[A]^2$
   - Integrated Form: $\frac{1}{[A]_t} = \frac{1}{[A]_0} + kt$
   - Half-Life ($t_{1/2}$): $t_{1/2} = \frac{1}{k[A]_0}$

2.5 Visual Preservation: Integrated Rate Laws Comparison

 Description: Comparative concentration vs. time $[A]_t$ vs. $t$ curves across zero, first, and second order reaction kinetics, illustrating the strictly linear depletion in zero order ($[A]_t = [A]_0 - kt$), the exponential decay curve in first order ($[A]_t = [A]_0 e^{-kt}$), and the asymptotic reciprocal profile in second order kinetics.

________________

11. Temperature Dependence & Arrhenius Equation

3.1 Arrhenius Law & Activation Energy

- The rate constant increases exponentially with absolute temperature: $$k = A e^{-\frac{E_a}{RT}}$$
   - $A$: Arrhenius pre-exponential factor (frequency factor, collision frequency).
   - $E_a$: Activation energy (minimum threshold energy required to initiate the transformation).
   - $R$: Universal gas constant ($8.314\text{ J}\cdot\text{mol}^{-1}\cdot\text{K}^{-1}$).
   - $T$: Absolute temperature in Kelvin.
   - $e^{-E_a/RT}$: Boltzmann fraction of molecules possessing kinetic energy $\ge E_a$.

3.2 Logarithmic Form & Temperature Variation

- Natural log form: $$\ln k = \ln A - \frac{E_a}{RT}$$
- Base-10 log form: $$\log_{10} k = \log_{10} A - \frac{E_a}{2.303 RT}$$
- Two-temperature equation: $$\ln\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right) \implies \log_{10}\left(\frac{k_2}{k_1}\right) = \frac{E_a}{2.303 R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)$$

3.3 Visual Preservation: Arrhenius Linear Plot

 Description: Linear plot of $\ln k$ versus reciprocal absolute temperature $1/T$, demonstrating the constant negative slope equal to $-E_a/R$ and vertical intercept equal to $\ln A$.

3.4 Catalysis & Reaction Energetics

- A catalyst accelerates a reaction by offering a pathway with lower activation energy ($E_{a,cat} < E_{a,uncat}$).
- Rate acceleration factor: $$\frac{k_{cat}}{k_{uncat}} = e^{\frac{E_{a,uncat} - E_{a,cat}}{RT}}$$
- Standard enthalpy change $\Delta H = E_{a,forward} - E_{a,backward}$ remains completely unchanged by the presence of a catalyst.

3.5 Visual Preservation: Activation Energy & Catalysis Profile

 Description: Potential energy versus reaction coordinate profile comparing uncatalyzed and catalyzed pathways, highlighting the lowering of activation energy barrier from $E_a$ to $E_{a,cat}$, the transition state peak, and the invariant exothermic reaction enthalpy $\Delta H < 0$.

________________

12. Complex Reactions & Pseudo-Kinetics

4.1 Pseudo-First Order Reactions

- Reactions that are higher order but follow first-order kinetics because one or more reactants are present in large excess (so their concentration remains essentially constant).
- Acid-Catalyzed Hydrolysis of Ethyl Acetate: $$\text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O} \xrightarrow{\text{H}^+} \text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH}$$ $$\text{Rate} = k' [\text{CH}_3\text{COOC}_2\text{H}_5][\text{H}_2\text{O}] = k [\text{CH}_3\text{COOC}_2\text{H}_5] \quad \text{where } k = k'[\text{H}_2\text{O}]$$
- Inversion of Cane Sugar: $$\text{C}{12}\text{H}{22}\text{O}_{11} + \text{H}2\text{O} \xrightarrow{\text{H}^+} \text{C}6\text{H}{12}\text{O}6 \text{ (glucose)} + \text{C}6\text{H}{12}\text{O}6 \text{ (fructose)}$$ $$k = \frac{2.303}{t}\log{10}\left(\frac{r_0 - r\infty}{r_t - r\infty}\right) \quad (\text{using optical rotation } r)$$

4.2 Collision Theory of Gaseous Reactions

- Reaction rate equation according to collision theory: $$\text{Rate} = P \cdot Z_{AB} \cdot e^{-\frac{E_a}{RT}}$$
   - $Z_{AB}$: Collision frequency between reacting species $A$ and $B$.
   - $P$: Steric factor (orientation factor, accounting for the requirement of proper geometric alignment during collision).

________________

13. High-Yield JEE Problem Archetypes & Formulas

- Archetype 1: Standard First-Order Progression Times

   - $t_{50%} = 1 \cdot t_{1/2}$
   - $t_{75%} = 2 \cdot t_{1/2}$
   - $t_{87.5%} = 3 \cdot t_{1/2}$
   - $t_{93.75%} = 4 \cdot t_{1/2}$
   - $t_{99%} = \frac{2}{0.3010} t_{1/2} \approx \frac{20}{3} t_{1/2} \approx 6.64 t_{1/2}$
   - $t_{99.9%} = \frac{3}{0.3010} t_{1/2} \approx 10 t_{1/2}$

- Archetype 2: General Half-Life Proportionality $$t_{1/2} \propto \frac{1}{[A]_0^{n-1}}$$

   - Taking ratio for two different initial concentrations: $$\frac{(t_{1/2})1}{(t{1/2})2} = \left(\frac{[A]{0,2}}{[A]_{0,1}}\right)^{n-1}$$

- Archetype 3: Temperature Coefficient ($\mu$) $$\mu = \frac{k_{T+10}}{k_T} \approx 2 \text{ to } 3$$

   - For a temperature change of $\Delta T$: $$\frac{k_{T_2}}{k_{T_1}} = \mu^{\frac{\Delta T}{10}}$$
