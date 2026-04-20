import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { PROGRAMS as STATIC_PROGRAMS } from '../data/programs';
import { submitForm } from '../services/formService';

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    programme: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitForm({
        ...formData,
        formType: 'Application'
      });
      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', programme: '', message: '' });
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to send application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="apply" className="section-grid bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row border border-cet-blue/10">
          {/* Left: Info */}
          <div className="flex-1 p-8 md:p-16 bg-cet-blue text-white">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Admissions</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Apply for <br />Enrolment.</h3>
            <p className="text-slate-400 mb-12 leading-relaxed max-w-sm">
              Join our next cohort of executive leaders. Our streamlined application process ensures a quick response from our admissions team.
            </p>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-cet-orange">01</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Submit Details</h4>
                  <p className="text-xs text-slate-400">Fill out the form with your professional background and programme choice.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-cet-orange">02</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Review Process</h4>
                  <p className="text-xs text-slate-400">Our academic board reviews your application within 48 business hours.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-cet-orange">03</span>
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2">Onboarding</h4>
                  <p className="text-xs text-slate-400">Receive your acceptance letter and start your executive journey.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex-[1.5] p-8 md:p-16 bg-white">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-24 h-24 border-2 border-cet-orange flex items-center justify-center mb-8">
                  <CheckCircle className="text-cet-orange" size={48} />
                </div>
                <h4 className="text-3xl font-display font-bold text-cet-blue mb-4">Application Received.</h4>
                <p className="text-slate-500 max-w-xs mx-auto">Our admissions team will contact you shortly via email.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-12 text-[10px] font-bold uppercase tracking-widest text-cet-blue hover:text-cet-orange transition-colors"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b border-slate-200 focus:border-cet-orange outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b border-slate-200 focus:border-cet-orange outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b border-slate-200 focus:border-cet-orange outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Programme</label>
                    <select
                      required
                      name="programme"
                      value={formData.programme}
                      onChange={handleChange}
                      className="w-full px-0 py-3 border-b border-slate-200 focus:border-cet-orange outline-none transition-all appearance-none bg-white font-medium"
                    >
                      <option value="">Select a programme</option>
                      <optgroup label="Executive Mastery Programmes">
                        {STATIC_PROGRAMS.filter(p => p.type === 'mastery').map(p => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Executive Short Courses">
                        {STATIC_PROGRAMS.filter(p => p.type === 'short-course').map(p => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Statement of Intent / Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-0 py-3 border-b border-slate-200 focus:border-cet-orange outline-none transition-all resize-none font-medium"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-3 bg-cet-blue text-white px-8 py-4 font-bold uppercase tracking-[0.2em] hover:bg-cet-orange transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>Processing... <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>Submit Application <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

