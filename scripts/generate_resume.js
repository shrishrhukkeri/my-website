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

  let y = height - 42;

  // Header: Name
  page.drawText("SHRISH RAHUL HUKKERI", {
    x: 42,
    y,
    size: 20,
    font: fontBold,
    color: darkNavy,
  });

  y -= 16;
  page.drawText("Securing Edge Systems | Building Autonomous Ventures | CSE Undergrad @ RNSIT", {
    x: 42,
    y,
    size: 9.5,
    font: fontRegular,
    color: cobaltBlue,
  });

  y -= 14;
  const contactText = "Bengaluru, India  |  shrishrhukkeri@gmail.com  |  linkedin.com/in/shrish-hukkeri  |  github.com/shrishrahulhukkeri";
  page.drawText(contactText, {
    x: 42,
    y,
    size: 8.5,
    font: fontRegular,
    color: slate600,
  });

  y -= 12;
  // Divider
  page.drawLine({
    start: { x: 42, y },
    end: { x: width - 42, y },
    thickness: 1,
    color: lineGray,
  });

  y -= 18;

  const drawSectionHeading = (title) => {
    page.drawText(title.toUpperCase(), {
      x: 42,
      y,
      size: 10,
      font: fontBold,
      color: cobaltBlue,
    });
    y -= 4;
    page.drawLine({
      start: { x: 42, y },
      end: { x: width - 42, y },
      thickness: 0.75,
      color: lineGray,
    });
    y -= 12;
  };

  // 1. EDUCATION
  drawSectionHeading("Education");

  page.drawText("RNS Institute of Technology (RNSIT)", {
    x: 42,
    y,
    size: 10,
    font: fontBold,
    color: darkNavy,
  });
  const eduDate = "Bengaluru, India | 2023 - 2027";
  page.drawText(eduDate, {
    x: width - 42 - fontRegular.widthOfTextAtSize(eduDate, 8.5),
    y,
    size: 8.5,
    font: fontRegular,
    color: slate600,
  });
  y -= 12;
  page.drawText("Bachelor of Engineering (BE) in Computer Science & Engineering - CGPA: 9.2275 (6th Semester)", {
    x: 42,
    y,
    size: 9,
    font: fontOblique,
    color: slate600,
  });
  y -= 11;
  const eduBullets = [
    "1st Research Assistant from Dept. of CSE working under Dr. MJ Sudhamani & Dr. Abijith.",
    "Class Representative (Batch of 2027, 70+ engineers); Active Member of Center for Drone Development Technologies (CDDT).",
    "Recognized top performer with highest number of verified professional certifications (100+) in the CSE department."
  ];
  for (const b of eduBullets) {
    page.drawText(`-  ${b}`, { x: 50, y, size: 8.5, font: fontRegular, color: slate600 });
    y -= 11;
  }
  y -= 6;

  // 2. EXPERIENCE & ROLES
  drawSectionHeading("Experience & Leadership");

  const experiences = [
    {
      title: "IoT Intern",
      org: "Samsung Innovation Campus",
      period: "Sep 2025 - May 2026",
      bullets: [
        "Selected for prestigious IoT program among Top 15 out of 450+ applicants at RNSIT Center of Excellence.",
        "Built edge computing configurations interfacing sensor arrays with real-time cloud telemetry and telemetry analytics."
      ]
    },
    {
      title: "Research Assistant (AI/ML & Cyber-Physical Security)",
      org: "Department of CSE, RNSIT",
      period: "Aug 2025 - Apr 2026",
      bullets: [
        "Conducted research in ML anomaly detection, Computer Vision, LiFi, and edge cyber-physical telemetry systems.",
        "Engineered machine learning models for DDoS anomaly detection in resource-constrained IoMT/IoT hardware nodes."
      ]
    },
    {
      title: "Co-Founder & Lead Architect",
      org: "Vizagon (On-Campus Startup Incubator)",
      period: "2025 - Present",
      bullets: [
        "Founded on-campus venture incubator; formalized Institutional MoU signed on March 11, 2026 with RNSIT.",
        "Driving technology-focused hardware and software initiatives, mentoring student innovation cohorts."
      ]
    },
    {
      title: "Arduino & Embedded Systems Intern",
      org: "Pantech.AI",
      period: "Jun 2025",
      bullets: [
        "Designed and prototyped automated circuit boards, sensor interfaces, firmware programming, and physical computing loops."
      ]
    }
  ];

  for (const exp of experiences) {
    page.drawText(`${exp.title} - ${exp.org}`, { x: 42, y, size: 9.5, font: fontBold, color: darkNavy });
    page.drawText(exp.period, {
      x: width - 42 - fontRegular.widthOfTextAtSize(exp.period, 8.5),
      y,
      size: 8.5,
      font: fontRegular,
      color: slate600,
    });
    y -= 11;
    for (const b of exp.bullets) {
      page.drawText(`-  ${b}`, { x: 50, y, size: 8.5, font: fontRegular, color: slate600 });
      y -= 10.5;
    }
    y -= 4;
  }
  y -= 2;

  // 3. KEY PROJECTS & VENTURES
  drawSectionHeading("Featured Projects & Research");

  const projects = [
    {
      name: "Vehicular Safety Management System (VSMS) & IoV",
      stack: "Internet of Vehicles, Embedded C++, Telemetry Sensors, MQTT",
      desc: "Intelligent IoV framework tracking telemetry data for active collision avoidance and real-time vehicle telemetry health. Selected for National KPIT Sparkle showcase."
    },
    {
      name: "IoMT DDoS Anomaly Detection Telemetry Dataset",
      stack: "Python, Machine Learning, ESP32, Scikit-learn, Kaggle",
      desc: "Published custom benchmark dataset capturing ESP32 node behaviors under simulated volumetric attacks (HTTP, UDP, SYN floods) in constrained environments."
    },
    {
      name: "SAV4Secure (Smart Automation using Splash)",
      stack: "Arduino, Embedded Sensors, Hardware Prototyping",
      desc: "Child safety domestic automation system preventing hazardous incidents. Won 1st Place at National Smart India Hackathon (SIH) 2022 (INR 25,000 award)."
    },
    {
      name: "AiDBMS (Advanced Interactive DBMS)",
      stack: "NLP, Python, SQL Engine, Parser",
      desc: "Natural language translation engine enabling non-technical users to query and manage relational SQL databases via plain conversational text."
    }
  ];

  for (const proj of projects) {
    page.drawText(proj.name, { x: 42, y, size: 9.5, font: fontBold, color: darkNavy });
    y -= 10.5;
    page.drawText(`Tech Stack: ${proj.stack}`, { x: 42, y, size: 8, font: fontOblique, color: cobaltBlue });
    y -= 10;
    page.drawText(`-  ${proj.desc}`, { x: 50, y, size: 8.5, font: fontRegular, color: slate600 });
    y -= 13;
  }

  // 4. HONORS & AWARDS
  drawSectionHeading("Honors, Awards & Key Certifications");

  const awards = [
    "1st Place Winner - Smart India Hackathon (SIH) 2022 (Smart Automation Category, Govt. of India).",
    "Zonal Finalist & Top 20 Team - Boeing Aeromodelling Workshop & Fixed Wing Piloting Competition (2025).",
    "1st Place Winner (Consecutive 2x) - Project Open House Panorama (PROP 2024 & PROP 2025) @ RNSIT.",
    "100+ Professional Certifications - Infosys Springboard, Coursera, NPTEL, Cisco, IBM (Top Performer in CSE Dept)."
  ];

  for (const aw of awards) {
    page.drawText(`-  ${aw}`, { x: 50, y, size: 8.5, font: fontRegular, color: slate600 });
    y -= 11;
  }
  y -= 4;

  // 5. TECHNICAL SKILLS
  drawSectionHeading("Technical Skills");

  const skillLines = [
    { label: "AI / ML & Research:", val: "Machine Learning, Anomaly Detection, Computer Vision, Deep Learning, Quantum Computing" },
    { label: "IoT & Embedded:", val: "ESP32, Arduino, Microcontrollers, Telemetry Analytics, Drone Tech (CDDT), Fixed-Wing Piloting" },
    { label: "Software & Web:", val: "React, TypeScript, Tailwind CSS, Python, C/C++, Node.js, SQL, REST APIs, Git" },
    { label: "Venture & Management:", val: "Startup Incubation, Cohort Leadership, Class Representation, Technical Communication" }
  ];

  for (const sk of skillLines) {
    page.drawText(sk.label, { x: 42, y, size: 8.5, font: fontBold, color: darkNavy });
    page.drawText(sk.val, { x: 165, y, size: 8.5, font: fontRegular, color: slate600 });
    y -= 11;
  }

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.resolve(__dirname, "../public/Shrish_Hukkeri_Resume.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("Resume generated at:", outputPath);
}

createResume().catch(console.error);
