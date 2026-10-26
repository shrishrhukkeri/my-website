import React, { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Download, ExternalLink, Sparkles, Eye } from "lucide-react";
import { profileData } from "../data/profileData";
import profileCutout from "../assets/bg.png";
import peacockFeather from "../assets/peacock_feather.jpg";
import { Magnetic, ease } from "./ui/motion";

interface HeroProps {
  isDark: boolean;
  /** "gold" swaps the feather for drifting gold dust. */
  theme?: "gold";
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

export const Hero: React.FC<HeroProps> = ({ isDark, theme }) => {
  const [visitorCount, setVisitorCount] = useState<number>(1434);

  useEffect(() => {
    try {
      const BASE_COUNT = 1434;
      const stored = localStorage.getItem("shrish_portfolio_visits");
      let count = stored ? parseInt(stored, 10) : BASE_COUNT;

      const isNewVisit = !sessionStorage.getItem("shrish_visit_recorded");
      if (isNewVisit) {
        count += 1;
        sessionStorage.setItem("shrish_visit_recorded", "true");
        localStorage.setItem("shrish_portfolio_visits", count.toString());
      }
      setVisitorCount(count);

      const endpoint = isNewVisit
        ? "https://abacus.jasoncameron.dev/hit/shrish-portfolio-aiot/visits"
        : "https://abacus.jasoncameron.dev/get/shrish-portfolio-aiot/visits";

      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          if (data && typeof data.value === "number") {
            const liveTotal = BASE_COUNT + data.value;
            setVisitorCount(liveTotal);
            localStorage.setItem("shrish_portfolio_visits", liveTotal.toString());
          }
        })
        .catch(() => {});
    } catch {
      // Graceful fallback
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full pt-3 sm:pt-4 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Visitor badge */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3 flex justify-start relative z-20"
      >
        <div
          className="glass inline-flex items-center gap-1.5 px-3 py-1 rounded-full select-none text-[10.5px] text-slate-700 dark:text-slate-300"
          title="Live Visitor Count"
        >
          <Eye size={12} className="text-slate-400 shrink-0" />
          <div className="flex items-center gap-1 leading-none">
            <span className="text-slate-500 dark:text-slate-400 font-normal">Visits:</span>
            <span className="font-extrabold text-slate-900 dark:text-white tracking-tight">
              {visitorCount.toLocaleString()}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Hero backdrop: translucent peacock feather (the gold edition uses the page-wide gold dot field instead) */}
      {theme !== "gold" && (
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none">
        <motion.img
          src={peacockFeather}
          alt=""
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: isDark ? 0.2 : 0.15, scale: 1 }}
          transition={{ duration: 1.6, ease }}
          className="feather-img w-[145vw] sm:w-[130vw] md:w-[120vw] max-w-none h-auto min-h-[600px] sm:min-h-[800px] lg:min-h-[900px] object-contain mix-blend-multiply dark:mix-blend-screen dark:invert dark:hue-rotate-180 translate-y-16 sm:translate-y-24 md:translate-y-32 contrast-[1.04]"
        />
      </div>
      )}

      {/* Ambient wash */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-accent/10 via-accent-2/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6 relative z-10"
      >
        <div className="space-y-2 sm:space-y-2.5">
          <motion.div variants={item} className="flex items-center justify-center gap-1">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-slate-900 dark:text-white tracking-tight">
              Hello
            </h2>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.7 }}
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-accent-text"
            >
              .
            </motion.span>
          </motion.div>

          <motion.div variants={item} className="flex items-center justify-center gap-3">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.5 }}
              style={{ originX: 1 }}
              className="w-12 h-[2.5px] bg-gradient-to-r from-accent to-accent-2"
            />
            <span className="text-lg sm:text-xl font-display font-semibold text-slate-800 dark:text-slate-200">
              I'm Shrish
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[1.65rem] sm:text-[2.6rem] lg:text-[3.3rem] font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[1.14] pt-0.5"
          >
            AIoT Developer Enabling <br className="hidden sm:inline" />
            <span className="text-gradient">Edge Intelligence</span>
          </motion.h1>

          <motion.div variants={item} className="pt-0.5">
            <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-accent-2-text text-xs sm:text-[13px] font-display font-medium">
              <Sparkles size={14} className="shrink-0" />
              <span className="italic">"Innovating at the edge of possibility"</span>
            </div>
          </motion.div>
        </div>

        {/* Portrait with radiant back-glow */}
        <motion.div
          variants={item}
          className="relative flex items-center justify-center my-1 sm:my-2 select-none min-h-[280px] sm:min-h-[350px] md:min-h-[400px]"
        >
          <motion.div
            className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full ambient-portrait-glow pointer-events-none z-0"
          />

          <motion.div
            className="relative z-10 max-w-[270px] sm:max-w-[330px] md:max-w-[360px]"
          >
            <img
              src={profileCutout}
              alt={profileData.name}
              className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
            />
          </motion.div>
        </motion.div>

        <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 font-light leading-relaxed"
        >
          Final-year CS Engineer at RNSIT specializing in AI/ML, IoT, and embedded robotics. Hands-on experience across edge intelligence, telemetry pipelines, and autonomous UAV systems.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Magnetic>
            <a
              href={profileData.contact.resumeUrl}
              download="Shrish_Rahul_Hukkeri_CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-display font-medium text-[13px] bg-gradient-to-r from-accent to-accent-2 text-on-accent shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_14px_28px_-14px_var(--accent-shadow)] hover:brightness-110 transition-[filter] duration-300 cursor-pointer"
              id="hero-cv-btn"
              title="Download Shrish's CV (PDF)"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-medium text-[13px] text-accent-text transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
              id="hero-linkedin-btn"
              title="Visit LinkedIn Profile"
            >
              <span>LinkedIn</span>
              <ExternalLink size={13} />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-display font-medium text-[13px] text-accent-2-text transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
              id="hero-github-btn"
              title="Explore GitHub Repositories"
            >
              <span>GitHub</span>
              <ExternalLink size={13} />
            </a>
          </Magnetic>
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          variants={item}
          href="#about"
          aria-label="Scroll to About"
          className="hidden sm:flex flex-col items-center gap-2 pt-6 text-[10px] uppercase tracking-[0.3em] text-slate-400 hover:text-accent-text transition-colors"
        >
          Scroll
          <span className="relative w-5 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex justify-center pt-1.5">
            <span className="animate-scroll-cue w-1 h-1.5 rounded-full bg-gradient-to-b from-accent to-accent-2" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
};
