import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BASE_SEM1_COURSES, BASE_SEM2_COURSES, ENGINEERING_ELECTIVES, SCIENCE_ELECTIVES, GER_ELECTIVES, Subject } from '../data/subjects';
import { THEORY_MARK_DISTRIBUTION, PRACTICAL_MARK_DISTRIBUTION } from '../data/grading';
import { FOUNDATION_TOPICS, FoundationTopic } from '../data/foundation';
import {
  BookOpen,
  CheckSquare,
  Square,
  AlertTriangle,
  Youtube,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  ExternalLink,
  BookMarked
} from 'lucide-react';

export const SubjectsView: React.FC = () => {
  const {
    scheme,
    engineeringElective,
    scienceElective,
    gerElective,
    checkedSyllabus,
    toggleSyllabusTopic,
    checkedFoundation,
    setActiveView
  } = useApp();

  const [activeSem, setActiveSem] = useState<1 | 2>(1);
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  // Scheme A: Sem 1 = Base Sem 1, Sem 2 = Base Sem 2
  // Scheme B: Sem 1 = Base Sem 2, Sem 2 = Base Sem 1
  const sem1Base = scheme === 'Scheme A' ? BASE_SEM1_COURSES : BASE_SEM2_COURSES;
  const sem2Base = scheme === 'Scheme A' ? BASE_SEM2_COURSES : BASE_SEM1_COURSES;

  const currentBase = activeSem === 1 ? sem1Base : sem2Base;

  // Substitute chosen electives into subject list
  const courses: Subject[] = currentBase.map(course => {
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

  const toggleExpand = (code: string) => {
    setExpandedSubject(expandedSubject === code ? null : code);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-xl font-black text-slate-900 dark:text-white">Engineering Syllabus Checklists</h1>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Track official course chapters for {scheme}. Filtered by your active electives.
          </p>
        </div>

        {/* Semester Tabs */}
        <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto">
          <button
            onClick={() => setActiveSem(1)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSem === 1
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Semester 1
          </button>
          <button
            onClick={() => setActiveSem(2)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeSem === 2
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Semester 2
          </button>
        </div>
      </div>

      {/* Courses Accordion List */}
      <div className="space-y-4">
        {courses.map(course => {
          const isExpanded = expandedSubject === course.code || expandedSubject === null; // expand all or filtered
          const totalCh = course.chapters.length;
          const doneCh = course.chapters.filter(ch => checkedSyllabus[ch.id]).length;
          const pct = totalCh > 0 ? Math.round((doneCh / totalCh) * 100) : 0;

          // Find unchecked prerequisite foundation topics for this course
          const uncheckedPrereqs = FOUNDATION_TOPICS.filter(
            f => f.feedsInto.includes(course.code) && !checkedFoundation[f.id]
          );

          return (
            <div
              key={course.code}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
            >
              {/* Subject Header */}
              <div
                onClick={() => toggleExpand(course.code)}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                      {course.code}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {course.type} ({course.ltpc})
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {course.credits} Credits
                    </span>
                  </div>
                  <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {course.name}
                  </h2>
                  {course.textbook && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 pt-0.5">
                      <BookMarked className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span><strong>Recommended Textbook:</strong> {course.textbook}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center space-x-4 shrink-0">
                  {/* Mark distribution badge */}
                  <div className="text-right hidden sm:block">
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase">Mark Scheme</p>
                    <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      {course.type === 'Theory' ? '50 End + 20 Mid + 30 Int' : '40 End Lab + 60 Sess'}
                    </p>
                  </div>

                  {/* Progress Ring / Bar */}
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-xs font-black text-slate-900 dark:text-white">{pct}%</p>
                      <p className="text-[10px] text-slate-500">{doneCh}/{totalCh} Done</p>
                    </div>
                    <div className="w-16 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden hidden xs:block">
                      <div
                        className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  
                  {/* Prerequisite Warnings Chip Header if any */}
                  {uncheckedPrereqs.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 space-y-2">
                      <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 text-xs font-bold">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>Prerequisite Warning for {course.code}:</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {uncheckedPrereqs.map(p => {
                          const queryUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(p.youtubeSearchQuery)}`;
                          return (
                            <div
                              key={p.id}
                              className="inline-flex items-center space-x-2 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800 text-[11px]"
                            >
                              <span className="font-semibold text-slate-700 dark:text-slate-300">
                                ⚠️ Prerequisite not confirmed: <strong>{p.topic}</strong>
                              </span>
                              <a
                                href={queryUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-red-600 hover:text-red-700 font-bold flex items-center space-x-0.5 ml-1"
                              >
                                <Youtube className="w-3 h-3" />
                                <span>Search</span>
                              </a>
                              <button
                                onClick={() => setActiveView('foundation')}
                                className="text-indigo-600 hover:underline font-bold flex items-center space-x-0.5"
                              >
                                <span>Jump</span>
                                <ExternalLink className="w-3 h-3" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Chapter Checkboxes */}
                  <div className="space-y-2">
                    {course.chapters.map(ch => {
                      const isChecked = !!checkedSyllabus[ch.id];
                      return (
                        <div
                          key={ch.id}
                          onClick={() => toggleSyllabusTopic(ch.id)}
                          className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-start space-x-3 ${
                            isChecked
                              ? 'bg-indigo-50/60 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900 text-slate-800 dark:text-slate-200'
                              : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0 text-indigo-600 dark:text-indigo-400">
                            {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-400" />}
                          </div>
                          <span className={isChecked ? 'line-through opacity-75' : ''}>{ch.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
