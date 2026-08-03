import React from "react";
import { Calendar, Award } from "lucide-react";
import { profileData } from "../data/profileData";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/60 dark:border-slate-800/40 transition-colors duration-300"
    >
      {/* Header */}
      <div className="space-y-3 mb-10 text-left">
        <div className="flex items-center gap-2">
          <div className="w-10 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
            Academic Background
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          Education & <span className="text-blue-600 dark:text-sky-400">Certifications</span>
        </h2>
      </div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {profileData.education.map((edu, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-blue-600/60 dark:hover:border-sky-400/60 transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-blue-600 dark:text-sky-400 font-semibold block">
                    {edu.institution}
                  </span>
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>
                </div>

                <span className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/70 font-mono text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                  <Calendar size={11} />
                  {edu.duration}
                </span>
              </div>

              <div className="text-[11px] font-semibold font-mono text-blue-600 dark:text-sky-400 uppercase tracking-wide bg-blue-50 dark:bg-blue-950/30 px-2.5 py-1 rounded-md w-fit">
                {edu.grade}
              </div>

              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed pt-1">
                {edu.details.slice(0, 2).map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 dark:text-sky-400 mr-2 font-mono">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <Award size={13} className="text-blue-600 dark:text-sky-400" />
              <span>Verified Academic Record</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
