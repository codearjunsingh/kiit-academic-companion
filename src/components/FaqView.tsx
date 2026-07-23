import React, { useState } from 'react';
import { KIIT_FAQS, FaqItem } from '../data/faq';
import { STUDENT_PROFILE } from '../data/profile';
import { HelpCircle, ChevronDown, ChevronUp, Mail, Search } from 'lucide-react';

export const FaqView: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Accounts & SAP', 'Exams & Marks', 'Rules & Regulations', 'Mentoring & Outing'];

  const filteredFaqs = KIIT_FAQS.filter(faq => {
    if (activeCategory !== 'All' && faq.category !== activeCategory) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="space-y-6 pb-20">
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Official KIIT Student FAQs</h1>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Official guidelines, contact emails, year-back rules, attendance requirements, and SAP helpdesks.
        </p>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search questions (e.g. attendance, SAP, missed exam)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map(faq => {
          const isOpen = openFaq === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-all"
            >
              <div
                onClick={() => toggleFaq(faq.id)}
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                    {faq.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{faq.question}</h3>
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
              </div>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed whitespace-pre-line">
                  <p>{faq.answer}</p>

                  {faq.actionEmail && (
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                      <span className="font-bold text-slate-700 dark:text-slate-200">Official Action Email:</span>
                      <a
                        href={`mailto:${faq.actionEmail}?cc=${STUDENT_PROFILE.mentor1.email}`}
                        className="px-3 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center space-x-1.5"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email {faq.actionEmail} {faq.ccMentor ? '(CC Mentor)' : ''}</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
