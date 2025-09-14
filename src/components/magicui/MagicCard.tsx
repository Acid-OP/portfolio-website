'use client'

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientSize?: number;
}

export function MagicCard({
  children,
  className,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientSize = 200,
}: MagicCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -gradientSize, y: -gradientSize });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: -gradientSize, y: -gradientSize });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("group relative overflow-hidden", className)}
      style={{
        background: `radial-gradient(${gradientSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent ${gradientOpacity * 100}%)`,
      }}
    >
      {children}
    </div>
  );
}