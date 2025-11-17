"use client";

import { useModal } from "@/contexts/ModalContext";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function Membership() {
  const { openModal } = useModal();

  return (
    <section id="membership" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-secondary-50/20 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Free Membership. No payments.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Your only responsibility is to stay active within the community.
          </p>
          <div className="flex justify-center mb-8 sm:mb-10 px-2">
            <AnimatedButton
              borderRadius="9999px"
              containerClassName="w-full sm:w-auto min-w-0 sm:min-w-[280px] md:min-w-[500px] h-auto"
              className="bg-transparent px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-black font-semibold text-xs sm:text-sm md:text-base"
              borderClassName="bg-[radial-gradient(#0284c7_40%,transparent_60%)]"
              duration={15000}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black flex-shrink-0"
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
                  <span className="text-black whitespace-nowrap">100% Free Forever</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black flex-shrink-0"
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
                  <span className="text-black whitespace-nowrap">No Hidden Costs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black flex-shrink-0"
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
                  <span className="text-black whitespace-nowrap">No Subscription</span>
                </div>
              </div>
            </AnimatedButton>
          </div>

          {/* Join Button */}
          <button
            onClick={openModal}
            className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-700 hover:to-secondary-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[44px]"
          >
            Join the Community Today
          </button>
        </div>
      </div>
    </section>
  );
}
