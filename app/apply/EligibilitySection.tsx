'use client';

export default function EligibilitySection() {
  const eligibilityItems = [
    {
      category: 'General Requirements',
      items: [
        'Must be a resident of Bichi Local Government Area',
        'Must demonstrate financial need',
        'Must maintain good academic standing',
        'Must show commitment to community service'
      ]
    },
    {
      category: 'Secondary School Scholarships',
      items: [
        'Currently enrolled in JSS3 or SSS1-SSS3',
        'Minimum of 70% average in previous academic year',
        'Age between 13-18 years',
        'Letter of recommendation from current school'
      ]
    },
    {
      category: 'Tertiary Scholarships',
      items: [
        'Must have completed secondary education',
        'Minimum of 5 credits in O\'Level including English and Mathematics',
        'Admission letter to recognized tertiary institution',
        'Age not exceeding 25 years at time of application'
      ]
    },
    {
      category: 'Foreign Scholarships',
      items: [
        'Must have completed tertiary education with minimum of Second Class Upper',
        'English language proficiency (IELTS/TOEFL scores)',
        'Admission letter from foreign institution',
        'Must commit to return and serve community for minimum 2 years'
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <p className="text-lg text-gray-600">
            Review the requirements below to ensure you qualify for your desired scholarship program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {eligibilityItems.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-check-line text-blue-600"></i>
                </div>
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <i className="ri-arrow-right-s-line text-green-500 mt-0.5 mr-2 flex-shrink-0"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <i className="ri-information-line text-yellow-600"></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
              <p className="text-gray-700">
                Meeting the minimum requirements does not guarantee selection. Applications are reviewed holistically, 
                considering academic performance, financial need, leadership potential, and community involvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}