import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-grid bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 border border-cet-blue/10">
          {/* Left: Content */}
          <div className="p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-cet-blue/10 flex flex-col justify-center">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Institutional Profile</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-cet-blue mb-8">Leadership. <br />Integrity. <br />Mentorship.</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              With over 17 years of experience, Centre for Executive Training and Professional Development Limited (CET) is a leading institution dedicated to Executive Education and Employee Capacity Building.
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-cet-blue">01.</span>
                <div>
                  <h4 className="font-bold text-cet-blue uppercase tracking-widest text-xs mb-2">Our Mission</h4>
                  <p className="text-sm text-slate-500">To train, teach, and foster excellence in Executive Education and Professional Development through prestigious partnerships.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-2xl font-bold text-cet-blue">02.</span>
                <div>
                  <h4 className="font-bold text-cet-blue uppercase tracking-widest text-xs mb-2">Our Vision</h4>
                  <p className="text-sm text-slate-500">To become a world-class learning centre that serves as an icon of excellence in promoting professional education.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visuals */}
          <div className="relative overflow-hidden min-h-[500px] lg:h-auto bg-slate-50 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full h-full max-w-md mx-auto group">
              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-cet-orange/20 z-0"></div>
              <div className="absolute top-4 left-4 w-full h-full border border-cet-blue/10 z-0 bg-white"></div>
              
              <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl skew-x-[-1deg]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1hPuatWePBywHOnrpjhT3p2YnJHn1XDvi=s1500" 
                  alt="Executive Excellence" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-cet-blue/5 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
              
              {/* Micro-Label floating */}
              <div className="absolute bottom-8 -right-8 z-20 bg-cet-blue text-white p-6 shadow-2xl max-w-[180px] hidden xl:block">
                <span className="block text-[8px] uppercase tracking-[0.4em] mb-2 opacity-60">Established</span>
                <span className="block text-2xl font-display font-medium text-cet-orange">2009.</span>
                <div className="mt-4 h-px w-full bg-white/10"></div>
                <p className="mt-4 text-[7px] leading-relaxed uppercase tracking-widest text-white/50">
                  Leading the West African executive development landscape for nearly two decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

