import React from "react";
import { Brain, Cpu, Code2, Users, CheckCircle2 } from "lucide-react";
import { profileData } from "../data/profileData";

export const Tools: React.FC = () => {
  const categoryIcons: Record<string, React.ReactNode> = {
    "AI / ML & Research": <Brain className="text-blue-600 dark:text-sky-400" size={20} />,
    "IoT & Embedded Systems": <Cpu className="text-indigo-600 dark:text-indigo-400" size={20} />,
    "Software Engineering": <Code2 className="text-emerald-600 dark:text-emerald-400" size={20} />,
    "Venture & Management": <Users className="text-amber-600 dark:text-amber-400" size={20} />,
  };

  return (
    <section
      id="skills"
      className="w-full py-20 sm:py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Header */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-[2px] bg-blue-600 dark:bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
              Technical Arsenal
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            Domains & <span className="text-blue-600 dark:text-sky-400">Core Competencies</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Grounded in rigorous laboratory experimentation, embedded hardware builds, and full-stack software development.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.skills.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 hover:border-blue-500/50 dark:hover:border-sky-500/50 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center">
                  {categoryIcons[group.category] || <Code2 size={20} className="text-blue-600" />}
                </div>

                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  {group.category}
                </h3>

                <ul className="space-y-2 pt-1">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 font-light">
                      <CheckCircle2 size={13} className="text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800/60 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                Active Discipline
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
