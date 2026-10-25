export interface Project {
  title: string;
  summary: string;
  techStack: string[];
  impact: string;
  link?: string;
  featured?: boolean;
}

export interface Role {
  title: string;
  organization: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface Achievement {
  title: string;
  awarder: string;
  year: string;
  description: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  aboutText: string;
  education: {
    institution: string;
    degree: string;
    duration: string;
    grade: string;
    details: string[];
  }[];
  experience: Role[];
  projects: Project[];
  achievements: Achievement[];
  skills: {
    category: string;
    items: string[];
  }[];
  research: {
    title: string;
    domain: string;
    datasetName: string;
    description: string;
    variables: string[];
    link?: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    resumeUrl: string;
  };
}

export const profileData: ProfileData = {
  name: "Shrish Rahul Hukkeri",
  tagline: "Innovating at the edge of possibility",
  aboutText: "A dedicated researcher, engineer, and venture builder at RNSIT bridging physical hardware with secure software systems. Passionate about solving complex real-world problems with professionalism, discipline, and a relentless drive to build things that matter.",
  education: [
    {
      institution: "RNS Institute of Technology, Bengaluru",
      degree: "Bachelor of Engineering — Computer Science & Engineering",
      duration: "2023 — 2027",
      grade: "CGPA: 9.07 / 10 (6th Semester)",
      details: [
        "First-ever Research Assistant selected from the CSE Department at RNSIT",
        "Relevant Coursework: DSA, DAA, DBMS, Computer Networks, OS, AI/ML, Software Engineering",
        "Department top performer with 130+ verified industry certifications"
      ]
    },
    {
      institution: "AECS Magnolia Maaruti Public School, Bengaluru",
      degree: "Secondary Education (11th - 12th Grade)",
      duration: "2021 — 2023",
      grade: "12th Grade CBSE: 89%",
      details: [
        "Smart India Hackathon (SIH) 2022 Winner (₹25,000 cash prize)",
        "Best Student-Teacher Award (Shikshak Parv)"
      ]
    }
  ],
  experience: [
    {
      title: "Research Assistant",
      organization: "Department of CSE, RNSIT",
      duration: "Aug 2025 — Apr 2026",
      location: "Bengaluru, India",
      description: [
        "Selected as the first-ever Research Assistant from CSE Dept. at RNSIT, working on computer vision & affective computing.",
        "Researched ML-based DDoS anomaly detection in resource-constrained IoT systems."
      ],
      skills: ["Computer Vision", "Affective Computing", "Machine Learning", "IoT Security", "Python"]
    },
    {
      title: "IoT Intern",
      organization: "Samsung Innovation Campus",
      duration: "Sep 2025 — May 2026",
      location: "Center of Excellence @ RNSIT",
      description: [
        "Ranked Top 15 out of 450+ engineers in nationally competitive Samsung-backed IoT program.",
        "Designed cloud dashboards, real-time sensor pipelines, and device-to-cloud telemetry architectures."
      ],
      skills: ["Cloud IoT", "Embedded Systems", "Sensor Integration", "MQTT", "Device-to-Cloud"]
    },
    {
      title: "AI & Robotics Intern",
      organization: "Pantech.AI",
      duration: "Jun 2026",
      location: "Bengaluru, India (Remote)",
      description: [
        "Implemented real-time YOLO computer vision pipelines for object, lane, and sign detection (>90% accuracy).",
        "Explored LiDAR sensor fusion, SLAM algorithms, and Raspberry Pi-based autonomous robot development."
      ],
      skills: ["YOLO (v5/v8)", "Computer Vision", "LiDAR", "SLAM", "Edge ML"]
    },
    {
      title: "Embedded Systems Intern",
      organization: "Pantech.AI",
      duration: "Jun 2025",
      location: "Bengaluru, India (Remote)",
      description: [
        "Developed 5+ Arduino and ESP32 embedded prototypes with multi-sensor inputs and actuator control.",
        "Applied hardware-software co-design principles for rapid IoT application prototyping."
      ],
      skills: ["Arduino", "ESP32", "Firmware", "Sensors & Actuators", "Circuit Design"]
    },
    {
      title: "Head — Drone & UAV Development Team",
      organization: "Zepco & CDDT, RNSIT",
      duration: "2025 — Present",
      location: "Bengaluru, India",
      description: [
        "Lead UAV design, aeromodelling, and flight controls across embedded systems, sensor fusion, and ESC calibration.",
        "Ranked Top 14 at Boeing Zonal Aeromodelling Competition; secured 1st Place at SVIT Drone Expo."
      ],
      skills: ["UAV Design", "Flight Control", "Sensor Fusion", "Aeromodelling", "Hardware Integration"]
    },
    {
      title: "Technical Head",
      organization: "Antariksh Space Club, RNSIT",
      duration: "2026 — Present",
      location: "Bengaluru, India",
      description: [
        "Lead technical supervision across Web Development, Embedded Systems, IoT, Robotics, GIS, and Computer Vision.",
        "Conduct student technical workshops and satellite data processing initiatives."
      ],
      skills: ["Technical Leadership", "Robotics", "GIS", "Satellite Data", "Web Development"]
    }
  ],
  projects: [
    {
      title: "SAV4Secure — Child Safety Automation",
      summary: "AirTag-driven child safety monitoring automation engineered to prevent domestic hazards through rapid automated isolation sensors.",
      techStack: ["AirTag", "SPLASH Programming", "Smart Automations", "Shortcuts"],
      impact: "Won 1st Place at National Smart India Hackathon (SIH) — ₹25,000 cash prize.",
      featured: true
    },
    {
      title: "Vehicular Safety Management System (VSMS) & IoV",
      summary: "IoV vehicle safety prototype utilizing ESP32 nodes for real-time telemetry, distance sensing, and collision hazard alerts.",
      techStack: ["C++", "Python", "ESP32", "Edge IoT", "MQTT"],
      impact: "Selected for the national KPIT Sparkle technical showcase.",
      featured: true
    },
    {
      title: "AiDBMS — NLP Intelligent Database System",
      summary: "Natural language interface parsing plain-English queries into validated, executable SQL with explainable step-by-step rationales.",
      techStack: ["Python", "PostgreSQL", "SQLite", "NLP", "LLM APIs", "Streamlit"],
      impact: "Translates plain-English to validated SQL with interactive execution.",
      featured: true
    },
    {
      title: "FAST — Farmers Assistance System using Technology",
      summary: "Precision-agriculture telemetry system fusing soil moisture, temperature, and humidity sensors with ML to deliver optimal crop recommendations.",
      techStack: ["Arduino Uno", "IoT Sensors", "Python", "ML Classification"],
      impact: "Advises real-time crop actions for irrigation, fertilisation, and harvest.",
      featured: false
    },
    {
      title: "React Native Mobile Applications",
      summary: "Cross-platform mobile apps engineered with modern state management, real-time data sync, offline-first storage, and responsive UI.",
      techStack: ["React Native", "TypeScript", "Expo", "Supabase", "REST APIs"],
      impact: "Scalable mobile architecture delivering native performance across Android and iOS.",
      featured: false
    },
    {
      title: "IoMT DDoS Anomaly Telemetry Dataset",
      summary: "Cyber-physical dataset tracking ESP32 node performance under simulated volumetric DDoS attacks (HTTP, UDP, SYN floods).",
      techStack: ["Python", "Kaggle Dataset", "ESP32", "Scikit-learn"],
      impact: "Published dataset for resource-constrained edge cyber-physical research.",
      featured: false
    }
  ],
  achievements: [
    {
      title: "Smart India Hackathon Winner (SIH)",
      awarder: "Government of India",
      year: "2022",
      description: "Won ₹25,000 national prize in Smart Automation for SAV4Secure child safety automation."
    },
    {
      title: "Top 15 / 450+ Engineers (IoT Program)",
      awarder: "Samsung Innovation Campus",
      year: "2025 — 2026",
      description: "Ranked among Top 15 nationally in Samsung IoT program covering embedded design and cloud telemetry."
    },
    {
      title: "Top 14 / Zonal Level — Aeromodelling",
      awarder: "Boeing India",
      year: "2025",
      description: "Qualified for Zonal-level UAV design and flight performance at Boeing Aeromodelling Competition."
    },
    {
      title: "1st Place — SVIT Drone Expo",
      awarder: "SVIT Bengaluru",
      year: "2025",
      description: "Secured first place for autonomous UAV prototype and flight telemetry performance."
    },
    {
      title: "1st Place — Project Open House Panorama",
      awarder: "RNSIT",
      year: "2024 & 2025",
      description: "Consecutive first-place winner for edge telemetry and embedded systems engineering."
    },
    {
      title: "Winner — RNS Maverick Innovation Challenge",
      awarder: "RNSIT",
      year: "2024",
      description: "Selected as grand winner for innovative hardware-software engineering solution."
    },
    {
      title: "2nd Place — Luminus Solaris Grand Hackathon",
      awarder: "Luminus Solaris",
      year: "2024",
      description: "Runner-up for smart automation and rapid prototype deployment."
    },
    {
      title: "2nd Place — Science Idea Tank",
      awarder: "State Science Forum",
      year: "2023",
      description: "Awarded second place for precision technology innovation and research concept."
    },
    {
      title: "3rd Place — Vigyanotsava",
      awarder: "National Science Exposition",
      year: "2023",
      description: "Secured third prize for applied hardware prototyping and intelligent sensor design."
    },
    {
      title: "Finalist — PESU Ignite IoT Hackathon",
      awarder: "PES University",
      year: "2024",
      description: "Finalist at university-level IoT hackathon showcasing smart edge sensor networks."
    },
    {
      title: "Best Student-Teacher Award",
      awarder: "Shikshak Parv",
      year: "2022",
      description: "Honored with Best Student-Teacher recognition for technical mentorship."
    },
    {
      title: "130+ Professional Certifications",
      awarder: "Infosys, Coursera, NPTEL, IBM, Cisco",
      year: "2023 — Present",
      description: "Designated as top certification performer in CSE with 130+ credentials in AI/ML, IoT, and Cloud."
    }
  ],
  skills: [
    {
      category: "AI / ML & Computer Vision",
      items: [
        "Python (Primary)",
        "Supervised & Unsupervised ML",
        "Deep Learning & CNNs",
        "YOLO (v5/v8) Object Detection",
        "LLM / VLM Integration",
        "OpenCV & SLAM"
      ]
    },
    {
      category: "IoT & Embedded Systems",
      items: [
        "ESP32, Arduino & Raspberry Pi",
        "Sensor Integration & Actuators",
        "MQTT & HTTP IoT Protocols",
        "Edge ML Inference",
        "Drone & UAV Controls (CDDT)",
        "Li-Fi Fundamentals"
      ]
    },
    {
      category: "Data, Backend & Mobile",
      items: [
        "React & React Native",
        "TypeScript & JavaScript",
        "PostgreSQL & SQLite",
        "Flask & FastAPI",
        "Data Structures & Algorithms",
        "Git & GitHub"
      ]
    },
    {
      category: "Platforms & Certifications",
      items: [
        "Linux & VS Code",
        "Jupyter & Google Colab",
        "Streamlit",
        "130+ Industry Certifications",
        "Cisco Networking Fundamentals",
        "IBM AI & Data Science"
      ]
    }
  ],
  research: {
    title: "Machine Learning-based DDoS Anomaly Detection in Resource-Constrained IoMT Systems",
    domain: "Cyber-Physical Network Security & Internet of Medical Things (IoMT)",
    datasetName: "ESP32 Performance: Normal vs. Simulated DDoS Attack",
    description: "Built and published a custom Kaggle dataset tracking ESP32 node behaviors under network stress. Designed ML models capable of identifying volumetric attacks (HTTP, UDP, SYN floods) operating under severe hardware resource limitations.",
    variables: ["http_rps (HTTP requests/second)", "udp_rps (UDP requests/second)", "syn_rps (SYN floods/second)", "icmp_rps (ICMP requests/second)", "total_rps (Aggregate request telemetry)"],
    link: "https://www.kaggle.com/datasets" // Placeholder for Kaggle link
  },
  contact: {
    email: "shrishrhukkeri@gmail.com",
    linkedin: "https://linkedin.com/in/shrish-hukkeri",
    github: "https://github.com/shrishrhukkeri",
    resumeUrl: "/Shrish_Hukkeri_Resume.pdf"
  }
};

// Simulated data points for normal and DDoS states in the simulator dashboard
export interface TelemetryDataPoint {
  time: string;
  http_rps: number;
  udp_rps: number;
  syn_rps: number;
  cpu_load: number;
  mem_free: number;
}

export const normalTelemetry: TelemetryDataPoint[] = [
  { time: "00:00", http_rps: 10, udp_rps: 3, syn_rps: 0, cpu_load: 11, mem_free: 45.2 },
  { time: "00:02", http_rps: 12, udp_rps: 5, syn_rps: 0, cpu_load: 12, mem_free: 45.0 },
  { time: "00:04", http_rps: 15, udp_rps: 4, syn_rps: 0, cpu_load: 14, mem_free: 44.8 },
  { time: "00:06", http_rps: 11, udp_rps: 3, syn_rps: 0, cpu_load: 11, mem_free: 45.1 },
  { time: "00:08", http_rps: 13, udp_rps: 6, syn_rps: 0, cpu_load: 13, mem_free: 44.9 },
  { time: "00:10", http_rps: 12, udp_rps: 4, syn_rps: 0, cpu_load: 12, mem_free: 45.0 }
];

export const attackTelemetry: TelemetryDataPoint[] = [
  { time: "00:00", http_rps: 250, udp_rps: 650, syn_rps: 400, cpu_load: 42, mem_free: 35.1 },
  { time: "00:02", http_rps: 780, udp_rps: 1240, syn_rps: 980, cpu_load: 78, mem_free: 22.4 },
  { time: "00:04", http_rps: 1240, udp_rps: 1980, syn_rps: 1450, cpu_load: 94, mem_free: 11.2 },
  { time: "00:06", http_rps: 1579, udp_rps: 2450, syn_rps: 1890, cpu_load: 99, mem_free: 4.8 },
  { time: "00:08", http_rps: 1560, udp_rps: 2410, syn_rps: 1870, cpu_load: 99, mem_free: 4.5 },
  { time: "00:10", http_rps: 1585, udp_rps: 2470, syn_rps: 1900, cpu_load: 99, mem_free: 4.2 }
];
