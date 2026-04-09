import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { Calendar, Clock, User, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await apiService.getBlogs(4);
        setBlogs(data);
        setError(null);
      } catch (err) {
        setError('Failed to load blogs. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array is correct - only fetch once on mount

  if (loading) {
    return (
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-cyan-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Loading blogs...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200 mb-6">
            <Calendar className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-800 text-sm font-medium">Latest Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Blogs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in digital marketing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-cyan-300 cursor-pointer card-3d"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.2}s backwards`
              }}
            >
              {/* Image Placeholder with Gradient */}
              <div className="relative h-64 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transform group-hover:scale-110 transition-all duration-500 tilt-animation">
                    {index + 1}
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-cyan-600">
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime || blog.read_time}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4">
                  {blog.excerpt}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-cyan-600 font-semibold group-hover:text-blue-600 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group magnetic-button"
          >
            View All Blogs
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;