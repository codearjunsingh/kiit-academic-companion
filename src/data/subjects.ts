export interface Chapter {
  id: string;
  title: string;
  module: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Subject {
  code: string;
  name: string;
  scheme: 'Scheme A' | 'Scheme B';
  semester: 1 | 2;
  category: 'BS' | 'ES' | 'GER' | 'Core';
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
    youtubeSearchQuery: 'Calculus and Differential Equations MA11009 KIIT',
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
    youtubeSearchQuery: 'Engineering Physics PH10005 KIIT',
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
    youtubeSearchQuery: 'Basic Electrical Engineering EE10002 KIIT',
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
    youtubeSearchQuery: 'Instrumentation and Automation EE10005 KIIT',
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
    youtubeSearchQuery: 'Science of Living Systems LS10005 KIIT',
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
    youtubeSearchQuery: 'Universal Human Values ID10003 KIIT',
    chapters: [
      { id: 'uhv_ch1', title: 'Self-Exploration, Natural Acceptance & Continuous Happiness', module: 'Module 1', difficulty: 'Easy' },
      { id: 'uhv_ch2', title: 'Harmony in Myself: Sentient I vs Physical Body', module: 'Module 2', difficulty: 'Easy' },
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
    textbook: 'KIIT Physics Laboratory Manual',
    youtubeSearchQuery: 'KIIT Physics Lab PH19001',
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
    youtubeSearchQuery: 'Introduction to Computer Programming CS13003 KIIT C language',
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
    youtubeSearchQuery: 'KIIT Workshop ME18001 fitting welding turning',
    chapters: [
      { id: 'ws_ch1', title: 'Fitting & Welding Shop Practice', module: 'Sessional', difficulty: 'Easy' },
      { id: 'ws_ch2', title: 'Turning & Sheet Metal Work', module: 'Sessional', difficulty: 'Easy' },
    ]
  }
];

// SEMESTER 2 - SCHEME A (Chemistry, Linear Algebra, Basic Electronics, Science Elective, English, Drawing)
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
    youtubeSearchQuery: 'English Communication Skills HS10003 KIIT',
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
    youtubeSearchQuery: 'Linear Algebra and Fourier Analysis MA11011 KIIT',
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
    youtubeSearchQuery: 'Engineering Chemistry CH10009 KIIT',
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
    youtubeSearchQuery: 'Basic Electronics Circuits and Logic Design EC10005 KIIT',
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
    youtubeSearchQuery: 'Nanoscience CH10015 KIIT',
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
    textbook: 'KIIT Chemistry Lab Manual',
    youtubeSearchQuery: 'KIIT Chemistry Lab CH19001',
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
    textbook: 'KIIT Basic Electronics Lab Manual',
    youtubeSearchQuery: 'KIIT Electronics Lab EC19001',
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
    youtubeSearchQuery: 'Engineering Drawing CE18003 AutoCAD projections solids KIIT',
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
    textbook: 'KIIT Communication Lab Manual',
    youtubeSearchQuery: 'English Communication Lab HS18003 KIIT',
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
    youtubeSearchQuery: 'Sports and Yoga SY18001 KIIT',
    isElective: true,
    electiveCategory: 'GER',
    chapters: [
      { id: 'ger_ch1', title: 'Ashtanga Yoga, Surya Namaskar & Fitness Exercises', module: 'Sessional', difficulty: 'Easy' },
    ]
  }
];

// ==================== SCHEME B ====================
// SEMESTER 1 - SCHEME B (Chemistry, Linear Algebra, Basic Electronics, Science Elective, English, Drawing)
export const SCHEME_B_SEM1_COURSES: Subject[] = SCHEME_A_SEM2_COURSES.map(c => ({ ...c, scheme: 'Scheme B', semester: 1 }));

// SEMESTER 2 - SCHEME B (Physics, Programming, Electrical, ScLS, UHV, Workshop)
export const SCHEME_B_SEM2_COURSES: Subject[] = SCHEME_A_SEM1_COURSES.map(c => ({ ...c, scheme: 'Scheme B', semester: 2 }));

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
