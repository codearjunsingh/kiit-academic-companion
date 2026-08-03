export interface Chapter {
  id: string;
  title: string;
  module: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Subject {
  code: string;
  name: string;
  scheme: 'Scheme A' | 'Scheme B' | 'All';
  semester: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  category: 'BS' | 'ES' | 'GER' | 'Core' | 'PE' | 'OE';
  type: 'Theory' | 'Practical' | 'Sessional';
  ltpc: {
    l: number; // Lecture hours
    t: number; // Tutorial hours
    p: number; // Practical hours
    total: number;
    credits: number;
  };
  prerequisites: string;
  textbook: string;
  referenceBook?: string;
  youtubeSearchQuery: string;
  chapters: Chapter[];
  isElective?: boolean;
  electiveCategory?: 'Engineering' | 'Science' | 'GER';
}

// ==================== SCHEME A ====================
// SEMESTER 1 - SCHEME A (Physics, Programming, Electrical, ScLS, UHV, Workshop)
export const SCHEME_A_SEM1_COURSES: Subject[] = [
  {
    code: 'MA11009',
    name: 'Calculus and Differential Equations',
    scheme: 'Scheme A',
    semester: 1,
    category: 'BS',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'Class 11-12 Calculus, Differentiation, Integration',
    textbook: 'Advanced Engineering Mathematics by Erwin Kreyszig (10th Ed, Wiley)',
    referenceBook: 'Higher Engineering Mathematics by B.S. Grewal (44th Ed)',
    youtubeSearchQuery: 'Calculus and Differential Equations MA11009 BTech',
    chapters: [
      { id: 'ma1_ch1', title: 'Review of Calculus & Functions of Several Variables', module: 'Module 1', difficulty: 'Medium' },
      { id: 'ma1_ch2', title: 'Taylors Series, Maxima/Minima & Lagrange Multipliers', module: 'Module 1', difficulty: 'Hard' },
      { id: 'ma1_ch3', title: 'First-Order ODEs: Separable, Exact & Bernoulli Equations', module: 'Module 2', difficulty: 'Medium' },
      { id: 'ma1_ch4', title: 'Second-Order Linear ODEs: Homogeneous & Undetermined Coefficients', module: 'Module 3', difficulty: 'Hard' },
      { id: 'ma1_ch5', title: 'Variation of Parameters & Power Series Method', module: 'Module 3', difficulty: 'Hard' },
      { id: 'ma1_ch6', title: 'Laplace Transform: Linearity, Shifting & ODE Solutions', module: 'Module 4', difficulty: 'Medium' },
    ]
  },
  {
    code: 'PH10005',
    name: 'Physics',
    scheme: 'Scheme A',
    semester: 1,
    category: 'BS',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Class 11-12 Wave Optics, Electrostatics, Quantum Theory',
    textbook: 'Engineering Physics by B.K. Pandey & S. Chaturvedi (Cengage) / Avadhanulu (S. Chand)',
    referenceBook: 'Concepts of Modern Physics by Arthur Beiser',
    youtubeSearchQuery: 'Engineering Physics PH10005',
    chapters: [
      { id: 'ph1_ch1', title: 'Wave Optics: Interference, Newtons Rings & Michelson Interferometer', module: 'Module 1', difficulty: 'Medium' },
      { id: 'ph1_ch2', title: 'Fraunhofer Diffraction & Plane Diffraction Grating', module: 'Module 1', difficulty: 'Medium' },
      { id: 'ph1_ch3', title: 'Electromagnetic Theory: Maxwell Equations & Vector Calculus', module: 'Module 2', difficulty: 'Hard' },
      { id: 'ph1_ch4', title: 'Quantum Mechanics: Wave-Particle Duality & Schrodingers Equation', module: 'Module 3', difficulty: 'Hard' },
      { id: 'ph1_ch5', title: 'Semiconductor Physics: Energy Bands, Fermi Level & Conductance', module: 'Module 4', difficulty: 'Medium' },
      { id: 'ph1_ch6', title: 'Lasers & Optical Fibers: Pumping, Numerical Aperture & Applications', module: 'Module 5', difficulty: 'Easy' },
    ]
  },
  {
    code: 'EE10002',
    name: 'Basic Electrical Engineering',
    scheme: 'Scheme A',
    semester: 1,
    category: 'ES',
    type: 'Theory',
    ltpc: { l: 2, t: 0, p: 0, total: 2, credits: 2 },
    prerequisites: 'Class 12 Current Electricity, Ohm Law, Magnetic Field',
    textbook: 'Principles of Electrical Engineering and Electronics by V.K. Mehta & Rohit Mehta (S. Chand)',
    referenceBook: 'Basic Electrical Engineering by D.C. Kulshreshtha',
    youtubeSearchQuery: 'Basic Electrical Engineering EE10002',
    chapters: [
      { id: 'ee1_ch1', title: 'DC Circuits: KVL, KCL, Nodal/Mesh & Thevenin-Norton Theorems', module: 'Module 1', difficulty: 'Medium' },
      { id: 'ee1_ch2', title: 'AC Circuits: RMS Values, Phasors & 3-Phase Star/Delta', module: 'Module 2', difficulty: 'Medium' },
      { id: 'ee1_ch3', title: 'Magnetic Circuits: B-H Curve, Reluctance & Permeance', module: 'Module 3', difficulty: 'Easy' },
      { id: 'ee1_ch4', title: 'Electrical Energy & Safety: Transformers, Motors & ELCB/MCB', module: 'Module 4', difficulty: 'Easy' },
    ]
  },
  {
    code: 'EE10005',
    name: 'Engineering Elective (Instrumentation & Automation)',
    scheme: 'Scheme A',
    semester: 1,
    category: 'ES',
    type: 'Theory',
    ltpc: { l: 2, t: 0, p: 0, total: 2, credits: 2 },
    prerequisites: 'Basic Physics & Measurement units',
    textbook: 'Electrical & Electronic Measurements and Instruments by R.K. Rajput',
    youtubeSearchQuery: 'Instrumentation and Automation EE10005',
    isElective: true,
    electiveCategory: 'Engineering',
    chapters: [
      { id: 'eng_elec_1', title: 'Analog & Digital Instruments: Voltmeter, Multimeter, Oscilloscope', module: 'Module 1', difficulty: 'Easy' },
      { id: 'eng_elec_2', title: 'Sensors & Transducers: Thermocouples, RTD, Ultrasonic & Optical', module: 'Module 2', difficulty: 'Medium' },
      { id: 'eng_elec_3', title: 'PLC Automation: Programmable Controllers & Sensor Interfacing', module: 'Module 3', difficulty: 'Hard' },
    ]
  },
  {
    code: 'LS10005',
    name: 'Science of Living Systems',
    scheme: 'Scheme A',
    semester: 1,
    category: 'BS',
    type: 'Theory',
    ltpc: { l: 2, t: 0, p: 0, total: 2, credits: 2 },
    prerequisites: 'Class 10 Biology Basics',
    textbook: 'Biology for Engineers by Vidya Rajesh (1st Ed, Cengage)',
    youtubeSearchQuery: 'Science of Living Systems LS10005',
    chapters: [
      { id: 'ls1_ch1', title: 'Molecular Organization: Cell as Thermodynamic System, ATP/NADPH', module: 'Module 1', difficulty: 'Easy' },
      { id: 'ls1_ch2', title: 'Central Dogma & Genetic Code Mapping to Binary', module: 'Module 2', difficulty: 'Medium' },
      { id: 'ls1_ch3', title: 'Biomimetics: Wood Web, Bio-concrete & Photosynthesis Solar Cells', module: 'Module 3', difficulty: 'Easy' },
      { id: 'ls1_ch4', title: 'Biological vs Artificial Neural Networks (ANN)', module: 'Module 4', difficulty: 'Medium' },
    ]
  },
  {
    code: 'ID10003',
    name: 'Universal Human Values',
    scheme: 'Scheme A',
    semester: 1,
    category: 'GER',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'None',
    textbook: 'Human Values and Professional Ethics by R.R. Gaur',
    youtubeSearchQuery: 'Universal Human Values ID10003',
    chapters: [
      { id: 'uhv_ch1', title: 'Self-Exploration, Natural Acceptance & Continuous Happiness', module: 'Module 1', difficulty: 'Easy' },
      { id: 'uhv_ch2', title: 'Harmony in Myself: Sentient I vs Physical Body', module: 'Module 1', difficulty: 'Easy' },
      { id: 'uhv_ch3', title: 'Harmony in Family & Society: Trust, Respect & Justice', module: 'Module 3', difficulty: 'Easy' },
      { id: 'uhv_ch4', title: 'Harmony in Nature & Professional Ethics', module: 'Module 4', difficulty: 'Easy' },
    ]
  },
  {
    code: 'PH19001',
    name: 'Physics Laboratory',
    scheme: 'Scheme A',
    semester: 1,
    category: 'BS',
    type: 'Practical',
    ltpc: { l: 0, t: 0, p: 2, total: 2, credits: 1 },
    prerequisites: 'Physics PH10005',
    textbook: 'Physics Laboratory Manual',
    youtubeSearchQuery: 'Engineering Physics Lab PH19001',
    chapters: [
      { id: 'phlab_1', title: 'Newton Ring Wavelength & Michelson Interferometer', module: 'Lab Experiments', difficulty: 'Medium' },
      { id: 'phlab_2', title: 'Diffraction Grating & Photocell Planck Constant', module: 'Lab Experiments', difficulty: 'Medium' },
    ]
  },
  {
    code: 'CS13003',
    name: 'Introduction to Computer Programming',
    scheme: 'Scheme A',
    semester: 1,
    category: 'ES',
    type: 'Practical',
    ltpc: { l: 0, t: 2, p: 4, total: 6, credits: 4 },
    prerequisites: 'Basic Logic & Computers',
    textbook: 'Programming in ANSI C by E. Balagurusamy (9th Ed, McGraw Hill)',
    youtubeSearchQuery: 'Introduction to Computer Programming CS13003 C language',
    chapters: [
      { id: 'cs1_ch1', title: 'Linux Commands & C Compilation Process', module: 'Module 1', difficulty: 'Easy' },
      { id: 'cs1_ch2', title: 'Variables, Data Types, Control Constructs & Loops', module: 'Module 2', difficulty: 'Easy' },
      { id: 'cs1_ch3', title: '1D/2D Arrays & String Manipulations', module: 'Module 3', difficulty: 'Medium' },
      { id: 'cs1_ch4', title: 'Functions, Parameter Passing & Storage Classes', module: 'Module 4', difficulty: 'Medium' },
      { id: 'cs1_ch5', title: 'Pointers, Memory Allocation & Dynamic Arrays', module: 'Module 5', difficulty: 'Hard' },
      { id: 'cs1_ch6', title: 'Structures, Unions & File Handling (Binary/Text)', module: 'Module 6', difficulty: 'Hard' },
    ]
  },
  {
    code: 'ME18001',
    name: 'Workshop',
    scheme: 'Scheme A',
    semester: 1,
    category: 'ES',
    type: 'Sessional',
    ltpc: { l: 0, t: 0, p: 2, total: 2, credits: 1 },
    prerequisites: 'Workshop Safety Rules',
    textbook: 'Mechanical Workshop Practice by K.C. John',
    youtubeSearchQuery: 'Engineering Workshop ME18001 fitting welding turning',
    chapters: [
      { id: 'ws_ch1', title: 'Fitting & Welding Shop Practice', module: 'Sessional', difficulty: 'Easy' },
      { id: 'ws_ch2', title: 'Turning & Sheet Metal Work', module: 'Sessional', difficulty: 'Easy' },
    ]
  }
];

// SEMESTER 2 - SCHEME A
export const SCHEME_A_SEM2_COURSES: Subject[] = [
  {
    code: 'HS10003',
    name: 'English Communication Skills',
    scheme: 'Scheme A',
    semester: 2,
    category: 'GER',
    type: 'Theory',
    ltpc: { l: 2, t: 0, p: 0, total: 2, credits: 2 },
    prerequisites: 'Basic English Grammar',
    textbook: 'Effective Technical Communication by M. Ashraf Rizvi & Priyadarshi Patnaik (3rd Ed, McGraw Hill)',
    youtubeSearchQuery: 'English Communication Skills HS10003',
    chapters: [
      { id: 'eng_ch1', title: 'Technical Communication & Non-Verbal Signals', module: 'Module 1', difficulty: 'Easy' },
      { id: 'eng_ch2', title: 'Listening, Pronunciation & Literature Analysis', module: 'Module 2', difficulty: 'Easy' },
      { id: 'eng_ch3', title: 'Business Letters, Technical Reports & Generative AI Ethics', module: 'Module 3', difficulty: 'Medium' },
    ]
  },
  {
    code: 'MA11011',
    name: 'Linear Algebra and Fourier Analysis',
    scheme: 'Scheme A',
    semester: 2,
    category: 'BS',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'MA11009 Calculus',
    textbook: 'Numerical Methods by M.K. Jain, S.R.K. Iyengar & R.K. Jain (9th Ed, New Age)',
    youtubeSearchQuery: 'Linear Algebra and Fourier Analysis MA11011',
    chapters: [
      { id: 'ma2_ch1', title: 'Vector Spaces & Systems of Linear Equations (Gauss-Jordan)', module: 'Module 1', difficulty: 'Medium' },
      { id: 'ma2_ch2', title: 'Eigenvalues, Eigenvectors & Matrix Diagonalization', module: 'Module 2', difficulty: 'Hard' },
      { id: 'ma2_ch3', title: 'Numerical Methods: Root Finding, Interpolation & Integration', module: 'Module 3', difficulty: 'Medium' },
      { id: 'ma2_ch4', title: 'Fourier Series & Fourier Transforms', module: 'Module 4', difficulty: 'Hard' },
    ]
  },
  {
    code: 'CH10009',
    name: 'Chemistry',
    scheme: 'Scheme A',
    semester: 2,
    category: 'BS',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Class 11-12 Chemistry',
    textbook: 'Textbook of Engineering Chemistry by Shashi Chawla / P. Rath (Cengage)',
    youtubeSearchQuery: 'Engineering Chemistry CH10009',
    chapters: [
      { id: 'ch1_ch1', title: 'Chemical Thermodynamics: Gibbs Free Energy & Phase Equilibria', module: 'Module 1', difficulty: 'Medium' },
      { id: 'ch1_ch2', title: 'Chemical Kinetics & Enzyme Catalysis', module: 'Module 2', difficulty: 'Medium' },
      { id: 'ch1_ch3', title: 'Electrochemical Energy Systems: Batteries & Fuel Cells', module: 'Module 3', difficulty: 'Hard' },
      { id: 'ch1_ch4', title: 'Spectroscopy Characterization: UV-Vis, IR, Raman & XPS', module: 'Module 4', difficulty: 'Hard' },
    ]
  },
  {
    code: 'EC10005',
    name: 'Basic Electronics Circuits and Logic Design',
    scheme: 'Scheme A',
    semester: 2,
    category: 'ES',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Physics Semiconductor Concepts',
    textbook: 'Principles of Electronic Devices and Circuits by B.L. Theraja & R.S. Sedha (S. Chand)',
    youtubeSearchQuery: 'Basic Electronics Circuits and Logic Design EC10005',
    chapters: [
      { id: 'ec1_ch1', title: 'Analog Circuits: Diodes, BJTs, JFETs & Op-Amps', module: 'Module 1', difficulty: 'Medium' },
      { id: 'ec1_ch2', title: 'Boolean Algebra, K-Maps & Min-term/Max-term SOP', module: 'Module 2', difficulty: 'Medium' },
      { id: 'ec1_ch3', title: 'Combinational Circuits: Adders, Subtractors, Decoders & Multiplexers', module: 'Module 3', difficulty: 'Hard' },
      { id: 'ec1_ch4', title: 'Sequential Circuits: Flip-Flops (SR, JK, D, T), Counters & Registers', module: 'Module 4', difficulty: 'Hard' },
    ]
  },
  {
    code: 'CH10015',
    name: 'Science Elective (Nanoscience)',
    scheme: 'Scheme A',
    semester: 2,
    category: 'BS',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Basic Physics & Chemistry',
    textbook: 'Textbook of Nanoscience and Nanotechnology by B.S. Murty',
    youtubeSearchQuery: 'Nanoscience CH10015',
    isElective: true,
    electiveCategory: 'Science',
    chapters: [
      { id: 'sci_elec_1', title: '0D/1D/2D Nanomaterials & Size Effects', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sci_elec_2', title: 'Synthesis Methods: Sol-Gel, CVD & Lithography', module: 'Module 2', difficulty: 'Medium' },
      { id: 'sci_elec_3', title: 'Characterization: XRD, SEM, TEM & AFM', module: 'Module 3', difficulty: 'Hard' },
    ]
  },
  {
    code: 'CH19001',
    name: 'Chemistry Laboratory',
    scheme: 'Scheme A',
    semester: 2,
    category: 'BS',
    type: 'Practical',
    ltpc: { l: 0, t: 0, p: 2, total: 2, credits: 1 },
    prerequisites: 'Chemistry CH10009',
    textbook: 'Chemistry Lab Manual',
    youtubeSearchQuery: 'Engineering Chemistry Lab CH19001',
    chapters: [
      { id: 'chlab_1', title: 'Water Hardness EDTA & Dissolved Oxygen Winkler Method', module: 'Lab Experiments', difficulty: 'Easy' },
      { id: 'chlab_2', title: 'Potentiometric & Conductometric Titrations', module: 'Lab Experiments', difficulty: 'Medium' },
    ]
  },
  {
    code: 'EC19001',
    name: 'Electronic Circuit and Logic Laboratory',
    scheme: 'Scheme A',
    semester: 2,
    category: 'ES',
    type: 'Practical',
    ltpc: { l: 0, t: 0, p: 2, total: 2, credits: 1 },
    prerequisites: 'Electronics EC10005',
    textbook: 'Basic Electronics Lab Manual',
    youtubeSearchQuery: 'Electronics Lab EC19001',
    chapters: [
      { id: 'eclab_1', title: 'Rectifier & Op-Amp Circuit Verification', module: 'Lab Experiments', difficulty: 'Medium' },
      { id: 'eclab_2', title: 'Logic Gates, Multiplexers & Flip-Flop Counters', module: 'Lab Experiments', difficulty: 'Medium' },
    ]
  },
  {
    code: 'CE18003',
    name: 'Engineering Drawing & Graphics',
    scheme: 'Scheme A',
    semester: 2,
    category: 'ES',
    type: 'Sessional',
    ltpc: { l: 0, t: 1, p: 2, total: 3, credits: 2 },
    prerequisites: 'Geometry Concepts',
    textbook: 'Engineering Drawing + AutoCAD by K. Venugopal',
    youtubeSearchQuery: 'Engineering Drawing CE18003 AutoCAD projections solids',
    chapters: [
      { id: 'ed_ch1', title: 'BIS Standards, Lettering & Projection of Points & Lines', module: 'Module 1', difficulty: 'Easy' },
      { id: 'ed_ch2', title: 'Projections of Planes & Solids (Prisms, Pyramids, Cones)', module: 'Module 2', difficulty: 'Medium' },
      { id: 'ed_ch3', title: 'Sections of Solids, Surface Development & 2D AutoCAD Commands', module: 'Module 3', difficulty: 'Hard' },
    ]
  },
  {
    code: 'HS18003',
    name: 'English Communication Laboratory',
    scheme: 'Scheme A',
    semester: 2,
    category: 'GER',
    type: 'Sessional',
    ltpc: { l: 0, t: 0, p: 2, total: 2, credits: 1 },
    prerequisites: 'English HS10003',
    textbook: 'Communication Lab Manual',
    youtubeSearchQuery: 'English Communication Lab HS18003',
    chapters: [
      { id: 'englab_1', title: 'Group Discussions, Resume Writing & Mock Interviews', module: 'Sessional', difficulty: 'Easy' },
    ]
  },
  {
    code: 'SY18001',
    name: 'GER Elective (Sports and Yoga)',
    scheme: 'Scheme A',
    semester: 2,
    category: 'GER',
    type: 'Sessional',
    ltpc: { l: 0, t: 0, p: 2, total: 2, credits: 1 },
    prerequisites: 'None',
    textbook: 'Yogic Education by K. Arya',
    youtubeSearchQuery: 'Sports and Yoga SY18001',
    isElective: true,
    electiveCategory: 'GER',
    chapters: [
      { id: 'ger_ch1', title: 'Ashtanga Yoga, Surya Namaskar & Fitness Exercises', module: 'Sessional', difficulty: 'Easy' },
    ]
  }
];

// SEMESTER 1 & 2 SCHEME B
export const SCHEME_B_SEM1_COURSES: Subject[] = SCHEME_A_SEM2_COURSES.map(c => ({ ...c, scheme: 'Scheme B', semester: 1 }));
export const SCHEME_B_SEM2_COURSES: Subject[] = SCHEME_A_SEM1_COURSES.map(c => ({ ...c, scheme: 'Scheme B', semester: 2 }));

// ==================== 2nd, 3rd, 4th YEAR B.TECH CSE / CSE-AIML ====================
export const UPPER_SEMESTER_COURSES: Subject[] = [
  // SEMESTER 3
  {
    code: 'MA21001',
    name: 'Probability and Statistics',
    scheme: 'All',
    semester: 3,
    category: 'BS',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'Calculus MA11009',
    textbook: 'Probability and Statistics for Engineers and Sciences by J.L. Devore (9th Ed, Cengage)',
    referenceBook: 'Advanced Engineering Mathematics by Erwin Kreyszig',
    youtubeSearchQuery: 'Probability and Statistics MA21001',
    chapters: [
      { id: 'sem3_ma_1', title: 'Probability Distributions (Binomial, Poisson, Normal, Exponential)', module: 'Module 1', difficulty: 'Medium' },
      { id: 'sem3_ma_2', title: 'Joint Probability & Marginal Mass Functions', module: 'Module 2', difficulty: 'Hard' },
      { id: 'sem3_ma_3', title: 'Descriptive Statistics & Regression Analysis', module: 'Module 3', difficulty: 'Medium' },
      { id: 'sem3_ma_4', title: 'Inferential Statistics, Central Limit Theorem & Hypothesis Testing', module: 'Module 4', difficulty: 'Hard' }
    ]
  },
  {
    code: 'CS21001',
    name: 'Data Structures',
    scheme: 'All',
    semester: 3,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'C Programming CS13003',
    textbook: 'Fundamentals of Data Structures in C by E. Horowitz, S. Sahani & Anderson-Freed',
    referenceBook: 'Data Structures using C by Tenenbaum',
    youtubeSearchQuery: 'Data Structures CS21001 Abdul Bari',
    chapters: [
      { id: 'sem3_ds_1', title: 'Algorithm Analysis, Time/Space Complexity & Sparse Matrices', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sem3_ds_2', title: 'Stacks, Queues, Linked Lists (Singly, Doubly, Circular)', module: 'Module 2', difficulty: 'Medium' },
      { id: 'sem3_ds_3', title: 'Trees: BST, AVL Trees & Expression Trees', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem3_ds_4', title: 'Graphs: BFS, DFS & Topological Sort', module: 'Module 4', difficulty: 'Hard' },
      { id: 'sem3_ds_5', title: 'Sorting (Merge, Quick, Heap) & Hashing', module: 'Module 5', difficulty: 'Medium' }
    ]
  },
  {
    code: 'CS21003',
    name: 'Automata Theory and Formal Languages',
    scheme: 'All',
    semester: 3,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'Basic Logic & Discrete Math',
    textbook: 'Introduction to Automata Theory, Languages and Computation by Hopcroft, Motwani & Ullman (3rd Ed)',
    youtubeSearchQuery: 'Automata Theory CS21003 Gate Smashers',
    chapters: [
      { id: 'sem3_at_1', title: 'Finite Automata: DFA, NFA, Minimization & NFA to DFA', module: 'Module 1', difficulty: 'Medium' },
      { id: 'sem3_at_2', title: 'Regular Expressions & Pumping Lemma', module: 'Module 2', difficulty: 'Hard' },
      { id: 'sem3_at_3', title: 'Context-Free Grammars (CFG) & Pushdown Automata (PDA)', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem3_at_4', title: 'Turing Machines & Undecidability (Halting Problem)', module: 'Module 4', difficulty: 'Hard' }
    ]
  },
  {
    code: 'EC20005',
    name: 'Digital Systems Design',
    scheme: 'All',
    semester: 3,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Basic Electronics EC10005',
    textbook: 'Digital Design by M. Morris Mano & Michael D. Ciletti (5th Ed, PHI)',
    youtubeSearchQuery: 'Digital Systems Design EC20005 Neso Academy',
    chapters: [
      { id: 'sem3_dsd_1', title: 'VLSI Design Flow & Verilog HDL Operators', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sem3_dsd_2', title: 'K-Maps & Combinational Circuits (Adders, Decoders, MUX)', module: 'Module 2', difficulty: 'Medium' },
      { id: 'sem3_dsd_3', title: 'Sequential Circuits: Flip-Flops, Registers & Counters', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem3_dsd_4', title: 'CMOS Gate Level Logic Design', module: 'Module 4', difficulty: 'Hard' }
    ]
  },
  {
    code: 'EX20001',
    name: 'Industry 4.0 Technologies',
    scheme: 'All',
    semester: 3,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 2, t: 0, p: 0, total: 2, credits: 2 },
    prerequisites: 'None',
    textbook: 'Tech Trends of the 4th Industrial Revolution by D. Pyo',
    youtubeSearchQuery: 'Industry 4.0 Technologies EX20001',
    chapters: [
      { id: 'sem3_ind_1', title: 'IIoT, Cloud Computing & Digital Twins', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sem3_ind_2', title: 'Cyber Physical Systems & Robotics Automation', module: 'Module 2', difficulty: 'Medium' }
    ]
  },

  // SEMESTER 4
  {
    code: 'MA21002',
    name: 'Discrete Structures',
    scheme: 'All',
    semester: 4,
    category: 'BS',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'Basic Mathematics',
    textbook: 'Discrete Mathematics and its Applications by Kenneth H. Rosen (7th Ed, McGraw Hill)',
    youtubeSearchQuery: 'Discrete Structures MA21002',
    chapters: [
      { id: 'sem4_ds_1', title: 'Propositional Logic, Predicates & Induction', module: 'Module 1', difficulty: 'Medium' },
      { id: 'sem4_ds_2', title: 'Sets, Relations, Equivalence & Hasse Diagrams', module: 'Module 2', difficulty: 'Medium' },
      { id: 'sem4_ds_3', title: 'Recurrence Relations & Generating Functions', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem4_ds_4', title: 'Group Theory, Rings & Fields', module: 'Module 4', difficulty: 'Hard' },
      { id: 'sem4_ds_5', title: 'Graph Theory: Eulerian, Hamiltonian, Dijkstra & MST', module: 'Module 5', difficulty: 'Medium' }
    ]
  },
  {
    code: 'CS20002',
    name: 'Operating Systems',
    scheme: 'All',
    semester: 4,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Data Structures & Computer Architecture',
    textbook: 'Operating System Concepts by Silberschatz, Galvin & Gagne (10th Ed, Wiley)',
    youtubeSearchQuery: 'Operating Systems CS20002 Gate Smashers',
    chapters: [
      { id: 'sem4_os_1', title: 'OS Services, System Calls & Process Management', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sem4_os_2', title: 'CPU Scheduling, Semaphores & Deadlock Avoidance', module: 'Module 2', difficulty: 'Hard' },
      { id: 'sem4_os_3', title: 'Memory Management, Paging & Virtual Memory', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem4_os_4', title: 'File Systems, Mass Storage & Linux Case Study', module: 'Module 4', difficulty: 'Medium' }
    ]
  },
  {
    code: 'CS20004',
    name: 'Object Oriented Programming using Java',
    scheme: 'All',
    semester: 4,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'C Programming',
    textbook: 'Java - The Complete Reference by Herbert Schildt (12th Ed, McGraw Hill)',
    youtubeSearchQuery: 'Object Oriented Programming Java CS20004 Telusko',
    chapters: [
      { id: 'sem4_java_1', title: 'OOP Principles: Classes, Objects, Inheritance & Polymorphism', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sem4_java_2', title: 'Packages, Interfaces & Exception Handling', module: 'Module 2', difficulty: 'Medium' },
      { id: 'sem4_java_3', title: 'Multithreading & Inter-thread Communication', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem4_java_4', title: 'Java Swing GUI & JDBC Database Connectivity', module: 'Module 4', difficulty: 'Medium' }
    ]
  },
  {
    code: 'CS20006',
    name: 'Database Management Systems',
    scheme: 'All',
    semester: 4,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 3 },
    prerequisites: 'Data Structures',
    textbook: 'Database System Concepts by Silberschatz, Korth & Sudharshan (7th Ed, McGraw Hill)',
    youtubeSearchQuery: 'Database Management Systems CS20006 Gate Smashers',
    chapters: [
      { id: 'sem4_db_1', title: 'ER Diagrams & Relational Data Models', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sem4_db_2', title: 'Relational Algebra & Advanced SQL Queries', module: 'Module 2', difficulty: 'Medium' },
      { id: 'sem4_db_3', title: 'Normalization: 1NF, 2NF, 3NF, BCNF & 4NF', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem4_db_4', title: 'Transaction Management, ACID Properties & Concurrency Control', module: 'Module 4', difficulty: 'Hard' }
    ]
  },
  {
    code: 'CS21002',
    name: 'Computer Organization and Architecture',
    scheme: 'All',
    semester: 4,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'Digital Systems Design',
    textbook: 'Computer Organization and Embedded Systems by Carl Hamacher (6th Ed, MGH)',
    youtubeSearchQuery: 'Computer Organization and Architecture CS21002',
    chapters: [
      { id: 'sem4_coa_1', title: 'Computer Structure, Addressing Modes & ISA', module: 'Module 1', difficulty: 'Medium' },
      { id: 'sem4_coa_2', title: 'ALU Design & Fast Multiplication/Division', module: 'Module 2', difficulty: 'Hard' },
      { id: 'sem4_coa_3', title: 'Memory Hierarchy, SRAM, DRAM & Cache Mapping', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem4_coa_4', title: 'Pipelining, Hazards & I/O Interrupts', module: 'Module 4', difficulty: 'Hard' }
    ]
  },

  // SEMESTER 5
  {
    code: 'CS30001',
    name: 'Design and Analysis of Algorithms',
    scheme: 'All',
    semester: 5,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Data Structures CS21001',
    textbook: 'Introduction to Algorithms by Cormen, Leiserson, Rivest & Stein (CLRS 3rd Ed)',
    youtubeSearchQuery: 'Design and Analysis of Algorithms CS30001 Abdul Bari',
    chapters: [
      { id: 'sem5_daa_1', title: 'Asymptotic Notations & Recurrence Solving (Master Theorem)', module: 'Module 1', difficulty: 'Medium' },
      { id: 'sem5_daa_2', title: 'Divide & Conquer, Greedy Method (Dijkstra, Huffman, Knapsack)', module: 'Module 2', difficulty: 'Hard' },
      { id: 'sem5_daa_3', title: 'Dynamic Programming (LCS, Matrix Chain, TSP)', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem5_daa_4', title: 'NP-Hard & NP-Complete Problems (Vertex Cover, Clique)', module: 'Module 4', difficulty: 'Hard' }
    ]
  },
  {
    code: 'CS31001',
    name: 'Software Engineering',
    scheme: 'All',
    semester: 5,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'Object Oriented Programming',
    textbook: 'Software Engineering: A Practitioners Approach by Roger S. Pressman (8th Ed)',
    youtubeSearchQuery: 'Software Engineering CS31001',
    chapters: [
      { id: 'sem5_se_1', title: 'SDLC Models: Waterfall, Agile, Scrum & Spiral', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sem5_se_2', title: 'Requirements Engineering & SRS Documentation', module: 'Module 2', difficulty: 'Medium' },
      { id: 'sem5_se_3', title: 'Software Architecture & Design Patterns', module: 'Module 3', difficulty: 'Medium' },
      { id: 'sem5_se_4', title: 'Black-box & White-box Software Testing Strategies', module: 'Module 4', difficulty: 'Medium' }
    ]
  },
  {
    code: 'CS30003',
    name: 'Computer Networks',
    scheme: 'All',
    semester: 5,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Operating Systems',
    textbook: 'Computer Networks by Andrew S. Tanenbaum & David J. Wetherall (6th Ed)',
    youtubeSearchQuery: 'Computer Networks CS30003 Gate Smashers',
    chapters: [
      { id: 'sem5_cn_1', title: 'OSI & TCP/IP Reference Layer Models', module: 'Module 1', difficulty: 'Easy' },
      { id: 'sem5_cn_2', title: 'Data Link Layer: Error Detection (CRC) & Flow Control (Sliding Window)', module: 'Module 2', difficulty: 'Medium' },
      { id: 'sem5_cn_3', title: 'Network Layer: IP Addressing, Subnetting & Routing (OSPF, BGP)', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem5_cn_4', title: 'Transport Layer: TCP, UDP, Congestion Control & QOS', module: 'Module 4', difficulty: 'Hard' }
    ]
  },

  // SEMESTER 6 (CSE-AIML FOCUS)
  {
    code: 'CS31002',
    name: 'Machine Learning',
    scheme: 'All',
    semester: 6,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 1, p: 0, total: 4, credits: 4 },
    prerequisites: 'Probability MA21001 & Linear Algebra',
    textbook: 'Probabilistic Machine Learning by Kevin P. Murphy (MIT Press 2023) / Tom Mitchell',
    youtubeSearchQuery: 'Machine Learning CS31002 Andrew Ng',
    chapters: [
      { id: 'sem6_ml_1', title: 'Supervised vs Unsupervised Learning & Bias-Variance Tradeoff', module: 'Module 1', difficulty: 'Medium' },
      { id: 'sem6_ml_2', title: 'Regression, Decision Trees, SVM & KNN Classifiers', module: 'Module 2', difficulty: 'Hard' },
      { id: 'sem6_ml_3', title: 'Clustering: K-Means, Hierarchical & Expectation Maximization', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem6_ml_4', title: 'Neural Networks: Perceptrons, MLP & Backpropagation', module: 'Module 4', difficulty: 'Hard' }
    ]
  },
  {
    code: 'CS30002',
    name: 'Artificial Intelligence',
    scheme: 'All',
    semester: 6,
    category: 'Core',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Design and Analysis of Algorithms',
    textbook: 'Artificial Intelligence - A Modern Approach by Stuart Russell & Peter Norvig (4th Ed)',
    youtubeSearchQuery: 'Artificial Intelligence CS30002',
    chapters: [
      { id: 'sem6_ai_1', title: 'Intelligent Agents & Search Strategies (A*, Minimax, Alpha-Beta)', module: 'Module 1', difficulty: 'Medium' },
      { id: 'sem6_ai_2', title: 'First-Order Logic, Resolution & Knowledge Representation', module: 'Module 2', difficulty: 'Hard' },
      { id: 'sem6_ai_3', title: 'State-Space Planning & Bayesian Networks', module: 'Module 3', difficulty: 'Hard' }
    ]
  },

  // SEMESTER 7 & 8
  {
    code: 'CS40001',
    name: 'Deep Learning Techniques (PE-IV)',
    scheme: 'All',
    semester: 7,
    category: 'PE',
    type: 'Theory',
    ltpc: { l: 3, t: 0, p: 0, total: 3, credits: 3 },
    prerequisites: 'Machine Learning CS31002',
    textbook: 'Deep Learning by Ian Goodfellow, Yoshua Bengio & Aaron Courville (MIT Press)',
    youtubeSearchQuery: 'Deep Learning Techniques CS40001 PyTorch TensorFlow',
    chapters: [
      { id: 'sem7_dl_1', title: 'Deep Feedforward Networks & Gradient Descent Optimization', module: 'Module 1', difficulty: 'Hard' },
      { id: 'sem7_dl_2', title: 'Convolutional Neural Networks (CNN) for Computer Vision', module: 'Module 2', difficulty: 'Hard' },
      { id: 'sem7_dl_3', title: 'Recurrent Neural Networks (RNN) & LSTM for Sequence Data', module: 'Module 3', difficulty: 'Hard' },
      { id: 'sem7_dl_4', title: 'Generative Adversarial Networks (GAN) & Autoencoders', module: 'Module 4', difficulty: 'Hard' }
    ]
  },
  {
    code: 'CS47001',
    name: 'Major Project - I',
    scheme: 'All',
    semester: 7,
    category: 'Core',
    type: 'Sessional',
    ltpc: { l: 0, t: 0, p: 10, total: 10, credits: 5 },
    prerequisites: 'Mini Project & AI/ML Skills',
    textbook: 'Final Year Project Guide',
    youtubeSearchQuery: 'Major Project BTech CSE AIML',
    chapters: [
      { id: 'proj1_1', title: 'Literature Review, Problem Formulation & Prototype Architecture', module: 'Phase 1', difficulty: 'Hard' }
    ]
  },
  {
    code: 'CS47002',
    name: 'Major Project - II',
    scheme: 'All',
    semester: 8,
    category: 'Core',
    type: 'Sessional',
    ltpc: { l: 0, t: 0, p: 18, total: 18, credits: 9 },
    prerequisites: 'Major Project - I',
    textbook: 'Final Year Project Thesis Guide',
    youtubeSearchQuery: 'Major Project II Computer Science',
    chapters: [
      { id: 'proj2_1', title: 'System Implementation, Deployment, Testing & Thesis Submission', module: 'Phase 2', difficulty: 'Hard' }
    ]
  }
];

export const ENGINEERING_ELECTIVES = [
  { code: 'EE10005', name: 'Instrumentation & Automation', textbook: 'Electrical & Electronic Measurements by R.K. Rajput', chapters: [{ id: 'ee10005_1', title: 'Sensors, Transducers & PLC Automation', module: 'Module 1', difficulty: 'Medium' as const }] },
  { code: 'CE10001', name: 'Basic Civil Engineering', textbook: 'Basics of Civil Engineering by S.A. Dhale', chapters: [{ id: 'ce10001_1', title: 'Building Materials, Surveying & Foundations', module: 'Module 1', difficulty: 'Easy' as const }] },
  { code: 'EC10007', name: 'Biosensors and Instrumentation', textbook: 'Handbook of Biomedical Instrumentation by R.S. Khandpur', chapters: [{ id: 'ec10007_1', title: 'Biomedical Sensors, ECG & Medical Imaging', module: 'Module 1', difficulty: 'Medium' as const }] },
  { code: 'ME10003', name: 'Basic Mechanical Engineering', textbook: 'Basic Mechanical Engineering by Sadhu Singh', chapters: [{ id: 'me10003_1', title: 'Thermodynamics, Robotics & Manufacturing', module: 'Module 1', difficulty: 'Medium' as const }] },
];

export const SCIENCE_ELECTIVES = [
  { code: 'CH10015', name: 'Nanoscience', textbook: 'Textbook of Nanoscience by B.S. Murty', chapters: [{ id: 'ch10015_1', title: 'Nanomaterials, XRD/SEM/TEM & Applications', module: 'Module 1', difficulty: 'Medium' as const }] },
  { code: 'LS10007', name: 'Molecular Diagnostics', textbook: 'Molecular Diagnostics by AE Biochemistry', chapters: [{ id: 'ls10007_1', title: 'PCR assays, NGS & AI in Health Diagnostics', module: 'Module 1', difficulty: 'Hard' as const }] },
  { code: 'MA10013', name: 'Linear Programming', textbook: 'Operations Research by P.K. Gupta', chapters: [{ id: 'ma10013_1', title: 'Simplex Method, Duality & Transportation Problems', module: 'Module 1', difficulty: 'Hard' as const }] },
  { code: 'PH10009', name: 'Smart and Emerging Materials', textbook: 'Smart Materials by M. Schwartz', chapters: [{ id: 'ph10009_1', title: 'Piezoelectrics, Shape Memory Alloys & Superconductors', module: 'Module 1', difficulty: 'Medium' as const }] },
  { code: 'PH10013', name: 'Introduction to Quantum Technologies', textbook: 'Elements of Quantum Computation by A. Pathak', chapters: [{ id: 'ph10013_1', title: 'Qubits, Quantum Gates & Entanglement', module: 'Module 1', difficulty: 'Hard' as const }] },
];

export const GER_ELECTIVES = [
  { code: 'SY18001', name: 'Sports and Yoga', chapters: [{ id: 'sy18001_1', title: 'Yogic Postures, Pranayama & Physical Fitness', module: 'Sessional', difficulty: 'Easy' as const }] },
  { code: 'ID18001', name: 'National Service Scheme (NSS)', chapters: [{ id: 'id18001_1', title: 'Community Outreach & Social Service Activities', module: 'Sessional', difficulty: 'Easy' as const }] },
  { code: 'ID18002', name: 'National Cadet Corps (NCC)', chapters: [{ id: 'id18002_1', title: 'Leadership, Military Drill & Disaster Management', module: 'Sessional', difficulty: 'Easy' as const }] },
  { code: 'SA38021', name: 'Debate and Public Speaking', chapters: [{ id: 'sa38021_1', title: 'Public Speaking, Storytelling & Parliamentary Debate', module: 'Sessional', difficulty: 'Easy' as const }] },
  { code: 'SA38011', name: 'Hindustani Classical Music', chapters: [{ id: 'sa38011_1', title: 'Swara, Raga & Tala Performance Practices', module: 'Sessional', difficulty: 'Easy' as const }] },
  { code: 'SA38031', name: 'Quiz and Knowledge Excellence', chapters: [{ id: 'sa38031_1', title: 'Analytical Reasoning, Quizzing & Current Affairs', module: 'Sessional', difficulty: 'Easy' as const }] },
];

export const BASE_SEM1_COURSES = SCHEME_A_SEM1_COURSES;
export const BASE_SEM2_COURSES = SCHEME_A_SEM2_COURSES;
