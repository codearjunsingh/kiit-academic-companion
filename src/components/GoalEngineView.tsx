import React from 'react';
import { MACRO_GOALS } from '../data/goalEngine';
import { Target, CheckCircle2, Calendar, Award, Sparkles } from 'lucide-react';

export const GoalEngineView: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-teal-500/30 backdrop-blur-md border border-teal-400/30 px-3 py-1 rounded-full text-xs font-semibold text-teal-200 mb-3">
              <Target className="w-3.5 h-3.5 text-amber-300" />
              <span>Macro Goal Auto-Decomposition Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              AI Goal Engine 🎯
            </h1>
            <p className="text-teal-200 text-sm mt-1 max-w-xl font-medium">
              Don't manually plan daily tasks! Select your high-level targets (GATE AIR &lt;100, CDS IMA, FAANG) and let the system generate your daily action blueprint.
            </p>
          </div>
        </div>
      </div>

      {/* GOAL CARDS */}
      <div className="space-y-4">
        {MACRO_GOALS.map(goal => (
          <div key={goal.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="font-mono text-[10px] font-black px-2.5 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300">
                  {goal.category}
                </span>
                <h2 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                  {goal.title}
                </h2>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-amber-500">{goal.readinessPct}% Readiness</span>
                <p className="text-[10px] text-slate-400 font-bold">Target: {goal.targetDate}</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                ⚡ Auto-Generated Daily Action Blueprint:
              </p>
              <div className="space-y-1.5">
                {goal.dailyActions.map((action, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
