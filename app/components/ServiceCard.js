"use client";

import { useRouter } from "next/navigation";

export default function ServiceCard({ title, slug }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/${slug}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={`Learn more about ${title}`}
      className="w-full bg-white rounded-lg px-6 py-4 cursor-pointer transition-all duration-300 ease-in-out border-2 border-[#395756] hover:border-[#00C49A] hover:bg-[#00C49A]/5 focus:border-[#00C49A] focus:outline-none focus:ring-4 focus:ring-[#00C49A]/30 flex items-center justify-between group"
    >
      {/* Title */}
      <span className="text-lg font-medium text-[#395756] text-left group-hover:text-[#00C49A] transition-colors">
        {title}
      </span>

      {/* Arrow Icon */}
      <span className="text-[#395756] text-xl group-hover:text-[#00C49A] group-hover:translate-x-1 transition-all" aria-hidden="true">
        &gt;
      </span>
    </button>
  );
}
