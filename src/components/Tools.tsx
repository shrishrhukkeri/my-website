import React from "react";
import { Code2, Terminal, Cpu, Database, Blocks, Server } from "lucide-react";

interface ToolCardProps {
  icon: React.ReactNode;
  name: string;
  percentage: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, name, percentage }) => {
  const radius = 30;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="glass-card bg-white dark:bg-slate-800/40 p-6 flex flex-col items-center text-center justify-between border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-blue-600 dark:hover:border-sky-400 group transition-all duration-300">
      {/* Circle Progress */}
      <div className="relative w-20 h-20 flex items-center justify-center mb-4">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            stroke="var(--border)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={40}
            cy={40}
          />
          {/* Progress circle */}
          <circle
            className="transition-all duration-1000 ease-out"
            stroke="currentColor"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={40}
            cy={40}
          />
        </svg>

        {/* Center Icon */}
        <div className="absolute text-blue-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>

      <div className="space-y-1">
        <span className="font-display font-bold text-sm text-slate-900 dark:text-white block">
          {name}
        </span>
        <span className="font-mono text-xs text-slate-500 font-medium">
          {percentage}% Proficiency
        </span>
      </div>
    </div>
  );
};

export const Tools: React.FC = () => {
  return (
    <section
      id="tools"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Header */}
      <div className="space-y-3 mb-12 text-left">
        <div className="flex items-center gap-2">
          <div className="w-10 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
            Skills & Stack
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          Exploring the Tools <span className="text-blue-600 dark:text-sky-400">Behind My Work</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <ToolCard
          icon={<Blocks size={20} />}
          name="React & TS"
          percentage={95}
        />
        <ToolCard
          icon={<Terminal size={20} />}
          name="Python (ML)"
          percentage={90}
        />
        <ToolCard
          icon={<Code2 size={20} />}
          name="C / C++ (IoT)"
          percentage={92}
        />
        <ToolCard
          icon={<Cpu size={20} />}
          name="ESP32 / Arduino"
          percentage={88}
        />
        <ToolCard
          icon={<Server size={20} />}
          name="Docker & Cloud"
          percentage={85}
        />
        <ToolCard
          icon={<Database size={20} />}
          name="SQL Databases"
          percentage={91}
        />
      </div>
    </section>
  );
};
