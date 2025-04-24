import type React from "react"
import { Poppins , Inter} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({ subsets: ["latin"], weight:["400" , "700", "600"] })

export const metadata = {
  title: "LBM Formations - Centre de formation professionnelle",
  description:
    "LBM Formations propose des formations professionnelles dans les domaines du management d'entreprise, de l'entrepreneuriat et de l'accompagnement.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
