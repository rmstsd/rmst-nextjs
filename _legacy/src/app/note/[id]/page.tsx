import Note from '@/components/Note'
import { getNote } from '@/lib/redis'
import { sleep } from '@/utils/sleep'

export default async function Page({ params }) {
  // await sleep(1000)

  const noteId = params.id
  const note = await getNote(noteId)

  if (note == null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">Click a note on the left to view something! 🥺</span>
      </div>
    )
  }

  return <Note noteId={noteId} note={note} />
}
