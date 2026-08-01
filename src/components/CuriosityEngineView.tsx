import React, { useState } from 'react';
import { DAILY_CURIOSITY_CARDS } from '../data/curiosityEngine';
import {
  Sparkles,
  Atom,
  Landmark,
  Cpu,
  Shield,
  Code,
  BookOpen,
  Rocket,
  Brain,
  CheckCircle2,
  Zap
} from 'lucide-react';

export const CuriosityEngineView: React.FC = () => {
  const [solvedPuzzle, setSolvedPuzzle] = useState(false);

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'Science': return Atom;
      case 'History': return Landmark;
      case 'Engineering': return Cpu;
      case 'Military': return Shield;
      case 'Coding Trick': return Code;
      case 'Vocabulary': return BookOpen;
      case 'Current Affairs': return Rocket;
      default: return Brain;
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-amber-500/30 backdrop-blur-md border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold text-amber-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Daily Knowledge Compounder • 10 Minutes a Day</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Daily Curiosity Engine 💡
            </h1>
            <p className="text-amber-200 text-sm mt-1 max-w-xl font-medium">
              8 daily micro-discoveries spanning Science, Military, History, Engineering, Code tricks, Vocab, and Logic Puzzles!
            </p>
          </div>
        </div>
      </div>

      {/* 8 CURIOSITY CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DAILY_CURIOSITY_CARDS.map(card => {
          const IconComponent = getIcon(card.category);
          return (
            <div
              key={card.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-black px-2.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                  {card.category}
                </span>
                <IconComponent className="w-5 h-5 text-amber-500" />
              </div>

              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                {card.insight}
              </p>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase">💡 Key Takeaway / Exam Link:</span>
                <p className="text-slate-800 dark:text-slate-200 font-semibold">{card.takeaway}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
