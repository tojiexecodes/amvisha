import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "./NavLink";
import { 
  Phone, 
  Mail, 
  Calendar, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin,
  MapPin,
  X 
} from "lucide-react"; 
import logo from "@/assets/Amvisha-Logo-With-White-Border.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/amvisharealestate/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/amvisharealestate/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCnoPEH-X7wzrV5EM8u7rjbQ", label: "Youtube" },
  { icon: Linkedin, href: "https://in.linkedin.com/company/amvisha-real-estate-developers", label: "Linkedin" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#121a73]/95 backdrop-blur-md shadow-lg" : "bg-[#121a73]"
      }`}
    >
      {/* Top Contact & Social Bar */}
      <div className={`py-3 px-4 lg:px-12 flex justify-between items-center text-xs lg:text-sm tracking-widest uppercase font-meta border-b transition-colors duration-500 text-white border-white/10`}>
        <div className="flex items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-6">
            <a href="tel:+918271985000" className="flex items-center gap-2 transition-colors hover:text-[#f97316]">
              <Phone size={14} className="text-[#f97316]" />
              <span className="font-semibold">+91 8271985000</span>
            </a>
            <a href="mailto:info@amvisha.com" className="hidden md:flex items-center gap-2 transition-colors hover:text-[#f97316]">
              <Mail size={14} className="text-[#f97316]" />
              <span className="font-semibold">info@amvisha.com</span>
            </a>
            <a 
              href="https://www.google.com/maps/place/Amvisha+Real+Estate+Developers+Pvt.+Ltd./@23.4010347,85.3637769,17z/data=!3m1!4b1!4m6!3m5!1s0x39f4e3573a1bd799:0x9d199a51cfccae72!8m2!3d23.4010347!4d85.3637769!16s%2Fg%2F11lrrycswz?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noreferrer"
              className="hidden lg:flex items-center gap-2 transition-colors hover:text-[#f97316]"
            >
              <MapPin size={14} className="text-[#f97316]" />
              <span className="font-semibold">Our Location</span>
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-4 border-l border-white/20 pl-6">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="transition-all hover:text-[#f97316] hover:-translate-y-0.5 text-white"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 group transition-colors text-white hover:text-[#f97316] uppercase tracking-wider outline-none"
          >
            <Calendar size={14} className="text-[#f97316] group-hover:scale-110 transition-transform" />
            <span className="font-bold hidden xs:inline">Request for Site Visit</span>
            <span className="font-bold xs:hidden">Site Visit</span>
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-transparent">
        <div className="flex items-center justify-between px-6 lg:px-12 h-24 lg:h-28 transition-all duration-500">
          <NavLink to="/" onClick={handleLinkClick} className="flex items-center">
            <img 
  src={logo} 
  alt="Amvisha Logo" 
  className={`transition-all duration-500 object-contain 
    ${isScrolled ? "h-16 lg:h-20" : "h-24 lg:h-28"}`
  } 
/>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={handleLinkClick}
                className={`group relative font-meta text-[16px] font-bold uppercase tracking-[0.25em] transition-all duration-500 text-white hover:text-[#f97316]`}
                activeClassName="!text-[#f97316]"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#f97316] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden font-meta text-xs font-bold uppercase tracking-widest z-50 px-4 py-2 border-2 rounded-sm transition-all duration-500 text-white border-white hover:bg-[#f97316] hover:text-white hover:border-[#f97316]`}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* --- POPUP FORM --- */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#121a73] border border-white/10 p-8 lg:p-10 rounded-sm shadow-2xl"
            >
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-[#f97316] transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <h2 className="text-[#f97316] font-display text-3xl font-black uppercase tracking-tight">Request Site Visit</h2>
                <div className="h-1 bg-[#f97316] w-12 mx-auto mt-2" />
                <p className="text-white/60 text-xs uppercase tracking-widest mt-4">Experience your future home in person.</p>
              </div>

              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:border-[#f97316] outline-none transition-colors" />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:border-[#f97316] outline-none transition-colors" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:border-[#f97316] outline-none transition-colors" />
                </div>
                <div>
                  <select className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white/40 focus:border-[#f97316] outline-none transition-colors">
                    <option className="bg-[#121a73]">Select Project</option>
                    <option className="bg-[#121a73]">Siddharth Lotus</option>
                  </select>
                </div>
                <button className="w-full bg-[#f97316] text-black font-black uppercase tracking-widest py-4 mt-4 hover:bg-white transition-all">
                  Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-b border-white/10 bg-[#121a73] shadow-xl"
          >
            <nav className="flex flex-col px-8 py-12 gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="font-display text-5xl font-light text-white transition-colors hover:text-[#f97316]"
                  activeClassName="text-[#f97316] font-medium italic"
                  onClick={handleLinkClick}
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;