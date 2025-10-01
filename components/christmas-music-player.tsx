"use client"

import { useRef, useEffect, useState } from "react"

export function ChristmasMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Function to start music
    const startMusic = async () => {
      if (hasStarted) return
      
      try {
        await audio.play()
        setHasStarted(true)
        console.log('Christmas music started playing! 🎵')
      } catch (error) {
        console.log('Music play failed:', error)
      }
    }

    // Try to start music on any user interaction
    const handleUserInteraction = () => {
      startMusic()
      // Remove listeners after first interaction
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)
    document.addEventListener('touchstart', handleUserInteraction)

    // Also try autoplay (might work in some cases)
    const timer = setTimeout(() => {
      startMusic()
    }, 2000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [hasStarted])

  return (
    <div className="hidden">
      {/* Hidden Audio Element - Background Music Only */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        volume={0.7}
      >
        <source src="/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
