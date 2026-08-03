export interface LibraryResource {
  id: string;
  title: string;
  type: 'Book' | 'PDF' | 'Research Paper' | 'YouTube Playlist' | 'GitHub Repo' | 'Cheat Sheet';
  category: 'Computer Science' | 'Mathematics' | 'Defence & CDS' | 'Physics' | 'AI & ML';
  authorOrSource: string;
  tags: string[];
  url: string;
}

export const UNIVERSAL_RESOURCES: LibraryResource[] = [
  {
    id: 'res_1',
    title: 'Advanced Engineering Mathematics (10th Ed)',
    type: 'Book',
    category: 'Mathematics',
    authorOrSource: 'Erwin Kreyszig (Wiley)',
    tags: ['Differential Equations', 'Linear Algebra', 'Complex Analysis', 'KIIT Course'],
    url: 'https://okarjunsingh.vercel.app'
  },
  {
    id: 'res_2',
    title: 'Programming in ANSI C (9th Ed)',
    type: 'Book',
    category: 'Computer Science',
    authorOrSource: 'E. Balagurusamy (McGraw Hill)',
    tags: ['C Language', 'Pointers', 'Memory Allocation', 'KIIT Course'],
    url: 'https://okarjunsingh.vercel.app'
  },
  {
    id: 'res_3',
    title: '3Blue1Brown Linear Algebra & Calculus Visualizations',
    type: 'YouTube Playlist',
    category: 'Mathematics',
    authorOrSource: 'Grant Sanderson (3Blue1Brown)',
    tags: ['Geometric Intuition', 'Vectors', 'Matrices', 'Derivatives'],
    url: 'https://www.youtube.com/@3blue1brown'
  },
  {
    id: 'res_4',
    title: 'PyTorch Deep Learning & Neural Networks Official Docs',
    type: 'Cheat Sheet',
    category: 'AI & ML',
    authorOrSource: 'PyTorch Foundation',
    tags: ['Deep Learning', 'Tensors', 'Backpropagation', 'AI'],
    url: 'https://pytorch.org/docs/stable/index.html'
  }
];
