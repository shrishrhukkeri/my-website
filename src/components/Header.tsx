import React, { useState } from "react";
import { Moon, Sun, Download, Menu, X, ArrowUpRight } from "lucide-react";
import { profileData } from "../data/profileData";

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleDark }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#0b111e]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo: "Shrish Hukkeri" with peacock green/flame blue dot */}
        <a href="#hero" className="flex items-center gap-1 group">
          <span className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight group-hover:text-[#0066ff] transition-colors">
            Shrish Hukkeri
          </span>
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a884] inline-block mb-1" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-display font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#0066ff] dark:hover:text-[#2979ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Group (Download CV + Theme Toggle) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={profileData.contact.resumeUrl}
            download="Shrish_Rahul_Hukkeri_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#0066ff]/10 dark:bg-[#2979ff]/15 text-[#0066ff] dark:text-[#2979ff] border border-[#0066ff]/30 dark:border-[#2979ff]/40 hover:bg-gradient-to-r hover:from-[#0066ff] hover:to-[#00a884] hover:text-white dark:hover:text-white transition-all duration-200"
            title="Download CV (PDF)"
          >
            <Download size={13} />
            <span>Download CV</span>
          </a>

          <button
            onClick={toggleDark}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleDark}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0b111e] px-6 py-5 space-y-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-[#0066ff] flex items-center justify-between py-1"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={14} className="text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <a
              href={profileData.contact.resumeUrl}
              download="Shrish_Rahul_Hukkeri_Resume.pdf"
              className="w-full py-2.5 rounded-md text-xs font-semibold bg-gradient-to-r from-[#0066ff] to-[#00a884] text-white flex items-center justify-center gap-2 shadow-sm transition-opacity hover:opacity-95"
            >
              <Download size={14} />
              <span>Download CV (PDF)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:border-[#0066ff] hover:text-[#0066ff]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:border-[#00a884] hover:text-[#00a884]"
              >
                <span>GitHub</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
