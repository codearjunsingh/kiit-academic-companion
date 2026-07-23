import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SKILL_TOPICS, SkillTopic } from '../data/skills';
import {
  Sparkles,
  CheckSquare,
  Square,
  Youtube,
  Tv,
  Check,
  Code2,
  Cpu,
  Brain,
  ChevronRight
} from 'lucide-react';

export const SkillsView: React.FC = () => {
  const {
    checkedSkills,
    toggleSkillTopic,
    mySubscriptions,
    explainSimply
  } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Programming Languages', 'CSE Core', 'AIML Specialization'];

  const filteredTopics = SKILL_TOPICS.filter(t => {
    if (activeCategory !== 'All' && t.category !== activeCategory) return false;
    return true;
  });

  const totalCount = SKILL_TOPICS.length;
  const checkedCount = SKILL_TOPICS.filter(t => checkedSkills[t.id]).length;
  const pct = Math.round((checkedCount / totalCount) * 100);

  return (
    <div className="space-y-6 pb-20">
      {/* Top Banner */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <h1 className="text-xl font-black text-slate-900 dark:text-white">
                Skills & Beyond-Syllabus Roadmap
              </h1>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              What college won’t fully teach in 1st year, but placements & AIML careers will demand.
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-amber-50 dark:bg-amber-950 p-3 rounded-xl border border-amber-200/60 dark:border-amber-900/60">
            <div>
              <p className="text-[10px] text-amber-700 dark:text-amber-400 font-extrabold uppercase">Skill Track Progress</p>
              <p className="text-xl font-black text-amber-900 dark:text-amber-100">{pct}% Completed</p>
            </div>
            <div className="w-20 bg-amber-200 dark:bg-amber-900 h-2.5 rounded-full overflow-hidden">
              <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="space-y-4">
        {filteredTopics.map(topic => {
          const isChecked = !!checkedSkills[topic.id];
          const topChannel = topic.recommendedChannels[0]?.name || '';
          const queryUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(topic.youtubeSearchQuery)}`;

          return (
            <div
              key={topic.id}
              className={`p-5 rounded-2xl border transition-all ${
                isChecked
                  ? 'bg-amber-50/30 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50 opacity-80'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Left info & checkbox */}
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {topic.category}
                    </span>
                  </div>

                  <div
                    onClick={() => toggleSkillTopic(topic.id)}
                    className="flex items-start space-x-3 cursor-pointer group"
                  >
                    <div className="mt-0.5 text-amber-500 shrink-0">
                      {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />}
                    </div>
                    <div>
                      <h3 className={`text-base font-extrabold text-slate-900 dark:text-white ${isChecked ? 'line-through opacity-75' : ''}`}>
                        {topic.topic}
                      </h3>
                      {explainSimply && (
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {topic.plainExplanation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Action Button */}
                <div className="self-end md:self-center shrink-0">
                  <a
                    href={queryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md shadow-red-500/20 flex items-center space-x-2"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Search on YouTube</span>
                  </a>
                </div>
              </div>

              {/* Recommended Channels List */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                  Curated Creator Recommendations:
                </p>
                <div className="flex flex-wrap gap-2">
                  {topic.recommendedChannels.map((creator, i) => {
                    // Check if user follows this creator
                    const isFollowed = mySubscriptions.some(
                      s => s.trim().toLowerCase() === creator.name.trim().toLowerCase() ||
                           creator.name.toLowerCase().includes(s.trim().toLowerCase()) && s.trim() !== ''
                    );

                    return (
                      <div
                        key={i}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center space-x-1.5 ${
                          isFollowed
                            ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <Tv className={`w-3.5 h-3.5 ${isFollowed ? 'text-emerald-600' : 'text-slate-400'}`} />
                        <span><strong>{creator.name}:</strong> {creator.note}</span>
                        {isFollowed && (
                          <span className="font-extrabold text-[10px] bg-emerald-200 dark:bg-emerald-900 px-1.5 py-0.5 rounded text-emerald-900 dark:text-emerald-100 flex items-center space-x-0.5">
                            <Check className="w-3 h-3" />
                            <span>Followed</span>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
