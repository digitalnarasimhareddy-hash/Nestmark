import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import * as LucideIcons from 'lucide-react';
import { Button } from './ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await apiService.getServices();
        setServices(data);
        setError(null);
      } catch (err) {
        setError('Failed to load services. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-cyan-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Loading services...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-600 text-lg">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200 mb-6">
            <LucideIcons.Briefcase className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-800 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            NestMark Solutions for{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Real Estate Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Growth & Engagement Through Tailored Digital Marketing Solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = LucideIcons[service.icon] || LucideIcons.Sparkles;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 hover:border-cyan-300 cursor-pointer card-3d"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s backwards`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* 3D Card Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-blue-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 rounded-3xl transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 pulse-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Floating Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-4 flex items-center text-cyan-600 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group magnetic-button"
          >
            See All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;