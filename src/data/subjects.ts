export interface Chapter {
  id: string;
  title: string;
}

export interface Subject {
  code: string;
  name: string;
  ltpc: string;
  credits: number;
  type: 'Theory' | 'Practical' | 'Sessional';
  textbook?: string;
  isElective?: boolean;
  electiveCategory?: 'Engineering' | 'Science' | 'GER';
  chapters: Chapter[];
}

export interface ElectiveOption {
  code: string;
  name: string;
  ltpc: string;
  credits: number;
  category: 'Engineering' | 'Science' | 'GER';
  description: string;
  textbook?: string;
  chapters: Chapter[];
}

// Complete Electives Data
export const ENGINEERING_ELECTIVES: ElectiveOption[] = [
  {
    code: 'EE10005',
    name: 'Instrumentation & Automation',
    ltpc: '2-0-0-2',
    credits: 2,
    category: 'Engineering',
    textbook: 'R.K. Rajput, "Electrical and Electronic Measurements and Instruments"',
    description: 'Analog/digital instruments, sensors & transducers, PLC automation, biomedical instruments (ECG, BP, CT, sonography).',
    chapters: [
      { id: 'EE10005_1', title: 'Analog and Digital Instruments' },
      { id: 'EE10005_2', title: 'Sensors and Transducers' },
      { id: 'EE10005_3', title: 'Programmable Logic Controllers (PLC) & Automation' },
      { id: 'EE10005_4', title: 'Biomedical Instruments (ECG, BP, CT, Sonography)' },
    ]
  },
  {
    code: 'CE10001',
    name: 'Basic Civil Engineering',
    ltpc: '2-0-0-2',
    credits: 2,
    category: 'Engineering',
    textbook: 'Dhale & Tajne, "Basics of Civil Engineering"',
    description: 'Surveying, construction materials, geotechnical/hydraulics/environmental/transportation engineering overview.',
    chapters: [
      { id: 'CE10001_1', title: 'Surveying fundamentals and leveling' },
      { id: 'CE10001_2', title: 'Construction materials and structural components' },
      { id: 'CE10001_3', title: 'Geotechnical and Hydraulics Engineering overview' },
      { id: 'CE10001_4', title: 'Environmental and Transportation Engineering basics' },
    ]
  },
  {
    code: 'EC10007',
    name: 'Biosensors and Instrumentation',
    ltpc: '2-0-0-2',
    credits: 2,
    category: 'Engineering',
    textbook: 'R.S. Khanpur, "Handbook of Biomedical Instrumentation"',
    description: 'Biomedical instrumentation, biosensors, ECG/EEG/EMG monitoring, medical imaging (X-ray, CT, MRI, ultrasound).',
    chapters: [
      { id: 'EC10007_1', title: 'Biomedical Instrumentation principles' },
      { id: 'EC10007_2', title: 'Biosensors and bio-signal acquisition' },
      { id: 'EC10007_3', title: 'ECG, EEG, and EMG monitoring systems' },
      { id: 'EC10007_4', title: 'Medical Imaging modalities (X-ray, CT, MRI, Ultrasound)' },
    ]
  },
  {
    code: 'ME10003',
    name: 'Basic Mechanical Engineering',
    ltpc: '2-0-0-2',
    credits: 2,
    category: 'Engineering',
    textbook: 'Sadhu Singh, "Basic Mechanical Engineering"',
    description: 'Thermodynamics/fluid mechanics basics, materials & mechanics of materials, power transmission & robotics, manufacturing processes.',
    chapters: [
      { id: 'ME10003_1', title: 'Thermodynamics and Fluid Mechanics basics' },
      { id: 'ME10003_2', title: 'Engineering Materials & Mechanics of Materials' },
      { id: 'ME10003_3', title: 'Power Transmission & Robotics' },
      { id: 'ME10003_4', title: 'Manufacturing Processes' },
    ]
  }
];

