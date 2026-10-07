Chemistry Revision Context: Chapter 73 — Chemical Equilibrium, Le Chatelier Dynamics & Heterogeneous Systems


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/CHEMISTRY/Chemical Equilibrium/`, `1._CEQ_Th_E_G2A0aSH.pdf`, `2._CEQ_Ex_E.pdf`, `CEQ_Exercise_Sol_ResoSir_nzqusED.pdf`, and `3._CEQ_APSP_E.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Physical Chemistry Core — Dynamic Chemical Equilibrium Axioms (Forward and Reverse Rate Equality $r_f = r_b > 0$, Thermodynamic Balance of Minimum Energy vs. Maximum Entropy), Law of Mass Action & Active Mass Conventions (Pure Solids and Liquids $a = 1$), Equilibrium Constants Formulation ($K_c = \frac{k_f}{k_b}, K_p, K_x$), Fundamental $K_p - K_c$ Linkage ($K_p = K_c(RT)^{\Delta n_g}$ Across $\Delta n_g = 0, > 0, < 0$), Algebraic Rules of $K_{\text{eq}}$ (Reversal $K^{-1}$, Multiplicative Exponentiation $K^n$, Additive Cascade $K_1 \cdot K_2$), Reaction Quotient Dynamics ($Q_c$ vs. $K_c$, Free Energy Vector $\Delta_r G = RT \ln(Q/K_{\text{eq}})$), Heterogeneous Equilibria Solid-Gas Interfaces (Decomposition of $\text{CaCO}_3(s)$, $\text{NH}_4\text{HS}(s)$ Dissociation Pressures $K_p = P^2/4$), Degree of Dissociation ($\alpha$) & Vapor Density Formulations ($\alpha = \frac{D - d}{(n - 1)d}$ for Dissociation, $\alpha = \frac{n(d - D)}{(n - 1)d}$ for Association), Explicit $K_p(\alpha, P)$ Expressions ($\text{PCl}_5 \rightleftharpoons \text{PCl}_3 + \text{Cl}_2$, $\text{N}_2\text{O}_4 \rightleftharpoons 2\text{NO}_2$), Thermodynamic Invariants & The van 't Hoff Isochore ($\frac{d(\ln K)}{dT} = \frac{\Delta H^\circ}{RT^2}$, Integrated Two-Point Formula, Endothermic vs. Exothermic Slopes on $\ln K$ vs. $1/T$), Le Chatelier's Principle & Perturbation Responses (Concentration Spikes, Pressure & Volume Shifts, Temperature Adjustments, Catalyst Acceleration Invariance, Inert Gas Addition at Constant Volume vs. Constant Pressure), Simultaneous Gaseous Equilibria (Common Gaseous Species Coupling), Aqueous Tension & Relative Humidity Mechanics, and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Dynamic Equilibrium & The Law of Mass Action


### 1.1 The Nature of Reversible Reactions & Equilibrium State


Chemical reactions are classified into two broad operational categories:
1. **Irreversible Reactions:**
   Proceed in one direction only to completion. Reactants are completely converted into products; products do not recombine:
   * Precipitation reactions: $\text{AgNO}_3(aq) + \text{NaCl}(aq) \longrightarrow \text{AgCl}(s) \downarrow + \text{NaNO}_3(aq)$.
   * Strong acid-base neutralizations: $\text{HCl}(aq) + \text{NaOH}(aq) \longrightarrow \text{NaCl}(aq) + \text{H}_2\text{O}(l)$.
   * Open vessel gaseous decompositions: $\text{CaCO}_3(s) \xrightarrow{\Delta} \text{CaO}(s) + \text{CO}_2(g) \uparrow$.


2. **Reversible Reactions:**
   Proceed in both forward and backward directions under the same set of experimental conditions. They occur in **closed vessels** and never go to absolute completion:
   $$\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g), \quad \text{PCl}_5(g) \rightleftharpoons \text{PCl}_3(g) + \text{Cl}_2(g), \quad \text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)$$


