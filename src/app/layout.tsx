import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: "/icon.svg",
  title: 'Oscar Meneses Portfolio',
  authors: {
    name: 'Oscar Meneses',
    url: 'https://meneses.app',
  },
  keywords: ["Porfolio", "Portafolio", "Web Developer", "Oscar Meneses Solís", "Engineering", "Frontend", "Backend", "Curriculum", "CV", "Resume", "Education", "Experience", "Projects", "Skills", "About", "Contact"],
  description: 'Driven web developer delivering innovative solutions to elevate user experiences. Browse through my portfolio showcasing successful projects.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meneses.app',
    title: 'Oscar Meneses Portfolio',
    description: 'Driven web developer delivering innovative solutions to elevate user experiences. Browse through my portfolio showcasing successful projects.',
    images: [
      {
        url: '/Website.webp',
        width: 800,
        height: 600,
        alt: 'Screenshot of my portfolio',
      },
    ],
  },
  twitter: {
    title: "Oscar Meneses Portfolio",
    description: 'Driven web developer delivering innovative solutions to elevate user experiences. Browse through my portfolio showcasing successful projects.',
    card: 'summary_large_image',
    creator: '@OscarMeneses99',
    site: 'https://meneses.app',
    images: [
      {
        url: '/Website.webp',
        width: 800,
        height: 600,
        alt: 'Screenshot of my portfolio',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}
