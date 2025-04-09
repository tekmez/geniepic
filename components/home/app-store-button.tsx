"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AppleIcon } from "lucide-react";

interface AppStoreButtonProps {
  href?: string;
  className?: string;
}

export default function AppStoreButton({
  href = "https://apps.apple.com/app/6741926921",
  className,
}: AppStoreButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-3 px-6 py-3 rounded-full",
        "bg-gradient-to-r from-indigo-500/20 to-rose-500/20",
        "border border-white/10 backdrop-blur-sm",
        "hover:from-indigo-500/30 hover:to-rose-500/30",
        "transition-all duration-300 ease-in-out",
        "shadow-lg shadow-indigo-500/10",
        "group",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
        <AppleIcon className="w-6 h-6 text-black" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-white/70">Download on the</span>
        <span className="text-lg font-semibold text-white">App Store</span>
      </div>
      <motion.div
        className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.a>
  );
}
