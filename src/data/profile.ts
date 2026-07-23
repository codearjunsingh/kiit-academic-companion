export interface InductionEvent {
  date: string; // YYYY-MM-DD
  dayLabel: string;
  activity: string;
  timeSlot?: string;
  room?: string;
}

export interface TimetableSlot {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  time: string;
  subject: string;
  code: string;
  room: string;
  type: 'Theory' | 'Lab';
}

export const STUDENT_PROFILE = {
  section: 'A26',
  group: 'Group 2 (Sections A23–A33 & B1–B11)',
  subGroup: 'Gr-2.1 (Sections A23–A33)',
  hostel: 'KP-7AB',
  room: '1A-65',
  mentorSessionRoom: 'C-10, Campus-3',
  classRoom: 'Room 201, Campus-8',
  mentor1: {
    name: 'Dr. Manas Ranjan Mohapatra',
    dept: 'Dept. of Mathematics',
    phone: '8989833623',
    email: 'manas.mohapatrafma@kiit.ac.in',
  },
  mentor2: {
    name: 'Dr. D. Nisrutha',
    dept: 'Dept. of Humanities / KSLS',
    phone: '6370100529',
    email: 'd.nisruthafhu@kiit.ac.in',
  },
  mentorSlot: '23 July 2026, 3:00 PM – 5:00 PM (Slot-II), Room C-10 Campus-3',
};

// Official Weekly Class Timetable for Section A26 (Scheme A - Autumn 2026)
export const SECTION_A26_TIMETABLE: TimetableSlot[] = [
  // Monday
  { day: 'Monday', time: '10:10 - 11:10', subject: 'Engineering Elective', code: 'Elective', room: 'As per Elective Section', type: 'Theory' },
  { day: 'Monday', time: '11:20 - 12:20', subject: 'Science of Living Systems', code: 'ScLS', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Monday', time: '12:20 - 13:20', subject: 'Basics of Electrical Engineering', code: 'BEE', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Monday', time: '15:00 - 18:00', subject: 'Intro to Computer Programming (Lab)', code: 'CS13003', room: 'Campus-15(B), C15-B-WL-101', type: 'Lab' },

  // Tuesday
  { day: 'Tuesday', time: '09:00 - 10:00', subject: 'Calculus & Differential Equations', code: 'C&DE', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Tuesday', time: '10:10 - 11:10', subject: 'Engineering Elective', code: 'Elective', room: 'As per Elective Section', type: 'Theory' },
  { day: 'Tuesday', time: '11:20 - 12:20', subject: 'Calculus & Differential Equations', code: 'C&DE', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Tuesday', time: '12:20 - 13:20', subject: 'Universal Human Values', code: 'UHV', room: 'Campus-8, Room 201', type: 'Theory' },

  // Wednesday
  { day: 'Wednesday', time: '10:00 - 11:00', subject: 'Calculus & Differential Equations', code: 'C&DE', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Wednesday', time: '11:20 - 12:20', subject: 'Calculus & Differential Equations', code: 'C&DE', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Wednesday', time: '12:20 - 13:20', subject: 'Physics (Theory)', code: 'PHY', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Wednesday', time: '15:00 - 18:00', subject: 'Intro to Computer Programming (Lab)', code: 'CS13003', room: 'Campus-15(B), C15-B-WL-101', type: 'Lab' },

  // Thursday
  { day: 'Thursday', time: '09:00 - 10:00', subject: 'Universal Human Values', code: 'UHV', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Thursday', time: '10:00 - 11:00', subject: 'Science of Living Systems', code: 'ScLS', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Thursday', time: '11:20 - 12:20', subject: 'Physics (Theory)', code: 'PHY', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Thursday', time: '14:00 - 16:00', subject: 'Workshop (Lab)', code: 'ME18001', room: 'Campus-8, Room 201 / Workshop Hall', type: 'Lab' },

  // Friday
  { day: 'Friday', time: '08:50 - 09:50', subject: 'Universal Human Values', code: 'UHV', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Friday', time: '09:50 - 10:50', subject: 'Basics of Electrical Engineering', code: 'BEE', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Friday', time: '11:00 - 12:00', subject: 'Physics (Theory)', code: 'PHY', room: 'Campus-8, Room 201', type: 'Theory' },
  { day: 'Friday', time: '14:00 - 16:00', subject: 'Physics Laboratory (Lab)', code: 'PH19001', room: 'Campus-8, Room 201 / Lab Complex', type: 'Lab' },
];

export const INDUCTION_WEEK_SCHEDULE: InductionEvent[] = [
  {
    date: '2026-07-21',
    dayLabel: '21 Jul 2026 (Tue)',
    activity: 'Campus Visit'
  },
  {
    date: '2026-07-22',
    dayLabel: '22 Jul 2026 (Wed)',
    activity: 'Cultural, Sports & Society Expo (9:00 AM–12:00 PM at Campus-13); Movie Screening (2:30–5:30 PM at Campus-11 Auditorium)',
  },
  {
    date: '2026-07-23',
    dayLabel: '23 Jul 2026 (Thu)',
    activity: 'Academic Induction-1 (9:00–11:50 AM at Campus-6 Auditorium); Mentor-Mentee Interaction (3:00–5:00 PM)',
    room: 'Room C-10, Campus-3'
  },
  {
    date: '2026-07-24',
    dayLabel: '24 Jul 2026 (Fri)',
    activity: 'Mentor-Mentee Interaction (9:00–11:00 AM); Academic Induction-4 (3:00–5:00 PM at Campus-6 Auditorium)'
  },
  {
    date: '2026-07-25',
    dayLabel: '25 Jul 2026 (Sat)',
    activity: 'Gr-2 Anti-Ragging ONLINE Affidavit Filling (with help from tutor mentors)'
  },
  {
    date: '2026-07-27',
    dayLabel: '27 Jul 2026 (Mon)',
    activity: 'Academic Induction-2 (9:00 AM–12:00 PM at Campus-6 Auditorium)'
  },
  {
    date: '2026-07-28',
    dayLabel: '28 Jul 2026 (Tue)',
    activity: 'Yoga & Fitness (7:00–8:00 AM at Indoor Stadium, Campus-13); Academic Induction-3 (3:00–5:00 PM at Campus-6 Auditorium)'
  },
  {
    date: '2026-07-29',
    dayLabel: '29 Jul 2026 (Wed)',
    activity: 'Ice Breaking Session (Classroom Activity) + "My 4-year KIIT Journey" (Classroom Activity)'
  }
];
