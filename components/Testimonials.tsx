export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Small Business Owner',
      content: 'In just 2 months, my Instagram followers grew from 200 to 5000! The community engagement is real and authentic.',
      rating: 5,
    },
    {
      name: 'Raj Patel',
      role: 'E-commerce Entrepreneur',
      content: 'I received my first Flipkart voucher within a month. The rewards are genuine, and the community is incredibly supportive.',
      rating: 5,
    },
    {
      name: 'Anita Kumar',
      role: 'Content Creator',
      content: 'As a group head, I love coordinating activities. The extra benefits make it worthwhile, and I\'ve made real connections.',
      rating: 5,
    },
    {
      name: 'Vikram Singh',
      role: 'Startup Founder',
      content: 'The cold start problem was killing my business. This community gave me instant visibility without spending a rupee.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-600"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
