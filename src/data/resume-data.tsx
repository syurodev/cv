import { FacebookIcon, GitHubIcon } from "@/components/icons";
import { ConsultlyLogo, ParabolLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Pham Tuan Vu",
  initials: "Syuro",
  location: "Ho Chi Minh City",
  locationLink: "https://maps.app.goo.gl/quhDCmgYQCQJg6M16",
  about:
    "Backend Developer with nearly 3 years of experience in designing and building scalable backend systems and microservices architectures. Proficient in Java, Spring Boot, Node.js, NestJS, and event-driven systems with Kafka and gRPC. Experienced with PostgreSQL, MySQL, MongoDB, Redis, and Elasticsearch. Skilled in API design, business logic implementation, and CI/CD workflows using Docker and Git. Passionate about leveraging AI-assisted tools to boost productivity and code quality.",
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
      company: "OVERATE-VNTECH COMPANY / OHQ Software",
      link: "https://vn.linkedin.com/company/ohq-software-vietnam",
      badges: ["Backend Developer"],
      title: "Backend Developer",
      logo: ParabolLogo,
      start: "07/2023",
      end: "Present",
      description:
        "Designed and developed backend systems for restaurant business operations and outsourcing projects. Worked in Agile/Scrum teams, participating in sprint planning, code reviews, and technical discussions. Responsible for system architecture design, API development, database optimization, and CI/CD pipeline setup. Tech stack includes NodeJS, NestJS, Java, Spring Boot, gRPC, Kafka, Redis, ElasticSearch, MongoDB, MariaDB, SingleStore, and Docker.",
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
            "A comprehensive ERP system for a wedding banquet restaurant chain, covering the full business lifecycle including contract management, event coordination, procurement, inventory control, and human resources.",
          tasks: [
            "Designed and built the HR module from scratch: employee profiles, organizational structure, department and position management with role-based access control",
            "Implemented attendance tracking system with multiple check-in methods (fingerprint machine, mobile app) and automated overtime calculation",
            "Developed payroll engine with configurable salary formulas, tax deductions, insurance contributions, and monthly payslip generation",
            "Built multi-level approval workflow for procurement requests with configurable approval chains based on purchase amount and department hierarchy",
            "Designed the full inventory module covering the material lifecycle: purchase orders, goods receiving, quality inspection, stock-in/stock-out, and inter-branch transfers",
            "Implemented real-time stock monitoring with low-stock alerts and automated reorder suggestions based on historical consumption data",
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
            "A full-featured ERP system for a chain of aesthetic clinics, managing the end-to-end patient journey from booking to treatment, along with inventory management, invoicing, and customer relationship management.",
          tasks: [
            "Designed and developed the core clinic service: appointment booking, treatment scheduling, patient reception, and end-to-end patient care workflow management",
            "Built treatment plan module with multi-session scheduling, doctor assignment, and progress tracking across clinic branches",
            "Integrated VNPT and MISA e-invoicing APIs for automated invoice generation, ensuring compliance with Vietnamese tax regulations",
            "Developed CRM module with marketing campaign management, customer segmentation, and loyalty program tracking",
            "Built high-throughput notification system supporting automated ZNS and Email campaigns, capable of handling peak loads of ~10,000 messages concurrently using Kafka-based message queuing",
            "Implemented inventory management for clinic supplies and pharmaceutical products with batch tracking and expiry date monitoring",
            "Set up and maintained full CI/CD pipeline using GitLab Runner with automated testing, Docker image building, and deployment for the entire microservices project",
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
            "Built user management system with JWT-based authentication, role-based authorization, and tiered subscription plans for forwarders and suppliers",
            "Developed freight and route search engine powered by ElasticSearch, supporting multi-criteria filtering (origin, destination, carrier, transit time, price) with real-time indexing of shipping data",
            "Designed and implemented complex freight data management for both air and sea shipping: rate cards, surcharges, container types, transit schedules, and carrier contracts",
            "Built supplier onboarding and profile management module with document verification and approval workflow",
            "Developed notification and alert system for rate updates, booking confirmations, and shipment status changes via Kafka event streaming",
            "Designed RESTful and gRPC APIs for inter-service communication across the microservices architecture, ensuring high availability and low latency",
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
  references: [
    {
      name: "Ha Quoc Ngan",
      title: "Project Manager",
      phone: "0775671927",
    },
  ],
  projects: [],
} as const;
