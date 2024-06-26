'use client'

import { useState } from 'react'
import NotePreview from '@/components/NotePreview'
import { useFormState, useFormStatus } from 'react-dom'
import { deleteNote, saveNote } from '@/actions'

export default function NoteEditor({ noteId, initialTitle, initialBody }) {
  const { pending } = useFormStatus() // 无效/ 在 form 下才有效

  const [saveState, saveFormAction] = useFormState(saveNote, null)

  const [title, setTitle] = useState(initialTitle)
  const [body, setBody] = useState(initialBody)
  const isDraft = !noteId

  return (
    <div className="note-editor">
      <form className="note-editor-form" autoComplete="off">
        <div className="note-editor-menu">
          <input type="hidden" name="noteId" value={noteId || ''} />
          <CommitButton formAction={saveFormAction} />

          {saveState?.errors && (
            <div className="note-editor-errors">
              {saveState.errors.map((item, index) => (
                <div className="text-red-500" key={index}>
                  {item.message}
                </div>
              ))}
            </div>
          )}

          {!isDraft && (
            <button className="note-editor-delete" disabled={pending} formAction={deleteNote} role="menuitem">
              <img src="/cross.svg" width="10px" height="10px" alt="" role="presentation" />
              Delete
            </button>
          )}
        </div>

        <label className="offscreen" htmlFor="note-title-input">
          Enter a title for your note
        </label>
        <input
          id="note-title-input"
          type="text"
          name="title"
          value={title || ''}
          onChange={e => {
            setTitle(e.target.value)
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          Enter the body for your note
        </label>
        <textarea name="body" value={body || ''} id="note-body-input" onChange={e => setBody(e.target.value)} />
      </form>
      <div className="note-editor-preview">
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview>{body || ''}</NotePreview>
      </div>
    </div>
  )
}

function CommitButton({ formAction }) {
  const { pending } = useFormStatus()

  return (
    <button
      className="note-editor-done disabled:cursor-not-allowed"
      disabled={pending}
      type="submit"
      formAction={formAction}
      role="menuitem"
    >
      <img src="/checkmark.svg" width="14px" height="10px" alt="" role="presentation" />
      提交
    </button>
  )
}
