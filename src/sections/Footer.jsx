import React from 'react';
import { useLenis } from 'lenis/react';
import { ArrowUp, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Education', target: '#education' },
  { label: 'Certificates', target: '#certificates' },
  { label: 'Projects', target: '#projects' },
  { label: 'Contact', target: '#contact' },
];

export default function Footer() {
  const lenis = useLenis();

  // Scroll to Top action
  const scrollToTop = (e) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo('#home', { duration: 1.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, selector) => {
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
    <footer className="relative w-full z-10 bg-secondary pt-16 pb-12 overflow-hidden select-none">
      {/* Premium pulsing glowing top border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 shadow-glow animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={scrollToTop}
              className="font-outfit text-xl font-black tracking-widest text-white flex items-center gap-2 group"
            >
              <span className="text-primary group-hover:scale-115 transition-transform duration-300">⚡</span>
              <span>Rubaiya_Hamid</span>
            </a>
            <p className="font-poppins text-xs text-muted max-w-xs leading-relaxed">
              Engineering sleek, animated, and accessible MERN stack products that solve real-world problems.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-5">
            <h4 className="font-outfit text-xs font-bold text-white uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.target}
                  href={link.target}
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className="font-poppins text-xs text-muted hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Top Scroll Column */}
          <div className="md:col-span-3 flex flex-col md:items-end justify-between gap-6">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-muted hover:text-primary border border-white/5 hover:shadow-glow transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-muted hover:text-primary border border-white/5 hover:shadow-glow transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-muted hover:text-primary border border-white/5 hover:shadow-glow transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <FaTwitter size={16} />
              </a>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold font-mono tracking-wider text-muted hover:text-primary hover:border-primary transition-colors focus:outline-none"
              aria-label="Back to Top"
            >
              BACK TO TOP <ArrowUp size={14} className="animate-bounce" />
            </motion.button>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-muted">
          <div>
            &copy; {new Date().getFullYear()} Rubaiya_Hamid. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 opacity-60">
            <Terminal size={12} className="text-primary" /> Made with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
