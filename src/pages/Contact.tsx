import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  Send,
  ArrowRight
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us Directly",
    detail: "+91 82719 58000",
    link: "tel:+918271958000",
    sub: "Mon-Sat, 10am - 7pm"
  },
  {
    icon: Mail,
    title: "Email Inquiries",
    detail: "info@amvisha.com",
    link: "mailto:info@amvisha.com",
    sub: "Response within 24 hours"
  },
  {
    icon: MapPin,
    title: "Corporate Office",
    detail: "E 18, Arvind Marg, Bariatu",
    link: "https://maps.google.com/?q=Amvisha+Real+Estate+Ranchi",
    sub: "Ranchi, Jharkhand 834009"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121a73] text-white font-meta selection:bg-[#f97316]">
      {/* Ensure Header is at the top level */}
      <SiteHeader />

      {/* --- HERO SECTION --- */}
      {/* Added pt-32 to prevent content from hiding behind a fixed header */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden border-b border-white/5 pt-32 pb-20">
        <div className="absolute inset-0 bg-[#121a73] z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[#f97316] text-xs font-black uppercase tracking-[0.6em] mb-4 block"
          >
            Connect With Excellence
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-display text-6xl lg:text-9xl font-black uppercase tracking-tighter"
          >
            CONTACT <span className="text-[#f97316]">US.</span>
          </motion.h1>
          <div className="h-1.5 w-32 bg-[#f97316] mx-auto mt-8" />
        </div>
      </section>

      {/* --- CONTACT GRID --- */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Info & Rating */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter font-display mb-6">
                Let's Build Your <br /> <span className="text-[#f97316]">Dream Together.</span>
              </h2>
              
              {/* Google Rating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl mb-8"
              >
                <div className="flex gap-1 text-[#f97316]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f97316" />)}
                </div>
                <div className="h-4 w-[1px] bg-white/20" />
                <span className="font-black text-xl text-white">5.0</span>
                <span className="text-white/40 text-[10px] uppercase tracking-widest">(11 Reviews)</span>
              </motion.div>

              <p className="text-white/50 text-lg font-light leading-relaxed max-w-md">
                Our team at Amvisha is dedicated to providing unparalleled housing solutions. Visit our corporate office in Bariatu to discuss your next big investment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="p-4 bg-[#121a73] text-[#f97316] rounded-xl group-hover:bg-[#f97316] group-hover:text-black transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/30 mb-1">{item.title}</h4>
                    <p className="text-xl font-black group-hover:text-[#f97316] transition-colors">{item.detail}</p>
                    <span className="text-[10px] uppercase tracking-widest text-white/20">{item.sub}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#121a73] p-8 lg:p-12 border border-white/10 rounded-sm shadow-2xl"
          >
            <h3 className="text-2xl font-black uppercase tracking-widest mb-10 border-b border-[#f97316] pb-4 inline-block">
              Send an Enquiry
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-[#f97316] transition-all font-bold text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Mobile Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-[#f97316] transition-all font-bold text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-[#f97316] transition-all font-bold appearance-none cursor-pointer text-white">
                  <option className="bg-[#121a73]">Project Inquiry (Siddharth Lotus)</option>
                  <option className="bg-[#121a73]">Investment Opportunity</option>
                  <option className="bg-[#121a73]">General Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 outline-none focus:border-[#f97316] transition-all font-bold resize-none text-white" />
              </div>

              <button className="group w-full bg-[#f97316] text-black font-black uppercase tracking-widest py-6 text-sm hover:bg-white transition-all shadow-xl flex items-center justify-center gap-4">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* --- GOOGLE MAPS SECTION --- */}
      <section className="h-[500px] border-t border-white/5 relative bg-[#121a73]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.7618056262446!2d85.349915!3d23.39634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4f1d73a39d799%3A0x9d199a51cfccae72!2sAmvisha%20Real%20Estate%20Developers%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1710920000000!5m2!1sen!2sin" 
          className="w-full h-full grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-[#121a73] border border-[#f97316]/30 px-6 py-3 rounded-full shadow-2xl pointer-events-none z-10">
          <p className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-white">
            <Clock size={12} className="text-[#f97316]" /> Visit us at E 18, Arvind Marg, Ranchi
          </p>
        </div>
      </section>

      {/* --- SIGNATURE FOOTER --- */}
      <section className="py-24 bg-[#121a73] text-center border-t border-white/5">
        <h2 className="text-white/20 text-4xl lg:text-7xl font-black uppercase tracking-tighter font-display mb-10 leading-none">
          Legacy of Trust. <br /> Built for Life.
        </h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="group inline-flex items-center gap-4 text-[#f97316] font-black uppercase tracking-[0.3em] text-xs border-b-2 border-[#f97316] pb-2 transition-all"
        >
          Explore Projects <ArrowRight size={16} />
        </motion.button>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;