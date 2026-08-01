import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MASTER_KNOWLEDGE_GRAPH,
  KnowledgeNode,
  MasteryStatus,
  calculateConceptHealth
} from '../data/knowledgeGraph';
import {
  Network,
  Sparkles,
  Brain,
  Layers,
  Activity,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Code,
  HelpCircle,
  Award,
  ExternalLink,
  Zap,
  FolderGit2
} from 'lucide-react';

export const KnowledgeGraphView: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('kn_math_calculus_1');
  const [masteryState, setMasteryState] = useState<Record<string, MasteryStatus>>(() => {
    const saved = localStorage.getItem('kiit_mastery_states');
    return saved ? JSON.parse(saved) : {
      'kn_math_fractions': 'Mastered',
      'kn_math_algebra_1': 'Practicing',
      'kn_math_calculus_1': 'Needs Revision'
    };
  });

  const [aiTutorOutput, setAiTutorOutput] = useState<string | null>(null);

  const selectedNode = MASTER_KNOWLEDGE_GRAPH.find(n => n.id === selectedNodeId) || MASTER_KNOWLEDGE_GRAPH[0];

  const updateMastery = (id: string, status: MasteryStatus) => {
    const next = { ...masteryState, [id]: status };
    setMasteryState(next);
    localStorage.setItem('kiit_mastery_states', JSON.stringify(next));
  };

  const handleAiAction = (actionName: string) => {
    if (actionName === 'Explain Simply') {
      setAiTutorOutput(`💡 Simple Analogy: ${selectedNode.detail.whatIsIt} Think of it like taking a instant camera snapshot of speed!`);
    } else if (actionName === 'Quiz Me') {
      setAiTutorOutput(`❓ Quiz Question: ${selectedNode.detail.interviewQuestions[0] || 'Explain the core intuition behind ' + selectedNode.title}`);
    } else if (actionName === 'Make Flashcards') {
      setAiTutorOutput(`🎴 Flashcard generated!\nQ: ${selectedNode.title}\nA: ${selectedNode.detail.whatIsIt}`);
    } else {
      setAiTutorOutput(`🤖 AI Tutor Action [${actionName}]: Activated for ${selectedNode.title}! Review key common mistakes: ${selectedNode.detail.commonMistakes.join(' | ')}`);
    }
  };

  const currentHealth = calculateConceptHealth();

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-500/30 backdrop-blur-md border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-semibold text-indigo-200 mb-3">
              <Network className="w-3.5 h-3.5 text-amber-300" />
              <span>Interconnected Master Knowledge Graph • 20-Year AI System</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Knowledge Universe & Dependency Graph 🕸️
            </h1>
            <p className="text-indigo-200 text-sm mt-1 max-w-xl font-medium">
              Every topic knows its prerequisites, applications, interview questions, and real-world usage. Stop memorizing in silos!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0 text-center space-y-1">
            <p className="text-[10px] text-amber-300 font-extrabold uppercase tracking-wider">Concept Health</p>
            <p className="text-3xl font-black text-emerald-400">{currentHealth}%</p>
            <p className="text-[10px] text-indigo-200 font-medium">Ebbinghaus Memory Curve</p>
          </div>
        </div>
      </div>

      {/* INTERACTIVE DEPENDENCY NODE BROWSER */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
        <h2 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Network className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span>Interactive Prerequisite Flow Graph</span>
        </h2>

        <div className="flex items-center space-x-3 overflow-x-auto pb-2">
          {MASTER_KNOWLEDGE_GRAPH.map((node, idx) => {
            const status = masteryState[node.id] || 'Not Started';
            const isSelected = selectedNodeId === node.id;

            return (
              <React.Fragment key={node.id}>
                <button
                  onClick={() => {
                    setSelectedNodeId(node.id);
                    setAiTutorOutput(null);
                  }}
                  className={`p-4 rounded-2xl border text-left shrink-0 transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-lg scale-105 border-indigo-500'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {node.category}
                    </span>
                    <span className={`text-[10px] font-bold ${
                      status === 'Mastered' ? 'text-emerald-400' : status === 'Needs Revision' ? 'text-amber-400' : 'text-slate-400'
                    }`}>
                      {status}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-xs">{node.title}</h3>
                </button>

                {idx < MASTER_KNOWLEDGE_GRAPH.length - 1 && (
                  <span className="text-slate-300 dark:text-slate-700 font-black text-sm shrink-0">↓</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* CONCEPT INSPECTOR WITH 9 UNIVERSAL ANSWERS */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300">
                {selectedNode.category}
              </span>
              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                Difficulty Level: {selectedNode.difficulty}/5
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
              {selectedNode.title}
            </h2>
          </div>

          {/* Mastery Status Picker */}
          <div className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700 shrink-0">
            <span className="text-xs font-bold text-slate-500 px-1">Status:</span>
            <select
              value={masteryState[selectedNode.id] || 'Not Started'}
              onChange={e => updateMastery(selectedNode.id, e.target.value as MasteryStatus)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-xs rounded-xl p-2 text-indigo-600 dark:text-indigo-400"
            >
              <option value="Not Started">Not Started</option>
              <option value="Learning">Learning</option>
              <option value="Practicing">Practicing</option>
              <option value="Needs Revision">Needs Revision</option>
              <option value="Mastered">⭐ Mastered</option>
              <option value="Forgotten">Forgotten</option>
            </select>
          </div>
        </div>

        {/* AI TUTOR INTERACTIVE ACTION BAR */}
        <div className="space-y-2">
          <p className="text-xs font-black uppercase text-indigo-600 dark:text-indigo-400 tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Interactive AI Tutor Tools</span>
          </p>

          <div className="flex flex-wrap gap-2">
            {['Explain Simply', 'Teach Me', 'Give Analogy', 'Quiz Me', 'Ask Harder', 'Make Flashcards', 'Create Mind Map'].map(action => (
              <button
                key={action}
                onClick={() => handleAiAction(action)}
                className="px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 font-extrabold text-xs transition-transform active:scale-95 border border-indigo-200/60 dark:border-indigo-800/60"
              >
                {action}
              </button>
            ))}
          </div>

          {/* AI Output Banner */}
          {aiTutorOutput && (
            <div className="p-4 rounded-2xl bg-indigo-900 text-white text-xs font-medium space-y-1 shadow-md animate-fade-in">
              <p className="whitespace-pre-line leading-relaxed">{aiTutorOutput}</p>
            </div>
          )}
        </div>

        {/* 9 UNIVERSAL ANSWERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h3 className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase">1. What Is This?</h3>
            <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{selectedNode.detail.whatIsIt}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h3 className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase">2. Why Learn It?</h3>
            <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{selectedNode.detail.whyLearnIt}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h3 className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase">3. Where Is It Used?</h3>
            <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{selectedNode.detail.whereUsed}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h3 className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase">4. Common Mistakes</h3>
            <ul className="list-disc list-inside text-xs text-slate-800 dark:text-slate-200 space-y-1 font-medium">
              {selectedNode.detail.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h3 className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase">5. Real-World Applications</h3>
            <ul className="list-disc list-inside text-xs text-slate-800 dark:text-slate-200 space-y-1 font-medium">
              {selectedNode.detail.realWorldApplications.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
            <h3 className="text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase">6. Technical Interview Questions</h3>
            <ul className="list-disc list-inside text-xs text-slate-800 dark:text-slate-200 space-y-1 font-medium">
              {selectedNode.detail.interviewQuestions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>
        </div>

        {/* Mini Project & Exam Qs */}
        <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-extrabold text-indigo-900 dark:text-indigo-200 flex items-center gap-1">
              <FolderGit2 className="w-4 h-4 text-indigo-600" /> Mini Project Idea:
            </span>
            <p className="text-slate-700 dark:text-slate-300 mt-0.5 font-semibold">{selectedNode.detail.miniProjectIdea}</p>
          </div>

          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(selectedNode.detail.youtubeQuery)}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs transition-colors shrink-0 flex items-center justify-center space-x-1.5"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Watch Video Lesson</span>
          </a>
        </div>
      </div>
    </div>
  );
};