export const SCIENCE_ELECTIVES: ElectiveOption[] = [
  {
    code: 'CH10015',
    name: 'Nanoscience',
    ltpc: '3-0-0-3',
    credits: 3,
    category: 'Science',
    textbook: 'Murty et al., "Textbook of Nanoscience and Nanotechnology"',
    description: 'Nanomaterial classification, synthesis (top-down/bottom-up), characterization (XRD/SEM/TEM/AFM), applications in medicine/cosmetics/energy.',
    chapters: [
      { id: 'CH10015_1', title: 'Classification of Nanomaterials' },
      { id: 'CH10015_2', title: 'Synthesis methods: Top-down vs Bottom-up approaches' },
      { id: 'CH10015_3', title: 'Characterization techniques (XRD, SEM, TEM, AFM)' },
      { id: 'CH10015_4', title: 'Nanotechnology applications in medicine, cosmetics & energy' },
    ]
  },
  {
    code: 'LS10007',
    name: 'Molecular Diagnostics',
    ltpc: '3-0-0-3',
    credits: 3,
    category: 'Science',
    textbook: 'Campbell & Farrell, "Biochemistry", 9th Ed.',
    description: 'Central dogma, PCR/ELISA/Western blotting, NGS, CRISPR diagnostics, bioinformatics & AI in diagnostics.',
    chapters: [
      { id: 'LS10007_1', title: 'Central dogma review and DNA/RNA isolation' },
      { id: 'LS10007_2', title: 'PCR, ELISA, and Western Blotting assays' },
      { id: 'LS10007_3', title: 'Next-Generation Sequencing (NGS) and CRISPR diagnostics' },
      { id: 'LS10007_4', title: 'Bioinformatics & AI integration in medical diagnostics' },
    ]
  },
  {
    code: 'MA10013',
    name: 'Linear Programming',
    ltpc: '3-0-0-3',
    credits: 3,
    category: 'Science',
    textbook: 'Gupta & Hira, "Operations Research"',
    description: 'LPP formulation, Simplex/Big-M/Duality methods, transportation & assignment models, game theory.',
    chapters: [
      { id: 'MA10013_1', title: 'Linear Programming Problem (LPP) formulation & graphical method' },
      { id: 'MA10013_2', title: 'Simplex Method, Big-M, and Duality theory' },
      { id: 'MA10013_3', title: 'Transportation and Assignment models' },
      { id: 'MA10013_4', title: 'Game Theory and strategic decisions' },
    ]
  },
  {
    code: 'PH10009',
    name: 'Smart and Emerging Materials',
    ltpc: '3-0-0-3',
    credits: 3,
    category: 'Science',
    textbook: 'Avadhanulu et al., "A Textbook of Engineering Physics"',
    description: 'Crystal structures, piezoelectrics, shape memory alloys, low-dimensional materials (graphene, quantum dots), superconductivity.',
    chapters: [
      { id: 'PH10009_1', title: 'Crystal structures and lattice defects' },
      { id: 'PH10009_2', title: 'Piezoelectric and ferroelectric materials' },
      { id: 'PH10009_3', title: 'Shape Memory Alloys & Low-dimensional materials (Graphene, Quantum Dots)' },
      { id: 'PH10009_4', title: 'Superconductivity fundamentals & applications' },
    ]
  },
  {
    code: 'PH10013',
    name: 'Introduction to Quantum Technologies',
    ltpc: '3-0-0-3',
    credits: 3,
    category: 'Science',
    textbook: 'Anirban Pathak, "Elements of Quantum Computation and Quantum Communication"',
    description: 'Wave-particle duality, Hilbert space & operators, qubits & entanglement, quantum computing/communication/sensing basics.',
    chapters: [
      { id: 'PH10013_1', title: 'Wave-particle duality & Quantum State postulates' },
      { id: 'PH10013_2', title: 'Hilbert space, operators, and state vectors' },
      { id: 'PH10013_3', title: 'Qubits, Superposition, and Quantum Entanglement' },
      { id: 'PH10013_4', title: 'Quantum computing algorithms, communication & sensing basics' },
    ]
  },
  {
    code: 'CH10013',
    name: 'Geology and Geohazards',
    ltpc: '3-0-0-3',
    credits: 3,
    category: 'Science',
    textbook: 'B.P. Verma, "Engineering Geology and Rock Mechanics"',
    description: 'Minerals & rocks, structural geology, engineering properties of rock/soil, earthquakes/landslides/floods, hazard mitigation.',
    chapters: [
      { id: 'CH10013_1', title: 'Mineralogy and Petrology (Rocks & Minerals)' },
      { id: 'CH10013_2', title: 'Structural Geology and rock deformation' },
      { id: 'CH10013_3', title: 'Engineering properties of soils and rocks' },
      { id: 'CH10013_4', title: 'Geohazards: Earthquakes, landslides, floods & mitigation' },
    ]
  },
  {
    code: 'ID10001',
    name: 'Citizen Science and Open Data',
    ltpc: '3-0-0-3',
    credits: 3,
    category: 'Science',
    textbook: 'Seinfeld & Pandis, "Atmospheric Chemistry and Physics"; Hecker et al., "Citizen Science"',
    description: 'Open science policy, heat transfer & urban heat, air/noise pollution sensing, IoT sensors, data analysis & modelling.',
    chapters: [
      { id: 'ID10001_1', title: 'Open Science policy and community data crowdsourcing' },
      { id: 'ID10001_2', title: 'Heat transfer, microclimate, and Urban Heat Islands' },
      { id: 'ID10001_3', title: 'Air & Noise pollution sensing with IoT sensors' },
      { id: 'ID10001_4', title: 'Data cleaning, spatial analysis & community modelling' },
    ]
  }
];

