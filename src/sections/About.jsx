import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, Languages, Award, Target } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const personalInfo = [
    { icon: <Mail size={16} className="text-primary" />, label: 'Email', value: 'rongrubaiya@gmail.com' },
    { icon: <Phone size={16} className="text-primary" />, label: 'Phone', value: '+8801883013411' },
    { icon: <MapPin size={16} className="text-primary" />, label: 'Location', value: 'Jatrabari, Dhaka, Bangladesh' },
    { icon: <Languages size={16} className="text-primary" />, label: 'Languages', value: 'English, Bengali' },
    { icon: <Award size={16} className="text-primary" />, label: 'Degree', value: 'Currently pursuing BBA in Accounting and Information Systems' },
    { icon: <Calendar size={16} className="text-primary" />, label: 'Freelance', value: 'Available' },
  ];

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
    // { number: '10+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="relative py-24 w-full z-10 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.02] blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-outfit text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            <span className="text-primary font-mono text-xl sm:text-2xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-[1px] flex-1 bg-white/10 max-w-md" />
        </div>

        {/* Responsive Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20%' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Left Column: Photo Frame / Interactive Placeholder */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[340px] aspect-square rounded-2xl group cursor-none">
              {/* Outer glowing layer */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary to-orange-600 opacity-20 blur group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              {/* Photo Frame Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-darkGray-card border border-white/5">
                  {/* Background image layer for reliable rendering */}
                  <div
                    className="absolute inset-0 bg-center bg-cover"
                    style={{ backgroundImage: `url('/mypic.jpeg')` }}
                    aria-hidden="true"
                  />

                  {/* SVG Developer Portrait Silhouette / Tech Pattern */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 z-30 font-mono text-[10px] tracking-widest text-white group-hover:text-primary transition-colors">
                    [ RUBAIYA HAMID ]
                  </div>

                  {/* Glassy overlay frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60 z-20" />
                </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Stats Grid */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest">
                <Target size={14} /> Career Objective & Bio
              </div>
              <p className="font-poppins text-muted leading-relaxed">
                Hello! I am a junior MERN stack developer focused on designing clean and optimized interfaces. I enjoy bridging the gap between design and development, resulting in beautiful web pages that have both smooth interactivity and robust backend engineering.
              </p>
              <p className="font-poppins text-muted leading-relaxed">
                My professional drive is focused on building MERN (MongoDB, Express, React.js, Node.js) applications, writing testable code, and optimizing SEO strategies. I aim to create codebases that scale, loading fast on all modern devices.
              </p>
            </motion.div>

            {/* Core Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 flex flex-col items-center justify-center text-center shadow-glass border border-white/5"
                >
                  <span className="font-outfit text-3xl sm:text-4xl font-extrabold text-primary block mb-1 glow-orange">
                    {stat.number}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Personal Details Matrix */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {personalInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="glass-panel rounded-xl p-4 flex items-center gap-4 hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-muted uppercase tracking-wider">
                      {info.label}
                    </span>
                    <span className="font-poppins text-sm text-white font-medium break-all select-all">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
