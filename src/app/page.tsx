import { Header } from "@/components/header"
import { SectionList } from "@/components/section-list"
import { LinksSection } from "@/components/links-section"
import { education, projects, tech, work } from "@/lib/data"

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList title="work" items={work} />
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
        description="This is a list of the technologies I know, with my proficiency level next to them"
      />
      {/* <BlogSection /> Currently disabled due to cf pages not supporting ssr (easily) */}
      <LinksSection />
    </>
  )
}