export const GER_ELECTIVES: ElectiveOption[] = [
  {
    code: 'SY18001',
    name: 'Sports and Yoga',
    ltpc: '0-0-2-1',
    credits: 1,
    category: 'GER',
    description: 'Yoga postures/pranayama, physical education fundamentals, one sport of choice (volleyball/basketball/football/kabaddi/cricket/badminton/swimming), fitness & wellness theory.',
    chapters: [
      { id: 'SY18001_1', title: 'Yoga postures (Asanas) and breathing exercises (Pranayama)' },
      { id: 'SY18001_2', title: 'Physical education & motor fitness development' },
      { id: 'SY18001_3', title: 'Sports skills training (Volleyball/Basketball/Football/Cricket/Badminton/Swimming)' },
      { id: 'SY18001_4', title: 'Wellness, lifestyle disease prevention, and physical assessment' },
    ]
  },
  {
    code: 'ID18001',
    name: 'National Service Scheme (NSS)',
    ltpc: '0-0-2-1',
    credits: 1,
    category: 'GER',
    description: 'NSS history/structure, community service, Indian Constitution & social justice, volunteerism & leadership, field project.',
    chapters: [
      { id: 'ID18001_1', title: 'NSS history, objectives, and organizational setup' },
      { id: 'ID18001_2', title: 'Community development and rural immersion' },
      { id: 'ID18001_3', title: 'Indian Constitution, human rights, and social justice' },
      { id: 'ID18001_4', title: 'Field service project & leadership exercises' },
    ]
  },
  {
    code: 'ID18002',
    name: 'National Cadet Corps (NCC)',
    ltpc: '0-0-2-1',
    credits: 1,
    category: 'GER',
    description: 'NCC structure, armed forces overview, national integration, personality development, disaster management.',
    chapters: [
      { id: 'ID18002_1', title: 'NCC organization, drill, and military history' },
      { id: 'ID18002_2', title: 'National integration and civic duties' },
      { id: 'ID18002_3', title: 'Personality development and leadership principles' },
      { id: 'ID18002_4', title: 'Disaster management and first aid training' },
    ]
  },
  {
    code: 'SA38021',
    name: 'Debate and Public Speaking',
    ltpc: '0-0-2-1',
    credits: 1,
    category: 'GER',
    description: 'Communication fundamentals, public speaking techniques, parliamentary debate, persuasive presentation, mock debates.',
    chapters: [
      { id: 'SA38021_1', title: 'Public speaking foundations and stage confidence' },
      { id: 'SA38021_2', title: 'Speech structuring and persuasive rhetoric' },
      { id: 'SA38021_3', title: 'Parliamentary debate formats and rebuttal techniques' },
      { id: 'SA38021_4', title: 'Mock debates and impromptu speaking sessions' },
    ]
  },
  {
    code: 'SA38011',
    name: 'Hindustani Classical Music',
    ltpc: '0-0-2-1',
    credits: 1,
    category: 'GER',
    description: 'Swara/raga/tala fundamentals, voice training, classical compositions (bhajans, khayal, dhrupad), group recital.',
    chapters: [
      { id: 'SA38011_1', title: 'Swara, Raga, and Tala basics' },
      { id: 'SA38011_2', title: 'Voice culture and ear training' },
      { id: 'SA38011_3', title: 'Study of classical compositions (Khayal, Bhajan, Dhrupad)' },
      { id: 'SA38011_4', title: 'Group performance and raga recognition' },
    ]
  },
  {
    code: 'SA38009',
    name: 'Indian Classical Dance',
    ltpc: '0-0-2-1',
    credits: 1,
    category: 'GER',
    description: 'Major dance forms (Bharatanatyam, Odissi, Kathak, etc.), postures/mudras/expressions, rhythm & stagecraft, group performance.',
    chapters: [
      { id: 'SA38009_1', title: 'Introduction to major Indian classical dance forms' },
      { id: 'SA38009_2', title: 'Basic postures (Sthanakas), hand gestures (Mudras), and facial expressions (Abhinaya)' },
      { id: 'SA38009_3', title: 'Tala, rhythm pattern, and footwork drills' },
      { id: 'SA38009_4', title: 'Stagecraft and group choreography recital' },
    ]
  },
  {
    code: 'SA38031',
    name: 'Quiz and Knowledge Excellence',
    ltpc: '0-0-2-1',
    credits: 1,
    category: 'GER',
    description: 'Quiz formats & techniques, current affairs/general awareness, logical reasoning, audio-visual/rapid-fire rounds, quiz event management.',
    chapters: [
      { id: 'SA38031_1', title: 'Quiz formats and lateral thinking techniques' },
      { id: 'SA38031_2', title: 'Current affairs, history, science & tech knowledge building' },
      { id: 'SA38031_3', title: 'Audio-visual identification and rapid-fire strategies' },
      { id: 'SA38031_4', title: 'Quiz design, hosting, and event execution' },
    ]
  }
];

