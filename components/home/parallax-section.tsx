"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { useReducedAnimations } from "./performance-utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export default function ParallaxSection({ children, className, speed = 0.2, direction = "up" }: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const reduceAnimations = useReducedAnimations()

  // Disable parallax effect if user prefers reduced motion
  const actualSpeed = reduceAnimations ? 0 : speed

  useEffect(() => {
    if (reduceAnimations) return

    const section = sectionRef.current
    if (!section) return

    let ticking = false
    let lastKnownScrollY = 0

    const onScroll = () => {
      lastKnownScrollY = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sectionRect = section.getBoundingClientRect()
          const sectionTop = sectionRect.top + window.scrollY
          const windowHeight = window.innerHeight

          // Calculate how far the section is from the viewport center
          const distanceFromCenter = sectionTop + sectionRect.height / 2 - (lastKnownScrollY + windowHeight / 2)

          // Set the parallax offset based on this distance
          setOffset(distanceFromCenter * actualSpeed)

          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // Initial calculation

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [actualSpeed, reduceAnimations])

  const parallaxStyle = {
    transform: direction === "up" ? `translateY(${-offset}px)` : `translateY(${offset}px)`,
    willChange: reduceAnimations ? "auto" : "transform",
  }

  return (
    <div ref={sectionRef} className={cn("relative overflow-hidden", className)}>
      <div style={parallaxStyle}>{children}</div>
    </div>
  )
}

