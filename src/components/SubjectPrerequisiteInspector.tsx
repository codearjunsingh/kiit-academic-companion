import React, { useState } from 'react';
import { SUBJECT_PREREQUISITE_MAP, SubjectPrerequisiteData } from '../data/subjectPrerequisites';
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  Layers,
  Lightbulb,
  CheckSquare,
  Square
} from 'lucide-react';

export const SubjectPrerequisiteInspector: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_prereq_inspector_checked');
    return saved ? JSON.parse(saved) : {};
  });

  const activeData: SubjectPrerequisiteData = SUBJECT_PREREQUISITE_MAP[selectedIdx] || SUBJECT_PREREQUISITE_MAP[0];

  const toggleCheck = (id: string) => {
    const updated = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(updated);
    localStorage.setItem('kiit_prereq_inspector_checked', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold text-emerald-300 border border-emerald-500/30 mb-2">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Subject & Chapter Prerequisite Inspector</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              🔍 Prerequisite & Knowledge Inspector
            </h1>
            <p className="text-xs text-slate-400 font-semibold mt-0.5">
              Select any university subject and chapter to inspect Class 6-12 prerequisites, expert study suggestions, and new knowledge topics!
            </p>
          </div>
        </div>

        {/* SUBJECT & CHAPTER SELECTOR TABS */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {SUBJECT_PREREQUISITE_MAP.map((item, idx) => (
            <button
              key={item.subjectCode}
              onClick={() => setSelectedIdx(idx)}
              className={`px-4 py-2 rounded-2xl text-xs font-black whitespace-nowrap transition-all ${
                selectedIdx === idx
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {item.subjectCode}: {item.chapterTitle}
            </button>
          ))}
        </div>
      </div>

      {/* ACTIVE INSPECTOR CARD */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
            {activeData.subjectCode}
          </span>
          <h2 className="text-xl font-black text-slate-900 dark:text-white mt-1">
            {activeData.subjectName}
          </h2>
          <p className="text-xs text-slate-500 font-bold mt-0.5">
            Active Chapter: {activeData.chapterTitle}
          </p>
        </div>

        {/* 1. CLASS 6-12 PREREQUISITES WITH CHECKBOXES */}
        <div className="space-y-3">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Class 6-12 Prerequisites Checklist:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeData.class6to12Prerequisites.map(req => {
              const checked = !!checkedItems[req.id];
              return (
                <div
                  key={req.id}
                  onClick={() => toggleCheck(req.id)}
                  className={`p-3.5 rounded-2xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                    checked
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-slate-900 dark:text-white'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-400'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {checked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                    <span className="font-bold">{req.label}</span>
                  </div>
                  <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0">
                    {req.classLevel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. EXPERT STUDY SUGGESTIONS */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
          <h3 className="text-xs font-black uppercase text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Expert Study Suggestions:</span>
          </h3>
          <ul className="space-y-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 list-disc pl-4">
            {activeData.suggestions.map((sug, sIdx) => (
              <li key={sIdx}>{sug}</li>
            ))}
          </ul>
        </div>

        {/* 3. NEW KNOWLEDGE TOPICS WITH CHECKBOXES */}
        <div className="space-y-3">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>New Knowledge Topics Checklist:</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeData.newKnowledgeTopics.map(kn => {
              const checked = !!checkedItems[kn.id];
              return (
                <div
                  key={kn.id}
                  onClick={() => toggleCheck(kn.id)}
                  className={`p-3.5 rounded-2xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                    checked
                      ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-800 text-slate-900 dark:text-white'
                      : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {checked ? (
                      <CheckSquare className="w-4 h-4 text-indigo-500 shrink-0" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                    <span className="font-bold">{kn.label}</span>
                  </div>
                  <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 shrink-0">
                    {kn.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
