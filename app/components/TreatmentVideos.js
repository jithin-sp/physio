'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function TreatmentVideos({ videos = [] }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [visibleVideos, setVisibleVideos] = useState(new Set());
  const observerRef = useRef(null);

  // Default sample videos if none provided
  const defaultVideos = [
    {
      id: '1',
      title: 'Sports Injury Recovery',
      thumbnail: '/img/video-thumb-1.jpg',
      videoUrl: '/videos/treatment-1.mp4',
      duration: '2:30'
    },
    {
      id: '2',
      title: 'Back Pain Treatment',
      thumbnail: '/img/video-thumb-2.jpg',
      videoUrl: '/videos/treatment-2.mp4',
      duration: '3:15'
    },
    {
      id: '3',
      title: 'Joint Mobility Therapy',
      thumbnail: '/img/video-thumb-3.jpg',
      videoUrl: '/videos/treatment-3.mp4',
      duration: '2:45'
    },
    {
      id: '4',
      title: 'Post-Surgery Rehabilitation',
      thumbnail: '/img/video-thumb-4.jpg',
      videoUrl: '/videos/treatment-4.mp4',
      duration: '4:00'
    },
    {
      id: '5',
      title: 'Neck Pain Relief',
      thumbnail: '/img/video-thumb-5.jpg',
      videoUrl: '/videos/treatment-5.mp4',
      duration: '2:20'
    }
  ];

  const videoList = videos.length > 0 ? videos : defaultVideos;

  // Set up Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const videoId = entry.target.dataset.videoId;
            setVisibleVideos((prev) => new Set([...prev, videoId]));
          }
        });
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Attach observer to video cards
  useEffect(() => {
    const cards = document.querySelectorAll('[data-video-card]');
    cards.forEach((card) => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });

    return () => {
      cards.forEach((card) => {
        if (observerRef.current) {
          observerRef.current.unobserve(card);
        }
      });
    };
  }, [videoList]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section 
      className="bg-white py-12 md:py-20"
      aria-labelledby="treatment-videos-heading"
    >
      <div className="px-4 md:px-8">
        <h2 
          id="treatment-videos-heading"
          className="text-[#395756] text-3xl md:text-4xl font-bold mb-8 text-center"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Treatment Videos
        </h2>
        
        {/* Horizontal scrollable container */}
        <div className="relative">
          <div 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            role="list"
            aria-label="Treatment video gallery"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {videoList.map((video) => (
              <div
                key={video.id}
                data-video-card
                data-video-id={video.id}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
                role="listitem"
              >
                <button
                  onClick={() => handleVideoClick(video)}
                  className="relative bg-gray-100 rounded-lg overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-[#00C49A]/50 w-full"
                  style={{ aspectRatio: '9/16' }}
                  aria-label={`Play video: ${video.title}${video.duration ? `, duration ${video.duration}` : ''}`}
                >
                  {/* Video thumbnail - lazy loaded */}
                  {visibleVideos.has(video.id) ? (
                    <Image
                      src={video.thumbnail}
                      alt={`Thumbnail for ${video.title} treatment video`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 320px"
                      quality={75}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="text-gray-400 text-sm">Loading...</div>
                    </div>
                  )}
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-300" aria-hidden="true">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#00C49A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Video title overlay - centered in top half */}
                  <div className="absolute top-0 left-0 right-0 h-1/2 flex items-center justify-center bg-gradient-to-b from-black/60 via-black/30 to-transparent p-4">
                    <h3 className="text-white font-semibold text-base md:text-lg text-center">
                      {video.title}
                    </h3>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for fullscreen video */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-[#00C49A] focus:text-[#00C49A] focus:outline-none focus:ring-4 focus:ring-[#00C49A]/50 transition-colors duration-300 rounded-full p-2"
              aria-label={`Close video player for ${selectedVideo.title}`}
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

            {/* Video player */}
            <div className="bg-black rounded-lg overflow-hidden">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
                aria-label={`Video player for ${selectedVideo.title}`}
                onError={(e) => {
                  console.error('Video failed to load:', selectedVideo.videoUrl);
                }}
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Video title below player */}
              <div className="bg-[#395756] p-4">
                <h3 
                  id="video-modal-title"
                  className="text-white text-lg font-semibold"
                >
                  {selectedVideo.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
