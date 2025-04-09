"use client"

import { useEffect, useState, useCallback } from "react"

// Detect if the device is low-end based on memory and CPU cores
export function useLowEndDevice() {
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    // Check for device memory API
    const lowMemory =
      "deviceMemory" in navigator &&
      // @ts-ignore - deviceMemory exists but TypeScript doesn't know about it
      navigator.deviceMemory < 4

    // Check for hardware concurrency (CPU cores)
    const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

    // Check for battery API to detect if in low power mode
    const checkBattery = async () => {
      if ("getBattery" in navigator) {
        try {
          // @ts-ignore - getBattery exists but TypeScript doesn't know about it
          const battery = await navigator.getBattery()
          return battery.charging === false && battery.level < 0.2
        } catch (e) {
          return false
        }
      }
      return false
    }

    // Combine checks to determine if device is low-end
    const detectLowEnd = async () => {
      const lowBattery = await checkBattery()
      setIsLowEnd(lowMemory || lowCPU || lowBattery)
    }

    detectLowEnd()
  }, [])

  return isLowEnd
}

// Custom hook to throttle animations based on device capability
export function useReducedAnimations() {
  const isLowEndDevice = useLowEndDevice()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  // Return true if animations should be reduced
  return prefersReducedMotion || isLowEndDevice
}

// Custom hook to only animate when element is visible
export function useAnimateOnVisible() {
  const [ref, setRef] = useState<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const setReferenceElement = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      setRef(node)
    }
  }, [])

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when at least 10% is visible
      },
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return { ref: setReferenceElement, isVisible }
}

