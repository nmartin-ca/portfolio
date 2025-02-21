import Link from "next/link"
import { basicInfo } from "@/lib/data"

const links = [
  { title: "email", href: `mailto:${basicInfo.email}` },
  { title: "github", href: basicInfo.github },
  { title: "linkedin", href: basicInfo.linkedin },
]

export function LinksSection() {
  return (
    <section className="animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> links
      </h2>
      <div className="flex flex-wrap gap-4 text-sm">
        {links.map((link, index) => (
          <Link
            key={`${link.title}-${index}`}
            href={link.href}
            target="_blank"
            className="text-gray-400 hover:text-accent transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
