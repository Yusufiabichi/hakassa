'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About HAKASSA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            HAKASSA is an education sponsorship initiative by the Member Representing Bichi Federal Constituency, 
            dedicated to empowering young minds through quality education opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=African%20students%20studying%20together%20in%20modern%20classroom%20with%20books%20and%20laptops%2C%20bright%20natural%20lighting%2C%20diverse%20group%20focused%20on%20learning%2C%20educational%20environment%20with%20motivational%20posters%20on%20walls%2C%20clean%20modern%20school%20setting&width=600&height=400&seq=about-students&orientation=landscape"
              alt="Students studying together"
              className="rounded-xl shadow-lg w-full h-80 object-cover object-top"
            />
          </div>
          
          <div>
            <div className="space-y-8">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-eye-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create a generation of educated, skilled, and empowered youth from Bichi Local Government 
                  who will drive positive change in their communities and beyond.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-target-line text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, quality education opportunities through scholarships, mentorship, 
                  and support programs that break down barriers to academic excellence.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-trophy-line text-yellow-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 500 students supported across secondary, tertiary, and international education programs, 
                  creating lasting positive change in the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}