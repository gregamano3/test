"use client"

import { useEffect, useState } from "react"

export function ChristmasCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const christmas = new Date(currentYear, 11, 25) // December 25th

      // If Christmas has passed this year, set it for next year
      if (now > christmas) {
        christmas.setFullYear(currentYear + 1)
      }

      const difference = christmas.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="animate-bounce-in">
      <div className="rounded-3xl bg-gradient-to-br from-red-500/90 via-green-500/90 to-red-500/90 backdrop-blur-sm px-8 py-6 shadow-2xl border-4 border-red-400/30">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-heart-beat">🎄</div>
          <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
            Christmas Countdown
          </h3>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
              <div className="text-sm text-white/80">Days</div>
            </div>
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
              <div className="text-sm text-white/80">Hours</div>
            </div>
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
              <div className="text-sm text-white/80">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
              <div className="text-sm text-white/80">Seconds</div>
            </div>
          </div>
          
          <div className="mt-4 text-white/90 text-sm">
            Until Christmas Day! 🎅
          </div>
        </div>
      </div>
    </div>
  )
}
