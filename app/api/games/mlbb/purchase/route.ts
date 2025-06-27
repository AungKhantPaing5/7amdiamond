import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { itemId, gameAccountId, serverId } = await request.json()

    // Get user's current coin balance
    const users = await sql`
      SELECT coin_balance FROM users WHERE id = ${session.user.id}
    `

    if (users.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const userBalance = users[0].coin_balance

    // Get game item details
    const items = await sql`
      SELECT gi.*, g.name as game_name 
      FROM game_items gi
      JOIN games g ON gi.game_id = g.id
      WHERE gi.id = ${itemId} AND gi.is_active = true
    `

    if (items.length === 0) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 })
    }

    const item = items[0]

    // Check if user has enough coins
    if (userBalance < item.coin_price) {
      return NextResponse.json({ error: "Insufficient coin balance" }, { status: 400 })
    }

    // Create transaction
    const transactions = await sql`
      INSERT INTO transactions (
        user_id, type, amount, coins, status, game_id, game_item_id, game_account_id
      ) VALUES (
        ${session.user.id}, 'game_purchase', ${item.coin_price}, 
        ${item.coin_price}, 'completed', ${item.game_id}, ${itemId}, ${gameAccountId}
      ) RETURNING id
    `

    // Deduct coins from user balance
    await sql`
      UPDATE users 
      SET coin_balance = coin_balance - ${item.coin_price}
      WHERE id = ${session.user.id}
    `

    // Save user game account if not exists
    await sql`
      INSERT INTO user_game_accounts (user_id, game_id, game_account_id, server_id)
      VALUES (${session.user.id}, ${item.game_id}, ${gameAccountId}, ${serverId})
      ON CONFLICT (user_id, game_id, game_account_id) DO NOTHING
    `

    return NextResponse.json({
      success: true,
      transactionId: transactions[0].id,
      message: `Successfully purchased ${item.amount} ${item.game_name} diamonds!`,
      remainingBalance: userBalance - item.coin_price,
    })
  } catch (error) {
    console.error("MLBB purchase error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
