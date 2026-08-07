export interface TeachMeLevel {
  knowNothing: string;
  class10: string;
  class12: string;
  college: string;
  examRevision: string;
}

export interface YouTubeTeacher {
  level: 'Beginner' | 'Exam Focus' | 'Animation / Visual' | 'Quick Revision';
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
  domain: string; // Mathematics, Physics, Chemistry, Computer Science, AI, Defence, Constitution, etc.
  title: string;
  difficulty: number; // 1-5 Stars
  yourLevel: number; // 1-5 Stars
  timeRequired: string;
  whatIsIt: string;
  whyDoINeedIt: string;
  whereUsed: string;
  repairPath: string[]; // e.g. ['Basic Arithmetic', 'Fractions', 'Algebra', 'Functions']
  prerequisites: { topicId: string; title: string; met: boolean }[];
  bestYouTube: YouTubeTeacher[];
  bestBook: BookRecommendation;
  practiceAndPyqs: { easy: number; medium: number; hard: number; pyqSummary: string };
  teachMe: TeachMeLevel;
}

export const ALL_DOMAINS = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English',
  'C Programming',
  'Python',
  'Java',
  'JavaScript',
  'Linux & Git',
  'SQL & Databases',
  'DSA (Data Structures)',
  'AI & Machine Learning',
  'Deep Learning',
  'Defence & CDS',
  'AFCAT',
  'GATE CSE',
  'Economics',
  'Indian Constitution',
  'Geography',
  'History',
  'Current Affairs',
  'Electronics',
  'Mechanical',
  'Civil',
  'Communication & Soft Skills',
  'Universal Human Values',
  'Aptitude & Reasoning',
  'Interview Prep',
  'Projects & Code',
  'Research & Papers'
];

