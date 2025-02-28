import Link from 'next/link'

export default function EditButton({ noteId, children }) {
  const isDraft = noteId == null

  return (
    <Link href={noteId ? `/note/${noteId}/edit` : `/note/edit/${noteId || ''}`} className="link--unstyled shrink-0">
      <button
        className={['edit-button', isDraft ? 'edit-button--solid' : 'edit-button--outline'].join(' ')}
        role="menuitem"
      >
        {children}
      </button>
    </Link>
  )
}
