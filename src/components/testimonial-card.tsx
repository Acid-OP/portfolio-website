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
  index?: number;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarUrl,
  rating = 5,
  index = 0,
}: TestimonialCardProps) {
  // More dramatic random positioning for organic scatter effect
  const transforms = [
    '-rotate-6 translate-x-4 translate-y-2',
    'rotate-4 -translate-x-6 translate-y-3',
    '-rotate-2 translate-x-3 -translate-y-2',
    'rotate-5 -translate-x-4 translate-y-5',
    '-rotate-4 translate-x-6 -translate-y-3',
    'rotate-3 -translate-x-2 translate-y-4',
    '-rotate-5 translate-x-5 -translate-y-2',
    'rotate-6 translate-x-2 translate-y-3',
  ];
  const transform = transforms[index % transforms.length];
  
  // Different border styles for variety
  const borderStyles = [
    'border-l-4 border-l-black dark:border-l-white',
    'border-t-4 border-t-black dark:border-t-white',
    'border-r-4 border-r-black dark:border-r-white',
    'border-b-4 border-b-black dark:border-b-white',
  ];
  const borderStyle = borderStyles[index % borderStyles.length];
  
  return (
    <Card className={`testimonial-card ${transform} ${borderStyle} bg-white dark:bg-black p-6 transition-all duration-700 hover:shadow-2xl hover:-translate-y-4 hover:rotate-0 hover:scale-110 border border-gray-200 dark:border-gray-800 group relative overflow-hidden shadow-lg hover:shadow-black/20 dark:hover:shadow-white/10`}>
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-900 dark:border-white opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-900 dark:border-white opacity-20 group-hover:opacity-40 transition-opacity"></div>
      
      {/* Animated diagonal line */}
      <div className="absolute -top-20 -right-20 w-40 h-40 border-2 border-gray-200 dark:border-gray-800 rotate-45 group-hover:rotate-90 transition-transform duration-700 opacity-30"></div>
      
      {/* Large quote mark background */}
      <Quote className="absolute -bottom-2 -right-2 w-24 h-24 text-gray-100 dark:text-gray-900 opacity-50 group-hover:scale-110 transition-transform duration-500" />

      {/* Author Info at Top */}
      <div className="flex items-center gap-4 mb-5 relative z-10">
        <div className="relative">
          <Avatar className="size-14 bg-gray-100 dark:bg-gray-900 ring-2 ring-black dark:ring-white shadow-md group-hover:ring-4 transition-all duration-300">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={author} />
            ) : (
              <AvatarFallback className="text-base font-bold bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
                {author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            )}
          </Avatar>
          {/* Decorative circle behind avatar */}
          <div className="absolute -inset-1 bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 rounded-full -z-10 opacity-10 group-hover:opacity-20 transition-opacity"></div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-lg text-gray-900 dark:text-white truncate tracking-tight">{author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate font-medium">
            {role}
          </p>
          {company && (
            <p className="text-xs text-gray-500 dark:text-gray-500 truncate flex items-center gap-1">
              <span className="inline-block w-1 h-1 bg-gray-400 rounded-full"></span>
              {company}
            </p>
          )}
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-12 h-0.5 bg-gradient-to-r from-black to-transparent dark:from-white dark:to-transparent mb-4 relative z-10 group-hover:w-20 transition-all duration-500"></div>

      {/* Rating Stars */}
      {rating && (
        <div className="flex gap-1.5 mb-5 relative z-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 transition-all duration-300 hover:scale-125 hover:rotate-12 ${
                i < rating
                  ? "text-gray-900 fill-gray-900 dark:text-white dark:fill-white drop-shadow-sm"
                  : "text-gray-300 fill-gray-300 dark:text-gray-700 dark:fill-gray-700"
              }`}
              viewBox="0 0 20 20"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Quote Text */}
      <div className="relative z-10">
        <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed font-medium italic">
          &ldquo;{quote}&rdquo;
        </p>
        {/* Subtle quote decoration */}
        <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-black via-gray-400 to-transparent dark:from-white dark:via-gray-600 opacity-30"></div>
      </div>
    </Card>
  );
}

