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
  // ==========================================
  // MATHEMATICS (CLASS 6 TO 12)
  // ==========================================
  // Class 6 Maths
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
    title: 'Fractions, Decimals & Percentages',
    simpleAnalogy: 'Fractions are slices of a pizza. Decimals are exact remaining values.',
    plainAnalogy: 'Fractions are slices of a pizza. Decimals are exact remaining values.',
    whyNeeded: 'Crucial for floating-point math, probability, and numerical calculus.',
    kiitSubjectLink: 'Probability & Numerical Analysis',
    feedsIntoCollege: 'Probability & Numerical Analysis',
    youtubeSearchQuery: 'class 6 fractions and decimals',
    order: 2,
    prerequisites: ['f_m_6_1']
  },
  // Class 7 Maths
  {
    id: 'f_m_7_1',
    subject: 'Maths',
    classLevel: 'Class 7',
    title: 'Algebraic Expressions & Simple Equations',
    simpleAnalogy: 'Variables are labeled empty boxes waiting for a numeric value (x = 5).',
    plainAnalogy: 'Variables are labeled empty boxes waiting for a numeric value (x = 5).',
    whyNeeded: 'Foundation of algebra, C variables, and equation solving.',
    kiitSubjectLink: 'C Variables & Differential Equations',
    feedsIntoCollege: 'C Variables & Differential Equations',
    youtubeSearchQuery: 'class 7 algebraic expressions',
    order: 3,
    prerequisites: ['f_m_6_2']
  },
  {
    id: 'f_m_7_2',
    subject: 'Maths',
    classLevel: 'Class 7',
    title: 'Ratios, Proportions & Unitary Method',
    simpleAnalogy: 'Scaling a cooking recipe up or down depending on number of guests.',
    plainAnalogy: 'Scaling a cooking recipe up or down depending on number of guests.',
    whyNeeded: 'Used in algorithm complexity scaling and signal gain ratios.',
    kiitSubjectLink: 'Basic Electrical & Data Structures',
    feedsIntoCollege: 'Basic Electrical & Data Structures',
    youtubeSearchQuery: 'class 7 ratio and proportion',
    order: 4,
    prerequisites: ['f_m_7_1']
  },
  // Class 8 Maths
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
    order: 5,
    prerequisites: ['f_m_7_2']
  },
  {
    id: 'f_m_8_2',
    subject: 'Maths',
    classLevel: 'Class 8',
    title: 'Linear Equations in One Variable & Graphing',
    simpleAnalogy: 'Solving a balance scale problem to find the single unknown weight.',
    plainAnalogy: 'Solving a balance scale problem to find the single unknown weight.',
    whyNeeded: 'Core algebra for circuit loop equations & dynamic programming.',
    kiitSubjectLink: 'Basic Electrical & DAA',
    feedsIntoCollege: 'Basic Electrical & DAA',
    youtubeSearchQuery: 'class 8 linear equations in one variable',
    order: 6,
    prerequisites: ['f_m_8_1']
  },
  // Class 9 Maths
  {
    id: 'f_m_9_1',
    subject: 'Maths',
    classLevel: 'Class 9',
    title: 'Coordinate Geometry & Linear Equations in Two Variables',
    simpleAnalogy: 'Plotting points (x, y) on a GPS map to draw straight line routes.',
    plainAnalogy: 'Plotting points (x, y) on a GPS map to draw straight line routes.',
    whyNeeded: 'Essential for computer graphics, 2D plotting, and linear systems.',
    kiitSubjectLink: 'Linear Algebra & Computer Graphics',
    feedsIntoCollege: 'Linear Algebra & Computer Graphics',
    youtubeSearchQuery: 'class 9 coordinate geometry',
    order: 7,
    prerequisites: ['f_m_8_2']
  },
  {
    id: 'f_m_9_2',
    subject: 'Maths',
    classLevel: 'Class 9',
    title: 'Polynomials, Remainder & Factor Theorems',
    simpleAnalogy: 'Breaking a complex expression like x^2 + 5x + 6 into simple factors (x+2)(x+3).',
    plainAnalogy: 'Breaking a complex expression like x^2 + 5x + 6 into simple factors (x+2)(x+3).',
    whyNeeded: 'Required for characteristic equations in eigenvalues.',
    kiitSubjectLink: 'Linear Algebra MA11011',
    feedsIntoCollege: 'Linear Algebra MA11011',
    youtubeSearchQuery: 'class 9 polynomials factor theorem',
    order: 8,
    prerequisites: ['f_m_9_1']
  },
  // Class 10 Maths
  {
    id: 'f_m_10_1',
    subject: 'Maths',
    classLevel: 'Class 10',
    title: 'Quadratic Equations & Arithmetic Progressions (AP)',
    simpleAnalogy: 'Parabolic trajectories and fixed step-by-step sequences (1, 3, 5, 7...).',
    plainAnalogy: 'Parabolic trajectories and fixed step-by-step sequences (1, 3, 5, 7...).',
    whyNeeded: 'Loop iterations, series convergence, and algorithmic analysis.',
    kiitSubjectLink: 'Algorithms & Discrete Math',
    feedsIntoCollege: 'Algorithms & Discrete Math',
    youtubeSearchQuery: 'class 10 quadratic equations AP',
    order: 9,
    prerequisites: ['f_m_9_2']
  },
  {
    id: 'f_m_10_2',
    subject: 'Maths',
    classLevel: 'Class 10',
    title: 'Introduction to Trigonometry & Heights/Distances',
    simpleAnalogy: 'Sin, Cos, and Tan are ratio relationships of right-angled triangles.',
    plainAnalogy: 'Sin, Cos, and Tan are ratio relationships of right-angled triangles.',
    whyNeeded: 'Crucial for AC circuits, Fourier analysis, and signal processing.',
    kiitSubjectLink: 'Basic Electrical & Fourier Analysis',
    feedsIntoCollege: 'Basic Electrical & Fourier Analysis',
    youtubeSearchQuery: 'class 10 trigonometry basics',
    order: 10,
    prerequisites: ['f_m_10_1']
  },
  // Class 11 Maths
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
    order: 11,
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
    order: 12,
    prerequisites: ['f_m_11_1']
  },
  // Class 12 Maths
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
    order: 13,
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
    order: 14,
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
    order: 15,
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
    order: 16,
    prerequisites: ['f_m_12_3']
  },

  // ==========================================
  // PHYSICS (CLASS 6 TO 12)
  // ==========================================
  {
    id: 'f_p_6_1',
    subject: 'Physics',
    classLevel: 'Class 6',
    title: 'Motion, Distance Measurements & Light Shadows',
    simpleAnalogy: 'Measuring how far a toy car rolls and how light casts opaque shadows.',
    plainAnalogy: 'Measuring how far a toy car rolls and how light casts opaque shadows.',
    whyNeeded: 'Basics of physical units, measurement error, and optics.',
    kiitSubjectLink: 'Physics PH10005',
    feedsIntoCollege: 'Physics PH10005',
    youtubeSearchQuery: 'class 6 motion and measurement of distances',
    order: 17,
    prerequisites: []
  },
  {
    id: 'f_p_7_1',
    subject: 'Physics',
    classLevel: 'Class 7',
    title: 'Heat, Temperature & Electric Current Effects',
    simpleAnalogy: 'Heat flows from hot objects to cold objects like water flowing downhill.',
    plainAnalogy: 'Heat flows from hot objects to cold objects like water flowing downhill.',
    whyNeeded: 'Thermodynamics & Basic Electrical circuit heat loss (I^2*R).',
    kiitSubjectLink: 'Basic Electrical & Physics',
    feedsIntoCollege: 'Basic Electrical & Physics',
    youtubeSearchQuery: 'class 7 heat and electric current',
    order: 18,
    prerequisites: ['f_p_6_1']
  },
  {
    id: 'f_p_8_1',
    subject: 'Physics',
    classLevel: 'Class 8',
    title: 'Force, Pressure, Friction & Sound Waves',
    simpleAnalogy: 'Friction is grip between surfaces; pressure is force applied over an area.',
    plainAnalogy: 'Friction is grip between surfaces; pressure is force applied over an area.',
    whyNeeded: 'Fundamental mechanical forces & wave motion principles.',
    kiitSubjectLink: 'Physics & Workshop Practice',
    feedsIntoCollege: 'Physics & Workshop Practice',
    youtubeSearchQuery: 'class 8 force and pressure friction',
    order: 19,
    prerequisites: ['f_p_7_1']
  },
  {
    id: 'f_p_9_1',
    subject: 'Physics',
    classLevel: 'Class 9',
    title: 'Equations of Motion, Newton Laws & Gravitation',
    simpleAnalogy: 'Newton laws explain why seatbelts stop you when a car brakes (Inertia).',
    plainAnalogy: 'Newton laws explain why seatbelts stop you when a car brakes (Inertia).',
    whyNeeded: 'Kinematics and vector forces in physics labs.',
    kiitSubjectLink: 'Physics PH10005',
    feedsIntoCollege: 'Physics PH10005',
    youtubeSearchQuery: 'class 9 motion newton laws gravitation',
    order: 20,
    prerequisites: ['f_p_8_1']
  },
  {
    id: 'f_p_10_1',
    subject: 'Physics',
    classLevel: 'Class 10',
    title: 'Light Reflection, Refraction, Lenses & Electricity (Ohm Law)',
    simpleAnalogy: 'Ohm law (V = I*R) is like water pressure (V) pushing water flow (I) through a narrow pipe (R).',
    plainAnalogy: 'Ohm law (V = I*R) is like water pressure (V) pushing water flow (I) through a narrow pipe (R).',
    whyNeeded: 'Prerequisite for Basic Electrical (EE10002) and Basic Electronics (EC10005).',
    kiitSubjectLink: 'Basic Electrical & Basic Electronics',
    feedsIntoCollege: 'Basic Electrical & Basic Electronics',
    youtubeSearchQuery: 'class 10 electricity ohm law light refraction',
    order: 21,
    prerequisites: ['f_p_9_1']
  },
  {
    id: 'f_p_11_1',
    subject: 'Physics',
    classLevel: 'Class 11',
    title: 'Units, Dimensions, Vectors & Kinematics (Class 11)',
    simpleAnalogy: 'Measuring physical quantities with units and velocity vectors.',
    plainAnalogy: 'Measuring physical quantities with units and velocity vectors.',
    whyNeeded: 'Physics lab measurements and vector calculus in Maxwell equations.',
    kiitSubjectLink: 'Physics PH10005 Unit 2',
    feedsIntoCollege: 'Physics PH10005 Unit 2',
    youtubeSearchQuery: 'class 11 units dimensions vectors kinematics',
    order: 22,
    prerequisites: ['f_p_10_1']
  },
  {
    id: 'f_p_11_2',
    subject: 'Physics',
    classLevel: 'Class 11',
    title: 'Oscillations and Simple Harmonic Motion (SHM)',
    simpleAnalogy: 'Pendulum swinging back and forth around an equilibrium point.',
    plainAnalogy: 'Pendulum swinging back and forth around an equilibrium point.',
    whyNeeded: 'Damped and forced oscillations in Engineering Physics Unit 1.',
    kiitSubjectLink: 'Physics PH10005 Unit 1',
    feedsIntoCollege: 'Physics PH10005 Unit 1',
    youtubeSearchQuery: 'class 11 oscillations shm',
    order: 23,
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
    kiitSubjectLink: 'Physics PH10005 Unit 1',
    feedsIntoCollege: 'Physics PH10005 Unit 1',
    youtubeSearchQuery: 'class 12 wave optics interference diffraction',
    order: 24,
    prerequisites: ['f_p_11_2']
  },
  {
    id: 'f_p_12_2',
    subject: 'Physics',
    classLevel: 'Class 12',
    title: 'Dual Nature of Radiation, Quantum Physics & Laser Basics',
    simpleAnalogy: 'Light behaves both as a continuous wave and discrete photon particles.',
    plainAnalogy: 'Light behaves both as a continuous wave and discrete photon particles.',
    whyNeeded: 'Schrodinger equation and quantum mechanics in Engineering Physics.',
    kiitSubjectLink: 'Physics PH10005 Unit 3',
    feedsIntoCollege: 'Physics PH10005 Unit 3',
    youtubeSearchQuery: 'class 12 quantum physics photoelectric effect',
    order: 25,
    prerequisites: ['f_p_12_1']
  },
  {
    id: 'f_p_12_3',
    subject: 'Physics',
    classLevel: 'Class 12',
    title: 'Semiconductor Electronics: p-n Junction, Diodes & Transistors',
    simpleAnalogy: 'One-way electronic valves that control current flow.',
    plainAnalogy: 'One-way electronic valves that control current flow.',
    whyNeeded: 'Basic Electronics EC10005 & Digital Logic Systems.',
    kiitSubjectLink: 'Basic Electronics EC10005',
    feedsIntoCollege: 'Basic Electronics EC10005',
    youtubeSearchQuery: 'class 12 semiconductor electronics',
    order: 26,
    prerequisites: ['f_p_12_2']
  },

  // ==========================================
  // CHEMISTRY (CLASS 6 TO 12)
  // ==========================================
  {
    id: 'f_c_6_1',
    subject: 'Chemistry',
    classLevel: 'Class 6',
    title: 'States of Matter & Separating Substances',
    simpleAnalogy: 'Solids hold shape; liquids flow; gases expand to fill room.',
    plainAnalogy: 'Solids hold shape; liquids flow; gases expand to fill room.',
    whyNeeded: 'Basic material classification in engineering chemistry.',
    kiitSubjectLink: 'Chemistry CH10009',
    feedsIntoCollege: 'Chemistry CH10009',
    youtubeSearchQuery: 'class 6 states of matter separation',
    order: 27,
    prerequisites: []
  },
  {
    id: 'f_c_7_1',
    subject: 'Chemistry',
    classLevel: 'Class 7',
    title: 'Acids, Bases, Salts & Physical/Chemical Changes',
    simpleAnalogy: 'Sour lemon juice (Acid) vs bitter soap water (Base).',
    plainAnalogy: 'Sour lemon juice (Acid) vs bitter soap water (Base).',
    whyNeeded: 'pH values, titrations, and chemical reactions.',
    kiitSubjectLink: 'Chemistry CH10009',
    feedsIntoCollege: 'Chemistry CH10009',
    youtubeSearchQuery: 'class 7 acids bases salts',
    order: 28,
    prerequisites: ['f_c_6_1']
  },
  {
    id: 'f_c_8_1',
    subject: 'Chemistry',
    classLevel: 'Class 8',
    title: 'Metals, Non-Metals & Combustion',
    simpleAnalogy: 'Metals conduct electricity and heat; non-metals insulate.',
    plainAnalogy: 'Metals conduct electricity and heat; non-metals insulate.',
    whyNeeded: 'Corrosion, battery electrodes, and material science.',
    kiitSubjectLink: 'Chemistry & Basic Electrical',
    feedsIntoCollege: 'Chemistry & Basic Electrical',
    youtubeSearchQuery: 'class 8 metals and non metals',
    order: 29,
    prerequisites: ['f_c_7_1']
  },
  {
    id: 'f_c_9_1',
    subject: 'Chemistry',
    classLevel: 'Class 9',
    title: 'Atoms, Molecules, Atomic Mass & Chemical Formulas',
    simpleAnalogy: 'Atoms are LEGO bricks; molecules are built structures (H2O).',
    plainAnalogy: 'Atoms are LEGO bricks; molecules are built structures (H2O).',
    whyNeeded: 'Stoichiometric calculations in chemistry labs.',
    kiitSubjectLink: 'Chemistry CH10009',
    feedsIntoCollege: 'Chemistry CH10009',
    youtubeSearchQuery: 'class 9 atoms and molecules',
    order: 30,
    prerequisites: ['f_c_8_1']
  },
  {
    id: 'f_c_10_1',
    subject: 'Chemistry',
    classLevel: 'Class 10',
    title: 'Chemical Reactions, Carbon Compounds & Periodic Table',
    simpleAnalogy: 'Carbon can bond in 4 directions like a 4-armed puzzle piece.',
    plainAnalogy: 'Carbon can bond in 4 directions like a 4-armed puzzle piece.',
    whyNeeded: 'Organic molecules and material spectroscopy.',
    kiitSubjectLink: 'Chemistry CH10009',
    feedsIntoCollege: 'Chemistry CH10009',
    youtubeSearchQuery: 'class 10 carbon and its compounds',
    order: 31,
    prerequisites: ['f_c_9_1']
  },
  {
    id: 'f_c_11_1',
    subject: 'Chemistry',
    classLevel: 'Class 11',
    title: 'Chemical Thermodynamics & Energetics (Class 11)',
    simpleAnalogy: 'Heat absorption and release during chemical reactions.',
    plainAnalogy: 'Heat absorption and release during chemical reactions.',
    whyNeeded: 'Gibbs Free Energy and Phase Equilibria in Engineering Chemistry Unit 1.',
    kiitSubjectLink: 'Chemistry CH10009 Unit 1',
    feedsIntoCollege: 'Chemistry CH10009 Unit 1',
    youtubeSearchQuery: 'class 11 chemical thermodynamics',
    order: 32,
    prerequisites: ['f_c_10_1']
  },
  {
    id: 'f_c_12_1',
    subject: 'Chemistry',
    classLevel: 'Class 12',
    title: 'Electrochemistry, Batteries & Chemical Kinetics',
    simpleAnalogy: 'Chemical reactions generating electrical voltage in lithium batteries.',
    plainAnalogy: 'Chemical reactions generating electrical voltage in lithium batteries.',
    whyNeeded: 'Batteries, Fuel Cells & Rate Laws in Engineering Chemistry Unit 2-3.',
    kiitSubjectLink: 'Chemistry CH10009 Unit 2 & 3',
    feedsIntoCollege: 'Chemistry CH10009 Unit 2 & 3',
    youtubeSearchQuery: 'class 12 electrochemistry kinetics',
    order: 33,
    prerequisites: ['f_c_11_1']
  },

  // ==========================================
  // ENGLISH & COMMUNICATION (CLASS 6 TO 12)
  // ==========================================
  {
    id: 'f_e_6_1',
    subject: 'English',
    classLevel: 'Class 6',
    title: 'Nouns, Pronouns, Verbs & Simple Sentences',
    simpleAnalogy: 'Nouns are names; verbs are action moves.',
    plainAnalogy: 'Nouns are names; verbs are action moves.',
    whyNeeded: 'Sentence building block for English Communication.',
    kiitSubjectLink: 'English Communication HS10003',
    feedsIntoCollege: 'English Communication HS10003',
    youtubeSearchQuery: 'class 6 english grammar basics',
    order: 34,
    prerequisites: []
  },
  {
    id: 'f_e_8_1',
    subject: 'English',
    classLevel: 'Class 8',
    title: 'Tenses (Past, Present, Future) & Active/Passive Voice',
    simpleAnalogy: 'Active: "Cat drank milk" vs Passive: "Milk was drunk by cat".',
    plainAnalogy: 'Active: "Cat drank milk" vs Passive: "Milk was drunk by cat".',
    whyNeeded: 'Technical reports use passive voice; active voice for emails.',
    kiitSubjectLink: 'English Communication HS10003',
    feedsIntoCollege: 'English Communication HS10003',
    youtubeSearchQuery: 'class 8 active passive voice tenses',
    order: 35,
    prerequisites: ['f_e_6_1']
  },
  {
    id: 'f_e_10_1',
    subject: 'English',
    classLevel: 'Class 10',
    title: 'Subject-Verb Agreement, Direct/Indirect Speech & Paragraphs',
    simpleAnalogy: 'Matching singular subjects with singular verbs (He runs vs They run).',
    plainAnalogy: 'Matching singular subjects with singular verbs (He runs vs They run).',
    whyNeeded: 'Clear professional email writing and document summaries.',
    kiitSubjectLink: 'English Communication HS10003',
    feedsIntoCollege: 'English Communication HS10003',
    youtubeSearchQuery: 'class 10 subject verb agreement direct indirect speech',
    order: 36,
    prerequisites: ['f_e_8_1']
  },
  {
    id: 'f_e_12_1',
    subject: 'English',
    classLevel: 'Class 12',
    title: 'Formal Business Letters, Resume Writing & Group Discussion (GD)',
    simpleAnalogy: 'A resume is your personal product brochure for interviewers.',
    plainAnalogy: 'A resume is your personal product brochure for interviewers.',
    whyNeeded: 'Campus placement interviews and English Communication Lab HS18003.',
    kiitSubjectLink: 'English Communication Lab HS18003',
    feedsIntoCollege: 'English Communication Lab HS18003',
    youtubeSearchQuery: 'class 12 formal letter resume group discussion skills',
    order: 37,
    prerequisites: ['f_e_10_1']
  },

  // ==========================================
  // GENERAL KNOWLEDGE & CIVICS (CLASS 6 TO 12)
  // ==========================================
  {
    id: 'f_gk_6_1',
    subject: 'General Knowledge',
    classLevel: 'Class 6',
    title: 'Solar System, Earth Rotation & Map Reading',
    simpleAnalogy: 'Latitude lines are belt circles; longitude lines are orange slices.',
    plainAnalogy: 'Latitude lines are belt circles; longitude lines are orange slices.',
    whyNeeded: 'General awareness and spatial reasoning.',
    kiitSubjectLink: 'Universal Human Values ID10003',
    feedsIntoCollege: 'Universal Human Values ID10003',
    youtubeSearchQuery: 'class 6 geography maps solar system',
    order: 38,
    prerequisites: []
  },
  {
    id: 'f_gk_8_1',
    subject: 'General Knowledge',
    classLevel: 'Class 8',
    title: 'Indian Freedom Movement & Democracy Basics',
    simpleAnalogy: 'Democracy is choosing group leaders by open voting.',
    plainAnalogy: 'Democracy is choosing group leaders by open voting.',
    whyNeeded: 'Social awareness and ethical citizenship.',
    kiitSubjectLink: 'Universal Human Values ID10003',
    feedsIntoCollege: 'Universal Human Values ID10003',
    youtubeSearchQuery: 'class 8 indian freedom struggle democracy',
    order: 39,
    prerequisites: ['f_gk_6_1']
  },
  {
    id: 'f_gk_10_1',
    subject: 'General Knowledge',
    classLevel: 'Class 10',
    title: 'Indian Constitution, Fundamental Rights & Preamble',
    simpleAnalogy: 'The supreme rulebook governing rights and duties in India.',
    plainAnalogy: 'The supreme rulebook governing rights and duties in India.',
    whyNeeded: 'Universal Human Values ID10003 & ethical decision making.',
    kiitSubjectLink: 'Universal Human Values ID10003',
    feedsIntoCollege: 'Universal Human Values ID10003',
    youtubeSearchQuery: 'class 10 indian constitution fundamental rights',
    order: 40,
    prerequisites: ['f_gk_8_1']
  },
  {
    id: 'f_gk_12_1',
    subject: 'General Knowledge',
    classLevel: 'Class 12',
    title: 'Indian Governance, International Bodies & Current Affairs',
    simpleAnalogy: 'UN, World Bank & ISRO roles in global development.',
    plainAnalogy: 'UN, World Bank & ISRO roles in global development.',
    whyNeeded: 'General awareness, campus placement GDs & interview rounds.',
    kiitSubjectLink: 'Universal Human Values & Placement Prep',
    feedsIntoCollege: 'Universal Human Values & Placement Prep',
    youtubeSearchQuery: 'indian governance civics current affairs placement',
    order: 41,
    prerequisites: ['f_gk_10_1']
  }
];
