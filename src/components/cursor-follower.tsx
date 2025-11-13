"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export function CursorFollower() {
  const defaultPosition = { x: 100, y: 100 }; // Fixed default position (top-left area)
  const [position, setPosition] = useState(defaultPosition);
  const [targetPosition, setTargetPosition] = useState(defaultPosition);
  const [rotation, setRotation] = useState(0);
  const canFollowRef = useRef(false);
  const isWaitingRef = useRef(false);

  // Update target position on mouse move with delay
  useEffect(() => {
    let idleTimer: NodeJS.Timeout;
    let followTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const currentMousePos = { x: e.clientX, y: e.clientY };
      
      // If not following yet and not waiting, start waiting
      if (!canFollowRef.current && !isWaitingRef.current) {
        isWaitingRef.current = true;
        followTimer = setTimeout(() => {
          canFollowRef.current = true;
          isWaitingRef.current = false;
        }, 2000);
      }
      
      // If allowed to follow, update target
      if (canFollowRef.current) {
        setTargetPosition(currentMousePos);
      }

      // Reset idle timer
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        // Return to default position after idle
        canFollowRef.current = false;
        isWaitingRef.current = false;
        setTargetPosition(defaultPosition);
      }, 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleTimer);
      clearTimeout(followTimer);
    };
  }, [defaultPosition]);

  // Smooth follow animation
  useEffect(() => {
    const followSpeed = 2.5; // Pixels per frame - constant speed
    const minDistance = 50; // Minimum distance to maintain from cursor
    
    const animate = () => {
      setPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Stop if we're close enough
        if (distance < minDistance) {
          return prev;
        }
        
        // Calculate rotation based on movement direction
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          setRotation(angle);
        }

        // Move at constant speed
        if (distance > minDistance) {
          const normalizedDx = dx / distance;
          const normalizedDy = dy / distance;
          const moveDistance = Math.min(followSpeed, distance - minDistance);
          
          return {
            x: prev.x + normalizedDx * moveDistance,
            y: prev.y + normalizedDy * moveDistance,
          };
        }

        return prev;
      });
    };

    const animationFrame = requestAnimationFrame(function frame() {
      animate();
      requestAnimationFrame(frame);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [targetPosition]);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      {/* Dog image */}
      <div className="w-14 h-14 relative drop-shadow-lg">
        <Image
          src="/—Pngtree—pixel art dog with laptop_14518287.png"
          alt="Dog cursor follower"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

