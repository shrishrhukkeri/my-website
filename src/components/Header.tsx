import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Download, Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profileData";

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Recognition", id: "recognition" },
  { name: "Contact", id: "contact" },
];

export const Header: React.FC<HeaderProps> = ({ isDark, toggleDark }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of whichever section crosses the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "glass-bar" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-1 group shrink-0">
          <span className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-accent-text transition-colors">
            Shrish Hukkeri
          </span>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accent-2 inline-block mb-1 group-hover:scale-150 transition-transform" />
        </a>

        {/* Desktop navigation with a gliding active indicator */}
        <nav className="hidden md:flex items-center gap-1 text-[13px] font-display font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className={`relative px-3.5 py-2 transition-colors ${
                active === link.id
                  ? "text-accent-text"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {link.name}
              {active === link.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute left-3.5 right-3.5 -bottom-px h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-2"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.contact.resumeUrl}
            download="Shrish_Rahul_Hukkeri_CV.pdf"
            className="glass inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-accent-text transition-transform duration-300 hover:-translate-y-0.5"
            title="Download CV (PDF)"
          >
            <Download size={13} />
            <span>Download CV</span>
          </a>

          <button
            onClick={toggleDark}
            className="glass w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            onClick={toggleDark}
            className="glass w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="glass w-9 h-9 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden glass-bar rounded-b-[28px]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="px-6 py-5 space-y-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    className={`text-base font-medium flex items-center justify-between py-2 ${
                      active === link.id ? "text-accent-text" : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
                <a
                  href={profileData.contact.resumeUrl}
                  download="Shrish_Rahul_Hukkeri_CV.pdf"
                  className="w-full py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-accent to-accent-2 text-on-accent flex items-center justify-center gap-2"
                >
                  <Download size={14} />
                  <span>Download CV (PDF)</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="glass py-2.5 px-3 rounded-full text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:text-accent-text"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass py-2.5 px-3 rounded-full text-xs font-medium text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:text-accent-2-text"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
