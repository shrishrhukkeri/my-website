import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Tools } from "./components/Tools";
import { Portfolio } from "./components/Portfolio";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Blogs } from "./components/Blogs";
import { Footer } from "./components/Footer";
import { ChatbotWidget } from "./components/ChatbotWidget";

function App() {
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
    <div className="w-full min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-350 font-sans">
      {/* Floating Capsule Header */}
      <Header isDark={isDark} toggleDark={toggleDark} />

      {/* Main Pages/Sections */}
      <main className="w-full">
        {/* Hero Section with canvas particle background */}
        <Hero isDark={isDark} />

        {/* About Me Section (Dark Theme) */}
        <About />

        {/* Tools Section */}
        <Tools />

        {/* Projects Showcase & Telemetry DDoS Simulator */}
        <Portfolio />

        {/* Horizontal Education Section */}
        <Education />

        {/* Horizontal Work Experience Section */}
        <Experience />

        {/* Latest Publications & Datasets */}
        <Blogs />
      </main>

      {/* Multi-column Footer + Secure CLI Terminal */}
      <Footer />

      {/* Groq-Connected Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}

export default App;

