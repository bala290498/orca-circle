"use client";

import { Timeline } from "@/components/ui/timeline";

export default function HowItWorks() {
  const timelineData = [
    {
      title: 'Members perform small engagement tasks',
      content: (
        <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
          <p className="text-gray-700">Such as following, liking, commenting, and sharing.</p>
        </div>
      ),
    },
    {
      title: 'Businesses gain reach, trust, and improved visibility',
      content: (
        <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
          <p className="text-gray-700">Across platforms.</p>
        </div>
      ),
    },
    {
      title: 'The community generates revenue',
      content: (
        <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
          <p className="text-gray-700">Through its business pillars.</p>
        </div>
      ),
    },
    {
      title: 'Members receive valuable non-financial rewards',
      content: (
        <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary-600">
          <p className="text-gray-700">Such as gift vouchers and platform subscriptions.</p>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Timeline 
        data={timelineData}
        heading="How the Community Works"
        description="Discover how our community-driven approach creates value for members and businesses alike."
      />
    </section>
  )
}
