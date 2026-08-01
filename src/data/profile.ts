export interface StudentProfile {
  studentName: string;
  rollNo: string;
  section: string;
  group: string;
  subGroup: string;
  hostel: string;
  room: string;
  classRoom: string;
  mentor1: {
    name: string;
    dept: string;
    phone: string;
    email: string;
  };
  mentor2: {
    name: string;
    dept: string;
    phone: string;
    email: string;
  };
}

export const STUDENT_PROFILE: StudentProfile = {
  studentName: 'Arjun Singh',
  rollNo: '26155784',
  section: 'A26',
  group: 'Group 2',
  subGroup: 'Gr-2.1',
  hostel: 'KP-7AB',
  room: '1A-65',
  classRoom: 'Room 201, Campus-8',
  mentor1: {
    name: 'Dr. Manas Ranjan Mohapatra',
    dept: 'Department of Mathematics',
    phone: '8989833623',
    email: 'manas.mohapatrafma@kiit.ac.in'
  },
  mentor2: {
    name: 'Dr. D. Nisrutha',
    dept: 'Department of Humanities',
    phone: '6370100529',
    email: 'd.nisruthafhu@kiit.ac.in'
  }
};

export interface ClassSlot {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  time: string;
  subject: string;
  room: string;
  type: 'Theory' | 'Lab';
}

// Official Class Timetable for Section A26 (Scheme A - Autumn 2026)
export const SECTION_A26_TIMETABLE: ClassSlot[] = [
  // MONDAY
  { day: 'Monday', time: '10:10 - 11:10', subject: 'Engineering Elective (Classes as per Elective Section)', room: 'Room 104 / 105 Campus-8', type: 'Theory' },
  { day: 'Monday', time: '11:20 - 12:20', subject: 'Science of Living Systems (ScLS)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Monday', time: '12:20 - 13:20', subject: 'Basics of Electrical Engineering (BEE)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Monday', time: '15:00 - 18:00', subject: 'Introduction to Computer Programming (CS13003 Lab)', room: 'Room C15-B-WL-101, Campus-15', type: 'Lab' },

  // TUESDAY
  { day: 'Tuesday', time: '09:00 - 10:00', subject: 'Calculus and Differential Equations (C&DE)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Tuesday', time: '10:10 - 11:10', subject: 'Engineering Elective (Classes as per Elective Section)', room: 'Room 104 / 105 Campus-8', type: 'Theory' },
  { day: 'Tuesday', time: '11:20 - 12:20', subject: 'Calculus and Differential Equations (C&DE)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Tuesday', time: '12:20 - 13:20', subject: 'Universal Human Values (UHV)', room: 'Room 201, Campus-8', type: 'Theory' },

  // WEDNESDAY
  { day: 'Wednesday', time: '10:00 - 11:00', subject: 'Calculus and Differential Equations (C&DE)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Wednesday', time: '11:20 - 12:20', subject: 'Calculus and Differential Equations (C&DE)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Wednesday', time: '12:20 - 13:20', subject: 'Physics (PHY)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Wednesday', time: '15:00 - 18:00', subject: 'Introduction to Computer Programming (CS13003 Lab)', room: 'Room C15-B-WL-101, Campus-15', type: 'Lab' },

  // THURSDAY
  { day: 'Thursday', time: '09:00 - 10:00', subject: 'Universal Human Values (UHV)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Thursday', time: '10:00 - 11:00', subject: 'Science of Living Systems (ScLS)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Thursday', time: '11:20 - 12:20', subject: 'Physics (PHY)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Thursday', time: '14:00 - 16:00', subject: 'Workshop (ME18001 Lab)', room: 'Workshop Hall, Campus-8', type: 'Lab' },

  // FRIDAY
  { day: 'Friday', time: '08:50 - 09:50', subject: 'Universal Human Values (UHV)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Friday', time: '09:50 - 10:50', subject: 'Basics of Electrical Engineering (BEE)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Friday', time: '11:00 - 12:00', subject: 'Physics (PHY)', room: 'Room 201, Campus-8', type: 'Theory' },
  { day: 'Friday', time: '14:00 - 16:00', subject: 'Physics Laboratory (PH19001 Lab)', room: 'Lab Complex, Campus-3', type: 'Lab' }
];

