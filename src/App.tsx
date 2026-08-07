import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { SinglePageMissionControl } from './components/SinglePageMissionControl';
import { FoundationZeroView } from './components/FoundationZeroView';
import { SubjectPrerequisiteInspector } from './components/SubjectPrerequisiteInspector';
import { GateHqView } from './components/GateHqView';
import { SubjectsView } from './components/SubjectsView';
import { CodingHqView } from './components/CodingHqView';
import { SettingsView } from './components/SettingsView';
import { CalendarView } from './components/CalendarView';
import { CountdownView } from './components/CountdownView';
import { KnowledgeGraphView } from './components/KnowledgeGraphView';
import { CdsView } from './components/CdsView';
import { LifeHealthView } from './components/LifeHealthView';
import { UniversalLibraryView } from './components/UniversalLibraryView';
import { FaqView } from './components/FaqView';
import { ExperimentsView } from './components/ExperimentsView';
import { GoalEngineView } from './components/GoalEngineView';
import { DecisionJournalView } from './components/DecisionJournalView';
import { TimelineView } from './components/TimelineView';
import { SkillsView } from './components/SkillsView';
import { ChannelDirectoryView } from './components/ChannelDirectoryView';
import { CuriosityEngineView } from './components/CuriosityEngineView';
import { LearnUniversalView } from './components/LearnUniversalView';
import { MonthlyCalendar } from './components/MonthlyCalendar';
import { SgpaCalculatorView } from './components/SgpaCalculatorView';

const MainContent: React.FC = () => {
  const { activeView } = useApp();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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

