import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { neon } from "@neondatabase/serverless"

// Lazily create the SQL client with better error handling
function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) {
    console.error("DATABASE_URL environment variable is not set")
    throw new Error("Database configuration error")
  }
  return neon(url)
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          const sql = getSql()
          const users = await sql`
            SELECT * FROM users WHERE email = ${credentials.email}
          `

          const user = users[0]
          if (!user) {
            return null
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password_hash)
          if (!isPasswordValid) {
            return null
          }

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.full_name,
            username: user.username,
            coinBalance: user.coin_balance,
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username
        token.coinBalance = user.coinBalance
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.username = token.username as string
        session.user.coinBalance = token.coinBalance as number
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
  },
  debug: process.env.NODE_ENV === "development",
}
