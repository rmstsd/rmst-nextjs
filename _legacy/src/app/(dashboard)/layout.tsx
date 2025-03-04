'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Layout({ children }: React.PropsWithChildren) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      console.log('Layout eff')
    }
  }, [])

  return (
    <>
      <div>
        <Link href="/dashboard/about">About</Link>
        <br />
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <br />
      <button onClick={() => setCount(count + 1)}>Layout {count} Increment</button>
      {children}
    </>
  )
}
