import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const STATIC_GALLERY = [
  { id: 1, src: "https://lh3.googleusercontent.com/d/1Ffa2zzNmTGpVIx-7HQkHteZVA4SQed5S", title: "Executive Leadership Summit", category: "Leadership", size: "large" },
  { id: 2, src: "https://lh3.googleusercontent.com/d/1AX3UvZGGrgg_WGFoweZKcHjglSVNTwRd", title: "Corporate Strategy Workshop", category: "Training", size: "normal" },
  { id: 3, src: "https://lh3.googleusercontent.com/d/1Je8NhHXE4VgO6ePg-fO06CrVA2QR2Rfq", title: "Administrative Excellence Seminar", category: "Administrative", size: "tall" },
  { id: 4, src: "https://lh3.googleusercontent.com/d/1bJOQZ4Ru2j5RbjnSxNRkXfcqhPy8Tvcu", title: "Global Business Perspectives", category: "International", size: "normal" },
  { id: 5, src: "https://lh3.googleusercontent.com/d/1puZO1htTvRWDhSpXWAGkry4M4bv9jr9S", title: "High-Performance Management Group", category: "Management", size: "wide" },
  { id: 6, src: "https://lh3.googleusercontent.com/d/1stNKjHymT6-U6PbXrU9b0I6g5xiDSzQ5", title: "Professional Certification Cohort", category: "Certification", size: "normal" },
  { id: 7, src: "https://lh3.googleusercontent.com/d/1bDnz9UeOJIVWTFyOK8lzJf2lHVRR0dD6", title: "Networking & Mentorship Evening", category: "Networking", size: "large" },
  { id: 8, src: "https://lh3.googleusercontent.com/d/1Pef0MniSwwgJMFBb8CU939ZQ3Pz2YPCo", title: "Institutional Awards Gala", category: "Ceremony", size: "normal" },
  { id: 9, src: "https://lh3.googleusercontent.com/d/1pacui1ius97Zf-0LcFL48PdX-nvX5mcp", title: "Strategic Resource Management", category: "Training", size: "tall" },
  { id: 10, src: "https://lh3.googleusercontent.com/d/1Kq7MHT_Fdr26PEvvO50dyzFbhXZBcY6U", title: "Human Resource Development Lab", category: "HR", size: "normal" },
  { id: 11, src: "https://lh3.googleusercontent.com/d/1JrS6ORmaZlOU1eXBJC_Ihh-4hDdPuGj5", title: "Executive Board Session", category: "Leadership", size: "wide" },
  { id: 12, src: "https://lh3.googleusercontent.com/d/1ipD_EuDgna7PcQf2yR9BydHJJG9hh3uw", title: "Public Sector Innovation Forum", category: "Public Sector", size: "normal" },
  { id: 13, src: "https://lh3.googleusercontent.com/d/1ty1bUBbw5Pem4ZDgJQoInX2NWLWF5pUe", title: "International Certification Ceremony", category: "Global", size: "normal" }
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
    <main className="pt-32 sm:pt-40 bg-slate-50 min-h-screen">
      {/* Editorial Header */}
      <div className="bg-cet-blue py-24 sm:py-32 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cet-orange/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-cet-orange font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Visual Portfolio</h2>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-[0.9]">
              Excellence <br /><span className="text-slate-400 font-light italic">Captured.</span>
            </h1>
            <p className="text-slate-300 text-lg font-light leading-relaxed max-w-xl">
              Step into the world of CETPD. A curated collection of moments from our global executive training sessions, professional ceremonies, and networking forums.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Rail */}
      <div className="bg-white border-b border-slate-200 sticky top-16 sm:top-24 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar gap-8 py-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative ${
                  activeCategory === cat ? 'text-cet-orange' : 'text-slate-400 hover:text-cet-blue'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCat"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-cet-orange" 
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]"
          >
            {filteredGallery.map((item, index) => {
              const spanClasses: Record<string, string> = {
                normal: "col-span-1 row-span-1",
                wide: "md:col-span-2 row-span-1",
                tall: "col-span-1 row-span-2",
                large: "md:col-span-2 row-span-2"
              };
              
              const currentSpan = spanClasses[item.size] || "col-span-1 row-span-1";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0.8, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.id}
                  onClick={() => setSelectedImage(item.id)}
                  className={`group relative overflow-hidden bg-slate-200 cursor-zoom-in ${currentSpan}`}
                >
                  <img 
                    src={item.src} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cet-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-cet-orange text-[9px] font-bold uppercase tracking-widest mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-white font-display font-bold text-lg leading-tight uppercase tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="absolute top-8 right-8 w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all delay-100">
                      <Maximize2 className="text-white" size={16} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
