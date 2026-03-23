import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { 
  Lightbulb, 
  Construction, 
  Headset, 
  UserCheck,
  Target,
  Eye,
  Phone,
  ArrowRight
} from "lucide-react";

// Asset Imports
import aboutHero from "@/assets/homee.jpg";
import mdImage from "@/assets/about.webp";
import meenakshiImg from "@/assets/Meenakshi-Jha-1024x1024.webp";
import bpSinghImg from "@/assets/B.P-Singh-1024x1024.webp";
import upSinghImg from "@/assets/U.P.-Singh-1024x1024.webp";
import umeshSinhaImg from "@/assets/Umesh-Kumar-Sinha-1024x1024.webp";

// Partner Asset Imports
import chaddaLogo from "@/assets/CHADDA-ASSOCIATES-Logo.webp";
import hdfcLogo from "@/assets/HDFC-logo.webp";
import iobLogo from "@/assets/Indian-Overseas-Bank-Logo.webp";
import projectLogo from "@/assets/project.webp";
import reraLogo from "@/assets/Rera-Approved-Logo.webp";
import sbiLogo from "@/assets/SBI-Logo.webp";

const features = [
  { icon: UserCheck, title: "Professional Specialist", desc: "Expert guidance from industry veterans." },
  { icon: Lightbulb, title: "Brilliant Ideas", desc: "Innovation in every architectural design." },
  { icon: Construction, title: "Precise Builders", desc: "Crafting perfection with every brick." },
  { icon: Headset, title: "24/7 Assistance", desc: "Dedicated support for your peace of mind." },
];

const team = [
  { name: "Meenakshi Jha", role: "Head (Operations)", image: meenakshiImg },
  { name: "B.P. Singh", role: "Director (Personnel and Administration)", subRole: "Retd. Coal India Officer", image: bpSinghImg },
  { name: "Umesh Kumar Sinha", role: "G.M. (Admin)", subRole: "Retd. System Incharge CCL, CMD Secretariat", image: umeshSinhaImg },
  { name: "U.P. Singh", role: "V.P. (Sales & Marketing)", subRole: "30 years Experience in Sales and Marketing", image: upSinghImg }
];

const partners = [
  { name: "SBI", img: sbiLogo },
  { name: "HDFC", img: hdfcLogo },
  { name: "Indian Overseas Bank", img: iobLogo },
  { name: "Chadda & Associates", img: chaddaLogo },
  { name: "RERA Approved", img: reraLogo },
  { name: "Project", img: projectLogo },
];

