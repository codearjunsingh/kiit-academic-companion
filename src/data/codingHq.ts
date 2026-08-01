export interface CodingTrack {
  id: string;
  category: 'Languages' | 'Core CS & Tools' | 'DSA' | 'AI & ML';
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  keyConcepts: string[];
  miniProjectIdea: string;
  interviewQuestions: string[];
  youtubeSearchQuery: string;
  order?: number;
}

export const CODING_TRACKS: CodingTrack[] = [
  {
    id: 'track_c',
    category: 'Languages',
    title: 'C Programming Mastery (ANSI C)',
    description: 'Foundation language for understanding memory, pointers, stack/heap allocation, and structural programming.',
    difficulty: 'Beginner',
    keyConcepts: ['Variables & Datatypes', 'Control Statements (if, switch, loops)', 'Functions & Recursion', 'Arrays & Strings', 'Pointers & Memory Addresses', 'Structures & Unions', 'File Handling'],
    miniProjectIdea: 'Build a CLI Student Management System or Bank Account Simulator in pure C.',
    interviewQuestions: [
      'What is the difference between malloc() and calloc()?',
      'How do dangling pointers occur and how can you prevent them?',
      'Explain pass-by-value vs pass-by-reference using pointers.'
    ],
    youtubeSearchQuery: 'C programming full course beginners Balagurusamy',
    order: 1
  },
  {
    id: 'track_cpp',
    category: 'Languages',
    title: 'C++ & Object Oriented Programming (OOP)',
    description: 'Modern C++ with STL containers, classes, inheritance, polymorphism, and memory safety.',
    difficulty: 'Intermediate',
    keyConcepts: ['Classes & Objects', 'Encapsulation & Abstraction', 'Inheritance & Polymorphism', 'Operator Overloading', 'STL (Vector, Map, Set, Stack, Queue)', 'Smart Pointers (unique_ptr, shared_ptr)'],
    miniProjectIdea: 'Create a CLI Library Management System or Command-Line RPG Game using C++ STL.',
    interviewQuestions: [
      'What is the difference between virtual functions and pure virtual functions?',
      'Explain constructor overloading and copy constructors.',
      'How does std::vector handle dynamic memory reallocation behind the scenes?'
    ],
    youtubeSearchQuery: 'C++ OOPs and STL full playlist beginners',
    order: 2
  },
  {
    id: 'track_python',
    category: 'Languages',
    title: 'Python 3 for Data Science & Automation',
    description: 'High-level dynamic language essential for AI/ML, data analysis, web scraping, and rapid prototyping.',
    difficulty: 'Beginner',
    keyConcepts: ['Lists, Tuples, Dicts, Sets', 'List Comprehensions', 'Lambda Functions & Map/Filter', 'Modules & Packages (NumPy, Pandas)', 'File I/O & Exception Handling', 'OOP in Python'],
    miniProjectIdea: 'Build an automated Web Scraper or Weather Data Visualizer using Pandas & Matplotlib.',
    interviewQuestions: [
      'What is the difference between list vs tuple in Python?',
      'Explain Pythons GIL (Global Interpreter Lock).',
      'How do Python generators (yield) save memory compared to lists?'
    ],
    youtubeSearchQuery: 'Python for beginners full course NumPy Pandas',
    order: 3
  },
  {
    id: 'track_dsa',
    category: 'DSA',
    title: 'Data Structures & Algorithms (DSA)',
    description: 'Core problem-solving foundation needed for cracking FAANG / top product company coding interviews.',
    difficulty: 'Intermediate',
    keyConcepts: ['Arrays & Strings', 'Linked Lists (Singly & Doubly)', 'Stacks & Queues', 'Trees & Binary Search Trees (BST)', 'Heaps & Priority Queues', 'Graphs (BFS & DFS)', 'Sorting & Searching (Binary Search)', 'Dynamic Programming (DP)'],
    miniProjectIdea: 'Implement a Graph Shortest Path Visualizer (Dijkstra Algorithm) or Trie-based Autocomplete engine.',
    interviewQuestions: [
      'How do you detect a cycle in a linked list using Floyds Tortoise and Hare algorithm?',
      'Explain the time complexity of QuickSort vs MergeSort in best and worst cases.',
      'What is the difference between BFS and DFS graph traversals?'
    ],
    youtubeSearchQuery: 'Data structures and algorithms in C++ full course Striver',
    order: 4
  },
  {
    id: 'track_ai_ml',
    category: 'AI & ML',
    title: 'Artificial Intelligence & Machine Learning Basics',
    description: 'CSE-AIML specialization core: Supervised learning, neural networks, computer vision, and LLM prompt engineering.',
    difficulty: 'Advanced',
    keyConcepts: ['Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Neural Networks & Activation Functions', 'Convolutional Neural Networks (CNN)', 'Natural Language Processing (NLP)', 'Transformers & Prompt Engineering', 'PyTorch / TensorFlow Basics'],
    miniProjectIdea: 'Build a Sentiment Analysis Web App or Image Classification model using PyTorch.',
    interviewQuestions: [
      'What is the difference between Supervised, Unsupervised, and Reinforcement Learning?',
      'Explain overfitting and techniques like Regularization, Dropout, and Early Stopping.',
      'How does self-attention work in Transformer architectures?'
    ],
    youtubeSearchQuery: 'Machine learning full course Andrew Ng PyTorch basics',
    order: 5
  },
  {
    id: 'track_git_linux',
    category: 'Core CS & Tools',
    title: 'Linux CLI, Git & GitHub Mastery',
    description: 'Essential developer tools for version control, open-source contribution, and terminal efficiency.',
    difficulty: 'Beginner',
    keyConcepts: ['Linux Shell Commands (ls, cd, grep, find, chmod)', 'Git Init, Add, Commit, Push, Pull', 'Branching, Merging & Merge Conflict Resolution', 'GitHub Pull Requests & Actions', 'SSH Key Setup'],
    miniProjectIdea: 'Publish an open-source tool on GitHub with automated GitHub Actions CI workflow.',
    interviewQuestions: [
      'What is the difference between git merge and git rebase?',
      'Explain the Linux file permissions rwx for Owner, Group, and Others.',
      'How do you revert a committed change in Git safely?'
    ],
    youtubeSearchQuery: 'Git and GitHub full course tutorial for beginners Linux command line',
    order: 6
  }
];
