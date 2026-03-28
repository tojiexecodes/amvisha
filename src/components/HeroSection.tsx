import { motion } from "framer-motion";
import { Play, MapPin, ArrowRight } from "lucide-react";

const brandCurve = [0.23, 1, 0.32, 1] as const;

const HeroSection = () => {
  const videoUrl = "https://www.youtube.com/watch?v=jFpBQtbNLGA";
  const thumbnail = "https://i.ytimg.com/vi/jFpBQtbNLGA/maxresdefault.jpg";

  return (
    <section className="relative min-h-screen bg-[#121a73] text-white flex flex-col justify-center overflow-hidden pt-32 lg:pt-40 pb-12 px-6 lg:px-20">
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-gradient-to-b lg:bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 lg:w-96 lg:h-96 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start lg:items-center relative z-10 mt-8 lg:mt-0">
        
        {/* Content Area */}
        <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: brandCurve }}
          >
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-white/60 mb-6 bg-white/5">
              Real Estate Developers
            </span>
            
            <h1 className="text-4xl lg:text-7xl font-light leading-tight tracking-tight">
              Welcome to <span className="italic font-serif">Amvisha.</span>
            </h1>
            <h2 className="text-lg lg:text-2xl text-white/80 mt-4 font-light max-w-xl leading-snug">
              Ultimate Real Estate Investment for 
              <span className="text-white font-medium"> Luxury Flats in Ranchi.</span>
            </h2>
          </motion.div>

          {/* Mobile Video Card */}
          <div className="block lg:hidden w-full my-2">
             <VideoCard videoUrl={videoUrl} thumbnail={thumbnail} isMobile />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/50 text-sm lg:text-base leading-relaxed max-w-lg border-l border-white/10 pl-5 my-2"
          >
            We represent the pinnacle of perfection in Ranchi's market, from gorgeous villas to stylish penthouses.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button className="w-full lg:w-auto bg-white text-[#121a73] px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group shadow-2xl active:scale-[0.98]">
              View Properties <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Desktop Video Card */}
        <div className="hidden lg:block lg:col-span-5 order-1 lg:order-2">
           <VideoCard videoUrl={videoUrl} thumbnail={thumbnail} />
        </div>

      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-20 lg:mt-32 border-t border-white/5 pt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4"
      >
        {[
          { label: "Luxury Units", val: "3 & 4 BHK" },
          { label: "Smart Security", val: "24/7" },
          { label: "Amenities", val: "Premium" },
          { label: "Prime Location", val: "Ranchi" }
        ].map((stat, i) => (
          <div key={i} className="text-center lg:text-left">
            <p className="text-xl lg:text-2xl font-light">{stat.val}</p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 mt-2">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const VideoCard = ({ videoUrl, thumbnail, isMobile = false }: { videoUrl: string, thumbnail: string, isMobile?: boolean }) => (
  <motion.div 
    className="relative"
    initial={isMobile ? {} : { opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: brandCurve }}
  >
    <div className={`relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${isMobile ? 'my-6' : ''}`}>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <img
          src={thumbnail}
          alt="Amvisha Luxury Flats"
          className="w-full h-full object-cover" 
        />
        {/* Play Overlay - Removed blur and hover scale for a cleaner look */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Play className="text-[#121a73] fill-[#121a73] w-5 h-5 lg:w-6 lg:h-6 ml-1" />
          </div>
        </div>
      </a>
    </div>
    
    {/* Location Badge */}
    <div className={`absolute -bottom-4 -left-2 lg:-left-4 bg-[#0e145a] py-3 px-4 rounded-xl border border-white/10 flex items-center gap-3 shadow-2xl ${isMobile ? 'scale-90' : ''}`}>
       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
       <p className="text-[10px] lg:text-xs font-medium tracking-wide text-white/90">Siddharth Lotus, Bariatu</p>
    </div>
  </motion.div>
);

export default HeroSection;