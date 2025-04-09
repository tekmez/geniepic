import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StickyBackground from "@/components/home/sticky-background";
import Footer from "@/components/home/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeniePic",
  description: "GeniePic is a platform for editing images with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StickyBackground />
        <main className="flex-grow relative z-10">{children}</main>
        <Footer className="relative z-10" />
      </body>
    </html>
  );
}
