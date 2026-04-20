import React from 'react';
import { CheckCircle, Award, Users, TrendingUp, Clock, CreditCard, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const benefits = [
    { title: "Accelerated Promotion", desc: "Our programmes can lead to rapid career progression for those already working in their preferred industry." },
    { title: "First Choice for Employers", desc: "Our programmes are more appealing to employers than academic education due to their focus on industry practices." },
    { title: "Increased Remuneration", desc: "Our Office Management Proficiency Programmes can significantly increase your earning potential." },
    { title: "Transformational Change", desc: "Intellectually stimulate your overall cognitive abilities, providing opportunities for networking and career growth." },
    { title: "A Step Ahead", desc: "Our certification can set your CV apart and boost your credentials in a competitive job market." }
  ];

  const otherBenefits = [
    { icon: <CreditCard className="text-cet-orange" />, title: "Flexible Payment Plan", desc: "Our fees are moderate, and we offer a flexible payment plan with installment options." },
    { icon: <Clock className="text-cet-orange" />, title: "Weekend & Online Lectures", desc: "Saturdays for in-person classes and Sundays for online classes to fit your busy schedule." },
    { icon: <Award className="text-cet-orange" />, title: "Accredited Facilitators", desc: "Lectures are facilitated by instructors with extensive experience and industry-based knowledge." }
  ];

  const clients = [
    "Newmont Gold Mines Ghana", "Kosmos Energy", "Berves Engineering Company Ltd", 
    "GEOCOM Company Ltd", "Toyota Company Ltd", "Tata Africa Holdings Ltd", 
    "Kempinski Hotel", "Bank of Ghana", "National Health Insurance Scheme"
  ];

  return (
    <main className="pt-32 sm:pt-40">
      {/* Hero Section */}
      <div className="bg-cet-blue py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">About CET</h1>
          <p className="text-xl text-slate-300 font-caption font-light leading-relaxed">
            Centre for Executive Training and Professional Development Limited (CET) is a leading institution dedicated to Executive Education and Employee Capacity Building.
          </p>
        </div>
      </div>

      {/* Institutional Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Institutional Profile</h2>
              <h3 className="text-4xl font-display font-bold text-cet-blue mb-8">17+ Years of Excellence in Human Capital Development</h3>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  With over 17 years of experience, we have established ourselves as one of Ghana’s premier training and human capital development consulting institutes.
                </p>
                <p>
                  We specialize in Leadership, Governance, Policy and Strategy, People Management and Supervision, Talent Management, Team Development, Customer Service, Occupational Health and Safety, Total Quality Management, Sales Management, and Succession Planning, among others.
                </p>
                <p>
                  Our extensive experience has enabled us to train and consult for over 100 companies across the nation, providing a range of services including business partnership, internal consultancy, and HR and training solutions.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-12 border border-cet-blue/5">
              <h4 className="text-xl font-display font-bold text-cet-blue mb-8">Our Prestigious Clients</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {clients.map((client, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                    <div className="w-1.5 h-1.5 bg-cet-orange"></div>
                    {client}
                  </div>
                ))}
                <div className="md:col-span-2 text-xs text-slate-400 mt-4 italic">...and over 100 more companies nationwide.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cet-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-l-4 border-cet-orange pl-8">
              <h3 className="text-2xl font-display font-bold mb-6">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To train, teach, and foster excellence in Executive Education, Professional Development, and Capacity Building through partnerships with prestigious local and international educational bodies.
              </p>
            </div>
            <div className="border-l-4 border-cet-orange pl-8">
              <h3 className="text-2xl font-display font-bold mb-6">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become a world-class learning centre that serves as an icon of excellence in promoting professional and executive education through leadership, integrity, and mentorship.
              </p>
            </div>
          </div>
          <div className="mt-16 pt-16 border-t border-white/10 text-center">
            <h3 className="text-2xl font-display font-bold mb-6">Our Mandate</h3>
            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed">
              To train and develop today’s corporate managers, office professionals, and business executives through our unparalleled Continuous Professional Development (CPD) programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Programmes & Certification */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-0 border border-cet-blue/10">
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <img 
                src="/images/a12.jpg" 
                alt="Certification" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-cet-blue/20"></div>
            </div>
            <div className="p-12 md:p-20 bg-slate-50">
              <h2 className="text-3xl font-display font-bold text-cet-blue mb-8">Programmes and Certification</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Our courses are non-academic and non-credit based, requiring no written examination at the end of the course. Instead, participants will engage in strategic discussions and make business presentations based on their course preferences before graduating.
                </p>
                <p>
                  Our programmes are designed for working professionals, business executives, and managers, and the final certification is primarily for career advancement, job progression, promotion, salary upgrade, professional development, capacity building, and personal development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Visual Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] relative overflow-hidden group">
              <img 
                src="/images/a5.jpg" 
                alt="Institutional Mentorship" 
                className="absolute inset-0 w-full h-full object-cover grayscale transform group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-cet-blue/10"></div>
            </div>
            <div className="aspect-[4/5] relative overflow-hidden group mt-12">
              <img 
                src="/images/a6.jpg" 
                alt="Strategic Planning" 
                className="absolute inset-0 w-full h-full object-cover grayscale transform group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-cet-blue/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study at CET? */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The CET Advantage</h2>
            <h3 className="text-4xl font-display font-bold text-cet-blue">Why Study at CET?</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-10 border border-slate-100 hover:border-cet-orange transition-all group">
                <div className="w-12 h-12 bg-cet-blue text-white flex items-center justify-center mb-6 group-hover:bg-cet-orange transition-colors">
                  <TrendingUp size={24} />
                </div>
                <h4 className="text-xl font-display font-bold text-cet-blue mb-4">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {otherBenefits.map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-cet-blue mb-4">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-24 bg-cet-orange text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-8">Join Us</h2>
          <p className="text-xl mb-12 leading-relaxed">
            If you’re a graduate or working professional looking to upgrade your skills, knowledge, and credentials, we encourage you to join our programmes. Our courses are designed to bridge the gap between industry and academia.
          </p>
          <Link to="/apply" className="inline-flex items-center gap-3 bg-cet-blue text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-cet-blue transition-all">
            Start Your Journey <GraduationCap size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
}
