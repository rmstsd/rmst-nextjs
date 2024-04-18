'use server'

import { redirect } from 'next/navigation'
import { addNote, updateNote, delNote } from '@/lib/redis'
import { revalidatePath } from 'next/cache'
import { sleep } from '@/utils/sleep'

export async function saveNote(formData) {
  const noteId = formData.get('noteId')
  const title = formData.get('title')
  const body = formData.get('body')

  const data = JSON.stringify({ title, content: body, updateTime: new Date() })

  if (noteId) {
    updateNote(noteId, data)
    revalidatePath('/')
    redirect(`/note/${noteId}`)
  } else {
    const res = await addNote(data)
    revalidatePath('/')
    redirect(`/note/${res}`)
  }
}

export async function deleteNote(formData: FormData) {
  delNote(formData.get('noteId'))
  revalidatePath('/')
  redirect('/')
}
