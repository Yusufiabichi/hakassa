'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BlogSection() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: '2024 Scholarship Application Guidelines Released',
      excerpt: 'We are excited to announce the release of our comprehensive 2024 scholarship application guidelines. This year, we have expanded our programs to include more opportunities for students pursuing STEM fields and vocational training.',
      content: 'Full guidelines and application procedures...',
      date: 'March 15, 2024',
      category: 'Announcement',
      author: 'HAKASSA Team',
      image: 'https://readdy.ai/api/search-image?query=Professional%20announcement%20document%20with%20scholarship%20guidelines%2C%20modern%20office%20setting%20with%20papers%20and%20laptop%2C%20educational%20administrative%20environment%20with%20official%20documents&width=600&height=300&seq=guidelines-announce&orientation=landscape',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Success Stories: Our Graduates Making Impact',
      excerpt: 'Meet the alumni who are transforming their communities after completing their education through HAKASSA scholarships. From healthcare to technology, our graduates are making significant contributions across various sectors.',
      content: 'Detailed success stories and impact analysis...',
      date: 'March 10, 2024',
      category: 'Stories',
      author: 'Dr. Amina Kano',
      image: 'https://readdy.ai/api/search-image?query=Group%20of%20successful%20African%20professionals%20in%20various%20fields%20including%20doctor%2C%20engineer%2C%20teacher%20celebrating%20achievements%2C%20diverse%20workplace%20settings%2C%20inspiring%20success%20montage&width=600&height=300&seq=success-impact&orientation=landscape',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Partnership with International Universities Announced',
      excerpt: 'HAKASSA is proud to announce new partnerships with prestigious international universities, expanding foreign scholarship opportunities for outstanding students seeking world-class education experiences.',
      content: 'Details of international partnerships...',
      date: 'March 5, 2024',
      category: 'News',
      author: 'International Relations Team',
      image: 'https://readdy.ai/api/search-image?query=International%20university%20campus%20with%20diverse%20students%2C%20modern%20academic%20buildings%20and%20flags%20from%20different%20countries%2C%20global%20educational%20partnership%20atmosphere&width=600&height=300&seq=international-partnership&orientation=landscape',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Alumni Mentorship Program Launch',
      excerpt: 'Introducing our new Alumni Mentorship Program, connecting current scholarship recipients with successful graduates for guidance, career advice, and professional development opportunities.',
      content: 'Program details and how to participate...',
      date: 'February 28, 2024',
      category: 'Program',
      author: 'Alumni Relations',
      image: 'https://readdy.ai/api/search-image?query=Professional%20mentorship%20meeting%20between%20young%20student%20and%20successful%20alumni%20in%20modern%20office%2C%20guidance%20and%20career%20counseling%20session%2C%20inspirational%20learning%20environment&width=600&height=300&seq=mentorship-program&orientation=landscape',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'Community Impact: Building Schools in Rural Areas',
      excerpt: 'Through our Community Development Initiative, HAKASSA has partnered with local organizations to build and renovate schools in underserved areas of Bichi Local Government.',
      content: 'Community development project updates...',
      date: 'February 20, 2024',
      category: 'Community',
      author: 'Community Development Team',
      image: 'https://readdy.ai/api/search-image?query=New%20school%20building%20construction%20in%20rural%20Nigerian%20community%20with%20children%20and%20local%20residents%20celebrating%2C%20modern%20educational%20facility%20in%20village%20setting&width=600&height=300&seq=community-schools&orientation=landscape',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Digital Skills Training Program Expansion',
      excerpt: 'Our Digital Skills Training Program has been expanded to include AI and data science courses, preparing students for the jobs of the future in an increasingly digital world.',
      content: 'Program curriculum and enrollment details...',
      date: 'February 15, 2024',
      category: 'Education',
      author: 'Skills Development Team',
      image: 'https://readdy.ai/api/search-image?query=Students%20learning%20digital%20skills%20and%20coding%20in%20modern%20computer%20laboratory%2C%20diverse%20young%20people%20with%20laptops%20and%20programming%20screens%2C%20technology%20education%20environment&width=600&height=300&seq=digital-skills&orientation=landscape',
      readTime: '5 min read'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'Announcement', label: 'Announcements' },
    { key: 'Stories', label: 'Stories' },
    { key: 'News', label: 'News' },
    { key: 'Program', label: 'Programs' },
    { key: 'Community', label: 'Community' },
    { key: 'Education', label: 'Education' }
  ];

  const filteredPosts = selectedFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedFilter);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Announcement': 'bg-blue-100 text-blue-600',
      'Stories': 'bg-green-100 text-green-600',
      'News': 'bg-purple-100 text-purple-600',
      'Program': 'bg-orange-100 text-orange-600',
      'Community': 'bg-pink-100 text-pink-600',
      'Education': 'bg-yellow-100 text-yellow-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-600';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-lg text-gray-600">
            Stay informed about scholarship announcements, program updates, and community initiatives.
          </p>
        </div>

        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="flex space-x-2 bg-white p-2 rounded-full shadow-sm min-w-max">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedFilter(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  selectedFilter === category.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-user-line text-blue-600 text-sm"></i>
                    </div>
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  
                  <Link href={`/stories/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-semibold text-sm cursor-pointer flex items-center">
                    Read More
                    <i className="ri-arrow-right-line ml-1"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest scholarship announcements and success stories.
            </p>
            <form className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}