"use client";

import { useModal } from "@/contexts/ModalContext";

export default function FinalCTA() {
  const { openModal } = useModal();
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Thousands of Members Growing Together
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Start earning rewards, growing your business, and building connections today — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-white to-secondary-50 text-primary-600 hover:from-white hover:to-secondary-100 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Join the Community (Free Forever)
            </button>
            <a
              href="#how-it-works"
              className="bg-transparent border-2 border-white text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-secondary-500/20 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 w-full sm:w-auto"
            >
              Learn How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
