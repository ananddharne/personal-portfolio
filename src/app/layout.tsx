import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import dynamic from 'next/dynamic'
import { themeScript } from '@/lib/theme'
import { Nav } from '@/components/nav/Nav'
import { LenisProvider } from '@/components/providers/LenisProvider'
import './globals.css'

const ChatWidget = dynamic(
  () => import('@/components/chat/ChatWidget').then(m => ({ default: m.ChatWidget })),
  { ssr: false }
)

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '700'],
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
      <body className={`${inter.variable} ${lora.variable}`}>
        <LenisProvider>
          <Nav />
          {children}
          <ChatWidget />
        </LenisProvider>
      </body>
    </html>
  )
}
