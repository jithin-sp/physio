'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Our Clinic', href: '#clinic' },
    { label: 'Book Appointment', href: '#appointment' },
  ];

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-[#395756]"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 flex items-center justify-between">
          <h1 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
            Eternal Physios
          </h1>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-[#395756] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col items-center gap-8" role="menu">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold hover:text-[#00C49A] transition-colors focus:outline-none focus:text-[#00C49A] focus:ring-4 focus:ring-[#00C49A]/50 rounded-lg px-4 py-2"
                role="menuitem"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
