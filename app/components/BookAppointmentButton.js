'use client';

export default function BookAppointmentButton({ 
  onClick,
  variant = 'primary'
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default behavior: scroll to request call section or show booking modal
      console.log('Book appointment clicked');
      // Future: Open booking modal or navigate to booking page
    }
  };

  return (
    <section 
      className="py-12 md:py-16 px-4 md:px-8 bg-background"
      aria-label="Book appointment section"
    >
      <div className="max-w-7xl mx-auto text-center">
        <button
          onClick={handleClick}
          className="w-full md:w-auto bg-theme text-white px-12 py-4 md:px-16 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 hover:shadow-2xl focus:shadow-2xl hover:-translate-y-1 focus:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-theme/50 active:translate-y-0 active:shadow-xl inline-flex items-center justify-center gap-3 animate-pulse-subtle"
          aria-label="Book an appointment with Eternal Physios"
          style={{
            boxShadow: '0 10px 30px rgba(0, 196, 154, 0.3)'
          }}
        >
          <span>Book Appointment</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
