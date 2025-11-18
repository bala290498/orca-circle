export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12">
            {/* About Column */}
            <div className="text-center pb-6 md:pb-0 md:pr-8 lg:pr-12 relative">
              <div className="hidden md:block absolute right-0 top-4 bottom-4 w-px bg-gray-600"></div>
              <div className="md:hidden mx-12 border-b border-gray-600 mb-6"></div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-white transition-colors">
                    Benefits
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Column */}
            <div className="text-center pb-6 md:pb-0 md:pr-8 lg:pr-12 relative">
              <div className="hidden md:block absolute right-0 top-4 bottom-4 w-px bg-gray-600"></div>
              <div className="md:hidden mx-12 border-b border-gray-600 mb-6"></div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    Join Community
                  </a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-white transition-colors">
                    Member Benefits
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="text-center pb-6 md:pb-0 md:pr-8 lg:pr-12 relative">
              <div className="hidden md:block absolute right-0 top-4 bottom-4 w-px bg-gray-600"></div>
              <div className="md:hidden mx-12 border-b border-gray-600 mb-6"></div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guides
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="text-center">
              <div className="md:hidden mx-12 border-b border-gray-600 mb-6"></div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex justify-center">
              {/* Copyright */}
              <p className="text-xs sm:text-sm text-gray-400 text-center">
                © {currentYear} Orca Circle — All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

