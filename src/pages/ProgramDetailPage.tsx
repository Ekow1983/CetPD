import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROGRAMS as STATIC_PROGRAMS } from '../data/programs';
import { ChevronLeft, CheckCircle, Target, Users, TrendingUp, BookOpen, Clock, CreditCard, Calendar, Monitor, Award, ShieldCheck, ArrowRight, Maximize2, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProgramDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  
  const program = STATIC_PROGRAMS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!program) {
      navigate('/programmes');
    }
  }, [program, navigate]);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!program?.imageUrl) return;
    
    try {
      const response = await fetch(program.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${program.title}-Brochure.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Fallback
      window.open(program.imageUrl, '_blank');
    }
  };

  if (!program) return null;

  return (
    <main className="pt-32 sm:pt-40 bg-slate-50/50 min-h-screen">
      {/* Institutional Hero Section */}
      <section className="bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Content Column */}
            <div className="lg:w-1/2 py-20 lg:pr-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-12">
                  <Link to="/programmes" className="group flex items-center gap-2 text-slate-400 hover:text-cet-blue transition-colors text-[10px] font-bold uppercase tracking-[0.2em]">
                    <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                    Back to Programmes
                  </Link>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cet-orange">
                    {program.type === 'mastery' ? 'Professional Certification' : 'Executive Course'}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-display font-extrabold text-cet-blue leading-[1.1] tracking-tight mb-8">
                  {program.title}
                </h1>

                <div className="flex flex-wrap gap-4 mb-12">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-sm">
                    <ShieldCheck size={16} className="text-cet-orange" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Accredited by CIAMC</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-sm">
                    <Award size={16} className="text-cet-orange" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Professional License</span>
                  </div>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed max-w-xl mb-12 font-light">
                  {program.overview.length > 200 ? program.overview.substring(0, 200) + '...' : program.overview}
                </p>

                <div className="flex items-center gap-6">
                  <Link 
                    to="/apply" 
                    className="px-10 py-5 bg-cet-blue text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-cet-orange transition-all shadow-xl shadow-cet-blue/10 flex items-center gap-3 group"
                  >
                    Start Admission <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href="#curriculum" className="text-xs font-bold uppercase tracking-[0.2em] text-cet-blue hover:text-cet-orange transition-colors">
                    View Syllabus
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Image/Visual Column */}
            <div className="lg:w-1/2 relative bg-slate-100 group cursor-zoom-in" onClick={() => setIsImageExpanded(true)}>
              <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                {program.imageUrl && (
                  <img 
                    src={program.imageUrl} 
                    alt={program.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                )}
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent hidden lg:block"></div>
                
                {/* Enlarge Icon */}
                <div className="absolute inset-0 bg-cet-blue/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="text-cet-blue" />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Quote/Detail */}
              <div className="absolute top-12 right-12 bg-white/90 backdrop-blur-md p-8 border border-white/20 shadow-2xl hidden xl:block max-w-[280px] pointer-events-none">
                <p className="text-cet-blue font-display font-medium italic text-sm leading-relaxed mb-4">
                  "Designed for the next generation of professional leaders across West Africa's corporate landscape."
                </p>
                <div className="h-px w-12 bg-cet-orange"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Banner */}
      <div className="bg-slate-100 border-b border-slate-200 py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-12 sm:gap-24 grayscale opacity-40">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">CIAMC Registered</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Industry Standard</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-6 w-6 border-2 border-slate-400"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest">Certified Program</span>
          </div>
        </div>
      </div>

      {/* Programme Specs Grid */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
            {[
              { icon: <Clock size={20} />, label: "Duration", value: program.duration || "Self-paced", sub: "Flexible Delivery" },
              { icon: <CreditCard size={20} />, label: "Fee Structure", value: program.fee ? program.fee.split('(')[0] : "Contact us", sub: program.fee?.includes('(') ? program.fee.split('(')[1].replace(')', '') : "Installment plans" },
              { icon: <Calendar size={20} />, label: "Next Intake", value: program.startDate || "Rolling Admission", sub: "Apply anytime" },
              { icon: <Monitor size={20} />, label: "Learning Mode", value: program.onlineOption ? "Hybrid (accra/Virtual)" : "Campus Only", sub: "Interactive Sessions" }
            ].map((item, i) => (
              <div key={i} className="py-12 px-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-slate-50 text-cet-orange">{item.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{item.label}</span>
                </div>
                <h4 className="text-cet-blue font-bold text-lg mb-1">{item.value}</h4>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Core Content */}
            <div className="lg:col-span-8 space-y-24">
              
              {/* Detailed Overview */}
              <div id="overview" className="scroll-mt-40">
                <div className="mb-10 text-center lg:text-left">
                  <h2 className="text-3xl font-display font-extrabold text-cet-blue mb-6">Experience Excellence</h2>
                  <div className="h-1 w-20 bg-cet-orange mx-auto lg:mx-0"></div>
                </div>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-600 leading-[1.8] font-light">
                    {program.overview}
                  </p>
                </div>
              </div>

              {/* Syllabus / Curriculum */}
              <div id="curriculum" className="scroll-mt-40">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h2 className="text-3xl font-display font-extrabold text-cet-blue mb-4">The Curriculum</h2>
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Bridging theory and professional practice</p>
                  </div>
                  <div className="hidden sm:block text-right">
                    <span className="text-4xl font-display font-black text-slate-100">{program.modules.length}</span>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest -mt-2">Academic Modules</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {program.modules.map((module, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="p-8 bg-white border border-slate-200 group hover:border-cet-blue transition-all"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-cet-orange font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1 bg-slate-100"></div>
                      </div>
                      <h4 className="text-cet-blue font-bold text-base leading-snug uppercase tracking-tight group-hover:text-cet-orange transition-colors">
                        {module.includes(':') ? module.split(':')[0] : module}
                      </h4>
                      {module.includes(':') && (
                        <p className="mt-4 text-xs text-slate-500 leading-relaxed font-light">
                          {module.split(':')[1]}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Learning Objectives */}
              {program.objectives && (
                <div className="bg-cet-blue rounded-sm p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                  {/* Subtle water mark */}
                  <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none transform rotate-12">
                    <ShieldCheck size={400} />
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-3xl font-display font-extrabold mb-16 border-l-4 border-cet-orange pl-8">Strategic Outcomes</h2>
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                      {program.objectives.map((obj, index) => (
                        <div key={index} className="flex gap-6 items-start group">
                          <CheckCircle className="text-cet-orange shrink-0 mt-1" size={24} />
                          <p className="text-slate-300 leading-relaxed text-sm font-light py-0.5 group-hover:text-white transition-colors">
                            {obj}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Structured Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Admissions sidebar */}
              <div className="p-10 border border-slate-200 bg-white">
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                  <TrendingUp className="text-cet-orange" size={20} />
                  <h3 className="text-lg font-display font-bold text-cet-blue">Admissions</h3>
                </div>
                <ul className="space-y-6">
                  {(program.requirements || program.eligibility || []).map((req, index) => (
                    <li key={index} className="flex items-start gap-4 text-xs text-slate-500 group">
                      <div className="w-1 h-3 bg-slate-200 mt-1 group-hover:bg-cet-orange transition-colors"></div>
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialisations */}
              {program.specialisations && (
                <div className="p-10 bg-slate-900 text-white">
                  <h3 className="text-lg font-display font-bold mb-8 text-cet-orange flex items-center gap-3">
                    <Target size={20} /> Path Specialty
                  </h3>
                  <div className="space-y-4">
                    {program.specialisations.map((spec, index) => (
                      <div key={index} className="flex items-center gap-3 text-xs font-light text-slate-400 group cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full border border-cet-orange/40 group-hover:bg-cet-orange"></div>
                        {spec}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Professional Profile */}
              {program.targetGroup && (
                <div className="p-10 border border-slate-200 bg-white">
                  <h3 className="text-lg font-display font-bold text-cet-blue mb-8">Executive Profile</h3>
                  <div className="flex flex-wrap gap-2">
                    {program.targetGroup.map((target, index) => (
                      <span key={index} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-400 text-[9px] font-bold uppercase tracking-wider">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Final Application State */}
              <div className="p-12 bg-cet-blue text-center text-white relative overflow-hidden group">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '15px 15px' }}></div>
                
                <h3 className="text-2xl font-display font-bold mb-2">Accelerate Your Career</h3>
                <p className="text-white/60 mb-10 text-[10px] font-bold uppercase tracking-[0.2em]">Join established professionals</p>
                
                <div className="space-y-4">
                  <button 
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-cet-blue font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-slate-100 transition-all w-full shadow-lg"
                  >
                    <Download size={14} /> Download Brochure
                  </button>
                  <Link 
                    to="/apply" 
                    className="inline-block px-10 py-5 bg-cet-orange text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:scale-105 active:scale-95 transition-all w-full shadow-lg shadow-black/10"
                  >
                    Apply Now
                  </Link>
                </div>
                <p className="mt-8 text-xs text-white/40">Next application deadline: June 15, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Enlarge Lightbox */}
      <AnimatePresence>
        {isImageExpanded && program.imageUrl && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-cet-blue/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12 cursor-zoom-out"
            onClick={() => setIsImageExpanded(false)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsImageExpanded(false)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.05, opacity: 0, y: -20 }}
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={program.imageUrl} 
                alt={program.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[85vh] object-contain shadow-2xl" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
