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

  checkedFoundationZero: Record<string, boolean>;
  toggleFoundationZeroTopic: (id: string) => void;

  confidenceRatings: Record<string, number>;
  setConfidenceRating: (id: string, stars: number) => void;

  foundationStreak: number;
  incrementFoundationStreak: () => void;
  
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

  const [checkedFoundationZero, setCheckedFoundationZero] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_checked_foundation_zero');
    return saved ? JSON.parse(saved) : {};
  });

  const [confidenceRatings, setConfidenceRatings] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('kiit_confidence_ratings');
    return saved ? JSON.parse(saved) : {};
  });

  const [foundationStreak, setFoundationStreak] = useState<number>(() => {
    const saved = localStorage.getItem('kiit_foundation_streak');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [checkedSkills, setCheckedSkills] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_checked_skills');
    return saved ? JSON.parse(saved) : {};
  });

  const [checkedGate, setCheckedGate] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('kiit_gate_checked_topics') || localStorage.getItem('kiit_checked_gate');
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
    localStorage.setItem('kiit_checked_foundation_zero', JSON.stringify(checkedFoundationZero));
  }, [checkedFoundationZero]);

  useEffect(() => {
    localStorage.setItem('kiit_confidence_ratings', JSON.stringify(confidenceRatings));
  }, [confidenceRatings]);

  useEffect(() => {
    localStorage.setItem('kiit_foundation_streak', foundationStreak.toString());
  }, [foundationStreak]);

  useEffect(() => {
    localStorage.setItem('kiit_checked_skills', JSON.stringify(checkedSkills));
  }, [checkedSkills]);

  useEffect(() => {
    localStorage.setItem('kiit_checked_gate', JSON.stringify(checkedGate));
    localStorage.setItem('kiit_gate_checked_topics', JSON.stringify(checkedGate));
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

  const toggleFoundationZeroTopic = (id: string) => {
    setCheckedFoundationZero(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const setConfidenceRating = (id: string, stars: number) => {
    setConfidenceRatings(prev => ({ ...prev, [id]: stars }));
  };

  const incrementFoundationStreak = () => {
    setFoundationStreak(prev => prev + 1);
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
    setCheckedFoundationZero({});
    setConfidenceRatings({});
    setFoundationStreak(0);
    setCheckedSkills({});
    setCheckedGate({});
    setCheckedCds({});
    const keysToRemove = [
      'kiit_checked_syllabus',
      'kiit_checked_foundation',
      'kiit_checked_foundation_zero',
      'kiit_confidence_ratings',
      'kiit_foundation_streak',
      'kiit_checked_skills',
      'kiit_checked_gate',
      'kiit_gate_checked_topics',
      'kiit_checked_cds',
      'cds_questions_solved',
      'kiit_coding_solved_count',
      'kiit_prereq_inspector_checked',
      'kiit_mastery_states',
      'kiit_brain_dumps',
      'kiit_failure_logs',
      'kiit_decision_journal',
      'kiit_experiments_log'
    ];
    keysToRemove.forEach(k => localStorage.removeItem(k));
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
        checkedFoundationZero,
        toggleFoundationZeroTopic,
        confidenceRatings,
        setConfidenceRating,
        foundationStreak,
        incrementFoundationStreak,
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