// Official Class Timetable for Section B1 (Scheme B - Autumn 2026)
export const SECTION_B1_TIMETABLE: ClassSlot[] = [
  // MONDAY
  { day: 'Monday', time: '08:00 - 10:00', subject: 'Chemistry Laboratory (CH19001 Lab)', room: 'Campus-3 Lab', type: 'Lab' },
  { day: 'Monday', time: '10:20 - 11:20', subject: 'Chemistry (CHEM)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Monday', time: '11:20 - 12:20', subject: 'Linear Algebra and Fourier Analysis (LAFA)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Monday', time: '12:30 - 13:30', subject: 'Science Elective (Classes as per Elective Section)', room: 'Campus-3 Elective Rooms', type: 'Theory' },

  // TUESDAY
  { day: 'Tuesday', time: '08:00 - 10:00', subject: 'Sports and Yoga (Lab)', room: 'Campus-13', type: 'Lab' },
  { day: 'Tuesday', time: '10:20 - 11:20', subject: 'Chemistry (CHEM)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Tuesday', time: '11:20 - 12:20', subject: 'Linear Algebra and Fourier Analysis (LAFA)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Tuesday', time: '12:30 - 13:30', subject: 'Science Elective (Classes as per Elective Section)', room: 'Campus-3 Elective Rooms', type: 'Theory' },

  // WEDNESDAY
  { day: 'Wednesday', time: '08:00 - 10:00', subject: 'English Communication Laboratory (Lab)', room: 'Room C7, Campus-3', type: 'Lab' },
  { day: 'Wednesday', time: '10:20 - 11:20', subject: 'Chemistry (CHEM)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Wednesday', time: '11:20 - 12:20', subject: 'Linear Algebra and Fourier Analysis (LAFA)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Wednesday', time: '12:20 - 13:20', subject: 'Electronic Circuits and Logic Design (ECLD)', room: 'Room C7, Campus-3', type: 'Theory' },

  // THURSDAY
  { day: 'Thursday', time: '08:00 - 10:00', subject: 'Engineering Drawing & Graphics Lab (CE18003)', room: 'Campus-3 Drawing Hall', type: 'Lab' },
  { day: 'Thursday', time: '10:20 - 11:20', subject: 'Linear Algebra and Fourier Analysis (LAFA)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Thursday', time: '11:20 - 12:20', subject: 'English Communication Skills (ECS)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Thursday', time: '12:20 - 13:20', subject: 'Electronic Circuits and Logic Design (ECLD)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Thursday', time: '13:30 - 14:30', subject: 'Engineering Drawing & Graphics (Theory)', room: 'Room E-105, Campus-3', type: 'Theory' },

  // FRIDAY
  { day: 'Friday', time: '08:00 - 10:00', subject: 'Electronic Circuits & Logic Design Lab (EC19001)', room: 'Campus-3 Electronics Lab', type: 'Lab' },
  { day: 'Friday', time: '10:20 - 11:20', subject: 'Electronic Circuits and Logic Design (ECLD)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Friday', time: '11:20 - 12:20', subject: 'English Communication Skills (ECS)', room: 'Room C7, Campus-3', type: 'Theory' },
  { day: 'Friday', time: '12:30 - 13:30', subject: 'Science Elective (Classes as per Elective Section)', room: 'Campus-3 Elective Rooms', type: 'Theory' }
];

export const INDUCTION_WEEK_SCHEDULE = [
  { date: '2026-07-20', dayLabel: 'Day 1 (20 July)', activity: 'Physical Reporting & Verification', room: 'Campus-15 Auditorium' },
  { date: '2026-07-21', dayLabel: 'Day 2 (21 July)', activity: 'Registration & Portal Login Set-up', room: 'Campus-15 Computer Labs' },
  { date: '2026-07-22', dayLabel: 'Day 3 (22 July)', activity: 'Academic Vision & Leadership Address', room: 'Campus-15 Auditorium' },
  { date: '2026-07-23', dayLabel: 'Day 4 (23 July)', activity: 'Tutor Mentor Allocation & Group Session', room: 'Room C-10, Campus-3' },
  { date: '2026-07-24', dayLabel: 'Day 5 (24 July)', activity: 'School Orientation & Campus Tour', room: 'Campus-8 & Campus-15' },
  { date: '2026-07-25', dayLabel: 'Day 6 (25 July)', activity: 'Curriculum Briefing & Society Presentations', room: 'Campus-15 Auditorium' },
];
