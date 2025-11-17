export default function CommunityStructure() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Grow With Your Group
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Each group: 1 group head + 10 members
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Group heads communicate and coordinate engagement activities
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bring your own group to automatically become a group head
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Extra non-financial benefits for group heads
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Visual representation */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-primary-100 rounded-lg p-6">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                  GH
                </div>
                <span className="text-gray-700 font-semibold">+</span>
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-primary-300 text-primary-900 rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm"
                  >
                    M{i + 1}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Group Head (GH) + 10 Members (M) = One Active Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
