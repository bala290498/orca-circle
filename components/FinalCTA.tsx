"use client";

import { useModal } from "@/contexts/ModalContext";

export default function FinalCTA() {
  const { openModal } = useModal();
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold mb-4 sm:mb-6 px-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw + 1rem, 2.5rem)' }}>
            Join Thousands of Members Growing Together
          </h2>
          <p className="text-primary-100 mb-8 sm:mb-10 max-w-[90%] sm:max-w-2xl mx-auto px-2" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
            Start earning rewards, growing your business, and building connections today — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-2">
            <button
              onClick={openModal}
              className="w-full max-w-[90%] sm:max-w-[18.75rem] bg-gradient-to-r from-white to-secondary-50 text-primary-600 hover:from-white hover:to-secondary-100 font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
            >
              Join the Community
            </button>
            <a
              href="#how-it-works"
              className="w-full max-w-[90%] sm:max-w-[18.75rem] bg-transparent border-2 border-white text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-secondary-500/20 font-semibold py-2.5 px-6 rounded-full transition-all duration-300 flex items-center justify-center" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
