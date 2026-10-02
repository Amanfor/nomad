const fs = require('fs');
const data = [
  {
    "id": 100,
    "topic": "Micro Concept",
    "question": "What is the relation between velocity and displacement for constant acceleration $a$?",
    "options": [
      "v^2 = u^2 + 2ax",
      "v = u + at",
      "v = u - at",
      "v^2 = u^2 - 2ax"
    ],
    "correct": 0,
    "solution": "The third equation of motion is $v^2 = u^2 + 2as$."
  },
  {
    "id": 101,
    "topic": "Micro Concept",
    "question": "For a perfectly inelastic collision, what is the coefficient of restitution?",
    "options": [
      "e = 1",
      "e = 0.5",
      "e = 0",
      "e < 0"
    ],
    "correct": 2,
    "solution": "In a perfectly inelastic collision, the bodies stick together, so the relative velocity of separation is zero, making $e=0$."
  },
  {
    "id": 102,
    "topic": "Micro Concept",
    "question": "Which conservation law is always applicable during the brief moment of collision?",
    "options": [
      "Conservation of Kinetic Energy",
      "Conservation of Linear Momentum",
      "Conservation of Mechanical Energy",
      "None of the above"
    ],
    "correct": 1,
    "solution": "Impulsive forces are internal, so net external impulsive force is zero, conserving linear momentum."
  },
  {
    "id": 103,
    "topic": "Micro Concept",
    "question": "In uniform circular motion, what is the direction of net acceleration?",
    "options": [
      "Along the tangent",
      "Radially inward",
      "Radially outward",
      "At an angle to the radius"
    ],
    "correct": 1,
    "solution": "In UCM, tangential acceleration is zero, and net acceleration is purely centripetal (radially inward)."
  },
  {
    "id": 104,
    "topic": "Micro Concept",
    "question": "What is the formula for centripetal acceleration in terms of angular velocity?",
    "options": [
      "a = v/r",
      "a = w^2 r",
      "a = w r^2",
      "a = w/r"
    ],
    "correct": 1,
    "solution": "Centripetal acceleration is $a_c = v^2/r$, and since $v = \\omega r$, $a_c = \\omega^2 r$."
  },
  {
    "id": 105,
    "topic": "Micro Concept",
    "question": "According to Newton's Second Law, Force is the rate of change of:",
    "options": [
      "Velocity",
      "Acceleration",
      "Linear Momentum",
      "Angular Momentum"
    ],
    "correct": 2,
    "solution": "Newton's second law states $F = \frac{dp}{dt}$, where $p$ is linear momentum."
  },
  {
    "id": 106,
    "topic": "Micro Concept",
    "question": "What is the unit of impulse?",
    "options": [
      "N/s",
      "N.s",
      "kg m/s^2",
      "J"
    ],
    "correct": 1,
    "solution": "Impulse is force times time, so its unit is Newton-second (N.s), which is equivalent to kg m/s."
  },
  {
    "id": 107,
    "topic": "Micro Concept",
    "question": "For an object moving in a fluid, the viscous drag force is often proportional to:",
    "options": [
      "Velocity",
      "Displacement",
      "Acceleration",
      "Time"
    ],
    "correct": 0,
    "solution": "Viscous drag at low speeds (Stokes' drag) is proportional to velocity: $F_d = -bv$."
  },
  {
    "id": 108,
    "topic": "Micro Concept",
    "question": "What is the work done by the normal force when a block moves on a horizontal surface?",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Depends on friction"
    ],
    "correct": 2,
    "solution": "The normal force is perpendicular to the displacement, so work done $W = F \\cdot d \\cos(90^\\circ) = 0$."
  },
  {
    "id": 109,
    "topic": "Micro Concept",
    "question": "In a conservative force field, the work done in a closed loop is:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Depends on the path"
    ],
    "correct": 2,
    "solution": "For a conservative force, work done depends only on initial and final positions. In a closed loop, it is zero."
  },
  {
    "id": 110,
    "topic": "Micro Concept",
    "question": "What is the SI unit of power?",
    "options": [
      "Joule",
      "Watt",
      "Newton",
      "Pascal"
    ],
    "correct": 1,
    "solution": "Power is the rate of doing work, measured in Joules per second, which is defined as the Watt (W)."
  },
  {
    "id": 111,
    "topic": "Micro Concept",
    "question": "The center of mass of a uniform rod of length L is at:",
    "options": [
      "L/4",
      "L/3",
      "L/2",
      "L"
    ],
    "correct": 2,
    "solution": "By symmetry, the center of mass of a uniform rod is at its geometric center, $L/2$ from either end."
  },
  {
    "id": 112,
    "topic": "Micro Concept",
    "question": "In purely rolling motion, the velocity of the lowest point in contact with ground is:",
    "options": [
      "v",
      "v/2",
      "0",
      "2v"
    ],
    "correct": 2,
    "solution": "In pure rolling, there is no relative slipping at the point of contact, so its velocity is 0."
  },
  {
    "id": 113,
    "topic": "Micro Concept",
    "question": "What is the moment of inertia of a solid sphere of mass M and radius R about its diameter?",
    "options": [
      "MR^2",
      "2/3 MR^2",
      "2/5 MR^2",
      "1/2 MR^2"
    ],
    "correct": 2,
    "solution": "The moment of inertia of a solid sphere about its diameter is $2/5 MR^2$."
  },
  {
    "id": 114,
    "topic": "Micro Concept",
    "question": "Kepler's Second Law (Law of Areas) is a consequence of conservation of:",
    "options": [
      "Linear Momentum",
      "Angular Momentum",
      "Energy",
      "Mass"
    ],
    "correct": 1,
    "solution": "Central forces (like gravity) exert no torque, so angular momentum is conserved, leading to constant areal velocity."
  },
  {
    "id": 115,
    "topic": "Micro Concept",
    "question": "The escape velocity from the surface of the Earth is proportional to:",
    "options": [
      "R",
      "\\sqrt{R}",
      "1/R",
      "1/\\sqrt{R}"
    ],
    "correct": 1,
    "solution": "Escape velocity $v_e = \\sqrt{2GM/R} = \\sqrt{2gR}$, so it is proportional to $\\sqrt{R}$."
  },
  {
    "id": 116,
    "topic": "Micro Concept",
    "question": "What is the restoring force in a simple harmonic oscillator?",
    "options": [
      "-kx",
      "kx",
      "-kv",
      "kv"
    ],
    "correct": 0,
    "solution": "Hooke's law states that the restoring force is proportional to displacement and opposite in direction: $F = -kx$."
  },
  {
    "id": 117,
    "topic": "Micro Concept",
    "question": "In a longitudinal wave, particles of the medium oscillate:",
    "options": [
      "Perpendicular to wave propagation",
      "Parallel to wave propagation",
      "In circles",
      "Do not oscillate"
    ],
    "correct": 1,
    "solution": "Longitudinal waves involve compressions and rarefactions where particles oscillate parallel to the wave direction."
  },
  {
    "id": 118,
    "topic": "Micro Concept",
    "question": "The speed of sound in a gas is given by the Newton-Laplace formula:",
    "options": [
      "\\sqrt{P/\rho}",
      "\\sqrt{\\gamma P/\rho}",
      "\\sqrt{\rho/P}",
      "\\sqrt{\\gamma \rho/P}"
    ],
    "correct": 1,
    "solution": "The correct formula is $v = \\sqrt{\\gamma P / \rho}$, incorporating the adiabatic index $\\gamma$."
  },
  {
    "id": 119,
    "topic": "Micro Concept",
    "question": "According to the First Law of Thermodynamics, $\\Delta Q$ equals:",
    "options": [
      "\\Delta U - \\Delta W",
      "\\Delta U + \\Delta W",
      "\\Delta W - \\Delta U",
      "0"
    ],
    "correct": 1,
    "solution": "The First Law states that heat supplied to a system ($\\Delta Q$) equals the change in internal energy ($\\Delta U$) plus work done by the system ($\\Delta W$)."
  }
];
fs.writeFileSync('/home/aman/nomad/MICRO_QUESTIONS.json', JSON.stringify(data, null, 2));