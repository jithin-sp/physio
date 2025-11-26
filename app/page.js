import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar";
import VideoHero from "./components/VideoHero";
import CTABar from "./components/CTABar";
import ServicesSection from "./components/ServicesSection";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load below-the-fold components for better performance
const DoctorsSection = dynamic(() => import('./components/DoctorsSection'), {
  loading: () => <div className="py-20 flex items-center justify-center"><LoadingSpinner size="lg" /></div>,
  ssr: true
});

const RequestCallSection = dynamic(() => import('./components/RequestCallSection'), {
  loading: () => <div className="py-20 flex items-center justify-center"><LoadingSpinner size="lg" /></div>,
  ssr: true
});

const TreatmentVideos = dynamic(() => import('./components/TreatmentVideos'), {
  loading: () => <div className="py-20 flex items-center justify-center"><LoadingSpinner size="lg" /></div>,
  ssr: true
});

const InstagramSection = dynamic(() => import('./components/InstagramSection'), {
  loading: () => <div className="py-20 flex items-center justify-center"><LoadingSpinner size="lg" /></div>,
  ssr: true
});

const BookAppointmentButton = dynamic(() => import('./components/BookAppointmentButton'), {
  loading: () => <div className="py-8 flex items-center justify-center"><LoadingSpinner /></div>,
  ssr: true
});

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: true
});

export default function Home() {
  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      
      <div className="min-h-screen bg-background">
        {/* Fixed Navigation */}
        <Navbar />
        
        {/* Hero Section */}
        <VideoHero 
          videoSrc="/videos/Physiotherapy_Video_Generation_Request.mp4"
          fallbackImage="/img/hero-fallback.jpg"
          overlayText="Eternal Strength, Everyday Recovery."
        />
        
        {/* Main Content Sections */}
        <main id="main-content" role="main">
          <ServicesSection />
          
          <DoctorsSection />
          
          <TreatmentVideos />
          
          <RequestCallSection />
          
          <InstagramSection 
            instagramHandle="@eternalphysios"
            instagramUrl="https://www.instagram.com/eternalphysios"
          />
          
          <BookAppointmentButton />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Scroll-triggered CTA Bar */}
        <CTABar 
          phoneNumber="+919876543210" 
          whatsappNumber="+919876543210" 
        />
      </div>
    </>
  );
}
