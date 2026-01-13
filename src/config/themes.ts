/**
 * Centralized Theme Configuration
 * All theme tokens are defined here for consistency
 */

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  muted: string;
  mutedForeground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  border: string;
  input: string;
  ring: string;

  // Custom theme-specific colors
  gradientStart: string;
  gradientEnd: string;
  magicCardGradient: string;
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
  cssVariables: Record<string, string>;
}

/**
 * Light Theme Configuration
 */
export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(210, 11.1%, 3.53%)',
    primary: 'hsl(0, 0%, 9%)',
    primaryForeground: 'hsl(0, 0%, 98%)',
    secondary: 'hsl(0, 0%, 96.1%)',
    secondaryForeground: 'hsl(0, 0%, 9%)',
    accent: 'hsl(0, 0%, 96.1%)',
    accentForeground: 'hsl(0, 0%, 9%)',
    destructive: 'hsl(0, 84.2%, 60.2%)',
    destructiveForeground: 'hsl(0, 0%, 98%)',
    muted: 'hsl(0, 0%, 96.1%)',
    mutedForeground: 'hsl(0, 0%, 45.1%)',
    card: 'hsl(0, 0%, 100%)',
    cardForeground: 'hsl(210, 11.1%, 3.53%)',
    popover: 'hsl(0, 0%, 100%)',
    popoverForeground: 'hsl(210, 11.1%, 3.53%)',
    border: 'hsl(0, 0%, 89.8%)',
    input: 'hsl(0, 0%, 89.8%)',
    ring: 'hsl(0, 0%, 3.9%)',

    // Custom colors for components
    gradientStart: 'rgba(197, 241, 241, 0.4)',
    gradientEnd: 'rgba(197, 241, 241, 0.1)',
    magicCardGradient: 'rgba(197, 241, 241, 0.4)',
  },
  cssVariables: {
    '--background': '0 0% 100%',
    '--foreground': '210 11.1% 3.53%',
    '--primary': '0 0% 9%',
    '--primary-foreground': '0 0% 98%',
    '--secondary': '0 0% 96.1%',
    '--secondary-foreground': '0 0% 9%',
    '--accent': '0 0% 96.1%',
    '--accent-foreground': '0 0% 9%',
    '--destructive': '0 84.2% 60.2%',
    '--destructive-foreground': '0 0% 98%',
    '--muted': '0 0% 96.1%',
    '--muted-foreground': '0 0% 45.1%',
    '--card': '0 0% 100%',
    '--card-foreground': '210 11.1% 3.53%',
    '--popover': '0 0% 100%',
    '--popover-foreground': '210 11.1% 3.53%',
    '--border': '0 0% 89.8%',
    '--input': '0 0% 89.8%',
    '--ring': '0 0% 3.9%',
    '--radius': '0.5rem',
  }
};

/**
 * Dark Theme Configuration
 */
export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    background: 'hsl(210, 11.1%, 3.53%)',
    foreground: 'hsl(0, 0%, 98%)',
    primary: 'hsl(0, 0%, 98%)',
    primaryForeground: 'hsl(0, 0%, 9%)',
    secondary: 'hsl(0, 0%, 14.9%)',
    secondaryForeground: 'hsl(0, 0%, 98%)',
    accent: 'hsl(0, 0%, 14.9%)',
    accentForeground: 'hsl(0, 0%, 98%)',
    destructive: 'hsl(0, 62.8%, 30.6%)',
    destructiveForeground: 'hsl(0, 0%, 98%)',
    muted: 'hsl(0, 0%, 14.9%)',
    mutedForeground: 'hsl(0, 0%, 63.9%)',
    card: 'hsl(210, 11.1%, 3.53%)',
    cardForeground: 'hsl(0, 0%, 98%)',
    popover: 'hsl(210, 11.1%, 3.53%)',
    popoverForeground: 'hsl(0, 0%, 98%)',
    border: 'hsl(0, 0%, 14.9%)',
    input: 'hsl(0, 0%, 14.9%)',
    ring: 'hsl(0, 0%, 83.1%)',

    // Custom colors for components
    gradientStart: 'rgba(38, 38, 38, 0.8)',
    gradientEnd: 'rgba(38, 38, 38, 0.3)',
    magicCardGradient: '#262626',
  },
  cssVariables: {
    '--background': '210 11.1% 3.53%',
    '--foreground': '0 0% 98%',
    '--primary': '0 0% 98%',
    '--primary-foreground': '0 0% 9%',
    '--secondary': '0 0% 14.9%',
    '--secondary-foreground': '0 0% 98%',
    '--accent': '0 0% 14.9%',
    '--accent-foreground': '0 0% 98%',
    '--destructive': '0 62.8% 30.6%',
    '--destructive-foreground': '0 0% 98%',
    '--muted': '0 0% 14.9%',
    '--muted-foreground': '0 0% 63.9%',
    '--card': '210 11.1% 3.53%',
    '--card-foreground': '0 0% 98%',
    '--popover': '210 11.1% 3.53%',
    '--popover-foreground': '0 0% 98%',
    '--border': '0 0% 14.9%',
    '--input': '0 0% 14.9%',
    '--ring': '0 0% 83.1%',
    '--radius': '0.5rem',
  }
};

/**
 * Theme registry - easily add more themes in the future
 */
export const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

/**
 * Get theme by mode
 */
export function getTheme(mode: ThemeMode): Theme {
  return themes[mode];
}

/**
 * Get all available theme modes
 */
export function getThemeModes(): ThemeMode[] {
  return Object.keys(themes) as ThemeMode[];
}
