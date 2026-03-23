import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { 
  Download, 
  ChevronDown,
  X,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MapPin,
  ShoppingBag,
  Flower2,
  Trophy,
  Leaf,
  Waves,
  Baby,
  Timer,
  Zap,
  Church,
  BookOpen,
  Car,
  Maximize,
  User,
  Gamepad2,
  Droplets,
  Theater,
  ArrowUpToLine,
  Compass,
  CloudRain,
  Dumbbell,
  Coffee,
  ShieldCheck,
  Users,
  Map as MapIcon,
  Layout,
  Phone,
  ArrowRight
} from "lucide-react";

// Asset Imports
import projectHero from "@/assets/homee.jpg"; 
import lotusLogoCard from "@/assets/2-2-1536x1024-1-1024x683.webp"; 
import igbcCert from "@/assets/IGBC.webp";
import chaddaLogo from "@/assets/CHADDA-ASSOCIATES-Logo.webp";
import bhk3 from "@/assets/3-BHK.webp";
import bhk4 from "@/assets/4-BHK.webp";
import pentHouse from "@/assets/Pent-House.webp";

// Technical Plans Imports
import basementPlan from "@/assets/besement-plan.webp";
import sitePlan from "@/assets/Site-Plan-with-Flat-Division-1.webp";
import locationMap from "@/assets/Location-Map.webp";

const projectHighlights = [
  "LUXURY FLAT WITH ALL THE AMENITIES",
  "ENTIRE CAMPUS WILL SPREAD ACROSS 25 ACRE OF LAND",
  "40 FEET WIDE ROAD IN THE CAMPUS",
  "QUALITY AND HEALTHY LIFE AMENITIES",
  "SUPERMARKET IN THE CAMPUS",
  "IGBC GOLD CERTIFIED",
  "PROPOSED TWO TOWERS – B+G+12",
  "GOVERNMENT NORM COMPLIANT"
];

const bhkPlans = [
  { title: "3-BHK Luxury Plan", img: bhk3 },
  { title: "4-BHK Premium Plan", img: bhk4 },
  { title: "Luxury Penthouse", img: pentHouse },
];

const technicalPlans = [
  { title: "Basement Plan", img: basementPlan, icon: Layout },
  { title: "Site Plan", img: sitePlan, icon: Maximize },
  { title: "Location Map", img: locationMap, icon: MapIcon },
];

const amenityList = [
  { name: "Retail Shop", icon: ShoppingBag },
  { name: "Yoga & Meditation", icon: Flower2 },
  { name: "Outdoor Games", icon: Trophy },
  { name: "Green Building", icon: Leaf },
  { name: "Club & Swimming Pool", icon: Waves },
  { name: "Garden & Kids Play", icon: Baby },
  { name: "Jogging Arena", icon: Timer },
  { name: "24/7 Power Backup", icon: Zap },
  { name: "Temple", icon: Church },
  { name: "Library", icon: BookOpen },
  { name: "EV Charging Points", icon: Car },
  { name: "70% Open Space", icon: Maximize },
  { name: "Staff Room", icon: User },
  { name: "Indoor Games", icon: Gamepad2 },
  { name: "Car Wash", icon: Droplets },
  { name: "Amphi Theatre", icon: Theater },
  { name: "Double Height Terrace", icon: ArrowUpToLine },
  { name: "Vastu Compliant", icon: Compass },
  { name: "Rainwater Harvesting", icon: CloudRain },
  { name: "Gymnasium", icon: Dumbbell },
  { name: "Sports Bar & Cafe", icon: Coffee },
  { name: "CCTV & Security", icon: ShieldCheck },
  { name: "Community Halls", icon: Users }
];

