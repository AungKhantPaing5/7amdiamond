import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const users = await sql`
      SELECT id, email, username, full_name, phone, coin_balance, created_at
      FROM users WHERE id = ${session.user.id}
    `

    if (users.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const user = users[0]

    return NextResponse.json({
      id: user.id,
      email: user.email,
      username: user.username,
      fullName: user.full_name,
      phone: user.phone,
      coinBalance: user.coin_balance,
      createdAt: user.created_at,
    })
  } catch (error) {
    console.error("Error fetching user profile:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
