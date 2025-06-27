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

    const { packageId, paymentMethod, phoneNumber } = await request.json()

    // Get coin package details
    const packages = await sql`
      SELECT * FROM coin_packages WHERE id = ${packageId} AND is_active = true
    `

    if (packages.length === 0) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 })
    }

    const coinPackage = packages[0]
    const totalCoins = coinPackage.coins + coinPackage.bonus_coins

    // Create transaction record
    const transactions = await sql`
      INSERT INTO transactions (
        user_id, type, amount, coins, payment_method, status
      ) VALUES (
        ${session.user.id}, 'coin_purchase', ${coinPackage.price}, 
        ${totalCoins}, ${paymentMethod}, 'pending'
      ) RETURNING id
    `

    const transactionId = transactions[0].id

    // In a real implementation, you would integrate with KPay/WavePay APIs here
    // For demo purposes, we'll simulate a successful payment

    // Simulate payment processing delay
    setTimeout(async () => {
      try {
        // Update transaction status
        await sql`
          UPDATE transactions 
          SET status = 'completed', payment_reference = ${`PAY_${transactionId}_${Date.now()}`}
          WHERE id = ${transactionId}
        `

        // Add coins to user balance
        await sql`
          UPDATE users 
          SET coin_balance = coin_balance + ${totalCoins}
          WHERE id = ${session.user.id}
        `
      } catch (error) {
        console.error("Payment processing error:", error)
        await sql`
          UPDATE transactions SET status = 'failed' WHERE id = ${transactionId}
        `
      }
    }, 2000)

    return NextResponse.json({
      success: true,
      transactionId,
      message: "Payment initiated successfully",
    })
  } catch (error) {
    console.error("Purchase error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
