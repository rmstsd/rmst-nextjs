import Link from 'next/link'
import styles from './page.module.css'

import { findEntityPage } from '@/server'
import TimeAgo from '@/components/TimeAgo'

export default async function Home() {
  const data = await findEntityPage()

  return (
    <div className={styles.container}>
      {data.map(item => (
        <div key={item.id} className={styles.item}>
          <div>
            <span>标题: </span>
            <Link className={styles.title} href={`/${item.id}`}>
              {item.title}
            </Link>
          </div>
          <div>作者: {item.author}</div>
          <div>摘要: {item.summary}</div>

          {item.cover?.path && <div>图片: {item.cover.path}</div>}

          <div>正文: {item.content}</div>
          <div>
            创建时间: <TimeAgo time={item.createdOn} />
          </div>
          <div>
            更新时间: <TimeAgo time={item.modifiedOn} />
          </div>
        </div>
      ))}
    </div>
  )
}
