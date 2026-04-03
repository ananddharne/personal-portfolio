import type { Metadata } from 'next'
import { Fraunces, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { themeScript } from '@/lib/theme'
import { Nav } from '@/components/nav/Nav'
import { LenisProvider } from '@/components/providers/LenisProvider'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anand Dharne — Software Engineer',
  description: 'Software engineer building thoughtful products. Open to new roles.',
  openGraph: {
    title: 'Anand Dharne — Software Engineer',
    description: 'Software engineer building thoughtful products. Open to new roles.',
    siteName: 'Anand Dharne',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anand Dharne — Software Engineer',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${fraunces.variable} ${dmSans.variable} ${jetbrains.variable}`}>
        <LenisProvider>
          <Nav />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
