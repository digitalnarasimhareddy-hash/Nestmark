import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { heroCards } from '../data/mock';

const HeroSection = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 30;
      const yPos = (clientY / innerHeight - 0.5) * 30;
      parallaxRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []); // Empty dependency array is correct - event listener setup once

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-gradient"></div>
      </div>

      {/* Floating Elements */}
      <div ref={parallaxRef} className="absolute inset-0 transition-transform duration-1000 ease-out">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-white text-sm font-medium">Digital Marketing Excellence</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          <span className="inline-block transform hover:scale-110 transition-transform duration-300">NestMark</span>{' '}
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-75">Solutions</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent inline-block transform hover:scale-110 transition-transform duration-300 delay-150">
            Digital Marketing
          </span>{' '}
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-200">for</span>{' '}
          <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-300">Real Estate</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delayed">
          Driving Growth and Engagement Through Tailored Online Strategies.
        </p>

        {/* CTA Button */}
        <Button
          className="bg-white text-gray-900 hover:bg-cyan-400 hover:text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Button>

        {/* Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {heroCards.map((card, index) => (
            <div
              key={card.title}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:bg-white/10 hover:border-cyan-400/50 cursor-pointer"
              style={{
                animation: `slide-up 0.8s ease-out ${index * 0.2}s backwards`,
                perspective: '1000px'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-2xl transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {card.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;