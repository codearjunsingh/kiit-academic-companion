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
  {
    subjectCode: 'MA11009',
    subjectName: 'Calculus and Differential Equations',
    chapterId: 'ma1_ch1',
    chapterTitle: 'Review of Calculus & Functions of Several Variables',
    class6to12Prerequisites: [
      { id: 'req_m1', label: 'Class 6-7 Fractions & Decimals', classLevel: 'Class 6-7' },
      { id: 'req_m2', label: 'Class 8 Basic Exponents & Factorisation', classLevel: 'Class 8' },
      { id: 'req_m3', label: 'Class 11 Sets, Relations & Functions', classLevel: 'Class 11' },
      { id: 'req_m4', label: 'Class 11 Limits & Derivatives Basics', classLevel: 'Class 11' },
      { id: 'req_m5', label: 'Class 12 Differentiation Rules (Product, Quotient, Chain Rule)', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Watch 3Blue1Brown "Essence of Calculus" videos to visualize tangent slopes geometrically.',
      'Solve 5 basic Class 11 limit problems before attempting partial derivatives.',
      'Refer to Erwin Kreyszig Chapter 1 (Pages 21-38) for exact university definitions.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_1', label: 'Partial Derivatives & Gradient Vectors (f_x, f_y)', category: 'Multivariable Calculus' },
      { id: 'kn_2', label: 'Taylor & Maclaurin Series Expansions', category: 'Series' },
      { id: 'kn_3', label: 'Lagrange Multipliers for Constrained Maxima/Minima', category: 'Optimization' }
    ]
  },
  {
    subjectCode: 'CS13003',
    subjectName: 'Introduction to Computer Programming (C Language)',
    chapterId: 'cs1_ch5',
    chapterTitle: 'Pointers, Memory Allocation & Dynamic Arrays',
    class6to12Prerequisites: [
      { id: 'req_c1', label: 'Class 6 Integer Operations & Number Memory', classLevel: 'Class 6' },
      { id: 'req_c2', label: 'Class 10 Variables & Logical Control Statements', classLevel: 'Class 10' },
      { id: 'req_c3', label: 'C Variables, Data Types & RAM Address Concept', classLevel: 'C Basics' },
      { id: 'req_c4', label: 'C Functions & Parameter Passing (Call by Value)', classLevel: 'C Basics' }
    ],
    suggestions: [
      'Draw RAM memory boxes on paper with addresses (e.g. Address 1004 holds value 25).',
      'Remember: & = Address-of operator, * = Value-at-address operator.',
      'Refer to E. Balagurusamy Chapter 11 (Pages 140-182) for step-by-step C pointer examples.'
    ],
    newKnowledgeTopics: [
      { id: 'kn_c1', label: 'Pointer Arithmetic & Array Indexing (ptr + i)', category: 'C Memory' },
      { id: 'kn_c2', label: 'Dynamic Memory Allocation (malloc, calloc, free)', category: 'Heap Management' },
      { id: 'kn_c3', label: 'Double Pointers (int **ptr) & Pointers to Functions', category: 'Advanced C' }
    ]
  },
  {
    subjectCode: 'MA11011',
    subjectName: 'Linear Algebra and Fourier Analysis',
    chapterId: 'ma2_ch1',
    chapterTitle: 'Vector Spaces & Systems of Linear Equations',
    class6to12Prerequisites: [
      { id: 'req_la1', label: 'Class 9 Linear Equations in Two Variables', classLevel: 'Class 9' },
      { id: 'req_la2', label: 'Class 12 Matrices & Determinants (Row/Column Operations)', classLevel: 'Class 12' },
      { id: 'req_la3', label: 'Class 12 Vector Algebra (Dot & Cross Products)', classLevel: 'Class 12' }
    ],
    suggestions: [
      'Practice Gauss-Jordan elimination to convert matrices into Echelon form.',
      'Watch 3Blue1Brown "Essence of Linear Algebra" for visual intuition on vector spaces.',
      'Refer to Erwin Kreyszig Chapter 7 (Pages 250-290).'
    ],
    newKnowledgeTopics: [
      { id: 'kn_la1', label: 'Matrix Rank & Consistency of Linear Systems', category: 'Linear Systems' },
      { id: 'kn_la2', label: 'Eigenvalues & Eigenvectors (det(A - lambda*I) = 0)', category: 'Spectral Theory' },
      { id: 'kn_la3', label: 'Fourier Series & Harmonic Analysis', category: 'Signal Processing' }
    ]
  },
  {
    subjectCode: 'CS21001',
    subjectName: 'Data Structures',
    chapterId: 'sem3_ds_2',
    chapterTitle: 'Stacks, Queues & Linked Lists',
    class6to12Prerequisites: [
      { id: 'req_ds1', label: 'C Programming Array Basics', classLevel: 'C Basics' },
      { id: 'req_ds2', label: 'C Pointers & Memory Allocation (malloc/free)', classLevel: 'C Memory' },
      { id: 'req_ds3', label: 'C Structures (struct Node)', classLevel: 'C Structures' }
    ],
    suggestions: [
      'Understand how node.next points to the RAM address of the next node.',
      'Practice drawing pointer links on paper before writing code in C.',
      'Refer to Horowitz & Sahani Data Structures in C (Pages 90-150).'
    ],
    newKnowledgeTopics: [
      { id: 'kn_ds1', label: 'Singly, Doubly & Circular Linked List Operations', category: 'Data Structures' },
      { id: 'kn_ds2', label: 'Stack Implementation (LIFO) & Queue Implementation (FIFO)', category: 'Abstract Types' },
      { id: 'kn_ds3', label: 'Binary Search Trees (BST) & AVL Balancing', category: 'Trees' }
    ]
  }
];
