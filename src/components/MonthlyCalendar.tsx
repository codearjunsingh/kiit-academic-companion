import React, { useState } from 'react';
import { ACADEMIC_MILESTONES, HOLIDAYS_2026, SUNDAY_FESTIVALS } from '../data/calendar';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Info } from 'lucide-react';

export const MonthlyCalendar: React.FC = () => {
  // Real-time dynamic date initialization
  const todayDate = new Date();
  const todayStr = todayDate.toISOString().split('T')[0];

  const [currentDate, setCurrentDate] = useState<Date>(new Date(todayDate.getFullYear(), todayDate.getMonth(), 1));
  const [selectedDay, setSelectedDay] = useState<string>(todayStr);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const jumpToToday = () => {
    setCurrentDate(new Date(todayDate.getFullYear(), todayDate.getMonth(), 1));
    setSelectedDay(todayStr);
  };

  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const formatDateStr = (y: number, m: number, d: number) => {
    const mm = String(m + 1).padStart(2, '0');
    const dd = String(d).padStart(2, '0');
    return `${y}-${mm}-${dd}`;
  };

  // Only retrieve Exams & Public Holidays
  const getEventsForDate = (dateStr: string) => {
    const events: { title: string; type: 'exam' | 'holiday'; desc?: string }[] = [];

    // Exam Windows
    ACADEMIC_MILESTONES.forEach(m => {
      if (m.type === 'exam') {
        const start = m.startDate;
        const end = m.endDate || m.startDate;
        if (dateStr >= start && dateStr <= end) {
          events.push({
            title: m.title,
            type: 'exam',
            desc: m.description
          });
        }
      }
    });

    // Official Holidays
    HOLIDAYS_2026.forEach(h => {
      const start = h.startDate;
      const end = h.endDate || h.startDate;
      if (dateStr >= start && dateStr <= end) {
        events.push({
          title: h.title,
          type: 'holiday',
          desc: `Official Public Holiday (${h.duration})`
        });
      }
    });

    // Sunday Festivals
    SUNDAY_FESTIVALS.forEach(f => {
      if (f.date === dateStr) {
        events.push({
          title: `${f.name} (Sunday)`,
          type: 'holiday',
          desc: 'Festival falling on Sunday'
        });
      }
    });

    return events;
  };

  const selectedDayEvents = getEventsForDate(selectedDay);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
      {/* Calendar Header with Controls */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
            <CalendarIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white">
              {monthNames[month]} {year}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Exam Windows & Official Public Holidays
            </p>
          </div>
        </div>

        {/* Clean Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={jumpToToday}
            className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-extrabold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Today
          </button>
          <button
            onClick={prevMonth}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
            title="Previous Month"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors"
            title="Next Month"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Clean 2-Color Legend */}
      <div className="flex items-center space-x-6 text-xs font-extrabold">
        <div className="flex items-center space-x-2">
          <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-block shadow-sm" />
          <span className="text-slate-700 dark:text-slate-200">Public Holiday</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3.5 h-3.5 rounded-full bg-red-500 inline-block shadow-sm" />
          <span className="text-slate-700 dark:text-slate-200">Exam Window</span>
        </div>
      </div>

      {/* Grid Days Header */}
      <div className="grid grid-cols-7 gap-1 text-center font-bold text-xs text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      {/* Calendar Days Grid */}
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`blank-${i}`} className="h-14 sm:h-16 rounded-2xl bg-slate-50/40 dark:bg-slate-900/40 opacity-30" />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const dateStr = formatDateStr(year, month, dayNum);
          const isSelected = selectedDay === dateStr;
          const isToday = dateStr === todayStr;
          const events = getEventsForDate(dateStr);

          const hasExam = events.some(e => e.type === 'exam');
          const hasHoliday = events.some(e => e.type === 'holiday');

          return (
            <div
              key={dayNum}
              onClick={() => setSelectedDay(dateStr)}
              className={`h-14 sm:h-16 p-2 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                isSelected
                  ? 'ring-2 ring-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/80 border-indigo-400 font-bold shadow-md'
                  : isToday
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 font-bold'
                  : hasHoliday
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                  : hasExam
                  ? 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800'
                  : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className={`font-mono font-bold ${isToday ? 'text-amber-600 dark:text-amber-400' : 'text-slate-800 dark:text-slate-200'}`}>
                  {dayNum}
                </span>
                {isToday && (
                  <span className="text-[9px] font-black uppercase text-amber-600 dark:text-amber-400 hidden sm:inline">
                    Today
                  </span>
                )}
              </div>

              {/* Minimal Dots for Holiday / Exam */}
              <div className="flex items-center space-x-1.5 mt-1">
                {hasHoliday && <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 shadow-sm" title="Public Holiday" />}
                {hasExam && <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 shadow-sm" title="Exam Window" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Day Inspector */}
      {selectedDayEvents.length > 0 && (
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
          <p className="text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Info className="w-4 h-4 text-indigo-500" />
            <span>Event on <strong>{selectedDay}</strong>:</span>
          </p>
          <div className="space-y-1.5">
            {selectedDayEvents.map((evt, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between gap-3"
              >
                <div className="flex items-center space-x-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${evt.type === 'holiday' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                  <span className="font-extrabold text-slate-900 dark:text-white">{evt.title}</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                  evt.type === 'holiday' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300'
                }`}>
                  {evt.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
