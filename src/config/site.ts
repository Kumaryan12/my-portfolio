export type Project = {
  title: string;
  blurb: string;
  story?: string;
  stack: string[];
  year: string;
  links: { live?: string; source?: string };
  featured?: boolean;
  status?: string;
  image?: string;
  categories?: ("Machine Learning" | "Backend" | "Fullstack")[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  blurb: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  url?: string;
};

export type Post = {
  title: string;
  summary: string;
  date: string;
  url: string;
  readingTime?: string;
};

export const site = {
  name: "Aryan Satyendra Kumar",
  firstName: "Aryan",
  url: "https://portfolio-ochre-zeta-28.vercel.app",
  quote: {
    text: "Simplicity is prerequisite for reliability.",
    author: "Edsger W. Dijkstra",
  },
  profileImages: ["/profile-ak.png"],
  bannerImage: "/images/messi-header.webp",
  socialBannerImage: "/images/messi-header.webp",
  initials: "AK",
  role: "Machine Learning & Software Engineer",
  location: "Goa, India",
  timezone: "Asia/Kolkata",
  email: "kumararyan66472@gmail.com",
  greeting: "Hey, I'm Aryan",
  tagline:
    "I build machine-learning systems and full-stack products across computer vision, NLP, data science, and real-world engineering applications.",
  about: [
    "I'm Aryan, an Electronics and Communication Engineering student at NIT Goa with a minor in Computer Science and a strong interest in applied machine learning.",
    "My work spans multimodal air-quality modelling, computer vision, retrieval-augmented generation, probabilistic simulation, and production web applications.",
    "I enjoy turning messy, real-world data into reliable systems - from roadside PM2.5 intelligence to legal-aid retrieval and race-outcome simulation.",
    "I completed Class XII under the Goa Board with 85.7% at Loyola Higher Secondary School.",
  ],
  tldr: [
    "B.Tech ECE + Minor in CS, NIT Goa.",
    "CGPA: 8.23/10.",
    "Amazon ML Summer School 2026.",
    "AI/ML Lead and GDG Organizer.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "Computer Vision - NLP - Applied ML",
    nowBuilding: "F1 Race Predictor",
    nowListening: "focus playlists",
  },
  socials: {
    github: "https://github.com/Kumaryan12",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/kumaryan12",
    email: "mailto:kumararyan66472@gmail.com",
    resume: "/Aryan_Kumar_CV.pdf",
    discord: "",
    medium: "",
    instagram: "https://instagram.com/ak_predicts",
  },
  experience: [
    {
      company: "Indian Institute of Technology Madras",
      role: "Project Intern - Mobile Air Quality Intelligence",
      period: "May 2026 - Jul 2026",
      location: "Chennai, India",
      blurb:
        "Worked with Prof. Raghunathan Rengaswamy on multimodal roadside PM2.5 modelling using mobile sensing, atmospheric data, geospatial context, and camera imagery.",
      highlights: [
        "Fine-tuned YOLO vehicle-detection models and used SegFormer road segmentation to derive traffic, road-exposure, texture, brownness, dry/gray ratio, and dust-related visual features.",
        "Built ResNet50-GRU temporal and tree-based tabular models for atmospheric-background and local-roadside-increment estimation with leakage-aware whole-date validation.",
        "Designed a PM2.5 filter-sampling and XRF-validation workflow to compare image-derived indicators with physical particulate measurements.",
      ],
      metrics: [
        { value: "PM2.5", label: "Target" },
        { value: "YOLO", label: "Detection" },
        { value: "SegFormer", label: "Segmentation" },
        { value: "XRF", label: "Validation" },
      ],
    },
    {
      company: "South Western Railways, RVNL",
      role: "Signalling and Telecommunications Intern",
      period: "May 2025 - Jul 2025",
      location: "Goa, India",
      blurb:
        "Studied Kyosan Electronic Interlocking in a safety-critical railway environment, tracing command-to-field feedback paths and failure handling.",
      highlights: [
        "Examined interlocking logic, relay interfaces, field feedback, and safety-oriented failure modes used in railway signalling systems.",
      ],
      metrics: [
        { value: "Kyosan", label: "System" },
        { value: "EI", label: "Interlocking" },
        { value: "Relay", label: "Interfaces" },
        { value: "Safety", label: "Focus" },
      ],
    },
  ] as Job[],
  projects: [
    {
      title: "NyayaSetu",
      blurb:
        "An ML-RAG assistant for legal aid that classifies issue type and urgency, retrieves official sources, and produces citation-grounded responses with guardrails.",
      story:
        "Fine-tuned XLM-R classifiers across legal-aid, labour, consumer, cybercrime, grievance, and safety queries. Built the retrieval layer with Sentence Transformers and ChromaDB, then evaluated ranking quality using Recall@1/3/5 and MRR.",
      stack: ["FastAPI", "Next.js", "XLM-R", "ChromaDB", "Groq API"],
      year: "2026",
      links: { source: "https://github.com/Kumaryan12/nyaysetu" },
      image: "/projects/nyayasetu.jpg",
      categories: ["Machine Learning", "Fullstack", "Backend"],
    },
    {
      title: "F1 Race Predictor",
      blurb:
        "A probabilistic race simulation pipeline trained on 2023-2025 FastF1 data with leakage-aware rolling form, driver and team priors, circuit context, and uncertainty estimates.",
      story:
        "Trained Random Forest models with OOB R2 of about 0.625, MAE of about 2.37, and RMSE of about 3.22. Added prediction intervals and Monte Carlo simulations while accounting for SC/VSC and pit-loss factors.",
      stack: ["Python", "FastF1", "Pandas", "NumPy", "scikit-learn"],
      year: "2025 - Present",
      links: { source: "https://github.com/Kumaryan12/F1_prediction_2026" },
      image: "/projects/f1-race-predictor.jpg",
      categories: ["Machine Learning", "Backend"],
    },
    {
      title: "HostelMitra",
      blurb:
        "A deployed hostel complaint management portal used by NIT Goa students, with authentication, real-time tracking, voting, role-based access, and transparent resolution history.",
      story:
        "Built with Google OAuth and Firestore persistence. The portal supports student voting, administrative resolution workflows, live complaint status, and timestamped audit trails.",
      stack: ["Firebase", "Firestore", "Google OAuth"],
      year: "2025",
      links: {
        source: "https://github.com/Kumaryan12/HostelMitra",
        live: "https://hostelmitra-81b7d.web.app/",
      },
      image: "/projects/hostelmitra-nit-goa.jpg",
      categories: ["Fullstack", "Backend"],
    },
  ] as Project[],
  skills: [
    "Python",
    "SQL",
    "C",
    "C++",
    "PyTorch",
    "scikit-learn",
    "Pandas",
    "NumPy",
    "YOLO",
    "SegFormer",
    "CNNs",
    "LSTMs",
    "GRUs",
    "Transformers",
    "XLM-R",
    "RAG",
    "ChromaDB",
    "FastAPI",
    "REST APIs",
    "Firebase",
    "Supabase",
    "PostgreSQL",
    "Firestore",
    "Git",
    "GitHub",
  ],
  writing: [
    {
      title: "Machine Learning Specialization",
      summary: "Andrew Ng - supervised learning, advanced learning algorithms, and unsupervised learning.",
      date: "Coursera",
      url: "https://coursera.org/share/511694705d0c1469932469d414a1ecf8",
      readingTime: "Credential",
    },
    {
      title: "Deep Learning Specialization",
      summary: "Andrew Ng - neural networks, optimization, structured ML projects, convolutional networks, and sequence models.",
      date: "Coursera",
      url: "https://coursera.org/share/1a69a528708b69bd212760cf799adc44",
      readingTime: "Credential",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      summary: "Data preparation, analysis, visualization, and evidence-based decision-making.",
      date: "Coursera",
      url: "https://coursera.org/share/accadfe20f17ba63ad1d025391ce92eb",
      readingTime: "Credential",
    },
  ] as Post[],
  achievements: [
    "Selected for Amazon ML Summer School 2026.",
    "Ranked 251 out of 7,000+ teams in the Amazon ML Challenge 2025.",
    "Finalist in multiple national case-study competitions across IIM, IIT, and NIT platforms.",
    "Finalist at India Innovates 2026.",
    "Led a 100-participant hackathon and conducted ML and DSA workshops as GDG Organizer and AI/ML Lead.",
    "Captain of the Institute Badminton Team and former national-level badminton player.",
  ],
  github: {
    username: "Kumaryan12",
    contributionsLastYear: "Public",
  },
  credits: {
    originalCreator: "Anurag Jha",
    originalRepository: "https://github.com/nodeanurag/my-portfolio",
  },
  footerNote: "Built with curiosity and care",
} as const;

export type Site = typeof site;
