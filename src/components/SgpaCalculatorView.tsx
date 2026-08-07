import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  SCHEME_A_SEM1_COURSES,
  SCHEME_A_SEM2_COURSES,
  SCHEME_B_SEM1_COURSES,
  SCHEME_B_SEM2_COURSES,
  Subject
} from '../data/subjects';
import { GRADING_SCALE } from '../data/grading';
import { Calculator, Award, Target, RotateCcw } from 'lucide-react';

export const SgpaCalculatorView: React.FC = () => {
  const { scheme } = useApp();
  const [activeSem, setActiveSem] = useState<1 | 2>(1);

  // Load saved expected grades from localStorage
  const [grades, setGrades] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('kiit_sgpa_grades');
    return saved ? JSON.parse(saved) : {};
  });

  // Target Marks Calculator State
  const [midSemMarks, setMidSemMarks] = useState<number>(16);
  const [internalMarks, setInternalMarks] = useState<number>(25);

  const courses: Subject[] = activeSem === 1
    ? (scheme === 'Scheme A' ? SCHEME_A_SEM1_COURSES : SCHEME_B_SEM1_COURSES)
    : (scheme === 'Scheme A' ? SCHEME_A_SEM2_COURSES : SCHEME_B_SEM2_COURSES);

  const handleGradeChange = (code: string, grade: string) => {
    const next = { ...grades, [code]: grade };
    setGrades(next);
    localStorage.setItem('kiit_sgpa_grades', JSON.stringify(next));
  };

  // Grade point mapping
  const getPoints = (g: string): number => {
    const found = GRADING_SCALE.find(item => item.grade === g);
    return found ? found.points : 0;
  };

  // Calculate SGPA
  let totalCredits = 0;
  let weightedPoints = 0;
  courses.forEach(c => {
    totalCredits += c.ltpc.credits;
    const g = grades[c.code] || 'O';
    weightedPoints += c.ltpc.credits * getPoints(g);
  });

  const sgpa = totalCredits > 0 ? (weightedPoints / totalCredits).toFixed(2) : '0.00';

  // Target marks calculation
  const currentTotal = midSemMarks + internalMarks;
  const neededForO = Math.max(0, 90 - currentTotal);
  const neededForE = Math.max(0, 80 - currentTotal);
  const neededForA = Math.max(0, 70 - currentTotal);

  return (
    <div className="space-y-6 pb-20 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/30 backdrop-blur-md border border-emerald-400/30 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 mb-3">
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official KIIT Credit-Weighted SGPA / CGPA Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              KIIT Grade & Exam Target Calculator 🧮
            </h1>
            <p className="text-emerald-200 text-sm mt-1 max-w-xl font-medium">
              Predict your SGPA, set target grades for every course, and calculate exact End-Sem exam marks required to hit O (90+) or E (80+) grades.
            </p>
          </div>

          <div className="bg-emerald-500/20 border border-emerald-500/40 p-4 rounded-2xl text-center shrink-0">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Estimated SGPA</span>
            <div className="text-3xl font-black text-white mt-1">{sgpa}</div>
            <span className="text-[10px] text-emerald-300 font-semibold">{totalCredits} Total Credits</span>
          </div>
        </div>
      </div>

      {/* Semester Switcher */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveSem(1)}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
              activeSem === 1
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Semester 1 ({scheme})
          </button>
          <button
            onClick={() => setActiveSem(2)}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
              activeSem === 2
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Semester 2 ({scheme})
          </button>
        </div>

        <button
          onClick={() => {
            setGrades({});
            localStorage.removeItem('kiit_sgpa_grades');
          }}
          className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 text-xs font-bold transition-colors flex items-center space-x-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Courses Grade Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-emerald-500" />
          Semester {activeSem} Grade Estimator ({courses.length} Courses)
        </h2>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {courses.map(c => {
            const currentGrade = grades[c.code] || 'O';
            const points = getPoints(currentGrade);
            return (
              <div key={c.code} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {c.code}
                    </span>
                    <span className="text-xs font-extrabold text-slate-900 dark:text-white">{c.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
                    L-T-P-C: {c.ltpc.l}-{c.ltpc.t}-{c.ltpc.p}-{c.ltpc.total} • {c.ltpc.credits} Credits • Type: {c.type}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold text-slate-500">Points: <strong className="text-emerald-600 dark:text-emerald-400">{points * c.ltpc.credits}</strong></span>
                  <select
                    value={currentGrade}
                    onChange={e => handleGradeChange(c.code, e.target.value)}
                    className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-black rounded-xl px-3 py-1.5 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {GRADING_SCALE.map(g => (
                      <option key={g.grade} value={g.grade}>
                        Grade {g.grade} ({g.range}%) - {g.points} pts
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* TARGET END-SEM MARKS CALCULATOR */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Target className="w-5 h-5 text-teal-500" />
          End-Sem Required Marks Calculator (Theory Papers: 100 Marks)
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Enter your Mid-Sem (out of 20) and Internal Assessment (out of 30) scores to see exact marks required out of 50 in End-Sem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300">Mid-Sem Marks (Out of 20)</label>
            <input
              type="number"
              min={0}
              max={20}
              value={midSemMarks}
              onChange={e => setMidSemMarks(Math.min(20, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-extrabold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700 dark:text-slate-300">Internal Assessment Marks (Out of 30)</label>
            <input
              type="number"
              min={0}
              max={30}
              value={internalMarks}
              onChange={e => setInternalMarks(Math.min(30, Math.max(0, parseInt(e.target.value) || 0)))}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs font-extrabold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 mt-4">
          <div className="flex justify-between items-center text-xs font-extrabold">
            <span>Current Secured Total:</span>
            <span className="text-teal-600 dark:text-teal-400 font-mono text-sm">{currentTotal} / 50</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900">
              <span className="font-extrabold text-emerald-800 dark:text-emerald-300">Target O Grade (90+)</span>
              <p className="text-sm font-black text-emerald-900 dark:text-emerald-200 mt-1">
                {neededForO <= 50 ? `${neededForO} / 50 Marks Needed` : 'Impossible (Needed > 50)'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900">
              <span className="font-extrabold text-blue-800 dark:text-blue-300">Target E Grade (80+)</span>
              <p className="text-sm font-black text-blue-900 dark:text-blue-200 mt-1">
                {neededForE <= 50 ? `${neededForE} / 50 Marks Needed` : 'Impossible (Needed > 50)'}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900">
              <span className="font-extrabold text-indigo-800 dark:text-indigo-300">Target A Grade (70+)</span>
              <p className="text-sm font-black text-indigo-900 dark:text-indigo-200 mt-1">
                {neededForA <= 50 ? `${neededForA} / 50 Marks Needed` : 'Achieved!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
