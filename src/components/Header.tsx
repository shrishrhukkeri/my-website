import React from "react";
import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleDark }) => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl px-4 py-3 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg flex justify-between items-center transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center gap-1.5 pl-2">
        <span className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tight">
          Shrish
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-sky-400 animate-pulse" />
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-300">
        <a href="#hero" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">About</a>
        <a href="#tools" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Tools</a>
        <a href="#projects" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Projects</a>
        <a href="#education" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Education</a>
        <a href="#experience" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Experience</a>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleDark}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={15} className="text-yellow-400" /> : <Moon size={15} />}
        </button>

        {/* CTA Button */}
        <a
          href="#contact"
          className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
};
