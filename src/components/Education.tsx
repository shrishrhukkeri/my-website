import React from "react";
import { GraduationCap, Calendar, Award, Trophy } from "lucide-react";
import { profileData } from "../data/profileData";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="w-full py-20 sm:py-24 bg-slate-50/60 dark:bg-slate-950/60 border-t border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Section Header */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-blue-600 dark:bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
              Academics & Honours
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Track & <span className="text-blue-600 dark:text-sky-400">Competitive Awards</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Formal technical degrees supplemented by national hackathon victories and aeronautical piloting competitions.
          </p>
        </div>

        {/* 2-Column: Left Education Cards, Right Honours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Formal Degrees (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap size={18} className="text-blue-600 dark:text-sky-400" />
              <span>Formal Education</span>
            </h3>

            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-mono text-xs font-semibold text-blue-600 dark:text-sky-400">
                      {edu.institution}
                    </span>
                    <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mt-0.5">
                      {edu.degree}
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    <Calendar size={10} />
                    {edu.duration}
                  </span>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-sky-950/40 text-blue-700 dark:text-sky-300 border border-blue-200/60 dark:border-sky-900/60 font-mono text-xs font-semibold">
                  {edu.grade}
                </div>

                <ul className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {edu.details.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-sky-400 font-mono">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Major Awards & Hackathons (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy size={18} className="text-amber-500" />
              <span>Honours, Awards & Milestones</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="text-blue-600 dark:text-sky-400 font-semibold">{item.awarder}</span>
                      <span>{item.year}</span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <Award size={12} className="text-amber-500 shrink-0" />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
