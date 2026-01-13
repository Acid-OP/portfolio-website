"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Custom smooth scroll implementation for slower, smoother scrolling
    let isScrolling = false;
    let targetScrollY = window.scrollY;
    
    const smoothScroll = () => {
      if (!isScrolling) return;
      
      const currentScrollY = window.scrollY;
      const distance = targetScrollY - currentScrollY;
      
      // Easing function for smooth deceleration
      const ease = distance * 0.1;
      
      if (Math.abs(distance) > 0.5) {
        window.scrollTo(0, currentScrollY + ease);
        requestAnimationFrame(smoothScroll);
      } else {
        window.scrollTo(0, targetScrollY);
        isScrolling = false;
      }
    };
    
    const handleWheel = (e: WheelEvent) => {
      // Only prevent default if not scrolling horizontally
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        e.preventDefault();
      }
      
      // Adjust scroll speed: lower = slower (default is ~3-5)
      const scrollSpeed = 1.5;
      targetScrollY += e.deltaY * scrollSpeed;
      
      // Clamp to document bounds
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollY = Math.max(0, Math.min(targetScrollY, maxScroll));
      
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
      }
    };
    
    // Only apply on desktop (with mouse)
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (isDesktop) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (isDesktop) {
        window.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);
  
  return null;
}

