import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: {
    default: 'Saish Solanki - Cybersecurity Professional',
    template: '%s | Saish Solanki',
  },
  description: 'Cybersecurity Professional | IT Security Coordinator | Network Security Specialist',
  keywords: ['cybersecurity', 'network security', 'penetration testing', 'security architecture'],
  authors: [{ name: 'Saish Solanki' }],
  creator: 'Saish Solanki',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saishsolanki.github.io',
    title: 'Saish Solanki - Cybersecurity Professional',
    description: 'Cybersecurity Professional specializing in network security, vulnerability assessment, and security architecture.',
    siteName: 'Saish Solanki Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saish Solanki - Cybersecurity Professional',
    description: 'Cybersecurity Professional specializing in network security, vulnerability assessment, and security architecture.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}