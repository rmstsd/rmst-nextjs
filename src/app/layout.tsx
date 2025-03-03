import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'm4 blog',
  description: 'm4 blog desc'
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