// Core Subjects List (Scheme A Sem 1 Base)
export const BASE_SEM1_COURSES: Subject[] = [
  {
    code: 'MA11009',
    name: 'Calculus and Differential Equations',
    ltpc: '3-1-0-4',
    credits: 4,
    type: 'Theory',
    textbook: 'Kreyszig, "Advanced Engineering Mathematics", 10th Ed., Wiley',
    chapters: [
      { id: 'MA11009_1', title: "Calculus of several variables, Taylor's series, Maxima/Minima, Lagrange multipliers" },
      { id: 'MA11009_2', title: 'First-order ODEs: separable, exact, integrating factors, linear, Bernoulli' },
      { id: 'MA11009_3', title: 'Second-order Linear ODEs: homogeneous/non-homogeneous, Euler-Cauchy, power series method' },
      { id: 'MA11009_4', title: 'Laplace Transform: shifting theorems, convolution, solving ODEs' },
    ]
  },
  {
    code: 'PH10005',
    name: 'Physics',
    ltpc: '3-0-0-3',
    credits: 3,
    type: 'Theory',
    textbook: 'Avadhanulu, Kshirsagar & Arun Murthy, "A Textbook of Engineering Physics", 11th Ed., S Chand',
    chapters: [
      { id: 'PH10005_1', title: "Wave Optics: interference, diffraction, Newton's rings, Michelson interferometer, diffraction grating" },
      { id: 'PH10005_2', title: "Electromagnetic Theory: vector calculus, Maxwell's equations, EM waves" },
      { id: 'PH10005_3', title: "Quantum Mechanics: wave-particle duality, uncertainty principle, Schrödinger equation, particle in a box, tunnelling" },
      { id: 'PH10005_4', title: 'Semiconductor Physics: energy bands, intrinsic/extrinsic semiconductors, Fermi level' },
      { id: 'PH10005_5', title: 'Laser and Fiber Optics' },
    ]
  },
  {
    code: 'EE10002',
    name: 'Basic Electrical Engineering',
    ltpc: '2-0-0-2',
    credits: 2,
    type: 'Theory',
    textbook: 'V. K. Mehta & Rohit Mehta, "Principles of Electrical Engineering and Electronics", S Chand',
    chapters: [
      { id: 'EE10002_1', title: "DC Circuits: Kirchhoff's laws, source transformation, mesh/nodal analysis, Thevenin/Norton" },
      { id: 'EE10002_2', title: 'AC Circuits: RMS values, phasors, RLC circuits, three-phase circuits' },
      { id: 'EE10002_3', title: 'Magnetic Circuits: flux, MMF, reluctance, BH curve, hysteresis' },
      { id: 'EE10002_4', title: 'Electrical Energy & Safety: transformers, motors, earthing, MCB/RCCB/ELCB' },
    ]
  },
  {
    code: 'LS10005',
    name: 'Science of Living Systems',
    ltpc: '2-0-0-2',
    credits: 2,
    type: 'Theory',
    textbook: 'Vidya Rajesh, "Biology for Engineers", 1st Ed., Cengage Learning India',
    chapters: [
      { id: 'LS10005_1', title: 'Molecular Organization: biomolecules, cell as thermodynamic system, ATP/NADPH' },
      { id: 'LS10005_2', title: 'Programming Code in Living Systems: central dogma, transcription, translation' },
      { id: 'LS10005_3', title: 'Functional Analogy of Biology and Engineering: biomimetics, photosynthesis/solar cells' },
      { id: 'LS10005_4', title: 'Biological and Artificial Intelligence: neurons vs neural networks' },
      { id: 'LS10005_5', title: 'Applications: biosensors, biomining, tissue engineering' },
    ]
  },
  {
    code: 'ID10003',
    name: 'Universal Human Values',
    ltpc: '3-0-0-3',
    credits: 3,
    type: 'Theory',
    textbook: 'R. R. Gaur, R. Sangal & G. P. Bagaria, "Human Values and Professional Ethics", Excel Books',
    chapters: [
      { id: 'ID10003_1', title: 'Self-exploration and basic human aspirations' },
      { id: 'ID10003_2', title: 'Harmony in the human being (Self and Body)' },
      { id: 'ID10003_3', title: 'Harmony in family and society' },
      { id: 'ID10003_4', title: 'Harmony in nature and existence' },
      { id: 'ID10003_5', title: 'Implications for professional ethics' },
    ]
  },
  {
    code: 'PH19001',
    name: 'Physics Laboratory',
    ltpc: '0-0-2-1',
    credits: 1,
    type: 'Practical',
    chapters: [
      { id: 'PH19001_1', title: 'Vernier calipers, screw gauge, spherometer review' },
      { id: 'PH19001_2', title: "Newton's ring — wavelength of monochromatic light" },
      { id: 'PH19001_3', title: 'Michelson interferometer — sodium D-line wavelength difference' },
      { id: 'PH19001_4', title: 'Plane diffraction grating element' },
      { id: 'PH19001_5', title: "Planck's constant using photocell" },
      { id: 'PH19001_6', title: 'Photocell characteristics' },
      { id: 'PH19001_7', title: 'Solar cell characteristics' },
      { id: 'PH19001_8', title: "Young's modulus by bending of beam" },
      { id: 'PH19001_9', title: "Poisson's ratio of rubber" },
      { id: 'PH19001_10', title: 'Rigidity modulus by dynamic method' },
      { id: 'PH19001_11', title: "Refractive index by Boy's method" },
      { id: 'PH19001_12', title: 'Numerical aperture of optical fibre' },
      { id: 'PH19001_13', title: 'Acceleration due to gravity — bar pendulum' },
      { id: 'PH19001_14', title: 'Damped harmonic oscillation — simple pendulum' },
      { id: 'PH19001_15', title: 'Velocity of sound — resonance column' },
      { id: 'PH19001_16', title: 'Dielectric/multiferroic material studies' },
      { id: 'PH19001_17', title: 'Laser diffraction studies' },
    ]
  },
  {
    code: 'CS13003',
    name: 'Introduction to Computer Programming',
    ltpc: '0-2-4-4',
    credits: 4,
    type: 'Practical',
    textbook: 'E. Balagurusamy, "Programming in ANSI C", 8th Ed.',
    chapters: [
      { id: 'CS13003_1', title: 'Computer basics, number systems, algorithms, flowcharts, pseudo-code' },
      { id: 'CS13003_2', title: 'Program constructs: data types, operators, control structures (branching & looping)' },
      { id: 'CS13003_3', title: 'Arrays and Strings' },
      { id: 'CS13003_4', title: 'Functions: library/user-defined, parameter passing, recursion' },
      { id: 'CS13003_5', title: 'Pointers and dynamic memory allocation' },
      { id: 'CS13003_6', title: 'Structures and Unions' },
      { id: 'CS13003_7', title: 'File handling' },
    ]
  },
  {
    code: 'ME18001',
    name: 'Workshop',
    ltpc: '0-0-2-1',
    credits: 1,
    type: 'Sessional',
    textbook: 'K.C. John, "Mechanical Workshop Practice", Prentice Hall India',
    chapters: [
      { id: 'ME18001_1', title: 'Fitting' },
      { id: 'ME18001_2', title: 'Welding' },
      { id: 'ME18001_3', title: 'Turning operations' },
      { id: 'ME18001_4', title: 'Sheet metal operations' },
    ]
  }
];

