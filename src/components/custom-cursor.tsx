"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("#000000");
  const requestRef = useRef<number>();

  // Function to get contrasting color based on background
  const getContrastColor = (element: Element): string => {
    const computedStyle = window.getComputedStyle(element);
    const bgColor = computedStyle.backgroundColor;
    
    // Parse RGB values
    const rgb = bgColor.match(/\d+/g);
    if (!rgb || rgb.length < 3) return "#000000";
    
    const [r, g, b] = rgb.map(Number);
    
    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return contrasting color
    return luminance > 0.5 ? "#000000" : "#FFFFFF";
  };

  useEffect(() => {
    let targetPosition = { x: 0, y: 0 };

    const updatePosition = (e: MouseEvent) => {
      targetPosition = { x: e.clientX, y: e.clientY };
      
      // Get element under cursor
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        const newColor = getContrastColor(elementUnderCursor);
        setCursorColor(newColor);
      }
      
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
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        backgroundColor: cursorColor,
        transition: "background-color 0.2s ease, transform 0.08s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    />
  );
}

