import React from 'react';
import {
  Calendar,
  Sparkles,
  Shield,
  Target,
  Award,
  GraduationCap,
  Briefcase,
  Rocket
} from 'lucide-react';

export interface TimelineMilestone {
  year: string;
  phase: string;
  title: string;
  goals: string[];
  status: 'Current' | 'Upcoming' | 'Future';
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: '2026 - 2027',
    phase: 'B.Tech Year 1',
    title: 'Core Fundamentals & Class 6-12 Rebuild',
    goals: [
      'Master KIIT 1st Year Physics, Chemistry, C Programming & Math',
      'Rebuild Class 6-12 Math/Physics fundamentals via Zero-to-Hero',
      'Begin PW Nirmaan GATE 2029 Daily 15 DPP Questions Goal'
    ],
    status: 'Current'
  },
  {
    year: '2027 - 2028',
    phase: 'B.Tech Year 2',
    title: 'Data Structures, Algorithms & AI/ML Specialization',
    goals: [
      'Complete C++ OOPs, STL, and 200+ LeetCode DSA Problems',
      'First AI/ML Projects (PyTorch, Computer Vision, Transformers)',
      'Summer Research Internship & Open Source GitHub Contributions'
    ],
    status: 'Upcoming'
  },
  {
    year: '2028 - 2029',
    phase: 'B.Tech Year 3',
    title: 'PW GATE 2029 & UPSC CDS II 2029 Written Targets',
    goals: [
      'Appear & Crack GATE CSE 2029 with Top Air Rank',
      'Appear & Clear UPSC CDS I & II 2029 Written Examination (IMA Target)',
      'Prepare for SSB Interview Stage-1 (OIR/PPDT) & Stage-2 Psych Tests'
    ],
    status: 'Upcoming'
  },
  {
    year: '2029 - 2030',
    phase: 'B.Tech Year 4',
    title: 'Graduation & Commission / Master Specialization',
    goals: [
      'Graduate with Distinction B.Tech CSE-AIML from KIIT',
      'Join Indian Military Academy (IMA Dehradun) or Top AI R&D Lab / M.Tech',
      'Publish Original Research Paper in Machine Learning'
    ],
    status: 'Future'
  },
  {
    year: '2030 - 2046',
    phase: 'Decade 1 & 2 Leadership',
    title: '20-Year AI & Defense Technology Mastery',
    goals: [
      'Lead Defense AI / Autonomous Systems Projects',
      'Build Open-Source AI Infrastructure & Mentor Next-Gen Engineers'
    ],
    status: 'Future'
  }
];

export const TimelineView: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/30 backdrop-blur-md border border-purple-400/30 px-3 py-1 rounded-full text-xs font-semibold text-purple-200 mb-3">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Decade-Long Progression Architecture • 2026 to 2046</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              20-Year Career & Life Timeline ⏳
            </h1>
            <p className="text-purple-200 text-sm mt-1 max-w-xl font-medium">
              Think in decades, not semesters. Every single hour spent studying today feeds directly into your 20-year trajectory!
            </p>
          </div>
        </div>
      </div>

      {/* CHRONOLOGICAL TIMELINE NODES */}
      <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
        {TIMELINE_MILESTONES.map((m, idx) => (
          <div key={idx} className="relative group">
            {/* Node Circle Indicator */}
            <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-4 flex items-center justify-center ${
              m.status === 'Current'
                ? 'bg-amber-400 border-indigo-900 shadow-md shadow-amber-400/50 scale-110'
                : m.status === 'Upcoming'
                ? 'bg-indigo-600 border-white dark:border-slate-900'
                : 'bg-slate-300 dark:bg-slate-700 border-white dark:border-slate-900'
            }`} />

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-black px-3 py-1 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                    {m.year}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{m.phase}</span>
                </div>
                <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                  m.status === 'Current'
                    ? 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {m.status}
                </span>
              </div>

              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                {m.title}
              </h2>

              <div className="space-y-1.5 pt-1">
                {m.goals.map((g, gIdx) => (
                  <div key={gIdx} className="flex items-start space-x-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span>
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
