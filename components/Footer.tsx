'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="font-['Pacifico'] text-2xl text-blue-400 mb-4 block">
              Late Kabir Abubakar Bichi Foundation
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the future of Bichi youth through quality education and scholarship opportunities.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <i className="ri-facebook-fill"></i>
              </div>
              <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-sky-600 transition-colors">
                <i className="ri-twitter-fill"></i>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <i className="ri-whatsapp-line"></i>
              </div>
              <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-colors">
                <i className="ri-linkedin-fill"></i>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Secondary Scholarships
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Tertiary(Domestic) Scholarships
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Foreign Scholarships
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Eligibility Criteria
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with scholarship opportunities and success stories.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors cursor-pointer whitespace-nowrap">
                <i className="ri-send-plane-line"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 LKABF Scholarship Program. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm cursor-pointer">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center mt-5'>
          <Link href="https://yusufia-portfolio.vercel.app/" target="_blank" className="text-gray-400 hover:text-white text-sm cursor-pointer">
            Developed by Yusufia Bichi
          </Link>
      </div>
    </footer>
  );
}