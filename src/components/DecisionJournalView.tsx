import React, { useState } from 'react';
import {
  BookOpen,
  PlusCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Trash2,
  Calendar
} from 'lucide-react';

export interface DecisionItem {
  id: string;
  date: string;
  decision: string;
  rationale: string;
  expectedOutcome: string;
  reviewDate: string;
  actualOutcome?: string;
  reviewed: boolean;
}

export const DecisionJournalView: React.FC = () => {
  const [decisions, setDecisions] = useState<DecisionItem[]>(() => {
    const saved = localStorage.getItem('kiit_decision_journal');
    return saved ? JSON.parse(saved) : [
      {
        id: 'dec_1',
        date: '2026-08-01',
        decision: 'Choose CSE-AIML Specialization at KIIT',
        rationale: 'Deep passion for artificial intelligence, neural networks, and future technology trends.',
        expectedOutcome: 'Crack GATE CSE 2029 and build high-impact AI/ML projects during B.Tech.',
        reviewDate: '2027-02-01',
        reviewed: false
      }
    ];
  });

  const [decisionText, setDecisionText] = useState('');
  const [rationaleText, setRationaleText] = useState('');
  const [expectedOutcomeText, setExpectedOutcomeText] = useState('');

  const addDecision = () => {
    if (!decisionText.trim() || !rationaleText.trim()) return;
    const now = new Date();
    const reviewDate = new Date(now.setMonth(now.getMonth() + 6)).toISOString().split('T')[0];

    const newItem: DecisionItem = {
      id: `dec_${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      decision: decisionText.trim(),
      rationale: rationaleText.trim(),
      expectedOutcome: expectedOutcomeText.trim() || 'Review progress and decision quality in 6 months.',
      reviewDate,
      reviewed: false
    };

    const updated = [newItem, ...decisions];
    setDecisions(updated);
    localStorage.setItem('kiit_decision_journal', JSON.stringify(updated));
    setDecisionText('');
    setRationaleText('');
    setExpectedOutcomeText('');
  };

  const deleteDecision = (id: string) => {
    const updated = decisions.filter(d => d.id !== id);
    setDecisions(updated);
    localStorage.setItem('kiit_decision_journal', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>Long-Term Judgment Improvement • 6-Month Feedback Loop</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Decision Journal 📓
            </h1>
            <p className="text-blue-200 text-sm mt-1 max-w-xl font-medium">
              Log important academic, career, and life decisions along with your rationale. Review them after 6 months to calibrate your judgment!
            </p>
          </div>
        </div>
      </div>

      {/* INPUT FORM */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>Log a New Decision</span>
        </h2>

        <div className="space-y-3 text-xs">
          <input
            type="text"
            placeholder="What decision are you making? (e.g., Focus on GATE over campus placements in 2nd year)..."
            value={decisionText}
            onChange={e => setDecisionText(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
          />

          <textarea
            placeholder="Why are you making this decision? What are your assumptions or fears?..."
            value={rationaleText}
            onChange={e => setRationaleText(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium h-20"
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <input
              type="text"
              placeholder="What is your expected outcome?..."
              value={expectedOutcomeText}
              onChange={e => setExpectedOutcomeText(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
            />

            <button
              onClick={addDecision}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-xs transition-colors shrink-0 flex items-center justify-center space-x-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Log Decision</span>
            </button>
          </div>
        </div>
      </div>

      {/* DECISIONS LIST */}
      <div className="space-y-4">
        {decisions.map(dec => (
          <div
            key={dec.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[10px] font-black px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                  Logged: {dec.date}
                </span>
                <span className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Review Due: {dec.reviewDate}
                </span>
              </div>

              <button onClick={() => deleteDecision(dec.id)} className="text-slate-400 hover:text-rose-500 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            <h3 className="text-base font-black text-slate-900 dark:text-white">
              {dec.decision}
            </h3>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
              <p className="text-slate-700 dark:text-slate-300"><strong>Rationale:</strong> {dec.rationale}</p>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold"><strong>Expected Outcome:</strong> {dec.expectedOutcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
