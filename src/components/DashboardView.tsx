import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { STUDENT_PROFILE, INDUCTION_WEEK_SCHEDULE, SECTION_A26_TIMETABLE, SECTION_B1_TIMETABLE } from '../data/profile';
import { BASE_SEM1_COURSES, BASE_SEM2_COURSES, SCHEME_B_SEM1_COURSES, SCHEME_B_SEM2_COURSES, ENGINEERING_ELECTIVES, SCIENCE_ELECTIVES, GER_ELECTIVES, Subject } from '../data/subjects';
import { FOUNDATION_TOPICS } from '../data/foundation';
import { SKILL_TOPICS } from '../data/skills';
import { GATE_2029_SYLLABUS } from '../data/gate';
import { CDS_SYLLABUS, CDS_ELIGIBILITY_INFO } from '../data/cds';
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
  Target,
  Shield,
  Flame,
  Layers
} from 'lucide-react';

export const DashboardView: React.FC = () => {
  const {
    scheme,
    setScheme,
    engineeringElective,
    scienceElective,
    gerElective,
    checkedSyllabus,
    toggleSyllabusTopic,
    checkedFoundation,
    toggleFoundationTopic,
    checkedSkills,
    toggleSkillTopic,
    checkedGate,
    toggleGateTopic,
    checkedCds,
    toggleCdsTopic,
    setActiveView
  } = useApp();

  const todayDate = new Date();
  const todayStr = todayDate.toISOString().split('T')[0];

  const dayOfWeekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;
  const currentDayName = dayOfWeekNames[todayDate.getDay()];
  
  const initialSelectedDay = (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const).includes(currentDayName as any)
    ? (currentDayName as 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday')
    : 'Monday';

  const [selectedTimetableDay, setSelectedTimetableDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'>(initialSelectedDay);

  const isInductionActive = new Date('2026-07-30') > todayDate;

  let currentCoursesBase: Subject[] = [];
  if (scheme === 'Scheme A') {
    currentCoursesBase = BASE_SEM1_COURSES;
  } else {
    currentCoursesBase = SCHEME_B_SEM1_COURSES;
  }
  
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

  // Reactive Real-Time Syllabus Progress Calculation
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

  // Reactive Real-Time PCM Foundation Progress
  const mathFoundations = FOUNDATION_TOPICS.filter(f => f.subject === 'Maths');
  const physFoundations = FOUNDATION_TOPICS.filter(f => f.subject === 'Physics');
  const chemFoundations = FOUNDATION_TOPICS.filter(f => f.subject === 'Chemistry');

  const mathPct = mathFoundations.length > 0 ? Math.round((mathFoundations.filter(f => checkedFoundation[f.id]).length / mathFoundations.length) * 100) : 0;
  const physPct = physFoundations.length > 0 ? Math.round((physFoundations.filter(f => checkedFoundation[f.id]).length / physFoundations.length) * 100) : 0;
  const chemPct = chemFoundations.length > 0 ? Math.round((chemFoundations.filter(f => checkedFoundation[f.id]).length / chemFoundations.length) * 100) : 0;
  const overallFoundationPct = FOUNDATION_TOPICS.length > 0 ? Math.round((FOUNDATION_TOPICS.filter(f => checkedFoundation[f.id]).length / FOUNDATION_TOPICS.length) * 100) : 0;

  // Reactive Real-Time Skill Track Progress
  const overallSkillPct = SKILL_TOPICS.length > 0 ? Math.round((SKILL_TOPICS.filter(s => checkedSkills[s.id]).length / SKILL_TOPICS.length) * 100) : 0;

  // Reactive Real-Time GATE Progress
  let totalGateTopics = 0;
  let doneGateTopics = 0;
  GATE_2029_SYLLABUS.forEach(s => {
    s.topics.forEach(t => {
      totalGateTopics++;
      if (checkedGate[t.id]) doneGateTopics++;
    });
  });
  const gatePct = totalGateTopics > 0 ? Math.round((doneGateTopics / totalGateTopics) * 100) : 0;

  // Reactive Real-Time CDS Progress
  let totalCdsTopics = 0;
  let doneCdsTopics = 0;
  CDS_SYLLABUS.forEach(s => {
    s.topics.forEach(t => {
      totalCdsTopics++;
      if (checkedCds[t.id]) doneCdsTopics++;
    });
  });
  const cdsPct = totalCdsTopics > 0 ? Math.round((doneCdsTopics / totalCdsTopics) * 100) : 0;

  const nextMidSem = ACADEMIC_MILESTONES.find(m => m.title.includes('Mid-Semester Examination'));
  let daysToMidSem = 999;
  if (nextMidSem) {
    const diff = new Date(nextMidSem.startDate).getTime() - todayDate.getTime();
    daysToMidSem = Math.max(0, Math.ceil(diff / (1000 * 3600 * 24)));
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

  if (daysToMidSem <= 30 && daysToMidSem > 0) {
    const sortedCourses = [...currentCourses].sort((a, b) => (courseCompletionMap[a.code] || 0) - (courseCompletionMap[b.code] || 0));
    for (const course of sortedCourses) {
      const unchecked = course.chapters.find(ch => !checkedSyllabus[ch.id]);
      if (unchecked) {
        recommendations.push({
          id: unchecked.id,
          title: `${course.code}: ${unchecked.title}`,
          reason: `Mid-Sem in ${daysToMidSem} days • Subject is ${courseCompletionMap[course.code]}% done`,
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
    return Math.max(0, Math.ceil(diff / (1000 * 3600 * 24)));
  };

  const nextHoliday = HOLIDAYS_2026.find(h => new Date(h.startDate) >= todayDate);

  const activeTimetableSource = scheme === 'Scheme A' ? SECTION_A26_TIMETABLE : SECTION_B1_TIMETABLE;
  const timetableForDay = activeTimetableSource.filter(t => t.day === selectedTimetableDay);

  return (
    <div className="space-y-6 pb-20">
      {/* Header Greeting */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-200 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>School of Engineering • Admitted Batch 2026 • GATE & CDS Aspirant</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome back, {STUDENT_PROFILE.studentName}! 👋
            </h1>
            <p className="text-indigo-200 text-sm mt-1 max-w-xl font-medium">
              Roll No: <strong>{STUDENT_PROFILE.rollNo}</strong> • Section <strong>{STUDENT_PROFILE.section}</strong> • DOB: 27/11/2006
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/10">
            <button
              onClick={() => setScheme(scheme === 'Scheme A' ? 'Scheme B' : 'Scheme A')}
              className="text-center px-3 border-r border-white/10 hover:bg-white/10 py-1 rounded-xl transition-colors"
              title="Click to toggle Scheme A / Scheme B"
            >
              <p className="text-[10px] text-indigo-200 uppercase font-extrabold flex items-center gap-1">
                <Layers className="w-3 h-3 text-amber-300" /> Scheme
              </p>
              <p className="text-lg font-black text-white">{scheme}</p>
            </button>
            <div className="text-center px-3">
              <p className="text-[10px] text-indigo-200 uppercase font-extrabold">Section</p>
              <p className="text-lg font-black text-amber-300">{scheme === 'Scheme A' ? STUDENT_PROFILE.section : 'B1'}</p>
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
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Section {scheme === 'Scheme A' ? STUDENT_PROFILE.section : 'B1'} Class Timetable ({scheme})
                </h2>
              </div>
              
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

          {/* Quick Progress Cards Grid (5 Trackers) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Syllabus</span>
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              </div>
              <div className="my-1.5">
                <div className="text-xl font-black text-slate-900 dark:text-white">{overallSyllabusPct}%</div>
                <p className="text-[10px] text-slate-500">{completedSyllabusChapters}/{totalSyllabusChapters} done</p>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-600 h-full rounded-full transition-all duration-300" style={{ width: `${overallSyllabusPct}%` }} />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">CDS 2029</span>
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
              </div>
              <div className="my-1.5">
                <div className="text-xl font-black text-slate-900 dark:text-white">{cdsPct}%</div>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">{CDS_ELIGIBILITY_INFO.totalAttemptsCount} Attempts</p>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full rounded-full transition-all duration-300" style={{ width: `${cdsPct}%` }} />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-purple-200 dark:border-purple-900/60 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">GATE 2029</span>
                <Target className="w-3.5 h-3.5 text-purple-500" />
              </div>
              <div className="my-1.5">
                <div className="text-xl font-black text-slate-900 dark:text-white">{gatePct}%</div>
                <p className="text-[10px] text-purple-600 dark:text-purple-400 font-bold">PW Nirmaan</p>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full rounded-full transition-all duration-300" style={{ width: `${gatePct}%` }} />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">PCM Prep</span>
                <GraduationCap className="w-3.5 h-3.5 text-teal-500" />
              </div>
              <div className="my-1.5">
                <div className="text-xl font-black text-slate-900 dark:text-white">{overallFoundationPct}%</div>
                <p className="text-[10px] text-slate-500">M:{mathPct}% P:{physPct}% C:{chemPct}%</p>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-500 h-full rounded-full transition-all duration-300" style={{ width: `${overallFoundationPct}%` }} />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Skill Track</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </div>
              <div className="my-1.5">
                <div className="text-xl font-black text-slate-900 dark:text-white">{overallSkillPct}%</div>
                <p className="text-[10px] text-slate-500">C++, Python, AIML</p>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full transition-all duration-300" style={{ width: `${overallSkillPct}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile & Countdown Cards */}
        <div className="space-y-6">
          
          {/* MY PROFILE CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-indigo-200 dark:border-indigo-900/60 shadow-md space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white">Official Student Profile</h2>
              </div>
              <span className="text-xs font-bold px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-md">
                CSE-AIML
              </span>
            </div>

            {/* Student Name & Roll No */}
            <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/60 dark:to-blue-950/60 border border-indigo-200/60 dark:border-indigo-800/60">
              <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-wider">Student Name</p>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mt-0.5">{STUDENT_PROFILE.studentName}</h3>
              <p className="text-xs font-extrabold text-indigo-700 dark:text-indigo-300 mt-0.5">Roll No: {STUDENT_PROFILE.rollNo}</p>
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

          {/* DYNAMIC REAL-TIME COUNTDOWN CARDS */}
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
              <div className="p-3.5 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md">
                <p className="text-[11px] font-bold text-emerald-100 uppercase tracking-wider">UPSC CDS II 2029 Target</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-black">{getDaysRemaining('2029-09-02')} Days</span>
                  <span className="text-xs font-bold text-emerald-100">Sept 02, 2029</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-md">
                <p className="text-[11px] font-bold text-indigo-100 uppercase tracking-wider">Next Mid-Sem Exam</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-black">{getDaysRemaining('2026-10-07')} Days</span>
                  <span className="text-xs font-bold text-indigo-200">Oct 07, 2026</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 text-white dark:bg-slate-800 border border-slate-800">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Next End-Sem Exam</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-black">{getDaysRemaining('2026-12-01')} Days</span>
                  <span className="text-xs font-semibold text-slate-400">Dec 01, 2026</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md">
                <p className="text-[11px] font-bold text-amber-100 uppercase tracking-wider">Summer Vacation 2027</p>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-2xl font-black">{getDaysRemaining('2027-04-22')} Days</span>
                  <span className="text-xs font-bold text-amber-100">Apr 22, 2027</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
