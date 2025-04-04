import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="space-y-6 text-center">
        <pre className="font-mono text-accent whitespace-pre">
          {`
    :::      :::::::      :::
   :+:      :+:   :+:    :+:
  +:+ +:+   +:+  :+:+   +:+ +:+
 +#+  +:+   +#+ + +:+  +#+  +:+
+#+#+#+#+#+ +#+#  +#+ +#+#+#+#+#+
      #+#   #+#   #+#       #+#
      ###    #######        ###
          `}
        </pre>
        <p className="text-gray-400">
          this page doesn&apos;t exist here
        </p>
        <Link
          href="/"
          className="inline-block text-gray-400 hover:text-accent transition-colors"
        >
          return home
        </Link>
      </div>
    </div>
  )
}
