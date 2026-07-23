import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ENGINEERING_ELECTIVES, SCIENCE_ELECTIVES, GER_ELECTIVES } from '../data/subjects';
import { Settings, Moon, Sun, Sparkles, Tv, RotateCcw, Check, BookOpen } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const {
    scheme,
    setScheme,
    engineeringElective,
    setEngineeringElective,
    scienceElective,
    setScienceElective,
    gerElective,
    setGerElective,
    mySubscriptions,
    setMySubscriptions,
    darkMode,
    setDarkMode,
    explainSimply,
    setExplainSimply,
    resetProgress
  } = useApp();

  const [channelsInput, setChannelsInput] = useState<string>(mySubscriptions.join('\n'));
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const handleSaveChannels = () => {
    const list = channelsInput
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);
    setMySubscriptions(list);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center space-x-2">
          <Settings className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-xl font-black text-slate-900 dark:text-white">App Settings & Preferences</h1>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Customize your academic scheme, electives, learning preferences, and YouTube channel subscriptions.
        </p>
      </div>

      {/* Scheme A vs Scheme B Toggle */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Academic Scheme</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              KIIT splits the 1st year cohort into Scheme A and Scheme B (swaps Sem 1 and Sem 2 course sets).
            </p>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
            Selected: {scheme}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            onClick={() => setScheme('Scheme A')}
            className={`p-4 rounded-xl border text-left transition-all ${
              scheme === 'Scheme A'
                ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-500 text-indigo-950 dark:text-indigo-100 ring-2 ring-indigo-500/20'
                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <p className="font-extrabold text-sm">Scheme A</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sem 1: Maths, Physics, BEE | Sem 2: Chem, Electronics, Comm</p>
          </button>

          <button
            onClick={() => setScheme('Scheme B')}
            className={`p-4 rounded-xl border text-left transition-all ${
              scheme === 'Scheme B'
                ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-500 text-indigo-950 dark:text-indigo-100 ring-2 ring-indigo-500/20'
                : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <p className="font-extrabold text-sm">Scheme B</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Sem 1: Chem, Electronics, Comm | Sem 2: Maths, Physics, BEE</p>
          </button>
        </div>
      </div>

      {/* Electives Selector */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div>
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">My Selected Electives</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Pick your exact elective courses so only your chosen topics appear on the Subjects page.
          </p>
        </div>

        <div className="space-y-4 text-xs">
          {/* Engineering Elective */}
          <div>
            <label className="font-extrabold text-slate-700 dark:text-slate-300 block mb-1">
              Engineering Elective (Semester 1 • 2 Credits):
            </label>
            <select
              value={engineeringElective}
              onChange={e => setEngineeringElective(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {ENGINEERING_ELECTIVES.map(e => (
                <option key={e.code} value={e.code}>
                  {e.code} — {e.name}
                </option>
              ))}
            </select>
          </div>

          {/* Science Elective */}
          <div>
            <label className="font-extrabold text-slate-700 dark:text-slate-300 block mb-1">
              Science Elective (Semester 2 • 3 Credits):
            </label>
            <select
              value={scienceElective}
              onChange={e => setScienceElective(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {SCIENCE_ELECTIVES.map(e => (
                <option key={e.code} value={e.code}>
                  {e.code} — {e.name}
                </option>
              ))}
            </select>
          </div>

          {/* GER Elective */}
          <div>
            <label className="font-extrabold text-slate-700 dark:text-slate-300 block mb-1">
              GER Elective (Semester 2 • 1 Credit):
            </label>
            <select
              value={gerElective}
              onChange={e => setGerElective(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {GER_ELECTIVES.map(e => (
                <option key={e.code} value={e.code}>
                  {e.code} — {e.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* YouTube Subscriptions Input */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center space-x-2">
          <Tv className="w-5 h-5 text-red-500" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">My Subscribed YouTube Channels</h2>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Paste the names of YouTube channels you already follow (one per line). Overlapping recommendations will show a green priority tag!
        </p>

        <textarea
          rows={4}
          value={channelsInput}
          onChange={e => setChannelsInput(e.target.value)}
          placeholder="CodeWithHarry&#10;Striver / takeUforward&#10;Gate Smashers&#10;StatQuest with Josh Starmer"
          className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex justify-end">
          <button
            onClick={handleSaveChannels}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all flex items-center space-x-1.5"
          >
            {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <Tv className="w-4 h-4" />}
            <span>{savedSuccess ? 'Subscriptions Saved!' : 'Save Subscriptions'}</span>
          </button>
        </div>
      </div>

      {/* Reset Progress */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-red-200 dark:border-red-950 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Reset All Progress</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Clear all saved checkboxes across syllabus, foundation PCM, and skill track.
          </p>
        </div>
        <button
          onClick={() => {
            if (confirm('Are you sure you want to reset all saved checklist progress?')) {
              resetProgress();
              alert('Checklist progress reset successfully.');
            }
          }}
          className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors flex items-center space-x-1.5 self-start sm:self-auto shrink-0"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset Progress</span>
        </button>
      </div>
    </div>
  );
};
