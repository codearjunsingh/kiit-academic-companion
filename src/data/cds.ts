export interface CdsSubject {
  id: string;
  name: string;
  marks: number;
  duration: string;
  questionCount: number;
  topics: {
    id: string;
    title: string;
    category: string;
  }[];
}

export interface CdsAttemptEvaluation {
  exam: string;
  examDate: string;
  courseCommencement: string;
  targetAcademy: string;
  ageAtEntry: string;
  imaStatus: 'Eligible' | 'Not Eligible (Underage)' | 'Not Eligible (Overaged)';
  otaStatus: 'Eligible' | 'Not Eligible (Underage)' | 'Not Eligible (Overaged)';
  isPrimaryTarget?: boolean;
}

export const CDS_ELIGIBILITY_INFO = {
  dob: '27/11/2006',
  targetExam: 'CDS II 2029 (September 2029)',
  academy: 'Indian Military Academy (IMA) / OTA / INA / AFA',
  gender: 'Male',
  qualification: 'B.Tech CSE-AIML (4-Year Degree)',
  totalAttemptsCount: 6
};

/**
 * UPSC Official Age Limits (Precise Cutoff Dates):
 * IMA: Unmarried male candidates born between 2nd Jan/July (N-24) and 1st Jan/July (N-19)
 * OTA: Unmarried male candidates born between 2nd April/Oct (N-25) and 1st April/Oct (N-19)
 */
export function calculateCdsAttempts(dobStr: string = '2006-11-27'): CdsAttemptEvaluation[] {
  const [yearStr, monthStr, dayStr] = dobStr.includes('/')
    ? dobStr.split('/').reverse()
    : dobStr.split('-');

  const dob = new Date(parseInt(yearStr, 10), parseInt(monthStr, 10) - 1, parseInt(dayStr, 10));

  const attemptsConfig = [
    {
      exam: 'CDS I 2028',
      examDate: '2028-04-16',
      courseCommencement: '2029-01-01',
      imaCutoffStart: new Date(2005, 0, 2),  // 2 Jan 2005
      imaCutoffEnd: new Date(2010, 0, 1),    // 1 Jan 2010
      otaCutoffStart: new Date(2004, 3, 2),  // 2 Apr 2004
      otaCutoffEnd: new Date(2010, 3, 1),    // 1 Apr 2010
    },
    {
      exam: 'CDS II 2028',
      examDate: '2028-09-03',
      courseCommencement: '2029-07-01',
      imaCutoffStart: new Date(2005, 6, 2),  // 2 July 2005
      imaCutoffEnd: new Date(2010, 6, 1),    // 1 July 2010
      otaCutoffStart: new Date(2004, 9, 2),  // 2 Oct 2004
      otaCutoffEnd: new Date(2010, 9, 1),    // 1 Oct 2010
    },
    {
      exam: 'CDS I 2029',
      examDate: '2029-04-15',
      courseCommencement: '2030-01-01',
      imaCutoffStart: new Date(2006, 0, 2),  // 2 Jan 2006
      imaCutoffEnd: new Date(2011, 0, 1),    // 1 Jan 2011
      otaCutoffStart: new Date(2005, 3, 2),  // 2 Apr 2005
      otaCutoffEnd: new Date(2011, 3, 1),    // 1 Apr 2011
    },
    {
      exam: 'CDS II 2029',
      examDate: '2029-09-02',
      courseCommencement: '2030-07-01',
      imaCutoffStart: new Date(2006, 6, 2),  // 2 July 2006
      imaCutoffEnd: new Date(2011, 6, 1),    // 1 July 2011
      otaCutoffStart: new Date(2005, 9, 2),  // 2 Oct 2005
      otaCutoffEnd: new Date(2011, 9, 1),    // 1 Oct 2011
      isPrimaryTarget: true
    },
    {
      exam: 'CDS I 2030',
      examDate: '2030-04-21',
      courseCommencement: '2031-01-01',
      imaCutoffStart: new Date(2007, 0, 2),  // 2 Jan 2007
      imaCutoffEnd: new Date(2012, 0, 1),
      otaCutoffStart: new Date(2006, 3, 2),  // 2 Apr 2006
      otaCutoffEnd: new Date(2012, 3, 1),
    },
    {
      exam: 'CDS II 2030',
      examDate: '2030-09-01',
      courseCommencement: '2031-07-01',
      imaCutoffStart: new Date(2007, 6, 2),
      imaCutoffEnd: new Date(2012, 6, 1),
      otaCutoffStart: new Date(2006, 9, 2),  // 2 Oct 2006
      otaCutoffEnd: new Date(2012, 9, 1),
    }
  ];

  return attemptsConfig.map(cfg => {
    const entryDate = new Date(cfg.courseCommencement);
    const ageDiffMs = entryDate.getTime() - dob.getTime();
    const ageYears = (ageDiffMs / (1000 * 3600 * 24 * 365.25)).toFixed(1);

    const imaEligible = dob >= cfg.imaCutoffStart && dob <= cfg.imaCutoffEnd;
    const otaEligible = dob >= cfg.otaCutoffStart && dob <= cfg.otaCutoffEnd;

    let imaStatus: CdsAttemptEvaluation['imaStatus'] = 'Eligible';
    if (dob < cfg.imaCutoffStart) imaStatus = 'Not Eligible (Overaged)';
    if (dob > cfg.imaCutoffEnd) imaStatus = 'Not Eligible (Underage)';

    let otaStatus: CdsAttemptEvaluation['otaStatus'] = 'Eligible';
    if (dob < cfg.otaCutoffStart) otaStatus = 'Not Eligible (Overaged)';
    if (dob > cfg.otaCutoffEnd) otaStatus = 'Not Eligible (Underage)';

    return {
      exam: cfg.exam,
      examDate: cfg.examDate,
      courseCommencement: cfg.courseCommencement,
      targetAcademy: imaEligible ? 'IMA / INA / AFA / OTA' : otaEligible ? 'OTA (Officers Training Academy)' : 'None',
      ageAtEntry: `${ageYears} Yrs`,
      imaStatus,
      otaStatus,
      isPrimaryTarget: cfg.isPrimaryTarget
    };
  });
}

