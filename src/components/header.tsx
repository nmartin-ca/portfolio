import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"
import { basicInfo } from "@/lib/data"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text={basicInfo.name} />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {basicInfo.location}
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          {basicInfo.title}
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        {basicInfo.about}
      </p>
    </header>
  )
}
