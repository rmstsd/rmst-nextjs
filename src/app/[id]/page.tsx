import TimeAgoShow from '@/components/TimeAgo'
import { findEntityOne, findEntityPage } from '@/server'
import Link from 'next/link'
import Image from 'next/image'

import type { Metadata, ResolvingMetadata } from 'next'
import { isDev } from '@/constant'
import loader from '@/loader'

const initialSsgCount = 2

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = (await params).id
  const detail = await findEntityOne(id)
  console.log('generateMetadata', detail.title)

  return {
    title: isDev ? `dev - ${detail.title}` : detail.title,
    description: detail.summary
  }
}

export async function generateStaticParams() {
  console.log('generateStaticParams')

  const ids = (await findEntityPage()).slice(0, initialSsgCount).map(item => ({ id: item.id }))

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

      {detail.cover?.path && (
        <Image
          src={detail.cover?.path}
          alt="tt"
          width={140}
          height={80}
          loader={loader}
          style={{ objectFit: 'cover' }}
        ></Image>
      )}

      <pre style={{ fontSize: 18, fontFamily: 'Consolas' }}>{JSON.stringify(detail, null, 2)}</pre>
    </div>
  )
}
