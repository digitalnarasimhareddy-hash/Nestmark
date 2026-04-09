import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Newspaper, Users, Award, CheckCircle2 } from 'lucide-react';
import { Button } from '../../components/ui/button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PRMarketingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    'Build credibility for your brand',
    'Enhance visibility across media channels',
    'Secure valuable media coverage',
    'Strategic reputation management',
    'Amplify your brand message',
    'Connect with industry influencers'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl animate-float pulse-glow">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white animate-slide-up">
              PR{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Marketing
              </span>
            </h1>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl animate-fade-in-delayed">
            Strategic PR marketing to build credibility and enhance visibility for your brand across key media channels.
          </p>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 animate-float"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-x-1/2 animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 card-3d">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Award className="w-8 h-8 text-cyan-600" />
                  Our PR Approach
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Elevate your brand's reputation with strategic PR marketing that amplifies your message and secures valuable media coverage. We help you build credibility and trust in your industry.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  From press releases to media outreach and reputation management, we create comprehensive PR strategies that enhance your brand's visibility and authority.
                </p>
              </div>
            </div>

            <div className="relative h-96 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-3xl overflow-hidden shadow-2xl card-3d">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Newspaper className="w-32 h-32 text-white/30 tilt-animation" />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
              Key <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-cyan-300 card-3d"
                  style={{
                    animation: `fade-in-up 0.6s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-12 text-center shadow-2xl transform hover:scale-105 transition-all duration-500">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Brand's Reputation?
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Let's create powerful PR campaigns that establish your brand as an industry leader.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 magnetic-button">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PRMarketingPage;