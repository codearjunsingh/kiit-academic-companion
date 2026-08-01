export type MasteryStatus = 'Not Started' | 'Learning' | 'Practicing' | 'Needs Revision' | 'Mastered' | 'Forgotten';

export interface ConceptDetail {
  whatIsIt: string;
  whyLearnIt: string;
  whereUsed: string;
  commonMistakes: string[];
  realWorldApplications: string[];
  interviewQuestions: string[];
  examQuestions: string[];
  miniProjectIdea: string;
  youtubeQuery: string;
}

export interface KnowledgeNode {
  id: string;
  title: string;
  category: 'Mathematics' | 'Physics' | 'Computer Science' | 'Electronics' | 'AI & ML' | 'General Knowledge' | 'English';
  prerequisites: string[]; // Node IDs
  unlocks: string[]; // Node IDs
  difficulty: 1 | 2 | 3 | 4 | 5;
  detail: ConceptDetail;
}

export const MASTER_KNOWLEDGE_GRAPH: KnowledgeNode[] = [
  {
    id: 'kn_math_fractions',
    title: 'Fractions, Decimals & Percentages',
    category: 'Mathematics',
    prerequisites: [],
    unlocks: ['kn_math_algebra_1'],
    difficulty: 1,
    detail: {
      whatIsIt: 'Fractions represent equal parts of a whole or a ratio of two integers (a/b). Decimals and percentages are alternative formats for expressing these ratios.',
      whyLearnIt: 'Essential foundation for all algebra, financial math, statistics, and computer graphics calculation.',
      whereUsed: 'Banking interest formulas, algorithm complexity percentages, probability calculations.',
      commonMistakes: ['Adding denominators directly (1/2 + 1/3 != 2/5)', 'Confusing percentage changes (50% increase followed by 50% decrease does not return to original value)'],
      realWorldApplications: ['Calculating discounts during shopping', 'Aspect ratios in web UI design', 'Splitting bills and ingredient scaling'],
      interviewQuestions: ['How do floating point numbers in computers cause precision errors in decimal representations?'],
      examQuestions: ['CDS Math 2023: Find the ratio of shaded to unshaded area in a composite circle.'],
      miniProjectIdea: 'Build a CLI Fraction Simplifier and Currency Percentage Calculator in C/Python.',
      youtubeQuery: 'Fractions decimals percentages fundamentals crash course'
    }
  },
  {
    id: 'kn_math_algebra_1',
    title: 'Linear Algebra & Variable Equations',
    category: 'Mathematics',
    prerequisites: ['kn_math_fractions'],
    unlocks: ['kn_math_functions', 'kn_math_matrices'],
    difficulty: 2,
    detail: {
      whatIsIt: 'The branch of mathematics dealing with symbols (variables) and rules for manipulating these symbols in equations.',
      whyLearnIt: 'The language of all engineering, data science, machine learning models, and physics laws.',
      whereUsed: 'Machine learning weights calculation, game physics trajectories, circuit current loops.',
      commonMistakes: ['Forgetting to balance equations when moving terms across the equals sign', 'Multiplying or dividing by zero'],
      realWorldApplications: ['Calculating trajectory paths in video games', 'Budget planning equations', 'Predicting sales trends'],
      interviewQuestions: ['Explain the geometric meaning of solving a system of two linear equations with two variables.'],
      examQuestions: ['GATE CSE 2022: Solve for x and y in system of linear equations.'],
      miniProjectIdea: 'Build a CLI Linear Equation Solver using C/Python.',
      youtubeQuery: 'Linear algebra basics variables linear equations beginners'
    }
  },
  {
    id: 'kn_math_matrices',
    title: 'Matrices, Determinants & Eigenvalues',
    category: 'Mathematics',
    prerequisites: ['kn_math_algebra_1'],
    unlocks: ['kn_ai_neural_nets'],
    difficulty: 3,
    detail: {
      whatIsIt: 'A rectangular array of numbers arranged in rows and columns used to represent linear transformations and systems of equations.',
      whyLearnIt: 'Computer graphics, image processing (filters), and deep learning neural networks rely 100% on matrix multiplication.',
      whereUsed: '3D rendering engines (OpenGL/DirectX), PageRank search algorithms, Neural Network forward/backward passes.',
      commonMistakes: ['Assuming matrix multiplication is commutative (A*B != B*A)', 'Mismatched inner dimensions during matrix multiplication'],
      realWorldApplications: ['3D character rotation in gaming', 'Image blurring and edge detection filters', 'Google PageRank algorithm'],
      interviewQuestions: ['What is an Eigenvalue and Eigenvector? Give a real-world intuition.'],
      examQuestions: ['GATE CSE 2024: Find the rank and eigenvalues of a given 3x3 matrix.'],
      miniProjectIdea: 'Implement a C/C++ Matrix Operations Library with 2D transformation methods.',
      youtubeQuery: 'Matrices determinants eigenvalues 3Blue1Brown linear algebra'
    }
  },
  {
    id: 'kn_math_functions',
    title: 'Mathematical Functions & Graphing',
    category: 'Mathematics',
    prerequisites: ['kn_math_algebra_1'],
    unlocks: ['kn_math_calculus_1'],
    difficulty: 2,
    detail: {
      whatIsIt: 'A relation between a set of inputs and set of permissible outputs where each input is related to exactly one output f(x).',
      whyLearnIt: 'Core concept behind programming functions, neural network activation functions (ReLU, Sigmoid), and calculus.',
      whereUsed: 'AI loss function optimization, signal processing, audio waveform generation.',
      commonMistakes: ['Confusing domain (valid inputs) with range (valid outputs)', 'Dividing by zero in rational functions'],
      realWorldApplications: ['Modeling population growth curves', 'Audio frequency synthesis', 'AI activation curves'],
      interviewQuestions: ['What is a bijection, injection, and surjection function?'],
      examQuestions: ['KIIT End-Sem 2025: Determine if the given function is continuous at x=0.'],
      miniProjectIdea: 'Build a CLI Function Graph Plotter in Python using Matplotlib.',
      youtubeQuery: 'Mathematical functions domain range graph visualization'
    }
  },
  {
    id: 'kn_math_calculus_1',
    title: 'Differentiation & Rate of Change',
    category: 'Mathematics',
    prerequisites: ['kn_math_functions'],
    unlocks: ['kn_math_calculus_2', 'kn_ai_neural_nets'],
    difficulty: 3,
    detail: {
      whatIsIt: 'Calculus technique that measures how a function changes as its input changes (instantaneous slope/rate of change).',
      whyLearnIt: 'Gradient Descent in Machine Learning uses differentiation (derivatives) to minimize prediction error!',
      whereUsed: 'Backpropagation in PyTorch/TensorFlow, calculating rocket acceleration, economic marginal cost analysis.',
      commonMistakes: ['Forgetting the Chain Rule for composite functions', 'Confusing instantaneous rate of change with average rate of change'],
      realWorldApplications: ['Self-driving car acceleration adjustment', 'AI model error reduction (Gradient Descent)', 'Physics velocity derivation'],
      interviewQuestions: ['How does Gradient Descent use partial derivatives to optimize weights in deep learning?'],
      examQuestions: ['GATE CSE 2023: Evaluate dy/dx for y = e^(x*sin(x)).'],
      miniProjectIdea: 'Implement a Python Gradient Descent Simulator visualizing loss optimization.',
      youtubeQuery: 'Differentiation derivatives calculus 1 3Blue1Brown'
    }
  },
  {
    id: 'kn_ai_neural_nets',
    title: 'Deep Learning & Artificial Neural Networks',
    category: 'AI & ML',
    prerequisites: ['kn_math_matrices', 'kn_math_calculus_1'],
    unlocks: ['kn_ai_transformers'],
    difficulty: 4,
    detail: {
      whatIsIt: 'Computational models inspired by biological human brain brains consisting of interconnected artificial neurons organized in layers.',
      whyLearnIt: 'The technology driving modern AI revolutions: ChatGPT, self-driving cars, facial recognition, and automated speech.',
      whereUsed: 'OpenAI GPT-4, Tesla Autopilot vision system, Google Translate.',
      commonMistakes: ['Vanishing/Exploding gradients during training', 'Overfitting model to training dataset without cross-validation'],
      realWorldApplications: ['Medical image tumor diagnosis', 'Autonomous vehicle navigation', 'Voice assistants (Alexa/Siri)'],
      interviewQuestions: ['Explain the Backpropagation algorithm step by step.'],
      examQuestions: ['KIIT CSE-AIML 2026: Compare Feedforward vs Recurrent Neural Networks.'],
      miniProjectIdea: 'Train a PyTorch Neural Network to classify handwritten digits (MNIST dataset).',
      youtubeQuery: 'Neural networks deep learning PyTorch full crash course'
    }
  }
];

export function calculateConceptHealth(lastReviewedTimestamp?: string): number {
  if (!lastReviewedTimestamp) return 40; // Default new/unreviewed health
  const now = Date.now();
  const last = new Date(lastReviewedTimestamp).getTime();
  const diffDays = (now - last) / (1000 * 3600 * 24);

  // Ebbinghaus Forgetting Curve model: Health decays over time
  if (diffDays <= 1) return 100;
  if (diffDays <= 3) return 85;
  if (diffDays <= 7) return 70;
  if (diffDays <= 15) return 55;
  if (diffDays <= 30) return 40;
  return 20;
}
