Chemistry Revision Context: Chapter 33 — Electrochemistry and Ionic Conduction


**Source:** `scraped/Coaching_Modules/Praveen FL 2023-24/.../Notes/9. Electrochemistry/Electrochemistry-1.pdf` through `FL-ELECTRO-6.pdf`  
**Extracted into:** `JEE/context/`  
**Batch:** Chemistry Physical Chemistry Core — Galvanic vs. Electrolytic Cells, Daniell Cell Architecture, Salt Bridge Functions & Electrolyte Invariants, Electrochemical Series (ECS) & Thermodynamic Displacements, Nernst Equation for Half-Cells and Full Cells ($E_{\text{cell}} = E_{\text{cell}}^\circ - \frac{0.0591}{n}\log_{10} Q$), Equilibrium Constant Dynamics ($E^\circ = \frac{0.0591}{n}\log_{10} K_{\text{eq}}$), Half-Cell Typologies (Metal-Metal Ion, Gas Electrodes, Redox Electrodes, Metal-Insoluble Salt-Anion $Ag/AgCl/Cl^-$ & Calomel $Hg/Hg_2Cl_2/Cl^-$), Concentration Cells ($E^\circ = 0$), Faraday's Laws of Electrolysis ($w = Z I t = \frac{E}{96500} I t$), Preferential Discharge Theory & Oxygen Overvoltage Kinetics, Electrolytic Conductance (Resistance, Cell Constant, Specific Conductance $\kappa$, Molar $\Lambda_m$ and Equivalent $\Lambda_{\text{eq}}$ Conductivities), Debye-Hückel-Onsager Formulation ($\Lambda_m = \Lambda_m^\circ - A\sqrt{c}$), Kohlrausch's Law of Independent Migration of Ions & Quantitative Applications ($\alpha = \Lambda_m/\Lambda_m^\circ, K_a, K_{\text{sp}}$), Conductometric Titration Trajectories, Commercial Batteries (Lead-Acid Storage Discharging/Charging Stoichiometry), $H_2-O_2$ Fuel Cell Efficiency ($\eta = \Delta G/\\Delta H$), and Electrochemical Corrosion Mechanisms  
**Status:** Verified, LaTeX-Validated, and Formatted with Preserved Visual Diagrams  


---


## 1. Electrochemical Foundations & Galvanic Cells


### 1.1 Galvanic vs. Electrolytic Cells
* **Galvanic (Voltaic) Cell:** Transforms chemical potential energy of an inherently spontaneous redox reaction ($\Delta G < 0$) directly into electrical energy ($E_{\text{cell}} > 0$).
* **Electrolytic Cell:** Uses externally supplied electrical energy from a DC power supply to drive an inherently non-spontaneous redox transformation ($\Delta G > 0, E_{\text{cell}} < 0$).


| Feature | Galvanic Cell | Electrolytic Cell |
| :--- | :--- | :--- |
| **Energy Conversion** | Chemical Energy $\to$ Electrical Energy | Electrical Energy $\to$ Chemical Energy |
| **Spontaneity** | Spontaneous ($\Delta G < 0, E_{\text{cell}} > 0$) | Non-spontaneous ($\Delta G > 0$) driven by external voltage |
| **Anode (Oxidation)** | **Negative ($-ve$)** electrode (source of electrons) | **Positive ($+ve$)** electrode (connected to battery $+ve$) |
| **Cathode (Reduction)**| **Positive ($+ve$)** electrode (sink of electrons) | **Negative ($-ve$)** electrode (connected to battery $-ve$) |
| **Electron Flow** | Anode $\to$ Cathode through external circuit | Enters at cathode, leaves at anode via external battery |


---


### 1.2 Visual Preservation: Daniell Cell & Electrochemical Conventions


![Daniell Cell and Electrochemical Conventions](/media/daniell_cell_and_electrochemical_conventions.webp)
*Description: Two-panel electrochemical architecture diagram: (A) Complete schematic of the Daniell Cell showing the zinc anode in $\mathrm{ZnSO}_4$ solution, copper cathode in $\mathrm{CuSO}_4$ solution, voltmeter registering $E_{\mathrm{cell}}^\circ = 1.10\text{ V}$, electron flow along external wire, and inverted U-tube salt bridge with counter-ion diffusion; (B) IUPAC cell representation syntax, standard electrode potential calculation conventions, and critical salt bridge electrolyte constraints.*


---


### 1.3 Daniell Cell Architecture & Salt Bridge Principles
* **Overall Daniell Cell Reaction ($n = 2$):**
  $$\text{Zn}(s) + \text{Cu}^{2+}(aq) \to \text{Zn}^{2+}(aq) + \text{Cu}(s) \quad E_{\text{cell}}^\circ = +1.10\text{ V}$$
  * **Anode (Oxidation Half):** $\text{Zn}(s) \to \text{Zn}^{2+}(aq) + 2e^- \quad E_{\text{ox}}^\circ = +0.76\text{ V}$
  * **Cathode (Reduction Half):** $\text{Cu}^{2+}(aq) + 2e^- \to \text{Cu}(s) \quad E_{\text{red}}^\circ = +0.34\text{ V}$
