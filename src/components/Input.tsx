'use client'

import { useLayoutEffect } from 'react'

export default function Input() {
  useLayoutEffect(() => {
    console.log(document)
  }, [])

  return (
    <div>
      <input />
    </div>
  )
}
