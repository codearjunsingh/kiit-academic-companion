import React, { useState } from 'react';
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
  Search
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { activeView, setActiveView, scheme, darkMode, setDarkMode } = useApp();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const coreModules = [
    { id: 'dashboard', label: '🏠 KIIT Dashboard' },
    { id: 'subjects', label: '📚 4-Year Curricula' },
    { id: 'foundationZero', label: '🎓 Zero-to-Hero (6-12)' },
    { id: 'prereqInspector', label: '🔍 Prerequisite Inspector' },
    { id: 'coding', label: '💻 Coding HQ' },
    { id: 'settings', label: '⚙️ Settings' },
  ];

  return (
    <>
      <EverythingSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveView('dashboard')}>
            <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-md">
              K
            </div>
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
          <div className="hidden lg:flex items-center space-x-1.5">
            {coreModules.map(item => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-black transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
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
        <div className="grid grid-cols-5 gap-1">
          {[
            { id: 'dashboard', label: 'Home', icon: Home },
            { id: 'subjects', label: 'Curricula', icon: GraduationCap },
            { id: 'foundationZero', label: 'Zero-Hero', icon: Layers },
            { id: 'prereqInspector', label: 'Inspector', icon: SearchIcon },
            { id: 'coding', label: 'Coding', icon: Code },
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
