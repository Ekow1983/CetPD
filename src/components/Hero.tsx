import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Award, Send, CheckCircle } from 'lucide-react';
import { PROGRAMS } from '../data/programs';
import { submitForm } from '../services/formService';

const HERO_SLIDES = [
  {
    image: 'https://drive.google.com/thumbnail?id=1u4knyb7LKTkzSmJK8k6idCL6KXzM3ZOb&sz=w2000',
    title: <>EXECUTIVE <br /><span className="text-cet-orange italic">MASTERY</span> <br />PORTFOLIO.</>,
    caption: "Experience elite-level professional development with our flagship executive programmes and industry leadership sessions."
  },
  {
    image: 'https://drive.google.com/thumbnail?id=1mnJvZyXJxJPEuML_ucPEFaxVBXmHAUvV&sz=w2000',
    title: <>MASTER <br /><span className="text-cet-orange italic">EXECUTIVE</span> <br />LEADERSHIP.</>,
    caption: "Empowering the next generation of global leaders through world-class executive training and leadership development."
  },
  {
    image: 'https://drive.google.com/thumbnail?id=1kF4dHdOP28WfzWjXRxtAU-a0jOGkJLlT&sz=w2000',
    title: <>ADVANCE <br /><span className="text-cet-orange italic">PROFESSIONAL</span> <br />SKILLS.</>,
    caption: "Bridging the skill gap with industry-relevant certification programmes designed for modern professionals."
  }
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    programme: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await submitForm({
        ...formData,
        formType: 'Hero',
        message: `Quick application for ${formData.programme}`
      });
      setSubmitted(true);
      setFormData({ fullName: '', email: '', programme: '' });
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 sm:pt-40 overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={HERO_SLIDES[currentImage].image}
            referrerPolicy="no-referrer"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-cet-blue/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cet-blue/30 via-transparent to-cet-blue/50"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 -mt-10 md:-mt-20 lg:-mt-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-cet-orange text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              International Standards
            </div>
            <div className="min-h-[280px] md:min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={currentImage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[0.95] mb-8 tracking-tight"
                >
                  {HERO_SLIDES[currentImage].title}
                </motion.h1>
              </AnimatePresence>
            </div>
            
            <div className="min-h-[100px] mb-12">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={currentImage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-white/90 font-caption font-light border-l-4 border-cet-orange pl-6 max-w-lg leading-relaxed"
                >
                  {HERO_SLIDES[currentImage].caption}
                </motion.p>
              </AnimatePresence>
            </div>

            
            <div className="flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-cet-blue bg-slate-200 overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div className="text-white">
                <p className="font-bold text-lg">5,000+</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-400">Certified Alumni</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Semi-Transparent Unique Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cet-orange to-cet-blue opacity-30 blur-2xl"></div>
            <div className="relative bg-cet-blue/60 backdrop-blur-xl border-4 border-cet-orange p-8 md:p-12 shadow-2xl overflow-hidden group">
              {/* Decorative corner element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-cet-orange/20 -mr-8 -mt-8 rotate-45 group-hover:bg-cet-orange/30 transition-colors"></div>
              
              <div className="mb-8 relative z-10">
                <h2 className="text-white font-display font-bold text-2xl mb-2">Quick Application</h2>
                <p className="text-cet-orange text-xs uppercase tracking-widest font-bold">Start your journey today</p>
              </div>

              {submitted ? (
                <div className="py-12 text-center relative z-10">
                  <div className="w-16 h-16 border-2 border-cet-orange flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-cet-orange" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Application Sent.</h4>
                  <p className="text-slate-300 text-sm">We'll contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-cet-orange opacity-90">Full Name</label>
                    <input
                      required
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-b-2 border-white/20 px-4 py-3 text-white focus:border-cet-orange outline-none transition-all placeholder:text-white/30"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-cet-orange opacity-90">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/10 border-b-2 border-white/20 px-4 py-3 text-white focus:border-cet-orange outline-none transition-all placeholder:text-white/30"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-cet-orange opacity-90">Programme</label>
                    <div className="relative">
                      <select
                        required
                        name="programme"
                        value={formData.programme}
                        onChange={handleChange}
                        className="w-full bg-white/10 border-b-2 border-white/20 px-4 py-3 text-white focus:border-cet-orange outline-none transition-all appearance-none"
                      >
                        <option value="" className="bg-cet-blue">Select Programme</option>
                        <optgroup label="Executive Mastery Programmes" className="bg-cet-blue font-bold text-cet-orange">
                          {PROGRAMS.filter(p => p.type === 'mastery').map(p => (
                            <option key={p.id} value={p.title} className="bg-cet-blue text-white font-normal">{p.title}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Executive Short Courses" className="bg-cet-blue font-bold text-cet-orange">
                          {PROGRAMS.filter(p => p.type === 'short-course').map(p => (
                            <option key={p.id} value={p.title} className="bg-cet-blue text-white font-normal">{p.title}</option>
                          ))}
                        </optgroup>
                        <option value="other" className="bg-cet-blue">Other Programmes...</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cet-orange">
                        <ArrowRight size={14} className="rotate-90" />
                      </div>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-cet-orange hover:bg-white hover:text-cet-blue text-white font-bold uppercase tracking-widest py-4 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cet-orange/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Now'} <Send size={18} />
                  </button>
                </form>
              )}
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-2xl hidden md:block">
              <div className="flex items-center gap-3">
                <Award className="text-cet-orange" size={24} />
                <div className="text-cet-blue">
                  <p className="text-[10px] font-bold uppercase leading-none">Accredited</p>
                  <p className="text-[8px] font-medium text-slate-500">International Standard</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


