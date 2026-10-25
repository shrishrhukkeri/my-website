import React from "react";
import { techMarquee } from "../data/siteContent";

/** Infinite, edge-faded marquee of the core stack on a glass rail. Pauses on hover. */
export const TechStrip: React.FC = () => {
  const loop = [...techMarquee, ...techMarquee];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="marquee glass relative rounded-full py-4 overflow-hidden select-none"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
        aria-label="Core technologies"
      >
        <div className="marquee-track gap-10 pr-10">
          {loop.map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap text-[13px] font-display font-medium tracking-wide text-slate-600 dark:text-slate-300"
            >
              {tech}
              <span className="w-1 h-1 rounded-full bg-slate-400/70" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
