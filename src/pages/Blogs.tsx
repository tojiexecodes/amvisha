import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";

// Asset Imports (Using existing project assets for consistency)
import blogHero from "@/assets/homee.jpg";
import blog1 from "@/assets/2-2-1536x1024-1-1024x683.webp";

const blogPosts = [
  {
    id: 1,
    category: "Investment",
    title: "Why Ranchi is the Next Real Estate Hotspot in 2026",
    excerpt: "Exploring the rapid infrastructure growth and why smart investors are shifting their focus to Birla Bagan.",
    date: "March 15, 2026",
    readTime: "5 min read",
    image: blog1,
  },
  {
    id: 2,
    category: "Architecture",
    title: "The Importance of Vastu in Modern Luxury Homes",
    excerpt: "How Amvisha integrates ancient Vastu principles with contemporary high-rise structural designs.",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: blogHero,
  },
  {
    id: 3,
    category: "Sustainability",
    title: "Green Living: What an IGBC Gold Certification Means",
    excerpt: "A deep dive into how Siddharth Lotus saves 30% more energy through sustainable engineering.",
    date: "March 02, 2026",
    readTime: "6 min read",
    image: blog1,
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#121a73] text-white font-meta selection:bg-[#f97316]">
      <SiteHeader />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={blogHero} alt="Blogs Header" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#121a73] via-transparent to-[#121a73]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-[#f97316] text-xs font-black uppercase tracking-[0.6em] mb-4 block"
          >
            Insights & Perspectives
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="font-display text-5xl lg:text-9xl font-black uppercase tracking-tighter"
          >
            AMVISHA <span className="text-[#f97316]">JOURNAL.</span>
          </motion.h1>
          <div className="h-1.5 w-32 bg-[#f97316] mx-auto mt-8" />
        </div>
      </section>

      {/* --- FEATURED POST --- */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer overflow-hidden rounded-sm border border-white/5 bg-[#121a73]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto overflow-hidden">
              <img 
                src={blog1} 
                alt="Featured Post" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className="p-10 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-[#f97316] text-[10px] font-black uppercase tracking-widest mb-6">
                <Tag size={14} /> <span>Featured Article</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-6 font-display leading-tight">
                Crafting the Skyline: The Vision Behind Siddharth Lotus
              </h2>
              <p className="text-white/50 text-lg mb-10 font-light leading-relaxed">
                An exclusive interview with our lead architects on how we are redefining luxury living in the heart of Ranchi through precision and passion.
              </p>
              <div className="flex items-center gap-6 text-white/40 text-xs font-bold uppercase tracking-widest border-t border-white/5 pt-8">
                <span className="flex items-center gap-2"><Calendar size={14} /> March 18, 2026</span>
                <span className="flex items-center gap-2"><Clock size={14} /> 12 min read</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-sm mb-8 bg-[#121a73]">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              <span className="text-[#f97316] text-[10px] font-black uppercase tracking-widest block mb-4">
                {post.category}
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 font-display group-hover:text-[#f97316] transition-colors">
                {post.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-8 font-light line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">{post.date}</span>
                <div className="flex items-center gap-2 text-[#f97316] font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="py-32 px-6 lg:px-12 bg-[#121a73] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="text-[#f97316] mx-auto mb-8" size={48} />
          <h2 className="text-3xl lg:text-6xl font-black uppercase tracking-tighter font-display mb-6">
            Stay <span className="text-[#f97316]">Informed.</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 font-light">
            Subscribe to the Amvisha Journal to receive the latest updates on real estate trends, project launches, and architectural innovations directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 bg-white/5 border border-white/10 p-5 outline-none focus:border-[#f97316] transition-all text-white font-bold"
            />
            <button className="bg-[#f97316] text-black font-black uppercase tracking-widest px-10 py-5 text-xs hover:bg-white transition-all shadow-xl">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 bg-[#121a73] text-center">
        <h2 className="text-white/20 text-4xl lg:text-7xl font-black uppercase tracking-tighter font-display mb-10">
          Beyond Bricks and Mortar.
        </h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="border border-[#f97316] text-[#f97316] font-black uppercase px-16 py-6 text-sm tracking-[0.3em] hover:bg-[#f97316] hover:text-black transition-all"
        >
          View All Projects
        </motion.button>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Blogs;