* **Salt Bridge Construction & Functions:**
  An inverted U-tube packed with a saturated solution of an inert electrolyte ($\text{KCl}, \text{KNO}_3, \text{NH}_4\text{NO}_3$) in 5% agar-agar gel.
  1. **Circuit Closure:** Permits electrical charge conduction via migration of ions without gross mechanical mixing of solutions.
  2. **Electrical Neutrality:** Neutralizes excess positive charge accumulating at the anode ($\text{Cl}^-$ migrates into anode compartment) and excess negative charge at the cathode ($\text{K}^+$ migrates into cathode compartment).
  3. **Abolishes Liquid Junction Potential ($E_{\text{LJP}}$):** Prevents the generation of an opposing boundary potential at the interface of two contacting electrolyte solutions.
* **Essential Salt Bridge Electrolyte Constraints (JEE Traps):**
  * **Equal Transference Velocities:** The cation and anion must possess nearly identical ionic mobilities ($u_+ \approx u_-$, transport numbers $t_+ \approx t_-$) so no unequal charge separation occurs at the bridge junctions.
  * **Chemical Inertness & Precipitation Prohibition:** The salt bridge electrolyte must not react with any species in either half-cell.
    * *Absolute Ban:* $\mathbf{KCl}$ **cannot be used** if either half-cell contains $\text{Ag}^+$, $\text{Pb}^{2+}$, $\text{Hg}_2^{2+}$, or $\text{Tl}^+$ ions because insoluble precipitates ($\text{AgCl}\downarrow, \text{PbCl}_2\downarrow$) form, clogging the salt bridge pores. For these cells, $\text{KNO}_3$ or $\text{NH}_4\text{NO}_3$ must be used.


---


## 2. Thermodynamics of Electrochemical Cells & Electrode Potentials


### 2.1 Free Energy & Electrical Work
The maximum non-$PV$ electrical work obtainable from a reversible electrochemical cell equals the decrease in Gibbs free energy of the cell reaction:
$$w_{\text{electrical, max}} = -\Delta G$$
For a cell reaction transferring $n$ moles of electrons under potential difference $E_{\text{cell}}$:
$$\mathbf{\Delta G = -n F E_{\text{cell}}}$$
$$\mathbf{\Delta G^\circ = -n F E_{\text{cell}}^\circ}$$
where $F = 96485\text{ C/mol} \approx 96500\text{ C/mol}$ is the Faraday constant.
* **Intensive vs. Extensive Rule (Critical JEE Principle):**
  * Free energy change $\Delta G$ is an **extensive property** and is strictly additive.
  * Cell potential $E_{\text{cell}}$ is an **intensive property** and **CANNOT be added directly** if electrons are exchanged:
    $$\Delta G_3^\circ = \Delta G_1^\circ + \Delta G_2^\circ \implies -n_3 F E_3^\circ = -n_1 F E_1^\circ - n_2 F E_2^\circ$$
    $$\mathbf{E_3^\circ = \frac{n_1 E_1^\circ + n_2 E_2^\circ}{n_3}}$$
  * *Example:* Finding $E_{\text{Fe}^{3+}/\text{Fe}}^\circ$ from $E_{\text{Fe}^{3+}/\text{Fe}^{2+}}^\circ = +0.77\text{ V}$ ($n_1 = 1$) and $E_{\text{Fe}^{2+}/\text{Fe}}^\circ = -0.44\text{ V}$ ($n_2 = 2$):
    $$E_{\text{Fe}^{3+}/\text{Fe}}^\circ = \frac{1(+0.77) + 2(-0.44)}{3} = \frac{0.77 - 0.88}{3} = -0.037\text{ V} \quad (\ne 0.77 - 0.44!)$$


### 2.2 Standard Hydrogen Electrode (SHE) & Potential Scale
* Absolute half-cell potentials cannot be measured in isolation; all electrode potentials are defined relative to the **Standard Hydrogen Electrode (SHE)**:
  $$\text{Pt}(s) \mid \text{H}_2(g, 1\text{ bar}) \mid \text{H}^+(aq, 1\text{ M})$$
* By universal convention, the standard reduction potential of SHE is defined as **zero at all temperatures**:
  $$\mathbf{E_{\text{H}^+/\text{H}_2}^\circ \equiv 0.000\text{ V}}$$
* **Standard Cell Potential:**
  $$\mathbf{E_{\text{cell}}^\circ = E_{\text{cathode}}^\circ - E_{\text{anode}}^\circ = E_{\text{red(Right)}}^\circ - E_{\text{red(Left)}}^\circ}$$
  (where both $E_{\text{cathode}}^\circ$ and $E_{\text{anode}}^\circ$ are expressed strictly as **Standard Reduction Potentials, SRP**).


---


## 3. The Nernst Equation & Chemical Equilibrium