![Dynamic Equilibrium Rates and Reaction Quotient](/media/dynamic_equilibrium_rates_and_reaction_quotient.webp)
*Description: Two-panel equilibrium kinetics graphic: (Panel A) Attainment of dynamic equilibrium where forward ($r_f$) and reverse ($r_b$) rate curves converge to equality ($r_f = r_b > 0$) as macroscopic properties stabilize; (Panel B) Reaction quotient $Q_c$ compass illustrating thermodynamic directionality toward equilibrium based on $\Delta_r G = RT \ln(Q/K_{        ext{eq}})$.*


3. **Dynamic Chemical Equilibrium Definition:**
   A state in a reversible reaction where the **rate of the forward reaction equals the rate of the reverse reaction**:
   $$\mathbf{r_f = r_b > 0 \quad (\text{Dynamic Nature})}$$
   * **Macroscopic Constancy:** All measurable physical properties of the system—such as concentration, pressure, volume, density, and color—remain **strictly constant over time**.
   * **Bidirectional Approach:** Chemical equilibrium can be attained starting either from pure reactants or from pure products under identical conditions.
   * **Thermodynamic Compromise:** Equilibrium represents the exact balance between two opposing universal tendencies:
     1. Tendency toward minimum potential energy (Enthalpy factor, $\Delta H < 0$).
     2. Tendency toward maximum molecular randomness (Entropy factor, $\Delta S > 0$).


---


### 1.2 Active Mass & The Law of Mass Action


Formulated by Guldberg and Waage (1864): "At a given temperature, the rate of a chemical reaction at any instant is directly proportional to the product of the active masses of the reacting substances, each raised to a power equal to its stoichiometric coefficient in the balanced chemical equation."


1. **Active Mass Formulations:**
   * **For Dilute Aqueous Solutions:** Active mass is represented by **molar concentration**:
     $$\mathbf{[A] = \frac{\text{Moles of } A}{\text{Volume of solution in Liters}} = \frac{n_A}{V} \quad [\text{mol L}^{-1} = \text{M}]}$$
   * **For Ideal Gaseous Systems:** Active mass is represented by **partial pressure**:
     $$\mathbf{p_A = x_A \cdot P_{\text{total}} = \left( \frac{n_A}{n_{\text{total}}} \right) P_{\text{total}} = [A]RT \quad [\text{atm or bar}]}$$
   * **Active Mass of Pure Solids & Pure Liquids:**
     For pure solids and pure liquids, density ($\rho$) and molar mass ($M$) are intensive physical constants:
     $$\text{Molar Concentration} = \frac{\text{Moles}}{\text{Volume}} = \frac{\text{Mass} / M}{\text{Mass} / \rho} = \frac{\rho}{M} = \text{constant}$$
     $$\mathbf{\text{Active Mass of Pure Solid} = 1, \quad \text{Active Mass of Pure Liquid} = 1}$$
     *(Consequently, pure solid and pure liquid terms are completely omitted from equilibrium constant expressions).*


---


## 2. Equilibrium Constants: $K_c$, $K_p$, and $K_x$


Consider a generalized reversible homogeneous reaction:


$$aA + bB \rightleftharpoons cC + dD$$


According to the Law of Mass Action:
$$\text{Rate of Forward Reaction: } \quad r_f = k_f [A]^a [B]^b$$
$$\text{Rate of Backward Reaction: } \quad r_b = k_b [C]^c [D]^d$$


At chemical equilibrium, $r_f = r_b$:
$$k_f [A]^a [B]^b = k_b [C]^c [D]^d \implies \frac{k_f}{k_b} = \frac{[C]^c [D]^d}{[A]^a [B]^b}$$


$$\mathbf{K_c = \frac{k_f}{k_b} = \frac{[C]^c [D]^d}{[A]^a [B]^b}}$$


where $K_c$ is the **Equilibrium Constant in terms of molar concentration**, and $k_f, k_b$ are the rate constants of forward and reverse reactions.


