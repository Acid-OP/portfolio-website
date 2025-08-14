"use client";
import { useEffect, useState } from "react";

interface Dot {
  width: number;
  height: number;
  left: number;
  delay: number;
  duration: number;
}

interface CallToActionButtonProps {
  label: string;
}

export default function CallToActionButton({ label }: CallToActionButtonProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 8 }, () => ({
      width: Math.random() * 2 + 2, // slightly bigger for visibility
      height: Math.random() * 2 + 2,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 3,
    }));
    setDots(generated);
  }, []);

  return (
    <button className="relative cursor-pointer mt-6 px-20 py-4 bg-black text-white text-xl font-sans rounded-full shadow-xl hover:scale-105 transition overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <div
          className="absolute bottom-0 w-full h-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(255,255,255,0.4), transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Dots */}
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute bg-white rounded-full opacity-80 animate-rise"
          style={{
            width: `${dot.width}px`,
            height: `${dot.height}px`,
            left: `${dot.left}%`,
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
          }}
        />
      ))}

      {/* Label */}
      <span className="relative z-10">{label}</span>

      {/* Animation */}
      <style jsx>{`
        @keyframes rise {
          0% {
            top: 100%;
            opacity: 0.8;
            transform: translateX(0);
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateX(2px);
          }
          75% {
            transform: translateX(-2px);
          }
          100% {
            top: -10%;
            opacity: 0;
          }
        }

        .animate-rise {
          animation-name: rise;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </button>
  );
}
