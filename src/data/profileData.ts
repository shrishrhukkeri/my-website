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
      institution: "RNS Institute of Technology (RNSIT), Bangalore",
      degree: "Bachelor of Engineering (BE) in Computer Science and Engineering",
      duration: "2023 — 2027",
      grade: "CGPA: 9.2275 (6th Semester)",
      details: [
        "1st Research Assistant from the Department of Computer Science & Engineering",
        "Active member of the Center for Drone Development Technologies (CDDT)",
        "Recognised as the top performer with the highest number of certifications in the CSE department"
      ]
    },
    {
      institution: "AECS Magnolia Maaruti Public School, Bangalore",
      degree: "Secondary Education (11th - 12th Grade)",
      duration: "2021 — 2023",
      grade: "12th Grade CBSE : 89%",
      details: [
        "SIH 2022 Winner",
        "Best Student-Teacher Award @ Shikshak Parv 2022"
      ]
    }
  ],
  experience: [
    {
      title: "Class Representative",
      organization: "RNSIT CSE Department",
      duration: "Sep 2023 — Present",
      location: "Bengaluru, India",
      description: [
        "Representing CSE Section D (Batch of 2027).",
        "Coordinating academic activities, student-teacher interactions, and peer motivation initiatives.",
        "Fostered leadership, communication, and team building across a cohort of 70+ engineers."
      ],
      skills: ["Leadership", "Communication", "Project Management", "Team Building"]
    },
    {
      title: "Research Assistant",
      organization: "Department of CSE, RNSIT",
      duration: "Aug 2025 — Apr 2026",
      location: "Bengaluru, India",
      description: [
        "1st Research Assistant from Dept. of CSE @ RNSIT working under the guidance of Dr. MJ Sudhamani and Dr. Abijith.",
        "Conducted academic research in AI, ML, Computer Vision, DL, Kinesics, LiFi, Quantum Computing, and Networks.",
        "Developed models for Machine Learning-based DDoS anomaly detection in resource-constrained IoT systems."
      ],
      skills: ["Machine Learning", "Quantum Computing", "Deep Learning", "Network Security", "Research Methodologies"]
    },
    {
      title: "IoT Intern",
      organization: "Samsung Innovation Campus",
      duration: "Sep 2025 — May 2026",
      location: "Center of Excellence @ RNSIT (On-site)",
      description: [
        "Selected for the prestigious IoT Internship (Among top 15 out of 450+ applicant engineers).",
        "Acquired deep hands-on expertise in IoT clouds, embedded systems telemetry, and telemetry analytics.",
        "Built edge computing configurations interfacing with multiple sensor arrays."
      ],
      skills: ["Internet of Things (IoT)", "IoT Cloud Platforms", "Embedded Systems", "Telemetry Analytics"]
    },
    {
      title: "Arduino & Embedded Intern",
      organization: "Pantech.AI",
      duration: "Jun 2025",
      location: "Bengaluru, India (Remote)",
      description: [
        "Participated in an intensive, project-based Arduino & Microcontrollers internship.",
        "Designed and prototyped automated circuit boards and sensor interfaces.",
        "Explored firmware programming, signal processing, and basic physical computing frameworks."
      ],
      skills: ["Arduino", "Microcontrollers", "Electronics", "Circuit Design", "Firmware Development"]
    }
  ],
  projects: [
    {
      title: "Vizagon",
      summary: "An on-campus startup incubator founded by Shrish, along with Vaishnavi and Vamshi Ganesh B., dedicated to building technology-driven hardware and software solutions.",
      techStack: ["Hardware Systems", "Software Frameworks", "Venture Architecture"],
      impact: "Incubation MoU signed on March 11, 2026 to operate on-campus.",
      featured: true
    },
    {
      title: "Vehicular Safety Management System (VSMS) & IoV",
      summary: "An intelligent Internet of Vehicles (IoV) framework tracking telemetry data to establish active collision warning and vehicle health monitoring.",
      techStack: ["Internet of Vehicles", "Embedded C++", "Telemetry Sensors", "MQTT"],
      impact: "Team VSMS selected for the national KPIT Sparkle showcase.",
      featured: true
    },
    {
      title: "SAV4Secure (Smart Automation using Splash)",
      summary: "Child safety automation system developed to prevent hazardous domestic incidents through rapid automated isolation sensors.",
      techStack: ["Arduino", "Smart Automation", "Hardware Prototyping"],
      impact: "Won 1st Place (Smart Automation Category) at the national Smart India Hackathon (SIH) 2022 with a ₹25,000 cash prize.",
      featured: true
    },
    {
      title: "Farmers Assistance System using Technology (FAST)",
      summary: "A smart soil-and-crop telemetry assistant tracking real-time micro-climate indicators to advise optimal watering and chemical applications.",
      techStack: ["IoT Sensors", "Micro-controllers", "Data Analysis"],
      impact: "Acclaimed utility project featured at college technical expositions.",
      featured: false
    },
    {
      title: "AiDBMS (Advanced Interactive DBMS)",
      summary: "A database management layer using Natural Language Processing (NLP) to convert raw English queries into complex SQL transactions.",
      techStack: ["NLP", "Database Systems", "Python", "SQL Parser"],
      impact: "Significantly lowers the barrier of database administration for non-technical managers.",
      featured: false
    }
  ],
  achievements: [
    {
      title: "1st Place - Smart India Hackathon (SIH)",
      awarder: "Government of India",
      year: "2022",
      description: "Won first prize in the Smart Automation category for SAV4Secure, representing AECS Magnolia Maaruti Public School."
    },
    {
      title: "Boeing Zonal Fixed Wing Piloting Competition",
      awarder: "Boeing India",
      year: "2025",
      description: "Qualified for Zonal-Level Fixed Wing Piloting competition. Finished in the Top 20 Teams at the Boeing Aeromodelling Workshop, KIIT TBI."
    },
    {
      title: "100+ Professional Certifications",
      awarder: "Infosys Springboard, Coursera, NPTEL, Cisco, IBM",
      year: "2023 — Present",
      description: "Recognized as the Top Performer in the CSE department for holding the highest count of valid certifications."
    },
    {
      title: "1st Winner - Project Open House Panorama (PROP)",
      awarder: "RNSIT",
      year: "2024",
      description: "Awarded first place at the annual hardware/software project panorama."
    },
    {
      title: "1st Winner - Project Open House Panorama (PROP)",
      awarder: "RNSIT",
      year: "2025",
      description: "Successfully defended the title, securing the first prize consecutively for edge telemetry solutions."
    },
    {
      title: "Finalist - PESU Ignite IoT Hackathon",
      awarder: "PES University",
      year: "2024",
      description: "Finalist at the competitive university-level Internet of Things design hackathon."
    }
  ],
  skills: [
    {
      category: "AI / ML & Research",
      items: ["Machine Learning Anomaly Detection", "Computer Vision", "Deep Learning", "Kinesics", "Quantum Computing", "Data Science"]
    },
    {
      category: "IoT & Embedded Systems",
      items: ["Microcontrollers (ESP32, Arduino)", "IoT Cloud Telemetry", "Fixed-wing Piloting/Aeromodelling", "Drone Building (CDDT)", "Edge Computing"]
    },
    {
      category: "Software Engineering",
      items: ["Web Development (React, TypeScript, Node.js)", "C/C++", "Python", "SQL & Database Management (AiDBMS)", "Tailwind CSS"]
    },
    {
      category: "Venture & Management",
      items: ["Startup Incubation", "Project Management", "Team Building & Leadership", "Communication", "Creativity and Innovation"]
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
    github: "https://github.com/shrishrahulhukkeri",
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
