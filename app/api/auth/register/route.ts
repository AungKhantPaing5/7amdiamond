import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const { email, password, username, fullName, phone } = await request.json()

    // Check if user already exists
    const existingUsers = await sql`
      SELECT id FROM users WHERE email = ${email} OR username = ${username}
    `

    if (existingUsers.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const newUsers = await sql`
      INSERT INTO users (email, password_hash, username, full_name, phone)
      VALUES (${email}, ${hashedPassword}, ${username}, ${fullName}, ${phone})
      RETURNING id, email, username, full_name
    `

    const user = newUsers[0]

    return NextResponse.json({
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.full_name,
      },
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
