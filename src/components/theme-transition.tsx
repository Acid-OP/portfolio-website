"use client";

import { useEffect } from "react";

export default function ThemeTransition() {
  useEffect(() => {
    const observeThemeChange = () => {
      const htmlElement = document.documentElement;
      
      const callback: MutationCallback = (mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            // Create ripple effect overlay
            const overlay = document.createElement("div");
            overlay.className = "theme-transition-overlay";
            document.body.appendChild(overlay);

            // Trigger animation
            requestAnimationFrame(() => {
              overlay.classList.add("active");
            });

            // Remove overlay after animation
            setTimeout(() => {
              overlay.remove();
            }, 800);
          }
        });
      };

      const observer = new MutationObserver(callback);
      observer.observe(htmlElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    };

    const cleanup = observeThemeChange();
    return cleanup;
  }, []);

  return null;
}

