import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send } from "lucide-react";
import { profileData } from "../data/profileData";

export const AcademicBlueprint: React.FC = () => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "SRH OS v1.0.0 (Type 'help' for available commands)",
    "Initializing secure contact terminal connection...",
    "Connection established. Ready."
  ]);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom of terminal history
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...terminalHistory, `> ${terminalInput}`];

    if (cmd === "help") {
      newHistory.push(
        "Available commands:",
        "  about        Display Shrish's brand vision",
        "  education    Show academic history at RNSIT & AECS",
        "  skills       List professional core skillset",
        "  projects     List core active engineering projects",
        "  contact <msg> Send a message directly (e.g. contact Let's collaborate!)",
        "  clear        Clear screen terminal output"
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
        newHistory.push(`- ${proj.title}: ${proj.summary} (${proj.impact})`);
      });
    } else if (cmd.startsWith("contact ")) {
      const msg = terminalInput.substring(8).trim();
      newHistory.push(
        `Saving message sequence: "${msg}"`,
        "Message received. Initiating telemetry contact sequence...",
        "Transmission successful. We will connect shortly."
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
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-16 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Academic Blueprint */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono text-xs text-brand-cyan uppercase tracking-widest flex items-center space-x-2">
            <span>04 // Academic Blueprint</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Academic Foundation
          </h2>

          <p className="text-sm md:text-base opacity-75 leading-relaxed">
            Shrish's academic trajectory at RNS Institute of Technology merges theoretical computing frameworks with rigorous laboratory drone development and embedded research guidance.
          </p>

          {/* Education Timeline */}
          <div className="space-y-6">
            {profileData.education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l border-gray-300 dark:border-gray-800">
                {/* Bullet */}
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-brand-cyan" />

                <div className="space-y-2">
                  <div className="flex flex-wrap justify-between items-start gap-1">
                    <h3 className="text-sm md:text-base font-bold tracking-tight">
                      {edu.degree}
                    </h3>
                    <span className="text-[10px] font-mono opacity-50">{edu.duration}</span>
                  </div>

                  <div className="text-xs opacity-75 font-mono">
                    {edu.institution}
                  </div>

                  <div className="text-xs font-semibold text-brand-cyan font-mono">
                    {edu.grade}
                  </div>

                  <ul className="list-none space-y-1 text-xs opacity-75">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-brand-cyan mr-1.5 font-mono">&rsaquo;</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Terminal & Skills Summary */}
        <div className="lg:col-span-7 space-y-8" id="contact">
          <div className="space-y-1">
            <h3 className="font-display font-semibold text-lg tracking-tight">
              Secure Contact Terminal
            </h3>
            <p className="text-xs opacity-60 font-mono">
              Query portfolio metrics or transmit messages directly using standard CLI arguments.
            </p>
          </div>

          {/* Terminal Screen Container */}
          <div className="w-full rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#0e0f12] text-slate-800 dark:text-gray-300 font-mono text-xs overflow-hidden shadow-xl">
            {/* Terminal Top Bar */}
            <div className="bg-slate-100 dark:bg-[#16171d] px-4 py-3 border-b border-slate-200 dark:border-gray-800/40 flex justify-between items-center">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[10px] opacity-50 dark:opacity-40 uppercase tracking-widest flex items-center gap-1.5">
                <Terminal size={10} />
                <span>bash // contact_term</span>
              </div>
            </div>

            {/* Terminal History */}
            <div className="p-4 h-64 overflow-y-auto space-y-2 leading-relaxed custom-scrollbar">
              {terminalHistory.map((line, i) => (
                <div key={i} className={line.startsWith("> ") ? "text-brand-cyan font-bold" : "opacity-90"}>
                  {line}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Form */}
            <form
              onSubmit={handleTerminalSubmit}
              className="flex border-t border-slate-200 dark:border-gray-800/40 bg-slate-50 dark:bg-[#0a0a0d] p-3 items-center"
            >
              <span className="text-brand-cyan font-bold mr-2 select-none">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help' or 'contact <msg>' here..."
                className="flex-grow bg-transparent border-none outline-none focus:ring-0 text-slate-900 dark:text-white font-mono text-xs placeholder-slate-400 dark:placeholder-gray-600"
              />
              <button
                type="submit"
                className="p-1 text-slate-600 dark:text-gray-400 hover:text-brand-cyan transition-colors"
                title="Send Command"
              >
                <Send size={14} />
              </button>
            </form>
          </div>

          {/* Social Links Footer block */}
          <div className="flex flex-wrap gap-6 pt-4 justify-between items-center border-t border-gray-200 dark:border-gray-800">
            <div className="text-[10px] font-mono tracking-widest uppercase opacity-55">
              // Professional Telemetry Channels
            </div>
            <div className="flex space-x-6 text-xs font-mono">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-cyan transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-cyan transition-colors"
              >
                GitHub
              </a>
              <a
                href={`mailto:${profileData.contact.email}`}
                className="hover:text-brand-cyan transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
