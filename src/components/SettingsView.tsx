import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ENGINEERING_ELECTIVES, SCIENCE_ELECTIVES, GER_ELECTIVES } from '../data/subjects';
import { Settings, Moon, Sun, Sparkles, Tv, RotateCcw, Check, BookOpen, Download, Upload, Shield } from 'lucide-react';

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
  const [backupNotice, setBackupNotice] = useState<string | null>(null);

  const handleSaveChannels = () => {
    const list = channelsInput
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);
    setMySubscriptions(list);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  // Export JSON Backup
  const handleExportBackup = () => {
    const backupData: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('kiit_') || key.startsWith('pw_') || key.startsWith('cds_'))) {
        try {
          backupData[key] = JSON.parse(localStorage.getItem(key) || '""');
        } catch {
          backupData[key] = localStorage.getItem(key);
        }
      }
    }
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kiit_academic_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setBackupNotice('Backup downloaded successfully!');
    setTimeout(() => setBackupNotice(null), 3000);
  };

  // Import JSON Backup
  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const data = JSON.parse(event.target?.result as string);
        Object.keys(data).forEach(key => {
          if (typeof data[key] === 'object') {
            localStorage.setItem(key, JSON.stringify(data[key]));
          } else {
            localStorage.setItem(key, data[key].toString());
          }
        });
        setBackupNotice('Progress restored successfully! Reloading...');
        setTimeout(() => window.location.reload(), 1500);
      } catch (err) {
        alert('Failed to parse backup JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6 pb-20 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center space-x-2">
          <Settings className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-xl font-black text-slate-900 dark:text-white">App Settings & Backup Preferences</h1>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Customize your academic scheme, electives, learning preferences, and backup/restore progress data.
        </p>
      </div>

      {/* JSON BACKUP & RESTORE TOOL */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-900/60 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Backup & Restore Progress (JSON Export/Import)</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Export your college, GATE, and CDS checklist progress so you never lose your data across devices or cache clears!
            </p>
          </div>
        </div>

        {backupNotice && (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold">
            {backupNotice}
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={handleExportBackup}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-xs transition-transform active:scale-95 shadow-md flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Progress Backup (.json)</span>
          </button>

          <label className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-extrabold text-xs transition-colors cursor-pointer flex items-center justify-center space-x-2 border border-slate-200 dark:border-slate-700">
            <Upload className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Restore Progress from Backup</span>
            <input type="file" accept=".json" onChange={handleImportBackup} className="hidden" />
          </label>
        </div>
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
            Clear all saved checkboxes across syllabus, foundation PCM, skill track, GATE & CDS.
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
