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
