"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedAnimations } from "./performance-utils";

// Re-implement the ElegantShape component for the background
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  scrollFactor = 0.05,
  scrollY = 0,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  scrollFactor?: number;
  scrollY?: number;
}) {
  const reduceAnimations = useReducedAnimations();

  // Reduce animation complexity for low-end devices
  const animationDuration = reduceAnimations ? 1.2 : 2.4;
  const floatAnimation = reduceAnimations ? [0, 5, 0] : [0, 15, 0];
  const floatDuration = reduceAnimations ? 8 : 12;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: animationDuration,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
      style={{
        willChange: "transform, opacity",
        transform: `translateY(${scrollY * scrollFactor}px)`,
      }}
    >
      <motion.div
        animate={{
          y: floatAnimation,
        }}
        transition={{
          duration: floatDuration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
          willChange: "transform",
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface StickyBackgroundProps {
  className?: string;
  backgroundClassName?: string;
  overlayClassName?: string;
}

export default function StickyBackground({
  className,
  backgroundClassName,
  overlayClassName,
}: StickyBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceAnimations = useReducedAnimations();

  // Throttle scroll events for better performance
  useEffect(() => {
    let ticking = false;
    let lastKnownScrollY = 0;

    const onScroll = () => {
      lastKnownScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(lastKnownScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed top-0 left-0 w-full h-screen z-0",
        "bg-[#030303] overflow-hidden",
        backgroundClassName
      )}
      style={{
        willChange: "transform",
      }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      {/* Animated shapes with entrance animations and subtle parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          scrollFactor={0.05}
          scrollY={scrollY}
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          scrollFactor={-0.03}
          scrollY={scrollY}
        />

        {!reduceAnimations && (
          <>
            <ElegantShape
              delay={0.4}
              width={300}
              height={80}
              rotate={-8}
              gradient="from-violet-500/[0.15]"
              className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
              scrollFactor={0.02}
              scrollY={scrollY}
            />

            <ElegantShape
              delay={0.6}
              width={200}
              height={60}
              rotate={20}
              gradient="from-amber-500/[0.15]"
              className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
              scrollFactor={-0.04}
              scrollY={scrollY}
            />

            <ElegantShape
              delay={0.7}
              width={150}
              height={40}
              rotate={-25}
              gradient="from-cyan-500/[0.15]"
              className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
              scrollFactor={0.03}
              scrollY={scrollY}
            />
          </>
        )}
      </div>

      {/* Overlay gradient that fades content into background */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none",
          overlayClassName
        )}
      />
    </div>
  );
}
