'use client'

import { useState } from 'react'

export default function Template({ children }: any) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        根布局 <button onClick={() => setCount(count + 1)}>{count}</button>
      </h1>
      {children}
    </div>
  )
}