### 3.1 Nernst Equation Formulation
For a general reversible redox process:
$$a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D}$$
Combining $\Delta G = \Delta G^\circ + RT \ln Q$ with $\Delta G = -nFE_{\text{cell}}$:
$$-nFE_{\text{cell}} = -nFE_{\text{cell}}^\circ + RT \ln Q$$
$$E_{\text{cell}} = E_{\text{cell}}^\circ - \frac{RT}{nF} \ln Q = E_{\text{cell}}^\circ - \frac{2.303 RT}{nF}\log_{10} Q$$
At the standard reference temperature of $298.15\text{ K}$ ($25^\circ\text{C}$):
$$\frac{2.303 RT}{F} = \frac{2.303 \times 8.314 \times 298.15}{96485} = 0.05916\text{ V} \approx 0.0591\text{ V}$$
$$\mathbf{E_{\text{cell}} = E_{\text{cell}}^\circ - \frac{0.0591}{n}\log_{10}\left(\frac{[\text{C}]^c [\text{D}]^d}{[\text{A}]^a [\text{B}]^b}\right)}$$


### 3.2 Cell Potential at Dynamic Equilibrium
When an operating galvanic cell reaches thermodynamic equilibrium:
$$E_{\text{cell}} = 0 \quad \text{and} \quad Q = K_{\text{eq}}$$
$$0 = E_{\text{cell}}^\circ - \frac{0.0591}{n}\log_{10} K_{\text{eq}}$$
$$\mathbf{E_{\text{cell}}^\circ = \frac{0.0591}{n}\log_{10} K_{\text{eq}} \iff \log_{10} K_{\text{eq}} = \frac{n E_{\text{cell}}^\circ}{0.0591}}$$
*Important Distinction:* At equilibrium, $E_{\text{cell}} = 0$ and $\Delta G = 0$. However, the **standard potential $E_{\text{cell}}^\circ$ and standard free energy $\Delta G^\circ$ are constant non-zero thermodynamic parameters**.


### 3.3 Hydrogen Electrode Potential vs. pH
For the hydrogen half-cell reduction:
$$2\text{H}^+(aq) + 2e^- \rightleftharpoons \text{H}_2(g)$$
$$E = E^\circ - \frac{0.0591}{2}\log_{10}\left(\frac{P_{\text{H}_2}}{[\text{H}^+]^2}\right) = 0 - \frac{0.0591}{2}\left[\log_{10} P_{\text{H}_2} - 2\log_{10}[\text{H}^+]\right]$$
At standard hydrogen pressure $P_{\text{H}_2} = 1\text{ bar}$:
$$\mathbf{E_{\text{H}^+/\text{H}_2} = -0.0591 \cdot \text{pH}}$$
* At $\text{pH} = 0 \implies E = 0\text{ V}$
* In pure neutral water ($\text{pH} = 7$) at $25^\circ\text{C}$:
  $$E = -0.0591 \times 7 = -0.4137\text{ V} \approx -0.414\text{ V}$$


---


## 4. Half-Cell Typologies & Metal-Insoluble Salt Electrodes


### 4.1 Classification of Half-Cells
1. **Metal-Metal Ion Half-Cell:** Metal strip in solution of its own cation ($M^{n+}/M$, e.g., $\text{Zn}^{2+}/\text{Zn}, \text{Cu}^{2+}/\text{Cu}$).
2. **Gas-Ion Half-Cell:** Inert metal foil ($\text{Pt}$) coated with platinum black over which gas is bubbled into a solution of its conjugate ion (e.g., $\text{Pt} \mid \text{H}_2 \mid \text{H}^+$ or $\text{Pt} \mid \text{Cl}_2 \mid \text{Cl}^-$).
3. **Redox Half-Cell:** Inert platinum wire immersed in a solution containing both oxidized and reduced ionic states of the same element (e.g., $\text{Pt} \mid \text{Fe}^{3+}, \text{Fe}^{2+}$ or $\text{Pt} \mid \text{MnO}_4^-, \text{Mn}^{2+}, \text{H}^+$).


---


### 4.2 Visual Preservation: Insoluble Salt Electrodes & Concentration Cells


![Metal Insoluble Salt Electrode and Concentration Cells](/media/metal_insoluble_salt_electrode_and_concentration_cells.webp)
*Description: Two-panel advanced electrode plot: (A) Structural and thermodynamic analysis of metal-insoluble salt-anion half-cells ($\mathrm{Ag}/\mathrm{AgCl}/\mathrm{Cl}^-$ and Calomel $\mathrm{Hg}/\mathrm{Hg}_2\mathrm{Cl}_2/\mathrm{Cl}^-$), deriving their standard potentials as a function of solubility product $K_{\mathrm{sp}}$; (B) Concentration cell mechanics comparing electrode concentration cells (gas pressure disparities) versus electrolyte concentration cells (ion molarity gradients).*


---


