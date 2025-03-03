import TimeAgoShow from '@/components/TimeAgo'
import { findEntityOne } from '@/server'
import Link from 'next/link'

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = (await params).id
  const detail = (await findEntityOne(id)).entityValue
  console.log('generateMetadata', detail.title)

  return {
    title: detail.title,
    description: detail.summary
  }
}

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  const detail = (await findEntityOne(id)).entityValue
  console.log('Detail Page', detail)

  return (
    <div>
      <Link href="/">回首页</Link>
      <pre style={{ fontSize: 18, fontFamily: 'Consolas' }}>{JSON.stringify(detail, null, 2)}</pre>

      <div>
        创建时间: <TimeAgoShow time={detail.createdOn} />
      </div>
      <div>
        更新时间: <TimeAgoShow time={detail.modifiedOn} />
      </div>
    </div>
  )
}
