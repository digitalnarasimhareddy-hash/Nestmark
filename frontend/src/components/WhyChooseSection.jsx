import React from 'react';
import { mockFeatures, mockStats } from '../data/mock';
import { CheckCircle2, TrendingUp } from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200 mb-6">
            <TrendingUp className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-800 text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              NestMark Solutions?
            </span>
          </h2>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              We Understand Your Business
            </h3>
            <p className="text-white/90 text-center text-lg mb-12 max-w-3xl mx-auto">
              You didn't come this far to stop...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
                  style={{
                    animation: `scale-in 0.6s ease-out ${index * 0.2}s backwards`
                  }}
                >
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-white/90 text-center text-base mt-8 max-w-4xl mx-auto">
              As of October 2024, there were 5.52 billion internet users worldwide, with 43.4% of India's population online, making it the second-largest internet user base in the world. If your business isn't online, your competitors are capturing the audience you're missing.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why Digital Marketing is Critical for Small Businesses?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {mockFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-cyan-300"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4 shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Section */}
        <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Overcoming Challenges in Digital Marketing
          </h3>
          <p className="text-gray-600 text-lg mb-8 text-center max-w-4xl mx-auto">
            Many startups and mid-sized businesses face significant obstacles in establishing a strong online presence:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Limited Time",
                description: "Limited time to focus on creating content and staying digitally active, leading to reliance on traditional marketing methods."
              },
              {
                title: "Budget Constraints",
                description: "Budget constraints, preventing them from hiring a dedicated in-house digital marketing expert."
              },
              {
                title: "Fear of Ineffective Campaigns",
                description: "Fear of ineffective campaigns, due to a lack of proper digital strategies and experience."
              }
            ].map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-3">{challenge.title}</h4>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-center mt-8 max-w-4xl mx-auto">
            I understand these challenges deeply, and that's why I offer cost-effective freelance digital marketing services designed to support startups and mid-size companies. From strategy to design, consulting, and execution, I provide comprehensive solutions tailored to your needs locally in Bengaluru and globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;