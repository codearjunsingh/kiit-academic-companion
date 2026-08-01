import React from 'react';
import { useApp } from '../context/AppContext';
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Sparkles,
  Calendar as CalendarIcon,
  Clock,
  HelpCircle,
  Settings as SettingsIcon,
  Moon,
  Sun,
  Tv,
  Target,
  Shield,
  Layers
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeView, setActiveView, scheme, darkMode, setDarkMode, explainSimply, setExplainSimply } = useApp();

  const navItems = [
    { id: 'dashboard', label: 'Today', icon: LayoutDashboard },
    { id: 'foundationZero', label: 'Zero-to-Hero', icon: Layers },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'cds', label: 'CDS Prep', icon: Shield },
    { id: 'gate', label: 'GATE Prep', icon: Target },
    { id: 'foundation', label: 'PCM Prep', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Sparkles },
    { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
    { id: 'countdown', label: 'Countdowns', icon: Clock },
    { id: 'channels', label: 'Creators', icon: Tv },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <>
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveView('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-teal-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-indigo-500/20">
              K
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg">
                  KIIT Academic Companion
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  {scheme}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                School of Engineering • 2026 Batch
              </p>
            </div>
          </div>

          {/* Desktop Nav Controls */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 9).map(item => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 shadow-sm border border-indigo-200/50 dark:border-indigo-800/50'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setExplainSimply(!explainSimply)}
              title="Toggle Explain Simply Mode"
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all border flex items-center space-x-1 ${
                explainSimply
                  ? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300'
                  : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">Simple Mode:</span>
              <span>{explainSimply ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setActiveView('settings')}
              className={`p-2 rounded-xl transition-colors lg:hidden ${
                activeView === 'settings'
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <SettingsIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-2 py-1">
        <div className="grid grid-cols-5 gap-1">
          {[
            { id: 'dashboard', label: 'Today', icon: LayoutDashboard },
            { id: 'foundationZero', label: 'Zero-to-Hero', icon: Layers },
            { id: 'subjects', label: 'Subjects', icon: BookOpen },
            { id: 'cds', label: 'CDS Prep', icon: Shield },
            { id: 'gate', label: 'GATE Prep', icon: Target },
          ].map(item => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                    : 'text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                <span className="text-[10px] mt-0.5 truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
