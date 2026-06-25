import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    type: 'University',
    institution: 'YOUR_UNIVERSITY_NAME',
    degree: 'Bachelor of Science in Computer Science & Engineering',
    duration: '2022 - 2026 (Expected)',
    cgpa: '3.85 / 4.00',
    field: 'Computer Science',
    description: 'Focused on Software Engineering, Web Development, Databases, Distributed Systems, Data Structures, and Algorithm Design.'
  },
  {
    type: 'College',
    institution: 'YOUR_COLLEGE_NAME',
    degree: 'Higher Secondary Certificate (HSC)',
    duration: '2020 - 2022',
    cgpa: '5.00 / 5.00',
    field: 'Science Group',
    description: 'Majored in Mathematics, Physics, Chemistry, and Information & Communication Technology (ICT) with distinction.'
  },
  {
    type: 'School',
    institution: 'YOUR_SCHOOL_NAME',
    degree: 'Secondary School Certificate (SSC)',
    duration: '2018 - 2020',
    cgpa: '5.00 / 5.00',
    field: 'Science Group',
    description: 'Acquired foundational education with secondary science majors and initial computer applications.'
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 w-full z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/[0.01] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-20">
          <h2 className="font-outfit text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            <span className="text-primary font-mono text-xl sm:text-2xl mr-2">03.</span>
            Education
          </h2>
          <div className="h-[1px] flex-1 bg-white/10 max-w-md" />
        </div>

        {/* Timeline container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline track line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

          {/* Education items */}
          <div className="space-y-16 md:space-y-24">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline bullet node */}
                  <div className="absolute left-4 md:left-1/2 top-7 w-4 h-4 rounded-full bg-secondary border-2 border-primary -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className={`w-full md:w-[calc(50%-32px)] pl-12 md:pl-0 ${
                      isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                    }`}
                  >
                    <div className="glass-card p-6 border border-white/5 hover:border-primary/20 transition-all duration-300 relative group">
                      {/* Interactive glow border corner */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-orange-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />

                      {/* Header block info */}
                      <div className={`flex flex-wrap items-center gap-2 mb-3 font-mono text-[10px] sm:text-xs text-muted ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <Calendar size={12} className="text-primary" />
                        <span className="font-semibold">{item.duration}</span>
                        <span className="opacity-30">|</span>
                        <GraduationCap size={12} className="text-primary" />
                        <span>{item.type}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-outfit text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {item.institution}
                      </h3>

                      {/* Degree / Field */}
                      <h4 className="font-poppins text-sm text-white/80 font-medium mb-3">
                        {item.degree}
                      </h4>

                      {/* Stats: field group and CGPA */}
                      <div className={`flex flex-wrap gap-3 mb-4 font-mono text-[10px] ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}>
                        <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-white">
                          Major: {item.field}
                        </span>
                        <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/10 text-primary font-bold">
                          CGPA: {item.cgpa}
                        </span>
                      </div>

                      {/* Description Text */}
                      <p className="font-poppins text-xs sm:text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