const stats = [
  { value: "6K+", label: "Happy Clients" },
  { value: "12", label: "Years Exp." },
  { value: "25+", label: "Professionals" },
  { value: "1", label: "Cities" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#121a73] text-white">
      <SiteHeader />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0">
          <img src={aboutHero} alt="Amvisha Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121a73] via-transparent to-[#121a73]/80" />
        </motion.div>
        <div className="relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#f97316] font-meta text-xs font-black uppercase tracking-[0.4em] mb-4 block">A Legacy of Trust</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-display text-6xl lg:text-8xl font-black tracking-tighter">
            Who We <span className="text-[#f97316]">Are.</span>
          </motion.h1>
          <div className="h-1 w-24 bg-[#f97316] mx-auto mt-6" />
        </div>
      </section>

      {/* --- WHO WE ARE CONTENT --- */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-[#f97316] font-meta text-xs font-black uppercase tracking-[0.4em] mb-6">Established 2018</h2>
              <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tight leading-none mb-10">Revolutionizing the <br /> <span className="text-[#f97316]">Real Estate Industry.</span></h3>
              <div className="space-y-6 text-white/60 font-meta text-lg leading-relaxed">
                <p>Amvisha Real Estate Developers Pvt Ltd, founded in 2018 by the visionary Sri Amaresh Jha, is a dynamic organization dedicated to revolutionizing the real estate industry by providing unparalleled housing solutions.</p>
              </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
              {features.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="mt-1"><item.icon className="text-[#f97316]" size={20} strokeWidth={1.5} /></div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-white mb-1.5">{item.title}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative lg:sticky lg:top-28">
            <div className="relative rounded-sm overflow-hidden group shadow-2xl border border-white/5">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#121a73]">
                <img src={mdImage} alt="Amaresh Jha" className="w-full h-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121a73] via-transparent to-transparent opacity-80" />
              </div>
              <div className="bg-[#121a73] p-8 border-t border-white/5 text-center">
                <h4 className="text-xl font-black uppercase tracking-tighter text-white">Sri Amaresh Jha</h4>
                <p className="text-[#f97316] font-meta text-xs font-bold uppercase tracking-[0.3em] mt-1.5">Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-32 px-6 lg:px-12 bg-[#121a73] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="relative p-10 border border-white/5 bg-white/[0.01]">
              <Target className="text-[#f97316] mb-8" size={40} />
              <h2 className="text-[#f97316] font-display text-xs font-black uppercase tracking-[0.5em] mb-6">Our Mission</h2>
              <p className="text-white/70 font-meta text-sm leading-relaxed">Our mission is to reinvent the experience of property buying by placing a high value on transparency, integrity, and personalized service.</p>
            </div>
            <div className="relative p-10 border border-white/5 bg-white/[0.01]">
              <Eye className="text-[#f97316] mb-8" size={40} />
              <h2 className="text-[#f97316] font-display text-xs font-black uppercase tracking-[0.5em] mb-6">Our Vision</h2>
              <p className="text-white/70 font-meta text-sm leading-relaxed">Empowering Dreams, Building Legacies: To be the premier real estate developer synonymous with innovation and unparalleled quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERT TEAM SECTION --- */}
      <section className="py-32 px-6 lg:px-12 bg-[#121a73]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#f97316] font-meta text-xs font-black uppercase tracking-[0.4em] mb-4 block">Meet The Professionals</motion.span>
            <h2 className="font-display text-4xl lg:text-6xl font-black uppercase tracking-tighter">Our Expert Team <span className="text-[#f97316]">Members.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative">
                <div className="relative aspect-square overflow-hidden bg-[#121a73] mb-6 border border-white/5">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-[#f97316]/20 group-hover:border-r-[#f97316]/50 transition-all" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-lg font-black uppercase tracking-tight text-white mb-1 group-hover:text-[#f97316] transition-colors">{member.name}</h4>
                  <p className="text-[#f97316] font-meta text-[10px] font-black uppercase tracking-[0.2em] mb-2">{member.role}</p>
                  {member.subRole && <p className="text-white/30 font-meta text-[9px] uppercase leading-relaxed tracking-wider">{member.subRole}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NUMBERS SPEAK SECTION --- */}
      <section className="flex flex-col lg:flex-row w-full bg-[#f97316] min-h-[220px]">
        <div className="flex-1 flex justify-around items-center py-12 px-4">
          {stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="text-center text-[#121a73]">
              <h4 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none">{stat.value}</h4>
              <p className="uppercase text-[10px] font-bold tracking-[0.3em] mt-2 opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#121a73] flex items-center justify-center px-16 py-12 min-w-[380px]">
          <h2 className="text-[#f97316] font-display text-4xl lg:text-5xl font-black uppercase text-center leading-[0.85] tracking-tighter">Numbers <br /> Speak</h2>
        </div>
        <div className="flex-1 flex justify-around items-center py-12 px-4">
          {stats.slice(2, 4).map((stat, i) => (
            <div key={i} className="text-center text-[#121a73]">
              <h4 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none">{stat.value}</h4>
              <p className="uppercase text-[10px] font-bold tracking-[0.3em] mt-2 opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- OUR PARTNERS SECTION --- */}
      <section className="py-24 bg-[#121a73] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#f97316] font-meta text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">Our Trusted Network</motion.span>
            <h2 className="font-display text-3xl lg:text-5xl font-black uppercase tracking-tighter">Banking & Strategic <span className="text-[#f97316]">Partners.</span></h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map((partner, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1, opacity: 1 }} className="transition-all duration-300">
                <img src={partner.img} alt={partner.name} className="h-10 lg:h-16 w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION SECTION --- */}
      <section className="relative py-32 px-6 lg:px-12 bg-[#121a73] overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src={aboutHero} alt="background" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[#f97316] font-display text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
              We Provide the Best <br /> Service in Industry.
            </h2>
            <p className="text-white/60 font-meta text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
              Connect with us if you are planning for an Investment or Conceptualizing your Dream Home. We are eagerly waiting to help you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-12">
              <a 
                href="/contact" 
                className="group flex items-center gap-4 bg-[#f97316] text-black font-black uppercase tracking-[0.2em] px-10 py-5 text-sm hover:bg-white transition-all"
              >
                Contact Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Or Give Us a Call At</span>
                <a href="tel:+918271985000" className="flex items-center gap-3 text-2xl lg:text-3xl font-black text-white hover:text-[#f97316] transition-colors">
                  <Phone size={24} className="text-[#f97316]" />
                  +91 8271985000
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default About;