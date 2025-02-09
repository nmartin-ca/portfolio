import { Project } from "@/components/project-card"
import { Item } from "@/components/section-list"

export const work: Item[] = [
  {
    title: "socl.gg",
    role: "chief technology officer [contractor]",
    period: "feb 2024 - present",
    description:
      "Socl.gg is a platform for creating and sharing biolinks. We currently serve over 200 users.\
      I work on the backend & frontend of the platform, written in TypeScript, using Next.js, Prisma, and PostgreSQL.\
      This project requires me to write scalable and performant code, as well as to work with a large codebase.",
    href: "https://socl.gg",
  },
  {
    title: "Noratek Solutions",
    role: "it assistant [internship]",
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
      "I'm proficient with TypeScript and can write clean, maintainable code. I use it for (almost) every project I work on",
    href: "https://www.typescriptlang.org/",
    proficiency: 5,
  },
  {
    title: "Next.js",
    description:
      "I'm proficient with Next.js and can build fast, SEO-friendly websites. I try to use it for every frontend project I work on, but I am also comfortable with plain React",
    href: "https://nextjs.org/",
    proficiency: 5,
  },
  {
    title: "React.js",
    description:
     "Althought I prefer Next.js, I'm also proficient with React.js and can build performant and organized web applications.",
     href: "https://reactjs.org/",
     proficiency: 4,
  },
  {
    title: "TailwindCSS",
    description:
      "I'm proficient with TailwindCSS and can create beautiful, responsive designs. I try to use it for every frontend project I work on",
    href: "https://tailwindcss.com/",
    proficiency: 5,
  },
  {
    title: "Git",
    description:
      "I'm proficient with Git and can manage my codebase effectively.",
    href: "https://git-scm.com/",
    proficiency: 5,
  },
  {
    title: "PostgreSQL",
    description:
      "I'm familiar with PostgreSQL and can efficiently manage my database. I use it for my personal projects and for my work projects that require a database",
    href: "https://www.postgresql.org/",
    proficiency: 4,
  },
  {
    title: "Docker",
    description:
      "I'm familiar with Docker and can efficiently manage my application deployments. I try to use it whenever possible for my work projects.",
    href: "https://www.docker.com/",
    proficiency: 4,
  },
  {
    title: "Linux",
    description:
      "I'm proficient with Linux and can manage my server efficiently. I dual-boot with Windows and use it for my personal projects and for my work projects.",
    href: "https://en.wikipedia.org/wiki/Linux",
    proficiency: 5,
  },
  {
    title: "Vue",
    description:
      "Vue is a progressive JavaScript framework for building user interfaces. \
      I have some experience with Vue and can build simple web applications.",
    href: "https://vuejs.org/",
    proficiency: 2,
  },
  {
    title: "Astro",
    description:
      "Astro is a new kind of static site generator for building websites. \
      I have little experience with Astro and can build simple websites.",
    href: "https://astro.build/",
    proficiency: 1,
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
    title: "dromi.app",
    period: "feb 2025 - present",
    description: "open-source workspace where your tasks and ideas unite effortlessly.",
    href: "https://github.com/dromiapp/dromi",
    achievements: [
      "Developing a full-stack web application using TypeScript, Next.js, TailwindCSS, and ElysiaJS",
      "Built an authentication system that follows The Copenhagen Book guidelines",
    ],
    technologies: ["TypeScript", "Next.js", "ElysiaJS", "TailwindCSS", "Turborepo"],
    source: "https://github.com/dromiapp/dromi",
  },
  // {
  //   title: "socl.gg",
  //   role: "full-stack developer [contractor]",
  //   period: "feb 2024 - present",
  //   description: "biolink platform serving over 200 users",
  //   href: "https://socl.gg",
  //   achievements: [
  //     "Developed an API from scratch using Fastify for the platform, which allows users to create and share biolinks.",
  //     "Implemented a custom authentication system using JSON Web Tokens (JWT) for user authentication.",
  //     "Designed and implemented a custom database schema for the platform, which allows for efficient storage and retrieval of biolinks.",
  //   ],
  //   technologies: ["TypeScript", "Fastify", "Next.js", "Prisma", "PostgreSQL"],
  // },
  {
    title: "personal website",
    period: "jan 2024 - present",
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
