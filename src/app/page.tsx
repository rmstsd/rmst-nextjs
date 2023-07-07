import Button from '@/components/Button'
import Image from 'next/image'
import { use } from 'react'

export default function Home() {
  const data = use(
    new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(123)
      }, 100)
    })
  )

  return (
    <main>
      rmst next app
      <h2>{data}</h2>
      <Button></Button>
    </main>
  )
}
