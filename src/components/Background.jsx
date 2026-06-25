import React, { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse movement listener
    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle Setup
    const particles = [];
    const particleCount = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 25000));

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // Distribute initial particles across height
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() * 0.4 - 0.2);
        this.alpha = Math.random() * 0.5 + 0.15;
        this.color = '#ff6b00';
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        // Interaction with mouse (push particles away slightly)
        if (mouseRef.current.active) {
          const dx = this.x - mouseRef.current.x;
          const dy = this.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 120) {
            const force = (120 - distance) / 120;
            this.x += (dx / distance) * force * 1.5;
            this.y += (dy / distance) * force * 1.5;
          }
        }

        // Reset if out of bounds or invisible
        if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        // Soft glowing particle effect
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Render loop
    const render = () => {
      // Clear canvas with deep black
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid pattern (subtle lines)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Smooth lerp mouse tracking
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Draw background glow blobs
      if (mouse.active) {
        ctx.save();
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 10,
          mouse.x, mouse.y, Math.max(300, canvas.width * 0.25)
        );
        gradient.addColorStop(0, 'rgba(255, 107, 0, 0.08)');
        gradient.addColorStop(0.5, 'rgba(255, 107, 0, 0.02)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, Math.max(300, canvas.width * 0.25), 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }

      // Draw a static decorative secondary glow blob on top-right
      ctx.save();
      const topRightGlow = ctx.createRadialGradient(
        canvas.width * 0.85, canvas.height * 0.2, 50,
        canvas.width * 0.85, canvas.height * 0.2, 400
      );
      topRightGlow.addColorStop(0, 'rgba(255, 107, 0, 0.04)');
      topRightGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.beginPath();
      ctx.arc(canvas.width * 0.85, canvas.height * 0.2, 400, 0, Math.PI * 2);
      ctx.fillStyle = topRightGlow;
      ctx.fill();
      ctx.restore();

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      {/* Premium subtle noise overlay for that luxurious matte paper/screen vibe */}
      <div 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </>
  );
}
