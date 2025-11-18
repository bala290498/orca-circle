"use client";

import { useModal } from "@/contexts/ModalContext";

export default function FinalCTA() {
  const { openModal } = useModal();
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 px-2">
            Join Thousands of Members Growing Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
            Start earning rewards, growing your business, and building connections today — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center px-2">
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-white to-secondary-50 text-primary-600 hover:from-white hover:to-secondary-100 font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-h-[36px]"
            >
              Join the Community (Free Forever)
            </button>
            <a
              href="#how-it-works"
              className="bg-transparent border-2 border-white text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-secondary-500/20 font-semibold py-2 sm:py-2.5 px-4 sm:px-6 rounded-full text-sm sm:text-base transition-all duration-300 w-full sm:w-auto min-h-[36px] flex items-center justify-center"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
