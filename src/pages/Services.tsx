import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { 
  Building2, 
  Paintbrush, 
  ShieldCheck, 
  Key, 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  TreePine,
  Layout,
  Play,
  Phone
} from "lucide-react";

// Asset Imports
import servicesHero from "@/assets/homee.jpg";

const services = [
  {
    title: "Architecture",
    desc: "Our expertise lies in crafting visionary architectural designs, blending functionality with aesthetic appeal to create spaces that inspire and elevate the human experience.",
    icon: Building2,
    features: ["Visionary Design", "Functional Appeal", "Human-Centric Spaces"]
  },
  {
    title: "Exterior Design",
    desc: "From facades to outdoor aesthetics, our specialization in exterior design ensures that the visual appeal of your project is striking and reflects the essence of your vision.",
    icon: Paintbrush,
    features: ["Facade Excellence", "Visual Impact", "Vision Alignment"]
  },
  {
    title: "Landscape Design",
    desc: "Transforming outdoor spaces into captivating environments, we specialize in creating harmonious landscapes that seamlessly integrate with surrounding architecture.",
    icon: TreePine,
    features: ["Harmonious Integration", "Captivating Environments", "Outdoor Aesthetics"]
  },
  {
    title: "Site Planning",
    desc: "With a keen focus on optimizing spatial layouts, our site planning expertise ensures efficient land use, thoughtful organization, and cohesive integration of elements.",
    icon: Layout,
    features: ["Spatial Optimization", "Efficient Land Use", "Cohesive Layouts"]
  },
  {
    title: "Residential Development",
    desc: "Crafting iconic living spaces like Siddharth Lotus, focusing on luxury, Vastu compliance, and modern aesthetics.",
    icon: Building2,
    features: ["Luxury Apartments", "Penthouses", "Smart Home Integration"]
  },
  {
    title: "Architectural Consulting",
    desc: "Partnering with top-tier firms like Chadda & Associates to provide intelligence-driven structural designs.",
    icon: Paintbrush,
    features: ["Structural Planning", "Interior Design", "Landscape Architecture"]
  },
  {
    title: "Investment Advisory",
    desc: "Strategic guidance for high-yield real estate investments in Ranchi's most promising growth corridors.",
    icon: TrendingUp,
    features: ["Market Analysis", "Portfolio Management", "ROI Projections"]
  },
  {
    title: "Property Management",
    desc: "Comprehensive post-purchase support ensuring your property remains a valuable asset for generations.",
    icon: Key,
    features: ["Maintenance", "Leasing Services", "Security Supervision"]
  }
];

const process = [
  { step: "01", title: "Meticulous Planning", desc: "Our services begin with thorough and detailed planning, ensuring every aspect of your project is carefully considered for optimal outcomes." },
  { step: "02", title: "Committed On Time", desc: "We prioritize efficiency, committing to delivering projects within agreed-upon timelines, providing you with a hassle-free experience." },
  { step: "03", title: "Perfect Execution", desc: "With a focus on precision and excellence, our projects are executed flawlessly, meeting the highest standards of quality and craftsmanship." },
  { step: "04", title: "Affordable Prices", desc: "We believe in offering value without compromising on quality, providing cost-effective solutions tailored to your needs and budget." }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-[#121a73] text-white font-meta selection:bg-[#f97316]">
      <SiteHeader />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={servicesHero} alt="Services Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#121a73] via-transparent to-[#121a73]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#f97316] text-xs font-black uppercase tracking-[0.6em] mb-4 block">Our Expertise</motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-display text-5xl lg:text-8xl font-black uppercase tracking-tighter"
          >
            Our <span className="text-[#f97316]">Services</span>
          </motion.h1>
          <div className="h-1 w-24 bg-[#f97316] mx-auto mt-8" />
        </div>
      </section>

      {/* --- MAIN SERVICES GRID --- */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#121a73] border border-white/5 p-10 lg:p-16 hover:border-[#f97316]/50 transition-all duration-500 rounded-sm"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-[#f97316]/10 text-[#f97316] rounded-xl group-hover:bg-[#f97316] group-hover:text-black transition-all">
                  <service.icon size={32} />
                </div>
                <span className="text-white/10 font-display text-6xl font-black group-hover:text-[#f97316]/20 transition-colors">0{i+1}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 font-display">{service.title}</h3>
              <p className="text-white/50 leading-relaxed mb-10 text-lg font-light">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white/80">
                    <CheckCircle2 size={16} className="text-[#f97316]" /> {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- DELIVERY PROCESS --- */}
      <section className="py-32 bg-[#121a73] border-y border-white/5 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#f97316] text-xs font-black uppercase tracking-[0.4em] mb-4 block">The Roadmap</span>
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter font-display leading-none">Our Execution <br /> <span className="text-[#f97316]">Framework.</span></h2>
            </div>
            <p className="text-white/40 max-w-md text-right uppercase text-[10px] font-black tracking-widest leading-loose">
              We maintain a rigorous standard of transparency and quality from the first brick to the final key handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-[#f97316] font-display text-5xl font-black mb-6 opacity-20 group-hover:opacity-100 transition-opacity">{item.step}</div>
                <h4 className="text-xl font-black uppercase tracking-widest mb-4">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed font-light">{item.desc}</p>
                {i !== process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-6 text-white/5">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- QUALITY ASSURANCE --- */}
      <section className="py-32 px-6 lg:px-12 bg-[#121a73]">
        <div className="max-w-5xl mx-auto text-center border-2 border-dashed border-white/10 rounded-[3rem] p-12 lg:p-24">
          <ShieldCheck className="text-[#f97316] mx-auto mb-8" size={64} />
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter font-display mb-8">Uncompromising <span className="text-[#f97316]">Standards.</span></h2>
          <p className="text-white/60 text-lg lg:text-xl leading-relaxed font-light italic">
            "Every project by Amvisha is built on the pillars of integrity and innovation. We don't just build structures; we curate legacies of comfort and safety for your family."
          </p>
        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section className="py-24 px-6 lg:px-12 bg-[#121a73]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#f97316] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Visual Experience</span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter font-display">Watch Our <span className="text-[#f97316]">Vision in Motion.</span></h2>
          </div>
          
          <motion.a 
            href="https://youtu.be/sw-am-4dT5c?si=dRlAbp0hBKJpVrZa" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative block aspect-video rounded-2xl overflow-hidden group border border-white/10 shadow-2xl"
          >
            <img 
              src={servicesHero} 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#f97316] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform duration-300">
                <Play fill="black" size={32} className="ml-1" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <span className="text-white/80 font-black uppercase tracking-widest text-xs">Play Promotional Video</span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* --- NEW FOOTER CTA SECTION --- */}
      <section className="py-32 px-6 lg:px-12 bg-[#f97316] text-black">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8"
          >
            We Provide the Best <br /> Service in Industry.
          </motion.h2>
          
          <p className="text-black/80 font-meta text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Connect with us if you are planning for an Investment or Conceptualizing your Dream Home. We are eagerly waiting to help you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12">
            <a 
              href="/contact" 
              className="group flex items-center gap-4 bg-black text-[#f97316] font-black uppercase tracking-[0.2em] px-12 py-6 text-sm hover:bg-white hover:text-black transition-all shadow-2xl"
            >
              Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex flex-col items-center sm:items-start text-left">
              <span className="text-black/50 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Or Give Us a Call At</span>
              <a 
                href="tel:+918271985000" 
                className="flex items-center gap-3 text-2xl lg:text-4xl font-black text-black hover:opacity-70 transition-opacity"
              >
                <Phone size={24} /> +91 8271985000
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Services;