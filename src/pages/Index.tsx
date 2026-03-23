import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gamepad2, Users, Dumbbell, Waves, Trees, Trophy, 
  Quote, Star, ChevronLeft, ChevronRight, Calendar as CalendarIcon 
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import SiteFooter from "@/components/SiteFooter";

// Asset Imports
import siddharthLotus from "@/assets/Siddharth-Lotus-Hoarding-W10-X-H12-FT-01.webp";
import ongoingProjectImg from "@/assets/2-2-1536x1024-1-1024x683.webp";
import projectRight from "@/assets/2-2-1536x1024-1-1024x683.webp";
import logoDevelopers from "@/assets/Amvisha-Logo-With-White-Border.png";
import client1 from "@/assets/client-1.jpeg";
import client2 from "@/assets/client-2.webp";
import client3 from "@/assets/client-3.webp";
import client4 from "@/assets/client-4.jpeg";

// Updated News Data
const newsItems = [
  {
    title: "Benefits Of Investing In Real Estate Properties In Ranchi",
    date: "April 23, 2025",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
  },
  {
    title: "How To Find An Affordable Flat For Purchase In Ranchi",
    date: "November 5, 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
  },
  {
    title: "How To Buy Your First Home In Ranchi: A Step-By-Step Guide",
    date: "August 25, 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
  },
  {
    title: "Residential Vs Commercial Real Estate: Where Should You Invest In Ranchi",
    date: "May 20, 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  }
];

const reasons = [
  { num: "01", title: "METICULOUS PLANNING", desc: "Our services begin with thorough and detailed planning, ensuring every aspect of your project is carefully considered." },
  { num: "02", title: "TRANSPARENT COMMUNICATION", desc: "Positive and transparent communication is our commitment. We prioritize honesty, keeping customers fully informed." },
  { num: "03", title: "PERFECT EXECUTION", desc: "With a focus on precision and excellence, our projects are executed flawlessly." },
  { num: "04", title: "COMPLETION ON TIME", desc: "We prioritize efficiency, committing to delivering projects within agreed-upon timelines." },
  { num: "05", title: "CONTINUOUS SUPPORT", desc: "We provide continuous assistance in pre and post dealings." },
  { num: "06", title: "AFFORDABLE PRICES", desc: "We believe in offering value without compromising on quality." },
];

const stats = [
  { value: "6K+", label: "Happy Clients" },
  { value: "12", label: "Years Exp." },
  { value: "25+", label: "Professionals" },
  { value: "1", label: "Cities" },
];

const testimonials = [
  { name: "Gyandev Mishra", role: "Branch manager IOB", image: client1, text: "Hi, I am Gyandev Mishra Branch manager of Indian overseas Bank, My gratitude and Thanks to Amaresh sir." },
  { name: "Mr. Sanjay Sahu", role: "Director (Vedalex)", image: client2, text: "It was an pleasant experience of buying my first property with Amvisha, The Ontime Delivery was prompt." },
  { name: "Ajay Kumar Singh", role: "Ex. CMD BCCL", image: client3, text: "Real Estate is very intricate to understand... Amvisha gave me complete insight and future Benefits." },
  { name: "Amrit Anshu Bharati", role: "Second engineer (Merchant Navy)", image: client4, text: "Thanks to Amvisha Real Estate and Amaresh Ji, I now have a clear understanding of investment potential." },
];

const visualAmenities = [
  { icon: Trees, label: "Garden & Kids Play Area", bg: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=800" },
  { icon: Users, label: "Community Halls", bg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800" },
  { icon: Dumbbell, label: "Gymnasium", bg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800" },
  { icon: Waves, label: "Swimming Pool", bg: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800" },
  { icon: Trophy, label: "Badminton Court View", bg: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800" },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);

  const nextNews = () => {
    setNewsIndex((prev) => (prev + 2 >= newsItems.length ? 0 : prev + 2));
  };

  const prevNews = () => {
    setNewsIndex((prev) => (prev - 2 < 0 ? Math.max(0, newsItems.length - 2) : prev - 2));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <HeroSection />

      {/* Main Content - Orange Section */}
      <section className="bg-[#f97316] min-h-screen flex items-center justify-center py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h1 className="font-display text-4xl lg:text-6xl font-black uppercase leading-none mb-4 tracking-tighter">
              The Search for Your Real Estate <br /> Investment is Over Here!!
            </h1>
            <h2 className="font-meta text-xl lg:text-2xl font-bold uppercase tracking-widest mb-4 border-b-4 border-white inline-block pb-2">
              Where Your Visions Are Built by Us
            </h2>
            <p className="font-bold text-lg mt-8">Welcome to AMVISHA, your starting point for ideal real estate investment.</p>
            <button className="mt-10 bg-[#121a73] text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors">Read More</button>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-[#f5f1e6] p-4 shadow-2xl rounded-sm">
            <img src={siddharthLotus} alt="Siddharth Lotus" className="w-full h-auto" />
            <div className="bg-[#121a73] text-white p-6 flex justify-between items-center">
                <img src={logoDevelopers} alt="Amvisha" className="h-6 w-auto brightness-200" />
                <a href="tel:8271985000" className="text-2xl lg:text-3xl font-black tracking-tighter">82719 85000</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Amenities Gallery */}
      <section className="flex flex-col lg:flex-row w-full min-h-[350px]">
        {visualAmenities.map((item, idx) => (
          <div key={idx} className="relative flex-1 group overflow-hidden min-h-[250px]">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.bg})` }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500" />
            <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="text-[#f97316] mb-4 transform group-hover:scale-125 transition-transform duration-500">
                <item.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm lg:text-base px-4">{item.label}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* Aligned Numbers Speak Section */}
      <section className="flex flex-col lg:flex-row w-full bg-[#f97316] min-h-[220px]">
        <div className="flex-1 flex justify-around items-center py-10 lg:py-0 px-4">
          {stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="text-center text-[#121a73]">
              <h4 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none">{stat.value}</h4>
              <p className="uppercase text-[10px] lg:text-xs font-bold tracking-[0.2em] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#121a73] flex items-center justify-center px-16 py-12 min-w-[340px]">
          <h2 className="text-[#f97316] font-display text-4xl lg:text-5xl font-black uppercase text-center leading-[0.85]">Numbers <br/> Speak</h2>
        </div>
        <div className="flex-1 flex justify-around items-center py-10 lg:py-0 px-4">
          {stats.slice(2, 4).map((stat, i) => (
            <div key={i} className="text-center text-[#121a73]">
              <h4 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none">{stat.value}</h4>
              <p className="uppercase text-[10px] lg:text-xs font-bold tracking-[0.2em] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ongoing Project */}
      <section className="bg-[#121a73] py-24 px-6 lg:px-12 flex flex-col items-center">
        <h2 className="text-[#f97316] font-display text-4xl lg:text-6xl font-black uppercase text-center">Our Ongoing Project</h2>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-6xl w-full border border-dashed border-gray-600 rounded-3xl p-8 lg:p-12 mt-12 flex flex-col lg:flex-row gap-12 items-center text-white text-center lg:text-left">
          <div className="lg:w-1/2 space-y-6">
            <p className="font-meta text-lg opacity-90 italic">“Our ongoing RERA approved project, Siddharth Lotus, stands as a testament to excellence and luxury living.”</p>
            <p className="text-[#f97316] font-bold text-xl tracking-widest uppercase">JHARERA/PROJECT/38/2024</p>
          </div>
          <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl">
            <img src={ongoingProjectImg} alt="Siddharth Lotus" className="w-full h-auto" />
          </div>
        </motion.div>
        <button className="mt-12 mb-12 bg-[#f97316] text-black font-black uppercase px-10 py-4 rounded-lg text-sm hover:bg-white transition-colors tracking-widest">Download Brochure</button>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-12 bg-[#121a73]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#f97316] font-display text-4xl lg:text-6xl font-black uppercase text-center mb-20 tracking-tighter">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className="pl-8 border-l border-[#f97316]/30 group hover:border-[#f97316] transition-all"
              >
                <span className="text-[#f97316] font-bold text-sm mb-2 block opacity-60">{reason.num}</span>
                <h3 className="text-[#f97316] font-display text-xl font-black uppercase mb-4 tracking-tight">{reason.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col lg:flex-row w-full min-h-[600px] overflow-hidden">
        <div className="lg:w-[60%] bg-[#f97316] p-8 lg:p-24 flex flex-col items-center justify-center text-center text-white relative">
          <h2 className="font-display text-4xl lg:text-6xl font-black uppercase mb-12 tracking-tighter">What Our Clients Say</h2>
          <AnimatePresence mode="wait">
            <motion.div key={currentTestimonial} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="max-w-xl">
              <Quote size={48} fill="black" stroke="none" className="mb-6 opacity-80 mx-auto" />
              <p className="font-meta text-lg italic mb-8">"{testimonials[currentTestimonial].text}"</p>
              <img src={testimonials[currentTestimonial].image} className="w-20 h-20 rounded-full mx-auto border-4 border-white mb-4 object-cover shadow-xl" />
              <h4 className="font-bold text-xl uppercase tracking-tight">{testimonials[currentTestimonial].name}</h4>
              <p className="text-sm opacity-90">{testimonials[currentTestimonial].role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrentTestimonial(i)} className={`h-2 rounded-full transition-all ${currentTestimonial === i ? "w-8 bg-black" : "w-2 bg-black/40"}`} />
            ))}
          </div>
        </div>
        <div className="lg:w-[40%] relative bg-black min-h-[400px]">
          <img src={projectRight} alt="Project" className="absolute inset-0 w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-black text-[#f97316] font-black uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors border border-[#f97316]">Download Brochure</button>
          </div>
        </div>
      </section>

      {/* Infinite/Scrollable News Section - Showing 2 at once */}
      <section className="bg-[#121a73] py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none grayscale bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000')]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-[#f97316] font-display text-4xl lg:text-6xl font-black uppercase tracking-tight">WE PROVIDE THE BEST SERVICE IN INDUSTRY</h2>
            <div className="h-1 bg-[#f97316] w-24 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <h3 className="text-[#f97316] font-display text-5xl lg:text-6xl font-black uppercase leading-none tracking-tighter mb-8">RECENTLY <br /> UPDATED NEWS</h3>
              <button className="bg-[#f97316] text-black font-black uppercase tracking-widest px-8 py-4 text-xs hover:bg-white transition-colors">MORE UPDATES</button>
            </div>

            <div className="lg:col-span-8 relative">
              <div className="overflow-hidden">
                <motion.div 
                  className="flex gap-6"
                  animate={{ x: `-${newsIndex * 50}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {newsItems.map((news, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -5 }}
                      className="min-w-full md:min-w-[calc(50%-12px)] bg-[#121a73] border border-white/5 rounded-sm overflow-hidden group"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-white font-display text-lg lg:text-xl font-bold leading-tight mb-4 group-hover:text-[#f97316] transition-colors line-clamp-2">
                          {news.title}
                        </h4>
                        <div className="flex items-center gap-2 text-white/50 text-xs font-meta uppercase tracking-widest">
                          <CalendarIcon size={14} className="text-[#f97316]" />
                          {news.date}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <div className="flex gap-4 mt-8 lg:absolute lg:-top-20 lg:right-0">
                <button onClick={prevNews} className="bg-[#f97316] p-3 rounded-full text-black hover:bg-white transition-colors shadow-lg">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextNews} className="bg-[#f97316] p-3 rounded-full text-black hover:bg-white transition-colors shadow-lg">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;