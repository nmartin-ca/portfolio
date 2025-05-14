import { HackathonCard } from "@/components/hackathon-card";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<section id="hero">
				<div className="mx-auto w-full max-w-2xl space-y-8">
					<div className="gap-2 flex justify-between">
						<div className="flex-col flex flex-1">
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className="text-3xl font-semibold tracking-tighter"
								yOffset={8}
								text={DATA.name}
							/>
							<BlurFade>
								<AnimatedShinyText className="max-w-md">
									{DATA.jobTitle}
								</AnimatedShinyText>
							</BlurFade>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<div className="relative">
								<Avatar className="size-24 border">
									<AvatarImage alt={DATA.name} src={DATA.avatarUrl}/>
									<AvatarFallback>{DATA.initials}</AvatarFallback>
								</Avatar>
								{/* Overlay the opentowork image in the bottom right corner */}
								<div className="absolute bottom-0 right-0 size-24 transform pointer-events-none">
									<Image
										src="https://s3.nmartin.ca/assets/opentowork.png"
										alt="#opentowork"
										width={512}
										height={512}
										className="rounded-full w-full h-full object-cover"
										unoptimized
										loading="lazy"
									/>
								</div>
							</div>
						</BlurFade>
					</div>
				</div>
			</section>
			<section id="about">
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<h2 className="text-xl font-semibold mb-2">About</h2>
				</BlurFade>
				<BlurFade delay={BLUR_FADE_DELAY * 4}>
					<Markdown className="prose max-w-full text-pretty font-sans text-muted-foreground dark:prose-invert">
						{DATA.summary}
					</Markdown>
				</BlurFade>
			</section>
			<section id="work">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<h2 className="text-xl font-semibold">Work Experience</h2>
					</BlurFade>
					{DATA.work.map((work, id) => (
						<BlurFade
							key={work.company}
							delay={BLUR_FADE_DELAY * 6 + id * 0.05}
						>
							<ResumeCard
								key={work.company}
								logoUrl={work.logoUrl}
								altText={work.company}
								title={work.company}
								subtitle={work.title}
								href={work.href}
								badges={work.badges}
								period={`${work.start} - ${work.end ?? "Present"}`}
								description={work.description}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			<section id="education">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<h2 className="text-xl font-bold">Education</h2>
					</BlurFade>
					{DATA.education.map((education, id) => (
						<BlurFade
							key={education.school}
							delay={BLUR_FADE_DELAY * 8 + id * 0.05}
						>
							<ResumeCard
								key={education.school}
								href={education.href}
								logoUrl={education.logoUrl}
								altText={education.school}
								title={education.school}
								subtitle={education.degree}
								period={`${education.start} - ${education.end}`}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			<section id="skills">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="text-xl font-bold">Skills</h2>
					</BlurFade>
					<div className="flex flex-wrap gap-2">
						{DATA.skills.map((skill, id) => (
							<BlurFade
								key={`skill-fade-${skill.label}`}
								delay={BLUR_FADE_DELAY * 10 + id * 0.05}
							>
								<Badge
									key={`skill-${skill.label}`}
									className="text-sm py-2 px-4 italic rounded-lg bg-primary-foreground/80 text-primary min-w-fit text-center flex items-center space-x-2 flex-1 justify-center"
								>
									<div className="flex items-center justify-center object-contain w-4 h-4">
										<skill.icon className="text-primary" />
									</div>
									<span className="text-primary">{skill.label}</span>
								</Badge>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="projects">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									My Projects
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Check out my latest work
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									I&apos;ve worked on a variety of projects, from simple
									websites to complex web applications. Here are a few of my
									favorites.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className={`grid gap-4 mx-auto w-full ${DATA.projects.length <= 2 ? 'max-w-3xl grid-cols-1' : 'max-w-[800px] grid-cols-1 sm:grid-cols-2'}`}>
						{DATA.projects.map((project, id) => (
							<BlurFade
								key={project.title}
								delay={BLUR_FADE_DELAY * 12 + id * 0.05}
							>
								<ProjectCard
									href={project.href}
									key={project.title}
									title={project.title}
									description={project.description}
									dates={project.dates}
									tags={project.technologies}
									image={project.image}
									video={project.video}
									links={project.links}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			{/* <section id="contact">
				<div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 16}>
						<div className="space-y-3">
							<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								Contact
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Get in Touch
							</h2>
							<p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
						</div>
					</BlurFade>
				</div>
			</section> */}
		</main>
	);
}
