import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { GATE_2029_SYLLABUS, PW_NIRMAAN_BATCH_INFO, PW_NIRMAAN_SUBJECT_ROADMAP } from '../data/gate';
import {
  Target,
  CheckSquare,
  Square,
  Award,
  Zap,
  BookOpen,
  Calendar,
  Clock,
  Flame,
  User,
  Sparkles
} from 'lucide-react';

export const GateView: React.FC = () => {
  const { checkedGate, toggleGateTopic } = useApp();

  const [dppCount, setDppCount] = useState<number>(() => {
    const saved = localStorage.getItem('pw_dpp_count');
    return saved ? parseInt(saved, 10) : 0;
  });

  const incrementDpp = () => {
    const next = dppCount + 1;
    setDppCount(next);
    localStorage.setItem('pw_dpp_count', next.toString());
  };

  const resetDpp = () => {
    setDppCount(0);
    localStorage.setItem('pw_dpp_count', '0');
  };

  let totalTopics = 0;
  let doneTopics = 0;
  GATE_2029_SYLLABUS.forEach(subj => {
    subj.topics.forEach(t => {
      totalTopics++;
      if (checkedGate[t.id]) doneTopics++;
    });
  });

  const overallPct = totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;

  // Real-time dynamic GATE 2029 countdown
  const today = new Date();
  const gateDate = new Date('2029-02-03');
  const daysToGate = Math.max(0, Math.ceil((gateDate.getTime() - today.getTime()) / (1000 * 3600 * 24)));

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner: PW Nirmaan GATE 2029 */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/30 backdrop-blur-md border border-purple-400/30 px-3 py-1 rounded-full text-xs font-semibold text-purple-200 mb-3">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Physics Wallah Nirmaan Batch • GATE 2029 Tracker</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              GATE 2029 CSE Preparation Center 🎯
            </h1>
            <p className="text-purple-200 text-sm mt-1 max-w-xl font-medium">
              Live batch schedule, lecture planners, and subject weightages matching your PW App Dashboard.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center px-2">
              <p className="text-[10px] text-purple-200 uppercase font-extrabold">Target Exam</p>
              <p className="text-lg font-black text-amber-300">Feb 2029</p>
            </div>
            <div className="text-center border-l border-white/10 pl-4">
              <p className="text-[10px] text-purple-200 uppercase font-extrabold">Countdown</p>
              <p className="text-2xl font-black text-white">{daysToGate} Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* LIVE PW CLASS SCHEDULE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Module 1: AI Tools */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-white" />
              <h2 className="text-base font-extrabold">AI Tools (Live Module)</h2>
            </div>
            <span className="text-[10px] font-black px-2 py-0.5 rounded bg-white/20 text-white">
              July 13 – July 31
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md">
              <p className="text-[10px] text-amber-100 font-extrabold uppercase">Day & Timing</p>
              <p className="font-extrabold text-white mt-0.5">Mon–Fri (11:30 AM–1:00 PM)</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md">
              <p className="text-[10px] text-amber-100 font-extrabold uppercase">Faculty</p>
              <p className="font-extrabold text-white mt-0.5 flex items-center gap-1">
                <User className="w-3.5 h-3.5" /> Vishvadeep Gothi Sir
              </p>
            </div>
          </div>
        </div>

        {/* Module 2: Prompt Engineering */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-2xl p-5 shadow-lg space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              <h2 className="text-base font-extrabold">Prompt Eng. & AI Studio</h2>
            </div>
            <span className="text-[10px] font-black px-2 py-0.5 rounded bg-white/20 text-white">
              Aditya Jain Sir
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs pt-1">
            <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md">
              <p className="text-[10px] text-indigo-100 font-extrabold uppercase">Day & Timing</p>
              <p className="font-extrabold text-white mt-0.5">Mon–Thu 10 AM / Sat 3:30 PM</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-md">
              <p className="text-[10px] text-indigo-100 font-extrabold uppercase">PW App Status</p>
              <p className="font-extrabold text-amber-300 mt-0.5">Prompt Eng: 82% Done</p>
            </div>
          </div>
        </div>
      </div>

      {/* PW NIRMAAN SUBJECT ROADMAP TIMELINE */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">PW Nirmaan 2026–27 Subject Roadmap</h2>
          </div>
          <span className="text-xs font-bold text-slate-500">Official PW Schedule</span>
        </div>

        <div className="space-y-2.5">
          {PW_NIRMAAN_SUBJECT_ROADMAP.map((mod, i) => {
            const isLive = mod.status === 'Live / Ongoing';
            const isCompleted = mod.status === 'Completed';

            return (
              <div
                key={i}
                className={`p-3.5 rounded-xl border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all ${
                  isLive
                    ? 'bg-purple-50 dark:bg-purple-950/60 border-purple-300 dark:border-purple-800 text-purple-950 dark:text-purple-100 font-semibold shadow-sm'
                    : isCompleted
                    ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-500 opacity-80'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-extrabold text-slate-900 dark:text-white text-sm">{mod.subject}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                      isLive ? 'bg-purple-600 text-white' :
                      isCompleted ? 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300' :
                      'bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                    }`}>
                      {mod.status} {mod.progressDefault !== undefined ? `(${mod.progressDefault}%)` : ''}
                    </span>
                  </div>
                  {mod.faculty && (
                    <p className="text-[11px] text-slate-500 mt-0.5">Faculty: {mod.faculty} {mod.timing ? `• ${mod.timing}` : ''}</p>
                  )}
                </div>

                <div className="text-right shrink-0">
                  <span className="font-mono font-bold text-slate-600 dark:text-slate-400">
                    {mod.startDate} to {mod.endDate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PW Nirmaan Daily DPP Logger & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-purple-200 dark:border-purple-900/60 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
              PW Daily DPP Tracker
            </span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <div className="my-3 flex items-baseline justify-between">
            <div>
              <div className="text-3xl font-black text-slate-900 dark:text-white">{dppCount}</div>
              <p className="text-xs text-slate-500 mt-0.5">DPP Questions Solved</p>
            </div>
            <button
              onClick={incrementDpp}
              className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs transition-transform active:scale-95 shadow-md shadow-purple-500/20"
            >
              +1 Solved
            </button>
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2">
            <span>Daily Goal: 15 DPPs</span>
            <button onClick={resetDpp} className="hover:underline text-slate-500">Reset</button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Syllabus Completion</span>
            <Target className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="my-3">
            <div className="text-3xl font-black text-slate-900 dark:text-white">{overallPct}%</div>
            <p className="text-xs text-slate-500 mt-0.5">{doneTopics} of {totalTopics} GATE topics covered</p>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full rounded-full transition-all duration-300" style={{ width: `${overallPct}%` }} />
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl p-5 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-100 uppercase tracking-wider">High-Yield Strategy</span>
            <Award className="w-4 h-4 text-white" />
          </div>
          <div className="my-2">
            <p className="text-xl font-black">28% Total Weightage</p>
            <p className="text-xs text-amber-100 mt-1 leading-snug">
              General Aptitude (15%) + Engineering Maths (13%) form 28% of total GATE score. Start mastering them early in 1st year!
            </p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 text-white self-start">
            First-Year Advantage
          </span>
        </div>
      </div>

      {/* GATE Subjects & Checklists */}
      <div className="space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span>GATE CSE Syllabus & PW Nirmaan Topic Checklists</span>
        </h2>

        {GATE_2029_SYLLABUS.map(subj => {
          const subjDone = subj.topics.filter(t => checkedGate[t.id]).length;
          const subjTotal = subj.topics.length;
          const subjPct = Math.round((subjDone / subjTotal) * 100);

          return (
            <div
              key={subj.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-black text-slate-900 dark:text-white">{subj.name}</h3>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                      Weightage: {subj.weightage}
                    </span>
                  </div>
                  {subj.pwFaculty && (
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold mt-1">
                      👨‍🏫 Faculty: {subj.pwFaculty}
                    </p>
                  )}
                  {subj.collegeCourseLink && (
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
                      🔗 Overlaps with KIIT 1st Year Course: {subj.collegeCourseLink}
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-2 self-start sm:self-center">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{subjPct}% Done</span>
                  <div className="w-16 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-purple-600 h-full rounded-full transition-all duration-300" style={{ width: `${subjPct}%` }} />
                  </div>
                </div>
              </div>

              {/* Topics List */}
              <div className="space-y-2 pt-1">
                {subj.topics.map(topic => {
                  const isChecked = !!checkedGate[topic.id];
                  return (
                    <div
                      key={topic.id}
                      onClick={() => toggleGateTopic(topic.id)}
                      className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-start space-x-3 ${
                        isChecked
                          ? 'bg-purple-50/60 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900 text-slate-800 dark:text-slate-200'
                          : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-purple-600 dark:text-purple-400">
                        {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-400" />}
                      </div>
                      <span className={isChecked ? 'line-through opacity-75' : ''}>{topic.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
