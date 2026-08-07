import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { EverythingSearchModal } from './EverythingSearchModal';
import {
  Home,
  GraduationCap,
  Layers,
  Search as SearchIcon,
  Code,
  Settings as SettingsIcon,
  Moon,
  Sun,
  Search,
  Award,
  ChevronDown,
  Network,
  Shield,
  Target,
  Calendar,
  Sparkles,
  BookOpen,
  FlaskConical,
  Library,
  Activity,
  HelpCircle
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeView, setActiveView, darkMode, setDarkMode } = useApp();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const primaryModules = [
    { id: 'dashboard', label: '🏠 KIIT Dashboard' },
    { id: 'subjects', label: '📚 4-Year Curricula' },
    { id: 'gateHq', label: '🎓 GATE CS Tracker' },
    { id: 'foundationZero', label: '🎓 Zero-to-Hero (6-12)' },
    { id: 'coding', label: '💻 Coding HQ' },
  ];

  const secondaryModules = [
    { id: 'knowledgeGraph', label: '🌌 Master Knowledge Graph', icon: Network },
    { id: 'cds', label: '🛡️ UPSC CDS II Target', icon: Shield },
    { id: 'goalEngine', label: '🎯 AI Goal Engine', icon: Target },
    { id: 'timeline', label: '⏳ 20-Year Life Timeline', icon: Calendar },
    { id: 'skills', label: '💡 Skills & Beyond Syllabus', icon: Sparkles },
    { id: 'prereqInspector', label: '🔍 Prerequisite Inspector', icon: SearchIcon },
    { id: 'decisionJournal', label: '📖 Decision Journal', icon: BookOpen },
    { id: 'experiments', label: '🧪 Learning Experiments', icon: FlaskConical },
    { id: 'universalLibrary', label: '🧬 Universal Library', icon: Library },
    { id: 'lifeHealth', label: '📊 Life & Health Dashboard', icon: Activity },
    { id: 'faq', label: '❓ FAQ & Academic Rules', icon: HelpCircle },
    { id: 'settings', label: '⚙️ Settings & Backup', icon: SettingsIcon },
  ];

  return (
    <>
      <EverythingSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveView('dashboard')}>
            <img
              src="/logo.svg"
              alt="StudyOS Logo"
              className="w-10 h-10 rounded-2xl shadow-md hover:scale-105 transition-transform"
            />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-slate-900 dark:text-white tracking-tight text-base sm:text-lg">
                  KIIT StudyOS
                </span>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  B.Tech CSE-AIML
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                School of Computer Engineering • Campus-8
              </p>
            </div>
          </div>

          {/* Desktop Nav Controls */}
          <div className="hidden lg:flex items-center space-x-1">
            {primaryModules.map(item => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-black transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Dropdown for More Modules */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-black transition-all ${
                  secondaryModules.some(m => m.id === activeView)
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>⚡ More Modules</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {isMoreOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsMoreOpen(false)} />
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl py-2 z-20 grid grid-cols-1 gap-0.5">
                    {secondaryModules.map(item => {
                      const isActive = activeView === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveView(item.id);
                            setIsMoreOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-xs font-extrabold flex items-center space-x-2 transition-colors ${
                            isActive
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                              : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                          }`}
                        >
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 text-xs font-bold transition-colors flex items-center space-x-1.5"
            >
              <Search className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[9px] font-mono bg-white dark:bg-slate-900 rounded border border-slate-200 dark:border-slate-700 text-slate-400">Ctrl+K</kbd>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-2 py-1">
        <div className="grid grid-cols-6 gap-1">
          {[
            { id: 'dashboard', label: 'Home', icon: Home },
            { id: 'subjects', label: 'Curricula', icon: GraduationCap },
            { id: 'gateHq', label: 'GATE', icon: Award },
            { id: 'foundationZero', label: 'Zero-Hero', icon: Layers },
            { id: 'coding', label: 'Coding', icon: Code },
            { id: 'settings', label: 'Settings', icon: SettingsIcon },
          ].map(item => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all ${
                  isActive
                    ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'scale-110' : ''} transition-transform`} />
                <span className="text-[9px] mt-0.5 truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
