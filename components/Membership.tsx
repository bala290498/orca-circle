"use client";

import { useModal } from "@/contexts/ModalContext";
import GradientText from "@/components/GradientText";

export default function Membership() {
  const { openModal } = useModal();

  const features = [
    {
      text: "100% Free Forever",
      icon: (
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      text: "No Hidden Costs",
      icon: (
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      text: "No Subscription",
      icon: (
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="membership" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-secondary-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 sm:mb-6 px-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw + 1rem, 2.5rem)' }}>
            <GradientText
              colors={["rgb(255, 64, 129)", "rgb(255, 152, 0)", "rgb(76, 175, 80)", "rgb(33, 150, 243)", "rgb(156, 39, 176)", "rgb(255, 64, 129)"]}
              animationSpeed={3}
              showBorder={false}
              className="font-bold"
            >
              Free Membership. No payments.
            </GradientText>
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-[90%] sm:max-w-2xl mx-auto mb-8 sm:mb-10 px-2" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
            Stay active and Grow with your community
          </p>
          
          {/* Features - Flat Cards in Horizontal Line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 px-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 border border-gray-200 hover:border-primary-300 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto"
              >
                <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="text-gray-700 font-medium" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Join Button */}
          <button
            onClick={openModal}
            className="w-full max-w-[90%] sm:max-w-[18.75rem] bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
          >
            Join the Community Today
          </button>
        </div>
      </div>
    </section>
  );
}