---


### 2.1 Equilibrium Constant in Terms of Partial Pressures ($K_p$)


For gas-phase reactions, expressing active masses in terms of equilibrium partial pressures:


$$\mathbf{K_p = \frac{p_C^c \, p_D^d}{p_A^a \, p_B^b}}$$


---


### 2.2 Derivation of the Fundamental Relation: $K_p = K_c(RT)^{\Delta n_g}$


From the ideal gas equation of state:
$$P V = n R T \implies P = \left( \frac{n}{V} \right) R T = C R T = [\text{Gas}] R T$$


Substituting $p_A = [A]RT, \; p_B = [B]RT, \; p_C = [C]RT, \; p_D = [D]RT$ into the $K_p$ expression:


$$K_p = \frac{\Big([C]RT\Big)^c \Big([D]RT\Big)^d}{\Big([A]RT\Big)^a \Big([B]RT\Big)^b} = \frac{[C]^c [D]^d}{[A]^a [B]^b} \times \frac{(RT)^{c+d}}{(RT)^{a+b}}$$


$$\mathbf{K_p = K_c \left( RT \right)^{\Delta n_g}}$$


where:
$$\mathbf{\Delta n_g = (c + d) - (a + b) = \sum n_g(\text{gaseous products}) - \sum n_g(\text{gaseous reactants})}$$
*(Units: $R = 0.0821\text{ L atm mol}^{-1}\text{ K}^{-1} = 0.08314\text{ L bar mol}^{-1}\text{ K}^{-1}$, and $T$ in Kelvin).*


* **Three Fundamental Cases of $\Delta n_g$:**
  1. **When $\mathbf{\Delta n_g = 0}$:**
     $$K_p = K_c (RT)^0 \implies \mathbf{K_p = K_c}$$
     * Both $K_p$ and $K_c$ are **pure dimensionless numbers**.
     * Examples: $\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g), \quad \text{N}_2(g) + \text{O}_2(g) \rightleftharpoons 2\text{NO}(g)$.
  2. **When $\mathbf{\Delta n_g > 0}$:**
     $$K_p = K_c (RT)^{\Delta n_g} \implies \mathbf{K_p > K_c \quad (\text{for } RT > 1\text{ atm L mol}^{-1}, \text{ i.e., } T > 12.2\text{ K})}$$
     * Units: $K_p \to (\text{atm})^{\Delta n_g}$, $K_c \to (\text{mol L}^{-1})^{\Delta n_g}$.
     * Examples: $\text{PCl}_5(g) \rightleftharpoons \text{PCl}_3(g) + \text{Cl}_2(g) \; (\Delta n_g = +1), \quad 2\text{NH}_3(g) \rightleftharpoons \text{N}_2(g) + 3\text{H}_2(g) \; (\Delta n_g = +2)$.
  3. **When $\mathbf{\Delta n_g < 0}$:**
     $$K_p = K_c (RT)^{-|\Delta n_g|} \implies \mathbf{K_p < K_c \quad (\text{for } RT > 1)}$$
     * Examples: $\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g) \; (\Delta n_g = -2), \quad 2\text{SO}_2(g) + \text{O}_2(g) \rightleftharpoons 2\text{SO}_3(g) \; (\Delta n_g = -1)$.


---


### 2.3 Mole Fraction Equilibrium Constant ($K_x$)


In terms of equilibrium mole fractions ($x_i$):
$$K_x = \frac{x_C^c \, x_D^d}{x_A^a \, x_B^b}$$


Since partial pressure $p_i = x_i P_{\text{total}}$:
$$K_p = \frac{(x_C P)^c (x_D P)^d}{(x_A P)^a (x_B P)^b} = \frac{x_C^c x_D^d}{x_A^a x_B^b} (P_{\text{total}})^{\Delta n_g}$$


$$\mathbf{K_p = K_x \left( P_{\text{total}} \right)^{\Delta n_g}}$$


