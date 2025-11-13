"use client";

import Image from "next/image";

interface TestimonialCardProps {
  image: string;
  rotation: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: {
    width: string;
    height: string;
  };
  zIndex?: number;
}

export function TestimonialCard({
  image,
  rotation,
  position,
  size,
  zIndex = 1,
}: TestimonialCardProps) {
  
  return (
    <div 
      className="absolute transition-all duration-700 ease-out hover:scale-105 hover:z-50 hover:shadow-2xl group testimonial-item"
      style={{
        transform: `rotate(${rotation}deg)`,
        ...position,
        zIndex,
      }}
    >
      <div 
        className="relative border border-gray-900/30 dark:border-gray-100/30 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-black"
        style={{
          width: size.width,
          height: size.height,
        }}
      >
        <Image
          src={image}
          alt="Client testimonial"
          fill
          className="object-cover scale-100 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 90vw, 400px"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

