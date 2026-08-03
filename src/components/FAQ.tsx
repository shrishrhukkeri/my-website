import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Vizagon and what does it build?",
    answer: "Vizagon is an on-campus startup incubator founded by Shrish, Vaishnavi, and Vamshi Ganesh B., backed by RNSIT. It focuses on developing integrated hardware sensors and secure software telemetry networks.",
  },
  {
    question: "How does the ESP32 Live Telemetry Simulator work?",
    answer: "It simulates active resource consumption on a microcontroller node under normal operating conditions vs volumetric DDoS attacks. Toggling the simulator updates telemetry indicators like CPU load, memory, and packet requests (HTTP, UDP, SYN) which feeds into ML detection algorithms.",
  },
  {
    question: "What hardware platforms do you work with?",
    answer: "Mainly ESP32, Arduino, ESP8266 microcontrollers, various analog/digital sensors (temperature, fluids, collision detection), and fixed-wing drone assemblies using custom telemetry transmitters.",
  },
  {
    question: "Are you open to academic and research collaborations?",
    answer: "Yes, absolutely! I specialize in ML anomaly detection, Internet of Medical Things (IoMT) systems security, computer vision, and LiFi configurations. Reach out to collaborate on datasets or research papers.",
  },
];

export const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="w-full bg-slate-950 text-slate-100 py-24 transition-colors duration-300"
    >
      <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-3 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-sky-405">
              Knowledge Base
            </span>
            <div className="w-6 h-[1.5px] bg-blue-600 dark:bg-sky-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            Frequently Asked <span className="text-sky-400">Questions</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => toggleExpand(idx)}
                className={`rounded-2xl border cursor-pointer overflow-hidden transition-all duration-300 text-left ${
                  isExpanded
                    ? "bg-gradient-to-br from-blue-600 to-indigo-700 border-blue-500 shadow-lg text-white"
                    : "bg-slate-900 border-slate-800 text-slate-100 hover:border-slate-750"
                }`}
              >
                {/* Header Row */}
                <div className="p-6 flex justify-between items-center gap-4 select-none">
                  <h3 className="font-display font-bold text-sm md:text-base">
                    {item.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isExpanded ? "bg-white text-blue-600" : "bg-slate-800 text-slate-400"}`}>
                    {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </div>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-350 ease-in-out ${
                    isExpanded ? "max-h-40 border-t border-white/10" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-xs md:text-sm leading-relaxed opacity-90 font-light">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
