'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import StoriesGrid from './StoriesGrid';
import BlogSection from './BlogSection';
import BackToTop from '@/components/BackToTop';

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Success Stories & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the inspiring journeys of our scholarship recipients and stay updated with the latest news from the HAKASSA community.
            </p>
          </div>
        </div>
        
        <StoriesGrid />
        <BlogSection />
        <BackToTop/>
      </main>
      <Footer />
    </div>
  );
}