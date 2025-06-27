import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const items = await sql`
      SELECT * FROM game_items 
      WHERE game_id = 1 AND is_active = true 
      ORDER BY coin_price ASC
    `

    return NextResponse.json({ items })
  } catch (error) {
    console.error("Error fetching MLBB items:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
