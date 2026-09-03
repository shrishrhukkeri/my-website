import React, { useState, useEffect } from "react";
import { Download, ExternalLink, Sparkles, Eye } from "lucide-react";
import { profileData } from "../data/profileData";
import profileCutout from "../assets/bg.png";

import peacockFeather from "../assets/peacock_feather.jpg";

interface HeroProps {
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = () => {
  const [visitorCount, setVisitorCount] = useState<number>(1434);

  useEffect(() => {
    try {
      const BASE_COUNT = 1434;
      const stored = localStorage.getItem("shrish_portfolio_visits");
      let count = stored ? parseInt(stored, 10) : BASE_COUNT;

      if (!sessionStorage.getItem("shrish_visit_recorded")) {
        count += 1;
        sessionStorage.setItem("shrish_visit_recorded", "true");
        localStorage.setItem("shrish_portfolio_visits", count.toString());
      }
      setVisitorCount(count);

      fetch("https://api.counterapi.dev/v1/shrish-portfolio-aiot/visits/up")
        .then((res) => res.json())
        .then((data) => {
          if (data && typeof data.count === "number") {
            const liveTotal = BASE_COUNT + data.count;
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
      className="relative w-full pt-3 sm:pt-4 pb-12 sm:pb-16 overflow-hidden bg-white dark:bg-[#0b111e] transition-colors duration-300"
    >
      {/* Visitor Badge (Positioned below top bar, left-aligned directly below Shrish Hukkeri) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 sm:mb-3 flex justify-start relative z-20">
        <div
          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100/85 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs select-none font-mono text-[10.5px] text-slate-700 dark:text-slate-300 transition-all hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
          title="Live Visitor Count"
        >
          <Eye size={12} className="text-slate-400 dark:text-slate-400 shrink-0" />
          <div className="flex items-center gap-1 leading-none">
            <span className="text-slate-500 dark:text-slate-400 font-normal">Visits:</span>
            <span className="font-extrabold text-slate-900 dark:text-white tracking-tight">
              {visitorCount.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Full-Hero Zoomed Translucent Peacock Feather Backdrop (Behind Text & Portrait) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none">
        <div className="w-full max-w-none h-full flex items-center justify-center">
          <img
            src={peacockFeather}
            alt="Full Screen Peacock Feather Backdrop"
            className="w-[145vw] sm:w-[130vw] md:w-[120vw] max-w-none h-auto min-h-[600px] sm:min-h-[800px] lg:min-h-[900px] object-contain mix-blend-multiply dark:mix-blend-screen dark:invert dark:hue-rotate-180 opacity-15 dark:opacity-20 transition-all duration-300 transform scale-100 sm:scale-140 md:scale-110 translate-y-16 sm:translate-y-24 md:translate-y-32 filter contrast-[1.04]"
          />
        </div>
      </div>

      {/* Ambient background glow accents */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-[#0066ff]/10 via-[#00a884]/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6 relative z-10">
        
        {/* Top Greeting & Intro */}
        <div className="space-y-2 sm:space-y-2.5">
          {/* "Hello ." with Flame Blue dot */}
          <div className="flex items-center justify-center gap-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Hello
            </h2>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0066ff]">
              .
            </span>
          </div>

          {/* Flame Blue Line + "I'm Shrish" */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[2.5px] bg-gradient-to-r from-[#0066ff] to-[#00a884]" />
            <span className="text-xl sm:text-2xl font-display font-semibold text-slate-800 dark:text-slate-200">
              I'm Shrish
            </span>
          </div>

          {/* Requested Headline: "AIoT Developer Enabling Edge Intelligence" */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12] pt-0.5">
            AIoT Developer Enabling <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066ff] via-[#0284c7] to-[#00a884] dark:from-[#2979ff] dark:via-[#38bdf8] dark:to-[#00cba0]">
              Edge Intelligence
            </span>
          </h1>

          {/* Requested Tagline: "Innovating at the edge of possibility" */}
          <div className="pt-0.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00a884]/30 dark:border-[#00cba0]/30 bg-[#00a884]/5 dark:bg-[#00cba0]/10 text-[#00a884] dark:text-[#00cba0] text-xs sm:text-sm font-display font-medium shadow-xs">
              <Sparkles size={14} className="shrink-0 text-[#00a884] dark:text-[#00cba0]" />
              <span className="italic">"Innovating at the edge of possibility"</span>
            </div>
          </div>
        </div>

        {/* 1. Transparent Background Profile Image */}
        <div className="relative flex items-center justify-center my-1 sm:my-2 select-none min-h-[280px] sm:min-h-[350px] md:min-h-[400px]">
          
          {/* Aesthetic radiant back-glow combining flame blue and peacock green */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full ambient-portrait-glow pointer-events-none z-0" />

          {/* High-resolution transparent cutout image */}
          <div className="relative z-10 max-w-[270px] sm:max-w-[330px] md:max-w-[360px] transition-transform duration-300 hover:scale-[1.02]">
            <img
              src={profileCutout}
              alt={profileData.name}
              className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Description Paragraph (Placed Below Profile Image) */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
          Undergraduate researcher at RNSIT and Co-founder of <span className="font-semibold text-slate-900 dark:text-white">Vizagon</span>. Bridging physical microcontrollers and autonomous hardware with secure, intelligent edge telemetry pipelines.
        </p>

        {/* Action Buttons (Placed Below Description) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          {/* Primary Button: Flame Blue to Peacock Green Gradient */}
          <a
            href={profileData.contact.resumeUrl}
            download="Shrish_Rahul_Hukkeri_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-display font-medium text-sm bg-gradient-to-r from-[#0066ff] to-[#00a884] hover:from-[#0052cc] hover:to-[#008f70] text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
            id="hero-cv-btn"
            title="Download Shrish's Resume (PDF)"
          >
            <Download size={15} />
            <span>Download CV</span>
          </a>

          {/* Secondary Button: Flame Blue Outline (LinkedIn) */}
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-display font-medium text-sm border border-[#0066ff] text-[#0066ff] dark:text-[#2979ff] hover:bg-[#0066ff] hover:text-white dark:hover:bg-[#2979ff] dark:hover:text-white transition-all duration-200 cursor-pointer shadow-xs active:scale-98"
            id="hero-linkedin-btn"
            title="Visit LinkedIn Profile"
          >
            <span>LinkedIn</span>
            <ExternalLink size={13} />
          </a>

          {/* Tertiary Button: Peacock Green Outline (GitHub) */}
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-display font-medium text-sm border border-[#00a884] text-[#00a884] dark:text-[#00cba0] hover:bg-[#00a884] hover:text-white dark:hover:bg-[#00cba0] dark:hover:text-slate-900 transition-all duration-200 cursor-pointer active:scale-98"
            id="hero-github-btn"
            title="Explore GitHub Repositories"
          >
            <span>GitHub</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
};
