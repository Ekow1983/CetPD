import React from 'react';
import Programs from '../components/Programs';

export default function ProgramsPage() {
  return (
    <main className="pt-32 sm:pt-40">
      <div className="bg-cet-blue py-24 text-white text-center relative overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/d/1Ntu_x7LAprunFLUCGeVwaG4AA76SP50O=s2000" 
          alt="Programmes" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-cet-blue/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-display font-bold mb-4">Our Programmes</h1>
          <p className="text-slate-300 max-w-2xl mx-auto px-4 font-light">
            Explore our comprehensive range of executive certificates and professional development courses.
          </p>
        </div>
      </div>
      <Programs />

      {/* Visual Support Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1UlIEhnDFdcrwblFpL_nimCR0V7duiVjg" 
                alt="Modern Learning" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-90"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-cet-blue mb-6">Designed for Excellence</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our programmes are meticulously crafted to bridge the gap between academic theory and corporate practice. We focus on real-world applications that drive immediate career results.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-cet-orange mb-2">Duration</h4>
                  <p className="text-sm font-bold text-cet-blue">Flexible schedules including weekends.</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-cet-orange mb-2">Location</h4>
                  <p className="text-sm font-bold text-cet-blue">Accra & Virtual Interactive Sessions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Consistent Image Gallery */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-64 md:h-[400px] overflow-hidden group border border-cet-blue/10">
              <img 
                src="https://lh3.googleusercontent.com/d/18vYMJ1oEF_kJ9seolpBYqJiPQugxu8RX" 
                alt="Learning Environment" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            <div className="h-64 md:h-[400px] overflow-hidden group border border-cet-blue/10">
              <img 
                src="https://lh3.googleusercontent.com/d/1-JajJlLlJ6mkwL1EkPSnLSxc2gCtzfJ7" 
                alt="Executive Seminar" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            <div className="h-64 md:h-[400px] overflow-hidden group border border-cet-blue/10">
              <img 
                src="https://lh3.googleusercontent.com/d/1lLaeWdQvJR2l2ExfpMLLaYjtKzACcZLx" 
                alt="Institutional Mentorship" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
