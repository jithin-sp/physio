"use client";

import { useState } from "react";

export default function RequestCallSection() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    preferredTime: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Phone number validation (Indian format: 10 digits)
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a preferred time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call (replace with actual API call in production)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        phoneNumber: "",
        preferredTime: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="bg-[#FEFCFB] py-12 px-4 sm:px-6 lg:py-20 lg:px-8"
      aria-labelledby="request-call-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 
          id="request-call-heading"
          className="text-[#395756] text-3xl sm:text-4xl font-bold text-center mb-4"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Request an Appointment
        </h2>
        <p className="text-[#395756] text-center mb-8 lg:mb-12">
          Fill out the form below to schedule your appointment at your preferred time.
        </p>

        {/* Success Message */}
        {showSuccess && (
          <div 
            className="mb-6 p-4 bg-[#00C49A] text-white rounded-lg text-center animate-fade-in"
            role="status"
            aria-live="polite"
          >
            <p className="font-semibold">Thank you for your request!</p>
            <p className="text-sm mt-1">
              We&apos;ll contact you soon at your preferred time.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-[#395756] font-medium mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C49A] transition-colors ${
                errors.name
                  ? "border-red-500"
                  : "border-[#395756] focus:border-[#00C49A]"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-[#395756] font-medium mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C49A] transition-colors ${
                errors.phoneNumber
                  ? "border-red-500"
                  : "border-[#395756] focus:border-[#00C49A]"
              }`}
              placeholder="Enter 10-digit phone number"
              maxLength="10"
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Preferred Time Field */}
          <div>
            <label
              htmlFor="preferredTime"
              className="block text-[#395756] font-medium mb-2"
            >
              Preferred Time <span className="text-red-500">*</span>
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C49A] transition-colors ${
                errors.preferredTime
                  ? "border-red-500"
                  : "border-[#395756] focus:border-[#00C49A]"
              }`}
            >
              <option value="">Select a time</option>
              <option value="Morning">Morning (9 AM - 12 PM)</option>
              <option value="Afternoon">Afternoon (12 PM - 4 PM)</option>
              <option value="Evening">Evening (4 PM - 8 PM)</option>
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-sm text-red-500">
                {errors.preferredTime}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00C49A] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#00B38A] focus:outline-none focus:ring-4 focus:ring-[#00C49A] focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Request an Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}