// Core Subjects List (Scheme A Sem 2 Base)
export const BASE_SEM2_COURSES: Subject[] = [
  {
    code: 'HS10003',
    name: 'English Communication Skills',
    ltpc: '2-0-0-2',
    credits: 2,
    type: 'Theory',
    textbook: 'Rizvi & Patnaik (eds.), "Effective Technical Communication", TMH; Raman & Sharma, "Technical Communication: Principles and Practice", OUP',
    chapters: [
      { id: 'HS10003_1', title: "Fundamentals of professional communication + 'The Gift of the Magi'" },
      { id: 'HS10003_2', title: "Verbal/non-verbal communication, listening & speaking + 'Thank You, Ma'am'" },
      { id: 'HS10003_3', title: "Effective reading skills + 'The Fun They Had'" },
      { id: 'HS10003_4', title: "Business writing, technical reports, referencing + 'On Letter Writing'" },
    ]
  },
  {
    code: 'MA11011',
    name: 'Linear Algebra and Fourier Analysis',
    ltpc: '3-1-0-4',
    credits: 4,
    type: 'Theory',
    textbook: 'Kreyszig, "Advanced Engineering Mathematics", 10th Ed., Wiley',
    chapters: [
      { id: 'MA11011_1', title: 'Vector spaces and systems of linear equations (Gauss elimination/Jacobi/Seidel)' },
      { id: 'MA11011_2', title: 'Eigenvalues and eigenvectors, diagonalization' },
      { id: 'MA11011_3', title: 'Numerical methods: root-finding, interpolation, integration, IVPs (Runge-Kutta)' },
      { id: 'MA11011_4', title: 'Fourier series and Fourier transform' },
    ]
  },
  {
    code: 'CH10009',
    name: 'Chemistry',
    ltpc: '3-0-0-3',
    credits: 3,
    type: 'Theory',
    textbook: 'P. Rath, "Engineering Chemistry", Cengage Learning India',
    chapters: [
      { id: 'CH10009_1', title: 'Chemical thermodynamics: Gibbs free energy, equilibrium, Clausius-Clapeyron' },
      { id: 'CH10009_2', title: 'Chemical kinetics and catalysis: rate laws, enzyme catalysis' },
      { id: 'CH10009_3', title: 'Electrochemical energy systems: Nernst equation, fuel cells, batteries' },
      { id: 'CH10009_4', title: 'Material characterization: UV-Vis, IR/Raman, XPS spectroscopy' },
      { id: 'CH10009_5', title: 'Functional materials: magnetic materials, liquid crystals' },
    ]
  },
  {
    code: 'EC10005',
    name: 'Basic Electronics Circuits and Logic Design',
    ltpc: '3-0-0-3',
    credits: 3,
    type: 'Theory',
    textbook: 'Theraja & Sedha, "Principles of Electronic Devices and Circuits", Revised Ed., S Chand',
    chapters: [
      { id: 'EC10005_1', title: 'Analog circuits: diodes, BJT/JFET, Op-Amp basics' },
      { id: 'EC10005_2', title: 'Binary codes and Boolean algebra, K-Maps' },
      { id: 'EC10005_3', title: 'Combinational circuits: adders, subtractors, decoders, MUX/DEMUX' },
      { id: 'EC10005_4', title: 'Sequential circuits: flip-flops, shift registers, counters' },
    ]
  },
  {
    code: 'CH19001',
    name: 'Chemistry Laboratory',
    ltpc: '0-0-2-1',
    credits: 1,
    type: 'Practical',
    chapters: [
      { id: 'CH19001_1', title: 'Water hardness by EDTA method' },
      { id: 'CH19001_2', title: 'NaOH/Na2CO3 mixture estimation' },
      { id: 'CH19001_3', title: "KMnO4 standardization / Mohr's salt Fe2+ estimation" },
      { id: 'CH19001_4', title: "Dissolved oxygen — Winkler's method" },
      { id: 'CH19001_5', title: 'Potentiometric titration for Fe2+' },
      { id: 'CH19001_6', title: 'Rate constant of ethyl acetate hydrolysis' },
      { id: 'CH19001_7', title: 'Chloride estimation — argentometric method' },
      { id: 'CH19001_8', title: 'pH-metric acid-base titration' },
      { id: 'CH19001_9', title: 'Conductometric titration' },
      { id: 'CH19001_10', title: "Beer-Lambert's law verification" },
    ]
  },
  {
    code: 'EC19001',
    name: 'Electronic Circuit and Logic Laboratory',
    ltpc: '0-0-2-1',
    credits: 1,
    type: 'Practical',
    chapters: [
      { id: 'EC19001_1', title: 'Component identification and characterization' },
      { id: 'EC19001_2', title: 'Full-wave rectified power supply' },
      { id: 'EC19001_3', title: 'Transistor-based logic gates' },
      { id: 'EC19001_4', title: 'Op-amp signal conditioning circuits' },
      { id: 'EC19001_5', title: 'Adder/subtractor circuits' },
      { id: 'EC19001_6', title: 'Multiplexer/demultiplexer circuits' },
      { id: 'EC19001_7', title: 'Flip-flops and conversions' },
      { id: 'EC19001_8', title: 'Asynchronous counters (JK flip-flops)' },
      { id: 'EC19001_9', title: 'Shift registers' },
    ]
  },
  {
    code: 'CE18003',
    name: 'Engineering Drawing & Graphics',
    ltpc: '0-1-2-2',
    credits: 2,
    type: 'Sessional',
    chapters: [
      { id: 'CE18003_1', title: 'Engineering graphics fundamentals, BIS standards, lettering' },
      { id: 'CE18003_2', title: 'Projection of points and lines' },
      { id: 'CE18003_3', title: 'Projection of planes' },
      { id: 'CE18003_4', title: 'Projection of solids and sections' },
      { id: 'CE18003_5', title: 'Computer Aided Drafting (CAD) basics' },
    ]
  },
  {
    code: 'HS18003',
    name: 'English Communication Laboratory',
    ltpc: '0-0-2-1',
    credits: 1,
    type: 'Sessional',
    chapters: [
      { id: 'HS18003_1', title: 'Reading & listening comprehension strategies' },
      { id: 'HS18003_2', title: 'Situational vocabulary and phrasal verbs' },
      { id: 'HS18003_3', title: 'Self-introduction / mock interview' },
      { id: 'HS18003_4', title: 'Netiquette and email writing' },
      { id: 'HS18003_5', title: 'Resume writing (incl. LinkedIn)' },
      { id: 'HS18003_6', title: 'Group discussion' },
      { id: 'HS18003_7', title: 'PPT presentation skills' },
    ]
  }
];
