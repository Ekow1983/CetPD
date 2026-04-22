import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROGRAMS as STATIC_PROGRAMS } from '../data/programs';
import { ChevronLeft, CheckCircle, Target, Users, TrendingUp, BookOpen, Clock, CreditCard, Calendar, Monitor, Gem } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProgramDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const program = STATIC_PROGRAMS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!program) {
      navigate('/programmes');
    }
  }, [program, navigate]);

  if (!program) return null;

  return (
    <main className="pt-32 sm:pt-40 bg-white">
      {/* Editorial Hero Header */}
      <section className="relative bg-cet-blue text-white overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cet-orange opacity-5 skew-x-12 translate-x-20"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full -translate-x-32"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/programmes" className="inline-flex items-center gap-2 text-cet-orange mb-10 hover:gap-4 transition-all uppercase text-[10px] font-bold tracking-[0.4em]">
                  <ChevronLeft size={16} /> Back to Academic Portfolio
                </Link>
                <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-10">
                  {program.title.split('(')[0]}
                  {program.title.includes('(') && (
                    <span className="block text-cet-orange italic mt-4">
                      ({program.title.split('(')[1]}
                    </span>
                  )}
                </h1>
                <div className="flex items-center gap-6">
                  <div className="px-6 py-2 bg-cet-orange text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    {program.type === 'mastery' ? 'Executive Mastery' : 'Certification'}
                  </div>
                  <div className="h-px w-24 bg-white/20"></div>
                  <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    Established Excellence
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                {program.imageUrl && (
                  <div className="aspect-[4/5] overflow-hidden border-[16px] border-white/5 shadow-2xl relative">
                    <img 
                      src={program.imageUrl} 
                      alt={program.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-cet-blue/10"></div>
                  </div>
                )}
                {/* Float Badge */}
                <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-2xl hidden sm:block border-t-4 border-cet-orange transform -rotate-3">
                  <Gem className="text-cet-orange mb-4" size={32} />
                  <p className="text-cet-blue font-display font-bold text-lg leading-tight">Accredited <br />Professional License</p>
                </div>
                {/* Decorative lines */}
                <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-cet-orange/20 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Info Bar */}
      <section className="border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            {[
              { icon: <Clock size={20} />, label: "Duration", value: program.duration || "Self-paced" },
              { icon: <CreditCard size={20} />, label: "Tuition", value: program.fee || "Contact Sales" },
              { icon: <Calendar size={20} />, label: "Starts", value: program.startDate || "Rolling Admission" },
              { icon: <Monitor size={20} />, label: "Format", value: program.onlineOption ? "Hybrid / Online" : "In-Person Only" }
            ].map((item, i) => (
              <div key={i} className="py-10 px-8 flex flex-col items-center text-center">
                <div className="text-cet-orange mb-3">{item.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</span>
                <span className="text-cet-blue font-bold text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Detailed Content */}
            <div className="lg:col-span-8 space-y-24">
              {/* Overview Section */}
              <div className="relative">
                <div className="absolute -left-10 top-0 w-1 h-full bg-slate-100 hidden lg:block"></div>
                <h2 className="text-3xl font-display font-bold text-cet-blue mb-8 flex items-center gap-4">
                  <BookOpen className="text-cet-orange" size={28} /> Programme Overview
                </h2>
                <p className="text-slate-600 text-xl leading-relaxed font-light italic border-l-4 border-cet-orange/10 pl-8">
                  {program.overview}
                </p>
              </div>

              {/* Modules Section with custom cards */}
              <div>
                <h2 className="text-3xl font-display font-bold text-cet-blue mb-12 flex items-center gap-4">
                  <CheckCircle className="text-cet-orange" size={28} /> Core Curriculum
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {program.modules.map((module, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 bg-slate-50 border border-slate-100 hover:border-cet-orange/40 hover:bg-white hover:shadow-xl transition-all group"
                    >
                      <div className="text-[10px] font-mono text-slate-300 mb-4 group-hover:text-cet-orange transition-colors">
                        MODULE {String(index + 1).padStart(2, '0')}
                      </div>
                      <h4 className="text-cet-blue font-bold text-lg leading-tight uppercase tracking-tight">
                        {module.includes(':') ? module.split(':')[0] : module}
                      </h4>
                      {module.includes(':') && (
                        <p className="mt-4 text-sm text-slate-500 leading-relaxed font-light">
                          {module.split(':')[1]}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Objectives Section */}
              {program.objectives && (
                <div className="bg-cet-blue p-12 md:p-20 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-display font-bold mb-12 flex items-center gap-4">
                      <Target className="text-cet-orange" size={28} /> Learning Objectives
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                      {program.objectives.map((obj, index) => (
                        <div key={index} className="flex gap-6">
                          <span className="text-cet-orange font-display font-black text-4xl opacity-40">
                             {String(index + 1).padStart(2, '0')}
                          </span>
                          <p className="text-slate-300 leading-relaxed font-light py-2">
                            {obj}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Sidebar */}
            <div className="lg:col-span-4 space-y-16">
              {/* Admissions requirements */}
              <div className="p-10 border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100">
                <h3 className="text-xl font-display font-bold text-cet-blue mb-8 border-b border-slate-100 pb-4">
                  Entry Criteria
                </h3>
                <ul className="space-y-6">
                  {(program.requirements || program.eligibility || []).map((req, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-cet-orange mt-2 shrink-0"></div>
                      <span className="text-xs text-slate-500 leading-relaxed font-medium">
                        {req}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialisations if any */}
              {program.specialisations && (
                <div className="p-10 bg-slate-900 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cet-orange blur-[80px] opacity-20"></div>
                  <h3 className="text-xl font-display font-bold mb-8 text-cet-orange">Specialisations</h3>
                  <div className="space-y-3">
                    {program.specialisations.map((spec, index) => (
                      <div key={index} className="text-sm font-light text-slate-400 py-2 border-b border-white/5">
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Group */}
              {program.targetGroup && (
                <div className="p-10 border border-cet-blue/10 bg-slate-50">
                  <h3 className="text-xl font-display font-bold text-cet-blue mb-8 flex items-center gap-3">
                    <Users className="text-cet-orange" size={20} /> Professional Profile
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {program.targetGroup.map((target, index) => (
                      <span key={index} className="px-4 py-2 bg-white border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Investment summary */}
              {program.investment && (
                <div className="p-10 bg-cet-orange text-white">
                  <h3 className="text-xl font-display font-bold mb-8">Investment Summary</h3>
                  <div className="space-y-4">
                    {program.investment.map((line, index) => (
                      <div key={index} className={`flex justify-between items-center text-xs ${line.includes('Total') ? 'pt-4 border-t border-white/30 font-black' : 'opacity-80'}`}>
                        <span>{line.split(':')[0]}</span>
                        <span className="font-bold">{line.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Final CTA */}
              <div className="relative group overflow-hidden bg-cet-blue p-12 text-center text-white">
                <div className="absolute inset-0 bg-cet-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-cet-blue">Start Your Journey</h3>
                  <p className="text-white/60 mb-10 text-sm font-light group-hover:text-cet-blue/80">
                    Join elite professionals across West Africa today.
                  </p>
                  <Link 
                    to="/apply" 
                    className="inline-block px-10 py-4 bg-white text-cet-blue font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all w-full"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
