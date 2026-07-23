import React from 'react';
import { useApp } from '../context/AppContext';
import { YOUTUBE_CHANNELS } from '../data/channels';
import { Tv, Youtube, Check, ExternalLink } from 'lucide-react';

export const ChannelDirectoryView: React.FC = () => {
  const { mySubscriptions } = useApp();

  return (
    <div className="space-y-6 pb-20">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center space-x-2">
          <Tv className="w-6 h-6 text-red-500" />
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Recommended Creator Directory</h1>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Hand-picked YouTube educators for KIIT engineering subjects, CSE core, and AIML track.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {YOUTUBE_CHANNELS.map((ch, idx) => {
          const isFollowed = mySubscriptions.some(
            s => s.trim().toLowerCase() === ch.name.trim().toLowerCase() ||
                 ch.name.toLowerCase().includes(s.trim().toLowerCase()) && s.trim() !== ''
          );

          const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ch.name)}`;

          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isFollowed
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {ch.category} • {ch.language}
                  </span>
                  {isFollowed && (
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Followed
                    </span>
                  )}
                </div>

                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{ch.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{ch.description}</p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {ch.topicsCovered.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                <a
                  href={searchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md shadow-red-500/20 flex items-center space-x-1.5"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Open Channel</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
