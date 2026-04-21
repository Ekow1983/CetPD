import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Target, Award, Globe, Users, TrendingUp } from 'lucide-react';

export default function CETPDAdvantage() {
  const pillars = [
    {
      icon: <Shield className="text-cet-orange" size={24} />,
      title: "Gold Standard Certification",
      description: "Our certifications are recognized globally, meeting the highest international benchmarks for executive education and professional excellence."
    },
    {
      icon: <TrendingUp className="text-cet-orange" size={24} />,
      title: "Practical Career Impact",
      description: "We bridge the gap between academic theory and corporate reality, delivering skills you can implement in your boardroom tomorrow morning."
    },
    {
      icon: <Users className="text-cet-orange" size={24} />,
      title: "Elite Network",
      description: "Join a community of senior executives, industry leaders, and academic stalwarts from across the West African sub-region."
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-6">The CETPD Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-cet-blue mb-8 leading-[1.1]">
              Redefining Executive <span className="text-slate-400 font-light italic">Leadership</span> in Africa.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl font-light">
              The Center for Executive Training and Professional Development (CETPD) is not just a school; it is an incubator for visionaries. We provide high-impact, industry-focused training designed to equip professionals with the strategic mindset needed for global competition.
            </p>
            <div className="grid gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-cet-orange/10 group-hover:border-cet-orange transition-all">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-cet-blue mb-2">{pillar.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1ajc2pRlERDoD8c0dlx3IEGnoI3xP3uDS" 
                alt="Executive Leadership" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover shadow-2xl relative z-10"
              />
              <div className="absolute -top-12 -right-12 w-64 h-64 border border-cet-orange/20 -z-10 bg-slate-50"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 border border-cet-blue/10 -z-10 bg-slate-50"></div>
            </div>
            {/* Float Badge */}
            <div className="absolute bottom-12 -left-20 bg-cet-blue p-8 shadow-2xl z-20 max-w-[240px] hidden md:block border-l-4 border-cet-orange">
              <Award className="text-cet-orange mb-4" size={32} />
              <h5 className="text-white font-display font-bold text-lg mb-2">Excellence in Action</h5>
              <p className="text-white/60 text-[10px] leading-relaxed uppercase tracking-widest">
                Official Certifications Recognized by International Professional Bodies.
              </p>
            </div>
          </div>
        </div>

        {/* Secondary Visual Section - Redesigned as Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[700px]">
          {/* Main Large Visual */}
          <div className="lg:col-span-7 relative overflow-hidden group border border-cet-blue/5">
            <img 
              src="https://lh3.googleusercontent.com/d/1SDydZs1BfSvQBvdJIR5oNu8LBhhwQZuz=s2000" 
              alt="Corporate Session" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cet-blue/90 via-cet-blue/20 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-12 left-12 max-w-sm">
              <span className="inline-block px-4 py-1.5 bg-cet-orange text-white text-[8px] font-bold uppercase tracking-[0.3em] mb-6">Strategic Alliances</span>
              <h4 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">Industry <br />Partnerships.</h4>
              <div className="h-px w-24 bg-cet-orange/50 mb-6"></div>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Collaborating with the world's leading professional bodies to ensure our curriculum meets global benchmarks.
              </p>
            </div>
          </div>

          {/* Side Secondary Visuals */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-4">
            <div className="relative overflow-hidden group border border-cet-blue/5">
              <img 
                src="https://lh3.googleusercontent.com/d/1DR8F9nZsQ0XDKuvAEsatFjS8D061fEgd=s1500" 
                alt="Academic Infrastructure" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-cet-orange/10 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="p-8 border border-white/20 backdrop-blur-sm bg-white/5 text-center">
                  <h5 className="text-white font-display font-bold text-xl uppercase tracking-widest mb-1">Modern</h5>
                  <p className="text-cet-orange text-[9px] font-bold uppercase tracking-[0.3em]">Infrastructure</p>
                </div>
              </div>
            </div>
            
            <div className="bg-cet-blue p-12 flex flex-col justify-center relative overflow-hidden group">
              {/* Geometric pattern background */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-white/5 -z-0"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-display font-medium text-white mb-6">Global Impact.</h4>
                <p className="text-white/40 text-[10px] leading-relaxed uppercase tracking-[0.2em] mb-8">
                  Our alumni network spans across every major sector in West Africa and beyond.
                </p>
                <Link to="/apply" className="inline-flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-cet-orange hover:text-white transition-colors group/link">
                  Request Brochure 
                  <div className="w-8 h-px bg-cet-orange transition-all duration-500 group-hover/link:w-16 group-hover/link:bg-white"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
