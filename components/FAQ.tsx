'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Is it really free?',
      answer: 'Yes. No payments required. Ever. The community is 100% free to join and participate in.',
    },
    {
      question: 'How much time is needed?',
      answer: 'Just 5–15 minutes a day. Members perform small engagement tasks like following, liking, commenting, and sharing. It\'s quick and easy.',
    },
    {
      question: 'Are rewards real?',
      answer: 'Yes — vouchers & subscriptions distributed monthly. Members receive genuine Flipkart gift vouchers, Amazon gift vouchers, platform subscriptions, and more.',
    },
    {
      question: 'Can I promote my business?',
      answer: 'Yes — multiple promotion channels inside the community. Active members can promote their businesses and get support from the entire community.',
    },
    {
      question: 'How do you prevent spam?',
      answer: 'Community moderation + verification + engagement quality checks. We maintain high standards to ensure authentic engagement and prevent spam or fake accounts.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary-600 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
