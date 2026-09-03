import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TechStrip } from "./components/TechStrip";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

function App() {
  // Default to Light Mode as explicitly requested ("simple and light mode"), with full Dark Mode toggle support
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#0f141d] text-slate-900 dark:text-white transition-colors duration-300 font-sans antialiased selection:bg-[#f2583e]/20 selection:text-[#f2583e]">
      {/* 1. Top Navigation Bar */}
      <Header isDark={isDark} toggleDark={toggleDark} />

      {/* Main Content Flow matching the mockup */}
      <main className="w-full">
        {/* 2. Hero Section with Avatar Halo & Action Buttons */}
        <Hero isDark={isDark} />

        {/* 3. Horizontal Tech Stack Strip directly below Hero */}
        <TechStrip />

        {/* 4. About Me: Left Services Timeline + Right Narrative & 3 Stats */}
        <About />

        {/* 5. Projects Section with Coral Indicator */}
        <Portfolio />

        {/* 6. Experience & Trajectory */}
        <Experience />
      </main>

      {/* 7. Minimalist Contact Footer */}
      <Footer />
    </div>
  );
}

export default App;
