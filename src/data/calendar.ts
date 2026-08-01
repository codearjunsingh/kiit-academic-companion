export interface CalendarEvent {
  title: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string;
  duration?: string;
  type: 'academic' | 'exam' | 'holiday' | 'vacation' | 'induction';
  description?: string;
}

export const ACADEMIC_MILESTONES: CalendarEvent[] = [
  {
    title: 'Reporting / Registration / Academic Induction (Autumn 2026)',
    startDate: '2026-07-20',
    endDate: '2026-07-25',
    duration: '6 Days',
    type: 'induction',
    description: 'Reporting, registration, academic vision sharing and school orientation'
  },
  {
    title: 'Pre-Mid Semester Academic Session (Autumn 2026)',
    startDate: '2026-07-27',
    endDate: '2026-10-06',
    duration: '10 Weeks',
    type: 'academic',
    description: 'Regular 1st year theory classes & practical lab sessions'
  },
  {
    title: 'Autumn Mid-Semester Examination 2026',
    startDate: '2026-10-07',
    endDate: '2026-10-13',
    duration: '7 Days',
    type: 'exam',
    description: 'Mid-semester written examinations for 1st Year B.Tech'
  },
  {
    title: 'Post-Mid Semester Academic Session (Autumn 2026)',
    startDate: '2026-10-14',
    endDate: '2026-11-30',
    duration: '7 Weeks',
    type: 'academic',
    description: 'Syllabus completion, assignment submission & internal practical evaluation'
  },
  {
    title: 'Autumn End-Semester Examination 2026',
    startDate: '2026-12-01',
    endDate: '2026-12-10',
    duration: '10 Days',
    type: 'exam',
    description: '1st semester final theory & practical examinations'
  },
  {
    title: 'Spring Semester 2026-27 Commencement & Registration',
    startDate: '2026-12-14',
    duration: '1 Day',
    type: 'academic',
    description: 'Registration & starting of 2nd semester (Spring 2026-27)'
  },
  {
    title: 'Community Project & Winter Break',
    startDate: '2026-12-21',
    endDate: '2026-12-31',
    duration: '11 Days',
    type: 'vacation',
    description: 'Community-based project work followed by winter vacation'
  },
  {
    title: 'Spring Mid-Semester Examination 2027',
    startDate: '2027-02-01',
    endDate: '2027-02-06',
    duration: '6 Days',
    type: 'exam',
    description: '2nd semester mid-term written examinations'
  },
  {
    title: 'Spring End-Semester Examination 2027',
    startDate: '2027-04-12',
    endDate: '2027-04-21',
    duration: '10 Days',
    type: 'exam',
    description: '1st Year final end-semester examinations'
  },
  {
    title: 'Summer Vacation 2027 (Post 1st-Year Break)',
    startDate: '2027-04-22',
    endDate: '2027-07-04',
    duration: '2.5 Months',
    type: 'vacation',
    description: 'Official 1st-year summer break from last week of April to 1st week of July'
  },
  {
    title: 'Starting of Autumn Semester 2027 (2nd Year B.Tech)',
    startDate: '2027-07-05',
    duration: '1 Day',
    type: 'academic',
    description: 'Commencement of 2nd Year (3rd Semester) classes'
  }
];

export const HOLIDAYS_2026: CalendarEvent[] = [
  { title: 'Basanta Panchami / Saraswati Puja', startDate: '2026-01-23', duration: '1 Day', type: 'holiday' },
  { title: 'Republic Day', startDate: '2026-01-26', duration: '1 Day', type: 'holiday' },
  { title: 'Maha Shivaratri', startDate: '2026-02-15', duration: '1 Day', type: 'holiday' },
  { title: 'Dola Purnima & Holi', startDate: '2026-03-03', endDate: '2026-03-04', duration: '2 Days', type: 'holiday' },
  { title: 'Utkal Divas', startDate: '2026-04-01', duration: '1 Day', type: 'holiday' },
  { title: 'Good Friday', startDate: '2026-04-03', duration: '1 Day', type: 'holiday' },
  { title: 'Rath Yatra', startDate: '2026-07-16', duration: '1 Day', type: 'holiday' },
  { title: 'Independence Day', startDate: '2026-08-15', duration: '1 Day', type: 'holiday' },
  { title: 'Ganesh Chaturthi', startDate: '2026-09-14', duration: '1 Day', type: 'holiday' },
  { title: 'Nuakhai', startDate: '2026-09-15', duration: '1 Day', type: 'holiday' },
  { title: 'Gandhi Jayanti', startDate: '2026-10-02', duration: '1 Day', type: 'holiday' },
  { title: 'Durga Puja / Dussehra', startDate: '2026-10-18', endDate: '2026-10-22', duration: '5 Days', type: 'holiday' },
  { title: 'Diwali & Kali Puja', startDate: '2026-11-08', duration: '1 Day', type: 'holiday' },
  { title: 'Christmas', startDate: '2026-12-25', duration: '1 Day', type: 'holiday' },
];

export const SUNDAY_FESTIVALS = [
  { name: 'Id-ul-Fitr', date: '2026-03-22' },
  { name: 'Bahuda Yatra', date: '2026-07-26' },
  { name: 'Janmastami', date: '2026-09-06' },
  { name: 'Maha Navami', date: '2026-10-18' },
  { name: 'Prathamashtami', date: '2026-12-06' }
];
