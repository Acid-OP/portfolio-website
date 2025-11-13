"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex items-start transition-all duration-300 hover:shadow-sm hover:bg-accent/50 border-border group overflow-hidden p-3 rounded-lg">
        <div className="flex-none mr-3 mt-0.5">
          <Avatar className="size-11 bg-muted">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow flex flex-col justify-center min-h-[2.75rem]">
          <CardHeader className="p-0 space-y-0.5">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center gap-x-1 font-semibold leading-snug text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right whitespace-nowrap">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs text-muted-foreground leading-snug">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-3 text-xs sm:text-sm text-muted-foreground"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};