### 4.3 Metal-Insoluble Salt-Anion Electrodes
Consists of a metal in contact with a sparingly soluble salt of the metal, immersed in a solution containing the common anion.
1. **Silver-Silver Chloride Electrode ($\text{Ag} \mid \text{AgCl}(s) \mid \text{Cl}^-$):**
   * Reduction Half-Reaction:
     $$\text{AgCl}(s) + e^- \rightleftharpoons \text{Ag}(s) + \text{Cl}^-(aq)$$
   * Thermodynamic Derivation using Hess's Law:
     $$\text{AgCl}(s) \rightleftharpoons \text{Ag}^+(aq) + \text{Cl}^-(aq) \quad \Delta G_1^\circ = -RT \ln K_{\text{sp}}$$
     $$\text{Ag}^+(aq) + e^- \rightleftharpoons \text{Ag}(s) \quad \Delta G_2^\circ = -F E_{\text{Ag}^+/\text{Ag}}^\circ$$
     $$\Delta G^\circ = \Delta G_1^\circ + \Delta G_2^\circ \implies -F E_{\text{Cl}^-/\text{AgCl}/\text{Ag}}^\circ = -F E_{\text{Ag}^+/\text{Ag}}^\circ - RT \ln K_{\text{sp}}$$
     $$\mathbf{E_{\text{Cl}^-/\text{AgCl}/\text{Ag}}^\circ = E_{\text{Ag}^+/\text{Ag}}^\circ + 0.0591 \log_{10} K_{\text{sp}}(\text{AgCl})}$$
   * Non-standard Potential:
     $$\mathbf{E = E_{\text{Cl}^-/\text{AgCl}/\text{Ag}}^\circ - 0.0591 \log_{10}[\text{Cl}^-] = E_{\text{Ag}^+/\text{Ag}}^\circ - 0.0591 \log_{10}\left(\frac{[\text{Cl}^-]}{K_{\text{sp}}}\right)}$$
2. **Calomel Reference Electrode ($\text{Pt} \mid \text{Hg}(l) \mid \text{Hg}_2\text{Cl}_2(s) \mid \text{Cl}^-$):**
   * Mercurous ion is dimeric and diamagnetic: $[\text{Hg}-\text{Hg}]^{2+}$.
   * Reduction Half-Reaction ($n = 2$):
     $$\text{Hg}_2\text{Cl}_2(s) + 2e^- \rightleftharpoons 2\text{Hg}(l) + 2\text{Cl}^-(aq)$$
     $$\mathbf{E_{\text{Cl}^-/\text{Hg}_2\text{Cl}_2/\text{Hg}}^\circ = E_{\text{Hg}_2^{2+}/\text{Hg}}^\circ + \frac{0.0591}{2}\log_{10} K_{\text{sp}}(\text{Hg}_2\text{Cl}_2)}$$


---


## 5. Concentration Cells


A cell where both half-cells are constructed from identical chemical substances, generating a potential difference solely due to a difference in concentrations or partial pressures.
* **Fundamental Invariant:** The standard cell potential is identically zero:
  $$\mathbf{E_{\text{cell}}^\circ \equiv 0.000\text{ V}}$$


### 5.1 Electrode Concentration Cells
Electrodes have different activities/pressures immersed in an identical solution:
$$\text{Pt} \mid \text{H}_2(g, P_1) \mid \text{H}^+(aq, c) \parallel \text{H}^+(aq, c) \mid \text{H}_2(g, P_2) \mid \text{Pt}$$
* Net Cell Reaction: $\text{H}_2(g, P_1) \to \text{H}_2(g, P_2)$
* Nernst Equation ($n = 2$):
  $$\mathbf{E_{\text{cell}} = \frac{0.0591}{2}\log_{10}\left(\frac{P_1}{P_2}\right)}$$
  * Spontaneous ($E_{\text{cell}} > 0$) when $\mathbf{P_1 > P_2}$.


### 5.2 Electrolyte Concentration Cells
Identical electrodes dipping into solutions of differing electrolyte concentrations:
$$\text{Zn}(s) \mid \text{Zn}^{2+}(aq, c_1) \parallel \text{Zn}^{2+}(aq, c_2) \mid \text{Zn}(s)$$
* Net Cell Reaction: $\text{Zn}^{2+}(c_2) \to \text{Zn}^{2+}(c_1)$
* Nernst Equation ($n = 2$):
  $$\mathbf{E_{\text{cell}} = \frac{0.0591}{n}\log_{10}\left(\frac{c_2}{c_1}\right)}$$
  * Spontaneous ($E_{\text{cell}} > 0$) when $\mathbf{c_2 > c_1}$ (Cathode concentration exceeds Anode concentration).


---


## 6. Electrolytic Cells & Faraday's Laws of Electrolysis


### 6.1 Faraday's Laws of Electrolysis
1. **First Law:** The mass ($w$) of any substance deposited or liberated at an electrode is directly proportional to the quantity of electricity ($Q$) passed through the electrolyte:
   $$w \propto Q \implies w = Z \cdot Q = Z \cdot I \cdot t$$
   where $Z$ is the **electrochemical equivalent (ECE)** of the substance:
   $$Z = \frac{\text{Equivalent Mass}}{96500} = \frac{M}{n \cdot 96500}$$
   $$\mathbf{w = \frac{M \cdot I \cdot t}{n \cdot 96500} \times \left(\frac{\text{Current Efficiency } \%}{100}\right)}$$
2. **Second Law:** When the same quantity of electricity passes through different electrolyte solutions connected in series, the masses of substances liberated are directly proportional to their chemical equivalent masses ($E$):
   $$\mathbf{\frac{w_1}{E_1} = \frac{w_2}{E_2} \implies \text{Number of Gram Equivalents is Identical}}$$


