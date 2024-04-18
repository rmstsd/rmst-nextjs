import clsx from 'clsx'
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next'
import Template from './template'

export const metadata: Metadata = {
  title: '首页',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>
        <Template>{children}</Template>
      </body>
    </html>
  )
}
