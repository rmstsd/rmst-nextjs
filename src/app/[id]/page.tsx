import TimeAgoShow from '@/components/TimeAgo'
import { dataList, findEntityOne } from '@/server'
import Link from 'next/link'

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = (await params).id
  const detail = await findEntityOne(id)
  console.log('generateMetadata', detail.title)

  return {
    title: detail.title,
    description: detail.summary
  }
}

export async function generateStaticParams() {
  console.log('generateStaticParams')

  const ids = dataList.slice(0, 2).map(item => ({ id: item.id }))

  return ids
}

export default async function Detail({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  const detail = await findEntityOne(id)
  console.log('Detail Page', detail.title)

  return (
    <div style={{ lineHeight: 1.5 }}>
      <Link href="/">回首页</Link>
      <div>标题: {detail.title}</div>

      <div>
        创建时间: <TimeAgoShow time={detail.createdOn} />
      </div>
      <div>
        更新时间: <TimeAgoShow time={detail.modifiedOn} />
      </div>
      <pre style={{ fontSize: 18, fontFamily: 'Consolas' }}>{JSON.stringify(detail, null, 2)}</pre>
    </div>
  )
}
