export interface PrerequisiteCheckItem {
  id: string;
  label: string;
  classLevel: string;
}

export interface RelatedKnowledgeItem {
  id: string;
  label: string;
  category: string;
}

export interface SubjectPrerequisiteData {
  subjectCode: string;
  subjectName: string;
  chapterId: string;
  chapterTitle: string;
  class6to12Prerequisites: PrerequisiteCheckItem[];
  suggestions: string[];
  newKnowledgeTopics: RelatedKnowledgeItem[];
}

export const SUBJECT_PREREQUISITE_MAP: SubjectPrerequisiteData[] = [
  // 1. CALCULUS (MA11009)
  {
    subjectCode: 'MA11009',
    subjectName: 'Calculus and Differential Equations',
    chapterId: 'ma1_ch1',
    chapterTitle: 'Review of Calculus & Functions of Several Variables',
    class6to12Prerequisites: [
      { id: 'req_ma1_1', label: 'Class 6-7 Fractions, Decimals & Percentages', classLevel: 'Class 6-7' },
      { id: 'req_ma1_2', label: 'Class 8 Exponents & Polynomial Factorisation', classLevel: 'Class 8' },
      { id: 'req_ma1_3', label: 'Class 9 Coordinate Geometry & 2D Graphs', classLevel: 'Class 9' },
      { id: 'req_ma1_4', label: 'Class 11 Sets, Relations & Function Notation f(x)', classLevel: 'Class 11' },
      { id: 'req_ma1_5', label: 'Class 11 Limits & Derivatives Fundamentals', classLevel: 'Class 11' },
      { id: 'req_ma1_6', label: 'Class 12 Chain Rule, Product & Quotient Differentiation Rules', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Watch 3Blue1Brown "Essence of Calculus" videos to visualize tangent slopes geometrically.',
      'Solve 5 basic Class 11 limit problems before attempting multivariable partial derivatives.',
      'Refer to Erwin Kreyszig Chapter 1 (Pages 21-38) for exact university definitions.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ma1_1', label: 'Partial Derivatives (f_x, f_y) & Gradient Vectors', category: 'Multivariable Calculus' },
      { id: 'kn_ma1_2', label: 'Taylor & Maclaurin Series Expansions', category: 'Infinite Series' },
      { id: 'kn_ma1_3', label: 'Lagrange Multipliers for Constrained Maxima/Minima', category: 'Optimization' }
    ]
  },
  {
    subjectCode: 'MA11009',
    subjectName: 'Calculus and Differential Equations',
    chapterId: 'ma1_ch3',
    chapterTitle: 'First-Order ODEs: Separable, Exact & Bernoulli Equations',
    class6to12Prerequisites: [
      { id: 'req_ode_1', label: 'Class 7 Simple Algebraic Equations', classLevel: 'Class 7' },
      { id: 'req_ode_2', label: 'Class 12 Indefinite Integration & Substitution Rule', classLevel: 'Class 12' },
      { id: 'req_ode_3', label: 'Class 12 Differential Equations Basics (dy/dx = f(x,y))', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Master Integration by Parts and Partial Fractions from Class 12 NCERT first.',
      'Test exactness using (dM/dy = dN/dx) before calculating integrating factors.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ode_1', label: 'Integrating Factors e^(Integral P dx)', category: 'ODE Methods' },
      { id: 'kn_ode_2', label: 'Bernoulli Non-Linear Differential Equations', category: 'ODE Substitution' }
    ]
  },

  // 2. PHYSICS (PH10005)
  {
    subjectCode: 'PH10005',
    subjectName: 'Physics',
    chapterId: 'ph1_ch1',
    chapterTitle: 'Wave Optics: Interference & Michelson Interferometer',
    class6to12Prerequisites: [
      { id: 'req_ph1_1', label: 'Class 6 Light & Shadows Basics', classLevel: 'Class 6' },
      { id: 'req_ph1_2', label: 'Class 10 Light Reflection & Refraction Rules', classLevel: 'Class 10' },
      { id: 'req_ph1_3', label: 'Class 11 Simple Harmonic Motion (SHM) Wave Superposition', classLevel: 'Class 11' },
      { id: 'req_ph1_4', label: 'Class 12 Wave Optics: Young Double Slit Experiment & Phase Difference', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Revise constructive vs destructive interference condition (Path difference = n*lambda vs (2n+1)*lambda/2).',
      'Draw ray diagram for Michelson Interferometer beam splitter.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ph1_1', label: 'Newtons Rings Fringe Diameter Formula', category: 'Interference' },
      { id: 'kn_ph1_2', label: 'Michelson Interferometer Distance Measurement', category: 'Optical Instruments' }
    ]
  },

  // 3. BASIC ELECTRICAL (EE10002)
  {
    subjectCode: 'EE10002',
    subjectName: 'Basic Electrical Engineering',
    chapterId: 'ee1_ch1',
    chapterTitle: 'DC Circuits: KVL, KCL, Nodal/Mesh & Network Theorems',
    class6to12Prerequisites: [
      { id: 'req_ee1_1', label: 'Class 7 Electric Current & Battery Circuits', classLevel: 'Class 7' },
      { id: 'req_ee1_2', label: 'Class 8 Linear Equations in 2 Variables (Simultaneous Equations)', classLevel: 'Class 8-9' },
      { id: 'req_ee1_3', label: 'Class 10 Ohm Law (V = IR), Series & Parallel Resistors', classLevel: 'Class 10' },
      { id: 'req_ee1_4', label: 'Class 12 Kirchhoff Current & Voltage Laws (KCL & KVL)', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Assign loop currents clockwise and write mesh equations systematically.',
      'Remember: Thevenin voltage is open-circuit voltage; Norton current is short-circuit current.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ee1_1', label: 'Nodal Analysis Matrix Solving', category: 'Circuit Theory' },
      { id: 'kn_ee1_2', label: 'Thevenin & Norton Equivalent Circuits', category: 'Network Theorems' },
      { id: 'kn_ee1_3', label: 'Maximum Power Transfer Theorem (R_L = R_th)', category: 'Power Analysis' }
    ]
  },
  {
    subjectCode: 'EE10002',
    subjectName: 'Basic Electrical Engineering',
    chapterId: 'ee1_ch2',
    chapterTitle: 'AC Circuits, 3-Phase Systems & Magnetic Circuits',
    class6to12Prerequisites: [
      { id: 'req_ee1_ac1', label: 'Class 11 Complex Numbers (a + jb = r∠θ)', classLevel: 'Class 11' },
      { id: 'req_ee1_ac2', label: 'Class 12 AC Alternating Current (RMS, Peak Values & Phasors)', classLevel: 'Class 12' },
      { id: 'req_ee1_ac3', label: 'Class 12 Inductors (L), Capacitors (C) & Reactance (X_L, X_C)', classLevel: 'Class 12' },
      { id: 'req_ee1_mag1', label: 'Class 12 Electromagnetic Induction & Solenoids', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Remember Star connection: V_Line = √3 * V_Phase, I_Line = I_Phase.',
      'Remember Delta connection: V_Line = V_Phase, I_Line = √3 * I_Phase.',
      'In Series RL, current lags voltage by θ; in Series RC, current leads voltage by θ.',
      'Magnetic reluctance S = l / (a * μ0 * μr) is analogous to electrical resistance R = l / (a * σ).'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ee1_ac1', label: 'Complex Impedance (Z = R + jX) & Power Factor (cos θ)', category: 'AC Circuits' },
      { id: 'kn_ee1_ac2', label: 'Active (P), Reactive (Q) & Apparent Power (S = P + jQ)', category: 'Complex Power' },
      { id: 'kn_ee1_3p1', label: '3-Phase Star (Y) vs Delta (Δ) Balanced Systems', category: '3-Phase Power' },
      { id: 'kn_ee1_mag2', label: 'B-H Magnetisation Curve & Hysteresis Loss Loop', category: 'Magnetic Circuits' }
    ]
  },

  // 4. C PROGRAMMING (CS13003)
  {
    subjectCode: 'CS13003',
    subjectName: 'Introduction to Computer Programming (C Language)',
    chapterId: 'cs1_ch5',
    chapterTitle: 'Pointers, Memory Allocation & Dynamic Arrays',
    class6to12Prerequisites: [
      { id: 'req_c1', label: 'Class 6 Integers & Hexadecimal RAM Address Concept', classLevel: 'Class 6' },
      { id: 'req_c2', label: 'Class 7 Variables & Empty Box Concept', classLevel: 'Class 7' },
      { id: 'req_c3', label: 'Class 10 Logic Gates & Boolean Truth Values', classLevel: 'Class 10' },
      { id: 'req_c4', label: 'C Variables, Data Types & Address-of (&) Operator', classLevel: 'C Basics' },
      { id: 'req_c5', label: 'C Functions & Parameter Passing (Call by Value)', classLevel: 'C Basics' }
    ],
    suggestions: [
      'Draw RAM memory grid boxes on paper with addresses (e.g. Address 1004 holds value 25).',
      'Remember: & = Address-of operator, * = Value-at-address operator.',
      'Refer to E. Balagurusamy Chapter 11 (Pages 140-182) for step-by-step C pointer examples.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_c1', label: 'Pointer Arithmetic & Array Indexing (ptr + i)', category: 'C Memory' },
      { id: 'kn_c2', label: 'Dynamic Memory Allocation (malloc, calloc, realloc, free)', category: 'Heap Management' },
      { id: 'kn_c3', label: 'Double Pointers (int **ptr) & Pointers to Functions', category: 'Advanced C' }
    ]
  },

  // 5. LINEAR ALGEBRA & FOURIER (MA11011)
  {
    subjectCode: 'MA11011',
    subjectName: 'Linear Algebra, Numerical Methods & Fourier Analysis',
    chapterId: 'ma2_ch1',
    chapterTitle: 'Unit-I: Vector Spaces & Systems of Linear Equations (Ch 7.1, 7.3, 7.4, 7.8, 7.9, 20.3)',
    class6to12Prerequisites: [
      { id: 'req_la1', label: 'Class 9 Linear Equations in Two Variables', classLevel: 'Class 9' },
      { id: 'req_la2', label: 'Class 12 Matrices & Determinants (Row/Column Operations)', classLevel: 'Class 12' },
      { id: 'req_la3', label: 'Class 12 Vector Algebra (Dot & Cross Products)', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Practice Gauss-Jordan elimination to convert matrices into Row Echelon form.',
      'Watch 3Blue1Brown "Essence of Linear Algebra" for visual intuition on vector spaces.',
      'Refer to Erwin Kreyszig 10th Edition Chapter 7 & Jain, Iyengar & Jain for Numerical Methods.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_la1', label: 'Matrix Rank & Consistency of Linear Systems (AX = B)', category: 'Linear Systems' },
      { id: 'kn_la2', label: 'Eigenvalues & Eigenvectors (det(A - lambda*I) = 0)', category: 'Spectral Theory' },
      { id: 'kn_la3', label: 'Fourier Series & Harmonic Analysis', category: 'Signal Processing' }
    ]
  },

  // 5.1 CHEMISTRY PRACTICAL (CH19001)
  {
    subjectCode: 'CH19001',
    subjectName: 'Chemistry Laboratory (Practical)',
    chapterId: 'chlab_expt1',
    chapterTitle: 'Expt 1: Determination of Hardness of Water Sample (EDTA Method)',
    class6to12Prerequisites: [
      { id: 'req_chlab_1', label: 'Class 7 Acids, Bases, Salts & Indicators', classLevel: 'Class 7' },
      { id: 'req_chlab_2', label: 'Class 9 Molar Concentration & Titration Calculations', classLevel: 'Class 9' },
      { id: 'req_chlab_3', label: 'Class 12 Buffer Solutions & EDTA Complexometry', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Understand Eriochrome Black T (EBT) buffer pH 10 wine-red to blue color transition.',
      'Always rinse burette with titrant and pipette with solution before titration.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_chlab_1', label: 'EDTA Complexometric Titration & Total/Permanent Hardness', category: 'Volumetric Analysis' },
      { id: 'kn_chlab_2', label: 'Spectrophotometric Beer-Lambert Law Calibration', category: 'Instrumental Analysis' },
      { id: 'kn_chlab_3', label: 'Synthesis & Size Determination of ZnO/Silver Nanoparticles', category: 'Nanotechnology Lab' }
    ]
  },

  // 6. BASIC ELECTRONICS (EC10005)
  {
    subjectCode: 'EC10005',
    subjectName: 'Basic Electronics Circuits and Logic Design',
    chapterId: 'ec1_ch2',
    chapterTitle: 'Boolean Algebra, K-Maps & Combinational Logic',
    class6to12Prerequisites: [
      { id: 'req_ec1', label: 'Class 6 Binary Number Basics (0 & 1)', classLevel: 'Class 6' },
      { id: 'req_ec2', label: 'Class 10 Truth Tables & AND/OR/NOT Logic Gates', classLevel: 'Class 10' },
      { id: 'req_ec3', label: 'Class 12 Semiconductor p-n Junction Diodes', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Draw K-Map 2x2 and 4x4 grids with Gray Code labels (00, 01, 11, 10).',
      'Group adjacent 1s in powers of 2 (pairs, quads, octets).'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ec1', label: 'K-Map Minimization (SOP & POS forms)', category: 'Digital Logic' },
      { id: 'kn_ec2', label: 'Combinational Circuits: Half/Full Adders & Multiplexers (MUX)', category: 'Logic Design' }
    ]
  },

  // 7. DATA STRUCTURES (CS21001)
  {
    subjectCode: 'CS21001',
    subjectName: 'Data Structures',
    chapterId: 'sem3_ds_2',
    chapterTitle: 'Stacks, Queues & Linked Lists',
    class6to12Prerequisites: [
      { id: 'req_ds1', label: 'Class 6 Array Indexing Basics', classLevel: 'Class 6' },
      { id: 'req_ds2', label: 'C Programming Array Basics & Structs', classLevel: 'C Basics' },
      { id: 'req_ds3', label: 'C Pointers & Memory Allocation (malloc/free)', classLevel: 'C Memory' }
    ],
    suggestions: [
      'Understand how node.next holds the RAM address of the next node.',
      'Practice drawing pointer links on paper before writing code in C.',
      'Refer to Horowitz & Sahani Data Structures in C (Pages 90-150).'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ds1', label: 'Singly, Doubly & Circular Linked List Operations', category: 'Data Structures' },
      { id: 'kn_ds2', label: 'Stack Implementation (LIFO) & Queue Implementation (FIFO)', category: 'Abstract Types' },
      { id: 'kn_ds3', label: 'Binary Search Trees (BST) & AVL Balancing', category: 'Trees' }
    ]
  },

  // 8. DISCRETE STRUCTURES (MA21002)
  {
    subjectCode: 'MA21002',
    subjectName: 'Discrete Structures',
    chapterId: 'sem4_ds_1',
    chapterTitle: 'Propositional Logic, Predicates & Graph Theory',
    class6to12Prerequisites: [
      { id: 'req_dm1', label: 'Class 10 Truth Tables & Implication P => Q', classLevel: 'Class 10' },
      { id: 'req_dm2', label: 'Class 11 Sets, Subsets, Power Sets & Venn Diagrams', classLevel: 'Class 11' },
      { id: 'req_dm3', label: 'Class 11 Principle of Mathematical Induction', classLevel: 'Class 11' }
    ],
    suggestions: [
      'Master De Morgan Laws: ~(P AND Q) = ~P OR ~Q.',
      'Read Kenneth Rosen Discrete Mathematics Chapter 1 & 2.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_dm1', label: 'Equivalence Relations & Hasse Diagrams', category: 'Discrete Math' },
      { id: 'kn_dm2', label: 'Graph Connectivity, Eulerian & Hamiltonian Paths', category: 'Graph Theory' }
    ]
  },

  // 9. OPERATING SYSTEMS (CS20002)
  {
    subjectCode: 'CS20002',
    subjectName: 'Operating Systems',
    chapterId: 'sem4_os_2',
    chapterTitle: 'CPU Scheduling, Semaphores & Deadlocks',
    class6to12Prerequisites: [
      { id: 'req_os1', label: 'Class 6 Basic Computer OS Services', classLevel: 'Class 6' },
      { id: 'req_os2', label: 'Data Structures Queue (FIFO) Concept', classLevel: 'Data Structures' },
      { id: 'req_os3', label: 'C Programming Process Execution', classLevel: 'C Basics' }
    ],
    suggestions: [
      'Draw Gantt charts for FCFS, SJF, and Round Robin scheduling.',
      'Understand Banker Algorithm matrix representation for deadlock avoidance.',
      'Refer to Silberschatz Operating System Concepts Chapter 5 & 6.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_os1', label: 'Process Synchronization & Semaphores (Wait/Signal)', category: 'Concurrency' },
      { id: 'kn_os2', label: 'Banker Algorithm for Deadlock Avoidance', category: 'Deadlocks' },
      { id: 'kn_os3', label: 'Virtual Memory & Page Replacement (LRU, FIFO)', category: 'Memory Management' }
    ]
  },

  // 10. DATABASE MANAGEMENT SYSTEMS (CS20006)
  {
    subjectCode: 'CS20006',
    subjectName: 'Database Management Systems',
    chapterId: 'sem4_db_3',
    chapterTitle: 'Normalization: 1NF, 2NF, 3NF & BCNF',
    class6to12Prerequisites: [
      { id: 'req_db1', label: 'Class 7 Set Intersection & Union Operations', classLevel: 'Class 7' },
      { id: 'req_db2', label: 'Class 11 Relations & Function Mappings (1-to-1, Many-to-1)', classLevel: 'Class 11' }
    ],
    suggestions: [
      'Find candidate keys using functional dependency closures (X+).',
      'Remember: 3NF eliminates transitive dependencies; BCNF requires left side of every FD to be a super key.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_db1', label: 'Functional Dependency Closures & Minimal Cover', category: 'Database Normalization' },
      { id: 'kn_db2', label: 'ACID Properties & Transaction Serializability', category: 'Transactions' }
    ]
  },

  // 11. ALGORITHMS DAA (CS30001)
  {
    subjectCode: 'CS30001',
    subjectName: 'Design and Analysis of Algorithms',
    chapterId: 'sem5_daa_1',
    chapterTitle: 'Asymptotic Analysis & Recurrences (Master Theorem)',
    class6to12Prerequisites: [
      { id: 'req_daa1', label: 'Class 8 Logarithms & Exponential Growth', classLevel: 'Class 8' },
      { id: 'req_daa2', label: 'Class 10 Arithmetic & Geometric Progressions (AP/GP)', classLevel: 'Class 10' },
      { id: 'req_daa3', label: 'Class 11 Mathematical Induction', classLevel: 'Class 11' }
    ],
    suggestions: [
      'Memorize Master Theorem formula: T(n) = a*T(n/b) + f(n).',
      'Watch Abdul Bari DAA playlist on YouTube.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_daa1', label: 'Big-O, Big-Omega & Big-Theta Bounds', category: 'Algorithm Complexity' },
      { id: 'kn_daa2', label: 'Dynamic Programming (LCS, Knapsack, Matrix Chain)', category: 'Algorithm Design' }
    ]
  },

  // 12. MACHINE LEARNING (CS31002)
  {
    subjectCode: 'CS31002',
    subjectName: 'Machine Learning',
    chapterId: 'sem6_ml_4',
    chapterTitle: 'Neural Networks, Perceptrons & Backpropagation',
    class6to12Prerequisites: [
      { id: 'req_ml1', label: 'Class 9 Linear Equations in Two Variables (y = mx + c)', classLevel: 'Class 9' },
      { id: 'req_ml2', label: 'Class 12 Matrix Multiplication & Vector Dot Products', classLevel: 'Class 12' },
      { id: 'req_ml3', label: 'Class 12 Partial Derivatives & Chain Rule Differentiation', classLevel: 'Class 12' },
      { id: 'req_ml4', label: 'Probability Distributions & Expectation', classLevel: 'College Math' }
    ],
    suggestions: [
      'Understand how Gradient Descent uses negative gradient vector to update weights (w = w - lr * dw).',
      'Watch Andrew Ng Machine Learning Course videos.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ml1', label: 'Multilayer Perceptrons (MLP) & Activation Functions (ReLU, Sigmoid)', category: 'Deep Learning' },
      { id: 'kn_ml2', label: 'Gradient Descent & Backpropagation Algorithm', category: 'Optimization' }
    ]
  },

  // 13. UNIVERSAL HUMAN VALUES (ID10003)
  {
    subjectCode: 'ID10003',
    subjectName: 'Universal Human Values',
    chapterId: 'uhv_ch1',
    chapterTitle: 'Module 1: Value Education, Self-Exploration & Natural Acceptance',
    class6to12Prerequisites: [
      { id: 'req_uhv1', label: 'Class 6-8 Value Education, Moral Science & Civics', classLevel: 'Class 6-8' },
      { id: 'req_uhv2', label: 'Class 9-10 Fundamental Duties & Environmental Awareness', classLevel: 'Class 9-10' },
      { id: 'req_uhv3', label: 'Class 11-12 Critical Reasoning & Self-Reflection', classLevel: 'Class 11-12' }
    ],
    suggestions: [
      'Reflect on Natural Acceptance vs arbitrary personal likings/dislikings.',
      'Study R.R. Gaur Textbook Chapter 1-2 for university exam questions.',
      'Differentiate clearly between Intention and Competence in relationships.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_uhv1', label: 'Sentient I vs Material Body Co-existence', category: 'Human Harmony' },
      { id: 'kn_uhv2', label: 'Sanyam (Self-regulation) & Swasthya (Health)', category: 'Self-Management' },
      { id: 'kn_uhv3', label: '9 Universal Values in Relationships & Undivided Society', category: 'Social Harmony' },
      { id: 'kn_uhv4', label: '4 Orders of Nature & Eco-Friendly Production Systems', category: 'Professional Ethics' }
    ]
  }
];