export const CDS_SYLLABUS: CdsSubject[] = [
  {
    id: 'cds_english',
    name: 'Paper 1: English',
    marks: 100,
    duration: '2 Hours (120 Mins)',
    questionCount: 120,
    topics: [
      { id: 'cdse_1', title: 'Reading Comprehension (Passages & Contextual Answers)', category: 'Grammar & Vocabulary' },
      { id: 'cdse_2', title: 'Spotting Errors (Subject-Verb Agreement, Prepositions, Tenses)', category: 'Grammar & Vocabulary' },
      { id: 'cdse_3', title: 'Sentence Improvement & Ordering of Words in a Sentence', category: 'Grammar & Vocabulary' },
      { id: 'cdse_4', title: 'Ordering of Sentences in a Paragraph (S1-S6 Jumbled)', category: 'Comprehension' },
      { id: 'cdse_5', title: 'Synonyms & Antonyms (Advanced Vocabulary)', category: 'Vocabulary' },
      { id: 'cdse_6', title: 'Idioms & Phrases and One-Word Substitutions', category: 'Vocabulary' },
      { id: 'cdse_7', title: 'Cloze Test & Fill in the Blanks', category: 'Grammar' },
      { id: 'cdse_8', title: 'Parts of Speech Identification (Nouns, Adverbs, Conjunctions)', category: 'Grammar' }
    ]
  },
  {
    id: 'cds_gk',
    name: 'Paper 2: General Knowledge (GK)',
    marks: 100,
    duration: '2 Hours (120 Mins)',
    questionCount: 120,
    topics: [
      { id: 'cdsg_1', title: 'Indian History: Ancient (Indus Valley, Maurya, Gupta) & Medieval', category: 'History' },
      { id: 'cdsg_2', title: 'Modern Indian History & Indian National Freedom Movement (1857-1947)', category: 'History' },
      { id: 'cdsg_3', title: 'Geography: Physical Geography, Indian Rivers, Climate & World Maps', category: 'Geography' },
      { id: 'cdsg_4', title: 'Indian Polity: Constitution, Fundamental Rights, Preamble, Parliament & Judiciary', category: 'Polity' },
      { id: 'cdsg_5', title: 'Indian Economy: Five Year Plans, RBI Monetary Policy, Inflation & Budget', category: 'Economy' },
      { id: 'cdsg_6', title: 'General Science: Physics (Mechanics, Optics, Waves - NCERT 9-12)', category: 'Science' },
      { id: 'cdsg_7', title: 'General Science: Chemistry (Periodic Table, Acids/Bases, Reactions)', category: 'Science' },
      { id: 'cdsg_8', title: 'General Science: Biology (Cell Structure, Human Physiology, Diseases)', category: 'Science' },
      { id: 'cdsg_9', title: 'Defence Current Affairs: Tri-Service Joint Exercises, Missiles, Submarines', category: 'Current Affairs' },
      { id: 'cdsg_10', title: 'National & International Current Affairs, Awards & Sports', category: 'Current Affairs' }
    ]
  },
  {
    id: 'cds_maths',
    name: 'Paper 3: Elementary Mathematics (IMA / INA / AFA Only)',
    marks: 100,
    duration: '2 Hours (120 Mins)',
    questionCount: 100,
    topics: [
      { id: 'cdsm_1', title: 'Arithmetic: Number System, Prime Numbers, Divisibility & HCF/LCM', category: 'Arithmetic' },
      { id: 'cdsm_2', title: 'Percentages, Profit & Loss, Simple & Compound Interest', category: 'Arithmetic' },
      { id: 'cdsm_3', title: 'Ratio & Proportion, Time & Work, Speed, Distance & Trains', category: 'Arithmetic' },
      { id: 'cdsm_4', title: 'Algebra: Basic Operations, Remainder Theorem, Quadratic Equations & Roots', category: 'Algebra' },
      { id: 'cdsm_5', title: 'Trigonometry: Ratios, Identities, Heights & Distances Problems', category: 'Trigonometry' },
      { id: 'cdsm_6', title: 'Geometry: Lines, Angles, Triangles (Congruence & Similarity), Circles & Theorems', category: 'Geometry' },
      { id: 'cdsm_7', title: 'Mensuration 2D & 3D: Areas, Volumes of Prisms, Pyramids, Cones, Spheres', category: 'Mensuration' },
      { id: 'cdsm_8', title: 'Statistics: Frequency Distributions, Histograms, Mean, Median & Mode', category: 'Statistics' }
    ]
  }
];

