import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: "/icon.svg",
  title: 'Oscar Meneses Portfolio',
  description: 'Driven web developer delivering innovative solutions to elevate user experiences. Browse through my portfolio showcasing successful projects.',
  metadataBase: new URL('https://meneses.app/'),
  authors: {
    name: 'Oscar Meneses',
    url: 'https://meneses.app',
  },
  archives: ["https://meneses.app/OscarMenesesCV.pdf"],
  alternates: {
    canonical: 'https://meneses.app',
  },
  keywords: ["Porfolio", "Web Developer", "Oscar Meneses Solís", "Engineering", "Frontend", "Backend", "Curriculum", "CV", "Resume", "Education", "Experience", "Projects", "Skills", "About", "Contact", "Website", "Web"],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meneses.app',
    title: 'Oscar Meneses Portfolio',
    siteName: 'Oscar Meneses Portfolio',
    description: 'Driven web developer delivering innovative solutions to elevate user experiences. Browse through my portfolio showcasing successful projects.',
    images: [
      {
        url: 'https://meneses.app/Website.webp',
        width: 802,
        height: 284,
        alt: 'Oscar Meneses Portfolio',
      },
    ],
  },
  twitter: {
    title: 'Oscar Meneses Portfolio',
    description: 'Driven web developer delivering innovative solutions to elevate user experiences. Browse through my portfolio showcasing successful projects.',
    images: [
      {
        url: 'https://meneses.app/Website.webp',
        width: 802,
        height: 284,
        alt: 'Oscar Meneses Portfolio',
      },
    ],
    card: 'summary_large_image',
    site: 'https://meneses.app',
    creator: '@OscarMeneses99',
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
