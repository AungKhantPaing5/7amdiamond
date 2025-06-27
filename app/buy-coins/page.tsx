"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Coins, Star, Loader2 } from "lucide-react"
import Link from "next/link"

/* ───────────────────────  Demo-only mock data  ─────────────────────── */
const MOCK_PACKAGES: CoinPackage[] = [
  { id: 1, name: "500 Coins", coins: 500, price: 6000, bonus_coins: 50, is_popular: false },
  { id: 2, name: "1 000 Coins", coins: 1000, price: 12000, bonus_coins: 150, is_popular: true },
  { id: 3, name: "2 500 Coins", coins: 2500, price: 30000, bonus_coins: 500, is_popular: false },
]

const MOCK_METHODS: PaymentMethod[] = [
  { id: 1, name: "KPay", code: "kpay", icon_url: "" },
  { id: 2, name: "WavePay", code: "wave", icon_url: "" },
  { id: 3, name: "CB Pay", code: "cb", icon_url: "" },
]

interface CoinPackage {
  id: number
  name: string
  coins: number
  price: number
  bonus_coins: number
  is_popular: boolean
}

interface PaymentMethod {
  id: number
  name: string
  code: string
  icon_url: string
}

export default function BuyCoinsPage() {
  const router = useRouter()
  const [packages, setPackages] = useState<CoinPackage[]>([])
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([])
  const [selectedPackage, setSelectedPackage] = useState<CoinPackage | null>(null)
  const [selectedPayment, setSelectedPayment] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    // In demo mode we just use static data
    setPackages(MOCK_PACKAGES)
    setPaymentMethods(MOCK_METHODS)
  }, [])

  const handlePurchase = async () => {
    if (!selectedPackage || !selectedPayment || !phoneNumber) {
      setError("Please fill in all required fields")
      return
    }

    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      const response = await fetch("/api/coins/purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packageId: selectedPackage.id,
          paymentMethod: selectedPayment,
          phoneNumber,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess("Payment initiated successfully! Please check your phone for payment confirmation.")
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Demo badge – remove in real implementation */}
      <div className="fixed top-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg z-50">Demo mode</div>
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Buy 7AM Coins</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Coin Packages */}
          <Card className="bg-slate-800 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Coins className="w-5 h-5 mr-2" />
                Select Coin Package
              </CardTitle>
              <CardDescription className="text-slate-400">
                Choose the amount of 7AM coins you want to purchase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {packages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    className={`cursor-pointer transition-all ${
                      selectedPackage?.id === pkg.id
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    <CardContent className="p-4 text-center">
                      {pkg.is_popular && (
                        <Badge className="mb-2 bg-gradient-to-r from-purple-500 to-pink-500">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      <h3 className="text-white font-semibold mb-2">{pkg.name}</h3>
                      <div className="text-2xl font-bold text-purple-400 mb-1">{pkg.coins + pkg.bonus_coins} Coins</div>
                      {pkg.bonus_coins > 0 && (
                        <div className="text-sm text-green-400 mb-2">+{pkg.bonus_coins} Bonus Coins</div>
                      )}
                      <div className="text-lg text-white">{pkg.price.toLocaleString()} MMK</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          {selectedPackage && (
            <Card className="bg-slate-800 border-slate-700 mb-8">
              <CardHeader>
                <CardTitle className="text-white">Select Payment Method</CardTitle>
                <CardDescription className="text-slate-400">Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {paymentMethods.map((method) => (
                    <Card
                      key={method.id}
                      className={`cursor-pointer transition-all ${
                        selectedPayment === method.code
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-slate-600 hover:border-slate-500"
                      }`}
                      onClick={() => setSelectedPayment(method.code)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                          <span className="text-xs font-bold text-slate-800">{method.name.substring(0, 4)}</span>
                        </div>
                        <p className="text-white text-sm font-medium">{method.name}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {selectedPayment && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="phone" className="text-white">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="09xxxxxxxxx"
                        className="bg-slate-700 border-slate-600 text-white mt-2"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Purchase Summary */}
          {selectedPackage && selectedPayment && phoneNumber && (
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
                    <span>{selectedPackage.name}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Coins:</span>
                    <span>{selectedPackage.coins + selectedPackage.bonus_coins}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Payment Method:</span>
                    <span>{paymentMethods.find((m) => m.code === selectedPayment)?.name}</span>
                  </div>
                  <div className="flex justify-between text-white">
                    <span>Phone Number:</span>
                    <span>{phoneNumber}</span>
                  </div>
                  <div className="border-t border-slate-600 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white">
                      <span>Total:</span>
                      <span>{selectedPackage.price.toLocaleString()} MMK</span>
                    </div>
                  </div>

                  <Button
                    onClick={handlePurchase}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing Payment...
                      </>
                    ) : (
                      "Complete Purchase"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
