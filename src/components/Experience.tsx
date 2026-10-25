import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { MapPin } from "lucide-react";
import { timeline } from "../data/siteContent";
import { SectionHeading, SpotlightCard } from "./ui/motion";

export const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <SectionHeading eyebrow="Trajectory" title="Experience &" accent="leadership" />

        <div ref={ref} className="relative pl-8 sm:pl-12">
          {/* Track and scroll-drawn progress line */}
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[2px] bg-slate-200/80 dark:bg-slate-800" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-[2px] origin-top bg-gradient-to-b from-accent to-accent-2"
          />

          <div className="space-y-6">
            {timeline.map((role) => (
              <div key={role.title + role.period} className="relative">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 320, damping: 14 }}
                  className="absolute -left-[31px] sm:-left-[45px] top-7 flex w-4 h-4 sm:w-[22px] sm:h-[22px] items-center justify-center rounded-full glass"
                >
                  <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${role.current ? "bg-accent-2" : "bg-accent"}`} />
                </motion.span>

                <SpotlightCard delay={0.04} className="p-6 sm:p-7 space-y-3.5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4">
                    <div>
                      <h3 className="font-display font-semibold tracking-tight text-lg text-slate-900 dark:text-white">
                        {role.title}
                      </h3>
                      <span className="text-xs font-medium text-accent-text">
                        {role.org}
                      </span>
                    </div>
                    <div className="flex sm:flex-col sm:items-end items-center gap-x-3 gap-y-0.5 flex-wrap text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        {role.current && (
                          <span className="relative flex w-1.5 h-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-2 opacity-60 animate-ping" />
                            <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-accent-2" />
                          </span>
                        )}
                        {role.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={11} />
                        {role.place}
                      </span>
                    </div>
                  </div>

                  <p className="text-[13px] text-slate-600 dark:text-slate-300 font-light leading-[1.8]">
                    {role.summary}
                  </p>

                  <span className="inline-block text-[10.5px] font-medium px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 ring-1 ring-slate-900/[0.06] dark:ring-white/10 text-slate-700 dark:text-slate-200">
                    {role.highlight}
                  </span>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
