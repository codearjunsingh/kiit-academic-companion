export interface CuriosityCard {
  id: string;
  category: 'Science' | 'History' | 'Engineering' | 'Military' | 'Coding Trick' | 'Vocabulary' | 'Current Affairs' | 'Logic Puzzle';
  title: string;
  insight: string;
  takeaway: string;
  icon: string;
}

export const DAILY_CURIOSITY_CARDS: CuriosityCard[] = [
  {
    id: 'cur_sci_1',
    category: 'Science',
    title: 'Quantum Entanglement ("Spooky Action")',
    insight: 'Entangled particles stay synchronized instantly across light years distance. Einstein called it spooky action at a distance, but it enables unhackable Quantum Encryption!',
    takeaway: 'Speed of information transfer isn\'t violating relativity — quantum states collapse simultaneously upon measurement.',
    icon: 'Atom'
  },
  {
    id: 'cur_hist_1',
    category: 'History',
    title: '1857 Indian Revolt & Mangal Pandey',
    insight: 'The 1857 Indian Rebellion started in Meerut and Barrackpore over the greased cartridges rumor, ending British East India Company rule and transferring control to the British Crown.',
    takeaway: 'Marked the official genesis of Indias 90-year struggle for independence (CDS GK Core Topic).',
    icon: 'Landmark'
  },
  {
    id: 'cur_eng_1',
    category: 'Engineering',
    title: 'Fast Inverse Square Root (Quake III)',
    insight: 'In 1999, game devs used a famous bitwise magic number 0x5f3759df to compute 1/sqrt(x) 4x faster than standard division for 3D lighting reflections!',
    takeaway: 'Clever math hacks often outperform raw hardware power.',
    icon: 'Cpu'
  },
  {
    id: 'cur_mil_1',
    category: 'Military',
    title: 'SSB Officer Like Quality #1: Effective Intelligence',
    insight: 'Effective Intelligence is not high IQ; it is the practical ability to find solutions to complex real-world problems using available resources under stress.',
    takeaway: 'Evaluated in Stage-1 PPDT and Stage-2 GTO obstacles at SSB selection boards.',
    icon: 'Shield'
  },
  {
    id: 'cur_code_1',
    category: 'Coding Trick',
    title: 'Swap Variables Without Temporary Memory',
    insight: 'In C/C++, you can swap two integers using XOR bitwise operations: a = a ^ b; b = a ^ b; a = a ^ b;',
    takeaway: 'Saves 4 bytes of RAM without needing a temp variable!',
    icon: 'Code'
  },
  {
    id: 'cur_vocab_1',
    category: 'Vocabulary',
    title: 'Word of the Day: Perspicacious (adj)',
    insight: 'Meaning: Having keen mental perception and understanding; discerning; sharp-witted.',
    takeaway: 'Example: "His perspicacious analysis of algorithms impressed the technical panel." (CDS English)',
    icon: 'BookOpen'
  },
  {
    id: 'cur_ca_1',
    category: 'Current Affairs',
    title: 'ISRO Gaganyaan Human Spaceflight Mission',
    insight: 'India\'s 1st crewed orbital spaceflight capsule designed to send 3 astronauts to a 400km orbit for 3 days and return safely in Indian waters.',
    takeaway: 'Places India among US, Russia, and China in indigenous crewed space capability.',
    icon: 'Rocket'
  },
  {
    id: 'cur_logic_1',
    category: 'Logic Puzzle',
    title: 'The 3-Switch Lightbulb Challenge',
    insight: 'You are outside a closed room with 3 switches, controlling 3 bulbs inside. You can enter the room only ONCE. How do you identify which switch belongs to which bulb?',
    takeaway: 'Solution: Turn Switch 1 ON for 5 mins, turn it OFF. Turn Switch 2 ON, enter room! Warm bulb = Switch 1, lit bulb = Switch 2, cold bulb = Switch 3.',
    icon: 'Brain'
  }
];
