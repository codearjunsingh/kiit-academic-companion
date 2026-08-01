export interface GateSubject {
  id: string;
  name: string;
  weightage: string;
  collegeCourseLink?: string;
  pwFaculty?: string;
  topics: {
    id: string;
    title: string;
    pwModule?: string;
    date?: string;
    time?: string;
  }[];
}

export interface PwModule {
  subject: string;
  startDate: string;
  endDate: string;
  faculty?: string;
  timing?: string;
  status: 'Completed' | 'Live / Ongoing' | 'Upcoming';
  progressDefault?: number;
}

export const PW_NIRMAAN_BATCH_INFO = {
  batchName: 'PW Nirmaan GATE 2029 (CSE & IT)',
  targetYear: 'GATE 2029 (February 2029)',
  platform: 'Physics Wallah App / Web',
  currentFaculty: 'Vishvadeep Gothi Sir',
  currentTiming: 'Monday to Friday (11:30 AM – 1:00 PM)',
  dppGoalPerDay: 15,
};

export const PW_NIRMAAN_SUBJECT_ROADMAP: PwModule[] = [
  {
    subject: 'Introduction to AI',
    startDate: '2026-06-01',
    endDate: '2026-06-05',
    faculty: 'Vishvadeep Sir',
    timing: 'Tue-Thu 11:00 AM–12:00 PM / Mon 7:00 PM',
    status: 'Completed',
    progressDefault: 100
  },
  {
    subject: 'Prompt Engineering',
    startDate: '2026-06-08',
    endDate: '2026-06-27',
    faculty: 'Aditya Jain Sir',
    timing: 'Mon-Thu 10:00–11:00 AM / Sat 3:30–4:30 PM',
    status: 'Completed',
    progressDefault: 82
  },
  {
    subject: 'Prompt Engineering & AI Studio',
    startDate: '2026-06-29',
    endDate: '2026-07-11',
    faculty: 'Aditya Jain Sir',
    timing: 'Mon-Thu 10:00–11:00 AM / Sat 3:30–4:30 PM',
    status: 'Completed',
    progressDefault: 0
  },
  {
    subject: 'AI Tools',
    startDate: '2026-07-13',
    endDate: '2026-07-31',
    faculty: 'Vishvadeep Gothi Sir',
    timing: 'Monday to Friday (11:30 AM – 1:00 PM)',
    status: 'Live / Ongoing',
    progressDefault: 0
  },
  {
    subject: 'Microsoft Copilot',
    startDate: '2026-08-03',
    endDate: '2026-08-14',
    faculty: 'Vishvadeep Sir',
    status: 'Upcoming'
  },
  {
    subject: 'Basics of Computer System & C-Programming',
    startDate: '2026-08-17',
    endDate: '2026-09-25',
    faculty: 'PW CSE Team',
    timing: 'Overlaps with KIIT CS13003',
    status: 'Upcoming'
  },
  {
    subject: 'Engineering Mathematics (Fundamentals)',
    startDate: '2026-09-28',
    endDate: '2026-11-06',
    faculty: 'PW Maths Team',
    timing: 'Overlaps with KIIT MA11009',
    status: 'Upcoming'
  }
];

