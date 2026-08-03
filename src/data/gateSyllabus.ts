export interface GateChapter {
  id: string;
  title: string;
  weightage: string; // e.g. "3-5 Marks"
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface GateSubject {
  id: string;
  name: string;
  category: 'Maths & General' | 'Core CS & IT';
  chapters: GateChapter[];
}

export const GATE_CSE_SYLLABUS: GateSubject[] = [
  {
    id: 'gate_em',
    name: 'Engineering Mathematics',
    category: 'Maths & General',
    chapters: [
      { id: 'g_em_1', title: 'Discrete Math: Propositional Logic, Predicates & Proofs', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_em_2', title: 'Discrete Math: Sets, Relations, Functions & Partial Orders', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_em_3', title: 'Discrete Math: Combinatorics, Generating Functions & Recurrence', weightage: '2-3 Marks', difficulty: 'Hard' },
      { id: 'g_em_4', title: 'Discrete Math: Graph Connectivity, Matching, Coloring & Trees', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_em_5', title: 'Linear Algebra: Matrices, Determinants & Systems of Equations', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_em_6', title: 'Linear Algebra: Eigenvalues, Eigenvectors & LU Decomposition', weightage: '2-3 Marks', difficulty: 'Hard' },
      { id: 'g_em_7', title: 'Calculus: Limits, Continuity, Differentiability & Taylor Series', weightage: '2 Marks', difficulty: 'Medium' },
      { id: 'g_em_8', title: 'Calculus: Maxima/Minima, Definite Integrals & Partial Derivatives', weightage: '2 Marks', difficulty: 'Hard' },
      { id: 'g_em_9', title: 'Probability: Random Variables, Uniform, Normal, Exponential & Poisson', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_em_10', title: 'Probability: Mean, Median, Mode, Variance & Conditional Probability', weightage: '2 Marks', difficulty: 'Medium' }
    ]
  },
  {
    id: 'g_ga',
    name: 'General Aptitude',
    category: 'Maths & General',
    chapters: [
      { id: 'g_ga_1', title: 'Quantitative Aptitude: Ratios, Percentages & Profit/Loss', weightage: '4-5 Marks', difficulty: 'Easy' },
      { id: 'g_ga_2', title: 'Quantitative Aptitude: Permutations, Combinations & Probability', weightage: '3-4 Marks', difficulty: 'Medium' },
      { id: 'g_ga_3', title: 'Analytical & Spatial Aptitude: Paper Folding, Shapes & Patterns', weightage: '3-4 Marks', difficulty: 'Medium' },
      { id: 'g_ga_4', title: 'Verbal Ability: English Grammar, Vocabulary & Critical Reasoning', weightage: '4-5 Marks', difficulty: 'Easy' }
    ]
  },
  {
    id: 'g_dl',
    name: 'Digital Logic',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_dl_1', title: 'Boolean Algebra, Logic Gates & K-Map Minimization', weightage: '2-3 Marks', difficulty: 'Easy' },
      { id: 'g_dl_2', title: 'Combinational Circuits: Adders, MUX, Decoders & Encoders', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_dl_3', title: 'Sequential Circuits: Flip-Flops, Registers & Counters', weightage: '2-3 Marks', difficulty: 'Hard' },
      { id: 'g_dl_4', title: 'Number Representations: Floating Point IEEE 754 & Arithmetic', weightage: '1-2 Marks', difficulty: 'Medium' }
    ]
  },
  {
    id: 'g_coa',
    name: 'Computer Organization & Architecture (COA)',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_coa_1', title: 'Machine Instructions, Addressing Modes & ISA Design', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_coa_2', title: 'ALU, Data-path & Control Unit (Hardwired vs Microprogrammed)', weightage: '2-3 Marks', difficulty: 'Hard' },
      { id: 'g_coa_3', title: 'Pipelining: Pipeline Hazards, Speedup & Data Dependency', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_coa_4', title: 'Memory Hierarchy: Cache Mapping, Hit/Miss Ratio & Direct/Associative Cache', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_coa_5', title: 'I/O Interface: Interrupts, DMA & Bus Arbitration', weightage: '1-2 Marks', difficulty: 'Medium' }
    ]
  },
  {
    id: 'g_prog_ds',
    name: 'Programming & Data Structures',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_pds_1', title: 'C Programming: Pointers, Arrays, Strings & Functions', weightage: '3-4 Marks', difficulty: 'Medium' },
      { id: 'g_pds_2', title: 'Recursion, Scope, Storage Classes & Parameter Passing', weightage: '2-3 Marks', difficulty: 'Hard' },
      { id: 'g_pds_3', title: 'Linear Data Structures: Stacks, Queues & Linked Lists', weightage: '3-4 Marks', difficulty: 'Medium' },
      { id: 'g_pds_4', title: 'Non-Linear Data Structures: Binary Trees, BST & AVL Trees', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_pds_5', title: 'Heaps, Priority Queues & Hashing (Collision Resolution)', weightage: '2-3 Marks', difficulty: 'Hard' }
    ]
  },
  {
    id: 'g_algo',
    name: 'Algorithms (DAA)',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_algo_1', title: 'Asymptotic Analysis & Recurrence Relations (Master Theorem)', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_algo_2', title: 'Sorting & Searching: Quick, Merge, Heap & Counting Sort', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_algo_3', title: 'Greedy Method & Dynamic Programming (Knapsack, LCS, Matrix Chain)', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_algo_4', title: 'Graph Algorithms: BFS, DFS, Dijkstra, Bellman-Ford, Prim & Kruskal', weightage: '4-5 Marks', difficulty: 'Hard' },
      { id: 'g_algo_5', title: 'NP-Completeness, Reduction & Approximation Algorithms', weightage: '1-2 Marks', difficulty: 'Hard' }
    ]
  },
  {
    id: 'g_toc',
    name: 'Theory of Computation (TOC)',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_toc_1', title: 'Regular Languages: DFA, NFA, Regular Expressions & Pumping Lemma', weightage: '3-4 Marks', difficulty: 'Medium' },
      { id: 'g_toc_2', title: 'Context-Free Languages: CFG, Chomsky Normal Form & Pushdown Automata', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_toc_3', title: 'Turing Machines & Decidability (Halting Problem, Rice Theorem)', weightage: '2-3 Marks', difficulty: 'Hard' }
    ]
  },
  {
    id: 'g_cd',
    name: 'Compiler Design',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_cd_1', title: 'Lexical Analysis & Finite Automata Implementation', weightage: '1-2 Marks', difficulty: 'Easy' },
      { id: 'g_cd_2', title: 'Parsing: Top-Down LL(1) & Bottom-Up LR(0), SLR(1), LALR(1)', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_cd_3', title: 'Syntax Directed Translation, Runtime Environments & Code Optimization', weightage: '2-3 Marks', difficulty: 'Hard' }
    ]
  },
  {
    id: 'g_os',
    name: 'Operating Systems',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_os_1', title: 'Processes, Threads & CPU Scheduling Algorithms', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_os_2', title: 'Process Synchronization: Semaphores, Monitors & Deadlocks', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_os_3', title: 'Memory Management: Paging, Segmentation & Page Replacement', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_os_4', title: 'File Systems, Disk Scheduling & I/O Protection', weightage: '1-2 Marks', difficulty: 'Easy' }
    ]
  },
  {
    id: 'g_dbms',
    name: 'Database Management Systems (DBMS)',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_db_1', title: 'ER-Diagrams, Relational Model & Relational Algebra', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_db_2', title: 'SQL Queries, Joins, Aggregations & Subqueries', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_db_3', title: 'Normalization: Functional Dependencies, 1NF, 2NF, 3NF & BCNF', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_db_4', title: 'Transactions, Serializability, Concurrency & B/B+ Trees', weightage: '3-4 Marks', difficulty: 'Hard' }
    ]
  },
  {
    id: 'g_cn',
    name: 'Computer Networks',
    category: 'Core CS & IT',
    chapters: [
      { id: 'g_cn_1', title: 'Data Link Layer: Framing, Error Control (CRC), Flow Control (Sliding Window)', weightage: '2-3 Marks', difficulty: 'Medium' },
      { id: 'g_cn_2', title: 'Network Layer: IPv4/IPv6 Addressing, Subnetting & CIDR', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_cn_3', title: 'Routing Algorithms: Distance Vector, Link State (OSPF, BGP)', weightage: '2-3 Marks', difficulty: 'Hard' },
      { id: 'g_cn_4', title: 'Transport Layer: TCP, UDP, Congestion Control & Flow Control', weightage: '3-4 Marks', difficulty: 'Hard' },
      { id: 'g_cn_5', title: 'Application Layer: DNS, HTTP, SMTP, FTP & Network Security', weightage: '1-2 Marks', difficulty: 'Easy' }
    ]
  }
];
