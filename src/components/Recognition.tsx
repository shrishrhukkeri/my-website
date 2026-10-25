import React from "react";
import { BookOpenCheck } from "lucide-react";
import { awards, publications } from "../data/siteContent";
import { SectionHeading, SpotlightCard } from "./ui/motion";

export const Recognition: React.FC = () => (
  <section id="recognition" className="relative w-full py-24 sm:py-32 scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      <SectionHeading eyebrow="Recognition" title="Research &" accent="awards" />

      <div className="space-y-5">
        {/* Publications: two equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {publications.map((pub, i) => (
            <SpotlightCard key={pub.title} delay={i * 0.1} className="p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent-text">
                  <BookOpenCheck size={14} strokeWidth={1.6} />
                  IEEE Conference
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 tabular-nums">{pub.date}</span>
              </div>
              <h3 className="font-display font-semibold text-[15px] leading-snug tracking-tight text-slate-900 dark:text-white">
                {pub.title}
              </h3>
              <p className="mt-auto text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                {pub.venue}
                <br />
                {pub.where}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Awards: a uniform 3 x 2 grid, every card the same structure and height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5">
          {awards.map((a, i) => (
            <SpotlightCard key={a.title} delay={i * 0.07} className="p-6 flex flex-col gap-4">
              <span className="glass w-[4.5rem] h-9 rounded-full flex items-center justify-center text-xs font-semibold text-accent-text">
                {a.rank}
              </span>
              <div className="space-y-1.5">
                <h3 className="font-display font-semibold text-sm leading-snug text-slate-900 dark:text-white">
                  {a.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">{a.note}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Certifications: full-width */}
        <SpotlightCard delay={0.1} className="px-7 py-6 text-center">
          <p className="text-[13px] text-slate-600 dark:text-slate-300 font-light leading-[1.8]">
            <span className="font-display font-semibold text-slate-900 dark:text-white">140+ certifications</span> across
            IoT, AI/ML, LLMs, computer vision, data science and networking, making me a top certification performer in the department.
          </p>
        </SpotlightCard>
      </div>
    </div>
  </section>
);
