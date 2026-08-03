import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Moon, Sun } from "lucide-react";
import { profileData } from "../data/profileData";
import profilePic from "../assets/profile.jpg";

interface HeroCanvasProps {
  isDark: boolean;
  toggleDark: () => void;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ isDark, toggleDark }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle representation
    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      density: number;
    }

    let particles: Particle[] = [];
    const gap = 30; // Grid spacing

    const init = () => {
      particles = [];
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            density: Math.random() * 30 + 10,
          });
        }
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    init();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render dots
      const particleColor = isDark
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.04)";
      const activeColor = isDark
        ? "rgba(0, 242, 254, 0.4)"
        : "rgba(0, 242, 254, 0.5)";

      ctx.fillStyle = particleColor;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Distance between mouse and particle
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          const forceDirectionX = directionX * force * p.density;
          const forceDirectionY = directionY * force * p.density;

          p.x -= forceDirectionX;
          p.y -= forceDirectionY;
          ctx.fillStyle = activeColor;
        } else {
          // Slowly return to base coordinates
          if (p.x !== p.baseX) {
            const dxBase = p.x - p.baseX;
            p.x -= dxBase / 10;
          }
          if (p.y !== p.baseY) {
            const dyBase = p.y - p.baseY;
            p.y -= dyBase / 10;
          }
          ctx.fillStyle = particleColor;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDark]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Interactive Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Modern Header / Nav */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span className="font-mono text-sm tracking-widest uppercase opacity-80">
            SRH // PORTFOLIO
          </span>
        </div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8 font-mono text-xs uppercase tracking-wider">
            <a href="#about" className="hover:text-brand-cyan transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-brand-cyan transition-colors">
              Venture
            </a>
            <a href="#research" className="hover:text-brand-cyan transition-colors">
              Research
            </a>
            <a href="#achievements" className="hover:text-brand-cyan transition-colors">
              Achievements
            </a>
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-800 bg-white/20 dark:bg-black/20 backdrop-blur-md hover:border-brand-cyan transition-all duration-300"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <Sun size={16} className="text-yellow-400" />
            ) : (
              <Moon size={16} className="text-gray-700" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center z-10 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Profile Headshot Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 inline-block relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-800 shadow-xl mx-auto relative group">
              <img
                src={profilePic}
                alt={profileData.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Absolute indicator for startup founder status */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#1a1b1e] border border-gray-200 dark:border-gray-800 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase shadow-md whitespace-nowrap">
              Vizagon Founder
            </div>
          </motion.div>

          {/* Confident, Professional Kinetic Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-2"
          >
            {profileData.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-mono font-medium text-brand-cyan tracking-wide mb-6"
          >
            {profileData.tagline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto text-sm md:text-base opacity-85 leading-relaxed mb-10"
          >
            {profileData.aboutText}
          </motion.p>

          {/* Minimal CTAs with smooth scroll handlers */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#experience"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group shadow-lg"
            >
              Explore Ventures
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-gray-300 dark:border-gray-800 hover:border-brand-cyan hover:text-brand-cyan transition-all font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Contact Terminal
              <FileText size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <footer className="w-full py-8 text-center z-10 relative">
        <a
          href="#about"
          className="font-mono text-[10px] tracking-widest opacity-50 hover:opacity-100 transition-opacity uppercase"
        >
          Scroll to explore // down
        </a>
      </footer>
    </section>
  );
};
