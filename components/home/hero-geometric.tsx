"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import { useReducedAnimations } from "./performance-utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

// Update the HeroGeometric component to work with the sticky background
export default function HeroGeometric({
  title1 = "GeniePic",
  title2 = "Photo Editor",
}: {
  title1?: string;
  title2?: string;
}) {
  const reduceAnimations = useReducedAnimations();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: reduceAnimations ? 15 : 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceAnimations ? 0.6 : 1,
        delay: reduceAnimations ? 0.2 + i * 0.1 : 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ willChange: "transform, opacity" }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 ",
                  pacifico.className
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Remove, restore, retouch—flawlessly. Superior quality, zero
              effort.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
