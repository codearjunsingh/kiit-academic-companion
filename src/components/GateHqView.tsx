import React, { useState } from 'react';
import { GATE_CSE_SYLLABUS, GateSubject } from '../data/gateSyllabus';
import {
  GraduationCap,
  CheckCircle2,
  ExternalLink,
  Flame,
  Award,
  BookOpen,
  Target
} from 'lucide-react';

export const GateHqView: React.FC = () => {
  const [checkedGate, setCheckedGate] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_gate_checked_topics');
    return saved ? JSON.parse(saved) : {};
  });

  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');

  const toggleGateTopic = (id: string) => {
    const updated = { ...checkedGate, [id]: !checkedGate[id] };
    setCheckedGate(updated);
    localStorage.setItem('kiit_gate_checked_topics', JSON.stringify(updated));
  };

  const totalChapters = GATE_CSE_SYLLABUS.reduce((acc, sub) => acc + sub.chapters.length, 0);
  const completedChapters = GATE_CSE_SYLLABUS.reduce(
    (acc, sub) => acc + sub.chapters.filter(ch => checkedGate[ch.id]).length,
    0
  );
  const overallGatePct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

  const filteredSubjects = selectedSubjectId === 'all'
    ? GATE_CSE_SYLLABUS
    : GATE_CSE_SYLLABUS.filter(sub => sub.id === selectedSubjectId);

  return (
    <div className="space-y-6 pb-20">
      {/* HERO BANNER */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-600 flex items-center justify-center font-black text-xl text-white shadow-md">
              GATE
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                  GATE CS & IT Master Syllabus Tracker
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold">
                  Physics Wallah (PW) Structured
                </span>
              </div>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">
                Complete Chapter-by-Chapter Syllabus & PYQ Readiness for GATE Computer Science
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-700/80 shrink-0">
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-xs font-black text-purple-300">Target AIR &lt; 100</span>
          </div>
        </div>

        {/* PROGRESS CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <p className="text-[10px] text-purple-400 font-black uppercase">🎓 GATE CS Readiness</p>
            <p className="text-2xl font-black text-purple-300 mt-0.5">{overallGatePct}%</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center">
            <p className="text-[10px] text-emerald-400 font-black uppercase">✅ Completed Chapters</p>
            <p className="text-2xl font-black text-emerald-400 mt-0.5">{completedChapters} / {totalChapters}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center col-span-2 sm:col-span-1">
            <p className="text-[10px] text-amber-400 font-black uppercase">📚 Total Subjects</p>
            <p className="text-2xl font-black text-amber-300 mt-0.5">{GATE_CSE_SYLLABUS.length} Subjects</p>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-400">PW GATE Computer Science Total Syllabus Completion:</span>
            <span className="text-purple-400">{overallGatePct}%</span>
          </div>
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div className="bg-purple-500 h-full rounded-full transition-all" style={{ width: `${overallGatePct}%` }} />
          </div>
        </div>
      </div>

      {/* SUBJECT FILTER TABS */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedSubjectId('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
            selectedSubjectId === 'all'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
          }`}
        >
          All Subjects ({GATE_CSE_SYLLABUS.length})
        </button>

        {GATE_CSE_SYLLABUS.map(sub => (
          <button
            key={sub.id}
            onClick={() => setSelectedSubjectId(sub.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
              selectedSubjectId === sub.id
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {sub.name}
          </button>
        ))}
      </div>

      {/* SUBJECT & CHAPTER LISTINGS */}
      <div className="space-y-6">
        {filteredSubjects.map(subject => {
          const subDone = subject.chapters.filter(c => checkedGate[c.id]).length;
          const subTotal = subject.chapters.length;
          const subPct = Math.round((subDone / subTotal) * 100);

          return (
            <div key={subject.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-mono font-black px-2.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                    {subject.category}
                  </span>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                    {subject.name}
                  </h2>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400">
                    {subDone} / {subTotal} ({subPct}%)
                  </span>
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(`PW GATE ${subject.name} CSE`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-slate-500 hover:text-purple-600 dark:hover:text-purple-400"
                  >
                    <span>PW Lectures</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* CHAPTER CHECKBOXES GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {subject.chapters.map(ch => {
                  const isDone = !!checkedGate[ch.id];
                  return (
                    <div
                      key={ch.id}
                      onClick={() => toggleGateTopic(ch.id)}
                      className={`p-3.5 rounded-2xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                        isDone
                          ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-300 dark:border-purple-800 text-slate-900 dark:text-white'
                          : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-purple-400'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDone ? 'text-purple-600 fill-purple-600/20' : 'text-slate-400'}`} />
                        <span className="font-bold">{ch.title}</span>
                      </div>

                      <div className="flex items-center space-x-1.5 shrink-0">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {ch.weightage}
                        </span>
                      </div>
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
