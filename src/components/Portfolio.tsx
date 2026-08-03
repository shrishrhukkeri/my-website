import React from "react";
import { ArrowUpRight, Shield, Award, ExternalLink } from "lucide-react";
import { profileData } from "../data/profileData";

export const Portfolio: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-6 py-24 bg-white dark:bg-slate-900 transition-colors duration-300 space-y-16"
    >
      {/* 1. Projects Showcase Header & Grid */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
                My Portfolio
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
              My Latest <span className="text-blue-600 dark:text-sky-400">Projects & Ventures</span>
            </h2>
          </div>

          <a
            href="https://github.com/shrishrahulhukkeri"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
          >
            View GitHub Profile
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profileData.projects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 hover:border-blue-600 dark:hover:border-sky-400 transition-all duration-300 shadow-sm hover:shadow-md h-[340px]"
            >
              <div className="space-y-4">
                {/* Visual Card Cover */}
                <div className="w-full h-32 rounded-xl bg-gradient-to-br from-blue-600/10 via-sky-400/5 to-slate-200/20 dark:from-blue-950/40 dark:via-sky-950/20 dark:to-slate-900/30 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/40 relative overflow-hidden">
                  <span className="font-display font-black text-4xl text-blue-600/10 dark:text-sky-400/5 tracking-wider absolute inset-0 flex items-center justify-center uppercase select-none">
                    {project.title.substring(0, 10)}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow flex items-center justify-center text-blue-600 dark:text-sky-400">
                    <Shield size={18} />
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-sky-400 px-2 py-0.5 rounded text-[9px] font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Title & Info */}
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-blue-600 group-hover:border-blue-600 dark:group-hover:text-sky-400 dark:group-hover:border-sky-400 transition-all">
                    <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Impact Footer */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center space-x-2 text-[10px] font-mono text-blue-600 dark:text-sky-400 font-semibold tracking-wide">
                <Award size={12} />
                <span>{project.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
