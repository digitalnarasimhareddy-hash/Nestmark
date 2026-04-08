import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// API Service Layer
export const apiService = {
  // Services
  getServices: async () => {
    try {
      const response = await axios.get(`${API}/services`);
      return response.data;
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  },

  // Blogs
  getBlogs: async (limit = 10, featured = null) => {
    try {
      const params = { limit };
      if (featured !== null) {
        params.featured = featured;
      }
      const response = await axios.get(`${API}/blogs`, { params });
      return response.data;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  getBlogBySlug: async (slug) => {
    try {
      const response = await axios.get(`${API}/blogs/${slug}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },

  // Contact
  submitContact: async (contactData) => {
    try {
      const response = await axios.post(`${API}/contact`, contactData);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
  },
};
