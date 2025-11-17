"use client";

import { useModal } from "@/contexts/ModalContext";

export default function MemberBenefits() {
  const { openModal } = useModal();
  const benefits = [
    'Flipkart gift vouchers (Flipkart – an Indian electronic commerce website)',
    'Amazon gift vouchers (Amazon – a global online retail marketplace)',
    'Subscription platforms',
    'Grocery platform benefits',
    'Additional earning opportunities',
    'Special discounts for group purchases',
    'Promotion for your own business',
    'Opportunities to join community-owned ventures',
    'Knowledge and skill-sharing sessions',
    'Exposure, networking, and endless opportunities',
  ]

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">
            Your Activity = Real Rewards
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 text-center px-2">
            Benefits Include:
          </p>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-3 sm:p-4 border-l-4 border-primary-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-800">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center px-2">
            <button
              onClick={openModal}
              className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[44px]"
            >
              Start Receiving Benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
