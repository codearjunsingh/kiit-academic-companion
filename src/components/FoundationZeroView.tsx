import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FOUNDATION_ZERO_TOPICS, FoundationTopic } from '../data/foundationZero';
import {
  Layers,
  CheckCircle2,
  ExternalLink,
  Flame,
  Star,
  Youtube
} from 'lucide-react';

export const FoundationZeroView: React.FC = () => {
  const { checkedFoundationZero, toggleFoundationZeroTopic, foundationStreak, setConfidenceRating, confidenceRatings } = useApp();
  const [selectedSubject, setSelectedSubject] = useState<string>('All');
  const [selectedClass, setSelectedClass] = useState<string>('All');

  const subjects = ['All', 'Maths', 'Physics', 'Chemistry', 'English', 'General Knowledge'];
  const classes = ['All', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

  const filteredTopics = FOUNDATION_ZERO_TOPICS.filter(topic => {
    const matchSubject = selectedSubject === 'All' || topic.subject === selectedSubject;
    const matchClass = selectedClass === 'All' || topic.classLevel === selectedClass;
    return matchSubject && matchClass;
  });

  const totalTopics = FOUNDATION_ZERO_TOPICS.length;
  const completedTopics = FOUNDATION_ZERO_TOPICS.filter(t => checkedFoundationZero[t.id]).length;
  const progressPct = Math.round((completedTopics / totalTopics) * 100);

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold text-emerald-300 border border-emerald-500/30 mb-2">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Class 6 to 12 Zero-to-Hero Foundation</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              🎓 Zero-to-Hero Fundamental Checklist
            </h1>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">
              100% Unlocked. Rebuild your Class 6 to 12 fundamentals across Maths, Physics, Chem & English!
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-700/80 shrink-0">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-black text-amber-300">{foundationStreak} Day Active Streak</span>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-400">Class 6-12 Fundamental Mastery:</span>
            <span className="text-emerald-400">{completedTopics} of {totalTopics} ({progressPct}%)</span>
          </div>
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div className="bg-emerald-500 h-full rounded-full transition-all" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>

      {/* FILTER STRIPS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Subject Filter */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
          <span className="text-xs font-black uppercase text-slate-400 pr-1">Subject:</span>
          {subjects.map(s => (
            <button
              key={s}
              onClick={() => setSelectedSubject(s)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedSubject === s
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Class Level Filter */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none w-full sm:w-auto">
          <span className="text-xs font-black uppercase text-slate-400 pr-1">Class:</span>
          {classes.map(c => (
            <button
              key={c}
              onClick={() => setSelectedClass(c)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedClass === c
                  ? 'bg-emerald-500 text-slate-950 font-black shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* TOPICS CHECKLIST */}
      <div className="space-y-3">
        {filteredTopics.map(topic => {
          const isDone = !!checkedFoundationZero[topic.id];
          const rating = confidenceRatings[topic.id] || 3;
          const topicYtUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(topic.classLevel + ' ' + topic.subject + ' ' + topic.title + ' lecture')}`;

          return (
            <div
              key={topic.id}
              className={`p-5 rounded-3xl border transition-all space-y-3 shadow-md ${
                isDone
                  ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div
                    onClick={() => toggleFoundationZeroTopic(topic.id)}
                    className="cursor-pointer"
                  >
                    <CheckCircle2 className={`w-6 h-6 ${isDone ? 'text-emerald-500 fill-emerald-500/20' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {topic.classLevel} • {topic.subject}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                        Feeds into: {topic.kiitSubjectLink}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 mt-1">
                      <h3 className="text-base font-black text-slate-900 dark:text-white">
                        {topic.title}
                      </h3>

                      {/* DEDICATED TOPIC YOUTUBE BUTTON IN FRONT OF TOPIC TITLE */}
                      <a
                        href={topicYtUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs font-black hover:bg-red-200 transition-colors shrink-0"
                        title={`Watch YouTube lecture for ${topic.title}`}
                      >
                        <Youtube className="w-3.5 h-3.5 text-red-500" />
                        <span>▶ Topic YT</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* 5-STAR CONFIDENCE RATING */}
                <div className="flex items-center space-x-1 shrink-0 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] font-black text-slate-400 uppercase mr-1">Confidence:</span>
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => setConfidenceRating(topic.id, star)}
                      className="focus:outline-none"
                    >
                      <Star className={`w-3.5 h-3.5 ${star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* SIMPLE ANALOGY & WHY NEEDED */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-1">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                  <strong className="text-slate-900 dark:text-white">💡 Simple Analogy:</strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">{topic.simpleAnalogy}</p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                  <strong className="text-slate-900 dark:text-white">🎯 Why Needed in College:</strong>
                  <p className="text-slate-600 dark:text-slate-300 mt-0.5">{topic.whyNeeded}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
