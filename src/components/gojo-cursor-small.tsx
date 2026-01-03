"use client";

import { useEffect, useState, useRef } from "react";

export default function GojoSmallCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number>();

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

    let targetPosition = { x: 0, y: 0 };

    const updatePosition = (e: MouseEvent) => {
      targetPosition = { x: e.clientX, y: e.clientY };
      
      // Make cursor visible once mouse moves
      if (!isVisible) setIsVisible(true);
      
      // Use requestAnimationFrame for smoother updates
      if (!requestRef.current) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      setPosition(targetPosition);
      requestRef.current = undefined;
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
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isMobile, isVisible]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        // Scale down from 128px to ~24px (0.19) - smaller size
        transform: `translate(-50%, -50%) scale(${isHovering ? 0.23 : 0.19})`,
        opacity: isVisible ? 1 : 0,
        transition: 'transform 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.2s ease',
        willChange: 'transform, opacity',
      }}
    >
      {/* Display the Gojo cursor as an image, scaled down from 128px original size */}
      <img 
        src="/gojo-pointer.cur" 
        alt="cursor"
        className="w-32 h-32 select-none"
        style={{
          imageRendering: 'auto',
          filter: isHovering ? 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))' : 'none',
        }}
        draggable={false}
      />
    </div>
  );
}

