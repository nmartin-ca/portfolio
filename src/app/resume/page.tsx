"use client"

import { links } from "@/lib/lists"
import Link from "next/link"
import { useEffect } from "react"

export default function ResumePage() {
  const resumeLink = links.find(link => link.title === "resume")

  useEffect(() => {
    if (resumeLink) {
      window.location.href = resumeLink.href
    }
  }, [resumeLink])

  return (
    <div className="flex items-center justify-center">
      <div className="space-y-6 text-center">
        <pre className="font-mono text-accent whitespace-pre">
          {`
::::::::   :::::::    :::
:+:    :+: :+:   :+: :+:+:
       +:+ +:+  :+:+   +:+
    +#++:  +#+ + +:+   +#+
       +#+ +#+#  +#+   +#+
#+#    #+# #+#   #+#   #+#
 ########   #######  #######
          `}
        </pre>
        <p className="text-gray-400 text-sm ">
          {
            resumeLink ? "redirecting to resume..." : "resume link not found... oops"
          }
        </p>
        {
          resumeLink ? (
            <Link
              href={resumeLink.href}
              className="inline-block text-gray-400 hover:text-accent transition-colors"
            >
              not loading? click here
            </Link>
          ) : (
            <Link
              href="/"
              className="inline-block text-gray-400 hover:text-accent transition-colors"
            >
              return home
            </Link>
          )
        }
      </div>
    </div>
  )
}