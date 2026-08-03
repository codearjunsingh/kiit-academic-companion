import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  SCHEME_A_SEM1_COURSES,
  SCHEME_A_SEM2_COURSES,
  UPPER_SEMESTER_COURSES,
  Subject
} from '../data/subjects';
import {
  SECTION_A26_TIMETABLE,
  SECTION_B1_TIMETABLE,
  ClassSlot
} from '../data/profile';
import {
  Calendar,
  Clock,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Flame,
  Award,
  Book,
  GraduationCap,
  Layers
} from 'lucide-react';

export const SinglePageMissionControl: React.FC = () => {
  const { scheme, checkedSyllabus, toggleSyllabusTopic, foundationStreak } = useApp();
  const [selectedSem, setSelectedSem] = useState<number>(1);

  const currentDate = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[currentDate.getDay()];

  const activeTimetable: ClassSlot[] = scheme === 'Scheme A' ? SECTION_A26_TIMETABLE : SECTION_B1_TIMETABLE;
  const todayClasses = activeTimetable.filter(slot => slot.day === dayName);

  // Get courses for selected semester
  let currentSemCourses: Subject[] = [];
  if (selectedSem === 1) {
    currentSemCourses = SCHEME_A_SEM1_COURSES;
  } else if (selectedSem === 2) {
    currentSemCourses = SCHEME_A_SEM2_COURSES;
  } else {
    currentSemCourses = UPPER_SEMESTER_COURSES.filter(c => c.semester === selectedSem);
  }

  // Calculate semester completion percentage
  const totalChapters = currentSemCourses.reduce((acc, c) => acc + c.chapters.length, 0);
  const completedChapters = currentSemCourses.reduce(
    (acc, c) => acc + c.chapters.filter(ch => checkedSyllabus[ch.id]).length,
    0
  );
  const semProgressPct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

  return (
    <div className="space-y-6 pb-20">
      {/* KIIT ACADEMIC HERO BANNER */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center font-black text-xl text-slate-950 shadow-md">
              K
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                  KIIT B.Tech CSE-AIML Academic Hub
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
                  {scheme} • Section {scheme === 'Scheme A' ? 'A26' : 'B1'}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-semibold mt-0.5">
                School of Computer Engineering • Campus-8 • Bhubaneswar
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-2xl border border-slate-700/80 shrink-0">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-black text-amber-300">{foundationStreak} Day Study Streak</span>
          </div>
        </div>

        {/* MID-SEM & END-SEM COUNTDOWNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" /> Mid-Sem Examination
              </span>
              <p className="text-2xl font-black text-white">18 Days Left</p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Target: 8+ SGPA
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" /> End-Sem Examination
              </span>
              <p className="text-2xl font-black text-white">79 Days Left</p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-xl bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              Target: 9 CGPA
            </span>
          </div>
        </div>

        {/* SEMESTER PROGRESS BAR */}
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-400">Semester {selectedSem} Syllabus Completion:</span>
            <span className="text-emerald-400">{semProgressPct}%</span>
          </div>
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div className="bg-emerald-500 h-full rounded-full transition-all" style={{ width: `${semProgressPct}%` }} />
          </div>
        </div>
      </div>

      {/* TODAY'S KIIT CLASS SCHEDULE */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              Today's Class Schedule ({dayName} • {scheme} Section {scheme === 'Scheme A' ? 'A26' : 'B1'})
            </h2>
          </div>
          <span className="text-xs font-bold text-slate-500">Room 201 • Campus-8</span>
        </div>

        {todayClasses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {todayClasses.map((c: ClassSlot, i: number) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1.5">
                <div className="flex items-center justify-between font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  <span>{c.time}</span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded text-emerald-800 dark:text-emerald-300 font-bold">{c.room}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">{c.subject}</h3>
                <p className="text-slate-500 text-[11px] font-medium">Type: {c.type}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500 font-medium p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
            🎉 No official lectures scheduled for today! Great day to review syllabus chapters below.
          </p>
        )}
      </div>

      {/* 4-YEAR SEMESTER SYLLABUS HUB (SEM 1 TO SEM 8) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl font-black text-slate-900 dark:text-white">
              B.Tech CSE-AIML 4-Year Curriculum & Syllabi
            </h2>
          </div>

          {/* SEMESTER SELECTOR TABS (SEM 1 TO SEM 8) */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(semNum => (
              <button
                key={semNum}
                onClick={() => setSelectedSem(semNum)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                  selectedSem === semNum
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Sem {semNum}
              </button>
            ))}
          </div>
        </div>

        {/* SUBJECTS & CHAPTERS LIST */}
        <div className="space-y-4">
          {currentSemCourses.length > 0 ? (
            currentSemCourses.map(course => (
              <div key={course.code} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                        {course.code}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        Credits: {course.ltpc.credits} ({course.ltpc.l}-{course.ltpc.t}-{course.ltpc.p})
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white mt-1">
                      {course.name}
                    </h3>
                  </div>

                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(course.youtubeSearchQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-emerald-600 dark:text-emerald-400 hover:underline shrink-0"
                  >
                    <span>YouTube Lectures</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  <strong>Official Textbook:</strong> {course.textbook}
                </p>

                {/* CHAPTERS CHECKLIST */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[11px] font-black uppercase text-slate-400">Modules & Chapters:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {course.chapters.map(ch => {
                      const isDone = !!checkedSyllabus[ch.id];
                      return (
                        <div
                          key={ch.id}
                          onClick={() => toggleSyllabusTopic(ch.id)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                            isDone
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-slate-900 dark:text-white'
                              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-400'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${isDone ? 'text-emerald-500 fill-emerald-500/20' : 'text-slate-400'}`} />
                            <span className="font-bold">{ch.title}</span>
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                            {ch.module}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs text-slate-500 font-medium p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl text-center">
              No specific subjects registered for Semester {selectedSem}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
