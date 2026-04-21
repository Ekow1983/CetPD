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
          <div className="grid grid-cols-2 grid-rows-2">
            <div className="border-r border-b border-cet-blue/10 p-8 flex items-center justify-center bg-cet-blue text-white">
              <Target size={48} className="text-cet-orange" />
            </div>
            <div className="border-b border-cet-blue/10 overflow-hidden h-64 md:h-[400px]">
              <img 
                src="https://lh3.googleusercontent.com/d/1A1pr7F7x36WurI92dl2Qb91WvH_RveBV" 
                alt="Executive Session" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-700"
              />
            </div>
            <div className="border-r border-cet-blue/10 overflow-hidden h-64 md:h-[400px]">
              <img 
                src="https://lh3.googleusercontent.com/d/1pstOB32KhxQdvlK61GbzGlshMN09wtSP" 
                alt="Corporate Training" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:brightness-110 transition-all duration-700"
              />
            </div>
            <div className="p-8 flex items-center justify-center bg-cet-orange text-white">
              <Award size={48} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

