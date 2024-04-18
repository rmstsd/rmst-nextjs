'use client'

import { useFormStatus } from 'react-dom'
import { deleteNote } from '../actions'
import clsx from 'clsx'
import React from 'react'

export function DeleteButton({ noteId }) {
  const { pending } = useFormStatus()

  return (
    <>
      <input type="hidden" name="noteId" value={noteId} />
      <button
        disabled={pending}
        formAction={deleteNote}
        className={clsx('border bg-red-600 text-white disabled:cursor-not-allowed')}
        onClick={evt => {
          evt.stopPropagation()
        }}
      >
        删除
      </button>
    </>
  )
}
