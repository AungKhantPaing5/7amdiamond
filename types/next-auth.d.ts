declare module "next-auth" {
  interface User {
    username?: string
    coinBalance?: number
  }

  interface Session {
    user: {
      id: string
      email: string
      name?: string
      username?: string
      coinBalance?: number
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string
    coinBalance?: number
  }
}
