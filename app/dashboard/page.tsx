"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Gem,
  CreditCard,
  History,
  GamepadIcon,
  LogOut,
  Sparkles,
  Zap,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

// Mock data for design
const mockTransactions = [
  {
    id: 1,
    type: "diamond_purchase",
    amount: 344,
    coins: 100,
    status: "completed",
    created_at: "2024-01-15T10:30:00Z",
    game_name: "Mobile Legends",
  },
  {
    id: 2,
    type: "coin_purchase",
    amount: 500,
    coins: 500,
    status: "completed",
    created_at: "2024-01-14T15:45:00Z",
  },
  {
    id: 3,
    type: "diamond_purchase",
    amount: 1412,
    coins: 400,
    status: "completed",
    created_at: "2024-01-13T09:20:00Z",
    game_name: "Mobile Legends",
  },
]

export default function DashboardPage() {
  const coinBalance = 1250.5
  const username = "DiamondHunter"

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
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                  <Gem className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                  7AM Diamond
                </h1>
                <p className="text-sm text-slate-400 font-medium">Diamond Dashboard</p>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-slate-400">Welcome back,</p>
                <p className="text-xl font-bold text-purple-400">{username}</p>
              </div>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 bg-transparent"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Coin Balance Card */}
        <Card className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 border-0 mb-8 shadow-2xl shadow-purple-500/30 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-pink-600/80 to-purple-700/80"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

          <CardContent className="p-8 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Gem className="w-8 h-8 text-white" />
                  <h2 className="text-2xl font-bold text-white">7AM Coin Balance</h2>
                </div>
                <p className="text-5xl font-bold text-white mb-2">{coinBalance.toFixed(2)}</p>
                <p className="text-purple-100 text-lg">Available Coins</p>
                <div className="flex items-center space-x-2 mt-4">
                  <TrendingUp className="w-4 h-4 text-green-300" />
                  <span className="text-green-300 text-sm font-medium">+15% this month</span>
                </div>
              </div>
              <div className="text-right">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
                  <Sparkles className="w-12 h-12 text-white animate-pulse" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Award className="w-3 h-3 mr-1" />
                  VIP Member
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">Total Diamonds</p>
                  <p className="text-2xl font-bold text-white">15,420</p>
                  <p className="text-green-400 text-sm">+2,344 this week</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Gem className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">Total Spent</p>
                  <p className="text-2xl font-bold text-white">2,850 Coins</p>
                  <p className="text-purple-400 text-sm">12 transactions</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-medium">Member Since</p>
                  <p className="text-2xl font-bold text-white">Jan 2024</p>
                  <p className="text-yellow-400 text-sm">Premium member</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Link href="/buy-coins">
            <Card className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-300 group-hover:scale-110">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-purple-400 transition-colors">
                  Buy 7AM Coins
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Purchase coins instantly with KPay, WavePay, CB Pay and more payment methods
                </p>
                <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300">
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Instant Top-Up Available</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/mlbb">
            <Card className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 cursor-pointer backdrop-blur-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-110">
                  <GamepadIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-pink-400 transition-colors">
                  MLBB Diamonds
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Buy Mobile Legends diamonds instantly with premium quality and zero ban risk
                </p>
                <div className="flex items-center justify-center text-pink-400 group-hover:text-pink-300">
                  <Gem className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Premium Quality Guaranteed</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Recent Transactions */}
        <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center text-2xl">
                  <History className="w-7 h-7 mr-3" />
                  Transaction History
                </CardTitle>
                <CardDescription className="text-slate-400 text-lg">
                  Your recent diamond purchases and coin transactions
                </CardDescription>
              </div>
              <Button
                variant="outline"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                <Clock className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {mockTransactions.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-slate-700/50 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <History className="w-10 h-10 text-slate-400" />
                </div>
                <p className="text-slate-400 text-xl mb-3">No transactions yet</p>
                <p className="text-slate-500 mb-6">Start by buying some coins or diamonds to see your history here!</p>
                <Link href="/buy-coins">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Gem className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {mockTransactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between p-6 bg-gradient-to-r from-slate-700/30 to-slate-800/30 rounded-2xl border border-slate-600/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        {transaction.type === "coin_purchase" ? (
                          <CreditCard className="w-7 h-7 text-white" />
                        ) : (
                          <Gem className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">
                          {transaction.type === "coin_purchase" ? "Coin Purchase" : "Diamond Purchase"}
                        </p>
                        <p className="text-slate-400">
                          {new Date(transaction.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        {transaction.type === "diamond_purchase" && (
                          <p className="text-purple-400 text-sm font-medium">{transaction.amount} diamonds delivered</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-lg">
                        {transaction.type === "coin_purchase" ? "+" : "-"}
                        {transaction.coins} coins
                      </p>
                      <Badge
                        variant={transaction.status === "completed" ? "default" : "secondary"}
                        className={
                          transaction.status === "completed"
                            ? "bg-green-600 hover:bg-green-700 shadow-lg"
                            : transaction.status === "pending"
                              ? "bg-yellow-600 hover:bg-yellow-700 shadow-lg"
                              : "bg-red-600 hover:bg-red-700 shadow-lg"
                        }
                      >
                        <div className="flex items-center">
                          {transaction.status === "completed" && <Sparkles className="w-3 h-3 mr-1" />}
                          {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                        </div>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
