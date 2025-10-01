"use client"

import type React from "react"

import { useState } from "react"

interface InteractiveCardProps {
  title: string
  emoji: string
  delay: number
  color: string
}

export function InteractiveCard({ title, emoji, delay, color }: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div className="animate-bounce-in" style={{ animationDelay: `${delay}s` }}>
      <div
        className="group relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.05 : 1})`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${color} p-8 shadow-2xl transition-all duration-300 ${isHovered ? "shadow-3xl" : ""}`}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <div
              className={`mb-4 text-6xl transition-transform duration-300 ${isHovered ? "scale-125 rotate-12" : ""}`}
            >
              {emoji}
            </div>
            <h3 className="text-3xl font-bold text-white drop-shadow-lg">{title}</h3>
          </div>

          {/* Floating Sparkles */}
          {isHovered && (
            <>
              <div className="absolute top-4 right-4 text-2xl animate-bounce-in">✨</div>
              <div className="absolute bottom-4 left-4 text-2xl animate-bounce-in" style={{ animationDelay: "0.1s" }}>
                ⭐
              </div>
              <div className="absolute top-1/2 left-1/2 text-2xl animate-bounce-in" style={{ animationDelay: "0.2s" }}>
                💫
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
