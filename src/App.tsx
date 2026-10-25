import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TechStrip } from "./components/TechStrip";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Recognition } from "./components/Recognition";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { CurvedScrollbar } from "./components/CurvedScrollbar";
import { GoldBackdrop } from "./components/GoldBackdrop";
import { isNightNow, readOverride, saveOverride } from "./utils/timeTheme";

interface AppProps {
  /** "gold" recolours the whole site in gold and navy-black (served at gold.html). */
  theme?: "gold";
}

function App({ theme }: AppProps) {
  // Light by day, dark by night, following the visitor's local time. A manual toggle
  // overrides it for the rest of the visit.
  const [override, setOverride] = useState(readOverride);
  const [isDark, setIsDark] = useState(() => (override ? override === "dark" : isNightNow()));

  useEffect(() => {
    if (override) return;
    const sync = () => setIsDark(isNightNow());
    const id = window.setInterval(sync, 60_000);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [override]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", isDark);
    root.classList.toggle("theme-gold", theme === "gold");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", isDark ? (theme === "gold" ? "#0a0e18" : "#0b111e") : "#ffffff");
  }, [isDark, theme]);

  const toggleDark = () => {
    const next = isDark ? "light" : "dark";
    saveOverride(next);
    setOverride(next);
    setIsDark(next === "dark");
  };

  return (
    // reducedMotion="user" disables transform animations for visitors who prefer less motion
    <MotionConfig reducedMotion="user">
      <div className="w-full min-h-screen text-slate-900 dark:text-white transition-colors duration-300 font-sans antialiased">
        {theme === "gold" && <GoldBackdrop />}
        <div className="page-frame" aria-hidden />
        <ScrollProgress />
        <CurvedScrollbar />

        <Header isDark={isDark} toggleDark={toggleDark} />

        <main className="w-full">
          <Hero isDark={isDark} theme={theme} />
          <TechStrip />
          <About />
          <Portfolio />
          <Experience />
          <Recognition />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
