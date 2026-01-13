"use client";

import { useEffect } from "react";

export function ScrollToTopOnMount() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      // Force scroll position to top
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
}

