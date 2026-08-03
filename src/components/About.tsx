import React from "react";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-slate-950 text-slate-100 py-24 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-6 space-y-8 text-left">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
              About Me
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            Who is <span className="text-blue-600 dark:text-sky-400">Shrish Hukkeri?</span>
          </h2>
        </div>

        {/* Description Paragraph */}
        <div className="space-y-4 text-sm md:text-base text-slate-300 leading-relaxed font-light font-sans">
          <p>
            I’m a Computer Science and Engineering researcher and builder at RNSIT who genuinely loves understanding how things work—from physical sensors and embedded hardware to secure, resilient software systems. For me, engineering isn't just about writing code; it's about solving real-world problems with patience, discipline, and a craftsman's mindset.
          </p>
          <p>
            Whether I’m conducting research in cyber-physical security, mentoring peers as Class Representative, or building our campus incubator, <span className="text-white font-medium">Vizagon</span>, I bring a strong professional work ethic and deep dedication to every team I join. I believe in showing up prepared, working hard through tough technical challenges, and consistently delivering work that I’m proud of.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 py-6 border-y border-slate-900">
          <div>
            <div className="text-2xl md:text-3xl font-display font-black text-sky-400">
              600+
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1">
              Telemetry Sensors
            </div>
          </div>

          <div>
            <div className="text-2xl md:text-3xl font-display font-black text-sky-400">
              100+
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1">
              Certifications
            </div>
          </div>

          <div>
            <div className="text-2xl md:text-3xl font-display font-black text-sky-400">
              9.22
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mt-1">
              CGPA CSE (RNSIT)
            </div>
          </div>
        </div>

        {/* Action CTAs & Signature */}
        <div className="flex flex-wrap items-center justify-between gap-6 pt-4">
          {/* Signature styled element */}
          <div className="flex flex-col text-right pr-4">
            <span className="font-serif italic text-2xl text-sky-400 font-extralight select-none tracking-wide">
              Shrish Hukkeri
            </span>
            <span className="text-[9px] uppercase font-mono tracking-widest text-slate-600 mt-1">
              Digital Verification Signature
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
