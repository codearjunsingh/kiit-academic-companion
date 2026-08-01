import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDATION_ZERO_TOPICS, FoundationZeroTopic } from '../data/foundationZero';
import {
  GraduationCap,
  Lock,
  Unlock,
  CheckSquare,
  Square,
  Star,
  Flame,
  Sparkles,
  Youtube,
  HelpCircle,
  TrendingUp,
  Layers,
  ArrowRight
} from 'lucide-react';

export const FoundationZeroView: React.FC = () => {
  const {
    checkedFoundationZero,
    toggleFoundationZeroTopic,
    confidenceRatings,
    setConfidenceRating,
    foundationStreak,
    incrementFoundationStreak,
    explainSimply
  } = useApp();

  const [activeSubject, setActiveSubject] = useState<'Maths' | 'Physics' | 'Chemistry' | 'English' | 'GK & Reasoning'>('Maths');

  const filteredTopics = FOUNDATION_ZERO_TOPICS.filter(t => t.subject === activeSubject).sort((a, b) => a.order - b.order);

  const totalTopics = FOUNDATION_ZERO_TOPICS.length;
  const completedTopics = FOUNDATION_ZERO_TOPICS.filter(t => checkedFoundationZero[t.id]).length;
  const overallPct = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-teal-500/30 backdrop-blur-md border border-teal-400/30 px-3 py-1 rounded-full text-xs font-semibold text-teal-200 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              <span>Class 6-12 Fundamental Rebuild System • Zero-to-Hero Track</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Class 6 to 12 Mastery Command Center 🎓
            </h1>
            <p className="text-teal-200 text-sm mt-1 max-w-xl font-medium">
              Zero baseline assumed! Step-by-step prerequisite locked progression from Class 6 basics up to 1st year engineering & GATE/CDS readiness.
            </p>
          </div>

          {/* Streak Counter & Overall Progress */}
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center px-2">
              <p className="text-[10px] text-teal-200 uppercase font-extrabold flex items-center justify-center gap-1">
                <Flame className="w-3 h-3 text-amber-400" /> Study Streak
              </p>
              <p className="text-2xl font-black text-amber-300">{foundationStreak} Days</p>
            </div>
            <div className="text-center border-l border-white/10 pl-4">
              <p className="text-[10px] text-teal-200 uppercase font-extrabold">Overall Mastery</p>
              <p className="text-2xl font-black text-white">{overallPct}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* SUBJECT SELECTOR TABS */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {(['Maths', 'Physics', 'Chemistry', 'English', 'GK & Reasoning'] as const).map(subj => {
            const subjTopics = FOUNDATION_ZERO_TOPICS.filter(t => t.subject === subj);
            const subjDone = subjTopics.filter(t => checkedFoundationZero[t.id]).length;
            const subjPct = subjTopics.length > 0 ? Math.round((subjDone / subjTopics.length) * 100) : 0;
            const isActive = activeSubject === subj;

            return (
              <button
                key={subj}
                onClick={() => setActiveSubject(subj)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                  isActive
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <span>{subj}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                  {subjPct}%
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TOPIC LIST WITH PREREQUISITE LOCKING & CONFIDENCE RATINGS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            <span>{activeSubject} Prerequisite Progression Tree</span>
          </h2>
          <span className="text-xs text-slate-500 font-bold">Class 6 → 12 Sequential Unlock</span>
        </div>

        <div className="space-y-3">
          {filteredTopics.map((topic) => {
            const isChecked = !!checkedFoundationZero[topic.id];
            const confidence = confidenceRatings[topic.id] || 0;

            // Check if all prerequisites are fulfilled
            const unfulfilledPrereqs = topic.prerequisites.filter(reqId => !checkedFoundationZero[reqId]);
            const isLocked = unfulfilledPrereqs.length > 0;

            const handleToggle = () => {
              if (isLocked) {
                alert('Unlock Prerequisite First! You must complete prior basic topics before attempting this chapter.');
                return;
              }
              toggleFoundationZeroTopic(topic.id);
              if (!isChecked) {
                incrementFoundationStreak();
              }
            };

            const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(topic.youtubeSearchQuery)}`;

            return (
              <div
                key={topic.id}
                className={`p-5 rounded-2xl border transition-all ${
                  isLocked
                    ? 'bg-slate-100/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 opacity-65'
                    : isChecked
                    ? 'bg-teal-50/60 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm hover:border-teal-300'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start space-x-3.5">
                    <button
                      onClick={handleToggle}
                      className={`mt-1 shrink-0 ${isLocked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                    >
                      {isLocked ? (
                        <Lock className="w-5 h-5 text-slate-400" />
                      ) : isChecked ? (
                        <CheckSquare className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400 hover:text-teal-600" />
                      )}
                    </button>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                          {topic.classLevel}
                        </span>
                        <h3 className={`text-base font-extrabold text-slate-900 dark:text-white ${isChecked ? 'line-through opacity-75' : ''}`}>
                          {topic.title}
                        </h3>
                      </div>

                      {/* Plain Language Analogy (Explain Simply Mode) */}
                      {explainSimply && (
                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed pt-0.5">
                          💡 <strong>Analogy:</strong> {topic.plainAnalogy}
                        </p>
                      )}

                      {/* Prerequisite Notice if Locked */}
                      {isLocked && (
                        <p className="text-[11px] font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 pt-1">
                          <Lock className="w-3 h-3" />
                          <span>Locked! Complete earlier prerequisite basic topics first.</span>
                        </p>
                      )}

                      {/* College Course Feeds */}
                      <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold pt-1">
                        🔗 Unlocks Readiness For: {topic.feedsIntoCollege.join(', ')}
                      </p>
                    </div>
                  </div>

                  {/* Actions & Confidence Rating (1-5 Stars) */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 self-end md:self-center border-t md:border-t-0 border-slate-100 dark:border-slate-800 pt-3 md:pt-0 w-full md:w-auto">
                    {/* 5-Star Confidence Rating */}
                    <div className="flex items-center justify-between sm:justify-start space-x-1 bg-slate-50 dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700">
                      <span className="text-[10px] font-bold text-slate-500 mr-1">Confidence:</span>
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          onClick={() => setConfidenceRating(topic.id, star)}
                          className={`w-4 h-4 cursor-pointer transition-transform hover:scale-125 ${
                            star <= confidence ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'
                          }`}
                        />
                      ))}
                    </div>

                    <a
                      href={searchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-extrabold hover:bg-red-100 transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <Youtube className="w-4 h-4 text-red-500" />
                      <span>Learn Video</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
