'use client'

import { useState, useTransition } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import clsx from 'clsx'
import { DeleteButton } from '../DeleteButton'

export default function SidebarNoteContent({ id, title, children, expandedChildren }) {
  const router = useRouter()
  const pathname = usePathname()

  const selectedId = pathname?.split('/')[2] || null

  const [isPending] = useTransition()
  const [isExpanded, setIsExpanded] = useState(false)
  const isActive = id === selectedId

  return (
    <div
      className={clsx(' relative border p-2 mb-3 bg-blue-50 hover:bg-blue-100 cursor-pointer')}
      style={{
        backgroundColor: isPending ? 'var(--gray-80)' : isActive ? 'var(--tertiary-blue)' : '',
        border: isActive ? '1px solid var(--primary-border)' : '1px solid #eee'
      }}
      onClick={() => {
        router.push(`/note/${id}`)
      }}
    >
      {children}

      <div className="absolute right-0 top-0 flex flex-col">
        <button
          className=" border bg-gray-50"
          onClick={evt => {
            evt.stopPropagation()
            setIsExpanded(!isExpanded)
          }}
        >
          {isExpanded ? '收起' : '展开'}
        </button>

        <form>
          <DeleteButton noteId={id} />
        </form>
      </div>

      {isExpanded && expandedChildren}
    </div>
  )
}
