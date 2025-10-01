"use client"

import { useEffect, useState } from "react"
import { ParticleBackground } from "@/components/particle-background"
import { InteractiveCard } from "@/components/interactive-card"
import { ChristmasCountdown } from "@/components/christmas-countdown"
import { ChristmasMusicPlayer } from "@/components/christmas-music-player"

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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Mouse Follower */}
      {mounted && (
        <div
          className="pointer-events-none fixed z-50 h-8 w-8 rounded-full bg-blue-500/20 blur-xl transition-all duration-300"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
          }}
        />
      )}

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 animate-pulse-glow blur-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20" />
            
            {/* Main Title */}
            <h1 className="relative text-6xl sm:text-8xl lg:text-9xl font-black text-balance mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                VMIS
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
              IT Department
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Programming & Hardware Solutions
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-16 w-full max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <InteractiveCard 
              title="HRMS" 
              emoji="👥" 
              delay={0} 
              color="from-blue-400 to-cyan-400" 
            />
            <InteractiveCard 
              title="Inventory" 
              emoji="📦" 
              delay={0.1} 
              color="from-green-400 to-emerald-400" 
            />
            <InteractiveCard 
              title="Power Monitoring" 
              emoji="⚡" 
              delay={0.2} 
              color="from-yellow-400 to-orange-400" 
            />
            <InteractiveCard 
              title="POS System" 
              emoji="💳" 
              delay={0.3} 
              color="from-purple-400 to-pink-400" 
            />
          </div>
        </div>

        {/* Nextcloud Section */}
        <div className="mb-16 animate-float-slow">
          <div className="rounded-3xl bg-white/80 backdrop-blur-sm px-8 py-6 shadow-2xl border-4 border-blue-500/20">
            <div className="text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Nextcloud Setup</h3>
              <p className="text-lg text-gray-600">Secure file sharing and collaboration platform</p>
            </div>
          </div>
        </div>

        {/* Christmas Section */}
        <div className="mb-16 space-y-8">
          <ChristmasCountdown />
          <ChristmasMusicPlayer />
        </div>

        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-300 to-indigo-300 blur-2xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-slow opacity-20">
          <div className="h-40 w-40 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 blur-2xl" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-pulse-glow opacity-15">
          <div className="h-24 w-24 rounded-full bg-gradient-to-br from-cyan-300 to-blue-300 blur-2xl" />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8">
        <div className="text-gray-600">
          <p>&copy; {new Date().getFullYear()} G - A III</p>
        </div>
      </footer>

      {/* Bottom Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 to-transparent" />
    </main>
  )
}

