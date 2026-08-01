export interface TeachMeLevel {
  knowNothing: string;
  class10: string;
  class12: string;
  college: string;
  examRevision: string;
}

export interface YouTubeTeacher {
  level: 'Beginner' | 'Exam Focus' | 'Animation / Visual';
  teacherName: string;
  url: string;
}

export interface BookRecommendation {
  bookTitle: string;
  author: string;
  pageRange: string;
  rating: number; // 5 stars
  badge: 'Best for University' | 'Best for Basics' | 'Best for Understanding' | 'Exam Focus';
}

export interface TeacherTopic {
  id: string;
  domain: string; // Mathematics, Physics, Chemistry, Computer Science, AI, Defence, etc.
  title: string;
  whatIsIt: string;
  whyDoINeedIt: string;
  whereUsed: string;
  prerequisites: { topicId: string; title: string; met: boolean }[];
  bestYouTube: YouTubeTeacher[];
  bestBook: BookRecommendation;
  practiceAndPyqs: { easy: number; medium: number; hard: number; pyqSummary: string };
  teachMe: TeachMeLevel;
}

export const MASTER_TEACHER_TOPICS: TeacherTopic[] = [
  {
    id: 'tp_calculus_1',
    domain: 'Mathematics',
    title: 'Differential Calculus & Derivatives',
    whatIsIt: 'Calculus technique that measures instantaneous speed and rate of change at a specific millisecond.',
    whyDoINeedIt: 'Essential for KIIT Math (MA11009), GATE CSE Engineering Math, and Gradient Descent in AI/Machine Learning.',
    whereUsed: 'AI loss function optimization (PyTorch), physics velocity/acceleration derivations, self-driving cars.',
    prerequisites: [
      { topicId: 'tp_algebra_1', title: 'Basic Algebra & Equations', met: true },
      { topicId: 'tp_functions_1', title: 'Functions & Limits', met: false }
    ],
    bestYouTube: [
      { level: 'Beginner', teacherName: 'Gajendra Purohit / Bhagwan Singh', url: 'https://www.youtube.com/results?search_query=differential+calculus+engineering+mathematics+beginners' },
      { level: 'Exam Focus', teacherName: 'Gate Smashers / PW Nirmaan', url: 'https://www.youtube.com/results?search_query=calculus+gate+cse+engineering+math' },
      { level: 'Animation / Visual', teacherName: '3Blue1Brown (Essence of Calculus)', url: 'https://www.youtube.com/results?search_query=3blue1brown+essence+of+calculus' }
    ],
    bestBook: {
      bookTitle: 'Advanced Engineering Mathematics (10th Ed)',
      author: 'Erwin Kreyszig (Wiley)',
      pageRange: 'Pages 21 - 54 (Chapter 1 & 2)',
      rating: 5,
      badge: 'Best for University'
    },
    practiceAndPyqs: {
      easy: 10,
      medium: 20,
      hard: 10,
      pyqSummary: '3 PYQs in KIIT Mid-Sem 2024 & 2 GATE CSE Math questions'
    },
    teachMe: {
      knowNothing: '💡 Imagine taking a high-speed camera snapshot of a running athlete. Speed at 1 exact millisecond is the derivative!',
      class10: 'Recall dy/dx is the slope of the tangent line touching a curve at a single point x.',
      class12: 'Use standard rules: d/dx(x^n) = n*x^(n-1), d/dx(sin x) = cos x, and Chain Rule for nested functions f(g(x)).',
      college: 'Evaluate limit h->0 [f(x+h) - f(x)] / h and apply Taylor series expansions for higher order ODEs.',
      examRevision: '⚡ Quick Formula: Product Rule (u*v)\' = u\'v + uv\', Quotient Rule (u/v)\' = (u\'v - uv\') / v^2.'
    }
  },
  {
    id: 'tp_c_pointers',
    domain: 'Computer Science',
    title: 'C Pointers & Memory Allocation',
    whatIsIt: 'Pointers are special variables that store RAM memory addresses of other variables.',
    whyDoINeedIt: 'Core of C/C++ programming (CS13003), data structures (Linked Lists/Trees), operating systems, and memory management.',
    whereUsed: 'Dynamic memory allocation (malloc/free), passing big data by reference, kernel drivers.',
    prerequisites: [
      { topicId: 'tp_c_variables', title: 'C Variables & Datatypes', met: true },
      { topicId: 'tp_c_functions', title: 'C Functions & Parameters', met: true }
    ],
    bestYouTube: [
      { level: 'Beginner', teacherName: 'CodeWithHarry / Jenny\'s Lectures', url: 'https://www.youtube.com/results?search_query=c+pointers+jennys+lectures+codewithharry' },
      { level: 'Exam Focus', teacherName: 'Neso Academy / Gate Smashers', url: 'https://www.youtube.com/results?search_query=c+pointers+neso+academy+gate' }
    ],
    bestBook: {
      bookTitle: 'Programming in ANSI C (9th Ed)',
      author: 'E. Balagurusamy (McGraw Hill)',
      pageRange: 'Pages 140 - 182 (Chapter 11 Pointers)',
      rating: 5,
      badge: 'Best for University'
    },
    practiceAndPyqs: {
      easy: 15,
      medium: 25,
      hard: 10,
      pyqSummary: '4 Pointer trace questions in KIIT C Lab End-Sem 2025'
    },
    teachMe: {
      knowNothing: '💡 Your house has a physical street address. A pointer is simply writing down your house address on a sticky note!',
      class10: 'Variables hold values (int a = 10;). Pointers hold addresses (int *p = &a;).',
      class12: 'Dereferencing (*p) gets the value stored inside the memory address p points to.',
      college: 'Understand stack vs heap memory, malloc(), calloc(), free(), and dangling pointer prevention.',
      examRevision: '⚡ Key: & = address-of operator, * = value-at-address operator. int **pp is pointer to pointer.'
    }
  },
  {
    id: 'tp_matrices_1',
    domain: 'Mathematics',
    title: 'Matrices & Linear Systems',
    whatIsIt: 'Rectangular grid arrays of numbers used to solve complex multi-variable equations simultaneously.',
    whyDoINeedIt: 'Essential for KIIT Math, GATE CSE Linear Algebra, 3D Game Graphics, and Deep Learning Neural Networks.',
    whereUsed: 'Google PageRank search algorithm, 3D character rotation in gaming, PyTorch tensor multiplications.',
    prerequisites: [
      { topicId: 'tp_algebra_1', title: 'Basic Algebra & Equations', met: true }
    ],
    bestYouTube: [
      { level: 'Beginner', teacherName: 'Gajendra Purohit', url: 'https://www.youtube.com/results?search_query=matrices+engineering+mathematics+beginners' },
      { level: 'Animation / Visual', teacherName: '3Blue1Brown (Linear Algebra)', url: 'https://www.youtube.com/results?search_query=3blue1brown+linear+algebra+matrices' }
    ],
    bestBook: {
      bookTitle: 'Advanced Engineering Mathematics (10th Ed)',
      author: 'Erwin Kreyszig (Wiley)',
      pageRange: 'Pages 250 - 290 (Chapter 7 Linear Algebra)',
      rating: 5,
      badge: 'Best for University'
    },
    practiceAndPyqs: {
      easy: 10,
      medium: 20,
      hard: 10,
      pyqSummary: '2 GATE CSE questions on Matrix Eigenvalues and Rank'
    },
    teachMe: {
      knowNothing: '💡 Think of a matrix like a spreadsheet table with rows and columns used to process huge lists of numbers at once.',
      class10: 'Matrix addition requires same dimensions. Matrix multiplication row-by-column requires inner dimensions to match.',
      class12: 'Determinant det(A) measures scaling factor of area; if det(A) = 0, inverse A^-1 does not exist.',
      college: 'Find Matrix Rank, Echelon Form, Eigenvalues (det(A - lambda*I) = 0) and Eigenvectors.',
      examRevision: '⚡ Properties: det(AB) = det(A)*det(B), (AB)^T = B^T * A^T, Trace(A) = sum of eigenvalues.'
    }
  }
];
