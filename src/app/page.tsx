import Link from 'next/link'
import styles from './page.module.css'

import { findEntityPage } from '@/server'
import TimeAgo from '@/components/TimeAgo'
import Image from 'next/image'
import loader from '@/loader'

export default async function Home() {
  const data = await findEntityPage()

  return (
    <div className={styles.container}>
      <span>public/test.png</span>
      <Image src="/test.png" alt="tt" width={140} height={80} style={{ objectFit: 'cover' }}></Image>

      <hr />

      {data.map((item, index) => (
        <div key={item.id} className={styles.item}>
          <div>
            <span>序号: {index} </span>
            <span style={{ marginLeft: 15 }}>标题: </span>
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
          {item.cover?.path && (
            <Image
              src={item.cover?.path}
              alt="tt"
              width={140}
              height={80}
              loader={loader}
              style={{ objectFit: 'cover' }}
            ></Image>
          )}

          <hr />
        </div>
      ))}
    </div>
  )
}
