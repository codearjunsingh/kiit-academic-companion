export interface LearningJourneyStep {
  id: string;
  title: string;
  difficulty: number; // 1-5
  yourLevel: number; // 1-5
  estimatedTime: string;
  category: string;
  prerequisites: string[];
  book: { title: string; author: string; pages: string; rating: number };
  video: { teacher: string; category: string; url: string; rating: number };
  practiceCount: number;
}

export const MATHEMATICS_JOURNEY: LearningJourneyStep[] = [
  {
    id: 'm_arithmetic',
    title: 'Basic Arithmetic & Operations',
    difficulty: 1,
    yourLevel: 5,
    estimatedTime: '45 mins',
    category: 'Foundation',
    prerequisites: [],
    book: { title: 'NCERT Class 6 Mathematics', author: 'NCERT', pages: 'Pages 1 - 30', rating: 5 },
    video: { teacher: 'Khan Academy / NCERT Basics', category: 'Foundation', url: 'https://www.youtube.com/results?search_query=ncert+class+6+maths+arithmetic', rating: 5 },
    practiceCount: 30
  },
  {
    id: 'm_fractions',
    title: 'Fractions, Decimals & Percentages',
    difficulty: 1,
    yourLevel: 4,
    estimatedTime: '90 mins',
    category: 'Foundation',
    prerequisites: ['Basic Arithmetic & Operations'],
    book: { title: 'NCERT Class 7 Mathematics', author: 'NCERT', pages: 'Pages 25 - 60', rating: 5 },
    video: { teacher: 'Dear Sir / Khan Academy', category: 'Foundation', url: 'https://www.youtube.com/results?search_query=fractions+and+decimals+class+7', rating: 5 },
    practiceCount: 25
  },
  {
    id: 'm_algebra',
    title: 'Basic Algebra & Equations',
    difficulty: 2,
    yourLevel: 3,
    estimatedTime: '2.5 Hours',
    category: 'Foundation',
    prerequisites: ['Fractions, Decimals & Percentages'],
    book: { title: 'NCERT Class 8 & 9 Algebra', author: 'NCERT', pages: 'Pages 70 - 110', rating: 5 },
    video: { teacher: 'Gajendra Purohit Basics', category: 'Beginner', url: 'https://www.youtube.com/results?search_query=basic+algebra+for+engineering', rating: 5 },
    practiceCount: 20
  },
  {
    id: 'm_functions',
    title: 'Functions, Limits & Continuity',
    difficulty: 3,
    yourLevel: 2,
    estimatedTime: '4 Hours',
    category: 'Class 11-12 Bridge',
    prerequisites: ['Basic Algebra & Equations'],
    book: { title: 'NCERT Class 11 Mathematics (Ch 2 & 13)', author: 'NCERT', pages: 'Pages 30 - 75', rating: 5 },
    video: { teacher: 'Neha Agrawal / PW JEE', category: 'Intermediate', url: 'https://www.youtube.com/results?search_query=functions+and+limits+class+11', rating: 5 },
    practiceCount: 25
  },
  {
    id: 'm_calculus',
    title: 'Differential Calculus & Derivatives',
    difficulty: 4,
    yourLevel: 1,
    estimatedTime: '6 Hours',
    category: 'University & GATE',
    prerequisites: ['Functions, Limits & Continuity', 'Basic Algebra & Equations'],
    book: { title: 'Advanced Engineering Mathematics (10th Ed)', author: 'Erwin Kreyszig (Wiley)', pages: 'Pages 21 - 54', rating: 5 },
    video: { teacher: '3Blue1Brown (Visual) / Gajendra Purohit (Uni)', category: 'University', url: 'https://www.youtube.com/results?search_query=differential+calculus+kreyszig', rating: 5 },
    practiceCount: 35
  },
  {
    id: 'm_matrices',
    title: 'Matrices & Linear Algebra',
    difficulty: 3,
    yourLevel: 2,
    estimatedTime: '5 Hours',
    category: 'University & GATE',
    prerequisites: ['Basic Algebra & Equations'],
    book: { title: 'Advanced Engineering Mathematics (10th Ed)', author: 'Erwin Kreyszig (Wiley)', pages: 'Pages 250 - 290', rating: 5 },
    video: { teacher: '3Blue1Brown (Linear Algebra)', category: 'Visual', url: 'https://www.youtube.com/results?search_query=linear+algebra+3blue1brown', rating: 5 },
    practiceCount: 30
  }
];

export const CODING_JOURNEY: LearningJourneyStep[] = [
  {
    id: 'c_basics',
    title: 'C Language Fundamentals & Syntax',
    difficulty: 2,
    yourLevel: 4,
    estimatedTime: '3 Hours',
    category: 'Programming 101',
    prerequisites: [],
    book: { title: 'Programming in ANSI C (9th Ed)', author: 'E. Balagurusamy', pages: 'Pages 1 - 50', rating: 5 },
    video: { teacher: 'CodeWithHarry / Jenny\'s Lectures', category: 'Beginner', url: 'https://www.youtube.com/results?search_query=c+programming+codewithharry', rating: 5 },
    practiceCount: 20
  },
  {
    id: 'c_pointers',
    title: 'C Pointers & Memory Allocation',
    difficulty: 4,
    yourLevel: 2,
    estimatedTime: '4 Hours',
    category: 'Core CS',
    prerequisites: ['C Language Fundamentals & Syntax'],
    book: { title: 'Programming in ANSI C (9th Ed)', author: 'E. Balagurusamy', pages: 'Pages 140 - 182', rating: 5 },
    video: { teacher: 'Neso Academy / Gate Smashers', category: 'Exam & Core', url: 'https://www.youtube.com/results?search_query=c+pointers+neso+academy', rating: 5 },
    practiceCount: 25
  },
  {
    id: 'c_dsa',
    title: 'Data Structures (Arrays, Linked Lists, Trees)',
    difficulty: 4,
    yourLevel: 1,
    estimatedTime: '15 Hours',
    category: 'Placements & GATE',
    prerequisites: ['C Pointers & Memory Allocation'],
    book: { title: 'Data Structures using C', author: 'Reema Thareja (Oxford)', pages: 'Pages 90 - 240', rating: 5 },
    video: { teacher: 'Abdul Bari / Striver (takeUforward)', category: 'Placements & GATE', url: 'https://www.youtube.com/results?search_query=abdul+bari+data+structures', rating: 5 },
    practiceCount: 50
  }
];
