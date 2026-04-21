import React from 'react';
import ApplicationForm from '../components/ApplicationForm';

export default function ApplyPage() {
  return (
    <main className="pt-32 sm:pt-40">
      <div className="bg-cet-blue py-24 text-white text-center">
        <h1 className="text-5xl font-display font-bold mb-4">Admissions</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Take the next step in your professional journey. Complete the application form below.
        </p>
      </div>
      <ApplicationForm />

      {/* Consistent Image Gallery */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-64 md:h-[400px] overflow-hidden group border border-cet-blue/10">
              <img 
                src="https://drive.google.com/thumbnail?id=1UlIEhnDFdcrwblFpL_nimCR0V7duiVjg&sz=w2000" 
                alt="Corporate Event" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            <div className="h-64 md:h-[400px] overflow-hidden group border border-cet-blue/10">
              <img 
                src="/images/a8-1.jpg" 
                alt="Graduation Showcase" 
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            <div className="h-64 md:h-[400px] overflow-hidden group border border-cet-blue/10">
              <img 
                src="/images/a15.webp" 
                alt="Modern Learning" 
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
