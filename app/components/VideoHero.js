'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function VideoHero({ 
  videoSrc = '/videos/Physiotherapy_Video_Generation_Request.mp4',
  fallbackImage = '/img/hero-fallback.jpg',
  overlayText = 'Eternal Strength, Everyday Recovery.'
}) {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to pause video when out of view for performance
    const videoElement = videoRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoElement) {
            if (entry.isIntersecting) {
              videoElement.play().catch(() => {
                // Autoplay failed, user interaction required
              });
            } else {
              videoElement.pause();
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 64px)', marginTop: '64px' }}
      aria-label="Hero section"
    >
      {/* Video or Fallback Image */}
      {!videoError ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onError={handleVideoError}
          aria-label="Hero video showcasing physiotherapy clinic services and treatments"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={fallbackImage}
          alt="Eternal Physios clinic interior showing modern physiotherapy equipment and treatment areas"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      )}

      {/* Gradient overlay from bottom to middle (100% to 0% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)'
        }}
        aria-hidden="true" 
      />

      {/* Overlay Text Layout - Left Aligned, Stacked Vertically */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl">
          {/* Heading */}
          <h1 
            className="text-[2rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white text-left mb-4 md:mb-6" 
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {overlayText}
          </h1>

          {/* Book Appointment Button */}
          <button
            className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 mb-4 md:mb-6"
            aria-label="Book an appointment"
          >
            Book Appointment
          </button>
          
          {/* Description Paragraph */}
          <p className="text-white text-base md:text-lg lg:text-xl text-left leading-relaxed">
            Experience personalized physiotherapy care with our expert team. We combine advanced techniques with compassionate treatment to help you achieve lasting recovery and optimal wellness.
          </p>
        </div>
      </div>
    </section>
  );
}
