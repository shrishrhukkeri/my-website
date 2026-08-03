import React from "react";
import { Calendar } from "lucide-react";
import { profileData } from "../data/profileData";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-slate-900 transition-colors duration-300 space-y-12"
    >
      {/* Header */}
      <div className="space-y-3 text-left">
        <div className="flex items-center gap-2">
          <div className="w-10 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
            Professional Trajectory
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          Work <span className="text-blue-600 dark:text-sky-400">Experience & Roles</span>
        </h2>
      </div>

      {/* Work Experience Cards Grid (Horizontal 2x2 grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {profileData.experience.map((role, idx) => (
          <div
            key={idx}
            className="group p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/20 shadow-sm hover:shadow-md hover:border-blue-600/60 dark:hover:border-sky-400/60 transition-all duration-300 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-blue-600 dark:text-sky-400 font-semibold block">
                    {role.organization} • {role.location}
                  </span>
                  <h3 className="font-display font-bold text-base md:text-lg text-slate-900 dark:text-white leading-snug">
                    {role.title}
                  </h3>
                </div>

                <span className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-150 dark:bg-slate-800/70 font-mono text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                  <Calendar size={11} />
                  {role.duration}
                </span>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400 font-light leading-relaxed pt-1">
                {role.description.slice(0, 2).map((desc, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 dark:text-sky-400 mr-2 font-mono">›</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills used */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
              {role.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded text-[10px] font-mono font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
