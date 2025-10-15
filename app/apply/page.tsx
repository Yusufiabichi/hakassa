'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EligibilitySection from './EligibilitySection';
import RequiredDocuments from './RequiredDocuments';
import ApplicationForm from './ApplicationForm';
import BackToTopArrow from '@/components/BackToTop';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Apply for Late Kabir Abubakar Bichi Scholarship
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards transforming your future. Complete your application and join hundreds of successful scholarship recipients.
            </p>
          </div>
        </div>
        
        <EligibilitySection />
        <RequiredDocuments />
        <ApplicationForm />
        <BackToTopArrow/>
      </main>
      <Footer />
    </div>
  );
}