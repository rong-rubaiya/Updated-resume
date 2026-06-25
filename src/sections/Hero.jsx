import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code, Terminal, Database, Cpu } from 'lucide-react';
import { FaReact, FaNodeJs, FaJs, FaEnvira } from 'react-icons/fa';
import { useLenis } from 'lenis/react';

const typingWords = [
  'Frontend Developer',
  'MERN Stack Developer',
  'Full Stack Developer',
  'UI/UX Enthusiast'
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(100);
  const lenis = useLenis();

  // Custom typing effect hook/loop
  useEffect(() => {
    let timer;

    if (subIdx === typingWords[wordIdx].length + 1 && !isDeleting) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timer);
    }

    if (subIdx === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % typingWords.length);
      return;
    }

    timer = setTimeout(() => {
      setSubIdx((prev) => prev + (isDeleting ? -1 : 1));
      // Slower typing, faster deleting
      setTypeSpeed(isDeleting ? 40 : 80);
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [subIdx, isDeleting, typeSpeed, wordIdx]);

  // CTA button smooth scroll handler
  const handleScrollTo = (e, selector) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(selector, { offset: -80, duration: 1.5 });
    } else {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center pt-24 pb-12 overflow-hidden z-10"
    >
      {/* Background large decorative glowing orb */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-primary text-sm md:text-base tracking-[0.2em] uppercase font-bold mb-4 block">
              // Greeting & Welcome
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-outfit text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4"
          >
            Hi, I am <br className="sm:hidden" />
            <span className="text-gradient-orange text-glow-orange select-all">Rubaiya_Hamid</span>
          </motion.h1>

          {/* Typing Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-10 sm:h-12 flex items-center mb-6 font-outfit text-xl sm:text-3xl text-white font-semibold"
          >
            <span className="text-muted mr-3">I build websites as a</span>
            <span className="text-primary border-r-2 border-primary/70 animate-pulse-slow pr-1.5 font-bold uppercase tracking-wider">
              {typingWords[wordIdx].substring(0, subIdx)}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-poppins text-sm sm:text-base text-muted max-w-xl mb-10 leading-relaxed"
          >
            A forward-thinking MERN Stack & Frontend Developer crafting stunning, accessible, and high-performance digital experiences. Specializing in highly interactive frontend architectures, micro-animations, and scalable backend configurations. Let's engineer something outstanding.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-3.5 rounded-full bg-primary text-secondary font-outfit text-sm font-extrabold tracking-wider uppercase hover:bg-white hover:text-primary transition-all duration-300 shadow-glow hover:shadow-glow-lg flex items-center gap-2 group"
            >
              Hire Me
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-8 py-3.5 rounded-full border border-white/10 text-white font-outfit text-sm font-semibold tracking-wider uppercase hover:border-primary hover:text-primary transition-colors duration-300"
            >
              View Projects
            </a>

        
          </motion.div>
        </div>

        {/* Right Side Visuals */}
        <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
          {/* Main glowing back circle */}
          <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full bg-primary/2 border border-primary/4 animate-pulse-slow z-0" />

          {/* Holographic Dev Board (Mock Code Terminal) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, type: 'spring' }}
            className="relative w-full max-w-[420px] glass-panel rounded-2xl p-5 border border-white/5 shadow-glass z-10"
          >
            {/* Window bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4 select-none">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted tracking-wider">
                <Terminal size={12} className="text-primary" /> dev_terminal.js
              </div>
            </div>

            {/* Code Text display */}
            <pre className="font-mono text-xs text-left leading-relaxed text-white/90 overflow-x-auto no-scrollbar">
              <code className="text-muted">
                <span className="text-primary">const</span> developer = &#123; <br />
                &nbsp;&nbsp;name: <span className="text-green-400">"Rubaiya_Hamid"</span>,<br />
                &nbsp;&nbsp;skills: [<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">"React"</span>, <span className="text-yellow-400">"Node.js"</span>,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">"MongoDB"</span>, <span className="text-yellow-400">"Tailwind"</span><br />
                &nbsp;&nbsp;],<br />
                &nbsp;&nbsp;status: <span className="text-green-400">"OPEN_TO_WORK"</span>,<br />
                &nbsp;&nbsp;engineers: <span className="text-purple-400">() =&gt;</span> &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;console.log(<span className="text-green-400">"Clean Code."</span>);<br />
                &nbsp;&nbsp;&#125;<br />
                &#125;;
              </code>
            </pre>
          </motion.div>

          {/* Floating tech icons orbiting around card */}
          {/* React */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-primary shadow-glow border border-primary/10 z-20 cursor-pointer"
          >
            <FaReact size={24} className="animate-spin-slow" />
          </motion.div>

          {/* Node */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#68a063] border border-white/5 z-20"
          >
            <FaNodeJs size={24} />
          </motion.div>

          {/* JS */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-4 -right-4 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#f7df1e] border border-white/5 z-20"
          >
            <FaJs size={22} />
          </motion.div>

          {/* MongoDB */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#4db33d] border border-white/5 z-20"
          >
            <FaEnvira size={24} />
          </motion.div>
        </div>
      </div>

      {/* Floating Scroll Down mouse indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, '#about')}
          className="flex flex-col items-center gap-2 group text-muted hover:text-primary transition-colors duration-300"
          aria-label="Scroll Down"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold">Scroll Down</span>
          <div className="w-[20px] h-[34px] rounded-full border-2 border-muted group-hover:border-primary transition-colors flex justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[3px] h-[6px] rounded-full bg-muted group-hover:bg-primary transition-colors"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
