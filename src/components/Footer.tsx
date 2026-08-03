import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Send, Mail, ArrowRight } from "lucide-react";
import { profileData } from "../data/profileData";
import { Ticker } from "./Ticker";

export const Footer: React.FC = () => {
  // Terminal state & logic
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "SRH OS v1.0.2 (Type 'help' for available commands)",
    "Initializing secure contact terminal connection...",
    "Telemetry link active. Ready."
  ]);
  const historyContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (historyContainerRef.current) {
      historyContainerRef.current.scrollTop = historyContainerRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, `> ${terminalInput}`];

    if (cmd === "help") {
      newHistory.push(
        "Available commands:",
        "  about        Display Shrish's brand vision statement",
        "  education    Show academic history (RNSIT & AECS)",
        "  skills       List professional core skill subsets",
        "  projects     List core active engineering projects",
        "  contact <msg> Send a message directly (e.g. contact Let's collaborate!)",
        "  clear        Clear screen terminal output history"
      );
    } else if (cmd === "about") {
      newHistory.push(`"${profileData.aboutText}"`);
    } else if (cmd === "education") {
      profileData.education.forEach((edu) => {
        newHistory.push(
          `Institution: ${edu.institution}`,
          `Degree: ${edu.degree}`,
          `Grade: ${edu.grade}`,
          `Duration: ${edu.duration}`,
          `---`
        );
      });
    } else if (cmd === "skills") {
      profileData.skills.forEach((cat) => {
        newHistory.push(`[${cat.category}]: ${cat.items.join(", ")}`);
      });
    } else if (cmd === "projects") {
      profileData.projects.forEach((proj) => {
        newHistory.push(`- ${proj.title}: ${proj.summary} (Impact: ${proj.impact})`);
      });
    } else if (cmd.startsWith("contact ")) {
      const msg = terminalInput.substring(8).trim();
      newHistory.push(
        `Saving message sequence: "${msg}"`,
        "Message received. Initiating telemetry contact sequence...",
        "Transmission successful. Shrish will connect with you shortly."
      );
    } else if (cmd === "clear") {
      setTerminalHistory(["Terminal cleared. Type 'help' for commands."]);
      setTerminalInput("");
      return;
    } else {
      newHistory.push(`Command not recognized: '${cmd}'. Type 'help' for options.`);
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  return (
    <footer className="w-full bg-slate-950 text-slate-100 transition-colors duration-300 border-t border-slate-900 overflow-hidden">
      {/* 1. Scrolling Marquee Header */}
      <Ticker
        items={[
          "Securing Edge Systems",
          "IoT Cloud Telemetry",
          "AI & Deep Tech Research",
          "Autonomous Drones (CDDT)",
          "Venture Building (Vizagon)"
        ]}
        bgClass="bg-blue-600 dark:bg-blue-700"
        textClass="text-white"
      />

      {/* 2. Main content area (Terminal + Columns) */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Terminal Widget */}
        <div className="lg:col-span-6 space-y-4 text-left" id="contact">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-lg text-white">
              Secure Contact Terminal
            </h4>
            <p className="text-xs text-slate-500 font-mono">
              Query portfolio metrics or transmit messages directly using standard CLI arguments.
            </p>
          </div>

          {/* Terminal Screen Container */}
          <div className="w-full rounded-2xl border border-slate-900 bg-slate-900/60 text-slate-350 font-mono text-xs overflow-hidden shadow-2xl">
            {/* Top bar */}
            <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex justify-between items-center select-none">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[10px] opacity-40 uppercase tracking-widest flex items-center gap-1.5 text-slate-400">
                <TerminalIcon size={10} />
                <span>bash // srh_terminal</span>
              </div>
            </div>

            {/* Terminal History */}
            <div
              ref={historyContainerRef}
              className="p-4 h-56 overflow-y-auto space-y-2 leading-relaxed custom-scrollbar text-left"
            >
              {terminalHistory.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.startsWith("> ")
                      ? "text-sky-400 font-bold"
                      : line.startsWith("Saving") || line.startsWith("Transmission")
                      ? "text-emerald-450 font-semibold"
                      : "opacity-80"
                  }
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal Form Input */}
            <form
              onSubmit={handleTerminalSubmit}
              className="flex border-t border-slate-800 bg-slate-900/40 p-3 items-center"
            >
              <span className="text-sky-450 font-bold mr-2 select-none">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help' or 'contact <msg>' here..."
                className="flex-grow bg-transparent border-none outline-none focus:ring-0 text-white font-mono text-xs placeholder-slate-700"
              />
              <button
                type="submit"
                className="p-1 text-slate-500 hover:text-sky-400 transition-colors cursor-pointer"
                title="Execute Command"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Right: Columns */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Logo & Description */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-1">
              <span className="font-display font-black text-xl text-white tracking-tight">
                Shrish
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
              Securing Edge Systems. Building Autonomous Ventures on-campus and beyond.
            </p>
            {/* Social channels */}
            <div className="flex space-x-3 pt-2">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-slate-900 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-colors"
                title="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-slate-900 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-colors"
                title="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="w-8 h-8 rounded-full border border-slate-900 bg-slate-900 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-400/40 transition-colors"
                title="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Navigation
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#hero" className="text-slate-400 hover:text-sky-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">About</a></li>
              <li><a href="#tools" className="text-slate-400 hover:text-sky-400 transition-colors">Tools</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-sky-400 transition-colors">Projects</a></li>
              <li><a href="#timeline" className="text-slate-400 hover:text-sky-400 transition-colors">Experience</a></li>
            </ul>
          </div>

          {/* Contacts & Newsletter */}
          <div className="space-y-4">
            <h5 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 font-bold">
              Contact Details
            </h5>
            <div className="space-y-3 text-xs text-slate-400">
              <p>shrishrahulhukkeri@gmail.com</p>
              <p>RNSIT Campus, Bangalore, India</p>
              
              {/* Newsletter Field */}
              <div className="pt-2">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Newsletter"
                    className="w-full bg-slate-900 border border-slate-800 text-white rounded-full py-2 pl-4 pr-10 outline-none text-xs"
                  />
                  <button className="absolute right-1 top-1 w-7 h-7 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center cursor-pointer">
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright bottom */}
      <div className="w-full py-8 border-t border-slate-900 text-center text-[9px] font-mono tracking-widest text-slate-650 opacity-60">
        &copy; {new Date().getFullYear()} SHRISH RAHUL HUKKERI. SECURE CYBER-PHYSICAL TELEMETRY SYSTEMS.
      </div>
    </footer>
  );
};
