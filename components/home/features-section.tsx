"use client";

import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import BeforeAfterSlider from "./before-after-slider";
import { useReducedAnimations } from "./performance-utils";
import { memo } from "react";

// Memoize the BeforeAfterSlider component to prevent unnecessary re-renders
const MemoizedBeforeAfterSlider = memo(BeforeAfterSlider);

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export default function FeaturesSection() {
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

  const features = [
    {
      title: "Clean your portraits",
      description: "Remove sunburns, blemishes, and other imperfections.",
      beforeImage: "/images/retoucher-before.jpg",
      afterImage: "/images/retoucher-after.png",
    },
    {
      title: "Colorization",
      description:
        "Colorize black and white photos with our advanced colorization tool.",
      beforeImage: "/images/colorization-before.jpg",
      afterImage: "/images/colorization-after.png",
    },
    {
      title: "Object Removal",
      description:
        "Remove unwanted objects from your photos with our advanced object removal tool.",
      beforeImage: "/images/object-removal-before.png",
      afterImage: "/images/object-removal-after.png",
    },
  ];

  return (
    <div className="relative w-full py-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={0}
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ willChange: "transform, opacity" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Transform Your Vision With
            </span>{" "}
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300",
                pacifico.className
              )}
            >
              Stunning Results
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={1}
            className="text-white/40 max-w-2xl mx-auto text-lg"
            style={{ willChange: "transform, opacity" }}
          >
            See the difference our tools can make with these before and after
            comparisons
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 2}
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm"
              style={{ willChange: "transform, opacity" }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/40 mb-6">{feature.description}</p>
              <MemoizedBeforeAfterSlider
                beforeImage={feature.beforeImage}
                afterImage={feature.afterImage}
                className="shadow-lg shadow-indigo-500/10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
