import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { X, Camera, ArrowRight } from "lucide-react";

// --- Asset Imports ---
import am1 from "@/assets/1.webp";
import am2 from "@/assets/2.webp";
import am3 from "@/assets/3.webp";
import am4 from "@/assets/4.webp";
import am5 from "@/assets/5.webp";
import am6 from "@/assets/6.webp";
import am7 from "@/assets/7.webp";
import am8 from "@/assets/8.webp";
import am9 from "@/assets/9.webp";

import bp1 from "@/assets/Bhumi-Pujan-1.webp";
import bp2 from "@/assets/Bhumi-Pujan-2.webp";
import bp3 from "@/assets/Bhumi-Pujan-3.webp";
import bp4 from "@/assets/Bhumi-Pujan-4.webp";
import bp5 from "@/assets/Bhumi-Pujan-5.webp";

import m1 from "@/assets/p1.webp";
import m2 from "@/assets/p2.webp";
import m3 from "@/assets/p3.webp";
import m4 from "@/assets/p4.webp";

const categories = ["All", "Amenities", "Bhumi Pujan", "Media"];

const galleryImages = [
  // Amenities
  { id: 1, src: am1, category: "Amenities", title: "Luxury Living Space" },
  { id: 2, src: am2, category: "Amenities", title: "Architectural Detail" },
  { id: 3, src: am3, category: "Amenities", title: "Modern Amenities" },
  { id: 4, src: am4, category: "Amenities", title: "Premium Finishes" },
  { id: 5, src: am5, category: "Amenities", title: "Lifestyle Gallery" },
  { id: 6, src: am6, category: "Amenities", title: "Interior Excellence" },
  { id: 7, src: am7, category: "Amenities", title: "Design Perspective" },
  { id: 8, src: am8, category: "Amenities", title: "Modern Infrastructure" },
  { id: 9, src: am9, category: "Amenities", title: "Elegant Spaces" },

  // Bhumi Pujan
  { id: 10, src: bp1, category: "Bhumi Pujan", title: "Traditional Inception" },
  { id: 11, src: bp2, category: "Bhumi Pujan", title: "Sacred Ceremony" },
  { id: 12, src: bp3, category: "Bhumi Pujan", title: "Project Foundation" },
  { id: 13, src: bp4, category: "Bhumi Pujan", title: "Auspicious Start" },
  { id: 14, src: bp5, category: "Bhumi Pujan", title: "Ceremony Highlights" },

  // Media
  { id: 15, src: m1, category: "Media", title: "Press Coverage" },
  { id: 16, src: m2, category: "Media", title: "Featured Publication" },
  { id: 17, src: m3, category: "Media", title: "News Clipping" },
  { id: 18, src: m4, category: "Media", title: "Publicity Feature" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-[#121a73] text-white font-meta selection:bg-[#f97316]">
      <SiteHeader />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[45vh] flex items-center justify-center pt-20">
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-[#f97316]" />
            <span className="text-[#f97316] text-[10px] font-black uppercase tracking-[0.6em]">Portfolio</span>
            <div className="h-[1px] w-8 bg-[#f97316]" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-display text-5xl lg:text-9xl font-black uppercase tracking-tighter"
          >
            THE <span className="text-[#f97316]">GALLERY</span>
          </motion.h1>
        </div>
      </section>

      {/* --- FILTER NAVIGATION --- */}
      <section className="sticky top-[70px] z-40 bg-[#121a73]/80 backdrop-blur-xl border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-8 lg:gap-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="relative py-2 group"
            >
              <span className={`text-[11px] font-black uppercase tracking-[0.4em] transition-colors duration-300 ${
                filter === cat ? "text-[#f97316]" : "text-white/40 group-hover:text-white"
              }`}>
                {cat}
              </span>
              {filter === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f97316]"
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* --- GALLERY GRID --- */}
      <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="group relative cursor-crosshair overflow-hidden bg-[#111113] border border-white/[0.03]"
                onClick={() => setSelectedImg(img.src)}
              >
                {/* Aspect Ratio Box */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
                  />
                </div>
                
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#f97316] text-[9px] font-black uppercase tracking-[0.4em] mb-3">
                      {img.category}
                    </p>
                    <h3 className="text-xl font-display font-black uppercase tracking-tight leading-none">
                      {img.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 lg:p-12 bg-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white/30 hover:text-white transition-colors">
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImg} 
              alt="Full view" 
              className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/[0.05]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- SIGNATURE CTA --- */}
      <section className="py-40 bg-[#070708] text-center border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto px-6">
          <Camera className="text-[#f97316]/30 mx-auto mb-12" size={32} strokeWidth={1} />
          <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter font-display mb-12 leading-[0.9]">
            Architecture is <br /> <span className="text-[#f97316]">Visual Poetry.</span>
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="group inline-flex items-center gap-6 bg-white text-black font-black uppercase px-14 py-6 text-[11px] tracking-[0.4em] transition-all shadow-xl"
          >
            Inquire Project <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Gallery;