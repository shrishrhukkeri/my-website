import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldAlert, Zap, Cpu, HardDrive, BarChart3 } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { profileData, normalTelemetry, attackTelemetry } from "../data/profileData";

export const DeepTechHub: React.FC = () => {
  const [isAttacked, setIsAttacked] = useState(false);
  const [telemetry, setTelemetry] = useState(normalTelemetry);

  useEffect(() => {
    setTelemetry(isAttacked ? attackTelemetry : normalTelemetry);
  }, [isAttacked]);

  // Current metric highlights
  const currentMetrics = isAttacked
    ? { http: 1579, udp: 2450, syn: 1890, cpu: 99, mem: "4.2 KB" }
    : { http: 12, udp: 4, syn: 0, cpu: 12, mem: "45.0 KB" };

  return (
    <section
      id="research"
      className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-16 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side: Research Overview */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono text-xs text-brand-cyan uppercase tracking-widest flex items-center space-x-2">
            <span>02 // Research & Deep Tech Hub</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Cyber-Physical Defense
          </h2>

          <div className="text-xs font-semibold uppercase font-mono tracking-wider opacity-60">
            {profileData.research.domain}
          </div>

          <p className="text-sm md:text-base opacity-75 leading-relaxed">
            Shrish's research targets Machine Learning-based DDoS Anomaly Detection in resource-constrained Internet of Medical Things (IoMT) edge devices. By simulating volumetric attacks, he mapped telemetry indicators to detect early threat signatures before node depletion.
          </p>

          {/* Dataset details */}
          <div className="glass-card p-6 border border-gray-200 dark:border-gray-800 space-y-4">
            <div className="flex items-center space-x-3 text-brand-cyan">
              <BarChart3 size={18} />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                Kaggle Dataset
              </span>
            </div>

            <div className="space-y-2 text-xs opacity-75">
              <div>
                <span className="font-mono font-semibold">Name:</span> {profileData.research.datasetName}
              </div>
              <p className="leading-relaxed">
                {profileData.research.description}
              </p>

              <div className="pt-2">
                <span className="font-mono font-semibold block mb-1">Tracked Telemetry Metrics:</span>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.research.variables.map((v, i) => (
                    <span
                      key={i}
                      className="bg-gray-200/50 dark:bg-white/5 px-2 py-0.5 rounded text-[9px] font-mono"
                    >
                      {v.split(" ")[0]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: ESP32 DDoS Telemetry Simulator */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-lg tracking-tight">
                ESP32 Node Live Telemetry Simulator
              </h3>
              <div className="text-xs opacity-60 font-mono">
                Models live micro-controller network behavior under load.
              </div>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setIsAttacked(!isAttacked)}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2 border ${
                isAttacked
                  ? "bg-brand-red border-brand-red text-white hover:bg-brand-red/90"
                  : "bg-brand-cyan border-brand-cyan text-white dark:text-black hover:bg-brand-cyan/90"
              }`}
            >
              {isAttacked ? <ShieldAlert size={14} /> : <Shield size={14} />}
              {isAttacked ? "Reset Node state" : "Simulate DDoS Attack"}
            </button>
          </div>

          {/* Simulator Console / Panel */}
          <div
            className={`glass-card p-6 border-2 transition-colors duration-500 overflow-hidden relative ${
              isAttacked ? "border-brand-red/40" : "border-brand-cyan/40"
            }`}
          >
            {/* Flashing Warning Banner */}
            <AnimatePresence>
              {isAttacked && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-brand-red/10 border-b border-brand-red/30 -mx-6 -mt-6 mb-6 px-6 py-2.5 flex items-center justify-between text-brand-red font-mono text-[10px] uppercase tracking-wider animate-pulse"
                >
                  <div className="flex items-center gap-2">
                    <ShieldAlert size={12} />
                    <span>WARNING: VOLUMETRIC DDOS ATTACK SIMULATED (HTTP/UDP/SYN FLOOD)</span>
                  </div>
                  <span className="font-bold">CRITICAL</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Real-time Metric Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
              {[
                { label: "HTTP RPS", val: currentMetrics.http, unit: "req/s", icon: Zap },
                { label: "UDP RPS", val: currentMetrics.udp, unit: "req/s", icon: Zap },
                { label: "SYN RPS", val: currentMetrics.syn, unit: "req/s", icon: Zap },
                { label: "CPU Load", val: currentMetrics.cpu, unit: "%", icon: Cpu },
                { label: "Free Mem", val: currentMetrics.mem, unit: "", icon: HardDrive },
              ].map((metric, i) => (
                <div
                  key={i}
                  className="bg-gray-200/40 dark:bg-black/20 border border-gray-300/50 dark:border-gray-800/80 p-3 rounded-lg flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between opacity-60 mb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wide">
                      {metric.label}
                    </span>
                    <metric.icon size={12} />
                  </div>
                  <div>
                    <span className="text-base font-bold font-mono tracking-tight">
                      {metric.val}
                    </span>
                    <span className="text-[9px] font-mono opacity-50 ml-1">
                      {metric.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="w-full h-64 font-mono text-[10px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={telemetry} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.4} />
                  <XAxis dataKey="time" stroke="var(--text-muted)" fontSize={10} opacity={0.8} />
                  <YAxis stroke="var(--text-muted)" fontSize={10} opacity={0.8} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card)",
                      borderColor: "var(--border)",
                      borderRadius: "8px",
                      color: "var(--text)",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="http_rps"
                    name="HTTP RPS"
                    stroke={isAttacked ? "var(--brand-red)" : "var(--brand-cyan)"}
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="udp_rps"
                    name="UDP RPS"
                    stroke="#a855f7"
                    strokeWidth={1.5}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="syn_rps"
                    name="SYN RPS"
                    stroke="#3b82f6"
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
