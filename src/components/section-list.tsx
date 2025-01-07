import Link from "next/link"
import { ArrowUpRight, StarIcon } from "lucide-react"

export type Item = {
  title: string
  href?: string
  role?: string
  period?: string
  description: string
  proficiency?: 1 | 2 | 3 | 4 | 5
}

type SectionListProps = {
  title: string
  description?: string
  items: Item[]
  viewAllHref?: string
  viewAllText?: string
}

function ProficiencyStars({ item }: { item: Item }) {
  return (
    <span className="flex items-center cursor-help">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={`${item.title}-proficiency-${i}`}
          size={14}
          className={
            i < item.proficiency!
              ? "fill-accent stroke-accent"
              : "stroke-gray-600"
          }
        />
      ))}
    </span>
  )
}

export function SectionList({
  title,
  description,
  items,
  viewAllHref,
  viewAllText,
}: SectionListProps) {
  const isLongList = items.length > 3

  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> {title}
      </h2>

      {description && (
        <p className="leading-relaxed animate-fade-in-up mb-6">{description}</p>
      )}

      <div className="space-y-8">
        {items.map((item) => (
          <div key={item.title} className="group">
            {item.href ? (
              <Link href={item.href} target="_blank">
                <div className="group-hover:cursor-pointer">
                  <h3
                    className={`font-semibold mb-1 text-white group-hover:text-accent transition-colors duration-200 ${
                      isLongList ? "text-lg" : "text-xl"
                    } flex items-center gap-2`}
                  >
                    {item.title}
                    {item.proficiency && (
                      <p className="has-tooltip">
                        <ProficiencyStars item={item} />
                        <span className="tooltip">Proficiency Level</span>
                      </p>
                    )}
                  </h3>
                  {item.role && (
                    <p
                      className={`text-gray-400 mb-2 ${
                        isLongList ? "text-xs" : "text-sm"
                      }`}
                    >
                      {item.role} {item.period && `(${item.period})`}
                    </p>
                  )}
                  <p className={`text-gray-300 ${isLongList ? "text-sm" : ""}`}>
                    {item.description}
                  </p>
                </div>
              </Link>
            ) : (
              <div>
                <h3
                  className={`font-semibold mb-1 text-white ${
                    isLongList ? "text-lg" : "text-xl"
                  } flex items-center gap-2`}
                >
                  {item.title}
                  {item.proficiency && (
                    <p className="has-tooltip">
                      <ProficiencyStars item={item} />
                      <span className="tooltip">Proficiency Level</span>
                    </p>
                  )}
                </h3>
                {item.role && (
                  <p
                    className={`text-gray-400 mb-2 ${
                      isLongList ? "text-xs" : "text-sm"
                    }`}
                  >
                    {item.role} {item.period && `(${item.period})`}
                  </p>
                )}
                <p className={`text-gray-300 ${isLongList ? "text-sm" : ""}`}>
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 mt-6 text-accent hover:underline group"
        >
          {viewAllText}{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      )}
    </section>
  )
}
