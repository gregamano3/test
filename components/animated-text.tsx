"use client"

import { useEffect, useState } from "react"

export function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative">
      {/* Background Glow */}
      <div className="absolute inset-0 animate-pulse-glow blur-3xl bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />

      {/* Main Text */}
      <div className="relative">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-balance">
          <span
            className={`inline-block transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Jeff
            </span>
          </span>{" "}
          <span
            className={`inline-block animate-heart-beat transition-all duration-1000 ${
              isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-primary drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">{"<3"}</span>
          </span>{" "}
          <span
            className={`inline-block transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Joy
            </span>
          </span>
        </h1>

        {/* Decorative Hearts */}
        <div className="absolute -top-8 -left-8 text-4xl animate-bounce-in opacity-80" style={{ animationDelay: "1s" }}>
          💖
        </div>
        <div
          className="absolute -top-4 -right-4 text-3xl animate-bounce-in opacity-80"
          style={{ animationDelay: "1.2s" }}
        >
          💝
        </div>
        <div
          className="absolute -bottom-6 left-1/4 text-3xl animate-bounce-in opacity-80"
          style={{ animationDelay: "1.4s" }}
        >
          💗
        </div>
      </div>
    </div>
  )
}
