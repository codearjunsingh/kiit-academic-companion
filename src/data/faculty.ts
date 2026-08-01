export interface FacultyRecommendation {
  subject: string;
  pwFaculty: string;
  pwRating: string;
  reviewSummary: string;
  topYoutubeCreators: {
    name: string;
    channel: string;
    bestFor: string;
    url: string;
  }[];
}

export const FACULTY_EVALUATION: FacultyRecommendation[] = [
  {
    subject: 'AI Tools & Introduction to AI',
    pwFaculty: 'Vishvadeep Gothi Sir',
    pwRating: '5.0 / 5.0 ⭐ (Legendary)',
    reviewSummary: 'M.Tech from IISc Bangalore. Exceptional clarity on AI concepts, logic, and practical tool usage. Highly engaging style.',
    topYoutubeCreators: [
      { name: 'Vishvadeep Gothi', channel: 'Unacademy Computer Science / PW', bestFor: 'In-depth AI & COA logic', url: 'https://www.youtube.com/results?search_query=Vishvadeep+Gothi+AI' },
      { name: 'Gate Smashers (Varun Singla)', channel: 'Gate Smashers', bestFor: 'Quick KIIT exam revision', url: 'https://www.youtube.com/results?search_query=Gate+Smashers+AI' }
    ]
  },
  {
    subject: 'Prompt Engineering & AI Studio',
    pwFaculty: 'Aditya Jain Sir',
    pwRating: '4.8 / 5.0 ⭐',
    reviewSummary: 'Very practical hands-on approach to prompt design, OpenAI APIs, and AI Studio workflows.',
    topYoutubeCreators: [
      { name: 'Aditya Jain', channel: 'PW Nirmaan GATE', bestFor: 'Hands-on Prompt Engineering', url: 'https://www.youtube.com/results?search_query=Aditya+Jain+Prompt+Engineering' },
      { name: 'Andrew Ng', channel: 'DeepLearning.AI', bestFor: 'Industry standard prompt engineering', url: 'https://www.youtube.com/results?search_query=Andrew+Ng+Prompt+Engineering' }
    ]
  },
  {
    subject: 'Data Structures & C Programming (CS13003 Overlap)',
    pwFaculty: 'Pankaj Sharma Sir / Vishvadeep Sir',
    pwRating: '4.9 / 5.0 ⭐ (Top Rated)',
    reviewSummary: 'Mastery over memory layout, pointers, recursion, and time complexity. Essential for both KIIT semester exams & GATE rank.',
    topYoutubeCreators: [
      { name: 'Abdul Bari', channel: 'Abdul Bari', bestFor: 'King of Data Structures & Algorithms animation', url: 'https://www.youtube.com/results?search_query=Abdul+Bari+Data+Structures' },
      { name: 'Neso Academy', channel: 'Neso Academy', bestFor: 'C Programming step-by-step from scratch', url: 'https://www.youtube.com/results?search_query=Neso+Academy+C+Programming' },
      { name: 'MyCodeSchool', channel: 'MyCodeSchool', bestFor: 'Pointers in C memory architecture', url: 'https://www.youtube.com/results?search_query=MyCodeSchool+Pointers' }
    ]
  },
  {
    subject: 'Engineering Mathematics (Calculus & ODE - MA11009)',
    pwFaculty: 'Gajendra Purohit Sir / PW Maths Team',
    pwRating: '4.9 / 5.0 ⭐',
    reviewSummary: 'GP Sir is the undisputed master for university math exams. Tricks for integration, differential equations, and linear algebra.',
    topYoutubeCreators: [
      { name: 'Gajendra Purohit (GP Sir)', channel: 'Dr. Gajendra Purohit', bestFor: 'KIIT Semester Maths Exam #1 Savior', url: 'https://www.youtube.com/results?search_query=Gajendra+Purohit+Engineering+Mathematics' },
      { name: 'Bhagwan Singh Vishwakarma', channel: 'Knowledge Gate', bestFor: 'Discrete Mathematics & GATE proofs', url: 'https://www.youtube.com/results?search_query=Discrete+Mathematics+Knowledge+Gate' }
    ]
  },
  {
    subject: 'Digital Logic (EC10005 Overlap)',
    pwFaculty: 'Chandan Jha Sir',
    pwRating: '4.7 / 5.0 ⭐',
    reviewSummary: 'Covers Boolean minimization, K-Maps, and Flip-Flops step-by-step with GATE PYQs.',
    topYoutubeCreators: [
      { name: 'Neso Academy', channel: 'Neso Academy', bestFor: 'Digital Electronics gold standard playlist', url: 'https://www.youtube.com/results?search_query=Neso+Academy+Digital+Electronics' },
      { name: 'Gate Smashers', channel: 'Gate Smashers', bestFor: 'Quick 10-minute topic revision for mid-sems', url: 'https://www.youtube.com/results?search_query=Gate+Smashers+Digital+Logic' }
    ]
  },
  {
    subject: 'Basic Electrical Engineering (EE10005)',
    pwFaculty: 'PW Electrical Team',
    pwRating: '4.6 / 5.0 ⭐',
    reviewSummary: 'Good for circuit laws (KVL, KCL, Thevenin, Norton) and AC fundamentals.',
    topYoutubeCreators: [
      { name: 'Gate Academy (Dhande Sir)', channel: 'Gate Academy', bestFor: 'Electrical Circuit Network Theory', url: 'https://www.youtube.com/results?search_query=Gate+Academy+Basic+Electrical' },
      { name: 'Tikle’s Academy', channel: 'Tikle’s Academy', bestFor: 'Step-by-step solved numerical problems', url: 'https://www.youtube.com/results?search_query=Tikles+Academy+Basic+Electrical' }
    ]
  },
  {
    subject: 'Operating Systems & DBMS',
    pwFaculty: 'Khaleel Ahmed Sir',
    pwRating: '4.9 / 5.0 ⭐',
    reviewSummary: '15+ years experience. Deep conceptual explanation of OS concurrency, deadlock, and SQL queries.',
    topYoutubeCreators: [
      { name: 'Gate Smashers (Varun Singla)', channel: 'Gate Smashers', bestFor: 'OS & DBMS full playlist', url: 'https://www.youtube.com/results?search_query=Gate+Smashers+Operating+System' },
      { name: 'Sanchit Jain', channel: 'Knowledge Gate', bestFor: 'DBMS Normalization & SQL', url: 'https://www.youtube.com/results?search_query=Knowledge+Gate+DBMS' }
    ]
  }
];
