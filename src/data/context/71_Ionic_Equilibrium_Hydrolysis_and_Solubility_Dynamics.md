Chemistry Revision Context: Chapter 71 — Ionic Equilibrium, Hydrolysis & Solubility Dynamics


**Source:** Coaching Modules & Class Notes (`scraped/Coaching_Modules/.../CLASS-11 (JA)/CHEMISTRY/Ionic Equilibrium (Elementary)/`, `1._IEQM_Th_E_d9OGTUo.pdf`, `4._IEQMI_Ex_E_PC_CiqXem6.pdf`, `4._IEQMII_Ex_E_PC_5rDzDWm.pdf`, and `4._IEQMIII_Ex_E_PC_JOiz7U5.pdf`)
**Extracted into:** `JEE/context/`
**Batch:** Physical Chemistry Core — Acid-Base Classical & Modern Formulations (Arrhenius, Bronsted-Lowry, Lewis Donor-Acceptor Paradigms, Amphiprotic Species), Conjugate Acid-Base Equilibrium Thermodynamics ($K_a \cdot K_b = K_w$, $\text{p}K_a + \text{p}K_b = \text{p}K_w = 14$), Water Autoprotolysis & Temperature Dependence ($2\text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{OH}^-$, Endothermic $K_w(T)$, $\text{p}K_w$ Shift from $14.0$ at $25^\circ\text{C}$ to $12.0$ at $90^\circ\text{C}$, Neutrality Axiom $[\text{H}^+] = [\text{OH}^-] \implies \text{pH} = \frac{1}{2}\text{p}K_w$), Strong Acid/Base Systems & The $10^{-8}\text{ M HCl}$ Paradox (Auto-ionization Coupling $[\text{H}^+] = 1.05 \times 10^{-7}\text{ M} \implies \text{pH} = 6.98$), Ostwald's Dilution Law for Weak Electrolytes ($\alpha = \sqrt{K_a/C}$, $[\text{H}^+] = \sqrt{K_a C}$, $\text{pH} = \frac{1}{2}(\text{p}K_a - \log C)$), Comprehensive Salt Hydrolysis Analytics (Weak Acid + Strong Base $\text{pH} = 7 + \frac{1}{2}\text{p}K_a + \frac{1}{2}\log C$, Strong Acid + Weak Base $\text{pH} = 7 - \frac{1}{2}\text{p}K_b - \frac{1}{2}\log C$, Weak Acid + Weak Base $\text{pH} = 7 + \frac{1}{2}\text{p}K_a - \frac{1}{2}\text{p}K_b$ with Concentration-Independent $h = \sqrt{K_w/(K_a K_b)}$), Buffer Solutions & Henderson-Hasselbalch Mechanics (Acidic & Basic Buffers, Maximum Buffer Capacity at $[\text{Salt}] = [\text{Acid}] \implies \text{pH} = \text{p}K_a$, Buffer Index $\beta$), Solubility ($s$) & Solubility Product ($K_{sp} = x^x y^y s^{x+y}$ for $A_x B_y$), Common Ion Suppression Analytics, Precipitation Threshold Criteria ($Q_{sp} > K_{sp}$), Acid-Base Neutralization Titrations & Indicator Equivalence Jump Windows (Phenolphthalein vs. Methyl Orange $\text{pH} = \text{p}K_{\text{In}} \pm 1$), and Comprehensive High-Yield JEE Traps.
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams


---


## 1. Acid-Base Paradigms & Conjugate Pairs


### 1.1 Classical & Modern Acid-Base Concepts


