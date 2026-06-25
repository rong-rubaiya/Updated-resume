import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Layout, Server, Database, Key, ShieldCheck, 
  Cloud, MessageSquare, Wrench, ChevronRight
} from 'lucide-react';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, 
  FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, 
  SiExpress, SiGraphql, SiMongodb, SiPostgresql, SiFirebase, 
  SiJsonwebtokens, SiAuth0, SiPostman, SiFigma, SiVercel, 
  SiNetlify, SiRender, 
  SiReactrouter,
  SiCplusplus
} from 'react-icons/si';

const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: <Code size={20} />,
    skills: [
      { name: 'JavaScript', percentage: 100, icon: <FaJsSquare className="text-[#f7df1e]" /> },
      { name: 'TypeScript', percentage: 80, icon: <SiTypescript className="text-[#3178c6]" /> },
      {name: 'C++', percentage: 60, icon: <SiCplusplus className="text-[#00599c]" /> },
      { name: 'HTML5', percentage: 100, icon: <FaHtml5 className="text-[#e34f26]" /> },
      { name: 'CSS3', percentage: 100, icon: <FaCss3Alt className="text-[#1572b6]" /> }
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <Layout size={20} />,
    skills: [
      { name: 'React.js', percentage: 100, icon: <FaReact className="text-[#61dafb] animate-spin-slow" /> },
      { name: 'Next.js', percentage: 100, icon: <SiNextdotjs className="text-white" /> },
      { name: 'React Router', percentage: 100, icon: <SiReactrouter className="text-[#764abc]" /> },
      { name: 'Tailwind CSS', percentage: 100, icon: <SiTailwindcss className="text-[#06b6d4]" /> }
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: <Server size={20} />,
    skills: [
      { name: 'Node.js', percentage: 100, icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', percentage: 100, icon: <SiExpress className="text-white" /> },
      { name: 'REST APIs', percentage: 100, icon: <Code className="text-primary" /> },
    
    ]
  },
  {
    id: 'database',
    label: 'Database',
    icon: <Database size={20} />,
    skills: [
      { name: 'MongoDB', percentage: 100, icon: <SiMongodb className="text-[#47a248]" /> },
      { name: 'Firebase DB', percentage: 80, icon: <SiFirebase className="text-[#ffca28]" /> },
     
    ]
  },
  {
    id: 'authentication',
    label: 'Auth & Security',
    icon: <Key size={20} />,
    skills: [
      { name: 'JWT Tokens', percentage: 100, icon: <SiJsonwebtokens className="text-pink-500" /> },
      { name: 'NextAuth.js', percentage: 98, icon: <SiAuth0 className="text-green-500" /> },
      { name: 'Firebase Auth', percentage: 100, icon: <SiFirebase className="text-[#ffca28]" /> },
      { name: 'Auth0', percentage: 100, icon: <SiAuth0 className="text-[#eb5424]" /> }
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Design',
    icon: <Wrench size={20} />,
    skills: [
      { name: 'Git & GitHub', percentage: 100, icon: <FaGitAlt className="text-[#f05032]" /> },
      { name: 'Vercel', percentage: 100, icon: <SiVercel className="text-white" /> },
      { name: 'Postman', percentage: 70, icon: <SiPostman className="text-[#ff6c37]" /> },
      { name: 'Figma', percentage: 80, icon: <SiFigma className="text-[#f24e1e]" /> },
      {name: 'Firebase', percentage: 100, icon: <SiFirebase className="text-[#ffca28]" /> }
    ]
  },
  {
    id: 'deployment',
    label: 'Deployment',
    icon: <Cloud size={20} />,
    skills: [
      { name: 'Vercel', percentage: 100, icon: <SiVercel className="text-white" /> },
      {name: 'Firebase Hosting', percentage: 100, icon: <SiFirebase className="text-[#ffca28]" /> },
      { name: 'Netlify', percentage: 100, icon: <SiNetlify className="text-[#00ad9f]" /> }
    ]
  },
  {
    id: 'softskills',
    label: 'Soft Skills',
    icon: <MessageSquare size={20} />,
    skills: [
      { name: 'Problem Solving', percentage: 90, icon: <ShieldCheck className="text-primary" /> },
      { name: 'Team Collaboration', percentage: 100, icon: <ShieldCheck className="text-primary" /> },
      { name: 'Quick Learning', percentage: 95, icon: <ShieldCheck className="text-primary" /> },
      { name: 'Effective Communication', percentage: 90, icon: <ShieldCheck className="text-primary" /> },
      { name: 'Time Management', percentage: 95, icon: <ShieldCheck className="text-primary" /> }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const activeGroup = skillCategories.find((cat) => cat.id === activeCategory);

  // Dynamic 3D card tilt handler
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const angleX = (yc - y) / 10; // Dampen tilt
    const angleY = (x - xc) / 10;

    card.style.transform = `perspective(600px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-5px)`;
    card.style.boxShadow = '0 15px 35px rgba(255, 107, 0, 0.15)';
  };

  const handleMouseLeave = (card) => {
    card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateY(0)';
    card.style.boxShadow = 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)';
  };

  return (
    <section id="skills" className="relative py-24 w-full z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-primary/2 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-outfit text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            <span className="text-primary font-mono text-xl sm:text-2xl mr-2">02.</span>
            Skills
          </h2>
          <div className="h-[1px] flex-1 bg-white/10 max-w-md" />
        </div>

        {/* Layout: Sidebar Categories & Grid of Skill Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Categories Sidebar selector */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 no-scrollbar select-none">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center justify-between gap-4 px-6 py-4 rounded-xl font-outfit text-sm font-semibold tracking-wider uppercase text-left whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-secondary shadow-glow'
                    : 'bg-darkGray-card hover:bg-white/5 text-muted hover:text-white border border-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <span>{category.label}</span>
                </div>
                <ChevronRight size={16} className={`hidden lg:block transition-transform duration-300 ${
                  activeCategory === category.id ? 'translate-x-1.5' : 'opacity-40'
                }`} />
              </button>
            ))}
          </div>

          {/* Active Category Skill Cards Grid */}
          <div className="lg:col-span-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {activeGroup.skills.map((skill, idx) => (
                <div
                  key={idx}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                  className="glass-card p-6 flex flex-col justify-between h-[155px] relative overflow-hidden transition-all duration-300 ease-out"
                >
                  {/* Decorative glow corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/1 rounded-bl-full pointer-events-none" />

                  {/* Top content */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl font-bold shadow-sm">
                        {skill.icon}
                      </div>
                      <span className="font-outfit text-base font-bold text-white tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-primary font-bold">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Progress Line block */}
                  <div className="w-full">
                    <div className="flex items-center justify-between text-[10px] font-mono text-muted uppercase tracking-wider mb-2.5">
                      <span>Proficiency</span>
                      <span>Level</span>
                    </div>
                    
                    {/* Bar background */}
                    <div className="relative w-full h-[6px] bg-secondary/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.05 }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-orange-500 shadow-glow rounded-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
