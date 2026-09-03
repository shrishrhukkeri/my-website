import React, { useState } from "react";
import { Mail, Download, Check, Copy, ArrowUp, ExternalLink } from "lucide-react";
import { profileData } from "../data/profileData";

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="w-full bg-slate-900 text-slate-100 dark:bg-[#0b0f16] border-t border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 text-left">
        
        {/* Contact Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Get in Touch
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Available for cybersecurity research, edge telemetry engineering, and venture dialogues.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-[#f2583e] transition-colors cursor-pointer"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Buttons Row (Download CV, LinkedIn, GitHub, Email Copier) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Download CV */}
          <a
            href={profileData.contact.resumeUrl}
            download="Shrish_Rahul_Hukkeri_Resume.pdf"
            className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-[#0066ff] flex items-center justify-between group transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-[#0066ff] to-[#00a884] text-white flex items-center justify-center">
                <Download size={16} />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Curriculum Vitae</span>
                <span className="text-sm font-display font-bold text-white group-hover:text-[#0066ff] transition-colors">
                  Download CV (PDF)
                </span>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={profileData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-[#0066ff] flex items-center justify-between group transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0066ff] text-white flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Professional Network</span>
                <span className="text-sm font-display font-bold text-white group-hover:text-[#0066ff] transition-colors">
                  LinkedIn Profile
                </span>
              </div>
            </div>
            <ExternalLink size={14} className="text-slate-400" />
          </a>

          {/* GitHub */}
          <a
            href={profileData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-[#00a884] flex items-center justify-between group transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#00a884] text-white flex items-center justify-center">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block">Repositories & Code</span>
                <span className="text-sm font-display font-bold text-white group-hover:text-[#00a884] transition-colors">
                  GitHub Profile
                </span>
              </div>
            </div>
            <ExternalLink size={14} className="text-slate-400" />
          </a>

          {/* Email Copier */}
          <button
            onClick={handleCopyEmail}
            className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-[#0066ff] flex items-center justify-between group transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-3 truncate">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div className="truncate">
                <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                <span className="text-xs sm:text-sm font-display font-bold text-white truncate block group-hover:text-[#0066ff]">
                  {copied ? "Copied!" : profileData.contact.email}
                </span>
              </div>
            </div>
            {copied ? <Check size={16} className="text-emerald-400 shrink-0" /> : <Copy size={14} className="text-slate-400 shrink-0" />}
          </button>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-6 border-t border-slate-800 text-center text-xs font-mono text-slate-500">
          &copy; {new Date().getFullYear()} SHRISH HUKKERI. INNOVATING AT THE EDGE OF POSSIBILITY.
        </div>

      </div>
    </footer>
  );
};
