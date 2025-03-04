import React, { Suspense } from 'react'
import Link from 'next/link'
import EditButton from '../EditButton'
import NoteListSkeleton from '../NoteListSkeleton'
import Search from './SearchNote'
import SidebarImport from './SidebarImport'
import SidebarNoteList from './SidebarNoteList'

export default function Sidebar() {
  return (
    <>
      <section className="col sidebar">
        <Link href="/" className="link--unstyled">
          <section className="sidebar-header hover:text-red-400">
            <img className="logo" src="/logo.svg" width="22px" height="20px" alt="" role="presentation" />
            <strong className="">React Notes</strong>
          </section>
        </Link>

        <section className="sidebar-menu" role="menubar">
          <Search />
          <EditButton noteId={null}>新建</EditButton>
        </section>

        <SidebarImport />

        <Suspense fallback={<NoteListSkeleton />}>
          <SidebarNoteList />
        </Suspense>
      </section>
    </>
  )
}
