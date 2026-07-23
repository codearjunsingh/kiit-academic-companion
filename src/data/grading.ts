export interface GradeRule {
  grade: string;
  range: string;
  points: number;
}

export const THEORY_MARK_DISTRIBUTION = {
  endSem: 50,
  midSem: 20,
  internal: 30, // quizzes / assignments / class work
  total: 100,
};

export const PRACTICAL_MARK_DISTRIBUTION = {
  endSemLab: 40,
  sessional: 60, // Attendance & conduct 10, Performance 20, Viva/interaction 10, Report 20
  total: 100,
};

export const GRADING_SCALE: GradeRule[] = [
  { grade: 'O', range: '90–100', points: 10 },
  { grade: 'E', range: '80–89', points: 9 },
  { grade: 'A', range: '70–79', points: 8 },
  { grade: 'B', range: '60–69', points: 7 },
  { grade: 'C', range: '50–59', points: 6 },
  { grade: 'D', range: '40–49', points: 5 },
  { grade: 'F', range: 'below 40', points: 2 },
];

export const ACADEMIC_RULES = {
  minGraduationCGPA: 6.0,
  minAttendanceToSitExam: 75,
  minAttendanceConcession: 65,
  yearBackSubjectLimit: 5,
};
