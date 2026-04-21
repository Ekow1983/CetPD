import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { submitForm } from '../services/formService';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitForm({
        ...formData,
        formType: 'Contact'
      });
      setSubmitted(true);
      setFormData({ fullName: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <main className="pt-32 sm:pt-40">
      <div className="bg-cet-blue py-32 text-white text-center relative overflow-hidden">
        <img 
          src="https://drive.google.com/thumbnail?id=1lLaeWdQvJR2l2ExfpMLLaYjtKzACcZLx&sz=w2000" 
          alt="Contact Support" 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-10 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cet-blue/40 to-cet-blue/80"></div>
        <h1 className="text-5xl font-display font-bold mb-4 relative z-10">Contact Us</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 relative z-10 font-light leading-relaxed">
          Have questions? Our team is here to help you with information about our programmes and admissions.
        </p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-cet-blue mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-cet-orange/10 p-3 text-cet-orange">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
                      <p className="text-cet-blue font-bold">0244 644359 / 0244 058 292</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cet-orange/10 p-3 text-cet-orange">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Email Us</p>
                      <p className="text-cet-blue font-bold">cetcorporategh@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cet-orange/10 p-3 text-cet-orange">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Admissions Office Location</p>
                      <p className="text-cet-blue font-bold leading-relaxed">
                        Cantonments-Accra, within the same premises as Civil Service Training Centre, opposite Morning Star School.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cet-orange/10 p-3 text-cet-orange">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Working Hours</p>
                      <p className="text-cet-blue font-bold">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-slate-50 p-10 md:p-16 border border-slate-100">
              <h3 className="text-2xl font-display font-bold text-cet-blue mb-8">Send us a Message</h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-2 border-cet-orange flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-cet-orange" size={32} />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-cet-blue mb-2">Message Sent.</h4>
                  <p className="text-slate-500">We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[10px] font-bold uppercase tracking-widest text-cet-blue hover:text-cet-orange transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <input 
                      required
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 px-4 py-4 focus:border-cet-orange outline-none transition-all" 
                      placeholder="John Doe" 
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
                      className="w-full bg-white border border-slate-200 px-4 py-4 focus:border-cet-orange outline-none transition-all" 
                      placeholder="email@example.com" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Subject</label>
                    <input 
                      required
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 px-4 py-4 focus:border-cet-orange outline-none transition-all" 
                      placeholder="How can we help?" 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                    <textarea 
                      required
                      rows={6} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 px-4 py-4 focus:border-cet-orange outline-none transition-all resize-none" 
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-cet-blue text-white px-12 py-4 font-bold uppercase tracking-widest hover:bg-cet-orange transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
