"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Avatar */}
            <Avatar className="size-14 border-2 border-foreground/20 hover:border-foreground/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 ring-2 ring-background">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            </Avatar>
            
            {/* Arrow overlay on hover */}
            <div 
              className={`absolute inset-0 flex items-center justify-center bg-black/70 dark:bg-white/70 rounded-full transition-all duration-300 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <ArrowUp className="w-6 h-6 text-white dark:text-black animate-bounce" />
            </div>
          </div>
        </button>
      )}
    </>
  );
}