### 6.2 Preferential Discharge Theory & Overpotential
When multiple competing ionic species are present in an aqueous solution:
* **At Cathode (Reduction):** The species possessing the **higher Standard Reduction Potential (SRP)** is reduced first:
  $$\text{Au}^{3+} > \text{Pt}^{2+} > \text{Ag}^+ > \text{Cu}^{2+} > \text{H}^+(aq) > \text{Pb}^{2+} > \text{Sn}^{2+} > \text{Fe}^{2+} > \text{Zn}^{2+} > \text{Al}^{3+} > \text{Mg}^{2+} > \text{Na}^+ > \text{K}^+$$
  * Active metals ($\text{Na}^+, \text{Mg}^{2+}, \text{Al}^{3+}$) cannot be discharged from aqueous solutions at a platinum cathode; instead, water is reduced to liberate dihydrogen gas:
    $$2\text{H}_2\text{O}(l) + 2e^- \to \text{H}_2(g) + 2\text{OH}^-(aq) \quad E^\circ = -0.83\text{ V}$$
* **At Anode (Oxidation):** The species with the **lower SRP (higher oxidation potential)** is oxidized first:
  $$\text{I}^- > \text{Br}^- > \text{Cl}^- > \text{OH}^- > \text{H}_2\text{O} > \text{SO}_4^{2-} > \text{NO}_3^- > \text{F}^-$$
* **The Oxygen Overpotential Anomaly (Brine Electrolysis):**
  Thermodynamically, oxidation of water to dioxygen ($E_{\text{ox}}^\circ = -1.23\text{ V}$) should precede oxidation of chloride to chlorine ($E_{\text{ox}}^\circ = -1.36\text{ V}$).
  However, the evolution of $O_2$ is **kinetically extremely sluggish** due to high activation energy for breaking four bonds, creating an **overpotential (overvoltage) of $\approx 0.4 - 0.6\text{ V}$**. Consequently, the practical potential required for $O_2$ evolution shifts to $\approx -1.6\text{ to } -1.8\text{ V}$, making **$\text{Cl}_2$ evolution the predominant kinetic product** at the anode during the electrolysis of concentrated $\text{NaCl}$ (brine).


---


## 7. Electrolytic Conduction & Kohlrausch's Law


### 7.1 Conductance, Conductivity & Cell Constant
* **Resistance ($R$) & Conductance ($G$):**
  $$R = \rho \frac{l}{A}, \quad G = \frac{1}{R} \quad [\Omega^{-1}, \text{mho, or Siemens (S)}]$$
* **Conductivity (Specific Conductance, $\kappa$):**
  $$\mathbf{\kappa = G \cdot \left(\frac{l}{A}\right) = \frac{G^*}{R}} \quad [\text{S}\cdot\text{cm}^{-1} \text{ or } \text{S}\cdot\text{m}^{-1}]$$
  where $G^* = \frac{l}{A}$ is the fixed geometric **cell constant** of the conductivity cell.
* **Molar Conductivity ($\Lambda_m$) & Equivalent Conductivity ($\Lambda_{\text{eq}}$):**
  $$\mathbf{\Lambda_m = \frac{1000 \kappa}{M}} \quad [\text{S}\cdot\text{cm}^2\cdot\text{mol}^{-1}]$$
  $$\mathbf{\Lambda_{\text{eq}} = \frac{1000 \kappa}{N} = \frac{\Lambda_m}{n\text{-factor}} = \frac{\Lambda_m}{z_+ \nu_+}} \quad [\text{S}\cdot\text{cm}^2\cdot\text{eq}^{-1}]$$


---


### 7.2 Visual Preservation: Molar Conductivity & Titration Trajectories


![Molar Conductivity and Conductometric Titrations](/media/molar_conductivity_and_conductometric_titrations.webp)
*Description: Two-panel electrolytic conduction diagnostic graphic: (A) Variation of molar conductivity $\Lambda_m$ with $\sqrt{c}$ comparing the linear Debye-Hückel-Onsager extrapolation for strong electrolytes ($\mathrm{KCl}$) against the steep asymptotic rise for weak electrolytes ($\mathrm{CH}_3\mathrm{COOH}$); (B) Four fundamental conductometric titration curves tracking conductance changes as a function of titrant volume for SA vs SB, WA vs SB, SA vs WB, and WA vs WB systems.*


---


### 7.3 Debye-Hückel-Onsager Equation for Strong Electrolytes
For strong electrolytes, interionic attraction retards ion movement at higher concentrations. As dilution increases, ionic atmospheres disperse:
$$\mathbf{\Lambda_m = \Lambda_m^\circ - A\sqrt{c}}$$
where $\Lambda_m^\circ$ is the **limiting molar conductivity** at infinite dilution ($c \to 0$), and $A$ is the Onsager coefficient depending on temperature, dielectric constant, and ion valence.
* A plot of $\Lambda_m$ vs $\sqrt{c}$ is a **straight line** with $y$-intercept $=\Lambda_m^\circ$.


