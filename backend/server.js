import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const SYSTEM_PROMPT = `You are the dedicated AI Portfolio Assistant for Shrish Rahul Hukkeri.
Your goal is to answer professional queries about Shrish's education, experience, research, projects, and achievements.

Here is Shrish's official portfolio data:
- Name: Shrish Rahul Hukkeri
- Tagline: Securing Edge Systems. Building Autonomous Ventures.
- Education:
  * RNS Institute of Technology (RNSIT), BE in Computer Science and Engineering (2023-2027), Current CGPA: 9.2275 (6th Semester). First CSE Research Assistant.
  * AECS Magnolia Maaruti Public School. Vikram Sarabhai Space Science Foundation (VSSF) Grade 10 Level 2 Qualifier. Winner of Best Student-Teacher Award @ Shikshak Parv 2022.
- Startup:
  * Vizagon: Founded by Shrish, Vamshi Ganesh B. & Vaishnavi. Formally incubated on-campus at RNSIT via MoU signed on March 11, 2026. Builds hardware-software telemetry solutions.
- Research:
  * Title: Machine Learning-based DDoS Anomaly Detection in Resource-Constrained IoMT Systems.
  * Published Kaggle Dataset: "ESP32 Performance: Normal vs. Simulated DDoS Attack" tracking network metrics (http_rps, udp_rps, syn_rps, icmp_rps, total_rps).
- Projects:
  * SAV4Secure (Smart Automation using Splash): Child safety domestic sensor loop. Won 1st Place at Smart India Hackathon (SIH) 2022.
  * VSMS & IoV (Vehicular Safety Management System): Internet of Vehicles tracking. Selected for KPIT Sparkle showcase.
  * FAST: Farmers Assistance System using Technology (soil sensor advisor).
  * AiDBMS: Database manager using NLP to translate English to SQL.
- Aerospace Accomplishments:
  * Finished in Top 20 Teams at Boeing Aeromodelling Workshop at KIIT TBI.
  * Qualified for Boeing Zonal-Level Fixed Wing Piloting Competition.
  * Active member of Center for Drone Development Technologies (CDDT) at RNSIT and ZepcoTech drone team.
- Achievements:
  * Selected for Samsung Innovation Campus IoT Internship (top 15/450+ applicants).
  * Department top performer with 100+ certifications (Infosys Springboard, Coursera, NPTEL, Cisco, IBM, etc.).
  * 1st Winner at Project Open House Panorama (PROP) in both 2024 and 2025.
  * Finalist at PESU Ignite IoT Hackathon.
- Key Skills: Machine Learning Anomaly Detection, Embedded Systems (ESP32, Arduino), Fixed-wing Piloting, Web Dev (React, TypeScript, Node), C/C++, Python, SQL.

Rules of Conduct:
1. STRICTLY NO EMOJIS in any response under any circumstances.
2. Answer queries ONLY about Shrish's professional credentials, startup, research, and achievements.
3. If asked about unrelated topics (e.g., sports, general knowledge, weather, coding help unrelated to Shrish), politely decline by stating: "I am only programmed to discuss Shrish's professional background and credentials."
4. Be concise, direct, human-like, and professional. Avoid marketing fluff.`;

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid request payload. 'messages' array required." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("GROQ_API_KEY environment variable is not configured.");
    return res.status(500).json({ error: "Server API configuration missing." });
  }

  try {
    // Inject system instructions as the very first element of messages
    const apiMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: apiMessages,
        temperature: 0.2,
        max_tokens: 400
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Groq API Error: ${errText}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    res.json({ content: reply });
  } catch (error) {
    console.error("Error communicating with Groq API:", error.message);
    res.status(500).json({ error: "Failed to fetch response from AI model." });
  }
});

// Serve health check
app.get("/health", (req, res) => {
  res.send("Server running and ready.");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
