import React from "react";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  billing: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  billing,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`rounded-3xl p-8 border flex flex-col justify-between select-none h-[420px] transition-all duration-300 ${
        isFeatured
          ? "bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-500 text-white shadow-xl shadow-blue-500/10 scale-105 relative z-10"
          : "bg-slate-900 border-slate-800 text-slate-100 hover:border-slate-700"
      }`}
    >
      <div className="space-y-6">
        {/* Tier */}
        <div className="space-y-2 text-left">
          <span className={`text-[10px] font-mono tracking-widest uppercase font-semibold ${isFeatured ? "text-sky-300" : "text-sky-400"}`}>
            {title}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-display font-black tracking-tight">
              {price}
            </span>
            <span className={`text-xs font-mono opacity-60`}>
              {billing}
            </span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3.5 text-xs text-left">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isFeatured ? "bg-white text-blue-600" : "bg-slate-800 text-sky-400"}`}>
                <Check size={12} />
              </span>
              <span className={isFeatured ? "text-blue-50" : "text-slate-300"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <a
        href="#contact"
        className={`w-full py-3 rounded-full text-xs font-semibold text-center uppercase tracking-wider block transition-colors ${
          isFeatured
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-slate-800 text-slate-100 hover:bg-slate-750"
        }`}
      >
        Select Package
      </a>
    </div>
  );
};

export const Pricing: React.FC = () => {
  return (
    <section
      id="pricing"
      className="w-full bg-slate-950 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-7xl mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-sky-450">
              Engagement Models
            </span>
            <div className="w-6 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            Consulting & <span className="text-sky-400">Collaboration Packages</span>
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 items-center">
          <PricingCard
            title="Hourly Advisory"
            price="₹4,000"
            billing="/ hour"
            features={[
              "IoT Cloud Architecture reviews",
              "Embedded firmware debugging (C++)",
              "Volumetric attack threat analysis",
              "On-demand consultations"
            ]}
          />
          <PricingCard
            title="Project MVPs"
            price="₹1,20,000"
            billing="/ project"
            features={[
              "Full IoT hardware prototype pipeline",
              "Secure React/TypeScript control panels",
              "Custom MQTT telemetry networks",
              "Operational handbook & testing documentation"
            ]}
            isFeatured={true}
          />
          <PricingCard
            title="Academic Research"
            price="Custom"
            billing=""
            features={[
              "Co-authored machine learning datasets",
              "Volumetric anomaly simulator configurations",
              "Paper drafting & proof-reading reviews",
              "Formal CDDT / on-campus sponsorship"
            ]}
          />
        </div>
      </div>
    </section>
  );
};
