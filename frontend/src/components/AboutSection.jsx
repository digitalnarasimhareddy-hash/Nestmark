import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Who We Are",
      description: "At Nestmark Solutions, we specialize in innovative digital marketing strategies that drive results. Our dedicated team is committed to elevating your brand and maximizing your online presence."
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "We believe in creating tailored solutions that meet your unique business needs. Our passion for digital marketing ensures that we deliver exceptional results and foster long-lasting relationships with our clients."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200 mb-6">
            <Award className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-800 text-sm font-medium">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Your Trusted{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Digital Marketing Partner
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Your Digital Success Journey
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-cyan-200"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${index * 0.2}s backwards`
                }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Zap, value: '100+', label: 'Projects Completed' },
            { icon: Users, value: '50+', label: 'Happy Clients' },
            { icon: Award, value: '15+', label: 'Industry Awards' },
            { icon: Target, value: '98%', label: 'Success Rate' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-cyan-200 group"
                style={{
                  animation: `scale-in 0.5s ease-out ${index * 0.1 + 0.8}s backwards`
                }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-cyan-600 group-hover:text-blue-600 transition-colors" />
                <p className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">{stat.value}</p>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;