### 7.4 Kohlrausch's Law of Independent Migration of Ions
* **Statement:** At infinite dilution, when dissociation is complete and all interionic attractions vanish, each constituent ion migrates completely independently of its counter-ion and contributes a definite characteristic amount to the total molar conductivity:
  $$\mathbf{\Lambda_m^\circ = \nu_+ \lambda_+^\circ + \nu_- \lambda_-^\circ}$$
  $$\mathbf{\Lambda_{\text{eq}}^\circ = \lambda_{\text{eq}, +}^\circ + \lambda_{\text{eq}, -}^\circ}$$
  where $\nu_+, \nu_-$ are stoichiometric coefficients, and $\lambda_+^\circ, \lambda_-^\circ$ are limiting ionic conductivities.


### 7.5 High-Yield Applications of Kohlrausch's Law
1. **Determination of $\Lambda_m^\circ$ for Weak Electrolytes:**
   $$\Lambda_m^\circ(\text{CH}_3\text{COOH}) = \Lambda_m^\circ(\text{CH}_3\text{COONa}) + \Lambda_m^\circ(\text{HCl}) - \Lambda_m^\circ(\text{NaCl})$$
2. **Degree of Dissociation ($\alpha$) & Ionization Constant ($K_a$):**
   $$\mathbf{\alpha = \frac{\Lambda_m^c}{\Lambda_m^\circ}}$$
   $$K_a = \frac{c \alpha^2}{1 - \alpha} = \frac{c (\Lambda_m^c / \Lambda_m^\circ)^2}{1 - (\Lambda_m^c / \Lambda_m^\circ)}$$
3. **Solubility ($S$) & $K_{\text{sp}}$ of Sparingly Soluble Salts:**
   In a saturated solution of a sparingly soluble salt (e.g., $\text{BaSO}_4, \text{AgCl}$), the solution is so dilute that $c = S$ and $\Lambda_m \approx \Lambda_m^\circ$:
   $$\Lambda_m^\circ = \frac{1000 \kappa_{\text{salt}}}{S} \implies \mathbf{S = \frac{1000 \kappa_{\text{salt}}}{\Lambda_m^\circ}} \quad [\text{mol/L}]$$
   where $\kappa_{\text{salt}} = \kappa_{\text{solution}} - \kappa_{\text{water}}$.
   $$K_{\text{sp}} = S^2 \quad (\text{for 1:1 salt})$$


---


## 8. Conductometric Titrations & Ionic Mobilities


### 8.1 The Grotthuss Mechanism & Ionic Mobility
* Under an applied electric field, hydronium ($\text{H}^+$) and hydroxide ($\text{OH}^-$) ions exhibit anomalously high ionic conductivities due to the **Grotthuss proton-jumping mechanism** through hydrogen-bonded water networks:
  $$\lambda^\circ(\text{H}^+) \approx 349.8\text{ S}\cdot\text{cm}^2/\text{mol}, \quad \lambda^\circ(\text{OH}^-) \approx 198.5\text{ S}\cdot\text{cm}^2/\text{mol}$$
  $$\lambda^\circ(\text{Na}^+) \approx 50.1\text{ S}\cdot\text{cm}^2/\text{mol}, \quad \lambda^\circ(\text{Cl}^-) \approx 76.3\text{ S}\cdot\text{cm}^2/\text{mol}$$


### 8.2 Conductometric Titration Curve Analysis
1. **Strong Acid vs. Strong Base ($\text{HCl} + \text{NaOH}$):**
   * Pre-equivalence: Fast $\text{H}^+$ ions are progressively replaced by slower $\text{Na}^+$ ions $\implies$ **Conductance drops sharply**.
   * Post-equivalence: Excess fast $\text{OH}^-$ ions accumulate $\implies$ **Conductance rises sharply**.
   * Trajectory: Symmetric V-shaped curve; intersection defines equivalence point.
2. **Weak Acid vs. Strong Base ($\text{CH}_3\text{COOH} + \text{NaOH}$):**
   * Initially: Slight drop as common ion effect suppresses acid ionization.
   * Mid-titration: Rises gradually as highly conducting strong electrolyte salt $\text{CH}_3\text{COONa}$ accumulates.
   * Post-equivalence: Rises sharply due to free unreacted $\text{OH}^-$.
3. **Strong Acid vs. Weak Base ($\text{HCl} + \text{NH}_4\text{OH}$):**
   * Pre-equivalence: Drops sharply as $\text{H}^+$ is replaced by $\text{NH}_4^+$.
   * Post-equivalence: Excess $\text{NH}_4\text{OH}$ is weakly dissociated $\implies$ **Conductance remains virtually horizontal**.
4. **Weak Acid vs. Weak Base ($\text{CH}_3\text{COOH} + \text{NH}_4\text{OH}$):**
   * Pre-equivalence: Rises gently due to buffer salt formation.
   * Post-equivalence: Stays constant; sharp break marks end-point.


---


## 9. Commercial Batteries, Fuel Cells & Corrosion


