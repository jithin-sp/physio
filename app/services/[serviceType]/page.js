"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Service data with full details
const servicesData = {
  "sports-physiotherapy": {
    id: "1",
    title: "Sports Physiotherapy",
    description:
      "Specialized treatment for sports injuries, performance enhancement, and injury prevention for athletes of all levels.",
    icon: "⚽",
    slug: "sports-physiotherapy",
    fullDescription:
      "Our sports physiotherapy program is designed to help athletes recover from injuries, enhance performance, and prevent future injuries. We work with athletes of all levels, from weekend warriors to professional competitors. Our evidence-based approach combines manual therapy, exercise prescription, and cutting-edge rehabilitation techniques to get you back to your sport safely and efficiently.",
    benefits: [
      "Faster recovery from sports-related injuries",
      "Improved athletic performance and endurance",
      "Injury prevention strategies and education",
      "Sport-specific rehabilitation programs",
      "Biomechanical analysis and correction",
      "Return-to-sport protocols and guidance",
    ],
    pricing: "₹800 - ₹1,500 per session",
  },
  "orthopedic-physiotherapy": {
    id: "2",
    title: "Orthopedic Physiotherapy",
    description:
      "Expert care for musculoskeletal conditions, post-surgery rehabilitation, and chronic pain management.",
    icon: "🦴",
    slug: "orthopedic-physiotherapy",
    fullDescription:
      "Orthopedic physiotherapy focuses on the treatment of musculoskeletal injuries and conditions affecting bones, joints, muscles, ligaments, and tendons. Whether you're recovering from surgery, dealing with chronic pain, or managing an acute injury, our specialized orthopedic physiotherapists provide comprehensive care tailored to your specific needs. We use a combination of manual therapy, therapeutic exercises, and modalities to restore function and reduce pain.",
    benefits: [
      "Effective pain management without medication dependency",
      "Post-surgical rehabilitation and recovery",
      "Improved joint mobility and flexibility",
      "Strengthening of muscles and supporting structures",
      "Prevention of future injuries and complications",
      "Personalized treatment plans for optimal outcomes",
    ],
    pricing: "₹700 - ₹1,200 per session",
  },
  "neurological-physiotherapy": {
    id: "3",
    title: "Neurological Physiotherapy",
    description:
      "Comprehensive treatment for neurological conditions including stroke, Parkinson's, and spinal cord injuries.",
    icon: "🧠",
    slug: "neurological-physiotherapy",
    fullDescription:
      "Neurological physiotherapy specializes in treating individuals with neurological disorders and injuries affecting the brain, spinal cord, and nervous system. Our therapists are trained in the latest neuroplasticity principles and rehabilitation techniques to help patients regain function, improve mobility, and enhance quality of life. We work with conditions such as stroke, Parkinson's disease, multiple sclerosis, spinal cord injuries, and traumatic brain injuries.",
    benefits: [
      "Improved motor control and coordination",
      "Enhanced balance and reduced fall risk",
      "Increased independence in daily activities",
      "Gait training and mobility improvement",
      "Spasticity management and muscle re-education",
      "Cognitive-motor integration exercises",
    ],
    pricing: "₹1,000 - ₹1,800 per session",
  },
  "pediatric-physiotherapy": {
    id: "4",
    title: "Pediatric Physiotherapy",
    description:
      "Gentle and effective therapy for children with developmental delays, cerebral palsy, and other conditions.",
    icon: "👶",
    slug: "pediatric-physiotherapy",
    fullDescription:
      "Pediatric physiotherapy provides specialized care for infants, children, and adolescents with developmental, neurological, or musculoskeletal conditions. Our child-friendly approach uses play-based therapy and family-centered care to help children reach their developmental milestones and achieve their full potential. We treat conditions including cerebral palsy, developmental delays, genetic disorders, and sports injuries in young athletes.",
    benefits: [
      "Achievement of developmental milestones",
      "Improved gross motor skills and coordination",
      "Enhanced strength and endurance",
      "Better posture and movement patterns",
      "Family education and home exercise programs",
      "Play-based therapy for engaging treatment",
    ],
    pricing: "₹800 - ₹1,400 per session",
  },
  "geriatric-physiotherapy": {
    id: "5",
    title: "Geriatric Physiotherapy",
    description:
      "Specialized care for elderly patients focusing on mobility, balance, and age-related conditions.",
    icon: "👴",
    slug: "geriatric-physiotherapy",
    fullDescription:
      "Geriatric physiotherapy addresses the unique needs of older adults, focusing on maintaining independence, preventing falls, and managing age-related conditions. Our compassionate therapists understand the challenges of aging and work to improve strength, balance, flexibility, and overall quality of life. We treat conditions such as arthritis, osteoporosis, balance disorders, and post-surgical recovery in elderly patients.",
    benefits: [
      "Fall prevention and balance improvement",
      "Enhanced mobility and independence",
      "Pain management for arthritis and chronic conditions",
      "Improved strength and functional capacity",
      "Better quality of life and social participation",
      "Safe exercise programs tailored for seniors",
    ],
    pricing: "₹600 - ₹1,000 per session",
  },
  "manual-therapy": {
    id: "6",
    title: "Manual Therapy",
    description:
      "Hands-on techniques including joint mobilization, soft tissue massage, and myofascial release.",
    icon: "🤲",
    slug: "manual-therapy",
    fullDescription:
      "Manual therapy involves skilled hands-on techniques to diagnose and treat soft tissue and joint structures. Our experienced therapists use various manual techniques including joint mobilization, manipulation, soft tissue massage, myofascial release, and trigger point therapy to reduce pain, improve mobility, and restore function. This approach is highly effective for treating musculoskeletal pain, stiffness, and movement restrictions.",
    benefits: [
      "Immediate pain relief and reduced muscle tension",
      "Improved joint mobility and range of motion",
      "Enhanced tissue healing and circulation",
      "Reduced inflammation and swelling",
      "Better movement quality and function",
      "Complementary to exercise-based rehabilitation",
    ],
    pricing: "₹700 - ₹1,300 per session",
  },
};

