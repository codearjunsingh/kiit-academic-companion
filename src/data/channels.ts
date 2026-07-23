export interface ChannelInfo {
  name: string;
  handle?: string;
  language: 'Hindi' | 'English' | 'Hinglish';
  category: 'Class 11-12 Foundation' | 'C-C++-Python' | 'CSE Core' | 'AIML Specialization';
  description: string;
  topicsCovered: string[];
}

export const YOUTUBE_CHANNELS: ChannelInfo[] = [
  {
    name: 'Physics Wallah - Alakh Pandey',
    language: 'Hindi',
    category: 'Class 11-12 Foundation',
    description: 'Gold standard for Class 11-12 Physics, Chemistry, and Mathematics fundamentals.',
    topicsCovered: ['Physics (Waves, EM, Optics)', 'Chemistry (Thermodynamics, Kinetics)', 'Maths Calculus']
  },
  {
    name: 'Khan Academy',
    language: 'English',
    category: 'Class 11-12 Foundation',
    description: 'World-renowned step-by-step visual explainers for basic algebra, calculus, and physics.',
    topicsCovered: ['Fractions & Algebra', 'Limits & Derivatives', 'Vectors & Geometry']
  },
  {
    name: '3Blue1Brown',
    language: 'English',
    category: 'Class 11-12 Foundation',
    description: 'Unmatched animated visual intuition for linear algebra, calculus, and neural network math.',
    topicsCovered: ['Essence of Calculus', 'Essence of Linear Algebra', 'Neural Networks Math']
  },
  {
    name: 'CodeWithHarry',
    language: 'Hindi',
    category: 'C-C++-Python',
    description: 'Massive, beginner-friendly programming catalog with full project walkthroughs.',
    topicsCovered: ['C Programming (CS13003)', 'C++ & OOP', 'Python Masterclass']
  },
  {
    name: 'Apna College',
    language: 'Hindi',
    category: 'C-C++-Python',
    description: 'Crisp, modern programming tutorials and structured placement preparation tracks.',
    topicsCovered: ['C++ & STL', 'DSA Alpha Batch', 'Web & Coding Basics']
  },
  {
    name: 'Love Babbar',
    language: 'Hindi',
    category: 'C-C++-Python',
    description: 'DSA-focused channel creator of the famous 450 DSA Sheet.',
    topicsCovered: ['C++ STL', 'Data Structures & Algorithms', 'Placement Strategy']
  },
  {
    name: 'Neso Academy',
    language: 'English',
    category: 'CSE Core',
    description: 'Academic excellence for university exams and GATE. Extremely clean structured slides.',
    topicsCovered: ['C Programming', 'Digital Electronics (EC10005)', 'OS', 'DBMS', 'CN', 'TOC']
  },
  {
    name: 'Striver / takeUforward',
    language: 'English',
    category: 'CSE Core',
    description: 'Creator of the definitive A2Z DSA Sheet used worldwide for technical interview prep.',
    topicsCovered: ['A2Z DSA Course', 'Trees & Graphs', 'Dynamic Programming', 'System Design']
  },
  {
    name: 'Abdul Bari',
    language: 'English',
    category: 'CSE Core',
    description: 'Legendary educator for understanding algorithm mechanics and time/space complexity.',
    topicsCovered: ['Algorithms', 'Data Structures', 'Divide & Conquer', 'Greedy & DP']
  },
  {
    name: 'Gate Smashers',
    language: 'Hindi',
    category: 'CSE Core',
    description: 'The go-to exam prep channel for Indian engineering students covering 100% of CS core.',
    topicsCovered: ['Operating Systems', 'DBMS & SQL', 'Computer Networks', 'Automata / TOC']
  },
  {
    name: 'StatQuest with Josh Starmer',
    language: 'English',
    category: 'AIML Specialization',
    description: 'The clearest statistics and Machine Learning explainer on YouTube, breaking complex math into simple steps.',
    topicsCovered: ['Probability Distributions', 'Hypothesis Testing', 'Regression & SVM', 'Neural Net Intuition']
  },
  {
    name: 'CampusX',
    language: 'Hinglish',
    category: 'AIML Specialization',
    description: 'Comprehensive 100 Days of ML and Deep Learning practical playlists.',
    topicsCovered: ['NumPy & Pandas', '100 Days of Machine Learning', 'Deep Learning & PyTorch', 'NLP']
  },
  {
    name: 'Krish Naik',
    language: 'Hinglish',
    category: 'AIML Specialization',
    description: 'End-to-end data science and AI project building, covering everything from ML to Generative AI.',
    topicsCovered: ['Machine Learning', 'Deep Learning & CNNs', 'NLP & LLMs', 'Computer Vision']
  },
  {
    name: 'codebasics',
    language: 'English',
    category: 'AIML Specialization',
    description: 'Beginner-friendly real-world data science projects and resume building guidance.',
    topicsCovered: ['Python for Data Science', 'Pandas & EDA', 'PowerBI & SQL', 'Machine Learning']
  },
  {
    name: 'Corey Schafer',
    language: 'English',
    category: 'C-C++-Python',
    description: 'Gold-standard in-depth Python software development and web development tutorials.',
    topicsCovered: ['Python OOP', 'Decorators & Generators', 'Git & Environment Setup']
  },
  {
    name: 'Telusko',
    language: 'Hinglish',
    category: 'C-C++-Python',
    description: 'Concise and clear programming conceptual explainers for beginners.',
    topicsCovered: ['Python Fundamentals', 'Java & Web', 'Database Basics']
  }
];
