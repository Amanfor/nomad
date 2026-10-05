Chemistry Revision Context: Chapter 16 — Chemical & Ionic Equilibrium


Source: scraped/books_and_pdfs/132346-JEE-Main-Revision-Notes-Ionic-Equilibrium-Notes-Free-PDF-Download.pdf & JEE Main Revision Materials Extracted into: JEE/context/ Batch: Physical Chemistry Core — Dynamic Equilibrium, Le Chatelier Principle, Buffers, Hydrolysis & Solubility Product Status: Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


________________




1. Chemical Equilibrium & Law of Mass Action


1.1 Dynamic Nature of Equilibrium


* Reversible Reactions: Reactions where products react to reform reactants ($aA + bB \rightleftharpoons cC + dD$).
* Dynamic Equilibrium: Attained in a closed system when the rate of the forward reaction equals the rate of the backward reaction ($r_f = r_b$).
   * Macroscopic properties (concentrations, pressure, density, color) remain constant over time.
   * Reactions do not cease; forward and backward processes continue at equal rates.


1.2 Equilibrium Constants ($K_c, K_p, K_x$)


* Law of Mass Action (Guldberg & Waage): The rate of a chemical reaction is directly proportional to the product of active masses (molar concentrations) of reactants raised to their stoichiometric powers.
* Equilibrium Constant in Terms of Concentration ($K_c$): $$K_c = \frac{[C]^c [D]^d}{[A]^a [B]^b}$$
* Equilibrium Constant in Terms of Partial Pressures ($K_p$): $$K_p = \frac{p_C^c p_D^d}{p_A^a p_B^b}$$
* Relation Between $K_p$ and $K_c$: $$K_p = K_c (RT)^{\Delta n_g}$$ where $\Delta n_g = (c + d) - (a + b)$ is the difference in stoichiometric coefficients of gaseous products and gaseous reactants.
   * If $\Delta n_g = 0$: $K_p = K_c$ (e.g., $\text{H}_2(g) + \text{I}_2(g) \rightleftharpoons 2\text{HI}(g)$).
   * If $\Delta n_g > 0$: $K_p > K_c$ when $RT > 1$ (e.g., $\text{PCl}_5(g) \rightleftharpoons \text{PCl}_3(g) + \text{Cl}_2(g)$).
   * If $\Delta n_g < 0$: $K_p < K_c$ when $RT > 1$ (e.g., $\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g)$).


1.3 Thermodynamic Criteria for Equilibrium


* Free Energy Change ($\Delta G$): $$\Delta G = \Delta G^\circ + 2.303 RT \log_{10} Q$$
* At Equilibrium ($\Delta G = 0, Q = K$): $$\Delta G^\circ = -2.303 RT \log_{10} K_{eq} \implies K_{eq} = e^{-\frac{\Delta G^\circ}{RT}}$$
   * If $\Delta G^\circ < 0$: $K_{eq} > 1$ (products predominate at equilibrium).
   * If $\Delta G^\circ > 0$: $K_{eq} < 1$ (reactants predominate at equilibrium).


1.4 Reaction Quotient ($Q$) and Spontaneous Shift


* $Q < K$: Net forward reaction occurs until equilibrium is restored.
* $Q = K$: Dynamic equilibrium; no net change in composition.
* $Q > K$: Net reverse reaction occurs to re-establish equilibrium.


________________




2. Le Chatelier’s Principle & Industrial Equilibria


2.1 Statement of Principle


* If an external stress (change in concentration, temperature, pressure, or volume) is applied to a system at equilibrium, the system shifts in the direction that tends to counteract the imposed change.


2.2 Factors Influencing Equilibrium


1. Concentration: Adding a reactant or removing a product shifts the equilibrium forward; adding a product shifts it backward.
2. Pressure (or Volume): Increasing pressure (decreasing volume) shifts the equilibrium towards the side with fewer gaseous moles (smaller $\sum n_g$).
3. Temperature:
   * Exothermic reactions ($\Delta H < 0$): Lower temperature favors product formation; higher temperature favors reactants.
   * Endothermic reactions ($\Delta H > 0$): Higher temperature favors product formation.
   * van 't Hoff Equation: $$\log_{10}\left(\frac{K_2}{K_1}\right) = \frac{\Delta H^\circ}{2.303 R}\left(\frac{T_2 - T_1}{T_1 T_2}\right)$$
4. Inert Gas Addition:
   * At Constant Volume: Total pressure rises, but partial pressures of reacting gases remain unchanged $\implies$ No shift.
   * At Constant Pressure: Total volume increases, decreasing partial pressures $\implies$ Shifts toward the side with greater gaseous moles ($\Delta n_g > 0$).
5. Catalyst: Accelerates both forward and reverse reaction rates equally by lowering the activation barrier; does not shift the equilibrium position or change $K_{eq}$.


