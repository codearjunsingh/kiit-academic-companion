export interface FoundationTopic {
  id: string;
  subject: 'Maths' | 'Physics' | 'Chemistry' | 'English' | 'General Knowledge';
  classLevel: 'Class 6' | 'Class 7' | 'Class 8' | 'Class 9' | 'Class 10' | 'Class 11' | 'Class 12';
  title: string;
  simpleAnalogy: string;
  plainAnalogy?: string;
  whyNeeded: string;
  kiitSubjectLink: string;
  feedsIntoCollege?: string;
  youtubeSearchQuery?: string;
  order?: number;
  prerequisites?: string[];
}

export type FoundationZeroTopic = FoundationTopic;

export const FOUNDATION_ZERO_TOPICS: FoundationTopic[] = [
  // CLASS 6 - 8 MATHS
  {
    id: 'f_m_6_1',
    subject: 'Maths',
    classLevel: 'Class 6',
    title: 'Knowing Our Numbers, Whole Numbers & Integers',
    simpleAnalogy: 'Numbers are building blocks. Positive integers are steps forward; negative integers are steps backward.',
    plainAnalogy: 'Numbers are building blocks. Positive integers are steps forward; negative integers are steps backward.',
    whyNeeded: 'Essential for basic counting, array indexing in C, and loop bounds.',
    kiitSubjectLink: 'C Programming & Discrete Math',
    feedsIntoCollege: 'C Programming & Discrete Math',
    youtubeSearchQuery: 'class 6 integers maths basics',
    order: 1,
    prerequisites: []
  },
  {
    id: 'f_m_6_2',
    subject: 'Maths',
    classLevel: 'Class 6',
    title: 'Fractions and Decimals',
    simpleAnalogy: 'Fractions are slices of a pizza. Decimals are the exact percentage of the pizza left.',
    plainAnalogy: 'Fractions are slices of a pizza. Decimals are the exact percentage of the pizza left.',
    whyNeeded: 'Crucial for floating-point math, probability, and numerical calculus.',
    kiitSubjectLink: 'Probability & Numerical Analysis',
    feedsIntoCollege: 'Probability & Numerical Analysis',
    youtubeSearchQuery: 'class 6 fractions and decimals',
    order: 2,
    prerequisites: ['f_m_6_1']
  },
  {
    id: 'f_m_7_1',
    subject: 'Maths',
    classLevel: 'Class 7',
    title: 'Algebraic Expressions & Simple Equations',
    simpleAnalogy: 'Variables are empty boxes waiting for a number value (x = 5).',
    plainAnalogy: 'Variables are empty boxes waiting for a number value (x = 5).',
    whyNeeded: 'Foundation of algebra, C variables, and equation solving.',
    kiitSubjectLink: 'C Variables & Differential Equations',
    feedsIntoCollege: 'C Variables & Differential Equations',
    youtubeSearchQuery: 'class 7 algebraic expressions',
    order: 3,
    prerequisites: ['f_m_6_2']
  },
  {
    id: 'f_m_8_1',
    subject: 'Maths',
    classLevel: 'Class 8',
    title: 'Exponents, Powers & Factorisation',
    simpleAnalogy: 'Exponents are compounding multipliers (2^4 = 2x2x2x2).',
    plainAnalogy: 'Exponents are compounding multipliers (2^4 = 2x2x2x2).',
    whyNeeded: 'Crucial for time complexity O(2^n), binary math, and logarithms.',
    kiitSubjectLink: 'Data Structures & Algorithms',
    feedsIntoCollege: 'Data Structures & Algorithms',
    youtubeSearchQuery: 'class 8 exponents and powers',
    order: 4,
    prerequisites: ['f_m_7_1']
  },

  // CLASS 9 - 10 MATHS
  {
    id: 'f_m_9_1',
    subject: 'Maths',
    classLevel: 'Class 9',
    title: 'Coordinate Geometry & Linear Equations in Two Variables',
    simpleAnalogy: 'Plotting points (x, y) on a 2D map to draw straight lines.',
    plainAnalogy: 'Plotting points (x, y) on a 2D map to draw straight lines.',
    whyNeeded: 'Essential for computer graphics, 2D plotting, and linear systems.',
    kiitSubjectLink: 'Linear Algebra & Computer Graphics',
    feedsIntoCollege: 'Linear Algebra & Computer Graphics',
    youtubeSearchQuery: 'class 9 coordinate geometry',
    order: 5,
    prerequisites: ['f_m_8_1']
  },
  {
    id: 'f_m_9_2',
    subject: 'Maths',
    classLevel: 'Class 9',
    title: 'Polynomials & Factor Theorem',
    simpleAnalogy: 'Breaking a complex expression like x^2 + 5x + 6 into simple factors (x+2)(x+3).',
    plainAnalogy: 'Breaking a complex expression like x^2 + 5x + 6 into simple factors (x+2)(x+3).',
    whyNeeded: 'Required for characteristic equations in eigenvalues.',
    kiitSubjectLink: 'Linear Algebra MA11011',
    feedsIntoCollege: 'Linear Algebra MA11011',
    youtubeSearchQuery: 'class 9 polynomials factor theorem',
    order: 6,
    prerequisites: ['f_m_9_1']
  },
  {
    id: 'f_m_10_1',
    subject: 'Maths',
    classLevel: 'Class 10',
    title: 'Quadratic Equations & Arithmetic Progressions',
    simpleAnalogy: 'Parabolic trajectories and fixed step-by-step sequences (1, 3, 5, 7...).',
    plainAnalogy: 'Parabolic trajectories and fixed step-by-step sequences (1, 3, 5, 7...).',
    whyNeeded: 'Loop iterations, series convergence, and algorithmic analysis.',
    kiitSubjectLink: 'Algorithms & Discrete Math',
    feedsIntoCollege: 'Algorithms & Discrete Math',
    youtubeSearchQuery: 'class 10 quadratic equations AP',
    order: 7,
    prerequisites: ['f_m_9_2']
  },
  {
    id: 'f_m_10_2',
    subject: 'Maths',
    classLevel: 'Class 10',
    title: 'Introduction to Trigonometry & Applications',
    simpleAnalogy: 'Sin, Cos, and Tan are ratio relationships of right-angled triangles.',
    plainAnalogy: 'Sin, Cos, and Tan are ratio relationships of right-angled triangles.',
    whyNeeded: 'Crucial for AC circuits, Fourier analysis, and signal processing.',
    kiitSubjectLink: 'Basic Electrical & Fourier Analysis',
    feedsIntoCollege: 'Basic Electrical & Fourier Analysis',
    youtubeSearchQuery: 'class 10 trigonometry basics',
    order: 8,
    prerequisites: ['f_m_10_1']
  },

  // CLASS 11 - 12 MATHS
  {
    id: 'f_m_11_1',
    subject: 'Maths',
    classLevel: 'Class 11',
    title: 'Sets, Relations and Functions',
    simpleAnalogy: 'A function is a machine: put in input x, get unique output f(x).',
    plainAnalogy: 'A function is a machine: put in input x, get unique output f(x).',
    whyNeeded: 'Direct prerequisite for Differential Calculus (MA11009).',
    kiitSubjectLink: 'Calculus MA11009 & Automata CS21003',
    feedsIntoCollege: 'Calculus MA11009 & Automata CS21003',
    youtubeSearchQuery: 'class 11 sets relations and functions',
    order: 9,
    prerequisites: ['f_m_10_2']
  },
  {
    id: 'f_m_11_2',
    subject: 'Maths',
    classLevel: 'Class 11',
    title: 'Limits and Derivatives (Class 11 Foundation)',
    simpleAnalogy: 'Limit is approaching a wall infinitely close without touching it.',
    plainAnalogy: 'Limit is approaching a wall infinitely close without touching it.',
    whyNeeded: 'Core foundation for university Calculus.',
    kiitSubjectLink: 'Calculus MA11009',
    feedsIntoCollege: 'Calculus MA11009',
    youtubeSearchQuery: 'class 11 limits and derivatives',
    order: 10,
    prerequisites: ['f_m_11_1']
  },
  {
    id: 'f_m_12_1',
    subject: 'Maths',
    classLevel: 'Class 12',
    title: 'Matrices and Determinants',
    simpleAnalogy: 'Grids of numbers multiplied row-by-column to scale and rotate vectors.',
    plainAnalogy: 'Grids of numbers multiplied row-by-column to scale and rotate vectors.',
    whyNeeded: 'Foundation for Linear Algebra (MA11011) and Neural Networks.',
    kiitSubjectLink: 'Linear Algebra & Machine Learning',
    feedsIntoCollege: 'Linear Algebra & Machine Learning',
    youtubeSearchQuery: 'class 12 matrices and determinants',
    order: 11,
    prerequisites: ['f_m_11_2']
  },
  {
    id: 'f_m_12_2',
    subject: 'Maths',
    classLevel: 'Class 12',
    title: 'Continuity, Differentiability & Applications of Derivatives',
    simpleAnalogy: 'Finding tangent slopes, rate of change, and maximum/minimum points.',
    plainAnalogy: 'Finding tangent slopes, rate of change, and maximum/minimum points.',
    whyNeeded: 'Taylor series, ODEs, and Gradient Descent in AI.',
    kiitSubjectLink: 'Calculus MA11009 & Machine Learning',
    feedsIntoCollege: 'Calculus MA11009 & Machine Learning',
    youtubeSearchQuery: 'class 12 continuity and differentiability',
    order: 12,
    prerequisites: ['f_m_12_1']
  },
  {
    id: 'f_m_12_3',
    subject: 'Maths',
    classLevel: 'Class 12',
    title: 'Integrals & Differential Equations',
    simpleAnalogy: 'Integration calculates total area under a curve by summing tiny strips.',
    plainAnalogy: 'Integration calculates total area under a curve by summing tiny strips.',
    whyNeeded: 'First & Second Order Differential Equations in KIIT Math.',
    kiitSubjectLink: 'Calculus MA11009',
    feedsIntoCollege: 'Calculus MA11009',
    youtubeSearchQuery: 'class 12 integrals and differential equations',
    order: 13,
    prerequisites: ['f_m_12_2']
  },
  {
    id: 'f_m_12_4',
    subject: 'Maths',
    classLevel: 'Class 12',
    title: 'Vector Algebra & 3D Geometry',
    simpleAnalogy: 'Arrows having magnitude and direction in 3D space (x, y, z).',
    plainAnalogy: 'Arrows having magnitude and direction in 3D space (x, y, z).',
    whyNeeded: 'Vector spaces, dot/cross products, and computer graphics.',
    kiitSubjectLink: 'Linear Algebra MA11011',
    feedsIntoCollege: 'Linear Algebra MA11011',
    youtubeSearchQuery: 'class 12 vector algebra 3d geometry',
    order: 14,
    prerequisites: ['f_m_12_3']
  },

  // PHYSICS (CLASS 11 & 12)
  {
    id: 'f_p_11_1',
    subject: 'Physics',
    classLevel: 'Class 11',
    title: 'Units, Dimensions, Vectors & Kinematics',
    simpleAnalogy: 'Measuring physical quantities with units and velocity vectors.',
    plainAnalogy: 'Measuring physical quantities with units and velocity vectors.',
    whyNeeded: 'Physics lab measurements and error calculations.',
    kiitSubjectLink: 'Physics PH10005',
    feedsIntoCollege: 'Physics PH10005',
    youtubeSearchQuery: 'class 11 units dimensions vectors kinematics',
    order: 15,
    prerequisites: []
  },
  {
    id: 'f_p_11_2',
    subject: 'Physics',
    classLevel: 'Class 11',
    title: 'Oscillations and Simple Harmonic Motion (SHM)',
    simpleAnalogy: 'Pendulum swinging back and forth around equilibrium point.',
    plainAnalogy: 'Pendulum swinging back and forth around equilibrium point.',
    whyNeeded: 'Damped and forced oscillations in Engineering Physics.',
    kiitSubjectLink: 'Physics PH10005 Unit 1',
    feedsIntoCollege: 'Physics PH10005 Unit 1',
    youtubeSearchQuery: 'class 11 oscillations shm',
    order: 16,
    prerequisites: ['f_p_11_1']
  },
  {
    id: 'f_p_12_1',
    subject: 'Physics',
    classLevel: 'Class 12',
    title: 'Wave Optics: Interference & Diffraction',
    simpleAnalogy: 'Light waves overlapping to form bright and dark fringes.',
    plainAnalogy: 'Light waves overlapping to form bright and dark fringes.',
    whyNeeded: 'Newtons Rings and Diffraction Grating in Physics Unit 1-4.',
    kiitSubjectLink: 'Physics PH10005',
    feedsIntoCollege: 'Physics PH10005',
    youtubeSearchQuery: 'class 12 wave optics interference diffraction',
    order: 17,
    prerequisites: ['f_p_11_2']
  },
  {
    id: 'f_p_12_2',
    subject: 'Physics',
    classLevel: 'Class 12',
    title: 'Dual Nature of Radiation, Matter & Quantum Physics',
    simpleAnalogy: 'Light behaves both as a continuous wave and discrete photon particles.',
    plainAnalogy: 'Light behaves both as a continuous wave and discrete photon particles.',
    whyNeeded: 'Schrodinger equation and quantum mechanics in Engineering Physics.',
    kiitSubjectLink: 'Physics PH10005 Unit 5',
    feedsIntoCollege: 'Physics PH10005 Unit 5',
    youtubeSearchQuery: 'class 12 quantum physics photoelectric effect',
    order: 18,
    prerequisites: ['f_p_12_1']
  },
  {
    id: 'f_p_12_3',
    subject: 'Physics',
    classLevel: 'Class 12',
    title: 'Semiconductor Electronics: p-n Junction & Transistors',
    simpleAnalogy: 'One-way electronic valves that control current flow.',
    plainAnalogy: 'One-way electronic valves that control current flow.',
    whyNeeded: 'Basic Electronics EC10005 & Digital Logic.',
    kiitSubjectLink: 'Basic Electronics EC10005',
    feedsIntoCollege: 'Basic Electronics EC10005',
    youtubeSearchQuery: 'class 12 semiconductor electronics',
    order: 19,
    prerequisites: ['f_p_12_2']
  },

  // CHEMISTRY (CLASS 11 & 12)
  {
    id: 'f_c_11_1',
    subject: 'Chemistry',
    classLevel: 'Class 11',
    title: 'Chemical Thermodynamics & Energetics',
    simpleAnalogy: 'Heat absorption and release during chemical reactions.',
    plainAnalogy: 'Heat absorption and release during chemical reactions.',
    whyNeeded: 'Gibbs Free Energy and Phase Equilibria in Engineering Chemistry.',
    kiitSubjectLink: 'Chemistry CH10009 Unit 1',
    feedsIntoCollege: 'Chemistry CH10009 Unit 1',
    youtubeSearchQuery: 'class 11 chemical thermodynamics',
    order: 20,
    prerequisites: []
  },
  {
    id: 'f_c_12_1',
    subject: 'Chemistry',
    classLevel: 'Class 12',
    title: 'Electrochemistry & Chemical Kinetics',
    simpleAnalogy: 'Chemical reactions generating electrical voltage in batteries.',
    plainAnalogy: 'Chemical reactions generating electrical voltage in batteries.',
    whyNeeded: 'Batteries, Fuel Cells & Rate Laws in Engineering Chemistry.',
    kiitSubjectLink: 'Chemistry CH10009 Unit 2 & 3',
    feedsIntoCollege: 'Chemistry CH10009 Unit 2 & 3',
    youtubeSearchQuery: 'class 12 electrochemistry kinetics',
    order: 21,
    prerequisites: ['f_c_11_1']
  },

  // ENGLISH & GENERAL KNOWLEDGE
  {
    id: 'f_e_10_1',
    subject: 'English',
    classLevel: 'Class 10',
    title: 'Tenses, Active/Passive Voice & Subject-Verb Agreement',
    simpleAnalogy: 'Grammar rules that ensure sentences sound natural and clear.',
    plainAnalogy: 'Grammar rules that ensure sentences sound natural and clear.',
    whyNeeded: 'Technical communication, report writing, and email writing.',
    kiitSubjectLink: 'English Communication HS10003',
    feedsIntoCollege: 'English Communication HS10003',
    youtubeSearchQuery: 'class 10 english grammar tenses voice',
    order: 22,
    prerequisites: []
  },
  {
    id: 'f_gk_10_1',
    subject: 'General Knowledge',
    classLevel: 'Class 10',
    title: 'Indian Constitution, Fundamental Rights & Civics',
    simpleAnalogy: 'The supreme rulebook governing rights and duties in India.',
    plainAnalogy: 'The supreme rulebook governing rights and duties in India.',
    whyNeeded: 'Universal Human Values and social awareness.',
    kiitSubjectLink: 'Universal Human Values ID10003',
    feedsIntoCollege: 'Universal Human Values ID10003',
    youtubeSearchQuery: 'class 10 civics indian constitution fundamental rights',
    order: 23,
    prerequisites: []
  }
];
