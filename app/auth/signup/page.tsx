"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Gem, Sparkles, Shield, ArrowRight, Eye, EyeOff, User, Mail, Phone } from "lucide-react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    fullName: "",
    phone: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Design only - simulate loading
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/auth/signin?message=Account created successfully"
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen p-4 relative z-10">
        <Card className="w-full max-w-2xl bg-slate-800/90 border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
          <CardHeader className="text-center pb-8 pt-12">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
                  <Gem className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                  7AM Diamond
                </h1>
                <p className="text-sm text-slate-400 font-medium">Premium Mobile Legends Store</p>
              </div>
            </div>

            <CardTitle className="text-white text-3xl font-bold mb-2">Join the Diamond Elite!</CardTitle>
            <CardDescription className="text-slate-400 text-lg">
              Create your account and get exclusive access to premium Mobile Legends diamonds with special bonuses
            </CardDescription>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="username" className="text-white font-semibold flex items-center">
                    <User className="w-4 h-4 mr-2 text-purple-400" />
                    Username
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 h-12 rounded-xl"
                    placeholder="Choose username"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="text-white font-semibold flex items-center">
                    <User className="w-4 h-4 mr-2 text-purple-400" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 h-12 rounded-xl"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <Label htmlFor="email" className="text-white font-semibold flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-purple-400" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 h-12 rounded-xl"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="phone" className="text-white font-semibold flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-purple-400" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 h-12 rounded-xl"
                  placeholder="09xxxxxxxxx (Optional)"
                />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="password" className="text-white font-semibold flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-purple-400" />
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 h-12 rounded-xl pr-12"
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="confirmPassword" className="text-white font-semibold flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-purple-400" />
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-purple-500 h-12 rounded-xl pr-12"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start space-x-3 p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <input
                  type="checkbox"
                  required
                  className="mt-1 rounded border-slate-600 bg-slate-700 text-purple-600 focus:ring-purple-500"
                />
                <div className="text-sm text-slate-300 leading-relaxed">
                  I agree to the{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300 font-medium">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-400 hover:text-purple-300 font-medium">
                    Privacy Policy
                  </a>
                  . I also agree to receive promotional emails about diamond offers and Mobile Legends updates.
                </div>
              </div>

              {/* Create Account Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 text-lg py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Creating your diamond account...
                  </>
                ) : (
                  <>
                    <Gem className="w-5 h-5 mr-2" />
                    Create Diamond Account
                    <Sparkles className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-slate-600"></div>
              <span className="px-4 text-slate-400 font-medium">Already have an account?</span>
              <div className="flex-1 border-t border-slate-600"></div>
            </div>

            {/* Sign In Link */}
            <div className="text-center">
              <Link href="/auth/signin">
                <Button
                  variant="outline"
                  className="w-full border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-400 text-lg py-4 rounded-xl transition-all duration-300 bg-transparent"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Sign In to Existing Account
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
