"use client";

import { AvatarCircles } from "@/registry/magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Social Dashboard Illustration */}
      <div className="relative w-full max-w-lg mx-auto">
        {/* Dashboard Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-2 w-16 bg-gray-100 rounded mt-1"></div>
              </div>
            </div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-primary-100 rounded-full"></div>
              <div className="w-8 h-8 bg-secondary-100 rounded-full"></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-3">
                <div className="h-2 w-12 bg-gray-300 rounded mb-2"></div>
                <div className="h-4 w-16 bg-primary-200 rounded"></div>
              </div>
            ))}
          </div>

          {/* Activity Feed */}
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="h-2 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating People Avatars */}
        <div className="absolute -top-4 -right-4 hidden sm:block">
          <AvatarCircles numPeople={20} avatarUrls={avatars} />
        </div>
        <div className="absolute -bottom-4 -left-4 hidden sm:block">
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              {avatars.slice(0, 3).map((avatar, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-white"
                  style={{
                    backgroundImage: `url(${avatar.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
              ))}
            </div>
            <span className="text-xs font-medium text-gray-700">+17k</span>
          </div>
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" style={{ zIndex: -1 }}>
          <path
            d="M 50 50 Q 200 100 350 150"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            opacity="0.3"
          />
          <path
            d="M 50 200 Q 200 150 350 100"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

