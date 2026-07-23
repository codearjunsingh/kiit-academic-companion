export interface CalendarEvent {
  title: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string;   // YYYY-MM-DD
  type: 'academic' | 'exam' | 'holiday' | 'mentoring' | 'induction';
  description?: string;
  duration?: string;
}

export const ACADEMIC_MILESTONES: CalendarEvent[] = [
  // Autumn 2026 (Official KIIT Document Signed 15/07/2026)
  {
    title: 'Reporting / Registration / Academic Induction',
    startDate: '2026-07-20',
    endDate: '2026-07-25',
    type: 'induction',
    description: 'Reporting, registration, campus visits, academic induction sessions, and mentor interaction.'
  },
  {
    title: 'Autumn 2026 Pre-Mid Semester Session',
    startDate: '2026-07-27',
    endDate: '2026-10-06',
    type: 'academic',
    description: 'Pre-Mid semester academic teaching sessions.'
  },
  {
    title: 'Autumn 2026 Mid-Semester Examination',
    startDate: '2026-10-07',
    endDate: '2026-10-13',
    type: 'exam',
    description: 'Mid-Sem examination window (20 marks theory papers).'
  },
  {
    title: 'Autumn 2026 Post-Mid Semester Session',
    startDate: '2026-10-14',
    endDate: '2026-11-30',
    type: 'academic',
    description: 'Post Mid-Sem academic teaching and internal assessments.'
  },
  {
    title: 'Autumn 2026 End-Semester Examination',
    startDate: '2026-12-01',
    endDate: '2026-12-10',
    type: 'exam',
    description: 'End-Sem exam window (50 marks theory papers, 40 marks practical lab exam).'
  },
  {
    title: 'Community-Based Project Week',
    startDate: '2026-12-26',
    endDate: '2026-12-31',
    type: 'academic',
    description: 'Reserved for community-based student projects followed by winter vacation.'
  },

  // Spring 2026-27 (Official KIIT Document Signed 15/07/2026)
  {
    title: 'Spring 2026–27 Registration & Commencement',
    startDate: '2026-12-14',
    endDate: '2026-12-14',
    type: 'academic',
    description: 'Official start of Spring semester 2026-27 academic session.'
  },
  {
    title: 'Spring 2026–27 Pre-Mid Semester Session',
    startDate: '2026-12-15',
    endDate: '2027-01-30',
    type: 'academic',
    description: 'Pre-Mid sem classes for Spring semester.'
  },
  {
    title: 'Spring 2026–27 Mid-Semester Examination',
    startDate: '2027-02-01',
    endDate: '2027-02-06',
    type: 'exam',
    description: 'Spring Mid-Sem examination window.'
  },
  {
    title: 'Spring 2026–27 Post-Mid Semester Session',
    startDate: '2027-02-08',
    endDate: '2027-04-10',
    type: 'academic',
    description: 'Post Mid-Sem teaching session for Spring semester.'
  },
  {
    title: 'Spring 2026–27 End-Semester Examination',
    startDate: '2027-04-12',
    endDate: '2027-04-21',
    type: 'exam',
    description: 'Official Spring End-Semester examination window.'
  },
  {
    title: 'Next Autumn Semester Commencement',
    startDate: '2027-07-05',
    type: 'academic',
    description: '2nd Year Autumn semester start (1st week of July 2027).'
  }
];

export const HOLIDAYS_2026: CalendarEvent[] = [
  { title: 'Basanta Panchami', startDate: '2026-01-23', type: 'holiday', duration: '1 day' },
  { title: 'Republic Day', startDate: '2026-01-26', type: 'holiday', duration: '1 day' },
  { title: 'Holi', startDate: '2026-03-04', type: 'holiday', duration: '1 day' },
  { title: 'Id-ul-Fitr', startDate: '2026-03-21', type: 'holiday', duration: '1 day' },
  { title: 'Ram Navami', startDate: '2026-03-27', type: 'holiday', duration: '1 day' },
  { title: 'Utkal Divas', startDate: '2026-04-01', type: 'holiday', duration: '1 day' },
  { title: 'Good Friday', startDate: '2026-04-03', type: 'holiday', duration: '1 day' },
  { title: 'Maha Vishubha Sankranti', startDate: '2026-04-14', type: 'holiday', duration: '1 day' },
  { title: 'Id-ul-Juha', startDate: '2026-05-27', type: 'holiday', duration: '1 day' },
  { title: 'Raja Sankranti', startDate: '2026-06-15', type: 'holiday', duration: '1 day' },
  { title: 'Muharram', startDate: '2026-06-26', type: 'holiday', duration: '1 day' },
  { title: 'Rath Yatra', startDate: '2026-07-16', type: 'holiday', duration: '1 day' },
  { title: 'Independence Day', startDate: '2026-08-15', type: 'holiday', duration: '1 day' },
  { title: 'Birthday of Prophet Mohammad', startDate: '2026-08-26', type: 'holiday', duration: '1 day' },
  { title: 'Janmashtami', startDate: '2026-09-04', type: 'holiday', duration: '1 day' },
  { title: 'Ganesh Puja & Nuakhai', startDate: '2026-09-14', endDate: '2026-09-15', type: 'holiday', duration: '2 days' },
  { title: 'Gandhi Jayanti', startDate: '2026-10-02', type: 'holiday', duration: '1 day' },
  { title: 'Durga Puja – Kumar Purnima', startDate: '2026-10-17', endDate: '2026-10-25', type: 'holiday', duration: '9 days' },
  { title: 'Kalipuja', startDate: '2026-11-07', type: 'holiday', duration: '1 day' },
  { title: 'Kartika Purnima / Guru Nanak Birthday', startDate: '2026-11-24', type: 'holiday', duration: '1 day' },
  { title: 'Christmas', startDate: '2026-12-25', type: 'holiday', duration: '1 day' },
];

export const SUNDAY_FESTIVALS = [
  { date: '2026-02-15', name: 'Maha Shivratri' },
  { date: '2026-06-14', name: 'Pahili Raja' },
  { date: '2026-11-08', name: 'Diwali' },
];
