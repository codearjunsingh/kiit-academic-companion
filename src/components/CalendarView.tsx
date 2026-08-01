import React, { useState } from 'react';
import { ACADEMIC_MILESTONES, HOLIDAYS_2026, CalendarEvent } from '../data/calendar';
import { MonthlyCalendar } from './MonthlyCalendar';
import { Calendar as CalendarIcon, Info } from 'lucide-react';

export const CalendarView: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');

  const allEvents: CalendarEvent[] = [
    ...ACADEMIC_MILESTONES,
    ...HOLIDAYS_2026,
  ].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  const filteredEvents = allEvents.filter(e => {
    if (filterType === 'All') return true;
    if (filterType === 'Exams' && e.type === 'exam') return true;
    if (filterType === 'Holidays' && e.type === 'holiday') return true;
    if (filterType === 'Academic' && (e.type === 'academic' || e.type === 'induction')) return true;
    return false;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-xl font-black text-slate-900 dark:text-white">Academic Calendar & Holidays 2026–27</h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Interactive monthly calendar, official semester dates, exam windows, and public holiday list.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center space-x-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          {['All', 'Exams', 'Holidays', 'Academic'].map(f => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filterType === f
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* WORKING MONTHLY CALENDAR COMPONENT */}
      <MonthlyCalendar />

      {/* Note Callout */}
      <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/60 text-xs text-indigo-900 dark:text-indigo-200 space-y-1">
        <p className="font-bold flex items-center gap-1.5">
          <Info className="w-4 h-4 text-indigo-600" />
          <span>Tutor-Mentoring Saturday Note:</span>
        </p>
        <p className="text-slate-600 dark:text-slate-300">
          The 2nd and 4th Saturday of each month are reserved for Tutor-Mentoring activities. Some Saturdays may be designated as working class days by the University.
        </p>
      </div>

      {/* Events Timeline List */}
      <div className="space-y-3">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">All Academic Milestones & Holidays List</h2>
        {filteredEvents.map((evt, idx) => {
          const isExam = evt.type === 'exam';
          const isHoliday = evt.type === 'holiday';

          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isExam
                  ? 'bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-900/60 hover:border-red-300'
                  : isHoliday
                  ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/60 hover:border-emerald-300'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${
                    isExam ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' :
                    isHoliday ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' :
                    'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300'
                  }`}>
                    {evt.type}
                  </span>
                  {evt.duration && (
                    <span className="text-[10px] font-semibold text-slate-500">{evt.duration}</span>
                  )}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">{evt.title}</h3>
                {evt.description && (
                  <p className="text-xs text-slate-500 dark:text-slate-400">{evt.description}</p>
                )}
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {evt.startDate} {evt.endDate ? `to ${evt.endDate}` : ''}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
