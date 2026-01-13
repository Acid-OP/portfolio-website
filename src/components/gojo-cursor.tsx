"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function GojoCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't run on mobile
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .cursor-pointer'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`,
      }}
    >
      {/* Gojo Infinity Cursor - Scaled to 24px from original 128px */}
      <div className="relative w-6 h-6">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
          {/* Outer glow */}
          <circle cx="12" cy="12" r="11" fill="url(#glow)" opacity="0.4"/>
          {/* Main infinity circle */}
          <circle cx="12" cy="12" r="9" stroke="#60A5FA" strokeWidth="1.5" fill="none" className="animate-pulse"/>
          {/* Inner circle */}
          <circle cx="12" cy="12" r="6" stroke="#38BDF8" strokeWidth="1" fill="rgba(59, 130, 246, 0.1)"/>
          {/* Center dot */}
          <circle cx="12" cy="12" r="2" fill="white" className="drop-shadow-md"/>
          
          <defs>
            <radialGradient id="glow">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

