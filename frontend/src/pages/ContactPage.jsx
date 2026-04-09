import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { apiService } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ContactInfoSection } from '../components/ContactInfo';
import { ContactForm } from '../components/ContactForm';

const ContactPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiService.submitContact(formData);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        duration: 5000,
      });

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-all">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            Get in Touch{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              with Us
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl animate-fade-in-delayed">
            We are here to assist you with your digital marketing needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 animate-float"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 translate-x-1/2 animate-float-delayed"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfoSection />
            <ContactForm 
              formData={formData}
              loading={loading}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;