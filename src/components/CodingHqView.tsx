import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CODING_TRACKS, CodingTrack } from '../data/codingHq';
import {
  Code,
  Terminal,
  Cpu,
  BrainCircuit,
  CheckSquare,
  Square,
  Sparkles,
  Youtube,
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  PlusCircle,
  FolderGit2
} from 'lucide-react';

export const CodingHqView: React.FC = () => {
  const { checkedSkills, toggleSkillTopic } = useApp();
  const [selectedTrackId, setSelectedTrackId] = useState<string>('track_c');
  const [solvedCount, setSolvedCount] = useState<number>(() => {
    const saved = localStorage.getItem('kiit_coding_solved_count');
    return saved ? parseInt(saved, 10) : 12;
  });

  const incrementSolved = () => {
    const next = solvedCount + 1;
    setSolvedCount(next);
    localStorage.setItem('kiit_coding_solved_count', next.toString());
  };

  const selectedTrack = CODING_TRACKS.find(t => t.id === selectedTrackId) || CODING_TRACKS[0];

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-200 mb-3">
              <Code className="w-3.5 h-3.5 text-cyan-300" />
              <span>CSE-AIML Coding & Software Engineering Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Coding HQ & Developer Stack 💻
            </h1>
            <p className="text-indigo-200 text-sm mt-1 max-w-xl font-medium">
              Master C, C++, Python, Data Structures & Algorithms, AI/ML basics, and Linux/Git workflows from fundamentals to interview readiness.
            </p>
          </div>

          {/* LeetCode / Coding Counter */}
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0 text-center space-y-1">
            <p className="text-[10px] text-cyan-300 font-extrabold uppercase tracking-wider">Problems Solved</p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-3xl font-black text-amber-300">{solvedCount}</span>
              <button
                onClick={incrementSolved}
                className="px-3 py-1 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs transition-transform active:scale-95 shadow-md flex items-center space-x-1"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>+1 Solved</span>
              </button>
            </div>
            <p className="text-[10px] text-indigo-200 font-medium">Goal: 300 Problems (GATE & Placements)</p>
          </div>
        </div>
      </div>

      {/* TRACK SELECTOR TABS */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {CODING_TRACKS.map(track => {
            const isActive = selectedTrackId === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrackId(track.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center space-x-2 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <span>{track.title.split(' ')[0]} {track.title.split(' ')[1]}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                  {track.category}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SELECTED TRACK DETAILS */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                {selectedTrack.category}
              </span>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                Difficulty: {selectedTrack.difficulty}
              </span>
            </div>
            <h2 className="text-xl font-black text-slate-900 dark:text-white mt-1">
              {selectedTrack.title}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {selectedTrack.description}
            </p>
          </div>

          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedTrack.youtubeSearchQuery)}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold transition-colors flex items-center justify-center space-x-2 shrink-0"
          >
            <Youtube className="w-4 h-4" />
            <span>Open Video Tutorial</span>
          </a>
        </div>

        {/* Core Concepts Checklist */}
        <div className="space-y-3">
          <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Core Concepts Checklist</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {selectedTrack.keyConcepts.map((concept, idx) => {
              const conceptId = `track_${selectedTrack.id}_concept_${idx}`;
              const isChecked = !!checkedSkills[conceptId];

              return (
                <div
                  key={idx}
                  onClick={() => toggleSkillTopic(conceptId)}
                  className={`p-3.5 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-start space-x-3 ${
                    isChecked
                      ? 'bg-indigo-50/60 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900 text-slate-800 dark:text-slate-200'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                  }`}
                >
                  <div className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400">
                    {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-400" />}
                  </div>
                  <span className={isChecked ? 'line-through opacity-75 font-semibold' : 'font-semibold'}>
                    {concept}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mini Project Idea & Interview Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
            <h4 className="text-xs font-black text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4 text-amber-600" />
              <span>Recommended Mini Project Idea:</span>
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
              {selectedTrack.miniProjectIdea}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
            <h4 className="text-xs font-black text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>Top Technical Interview Questions:</span>
            </h4>
            <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1 font-medium">
              {selectedTrack.interviewQuestions.map((q, qIdx) => (
                <li key={qIdx}>{q}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
