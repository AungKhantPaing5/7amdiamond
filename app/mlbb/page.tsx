"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowLeft,
  Gem,
  Sparkles,
  Loader2,
  GamepadIcon,
  Zap,
  Shield,
  Info,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

// Mock data for design
const mockItems = [
  {
    id: 1,
    name: "86 Diamonds",
    amount: 86,
    coin_price: 25.0,
    original_price: 30.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 2,
    name: "172 Diamonds",
    amount: 172,
    coin_price: 50.0,
    original_price: 60.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 3,
    name: "257 Diamonds",
    amount: 257,
    coin_price: 75.0,
    original_price: 90.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 4,
    name: "344 Diamonds",
    amount: 344,
    coin_price: 100.0,
    original_price: 120.0,
    discount_percent: 17,
    is_popular: true,
  },
  {
    id: 5,
    name: "429 Diamonds",
    amount: 429,
    coin_price: 125.0,
    original_price: 150.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 6,
    name: "514 Diamonds",
    amount: 514,
    coin_price: 150.0,
    original_price: 180.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 7,
    name: "706 Diamonds",
    amount: 706,
    coin_price: 200.0,
    original_price: 240.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 8,
    name: "878 Diamonds",
    amount: 878,
    coin_price: 250.0,
    original_price: 300.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 9,
    name: "1412 Diamonds",
    amount: 1412,
    coin_price: 400.0,
    original_price: 480.0,
    discount_percent: 17,
    is_popular: true,
  },
  {
    id: 10,
    name: "2195 Diamonds",
    amount: 2195,
    coin_price: 600.0,
    original_price: 720.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 11,
    name: "3688 Diamonds",
    amount: 3688,
    coin_price: 1000.0,
    original_price: 1200.0,
    discount_percent: 17,
    is_popular: false,
  },
  {
    id: 12,
    name: "5532 Diamonds",
    amount: 5532,
    coin_price: 1500.0,
    original_price: 1800.0,
    discount_percent: 17,
    is_popular: false,
  },
]

