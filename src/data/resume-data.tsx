import { GitHubIcon } from "@/components/icons";
import { ConsultlyLogo, ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Pham Tuan Vu",
  initials: "Syuro",
  location: "Ho Chi Minh City",
  locationLink: "https://maps.app.goo.gl/quhDCmgYQCQJg6M16",
  about:
    "Backend Engineer with ~3 years of experience building scalable microservices using Java (Spring Boot) and Node.js (NestJS). Experienced in Kafka, gRPC, and database systems including MariaDB, MongoDB, and Redis. Focused on building reliable backend services and optimizing data processing for business applications.",
  goal: "Become a Backend Lead within 2 years, leading system architecture and mentoring team members.",
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
      company: "OVERATE-VNTECH COMPANY / OHQ Software",
      link: "https://vn.linkedin.com/company/ohq-software-vietnam",
      badges: ["Backend Developer"],
      title: "Backend Developer",
      logo: ParabolLogo,
      start: "07/2023",
      end: "01/2026",
      description:
        "Backend Engineer building scalable ERP and logistics systems using microservices architecture (Kafka, gRPC). Focused on system design, high-throughput data processing, and complex business workflows across supply chain, inventory, and CRM domains.",
      repo: "",
      projects: [
        {
          title: "Đại Hỷ Palace ERP",
          status: "",
          techStack: [
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
          ],
          teamSize: 9,
          description:
            "ERP system for a wedding banquet restaurant chain covering contract management, event operations, procurement, inventory, and HR.",
          tasks: [
            "Designed HR module with RBAC: employee management, multi-source attendance tracking, and configurable payroll (tax, insurance, overtime).",
            "Built procurement workflow: configurable multi-level approval chains based on amount and organizational hierarchy.",
            "Implemented end-to-end inventory system: procurement → receiving → QC → stock movement, with real-time monitoring and automated reorder suggestions.",
          ],
          logo: ConsultlyLogo,
          link: {
            label: "",
            repo: "",
            href: "",
          },
        },

        {
          title: "Chiro Lifestyle Medicine ERP",
          status: "",
          techStack: [
            "ReactJS",
            "NestJS",
            "Kafka",
            "gRPC",
            "MariaDB",
            "MongoDB",
            "Redis",
            "Microservices",
            "GitLab CI",
          ],
          teamSize: 6,
          description:
            "ERP system for a specialized clinic focused on spine, neurological, and musculoskeletal care, managing the end-to-end patient workflow, inventory, invoicing, and CRM.",
          tasks: [
            "Developed core clinic service: appointment booking, treatment planning, and patient care workflows.",
            "Built POS and invoicing system integrated with VNPT/MISA e-invoicing APIs.",
            "Implemented inventory management aligned with POS workflows for stock tracking and replenishment.",
            "Developed CRM module supporting patient engagement and marketing campaigns.",
            "Built high-throughput notification system (ZNS/Email) using Kafka (~10k concurrent messages).",
            // "Maintained CI/CD pipelines using GitLab Runner.",
          ],
          logo: ConsultlyLogo,
          link: {
            label: "",
            repo: "",
            href: "",
          },
        },
        {
          title: "ZooDoo ERP",
          techStack: [
            "Spring Boot",
            "NestJS",
            "MariaDB",
            "Redis",
            "gRPC",
            "Microservices",
          ],
          teamSize: 6,
          description:
            "ERP system for zoo management, supporting operational workflows, asset management, and facility tracking.",
          tasks: [
            "Implemented asset management system covering full lifecycle: procurement, allocation, maintenance, depreciation, and decommissioning.",
            "Designed asset tracking workflows across departments and branches, including assignment, transfer, and auditing.",
            "Developed asset depreciation and maintenance scheduling logic for lifecycle cost tracking and operational planning.",
          ],
        },
        {
          title: "Supplier System (F&B Ecosystem)",
          status: "",
          techStack: [
            "Spring Boot",
            "NestJS",
            "Redis",
            "gRPC",
            "MariaDB",
            "SingleStore",
            "Microservices",
          ],
          teamSize: 6,
          description:
            "A supply chain management system focused on streamlining logistics between suppliers and restaurant owners.",
          tasks: [
            "Sales & Logistics: Developed order grouping logic based on delivery constraints to optimize supply chain flows and ensure accurate raw material distribution.",
            "Report: Implemented reporting module for sales, revenue, customer analytics, and material consumption with data aggregation and visualization.",
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
          teamSize: 10,
          description:
            "A digital logistics platform that connects freight forwarders with shipping suppliers, enabling efficient search, comparison, and booking of air and sea freight routes across global markets.",
          tasks: [
            "Built user management and supplier onboarding system with role-based access and tiered subscription plans.",
            "Developed ElasticSearch-powered freight search engine with multi-criteria filtering.",
            "Implemented complex freight data management for air and sea shipping routes.",
            "Designed RESTful/gRPC APIs and Kafka-based event streaming for inter-service communication.",
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
    {
      company: "VNPT Cần Thơ",
      link: "",
      badges: ["Intern"],
      title: "Full Stack Developer Intern",
      logo: ParabolLogo,
      start: "05/2023",
      end: "06/2023",
      description:
        "Interned as a full stack developer, building a tech kiosk management web application. Responsible for designing RESTful APIs, database modeling, and developing the frontend. Tech stack includes ExpressJS, MongoDB, and ReactJS.",
      repo: "",
      projects: [
        {
          title: "Tech Kiosk Management System",
          status: "",
          techStack: ["ExpressJS", "MongoDB", "ReactJS"],
          teamSize: 2,
          description:
            "A web-based management system for tech kiosks, supporting product catalog management, inventory tracking, and sales reporting.",
          tasks: [
            "Designed RESTful APIs and database schema for product, inventory, and sales management.",
            "Built ReactJS dashboard for inventory tracking and sales reporting.",
          ],
          logo: ConsultlyLogo,
          link: {
            label: "",
            repo: "",
            href: "",
          },
        },
      ],
    },
  ],
  skills: {
    Backend: [
      "Java",
      "Spring Boot",
      "Node.js",
      "NestJS",
      "Microservices",
      "gRPC",
      "Kafka",
    ],
    Frontend: ["ReactJS", "TypeScript", "JavaScript", "Tailwind CSS", "Tauri"],
    Database: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "SQLite",
      "Redis",
      "Elastic Search",
      "MongoDB",
    ],
    "DevOps & Tools": ["Docker", "Git", "GitLab CI"],
    "Soft Skills": [
      "Team Communication",
      "Research",
      "AI-assisted Development",
    ],
  },
  // references: [
  //   {
  //     name: "Ha Quoc Ngan",
  //     title: "Project Manager",
  //     phone: "0775671927",
  //   },
  // ],
  projects: [],
} as const;
