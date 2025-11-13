"use client";

import { useState, useEffect } from "react";
import { Mail, MessageCircle, X } from "lucide-react";
import { DATA } from "@/data/resume";
import Link from "next/link";

export function QuickContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Floating Action Button */}
      <div className="relative">
        {/* Action Menu */}
        {isOpen && (
          <div className="absolute bottom-16 left-0 flex flex-col gap-3 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Link
              href={`mailto:${DATA.contact.email}`}
              className="group flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="size-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium whitespace-nowrap pr-2">Send Email</span>
            </Link>
            
            <Link
              href="https://cal.com/gaurav-kapur/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="size-5 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium whitespace-nowrap pr-2">Book a Call</span>
            </Link>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-3 rounded-full bg-black dark:bg-white text-white dark:text-black shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
          aria-label="Quick contact"
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <MessageCircle className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}