export const SSB_INTERVIEW_STAGES = [
  {
    day: 'Day 1',
    stage: 'Stage-1 Screening Test',
    tasks: 'OIR (Officer Intelligence Rating) Test + PPDT (Picture Perception & Description Test) + Group Discussion',
    elimination: 'Screening round (Screened-in candidates proceed to Stage 2)'
  },
  {
    day: 'Day 2',
    stage: 'Psychological Testing (Stage-2)',
    tasks: 'TAT (Thematic Apperception Test) + WAT (Word Association Test) + SRT (Situation Reaction Test) + SDT (Self Description Test)',
    elimination: 'Evaluates subconscious personality & Officer Like Qualities (OLQs)'
  },
  {
    day: 'Day 3 & 4',
    stage: 'GTO Tasks & Personal Interview',
    tasks: 'Group Testing Officer Tasks: GD, GPE, PGT, HGT, Command Task, Snake Race, Lecturette + President Interview',
    elimination: 'Tests teamwork, stamina, communication, and decision-making under pressure'
  },
  {
    day: 'Day 5',
    stage: 'Final Board Conference',
    tasks: 'Interacting with all board officers + Final Recommendation Announcement',
    elimination: 'Recommended candidates proceed to Special Medical Board (SMB)'
  }
];

export const OFFICER_LIKE_QUALITIES = [
  'Factor 1: Effective Intelligence, Reasoning Ability, Organizing Ability, Power of Expression',
  'Factor 2: Social Adaptability, Cooperation, Sense of Responsibility',
  'Factor 3: Initiative, Self-Confidence, Speed of Decision, Ability to Influence Group, Liveliness',
  'Factor 4: Determination, Courage, Stamina'
];
