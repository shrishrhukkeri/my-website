import React from "react";
import { motion } from "framer-motion";
import { Award, Plane, ShieldCheck } from "lucide-react";

export const LegacyEngineering: React.FC = () => {
  // SVG drawing configuration
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.35,
      transition: { duration: 2, ease: "easeInOut" as const },
    },
  };


  return (
    <section
      id="achievements"
      className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-16 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Fixed-Wing Vector Schematic */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="w-full max-w-md aspect-square relative border border-gray-300/40 dark:border-gray-800/40 rounded-xl bg-gray-200/20 dark:bg-black/10 flex items-center justify-center p-6 overflow-hidden">
            {/* Aerospace Fixed-Wing SVG Path Drawing */}
            <motion.svg
              viewBox="0 0 400 400"
              fill="none"
              className="w-full h-full stroke-current text-brand-cyan"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Airplane Nose & Fuselage */}
              <motion.path
                d="M 200,40 L 200,360"
                strokeWidth="1.5"
                variants={pathVariants}
              />
              {/* Cockpit Canopy */}
              <motion.ellipse
                cx="200"
                cy="110"
                rx="6"
                ry="22"
                strokeWidth="1"
                variants={pathVariants}
              />
              {/* Wings */}
              <motion.path
                d="M 40,160 L 360,160"
                strokeWidth="2"
                variants={pathVariants}
              />
              <motion.path
                d="M 40,160 L 120,220 L 200,220"
                strokeWidth="1"
                variants={pathVariants}
              />
              <motion.path
                d="M 360,160 L 280,220 L 200,220"
                strokeWidth="1"
                variants={pathVariants}
              />
              {/* Tail Horizontal Stabilizer */}
              <motion.path
                d="M 120,330 L 280,330"
                strokeWidth="1.5"
                variants={pathVariants}
              />
              <motion.path
                d="M 120,330 L 200,350 L 280,330"
                strokeWidth="1"
                variants={pathVariants}
              />
              {/* Reference Grid Circle */}
              <motion.circle
                cx="200"
                cy="200"
                r="150"
                strokeWidth="0.5"
                strokeDasharray="4,4"
                variants={pathVariants}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="80"
                strokeWidth="0.5"
                strokeDasharray="2,2"
                variants={pathVariants}
              />
              {/* Measurement Crosshairs */}
              <motion.path
                d="M 200,10 L 200,20 M 200,380 L 200,390 M 10,200 L 20 M 380,200 L 390"
                strokeWidth="1"
                variants={pathVariants}
              />
            </motion.svg>
            <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest opacity-40">
              Boeing Fixed-Wing Schematic // Ref-0925
            </div>
          </div>
        </div>

        {/* Right Column: Aerospace & SIH Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="font-mono text-xs text-brand-cyan uppercase tracking-widest flex items-center space-x-2">
            <span>03 // Legacy & Physical Engineering</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Aerospace & Smart Automation
          </h2>

          <p className="text-sm md:text-base opacity-75 leading-relaxed">
            Applying the rigorous precision of fixed-wing piloting to active hardware automations. Shrish's hands-on engineering spans zonal drone development, fixed-wing aerodynamics, and hardware safety systems that protect lives.
          </p>

          <div className="space-y-4">
            {/* Boeing Zonal Accomplishment */}
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-lg bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-gray-800 text-brand-cyan shrink-0">
                <Plane size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold tracking-tight">
                  Boeing Fixed-Wing & Aeromodelling
                </h4>
                <p className="text-xs opacity-75 leading-relaxed">
                  Qualified for the Boeing Zonal-Level Fixed Wing Piloting competition. Finished in the Top 20 Teams at the Boeing Aeromodelling Workshop at KIIT TBI. Serves as an active member of the Center for Drone Development Technologies (CDDT) at RNSIT and the ZepcoTech drone development team.
                </p>
              </div>
            </div>

            {/* SAV4Secure Automation */}
            <div className="flex gap-4 items-start">
              <div className="p-2.5 rounded-lg bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-gray-800 text-brand-cyan shrink-0">
                <ShieldCheck size={18} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold tracking-tight">
                  SAV4Secure Child Safety Automation (SIH 2022)
                </h4>
                <p className="text-xs opacity-75 leading-relaxed">
                  Engineered an automation loop using fluid sensors to detect and isolate hazard triggers for children. Awarded First Place in the Smart Automation Category at the national Smart India Hackathon (SIH 2022).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Key Achievements */}
      <div className="space-y-8 pt-8">
        <div className="font-mono text-[10px] tracking-widest uppercase opacity-55 text-center">
          // Elite Achievements & Certifications
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Smart India Hackathon Winner",
              sub: "Smart Automation (₹25,000)",
              desc: "1st Place national win for SAV4Secure child safety automation framework.",
            },
            {
              title: "100+ Professional Certifications",
              sub: "Infosys, Coursera, Cisco, IBM",
              desc: "Recognised as the top performer with the highest count of certificates in the CSE department.",
            },
            {
              title: "Double PROP Winner",
              sub: "Project Open House (2024, 2025)",
              desc: "Consecutive first-place award winner at the annual RNSIT engineering showcase.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 border border-gray-200 dark:border-gray-800 space-y-3"
            >
              <div className="flex items-center space-x-2 text-brand-cyan">
                <Award size={16} />
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold">
                  {item.sub}
                </span>
              </div>
              <h4 className="text-sm font-bold tracking-tight">{item.title}</h4>
              <p className="text-xs opacity-75 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
