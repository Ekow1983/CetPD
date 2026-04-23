import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-cet-blue text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <img src="https://lh3.googleusercontent.com/d/1_YBaUuo9biU-dDlWN2U3JWIV_3OrbdXD" alt="CETPD Logo" referrerPolicy="no-referrer" className="h-28 sm:h-32 w-auto object-contain bg-white p-2" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs transition-colors hover:text-white">
              Empowering professionals through high-standard executive training and professional development programmes in Ghana and beyond.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="https://facebook.com/cetcorporategh" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-cet-orange p-2.5 rounded-full transition-all duration-300 hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-cet-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cet-orange transition-colors">About Us</Link></li>
              <li><Link to="/programmes" className="hover:text-cet-orange transition-colors">Programmes</Link></li>
              <li><Link to="/trainings" className="hover:text-cet-orange transition-colors">Trainings</Link></li>
              <li><Link to="/gallery" className="hover:text-cet-orange transition-colors">Gallery</Link></li>
              <li><Link to="/how-to-apply" className="hover:text-cet-orange transition-colors">How to Apply</Link></li>
              <li><Link to="/apply" className="hover:text-cet-orange transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-cet-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Programmes</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/programmes/caop" className="hover:text-cet-orange transition-colors">Associate Certified Office Professional (aCoP)</Link></li>
              <li><Link to="/programmes/cop" className="hover:text-cet-orange transition-colors">Certified Office Professional (CoP)</Link></li>
              <li><Link to="/programmes/csap" className="hover:text-cet-orange transition-colors">Certified Senior Administrative Professional (CSaP)</Link></li>
              <li><Link to="/programmes/chpm" className="hover:text-cet-orange transition-colors">Certified High-Performance Manager (CHPM)</Link></li>
              <li><Link to="/programmes/cpa" className="hover:text-cet-orange transition-colors">Certified Professional Administrator (CPA)</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-cet-orange shrink-0" size={20} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-cet-orange shrink-0" size={20} />
                <a href={`tel:${CONTACT_INFO.phone.split('/')[0].trim()}`} className="hover:text-cet-orange transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex gap-4">
                <Mail className="text-cet-orange shrink-0" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-cet-orange transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Centre for Executive Training and Professional Development. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-white/5 hover:bg-cet-orange p-3 rounded-lg transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
