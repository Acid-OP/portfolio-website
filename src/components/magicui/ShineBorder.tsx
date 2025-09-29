'use client'

import React from "react";
import { cn } from "@/lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string[] | string;
  borderWidth?: number;
  borderRadius?: number;
  duration?: number;
}

export default function ShineBorder({
  children,
  className,
  color = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  borderWidth = 1,
  borderRadius = 8,
  duration = 10,
}: ShineBorderProps) {
  const colorArray = Array.isArray(color) ? color : [color];
  
  return (
    <div
      className={cn("relative", className)}
      style={{
        borderRadius: `${borderRadius}px`,
      }}
    >
      {/* Animated border */}
      <div
        className="absolute inset-0 z-0"
        style={{
          borderRadius: `${borderRadius}px`,
          padding: `${borderWidth}px`,
          background: `linear-gradient(90deg, ${colorArray.join(", ")}, ${colorArray[0]})`,
          backgroundSize: "400% 400%",
          animation: `shine ${duration}s linear infinite`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 400% 50%;
          }
        }
      `}</style>
    </div>
  );
}