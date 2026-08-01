import React, { useState } from 'react';
import { INITIAL_HEALTH_TARGETS, BrainDumpItem, FailureLogItem } from '../data/lifeHealth';
import {
  Heart,
  Activity,
  Flame,
  Lightbulb,
  AlertTriangle,
  PlusCircle,
  CheckCircle,
  Trash2,
  Brain,
  Droplet,
  Moon,
  Footprints,
  Clock
} from 'lucide-react';

export const LifeHealthView: React.FC = () => {
  // Brain Dump Inbox state
  const [brainDumps, setBrainDumps] = useState<BrainDumpItem[]>(() => {
    const saved = localStorage.getItem('kiit_brain_dumps');
    return saved ? JSON.parse(saved) : [
      { id: 'bd_1', timestamp: '2026-08-01', category: 'Idea', text: 'Build an AI-based timetable auto-rescheduler using PyTorch' },
      { id: 'bd_2', timestamp: '2026-08-01', category: 'Goal', text: 'Complete 15 DPP GATE questions on AI prompt engineering before 10 PM' }
    ];
  });

  const [newDumpText, setNewDumpText] = useState('');
  const [newDumpCategory, setNewDumpCategory] = useState<'Idea' | 'Doubt' | 'Goal' | 'Book/Link' | 'Random'>('Idea');

  // Failure Log state
  const [failures, setFailures] = useState<FailureLogItem[]>(() => {
    const saved = localStorage.getItem('kiit_failure_logs');
    return saved ? JSON.parse(saved) : [
      { id: 'fl_1', timestamp: '2026-08-01', topic: 'Matrix Multiplication in C', reason: 'Confused nested loop row-column indexing i and j', actionPlan: 'Re-watch CodeWithHarry C nested loops & solve 3 matrix code problems', resolved: false }
    ];
  });

  const [newTopic, setNewTopic] = useState('');
  const [newReason, setNewReason] = useState('');
  const [newActionPlan, setNewActionPlan] = useState('');

  const addBrainDump = () => {
    if (!newDumpText.trim()) return;
    const item: BrainDumpItem = {
      id: `bd_${Date.now()}`,
      timestamp: new Date().toISOString().split('T')[0],
      category: newDumpCategory,
      text: newDumpText.trim()
    };
    const updated = [item, ...brainDumps];
    setBrainDumps(updated);
    localStorage.setItem('kiit_brain_dumps', JSON.stringify(updated));
    setNewDumpText('');
  };

  const deleteBrainDump = (id: string) => {
    const updated = brainDumps.filter(d => d.id !== id);
    setBrainDumps(updated);
    localStorage.setItem('kiit_brain_dumps', JSON.stringify(updated));
  };

  const addFailureLog = () => {
    if (!newTopic.trim() || !newReason.trim()) return;
    const item: FailureLogItem = {
      id: `fl_${Date.now()}`,
      timestamp: new Date().toISOString().split('T')[0],
      topic: newTopic.trim(),
      reason: newReason.trim(),
      actionPlan: newActionPlan.trim() || 'Review fundamental prerequisites and practice 5 examples.',
      resolved: false
    };
    const updated = [item, ...failures];
    setFailures(updated);
    localStorage.setItem('kiit_failure_logs', JSON.stringify(updated));
    setNewTopic('');
    setNewReason('');
    setNewActionPlan('');
  };

  const toggleFailureResolved = (id: string) => {
    const updated = failures.map(f => f.id === id ? { ...f, resolved: !f.resolved } : f);
    setFailures(updated);
    localStorage.setItem('kiit_failure_logs', JSON.stringify(updated));
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-rose-500/30 backdrop-blur-md border border-rose-400/30 px-3 py-1 rounded-full text-xs font-semibold text-rose-200 mb-3">
              <Heart className="w-3.5 h-3.5 text-rose-300" />
              <span>Personal Life, Health & Mental Control Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Life & Health Command ❤️
            </h1>
            <p className="text-rose-200 text-sm mt-1 max-w-xl font-medium">
              Peak academic performance requires peak health, quick brain dump thought capture, and analyzing study failures to become unstoppable.
            </p>
          </div>
        </div>
      </div>

      {/* HEALTH TARGETS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {INITIAL_HEALTH_TARGETS.map(target => (
          <div key={target.id} className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-slate-400">{target.category}</span>
              {target.id === 'h_sleep' && <Moon className="w-4 h-4 text-indigo-500" />}
              {target.id === 'h_water' && <Droplet className="w-4 h-4 text-blue-500" />}
              {target.id === 'h_run' && <Footprints className="w-4 h-4 text-emerald-500" />}
              {target.id === 'h_meditate' && <Brain className="w-4 h-4 text-purple-500" />}
              {target.id === 'h_focus' && <Clock className="w-4 h-4 text-amber-500" />}
            </div>

            <p className="text-xs font-black text-slate-900 dark:text-white">{target.title}</p>

            <div className="flex items-baseline space-x-1">
              <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">{target.current}</span>
              <span className="text-xs text-slate-400">/ {target.target} {target.unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* BRAIN DUMP INBOX & FAILURE LOG */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* BRAIN DUMP INBOX */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              Brain Dump Inbox (Capture Anything)
            </h2>
          </div>

          {/* Input Box */}
          <div className="space-y-2">
            <textarea
              placeholder="Dump a quick idea, doubt, project thought, or book link here..."
              value={newDumpText}
              onChange={e => setNewDumpText(e.target.value)}
              className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 h-20"
            />
            <div className="flex items-center justify-between">
              <select
                value={newDumpCategory}
                onChange={e => setNewDumpCategory(e.target.value as any)}
                className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-900 dark:text-white"
              >
                <option value="Idea">💡 Idea</option>
                <option value="Doubt">❓ Doubt</option>
                <option value="Goal">🎯 Goal</option>
                <option value="Book/Link">🔗 Book/Link</option>
                <option value="Random">📝 Random</option>
              </select>

              <button
                onClick={addBrainDump}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors flex items-center space-x-1.5"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Save to Inbox</span>
              </button>
            </div>
          </div>

          {/* List */}
          <div className="space-y-2 max-h-64 overflow-y-auto pt-2">
            {brainDumps.map(dump => (
              <div key={dump.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                      {dump.category}
                    </span>
                    <span className="text-[10px] text-slate-400">{dump.timestamp}</span>
                  </div>
                  <p className="text-slate-800 dark:text-slate-200 font-medium mt-1">{dump.text}</p>
                </div>

                <button onClick={() => deleteBrainDump(dump.id)} className="text-slate-400 hover:text-rose-500 transition-colors shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAILURE LOG ENGINE */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
          <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <AlertTriangle className="w-5 h-5 text-rose-500" />
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              Failure Log & Root Cause Analysis
            </h2>
          </div>

          {/* Input Box */}
          <div className="space-y-2 text-xs">
            <input
              type="text"
              placeholder="Topic you struggled with (e.g. Derivatives, Pointers)..."
              value={newTopic}
              onChange={e => setNewTopic(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
            />
            <input
              type="text"
              placeholder="Root Reason (e.g. Didn't know basic algebra)..."
              value={newReason}
              onChange={e => setNewReason(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
            />
            <div className="flex items-center justify-between gap-2">
              <input
                type="text"
                placeholder="Action Plan to fix..."
                value={newActionPlan}
                onChange={e => setNewActionPlan(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium"
              />
              <button
                onClick={addFailureLog}
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-black text-xs transition-colors shrink-0 flex items-center space-x-1"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Log Failure</span>
              </button>
            </div>
          </div>

          {/* List */}
          <div className="space-y-2 max-h-64 overflow-y-auto pt-2">
            {failures.map(fail => (
              <div key={fail.id} className={`p-3.5 rounded-xl border text-xs space-y-1 transition-all ${
                fail.resolved
                  ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/60 opacity-75'
                  : 'bg-rose-50/50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/60'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 dark:text-white">{fail.topic}</span>
                  <button
                    onClick={() => toggleFailureResolved(fail.id)}
                    className={`px-2 py-0.5 rounded text-[10px] font-black ${
                      fail.resolved ? 'bg-emerald-200 text-emerald-900' : 'bg-rose-200 text-rose-900 hover:bg-rose-300'
                    }`}
                  >
                    {fail.resolved ? '✓ Resolved' : 'Mark Resolved'}
                  </button>
                </div>
                <p className="text-slate-600 dark:text-slate-300"><strong>Reason:</strong> {fail.reason}</p>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold"><strong>Action Plan:</strong> {fail.actionPlan}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
