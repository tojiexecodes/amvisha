// 1. Import the local video asset
import heroVideo from "@/assets/3,4 BHK LUXURY FLAT & PENTHOUSE.webm";

const HeroSection = () => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-[#121a73] 
                 mt-[140px] lg:mt-[160px] 
                 h-[80vh] lg:h-[90vh]"
    >
      {/* Background Video Wrapper */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Using object-cover on a local video tag is much cleaner than 
            iframe math. It automatically fills the container while 
            maintaining the 16:9 aspect ratio of your luxury footage.
        */}
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover pointer-events-none scale-105"
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121a73] via-transparent to-[#121a73]/40 opacity-80" />
      </div>

      {/* Floating Badge for Siddharth Lotus */}
      <div className="absolute bottom-10 left-10 z-10 hidden md:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl">
          <p className="text-white text-sm font-medium tracking-widest uppercase">
            Siddharth Lotus <span className="text-[#f97316]">| Bariatu</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;