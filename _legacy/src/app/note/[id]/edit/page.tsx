import NoteEditor from '@/components/NoteEditor'
import { getNote } from '@/lib/redis'
import { sleep } from '@/utils/sleep'

export default async function EditPage({ params }) {
  // await sleep(2000)

  const noteId = params.id
  const note = await getNote(noteId)

  return <NoteEditor noteId={noteId} initialTitle={note.title} initialBody={note.content} />
}
