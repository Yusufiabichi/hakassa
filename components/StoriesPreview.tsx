'use client';

import Link from 'next/link';

export default function StoriesPreview() {
  const stories = [
    {
      id: 1,
      name: 'Aisha Muhammad',
      title: 'From Bichi to Medical School',
      story: 'Thanks to HAKASSA tertiary scholarship, I am now pursuing my dream of becoming a doctor at University of Lagos.',
      image: 'https://readdy.ai/api/search-image?query=Young%20Nigerian%20female%20medical%20student%20in%20white%20coat%20with%20stethoscope%20smiling%20confidently%20in%20modern%20hospital%20setting%2C%20professional%20portrait%20with%20medical%20equipment%20background%2C%20inspiring%20success%20story&width=300&height=300&seq=aisha-story&orientation=squarish',
      program: 'Tertiary Scholarship',
      year: '2023'
    },
    {
      id: 2,
      name: 'Ibrahim Sani',
      title: 'Engineering Excellence Abroad',
      story: 'The foreign scholarship opened doors to studying Mechanical Engineering at University of Toronto, Canada.',
      image: 'https://readdy.ai/api/search-image?query=Young%20Nigerian%20male%20engineering%20student%20in%20university%20laboratory%20with%20machinery%20and%20technical%20equipment%2C%20confident%20pose%20with%20engineering%20tools%2C%20modern%20university%20setting%20in%20Canada&width=300&height=300&seq=ibrahim-story&orientation=squarish',
      program: 'Foreign Scholarship',
      year: '2022'
    },
    {
      id: 3,
      name: 'Fatima Abdullahi',
      title: 'Academic Excellence Recognized',
      story: 'HAKASSA secondary school scholarship helped me achieve straight As and secure admission to study Law.',
      image: './sec-std-fml.jpg',
      program: 'Secondary Scholarship',
      year: '2024'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '2024 Scholarship Application Guidelines Released',
      excerpt: 'New application process and eligibility criteria for this year\'s scholarship programs.',
      date: 'March 15, 2024',
      category: 'Announcement'
    },
    {
      id: 2,
      title: 'Success Stories: Our Graduates Making Impact',
      excerpt: 'Meet the alumni who are transforming their communities after completing their education.',
      date: 'March 10, 2024',
      category: 'Stories'
    },
    {
      id: 3,
      title: 'Partnership with International Universities',
      excerpt: 'New collaborations expand foreign scholarship opportunities for outstanding students.',
      date: 'March 5, 2024',
      category: 'News'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover inspiring journeys of our scholarship recipients and stay updated with the latest news.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Student Success Stories</h3>
            <Link href="/stories" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer flex items-center">
              View All Stories
              <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer">
                <div className="relative">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {story.program}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-gray-900">{story.name}</h4>
                    <span className="text-sm text-gray-500">{story.year}</span>
                  </div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">{story.title}</h5>
                  <p className="text-gray-600 mb-4 leading-relaxed">{story.story}</p>
                  <Link href={`/stories/${story.id}`} className="text-blue-600 hover:text-blue-700 font-semibold text-sm cursor-pointer flex items-center">
                    Read Full Story
                    <i className="ri-arrow-right-line ml-1"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Latest News & Updates</h3>
            <Link href="/stories" className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer flex items-center">
              View All Posts
              <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <Link href={`/stories/blog/${post.id}`} className="text-blue-600 hover:text-blue-700 font-semibold text-sm cursor-pointer flex items-center">
                  Read More
                  <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}