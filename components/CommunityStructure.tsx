export default function CommunityStructure() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2" style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 1.875rem)' }}>
            Grow With Your Group
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-sm mr-3 sm:mr-4">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 leading-tight" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                  Each group: 1 group head + 10 members
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-sm mr-3 sm:mr-4">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 leading-tight" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                  Group heads communicate and coordinate engagement activities
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-sm mr-3 sm:mr-4">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 leading-tight" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                  Bring your own group to automatically become a group head
                </h3>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 sm:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-sm mr-3 sm:mr-4">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 leading-tight" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                  Extra non-financial benefits for group heads
                </h3>
              </div>
            </div>
          </div>

          {/* Visual representation */}
          <div className="mt-8 sm:mt-12 text-center px-2">
            <div className="inline-block bg-primary-100 rounded-lg p-4 sm:p-6">
              <div className="flex flex-col items-center justify-center gap-3 sm:gap-4">
                {/* GH Circle - Separate line */}
                <div className="bg-primary-600 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xs sm:text-sm md:text-base">
                  GH
                </div>
                
                {/* Plus Icon - Separate line */}
                <span className="text-gray-400 font-semibold text-lg sm:text-xl md:text-2xl">+</span>
                
                {/* Member Circles - Separate line */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-primary-300 text-primary-900 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-xs sm:text-sm"
                    >
                      M{i + 1}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                Group Head (GH) + 10 Members (M) = One Active Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