---


## 3. Algebraic Rules & Invariance of Equilibrium Constants


1. **Reversal of Chemical Equation:**
   If $A + B \rightleftharpoons C + D$ has equilibrium constant $K$, then for $C + D \rightleftharpoons A + B$:
   $$\mathbf{K' = \frac{1}{K} = K^{-1}}$$
2. **Multiplication by a Stoichiometric Factor ($n$):**
   If reaction is multiplied by factor $n$: $nA + nB \rightleftharpoons nC + nD$:
   $$\mathbf{K' = K^n}$$
   *(If divided by $2$, $K' = \sqrt{K}$).*
3. **Additive Combination of Reactions:**
   If a reaction is the algebraic sum of two independent reactions ($\text{Reaction } 3 = \text{Reaction } 1 + \text{Reaction } 2$):
   $$\mathbf{K_3 = K_1 \times K_2}$$
4. **Subtraction of Reactions:**
   If $\text{Reaction } 3 = \text{Reaction } 1 - \text{Reaction } 2$:
   $$\mathbf{K_3 = \frac{K_1}{K_2}}$$
5. **Absolute Invariance:**
   For a given balanced chemical equation, the equilibrium constant $K_{\text{eq}}$ is **strictly a function of temperature alone**! It is completely independent of:
   * Initial concentrations of reactants or products.
   * Total pressure and volume of the reaction chamber.
   * Presence of inert gases or catalysts.


---


## 4. Reaction Quotient ($Q$) & Spontaneity Direction


The **Reaction Quotient ($Q$)** has the identical mathematical formulation as the equilibrium constant, but is evaluated using **instantaneous non-equilibrium concentrations or partial pressures**:


$$Q_c = \frac{[C]^c [D]^d}{[A]^a [B]^b} \quad (\text{at any arbitrary state})$$


* **Thermodynamic Link to Gibbs Free Energy:**
  $$\Delta_r G = \Delta_r G^\circ + RT \ln Q$$
  Since $\Delta_r G^\circ = -RT \ln K_{\text{eq}}$:
  $$\mathbf{\Delta_r G = -RT \ln K_{\text{eq}} + RT \ln Q = RT \ln\left( \frac{Q}{K_{\text{eq}}} \right)}$$


1. **$Q < K_{\text{eq}}$ (Reactants in Excess):**
   * $\frac{Q}{K_{\text{eq}}} < 1 \implies \mathbf{\Delta_r G < 0}$ (Thermodynamically spontaneous).
   * **Direction:** The net reaction proceeds in the **FORWARD direction** (Reactants $\longrightarrow$ Products) until $Q = K_{\text{eq}}$.
2. **$Q = K_{\text{eq}}$ (Dynamic Equilibrium):**
   * $\frac{Q}{K_{\text{eq}}} = 1 \implies \mathbf{\Delta_r G = 0}$.
   * **Direction:** System is in dynamic chemical equilibrium. No net change in composition.
3. **$Q > K_{\text{eq}}$ (Products in Excess):**
   * $\frac{Q}{K_{\text{eq}}} > 1 \implies \mathbf{\Delta_r G > 0}$ (Reverse reaction is spontaneous).
   * **Direction:** The net reaction proceeds in the **BACKWARD / REVERSE direction** (Products $\longrightarrow$ Reactants) until $Q = K_{\text{eq}}$.


---


## 5. Degree of Dissociation ($ lpha$) & Vapor Density Analytics


![Degree of Dissociation and Heterogeneous Equilibria](/media/degree_of_dissociation_and_heterogeneous_equilibria.webp)
*Description: Two-panel dissociation and heterogeneous equilibrium graphic: (Panel A) Derivation architecture relating degree of dissociation $ lpha =  rac{D - d}{(n - 1)d}$ to theoretical vapor density ($D$) and observed vapor density ($d$); (Panel B) Heterogeneous and simultaneous equilibria principles highlighting omitted solid terms and multi-reaction partial pressure coupling.*


When a gaseous substance dissociates into smaller gaseous fragments, the total number of moles increases, which decreases the average molar mass and the observed vapor density ($d$) of the equilibrium gas mixture.


### 5.1 General Formulation for Dissociation ($A_n \rightleftharpoons n B$)


Consider $1\text{ mole}$ of initial reactant gas $A_n$:


$$\begin{array}{lcccc}
& A_n(g) & \rightleftharpoons & n B(g) \\
\text{Initial moles:} & 1 & & 0 \\
\text{Equilibrium moles:} & 1 - \alpha & & n\alpha
\end{array}$$


$$\text{Total moles at equilibrium} = (1 - \alpha) + n\alpha = 1 + (n - 1)\alpha$$


From Avogadro's law, at constant temperature and pressure:
$$\frac{\text{Theoretical Molar Mass (}M_{\text{th}}\text{)}}{\text{Observed Molar Mass (}M_{\text{obs}}\text{)}} = \frac{\text{Theoretical Vapor Density (}D\text{)}}{\text{Observed Vapor Density (}d\text{)}} = \frac{\text{Total Equilibrium Moles}}{\text{Initial Moles}}$$


$$\frac{D}{d} = \frac{1 + (n - 1)\alpha}{1}$$


$$\mathbf{\alpha = \frac{D - d}{(n - 1)d} = \frac{M_{\text{th}} - M_{\text{obs}}}{(n - 1)M_{\text{obs}}}}$$


where:
* $D = \frac{M_{\text{theoretical}}}{2}$ (Calculated from molecular formula of reactant).
* $d = \frac{M_{\text{observed}}}{2} = \frac{\text{Vapor density of mixture measured experimentally}}{1}$.
* $n = \text{Total gaseous product moles generated per mole of reactant}$.


---


### 5.2 Canonical Gaseous Dissociation Systems


1. **Dissociation of Phosphorus Pentachloride ($\text{PCl}_5 \rightleftharpoons \text{PCl}_3 + \text{Cl}_2$):**
   Here, $n = 1 + 1 = 2$:
   $$\mathbf{\alpha = \frac{D - d}{d}}$$
   At equilibrium with total pressure $P$:
   $$n_{\text{total}} = (1 - \alpha) + \alpha + \alpha = 1 + \alpha$$
   $$p_{\text{PCl}_5} = \left(\frac{1-\alpha}{1+\alpha}\right)P, \quad p_{\text{PCl}_3} = \left(\frac{\alpha}{1+\alpha}\right)P, \quad p_{\text{Cl}_2} = \left(\frac{\alpha}{1+\alpha}\right)P$$
   $$K_p = \frac{p_{\text{PCl}_3} \cdot p_{\text{Cl}_2}}{p_{\text{PCl}_5}} = \frac{\left(\frac{\alpha P}{1+\alpha}\right)^2}{\left(\frac{1-\alpha}{1+\alpha}\right)P}$$
   $$\mathbf{K_p = \frac{\alpha^2 P}{1 - \alpha^2}}$$
   * For small dissociation ($\alpha \ll 1$): $\alpha \approx \sqrt{\frac{K_p}{P}} \propto \frac{1}{\sqrt{P}}$ (Dissociation increases as pressure decreases).


2. **Dissociation of Dinitrogen Tetroxide ($\text{N}_2\text{O}_4 \rightleftharpoons 2\text{NO}_2$):**
   Here, $n = 2$:
   $$\mathbf{\alpha = \frac{D - d}{d}}$$
   $$n_{\text{total}} = 1 + \alpha$$
   $$p_{\text{N}_2\text{O}_4} = \left(\frac{1-\alpha}{1+\alpha}\right)P, \quad p_{\text{NO}_2} = \left(\frac{2\alpha}{1+\alpha}\right)P$$
   $$K_p = \frac{p_{\text{NO}_2}^2}{p_{\text{N}_2\text{O}_4}} = \frac{\left(\frac{2\alpha P}{1+\alpha}\right)^2}{\left(\frac{1-\alpha}{1+\alpha}\right)P}$$
   $$\mathbf{K_p = \frac{4\alpha^2 P}{1 - \alpha^2}}$$


3. **Association / Polymerization Reactions ($n A \rightleftharpoons A_n$):**
   For association into multimers (e.g., dimerization of carboxylic acids in vapor phase):
   $$\mathbf{\alpha = \frac{d - D}{d\left(1 - \frac{1}{n}\right)} = \frac{n(d - D)}{(n - 1)d}}$$
   *(Observed vapor density increases: $d > D$).*


---


## 6. Heterogeneous & Simultaneous Equilibria


### 6.1 Heterogeneous Equilibrium Formulations


In heterogeneous reactions, reactants and products exist in distinct physical phases. By convention, the active masses of pure solids and pure liquids are constant and set to unity ($1$):


1. **Thermal Decomposition of Calcium Carbonate:**
   $$\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g)$$
   $$\mathbf{K_c = [\text{CO}_2], \quad K_p = p_{\text{CO}_2}}$$
   * **Critical Deduction:** At a given temperature, the equilibrium partial pressure of $\text{CO}_2$ (dissociation pressure) is **completely independent of the quantities of solid $\text{CaCO}_3$ and $\text{CaO}$** present, provided both solids coexist!


2. **Dissociation of Ammonium Hydrogen Sulfide:**
   $$\text{NH}_4\text{HS}(s) \rightleftharpoons \text{NH}_3(g) + \text{H}_2\text{S}(g)$$
   If solid $\text{NH}_4\text{HS}$ is placed in an evacuated container, equimolar amounts of $\text{NH}_3$ and $\text{H}_2\text{S}$ are produced:
   $$p_{\text{NH}_3} = p_{\text{H}_2\text{S}} = \frac{P_{\text{total}}}{2}$$
   $$\mathbf{K_p = p_{\text{NH}_3} \cdot p_{\text{H}_2\text{S}} = \left( \frac{P_{\text{total}}}{2} \right)^2 = \frac{P_{\text{total}}^2}{4}}$$
   $$\mathbf{P_{\text{total}} = 2\sqrt{K_p}}$$


---


### 6.2 Simultaneous Equilibria


When two or more equilibrium reactions take place concurrently in the same closed vessel sharing common chemical species:
* The partial pressure or concentration of the shared species must be **identical across all equilibrium constant equations**.


* **Classic Simultaneous Model:**
  $$\text{Reaction 1: } \quad \text{Solid}_1(s) \rightleftharpoons A(g) + B(g), \quad K_{p1} = p_A \cdot p_B$$
  $$\text{Reaction 2: } \quad \text{Solid}_2(s) \rightleftharpoons A(g) + C(g), \quad K_{p2} = p_A \cdot p_C$$
  Let $p_{A1} = x$ from Reaction 1 and $p_{A2} = y$ from Reaction 2:
  * Total partial pressure of $A$: $p_A = x + y$.
  * Partial pressure of $B$: $p_B = x$.
  * Partial pressure of $C$: $p_C = y$.
  $$K_{p1} = (x + y)x, \quad K_{p2} = (x + y)y$$
  Adding the two expressions:
  $$K_{p1} + K_{p2} = (x + y)(x + y) = (x + y)^2 = p_A^2$$
  $$\mathbf{p_A = \sqrt{K_{p1} + K_{p2}}}$$
  $$\mathbf{P_{\text{total}} = p_A + p_B + p_C = (x + y) + x + y = 2(x + y) = 2\sqrt{K_{p1} + K_{p2}}}$$


---


## 7. Le Chatelier's Principle & Perturbation Responses


![Le Chatelier Principle Perturbation Matrix](/media/le_chatelier_principle_perturbation_matrix.webp)
*Description: Two-panel equilibrium response reference: (Panel A) Comprehensive Le Chatelier perturbation matrix detailing directional shifts under concentration, pressure, volume, temperature, catalyst, and inert gas perturbations; (Panel B) Van 't Hoff isochore plot ($\ln K_{        ext{eq}}$ vs. $1/T$) showing negative slope for endothermic and positive slope for exothermic reactions.*


### 7.1 The Le Chatelier Principle Formulation


**Statement (Henri Louis Le Chatelier, 1884):** "If a system at dynamic chemical equilibrium is subjected to a perturbation in concentration, temperature, pressure, or volume, the equilibrium shifts in the direction that opposes and tends to counteract the imposed change."


---


### 7.2 Systematic Perturbation Architecture


1. **Effect of Concentration:**
   * Adding a reactant or removing a product: $Q < K_{\text{eq}} \implies$ Equilibrium shifts **FORWARD**.
   * Adding a product or removing a reactant: $Q > K_{\text{eq}} \implies$ Equilibrium shifts **BACKWARD**.


2. **Effect of Pressure and Volume (Gas Phase):**
   From $p_i = \frac{n_i RT}{V}$, decreasing volume increases total pressure ($P \propto 1/V$):
   * **Pressure $\uparrow$ (or Volume $\downarrow$):** Equilibrium shifts toward the side with **fewer moles of gas** (reducing pressure, $\Delta n_g < 0$).
   * **Pressure $\downarrow$ (or Volume $\uparrow$):** Equilibrium shifts toward the side with **more moles of gas** (increasing pressure, $\Delta n_g > 0$).
   * **When $\mathbf{\Delta n_g = 0}$:** Pressure and volume variations have **ABSOLUTELY NO EFFECT** on the equilibrium position or degree of dissociation!


3. **Effect of Temperature & The van 't Hoff Isochore:**
   Temperature is the **ONLY variable that alters the numerical value of $K_{\text{eq}}$**:
   $$\mathbf{\frac{d(\ln K_{\text{eq}})}{dT} = \frac{\Delta_r H^\circ}{RT^2}}$$
   Integrated van 't Hoff Equation:
   $$\mathbf{\ln\left( \frac{K_2}{K_1} \right) = \frac{\Delta_r H^\circ}{R} \left( \frac{1}{T_1} - \frac{1}{T_2} \right) = \frac{\Delta_r H^\circ}{R} \left( \frac{T_2 - T_1}{T_1 T_2} \right)}$$
   $$\mathbf{\log_{10}\left( \frac{K_2}{K_1} \right) = \frac{\Delta_r H^\circ}{2.303 R} \left( \frac{T_2 - T_1}{T_1 T_2} \right)}$$
   * **For Endothermic Reactions ($\Delta H^\circ > 0$):**
     * Increasing temperature ($T_2 > T_1$) yields $\mathbf{K_2 > K_1}$.
     * Equilibrium shifts **FORWARD** (absorbs thermal energy).
   * **For Exothermic Reactions ($\Delta H^\circ < 0$):**
     * Increasing temperature ($T_2 > T_1$) yields $\mathbf{K_2 < K_1}$.
     * Equilibrium shifts **BACKWARD** (opposes heat input).


4. **Effect of a Catalyst:**
   * A catalyst lowers the activation energy ($E_a$) of both forward and backward reactions by the identical amount.
   * Rates $r_f$ and $r_b$ are accelerated equally.
   * **A catalyst does NOT alter the equilibrium constant ($K_{\text{eq}}$) or the equilibrium composition!** It merely reduces the time required to attain equilibrium.


---


### 7.3 Addition of an Inert Gas (Noble Gas / Non-Reacting Species)


1. **At Constant Volume ($V = \text{constant}$):**
   * Total pressure increases because additional inert gas molecules collide with the container walls.
   * However, the partial pressure of each reacting gas remains constant:
     $$p_i = \frac{n_i RT}{V} = \text{unchanged}$$
   * The concentration of each component $[i] = n_i/V$ is unaltered.
   * **Conclusion:** **Addition of an inert gas at constant volume has ZERO EFFECT on chemical equilibrium!**


2. **At Constant Pressure ($P_{\text{total}} = \text{constant}$):**
   * To keep total pressure constant when inert gas is introduced, the container volume must expand ($V \uparrow$).
   * As volume expands, the partial pressures of all reacting gases decrease:
     $$p_i = x_i P = \left( \frac{n_i}{n_{\text{total}} + n_{\text{inert}}} \right) P \downarrow$$
   * System responds by shifting toward the side with the **larger number of gaseous moles** ($\Delta n_g > 0$):
     * If $\Delta n_g > 0$: Shifts **FORWARD** (e.g., dissociation of $\text{PCl}_5$ increases).
     * If $\Delta n_g < 0$: Shifts **BACKWARD** (e.g., synthesis of $\text{NH}_3$ decreases).
     * If $\Delta n_g = 0$: **NO EFFECT**.


---


## 8. Vapor Pressure & Relative Humidity Mechanics


1. **Aqueous Tension (Saturated Vapor Pressure):**
   The equilibrium vapor pressure exerted by water vapor in dynamic equilibrium with liquid water in a closed container at temperature $T$:
   $$\text{H}_2\text{O}(l) \rightleftharpoons \text{H}_2\text{O}(g), \quad K_p = p_{\text{H}_2\text{O}} = \text{Aqueous Tension}$$
   * Aqueous tension depends **only on temperature**, completely independent of the surface area or volume of liquid water.
   * **Total Pressure of Moist Gas:**
     $$\mathbf{P_{\text{moist gas}} = P_{\text{dry gas}} + \text{Aqueous Tension}}$$
     $$\mathbf{P_{\text{dry gas}} = P_{\text{moist gas}} - \text{Aqueous Tension}}$$


2. **Relative Humidity (RH):**
   $$\mathbf{\text{Relative Humidity (RH)} = \frac{\text{Partial Pressure of } \text{H}_2\text{O}(g) \text{ present in air}}{\text{Saturated Vapor Pressure (Aqueous Tension) at same } T} \times 100\%}$$


---


## 9. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The Inert Gas at Constant Volume Fallacy:**
   * Students see total pressure increase and assume the equilibrium shifts toward fewer gaseous moles.
   * **TRAP:** At constant volume, partial pressures $p_i = \frac{n_i RT}{V}$ do not change! Inert gas addition at constant volume has **NO EFFECT**.
2. **The Catalyst Equilibrium Shift Fallacy:**
   * Adding a catalyst does NOT increase the yield of products!
   * A catalyst accelerates the rate of attainment of equilibrium, but leaves $K_{\text{eq}}$, $\Delta_r G^\circ$, and final equilibrium concentrations **completely unchanged**.
3. **The Solid Mass Heterogeneous Trap:**
   * For $\text{CaCO}_3(s) \rightleftharpoons \text{CaO}(s) + \text{CO}_2(g)$, doubling the mass of $\text{CaCO}_3(s)$ does **NOT** increase the equilibrium pressure of $\text{CO}_2$!
   * $K_p = p_{\text{CO}_2}$ depends strictly on temperature.
4. **Vapor Density Molecular Formula Factor ($n$):**
   * In $\alpha = \frac{D - d}{(n - 1)d}$, $n$ is the number of moles of gaseous products produced per mole of reactant.
   * For $\text{PCl}_5 \to \text{PCl}_3 + \text{Cl}_2$, $n = 2 \implies \alpha = \frac{D - d}{d}$.
   * For $2\text{NO}_2 \rightleftharpoons \text{N}_2\text{O}_4$, rewriting as $\text{NO}_2 \rightleftharpoons \frac{1}{2}\text{N}_2\text{O}_4$ makes $n = 1/2$, yielding an association formula! Always verify $n$ relative to $1\text{ mole}$ of reactant.