"use client";

import Link from "next/link";
// Import the performance utilities
import { useReducedAnimations } from "./performance-utils";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Footer componentinin props tipini tanımla
interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const reduceAnimations = useReducedAnimations();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: reduceAnimations ? 10 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceAnimations ? 0.5 : 0.8,
        delay: reduceAnimations ? 0.05 + i * 0.05 : 0.1 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy", target: "_self" },
    {
      name: "Terms of Service",
      href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
      target: "_blank",
    },
    {
      name: "Contact Us",
      href: "mailto:developertuncay@gmail.com",
      target: "_blank",
    },
  ];

  return (
    <footer
      className={cn(
        "relative w-full py-12 bg-[#030303] overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="text-white/40 text-sm"
            style={{ willChange: "transform, opacity" }}
          >
            © {currentYear} GeniePic. All rights reserved.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="flex flex-wrap justify-center md:justify-start space-x-4 mt-4 md:mt-0"
            style={{ willChange: "transform, opacity" }}
          >
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.target}
                className="text-white/40 hover:text-white transition-colors duration-200 text-sm mb-2 md:mb-0"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
