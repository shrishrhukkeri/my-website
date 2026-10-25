import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profileData";
import { featuredProjects } from "../data/siteContent";
import { Reveal, SectionHeading, SpotlightCard } from "./ui/motion";

export const Portfolio: React.FC = () => (
  <section id="projects" className="relative w-full py-24 sm:py-32 scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that"
        accent="ship"
        subtitle="Systems where AI, hardware and security meet real-world constraints."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {featuredProjects.map((proj, idx) => {
          const wide = proj.span.includes("col-span-4");
          return (
            <SpotlightCard
              key={proj.title}
              delay={(idx % 3) * 0.08}
              className={`p-7 sm:p-8 flex flex-col justify-between gap-7 ${proj.span} ${wide ? "md:col-span-2" : ""}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent-text">
                    {proj.category}
                  </span>
                  <span className="text-[11px] text-slate-400 tabular-nums">0{idx + 1}</span>
                </div>

                <h3 className={`font-display font-semibold tracking-tight text-slate-900 dark:text-white leading-snug ${wide ? "text-xl sm:text-[1.7rem]" : "text-lg"}`}>
                  {proj.title}
                </h3>

                <p className="text-[13px] text-slate-600 dark:text-slate-300 font-light leading-[1.8]">
                  {proj.summary}
                </p>

                {proj.metrics && (
                  <div className="flex gap-10 pt-2">
                    {proj.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display font-semibold text-4xl tracking-tight text-slate-900 dark:text-white">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 dark:bg-white/5 ring-1 ring-slate-900/[0.06] dark:ring-white/10 text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-900/[0.07] dark:border-white/10 flex items-center gap-2.5 text-[11.5px] font-medium text-slate-700 dark:text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-2 shrink-0" />
                <span className="leading-tight">{proj.impact}</span>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      <Reveal className="flex justify-center">
        <a
          href={profileData.contact.github}
          target="_blank"
          rel="noreferrer"
          className="glass group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[13px] font-display font-medium text-slate-800 dark:text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          More on GitHub
          <ArrowUpRight size={15} strokeWidth={1.8} className="text-accent-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </Reveal>
    </div>
  </section>
);
