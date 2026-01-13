'use client';

import React, { useEffect, useState } from 'react';
import { useThemeConfig } from '@/hooks/useThemeConfig';

/**
 * ThemeTransition Component
 *
 * Creates a circular ripple animation that expands from the click position
 * when the theme changes. This creates a smooth visual transition from
 * one theme to another, starting from a corner or any click point.
 */
export function ThemeTransition() {
  const { isTransitioning, transitionOrigin, nextMode, mode } = useThemeConfig();
  const [isVisible, setIsVisible] = useState(false);
  const [circleProps, setCircleProps] = useState<{
    x: number;
    y: number;
    size: number;
    newColor: string;
    oldColor: string;
  } | null>(null);

  useEffect(() => {
    if (isTransitioning && transitionOrigin && nextMode) {
      // Calculate the distance needed to cover the entire viewport
      const maxDistance = Math.sqrt(
        Math.pow(Math.max(transitionOrigin.x, window.innerWidth - transitionOrigin.x), 2) +
        Math.pow(Math.max(transitionOrigin.y, window.innerHeight - transitionOrigin.y), 2)
      );

      const circleSize = maxDistance * 3; // Even bigger for complete coverage

      setCircleProps({
        x: transitionOrigin.x,
        y: transitionOrigin.y,
        size: circleSize,
        newColor: nextMode === 'dark'
          ? 'hsl(210, 11.1%, 3.53%)'
          : 'hsl(0, 0%, 100%)',
        oldColor: mode === 'dark'
          ? 'hsl(210, 11.1%, 3.53%)'
          : 'hsl(0, 0%, 100%)',
      });

      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isTransitioning, transitionOrigin, nextMode, mode]);

  if (!isVisible || !circleProps) {
    return null;
  }

  return (
    <>
      {/* Old theme background layer - covers everything */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9998,
          background: circleProps.oldColor,
        }}
        aria-hidden="true"
      />

      {/* New theme revealed through expanding circle */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9999,
        }}
        aria-hidden="true"
      >
        <div
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${circleProps.x}px`,
            top: `${circleProps.y}px`,
            width: `${circleProps.size}px`,
            height: `${circleProps.size}px`,
            background: circleProps.newColor,
            transform: 'translate(-50%, -50%) scale(0)',
            animation: 'themeRipple 1s ease-out forwards',
          }}
        />
      </div>
      <style jsx global>{`
        @keyframes themeRipple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
