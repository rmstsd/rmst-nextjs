'use client'

import TimeAgo from 'javascript-time-ago'
import { useEffect, useState } from 'react'

import zh from 'javascript-time-ago/locale/zh'
TimeAgo.addDefaultLocale(zh)

const timeAgo = new TimeAgo('zh')

export default function TimeAgoShow({ time }) {
  const [timeAgoStr, setTimeAgoStr] = useState(timeAgo.format(time))

  useEffect(() => {
    const t = setInterval(() => {
      setTimeAgoStr(timeAgo.format(time))
    }, 1000)

    return () => {
      clearInterval(t)
    }
  }, [])

  return (
    <span>
      {new Date(time).toLocaleString()} - {timeAgoStr}
    </span>
  )
}
