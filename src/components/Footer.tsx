import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, Check, Copy, ArrowUp, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profileData";
import { Magnetic, Reveal, RevealText, ease } from "./ui/motion";

const LinkedInIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="relative w-full scroll-mt-16 pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Call-to-action panel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="relative overflow-hidden rounded-[40px] glass-flat px-6 py-14 sm:px-14 sm:py-20 text-center"
        >
          <div className="absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full pointer-events-none bg-[radial-gradient(closest-side,var(--glow-a),transparent)]" />
          <div className="absolute -bottom-36 -right-24 w-[30rem] h-[30rem] rounded-full pointer-events-none bg-[radial-gradient(closest-side,var(--glow-b),transparent)]" />

          <div className="relative space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-[2.5px] bg-gradient-to-r from-accent to-accent-2" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-accent-text">
                Contact
              </span>
              <div className="w-10 h-[2.5px] bg-gradient-to-r from-accent-2 to-accent" />
            </div>

            <h2 className="text-3xl sm:text-[3.1rem] font-display font-bold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              <RevealText text="Let's build at the" />
              <br />
              <RevealText text="edge of possibility" wordClassName="text-gradient" delay={0.2} />
            </h2>

            <Reveal delay={0.2}>
              <p className="max-w-lg mx-auto text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 font-light leading-[1.8]">
                Open to research collaborations, AI and IoT engineering roles, and ambitious hardware-software projects.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="flex flex-wrap items-center justify-center gap-5 pt-2">
              <Magnetic>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-display font-medium text-[13px] bg-gradient-to-r from-accent to-accent-2 text-on-accent shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_14px_28px_-14px_var(--accent-shadow)] hover:brightness-110 transition-[filter] duration-300 cursor-pointer"
                >
                  <Mail size={16} strokeWidth={1.7} />
                  <span>{copied ? "Email copied!" : profileData.contact.email}</span>
                  {copied ? <Check size={15} /> : <Copy size={14} className="opacity-80" />}
                </button>
              </Magnetic>

              <Magnetic>
                <a
                  href={profileData.contact.resumeUrl}
                  download="Shrish_Rahul_Hukkeri_CV.pdf"
                  className="glass inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-display font-medium text-[13px] text-slate-800 dark:text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Download size={15} strokeWidth={1.7} />
                  Download CV
                </a>
              </Magnetic>
            </Reveal>

            <Reveal delay={0.4} className="flex items-center justify-center gap-5 pt-2">
              {[
                { href: profileData.contact.linkedin, label: "LinkedIn", icon: <LinkedInIcon />, hover: "hover:text-accent-text" },
                { href: profileData.contact.github, label: "GitHub", icon: <GitHubIcon />, hover: "hover:text-accent-2-text" },
              ].map((l) => (
                <Magnetic key={l.label} strength={0.12}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-medium text-slate-600 dark:text-slate-300 transition-colors ${l.hover}`}
                  >
                    {l.icon}
                    {l.label}
                    <ArrowUpRight size={12} />
                  </a>
                </Magnetic>
              ))}
            </Reveal>
          </div>
        </motion.div>

        {/* Sign-off */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
          <div className="flex items-center gap-4">
            <img src="/signature.png" alt="SRH signature" className="sig-img h-12 w-auto dark:invert opacity-90" />
            {/* Gold edition: the signature drawn in gold via a mask */}
            <span role="img" aria-label="SRH signature" className="sig-gold" />
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              &copy; {new Date().getFullYear()} Shrish Rahul Hukkeri
              <br />
              Innovating at the edge of possibility.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-display font-medium text-slate-700 dark:text-slate-200 hover:text-accent-text transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
