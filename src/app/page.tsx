import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { workExperience, projects, education, tech } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={workExperience} />
      <SectionList title="education" items={education} />
      <SectionList
        title="projects"
        items={projects}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
      <SectionList
        title="tech stack"
        items={tech}
        description="this is a list of the technologies i know, with my proficiency level next to them"
      />
      <BlogSection />
      <LinksSection />
    </>
  )
}
