'use client'

import React, { useState, useEffect } from 'react'

export default function Template({ children }: React.PropsWithChildren) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    return () => {
      console.log('template eff')
    }
  }, [])

  return (
    <>
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </>
  )
}
