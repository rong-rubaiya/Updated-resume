import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, X } from 'lucide-react';

const certificatesData = [
  {
    title: 'Web Development Certification',
    institute: 'Programming Hero',
    date: 'March 2026',
    batch: '12',
    ID: 'Web12-1522',
    image: '/certificate.png', // Points directly to the public folder file
    pdf: 'certificate_student.pdf',
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className="relative py-24 w-full z-10 overflow-hidden"
      >
        {/* Background radial spotlight */}
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.01] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Title */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-outfit text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              <span className="text-primary font-mono text-xl sm:text-2xl mr-2">
                04.
              </span>
              Certificates
            </h2>
            <div className="h-[1px] flex-1 bg-white/10 max-w-md" />
          </div>

          {/* Certificate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesData.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedCertificate(cert)}
                className="glass-card flex flex-col justify-between h-[360px] overflow-hidden hover:shadow-glow group relative cursor-pointer"
              >
                {/* Card Header */}
                <div className="relative h-44 bg-secondary flex items-center justify-center border-b border-white/5 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

                  {/* Certificate Image Cover */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 z-10"
                  />

                  <div className="absolute w-24 h-24 rounded-full bg-primary/[0.02] group-hover:bg-primary/[0.06] blur-md transition-all duration-500" />

                

                  <Award
                    className="absolute top-3 right-4 text-primary/60 group-hover:text-primary/90 transition-opacity z-20 drop-shadow"
                    size={16}
                  />
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

                  {/* Dynamic Footer containing ID and Batch details */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="font-mono text-[9px] text-muted uppercase">
                      Batch: {cert.batch}
                    </div>
                    <div className="font-mono text-[9px] text-muted uppercase">
                      ID: {cert.ID}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[90vh] bg-secondary border border-white/10 rounded-xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-primary text-white flex items-center justify-center transition"
              >
                <X size={20} />
              </button>

              {/* PDF */}
              <iframe
                src={selectedCertificate.pdf}
                title={selectedCertificate.title}
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}