'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Young%20African%20students%20celebrating%20graduation%20in%20academic%20gowns%20with%20books%20and%20diplomas%2C%20bright%20sunny%20campus%20background%20with%20modern%20university%20buildings%2C%20hopeful%20and%20inspiring%20atmosphere%2C%20professional%20photography%20style%2C%20vibrant%20colors%20showing%20success%20and%20achievement%20in%20education&width=1920&height=1080&seq=hero-education&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering the Future of 
            <span className="text-yellow-400"> Bichi Youth</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Unlock your potential with HAKASSA scholarship opportunities. Quality education for secondary, tertiary, and international studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Apply for Scholarship
            </Link>
            <Link href="#about" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 flex items-center justify-center cursor-pointer animate-bounce">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </div>
    </section>
  );
}