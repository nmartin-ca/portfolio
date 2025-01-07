import { ScrambleText } from "@/components/scramble-text"
import AgeFromDate from "@/lib/age"
import { MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Nolan Martin" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          British Columbia, Canada
        </div>
        {/* <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          co-founder and cto @ leapflow
        </div> */}
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        I&apos;m a {AgeFromDate(new Date(2004, 6, 13))} year old self-taught
        developer / sysadmin from Canada. I enjoy solving problems and find the
        challenge fun. I prefer working with safe languages, like TypeScript, however I am able to work on non type-safe if required.
        If I have time, I&apos;m also interested in other areas of technology, like networking and cybersecurity.
      </p>
    </header>
  )
}
