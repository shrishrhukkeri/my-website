import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  org: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, org }) => {
  return (
    <div className="glass-card bg-white dark:bg-slate-800/40 p-8 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
      <div className="space-y-4 text-left">
        {/* Stars */}
        <div className="flex gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-light font-sans italic">
          "{quote}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/70 text-left">
        {/* Generates a nice colored text avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-blue-600/10 dark:bg-sky-400/10 flex items-center justify-center text-blue-600 dark:text-sky-400 font-bold text-xs">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-display font-bold text-xs text-slate-900 dark:text-white">
            {name}
          </h4>
          <span className="font-mono text-[9px] text-slate-500 font-medium">
            {role} • {org}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="w-full max-w-7xl mx-auto px-6 py-20 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Header */}
      <div className="space-y-3 mb-12 text-left">
        <div className="flex items-center gap-2">
          <div className="w-10 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold text-blue-600 dark:text-sky-400">
            Endorsements
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
          Mentors & Co-Founders <span className="text-blue-600 dark:text-sky-400">Feedback</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TestimonialCard
          quote="Shrish was selected as our first CSE department Research Assistant due to his unparalleled ability to synthesize core networking telemetry data and apply machine learning. He is an outstanding engineer."
          name="Dr. M.J. Sudhamani"
          role="Professor & Head of Research"
          org="RNSIT"
        />
        <TestimonialCard
          quote="Working with Shrish on our on-campus startup incubator Vizagon has been fantastic. He handles both the complex ESP32 firmware loops and React dashboard panels with absolute clarity."
          name="Vaishnavi"
          role="Co-Founder"
          org="Vizagon Incubator"
        />
        <TestimonialCard
          quote="His SAV4Secure safety automation was outstanding at SIH 2022. Shrish has a rare knack for analyzing physical hardware problems and formulating direct software solutions."
          name="Vamshi Ganesh B."
          role="SIH Co-Developer"
          org="RNSIT"
        />
      </div>
    </section>
  );
};
