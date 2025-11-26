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

      {/* Overlay Text at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 md:pb-16 px-4">
        <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white text-center z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
          {overlayText}
        </h1>
      </div>
    </section>
  );
}
