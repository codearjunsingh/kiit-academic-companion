import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { KnowledgeGraphView } from './components/KnowledgeGraphView';
import { FoundationZeroView } from './components/FoundationZeroView';
import { GoalEngineView } from './components/GoalEngineView';
import { SubjectsView } from './components/SubjectsView';
import { CodingHqView } from './components/CodingHqView';
import { CdsView } from './components/CdsView';
import { GateView } from './components/GateView';
import { CuriosityEngineView } from './components/CuriosityEngineView';
import { ExperimentsView } from './components/ExperimentsView';
import { UniversalLibraryView } from './components/UniversalLibraryView';
import { DecisionJournalView } from './components/DecisionJournalView';
import { TimelineView } from './components/TimelineView';
import { LifeHealthView } from './components/LifeHealthView';
import { FoundationView } from './components/FoundationView';
import { SkillsView } from './components/SkillsView';
import { ChannelDirectoryView } from './components/ChannelDirectoryView';
import { CalendarView } from './components/CalendarView';
import { CountdownView } from './components/CountdownView';
import { FaqView } from './components/FaqView';
import { SettingsView } from './components/SettingsView';

const MainContent: React.FC = () => {
  const { activeView } = useApp();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {activeView === 'dashboard' && <DashboardView />}
      {activeView === 'knowledgeGraph' && <KnowledgeGraphView />}
      {activeView === 'foundationZero' && <FoundationZeroView />}
      {activeView === 'goals' && <GoalEngineView />}
      {activeView === 'subjects' && <SubjectsView />}
      {activeView === 'coding' && <CodingHqView />}
      {activeView === 'cds' && <CdsView />}
      {activeView === 'gate' && <GateView />}
      {activeView === 'curiosity' && <CuriosityEngineView />}
      {activeView === 'experiments' && <ExperimentsView />}
      {activeView === 'library' && <UniversalLibraryView />}
      {activeView === 'decision' && <DecisionJournalView />}
      {activeView === 'timeline' && <TimelineView />}
      {activeView === 'lifeHealth' && <LifeHealthView />}
      {activeView === 'foundation' && <FoundationView />}
      {activeView === 'skills' && <SkillsView />}
      {activeView === 'channels' && <ChannelDirectoryView />}
      {activeView === 'calendar' && <CalendarView />}
      {activeView === 'countdown' && <CountdownView />}
      {activeView === 'faq' && <FaqView />}
      {activeView === 'settings' && <SettingsView />}
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
