import React, { useRef, useState } from "react";
import { Shield, Brain, Laptop, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Map mouse coordinates to rotate degree range [-10, 10]
    const rX = -(mouseY / height) * 12;
    const rY = (mouseX / width) * 12;
    setRotate({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.1s ease-out, box-shadow 0.2s ease-out",
      }}
      className="glass-card p-8 bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-850 flex flex-col justify-between h-[320px] select-none hover:shadow-xl hover:border-blue-600 dark:hover:border-sky-400 group"
    >
      <div className="space-y-4">
        {/* Icon wrapper */}
        <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-sky-400">
          {icon}
        </div>

        <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
          {description}
        </p>
      </div>

      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-sky-400 mt-4 cursor-pointer">
        Learn More
        <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
              Services
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
            Services <span className="text-blue-600 dark:text-sky-400">I Provide</span>
          </h2>
        </div>

        <a
          href="#projects"
          className="px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-slate-100 transition-colors"
        >
          View All Services
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={<Shield size={20} />}
          title="Cyber-Physical Security & IoT"
          description="Architecture reviews, risk auditing, and robust protocol development interfacing telemetry sensors with secure virtual networks. Specialist in ESP32/Arduino microcontroller security."
        />
        <ServiceCard
          icon={<Brain size={20} />}
          title="Deep Tech & ML Research"
          description="Volumetric network anomaly detection using state-of-the-art machine learning, computer vision analysis, and embedded edge computing implementations for resource-constrained systems."
        />
        <ServiceCard
          icon={<Laptop size={20} />}
          title="Venture Incubation & Software"
          description="End-to-end full-stack software development combined with hardware prototyping pipelines, establishing operational MoUs and launching robust campus-backed ventures."
        />
      </div>
    </section>
  );
};
