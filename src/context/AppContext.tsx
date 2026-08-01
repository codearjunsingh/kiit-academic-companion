import React, { createContext, useContext, useState, useEffect } from 'react';

export type Scheme = 'Scheme A' | 'Scheme B';

interface AppContextType {
  scheme: Scheme;
  setScheme: (scheme: Scheme) => void;
  engineeringElective: string;
  setEngineeringElective: (code: string) => void;
  scienceElective: string;
  setScienceElective: (code: string) => void;
  gerElective: string;
  setGerElective: (code: string) => void;
  
  checkedSyllabus: Record<string, boolean>;
  toggleSyllabusTopic: (id: string) => void;
  
  checkedFoundation: Record<string, boolean>;
  toggleFoundationTopic: (id: string) => void;
  
  checkedSkills: Record<string, boolean>;
  toggleSkillTopic: (id: string) => void;

  checkedGate: Record<string, boolean>;
  toggleGateTopic: (id: string) => void;

  checkedCds: Record<string, boolean>;
  toggleCdsTopic: (id: string) => void;
  
  mySubscriptions: string[];
  setMySubscriptions: (channels: string[]) => void;
  
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  
  explainSimply: boolean;
  setExplainSimply: (simply: boolean) => void;
  
  activeView: string;
  setActiveView: (view: string) => void;
  
  resetProgress: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scheme, setSchemeState] = useState<Scheme>(() => {
    return (localStorage.getItem('kiit_scheme') as Scheme) || 'Scheme A';
  });

  const [engineeringElective, setEngineeringElectiveState] = useState<string>(() => {
    return localStorage.getItem('kiit_eng_elective') || 'EE10005';
  });

  const [scienceElective, setScienceElectiveState] = useState<string>(() => {
    return localStorage.getItem('kiit_sci_elective') || 'CH10015';
  });

  const [gerElective, setGerElectiveState] = useState<string>(() => {
    return localStorage.getItem('kiit_ger_elective') || 'SY18001';
  });

  const [checkedSyllabus, setCheckedSyllabus] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_checked_syllabus');
    return saved ? JSON.parse(saved) : {};
  });

  const [checkedFoundation, setCheckedFoundation] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_checked_foundation');
    return saved ? JSON.parse(saved) : {};
  });

  const [checkedSkills, setCheckedSkills] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_checked_skills');
    return saved ? JSON.parse(saved) : {};
  });

  const [checkedGate, setCheckedGate] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_checked_gate');
    return saved ? JSON.parse(saved) : {};
  });

  const [checkedCds, setCheckedCds] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_checked_cds');
    return saved ? JSON.parse(saved) : {};
  });

  const [mySubscriptions, setMySubscriptionsState] = useState<string[]>(() => {
    const saved = localStorage.getItem('kiit_subscriptions');
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkModeState] = useState<boolean>(() => {
    const saved = localStorage.getItem('kiit_dark_mode');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [explainSimply, setExplainSimplyState] = useState<boolean>(() => {
    const saved = localStorage.getItem('kiit_explain_simply');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [activeView, setActiveView] = useState<string>('dashboard');

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('kiit_scheme', scheme);
  }, [scheme]);

  useEffect(() => {
    localStorage.setItem('kiit_eng_elective', engineeringElective);
  }, [engineeringElective]);

  useEffect(() => {
    localStorage.setItem('kiit_sci_elective', scienceElective);
  }, [scienceElective]);

  useEffect(() => {
    localStorage.setItem('kiit_ger_elective', gerElective);
  }, [gerElective]);

  useEffect(() => {
    localStorage.setItem('kiit_checked_syllabus', JSON.stringify(checkedSyllabus));
  }, [checkedSyllabus]);

  useEffect(() => {
    localStorage.setItem('kiit_checked_foundation', JSON.stringify(checkedFoundation));
  }, [checkedFoundation]);

  useEffect(() => {
    localStorage.setItem('kiit_checked_skills', JSON.stringify(checkedSkills));
  }, [checkedSkills]);

  useEffect(() => {
    localStorage.setItem('kiit_checked_gate', JSON.stringify(checkedGate));
  }, [checkedGate]);

  useEffect(() => {
    localStorage.setItem('kiit_checked_cds', JSON.stringify(checkedCds));
  }, [checkedCds]);

  useEffect(() => {
    localStorage.setItem('kiit_subscriptions', JSON.stringify(mySubscriptions));
  }, [mySubscriptions]);

  useEffect(() => {
    localStorage.setItem('kiit_dark_mode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('kiit_explain_simply', JSON.stringify(explainSimply));
  }, [explainSimply]);

  const setScheme = (s: Scheme) => setSchemeState(s);
  const setEngineeringElective = (code: string) => setEngineeringElectiveState(code);
  const setScienceElective = (code: string) => setScienceElectiveState(code);
  const setGerElective = (code: string) => setGerElectiveState(code);
  const setMySubscriptions = (subs: string[]) => setMySubscriptionsState(subs);
  const setDarkMode = (d: boolean) => setDarkModeState(d);
  const setExplainSimply = (e: boolean) => setExplainSimplyState(e);

  const toggleSyllabusTopic = (id: string) => {
    setCheckedSyllabus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleFoundationTopic = (id: string) => {
    setCheckedFoundation(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSkillTopic = (id: string) => {
    setCheckedSkills(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleGateTopic = (id: string) => {
    setCheckedGate(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCdsTopic = (id: string) => {
    setCheckedCds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetProgress = () => {
    setCheckedSyllabus({});
    setCheckedFoundation({});
    setCheckedSkills({});
    setCheckedGate({});
    setCheckedCds({});
    localStorage.removeItem('kiit_checked_syllabus');
    localStorage.removeItem('kiit_checked_foundation');
    localStorage.removeItem('kiit_checked_skills');
    localStorage.removeItem('kiit_checked_gate');
    localStorage.removeItem('kiit_checked_cds');
  };

  return (
    <AppContext.Provider
      value={{
        scheme,
        setScheme,
        engineeringElective,
        setEngineeringElective,
        scienceElective,
        setScienceElective,
        gerElective,
        setGerElective,
        checkedSyllabus,
        toggleSyllabusTopic,
        checkedFoundation,
        toggleFoundationTopic,
        checkedSkills,
        toggleSkillTopic,
        checkedGate,
        toggleGateTopic,
        checkedCds,
        toggleCdsTopic,
        mySubscriptions,
        setMySubscriptions,
        darkMode,
        setDarkMode,
        explainSimply,
        setExplainSimply,
        activeView,
        setActiveView,
        resetProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
