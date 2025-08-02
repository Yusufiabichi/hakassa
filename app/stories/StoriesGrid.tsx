'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function StoriesGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stories = [
    {
      id: 1,
      name: 'Aisha Muhammad',
      title: 'From Bichi to Medical School',
      story: 'Thanks to HAKASSA tertiary scholarship, I am now pursuing my dream of becoming a doctor at University of Lagos. The scholarship covered my tuition, accommodation, and provided me with mentorship that guided me through the challenges of medical school.',
      image: 'https://readdy.ai/api/search-image?query=Young%20Nigerian%20female%20medical%20student%20in%20white%20coat%20with%20stethoscope%20smiling%20confidently%20in%20modern%20hospital%20setting%2C%20professional%20portrait%20with%20medical%20equipment%20background%2C%20inspiring%20success%20story&width=400&height=300&seq=aisha-full&orientation=landscape',
      program: 'Tertiary Scholarship',
      year: '2023',
      category: 'tertiary',
      achievement: 'Top 10% in first year medical studies'
    },
    {
      id: 2,
      name: 'Ibrahim Sani',
      title: 'Engineering Excellence Abroad',
      story: 'The foreign scholarship opened doors to studying Mechanical Engineering at University of Toronto, Canada. I graduated with honors and now work with a leading automotive company, contributing to sustainable transportation solutions.',
      image: 'https://readdy.ai/api/search-image?query=Young%20Nigerian%20male%20engineering%20student%20in%20university%20laboratory%20with%20machinery%20and%20technical%20equipment%2C%20confident%20pose%20with%20engineering%20tools%2C%20modern%20university%20setting%20in%20Canada&width=400&height=300&seq=ibrahim-full&orientation=landscape',
      program: 'Foreign Scholarship',
      year: '2022',
      category: 'foreign',
      achievement: 'Graduated with First Class Honors'
    },
    {
      id: 3,
      name: 'Fatima Abdullahi',
      title: 'Academic Excellence Recognized',
      story: 'HAKASSA secondary school scholarship helped me achieve straight As in my WAEC examinations. I am now studying Law at Ahmadu Bello University and actively involved in student leadership and community service projects.',
      image: 'https://readdy.ai/api/search-image?query=Young%20Nigerian%20female%20student%20in%20graduation%20ceremony%20holding%20law%20degree%20diploma%20with%20pride%2C%20academic%20gown%20and%20cap%2C%20university%20ceremony%20background%20with%20other%20graduates&width=400&height=300&seq=fatima-full&orientation=landscape',
      program: 'Secondary Scholarship',
      year: '2024',
      category: 'secondary',
      achievement: '9 As in WAEC examination'
    },
    {
      id: 4,
      name: 'Musa Garba',
      title: 'Technology Innovation Leader',
      story: 'With support from HAKASSA, I completed my Computer Science degree and founded a tech startup that develops educational apps for rural communities. We have impacted over 10,000 students across Northern Nigeria.',
      image: 'https://readdy.ai/api/search-image?query=Young%20Nigerian%20male%20tech%20entrepreneur%20working%20on%20laptop%20in%20modern%20office%20space%2C%20innovative%20technology%20workspace%20with%20coding%20screens%2C%20professional%20startup%20environment&width=400&height=300&seq=musa-tech&orientation=landscape',
      program: 'Tertiary Scholarship',
      year: '2021',
      category: 'tertiary',
      achievement: 'Founded successful EdTech startup'
    },
    {
      id: 5,
      name: 'Zainab Hassan',
      title: 'Agricultural Science Pioneer',
      story: 'My scholarship enabled me to study Agricultural Engineering in the Netherlands. I returned to establish a modern farming cooperative that has increased crop yields by 300% and trained over 200 local farmers.',
      image: 'https://readdy.ai/api/search-image?query=Young%20Nigerian%20female%20agricultural%20engineer%20in%20modern%20greenhouse%20with%20crops%20and%20farming%20equipment%2C%20professional%20agricultural%20setting%20with%20plants%20and%20technology&width=400&height=300&seq=zainab-agric&orientation=landscape',
      program: 'Foreign Scholarship',
      year: '2020',
      category: 'foreign',
      achievement: 'Established 200-member farming cooperative'
    },
    {
      id: 6,
      name: 'Ahmad Salisu',
      title: 'Future Teacher and Leader',
      story: 'The secondary scholarship gave me the foundation I needed to excel academically. I am now in my final year studying Education at Bayero University and plan to return to teach in rural communities.',
      image: 'https://readdy.ai/api/search-image?query=Young%20Nigerian%20male%20education%20student%20teaching%20children%20in%20classroom%20setting%2C%20enthusiastic%20teacher%20with%20books%20and%20blackboard%2C%20inspiring%20educational%20environment&width=400&height=300&seq=ahmad-education&orientation=landscape',
      program: 'Secondary Scholarship',
      year: '2023',
      category: 'secondary',
      achievement: 'Student Teacher of the Year Award'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Stories' },
    { key: 'secondary', label: 'Secondary' },
    { key: 'tertiary', label: 'Tertiary' },
    { key: 'foreign', label: 'Foreign' }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-lg text-gray-600">
            Meet the inspiring individuals whose lives have been transformed through HAKASSA scholarships.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === category.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                    {story.program}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {story.year}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-3">{story.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{story.story}</p>
                
                <div className="bg-green-50 rounded-lg p-3 mb-4">
                  <div className="flex items-center">
                    <i className="ri-trophy-line text-green-600 mr-2"></i>
                    <span className="text-sm font-semibold text-green-800">{story.achievement}</span>
                  </div>
                </div>
                
                <Link href={`/stories/${story.id}`} className="text-blue-600 hover:text-blue-700 font-semibold text-sm cursor-pointer flex items-center">
                  Read Full Story
                  <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Success Story</h3>
            <p className="text-gray-600 mb-6">
              Are you a HAKASSA scholarship recipient? We'd love to feature your inspiring journey and achievements.
            </p>
            <Link href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
              Share Your Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}