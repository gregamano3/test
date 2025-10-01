"use client"

import { useEffect, useState } from "react"
import { FloatingHearts } from "@/components/floating-hearts"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedText } from "@/components/animated-text"
import { InteractiveCard } from "@/components/interactive-card"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Mouse Follower */}
      {mounted && (
        <div
          className="pointer-events-none fixed z-50 h-8 w-8 rounded-full bg-primary/20 blur-xl transition-all duration-300"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
          }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Animated Main Text */}
        <div className="mb-12 text-center">
          <AnimatedText />
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          <InteractiveCard title="Forever" emoji="💕" delay={0} color="from-pink-400 to-rose-400" />
          <InteractiveCard title="Together" emoji="🌟" delay={0.2} color="from-blue-400 to-cyan-400" />
          <InteractiveCard title="Always" emoji="✨" delay={0.4} color="from-purple-400 to-pink-400" />
        </div>

        {/* Floating Message */}
        <div className="mt-16 animate-float-slow">
          <div className="rounded-3xl bg-white/80 backdrop-blur-sm px-8 py-6 shadow-2xl border-4 border-primary/20">
            <p className="text-2xl font-bold text-primary text-center">{"Every moment with you is magical ✨"}</p>
          </div>
        </div>

        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-pink-300 to-rose-300 blur-2xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-slow opacity-30">
          <div className="h-40 w-40 rounded-full bg-gradient-to-br from-blue-300 to-cyan-300 blur-2xl" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-pulse-glow opacity-20">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 blur-2xl" />
        </div>
      </div>

      {/* Bottom Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent" />
    </main>
  )
}
