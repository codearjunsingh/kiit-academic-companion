import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CDS_SYLLABUS, calculateCdsAttempts, SSB_INTERVIEW_STAGES, OFFICER_LIKE_QUALITIES } from '../data/cds';
import { STUDENT_PROFILE } from '../data/profile';
import {
  Shield,
  Award,
  CheckSquare,
  Square,
  Clock,
  Target,
  BookOpen,
  Calendar,
  Zap,
  Star,
  Users,
  ChevronRight,
  Flame,
  Check,
  X
} from 'lucide-react';

export const CdsView: React.FC = () => {
  const { checkedCds, toggleCdsTopic } = useApp();

  const [inputDob, setInputDob] = useState<string>('2006-11-27');

  const [questionsSolved, setQuestionsSolved] = useState<number>(() => {
    const saved = localStorage.getItem('cds_questions_solved');
    return saved ? parseInt(saved, 10) : 0;
  });

  const incrementQuestions = () => {
    const next = questionsSolved + 5;
    setQuestionsSolved(next);
    localStorage.setItem('cds_questions_solved', next.toString());
  };

  const resetQuestions = () => {
    setQuestionsSolved(0);
    localStorage.setItem('cds_questions_solved', '0');
  };

  const calculatedAttempts = calculateCdsAttempts(inputDob);
  const eligibleImaAttempts = calculatedAttempts.filter(a => a.imaStatus === 'Eligible').length;
  const eligibleOtaAttempts = calculatedAttempts.filter(a => a.otaStatus === 'Eligible').length;

  let totalTopics = 0;
  let doneTopics = 0;
  CDS_SYLLABUS.forEach(paper => {
    paper.topics.forEach(t => {
      totalTopics++;
      if (checkedCds[t.id]) doneTopics++;
    });
  });

  const overallPct = totalTopics > 0 ? Math.round((doneTopics / totalTopics) * 100) : 0;

  // Real-time dynamic CDS II 2029 Countdown (Approx Sept 02, 2029)
  const today = new Date();
  const cdsDate = new Date('2029-09-02');
  const daysToCds = Math.max(0, Math.ceil((cdsDate.getTime() - today.getTime()) / (1000 * 3600 * 24)));

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/30 backdrop-blur-md border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-3">
              <Shield className="w-3.5 h-3.5 text-amber-300" />
              <span>UPSC Combined Defence Services • Precise UPSC Rules Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              UPSC CDS II 2029 Preparation Center 🪖
            </h1>
            <p className="text-emerald-200 text-sm mt-1 max-w-xl font-medium">
              Candidate: <strong>{STUDENT_PROFILE.studentName}</strong> • IMA / OTA Male Candidate Track
            </p>
          </div>

          {/* Countdown & Attempt Badge */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center px-2">
              <p className="text-[10px] text-emerald-200 uppercase font-extrabold">IMA / OTA Attempts</p>
              <p className="text-xl font-black text-amber-300">{eligibleImaAttempts} IMA / {eligibleOtaAttempts} OTA</p>
            </div>
            <div className="text-center border-l border-white/10 pl-4">
              <p className="text-[10px] text-emerald-200 uppercase font-extrabold">Countdown to CDS II 2029</p>
              <p className="text-2xl font-black text-white">{daysToCds} Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* DYNAMIC UPSC ATTEMPT ELIGIBILITY CALCULATOR WIDGET */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              Dynamic UPSC CDS Age Cutoff Calculator (Exact UPSC Notifications)
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <label className="text-xs font-bold text-slate-500">Date of Birth:</label>
            <input
              type="date"
              value={inputDob}
              onChange={e => setInputDob(e.target.value)}
              className="p-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {calculatedAttempts.map((att, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-xl border text-xs space-y-2 transition-all ${
                att.isPrimaryTarget
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-700 ring-2 ring-emerald-500 shadow-sm'
                  : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800'
              }`}
            >
              <div className="flex justify-between items-center font-bold">
                <span className="text-slate-900 dark:text-white text-sm">{att.exam}</span>
                <span className="text-[10px] text-slate-500 font-mono">{att.examDate}</span>
              </div>

              <div className="space-y-1 text-[11px]">
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Age at Entry: <strong>{att.ageAtEntry}</strong> (Commencing {att.courseCommencement})
                </p>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-500">IMA (Max 24):</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black flex items-center gap-1 ${
                    att.imaStatus === 'Eligible'
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                  }`}>
                    {att.imaStatus === 'Eligible' ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                    <span>{att.imaStatus}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">OTA (Max 25):</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black flex items-center gap-1 ${
                    att.otaStatus === 'Eligible'
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                      : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                  }`}>
                    {att.otaStatus === 'Eligible' ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                    <span>{att.otaStatus}</span>
                  </span>
                </div>
              </div>

              {att.isPrimaryTarget && (
                <span className="block text-center mt-1 px-2 py-1 rounded bg-emerald-600 text-white font-black text-[10px]">
                  🎯 PRIMARY TARGET EXAM
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* STATS & DAILY PRACTICE TRACKER */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Daily Practice Counter */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-emerald-200 dark:border-emerald-900/60 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              CDS Question Logger
            </span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <div className="my-3 flex items-baseline justify-between">
            <div>
              <div className="text-3xl font-black text-slate-900 dark:text-white">{questionsSolved}</div>
              <p className="text-xs text-slate-500 mt-0.5">MCQs Solved (English/GK/Maths)</p>
            </div>
            <button
              onClick={incrementQuestions}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs transition-transform active:scale-95 shadow-md shadow-emerald-500/20"
            >
              +5 Solved
            </button>
          </div>
          <div className="flex justify-between items-center text-[11px] text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2">
            <span>Goal: 20 MCQs/day</span>
            <button onClick={resetQuestions} className="hover:underline text-slate-500">Reset</button>
          </div>
        </div>

        {/* Real-time CDS Completion Progress */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">CDS Syllabus Completion</span>
            <Target className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="my-3">
            <div className="text-3xl font-black text-slate-900 dark:text-white">{overallPct}%</div>
            <p className="text-xs text-slate-500 mt-0.5">{doneTopics} of {totalTopics} CDS topics covered</p>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-600 h-full rounded-full transition-all duration-300" style={{ width: `${overallPct}%` }} />
          </div>
        </div>

        {/* Written Exam Cutoff Target */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-5 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-100 uppercase tracking-wider">IMA Written Cutoff</span>
            <Award className="w-4 h-4 text-white" />
          </div>
          <div className="my-2">
            <p className="text-2xl font-black">Target: 140 / 300 Marks</p>
            <p className="text-xs text-emerald-100 mt-1 leading-snug">
              English (65+) + Elementary Maths (45+) + GK (35+) ensures a safe merit position for IMA Allahabad/Bhopal SSB call!
            </p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/20 text-white self-start">
            IMA Entry Strategy
          </span>
        </div>
      </div>

      {/* SYLLABUS CHECKLISTS */}
      <div className="space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <span>UPSC CDS Written Syllabus & Topic Checklists</span>
        </h2>

        {CDS_SYLLABUS.map(paper => {
          const paperDone = paper.topics.filter(t => checkedCds[t.id]).length;
          const paperTotal = paper.topics.length;
          const paperPct = Math.round((paperDone / paperTotal) * 100);

          return (
            <div
              key={paper.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="text-base font-black text-slate-900 dark:text-white">{paper.name}</h3>
                    <span className="text-xs font-extrabold px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {paper.marks} Marks • {paper.duration}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{paper.questionCount} Questions</p>
                </div>

                <div className="flex items-center space-x-2 self-start sm:self-center">
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{paperPct}% Done</span>
                  <div className="w-16 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-600 h-full rounded-full transition-all duration-300" style={{ width: `${paperPct}%` }} />
                  </div>
                </div>
              </div>

              {/* Topics List */}
              <div className="space-y-2 pt-1">
                {paper.topics.map(topic => {
                  const isChecked = !!checkedCds[topic.id];
                  return (
                    <div
                      key={topic.id}
                      onClick={() => toggleCdsTopic(topic.id)}
                      className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-start space-x-3 ${
                        isChecked
                          ? 'bg-emerald-50/60 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-slate-800 dark:text-slate-200'
                          : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400">
                        {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-400" />}
                      </div>
                      <div>
                        <span className={isChecked ? 'line-through opacity-75 font-semibold' : 'font-semibold'}>
                          {topic.title}
                        </span>
                        <span className="text-[10px] text-slate-400 block mt-0.5 font-normal">{topic.category}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* SSB INTERVIEW 5-DAY GUIDE & OFFICER LIKE QUALITIES (OLQs) */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">5-Day SSB Interview Procedure & 15 OLQs Guide</h2>
          </div>
          <span className="text-xs font-bold text-slate-500">Service Selection Board</span>
        </div>

        <div className="space-y-3">
          {SSB_INTERVIEW_STAGES.map((stg, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs space-y-1">
              <div className="flex justify-between items-center font-bold">
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{stg.day}: {stg.stage}</span>
              </div>
              <p className="text-slate-800 dark:text-slate-200 font-semibold">{stg.tasks}</p>
              <p className="text-slate-500 text-[11px]">{stg.elimination}</p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs space-y-2">
          <p className="font-extrabold text-amber-900 dark:text-amber-200 uppercase tracking-wider">The 15 Officer Like Qualities (OLQs) Assessed</p>
          <ul className="space-y-1 text-slate-700 dark:text-slate-300 font-medium">
            {OFFICER_LIKE_QUALITIES.map((olq, i) => (
              <li key={i} className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                <span>{olq}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
