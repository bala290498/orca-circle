"use client";

import { useModal } from "@/contexts/ModalContext";
import GradientText from "@/components/GradientText";

export default function Membership() {
  const { openModal } = useModal();

  const features: Array<{ text: string; icon: JSX.Element }> = [];

  return (
    <section id="membership" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 sm:mb-6 px-2" style={{ fontSize: 'clamp(1.5rem, 2.5vw + 1rem, 2.5rem)' }}>
            <GradientText
              colors={["rgb(255, 64, 129)", "rgb(255, 152, 0)", "rgb(76, 175, 80)", "rgb(33, 150, 243)", "rgb(156, 39, 176)", "rgb(255, 64, 129)"]}
              animationSpeed={3}
              showBorder={false}
              className="font-bold"
            >
              Free Membership.
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> </span>
              No payments.
            </GradientText>
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-[90%] sm:max-w-2xl mx-auto mb-4 sm:mb-6 px-2" style={{ fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.25rem)' }}>
            Stay Active and Grow With Your Community
          </p>
          
          {/* Features - Simple List */}
          {features.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 px-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
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
          )}

          {/* Join Button */}
          <button
            onClick={openModal}
            className="w-full max-w-[90%] sm:max-w-[18.75rem] bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" style={{ fontSize: 'clamp(0.875rem, 1.5vw + 0.5rem, 1rem)' }}
          >
            Join the Community Today
          </button>
        </div>
      </div>
    </section>
  );
}
