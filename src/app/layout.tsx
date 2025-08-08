import { isDev } from '@/constant'
import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import Client from '@/cliet'
import PortalHost from '@/components/Portal/PortalHost'

export const metadata: Metadata = {
  title: isDev ? 'dev -m4 blog' : 'm4 blog',
  description: 'm4 blog desc'
}

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Client />
        <AntdRegistry>{children}</AntdRegistry>
        <div>4444</div>
      </body>
    </html>
  )
}
