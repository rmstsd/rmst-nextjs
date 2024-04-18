import Note from '@/components/Note'
import { getNote } from '@/lib/redis'

export default async function Page({ params }) {
  const noteId = params.id
  const note = await getNote(noteId)

  // 为了让 Suspense 的效果更明显

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">Click a note on the left to view something! 🥺</span>
      </div>
    )
  }

  return <Note noteId={noteId} note={note} />
}
