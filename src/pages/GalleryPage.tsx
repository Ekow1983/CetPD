import React from 'react';

const STATIC_GALLERY = [
  { src: "https://lh3.googleusercontent.com/d/1Ntu_x7LAprunFLUCGeVwaG4AA76SP50O", title: "Institutional Excellence" },
  { src: "https://lh3.googleusercontent.com/d/1NOWd8HsVfSIf-pf1Ym7wza6XMhyuF333", title: "Professional Certification Seminar" },
  { src: "https://lh3.googleusercontent.com/d/1UlIEhnDFdcrwblFpL_nimCR0V7duiVjg", title: "Executive Leadership Forum" },
  { src: "https://lh3.googleusercontent.com/d/18vYMJ1oEF_kJ9seolpBYqJiPQugxu8RX", title: "Strategic Networking Gala" },
  { src: "https://lh3.googleusercontent.com/d/1-JajJlLlJ6mkwL1EkPSnLSxc2gCtzfJ7", title: "Academic Standards Workshop" },
  { src: "https://lh3.googleusercontent.com/d/1lLaeWdQvJR2l2ExfpMLLaYjtKzACcZLx", title: "Direct Contact Support" },
  { src: "https://lh3.googleusercontent.com/d/1NOWd8HsVfSIf-pf1Ym7wza6XMhyuF333", title: "Executive Board Session" },
  { src: "https://lh3.googleusercontent.com/d/1UlIEhnDFdcrwblFpL_nimCR0V7duiVjg", title: "Corporate Leadership Training" },
  { src: "https://lh3.googleusercontent.com/d/18vYMJ1oEF_kJ9seolpBYqJiPQugxu8RX", title: "Academic Excellence Forum" },
  { src: "https://lh3.googleusercontent.com/d/1-JajJlLlJ6mkwL1EkPSnLSxc2gCtzfJ7", title: "Professional Development Workshop" },
  { src: "https://lh3.googleusercontent.com/d/1Ntu_x7LAprunFLUCGeVwaG4AA76SP50O", title: "Institutional Mentorship" },
  { src: "https://lh3.googleusercontent.com/d/1ajc2pRlERDoD8c0dlx3IEGnoI3xP3uDS", title: "Strategic Planning Seminar" }
];

export default function GalleryPage() {
  return (
    <main className="pt-32 sm:pt-40">
      <div className="bg-cet-blue py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <h1 className="text-5xl font-display font-bold mb-4 relative z-10">Our Gallery</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 relative z-10 font-light">
          A curated visual showcase of our executive training sessions, corporate events, and the professional CETPD community.
        </p>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-cet-blue/10">
            {STATIC_GALLERY.map((item, index) => (
              <div key={index} className="group relative overflow-hidden aspect-square border-r border-b border-cet-blue/10 bg-slate-100">
                <img 
                  src={String(item.src || "").replace('.jpeg', '.jpg')} 
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
                />
                <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-cet-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-display font-bold text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
