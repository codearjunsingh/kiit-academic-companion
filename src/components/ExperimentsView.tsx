import React, { useState } from 'react';
import { INITIAL_EXPERIMENTS, ExperimentItem } from '../data/learningExperiments';
import { FlaskConical, PlusCircle, Star, Trash2 } from 'lucide-react';

export const ExperimentsView: React.FC = () => {
  const [experiments, setExperiments] = useState<ExperimentItem[]>(() => {
    const saved = localStorage.getItem('kiit_experiments_log');
    return saved ? JSON.parse(saved) : INITIAL_EXPERIMENTS;
  });

  const [method, setMethod] = useState('');
  const [hypothesis, setHypothesis] = useState('');
  const [rating, setRating] = useState(5);
  const [verdict, setVerdict] = useState('');

  const addExperiment = () => {
    if (!method.trim() || !verdict.trim()) return;
    const newItem: ExperimentItem = {
      id: `exp_${Date.now()}`,
      method: method.trim(),
      hypothesis: hypothesis.trim() || 'Testing impact on retention and speed.',
      rating,
      verdict: verdict.trim(),
      dateLogged: new Date().toISOString().split('T')[0]
    };
    const updated = [newItem, ...experiments];
    setExperiments(updated);
    localStorage.setItem('kiit_experiments_log', JSON.stringify(updated));
    setMethod('');
    setHypothesis('');
    setVerdict('');
  };

  const deleteExperiment = (id: string) => {
    const updated = experiments.filter(e => e.id !== id);
    setExperiments(updated);
    localStorage.setItem('kiit_experiments_log', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/30 backdrop-blur-md border border-purple-400/30 px-3 py-1 rounded-full text-xs font-semibold text-purple-200 mb-3">
              <FlaskConical className="w-3.5 h-3.5 text-amber-300" />
              <span>Personal Study Methods & Habit Laboratory</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Learning Experiments Log 🧪
            </h1>
            <p className="text-purple-200 text-sm mt-1 max-w-xl font-medium">
              Discover how YOU learn best! Track study methods (5 AM study, post-gym focus, pomodoro) and record retention ratings over time.
            </p>
          </div>
        </div>
      </div>

      {/* INPUT FORM */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>Log a New Study Experiment</span>
        </h2>

        <div className="space-y-3 text-xs">
          <input
            type="text"
            placeholder="Study Method Tested (e.g. Learning Maths at 5:30 AM)..."
            value={method}
            onChange={e => setMethod(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
          />

          <input
            type="text"
            placeholder="Hypothesis / Goal..."
            value={hypothesis}
            onChange={e => setHypothesis(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <input
              type="text"
              placeholder="Verdict / Observations..."
              value={verdict}
              onChange={e => setVerdict(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
            />

            <button
              onClick={addExperiment}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs transition-colors shrink-0 flex items-center justify-center space-x-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Experiment</span>
            </button>
          </div>
        </div>
      </div>

      {/* EXPERIMENTS LIST */}
      <div className="space-y-3">
        {experiments.map(exp => (
          <div key={exp.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h3 className="text-base font-black text-slate-900 dark:text-white">{exp.method}</h3>
                <span className="text-[10px] text-slate-400 font-mono">({exp.dateLogged})</span>
              </div>

              <button onClick={() => deleteExperiment(exp.id)} className="text-slate-400 hover:text-rose-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300"><strong>Hypothesis:</strong> {exp.hypothesis}</p>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold"><strong>Verdict:</strong> {exp.verdict}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
