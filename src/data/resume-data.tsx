import { FacebookIcon, GitHubIcon } from "@/components/icons";
import { ConsultlyLogo, ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Pham Tuan Vu",
  initials: "Syuro",
  location: "Ho Chi Minh City",
  locationLink: "https://maps.app.goo.gl/quhDCmgYQCQJg6M16",
  about:
    "Backend Developer with 1+ years of experience in building scalable microservices.",
  goal: "Become a Backend Lead within 2 years, leading system architecture and mentoring team members.",
  summary:
    "Specializing in backend development, I build robust, high-performance systems using technologies like NestJS, Spring Boot, Kafka, and gRPC. I have experience across diverse domains such as logistics, healthcare, and restaurant management, focusing on optimizing database queries, integrating real-time data streaming, and implementing scalable microservices. My expertise extends to SQL and NoSQL databases like MariaDB, MongoDB, and SingleStore, ensuring efficient data management. I am committed to exploring new technologies to enhance system efficiency and drive business success.",
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
      projects: [
        {
          title: "DaiHy",
          status: "",
          techStack: [
            "Java",
            "Spring Boot",
            "NestJS",
            "Tauri",
            "React",
            "Kafka",
            "gRPC",
            "MariaDB",
            "SQLite",
            "Redis",
            "Microservices",
            "Docker",
          ],
          description:
            "ERP system for wedding banquet restaurant: contracts, events, purchasing, inventory.",
          tasks: [
            "Desktop app for ZKTeco attendance device integration in HR module",
            "Multi-level approval workflow for procurement",
            "Full inventory module: material lifecycle, stock operations, and inter-branch transfers",
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
            "Clinic ERP system: appointment scheduling, treatment procedures, and inventory.",
          tasks: [
            "Core clinic service: booking, treatment scheduling, and patient care workflow",
            "VNPT and MISA invoice integration for e-invoicing",
            "CRM with campaign management and automated notifications (ZNS, Email)",
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
          techStack: [
            "NestJS",
            "Redis",
            "Kafka",
            "gRPC",
            "MariaDB",
            "ElasticSearch",
            "Microservices",
          ],
          description:
            "Digital freight platform connecting forwarders with suppliers for air and sea shipping.",
          tasks: [
            "User management with authentication and subscription",
            "Freight & route search engine for logistics platform",
            "Complex freight data management for air and sea shipping",
          ],
          logo: ConsultlyLogo,
          link: {
            label: "Cofast network",
            repo: "",
            href: "https://cofastnetwork.com",
          },
        },
      ],
    },
  ],
  skills: {
    Backend: [
      "Java",
      "Spring Boot",
      "NestJS",
      "Node.js",
      "Microservices",
      "gRPC",
      "Kafka",
    ],
    Frontend: [
      "ReactJS",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Tauri",
    ],
    Database: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "SQLite",
      "Redis",
      "Elastic Search",
      "MongoDB",
      "SingleStore",
    ],
    "DevOps & Tools": ["Docker", "Git"],
    "Soft Skills": [
      "Team Communication",
      "Research",
      "AI-assisted Development",
    ],
  },
  references: [
    {
      name: "Ha Quoc Ngan",
      title: "Project Manager",
      phone: "0775671927",
    },
  ],
  projects: [],
} as const;