export const GATE_2029_SYLLABUS: GateSubject[] = [
  {
    id: 'pw_ai_tools',
    name: 'PW Module: AI Tools (Live / Ongoing)',
    weightage: 'PW 1st-Year Track',
    pwFaculty: 'Vishvadeep Gothi Sir (Mon-Fri 11:30 AM - 1:00 PM)',
    topics: [
      { id: 'pw_ai_1', title: 'AI Tools - 1 (Mon, July 13, 2026)', date: '2026-07-13' },
      { id: 'pw_ai_2', title: 'AI Tools - 2 (Tue, July 14, 2026)', date: '2026-07-14' },
      { id: 'pw_ai_3', title: 'AI Tools - 3 (Wed, July 15, 2026)', date: '2026-07-15' },
      { id: 'pw_ai_4', title: 'AI Tools - 4 (Thu, July 16, 2026)', date: '2026-07-16' },
      { id: 'pw_ai_5', title: 'AI Tools - 5 (Fri, July 17, 2026)', date: '2026-07-17' },
      { id: 'pw_ai_6', title: 'AI Tools - 6 (Mon, July 20, 2026)', date: '2026-07-20' },
      { id: 'pw_ai_7', title: 'AI Tools - 7 (Tue, July 21, 2026)', date: '2026-07-21' },
      { id: 'pw_ai_8', title: 'AI Tools - 8 (Wed, July 22, 2026)', date: '2026-07-22' },
      { id: 'pw_ai_9', title: 'AI Tools - 9 (Thu, July 23, 2026)', date: '2026-07-23' },
      { id: 'pw_ai_10', title: 'AI Tools - 10 (Mon, July 27, 2026)', date: '2026-07-27' },
      { id: 'pw_ai_11', title: 'AI Tools - 11 (Wed, July 29, 2026)', date: '2026-07-29' },
      { id: 'pw_ai_12', title: 'AI Tools - 12 (Fri, July 31, 2026)', date: '2026-07-31' },
    ]
  },
  {
    id: 'pw_prompt_eng_studio',
    name: 'PW Module: Prompt Engineering & AI Studio',
    weightage: 'PW 1st-Year Track',
    pwFaculty: 'Aditya Jain Sir (Mon-Thu 10:00-11:00 AM / Sat 3:30-4:30 PM)',
    topics: [
      { id: 'pw_pe_s1', title: 'Prompt Engineering & AI Studio - 1 (Mon, 29 June 2026)', date: '2026-06-29' },
      { id: 'pw_pe_s2', title: 'Prompt Engineering & AI Studio - 2 (Tue, 30 June 2026)', date: '2026-06-30' },
      { id: 'pw_pe_s3', title: 'Prompt Engineering & AI Studio - 3 (Wed, 1 July 2026)', date: '2026-07-01' },
      { id: 'pw_pe_s4', title: 'Prompt Engineering & AI Studio - 4 (Thu, 2 July 2026)', date: '2026-07-02' },
      { id: 'pw_pe_s5', title: 'Prompt Engineering & AI Studio - 5 (Sat, 4 July 2026)', date: '2026-07-04' },
      { id: 'pw_pe_s6', title: 'Prompt Engineering & AI Studio - 6 (Mon, 6 July 2026)', date: '2026-07-06' },
      { id: 'pw_pe_s7', title: 'Prompt Engineering & AI Studio - 7 (Tue, 7 July 2026)', date: '2026-07-07' },
      { id: 'pw_pe_s8', title: 'Prompt Engineering & AI Studio - 8 (Wed, 8 July 2026)', date: '2026-07-08' },
      { id: 'pw_pe_s9', title: 'Prompt Engineering & AI Studio - 9 (Thu, 9 July 2026)', date: '2026-07-09' },
      { id: 'pw_pe_s10', title: 'Prompt Engineering & AI Studio - 10 (Sat, 11 July 2026)', date: '2026-07-11' },
    ]
  },
  {
    id: 'pw_prompt_eng',
    name: 'PW Module: Prompt Engineering',
    weightage: 'PW 1st-Year Track (82% Done in PW App)',
    pwFaculty: 'Aditya Jain Sir',
    topics: [
      { id: 'pw_pe_1', title: 'Prompt Engineering - 1 (Mon, 8 June 2026)', date: '2026-06-08' },
      { id: 'pw_pe_2', title: 'Prompt Engineering - 2 (Tue, 9 June 2026)', date: '2026-06-09' },
      { id: 'pw_pe_3', title: 'Prompt Engineering - 3 (Wed, 10 June 2026)', date: '2026-06-10' },
      { id: 'pw_pe_4', title: 'Prompt Engineering - 4 (Thu, 11 June 2026)', date: '2026-06-11' },
      { id: 'pw_pe_5', title: 'Prompt Engineering - 5 (Fri, 12 June 2026)', date: '2026-06-12' },
      { id: 'pw_pe_6', title: 'Prompt Engineering - 6 (Mon, 15 June 2026)', date: '2026-06-15' },
      { id: 'pw_pe_7', title: 'Prompt Engineering - 7 (Tue, 16 June 2026)', date: '2026-06-16' },
      { id: 'pw_pe_8', title: 'Prompt Engineering - 8 (Wed, 17 June 2026)', date: '2026-06-17' },
      { id: 'pw_pe_9', title: 'Prompt Engineering - 9 (Thu, 18 June 2026)', date: '2026-06-18' },
      { id: 'pw_pe_10', title: 'Prompt Engineering - 10 (Sat, 20 June 2026)', date: '2026-06-20' },
      { id: 'pw_pe_11', title: 'Prompt Engineering - 11 (Mon, 22 June 2026)', date: '2026-06-22' },
      { id: 'pw_pe_12', title: 'Prompt Engineering - 12 (Tue, 23 June 2026)', date: '2026-06-23' },
      { id: 'pw_pe_13', title: 'Prompt Engineering - 13 (Wed, 24 June 2026)', date: '2026-06-24' },
      { id: 'pw_pe_14', title: 'Prompt Engineering - 14 (Thu, 25 June 2026)', date: '2026-06-25' },
      { id: 'pw_pe_15', title: 'Prompt Engineering - 15 (Sat, 27 June 2026)', date: '2026-06-27' },
    ]
  },
  {
    id: 'pw_intro_ai',
    name: 'PW Module: Introduction to AI',
    weightage: 'PW 1st-Year Track (100% Completed in PW App)',
    pwFaculty: 'Vishvadeep Sir',
    topics: [
      { id: 'pw_iai_1', title: 'What is AI (Mon, June 1, 2026)', date: '2026-06-01' },
      { id: 'pw_iai_2', title: 'Different AI Domains (Tue, June 2, 2026)', date: '2026-06-02' },
      { id: 'pw_iai_3', title: 'How AI Learns (Wed, June 3, 2026)', date: '2026-06-03' },
      { id: 'pw_iai_4', title: 'Future of AI in Engineering (Thu, June 4, 2026)', date: '2026-06-04' },
    ]
  },
  {
    id: 'gate_maths',
    name: 'Engineering Mathematics',
    weightage: '13%',
    collegeCourseLink: 'MA11009 / MA11011',
    topics: [
      { id: 'gm_1', title: 'Discrete Mathematics: Propositional & First Order Logic, Sets, Relations, Functions, Partial Orders, Lattices, Groups' },
      { id: 'gm_2', title: 'Combinatorics: Counting, Recurrence Relations, Generating Functions' },
      { id: 'gm_3', title: 'Linear Algebra: Matrices, Determinants, Systems of Linear Equations, Eigenvalues & Eigenvectors, LU Decomposition' },
      { id: 'gm_4', title: 'Calculus: Limits, Continuity, Differentiability, Maxima/Minima, Mean Value Theorem, Integration' },
      { id: 'gm_5', title: 'Probability & Statistics: Random Variables, Uniform, Normal, Exponential, Poisson & Binomial Distributions, Bayes Theorem' },
    ]
  },
  {
    id: 'gate_aptitude',
    name: 'General Aptitude',
    weightage: '15%',
    topics: [
      { id: 'ga_1', title: 'Verbal Aptitude: English Grammar, Vocabulary, Reading Comprehension, Narrative Sequencing' },
      { id: 'ga_2', title: 'Quantitative Aptitude: Data Interpretation, Percentages, Ratios, Speed-Distance, Mensuration, Permutation & Combination' },
      { id: 'ga_3', title: 'Analytical Aptitude: Logic deduction, Venn Diagrams, Analogies, Number Relations' },
      { id: 'ga_4', title: 'Spatial Aptitude: Transformation of shapes, Paper folding, 3D Patterns, Mirror Images' },
    ]
  },
  {
    id: 'gate_ds_algo',
    name: 'Programming & Data Structures',
    weightage: '10-12%',
    collegeCourseLink: 'CS13003 (PW Starts Aug 17, 2026)',
    topics: [
      { id: 'gds_1', title: 'C Programming: Recursion, Arrays, Pointers, Functions, Structures, Dynamic Memory Allocation' },
      { id: 'gds_2', title: 'Linear Data Structures: Stacks, Queues, Linked Lists (Singly, Doubly, Circular)' },
      { id: 'gds_3', title: 'Trees: Binary Trees, Binary Search Trees (BST), AVL Trees, Binary Heaps' },
      { id: 'gds_4', title: 'Graphs: Adjacency Matrix/List, Graph Traversal (BFS & DFS)' },
    ]
  },
  {
    id: 'gate_algo',
    name: 'Algorithms',
    weightage: '8-10%',
    topics: [
      { id: 'gal_1', title: 'Asymptotic Analysis: Big-O, Omega, Theta notations, Time & Space Complexity' },
      { id: 'gal_2', title: 'Sorting & Searching: Bubble, Insertion, Selection, Merge, Quick, Heap sort, Binary Search' },
      { id: 'gal_3', title: 'Algorithm Design Techniques: Greedy Method, Dynamic Programming (DP), Divide & Conquer' },
      { id: 'gal_4', title: 'Graph Algorithms: Minimum Spanning Trees (Kruskal, Prim), Shortest Paths (Dijkstra, Bellman-Ford)' },
    ]
  },
  {
    id: 'gate_dl',
    name: 'Digital Logic',
    weightage: '5-6%',
    collegeCourseLink: 'EC10005',
    topics: [
      { id: 'gdl_1', title: 'Boolean Algebra, K-Maps, Logic Gates, Number Systems (Binary, Octal, Hex, 1s/2s Complement)' },
      { id: 'gdl_2', title: 'Combinational Circuits: Adders, Subtractors, Multiplexers, Decoders' },
      { id: 'gdl_3', title: 'Sequential Circuits: SR, JK, D, T Flip-Flops, Counters, Shift Registers' },
    ]
  },
  {
    id: 'gate_coa',
    name: 'Computer Organization & Architecture (COA)',
    weightage: '8-10%',
    topics: [
      { id: 'gcoa_1', title: 'Machine Instructions & Addressing Modes, ALU, Data-Path and Control Unit' },
      { id: 'gcoa_2', title: 'Instruction Pipelining & Hazards (Structural, Data, Control)' },
      { id: 'gcoa_3', title: 'Memory Hierarchy: Cache Memory (Direct, Set-Associative mapping), Virtual Memory' },
      { id: 'gcoa_4', title: 'I/O Interface: Interrupts, Direct Memory Access (DMA)' },
    ]
  },
  {
    id: 'gate_os',
    name: 'Operating Systems (OS)',
    weightage: '8-10%',
    topics: [
      { id: 'gos_1', title: 'Processes, Threads, Inter-Process Communication, CPU Scheduling Algorithms' },
      { id: 'gos_2', title: 'Concurrency & Synchronization: Semaphores, Monitors, Critical Section Problem' },
      { id: 'gos_3', title: 'Deadlocks: Prevention, Avoidance (Banker’s Algo), Detection & Recovery' },
      { id: 'gos_4', title: 'Memory Management: Paging, Segmentation, Page Replacement Algorithms (FIFO, LRU, Optimal)' },
    ]
  },
  {
    id: 'gate_dbms',
    name: 'Database Management Systems (DBMS)',
    weightage: '7-8%',
    topics: [
      { id: 'gdb_1', title: 'ER-Model, Relational Model, Relational Algebra, Tuple Relational Calculus, SQL Queries' },
      { id: 'gdb_2', title: 'Normalization: Functional Dependencies, 1NF, 2NF, 3NF, BCNF' },
      { id: 'gdb_3', title: 'Transaction Processing, ACID Properties, Concurrency Control (Locking, Timestamping)' },
    ]
  },
  {
    id: 'gate_cn',
    name: 'Computer Networks (CN)',
    weightage: '8-10%',
    topics: [
      { id: 'gcn_1', title: 'OSI & TCP/IP Stack, IPv4 & IPv6 Addressing, Subnetting, CIDR' },
      { id: 'gcn_2', title: 'Data Link Layer: Framing, Error Control (CRC), Flow Control (Stop & Wait, Sliding Window)' },
      { id: 'gcn_3', title: 'Routing Protocols: Distance Vector, Link State (OSPF, RIP, BGP)' },
      { id: 'gcn_4', title: 'Application Layer: DNS, SMTP, HTTP, FTP, Socket Programming' },
    ]
  },
  {
    id: 'gate_toc',
    name: 'Theory of Computation (TOC)',
    weightage: '7-8%',
    topics: [
      { id: 'gtoc_1', title: 'Regular Languages: Finite Automata (DFA, NFA), Regular Expressions, Pumping Lemma' },
      { id: 'gtoc_2', title: 'Context-Free Languages: Pushdown Automata (PDA), Context-Free Grammars (CFG)' },
      { id: 'gtoc_3', title: 'Turing Machines & Undecidability: Halting Problem, Recursively Enumerable Languages' },
    ]
  },
  {
    id: 'gate_compiler',
    name: 'Compiler Design',
    weightage: '4-5%',
    topics: [
      { id: 'gcd_1', title: 'Lexical Analysis, Parsing (LL, LR, LALR parsers), Syntax-Directed Translation' },
      { id: 'gcd_2', title: 'Intermediate Code Generation, Code Optimization & Runtime Environments' },
    ]
  }
];
