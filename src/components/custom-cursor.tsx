"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const requestRef = useRef<number>();

  useEffect(() => {
    let targetPosition = { x: 0, y: 0 };

    const updatePosition = (e: MouseEvent) => {
      targetPosition = { x: e.clientX, y: e.clientY };
      
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

    // Add mouse move listener
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
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.8 : 1})`,
      }}
    />
  );
}

