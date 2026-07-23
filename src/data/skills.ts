export interface Creator {
  name: string;
  note: string;
}

export interface SkillTopic {
  id: string;
  category: 'Programming Languages' | 'CSE Core' | 'AIML Specialization';
  topic: string;
  plainExplanation: string;
  prerequisiteOf?: string[];
  recommendedChannels: Creator[];
  youtubeSearchQuery: string;
}

export const SKILL_TOPICS: SkillTopic[] = [
  // Category 1 — Programming Languages
  {
    id: 'sk_lang_1',
    category: 'Programming Languages',
    topic: 'C Fundamentals',
    plainExplanation: 'Syntax, variables, loops, functions, and memory basics in C (already covered in CS13003).',
    recommendedChannels: [
      { name: 'CodeWithHarry', note: 'Hindi, beginner-friendly, complete C course' },
      { name: 'Neso Academy', note: 'English, deep structured computer science concepts' },
      { name: 'Apna College', note: 'Hindi, crisp beginner tutorials' }
    ],
    youtubeSearchQuery: 'C programming language full course CodeWithHarry'
  },
  {
    id: 'sk_lang_2',
    category: 'Programming Languages',
    topic: 'C++ Fundamentals & STL',
    plainExplanation: 'Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism) and Standard Template Library (Vector, Map, Set).',
    prerequisiteOf: ['sk_core_1', 'sk_core_2'],
    recommendedChannels: [
      { name: 'CodeWithHarry', note: 'Hindi, beginner-friendly, huge catalog' },
      { name: 'Apna College', note: 'Hindi, structured DSA-with-C++ path' },
      { name: 'Love Babbar', note: 'Hindi, DSA & C++ focused' }
    ],
    youtubeSearchQuery: 'cpp OOPs and STL full course Apna College Love Babbar'
  },
  {
    id: 'sk_lang_3',
    category: 'Programming Languages',
    topic: 'Python Fundamentals',
    plainExplanation: 'Syntax, list/dict data structures, functions, OOP, and file handling in Python.',
    prerequisiteOf: ['sk_ai_1', 'sk_ai_2', 'sk_ai_3'],
    recommendedChannels: [
      { name: 'CodeWithHarry', note: 'Hindi, beginner to advanced' },
      { name: 'Telusko', note: 'English/Hinglish, clear and concise' },
      { name: 'Corey Schafer', note: 'English, professional software engineering style' }
    ],
    youtubeSearchQuery: 'python programming full course CodeWithHarry Corey Schafer'
  },

  // Category 2 — CSE Core
  {
    id: 'sk_core_1',
    category: 'CSE Core',
    topic: 'Data Structures & Algorithms (DSA)',
    plainExplanation: 'Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing, and Dynamic Programming.',
    recommendedChannels: [
      { name: 'Striver / takeUforward', note: 'English, famous A2Z DSA Sheet' },
      { name: 'Abdul Bari', note: 'English, deep conceptual clarity, best for algorithm mechanics' },
      { name: 'Love Babbar', note: 'Hindi, famous 450 DSA Sheet' }
    ],
    youtubeSearchQuery: 'data structures and algorithms Striver takeUforward Abdul Bari'
  },
  {
    id: 'sk_core_2',
    category: 'CSE Core',
    topic: 'Object-Oriented Programming (Language Agnostic)',
    plainExplanation: 'Design principles, encapsulation, abstraction, SOLID principles, and design patterns.',
    recommendedChannels: [
      { name: 'CodeWithHarry', note: 'Hindi' },
      { name: 'Apna College', note: 'Hindi' },
      { name: 'FreeCodeCamp', note: 'English' }
    ],
    youtubeSearchQuery: 'object oriented programming principles concepts explained'
  },
  {
    id: 'sk_core_3',
    category: 'CSE Core',
    topic: 'Operating Systems (OS)',
    plainExplanation: 'Processes, threads, CPU scheduling algorithms, deadlocks, virtual memory, and file systems.',
    recommendedChannels: [
      { name: 'Gate Smashers', note: 'Hindi, covers full university & GATE syllabus' },
      { name: 'Neso Academy', note: 'English, crisp animated fundamentals' }
    ],
    youtubeSearchQuery: 'operating system full course Gate Smashers Neso Academy'
  },
  {
    id: 'sk_core_4',
    category: 'CSE Core',
    topic: 'Database Management Systems (DBMS)',
    plainExplanation: 'ER diagrams, Relational Algebra, SQL queries, Normalization (1NF to BCNF), and ACID transactions.',
    recommendedChannels: [
      { name: 'Gate Smashers', note: 'Hindi, GATE & University prep' },
      { name: 'Neso Academy', note: 'English, clear database concepts' }
    ],
    youtubeSearchQuery: 'DBMS full course SQL normalization Gate Smashers'
  },
  {
    id: 'sk_core_5',
    category: 'CSE Core',
    topic: 'Computer Networks (CN)',
    plainExplanation: 'OSI 7-layer model, TCP/IP, IP addressing (IPv4/v6), subnetting, routing protocols, and HTTP/DNS.',
    recommendedChannels: [
      { name: 'Gate Smashers', note: 'Hindi' },
      { name: 'Neso Academy', note: 'English' }
    ],
    youtubeSearchQuery: 'computer networks full course OSI model Gate Smashers'
  },
  {
    id: 'sk_core_6',
    category: 'CSE Core',
    topic: 'Theory of Computation / Automata',
    plainExplanation: 'Finite automata (DFA/NFA), regular expressions, context-free grammars, and Turing Machines.',
    recommendedChannels: [
      { name: 'Gate Smashers', note: 'Hindi' },
      { name: 'Neso Academy', note: 'English' }
    ],
    youtubeSearchQuery: 'theory of computation automata Gate Smashers Neso Academy'
  },

  // Category 3 — AIML Specialization
  {
    id: 'sk_ai_1',
    category: 'AIML Specialization',
    topic: 'Probability & Statistics for ML',
    plainExplanation: 'Probability distributions (Gaussian, Binomial), hypothesis testing, p-values, and Bayes Theorem.',
    recommendedChannels: [
      { name: 'StatQuest with Josh Starmer', note: 'English, unmatched visual intuition for statistics & ML' }
    ],
    youtubeSearchQuery: 'probability statistics for machine learning StatQuest Josh Starmer'
  },
  {
    id: 'sk_ai_2',
    category: 'AIML Specialization',
    topic: 'Python for Data Science (NumPy, Pandas, Matplotlib)',
    plainExplanation: 'Array math with NumPy, DataFrame manipulation with Pandas, and plotting graphs with Matplotlib/Seaborn.',
    recommendedChannels: [
      { name: 'CampusX', note: 'Hindi/Hinglish, structured practical playlists' },
      { name: 'codebasics', note: 'English, beginner-friendly real-world datasets' }
    ],
    youtubeSearchQuery: 'numpy pandas matplotlib full course CampusX codebasics'
  },
  {
    id: 'sk_ai_3',
    category: 'AIML Specialization',
    topic: 'Machine Learning Fundamentals',
    plainExplanation: 'Supervised (Regression, Classification) vs Unsupervised (K-Means, PCA) learning and model validation.',
    recommendedChannels: [
      { name: 'Krish Naik', note: 'Hindi/Hinglish, project-driven, huge catalog' },
      { name: 'CampusX', note: 'Hindi/Hinglish, structured 100 days of ML' },
      { name: 'codebasics', note: 'English' }
    ],
    youtubeSearchQuery: 'machine learning full course Krish Naik CampusX'
  },
  {
    id: 'sk_ai_4',
    category: 'AIML Specialization',
    topic: 'Deep Learning Fundamentals',
    plainExplanation: 'Artificial Neural Networks (ANN), backpropagation, Convolutional Neural Networks (CNN), and Recurrent Neural Networks (RNN).',
    recommendedChannels: [
      { name: 'CampusX', note: 'Hindi/Hinglish' },
      { name: 'Krish Naik', note: 'Hindi/Hinglish' },
      { name: 'StatQuest', note: 'English' },
      { name: '3Blue1Brown', note: 'English, unmatched 4-part visual series on neural network math' }
    ],
    youtubeSearchQuery: 'deep learning neural networks 3Blue1Brown Krish Naik'
  },
  {
    id: 'sk_ai_5',
    category: 'AIML Specialization',
    topic: 'Natural Language Processing (NLP) Basics',
    plainExplanation: 'Text tokenization, Bag of Words, TF-IDF, Word Embeddings (Word2Vec), and Transformers basics.',
    recommendedChannels: [
      { name: 'Krish Naik', note: 'Hindi/Hinglish' },
      { name: 'CampusX', note: 'Hindi/Hinglish' }
    ],
    youtubeSearchQuery: 'NLP natural language processing Krish Naik CampusX'
  },
  {
    id: 'sk_ai_6',
    category: 'AIML Specialization',
    topic: 'Computer Vision Basics',
    plainExplanation: 'Image processing with OpenCV, feature detection, object detection (YOLO), and image classification.',
    recommendedChannels: [
      { name: 'Krish Naik', note: 'Hindi/Hinglish' },
      { name: 'CampusX', note: 'Hindi/Hinglish' }
    ],
    youtubeSearchQuery: 'computer vision opencv yolo Krish Naik CampusX'
  }
];
