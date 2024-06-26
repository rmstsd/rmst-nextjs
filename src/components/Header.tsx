import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'

function SignIn({ provider, ...props }) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}
    >
      <button {...props}>Sign In</button>
    </form>
  )
}

function SignOut(props) {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button {...props}>Sign Out</button>
    </form>
  )
}

export default async function Header() {
  const session = await auth()

  return (
    <header style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link href="/client">Client Side Component</Link>

      {!session?.user ? (
        <SignIn provider={null} />
      ) : (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          用户名: {session?.user.name} -- <SignOut />
        </span>
      )}
    </header>
  )
}
