import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { apiService } from '../services/api';

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiService.submitContact(formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      setFormData({ firstName: '', phone: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-x-1/2 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200 mb-6">
            <Send className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-800 text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              with Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are here to help you with all your digital marketing needs. Contact us today to elevate your business to new heights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 hover:border-cyan-300 card-3d">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 pulse-glow">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">Connect</h3>
                  <a href="tel:+917975676409" className="text-gray-600 hover:text-cyan-600 transition-colors text-lg">
                    +91 7975676409
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 hover:border-cyan-300 card-3d">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/50 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 pulse-glow">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">Support</h3>
                  <a href="mailto:Marketing@nestmarksolutions.com" className="text-gray-600 hover:text-cyan-600 transition-colors text-lg break-all">
                    Marketing@nestmarksolutions.com
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Image */}
            <div className="hidden lg:block relative h-64 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-3xl overflow-hidden shadow-2xl card-3d">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-20 tilt-animation">NM</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your First Name *
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-6 rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  placeholder="Enter your first name"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-6 rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  placeholder="Enter your phone number"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-6 rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  placeholder="Enter your email"
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 min-h-32"
                  placeholder="Tell us about your project"
                  disabled={loading}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed magnetic-button"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Let's Connect
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;