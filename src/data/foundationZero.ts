export interface FoundationZeroTopic {
  id: string;
  subject: 'Maths' | 'Physics' | 'Chemistry' | 'English' | 'GK & Reasoning';
  classLevel: 'Class 6-8' | 'Class 9-10' | 'Class 11-12';
  title: string;
  plainAnalogy: string;
  prerequisites: string[];
  feedsIntoCollege: string[];
  youtubeSearchQuery: string;
  order: number;
}

export const FOUNDATION_ZERO_TOPICS: FoundationZeroTopic[] = [
  // ==================== MATHEMATICS (CLASS 6 TO 12) ====================
  {
    id: 'fz_m_1',
    subject: 'Maths',
    classLevel: 'Class 6-8',
    title: 'Number Systems: Integers, Decimals & Fractions',
    plainAnalogy: 'Think of numbers like money — positive integers are deposits, negative integers are debts, and fractions are slice ratios of a pizza.',
    prerequisites: [],
    feedsIntoCollege: ['MA11009', 'MA11011', 'GATE Math'],
    youtubeSearchQuery: 'Number system integers fractions class 6 7 8 math crash course',
    order: 1
  },
  {
    id: 'fz_m_2',
    subject: 'Maths',
    classLevel: 'Class 6-8',
    title: 'Basic Algebra: Variables, Expressions & Linear Equations',
    plainAnalogy: 'Variables like x or y are empty gift boxes. Algebra is simply the trick to find out what prize is hidden inside the box.',
    prerequisites: ['fz_m_1'],
    feedsIntoCollege: ['MA11009', 'MA11011', 'GATE Math', 'CDS Maths'],
    youtubeSearchQuery: 'Algebra for beginners linear equations class 6 7 8',
    order: 2
  },
  {
    id: 'fz_m_3',
    subject: 'Maths',
    classLevel: 'Class 6-8',
    title: 'Ratios, Percentages & Profit-Loss',
    plainAnalogy: 'Percentage is comparing everything out of 100 slices. If you get 80 out of 100, you have an 80% score.',
    prerequisites: ['fz_m_1'],
    feedsIntoCollege: ['CDS Maths', 'GATE Aptitude'],
    youtubeSearchQuery: 'Ratio percentage profit loss quantitative aptitude beginners',
    order: 3
  },
  {
    id: 'fz_m_4',
    subject: 'Maths',
    classLevel: 'Class 9-10',
    title: 'Quadratic Equations & Polynomials',
    plainAnalogy: 'Quadratic equations describe U-shaped curves (parabolas), like the flight path of a thrown cricket ball.',
    prerequisites: ['fz_m_2'],
    feedsIntoCollege: ['MA11009', 'MA11011', 'GATE Math'],
    youtubeSearchQuery: 'Quadratic equations class 10 polynomials basic explanation',
    order: 4
  },
  {
    id: 'fz_m_5',
    subject: 'Maths',
    classLevel: 'Class 9-10',
    title: 'Trigonometry: Sine, Cosine, Tangent & Heights',
    plainAnalogy: 'Trigonometry uses right triangles to calculate heights of tall trees or buildings without climbing them.',
    prerequisites: ['fz_m_2'],
    feedsIntoCollege: ['MA11009', 'PH10005', 'CDS Maths'],
    youtubeSearchQuery: 'Trigonometry class 10 sin cos tan heights and distances',
    order: 5
  },
  {
    id: 'fz_m_6',
    subject: 'Maths',
    classLevel: 'Class 11-12',
    title: 'Coordinate Geometry & Straight Lines',
    plainAnalogy: 'A graph is like Google Maps where every point has a GPS latitude (X) and longitude (Y).',
    prerequisites: ['fz_m_4', 'fz_m_5'],
    feedsIntoCollege: ['MA11009', 'MA11011'],
    youtubeSearchQuery: 'Coordinate geometry class 11 straight lines conic sections',
    order: 6
  },
  {
    id: 'fz_m_7',
    subject: 'Maths',
    classLevel: 'Class 11-12',
    title: 'Calculus Fundamentals: Differentiation & Integration',
    plainAnalogy: 'Differentiation is taking a high-speed camera snapshot of speed at one millisecond; Integration is adding all snapshots to find total distance.',
    prerequisites: ['fz_m_4', 'fz_m_5', 'fz_m_6'],
    feedsIntoCollege: ['MA11009', 'PH10005', 'GATE Math'],
    youtubeSearchQuery: 'Differentiation and Integration class 11 12 calculus for beginners',
    order: 7
  },

  // ==================== PHYSICS (CLASS 6 TO 12) ====================
  {
    id: 'fz_p_1',
    subject: 'Physics',
    classLevel: 'Class 6-8',
    title: 'Motion, Distance, Speed & Force',
    plainAnalogy: 'Motion is how fast position changes. Force is any push or pull that changes an objects speed or direction.',
    prerequisites: [],
    feedsIntoCollege: ['PH10005', 'ME10001', 'CDS GK'],
    youtubeSearchQuery: 'Force and motion class 6 7 8 physics basics',
    order: 1
  },
  {
    id: 'fz_p_2',
    subject: 'Physics',
    classLevel: 'Class 6-8',
    title: 'Work, Power & Energy Conservation',
    plainAnalogy: 'Energy cannot be created or destroyed, only shape-shifted — like food energy converting into leg movement while running.',
    prerequisites: ['fz_p_1'],
    feedsIntoCollege: ['PH10005', 'EE10002', 'CDS GK'],
    youtubeSearchQuery: 'Work power energy conservation class 7 8 physics',
    order: 2
  },
  {
    id: 'fz_p_3',
    subject: 'Physics',
    classLevel: 'Class 9-10',
    title: 'Newtons Laws of Motion & Gravity',
    plainAnalogy: '1st law: Inertia makes sleeping teenagers hard to wake. 2nd law: Push harder (F) to accelerate faster (a). 3rd law: Recoil when shooting a gun.',
    prerequisites: ['fz_p_1', 'fz_p_2'],
    feedsIntoCollege: ['PH10005', 'ME10001', 'CDS GK'],
    youtubeSearchQuery: 'Newtons laws of motion gravitation class 9 10 physics',
    order: 3
  },
  {
    id: 'fz_p_4',
    subject: 'Physics',
    classLevel: 'Class 9-10',
    title: 'Light: Reflection, Refraction & Lenses',
    plainAnalogy: 'Light bends (refracts) when entering water because it moves slower, like a lawnmower hitting thick grass at an angle.',
    prerequisites: ['fz_p_1'],
    feedsIntoCollege: ['PH10005', 'CDS GK'],
    youtubeSearchQuery: 'Reflection and refraction of light class 10 lenses ray diagrams',
    order: 4
  },
  {
    id: 'fz_p_5',
    subject: 'Physics',
    classLevel: 'Class 9-10',
    title: 'Electricity & Ohms Law (V = IR)',
    plainAnalogy: 'Voltage is water pressure in a pipe, Current is water flow rate, and Resistance is a valve narrowing the pipe.',
    prerequisites: ['fz_p_2'],
    feedsIntoCollege: ['EE10002', 'EC10005', 'PH10005'],
    youtubeSearchQuery: 'Electricity Ohms law class 10 current voltage resistance',
    order: 5
  },
  {
    id: 'fz_p_6',
    subject: 'Physics',
    classLevel: 'Class 11-12',
    title: 'Wave Optics: Interference & Diffraction',
    plainAnalogy: 'Water waves meeting create huge crests (constructive interference) or flat calm water (destructive interference). Light waves do the same!',
    prerequisites: ['fz_p_4', 'fz_m_5'],
    feedsIntoCollege: ['PH10005'],
    youtubeSearchQuery: 'Wave optics interference diffraction class 12 physics',
    order: 6
  },

  // ==================== CHEMISTRY (CLASS 6 TO 12) ====================
  {
    id: 'fz_c_1',
    subject: 'Chemistry',
    classLevel: 'Class 6-8',
    title: 'States of Matter, Elements, Compounds & Mixtures',
    plainAnalogy: 'Elements are pure LEGO brick colors. Compounds are built LEGO sets (molecules). Mixtures are a bucket of unsorted bricks.',
    prerequisites: [],
    feedsIntoCollege: ['CH10009', 'CDS GK'],
    youtubeSearchQuery: 'Elements compounds mixtures states of matter class 6 7 8',
    order: 1
  },
  {
    id: 'fz_c_2',
    subject: 'Chemistry',
    classLevel: 'Class 9-10',
    title: 'Atomic Structure & Periodic Table',
    plainAnalogy: 'Atoms are solar systems: Protons/Neutrons are the Sun core, Electrons are planets orbiting in energy shells.',
    prerequisites: ['fz_c_1'],
    feedsIntoCollege: ['CH10009', 'PH10005', 'EC10005'],
    youtubeSearchQuery: 'Structure of atom periodic table electronic configuration class 9 10',
    order: 2
  },
  {
    id: 'fz_c_3',
    subject: 'Chemistry',
    classLevel: 'Class 9-10',
    title: 'Chemical Reactions, Equations & Acids-Bases',
    plainAnalogy: 'Acids are sour hydrogen-ion donors (lemon juice). Bases are bitter hydroxide acceptors (soap). Neutralization makes saltwater!',
    prerequisites: ['fz_c_2'],
    feedsIntoCollege: ['CH10009', 'CDS GK'],
    youtubeSearchQuery: 'Chemical reactions equations acids bases salts class 10',
    order: 3
  },
  {
    id: 'fz_c_4',
    subject: 'Chemistry',
    classLevel: 'Class 11-12',
    title: 'Chemical Bonding & Molecular Structure',
    plainAnalogy: 'Ionic bonding is full electron transfer (stealing). Covalent bonding is equal electron sharing between two atoms.',
    prerequisites: ['fz_c_2', 'fz_c_3'],
    feedsIntoCollege: ['CH10009'],
    youtubeSearchQuery: 'Chemical bonding hybridization MOT VSEPR class 11 chemistry',
    order: 4
  },
  {
    id: 'fz_c_5',
    subject: 'Chemistry',
    classLevel: 'Class 11-12',
    title: 'Electrochemistry & Redox Reactions',
    plainAnalogy: 'Redox is electron passing — oxidation is losing electrons (rusting), reduction is gaining electrons (battery charging).',
    prerequisites: ['fz_c_3', 'fz_c_4'],
    feedsIntoCollege: ['CH10009'],
    youtubeSearchQuery: 'Electrochemistry Nernst equation galvanic cell class 12 chemistry',
    order: 5
  },

  // ==================== ENGLISH & VERBAL (CLASS 6 TO 12) ====================
  {
    id: 'fz_e_1',
    subject: 'English',
    classLevel: 'Class 6-8',
    title: 'Parts of Speech: Nouns, Verbs, Adjectives & Adverbs',
    plainAnalogy: 'Nouns are the actors, Verbs are their actions, Adjectives describe actors, and Adverbs describe how actions happen.',
    prerequisites: [],
    feedsIntoCollege: ['HS10003', 'CDS English'],
    youtubeSearchQuery: 'Parts of speech grammar English rules class 6 7 8',
    order: 1
  },
  {
    id: 'fz_e_2',
    subject: 'English',
    classLevel: 'Class 9-10',
    title: 'Tenses & Subject-Verb Agreement Rules',
    plainAnalogy: 'Tenses are time-stamps on verbs telling whether an event happened in the past, is happening now, or will happen later.',
    prerequisites: ['fz_e_1'],
    feedsIntoCollege: ['HS10003', 'CDS English'],
    youtubeSearchQuery: 'Tenses rules subject verb agreement spotting errors English',
    order: 2
  },
  {
    id: 'fz_e_3',
    subject: 'English',
    classLevel: 'Class 11-12',
    title: 'Vocabulary: Synonyms, Antonyms, Idioms & Cloze Test',
    plainAnalogy: 'Building vocabulary is stocking your mental toolchest with precise words to express exact feelings and technical thoughts.',
    prerequisites: ['fz_e_2'],
    feedsIntoCollege: ['HS10003', 'CDS English'],
    youtubeSearchQuery: 'CDS English vocabulary idioms phrases cloze test practice',
    order: 3
  },

  // ==================== GK & REASONING (CLASS 6 TO 12) ====================
  {
    id: 'fz_g_1',
    subject: 'GK & Reasoning',
    classLevel: 'Class 6-8',
    title: 'Logical Reasoning: Patterns, Analogies & Series',
    plainAnalogy: 'Logical reasoning is detective work — finding hidden rules in shapes, letter codes, or number patterns.',
    prerequisites: [],
    feedsIntoCollege: ['GATE Aptitude', 'CDS GK', 'SSB OIR'],
    youtubeSearchQuery: 'Logical reasoning number series coding decoding beginners',
    order: 1
  },
  {
    id: 'fz_g_2',
    subject: 'GK & Reasoning',
    classLevel: 'Class 9-10',
    title: 'Indian Freedom Movement & History Basics',
    plainAnalogy: 'Understanding 1857 to 1947 helps you appreciate how India gained independence through sacrifices, treaties, and protests.',
    prerequisites: [],
    feedsIntoCollege: ['CDS GK', 'UHV ID10003', 'SSB Interview'],
    youtubeSearchQuery: 'Indian national movement modern history class 9 10 summary',
    order: 2
  },
  {
    id: 'fz_g_3',
    subject: 'GK & Reasoning',
    classLevel: 'Class 11-12',
    title: 'Indian Polity: Constitution, Fundamental Rights & Parliament',
    plainAnalogy: 'The Constitution is the ultimate rulebook of India specifying how laws are made and protecting your freedom as a citizen.',
    prerequisites: ['fz_g_2'],
    feedsIntoCollege: ['CDS GK', 'SSB Interview'],
    youtubeSearchQuery: 'Indian polity constitution fundamental rights preamble CDS SSC',
    order: 3
  }
];
