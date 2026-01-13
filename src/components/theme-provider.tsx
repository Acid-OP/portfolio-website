"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { ThemeTransition } from "./theme-transition";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeContextProvider>
        <ThemeTransition />
        {children}
      </ThemeContextProvider>
    </NextThemesProvider>
  );
}
