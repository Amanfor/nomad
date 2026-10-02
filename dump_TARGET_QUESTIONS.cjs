const fs = require('fs');
const data = [
  {
    "id": 200,
    "topic": "Target Concept",
    "question": "At t = 0, truck, starting from rest, moves in the positive x-direction at uniform acceleration of 5 ms$-$2. At t = 20 s, a ball is released from the top of the truck. The ball strikes the ground in 1 s after the release. The velocity of the ball, when it strikes the ground, will be :\n(Given g = 10 ms$-$2)",
    "options": [
      "$100\\widehat i - 10\\widehat j$",
      "$10\\widehat i - 100\\widehat j$",
      "$100\\widehat i$",
      "$ - 10\\widehat j$"
    ],
    "correct": 0,
    "solution": "At t = 20 s,\nvelocity of truck,\nv = 0 + 5$\\times$ 20 = 100 m/s\nAt 20 sec a ball is dropped from the truck, so velocity of ball will be same as truck.\nVelocity of truck at x-direction = 100 m/s and in y-direction = 0.\n$\\therefore$ Velocity of ball vx = 100 m/s, vy = 0\nNow ball will show projectile motion where vertically downward acceleration g = 10 m/s act on the ball.\nAs horizontally no acceleration acting on the ball so horizontal velocity 100 m/s will remain unchanged.\nVelocity of the ball when it reach the ground along y-direction after 1 sec.\n${v_y} = 0 - 10 \\times 1$\n$\\Rightarrow {v_y} = - 10$ m/s\n$\\therefore$ Velocity of ball$(\\overrightarrow v ) = 100\\widehat i - 10\\widehat j$"
  },
  {
    "id": 201,
    "topic": "Target Concept",
    "question": "A ball is thrown from a point with a speed \u03bd0 at an angle of projection \u03b8. From the same point and at the same instant person starts running with a constant speed${{{v\\_0}} \\over 2}$ to catch the ball. Will the person be able to catch the ball? If yes, what should be the angle of projection \u03b8?",
    "options": [
      "No",
      "Yes, $30^\\circ$",
      "Yes, $60^\\circ$",
      "Yes, $45^\\circ$"
    ],
    "correct": 2,
    "solution": "Yes, the person can catch the ball when horizontal velocity is equal to the horizontal component of ball's velocity, the motion of ball will be only in vertical direction with respect to person for that, ${{{v\\_0}} \\over 2} = {v\\_0}\\cos \\theta \\,\\,\\,\\,$ or$\\cos \\theta = {1 \\over 2} \\Rightarrow \\cos \\theta = \\cos 60^\\circ \\Rightarrow \\theta = 60^\\circ$"
  },
  {
    "id": 202,
    "topic": "Target Concept",
    "question": "A body of mass$500 \\mathrm{~g}$ moves along$\\mathrm{x}$-axis such that it's velocity varies with displacement$\\mathrm{x}$ according to the relation$v=10 \\sqrt{x} \\mathrm{~m} / \\mathrm{s}$ the force acting on the body is:-",
    "options": [
      "166 N",
      "5 N",
      "25 N",
      "125 N"
    ],
    "correct": 2,
    "solution": "Given that the velocity of the body varies with displacement x according to the relation:\n\n\n$\nv = 10\\sqrt{x}\\,\\mathrm{ms}^{-1}\n$\n\n\nTo find the force acting on the body, we first need to find its acceleration, which can be obtained by differentiating the velocity with respect to time. However, we don't have the velocity expressed as a function of time, but rather as a function of displacement. To work around this, we will use the chain rule:\n\n\n$\n\\frac{dv}{dt} = \\frac{dv}{dx} \\cdot \\frac{dx}{dt}\n$\n\n\nNow, differentiate the velocity with respect to displacement:\n\n\n$\n\\frac{dv}{dx} = \\frac{1}{2} \\cdot 10 \\cdot x^{-1/2} = 5x^{-1/2}\n$\n\n\nRecall that$\\frac{dx}{dt}$ is the velocity, so we have:\n\n\n$\n\\frac{dv}{dt} = 5x^{-1/2} \\cdot 10\\sqrt{x} = 50\n$\n\n\nThus, the acceleration is constant and equal to 50 m/s$\u00b2$.\n\n\nNow we can find the force acting on the body using Newton's second law:\n\n\n$\nF = ma\n$\n\n\nFirst, convert the mass from grams to kilograms:\n\n\n$\nm = \\frac{500\\,\\mathrm{g}}{1000} = 0.5\\,\\mathrm{kg}\n$\n\n\nNow, calculate the force:\n\n\n$\nF = (0.5\\,\\mathrm{kg})(50\\,\\mathrm{ms}^{-2}) = 25\\,\\mathrm{N}\n$\n\n\nThe force acting on the body is 25 N."
  },
  {
    "id": 203,
    "topic": "Target Concept",
    "question": "A bullet of mass 20 g has an initial speed of 1 ms\u20131\n, just before it starts penetrating a mud wall of thickness\n20 cm. If the wall offers a mean resistance of 2.5 $\u00d7$ 10\u20132 N, the speed of the bullet after emerging from the\nother side of the wall is close to :",
    "options": [
      "0.3 ms-1",
      "0.1 ms-1",
      "0.7 ms-1",
      "0.4 ms-1"
    ],
    "correct": 2,
    "solution": "Given, resistance offered by the wall\n$\n=F=-25 \\times 10^{-2} \\mathrm{~N}\n$\nSo, deacceleration of bullet,\n$\n\\begin{aligned}\na=\\frac{F}{m}=\\frac{-2.5 \\times 10^{-2}}{20 \\times 10^{-3}} & =-\\frac{5}{4} \\mathrm{~ms}^{-2} \\\\\\\\\n(\\because m & \\left.=20 \\mathrm{~g}=20 \\times 10^{-3} \\mathrm{~kg}\\right)\n\\end{aligned}\n$\nNow, using the equation of motion,\n$\nv^2-u^2=2 a s\n$\nWe have,\n$\nv^2=1+2\\left(-\\frac{5}{4}\\right)\\left(20 \\times 10^{-2}\\right)\n$\n$\n\\left(\\because u=1 \\mathrm{~ms}^{-1} \\text { and } s=20 \\mathrm{~cm}=20 \\times 10^{-2} \\mathrm{~m}\\right)\n$\n$\n\\begin{array}{ll}\n\\Rightarrow v^2=\\frac{1}{2} \\\\\\\\\n\\therefore v=\\frac{1}{\\sqrt{2}} \\approx 0.7 \\mathrm{~ms}^{-1}\n\\end{array}\n$"
  },
  {
    "id": 204,
    "topic": "Target Concept",
    "question": "A ball is thrown upward with an initial velocity\nV0 from the surface of the earth. The motion\nof the ball is affected by a drag force equal to\nm$\\gamma$u2 (where m is mass of the ball, u is its\ninstantaneous velocity and$\\gamma$ is a constant).\nTime taken by the ball to rise to its zenith is :",
    "options": [
      "${1 \\over {\\sqrt {\\gamma g} }}{\\tan ^{ - 1}}\\left( {\\sqrt {{\\gamma \\over g}} {V_0}} \\right)$",
      "${1 \\over {\\sqrt {\\gamma g} }}{ln}\\left( 1+ {\\sqrt {{\\gamma \\over g}} {V_0}} \\right)$",
      "${1 \\over {\\sqrt {\\gamma g} }}{\\sin ^{ - 1}}\\left( {\\sqrt {{\\gamma \\over g}} {V_0}} \\right)$",
      "${1 \\over {\\sqrt {2\\gamma g} }}{\\tan ^{ - 1}}\\left( {\\sqrt {{2\\gamma \\over g}} {V_0}} \\right)$"
    ],
    "correct": 0,
    "solution": "Given, drag force, $F=m \\gamma v^2$ ......(i)\nAs we know, general equation of force\n$\n=m a\n$ .........(ii)\nComparing Eqs. (i) and (ii), we get\n$\na=\\gamma v^2\n$\n\n\nThe net retardation of the ball when thrown vertically upward is therefore\n$a_{\\text{net}} = - (g + \\gamma v^2) = \\frac{dv}{dt}$, where$g$ is the acceleration due to gravity.\n\n\nRearranging terms gives us :\n\n\n$\\frac{dv}{g + \\gamma v^2} = - dt$\n\n\nWe now need to integrate both sides of this equation.\n\n\nWhen the ball is thrown upward with velocity$v_0$ and reaches its zenith ( \"zenith\" refers to the highest point that the ball reaches in its upward trajectory.), the velocity is$0$. The time to reach the zenith is$t$.\n\n\nSo the integral equation is :\n\n\n$\\int\\limits_{v_0}^{0} \\frac{dv}{\\gamma v^2 + g} = - \\int\\limits_{0}^{t} dt$\n\n\nSeparating the constants from the integral :\n\n\n$\\frac{1}{\\gamma} \\int\\limits_{v_0}^{0} \\frac{1}{\\left(\\frac{g}{\\gamma}+v^2\\right)} dv = - \\int\\limits_{0}^{t} dt$\n\n\nRecognizing the integral as the standard form$\\frac{1}{x^2 + a^2} = \\frac{1}{a} \\tan^{-1}\\left(\\frac{x}{a}\\right)$, we write the integral in terms of the arctangent function.\n\n\nThis gives us :\n\n\n$\\frac{1}{\\gamma} \\left(\\frac{1}{\\sqrt{\\frac{g}{\\gamma}}}\\right) \\left[\\tan^{-1}\\left(\\frac{v}{\\sqrt{\\frac{g}{\\gamma}}}\\right)\\right]_{v_0}^{0} = -t$\n\n\nEvaluating the integral at the bounds gives us :\n\n\n$\\frac{1}{\\sqrt{\\gamma g}} \\tan^{-1}\\left(\\frac{\\sqrt{\\gamma} v_0}{\\sqrt{g}}\\right) = t$\n\n\nTherefore, the time taken by the ball to rise to its zenith, considering the drag force, is given by\n\n\n$t = \\frac{1}{\\sqrt{\\gamma g}} \\tan^{-1}\\left(\\sqrt{\\frac{\\gamma}{g}} V_0\\right)$"
  },
  {
    "id": 205,
    "topic": "Target Concept",
    "question": "A spaceship in space sweeps stationary\ninterplanetary dust. As a result, its mass\nincreases at a rate${{dM\\left( t \\right)} \\over {dt}}$ = bv2(t), where v(t) is\nits instantaneous velocity. The instantaneous\nacceleration of the satellite is :",
    "options": [
      "-bv3(t)",
      "$ - {{2b{v^3}} \\over {M\\left( t \\right)}}$",
      "$ - {{b{v^3}} \\over {M\\left( t \\right)}}$",
      "$ - {{b{v^3}} \\over {2M\\left( t \\right)}}$"
    ],
    "correct": 2,
    "solution": "Given${{dM\\left( t \\right)} \\over {dt}}$ = bv2(t)\nIn free space\nno external force\nso there in only thrust force on rocket.\nFthrust = v${{dm} \\over {dt}}$\nForce on satellite = $ - \\overrightarrow v {{dm\\left( t \\right)} \\over {dt}}$\nM(t)a = \u2013 v (bv2)\n$ \\Rightarrow$ a = $ - {{b{v^3}} \\over {M\\left( t \\right)}}$"
  },
  {
    "id": 206,
    "topic": "Target Concept",
    "question": "At any instant the velocity of a particle of mass$500 \\mathrm{~g}$ is$\\left(2 t \\hat{i}+3 t^{2} \\hat{j}\\right) \\mathrm{ms}^{-1}$. If the force acting on the particle at$t=1 \\mathrm{~s}$ is$(\\hat{i}+x \\hat{j}) \\mathrm{N}$. Then the value of$x$ will be:",
    "options": [
      "2",
      "4",
      "6",
      "3"
    ],
    "correct": 3,
    "solution": "Given the velocity vector of a particle$v = (2t \\hat{i}+3 t^{2} \\hat{j}) \\, \\text{ms}^{-1}$, the acceleration$a$ is the derivative of the velocity vector with respect to time. So, we have:\n$a = \\frac{dv}{dt} = (2 \\hat{i} + 6t \\hat{j}) \\, \\text{ms}^{-2}$.\nAt$t=1 \\, \\text{s}$, the acceleration$a$ is$(2 \\hat{i} + 6 \\hat{j}) \\, \\text{ms}^{-2}$.\nAccording to Newton's second law, the force$F$ is equal to the mass$m$ times acceleration$a$. The mass$m$ is given as$500 \\, \\text{g}$, or equivalently, $0.5 \\, \\text{kg}$.\nTherefore, the force$F$ on the particle at$t=1 \\, \\text{s}$ is:\n$F = m \\cdot a = 0.5 \\cdot (2 \\hat{i} + 6 \\hat{j}) = (1 \\hat{i} + 3 \\hat{j}) \\, \\text{N}$.\nSo, the force acting on the particle at$t=1 \\, \\text{s}$ is$(\\hat{i} + x \\hat{j}) \\, \\text{N}$, where$x=3$.\nTherefore, the answer is$x=3$."
  },
  {
    "id": 207,
    "topic": "Target Concept",
    "question": "The position vector of a particle related to time$t$ is given by\n\n$\\vec{r}=\\left(10 t \\hat{i}+15 t^{2} \\hat{j}+7 \\hat{k}\\right) m$\n\nThe direction of net force experienced by the particle is :",
    "options": [
      "Positive$x$ - axis",
      "Positive$y$ - axis",
      "Positive$z$ - axis",
      "In$x$ - $y$ plane"
    ],
    "correct": 1,
    "solution": "To find the direction of the net force experienced by the particle, we need to find the acceleration vector of the particle and then use Newton's second law, which states that the net force on an object is equal to its mass times its acceleration vector.\n\n\nThe position vector of the particle is given by:\n\n\n$\n\\vec{r} = (10t\\hat{i} + 15t^2\\hat{j} + 7\\hat{k})\\,\\text{m}\n$\n\n\nDifferentiating$\\vec{r}$ twice with respect to time$t$, we get the acceleration vector:\n\n\n$\n\\vec{a} = \\frac{d^2\\vec{r}}{dt^2} = \\frac{d}{dt}(10\\hat{i} + 30t\\hat{j}) = 30\\hat{j}\\,\\text{m/s}^2\n$\n\n\nTherefore, the acceleration vector is$\\vec{a} = 30\\hat{j}\\,\\text{m/s}^2$.\n\n\nUsing Newton's second law, the net force on the particle is given by:\n\n\n$\n\\vec{F}_{net} = m\\vec{a}\n$\n\n\nwhere$m$ is the mass of the particle.\n\n\nSince we are only interested in the direction of the net force, we can ignore the magnitude of the acceleration and focus on its direction, which is along the positive$y$-axis."
  },
  {
    "id": 208,
    "topic": "Target Concept",
    "question": "A small ball of mass m is thrown upward with velocity u from the ground. The ball experiences a\nresistive force mkv2\nwhere v is its speed. The maximum height attained by the ball is :",
    "options": [
      "${1 \\over k}{\\tan ^{ - 1}}{{k{u^2}} \\over {2g}}$",
      "${1 \\over {2k}}{\\tan ^{ - 1}}{{k{u^2}} \\over g}$",
      "${1 \\over {2k}}\\ln \\left( {1 + {{k{u^2}} \\over g}} \\right)$",
      "${1 \\over k}\\ln \\left( {1 + {{k{u^2}} \\over {2g}}} \\right)$"
    ],
    "correct": 2,
    "solution": "Fnet = ma\n$ \\Rightarrow$ -mg - mkv2 = $mv{{dv} \\over {ds}}$\n$ \\Rightarrow ds = {{ - vdv} \\over {g + k{v^2}}}$\n$ \\Rightarrow \\int\\limits_{s = 0}^{{H_{\\max }}} {ds} = \\int\\limits_{v = u}^{v = 0} {{{ - vdv} \\over {g + k{v^2}}}}$\n$ \\Rightarrow$ Hmax = ${1 \\over {2k}}\\ln \\left( {{{g + k{u^2}} \\over g}} \\right)$ = ${1 \\over {2k}}\\ln \\left( {1 + {{k{u^2}} \\over g}} \\right)$"
  },
  {
    "id": 209,
    "topic": "Target Concept",
    "question": "Two forces P and Q, of magnitude 2F and 3F, respectively, are at an angle$\\theta$ with each other. If the force Q is doubled, then their resultant also gets doubled. Then, the angle$\\theta$ is -",
    "options": [
      "90o",
      "60o",
      "30o",
      "120o"
    ],
    "correct": 3,
    "solution": "4F2 + 9F2 + 12F2 cos$\\theta$ = R2\n4F2 + 36F2 + 24F2 cos$\\theta$ = 4R2\n4F2 + 36F2 + 24F2 cos$\\theta$\n= 4(13F2 + 12F2cos$\\theta$) = 52F2 + 48F2cos$\\theta$\ncos$\\theta$ = $- {{12{F^2}} \\over {24{F^2}}}$ = $- {1 \\over 2}$"
  },
  {
    "id": 210,
    "topic": "Target Concept",
    "question": "A particle moves in$x$-$y$ plane under the influence of a force$\\vec{F}$ such that its linear momentum is$\\overrightarrow{\\mathrm{p}}(\\mathrm{t})=\\hat{i} \\cos (\\mathrm{kt})-\\hat{j} \\sin (\\mathrm{kt})$. If$\\mathrm{k}$ is constant, the angle between$\\overrightarrow{\\mathrm{F}}$ and$\\overrightarrow{\\mathrm{p}}$ will be :",
    "options": [
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{6}$"
    ],
    "correct": 0,
    "solution": "To find the angle between$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$, we first need to understand the relationship between force and momentum. The force$\\vec{F}$ acting on a particle is related to the rate of change of its linear momentum$\\overrightarrow{\\mathrm{p}}$ with respect to time, as described by Newton's second law of motion:\n\n\n$\\vec{F} = \\frac{d\\overrightarrow{\\mathrm{p}}}{dt}$\n\n\nGiven the expression for the momentum$\\overrightarrow{\\mathrm{p}}(t) = \\hat{i} \\cos (kt) - \\hat{j} \\sin (kt)$, we can find$\\vec{F}$ by differentiating$\\overrightarrow{\\mathrm{p}}$ with respect to$t$:\n\n\n$\\frac{d\\overrightarrow{\\mathrm{p}}}{dt} = -k\\hat{i} \\sin (kt) - k\\hat{j} \\cos (kt)$\n\n\nSo, $\\vec{F} = -k\\hat{i} \\sin (kt) - k\\hat{j} \\cos (kt)$.\n\n\nNow, to find the angle between$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$, we use the dot product formula:\n\n\n$\\vec{F} \\cdot \\overrightarrow{\\mathrm{p}} = |\\vec{F}| |\\overrightarrow{\\mathrm{p}}| \\cos(\\theta)$,\n\n\nwhere$\\theta$ is the angle between$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$. However, in this case, it's more insightful to see if$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$ are orthogonal (at a$\\frac{\\pi}{2}$ angle to each other), because the dot product of two perpendicular vectors is zero.\n\n\nThe dot product of$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$ is:\n\n\n$(-k\\hat{i} \\sin (kt) - k\\hat{j} \\cos (kt)) \\cdot (\\hat{i} \\cos (kt) - \\hat{j} \\sin (kt)) =$\n\n\n$- k \\sin (kt) \\cos (kt) + k \\cos (kt) \\sin (kt) = 0$\n\n\nThe result is zero, indicating that the angle between$\\vec{F}$ and$\\overrightarrow{\\mathrm{p}}$ is indeed$\\frac{\\pi}{2}$.\n\n\nTherefore, the correct option is:\n\n\nOption A$\\frac{\\pi}{2}$."
  },
  {
    "id": 211,
    "topic": "Target Concept",
    "question": "A heavy iron bar, of weight$W$ is having its one end on the ground and the other on the shoulder of a person. The bar makes an angle$\\theta$ with the horizontal. The weight experienced by the person is :",
    "options": [
      "$W \\sin \\theta$",
      "$W$",
      "$\\frac{W}{2}$",
      "$W \\cos \\theta$"
    ],
    "correct": 2,
    "solution": "$\\begin{aligned} & m g \\times \\frac{L}{2} \\cos \\theta=N \\times L \\cos \\theta \\\\ & \\Rightarrow \\quad N=\\frac{m g}{2}=\\frac{W}{2} \\end{aligned}$"
  },
  {
    "id": 212,
    "topic": "Target Concept",
    "question": "A cricket player catches a ball of mass$120 \\mathrm{~g}$ moving with$25 \\mathrm{~m} / \\mathrm{s}$ speed. If the catching process is completed in$0.1 \\mathrm{~s}$ then the magnitude of force exerted by the ball on the hand of player will be (in SI unit) :",
    "options": [
      "30",
      "24",
      "12",
      "25"
    ],
    "correct": 0,
    "solution": "The first step in solving this problem is to calculate the change in momentum of the ball when it is caught. The change in momentum, or impulse, is the product of the mass of the ball and the change in velocity (as momentum is mass times velocity).\n\n\nThe ball is initially moving with a velocity of$v_i = 25 \\mathrm{~m/s}$ before the catch and finally comes to rest with a velocity of$v_f = 0 \\mathrm{~m/s}$ after the catch. Since the ball is caught, the final velocity is zero. The change in velocity$\\Delta v = v_f - v_i = 0 - 25 = -25 \\mathrm{~m/s}.$ Remember that the direction of the force exerted by the ball on the hand will be opposite to the direction of the ball's initial motion.\n\n\nThe mass of the ball$m$ is given as$120 \\mathrm{~g}$ which needs to be converted into kilograms to maintain SI units:\n$m = 120 \\mathrm{~g} = 120 \\times 10^{-3} \\mathrm{~kg} = 0.12 \\mathrm{~kg}.$\n\n\nNow we can calculate the change in momentum (impulse):\n$\\Delta p = m \\Delta v = 0.12 \\mathrm{~kg} \\times (-25 \\mathrm{~m/s}).$\n\n\nSubstituting the values we get:\n$\\Delta p = 0.12 \\times -25 = -3 \\mathrm{~kg \\cdot m/s}.$\n\n\nThe negative sign indicates that the change in momentum is in the opposite direction of the ball's initial motion, which makes sense because the ball's velocity is reduced to zero.\n\n\nThe magnitude of the impulse is independent of the sign and is$3 \\mathrm{~kg \\cdot m/s}$.\n\n\nImpulse is also equal to the average force exerted on the ball times the time interval during which the force is exerted. We can use the formula:\n$\\Delta p = F_{avg} \\Delta t$\n\n\nWhere$F_{avg}$ is the average force and$\\Delta t$ is the time interval of$0.1 \\mathrm{~s}$. Re-arranging the formula to solve for$F_{avg}$ gives us:\n$F_{avg} = \\frac{\\Delta p}{\\Delta t}.$\n\n\nSubstituting the known values we have:\n$F_{avg} = \\frac{3}{0.1} = 30 \\mathrm{~N}.$\n\n\nThe magnitude of the average force exerted by the hand of the player to catch the ball is$30 \\mathrm{~N}$."
  },
  {
    "id": 213,
    "topic": "Target Concept",
    "question": "A player caught a cricket ball of mass$150 \\mathrm{~g}$ moving at a speed of$20 \\mathrm{~m} / \\mathrm{s}$. If the catching process is completed in$0.1 \\mathrm{~s}$, the magnitude of force exerted by the ball on the hand of the player is:",
    "options": [
      "150 N",
      "3 N",
      "30 N",
      "300 N"
    ],
    "correct": 2,
    "solution": "The force exerted by the ball on the hand can be calculated using the formula derived from Newton's second law of motion, which is$F = \\frac{\\Delta p}{\\Delta t}$, where$F$ is the force, $\\Delta p$ represents the change in momentum, and$\\Delta t$ is the time over which this change occurs.\n\n\nThe change in momentum, $\\Delta p$, can be calculated as the difference between the final momentum, $p_f$, and the initial momentum, $p_i$. In this scenario, because the ball comes to a stop in the player's hand, its final velocity (and hence, its final momentum) is 0. Therefore, the change in momentum is equal to the initial momentum of the ball (since final momentum is zero).\n\n\nThe initial momentum, $p_i$, of the ball can be calculated using the formula$p = mv$, where$m$ is the mass of the ball and$v$ is its velocity. Given that the mass of the ball is$150 \\, \\mathrm{g} = 0.15 \\, \\mathrm{kg}$ (converting grams to kilograms) and its velocity is$20 \\, \\mathrm{m/s}$, we have:\n\n\n$p_i = (0.15 \\, \\mathrm{kg}) \\times (20 \\, \\mathrm{m/s}) = 3 \\, \\mathrm{kg \\cdot m/s}$\n\n\nSince the change in momentum, $\\Delta p$, equals the initial momentum ($p_i$) because the final momentum is 0, the force exerted can be found by substituting$\\Delta p$ and$\\Delta t$ into the first formula:\n\n\n$F = \\frac{3 \\, \\mathrm{kg \\cdot m/s}}{0.1 \\, \\mathrm{s}} = 30 \\, \\mathrm{N}$\n\n\nTherefore, the magnitude of force exerted by the ball on the hand of the player is 30 N, which corresponds to Option C."
  },
  {
    "id": 214,
    "topic": "Target Concept",
    "question": "The particle of mass 1 kg is acted upon by a\nforce$\\overset{\\rightarrow}{F} = F_{x}\\overset{\\hat{}}{i} + F_{y}\\overset{\\hat{}}{j}$\nfrom t = 0 to t = 4 sec. Find the velocityof the particle at t=4 sec.,\nif its initial velocity is\n$\\overset{\\rightarrow}{u} = - \\overset{\\hat{}}{i} + \\overset{\\hat{}}{j}$and\nthe variation of applied force with time is as shown in the graphs",
    "options": [
      "$\\overset{\\rightarrow}{v} = - \\overset{\\hat{}}{i} + \\overset{\\hat{}}{j}$",
      "$\\overset{\\rightarrow}{v} = - \\overset{\\hat{}}{i} + 11\\overset{\\hat{}}{j}$",
      "$\\overset{\\rightarrow}{v} = 10\\overset{\\hat{}}{i}$",
      "$\\overset{\\rightarrow}{v} = 2\\overset{\\hat{}}{i} + 10\\overset{\\hat{}}{j}$"
    ],
    "correct": 1,
    "solution": "Explanation\n$\\int_{0}^{4}{F_{x}dt = \\Delta P_{x} = m(v_{x} - u_{x})}$\n$\\Rightarrow 0 = m(v_{x} - u_{x})$.\n$\\Rightarrow V_{x} = u_{x} = - 1$\n$\\int_{0}^{4}{F_{y}dt = \\Delta P_{y} = m(v_{y} - u_{y})}$\n$\\Rightarrow \\frac{1}{2} \\times 4 \\times 5 = 1(v_{y} - 1) \\Rightarrow v_{y} = 11$\n$\\overset{\\rightarrow}{v} = - \\overset{\\hat{}}{i} + 11\\overset{\\hat{}}{j}$"
  },
  {
    "id": 215,
    "topic": "Target Concept",
    "question": "A force$\\overrightarrow F = (40\\widehat i + 10\\widehat j)N$ acts on a body of mass 5 kg. If the body starts from rest, its position vector$\\overrightarrow r$ at time t = 10 s, will be :",
    "options": [
      "$(100\\widehat i + 400\\widehat j)m$",
      "$(100\\widehat i + 100\\widehat j)m$",
      "$(400\\widehat i + 100\\widehat j)m$",
      "$(400\\widehat i + 400\\widehat j)m$"
    ],
    "correct": 2,
    "solution": "${{d\\overrightarrow v } \\over {dt}} = \\overrightarrow a = {{\\overrightarrow F } \\over m} = (8\\widehat i + 2\\widehat j)m/{s^2}${{d\\overrightarrow r } \\over {dt}} = \\overrightarrow v = (8t\\widehat i + 2t\\widehat j)m/s$\\overrightarrow r = (8\\widehat i + 2\\widehat j){{{t^2}} \\over 2}m$At t = 10 sec$\\overrightarrow r = \\left[ {(8\\widehat i + 2\\widehat j)50} \\right]m \\Rightarrow \\overrightarrow r = (400\\widehat i + 100\\widehat j)m$"
  },
  {
    "id": 216,
    "topic": "Target Concept",
    "question": "Initially the block is at rest acceleration of the block is",
    "options": [
      "$2\\ m/s^{2}$",
      "$0\\ m/s^{2}$",
      "$1\\ m/s^{2}$",
      "$0.5\\ m/s^{2}$"
    ],
    "correct": 1,
    "solution": "Explanation\n[IMAGE] $N + 24 - 100 = 0$ For vertical direction\n$\\therefore N = 76N$\nNow, $0 \\leq f_{s} \\leq \\mu_{s}N\\$\n$0 \\leq f_{s} \\leq 76 \\times 0.5$\n$0 \\leq f_{s} \\leq 38N$\n$\\therefore 32 \\  $\\therefore\\ \\$Acceleration of block is zero."
  },
  {
    "id": 217,
    "topic": "Target Concept",
    "question": "Two forces are such that the sum of their magnitudes is$18 N$ and their resultant is$12 N$ which is perpendicular to the smaller force. Then the magnitudes of the forces are",
    "options": [
      "$12N,$ $6N$",
      "$13N,$ $5N$",
      "$10N,$ $8N$",
      "$16N$, $2N.$"
    ],
    "correct": 1,
    "solution": "Let the two forces be${F_1}$ and${F_2}$ and let${F_2}$ is smaller than$ {F_1}$ and assume$R$ is the resultant force.\nGiven${F_1} + {F_2} = 18 \\,\\,\\,\\,\\,\\,$ ....$(i)$\nFrom the right angle triangle, $F_2^2 + {R^2} = F_1^2$\nor$F_1^2 - F_2^2 = {R^2}$\nor$\\left( {{F_1} + {F_2}} \\right) \\left( {{F_1} - {F_2}} \\right)$ = ${R^2}$\nor$\\left( {18} \\right)\\left( {{F_1} - {F_2}} \\right)$ = ${\\left( {12} \\right)^2}$ = 144\nor$\\left( {{F_1} - {F_2}} \\right) = 8 \\,\\,\\,\\,\\,\\,$ ....$(ii)$\nBy solving equation$(i)$ and$(ii)$ we get,\n${{F_1} = 13\\,N}$ and${{F_2} = 5\\,N}$"
  },
  {
    "id": 218,
    "topic": "Target Concept",
    "question": "A particle is projected with velocity v0 along x-axis. A damping force is acting on the particle which is proportional to the square of the distance from the origin i.e. ma = $- \\alpha$x2. The distance at which the particle stops :",
    "options": [
      "${\\left[ {{{3mv_0^2} \\over {2\\alpha }}} \\right]^{{1 \\over 3}}}$",
      "${\\left( {{{2{v_0}} \\over {3\\alpha }}} \\right)^{{1 \\over 3}}}$",
      "${\\left( {{{3v_0^2} \\over {2\\alpha }}} \\right)^{{1 \\over 2}}}$",
      "${\\left( {{{2v_0^2} \\over {3\\alpha }}} \\right)^{{1 \\over 2}}}$"
    ],
    "correct": 0,
    "solution": "Given, speed of projection = v0Damping force, F = ma = $- \\alpha$x2$\\Rightarrow$ a = $- \\alpha$x2 / mAlso, $a = v{{dv} \\over {dx}}$ \\Rightarrow vdv = a\\,dx = - {\\alpha \\over m}{x^2}dx$Integrating both sides, we get$\\int_{{v_0}}^v {vdv = \\int_0^x { - {\\alpha \\over m}{x^2}dx} }$ \\Rightarrow \\left( {{{{v^2}} \\over 2}} \\right)_{{v_0}}^0 = - {\\alpha \\over m}\\left( {{{{x^3}} \\over 3}} \\right)_0^x \\Rightarrow 0 - v_0^2/2 = - {\\alpha \\over m}{{{x^3}} \\over 3} \\Rightarrow x = {\\left( {{{3m} \\over 2}{{v_0^2} \\over \\alpha }} \\right)^{1/3}}$"
  },
  {
    "id": 219,
    "topic": "Target Concept",
    "question": "A particle of mass m is acted upon by a force F given by the empirical law\nF =${R \\over {{t^2}}}\\,v\\left( t \\right).$ If this law is to be tested experimentally by observing the motion starting from rest, the best way is to plot :",
    "options": [
      "$\\upsilon $(t) against t2",
      "log $\\upsilon $(t) against ${1 \\over {{t^2}}}$",
      "log $\\upsilon $(t) against t",
      "log $\\upsilon $(t) against ${1 \\over {{t}}}$"
    ],
    "correct": 3,
    "solution": "Given,\nF = ${R \\over {{t^2}}}$ v(t)\n$ \\Rightarrow$\\ \\ \\ m${{dv} \\over {dt}}$ = ${R \\over {{t^2}}}$ (v)\n$ \\Rightarrow$\\ \\ \\ ${{dv} \\over v}$ = ${R \\over m} {{dt} \\over {{t^2}}}$\nIntergrating both sides,\n$\\int {{{dv} \\over v} = {R \\over m}\\int {{{dt} \\over {{t^2}}}} }$\n$ \\Rightarrow$\\ \\ \\ lnv = ${{R \\over m}} \\times \\left( { - {1 \\over t}} \\right)$ + C\n$ \\Rightarrow$\\ \\ \\ lnv = $- {{R \\over m}} \\left( {{1 \\over t}} \\right)$ + C\nGraph between lnv and${{1 \\over t}}$ will be straight line curve."
  },
  {
    "id": 220,
    "topic": "Target Concept",
    "question": "A particle of mass 0.3 kg subjected to a force$F=-kx$ with$k=15 N/m$. What will be its initial acceleration if it is released from a point 20 cm away from the origin?",
    "options": [
      "$15\\,\\,\\,\\,m/{s^2}$",
      "$3\\,\\,\\,m/{s^2}$",
      "$10\\,\\,\\,m/{s^2}$",
      "$5\\,\\,\\,m/{s^2}$"
    ],
    "correct": 2,
    "solution": "Given F = - kx\n$\\Rightarrow$ F = - 15$ \\times {{20} \\over {100}}$ = - 3 N\nF = m.a = 3 N\n$\\Rightarrow$ a = ${3 \\over m}$ = ${3 \\over {0.3}}$ = 10 m/s2"
  },
  {
    "id": 221,
    "topic": "Target Concept",
    "question": "A particle of mass M originally at rest is subjected to a force whose direction is constant but magnitude varies with time according to the relation$F = {F_0}\\left[ {1 - {{\\left( {{{t - T} \\over T}} \\right)}^2}} \\right]$Where F0 and T are constants. The force acts only for the time interval 2T. The velocity v of the particle after time 2T is :",
    "options": [
      "2F0T/M",
      "F0T/2M",
      "4F0T/3M",
      "F0T/3M"
    ],
    "correct": 2,
    "solution": "At t = 0, u = 0$a = {{{F_0}} \\over M} - {{{F_0}} \\over {M{T^2}}}{(t - T)^2} = {{dv} \\over {dt}}$\\int\\limits_0^v {dv = \\int\\limits_{t = 0}^{2T} {\\left( {{{{F_0}} \\over M} - {{{F_0}} \\over {M{T^2}}}{{(t - T)}^2}} \\right)dt} }$V = \\left[ {{{{F_0}} \\over M}t} \\right]_0^{2T} - {{{F_0}} \\over {M{T^2}}}\\left[ {{{{t^3}} \\over 3} - {t^2}T + {T^2}t} \\right]_0^{2T} \\Rightarrow V = {{4{F_0}T} \\over {3M}}$"
  },
  {
    "id": 222,
    "topic": "Target Concept",
    "question": "Statement : 1 If three forces${\\overrightarrow F \\_1},{\\overrightarrow F \\_2}$ and${\\overrightarrow F \\_3}$ are represented by three sides of a triangle and${\\overrightarrow F \\_1} + {\\overrightarrow F \\_2} = - {\\overrightarrow F \\_3}$, then these three forces are concurrent forces and satisfy the condition for equilibrium. Statement : 2 A triangle made up of three forces${\\overrightarrow F \\_1}$, ${\\overrightarrow F \\_2}$ and${\\overrightarrow F \\_3}$ as its sides taken in the same order, satisfy the condition for translatory equilibrium. In the light of the above statements, choose the most appropriate answer from the options given below :",
    "options": [
      "Statement - I is false but Statement - II is true",
      "Statement - I is true but Statement - II is false",
      "Both Statement-I and Statement-II are false",
      "Both Statement-I and Statement-II are true"
    ],
    "correct": 3,
    "solution": "Here, ${\\overrightarrow F \\_1} + {\\overrightarrow F \\_2} + {\\overrightarrow F \\_3} = 0 {\\overrightarrow F \\_1} + {\\overrightarrow F \\_2} = - {\\overrightarrow F \\_3}$ Since${\\overrightarrow F _{net}} = 0$ (equilibrium) Both statements correct."
  },
  {
    "id": 223,
    "topic": "Target Concept",
    "question": "A particle moving in the xy plane experiences a velocity dependent force\n$\\overrightarrow F = k\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\n, where vx\nand vy\nare the x and y components of its velocity$\\overrightarrow v$\n. If$\\overrightarrow a$\nis the acceleration of the particle, then\nwhich of the following statements is true for the particle?",
    "options": [
      "kinetic energy of particle is constant in time",
      "quantity $\\overrightarrow v \\times \\overrightarrow a $",
      "quantity $\\overrightarrow v .\\overrightarrow a $",
      "$\\overrightarrow F $ arises due to a magnetic field"
    ],
    "correct": 1,
    "solution": "Given$\\overrightarrow F = k\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\n$ \\Rightarrow$ m$\\overrightarrow a$ = $k\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\n$ \\Rightarrow \\overrightarrow a = {k \\over m}\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\nAlso${{d{v_x}} \\over {dt}} = {k \\over m}{v_x}$\nand${{d{v_y}} \\over {dt}} = {k \\over m}{v_y}$\n${{d{v_x}} \\over {d{v_y}}} = {{{v_y}} \\over {{v_x}}}$\n$ \\Rightarrow \\int {{v_x}d{v_x}} = \\int {{v_y}} d{v_y}$\n$ \\Rightarrow v_y^2 = v_x^2 + C$\n$ \\Rightarrow v_y^2 - v_x^2 = C$ = Constant\nFrom Option (B),\n$\\overrightarrow v \\times \\overrightarrow a$\n= $\\left( {{v_x}\\widehat i + {v_y}\\widehat j} \\right) \\times {k \\over m}\\left( {{v_y}\\widehat i + {v_x}\\widehat j} \\right)$\n= $\\left( {v_x^2\\widehat k - v_y^2\\widehat k} \\right) \\times {k \\over m}$\n= $\\left( {v_x^2 - v_y^2} \\right) \\times {k \\over m}\\widehat k$\n= Constant"
  },
  {
    "id": 224,
    "topic": "Target Concept",
    "question": "A block of mass M placed inside a box descends vertically with acceleration 'a'. The block exerts a force equal to one-fourth of its weight on the floor of the box. The value of 'a' will be",
    "options": [
      "${g \\over 4}$",
      "${g \\over 2}$",
      "${3g \\over 4}$",
      "g"
    ],
    "correct": 2,
    "solution": "Using Newton's second law\n$mg - {{mg} \\over 4} = ma$\n$ \\Rightarrow a = {{3g} \\over 4}$"
  },
  {
    "id": 225,
    "topic": "Target Concept",
    "question": "The initial mass of a rocket is 1000 kg. Calculate at what rate the fuel should be burnt so that the rocket is given an acceleration of 20 ms-2. The gases come out at a relative speed of 500 ms$-$1 with respect to the rocket : [Use g = 10 m/s2]",
    "options": [
      "6.0$\\times$ 102 kg s$-$1",
      "500 kg s$-$1",
      "10 kg s$-$1",
      "60 kg s$-$1"
    ],
    "correct": 3,
    "solution": "${F_{thrust}} = \\left( {{{dm} \\over {dt}}.{V_{rel}}} \\right)$\\left( {{{dm} \\over {dt}}{V_{rel}} - mg} \\right) = ma$ \\Rightarrow \\left( {{{dm} \\over {dt}}} \\right) \\times 500 - {10^3} \\times 10 = {10^3} \\times 20 {{dm} \\over {dt}}$ = (60 kg /s)"
  },
  {
    "id": 226,
    "topic": "Target Concept",
    "question": "A body of mass$4 \\mathrm{~kg}$ experiences two forces$\\vec{F}_1=5 \\hat{i}+8 \\hat{j}+7 \\hat{k}$ and$\\overrightarrow{\\mathrm{F}}_2=3 \\hat{i}-4 \\hat{j}-3 \\hat{k}$. The acceleration acting on the body is :",
    "options": [
      "$2 \\hat{i}+\\hat{j}+\\hat{k}$",
      "$4 \\hat{i}+2 \\hat{j}+2 \\hat{k}$",
      "$-2 \\hat{i}-\\hat{j}-\\hat{k}$",
      "$2 \\hat{i}+3 \\hat{j}+3 \\hat{k}$"
    ],
    "correct": 0,
    "solution": "To find the acceleration acting on the body, we first need to determine the resultant force acting on the body by adding the two forces$\\vec{F}_1$ and$\\vec{F}2$ vectorially. Then, we apply Newton's second law of motion, which states that the acceleration$\\vec{a}$ of a body is directly proportional to the total force$\\vec{F}$ acting on it and inversely proportional to the mass$m$ of the body :\n$ \\vec{F} = m \\cdot \\vec{a}$\nor\n$ \\vec{a} = \\frac{\\vec{F}}{m}$\nLet's start by adding the forces:\n$ \\vec{F}1 + \\vec{F}2 = (5 \\hat{i}+8 \\hat{j}+7 \\hat{k}) + (3 \\hat{i}-4 \\hat{j}-3 \\hat{k})$\nPerforming the addition component-wise:\n$\n\\vec{F}{\\text{total}} = (5 + 3)\\hat{i} + (8 - 4)\\hat{j} + (7 - 3)\\hat{k} \\\n\\vec{F}{\\text{total}} = 8 \\hat{i} + 4 \\hat{j} + 4 \\hat{k}\n$\nNow, let's use the formula for acceleration with$m = 4 \\mathrm{~kg}$:\n$\n\\vec{a} = \\frac{\\vec{F}{\\text{total}}}{m} = \\frac{8 \\hat{i} + 4 \\hat{j} + 4 \\hat{k}}{4 \\mathrm{~kg}}\n$\nDivide each component by the mass:\n$\n\\vec{a} = 2 \\hat{i} + 1 \\hat{j} + 1 \\hat{k}\n$\nSo, the acceleration acting on the body is:\n$ \\vec{a} = 2 \\hat{i} + \\hat{j} + \\hat{k}$\nThus, the correct option is:\nOption A :\n$2 \\hat{i}+\\hat{j}+\\hat{k}$"
  },
  {
    "id": 227,
    "topic": "Target Concept",
    "question": "A force acts for 20 s on a body of mass 20 kg, starting from rest, after which the force ceases and then body describes 50 m in the next 10 s. The value of force will be:",
    "options": [
      "40 N",
      "20 N",
      "5 N",
      "10 N"
    ],
    "correct": 2,
    "solution": "$m = 20$ kg\n$t = 20$ sec.\nAcceleration$ = {F \\over {20}}$ m/s$^2$\n$\\therefore v = u + at$\n$v = 0 + \\left( {{F \\over {20}}} \\right)(20)$\n$ = F$ ms$^{-1}$\nNow for next 10 sec.\n$S=ut$\n$50=F(10)$\n$F=5$"
  },
  {
    "id": 228,
    "topic": "Target Concept",
    "question": "When forces${F\\_1},\\,\\,{F\\_2},\\,\\,{F\\_3}$ are acting on a particle of mass$m$ such that${F\\_2}$ and${F\\_3}$ are mutually perpendicular, then the particle remains stationary. If the force${F\\_1}$ is now removed then the acceleration of the particle is",
    "options": [
      "${F\\_1}/m$",
      "${F\\_2}{F\\_3}/m{F\\_1}$",
      "$\\left( {F{}\\_2 - {F\\_3}} \\right)/m$",
      "${F\\_2}/m$"
    ],
    "correct": 0,
    "solution": "When${F\\_1},{F\\_2}$ and${F\\_3}$ are acting on a particle then the particle remains stationary. This means that the resultant of${F\\_1},{F\\_2}$ and${F\\_3}$ is zero. When${F\\_1}$ is removed then particle will start moving due to the force${F\\_2}$ and${F\\_3}$ in the resultant of${F\\_2}$ and${F\\_3}$ and it should be equal and opposite to${F\\_1}. i.e. \\left| {{{\\overrightarrow F }\\_2} + {{\\overrightarrow F }\\_3}} \\right| = \\left| {{{\\overrightarrow F }\\_1}} \\right| \\therefore \\,\\,\\,\\,\\,a = {{\\left| {{{\\overrightarrow F }\\_2} + {{\\overrightarrow F }\\_3}} \\right|} \\over m} \\Rightarrow a = {{{F\\_1}} \\over m}$"
  },
  {
    "id": 229,
    "topic": "Target Concept",
    "question": "In the fig. shown a cart moves on a smooth horizontal surface\ndue to an external constant force of magnitude F. The initial mass of\nthe cart is$M_{0}$and velocity is zero. Sand falls on to the cart with\nnegligible velocity at constant rate$\\mu\\ kg/s$ and sticks to the cart.\nThe velocity of the cart at time t is",
    "options": [
      "$\\frac{Ft}{M_{0} + \\mu t}$",
      "$\\frac{F}{\\mu}\\mathcal{l}n\\frac{m_{0} + \\mu t}{m_{0}}$",
      "$\\frac{Ft}{M_{0}}$",
      "$\\frac{Ft}{M_{0} + \\mu t}e^{\\mu t}$"
    ],
    "correct": 0,
    "solution": "Explanation\n[IMAGE] Formula$F = m\\frac{dv}{dt} + (V - u)\\frac{dm}{dt}$\nHere u=velocity of sand =0\n$m = M_{o} - \\mu t = mass\\ at\\ time\\ t$\nand$\\frac{dm}{dt} = \\mu$\n$\\therefore F = (M_{0} + \\mu t)\\frac{dm}{dt} + v\\mu$\n$(F - \\mu v)dt = (M_{o} + \\mu t)dv$\n$\\int_{0}^{t}\\frac{dt}{M_{0} + \\mu t} = \\int_{0}^{v}\\frac{dv}{F - \\mu v}$\n${\\lbrack log(M_{0} + \\mu t)\\rbrack}{0}^{t} = \\frac{1}{\\mu}\\lbrack log(F - \\mu v)\\rbrack{0}^{v}$\n$log\\frac{(M_{0} + \\mu t)}{M_{0}} = log(\\frac{F}{F - \\mu v})$\n$F - \\mu v = \\frac{M_{o}F}{M_{0} + \\mu t} \\Rightarrow v = \\frac{Ft}{M_{0} + \\mu t}$"
  }
];
fs.writeFileSync('/home/aman/nomad/TARGET_QUESTIONS.json', JSON.stringify(data, null, 2));