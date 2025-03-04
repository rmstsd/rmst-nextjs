'use server'

import { redirect } from 'next/navigation'
import { addNote, updateNote, delNote } from '@/lib/redis'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import chalk from 'chalk'
import { sleep } from '@/utils/sleep'

const schema = z.object({
  title: z.string().min(1, '请填写标题'),
  content: z.string().min(1, '请填写内容 content').max(100, '字数最多 100')
})

export async function saveNote(currentState, formData) {
  const noteId = formData.get('noteId')
  const title = formData.get('title')
  const body = formData.get('body')

  const data = { title, content: body, updateTime: new Date() }

  // 校验数据
  const validated = schema.safeParse(data)

  if (!validated.success) {
    return {
      // @ts-ignore
      errors: validated.error.issues
    }
  }

  const dataString = JSON.stringify(data)

  if (noteId) {
    updateNote(noteId, dataString)
    revalidatePath('/')
    redirect(`/note/${noteId}`)
  } else {
    const res = await addNote(dataString)
    revalidatePath('/')
    redirect(`/note/${res}`)
  }
}

export async function deleteNote(formData: FormData) {
  await sleep(1000)
  delNote(formData.get('noteId'))
  revalidatePath('/')
  redirect('/')
}
