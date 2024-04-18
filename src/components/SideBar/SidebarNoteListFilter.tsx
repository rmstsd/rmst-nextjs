'use client'

import SidebarNoteContent from './SidebarNoteItemContent'
import { useSearchParams } from 'next/navigation'
import { Query } from './SearchNote'

const SidebarNoteListFilter = ({ notes }) => {
  const p = useSearchParams()
  const searchText = p.get(Query)

  return (
    <ul className="notes-list">
      {notes.map(item => {
        if (!searchText || (searchText && item.note.title.toLowerCase().includes(searchText.toLowerCase()))) {
          return (
            <li key={item.noteId}>
              <SidebarNoteContent
                id={item.noteId}
                title={item.note.title}
                expandedChildren={
                  <p className="sidebar-note-excerpt">{item.note.content.substring(0, 20) || <i>(No content)</i>}</p>
                }
              >
                {item.header}
              </SidebarNoteContent>
            </li>
          )
        }

        return null
      })}
    </ul>
  )
}

export default SidebarNoteListFilter
