const PRACTICE_QUESTIONS = [
  {
    id: 1,
    topic: 'Complex Numbers',
    question: 'What is the principal value interval for the argument of a complex number?',
    options: ['(0, 2π]', '[0, π]', '(-π, π]', '(-π/2, π/2)'],
    correct: 2
  },
  {
    id: 2,
    topic: 'Complex Numbers',
    question: 'The sum of four consecutive powers of i (e.g., i^n + i^{n+1} + i^{n+2} + i^{n+3}) is equal to:',
    options: ['1', 'i', '-1', '0'],
    correct: 3
  },
  {
    id: 3,
    topic: 'Complex Numbers',
    question: 'The cube roots of unity (1, ω, ω²) form which polygon in the complex plane?',
    options: ['Isosceles triangle', 'Right angled triangle', 'Equilateral triangle', 'Square'],
    correct: 2
  },
  {
    id: 4,
    topic: 'Chemical Kinetics',
    question: 'What is the unit of the rate constant for a first-order reaction?',
    options: ['mol/(L·s)', 'L/(mol·s)', 's⁻¹', 'mol²/(L²·s)'],
    correct: 2
  },
  {
    id: 5,
    topic: 'Chemical Kinetics',
    question: 'Which of the following can have a fractional value?',
    options: ['Molecularity', 'Order of reaction', 'Both order and molecularity', 'Neither'],
    correct: 1
  },
  {
    id: 6,
    topic: 'Chemical Kinetics',
    question: 'The half-life of a zero-order reaction is proportional to:',
    options: ['Square of initial concentration', 'Initial concentration', 'Independent of initial concentration', 'Inverse of initial concentration'],
    correct: 1
  },
  {
    id: 7,
    topic: 'Chemical Kinetics',
    question: 'A catalyst accelerates a reaction by:',
    options: ['Increasing the activation energy', 'Lowering the activation energy', 'Changing the reaction enthalpy', 'Shifting the equilibrium constant'],
    correct: 1
  },
  {
    id: 8,
    topic: 'Kinetic Theory of Gases',
    question: 'The average translational kinetic energy per molecule of an ideal gas is:',
    options: ['(1/2) kT', '(3/2) kT', '(5/2) kT', '(3/2) RT'],
    correct: 1
  },
  {
    id: 9,
    topic: 'Kinetic Theory of Gases',
    question: 'What is the correct order of characteristic molecular speeds?',
    options: ['v_rms < v_avg < v_mp', 'v_mp < v_avg < v_rms', 'v_avg < v_mp < v_rms', 'v_mp < v_rms < v_avg'],
    correct: 1
  },
  {
    id: 10,
    topic: 'Kinetic Theory of Gases',
    question: 'How many degrees of freedom does a monatomic gas like Helium have?',
    options: ['3', '5', '6', '7'],
    correct: 0
  },
  {
    id: 11,
    topic: 'Kinetic Theory of Gases',
    question: 'At constant temperature, the mean free path of gas molecules is proportional to:',
    options: ['Pressure P', '1/P', 'P²', '1/P²'],
    correct: 1
  },
  {
    id: 12,
    topic: 'Current Electricity',
    question: 'For semiconductors and insulators, the temperature coefficient of resistance (α) is:',
    options: ['Positive', 'Zero', 'Negative', 'Infinite'],
    correct: 2
  },
  {
    id: 13,
    topic: 'Current Electricity',
    question: 'Maximum power is transferred from a source to a load when:',
    options: ['Load resistance is zero', 'Load resistance is infinite', 'Load resistance equals internal resistance', 'Load resistance is half the internal resistance'],
    correct: 2
  },
  {
    id: 14,
    topic: 'Current Electricity',
    question: 'The current capacity of a fuse wire strictly depends on its:',
    options: ['Length only', 'Radius only', 'Both length and radius', 'Density'],
    correct: 1
  },
  {
    id: 15,
    topic: 'Current Electricity',
    question: 'The time constant (τ) of an RC circuit is given by:',
    options: ['R/C', 'C/R', 'RC', '1/(RC)'],
    correct: 2
  },
  {
    id: 16,
    topic: 'Electrostatics',
    question: 'The electric field inside a solid conducting charged sphere in electrostatic equilibrium is:',
    options: ['Proportional to distance r', 'Inversely proportional to r²', 'Zero', 'Constant but non-zero'],
    correct: 2
  },
  {
    id: 17,
    topic: 'Electrostatics',
    question: 'The electrostatic energy density in an electric field E is:',
    options: ['(1/2) ε₀ E²', 'ε₀ E²', '(1/2) ε₀ E', 'ε₀ E'],
    correct: 0
  },
  {
    id: 18,
    topic: 'Electrostatics',
    question: 'The work done to rotate an electric dipole from stable (0°) to unstable (180°) equilibrium in a uniform electric field E is:',
    options: ['pE', '-pE', '2pE', '0'],
    correct: 2
  },
  {
    id: 19,
    topic: 'Electrostatics',
    question: 'The electrostatic pressure on the surface of a charged conductor with surface charge density σ is:',
    options: ['σ / ε₀', 'σ² / (2ε₀)', 'σ² / ε₀', 'σ / (2ε₀)'],
    correct: 1
  },
  {
    id: 20,
    topic: 'Modern Physics',
    question: 'The maximum kinetic energy of emitted photoelectrons is independent of:',
    options: ['Frequency of incident light', 'Wavelength of incident light', 'Intensity of incident light', 'Work function of the metal'],
    correct: 2
  },
  {
    id: 21,
    topic: 'Modern Physics',
    question: 'The slope of the stopping potential (V₀) versus incident frequency (ν) graph is:',
    options: ['h', 'e/h', 'h/e', 'he'],
    correct: 2
  },
  {
    id: 22,
    topic: 'Modern Physics',
    question: 'In the Bohr model, the radius of the n-th orbit is proportional to:',
    options: ['n / Z', 'n² / Z', 'Z / n²', 'Z² / n'],
    correct: 1
  },
  {
    id: 23,
    topic: 'Modern Physics',
    question: 'Which hydrogen spectral series lies entirely in the ultraviolet (UV) region?',
    options: ['Balmer', 'Paschen', 'Brackett', 'Lyman'],
    correct: 3
  },
  {
    id: 24,
    topic: 'Laws of Motion and Friction',
    question: 'The angle of repose on a rough inclined plane is equal to:',
    options: ['Angle of friction', 'Double the angle of friction', 'Half the angle of friction', 'Zero'],
    correct: 0
  },
  {
    id: 25,
    topic: 'Laws of Motion and Friction',
    question: 'Stopping distance of a car with initial velocity v on a rough horizontal floor is proportional to:',
    options: ['v', 'v²', '√v', 'v³'],
    correct: 1
  },
  {
    id: 26,
    topic: 'Laws of Motion and Friction',
    question: 'What is the minimum velocity required at the bottom of a vertical circular loop of radius r to complete the circle?',
    options: ['√(gr)', '√(3gr)', '√(5gr)', '√(7gr)'],
    correct: 2
  },
  {
    id: 27,
    topic: 'Laws of Motion and Friction',
    question: 'The centripetal acceleration for a particle in uniform circular motion with speed v and radius r is:',
    options: ['v / r', 'v² / r', 'v / r²', 'v² / r²'],
    correct: 1
  },
  {
    id: 28,
    topic: 'Atomic Structure',
    question: 'The number of angular nodes for an atomic orbital is equal to:',
    options: ['Principal quantum number (n)', 'Azimuthal quantum number (l)', 'n - l - 1', 'Magnetic quantum number (m)'],
    correct: 1
  },
  {
    id: 29,
    topic: 'Atomic Structure',
    question: 'The maximum number of electrons that can be accommodated in a principal shell n is:',
    options: ['n²', '2n', '2n²', '2n + 1'],
    correct: 2
  },
  {
    id: 30,
    topic: 'Atomic Structure',
    question: 'Which rule states that no two electrons in an atom can have the same four quantum numbers?',
    options: ["Hund's Rule", 'Aufbau Principle', 'Bohr Model', "Pauli's Exclusion Principle"],
    correct: 3
  }
,
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
  "correct": 0
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
  "correct": 3
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
  "correct": 2
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
  "correct": 1
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
  "correct": 0
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
  "correct": 1
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
  "correct": 1
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
  "correct": 1
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
  "correct": 0
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
  "correct": 1
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
  "correct": 1
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
  "correct": 1
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
  "correct": 3
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
  "correct": 2
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
  "correct": 1
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
  "correct": 2
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
  "correct": 1
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
  "correct": 2
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
  "correct": 1
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
  "correct": 3
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
  "correct": 1
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
  "correct": 3
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
  "correct": 2
},
{
  "id": 54,
  "topic": "Ray Optics",
  "question": "Two beams of red and violet colors are passed separately through a prism of apex angle A = 60\u00b0. In the position of minimum deviation, the angle of refraction inside the prism will be:",
  "options": [
    "30\u00b0 for both the colors",
    "greater for violet color",
    "greater for red color",
    "equal but not 30\u00b0 for both colors"
  ],
  "correct": 0
},
{
  "id": 55,
  "topic": "Ray Optics",
  "question": "A light beam travels from Region I through a stack of media with parallel planar interfaces to Region IV. The refractive indices in Regions I, II, III, and IV are n_0, n_0/2, n_0/6, and n_0/8 respectively. The angle of incidence \u03b8 in Region I for which the beam just misses entering Region IV is:",
  "options": [
    "sin\u207b\u00b9(3/4)",
    "sin\u207b\u00b9(1/8)",
    "sin\u207b\u00b9(1/4)",
    "sin\u207b\u00b9(1/3)"
  ],
  "correct": 1
}
];
