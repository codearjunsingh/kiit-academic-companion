import React, { useState } from 'react';
import { UNIVERSAL_RESOURCES, LibraryResource } from '../data/universalLibrary';
import { BookOpen, ExternalLink, Search, Tag, FileText } from 'lucide-react';

export const UniversalLibraryView: React.FC = () => {
  const [query, setQuery] = useState('');

  const filtered = UNIVERSAL_RESOURCES.filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase()) ||
    r.authorOrSource.toLowerCase().includes(query.toLowerCase()) ||
    r.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>Universal Reading & Resource Knowledge Base</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Universal Reading System 📚
            </h1>
            <p className="text-blue-200 text-sm mt-1 max-w-xl font-medium">
              Auto-tagged repository for textbooks, PDFs, research papers, YouTube playlists, and GitHub repos.
            </p>
          </div>

          <div className="relative shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search resources or tags..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full sm:w-64 pl-9 pr-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white placeholder-blue-200 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* RESOURCE LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(res => (
          <div key={res.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-black px-2.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                {res.type}
              </span>
              <span className="text-xs font-bold text-slate-500">{res.category}</span>
            </div>

            <h3 className="text-base font-black text-slate-900 dark:text-white">
              {res.title}
            </h3>

            <p className="text-xs text-slate-500 font-medium">
              Source: {res.authorOrSource}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {res.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 dark:text-slate-400 font-semibold flex items-center gap-1">
                  <Tag className="w-2.5 h-2.5" /> {tag}
                </span>
              ))}
            </div>

            <a
              href={res.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-indigo-600 dark:text-indigo-400 hover:underline pt-2"
            >
              <span>Access Resource</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
