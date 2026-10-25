import React from "react";
import { BrainCircuit, Cpu, Plane, Layers, GraduationCap, MapPin } from "lucide-react";
import { focusAreas, stats } from "../data/siteContent";
import { CountUp, Reveal, SectionHeading, SpotlightCard } from "./ui/motion";

const icons = {
  brain: BrainCircuit,
  cpu: Cpu,
  plane: Plane,
  layers: Layers,
} as const;

export const About: React.FC = () => (
  <section id="about" className="relative w-full py-24 sm:py-32 scroll-mt-16">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <SectionHeading eyebrow="About" title="Building where intelligence meets" accent="hardware" />

          <Reveal delay={0.1}>
            <div className="space-y-4 text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 font-light leading-[1.8] max-w-xl">
              <p>
                Final-year Computer Science Engineer at RNS Institute of Technology working across AI/ML, LLMs, IoT, robotics and full software-hardware stacks.
              </p>
              <p>
                A team-builder and mentor who leads R&amp;D projects, with internship experience at Samsung Innovation Campus and Pantech, and national-level hackathon wins.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2.5">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-display font-medium text-slate-700 dark:text-slate-200">
                <GraduationCap size={14} strokeWidth={1.6} className="text-accent-text" />
                B.E. Computer Science · RNSIT · 2027
              </span>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-display font-medium text-slate-700 dark:text-slate-200">
                <MapPin size={14} strokeWidth={1.6} className="text-accent-text" />
                Bengaluru, India
              </span>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {stats.map((st, i) => (
            <SpotlightCard key={st.label} delay={i * 0.08} className="p-6">
              <div className="flex items-baseline gap-0.5 font-display font-semibold text-3xl sm:text-[2rem] tracking-tight text-slate-900 dark:text-white">
                <CountUp to={st.value} decimals={st.decimals} prefix={"prefix" in st ? st.prefix : ""} />
                <span className="text-accent-text text-lg sm:text-xl font-semibold">{st.suffix}</span>
              </div>
              <div className="mt-2 text-[11px] font-display font-medium text-slate-500 dark:text-slate-400 leading-snug">
                {st.label}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Focus areas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {focusAreas.map((area, i) => {
          const Icon = icons[area.icon];
          return (
            <SpotlightCard key={area.title} delay={i * 0.08} className="p-6 flex flex-col gap-5">
              <div className="glass w-11 h-11 rounded-full flex items-center justify-center text-accent-text">
                <Icon size={19} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-semibold text-[15px] text-slate-900 dark:text-white">{area.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-[1.75]">
                  {area.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 dark:bg-white/5 ring-1 ring-slate-900/[0.06] dark:ring-white/10 text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </div>
  </section>
);
