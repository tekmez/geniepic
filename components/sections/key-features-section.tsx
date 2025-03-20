"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const keyFeatures = [
  {
    title: "Remove objects",
    description: "Clean up your photos without disrupting the background.",
    image: "/images/remove-objects.png",
  },
  {
    title: "Restore old photos",
    description: "Revive faded, damaged, or worn-out pictures.",
    image: "/images/restore-old-photos.png",
  },
  {
    title: "Retouch portraits",
    description: "Remove skin imperfections to enhance your natural beauty.",
    image: "/images/retouch-portraits.png",
  },
];

export function KeyFeaturesSection() {
  return (
    <section id="key-features" className="py-20 px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute  bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] opacity-50" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[96px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[96px] opacity-30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
          Transform Your Photos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Professional-grade photo editing tools powered by advanced AI
          technology
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 relative">
                {/* <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" /> */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="inset-0 p-2 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground transform opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px] opacity-50" />
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[96px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[96px] opacity-30" />
      </div>
      {/* Enhanced background decorative elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(238,70,211,0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(24,160,251,0.08)_0%,transparent_60%)]" /> */}
    </section>
  );
}
