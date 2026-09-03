import React from "react";
import { Monitor, Cpu, Rocket } from "lucide-react";

export const About: React.FC = () => {
  const serviceNodes = [
    {
      icon: <Monitor size={22} className="text-slate-700 dark:text-slate-200" />,
      title: "Cyber-Physical & IoMT Security",
      desc: "ML-based anomaly detection benchmarks on constrained edge hardware.",
    },
    {
      icon: <Cpu size={22} className="text-slate-700 dark:text-slate-200" />,
      title: "Embedded IoT & Autonomous Systems",
      desc: "Microcontrollers, sensor telemetry, and aerial drone development (CDDT).",
    },
    {
      icon: <Rocket size={22} className="text-slate-700 dark:text-slate-200" />,
      title: "Venture Architecture & Incubation",
      desc: "Founding Vizagon, an on-campus technology venture incubator at RNSIT.",
    },
  ];

  const stats = [
    { value: "9.22", symbol: "+", label: "CGPA (CSE RNSIT)" },
    { value: "1st", symbol: "Place", label: "SIH 2022 Winner" },
    { value: "100", symbol: "+", label: "Verified Certifications" },
  ];

  return (
    <section
      id="about"
      className="w-full py-20 sm:py-28 bg-white dark:bg-[#0b111e] transition-colors duration-300 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Vertical Connected Timeline with 3 Services */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative pl-6 space-y-8 text-left">
              
              {/* Vertical connecting line */}
              <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-slate-200 dark:bg-slate-800" />

              {serviceNodes.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-4 group">
                  {/* Peacock Green & Flame Blue node indicator dot */}
                  <div className="absolute -left-[23px] top-2 w-3.5 h-3.5 rounded-full bg-[#00a884] dark:bg-[#00cba0] ring-4 ring-white dark:ring-[#0b111e] shadow-xs" />

                  {/* Service Card Content */}
                  <div className="flex items-center gap-3.5 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors w-full">
                    <div className="w-11 h-11 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Right Column: "About me" narrative + 3 Big Highlight Stats */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              About me
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              <p>
                I started my engineering journey from physical computing and hands-on circuits. Through that, I learned to love the process of building systems from scratch. Since then, this has led me to cyber-physical security, machine learning telemetry research, and venture building at RNSIT.
              </p>
              <p>
                As the 1st Department Research Assistant in CSE at RNSIT and IoT Fellow at Samsung Innovation Campus, I design architectures that make edge hardware and autonomous systems secure, resilient, and ready for production deployment.
              </p>
            </div>

            {/* 3 Stats Row with Flame Blue & Peacock Green accents */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800/80">
              {stats.map((st, i) => (
                <div key={i} className="space-y-1 text-left">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 dark:text-white">
                      {st.value}
                    </span>
                    <span className="text-xl sm:text-2xl font-display font-extrabold text-[#0066ff] dark:text-[#00cba0]">
                      {st.symbol}
                    </span>
                  </div>
                  <div className="text-xs font-display font-medium text-slate-500 dark:text-slate-400 leading-tight">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
