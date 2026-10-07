import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "../data/profileData";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am Shrish's digital twin assistant. You can ask me questions about his engineering projects, technical experience, research, awards, and skills.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Frontend Fallback matching engine for local tests without Groq configured
  const getMockResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes("startup") || q.includes("robotics") || q.includes("uav") || q.includes("drone") || q.includes("roles")) {
      return "Shrish leads UAV and drone development at CDDT RNSIT, was selected as Top 15 in the Samsung Innovation Campus IoT program, and has interned in AI, robotics, and embedded systems at Pantech.AI.";
    }
    if (q.includes("ddos") || q.includes("kaggle") || q.includes("research") || q.includes("iomt")) {
      return `Shrish's primary research is "${profileData.research.title}". He published a custom Kaggle dataset tracking ESP32 node behavior under simulated volumetric attacks (HTTP, UDP, SYN floods) in resource-constrained IoMT environments.`;
    }
    if (q.includes("education") || q.includes("rnsit")) {
      return "Shrish is pursuing his Bachelor of Engineering in Computer Science and Engineering at the RNS Institute of Technology (RNSIT), Bengaluru. He has a CGPA of 9.07 / 10 (6th Semester) and was selected as the first-ever Research Assistant from the CSE Department.";
    }
    if (q.includes("achievement") || q.includes("award") || q.includes("sih") || q.includes("boeing")) {
      return "Shrish won 1st Place at the Smart India Hackathon (SIH) 2022 (SAV4Secure child safety automation, ₹25,000 prize). He also qualified for the Boeing Zonal Aeromodelling Competition (Top 14) and won 1st Place at SVIT Drone Expo.";
    }
    if (q.includes("project") || q.includes("vsms") || q.includes("fast")) {
      return "Core projects include: 1) SAV4Secure (SIH Winner - Child Safety Automation), 2) VSMS & IoV (Vehicular Safety Management System, selected for KPIT), 3) AiDBMS (NLP Intelligent Database System), 4) FAST (Precision Agriculture Assistant), 5) React Native Mobile Apps, 6) IoMT DDoS Anomaly Telemetry Dataset.";
    }
    if (q.includes("skill") || q.includes("tech")) {
      return "His skillsets are grouped into: 1) AI / ML (Computer Vision, Deep Learning, Quantum Computing). 2) IoT & Embedded Systems (ESP32, Arduino, Drone Building, Aeromodelling). 3) Software Engineering (React, TS, Node, Python, C++, SQL). 4) Venture & Project Management.";
    }
    if (q.includes("contact") || q.includes("email") || q.includes("linkedin")) {
      return `You can reach Shrish at: Email: ${profileData.contact.email}. LinkedIn: ${profileData.contact.linkedin}. GitHub: ${profileData.contact.github}.`;
    }
    return "I am configured to only answer queries about Shrish's professional credentials, startup, projects, experience, research, and contact details. Please ask something related to those topics.";
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";

    try {
      const response = await fetch(`${backendUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("API Connection Failed");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (err) {
      // Use local intelligent mock response if backend fails (e.g., local preview or deployment without keys configured yet)
      console.warn("Backend unavailable or key missing. Falling back to portfolio dataset matching engine.");
      setTimeout(() => {
        const fallbackReply = getMockResponse(userMessage.content);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: fallbackReply },
        ]);
        setIsLoading(false);
      }, 600);
      return;
    }

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      {/* Small Toggle Button */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="p-4 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-2xl flex items-center justify-center border border-gray-300 dark:border-gray-800"
          title="Chat with Digital Twin Assistant"
        >
          <MessageSquare size={20} />
        </motion.button>
      )}

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-80 sm:w-96 rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-[#0e0f12] text-slate-800 dark:text-gray-300 overflow-hidden shadow-2xl flex flex-col h-[400px]"
          >
            {/* Header */}
            <div className="bg-slate-50 dark:bg-[#16171d] px-4 py-3.5 border-b border-slate-200 dark:border-gray-800/40 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <Bot size={16} className="text-brand-cyan" />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-800 dark:text-gray-300">
                  SRH // ASSISTANT
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-brand-red text-slate-600 dark:text-gray-400 transition-colors"
                title="Close Chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 max-w-[85%] ${
                    m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg text-xs leading-relaxed ${
                      m.role === "user"
                        ? "bg-brand-cyan/10 border border-brand-cyan/35 text-slate-900 dark:text-white"
                        : "bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-gray-800/80 text-slate-800 dark:text-gray-300"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 max-w-[80%] mr-auto">
                  <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-gray-800/80 p-2.5 rounded-lg text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer Form */}
            <form
              onSubmit={handleSend}
              className="flex border-t border-slate-200 dark:border-gray-800/40 bg-slate-50 dark:bg-[#0a0a0d] p-3 items-center shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Shrish's work..."
                className="flex-grow bg-transparent border-none outline-none focus:ring-0 text-slate-950 dark:text-white font-mono text-xs placeholder-slate-400 dark:placeholder-gray-600"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-1 text-slate-600 dark:text-gray-400 hover:text-brand-cyan disabled:opacity-40 transition-colors"
                title="Send Message"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
