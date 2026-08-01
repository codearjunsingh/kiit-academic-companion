import React from 'react';
import { HOLIDAYS_2026 } from '../data/calendar';
import { MonthlyCalendar } from './MonthlyCalendar';
import { Clock, Sun } from 'lucide-react';

export const CountdownView: React.FC = () => {
  // Real-time dynamic date calculation
  const todayDate = new Date();

  const getDaysRemaining = (targetDateStr: string) => {
    const target = new Date(targetDateStr);
    const diff = target.getTime() - todayDate.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 3600 * 24)));
  };

  const countdowns = [
    {
      title: 'Autumn Mid-Semester Examination',
      date: '2026-10-07',
      category: 'Exam Window',
      days: getDaysRemaining('2026-10-07'),
      notes: '20 Marks Theory Papers (Oct 07 - Oct 13)',
      gradient: 'from-indigo-600 to-blue-700'
    },
    {
      title: 'Autumn End-Semester Examination',
      date: '2026-12-01',
      category: 'Exam Window',
      days: getDaysRemaining('2026-12-01'),
      notes: '50 Marks Theory + Practical Exams (Dec 01 - Dec 10)',
      gradient: 'from-purple-600 to-indigo-800'
    },
    {
      title: 'Spring Semester Commencement',
      date: '2026-12-14',
      category: 'Academic',
      days: getDaysRemaining('2026-12-14'),
      notes: 'Registration & start of Semester-II',
      gradient: 'from-blue-600 to-teal-700'
    },
    {
      title: 'Summer Vacation 2027 (Post 1st-Year Break)',
      date: '2027-04-22',
      category: 'Vacation',
      days: getDaysRemaining('2027-04-22'),
      notes: '2.5 Months Vacation (April 22 – July 04, 2027)',
      gradient: 'from-amber-500 to-orange-600'
    },
  ];

  const upcomingHolidays = HOLIDAYS_2026.filter(h => new Date(h.startDate) >= todayDate);

  return (
    <div className="space-y-6 pb-20">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-xl font-black text-slate-900 dark:text-white">Live Milestone Countdowns & Calendar</h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Real-time countdowns for Exams, Semester Registrations, and 2.5-month Summer Vacation!
          </p>
        </div>
      </div>

      {/* Main Countdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {countdowns.map((cd, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-3xl bg-gradient-to-br ${cd.gradient} text-white shadow-xl flex flex-col justify-between space-y-4`}
          >
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-white/80">
                <span className="uppercase tracking-wider flex items-center gap-1">
                  {cd.category === 'Vacation' && <Sun className="w-3.5 h-3.5 text-amber-300" />}
                  <span>{cd.category}</span>
                </span>
                <span>{cd.date}</span>
              </div>
              <h2 className="text-xl font-extrabold mt-2 leading-tight">{cd.title}</h2>
              <p className="text-xs text-white/70 mt-1">{cd.notes}</p>
            </div>

            <div className="pt-4 border-t border-white/15 flex items-baseline justify-between">
              <span className="text-4xl font-black tracking-tight">{cd.days}</span>
              <span className="text-sm font-bold text-white/90">Days Remaining</span>
            </div>
          </div>
        ))}
      </div>

      {/* WORKING INTERACTIVE MONTHLY CALENDAR */}
      <MonthlyCalendar />

      {/* Upcoming Holidays Countdowns */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Upcoming Public Holidays</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {upcomingHolidays.map((h, i) => {
            const days = getDaysRemaining(h.startDate);
            return (
              <div key={i} className="p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{h.title}</p>
                  <p className="text-[11px] text-slate-500">{h.startDate} ({h.duration})</p>
                </div>
                <div className="text-right">
                  <span className="font-black text-indigo-600 dark:text-indigo-400 text-base">{days}</span>
                  <span className="text-[10px] text-slate-400 block">days</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
