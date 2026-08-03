import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  SCHEME_A_SEM1_COURSES,
  SCHEME_A_SEM2_COURSES,
  SCHEME_B_SEM1_COURSES,
  SCHEME_B_SEM2_COURSES,
  ENGINEERING_ELECTIVES,
  SCIENCE_ELECTIVES,
  GER_ELECTIVES,
  Subject
} from '../data/subjects';
import { OFFICIAL_FIRST_YEAR_TEXTBOOKS, PhysicalBook } from '../data/books';
import {
  BookOpen,
  Award,
  CheckSquare,
  Square,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Search,
  Book,
  Sparkles,
  Layers,
  FileText,
  BrainCircuit,
  Youtube
} from 'lucide-react';

export const SubjectsView: React.FC = () => {
  const {
    scheme,
    setScheme,
    engineeringElective,
    setEngineeringElective,
    scienceElective,
    setScienceElective,
    gerElective,
    setGerElective,
    checkedSyllabus,
    toggleSyllabusTopic
  } = useApp();

  const [activeSemester, setActiveSemester] = useState<1 | 2>(1);
  const [expandedCourseCode, setExpandedCourseCode] = useState<string | null>('CS13003');
  const [expandedBookId, setExpandedBookId] = useState<string | null>('book_c_balagurusamy');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'curriculum' | 'textbooks'>('curriculum');

  let rawCourses: Subject[] = [];
  if (scheme === 'Scheme A') {
    rawCourses = activeSemester === 1 ? SCHEME_A_SEM1_COURSES : SCHEME_A_SEM2_COURSES;
  } else {
    rawCourses = activeSemester === 1 ? SCHEME_B_SEM1_COURSES : SCHEME_B_SEM2_COURSES;
  }

  const courses: Subject[] = rawCourses.map(course => {
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

  const filteredCourses = courses.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredBooks = OFFICIAL_FIRST_YEAR_TEXTBOOKS.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.index.some(ch => ch.chapterTitle.toLowerCase().includes(searchTerm.toLowerCase()) || ch.subtopics.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const totalSemCredits = courses.reduce((acc, c) => acc + c.ltpc.credits, 0);
  const totalSemContactHours = courses.reduce((acc, c) => acc + c.ltpc.total, 0);

  return (
    <div className="space-y-6 pb-20">
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-200 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
              <span>KIIT School of Computer Engineering • Curricula & Textbook Library</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              1st Year B.Tech Syllabus, Schemes & Official Textbooks
            </h1>
            <p className="text-indigo-200 text-sm mt-1 max-w-xl font-medium">
              Toggle between Scheme A & Scheme B, explore L-T-P-C credit points, and inspect chapter indices of all 9 official textbooks!
            </p>
          </div>

          {/* Action Tabs & NotebookLM PYQ Teaser Badge */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <div className="px-3.5 py-2 rounded-2xl bg-amber-400/20 backdrop-blur-md border border-amber-400/30 text-amber-200 font-extrabold text-xs flex items-center justify-center space-x-2">
              <BrainCircuit className="w-4 h-4 text-amber-300" />
              <span>NotebookLM PYQs (Year/Sem Wise) Coming Soon</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === 'curriculum' ? 'bg-white text-indigo-950 shadow-md' : 'text-indigo-200 hover:text-white'
                }`}
              >
                Curriculum & Credits
              </button>
              <button
                onClick={() => setActiveTab('textbooks')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === 'textbooks' ? 'bg-white text-indigo-950 shadow-md' : 'text-indigo-200 hover:text-white'
                }`}
              >
                Physical Textbooks ({OFFICIAL_FIRST_YEAR_TEXTBOOKS.length})
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeTab === 'curriculum' && (
        <>
          {/* Controls: Scheme A / Scheme B Switcher + Semester Tabs */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              
              {/* Scheme Switcher */}
              <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl">
                <span className="text-xs font-extrabold text-slate-500 uppercase px-2">Scheme:</span>
                <button
                  onClick={() => setScheme('Scheme A')}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    scheme === 'Scheme A'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Scheme A (Sem 1 Physics, Sem 2 Chem)
                </button>
                <button
                  onClick={() => setScheme('Scheme B')}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    scheme === 'Scheme B'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Scheme B (Sem 1 Chem, Sem 2 Physics)
                </button>
              </div>

              {/* Semester Tabs */}
              <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl">
                <button
                  onClick={() => setActiveSemester(1)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeSemester === 1
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Sem-I (22 Credits)
                </button>
                <button
                  onClick={() => setActiveSemester(2)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeSemester === 2
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  Sem-II (21 Credits)
                </button>
              </div>

              {/* Search Box */}
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search course code or title..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full sm:w-64 pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Elective Selection Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">Engineering Elective</label>
                <select
                  value={engineeringElective}
                  onChange={e => setEngineeringElective(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white text-xs"
                >
                  {ENGINEERING_ELECTIVES.map(e => (
                    <option key={e.code} value={e.code}>{e.code} - {e.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">Science Elective</label>
                <select
                  value={scienceElective}
                  onChange={e => setScienceElective(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white text-xs"
                >
                  {SCIENCE_ELECTIVES.map(e => (
                    <option key={e.code} value={e.code}>{e.code} - {e.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">GER Elective</label>
                <select
                  value={gerElective}
                  onChange={e => setGerElective(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white text-xs"
                >
                  {GER_ELECTIVES.map(e => (
                    <option key={e.code} value={e.code}>{e.code} - {e.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* OFFICIAL CREDIT BREAKDOWN TABLE (L-T-P-C) */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-base font-black text-slate-900 dark:text-white">
                  Official KIIT Credit Breakdown Table ({scheme} • Semester-{activeSemester})
                </h2>
              </div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                Total: {totalSemContactHours} Hrs • {totalSemCredits} Credits
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3 rounded-l-xl">Course Code</th>
                    <th className="p-3">Course Title</th>
                    <th className="p-3">Type</th>
                    <th className="p-3 text-center">L</th>
                    <th className="p-3 text-center">T</th>
                    <th className="p-3 text-center">P</th>
                    <th className="p-3 text-center">Total Hrs</th>
                    <th className="p-3 text-center rounded-r-xl font-extrabold text-indigo-600 dark:text-indigo-400">Credits</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
                  {filteredCourses.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">{c.code}</td>
                      <td className="p-3 font-bold text-slate-900 dark:text-white">{c.name}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                          c.type === 'Theory' ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' :
                          c.type === 'Practical' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
                        }`}>
                          {c.type}
                        </span>
                      </td>
                      <td className="p-3 text-center font-mono">{c.ltpc.l}</td>
                      <td className="p-3 text-center font-mono">{c.ltpc.t}</td>
                      <td className="p-3 text-center font-mono">{c.ltpc.p}</td>
                      <td className="p-3 text-center font-mono font-semibold">{c.ltpc.total}</td>
                      <td className="p-3 text-center font-mono font-black text-indigo-600 dark:text-indigo-400 text-sm bg-indigo-50/50 dark:bg-indigo-950/30">
                        {c.ltpc.credits}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* DETAILED SYLLABUS & CHAPTER CHECKLISTS */}
          <div className="space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Detailed Chapter Syllabi & Textbooks</span>
            </h2>

            {filteredCourses.map(course => {
              const isExpanded = expandedCourseCode === course.code;
              const courseDone = course.chapters.filter(ch => checkedSyllabus[ch.id]).length;
              const courseTotal = course.chapters.length;
              const coursePct = courseTotal > 0 ? Math.round((courseDone / courseTotal) * 100) : 0;

              return (
                <div
                  key={course.code}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
                >
                  <div
                    onClick={() => setExpandedCourseCode(isExpanded ? null : course.code)}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-mono font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-lg text-xs">
                        {course.code}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">{course.name}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {course.ltpc.credits} Credits • L:{course.ltpc.l} T:{course.ltpc.t} P:{course.ltpc.p}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 self-end sm:self-center">
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">{coursePct}% Done</span>
                        <div className="w-20 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-1">
                          <div className="bg-indigo-600 h-full rounded-full transition-all" style={{ width: `${coursePct}%` }} />
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-5 border-t border-slate-100 dark:border-slate-800 space-y-4 bg-slate-50/30 dark:bg-slate-900/30">
                      <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 text-xs space-y-0.5">
                        <p className="font-extrabold text-indigo-900 dark:text-indigo-200">Official Textbook:</p>
                        <p className="text-slate-700 dark:text-slate-300 font-medium">{course.textbook}</p>
                        {course.referenceBook && (
                          <p className="text-slate-500 text-[11px]">Ref: {course.referenceBook}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Chapter Syllabus Checklist</p>
                        {course.chapters.map(ch => {
                          const isChecked = !!checkedSyllabus[ch.id];
                          return (
                            <div
                              key={ch.id}
                              onClick={() => toggleSyllabusTopic(ch.id)}
                              className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center justify-between ${
                                isChecked
                                  ? 'bg-indigo-50/60 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900 text-slate-800 dark:text-slate-200'
                                  : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center space-x-3 flex-1 min-w-0">
                                <div className="shrink-0 text-indigo-600 dark:text-indigo-400">
                                  {isChecked ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-400" />}
                                </div>
                                <span className={`truncate ${isChecked ? 'line-through opacity-75 font-semibold' : 'font-semibold'}`}>
                                  {ch.title}
                                </span>
                              </div>

                              <div className="flex items-center space-x-2 shrink-0">
                                <a
                                  href={`https://www.youtube.com/results?search_query=${encodeURIComponent(course.name + ' ' + ch.title + ' BTech')}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-lg bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-[10px] font-black hover:bg-red-200 transition-colors"
                                  title={`Watch YouTube video for ${ch.title}`}
                                >
                                  <Youtube className="w-3 h-3 text-red-500" />
                                  <span>▶ Topic YT</span>
                                </a>

                                <span className="text-[10px] text-slate-400 font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800">{ch.module}</span>
                              </div>
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
        </>
      )}

      {/* TAB 2: PHYSICAL TEXTBOOKS SHOWCASE WITH EXTRACTED CHAPTER INDEX (FROM 114-PAGE PDF) */}
      {activeTab === 'textbooks' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Book className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Official 1st Year B.Tech Textbooks Stack & Full Chapter Index Browser</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Exact chapter indices, subtopics, and page numbers extracted from all 9 official 1st year textbooks!
              </p>
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search book index topics..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredBooks.map((book) => {
              const isExpanded = expandedBookId === book.id;

              return (
                <div
                  key={book.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
                >
                  <div
                    onClick={() => setExpandedBookId(isExpanded ? null : book.id)}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-16 rounded-xl bg-gradient-to-br ${book.coverColor} text-white shrink-0 flex items-center justify-center font-black text-xs shadow-md`}>
                        <FileText className="w-6 h-6 text-white/80" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded text-[10px]">
                            {book.courseCode}
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">{book.schemeApplies}</span>
                        </div>
                        <h3 className="text-base font-black text-slate-900 dark:text-white mt-1 leading-snug">
                          {book.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Author: <strong>{book.author}</strong> • {book.publisher} ({book.edition})
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 self-end sm:self-center">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-xl">
                        {book.index.length} Index Chapters
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-5 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/30 space-y-4">
                      <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/60 text-xs">
                        <p className="font-bold text-indigo-900 dark:text-indigo-200">Recommended for KIIT Modules:</p>
                        <p className="text-slate-700 dark:text-slate-300 mt-0.5">{book.recommendedFor}</p>
                      </div>

                      <div className="space-y-3">
                        <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">
                          Full Table of Contents & Chapter Index:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {book.index.map((ch, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5 shadow-2xs"
                            >
                              <div className="flex items-center justify-between font-extrabold border-b border-slate-100 dark:border-slate-800 pb-2">
                                <span className="text-indigo-600 dark:text-indigo-400">
                                  {typeof ch.chapterNumber === 'number' ? `Chapter ${ch.chapterNumber}` : ch.chapterNumber}
                                </span>
                                {ch.pageRange && (
                                  <span className="text-[10px] font-mono text-slate-400">{ch.pageRange}</span>
                                )}
                              </div>

                              <p className="font-bold text-slate-900 dark:text-white text-xs pt-1">{ch.chapterTitle}</p>

                              <div className="flex flex-wrap gap-1 pt-1">
                                {ch.subtopics.map((sub, sIdx) => (
                                  <span
                                    key={sIdx}
                                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-medium"
                                  >
                                    {sub}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
