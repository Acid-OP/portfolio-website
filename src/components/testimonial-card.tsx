"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatarUrl?: string;
  rating?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarUrl,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-md border-border group relative overflow-hidden">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-12 h-12" />
      </div>

      {/* Rating Stars */}
      {rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "text-yellow-500 fill-yellow-500"
                  : "text-gray-300 fill-gray-300"
              }`}
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Quote Text */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <Avatar className="size-10 bg-muted">
          {avatarUrl ? (
            <AvatarImage src={avatarUrl} alt={author} />
          ) : (
            <AvatarFallback className="text-xs font-medium">
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">
            {role}
            {company && ` at ${company}`}
          </p>
        </div>
      </div>
    </Card>
  );
}

