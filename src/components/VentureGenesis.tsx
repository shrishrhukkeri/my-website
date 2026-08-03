import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Award, FileText, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profileData";

export const VentureGenesis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll progress of the container for timeline line drawing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-gray-200 dark:border-gray-800"
    >
      {/* Sticky Left Column: Incubation MoU */}
      <div className="lg:col-span-5 lg:sticky lg:top-24 h-fit space-y-6">
        <div className="font-mono text-xs text-brand-cyan uppercase tracking-widest flex items-center space-x-2">
          <span>01 // Venture Genesis</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
          Vizagon Incubation
        </h2>

        <p className="text-sm md:text-base opacity-75 leading-relaxed">
          Founded by Shrish, along with Vaishnavi and Vamshi Ganesh B., Vizagon is a formal on-campus startup incubator designed to bridge the gap between physical-world telemetry sensors and secure virtual software networks.
        </p>

        {/* MoU Milestone Card */}
        <div className="glass-card p-6 border border-gray-200 dark:border-gray-800 space-y-4">
          <div className="flex items-center space-x-3 text-brand-cyan">
            <FileText size={20} />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              On-Campus MoU Agreement
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold opacity-90">Incubation MoU Signed</div>
            <div className="text-xs opacity-65 flex items-center space-x-1.5 font-mono">
              <Calendar size={12} />
              <span>March 11, 2026</span>
            </div>
            <p className="text-xs opacity-75 mt-2">
              Signed and backed formally by the RNS Institute of Technology to develop on-campus hardware and software telemetry systems.
            </p>
          </div>

          {/* Core Founding Team */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <div className="text-[10px] font-mono tracking-widest uppercase opacity-55 mb-2">
              Founding Team
            </div>
            <div className="flex flex-wrap gap-2">
              {["Shrish Rahul Hukkeri", "Vaishnavi", "Vamshi Ganesh B."].map((member, i) => (
                <span
                  key={i}
                  className="bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-gray-800 px-2 py-0.5 rounded text-[10px] font-mono tracking-wide"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Right Column: Timeline & Projects */}
      <div className="lg:col-span-7 relative space-y-16 pl-6 lg:pl-10">
        {/* Scroll-Linked SVG Path */}
        <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-gray-800">
          <motion.div
            style={{ scaleY: pathLength }}
            className="w-full h-full bg-brand-cyan origin-top"
          />
        </div>

        {/* Section: Professional Experience */}
        <div className="space-y-12">
          <div className="font-mono text-[10px] tracking-widest uppercase opacity-55">
            // Milestones & Roles
          </div>

          <div className="space-y-8">
            {profileData.experience.map((role, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[29px] lg:-left-[45px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-black border-2 border-gray-400 dark:border-gray-700 group-hover:border-brand-cyan transition-colors duration-300 z-10" />

                <div className="space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="text-base md:text-lg font-semibold tracking-tight">
                        {role.title}
                      </h3>
                      <div className="text-xs opacity-75 font-mono">
                        {role.organization} &bull; {role.location}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-gray-800 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {role.duration}
                    </span>
                  </div>

                  <ul className="list-none space-y-1.5 text-xs opacity-75 leading-relaxed">
                    {role.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-brand-cyan mr-2 font-mono">&rsaquo;</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {role.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-transparent border border-gray-200 dark:border-gray-800/80 px-2 py-0.5 rounded text-[9px] font-mono opacity-70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Technical Projects */}
        <div className="space-y-12 pt-8">
          <div className="font-mono text-[10px] tracking-widest uppercase opacity-55">
            // Core Engineering Projects
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.projects.map((project, idx) => (
              <div
                key={idx}
                className="glass-card p-6 flex flex-col justify-between border border-gray-200 dark:border-gray-800"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm md:text-base font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight size={14} className="opacity-40 hover:opacity-100 transition-opacity" />
                  </div>

                  <p className="text-xs opacity-75 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200/50 dark:bg-white/5 px-2 py-0.5 rounded text-[9px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center space-x-2 text-[10px] font-mono text-brand-cyan tracking-wide">
                  <Award size={12} />
                  <span>{project.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
