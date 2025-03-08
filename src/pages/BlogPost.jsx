import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const post = {
    id: 1,
    title: '5 Tips for a Healthy Heart',
    content: 'Here are 5 tips to keep your heart healthy...',
    image: 'https://tse1.mm.bing.net/th?id=OIP.1a2ofVr-orNHCw-lCArGOgHaI1&pid=Api&P=0&h=180',
    date: 'March 15, 2024',
    author: 'Dr. John Smith'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-96">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
          </div>

          <div className="prose max-w-none text-gray-600">
            <p className="leading-relaxed">{post.content}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <a 
              href="/blog" 
              className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;