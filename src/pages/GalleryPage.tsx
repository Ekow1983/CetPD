import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const STATIC_GALLERY = [
  { id: 1, src: "https://lh3.googleusercontent.com/d/1Ffa2zzNmTGpVIx-7HQkHteZVA4SQed5S", title: "Main Graduation Procession", category: "Procession" },
  { id: 2, src: "https://lh3.googleusercontent.com/d/1AX3UvZGGrgg_WGFoweZKcHjglSVNTwRd", title: "Keynote Address by Guest Speaker", category: "Ceremony" },
  { id: 3, src: "https://lh3.googleusercontent.com/d/1Je8NhHXE4VgO6ePg-fO06CrVA2QR2Rfq", title: "Graduate Presentation & Awards", category: "Honor" },
  { id: 4, src: "https://lh3.googleusercontent.com/d/1bJOQZ4Ru2j5RbjnSxNRkXfcqhPy8Tvcu", title: "Executive Leadership Certification", category: "Graduates" },
  { id: 5, src: "https://lh3.googleusercontent.com/d/1puZO1htTvRWDhSpXWAGkry4M4bv9jr9S", title: "Faculty & Distinguished Guests", category: "Faculty" },
  { id: 6, src: "https://lh3.googleusercontent.com/d/1stNKjHymT6-U6PbXrU9b0I6g5xiDSzQ5", title: "Commemorative Group Session", category: "Graduates" },
  { id: 7, src: "https://lh3.googleusercontent.com/d/1bDnz9UeOJIVWTFyOK8lzJf2lHVRR0dD6", title: "Alumni Induction Evening", category: "Networking" },
  { id: 8, src: "https://lh3.googleusercontent.com/d/1Pef0MniSwwgJMFBb8CU939ZQ3Pz2YPCo", title: "Excellence in Leadership Award", category: "Awards" },
  { id: 9, src: "https://lh3.googleusercontent.com/d/1pacui1ius97Zf-0LcFL48PdX-nvX5mcp", title: "Post-Graduate Mentorship Lab", category: "Mentorship" },
  { id: 10, src: "https://lh3.googleusercontent.com/d/1Kq7MHT_Fdr26PEvvO50dyzFbhXZBcY6U", title: "Management Certification Honor", category: "Honor" },
  { id: 11, src: "https://lh3.googleusercontent.com/d/1JrS6ORmaZlOU1eXBJC_Ihh-4hDdPuGj5", title: "Executive Council Deliberation", category: "Ceremony" },
  { id: 12, src: "https://lh3.googleusercontent.com/d/1ipD_EuDgna7PcQf2yR9BydHJJG9hh3uw", title: "Social Legacy & Impact Group", category: "Community" },
  { id: 13, src: "https://lh3.googleusercontent.com/d/1ty1bUBbw5Pem4ZDgJQoInX2NWLWF5pUe", title: "International Standards Recognition", category: "Global" }
];

const CATEGORIES = ["All", ...Array.from(new Set(STATIC_GALLERY.map(i => i.category)))];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery = activeCategory === "All" 
    ? STATIC_GALLERY 
    : STATIC_GALLERY.filter(item => item.category === activeCategory);

  const currentIndex = selectedImage !== null 
    ? STATIC_GALLERY.findIndex(item => item.id === selectedImage) 
    : -1;

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const nextIdx = (currentIndex + 1) % STATIC_GALLERY.length;
    setSelectedImage(STATIC_GALLERY[nextIdx].id);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const prevIdx = (currentIndex - 1 + STATIC_GALLERY.length) % STATIC_GALLERY.length;
    setSelectedImage(STATIC_GALLERY[prevIdx].id);
  };

  const currentItem = selectedImage !== null 
    ? STATIC_GALLERY.find(item => item.id === selectedImage) 
    : null;

  return (
    <main className="pt-32 sm:pt-40 bg-white min-h-screen">
      {/* Commemorative Header */}
      <div className="border-b border-slate-100 py-32 relative overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cet-blue via-cet-orange to-cet-blue"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.5em] text-[10px] mb-6">Commemorative Gallery</h2>
            <h1 className="text-4xl md:text-6xl font-display font-black text-cet-blue mb-4 tracking-tight uppercase">
              CET 19TH GRADUATION <span className="text-slate-300">CEREMONY</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-cet-orange"></div>
              <p className="text-xl font-caption text-slate-500 italic">13th December, 2025</p>
              <div className="h-px w-12 bg-cet-orange"></div>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
              Celebrating the exceptional achievements, leadership, and professional excellence of our graduates as they join the global elite of CETPD alumni.
            </p>
          </motion.div>
        </div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      {/* Filter Rail Refined */}
      <div className="sticky top-16 sm:top-24 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-10 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-[9px] font-extrabold uppercase tracking-[0.3em] transition-all relative py-2 ${
                  activeCategory === cat ? 'text-cet-blue' : 'text-slate-300 hover:text-cet-orange'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCatUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cet-orange" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {filteredGallery.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="group cursor-none transition-all duration-500"
              >
                {/* Frame Style Container */}
                <div className="relative p-6 bg-white border border-slate-100 shadow-sm group-hover:shadow-2xl group-hover:border-cet-orange/20 transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden bg-slate-50 relative">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105"
                    />
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/30"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/30"></div>
                  </div>
                  
                  <div className="mt-8">
                    <span className="text-cet-orange text-[8px] font-bold uppercase tracking-[0.3em] mb-3 block opacity-60">
                      {item.category}
                    </span>
                    <h3 className="text-cet-blue font-display font-bold text-lg leading-tight uppercase tracking-tight group-hover:text-cet-orange transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Floating View Icon */}
                  <div className="absolute top-10 right-10 w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
                    <Maximize2 size={18} className="text-cet-blue" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && currentItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-cet-blue/95 backdrop-blur-xl flex flex-col p-4 sm:p-12 items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <div className="relative w-full h-full flex flex-col items-center justify-center">
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-cet-orange transition-all hover:scale-125 z-10"
                onClick={handlePrev}
              >
                <ChevronLeft size={48} strokeWidth={1} />
              </button>
              
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-cet-orange transition-all hover:scale-125 z-10"
                onClick={handleNext}
              >
                <ChevronRight size={48} strokeWidth={1} />
              </button>

              <motion.div 
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                className="relative max-w-5xl max-h-[70vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={currentItem.src}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain shadow-[0_0_80px_rgba(0,0,0,0.5)]"
                />
              </motion.div>

              <motion.div 
                key={`${selectedImage}-info`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-cet-orange text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">
                  {currentItem.category}
                </span>
                <h2 className="text-white font-display font-bold text-3xl md:text-5xl uppercase tracking-tighter">
                  {currentItem.title}
                </h2>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
