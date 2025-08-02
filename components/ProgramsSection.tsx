'use client';

import Link from 'next/link';

export default function ProgramsSection() {
  const programs = [
    {
      id: 'secondary',
      title: 'Secondary School Scholarships',
      description: 'Full and partial scholarships for outstanding students to complete their secondary education in top institutions.',
      icon: 'ri-school-line',
      color: 'blue',
      image: 'https://readdy.ai/api/search-image?query=Nigerian%20secondary%20school%20students%20in%20uniforms%20studying%20in%20modern%20classroom%20with%20teacher%2C%20bright%20clean%20environment%2C%20books%20and%20educational%20materials%2C%20students%20engaged%20in%20learning%20activities&width=400&height=300&seq=secondary-school&orientation=landscape',
      benefits: ['Tuition Coverage', 'Books & Materials', 'School Uniforms', 'Mentorship Support']
    },
    {
      id: 'tertiary',
      title: 'Tertiary Scholarships',
      description: 'Comprehensive support for university, polytechnic, and college education to pursue higher learning goals.',
      icon: 'ri-graduation-cap-line',
      color: 'green',
      image: 'https://readdy.ai/api/search-image?query=African%20university%20students%20in%20graduation%20ceremony%20with%20caps%20and%20gowns%20celebrating%20academic%20achievement%2C%20modern%20university%20campus%20background%2C%20joyful%20atmosphere%20with%20diplomas%20and%20success&width=400&height=300&seq=tertiary-education&orientation=landscape',
      benefits: ['Full Tuition', 'Accommodation', 'Living Allowance', 'Career Guidance']
    },
    {
      id: 'foreign',
      title: 'Foreign Scholarships',
      description: 'International education opportunities in prestigious universities worldwide for exceptional students.',
      icon: 'ri-global-line',
      color: 'purple',
      image: 'https://readdy.ai/api/search-image?query=International%20students%20from%20Africa%20studying%20abroad%20at%20prestigious%20university%20campus%2C%20diverse%20multicultural%20environment%2C%20modern%20buildings%20and%20facilities%2C%20students%20with%20books%20and%20laptops&width=400&height=300&seq=foreign-education&orientation=landscape',
      benefits: ['Full Funding', 'Visa Support', 'Travel Expenses', 'Cultural Integration']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', button: 'bg-blue-600 hover:bg-blue-700' },
      green: { bg: 'bg-green-100', text: 'text-green-600', button: 'bg-green-600 hover:bg-green-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', button: 'bg-purple-600 hover:bg-purple-700' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Scholarship Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive scholarship programs designed to support your educational journey at every level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const colorClasses = getColorClasses(program.color);
            return (
              <div key={program.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className={`absolute top-4 left-4 w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center`}>
                    <i className={`${program.icon} ${colorClasses.text} text-2xl`}></i>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits Include:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2"></i>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href="/apply" className={`w-full ${colorClasses.button} text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center`}>
                    Apply Now
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-6">Applications are open year-round. Don't miss this opportunity to transform your future.</p>
            <Link href="/apply" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all cursor-pointer whitespace-nowrap">
              Start Application Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}