2.3 Visual Preservation: Le Chatelier Perturbation Dynamics


 Description: Time-evolution curves illustrating forward ($r_f$) and backward ($r_b$) rates converging to dynamic equilibrium, the sudden rate divergence upon reactant addition perturbation, and the subsequent asymptotic realignment to a new equilibrium state.


2.4 Industrial Chemical Systems


* Haber's Synthesis of Ammonia: $$\text{N}_2(g) + 3\text{H}_2(g) \rightleftharpoons 2\text{NH}_3(g) \quad (\Delta H = -92.4\text{ kJ/mol}, \Delta n_g = -2)$$
   * Optimal Conditions: High pressure ($200-300\text{ atm}$), moderate temperature ($700-750\text{ K}$), Iron/Molybdenum catalyst.
* Contact Process for Sulphur Trioxide: $$2\text{SO}_2(g) + \text{O}_2(g) \rightleftharpoons 2\text{SO}_3(g) \quad (\Delta H = -196\text{ kJ/mol}, \Delta n_g = -1)$$
   * Optimal Conditions: High pressure, low temperature, $\text{V}_2\text{O}_5$ catalyst.


________________




3. Ionic Equilibrium & Acid-Base Theories


3.1 Ostwald’s Dilution Law for Weak Electrolytes


* For a weak monobasic acid ($\text{HA} \rightleftharpoons \text{H}^+ + \text{A}^-$) with initial concentration $C$ and degree of dissociation $\alpha$: $$K_a = \frac{C\alpha^2}{1 - \alpha}$$
* For $\alpha \ll 1$ (weak electrolyte, $\alpha \le 0.05$): $$K_a \approx C\alpha^2 \implies \alpha = \sqrt{\frac{K_a}{C}}$$ $$[\text{H}^+] = C\alpha = \sqrt{K_a C}$$ $$pH = -\log_{10}[\text{H}^+] = \frac{1}{2}(pK_a - \log_{10} C)$$


3.2 Autoionization of Water & pH Scale


* Self-ionization: $2\text{H}_2\text{O}(l) \rightleftharpoons \text{H}_3\text{O}^+(aq) + \text{OH}^-(aq)$ $$K_w = [\text{H}^+][\text{OH}^-] = 1.0 \times 10^{-14} \text{ at } 25^\circ\text{C}$$ $$pK_w = pH + pOH = 14.0$$
* Effect of Temperature: Water autoionization is endothermic ($\Delta H > 0$). At $60^\circ\text{C}$, $K_w \approx 10^{-13} \implies pK_w = 13 \implies pH_{neutral} = 6.5$ (water remains neutral because $[\text{H}^+] = [\text{OH}^-]$).


3.3 Common Ion Effect


* The suppression of the degree of dissociation of a weak electrolyte by the addition of a strong electrolyte furnishing a common ion:
   * Adding $\text{CH}_3\text{COONa}$ to $\text{CH}_3\text{COOH}$ drastically suppresses $\alpha$ and raises pH.
   * Adding $\text{NH}_4\text{Cl}$ to $\text{NH}_4\text{OH}$ suppresses $[\text{OH}^-]$ to selectively precipitate Group III basic radicals ($\text{Fe}^{3+}, \text{Al}^{3+}, \text{Cr}^{3+}$).


________________




4. Buffer Solutions & Henderson-Hasselbalch Formulation


4.1 Types of Buffers


1. Acidic Buffer: Aqueous mixture of a weak acid and its salt with a strong base (e.g., $\text{CH}_3\text{COOH} + \text{CH}_3\text{COONa}$).
2. Basic Buffer: Aqueous mixture of a weak base and its salt with a strong acid (e.g., $\text{NH}_4\text{OH} + \text{NH}_4\text{Cl}$).


4.2 Henderson-Hasselbalch Equations


* For Acidic Buffer: $$pH = pK_a + \log_{10}\left(\frac{[\text{Conjugate Base}]}{[\text{Weak Acid}]}\right) = pK_a + \log_{10}\left(\frac{[\text{Salt}]}{[\text{Acid}]}\right)$$
* For Basic Buffer: $$pOH = pK_b + \log_{10}\left(\frac{[\text{Conjugate Acid}]}{[\text{Weak Base}]}\right) = pK_b + \log_{10}\left(\frac{[\text{Salt}]}{[\text{Base}]}\right)$$ $$pH = 14 - pOH$$


4.3 Buffer Capacity & Effective Range


* Buffer Capacity ($\beta$): Number of moles of strong acid or base required per liter of buffer to change its pH by one unit: $$\beta = \frac{db}{d(pH)}$$
* Maximum Buffer Action occurs when $[\text{Salt}] = [\text{Acid}] \implies pH = pK_a$.
* Useful Buffer Range: $pH = pK_a \pm 1$ (salt-to-acid ratio between $0.1$ and $10$).


4.4 Visual Preservation: Buffer Operational Window


 Description: Logarithmic buffer response curve showing the operational Henderson-Hasselbalch pH window ($pH = pK_a \pm 1$) across salt-to-acid molar ratios from $0.1$ to $10$, highlighting maximum buffer capacity at equimolar midpoint.