1. **Arrhenius Concept (Water-Mediated Dissociation):**
   * **Acid:** A substance containing hydrogen that dissociates in water to yield hydrogen ions (hydronium ions):
     $$\text{HA}(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{H}_3\text{O}^+(aq) + \text{A}^-(aq)$$
     *(Due to extreme charge density, the proton is heavily hydrated in water as $\text{H}_3\text{O}^+, \text{H}_7\text{O}_3^+, \text{H}_9\text{O}_4^+$).*
   * **Base:** A substance containing hydroxyl groups that dissociates in water to yield hydroxide ions:
     $$\text{BOH}(aq) \rightleftharpoons \text{B}^+(aq) + \text{OH}^-(aq)$$
   * *Critical Exception:* Boric acid $\text{H}_3\text{BO}_3$ is **NOT an Arrhenius acid** because it does not release protons from its own molecule. Instead, it accepts $\text{OH}^-$ from water:
     $$\text{B(OH)}_3 + 2\text{H}_2\text{O} \rightleftharpoons [\text{B(OH)}_4]^- + \text{H}_3\text{O}^+ \quad (\text{Monobasic Lewis Acid!})$$


2. **Brønsted-Lowry Concept (Protonic Transfer):**
   * **Acid:** A proton ($\text{H}^+$) donor.
   * **Base:** A proton ($\text{H}^+$) acceptor.
   * **Conjugate Acid-Base Pairs:** Two species that differ from each other by **exactly one proton ($\text{H}^+$)**:
     $$\mathbf{\text{Conjugate Base} = \text{Acid} - \text{H}^+}$$
     $$\mathbf{\text{Conjugate Acid} = \text{Base} + \text{H}^+}$$
     $$\underbrace{\text{HCl}}_{\text{Acid}_1} + \underbrace{\text{H}_2\text{O}}_{\text{Base}_2} \rightleftharpoons \underbrace{\text{H}_3\text{O}^+}_{\text{Conjugate Acid}_2} + \underbrace{\text{Cl}^-}_{\text{Conjugate Base}_1}$$
   * *Thermodynamic Principle:* Stronger acids possess weaker conjugate bases. Acid-base equilibria always favor the formation of the **weaker acid and weaker base**.


3. **Amphiprotic / Amphoteric Species:**
   Species capable of both donating and accepting a proton depending on the chemical environment:
   * Water: $\text{H}_2\text{O} + \text{HCl} \to \text{H}_3\text{O}^+ + \text{Cl}^-$ (Base); $\text{H}_2\text{O} + \text{NH}_3 \rightleftharpoons \text{NH}_4^+ + \text{OH}^-$ (Acid).
   * Bicarbonate ($\text{HCO}_3^-$), Bisulfate ($\text{HSO}_4^-$), Bisulfide ($\text{HS}^-$), Dihydrogen phosphate ($\text{H}_2\text{PO}_4^-$), Monohydrogen phosphate ($\text{HPO}_4^{2-}$).
   * *Important Trap:* $\text{H}_2\text{PO}_2^-$ (hypophosphite) is **NOT amphiprotic**; it cannot donate a proton because its remaining hydrogens are directly bonded to Phosphorus ($P-H$) and are non-ionizable!


4. **Lewis Concept (Electronic Pair Transfer):**
   * **Acid:** An electron pair acceptor into a vacant orbital (e.g., $\text{BF}_3, \text{AlCl}_3, \text{SiF}_4, \text{H}^+, \text{Fe}^{3+}$).
   * **Base:** An electron pair donor possessing a non-bonding lone pair (e.g., $:\text{NH}_3, \text{H}_2\text{O}:, \text{OH}^-, \text{CN}^-$).


---


### 1.2 Conjugate Pair Ionization Constants ($K_a \cdot K_b = K_w$)


Consider the ionization of a weak monoprotic acid $\text{HA}$ and the hydrolysis of its conjugate base $\text{A}^-$ in water at $25^\circ\text{C}$:


$$\text{HA}(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{H}_3\text{O}^+(aq) + \text{A}^-(aq), \quad K_a = \frac{[\text{H}_3\text{O}^+][\text{A}^-]}{[\text{HA}]}$$


$$\text{A}^-(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{HA}(aq) + \text{OH}^-(aq), \quad K_b = \frac{[\text{HA}][\text{OH}^-]}{[\text{A}^-]}$$


Multiplying the two equilibrium constants:


$$K_a \times K_b = \left( \frac{[\text{H}_3\text{O}^+][\text{A}^-]}{[\text{HA}]} \right) \times \left( \frac{[\text{HA}][\text{OH}^-]}{[\text{A}^-]} \right) = [\text{H}_3\text{O}^+][\text{OH}^-] = K_w$$


$$\mathbf{K_a \cdot K_b = K_w \iff \text{p}K_a + \text{p}K_b = \text{p}K_w = 14.00 \quad (\text{at } 25^\circ\text{C})}$$


* **For Polyprotic Acids (e.g., $\text{H}_3\text{PO}_4$):**
  Due to electrostatic repulsion, removing successive protons becomes exponentially harder: $\mathbf{K_{a1} \gg K_{a2} \gg K_{a3}}$.
  $$\mathbf{K_{a1} \cdot K_{b3} = K_w, \quad K_{a2} \cdot K_{b2} = K_w, \quad K_{a3} \cdot K_{b1} = K_w}$$


---


## 2. Water Autoprotolysis, Temperature Dependence & The pH Scale


![pH Scale Temperature and Acid Base Equilibria](/media/ph_scale_temperature_and_acid_base_equilibria.webp)
*Description: Two-panel acid-base equilibrium reference: (Panel A) Water autoprotolysis curve showing the variation of $        ext{p}K_w$ and neutral $        ext{pH} =  rac{1}{2}        ext{p}K_w$ with temperature ($25^\circ        ext{C}         o 7.0$ vs. $90^\circ        ext{C}         o 6.0$); (Panel B) Extreme strong acid dilution curve illustrating the contribution of water autoprotolysis and resolving the $10^{-8}        ext{ M HCl}$ paradox ($        ext{pH} = 6.98$).*


### 2.1 The Ionic Product of Water ($K_w$)


Pure water undergoes self-ionization (autoprotolysis):


$$2\text{H}_2\text{O}(l) \rightleftharpoons \text{H}_3\text{O}^+(aq) + \text{OH}^-(aq), \quad \Delta H^\circ = +57.3\text{ kJ mol}^{-1} \; (\text{Endothermic})$$


$$\mathbf{K_w = [\text{H}^+][\text{OH}^-] = 1.00 \times 10^{-14} \quad (\text{at } 25^\circ\text{C} = 298.15\text{ K})}$$


$$\mathbf{\text{p}K_w = -\log_{10} K_w = \text{pH} + \text{pOH} = 14.00 \quad (\text{at } 25^\circ\text{C})}$$


---


### 2.2 Temperature Invariance of Neutrality


Because auto-ionization is **endothermic ($\Delta H > 0$)**, according to Le Chatelier's principle:
* As temperature increases, the dissociation equilibrium shifts forward.
* **$K_w$ increases monotonically with temperature** (and $\text{p}K_w$ decreases).


| Temperature ($^\circ\text{C}$) | Ionic Product ($K_w$) | $\text{p}K_w$ | Neutral $\text{pH} = \frac{1}{2}\text{p}K_w$ | Nature of Solution at $\text{pH} = 7$ |
| :---: | :---: | :---: | :---: | :--- |
| **$0^\circ\text{C}$** | $0.114 \times 10^{-14}$ | $14.94$ | **$7.47$** | Acidic ($        ext{pH} <         ext{pH}_{        ext{neutral}}$) |
| **$25^\circ\text{C}$** | $1.000 \times 10^{-14}$ | $14.00$ | **$7.00$** | **Neutral** |
| **$60^\circ\text{C}$** | $9.600 \times 10^{-14}$ | $13.02$ | **$6.51$** | Basic ($        ext{pH} >         ext{pH}_{        ext{neutral}}$) |
| **$90^\circ\text{C}$** | $1.000 \times 10^{-12}$ | $12.00$ | **$6.00$** | **Basic!** |


* **The Universal Neutrality Law:**
  $$\mathbf{\text{Neutrality is strictly defined as } [\text{H}^+] = [\text{OH}^-] \iff \text{pH} = \frac{1}{2}\text{p}K_w}$$
  *(Pure water at $90^\circ\text{C}$ has $\text{pH} = 6.0$, but it is 100% NEUTRAL because $[\text{H}^+] = [\text{OH}^-] = 10^{-6}\text{ M}$).*


---


## 3. Strong Acid/Base Equilibria & The Extreme Dilution Paradox


### 3.1 Normal Strong Acid & Base Solutions


For strong monoprotic acids ($\text{HCl}, \text{HNO}_3, \text{HClO}_4$) and strong bases ($\text{NaOH}, \text{KOH}$):
$$[\text{H}^+] = C_{\text{acid}}, \quad \mathbf{\text{pH} = -\log C_{\text{acid}}}$$
$$[\text{OH}^-] = C_{\text{base}}, \quad \mathbf{\text{pOH} = -\log C_{\text{base}} \implies \text{pH} = 14 - \text{pOH}}$$


* **Mixture of Strong Acids:**
  $$\mathbf{[\text{H}^+]_f = \frac{N_1 V_1 + N_2 V_2 + \dots}{V_1 + V_2 + \dots}}$$
* **Mixture of Strong Acid and Strong Base:**
  * If $N_a V_a > N_b V_b$ (Acid in excess): $\mathbf{[\text{H}^+]_f = \frac{N_a V_a - N_b V_b}{V_a + V_b}}$.
  * If $N_b V_b > N_a V_a$ (Base in excess): $\mathbf{[\text{OH}^-]_f = \frac{N_b V_b - N_a V_a}{V_a + V_b}}$.
  * If $N_a V_a = N_b V_b$: Complete neutralization $\implies \mathbf{\text{pH} = 7.00}$ (at $25^\circ\text{C}$).


---


### 3.2 The Extreme Dilution Paradox ($10^{-8}\text{ M HCl}$)


When strong acid concentration falls below $10^{-6}\text{ M}$, the auto-ionization of water can no longer be ignored:
* *Naive Mistake:* $\text{pH} = -\log(10^{-8}) = 8$ (Absurd! An acid can never produce a basic solution).
* **Exact Coupled Equilibrium Treatment:**
  Let $x = [\text{H}^+] = [\text{OH}^-]$ produced from water autoprotolysis:
  $$[\text{H}^+]_{\text{total}} = [\text{H}^+]_{\text{acid}} + [\text{H}^+]_{\text{water}} = 10^{-8} + x$$
  $$[\text{OH}^-]_{\text{total}} = x$$
  $$K_w = [\text{H}^+]_{\text{total}} [\text{OH}^-]_{\text{total}} = (10^{-8} + x)x = 10^{-14}$$
  $$x^2 + 10^{-8}x - 10^{-14} = 0$$
  Solving the quadratic equation:
  $$x = \frac{-10^{-8} + \sqrt{10^{-16} + 4(10^{-14})}}{2} = \frac{-10^{-8} + 2.0025 \times 10^{-7}}{2} = 0.951 \times 10^{-7}\text{ M}$$
  $$[\text{H}^+]_{\text{total}} = 10^{-8} + 0.951 \times 10^{-7} = \mathbf{1.051 \times 10^{-7}\text{ M}}$$
  $$\mathbf{\text{pH} = -\log_{10}(1.051 \times 10^{-7}) = 7 - 0.0216 = \mathbf{6.98}}$$
  *(The solution is faintly acidic, asymptotically approaching $\text{pH} = 7.00$ as dilution approaches infinity).*


---


## 4. Ostwald's Dilution Law for Weak Electrolytes


For a weak monoprotic acid $\text{HA}$ of analytical concentration $C$ and degree of dissociation $\alpha$:


$$\begin{array}{lcccc}
& \text{HA} & \rightleftharpoons & \text{H}^+ & + & \text{A}^- \\
\text{Initial:} & C & & 0 & & 0 \\
\text{At Equil:} & C(1 - \alpha) & & C\alpha & & C\alpha
\end{array}$$


$$K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]} = \frac{(C\alpha)(C\alpha)}{C(1 - \alpha)} = \mathbf{\frac{C\alpha^2}{1 - \alpha}}$$


1. **Weak Ionization Approximation ($ lpha \le 0.1$ or $\le 10\%$):**
   If $\alpha \le 0.1$, then $1 - \alpha \approx 1$:
   $$\mathbf{\alpha = \sqrt{\frac{K_a}{C}} \quad \text{and} \quad [\text{H}^+] = C\alpha = \sqrt{K_a C}}$$
   $$\mathbf{\text{pH} = -\log \sqrt{K_a C} = \frac{1}{2}(\text{p}K_a - \log C)}$$


2. **Weak Monoacidic Base Analog (e.g., $\text{NH}_4\text{OH}$):**
   $$\mathbf{\alpha = \sqrt{\frac{K_b}{C}}, \quad [\text{OH}^-] = \sqrt{K_b C}, \quad \text{pOH} = \frac{1}{2}(\text{p}K_b - \log C)}$$


3. **Ostwald's Dilution Principle:**
   As concentration decreases ($C \to 0$, infinite dilution), the degree of dissociation approaches unity:
   $$\lim_{C \to 0} \alpha = 1$$
   *(Every weak electrolyte becomes completely dissociated at infinite dilution).*
4. **Relative Strengths of Two Weak Acids:**
   $$\mathbf{\frac{\text{Acidic Strength of HA}_1}{\text{Acidic Strength of HA}_2} = \frac{[\text{H}^+]_1}{[\text{H}^+]_2} = \frac{\alpha_1}{\alpha_2} = \sqrt{\frac{K_{a1}}{K_{a2}}}}$$


---


## 5. Salt Hydrolysis Thermodynamics & Exact pH Formulations


![Salt Hydrolysis and Buffer Mechanics](/media/salt_hydrolysis_and_buffer_mechanics.webp)
*Description: Two-panel aqueous solution chemistry graphic: (Panel A) Salt Hydrolysis Master Formulation Matrix contrasting Weak Acid + Strong Base, Strong Acid + Weak Base, and Weak Acid + Weak Base salts; (Panel B) Henderson-Hasselbalch buffer titration curve showing the maximum buffer capacity plateau at $        ext{pH} =         ext{p}K_a$.*


Salt hydrolysis is the reverse of neutralization, representing the interaction of salt cations or anions with water to alter the $[        ext{H}^+]/[        ext{OH}^-]$ balance:


### 5.1 Type 1: Salt of Strong Acid + Strong Base (No Hydrolysis)
* *Examples:* $\text{NaCl}, \text{KNO}_3, \text{NaClO}_4, \text{BaCl}_2$.
* Neither $\text{Na}^+$ nor $\text{Cl}^-$ hydrolyzes because they are conjugates of strong species.
* **Result:** Solution is neutral; $\mathbf{\text{pH} = 7.00}$ (at $25^\circ\text{C}$).


---


### 5.2 Type 2: Salt of Weak Acid + Strong Base (Anionic Hydrolysis)
* *Examples:* $\text{CH}_3\text{COONa}, \text{KCN}, \text{Na}_2\text{CO}_3, \text{NaC}_2\text{O}_4$.
* The anion $\text{A}^-$ hydrolyzes to form weak acid $\text{HA}$ and release $\text{OH}^-$:
  $$\text{A}^-(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{HA}(aq) + \text{OH}^-(aq)$$
* **Equilibrium Constant of Hydrolysis ($K_h$):**
  $$K_h = \frac{[\text{HA}][\text{OH}^-]}{[\text{A}^-]} = \frac{K_w}{K_a}$$
* **Degree of Hydrolysis ($h$):**
  $$h = \sqrt{\frac{K_h}{C}} = \mathbf{\sqrt{\frac{K_w}{K_a C}}}$$
* **Hydroxide Concentration & pH:**
  $$[\text{OH}^-] = Ch = \sqrt{\frac{K_w C}{K_a}}$$
  $$\mathbf{\text{pH} = \frac{1}{2}\text{p}K_w + \frac{1}{2}\text{p}K_a + \frac{1}{2}\log C = 7 + \frac{1}{2}\text{p}K_a + \frac{1}{2}\log C > 7 \quad (\text{Basic Solution})}$$


---


### 5.3 Type 3: Salt of Strong Acid + Weak Base (Cationic Hydrolysis)
* *Examples:* $\text{NH}_4\text{Cl}, \text{CuSO}_4, \text{FeCl}_3, \text{AlCl}_3$.
* The cation $\text{B}^+$ hydrolyzes to form weak base $\text{BOH}$ and release $\text{H}^+$:
  $$\text{B}^+(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{BOH}(aq) + \text{H}^+(aq)$$
* **Hydrolysis Parameters:**
  $$\mathbf{K_h = \frac{K_w}{K_b}, \quad h = \sqrt{\frac{K_w}{K_b C}}, \quad [\text{H}^+] = \sqrt{\frac{K_w C}{K_b}}}$$
  $$\mathbf{\text{pH} = \frac{1}{2}\text{p}K_w - \frac{1}{2}\text{p}K_b - \frac{1}{2}\log C = 7 - \frac{1}{2}\text{p}K_b - \frac{1}{2}\log C < 7 \quad (\text{Acidic Solution})}$$


---


### 5.4 Type 4: Salt of Weak Acid + Weak Base (Mutual Hydrolysis)
* *Examples:* $\text{CH}_3\text{COONH}_4, \text{NH}_4\text{CN}, (\text{NH}_4)_2\text{CO}_3$.
* Both the cation and anion hydrolyze simultaneously:
  $$\text{B}^+ + \text{A}^- + \text{H}_2\text{O} \rightleftharpoons \text{BOH} + \text{HA}$$
* **Hydrolysis Parameters:**
  $$\mathbf{K_h = \frac{K_w}{K_a K_b}}$$
  $$\mathbf{h = \sqrt{K_h} = \sqrt{\frac{K_w}{K_a K_b}} \quad (\text{CRITICALLY INDEPENDENT OF CONCENTRATION } C!)}$$
  $$[\text{H}^+] = K_a \left(\frac{h}{1 - h}\right) \approx K_a \sqrt{K_h} = \mathbf{\sqrt{\frac{K_w K_a}{K_b}}}$$
  $$\mathbf{\text{pH} = \frac{1}{2}(\text{p}K_w + \text{p}K_a - \text{p}K_b) = 7 + \frac{1}{2}\text{p}K_a - \frac{1}{2}\text{p}K_b}$$
  * **Profound Invariant:** The degree of hydrolysis ($h$) and solution $\text{pH}$ of a Weak Acid + Weak Base salt are **completely independent of concentration $C$**! Diluting the solution changes neither $h$ nor $\text{pH}$.


---


## 6. Buffer Solutions & Henderson-Hasselbalch Mechanics


A buffer solution resists changes in its $\text{pH}$ upon dilution or upon the addition of small amounts of strong acid or strong base.


### 6.1 Acidic & Basic Buffers


1. **Acidic Buffer (Weak Acid + Conjugate Base Salt):**
   * *Example:* $\text{CH}_3\text{COOH} + \text{CH}_3\text{COONa}$.
   * **The Henderson-Hasselbalch Equation:**
     $$\mathbf{\text{pH} = \text{p}K_a + \log_{10} \left( \frac{[\text{Conjugate Base}]}{[\text{Weak Acid}]} \right) = \text{p}K_a + \log_{10} \left( \frac{[\text{Salt}]}{[\text{Acid}]} \right)}$$


2. **Basic Buffer (Weak Base + Conjugate Acid Salt):**
   * *Example:* $\text{NH}_4\text{OH} + \text{NH}_4\text{Cl}$.
   * **Henderson-Hasselbalch Equation for Bases:**
     $$\mathbf{\text{pOH} = \text{p}K_b + \log_{10} \left( \frac{[\text{Conjugate Acid}]}{[\text{Weak Base}]} \right) = \text{p}K_b + \log_{10} \left( \frac{[\text{Salt}]}{[\text{Base}]} \right)}$$
     $$\mathbf{\text{pH} = 14 - \text{pOH}}$$


---


### 6.2 Maximum Buffer Capacity & Effective Buffer Range


1. **Buffer Capacity ($\beta$):**
   Defined as the number of moles of strong acid or strong base required per liter of buffer to produce a change of one unit in $\text{pH}$:
   $$\mathbf{\beta = \frac{db}{d(\text{pH})} = 2.303 \frac{[\text{Acid}][\text{Salt}]}{[\text{Acid}] + [\text{Salt}]}}$$
2. **Condition for Maximum Buffer Capacity:**
   $$\mathbf{[\text{Salt}] = [\text{Acid}] \implies \text{pH} = \text{p}K_a \quad (\text{or } [\text{Salt}] = [\text{Base}] \implies \text{pOH} = \text{p}K_b)}$$
   At this equimolar ratio, resistance to $\text{pH}$ fluctuation is maximized.
3. **Effective Buffer Range:**
   A buffer functions efficiently only within the ratio bounds:
   $$0.1 \le \frac{[\text{Salt}]}{[\text{Acid}]} \le 10 \implies \mathbf{\text{Effective Range: } \text{pH} = \text{p}K_a \pm 1}$$


---


## 7. Solubility ($s$), Solubility Product ($K_{sp}$) & Precipitation


![Solubility Product Ksp and Precipitation Titration](/media/solubility_product_ksp_and_precipitation_titration.webp)
*Description: Two-panel solubility and titration graphic: (Panel A) Mathematical formulation of $K_{sp} = x^x y^y s^{x+y}$ for sparingly soluble salts and the common ion suppression law; (Panel B) Neutralization titration curves for Strong Acid vs. Strong Base and Weak Acid vs. Strong Base, detailing the equivalence jump windows and indicator working ranges.*


### 7.1 Solubility Equilibrium Formulation


For a sparingly soluble salt $A_x B_y$ in dynamic equilibrium with its saturated solution:


$$A_x B_y(s) \rightleftharpoons x A^{y+}(aq) + y B^{x-}(aq)$$


If solubility is $s\text{ mol L}^{-1}$:
$$[A^{y+}] = xs, \quad [B^{x-}] = ys$$


$$\mathbf{K_{sp} = [A^{y+}]^x [B^{x-}]^y = (xs)^x (ys)^y = \mathbf{x^x y^y s^{x+y}}}$$


* **Canonical Salt Types:**
  * **$1:1$ Salt ($\text{AgCl}, \text{BaSO}_4$):** $K_{sp} = (1s)^1 (1s)^1 = \mathbf{s^2 \implies s = \sqrt{K_{sp}}}$.
  * **$1:2$ or $2:1$ Salt ($\text{PbCl}_2, \text{Ag}_2\text{CrO}_4, \text{CaF}_2$):** $K_{sp} = (1s)^1 (2s)^2 = \mathbf{4s^3 \implies s = (K_{sp}/4)^{1/3}}$.
  * **$1:3$ or $3:1$ Salt ($\text{Al(OH)}_3, \text{Ag}_3\text{PO}_4$):** $K_{sp} = (1s)^1 (3s)^3 = \mathbf{27s^4 \implies s = (K_{sp}/27)^{1/4}}$.
  * **$2:3$ Salt ($\text{Ca}_3(\text{PO}_4)_2, \text{As}_2\text{S}_3$):** $K_{sp} = (2s)^2 (3s)^3 = \mathbf{108s^5 \implies s = (K_{sp}/108)^{1/5}}$.


---


### 7.2 Precipitation Threshold Criterion


To determine whether precipitation will occur upon mixing solutions, calculate the **Ionic Product ($Q_{sp}$ or $K_{IP}$)** using initial non-equilibrium ion concentrations:


$$\mathbf{Q_{sp} = [A^{y+}]_{\text{initial}}^x [B^{x-}]_{\text{initial}}^y}$$


1. **$Q_{sp} < K_{sp}$ (Unsaturated Solution):** No precipitation; more solute can dissolve.
2. **$Q_{sp} = K_{sp}$ (Saturated Solution):** System is in dynamic thermodynamic equilibrium.
3. **$\mathbf{Q_{sp} > K_{sp}}$ (Supersaturated Solution):** **PRECIPITATION OCCURS** until $Q_{sp}$ drops back to $K_{sp}$.


---


### 7.3 Common Ion Suppression of Solubility


The solubility of a sparingly soluble salt is dramatically suppressed in a solution already containing one of its constituent ions (Le Chatelier's principle).


* **Example:** Solubility of $\text{AgCl}$ ($K_{sp} = 10^{-10}$) in $0.1\text{ M NaCl}$:
  Let $s'$ be the new solubility of $\text{AgCl}$:
  $$[\text{Ag}^+] = s', \quad [\text{Cl}^-] = s' + 0.1 \approx 0.1\text{ M} \quad (\text{since } s' \ll 0.1)$$
  $$K_{sp} = [\text{Ag}^+][\text{Cl}^-] = s' \times 0.1 = 10^{-10} \implies \mathbf{s' = 10^{-9}\text{ M}}$$
  *(Solubility in pure water was $s = \sqrt{10^{-10}} = 10^{-5}\text{ M}$. The presence of $0.1\text{ M}$ common ion reduced solubility by a factor of $10,000$!).*


---


## 8. Acid-Base Neutralization Titrations & Indicators


### 8.1 Action Mechanism of Acid-Base Indicators


An acid-base indicator is a weak organic acid ($\text{HIn}$) or weak base whose unionized form possesses a distinct color from its ionized conjugate form:


$$\text{HIn}(aq) \rightleftharpoons \text{H}^+(aq) + \text{In}^-(aq)$$
$$\text{Color A (Acidic)} \qquad\qquad\qquad \text{Color B (Basic)}$$


$$K_{\text{In}} = \frac{[\text{H}^+][\text{In}^-]}{[\text{HIn}]} \implies \mathbf{\text{pH} = \text{p}K_{\text{In}} + \log_{10}\left( \frac{[\text{In}^-]}{[\text{HIn}]} \right)}$$


* **Visible Color Transition Zone:**
  The human eye perceives a complete color change when one form is present in at least a 10-fold excess over the other ($0.1 \le \frac{[\text{In}^-]}{[\text{HIn}]} \le 10$):
  $$\mathbf{\text{Indicator Working Range: } \text{pH} = \text{p}K_{\text{In}} \pm 1}$$


---


### 8.2 Indicator Selection for Neutralization Titrations


An indicator is suitable for a titration **only if its working pH range falls completely within the steep equivalence point jump** of the titration curve:


| Titration Type | Equivalence Point pH | Steep Jump pH Window | Suitable Indicators |
| :--- | :---: | :---: | :--- |
| **Strong Acid vs. Strong Base** ($\text{HCl} + \text{NaOH}$) | $7.00$ | **$3.5 - 10.5$** | **Both Phenolphthalein & Methyl Orange** |
| **Weak Acid vs. Strong Base** ($\text{CH}_3\text{COOH} + \text{NaOH}$) | $> 7.00$ ($~8.8$) | **$7.5 - 10.5$** | **Phenolphthalein ONLY** (Methyl Orange fails) |
| **Strong Acid vs. Weak Base** ($\text{HCl} + \text{NH}_4\text{OH}$) | $< 7.00$ ($~5.2$) | **$3.5 - 6.5$** | **Methyl Orange ONLY** (Phenolphthalein fails) |
| **Weak Acid vs. Weak Base** ($\text{CH}_3\text{COOH} + \text{NH}_4\text{OH}$) | $~7.00$ | No sharp jump | **No indicator works** (Conductometric titration required) |


* **Phenolphthalein:** $\text{p}K_{\text{In}} \approx 9.0$, working range **$8.2 - 10.0$** (Colorless in acid $\to$ Pink in base).
* **Methyl Orange:** $\text{p}K_{\text{In}} \approx 3.7$, working range **$3.1 - 4.4$** (Red/Pink in acid $\to$ Yellow in base).


---


## 9. High-Yield JEE Traps & Problem-Solving Pitfalls


1. **The $10^{-8}\text{ M}$ Strong Acid Fallacy:**
   * A solution of $10^{-8}\text{ M HCl}$ or $10^{-8}\text{ M NaOH}$ does NOT have $\text{pH} = 8$ or $\text{pH} = 6$.
   * Water autoprotolysis produces $~10^{-7}\text{ M } \text{H}^+$, yielding $\mathbf{\text{pH} = 6.98}$ for $10^{-8}\text{ M HCl}$ and $\mathbf{\text{pH} = 7.02}$ for $10^{-8}\text{ M NaOH}$.
2. **Neutrality Temperature Shift Trap:**
   * Neutral $\text{pH}$ is $7.00$ ONLY at $25^\circ\text{C}$!
   * At elevated temperatures ($90^\circ\text{C}$), neutral $\text{pH} = 6.00$. A solution with $\text{pH} = 7.00$ at $90^\circ\text{C}$ is **ALKALINE / BASIC**, not neutral!
3. **Weak Acid + Weak Base Salt Dilution Invariance:**
   * The $\text{pH}$ of a $\text{CH}_3\text{COONH}_4$ solution is $\frac{1}{2}(\text{p}K_w + \text{p}K_a - \text{p}K_b)$. It does **not depend on concentration $C$**. Adding water leaves $\text{pH}$ completely unchanged.
4. **Comparing Solubilities from $K_{sp}$ Blindly:**
   * You cannot compare solubilities of different salts simply by comparing their $K_{sp}$ values unless they belong to the **same stoichiometric salt type**!
   * A salt with $K_{sp} = 4 \times 10^{-12}$ ($AB_2$ type, $s = 10^{-4}\text{ M}$) is **more soluble** than a salt with $K_{sp} = 10^{-10}$ ($AB$ type, $s = 10^{-5}\text{ M}$)!