import React, { useState } from 'react';
import { MATHEMATICS_JOURNEY, CODING_JOURNEY, LearningJourneyStep } from '../data/studyOsCore';
import {
  BookOpen,
  HelpCircle,
  Play,
  CheckCircle2,
  ExternalLink,
  Brain,
  Zap,
  CornerDownRight,
  Sparkles,
  AlertTriangle,
  Award
} from 'lucide-react';

export const LearnUniversalView: React.FC = () => {
  const allSteps: LearningJourneyStep[] = [...MATHEMATICS_JOURNEY, ...CODING_JOURNEY];
  const [selectedStepId, setSelectedStepId] = useState<string>('m_calculus');
  const [isConfused, setIsConfused] = useState<boolean>(false);
  const [isBeginnerMode, setIsBeginnerMode] = useState<boolean>(true);

  const step = allSteps.find(s => s.id === selectedStepId) || allSteps[4];

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-bold text-indigo-200 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>Universal Learning & Root-Cause Teacher</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              📚 Universal Teacher Engine
            </h1>
            <p className="text-indigo-200 text-sm mt-1 max-w-xl font-medium">
              Every topic follows the exact same 7-step layout. Never feel lost, overwhelmed, or confused again.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => setIsBeginnerMode(!isBeginnerMode)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all border flex items-center space-x-1.5 ${
                isBeginnerMode
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md'
                  : 'bg-white/10 text-white border-white/20'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Beginner Mode: {isBeginnerMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* TOPIC SELECTOR TABS */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {allSteps.map(s => (
          <button
            key={s.id}
            onClick={() => {
              setSelectedStepId(s.id);
              setIsConfused(false);
            }}
            className={`px-4 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all ${
              selectedStepId === s.id
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* MAIN TOPIC CARD */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="font-mono text-[10px] font-black px-2.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
              {step.category}
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
              {step.title}
            </h2>

            <div className="flex items-center space-x-4 mt-2 text-xs">
              <div className="flex items-center space-x-1">
                <span className="font-bold text-slate-500">Difficulty:</span>
                <span className="text-amber-500 font-black">{'★'.repeat(step.difficulty)}{'☆'.repeat(5 - step.difficulty)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-slate-500">Your Confidence:</span>
                <span className="text-emerald-500 font-black">{'★'.repeat(step.yourLevel)}{'☆'.repeat(5 - step.yourLevel)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-bold text-slate-500">Estimated Time:</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-black">{step.estimatedTime}</span>
              </div>
            </div>
          </div>

          {/* THE MAGIC "I'M CONFUSED" BUTTON */}
          <button
            onClick={() => setIsConfused(!isConfused)}
            className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs transition-colors flex items-center space-x-2 shadow-md shrink-0"
          >
            <HelpCircle className="w-4 h-4" />
            <span>I'M CONFUSED / I DON'T KNOW THIS</span>
          </button>
        </div>

        {/* ROOT-CAUSE BACKTRACKING REPAIR PATH */}
        {isConfused && (
          <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-xs space-y-3">
            <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400 font-black uppercase">
              <AlertTriangle className="w-4 h-4" />
              <span>Root Cause Diagnosis for {step.title}:</span>
            </div>
            <p className="text-slate-800 dark:text-slate-200 font-semibold">
              Don't worry! You are finding {step.title} difficult because of missing earlier foundations. Let's repair these step-by-step:
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {step.prerequisites.length > 0 ? (
                step.prerequisites.map((pre, pIdx) => (
                  <React.Fragment key={pIdx}>
                    <span className="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black">
                      {pIdx + 1}. Repair: {pre}
                    </span>
                    <CornerDownRight className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  </React.Fragment>
                ))
              ) : (
                <span className="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-black">
                  Start from Class 6 Basic Arithmetic
                </span>
              )}
              <span className="px-3 py-1 rounded-xl bg-emerald-500 text-slate-950 font-black">
                Ready to Learn {step.title}! 🎉
              </span>
            </div>
          </div>
        )}

        {/* 7 GOLDEN STEP LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-indigo-600 dark:text-indigo-400 uppercase">1. Before Learning This (Prerequisites)</h4>
            <div className="space-y-1">
              {step.prerequisites.length > 0 ? step.prerequisites.map((pre, pIdx) => (
                <div key={pIdx} className="flex items-center space-x-2 text-slate-800 dark:text-slate-200 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{pre}</span>
                </div>
              )) : (
                <p className="text-slate-500 font-medium">No prerequisites required! Start directly.</p>
              )}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-red-600 dark:text-red-400 uppercase">2. Best YouTube Video ({step.video.category})</h4>
            <p className="font-bold text-slate-900 dark:text-white">{step.video.teacher}</p>
            <a
              href={step.video.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
            >
              <span>Watch Best Video</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-blue-600 dark:text-blue-400 uppercase">3. Best Book & Exact Pages</h4>
            <p className="font-bold text-slate-900 dark:text-white">{step.book.title}</p>
            <p className="text-slate-600 dark:text-slate-400 font-medium">{step.book.author} • {step.book.pages}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h4 className="font-black text-purple-600 dark:text-purple-400 uppercase">4. Practice Target</h4>
            <p className="font-bold text-slate-900 dark:text-white">{step.practiceCount} Practice Questions</p>
            <p className="text-slate-500 font-medium">Includes KIIT Mid-Sem Tutorial & GATE PYQs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
