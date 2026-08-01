import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MASTER_TEACHER_TOPICS, TeacherTopic } from '../data/masterTeacher';
import {
  SECTION_A26_TIMETABLE,
  SECTION_B1_TIMETABLE,
  ClassSlot
} from '../data/profile';
import {
  Calendar,
  Clock,
  Sparkles,
  Zap,
  Play,
  ArrowRight,
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Brain,
  Shield,
  Target,
  Code,
  Flame,
  Award,
  Book,
  ExternalLink,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export const SinglePageMissionControl: React.FC = () => {
  const { scheme, foundationStreak } = useApp();
  const [selectedTopicId, setSelectedTopicId] = useState<string>('tp_calculus_1');
  const [teachLevel, setTeachLevel] = useState<'knowNothing' | 'class10' | 'class12' | 'college' | 'examRevision'>('knowNothing');
  const [isMissionStarted, setIsMissionStarted] = useState(false);

  const selectedTopic = MASTER_TEACHER_TOPICS.find(t => t.id === selectedTopicId) || MASTER_TEACHER_TOPICS[0];

  const currentDate = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[currentDate.getDay()];

  const activeTimetable: ClassSlot[] = scheme === 'Scheme A' ? SECTION_A26_TIMETABLE : SECTION_B1_TIMETABLE;
  const todayClasses = activeTimetable.filter(slot => slot.day === dayName);

  return (
    <div className="space-y-8 pb-24">
      {/* SECTION 1: TODAY LIVE COUNTDOWNS & SEMESTER PROGRESS */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-teal-500 flex items-center justify-center font-black text-lg">
              S
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight">StudyOS • Executive Mission Control</h1>
              <p className="text-xs text-slate-400 font-semibold">
                Arjun Singh (KIIT B.Tech CSE-AIML • Section {scheme === 'Scheme A' ? 'A26' : 'B1'})
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-indigo-950/60 p-2.5 rounded-2xl border border-indigo-800/60">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-black text-amber-300">{foundationStreak} Day Active Streak</span>
          </div>
        </div>

        {/* Live Countdowns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center">
            <p className="text-[10px] text-indigo-300 font-extrabold uppercase">📅 Mid Sem Exam</p>
            <p className="text-xl font-black text-amber-400 mt-0.5">18 Days Left</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center">
            <p className="text-[10px] text-indigo-300 font-extrabold uppercase">📅 End Sem Exam</p>
            <p className="text-xl font-black text-emerald-400 mt-0.5">79 Days Left</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center">
            <p className="text-[10px] text-indigo-300 font-extrabold uppercase">🪖 UPSC CDS II 2029</p>
            <p className="text-xl font-black text-cyan-300 mt-0.5">924 Days Left</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-center">
            <p className="text-[10px] text-indigo-300 font-extrabold uppercase">💻 PW GATE 2029</p>
            <p className="text-xl font-black text-purple-300 mt-0.5">890 Days Left</p>
          </div>
        </div>

        {/* Semester Progress */}
        <div className="space-y-1 pt-1">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-400">Semester 1 Completion Progress:</span>
            <span className="text-indigo-400">62%</span>
          </div>
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5">
            <div className="bg-gradient-to-r from-indigo-500 to-teal-400 h-full rounded-full transition-all" style={{ width: '62%' }} />
          </div>
        </div>
      </div>

      {/* SECTION 2: TODAY'S MISSION (THE BIGGEST HERO SECTION - ZERO THINKING!) */}
      <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-indigo-800/60 space-y-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-indigo-800/80 pb-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-400/20 px-3 py-1 rounded-full text-xs font-black text-amber-300 border border-amber-400/30 mb-2">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>ZERO THINKING • MAXIMUM EXECUTION BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              📚 TODAY'S EXECUTION MISSION ({dayName})
            </h2>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <span className="text-xs font-extrabold text-indigo-200 bg-white/10 px-3.5 py-2 rounded-xl">
              Estimated Time: ~5h 10m
            </span>
            <button
              onClick={() => setIsMissionStarted(!isMissionStarted)}
              className={`px-6 py-2.5 rounded-xl font-black text-xs transition-transform active:scale-95 flex items-center space-x-2 shadow-lg ${
                isMissionStarted ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : 'bg-amber-400 text-slate-950 hover:bg-amber-300'
              }`}
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>{isMissionStarted ? 'MISSION IN PROGRESS' : 'START MISSION →'}</span>
            </button>
          </div>
        </div>

        {/* 6 PRIORITIZED DAILY EXECUTION ITEMS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* Item 1 */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-amber-300">1️⃣ Engineering Mathematics</span>
              <span className="text-[10px] bg-amber-400/20 px-2 py-0.5 rounded text-amber-200 font-bold">35 min</span>
            </div>
            <p className="font-black text-white text-sm">Differential Calculus & Derivatives</p>
            <p className="text-[11px] text-indigo-200">Prerequisite: Basic Algebra (Warning Review)</p>
            <div className="pt-1 text-[10px] text-slate-300 border-t border-white/10 flex justify-between">
              <span>Book: Kreyszig (pp. 21-38)</span>
              <span>Video: 3Blue1Brown</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-cyan-300">2️⃣ C Programming</span>
              <span className="text-[10px] bg-cyan-400/20 px-2 py-0.5 rounded text-cyan-200 font-bold">45 min</span>
            </div>
            <p className="font-black text-white text-sm">Pointers & Memory Allocation</p>
            <p className="text-[11px] text-cyan-200">Prerequisite: C Variables (Completed)</p>
            <div className="pt-1 text-[10px] text-slate-300 border-t border-white/10 flex justify-between">
              <span>Book: Balagurusamy (pp. 140-182)</span>
              <span>Video: CodeWithHarry</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-purple-300">3️⃣ PW Nirmaan GATE 2029</span>
              <span className="text-[10px] bg-purple-400/20 px-2 py-0.5 rounded text-purple-200 font-bold">60 min</span>
            </div>
            <p className="font-black text-white text-sm">Today's Live Class & 15 DPP Qs</p>
            <p className="text-[11px] text-purple-200">Faculty: Vishvadeep Gothi / Aditya Sir</p>
            <div className="pt-1 text-[10px] text-slate-300 border-t border-white/10 flex justify-between">
              <span>Target: 15 DPP Questions</span>
              <span>Module: AI Tools</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-emerald-300">4️⃣ UPSC CDS II 2029</span>
              <span className="text-[10px] bg-emerald-400/20 px-2 py-0.5 rounded text-emerald-200 font-bold">30 min</span>
            </div>
            <p className="font-black text-white text-sm">English Vocabulary & Math</p>
            <p className="text-[11px] text-emerald-200">Practice 20 Synonyms / Antonyms</p>
            <div className="pt-1 text-[10px] text-slate-300 border-t border-white/10 flex justify-between">
              <span>Target: IMA Entry</span>
              <span>Attempt: Sep 2028</span>
            </div>
          </div>

          {/* Item 5 */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-rose-300">5️⃣ Daily Curiosity Discovery</span>
              <span className="text-[10px] bg-rose-400/20 px-2 py-0.5 rounded text-rose-200 font-bold">15 min</span>
            </div>
            <p className="font-black text-white text-sm">Quantum Physics & Military OLQs</p>
            <p className="text-[11px] text-rose-200">8 Daily Micro-Discovery Cards</p>
            <div className="pt-1 text-[10px] text-slate-300 border-t border-white/10 flex justify-between">
              <span>Takeaway: High ROI</span>
              <span>10 Mins Compound</span>
            </div>
          </div>

          {/* Item 6 */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-teal-300">6️⃣ Revise Yesterday</span>
              <span className="text-[10px] bg-teal-400/20 px-2 py-0.5 rounded text-teal-200 font-bold">20 min</span>
            </div>
            <p className="font-black text-white text-sm">Yesterday's Algebra & Vectors</p>
            <p className="text-[11px] text-teal-200">Ebbinghaus Memory Retention Review</p>
            <div className="pt-1 text-[10px] text-slate-300 border-t border-white/10 flex justify-between">
              <span>Health: 85%</span>
              <span>Spaced Repetition</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 & 4: CONTINUE LEARNING & WEAK TOPIC WARNINGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Continue Learning */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
          <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Play className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Continue Learning (One-Click Resume)</span>
          </h3>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-black uppercase text-indigo-600 dark:text-indigo-400">Yesterday's Track</span>
              <h4 className="font-black text-slate-900 dark:text-white text-sm mt-0.5">Differential Calculus & Derivatives</h4>
              <p className="text-xs text-slate-500">Progress: 56% Completed</p>
            </div>

            <button
              onClick={() => setSelectedTopicId('tp_calculus_1')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-xs transition-colors shrink-0 flex items-center space-x-1"
            >
              <span>Continue →</span>
            </button>
          </div>
        </div>

        {/* Weak Topics & Prerequisite Warnings (NO Hard Locks!) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
          <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span>Weak Topics & Prerequisite Warnings</span>
          </h3>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 flex items-center justify-between">
              <div>
                <span className="font-extrabold text-slate-900 dark:text-white">Calculus Derivatives</span>
                <p className="text-amber-700 dark:text-amber-300 text-[11px]">⚠️ Prerequisite Algebra needs review</p>
              </div>
              <button
                onClick={() => setTeachLevel('knowNothing')}
                className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-[11px]"
              >
                Fix Prerequisite
              </button>
            </div>

            <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 flex items-center justify-between">
              <div>
                <span className="font-extrabold text-slate-900 dark:text-white">Matrices & Determinants</span>
                <p className="text-amber-700 dark:text-amber-300 text-[11px]">⚠️ Prerequisite Linear Equations shaky</p>
              </div>
              <button
                onClick={() => setTeachLevel('knowNothing')}
                className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-[11px]"
              >
                Fix Prerequisite
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5: UNIVERSAL KNOWLEDGE TEACHER CARD ("TEACH ME FROM ZERO") */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                {selectedTopic.domain}
              </span>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                Official Textbook: {selectedTopic.bestBook.bookTitle}
              </span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {selectedTopic.title}
            </h2>
          </div>

          {/* TEACH ME FROM ZERO LEVEL TOGGLE */}
          <div className="bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl flex flex-wrap items-center gap-1 shrink-0">
            <span className="text-[10px] font-black uppercase text-slate-500 px-2">Teach Me Like:</span>
            {[
              { id: 'knowNothing', label: '○ I know nothing' },
              { id: 'class10', label: 'Class 10' },
              { id: 'class12', label: 'Class 12' },
              { id: 'college', label: 'College' },
              { id: 'examRevision', label: 'Exam Revision' },
            ].map(lvl => (
              <button
                key={lvl.id}
                onClick={() => setTeachLevel(lvl.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                  teachLevel === lvl.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* TEACH ME EXPLANATION BANNER */}
        <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-xs space-y-2">
          <p className="font-black text-indigo-900 dark:text-indigo-200 uppercase tracking-wider flex items-center gap-1.5">
            <Brain className="w-4 h-4 text-indigo-600" />
            <span>AI Teacher Explanation ({teachLevel}):</span>
          </p>
          <p className="text-slate-800 dark:text-slate-200 text-sm font-semibold leading-relaxed">
            {selectedTopic.teachMe[teachLevel]}
          </p>
        </div>

        {/* THE 7 GOLDEN ANSWERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Question 1 & 2 */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-indigo-600 dark:text-indigo-400 uppercase">1. What Is It?</h4>
            <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{selectedTopic.whatIsIt}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-indigo-600 dark:text-indigo-400 uppercase">2. Why Do I Need It?</h4>
            <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{selectedTopic.whyDoINeedIt}</p>
          </div>

          {/* Question 3: Prerequisites (Warnings NOT Locks) */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-amber-600 dark:text-amber-400 uppercase">3. What Should I Know First? (Prerequisites)</h4>
            <div className="space-y-1">
              {selectedTopic.prerequisites.map((req, idx) => (
                <div key={idx} className="flex items-center justify-between text-slate-800 dark:text-slate-200 font-medium">
                  <span>{req.title}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                    req.met ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {req.met ? '✓ Ready' : '⚠️ Warning: Review'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Question 4: Best YouTube Teachers */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-red-600 dark:text-red-400 uppercase">4. Best YouTube Teachers Ranked</h4>
            <div className="space-y-1">
              {selectedTopic.bestYouTube.map((yt, idx) => (
                <a
                  key={idx}
                  href={yt.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
                >
                  <span>{yt.level}: {yt.teacherName}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Question 5: Which Book? */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-blue-600 dark:text-blue-400 uppercase">5. Which Book & Exact Pages?</h4>
            <p className="font-bold text-slate-900 dark:text-white">{selectedTopic.bestBook.bookTitle}</p>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Author: {selectedTopic.bestBook.author} • {selectedTopic.bestBook.pageRange}</p>
          </div>

          {/* Question 6: Practice & PYQs */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-purple-600 dark:text-purple-400 uppercase">6. Practice Questions & PYQs</h4>
            <p className="text-slate-800 dark:text-slate-200 font-medium">
              Target: {selectedTopic.practiceAndPyqs.easy} Easy • {selectedTopic.practiceAndPyqs.medium} Medium • {selectedTopic.practiceAndPyqs.hard} Hard
            </p>
            <p className="text-indigo-600 dark:text-indigo-400 font-semibold">{selectedTopic.practiceAndPyqs.pyqSummary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
