import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Youtube, 
  Instagram, 
  Linkedin, 
  ChevronRight, 
  ArrowUp 
} from "lucide-react";
import logo from "@/assets/Amvisha-Logo-With-White-Border.png";
import featuredProject from "@/assets/footer1.webp";

const SiteFooter = () => {
  // Helper to force scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <footer className="bg-[#121a73] text-white overflow-hidden border-t border-white/5">
      <div className="mx-auto w-full max-w-[1764px] min-h-[641px] flex flex-col justify-between px-8 lg:px-16 pt-24 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Company Branding */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            <Link to="/" onClick={scrollToTop}>
              <img 
                src={logo} 
                alt="Amvisha Real Estate Developers" 
                className="w-full max-w-[260px] h-auto object-contain" 
              />
            </Link>
            <div className="space-y-2 border-l border-[#f97316] pl-4">
              <p className="font-meta text-[10px] uppercase tracking-[0.3em] text-white/40 leading-relaxed">
                Corporate Office: <br /> Ranchi, Jharkhand
              </p>
              <p className="font-meta text-[10px] uppercase tracking-[0.3em] text-[#f97316] font-bold">
                JHARERA CERTIFIED
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-[#f97316] font-display text-xs font-black uppercase tracking-[0.4em] mb-12 opacity-80">
              Corporate Contact
            </h3>
            <ul className="space-y-8 text-sm lg:text-base">
              <li className="flex items-start gap-5 group">
                <Phone size={18} className="text-[#f97316] mt-1 shrink-0" />
                <a href="tel:+918271985000" className="opacity-70 hover:opacity-100 hover:text-[#f97316] transition-all font-medium tracking-tight">
                  +91 82719 85000
                </a>
              </li>
              <li className="flex items-start gap-5 group">
                <Mail size={18} className="text-[#f97316] mt-1 shrink-0" />
                <a href="mailto:info@amvisha.com" className="opacity-70 hover:opacity-100 hover:text-[#f97316] transition-all break-all font-medium tracking-tight">
                  info@amvisha.com
                </a>
              </li>
              <li className="flex items-start gap-5">
                <MapPin size={18} className="text-[#f97316] mt-1 shrink-0" />
                <p className="opacity-70 leading-relaxed text-sm font-medium">
                  E 18, Arvind Marg, Bariatu, <br /> 
                  Ranchi, Jharkhand, 834009
                </p>
              </li>
            </ul>
          </div>

          {/* Site Map / Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-[#f97316] font-display text-xs font-black uppercase tracking-[0.4em] mb-12 opacity-80">
              Site Map
            </h3>
            <ul className="space-y-5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="flex items-center gap-3 text-xs lg:text-sm uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-[#f97316] transition-all group font-bold"
                  >
                    <ChevronRight size={12} className="text-[#f97316] transition-transform group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Project Frame */}
          <div className="lg:col-span-4">
            <div className="relative group rounded-sm overflow-hidden border border-white/10 bg-[#121a73] shadow-2xl">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={featuredProject} 
                  alt="Siddharth Lotus" 
                  className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] pointer-events-none" />
              </div>
              
              <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none">
                <span className="text-[9px] uppercase font-black tracking-[0.3em] text-white bg-[#f97316] px-3 py-1.5 shadow-lg">
                  Ongoing
                </span>
                <span className="text-[9px] uppercase font-black tracking-[0.3em] text-white/60 bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/5">
                  Ranchi
                </span>
              </div>

              <div className="bg-[#121a73] p-5 border-t border-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xs uppercase font-black tracking-[0.2em] text-white mb-1">
                      Siddharth Lotus
                    </h4>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-white/40">
                      Premium Residential
                    </p>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10 mx-4" />
                  <Link 
                    to="/projects" 
                    onClick={scrollToTop}
                    className="text-[10px] uppercase font-black tracking-widest text-[#f97316] hover:text-white transition-colors"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="font-meta text-[10px] uppercase tracking-[0.3em] text-white/40">
              Copyright © 2026 amvisha.com
            </p>
            <p className="font-meta text-[9px] uppercase tracking-[0.2em] text-white/20">
              Architecture & Strategy by marketomonk.com
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-3 text-white/20 hover:text-[#f97316] transition-all order-first md:order-none"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-[9px] uppercase tracking-[0.5em] font-bold">Top</span>
          </button>

          <div className="flex items-center gap-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#f97316] transition-all hover:scale-110">
              <Facebook size={18} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#f97316] transition-all hover:scale-110">
              <Youtube size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#f97316] transition-all hover:scale-110">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#f97316] transition-all hover:scale-110">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;