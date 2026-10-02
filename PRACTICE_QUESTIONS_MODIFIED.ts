export const PRACTICE_QUESTIONS = [
  {
    "id": 1,
    "topic": "Complex Numbers",
    "question": "What is the principal value interval for the argument of a complex number?",
    "options": [
      "(0, 2π]",
      "[0, π]",
      "(-π, π]",
      "(-π/2, π/2)"
    ],
    "correct": 2,
    "solution": "The principal argument of a complex number is defined to lie in the interval $(-\\pi, \\pi]$."
  },
  {
    "id": 2,
    "topic": "Complex Numbers",
    "question": "The sum of four consecutive powers of i (e.g., i^n + i^{n+1} + i^{n+2} + i^{n+3}) is equal to:",
    "options": [
      "1",
      "i",
      "-1",
      "0"
    ],
    "correct": 3,
    "solution": "Any four consecutive powers of $i$ sum to zero because $i^n + i^{n+1} + i^{n+2} + i^{n+3} = i^n(1 + i - 1 - i) = 0$."
  },
  {
    "id": 3,
    "topic": "Complex Numbers",
    "question": "The cube roots of unity (1, ω, ω²) form which polygon in the complex plane?",
    "options": [
      "Isosceles triangle",
      "Right angled triangle",
      "Equilateral triangle",
      "Square"
    ],
    "correct": 2,
    "solution": "The cube roots of unity lie on the unit circle and are separated by $120^\\circ$, forming an equilateral triangle."
  },
  {
    "id": 4,
    "topic": "Chemical Kinetics",
    "question": "What is the unit of the rate constant for a first-order reaction?",
    "options": [
      "mol/(L·s)",
      "L/(mol·s)",
      "s⁻¹",
      "mol²/(L²·s)"
    ],
    "correct": 2,
    "solution": "For a first-order reaction, rate = $k[\\text{A}]$, so $k = \\text{rate}/[\\text{A}]$, giving units of $\\text{s}^{-1}$."
  },
  {
    "id": 5,
    "topic": "Chemical Kinetics",
    "question": "Which of the following can have a fractional value?",
    "options": [
      "Molecularity",
      "Order of reaction",
      "Both order and molecularity",
      "Neither"
    ],
    "correct": 1,
    "solution": "Molecularity is always a whole number, while the order of a reaction is determined experimentally and can be fractional."
  },
  {
    "id": 6,
    "topic": "Chemical Kinetics",
    "question": "The half-life of a zero-order reaction is proportional to:",
    "options": [
      "Square of initial concentration",
      "Initial concentration",
      "Independent of initial concentration",
      "Inverse of initial concentration"
    ],
    "correct": 1,
    "solution": "For a zero-order reaction, $t_{1/2} = [\\text{A}]_0 / (2k)$, which is directly proportional to the initial concentration $[\\text{A}]_0$."
  },
  {
    "id": 7,
    "topic": "Chemical Kinetics",
    "question": "A catalyst accelerates a reaction by:",
    "options": [
      "Increasing the activation energy",
      "Lowering the activation energy",
      "Changing the reaction enthalpy",
      "Shifting the equilibrium constant"
    ],
    "correct": 1,
    "solution": "A catalyst provides an alternative reaction pathway with a lower activation energy, thereby increasing the reaction rate."
  },
  {
    "id": 8,
    "topic": "Kinetic Theory of Gases",
    "question": "The average translational kinetic energy per molecule of an ideal gas is:",
    "options": [
      "(1/2) kT",
      "(3/2) kT",
      "(5/2) kT",
      "(3/2) RT"
    ],
    "correct": 1,
    "solution": "By the equipartition theorem, each translational degree of freedom contributes $\\frac{1}{2}kT$, so 3 dimensions give $\\frac{3}{2}kT$."
  },
  {
    "id": 9,
    "topic": "Kinetic Theory of Gases",
    "question": "What is the correct order of characteristic molecular speeds?",
    "options": [
      "v_rms < v_avg < v_mp",
      "v_mp < v_avg < v_rms",
      "v_avg < v_mp < v_rms",
      "v_mp < v_rms < v_avg"
    ],
    "correct": 1,
    "solution": "The speeds follow the ratio $v_{mp} : v_{avg} : v_{rms} = \\sqrt{2} : \\sqrt{8/\\pi} : \\sqrt{3}$, which means $v_{mp} < v_{avg} < v_{rms}$."
  },
  {
    "id": 10,
    "topic": "Kinetic Theory of Gases",
    "question": "How many degrees of freedom does a monatomic gas like Helium have?",
    "options": [
      "3",
      "5",
      "6",
      "7"
    ],
    "correct": 0,
    "solution": "A monatomic gas like Helium only has 3 translational degrees of freedom and no rotational or vibrational ones."
  },
  {
    "id": 11,
    "topic": "Kinetic Theory of Gases",
    "question": "At constant temperature, the mean free path of gas molecules is proportional to:",
    "options": [
      "Pressure P",
      "1/P",
      "P²",
      "1/P²"
    ],
    "correct": 1,
    "solution": "Mean free path $\\lambda = \\frac{kT}{\\sqrt{2}\\pi d^2 P}$, so at constant temperature, it is inversely proportional to pressure $P$."
  },
  {
    "id": 12,
    "topic": "Current Electricity",
    "question": "For semiconductors and insulators, the temperature coefficient of resistance (α) is:",
    "options": [
      "Positive",
      "Zero",
      "Negative",
      "Infinite"
    ],
    "correct": 2,
    "solution": "As temperature increases, more charge carriers are excited, decreasing resistance, which implies a negative temperature coefficient $\\alpha$."
  },
  {
    "id": 13,
    "topic": "Current Electricity",
    "question": "Maximum power is transferred from a source to a load when:",
    "options": [
      "Load resistance is zero",
      "Load resistance is infinite",
      "Load resistance equals internal resistance",
      "Load resistance is half the internal resistance"
    ],
    "correct": 2,
    "solution": "The Maximum Power Transfer Theorem states that maximum power is delivered to the load when $R_{\\text{load}} = R_{\\text{internal}}$."
  },
  {
    "id": 14,
    "topic": "Current Electricity",
    "question": "The current capacity of a fuse wire strictly depends on its:",
    "options": [
      "Length only",
      "Radius only",
      "Both length and radius",
      "Density"
    ],
    "correct": 1,
    "solution": "Heat generated balances heat lost from the surface, giving $I^2 R = h(2\\pi r l)$, leading to $I^2 \\propto r^3$, making it depend only on radius."
  },
  {
    "id": 15,
    "topic": "Current Electricity",
    "question": "The time constant (τ) of an RC circuit is given by:",
    "options": [
      "R/C",
      "C/R",
      "RC",
      "1/(RC)"
    ],
    "correct": 2,
    "solution": "The time constant $\\tau$ of an RC circuit is the product of resistance and capacitance, $\\tau = RC$."
  },
  {
    "id": 16,
    "topic": "Electrostatics",
    "question": "The electric field inside a solid conducting charged sphere in electrostatic equilibrium is:",
    "options": [
      "Proportional to distance r",
      "Inversely proportional to r²",
      "Zero",
      "Constant but non-zero"
    ],
    "correct": 2,
    "solution": "In electrostatic equilibrium, all excess charge resides on the surface, leaving the electric field inside the conductor as zero."
  },
  {
    "id": 17,
    "topic": "Electrostatics",
    "question": "The electrostatic energy density in an electric field E is:",
    "options": [
      "(1/2) ε₀ E²",
      "ε₀ E²",
      "(1/2) ε₀ E",
      "ε₀ E"
    ],
    "correct": 0,
    "solution": "The electrostatic energy density (energy per unit volume) in an electric field $E$ in free space is given by $\\frac{1}{2}\\epsilon_0 E^2$."
  },
  {
    "id": 18,
    "topic": "Electrostatics",
    "question": "The work done to rotate an electric dipole from stable (0°) to unstable (180°) equilibrium in a uniform electric field E is:",
    "options": [
      "pE",
      "-pE",
      "2pE",
      "0"
    ],
    "correct": 2,
    "solution": "Work done $W = \\Delta U = U_{final} - U_{initial} = -pE\\cos(180^\\circ) - (-pE\\cos(0^\\circ)) = pE - (-pE) = 2pE$."
  },
  {
    "id": 19,
    "topic": "Electrostatics",
    "question": "The electrostatic pressure on the surface of a charged conductor with surface charge density σ is:",
    "options": [
      "σ / ε₀",
      "σ² / (2ε₀)",
      "σ² / ε₀",
      "σ / (2ε₀)"
    ],
    "correct": 1,
    "solution": "The electrostatic pressure is given by $P = \\frac{\\sigma^2}{2\\epsilon_0}$, arising from the outward force on the surface charges."
  },
  {
    "id": 20,
    "topic": "Modern Physics",
    "question": "The maximum kinetic energy of emitted photoelectrons is independent of:",
    "options": [
      "Frequency of incident light",
      "Wavelength of incident light",
      "Intensity of incident light",
      "Work function of the metal"
    ],
    "correct": 2,
    "solution": "According to Einstein's photoelectric equation, max KE depends on frequency and work function, but is independent of the intensity."
  },
  {
    "id": 21,
    "topic": "Modern Physics",
    "question": "The slope of the stopping potential (V₀) versus incident frequency (ν) graph is:",
    "options": [
      "h",
      "e/h",
      "h/e",
      "he"
    ],
    "correct": 2,
    "solution": "From $eV_0 = h\\nu - \\Phi$, we get $V_0 = (\\frac{h}{e})\\nu - \\frac{\\Phi}{e}$, so the slope is $\\frac{h}{e}$."
  },
  {
    "id": 22,
    "topic": "Modern Physics",
    "question": "In the Bohr model, the radius of the n-th orbit is proportional to:",
    "options": [
      "n / Z",
      "n² / Z",
      "Z / n²",
      "Z² / n"
    ],
    "correct": 1,
    "solution": "The Bohr radius formula is $r_n \\propto \\frac{n^2}{Z}$, directly proportional to the square of the orbit number and inversely to the atomic number."
  },
  {
    "id": 23,
    "topic": "Modern Physics",
    "question": "Which hydrogen spectral series lies entirely in the ultraviolet (UV) region?",
    "options": [
      "Balmer",
      "Paschen",
      "Brackett",
      "Lyman"
    ],
    "correct": 3,
    "solution": "The Lyman series corresponds to transitions down to $n=1$ and its energy differences are large enough that the emitted photons lie in the UV region."
  },
  {
    "id": 24,
    "topic": "Laws of Motion and Friction",
    "question": "The angle of repose on a rough inclined plane is equal to:",
    "options": [
      "Angle of friction",
      "Double the angle of friction",
      "Half the angle of friction",
      "Zero"
    ],
    "correct": 0,
    "solution": "The angle of repose is the maximum angle of an inclined plane at which an object remains at rest, and it equals the angle of friction $\\theta = \\tan^{-1}(\\mu_s)$."
  },
  {
    "id": 25,
    "topic": "Laws of Motion and Friction",
    "question": "Stopping distance of a car with initial velocity v on a rough horizontal floor is proportional to:",
    "options": [
      "v",
      "v²",
      "√v",
      "v³"
    ],
    "correct": 1,
    "solution": "Using $v^2 = u^2 + 2as$ with $v=0$ and $a=-\\mu g$, the stopping distance is $s = \\frac{u^2}{2\\mu g}$, so it is proportional to $v^2$."
  },
  {
    "id": 26,
    "topic": "Laws of Motion and Friction",
    "question": "What is the minimum velocity required at the bottom of a vertical circular loop of radius r to complete the circle?",
    "options": [
      "√(gr)",
      "√(3gr)",
      "√(5gr)",
      "√(7gr)"
    ],
    "correct": 2,
    "solution": "To maintain tension $T \\ge 0$ at the highest point, the minimum speed at the bottom must be $\\sqrt{5gr}$ due to energy conservation."
  },
  {
    "id": 27,
    "topic": "Laws of Motion and Friction",
    "question": "The centripetal acceleration for a particle in uniform circular motion with speed v and radius r is:",
    "options": [
      "v / r",
      "v² / r",
      "v / r²",
      "v² / r²"
    ],
    "correct": 1,
    "solution": "For uniform circular motion, the acceleration directed towards the center is $a_c = \\frac{v^2}{r}$."
  },
  {
    "id": 28,
    "topic": "Atomic Structure",
    "question": "The number of angular nodes for an atomic orbital is equal to:",
    "options": [
      "Principal quantum number (n)",
      "Azimuthal quantum number (l)",
      "n - l - 1",
      "Magnetic quantum number (m)"
    ],
    "correct": 1,
    "solution": "The number of angular nodes of an orbital is exactly equal to its azimuthal quantum number $l$."
  },
  {
    "id": 29,
    "topic": "Atomic Structure",
    "question": "The maximum number of electrons that can be accommodated in a principal shell n is:",
    "options": [
      "n²",
      "2n",
      "2n²",
      "2n + 1"
    ],
    "correct": 2,
    "solution": "A principal shell $n$ has $n^2$ orbitals, and each orbital holds up to 2 electrons (Pauli's principle), giving a total of $2n^2$ electrons."
  },
  {
    "id": 30,
    "topic": "Atomic Structure",
    "question": "Which rule states that no two electrons in an atom can have the same four quantum numbers?",
    "options": [
      "Hund's Rule",
      "Aufbau Principle",
      "Bohr Model",
      "Pauli's Exclusion Principle"
    ],
    "correct": 3,
    "solution": "Pauli's Exclusion Principle states that no two electrons in an atom can have an identical set of all four quantum numbers."
  },
  {
    "id": 31,
    "topic": "04 Radioactivity and Nuclear Kinetics",
    "question": "For the reaction A + 2B$\\to$ C, rate is given by R = [A] [B]2 then the order of the reaction is",
    "options": [
      "3",
      "6",
      "5",
      "7"
    ],
    "correct": 0,
    "solution": "The overall order of reaction is the sum of the powers of the concentration terms in the rate law, so $1 + 2 = 3$."
  },
  {
    "id": 32,
    "topic": "03 Electrolytic Conduction and Kohlrausch Law",
    "question": "Which out of the following is a correct equation to show change in molar conductivity with respect to concentration for a weak electrolyte, if the symbols carry their usual meaning :",
    "options": [
      "$\\Lambda_{\\mathrm{m}}-\\Lambda_{\\mathrm{m}}^{\\circ}+\\mathrm{AC}^{\\frac{1}{2}}=0$",
      "$\\Lambda_{\\mathrm{m}}^2 \\mathrm{C}+\\mathrm{K}{\\mathrm{a}} \\Lambda{\\mathrm{m}}^{\\mathrm{o}^2}-\\mathrm{K}{\\mathrm{a}} \\Lambda{\\mathrm{m}} \\Lambda_{\\mathrm{m}}^{\\circ}=0$",
      "$\\Lambda_{\\mathrm{m}}-\\Lambda_{\\mathrm{m}}^{\\circ}-\\mathrm{AC}^{\\frac{1}{2}}=0$",
      "$\\Lambda_{\\mathrm{m}}^2 \\mathrm{C}-\\mathrm{K}{\\mathrm{a}} \\Lambda{\\mathrm{m}}^{\\circ 2}+\\mathrm{K}{\\mathrm{a}} \\Lambda{\\mathrm{m}} \\Lambda_{\\mathrm{m}}^{\\circ}=0$"
    ],
    "correct": 3,
    "solution": "For a weak electrolyte, Ostwald's dilution law gives $K_a = \\frac{C \\alpha^2}{1-\\alpha}$ where $\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ}$, which rearranges to $\\Lambda_m^2 C - K_a \\Lambda_m^{\\circ 2} + K_a \\Lambda_m \\Lambda_m^\\circ = 0$."
  },
  {
    "id": 33,
    "topic": "01 Circular Kinematics and Angular Dynamics",
    "question": "A boy ties a stone of mass 100 g to the end of a 2 m long string and whirls it around in a horizontal plane. The string can withstand the maximum tension of 80 N. If the maximum speed with which the stone can revolve is${K \\over \\pi }$ rev./min. The value of K is : (Assume the string is massless and unstretchable)",
    "options": [
      "400",
      "300",
      "600",
      "800"
    ],
    "correct": 2,
    "solution": "$T_{max} = m \\omega^2 r$. So $80 = 0.1 \\times \\omega^2 \\times 2$, giving $\\omega = 20 \\text{ rad/s}$. In rev/min, this is $\\frac{20 \\times 60}{2\\pi} = \\frac{600}{\\pi}$, hence $K = 600$."
  },
  {
    "id": 34,
    "topic": "01 Werner Theory Nomenclature and Ligands",
    "question": "A solution of$\\mathrm{FeCl_3}$ when treated with$\\mathrm{K_4[Fe(CN)_6]}$ gives a prussium blue precipitate due to the formation of :",
    "options": [
      "$\\mathrm{Fe[Fe(CN){6}]}$",
      "$\\mathrm{Fe{4}[Fe(CN){6}]{3}}$",
      "$\\mathrm{Fe_{3}[Fe(CN){6}]{2}}$",
      "$\\mathrm{K[Fe_{2}(CN)_{6}]}$"
    ],
    "correct": 1,
    "solution": "$\\text{Fe}^{3+}$ reacts with ferrocyanide $[\\text{Fe}(\\text{CN})_6]^{4-}$ to form Prussian blue, which is Iron(III) hexacyanoferrate(II), $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$."
  },
  {
    "id": 35,
    "topic": "01 Werner Theory Nomenclature and Ligands",
    "question": "In the coordination compound, K4[Ni(CN)4], the oxidation state of nickel is :",
    "options": [
      "0",
      "+1",
      "+2",
      "-1"
    ],
    "correct": 0,
    "solution": "Potassium contributes $+4$, and the four cyanide ligands contribute $-4$. For the complex to be neutral, Nickel must have an oxidation state of $0$."
  },
  {
    "id": 36,
    "topic": "02 Valence Bond Theory and Magnetic Moments",
    "question": "The hybridization and magnetic nature of${[Mn{(CN)_6}]^{4 - }}$ and${[Fe{(CN)_6}]^{3 - }}$, respectively are :",
    "options": [
      "sp3d2 and diamagnetic",
      "d2sp3 and paramagnetic",
      "sp3d2 and paramagnetic",
      "d2sp3 and diamagnetic"
    ],
    "correct": 1,
    "solution": "Both $\\text{Mn}^{2+}$ ($d^5$) and $\\text{Fe}^{3+}$ ($d^5$) have a strong-field ligand $\\text{CN}^-$, pairing electrons to leave 1 unpaired electron, resulting in $d^2sp^3$ hybridization and paramagnetic character."
  },
  {
    "id": 37,
    "topic": "04 Radioactivity and Nuclear Kinetics",
    "question": "If 50% of a reaction occurs in 100 second and 75% of the reaction occurs in 200 secod, the order of this reaction is :",
    "options": [
      "Zero",
      "1",
      "2",
      "3"
    ],
    "correct": 1,
    "solution": "The time to complete $75\\%$ is twice the half-life ($t_{75\\%} = 2 \\times t_{50\\%}$), which is a characteristic property of a first-order reaction."
  },
  {
    "id": 38,
    "topic": "01 Circular Kinematics and Angular Dynamics",
    "question": "A man carrying a monkey on his shoulder does cycling smoothly on a circular track of radius$9 \\mathrm{~m}$ and completes 120 resolutions in 3 minutes. The magnitude of centripetal acceleration of monkey is (in$\\mathrm{m} / \\mathrm{s}^2$ ) :",
    "options": [
      "$4 \\pi^2 \\mathrm{~ms}^{-2}$",
      "$16 \\pi^2 \\mathrm{~ms}^{-2}$",
      "$57600 \\pi^2 \\mathrm{~ms}^{-2}$",
      "Zero"
    ],
    "correct": 1,
    "solution": "$\\omega = \\frac{120 \\times 2\\pi}{3 \\times 60} = \\frac{4\\pi}{3} \\text{ rad/s}$. Acceleration $a = \\omega^2 r = (\\frac{4\\pi}{3})^2 \\times 9 = 16\\pi^2 \\text{ m/s}^2$."
  },
  {
    "id": 39,
    "topic": "03 Prisms and Dispersion",
    "question": "If the refractive index of the material of a prism is$\\cot \\left(\\frac{A}{2}\\right)$, where$A$ is the angle of prism then the angle of minimum deviation will be",
    "options": [
      "$\\pi-2 \\mathrm{~A}$",
      "$\\frac{\\pi}{2}-2 \\mathrm{~A}$",
      "$\\pi-\\mathrm{A}$",
      "$\\frac{\\pi}{2}-\\mathrm{A}$"
    ],
    "correct": 0,
    "solution": "$\\mu = \\frac{\\sin(\\frac{A+\\delta_m}{2})}{\\sin(A/2)} = \\cot(A/2) = \\frac{\\cos(A/2)}{\\sin(A/2)} = \\frac{\\sin(\\pi/2 - A/2)}{\\sin(A/2)}$. So $\\frac{A+\\delta_m}{2} = \\frac{\\pi}{2} - \\frac{A}{2}$, yielding $\\delta_m = \\pi - 2A$."
  },
  {
    "id": 40,
    "topic": "03 Electrolytic Conduction and Kohlrausch Law",
    "question": "Given below are two statements : Statement I : For KI, molar conductivity increases steeply with dilution Statement II : For carbonic acid, molar conductivity increases slowly with dilution In the light of the above statements, choose the correct answer from the options given below :",
    "options": [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Statement I is false but Statement II is true"
    ],
    "correct": 1,
    "solution": "KI is a strong electrolyte, its conductivity increases slowly. Carbonic acid is weak, its conductivity increases steeply with dilution. Both statements are reversed."
  },
  {
    "id": 41,
    "topic": "01 Circular Kinematics and Angular Dynamics",
    "question": "A fly wheel is accelerated uniformly from rest and rotates through 5 rad in the first second. The angle rotated by the fly wheel in the next second, will be :",
    "options": [
      "7.5 rad",
      "15 rad",
      "20 rad",
      "30 rad"
    ],
    "correct": 1,
    "solution": "Using $\\theta = \\frac{1}{2}\\alpha t^2$, in $t=1$, $5 = \\frac{1}{2}\\alpha(1)^2 \\implies \\alpha = 10$. In $t=2$, $\\theta_{total} = \\frac{1}{2}(10)(4) = 20$. So in the next second, it rotates $20 - 5 = 15 \\text{ rad}$."
  },
  {
    "id": 42,
    "topic": "01 Circular Kinematics and Angular Dynamics",
    "question": "A body of mass 200g is tied to a spring of spring constant 12.5 N/m, while the other end of spring is fixed at point O. If the body moves about O in a circular path on a smooth horizontal surface with constant angular speed 5 rad/s. Then the ratio of extension in the spring to its natural length will be :",
    "options": [
      "1 : 2",
      "2 : 3",
      "2 : 5",
      "1 : 1"
    ],
    "correct": 1,
    "solution": "Spring force provides centripetal force: $k x = m \\omega^2 (L + x)$. $12.5 x = 0.2 \\times 25 \\times (L + x) \\implies 12.5 x = 5L + 5x \\implies 7.5 x = 5L \\implies \\frac{x}{L} = \\frac{2}{3}$."
  },
  {
    "id": 43,
    "topic": "01 Werner Theory Nomenclature and Ligands",
    "question": "$\\mathrm{Fe}^{3+}$ cation gives a prussian blue precipitate on addition of potassium ferrocyanide solution due to the formation of :",
    "options": [
      "$\\left[\\mathrm{Fe}\\left(\\mathrm{H}{2} \\mathrm{O}\\right){6}\\right]{2}\\left[\\mathrm{Fe}(\\mathrm{CN}){6}\\right]$",
      "$\\mathrm{Fe}{2}\\left[\\mathrm{Fe}(\\mathrm{CN}){6}\\right]{2}$",
      "$\\mathrm{Fe}{3}\\left[\\mathrm{Fe}(\\mathrm{OH}){2}(\\mathrm{CN}){4}\\right]{2}$",
      "$\\mathrm{Fe}{4}\\left[\\mathrm{Fe}(\\mathrm{CN}){6}\\right]{3}$"
    ],
    "correct": 3,
    "solution": "$\\text{Fe}^{3+}$ reacts with ferrocyanide $[\\text{Fe}(\\text{CN})_6]^{4-}$ to give Prussian blue, whose formula is $\\text{Fe}_4[\\text{Fe}(\\text{CN})_6]_3$."
  },
  {
    "id": 44,
    "topic": "04 Isomerism in Coordination Compounds",
    "question": "Complex X of composition Cr(H2O)6Cln has a spin only magnetic moment of 3.83 BM. It reacts with AgNO3 and shows geometrical isomerism. The IUPAC nomenclature of X is :",
    "options": [
      "Hexaaqua chromium (III) chloride",
      "Tetraaquadichlorido chromium(IV)\nchloride dihydrate",
      "Tetraaquadichlorido chromium (III)\nchloride dihydrate",
      "Dichloridotetraaqua chromium (IV)\nchloride dihydrate"
    ],
    "correct": 2,
    "solution": "3.83 BM means 3 unpaired electrons $\\implies$ $\\text{Cr}^{3+}$. Shows geometrical isomerism means 2 identical ligands inside, so $[\\text{Cr}(\\text{H}_2\\text{O})_4\\text{Cl}_2]\\text{Cl}\\cdot 2\\text{H}_2\\text{O}$, which is Tetraaquadichlorido chromium(III) chloride dihydrate."
  },
  {
    "id": 45,
    "topic": "04 Radioactivity and Nuclear Kinetics",
    "question": "Consider the following nuclear reactions ${}_{92}^{238}M \\to {}_Y^XN + 2{}_2^4He {}_Y^XN \\to {}_B^AL + 2{\\beta ^ + }$ The number of neutrons in the element L is",
    "options": [
      "140",
      "144",
      "142",
      "146"
    ],
    "correct": 1,
    "solution": "U(238, 92) $\\to$ N + 2 $\\alpha$ (He 4, 2). So N has $A = 238-8=230$, $Z = 92-4=88$. N $\\to$ L + 2 $\\beta^+$. So L has $A=230$, $Z=88-2=86$. Neutrons in L = $230 - 86 = 144$."
  },
  {
    "id": 46,
    "topic": "01 Galvanic Cells EMF and Nernst Equation",
    "question": "In a cell that utilises the reaction Zn(s) + 2H+ (aq)$\\to$ Zn2+(aq) + H2(g) addition of H2SO4 to cathode compartment, will",
    "options": [
      "lower the E and shift equilibrium to the left",
      "increases the E and shift equilibrium to the left",
      "increase the E and shift equilibrium to the right",
      "Lower the E and shift equilibrium to the right"
    ],
    "correct": 2,
    "solution": "Adding $\\text{H}_2\\text{SO}_4$ increases $[\\text{H}^+]$ at the cathode. According to Le Chatelier and Nernst equation, this shifts the equilibrium to the right and increases the cell potential $E$."
  },
  {
    "id": 47,
    "topic": "04 Thin Lenses and Curved Surfaces",
    "question": "A diverging lens with magnitude of focal length 25 cm is placed at a distance of 15cm from a converging lens of magnitude of focal length 20cm. A beam of parallel light falls on the diverging lens. The final image formed is:",
    "options": [
      "real and at a distance of 6 cm from the convergent lens.",
      "real and at a distance of 40 cm from convergent lens.",
      "virtual and at a distance of 40 cm from convergent lens.",
      "real and at a distance of 40 cm from the divergent lens."
    ],
    "correct": 1,
    "solution": "For diverging lens, $v_1 = -25$ cm. This acts as an object for converging lens at $u_2 = -25 - 15 = -40$ cm. $f_2 = +20$ cm. $\\frac{1}{v} - \\frac{1}{-40} = \\frac{1}{20} \\implies v = +40$ cm, real image."
  },
  {
    "id": 48,
    "topic": "04 Thin Lenses and Curved Surfaces",
    "question": "Diameter of a plano-convex lens is$6 cm$ and thickness at the center is$3mm$. If speed of light in material of lens is$2 \\times {10\\^8}\\,m/s,$ the focal length of the lens is",
    "options": [
      "$15$ $cm$",
      "$20$ $cm$",
      "$30$ $cm$",
      "$10$ $cm$"
    ],
    "correct": 2,
    "solution": "$\\mu = \\frac{3\\times 10^8}{2\\times 10^8} = 1.5$. Radius $R = \\frac{r^2}{2t} = \\frac{3^2}{2\\times 0.3} = 15$ cm. Focal length $f = \\frac{R}{\\mu - 1} = \\frac{15}{0.5} = 30$ cm."
  },
  {
    "id": 49,
    "topic": "04 Radioactivity and Nuclear Kinetics",
    "question": "The radionucleide${}_{90}^{234}Th$ undergoes two successive$\\beta$ -decays followed by one$\\alpha$-decay. The atomic number and the mass number respectively of the resulting radionucleide are",
    "options": [
      "94 and 230",
      "90 and 230",
      "92 and 230",
      "92 and 234"
    ],
    "correct": 1,
    "solution": "$2 \\beta^-$ decays increase $Z$ by 2 (to 92), $A$ remains 234. Then $1 \\alpha$ decay decreases $Z$ by 2 (to 90) and $A$ by 4 (to 230). So final is 90 and 230."
  },
  {
    "id": 50,
    "topic": "04 Thin Lenses and Curved Surfaces",
    "question": "When a beam of white light is allowed to pass through convex lens parallel to principal axis, the different colours of light converge at different point on the principle axis after refraction. This is called :",
    "options": [
      "Spherical aberration",
      "Scattering",
      "Polarisation",
      "Chromatic aberration"
    ],
    "correct": 3,
    "solution": "The refractive index varies with wavelength (dispersion), causing different colors to focus at different points, a defect known as chromatic aberration."
  },
  {
    "id": 51,
    "topic": "04 Radioactivity and Nuclear Kinetics",
    "question": "It is true that :",
    "options": [
      "A first order reaction is always a single step reaction",
      "A zero order reaction is a multistep reaction",
      "A zero order reaction is a single step reaction",
      "A second order reaction is always a multistep reaction"
    ],
    "correct": 1,
    "solution": "A zero-order reaction implies the rate is independent of reactant concentration, which is only possible in complex, multi-step reactions (like surface catalysis), never single-step."
  },
  {
    "id": 52,
    "topic": "04 Radioactivity and Nuclear Kinetics",
    "question": "For the reaction 2A + 3B + ${3 \\over 2}$C $ \\to$ 3P, which statement is correct ?",
    "options": [
      "${{d{n_A}} \\over {dt}} = {{d{n_B}} \\over {dt}} = {{d{n_C}} \\over {dt}}$",
      "${{d{n_A}} \\over {dt}} = {2 \\over 3}{{d{n_B}} \\over {dt}} = {3 \\over 4}{{d{n_C}} \\over {dt}}$",
      "${{d{n_A}} \\over {dt}} = {3 \\over 2}{{d{n_B}} \\over {dt}} = {3 \\over 4}{{d{n_C}} \\over {dt}}$",
      "${{d{n_A}} \\over {dt}} = {2 \\over 3}{{d{n_B}} \\over {dt}} = {4 \\over 3}{{d{n_C}} \\over {dt}}$"
    ],
    "correct": 3,
    "solution": "The rate is $-\\frac{1}{2}\\frac{dn_A}{dt} = -\\frac{1}{3}\\frac{dn_B}{dt} = -\\frac{2}{3}\\frac{dn_C}{dt}$. Option 4 gives $\\frac{dn_A}{dt} = \\frac{2}{3}\\frac{dn_B}{dt} = \\frac{4}{3}\\frac{dn_C}{dt}$, which satisfies the proportionalities correctly."
  },
  {
    "id": 53,
    "topic": "01 Werner Theory Nomenclature and Ligands",
    "question": "Which one of the following complexes will consume more equivalents of aqueous solution of Ag(NO3)?",
    "options": [
      "Na3[CrCl6]",
      "[Cr(H2O)5Cl]Cl2",
      "[Cr(H2O)6]Cl3",
      "Na2[CrCl5(H2O)]"
    ],
    "correct": 2,
    "solution": "The number of moles of $\\text{AgCl}$ precipitated is equal to the number of ionizable chloride ions outside the coordination sphere. $[\\text{Cr}(\\text{H}_2\\text{O})_6]\\text{Cl}_3$ has 3 such ions, the highest among the choices."
  },
  {
    "id": 54,
    "topic": "Ray Optics",
    "question": "Two beams of red and violet colors are passed separately through a prism of apex angle A = 60°. In the position of minimum deviation, the angle of refraction inside the prism will be:",
    "options": [
      "30° for both the colors",
      "greater for violet color",
      "greater for red color",
      "equal but not 30° for both colors"
    ],
    "correct": 0,
    "solution": "At minimum deviation, the angle of refraction inside the prism is always $r = A/2$. Since $A = 60^\\circ$, $r = 30^\\circ$ for any color that is at minimum deviation."
  },
  {
    "id": 55,
    "topic": "Ray Optics",
    "question": "A light beam travels from Region I through a stack of media with parallel planar interfaces to Region IV. The refractive indices in Regions I, II, III, and IV are n_0, n_0/2, n_0/6, and n_0/8 respectively. The angle of incidence θ in Region I for which the beam just misses entering Region IV is:",
    "options": [
      "sin⁻¹(3/4)",
      "sin⁻¹(1/8)",
      "sin⁻¹(1/4)",
      "sin⁻¹(1/3)"
    ],
    "correct": 1,
    "solution": "By Snell's Law, $n_0 \\sin(\\theta) = n_{IV} \\sin(90^\\circ)$. So $n_0 \\sin(\\theta) = (n_0/8) \\times 1 \\implies \\sin(\\theta) = 1/8$. Thus $\\theta = \\sin^{-1}(1/8)$."
  }
];
