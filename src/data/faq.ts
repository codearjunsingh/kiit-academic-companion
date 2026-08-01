export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Academics' | 'Hostel' | 'Mentoring' | 'Campus & Rules';
  actionButton?: {
    text: string;
    url: string;
  };
}

export const KIIT_FAQS: FaqItem[] = [
  {
    id: 'faq_pyq',
    question: 'Where can I access KIIT Previous Year Question Papers (PYQs) and notes?',
    answer: 'Complete year-wise and semester-wise PYQs are currently being curated and will soon be connected with NotebookLM AI for deep analysis and smart question solving!',
    category: 'Academics'
  },
  {
    id: 'faq_attendance',
    question: 'What is the minimum attendance required at KIIT?',
    answer: 'KIIT strictly enforces a minimum of 75% attendance in both Theory and Practical/Lab courses to be eligible to sit for Mid-Semester and End-Semester examinations. Falling below 75% results in debarment from exams.',
    category: 'Academics'
  },
  {
    id: 'faq_mentoring',
    question: 'Who are my assigned Tutor Mentors for Section A26?',
    answer: 'For Section A26, your assigned Tutor Mentors are Dr. Manas Ranjan Mohapatra (Maths Dept, 8989833623, manas.mohapatrafma@kiit.ac.in) and Dr. D. Nisrutha (Humanities Dept, 6370100529, d.nisruthafhu@kiit.ac.in). Tutor-Mentoring sessions take place on 2nd and 4th Saturdays.',
    category: 'Mentoring',
    actionButton: {
      text: 'Email Dr. Manas Mohapatra',
      url: 'mailto:manas.mohapatrafma@kiit.ac.in'
    }
  },
  {
    id: 'faq_grading',
    question: 'How is 1st Year B.Tech grading done at KIIT?',
    answer: 'KIIT follows a 10-point relative SGPA/CGPA system. Marks distribution for 100-mark courses: Mid-Sem (20 Marks) + Internal Evaluation/Assignments (30 Marks) + End-Sem Examination (50 Marks). Grades range from O (Outstanding - 10) down to F (Fail - 0).',
    category: 'Academics'
  },
  {
    id: 'faq_hostel_curfew',
    question: 'What is the hostel curfew time at KP-7AB (Boys Hostel)?',
    answer: 'Boys hostel (KP-7AB) entry timing is strictly 9:30 PM. Attendance is taken in hostel rooms between 9:30 PM and 10:00 PM every evening.',
    category: 'Hostel'
  },
  {
    id: 'faq_contact_help',
    question: 'Who do I contact for academic disputes or exam issues?',
    answer: 'Reach out to the Academic Cell or Director, School of Computer Engineering (SCE), Campus-15. You can also consult your assigned Tutor Mentor.',
    category: 'Campus & Rules',
    actionButton: {
      text: 'Contact KIIT Director Office',
      url: 'mailto:director.sce@kiit.ac.in'
    }
  }
];
