"use client";

import { useState, useEffect } from "react";

interface JoinFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinFormModal({ isOpen, onClose }: JoinFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  
  const GROUP_HEAD_NUMBER = "7010584543"; // Group head WhatsApp number

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = (name: string, whatsapp: string) => {
    // Create pre-filled message template
    const message = encodeURIComponent(
      `Hello! I'm ${name} and I just joined Orca Circle community. My WhatsApp number is ${whatsapp}. I'm excited to be part of this community and look forward to connecting with everyone!`
    );
    
    // Format phone number (remove any spaces, dashes, etc.)
    const cleanNumber = GROUP_HEAD_NUMBER.replace(/\D/g, '');
    
    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Submit to Supabase via API route
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Save form data for WhatsApp message before clearing
      const { name, whatsapp } = formData;
      
      // Clear form
      setFormData({ name: "", email: "", whatsapp: "" });
      
      // Close form modal
      setSubmitStatus("success");
      setIsSubmitting(false);
      onClose();
      
      // Trigger greeting modal via custom event with user data
      window.dispatchEvent(new CustomEvent('showGreeting', { 
        detail: { name, whatsapp } 
      }));
      
      // Wait 2 seconds, then open WhatsApp
      setTimeout(() => {
        openWhatsApp(name, whatsapp);
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Form Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Join the Community Today
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="modal-name"
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
              >
                Full Name
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="modal-email"
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
              >
                Email Address
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="modal-whatsapp"
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
              >
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="modal-whatsapp"
                name="whatsapp"
                required
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your WhatsApp number"
              />
            </div>
            {submitStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Form submitted successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                Something went wrong. Please try again.
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Submitting..." : "Join Now (Free Forever)"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

