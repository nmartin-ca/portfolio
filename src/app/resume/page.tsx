import { links } from "@/lib/lists"
import { redirect } from "next/navigation"

export default function ResumePage() {
  const resumeLink = links.find(link => link.title === "resume")
  if (!resumeLink) {
    console.error("resume link not found, returning to home")
    redirect("/")
  }
  redirect(resumeLink.href)
}