import React from "react";

export const TechStrip: React.FC = () => {
  const technologies = [
    "Python",
    "C / C++",
    "React & TS",
    "ESP32 & Arduino",
    "IoT Cloud Telemetry",
    "SQL Databases",
    "Git & GitHub",
    "Tailwind CSS",
  ];

  return (
    <div className="w-full bg-slate-100/90 dark:bg-[#151b26] border-y border-slate-200/80 dark:border-slate-800/80 py-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop View: Horizontal Flex with Spacers */}
        <div className="hidden sm:flex items-center justify-between gap-6 overflow-x-auto text-xs sm:text-sm font-display font-medium text-slate-600 dark:text-slate-300 select-none">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="hover:text-[#0066ff] dark:hover:text-[#00cba0] transition-colors whitespace-nowrap tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile View: 2-Row Wrapped Grid Matching the Mobile Mockup in the Image */}
        <div className="sm:hidden grid grid-cols-3 gap-2.5 text-center text-xs font-display font-medium text-slate-600 dark:text-slate-300">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1.5 rounded-md bg-white/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:text-[#0066ff] dark:hover:text-[#00cba0] transition-colors truncate"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
