import React, { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { FaSearch } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      id: 1,
      title: '5 Tips for a Healthy Heart',
      excerpt: 'Learn how to keep your heart healthy with these simple tips.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.ySRRtBYJTrTsIX0tGHmr4wHaHa&pid=Api&P=0&h=180',
      category: 'Health Tips',
      date: '2023-10-25',
      author: 'Dr. John Smith'
    },
    {
      id: 2,
      title: 'Understanding Diabetes',
      excerpt: 'A comprehensive guide to understanding diabetes.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.1a2ofVr-orNHCw-lCArGOgHaI1&pid=Api&P=0&h=180',
      category: 'Medical Guide',
      date: '2023-10-24',
      author: 'Dr. Sarah Johnson'
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
            Stay informed with the latest health tips and medical insights
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm">
            All Posts
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm">
            Health Tips
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm">
            Medical Guide
          </button>
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm">
            Wellness
          </button>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No articles found matching your search.
            </p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest health tips and medical updates delivered to your inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;