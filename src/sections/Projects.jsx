import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowLeft, X, Code, Sparkles, AlertCircle, TrendingUp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
 {
  title: 'Nova Pay - Modern Fintech Platform',
  description:
    'A full-stack fintech platform that provides secure digital wallets, loan management, micro-savings, peer-to-peer payments, bill splitting, subscriptions, and real-time communication with an intuitive analytics dashboard.',

  technologies: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'MongoDB',
    'Mongoose',
    'NextAuth.js',
    'JWT',
    'Pusher',
    'Cloudinary',
    'Groq AI',
    'Framer Motion',
    'Chart.js'
  ],

  features: [
    'Secure Authentication & KYC Verification',
    'Digital Wallet & Balance Management',
    'Loan Application & Repayment Tracking',
    'Micro-Savings Plans',
    'Peer-to-Peer Money Transfers',
    'Bill Splitting & Shared Payments',
    'Real-Time Chat & Notifications',
    'Admin Dashboard with User Management',
    'Financial Analytics & Reports',
    'Multi-Language & Dark/Light Theme'
  ],

  problem:
    'Traditional financial applications often separate wallets, loans, savings, and communication into different systems, creating a fragmented user experience with slow support and limited financial insights.',

  solution:
    'Developed an all-in-one fintech platform using Next.js App Router and MongoDB that combines digital banking, lending, savings, real-time messaging, and analytics into a single secure ecosystem. Implemented JWT authentication, NextAuth, Pusher-powered live updates, AI assistance, and optimized database queries for fast performance.',

  challenges:
    'Managing secure financial transactions, synchronizing real-time wallet balances across users, implementing role-based access control, handling concurrent transactions, integrating third-party services, and maintaining responsive performance while supporting real-time messaging and analytics.',

  future:
    'Planned enhancements include biometric authentication, virtual and physical debit cards, cryptocurrency wallet integration, investment portfolios, AI-powered financial recommendations, Open Banking APIs, advanced fraud detection, and international multi-currency payment support.',

  github: 'https://github.com/AlFahad47/Novapay',

  live: 'https://novapay-ten.vercel.app',

  image: '/NOVAPAY.png',
  imageText: 'NOVA PAY'
},
  {
  title: 'Ticket Kati - Online Ticket Booking Platform',

  description:
    'A modern full-stack event ticket booking platform that enables users to discover events, reserve seats, and purchase tickets securely through an intuitive and responsive interface.',

  technologies: [
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'JavaScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT',
    'Stripe'
  ],

  features: [
    'Secure User Authentication',
    'Browse & Search Upcoming Events',
    'Event Details & Ticket Availability',
    'Online Ticket Booking',
    'Stripe Payment Integration',
    'Booking History',
    'Responsive Mobile-Friendly Design',
    'Admin Event Management',
    'JWT Protected Routes',
    'Real-Time Seat Availability'
  ],

  problem:
    'Traditional ticket booking systems often involve complicated navigation, limited payment options, and poor mobile responsiveness, making the ticket purchasing experience slow and inconvenient for users.',

  solution:
    'Built a modern ticket booking platform with a responsive UI, JWT-based authentication, and Stripe payment integration. The platform allows users to discover events, book tickets securely, and manage their bookings while providing administrators with efficient event and ticket management tools.',

  challenges:
    'Implementing secure authentication, preventing duplicate ticket purchases, managing ticket availability in real time, integrating Stripe payment processing, and ensuring a smooth user experience across all devices.',

  future:
    'Future improvements include QR code-based e-tickets, real-time seat selection, event organizer dashboards, email and SMS ticket delivery, event recommendations powered by AI, refund management, and support for multiple payment gateways.',

  github: 'https://github.com/rong-rubaiya/TicketKati',

  live: 'https://demoticketkatiproject.vercel.app/',
    image: '/ticketkati.png',
  imageText: 'TICKET KATI'
},
  
   {
  title: 'Meal-Mate - Food Ordering Platform',

  description:
    'A modern full-stack meal ordering platform that allows users to discover, search, and order delicious meals through a fast, responsive, and visually engaging interface. Designed to provide a seamless food browsing experience with secure authentication and smooth animations.',

  technologies: [
    'Next.js',
    'React.js',
    'Tailwind CSS',
    'Framer Motion',
    'Firebase',
    'NextAuth.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST API'
  ],

  features: [
    'Secure Authentication (Email & Google)',
    'Browse Top-Rated Meals',
    'Advanced Search & Filtering',
    'Online Meal Ordering',
    'Responsive Mobile-First Design',
    'Smooth Framer Motion Animations',
    'REST API Integration',
    'Protected User Routes',
    'Fast Next.js Performance',
    'Interactive User Experience'
  ],

  problem:
    'Many online food ordering platforms suffer from slow performance, poor mobile optimization, and limited meal discovery features, making it difficult for users to quickly find and order their preferred meals.',

  solution:
    'Developed a modern meal ordering platform using Next.js and React with a responsive UI, secure Firebase and NextAuth authentication, and REST API integration. The application enables users to browse featured meals, search using multiple filters, securely authenticate, and place meal orders through a fast and intuitive interface.',

  challenges:
    'Implementing secure authentication across multiple providers, managing dynamic filtering with optimized rendering, integrating REST APIs efficiently, maintaining responsive layouts across all screen sizes, and creating smooth page transitions using Framer Motion.',

  future:
    'Future enhancements include a Cooker Dashboard for meal management, customer reviews and ratings, real-time order notifications, order history, AI-powered meal recommendations, meal analytics, favourite lists, and multi-language support.',

  github: 'https://github.com/rong-rubaiya/meal-mate-client-side',

  live: 'https://meal-mate-client-side.vercel.app/',

  image: '/mealmate.png',

  imageText: 'MEAL MATE'

  },
  {
  title: 'Livento - Property Listing Platform',

  description:
    'A modern real estate property management platform that allows users to discover, review, and manage property listings through a responsive and user-friendly interface. The platform provides secure authentication, advanced property search, ratings, reviews, and personalized user experiences.',

  technologies: [
    'React.js',
    'React Router',
    'Firebase Authentication',
    'Firebase Firestore',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Firebase Admin SDK',
    'CSS',
    'SCSS',
    'SweetAlert'
  ],

  features: [
    'Email & Google Authentication',
    'Protected User Routes',
    'Add, Update & Delete Properties',
    'Property Listings & Detailed Views',
    'Property Ratings & Reviews',
    'Advanced Property Search',
    'Sort by Price & Posted Date',
    'Dark & Light Theme Toggle',
    'Responsive Design for All Devices',
    'Custom 404 Error Page'
  ],

  problem:
    'Many property listing platforms provide limited personalization, complicated navigation, and lack efficient tools for users to discover, evaluate, and manage real estate properties. Users often struggle to compare listings and share trustworthy feedback.',

  solution:
    'Developed a full-stack property management platform using React, Firebase, Node.js, and MongoDB that enables users to browse, search, review, and manage properties seamlessly. Secure authentication, protected routes, dynamic property management, and advanced filtering create an efficient and user-friendly real estate experience.',

  challenges:
    'Implementing secure authentication with multiple providers, managing role-based access to property data, synchronizing property updates across the database, optimizing search and sorting performance, and ensuring a fully responsive experience across various screen sizes.',

  future:
    'Future enhancements include property wishlists, real-time chat between buyers and agents, AI-powered property recommendations, interactive maps, mortgage calculators, property comparison tools, appointment scheduling, and multi-language support.',

  github: 'https://github.com/rong-rubaiya/livento',

  live: 'https://livento-ass-10.web.app/',
   image: '/livento.png',

  imageText: 'LIVENTO'
},
 {
  title: 'Skill Swap - Community Learning Platform',

  description:
    'A modern skill exchange platform that connects people who want to teach and learn from one another. Users can showcase their expertise, discover new skills, communicate with others, and build a collaborative learning community through an intuitive and responsive interface.',

  technologies: [
    'React.js',
    'Tailwind CSS',
    'DaisyUI',
    'Firebase Authentication',
    'Firebase Firestore',
    'Framer Motion',
    'React Context',
    'React Icons'
  ],

  features: [
    'Secure User Authentication',
    'Create & Manage Skill Listings',
    'Browse Community Skills',
    'Advanced Search & Filtering',
    'User Profiles',
    'Skill Exchange Requests',
    'Community Ratings & Reviews',
    'Responsive Mobile-First Design',
    'Smooth Framer Motion Animations',
    'Real-Time Firebase Database'
  ],

  problem:
    'People often struggle to find affordable opportunities to learn new skills or connect with others who are willing to share their expertise. Existing learning platforms primarily focus on paid courses rather than collaborative knowledge exchange.',

  solution:
    'Developed a community-driven skill exchange platform where users can list their skills, discover other members based on categories and locations, communicate to arrange skill swaps, and build trusted learning relationships through ratings and reviews. Firebase Authentication and Firestore ensure secure access and real-time data synchronization.',

  challenges:
    'Designing an intuitive skill-matching experience, implementing secure authentication, managing real-time Firestore data, optimizing search and filtering performance, and creating a responsive interface that delivers a seamless experience across all devices.',

  future:
    'Future enhancements include real-time messaging, video call integration, AI-powered skill recommendations, learning progress tracking, achievement badges, scheduling with calendar integration, multilingual support, and mentor verification.',

  github: 'https://github.com/rong-rubaiya/SkillSwap',

  live: 'https://skillswap-project-12345.web.app/',
  image: '/skillswap.png',

  imageText: 'SKILL SWAP'
},
 {
  title: 'Stopwatch App',

  description:
    'A lightweight and responsive stopwatch application built with JavaScript that enables users to accurately track elapsed time with start, stop, and reset functionality through a clean and intuitive user interface.',

  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript'
  ],

  features: [
    'Start, Stop & Reset Timer',
    'Accurate Time Tracking',
    'Millisecond Precision',
    'Responsive User Interface',
    'Minimal & Clean Design',
    'Lightweight Performance',
    'Simple User Experience',
    'Cross-Browser Compatibility'
  ],

  problem:
    'Many simple timer applications are cluttered with unnecessary features, making quick and accurate time tracking inconvenient for users who only need a lightweight stopwatch.',

  solution:
    'Developed a clean JavaScript stopwatch application with precise timing functionality, allowing users to start, pause, resume, and reset the timer instantly. The responsive interface ensures a smooth experience across desktop and mobile devices.',

  challenges:
    'Maintaining accurate timing despite browser rendering delays, properly managing timer intervals, preventing duplicate interval executions, and ensuring responsive performance across different browsers.',

  future:
    'Future improvements include lap time recording, countdown timer mode, dark/light theme support, keyboard shortcuts, local storage for saved sessions, sound notifications, and Progressive Web App (PWA) support.',

  github: 'https://github.com/rong-rubaiya/Js-mini-proj-Stop-watch',

  live: 'https://rong-rubaiya.github.io/Js-mini-proj-Stop-watch/',
  image: '/stopwatch.png',

  imageText: 'STOPWATCH'
},
{
  title: 'Digital Watch',

  description:
    'A lightweight real-time digital clock built with JavaScript that dynamically displays the current hours, minutes, and seconds through a sleek, responsive, and user-friendly interface.',

  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript'
  ],

  features: [
    'Real-Time Clock Updates',
    'Dynamic Hours, Minutes & Seconds',
    'Automatic Time Synchronization',
    'Responsive User Interface',
    'Minimal & Modern Design',
    'Lightweight Performance',
    'Cross-Browser Compatibility',
    'Easy-to-Use Interface'
  ],

  problem:
    'Many online clock applications are overloaded with unnecessary features, making them less suitable for users who simply need a clean and accurate real-time digital clock.',

  solution:
    'Developed a lightweight digital watch using JavaScript that updates the current time every second without requiring page refreshes. The application delivers accurate time synchronization with a clean, responsive, and visually appealing interface.',

  challenges:
    'Ensuring precise one-second interval updates, formatting time consistently with leading zeros, optimizing rendering performance, and maintaining compatibility across different browsers and screen sizes.',

  future:
    'Future enhancements include 12/24-hour format switching, multiple timezone support, customizable themes, date and day display, alarm functionality, stopwatch and countdown timer modes, and Progressive Web App (PWA) support.',

  github: 'https://github.com/rong-rubaiya/Js-mini-proj-Digital-Watch',

  live: 'https://rong-rubaiya.github.io/Js-mini-proj-Digital-Watch/',
  image: '/digitalwatch.png',

  imageText: 'DIGITAL WATCH'
},
{
  title: 'AppifyZone - Interactive App Store',

  description:
    'A modern app discovery platform that simulates a real app store experience. Users can explore trending applications, view detailed app information, analyze performance metrics through interactive visualizations, and manage app installations within a responsive and engaging interface.',

  technologies: [
    'React.js',
    'React Router',
    'Tailwind CSS',
    'JavaScript',
    'React Toastify',
    'Recharts',
    'Local Storage'
  ],

  features: [
    'Interactive App Store Simulation',
    'Install & Uninstall Applications',
    'Detailed App Information Pages',
    'Dynamic Rating & Performance Charts',
    'Smart Download-Based Sorting',
    'Real-Time Toast Notifications',
    'Local Storage Persistence',
    'Responsive Mobile-First Design',
    'Smooth UI Animations',
    'Dynamic Download Count Formatting'
  ],

  problem:
    'Many app showcase websites present static information without allowing users to interact with applications or explore meaningful insights. This limits user engagement and fails to replicate the experience of a real app marketplace.',

  solution:
    'Developed an interactive app store platform using React and Tailwind CSS that enables users to browse applications, simulate installations, analyze rating distributions through graphical visualizations, and organize apps using dynamic sorting. Local Storage maintains installation status across sessions, creating a realistic and engaging app management experience.',

  challenges:
    'Managing application installation states, synchronizing Local Storage with React state, implementing dynamic sorting and filtering, rendering responsive data visualizations, and maintaining smooth performance while handling multiple interactive components.',

  future:
    'Future enhancements include user authentication, personalized wishlists, app reviews and comments, AI-powered recommendation engine, category-based filtering, dark/light theme switching, cloud synchronization, and backend integration for real-time app data.',

  github: 'https://github.com/rong-rubaiya/AppifyZone',

  live: 'https://appifyzone.netlify.app/',
  image: '/appifyzone.png',
  imageText: 'APPIFYZONE'
},
{
  title: 'Emergency Service Directory',

  description:
    'A responsive emergency service directory designed to provide instant access to essential emergency contact numbers across Bangladesh. The platform centralizes important government and support services, allowing users to quickly locate, view, and copy emergency phone numbers during critical situations.',

  technologies: [
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'JavaScript'
  ],

  features: [
    'Emergency Contact Directory',
    'One-Click Number Copy',
    'Essential Government Services',
    'Police, Fire & Ambulance Contacts',
    'Utility & Helpline Information',
    'Responsive Mobile-First Design',
    'Clean & User-Friendly Interface',
    'Fast Contact Accessibility'
  ],

  problem:
    'During emergencies, people often struggle to find accurate contact numbers quickly because they are scattered across different websites or unavailable when urgently needed. Delays in accessing emergency services can have serious consequences.',

  solution:
    'Developed a centralized emergency service directory that provides instant access to verified emergency contact numbers through a simple and intuitive interface. Users can quickly browse essential services and copy phone numbers with a single click, making emergency communication faster and more convenient.',

  challenges:
    'Designing an interface that prioritizes speed and accessibility, organizing emergency services into a clear structure, ensuring responsive performance across devices, and implementing efficient copy-to-clipboard functionality for a seamless user experience.',

  future:
    'Future enhancements include one-click calling on supported devices, GPS-based nearby emergency service suggestions, multilingual support, offline accessibility with PWA, hospital and pharmacy location integration, emergency alerts, and favorite contact management.',

  github: 'https://github.com/rong-rubaiya/5th-Assignment-PHero',

  live: 'https://rong-rubaiya.github.io/5th-Assignment-PHero/',
  image: '/emergency.png',

  imageText: 'EMERGENCY DIRECTORY'
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

  const scrollYRef = useRef(0);

  // Disable body/html scroll when modal is active and restore scroll position
  useEffect(() => {
    if (selectedProject && typeof window !== 'undefined') {
      scrollYRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (scrollYRef.current && typeof window !== 'undefined') {
        window.scrollTo(0, scrollYRef.current);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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
    <section id="projects" className="relative py-24 w-full z-10 overflow-visible">
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
            <span className="font-mono text-[11px] uppercase tracking-[0.45em] text-white/60 mx-3 px-3 py-2 rounded-full border border-white/10 bg-white/5 shadow-[0_0_25px_rgba(255,255,255,0.06)]">
              Page <span className="text-white font-bold mx-1">{currentPage}</span> of <span className="text-primary font-bold">{totalPages}</span>
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
                {project.image ? (
                  <>
                    <div
                      className="absolute inset-0 bg-center bg-cover"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                    <div className="absolute w-32 h-32 rounded-full bg-primary/[0.03] group-hover:bg-primary/[0.07] blur-md transition-all duration-500" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                    <div className="absolute w-32 h-32 rounded-full bg-primary/[0.03] group-hover:bg-primary/[0.07] blur-md transition-all duration-500" />
                    <span className="font-outfit text-sm font-black tracking-[0.3em] text-white/30 group-hover:text-white/70 group-hover:scale-105 transition-all duration-500 font-bold">
                      {project.imageText}
                    </span>
                  </>
                )}

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
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedProject(null)}
            >
              <div className="absolute inset-0 bg-secondary/90 backdrop-blur-md" />
              <motion.div
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative w-full max-w-4xl h-[90vh] max-h-[90vh] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-glow-lg flex flex-col min-h-0"
                onClick={(e) => e.stopPropagation()} // Stop closing on content click
              >
                <div className="absolute inset-0 pointer-events-none bg-black/30 rounded-2xl" />
                <div className="relative flex flex-col max-h-[90vh] overflow-hidden min-h-0">
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
              <div
                className="p-6 sm:p-8 space-y-8 flex-1 min-h-0 overflow-y-auto"
                style={{ WebkitOverflowScrolling: 'touch' }}
                onWheel={(e) => e.stopPropagation()}
              >
                {/* Large visual illustration area */}
                <div className="relative h-60 sm:h-72 border border-white/5 rounded-xl overflow-hidden select-none">
                  {selectedProject.image ? (
                    <>
                      <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{
                          backgroundImage: `url(${selectedProject.image})`,
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                      <span className="font-outfit text-lg font-black tracking-[0.4em] text-white/40">
                        {selectedProject.imageText}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
                  <div className="absolute w-44 h-44 rounded-full bg-primary/5 blur-xl" />
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
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </section>
  );
}
