import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Trainings', href: '/trainings' },
    { name: 'How to Apply', href: '/how-to-apply' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        scrolled || !isHome ? 'bg-white border-cet-blue/10' : 'bg-transparent border-transparent'
      } ${scrolled ? 'py-0' : 'py-1 sm:py-2'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16 sm:h-20' : 'h-20 sm:h-32'}`}>
          <Link to="/" className="flex items-center gap-2 relative z-10">
            <img 
              src="https://lh3.googleusercontent.com/d/1_YBaUuo9biU-dDlWN2U3JWIV_3OrbdXD" 
              alt="CETPD Logo" 
              referrerPolicy="no-referrer"
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-10 sm:h-14' : 'h-14 sm:h-24'}`} 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 text-[12px] font-bold uppercase tracking-[0.05em] transition-all border-r border-transparent hover:text-cet-orange ${
                  scrolled || !isHome ? 'text-slate-700' : 'text-slate-700 lg:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/apply" 
              className="bg-cet-orange text-white px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-cet-orange-dark transition-all ml-4"
            >
              Apply
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || !isHome ? 'text-cet-blue' : 'text-cet-blue lg:text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden bg-white border-t border-cet-blue/10 overflow-hidden"
          >
            <div className="px-0 pt-0 pb-0 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-4 text-[12px] font-bold uppercase tracking-[0.15em] text-slate-700 border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="px-8 py-5 text-[12px] font-bold uppercase tracking-[0.2em] bg-cet-orange text-white text-center hover:bg-cet-orange-dark transition-all"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

