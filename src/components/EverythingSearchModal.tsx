import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { MASTER_KNOWLEDGE_GRAPH } from '../data/knowledgeGraph';
import { FOUNDATION_ZERO_TOPICS } from '../data/foundationZero';
import { OFFICIAL_FIRST_YEAR_TEXTBOOKS } from '../data/books';
import { CODING_TRACKS } from '../data/codingHq';
import {
  Search,
  X,
  BookOpen,
  Network,
  Code,
  Layers,
  FileText,
  ArrowRight
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const EverythingSearchModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { setActiveView } = useApp();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search Results
  const matchingGraphNodes = q ? MASTER_KNOWLEDGE_GRAPH.filter(n =>
    n.title.toLowerCase().includes(q) ||
    n.category.toLowerCase().includes(q) ||
    n.detail.whatIsIt.toLowerCase().includes(q)
  ) : [];

  const matchingZeroTopics = q ? FOUNDATION_ZERO_TOPICS.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.subject.toLowerCase().includes(q) ||
    t.plainAnalogy.toLowerCase().includes(q)
  ) : [];

  const matchingBooks = q ? OFFICIAL_FIRST_YEAR_TEXTBOOKS.filter(b =>
    b.title.toLowerCase().includes(q) ||
    b.author.toLowerCase().includes(q) ||
    b.index.some(ch => ch.chapterTitle.toLowerCase().includes(q))
  ) : [];

  const matchingCoding = q ? CODING_TRACKS.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.keyConcepts.some(c => c.toLowerCase().includes(q))
  ) : [];

  const handleSelect = (viewId: string) => {
    setActiveView(viewId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center space-x-3 shrink-0">
          <Search className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search EVERYTHING (Calculus, Pointers, Kreyszig, Newton, Matrix)..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-slate-900 dark:text-white focus:outline-none placeholder-slate-400"
          />
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto space-y-4 text-xs">
          {!query && (
            <div className="text-center py-10 text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="font-bold">Type to search notes, concepts, 9 textbooks, videos & coding tracks!</p>
            </div>
          )}

          {/* Knowledge Graph Results */}
          {matchingGraphNodes.length > 0 && (
            <div className="space-y-2">
              <p className="font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1">
                <Network className="w-3.5 h-3.5" /> Knowledge Universe Nodes ({matchingGraphNodes.length})
              </p>
              {matchingGraphNodes.map(n => (
                <div
                  key={n.id}
                  onClick={() => handleSelect('knowledgeGraph')}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 cursor-pointer border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{n.title}</span>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{n.detail.whatIsIt}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-500 shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* Zero to Hero Results */}
          {matchingZeroTopics.length > 0 && (
            <div className="space-y-2">
              <p className="font-black text-teal-600 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Zero-to-Hero Class 6-12 ({matchingZeroTopics.length})
              </p>
              {matchingZeroTopics.map(t => (
                <div
                  key={t.id}
                  onClick={() => handleSelect('foundationZero')}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-teal-50 dark:hover:bg-teal-950/40 cursor-pointer border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{t.title}</span>
                    <p className="text-[11px] text-slate-500 line-clamp-1">Analogy: {t.plainAnalogy}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-teal-500 shrink-0" />
                </div>
              ))}
            </div>
          )}

          {/* Physical Textbooks Results */}
          {matchingBooks.length > 0 && (
            <div className="space-y-2">
              <p className="font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" /> 1st Year Textbooks ({matchingBooks.length})
              </p>
              {matchingBooks.map(b => (
                <div
                  key={b.id}
                  onClick={() => handleSelect('subjects')}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 cursor-pointer border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{b.title}</span>
                    <p className="text-[11px] text-slate-500">Author: {b.author} • {b.publisher}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-500 shrink-0" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
