import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  category: string;
  date: string;
  title: string;
  summary: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, date, title, summary, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/10 hover:border-blue-600 dark:hover:border-sky-400 p-6 space-y-4 hover:shadow-lg transition-all duration-300 text-left"
    >
      {/* Card Image placeholder container */}
      <div className="w-full h-40 rounded-xl bg-gradient-to-br from-blue-600/5 to-sky-400/5 dark:from-slate-800/40 dark:to-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 flex items-end p-4 relative overflow-hidden">
        {/* Category Badge */}
        <span className="bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-sky-400 px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider relative z-10">
          {category}
        </span>
      </div>

      <div className="space-y-2">
        <span className="font-mono text-[10px] text-slate-500 block">
          {date}
        </span>

        <div className="flex justify-between items-start gap-4">
          <h3 className="font-display font-bold text-sm md:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
            {title}
          </h3>
          <ArrowUpRight
            size={16}
            className="text-slate-400 group-hover:text-blue-600 dark:group-hover:text-sky-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
          />
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light line-clamp-2">
          {summary}
        </p>
      </div>
    </a>
  );
};

export const Blogs: React.FC = () => {
  return (
    <section
      id="blogs"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Header */}
      <div className="space-y-3 mb-12 text-left">
        <div className="flex items-center gap-2">
          <div className="w-10 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
            News & Releases
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          Publications & <span className="text-blue-600 dark:text-sky-400">Public Releases</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BlogCard
          category="Kaggle Dataset"
          date="April 10, 2026"
          title="ESP32 IoMT DDoS Anomalies Telemetry Dataset"
          summary="Released a custom volumetric DDoS dataset tracking normal vs attack telemetry metrics (http_rps, udp_rps, CPU load, memory free) for low-resource hardware nodes."
          link="https://www.kaggle.com/datasets"
        />
        <BlogCard
          category="Press Release"
          date="September 15, 2022"
          title="Smart India Hackathon 2022 Winner SAV4Secure"
          summary="Coverage of RNSIT/AECS school winning first place nationally in the Smart Automation Category, presenting a child hazard isolation system loop."
          link="https://www.rnsit.ac.in"
        />
        <BlogCard
          category="Aerodynamics"
          date="January 28, 2025"
          title="Boeing Fixed-Wing Zonal Finalists"
          summary="Overview of workshop and piloting competition qualification details at KIIT TBI. Placing in the Top 20 teams out of zonal entrants."
          link="https://www.boeing.co.in"
        />
      </div>
    </section>
  );
};
