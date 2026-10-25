import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions
  const { width, height } = page.getSize();

  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Palette
  const darkNavy = rgb(15 / 255, 23 / 255, 42 / 255); // #0f172a
  const slate600 = rgb(71 / 255, 85 / 255, 105 / 255); // #475569
  const slate400 = rgb(148 / 255, 163 / 255, 184 / 255);
  const cobaltBlue = rgb(37 / 255, 99 / 255, 235 / 255); // #2563eb
  const lineGray = rgb(226 / 255, 232 / 255, 240 / 255);

  let y = height - 38;

  // Header: Name
  page.drawText("SHRISH RAHUL HUKKERI", {
    x: 42,
    y,
    size: 19,
    font: fontBold,
    color: darkNavy,
  });

  y -= 14;
  page.drawText("Computer Science Engineer · AI/ML · IoT & Embedded Systems · AIoT · IoV · Edge AI", {
    x: 42,
    y,
    size: 9,
    font: fontRegular,
    color: cobaltBlue,
  });

  y -= 13;
  const contactText = "Bengaluru, India | shrishrhukkeri@gmail.com | +91-7975660668 | linkedin.com/in/shrish-hukkeri | github.com/shrishrhukkeri";
  page.drawText(contactText, {
    x: 42,
    y,
    size: 8,
    font: fontRegular,
    color: slate600,
  });

  y -= 10;
  // Divider
  page.drawLine({
    start: { x: 42, y },
    end: { x: width - 42, y },
    thickness: 1,
    color: lineGray,
  });

  y -= 14;

  const drawSectionHeading = (title) => {
    page.drawText(title.toUpperCase(), {
      x: 42,
      y,
      size: 9.5,
      font: fontBold,
      color: cobaltBlue,
    });
    y -= 3;
    page.drawLine({
      start: { x: 42, y },
      end: { x: width - 42, y },
      thickness: 0.75,
      color: lineGray,
    });
    y -= 10;
  };

  // 1. EDUCATION
  drawSectionHeading("Education");

  page.drawText("RNS Institute of Technology (RNSIT)", {
    x: 42,
    y,
    size: 9.5,
    font: fontBold,
    color: darkNavy,
  });
  const eduDate = "Bengaluru, India | 2023 - 2027";
  page.drawText(eduDate, {
    x: width - 42 - fontRegular.widthOfTextAtSize(eduDate, 8),
    y,
    size: 8,
    font: fontRegular,
    color: slate600,
  });
  y -= 11;
  page.drawText("Bachelor of Engineering (BE) in Computer Science & Engineering - CGPA: 9.07 / 10 (6th Semester)", {
    x: 42,
    y,
    size: 8.5,
    font: fontOblique,
    color: slate600,
  });
  y -= 10;
  const eduBullets = [
    "First-ever Research Assistant selected from the CSE Department at RNSIT (Computer Vision & Affective Computing).",
    "Relevant Coursework: DSA, DAA, DBMS, Computer Networks, OS, AI/ML, Software Engineering.",
    "Top certification performer in CSE with 130+ verified credentials across Infosys, Coursera, NPTEL, IBM, and Cisco."
  ];
  for (const b of eduBullets) {
    page.drawText(`-  ${b}`, { x: 50, y, size: 8, font: fontRegular, color: slate600 });
    y -= 10;
  }
  y -= 4;

  // 2. EXPERIENCE & ROLES
  drawSectionHeading("Experience");

  const experiences = [
    {
      title: "Research Assistant (Computer Vision & Affective Computing)",
      org: "CSE Dept., RNSIT",
      period: "Aug 2025 - Apr 2026",
      bullets: [
        "First-ever Research Assistant from CSE Dept. at RNSIT, working under research faculty on vision & affective computing.",
        "Researched ML-based DDoS anomaly detection in resource-constrained IoT/IoMT hardware nodes."
      ]
    },
    {
      title: "IoT Intern",
      org: "Samsung Innovation Campus",
      period: "Sep 2025 - May 2026",
      bullets: [
        "Ranked Top 15 out of 450+ engineers in competitive Samsung program covering embedded design and cloud telemetry.",
        "Designed and implemented IoT prototypes integrating cloud dashboards and real-time sensor data pipelines."
      ]
    },
    {
      title: "AI & Robotics Intern",
      org: "Pantech.AI",
      period: "Jun 2026",
      bullets: [
        "Implemented real-time YOLO computer vision pipelines for object, lane, and sign detection (>90% accuracy).",
        "Explored LiDAR sensor fusion, SLAM algorithms, and Raspberry Pi-based autonomous robot development with edge inference."
      ]
    },
    {
      title: "Embedded Systems Intern",
      org: "Pantech.AI",
      period: "Jun 2025",
      bullets: [
        "Developed 5+ Arduino and ESP32 embedded prototypes integrating multi-sensor inputs and actuator control."
      ]
    },
    {
      title: "Head — Drone & UAV Development Team",
      org: "Zepco & CDDT, RNSIT",
      period: "2025 - Present",
      bullets: [
        "Lead UAV design, aeromodelling, and flight controls across embedded systems, sensor fusion, and ESC calibration.",
        "Among Top 14 at Boeing Zonal Aeromodelling Competition; 1st Place at SVIT Drone Expo."
      ]
    }
  ];

  for (const exp of experiences) {
    page.drawText(`${exp.title} - ${exp.org}`, { x: 42, y, size: 9, font: fontBold, color: darkNavy });
    page.drawText(exp.period, {
      x: width - 42 - fontRegular.widthOfTextAtSize(exp.period, 8),
      y,
      size: 8,
      font: fontRegular,
      color: slate600,
    });
    y -= 10;
    for (const b of exp.bullets) {
      page.drawText(`-  ${b}`, { x: 50, y, size: 8, font: fontRegular, color: slate600 });
      y -= 9.5;
    }
    y -= 3;
  }
  y -= 2;

  // 3. KEY PROJECTS
  drawSectionHeading("Projects");

  const projects = [
    {
      name: "SAV4Secure — Child Safety Automation",
      stack: "AirTag, SPLASH Programming, Smart Automations, Shortcuts",
      desc: "AirTag-driven child safety automation earning INR 25,000 prize at Smart India Hackathon (SIH 2022)."
    },
    {
      name: "Vehicular Safety Management System (VSMS) & IoV",
      stack: "C++, Python, ESP32, Edge IoT, MQTT",
      desc: "IoV vehicle safety prototype using ESP32 nodes for real-time telemetry and hazard alerts. Selected for KPIT Sparkle."
    },
    {
      name: "AiDBMS — NLP Intelligent Database System",
      stack: "Python, PostgreSQL, SQLite, NLP, LLM APIs, Streamlit",
      desc: "Natural language query interface translating conversational English queries into validated SQL with explainable outputs."
    },
    {
      name: "FAST — Farmers Assistance System using Technology",
      stack: "Arduino Uno, Soil/Temperature Sensors, Python, ML Classification",
      desc: "Precision-agriculture decision support system recommending optimal crop actions based on real-time soil & climate feeds."
    }
  ];

  for (const proj of projects) {
    page.drawText(proj.name, { x: 42, y, size: 9, font: fontBold, color: darkNavy });
    y -= 9.5;
    page.drawText(`Stack: ${proj.stack}`, { x: 42, y, size: 7.5, font: fontOblique, color: cobaltBlue });
    y -= 9;
    page.drawText(`-  ${proj.desc}`, { x: 50, y, size: 8, font: fontRegular, color: slate600 });
    y -= 10.5;
  }

  // 4. HONORS & AWARDS
  drawSectionHeading("Honors & Awards");

  const awards = [
    "Smart India Hackathon (SIH) Winner — INR 25,000 prize for AirTag-driven child safety automation (SAV4Secure).",
    "Top 15 / 450+ Engineers — Samsung Innovation Campus IoT Internship.",
    "Top 14 Zonal Level — Boeing Aeromodelling Competition; 1st Place at SVIT Drone Expo.",
    "1st Place Winner (Consecutive 2x) — Project Open House Panorama (PROP 2024 & PROP 2025) @ RNSIT.",
    "130+ Professional Certifications — Infosys Springboard, Coursera, NPTEL, Cisco, IBM (Top Performer in CSE Dept)."
  ];

  for (const aw of awards) {
    page.drawText(`-  ${aw}`, { x: 50, y, size: 8, font: fontRegular, color: slate600 });
    y -= 9.5;
  }
  y -= 3;

  // 5. TECHNICAL SKILLS
  drawSectionHeading("Technical Skills");

  const skillLines = [
    { label: "Languages:", val: "Python (primary), Java, C / C++, SQL" },
    { label: "AI / ML & Vision:", val: "Supervised/Unsupervised ML, Deep Learning, CNNs, YOLO (v5/v8), LLM/VLM, OpenCV, SLAM" },
    { label: "IoT & Embedded:", val: "Arduino, ESP32, Raspberry Pi, Sensors, MQTT/HTTP, Edge Inference, UAVs/Drones" },
    { label: "Web & Backend:", val: "React, React Native, TypeScript, Flask, FastAPI, PostgreSQL, SQLite, DSA, Git/GitHub" }
  ];

  for (const sk of skillLines) {
    page.drawText(sk.label, { x: 42, y, size: 8, font: fontBold, color: darkNavy });
    page.drawText(sk.val, { x: 130, y, size: 8, font: fontRegular, color: slate600 });
    y -= 9.5;
  }

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve(__dirname, "../public/Shrish_Hukkeri_Resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("Resume generated at:", outputPath);
}

createResume().catch(console.error);
