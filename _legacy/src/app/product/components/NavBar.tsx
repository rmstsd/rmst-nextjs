'use client'

import Link from 'next/link'
import { useEffect } from 'react'

const NavBar = () => {
  useEffect(() => {
    console.log('effect')
  }, [])

  return (
    <nav className="border p-3 border-red-500">
      <div>我是客户端组件</div>
      <span>导航 </span>
      <Link href="/product">/product</Link>
      <Link href="/product/a">/product/a</Link>
      <Link href="/product/b">/product/b</Link>
    </nav>
  )
}

export default NavBar
