import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, FacebookIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Pham Tuan Vu",
  initials: "Syuro",
  location: "Can Tho City",
  locationLink: "https://maps.app.goo.gl/TXd3FsfHqocvC7b67",
  about:
    "Full Stack Developer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Developer, I am confident in my ability to take products from the ideation stage to a fully realized solution. Currently, I work mostly with TypeScript, React, Next.js, Node.js, and MongoDB. I am enthusiastic about experimenting with and applying new technologies to continually enhance my skills in the field of web development.",
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
      end: "2024",
      description: "Here I learned about data structures and algorithms, how to design and build websites with technologies such as HTML, CSS, JS, PHP, MongoDB, mySQL, ..."
    },
  ],
  work: [
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
      repo: "https://github.com/syurodev/service-manager-server.git"
    },
  ],
  skills: [
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Drizzle ORM",
    "Prisma",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "Wibutime",
      status: "Unfinished",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "PostgreSQL",
        "shadcn/ui",
      ],
      description: "A paid platform for watching anime, manga, and light novels with prominent features such as group viewing, automatic payments, and more.",
      tasks: "My responsibilities involved UI/UX design, database design, and application development and deployment.",
      logo: ConsultlyLogo,
      link: {
        label: "wibutime-seven.vercel.app",
        repo: "https://github.com/syurodev/wibutime.git",
        href: "https://wibutime-seven.vercel.app/",
      },
    },
    {
      title: "Ca Mau OCOP",
      status: "",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
      ],
      description: "A platform for buying and selling One Commune One Product (OCOP) items from Cà Mau and promoting tourist destinations. It includes key features such as goods management, invoicing, tour management, product recommendation system...",
      tasks: "My responsibilities involved UI/UX design, database design, and application development and deployment.",
      logo: ConsultlyLogo,
      link: {
        label: "camauocop.vercel.app",
        repo: "https://github.com/syurodev/camauocop.git",
        href: "https://camauocop.vercel.app/",
      },
    },
  ],
} as const;
