"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] opacity-50" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[96px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[96px] opacity-30" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <div className="inline-block mb-6">
          <motion.span
            className="text-primary text-lg font-semibold px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Introducing
          </motion.span>
        </div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          GeniePic
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          With superior quality compared to competitors, effortlessly remove
          unwanted objects, restore old photos, and retouch portraits with
          precision.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 relative group overflow-hidden"
            onClick={() => {
              window.open(
                "https://apps.apple.com/tr/app/geniepic/id6741926921?l=tr",
                "_blank"
              );
            }}
          >
            <span className="relative z-10">Download Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 relative group"
            onClick={() => {
              document
                .querySelector("#key-features")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 z-10"
      >
        <ArrowDown className="animate-bounce w-6 h-6 text-primary" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(238,70,211,0.05)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(24,160,251,0.05)_0%,transparent_65%)]" />
    </section>
  );
}