________________




5. Salt Hydrolysis & Titration Curves


5.1 Hydrolysis Constants ($K_h$), Degree ($h$), and pH Equations


1. Salt of Weak Acid + Strong Base ($\text{CH}3\text{COONa}$): Anionic hydrolysis $$K_h = \frac{K_w}{K_a}, \quad h = \sqrt{\frac{K_w}{K_a C}}, \quad pH = 7 + \frac{1}{2}pK_a + \frac{1}{2}\log{10} C$$
2. Salt of Strong Acid + Weak Base ($\text{NH}4\text{Cl}$): Cationic hydrolysis $$K_h = \frac{K_w}{K_b}, \quad h = \sqrt{\frac{K_w}{K_b C}}, \quad pH = 7 - \frac{1}{2}pK_b - \frac{1}{2}\log{10} C$$
3. Salt of Weak Acid + Weak Base ($\text{CH}_3\text{COONH}_4$): Mutual hydrolysis $$K_h = \frac{K_w}{K_a K_b}, \quad h = \sqrt{\frac{K_w}{K_a K_b}}, \quad pH = 7 + \frac{1}{2}pK_a - \frac{1}{2}pK_b$$ (Note: pH of a weak acid - weak base salt is independent of concentration $C$).


5.2 Visual Preservation: Acid-Base Titration Curves


 Description: pH titration curves comparing strong acid vs. strong base (sharp vertical break with equivalence point at neutral $pH = 7.0$) against weak acid vs. strong base (exhibiting an initial buffer plateau and an alkaline equivalence point at $pH \approx 8.8$).


________________




6. Solubility Product ($K_{sp}$) & Precipitation


6.1 Solubility Equilibrium of Sparingly Soluble Salts


* For a salt $A_x B_y(s) \rightleftharpoons x A^{y+}(aq) + y B^{x-}(aq)$ of molar solubility $S$ ($\text{mol/L}$): $$[A^{y+}] = xS, \quad [B^{x-}] = yS$$ $$K_{sp} = [A^{y+}]^x [B^{x-}]^y = (xS)^x (yS)^y = x^x y^y S^{x+y}$$
* Common Stoichiometries:
   * $1:1$ Salt ($\text{AgCl}, \text{BaSO}4$): $K{sp} = S^2 \implies S = \sqrt{K_{sp}}$
   * $1:2$ Salt ($\text{PbCl}2, \text{CaF}2$): $K{sp} = 4S^3 \implies S = \left(\frac{K{sp}}{4}\right)^{1/3}$
   * $1:3$ Salt ($\text{Fe(OH)}3, \text{Al(OH)}3$): $K{sp} = 27S^4 \implies S = \left(\frac{K{sp}}{27}\right)^{1/4}$
   * $2:3$ Salt ($\text{As}_2\text{S}_3, \text{Ca}_3(\text{PO}4)2$): $K{sp} = 108S^5 \implies S = \left(\frac{K{sp}}{108}\right)^{1/5}$


6.2 Criterion for Precipitation


* Ionic Product ($Q_{sp}$): Calculated from non-equilibrium instantaneous concentrations:
   * $Q_{sp} < K_{sp}$: Unsaturated solution; no precipitate forms; more solute can dissolve.
   * $Q_{sp} = K_{sp}$: Saturated solution in dynamic equilibrium.
   * $Q_{sp} > K_{sp}$: Supersaturated solution; spontaneous precipitation occurs until $Q_{sp} = K_{sp}$.


________________




7. High-Yield JEE Problem Archetypes & Formulas


* Archetype 1: Common Ion Suppression on Solubility


   * Solubility of $\text{AgCl}$ in $0.1\text{ M NaCl}$: $$K_{sp} = [\text{Ag}^+][\text{Cl}^-] = S'(S' + 0.1) \approx S'(0.1) \implies S' = \frac{K_{sp}}{0.1} = 10 K_{sp}$$


* Archetype 2: Buffer pH Shift upon Strong Acid/Base Addition


   * For $1\text{ L}$ buffer of $0.1\text{ M CH}3\text{COOH} + 0.1\text{ M CH}3\text{COONa}$ upon adding $0.01\text{ mol HCl}$: $$[\text{Acid}]{new} = 0.1 + 0.01 = 0.11\text{ M}, \quad [\text{Salt}]{new} = 0.1 - 0.01 = 0.09\text{ M}$$ $$pH = pK_a + \log_{10}\left(\frac{0.09}{0.11}\right) = 4.75 - 0.087 = 4.66$$


* Archetype 3: Degree of Dissociation from Vapor Density ($\alpha$)


   * For a gas dissociation $A(g) \rightleftharpoons n B(g)$ with initial vapor density $D$ and equilibrium vapor density $d$: $$\alpha = \frac{D - d}{(n - 1)d} = \frac{M_{theoretical} - M_{observed}}{(n - 1)M_{observed}}$$