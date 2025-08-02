'use client';

import Link from 'next/link';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProgramsSection from '../components/ProgramsSection';
import StoriesPreview from '../components/StoriesPreview';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <StoriesPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}