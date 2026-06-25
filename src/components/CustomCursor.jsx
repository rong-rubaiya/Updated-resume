import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring settings for smooth lagging trail
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    // Apply cursor-hide class to body
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Hover event delegation
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], .magnetic-item, .project-card-interactive');
      if (!target) {
        setCursorType('default');
        setCursorText('');
        return;
      }

      // Check if project card
      if (target.classList.contains('project-card-interactive')) {
        setCursorType('project');
        setCursorText('VIEW');
      } else if (target.closest('a') || target.closest('button')) {
        setCursorType('hovered');
      }
    };

    const handleMouseOut = () => {
      setCursorType('default');
      setCursorText('');
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isMobile]);

  if (isMobile) return null;

  // Variants for cursor states
  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
      borderColor: '#ff6b00',
    },
    hovered: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(255, 107, 0, 0.1)',
      borderColor: '#ff6b00',
      borderWidth: 2,
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: '#ff6b00',
      borderColor: '#ff6b00',
    }
  };

  return (
    <>
      {/* Lagging outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-bold tracking-widest text-secondary overflow-hidden shadow-glow"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={cursorType}
        variants={variants}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {cursorType === 'project' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-black font-extrabold uppercase select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Instant inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
