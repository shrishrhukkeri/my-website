import React from "react";
import { ArrowUpRight, Award } from "lucide-react";
import { profileData } from "../data/profileData";

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "SAV4Secure — Child Safety Automation",
      category: "Smart Automation & Safety",
      summary: "AirTag-driven child safety monitoring automation engineered to prevent domestic hazards through rapid automated isolation sensors.",
      techStack: ["AirTag", "SPLASH Programming", "Smart Automations", "Shortcuts"],
      impact: "Won 1st Place at National Smart India Hackathon (SIH) — ₹25,000 prize.",
      link: profileData.contact.github,
    },
    {
      title: "Vehicular Safety Management System (VSMS) & IoV",
      category: "Internet of Vehicles",
      summary: "IoV vehicle safety prototype utilizing ESP32 nodes for real-time telemetry, distance sensing, and collision hazard alerts.",
      techStack: ["C++", "Python", "ESP32", "Edge IoT", "MQTT"],
      impact: "Selected for the national KPIT Sparkle technical showcase.",
      link: profileData.contact.github,
    },
    {
      title: "AiDBMS — NLP Intelligent Database System",
      category: "Generative AI & Data",
      summary: "Natural language interface parsing plain-English queries into validated, executable SQL with explainable step-by-step rationales.",
      techStack: ["Python", "PostgreSQL", "SQLite", "NLP", "LLM APIs", "Streamlit"],
      impact: "Translates plain-English to validated SQL with interactive execution.",
      link: profileData.contact.github,
    },
    {
      title: "FAST — Farmers Assistance System using Technology",
      category: "Precision Agriculture",
      summary: "Decision-support system fusing soil moisture, temperature, and humidity sensors with ML to deliver optimal crop recommendations.",
      techStack: ["Arduino Uno", "IoT Sensors", "Python", "ML Classification"],
      impact: "Advises real-time crop actions for irrigation, fertilisation, and harvest.",
      link: profileData.contact.github,
    },
    {
      title: "React Native Mobile Applications",
      category: "Mobile Engineering",
      summary: "Cross-platform mobile apps engineered with modern state management, real-time data sync, offline-first storage, and responsive UI.",
      techStack: ["React Native", "TypeScript", "Expo", "Supabase", "REST APIs"],
      impact: "Scalable mobile architecture delivering native performance across Android and iOS.",
      link: profileData.contact.github,
    },
    {
      title: "IoMT DDoS Anomaly Telemetry Dataset",
      category: "Cybersecurity Research",
      summary: "Cyber-physical dataset tracking ESP32 node performance under simulated volumetric DDoS attacks (HTTP, UDP, SYN floods).",
      techStack: ["Python", "Kaggle Dataset", "ESP32", "Scikit-learn"],
      impact: "Published dataset for resource-constrained edge cyber-physical research.",
      link: "https://www.kaggle.com/datasets",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 sm:py-28 bg-slate-50/70 dark:bg-[#0e1523] transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Section Header with Flame Blue to Peacock Green indicator */}
        <div className="text-center space-y-3">
          <div className="w-1.5 h-6 bg-gradient-to-b from-[#0066ff] to-[#00a884] mx-auto rounded-full" />
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Featured hardware-software co-designs, intelligent AI/ML systems, and cybersecurity research.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c2d] hover:border-[#0066ff]/70 dark:hover:border-[#2979ff]/70 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold uppercase text-[#00a884] dark:text-[#00cba0] tracking-wider">
                    {proj.category}
                  </span>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-md text-slate-400 hover:text-[#0066ff] transition-colors"
                    title="View repository"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {proj.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-[10px] font-mono px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-xs font-mono text-[#00a884] dark:text-[#00cba0]">
                <Award size={13} className="shrink-0" />
                <span className="font-medium text-[11px] leading-tight">{proj.impact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
