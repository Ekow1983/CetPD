import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROGRAMS as STATIC_PROGRAMS } from '../data/programs';
import { ChevronRight, Search } from 'lucide-react';

export default function Programs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'mastery' | 'short-course'>('all');

  const filteredPrograms = STATIC_PROGRAMS.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || p.type === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <section id="programmes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Academic Portfolio</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-cet-blue">Professional Certification.</h3>
          </div>
          
          {/* Search & Tabs */}
          <div className="w-full lg:w-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search programmes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full lg:w-80 pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-cet-orange outline-none transition-all text-sm"
              />
            </div>
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
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-cet-blue/10">
          {filteredPrograms.map((program, index) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              key={program.id}
              className="border-r border-b border-cet-blue/10 flex flex-col hover:bg-slate-50 transition-colors group"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-slate-100 flex-shrink-0">
                <img 
                  src={program.imageUrl || "https://picsum.photos/seed/cert/800/600"} 
                  alt={program.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cet-blue/20 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-cet-orange text-white px-3 py-1 text-[8px] font-bold uppercase tracking-widest">
                    {program.type === 'mastery' ? 'Mastery' : 'Short Course'}
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-mono text-slate-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="text-lg font-display font-bold text-cet-blue mb-4 leading-tight group-hover:text-cet-orange transition-colors">
                  {program.title}
                </h4>
                <p className="text-slate-500 text-xs mb-8 leading-relaxed line-clamp-3">
                  {program.overview}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6">
                  <Link 
                    to={`/programmes/${program.id}`}
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cet-blue hover:text-cet-orange transition-colors"
                  >
                    View Details <ChevronRight size={14} />
                  </Link>
                  <Link 
                    to="/apply" 
                    className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-cet-blue transition-colors"
                  >
                    Apply
                  </Link>
                </div>
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

