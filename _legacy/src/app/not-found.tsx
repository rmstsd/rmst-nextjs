import Link from 'next/link'

// 当组件抛出了 notFound 函数的时候 才触发
// 当路由地址不匹配的时候 才触发

export default function NotFound() {
  return (
    <div>
      <p>没有这个路由</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
