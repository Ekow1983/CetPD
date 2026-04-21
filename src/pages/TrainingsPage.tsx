import React, { useState } from 'react';
import { Users, Briefcase, BarChart, Settings, ShieldCheck, Headphones, GraduationCap, ArrowRight, Search, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function TrainingsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    {
      title: "Senior Executive Management Team",
      id: "exec",
      icon: <Briefcase size={24} />,
      image: "https://lh3.googleusercontent.com/d/11ooocHl4cbZ-FCCs8SCVq7BWijnh8Wn3",
      trainings: [
        "Strategic Leadership",
        "Corporate Governance and Business Sustainability",
        "Leading and Managing Change",
        "Strategic Planning and Goal Setting",
        "Building High Performance Team",
        "Strategic Business Planning and Strategy",
        "Succession Planning and Management",
        "Policy Formulation and Administration"
      ]
    },
    {
      title: "HR Department",
      id: "hr",
      icon: <Users size={24} />,
      image: "https://lh3.googleusercontent.com/d/1fBPux-6PdQQh0LsRboR8hLsqbuIaaCYp",
      trainings: [
        "People Management and Supervision",
        "Leading and Managing Teams",
        "New Managers Training",
        "Diversity Management Training"
      ]
    },
    {
      title: "Marketing Department",
      id: "mkt",
      icon: <Headphones size={24} />,
      image: "https://lh3.googleusercontent.com/d/1ENjNQH6k-7oMRr3tYjm-q-JHU5tNwrqK",
      trainings: [
        "Achieving Customer Excellence and Service Innovation",
        "Leading and Managing Your Sales Team",
        "Strategic Marketing and Business Sustainability"
      ]
    },
    {
      title: "Accounting Department",
      id: "acc",
      icon: <BarChart size={24} />,
      image: "https://lh3.googleusercontent.com/d/18vYMJ1oEF_kJ9seolpBYqJiPQugxu8RX",
      trainings: [
        "Internal Audit and Controls",
        "Data Analysis and Business Forecasting",
        "Cost Management and Strategic Outsourcing",
        "Corporate Financing Principles, Asset Management and Procurement Processes"
      ]
    },
    {
      title: "Administrative Support",
      id: "admin",
      icon: <GraduationCap size={24} />,
      image: "https://lh3.googleusercontent.com/d/1UlIEhnDFdcrwblFpL_nimCR0V7duiVjg",
      trainings: [
        "Office Management and Practices",
        "Executive Assistantship and Administrative Support",
        "Reception Management and Telephone Techniques",
        "Records Keeping and File Management",
        "Customer Care and Service Delivery",
        "Developing Ethical Values and Personal Effectiveness at Work",
        "Meeting Planning and Minute Taking",
        "Practical Business Communication Skills"
      ]
    }
  ];

  const filteredDepartments = departments.map(dept => ({
    ...dept,
    trainings: dept.trainings.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(dept => dept.trainings.length > 0);

  return (
    <main className="pt-32 sm:pt-40">
      {/* Hero: Editorial Style */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-cet-blue">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/d/11ooocHl4cbZ-FCCs8SCVq7BWijnh8Wn3" 
            alt="Training Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cet-blue via-cet-blue/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Corporate Excellence</h2>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-none">
              EXECUTIVE <span className="text-cet-orange italic">TRAININGS</span>.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl">
              Specialized training modules tailored for specific departments to enhance corporate performance, professional excellence, and strategic growth.
            </p>
            
            <div className="relative max-w-lg">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Find a module (e.g. Strategic Planning)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/30 outline-none focus:bg-white/20 transition-all font-light"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Quote / Statement */}
      <section className="py-32 bg-white flex justify-center text-center">
        <div className="max-w-4xl px-4">
          <h3 className="text-2xl md:text-4xl font-display font-bold text-cet-blue leading-tight mb-8">
            "Training is what bridge the gap between <span className="text-cet-orange italic">Academic Theory</span> and <span className="text-slate-400">Corporate Reality</span>."
          </h3>
          <div className="w-24 h-1 bg-cet-orange mx-auto"></div>
        </div>
      </section>

      {/* Main Content: Staggered Layout */}
      <section className="bg-white">
        {filteredDepartments.map((dept, index) => (
          <div key={dept.id} className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image Side */}
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden group">
              <img 
                src={dept.image} 
                alt={dept.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-cet-blue/10"></div>
            </div>
            
            {/* Content Side */}
            <div className="lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center border-y border-cet-blue/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-cet-orange flex items-center justify-center text-white">
                  {dept.icon}
                </div>
                <h4 className="text-3xl md:text-4xl font-display font-bold text-cet-blue">
                  {dept.title}
                </h4>
              </div>
              
              <ul className="space-y-4">
                {dept.trainings.map((training, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 p-4 border border-slate-100 hover:border-cet-orange/30 hover:bg-slate-50 transition-all group/item"
                  >
                    <div className="w-6 h-6 rounded-full bg-cet-blue/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-cet-orange transition-colors">
                      <ArrowRight size={12} className="text-cet-blue group-hover/item:text-white transition-colors" />
                    </div>
                    <span className="text-slate-600 font-medium text-sm leading-relaxed group-hover/item:text-cet-blue transition-colors">
                      {training}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Featured Gallery Footer */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h5 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">World Class Infrastructure</h5>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-cet-blue">Learning Beyond Borders.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://lh3.googleusercontent.com/d/11ooocHl4cbZ-FCCs8SCVq7BWijnh8Wn3",
              "https://lh3.googleusercontent.com/d/1fBPux-6PdQQh0LsRboR8hLsqbuIaaCYp",
              "https://lh3.googleusercontent.com/d/1ENjNQH6k-7oMRr3tYjm-q-JHU5tNwrqK"
            ].map((img, i) => (
              <div key={i} className="aspect-square relative overflow-hidden border-8 border-white shadow-xl hover:shadow-2xl transition-all">
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-32 bg-cet-blue overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cet-orange skew-x-[15deg] translate-x-20 opacity-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to Elevate Your Team?</h2>
          <p className="text-slate-300 text-lg font-light mb-12 max-w-2xl mx-auto">
            Contact us today for customized corporate training solutions tailored precisely to your institutional requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-12 py-5 bg-cet-orange text-white font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Request Proposal
            </Link>
            <Link 
              to="/programmes" 
              className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-cet-blue transition-all"
            >
              Mastery Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
