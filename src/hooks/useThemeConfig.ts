'use client';

import { useThemeContext } from '@/context/ThemeContext';

/**
 * Convenient hook to access theme colors and configuration
 * Use this hook in components that need programmatic access to theme values
 *
 * @example
 * const { colors, mode, toggleTheme } = useThemeConfig();
 * <div style={{ background: colors.magicCardGradient }}>...</div>
 */
export function useThemeConfig() {
  const { theme, mode, setMode, toggleTheme, isTransitioning, transitionOrigin, nextMode } = useThemeContext();

  return {
    /** Current theme colors as JS objects (useful for inline styles) */
    colors: theme.colors,

    /** Current theme mode ('light' | 'dark') */
    mode,

    /** Whether the theme is currently transitioning */
    isTransitioning,

    /** Origin point for the transition animation */
    transitionOrigin,

    /** Next theme mode during transition */
    nextMode,

    /** Set theme mode directly */
    setMode,

    /** Toggle between light and dark theme with optional click position for animation */
    toggleTheme,

    /** Check if current theme is dark */
    isDark: mode === 'dark',

    /** Check if current theme is light */
    isLight: mode === 'light',
  };
}
