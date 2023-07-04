'use client'

import { useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'rmst',
  description: 'rmst next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  return (
    <html>
      <body className={inter.className}>
        <aside>
          {count}

          <button className="border" onClick={() => setCount(count + 1)}>
            count add
          </button>

          <Link href="/good">/good</Link>
        </aside>

        {children}
      </body>
    </html>
  )
}
