'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
export const Query = 'query'

const SearchNote = () => {
  const [isPending, startTransition] = useTransition()
  const p = useSearchParams()
  const pathname = usePathname()

  const router = useRouter()

  const handleSearch = value => {
    const params = new URLSearchParams(p)
    if (!value) {
      params.delete(Query)
    } else {
      params.set(Query, value)
    }

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`)
    })
  }

  return (
    <input
      type="text"
      defaultValue={p.get(Query) || ''}
      onChange={evt => handleSearch(evt.target.value)}
      placeholder="搜索"
    />
  )
}

export default SearchNote
