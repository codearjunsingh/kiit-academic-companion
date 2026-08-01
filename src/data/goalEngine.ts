export interface GoalTarget {
  id: string;
  title: string;
  category: 'Competitive Exam' | 'Career & Coding' | 'Academic' | 'Life';
  targetDate: string;
  readinessPct: number;
  dailyActions: string[];
}

export const MACRO_GOALS: GoalTarget[] = [
  {
    id: 'goal_gate_2029',
    title: 'PW Nirmaan GATE CSE 2029 (Target AIR < 100)',
    category: 'Competitive Exam',
    targetDate: 'February 2029',
    readinessPct: 35,
    dailyActions: [
      'Solve 15 DPP Questions daily from AI & Prompting / Engineering Math modules',
      'Revise 1 core CS subject topic (Data Structures / Operating Systems)',
      'Review previous mistake logs from DPP tests'
    ]
  },
  {
    id: 'goal_cds_2029',
    title: 'UPSC CDS II 2029 (IMA Officer Commission Target)',
    category: 'Competitive Exam',
    targetDate: 'September 2029',
    readinessPct: 40,
    dailyActions: [
      '30 mins English Grammar & Vocabulary practice (Cloze test / Spotting errors)',
      'Elementary Maths Coordinate Geometry / Trigonometry problem solving',
      'Daily 15-min Officer Like Quality (OLQ) self-assessment & news analysis'
    ]
  },
  {
    id: 'goal_faang_dsa',
    title: 'Top Product Company / FAANG Placement Readiness',
    category: 'Career & Coding',
    targetDate: 'July 2029',
    readinessPct: 30,
    dailyActions: [
      'Solve 2 LeetCode / Striver DSA problems in C++ STL',
      'Build 1 mini project feature in PyTorch / Full-Stack',
      'Read 1 System Design / Linux CLI architecture concept'
    ]
  }
];
