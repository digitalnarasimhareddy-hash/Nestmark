import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Sparkles, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              NestMark Solutions
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl animate-fade-in-delayed">
            Your Trusted Digital Marketing Partner, Empowering Your Digital Success Journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Who We Are & Our Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-cyan-200 card-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 pulse-glow">
                  <Users className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  Who We Are
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                  At Nestmark Solutions, we specialize in innovative digital marketing strategies that drive results. Our dedicated team is committed to elevating your brand and maximizing your online presence.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-cyan-200 card-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 pulse-glow">
                  <Target className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                  We believe in creating tailored solutions that meet your unique business needs. Our passion for digital marketing ensures that we deliver exceptional results and foster long-lasting relationships with our clients.
                </p>
              </div>
            </div>
          </div>

          {/* Services Expertise */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500 mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Our Expertise
            </h2>
            <p className="text-white/90 text-center text-lg mb-8 max-w-4xl mx-auto">
              From search engine optimization (SEO) and pay-per-click (PPC) campaigns to social media management and content marketing, we offer end-to-end solutions designed to deliver measurable results.
            </p>
            <p className="text-white text-center text-xl font-semibold">
              Let's work together to transform your digital vision into reality!
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, value: '100+', label: 'Projects Completed' },
              { icon: Users, value: '50+', label: 'Happy Clients' },
              { icon: Award, value: '15+', label: 'Industry Awards' },
              { icon: Target, value: '98%', label: 'Success Rate' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-cyan-200 group"
                  style={{
                    animation: `scale-in 0.5s ease-out ${index * 0.1 + 0.8}s backwards`
                  }}
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-cyan-600 group-hover:text-blue-600 transition-colors" />
                  <p className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">{stat.value}</p>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;