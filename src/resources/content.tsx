import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nolan",
  lastName: "Martin",
  employed: false,
  role: "Full Stack Developer",
  avatar: "https://s3.nmartin.ca/assets/avatar.png",
  email: "contact@nmartin.ca",
  location: "British Columbia, Canada",
  timeZone: "America/Vancouver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
  resume: "https://s3.nmartin.ca/Nolan Martin - Resume.pdf",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/nmartin-ca",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nolan-k-martin/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Resume",
    icon: "resume",
    link: "https://s3.nmartin.ca/Nolan Martin - Resume.pdf",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.firstName} ${person.lastName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building better software for the web</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Nolan Martin</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/socl-gg",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.employed ? "" : "freelance"} {person.role}
      {/* {person.employed ? (
        <>
          at{" "}
          <Logo
            dark
            icon="/trademarks/wordmark-dark.svg"
            style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
          />
          , where I craft intuitive
          <br /> user experiences. After hours, I build my own projects.
        </>
      ) : null} */}
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.firstName} ${person.lastName}`,
  description: `Meet ${person.firstName} ${person.lastName}, ${person.employed ? "" : "freelance"} ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a self-taught developer with a passion for building things the right way. I have
        experience in a couple of programming languages and many frameworks, and I am always looking
        to learn new things. I am currently focused on building web applications using React,
        Next.js, and Typescript.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Soclgg LLC",
        timeframe: "Sep. 2023 - May 2025",
        role: "Full Stack Developer",
        achievements: [
          "Built and maintained a full-stack web app serving 200+ active users (TypeScript, Next.js, PostgreSQL)",
          "Engineered scalable backend systems, including a custom fraud-prevention analytics library",
          "Integrated Stripe payments, enabling premium plans and new revenue streams",
          "Optimized database schema, improving query response times by 30% and ensuring data integrity and preventing timeouts",
        ],
        inWorkSection: true,
        workSlug: "socl-gg",
        images: [],
      },
      {
        company: "Confidential Client",
        timeframe: "Jun. 2024 - Dec. 2024",
        role: "Software Engineer",
        achievements: [
          "Developed a multi-account management platform consolidating user access and communication workflows for a SaaS client.",
          "Designed and implemented role-based access control features to securely limit employee permissions within client organizations.",
          "Engineered a custom real-time event notification system and integrated third-party WebSocket services to provide immediate platform updates.",
          "Maintained strict confidentiality in accordance with contractual agreements.",
        ],
        inWorkSection: true,
        workSlug: "confidential-client",
        images: [],
      },
      {
        company: "Noratek Solutions Inc.",
        timeframe: "Jul. 2022 - Aug. 2022",
        role: "IT Assistant",
        achievements: [
          "Provided remote technical support as part of a team serving a client base of over 100 customers",
          "Developed PowerShell scripts to enhance security measures and automate routine tasks",
          "Built and repaired client computers, handling hardware assembly and software setup",
          "Engineered and implemented network infrastructure solutions aligned with client requirements",
        ],
        inWorkSection: false,
        workSlug: "",
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "College of New Caledonia",
        description: (
          <>
            Certificate of Completion in <b>Computer Network Electronics Technician</b>
          </>
        ),
      },
      {
        name: "High School",
        description: <>High School Diploma</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Web Development",
        description: (
          <>Development of scalable web applications with modern frameworks.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Tailwind CSS",
            icon: "tailwindcss",
          },
          {
            name: "Shadcn UI",
            icon: "shadcn",
          }
        ],
        images: [
          {
            src: "/images/projects/socl-gg/cover-01.webp",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/socl-gg/cover-02.webp",
            alt: "Project image",
            width: 16,
            height: 9,
          }
        ],
      },
      {
        title: "Backend Development",
        description: (
          <>Building robust APIs and server-side applications with modern frameworks and databases.</>
        ),
        tags: [
          {
            name: "Elysia",
            icon: "elysia",
          },
          {
            name: "Fastify",
            icon: "fastify",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Prisma ORM",
            icon: "prisma",
          },
          {
            name: "Bun",
            icon: "bun",
          },
        ],
        images: [
          
        ],
      },
      {
        title: "DevOps & Hosting",
        description: (
          <>Deployment, hosting, and infrastructure management for production applications.</>
        ),
        tags: [
          {
            name: "Hetzner",
            icon: "hetzner",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "Bun",
            icon: "bun",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        images: [
          
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.firstName} ${person.lastName} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.firstName} ${person.lastName}`,
  description: `Design and dev projects by ${person.firstName} ${person.lastName}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.firstName} ${person.lastName}`,
  description: `A photo collection by ${person.firstName} ${person.lastName}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
