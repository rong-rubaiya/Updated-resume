import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowLeft, X, Code, Sparkles, AlertCircle, TrendingUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: 'E-Commerce System (MERN)',
    description: 'A full-featured e-commerce ecosystem with dashboard analysis, payments, and product variations.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Tailwind CSS'],
    features: ['Redux State Management', 'Stripe Payment Integration', 'Interactive Charts Dashboard', 'Dynamic Filtering & Sorting'],
    problem: 'Traditional e-commerce platforms struggle with heavy state changes and slow loading on search result pages.',
    solution: 'Implemented client-side Redux caching alongside MongoDB aggregation pipelines to lower database load and fetch instantly.',
    challenges: 'Synching state between complex local storage carts and server database tables during guest checkouts.',
    future: 'Integrating a recommendation model using vector searches for product suggestions.',
    github: 'https://github.com/placeholder',
    live: 'https://example.com',
    imageText: 'E-COMMERCE SYSTEM'
  },
  {
    title: 'SaaS Task Manager',
    description: 'Real-time task and kanban dashboard for agile collaboration across teams.',
    technologies: ['Next.js', 'Tailwind CSS', 'Socket.io', 'MongoDB', 'Framer Motion'],
    features: ['Drag-and-Drop Kanban Boards', 'Live Chat & Activity Feeds', 'Task Time Tracking Metrics', 'Role-based Team Permissions'],
    problem: 'Standard task managers do not sync task updates live, causing team overlaps and duplicated tasks.',
    solution: 'Built a websocket syncing engine using Socket.io that propagates card updates instantly to all board members.',
    challenges: 'Resolving simultaneous drag-and-drop actions on the same item without database lockouts.',
    future: 'Add automatic time sheet generation and invoice output based on tracked hours.',
    github: 'https://github.com/placeholder',
    live: 'https://example.com',
    imageText: 'SAAS TASK MANAGER'
  },
  {
    title: 'AI Content Studio',
    description: 'An interactive content generation platform utilizing LLM APIs.',
    technologies: ['React', 'Express', 'Tailwind CSS', 'OpenAI API', 'React Markdown'],
    features: ['Custom Writing Assist Templates', 'Interactive Syntax-Highlight Output', 'One-click Copy & Markdown Export', 'Historical Outputs History'],
    problem: 'Content creators face writer\'s block and require localized drafting aids that formats code and text.',
    solution: 'Integrated OpenAI APIs with structured custom system prompts and streamed text responses using server-sent events.',
    challenges: 'Managing token usages and API rate-limiting rules across concurrent user generation flows.',
    future: 'Implementing automated SEO check engines for generated copy text.',
    github: 'https://github.com/placeholder',
    live: 'https://example.com',
    imageText: 'AI CONTENT STUDIO'
  },
  {
    title: 'Fintech Portfolio Dashboard',
    description: 'Real-time cryptocurrency and stock analysis dashboard with simulated trading features.',
    technologies: ['React', 'Tailwind CSS', 'Recharts', 'CoinGecko API', 'Firebase'],
    features: ['Live Market Price Websockets', 'Historical Financial Charting', 'Mock Order Book Transactions', 'Secure Wallet Ledger Logging'],
    problem: 'Aggregating financial charts across diverse crypto and equity API feeds results in slow graph rendering.',
    solution: 'Utilized stateful API polling with local memory caches and parsed graphs inside specialized React charting libraries.',
    challenges: 'Keeping live chart intervals accurate without triggering API throttle locks.',
    future: 'Adding simulated machine learning predictors for currency trends.',
    github: 'https://github.com/placeholder',
    live: 'https://example.com',
    imageText: 'FINTECH DASHBOARD'
  },
  {
    title: 'Dev Hub Social Net',
    description: 'A localized developer forum and resource sharing network for coding bootcamps.',
    technologies: ['React', 'NodeJS', 'Express', 'PostgreSQL', 'JWT Authentication'],
    features: ['Interactive QA Forum Posts', 'Markdown Supported Answers', 'Upvote & Dev Badge System', 'Profile Developer Reputations'],
    problem: 'Bootcamp students need a focused forum to troubleshoot coding issues without stackoverflow level gatekeeping.',
    solution: 'Designed a tag-based developer post board using PostgreSQL relational join filters for quick querying.',
    challenges: 'Sanitizing user inputs to prevent cross-site scripting (XSS) while allowing rich Markdown text blocks.',
    future: 'Incorporating AI helpers that suggest automated answers to basic errors.',
    github: 'https://github.com/placeholder',
    live: 'https://example.com',
    imageText: 'DEV HUB SOCIAL'
  },
  {
    title: 'Real Estate Portal',
    description: 'Modern visual estate finder featuring location mapping and direct scheduling agent connects.',
    technologies: ['React', 'Tailwind CSS', 'Leaflet Maps', 'Firebase', 'EmailJS'],
    features: ['Leaflet Map Area Pins', 'Radius Filtering Algorithms', 'Visual Photo Carousel Slider', 'Agent Calendar Bookings'],
    problem: 'Visualizing housing directories on small map interfaces is often slow and lacks intuitive distance boundaries.',
    solution: 'Built custom Leaflet map anchors that calculate geometric distance circles around targeted coordinates.',
    challenges: 'Rendering hundreds of map pins efficiently without freezing mobile viewports.',
    future: 'Adding virtual 3D tour player elements inside details panels.',
    github: 'https://github.com/placeholder',
    live: 'https://example.com',
    imageText: 'REAL ESTATE PORTAL'
  }
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 3;

  // Calculate projects indices
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  // Disable body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  // Card Tilt handler
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 15;
    const angleY = (x - xc) / 15;
    card.style.transform = `perspective(800px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (card) => {
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section id="projects" className="relative py-24 w-full z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.01] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <h2 className="font-outfit text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              <span className="text-primary font-mono text-xl sm:text-2xl mr-2">05.</span>
              Projects
            </h2>
            <div className="h-[1px] w-24 sm:w-60 bg-white/10" />
          </div>

          {/* Top Pagination controls */}
          <div className="flex items-center gap-2 select-none">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2.5 rounded-lg border border-white/5 bg-darkGray-card hover:bg-white/5 transition-all text-white disabled:opacity-40`}
              aria-label="Previous Page"
            >
              <ArrowLeft size={16} />
            </button>
            <span className="font-mono text-xs text-muted mx-3 uppercase tracking-wider">
              Page <span className="text-white font-bold">{currentPage}</span> of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2.5 rounded-lg border border-white/5 bg-darkGray-card hover:bg-white/5 transition-all text-white disabled:opacity-40`}
              aria-label="Next Page"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, idx) => (
            <div
              key={idx}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              className="glass-card flex flex-col justify-between h-[450px] overflow-hidden hover:shadow-glow project-card-interactive group transition-all duration-300 ease-out"
            >
              {/* Project Image Mockup area */}
              <div className="relative h-48 bg-secondary border-b border-white/5 overflow-hidden flex items-center justify-center select-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                
                {/* Tech logo background flare */}
                <div className="absolute w-32 h-32 rounded-full bg-primary/[0.03] group-hover:bg-primary/[0.07] blur-md transition-all duration-500" />
                
                <span className="font-outfit text-sm font-black tracking-[0.3em] text-white/30 group-hover:text-white/70 group-hover:scale-105 transition-all duration-500 font-bold">
                  {project.imageText}
                </span>

                <div className="absolute top-3 left-4 font-mono text-[9px] text-muted tracking-widest">[ PROJECT_MOCKUP ]</div>
                <Code className="absolute top-3 right-4 text-primary/40 group-hover:text-primary/80 transition-opacity" size={16} />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-outfit text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-poppins text-xs sm:text-sm text-muted leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Pill List */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="font-mono text-[9px] px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-muted">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="font-mono text-[9px] px-2 py-1 rounded bg-secondary text-primary font-bold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/10 text-primary hover:bg-primary hover:text-secondary text-xs font-bold tracking-wider uppercase font-outfit transition-all duration-300"
                    >
                      Case Study
                    </button>
                    
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-white transition-colors"
                        aria-label="GitHub Link"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-white transition-colors"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Full-Screen Details Modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary/80 backdrop-blur-md flex justify-center items-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full max-w-4xl max-h-[85vh] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-y-auto no-scrollbar shadow-glow-lg flex flex-col"
              onClick={(e) => e.stopPropagation()} // Stop closing on content click
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/5 p-6 flex justify-between items-center z-20">
                <div>
                  <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest mb-1.5">
                    <Sparkles size={14} /> Project Deep-Dive
                  </div>
                  <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-primary hover:text-secondary text-white transition-all focus:outline-none"
                  aria-label="Close Modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-8 flex-1">
                {/* Large visual illustration area */}
                <div className="relative h-60 sm:h-72 bg-secondary border border-white/5 rounded-xl overflow-hidden flex items-center justify-center select-none">
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                  <div className="absolute w-44 h-44 rounded-full bg-primary/5 blur-xl" />
                  <span className="font-outfit text-lg font-black tracking-[0.4em] text-white/40">
                    {selectedProject.imageText}
                  </span>
                  <div className="absolute bottom-3 left-4 font-mono text-[9px] text-muted tracking-widest">[ PROJECT_IMAGE_PLACEHOLDER ]</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column: Details */}
                  <div className="md:col-span-8 space-y-6">
                    {/* Section: Overview */}
                    <div className="space-y-2">
                      <h4 className="font-outfit text-base font-bold text-white flex items-center gap-2">
                        <TrendingUp size={16} className="text-primary" /> Overview
                      </h4>
                      <p className="font-poppins text-sm text-muted leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Section: Problem vs Solution */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-red-500/[0.02] border border-red-500/10 space-y-2">
                        <h5 className="font-outfit text-xs font-bold text-red-400 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                          <AlertCircle size={14} /> Problem
                        </h5>
                        <p className="font-poppins text-xs text-muted leading-relaxed">
                          {selectedProject.problem}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-green-500/[0.02] border border-green-500/10 space-y-2">
                        <h5 className="font-outfit text-xs font-bold text-green-400 flex items-center gap-1.5 uppercase tracking-wider font-mono">
                          <Sparkles size={14} /> Solution
                        </h5>
                        <p className="font-poppins text-xs text-muted leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>

                    {/* Section: Key Features */}
                    <div className="space-y-3">
                      <h4 className="font-outfit text-base font-bold text-white flex items-center gap-2">
                        <Code size={16} className="text-primary" /> Core Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {selectedProject.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-muted font-poppins">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section: Challenges Faced */}
                    <div className="space-y-2">
                      <h4 className="font-outfit text-base font-bold text-white">Challenges Faced</h4>
                      <p className="font-poppins text-sm text-muted leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>

                    {/* Section: Future Plans */}
                    <div className="space-y-2">
                      <h4 className="font-outfit text-base font-bold text-white">Future Improvements</h4>
                      <p className="font-poppins text-sm text-muted leading-relaxed">
                        {selectedProject.future}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Sidebar Spec Info */}
                  <div className="md:col-span-4 space-y-6">
                    {/* Tech Stack */}
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                      <h4 className="font-outfit text-sm font-bold text-white mb-4 uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[10px] px-3 py-1.5 rounded-md bg-secondary border border-white/[0.03] text-muted hover:text-primary transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project links buttons block */}
                    <div className="flex flex-col gap-3">
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl bg-primary text-secondary font-outfit text-xs font-extrabold tracking-wider uppercase hover:bg-white hover:text-primary transition-colors shadow-glow"
                      >
                        Live Preview <ExternalLink size={14} />
                      </a>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex justify-center items-center gap-2 py-3 rounded-xl bg-secondary border border-white/10 text-white font-outfit text-xs font-bold tracking-wider uppercase hover:border-primary hover:text-primary transition-all duration-300"
                      >
                        GitHub Repository <FaGithub size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
