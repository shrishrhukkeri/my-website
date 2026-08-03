import React from "react";

interface TickerProps {
  items: string[];
  bgClass?: string;
  textClass?: string;
}

export const Ticker: React.FC<TickerProps> = ({
  items,
  bgClass = "bg-blue-600 dark:bg-blue-700",
  textClass = "text-white",
}) => {
  // Duplicate items array a few times to ensure it covers the screen width for seamless looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`w-full py-4 overflow-hidden border-y border-slate-200/20 dark:border-slate-800/20 ${bgClass} select-none`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className={`flex items-center mx-6 font-display font-bold text-sm md:text-base tracking-wider uppercase ${textClass}`}>
            <span>{item}</span>
            <span className="ml-12 text-sky-300">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
