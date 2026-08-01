import React, { useState } from 'react';
import { YOUTUBE_CHANNELS, ChannelInfo } from '../data/channels';
import { FACULTY_EVALUATION } from '../data/faculty';
import { useApp } from '../context/AppContext';
import { Tv, CheckCircle2, Plus, ExternalLink, Sparkles, Youtube, Award, User, Star } from 'lucide-react';

export const ChannelDirectoryView: React.FC = () => {
  const { mySubscriptions, setMySubscriptions } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<'pw_faculty' | 'youtube_creators'>('pw_faculty');

  const toggleSubscription = (channelName: string) => {
    if (mySubscriptions.includes(channelName)) {
      setMySubscriptions(mySubscriptions.filter(c => c !== channelName));
    } else {
      setMySubscriptions([...mySubscriptions, channelName]);
    }
  };

  const filteredCreators = YOUTUBE_CHANNELS.filter(creator => {
    if (selectedCategory === 'All') return true;
    return creator.category === selectedCategory;
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-500/30 backdrop-blur-md border border-purple-400/30 px-3 py-1 rounded-full text-xs font-semibold text-purple-200 mb-3">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Recommended Educators • KIIT & GATE 2029</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Faculty & Top YouTube Educators Directory 🎓
            </h1>
            <p className="text-purple-200 text-sm mt-1 max-w-xl font-medium">
              Evaluations of your PW Nirmaan batch faculty along with top YouTube creators for KIIT semester preparation.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex items-center space-x-1.5 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shrink-0">
            <button
              onClick={() => setActiveTab('pw_faculty')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'pw_faculty'
                  ? 'bg-white text-purple-900 shadow-md'
                  : 'text-purple-200 hover:text-white'
              }`}
            >
              PW Faculty Guide
            </button>
            <button
              onClick={() => setActiveTab('youtube_creators')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                activeTab === 'youtube_creators'
                  ? 'bg-white text-purple-900 shadow-md'
                  : 'text-purple-200 hover:text-white'
              }`}
            >
              YouTube Channels
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: PW NIRMAAN FACULTY EVALUATION & TEACHER GUIDE */}
      {activeTab === 'pw_faculty' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span>PW Nirmaan 2029 Batch Faculty & Top Teacher Recommendations</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Evaluated based on student ratings, IISc research background, and exam efficiency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FACULTY_EVALUATION.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-purple-300 dark:hover:border-purple-800 transition-all"
              >
                <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400 tracking-wider">
                      Subject
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                      {item.subject}
                    </h3>
                  </div>
                  <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-200 shrink-0">
                    {item.pwRating}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-purple-50/50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 text-xs">
                  <p className="font-extrabold text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-purple-600" />
                    <span>PW Faculty: {item.pwFaculty}</span>
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-[11px] leading-relaxed">
                    {item.reviewSummary}
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Recommended YouTube Teachers & Playlists
                  </p>
                  {item.topYoutubeCreators.map((yt, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{yt.name} ({yt.channel})</p>
                        <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Best for: {yt.bestFor}</p>
                      </div>
                      <a
                        href={yt.url}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-extrabold text-[11px] hover:bg-red-100 flex items-center space-x-1"
                      >
                        <Youtube className="w-3 h-3 text-red-500" />
                        <span>Search</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: YOUTUBE CHANNELS DIRECTORY */}
      {activeTab === 'youtube_creators' && (
        <div className="space-y-6">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            {['All', 'Class 11-12 Foundation', 'C-C++-Python', 'CSE Core', 'AIML Specialization'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Creators Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCreators.map(creator => {
              const isSubbed = mySubscriptions.includes(creator.name);
              const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(creator.name)}`;

              return (
                <div
                  key={creator.name}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-600 font-bold shrink-0">
                          <Youtube className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug">
                            {creator.name}
                          </h3>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{creator.category}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                      {creator.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {creator.topicsCovered.map(topic => (
                        <span key={topic} className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    <button
                      onClick={() => toggleSubscription(creator.name)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1 ${
                        isSubbed
                          ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 border border-emerald-200'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      {isSubbed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>{isSubbed ? 'Saved' : 'Save Channel'}</span>
                    </button>

                    <a
                      href={searchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs transition-colors flex items-center space-x-1"
                    >
                      <span>Open YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
