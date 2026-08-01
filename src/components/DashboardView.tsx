import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  SECTION_A26_TIMETABLE,
  SECTION_B1_TIMETABLE,
  ClassSlot
} from '../data/profile';
import {
  SCHEME_A_SEM1_COURSES,
  SCHEME_B_SEM1_COURSES,
  Subject
} from '../data/subjects';
import { FOUNDATION_ZERO_TOPICS } from '../data/foundationZero';
import {
  Calendar,
  Clock,
  Sparkles,
  Award,
  AlertCircle,
  ExternalLink,
  Shield,
  Target,
  Layers,
  Code,
  Flame,
  CheckCircle2,
  Brain,
  Zap,
  ArrowRight,
  TrendingUp,
  Heart,
  AlertTriangle
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    scheme,
    checkedSyllabus,
    checkedFoundationZero,
    setActiveView,
    foundationStreak
  } = useApp();

  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[currentDate.getDay()];

  const activeTimetable: ClassSlot[] = scheme === 'Scheme A' ? SECTION_A26_TIMETABLE : SECTION_B1_TIMETABLE;
  const todayClasses: ClassSlot[] = activeTimetable.filter(slot => slot.day === dayName);

  const rawCourses: Subject[] = scheme === 'Scheme A' ? SCHEME_A_SEM1_COURSES : SCHEME_B_SEM1_COURSES;
  const totalTopics = rawCourses.reduce((acc: number, c: Subject) => acc + c.chapters.length, 0);
  const completedTopics = rawCourses.reduce((acc: number, c: Subject) => acc + c.chapters.filter(ch => checkedSyllabus[ch.id]).length, 0);
  const collegePct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  // Zero to hero next topic
  const nextZeroTopic = FOUNDATION_ZERO_TOPICS.find(t => !checkedFoundationZero[t.id]) || FOUNDATION_ZERO_TOPICS[0];

  const greeting = currentDate.getHours() < 12 ? 'Good Morning' : currentDate.getHours() < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="space-y-6 pb-20">
      {/* MISSION CONTROL HERO BANNER */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-bold text-indigo-200 mb-2">
                <Brain className="w-3.5 h-3.5 text-amber-300" />
                <span>StudyOS • Arjun's Personal AI Mission Control</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
                {greeting}, Arjun! 🎓
              </h1>
              <p className="text-indigo-200 text-sm mt-1 font-medium">
                KIIT B.Tech CSE-AIML • Section {scheme === 'Scheme A' ? 'A26' : 'B1'} ({scheme}) • Room 201, Campus-8
              </p>
            </div>

            {/* IQ Metrics Strip */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 shrink-0">
              <div className="text-center px-2">
                <p className="text-[10px] text-indigo-200 uppercase font-black">Streak</p>
                <p className="text-xl font-black text-amber-300 flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 fill-amber-400" /> {foundationStreak}d
                </p>
              </div>
              <div className="text-center border-l border-white/10 pl-3">
                <p className="text-[10px] text-indigo-200 uppercase font-black">Syllabus</p>
                <p className="text-xl font-black text-emerald-400">{collegePct}%</p>
              </div>
              <div className="text-center border-l border-white/10 pl-3">
                <p className="text-[10px] text-indigo-200 uppercase font-black">CDS Attempts</p>
                <p className="text-xl font-black text-cyan-300">6 IMA/OTA</p>
              </div>
            </div>
          </div>

          {/* AI DAILY COMMANDER FORECAST */}
          <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="font-extrabold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-amber-400" /> AI Daily Commander Forecast:
              </span>
              <p className="text-white font-bold">
                Goal Completion Probability: <span className="text-emerald-400 text-sm font-black">82%</span> • Biggest Risk: <span className="text-amber-300">Mathematics Backlog</span>
              </p>
              <p className="text-indigo-200 text-[11px]">
                ⚠️ <strong>Downstream Risk:</strong> If Mathematics is ignored today, Machine Learning in Semester 3 becomes difficult.
              </p>
            </div>

            <button
              onClick={() => setActiveView('knowledgeGraph')}
              className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-transform active:scale-95 shrink-0 self-start sm:self-center"
            >
              Resolve Math Risk →
            </button>
          </div>

          {/* TODAY'S IQ MISSION EXECUTIVE CARD */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <h2 className="text-base font-black text-white">Today's Execution Blueprint ({dayName})</h2>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/30">
                Estimated Time: ~5h 30m
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-black text-indigo-300 uppercase">🏛️ KIIT Academics</span>
                <p className="font-bold text-white truncate">{todayClasses.length} Classes Today</p>
                <p className="text-[11px] text-indigo-200 truncate">{todayClasses[0] ? todayClasses[0].subject : 'No classes scheduled'}</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-black text-cyan-300 uppercase">🪖 CDS II 2029 Target</span>
                <p className="font-bold text-white">English & Math Checklists</p>
                <p className="text-[11px] text-cyan-200">Attempt 1 Target: Sep 2028</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-black text-amber-300 uppercase">🎯 PW GATE 2029</span>
                <p className="font-bold text-white">15 DPP Questions Goal</p>
                <p className="text-[11px] text-amber-200">AI & Prompting Track</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] font-black text-emerald-300 uppercase">🎓 Zero-to-Hero Topic</span>
                <p className="font-bold text-white truncate">{nextZeroTopic.title}</p>
                <p className="text-[11px] text-emerald-200">{nextZeroTopic.subject} ({nextZeroTopic.classLevel})</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK ACCESS NAVIGATION CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { id: 'foundationZero', label: 'Zero-to-Hero (Class 6-12)', icon: Layers, color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200 dark:border-teal-900' },
          { id: 'subjects', label: 'Curricula & 9 Textbooks', icon: Award, color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900' },
          { id: 'cds', label: 'UPSC CDS II Hub', icon: Shield, color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900' },
          { id: 'coding', label: 'Coding HQ (C/C++/DSA)', icon: Code, color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900' },
        ].map(item => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`p-4 rounded-2xl border ${item.color} cursor-pointer hover:scale-102 transition-all flex flex-col justify-between space-y-3 shadow-xs`}
            >
              <Icon className="w-6 h-6" />
              <div>
                <p className="text-xs font-black">{item.label}</p>
                <p className="text-[10px] font-bold opacity-75 mt-0.5 flex items-center gap-0.5">
                  <span>Open Module</span> <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* TODAY'S CLASS SCHEDULE */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              Today's Class Schedule ({dayName} • {scheme} Section {scheme === 'Scheme A' ? 'A26' : 'B1'})
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500">Room 201 • Campus-8</span>
        </div>

        {todayClasses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {todayClasses.map((c: ClassSlot, i: number) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
                <div className="flex items-center justify-between font-mono font-bold text-indigo-600 dark:text-indigo-400">
                  <span>{c.time}</span>
                  <span className="text-[10px] bg-indigo-100 dark:bg-indigo-950 px-2 py-0.5 rounded text-indigo-800 dark:text-indigo-300">{c.room}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">{c.subject}</h3>
                <p className="text-slate-500 text-[11px]">Type: {c.type}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 font-medium p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
            🎉 No official lectures scheduled for today! Time for GATE, CDS, and Coding practice.
          </p>
        )}
      </div>
    </div>
  );
};
