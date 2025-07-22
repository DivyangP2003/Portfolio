import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./_components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Divyang Palshetkar - Full-Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Divyang Palshetkar, a passionate full-stack developer and UI/UX designer creating beautiful, functional web experiences.",
  keywords: "web developer, full-stack developer, UI/UX designer, React, Next.js, portfolio",
  authors: [{ name: "Divyang Palshetkar" }],
  openGraph: {
    title: "Divyang Palshetkar - Full-Stack Developer & UI/UX Designer",
    description: "Portfolio showcasing modern web development projects and skills",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
