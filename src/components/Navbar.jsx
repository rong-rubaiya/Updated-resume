import React, { useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Education', target: '#education' },
  { label: 'Certificates', target: '#certificates' },
  { label: 'Projects', target: '#projects' },
  { label: 'Contact', target: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  // Scroll detection for backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for highlighting current section
  useEffect(() => {
    const observers = [];
    const elements = navItems.map(item => document.querySelector(item.target));

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger near screen center
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Handle smooth scroll navigation
  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Smooth scroll using Lenis
    if (lenis) {
      lenis.scrollTo(target, {
        offset: -80, // Offset for fixed header height
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom out-expo
      });
    } else {
      // Fallback
      const element = document.querySelector(target);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-secondary/70 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-outfit text-xl font-black tracking-widest text-white group flex items-center gap-2 select-none"
          >
            <span className="text-primary group-hover:scale-110 transition-transform duration-300">⚡</span>
            <span>Rubaiya_Hamid</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className={`nav-link text-sm tracking-wide ${
                  activeSection === item.target ? 'active' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="./Rubaiya_Hamid_Resume.pdf"
              download="Rubaiya_Hamid_Resume.pdf"
              className="relative px-6 py-2.5 rounded-full border border-primary text-primary hover:text-white font-outfit text-xs font-semibold tracking-wider uppercase overflow-hidden group transition-all duration-300 shadow-glow hover:shadow-glow-lg"
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[-1]" />
              <span className="flex items-center gap-1.5">
                Resume <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors focus:outline-none p-1 z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-secondary/95 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8 md:px-16"
          >
            {/* Background geometric flare */}
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full bg-primary/[0.04] blur-[80px]" />

            <nav className="flex flex-col gap-6 md:gap-8 mt-12">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.target}
                  href={item.target}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className={`font-outfit text-3xl font-bold tracking-wider ${
                    activeSection === item.target ? 'text-primary' : 'text-white/70'
                  } hover:text-primary transition-colors`}
                >
                  <span className="text-primary text-sm font-mono mr-3">0{idx + 1}.</span>
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: navItems.length * 0.05 }}
              className="mt-12 md:mt-16"
            >
              <a
                href="#resume-placeholder"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 py-4 rounded-xl bg-primary text-secondary font-outfit font-extrabold tracking-widest uppercase hover:bg-white hover:text-primary transition-colors text-sm shadow-glow"
              >
                Download Resume <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
