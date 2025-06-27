"use client"
import { Gem, Zap, Shield, CreditCard, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const mlbbPackages = [
  {
    id: 1,
    name: "86 Diamonds",
    amount: 86,
    coinPrice: 25.0,
    originalPrice: 30.0,
    discount: 17,
    popular: false,
  },
  {
    id: 2,
    name: "344 Diamonds",
    amount: 344,
    coinPrice: 100.0,
    originalPrice: 120.0,
    discount: 17,
    popular: true,
  },
  {
    id: 3,
    name: "1412 Diamonds",
    amount: 1412,
    coinPrice: 400.0,
    originalPrice: 480.0,
    discount: 17,
    popular: true,
  },
  {
    id: 4,
    name: "2195 Diamonds",
    amount: 2195,
    coinPrice: 600.0,
    originalPrice: 720.0,
    discount: 17,
    popular: false,
  },
  {
    id: 5,
    name: "3688 Diamonds",
    amount: 3688,
    coinPrice: 1000.0,
    originalPrice: 1200.0,
    discount: 17,
    popular: false,
  },
  {
    id: 6,
    name: "5532 Diamonds",
    amount: 5532,
    coinPrice: 1500.0,
    originalPrice: 1800.0,
    discount: 17,
    popular: false,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-3000"></div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/30 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
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
                <p className="text-sm text-slate-400 font-medium">Premium Mobile Legends Store</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#packages"
                className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Diamond Packages
              </a>
              <a
                href="#features"
                className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Features
              </a>
              <a
                href="#support"
                className="text-slate-300 hover:text-white transition-all duration-300 font-medium hover:scale-105"
              >
                Support
              </a>
              <Link href="/auth/signin">
                <Button className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105">
                  <Gem className="w-4 h-4 mr-2" />
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-28 h-28 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/30 animate-pulse">
                <Gem className="w-14 h-14 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-7xl font-bold text-white mb-8 leading-tight">
            Mobile Legends
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Diamond Paradise
            </span>
          </h2>

          <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate Mobile Legends diamond store with instant delivery, premium quality, and unbeatable
            prices.
            <span className="text-purple-400 font-semibold">Join 50,000+ satisfied players!</span>
          </p>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="group flex flex-col items-center space-y-4 p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl backdrop-blur-sm border border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-bold text-xl">100% Secure</span>
              <span className="text-slate-400 text-center leading-relaxed">
                Bank-level encryption with guaranteed account safety and instant refunds
              </span>
            </div>

            <div className="group flex flex-col items-center space-y-4 p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl backdrop-blur-sm border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl shadow-yellow-500/25 group-hover:shadow-yellow-500/40 transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Lightning Fast</span>
              <span className="text-slate-400 text-center leading-relaxed">
                Diamonds delivered within 10 seconds with 24/7 automated processing
              </span>
            </div>

            <div className="group flex flex-col items-center space-y-4 p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Multiple Payments</span>
              <span className="text-slate-400 text-center leading-relaxed">
                KPay, WavePay, CB Pay, AYA Pay and 10+ payment methods available
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/mlbb">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 text-xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-110"
              >
                <Gem className="w-6 h-6 mr-3" />
                Start Shopping Now
                <Sparkles className="w-6 h-6 ml-3" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white text-xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Shield className="w-6 h-6 mr-3" />
              View Prices
            </Button>
          </div>
        </div>
      </section>

      {/* Diamond Packages Section */}
      <section id="packages" className="px-4 pb-24 relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Gem className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-5xl font-bold text-white mb-6">Premium Diamond Packages</h3>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Choose from our exclusive diamond collections with up to{" "}
              <span className="text-purple-400 font-bold">17% bonus diamonds</span> and instant delivery guarantee
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {mlbbPackages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden backdrop-blur-sm ${
                  pkg.popular ? "ring-2 ring-purple-500/50 shadow-2xl shadow-purple-500/25" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 px-6 py-2 shadow-xl shadow-purple-500/30 animate-pulse">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Most Popular Choice
                    </Badge>
                  </div>
                )}

                <CardContent className="p-8 text-center relative z-10">
                  {/* Diamond Icon */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500 group-hover:scale-110">
                      <Gem className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Package Name */}
                  <CardTitle className="text-white mb-4 group-hover:text-purple-400 transition-colors text-2xl font-bold">
                    {pkg.name}
                  </CardTitle>

                  {/* Diamond Amount */}
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-3">
                    {pkg.amount.toLocaleString()}
                  </div>
                  <div className="text-slate-400 mb-8 font-semibold text-lg">Mobile Legends Diamonds</div>

                  {/* Pricing */}
                  <div className="space-y-4 mb-8">
                    <div className="text-3xl font-bold text-white">{pkg.coinPrice} Coins</div>
                    {pkg.discount > 0 && (
                      <>
                        <div className="text-xl text-slate-400 line-through">{pkg.originalPrice} Coins</div>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg px-4 py-2"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          Save {pkg.discount}% • Best Value!
                        </Badge>
                      </>
                    )}
                  </div>

                  {/* Buy Button */}
                  <Link href="/mlbb">
                    <Button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 text-lg py-4 rounded-xl transition-all duration-300 hover:scale-105">
                      <Gem className="w-5 h-5 mr-2" />
                      Buy Now - Instant Delivery
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-4 py-24 bg-gradient-to-r from-slate-800/30 via-purple-900/20 to-slate-800/30 relative"
      >
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-white mb-6">Why Choose 7AM Diamond?</h3>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The most trusted and premium Mobile Legends diamond provider in Myanmar with over
              <span className="text-purple-400 font-bold"> 50,000+ happy customers</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Gem,
                title: "Premium Quality",
                description: "100% authentic diamonds directly from Moonton with lifetime guarantee",
                gradient: "from-purple-500 to-pink-500",
                delay: "0ms",
              },
              {
                icon: Zap,
                title: "Lightning Speed",
                description: "Instant delivery within 10 seconds with automated processing system",
                gradient: "from-blue-500 to-cyan-500",
                delay: "100ms",
              },
              {
                icon: Shield,
                title: "100% Safe",
                description: "Zero account ban risk with secure delivery and money-back guarantee",
                gradient: "from-green-500 to-emerald-500",
                delay: "200ms",
              },
              {
                icon: Sparkles,
                title: "Best Prices",
                description: "Competitive rates with exclusive bonuses and loyalty rewards program",
                gradient: "from-orange-500 to-red-500",
                delay: "300ms",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: feature.delay }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-white font-bold text-xl mb-4 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 relative">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/30">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Gem className="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 className="text-4xl font-bold text-white mb-6">Ready to Dominate Mobile Legends?</h3>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join thousands of players who trust 7AM Diamond for their Mobile Legends needs. Get your diamonds now and
              start your legendary journey!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/mlbb">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 text-xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-110"
                >
                  <Gem className="w-6 h-6 mr-3" />
                  Shop Diamonds Now
                  <Sparkles className="w-6 h-6 ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <Gem className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">7AM Diamond</h3>
                  <p className="text-slate-400 font-medium">Premium Mobile Legends Store</p>
                </div>
              </div>
              <p className="text-slate-400 mb-8 max-w-md leading-relaxed text-lg">
                Your trusted partner for Mobile Legends diamond top-ups. Fast, secure, and reliable service with the
                best prices in Myanmar. Join 50,000+ satisfied players!
              </p>
              <div className="flex space-x-4">
                {["FB", "TG", "IG", "YT"].map((social) => (
                  <div
                    key={social}
                    className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg"
                  >
                    <span className="text-white font-bold">{social}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-xl">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                {["Diamond Packages", "Buy Diamonds", "How to Top-Up", "Price List", "Special Offers"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-xl">Support</h4>
              <ul className="space-y-4 text-slate-400">
                {["Help Center", "Contact Us", "Payment Methods", "Terms of Service", "Privacy Policy"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 mt-16 pt-8 text-center">
            <p className="text-slate-400 text-lg">
              &copy; 2024 7AM Diamond. All rights reserved. | Made with{" "}
              <Gem className="w-5 h-5 inline text-purple-400 mx-1" />
              for Mobile Legends players in Myanmar
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
