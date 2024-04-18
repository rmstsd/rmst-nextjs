import { getAllNotes } from '../../lib/redis'
import SidebarNoteListFilter from './SidebarNoteListFilter'
import dayjs from 'dayjs'

export default async function SidebarNoteList() {
  const notes = await getAllNotes()

  const arr = Object.entries<string>(notes)

  if (arr.length == 0) {
    return <div className="notes-empty">No notes created yet!</div>
  }

  return (
    <SidebarNoteListFilter
      notes={Object.entries(notes).map(([noteId, note]) => {
        const noteData = JSON.parse(note)

        return {
          noteId,
          note: noteData,
          header: <SidebarNoteItemHeader title={noteData.title} updateTime={noteData.updateTime} />
        }
      })}
    />
  )
}

function SidebarNoteItemHeader({ title, updateTime }) {
  return (
    <header className="sidebar-note-header">
      <strong>{title}</strong>
      <small>{dayjs(updateTime).format('YYYY-MM-DD HH:mm:ss')}</small>
    </header>
  )
}