export default function MLBBDirectPage() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [gameAccountId, setGameAccountId] = useState("")
  const [serverId, setServerId] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState("")

  const coinBalance = 1250.5

  const handlePurchase = () => {
    setIsLoading(true)
    // Design only - simulate purchase
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(`Successfully purchased ${selectedItem.amount} diamonds! Check your Mobile Legends account.`)
      setSelectedItem(null)
      setGameAccountId("")
      setServerId("")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-300 hover:text-white transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
                  <GamepadIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">Mobile Legends</h1>
                  <p className="text-sm text-slate-400 font-medium">Premium Diamond Store</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-2xl shadow-xl shadow-purple-500/25">
                <Gem className="w-6 h-6 text-white" />
                <div className="text-right">
                  <p className="text-white/80 text-sm">Balance</p>
                  <p className="text-white font-bold text-lg">{coinBalance.toFixed(2)} Coins</p>
                </div>
              </div>
              <Link href="/buy-coins">
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg">
                  <Zap className="w-4 h-4 mr-2" />
                  Buy Coins
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Success Message */}
          {success && (
            <Alert className="border-green-500 bg-green-500/10 backdrop-blur-sm mb-8 shadow-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <AlertDescription className="text-green-400 font-medium text-lg">{success}</AlertDescription>
            </Alert>
          )}

          {/* Game Account Info */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm mb-8 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-2xl">
                <Shield className="w-7 h-7 mr-3 text-purple-400" />
                Mobile Legends Account Setup
              </CardTitle>
              <CardDescription className="text-slate-400 text-lg">
                Enter your MLBB account details for instant diamond delivery
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="accountId" className="text-white font-semibold text-lg flex items-center">
                    <GamepadIcon className="w-4 h-4 mr-2 text-purple-400" />
                    User ID *
                  </Label>
                  <Input
                    id="accountId"
                    value={gameAccountId}
                    onChange={(e) => setGameAccountId(e.target.value)}
                    placeholder="Enter your User ID"
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/20 h-12 text-lg rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="serverId" className="text-white font-semibold text-lg flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-purple-400" />
                    Server ID *
                  </Label>
                  <Input
                    id="serverId"
                    value={serverId}
                    onChange={(e) => setServerId(e.target.value)}
                    placeholder="Enter your Server ID"
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/20 h-12 text-lg rounded-xl"
                    required
                  />
                </div>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl">
                <div className="flex items-start space-x-3">
                  <Info className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-400 font-semibold mb-2">💡 How to find your Account Details:</p>
                    <ol className="text-blue-300 text-sm space-y-1 list-decimal list-inside">
                      <li>Open Mobile Legends: Bang Bang on your device</li>
                      <li>Go to Settings (gear icon) → Account Center</li>
                      <li>Your User ID and Server ID will be displayed clearly</li>
                      <li>Copy both numbers exactly as shown</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diamond Packages */}
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm mb-8 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center text-2xl">
                <Gem className="w-7 h-7 mr-3 text-purple-400" />
                Premium Diamond Packages
              </CardTitle>
              <CardDescription className="text-slate-400 text-lg">
                Choose your preferred diamond package with exclusive 17% bonus and instant delivery
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {mockItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className={`group cursor-pointer transition-all duration-500 relative overflow-hidden ${
                      selectedItem?.id === item.id
                        ? "border-purple-500 bg-purple-500/10 scale-105 shadow-2xl shadow-purple-500/30"
                        : "border-slate-600/50 hover:border-slate-500/50 hover:scale-102 bg-slate-700/30"
                    }`}
                    onClick={() => setSelectedItem(item)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Popular Badge */}
                    {item.is_popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 shadow-xl shadow-purple-500/30 animate-pulse px-4 py-1">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardContent className="p-6 text-center relative z-10">
                      {/* Diamond Icon */}
                      <div className="relative mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110">
                          <Gem className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                      </div>

                      {/* Package Info */}
                      <h3 className="text-white font-bold mb-2 text-lg group-hover:text-purple-400 transition-colors">
                        {item.name}
                      </h3>
                      <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-1">
                        {item.amount.toLocaleString()}
                      </div>
                      <div className="text-slate-400 mb-4 font-medium">Diamonds</div>

                      {/* Pricing */}
                      <div className="space-y-2">
                        <div className="text-xl font-bold text-white">{item.coin_price} Coins</div>
                        {item.discount_percent > 0 && (
                          <>
                            <div className="text-sm text-slate-400 line-through">{item.original_price} Coins</div>
                            <Badge
                              variant="secondary"
                              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg"
                            >
                              <Sparkles className="w-3 h-3 mr-1" />
                              Save {item.discount_percent}%
                            </Badge>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Purchase Section */}
          {selectedItem && gameAccountId && serverId && (
            <Card className="bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border-purple-500/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center space-y-8">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <Gem className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Ready to Purchase</h3>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-2xl p-8 max-w-2xl mx-auto border border-slate-600/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Package:</span>
                          <strong className="text-white">{selectedItem.name}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Diamonds:</span>
                          <strong className="text-purple-400 text-lg">{selectedItem.amount.toLocaleString()}</strong>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Account:</span>
                          <strong className="text-white">{gameAccountId}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Server:</span>
                          <strong className="text-white">{serverId}</strong>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-slate-600 mt-6 pt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-lg">Total Cost:</span>
                        <strong className="text-purple-400 text-2xl font-bold">{selectedItem.coin_price} Coins</strong>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-slate-400">Remaining Balance:</span>
                        <strong className="text-white text-lg">
                          {(coinBalance - selectedItem.coin_price).toFixed(2)} Coins
                        </strong>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handlePurchase}
                    disabled={isLoading || coinBalance < selectedItem.coin_price}
                    className="w-full max-w-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 disabled:opacity-50 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 text-xl py-6 rounded-2xl transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                        Processing your diamond purchase...
                      </>
                    ) : coinBalance < selectedItem.coin_price ? (
                      <>
                        <Zap className="w-6 h-6 mr-3" />
                        Insufficient Balance - Buy More Coins
                      </>
                    ) : (
                      <>
                        <Gem className="w-6 h-6 mr-3" />
                        Purchase {selectedItem.amount.toLocaleString()} Diamonds
                        <ArrowRight className="w-6 h-6 ml-3" />
                      </>
                    )}
                  </Button>

                  {coinBalance < selectedItem.coin_price && (
                    <div className="text-center">
                      <Link href="/buy-coins">
                        <Button
                          variant="outline"
                          className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-400 text-lg py-4 px-8 rounded-xl transition-all duration-300 bg-transparent"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Buy More Coins Now
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
