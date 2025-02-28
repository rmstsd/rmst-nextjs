import NextAuth from 'next-auth'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname.startsWith('/note/edit')) {
        return !!auth
      }

      return true
    }
  }
})