### 9.1 Lead Storage Battery (Secondary Rechargeable Cell)
* **Anode:** Spongy lead ($\text{Pb}$).
* **Cathode:** Lead dioxide grid ($\text{PbO}_2$).
* **Electrolyte:** 38% aqueous $\text{H}_2\text{SO}_4$ by mass ($\text{density} \approx 1.30\text{ g/mL}$).
* **Discharge Reactions ($n = 2$):**
  * Anode: $\text{Pb}(s) + \text{SO}_4^{2-}(aq) \to \text{PbSO}_4(s) + 2e^-$
  * Cathode: $\text{PbO}_2(s) + 4\text{H}^+(aq) + \text{SO}_4^{2-}(aq) + 2e^- \to \text{PbSO}_4(s) + 2\text{H}_2\text{O}(l)$
  * **Overall Discharging Reaction:**
    $$\mathbf{Pb(s) + PbO_2(s) + 2H_2SO_4(aq) \xrightarrow{\text{discharge}} 2PbSO_4(s) + 2H_2O(l)}$$
* **Critical Stoichiometric Law (JEE Invariant):**
  During discharging, **2 moles of $\text{H}_2\text{SO}_4$ are consumed for every 2 Faradays ($2F$) of electricity withdrawn**, or **1 mole of $\text{H}_2\text{SO}_4$ consumed per 1 Faraday ($1F$)**.
  During recharging, the polarity is reversed, regenerating $\text{Pb}, \text{PbO}_2$, and concentrated $\text{H}_2\text{SO}_4$.


### 9.2 Hydrogen-Oxygen ($\text{H}_2-\text{O}_2$) Fuel Cell
* Porous carbon electrodes impregnated with fine $\text{Pt}/\text{Pd}$ catalyst dipping into concentrated aqueous $\text{KOH}$.
* **Anode Reaction:** $2\text{H}_2(g) + 4\text{OH}^-(aq) \to 4\text{H}_2\text{O}(l) + 4e^-$
* **Cathode Reaction:** $\text{O}_2(g) + 2\text{H}_2\text{O}(l) + 4e^- \to 4\text{OH}^-(aq)$
* **Net Overall Reaction:** $2\text{H}_2(g) + \text{O}_2(g) \to 2\text{H}_2\text{O}(l)$
* **Thermodynamic Efficiency:**
  $$\mathbf{\eta = \frac{\Delta G^\circ}{\Delta H^\circ} \times 100\%}$$
  Theoretical efficiency $\approx 83\%$; operational efficiency $\approx 70\%$ (surpassing conventional thermal engines $\approx 40\%$).


### 9.3 Corrosion of Iron (Rusting)
Corrosion is an electrochemical phenomenon occurring in the presence of water and oxygen:
* **Anode Spot:** $\text{Fe}(s) \to \text{Fe}^{2+}(aq) + 2e^- \quad E^\circ = -0.44\text{ V}$
* **Cathode Spot:** $\text{O}_2(g) + 4\text{H}^+(aq) + 4e^- \to 2\text{H}_2\text{O}(l) \quad E^\circ = +1.23\text{ V}$
* Atmospheric oxidation converts $\text{Fe}^{2+}$ into hydrated ferric oxide (rust):
  $$4\text{Fe}^{2+}(aq) + \text{O}_2(g) + 4\text{H}_2\text{O}(l) \to 2\text{Fe}_2\text{O}_3(s) + 8\text{H}^+(aq)$$
  $$\text{Rust Formula: } \mathbf{\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}}$$
* **Cathodic Protection / Galvanization:** Coating iron with a more active metal ($E_{\text{ox}}^\circ(\text{Zn}) = +0.76\text{ V} > E_{\text{ox}}^\circ(\text{Fe}) = +0.44\text{ V}$). Zinc acts as a sacrificial anode, corroding preferentially even if scratched.


---


## 10. High-Yield JEE Problem Archetypes & Traps


### Archetype 1: Multi-Step Non-Additive Electrode Potentials
* **Problem:** Given $E_{\text{MnO}_4^-/\text{Mn}^{2+}}^\circ = +1.51\text{ V}$ and $E_{\text{MnO}_4^-/\text{MnO}_2}^\circ = +1.69\text{ V}$. Calculate $E_{\text{MnO}_2/\text{Mn}^{2+}}^\circ$ in acidic medium.
* **Solution:**
  * Reaction 1: $\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O} \quad n_1 = 5, \Delta G_1^\circ = -5F(1.51) = -7.55F$
  * Reaction 2: $\text{MnO}_4^- + 4\text{H}^+ + 3e^- \to \text{MnO}_2 + 2\text{H}_2\text{O} \quad n_2 = 3, \Delta G_2^\circ = -3F(1.69) = -5.07F$
  * Target Reaction: $\text{MnO}_2 + 4\text{H}^+ + 2e^- \to \text{Mn}^{2+} + 2\text{H}_2\text{O} \quad (n_3 = 2)$
  * Algebraic Combination: $\text{Target} = \text{Reaction 1} - \text{Reaction 2}$:
    $$\Delta G_3^\circ = \Delta G_1^\circ - \Delta G_2^\circ = -7.55F - (-5.07F) = -2.48F$$
  * Solve for $E_3^\circ$:
    $$-2FE_3^\circ = -2.48F \implies \mathbf{E_3^\circ = \frac{2.48}{2} = +1.24\text{ V}}$$


