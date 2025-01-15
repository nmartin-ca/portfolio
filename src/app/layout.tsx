import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nmartin.ca"),
  title: {
    default: "Nolan Martin",
    template: "%s | Nolan Martin",
  },
  description: "Self-taught developer, sysadmin, and problem solver.",
  openGraph: {
    title: "Nolan Martin",
    description: "Self-taught developer, sysadmin, and problem solver.",
    url: "https://nmartin.ca",
    siteName: "Nolan Martin",
    locale: "en_CA",
    type: "website",
    images: ["https://nmartin.ca/og/home"],
  },
  robots: {
    index: true,
    follow: false,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://a.nmartin.ca/script.js"
          data-website-id="060810ca-b696-4cf1-b248-5ed87bf3b3a8"
        />
      </head>
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
