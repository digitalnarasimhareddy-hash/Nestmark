import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Send, Loader2 } from 'lucide-react';

export const ContactForm = ({ formData, loading, handleChange, handleSubmit }) => (
  <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">
      Send us a Message
    </h2>
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
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
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
            Submit Your Inquiry
            <Send className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </>
        )}
      </Button>
    </form>
  </div>
);
