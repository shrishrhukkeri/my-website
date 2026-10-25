// Curated, high-signal content for the portfolio. Source of truth: the latest CV.

export const techMarquee = [
  "Python",
  "C / C++",
  "TypeScript",
  "React",
  "React Native",
  "PyTorch",
  "OpenCV",
  "YOLO",
  "ESP32 & Arduino",
  "MQTT",
  "LoRa & BLE",
  "ArduPilot & MAVLink",
  "Ollama & RAG",
  "Flask & FastAPI",
  "Docker",
  "Three.js",
];

export const stats = [
  { value: 9.07, decimals: 2, suffix: "/10", label: "CGPA · CSE, RNSIT" },
  { value: 140, decimals: 0, suffix: "+", label: "Certifications" },
  { value: 15, decimals: 0, prefix: "Top ", suffix: "", label: "of 450+ · Samsung IoT" },
  { value: 2, decimals: 0, suffix: "", label: "IEEE Conference Papers" },
];

export const focusAreas = [
  {
    icon: "brain",
    title: "AI & Edge Intelligence",
    desc: "Vision models and local LLMs, tuned to run where the data is born.",
    tags: ["PyTorch", "OpenCV", "YOLO", "MediaPipe", "Ollama", "RAG"],
  },
  {
    icon: "cpu",
    title: "IoT & Embedded Systems",
    desc: "Sensors to cloud: firmware, protocols and real-time telemetry.",
    tags: ["ESP32", "Arduino", "MQTT", "LoRa", "BLE", "C/C++"],
  },
  {
    icon: "plane",
    title: "Drones & Robotics",
    desc: "UAV design, flight control and autonomous perception.",
    tags: ["ArduPilot", "MAVLink", "LiDAR SLAM", "Raspberry Pi"],
  },
  {
    icon: "layers",
    title: "Full-Stack Engineering",
    desc: "Production web and mobile apps with secure, scalable backends.",
    tags: ["React", "TypeScript", "React Native", "Flask", "FastAPI", "Docker"],
  },
] as const;

export interface FeaturedProject {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  impact: string;
  metrics?: { value: string; label: string }[];
  span: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Sentinel — AI-Enabled DevOps Intelligence Platform",
    category: "AI · DevOps · Local LLM",
    summary:
      "One control plane for requirements, QA, releases, service health and meetings. A local LLM runs on the organisation's own machine and can only call a role-filtered set of approval-gated tools.",
    stack: ["Python", "Flask", "React", "SQLite", "LM Studio", "Edge Voice AI"],
    impact: "Private by design — no data leaves the machine",
    metrics: [
      { value: "23", label: "API connectors" },
      { value: "13", label: "approval-gated tools" },
    ],
    span: "lg:col-span-4",
  },
  {
    title: "SAV4Secure — Child Safety Automation",
    category: "Smart Automation",
    summary:
      "AirTag-driven child-safety monitoring built from smart automations and shortcuts.",
    stack: ["AirTag", "SPLASH", "Shortcuts"],
    impact: "1st Place · Smart India Hackathon · ₹25,000",
    span: "lg:col-span-2",
  },
  {
    title: "Secure Assessment & Question Paper Platform",
    category: "Security · Full-Stack",
    summary:
      "Role-based exam management from question bank to controlled distribution, with the Controller of Examinations holding full authority. Inspired by the NEET paper leaks.",
    stack: ["Flask", "PostgreSQL", "SQLAlchemy", "RBAC", "PDF"],
    impact: "Approval workflows with full accountability",
    span: "lg:col-span-2",
  },
  {
    title: "FAST — Farmers Assistance System",
    category: "Precision Agriculture · IoT",
    summary:
      "Soil moisture, temperature and humidity feeds drive an ML classifier that recommends irrigation, fertilisation and harvest timing.",
    stack: ["Arduino Uno", "Python", "IoT Dashboard", "ML"],
    impact: "Sensor-to-decision in real time",
    span: "lg:col-span-2",
  },
  {
    title: "React Native Mobile Apps",
    category: "Mobile Engineering",
    summary:
      "High-performance iOS and Android apps with responsive UIs, offline-first capability and secure REST integrations.",
    stack: ["React Native", "TypeScript", "Expo", "Supabase"],
    impact: "One codebase, native performance",
    span: "lg:col-span-2",
  },
];

