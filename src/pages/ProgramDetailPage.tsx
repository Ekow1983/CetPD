import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROGRAMS as STATIC_PROGRAMS } from '../data/programs';
import { ChevronLeft, CheckCircle, Target, Users, TrendingUp, BookOpen } from 'lucide-react';

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
    <main className="pt-32 sm:pt-40">
      {/* Header */}
      <div className="bg-cet-blue py-32 text-white relative overflow-hidden">
        <img 
          src={(program.imageUrl || "/images/a11.jpg").replace('.jpeg', '.jpg')} 
          alt="Course Header" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cet-blue via-cet-blue/60 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/programmes" className="inline-flex items-center gap-2 text-cet-orange mb-8 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest">
            <ChevronLeft size={16} /> Back to Programmes
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold max-w-4xl leading-tight">
            {program.title}
          </h1>
          <div className="mt-8 inline-block bg-cet-orange px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
            {program.type === 'mastery' ? 'Executive Mastery Programme' : 'Executive Short Course'}
          </div>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-display font-bold text-cet-blue mb-6 flex items-center gap-3">
                  <BookOpen className="text-cet-orange" /> Programme Overview
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {program.overview}
                </p>
              </div>

              {/* Modules */}
              <div>
                <h2 className="text-2xl font-display font-bold text-cet-blue mb-8 flex items-center gap-3">
                  <CheckCircle className="text-cet-orange" /> Course Content / Modules
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.modules.map((module, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100">
                      <div className="w-1.5 h-1.5 bg-cet-orange mt-2 shrink-0"></div>
                      <span className="text-slate-700 text-sm font-medium">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objectives */}
              {program.objectives && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-cet-blue mb-6 flex items-center gap-3">
                    <Target className="text-cet-orange" /> Course Objectives
                  </h2>
                  <ul className="space-y-4">
                    {program.objectives.map((obj, index) => (
                      <li key={index} className="flex items-start gap-4 text-slate-600">
                        <div className="w-6 h-6 rounded-full bg-cet-blue/5 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[10px] font-bold text-cet-blue">{index + 1}</span>
                        </div>
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Schedules */}
              {program.schedules && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-cet-blue mb-6 flex items-center gap-3">
                    <TrendingUp className="text-cet-orange" /> Class Schedules
                  </h2>
                  <div className="space-y-4">
                    {program.schedules.map((schedule, index) => (
                      <div key={index} className="p-4 bg-slate-50 border-l-4 border-cet-orange">
                        <p className="text-slate-700 font-medium">{schedule}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              {/* Quick Details */}
              <div className="bg-slate-50 p-8 border border-slate-100">
                <h3 className="text-xl font-display font-bold text-cet-blue mb-6">Quick Details</h3>
                <div className="space-y-4">
                  {program.duration && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Duration</span>
                      <span className="text-cet-blue font-bold">{program.duration}</span>
                    </div>
                  )}
                  {program.startDate && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Start Date</span>
                      <span className="text-cet-blue font-bold">{program.startDate}</span>
                    </div>
                  )}
                  {program.fee && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Tuition Fee</span>
                      <span className="text-cet-blue font-bold">{program.fee}</span>
                    </div>
                  )}
                  {program.onlineOption !== undefined && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Online Option</span>
                      <span className="text-cet-blue font-bold">{program.onlineOption ? 'Available' : 'In-person Only'}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Specialisations */}
              {program.specialisations && (
                <div className="bg-cet-orange/5 p-8 border border-cet-orange/20">
                  <h3 className="text-xl font-display font-bold text-cet-blue mb-6">Specialisations</h3>
                  <ul className="space-y-3">
                    {program.specialisations.map((spec, index) => (
                      <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cet-orange mt-1.5 shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Target Group */}
              {program.targetGroup && (
                <div className="bg-slate-50 p-8 border border-slate-100">
                  <h3 className="text-xl font-display font-bold text-cet-blue mb-6 flex items-center gap-3">
                    <Users className="text-cet-orange" size={20} /> Target Group
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {program.targetGroup.map((target, index) => (
                      <span key={index} className="px-3 py-1 bg-white border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements / Eligibility */}
              {(program.requirements || program.eligibility) && (
                <div className="bg-slate-50 p-8 border border-slate-100">
                  <h3 className="text-xl font-display font-bold text-cet-blue mb-6">Entry Requirements</h3>
                  <ul className="space-y-3">
                    {(program.requirements || program.eligibility || []).map((req, index) => (
                      <li key={index} className="text-xs text-slate-600 border-l-2 border-cet-orange pl-3">
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Progression Route */}
              {program.progressionRoute && (
                <div className="bg-cet-blue p-8 text-white">
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="text-cet-orange" size={20} /> Progression Route
                  </h3>
                  <div className="space-y-4">
                    {program.progressionRoute.map((route, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-xs font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium text-slate-300">{route}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Investment Summary */}
              {program.investment && (
                <div className="bg-slate-900 p-8 text-white">
                  <h3 className="text-xl font-display font-bold mb-6 text-cet-orange">Investment Summary</h3>
                  <ul className="space-y-3">
                    {program.investment.map((line, index) => (
                      <li key={index} className={`text-sm ${line.includes('Total') ? 'pt-4 border-t border-white/10 font-bold text-cet-orange' : 'text-slate-400'}`}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="bg-cet-orange p-8 text-white text-center">
                <h3 className="text-xl font-display font-bold mb-4">Ready to Enroll?</h3>
                <p className="text-white/80 text-sm mb-8">
                  Take the next step in your professional journey today.
                </p>
                <Link to="/apply" className="block w-full bg-cet-blue text-white py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-cet-blue transition-all">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
