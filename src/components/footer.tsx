"use client";

import { DATA } from "@/data/resume";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 pb-8 border-t border-border/40">
      <div className="mx-auto w-full max-w-2xl pt-8">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
          {/* Brand/Name */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-1">{DATA.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {DATA.description}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    aria-label={social.name}
                  >
                    <div className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-110">
                      <Icon className="size-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </p>
          <p className="italic text-center">
             Everything negative, pressure, challenges is all an opportunity for me to rise.
          </p>
        </div>
      </div>
    </footer>
  );
}

