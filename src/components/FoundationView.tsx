import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDATION_TOPICS, FoundationTopic } from '../data/foundation';
import {
  GraduationCap,
  CheckSquare,
  Square,
  Youtube,
  Sparkles,
  Zap,
  ArrowRight,
  Filter,
  AlertCircle
} from 'lucide-react';

export const FoundationView: React.FC = () => {
  const {
    checkedFoundation,
    toggleFoundationTopic,
    explainSimply,
    setActiveView
  } = useApp();

  const [activeLevelFilter, setActiveLevelFilter] = useState<string>('All');
  const [activeSubjectFilter, setActiveSubjectFilter] = useState<string>('All');

  const levels = ['All', 'Class 6-7', 'Class 8-10', 'Class 11', 'Class 12'];
  const subjects = ['All', 'Maths', 'Physics', 'Chemistry'];

  const filteredTopics = FOUNDATION_TOPICS.filter(t => {
    if (activeLevelFilter !== 'All' && t.level !== activeLevelFilter) return false;
    if (activeSubjectFilter !== 'All' && t.subject !== activeSubjectFilter) return false;
    return true;
  });

  const totalCount = FOUNDATION_TOPICS.length;
  const checkedCount = FOUNDATION_TOPICS.filter(t => checkedFoundation[t.id]).length;
  const pct = Math.round((checkedCount / totalCount) * 100);

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <h1 className="text-xl font-black text-slate-900 dark:text-white">
                Class 6–12 PCM Foundation Refresher
              </h1>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Zero-knowledge prerequisite diagnostic & remedial tracker linked directly to your engineering subjects.
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-teal-50 dark:bg-teal-950 p-3 rounded-xl border border-teal-200/60 dark:border-teal-900/60">
            <div>
              <p className="text-[10px] text-teal-700 dark:text-teal-400 font-extrabold uppercase">Foundation Readiness</p>
              <p className="text-xl font-black text-teal-900 dark:text-teal-100">{pct}% Done</p>
            </div>
            <div className="w-20 bg-teal-200 dark:bg-teal-900 h-2.5 rounded-full overflow-hidden">
              <div className="bg-teal-600 h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>

        {/* Guided Learning Path Banner */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/40 dark:to-blue-950/40 border border-indigo-200/70 dark:border-indigo-900/70 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="font-bold text-slate-800 dark:text-slate-200">
              <strong>Start Here Guided Path:</strong> Class 6–7 Basics ➔ Class 8–10 Basics ➔ Class 11 ➔ Class 12 ➔ Engineering!
            </span>
          </div>
          <button
            onClick={() => setActiveLevelFilter('Class 6-7')}
            className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-bold text-[11px] shrink-0 hover:bg-indigo-700 transition-colors"
          >
            Start at Class 6–7
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Level Filter */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-400 mr-1 flex items-center">
              <Filter className="w-3 h-3 mr-0.5" /> Level:
            </span>
            {levels.map(lvl => (
              <button
                key={lvl}
                onClick={() => setActiveLevelFilter(lvl)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeLevelFilter === lvl
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Subject Filter */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-400 mr-1">Subject:</span>
            {subjects.map(subj => (
              <button
                key={subj}
                onClick={() => setActiveSubjectFilter(subj)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeSubjectFilter === subj
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topics List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTopics.map(topic => {
          const isChecked = !!checkedFoundation[topic.id];
          const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(topic.youtubeSearchQuery)}`;

          return (
            <div
              key={topic.id}
              className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                isChecked
                  ? 'bg-teal-50/40 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900 opacity-80'
                  : topic.isCriticalPrerequisite
                  ? 'bg-white dark:bg-slate-900 border-amber-300 dark:border-amber-800/80 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div>
                {/* Header badges */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {topic.level}
                    </span>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {topic.subject}
                    </span>
                    {topic.isCriticalPrerequisite && (
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-red-500" />
                        <span>Critical Prereq</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Checkbox & Title */}
                <div
                  onClick={() => toggleFoundationTopic(topic.id)}
                  className="flex items-start space-x-3 cursor-pointer group"
                >
                  <div className="mt-0.5 text-teal-600 dark:text-teal-400 shrink-0">
                    {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-400 group-hover:text-teal-500" />}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold text-slate-900 dark:text-white leading-snug ${isChecked ? 'line-through opacity-70' : ''}`}>
                      {topic.topic}
                    </h3>

                    {/* Plain English Explanation */}
                    {explainSimply && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800/60 leading-relaxed">
                        {topic.plainExplanation}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer reverse-mapping & YouTube link */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-[11px]">
                  <span>Unlocks:</span>
                  <span className="font-bold text-indigo-600 dark:text-indigo-400">
                    {topic.feedsInto.join(', ')}
                  </span>
                </div>

                <a
                  href={ytUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-[11px] font-bold hover:bg-red-100 transition-colors flex items-center space-x-1 shrink-0"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  <span>Search YT</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
