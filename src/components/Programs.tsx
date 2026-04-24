import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { PROGRAMS as STATIC_PROGRAMS } from '../data/programs';
import { ChevronRight, Search } from 'lucide-react';

export default function Programs({ filterType }: { filterType?: 'mastery' | 'short-course' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'mastery' | 'short-course'>(filterType || 'all');
  const navigate = useNavigate();

  const filteredPrograms = STATIC_PROGRAMS.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = filterType ? p.type === filterType : (activeTab === 'all' || p.type === activeTab);
    return matchesSearch && matchesTab;
  });

  return (
    <section id="programmes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Academic Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-cet-blue">
              {filterType === 'short-course' ? 'Short Courses.' : filterType === 'mastery' ? 'Professional Programmes.' : 'Professional Certification.'}
            </h3>
          </div>
          
          {/* Search & Tabs */}
          <div className="w-full lg:w-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder={filterType === 'short-course' ? 'Search short courses...' : 'Search programmes...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full lg:w-80 pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-cet-orange outline-none transition-all text-sm"
              />
            </div>
            {!filterType && (
              <div className="flex gap-2">
                {(['all', 'mastery', 'short-course'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 lg:flex-none px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border ${
                      activeTab === tab 
                        ? 'bg-cet-blue text-white border-cet-blue' 
                        : 'bg-transparent text-slate-400 border-slate-200 hover:border-cet-blue'
                    }`}
                  >
                    {tab.replace('-', ' ')}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              key={program.id}
              className="group bg-white border border-slate-100 flex flex-col p-8 transition-all hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden cursor-pointer"
              onClick={() => navigate(filterType === 'short-course' ? `/short-courses/${program.id}` : `/programmes/${program.id}`)}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="px-3 py-1 bg-cet-blue text-white text-[8px] font-bold uppercase tracking-widest">
                  {program.type === 'mastery' ? 'Professional' : 'Short Course'}
                </span>
                <span className="text-[10px] font-mono text-slate-200">
                  REF-{String(index + 10).padStart(3, '0')}
                </span>
              </div>

              <div className="aspect-[3/4] overflow-hidden mb-8 bg-slate-50 relative">
                {program.imageUrl && (
                  <img 
                    src={program.imageUrl} 
                    alt={program.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-cet-blue/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <Link onClick={(e) => e.stopPropagation()} to={filterType === 'short-course' ? `/short-courses/${program.id}` : `/programmes/${program.id}`} className="block">
                <h4 className="text-xl font-display font-extrabold text-cet-blue mb-4 leading-tight hover:text-cet-orange transition-colors uppercase tracking-tight">
                  {program.title}
                </h4>
              </Link>
              
              <p className="text-slate-500 text-xs mb-10 leading-relaxed line-clamp-3 font-light">
                {program.overview}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                <Link 
                  onClick={(e) => e.stopPropagation()}
                  to={filterType === 'short-course' ? `/short-courses/${program.id}` : `/programmes/${program.id}`}
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cet-blue hover:text-cet-orange transition-colors"
                >
                  View Curriculum <ChevronRight size={14} className="text-cet-orange" />
                </Link>
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-cet-orange transition-colors"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="py-20 text-center border-b border-r border-l border-cet-blue/10">
            <p className="text-slate-400 font-display italic">No programmes found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}

