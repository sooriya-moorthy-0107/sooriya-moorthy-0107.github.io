import type { PortfolioData, Project, SkillCategory, PortfolioProfile } from '../types/portfolio';
export type { PortfolioData, Project, SkillCategory, PortfolioProfile };

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Sooriya Moorthy Ponnangai",
    shortName: "Sooriya Moorthy R",
    handle: "sooriya-moorthy-0107",
    title: "Software Engineer & Systems Architect",
    tagline: "Engineering fault-tolerant software systems and real-world architectures with the high-pressure composure of live broadcast operations.",
    location: "Vellore / Chennai, India",
    institution: "Vellore Institute of Technology (VIT)",
    degree: "Integrated M.Tech Software Engineering (2021 - 2026)",
    cgpa: "8.27 CGPA",
    radioRole: "Advisory Member & Former Vice Chairperson at VIT Community Radio (90.8 MHz)",
    email: "sooriyamoorthy0107@gmail.com",
    github: "https://github.com/sooriya-moorthy-0107",
    linkedin: "https://linkedin.com/in/sooriya-moorthy",
    resumeUrl: "/assets/Resume.pdf",
    photo: "/assets/images/my_photo.png",
    workstationPhoto: "/assets/images/workstation_candid_1776528868544.png"
  },

  foundation: {
    headline: "The Signal & The Logic",
    subtitle: "Where rigorous engineering discipline meets live on-air composure.",
    bio: [
      "I am an analytical 4th-year Integrated M.Tech Software Engineering student at VIT. My core engineering ethos is formed at the intersection of architectural discipline and real-time operational execution.",
      "Leading executive operations and audio consoles at VIT Community Radio (90.8 MHz) taught me composure under intense pressure, zero-downtime mentality, and precise timing. When hundreds of listeners tune in live, there is no reload button.",
      "I bring that exact operational discipline to building software systems: from custom enterprise retail point-of-sale platforms handling daily financial transactions to multimodal generative AI pipelines and predictive analytics engines."
    ],
    stats: [
      { label: "Academic CGPA", value: "8.27", note: "Integrated M.Tech Software Eng." },
      { label: "Broadcasting", value: "90.8 MHz", note: "VIT Radio Advisory & Vice Chair" },
      { label: "Major Live Events", value: "5+", note: "Flawless real-time execution" },
      { label: "Production Builds", value: "100%", note: "Zero-loss transactional systems" }
    ],
    pillars: [
      {
        title: "High-Pressure Composure",
        description: "Executing real-time decisions without hesitation, honed from hours managing live radio consoles and high-stakes campus broadcasting.",
        icon: "Radio"
      },
      {
        title: "System Resilience",
        description: "Designing backend services and relational databases with strict ACID compliance, automated rollback mechanisms, and defensive error handling.",
        icon: "ShieldCheck"
      },
      {
        title: "Product Strategy & Quality",
        description: "Specializing in Software Quality Assurance, requirement modeling, agile execution, and bridging business requirements into clean code.",
        icon: "Cpu"
      }
    ]
  },

  arsenal: [
    {
      title: "Core Languages",
      icon: "Code2",
      description: "Foundational syntaxes for high-performance computing, data logic, and systems.",
      skills: [
        { name: "Python", level: "Expert", usage: "FastAPI backends, AI pipelines, algorithmic scripting" },
        { name: "Java", level: "Advanced", usage: "Object-oriented architectures, enterprise patterns, concurrency" },
        { name: "TypeScript / JS", level: "Advanced", usage: "Interactive frontend state, WebGL interfaces, modern APIs" },
        { name: "C / C++", level: "Proficient", usage: "Data structures, memory optimization, low-level algorithms" }
      ]
    },
    {
      title: "Interface & WebGL",
      icon: "Layout",
      description: "Crafting fluid, responsive, high-framerate digital user experiences.",
      skills: [
        { name: "React & Next.js", level: "Advanced", usage: "Component architecture, client-state orchestration, SSR" },
        { name: "Tailwind CSS", level: "Expert", usage: "Custom design systems, responsive micro-animations, glassmorphism" },
        { name: "Three.js / WebGL", level: "Intermediate", usage: "3D scene graphs, perspective transforms, dynamic shaders" },
        { name: "Framer Motion", level: "Advanced", usage: "Physics-based gestures, scroll-linked triggers, smooth layouts" }
      ]
    },
    {
      title: "Backend & Data",
      icon: "Database",
      description: "Resilient server architecture, relational schema design, and asynchronous APIs.",
      skills: [
        { name: "FastAPI", level: "Advanced", usage: "High-throughput asynchronous REST APIs & Webhook integrations" },
        { name: "PostgreSQL", level: "Advanced", usage: "Relational modeling, indexing, foreign keys, transaction locks" },
        { name: "Docker", level: "Proficient", usage: "Containerization, reproducible environments, service orchestration" },
        { name: "REST & WebSockets", level: "Advanced", usage: "Real-time bidirectional streams, schema validation" }
      ]
    },
    {
      title: "Cloud & Operations",
      icon: "Cloud",
      description: "Infrastructure provisioning, continuous delivery, and production deployments.",
      skills: [
        { name: "AWS (EC2, S3, DynamoDB)", level: "Proficient", usage: "Cloud compute hosting, asset buckets, scalable persistence" },
        { name: "Git & GitHub Actions", level: "Advanced", usage: "Version control workflows, automated CI/CD pipelines" },
        { name: "Vercel & Cloudflare", level: "Advanced", usage: "Edge network delivery, custom domain DNS, automated SSL" },
        { name: "Agile & Jira", level: "Advanced", usage: "Sprint planning, user story mapping, quality assurance" }
      ]
    }
  ],

  projects: [
    {
      id: "ponnangai-pos",
      title: "Ponnangai POS & Inventory",
      subtitle: "Custom Point of Sale & Inventory Management Platform",
      category: "Enterprise",
      description: "A production-grade retail point-of-sale software engineered from scratch for Ponnangai Enterprises. Solves daily inventory shrinkage, high-volume checkout speeds, and transactional auditing with zero failure tolerance.",
      architecture: ["FastAPI", "PostgreSQL", "Docker", "Python", "Tailwind CSS"],
      metrics: [
        "< 120ms transaction latency",
        "100% audit accuracy across transactions",
        "Automated thermal receipt & invoice generation"
      ],
      image: "/assets/images/billing_system_ui_1776528904275.png",
      githubUrl: "https://github.com/sooriya-moorthy-0107/Ponnangai-POS",
      details: "Engineered with strict ACID compliance in PostgreSQL, preventing race conditions during concurrent checkouts. Features barcode scanner integration, tax calculations, daily profit/loss reporting, and offline-resilient local sync."
    },
    {
      id: "yap-to-tale",
      title: "Yap-To-Tale AI Story Engine",
      subtitle: "Multimodal Generative Audio-Narrative Pipeline",
      category: "AI & ML",
      description: "An AI-powered multimodal platform that converts user stream-of-consciousness prompts ('yapping') into structured, serialized narrative scripts with dynamic audio narration and synchronized tone transitions.",
      architecture: ["Python", "LLM APIs", "TTS Voice Pipelines", "React", "Cloud Storage"],
      metrics: [
        "Dynamic character voice modulation",
        "Multi-stage prompt chaining pipeline",
        "Zero-buffer streaming audio generation"
      ],
      image: "/assets/images/python_ai.png",
      githubUrl: "https://github.com/sooriya-moorthy-0107",
      details: "Combines large language model orchestration with low-latency text-to-speech pipelines, structuring narrative pacing, cliffhangers, and environmental ambiance automatically from unstructured inputs."
    },
    {
      id: "effortleap",
      title: "EffortLeap Analytics",
      subtitle: "Predictive Agile Effort Estimation & Metric Modeling",
      category: "Algorithms",
      description: "An analytical platform designed to eliminate cognitive bias in software project estimation by analyzing historical commit velocities, story point drift, and developer throughput metrics.",
      architecture: ["Python", "Data Science", "Scikit-Learn", "FastAPI", "Chart.js"],
      metrics: [
        "28% improvement in sprint estimation accuracy",
        "Algorithmic historical drift detection",
        "Automated risk scoring for sprint deliverables"
      ],
      image: "/assets/images/effortleap_ui_1776528887944.png",
      githubUrl: "https://github.com/sooriya-moorthy-0107",
      details: "Employs statistical regression and machine learning to correlate code complexity metrics with actual engineering hours expended, generating confidence intervals for release planning."
    },
    {
      id: "ai-search-cli",
      title: "AI Search Simulator & Engine",
      subtitle: "Vector Retrieval & Algorithmic Paradigm Explorer",
      category: "Algorithms",
      description: "A terminal and CLI-based search engine simulator implementing semantic vector embeddings, inverted indices, and ranking heuristics to demonstrate modern AI information retrieval.",
      architecture: ["Python", "Vector Embeddings", "CLI / Terminal UI", "NumPy"],
      metrics: [
        "Sub-millisecond similarity scoring",
        "Interactive ASCII search telemetry",
        "Configurable cosine & BM25 ranking modes"
      ],
      image: "/assets/images/ai_simulator_cli_1776528925052.png",
      githubUrl: "https://github.com/sooriya-moorthy-0107",
      details: "Built to demystify how large language models perform retrieval augmented generation (RAG) and semantic vector search under the hood, featuring interactive vector space visualizations."
    }
  ]
};
