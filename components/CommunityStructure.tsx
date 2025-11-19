export default function CommunityStructure() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-gray-900 mb-6 sm:mb-8 text-center px-2" style={{ fontSize: 'clamp(1.5rem, 3vw + 1rem, 1.875rem)' }}>
            Grow With Your Group
          </h2>
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {/* Left Column: Feature Points Card */}
            <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 h-full flex flex-col">
              <div className="space-y-3 sm:space-y-4 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium flex-1" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                    Each Group: 1 Group Head + 10 Members
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
              </div>
                  <p className="text-gray-700 font-medium flex-1" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                    Group Heads communicate and coordinate all engagement activities.
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
              </div>
                  <p className="text-gray-700 font-medium flex-1" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                    Bring Your Own Group to automatically qualify as a Group Head.
                  </p>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
              </div>
                  <p className="text-gray-700 font-medium flex-1" style={{ fontSize: 'clamp(0.875rem, 1vw + 0.5rem, 1rem)' }}>
                    Group Heads receive additional non-financial benefits.
                  </p>
              </div>
            </div>
          </div>

            {/* Right Column: Visual representation */}
            <div className="flex items-stretch">
              <div className="bg-white rounded-lg p-4 sm:p-6 w-full h-full flex flex-col border border-gray-200">
                <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 flex-1">
                {/* GH Circle - Separate line */}
                <div className="bg-primary-300 text-primary-900 rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center font-bold text-xs sm:text-sm md:text-base">
                  GH
                </div>
                
                {/* Plus Icon - Separate line */}
                <span className="text-gray-400 font-semibold text-lg sm:text-xl md:text-2xl">+</span>
                
                  {/* Member Circles - Two rows */}
                  <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
                    {/* First row: M1-M5 */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-primary-300 text-primary-900 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-xs sm:text-sm"
                    >
                      M{i + 1}
                    </div>
                  ))}
                </div>
                    {/* Second row: M6-M10 */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i + 5}
                          className="bg-primary-300 text-primary-900 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-xs sm:text-sm"
                        >
                          M{i + 6}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 text-center">
                  Group Head (GH) + 10 Members (M) = One Active Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
