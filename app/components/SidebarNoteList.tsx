import dayjs from 'dayjs'
import SidebarNoteContent from './SidebarNoteItemContent'
import { getAllNotes, type Note } from '../lib/redis'

export default async function NoteList() {
  const notes = await getAllNotes()

  const arr = Object.entries<string>(notes)

  if (arr.length == 0) {
    return <div className="notes-empty">No notes created yet!</div>
  }

  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        const noteObject = JSON.parse(note) as Note

        return (
          <li key={noteId}>
            <SidebarNoteContent
              id={noteId}
              title={noteObject.title}
              expandedChildren={
                <p className="sidebar-note-excerpt">{noteObject.content.substring(0, 20) || <i>(No content)</i>}</p>
              }
            >
              <header className="sidebar-note-header">
                <strong>{noteObject.title}</strong>
                <small>{dayjs(noteObject.updateTime).format('YYYY-MM-DD HH:mm:ss')}</small>
              </header>
            </SidebarNoteContent>
          </li>
        )
      })}
    </ul>
  )
}
