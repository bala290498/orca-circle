"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Is it really free?",
      answer:
        "Yes. No payments required. Ever. The community is 100% free to join and participate in.",
    },
    {
      question: "How much time is needed?",
      answer:
        "Just 5–15 minutes a day. Members perform small engagement tasks like following, liking, commenting, and sharing. It's quick and easy.",
    },
    {
      question: "Are rewards real?",
      answer:
        "Yes — vouchers & subscriptions distributed monthly. Members receive genuine Flipkart gift vouchers, Amazon gift vouchers, platform subscriptions, and more.",
    },
    {
      question: "Can I promote my business?",
      answer:
        "Yes — multiple promotion channels inside the community. Active members can promote their businesses and get support from the entire community.",
    },
    {
      question: "How do you prevent spam?",
      answer:
        "Community moderation + verification + engagement quality checks. We maintain high standards to ensure authentic engagement and prevent spam or fake accounts.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="space-y-4 sm:space-y-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