export interface TimelineRole {
  title: string;
  org: string;
  period: string;
  place: string;
  summary: string;
  highlight: string;
  current?: boolean;
}

export const timeline: TimelineRole[] = [
  {
    title: "Technical Head",
    org: "Antariksh Space Club, RNSIT",
    period: "2026 — Present",
    place: "Bengaluru",
    summary:
      "Technical supervision across web, embedded systems, IoT, robotics, GIS, satellite data processing and computer vision.",
    highlight: "Leadership",
    current: true,
  },
  {
    title: "AI & Robotics Intern",
    org: "Pantech.AI",
    period: "Jun 2026",
    place: "Remote",
    summary:
      "Real-time YOLO object, lane and traffic-sign detection. Explored LiDAR fusion, SLAM and Raspberry Pi edge inference.",
    highlight: ">90% accuracy",
  },
  {
    title: "IoT Intern",
    org: "Samsung Innovation Campus",
    period: "Sep 2025 — May 2026",
    place: "RNSIT CoE",
    summary:
      "Built cloud-connected IoT prototypes with real-time sensor pipelines and device-to-cloud communication.",
    highlight: "Top 15 / 450+",
  },
  {
    title: "Research Assistant",
    org: "CSE Department, RNSIT",
    period: "Aug 2025 — Apr 2026",
    place: "Bengaluru",
    summary:
      "Worked under research faculty on computer vision and affective computing.",
    highlight: "First-ever RA in CSE",
  },
  {
    title: "Head — Drone & UAV Team",
    org: "Zepco & CDDT, RNSIT",
    period: "2025 — Present",
    place: "Bengaluru",
    summary:
      "UAV design, aeromodelling, sensor fusion and ESC calibration across hardware and software.",
    highlight: "1st · SVIT Drone Expo",
    current: true,
  },
  {
    title: "Embedded Systems Intern",
    org: "Pantech.AI",
    period: "Jun 2025",
    place: "Remote",
    summary:
      "Shipped 5+ Arduino and ESP32 prototypes with multi-sensor inputs and actuator control.",
    highlight: "5+ prototypes",
  },
];

export const awards = [
  { rank: "1st", title: "Smart India Hackathon", note: "National winner · ₹25,000" },
  { rank: "Top 15", title: "Samsung Innovation Campus", note: "Out of 450+ engineers" },
  { rank: "Top 14", title: "Boeing Zonal Aeromodelling", note: "UAV design and flight" },
  { rank: "1st", title: "SVIT Drone Expo", note: "Also 1st at Open House Panorama '24 & '25 and a Kaggle Deep Learning Competition" },
  { rank: "2nd", title: "Luminus Solaris Grand Hackathon", note: "And Science Idea Tank" },
  { rank: "Finalist", title: "PESU Ignite IoT Hackathon", note: "3rd at Vigyanotsava" },
] as const;

export const publications = [
  {
    venue: "ICECST · International IEEE Conference",
    where: "Lincoln University College, Malaysia",
    date: "30 Sep 2026",
    title: "On-Node RSSI Ranging to Reduce Airtime in Large-Scale LoRaWAN Asset and Vehicle Tracking",
  },
  {
    venue: "INCCSC · International IEEE Conference",
    where: "LBSITW, Kerala, India",
    date: "5 Oct 2026",
    title: "HUMAN: A Hybrid Unsupervised Multi-Aspect Network for Explainable Pattern Discovery in Heterogeneous Tabular Data",
  },
];
