import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certificatesData = [
  {
    title: 'MERN Stack Developer Certification',
    institute: 'YOUR_INSTITUTION_NAME',
    date: 'June 2025',
    credentialId: 'MERN-XYZ-9876',
    verifyUrl: 'https://example.com/credentials/verify',
  },
  {
    title: 'Advanced React & Web Architecture',
    institute: 'YOUR_INSTITUTION_NAME',
    date: 'March 2025',
    credentialId: 'REACT-ABC-54321',
    verifyUrl: 'https://example.com/credentials/verify',
  },
  {
    title: 'Responsive Web Design & Algorithms',
    institute: 'YOUR_INSTITUTION_NAME',
    date: 'December 2024',
    credentialId: 'RESP-HTML-11223',
    verifyUrl: 'https://example.com/credentials/verify',
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 w-full z-10 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.01] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-outfit text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            <span className="text-primary font-mono text-xl sm:text-2xl mr-2">04.</span>
            Certificates
          </h2>
          <div className="h-[1px] flex-1 bg-white/10 max-w-md" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card flex flex-col justify-between h-[360px] overflow-hidden hover:shadow-glow group relative"
            >
              {/* Card visual header (Mock certificate mockup) */}
              <div className="relative h-44 bg-secondary flex items-center justify-center border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                
                {/* SVG Mock Certificate Design */}
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 100 100"
                  className="text-primary/20 group-hover:text-primary/40 group-hover:scale-110 transition-all duration-700 z-10"
                >
                  <rect x="10" y="15" width="80" height="70" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="300" />
                  <path d="M50 35 L58 43 L55 54 L45 54 L42 43 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="45" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="25" y1="65" x2="75" y2="65" stroke="currentColor" strokeWidth="2" />
                  <line x1="35" y1="72" x2="65" y2="72" stroke="currentColor" strokeWidth="2" />
                </svg>

                {/* Glowing seal background */}
                <div className="absolute w-24 h-24 rounded-full bg-primary/[0.02] group-hover:bg-primary/[0.06] blur-md transition-all duration-500" />

                {/* Corner details */}
                <div className="absolute top-3 left-4 font-mono text-[9px] text-muted tracking-widest">[ VERIFIED_CREDENTIAL ]</div>
                <Award className="absolute top-3 right-4 text-primary/40 group-hover:text-primary/80 transition-opacity" size={16} />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted mb-2">
                    <Calendar size={12} className="text-primary" />
                    <span>Issued {cert.date}</span>
                  </div>

                  <h3 className="font-outfit text-base font-bold text-white group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>
                  
                  <span className="block font-poppins text-xs text-white/70 mt-1">
                    {cert.institute}
                  </span>
                </div>

                {/* Action button */}
                <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="font-mono text-[9px] text-muted uppercase">
                    ID: {cert.credentialId}
                  </div>
                  
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-white transition-colors duration-300 font-mono tracking-wider"
                  >
                    VERIFY <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
