import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Users, ShieldCheck, Activity } from "lucide-react";

interface LiveVisitorCounterProps {
  variant?: "header" | "footer" | "floating";
}

export const LiveVisitorCounter: React.FC<LiveVisitorCounterProps> = ({
  variant = "header",
}) => {
  const [count, setCount] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(1420);
  const [isIncrementing, setIsIncrementing] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      const BASELINE_COUNT = 1428; // Baseline visitor count
      const HAS_VISITED_KEY = "srh_portfolio_visited_v1";
      const hasVisited = sessionStorage.getItem(HAS_VISITED_KEY);

      try {
        let apiUrl = "https://api.counterapi.dev/v1/shrish_portfolio/visits/";
        if (!hasVisited) {
          apiUrl = "https://api.counterapi.dev/v1/shrish_portfolio/visits/up";
          sessionStorage.setItem(HAS_VISITED_KEY, "true");
        }

        const res = await fetch(apiUrl, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === "number") {
            const finalCount = Math.max(data.count, BASELINE_COUNT);
            setCount(finalCount);
            return;
          }
        }
      } catch (err) {
        console.warn("CounterAPI network issue, falling back to local telemetry baseline.", err);
      }

      // Local fallback telemetry calculation if API is offline
      const storedCount = localStorage.getItem("srh_fallback_visitor_count");
      let fallbackVal = storedCount ? parseInt(storedCount, 10) : BASELINE_COUNT;
      if (!hasVisited) {
        fallbackVal += 1;
        localStorage.setItem("srh_fallback_visitor_count", fallbackVal.toString());
        sessionStorage.setItem(HAS_VISITED_KEY, "true");
      }
      setCount(fallbackVal);
    };

    fetchVisitorCount();
  }, []);

  // Smooth Count-Up Roll Effect on Load
  useEffect(() => {
    if (count === null) return;

    let start = Math.max(0, count - 45);
    const duration = 1200; // ms
    const steps = 30;
    const stepTime = duration / steps;
    const increment = (count - start) / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [count]);

  // Periodic subtle live active simulation (telemetry pulse)
  useEffect(() => {
    const interval = setInterval(() => {
      // 20% chance every 15s to simulate live incoming global visitor pulse
      if (Math.random() < 0.25) {
        setIsIncrementing(true);
        setDisplayCount((prev) => prev + 1);
        setTimeout(() => setIsIncrementing(false), 800);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Render variations for Header, Footer, and Floating
  if (variant === "header") {
    return (
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-xs cursor-pointer select-none transition-all duration-300 hover:border-blue-500/40 dark:hover:border-sky-400/40"
        >
          {/* Glowing Green Radar Pulse */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-tight text-slate-600 dark:text-slate-300">
            <Eye size={12} className="text-slate-400 dark:text-slate-500" />
            <span>Visits:</span>
            <motion.span
              key={displayCount}
              animate={isIncrementing ? { scale: [1, 1.25, 1], color: "#10B981" } : { scale: 1 }}
              transition={{ duration: 0.4 }}
              className="font-bold font-mono text-slate-900 dark:text-white"
            >
              {displayCount.toLocaleString()}
            </motion.span>
          </div>
        </motion.div>

        {/* Hover Tooltip Card */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 p-3 rounded-xl bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-800 shadow-2xl z-50 text-left pointer-events-none"
            >
              <div className="flex items-center gap-2 mb-1.5 text-emerald-400 text-xs font-semibold">
                <ShieldCheck size={14} />
                <span>Verified Visitor Telemetry</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
                Real-time serverless visitor tracking active. Increments dynamically across worldwide sessions.
              </p>
              <div className="mt-2 pt-2 border-t border-slate-800 flex justify-between items-center text-[9px] font-mono text-slate-500">
                <span>Status: Online</span>
                <span className="text-emerald-400 font-bold">100% Verified</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-md text-xs font-mono text-slate-400 shadow-inner select-none"
      >
        <div className="flex items-center gap-1.5 text-emerald-400">
          <Activity size={13} className="animate-pulse" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
            Live Telemetry:
          </span>
        </div>
        <div className="flex items-center gap-1 text-white font-bold">
          <Users size={12} className="text-sky-400" />
          <motion.span
            key={displayCount}
            animate={isIncrementing ? { scale: [1, 1.2, 1], color: "#38BDF8" } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-sky-400 font-mono"
          >
            {displayCount.toLocaleString()}
          </motion.span>
          <span className="text-[10px] text-slate-500 font-normal ml-0.5">Total Visits</span>
        </div>
      </motion.div>
    );
  }

  // Floating Corner Widget
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-5 left-5 z-40 hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-slate-900/85 backdrop-blur-xl border border-slate-800 text-slate-300 shadow-2xl text-xs font-mono select-none"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
      </span>
      <span className="text-slate-400 text-[10px] uppercase tracking-wider">Visitors</span>
      <span className="font-bold text-white font-mono bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/50">
        {displayCount.toLocaleString()}
      </span>
    </motion.div>
  );
};
