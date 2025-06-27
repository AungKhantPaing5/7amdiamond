"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Coins, Star, Loader2, GamepadIcon } from "lucide-react"
import Link from "next/link"

interface GameItem {
  id: number
  name: string
  amount: number
  coin_price: number
  original_price: number
  discount_percent: number
  is_popular: boolean
}

export default function MLBBPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [items, setItems] = useState<GameItem[]>([])
  const [selectedItem, setSelectedItem] = useState<GameItem | null>(null)
  const [gameAccountId, setGameAccountId] = useState("")
  const [serverId, setServerId] = useState("")
  const [coinBalance, setCoinBalance] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin")
    }
  }, [status, router])

  useEffect(() => {
    if (session?.user?.id) {
      fetchItems()
      fetchUserBalance()
    }
  }, [session])

  const fetchItems = async () => {
    try {
      const response = await fetch("/api/games/mlbb/items")
      const data = await response.json()
      setItems(data.items || [])
    } catch (error) {
      console.error("Error fetching items:", error)
    }
  }

  const fetchUserBalance = async () => {
    try {
      const response = await fetch("/api/user/profile")
      const data = await response.json()
      setCoinBalance(data.coinBalance || 0)
    } catch (error) {
      console.error("Error fetching balance:", error)
    }
  }

  const handlePurchase = async () => {
    if (!selectedItem || !gameAccountId || !serverId) {
      setError("Please fill in all required fields")
      return
    }

    if (coinBalance < selectedItem.coin_price) {
      setError("Insufficient coin balance. Please buy more coins first.")
      return
    }

    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/games/mlbb/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemId: selectedItem.id,
          gameAccountId,
          serverId,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(data.message)
        setCoinBalance(data.remainingBalance)
        setSelectedItem(null)
        setGameAccountId("")
        setServerId("")
        setTimeout(() => {
          router.push("/dashboard")
        }, 3000)
      } else {
        setError(data.error || "Purchase failed")
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <GamepadIcon className="w-6 h-6 text-purple-400" />
                <h1 className="text-2xl font-bold text-white">Mobile Legends Diamonds</h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-lg">
              <Coins className="w-5 h-5 text-purple-400" />
              <span className="text-white font-semibold">{coinBalance.toFixed(2)} Coins</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Game Account Info */}
          <Card className="bg-slate-800 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white">Game Account Information</CardTitle>
              <CardDescription className="text-slate-400">Enter your Mobile Legends account details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="accountId" className="text-white">
                    User ID
                  </Label>
                  <Input
                    id="accountId"
                    value={gameAccountId}
                    onChange={(e) => setGameAccountId(e.target.value)}
                    placeholder="Enter your User ID"
                    className="bg-slate-700 border-slate-600 text-white mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="serverId" className="text-white">
                    Server ID
                  </Label>
                  <Input
                    id="serverId"
                    value={serverId}
                    onChange={(e) => setServerId(e.target.value)}
                    placeholder="Enter your Server ID"
                    className="bg-slate-700 border-slate-600 text-white mt-2"
                  />
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-2">
                You can find your User ID and Server ID in Mobile Legends settings
              </p>
            </CardContent>
          </Card>

          {/* Diamond Packages */}
          <Card className="bg-slate-800 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Select Diamond Package
              </CardTitle>
              <CardDescription className="text-slate-400">
                Choose the amount of diamonds you want to purchase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className={`cursor-pointer transition-all ${
                      selectedItem?.id === item.id
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <CardContent className="p-4 text-center">
                      {item.is_popular && (
                        <Badge className="mb-2 bg-gradient-to-r from-purple-500 to-pink-500">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Star className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">{item.name}</h3>
                      <div className="text-2xl font-bold text-purple-400 mb-1">{item.amount}</div>
                      <div className="text-sm text-slate-400 mb-2">Diamonds</div>

                      <div className="space-y-1">
                        <div className="text-lg font-bold text-white">{item.coin_price} Coins</div>
                        {item.discount_percent > 0 && (
                          <div className="text-sm text-slate-400 line-through">{item.original_price} Coins</div>
                        )}
                        {item.discount_percent > 0 && (
                          <Badge variant="secondary" className="bg-green-600">
                            {item.discount_percent}% OFF
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Purchase Summary */}
          {selectedItem && gameAccountId && serverId && (
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Purchase Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {error && (
                  <Alert className="border-red-500 bg-red-500/10 mb-4">
                    <AlertDescription className="text-red-400">{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="border-green-500 bg-green-500/10 mb-4">
                    <AlertDescription className="text-green-400">{success}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-4">
                  <div className="flex justify-between text-white">
                    <span>Package:</span>
                    <span>{selectedItem.name}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Diamonds:</span>
                    <span>{selectedItem.amount}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>User ID:</span>
                    <span>{gameAccountId}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Server ID:</span>
                    <span>{serverId}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Current Balance:</span>
                    <span>{coinBalance.toFixed(2)} Coins</span>
                  </div>
                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Cost:</span>
                      <span>{selectedItem.coin_price} Coins</span>
                    </div>
                    <div className="flex justify-between text-lg text-slate-400 mt-2">
                      <span>Remaining Balance:</span>
                      <span>{(coinBalance - selectedItem.coin_price).toFixed(2)} Coins</span>
                    </div>
                  </div>

                  <Button
                    onClick={handlePurchase}
                    disabled={isLoading || coinBalance < selectedItem.coin_price}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing Purchase...
                      </>
                    ) : coinBalance < selectedItem.coin_price ? (
                      "Insufficient Balance"
                    ) : (
                      "Purchase Diamonds"
                    )}
                  </Button>

                  {coinBalance < selectedItem.coin_price && (
                    <div className="text-center">
                      <Link href="/buy-coins">
                        <Button
                          variant="outline"
                          className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
                        >
                          Buy More Coins
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
