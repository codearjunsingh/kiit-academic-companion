import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { STUDENT_PROFILE, INDUCTION_WEEK_SCHEDULE, SECTION_A26_TIMETABLE } from '../data/profile';
import { BASE_SEM1_COURSES, BASE_SEM2_COURSES, ENGINEERING_ELECTIVES, SCIENCE_ELECTIVES, GER_ELECTIVES, Subject } from '../data/subjects';
import { FOUNDATION_TOPICS } from '../data/foundation';
import { SKILL_TOPICS } from '../data/skills';
import { ACADEMIC_MILESTONES, HOLIDAYS_2026 } from '../data/calendar';
import {
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Youtube,
  Clock,
  MapPin,
  UserCheck,
  ChevronRight,
  TrendingUp,
  Sparkles,
  BookOpen,
  GraduationCap,
  Layers
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    scheme,
    engineeringElective,
    scienceElective,
    gerElective,
    checkedSyllabus,
    toggleSyllabusTopic,
    checkedFoundation,
    toggleFoundationTopic,
    checkedSkills,
    toggleSkillTopic,
    setActiveView
  } = useApp();

  const todayStr = '2026-07-23'; // Fixed baseline for student context
  const todayDate = new Date(todayStr);

  const [selectedTimetableDay, setSelectedTimetableDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'>('Monday');

  // Check if Induction timeline should be visible (before 30 July 2026)
  const isInductionActive = new Date('2026-07-30') > todayDate;

  // Resolve current semester courses based on scheme
  let currentCoursesBase = scheme === 'Scheme A' ? BASE_SEM1_COURSES : BASE_SEM2_COURSES;
  
  // Inject chosen electives into course list
  const currentCourses: Subject[] = currentCoursesBase.map(course => {
    if (course.isElective) {
      if (course.electiveCategory === 'Engineering') {
        const found = ENGINEERING_ELECTIVES.find(e => e.code === engineeringElective);
        if (found) return { ...course, code: found.code, name: found.name, textbook: found.textbook, chapters: found.chapters };
      }
      if (course.electiveCategory === 'Science') {
        const found = SCIENCE_ELECTIVES.find(e => e.code === scienceElective);
        if (found) return { ...course, code: found.code, name: found.name, textbook: found.textbook, chapters: found.chapters };
      }
      if (course.electiveCategory === 'GER') {
        const found = GER_ELECTIVES.find(e => e.code === gerElective);
        if (found) return { ...course, code: found.code, name: found.name, chapters: found.chapters };
      }
    }
    return course;
  });

  // Calculate Overall Syllabus Stats
  let totalSyllabusChapters = 0;
  let completedSyllabusChapters = 0;
  const courseCompletionMap: Record<string, number> = {};

  currentCourses.forEach(course => {
    let courseTotal = course.chapters.length;
    let courseDone = 0;
    course.chapters.forEach(ch => {
      totalSyllabusChapters++;
      if (checkedSyllabus[ch.id]) {
        completedSyllabusChapters++;
        courseDone++;
      }
    });
    courseCompletionMap[course.code] = courseTotal > 0 ? Math.round((courseDone / courseTotal) * 100) : 0;
  });

  const overallSyllabusPct = totalSyllabusChapters > 0
    ? Math.round((completedSyllabusChapters / totalSyllabusChapters) * 100)
    : 0;

  // Calculate Prerequisite Readiness (% of foundation checked by subject)
  const mathFoundations = FOUNDATION_TOPICS.filter(f => f.subject === 'Maths');
  const physFoundations = FOUNDATION_TOPICS.filter(f => f.subject === 'Physics');
  const chemFoundations = FOUNDATION_TOPICS.filter(f => f.subject === 'Chemistry');

  const mathPct = Math.round((mathFoundations.filter(f => checkedFoundation[f.id]).length / mathFoundations.length) * 100);
  const physPct = Math.round((physFoundations.filter(f => checkedFoundation[f.id]).length / physFoundations.length) * 100);
  const chemPct = Math.round((chemFoundations.filter(f => checkedFoundation[f.id]).length / chemFoundations.length) * 100);
  const overallFoundationPct = Math.round((FOUNDATION_TOPICS.filter(f => checkedFoundation[f.id]).length / FOUNDATION_TOPICS.length) * 100);

  // Skill Track Progress
  const overallSkillPct = Math.round((SKILL_TOPICS.filter(s => checkedSkills[s.id]).length / SKILL_TOPICS.length) * 100);

  // -------------------------------------------------------------
  // "WHAT SHOULD I STUDY TODAY?" ENGINE LOGIC
  // -------------------------------------------------------------
  const nextMidSem = ACADEMIC_MILESTONES.find(m => m.title.includes('Mid-Semester Examination'));
  let daysToMidSem = 999;
  if (nextMidSem) {
    const diff = new Date(nextMidSem.startDate).getTime() - todayDate.getTime();
    daysToMidSem = Math.ceil(diff / (1000 * 3600 * 24));
  }

  interface Recommendation {
    id: string;
    title: string;
    reason: string;
    type: 'syllabus' | 'foundation' | 'skill';
    youtubeQuery: string;
    toggleId: string;
    isChecked: boolean;
  }

  const recommendations: Recommendation[] = [];

  if (daysToMidSem <= 14 && daysToMidSem > 0) {
    const sortedCourses = [...currentCourses].sort((a, b) => (courseCompletionMap[a.code] || 0) - (courseCompletionMap[b.code] || 0));
    for (const course of sortedCourses) {
      const unchecked = course.chapters.find(ch => !checkedSyllabus[ch.id]);
      if (unchecked) {
        recommendations.push({
          id: unchecked.id,
          title: `${course.code}: ${unchecked.title}`,
          reason: `Mid-Sem in ${daysToMidSem} days • Subject is only ${courseCompletionMap[course.code]}% done`,
          type: 'syllabus',
          youtubeQuery: `${course.code} ${unchecked.title} KIIT engineering lecture`,
          toggleId: unchecked.id,
          isChecked: false
        });
        if (recommendations.length >= 2) break;
      }
    }
  }

  const uncheckedCritical = FOUNDATION_TOPICS.filter(f => f.isCriticalPrerequisite && !checkedFoundation[f.id]);
  uncheckedCritical.forEach(f => {
    const activeFeeds = f.feedsInto.filter(code => currentCourses.some(c => c.code === code));
    if (activeFeeds.length > 0 && recommendations.length < 3) {
      recommendations.push({
        id: f.id,
        title: `Prerequisite: ${f.topic}`,
        reason: `Critical gap blocking ${activeFeeds.join(', ')}`,
        type: 'foundation',
        youtubeQuery: f.youtubeSearchQuery,
        toggleId: f.id,
        isChecked: false
      });
    }
  });

  if (recommendations.length < 4) {
    const nextSkill = SKILL_TOPICS.find(s => !checkedSkills[s.id]);
    if (nextSkill) {
      recommendations.push({
        id: nextSkill.id,
        title: `Skill Track: ${nextSkill.topic}`,
        reason: `Self-paced career preparation (${nextSkill.category})`,
        type: 'skill',
        youtubeQuery: nextSkill.youtubeSearchQuery,
        toggleId: nextSkill.id,
        isChecked: false
      });
    }
  }

  if (recommendations.length === 0) {
    const nextCourseChapter = currentCourses.flatMap(c => c.chapters).find(ch => !checkedSyllabus[ch.id]);
    if (nextCourseChapter) {
      recommendations.push({
        id: nextCourseChapter.id,
        title: nextCourseChapter.title,
        reason: 'Regular curriculum steady progress',
        type: 'syllabus',
        youtubeQuery: `${nextCourseChapter.title} engineering lecture`,
        toggleId: nextCourseChapter.id,
        isChecked: false
      });
    }
  }

  const getDaysRemaining = (targetDateStr: string) => {
    const target = new Date(targetDateStr);
    const diff = target.getTime() - todayDate.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  };

  const nextHoliday = HOLIDAYS_2026.find(h => new Date(h.startDate) >= todayDate);

  const timetableForDay = SECTION_A26_TIMETABLE.filter(t => t.day === selectedTimetableDay);

  return (
    <div className="space-y-6 pb-20">
      {/* Header Greeting */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>School of Engineering • Admitted Batch 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, KIITian! 👋
            </h1>
            <p className="text-indigo-200 text-sm mt-1 max-w-xl">
              Here is your daily academic overview. Everything is personalized to your section, mentors, class timetable, and live syllabus progress.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
            <div className="text-center px-3 border-r border-white/10">
              <p className="text-[10px] text-indigo-200 uppercase font-extrabold">Scheme</p>
              <p className="text-lg font-black text-white">{scheme}</p>
            </div>
            <div className="text-center px-3">
              <p className="text-[10px] text-indigo-200 uppercase font-extrabold">Section</p>
              <p className="text-lg font-black text-amber-300">{STUDENT_PROFILE.section}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Core Engine, Timetable & Induction */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* CORE ENGINE WIDGET: "What should I study today?" */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">What should I study today?</h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Ranked by exam urgency, prerequisite gaps & career track</p>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-md">
                Smart Ranked
              </span>
            </div>

            <div className="space-y-3">
              {recommendations.map((rec, idx) => {
                const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(rec.youtubeQuery)}`;
                const handleToggle = () => {
                  if (rec.type === 'syllabus') toggleSyllabusTopic(rec.toggleId);
                  if (rec.type === 'foundation') toggleFoundationTopic(rec.toggleId);
                  if (rec.type === 'skill') toggleSkillTopic(rec.toggleId);
                };

                return (
                  <div
                    key={rec.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all gap-3"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-extrabold text-xs flex items-center justify-center mt-0.5 shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                          {rec.title}
                        </h3>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5 flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>{rec.reason}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 self-end sm:self-center shrink-0">
                      <a
                        href={searchUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 text-xs font-bold hover:bg-red-100 dark:hover:bg-red-900/80 transition-colors flex items-center space-x-1.5"
                      >
                        <Youtube className="w-3.5 h-3.5 text-red-500" />
                        <span>Watch Video</span>
                      </a>
                      <button
                        onClick={handleToggle}
                        className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors flex items-center space-x-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Mark Done</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* OFFICIAL CLASS TIMETABLE WIDGET */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Section {STUDENT_PROFILE.section} Class Timetable</h2>
              </div>
              
              {/* Day selector tabs */}
              <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                {(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const).map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedTimetableDay(day)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      selectedTimetableDay === day
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              {timetableForDay.map((slot, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded">
                      {slot.time}
                    </span>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{slot.subject}</p>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" /> {slot.room}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                    slot.type === 'Lab'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                  }`}>
                    {slot.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Induction Week Timeline (Only visible before July 30, 2026) */}
          {isInductionActive && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-amber-200 dark:border-amber-900/50 bg-amber-50/30 dark:bg-amber-950/10 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">Your Induction Week (Group 2 / Gr-2.1)</h2>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full">
                  Live Schedule
                </span>
              </div>

              <div className="space-y-2.5">
                {INDUCTION_WEEK_SCHEDULE.map(item => {
                  const isToday = item.date === todayStr;
                  return (
                    <div
                      key={item.date}
                      className={`p-3 rounded-xl border text-xs transition-all ${
                        isToday
                          ? 'bg-amber-100/80 dark:bg-amber-950/60 border-amber-400 dark:border-amber-700 text-amber-950 dark:text-amber-100 font-semibold shadow-sm'
                          : 'bg-white/60 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-bold ${isToday ? 'text-amber-900 dark:text-amber-300' : 'text-slate-500 dark:text-slate-400'}`}>
                          {item.dayLabel} {isToday && '• TODAY'}
                        </span>
                        {item.room && (
                          <span className="inline-flex items-center gap-1 font-bold text-amber-700 dark:text-amber-400">
                            <MapPin className="w-3 h-3" /> {item.room}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 font-medium">{item.activity}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quick Progress Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Syllabus Progress</span>
                <BookOpen className="w-4 h-4 text-indigo-500" />
              </div>
              <div className="my-3">
                <div className="text-3xl font-black text-slate-900 dark:text-white">{overallSyllabusPct}%</div>
                <p className="text-xs text-slate-500 mt-0.5">{completedSyllabusChapters} of {totalSyllabusChapters} chapters done</p>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: `${overallSyllabusPct}%` }} />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">PCM Readiness</span>
                <GraduationCap className="w-4 h-4 text-teal-500" />
              </div>
              <div className="my-2 space-y-1.5">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-600 dark:text-slate-400">Maths ({mathPct}%)</span>
                  <span className="text-slate-600 dark:text-slate-400">Physics ({physPct}%)</span>
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">{overallFoundationPct}%</div>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-full rounded-full transition-all duration-500" style={{ width: `${overallFoundationPct}%` }} />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Skill Track</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>
              <div className="my-3">
                <div className="text-3xl font-black text-slate-900 dark:text-white">{overallSkillPct}%</div>
                <p className="text-xs text-slate-500 mt-0.5">C++, Python & AIML prep</p>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${overallSkillPct}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile & Countdown Cards */}
        <div className="space-y-6">
          
          {/* MY PROFILE CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base font-bold text-slate-900 dark:text-white">My Official Profile</h2>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                CSE-AIML
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] text-slate-400 font-extrabold uppercase">Section</p>
                <p className="font-extrabold text-slate-900 dark:text-white mt-0.5">{STUDENT_PROFILE.section}</p>
                <p className="text-[10px] text-slate-500">{STUDENT_PROFILE.subGroup}</p>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] text-slate-400 font-extrabold uppercase">Hostel</p>
                <p className="font-extrabold text-slate-900 dark:text-white mt-0.5">{STUDENT_PROFILE.hostel}</p>
                <p className="text-[10px] text-slate-500">Room {STUDENT_PROFILE.room}</p>
              </div>
            </div>

            {/* Class Room Location */}
            <div className="p-2.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900 text-xs">
              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-extrabold uppercase">Primary Theory Classroom</p>
              <p className="font-extrabold text-slate-900 dark:text-white mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" /> {STUDENT_PROFILE.classRoom}
              </p>
            </div>

            {/* Mentors Contact */}
            <div className="space-y-3 pt-1">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Assigned Tutor Mentors</p>
              
              <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs">
                <p className="font-bold text-slate-900 dark:text-white">{STUDENT_PROFILE.mentor1.name}</p>
                <p className="text-[11px] text-slate-500">{STUDENT_PROFILE.mentor1.dept}</p>
                <div className="flex items-center space-x-3 mt-2">
                  <a
                    href={`tel:${STUDENT_PROFILE.mentor1.phone}`}
                    className="inline-flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{STUDENT_PROFILE.mentor1.phone}</span>
                  </a>
                  <a
                    href={`mailto:${STUDENT_PROFILE.mentor1.email}`}
                    className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Email</span>
                  </a>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 text-xs">
                <p className="font-bold text-slate-900 dark:text-white">{STUDENT_PROFILE.mentor2.name}</p>
                <p className="text-[11px] text-slate-500">{STUDENT_PROFILE.mentor2.dept}</p>
                <div className="flex items-center space-x-3 mt-2">
                  <a
                    href={`tel:${STUDENT_PROFILE.mentor2.phone}`}
                    className="inline-flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{STUDENT_PROFILE.mentor2.phone}</span>
                  </a>
                  <a
                    href={`mailto:${STUDENT_PROFILE.mentor2.email}`}
                    className="inline-flex items-center space-x-1 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COUNTDOWN CARDS */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base font-bold text-slate-900 dark:text-white">Milestone Countdowns</h2>
              </div>
              <button
                onClick={() => setActiveView('countdown')}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center"
              >
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md">
                <p className="text-[11px] font-bold text-indigo-100 uppercase tracking-wider">Next Mid-Sem Exam</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-black">{getDaysRemaining('2026-10-07')} Days</span>
                  <span className="text-xs font-bold text-indigo-200">Starts Oct 07, 2026</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 border border-slate-800">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Next End-Sem Exam</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-black">{getDaysRemaining('2026-12-01')} Days</span>
                  <span className="text-xs font-semibold text-slate-400">Starts Dec 01, 2026</span>
                </div>
              </div>

              {nextHoliday && (
                <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-100">
                  <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    Next Holiday • {nextHoliday.title}
                  </p>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-xl font-black">{getDaysRemaining(nextHoliday.startDate)} Days</span>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">{nextHoliday.startDate}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
