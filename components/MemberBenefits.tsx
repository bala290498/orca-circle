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
    <section id="benefits" className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center">
            Your Activity = Real Rewards
          </h2>
          <p className="text-xl text-primary-100 mb-10 text-center">
            Benefits Include:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-200 mr-3 flex-shrink-0 mt-0.5"
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
                  <p className="text-primary-50">{benefit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={openModal}
              className="inline-block bg-gradient-to-r from-white to-secondary-50 text-primary-600 hover:from-white hover:to-secondary-100 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-secondary-300/50"
            >
              Start Receiving Benefits
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
