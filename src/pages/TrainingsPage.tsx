import React, { useState } from 'react';
import { Users, Briefcase, BarChart, Settings, ShieldCheck, Headphones, GraduationCap, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrainingsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const departments = [
    {
      title: "Senior Executive Management Team",
      icon: <Briefcase className="text-cet-orange" size={28} />,
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
      icon: <Users className="text-cet-orange" size={28} />,
      trainings: [
        "People Management and Supervision",
        "Leading and Managing Teams",
        "New Managers Training",
        "Diversity Management Training"
      ]
    },
    {
      title: "Marketing Department",
      icon: <Headphones className="text-cet-orange" size={28} />,
      trainings: [
        "Achieving Customer Excellence and Service Innovation",
        "Leading and Managing Your Sales Team",
        "Strategic Marketing and Business Sustainability"
      ]
    },
    {
      title: "Accounting Department",
      icon: <BarChart className="text-cet-orange" size={28} />,
      trainings: [
        "Internal Audit and Controls",
        "Data Analysis and Business Forecasting",
        "Cost Management and Strategic Outsourcing",
        "Corporate Financing Principles, Asset Management and Procurement Processes"
      ]
    },
    {
      title: "Operations & Production",
      icon: <Settings className="text-cet-orange" size={28} />,
      trainings: [
        "Total Quality Management and Operational Risk Assessment",
        "Occupational Health and Safety Management",
        "Monitoring, Evaluation and Control Systems"
      ]
    },
    {
      title: "Quality Assurance & Control",
      icon: <ShieldCheck className="text-cet-orange" size={28} />,
      trainings: [
        "Total Quality Management and Operational Risk Assessment",
        "Occupational Health and Safety Management",
        "Monitoring, Evaluation and Control Systems"
      ]
    },
    {
      title: "Administrative Support",
      icon: <GraduationCap className="text-cet-orange" size={28} />,
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
      {/* Hero Section */}
      <div className="bg-cet-blue py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Executive Trainings</h1>
          <p className="text-xl text-slate-300 font-caption font-light leading-relaxed">
            Specialized training modules tailored for specific departments to enhance corporate performance and professional excellence.
          </p>
          
          {/* Search Bar */}
          <div className="mt-12 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for a specific training module..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Trainings Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-0 border-t border-l border-cet-blue/10">
            {filteredDepartments.map((dept, index) => (
              <div key={index} className="p-10 md:p-16 border-r border-b border-cet-blue/10 hover:bg-slate-50 transition-all group">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-16 h-16 bg-white shadow-sm flex items-center justify-center rounded-sm group-hover:bg-cet-blue group-hover:text-white transition-all border border-slate-100">
                    {dept.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-cet-blue">{dept.title}</h3>
                </div>
                <div className="space-y-6">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cet-orange mb-6">Recommended Trainings:</h4>
                  <ul className="grid gap-4">
                    {dept.trainings.map((training, i) => (
                      <li key={i} className="flex items-start gap-4 text-slate-600 text-sm leading-relaxed group/item">
                        <ArrowRight size={14} className="text-cet-orange shrink-0 mt-1 group-hover/item:translate-x-1 transition-transform" />
                        <span className="group-hover/item:text-cet-blue transition-colors">{training}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {filteredDepartments.length === 0 && (
            <div className="py-20 text-center border-b border-r border-l border-cet-blue/10">
              <p className="text-slate-400 font-display italic">No training modules found matching your search.</p>
            </div>
          )}

          {/* Professional Gallery Section */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="aspect-[4/3] overflow-hidden group border border-cet-blue/10">
              <img 
                src="https://drive.google.com/thumbnail?id=1-JajJlLlJ6mkwL1EkPSnLSxc2gCtzfJ7&sz=w2000" 
                alt="Executive Seminar" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden group border border-cet-blue/10">
              <img 
                src="/images/a4.jpg" 
                alt="Professional Workshop" 
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden group border border-cet-blue/10">
              <img 
                src="/images/a13.jpg" 
                alt="Management Training" 
                className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-105"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-cet-blue p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Customized Corporate Solutions</h2>
              <p className="text-slate-300 max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed">
                We provide bespoke training solutions designed to meet the unique needs of your organization. Our accredited facilitators bring industry expertise directly to your team.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/contact" className="bg-cet-orange text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-cet-blue transition-all">
                  Request Training
                </Link>
                <Link to="/programmes" className="border border-white/20 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-cet-blue transition-all">
                  View All Programmes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
