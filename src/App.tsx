import React, { Suspense, lazy } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';

// Dynamic lazy imports for view components
const SinglePageMissionControl = lazy(() => import('./components/SinglePageMissionControl').then(m => ({ default: m.SinglePageMissionControl })));
const FoundationZeroView = lazy(() => import('./components/FoundationZeroView').then(m => ({ default: m.FoundationZeroView })));
const SubjectPrerequisiteInspector = lazy(() => import('./components/SubjectPrerequisiteInspector').then(m => ({ default: m.SubjectPrerequisiteInspector })));
const GateHqView = lazy(() => import('./components/GateHqView').then(m => ({ default: m.GateHqView })));
const SubjectsView = lazy(() => import('./components/SubjectsView').then(m => ({ default: m.SubjectsView })));
const CodingHqView = lazy(() => import('./components/CodingHqView').then(m => ({ default: m.CodingHqView })));
const SettingsView = lazy(() => import('./components/SettingsView').then(m => ({ default: m.SettingsView })));
const CalendarView = lazy(() => import('./components/CalendarView').then(m => ({ default: m.CalendarView })));
const CountdownView = lazy(() => import('./components/CountdownView').then(m => ({ default: m.CountdownView })));
const KnowledgeGraphView = lazy(() => import('./components/KnowledgeGraphView').then(m => ({ default: m.KnowledgeGraphView })));
const CdsView = lazy(() => import('./components/CdsView').then(m => ({ default: m.CdsView })));
const LifeHealthView = lazy(() => import('./components/LifeHealthView').then(m => ({ default: m.LifeHealthView })));
const UniversalLibraryView = lazy(() => import('./components/UniversalLibraryView').then(m => ({ default: m.UniversalLibraryView })));
const FaqView = lazy(() => import('./components/FaqView').then(m => ({ default: m.FaqView })));
const ExperimentsView = lazy(() => import('./components/ExperimentsView').then(m => ({ default: m.ExperimentsView })));
const GoalEngineView = lazy(() => import('./components/GoalEngineView').then(m => ({ default: m.GoalEngineView })));
const DecisionJournalView = lazy(() => import('./components/DecisionJournalView').then(m => ({ default: m.DecisionJournalView })));
const TimelineView = lazy(() => import('./components/TimelineView').then(m => ({ default: m.TimelineView })));
const SkillsView = lazy(() => import('./components/SkillsView').then(m => ({ default: m.SkillsView })));
const ChannelDirectoryView = lazy(() => import('./components/ChannelDirectoryView').then(m => ({ default: m.ChannelDirectoryView })));
const CuriosityEngineView = lazy(() => import('./components/CuriosityEngineView').then(m => ({ default: m.CuriosityEngineView })));
const LearnUniversalView = lazy(() => import('./components/LearnUniversalView').then(m => ({ default: m.LearnUniversalView })));
const MonthlyCalendar = lazy(() => import('./components/MonthlyCalendar').then(m => ({ default: m.MonthlyCalendar })));
const SgpaCalculatorView = lazy(() => import('./components/SgpaCalculatorView').then(m => ({ default: m.SgpaCalculatorView })));

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center space-y-3">
      <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Loading Module...</p>
    </div>
  </div>
);

const MainContent: React.FC = () => {
  const { activeView } = useApp();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Suspense fallback={<LoadingFallback />}>
        {activeView === 'dashboard' && <SinglePageMissionControl />}
        {activeView === 'subjects' && <SubjectsView />}
        {activeView === 'gateHq' && <GateHqView />}
        {activeView === 'foundationZero' && <FoundationZeroView />}
        {activeView === 'prereqInspector' && <SubjectPrerequisiteInspector />}
        {activeView === 'coding' && <CodingHqView />}
        {activeView === 'calendar' && <CalendarView />}
        {activeView === 'countdown' && <CountdownView />}
        {activeView === 'settings' && <SettingsView />}
        {activeView === 'knowledgeGraph' && <KnowledgeGraphView />}
        {activeView === 'cds' && <CdsView />}
        {activeView === 'lifeHealth' && <LifeHealthView />}
        {activeView === 'universalLibrary' && <UniversalLibraryView />}
        {activeView === 'faq' && <FaqView />}
        {activeView === 'experiments' && <ExperimentsView />}
        {activeView === 'goalEngine' && <GoalEngineView />}
        {activeView === 'decisionJournal' && <DecisionJournalView />}
        {activeView === 'timeline' && <TimelineView />}
        {activeView === 'skills' && <SkillsView />}
        {activeView === 'channelDirectory' && <ChannelDirectoryView />}
        {activeView === 'curiosityEngine' && <CuriosityEngineView />}
        {activeView === 'learnUniversal' && <LearnUniversalView />}
        {activeView === 'monthlyCalendar' && <MonthlyCalendar />}
        {activeView === 'sgpaCalculator' && <SgpaCalculatorView />}
      </Suspense>
    </main>
  );
};

export function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors duration-200">
        <Navbar />
        <MainContent />
      </div>
    </AppProvider>
  );
}

export default App;


