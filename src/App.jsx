import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Mic2, 
  Brain, 
  Cpu, 
  Globe, 
  Zap, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  Terminal
} from 'lucide-react';

const SectionHeading = ({ children, number }) => (
  <div className="border-b-2 border-black mb-12 pb-4 flex items-end justify-between">
    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{children}</h2>
    <span className="text-2xl font-mono font-bold">[{number}]</span>
  </div>
);

const BrutalistCard = ({ title, subtitle, description, tags, link }) => (
  <div className="border-2 border-black p-6 bg-white hover:bg-black hover:text-white transition-colors duration-300 group cursor-pointer flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-bold uppercase leading-none">{title}</h3>
      <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
    </div>
    <p className="text-sm font-bold mb-4 uppercase tracking-widest opacity-70">{subtitle}</p>
    <p className="flex-grow mb-6 font-medium leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="border border-current px-2 py-1 text-xs font-bold uppercase">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-black font-sans selection:bg-black selection:text-white">
      {/* Custom Cursor Effect */}
      <div 
        className="fixed w-8 h-8 border-2 border-black rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{ left: mousePos.x - 16, top: mousePos.y - 16, transition: 'transform 0.1s ease-out' }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b-2 border-black bg-[#f0f0f0] px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase">ashu.ai</div>
        <div className="hidden md:flex gap-8 font-bold uppercase text-sm">
          <a href="#about" className="hover:line-through">About</a>
          <a href="#ventures" className="hover:line-through">Ventures</a>
          <a href="#podcast" className="hover:line-through">Podcast</a>
          <a href="#philosophy" className="hover:line-through">Philosophy</a>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl font-black uppercase"
          >
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#ventures" onClick={() => setIsMenuOpen(false)}>Ventures</a>
            <a href="#podcast" onClick={() => setIsMenuOpen(false)}>Podcast</a>
            <a href="#philosophy" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b-2 border-black">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.h1 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8"
              >
                Ashutosh <br /> Upadhyay
              </motion.h1>
              <p className="text-xl md:text-3xl font-bold max-w-2xl leading-tight uppercase">
                Founder of Cognio Labs. AI Architect. <br />
                Building the future of autonomous intelligence.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="border-4 border-black p-4 bg-white rotate-3 hover:rotate-0 transition-transform">
                <img 
                  src="https://placehold.co/400x500/000000/FFFFFF?text=ASHU" 
                  alt="Ashutosh Upadhyay" 
                  className="w-full grayscale contrast-125"
                />
              </div>
              <div className="bg-black text-white p-4 font-mono text-sm">
                <p>// STATUS: BUILDING COGNIO LABS</p>
                <p>// LOCATION: GLOBAL / NEURAL</p>
                <p>// FOCUS: AGENTIC WORKFLOWS</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise / Stats */}
        <section id="about" className="py-20 grid grid-cols-1 md:grid-cols-3 gap-0 border-b-2 border-black">
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col gap-4">
            <Brain size={48} strokeWidth={3} />
            <h3 className="text-3xl font-black uppercase">AI Agents</h3>
            <p className="font-bold">Specializing in autonomous agentic workflows and LLM orchestration for enterprise scale.</p>
          </div>
          <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col gap-4 bg-black text-white">
            <Zap size={48} strokeWidth={3} />
            <h3 className="text-3xl font-black uppercase">EdTech Success</h3>
            <p className="font-bold">Pioneered AI-driven learning platforms that scaled to serve thousands of students globally.</p>
          </div>
          <div className="p-8 flex flex-col gap-4">
            <Terminal size={48} strokeWidth={3} />
            <h3 className="text-3xl font-black uppercase">Hugging Face</h3>
            <p className="font-bold">Recognized contributor with significant credits for open-source AI model development.</p>
          </div>
        </section>

        {/* Ventures */}
        <section id="ventures" className="py-20">
          <SectionHeading number="01">Ventures</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BrutalistCard 
              title="Cognio Labs"
              subtitle="Founder & CEO"
              description="An AI research and deployment lab focused on creating the next generation of autonomous agents that can reason, plan, and execute complex tasks."
              tags={["AI Agents", "R&D", "Enterprise AI"]}
            />
            <BrutalistCard 
              title="EdTech Platform"
              subtitle="Exit / Success"
              description="Developed a revolutionary platform leveraging AI to personalize education, resulting in massive user growth and successful market penetration."
              tags={["Scaling", "Product", "Education"]}
            />
          </div>
        </section>

        {/* Podcast Section */}
        <section id="podcast" className="py-20 bg-black text-white -mx-6 md:-mx-12 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <span className="inline-block border border-white px-3 py-1 text-xs font-bold uppercase mb-4 tracking-widest">On Air Now</span>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Designing <br /> Tomorrow</h2>
              </div>
              <div className="flex items-center gap-4">
                <Mic2 size={64} className="animate-pulse" />
                <div className="font-mono text-sm">
                  <p>HOST: ASHUTOSH UPADHYAY</p>
                  <p>TOPIC: THE SINGULARITY & BEYOND</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-2 border-white p-6 hover:bg-white hover:text-black transition-all cursor-pointer group">
                  <div className="flex justify-between mb-8">
                    <span className="font-mono">EP. 0{i}</span>
                    <ExternalLink size={20} />
                  </div>
                  <h4 className="text-2xl font-bold uppercase mb-4 group-hover:underline">The Future of Human-AI Collaboration</h4>
                  <p className="text-sm opacity-80">Exploring how agentic workflows will redefine the modern workforce.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="py-20">
          <SectionHeading number="02">Philosophy</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="border-l-8 border-black pl-8">
                <p className="text-3xl md:text-4xl font-black uppercase leading-tight italic">
                  "AI is not a tool; it's a new species of thought. We aren't just building software; we're architecting digital consciousness."
                </p>
              </div>
              <p className="text-xl font-medium leading-relaxed">
                Ashutosh believes in the radical decentralization of intelligence. His work at Cognio Labs is driven by the conviction that AI should empower human creativity rather than replace it, through the development of transparent, agentic systems.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-black p-6 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-black mb-2">01</span>
                <span className="font-bold uppercase text-xs tracking-widest">Autonomy First</span>
              </div>
              <div className="bg-black text-white p-6 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-black mb-2">02</span>
                <span className="font-bold uppercase text-xs tracking-widest">Radical Truth</span>
              </div>
              <div className="bg-black text-white p-6 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-black mb-2">03</span>
                <span className="font-bold uppercase text-xs tracking-widest">Open Source</span>
              </div>
              <div className="bg-white border-2 border-black p-6 flex flex-col justify-center items-center text-center">
                <span className="text-5xl font-black mb-2">04</span>
                <span className="font-bold uppercase text-xs tracking-widest">Human Centric</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <footer className="py-20 border-t-4 border-black mt-20">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xl">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8">Let's Build.</h2>
              <p className="text-xl font-bold uppercase mb-8">Interested in AI Agents, Cognio Labs, or just want to talk about the future?</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-8 py-4 font-black uppercase text-xl hover:bg-white hover:text-black border-2 border-black transition-all">
                  Get In Touch
                </button>
                <button className="border-2 border-black px-8 py-4 font-black uppercase text-xl hover:bg-black hover:text-white transition-all">
                  Twitter / X
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 font-mono text-right self-end">
              <p>© 2024 ASHU.AI</p>
              <p>BUILT WITH INTENT</p>
              <p>COGNIO LABS HOLDINGS</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Marquee Effect */}
      <div className="bg-black text-white py-4 overflow-hidden whitespace-nowrap border-y-2 border-black">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block text-2xl font-black uppercase tracking-widest"
        >
          AI AGENTS • COGNIO LABS • DESIGNING TOMORROW • HUGGING FACE • EDTECH • ASHUTOSH UPADHYAY • AI AGENTS • COGNIO LABS • DESIGNING TOMORROW • HUGGING FACE • EDTECH • ASHUTOSH UPADHYAY • 
        </motion.div>
      </div>
    </div>
  );
}