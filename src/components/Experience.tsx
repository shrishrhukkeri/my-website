import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { profileData } from "../data/profileData";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full py-20 sm:py-28 bg-white dark:bg-[#0b111e] transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-gradient-to-r from-[#0066ff] to-[#00a884]" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#0066ff] dark:text-[#2979ff]">
              Trajectory
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Roles
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {profileData.experience.map((role, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#131c2d] hover:border-[#0066ff]/60 dark:hover:border-[#2979ff]/60 transition-all duration-200 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/70 dark:border-slate-800/80 pb-3">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#00a884] dark:text-[#00cba0]">
                    {role.organization}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {role.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {role.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {role.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                {role.description.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0066ff] dark:text-[#2979ff] font-mono">›</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {role.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-[10px] font-mono px-2 py-0.5 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
