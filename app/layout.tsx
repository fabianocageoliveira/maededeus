import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import { Playfair_Display } from "next/font/google"

import "@/app/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Announcement from "@/components/announcement"
import FloatingButtons from "@/components/floating-buttons"
import { WishlistProvider } from "@/hooks/use-wishlist"
import { CartProvider } from "@/hooks/use-cart"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Mãe de Deus | Espaço Católico",
  description: "Artigos religiosos e decorativos para sua casa e família",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, playfair.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <WishlistProvider>
            <CartProvider>
              <Announcement />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <FloatingButtons />
            </CartProvider>
          </WishlistProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'