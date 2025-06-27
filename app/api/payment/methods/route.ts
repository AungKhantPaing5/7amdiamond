import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const methods = await sql`
      SELECT * FROM payment_methods 
      WHERE is_active = true 
      ORDER BY name ASC
    `

    return NextResponse.json({ methods })
  } catch (error) {
    console.error("Error fetching payment methods:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
