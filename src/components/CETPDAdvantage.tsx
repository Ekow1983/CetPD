import React from 'react';
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
                src="https://drive.google.com/thumbnail?id=1ZzuA3IHPeOjGovyTMri2fzBA6nkaKQbY&sz=w2000" 
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

        {/* Secondary Visual Section */}
        <div className="grid md:grid-cols-2 gap-8 h-[500px]">
          <div className="relative overflow-hidden group">
            <img 
              src="https://drive.google.com/thumbnail?id=12eaXiBrBpFQg9P5z3WLwZ_bM8XNpnnvr&sz=w2000" 
              alt="Corporate Session" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cet-blue/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-2xl font-display font-bold mb-2">Industry Partnerships</h4>
              <p className="text-white/70 text-sm font-light">Collaborating with the world's leading institutions.</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img 
              src="https://drive.google.com/thumbnail?id=1kF4dHdOP28WfzWjXRxtAU-a0jOGkJLlT&sz=w2000" 
              alt="Academic Infrastructure" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cet-blue/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="text-2xl font-display font-bold mb-2">World-Class Facilities</h4>
              <p className="text-white/70 text-sm font-light">Providing the perfect environment for deep focus and learning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
