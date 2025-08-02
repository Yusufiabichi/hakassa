'use client';

export default function RequiredDocuments() {
  const documentCategories = [
    {
      title: 'Personal Documents',
      icon: 'ri-user-line',
      color: 'blue',
      documents: [
        'Valid National ID or International Passport',
        'Recent passport photograph (2x2)',
        'Birth Certificate or Age Declaration',
        'Local Government Certificate of Origin'
      ]
    },
    {
      title: 'Academic Records',
      icon: 'ri-file-text-line',
      color: 'green',
      documents: [
        'Latest academic transcripts/report cards',
        'School leaving certificate (if applicable)',
        'Admission letter (for tertiary/foreign scholarships)',
        'English proficiency test scores (for foreign scholarships)'
      ]
    },
    {
      title: 'Financial Documents',
      icon: 'ri-money-dollar-circle-line',
      color: 'purple',
      documents: [
        'Family income statement',
        'Bank statement (last 3 months)',
        'Parent/Guardian employment letter',
        'Tax clearance certificate (if applicable)'
      ]
    },
    {
      title: 'Supporting Documents',
      icon: 'ri-award-line',
      color: 'orange',
      documents: [
        'Letter of recommendation from school principal/teacher',
        'Community service certificate',
        'Leadership/extracurricular activity records',
        'Personal statement (500 words maximum)'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-50', icon: 'text-blue-600' },
      green: { bg: 'bg-green-50', icon: 'text-green-600' },
      purple: { bg: 'bg-purple-50', icon: 'text-purple-600' },
      orange: { bg: 'bg-orange-50', icon: 'text-orange-600' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
          <p className="text-lg text-gray-600">
            Prepare these documents before starting your application. All documents must be clear and legible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {documentCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div key={index} className={`${colorClasses.bg} rounded-xl p-6`}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                    <i className={`${category.icon} ${colorClasses.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.documents.map((doc, docIndex) => (
                    <li key={docIndex} className="flex items-start">
                      <i className="ri-file-line text-gray-500 mt-1 mr-2 flex-shrink-0"></i>
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-upload-2-line text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Document Upload Guidelines</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">File Format</h4>
                <p className="text-gray-600">PDF, JPG, or PNG files only</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">File Size</h4>
                <p className="text-gray-600">Maximum 5MB per document</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality</h4>
                <p className="text-gray-600">Clear, readable, and well-lit scans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}