import type { Metadata } from 'next'
import { Archivo, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { HudBackground } from '@/components/hud-background'
import { HudOverlay } from '@/components/hud-overlay'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Soham Ganguly | Sovereign Intelligence',
  description: 'Lead Architect of Sovereign Intelligence',
  icons: {
    icon: '/favicon.ico',
  },
}

import { JarvisConsole } from '@/components/jarvis-console'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-sans antialiased text-white selection:bg-hud-cyan selection:text-black`}>
        <HudBackground />
        <HudOverlay />
        {children}
        <JarvisConsole />
      </body>
    </html>
  )
}
