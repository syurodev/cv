import { FacebookIcon, GitHubIcon } from "@/components/icons";
import { ConsultlyLogo, ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Pham Tuan Vu",
  initials: "Syuro",
  location: "Ho Chi Minh City",
  locationLink: "https://maps.app.goo.gl/quhDCmgYQCQJg6M16",
  about:
    "Full Stack Developer with expertise in building scalable, high-performance backend systems and microservices architecture. Passionate about optimizing databases, real-time data processing, and designing efficient APIs.",
  summary:
    "With experience in backend and full-stack development, I specialize in building robust, high-performance systems using technologies like NestJS, Spring Boot, Kafka, and gRPC. I have worked on diverse domains, including logistics, healthcare, and restaurant management, where I optimized database queries, integrated real-time data streaming, and implemented scalable microservices. My expertise extends to SQL and NoSQL databases like MariaDB, MongoDB, and SingleStore, ensuring efficient data management. I am always eager to explore new technologies, enhance system efficiency, and contribute to innovative solutions that drive business success.",
  avatarUrl: "/Vu1.jpg",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "vupt1908@gmail.com",
    tel: "+84945466875",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/syurodev",
        icon: GitHubIcon,
      },
      // {
      //   name: "LinkedIn",
      //   url: "https://www.linkedin.com/in/bjarocki/",
      //   icon: LinkedInIcon,
      // },
      {
        name: "Facebook",
        url: "https://www.facebook.com/phamvu1901/",
        icon: FacebookIcon,
      },
    ],
  },
  education: [
    {
      school: "Can Tho University",
      degree: "Information technology",
      start: "2019",
      end: "2023",
      description:
        "Here I learned about data structures and algorithms, how to design and build websites with technologies such as HTML, CSS, JS, PHP, MongoDB, mySQL, ...",
    },
  ],
  work: [
    {
      company: "OVERATE-VNTECH COMPANY",
      link: "https://www.linkedin.com/company/techres-seemt/",
      badges: ["Backend Developer"],
      title: "Backend Developer",
      logo: ParabolLogo,
      start: "11/03/2024",
      end: "Present",
      description:
        "Implement a backend system for restaurant business operations and outsourcing using technologies such as NodeJS, NestJS, Java, Spring Boot, gRPC, Kafka, Redis, ElasticSearch, MongoDB, MariaDB, SingleStore, and Docker.",
      repo: "",
    },
  ],
  skills: [
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Java",
    "NestJS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "Next.js",
    "Tailwind CSS",
    "MySQL",
    "Redis",
    "Spring Boot",
    "gRPC",
    "Kafka",
    "SingleStore",
    "Elastic Search",
  ],
  projects: [
    {
      title: "DaiHy",
      status: "",
      techStack: [
        "Java",
        "Spring Boot",
        "Python",
        "Flask",
        "Rust",
        "Tauri",
        "React",
        "Kafka",
        "gRPC",
        "MariaDB",
        "SQLite",
        "Docker",
      ],
      description:
        "A management system for bookings, event scheduling, purchases, inventory, assets, and more for a wedding banquet restaurant.",
      tasks: [
        "Developed a desktop application for ZKTeco device management, integrating a frontend (React, Tauri/Rust) with a backend API (Flask/Python).",
        "Designed and implemented a multi-level approval workflow for procurement, streamlining the purchasing process across departments.",
        "Engineered a complete inventory module covering the entire material lifecycle: from raw material intake (with multi-unit handling) to semi-processed goods, recipe quantification, and final dish costing.",
        "Developed core inventory operations including stock-taking, balance adjustments, returns, and spoilage write-offs, ensuring accurate real-time stock levels.",
        "Add inventory transfer functionality for moving stock between branches.",
      ],
      logo: ConsultlyLogo,
      link: {
        label: "",
        repo: "",
        href: "",
      },
    },
    {
      title: "Chiro",
      status: "",
      techStack: [
        "NodeJS",
        "ReactJS",
        "NestJS",
        "Kafka",
        "gRPC",
        "MariaDB",
        "MongoDB",
        "Redis",
        "Microservices",
        "Docker",
      ],
      description:
        "The system serves the clinic and includes processes for appointment scheduling, consultation procedures, and inventory management.",
      tasks: [
        "Developed the `his-connector` microservice to ensure seamless, real-time data synchronization with the main web-based Hospital Information System (HIS).",
        "Built an advanced booking system for efficient appointment scheduling and patient management.",
        "Integrated VNPT Invoice for automated electronic invoicing, streamlining the clinic's billing processes.",
        "Developed a campaign management module (frontend and backend) for targeted patient outreach.",
        "Automated patient communication by implementing ZNS (Zalo Notification Service) for appointment reminders and follow-up care instructions.",
      ],
      logo: ConsultlyLogo,
      link: {
        label: "",
        repo: "",
        href: "",
      },
    },
    {
      title: "Cofast",
      status: "",
      techStack: ["NestJS", "Redis", "Kafka", "gRPC", "MariaDB", "SingleStore"],
      description:
        "Cofast Network is an advanced digital freight platform that connects freight forwarders with suppliers in the logistics industry. The system is built with features for transportation management, consolidation, e-commerce, and cross-border services, ensuring high performance, flexibility, and security.",
      tasks: [
        "Developed and maintained the User Service in a microservices architecture using NestJS, gRPC, and Kafka.",
        "Implemented search and indexing features for the routed search system using ElasticSearch to improve data retrieval efficiency.",
        "Optimized database queries and integrated Redis for caching to enhance system performance.",
        "Collaborated with the backend team to design scalable and secure solutions for cross-border logistics management.",
      ],
      logo: ConsultlyLogo,
      link: {
        label: "Cofast network",
        repo: "",
        href: "https://cofastnetwork.com",
      },
    },
  ],
} as const;
