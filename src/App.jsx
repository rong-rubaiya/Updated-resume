import React, { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Custom Components
import Loader from './components/Loader';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Rubaiya_Hamid | Premium Frontend & MERN Stack Developer</title>
        <meta name="description" content="Portfolio of Rubaiya_Hamid, a premium Frontend and MERN Stack Developer specializing in highly interactive, animated, responsive web applications and clean UI/UX designs." />
      </Helmet>
      
      <ReactLenis root>
        {/* Custom Interactive Canvas Background & Noise */}
        <Background />

        {/* Custom Premium Trailing Cursor */}
        <CustomCursor />

        {/* Loader Screen */}
        <AnimatePresence mode="wait">
          {loading && (
            <Loader onComplete={() => setLoading(false)} />
          )}
        </AnimatePresence>

        {/* Portfolio Content */}
        {!loading && (
          <div className="relative min-h-screen z-10 select-none">
            {/* Navigation Header */}
            <Navbar />
            
            {/* Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Education />
              <Certificates />
              <Projects />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </div>
        )}
      </ReactLenis>
    </HelmetProvider>
  );
}
