import { ConsultlyLogo, ParabolLogo } from "@/images/logos";
import { FacebookIcon, GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Pham Tuan Vu",
  initials: "Syuro",
  location: "Ho Chi Minh City",
  locationLink: "https://maps.app.goo.gl/quhDCmgYQCQJg6M16",
  about:
    "Full Stack Developer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Developer, I am confident in my ability to take products from the ideation stage to a fully realized solution. Currently, I work mostly with TypeScript, React, Next.js, Node.js, NestJS, MySQL and MongoDB. I am enthusiastic about experimenting with and applying new technologies to continually enhance my skills in the field of web development.",
  avatarUrl: "/Vu1.jpg",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "syuro.dev@outlook.com",
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
    {
      company: "VNPT Can Tho",
      link: "http://cantho.vnpt.vn/",
      badges: ["Intern"],
      title: "Intern Backend Developer",
      logo: ParabolLogo,
      start: "05/2023",
      end: "07/2023",
      description:
        "Design and implement a service management system. Technologies: React.js, Node.js, Express.js, MongoDB.",
      repo: "https://github.com/syurodev/service-manager-server.git",
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
      title: "Chiro",
      status: "",
      techStack: [
        "NodeJS",
        "ReactJS",
        "NestJS",
        "Kafka",
        "gRPC",
        "MariaDB",
        "SQLServer",
        "VNPT Invoice",
        "Docker",
      ],
      description:
        "The system serves the clinic and includes processes for appointment scheduling, consultation procedures, and inventory management.",
      tasks: [
        "Developed the `his-connector` service to facilitate real-time interaction with SQL Server from the Windows application, ensuring seamless data exchange.",
        "Built an advanced booking system for efficient appointment scheduling and patient management.",
        "Integrated VNPT Invoice for automated electronic invoicing, streamlining the clinic's billing processes.",
        "Implemented Zalo authentication for secure user login and verification, enhancing accessibility and security.",
        "Developed both frontend and backend features for campaign creation and ZNS messaging, enabling effective patient communication."
      ],
      logo: ConsultlyLogo,
      link: {
        label: "",
        repo: "",
        href: "",
      },
    },
    {
      title: "DaiHy",
      status: "",
      techStack: ["Java", "Spring Boot", "Kafka", "gRPC", "MariaDB", "Docker"],
      description:
        "A management system for bookings, event scheduling, purchases, inventory, assets, and more for a wedding banquet restaurant.",
      tasks: [
        "Build purchase system for inventory management, allowing purchases based on contracts or request-for-purchase (RFP).",
        "Implement stock intake functionality for incoming materials.",
        "Develop stock issuance system for materials and assets.",
        "Create inventory check features for accurate stock tracking.",
        "Implement portion control for material distribution in dishes.",
        "Develop material and asset quantification system for menu items.",
        "Integrate all inventory-related functions with the purchase and asset management system.",
        "Implement request-for-purchase (RFP) functionality to handle ad-hoc purchasing needs.",
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
      title: "Supplier/Supplier Report",
      status: "",
      techStack: [
        "Java",
        "Spring Boot",
        "NestJS",
        "Kafka",
        "gRPC",
        "MariaDB",
        "SingleStore",
        "ElasticSearch",
        "Docker",
      ],
      description:
        "A system designed for suppliers of ingredients, featuring functions related to inventory management and sales to restaurants.",
      tasks: [
        "Developed and optimized core features such as order management, inventory receiving, inventory dispatching, and reporting.",
        "Implemented ElasticSearch to enable advanced search and filtering capabilities across large datasets.",
        "Integrated Kafka for real-time data streaming and communication between microservices.",
        "Designed and maintained REST and gRPC APIs to ensure seamless communication between services.",
        "Collaborated with the frontend and database teams to deliver end-to-end solutions for supplier operations.",
        "Performed system performance optimization by fine-tuning database queries and leveraging SingleStore for real-time analytics.",
      ],
      logo: "ConsultlyLogo",
      link: {
        label: "Supplier",
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
