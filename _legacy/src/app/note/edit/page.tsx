import NoteEditor from '@/components/NoteEditor'

export default async function EditPage() {
  return <NoteEditor noteId={null} initialTitle="未知标题" initialBody="未知内容" />
}
