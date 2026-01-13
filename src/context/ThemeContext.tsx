'use client';

import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { useTheme as useNextTheme } from 'next-themes';
import { Theme, ThemeMode, getTheme } from '@/config/themes';

interface ThemeContextValue {
  theme: Theme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: (clickPosition?: { x: number; y: number }) => void;
  isTransitioning: boolean;
  transitionOrigin: { x: number; y: number } | null;
  nextMode: ThemeMode | null;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const { theme: nextTheme, setTheme: setNextTheme, resolvedTheme } = useNextTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState<{ x: number; y: number } | null>(null);
  const [nextMode, setNextMode] = useState<ThemeMode | null>(null);

  // Resolve the current theme mode
  const currentMode: ThemeMode = (resolvedTheme as ThemeMode) || 'light';
  const currentTheme = getTheme(currentMode);

  const setMode = useCallback((mode: ThemeMode) => {
    setNextTheme(mode);
  }, [setNextTheme]);

  const toggleTheme = useCallback((clickPosition?: { x: number; y: number }) => {
    const newMode: ThemeMode = currentMode === 'light' ? 'dark' : 'light';

    // Set transition origin - top right corner if no position provided
    const origin = clickPosition || {
      x: window.innerWidth,
      y: 0,
    };

    // Start the animation FIRST
    setTransitionOrigin(origin);
    setIsTransitioning(true);
    setNextMode(newMode);

    // Change theme AFTER animation covers about 80% of screen
    setTimeout(() => {
      setNextTheme(newMode);
    }, 800);

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
      setTransitionOrigin(null);
      setNextMode(null);
    }, 1000);
  }, [currentMode, setNextTheme]);

  const value: ThemeContextValue = {
    theme: currentTheme,
    mode: currentMode,
    setMode,
    toggleTheme,
    isTransitioning,
    transitionOrigin,
    nextMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme configuration and controls
 */
export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeContextProvider');
  }
  return context;
}
