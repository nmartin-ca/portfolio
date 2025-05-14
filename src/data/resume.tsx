import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon, MailIcon, NotebookIcon } from "lucide-react";
import {
	ReactLight,
	ReactDark,
	GitHubDark,
	GitHubLight,
	LinkedIn,
	Nextjs,
	TypeScript,
	Nodejs,
	PostgreSQL,
	Docker,
} from "@ridemountainpig/svgl-react";

export const DATA = {
	name: "Nolan Martin",
	initials: "NM",
	url: "https://nmartin.ca",
	location: "British Columbia, Canada",
	locationLink: "https://www.google.com/maps/place/vancouver",
	jobTitle: "Full-Stack Developer",
	description: "Self-taught developer, sysadmin, and problem solver.",
	summary:
		"I am a self-taught developer with a passion for building things the right way. I have experience in a couple of programming languages and many frameworks, and I am always looking to learn new things. I am currently focused on building web applications using React, Next.js, and Typescript.",
	avatarUrl: "https://s3.nmartin.ca/assets/avatar.png",
	skills: [
		{
			icon: Icons.react,
			label: "React",
		},
		{
			icon: Icons.nextjs,
			label: "Next.js",
		},
		{
			icon: Icons.typescript,
			label: "Typescript",
		},
		{
			icon: Icons.nodejs,
			label: "Node.js",
		},
		{
			icon: Icons.postgresql,
			label: "Postgres",
		},
		{
			icon: Icons.docker,
			label: "Docker",
		},
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
		// { href: "/projects", icon: NotebookIcon, label: "Projects" },
		{ href: "https://s3.nmartin.ca/Nolan Martin - Resume.pdf", icon: FileTextIcon, label: "Resume" },
	],
	contact: {
		email: "hello@nmartin.ca",
		tel: "",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/nmartin-ca",
				icon: Icons.github,

				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/nolan-k-martin",
				icon: Icons.linkedin,

				navbar: true,
			},
			Email: {
				name: "Email",
				url: "mailto:contact@nmartin.ca",
				icon: MailIcon,
				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Soclgg LLC",
			href: "https://socl.gg",
			badges: [],
			location: "Remote, USA",
			title: "Fullstack Developer",
			logoUrl: "https://s3.nmartin.ca/assets/socl.svg",
			start: "Sep 2023",
			end: "May 2025",
			description: (
				<ul>
					<li>
						Built and maintained a full-stack web app serving 200+ active users
						(TypeScript, Next.js, PostgreSQL)
					</li>
					<li>
						Engineered scalable backend systems, including a custom
						fraud-prevention analytics library
					</li>
					<li>
						Integrated Stripe payments, enabling premium plans and new revenue
						streams
					</li>
					<li>
						Implemented a robust authentication system, ensuring secure access
						to user data
					</li>
					<li>
						Optimized database schema, improving query response times by 30% and
						ensuring data integrity and preventing timeouts
					</li>
				</ul>
			),
		},
		{
			company: "Confidential Client",
			href: undefined,
			badges: [],
			location: "Remote, USA",
			title: "Software Engineer",
			logoUrl: "https://s3.nmartin.ca/assets/confidential-client.png",
			start: "Jun 2024",
			end: "Dec 2024",
			description: (
				<ul>
					<li>
						Developed a multi-account management platform consolidating user
						access and communication workflows for a SaaS client.
					</li>
					<li>
						Designed and implemented role-based access control features to
						securely limit employee permissions within client organizations.
					</li>
					<li>
						Engineered a custom real-time event notification system and
						integrated third-party WebSocket services to provide immediate
						platform updates.
					</li>
					<li>
						Maintained strict confidentiality in accordance with contractual
						agreements.
					</li>
				</ul>
			),
		},
		{
			company: "Noratek Solutions Inc.",
			href: "https://www.noratek.com/",
			badges: ["Internship"],
			location: "British Columbia, Canada",
			title: "IT Assistant",
			logoUrl: "https://s3.nmartin.ca/assets/noratek.png",
			start: "Jul 2022",
			end: "Aug 2022",
			description: (
				<ul>
					<li>
						Provided remote technical support as part of a team serving a client
						base of over 100 customers
					</li>
					<li>
						Developed PowerShell scripts to enhance security measures and
						automate routine tasks
					</li>
					<li>
						Built and repaired client computers, handling hardware assembly and
						software setup
					</li>
					<li>
						Engineered and implemented network infrastructure solutions aligned
						with client requirements
					</li>
				</ul>
			),
		},
	],
	education: [
		{
			school: "College of New Caledonia",
			href: "https://cnc.bc.ca",
			degree: "Certificate, Computer Network Electronics Technician",
			logoUrl: "https://s3.nmartin.ca/assets/cnc.png",
			start: "Sep 2022",
			end: "Jun 2023",
		},
		{
			school: "High School",
			href: "",
			degree: "Diploma, High School",
			logoUrl: "https://s3.nmartin.ca/assets/high-school.png",
			start: "Sep 2018",
			end: "Jun 2022",
		},
	],
	projects: [
		{
			title: "Personal Website",
			href: "https://nmartin.ca",
			dates: "Jan 2024 - Present",
			active: true,
			description:
				"Developed a personal website to showcase my projects and experiences",
			technologies: [
				"Next.js",
				"Typescript",
				"TailwindCSS",
				"Shadcn UI",
				"Vercel",
			],
			links: [
				{
					type: "Website",
					href: "https://nmartin.ca",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "https://s3.nmartin.ca/assets/portfolio@1x.png",
			video: "",
		},
	],
	hackathons: [],
} as const;
