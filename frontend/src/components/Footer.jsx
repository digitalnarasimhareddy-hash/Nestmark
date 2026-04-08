import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/share/1Fzkn6LbuD/', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: Twitter, url: 'https://x.com/', label: 'Twitter' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/nestmark-solutions/', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
              <div>
                <span className="font-bold text-xl text-white">NESTMARK</span>
                <p className="text-xs text-gray-400">SOLUTIONS</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              We elevate your brand through digital marketing strategies.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              USEFUL LINKS
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-4 transition-all duration-300 mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ENGAGEMENT
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 font-semibold">Connect With Us</p>
              <a
                href="mailto:marketing@nestmarksolutions.com"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                marketing@nestmarksolutions.com
              </a>
              <a
                href="tel:+917975676409"
                className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                +91 7975676409
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-gray-400">
              © {currentYear}{' '}
              <a
                href="https://nestmarksolution.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                NestMark Solutions
              </a>
              {' '}All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;