const Projects = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#121a73] text-white font-meta selection:bg-[#f97316] selection:text-white">
      <SiteHeader />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectHero} alt="Siddharth Lotus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" /> 
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7">
              <div className="flex items-center gap-2 text-[#f97316] mb-6">
                <MapPin size={18} /><span className="font-bold uppercase tracking-[0.3em] text-sm">Birla Bagan, Ranchi</span>
              </div>
              <h1 className="font-display text-5xl lg:text-8xl font-black uppercase mb-6 leading-none tracking-tighter">SIDDHARTH <br /> <span className="text-[#f97316]">LOTUS.</span></h1>
              <div className="mb-10 bg-[#f97316] text-white font-black text-xl lg:text-3xl px-8 py-4 uppercase inline-block shadow-2xl">70 FLATS + 7 PENTHOUSE</div>
              <p className="max-w-xl text-lg lg:text-xl leading-relaxed text-white/80 font-light">A sanctuary of love and big moments. Spaces designed for leisure and convenience.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl p-8 border border-white/20 rounded-sm shadow-2xl">
                <h3 className="text-xl font-black uppercase tracking-widest mb-6 text-center">Inquire Now</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Full Name" className="w-full bg-white/90 p-4 text-black outline-none font-semibold focus:ring-2 ring-[#f97316] transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/90 p-4 text-black outline-none font-semibold focus:ring-2 ring-[#f97316] transition-all" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white/90 p-4 text-black outline-none font-semibold focus:ring-2 ring-[#f97316] transition-all" />
                  <div className="relative">
                    <select className="w-full bg-white/90 p-4 pr-10 text-gray-700 outline-none appearance-none font-bold cursor-pointer">
                      <option>Select Configuration</option><option>3 BHK</option><option>4 BHK</option><option>PENTHOUSE</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                  </div>
                  <button className="w-full bg-[#f97316] text-white font-black py-5 text-sm uppercase tracking-widest hover:bg-white hover:text-[#f97316] transition-all shadow-xl">Submit Enquiry</button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MASTERPIECE SECTION --- */}
      <section className="py-32 bg-[#121a73] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[#f97316] font-display text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">Our Masterpiece</h2>
          <div className="h-1 bg-[#f97316] w-24 mx-auto mb-20" />
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-2 border-dashed border-white/10 rounded-[2rem] p-8 lg:p-16 flex flex-col lg:flex-row gap-16 items-center bg-white/[0.01]">
            <div className="lg:w-1/2 space-y-8 text-left">
              <p className="text-2xl lg:text-3xl font-light leading-snug text-white/90 italic font-display">"Welcome to Siddharth Lotus, a multi-story building masterpiece by Amvisha Real Estate."</p>
              <div className="inline-block border border-[#f97316]/30 bg-[#f97316]/5 px-6 py-3 rounded-sm"><span className="text-white font-black text-lg lg:text-2xl tracking-widest uppercase">JHARERA/PROJECT/38/2024</span></div>
            </div>
            <div className="lg:w-1/2"><img src={lotusLogoCard} alt="Logo" className="w-full h-auto rounded-2xl shadow-2xl border border-white/10" /></div>
          </motion.div>
        </div>
      </section>

      {/* --- WORLD CLASS AMENITIES --- */}
      <section className="py-32 bg-[#121a73] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="text-[#f97316] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Signature Lifestyle</span>
              <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-10 font-display leading-[0.85]">World Class <br /> <span className="text-[#f97316]">Amenities.</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 border-t border-white/5 pt-12">
                {amenityList.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-2 rounded-full bg-[#f97316]/10 text-[#f97316] group-hover:bg-[#f97316] group-hover:text-black transition-all"><item.icon size={18} /></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative lg:sticky lg:top-24">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img src={projectHero} alt="Amenities" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute bottom-8 right-8 flex gap-3"><button className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-[#f97316] transition-all"><ChevronLeft size={20} /></button><button className="p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-[#f97316] transition-all"><ChevronRight size={20} /></button></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- HANDOVER & IGBC --- */}
      <section className="py-32 bg-[#121a73] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl lg:text-5xl font-black uppercase mb-12 leading-tight text-[#f97316]">Handover <span className="text-white">Projected 2027.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectHighlights.map((text, i) => (
                <div key={i} className="border border-white/10 p-6 bg-white/[0.02] flex items-center min-h-[90px]"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">{text}</p></div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5"><motion.div whileHover={{ scale: 1.02 }} className="relative cursor-pointer rounded-lg overflow-hidden border-4 border-[#fccf8c] shadow-2xl" onClick={() => setModalImage(igbcCert)}><img src={igbcCert} alt="IGBC" className="w-full h-auto" /><div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity"><span className="bg-[#f97316] text-white text-[10px] font-black px-6 py-3 uppercase tracking-widest">Enlarge Certificate</span></div></motion.div></div>
        </div>
      </section>

      {/* --- BHK FLOOR PLANS --- */}
      <section className="py-32 bg-[#121a73] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20"><h3 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter font-display">BHK <span className="text-[#f97316]">Floor Plans.</span></h3></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {bhkPlans.map((plan, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="cursor-pointer group" onClick={() => setModalImage(plan.img)}>
                <div className="relative overflow-hidden rounded-xl border border-white/10 aspect-[4/5] bg-white/[0.02]"><img src={plan.img} alt={plan.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" /><div className="absolute bottom-6 left-6 right-6 flex justify-between items-center"><h4 className="text-lg font-black uppercase">{plan.title}</h4><div className="p-3 bg-[#f97316] text-white rounded-full"><Maximize2 size={16} /></div></div></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PLANS AND MAPS --- */}
      <section className="py-32 bg-[#121a73] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <span className="text-[#f97316] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Blueprint to Success</span>
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter font-display">Plans and <span className="text-[#f97316]">Maps.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-left">
            {technicalPlans.map((item, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="relative group cursor-pointer" onClick={() => setModalImage(item.img)}>
                <div className="bg-[#121a73] border border-white/10 rounded-2xl p-8 transition-all group-hover:border-[#f97316]/50">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-[#f97316]/10 text-[#f97316] rounded-xl"><item.icon size={24} /></div>
                    <Maximize2 size={20} className="text-white/20" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-widest text-white mb-6">{item.title}</h4>
                  <div className="aspect-video rounded-lg overflow-hidden bg-black/40 border border-white/5">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ARCHITECTURAL DESIGN --- */}
      <section className="py-32 bg-[#121a73] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/3 text-left">
            <span className="text-[#f97316] text-xs font-black uppercase tracking-[0.4em] mb-4 block">Signature Design</span>
            <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 font-display leading-[0.85]">Chadda & <br /> <span className="text-[#f97316]">Associates.</span></h2>
            <p className="text-xl lg:text-2xl font-light leading-relaxed text-white/70 border-l-4 border-[#f97316] pl-8">Curated by the eminent architect <span className="text-white font-bold">Mr. Rajeev Chadda</span>, renowned for reputation in architectural excellence.</p>
          </div>
          <div className="lg:w-1/3 p-12 bg-white rounded-2xl shadow-2xl border-4 border-[#f97316]/20 flex justify-center"><img src={chaddaLogo} alt="Architect" className="w-full h-auto object-contain max-h-32" /></div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION SECTION --- */}
      <section className="relative py-32 px-6 lg:px-12 bg-[#121a73] overflow-hidden border-t border-white/5">
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[#f97316] font-display text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              We Provide the Best <br /> Service in Industry.
            </h2>
            <p className="text-white/60 font-meta text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              Connect with us if you are planning for an Investment or Conceptualizing your Dream Home. We are eagerly waiting to help you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12 mb-16">
              <a href="/contact" className="group flex items-center gap-4 bg-[#f97316] text-black font-black uppercase tracking-[0.2em] px-10 py-5 text-sm hover:bg-white transition-all">
                Contact Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex flex-col items-center sm:items-start text-left">
                <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Or Give Us a Call At</span>
                <a href="tel:+918271985000" className="flex items-center gap-3 text-2xl lg:text-3xl font-black text-white hover:text-[#f97316] transition-colors">
                  <Phone size={24} className="text-[#f97316]" /> +91 8271985000
                </a>
              </div>
            </div>

            {/* --- LEGAL DISCLAIMER --- */}
            <div className="max-w-4xl mx-auto pt-16 border-t border-white/5">
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">Disclaimer</h4>
              <p className="text-white/30 text-[10px] lg:text-[11px] leading-relaxed uppercase tracking-widest text-center">
                This brochure is not a legal document. It describes the conceptual plan to convey the intent and purpose of 
                <span className="text-white/50"> SIDDHART LOTUS</span>. The images are imaginary and the details mentioned 
                in this brochure are tentative and subject to change at the sole discretion of the developer and/or architects.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {modalImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/98 backdrop-blur-md" onClick={() => setModalImage(null)}>
            <button className="absolute top-8 right-8 text-white/50 hover:text-[#f97316] transition-colors z-[110]"><X size={50} strokeWidth={1} /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}><img src={modalImage} alt="Enlarged" className="w-full h-auto shadow-2xl rounded-sm border border-white/10" /></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
};

export default Projects;