export const MASTER_TEACHER_TOPICS: TeacherTopic[] = [
  {
    id: 'tp_calculus_1',
    domain: 'Mathematics',
    title: 'Differential Calculus & Derivatives',
    difficulty: 4,
    yourLevel: 1,
    timeRequired: '3 Hours',
    whatIsIt: 'Calculus technique that measures instantaneous speed and rate of change at a specific millisecond.',
    whyDoINeedIt: 'Essential for KIIT Math (MA11009), GATE CSE Engineering Math, and Gradient Descent in AI/Machine Learning.',
    whereUsed: 'AI loss function optimization (PyTorch), physics velocity/acceleration derivations, self-driving cars.',
    repairPath: ['Basic Arithmetic', 'Fractions & Decimals', 'Basic Algebra', 'Functions & Limits'],
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
    domain: 'C Programming',
    title: 'C Pointers & Memory Allocation',
    difficulty: 4,
    yourLevel: 2,
    timeRequired: '2.5 Hours',
    whatIsIt: 'Pointers are special variables that store RAM memory addresses of other variables.',
    whyDoINeedIt: 'Core of C/C++ programming (CS13003), data structures (Linked Lists/Trees), operating systems, and memory management.',
    whereUsed: 'Dynamic memory allocation (malloc/free), passing big data by reference, kernel drivers.',
    repairPath: ['RAM & Binary Basics', 'Variables & Datatypes', 'Functions & Parameters'],
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
    difficulty: 3,
    yourLevel: 2,
    timeRequired: '2 Hours',
    whatIsIt: 'Rectangular grid arrays of numbers used to solve complex multi-variable equations simultaneously.',
    whyDoINeedIt: 'Essential for KIIT Math, GATE CSE Linear Algebra, 3D Game Graphics, and Deep Learning Neural Networks.',
    whereUsed: 'Google PageRank search algorithm, 3D character rotation in gaming, PyTorch tensor multiplications.',
    repairPath: ['Linear Equations', 'Basic Algebra', 'Matrix Addition'],
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
  },
  {
    id: 'tp_cds_eng_1',
    domain: 'Defence & CDS',
    title: 'UPSC CDS English Vocabulary & Cloze Test',
    difficulty: 3,
    yourLevel: 3,
    timeRequired: '1.5 Hours',
    whatIsIt: 'High-frequency English word roots, synonyms, antonyms, and sentence completion techniques for UPSC CDS written exam.',
    whyDoINeedIt: 'Scores 100 marks in CDS English paper to qualify for IMA/OTA officer selection cutoffs.',
    whereUsed: 'UPSC Defence Officer written exams, SSB Officer Interview communication, SSB Group Discussion.',
    repairPath: ['Basic Grammar Rules', 'Parts of Speech', 'Root Words'],
    prerequisites: [],
    bestYouTube: [
      { level: 'Beginner', teacherName: 'CDS Journey / Defence Wallah', url: 'https://www.youtube.com/results?search_query=cds+english+vocabulary+cloze+test' },
      { level: 'Exam Focus', teacherName: 'SSB Crack Exams', url: 'https://www.youtube.com/results?search_query=cds+english+pyqs' }
    ],
    bestBook: {
      bookTitle: 'Pathfinder for CDS Examination',
      author: 'Arihant Experts',
      pageRange: 'Pages 50 - 120 (English Section)',
      rating: 5,
      badge: 'Exam Focus'
    },
    practiceAndPyqs: {
      easy: 20,
      medium: 30,
      hard: 15,
      pyqSummary: '10 Questions directly repeated in CDS 2023 & 2024 papers'
    },
    teachMe: {
      knowNothing: '💡 Vocabulary is just building a mental dictionary! Learn word roots like "bene" (good -> benefit, benevolent).',
      class10: 'Identify subject-verb agreement and eliminate choices that break grammatical tense.',
      class12: 'Practice spotting errors in prepositions (e.g. "discuss about" is WRONG, use "discuss").',
      college: 'Master idiom & phrase contextual usage and 20 cloze test paragraphs.',
      examRevision: '⚡ Quick Tip: Read editorial paragraphs daily; context clues solve 80% of Cloze test gaps.'
    }
  },
  {
    id: 'tp_uhv_1',
    domain: 'Universal Human Values',
    title: 'Self-Exploration, Sentient "I" vs Body & Value Education',
    difficulty: 2,
    yourLevel: 3,
    timeRequired: '1 Hour',
    whatIsIt: 'Holistic framework for value education, self-exploration, and understanding human harmony across 4 levels (Self, Family, Society, Nature).',
    whyDoINeedIt: 'Mandatory GER course (ID10003) for KIIT B.Tech 1st Year, carrying 3 credits for SGPA.',
    whereUsed: 'Ethical engineering decisions, team leadership, eco-friendly product design, personal well-being.',
    repairPath: ['Basic Civics & Ethics', 'Self Reflection'],
    prerequisites: [],
    bestYouTube: [
      { level: 'Beginner', teacherName: 'UHV NPTEL / AICTE Value Education', url: 'https://www.youtube.com/results?search_query=universal+human+values+id10003+aicte' },
      { level: 'Exam Focus', teacherName: 'Gate Smashers UHV / KIIT Lectures', url: 'https://www.youtube.com/results?search_query=universal+human+values+r+r+gaur' }
    ],
    bestBook: {
      bookTitle: 'Human Values and Professional Ethics',
      author: 'R R Gaur, R Sangal, G P Bagaria (Excel Books)',
      pageRange: 'Pages 1 - 98 (Modules 1 & 2)',
      rating: 5,
      badge: 'Best for University'
    },
    practiceAndPyqs: {
      easy: 15,
      medium: 15,
      hard: 5,
      pyqSummary: '5 Theory questions in KIIT Mid-Sem & End-Sem exams'
    },
    teachMe: {
      knowNothing: '💡 Understand that true happiness is continuous state of harmony within yourself, family, society, and nature!',
      class10: 'Differentiate between physical needs (food, clothing) which are limited, and mental needs (respect, trust) which are continuous.',
      class12: 'Realize that Human Being is a co-existence of Sentient "I" (Self) and Material "Body". "I" is the seer, doer, and enjoyer.',
      college: 'Master the 9 Universal Values in Relationships: Trust (intention vs competence), Respect, Affection, Care, Guidance, Reverence, Glory, Gratitude, and Love.',
      examRevision: '⚡ Exam Summary: Priorities = 1. Right Understanding -> 2. Relationship -> 3. Physical Facility. Health = Sanyam + Swasthya.'
    }
  }
];
