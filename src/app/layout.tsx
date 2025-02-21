import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"
import { basicInfo } from "@/lib/data"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nmartin.ca"),
  title: {
    default: `${basicInfo.name}`,
    template: `%s | ${basicInfo.name}`,
  },
  description: "Self-taught developer / sysadmin from Canada.",
  openGraph: {
    title: `${basicInfo.name}`,
    description: "Self-taught developer / sysadmin from Canada.",
    url: "https://www.nmartin.ca",
    siteName: `${basicInfo.name}`,
    locale: "en_US",
    type: "website",
    images: ["https://www.nmartin.ca/og/home"],
  },
  robots: {
    index: true,
    follow: true,
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
