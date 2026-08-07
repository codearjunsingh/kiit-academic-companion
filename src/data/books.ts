export interface BookIndexChapter {
  chapterNumber: string | number;
  chapterTitle: string;
  pageRange?: string;
  subtopics: string[];
}

export interface PhysicalBook {
  id: string;
  title: string;
  author: string;
  publisher: string;
  edition: string;
  courseCode: string;
  courseName: string;
  schemeApplies: string;
  coverColor: string;
  recommendedFor: string;
  index: BookIndexChapter[];
}

export const OFFICIAL_FIRST_YEAR_TEXTBOOKS: PhysicalBook[] = [
  {
    id: 'book_c_balagurusamy',
    title: 'Programming in ANSI C',
    author: 'E. Balagurusamy',
    publisher: 'McGraw Hill',
    edition: '9th Edition',
    courseCode: 'CS13003',
    courseName: 'Introduction to Computer Programming',
    schemeApplies: 'Scheme A (Sem 1) / Scheme B (Sem 2)',
    coverColor: 'from-amber-700 to-orange-900',
    recommendedFor: 'C Control Structures, Arrays, Strings, Pointers, Functions & File Handling',
    index: [
      { chapterNumber: 1, chapterTitle: 'Introduction to Computing', pageRange: 'pp. 1-19', subtopics: ['Components of a Computer', 'Hardware & Software', 'Programming Generations', 'Algorithms & Flowcharts'] },
      { chapterNumber: 2, chapterTitle: 'Overview of C', pageRange: 'pp. 20-42', subtopics: ['History & Importance of C', 'Sample C Programs', 'Structure of C Programs', 'Executing C on Linux/Windows'] },
      { chapterNumber: 3, chapterTitle: 'Constants, Variables and Data Types', pageRange: 'pp. 43-72', subtopics: ['C Tokens', 'Keywords & Identifiers', 'Constants & Variables', 'Data Types & Storage Classes'] },
      { chapterNumber: 4, chapterTitle: 'Operators and Expressions', pageRange: 'pp. 73-105', subtopics: ['Arithmetic, Relational, Logical Operators', 'Increment & Decrement', 'Bitwise & Special Operators', 'Precedence & Associativity'] },
      { chapterNumber: 5, chapterTitle: 'Managing Input and Output Operations', pageRange: 'pp. 106-136', subtopics: ['Formatted Input (scanf)', 'Formatted Output (printf)', 'Single Character I/O (getchar/putchar)'] },
      { chapterNumber: 6, chapterTitle: 'Decision Making and Branching', pageRange: 'pp. 137-179', subtopics: ['Simple if Statement', 'if...else & Nested if', 'else...if Ladder', 'Switch Statement & goto'] },
      { chapterNumber: 7, chapterTitle: 'Decision Making and Looping', pageRange: 'pp. 180-224', subtopics: ['while Loop', 'do...while Loop', 'for Loop', 'Jumps in Loops (break & continue)'] },
      { chapterNumber: 8, chapterTitle: 'Arrays', pageRange: 'pp. 225-272', subtopics: ['1D Array Declaration & Initialization', '2D Arrays & Matrices', 'Multidimensional Arrays', 'Dynamic Arrays'] },
      { chapterNumber: 9, chapterTitle: 'Character Arrays and Strings', pageRange: 'pp. 273-306', subtopics: ['Declaring String Variables', 'Reading & Writing Strings', 'String Handling Functions (strcpy, strcat, strcmp, strlen)'] },
      { chapterNumber: 10, chapterTitle: 'User-Defined Functions', pageRange: 'pp. 307-365', subtopics: ['Function Prototypes & Definitions', 'Call-by-Value & Call-by-Reference', 'Recursion', 'Passing Arrays & Strings to Functions'] },
      { chapterNumber: 11, chapterTitle: 'Structures and Unions', pageRange: 'pp. 366-401', subtopics: ['Defining Structures', 'Array of Structures', 'Structures within Structures', 'Unions & Bit Fields'] },
      { chapterNumber: 12, chapterTitle: 'Pointers', pageRange: 'pp. 402-443', subtopics: ['Pointer Declarations & Dereferencing', 'Pointer Arithmetic', 'Pointers and Arrays', 'Pointers and Functions'] },
      { chapterNumber: 13, chapterTitle: 'File Management in C', pageRange: 'pp. 444-468', subtopics: ['Defining & Opening Files (fopen, fclose)', 'Input/Output on Files (fgetc, fputc, fprintf, fscanf)', 'Random Access to Files (fseek, ftell, rewind)'] },
      { chapterNumber: 14, chapterTitle: 'Dynamic Memory Allocation and Linked Lists', pageRange: 'pp. 469-505', subtopics: ['malloc, calloc, realloc & free', 'Concepts of Linked Lists', 'Creating, Inserting & Deleting Nodes'] },
      { chapterNumber: 15, chapterTitle: 'The Preprocessor', pageRange: 'pp. 506-520', subtopics: ['Macro Substitution (#define)', 'File Inclusion (#include)', 'Compiler Control Directives'] }
    ]
  },
  {
    id: 'book_physics_pandey',
    title: 'Engineering Physics',
    author: 'B.K. Pandey & S. Chaturvedi',
    publisher: 'Cengage',
    edition: '2nd Edition',
    courseCode: 'PH10005',
    courseName: 'Physics',
    schemeApplies: 'Scheme A (Sem 1) / Scheme B (Sem 2)',
    coverColor: 'from-amber-600 to-yellow-900',
    recommendedFor: 'Wave Optics, Maxwell Equations, Quantum Mechanics, Semiconductors & Lasers',
    index: [
      { chapterNumber: 'Unit I', chapterTitle: 'Theory of Relativity', pageRange: 'pp. 1.3-1.47', subtopics: ['Galilean Transformation', 'Michelson-Morley Experiment', 'Special Theory of Relativity', 'Length Contraction & Time Dilation', 'Mass-Energy Equivalence (E=mc²)'] },
      { chapterNumber: 'Unit II', chapterTitle: 'Sound Wave and Its Applications', pageRange: 'pp. 2.3-5.12', subtopics: ['Simple & Damped Harmonic Oscillations', 'Forced Oscillations & Resonance', 'Ultrasonic Waves & Magnetostriction', 'Non-Destructive Testing (NDT)', 'Architectural Acoustics & Sabines Law'] },
      { chapterNumber: 'Unit III', chapterTitle: 'Solid State Physics & Semiconductors', pageRange: 'pp. 6.3-12.25', subtopics: ['Crystallography & Miller Indices', 'X-rays & Compton Effect', 'Band Theory & Kronig-Penney Model', 'Intrinsic & Extrinsic Semiconductor Physics', 'Fermi Level & Carrier Concentration', 'Electrical Conductivity of Metals', 'Dielectrics & Piezoelectricity', 'Magnetic Properties & Hysteresis'] },
      { chapterNumber: 'Unit IV', chapterTitle: 'Optics with Laser and Optical Fibre', pageRange: 'pp. 13.3-17.39', subtopics: ['Interference & Youngs Double Slit', 'Newtons Rings & Michelson Interferometer', 'Fraunhofer Diffraction & Plane Diffraction Grating', 'Polarisation & Brewsters Law', 'Laser Physics (Ruby & He-Ne Lasers)', 'Holography Principles', 'Optical Fibres, Numerical Aperture & Step/Graded Index'] },
      { chapterNumber: 'Unit V', chapterTitle: 'Electromagnetism', pageRange: 'pp. 18.3-19.45', subtopics: ['Vector Calculus (Gradient, Divergence, Curl)', 'Gauss & Stokes Theorems', 'Maxwell Electromagnetic Equations', 'Poynting Vector & Energy Flow in EM Waves'] },
      { chapterNumber: 'Unit VI', chapterTitle: 'Engineering Materials', pageRange: 'pp. 20.3-22.96', subtopics: ['Superconductivity & Meissner Effect', 'Type I & Type II Superconductors', 'Nanomaterials, Carbon Nanotubes & Quantum Dots', 'Smart & Intelligent Materials (Piezoelectric, SMAs)'] },
      { chapterNumber: 'Unit VII', chapterTitle: 'Modern Physics and Quantum Mechanics', pageRange: 'pp. 23.3-25.20', subtopics: ['Blackbody Radiation & Photoelectric Effect', 'de Broglie Matter Waves & Davisson-Germer Experiment', 'Heisenbergs Uncertainty Principle', 'Schrodinger Time-Dependent & Independent Wave Equations', 'Particle in a 1D Potential Box'] },
      { chapterNumber: 'Unit VIII', chapterTitle: 'Thermodynamics and Mechanical Properties of Materials', pageRange: 'pp. 26.3-27.26', subtopics: ['Laws of Thermodynamics & Entropy', 'Gibbs Free Energy & Maxwell Relations', 'Stress-Strain & Elastic Constants (Youngs, Bulk, Rigidity)'] }
    ]
  },
  {
    id: 'book_bio_vidya',
    title: 'Biology for Engineers',
    author: 'Vidya Rajesh',
    publisher: 'Cengage',
    edition: '1st Edition',
    courseCode: 'LS10005',
    courseName: 'Science of Living Systems',
    schemeApplies: 'Scheme A (Sem 1) / Scheme B (Sem 2)',
    coverColor: 'from-lime-600 to-emerald-900',
    recommendedFor: 'Central Dogma, Biomimetics, Neural Networks & Biological Systems',
    index: [
      { chapterNumber: 'Part I', chapterTitle: 'How Life Works! (Cellular & Molecular Biology)', pageRange: 'pp. 1.3-9.19', subtopics: ['Study of Life & Diversity of Organisms', 'Biochemistry of Life (DNA, RNA, Proteins)', 'Cell as Basic Unit of Life', 'Genetics, Central Dogma & DNA Replication', 'Mendelian Inheritance', 'Cellular Metabolism & Photosynthesis', 'Cell Division & Reproduction'] },
      { chapterNumber: 'Part II', chapterTitle: 'Human Biology & Physiological Systems', pageRange: 'pp. 10.3-15.22', subtopics: ['Structural Organization & Homeostasis', 'Material Exchange (Circulatory, Respiratory, Excretory)', 'Nervous System & Endocrine Response Control', 'Sensory Perceptions & Output Coordination', 'Immune System & Antibody Engineering', 'Reproduction & Development'] },
      { chapterNumber: 'Part III', chapterTitle: 'Engineering Applications & Biological Solutions', pageRange: 'pp. 16.3-20.15', subtopics: ['Unseen World of Microbes & Bioremediation', 'Ecology, Environment & Species Evolution', 'Structural Design Framework of Human Body', 'Molecular Machines & Biosensors', 'Genetic Engineering & DNA Manipulations', 'Biological vs Artificial Neural Networks (ANN)', 'Food, Nutrition & Technology Impact'] }
    ]
  },
  {
    id: 'book_bee_mehta',
    title: 'Principles of Electrical Engineering and Electronics',
    author: 'V.K. Mehta & Rohit Mehta',
    publisher: 'S. Chand Technical',
    edition: 'LPSPE 2019 Edition',
    courseCode: 'EE10002',
    courseName: 'Basic Electrical Engineering',
    schemeApplies: 'Scheme A (Sem 1) / Scheme B (Sem 2)',
    coverColor: 'from-slate-800 to-gray-950',
    recommendedFor: 'DC Circuit KVL/KCL, Thevenin-Norton, AC Phasors, Transformers & Safety',
    index: [
      { chapterNumber: 1, chapterTitle: 'Fundamentals of Current Electricity', pageRange: 'pp. 1-29', subtopics: ['Electron Theory of Matter', 'Current, Potential & Resistance', 'Ohms Law & Temperature Coefficient'] },
      { chapterNumber: 2, chapterTitle: 'D.C. Circuits', pageRange: 'pp. 30-70', subtopics: ['Series & Parallel DC Circuits', 'Kirchhoffs Laws (KVL & KCL)', 'Voltage & Current Divider Rules'] },
      { chapterNumber: 3, chapterTitle: 'D.C. Network Theorems', pageRange: 'pp. 71-127', subtopics: ['Maxwells Mesh Current & Nodal Analysis', 'Superposition Theorem', 'Thevenins & Nortons Theorems', 'Maximum Power Transfer Theorem'] },
      { chapterNumber: 4, chapterTitle: 'Units—Work, Power and Energy', pageRange: 'pp. 128-147', subtopics: ['Electrical & Mechanical Energy Units', 'Thermal Energy & Heating Effect of Current'] },
      { chapterNumber: 5, chapterTitle: 'Electrostatics & Capacitors', pageRange: 'pp. 148-206', subtopics: ['Coulombs Law & Electric Field', 'Capacitance & Dielectric Constant', 'Parallel Plate & Multiplate Capacitors', 'Energy Stored in Capacitors'] },
      { chapterNumber: 6, chapterTitle: 'Magnetism and Magnetic Circuits', pageRange: 'pp. 207-253', subtopics: ['Magnetic Flux Density & Permeability', 'Reluctance & Permeance', 'B-H Curve & Magnetic Hysteresis Loop', 'Amperes Work Law'] },
      { chapterNumber: 7, chapterTitle: 'Electromagnetic Induction', pageRange: 'pp. 254-289', subtopics: ['Faradays Laws of EM Induction', 'Self & Mutual Inductance', 'Inductors in Series & Parallel', 'Eddy Currents & Loss'] },
      { chapterNumber: 8, chapterTitle: 'A.C. Fundamentals & Series Circuits', pageRange: 'pp. 388-453', subtopics: ['Sinusoidal AC Waveforms & RMS/Average Values', 'Phasor Representation', 'AC Series Circuits (R-L, R-C, R-L-C)', 'Series Resonance & Q-Factor'] },
      { chapterNumber: 9, chapterTitle: 'Phasor Algebra & Parallel A.C. Circuits', pageRange: 'pp. 454-503', subtopics: ['Rectangular & Polar Forms', 'Admittance & Impedance Triangles', 'Parallel Resonance'] },
      { chapterNumber: 10, chapterTitle: 'Three-Phase Circuits', pageRange: 'pp. 504-550', subtopics: ['Star (Y) & Delta (Δ) Connections', '3-Phase Voltage, Current & Power', 'Two-Wattmeter Power Measurement Method'] },
      { chapterNumber: 11, chapterTitle: 'Transformers', pageRange: 'pp. 551-609', subtopics: ['Single-Phase Transformer Working Principle', 'EMF Equation & Voltage Ratio', 'Equivalent Circuit & Losses', 'Open-Circuit & Short-Circuit Tests', 'Autotransformers'] },
      { chapterNumber: 12, chapterTitle: 'Induction Motors & Electrical Safety', pageRange: 'pp. 610-641', subtopics: ['3-Phase Induction Motor Working Principle', 'Rotating Magnetic Field & Slip', 'Torque-Speed Characteristics', 'Single-Phase Motors & Motor Starters'] }
    ]
  },
  {
    id: 'book_num_jain',
    title: 'Numerical Methods for Scientific and Engineering Computation',
    author: 'M.K. Jain, S.R.K. Iyengar & R.K. Jain',
    publisher: 'New Age International',
    edition: '9th Edition (Multi-Colour)',
    courseCode: 'MA11011',
    courseName: 'Linear Algebra and Fourier Analysis',
    schemeApplies: 'Scheme A (Sem 2) / Scheme B (Sem 1)',
    coverColor: 'from-rose-700 to-red-900',
    recommendedFor: 'Bisection, Newton-Raphson, Interpolation, Runge-Kutta & Numerical Integration',
    index: [
      { chapterNumber: 1, chapterTitle: 'High Speed Computation & Errors', pageRange: 'pp. 1-16', subtopics: ['Computer Arithmetic & Rounding Errors', 'Machine Computation & Error Propagation'] },
      { chapterNumber: 2, chapterTitle: 'Transcendental and Polynomial Equations', pageRange: 'pp. 17-103', subtopics: ['Bisection Method', 'Iteration Method', 'Newton-Raphson Method', 'Regula-Falsi & Secant Methods', 'Rate of Convergence'] },
      { chapterNumber: 3, chapterTitle: 'System of Linear Algebraic Equations', pageRange: 'pp. 104-209', subtopics: ['Gauss Elimination & Gauss-Jordan Methods', 'LU Decomposition', 'Gauss-Jacobi & Gauss-Seidel Iterative Methods', 'Eigenvalues & Eigenvectors (Power Method)'] },
      { chapterNumber: 4, chapterTitle: 'Interpolation and Approximation', pageRange: 'pp. 210-319', subtopics: ['Lagrange & Newton Interpolations', 'Difference Operators (Δ, ∇, δ)', 'Newtons Forward & Backward Interpolation', 'Spline Interpolation & Least Squares Approximation'] },
      { chapterNumber: 5, chapterTitle: 'Differentiation and Integration', pageRange: 'pp. 320-402', subtopics: ['Numerical Differentiation', 'Trapezoidal Rule & Simpsons 1/3 and 3/8 Rules', 'Romberg Integration & Double Integration'] },
      { chapterNumber: 6, chapterTitle: 'Ordinary Differential Equations: Initial Value Problems', pageRange: 'pp. 403-549', subtopics: ['Taylors Series Method', 'Eulers & Modified Euler Methods', 'Runge-Kutta 2nd & 4th Order Methods', 'Predictor-Corrector Methods'] },
      { chapterNumber: 7, chapterTitle: 'Ordinary Differential Equations: Boundary Value Problems', pageRange: 'pp. 550-631', subtopics: ['Shooting Method', 'Finite Difference Method'] },
      { chapterNumber: 8, chapterTitle: 'Partial Differential Equations', pageRange: 'pp. 632-684', subtopics: ['Parabolic, Hyperbolic & Elliptic Equations', 'Finite Difference Methods for Heat & Wave Equations'] }
    ]
  },
  {
    id: 'book_chem_chawla',
    title: 'Textbook of Engineering Chemistry',
    author: 'Shashi Chawla',
    publisher: 'Dhanpat Rai & Co.',
    edition: 'Latest Edition',
    courseCode: 'CH10009',
    courseName: 'Chemistry',
    schemeApplies: 'Scheme A (Sem 2) / Scheme B (Sem 1)',
    coverColor: 'from-teal-600 to-cyan-900',
    recommendedFor: 'Thermodynamics, Chemical Kinetics, Batteries, Fuel Cells & Spectroscopy',
    index: [
      { chapterNumber: 1, chapterTitle: 'Structure and Bonding', pageRange: 'pp. 1-109', subtopics: ['Schrodinger Wave Equation', 'Molecular Orbital Theory (MOT) & LCAO', 'Homonuclear & Heteronuclear Diatomic Molecules (NO, CO)', 'Crystal Field Theory (CFT)'] },
      { chapterNumber: 2, chapterTitle: 'Electrochemistry & Energy Systems', pageRange: 'pp. 111-190', subtopics: ['Nernst Equation & Electrode Potentials', 'Primary & Secondary Batteries', 'Lithium-Ion & Sodium-Ion Batteries', 'Fuel Cells (AFC, PEMFC, SOFC)'] },
      { chapterNumber: 3, chapterTitle: 'Reaction Kinetics', pageRange: 'pp. 191-274', subtopics: ['Integrated Rate Laws', 'Collision & Transition State Theories', 'Complex & Chain Reactions'] },
      { chapterNumber: 4, chapterTitle: 'Catalysis & Green Chemistry', pageRange: 'pp. 275-320', subtopics: ['Enzyme Catalysis (Michaelis-Menten)', '12 Principles of Green Chemistry', 'Atom Economy & Alternative Feedstocks'] },
      { chapterNumber: 5, chapterTitle: 'Phase Rule', pageRange: 'pp. 321-348', subtopics: ['Gibbs Phase Rule (F = C - P + 2)', 'One Component Systems (Water, Sulphur)', 'Two Component Systems & Eutectic Mixture'] },
      { chapterNumber: 6, chapterTitle: 'Thermodynamics and Thermochemistry', pageRange: 'pp. 349-464', subtopics: ['First, Second & Third Laws of Thermodynamics', 'Entropy, Enthalpy & Gibbs Free Energy', 'Chemical Potential & Gibbs-Duhem Equation', 'Clapeyron-Clausius Equation'] },
      { chapterNumber: 7, chapterTitle: 'Solid State & Nanomaterials', pageRange: 'pp. 465-529', subtopics: ['Bravais Lattices & Miller Indices', 'Atomic Packing Factor (Simple Cubic, FCC, BCC)', 'Top-Down & Bottom-Up Nanomaterial Synthesis', 'Carbon Nanotubes (CNTs) & Fullerenes'] },
      { chapterNumber: 8, chapterTitle: 'Corrosion & Protective Measures', pageRange: 'pp. 531-570', subtopics: ['Dry & Wet Electrochemical Corrosion', 'Galvanic Series & Pitting Corrosion', 'Cathodic Protection & Sacrificial Anodes'] },
      { chapterNumber: 9, chapterTitle: 'Spectroscopy', pageRange: 'pp. 571-624', subtopics: ['Selection Rules & UV-Visible Spectroscopy', 'IR & Fourier Transform IR (FT-IR) Spectroscopy', 'Raman Spectroscopy & XPS'] },
      { chapterNumber: 10, chapterTitle: 'Organic Reaction Mechanism', pageRange: 'pp. 625-723', subtopics: ['Inductive & Resonance Effects', 'SN1 & SN2 Substitution Reactions', 'Electrophilic Addition & Reimer-Tiemann Reaction'] },
      { chapterNumber: 11, chapterTitle: 'NMR Spectroscopy and Colorimetry', pageRange: 'pp. 751-790', subtopics: ['Nuclear Magnetic Resonance (NMR) Principle', 'Chemical Shift & Spin-Spin Coupling', 'Beer-Lambert Law & Colorimetry'] },
      { chapterNumber: 12, chapterTitle: 'Intelligent (Smart) Materials', pageRange: 'pp. 809-826', subtopics: ['Piezoelectric Materials & Quartz', 'Shape Memory Alloys (SMAs & NiTinol)', 'Magneto-rheological & Electro-rheological Fluids'] }
    ]
  },
  {
    id: 'book_electronics_theraja',
    title: 'Principles of Electronic Devices and Circuits',
    author: 'B.L. Theraja & R.S. Sedha',
    publisher: 'S. Chand Technical',
    edition: 'Revised SI Edition',
    courseCode: 'EC10005',
    courseName: 'Basic Electronics Circuits and Logic Design',
    schemeApplies: 'Scheme A (Sem 2) / Scheme B (Sem 1)',
    coverColor: 'from-emerald-800 to-slate-900',
    recommendedFor: 'Diodes, BJTs, Op-Amps, K-Maps, Logic Gates, Flip-Flops',
    index: [
      { chapterNumber: 1, chapterTitle: 'Semiconductor Physics', pageRange: 'pp. 1-37', subtopics: ['Energy Band Theory', 'Intrinsic & Extrinsic Semiconductors', 'Fermi Level & Drift/Diffusion Current'] },
      { chapterNumber: 2, chapterTitle: 'P-N Junction Diode & Applications', pageRange: 'pp. 38-61', subtopics: ['P-N Junction Depletion Layer & Biasing', 'Diode V-I Characteristics', 'Clipper and Clamper Circuits'] },
      { chapterNumber: 3, chapterTitle: 'Optoelectronic Devices & Special Diodes', pageRange: 'pp. 62-97', subtopics: ['LEDs, Photodiodes & Solar Cells', 'Zener Diode as Voltage Regulator', 'Tunnel & Varactor Diodes'] },
      { chapterNumber: 4, chapterTitle: 'Power Supplies & Regulators', pageRange: 'pp. 98-149', subtopics: ['Half-Wave & Full-Wave Rectifiers', 'Bridge Rectifiers & Capacitor Filters', 'Transistor & OP-AMP Series/Shunt Voltage Regulators'] },
      { chapterNumber: 5, chapterTitle: 'Bipolar Junction Transistor (BJT)', pageRange: 'pp. 150-178', subtopics: ['CB, CE, CC Transistor Configurations', 'Transistor Static Characteristics', 'Alpha (α) and Beta (β) Relations'] },
      { chapterNumber: 6, chapterTitle: 'Load Lines and DC Biased Circuits', pageRange: 'pp. 179-216', subtopics: ['DC Load Line & Q-Point', 'Base Bias, Emitter Feedback & Voltage Divider Bias'] },
      { chapterNumber: 7, chapterTitle: 'Field Effect Transistors (FET & MOSFET)', pageRange: 'pp. 217-233', subtopics: ['JFET Construction & Drain Characteristics', 'Depletion & Enhancement MOSFETs', 'CMOS Inverter Concept'] },
      { chapterNumber: 8, chapterTitle: 'Feedback & Oscillators', pageRange: 'pp. 234-264', subtopics: ['Negative & Positive Feedback', 'Barkhausen Criteria', 'Hartley, Colpitts & Wien Bridge Oscillators', 'Crystal Oscillators'] },
      { chapterNumber: 9, chapterTitle: 'OP-AMP and Its Applications', pageRange: 'pp. 265-284', subtopics: ['Ideal OP-AMP Characteristics & Virtual Ground', 'Inverting & Non-inverting Amplifiers', 'Summing Amplifier, Subtractor, Integrator & Differentiator'] },
      { chapterNumber: 10, chapterTitle: 'Number Systems and Codes', pageRange: 'pp. 314-341', subtopics: ['Binary, Octal & Hexadecimal Conversions', '1s & 2s Complement Arithmetic', 'BCD & Gray Codes'] },
      { chapterNumber: 11, chapterTitle: 'Logic Gates & Boolean Algebra', pageRange: 'pp. 342-412', subtopics: ['AND, OR, NOT, NAND, NOR, XOR Gates', 'De Morgans Theorems', 'SOP and POS Forms', 'Karnaugh Maps (2, 3, 4 Variables)'] },
      { chapterNumber: 12, chapterTitle: 'Combinational & Sequential Circuits', pageRange: 'pp. 413-555', subtopics: ['Half/Full Adders & Subtractors', 'Multiplexers & Encoders/Decoders', 'SR, JK, D, T Flip-Flops & Master-Slave', 'Asynchronous & Synchronous Counters', 'Shift Registers (SISO, SIPO, PISO, PIPO)'] }
    ]
  },
  {
    id: 'book_english_rizvi',
    title: 'Effective Technical Communication & Companion Reader',
    author: 'M. Ashraf Rizvi & Priyadarshi Patnaik',
    publisher: 'McGraw Hill',
    edition: '3rd Edition',
    courseCode: 'HS10003',
    courseName: 'English Communication Skills',
    schemeApplies: 'Scheme A (Sem 2) / Scheme B (Sem 1)',
    coverColor: 'from-blue-600 to-indigo-900',
    recommendedFor: 'Technical Reports, Professional Writing, Listening & Generative AI Ethics',
    index: [
      { chapterNumber: 'Section 1', chapterTitle: 'Fundamentals of Technical Communication', pageRange: 'pp. 3-76', subtopics: ['Process of Communication & Noise Filters', 'Verbal & Non-Verbal Modes (Kinesics, Proxemics, Haptics)', 'Channels & Networks of Communication', 'Linguistic Ability & Technical Style'] },
      { chapterNumber: 'Section 2', chapterTitle: 'Listening Comprehension', pageRange: 'pp. 77-[...]', subtopics: ['Hearing vs Listening', 'Empathetic, Critical & Focused Listening', 'Barriers to Listening & Active Listening Strategies'] },
      { chapterNumber: 'Section 3', chapterTitle: 'Speaking Strategies & Phonetics', pageRange: 'pp. 109-[...]', subtopics: ['The Speech Process', 'International Phonetic Alphabet (IPA)', 'Vowels, Consonants & Mother Tongue Influence', 'Pronunciation Guidelines & Accent'] },
      { chapterNumber: 'Section 4', chapterTitle: 'Professional Speaking (Interviews & GDs)', pageRange: 'pp. 161-[...]', subtopics: ['Interview Types, Preparation & Questions', 'Group Discussion Dynamics & Leadership Roles', 'Presentation Skills & PPT Delivery'] },
      { chapterNumber: 'Section 5', chapterTitle: 'Reading and Language Comprehension', pageRange: 'pp. 253-[...]', subtopics: ['Reading Process & Skimming/Scanning', 'Reading Technical Manuals & Infographics', 'Note Making & Summarising'] },
      { chapterNumber: 'Section 7 & 8', chapterTitle: 'Professional Writing & Business Correspondence', pageRange: 'pp. 347-510', subtopics: ['Effective Sentences & Paragraph Coherence', 'Business Letters (Enquiry, Complaint, Orders)', 'Resumes, CVs & Cover Letters', 'Writing Business Memos, Emails & Reports', 'Technical Proposals & Articles'] },
      { chapterNumber: 'Companion Part 1', chapterTitle: 'Generative AI for Writing Skills', pageRange: 'pp. 3-9', subtopics: ['AI in Technical Writing Context', 'Role & Timeline of Generative AI in Writing', 'Fact Verification & Ethical AI Usage'] }
    ]
  },
  {
    id: 'book_maths_kreyszig',
    title: 'Advanced Engineering Mathematics',
    author: 'Erwin Kreyszig',
    publisher: 'Wiley INC.',
    edition: '10th Edition',
    courseCode: 'MA11009',
    courseName: 'Calculus and Differential Equations',
    schemeApplies: 'Scheme A (Sem 1) / Scheme B (Sem 2)',
    coverColor: 'from-blue-700 to-sky-950',
    recommendedFor: 'ODE Solutions, Partial Derivatives, Lagrange Multipliers & Laplace Transform',
    index: [
      { chapterNumber: 'Part A: Chapter 1', chapterTitle: 'First-Order ODEs', pageRange: 'pp. 2-45', subtopics: ['Basic Concepts & Modeling', 'Separable ODEs', 'Exact ODEs & Integrating Factors', 'Linear ODEs & Bernoulli Equation'] },
      { chapterNumber: 'Part A: Chapter 2', chapterTitle: 'Second-Order Linear ODEs', pageRange: 'pp. 46-104', subtopics: ['Homogeneous Linear ODEs with Constant Coefficients', 'Euler-Cauchy Equations', 'Nonhomogeneous ODEs & Undetermined Coefficients', 'Solution by Variation of Parameters', 'Forced Oscillations & Resonance'] },
      { chapterNumber: 'Part A: Chapter 6', chapterTitle: 'Laplace Transforms', pageRange: 'pp. 203-254', subtopics: ['Laplace Transform & Linearity', 'First Shifting Theorem (s-Shifting)', 'Transforms of Derivatives and Integrals', 'Unit Step Function & Second Shifting Theorem', 'Convolution & Solving ODEs'] },
      { chapterNumber: 'Part B: Chapter 7 & 8', chapterTitle: 'Linear Algebra: Matrices & Eigenvalue Problems', pageRange: 'pp. 256-353', subtopics: ['Matrices & Gauss Elimination', 'Linear Independence & Rank of Matrix', 'Matrix Inverse & Gauss-Jordan Method', 'Eigenvalues and Eigenvectors', 'Diagonalization & Quadratic Forms'] },
      { chapterNumber: 'Part C: Chapter 11', chapterTitle: 'Fourier Analysis and PDEs', pageRange: 'pp. 474-539', subtopics: ['Fourier Series & Half-Range Expansions', 'Fourier Integrals & Fourier Transforms', 'Fourier Cosine & Sine Transforms'] },
      { chapterNumber: 'Part E: Chapter 19 & 20', chapterTitle: 'Numeric Analysis & Linear Algebra', pageRange: 'pp. 788-870', subtopics: ['Numeric Solution of Equations', 'Interpolation & Splines', 'Numeric Integration & Differentiation'] }
    ]
  },
  {
    id: 'book_uhv_gaur',
    title: 'Human Values and Professional Ethics',
    author: 'R R Gaur, R Sangal, G P Bagaria',
    publisher: 'Excel Books, New Delhi',
    edition: '1st Edition (2010)',
    courseCode: 'ID10003',
    courseName: 'Universal Human Values',
    schemeApplies: 'Scheme A (Sem 1) / Scheme B (Sem 2)',
    coverColor: 'from-emerald-700 to-teal-950',
    recommendedFor: 'Self Exploration, Natural Acceptance, Sentient I vs Body, Trust/Respect & Professional Ethics',
    index: [
      { chapterNumber: 'Module 1', chapterTitle: 'Value Education & Self-Exploration', pageRange: 'pp. 1-45', subtopics: ['Purpose & Motivation for Value Education', 'Self-Exploration Process & Content', 'Natural Acceptance & Experiential Validation', 'Continuous Happiness & Prosperity Aspirations', 'Right Understanding, Relationship & Physical Facility Priority'] },
      { chapterNumber: 'Module 2', chapterTitle: 'Harmony in the Human Being (Myself)', pageRange: 'pp. 46-98', subtopics: ['Co-existence of Sentient I and Material Body', 'Needs of Self (I) vs Needs of Body', 'Body as Instrument of I (Doer, Seer, Enjoyer)', 'Sanyam (Self-regulation) and Swasthya (Health)', 'Prosperity vs Accumulation & Programs for Health'] },
      { chapterNumber: 'Module 3', chapterTitle: 'Harmony in Family and Society', pageRange: 'pp. 99-165', subtopics: ['Values in Human Relationships & Meaning of Justice', 'Trust: Difference Between Intention & Competence', 'Respect: Difference Between Respect & Differentiation', 'Nine Universal Relationship Values & Gratitude', 'Universal Harmonious Order & Undivided Society (Akhand Samaj)'] },
      { chapterNumber: 'Module 4', chapterTitle: 'Harmony in Nature and Existence', pageRange: 'pp. 166-215', subtopics: ['Harmony in Nature & 4 Orders of Nature', 'Interconnectedness, Recyclability & Self-Regulation', 'Existence as Co-existence in All-Pervasive Space', 'Human Imbalance, Pollution & Resource Depletion', 'Role of Eco-Friendly Technologies'] },
      { chapterNumber: 'Module 5', chapterTitle: 'Implications on Professional Ethics', pageRange: 'pp. 216-270', subtopics: ['Natural Acceptance of Human Values', 'Definitiveness of Ethical Human Conduct', 'Humanistic Education, Constitution & Universal Order', 'Competence in Professional Ethics & Eco-Friendly Systems', 'Transition Strategy for Individual & Society'] }
    ]
  }
];
