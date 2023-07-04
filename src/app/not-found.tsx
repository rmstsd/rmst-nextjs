import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>页面未找到</h2>
      <p>
        <Link href="/good">to good</Link>
      </p>
    </div>
  )
}
