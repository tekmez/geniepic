"use client";

import type React from "react";

import { useState, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();

    // Get clientX from either mouse or touch event
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;

    const position =
      ((clientX - containerRect.left) / containerRect.width) * 100;

    // Clamp the position between 0 and 100
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseDown = () => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const containerRect = containerRef.current!.getBoundingClientRect();
      const position =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-xl cursor-ew-resize group",
        className
      )}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={handleMouseDown}
    >
      {/* Before image */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={beforeLabel}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 text-sm rounded-full">
          {beforeLabel}
        </div>
      </div>

      {/* After image with clip-path */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
        }}
      >
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={afterLabel}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 text-sm rounded-full">
          {afterLabel}
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
          <div className="flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5L3 10L8 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 5L21 10L16 15"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