### Archetype 2: Solubility Product from Insoluble Salt Electrode
* **Problem:** For the cell $\text{Pt} \mid \text{H}_2(1\text{ bar}) \mid \text{HCl}(0.1\text{ M}) \parallel \text{AgCl}(\text{sat}) \mid \text{Ag}$, the measured cell EMF is $0.28\text{ V}$ at $25^\circ\text{C}$. Given $E_{\text{Ag}^+/\text{Ag}}^\circ = +0.80\text{ V}$, calculate $K_{\text{sp}}(\text{AgCl})$.
* **Solution:**
  * Anode: $\frac{1}{2}\text{H}_2 \to \text{H}^+ + e^- \quad E_{\text{an}} = 0 - 0.0591\log_{10}[\text{H}^+] = -0.0591(-1) = +0.0591\text{ V}$
  * Cathode: $\text{AgCl}(s) + e^- \to \text{Ag}(s) + \text{Cl}^-(aq)$
    $$E_{\text{cell}} = E_{\text{cat}} - E_{\text{an}} = [E_{\text{Ag}^+/\text{Ag}}^\circ + 0.0591\log_{10}[\text{Ag}^+]] - [-0.0591\log_{10}[\text{H}^+]]$$
  * Alternatively, write the net cell reaction: $\frac{1}{2}\text{H}_2(g) + \text{AgCl}(s) \to \text{Ag}(s) + \text{H}^+(aq) + \text{Cl}^-(aq)$
    $$E_{\text{cell}} = E_{\text{Cl}^-/\text{AgCl}/\text{Ag}}^\circ - 0.0591\log_{10}([\text{H}^+][\text{Cl}^-])$$
  * With $[\text{H}^+] = [\text{Cl}^-] = 0.1\text{ M}$:
    $$0.28 = E_{\text{Cl}^-/\text{AgCl}/\text{Ag}}^\circ - 0.0591\log_{10}(0.01) = E^\circ - 0.0591(-2) = E^\circ + 0.1182$$
    $$E_{\text{Cl}^-/\text{AgCl}/\text{Ag}}^\circ = 0.28 - 0.1182 = 0.1618\text{ V}$$
  * Now relate to $K_{\text{sp}}$:
    $$E_{\text{Cl}^-/\text{AgCl}/\text{Ag}}^\circ = E_{\text{Ag}^+/\text{Ag}}^\circ + 0.0591\log_{10} K_{\text{sp}}$$
    $$0.1618 = 0.80 + 0.0591\log_{10} K_{\text{sp}}$$
    $$\log_{10} K_{\text{sp}} = \frac{0.1618 - 0.80}{0.0591} = \frac{-0.6382}{0.0591} \approx -10.8$$
    $$\mathbf{K_{\text{sp}} = 10^{-10.8} = 1.58 \times 10^{-11}}$$


### Archetype 3: Lead-Acid Battery Discharge Stoichiometry
* **Problem:** A lead storage battery contains $1\text{ L}$ of $40\%\text{ (w/w) } \text{H}_2\text{SO}_4$ with density $1.30\text{ g/mL}$. After discharging, the concentration drops to $20\%\text{ (w/w)}$ with density $1.15\text{ g/mL}$. Calculate the total ampere-hours delivered by the battery.
* **Solution:**
  * Initial state:
    $$\text{Mass of solution} = 1000\text{ mL} \times 1.30\text{ g/mL} = 1300\text{ g}$$
    $$\text{Mass of } \text{H}_2\text{SO}_4 = 1300 \times 0.40 = 520\text{ g} \implies n_1 = \frac{520}{98} = 5.306\text{ mol}$$
  * Discharging reaction: $\text{Pb} + \text{PbO}_2 + 2\text{H}_2\text{SO}_4 \to 2\text{PbSO}_4 + 2\text{H}_2\text{O}$
    For every 2 moles of $\text{H}_2\text{SO}_4$ consumed, 2 moles of $\text{H}_2\text{O}$ are produced.
    Let $x$ be moles of $\text{H}_2\text{SO}_4$ consumed.
    Mass of solution after discharge: $M_2 = 1300 - 98x + 18x = 1300 - 80x\text{ g}$.
    Mass of remaining $\text{H}_2\text{SO}_4 = 520 - 98x$.
  * Final concentration is $20\%$:
    $$\frac{520 - 98x}{1300 - 80x} = 0.20 \implies 520 - 98x = 260 - 16x$$
    $$82x = 260 \implies x = \frac{260}{82} = 3.171\text{ moles of } \text{H}_2\text{SO}_4\text{ consumed}$$
  * Charge passed ($1\text{ F per mol } \text{H}_2\text{SO}_4$):
    $$Q = 3.171 \text{ Faradays} = 3.171 \times 96500\text{ Coulombs} = 306001.5\text{ C}$$
  * Ampere-hours:
    $$\mathbf{\text{Ampere-hours} = \frac{306001.5}{3600} = 85.0\text{ A}\cdot\text{h}}$$