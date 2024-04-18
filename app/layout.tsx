import './globals.css'
import './style.css'

import Sidebar from '@/components/Sidebar'

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <Sidebar />

          <section className="col note-viewer">{children}</section>
        </div>
      </body>
    </html>
  )
}
