import Header from '@/components/Header'
import Sidebar from '@/components/SideBar'

import '../globals.css'
import '../style.css'

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="main">
          <Sidebar />

          <section className="col note-viewer">{children}</section>
        </main>
      </body>
    </html>
  )
}
