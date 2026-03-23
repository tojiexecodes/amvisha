import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const brandCurve = [0.23, 1, 0.32, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] lg:h-screen overflow-hidden">
      <motion.img
        src={heroBg}
        alt="Architectural detail"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15, clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.6, ease: brandCurve }}
      />
      <div className="absolute inset-0 bg-foreground/30" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-12 pb-12 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: brandCurve }}
          className="font-meta text-primary-foreground/70 mb-4 tracking-wider uppercase text-xs"
        >
          Real Estate Developers Pvt. Ltd.
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: brandCurve }}
          className="font-display font-light italic leading-[1.1] tracking-tight text-primary-foreground max-w-4xl"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          Welcome to Amvisha.
          <span className="block not-italic font-normal mt-2 opacity-90" style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>
            Your Ultimate Real Estate Investment Solution Where You Can Buy Flats In Ranchi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-meta text-primary-foreground/60 mt-6 max-w-md"
          style={{ fontSize: "12px", lineHeight: "1.8" }}
        >
          We at “AMVISHA” are proud to be your first choice for unmatched real estate services. We are the real estate market’s pinnacle of perfection, offering everything from gorgeous villas and penthouses to prime plots and stylish apartments.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;