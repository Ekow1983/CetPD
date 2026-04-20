import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CETPDAdvantage from '../components/CETPDAdvantage';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-cet-blue mb-4">Excellence in Executive Education</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            CETPD provides world-class training solutions tailored for the modern professional landscape.
          </p>
        </div>
      </section>
      <About />
      <CETPDAdvantage />
    </main>
  );
}
