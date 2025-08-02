'use client';

import { useState } from 'react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    lga: 'Bichi',
    scholarshipType: '',
    currentSchool: '',
    desiredInstitution: '',
    courseOfStudy: '',
    parentGuardianName: '',
    parentOccupation: '',
    familyIncome: '',
    personalStatement: '',
    hasRecommendationLetter: false,
    hasAcademicRecords: false,
    hasFinancialDocuments: false,
    hasPersonalDocuments: false,
    agreeToTerms: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const nextStep = () => {
    setCurrentStep(Math.min(currentStep + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(Math.max(currentStep - 1, 1));
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-green-50 rounded-xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-green-600 text-3xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your application. We have received your scholarship application and will review it carefully.
            </p>
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <i className="ri-time-line text-blue-600 mr-3"></i>
                  <span className="text-gray-700">Initial review: 2-3 weeks</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-mail-line text-green-600 mr-3"></i>
                  <span className="text-gray-700">Email notification of status update</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-calendar-line text-purple-600 mr-3"></i>
                  <span className="text-gray-700">Interview invitation (if shortlisted)</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-award-line text-yellow-600 mr-3"></i>
                  <span className="text-gray-700">Final decision: 4-6 weeks</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Application Reference: HAKA-{Date.now().toString().slice(-8)}
            </p>
            <button 
              onClick={() => {setIsSubmitted(false); setFormData({
                firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '', gender: '',
                address: '', lga: 'Bichi', scholarshipType: '', currentSchool: '', desiredInstitution: '',
                courseOfStudy: '', parentGuardianName: '', parentOccupation: '', familyIncome: '',
                personalStatement: '', hasRecommendationLetter: false, hasAcademicRecords: false,
                hasFinancialDocuments: false, hasPersonalDocuments: false, agreeToTerms: false
              }); setCurrentStep(1);}}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && <div className={`w-16 h-1 mx-2 ${step < currentStep ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of 4: {
                currentStep === 1 ? 'Personal Information' :
                currentStep === 2 ? 'Academic Information' :
                currentStep === 3 ? 'Family & Financial Information' :
                'Document Upload & Confirmation'
              }
            </p>
          </div>
        </div>

        <form id="scholarship-application" onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          {currentStep === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Home Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                  required
                ></textarea>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Scholarship Type</label>
                  <select
                    name="scholarshipType"
                    value={formData.scholarshipType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    required
                  >
                    <option value="">Select Scholarship Type</option>
                    <option value="secondary">Secondary School Scholarship</option>
                    <option value="tertiary">Tertiary Scholarship</option>
                    <option value="foreign">Foreign Scholarship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current School/Institution</label>
                  <input
                    type="text"
                    name="currentSchool"
                    value={formData.currentSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Desired Institution</label>
                  <input
                    type="text"
                    name="desiredInstitution"
                    value={formData.desiredInstitution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Institution you wish to attend"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Course of Study</label>
                  <input
                    type="text"
                    name="courseOfStudy"
                    value={formData.courseOfStudy}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="e.g., Medicine, Engineering, Law"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Family & Financial Information</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Parent/Guardian Name</label>
                  <input
                    type="text"
                    name="parentGuardianName"
                    value={formData.parentGuardianName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Parent/Guardian Occupation</label>
                  <input
                    type="text"
                    name="parentOccupation"
                    value={formData.parentOccupation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Family Income</label>
                  <select
                    name="familyIncome"
                    value={formData.familyIncome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    required
                  >
                    <option value="">Select Income Range</option>
                    <option value="below-50k">Below ₦50,000</option>
                    <option value="50k-100k">₦50,000 - ₦100,000</option>
                    <option value="100k-200k">₦100,000 - ₦200,000</option>
                    <option value="200k-500k">₦200,000 - ₦500,000</option>
                    <option value="above-500k">Above ₦500,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Personal Statement</label>
                  <textarea
                    name="personalStatement"
                    value={formData.personalStatement}
                    onChange={handleChange}
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                    placeholder="Tell us about yourself, your goals, and why you deserve this scholarship..."
                    required
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.personalStatement.length}/500 characters</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Document Upload & Confirmation</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Document Checklist</h4>
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="hasPersonalDocuments"
                        checked={formData.hasPersonalDocuments}
                        onChange={handleChange}
                        className="mr-3"
                        required
                      />
                      <span className="text-gray-700">I have uploaded all personal documents (ID, passport photo, etc.)</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="hasAcademicRecords"
                        checked={formData.hasAcademicRecords}
                        onChange={handleChange}
                        className="mr-3"
                        required
                      />
                      <span className="text-gray-700">I have uploaded academic records and transcripts</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="hasFinancialDocuments"
                        checked={formData.hasFinancialDocuments}
                        onChange={handleChange}
                        className="mr-3"
                        required
                      />
                      <span className="text-gray-700">I have uploaded financial documents</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="hasRecommendationLetter"
                        checked={formData.hasRecommendationLetter}
                        onChange={handleChange}
                        className="mr-3"
                        required
                      />
                      <span className="text-gray-700">I have uploaded recommendation letter</span>
                    </label>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">File Upload Note</h4>
                  <p className="text-sm text-gray-600">
                    For this demo, please check the boxes above to confirm you have prepared all required documents. 
                    In the actual application, you would upload your files here.
                  </p>
                </div>

                <div className="border-t pt-6">
                  <label className="flex items-start cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      className="mr-3 mt-1"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I declare that all information provided is true and accurate. I understand that providing false information 
                      may result in disqualification from the scholarship program. I agree to the terms and conditions of the 
                      HAKASSA Scholarship Program.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={prevStep}
              className={`px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap ${
                currentStep === 1 ? 'invisible' : ''
              }`}
            >
              Previous Step
            </button>
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}