export default function ServiceDetailPage({ params }) {
  const router = useRouter();
  const [service, setService] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Unwrap params if it's a Promise (Next.js 15 behavior)
    const loadService = async () => {
      const resolvedParams = await Promise.resolve(params);
      const serviceType = resolvedParams.serviceType;
      
      const serviceData = servicesData[serviceType];
      
      if (serviceData) {
        setService(serviceData);
      } else {
        setNotFound(true);
      }
    };

    loadService();
  }, [params]);

  const handleBackClick = () => {
    router.push("/");
  };

  // Loading state
  if (!service && !notFound) {
    return (
      <div className="min-h-screen bg-[#FEFCFB] flex items-center justify-center">
        <div className="text-[#395756] text-xl">Loading...</div>
      </div>
    );
  }

  // 404 Not Found
  if (notFound) {
    return (
      <div className="min-h-screen bg-[#FEFCFB]">
        <Navbar />
        <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8" role="main">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#395756] mb-4">
              Service Not Found
            </h1>
            <p className="text-lg text-[#333333] mb-8">
              Sorry, the service you&apos;re looking for doesn&apos;t exist.
            </p>
            <button
              onClick={handleBackClick}
              className="inline-flex items-center px-6 py-3 bg-[#00C49A] text-white font-semibold rounded-lg hover:bg-[#00B38A] focus:bg-[#00B38A] focus:outline-none focus:ring-4 focus:ring-[#00C49A]/50 transition-colors duration-300"
              aria-label="Go back to homepage"
            >
              ← Back to Homepage
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FEFCFB]">
      <Navbar />
      
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8" role="main">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="inline-flex items-center text-[#395756] hover:text-[#00C49A] focus:text-[#00C49A] focus:outline-none focus:ring-4 focus:ring-[#00C49A]/30 rounded font-medium mb-6 transition-colors duration-300"
            aria-label="Go back to homepage"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Homepage
          </button>

          {/* Service Header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="text-6xl mr-4" aria-hidden="true">{service.icon}</div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#395756]">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-[#333333] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Full Description */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#395756] mb-4">
              About This Service
            </h2>
            <p className="text-[#333333] text-lg leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#395756] mb-4">
              Benefits
            </h2>
            <ul className="space-y-3" role="list">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start" role="listitem">
                  <svg
                    className="w-6 h-6 text-[#00C49A] mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#333333] text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-[#395756] mb-4">
              Pricing
            </h2>
            <p className="text-[#6F9CEB] text-2xl font-bold">
              {service.pricing}
            </p>
            <p className="text-[#333333] text-sm mt-2">
              *Prices may vary based on treatment duration and complexity
            </p>
          </div>

          {/* CTA Section */}
          <section 
            className="bg-gradient-to-r from-[#00C49A] to-[#395756] rounded-xl p-8 text-center text-white"
            aria-label="Book appointment call to action"
          >
            <h2 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-6">
              Book an appointment today and take the first step towards recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="inline-block px-8 py-3 bg-white text-[#395756] font-semibold rounded-lg hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/50 transition-colors duration-300"
                aria-label="Call clinic at +91 9876543210"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BD5A] focus:bg-[#20BD5A] focus:outline-none focus:ring-4 focus:ring-white/50 transition-colors duration-300"
                aria-label="Message clinic on WhatsApp, opens in new tab"
              >
                WhatsApp Us
              </a>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
