import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="pt-24 relative bg-white border-t border-cet-blue/10">
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
          <div className="relative overflow-hidden h-[400px] lg:h-full border-l border-cet-blue/10">
            <img 
              src="https://lh3.googleusercontent.com/d/1hPuatWePBywHOnrpjhT3p2YnJHn1XDvi" 
              alt="Executive Excellence" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-cet-blue/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

