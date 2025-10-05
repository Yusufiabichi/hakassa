'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Image 
            src="./hakassa.png" 
            alt='Hakassa logo' 
            width={50}
            height={100}
            />
            <p className=" hidden md:block font-bold text-2xl text-blue-600">Abubakar Kabir Foundation</p>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/apply" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Apply
            </Link>
            <Link href="/stories" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Stories
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </nav>

          <Link href="/apply" className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
            Apply Now
          </Link>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Home
              </Link>
              <Link href="/apply" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Apply
              </Link>
              <Link href="/stories" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Stories
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Contact
              </Link>
              <Link href="/apply" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 text-center cursor-pointer whitespace-nowrap">
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}