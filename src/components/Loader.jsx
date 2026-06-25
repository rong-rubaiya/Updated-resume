import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Variable progress speed for realistic high-tech loading feel
    const intervals = [
      { target: 30, delay: 20 },
      { target: 60, delay: 35 },
      { target: 85, delay: 15 },
      { target: 100, delay: 40 },
    ];

    let currentIntervalIndex = 0;
    let timer;

    const updateProgress = () => {
      setProgress((prev) => {
        const currentTarget = intervals[currentIntervalIndex].target;
        if (prev < currentTarget) {
          return prev + 1;
        } else {
          if (currentIntervalIndex < intervals.length - 1) {
            currentIntervalIndex++;
            clearInterval(timer);
            timer = setInterval(updateProgress, intervals[currentIntervalIndex].delay);
          } else {
            clearInterval(timer);
            // Small delay at 100 before closing
            setTimeout(() => {
              onComplete();
            }, 500);
          }
        }
        return prev;
      });
    };

    timer = setInterval(updateProgress, intervals[currentIntervalIndex].delay);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-secondary flex flex-col items-center justify-center z-[99999] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Background radial glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/3 blur-[80px]" />

      <div className="relative flex flex-col items-center max-w-[280px] w-full">
        {/* SVG Developer Logo with Draw stroke animation */}
        <motion.svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          className="mb-8 select-none"
        >
          {/* Hexagon Frame */}
          <motion.polygon
            points="50,5 90,28 90,72 50,95 10,72 10,28"
            fill="none"
            stroke="#ff6b00"
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="glow-orange"
          />
          {/* Logo Initials/Symbol (e.g. ⚡) */}
          <motion.path
            d="M53 25 L35 52 H49 L47 75 L65 48 H51 Z"
            fill="#ff6b00"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
          />
        </motion.svg>

        {/* Brand Name */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-outfit text-sm font-semibold tracking-[0.4em] uppercase text-white mb-6"
        >
          DEV // DEV
        </motion.h2>

        {/* Counter */}
        <div className="flex items-baseline justify-between w-full font-outfit text-white mb-2">
          <span className="text-xs tracking-widest text-muted uppercase">System Boot</span>
          <span className="text-3xl font-extrabold text-primary w-[70px] text-right">
            {progress.toString().padStart(3, '0')}%
          </span>
        </div>

        {/* Progress Line */}
        <div className="relative w-full h-[2px] bg-darkGray/80 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary shadow-glow"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Decorative cybertech corner brackets */}
      <div className="absolute top-8 left-8 text-xs font-mono text-darkGray-light opacity-40 select-none">
        SYS_STATUS: ACTIVE
      </div>
      <div className="absolute bottom-8 right-8 text-xs font-mono text-darkGray-light opacity-40 select-none">
        PORTFOLIO_V2.0
      </div>
    </motion.div>
  );
}
