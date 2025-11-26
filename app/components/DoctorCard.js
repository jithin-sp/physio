"use client";

import { useState } from "react";
import Image from "next/image";

export default function DoctorCard({ name, designation, image, bio }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`${name}, ${designation}. ${bio ? (isExpanded ? 'Click to collapse biography' : 'Click to expand biography') : ''}`}
      className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-[#00C49A]/30 shadow-lg group"
      style={{ aspectRatio: '3/4' }}
    >
      {/* Full Card Image */}
      <Image
        src={image}
        alt={`Portrait of ${name}, ${designation} at Eternal Physios`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={80}
        loading="lazy"
      />

      {/* Gradient Overlay - Only at bottom where text is */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none" 
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)'
        }}
      />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Name */}
            <h3 className="text-2xl font-bold mb-2">
              {name}
            </h3>

            {/* Designation */}
            <p className="text-[#00C49A] text-base font-medium mb-3">
              {designation}
            </p>

            {/* Expandable Bio */}
            {isExpanded && bio && (
              <div className="mt-4 pt-4 border-t border-white/30">
                <p className="text-white/90 text-sm leading-relaxed">
                  {bio}
                </p>
              </div>
            )}

            {/* Expand/Collapse Indicator */}
            {bio && (
              <div className="mt-2 text-[#00C49A] text-sm font-medium" aria-hidden="true">
                {isExpanded ? "Click to collapse" : "Click to learn more"}
              </div>
            )}
          </div>

          {/* Arrow Indicator */}
          {bio && (
            <div className="flex-shrink-0 mt-1">
              <svg
                className={`w-6 h-6 text-[#00C49A] transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
