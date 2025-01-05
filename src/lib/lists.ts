import { Project } from "@/components/project-card"
import { Item } from "@/components/section-list"

export const work: Item[] = [
  {
    title: "socl.gg",
    role: "full-stack developer [contractor]",
    period: "feb 2024 - present",
    description:
      "Socl.gg is a platform for creating and sharing biolinks. We currently serve over 200 users.\
      I work on the backend & frontend of the platform, written in TypeScript, using Next.js, Prisma, and PostgreSQL.\
      This project requires me to write scalable and performant code, as well as to work with a large codebase.",
    href: "https://socl.gg",
  },
  {
    title: "Noratek Solutions",
    role: "IT Assistant",
    period: "july 2022 - aug 2022",
    description:
      "Noratek Solutions offers a broad portfolio of IT services for small and medium businesses as well as large corporate organizations.\
    As an IT Assistant, I answered help-desk tickets and provided remote technical support for over 100 clients. I developed PowerShell scripts\
    to enhance security and automate repetitive tasks, while also building and repairing client computers. Additionally, I engineered and\
    implemented network infrastructure solutions for clients. I left Noratek to continue my education at the College of New Caledonia.",
  },
]

export const tech: Item[] = [
  {
    title: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    href: "https://www.typescriptlang.org/",
    proficiency: {
      level: 5,
      description:
        "I'm proficient with TypeScript and can write clean, maintainable code.",
    },
  },
  {
    title: "Next.js",
    description:
      "Next.js is a React framework for server-side rendering and static site generation.",
    href: "https://nextjs.org/",
    proficiency: {
      level: 5,
      description:
        "I'm proficient with Next.js and can build fast, SEO-friendly websites.",
    },
  },
  {
    title: "TailwindCSS",
    description:
      "TailwindCSS is a utility-first CSS framework for rapidly building custom designs.",
    href: "https://tailwindcss.com/",
    proficiency: {
      level: 5,
      description:
        "I'm proficient with TailwindCSS and can create beautiful, responsive designs.",
    },
  },
  {
    title: "Git",
    description:
      "Git is a distributed version control system for tracking changes in source code during software development.",
    href: "https://git-scm.com/",
    proficiency: {
      level: 5,
      description:
        "I'm proficient with Git and can manage my codebase effectively.",
    },
  },
  {
    title: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open-source object-relational database system.",
    href: "https://www.postgresql.org/",
    proficiency: {
      level: 4,
      description:
        "I'm familiar with PostgreSQL and can efficiently manage my database. I use it for my personal projects and for my work projects.",
    },
  },
  {
    title: "Docker",
    description:
      "Docker is a platform for developing, shipping, and running applications.",
    href: "https://www.docker.com/",
    proficiency: {
      level: 4,
      description:
        "I'm familiar with Docker and can efficiently manage my application deployments. I use it whenever possible for my work projects.",
    },
  },
  {
    title: "Linux",
    description:
      "Linux is a family of open-source Unix-like operating systems.",
    href: "https://en.wikipedia.org/wiki/Linux",
    proficiency: {
      level: 5,
      description:
        "I'm proficient with Linux and can manage my server efficiently. I dual-boot with Windows and use it for my personal projects and for my work projects.",
    },
  },
  {
    title: "Vue",
    description:
      "Vue is a progressive JavaScript framework for building user interfaces.",
    href: "https://vuejs.org/",
    proficiency: {
      level: 2,
      description:
        "I have some experience with Vue and can build simple web applications.",
    },
  },
  {
    title: "Astro",
    description:
      "Astro is a new kind of static site generator for building websites.",
    href: "https://astro.build/",
    proficiency: {
      level: 1,
      description:
        "I have little experience with Astro and can build simple websites.",
    },
  },
]

export const education: Item[] = [
  {
    title: "College of New Caledonia",
    role: "Computer Network Electronic Technician",
    period: "2022 - 2023",
    description:
      "I attended the Computer Network Electronic Technician program at College of New Caledonia from 2022 until 2023.\
      This program is a 1 year certificate course that teaches about networking, cybersecurity, and general computers.\
      In this program I was trained on the following certificates: CompTIA A+, CompTIA Network+, CompTIA Security+, Cisco CCNA, and Customer Service.\
      I finished the program with a 4.0 GPA.",
  },
  {
    title: "High School",
    role: "Web Development",
    period: "2018 - 2022",
    description:
      "In high school, I tried to focus on the little amount of technology courses available to me. I took Electronics & Robotics for 2 years, and Web Development for 1 year.",
  },
]

export const projects: Project[] = [
  {
    title: "socl.gg",
    role: "full-stack developer [contractor]",
    period: "feb 2024 - present",
    description: "biolink platform serving over 200 users",
    href: "https://socl.gg",
    achievements: [
      "Developed an API from scratch using Fastify for the platform, which allows users to create and share biolinks.",
      "Implemented a custom authentication system using JSON Web Tokens (JWT) for user authentication.",
      "Designed and implemented a custom database schema for the platform, which allows for efficient storage and retrieval of biolinks.",
    ],
    technologies: ["TypeScript", "Fastify", "Next.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "personal website",
    role: "developer",
    period: "2024 - present",
    description: "The site you're looking at right now",
    href: "https://nmartin.ca",
    achievements: [
      "Built the site using Next.js and TailwindCSS, with lucide icons",
      "Deployed the site to Cloudflare Pages",
      "Implemented a custom 404 page using Next.js.",
    ],
    technologies: ["typescript", "Next.js", "TailwindCSS", "Cloudflare"],
    source: "https://github.com/nmartin-ca/portfolio",
  },
]

export const links = [
  { title: "email", href: "mailto:contact@nmartin.ca" },
  { title: "linkedin", href: "https://www.linkedin.com/in/nolan-k-martin" },
  {
    title: "resume",
    href: "https://s3.nmartin.ca/Nolan%20Martin%20-%20Resume.pdf",
  },
]
