import React from 'react';
import Programs from '../components/Programs';

export default function ShortCoursesPage() {
  return (
    <main className="pt-32 sm:pt-40">
      <div className="bg-cet-orange py-24 text-white text-center relative overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/d/1lLaeWdQvJR2l2ExfpMLLaYjtKzACcZLx" 
          alt="Short Courses" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-cet-orange/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-display font-bold mb-4">Short Courses</h1>
          <p className="text-white/90 max-w-2xl mx-auto px-4 font-light">
            Fast-track your skills with our intensive, specialized short course certificates.
          </p>
        </div>
      </div>
      <Programs filterType="short-course" />

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
              <h2 className="text-3xl font-display font-bold text-cet-blue mb-6">Designed for Immediate Impact</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our short courses are meticulously crafted to provide rapid, targeted skill acquisition. We focus on real-world applications that drive immediate results in your daily operations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-cet-orange mb-2">Duration</h4>
                  <p className="text-sm font-bold text-cet-blue">Saturdays or Sundays.</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-cet-orange mb-2">Location</h4>
                  <p className="text-sm font-bold text-cet-blue">Accra & Virtual Interactive Sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
