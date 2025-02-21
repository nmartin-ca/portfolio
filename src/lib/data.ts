import type { Item } from "@/components/section-list";

export type WorkItem = {
	title: string;
	role: string;
	period: string;
	description: string;
	href?: string;
};

export type ProjectItem = {
	title: string;
	description: string;
	achievements: string[];
	technologies: string[];
	href: string;
	period: string;
	source?: string;
};

export type Education = {
	title: string;
	role: string;
	period: string;
	description: string;
};

export type BasicInfo = {
	name: string;
	title: string;
	location: string;
	about: string;
	email: string;
	github: string;
	linkedin: string;
	resume: string;
};

function AgeFromDate(date: Date) {
	const ageDifMs: number = Date.now() - date.getTime();
	const ageDate: Date = new Date(ageDifMs);
	const age: number = ageDate.getUTCFullYear() - 1970;
	return age;
}

export const basicInfo: BasicInfo = {
	name: "Nolan Martin",
	title: "software engineer",
	location: "british columbia, canada",
	about: `i'm a ${AgeFromDate(new Date(2004, 6, 13))} year old self-taught developer / sysadmin from canada. \
  i love technology and exploring new things. if i'm not working on a project, i like to learn about new technologies or play video games.`,
	email: "contact@nmartin.ca",
	github: "https://github.com/nmartin-ca",
	linkedin: "https://linkedin.com/in/nolan-k-martin",
	resume: "https://s3.nmartin.ca/Nolan Martin - Resume.pdf",
};

export const workExperience: WorkItem[] = [
	{
		title: "socl.gg",
		role: "full-stack developer [contractor]",
		period: "feb 2024 - present",
		description:
			"socl.gg is a platform for creating and sharing biolinks. we currently serve over 200 users.\
      i work on the backend & frontend of the platform, written in typescript, using next.js, prisma, and postgresql.\
      this project requires me to write scalable and performant code, as well as to work with a large codebase.",
		href: "https://socl.gg",
	},
	{
		title: "noratek solutions",
		role: "it assistant [internship]",
		period: "july 2022 - aug 2022",
		description:
			"noratek solutions offers a broad portfolio of it services for small and medium businesses as well as large corporate organizations.\
    as an it assistant, i answered help-desk tickets and provided remote technical support for over 100 clients. i developed powershell scripts\
    to enhance security and automate repetitive tasks, while also building and repairing client computers. additionally, i engineered and\
    implemented network infrastructure solutions for clients. i left noratek to continue my education at the college of new caledonia.",
	},
];

export enum backendTechnologies {
  elysiajs = "elysiajs",
  fastify = "fastify",
  postgresql = "postgresql",
  prisma = "prisma",
}

export enum frontendTechnologies {
  tailwindcss = "tailwindcss",
  nextjs = "next.js",
  reactjs = "react.js",
}

export enum generalTechnologies {
  turborepo = "turborepo",
  docker = "docker",
  linux = "linux",
  git = "git",
  typescript = "typescript",
}

export type AllTechnologies = {
  [K in keyof typeof backendTechnologies | keyof typeof frontendTechnologies | keyof typeof generalTechnologies]: string;
};

export const technologies: AllTechnologies = {
  ...backendTechnologies,
  ...frontendTechnologies,
  ...generalTechnologies,
} as const;

export const projects: ProjectItem[] = [
	{
		title: "dromi.app",
		period: "feb 2025 - present",
		description:
			"open-source workspace where your tasks and ideas unite effortlessly.",
		href: "https://github.com/dromiapp/dromi",
		achievements: [
			"developing a full-stack web application using typescript, next.js, tailwindcss, and elysiajs",
			"built an authentication system that follows the cph book guidelines",
		],
		technologies: [
			technologies.typescript,

			technologies.nextjs,
			technologies.tailwindcss,

      technologies.elysiajs,
      technologies.prisma,
      technologies.postgresql,

      technologies.git,
			technologies.turborepo,
		],
		source: "https://github.com/dromiapp/dromi",
	},
	{
		title: "personal website",
		period: "jan 2024 - present",
		description: "The site you're looking at right now",
		href: "https://nmartin.ca",
		achievements: [
			"built the site using next.js and tailwindcss, with lucide icons",
			"deployed the site to vercel",
			"implemented a custom 404 page using next.js.",
		],
		technologies: [
      technologies.typescript,

      technologies.nextjs,
      technologies.tailwindcss,

      technologies.fastify,
      technologies.prisma,

      technologies.git,
      technologies.postgresql,
    ],
		source: "https://github.com/nmartin-ca/portfolio",
	},
];

export const education: Education[] = [
	{
		title: "college of new caledonia",
		role: "computer network technician",
		period: "sep. 2022 - jun. 2023",
		description:
			"i attended the computer network technician program at college of new caledonia from 2022 until 2023.\
      this program is a 1 year certificate course that teaches about networking, cybersecurity, and general computers.\
      in this program i was trained on the following certificates: comptia a+, comptia network+, comptia security+, cisco ccna, and customer service.\
      i finished the program with a 4.0 gpa.",
	},
	{
		title: "High School",
		role: "Web Development",
		period: "sep. 2018 - jun. 2022",
		description:
			"in high school, i tried to focus on the little amount of technology courses available to me. \
      i took electronics & robotics for 2 years, and web development for 1 year.",
	},
];

export const tech: Item[] = [
  {
    title: "typescript",
    description:
      "i'm proficient with typescript and can write clean, maintainable code. i use it for (almost) every project i work on",
    href: "https://www.typescriptlang.org/",
    proficiency: 5,
  },
  {
    title: "next.js",
    description:
      "i'm proficient with next.js and can build fast, SEO-friendly websites. i try to use it for every frontend project i work on, but i am also comfortable with plain react",
    href: "https://nextjs.org/",
    proficiency: 5,
  },
  {
    title: "react.js",
    description:
     "although i prefer next.js, i'm also proficient with react.js and can build performant and organized web applications.",
     href: "https://reactjs.org/",
     proficiency: 5,
  },
  {
    title: "tailwindcss",
    description:
      "i'm proficient with tailwindcss and can create beautiful, responsive designs. i try to use it for every frontend project i work on",
    href: "https://tailwindcss.com/",
    proficiency: 5,
  },
  {
    title: "git",
    description:
      "i'm proficient with git and can manage my codebase effectively.",
    href: "https://git-scm.com/",
    proficiency: 5,
  },
  {
    title: "postgresql",
    description:
      "i'm familiar with postgresql and can efficiently manage my database. i use it for my personal projects and for my work projects that require a database",
    href: "https://www.postgresql.org/",
    proficiency: 4,
  },
  {
    title: "docker",
    description:
      "i'm familiar with docker and can efficiently manage my application deployments. i try to use it whenever possible for my work projects.",
    href: "https://www.docker.com/",
    proficiency: 4,
  },
  {
    title: "linux",
    description:
      "i'm proficient with linux and can manage my server efficiently. i dual-boot with windows and use it for my personal projects and for my work projects.",
    href: "https://en.wikipedia.org/wiki/Linux",
    proficiency: 5,
  },
]