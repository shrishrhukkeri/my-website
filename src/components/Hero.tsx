import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { profileData } from "../data/profileData";
import profilePic from "../assets/profile.jpg";

const SkillIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case "AIoT":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
    case "Leader":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" />
          <circle cx="2" cy="4" r="0.5" />
          <circle cx="12" cy="4" r="0.5" />
          <circle cx="22" cy="4" r="0.5" />
        </svg>
      );
    case "IoV":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 12 10s-6.7.6-8.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M5 10l2-5h10l2 5M12 2v2M9.5 3c.5-.5 1.5-.5 2 0M7 4.5c1-1 3-1 4 0" />
        </svg>
      );
    case "Team Building":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "AI Avatars":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 21v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2" />
          <circle cx="12" cy="10" r="3" />
          <path d="M19 2v4M17 4h4" />
        </svg>
      );
    case "Computer Vision":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "Communication":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      );
    case "Drones & Robotics":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M6 6l4 4M18 6l-4 4M6 18l4-4M18 18l-4-4" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
        </svg>
      );
    case "Agentic AI":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <path d="M12 2v4M9 11V9h6v2M8 15h.01M16 15h.01M9 18h6" />
        </svg>
      );
    case "Deep Learning":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="6" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 6l3 5M7 18l3-5M14 12l3-5M14 12l3 5" />
        </svg>
      );
    case "IoT":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.1a6 6 0 0 1 6.95 0M12 20h.01" />
        </svg>
      );
    case "Digital Twins":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "LLMs":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      );
    case "Machine Learning":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M9 13a4.5 4.5 0 0 0 3-4" />
          <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
          <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
          <path d="M6 18a4 4 0 0 1-1.967-.516" />
          <path d="M12 13h4" />
          <path d="M12 18h6a2 2 0 0 1 2 2v1" />
          <path d="M12 8h8" />
          <path d="M16 8V5a2 2 0 0 1 2-2" />
          <circle cx="16" cy="13" r=".5" />
          <circle cx="18" cy="3" r=".5" />
          <circle cx="20" cy="21" r=".5" />
          <circle cx="20" cy="8" r=".5" />
        </svg>
      );
    case "Health Tech":
      return (
        <svg className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5v8M8 9h8" />
        </svg>
      );
    default:
      return null;
  }
};

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 110 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      density: number;
    }

    let particles: Particle[] = [];
    const gap = 25; // Grid spacing

    const init = () => {
      particles = [];
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
            density: Math.random() * 20 + 8,
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

      // Map color schemes
      const particleColor = isDark
        ? "rgba(255, 255, 255, 0.03)"
        : "rgba(15, 23, 42, 0.03)";
      const activeColor = isDark
        ? "rgba(56, 189, 248, 0.4)" // Light cyan/sky blue
        : "rgba(37, 99, 235, 0.4)";   // Cobalt blue

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

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
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
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

  const skillsData = [
    "Leader",
    "Health Tech",
    "Machine Learning",
    "Digital Twins",
    "Agentic AI",
    "IoV",
    "LLMs",
    "IoT",
    "AIoT",
    "Drones & Robotics",
    "Communication",
    "Team Building",
    "Computer Vision",
    "AI Avatars"
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Background canvas particle interaction */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column (Text content) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            I'm <span className="text-blue-600 dark:text-sky-400 relative">
              Shrish Hukkeri
              <span className="absolute left-0 bottom-1 w-full h-[6px] bg-blue-600/10 dark:bg-sky-400/20 rounded" />
            </span>
            ,<br />
            Hardware-to-Software Venture Builder.
          </h1>

          {/* Supporting Statement */}
          <p className="max-w-xl text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-light">
            {profileData.aboutText}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:bg-blue-600 dark:hover:bg-slate-100 dark:hover:text-blue-600 transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              View My Portfolio
              <span className="w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-100 flex items-center justify-center text-white dark:text-blue-600 group-hover:scale-110 transition-transform">
                <Play size={10} fill="currentColor" />
              </span>
            </a>
          </div>
        </div>

        {/* Right Column (Visual items) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-12 lg:mt-0">
          
          {/* Mobile Layout: Profile photo + Clean Skill Badges wrap layout (No crowding, no overlapping!) */}
          <div className="flex sm:hidden flex-col items-center gap-6 select-none w-full">
            <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-2xl relative z-10">
              <img
                src={profilePic}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent" />
            </div>
            
             <div className="flex flex-wrap justify-center gap-2.5 max-w-sm px-4">
              {skillsData.map((skill, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      display: "inline-flex",
                    } as React.CSSProperties}
                    className={`rounded-full font-mono border shadow-sm whitespace-nowrap bg-white/95 dark:bg-slate-900/90 border-blue-300 dark:border-sky-500/50 text-blue-700 dark:text-sky-300 ring-1 ring-blue-100 dark:ring-sky-950 px-3.5 py-1 text-[11px] font-bold flex items-center gap-1.5 transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer ${
                      skill === "Leader" ? "scale-105" : "scale-100"
                    }`}
                  >
                    <SkillIcon name={skill} />
                    <span>{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop/Tablet Layout: Premium Concentric Orbits (Hidden on Mobile) */}
          <div className="hidden sm:flex relative sm:w-[520px] sm:h-[520px] md:w-[660px] md:h-[660px] items-center justify-center select-none">
            {/* Single Circular Orbit Ring */}
            <div 
              style={{ width: "calc(2 * var(--orbit-radius))", height: "calc(2 * var(--orbit-radius))" }}
              className="absolute rounded-full border border-dashed border-slate-200 dark:border-slate-800" 
            />

            {/* Constellation Dots between Badges */}
            {skillsData.map((_, i) => {
              const dotAngle = ((i + 0.5) * 2 * Math.PI) / skillsData.length - Math.PI / 2;
              const dotLeft = `calc(50% + var(--orbit-radius) * ${Math.cos(dotAngle)})`;
              const dotTop = `calc(50% + var(--orbit-radius) * ${Math.sin(dotAngle)})`;
              return (
                <div
                  key={`dot-${i}`}
                  style={{ left: dotLeft, top: dotTop }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-500/80 dark:bg-sky-400/80 shadow-[0_0_8px_rgba(59,130,246,0.6)] -translate-x-1/2 -translate-y-1/2 z-10"
                />
              );
            })}

            {/* Constellation of Orbiting Skill Badges (Single Circular Circumference Layout) */}
            {skillsData.map((skill, i) => {
              const angle = (i * 2 * Math.PI) / skillsData.length - Math.PI / 2;
              const cos = Math.cos(angle);
              const sin = Math.sin(angle);
              
              const left = `calc(50% + var(--orbit-radius) * ${cos})`;
              const top = skill === "Leader"
                ? `calc(50% + var(--orbit-radius) * ${sin} - 17px)`
                : `calc(50% + var(--orbit-radius) * ${sin})`;

              return (
                <div
                  key={i}
                  style={{ 
                    left, 
                    top, 
                    translate: "-50% -50%",
                  } as React.CSSProperties}
                  className={`absolute z-20 ${skill === "Leader" ? "z-30" : ""}`}
                >
                  <div
                    className={`rounded-full font-mono border shadow-sm whitespace-nowrap transition-all duration-300 hover:shadow-lg hover:scale-125 hover:z-50 bg-white/95 dark:bg-slate-900/90 border-blue-300 dark:border-sky-500/50 text-blue-700 dark:text-sky-300 ring-1 ring-blue-100 dark:ring-sky-950 px-3.5 py-1.5 text-[11px] font-bold flex items-center gap-2 cursor-pointer ${
                      skill === "Leader" ? "scale-110" : "scale-100"
                    }`}
                  >
                    <SkillIcon name={skill} />
                    <span>{skill}</span>
                  </div>
                </div>
              );
            })}

            {/* Profile Avatar Frame (Bigger Image!) */}
            <div className="sm:w-[260px] sm:h-[260px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-2xl relative group z-10">
              <img
                src={profilePic}
                alt={profileData.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
