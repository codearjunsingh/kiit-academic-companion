export interface FaqItem {
  id: string;
  category: 'Accounts & SAP' | 'Exams & Marks' | 'Rules & Regulations' | 'Mentoring & Outing' | 'Student Services & Facilities';
  question: string;
  answer: string;
  actionEmail?: string;
  actionPhone?: string;
  ccMentor?: boolean;
}

export const KIIT_FAQS: FaqItem[] = [
  // Accounts & SAP
  {
    id: 'faq_1',
    category: 'Accounts & SAP',
    question: 'Whom should I reach out to if I am facing issues logging into SAP?',
    answer: 'Send an email to helpdesksap.eam@kiit.ac.in keeping your tutor mentor in CC. Your mentor will forward it with their comments for further action.',
    actionEmail: 'helpdesksap.eam@kiit.ac.in',
    ccMentor: true,
  },
  {
    id: 'faq_2',
    category: 'Accounts & SAP',
    question: 'What should I do if I am unable to log in to my KIIT email ID?',
    answer: 'Email helpdesk@kiit.ac.in keeping your mentor in CC. Your mentor will forward it to the central ICT cell for resolution.',
    actionEmail: 'helpdesk@kiit.ac.in',
    ccMentor: true,
  },
  {
    id: 'faq_3',
    category: 'Accounts & SAP',
    question: 'How do I request a Bonafide Certificate or Fee Structure certificate?',
    answer: 'Write an email to compliance.sas@kiit.ac.in specifying the purpose and keeping your Tutor Mentor in CC. Request your mentor to forward the email with comments.',
    actionEmail: 'compliance.sas@kiit.ac.in',
    ccMentor: true,
  },
  {
    id: 'faq_4',
    category: 'Accounts & SAP',
    question: 'I paid the semester fee but it is still not updated in SAP portal. What should I do?',
    answer: 'Email helpdesksap.eam@kiit.ac.in with all payment details (Ref No / Transaction ID, payment date, bank name, account credited) and CC your tutor mentor.',
    actionEmail: 'helpdesksap.eam@kiit.ac.in',
    ccMentor: true,
  },
  {
    id: 'faq_5',
    category: 'Accounts & SAP',
    question: 'How do I reset my SAP portal or KIIT email password?',
    answer: '• SAP Password: Email helpdesksap.eam@kiit.ac.in keeping your mentor in CC.\n• KIIT Email Password: Email helpdesk@kiit.ac.in keeping your mentor in CC.',
    actionEmail: 'helpdesksap.eam@kiit.ac.in',
    ccMentor: true,
  },
  {
    id: 'faq_6',
    category: 'Accounts & SAP',
    question: 'How can I update my phone number, address, or name correction in SAP?',
    answer: 'Email admission@kiit.ac.in and helpdesksap.eam@kiit.ac.in with supporting documents, keeping your tutor mentor in CC.',
    actionEmail: 'admission@kiit.ac.in',
    ccMentor: true,
  },

  // Exams & Marks
  {
    id: 'faq_7',
    category: 'Exams & Marks',
    question: 'What is the exact mark distribution for a Theory paper?',
    answer: 'Total 100 marks: 30 Activity-based Learning (Internal) + 20 Mid-Semester Examination + 50 End-Semester Examination.',
  },
  {
    id: 'faq_8',
    category: 'Exams & Marks',
    question: 'What happens if I miss an exam (Internal, Mid-Sem, or End-Sem)?',
    answer: '• Internal (30 marks): Contact your subject teacher directly.\n• Mid-Sem (20 marks): Email Assistant Controller of Examination (acoe.ksas@kiit.ac.in) through your tutor mentor with valid proof.\n• End-Sem (50 marks): You must appear for the Supplementary Examination held during summer break.',
    actionEmail: 'acoe.ksas@kiit.ac.in',
    ccMentor: true,
  },
  {
    id: 'faq_9',
    category: 'Exams & Marks',
    question: 'Will evaluated answer scripts and marks be shown to students?',
    answer: 'Yes, Mid-Semester answer scripts are shown to students (open for 24 hours) ~3–4 weeks after exams. Final results are published within 10 days after student script viewing.',
  },
  {
    id: 'faq_10',
    category: 'Exams & Marks',
    question: 'Is separate examination fee required?',
    answer: 'An examination fee of Rs 1000/- per semester is to be paid while registering for the end-semester examination.',
  },

  // Rules & Regulations
  {
    id: 'faq_11',
    category: 'Rules & Regulations',
    question: 'What is the attendance requirement to sit for End-Sem exams?',
    answer: 'Minimum 75% attendance is compulsory in each subject. Students are encouraged to attend 100% of classes. Medical relaxation requires submitting valid certificates approved by university rules.',
  },
  {
    id: 'faq_12',
    category: 'Rules & Regulations',
    question: 'What is the Year-Back rule for 1st Year B.Tech?',
    answer: 'Failing in more than 5 subjects (including theory, labs, and sessionals combined) across the 1st year results in a Year-Back. Failing 5 or fewer permits promotion to the next semester with backlogs.',
  },
  {
    id: 'faq_13',
    category: 'Rules & Regulations',
    question: 'Is branch change permitted after 1st Year?',
    answer: 'No, branch change is strictly not permitted after admission under university regulations.',
  },
  {
    id: 'faq_14',
    category: 'Mentoring & Outing',
    question: 'How often do Tutor-Mentor meetings take place and how can I contact them?',
    answer: 'Mentees can contact their mentor via call, WhatsApp, or email anytime. Formal mentor-mentee meetings take place twice a month on the 2nd and 4th Saturday of each month.',
  },
  {
    id: 'faq_15',
    category: 'Mentoring & Outing',
    question: 'What if my assigned tutor mentor is not responding?',
    answer: 'Email FIC TM Dr. Lalatendu Biswal (lbiswalfpy@kiit.ac.in) or FIC Compliance Cell Dr. Anita Pati (anitapatifch@kiit.ac.in) for assistance.',
    actionEmail: 'lbiswalfpy@kiit.ac.in',
  },
  {
    id: 'faq_16',
    category: 'Mentoring & Outing',
    question: 'What are the hostel outing rules for 1st Year students?',
    answer: 'Students are not allowed to leave campus on weekdays. Sunday outings for essential items require hostel warden approval.',
  },

  // Student Services & Facilities
  {
    id: 'faq_17',
    category: 'Student Services & Facilities',
    question: 'Who should I contact for student counseling or medical emergencies?',
    answer: '• Medical Urgency: Contact hostel staff immediately for shuttle service to KIMS Hospital.\n• Student Counseling: Contact student.counseling@kiit.ac.in via your tutor mentor.',
    actionEmail: 'student.counseling@kiit.ac.in',
  },
  {
    id: 'faq_18',
    category: 'Student Services & Facilities',
    question: 'How do I access digital library e-books or report laptop technical issues?',
    answer: '• Digital Library: Email centrallibrary@kiit.ac.in for 24x7 e-library access.\n• Laptop Technical Issues: Visit ICT Cell at Campus-6 or email helpdesk@kiit.ac.in via your mentor.',
    actionEmail: 'centrallibrary@kiit.ac.in',
  },
  {
    id: 'faq_19',
    category: 'Student Services & Facilities',
    question: 'Can 1st Year students learn foreign languages?',
    answer: 'Yes! Email kiit.sol@kiit.ac.in (School of Languages) or contact Mr. Bhabani Shankar Mishra to enroll in foreign language courses.',
    actionEmail: 'kiit.sol@kiit.ac.in',
  }
];
