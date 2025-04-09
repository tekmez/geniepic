"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import AppStoreButton from "./app-store-button";
import { useReducedAnimations } from "./performance-utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function CTASection() {
  const reduceAnimations = useReducedAnimations();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: reduceAnimations ? 15 : 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceAnimations ? 0.6 : 1,
        delay: reduceAnimations ? 0.1 + i * 0.1 : 0.2 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative w-full py-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Ready to
            </span>
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                pacifico.className
              )}
            >
              Transform
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Your Experience?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-white/40 max-w-2xl mx-auto text-lg mb-8"
            style={{ willChange: "transform, opacity" }}
          >
            Download our app today and start creating stunning visuals with just
            a few taps. Join thousands of satisfied users who have elevated
            their digital presence.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="flex justify-center"
            style={{ willChange: "transform, opacity" }}
          >
            <AppStoreButton />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
