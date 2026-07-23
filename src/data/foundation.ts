export interface FoundationTopic {
  id: string;
  level: 'Class 6-7' | 'Class 8-10' | 'Class 11' | 'Class 12';
  subject: 'Maths' | 'Physics' | 'Chemistry' | 'General Science';
  topic: string;
  plainExplanation: string;
  feedsInto: string[]; // Course codes like MA11009, PH10005, EE10002
  isCriticalPrerequisite?: boolean;
  youtubeSearchQuery: string;
}

export const FOUNDATION_TOPICS: FoundationTopic[] = [
  // Class 6-7 Absolute Basics
  {
    id: 'f_67_1',
    level: 'Class 6-7',
    subject: 'Maths',
    topic: 'Basic number operations: fractions, decimals, LCM/HCF',
    plainExplanation: 'How to add, subtract, multiply, and divide parts of numbers (fractions) and find common multiples.',
    feedsInto: ['MA11009', 'MA11011', 'CS13003', 'EE10002', 'PH10005', 'CH10009', 'EC10005'],
    youtubeSearchQuery: 'fractions decimals LCM HCF basic math Khan Academy'
  },
  {
    id: 'f_67_2',
    level: 'Class 6-7',
    subject: 'Maths',
    topic: 'Basic algebra intro: what a variable is, simple equations',
    plainExplanation: 'Using letters like x and y to represent unknown numbers and solving simple single-step equations.',
    feedsInto: ['MA11009', 'MA11011', 'CS13003', 'EE10002'],
    youtubeSearchQuery: 'introduction to algebra variables simple equations Khan Academy'
  },
  {
    id: 'f_67_3',
    level: 'Class 6-7',
    subject: 'Maths',
    topic: 'Basic geometry: angles, triangles, area/perimeter',
    plainExplanation: 'Understanding shapes, measuring corners (angles), and calculating boundary lengths and surface sizes.',
    feedsInto: ['CE18003', 'MA11009'],
    youtubeSearchQuery: 'basic geometry angles triangles area perimeter explained simply'
  },
  {
    id: 'f_67_4',
    level: 'Class 6-7',
    subject: 'General Science',
    topic: 'Basic science: states of matter, simple machines, basic electricity concepts',
    plainExplanation: 'Solid vs liquid vs gas, how levers and pulleys reduce effort, and what electric current is.',
    feedsInto: ['PH10005', 'EE10002', 'CH10009'],
    youtubeSearchQuery: 'states of matter simple machines basic electricity physics wallah'
  },
  {
    id: 'f_67_5',
    level: 'Class 6-7',
    subject: 'Chemistry',
    topic: 'Basic chemistry: elements vs compounds vs mixtures',
    plainExplanation: 'Pure single atoms (elements) vs chemical bonds (compounds) vs physical combinations (mixtures).',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'elements compounds mixtures basic chemistry organic chemistry tutor'
  },

  // Class 8-10 Basics Refresher
  {
    id: 'f_810_1',
    level: 'Class 8-10',
    subject: 'Maths',
    topic: 'Basic arithmetic, percentages, ratios',
    plainExplanation: 'Comparing numbers through division (ratios) and calculating parts out of 100 (percentages).',
    feedsInto: ['MA11009', 'MA11011', 'CS13003', 'EE10002', 'PH10005', 'CH10009'],
    youtubeSearchQuery: 'percentages and ratios basic math class 8 9 10'
  },
  {
    id: 'f_810_2',
    level: 'Class 8-10',
    subject: 'Maths',
    topic: 'Basic algebra: linear & quadratic equations',
    plainExplanation: 'Solving equations with x² terms using formulas or factoring to find roots.',
    feedsInto: ['MA11009', 'MA11011', 'EE10002'],
    youtubeSearchQuery: 'linear and quadratic equations explained class 10 math'
  },
  {
    id: 'f_810_3',
    level: 'Class 8-10',
    subject: 'Maths',
    topic: 'Basic geometry & mensuration',
    plainExplanation: 'Calculating 3D volumes (cylinders, spheres, cones) and 2D areas.',
    feedsInto: ['CE18003', 'MA11009'],
    youtubeSearchQuery: 'mensuration formulas class 10 math geometry'
  },
  {
    id: 'f_810_4',
    level: 'Class 8-10',
    subject: 'Maths',
    topic: 'Trigonometric ratios (sin, cos, tan) and basic identities',
    plainExplanation: 'Ratios of right triangle sides (opposite/hypotenuse) and rules like sin²θ + cos²θ = 1.',
    feedsInto: ['MA11009', 'MA11011', 'PH10005', 'EE10002'],
    youtubeSearchQuery: 'trigonometry class 10 sin cos tan basic identities physics wallah'
  },
  {
    id: 'f_810_5',
    level: 'Class 8-10',
    subject: 'Maths',
    topic: 'Number systems (decimal, binary basics)',
    plainExplanation: 'How humans count in base 10 (0-9) vs how computers count in base 2 (0 and 1).',
    feedsInto: ['CS13003', 'EC10005'],
    youtubeSearchQuery: 'binary to decimal conversion explained simply neso academy'
  },
  {
    id: 'f_810_6',
    level: 'Class 8-10',
    subject: 'Physics',
    topic: "Basic motion, force, and Newton's laws (Class 9-10 physics)",
    plainExplanation: 'Speed vs velocity, acceleration, and Newton’s 3 laws governing how objects move under force.',
    feedsInto: ['PH10005', 'ME18001'],
    youtubeSearchQuery: 'newtons laws of motion class 9 10 physics wallah'
  },
  {
    id: 'f_810_7',
    level: 'Class 8-10',
    subject: 'Physics',
    topic: "Basic current electricity, Ohm's law, series/parallel circuits (Class 10 physics)",
    plainExplanation: 'Voltage (V = I × R), current flow, and connecting resistors in line (series) vs side-by-side (parallel).',
    feedsInto: ['EE10002', 'EC10005'],
    youtubeSearchQuery: 'ohms law series parallel circuits class 10 physics wallah'
  },
  {
    id: 'f_810_8',
    level: 'Class 8-10',
    subject: 'Physics',
    topic: 'Light — reflection, refraction basics (Class 10 physics)',
    plainExplanation: 'Bouncing of light rays off mirrors (reflection) and bending of light through glass/water (refraction).',
    feedsInto: ['PH10005'],
    youtubeSearchQuery: 'reflection and refraction of light class 10 physics wallah'
  },
  {
    id: 'f_810_9',
    level: 'Class 8-10',
    subject: 'Chemistry',
    topic: 'Atoms, molecules, periodic table, acids-bases-salts (Class 10 chemistry)',
    plainExplanation: 'Protons/neutrons/electrons, reading element groups on the table, and pH scales for acids vs bases.',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'periodic table acids bases salts class 10 chemistry wallah'
  },

  // Class 11 - Physics
  {
    id: 'f_11_p1',
    level: 'Class 11',
    subject: 'Physics',
    topic: 'Units and Measurement',
    plainExplanation: 'SI units, dimensional analysis, and converting measurement scales.',
    feedsInto: ['PH10005', 'EE10002'],
    youtubeSearchQuery: 'units and dimensions class 11 physics wallah'
  },
  {
    id: 'f_11_p2',
    level: 'Class 11',
    subject: 'Physics',
    topic: 'Motion in a Straight Line / Plane (Kinematics)',
    plainExplanation: 'Vectors, displacement, velocity vectors, and projectile trajectories.',
    feedsInto: ['PH10005'],
    youtubeSearchQuery: 'kinematics motion in 2d class 11 physics wallah'
  },
  {
    id: 'f_11_p3',
    level: 'Class 11',
    subject: 'Physics',
    topic: 'Laws of Motion',
    plainExplanation: 'Friction, circular motion forces, and free body diagrams.',
    feedsInto: ['PH10005'],
    youtubeSearchQuery: 'laws of motion free body diagrams class 11 physics wallah'
  },
  {
    id: 'f_11_p4',
    level: 'Class 11',
    subject: 'Physics',
    topic: 'Work, Energy and Power',
    plainExplanation: 'Kinetic energy, potential energy, work-energy theorem, and power calculations.',
    feedsInto: ['EE10002', 'PH10005'],
    youtubeSearchQuery: 'work energy power class 11 physics wallah'
  },
  {
    id: 'f_11_p5',
    level: 'Class 11',
    subject: 'Physics',
    topic: 'Thermodynamics (basic)',
    plainExplanation: 'Heat transfer, thermal expansion, work done by gases, and 1st law of thermodynamics.',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'thermodynamics physics class 11 physics wallah'
  },
  {
    id: 'f_11_p6',
    level: 'Class 11',
    subject: 'Physics',
    topic: 'Oscillations and Waves',
    plainExplanation: 'Simple Harmonic Motion (SHM), wave frequency, wavelength, and phase difference.',
    feedsInto: ['PH10005'],
    youtubeSearchQuery: 'oscillations and waves class 11 physics wallah'
  },

  // Class 11 - Chemistry
  {
    id: 'f_11_c1',
    level: 'Class 11',
    subject: 'Chemistry',
    topic: 'Some Basic Concepts of Chemistry (mole concept)',
    plainExplanation: 'Counting atoms in chemical reactions using Avogadro’s number (1 mole = 6.022 × 10²³ particles).',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'mole concept class 11 chemistry physics wallah'
  },
  {
    id: 'f_11_c2',
    level: 'Class 11',
    subject: 'Chemistry',
    topic: 'Structure of Atom',
    plainExplanation: 'Bohr model, quantum numbers (n, l, m, s), and electron orbital shapes (s, p, d, f).',
    feedsInto: ['CH10009', 'PH10005'],
    youtubeSearchQuery: 'atomic structure quantum numbers class 11 chemistry'
  },
  {
    id: 'f_11_c3',
    level: 'Class 11',
    subject: 'Chemistry',
    topic: 'States of Matter',
    plainExplanation: 'Ideal gas law (PV = nRT), intermolecular forces, and phase transitions.',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'states of matter gas laws class 11 chemistry'
  },
  {
    id: 'f_11_c4',
    level: 'Class 11',
    subject: 'Chemistry',
    topic: 'Thermodynamics',
    plainExplanation: 'Enthalpy (H), Entropy (S), and Gibbs Free Energy (ΔG = ΔH - TΔS) for reaction spontaneity.',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'chemical thermodynamics gibbs free energy class 11 chemistry'
  },
  {
    id: 'f_11_c5',
    level: 'Class 11',
    subject: 'Chemistry',
    topic: 'Equilibrium',
    plainExplanation: 'Reversible chemical reactions, Le Chatelier’s principle, and pH buffer solutions.',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'chemical equilibrium le chatelier principle class 11'
  },
  {
    id: 'f_11_c6',
    level: 'Class 11',
    subject: 'Chemistry',
    topic: 'Redox Reactions',
    plainExplanation: 'Oxidation (loss of electrons) vs Reduction (gain of electrons) and balancing redox equations.',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'redox reactions oxidation numbers class 11 chemistry'
  },

  // Class 11 - Maths
  {
    id: 'f_11_m1',
    level: 'Class 11',
    subject: 'Maths',
    topic: 'Sets, Relations and Functions',
    plainExplanation: 'Domain, range, mappings, and basic set theory operations (union, intersection).',
    feedsInto: ['CS13003', 'EC10005'],
    youtubeSearchQuery: 'sets relations functions class 11 maths'
  },
  {
    id: 'f_11_m2',
    level: 'Class 11',
    subject: 'Maths',
    topic: 'Trigonometric Functions',
    plainExplanation: 'Trig graphs, compound angle formulas, and inverse trig functions.',
    feedsInto: ['MA11009', 'MA11011', 'PH10005', 'EE10002'],
    youtubeSearchQuery: 'trigonometric functions formulas class 11 maths'
  },
  {
    id: 'f_11_m3',
    level: 'Class 11',
    subject: 'Maths',
    topic: 'Complex Numbers',
    plainExplanation: 'Real and imaginary numbers (i = √-1), Argand plane, and Euler’s formula (e^iθ).',
    feedsInto: ['MA11011', 'EE10002'],
    youtubeSearchQuery: 'complex numbers basics class 11 maths'
  },
  {
    id: 'f_11_m4',
    level: 'Class 11',
    subject: 'Maths',
    topic: 'Permutations, Combinations & Binomial Theorem',
    plainExplanation: 'Arranging items (nPr), choosing groups (nCr), and expanding powers of sums (a + b)ⁿ.',
    feedsInto: ['MA10013', 'CS13003'],
    youtubeSearchQuery: 'permutations combinations binomial theorem class 11 maths'
  },
  {
    id: 'f_11_m5',
    level: 'Class 11',
    subject: 'Maths',
    topic: 'Sequences and Series',
    plainExplanation: 'Arithmetic Progressions (AP), Geometric Progressions (GP), and infinite series sums.',
    feedsInto: ['MA11009', 'MA11011'],
    youtubeSearchQuery: 'sequences and series AP GP class 11 maths'
  },
  {
    id: 'f_11_m6',
    level: 'Class 11',
    subject: 'Maths',
    topic: 'Straight Lines & Conic Sections (coordinate geometry)',
    plainExplanation: 'Slope of lines, circles, parabolas, ellipses, and hyperbolas on 2D axes.',
    feedsInto: ['CE18003', 'MA11009'],
    youtubeSearchQuery: 'straight lines conic sections class 11 maths'
  },
  {
    id: 'f_11_m7',
    level: 'Class 11',
    subject: 'Maths',
    topic: 'Limits and Derivatives (intro calculus)',
    plainExplanation: 'What happens as x approaches a value (limits) and measuring instantaneous rates of change (derivatives).',
    isCriticalPrerequisite: true,
    feedsInto: ['MA11009'],
    youtubeSearchQuery: 'limits and derivatives intro calculus class 11 maths 3blue1brown'
  },
  {
    id: 'f_11_m8',
    level: 'Class 11',
    subject: 'Maths',
    topic: 'Statistics & Probability',
    plainExplanation: 'Mean, variance, standard deviation, and basic probability calculations.',
    feedsInto: ['MA11009', 'CS13003'],
    youtubeSearchQuery: 'statistics and probability class 11 maths'
  },

  // Class 12 - Physics
  {
    id: 'f_12_p1',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Electrostatics',
    plainExplanation: 'Coulomb’s law, electric fields, potential difference, and capacitors.',
    feedsInto: ['EE10002', 'PH10005'],
    youtubeSearchQuery: 'electrostatics electric field potential class 12 physics wallah'
  },
  {
    id: 'f_12_p2',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Current Electricity',
    plainExplanation: 'Drift velocity, Kirchhoff’s voltage & current laws, Wheatstone bridge, and potentiometer.',
    isCriticalPrerequisite: true,
    feedsInto: ['EE10002'],
    youtubeSearchQuery: 'current electricity kirchhoffs laws class 12 physics wallah'
  },
  {
    id: 'f_12_p3',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Magnetic Effects of Current & Magnetism',
    plainExplanation: 'Biot-Savart law, Ampere’s circuital law, magnetic torque, and magnetic materials.',
    feedsInto: ['EE10002'],
    youtubeSearchQuery: 'magnetic effects of current class 12 physics wallah'
  },
  {
    id: 'f_12_p4',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Electromagnetic Induction & Alternating Current',
    plainExplanation: 'Faraday’s law, Lenz’s law, AC RMS current, impedance in RLC circuits, and transformers.',
    isCriticalPrerequisite: true,
    feedsInto: ['EE10002'],
    youtubeSearchQuery: 'electromagnetic induction alternating current class 12 physics wallah'
  },
  {
    id: 'f_12_p5',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Electromagnetic Waves',
    plainExplanation: 'Displacement current, Maxwell’s equations, and the EM spectrum (radio to gamma).',
    feedsInto: ['PH10005'],
    youtubeSearchQuery: 'electromagnetic waves class 12 physics wallah'
  },
  {
    id: 'f_12_p6',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Ray Optics and Wave Optics',
    plainExplanation: 'Lenses/microscopes (ray) and Huygens principle, Young’s double slit interference, diffraction (wave).',
    isCriticalPrerequisite: true,
    feedsInto: ['PH10005'],
    youtubeSearchQuery: 'wave optics youngs double slit class 12 physics wallah'
  },
  {
    id: 'f_12_p7',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Dual Nature of Radiation and Matter',
    plainExplanation: 'Photoelectric effect, Einstein’s equation, and de Broglie matter wavelength.',
    feedsInto: ['PH10005'],
    youtubeSearchQuery: 'dual nature photoelectric effect class 12 physics wallah'
  },
  {
    id: 'f_12_p8',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Atoms and Nuclei',
    plainExplanation: 'Alpha scattering, Bohr hydrogen spectrum, nuclear binding energy, and radioactivity.',
    feedsInto: ['PH10005'],
    youtubeSearchQuery: 'atoms and nuclei class 12 physics wallah'
  },
  {
    id: 'f_12_p9',
    level: 'Class 12',
    subject: 'Physics',
    topic: 'Semiconductor Electronics: Materials, Devices and Simple Circuits',
    plainExplanation: 'P-N junction diode, rectifiers, transistors, and basic logic gates (AND, OR, NOT).',
    isCriticalPrerequisite: true,
    feedsInto: ['EC10005', 'PH10005'],
    youtubeSearchQuery: 'semiconductor electronics pn junction class 12 physics wallah'
  },

  // Class 12 - Chemistry
  {
    id: 'f_12_c1',
    level: 'Class 12',
    subject: 'Chemistry',
    topic: 'Solutions',
    plainExplanation: 'Molarity, Molality, Raoult’s Law, and colligative properties.',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'solutions colligative properties class 12 chemistry'
  },
  {
    id: 'f_12_c2',
    level: 'Class 12',
    subject: 'Chemistry',
    topic: 'Electrochemistry',
    plainExplanation: 'Nernst equation, galvanic cells, electrolytic conductance, and battery chemistry.',
    isCriticalPrerequisite: true,
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'electrochemistry nernst equation class 12 chemistry'
  },
  {
    id: 'f_12_c3',
    level: 'Class 12',
    subject: 'Chemistry',
    topic: 'Chemical Kinetics',
    plainExplanation: 'Rate law, order of reaction (0th, 1st), half-life, and Arrhenius activation energy.',
    isCriticalPrerequisite: true,
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'chemical kinetics rate law class 12 chemistry'
  },
  {
    id: 'f_12_c4',
    level: 'Class 12',
    subject: 'Chemistry',
    topic: 'Surface Chemistry (catalysis basics)',
    plainExplanation: 'Adsorption vs absorption, catalysts, and colloidal state.',
    feedsInto: ['CH10009'],
    youtubeSearchQuery: 'surface chemistry adsorption class 12 chemistry'
  },

  // Class 12 - Maths
  {
    id: 'f_12_m1',
    level: 'Class 12',
    subject: 'Maths',
    topic: 'Matrices and Determinants',
    plainExplanation: 'Adding, multiplying grids of numbers (matrices), finding determinants, and matrix inverses.',
    isCriticalPrerequisite: true,
    feedsInto: ['MA11011'],
    youtubeSearchQuery: 'matrices and determinants class 12 maths 3blue1brown'
  },
  {
    id: 'f_12_m2',
    level: 'Class 12',
    subject: 'Maths',
    topic: 'Continuity and Differentiability',
    plainExplanation: 'Checking if a curve has breaks (continuity) and taking derivatives using chain rule.',
    isCriticalPrerequisite: true,
    feedsInto: ['MA11009'],
    youtubeSearchQuery: 'continuity and differentiability class 12 maths'
  },
  {
    id: 'f_12_m3',
    level: 'Class 12',
    subject: 'Maths',
    topic: 'Applications of Derivatives (maxima/minima)',
    plainExplanation: 'Finding highest and lowest points on a function curve using dy/dx = 0.',
    feedsInto: ['MA11009'],
    youtubeSearchQuery: 'maxima and minima applications of derivatives class 12 maths'
  },
  {
    id: 'f_12_m4',
    level: 'Class 12',
    subject: 'Maths',
    topic: 'Integrals',
    plainExplanation: 'Indefinite & definite integration (finding area under curves) using substitution and parts.',
    isCriticalPrerequisite: true,
    feedsInto: ['MA11009'],
    youtubeSearchQuery: 'integration basics class 12 maths 3blue1brown'
  },
  {
    id: 'f_12_m5',
    level: 'Class 12',
    subject: 'Maths',
    topic: 'Differential Equations',
    plainExplanation: 'Equations containing dy/dx terms — order, degree, and variable separable method.',
    isCriticalPrerequisite: true,
    feedsInto: ['MA11009'],
    youtubeSearchQuery: 'differential equations class 12 maths 3blue1brown'
  },
  {
    id: 'f_12_m6',
    level: 'Class 12',
    subject: 'Maths',
    topic: 'Vector Algebra',
    plainExplanation: 'Dot product (scalar) and Cross product (vector) in 3D coordinates.',
    feedsInto: ['MA11011', 'PH10005'],
    youtubeSearchQuery: 'vector algebra dot cross product class 12 maths 3blue1brown'
  },
  {
    id: 'f_12_m7',
    level: 'Class 12',
    subject: 'Maths',
    topic: 'Three Dimensional Geometry',
    plainExplanation: 'Direction cosines, equations of lines, and planes in 3D space.',
    feedsInto: ['MA11011'],
    youtubeSearchQuery: '3d geometry class 12 maths'
  }
];
